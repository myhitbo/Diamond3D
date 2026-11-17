// Image de la page d'accueil : capture du vrai rendu 3D de ring-001 (vue 3/4, réglages par défaut), recadrée, en WebP.
// Usage : CHROMIUM_PATH=… scripts/perf/serve-and-run.sh scripts/perf/home-render.mjs public/images/ring-001-rendu-3d.webp [--nuit]
// `--nuit` : scène sur le fond noir du site (premier écran de l'accueil), au lieu du dégradé ivoire.
// À refaire quand le modèle ou le rendu change. Rendu logiciel (SwiftShader) : on capture avant toute bascule en rendu simplifié.
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const out = process.argv[2];
const night = process.argv.includes('--nuit');
if (!out) throw new Error('Chemin de sortie manquant (ex. public/images/ring-001-rendu-3d.webp)');

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
await p.goto('http://localhost:3100/fr/configurateur/ring-001?debug=1');
await p.waitForFunction(() => window.__jr?.ready, null, { timeout: 120000 });
// Barre des vues et consigne masquées : seule la scène est capturée.
await p.addStyleTag({ content: '[class*="stageBar"], [class*="hint"] { visibility: hidden !important; }' });
if (night) await p.addStyleTag({ content: '[class*="stage"] { background: radial-gradient(ellipse at 50% 42%, #24201a 0%, #0c0b09 70%) !important; }' });
await p.waitForTimeout(1500);
const state = await p.evaluate(() => ({ quality: window.__jr.quality, color: window.__jr.metalColor() }));
console.log('rendu :', JSON.stringify(state));
if (state.quality !== 'high') throw new Error('Rendu simplifié actif : capture refusée (relancer).');
// Fond de la scène compris (le canevas est transparent) : capture de la scène, pas du seul canevas.
const png = await p.locator('canvas').first().locator('xpath=ancestor::section[1]').screenshot();
await b.close();

// Recadrage 4:3 autour de la bague. Le fond (dégradé ivoire) est clair et peu saturé : tout pixel saturé (or) ou plus sombre
// (ombre, facettes) appartient au bijou.
const { data, info } = await sharp(png).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
let [x0, y0, x1, y1] = [width, height, 0, 0];
for (let y = 0; y < height; y++)
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 3;
    const max = Math.max(data[i], data[i + 1], data[i + 2]);
    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    const jewel = night ? max - min > 45 || max > 110 : max - min > 45 || max < 190;
    if (jewel) [x0, y0, x1, y1] = [Math.min(x0, x), Math.min(y0, y), Math.max(x1, x), Math.max(y1, y)];
  }
if (x1 <= x0 || y1 <= y0) throw new Error('Bague introuvable dans la capture.');
// Marge de 14 % autour de la bague, puis élargissement au format 4:3, dans les limites de la scène.
const margin = 0.14 * Math.max(x1 - x0, y1 - y0);
let h = Math.min(height, y1 - y0 + 2 * margin);
let w = (h * 4) / 3;
if (w < x1 - x0 + 2 * margin) [w, h] = [x1 - x0 + 2 * margin, ((x1 - x0 + 2 * margin) * 3) / 4];
if (w > width) [w, h] = [width, (width * 3) / 4];
const clamp = (v, lo, hi) => Math.round(Math.min(Math.max(v, lo), hi));
const left = clamp((x0 + x1) / 2 - w / 2, 0, width - w);
const top = clamp((y0 + y1) / 2 - h / 2, 0, height - h);
console.log(`bague : ${x0},${y0} → ${x1},${y1} ; recadrage ${Math.round(w)} × ${Math.round(h)} à ${left},${top}`);
await sharp(png)
  .extract({ left, top, width: Math.round(w), height: Math.round(h) })
  .resize(1400, 1050, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile(out);
const meta = await sharp(out).metadata();
console.log(`${out} : ${meta.width} × ${meta.height}`);
