import { notFound } from 'next/navigation';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import Demo from './Demo';

/** Page d'essai du moteur « bague pilotée par le défilement » (non indexée, hors menu). */
export const metadata = { title: 'Essai du moteur 3D', robots: { index: false, follow: false } };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return <Demo />;
}
