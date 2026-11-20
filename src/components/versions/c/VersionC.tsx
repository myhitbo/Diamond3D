'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import HeaderMenu from '@/components/site/HeaderMenu';
import Monogram from '@/components/site/Monogram';
import { MAIN_ID } from '@/components/site/SiteHeader';
import type { StageKey, StagePose } from '@/components/stage/RingStage';
import type { Family, VersionCopy } from '../copy';
import styles from './c.module.css';

const RingStage = dynamic(() => import('@/components/stage/RingStage'), { ssr: false });

/** Rendus fixes (Cycles) affichés à la place de la scène quand WebGL manque. */
const FALLBACK: Record<Family, string> = {
  yellow: '/images/rendus/ring-001-or-jaune-cycles.webp',
  white: '/images/rendus/ring-001-or-blanc-cycles.webp',
  rose: '/images/rendus/ring-001-or-rose-cycles.webp',
  platinum: '/images/rendus/ring-001-platine-cycles.webp',
};

/** Sections repérées par les points de navigation, dans l'ordre de la page. */
const SECTIONS = ['c-hero', 'c-methode', 'c-atelier', 'c-faits', 'c-fin'] as const;

/**
 * Trajet de la bague. Elle ouvre la page en très gros plan, puis traverse l'écran d'un côté à l'autre en changeant de métal à
 * chaque étape (jaune, blanc, rose, platine) : on voit les quatre métaux sans rien toucher. À l'atelier, elle prend le métal et la
 * composition choisis, puis revient en grand sous l'appel final.
 */
function keysFor(metals: VersionCopy['metals'], selected: number, composition: string): StageKey[] {
  const id = (family: Family) => metals.find((m) => m.family === family)!.id;
  const chosen = metals[selected].id;
  const pieces = { a: composition === 'band' ? 0 : 1, b: composition === 'solitaire' ? 0 : 1 };
  const k = (anchor: string, pose: StagePose, narrow?: Partial<StagePose>): StageKey => ({ anchor, pose, narrow });
  return [
    k('c-hero', { x: -0.53, y: -0.08, size: 1.3, rot: [60, 26, -16], metal: id('yellow') }, { x: 0, y: 0.4, size: 1.1 }),
    k('c-m1', { x: 0.46, y: -0.02, size: 1.5, rot: [72, -14, 6], metal: id('white') }, { x: 0, y: 0.42, size: 1.15 }),
    k('c-m2', { x: 0.44, y: 0, size: 1.2, rot: [22, 44, -8], metal: id('rose') }, { x: 0, y: 0.44, size: 0.8 }),
    k('c-m3', { x: -0.44, y: 0, size: 1.12, rot: [10, -72, 6], metal: id('rose') }, { x: 0, y: 0.44, size: 0.76 }),
    k('c-m4', { x: -0.44, y: 0, size: 1.0, rot: [4, -8, 0], metal: id('platinum') }, { x: 0, y: 0.44, size: 0.72 }),
    k('c-atelier-scene', { x: 0, y: 0.1, size: 0.74, rot: [20, -32, 0], metal: chosen, ...pieces }, { size: 0.74 }),
    // Elle descend sous l'écran pendant les textes, puis remonte : seul le haut de la bague dépasse sous l'appel final.
    k('c-faits', { x: 0, y: -2.5, size: 1.25, rot: [64, 0, 0], metal: chosen, ...pieces }),
    // Appel final au milieu de l'écran : la bague occupe la moitié basse, sous le bouton.
    k('c-fin', { x: 0, y: -0.56, size: 1.1, rot: [64, 0, 0], metal: chosen, ...pieces }, { size: 1.3, y: -0.5 }),
  ];
}

