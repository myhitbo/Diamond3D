import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { METALS } from '@/config/metals';
import { SITE_NAME } from '@/config/site';
import { isGuideLocale } from '@/content/guides/types';
import { HOME, type HomeCard } from '@/content/home';
import { LOCALES, type Locale, type MetalId } from '@/lib/configurator/schema';
import { notFoundMetadata, pageMetadata } from '@/lib/metadata';
import { configuratorPath, homePath, languageAlternates, localizedPath } from '@/lib/routes';
import styles from './home.module.css';

type Params = Promise<{ locale: string }>;

/**
 * Images : rendus photoréalistes (Blender Cycles) du modèle de ring-001 avant simplification, avec les retouches web demandées
 * par l'atelier, sur fond transparent. Pas des photos : les légendes le disent. À refaire si le modèle change :
 * `scripts/render/render_ring.py` puis `scripts/render/to-webp.mjs`.
 */
const HERO = { src: '/images/rendus/ring-001-hero.webp', width: 1600, height: 1280 };
const DETAIL = { src: '/images/rendus/ring-001-marquise-detail.webp', width: 1440, height: 1040 };
const SOLITAIRE = { src: '/images/rendus/ring-001-solitaire.webp', width: 1200, height: 1200 };
const METAL_RENDERS: { metal: MetalId; src: string }[] = [
  { metal: 'yellow-gold-18k', src: '/images/rendus/ring-001-or-jaune.webp' },
  { metal: 'white-gold-18k', src: '/images/rendus/ring-001-or-blanc.webp' },
  { metal: 'rose-gold-18k', src: '/images/rendus/ring-001-or-rose.webp' },
  { metal: 'platinum-950', src: '/images/rendus/ring-001-platine.webp' },
];

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

function Card({ href, card, index }: { href: string; card: HomeCard; index: number }) {
  return (
    <li>
      <Link href={href} className={styles.card}>
        <span className={styles.cardNum} aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        <span className={styles.cardTitle}>{card.title}</span>
        <span className={styles.cardText}>{card.text}</span>
      </Link>
    </li>
  );
}

/** Titre de section : surtitre décoratif (losange entre deux filets) puis titre. */
function SectionTitle({ id, children, align = 'center' }: { id: string; children: React.ReactNode; align?: 'center' | 'start' }) {
  return (
    <div className={align === 'start' ? `${styles.sectionHead} ${styles.sectionHeadStart}` : styles.sectionHead}>
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
  const cards = [
    { href: localizedPath(locale, '/transformation'), card: c.more.transformation },
    // Les guides n'existent qu'en français et en anglais.
    ...(isGuideLocale(locale) && c.more.guides ? [{ href: localizedPath(locale, '/guides'), card: c.more.guides }] : []),
    { href: localizedPath(locale, '/faq'), card: c.more.faq },
  ];
  return (
    <>
      <SiteHeader locale={locale} path="/" />
      <main id={MAIN_ID} className={styles.home}>
        {/* ---------- Premier écran ---------- */}
        <section className={`${styles.hero} on-noir`} aria-labelledby="home-title">
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{c.eyebrow}</p>
            <h1 id="home-title" className={styles.title}>
              {c.title.map((part, i) =>
                i % 2 ? (
                  <em key={i} className="foil">
                    {part}
                  </em>
                ) : (
                  part
                ),
              )}
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
            <span className={styles.halo} aria-hidden="true" />
            <Image src={HERO.src} width={HERO.width} height={HERO.height} alt={c.image.alt} sizes="(max-width: 900px) 100vw, 55vw" priority />
            <figcaption>{c.image.caption}</figcaption>
          </figure>
          <ul className={styles.facts}>
            {c.heroFacts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        {/* ---------- Comment nous travaillons : gros plan à gauche, étapes à droite ---------- */}
        <section className={styles.method} aria-labelledby="home-points">
          <figure className={`${styles.detail} on-noir`}>
            <Image src={DETAIL.src} width={DETAIL.width} height={DETAIL.height} alt={c.detail.alt} sizes="(max-width: 1000px) 100vw, 50vw" />
            <figcaption>{c.detail.caption}</figcaption>
          </figure>
          <div className={styles.methodText}>
            <SectionTitle id="home-points" align="start">
              {c.pointsTitle}
            </SectionTitle>
            <ol className={styles.points}>
              {c.points.map((p, i) => (
                <li key={p.title}>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Un modèle, quatre métaux ---------- */}
        <section className={`${styles.metals} on-noir`} aria-labelledby="home-metals">
          <SectionTitle id="home-metals">{c.metalsTitle}</SectionTitle>
          <p className={styles.metalsText}>{c.metalsText}</p>
          <ul className={styles.gallery}>
            {METAL_RENDERS.map(({ metal, src }) => {
              const name = METALS[metal].name[locale];
              return (
                <li key={metal}>
                  <figure>
                    <Image src={src} width={900} height={1125} alt={`${c.setName}, ${name}`} sizes="(max-width: 820px) 50vw, 25vw" />
                    <figcaption>{name}</figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------- Métaux et pierres : texte à gauche, solitaire à droite ---------- */}
        <section className={styles.materialsSection} aria-labelledby="home-materials">
          <div className={styles.materialsText}>
            <SectionTitle id="home-materials" align="start">
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
          </div>
          <figure className={`${styles.solitaire} on-noir`}>
            <Image src={SOLITAIRE.src} width={SOLITAIRE.width} height={SOLITAIRE.height} alt={c.solitaire.alt} sizes="(max-width: 1000px) 100vw, 50vw" />
            <figcaption>{c.solitaire.caption}</figcaption>
          </figure>
        </section>

        {/* ---------- Fabrication en images : une intention, pas un engagement ---------- */}
        <div className={`${styles.quote} on-noir`}>
          <span className={styles.ornament} aria-hidden="true" />
          <p className="foil">{c.making}</p>
        </div>

        {/* ---------- Aussi sur le site ---------- */}
        <section className={styles.section} aria-labelledby="home-more">
          <SectionTitle id="home-more">{c.moreTitle}</SectionTitle>
          <ul className={styles.cards}>
            {cards.map((x, i) => (
              <Card key={x.href} href={x.href} card={x.card} index={i + 1} />
            ))}
          </ul>
        </section>

        {/* ---------- Appel final ---------- */}
        <section className={`${styles.final} on-noir`} aria-labelledby="home-final">
          <h2 id="home-final" className={`${styles.finalTitle} foil`}>
            {c.finalTitle}
          </h2>
          <Link href={configuratorPath(locale)} className={styles.cta}>
            {c.cta}
          </Link>
        </section>
      </main>
    </>
  );
}
