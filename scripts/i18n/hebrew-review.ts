// Relevé des textes hébreux du site, chacun avec son texte français, pour la relecture par une personne dont l'hébreu est la langue.
// L'hébreu a été traduit par l'IA : rien n'est validé tant que cette relecture n'est pas faite.
// Usage : npx tsx scripts/i18n/hebrew-review.ts <sortie.json> [<sortie.md>]
//
// Le script lit les données exportées par les fichiers de contenu (aucune page n'est ouverte). Deux formes sont reconnues :
// un objet { fr, he } dont les deux valeurs sont des textes, et deux arbres parallèles rangés sous les clés `fr` et `he`.
// Une phrase à trous (fonction) est rendue avec des repères ⟨1⟩, ⟨2⟩ à la place des valeurs, puis avec des nombres et des
// booléens pour faire apparaître ses variantes (singulier, pluriel, mention conditionnelle).
// Non relevés : les textes écrits dans un composant (page cachée /diagnostic) et les noms de langue du sélecteur.
import { writeFileSync } from 'node:fs';
import { BUSINESS, BUSINESS_LABELS, TO_COMPLETE, VAT_NOTICE } from '../../src/config/business';
import { METALS } from '../../src/config/metals';
import { FAQ } from '../../src/content/faq';
import { HOME } from '../../src/content/home';
import { ACCESSIBILITY, ACCESSIBILITY_STATUS, ACCESSIBILITY_STATUS_UI, PRIVACY } from '../../src/content/legal';
import { NOT_FOUND } from '../../src/content/not-found';
import { TRANSFORMATION } from '../../src/content/transformation';
import { STORY, VERSIONS, VERSIONS_UI } from '../../src/content/versions';
import { DICTIONARIES } from '../../src/i18n/dictionaries';
import { MODELS } from '../../src/models';

/** `doc` : identifiant stable du texte (tiré de sa clé), sous lequel la page de relecture enregistre la réponse du relecteur. */
export type ReviewItem = { id: string; doc: string; section: string; key: string; fr: string; he: string; template?: boolean };

const HEBREW = /[֐-׿]/;
const items: ReviewItem[] = [];
const skipped: string[] = [];

type Fn = (...args: unknown[]) => unknown;
const isText = (v: unknown): v is string => typeof v === 'string';
const isFn = (v: unknown): v is Fn => typeof v === 'function';
const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

function emit(section: string, key: string, fr: string, he: string, template = false) {
  // Identifiants, adresses, nombres : mêmes des deux côtés et sans lettre hébraïque, rien à relire.
  if (!HEBREW.test(he) && fr === he) return;
  // Ponctuation seule (« ; », « : » et leurs espaces) : rien à relire non plus.
  if (!/[A-Za-z֐-׿]/.test(he)) return;
  items.push({ id: '', doc: '', section, key, fr, he, ...(template ? { template } : {}) });
}

type Rendering = { text: string; skeleton: string } | null;
const RENDER_LABELS = ['', 'pour 1', 'pour 7', 'cas « oui »', 'cas « non »'];

/**
 * Rendus d'une phrase à trous : avec des repères ⟨1⟩, ⟨2⟩, puis avec le nombre 1, le nombre 7, et un booléen vrai puis faux
 * en dernier argument. `skeleton` est la phrase sans les valeurs glissées dedans : deux rendus de même squelette sont la même
 * tournure, deux squelettes différents révèlent un pluriel ou une mention conditionnelle.
 */
function renderings(fn: Fn): Rendering[] {
  const n = Math.max(fn.length, 1);
  const mark = (i: number) => `⟨${i + 1}⟩`;
  const sets: unknown[][] = [
    Array.from({ length: n }, (_, i) => mark(i)),
    Array.from({ length: n }, () => 1),
    Array.from({ length: n }, () => 7),
    Array.from({ length: n }, (_, i) => (i === n - 1 ? true : mark(i))),
    Array.from({ length: n }, (_, i) => (i === n - 1 ? false : mark(i))),
  ];
  return sets.map((args) => {
    try {
      const out = fn(...args);
      if (!isText(out) || !out) return null;
      let text = out;
      let skeleton = out.replace(/⟨\d+⟩/g, '⟨⟩');
      for (const value of new Set(args)) {
        if (typeof value === 'number') {
          const re = new RegExp(`(?<!\\d)${value}(?!\\d)`, 'g');
          text = text.replace(re, mark(0));
          skeleton = skeleton.replace(re, '⟨⟩');
        }
        if (typeof value === 'boolean') {
          const re = new RegExp(`\\b${value}\\b`, 'g');
          text = text.replace(re, mark(n - 1));
          skeleton = skeleton.replace(re, '⟨⟩');
        }
      }
      return { text, skeleton };
    } catch {
      return null;
    }
  });
}

