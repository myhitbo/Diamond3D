import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site/SiteHeader';
import { GUIDES } from '@/content/guides';
import styles from '../prose.module.css';

type Params = Promise<{ locale: string }>;

const TITLE = 'Guides';
const LEDE = 'Des explications courtes et sourcées, pour choisir sans se faire raconter d’histoires.';

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return locale === 'fr' ? { title: TITLE, description: LEDE, alternates: { canonical: '/fr/guides' } } : {};
}

/** Les guides n'existent qu'en français. */
export default async function GuidesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (locale !== 'fr') notFound();
  return (
    <>
      <SiteHeader locale="fr" path="/guides" locales={['fr']} />
      <main className={styles.page}>
        <h1 className={styles.title}>{TITLE}</h1>
        <p className={styles.lede}>{LEDE}</p>
        <ul className={styles.cards}>
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link href={`/fr/guides/${g.slug}`} className={styles.card}>
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
