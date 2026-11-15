/**
 * Guides par langue (`/fr/guides/…`, `/en/guides/…`). L'hébreu n'a pas de guides : ses adresses répondent 404.
 * Un même guide garde son `id` d'une langue à l'autre ; son adresse (`slug`) est traduite.
 */
import { GUIDES_EN } from './en';
import { GUIDES_FR } from './fr';
import { GUIDE_LOCALES, isGuideLocale, type Guide, type GuideId, type GuideLocale } from './types';

export * from './types';

/** Mêmes guides, dans le même ordre, dans chaque langue. */
export const GUIDES: Record<GuideLocale, Guide[]> = { fr: GUIDES_FR, en: GUIDES_EN };

export const getGuide = (locale: string, slug: string): Guide | undefined =>
  isGuideLocale(locale) ? GUIDES[locale].find((g) => g.slug === slug) : undefined;

export const guidePath = (locale: GuideLocale, slug: string) => `/${locale}/guides/${slug}`;

/** Adresse du même guide dans chaque langue où il existe (sélecteur de langue, `alternates.languages`). */
export function guideAlternates(id: GuideId): Partial<Record<GuideLocale, string>> {
  const out: Partial<Record<GuideLocale, string>> = {};
  for (const l of GUIDE_LOCALES) {
    const g = GUIDES[l].find((x) => x.id === id);
    if (g) out[l] = guidePath(l, g.slug);
  }
  return out;
}

/** Textes d'interface des pages de guides. */
export const GUIDE_UI: Record<
  GuideLocale,
  { title: string; lede: string; badge: string; checked: (date: string) => string; furtherReading: string; dateLocale: string }
> = {
  fr: {
    title: 'Guides',
    lede: 'Des explications courtes et sourcées, pour choisir sans se faire raconter d’histoires.',
    badge: 'Brouillon · guide en attente de relecture par l’atelier',
    checked: (date) => `Faits vérifiés le ${date}. Sources :`,
    furtherReading: 'Pour aller plus loin',
    dateLocale: 'fr-FR',
  },
  en: {
    title: 'Guides',
    lede: 'Short, sourced explanations, so you can choose without being told stories.',
    badge: 'Draft · guide awaiting review by the workshop',
    checked: (date) => `Facts checked on ${date}. Sources:`,
    furtherReading: 'Further reading',
    dateLocale: 'en-GB',
  },
};
