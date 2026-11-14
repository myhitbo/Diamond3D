import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/configurator/schema';
import { configuratorPath } from '@/lib/routes';

/** Pied de page commun : liens vers les pages du site. Les guides n'existent qu'en français. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = DICTIONARIES[locale];
  return (
    <footer className="site-footer">
      <nav aria-label={t.footerLabel}>
        <Link href={configuratorPath(locale)}>{t.navConfigurator}</Link>
        <Link href={`/${locale}/transformation`}>{t.navTransformation}</Link>
        {locale === 'fr' && <Link href="/fr/guides">{t.navGuides}</Link>}
        <Link href={`/${locale}/faq`}>{t.navFaqShort}</Link>
      </nav>
      <p>{t.footerNote}</p>
    </footer>
  );
}
