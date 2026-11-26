"""Convertit un fichier Rhino .3dm en GLB web + métadonnées géométriques.

Principes :
- Le fichier CAO est seulement lu, jamais réécrit. Son empreinte est comparée à celle de la
  recette : une différence (fichier retravaillé dans Rhino) est signalée, puis la nouvelle
  version est convertie et son empreinte est enregistrée dans les métadonnées.
- Aucune géométrie n'est créée : on réutilise les maillages de rendu enregistrés
  par Rhino dans le .3dm (avec leurs normales), regroupés selon une recette.
- Tout objet des calques de production doit être affecté à exactement une pièce.
- Si un STL de référence est fourni, le volume de métal de chaque bague est
  recoupé avec la coque STL correspondante. Sinon, il est mesuré sur l'union
  booléenne des solides fermés du fichier (mesure seulement : rien n'est exporté).

Usage :
    python pipeline/extract_3dm.py pipeline/recipes/ring-001.json \
        --out-glb cad/intermediate/ring-001/ring-001.raw.glb \
        --out-meta src/models/ring-001/geometry.json
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

import manifold3d
import numpy as np
import rhino3dm as r
import trimesh

DIAMOND_DENSITY_G_CM3 = 3.52  # densité du diamant (carbone pur)
CARAT_G = 0.2

# Rhino est en Z vers le haut, en mm ; glTF est en Y vers le haut, en mètres.
Z_UP_TO_Y_UP = np.array(
    [[1, 0, 0, 0], [0, 0, 1, 0], [0, -1, 0, 0], [0, 0, 0, 1]], dtype=float
)
MM_TO_M = 0.001


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def xform_to_np(x: r.Transform) -> np.ndarray:
    return np.array(
        [[getattr(x, f"M{i}{j}") for j in range(4)] for i in range(4)], dtype=float
    )


def rhino_mesh_to_trimesh(m: r.Mesh) -> trimesh.Trimesh:
    v = np.array([[p.X, p.Y, p.Z] for p in m.Vertices], dtype=float)
    n = np.array([[p.X, p.Y, p.Z] for p in m.Normals], dtype=float)
    faces = []
    for a, b, c, d in m.Faces:
        faces.append([a, b, c])
        if c != d:
            faces.append([a, c, d])
    tm = trimesh.Trimesh(v, np.array(faces, dtype=np.int64), process=False)
    if len(n) == len(v):
        tm.vertex_normals = n
    return tm


def brep_render_mesh(b: r.Brep) -> trimesh.Trimesh:
    parts = []
    for face in b.Faces:
        m = face.GetMesh(r.MeshType.Any)
        if m is None:
            raise RuntimeError(
                "Une face n'a pas de maillage de rendu enregistré : ouvrir le fichier "
                "dans Rhino en mode Rendu puis l'enregistrer, ou exporter en glTF/OBJ."
            )
        parts.append(rhino_mesh_to_trimesh(m))
    return concat(parts)


def concat(meshes: list[trimesh.Trimesh]) -> trimesh.Trimesh:
    """Concatène en conservant les normales enregistrées par Rhino."""
    verts, norms, faces, off = [], [], [], 0
    for m in meshes:
        verts.append(m.vertices)
        norms.append(m.vertex_normals)
        faces.append(m.faces + off)
        off += len(m.vertices)
    out = trimesh.Trimesh(np.vstack(verts), np.vstack(faces), process=False)
    out.vertex_normals = np.vstack(norms)
    return out


def transformed(m: trimesh.Trimesh, mat: np.ndarray) -> trimesh.Trimesh:
    v = trimesh.transform_points(m.vertices, mat)
    rot = mat[:3, :3]
    nrm = m.vertex_normals @ np.linalg.inv(rot)  # (R^-1)^T appliqué aux normales
    nrm /= np.linalg.norm(nrm, axis=1, keepdims=True)
    faces = m.faces if np.linalg.det(rot) > 0 else m.faces[:, ::-1]
    out = trimesh.Trimesh(v, faces, process=False)
    out.vertex_normals = nrm
    return out


@dataclass
class Obj:
    id: str
    layer: str
    groups: set[str]
    geometry: object
    block: str | None = None
    xform: np.ndarray | None = None
    name: str = ""
    claimed_by: list[str] = field(default_factory=list)


def matches(o: Obj, sel: dict) -> bool:
    if o.layer != sel["layer"]:
        return False
    if "block" in sel and o.block != sel["block"]:
        return False
    # Nom donné à l'objet dans Rhino (ex. « Prong On Surface ») ; `unnamed` : objets sans nom.
    if "name" in sel and o.name != sel["name"]:
        return False
    if sel.get("unnamed") and o.name:
        return False
    # Identifiants d'objets (fichier figé par son empreinte) : quand ni calque, ni groupe, ni nom ne distinguent deux pièces.
    if "ids" in sel and o.id not in sel["ids"]:
        return False
    if "idsNone" in sel and o.id in sel["idsNone"]:
        return False
    if sel.get("ungrouped") and o.groups:
        return False
    if "groupsAll" in sel and not set(sel["groupsAll"]) <= o.groups:
        return False
    if "groupsAny" in sel and not (set(sel["groupsAny"]) & o.groups):
        return False
    if "groupsNone" in sel and set(sel["groupsNone"]) & o.groups:
        return False
    return True




STONE_SHAPES = {"round", "marquise", "oval", "pear", "emerald", "princess", "heart"}


def stone_shape(block: str | None) -> str:
    """Forme d'après le nom du bloc Matrix : « Diamond_Round », « Diamond_Round 01 », « Diamond_Marquise »…"""
    m = re.match(r"Diamond_([A-Za-z]+)", block or "")
    shape = m.group(1).lower() if m else ""
    return shape if shape in STONE_SHAPES else "unknown"


