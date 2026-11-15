// Limitation simple, en mémoire, par adresse IP : suffisante contre les envois répétés
// d'un même navigateur, pas contre une attaque distribuée (instance unique, remise à zéro au redémarrage).
// Exportées pour le test qui vérifie que la politique de confidentialité les décrit (`src/content/legal/privacy.ts`).
export const WINDOW_MS = 10 * 60 * 1000;
export const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/** `true` si cette adresse a dépassé la limite. Le compteur est commun à toutes les routes de demande. */
export function rateLimited(ip: string, now: number = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

export function clientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'local';
}
