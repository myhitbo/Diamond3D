import { z } from 'zod';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import type { PhotoMeta, QuoteError } from './request';

/**
 * Demande de transformation d'un bijou de famille : description de l'ancien bijou, souhait, photos.
 * Même envoi que le devis (e-mail à l'atelier, photos jointes), sans configuration 3D.
 */
export const TransformationFields = z.object({
  locale: z.enum(LOCALES),
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().trim().max(40).regex(/^[0-9+().\s-]*$/).default(''),
  /** Le bijou existant : nature, métal, pierres, état. */
  jewel: z.string().trim().min(5).max(2000),
  /** Ce que la personne aimerait en faire. */
  wish: z.string().trim().max(3000).default(''),
  consent: z.literal(true),
  /** Champ piège invisible : un humain le laisse vide. */
  website: z.string().max(0).default(''),
});
export type TransformationFields = z.infer<typeof TransformationFields>;

export function transformationFieldsFromForm(form: FormData): Record<string, unknown> {
  const get = (k: string) => {
    const v = form.get(k);
    return typeof v === 'string' ? v : undefined;
  };
  return {
    locale: get('locale'),
    name: get('name'),
    email: get('email')?.trim(),
    phone: get('phone'),
    jewel: get('jewel'),
    wish: get('wish'),
    consent: get('consent') === 'on' || get('consent') === 'true',
    website: get('website'),
  };
}

export function parseTransformation(raw: Record<string, unknown>): { ok: true; fields: TransformationFields } | { ok: false; error: QuoteError } {
  const parsed = TransformationFields.safeParse(raw);
  if (!parsed.success) return { ok: false, error: { code: 'invalid', fields: [...new Set(parsed.error.issues.map((i) => String(i.path[0])))] } };
  return { ok: true, fields: parsed.data };
}

const LANG: Record<Locale, string> = { fr: 'français', en: 'anglais', he: 'hébreu' };

/** E-mail à l'atelier, toujours en français. */
export function buildTransformationEmail(f: TransformationFields, photos: PhotoMeta[], siteUrl?: string): { subject: string; text: string } {
  const text = [
    'Nouvelle demande de transformation d’un bijou',
    '',
    '— Client —',
    `Nom : ${f.name}`,
    `E-mail : ${f.email}`,
    `Téléphone : ${f.phone || '—'}`,
    `Langue du client : ${LANG[f.locale]}`,
    '',
    '— Bijou existant —',
    f.jewel,
    '',
    '— Souhait —',
    f.wish || '—',
    '',
    `— Photos jointes : ${photos.length} —`,
    ...photos.map((p) => `${p.name} (${Math.round(p.size / 1024)} Ko)`),
    ...(siteUrl ? ['', `Page : ${siteUrl.replace(/\/$/, '')}/${f.locale}/transformation`] : []),
    '',
    'Répondre directement à cet e-mail pour écrire au client.',
  ].join('\n');
  return { subject: `Transformation d’un bijou — ${f.name}`.replace(/[\r\n]+/g, ' '), text };
}

/** Message WhatsApp pré-rempli (en français, langue de travail de l'atelier). Les photos se joignent à la main. */
export function buildTransformationWhatsApp(f: { name?: string; jewel?: string; wish?: string }): string {
  const one = (s: string | undefined, max: number) => (s ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  const name = one(f.name, 100);
  const jewel = (f.jewel ?? '').trim().slice(0, 800);
  const wish = (f.wish ?? '').trim().slice(0, 800);
  return [
    'Bonjour, je souhaite faire transformer un bijou de famille.',
    ...(jewel ? ['', `Le bijou : ${jewel}`] : []),
    ...(wish ? ['', `Mon souhait : ${wish}`] : []),
    ...(name ? ['', `Nom : ${name}`] : []),
    '',
    'Je joins les photos à la suite.',
  ].join('\n');
}
