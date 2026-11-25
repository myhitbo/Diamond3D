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
const SLOT_X = [-0.66, -0.22, 0.22, 0.66];

/**
 * Poses des quatre bagues (une par métal). Celle du métal choisi fait tout le trajet : carrousel, portrait, quatre vues de détail,
 * grand mot, rangée, séparation en solitaire et alliance, puis retour sous l'appel final. Les trois autres quittent l'écran après
 * le carrousel et ne reviennent que pour la rangée.
 *
 * Les scènes du grand mot et de la rangée sont des cartes collantes (elles restent à l'écran pendant qu'on défile) : leurs ancres
 * sont des repères sans hauteur placés dans la pile (`a-mot`, `a-mot-fin`, `a-rang`, `a-rang-fin`, `a-rideau`), pas les cartes
 * elles-mêmes, dont la position suit l'écran.
 */
function actorsFor(metals: VersionCopy['metals'], selected: number): StageActor[] {
  return metals.map((m, k) => {
    const o = k - selected;
    const n = Math.abs(o);
    const sg = Math.sign(o);
    const metal = m.id;
    const pose = (p: Omit<StagePose, 'metal'>): StagePose => ({ ...p, metal });
    const key = (anchor: string, p: Omit<StagePose, 'metal'>, narrow?: Partial<StagePose>, upright?: Partial<StagePose>): StageKey => ({ anchor, pose: pose(p), narrow, upright });
    // Carrousel : la bague du milieu en pleine lumière sur son socle, les voisines en silhouette, de plus en plus petites.
    const carousel = key(
      'a-gamme',
      { x: sg * [0, 0.6, 1.0, 1.5][n], y: n ? 0.07 - n * 0.02 : 0.12, size: [0.74, 0.34, 0.26, 0.26][n], rot: [20, -32 + o * 16, o * 5], light: n ? 0.22 : 1 },
      // Écran court : la bague du milieu ne dépasse pas la moitié de la hauteur (elle passerait sur le titre).
      { x: sg * [0, 0.98, 1.7, 2.2][n], y: 0.05, size: n ? 0.4 : 0.9, maxH: n ? 0.24 : 0.5 },
    );
    // Rangée : quatre places, un léger éventail d'angles. Sur un écran en hauteur (téléphone, tablette debout) : deux rangs de
    // deux. La condition porte sur la forme de l'écran : un téléphone à l'horizontale ou un zoom à 200 % gardent la rangée.
    const f = k - 1.5;
    const slot = { x: SLOT_X[k], y: 0.26, size: 0.48, rot: [21.5 - f * 3, -29 + f * 10, f * -4] as [number, number, number] };
    const slotUpright = { x: k % 2 ? 0.5 : -0.5, y: k < 2 ? 0.5 : -0.16, size: 0.44 };
    const none = (anchor: string) => key(anchor, { ...slot, size: 0 }, undefined, { ...slotUpright, size: 0 });
    if (o !== 0) {
      const side = sg * 1.7;
      return {
        id: m.family,
        keys: [
          carousel,
          key('a-profil', { x: side, y: 0.1, size: 0.3, rot: [20, -32 + o * 40, 0] }),
          key('a-p1', { x: side, y: -1.8, size: 0.3, rot: [20, -32, 0] }),
          // Même place un écran plus bas : la bague monte avec la carte de la rangée.
          key('a-mot-fin', { ...slot, y: slot.y - 2 }, undefined, { ...slotUpright, y: slotUpright.y - 2 }),
          key('a-rang', slot, undefined, slotUpright),
          key('a-rang-fin', slot, undefined, slotUpright),
          none('a-rideau'),
          none('a-final'),
        ],
      };
    }
    const word = { x: 0, y: 0.04, size: 0.84, rot: [16, -26, 0] as [number, number, number] };
    const split = { x: 0.4, y: 0, size: 0.82, rot: [14, 52, -6] as [number, number, number], split: 11 };
    const splitNarrow = { x: 0, y: 0.4, size: 0.8 };
    return {
      id: m.family,
      keys: [
        carousel,
        key('a-profil', { x: 0.46, y: -0.02, size: 1.02, rot: [28, -38, 14] }, { x: 0, y: 0.4, size: 0.9 }),
        // Quatre vues de détail : la marquise vue de dessus, le trois-quarts, les pierres de côté, l'anneau de face.
        key('a-p1', { x: 0.5, y: -0.04, size: 1.42, rot: [74, -10, 0] }, { x: 0, y: 0.38, size: 1.25 }),
        key('a-p2', { x: 0.42, y: 0, size: 1.08, rot: [22, 40, -8] }, { x: 0, y: 0.4, size: 0.9 }),
        key('a-p3', { x: 0.44, y: 0, size: 1.04, rot: [14, 64, -4] }, { x: 0, y: 0.4, size: 0.9 }),
        key('a-p4', { x: 0.4, y: 0, size: 0.96, rot: [4, 6, 0] }, { x: 0, y: 0.4, size: 0.88 }),
        // Le grand mot : la bague au centre, tenue pendant que la scène reste à l'écran.
        key('a-mot', word, { size: 0.8 }),
        key('a-mot-fin', word, { size: 0.8 }),
        key('a-rang', slot, undefined, slotUpright),
        key('a-rang-fin', slot, undefined, slotUpright),
        // Derrière le rideau des matières, la bague passe à la pose « séparée » : on la découvre déjà en place.
        key('a-rideau', split, splitNarrow),
        key('a-compositions', split, splitNarrow),
        // Elle sort par le haut avec la section, puis remonte du bas de l'écran sous l'appel final.
        key('a-fin', { ...split, y: 1.8 }, { ...splitNarrow, y: 1.8 }),
        key('a-more-title', { ...split, y: 1.8, size: 0 }, { x: 0 }),
        key('a-cartes', { x: 0, y: -1.4, size: 0, rot: [18, -28, 0] }),
        key('a-final', { x: 0, y: 0.2, size: 0.5, rot: [18, -28, 0] }, { y: 0.3, size: 0.8 }),
      ],
    };
  });
}

