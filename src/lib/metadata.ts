import type { Metadata } from 'next';
import { SHARE_IMAGE, SITE_INDEXABLE, SITE_NAME, SITE_URL } from '@/config/site';
import { NOT_FOUND } from '@/content/not-found';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { localeOrDefault } from '@/lib/routes';

/**
 * Métadonnées des pages : référencement et aperçus de liens partagés (WhatsApp surtout, Facebook, iMessage, X).
 *
 * Next fusionne les métadonnées du layout et de la page champ par champ, sans descendre dans les objets : une page qui définit
 * `openGraph` remplace tout l'`openGraph` du layout. D'où `pageMetadata`, qui reconstruit l'ensemble pour chaque page.
 * WhatsApp (documentation Meta « Link Previews ») lit `og:title` (titre sans la marque, la marque va dans `og:site_name`),
 * `og:description`, `og:url` et `og:image` dans le `<head>` du HTML envoyé par le serveur, au plus tard dans ses 300 premiers Ko.
 * Rien ne s'affiche tant que la protection Vercel est active : les robots d'aperçu reçoivent la page de connexion.
 */

/** Langue au format Open Graph (langue_TERRITOIRE). Anglais britannique : l'orthographe du site. */
export const OG_LOCALE: Record<Locale, string> = { fr: 'fr_FR', en: 'en_GB', he: 'he_IL' };

const shareImage = (locale: Locale) => ({ ...SHARE_IMAGE, alt: DICTIONARIES[locale].shareImageAlt });

/** Métadonnées du layout : base des adresses absolues, robots selon l'interrupteur de lancement, aperçu par défaut. */
export function siteMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
    robots: SITE_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { siteName: SITE_NAME, locale: OG_LOCALE[locale], type: 'website', images: [shareImage(locale)] },
    twitter: { card: 'summary_large_image', images: [shareImage(locale)] },
  };
}

export type PageShare = {
  /** Titre propre de la page, sans le nom du site (le gabarit du layout l'ajoute à l'onglet, pas à l'aperçu). */
  title: string;
  /** Titre complet, sans gabarit (accueil, qui porte déjà le nom de la marque). */
  absoluteTitle?: boolean;
  description: string;
  /** Adresse publique de la page dans cette langue : lien canonique et `og:url`. */
  path: string;
  /** Adresse de la même page dans chaque langue où elle existe : `hreflang` et `og:locale:alternate`. */
  languages: Partial<Record<Locale, string>>;
  /** Article daté (guides) : `og:type` article et date de dernière vérification. */
  modifiedTime?: string;
};

/** Métadonnées complètes d'une page qui a son propre titre. */
export function pageMetadata(locale: Locale, p: PageShare): Metadata {
  const image = shareImage(locale);
  const og = {
    siteName: SITE_NAME,
    title: p.title,
    description: p.description,
    url: p.path,
    locale: OG_LOCALE[locale],
    alternateLocale: LOCALES.filter((l) => l !== locale && p.languages[l]).map((l) => OG_LOCALE[l]),
    images: [image],
  };
  return {
    title: p.absoluteTitle ? { absolute: p.title } : p.title,
    description: p.description,
    alternates: { canonical: p.path, languages: p.languages },
    openGraph: p.modifiedTime ? { ...og, type: 'article', modifiedTime: p.modifiedTime } : { ...og, type: 'website' },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description, images: [image] },
  };
}

/**
 * Titre d'une page 404, dans la langue de l'adresse (français hors langue). Deux sources, qui doivent dire la même chose :
 * `not-found.tsx` donne le titre du HTML envoyé par le serveur ; mais le navigateur reprend ensuite les métadonnées de la page
 * qui a appelé `notFound()` (données de rendu de la page, calculées avant l'erreur). Chaque page renvoie donc celles-ci dans
 * son `generateMetadata` quand elle va répondre 404 (langue inconnue, modèle ou guide absent).
 * Titre complet : le gabarit du layout ne s'applique pas à la page d'accueil, qui est dans le même segment que lui.
 */
export const notFoundMetadata = (segment: string): Metadata => ({ title: { absolute: `${NOT_FOUND[localeOrDefault(segment)].title} · ${SITE_NAME}` } });
