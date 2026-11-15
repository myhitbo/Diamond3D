import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/configurator/schema';
import { isGuideLocale } from '@/content/guides/types';
import { accessibilityPath, configuratorPath, privacyPath } from '@/lib/routes';

/**
 * Pied de page commun : liens vers les pages du site. Les guides existent en français et en anglais.
 * Déclaration d'accessibilité et politique de confidentialité sur toutes les pages, avec le même libellé partout
 * (guide de la Commission : libellé constant, au moins deux chemins ; l'autre est le lien d'évitement de l'en-tête).
 */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = DICTIONARIES[locale];
  return (
    <footer className="site-footer">
      <nav aria-label={t.footerLabel}>
        <Link href={configuratorPath(locale)}>{t.navConfigurator}</Link>
        <Link href={`/${locale}/transformation`}>{t.navTransformation}</Link>
        {isGuideLocale(locale) && <Link href={`/${locale}/guides`}>{t.navGuides}</Link>}
        <Link href={`/${locale}/faq`}>{t.navFaqShort}</Link>
        <Link href={accessibilityPath(locale)}>{t.navAccessibility}</Link>
        <Link href={privacyPath(locale)}>{t.navPrivacy}</Link>
      </nav>
      <p>{t.footerNote}</p>
    </footer>
  );
}