CRACK_TOLERANCE_MM = 0.02  # largeur maximale d'une fissure d'arête refermée pour la mesure du volume


def close_edge_cracks(w: trimesh.Trimesh, tol: float = CRACK_TOLERANCE_MM) -> int:
    """Referme les fissures d'arête d'un maillage de rendu (sommets « en T »), pour une mesure de volume seulement.

    Le long de l'arête commune à deux faces d'une polysurface, les deux maillages de rendu n'ont pas toujours les mêmes
    sommets : l'un a une arête droite de A à B, l'autre suit la courbe par des sommets intermédiaires. Il reste une
    fissure de quelques microns. Chaque arête ouverte est recoupée aux sommets ouverts qui la longent (à moins de `tol`),
    ce qui fait coïncider les deux bords. Aucun sommet n'est créé ni déplacé. Renvoie le nombre d'arêtes recoupées.
    """
    split_total = 0
    for _ in range(8):
        faces = np.asarray(w.faces)
        directed = np.vstack([faces[:, [0, 1]], faces[:, [1, 2]], faces[:, [2, 0]]])
        owner = np.tile(np.arange(len(faces)), 3)
        key = np.sort(directed, axis=1)
        _, inverse, counts = np.unique(key, axis=0, return_inverse=True, return_counts=True)
        open_idx = np.flatnonzero(counts[inverse.ravel()] == 1)
        if len(open_idx) == 0:
            break
        open_vertices = np.unique(directed[open_idx])
        pts = np.asarray(w.vertices)[open_vertices]
        replaced: dict[int, list[list[int]]] = {}
        for i in open_idx:
            face = int(owner[i])
            if face in replaced:
                continue  # une arête par triangle et par passe ; la passe suivante traite les autres
            a, b = (int(x) for x in directed[i])
            pa, pb = w.vertices[a], w.vertices[b]
            ab = pb - pa
            length2 = float(ab @ ab)
            if length2 == 0:
                continue
            t = (pts - pa) @ ab / length2
            dist = np.linalg.norm(pts - (pa + np.outer(t, ab)), axis=1)
            between = (t > 1e-9) & (t < 1 - 1e-9) & (dist <= tol) & (open_vertices != a) & (open_vertices != b)
            if not between.any():
                continue
            chain = [a, *(int(v) for v in open_vertices[between][np.argsort(t[between])]), b]
            c = int(next(v for v in faces[face] if v != a and v != b))
            replaced[face] = [[chain[k], chain[k + 1], c] for k in range(len(chain) - 1)]
            split_total += 1
        if not replaced:
            break
        keep = np.ones(len(faces), dtype=bool)
        keep[list(replaced)] = False
        w.faces = np.vstack([faces[keep], *(np.array(f, dtype=faces.dtype) for f in replaced.values())])
    return split_total


