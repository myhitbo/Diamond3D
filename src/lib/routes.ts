// Import relatif : ce module est aussi chargé par `next.config.ts`, hors alias `@/`.
import { LOCALES, type Locale } from './configurator/schema';

/**
 * Adresses du site.
 *
 * Les pages vivent sous des dossiers en français (`/[locale]/configurateur/…`, `/[locale]/accessibilite`). En anglais et en hébreu,
 * l'adresse publique de certaines pages est traduite (`/en/configurator/…`, `/he/privacy`) : `next.config.ts` réécrit l'adresse
 * traduite vers le dossier français et redirige l'adresse française sous `/en` et `/he` vers l'adresse traduite (`translatedRouteRules`).
 * L'hébreu garde des segments en lettres latines : un segment en hébreu serait encodé en %XX dans les liens partagés.
 */

/**
 * Pages dont l'adresse est traduite : nom du dossier (segment interne, en français) → segment public par langue.
 * `params` : suite de l'adresse après le segment (`/:modelId` pour le configurateur ; vide pour une page sans paramètre).
 * Une page s'ajoute ici, et nulle part ailleurs : `localizedPath`, le sélecteur de langue, le plan du site et `next.config.ts` suivent.
 */
export const TRANSLATED_SEGMENTS = {
  configurateur: { segments: { fr: 'configurateur', en: 'configurator', he: 'configurator' }, params: '/:modelId' },
  accessibilite: { segments: { fr: 'accessibilite', en: 'accessibility', he: 'accessibility' }, params: '' },
  confidentialite: { segments: { fr: 'confidentialite', en: 'privacy', he: 'privacy' }, params: '' },
} as const satisfies Record<string, { segments: Record<Locale, string>; params: string }>;

type InternalSegment = keyof typeof TRANSLATED_SEGMENTS;
const isTranslated = (segment: string): segment is InternalSegment => Object.hasOwn(TRANSLATED_SEGMENTS, segment);

export const CONFIGURATOR_SEGMENT: Record<Locale, string> = TRANSLATED_SEGMENTS.configurateur.segments;

/**
 * Langue d'une adresse dont le premier segment n'est pas une langue (`/nimporte-quoi`) : le français, langue par défaut.
 * Sert au document et à la page 404 de ces adresses (voir `src/app/[locale]/layout.tsx`).
 */
export const localeOrDefault = (segment: string): Locale => ((LOCALES as readonly string[]).includes(segment) ? (segment as Locale) : 'fr');

/** Modèle affiché par défaut tant que le catalogue n'a qu'une pièce. */
export const DEFAULT_MODEL_ID = 'ring-001';

export const configuratorPath = (locale: Locale, modelId: string = DEFAULT_MODEL_ID) => `/${locale}/${CONFIGURATOR_SEGMENT[locale]}/${modelId}`;

/**
 * Adresse publique d'un chemin interne (sans la langue, ex. « /configurateur/ring-001 », « /accessibilite » ou « /faq ») :
 * le premier segment est traduit s'il figure dans `TRANSLATED_SEGMENTS`.
 * L'accueil (« / » ou « ») donne `/fr`, sans barre finale : le site n'en met nulle part (`trailingSlash` par défaut).
 */
export function localizedPath(locale: Locale, internalPath: string): string {
  if (internalPath === '/' || internalPath === '') return `/${locale}`;
  const [, first = '', ...rest] = internalPath.split('/');
  const path = isTranslated(first) ? ['', TRANSLATED_SEGMENTS[first].segments[locale], ...rest].join('/') : internalPath;
  return `/${locale}${path}`;
}

/** Déclaration d'accessibilité et politique de confidentialité (pied de page, lien d'évitement, formulaires). */
export const accessibilityPath = (locale: Locale) => localizedPath(locale, '/accessibilite');
export const privacyPath = (locale: Locale) => localizedPath(locale, '/confidentialite');

/** Page d'accueil d'une langue (`/fr`, `/en`, `/he`). */
export const homePath = (locale: Locale) => localizedPath(locale, '/');

/** `alternates.languages` des métadonnées, pour un chemin interne disponible dans les langues données. */
export const languageAlternates = (internalPath: string, locales: readonly Locale[] = LOCALES) =>
  Object.fromEntries(locales.map((l) => [l, localizedPath(l, internalPath)]));

/**
 * Réécritures et redirections à déclarer dans `next.config.ts`, pour chaque page de `TRANSLATED_SEGMENTS` et chaque langue
 * dont le segment diffère du dossier : l'adresse traduite est servie par le dossier français (réécriture), l'adresse française
 * sous cette langue redirige vers l'adresse traduite (`/en/accessibilite` → `/en/accessibility`).
 * `permanent` : réglé dans `src/config/site.ts` (`TRANSLATED_REDIRECTS_PERMANENT`, qui suit l'interrupteur de lancement) ;
 * temporaire par défaut.
 */
export function translatedRouteRules(permanent = false) {
  const pairs = (Object.keys(TRANSLATED_SEGMENTS) as InternalSegment[]).flatMap((internal) => {
    const { segments, params } = TRANSLATED_SEGMENTS[internal];
    return LOCALES.filter((l) => segments[l] !== internal).map((l) => ({ internal: `/${l}/${internal}${params}`, translated: `/${l}/${segments[l]}${params}` }));
  });
  return {
    rewrites: pairs.map((p) => ({ source: p.translated, destination: p.internal })),
    redirects: pairs.map((p) => ({ source: p.internal, destination: p.translated, permanent })),
  };
}
