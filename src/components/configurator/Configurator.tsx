'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useReducer, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useProgress } from '@react-three/drei';
import { MODELS, getModel } from '@/models';
import { METALS } from '@/config/metals';
import { DICTIONARIES, formatNumber } from '@/i18n/dictionaries';
import { configuratorPath } from '@/lib/routes';
import type { ConfigState, Locale, ModelDefinition } from '@/lib/configurator/schema';
import {
  applyChange,
  buildRequestMessage,
  configFromParams,
  configToParams,
  defaultState,
  hasConfigParams,
  metalFamilies,
  metalTitres,
  metalWeightEstimateG,
  pickMetal,
  shareUrl,
  stoneSummary,
  visibleNodes,
  type StoneRequest,
} from '@/lib/configurator/logic';
import type { Quality, ViewName } from './Viewer';
import { initProbe, setProbe } from './debugProbe';
import { GemIcon, ShapeIcon } from './ChoiceIcons';
import DiagnosticPanel from './DiagnosticPanel';
import QuoteForm from './QuoteForm';
import styles from './Configurator.module.css';

// Le moteur 3D n'est chargé qu'à l'affichage du configurateur : il ne pèse pas sur le reste du site.
const Viewer = dynamic(() => import('./Viewer'), { ssr: false });

/** Poinçon de chaque titre, en millièmes (atelier, 16/11 : bagues poinçonnées 585 ou 750 ; platine 950). */
export const HALLMARK = { '14k': '585', '18k': '750', platinum: '950' } as const;

/**
 * Styles des boutons à comparer avec l'atelier (26/11/2026) : « 1 » l'aspect d'origine, par défaut tant que le propriétaire
 * n'a pas choisi ; « 2 » plaques noires cerclées d'or ; « 3 » plaques d'or ; « 4 » haute joaillerie épurée ; « 5 » verre et
 * lumière. Le paramètre d'adresse `boutons` choisit le style et affiche la barre de comparaison ; rien n'est mémorisé
 * ailleurs que dans l'adresse (la politique de confidentialité annonce un site sans stockage).
 */
export const BUTTON_STYLES = ['1', '2', '3', '4', '5'] as const;
export type ButtonStyle = (typeof BUTTON_STYLES)[number];
export const DEFAULT_BUTTON_STYLE: ButtonStyle = '1';
const isButtonStyle = (v: string | null): v is ButtonStyle => BUTTON_STYLES.includes(v as ButtonStyle);

type Action = { type: 'change'; change: Partial<ConfigState> } | { type: 'reset' };

function sceneFraming(m: ModelDefinition) {
  const all = Object.values(m.geometry.pieces).flatMap((p) => p.parts.map((x) => x.boundsMm));
  const lo = [0, 1, 2].map((i) => Math.min(...all.map((b) => b[0][i])));
  const hi = [0, 1, 2].map((i) => Math.max(...all.map((b) => b[1][i])));
  const size = hi.map((h, i) => h - lo[i]);
  const radiusMm = Math.hypot(size[0], size[1], size[2]) / 2;
  // Repère Rhino : Z vers le haut, donc la hauteur à l'écran est l'étendue en Z.
  return { radiusMm, shadowYMm: -(size[2] / 2 + 0.3) };
}

/**
 * Groupe de boutons radio au clavier (motif « radio group » de l'ARIA APG) : un seul arrêt de tabulation par groupe, le choix
 * en cours ; les flèches passent au choix voisin et le sélectionnent, comme des boutons radio natifs. En hébreu, gauche et
 * droite suivent le sens de lecture (la flèche gauche va au choix suivant, affiché à gauche).
 */
export function radioKeys(e: KeyboardEvent<HTMLElement>) {
  const radios = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="radio"]'));
  const i = radios.indexOf(e.target as HTMLElement);
  if (i < 0) return;
  const rtl = getComputedStyle(e.currentTarget).direction === 'rtl';
  const step: Partial<Record<string, number>> = { ArrowDown: 1, ArrowUp: -1, ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 };
  const j = e.key === 'Home' ? 0 : e.key === 'End' ? radios.length - 1 : step[e.key] !== undefined ? (i + step[e.key]! + radios.length) % radios.length : -1;
  if (j < 0) return;
  e.preventDefault();
  radios[j].focus();
  radios[j].click();
}