def solid_for_volume(m: trimesh.Trimesh, report: dict | None = None) -> trimesh.Trimesh | None:
    """Copie fermée d'un maillage de rendu, pour une mesure de volume : sommets soudés, faces dégénérées ou en double retirées.

    Si le maillage reste ouvert, ses fissures d'arête sont refermées (`close_edge_cracks`) ; `report["cracksClosed"]` compte
    alors les solides concernés. Un maillage encore ouvert après cela (vrai trou) n'est pas un solide : `None`.
    """
    w = m.copy()
    w.merge_vertices(digits_vertex=4)
    w.update_faces(w.nondegenerate_faces())
    w.update_faces(w.unique_faces())
    w.remove_unreferenced_vertices()
    if not w.is_watertight:
        if not close_edge_cracks(w):
            return None
        w.update_faces(w.nondegenerate_faces())
        if not w.is_watertight:
            return None
        if report is not None:
            report["cracksClosed"] = report.get("cracksClosed", 0) + 1
    if w.volume < 0:
        w.invert()
    return w


def watertight_volume_mm3(m: trimesh.Trimesh) -> float | None:
    """Volume d'un maillage de rendu fermé (pierre) ; `None` s'il n'est pas un solide."""
    w = solid_for_volume(m)
    return float(w.volume) if w is not None else None


def union_volume_mm3(meshes: list[trimesh.Trimesh], report: dict | None = None) -> tuple[float, float]:
    """Volume de l'union booléenne de solides fermés qui se chevauchent (griffes dans le corps…), et somme brute des volumes."""
    solids, total = [], 0.0
    for m in meshes:
        w = solid_for_volume(m, report)
        if w is None:
            raise SystemExit("Volume de métal : une polysurface n'est pas un solide fermé ; fournir un STL de référence dans la recette.")
        total += float(w.volume)
        solid = manifold3d.Manifold(manifold3d.Mesh(vert_properties=np.asarray(w.vertices, dtype=np.float32), tri_verts=np.asarray(w.faces, dtype=np.uint32)))
        if solid.is_empty():
            raise SystemExit("Volume de métal : un solide est refusé par manifold3d ; fournir un STL de référence dans la recette.")
        solids.append(solid)
    union = manifold3d.Manifold.batch_boolean(solids, manifold3d.OpType.Add)
    return float(union.volume()), total


