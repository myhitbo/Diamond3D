import { z } from 'zod';
import { METALS } from '@/config/metals';
import { DICTIONARIES, formatNumber } from '@/i18n/dictionaries';
import { applyChange, configToParams, defaultState, metalWeightEstimateG, stoneSummary } from '@/lib/configurator/logic';
import { configuratorPath } from '@/lib/routes';
import { LOCALES, MetalId, type ConfigState, type Locale, type ModelDefinition } from '@/lib/configurator/schema';

/* ---------- Limites (une seule source pour le formulaire et le serveur) ---------- */

export const PHOTO_LIMITS = {
  maxCount: 3,
  maxBytesEach: 3 * 1024 * 1024,
  // Sous la limite de corps de requête des hébergeurs courants (≈ 4,5 Mo).
  maxBytesTotal: 4 * 1024 * 1024,
  types: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'],
} as const;

/* ---------- Schéma de la demande ---------- */

const ConfigInput = z.object({
  composition: z.string().max(64),
  metal: MetalId,
  stones: z.record(z.string().max(64), z.string().max(64)),
  diamondOrigin: z.enum(['natural', 'lab-grown']),
});

export const QuoteFields = z.object({
  modelId: z.string().regex(/^[a-z0-9-]+$/).max(64),
  locale: z.enum(LOCALES),
  config: ConfigInput,
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().trim().max(40).regex(/^[0-9+().\s-]*$/).default(''),
  ringSize: z.string().trim().max(40).default(''),
  /** Date voulue (texte libre : « fiançailles le 14 février ») et budget indicatif, tous deux facultatifs. */
  wantedDate: z.string().trim().max(80).default(''),
  budget: z.string().trim().max(60).default(''),
  message: z.string().trim().max(3000).default(''),
  consent: z.literal(true),
  /** Accord facultatif pour publier photos et vidéos de fabrication (sans le nom du client). */
  publishConsent: z.boolean().default(false),
  /** Champ piège invisible : un humain le laisse vide. */
  website: z.string().max(0).default(''),
});
export type QuoteFields = z.infer<typeof QuoteFields>;

export type PhotoMeta = { name: string; type: string; size: number };

export type QuoteError =
  | { code: 'invalid'; fields: string[] }
  | { code: 'unknown_model' }
  | { code: 'invalid_config' }
  | { code: 'photos'; reason: 'count' | 'type' | 'size' | 'total' };

/** Lit les champs texte d'un FormData (`config` est un JSON, `consent` une case cochée). */
export function fieldsFromForm(form: FormData): Record<string, unknown> {
  const get = (k: string) => {
    const v = form.get(k);
    return typeof v === 'string' ? v : undefined;
  };
  let config: unknown;
  try {
    config = JSON.parse(get('config') ?? 'null');
  } catch {
    config = null;
  }
  return {
    modelId: get('modelId'),
    locale: get('locale'),
    config,
    name: get('name'),
    email: get('email')?.trim(),
    phone: get('phone'),
    ringSize: get('ringSize'),
    wantedDate: get('wantedDate'),
    budget: get('budget'),
    message: get('message'),
    consent: get('consent') === 'on' || get('consent') === 'true',
    publishConsent: get('publishConsent') === 'on' || get('publishConsent') === 'true',
    website: get('website'),
  };
}

export function checkPhotos(photos: PhotoMeta[]): QuoteError | null {
  if (photos.length > PHOTO_LIMITS.maxCount) return { code: 'photos', reason: 'count' };
  for (const p of photos) {
    if (!(PHOTO_LIMITS.types as readonly string[]).includes(p.type)) return { code: 'photos', reason: 'type' };
    if (p.size > PHOTO_LIMITS.maxBytesEach) return { code: 'photos', reason: 'size' };
  }
  if (photos.reduce((s, p) => s + p.size, 0) > PHOTO_LIMITS.maxBytesTotal) return { code: 'photos', reason: 'total' };
  return null;
}

/**
 * Valide une demande. La configuration reçue est rejouée sur la définition du modèle :
 * toute valeur non prévue (composition, métal, pierre) est refusée.
 */
