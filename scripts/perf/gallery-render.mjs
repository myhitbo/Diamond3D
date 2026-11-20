// Images éditoriales de l'accueil : captures du vrai rendu 3D de ring-001 (configurateur), sur fond transparent, recadrées.
// Usage : CHROMIUM_PATH=… scripts/perf/serve-and-run.sh scripts/perf/gallery-render.mjs <dossier de sortie> [nom…]
// Sans nom : toutes les vues de SHOTS. Chaque vue : paramètres de l'adresse (configuration), bouton de vue, zoom au clavier,
// rotation en degrés, format de sortie. Rendu logiciel (SwiftShader) : capture refusée si le rendu simplifié s'est activé.
// À refaire quand le modèle ou le rendu change. Ce sont des rendus 3D, pas des photos : les légendes de la page le disent.
import { chromium } from '@playwright/test';
import sharp from 'sharp';

const SHOTS = {
  // Premier écran : ensemble en or jaune 18 carats, vue 3/4 un peu tournée, grand format.
  'ring-001-hero': { params: 'metal=yellow-gold-18k', orbit: -18, zoom: 1, size: [1800, 1500] },
  // Les quatre métaux, même cadrage (galerie « Métaux »).
  'ring-001-or-jaune': { params: 'metal=yellow-gold-18k', size: [1000, 1250] },
  'ring-001-or-blanc': { params: 'metal=white-gold-18k', size: [1000, 1250] },
  'ring-001-or-rose': { params: 'metal=rose-gold-18k', size: [1000, 1250] },
  'ring-001-platine': { params: 'metal=platinum-950', size: [1000, 1250] },
  // Détail : la marquise et ses six diamants ronds, recadrés au centre de la vue de dessus (`detail` : part de la largeur du bijou).
  'ring-001-marquise-detail': { params: 'metal=yellow-gold-18k&composition=solitaire', view: 'Dessus', zoom: 2, detail: 0.62, size: [1400, 1000] },
};

const out = process.argv[2];
if (!out) throw new Error('Dossier de sortie manquant (ex. public/images/rendus)');
const names = process.argv.slice(3).length ? process.argv.slice(3) : Object.keys(SHOTS);

const b = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});

for (const name of names) {
  const s = SHOTS[name];
  if (!s) throw new Error(`Vue inconnue : ${name}`);
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: s.zoom ? 3 : 2 });
  const p = await ctx.newPage();
  await p.goto(`http://localhost:3100/fr/configurateur/ring-001?debug=1&${s.params}`);
  await p.waitForFunction(() => window.__jr?.ready, null, { timeout: 120000 });
  // Fond transparent : la page place la bague sur son propre fond. Barre des vues et consigne masquées.
  await p.addStyleTag({
    content:
      'html, body, main, section, [class*="stage"] { background: transparent !important; } [class*="stageBar"], [class*="hint"], header, aside { opacity: 0 !important; } *:focus, *:focus-visible { outline: none !important; }',
  });
  if (s.view) await p.getByRole('button', { name: s.view, exact: true }).click();
  await p.waitForTimeout(800);
  if (s.orbit) await p.evaluate((d) => window.__jr.orbit(d), s.orbit);
  if (s.zoom) {
    await p.locator('[role="img"][tabindex="0"]').first().focus();
    for (let i = 0; i < s.zoom; i++) {
      await p.keyboard.press('+');
      await p.waitForTimeout(250);
    }
  }
  await p.waitForTimeout(1800);
  const q = await p.evaluate(() => window.__jr.quality);
  if (q !== 'high') throw new Error(`${name} : rendu simplifié actif, capture refusée (relancer).`);
  const png = await p.locator('canvas').first().screenshot({ omitBackground: true });
  await ctx.close();

  // Recadrage autour des pixels visibles (alpha), marge, puis format demandé (fond transparent conservé).
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  let [x0, y0, x1, y1] = [width, height, 0, 0];
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++)
      if (data[(y * width + x) * 4 + 3] > 24) [x0, y0, x1, y1] = [Math.min(x0, x), Math.min(y0, y), Math.max(x1, x), Math.max(y1, y)];
  if (x1 <= x0 || y1 <= y0) throw new Error(`${name} : bague introuvable.`);
  const [W, H] = s.size;
  const m = 0.08 * Math.max(x1 - x0, y1 - y0);
  let w = s.detail ? (x1 - x0) * s.detail : x1 - x0 + 2 * m;
  let h = s.detail ? (w * H) / W : y1 - y0 + 2 * m;
  // Vue entière : élargie au format demandé. Détail : déjà au format, centré sur le bijou.
  if (!s.detail) {
    if (w / h < W / H) w = (h * W) / H;
    else h = (w * H) / W;
  }
  // Zone hors de la capture : complétée en transparent.
  const left = Math.round((x0 + x1) / 2 - w / 2);
  const top = Math.round((y0 + y1) / 2 - h / 2);
  const ext = { top: Math.max(0, -top), left: Math.max(0, -left), bottom: Math.max(0, top + Math.round(h) - height), right: Math.max(0, left + Math.round(w) - width) };
  const padded = await sharp(png)
    .extend({ ...ext, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const file = `${out}/${name}.webp`;
  await sharp(padded)
    .extract({ left: left + ext.left, top: top + ext.top, width: Math.round(w), height: Math.round(h) })
    .resize(W, H, { fit: 'cover' })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(file);
  console.log(`${file} : bague ${x1 - x0} × ${y1 - y0} px`);
}
await b.close();