def inner_diameter_mm(m: trimesh.Trimesh, sectors: int = 180) -> float:
    """Diamètre intérieur d'un anneau dont le trou suit l'axe Y de Rhino.

    Profil intérieur : dans chaque secteur d'angle, le sommet le plus proche de l'axe. Un cercle des moindres carrés y est
    ajusté, puis les points plus éloignés que le cercle (ouverture sous la tête, épaules, bords d'un intérieur bombé) sont
    écartés et l'ajustement recommence : il reste le cercle le plus étroit, celui du doigt.
    """
    xz = m.vertices[:, [0, 2]]
    centre = (xz.min(axis=0) + xz.max(axis=0)) / 2
    radius = 0.0
    for _ in range(6):
        rel = xz - centre
        rad = np.linalg.norm(rel, axis=1)
        sector = ((np.arctan2(rel[:, 1], rel[:, 0]) + math.pi) / (2 * math.pi) * sectors).astype(int) % sectors
        order = np.lexsort((rad, sector))
        first = np.concatenate([[True], sector[order][1:] != sector[order][:-1]])
        pts = xz[order[first]]
        keep = np.ones(len(pts), dtype=bool)
        for _ in range(20):
            q = pts[keep]
            sol, *_ = np.linalg.lstsq(np.column_stack([2 * q, np.ones(len(q))]), (q**2).sum(axis=1), rcond=None)
            centre = sol[:2]
            radius = math.sqrt(sol[2] + (centre**2).sum())
            inside = np.linalg.norm(pts - centre, axis=1) - radius <= 0.01
            if inside.sum() < 12 or (inside == keep).all():
                break
            keep = inside
    return 2 * radius


def stone_record(o: Obj, block_mesh: trimesh.Trimesh, world: trimesh.Trimesh) -> dict:
    """Dimensions mesurées dans le repère du bloc, puis mises à l'échelle."""
    scale = np.linalg.norm(o.xform[:3, :3], axis=0)  # échelle par axe local
    ext = block_mesh.extents * scale
    length, width = sorted(ext[:2], reverse=True)
    vol = watertight_volume_mm3(world)
    return {
        "block": o.block,
        "shape": stone_shape(o.block),
        "lengthMm": round(float(length), 3),
        "widthMm": round(float(width), 3),
        "depthMm": round(float(ext[2]), 3),
        "volumeMm3": round(vol, 4) if vol else None,
        # Estimation purement volumétrique, à remplacer par le poids réel de la pierre.
        "caratEstimate": round(vol * DIAMOND_DENSITY_G_CM3 / 1000 / CARAT_G, 4) if vol else None,
        "positionMm": [round(float(c), 3) for c in o.xform[:3, 3]],
    }


