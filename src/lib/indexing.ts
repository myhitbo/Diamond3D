import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';
import { GUIDE_LOCALES, GUIDES, guideAlternates, guidePath } from '@/content/guides';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { languageAlternates } from '@/lib/routes';
import { MODELS } from '@/models';

/**
 * `robots.txt` et plan du site (`src/app/robots.ts`, `src/app/sitemap.ts`), pilotés par `SITE_INDEXABLE` (`src/config/site.ts`).
 * Fonctions pures, l'interrupteur en paramètre : les tests couvrent les deux positions.
 */

/**
 * Pages publiques du plan du site : chemin interne (sans la langue, voir `localizedPath`) et langues où la page existe.
 * Les guides, dont l'adresse est traduite, sont ajoutés à part (`guideAlternates`).
 * Hors plan : `/diagnostic` (page de mesure, jamais indexée), les pages 404 (dont `/he/guides`), l'API.
 * Une nouvelle page publique s'ajoute ici : un test vérifie que chaque `page.tsx` est listée ou exclue explicitement.
 */
export const SITEMAP_PAGES: { path: string; locales: readonly Locale[] }[] = [
  { path: '/', locales: LOCALES },
  ...Object.keys(MODELS).map((id) => ({ path: `/configurateur/${id}`, locales: LOCALES })),
  { path: '/transformation', locales: LOCALES },
  { path: '/faq', locales: LOCALES },
  { path: '/guides', locales: GUIDE_LOCALES },
];

/** Chaque page dans chaque langue, avec l'adresse des autres langues (`hreflang`, la page elle-même comprise). */
export function sitemapEntries(base: string = SITE_URL): MetadataRoute.Sitemap {
  const absolute = (languages: Partial<Record<Locale, string>>) =>
    Object.fromEntries(Object.entries(languages).map(([l, path]) => [l, `${base}${path}`])) as Partial<Record<Locale, string>>;
  const pages = SITEMAP_PAGES.flatMap(({ path, locales }) => {
    const languages = absolute(languageAlternates(path, locales));
    return locales.map((l) => ({ url: languages[l]!, alternates: { languages } }));
  });
  const guides = GUIDE_LOCALES.flatMap((l) =>
    GUIDES[l].map((g) => ({
      url: `${base}${guidePath(l, g.slug)}`,
      // Date de dernière vérification des faits du guide.
      lastModified: g.verified,
      alternates: { languages: absolute(guideAlternates(g.id)) },
    })),
  );
  return [...pages, ...guides];
}

/**
 * Plan du site : vide tant que le site n'est pas indexable. Lister des pages marquées `noindex` enverrait deux signaux
 * contraires (« explorez » et « n'indexez pas ») ; le contenu, testé, apparaît le jour où l'interrupteur bascule.
 */
export const sitemapFor = (indexable: boolean, base: string = SITE_URL): MetadataRoute.Sitemap => (indexable ? sitemapEntries(base) : []);

/**
 * `robots.txt`. Avant le lancement, l'exploration reste permise et c'est la balise `noindex` des pages qui tient le site hors
 * des résultats : un `Disallow: /` empêcherait les robots de lire cette balise, et une adresse liée ailleurs pourrait alors
 * apparaître dans les résultats (sans texte), ce que Google documente (« Block Search indexing with noindex »).
 * `/api/` (formulaires, en POST) n'a rien à explorer, avant comme après. `/diagnostic` n'est pas interdite : sa balise `noindex`,
 * permanente, doit rester lisible. Le plan du site n'est annoncé qu'une fois le site indexable.
 */
export function robotsFor(indexable: boolean, base: string = SITE_URL): MetadataRoute.Robots {
  const rules = { userAgent: '*', allow: '/', disallow: '/api/' };
  return indexable ? { rules, sitemap: `${base}/sitemap.xml` } : { rules };
}