/** Arrêt de tabulation d'un bouton radio : le choix en cours (ou le premier si aucun n'est choisi). */
export const radioTabIndex = (checked: boolean, index: number, anyChecked: boolean) => (checked || (!anyChecked && index === 0) ? 0 : -1);

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2') || !!c.getContext('webgl');
  } catch {
    return false;
  }
}

export default function Configurator({
  modelId,
  locale,
  quoteEnabled = true,
  diagnostic = false,
}: {
  modelId: string;
  locale: Locale;
  /** Faux dans la préversion autonome, qui n'a pas de serveur pour envoyer la demande. */
  quoteEnabled?: boolean;
  /** Page cachée /diagnostic : sonde activée d'office et panneau de mesure sous le configurateur. */
  diagnostic?: boolean;
}) {
  const model = getModel(modelId)!;
  const t = DICTIONARIES[locale];
  // La préversion autonome n'a que cette page : pas de liens vers les guides du site.
  const guideLinks = quoteEnabled ? t.guideLinks : null;
  // Autres modèles du catalogue : liens simples (page rechargée, la scène 3D repart de zéro). Ni dans la préversion autonome,
  // qui n'a que cette page, ni sur la page de diagnostic.
  const otherModels = quoteEnabled && !diagnostic && Object.keys(MODELS).length > 1 ? Object.values(MODELS) : null;
  const [state, dispatch] = useReducer(
    (s: ConfigState, a: Action) => (a.type === 'reset' ? defaultState(model) : applyChange(model, s, a.change)),
    model,
    defaultState,
  );
  const [view, setView] = useState<{ name: ViewName; nonce: number }>({
    name: 'hero',
    nonce: 0,
  });
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [quality, setQuality] = useState<Quality>('high');
  const [debug, setDebug] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  /** Forme ou pierre non modélisées demandées par un bouton « sur demande » : pré-remplissent le message du devis. */
  const [request, setRequest] = useState<StoneRequest>({});
  /** Nombre de clics sur un bouton « sur demande » : seul ce geste fait défiler la page jusqu'au formulaire déjà ouvert. */
  const [requestCount, setRequestCount] = useState(0);
  /** Résultat du bouton « partager » : lien copié, ou lien affiché à copier à la main (presse-papiers refusé). */
  const [shared, setShared] = useState<{ status: 'idle' | 'copied' | 'fallback'; link: string }>({ status: 'idle', link: '' });
  /** Style des boutons (paramètre d'adresse `boutons`) et mode comparaison (barre de choix du style affichée). */
  const [buttons, setButtons] = useState<ButtonStyle>(DEFAULT_BUTTON_STYLE);
  const [compare, setCompare] = useState(false);
  const pickButtons = (n: ButtonStyle) => {
    setButtons(n);
    try {
      const u = new URL(window.location.href);
      u.searchParams.set('boutons', n);
      window.history.replaceState(window.history.state, '', u.href);
    } catch {
      // Adresse non modifiable (préversion dans un cadre isolé) : le style change quand même.
    }
  };

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect -- lecture unique de l'environnement navigateur */
    const probe = diagnostic || q.has('debug');
    if (probe) initProbe();
    setDebug(probe);
    if (q.get('quality') === 'low') setQuality('low');
    const wanted = q.get('boutons');
    if (q.has('boutons')) setCompare(true);
    if (isButtonStyle(wanted)) setButtons(wanted);
    // Lien partagé : la configuration de l'adresse remplace celle par défaut (valeurs non prévues ignorées).
    if (hasConfigParams(model, q)) dispatch({ type: 'change', change: configFromParams(model, q) });
    setWebgl(hasWebGL());
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [diagnostic, model]);

  // L'adresse suit la configuration (sans nouvelle entrée d'historique) : recharger ou copier la barre d'adresse la conserve.
  // Une adresse arrivée sans configuration reste nue tant que rien n'a changé.
  const urlWritten = useRef(false);
  useEffect(() => {
    try {
      const u = new URL(window.location.href);
      const atDefault = JSON.stringify(state) === JSON.stringify(defaultState(model));
      if (!urlWritten.current && atDefault && !hasConfigParams(model, u.searchParams)) return;
      urlWritten.current = true;
      for (const [k, v] of configToParams(model, state)) u.searchParams.set(k, v);
      if (u.href !== window.location.href) window.history.replaceState(window.history.state, '', u.href);
    } catch {
      // Page sans historique modifiable (préversion dans un cadre isolé) : le bouton « partager » reste disponible.
    }
  }, [model, state]);

  useEffect(() => {
    if (debug) setProbe({ quality });
  }, [debug, quality]);

  const nodes = useMemo(() => Object.values(model.geometry.pieces).flatMap((p) => p.parts.map((x) => ({ name: x.node, kind: x.kind }))), [model]);
  const visible = useMemo(() => visibleNodes(model, state), [model, state]);
  const framing = useMemo(() => sceneFraming(model), [model]);
  const metal = METALS[state.metal];
  const composition = model.compositions.find((c) => c.id === state.composition)!;
  const pieces = composition.pieces;
  const centerSlot = model.stoneSlots.find((s) => pieces.includes(s.piece));
  const centerVariant = centerSlot?.variants.find((v) => v.id === state.stones[centerSlot.id]);
  const stones = stoneSummary(model, state);
  const weight = metalWeightEstimateG(model, state);
  const stoneLine = (g: (typeof stones)[number]) =>
    `${g.count} × ${t.shapes[g.shape as keyof typeof t.shapes]} ${g.sizesMm.map((x) => (locale === 'fr' ? x.replaceAll('.', ',') : x)).join(' – ')} ${t.mm}` +
    (centerVariant?.nominalCarat && g.shape === centerVariant.shape && g.count === 1 ? ` · ≈ ${formatNumber(locale, centerVariant.nominalCarat.value, 2)} ct` : '');
  // Équivalent textuel de la vue 3D (WCAG 1.1.1) : ce qu'elle montre, mis à jour à chaque choix et annoncé poliment.
  const viewerDescription = [
    `${model.name[locale]}.`,
    `${t.composition}${t.colon}${composition.name[locale]}. ${composition.description[locale]}`,
    `${t.metal}${t.colon}${metal.name[locale]}.`,
    `${t.stones}${t.colon}${stones.map(stoneLine).join(t.semicolon)}.`,
    `${t.origin}${t.colon}${t.origins[state.diamondOrigin]}.`,
  ].join(' ');
  const onReady = useCallback(() => setReady(true), []);
  const onQualityDrop = useCallback(() => setQuality('low'), []);

  const share = async () => {
    const link = shareUrl(model, state, window.location.href);
    if (navigator.share) {
      try {
        await navigator.share({ title: model.name[locale], url: link });
        setShared({ status: 'idle', link });
        return;
      } catch (e) {
        if ((e as Error)?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(link);
      setShared({ status: 'copied', link });
    } catch {
      setShared({ status: 'fallback', link });
    }
  };

  const reset = () => {
    dispatch({ type: 'reset' });
    setView((v) => ({ name: 'hero', nonce: v.nonce + 1 }));
  };
  // Une forme et une pierre se cumulent : chaque bouton remplace seulement son propre choix.
  const ask = (change: StoneRequest) => {
    setRequest((r) => ({ ...r, ...change }));
    setRequestCount((n) => n + 1);
    setQuoteOpen(true);
  };

  return (
    <div className={compare ? `${styles.shell} ${styles.withStyleBar}` : styles.shell} data-buttons={buttons}>
      <section className={styles.stage} aria-label={model.name[locale]}>
        {webgl === false ? (
          <p className={styles.notice}>{t.noWebgl}</p>
        ) : webgl ? (
          <Viewer
            url={model.asset.glb}
            nodes={nodes}
            visible={visible}
            metal={metal.render}
            view={view}
            quality={quality}
            debug={debug}
            label={t.canvasLabel}
            describedBy="viewer-description viewer-keys"
            className={styles.canvas}
            radiusMm={framing.radiusMm}
            shadowYMm={framing.shadowYMm}
            onReady={onReady}
            onQualityDrop={onQualityDrop}
            errorFallback={(retry) => (
              <div className={styles.notice} role="alert">
                <p>{t.loadError}</p>
                <button type="button" className={styles.textButton} onClick={retry}>
                  {t.retry}
                </button>
              </div>
            )}
          />
        ) : null}
        {webgl && (
          <>
            <p id="viewer-description" className="visually-hidden" aria-live="polite" aria-atomic="true">
              {viewerDescription}
            </p>
            <p id="viewer-keys" className="visually-hidden">
              {t.canvasKeys}
            </p>
          </>
        )}
        {!ready && webgl !== false && <Loader label={t.loading} />}
        <div className={styles.stageBar}>
          <div className={styles.views} role="group" aria-label={t.viewsLabel}>
            {(Object.keys(t.views) as ViewName[]).map((v) => (
              <button
                key={v}
                type="button"
                className={styles.viewButton}
                aria-pressed={view.name === v}
                onClick={() => setView((x) => ({ name: v, nonce: x.nonce + 1 }))}
              >
                {t.views[v]}
              </button>
            ))}
          </div>
          <p className={styles.hint}>{t.hint}</p>
          {/* Téléphone : la scène reste collée en haut de l'écran ; ce raccourci y reste avec elle et mène au récapitulatif et au devis
              sans recouvrir les choix (une barre collée en bas masquait des boutons, critère 2.5.8). */}
          {quoteEnabled && (
            <a className={styles.stageQuote} href="#summary-title" data-testid="sticky-quote">
              {t.requestQuote}
            </a>
          )}
        </div>
      </section>

      {/* Panneau des choix : contenu principal de la page (titre, options, devis), pas un contenu annexe : pas d'`aside`. */}
      <div className={styles.panel}>
        {diagnostic && <DiagnosticPanel locale={locale} />}
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        {otherModels && (
          <nav className={styles.models} aria-label={t.models}>
            {otherModels.map((m) => (
              <a key={m.id} href={configuratorPath(locale, m.id)} aria-current={m.id === model.id ? 'page' : undefined}>
                {m.name[locale]}
              </a>
            ))}
          </nav>
        )}
        <h1 className={styles.title}>{model.name[locale]}</h1>
        <p className={styles.lede}>{model.description[locale]}</p>
        {!model.workshopValidated && <p className={styles.badge}>{t.draftBadge}</p>}

        {/* Un modèle sans variante de composition (un solitaire seul) n'a pas ce choix. */}
        {model.compositions.length > 1 && (
          <Field title={t.composition}>
            <Choices
              label={t.composition}
              options={model.compositions.map((c) => ({
                id: c.id,
                label: c.name[locale],
              }))}
              value={state.composition}
              onChange={(composition) => dispatch({ type: 'change', change: { composition } })}
            />
            <p className={styles.note}>{composition.description[locale]}</p>
          </Field>
        )}

        <Field title={t.metal} aside={metal.name[locale]}>
          <div className={styles.swatches} role="radiogroup" aria-label={t.metal} onKeyDown={radioKeys}>
            {metalFamilies(model).map((family, i) => {
              const id = pickMetal(model, family, metal.titre);
              return (
                <button
                  key={family}
                  type="button"
                  role="radio"
                  aria-checked={metal.family === family}
                  tabIndex={radioTabIndex(metal.family === family, i, true)}
                  className={styles.swatch}
                  style={
                    {
                      '--swatch': METALS[id].render.color,
                    } as React.CSSProperties
                  }
                  onClick={() => dispatch({ type: 'change', change: { metal: id } })}
                >
                  <span className={styles.swatchBall} aria-hidden="true" />
                  <span className={styles.swatchName}>{t.metalFamilies[family]}</span>
                </button>
              );
            })}
          </div>
          {metalTitres(model, metal.family).length > 1 && (
            <>
              <Choices
                label={t.titre}
                options={metalTitres(model, metal.family).map((ti) => ({
                  id: ti,
                  label: t.titres[ti],
                  sub: `${HALLMARK[ti]} ‰`,
                }))}
                value={metal.titre}
                onChange={(ti) =>
                  dispatch({
                    type: 'change',
                    change: { metal: pickMetal(model, metal.family, ti) },
                  })
                }
              />
              <p className={styles.note}>
                {t.titreNote}
                {guideLinks && (
                  <>
                    {' '}
                    <a href={guideLinks.titre.href}>{guideLinks.titre.label}</a>
                  </>
                )}
              </p>
            </>
          )}
          {!model.metals.availabilityConfirmed && <p className={styles.note}>{t.metalAvailabilityNote}</p>}
        </Field>

        {centerSlot && (
          <Field title={centerSlot.name[locale]}>
            <Choices
              label={centerSlot.name[locale]}
              options={centerSlot.variants.map((v) => ({
                id: v.id,
                label: v.name[locale],
                icon: <ShapeIcon shape={v.shape} className={styles.choiceIcon} />,
              }))}
              value={state.stones[centerSlot.id]}
              onChange={(id) =>
                dispatch({
                  type: 'change',
                  change: { stones: { [centerSlot.id]: id } },
                })
              }
            />
            {centerVariant?.nominalCarat && (
              <p className={styles.value} data-testid="center-carat">
                {t.nominalCarat(formatNumber(locale, centerVariant.nominalCarat.value, 2), centerVariant.nominalCarat.confirmedByWorkshop)}
              </p>
            )}
            {centerSlot.otherSizesOnRequest && <p className={styles.note}>{t.otherSizesNote}</p>}
            {centerSlot.unavailableShapes.length > 0 && (
              <OnRequest
                id="other-shapes-title"
                title={t.otherShapes}
                note={t.otherShapesNote}
                tag={t.onRequest}
                enabled={quoteEnabled}
                options={centerSlot.unavailableShapes.map((u) => ({ id: u.shape, label: t.shapes[u.shape], icon: <ShapeIcon shape={u.shape} className={styles.requestIcon} /> }))}
                onPick={(shape) => ask({ shape })}
              />
            )}
            {centerSlot.stonesOnRequest.length > 0 && (
              <OnRequest
                id="other-stones-title"
                title={t.otherStones}
                note={t.otherStonesNote}
                tag={t.onRequest}
                enabled={quoteEnabled}
                options={centerSlot.stonesOnRequest.map((stone) => ({ id: stone, label: t.requestStones[stone], icon: <GemIcon stone={stone} className={styles.requestIcon} /> }))}
                onPick={(stone) => ask({ stone })}
              />
            )}
          </Field>
        )}

        <Field title={t.origin}>
          <Choices
            label={t.origin}
            options={model.diamondOrigins.options.map((o) => ({
              id: o,
              label: t.origins[o],
            }))}
            value={state.diamondOrigin}
            onChange={(diamondOrigin) => dispatch({ type: 'change', change: { diamondOrigin } })}
          />
          <p className={styles.note}>{t.originNote}</p>
        </Field>

        {model.geometry.fingerSize && (
          <Field title={t.size}>
            <p className={styles.value}>
              {t.sizeModeled(model.geometry.fingerSize.label.replace('1/2', '½'), formatNumber(locale, model.geometry.fingerSize.innerDiameterMm))}
            </p>
            <p className={styles.note}>{t.sizeNote}</p>
            {guideLinks && (
              <p className={styles.note}>
                <a href={guideLinks.size.href} className={styles.standaloneLink}>
                  {guideLinks.size.label}
                </a>
              </p>
            )}
          </Field>
        )}

        <section className={styles.summary} aria-labelledby="summary-title">
          <h2 id="summary-title" className={styles.summaryTitle}>
            {t.summary}
          </h2>
          <dl className={styles.summaryList}>
            <div>
              <dt>{t.composition}</dt>
              <dd>{composition.name[locale]}</dd>
            </div>
            <div>
              <dt>{t.metal}</dt>
              <dd>{metal.name[locale]}</dd>
            </div>
            <div>
              <dt>{t.stones}</dt>
              <dd>
                {stones.map((g) => (
                  <span key={g.shape} className={styles.stoneLine}>
                    {stoneLine(g)}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt>{t.origin}</dt>
              <dd>{t.origins[state.diamondOrigin]}</dd>
            </div>
            <div>
              <dt>{t.weight}</dt>
              <dd>{t.weightValue(formatNumber(locale, weight, 1))}</dd>
            </div>
            <div>
              <dt>{t.delay}</dt>
              <dd>{t.delayValue}</dd>
            </div>
            <div className={styles.priceRow}>
              <dt>{t.price}</dt>
              <dd>{t.priceOnQuote}</dd>
            </div>
          </dl>
          <p className={styles.note}>{t.weightNote}</p>
          <p className={styles.note}>{t.priceNote}</p>
          {quoteEnabled ? (
            <button
              type="button"
              className={styles.primary}
              aria-expanded={quoteOpen}
              aria-controls="quote-form"
              onClick={() => setQuoteOpen(true)}
            >
              {t.requestQuote}
            </button>
          ) : (
            <>
              <button type="button" className={styles.primary} disabled aria-describedby="quote-site-only">
                {t.requestQuote}
              </button>
              <p id="quote-site-only" className={styles.note}>
                {t.requestQuoteSiteOnly}
              </p>
            </>
          )}
          <div className={styles.summaryActions}>
            <button type="button" className={styles.textButton} onClick={share}>
              {t.share}
            </button>
            <button type="button" className={styles.textButton} onClick={reset}>
              {t.reset}
            </button>
          </div>
          {/* Région annoncée poliment (pas `role=status` : réservé ici à l'indicateur de chargement de la 3D). */}
          <p aria-live="polite" className={styles.note}>
            {shared.status === 'copied' && t.shareCopied}
          </p>
          {shared.status === 'fallback' && (
            <p className={styles.note}>
              <label htmlFor="share-link">{t.shareFallback}</label>
              <input
                id="share-link"
                className={styles.shareLink}
                type="text"
                readOnly
                dir="ltr"
                value={shared.link}
                onFocus={(e) => e.currentTarget.select()}
                autoFocus
              />
            </p>
          )}
        </section>

        {quoteEnabled && (
          <div id="quote-form">
            {quoteOpen && (
              <QuoteForm
                modelId={modelId}
                locale={locale}
                state={state}
                t={t.quote}
                suggestedMessage={buildRequestMessage(t, model, state, request)}
                scrollRequest={requestCount}
                onClose={() => {
                  setQuoteOpen(false);
                  setRequest({});
                }}
              />
            )}
          </div>
        )}

        <details className={styles.details}>
          <summary>{t.technical}</summary>
          <dl className={styles.techList}>
            {stones.map((g) => (
              <div key={g.shape}>
                <dt>
                  {t.shapes[g.shape as keyof typeof t.shapes]} · {t.stonesCount(g.count)}
                </dt>
                <dd>{t.caratEstimate(formatNumber(locale, g.caratEstimate, 3))}</dd>
              </div>
            ))}
            <div>
              <dt>{t.sourceFile}</dt>
              <dd>
                {model.geometry.source.file} · {model.geometry.source.application}
              </dd>
            </div>
            <div>
              <dt>{t.webModel}</dt>
              <dd>
                {t.webModelDetail(
                  formatNumber(locale, model.asset.glbBytes / 1024, 0),
                  formatNumber(locale, model.asset.trianglesWeb, 0),
                  formatNumber(locale, model.asset.maxDeviationMm, 3),
                )}
              </dd>
            </div>
          </dl>
          <p className={styles.note}>{t.caratNote}</p>
        </details>
      </div>
      {/* Comparaison des styles de boutons avec l'atelier : barre fixe, seulement si l'adresse porte `boutons`. */}
      {compare && (
        <div className={styles.styleBar} role="group" aria-label={t.buttonStyles.label}>
          <span className={styles.styleBarLabel} aria-hidden="true">
            {t.buttonStyles.label}
          </span>
          {BUTTON_STYLES.map((n) => (
            <button key={n} type="button" aria-pressed={buttons === n} aria-label={`${n} · ${t.buttonStyles.names[n]}`} onClick={() => pickButtons(n)}>
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Field({ title, aside, children }: { title: string; aside?: string; children: ReactNode }) {
  return (
    <section className={styles.field}>
      {/* Espace entre les deux parties : sans lui, le nom du titre colle les mots (« MétalOr jaune »). */}
      <h2 className={styles.fieldTitle}>
        <span>{title}</span> {aside && <span className={styles.fieldAside}>{aside}</span>}
      </h2>
      {children}
    </section>
  );
}

export function Choices<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  /** `sub` : précision sous le libellé (poinçon d'un titre). `icon` : pictogramme décoratif placé avant le libellé. */
  options: { id: T; label: string; sub?: string; icon?: ReactNode }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className={styles.choices} role="radiogroup" aria-label={label} onKeyDown={radioKeys}>
      {options.map((o, i) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          tabIndex={radioTabIndex(value === o.id, i, options.some((x) => x.id === value))}
          className={styles.choice}
          onClick={() => onChange(o.id)}
        >
          {o.icon}
          <span className={styles.choiceText}>
            <span>{o.label}</span>
            {o.sub && <span className={styles.choiceSub}>{o.sub}</span>}
          </span>
        </button>
      ))}
    </div>
  );
}

/**
 * Choix non modélisés (formes, pierres) : plaques au cadre léger, marquées « sur demande », qui ouvrent le devis avec un message pré-rempli.
 * Ce ne sont pas des options du configurateur (la 3D ne change pas) : un groupe de boutons, pas un groupe radio.
 */
export function OnRequest<T extends string>({
  id,
  title,
  note,
  tag,
  enabled,
  controls = 'quote-form',
  options,
  onPick,
}: {
  id: string;
  title: string;
  note: string;
  tag: string;
  /** Faux dans la préversion autonome : pas de devis, boutons inactifs. */
  enabled: boolean;
  /** Identifiant de la zone ouverte par les boutons (le formulaire de devis) ; `null` s'il n'y en a pas dans la page. */
  controls?: string | null;
  options: { id: T; label: string; icon?: ReactNode }[];
  onPick: (id: T) => void;
}) {
  return (
    <div className={styles.onRequest}>
      <p className={styles.onRequestTitle} id={id}>
        {title}
      </p>
      <div className={styles.requestGrid} role="group" aria-labelledby={id}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={styles.choiceOnRequest}
            disabled={!enabled}
            aria-controls={enabled && controls ? controls : undefined}
            onClick={() => onPick(o.id)}
          >
            {o.icon}
            <span>{o.label}</span>
            <span className={styles.onRequestTag}>{tag}</span>
          </button>
        ))}
      </div>
      <p className={styles.note}>{note}</p>
    </div>
  );
}

function Loader({ label }: { label: string }) {
  const { progress } = useProgress();
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <span className={styles.loaderLabel}>{label}</span>
      <span className={styles.loaderTrack}>
        <span className={styles.loaderBar} style={{ transform: `scaleX(${Math.max(progress, 4) / 100})` }} />
      </span>
    </div>
  );
}
