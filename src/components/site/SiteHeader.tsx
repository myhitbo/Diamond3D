import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { homePath, localizedPath } from '@/lib/routes';

const LOCALE_LABELS: Record<Locale, string> = { fr: 'FR', en: 'EN', he: 'עב' };

/**
 * En-tête commun. `path` : chemin interne de la page sans la langue (ex. « /faq »), pour changer de langue sur place.
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
      {/* Le mot-symbole mène à l'accueil de la langue courante. */}
      <Link href={homePath(locale)} className="wordmark" aria-current={path === '/' ? 'page' : undefined}>
        JR Diamond
      </Link>
      <p className="tagline">{t.brandTagline}</p>
      <div className="site-nav">
        <nav aria-label={t.navLabel}>
          <Link href={`/${locale}/faq`} aria-current={path === '/faq' ? 'page' : undefined} aria-label={t.navFaq}>
            {/* Libellé long sur ordinateur, court sur mobile (sinon il passe sur deux lignes). */}
            <span className="nav-long">{t.navFaq}</span>
            <span className="nav-short" aria-hidden="true">
              {t.navFaqShort}
            </span>
          </Link>
        </nav>
        <nav className="lang" aria-label="Langue / Language">
          {locales.map((l) => (
            <Link key={l} href={hrefs?.[l] ?? localizedPath(l, path)} hrefLang={l} lang={l} aria-current={l === locale ? 'page' : undefined}>
              {LOCALE_LABELS[l]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
