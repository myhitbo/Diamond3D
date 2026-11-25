/**
 * Types communs aux pages légales : déclaration d'accessibilité (`accessibility.ts`) et politique de confidentialité (`privacy.ts`).
 *
 * Règles de rédaction :
 * - n'y figure que ce qui est vrai aujourd'hui et vérifié : le comportement du code (relu, pas seulement d'après la recherche)
 *   et les textes de loi lus ; ce qui est déduit ou supposé va dans les questions à l'atelier ou à l'avocat
 *   (`docs/QUESTIONS_ATELIER.md`, `docs/juridique/DOSSIER_AVOCAT_IL.md`) ;
 * - les informations de l'entreprise s'écrivent `{nom}` et viennent de `src/config/business.ts` (marque « à compléter » tant
 *   qu'elles manquent) ;
 * - mêmes rubriques, dans le même ordre, et mêmes informations `{…}` dans les trois langues (un test le vérifie) ;
 * - hébreu : traduction automatique, relecture native à faire ; les deux pages portent un badge « Brouillon » jusqu'à la
 *   validation par l'avocat ;
 * - ne lier qu'à des adresses contrôlées (règle de contrôle des liens de CLAUDE.md).
 */
import type { Locale } from '@/lib/configurator/schema';

export type Trilingual = Record<Locale, string>;

export type LegalLink = { label: string; url: string };

/**
 * Rubrique : titre, puis `paragraphs`, `list`, `after`. `slot: 'status'` place l'état de conformité
 * (`ACCESSIBILITY_STATUS`) après les paragraphes de la rubrique.
 */
export type LegalSection = { id: string; title: string; paragraphs?: string[]; list?: string[]; after?: string[]; slot?: 'status' };

export type LegalPage = {
  title: string;
  /** Résumé (chapeau de page, balise description). */
  lede: string;
  badge: string;
  /** « Mise à jour le … » */
  updated: (date: string) => string;
  sections: LegalSection[];
  linksTitle: string;
  links: LegalLink[];
};

/** Noms des informations de l'entreprise appelées par un texte (`{legalName}` → `legalName`). */
export const tokensOf = (text: string): string[] => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);

/** Tous les textes d'une rubrique, dans l'ordre d'affichage. */
export const sectionTexts = (s: LegalSection): string[] => [s.title, ...(s.paragraphs ?? []), ...(s.list ?? []), ...(s.after ?? [])];

export const DATE_LOCALE: Record<Locale, string> = { fr: 'fr-FR', en: 'en-GB', he: 'he-IL' };

export const formatLegalDate = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat(DATE_LOCALE[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
