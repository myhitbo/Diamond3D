import { applyChange, defaultState } from './logic';
import type { ConfigState, ModelDefinition } from './schema';

/**
 * Configuration dans l'adresse de la page : un lien restaure la bague telle qu'elle a été composée,
 * sans compte. Paramètres courts : c (composition), m (métal), o (origine), s (pierres, « emplacement:variante »).
 * Toute valeur inconnue est ignorée une à une : un lien abîmé ou ancien retombe sur le choix par défaut.
 */
export const CONFIG_PARAMS = ['c', 'm', 'o', 's'] as const;

export function stateToParams(state: ConfigState): URLSearchParams {
  const p = new URLSearchParams();
  p.set('c', state.composition);
  p.set('m', state.metal);
  p.set('o', state.diamondOrigin);
  const stones = Object.entries(state.stones)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slot, variant]) => `${slot}:${variant}`)
    .join(',');
  if (stones) p.set('s', stones);
  return p;
}

export function stateFromParams(model: ModelDefinition, params: URLSearchParams): ConfigState {
  let state = defaultState(model);
  const c = params.get('c');
  const m = params.get('m');
  const o = params.get('o');
  if (c) state = applyChange(model, state, { composition: c });
  if (m) state = applyChange(model, state, { metal: m as ConfigState['metal'] });
  if (o) state = applyChange(model, state, { diamondOrigin: o as ConfigState['diamondOrigin'] });
  for (const pair of (params.get('s') ?? '').split(',')) {
    const [slot, variant] = pair.split(':');
    // Emplacement inconnu du modèle : ignoré (applyChange ne contrôle que les emplacements existants).
    if (slot && variant && model.stoneSlots.some((x) => x.id === slot)) state = applyChange(model, state, { stones: { [slot]: variant } });
  }
  return state;
}

/** Vrai si l'adresse porte au moins un paramètre de configuration. */
export const hasConfigParams = (params: URLSearchParams) => CONFIG_PARAMS.some((k) => params.has(k));

/** Remplace les paramètres de configuration d'une adresse, en gardant les autres (debug, quality…). */
export function withConfig(href: string, state: ConfigState): string {
  const url = new URL(href);
  for (const k of CONFIG_PARAMS) url.searchParams.delete(k);
  for (const [k, v] of stateToParams(state)) url.searchParams.set(k, v);
  return url.toString();
}

/** Adresse à partager : la page et la configuration seulement, sans paramètres techniques ni ancre. */
export function shareUrl(origin: string, pathname: string, state: ConfigState): string {
  return `${origin.replace(/\/$/, '')}${pathname}?${stateToParams(state).toString()}`;
}

/**
 * Référence courte d'une configuration (ex. « JR-4K7Q2M »), la même pour la même bague :
 * elle relie un message WhatsApp, un e-mail de devis et un lien partagé. Ce n'est pas un numéro de commande.
 */
export function configReference(modelId: string, state: ConfigState): string {
  const text = `${modelId}?${stateToParams(state).toString()}`;
  // FNV-1a 32 bits : stable, sans dépendance, suffisant pour distinguer quelques centaines de configurations.
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return `JR-${h.toString(36).toUpperCase().padStart(6, '0').slice(-6)}`;
}
