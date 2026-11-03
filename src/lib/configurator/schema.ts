import { z } from 'zod';

export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const Localized = z.object({ fr: z.string().min(1), en: z.string().min(1) });
export type Localized = z.infer<typeof Localized>;

/* ---------- Données générées par le pipeline (faits mesurés dans le fichier CAO) ---------- */

export const StoneShape = z.enum(['round', 'marquise', 'oval', 'pear', 'emerald', 'princess', 'unknown']);
export type StoneShape = z.infer<typeof StoneShape>;

const Stone = z.object({
  block: z.string(),
  shape: StoneShape,
  lengthMm: z.number().positive(),
  widthMm: z.number().positive(),
  depthMm: z.number().positive(),
  volumeMm3: z.number().positive().nullable(),
  caratEstimate: z.number().positive().nullable(),
  positionMm: z.array(z.number()).length(3),
});

const Part = z.object({
  id: z.string(),
  node: z.string(),
  kind: z.enum(['metal', 'gem']),
  role: z.string(),
  slot: z.string().optional(),
  sourceObjects: z.number().int().positive(),
  triangles: z.number().int().positive(),
  boundsMm: z.array(z.array(z.number()).length(3)).length(2),
  stones: z.array(Stone).optional(),
});

export const Geometry = z.object({
  modelId: z.string(),
  source: z.object({ file: z.string(), sha256: z.string().length(64), application: z.string(), units: z.literal('mm') }).passthrough(),
  fingerSize: z.object({ label: z.string(), innerDiameterMm: z.number().positive() }).nullable(),
  pieces: z.record(
    z.string(),
    z.object({
      label: z.string(),
      parts: z.array(Part).min(1),
      metalVolumeMm3: z.number().positive(),
    }).passthrough(),
  ),
}).passthrough();
export type Geometry = z.infer<typeof Geometry>;

export const AssetReport = z.object({
  modelId: z.string(),
  glb: z.string().startsWith('/models/'),
  glbBytes: z.number().int().positive(),
  nodes: z.record(z.string(), z.object({ trianglesWeb: z.number().int().positive(), maxDeviationMm: z.number() })),
  trianglesWeb: z.number().int().positive(),
  maxDeviationMm: z.number(),
}).passthrough();
export type AssetReport = z.infer<typeof AssetReport>;

/* ---------- Catalogue des métaux (règles d'atelier, communes à tous les modèles) ---------- */

export const MetalId = z.enum(['yellow-gold-18k', 'white-gold-18k', 'rose-gold-18k', 'platinum-950']);
export type MetalId = z.infer<typeof MetalId>;

export const Metal = z.object({
  id: MetalId,
  name: Localized,
  /** Rendu uniquement : approximation visuelle à calibrer sur photographies réelles. */
  render: z.object({ color: z.string().regex(/^#[0-9a-f]{6}$/i), roughness: z.number().min(0).max(1) }),
  /**
   * Densité nominale publiée (g/cm³), pour une estimation de poids seulement.
   * `corroborated` : la valeur est recoupée par au moins une seconde source indépendante.
   */
  density: z.object({ nominalGcm3: z.number().positive(), source: z.string().url(), corroborated: z.boolean() }),
});
export type Metal = z.infer<typeof Metal>;

/* ---------- Définition éditoriale d'un modèle (règles de configuration) ---------- */

const Composition = z.object({
  id: z.string(),
  name: Localized,
  description: Localized,
  pieces: z.array(z.string()).min(1),
});

/** Une variante de pierre remplace un ensemble de pièces (pierre + tête compatible). */
const StoneVariant = z.object({
  id: z.string(),
  shape: StoneShape,
  name: Localized,
  nodes: z.array(z.string()).min(1),
  /**
   * Poids commercial de la pierre pour ces dimensions (tableau de conversion publié), affiché au client.
   * Distinct de l'estimation géométrique ; `confirmedByWorkshop` passe à true avec le poids réel.
   */
  nominalCarat: z.object({ value: z.number().positive(), source: z.string().url(), confirmedByWorkshop: z.boolean() }).optional(),
});

/** Forme étudiée mais non disponible : on dit pourquoi, on ne simule rien. */
const UnavailableShape = z.object({
  shape: z.enum(['round', 'oval', 'pear', 'emerald', 'princess']),
  reason: z.enum(['requires_dedicated_head']),
});

const StoneSlot = z.object({
  id: z.string(),
  piece: z.string(),
  name: Localized,
  variants: z.array(StoneVariant).min(1),
  defaultVariant: z.string(),
  unavailableShapes: z.array(UnavailableShape),
  /** D'autres tailles de pierre peuvent être étudiées par l'atelier, hors configurateur. */
  otherSizesOnRequest: z.boolean().optional(),
});

export const ModelDefinition = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  status: z.enum(['draft', 'review', 'published']),
  /** Une publication exige la validation explicite de l'atelier. */
  workshopValidated: z.boolean(),
  category: z.enum(['ring', 'engagement-ring', 'wedding-band', 'ring-set']),
  name: Localized,
  description: Localized,
  geometry: Geometry,
  asset: AssetReport,
  compositions: z.array(Composition).min(1),
  defaultComposition: z.string(),
  metals: z.object({ options: z.array(MetalId).min(1), default: MetalId, availabilityConfirmed: z.boolean() }),
  stoneSlots: z.array(StoneSlot),
  diamondOrigins: z.object({
    options: z.array(z.enum(['natural', 'lab-grown'])).min(1),
    default: z.enum(['natural', 'lab-grown']),
    /** L'origine n'a aucun effet visuel : c'est une information de certificat et de prix. */
    affectsRendering: z.literal(false),
  }),
  /** Aucun prix tant que les règles ne sont pas fournies par l'atelier. */
  pricing: z.object({ mode: z.literal('quote') }),
});
export type ModelDefinition = z.infer<typeof ModelDefinition>;

export type ConfigState = {
  composition: string;
  metal: MetalId;
  stones: Record<string, string>;
  diamondOrigin: 'natural' | 'lab-grown';
};
