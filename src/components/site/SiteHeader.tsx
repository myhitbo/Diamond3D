import Link from 'next/link';
import Monogram from './Monogram';
import { isGuideLocale } from '@/content/guides/types';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { accessibilityPath, configuratorPath, homePath, localizedPath } from '@/lib/routes';

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
  // Pages principales. Lien de la page affichée : `aria-current="page"` ; les guides n'existent qu'en français et en anglais.
  const links = [
    { href: configuratorPath(locale), label: t.navConfigurator, current: path.startsWith('/configurateur/') },
    { href: localizedPath(locale, '/transformation'), label: t.navTransformation, current: path === '/transformation' },
    ...(isGuideLocale(locale) ? [{ href: localizedPath(locale, '/guides'), label: t.navGuides, current: path === '/guides' }] : []),
    { href: localizedPath(locale, '/faq'), label: t.navFaq, current: path === '/faq' },
  ];
  const items = links.map((l) => (
    <Link key={l.href} href={l.href} aria-current={l.current ? 'page' : undefined}>
      {l.label}
    </Link>
  ));
  return (
    <header className="site-header">
      {/* Liens d'évitement : premiers éléments au clavier, visibles seulement quand ils ont le focus. Le second est l'un des deux
          chemins vers la déclaration d'accessibilité que demande le guide de la Commission (l'autre : le pied de page). */}
      <div className="skip-links">
        <a href={`#${MAIN_ID}`}>{t.skipToContent}</a>
        <Link href={accessibilityPath(locale)}>{t.navAccessibility}</Link>
      </div>
      <p className="topbar">{t.brandTagline}</p>
      <div className="header-row">
        {/* Ordinateur : menu en ligne. Tablette et téléphone : bouton « Menu » (élément details, sans JavaScript). Un seul des
            deux est affiché ; l'autre (display: none) sort aussi de l'arbre d'accessibilité. */}
        <nav className="site-nav" aria-label={t.navLabel}>
          {items}
        </nav>
        <details className="menu">
          <summary aria-label={t.navMenu}>
            <span className="menu-icon" aria-hidden="true" />
            <span className="menu-label" aria-hidden="true">
              {t.navMenu}
            </span>
          </summary>
          <nav className="menu-panel" aria-label={t.navLabel}>
            {items}
          </nav>
        </details>
        {/* Le mot-symbole mène à l'accueil de la langue courante. */}
        <Link href={homePath(locale)} className="wordmark" aria-current={path === '/' ? 'page' : undefined}>
          <Monogram />
          JR Diamond
        </Link>
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
