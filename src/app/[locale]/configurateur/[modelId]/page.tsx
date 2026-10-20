import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Configurator from '@/components/configurator/Configurator';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { MODELS, getModel } from '@/models';

type Params = Promise<{ locale: string; modelId: string }>;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => Object.keys(MODELS).map((modelId) => ({ locale, modelId })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, modelId } = await params;
  const model = getModel(modelId);
  if (!model || !LOCALES.includes(locale as Locale)) return {};
  return {
    title: model.name[locale as Locale],
    description: model.description[locale as Locale],
    alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/configurateur/${modelId}`])) },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { locale, modelId } = await params;
  const model = getModel(modelId);
  if (!model || !LOCALES.includes(locale as Locale)) notFound();
  const t = DICTIONARIES[locale as Locale];
  return (
    <>
      <header className="site-header">
        <Link href={`/${locale}/configurateur/${modelId}`} className="wordmark">
          JR Diamond
        </Link>
        <p className="tagline">{t.brandTagline}</p>
        <nav className="lang" aria-label="Langue / Language">
          {LOCALES.map((l) => (
            <Link key={l} href={`/${l}/configurateur/${modelId}`} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
              {l}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Configurator modelId={modelId} locale={locale as Locale} />
      </main>
    </>
  );
}
