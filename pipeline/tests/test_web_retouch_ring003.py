"""Retouche web du solitaire cœur publié : cinq griffes en fil rond ramenées sur la couronne, embout arrondi conservé.

Même demande que pour le solitaire marquise (propriétaire, 26/11/2026). Ne nécessite pas le fichier CAO : une nouvelle
passe de pipeline/web_retouch.py sur le modèle publié doit retrouver cinq griffes déjà courtes.
"""
import json
import subprocess
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
GLB = ROOT / "public/models/ring-003/ring-003.glb"
RECIPE = ROOT / "pipeline/recipes/ring-003.json"


@pytest.fixture(scope="module")
def second_pass(tmp_path_factory):
    tmp = tmp_path_factory.mktemp("retouch003")
    decoded = tmp / "decoded.glb"
    subprocess.run(["npx", "gltf-transform", "dequantize", str(GLB), str(decoded)], cwd=ROOT, check=True, capture_output=True)
    edits = tmp / "edits.json"
    out = subprocess.run([sys.executable, "-I", str(ROOT / "pipeline/web_retouch.py"), str(decoded), str(RECIPE), str(edits)],
                         check=True, capture_output=True, text=True)
    return json.loads(out.stdout), json.loads(edits.read_text())


def test_five_claws_already_short(second_pass):
    summary, _ = second_pass
    claws = summary["prongs"]["A__metal_head_center"]
    # Le corps et l'embout de chaque griffe sont maillés à part : réunis (`weldMm`), ils font cinq griffes, pas vingt-cinq pièces.
    assert len(claws) == 5, "les cinq griffes du cœur doivent être reconnues"
    for claw in claws:
        # Déjà ramenées à 60 % de la couronne (1,2 mm) : environ 0,72 mm au-dessus du rondiste, à la quantification près.
        assert 0.6 < claw["heightAboveGirdleAfterMm"] < 0.85
        assert claw["heightAboveGirdleBeforeMm"] == pytest.approx(claw["heightAboveGirdleAfterMm"], abs=0.05)


def test_only_the_head_is_retouched(second_pass):
    _, edits = second_pass
    assert set(edits) == {"A__metal_head_center"}
    assert set(edits["A__metal_head_center"]) == {"moveVertices"}


def test_recipe_keeps_the_rounded_tip():
    claws = json.loads(RECIPE.read_text())["webRetouch"]["claws"]
    assert [(c["crownFraction"], c["weldMm"], c["tipMm"]) for c in claws] == [(0.6, 0.005, 0.55)]
