import { isGuideLocale } from '@/content/guides/types';
import { HOME } from '@/content/home';
import { STORY, type VersionId } from '@/content/versions';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale, type MetalId } from '@/lib/configurator/schema';
import { accessibilityPath, configuratorPath, homePath, localizedPath } from '@/lib/routes';
import { ring001 } from '@/models/ring-001/definition';

/**
 * Textes d'une version, dans la langue affichée seulement : la page (serveur) les assemble et les passe au composant client, qui ne
 * reçoit donc pas les trois langues. Tout vient de l'accueil (`HOME`), du modèle (`ring001`), du dictionnaire et de `STORY` :
 * aucune affirmation nouvelle.
 */
export type Family = 'yellow' | 'white' | 'rose' | 'platinum';

export type VersionCopy = {
  skip: string;
  accessibility: { label: string; href: string };
  home: string;
  configurator: string;
  navLabel: string;
  menu: string;
  sectionsLabel: string;
  nav: { label: string; href: string }[];
  languages: { code: string; label: string; href: string; current: boolean }[];
  eyebrow: string;
  title: string;
  /** Le titre en trois morceaux : celui du milieu est mis en valeur. */
  titleParts: string[];
  lede: string;
  cta: string;
  ctaNote: string;
  draft: string;
  metalLabel: string;
  metals: { family: Family; id: MetalId; name: string }[];
  prevMetal: string;
  nextMetal: string;
  scrollHint: string;
  liveNote: string;
  model: { name: string; description: string };
  pointsTitle: string;
  points: { kicker: string; title: string; text: string }[];
  statement: string;
  making: string;
  metalsTitle: string;
  materialsTitle: string;
  materials: { term: string; text: string }[];
  compositionsTitle: string;
  compositionLabel: string;
  /** `id` : `set` (les deux bagues), `solitaire` ou `band` (alliance). */
  compositions: { id: string; name: string; description: string }[];
  moreTitle: string;
  more: { href: string; title: string; text: string }[];
  finalTitle: string;
  fallbackAlt: string;
};

export function versionCopy(locale: Locale, id: VersionId): VersionCopy {
  const home = HOME[locale];
  const t = DICTIONARIES[locale];
  const story = STORY[locale];
  return {
    skip: t.skipToContent,
    accessibility: { label: t.navAccessibility, href: accessibilityPath(locale) },
    home: homePath(locale),
    configurator: configuratorPath(locale),
    navLabel: t.navLabel,
    menu: story.menu,
    sectionsLabel: story.sections,
    nav: [
      { label: t.navConfigurator, href: configuratorPath(locale) },
      { label: t.navTransformation, href: localizedPath(locale, '/transformation') },
      ...(isGuideLocale(locale) ? [{ label: t.navGuides, href: localizedPath(locale, '/guides') }] : []),
      { label: t.navFaq, href: localizedPath(locale, '/faq') },
    ],
    languages: LOCALES.map((l) => ({ code: l, label: { fr: 'FR', en: 'EN', he: 'עב' }[l], href: `/${l}/versions/${id}`, current: l === locale })),
    eyebrow: home.eyebrow,
    title: home.title.join(''),
    titleParts: home.title,
    lede: home.lede,
    cta: home.cta,
    ctaNote: home.ctaNote,
    draft: home.draft,
    metalLabel: t.metal,
    metals: [
      { family: 'yellow', id: 'yellow-gold-18k', name: t.metalFamilies.yellow },
      { family: 'white', id: 'white-gold-18k', name: t.metalFamilies.white },
      { family: 'rose', id: 'rose-gold-18k', name: t.metalFamilies.rose },
      { family: 'platinum', id: 'platinum-950', name: t.metalFamilies.platinum },
    ],
    prevMetal: story.prevMetal,
    nextMetal: story.nextMetal,
    scrollHint: story.scrollHint,
    liveNote: story.liveNote,
    model: { name: ring001.name[locale], description: ring001.description[locale] },
    pointsTitle: home.pointsTitle,
    points: home.points.map((p, i) => ({ kicker: story.kickers[i], title: p.title, text: p.text })),
    statement: home.eyebrow,
    making: home.making,
    metalsTitle: home.metalsTitle,
    materialsTitle: home.materialsTitle,
    materials: home.materials,
    compositionsTitle: story.compositionsTitle,
    compositionLabel: t.composition,
    compositions: ring001.compositions.map((c) => ({ id: c.id, name: c.name[locale], description: c.description[locale] })),
    moreTitle: home.moreTitle,
    more: [
      { href: localizedPath(locale, '/transformation'), ...home.more.transformation },
      ...(isGuideLocale(locale) && home.more.guides ? [{ href: localizedPath(locale, '/guides'), ...home.more.guides }] : []),
      { href: localizedPath(locale, '/faq'), ...home.more.faq },
    ],
    finalTitle: home.finalTitle,
    fallbackAlt: home.image.alt,
  };
}