function pairTemplates(section: string, key: string, fr: Fn, he: Fn) {
  const a = renderings(fr);
  const b = renderings(he);
  // La phrase dépend-elle du nombre ? Alors le rendu avec des repères (qui ne sont pas des nombres) mêlerait un singulier
  // d'un côté et un pluriel de l'autre : on ne garde que les rendus chiffrés.
  const numeric = !!(a[1] && a[2] && b[1] && b[2]) && (a[1].skeleton !== a[2].skeleton || b[1].skeleton !== b[2].skeleton);
  // Un seul argument, et c'est un nombre : les rendus avec un booléen n'ont pas de sens.
  const order = numeric ? (fr.length <= 1 ? [1, 2] : [1, 2, 3, 4]) : [0, 1, 2, 3, 4];
  const seen = new Map<string, { fr: string; he: string; label: string }>();
  for (const i of order) {
    const x = a[i];
    const y = b[i];
    if (!x || !y) continue;
    const k = `${x.skeleton}\u0000${y.skeleton}`;
    if (!seen.has(k)) seen.set(k, { fr: x.text, he: y.text, label: RENDER_LABELS[i] });
  }
  for (const v of seen.values()) emit(section, seen.size > 1 && v.label ? `${key} (${v.label})` : key, v.fr, v.he, true);
}

function pair(section: string, key: string, fr: unknown, he: unknown) {
  if (isText(fr) && isText(he)) return emit(section, key, fr, he);
  // Mention propre à la version hébraïque (badge « brouillon » de la traduction…) : pas de texte français en regard.
  if (isText(he) && (fr === null || fr === undefined)) return emit(section, key, '', he);
  if (isFn(fr) && isFn(he)) return pairTemplates(section, key, fr, he);
  if (Array.isArray(fr) && Array.isArray(he)) {
    if (fr.length !== he.length) skipped.push(`${key} : ${fr.length} éléments en français, ${he.length} en hébreu`);
    fr.forEach((v, i) => pair(section, `${key}[${i}]`, v, he[i]));
    return;
  }
  if (isObject(fr) && isObject(he)) {
    for (const k of new Set([...Object.keys(fr), ...Object.keys(he)])) {
      if (!(k in he)) {
        if (isText(fr[k]) || isObject(fr[k]) || Array.isArray(fr[k])) skipped.push(`${key}.${k} : absent de l'hébreu`);
        continue;
      }
      pair(section, `${key}.${k}`, fr[k], he[k]);
    }
    return;
  }
  if (fr !== undefined && he !== undefined && fr !== null && he !== null && typeof fr !== typeof he) skipped.push(`${key} : formes différentes en français et en hébreu`);
}

/** Parcourt une donnée quelconque : là où se trouvent les clés `fr` et `he`, les deux côtés sont lus ensemble. */
function walk(section: string, key: string, node: unknown) {
  if (Array.isArray(node)) return node.forEach((v, i) => walk(section, `${key}[${i}]`, v));
  if (!isObject(node)) return;
  if ('fr' in node && 'he' in node) return pair(section, key, node.fr, node.he);
  for (const [k, v] of Object.entries(node)) walk(section, key ? `${key}.${k}` : k, v);
}

// Sections dans l'ordre de lecture conseillé : ce que le visiteur voit en premier d'abord, les pages juridiques à la fin.
// Dans le dictionnaire de l'interface, les clés de premier niveau sont regroupées par écran.
const DICTIONARY_GROUPS: [string, RegExp][] = [
  ['Formulaire de devis', /^(quote|requestMessage)/],
  ['FAQ', /^faq/],
  ['En-tête et pied de page', /^(nav|footer|skip|brandTagline|shareImageAlt)/],
];
const dictionarySection = (key: string) => DICTIONARY_GROUPS.find(([, re]) => re.test(key))?.[0] ?? 'Configurateur';
const dictionary = (key: string) => pair(dictionarySection(key), `DICTIONARIES.${key}`, (DICTIONARIES.fr as Record<string, unknown>)[key], (DICTIONARIES.he as Record<string, unknown>)[key]);
const keys = Object.keys(DICTIONARIES.fr);

