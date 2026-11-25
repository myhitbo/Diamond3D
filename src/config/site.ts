/**
 * Réglages du site entier, dont l'interrupteur de lancement.
 *
 * Importé aussi par `next.config.ts` (hors alias `@/`) : ce module n'importe rien du projet.
 *
 * Le jour du lancement, un seul réglage : `SITE_INDEXABLE = true`. Il ouvre, en un seul build :
 * - la balise robots des pages (`index, follow` au lieu de `noindex, nofollow`, dans `src/app/[locale]/layout.tsx`) ;
 * - le plan du site (`/sitemap.xml`, vide jusque-là) et son annonce dans `/robots.txt` (`src/lib/indexing.ts`) ;
 * - les redirections permanentes (308) des anciennes adresses du configurateur (`TRANSLATED_REDIRECTS_PERMANENT`).
 * Les tests suivent l'interrupteur, sauf un garde-fou qui empêche de l'ouvrir par mégarde : le retirer dans le même commit
 * (« garde-fou avant le lancement », `tests/unit/seo.test.ts`).
 * Puis lever la protection Vercel (connexion obligatoire) : tant qu'elle est active, robots et aperçus de liens
 * (WhatsApp, Facebook, iMessage) reçoivent une page de connexion et ne voient rien du site, et Vercel dépose son propre cookie
 * de connexion (`_vercel_jwt`), alors que la politique de confidentialité annonce un site sans cookie.
 */

/** Prototype : le site ne doit pas être indexé tant que l'atelier ne l'a pas validé. */
export const SITE_INDEXABLE = false;

/**
 * Redirections des anciennes adresses françaises du configurateur sous `/en` et `/he` (`/en/configurateur/…` → `/en/configurator/…`).
 * Temporaires (307) avant le lancement : un navigateur garde une redirection permanente en mémoire, difficile à défaire si les
 * adresses changent encore. Permanentes (308) au lancement, pour que les moteurs transfèrent l'adresse. Suit l'interrupteur ;
 * remplacer par une valeur fixe pour les découpler.
 */
export const TRANSLATED_REDIRECTS_PERMANENT: boolean = SITE_INDEXABLE;

export const SITE_NAME = 'JR Diamond';

/** Adresse publique par défaut : l'aperçu Vercel relié à `main`. */
export const DEFAULT_SITE_URL = 'https://jr-diamond.vercel.app';

/**
 * Origine publique du site (sans barre finale), base des adresses absolues : aperçus de liens (`og:url`, `og:image`),
 * plan du site, `robots.txt`. Surchargeable par `NEXT_PUBLIC_SITE_URL` (domaine définitif), lue au build.
 * Une valeur invalide fait échouer le build plutôt que de publier des liens faux.
 */
export function parseSiteUrl(raw: string | undefined): string {
  const value = raw?.trim() || DEFAULT_SITE_URL;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL invalide : « ${value} » (attendu : https://domaine)`);
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error(`NEXT_PUBLIC_SITE_URL invalide : « ${value} » (attendu : https://domaine)`);
  return url.origin;
}

export const SITE_URL = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/**
 * Image des aperçus de liens (WhatsApp, Facebook, iMessage, X) : mot-symbole et vraie capture du rendu 3D de ring-001,
 * sans texte de langue (la même image sert aux trois langues). JPEG léger : WhatsApp demande moins de 600 Ko
 * (documentation Meta « Link Previews »), au moins 300 px de large et un rapport largeur / hauteur de 4:1 au plus.
 * Fabriquée par `scripts/og/share-image.mjs`. Si elle change, changer aussi son nom : WhatsApp et Facebook gardent en cache
 * l'image d'une adresse donnée.
 */
export const SHARE_IMAGE = { url: '/images/apercu-partage.jpg', width: 1200, height: 630, type: 'image/jpeg' } as const;
