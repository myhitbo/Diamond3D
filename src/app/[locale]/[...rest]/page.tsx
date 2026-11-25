import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { notFoundMetadata } from '@/lib/metadata';

/**
 * Toute adresse inconnue sous une langue (`/he/nimporte-quoi`, `/en/configurator`) : 404 dans la langue de l'adresse
 * (`../not-found.tsx`), avec en-tête et pied de page. Sans ce segment attrape-tout, l'adresse ne correspondrait à aucune route
 * et Next servirait sa 404 anglaise par défaut, hors du site. Les pages existantes passent avant lui, et les adresses traduites
 * (`/en/configurator/…`) sont réécrites avant que les routes dynamiques ne soient comparées (`next.config.ts`).
 */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return notFoundMetadata((await params).locale);
}

export default function UnknownPage(): never {
  notFound();
}
