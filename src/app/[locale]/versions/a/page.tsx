import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VersionA, { type CopyA } from '@/components/versions/a/VersionA';
import VersionSwitcher from '@/components/versions/VersionSwitcher';
import { isGuideLocale } from '@/content/guides/types';
import { HOME } from '@/content/home';
import { STORY, VERSIONS } from '@/content/versions';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { accessibilityPath, configuratorPath, homePath, localizedPath } from '@/lib/routes';
import { ring001 } from '@/models/ring-001/definition';

type Params = Promise<{ locale: string }>;

/**
 * Version A « Écrin » : le système d'un site de lancement de produit (objet 3D en carrousel, puis qui traverse la page au
 * défilement), avec la bague et ses quatre métaux à la place des parfums. Non indexée : version à comparer.
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'fr';
  return { title: VERSIONS.a.name[l], description: HOME[l].description, robots: { index: false, follow: false } };
}

export default async function Page({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const home = HOME[locale];
  const t = DICTIONARIES[locale];
  const story = STORY[locale];
  // Textes de la langue affichée seulement : le composant client ne reçoit pas les trois langues.
  const copy: CopyA = {
    skip: t.skipToContent,
    accessibility: { label: t.navAccessibility, href: accessibilityPath(locale) },
    home: homePath(locale),
    configurator: configuratorPath(locale),
    navLabel: t.navLabel,
    menu: story.menu,
    nav: [
      { label: t.navConfigurator, href: configuratorPath(locale) },
      { label: t.navTransformation, href: localizedPath(locale, '/transformation') },
      ...(isGuideLocale(locale) ? [{ label: t.navGuides, href: localizedPath(locale, '/guides') }] : []),
      { label: t.navFaq, href: localizedPath(locale, '/faq') },
    ],
    languages: LOCALES.map((l) => ({ code: l, label: { fr: 'FR', en: 'EN', he: 'עב' }[l], href: `/${l}/versions/a`, current: l === locale })),
    eyebrow: home.eyebrow,
    title: home.title.join(''),
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
    materials: home.materials,
    compositionsTitle: story.compositionsTitle,
    compositions: ring001.compositions.map((c) => ({ name: c.name[locale], description: c.description[locale] })),
    moreTitle: home.moreTitle,
    more: [
      { href: localizedPath(locale, '/transformation'), ...home.more.transformation },
      ...(isGuideLocale(locale) && home.more.guides ? [{ href: localizedPath(locale, '/guides'), ...home.more.guides }] : []),
      { href: localizedPath(locale, '/faq'), ...home.more.faq },
    ],
    finalTitle: home.finalTitle,
    fallbackAlt: home.image.alt,
  };
  return (
    <>
      <VersionA copy={copy} rtl={locale === 'he'} />
      <VersionSwitcher locale={locale} current="a" />
    </>
  );
}
