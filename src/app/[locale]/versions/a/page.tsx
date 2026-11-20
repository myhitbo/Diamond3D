import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VersionA from '@/components/versions/a/VersionA';
import { versionCopy } from '@/components/versions/copy';
import VersionSwitcher from '@/components/versions/VersionSwitcher';
import { HOME } from '@/content/home';
import { VERSIONS } from '@/content/versions';
import { LOCALES, type Locale } from '@/lib/configurator/schema';

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
  const copy = versionCopy(locale, 'a');
  return (
    <>
      <VersionA copy={copy} rtl={locale === 'he'} />
      <VersionSwitcher locale={locale} current="a" />
    </>
  );
}
