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
// Retouches web (griffes rabattues, plaques en « 8 » supprimées…) si la recette en déclare.
// Le GLB brut d'origine est conservé ; l'écart mesuré porte sur la simplification seule.
const recipe = JSON.parse(readFileSync(`pipeline/recipes/${id}.json`, 'utf8'));
let source = raw;
let retouch;
if (recipe.webRetouch) {
  const edits = join(inter, `${id}.web-edits.json`);
  source = join(inter, `${id}.retouched.glb`);
  const summary = JSON.parse(run(py, ['-I', 'pipeline/web_retouch.py', raw, `pipeline/recipes/${id}.json`, edits]));
  run('node', ['scripts/models/apply-web-edits.mjs', raw, edits, source, '--no-compress']);
  retouch = {
    appliedTo: 'GLB brut issu du .3dm',
    request: "Atelier, 3/11/2026 : griffes rabattues et « 8 » supprimés, pour le web uniquement",
    prongsAdjusted: Object.fromEntries(Object.entries(summary.prongs).map(([k, v]) => [k, v.length])),
    removedFaces: summary.removedFaces,
    addedCapTriangles: summary.addedCaps ?? {},
  };
}
run('node', ['scripts/models/optimize-glb.mjs', source, out, witness, String(ERROR)]);
const deviation = JSON.parse(run(py, ['-I', 'pipeline/measure_deviation.py', source, witness]));

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
  ...(retouch ? { webRetouch: retouch } : {}),
};
writeFileSync(`src/models/${id}/asset.json`, JSON.stringify(report, null, 2) + '\n');
console.log(`${out} : ${report.glbBytes} octets, ${report.trianglesWeb} triangles, écart max ${report.maxDeviationMm} mm`);
