'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import HeaderMenu from '@/components/site/HeaderMenu';
import Monogram from '@/components/site/Monogram';
import { MAIN_ID } from '@/components/site/SiteHeader';
import type { StageActor, StageKey, StagePose } from '@/components/stage/RingStage';
import type { Family, VersionCopy } from '../copy';
import styles from './a.module.css';

const RingStage = dynamic(() => import('@/components/stage/RingStage'), { ssr: false });

/** Rendus fixes (Cycles) affichés à la place de la scène quand WebGL manque. */
const FALLBACK: Record<Family, string> = {
  yellow: '/images/rendus/ring-001-or-jaune-cycles.webp',
  white: '/images/rendus/ring-001-or-blanc-cycles.webp',
  rose: '/images/rendus/ring-001-or-rose-cycles.webp',
  platinum: '/images/rendus/ring-001-platine-cycles.webp',
};

/** Place de chaque métal dans la rangée de la section « quatre métaux » (fractions de la demi-largeur). */
const LINE = [-0.66, -0.22, 0.22, 0.66];
const LINE_NARROW = [-0.72, -0.24, 0.24, 0.72];

/**
 * Poses des quatre bagues (une par métal). Celle du métal choisi fait tout le trajet : carrousel, portrait, quatre vues de détail,
 * grand mot, rangée, puis séparation en solitaire et alliance. Les trois autres quittent l'écran après le carrousel et ne
 * reviennent que pour la rangée.
 */
function actorsFor(metals: VersionCopy['metals'], selected: number): StageActor[] {
  return metals.map((m, k) => {
    const o = k - selected;
    const metal = m.id;
    const pose = (p: Omit<StagePose, 'metal'>): StagePose => ({ ...p, metal });
    const carousel: StageKey = {
      anchor: 'a-gamme',
      pose: pose({ x: o * 0.64, y: 0.1 - Math.abs(o) * 0.03, size: o === 0 ? 0.66 : 0.3, rot: [20, -32 + o * 16, o * 5] }),
      narrow: { x: o * 0.74, y: 0.16, size: o === 0 ? 0.62 : 0.3 },
    };
    const line: StageKey = {
      anchor: 'a-metaux-rang',
      pose: pose({ x: LINE[k], y: 0, size: 0.36, rot: [22, -30, 0] }),
      narrow: { x: LINE_NARROW[k], size: 0.2 },
    };
    const gone = (anchor: string): StageKey => ({ anchor, pose: pose({ x: (o < 0 ? -1 : 1) * 1.7, y: 0.1, size: 0.3, rot: [20, -32 + o * 40, 0] }) });
    const hidden = (anchor: string): StageKey => ({ anchor, pose: pose({ x: LINE[k], y: 0, size: 0, rot: [22, -30, 0] }) });
    if (o !== 0) return { id: m.family, keys: [carousel, gone('a-profil'), gone('a-mot'), line, hidden('a-compositions'), hidden('a-fin')] };
    return {
      id: m.family,
      keys: [
        carousel,
        { anchor: 'a-profil', pose: pose({ x: 0.46, y: -0.02, size: 1.02, rot: [28, -38, 14] }), narrow: { x: 0, y: 0.44, size: 0.78 } },
        // Quatre vues de détail : la marquise vue de dessus, le trois-quarts, le profil, l'anneau de face.
        { anchor: 'a-p1', pose: pose({ x: 0.5, y: -0.04, size: 1.42, rot: [74, -10, 0] }), narrow: { x: 0, y: 0.42, size: 1.2 } },
        { anchor: 'a-p2', pose: pose({ x: 0.46, y: 0, size: 1.08, rot: [22, 40, -8] }), narrow: { x: 0, y: 0.44, size: 0.8 } },
        { anchor: 'a-p3', pose: pose({ x: 0.46, y: 0, size: 1.0, rot: [8, 88, 0] }), narrow: { x: 0, y: 0.44, size: 0.74 } },
        { anchor: 'a-p4', pose: pose({ x: 0.46, y: 0, size: 0.96, rot: [4, 6, 0] }), narrow: { x: 0, y: 0.44, size: 0.7 } },
        { anchor: 'a-mot', pose: pose({ x: 0, y: 0.02, size: 0.92, rot: [16, -26, 0] }), narrow: { size: 0.8 } },
        line,
        { anchor: 'a-compositions', pose: pose({ x: 0.4, y: 0, size: 0.82, rot: [14, 52, -6], split: 11 }), narrow: { x: 0, y: 0.46, size: 0.6 } },
        { anchor: 'a-fin', pose: pose({ x: 0.4, y: 0, size: 0, rot: [14, 52, -6] }) },
      ],
    };
  });
}

