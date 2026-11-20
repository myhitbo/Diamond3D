import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Assistant, Bodoni_Moda, Frank_Ruhl_Libre, Jost } from 'next/font/google';
import SiteFooter from '@/components/site/SiteFooter';
import { DIRECTION } from '@/i18n/dictionaries';
import { LOCALES } from '@/lib/configurator/schema';
import { siteMetadata } from '@/lib/metadata';
import { localeOrDefault } from '@/lib/routes';
import '../globals.css';

// Titres : Didone à fort contraste (axe de taille optique : déliés plus fins dans les grands titres).
const display = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], axes: ['opsz'], variable: '--font-bodoni', display: 'swap' });
const text = Jost({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-jost', display: 'swap' });
// Hébreu : les polices latines n'ont pas de glyphes hébreux.
const displayHe = Frank_Ruhl_Libre({ subsets: ['hebrew'], weight: ['400', '500'], variable: '--font-frank', display: 'swap' });
const textHe = Assistant({ subsets: ['hebrew'], weight: ['300', '400'], variable: '--font-assistant', display: 'swap' });

/**
 * Adresse de base des liens absolus, gabarit du titre, robots (interrupteur de lancement `SITE_INDEXABLE`, `src/config/site.ts`)
 * et aperçu de lien par défaut. Les pages qui ont un titre propre reconstruisent l'aperçu avec `pageMetadata`.
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return siteMetadata(localeOrDefault((await params).locale));
}

export const viewport: Viewport = { themeColor: '#0b0a08', width: 'device-width', initialScale: 1 };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Layout racine (le site n'a pas de `src/app/layout.tsx`). Une adresse hors langue (`/nimporte-quoi`, `/xx/faq`) passe aussi par
 * lui, le segment `[locale]` étant à la racine : elle reçoit un document en français, la langue par défaut (`localeOrDefault`),
 * et sa page appelle `notFound()`, d'où la 404 française (`not-found.tsx`) avec en-tête et pied de page. Toute page sous
 * `[locale]` doit donc vérifier la langue et appeler `notFound()` si elle est inconnue. Appeler `notFound()` ici ne servirait à
 * rien : l'erreur remonterait au-dessus du seul layout racine, jusqu'à la 404 anglaise par défaut de Next, hors du site. (La page
 * `global-not-found` de Next, option expérimentale, ne couvre que les adresses qu'aucune route ne reconnaît : avec `[locale]` puis
 * `[...rest]`, il n'y en a pas.)
 */
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = localeOrDefault((await params).locale);
  return (
    <html
      lang={locale}
      dir={DIRECTION[locale]}
      className={locale === 'he' ? `${display.variable} ${text.variable} ${displayHe.variable} ${textHe.variable}` : `${display.variable} ${text.variable}`}
    >
      <body>
        {children}
        <SiteFooter locale={locale} />
        {/* Web Vitals réels (LCP, INP, CLS) remontés à Vercel. Seulement sur Vercel (VERCEL=1 au build) :
            ailleurs, son script n'existe pas (404). */}
        {process.env.VERCEL && <SpeedInsights />}
      </body>
    </html>
  );
}
