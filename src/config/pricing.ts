import type { PriceParams } from '@/lib/pricing/engine';

/**
 * Paramètres de prix communiqués par l'atelier les 3 et 4/11/2026 (docs/PRICING_RULES.md).
 * Les `null` sont les points encore manquants : tant qu'il en reste, le moteur
 * répond « incomplete » et le site affiche « Sur devis ».
 */
export const PRICE_PARAMS: PriceParams = {
  metalIlsPerG: {
    '14k': [370, 380],
    '18k': [470, 480],
    platinum: null, // non communiqué
  },
  // 4/11 : « je facture les 370 ₪/g ainsi que tous les frais de fab », comme à une boutique [I : postes séparés].
  castingIncludedInMetal: false,
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
  // Bénéfice de la vente (4/11) : bagues de fiançailles en diamant synthétique, 1 500 à 3 000 ₪ en Israël.
  // Yonathan propose « un bénéfice fixe par pièce, modifié selon les matières ».
  // Valeurs ci-dessous = PROPOSITION à faire valider ; tant que validated = false, aucun prix n'est calculé.
  profit: {
    engagement: { fixedIls: 1500, rateOnMaterials: 0.25, minIls: 1500, maxIls: 3000, validated: false },
    band: { fixedIls: 600, rateOnMaterials: 0.25, minIls: 400, maxIls: 1500, validated: false },
    kiddushin: { fixedIls: 400, rateOnMaterials: 0.2, minIls: 300, maxIls: 800, validated: false },
    other: { fixedIls: 800, rateOnMaterials: 0.25, minIls: 500, maxIls: 3000, validated: false },
  },
  // Proposé : taux représentatif de la Banque d'Israël, mis à jour chaque jour ouvré. Non validé.
  usdToIls: null,
  vatRate: 0.18, // TVA Israël depuis le 1/1/2025
  weightUncertainty: 0.05, // densités et pertes indisponibles chez l'atelier
};
