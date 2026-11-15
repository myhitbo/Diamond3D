import { Fragment, type ReactNode } from 'react';
import { MAIN_ID } from '@/components/site/SiteHeader';
import { BUSINESS, businessText, isBusinessField, type BusinessField } from '@/config/business';
import { ACCESSIBILITY_STATUS, ACCESSIBILITY_STATUS_UI, formatLegalDate, type LegalPage } from '@/content/legal';
import type { Locale } from '@/lib/configurator/schema';
import styles from '@/app/[locale]/prose.module.css';

/** Informations remplies qui se lisent comme un lien (e-mail, téléphone). */
const LINKED: Partial<Record<BusinessField, (v: string) => string>> = {
  email: (v) => `mailto:${v}`,
  accessibilityContactEmail: (v) => `mailto:${v}`,
  phone: (v) => `tel:${v.replace(/[^\d+]/g, '')}`,
  accessibilityContactPhone: (v) => `tel:${v.replace(/[^\d+]/g, '')}`,
};

/**
 * Texte d'une page légale : chaque `{nom}` est remplacé par l'information de `src/config/business.ts`, ou par sa marque
 * « à compléter » tant qu'elle manque. Une valeur remplie est isolée (`bdi`) : un numéro ou une adresse e-mail en lettres
 * latines ne doit pas déranger l'ordre d'une phrase en hébreu.
 */
function withBusiness(text: string, locale: Locale): ReactNode {
  return text.split(/(\{\w+\})/).map((part, i) => {
    const name = /^\{(\w+)\}$/.exec(part)?.[1];
    if (!name) return <Fragment key={i}>{part}</Fragment>;
    if (!isBusinessField(name)) throw new Error(`Information inconnue dans une page légale : ${part} (voir src/config/business.ts)`);
    const { text: value, missing } = businessText(name, locale);
    if (missing) return <mark key={i} className={styles.todo}>{value}</mark>;
    const href = typeof BUSINESS[name] === 'string' ? LINKED[name]?.(value) : undefined;
    return <bdi key={i}>{href ? <a href={href}>{value}</a> : value}</bdi>;
  });
}

/** Rubrique « État de conformité » de la déclaration d'accessibilité (`src/content/legal/accessibility-status.ts`). */
export function AccessibilityStatusBlock({ locale }: { locale: Locale }) {
  const ui = ACCESSIBILITY_STATUS_UI[locale];
  const s = ACCESSIBILITY_STATUS;
  // Liste, ou phrase de remplacement quand elle est vide (aucun résultat chiffré, aucun lecteur d'écran testé).
  const list = (items: string[], empty?: string) =>
    items.length ? (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      empty && <p>{empty}</p>
    );
  return (
    <>
      <dl className={styles.facts}>
        <dt>{ui.checkedOn}</dt>
        <dd>{formatLegalDate(s.checkedOn, locale)}</dd>
        <dt>{ui.conformance}</dt>
        <dd data-conformance={s.conformance}>{ui.levels[s.conformance]}</dd>
      </dl>
      <h3 className={styles.h3}>{ui.methods}</h3>
      {list(s.methods.map((m) => m[locale]))}
      <h3 className={styles.h3}>{ui.results}</h3>
      {list(s.results.map((r) => r[locale]), ui.noResults)}
      <h3 className={styles.h3}>{ui.screenReaders}</h3>
      {list(s.screenReaders, ui.noScreenReaders)}
      <h3 className={styles.h3}>{ui.limits}</h3>
      {list(s.limits.map((l) => l[locale]))}
    </>
  );
}

/** Corps d'une page légale : titre, badge « Brouillon », date de mise à jour, rubriques, liens de référence. */
export default function LegalPageView({ page, locale, updated, slots = {} }: { page: LegalPage; locale: Locale; updated: string; slots?: { status?: ReactNode } }) {
  return (
    <main id={MAIN_ID} className={styles.page}>
      <h1 className={styles.title}>{page.title}</h1>
      <p className={styles.lede}>{page.lede}</p>
      <p className={styles.badge}>{page.badge}</p>
      <p className={styles.updated}>{page.updated(formatLegalDate(updated, locale))}</p>

      {page.sections.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className={styles.body}>
          <h2 id={`h-${s.id}`} className={styles.h2}>
            {s.title}
          </h2>
          {s.paragraphs?.map((p) => (
            <p key={p}>{withBusiness(p, locale)}</p>
          ))}
          {s.list && (
            <ul>
              {s.list.map((item) => (
                <li key={item}>{withBusiness(item, locale)}</li>
              ))}
            </ul>
          )}
          {s.after?.map((p) => (
            <p key={p}>{withBusiness(p, locale)}</p>
          ))}
          {s.slot && slots[s.slot]}
        </section>
      ))}

      <section aria-labelledby="h-liens" className={styles.sources}>
        <h2 id="h-liens" className={styles.sourcesTitle}>
          {page.linksTitle}
        </h2>
        <ul>
          {page.links.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
