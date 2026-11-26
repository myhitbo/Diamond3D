"""Retouche web du solitaire marquise publié : six griffes ramenées sur la couronne (demande du propriétaire, 26/11/2026).

Ne nécessite pas le fichier CAO : une nouvelle passe de pipeline/web_retouch.py sur le modèle publié doit retrouver
six griffes déjà courtes.
"""
import json
import subprocess
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
GLB = ROOT / "public/models/ring-002/ring-002.glb"
RECIPE = ROOT / "pipeline/recipes/ring-002.json"


@pytest.fixture(scope="module")
def second_pass(tmp_path_factory):
    tmp = tmp_path_factory.mktemp("retouch002")
    decoded = tmp / "decoded.glb"
    subprocess.run(["npx", "gltf-transform", "dequantize", str(GLB), str(decoded)], cwd=ROOT, check=True, capture_output=True)
    edits = tmp / "edits.json"
    out = subprocess.run([sys.executable, "-I", str(ROOT / "pipeline/web_retouch.py"), str(decoded), str(RECIPE), str(edits)],
                         check=True, capture_output=True, text=True)
    return json.loads(out.stdout), json.loads(edits.read_text())


def test_six_claws_already_short(second_pass):
    summary, _ = second_pass
    claws = summary["prongs"]["A__metal_head_center"]
    assert len(claws) == 6, "les six griffes de la marquise doivent être reconnues"
    for claw in claws:
        # Déjà ramenées à 60 % de la couronne (1,17 mm) : environ 0,7 mm au-dessus du rondiste, à la quantification près.
        assert 0.6 < claw["heightAboveGirdleAfterMm"] < 0.8
        assert claw["heightAboveGirdleBeforeMm"] == pytest.approx(claw["heightAboveGirdleAfterMm"], abs=0.05)


def test_only_the_head_is_retouched(second_pass):
    _, edits = second_pass
    assert set(edits) == {"A__metal_head_center"}
    assert set(edits["A__metal_head_center"]) == {"moveVertices"}
