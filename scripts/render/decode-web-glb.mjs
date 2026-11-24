// Prépare le modèle web publié pour Blender : décompression meshopt et déquantification (l'importeur glTF de Blender ne lit
// pas EXT_meshopt_compression). C'est ce modèle que rendent les images du site. Deux écarts au fichier de fabrication : la
// simplification (0,02 mm au plus, `maxDeviationMm` de src/models/ring-001/asset.json) et, volontaires, les retouches web
// demandées par l'atelier (griffes rabattues avec leur perle, quelques dixièmes de millimètre à leur extrémité ; « 8 »
// supprimés). Appliquées au maillage dense, ces retouches laissaient la perle des deux griffes de pointe de la marquise en l'air.
// Usage : node scripts/render/decode-web-glb.mjs public/models/ring-001/ring-001.glb <sortie.glb>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dequantize } from '@gltf-transform/functions';
import { MeshoptDecoder } from 'meshoptimizer';

const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error('Usage : decode-web-glb.mjs <entrée.glb> <sortie.glb>');
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(input);
await doc.transform(dequantize());
for (const e of doc.getRoot().listExtensionsUsed()) e.dispose();
await io.write(output, doc);
console.log(`${output} : modèle décompressé et déquantifié`);
