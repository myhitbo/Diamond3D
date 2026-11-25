import Link from 'next/link';
import { VERSION_IDS, VERSIONS_UI, type VersionId } from '@/content/versions';
import type { Locale } from '@/lib/configurator/schema';
import styles from './VersionSwitcher.module.css';

/**
 * Sélecteur des trois versions, en bas de page : sert à la comparaison par le propriétaire, il disparaîtra avec les versions non
 * retenues. `current` : version affichée (`aria-current`), absent sur la page d'index.
 */
export default function VersionSwitcher({ locale, current }: { locale: Locale; current?: VersionId }) {
  const ui = VERSIONS_UI[locale];
  return (
    <nav className={styles.switcher} aria-label={ui.switcherLabel}>
      <Link href={`/${locale}/versions`} aria-current={current ? undefined : 'page'}>
        {ui.index}
      </Link>
      {VERSION_IDS.map((id) => (
        <Link key={id} href={`/${locale}/versions/${id}`} aria-current={id === current ? 'page' : undefined}>
          {id.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
