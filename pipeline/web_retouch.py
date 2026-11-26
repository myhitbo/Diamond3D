"""Retouches « web uniquement » d'un modèle : le fichier de fabrication n'est jamais modifié.

Le fichier CAO est préparé pour la fonte : les griffes sont des tiges droites, plus longues que
sur le bijou fini, et les paniers des pierres ont des plaques basses qui, vues en enfilade, dessinent
des « 8 ». L'atelier demande, pour le web seulement, de rabattre les griffes et de supprimer ces « 8 »
(synthèse du 3/11/2026, docs/REPONSES_ATELIER.md).

Ce script calcule les retouches et les écrit en JSON ; scripts/models/apply-web-edits.mjs les applique.
Il ne crée aucune géométrie : il déplace l'extrémité de chaque griffe et supprime des faces existantes.

Deux sortes de griffes : les tiges droites des petites pierres (`prongs`, ring-001) et les grandes griffes effilées
d'une pierre centrale (`claws`, ring-002, demande du propriétaire du 26/11/2026 : griffes courtes, comme sur une bague finie).

Usage : python -I pipeline/web_retouch.py <modèle.glb> <recette.json> <retouches.json>
"""

import json
import sys

import numpy as np
import trimesh
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
from scipy.spatial import cKDTree


def load_scene(path):
    """Maillages non retraités (ordre des sommets et des faces conservé) avec leur transformation."""
    sc = trimesh.load(path, force="scene", process=False)
    out = {}
    for name, g in sc.geometry.items():
        T = sc.graph.get(sc.graph.geometry_nodes[name][0])[0]
        out[name] = dict(mesh=g, T=T, V=trimesh.transform_points(g.vertices, T) * 1000.0)  # mm, repère glTF
    return out


def face_groups(mesh):
    return trimesh.graph.connected_components(mesh.face_adjacency, nodes=np.arange(len(mesh.faces)), min_len=1)


def stones(entry, tol=0.02):
    """Pierres d'un maillage de gemmes : regroupe les facettes qui se touchent."""
    m, V = entry["mesh"], entry["V"]
    n = len(V)
    pairs = np.array(list(cKDTree(V).query_pairs(tol)) or [(0, 0)])
    e = np.vstack([pairs, m.faces[:, [0, 1]], m.faces[:, [1, 2]]])
    _, lab = connected_components(coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(n, n)), directed=False)
    return [V[lab == i] for i in np.unique(lab) if (lab == i).sum() > 10]


def stone_frame(s, ring_centre):
    """Centre, axe vers l'extérieur de la bague, rayon au rondiste, hauteurs du rondiste et de la table."""
    c = s.mean(0)
    _, _, vt = np.linalg.svd(s - c, full_matrices=False)
    u = vt[2]
    radial = c - ring_centre
    radial[2] = 0
    if u @ radial < 0:
        u = -u
    h = (s - c) @ u
    rho = np.linalg.norm((s - c) - np.outer(h, u), axis=1)
    R = rho.max()
    girdle = h[rho > R - 0.02].mean()
    return dict(c=c, u=u, R=R, h_girdle=girdle, h_table=h.max())


def cylinders(entry):
    """Faces latérales des tiges (griffes) : longues, fines, à rayon constant."""
    m, V = entry["mesh"], entry["V"]
    out = []
    for g in face_groups(m):
        vi = np.unique(m.faces[g])
        v = V[vi]
        ctr = v.mean(0)
        _, _, vt = np.linalg.svd(v - ctr, full_matrices=False)
        a = vt[0]
        t = (v - ctr) @ a
        L = t.max() - t.min()
        r = np.linalg.norm((v - ctr) - np.outer(t, a), axis=1)
        if L > 2.5 * r.max() and 0.22 < r.mean() < 1.0 and r.std() < 0.15 * r.mean():
            out.append(dict(vi=vi, ctr=ctr, a=a, L=L, r=r.mean(), tmin=t.min(), tmax=t.max()))
    return out


