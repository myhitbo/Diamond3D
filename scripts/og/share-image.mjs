// Image des aperçus de liens (WhatsApp, Facebook, iMessage, X) : 1200 × 630, JPEG léger.
// Faite seulement d'éléments réels : le mot-symbole du site, dans sa police, et la capture du vrai rendu 3D de ring-001
// (`public/images/ring-001-rendu-3d.webp`, voir `scripts/perf/home-render.mjs`). Aucun texte de langue : la même image sert
// au français, à l'anglais et à l'hébreu (le texte alternatif, lui, est traduit : `shareImageAlt`).
// Composition centrée : WhatsApp montre parfois une vignette carrée, recadrée au milieu ; bague et mot-symbole y restent entiers.
// Usage : CHROMIUM_PATH=… scripts/perf/serve-and-run.sh scripts/og/share-image.mjs public/images/apercu-partage.jpg
// Si l'image change, changer aussi son nom (WhatsApp et Facebook gardent l'ancienne en cache) et `SHARE_IMAGE` dans
// `src/config/site.ts`.
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const out = process.argv[2];
if (!out) throw new Error('Chemin de sortie manquant (ex. public/images/apercu-partage.jpg)');
const [W, H] = [1200, 630];

const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
// Rendu au double puis réduit : contours plus fins.
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
// Une page du site : ses polices (next/font) et ses couleurs sont déjà chargées.
await p.goto('http://localhost:3100/fr');
await p.evaluate(
  ({ W, H }) => {
    document.body.innerHTML = `
      <div style="position:fixed;inset:0;width:${W}px;height:${H}px;overflow:hidden;display:flex;flex-direction:column;align-items:center;
        background:radial-gradient(ellipse 60% 75% at 50% 45%, #faf8f2 0%, #f4f0e8 60%, #efe9df 100%)">
        <img src="/images/ring-001-rendu-3d.webp" alt="" style="display:block;height:528px;width:704px;margin-top:6px;
          -webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%);
          mask-image:radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%)">
        <div style="margin-top:-4px;font-family:var(--font-display);font-weight:500;font-size:46px;letter-spacing:0.32em;
          margin-inline-start:0.32em;text-transform:uppercase;color:#1f1c18;line-height:1">JR Diamond</div>
      </div>`;
  },
  { W, H },
);
await p.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.decode()));
});
const fonts = await p.evaluate(() => [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family));
if (!fonts.some((f) => /Bodoni/i.test(f))) throw new Error(`Police du mot-symbole non chargée (${fonts.join(', ')})`);
const png = await p.screenshot({ clip: { x: 0, y: 0, width: W, height: H } });
await b.close();

await sharp(png).resize(W, H).jpeg({ quality: 86, mozjpeg: true, progressive: true }).toFile(out);
const meta = await sharp(out).metadata();
const { size } = await import('node:fs').then((fs) => fs.statSync(out));
console.log(`${out} : ${meta.width} × ${meta.height}, ${Math.round(size / 1024)} Ko`);
