import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Assistant, Cormorant_Garamond, Frank_Ruhl_Libre, Jost } from 'next/font/google';
import { DIRECTION } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import '../globals.css';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });
const text = Jost({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-jost', display: 'swap' });
// Hébreu : les polices latines n'ont pas de glyphes hébreux.
const displayHe = Frank_Ruhl_Libre({ subsets: ['hebrew'], weight: ['400', '500'], variable: '--font-frank', display: 'swap' });
const textHe = Assistant({ subsets: ['hebrew'], weight: ['300', '400'], variable: '--font-assistant', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'JR Diamond', template: '%s · JR Diamond' },
  // Prototype : ne pas indexer tant que le site n'est pas validé.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: '#f7f3ec', width: 'device-width', initialScale: 1 };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return (
    <html
      lang={locale}
      dir={DIRECTION[locale as Locale]}
      className={locale === 'he' ? `${display.variable} ${text.variable} ${displayHe.variable} ${textHe.variable}` : `${display.variable} ${text.variable}`}
    >
      <body>
        {children}
        {/* Web Vitals réels (LCP, INP, CLS) remontés à Vercel. Seulement sur Vercel (VERCEL=1 au build) :
            ailleurs, son script n'existe pas (404). */}
        {process.env.VERCEL && <SpeedInsights />}
      </body>
    </html>
  );
}
