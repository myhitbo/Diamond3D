'use client';

import { useRef, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';

/**
 * Menu des tablettes et téléphones : élément `details` (il s'ouvre et se ferme sans JavaScript). Une fois la page chargée, il se
 * referme aussi quand on choisit un lien (même celui de la page affichée, qui ne change pas de page) et avec la touche Échap,
 * qui rend le focus au bouton « Menu ».
 */
export default function HeaderMenu({ label, navLabel, children }: { label: string; navLabel: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute('open');
  const onClick = (e: MouseEvent) => {
    if ((e.target as Element).closest('a')) close();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Escape' || !ref.current?.open) return;
    close();
    ref.current.querySelector('summary')?.focus();
  };
  return (
    <details className="menu" ref={ref} onKeyDown={onKeyDown}>
      <summary aria-label={label}>
        <span className="menu-icon" aria-hidden="true" />
        <span className="menu-label" aria-hidden="true">
          {label}
        </span>
      </summary>
      <nav className="menu-panel" aria-label={navLabel} onClick={onClick}>
        {children}
      </nav>
    </details>
  );
}
