import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';

/** En-tête commun. `path` : chemin de la page sans la langue (ex. « /faq »), pour changer de langue sur place. */
export default function SiteHeader({ locale, path }: { locale: Locale; path: string }) {
  const t = DICTIONARIES[locale];
  return (
    <header className="site-header">
      <Link href={`/${locale}/configurateur/ring-001`} className="wordmark">
        JR Diamond
      </Link>
      <p className="tagline">{t.brandTagline}</p>
      <div className="site-nav">
        <nav aria-label={t.navLabel}>
          <Link href={`/${locale}/faq`} aria-current={path === '/faq' ? 'page' : undefined}>
            {t.navFaq}
          </Link>
        </nav>
        <nav className="lang" aria-label="Langue / Language">
          {LOCALES.map((l) => (
            <Link key={l} href={`/${l}${path}`} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
              {l}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
