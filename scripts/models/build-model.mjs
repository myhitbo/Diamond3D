// Chaîne complète pour un modèle : .3dm -> GLB brut -> GLB web optimisé -> rapport.
// Usage : npm run models:extract -- ring-001
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const id = process.argv[2];
if (!id) throw new Error('Identifiant de modèle manquant (ex. ring-001)');
const ERROR = 0.0005; // erreur relative de simplification du métal, validée par mesure

const py = process.env.PYTHON ?? '.venv/bin/python';
const inter = join('cad/intermediate', id);
const raw = join(inter, `${id}.raw.glb`);
const witness = join(inter, `${id}.simplified.glb`);
const out = join('public/models', id, `${id}.glb`);
mkdirSync(inter, { recursive: true });
mkdirSync(join('public/models', id), { recursive: true });

const run = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });

process.stdout.write(run(py, ['-I', 'pipeline/extract_3dm.py', `pipeline/recipes/${id}.json`, '--out-glb', raw, '--out-meta', `src/models/${id}/geometry.json`]));
run('node', ['scripts/models/optimize-glb.mjs', raw, out, witness, String(ERROR)]);
const deviation = JSON.parse(run(py, ['-I', 'pipeline/measure_deviation.py', raw, witness]));

const report = {
  $comment: 'Fichier généré par scripts/models/build-model.mjs. Ne pas modifier à la main.',
  modelId: id,
  glb: `/models/${id}/${id}.glb`,
  glbBytes: statSync(out).size,
  rawGlbBytes: statSync(raw).size,
  simplification: { relativeError: ERROR, appliesTo: 'métal uniquement ; pierres non modifiées' },
  compression: 'EXT_meshopt_compression + KHR_mesh_quantization (positions 16 bits, normales 12 bits)',
  nodes: deviation,
  trianglesWeb: Object.values(deviation).reduce((s, n) => s + n.trianglesWeb, 0),
  maxDeviationMm: Math.max(...Object.values(deviation).map((n) => n.maxDeviationMm)),
};
writeFileSync(`src/models/${id}/asset.json`, JSON.stringify(report, null, 2) + '\n');
console.log(`${out} : ${report.glbBytes} octets, ${report.trianglesWeb} triangles, écart max ${report.maxDeviationMm} mm`);
