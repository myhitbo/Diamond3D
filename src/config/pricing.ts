import type { PriceParams } from '@/lib/pricing/engine';

/**
 * Paramètres de prix communiqués par l'atelier le 3/11/2026 (docs/PRICING_RULES.md).
 * Les `null` sont les points encore manquants : tant qu'il en reste, le moteur
 * répond « incomplete » et le site affiche « Sur devis ».
 */
export const PRICE_PARAMS: PriceParams = {
  metalIlsPerG: {
    '14k': [370, 380],
    '18k': [470, 480],
    platinum: null, // non communiqué
  },
  castingIncludedInMetal: null, // risque de double comptage signalé, non tranché
  usd: {
    model3d: [10, 10],
    print3d: [20, 25],
    castingPerG: [10, 10],
    finalPolish: [5, 5],
    rhodium: [20, 25],
    settingCentreUpTo2ct: [10, 10],
    settingCentreOver2ct: [20, 25],
    settingPavePerStone: [1.5, 1.5],
    settingRivierePerStone: [2, 3],
  },
  usdMarkup: null, // les postes en USD sont-ils des coûts ? marge non communiquée
  usdToIls: null, // source et fréquence du taux non choisies
  vatRate: 0.18, // TVA Israël depuis le 1/1/2025
  weightUncertainty: 0.05, // densités et pertes indisponibles chez l'atelier
};
