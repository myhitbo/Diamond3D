import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { accessibilityPath, homePath, localizedPath } from '@/lib/routes';

const LOCALE_LABELS: Record<Locale, string> = { fr: 'FR', en: 'EN', he: 'עב' };

/** Identifiant du contenu principal (`<main id={MAIN_ID}>` sur chaque page) : cible du lien « Aller au contenu ». */
export const MAIN_ID = 'contenu';

/**
 * En-tête commun. `path` : chemin interne de la page sans la langue (ex. « /faq »), pour changer de langue sur place ;
 * vide pour une page sans adresse propre (404), avec `hrefs` pour toutes les langues.
 * `locales` : langues dans lesquelles la page existe (par défaut toutes).
 * `hrefs` : adresse de la page dans une langue, quand elle ne se déduit pas de `path` (guide dont l'adresse est traduite).
 */
export default function SiteHeader({
  locale,
  path,
  locales = LOCALES,
  hrefs,
}: {
  locale: Locale;
  path: string;
  locales?: readonly Locale[];
  hrefs?: Partial<Record<Locale, string>>;
}) {
  const t = DICTIONARIES[locale];
  return (
    <header className="site-header">
      {/* Liens d'évitement : premiers éléments au clavier, visibles seulement quand ils ont le focus. Le second est l'un des deux
          chemins vers la déclaration d'accessibilité que demande le guide de la Commission (l'autre : le pied de page). */}
      <div className="skip-links">
        <a href={`#${MAIN_ID}`}>{t.skipToContent}</a>
        <Link href={accessibilityPath(locale)}>{t.navAccessibility}</Link>
      </div>
      {/* Le mot-symbole mène à l'accueil de la langue courante. */}
      <Link href={homePath(locale)} className="wordmark" aria-current={path === '/' ? 'page' : undefined}>
        JR Diamond
      </Link>
      <p className="tagline">{t.brandTagline}</p>
      <div className="site-nav">
        <nav aria-label={t.navLabel}>
          {/* Libellé long sur ordinateur, court sur mobile (sinon il passe sur deux lignes). Le libellé masqué (display: none) sort
              aussi de l'arbre d'accessibilité : le nom du lien est toujours le texte affiché (WCAG 2.5.3, « FAQ » sur mobile). */}
          <Link href={localizedPath(locale, '/faq')} aria-current={path === '/faq' ? 'page' : undefined}>
            <span className="nav-long">{t.navFaq}</span>
            <span className="nav-short">{t.navFaqShort}</span>
          </Link>
        </nav>
        {/* Langue courante : `aria-current="page"` quand son lien mène à la page affichée ; sur une page sans adresse propre (404,
            `path` vide), il mène à l'accueil : `aria-current="true"` signale la langue active sans annoncer « page actuelle ». */}
        <nav className="lang" aria-label="Langue / Language">
          {locales.map((l) => (
            <Link
              key={l}
              href={hrefs?.[l] ?? localizedPath(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? (path === '' ? 'true' : 'page') : undefined}
            >
              {LOCALE_LABELS[l]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
