'use client';

import { useState } from 'react';
import { METALS } from '@/config/metals';
import { DICTIONARIES } from '@/i18n/dictionaries';
import type { Locale, MetalFamily, MetalId, MetalTitre } from '@/lib/configurator/schema';
import { configuratorPath } from '@/lib/routes';
import { ring001 } from '@/models/ring-001/definition';
import { GemIcon, ShapeIcon } from './ChoiceIcons';
import { BUTTON_STYLES, Choices, Field, HALLMARK, OnRequest, radioKeys, radioTabIndex, type ButtonStyle } from './Configurator';
import styles from './Configurator.module.css';

/**
 * Page de comparaison des styles de boutons (26/11/2026, à choisir avec l'atelier) : les mêmes choix que le configurateur,
 * affichés cinq fois, une fois par style. Chaque bloc fonctionne (on voit l'état « choisi »), mais rien n'est envoyé ni
 * mémorisé : ce sont les composants du configurateur, avec les libellés du modèle pilote. Les boutons « sur demande »
 * n'ouvrent rien ici (pas de devis dans cette page).
 */

const FAMILIES: { family: MetalFamily; metal: MetalId }[] = [
  { family: 'yellow', metal: 'yellow-gold-14k' },
  { family: 'white', metal: 'white-gold-14k' },
  { family: 'rose', metal: 'rose-gold-14k' },
  { family: 'platinum', metal: 'platinum-950' },
];
const TITRES: MetalTitre[] = ['14k', '18k'];
const SLOT = ring001.stoneSlots[0];

function Sample({ n, locale }: { n: ButtonStyle; locale: Locale }) {
  const t = DICTIONARIES[locale];
  const [composition, setComposition] = useState<string>(ring001.defaultComposition);
  const [family, setFamily] = useState<MetalFamily>('yellow');
  const [titre, setTitre] = useState<MetalTitre>('14k');
  const [origin, setOrigin] = useState<'natural' | 'lab-grown'>('natural');
  const variant = SLOT.variants[0];
  return (
    <section className={styles.showcaseBlock} aria-labelledby={`style-${n}`}>
      <div className={styles.showcaseHead}>
        <h2 id={`style-${n}`}>
          {t.buttonStyles.version} {n} · {t.buttonStyles.names[n]}
        </h2>
        <a href={`${configuratorPath(locale, 'ring-002')}?boutons=${n}`}>{t.buttonStyles.open}</a>
      </div>
      <div data-buttons={n}>
        <div className={`${styles.panel} ${styles.showcasePanel}`}>
          <Field title={t.composition}>
            <Choices
              label={`${t.composition}, ${t.buttonStyles.version} ${n}`}
              options={ring001.compositions.map((c) => ({ id: c.id, label: c.name[locale] }))}
              value={composition}
              onChange={setComposition}
            />
          </Field>
          <Field title={t.metal}>
            <div className={styles.swatches} role="radiogroup" aria-label={`${t.metal}, ${t.buttonStyles.version} ${n}`} onKeyDown={radioKeys}>
              {FAMILIES.map((f, i) => (
                <button
                  key={f.family}
                  type="button"
                  role="radio"
                  aria-checked={family === f.family}
                  tabIndex={radioTabIndex(family === f.family, i, true)}
                  className={styles.swatch}
                  style={{ '--swatch': METALS[f.metal].render.color } as React.CSSProperties}
                  onClick={() => setFamily(f.family)}
                >
                  <span className={styles.swatchBall} aria-hidden="true" />
                  <span className={styles.swatchName}>{t.metalFamilies[f.family]}</span>
                </button>
              ))}
            </div>
            <Choices
              label={`${t.titre}, ${t.buttonStyles.version} ${n}`}
              options={TITRES.map((ti) => ({ id: ti, label: t.titres[ti], sub: `${HALLMARK[ti]} ‰` }))}
              value={titre}
              onChange={setTitre}
            />
          </Field>
          <Field title={SLOT.name[locale]}>
            <Choices
              label={`${SLOT.name[locale]}, ${t.buttonStyles.version} ${n}`}
              options={[{ id: variant.id, label: variant.name[locale], icon: <ShapeIcon shape={variant.shape} className={styles.choiceIcon} /> }]}
              value={variant.id}
              onChange={() => undefined}
            />
            <OnRequest
              id={`shapes-${n}`}
              title={t.otherShapes}
              note={t.otherShapesNote}
              tag={t.onRequest}
              enabled
              controls={null}
              options={SLOT.unavailableShapes.map((u) => ({ id: u.shape, label: t.shapes[u.shape], icon: <ShapeIcon shape={u.shape} className={styles.requestIcon} /> }))}
              onPick={() => undefined}
            />
            <OnRequest
              id={`stones-${n}`}
              title={t.otherStones}
              note={t.otherStonesNote}
              tag={t.onRequest}
              enabled
              controls={null}
              options={SLOT.stonesOnRequest.map((stone) => ({ id: stone, label: t.requestStones[stone], icon: <GemIcon stone={stone} className={styles.requestIcon} /> }))}
              onPick={() => undefined}
            />
          </Field>
          <Field title={t.origin}>
            <Choices
              label={`${t.origin}, ${t.buttonStyles.version} ${n}`}
              options={ring001.diamondOrigins.options.map((o) => ({ id: o, label: t.origins[o] }))}
              value={origin}
              onChange={setOrigin}
            />
          </Field>
          <button type="button" className={styles.primary}>
            {t.requestQuote}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ButtonStylesShowcase({ locale }: { locale: Locale }) {
  return (
    <div className={styles.showcase}>
      {BUTTON_STYLES.map((n) => (
        <Sample key={n} n={n} locale={locale} />
      ))}
    </div>
  );
}
