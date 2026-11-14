import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site/SiteHeader';
import { FAQ, allFaqItems } from '@/content/faq';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { configuratorPath, languageAlternates } from '@/lib/routes';
import styles from './faq.module.css';

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const t = DICTIONARIES[locale as Locale];
  return {
    title: t.faqTitle,
    description: t.faqLede,
    alternates: { languages: languageAlternates('/faq') },
  };
}

/** Données structurées FAQPage : seulement les réponses validées (pas les « à confirmer »). */
function jsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: allFaqItems()
      .filter((i) => i.status !== 'toConfirm')
      .map((i) => ({
        '@type': 'Question',
        name: i.q[locale],
        acceptedAnswer: { '@type': 'Answer', text: i.a[locale].join('\n\n') },
      })),
  };
}

export default async function FaqPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = DICTIONARIES[locale];
  const hasDraft = allFaqItems().some((i) => i.status === 'toConfirm');
  return (
    <>
      <SiteHeader locale={locale} path="/faq" />
      <main className={styles.page}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)).replace(/</g, '\\u003c') }} />
        <header className={styles.intro}>
          <h1 className={styles.title}>{t.faqTitle}</h1>
          <p className={styles.lede}>{t.faqLede}</p>
          {hasDraft && <p className={styles.badge}>{t.faqDraft}</p>}
          <nav className={styles.toc} aria-label={t.faqTitle}>
            {FAQ.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.title[locale]}
              </a>
            ))}
          </nav>
        </header>

        {FAQ.map((c) => (
          <section key={c.id} id={c.id} className={styles.category} aria-labelledby={`h-${c.id}`}>
            <h2 id={`h-${c.id}`} className={styles.categoryTitle}>
              {c.title[locale]}
            </h2>
            {c.items.map((item) => (
              <details key={item.id} id={`q-${item.id}`} className={styles.item} data-status={item.status}>
                <summary className={styles.question}>
                  <span>
                    {item.q[locale]}
                    {item.status === 'toConfirm' && <span className={styles.pending}>{t.faqToConfirm}</span>}
                  </span>
                </summary>
                <div className={styles.answer}>
                  {item.a[locale].map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                  {item.sources && (
                    <p className={styles.sources}>
                      {t.faqSources}
                      {t.colon}
                      {item.sources.map((s, k) => (
                        <span key={s.url}>
                          {k > 0 && ' · '}
                          <a href={s.url} target="_blank" rel="noopener noreferrer">
                            {s.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </section>
        ))}

        <footer className={styles.outro}>
          <p>{t.faqContact}</p>
          <Link href={configuratorPath(locale)} className={styles.cta}>
            {t.faqBack}
          </Link>
        </footer>
      </main>
    </>
  );
}
