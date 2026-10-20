import type { Metal, MetalId } from '@/lib/configurator/schema';

/**
 * Catalogue des métaux de l'atelier.
 *
 * - `render` : approximation visuelle (réflectance des métaux), à calibrer sur des
 *   photographies réelles des bijoux JR Diamond. Ce n'est pas une donnée de fabrication.
 * - `density` : valeur nominale publiée (tableau « Metal Density Reference Table » de la source),
 *   utilisée seulement pour une estimation de poids. La densité exacte dépend de l'alliage
 *   du fondeur et doit être confirmée par l'atelier.
 *   Or jaune 18 ct recoupé : 15,442 g/cm³ (brevet US 10136708), ≈ 15,58 g/cm³ (Tavex).
 */
const DENSITY_SOURCE = 'https://sobling.jewelry/jewelry-metal-weight-conversion/';

export const METALS: Record<MetalId, Metal> = {
  'yellow-gold-18k': {
    id: 'yellow-gold-18k',
    name: { fr: 'Or jaune 18 carats', en: '18k yellow gold' },
    render: { color: '#f0cc86', roughness: 0.13 },
    density: { nominalGcm3: 15.45, source: DENSITY_SOURCE, corroborated: true },
  },
  'white-gold-18k': {
    id: 'white-gold-18k',
    name: { fr: 'Or blanc 18 carats', en: '18k white gold' },
    render: { color: '#e6e5e1', roughness: 0.11 },
    density: { nominalGcm3: 14.8, source: DENSITY_SOURCE, corroborated: false },
  },
  'rose-gold-18k': {
    id: 'rose-gold-18k',
    name: { fr: 'Or rose 18 carats', en: '18k rose gold' },
    render: { color: '#eebba0', roughness: 0.13 },
    density: { nominalGcm3: 15.15, source: DENSITY_SOURCE, corroborated: false },
  },
  'platinum-950': {
    id: 'platinum-950',
    name: { fr: 'Platine 950', en: 'Platinum 950' },
    render: { color: '#d9d4cc', roughness: 0.12 },
    density: { nominalGcm3: 20.15, source: DENSITY_SOURCE, corroborated: false },
  },
};
