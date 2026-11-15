import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/configurator/schema';
import { isGuideLocale } from '@/content/guides/types';
import { configuratorPath } from '@/lib/routes';

/** Pied de page commun : liens vers les pages du site. Les guides existent en français et en anglais. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = DICTIONARIES[locale];
  return (
    <footer className="site-footer">
      <nav aria-label={t.footerLabel}>
        <Link href={configuratorPath(locale)}>{t.navConfigurator}</Link>
        <Link href={`/${locale}/transformation`}>{t.navTransformation}</Link>
        {isGuideLocale(locale) && <Link href={`/${locale}/guides`}>{t.navGuides}</Link>}
        <Link href={`/${locale}/faq`}>{t.navFaqShort}</Link>
      </nav>
      <p>{t.footerNote}</p>
    </footer>
  );
}
