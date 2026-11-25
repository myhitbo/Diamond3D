import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalPageView from '@/components/site/LegalPageView';
import SiteHeader from '@/components/site/SiteHeader';
import { PRIVACY, PRIVACY_UPDATED } from '@/content/legal';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { languageAlternates, privacyPath } from '@/lib/routes';

type Params = Promise<{ locale: string }>;

/** Politique de confidentialité : `/fr/confidentialite`, `/en/privacy`, `/he/privacy` (adresses traduites, `src/lib/routes.ts`). */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  const c = PRIVACY[locale as Locale];
  return pageMetadata(locale as Locale, {
    title: c.title,
    description: c.lede,
    path: privacyPath(locale as Locale),
    languages: languageAlternates('/confidentialite'),
  });
}

export default async function PrivacyPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  return (
    <>
      <SiteHeader locale={locale} path="/confidentialite" />
      <LegalPageView page={PRIVACY[locale]} locale={locale} updated={PRIVACY_UPDATED} />
    </>
  );
}
