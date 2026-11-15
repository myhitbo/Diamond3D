// Import relatif : ce module est aussi chargé par `next.config.ts`, hors alias `@/`.
import { LOCALES, type Locale } from './configurator/schema';

/**
 * Adresses du site.
 *
 * Les pages vivent sous des dossiers en français (`/[locale]/configurateur/…`). En anglais et en hébreu,
 * l'adresse publique du configurateur est traduite (`/en/configurator/…`, `/he/configurator/…`) :
 * `next.config.ts` réécrit l'adresse traduite vers le dossier français et redirige l'ancienne adresse.
 * L'hébreu garde un segment en lettres latines : un segment en hébreu serait encodé en %XX dans les liens partagés.
 */
export const CONFIGURATOR_SEGMENT: Record<Locale, string> = { fr: 'configurateur', en: 'configurator', he: 'configurator' };

/** Segment interne (nom du dossier) du configurateur. */
export const INTERNAL_CONFIGURATOR_SEGMENT = 'configurateur';

/** Modèle affiché par défaut tant que le catalogue n'a qu'une pièce. */
export const DEFAULT_MODEL_ID = 'ring-001';

export const configuratorPath = (locale: Locale, modelId: string = DEFAULT_MODEL_ID) => `/${locale}/${CONFIGURATOR_SEGMENT[locale]}/${modelId}`;

/**
 * Adresse publique d'un chemin interne (sans la langue, ex. « /configurateur/ring-001 » ou « /faq »).
 * L'accueil (« / » ou « ») donne `/fr`, sans barre finale : le site n'en met nulle part (`trailingSlash` par défaut).
 */
export function localizedPath(locale: Locale, internalPath: string): string {
  if (internalPath === '/' || internalPath === '') return `/${locale}`;
  const prefix = `/${INTERNAL_CONFIGURATOR_SEGMENT}/`;
  const path = internalPath.startsWith(prefix) ? `/${CONFIGURATOR_SEGMENT[locale]}/${internalPath.slice(prefix.length)}` : internalPath;
  return `/${locale}${path}`;
}

/** Page d'accueil d'une langue (`/fr`, `/en`, `/he`). */
export const homePath = (locale: Locale) => localizedPath(locale, '/');

/** `alternates.languages` des métadonnées, pour un chemin interne disponible dans les langues données. */
export const languageAlternates = (internalPath: string, locales: readonly Locale[] = LOCALES) =>
  Object.fromEntries(locales.map((l) => [l, localizedPath(l, internalPath)]));

/** Réécritures et redirections à déclarer dans `next.config.ts`. */
export function translatedRouteRules() {
  const translated = LOCALES.filter((l) => CONFIGURATOR_SEGMENT[l] !== INTERNAL_CONFIGURATOR_SEGMENT);
  return {
    rewrites: translated.map((l) => ({
      source: `/${l}/${CONFIGURATOR_SEGMENT[l]}/:modelId`,
      destination: `/${l}/${INTERNAL_CONFIGURATOR_SEGMENT}/:modelId`,
    })),
    redirects: translated.map((l) => ({
      source: `/${l}/${INTERNAL_CONFIGURATOR_SEGMENT}/:modelId`,
      destination: `/${l}/${CONFIGURATOR_SEGMENT[l]}/:modelId`,
      // Temporaire tant que le site est un prototype non indexé ; à passer en permanent au lancement.
      permanent: false,
    })),
  };
}
