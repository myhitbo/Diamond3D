"""Retouches web du modèle publié (griffes rabattues, plaques en « 8 » supprimées).

Ne nécessite pas le fichier CAO : on vérifie que le modèle publié est déjà retouché, c'est-à-dire
qu'une nouvelle passe de pipeline/web_retouch.py n'aurait plus rien à faire.
"""
import json
import subprocess
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "pipeline"))
import web_retouch  # noqa: E402

GLB = ROOT / "public/models/ring-001/ring-001.glb"
RECIPE = ROOT / "pipeline/recipes/ring-001.json"


@pytest.fixture(scope="module")
def second_pass(tmp_path_factory):
    tmp = tmp_path_factory.mktemp("retouch")
    decoded = tmp / "decoded.glb"
    subprocess.run(["npx", "gltf-transform", "dequantize", str(GLB), str(decoded)], cwd=ROOT, check=True, capture_output=True)
    edits = tmp / "edits.json"
    out = subprocess.run([sys.executable, "-I", str(ROOT / "pipeline/web_retouch.py"), str(decoded), str(RECIPE), str(edits)],
                         check=True, capture_output=True, text=True)
    return json.loads(out.stdout), json.loads(edits.read_text())


def test_prongs_already_folded(second_pass):
    summary, _ = second_pass
    adjusted = [p for rows in summary["prongs"].values() for p in rows]
    assert adjusted, "aucune griffe détectée : la détection a cassé"
    # Quantification 16 bits : tolérance de quelques centièmes de millimètre.
    assert max(p["dropMm"] for p in adjusted) < 0.05
    assert max(p["leanMm"] for p in adjusted) < 0.05


def test_basket_bottoms_removed(second_pass):
    summary, _ = second_pass
    assert all(n == 0 for n in summary["removedFaces"].values())


def test_no_open_prong_ends_left(second_pass):
    summary, _ = second_pass
    assert all(n == 0 for n in summary.get("addedCaps", {}).values())
