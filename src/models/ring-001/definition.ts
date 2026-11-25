import type { ModelDefinition } from '@/lib/configurator/schema';
import geometry from './geometry.json';
import asset from './asset.json';

/**
 * Modèle pilote issu de Ring.3dm (ensemble de deux bagues).
 *
 * Seules les options réellement présentes dans le fichier CAO sont proposées.
 * Les autres formes de pierre sont listées comme indisponibles, avec leur raison ; elles et les pierres de couleur
 * se demandent dans le devis.
 */
export const ring001 = {
  id: 'ring-001',
  status: 'draft',
  workshopValidated: false,
  category: 'ring-set',
  name: { fr: 'Ensemble marquise', en: 'Marquise set', he: 'סט מרקיזה' },
  description: {
    fr: 'Solitaire marquise entouré de six diamants ronds, accompagné d’une alliance dégradée qui épouse sa forme.',
    en: 'Marquise solitaire framed by six round diamonds, paired with a graduated band shaped to fit around it.',
    he: 'סוליטר מרקיזה מוקף בשישה יהלומים עגולים, יחד עם טבעת נישואין מדורגת שמתאימה לצורתו.',
  },
  geometry: geometry as ModelDefinition['geometry'],
  asset: asset as ModelDefinition['asset'],
  compositions: [
    {
      id: 'set',
      name: { fr: 'Ensemble', en: 'Set', he: 'סט' },
      description: { fr: 'Solitaire et alliance portés ensemble.', en: 'Solitaire and band worn together.', he: 'טבעת סוליטר וטבעת נישואין הנענדות יחד.' },
      pieces: ['A', 'B'],
    },
    {
      id: 'solitaire',
      name: { fr: 'Solitaire', en: 'Solitaire', he: 'סוליטר' },
      description: { fr: 'La bague marquise seule.', en: 'The marquise ring alone.', he: 'טבעת המרקיזה לבדה.' },
      pieces: ['A'],
    },
    {
      id: 'band',
      name: { fr: 'Alliance', en: 'Band', he: 'טבעת נישואין' },
      description: { fr: 'L’alliance dégradée seule.', en: 'The graduated band alone.', he: 'טבעת הנישואין המדורגת לבדה.' },
      pieces: ['B'],
    },
  ],
  defaultComposition: 'set',
  metals: {
    // Atelier, 3/11 : or 14 k et 18 k (jaune, blanc, rose) et platine ; pas d'argent.
    options: ['yellow-gold-14k', 'white-gold-14k', 'rose-gold-14k', 'yellow-gold-18k', 'white-gold-18k', 'rose-gold-18k', 'platinum-950'],
    default: 'yellow-gold-14k', // atelier, 16/11 : or jaune 14 k par défaut
    availabilityConfirmed: true,
  },
  stoneSlots: [
    {
      id: 'center',
      piece: 'A',
      name: { fr: 'Pierre centrale', en: 'Centre stone', he: 'אבן מרכזית' },
      variants: [
        {
          id: 'marquise-6x3',
          shape: 'marquise',
          name: { fr: 'Marquise 6,0 × 3,0 mm', en: 'Marquise 6.0 × 3.0 mm', he: 'מרקיזה 6.0 × 3.0 מ״מ' },
          // La pierre et sa tête (panier + griffes de pointe) forment un tout indissociable.
          nodes: ['A__gem_center', 'A__metal_head_center'],
          // Tableau Stuller : marquise 6 × 3 mm ≈ 0,25 ct. Source unique ; poids réel à fournir par l'atelier.
          // Le volume du modèle donne 0,18 ct : l'écart vient des proportions de taille, à confirmer.
          nominalCarat: {
            value: 0.25,
            source: 'https://blog.stuller.com/wp-content/uploads/2023/12/Millimeter-to-Diamond-Carat-Weight-Conversion-Chart-2.pdf',
            confirmedByWorkshop: false,
          },
        },
      ],
      defaultVariant: 'marquise-6x3',
      // Le carat ne peut pas grossir sans redessiner la bague : les six diamants latéraux touchent déjà la marquise.
      otherSizesOnRequest: true,
      unavailableShapes: [
        { shape: 'round', reason: 'requires_dedicated_head' },
        { shape: 'oval', reason: 'requires_dedicated_head' },
        { shape: 'pear', reason: 'requires_dedicated_head' },
        { shape: 'emerald', reason: 'requires_dedicated_head' },
        { shape: 'princess', reason: 'requires_dedicated_head' },
      ],
      // Atelier, 22/10 : diamants de couleur ; émeraude, saphir et rubis naturels. Aucun matériau 3D dédié : sur demande.
      stonesOnRequest: ['colored-diamond', 'emerald', 'sapphire', 'ruby'],
    },
  ],
  diamondOrigins: { options: ['natural', 'lab-grown'], default: 'natural', affectsRendering: false },
  pricing: { mode: 'quote' },
} satisfies ModelDefinition;
