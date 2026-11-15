import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import SiteHeader from '@/components/site/SiteHeader';
import { isGuideLocale } from '@/content/guides/types';
import { HOME, type HomeCard } from '@/content/home';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { configuratorPath, homePath, languageAlternates, localizedPath } from '@/lib/routes';
import styles from './home.module.css';
import prose from './prose.module.css';

type Params = Promise<{ locale: string }>;

/**
 * Capture du vrai rendu 3D de ring-001 (configurateur, vue 3/4, réglages par défaut : or jaune), recadrée et convertie en WebP.
 * Pas une photo : la légende le dit. À refaire si le modèle ou le rendu change : `scripts/perf/home-render.mjs`.
 */
const RENDER = { src: '/images/ring-001-rendu-3d.webp', width: 1400, height: 1050 };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return notFoundMetadata(locale);
  const c = HOME[locale as Locale];
  return pageMetadata(locale as Locale, {
    // Titre complet : l'accueil porte déjà le nom de la marque, le gabarit « · JR Diamond » du layout le répéterait.
    title: c.metaTitle,
    absoluteTitle: true,
    description: c.description,
    path: homePath(locale as Locale),
    languages: languageAlternates('/'),
  });
}

function Card({ href, card }: { href: string; card: HomeCard }) {
  return (
    <li>
      <Link href={href} className={prose.card}>
        <span className={prose.cardTitle}>{card.title}</span>
        <span className={prose.cardText}>{card.text}</span>
      </Link>
    </li>
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
      <main className={prose.page}>
        <p className={prose.eyebrow}>{c.eyebrow}</p>
        <h1 className={prose.title}>{c.title}</h1>
        <p className={prose.lede}>{c.lede}</p>
        <p className={prose.badge}>{c.draft}</p>

        <div className={styles.action}>
          <Link href={configuratorPath(locale)} className={prose.cta}>
            {c.cta}
          </Link>
          <p className={styles.ctaNote}>{c.ctaNote}</p>
        </div>

        <figure className={styles.figure}>
          <Image src={RENDER.src} width={RENDER.width} height={RENDER.height} alt={c.image.alt} sizes="(max-width: 760px) 100vw, 728px" loading="eager" />
          <figcaption>{c.image.caption}</figcaption>
        </figure>

        <h2 className={prose.h2}>{c.pointsTitle}</h2>
        <ul className={styles.points}>
          {c.points.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.making}>{c.making}</p>

        <h2 className={prose.h2}>{c.materialsTitle}</h2>
        <dl className={styles.materials}>
          {c.materials.map((m) => (
            <Fragment key={m.term}>
              <dt>{m.term}</dt>
              <dd>{m.text}</dd>
            </Fragment>
          ))}
        </dl>

        <h2 className={prose.h2}>{c.moreTitle}</h2>
        <ul className={prose.cards}>
          <Card href={localizedPath(locale, '/transformation')} card={c.more.transformation} />
          {/* Les guides n'existent qu'en français et en anglais. */}
          {isGuideLocale(locale) && c.more.guides && <Card href={localizedPath(locale, '/guides')} card={c.more.guides} />}
          <Card href={localizedPath(locale, '/faq')} card={c.more.faq} />
        </ul>
      </main>
    </>
  );
}
