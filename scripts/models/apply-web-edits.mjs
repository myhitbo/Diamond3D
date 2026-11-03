// Applique des retouches « web uniquement » à un GLB, puis le recompresse.
// Les retouches sont calculées par pipeline/web_retouch.py et décrites dans un fichier JSON :
//   { "<nom du maillage>": { "deleteFaces": [i, …], "moveVertices": { "<indice>": [x, y, z] },
//                            "addVertices": [[x, y, z, nx, ny, nz], …], "addFaces": [[i, j, k], …] } }
// Positions en coordonnées locales du maillage. Les normales des sommets déplacés sont recalculées
// à partir des triangles qui les touchent.
// Usage : node scripts/models/apply-web-edits.mjs <entrée.glb> <retouches.json> <sortie.glb> [--no-compress]
import { readFileSync } from 'node:fs';
import { NodeIO, Logger } from '@gltf-transform/core';
import { EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { prune, reorder, quantize, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';

const [input, editsPath, output, flag] = process.argv.slice(2);
const edits = JSON.parse(readFileSync(editsPath, 'utf8'));

await MeshoptEncoder.ready;
await MeshoptDecoder.ready;
const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });

const doc = await io.read(input);
doc.setLogger(new Logger(Logger.Verbosity.WARN));

const report = {};
const seen = new Set();
for (const mesh of doc.getRoot().listMeshes()) {
  const e = edits[mesh.getName()];
  if (!e) continue;
  seen.add(mesh.getName());
  const prims = mesh.listPrimitives();
  if (prims.length !== 1) throw new Error(`${mesh.getName()} : une seule primitive attendue`);
  const prim = prims[0];
  const pos = prim.getAttribute('POSITION');
  const nrm = prim.getAttribute('NORMAL');
  const idx = prim.getIndices();
  const nV = pos.getCount();

  // Déplacements de sommets.
  const moved = new Set();
  for (const [k, p] of Object.entries(e.moveVertices ?? {})) {
    const i = Number(k);
    if (!(i >= 0 && i < nV)) throw new Error(`${mesh.getName()} : sommet ${i} hors limites`);
    pos.setElement(i, p);
    moved.add(i);
  }

  // Suppression de triangles.
  const del = new Set(e.deleteFaces ?? []);
  const old = idx.getArray();
  const nF = old.length / 3;
  for (const f of del) if (!(f >= 0 && f < nF)) throw new Error(`${mesh.getName()} : triangle ${f} hors limites`);
  const kept = [];
  for (let f = 0; f < nF; f++) if (!del.has(f)) kept.push(old[3 * f], old[3 * f + 1], old[3 * f + 2]);
  // Ajouts (bouchons) : sommets [x, y, z, nx, ny, nz] puis triangles indexés à partir des nouveaux sommets.
  const addV = e.addVertices ?? [];
  if (addV.length) {
    if (!nrm) throw new Error(`${mesh.getName()} : normales absentes, ajout impossible`);
    const P = new Float32Array((nV + addV.length) * 3);
    const N = new Float32Array((nV + addV.length) * 3);
    for (let i = 0; i < nV; i++) { P.set(pos.getElement(i, []), 3 * i); N.set(nrm.getElement(i, []), 3 * i); }
    addV.forEach((v, j) => { P.set(v.slice(0, 3), 3 * (nV + j)); N.set(v.slice(3, 6), 3 * (nV + j)); });
    pos.setArray(P);
    nrm.setArray(N);
    for (const [a, b, c] of e.addFaces ?? []) {
      for (const k of [a, b, c]) if (!(k >= 0 && k < addV.length)) throw new Error(`${mesh.getName()} : sommet ajouté ${k} hors limites`);
      kept.push(nV + a, nV + b, nV + c);
    }
  }
  const total = nV + addV.length;
  const Arr = total > 65535 ? Uint32Array : old.constructor;
  idx.setArray(new Arr(kept));

  // Normales des sommets déplacés : moyenne pondérée par l'aire des triangles adjacents.
  if (moved.size && nrm) {
    const acc = new Map([...moved].map((i) => [i, [0, 0, 0]]));
    const P = (i) => pos.getElement(i, []);
    for (let t = 0; t < kept.length; t += 3) {
      const tri = [kept[t], kept[t + 1], kept[t + 2]];
      if (!tri.some((i) => acc.has(i))) continue;
      const [a, b, c] = tri.map(P);
      const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
      for (const i of tri) if (acc.has(i)) { const s = acc.get(i); s[0] += n[0]; s[1] += n[1]; s[2] += n[2]; }
    }
    for (const [i, s] of acc) {
      const l = Math.hypot(...s);
      if (l > 0) {
        // On conserve l'orientation d'origine si la nouvelle normale est presque perpendiculaire
        // (sommet sur une arête vive partagée entre deux faces séparées).
        const o = nrm.getElement(i, []);
        const nn = s.map((x) => x / l);
        if (nn[0] * o[0] + nn[1] * o[1] + nn[2] * o[2] > 0.2) nrm.setElement(i, nn);
      }
    }
  }
  report[mesh.getName()] = { trianglesBefore: nF, trianglesAfter: kept.length / 3, deleted: del.size, movedVertices: moved.size, addedVertices: addV.length };
}
for (const name of Object.keys(edits)) if (!seen.has(name)) throw new Error(`Maillage absent du GLB : ${name}`);

await doc.transform(prune());
if (flag !== '--no-compress') {
  await doc.transform(
    reorder({ encoder: MeshoptEncoder }),
    quantize({ quantizePosition: 16, quantizeNormal: 12 }),
    meshopt({ encoder: MeshoptEncoder, level: 'high' }),
  );
}
await io.write(output, doc);
console.log(JSON.stringify(report));
