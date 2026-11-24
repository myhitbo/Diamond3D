import Link from 'next/link';
import { DICTIONARIES } from '@/i18n/dictionaries';
import type { Locale } from '@/lib/configurator/schema';
import { isGuideLocale } from '@/content/guides/types';
import { configuratorPath } from '@/lib/routes';
import { normalizeWhatsAppNumber } from '@/lib/quote/whatsapp';

// Coordonnées de l'atelier (variables publiques, fixées au build). Chacune n'apparaît que si elle est renseignée.
const WHATSAPP = normalizeWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
const PHONE = (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '').trim();
const EMAIL = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '').trim();

/** Pied de page commun : liens vers les pages du site et coordonnées de l'atelier. Les guides existent en français et en anglais. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = DICTIONARIES[locale];
  const hasContact = WHATSAPP || PHONE || EMAIL;
  return (
    <footer className="site-footer">
      <nav aria-label={t.footerLabel}>
        <Link href={configuratorPath(locale)}>{t.navConfigurator}</Link>
        <Link href={`/${locale}/transformation`}>{t.navTransformation}</Link>
        {isGuideLocale(locale) && <Link href={`/${locale}/guides`}>{t.navGuides}</Link>}
        <Link href={`/${locale}/faq`}>{t.navFaqShort}</Link>
      </nav>
      <p>{t.footerNote}</p>
      {hasContact && (
        <address className="site-footer-contact" aria-label={t.footerContact} data-testid="footer-contact">
          {WHATSAPP && (
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener">
              {t.footerWhatsApp}
            </a>
          )}
          {PHONE && (
            <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} dir="ltr">
              {t.footerPhone}
              {t.colon}
              {PHONE}
            </a>
          )}
          {EMAIL && (
            <a href={`mailto:${EMAIL}`} dir="ltr">
              {t.footerEmail}
              {t.colon}
              {EMAIL}
            </a>
          )}
        </address>
      )}
    </footer>
  );
}
