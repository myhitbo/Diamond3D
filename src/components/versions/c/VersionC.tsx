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

/** Métal montré à chacune des trois premières étapes ; la quatrième porte déjà le métal choisi dans la page. */
const STEP_METALS: Family[] = ['white', 'rose', 'platinum'];

/**
 * Trajet de la bague. Elle ouvre la page en très gros plan, puis traverse l'écran d'un côté à l'autre en changeant de métal à
 * chaque étape (blanc, rose, platine, puis le métal choisi) : on voit les quatre métaux sans rien toucher. Les pierres restent
 * tournées vers l'objectif (tangage de 50 à 76 degrés) : de profil, on ne verrait que les griffes et le jonc. À l'atelier, elle
 * prend le métal et la composition choisis et tient en place pendant que la section est tenue à l'écran ; elle sort par le haut,
 * passe sous l'écran sans être vue (taille presque nulle) et remonte en grand sous l'appel final.
 */
function keysFor(metals: VersionCopy['metals'], selected: number, composition: string): StageKey[] {
  const id = (family: Family) => metals.find((m) => m.family === family)!.id;
  const chosen = metals[selected].id;
  const pieces = { a: composition === 'band' ? 0 : 1, b: composition === 'solitaire' ? 0 : 1 };
  const k = (anchor: string, pose: StagePose, narrow?: Partial<StagePose>): StageKey => ({ anchor, pose, narrow });
  // Valeurs de téléphone : la taille suit la largeur et le bandeau de la bague suit la hauteur. Les tailles conviennent à un
  // téléphone courant (390 × 664 et plus) ; `maxH` les réduit sur un écran court pour que la bague reste entre l'en-tête et le
  // bas du bandeau (contrôlé à 375 × 548).
  const atelier: StagePose = { x: 0, y: 0.3, size: 0.64, rot: [58, -18, 0], metal: chosen, ...pieces };
  const atelierNarrow = { y: 0.29, size: 0.95 };
  const final: StagePose = { x: 0, y: -0.74, size: 1.45, rot: [64, 0, 0], metal: chosen, ...pieces };
  return [
    k('c-hero', { x: -0.53, y: -0.08, size: 1.3, rot: [60, 26, -16], metal: id('yellow') }, { x: 0, y: 0.3, size: 1.2, maxH: 0.7 }),
    k('c-m1', { x: 0.68, y: -0.07, size: 1.42, rot: [72, -14, 6], metal: id('white') }, { x: 0, y: 0.27, size: 1.25, maxH: 0.75 }),
    k('c-m2', { x: 0.62, y: -0.12, size: 1.3, rot: [54, 34, -12], metal: id('rose') }, { x: 0, y: 0.31, size: 1.1, maxH: 0.65 }),
    // Très gros plan de la page : les pierres, coupées par le bord de l'écran.
    k('c-m3', { x: -0.78, y: -0.18, size: 1.7, rot: [76, 22, 14], metal: id('platinum') }, { x: 0, y: 0.25, size: 1.3, maxH: 0.8 }),
    k('c-m4', { x: -0.58, y: -0.08, size: 1.2, rot: [50, -36, 8], metal: chosen }, { x: 0, y: 0.31, size: 1.05, maxH: 0.62 }),
    k('c-atelier-pose', atelier, atelierNarrow),
    k('c-atelier-stay', atelier, atelierNarrow),
    k('c-atelier-exit', { ...atelier, y: 1.9 }, { size: 0.95 }),
    k('c-faits-a', { ...atelier, y: 1.9, size: 0.001 }),
    k('c-faits-b', { ...final, y: -1.9, size: 0.001 }),
    // Elle attend sous l'écran jusqu'à la fin des cartes (repère placé après la liste : sur téléphone, les cartes empilées font plus
    // d'un écran), puis monte après le titre et le bouton, et reste coupée par le bas de l'écran.
    k('c-faits-c', { ...final, y: -1.9 }, { size: 1.25 }),
    k('c-fin-scene', final, { y: -0.55, size: 1.25 }),
    k('c-fin-end', final, { y: -0.7, size: 1.25 }),
  ];
}

