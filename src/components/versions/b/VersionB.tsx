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
import styles from './b.module.css';

const RingStage = dynamic(() => import('@/components/stage/RingStage'), { ssr: false });

export type Star = { piece: string; x: number; y: number; size: number };

/** Rendus fixes (Cycles) affichés à la place de la scène quand WebGL manque. */
const FALLBACK: Record<Family, string> = {
  yellow: '/images/rendus/ring-001-or-jaune-cycles.webp',
  white: '/images/rendus/ring-001-or-blanc-cycles.webp',
  rose: '/images/rendus/ring-001-or-rose-cycles.webp',
  platinum: '/images/rendus/ring-001-platine-cycles.webp',
};

/** Les quatre métaux sur une orbite : place (fraction de la demi-largeur), hauteur et taille de chaque bague. */
const ORBIT = [
  { x: -0.66, y: 0.16, size: 0.3 },
  { x: -0.22, y: 0, size: 0.4 },
  { x: 0.22, y: 0, size: 0.4 },
  { x: 0.66, y: 0.16, size: 0.3 },
];
const ORBIT_NARROW = [-0.72, -0.24, 0.24, 0.72];

/**
 * Trajet. La bague est d'abord absente : seule la constellation des pierres est dessinée. Au défilement, la constellation
 * s'efface et la bague grandit au même endroit, vue de dessus, puis s'approche. Elle passe ensuite par quatre vues (les quatre
 * « étoiles » de la méthode), rejoint les trois autres métaux sur une orbite, s'éloigne comme une étoile pendant le manifeste et
 * revient au-dessus de l'horizon pour l'appel final.
 */
function actorsFor(metals: VersionCopy['metals'], selected: number): StageActor[] {
  return metals.map((m, k) => {
    const metal = m.id;
    const pose = (p: Omit<StagePose, 'metal'>): StagePose => ({ ...p, metal });
    const orbit: StageKey = {
      anchor: 'b-orbite',
      pose: pose({ x: ORBIT[k].x, y: ORBIT[k].y, size: ORBIT[k].size, rot: [24, -30 + (k - 1.5) * 14, 0] }),
      narrow: { x: ORBIT_NARROW[k], y: ORBIT[k].y * 0.6, size: 0.2 },
    };
    if (k !== selected) {
      const away = (anchor: string): StageKey => ({ anchor, pose: pose({ x: ORBIT[k].x * 2.6, y: 0.7, size: 0, rot: [24, -30, 0] }) });
      return { id: m.family, keys: [away('b-etoile-4'), orbit, away('b-manifeste')] };
    }
    return {
      id: m.family,
      keys: [
        { anchor: 'b-ciel', pose: pose({ x: 0, y: 0, size: 0, rot: [78, 0, 0] }) },
        { anchor: 'b-approche', pose: pose({ x: 0.24, y: 0.04, size: 0.95, rot: [62, -18, 0] }), narrow: { x: 0, size: 0.95, y: 0.3 } },
        { anchor: 'b-etoile-1', pose: pose({ x: -0.44, y: -0.02, size: 1.4, rot: [76, 12, 0] }), narrow: { x: 0, y: 0.42, size: 1.2 } },
        { anchor: 'b-etoile-2', pose: pose({ x: -0.44, y: 0, size: 1.1, rot: [22, -42, 8] }), narrow: { x: 0, y: 0.44, size: 0.8 } },
        { anchor: 'b-etoile-3', pose: pose({ x: -0.44, y: 0, size: 1.0, rot: [8, -88, 0] }), narrow: { x: 0, y: 0.44, size: 0.74 } },
        { anchor: 'b-etoile-4', pose: pose({ x: -0.44, y: 0, size: 0.96, rot: [4, -6, 0] }), narrow: { x: 0, y: 0.44, size: 0.7 } },
        orbit,
        // Pendant le manifeste, la bague est hors de l'écran (elle ne croise pas le texte) ; elle revient pour l'appel final.
        { anchor: 'b-manifeste', pose: pose({ x: 0.9, y: 1.6, size: 0.3, rot: [70, 30, 0] }) },
        { anchor: 'b-fin-scene', pose: pose({ x: 0, y: 0.3, size: 0.6, rot: [22, -32, 0] }), narrow: { size: 0.7, y: 0.36 } },
      ],
    };
  });
}