def prong_edits(entry, gem_entries, ring_centre, params):
    """Raccourcit chaque griffe et rabat son extrémité sur la couronne de la pierre qu'elle tient."""
    m, V = entry["mesh"], entry["V"]
    S = [stone_frame(s, ring_centre) for g in gem_entries for s in stones(g)]
    groups = face_groups(m)
    gverts = [np.unique(m.faces[g]) for g in groups]
    moves, report = {}, []
    for cy in cylinders(entry):
        a = cy["a"]
        e0, e1 = cy["ctr"] + a * cy["tmin"], cy["ctr"] + a * cy["tmax"]
        if np.linalg.norm((e0 - ring_centre)[:2]) > np.linalg.norm((e1 - ring_centre)[:2]):
            a, e0, e1 = -a, e1, e0
        # Pierre tenue : la plus proche de l'extrémité.
        st = min(S, key=lambda s: np.linalg.norm(e1 - s["c"]))
        u, c = st["u"], st["c"]
        h_top = (e1 - c) @ u
        side = (e1 - c) - h_top * u
        d0 = np.linalg.norm(side)
        if h_top <= st["h_girdle"] or d0 > st["R"] + cy["r"] + params["maxGapMm"]:
            continue  # tige sous le rondiste ou trop loin d'une pierre : pas une griffe à rabattre
        L = np.linalg.norm(e1 - e0)
        # Extrémité : sommets de la tige proches du bout + embout (composantes collées au bout).
        top_vi = set(cy["vi"][((V[cy["vi"]] - e0) @ a) > 0.5 * L].tolist())
        for vi in gverts:
            v = V[vi]
            t = (v - e0) @ a
            off = np.linalg.norm((v - e0) - np.outer(t, a), axis=1)
            if t.min() > L - 2.0 * cy["r"] and off.max() < 1.3 * cy["r"] and len(vi) < 400:
                top_vi.update(vi.tolist())
        top_vi = np.array(sorted(top_vi))
        tip = V[top_vi]
        tip_top = ((tip - c) @ u).max()
        # Cible : sommet de la griffe à mi-hauteur de la couronne, au-dessus du bord de la pierre.
        h_target = st["h_girdle"] + params["crownFraction"] * (st["h_table"] - st["h_girdle"])
        drop = max(0.0, tip_top - h_target)
        d_target = min(d0, params["crownRadiusFraction"] * st["R"] + params["beadOverlap"] * cy["r"])
        w = -side / d0 if d0 > 1e-6 else np.zeros(3)
        delta = -drop * u + (d0 - d_target) * w
        for i in top_vi:
            moves[int(i)] = V[i] + delta
        report.append(dict(lengthMm=round(L, 2), radiusMm=round(cy["r"], 2), dropMm=round(drop, 2), leanMm=round(d0 - d_target, 2)))
    return moves, report


def claw_edits(entry, gem_entries, ring_centre, params):
    """Raccourcit les grandes griffes d'une pierre centrale (griffes effilées, pas des tiges droites).

    Dans le fichier de fabrication, ces griffes montent au-dessus de la table : elles sont coupées et rabattues au
    sertissage. Pour le web, la partie située au-dessus du rondiste est ramenée à une fraction de la hauteur de la
    couronne. Chaque sommet garde sa place autour de l'axe de la griffe, mais cet axe est suivi moins haut : la griffe
    retouchée épouse la couronne comme la griffe d'origine à la même hauteur, sans pénétrer davantage dans la pierre.
    Le bout effilé, tassé sur une courte hauteur, devient l'extrémité arrondie d'une griffe finie.
    Aucune géométrie n'est créée : seuls des sommets sont déplacés.
    """
    m, V = entry["mesh"], entry["V"]
    st = max((stone_frame(s, ring_centre) for g in gem_entries for s in stones(g)), key=lambda f: f["R"])
    u, c = st["u"], st["c"]
    # Repère du plan du rondiste.
    e1 = np.cross(u, [0.0, 0.0, 1.0])
    if np.linalg.norm(e1) < 1e-6:
        e1 = np.cross(u, [1.0, 0.0, 0.0])
    e1 /= np.linalg.norm(e1)
    e2 = np.cross(u, e1)
    h = (V - c) @ u
    lat = np.column_stack([(V - c) @ e1, (V - c) @ e2])
    h0 = st["h_girdle"]
    h_target = h0 + params["crownFraction"] * (st["h_table"] - h0)

    # Griffes : pièces qui dépassent le rondiste et descendent loin dessous.
    claws = []
    for g in face_groups(m):
        vi = np.unique(m.faces[g])
        if h[vi].max() - h0 > params["minAboveGirdleMm"] and np.ptp(h[vi]) > params["minLengthMm"]:
            top = h[vi].max()
            # Axe de la griffe en fonction de la hauteur : centres de tranches, ajustés par un polynôme du second degré.
            lo, hi = h0 - 1.5, top - 0.35
            edges = np.linspace(lo, hi, 13)
            hs, cs = [], []
            for a, b in zip(edges[:-1], edges[1:]):
                sel = vi[(h[vi] >= a) & (h[vi] < b)]
                if len(sel) >= 5:
                    hs.append((a + b) / 2)
                    cs.append((lat[sel].min(0) + lat[sel].max(0)) / 2)
            if len(hs) < 4:
                continue
            hs, cs = np.array(hs), np.array(cs)
            axis = [np.polyfit(hs, cs[:, k], 2) for k in range(2)]
            claws.append(dict(top=top, axis=axis, at_girdle=np.array([np.polyval(axis[k], h0) for k in range(2)]), radius=float(np.ptp(lat[vi[np.abs(h[vi] - h0) < 0.3]], axis=0).max() / 2)))
    moves, report = {}, []
    if not claws:
        return moves, report
    centre_at = lambda cl, hh: np.column_stack([np.polyval(cl["axis"][k], hh) for k in range(2)])
    above = np.where(h > h0)[0]
    # Chaque sommet au-dessus du rondiste appartient à la griffe dont l'axe est le plus proche (embouts compris).
    dist = np.stack([np.linalg.norm(lat[above] - centre_at(cl, h[above]), axis=1) for cl in claws])
    owner = dist.argmin(0)
    counts = [0] * len(claws)
    for j, cl in enumerate(claws):
        idx = above[(owner == j) & (dist[j] < 2.5 * cl["radius"])]
        if not len(idx):
            continue
        t = np.clip((h[idx] - h0) / (cl["top"] - h0), 0.0, 1.0)
        h_new = h0 + (h_target - h0) * np.sin(t * np.pi / 2)
        lat_new = lat[idx] - centre_at(cl, h[idx]) + centre_at(cl, h_new)
        for i, hn, ln in zip(idx, h_new, lat_new):
            moves[int(i)] = c + hn * u + ln[0] * e1 + ln[1] * e2
        counts[j] = len(idx)
        report.append(dict(heightAboveGirdleBeforeMm=round(float(cl["top"] - h0), 2), heightAboveGirdleAfterMm=round(float(h_target - h0), 2), radiusMm=round(cl["radius"], 2), vertices=int(len(idx))))
    return moves, report


