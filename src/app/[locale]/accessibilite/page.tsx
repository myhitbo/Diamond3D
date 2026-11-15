import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPageView, { AccessibilityStatusBlock } from '@/components/site/LegalPageView';
import SiteHeader from '@/components/site/SiteHeader';
import { ACCESSIBILITY, ACCESSIBILITY_UPDATED } from '@/content/legal';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { accessibilityPath, languageAlternates } from '@/lib/routes';

type Params = Promise<{ locale: string }>;

/** Déclaration d'accessibilité : `/fr/accessibilite`, `/en/accessibility`, `/he/accessibility` (adresses traduites, `src/lib/routes.ts`). */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  const c = ACCESSIBILITY[locale as Locale];
  return pageMetadata(locale as Locale, {
    title: c.title,
    description: c.lede,
    path: accessibilityPath(locale as Locale),
    languages: languageAlternates('/accessibilite'),
  });
}

export default async function AccessibilityPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  return (
    <>
      <SiteHeader locale={locale} path="/accessibilite" />
      <LegalPageView page={ACCESSIBILITY[locale]} locale={locale} updated={ACCESSIBILITY_UPDATED} slots={{ status: <AccessibilityStatusBlock locale={locale} /> }} />
    </>
  );
}
