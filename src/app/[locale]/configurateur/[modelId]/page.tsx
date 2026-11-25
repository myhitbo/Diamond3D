import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Configurator from '@/components/configurator/Configurator';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { configuratorPath, languageAlternates } from '@/lib/routes';
import { MODELS, getModel } from '@/models';

type Params = Promise<{ locale: string; modelId: string }>;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => Object.keys(MODELS).map((modelId) => ({ locale, modelId })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, modelId } = await params;
  const model = getModel(modelId);
  if (!model || !LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  return pageMetadata(locale as Locale, {
    title: model.name[locale as Locale],
    description: model.description[locale as Locale],
    path: configuratorPath(locale as Locale, modelId),
    languages: languageAlternates(`/configurateur/${modelId}`),
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale, modelId } = await params;
  const model = getModel(modelId);
  if (!model || !LOCALES.includes(locale as Locale)) notFound();
  return (
    <>
      <SiteHeader locale={locale as Locale} path={`/configurateur/${modelId}`} />
      <main id={MAIN_ID}>
        <Configurator modelId={modelId} locale={locale as Locale} />
      </main>
    </>
  );
}
