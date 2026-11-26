import type { ModelDefinition } from '@/lib/configurator/schema';
import geometry from './geometry.json';
import asset from './asset.json';

/**
 * Solitaire cœur à épaules fendues et pavées, issu de `Bague-coeur.3dm` (fichier de fabrication reçu de l'atelier le 17/11/2026).
 *
 * Tout ce qui est écrit ici se lit dans le fichier (`geometry.json`) : un cœur de 7,3 × 7,3 mm tenu par cinq griffes (quatre
 * autour de la pierre, une sur la pointe) ; des épaules qui se divisent en quatre branches, chacune sertie de trois diamants
 * ronds ; neuf diamants en dégradé de chaque côté de l'anneau (0,8 à 1,8 mm) ; huit de 0,85 mm en galerie sous la pierre.
 * Soit 38 diamants ronds. Le fichier n'a ni courbe de taille ni STL de référence : la taille est mesurée sur l'anneau, le
 * volume de métal sur l'union des solides.
 * Retouche web, la même que pour le solitaire marquise (demande du propriétaire, 26/11/2026) : les cinq griffes, qui montent
 * au-dessus de la table dans le fichier de fabrication, sont ramenées à 60 % de la hauteur de la couronne, embout arrondi
 * conservé (`pipeline/web_retouch.py`, `claws`). Le reste est affiché tel que modélisé. L'atelier n'a pas encore vu ce modèle
 * en ligne (`workshopValidated: false`).
 */
export const ring003 = {
  id: 'ring-003',
  status: 'draft',
  workshopValidated: false,
  category: 'engagement-ring',
  name: { fr: 'Solitaire cœur pavé', en: 'Pavé heart solitaire', he: 'סוליטר לב בשיבוץ פאווה' },
  description: {
    fr: 'Diamant taille cœur tenu par cinq griffes, sur des épaules qui se divisent en quatre branches serties ; trente-huit diamants ronds, en dégradé sur l’anneau, sur les branches et en galerie sous la pierre.',
    en: 'Heart-cut diamond held by five claws, on shoulders that split into four set branches; thirty-eight round diamonds, graduated along the band, on the branches and in a gallery beneath the stone.',
    he: 'יהלום בצורת לב המוחזק בחמש שיניים, על כתפיים המתפצלות לארבעה ענפים משובצים; שלושים ושמונה יהלומים עגולים, מדורגים לאורך הטבעת, על הענפים ובגלריה מתחת לאבן.',
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
          id: 'heart-7.3x7.3',
          shape: 'heart',
          name: { fr: 'Cœur 7,3 × 7,3 mm', en: 'Heart 7.3 × 7.3 mm', he: 'לב 7.3 × 7.3 מ״מ' },
          // La pierre et sa tête (cinq griffes, galerie, branches) forment un tout indissociable.
          nodes: ['A__gem_center', 'A__metal_head_center'],
          // Pas de poids commercial affiché : aucune valeur de tableau publié n'a été vérifiée pour ces dimensions.
          // Le volume du modèle donne 1,42 ct (estimation géométrique, affichée comme telle) ; poids réel à fournir par l'atelier.
        },
      ],
      defaultVariant: 'heart-7.3x7.3',
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
