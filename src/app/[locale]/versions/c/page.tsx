import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VersionC from '@/components/versions/c/VersionC';
import { versionCopy } from '@/components/versions/copy';
import VersionSwitcher from '@/components/versions/VersionSwitcher';
import { HOME } from '@/content/home';
import { VERSIONS } from '@/content/versions';
import { LOCALES, type Locale } from '@/lib/configurator/schema';

type Params = Promise<{ locale: string }>;

/**
 * Version C « Lumière » : page claire où la bague, en très gros plan, change de métal en traversant la page, puis se compose
 * dans la page (métal, solitaire ou alliance). Inspirée des sites de joaillerie à fond clair. Non indexée : version à comparer.
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'fr';
  return { title: VERSIONS.c.name[l], description: HOME[l].description, robots: { index: false, follow: false } };
}

export default async function Page({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const copy = versionCopy(locale, 'c');
  return (
    <>
      <VersionC copy={copy} rtl={locale === 'he'} />
      <VersionSwitcher locale={locale} current="c" />
    </>
  );
}
