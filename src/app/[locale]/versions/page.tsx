import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import VersionSwitcher from '@/components/versions/VersionSwitcher';
import { VERSION_IDS, VERSIONS, VERSIONS_UI } from '@/content/versions';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import styles from '../prose.module.css';
import own from './versions.module.css';

type Params = Promise<{ locale: string }>;

/** Index des trois versions de l'accueil (outil de comparaison, non indexé, hors menu). */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'fr';
  return { title: VERSIONS_UI[l].title, robots: { index: false, follow: false } };
}

export default async function VersionsIndex({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const ui = VERSIONS_UI[locale];
  return (
    <>
      <SiteHeader locale={locale} path="/versions" />
      <main id={MAIN_ID} className={styles.page}>
        <h1 className={styles.title}>{ui.title}</h1>
        <p className={styles.lede}>{ui.intro}</p>
        <p className={styles.badge}>{ui.draft}</p>
        <ul className={own.list}>
          {VERSION_IDS.map((id) => (
            <li key={id}>
              <Link href={`/${locale}/versions/${id}`} className={own.card}>
                <span className={own.name}>{VERSIONS[id].name[locale]}</span>
                <span className={own.summary}>{VERSIONS[id].summary[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <VersionSwitcher locale={locale} />
    </>
  );
}