export default function VersionA({ copy, rtl }: { copy: VersionCopy; rtl: boolean }) {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const metal = copy.metals[selected];
  const actors = useMemo(() => actorsFor(copy.metals, selected), [copy.metals, selected]);
  // Le configurateur s'ouvre dans le métal choisi (la configuration est dans l'adresse).
  const configure = `${copy.configurator}?metal=${metal.id}`;

  // Étape en cours de « Comment nous travaillons » : celle dont le bloc traverse le milieu de l'écran.
  useEffect(() => {
    const blocks = copy.points.map((_, i) => document.getElementById(`a-p${i + 1}`)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setStep(blocks.indexOf(e.target as HTMLElement));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, [copy.points]);

  const choose = (i: number) => setSelected(Math.min(Math.max(i, 0), copy.metals.length - 1));

  return (
    <div className={styles.root} data-metal={metal.family}>
      <div className={styles.backdrop} aria-hidden="true" />

      <header className={styles.hud}>
        <div className="skip-links">
          <a href={`#${MAIN_ID}`}>{copy.skip}</a>
          <Link href={copy.accessibility.href}>{copy.accessibility.label}</Link>
        </div>
        <div className={styles.progress} aria-hidden="true" />
        <nav className={styles.lang} aria-label="Langue / Language">
          {copy.languages.map((l) => (
            <Link key={l.code} href={l.href} hrefLang={l.code} lang={l.code} aria-current={l.current ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href={copy.home} className={styles.brand}>
          <Monogram />
          JR Diamond
        </Link>
        <div className={styles.hudEnd}>
          <HeaderMenu label={copy.menu} navLabel={copy.navLabel}>
            {copy.nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </HeaderMenu>
          <Link href={configure} className={styles.pill}>
            {copy.cta}
          </Link>
        </div>
      </header>

      {/* Repères d'angle, comme un viseur (décoratifs). */}
      <div className={styles.frame} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.stage}>
        <RingStage
          actors={actors}
          tilt={7}
          mirror={rtl}
          fallback={
            <div className={styles.fallback}>
              <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, 40vw" />
            </div>
          }
        />
      </div>

      <main id={MAIN_ID} className={styles.main}>
        {/* ---------- 1. Carrousel des métaux ---------- */}
        <section id="a-gamme" className={styles.hero} aria-labelledby="a-title">
          <div className={styles.heroIntro}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 id="a-title" className={styles.heroTitle}>
              {copy.title}
            </h1>
          </div>
          <div className={styles.picker}>
            <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => choose(selected - 1)} disabled={selected === 0} aria-label={copy.prevMetal} />
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={() => choose(selected + 1)}
              disabled={selected === copy.metals.length - 1}
              aria-label={copy.nextMetal}
            />
          </div>
          <div className={styles.heroBase}>
            <span className={styles.pedestal} aria-hidden="true" />
            {/* Le nom du métal change avec le curseur : annoncé aux lecteurs d'écran. */}
            <p className={styles.metalName} aria-live="polite">
              <span key={metal.family}>{metal.name}</span>
            </p>
            <label className={styles.slider}>
              <span className="visually-hidden">{copy.metalLabel}</span>
              <input
                type="range"
                min={0}
                max={copy.metals.length - 1}
                step={1}
                value={selected}
                onChange={(e) => choose(Number(e.target.value))}
                aria-valuetext={metal.name}
              />
            </label>
            <p className={styles.scrollHint}>{copy.scrollHint}</p>
          </div>
        </section>

        {/* ---------- 2. Portrait du modèle ---------- */}
        <section id="a-profil" className={styles.panel} aria-labelledby="a-model">
          <div className={styles.text}>
            <p className={styles.chip}>{metal.name}</p>
            <h2 id="a-model" className={styles.h2}>
              {copy.model.name}
            </h2>
            <p className={styles.body}>{copy.model.description}</p>
            <p className={styles.body}>{copy.lede}</p>
            <p className={styles.action}>
              <Link href={configure} className={styles.pill}>
                {copy.cta}
              </Link>
            </p>
            <p className={styles.note}>{copy.ctaNote}</p>
            <p className={styles.note}>{copy.liveNote}</p>
            <p className={styles.badge}>{copy.draft}</p>
          </div>
        </section>

        {/* ---------- 3. Comment nous travaillons : quatre vues de la bague ---------- */}
        <section className={styles.points} aria-labelledby="a-points-title">
          <h2 id="a-points-title" className="visually-hidden">
            {copy.pointsTitle}
          </h2>
          <nav className={styles.steps} aria-label={copy.pointsTitle}>
            {copy.points.map((p, i) => (
              <a key={p.title} href={`#a-p${i + 1}`} aria-current={i === step ? 'step' : undefined}>
                <span className="visually-hidden">{p.kicker}</span>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </a>
            ))}
          </nav>
          {copy.points.map((p, i) => (
            <article key={p.title} id={`a-p${i + 1}`} className={styles.point}>
              <div className={styles.text}>
                <p className={styles.chip}>{p.kicker}</p>
                <h3 className={styles.h3}>{p.title}</h3>
                <p className={styles.body}>{p.text}</p>
              </div>
            </article>
          ))}
        </section>

        {/* ---------- 4. Le grand mot ---------- */}
        <section id="a-mot" className={styles.statement}>
          <p className={styles.giant}>{copy.statement}</p>
          <p className={styles.making}>{copy.making}</p>
        </section>

        {/* ---------- 5. Les quatre métaux ---------- */}
        <section className={styles.range} aria-labelledby="a-range-title">
          <h2 id="a-range-title" className={`${styles.h2} ${styles.centered}`}>
            {copy.metalsTitle}
          </h2>
          <div id="a-metaux-rang" className={styles.rangeStage} aria-hidden="true" />
          <ul className={styles.rangeNames}>
            {copy.metals.map((m, i) => (
              <li key={m.family}>
                <button type="button" onClick={() => choose(i)} aria-pressed={i === selected}>
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
          <dl className={styles.materials}>
            {copy.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- 6. Solitaire, alliance, ou les deux ---------- */}
        <section id="a-compositions" className={styles.panel} aria-labelledby="a-compo-title">
          <div className={styles.text}>
            <h2 id="a-compo-title" className={styles.h2}>
              {copy.compositionsTitle}
            </h2>
            <dl className={styles.compositions}>
              {copy.compositions.map((c) => (
                <div key={c.name}>
                  <dt>{c.name}</dt>
                  <dd>{c.description}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.action}>
              <Link href={configure} className={styles.pill}>
                {copy.cta}
              </Link>
            </p>
          </div>
        </section>

        {/* Fin du trajet de la bague : elle a disparu avant la suite de la page. */}
        <div id="a-fin" aria-hidden="true" />

        {/* ---------- 7. Suite : autres pages, appel final ---------- */}
        <section className={styles.more} aria-labelledby="a-more-title">
          <h2 id="a-more-title" className={`${styles.h2} ${styles.centered}`}>
            {copy.moreTitle}
          </h2>
          <ul className={styles.cards}>
            {copy.more.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.card}>
                  <span className={styles.cardTitle}>{c.title}</span>
                  <span className={styles.cardText}>{c.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.final}>
            <p className={styles.finalTitle}>{copy.finalTitle}</p>
            <Link href={configure} className={styles.pill}>
              {copy.cta}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
