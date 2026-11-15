import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Configurator from '@/components/configurator/Configurator';
import SiteHeader from '@/components/site/SiteHeader';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata } from '@/lib/metadata';

/**
 * Page cachée de mesure sur appareil réel (protocole : docs/DEVICE_TESTS.md).
 * Absente des menus et du plan du site ; jamais indexée, même quand le site deviendra public.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  return { title: 'Diagnostic', robots: { index: false, follow: false } };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return (
    <>
      <SiteHeader locale={locale as Locale} path="/diagnostic" />
      <main>
        <Configurator modelId="ring-001" locale={locale as Locale} diagnostic />
      </main>
    </>
  );
}