def run(recipe_path: Path, out_glb: Path, out_meta: Path) -> dict:
    recipe = json.loads(recipe_path.read_text(encoding="utf-8"))
    root = recipe_path.resolve().parents[2]
    cad = root / recipe["source"]["cad"]
    digest = sha256(cad)
    if digest != recipe["source"]["sha256"]:
        print(
            f"Avertissement : {cad.name} diffère de la version de la recette "
            f"(empreinte {digest}). Conversion de la nouvelle version ; mettre à jour "
            f"« sha256 » dans {recipe_path.name} une fois le résultat validé.",
            file=sys.stderr,
        )

    f = r.File3dm.Read(str(cad))
    if f.Settings.ModelUnitSystem != r.UnitSystem.Millimeters:
        raise SystemExit(f"Unité non gérée : {f.Settings.ModelUnitSystem}")
    group_names = {g.Index: g.Name for g in f.Groups}
    idefs = {d.Id: d for d in f.InstanceDefinitions}
    by_id = {str(o.Attributes.Id): o for o in f.Objects}

    block_cache: dict[str, trimesh.Trimesh] = {}

    def block_mesh(name: str, d) -> trimesh.Trimesh:
        if name not in block_cache:
            block_cache[name] = concat(
                [brep_render_mesh(by_id[str(i)].Geometry) for i in d.GetObjectIds()]
            )
        return block_cache[name]

    objs: list[Obj] = []
    finger_size = None
    rail_prefix = recipe.get("fingerSizeCurvePrefix")
    for o in f.Objects:
        layer = f.Layers[o.Attributes.LayerIndex].Name
        name = o.Attributes.Name or ""
        if rail_prefix and name.startswith(rail_prefix):
            bb = o.Geometry.GetBoundingBox()
            finger_size = {
                "label": name[len(rail_prefix):],
                "innerDiameterMm": round(max(bb.Max.X - bb.Min.X, bb.Max.Z - bb.Min.Z), 3),
            }
        if layer not in recipe["productionLayers"]:
            continue
        g = o.Geometry
        groups = {group_names[i] for i in (o.Attributes.GetGroupList() or [])}
        if isinstance(g, r.InstanceReference):
            d = idefs[g.ParentIdefId]
            objs.append(Obj(str(o.Attributes.Id), layer, groups, g, d.Name, xform_to_np(g.Xform), name))
        elif isinstance(g, r.Brep):
            objs.append(Obj(str(o.Attributes.Id), layer, groups, g, name=name))
        else:
            raise SystemExit(f"Type non géré sur {layer} : {type(g).__name__}")

    scene = trimesh.Scene()
    meta_pieces: dict[str, dict] = {}
    metal_solids: dict[str, list[trimesh.Trimesh]] = {}
    part_meshes: dict[tuple[str, str], trimesh.Trimesh] = {}
    for piece_id, piece in recipe["pieces"].items():
        parts_meta = []
        for part in piece["parts"]:
            selected = [o for o in objs if matches(o, part["select"])]
            if not selected:
                raise SystemExit(f"Aucun objet pour {piece_id}/{part['id']}")
            meshes, stones = [], []
            for o in selected:
                o.claimed_by.append(f"{piece_id}/{part['id']}")
                if o.block:
                    bm = block_mesh(o.block, idefs[o.geometry.ParentIdefId])
                    wm = transformed(bm, o.xform)
                    stones.append(stone_record(o, bm, wm))
                    meshes.append(wm)
                else:
                    meshes.append(brep_render_mesh(o.geometry))
                    if part["kind"] == "metal":
                        metal_solids.setdefault(piece_id, []).append(meshes[-1])
            mesh = concat(meshes)
            part_meshes[(piece_id, part["id"])] = mesh
            node = f"{piece_id}__{part['id']}"
            web = transformed(mesh, Z_UP_TO_Y_UP)
            web.apply_scale(MM_TO_M)
            web.visual = trimesh.visual.TextureVisuals(
                material=trimesh.visual.material.PBRMaterial(
                    name="metal" if part["kind"] == "metal" else "diamond"
                )
            )
            scene.add_geometry(web, node_name=node, geom_name=node)
            pm = {
                "id": part["id"],
                "node": node,
                "kind": part["kind"],
                "role": part["role"],
                "sourceObjects": len(selected),
                "triangles": int(len(mesh.faces)),
                "boundsMm": np.round(mesh.bounds, 3).tolist(),
            }
            if part.get("slot"):
                pm["slot"] = part["slot"]
            if stones:
                pm["stones"] = stones
            parts_meta.append(pm)
        meta_pieces[piece_id] = {"label": piece["label"], "parts": parts_meta}

    unclaimed = [o for o in objs if not o.claimed_by]
    doubled = [o for o in objs if len(o.claimed_by) > 1]
    if unclaimed or doubled:
        raise SystemExit(
            f"Affectation incomplète : {len(unclaimed)} objets non affectés, "
            f"{len(doubled)} affectés plusieurs fois : "
            + "; ".join(f"{o.layer} {sorted(o.groups)} {o.block}" for o in unclaimed + doubled)
        )

    # Recoupement avec le STL de référence : une coque fermée par bague.
    stl_check = None
    ref = recipe["source"].get("referenceStl")
    if ref:
        stl_path = root / ref
        if sha256(stl_path) != recipe["source"]["referenceStlSha256"]:
            print(f"Avertissement : {stl_path.name} diffère de la version de la recette.", file=sys.stderr)
        bodies = trimesh.load(str(stl_path), force="mesh").split(only_watertight=True)
        stl_check = []
        for piece_id, pm in meta_pieces.items():
            metal_bounds = np.array([p["boundsMm"] for p in pm["parts"] if p["kind"] == "metal"])
            lo, hi = metal_bounds[:, 0].min(axis=0), metal_bounds[:, 1].max(axis=0)
            best = min(bodies, key=lambda b: float(np.abs(b.bounds - np.array([lo, hi])).max()))
            dev = float(np.abs(best.bounds - np.array([lo, hi])).max())
            pm["metalVolumeMm3"] = round(float(best.volume), 2)
            pm["metalVolumeSource"] = "Coque fermée correspondante du STL de référence"
            pm["metalBoundsMm"] = np.round(np.array([lo, hi]), 3).tolist()
            stl_check.append({"piece": piece_id, "maxBoundsDeviationMm": round(dev, 4)})
            if dev > 0.01:
                raise SystemExit(f"La pièce {piece_id} ne correspond à aucune coque du STL (écart {dev} mm)")
    else:
        # Pas de STL : union booléenne des solides de métal de chaque pièce (les griffes et les paniers pénètrent le corps).
        for piece_id, pm in meta_pieces.items():
            report: dict = {}
            volume, raw_sum = union_volume_mm3(metal_solids[piece_id], report)
            metal_bounds = np.array([p["boundsMm"] for p in pm["parts"] if p["kind"] == "metal"])
            pm["metalVolumeMm3"] = round(volume, 2)
            pm["metalVolumeSource"] = "Union booléenne des solides fermés du fichier CAO (aucun STL de référence)"
            pm["metalSolidsSumMm3"] = round(raw_sum, 2)
            if report.get("cracksClosed"):
                # Pour la mesure seulement : le modèle affiché garde le maillage du fichier.
                pm["metalSolidsCracksClosed"] = report["cracksClosed"]
            pm["metalBoundsMm"] = np.round(np.array([metal_bounds[:, 0].min(axis=0), metal_bounds[:, 1].max(axis=0)]), 3).tolist()

    # Taille de doigt mesurée sur l'anneau quand le fichier n'a pas de courbe de taille (recette : `fingerSizeFrom`).
    measure = recipe.get("fingerSizeFrom")
    if finger_size is None and measure:
        diameter = inner_diameter_mm(part_meshes[(measure["piece"], measure["part"])])
        half_sizes = round(math.pi * diameter * 2)  # taille française = circonférence intérieure en mm, à la demi-taille
        finger_size = {
            "label": f"France {half_sizes // 2}" + (" 1/2" if half_sizes % 2 else ""),
            "innerDiameterMm": round(diameter, 3),
            "source": "Mesuré sur l'anneau (le fichier n'a pas de courbe de taille) ; taille française = circonférence intérieure arrondie à la demi-taille",
        }

    meta = {
        "$comment": "Fichier généré par pipeline/extract_3dm.py. Ne pas modifier à la main.",
        "modelId": recipe["modelId"],
        "source": {
            "file": Path(recipe["source"]["cad"]).name,
            "sha256": digest,
            "application": f.ApplicationName,
            "units": "mm",
            "absoluteToleranceMm": f.Settings.ModelAbsoluteTolerance,
        },
        "fingerSize": finger_size,
        "pieces": meta_pieces,
        "stlCheck": stl_check,
        "axes": "glTF : Y vers le haut, mètres. Métadonnées : repère Rhino (Z vers le haut), mm.",
    }

    out_glb.parent.mkdir(parents=True, exist_ok=True)
    out_meta.parent.mkdir(parents=True, exist_ok=True)
    scene.export(str(out_glb), include_normals=True)
    out_meta.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return meta


def main(argv: list[str]) -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("recipe", type=Path)
    ap.add_argument("--out-glb", type=Path, required=True)
    ap.add_argument("--out-meta", type=Path, required=True)
    a = ap.parse_args(argv)
    meta = run(a.recipe, a.out_glb, a.out_meta)
    for pid, p in meta["pieces"].items():
        tris = sum(x["triangles"] for x in p["parts"])
        stones = sum(len(x.get("stones", [])) for x in p["parts"])
        print(f"{pid} {p['label']} : {tris} triangles, {stones} pierres, métal {p.get('metalVolumeMm3')} mm³")


if __name__ == "__main__":
    main(sys.argv[1:])
