import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site/SiteHeader';
import { GUIDE_LOCALES, GUIDE_UI, GUIDES, getGuide, guideAlternates, guidePath, isGuideLocale, type Guide, type GuideLocale } from '@/content/guides';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import styles from '../../prose.module.css';

type Params = Promise<{ locale: string; slug: string }>;

// Français et anglais : toute autre adresse (hébreu, adresse d'une autre langue) répond 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_LOCALES.flatMap((locale) => GUIDES[locale].map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide || !isGuideLocale(locale)) return notFoundMetadata(locale);
  return pageMetadata(locale, {
    title: guide.title,
    description: guide.description,
    path: guidePath(locale, guide.slug),
    languages: guideAlternates(guide.id),
    modifiedTime: guide.verified,
  });
}

function jsonLd(guide: Guide, locale: GuideLocale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: locale,
    headline: guide.title,
    description: guide.description,
    dateModified: guide.verified,
    author: { '@type': 'Organization', name: 'JR Diamond' },
    citation: guide.sources.map((s) => s.url),
  };
}

const formatDate = (iso: string, dateLocale: string) =>
  new Intl.DateTimeFormat(dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));

export default async function GuidePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide || !isGuideLocale(locale)) notFound();
  const ui = GUIDE_UI[locale];
  // Le sélecteur de langue mène au même guide, dont l'adresse est traduite.
  const hrefs = guideAlternates(guide.id);
  return (
    <>
      <SiteHeader locale={locale} path={`/guides/${guide.slug}`} locales={GUIDE_LOCALES.filter((l) => hrefs[l])} hrefs={hrefs} />
      <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(guide, locale)).replace(/</g, '\\u003c') }} />
        <p className={styles.eyebrow}>
          <Link href={`/${locale}/guides`}>{ui.title}</Link>
        </p>
        <h1 className={styles.title}>{guide.title}</h1>
        <p className={styles.lede}>{guide.description}</p>
        <p className={styles.badge}>{ui.badge}</p>

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
            {s.table && (
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption>{s.table.caption}</caption>
                  <thead>
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r) => (
                      <tr key={r[0]}>
                        {r.map((c, i) =>
                          i === 0 ? (
                            <th key={i} scope="row">
                              {c}
                            </th>
                          ) : (
                            <td key={i}>{c}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.after?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}

        <footer className={styles.sources}>
          <p>{ui.checked(formatDate(guide.verified, ui.dateLocale))}</p>
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
          <h2 className={styles.h2}>{ui.furtherReading}</h2>
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
