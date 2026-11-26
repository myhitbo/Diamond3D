"""Tests du pipeline sur le solitaire cœur (ring-003) : anneau en quatre polysurfaces, grains au maillage fissuré.

Nécessitent cad/originals/Bague-coeur.3dm.
"""
import hashlib
import json
import sys
from pathlib import Path

import numpy as np
import pytest
import trimesh

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "pipeline"))
import extract_3dm  # noqa: E402

RECIPE = ROOT / "pipeline/recipes/ring-003.json"
CAD = ROOT / "cad/originals/Bague-coeur.3dm"

needs_cad = pytest.mark.skipif(not CAD.exists(), reason="fichier CAO original absent")


@pytest.fixture(scope="module")
def meta(tmp_path_factory):
    out = tmp_path_factory.mktemp("ring003")
    before = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m = extract_3dm.run(RECIPE, out / "r.glb", out / "geometry.json")
    m["_after"] = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m["_before"] = before
    return m


@needs_cad
def test_original_untouched(meta):
    assert meta["_before"] == meta["_after"] == json.loads(RECIPE.read_text())["source"]["sha256"]


@needs_cad
def test_parts_selected_by_name_and_id(meta):
    parts = {p["id"]: p for p in meta["pieces"]["A"]["parts"]}
    # L'anneau : quatre polysurfaces désignées par leur identifiant ; les 78 grains par leur nom Rhino ; la tête : le reste.
    assert parts["metal_shank"]["sourceObjects"] == 4
    assert parts["metal_settings_side"]["sourceObjects"] == 78
    assert parts["metal_head_center"]["sourceObjects"] == 21
    assert set(meta["pieces"]) == {"A"}


@needs_cad
def test_stones(meta):
    stones = [s for part in meta["pieces"]["A"]["parts"] for s in part.get("stones", [])]
    assert len(stones) == 39
    centre = [s for s in stones if s["shape"] == "heart"]
    assert [(s["lengthMm"], s["widthMm"], s["depthMm"]) for s in centre] == [(7.3, 7.3, 4.53)]
    # Le maillage du cœur a des facettes en double : nettoyé, c'est un solide fermé, et son volume donne 1,42 ct.
    assert centre[0]["caratEstimate"] == pytest.approx(1.424, abs=0.005)
    rounds = sorted(s["widthMm"] for s in stones if s["shape"] == "round")
    assert rounds == [0.8] * 4 + [0.85] * 8 + [0.9] * 8 + [1.0] * 4 + [1.3] * 6 + [1.4] * 2 + [1.6] * 2 + [1.7] * 2 + [1.8] * 2
    assert all(s["volumeMm3"] for s in stones), "chaque pierre doit être un solide fermé"


@needs_cad
def test_metal_volume_is_union_of_solids(meta):
    piece = meta["pieces"]["A"]
    assert meta["stlCheck"] is None
    assert piece["metalVolumeMm3"] == pytest.approx(332.73, abs=0.05)
    assert piece["metalSolidsSumMm3"] == pytest.approx(361.92, abs=0.05)
    # Huit grains ont un maillage de rendu fissuré le long d'une arête : refermés pour la mesure seulement.
    assert piece["metalSolidsCracksClosed"] == 8
    assert "Union" in piece["metalVolumeSource"]


@needs_cad
def test_finger_size_measured_on_shank(meta):
    size = meta["fingerSize"]
    assert (size["label"], size["innerDiameterMm"]) == ("France 54", 17.195)
    assert "Mesuré" in size["source"]


def cracked_tetrahedron():
    """Tétraèdre dont l'arête AB est recoupée en M sur une seule de ses deux faces : fissure d'arête (sommet en T)."""
    v = np.array([[0.0, 0, 0], [1, 0, 0], [0.5, 1, 0], [0.5, 0.4, 1], [0.5, 0.004, 0.0]])  # A, B, C, D, M (à 4 µm de AB)
    a, b, c, d, m = range(5)
    return trimesh.Trimesh(v, [[b, a, c], [a, m, d], [m, b, d], [b, c, d], [c, a, d]], process=False)


def test_edge_crack_closed_without_new_vertices():
    w = cracked_tetrahedron()
    assert not w.is_watertight
    n_vertices = len(w.vertices)
    assert extract_3dm.close_edge_cracks(w) == 1
    assert w.is_watertight and w.is_winding_consistent
    assert len(w.vertices) == n_vertices, "aucun sommet créé"
    report = {}
    solid = extract_3dm.solid_for_volume(cracked_tetrahedron(), report)
    assert solid is not None and report == {"cracksClosed": 1}
    # Volume du tétraèdre ABCD (1/6), à la fissure près (4 µm).
    assert float(solid.volume) == pytest.approx(1 / 6, abs=2e-3)


def test_real_hole_is_not_a_solid():
    w = trimesh.creation.box()
    w.update_faces(np.arange(len(w.faces)) != 0)
    assert extract_3dm.solid_for_volume(w) is None
    with pytest.raises(SystemExit):
        extract_3dm.union_volume_mm3([w])


def test_crack_wider_than_tolerance_stays_open():
    w = cracked_tetrahedron()
    v = w.vertices.copy()
    v[4] = [0.5, 0.05, 0.0]  # M à 50 µm de l'arête : ce n'est plus une fissure d'arête
    w.vertices = v
    assert extract_3dm.close_edge_cracks(w) == 0
    assert not w.is_watertight
