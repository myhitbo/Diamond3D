import type { MetalTitre } from '@/lib/configurator/schema';

/**
 * Moteur de prix indicatif (Israël, ₪, TVA de 18 % incluse : hypothèse du 4/11, sans objet tant que l'atelier est osek patour).
 *
 * ABANDONNÉ, décision de l'atelier du 16/11/2026 : aucun prix automatique (ni prix « à partir de »,
 * ni bénéfice calculé, ni plafond, ni conversion dollar → ₪). Chaque prix est fixé à la main par
 * l'atelier dans un devis. Ni branché ni supprimé ; `pricing.mode` reste « quote ».
 * Historique : le moteur attendait que l'atelier règle les points « Manque » de docs/PRICING_RULES.md. Le moteur refuse de calculer
 * et liste ce qui manque plutôt que d'inventer une valeur.
 *
 * Structure (atelier, 4/11) : métal, façon, pierres et sertissage sont facturés au prix
 * « boutique » de la Bourse, puis s'ajoute le bénéfice de la vente :
 *   bénéfice = fixe (par catégorie) + taux × matières (métal + pierres), borné [min, max].
 *
 * Tous les montants sont des fourchettes [min, max] : l'atelier a donné des fourchettes,
 * et le poids est une estimation (±5 % par défaut).
 */

export type Range = readonly [min: number, max: number];
export type Titre = MetalTitre;

export type PriceParams = {
  /** Prix du métal au tarif boutique, ₪/g, par titre ; null = non communiqué. */
  metalIlsPerG: Record<Titre, Range | null>;
  /** Les ₪/g du métal incluent-ils déjà la reprise de fonte et le polissage ? null = non tranché. */
  castingIncludedInMetal: boolean | null;
  /** Postes de façon en USD, au tarif boutique de la Bourse. */
  usd: {
    model3d: Range;
    print3d: Range;
    castingPerG: Range;
    finalPolish: Range;
    rhodium: Range;
    settingCentreUpTo2ct: Range;
    settingCentreOver2ct: Range;
    settingPavePerStone: Range;
    settingRivierePerStone: Range;
  };
  /** Règle de bénéfice par catégorie de bijou. */
  profit: Record<Category, ProfitRule>;
  /** Taux USD → ILS ; null = source non choisie. */
  usdToIls: number | null;
  vatRate: number;
  /** Incertitude relative sur le poids estimé (0,05 = ±5 %). */
  weightUncertainty: number;
};

export type Category = 'engagement' | 'band' | 'kiddushin' | 'other';

export type ProfitRule = {
  /** Bénéfice fixe par pièce, ₪ HT. */
  fixedIls: number;
  /** Part des matières (métal + pierres, ₪ HT) ajoutée au bénéfice (0,2 = 20 %). */
  rateOnMaterials: number;
  minIls: number;
  maxIls: number;
  /** Tant que l'atelier n'a pas validé la règle, le moteur ne calcule pas. */
  validated: boolean;
};

export type StoneLine =
  | { kind: 'centre'; carat: number; costUsd: Range | null }
  | { kind: 'pave' | 'riviere'; count: number; costUsdPerStone: Range | null };

export type PriceInput = {
  category: Category;
  titre: Titre;
  /** Rhodiage : or blanc uniquement. */
  rhodium: boolean;
  /** Poids estimé du métal, en grammes (centre de la fourchette). */
  weightG: number;
  stones: StoneLine[];
};

export type Missing =
  | 'metal-price'
  | 'casting-double-count'
  | 'profit-rule'
  | 'fx-rate'
  | 'stone-price';

export type BreakdownLine = { key: string; ils: Range };

export type PriceResult =
  | { status: 'incomplete'; missing: Missing[] }
  | { status: 'indicative'; lines: BreakdownLine[]; ht: Range; ttc: Range };

const add = (a: Range, b: Range): Range => [a[0] + b[0], a[1] + b[1]];
const mul = (a: Range, k: number): Range => [a[0] * k, a[1] * k];
const mulR = (a: Range, b: Range): Range => [a[0] * b[0], a[1] * b[1]];

export function indicativePrice(p: PriceParams, input: PriceInput): PriceResult {
  const missing = new Set<Missing>();
  const metal = p.metalIlsPerG[input.titre];
  if (!metal) missing.add('metal-price');
  if (p.castingIncludedInMetal === null) missing.add('casting-double-count');
  const rule = p.profit[input.category];
  if (!rule.validated) missing.add('profit-rule');
  if (p.usdToIls === null) missing.add('fx-rate');
  for (const s of input.stones) {
    if (s.kind === 'centre' ? !s.costUsd : !s.costUsdPerStone) missing.add('stone-price');
  }
  if (missing.size || !metal || p.usdToIls === null) {
    return { status: 'incomplete', missing: [...missing] };
  }

  const w: Range = [input.weightG * (1 - p.weightUncertainty), input.weightG * (1 + p.weightUncertainty)];
  const usdToIls = p.usdToIls;
  const lines: BreakdownLine[] = [{ key: 'metal', ils: mulR(w, metal) }];
  const usd = (key: string, r: Range) => lines.push({ key, ils: mul(r, usdToIls) });

  usd('model3d', p.usd.model3d);
  usd('print3d', p.usd.print3d);
  if (!p.castingIncludedInMetal) usd('casting', mulR(w, p.usd.castingPerG));
  usd('finalPolish', p.usd.finalPolish);
  if (input.rhodium) usd('rhodium', p.usd.rhodium);

  for (const s of input.stones) {
    if (s.kind === 'centre') {
      usd('stone-centre', s.costUsd!);
      usd('setting-centre', s.carat > 2 ? p.usd.settingCentreOver2ct : p.usd.settingCentreUpTo2ct);
    } else {
      usd(`stones-${s.kind}`, mul(s.costUsdPerStone!, s.count));
      const per = s.kind === 'pave' ? p.usd.settingPavePerStone : p.usd.settingRivierePerStone;
      usd(`setting-${s.kind}`, mul(per, s.count));
    }
  }

  const materials = lines
    .filter((l) => l.key === 'metal' || l.key.startsWith('stone'))
    .reduce<Range>((acc, l) => add(acc, l.ils), [0, 0]);
  lines.push({ key: 'profit', ils: [profitIls(rule, materials[0]), profitIls(rule, materials[1])] });

  const ht = lines.reduce<Range>((acc, l) => add(acc, l.ils), [0, 0]);
  return { status: 'indicative', lines, ht, ttc: mul(ht, 1 + p.vatRate) };
}

export const profitIls = (r: ProfitRule, materialsIls: number) =>
  Math.min(r.maxIls, Math.max(r.minIls, r.fixedIls + r.rateOnMaterials * materialsIls));

/** Prix « à partir de » (abandonné le 16/11) : bas de la fourchette TVA comprise, arrondi à la dizaine de ₪ inférieure. */
export const fromPriceIls = (r: Extract<PriceResult, { status: 'indicative' }>) => Math.floor(r.ttc[0] / 10) * 10;
