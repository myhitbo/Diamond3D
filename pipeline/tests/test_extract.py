"""Tests du pipeline sur le modèle pilote. Nécessitent cad/originals/Ring.3dm et Ring.stl."""
import hashlib
import json
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "pipeline"))
import extract_3dm  # noqa: E402

RECIPE = ROOT / "pipeline/recipes/ring-001.json"
CAD = ROOT / "cad/originals/Ring.3dm"

pytestmark = pytest.mark.skipif(not CAD.exists(), reason="fichier CAO original absent")


@pytest.fixture(scope="module")
def meta(tmp_path_factory):
    out = tmp_path_factory.mktemp("ring")
    before = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m = extract_3dm.run(RECIPE, out / "r.glb", out / "geometry.json")
    m["_after"] = hashlib.sha256(CAD.read_bytes()).hexdigest()
    m["_before"] = before
    m["_glb"] = out / "r.glb"
    return m


def test_original_untouched(meta):
    assert meta["_before"] == meta["_after"] == json.loads(RECIPE.read_text())["source"]["sha256"]


def test_two_pieces_matching_stl_shells(meta):
    assert set(meta["pieces"]) == {"A", "B"}
    assert all(c["maxBoundsDeviationMm"] < 0.01 for c in meta["stlCheck"])
    assert meta["pieces"]["A"]["metalVolumeMm3"] == pytest.approx(153.48, abs=0.01)
    assert meta["pieces"]["B"]["metalVolumeMm3"] == pytest.approx(135.40, abs=0.01)


def test_stones(meta):
    stones = [s for p in meta["pieces"].values() for part in p["parts"] for s in part.get("stones", [])]
    assert len(stones) == 17
    assert sorted({s["shape"] for s in stones}) == ["marquise", "round"]
    rounds_b = [s["widthMm"] for part in meta["pieces"]["B"]["parts"] for s in part.get("stones", [])]
    assert sorted(set(rounds_b)) == [1.3, 1.5, 1.7, 2.0, 2.3]
    assert all(s["volumeMm3"] for s in stones), "chaque pierre doit être un solide fermé"


def test_finger_size(meta):
    assert meta["fingerSize"] == {"label": "France 51 1/2", "innerDiameterMm": 16.393}


def test_glb_nodes(meta):
    import trimesh

    scene = trimesh.load(meta["_glb"], force="scene")
    expected = {p["node"] for piece in meta["pieces"].values() for p in piece["parts"]}
    assert set(scene.graph.nodes_geometry) == expected


def test_selector_errors_are_fatal(tmp_path):
    recipe = json.loads(RECIPE.read_text())
    # Retirer une pièce laisse des objets de production sans affectation : le pipeline doit refuser.
    recipe["pieces"]["B"]["parts"] = recipe["pieces"]["B"]["parts"][:-1]
    bad = ROOT / "pipeline/recipes/_test_incomplete.json"
    bad.write_text(json.dumps(recipe))
    try:
        with pytest.raises(SystemExit, match="Affectation incomplète"):
            extract_3dm.run(bad, tmp_path / "x.glb", tmp_path / "x.json")
    finally:
        bad.unlink()