export default function VersionA({ copy, rtl }: { copy: VersionCopy; rtl: boolean }) {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const [inSteps, setInSteps] = useState(false);
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

  // Les repères 01 à 04 ne sont affichés que pendant la section des étapes (quand elle traverse le milieu de l'écran).
  useEffect(() => {
    const section = document.getElementById('a-etapes');
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setInSteps(entry.isIntersecting), { rootMargin: '-50% 0px -50% 0px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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

      <main id={MAIN_ID} className={styles.main}>
        {/* Scène 3D, dans le contenu principal : sans WebGL, l'image de repli appartient à la page (aucun contenu hors des régions). */}
        <div className={styles.stage}>
          <RingStage
            actors={actors}
            tilt={7}
            mirror={rtl}
            fallback={
              <div className={styles.fallback}>
                <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, (max-aspect-ratio: 5/6) 80vw, 40vw" />
              </div>
            }
          />
        </div>

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
          {/* Légendes de bas d'écran, sur grand écran seulement ; sur téléphone, les mêmes textes sont sous le portrait. */}
          <p className={`${styles.hudNote} ${styles.onlyWide}`}>{copy.liveNote}</p>
          <p className={`${styles.badge} ${styles.hudBadge} ${styles.onlyWide}`}>{copy.draft}</p>
        </section>

        {/* ---------- 2. Portrait du modèle ---------- */}
        <section id="a-profil" className={styles.panel} aria-labelledby="a-model">
          <div className={styles.text}>
            <p className={styles.chip}>{metal.name}</p>
            <h2 id="a-model" className={styles.h2}>
              {copy.model.name}
            </h2>
            <p className={styles.leadText}>{copy.model.description}</p>
            <p className={styles.body}>{copy.lede}</p>
            <p className={styles.action}>
              <Link href={configure} className={styles.pill}>
                {copy.cta}
              </Link>
            </p>
            <div className={styles.notes}>
              <p className={styles.note}>{copy.ctaNote}</p>
              <p className={`${styles.note} ${styles.onlyNarrow}`}>{copy.liveNote}</p>
            </div>
            <p className={`${styles.badge} ${styles.onlyNarrow}`}>{copy.draft}</p>
          </div>
        </section>

        {/* ---------- 3. Comment nous travaillons : quatre vues de la bague ---------- */}
        <section id="a-etapes" className={styles.points} aria-labelledby="a-points-title">
          <h2 id="a-points-title" className="visually-hidden">
            {copy.pointsTitle}
          </h2>
          <nav className={styles.steps} aria-label={copy.pointsTitle} data-active={inSteps || undefined}>
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

        {/* ---------- 4 et 5. Pile de scènes tenues à l'écran : le grand mot, la rangée des quatre métaux, puis les matières ----------
            Chaque scène est une carte collante ; la suivante glisse par-dessus. Le défilement reste celui du navigateur. */}
        <div className={styles.lead} aria-hidden="true" />
        <div className={styles.stack}>
          {/* Repères des poses (sans hauteur) : milieu de l'écran quand la scène se fixe, puis à la fin de sa tenue. */}
          <span id="a-mot" className={styles.mark} style={{ top: '50svh' }} aria-hidden="true" />
          <span id="a-mot-fin" className={styles.mark} style={{ top: '110svh' }} aria-hidden="true" />
          <span id="a-rang" className={styles.mark} style={{ top: '226svh' }} aria-hidden="true" />
          <span id="a-rang-fin" className={styles.mark} style={{ top: '338svh' }} aria-hidden="true" />
          <span id="a-rideau" className={styles.mark} style={{ top: '380svh' }} aria-hidden="true" />

          <section className={styles.statement}>
            <p className={styles.giant}>{copy.statement}</p>
            <p className={styles.making}>{copy.making}</p>
          </section>
          <div className={styles.hold} style={{ height: '60svh' }} aria-hidden="true" />

          <section className={styles.range} aria-labelledby="a-range-title">
            <h2 id="a-range-title" className={`${styles.h2} ${styles.centered}`}>
              {copy.metalsTitle}
            </h2>
            {/* Au clavier : la rangée est ramenée au milieu de l'écran, pour qu'un nom qui a le focus ne soit pas sous le rideau. */}
            <ul
              className={styles.rangeNames}
              onFocus={(e) => {
                if ((e.target as HTMLElement).matches(':focus-visible')) document.getElementById('a-rang')?.scrollIntoView({ block: 'center' });
              }}
            >
              {copy.metals.map((m, i) => (
                <li key={m.family}>
                  <button type="button" onClick={() => choose(i)} aria-pressed={i === selected}>
                    {m.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <div className={styles.hold} style={{ height: '50svh' }} aria-hidden="true" />

          <dl className={styles.materials}>
            {copy.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
        </div>

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
          <ul id="a-cartes" className={styles.cards}>
            {copy.more.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.card}>
                  <span className={styles.cardTitle}>{c.title}</span>
                  <span className={styles.cardText}>{c.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div id="a-final" className={styles.final}>
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
