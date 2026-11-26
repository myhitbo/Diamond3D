import Image from 'next/image';

/**
 * Logo JR de l'atelier (monogramme or), détouré depuis l'image envoyée par l'atelier le 17/11/2026 (`scripts/logo/detourer.py`).
 * Décoratif (`alt` vide, `aria-hidden`) : il accompagne toujours le nom « JR Diamond » écrit en toutes lettres, qui donne
 * son nom au lien. La boîte reste carrée (classe `monogram`) : le logo, plus haut que large, y tient en entier.
 * `sizes` : la plus grande taille affichée (pied de page, 64 px) ; le navigateur choisit la variante selon l'écran.
 */
export default function Monogram() {
  return <Image className="monogram" src="/images/logo-jr-atelier.webp" width={333} height={384} sizes="64px" alt="" aria-hidden="true" loading="eager" />;
}
