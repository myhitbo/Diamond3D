// Construit la préversion autonome publiable sur claude.ai (un seul fichier HTML).
// Usage : npm run preview:build   ->  preview/dist/index.html
//
// Pourquoi une construction à part : le site Next.js charge ses fichiers par des chemins
// absolus, et claude.ai ne sert ni ces chemins ni les fichiers .glb. Le même code de
// configurateur est donc assemblé avec esbuild, le modèle 3D est intégré à la page, et
// la compression meshopt est retirée (son décodeur WebAssembly peut y être bloqué).
import { NodeIO, Logger } from '@gltf-transform/core';
import { EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import { build } from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';

const DIST = 'preview/dist';
mkdirSync(DIST, { recursive: true });

// 1. Modèle : même géométrie que le site (public/), décompressée, quantification conservée.
await MeshoptDecoder.ready;
const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read('public/models/ring-001/ring-001.glb');
doc.setLogger(new Logger(Logger.Verbosity.WARN));
for (const ext of doc.getRoot().listExtensionsUsed()) {
  if (ext.extensionName === EXTMeshoptCompression.EXTENSION_NAME) ext.dispose();
}
await io.write(`${DIST}/ring-001.glb`, doc);

// 2. Code : le configurateur du site, sans Next.js.
await build({
  entryPoints: ['preview/entry.tsx'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  outdir: DIST,
  entryNames: 'app',
  alias: { '@': './src', 'next/dynamic': './preview/next-dynamic-shim.tsx' },
  loader: { '.glb': 'binary', '.module.css': 'local-css' },
  define: { 'process.env.NODE_ENV': '"production"' },
  tsconfig: 'tsconfig.json',
  logLevel: 'warning',
});

// 3. Page unique : polices Google (autorisées par claude.ai), CSS et JS intégrés.
const css = readFileSync(`${DIST}/app.css`, 'utf8');
const js = readFileSync(`${DIST}/app.js`, 'utf8').replace(/<\/script/gi, '<\\/script');
const html = `<title>Configurateur JR Diamond</title>
<meta name="description" content="Préversion privée du configurateur 3D JR Diamond">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap">
<style>
${css}
/* Préversion claude.ai : polices chargées par lien, univers ivoire unique (identité de marque, pas de thème sombre). */
:root { --font-cormorant: 'Cormorant Garamond'; --font-jost: 'Jost'; color-scheme: light; }
html, body { background: var(--ivory); }
</style>
<div id="root"></div>
<script>${js}</script>
`;
writeFileSync(`${DIST}/index.html`, html);
console.log(`${DIST}/index.html : ${(statSync(`${DIST}/index.html`).size / 1e6).toFixed(2)} Mo`);
