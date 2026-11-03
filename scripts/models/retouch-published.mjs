// Applique les retouches web (recette « webRetouch ») au modèle déjà publié, sans le fichier CAO.
// Sert tant que le .3dm n'est pas disponible ; avec le .3dm, `npm run models:extract` fait la même
// retouche sur le GLB brut, avant optimisation.
// Usage : npm run models:retouch -- ring-001
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, statSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const id = process.argv[2];
if (!id) throw new Error('Identifiant de modèle manquant (ex. ring-001)');
const py = process.env.PYTHON ?? '.venv/bin/python';
const assetPath = `src/models/${id}/asset.json`;
const asset = JSON.parse(readFileSync(assetPath, 'utf8'));
if (asset.webRetouch) throw new Error(`${id} : modèle publié déjà retouché (${asset.webRetouch.appliedTo}). Régénérer depuis le .3dm.`);

const inter = join('cad/intermediate', id);
mkdirSync(inter, { recursive: true });
const published = join('public/models', id, `${id}.glb`);
const before = join(inter, `${id}.published-before-retouch.glb`);
const decoded = join(inter, `${id}.published-decoded.glb`);
const edits = join(inter, `${id}.web-edits.json`);
const run = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });

copyFileSync(published, before);
run('npx', ['gltf-transform', 'dequantize', published, decoded]);
const summary = JSON.parse(run(py, ['-I', 'pipeline/web_retouch.py', decoded, `pipeline/recipes/${id}.json`, edits]));
const applied = JSON.parse(run('node', ['scripts/models/apply-web-edits.mjs', decoded, edits, published]));

for (const [node, r] of Object.entries(applied)) if (asset.nodes[node]) asset.nodes[node].trianglesWeb = r.trianglesAfter;
asset.trianglesWeb = Object.values(asset.nodes).reduce((s, n) => s + n.trianglesWeb, 0);
asset.glbBytes = statSync(published).size;
asset.webRetouch = {
  appliedTo: 'modèle publié (fichier CAO absent)',
  date: new Date().toISOString().slice(0, 10),
  request: "Atelier, 3/11/2026 : griffes rabattues et « 8 » supprimés, pour le web uniquement",
  prongsAdjusted: Object.fromEntries(Object.entries(summary.prongs).map(([k, v]) => [k, v.length])),
  removedFaces: summary.removedFaces,
  addedCapTriangles: summary.addedCaps ?? {},
  note: "Écart volontaire par rapport au fichier de fabrication ; maxDeviationMm décrit la simplification, pas la retouche.",
};
writeFileSync(assetPath, JSON.stringify(asset, null, 2) + '\n');
console.log(`${published} : ${asset.glbBytes} octets, ${asset.trianglesWeb} triangles`, JSON.stringify(asset.webRetouch));
