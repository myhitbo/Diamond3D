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

/** Les quatre métaux sur une orbite : place (fractions de la demi-largeur et de la demi-hauteur) et taille de chaque bague. */
const ORBIT = [
  { x: -0.63, y: -0.09, size: 0.32 },
  { x: -0.21, y: -0.19, size: 0.4 },
  { x: 0.21, y: -0.19, size: 0.4 },
  { x: 0.63, y: -0.09, size: 0.32 },
];
/** Sur téléphone : deux rangs de deux. */
const ORBIT_NARROW = [
  { x: -0.46, y: 0.25, size: 0.46 },
  { x: 0.46, y: 0.25, size: 0.46 },
  { x: -0.46, y: -0.37, size: 0.46 },
  { x: 0.46, y: -0.37, size: 0.46 },
];

/**
 * Trajet. En haut de page, la bague est déjà sous la constellation, vue de dessus, à l'échelle où ses dix-sept pierres tombent
 * sur les dix-sept points ; la scène est transparente, puis apparaît pendant que les traits s'effacent (feuille de style). La
 * bague se redresse ensuite vers la première fiche, passe par quatre vues, redevient un point, et les quatre métaux naissent de
 * quatre étoiles sur une orbite. Elle revient au-dessus de l'horizon pour l'appel final.
 *
 * Les scènes tenues à l'écran (orbite, appel final) sont collantes : leurs poses sont accrochées à des repères d'un pixel placés
 * dans la section, pas à la scène elle-même, dont la position suit l'écran.
 */
function actorsFor(metals: VersionCopy['metals'], selected: number): StageActor[] {
  return metals.map((m, k) => {
    const metal = m.id;
    const pose = (p: Omit<StagePose, 'metal'>): StagePose => ({ ...p, metal });
    const key = (anchor: string, p: Omit<StagePose, 'metal'>, narrow?: Partial<StagePose>): StageKey => ({ anchor, pose: pose(p), narrow });
    // Orbite : une étoile (taille 0) qui devient une bague, tenue, puis redevient une étoile. Le métal choisi est un peu plus grand.
    const big = k === selected ? 1.1 : 1;
    const slot = (anchor: string, scale: number) =>
      key(
        anchor,
        { x: ORBIT[k].x, y: ORBIT[k].y, size: ORBIT[k].size * scale * big, rot: [24, -30 + (k - 1.5) * 14, 0] },
        { x: ORBIT_NARROW[k].x, y: ORBIT_NARROW[k].y, size: ORBIT_NARROW[k].size * scale * big },
      );
    const orbit = [slot('b-orbite-debut', 0), slot('b-orbite', 1), slot('b-orbite-fin', 1), slot('b-orbite-sortie', 0)];
    if (k !== selected) return { id: m.family, keys: orbit };
    // Vue de dessus, à l'échelle de la constellation (voir `.constellation` : largeur en vmin / 63, ou / 61,5 sur téléphone).
    const plan = { x: 0, y: 0, size: 1.09, rot: [90, 0, 0] as [number, number, number] };
    return {
      id: m.family,
      keys: [
        key('b-ciel', plan, { size: 1.3 }),
        key('b-ciel-fin', plan, { size: 1.3 }),
        key('b-approche', { x: 0.24, y: 0.04, size: 0.95, rot: [62, -18, 0] }, { x: 0, y: 0.3, size: 0.95 }),
        // Quatre vues : la marquise de dessus, le trois-quarts, le profil, l'anneau de face.
        key('b-vue-1', { x: -0.44, y: -0.02, size: 1.4, rot: [76, 12, 0] }, { x: 0, y: 0.42, size: 1.2 }),
        key('b-vue-2', { x: -0.44, y: -0.05, size: 1.02, rot: [22, -42, 8] }, { x: 0, y: 0.44, size: 0.8 }),
        key('b-vue-3', { x: -0.44, y: 0, size: 1.0, rot: [8, -88, 0] }, { x: 0, y: 0.44, size: 0.74 }),
        key('b-vue-4', { x: -0.44, y: 0, size: 0.96, rot: [4, -6, 0] }, { x: 0, y: 0.44, size: 0.7 }),
        // Elle redevient un point là où elle se trouve, avant que le titre de l'orbite n'arrive.
        key('b-orbite-seuil', { x: -0.44, y: 0, size: 0, rot: [4, -6, 0] }, { x: 0, y: 0.44, size: 0 }),
        ...orbit,
        // Appel final : elle grandit comme une étoile au-dessus de l'horizon pendant que la scène monte.
        key('b-fin-seuil', { x: 0, y: 0.38, size: 0, rot: [22, -32, 0] }, { y: 0.36, size: 0 }),
        key('b-fin-scene', { x: 0, y: 0.38, size: 0.6, rot: [22, -32, 0] }, { y: 0.36, size: 0.74 }),
      ],
    };
  });
}

