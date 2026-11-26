// Fabrique le PDF de l'étude de concurrence à partir de etude.html et style.css.
//   node docs/concurrence/presentation/build.mjs            → dist/JR-Diamond_Etude-de-concurrence_2026-11.pdf
//   node docs/concurrence/presentation/build.mjs --apercus  → en plus, une image par page dans dist/pages/
//   … --garder → garde la page assemblée (.etude.impression.html), pour une relecture du texte complet
// Les images (img/) ne sont pas dans le dépôt : voir README.md et images.json. Les polices sont téléchargées au premier passage.
// Dans etude.html : <!--@inclure nom--> insère .fragments/nom.html ; data-ancre="x" nomme une page ; {{page:x}} et href="#@x" y renvoient.
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

/* ---------- Pages « site par site » : fabriquées par pages_sites.py à partir de donnees/sites.json ---------- */
console.log(execFileSync('python3', [path.join(here, 'pages_sites.py')], { encoding: 'utf8' }).trim());

/* ---------- Assemblage : inclusions, numéros de page, renvois ---------- */
let source = fs.readFileSync(path.join(here, 'etude.html'), 'utf8');
source = source.replace(/<!--@inclure ([a-z-]+)-->/g, (_, name) => fs.readFileSync(path.join(here, '.fragments', name + '.html'), 'utf8'));
const anchors = {};
let pageNumber = 0;
source = source.replace(/<section class="page([^"]*)"([^>]*)>/g, (_, cls, attrs) => {
  pageNumber += 1;
  const anchor = /data-ancre="([^"]+)"/.exec(attrs);
  if (anchor) anchors[anchor[1]] = pageNumber;
  return `<section id="p${pageNumber}" class="page${cls}"${attrs}>`;
});
const resolve = (name) => {
  if (!anchors[name]) throw new Error('renvoi vers une page inconnue : ' + name);
  return anchors[name];
};
source = source.replace(/\{\{page:([a-z0-9-]+)\}\}/g, (_, name) => String(resolve(name))).replace(/href="#@([a-z0-9-]+)"/g, (_, name) => `href="#p${resolve(name)}"`);
const printable = path.join(here, '.etude.impression.html');
fs.writeFileSync(printable, typoHtml(source));

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await page.goto('file://' + printable);
await page.evaluate(() => document.fonts.ready);
await page.waitForFunction(() => [...document.images].every((i) => i.complete));

/* ---------- Annexe : une section « data-paginer » est découpée en pages de deux colonnes, d'après la hauteur réelle des blocs ---------- */
const annexPages = await page.evaluate(() => {
  let made = 0;
  for (const first of document.querySelectorAll('section[data-paginer]')) {
    const items = [...first.querySelectorAll('.a-flux > *')];
    first.querySelector('.a-flux').remove();
    const columns = (section) => {
      const wrap = document.createElement('div');
      wrap.className = 'a-cols';
      wrap.innerHTML = '<div class="a-col"></div><div class="a-col"></div>';
      section.insertBefore(wrap, section.querySelector('.folio'));
      return [...wrap.children];
    };
    const sections = [first];
    let section = first;
    let cols = columns(section);
    let side = 0;
    const limit = () => section.querySelector('.folio').getBoundingClientRect().top - 14;
    for (const item of items) {
      cols[side].append(item);
      if (item.getBoundingClientRect().bottom <= limit()) continue;
      const carry = [item];
      item.remove();
      const last = cols[side].lastElementChild;
      if (last && last.classList.contains('a-etat')) {
        last.remove(); // un nom d'État ne reste pas seul en bas de colonne
        carry.unshift(last);
      }
      if (side === 0) side = 1;
      else {
        const next = document.createElement('section');
        next.className = first.className;
        // le surtitre est rempli plus bas : il lui faut déjà sa ligne, sinon la page gagne une ligne après la mise en colonnes
        next.innerHTML = '<p class="kicker">…</p><h2>' + first.querySelector('h2').textContent + ' <em>(suite)</em></h2>' + first.querySelector('.folio').outerHTML;
        section.after(next);
        sections.push(next);
        section = next;
        cols = columns(section);
        side = 0;
      }
      cols[side].append(...carry);
    }
    const label = first.querySelector('.kicker').textContent;
    sections.forEach((s, k) => {
      s.querySelector('.kicker').textContent = `${label} ${k + 1} sur ${sections.length}`;
      if (k) s.dataset.signet = `${first.dataset.signet} (${k + 1})`;
    });
    made += sections.length;
  }
  return made;
});
if (annexPages) console.log(`annexe : ${annexPages} pages`);