/** Constellation : les pierres vues de dessus, reliées par pièce (l'alliance d'un bout à l'autre, le solitaire autour de la marquise). */
function Constellation({ stars }: { stars: Star[] }) {
  const lines = useMemo(() => {
    const chain = (list: Star[]) => [...list].sort((s1, s2) => s1.x - s2.x).map((s) => `${s.x},${-s.y}`);
    const a = stars.filter((s) => s.piece === 'A');
    const b = stars.filter((s) => s.piece === 'B');
    const left = b.filter((s) => s.x < 0);
    const right = b.filter((s) => s.x > 0);
    return [chain(a), chain(left), chain(right)].filter((pts) => pts.length > 1).map((pts) => pts.join(' '));
  }, [stars]);
  return (
    <svg className={styles.constellation} viewBox="-9 -4 18 10" aria-hidden="true" focusable="false">
      {lines.map((points) => (
        <polyline key={points} points={points} pathLength={1} />
      ))}
      {stars.map((s) => (
        <circle key={`${s.piece}-${s.x}-${s.y}`} cx={s.x} cy={-s.y} r={0.09 + s.size * 0.045} />
      ))}
    </svg>
  );
}

export default function VersionB({ copy, rtl, stars }: { copy: VersionCopy; rtl: boolean; stars: Star[] }) {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const metal = copy.metals[selected];
  const actors = useMemo(() => actorsFor(copy.metals, selected), [copy.metals, selected]);
  // Le configurateur s'ouvre dans le métal choisi (la configuration est dans l'adresse).
  const configure = `${copy.configurator}?metal=${metal.id}`;
  // Le titre en deux temps, dans deux coins de l'écran : avant et après la deuxième virgule.
  const cut = copy.title.lastIndexOf(',') + 1;
  const titleParts = cut > 0 ? [copy.title.slice(0, cut), copy.title.slice(cut).trim()] : [copy.title, ''];

  // Étoile en cours de la méthode : celle dont le bloc traverse le milieu de l'écran.
  useEffect(() => {
    const blocks = copy.points.map((_, i) => document.getElementById(`b-etoile-${i + 1}`)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setStep(blocks.indexOf(e.target as HTMLElement));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, [copy.points]);

  return (
    <div className={styles.root}>
      {/* Ciel fixe : trois plans d'étoiles et une nébuleuse (décoratifs). */}
      <div className={styles.sky} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className={styles.header}>
        <div className="skip-links">
          <a href={`#${MAIN_ID}`}>{copy.skip}</a>
          <Link href={copy.accessibility.href}>{copy.accessibility.label}</Link>
        </div>
        <HeaderMenu label={copy.menu} navLabel={copy.navLabel}>
          {copy.nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </HeaderMenu>
        <Link href={copy.home} className={styles.brand}>
          <Monogram />
          JR Diamond
        </Link>
        <nav className={styles.lang} aria-label="Langue / Language">
          {copy.languages.map((l) => (
            <Link key={l.code} href={l.href} hrefLang={l.code} lang={l.code} aria-current={l.current ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className={styles.stage}>
        <RingStage
          actors={actors}
          tilt={5}
          mirror={rtl}
          fallback={
            <div className={styles.fallback}>
              <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, 40vw" />
            </div>
          }
        />
      </div>

      <main id={MAIN_ID} className={styles.main}>
        {/* ---------- 1. Le ciel : la constellation des dix-sept pierres ---------- */}
        <section className={styles.intro} aria-labelledby="b-title">
          {/* Départ du trajet de la bague : le milieu du premier écran. */}
          <span id="b-ciel" className={styles.marker} aria-hidden="true" />
          <div className={styles.introView}>
            <span className={styles.horizon} aria-hidden="true" />
            <Constellation stars={stars} />
            <h1 id="b-title" className={styles.title}>
              <span>{titleParts[0]}</span> <span>{titleParts[1]}</span>
            </h1>
            <div className={styles.introBase}>
              <Link href={configure} className={styles.cta}>
                {copy.cta}
              </Link>
              <p className={styles.scrollHint}>{copy.scrollHint}</p>
            </div>
          </div>
        </section>

        {/* ---------- 2. L'approche : la constellation devient la bague ---------- */}
        <section id="b-approche" className={styles.approach} aria-labelledby="b-model">
          <div className={styles.card}>
            <p className={styles.kicker}>{copy.eyebrow}</p>
            <h2 id="b-model" className={styles.h2}>
              {copy.model.name}
            </h2>
            <p className={styles.body}>{copy.model.description}</p>
            <p className={styles.body}>{copy.lede}</p>
            <p className={styles.note}>{copy.ctaNote}</p>
            <p className={styles.note}>{copy.liveNote}</p>
            <p className={styles.badge}>{copy.draft}</p>
          </div>
        </section>

        {/* ---------- 3. Quatre étoiles : comment nous travaillons ---------- */}
        <section className={styles.method} aria-labelledby="b-method-title">
          <h2 id="b-method-title" className="visually-hidden">
            {copy.pointsTitle}
          </h2>
          <nav className={styles.starNav} aria-label={copy.pointsTitle}>
            {copy.points.map((p, i) => (
              <a key={p.title} href={`#b-etoile-${i + 1}`} aria-current={i === step ? 'step' : undefined}>
                <span className="visually-hidden">{p.kicker}</span>
              </a>
            ))}
          </nav>
          {copy.points.map((p, i) => (
            <article key={p.title} id={`b-etoile-${i + 1}`} className={styles.story}>
              <div className={styles.card}>
                <p className={styles.kicker}>
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')} / 04</span>
                  {p.kicker}
                </p>
                <h3 className={styles.h3}>{p.title}</h3>
                <p className={styles.body}>{p.text}</p>
              </div>
            </article>
          ))}
        </section>

        {/* ---------- 4. L'orbite : les quatre métaux ---------- */}
        <section className={styles.orbit} aria-labelledby="b-orbit-title">
          <h2 id="b-orbit-title" className={`${styles.h2} ${styles.centered}`}>
            {copy.metalsTitle}
          </h2>
          <div id="b-orbite" className={styles.orbitScene} aria-hidden="true">
            <span />
          </div>
          <ul className={styles.orbitNames}>
            {copy.metals.map((m, i) => (
              <li key={m.family}>
                <button type="button" onClick={() => setSelected(i)} aria-pressed={i === selected}>
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- 5. Le manifeste : métaux, pierres, fabrication en images ---------- */}
        <section id="b-manifeste" className={styles.manifesto} aria-labelledby="b-manifesto-title">
          <h2 id="b-manifesto-title" className={styles.statement}>
            {copy.making}
          </h2>
          <dl className={styles.materials}>
            {copy.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
          <ul className={styles.links} aria-label={copy.moreTitle}>
            {copy.more.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>
                  <span className={styles.linkTitle}>{c.title}</span>
                  <span className={styles.linkText}>{c.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- 6. Le lever : appel final ---------- */}
        <section className={styles.final} aria-labelledby="b-final-title">
          <div id="b-fin-scene" className={styles.finalScene} aria-hidden="true" />
          <span className={styles.horizon} aria-hidden="true" />
          <div className={styles.finalText}>
            <h2 id="b-final-title" className={styles.finalTitle}>
              {copy.finalTitle}
            </h2>
            <Link href={configure} className={styles.cta}>
              {copy.cta}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
