import { describe, expect, it } from 'vitest';
import { PRICE_PARAMS } from '@/config/pricing';
import { fromPriceIls, indicativePrice, type PriceInput, type PriceParams } from '@/lib/pricing/engine';

/** Exemple de référence de PRICING_RULES.md : or jaune 14 k, ≈ 2,5 g, diamant de laboratoire 1 ct. */
const reference: PriceInput = {
  titre: '14k',
  rhodium: false,
  weightG: 2.5,
  stones: [{ kind: 'centre', carat: 1, costUsd: [132, 132] }],
};

/** Paramètres complétés pour le test seulement : ces valeurs ne viennent pas de l'atelier. */
const complete: PriceParams = {
  ...PRICE_PARAMS,
  castingIncludedInMetal: false,
  usdMarkup: 0,
  usdToIls: 4,
  weightUncertainty: 0,
};

describe('moteur de prix', () => {
  it('refuse de calculer avec les paramètres réels et liste ce qui manque', () => {
    const r = indicativePrice(PRICE_PARAMS, reference);
    expect(r).toEqual({ status: 'incomplete', missing: ['casting-double-count', 'usd-markup', 'fx-rate'] });
  });

  it('signale le prix du platine et des pierres manquants', () => {
    const r = indicativePrice(complete, { ...reference, titre: 'platinum', stones: [{ kind: 'pave', count: 10, costUsdPerStone: null }] });
    expect(r).toEqual({ status: 'incomplete', missing: ['metal-price', 'stone-price'] });
  });

  it('retrouve l’exemple de référence : métal 925–950 ₪, postes USD 202–207 $', () => {
    const r = indicativePrice(complete, reference);
    if (r.status !== 'indicative') throw new Error('incomplet');
    expect(r.lines.find((l) => l.key === 'metal')!.ils).toEqual([925, 950]);
    const usdIls = r.lines.filter((l) => l.key !== 'metal').reduce((a, l) => [a[0] + l.ils[0], a[1] + l.ils[1]], [0, 0]);
    expect(usdIls).toEqual([202 * 4, 207 * 4]);
    expect(r.ht).toEqual([925 + 808, 950 + 828]);
    expect(r.ttc[0]).toBeCloseTo(1733 * 1.18, 6);
    expect(fromPriceIls(r)).toBe(2040);
  });

  it('n’ajoute pas la fonte si elle est comprise dans le prix du métal', () => {
    const r = indicativePrice({ ...complete, castingIncludedInMetal: true }, reference);
    if (r.status !== 'indicative') throw new Error('incomplet');
    expect(r.lines.some((l) => l.key === 'casting')).toBe(false);
  });

  it('applique rhodiage, sertissage > 2 ct, pavage et incertitude de poids', () => {
    const r = indicativePrice(
      { ...complete, weightUncertainty: 0.05 },
      { titre: '18k', rhodium: true, weightG: 4, stones: [{ kind: 'centre', carat: 2.5, costUsd: [1000, 1200] }, { kind: 'pave', count: 20, costUsdPerStone: [3, 4] }] },
    );
    if (r.status !== 'indicative') throw new Error('incomplet');
    const get = (k: string) => r.lines.find((l) => l.key === k)!.ils;
    expect(get('metal')[0]).toBeCloseTo(3.8 * 470, 6);
    expect(get('metal')[1]).toBeCloseTo(4.2 * 480, 6);
    expect(get('rhodium')).toEqual([80, 100]);
    expect(get('setting-centre')).toEqual([80, 100]);
    expect(get('setting-pave')).toEqual([120, 120]);
    expect(get('stones-pave')).toEqual([240, 320]);
  });
});