/* ---------- Contrôles avant impression : image manquante, contenu qui dépasse la page ---------- */
const report = await page.evaluate(() => {
  const broken = [...document.images].filter((i) => !i.naturalWidth).map((i) => i.getAttribute('src'));
  const pages = [...document.querySelectorAll('.page')].map((p, k) => {
    const box = p.getBoundingClientRect();
    const folio = p.querySelector('.folio');
    const limit = folio ? folio.getBoundingClientRect().top - 4 : box.bottom;
    let worst = 0;
    let where = '';
    for (const el of p.querySelectorAll(':scope > *:not(.folio):not(.cover-img):not(.back-foot)')) {
      const r = el.getBoundingClientRect();
      const over = Math.max(r.bottom - limit, r.right - box.right + 0.5, box.left - r.left + 0.5);
      if (over > worst) {
        worst = over;
        where = (r.bottom - limit >= over ? 'bas' : 'côté') + ' de ' + el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : '');
      }
    }
    return { page: k + 1, over: Math.round(worst), where, title: (p.querySelector('h1, h2, h3') || {}).textContent || '' };
  });
  const clean = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
  const titles = [...document.querySelectorAll('.page')].map((p, k) => p.dataset.signet || clean(p.querySelector('h1, h2')) || `Page ${k + 1}`);
  return { broken, pages, titles };
});
if (report.broken.length) console.log('IMAGES MANQUANTES :', report.broken.join(', '));
const over = report.pages.filter((p) => p.over > 0);
console.log(`${report.pages.length} pages` + (over.length ? ' ; DÉPASSEMENTS : ' + over.map((p) => `p. ${p.page} (+${p.over} px, ${p.where}, « ${p.title.trim().slice(0, 28)} »)`).join(' ; ') : ' ; aucune page ne dépasse'));

await page.pdf({ path: OUT, width: '148mm', height: '210mm', printBackground: true, preferCSSPageSize: true, tagged: true });
await browser.close();
if (process.argv.includes('--garder')) console.log('page assemblée gardée : ' + path.relative(process.cwd(), printable));
else fs.rmSync(printable);

/* ---------- Signets et métadonnées (pypdf) : sans lui, le PDF reste lisible, sans signets ---------- */
const titlesFile = path.join(dist, '.titres.json');
fs.writeFileSync(titlesFile, JSON.stringify(report.titles));
try {
  console.log(execFileSync('python3', [path.join(here, 'signets.py'), OUT, titlesFile], { encoding: 'utf8' }).trim());
} catch (e) {
  console.log('signets non posés (python3 et pypdf requis) : ' + String(e.message).split('\n')[0]);
}
fs.rmSync(titlesFile, { force: true });
console.log(`${path.relative(process.cwd(), OUT)} : ${(fs.statSync(OUT).size / 1048576).toFixed(1)} Mo`);

if (process.argv.includes('--apercus')) {
  const pages = path.join(dist, 'pages');
  fs.rmSync(pages, { recursive: true, force: true });
  fs.mkdirSync(pages, { recursive: true });
  execFileSync('pdftoppm', ['-r', '110', '-png', OUT, path.join(pages, 'page')]);
  console.log(`aperçus : ${fs.readdirSync(pages).length} images dans ${path.relative(process.cwd(), pages)}`);
}
