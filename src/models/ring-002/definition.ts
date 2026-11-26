import type { ModelDefinition } from '@/lib/configurator/schema';
import geometry from './geometry.json';
import asset from './asset.json';

/**
 * Solitaire marquise à corps pavé, issu de `Solitaire-marquise.3dm` (fichier de fabrication reçu de l'atelier le 17/11/2026).
 *
 * Tout ce qui est écrit ici se lit dans le fichier (`geometry.json`) : une marquise de 16,5 × 8,5 mm tenue par six griffes,
 * seize diamants ronds de 1,9 mm sur l'anneau, dix-neuf de 1,1 mm en galerie sous la pierre. Le fichier n'a ni courbe de
 * taille ni STL de référence : la taille est mesurée sur l'anneau, le volume de métal sur l'union des solides.
 * Retouche web (demande du propriétaire, 26/11/2026) : les six griffes, qui montent au-dessus de la table dans le fichier de
 * fabrication, sont ramenées à 60 % de la hauteur de la couronne, comme sur une bague finie (`pipeline/web_retouch.py`, `claws`).
 * Le reste est affiché tel que modélisé. L'atelier n'a pas encore vu ce modèle en ligne (`workshopValidated: false`).
 */
export const ring002 = {
  id: 'ring-002',
  status: 'draft',
  workshopValidated: false,
  category: 'engagement-ring',
  name: { fr: 'Solitaire marquise pavé', en: 'Pavé marquise solitaire', he: 'סוליטר מרקיזה בשיבוץ פאווה' },
  description: {
    fr: 'Grande marquise tenue par six griffes, sur un anneau serti de seize diamants ronds ; dix-neuf petits diamants forment une galerie sous la pierre.',
    en: 'Large marquise held by six claws, on a band set with sixteen round diamonds; nineteen small diamonds form a gallery beneath the stone.',
    he: 'מרקיזה גדולה המוחזקת בשש שיניים, על טבעת המשובצת בשישה־עשר יהלומים עגולים; תשעה־עשר יהלומים קטנים יוצרים גלריה מתחת לאבן.',
  },
  geometry: geometry as ModelDefinition['geometry'],
  asset: asset as ModelDefinition['asset'],
  compositions: [
    {
      id: 'solitaire',
      name: { fr: 'Solitaire', en: 'Solitaire', he: 'סוליטר' },
      description: { fr: 'La bague seule.', en: 'The ring alone.', he: 'הטבעת לבדה.' },
      pieces: ['A'],
    },
  ],
  defaultComposition: 'solitaire',
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
          id: 'marquise-16.5x8.5',
          shape: 'marquise',
          name: { fr: 'Marquise 16,5 × 8,5 mm', en: 'Marquise 16.5 × 8.5 mm', he: 'מרקיזה 16.5 × 8.5 מ״מ' },
          // La pierre et sa tête (galeries et six griffes) forment un tout indissociable.
          nodes: ['A__gem_center', 'A__metal_head_center'],
          // Pas de poids commercial affiché : aucune valeur de tableau publié n'a été vérifiée pour ces dimensions.
          // Le volume du modèle donne 3,66 ct (estimation géométrique, affichée comme telle) ; poids réel à fournir par l'atelier.
        },
      ],
      defaultVariant: 'marquise-16.5x8.5',
      // La tête est dessinée pour cette pierre : une autre taille demande une étude de l'atelier.
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