export default function VersionC({ copy, rtl }: { copy: VersionCopy; rtl: boolean }) {
  const [selected, setSelected] = useState(0);
  const [composition, setComposition] = useState('set');
  const [section, setSection] = useState(0);
  const metal = copy.metals[selected];
  const keys = useMemo(() => keysFor(copy.metals, selected, composition), [copy.metals, selected, composition]);
  // Le configurateur s'ouvre sur les choix faits ici (la configuration est dans l'adresse).
  const configure = `${copy.configurator}?composition=${composition}&metal=${metal.id}`;

  // Point de navigation en cours : la section qui traverse le milieu de l'écran.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSection(els.indexOf(e.target as HTMLElement));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const dots = [copy.eyebrow, copy.pointsTitle, copy.metalsTitle, copy.materials[0].term, copy.finalTitle];

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className="skip-links">
          <a href={`#${MAIN_ID}`}>{copy.skip}</a>
          <Link href={copy.accessibility.href}>{copy.accessibility.label}</Link>
        </div>
        <Link href={copy.home} className={styles.brand}>
          <Monogram />
          JR Diamond
        </Link>
        <div className={styles.headerEnd}>
          <nav className={styles.lang} aria-label="Langue / Language">
            {copy.languages.map((l) => (
              <Link key={l.code} href={l.href} hrefLang={l.code} lang={l.code} aria-current={l.current ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <HeaderMenu label={copy.menu} navLabel={copy.navLabel}>
            {copy.nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </HeaderMenu>
        </div>
      </header>

      {/* Points de navigation entre les sections (sur le côté). */}
      <nav className={styles.dots} aria-label={copy.sectionsLabel}>
        {SECTIONS.map((s, i) => (
          <a key={s} href={`#${s}`} aria-current={i === section ? 'true' : undefined}>
            <span className="visually-hidden">{dots[i]}</span>
          </a>
        ))}
      </nav>

      <div className={styles.stage}>
        <RingStage
          keys={keys}
          studio="light"
          tilt={6}
          mirror={rtl}
          fallback={
            <div className={styles.fallback}>
              <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, 40vw" />
            </div>
          }
        />
      </div>

      <main id={MAIN_ID} className={styles.main}>
        {/* ---------- 1. Ouverture : la bague en très gros plan ---------- */}
        <section id="c-hero" className={`${styles.panel} ${styles.end}`} aria-labelledby="c-title">
          <div className={styles.text}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 id="c-title" className={styles.title}>
              {copy.title}
            </h1>
            <p className={styles.body}>{copy.lede}</p>
            <p className={styles.action}>
              <Link href={configure} className={styles.cta}>
                <span>{copy.cta}</span>
                <span className={styles.ctaArrow} aria-hidden="true" />
              </Link>
            </p>
            <p className={styles.note}>{copy.ctaNote}</p>
            <p className={styles.badge}>{copy.draft}</p>
          </div>
          <p className={styles.scrollHint}>{copy.scrollHint}</p>
        </section>

        {/* ---------- 2. Comment nous travaillons : quatre étapes, la bague passe d'un côté à l'autre ---------- */}
        <section id="c-methode" className={styles.method} aria-labelledby="c-method-title">
          <h2 id="c-method-title" className="visually-hidden">
            {copy.pointsTitle}
          </h2>
          {copy.points.map((p, i) => (
            <article key={p.title} id={`c-m${i + 1}`} className={`${styles.panel} ${i < 2 ? styles.start : styles.end}`}>
              {/* Mot de fond, décoratif : le même libellé est lu dans l'étiquette du bloc. */}
              <span className={styles.ghost} aria-hidden="true">
                {p.kicker}
              </span>
              <div className={styles.text}>
                <p className={styles.kicker}>
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {p.kicker}
                </p>
                <h3 className={styles.h3}>{p.title}</h3>
                <p className={styles.body}>{p.text}</p>
              </div>
            </article>
          ))}
        </section>

        {/* ---------- 3. L'atelier : choisir le métal et la composition, la bague suit ---------- */}
        <section id="c-atelier" className={styles.atelier} aria-labelledby="c-atelier-title">
          <h2 id="c-atelier-title" className={`${styles.h2} ${styles.centered}`}>
            {copy.metalsTitle}
          </h2>
          <div id="c-atelier-scene" className={styles.atelierScene} aria-hidden="true" />
          <div className={styles.controls}>
            <fieldset className={styles.choice}>
              <legend>{copy.metalLabel}</legend>
              <div className={styles.swatches}>
                {copy.metals.map((m, i) => (
                  <label key={m.family} className={styles.swatch} data-metal={m.family}>
                    {/* Un seul arrêt de tabulation par groupe (le choix en cours) ; les flèches passent d'un choix à l'autre. */}
                    <input type="radio" name="c-metal" checked={i === selected} tabIndex={i === selected ? 0 : -1} onChange={() => setSelected(i)} />
                    <span className={styles.swatchDot} aria-hidden="true" />
                    <span>{m.name}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className={styles.choice}>
              <legend>{copy.compositionLabel}</legend>
              <div className={styles.options}>
                {copy.compositions.map((c) => (
                  <label key={c.id} className={styles.option}>
                    <input type="radio" name="c-composition" checked={c.id === composition} tabIndex={c.id === composition ? 0 : -1} onChange={() => setComposition(c.id)} />
                    <span>{c.name}</span>
                  </label>
                ))}
              </div>
              {/* Description de la composition choisie : annoncée quand elle change. */}
              <p className={styles.choiceNote} aria-live="polite">
                {copy.compositions.find((c) => c.id === composition)?.description}
              </p>
            </fieldset>
            <p className={styles.action}>
              <Link href={configure} className={styles.cta}>
                <span>{copy.cta}</span>
                <span className={styles.ctaArrow} aria-hidden="true" />
              </Link>
            </p>
            <p className={styles.note}>{copy.liveNote}</p>
          </div>
        </section>

        {/* ---------- 4. Métaux et pierres, puis la fabrication en images (une intention) ---------- */}
        <section id="c-faits" className={styles.facts} aria-labelledby="c-facts-title">
          <h2 id="c-facts-title" className="visually-hidden">
            {copy.materials.map((m) => m.term).join(', ')}
          </h2>
          <dl className={styles.materials}>
            {copy.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.quote}>{copy.making}</p>
          <ul className={styles.cards} aria-label={copy.moreTitle}>
            {copy.more.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.card}>
                  <span className={styles.cardTitle}>{c.title}</span>
                  <span className={styles.cardText}>{c.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- 5. Appel final : la bague revient en grand ---------- */}
        <section id="c-fin" className={styles.final} aria-labelledby="c-final-title">
          <h2 id="c-final-title" className={styles.finalTitle}>
            {copy.finalTitle}
          </h2>
          <p className={styles.action}>
            <Link href={configure} className={styles.cta}>
              <span>{copy.cta}</span>
              <span className={styles.ctaArrow} aria-hidden="true" />
            </Link>
          </p>
          <div className={styles.finalScene} aria-hidden="true" />
        </section>
      </main>
    </div>
  );
}
