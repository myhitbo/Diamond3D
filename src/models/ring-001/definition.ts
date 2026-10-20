import type { ModelDefinition } from '@/lib/configurator/schema';
import geometry from './geometry.json';
import asset from './asset.json';

/**
 * Modèle pilote issu de Ring.3dm (ensemble de deux bagues).
 *
 * Seules les options réellement présentes dans le fichier CAO sont proposées.
 * Les autres formes de pierre sont listées comme indisponibles, avec leur raison.
 */
export const ring001 = {
  id: 'ring-001',
  status: 'draft',
  workshopValidated: false,
  category: 'ring-set',
  name: { fr: 'Ensemble marquise', en: 'Marquise set' },
  description: {
    fr: 'Solitaire marquise entouré de six diamants ronds, accompagné d’une alliance dégradée qui épouse sa forme.',
    en: 'Marquise solitaire framed by six round diamonds, paired with a graduated band shaped to fit around it.',
  },
  geometry: geometry as ModelDefinition['geometry'],
  asset: asset as ModelDefinition['asset'],
  compositions: [
    {
      id: 'set',
      name: { fr: 'Ensemble', en: 'Set' },
      description: { fr: 'Solitaire et alliance portés ensemble.', en: 'Solitaire and band worn together.' },
      pieces: ['A', 'B'],
    },
    {
      id: 'solitaire',
      name: { fr: 'Solitaire', en: 'Solitaire' },
      description: { fr: 'La bague marquise seule.', en: 'The marquise ring alone.' },
      pieces: ['A'],
    },
    {
      id: 'band',
      name: { fr: 'Alliance', en: 'Band' },
      description: { fr: 'L’alliance dégradée seule.', en: 'The graduated band alone.' },
      pieces: ['B'],
    },
  ],
  defaultComposition: 'set',
  metals: {
    options: ['yellow-gold-18k', 'white-gold-18k', 'rose-gold-18k', 'platinum-950'],
    default: 'yellow-gold-18k',
    availabilityConfirmed: false,
  },
  stoneSlots: [
    {
      id: 'center',
      piece: 'A',
      name: { fr: 'Pierre centrale', en: 'Centre stone' },
      variants: [
        {
          id: 'marquise-6x3',
          shape: 'marquise',
          name: { fr: 'Marquise 6,0 × 3,0 mm', en: 'Marquise 6.0 × 3.0 mm' },
          // La pierre et sa tête (panier + griffes de pointe) forment un tout indissociable.
          nodes: ['A__gem_center', 'A__metal_head_center'],
        },
      ],
      defaultVariant: 'marquise-6x3',
      unavailableShapes: [
        { shape: 'round', reason: 'requires_dedicated_head' },
        { shape: 'oval', reason: 'requires_dedicated_head' },
        { shape: 'pear', reason: 'requires_dedicated_head' },
        { shape: 'emerald', reason: 'requires_dedicated_head' },
        { shape: 'princess', reason: 'requires_dedicated_head' },
      ],
    },
  ],
  diamondOrigins: { options: ['natural', 'lab-grown'], default: 'natural', affectsRendering: false },
  pricing: { mode: 'quote' },
} satisfies ModelDefinition;