export default function VersionC({ copy, rtl }: { copy: VersionCopy; rtl: boolean }) {
  const [selected, setSelected] = useState(0);
  const [composition, setComposition] = useState('set');
  const [section, setSection] = useState(0);
  // Les noms des sections s'affichent au survol et au focus des points, par-dessus la page : Échap les referme (WCAG 1.4.13).
  const [quiet, setQuiet] = useState(false);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuiet(true);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const dots = [copy.eyebrow, copy.pointsTitle, copy.metalsTitle, copy.materialsTitle, copy.finalTitle];

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
      <nav className={styles.dots} aria-label={copy.sectionsLabel} data-quiet={quiet ? '' : undefined}>
        {SECTIONS.map((s, i) => (
          <a key={s} href={`#${s}`} aria-current={i === section ? 'true' : undefined} onPointerEnter={() => setQuiet(false)} onFocus={() => setQuiet(false)}>
            <span className={styles.dotLabel}>{dots[i]}</span>
          </a>
        ))}
      </nav>

      <main id={MAIN_ID} className={styles.main}>
        {/* Scène 3D, dans le contenu principal : sans WebGL, l'image de repli appartient à la page (aucun contenu hors des régions). */}
        <div className={styles.stage}>
          <RingStage
            keys={keys}
            studio="light"
            tilt={6}
            mirror={rtl}
            fallback={
              <div className={styles.fallback}>
                <Image src={FALLBACK[metal.family]} width={900} height={1125} alt={copy.fallbackAlt} sizes="(max-width: 820px) 80vw, (max-aspect-ratio: 5/6) 80vw, 40vw" />
              </div>
            }
          />
        </div>

        {/* Les trois premières sections. Sur téléphone, un seul bandeau opaque reste en haut de l'écran pour la bague et les textes
            défilent dessous (ce bloc ne doit créer aucun plan : ses enfants se rangent par rapport à la scène). */}
        <div className={styles.story}>
          <div className={styles.band} aria-hidden="true" />

          {/* ---------- 1. Ouverture : la bague en très gros plan ---------- */}
          <section id="c-hero" className={`${styles.panel} ${styles.end}`} aria-labelledby="c-title">
            <div className={styles.text}>
              <p className={styles.eyebrow}>{copy.eyebrow}</p>
              <h1 id="c-title" className={styles.title}>
                {copy.titleParts[0]}
                <em className={styles.titleEm}>{copy.titleParts[1]}</em>
                {copy.titleParts[2]}
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

          {/* ---------- 2. Comment nous travaillons : quatre étapes tenues à l'écran, la bague passe d'un côté à l'autre ---------- */}
          <section id="c-methode" className={styles.method} aria-labelledby="c-method-title">
            <h2 id="c-method-title" className="visually-hidden">
              {copy.pointsTitle}
            </h2>
            {copy.points.map((p, i) => {
              const shown = i < STEP_METALS.length ? copy.metals.find((m) => m.family === STEP_METALS[i])! : metal;
              return (
                <article key={p.title} className={`${styles.panel} ${styles.step} ${i < 2 ? styles.start : styles.end}`}>
                  {/* Repère de la pose (un élément tenu à l'écran ne peut pas servir d'ancre : il suit l'écran). */}
                  <span id={`c-m${i + 1}`} className={styles.anchor} aria-hidden="true" />
                  {/* Mot de fond, décoratif, sous la bague : le même libellé est lu dans le titre de l'étape. */}
                  <div className={styles.ghostPin} aria-hidden="true">
                    <span className={styles.ghost}>{p.kicker}</span>
                  </div>
                  <div className={styles.pin}>
                    <div className={styles.text}>
                      <p className={styles.kicker} aria-hidden="true">
                        <span>{String(i + 1).padStart(2, '0')}</span>
                      </p>
                      <h3 className={styles.h3}>
                        <span className={styles.display}>{p.kicker}</span>
                        <span className="visually-hidden">: </span>
                        <span className={styles.lead}>{p.title}</span>
                      </h3>
                      <p className={styles.body}>{p.text}</p>
                      {/* Le changement de couleur de la bague est un changement de métal : on le nomme. */}
                      <p className={styles.tag}>
                        {copy.metalLabel} · {shown.name}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          {/* ---------- 3. L'atelier : choisir le métal et la composition, la bague suit ---------- */}
          <section id="c-atelier" className={styles.atelier} aria-labelledby="c-atelier-title">
            <span id="c-atelier-pose" className={styles.atelierPose} aria-hidden="true" />
            <span id="c-atelier-stay" className={styles.atelierStay} aria-hidden="true" />
            <span id="c-atelier-exit" className={styles.atelierExit} aria-hidden="true" />
            <div className={styles.atelierPin}>
              <div className={styles.atelierScene} aria-hidden="true" />
              <h2 id="c-atelier-title" className={`${styles.h2} ${styles.centered}`}>
                {copy.metalsTitle}
              </h2>
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
                <p className={styles.note}>{copy.liveNote}</p>
                <p className={styles.action}>
                  <Link href={configure} className={styles.cta}>
                    <span>{copy.cta}</span>
                    <span className={styles.ctaArrow} aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ---------- 4. Métaux et pierres, puis la fabrication en images (une intention) ---------- */}
        <section id="c-faits" className={styles.facts} aria-labelledby="c-facts-title">
          <h2 id="c-facts-title" className={`${styles.h2} ${styles.factsTitle}`}>
            {copy.materialsTitle}
          </h2>
          <dl id="c-faits-a" className={styles.materials}>
            {copy.materials.map((m) => (
              <div key={m.term}>
                <dt>{m.term}</dt>
                <dd>{m.text}</dd>
              </div>
            ))}
          </dl>
          <p id="c-faits-b" className={styles.quote}>
            {copy.making}
          </p>
          <ul className={styles.cards} aria-label={copy.moreTitle}>
            {copy.more.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.card}>
                  <span className={styles.cardTitle}>{c.title}</span>
                  <span className={styles.cardText}>{c.text}</span>
                  <span className={styles.ctaArrow} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <span id="c-faits-c" className={styles.finalEnd} aria-hidden="true" />
        </section>

        {/* ---------- 5. Appel final : la bague revient en grand, coupée par le bas de l'écran ---------- */}
        <section id="c-fin" className={styles.final} aria-labelledby="c-final-title">
          <h2 id="c-final-title" className={styles.finalTitle}>
            {copy.finalTitle}
          </h2>
          <p className={styles.action}>
            <Link href={configure} className={`${styles.cta} ${styles.ctaSolid}`}>
              <span>{copy.cta}</span>
              <span className={styles.ctaArrow} aria-hidden="true" />
            </Link>
          </p>
          {/* La pose finale est accrochée à cet espace, pas à la section : la bague monte après le titre et le bouton. */}
          <div id="c-fin-scene" className={styles.finalScene} aria-hidden="true" />
          <span id="c-fin-end" className={styles.finalEnd} aria-hidden="true" />
        </section>
      </main>
    </div>
  );
}
