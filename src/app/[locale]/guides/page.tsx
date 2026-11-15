import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { GUIDE_LOCALES, GUIDE_UI, GUIDES, guidePath, isGuideLocale } from '@/content/guides';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { languageAlternates, localizedPath } from '@/lib/routes';
import styles from '../prose.module.css';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isGuideLocale(locale)) return notFoundMetadata(locale);
  const ui = GUIDE_UI[locale];
  return pageMetadata(locale, {
    title: ui.title,
    description: ui.lede,
    path: localizedPath(locale, '/guides'),
    languages: languageAlternates('/guides', GUIDE_LOCALES),
  });
}

/** Les guides existent en français et en anglais ; en hébreu, la page répond 404. */
export default async function GuidesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isGuideLocale(locale)) notFound();
  const ui = GUIDE_UI[locale];
  return (
    <>
      <SiteHeader locale={locale} path="/guides" locales={GUIDE_LOCALES} />
      <main id={MAIN_ID} className={styles.page}>
        <h1 className={styles.title}>{ui.title}</h1>
        <p className={styles.lede}>{ui.lede}</p>
        <ul className={styles.cards}>
          {GUIDES[locale].map((g) => (
            <li key={g.id}>
              <Link href={guidePath(locale, g.slug)} className={styles.card}>
                <span className={styles.cardTitle}>{g.title}</span>
                <span className={styles.cardText}>{g.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
