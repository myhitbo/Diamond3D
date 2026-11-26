"""Tests du pipeline sur le solitaire marquise (ring-002) : fichier sans courbe de taille ni STL de référence.

Nécessitent cad/originals/Solitaire-marquise.3dm (et Ring.3dm pour le contrôle croisé de la mesure de taille).
"""
import hashlib
import json
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "pipeline"))
import extract_3dm  # noqa: E402

RECIPE = ROOT / "pipeline/recipes/ring-002.json"
CAD = ROOT / "cad/originals/Solitaire-marquise.3dm"
RING_001 = ROOT / "cad/originals/Ring.3dm"

pytestmark = pytest.mark.skipif(not CAD.exists(), reason="fichier CAO original absent")


@pytest.fixture(scope="module")
def meta(tmp_path_factory):
    out = tmp_path_factory.mktemp("ring002")
    before = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m = extract_3dm.run(RECIPE, out / "r.glb", out / "geometry.json")
    m["_after"] = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m["_before"] = before
    return m


def test_original_untouched(meta):
    assert meta["_before"] == meta["_after"] == json.loads(RECIPE.read_text())["source"]["sha256"]


def test_parts_selected_by_name_and_id(meta):
    parts = {p["id"]: p for p in meta["pieces"]["A"]["parts"]}
    # L'anneau est choisi par son identifiant, les 52 grains par leur nom Rhino, la tête par « sans nom, sauf l'anneau ».
    assert parts["metal_shank"]["sourceObjects"] == 1
    assert parts["metal_settings_side"]["sourceObjects"] == 52
    assert parts["metal_head_center"]["sourceObjects"] == 15
    assert set(meta["pieces"]) == {"A"}


def test_stones(meta):
    stones = [s for part in meta["pieces"]["A"]["parts"] for s in part.get("stones", [])]
    assert len(stones) == 36
    centre = [s for s in stones if s["shape"] == "marquise"]
    assert [(s["lengthMm"], s["widthMm"]) for s in centre] == [(16.5, 8.5)]
    # Le bloc s'appelle « Diamond_Round 01 » : la forme se lit malgré le suffixe.
    rounds = sorted(s["widthMm"] for s in stones if s["shape"] == "round")
    assert rounds == [1.1] * 19 + [1.9] * 16
    assert all(s["volumeMm3"] for s in stones), "chaque pierre doit être un solide fermé"


def test_metal_volume_is_union_of_solids(meta):
    piece = meta["pieces"]["A"]
    assert meta["stlCheck"] is None
    assert piece["metalVolumeMm3"] == pytest.approx(396.95, abs=0.05)
    # Les griffes et les galeries pénètrent le corps : l'union est plus petite que la somme brute.
    assert piece["metalSolidsSumMm3"] == pytest.approx(404.31, abs=0.05)
    assert "Union" in piece["metalVolumeSource"]


def test_finger_size_measured_on_shank(meta):
    size = meta["fingerSize"]
    assert (size["label"], size["innerDiameterMm"]) == ("France 54 1/2", 17.31)
    assert "Mesuré" in size["source"]


@pytest.mark.skipif(not RING_001.exists(), reason="Ring.3dm absent")
def test_measured_size_matches_rail_curve_of_ring_001(tmp_path):
    """Contrôle croisé : sur ring-001, la mesure sur l'anneau redonne la courbe de taille du fichier (France 51 1/2, 16,393 mm)."""
    recipe = json.loads((ROOT / "pipeline/recipes/ring-001.json").read_text())
    recipe.pop("fingerSizeCurvePrefix")
    recipe["source"]["cad"] = str(RING_001)
    recipe["source"]["referenceStl"] = str(ROOT / recipe["source"]["referenceStl"])
    for piece in ("A", "B"):
        recipe["fingerSizeFrom"] = {"piece": piece, "part": "metal_shank"}
        path = tmp_path / f"mesure-{piece}.json"
        path.write_text(json.dumps(recipe))
        m = extract_3dm.run(path, tmp_path / "r.glb", tmp_path / "g.json")
        assert (m["fingerSize"]["label"], m["fingerSize"]["innerDiameterMm"]) == ("France 51 1/2", 16.393)


@pytest.mark.parametrize(
    "block, shape",
    [("Diamond_Round", "round"), ("Diamond_Round 01", "round"), ("Diamond_Marquise", "marquise"), ("Diamond_Heart", "heart"), ("Gem_42", "unknown"), (None, "unknown")],
)
def test_stone_shape_from_block_name(block, shape):
    assert extract_3dm.stone_shape(block) == shape
