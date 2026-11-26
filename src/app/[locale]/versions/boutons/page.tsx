import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ButtonStylesShowcase from '@/components/configurator/ButtonStyles';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import styles from '../../prose.module.css';

type Params = Promise<{ locale: string }>;

/** Comparaison des cinq styles de boutons du configurateur (outil de choix avec l'atelier, non indexé, hors menu). */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'fr';
  return { title: DICTIONARIES[l].buttonStyles.title, robots: { index: false, follow: false } };
}

export default async function ButtonStylesPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = DICTIONARIES[locale];
  return (
    <>
      <SiteHeader locale={locale} path="/versions/boutons" />
      <main id={MAIN_ID} className={styles.page}>
        <h1 className={styles.title}>{t.buttonStyles.title}</h1>
        <p className={styles.lede}>{t.buttonStyles.intro}</p>
        <ButtonStylesShowcase locale={locale} />
      </main>
    </>
  );
}
