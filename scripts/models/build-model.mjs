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
// 1. Simplification du GLB brut : `witness` est le modèle simplifié non compressé, `out` sa version compressée.
//    L'écart mesuré (brut contre témoin) porte donc sur la simplification seule, face au fichier de fabrication.
run('node', ['scripts/models/optimize-glb.mjs', raw, out, witness, String(ERROR)]);
const deviation = JSON.parse(run(py, ['-I', 'pipeline/measure_deviation.py', raw, witness]));

// 2. Retouches web (griffes rabattues, plaques en « 8 » supprimées…) si la recette en déclare, appliquées
//    au modèle simplifié puis recompressées. Les appliquer au GLB brut, avant simplification, double le
//    nombre de triangles : les bords ouverts et les sommets déplacés (normales recalculées, donc non soudables)
//    sont verrouillés par la simplification (mesuré le 14/11/2026 : 46 084 triangles contre 27 356).
const recipe = JSON.parse(readFileSync(`pipeline/recipes/${id}.json`, 'utf8'));
let retouch;
if (recipe.webRetouch) {
  const edits = join(inter, `${id}.web-edits.json`);
  const summary = JSON.parse(run(py, ['-I', 'pipeline/web_retouch.py', witness, `pipeline/recipes/${id}.json`, edits]));
  const applied = JSON.parse(run('node', ['scripts/models/apply-web-edits.mjs', witness, edits, out]));
  for (const [node, r] of Object.entries(applied)) if (deviation[node]) deviation[node].trianglesWeb = r.trianglesAfter;
  retouch = {
    appliedTo: 'modèle simplifié issu du .3dm',
    request: recipe.webRetouch.request ?? "Atelier, 3/11/2026 : griffes rabattues et « 8 » supprimés, pour le web uniquement",
    prongsAdjusted: Object.fromEntries(Object.entries(summary.prongs).map(([k, v]) => [k, v.length])),
    removedFaces: summary.removedFaces,
    addedCapTriangles: summary.addedCaps ?? {},
    note: "Écart volontaire par rapport au fichier de fabrication ; maxDeviationMm décrit la simplification, pas la retouche.",
  };
}

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
