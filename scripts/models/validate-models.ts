// Contrôle de tous les modèles avant publication : définition, métadonnées et contenu réel du GLB.
// Usage : npm run models:validate   (code de sortie 1 en cas d'erreur)
import { NodeIO } from '@gltf-transform/core';
import { EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { MODELS } from '../../src/models';
import { validateModel } from '../../src/lib/configurator/logic';

await MeshoptDecoder.ready;
const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder });

let failed = false;
for (const model of Object.values(MODELS)) {
  const path = join('public', model.asset.glb);
  const errors: string[] = [];
  let glbNodes: string[] | undefined;
  try {
    if (statSync(path).size !== model.asset.glbBytes) errors.push('taille du GLB différente du rapport : relancer models:extract');
    const doc = await io.read(path);
    glbNodes = doc.getRoot().listNodes().filter((n) => n.getMesh()).map((n) => n.getName());
  } catch (e) {
    errors.push(`GLB illisible (${path}) : ${(e as Error).message}`);
  }
  errors.push(...validateModel(model, glbNodes));
  const state = errors.length ? 'ÉCHEC' : 'OK';
  console.log(`${state}  ${model.id} (${model.status}) — ${glbNodes?.length ?? 0} nœuds, ${model.asset.trianglesWeb} triangles`);
  for (const e of errors) console.log(`   - ${e}`);
  failed ||= errors.length > 0;
}
process.exit(failed ? 1 : 0);
