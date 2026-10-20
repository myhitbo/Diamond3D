"""Mesure l'écart géométrique entre le GLB brut et le GLB simplifié (non compressé).

Échantillonne la surface de chaque maillage dans les deux sens et rapporte
l'écart maximal et le 99e centile, en millimètres.
Usage : python pipeline/measure_deviation.py brut.glb simplifié.glb
"""
import json
import sys

import numpy as np
import trimesh


def meshes(path):
    scene = trimesh.load(path, force="scene")
    out = {}
    for node in scene.graph.nodes_geometry:
        tf, geom = scene.graph[node]
        m = scene.geometry[geom].copy()
        m.apply_transform(tf)
        m.apply_scale(1000.0)  # en mm : les tolérances internes de trimesh faussent les mesures en mètres
        out[node] = m
    return out


def one_way(a, b, n, rng):
    pts, _ = trimesh.sample.sample_surface(a, n, seed=rng)
    _, d, _ = trimesh.proximity.closest_point(b, pts)
    return d


def main(raw_path, simp_path, samples=20000):
    raw, simp = meshes(raw_path), meshes(simp_path)
    report = {}
    for name, a in raw.items():
        b = simp[name]
        d = np.concatenate([one_way(a, b, samples, 1), one_way(b, a, samples, 2)])
        report[name] = {
            "trianglesRaw": int(len(a.faces)),
            "trianglesWeb": int(len(b.faces)),
            "maxDeviationMm": round(float(d.max()), 4),
            "p99DeviationMm": round(float(np.percentile(d, 99)), 4),
        }
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
