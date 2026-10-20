// Optimise un GLB brut issu du pipeline : soudure, simplification du métal seulement,
// compression meshopt. Les pierres ne sont jamais simplifiées (facettes exactes).
// Usage : node scripts/models/optimize-glb.mjs <entrée.glb> <sortie.glb> <témoin-non-compressé.glb> [erreur]
import { NodeIO, Logger } from '@gltf-transform/core';
import { EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplifyPrimitive, reorder, quantize, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';

const [input, output, witness, errArg] = process.argv.slice(2);
// Erreur relative à l'étendue de chaque maillage (0,0005 = 0,05 %).
const error = Number(errArg ?? 0.0005);

await MeshoptEncoder.ready;
await MeshoptSimplifier.ready;
const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({ 'meshopt.encoder': MeshoptEncoder });

const doc = await io.read(input);
doc.setLogger(new Logger(Logger.Verbosity.WARN));
await doc.transform(dedup(), weld());

const stats = [];
for (const mesh of doc.getRoot().listMeshes()) {
  for (const prim of mesh.listPrimitives()) {
    const before = prim.getIndices().getCount() / 3;
    const isMetal = prim.getMaterial()?.getName() === 'metal';
    if (isMetal) {
      simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio: 0, error, lockBorder: true });
    }
    stats.push({ mesh: mesh.getName(), material: prim.getMaterial()?.getName(), before, after: prim.getIndices().getCount() / 3 });
  }
}
await doc.transform(prune(), reorder({ encoder: MeshoptEncoder }));
await io.write(witness, doc);

await doc.transform(
  quantize({ quantizePosition: 16, quantizeNormal: 12 }),
  meshopt({ encoder: MeshoptEncoder, level: 'high' }),
);
await io.write(output, doc);
console.log(JSON.stringify({ error, stats }));
