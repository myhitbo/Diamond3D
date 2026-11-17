import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { SITE_NAME } from '@/config/site';
import { isGuideLocale } from '@/content/guides/types';
import { HOME, type HomeCard } from '@/content/home';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { configuratorPath, homePath, languageAlternates, localizedPath } from '@/lib/routes';
import styles from './home.module.css';

type Params = Promise<{ locale: string }>;

/**
 * Capture du vrai rendu 3D de ring-001 (configurateur, vue 3/4, réglages par défaut : or jaune), sur le fond noir du premier écran,
 * recadrée et convertie en WebP. Pas une photo : la légende le dit. À refaire si le modèle ou le rendu change :
 * `scripts/perf/home-render.mjs <sortie> --nuit`.
 */
const RENDER = { src: '/images/ring-001-rendu-3d-nuit.webp', width: 1400, height: 1050 };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  const c = HOME[locale as Locale];
  return pageMetadata(locale as Locale, {
    // Onglet : la marque en tête, sans le gabarit « · JR Diamond » du layout. Aperçu partagé : le titre seul, la marque est
    // déjà dans `og:site_name`.
    title: `${SITE_NAME} · ${c.shareTitle}`,
    absoluteTitle: true,
    shareTitle: c.shareTitle,
    description: c.description,
    path: homePath(locale as Locale),
    languages: languageAlternates('/'),
  });
}

function Card({ href, card }: { href: string; card: HomeCard }) {
  return (
    <li>
      <Link href={href} className={styles.card}>
        <span className={styles.cardTitle}>{card.title}</span>
        <span className={styles.cardText}>{card.text}</span>
      </Link>
    </li>
  );
}

/** Titre de section : filets dorés et losange de part et d'autre (décoratifs). */
function SectionTitle({ id, children, dark = false }: { id: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? `${styles.sectionHead} ${styles.sectionHeadDark}` : styles.sectionHead}>
      <span className={styles.ornament} aria-hidden="true" />
      <h2 id={id} className={styles.h2}>
        {children}
      </h2>
    </div>
  );
}

export default async function HomePage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const c = HOME[locale];
  return (
    <>
      <SiteHeader locale={locale} path="/" />
      <main id={MAIN_ID} className={styles.home}>
        <section className={`${styles.hero} on-noir`} aria-labelledby="home-title">
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{c.eyebrow}</p>
            <h1 id="home-title" className={styles.title}>
              {c.title}
            </h1>
            <p className={styles.lede}>{c.lede}</p>
            <div className={styles.action}>
              <Link href={configuratorPath(locale)} className={styles.cta}>
                {c.cta}
              </Link>
              <p className={styles.ctaNote}>{c.ctaNote}</p>
            </div>
            <p className={styles.badge}>{c.draft}</p>
          </div>
          <figure className={styles.heroFigure}>
            <Image src={RENDER.src} width={RENDER.width} height={RENDER.height} alt={c.image.alt} sizes="(max-width: 900px) 100vw, 56vw" priority />
            <figcaption>{c.image.caption}</figcaption>
          </figure>
        </section>

        <section className={styles.section} aria-labelledby="home-points">
          <SectionTitle id="home-points">{c.pointsTitle}</SectionTitle>
          <ul className={styles.points}>
            {c.points.map((p, i) => (
              <li key={p.title}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <p className={styles.making}>{c.making}</p>
        </section>

        <section className={`${styles.band} on-noir`} aria-labelledby="home-materials">
          <SectionTitle id="home-materials" dark>
            {c.materialsTitle}
          </SectionTitle>
          <dl className={styles.materials}>
            {c.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section} aria-labelledby="home-more">
          <SectionTitle id="home-more">{c.moreTitle}</SectionTitle>
          <ul className={styles.cards}>
            <Card href={localizedPath(locale, '/transformation')} card={c.more.transformation} />
            {/* Les guides n'existent qu'en français et en anglais. */}
            {isGuideLocale(locale) && c.more.guides && <Card href={localizedPath(locale, '/guides')} card={c.more.guides} />}
            <Card href={localizedPath(locale, '/faq')} card={c.more.faq} />
          </ul>
        </section>
      </main>
    </>
  );
}