walk('Page d’accueil', 'HOME', HOME);
keys.filter((k) => dictionarySection(k) === 'En-tête et pied de page').forEach(dictionary);
keys.filter((k) => dictionarySection(k) === 'Configurateur').forEach(dictionary);
for (const [id, model] of Object.entries(MODELS)) {
  const { geometry: _geometry, asset: _asset, ...editorial } = model;
  walk('Modèles (noms et descriptions)', `MODELS.${id}`, editorial);
}
walk('Métaux', 'METALS', METALS);
keys.filter((k) => dictionarySection(k) === 'Formulaire de devis').forEach(dictionary);
walk('Bijou de famille', 'TRANSFORMATION', TRANSFORMATION);
keys.filter((k) => dictionarySection(k) === 'FAQ').forEach(dictionary);
walk('FAQ', 'FAQ', FAQ);
walk('Page introuvable (404)', 'NOT_FOUND', NOT_FOUND);
walk('Versions de l’accueil (A, B, C)', 'VERSIONS_UI', VERSIONS_UI);
walk('Versions de l’accueil (A, B, C)', 'STORY', STORY);
walk('Versions de l’accueil (A, B, C)', 'VERSIONS', VERSIONS);
walk('Informations de l’entreprise', 'BUSINESS', BUSINESS);
walk('Informations de l’entreprise', 'BUSINESS_LABELS', BUSINESS_LABELS);
walk('Informations de l’entreprise', 'TO_COMPLETE', TO_COMPLETE);
walk('Informations de l’entreprise', 'VAT_NOTICE', VAT_NOTICE);
walk('Déclaration d’accessibilité', 'ACCESSIBILITY', ACCESSIBILITY);
walk('Déclaration d’accessibilité', 'ACCESSIBILITY_STATUS_UI', ACCESSIBILITY_STATUS_UI);
walk('Déclaration d’accessibilité', 'ACCESSIBILITY_STATUS', ACCESSIBILITY_STATUS);
walk('Politique de confidentialité', 'PRIVACY', PRIVACY);

// Un même couple de textes dans la même section n'est relu qu'une fois ; le numéro suit l'ordre de lecture.
const unique = new Map<string, ReviewItem>();
for (const it of items) {
  const k = `${it.section}\u0000${it.fr}\u0000${it.he}`;
  if (!unique.has(k)) unique.set(k, it);
}
// Identifiant de document : la clé, réduite aux caractères qu'accepte un chemin de la base de la page (lettres, chiffres, _ - . ~ : @ +).
const docId = (key: string) =>
  key
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\[(\d+)\]/g, '.$1')
    .replace(/[«»()]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^A-Za-z0-9_.~:@+-]/g, '-')
    .slice(0, 180);
const usedDocs = new Set<string>();
const list = [...unique.values()].map((it, i) => {
  let doc = docId(it.key);
  for (let n = 2; usedDocs.has(doc); n += 1) doc = `${docId(it.key)}-${n}`;
  usedDocs.add(doc);
  return { ...it, id: String(i + 1).padStart(3, '0'), doc };
});

const [outJson, outMd] = process.argv.slice(2);
if (!outJson) throw new Error('Usage : npx tsx scripts/i18n/hebrew-review.ts <sortie.json> [<sortie.md>]');
// Un texte par ligne : le fichier se compare d'une version à l'autre et se charge tel quel dans la page de relecture.
writeFileSync(outJson, `[\n${list.map((it) => JSON.stringify(it)).join(',\n')}\n]\n`);
if (outMd) {
  const lines = ['# Relecture de l’hébreu', '', `${list.length} textes. Pour chaque texte : le français, puis l’hébreu à relire.`, ''];
  let section = '';
  for (const it of list) {
    if (it.section !== section) {
      section = it.section;
      lines.push(`## ${section}`, '');
    }
    lines.push(`**${it.id}** · \`${it.key}\`${it.template ? ' · phrase à trous' : ''}`, '', `- FR : ${it.fr.replace(/\n/g, ' ') || '(pas de texte français en regard)'}`, `- HE : ${it.he.replace(/\n/g, ' ')}`, '');
  }
  writeFileSync(outMd, lines.join('\n'));
}
const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
const bySection = new Map<string, { n: number; words: number }>();
for (const it of list) {
  const s = bySection.get(it.section) ?? { n: 0, words: 0 };
  s.n += 1;
  s.words += words(it.he);
  bySection.set(it.section, s);
}
for (const [name, s] of bySection) console.log(`${String(s.n).padStart(4)} textes, ${String(s.words).padStart(5)} mots  ${name}`);
console.log(`${list.length} textes, ${list.reduce((n, it) => n + words(it.he), 0)} mots d'hébreu ; phrases à trous : ${list.filter((it) => it.template).length}`);
if (skipped.length) console.log(`À regarder (${skipped.length}) :\n  ${skipped.slice(0, 40).join('\n  ')}`);
