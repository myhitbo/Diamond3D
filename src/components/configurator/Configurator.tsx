'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react';
import { useProgress } from '@react-three/drei';
import { getModel } from '@/models';
import { METALS } from '@/config/metals';
import { DICTIONARIES, formatNumber } from '@/i18n/dictionaries';
import type { ConfigState, Locale, ModelDefinition } from '@/lib/configurator/schema';
import { applyChange, defaultState, metalWeightEstimateG, stoneSummary, visibleNodes } from '@/lib/configurator/logic';
import type { Quality, ViewName } from './Viewer';
import { initProbe } from './debugProbe';
import QuoteForm from './QuoteForm';
import styles from './Configurator.module.css';

// Le moteur 3D n'est chargé qu'à l'affichage du configurateur : il ne pèse pas sur le reste du site.
const Viewer = dynamic(() => import('./Viewer'), { ssr: false });

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
}: {
  modelId: string;
  locale: Locale;
  /** Faux dans la préversion autonome, qui n'a pas de serveur pour envoyer la demande. */
  quoteEnabled?: boolean;
}) {
  const model = getModel(modelId)!;
  const t = DICTIONARIES[locale];
  const [state, dispatch] = useReducer(
    (s: ConfigState, a: Action) => (a.type === 'reset' ? defaultState(model) : applyChange(model, s, a.change)),
    model,
    defaultState,
  );
  const [view, setView] = useState<{ name: ViewName; nonce: number }>({ name: 'hero', nonce: 0 });
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [quality, setQuality] = useState<Quality>('high');
  const [debug, setDebug] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect -- lecture unique de l'environnement navigateur */
    if (q.has('debug')) initProbe();
    setDebug(q.has('debug'));
    if (q.get('quality') === 'low') setQuality('low');
    setWebgl(hasWebGL());
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const nodes = useMemo(
    () => Object.values(model.geometry.pieces).flatMap((p) => p.parts.map((x) => ({ name: x.node, kind: x.kind }))),
    [model],
  );
  const visible = useMemo(() => visibleNodes(model, state), [model, state]);
  const framing = useMemo(() => sceneFraming(model), [model]);
  const metal = METALS[state.metal];
  const pieces = model.compositions.find((c) => c.id === state.composition)!.pieces;
  const centerSlot = model.stoneSlots.find((s) => pieces.includes(s.piece));
  const stones = stoneSummary(model, state);
  const weight = metalWeightEstimateG(model, state);
  const onReady = useCallback(() => setReady(true), []);
  const onQualityDrop = useCallback(() => setQuality('low'), []);

  const reset = () => {
    dispatch({ type: 'reset' });
    setView((v) => ({ name: 'hero', nonce: v.nonce + 1 }));
  };

  return (
    <div className={styles.shell}>
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
        {!ready && webgl !== false && <Loader label={t.loading} />}
        <div className={styles.stageBar}>
          <div className={styles.views} role="group" aria-label="Vues">
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
        </div>
      </section>

      <aside className={styles.panel}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 className={styles.title}>{model.name[locale]}</h1>
        <p className={styles.lede}>{model.description[locale]}</p>
        {!model.workshopValidated && <p className={styles.badge}>{t.draftBadge}</p>}

        <Field title={t.composition}>
          <Choices
            label={t.composition}
            options={model.compositions.map((c) => ({ id: c.id, label: c.name[locale] }))}
            value={state.composition}
            onChange={(composition) => dispatch({ type: 'change', change: { composition } })}
          />
          <p className={styles.note}>{model.compositions.find((c) => c.id === state.composition)!.description[locale]}</p>
        </Field>

        <Field title={t.metal} aside={metal.name[locale]}>
          <div className={styles.swatches} role="radiogroup" aria-label={t.metal}>
            {model.metals.options.map((id) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={state.metal === id}
                aria-label={METALS[id].name[locale]}
                title={METALS[id].name[locale]}
                className={styles.swatch}
                style={{ '--swatch': METALS[id].render.color } as React.CSSProperties}
                onClick={() => dispatch({ type: 'change', change: { metal: id } })}
              />
            ))}
          </div>
          {!model.metals.availabilityConfirmed && <p className={styles.note}>{t.metalAvailabilityNote}</p>}
        </Field>

        {centerSlot && (
          <Field title={centerSlot.name[locale]}>
            <Choices
              label={centerSlot.name[locale]}
              options={centerSlot.variants.map((v) => ({ id: v.id, label: v.name[locale] }))}
              value={state.stones[centerSlot.id]}
              onChange={(id) => dispatch({ type: 'change', change: { stones: { [centerSlot.id]: id } } })}
            />
            {centerSlot.unavailableShapes.length > 0 && (
              <details className={styles.details}>
                <summary>
                  {t.otherShapes} : {centerSlot.unavailableShapes.map((u) => t.shapes[u.shape]).join(', ')}
                </summary>
                <p className={styles.note}>{t.otherShapesNote}</p>
              </details>
            )}
          </Field>
        )}

        <Field title={t.origin}>
          <Choices
            label={t.origin}
            options={model.diamondOrigins.options.map((o) => ({ id: o, label: t.origins[o] }))}
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
          </Field>
        )}

        <section className={styles.summary} aria-labelledby="summary-title">
          <h2 id="summary-title" className={styles.summaryTitle}>
            {t.summary}
          </h2>
          <dl className={styles.summaryList}>
            <div>
              <dt>{t.composition}</dt>
              <dd>{model.compositions.find((c) => c.id === state.composition)!.name[locale]}</dd>
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
                    {g.count} × {t.shapes[g.shape as keyof typeof t.shapes]} {g.sizesMm.join(' – ')} mm
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
              <dd>≈ {formatNumber(locale, weight, 1)} g</dd>
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
          <button type="button" className={styles.textButton} onClick={reset}>
            {t.reset}
          </button>
        </section>

        {quoteEnabled && (
          <div id="quote-form">
            {quoteOpen && <QuoteForm modelId={modelId} locale={locale} state={state} t={t.quote} onClose={() => setQuoteOpen(false)} />}
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
      </aside>
    </div>
  );
}

function Field({ title, aside, children }: { title: string; aside?: string; children: ReactNode }) {
  return (
    <section className={styles.field}>
      <h2 className={styles.fieldTitle}>
        <span>{title}</span>
        {aside && <span className={styles.fieldAside}>{aside}</span>}
      </h2>
      {children}
    </section>
  );
}

function Choices<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className={styles.choices} role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" role="radio" aria-checked={value === o.id} className={styles.choice} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
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
