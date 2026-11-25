import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VersionB from '@/components/versions/b/VersionB';
import { versionCopy } from '@/components/versions/copy';
import VersionSwitcher from '@/components/versions/VersionSwitcher';
import { HOME } from '@/content/home';
import { VERSIONS } from '@/content/versions';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { ring001 } from '@/models/ring-001/definition';

type Params = Promise<{ locale: string }>;

/**
 * Version B « Constellation » : mise en scène de nuit. Les dix-sept diamants du modèle (positions lues dans son fichier de
 * géométrie, vue de dessus) forment une constellation, qui devient la bague en 3D au défilement ; les étapes sont des étoiles.
 * Inspirée d'une expérience de marque automobile de luxe. Non indexée : version à comparer.
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : 'fr';
  return { title: VERSIONS.b.name[l], description: HOME[l].description, robots: { index: false, follow: false } };
}

export default async function Page({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const copy = versionCopy(locale, 'b');
  // Étoiles de la constellation : centre et taille de chaque pierre, vue de dessus (repère du fichier : X en largeur, Y le long du
  // doigt, en millimètres). La marquise est la plus grande ; « piece » sépare le solitaire (A) de l'alliance (B).
  const stars = Object.entries(ring001.geometry.pieces).flatMap(([piece, p]) =>
    p.parts.flatMap((part) => (part.stones ?? []).map((s) => ({ piece, x: s.positionMm[0], y: s.positionMm[1], size: Math.max(s.lengthMm, s.widthMm) }))),
  );
  return (
    <>
      <VersionB copy={copy} rtl={locale === 'he'} stars={stars} />
      <VersionSwitcher locale={locale} current="b" />
    </>
  );
}