def basket_bottom_faces(entry, gem_entries, ring_centre, tmin, tmax):
    """Faces des pièces situées sur l'axe de chaque pierre, entre tmin et tmax sous son centre."""
    m, V = entry["mesh"], entry["V"]
    S = [stone_frame(s, ring_centre) for g in gem_entries for s in stones(g)]
    faces = set()
    for st in S:
        for g in face_groups(m):
            v = V[np.unique(m.faces[g])]
            gc = v.mean(0)
            d = gc - st["c"]
            t = d @ st["u"]
            # Plaque de la taille de la pierre (pas un petit bouchon de tige).
            wide = np.ptp(v, axis=0).max() > 1.4 * st["R"]
            if wide and np.linalg.norm(d - t * st["u"]) < 0.35 and tmin <= t <= tmax:
                faces.update(int(f) for f in g)
    return sorted(faces)


def open_end_caps(entry, deleted_faces):
    """Bouchons plats pour les bouts de tiges que la suppression a laissés ouverts.

    Les plaques basses supprimées masquaient le bout inférieur de certaines tiges (le fichier CAO
    ne les ferme pas). Pour chaque bout de tige qui n'est plus recouvert par aucune face restante,
    on ajoute un disque plat dans le plan du bout, avec une normale axiale.
    """
    m, V = entry["mesh"], entry["V"]
    deleted = set(deleted_faces)
    keep = np.array([f for f in range(len(m.faces)) if f not in deleted])
    kept_vi = np.unique(m.faces[keep]) if len(keep) else np.array([], dtype=int)
    kept_V = V[kept_vi]
    cyl_vi = set()
    cyls = cylinders(entry)
    for cy in cyls:
        cyl_vi.update(cy["vi"].tolist())
    others = np.array([i for i in kept_vi if i not in cyl_vi])
    tree = cKDTree(V[others]) if len(others) else None
    add_v, add_f = [], []
    for cy in cyls:
        a = cy["a"]
        for end, sgn in ((cy["tmin"], -1.0), (cy["tmax"], 1.0)):
            p = cy["ctr"] + a * end
            loop = cy["vi"][np.abs((V[cy["vi"]] - p) @ a) < 0.02]
            if len(loop) < 6:
                continue
            # Recouvert ? Une face restante (hors tiges) a des sommets près du bout, du côté extérieur
            # (embout arrondi, plaque) : on ne touche à rien.
            if tree is not None:
                near = V[others[tree.query_ball_point(p, 1.6 * cy["r"])]] - p
                ax = near @ (sgn * a)
                off = np.linalg.norm(near - np.outer(near @ a, a), axis=1)
                if ((ax > -0.02) & (ax < 1.3 * cy["r"]) & (off < 1.05 * cy["r"])).any():
                    continue
            pts = V[loop]
            # Ordre angulaire autour de l'axe.
            ref = pts[0] - p
            ref -= (ref @ a) * a
            ref /= np.linalg.norm(ref)
            ortho = np.cross(a, ref)
            ang = np.arctan2((pts - p) @ ortho, (pts - p) @ ref)
            order = np.argsort(ang)
            # Sommets dupliqués (normale axiale), dédoublonnés par position.
            ring = []
            for q in pts[order]:
                if not ring or np.linalg.norm(q - ring[-1]) > 1e-4:
                    ring.append(q)
            if len(ring) > 2 and np.linalg.norm(ring[0] - ring[-1]) < 1e-4:
                ring.pop()
            n = sgn * a
            base = len(add_v)
            add_v.append((p, n))
            add_v.extend((q, n) for q in ring)
            k = len(ring)
            for j in range(k):
                i0, i1 = base + 1 + j, base + 1 + (j + 1) % k
                tri = [base, i0, i1]
                if np.cross(ring[j] - p, ring[(j + 1) % k] - p) @ n < 0:
                    tri = [base, i1, i0]
                add_f.append(tri)
    return add_v, add_f