export function parseQuote(
  raw: Record<string, unknown>,
  getModel: (id: string) => ModelDefinition | undefined,
): { ok: true; fields: QuoteFields; model: ModelDefinition; state: ConfigState } | { ok: false; error: QuoteError } {
  const parsed = QuoteFields.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: { code: 'invalid', fields: [...new Set(parsed.error.issues.map((i) => String(i.path[0])))] } };
  }
  const model = getModel(parsed.data.modelId);
  if (!model) return { ok: false, error: { code: 'unknown_model' } };
  const base = defaultState(model);
  const state = applyChange(model, base, parsed.data.config);
  const same =
    state.composition === parsed.data.config.composition &&
    state.metal === parsed.data.config.metal &&
    state.diamondOrigin === parsed.data.config.diamondOrigin &&
    Object.keys(parsed.data.config.stones).every((k) => model.stoneSlots.some((s) => s.id === k)) &&
    Object.entries(state.stones).every(([k, v]) => parsed.data.config.stones[k] === v);
  if (!same) return { ok: false, error: { code: 'invalid_config' } };
  return { ok: true, fields: parsed.data, model, state };
}

/* ---------- Contenu de l'e-mail (toujours en français pour l'atelier) ---------- */

/** Récapitulatif recalculé côté serveur à partir du modèle, jamais repris du navigateur. */
export function configurationLines(model: ModelDefinition, state: ConfigState): string[] {
  const t = DICTIONARIES.fr;
  const comp = model.compositions.find((c) => c.id === state.composition)!;
  const lines = [
    `Modèle : ${model.name.fr} (${model.id})`,
    `${t.composition} : ${comp.name.fr}`,
    `${t.metal} : ${METALS[state.metal].name.fr}`,
  ];
  for (const slot of model.stoneSlots) {
    if (!comp.pieces.includes(slot.piece)) continue;
    const v = slot.variants.find((x) => x.id === state.stones[slot.id]);
    if (v) lines.push(`${slot.name.fr} : ${v.name.fr}`);
  }
  for (const g of stoneSummary(model, state)) {
    lines.push(
      `${t.stones} : ${g.count} × ${t.shapes[g.shape as keyof typeof t.shapes]} ${g.sizesMm.join(' – ')} mm (≈ ${formatNumber('fr', g.caratEstimate, 3)} ct estimés)`,
    );
  }
  lines.push(`${t.origin} : ${t.origins[state.diamondOrigin]}`);
  lines.push(`${t.weight} : ${t.weightValue(formatNumber('fr', metalWeightEstimateG(model, state), 1))}`);
  return lines;
}

export function buildQuoteEmail(
  model: ModelDefinition,
  state: ConfigState,
  f: QuoteFields,
  photos: PhotoMeta[],
  siteUrl?: string,
): { subject: string; text: string } {
  const lang: Record<Locale, string> = { fr: 'français', en: 'anglais', he: 'hébreu' };
  const comp = model.compositions.find((c) => c.id === state.composition)!;
  const text = [
    'Nouvelle demande de devis',
    '',
    '— Client —',
    `Nom : ${f.name}`,
    `E-mail : ${f.email}`,
    `Téléphone : ${f.phone || '—'}`,
    `Taille de doigt indiquée : ${f.ringSize || '—'}`,
    `Pour quelle date : ${f.wantedDate || '—'}`,
    `Budget indicatif : ${f.budget || '—'}`,
    `Langue du client : ${lang[f.locale]}`,
    `Publication des photos et vidéos de fabrication : ${f.publishConsent ? 'accord donné (sans le nom du client)' : 'pas d’accord'}`,
    '',
    '— Configuration —',
    ...configurationLines(model, state),
    ...(siteUrl ? [`Page : ${siteUrl.replace(/\/$/, '')}${configuratorPath(f.locale, model.id)}?${configToParams(model, state)}`] : []),
    `Configuration brute : ${JSON.stringify(state)}`,
    '',
    '— Message —',
    f.message || '—',
    '',
    `— Photos jointes : ${photos.length} —`,
    ...photos.map((p) => `${p.name} (${Math.round(p.size / 1024)} Ko)`),
    '',
    'Répondre directement à cet e-mail pour écrire au client.',
  ].join('\n');
  const subject = `Devis ${model.name.fr} · ${comp.name.fr} · ${METALS[state.metal].name.fr} — ${f.name}`;
  return { subject: subject.replace(/[\r\n]+/g, ' '), text };
}
