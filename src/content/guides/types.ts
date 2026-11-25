/**
 * Types et outils communs aux guides. Contenu : `fr.ts` (règles de rédaction en tête) et `en.ts`.
 * Ce module ne charge aucun contenu : l'en-tête et le pied de page peuvent l'importer sans alourdir les pages.
 */
import type { Locale } from '@/lib/configurator/schema';

/** Langues dans lesquelles les guides existent. L'hébreu attend une relecture native. */
export const GUIDE_LOCALES = ['fr', 'en'] as const satisfies readonly Locale[];
export type GuideLocale = (typeof GUIDE_LOCALES)[number];
export const isGuideLocale = (locale: string): locale is GuideLocale => (GUIDE_LOCALES as readonly string[]).includes(locale);

/** Identifiant commun aux traductions d'un même guide (l'adresse, elle, est traduite). */
export type GuideId = 'synthetique' | 'formes' | 'kiddouchin' | '4c' | 'or' | 'taille';

export type GuideSource = { label: string; url: string };
/** Tableau simple : la première colonne sert d'en-tête de ligne. */
export type GuideTable = { caption: string; head: string[]; rows: string[][] };
/** Ordre d'affichage : `paragraphs`, puis `list`, puis `table`, puis `after`. */
export type GuideSection = { id: string; title: string; paragraphs?: string[]; list?: string[]; table?: GuideTable; after?: string[] };
export type GuideLink = { label: string; href: string };
export type Guide = {
  id: GuideId;
  slug: string;
  title: string;
  /** Résumé d'une à deux phrases (liste des guides, balise description). */
  description: string;
  /** Date de dernière vérification des faits, AAAA-MM-JJ. */
  verified: string;
  sections: GuideSection[];
  sources: GuideSource[];
  /** Liens internes proposés en fin de guide. */
  next: GuideLink[];
};

/**
 * Correspondance des tailles de bague, calculée plutôt que recopiée :
 * - taille européenne (France, Europe, Israël ; système de l'atelier, 16/11) = tour intérieur en mm (ISO 8653:2016) ;
 *   diamètre = tour / π. La « taille israélienne = européenne − 40 » de certains tableaux n'est plus présentée comme la norme ;
 * - taille américaine ≈ (tour − 36,5) / 2,55, arrondie au quart (échelle nord-américaine : 0,032 po de diamètre par taille).
 * Le diamètre s'écrit avec une virgule en français, un point en anglais.
 */
const QUARTERS = ['', '¼', '½', '¾'];
export function ringSizeRow(circumferenceMm: number, locale: GuideLocale = 'fr') {
  const us = Math.round(((circumferenceMm - 36.5) / 2.55) * 4) / 4;
  const whole = Math.floor(us);
  const diameter = (circumferenceMm / Math.PI).toFixed(1);
  return {
    eu: String(circumferenceMm),
    diameterMm: locale === 'fr' ? diameter.replace('.', ',') : diameter,
    us: `${whole}${QUARTERS[Math.round((us - whole) * 4)]}`,
  };
}
/** Tailles européennes du tableau : 46 à 66. */
export const SIZE_RANGE = Array.from({ length: 21 }, (_, i) => 46 + i);