def main(glb, recipe_path, out_path):
    recipe = json.load(open(recipe_path))
    cfg = recipe["webRetouch"]
    scene = load_scene(glb)
    shank = np.vstack([scene[n]["V"] for n in cfg["ringCentreFrom"]])
    ring_centre = np.array([(shank[:, 0].max() + shank[:, 0].min()) / 2, (shank[:, 1].max() + shank[:, 1].min()) / 2, 0.0])

    edits, summary = {}, {"ringCentreMm": ring_centre.round(3).tolist(), "prongs": {}, "removedFaces": {}}
    for p in cfg.get("prongs", []):
        entry = scene[p["metal"]]
        moves, rep = prong_edits(entry, [scene[g] for g in p["gems"]], ring_centre, cfg["prongParams"])
        inv = np.linalg.inv(entry["T"])
        local = {str(i): trimesh.transform_points((v / 1000.0)[None], inv)[0].tolist() for i, v in moves.items()}
        edits.setdefault(p["metal"], {}).setdefault("moveVertices", {}).update(local)
        summary["prongs"][p["metal"]] = rep
    for p in cfg.get("claws", []):
        entry = scene[p["metal"]]
        params = {"crownFraction": 0.6, "minAboveGirdleMm": 0.5, "minLengthMm": 3.0, **{k: v for k, v in p.items() if k not in ("metal", "gems")}}
        moves, rep = claw_edits(entry, [scene[g] for g in p["gems"]], ring_centre, params)
        inv = np.linalg.inv(entry["T"])
        local = {str(i): trimesh.transform_points((v / 1000.0)[None], inv)[0].tolist() for i, v in moves.items()}
        edits.setdefault(p["metal"], {}).setdefault("moveVertices", {}).update(local)
        summary["prongs"].setdefault(p["metal"], []).extend(rep)
    for b in cfg.get("removeBasketBottoms", []):
        faces = basket_bottom_faces(scene[b["metal"]], [scene[g] for g in b["gems"]], ring_centre, b["tMinMm"], b["tMaxMm"])
        entry = scene[b["metal"]]
        e = edits.setdefault(b["metal"], {})
        e.setdefault("deleteFaces", []).extend(faces)
        summary["removedFaces"][b["metal"]] = len(faces)
        add_v, add_f = open_end_caps(entry, e["deleteFaces"])
        inv = np.linalg.inv(entry["T"])
        lin = entry["T"][:3, :3]
        e["addVertices"] = []
        for q, n in add_v:
            ql = trimesh.transform_points((q / 1000.0)[None], inv)[0]
            nl = lin.T @ n
            nl /= np.linalg.norm(nl)
            e["addVertices"].append(ql.tolist() + nl.tolist())
        e["addFaces"] = add_f
        summary.setdefault("addedCaps", {})[b["metal"]] = len(add_f)
    json.dump(edits, open(out_path, "w"))
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main(*sys.argv[1:4])
