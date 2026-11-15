import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import TransformationForm from '@/components/site/TransformationForm';
import { TRANSFORMATION } from '@/content/transformation';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { languageAlternates, localizedPath } from '@/lib/routes';
import styles from '../prose.module.css';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  const c = TRANSFORMATION[locale as Locale];
  return pageMetadata(locale as Locale, {
    title: c.title,
    description: c.lede,
    path: localizedPath(locale as Locale, '/transformation'),
    languages: languageAlternates('/transformation'),
  });
}

export default async function TransformationPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const c = TRANSFORMATION[locale];
  return (
    <>
      <SiteHeader locale={locale} path="/transformation" />
      <main id={MAIN_ID} className={styles.page}>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.lede}>{c.lede}</p>
        <p className={styles.badge}>{c.draft}</p>

        <h2 className={styles.h2}>{c.stepsTitle}</h2>
        <ol className={styles.steps}>
          {c.steps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </li>
          ))}
        </ol>

        <h2 className={styles.h2}>{c.frankTitle}</h2>
        <div className={styles.body}>
          <ul>
            {c.frank.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className={styles.formWrap}>
          <TransformationForm locale={locale} />
        </div>
      </main>
    </>
  );
}
