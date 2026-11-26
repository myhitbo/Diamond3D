// Fabrique le PDF de l'étude de concurrence à partir de etude.html et style.css.
//   node docs/concurrence/presentation/build.mjs            → dist/JR-Diamond_Etude-de-concurrence_2026-11.pdf
//   node docs/concurrence/presentation/build.mjs --apercus  → en plus, une image par page dans dist/pages/
// Les images (img/) ne sont pas dans le dépôt : voir README.md et images.json. Les polices sont téléchargées au premier passage.
import { chromium } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, 'dist');
const OUT = path.join(dist, 'JR-Diamond_Etude-de-concurrence_2026-11.pdf');
fs.mkdirSync(dist, { recursive: true });

/* ---------- Polices (Google Fonts, licence OFL) : téléchargées une fois dans fonts/ ---------- */
async function fonts() {
  const dir = path.join(here, 'fonts');
  if (fs.existsSync(path.join(dir, 'fonts.css'))) return;
  fs.mkdirSync(dir, { recursive: true });
  const api =
    'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Jost:wght@300..700&family=Frank+Ruhl+Libre:wght@400;500;700&family=Assistant:wght@400;600&display=swap';
  const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
  const css = execFileSync('curl', ['-sS', '--max-time', '40', '-A', ua, api], { encoding: 'utf8' });
  const keep = [];
  let n = 0;
  for (const m of css.matchAll(/\/\* ([a-z-]+) \*\/\s*(@font-face \{[^}]*\})/g)) {
    if (!['latin', 'latin-ext', 'hebrew'].includes(m[1])) continue;
    const url = m[2].match(/url\((https:[^)]+)\)/)[1];
    const name = `police-${n++}.woff2`;
    execFileSync('curl', ['-sS', '--max-time', '60', '-o', path.join(dir, name), url]);
    keep.push(m[2].replace(url, name));
  }
  fs.writeFileSync(path.join(dir, 'fonts.css'), keep.join('\n') + '\n');
  console.log(`polices : ${keep.length} fichiers téléchargés`);
}

/* ---------- Typographie française : espaces insécables, appliquées au texte seulement (pas aux balises) ---------- */
const NB = ' ';
const FINE = ' ';
function typo(text) {
  return text
    .replace(/ ([;!?])/g, FINE + '$1')
    .replace(/ :/g, NB + ':')
    .replace(/« /g, '«' + NB)
    .replace(/ »/g, NB + '»')
    .replace(/≈ /g, '≈' + NB)
    .replace(/(\d) (\d{3})(?!\d)/g, '$1' + FINE + '$2')
    .replace(/(\d) (₪|€|\$|%|mm\b|g\b|ct\b|h\b|jours?\b|carats?\b|sites?\b|fois\b|mois\b|fils\b|rangs\b|lignes\b|dollars\b)/g, '$1' + NB + '$2')
    .replace(/\b(p\.) (\d)/g, '$1' + NB + '$2')
    .replace(/ (sur) (\d)/g, ' $1' + NB + '$2')
    .replace(/(\d) (ou) (\d)/g, '$1' + NB + '$2' + NB + '$3');
}
function typoHtml(html) {
  const [head, body] = html.split('<body>');
  const out = body.replace(/>([^<]+)</g, (_, t) => '>' + typo(t) + '<');
  return head + '<body>' + out;
}

await fonts();
const source = fs.readFileSync(path.join(here, 'etude.html'), 'utf8');
const printable = path.join(here, '.etude.impression.html');
fs.writeFileSync(printable, typoHtml(source));

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await page.goto('file://' + printable);
await page.evaluate(() => document.fonts.ready);
await page.waitForFunction(() => [...document.images].every((i) => i.complete));

/* ---------- Contrôles avant impression : image manquante, contenu qui dépasse la page ---------- */
const report = await page.evaluate(() => {
  const broken = [...document.images].filter((i) => !i.naturalWidth).map((i) => i.getAttribute('src'));
  const pages = [...document.querySelectorAll('.page')].map((p, k) => {
    const box = p.getBoundingClientRect();
    const folio = p.querySelector('.folio');
    const limit = folio ? folio.getBoundingClientRect().top - 4 : box.bottom;
    let worst = 0;
    for (const el of p.querySelectorAll(':scope > *:not(.folio):not(.cover-img):not(.back-foot)')) {
      const r = el.getBoundingClientRect();
      worst = Math.max(worst, r.bottom - limit, r.right - box.right + 0.5, box.left - r.left + 0.5);
    }
    return { page: k + 1, over: Math.round(worst), title: (p.querySelector('h1, h2, h3') || {}).textContent || '' };
  });
  return { broken, pages };
});
if (report.broken.length) console.log('IMAGES MANQUANTES :', report.broken.join(', '));
const over = report.pages.filter((p) => p.over > 0);
console.log(`${report.pages.length} pages` + (over.length ? ' ; DÉPASSEMENTS : ' + over.map((p) => `p. ${p.page} (+${p.over} px, « ${p.title.trim().slice(0, 28)} »)`).join(' ; ') : ' ; aucune page ne dépasse'));

await page.pdf({ path: OUT, width: '148mm', height: '210mm', printBackground: true, preferCSSPageSize: true });
await browser.close();
fs.rmSync(printable);
console.log(`${path.relative(process.cwd(), OUT)} : ${(fs.statSync(OUT).size / 1048576).toFixed(1)} Mo`);

if (process.argv.includes('--apercus')) {
  const pages = path.join(dist, 'pages');
  fs.rmSync(pages, { recursive: true, force: true });
  fs.mkdirSync(pages, { recursive: true });
  execFileSync('pdftoppm', ['-r', '110', '-png', OUT, path.join(pages, 'page')]);
  console.log(`aperçus : ${fs.readdirSync(pages).length} images dans ${path.relative(process.cwd(), pages)}`);
}
