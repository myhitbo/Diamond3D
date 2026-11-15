import type { Metadata } from 'next';
import Link from 'next/link';
import { locale as rootLocale } from 'next/root-params';
import SiteHeader, { MAIN_ID } from '@/components/site/SiteHeader';
import { NOT_FOUND } from '@/content/not-found';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { notFoundMetadata } from '@/lib/metadata';
import { configuratorPath, homePath, localeOrDefault, localizedPath } from '@/lib/routes';
import prose from './prose.module.css';

/**
 * Page 404, dans le layout de la langue (sens d'écriture, polices, pied de page) : page absente dans cette langue (`/he/guides`),
 * modèle ou guide inconnu, adresse inconnue sous `/fr`, `/en` ou `/he` (`[...rest]`), et adresse hors langue (`/nimporte-quoi`,
 * en français : voir le layout). Statut HTTP 404 : `notFound()` est appelé avant le premier octet (pas de `loading.tsx`).
 * `not-found.tsx` ne reçoit pas de props : la langue vient de `next/root-params` (segment `[locale]` du layout racine).
 */
/** Titre de l'onglet (voir `notFoundMetadata`). Next ajoute de lui-même `noindex` à toute réponse 404. */
export async function generateMetadata(): Promise<Metadata> {
  return notFoundMetadata(await rootLocale());
}

/** Sélecteur de langue : l'accueil de chaque langue, la page demandée pouvant ne pas exister ailleurs (ex. `/he/guides`). */
const HOMES = Object.fromEntries(LOCALES.map((l) => [l, homePath(l)])) as Record<Locale, string>;

export default async function NotFound() {
  const locale = localeOrDefault(await rootLocale());
  const c = NOT_FOUND[locale];
  const links = [
    { href: homePath(locale), label: c.links.home },
    { href: configuratorPath(locale), label: c.links.configurator },
    { href: localizedPath(locale, '/faq'), label: c.links.faq },
  ];
  return (
    <>
      <SiteHeader locale={locale} path="" hrefs={HOMES} />
      <main id={MAIN_ID} className={prose.page}>
        <p className={prose.eyebrow}>404</p>
        <h1 className={prose.title}>{c.title}</h1>
        <p className={prose.lede}>{c.text}</p>
        {c.draft && <p className={prose.badge}>{c.draft}</p>}
        <nav aria-label={c.linksLabel}>
          <ul className={prose.cards}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={prose.card}>
                  <span className={prose.cardTitle}>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
