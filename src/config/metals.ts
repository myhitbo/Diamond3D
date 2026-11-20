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
  // 14 carats (58,5 % d'or) : teintes plus pâles que le 18 carats pour le jaune, plus cuivrées pour le rose.
  // Densités : même tableau ; 14 k jaune recoupé à ≈ 13,0 g/cm³ (alliage de fonte PAT A114-PE).
  'yellow-gold-14k': {
    id: 'yellow-gold-14k',
    family: 'yellow',
    titre: '14k',
    name: { fr: 'Or jaune 14 carats', en: '14k yellow gold', he: 'זהב צהוב 14 קראט' },
    render: { color: '#e9c98e', roughness: 0.05 },
    density: { nominalGcm3: 13.05, source: DENSITY_SOURCE, corroborated: true },
  },
  'white-gold-14k': {
    id: 'white-gold-14k',
    family: 'white',
    titre: '14k',
    name: { fr: 'Or blanc 14 carats', en: '14k white gold', he: 'זהב לבן 14 קראט' },
    render: { color: '#e6e5e1', roughness: 0.05 },
    density: { nominalGcm3: 12.75, source: DENSITY_SOURCE, corroborated: false },
  },
  'rose-gold-14k': {
    id: 'rose-gold-14k',
    family: 'rose',
    titre: '14k',
    name: { fr: 'Or rose 14 carats', en: '14k rose gold', he: 'זהב אדום 14 קראט' },
    render: { color: '#eab39a', roughness: 0.05 },
    density: { nominalGcm3: 13.1, source: DENSITY_SOURCE, corroborated: false },
  },
  'yellow-gold-18k': {
    id: 'yellow-gold-18k',
    family: 'yellow',
    titre: '18k',
    name: { fr: 'Or jaune 18 carats', en: '18k yellow gold', he: 'זהב צהוב 18 קראט' },
    render: { color: '#f0cc86', roughness: 0.05 },
    density: { nominalGcm3: 15.45, source: DENSITY_SOURCE, corroborated: true },
  },
  'white-gold-18k': {
    id: 'white-gold-18k',
    family: 'white',
    titre: '18k',
    name: { fr: 'Or blanc 18 carats', en: '18k white gold', he: 'זהב לבן 18 קראט' },
    render: { color: '#e6e5e1', roughness: 0.05 },
    density: { nominalGcm3: 14.8, source: DENSITY_SOURCE, corroborated: false },
  },
  'rose-gold-18k': {
    id: 'rose-gold-18k',
    family: 'rose',
    titre: '18k',
    name: { fr: 'Or rose 18 carats', en: '18k rose gold', he: 'זהב אדום 18 קראט' },
    render: { color: '#eebba0', roughness: 0.05 },
    density: { nominalGcm3: 15.15, source: DENSITY_SOURCE, corroborated: false },
  },
  'platinum-950': {
    id: 'platinum-950',
    family: 'platinum',
    titre: 'platinum',
    name: { fr: 'Platine 950', en: 'Platinum 950', he: 'פלטינה 950' },
    render: { color: '#d9d4cc', roughness: 0.05 },
    density: { nominalGcm3: 20.15, source: DENSITY_SOURCE, corroborated: false },
  },
};
