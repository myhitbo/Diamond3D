import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site/SiteHeader';
import { GUIDES, getGuide, type Guide } from '@/content/guides';
import styles from '../../prose.module.css';

type Params = Promise<{ locale: string; slug: string }>;

// Français seulement : toute autre adresse répond 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ locale: 'fr', slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = locale === 'fr' ? getGuide(slug) : undefined;
  if (!guide) return {};
  return { title: guide.title, description: guide.description, alternates: { canonical: `/fr/guides/${guide.slug}` } };
}

function jsonLd(guide: Guide) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'fr',
    headline: guide.title,
    description: guide.description,
    dateModified: guide.verified,
    author: { '@type': 'Organization', name: 'JR Diamond' },
    citation: guide.sources.map((s) => s.url),
  };
}

const formatDate = (iso: string) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));

export default async function GuidePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const guide = locale === 'fr' ? getGuide(slug) : undefined;
  if (!guide) notFound();
  return (
    <>
      <SiteHeader locale="fr" path={`/guides/${guide.slug}`} locales={['fr']} />
      <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(guide)).replace(/</g, '\\u003c') }} />
        <p className={styles.eyebrow}>
          <Link href="/fr/guides">Guides</Link>
        </p>
        <h1 className={styles.title}>{guide.title}</h1>
        <p className={styles.lede}>{guide.description}</p>
        <p className={styles.badge}>Brouillon · guide en attente de relecture par l’atelier</p>

        {guide.sections.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className={styles.body}>
            <h2 id={`h-${s.id}`} className={styles.h2}>
              {s.title}
            </h2>
            {s.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.after?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}

        <footer className={styles.sources}>
          <p>Faits vérifiés le {formatDate(guide.verified)}. Sources :</p>
          <ul>
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>

        <div className={styles.body}>
          <h2 className={styles.h2}>Pour aller plus loin</h2>
          <ul>
            {guide.next.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
