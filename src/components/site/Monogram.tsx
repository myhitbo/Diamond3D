/**
 * Monogramme JR : losange doré à double filet et initiales. Décoratif (`aria-hidden`) : il accompagne toujours le nom
 * « JR Diamond » écrit en toutes lettres, qui donne son nom au lien.
 */
export default function Monogram() {
  return (
    <svg className="monogram" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M24 1.5 46.5 24 24 46.5 1.5 24Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M24 5.5 42.5 24 24 42.5 5.5 24Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <text
        x="24"
        y="24"
        dy="0.36em"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 15, letterSpacing: '0.04em' }}
      >
        JR
      </text>
    </svg>
  );
}
