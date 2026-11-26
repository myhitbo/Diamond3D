import type { ConfigState, ModelDefinition } from '@/lib/configurator/schema';
import { configurationLines } from './request';

/**
 * Envoi d'une demande de devis par WhatsApp : lien « click to chat » (https://wa.me/<numéro>?text=…).
 * Le lien ouvre la conversation avec l'atelier, message pré-rempli ; rien n'est envoyé tant que la
 * personne n'appuie pas sur Envoyer, et les photos se joignent à la main dans WhatsApp.
 * Le message est rédigé en français, langue de travail de l'atelier.
 */

/** Numéro au format international sans « + », espaces ni tirets ; `null` s'il est absent ou invalide. */
export function normalizeWhatsAppNumber(raw: string | undefined | null): string | null {
  const digits = (raw ?? '').replace(/[^\d]/g, '').replace(/^00/, '');
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
}

export type WhatsAppFields = { name?: string; ringSize?: string; wantedDate?: string; budget?: string; surprise?: boolean; message?: string };

export function buildWhatsAppMessage(model: ModelDefinition, state: ConfigState, f: WhatsAppFields, pageUrl?: string): string {
  const clean = (s: string | undefined, max: number) => (s ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  const name = clean(f.name, 100);
  const ringSize = clean(f.ringSize, 40);
  const wantedDate = clean(f.wantedDate, 80);
  const budget = clean(f.budget, 60);
  const message = (f.message ?? '').trim().slice(0, 1000);
  return [
    'Bonjour, je souhaite un devis pour ce bijou JR Diamond :',
    ...configurationLines(model, state),
    ...(ringSize ? [`Taille de doigt : ${ringSize}`] : []),
    ...(wantedDate ? [`Pour quelle date : ${wantedDate}`] : []),
    ...(budget ? [`Budget indicatif : ${budget}`] : []),
    ...(f.surprise ? ['C’est une surprise : merci de me répondre uniquement ici.'] : []),
    ...(name ? [`Nom : ${name}`] : []),
    ...(message ? ['', message] : []),
    ...(pageUrl ? ['', pageUrl] : []),
  ].join('\n');
}

export function buildWhatsAppLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