/**
 * Constellation : les pierres vues de dessus, reliées par pièce (l'alliance d'un bout à l'autre, le solitaire autour de la marquise).
 * Le cadre est centré sur le centre du modèle (Y = −0,876 mm), que la scène 3D place au milieu de l'écran : chaque point tombe
 * sur sa pierre.
 */
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
    <svg className={styles.constellation} viewBox="-9 -4.124 18 10" aria-hidden="true" focusable="false">
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

      <main id={MAIN_ID} className={styles.main}>
        {/* Scène 3D, dans le contenu principal : sans WebGL, l'image de repli appartient à la page (aucun contenu hors des régions). */}
        <div className={styles.stage}>
          <RingStage
            actors={actors}
            tilt={3}
            mirror={rtl}
            fallback={
              <div className={styles.fallback}>
                <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, 40vw" />
              </div>
            }
          />
        </div>

        {/* ---------- 1. Le ciel : la constellation des dix-sept pierres ---------- */}
        <section className={styles.intro} aria-labelledby="b-title">
          {/* Repères du trajet : le milieu du premier écran, puis la fin du fondu entre la constellation et la bague. */}
          <span id="b-ciel" className={styles.marker} aria-hidden="true" />
          <span id="b-ciel-fin" className={styles.gate} style={{ top: '98svh' }} aria-hidden="true" />
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

        {/* ---------- 2. L'approche : la bague se redresse, la fiche du modèle se pose à côté ---------- */}
        <section className={styles.approach} aria-labelledby="b-model">
          <span id="b-approche" className={styles.vue} aria-hidden="true" />
          <div className={styles.card}>
            <p className={styles.kicker}>{copy.eyebrow}</p>
            <h2 id="b-model" className={styles.h3}>
              {copy.model.name}
            </h2>
            <p className={styles.body}>{copy.model.description}</p>
            <p className={styles.body}>{copy.lede}</p>
            <p className={`${styles.note} ${styles.smallPrint}`}>{copy.liveNote}</p>
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
              <span id={`b-vue-${i + 1}`} className={styles.vue} aria-hidden="true" />
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

        {/* ---------- 4. L'orbite : quatre étoiles deviennent les quatre métaux (scène tenue à l'écran) ---------- */}
        <section className={styles.orbit} aria-labelledby="b-orbit-title">
          <span id="b-orbite-seuil" className={styles.gate} style={{ top: 0 }} aria-hidden="true" />
          <span id="b-orbite-debut" className={styles.gate} style={{ top: '50svh' }} aria-hidden="true" />
          <span id="b-orbite" className={styles.gate} style={{ top: '78svh' }} aria-hidden="true" />
          <span id="b-orbite-fin" className={styles.gate} style={{ top: '125svh' }} aria-hidden="true" />
          <span id="b-orbite-sortie" className={styles.gate} style={{ top: '150svh' }} aria-hidden="true" />
          <div className={styles.orbitView}>
            <span className={styles.orbitPath} aria-hidden="true" />
            {/* Réticule sur le métal choisi (décoratif : le choix est porté par les boutons). */}
            <span className={styles.reticle} data-slot={selected} aria-hidden="true" />
            <h2 id="b-orbit-title" className={styles.orbitTitle}>
              {copy.metalsTitle}
            </h2>
            <ul className={styles.orbitNames} aria-label={copy.metalLabel}>
              {copy.metals.map((m, i) => (
                <li key={m.family}>
                  <button type="button" onClick={() => setSelected(i)} aria-pressed={i === selected}>
                    {m.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 5. Le manifeste : fabrication en images (une intention), métaux et pierres, autres pages ---------- */}
        <section className={styles.manifesto} aria-labelledby="b-manifesto-title">
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

        {/* ---------- 6. Le lever : appel final, scène tenue à l'écran ---------- */}
        <section className={styles.final} aria-labelledby="b-final-title">
          <span id="b-fin-seuil" className={styles.gate} style={{ top: '10svh' }} aria-hidden="true" />
          <span id="b-fin-scene" className={styles.marker} aria-hidden="true" />
          <div className={styles.finalView}>
            <span className={styles.horizon} aria-hidden="true" />
            <div className={styles.finalText}>
              <h2 id="b-final-title" className={styles.finalTitle}>
                {copy.finalTitle}
              </h2>
              <Link href={configure} className={styles.cta}>
                {copy.cta}
              </Link>
              <p className={styles.finalNote}>{copy.ctaNote}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
