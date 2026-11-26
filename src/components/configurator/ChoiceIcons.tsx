import type { RequestStone } from '@/lib/configurator/schema';

/**
 * Pictogrammes des boutons de choix du configurateur. Décoratifs (`aria-hidden`) : le nom du bouton reste son texte.
 * Ce sont des dessins au trait, pas des images du bijou : la forme d'une taille vue de dessus (table et facettes),
 * la couleur d'une pierre. Rien n'y est mesuré ni tiré du fichier de fabrication.
 */

const FRAME = { viewBox: '0 0 48 48', 'aria-hidden': true, focusable: false } as const;
const LINE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.15, strokeLinejoin: 'round', strokeLinecap: 'round' } as const;

/** Sommets d'un octogone (table d'une taille brillant) et rayons vers le bord, pour un cercle ou une ellipse. */
function brilliant(rx: number, ry: number, tx: number, ty: number) {
  const pts = Array.from({ length: 8 }, (_, k) => {
    const a = ((22.5 + k * 45) * Math.PI) / 180;
    return { c: Math.cos(a), s: Math.sin(a) };
  });
  const r = (n: number) => Math.round(n * 100) / 100;
  const table = pts.map((p) => `${r(24 + tx * p.c)},${r(24 + ty * p.s)}`).join(' ');
  const spokes = pts.map((p) => `M${r(24 + tx * p.c)} ${r(24 + ty * p.s)}L${r(24 + rx * p.c)} ${r(24 + ry * p.s)}`).join('');
  return { table, spokes };
}

const ROUND = brilliant(19, 19, 9.5, 9.5);
const OVAL = brilliant(13.5, 19, 6.5, 9.5);

export type IconShape = 'round' | 'oval' | 'pear' | 'emerald' | 'princess' | 'marquise' | 'heart' | 'unknown';

/** Forme d'une taille, vue de dessus. */
export function ShapeIcon({ shape, className }: { shape: IconShape; className?: string }) {
  switch (shape) {
    case 'oval':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <ellipse cx="24" cy="24" rx="13.5" ry="19" />
            <polygon points={OVAL.table} />
            <path d={OVAL.spokes} />
          </g>
        </svg>
      );
    case 'marquise':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <path d="M24 3C35 12 35 36 24 45C13 36 13 12 24 3Z" />
            <polygon points="24,13.5 28.5,20 28.5,28 24,34.5 19.5,28 19.5,20" />
            <path d="M24 13.5V3M24 34.5V45M28.5 20L32.3 17.6M28.5 28L32.3 30.4M19.5 20L15.7 17.6M19.5 28L15.7 30.4" />
          </g>
        </svg>
      );
    case 'pear':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <path d="M24 3C27 12 38 20 38 31A14 14 0 0 1 10 31C10 20 21 12 24 3Z" />
            <polygon points="24,16 30,26.5 29,33.5 24,37 19,33.5 18,26.5" />
            <path d="M24 16V3M30 26.5L37.4 27M18 26.5L10.6 27M29 33.5L34.2 40.4M19 33.5L13.8 40.4M24 37V45" />
          </g>
        </svg>
      );
    case 'emerald':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <polygon points="15,4 33,4 39,10 39,38 33,44 15,44 9,38 9,10" />
            <polygon points="17,9 31,9 34.5,12.5 34.5,35.5 31,39 17,39 13.5,35.5 13.5,12.5" />
            <rect x="19" y="15" width="10" height="18" />
            <path d="M19 15L12 7M29 15L36 7M29 33L36 41M19 33L12 41" />
          </g>
        </svg>
      );
    case 'princess':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <rect x="6" y="6" width="36" height="36" />
            <rect x="16" y="16" width="16" height="16" />
            <path d="M6 6L16 16M42 6L32 16M42 42L32 32M6 42L16 32M24 6L16 16M24 6L32 16M42 24L32 16M42 24L32 32M24 42L32 32M24 42L16 32M6 24L16 32M6 24L16 16" />
          </g>
        </svg>
      );
    case 'heart':
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <path d="M24 44C12 34 5 26 5 17A9.5 9.5 0 0 1 24 12A9.5 9.5 0 0 1 43 17C43 26 36 34 24 44Z" />
            <polygon points="24,18 31,17 33,23 24,33 15,23 17,17" />
            <path d="M24 18V12M31 17L36 10M17 17L12 10M33 23L41.5 21M15 23L6.5 21M24 33V44" />
          </g>
        </svg>
      );
    default:
      return (
        <svg {...FRAME} className={className}>
          <g {...LINE}>
            <circle cx="24" cy="24" r="19" />
            <polygon points={ROUND.table} />
            <path d={ROUND.spokes} />
          </g>
        </svg>
      );
  }
}

/** Couleurs d'illustration de chaque pierre « sur demande » (sombre, claire). Le diamant de couleur passe par trois teintes. */
const GEM_COLOURS: Record<RequestStone, string[]> = {
  'colored-diamond': ['#f2c94c', '#f29ac0', '#86b9ee'],
  emerald: ['#0c5f43', '#39c592'],
  sapphire: ['#132c74', '#4c8be4'],
  ruby: ['#7a0e21', '#e64b66'],
};

/** Pierre de couleur : un brillant vu de dessus, teinté. */
export function GemIcon({ stone, className }: { stone: RequestStone; className?: string }) {
  const colours = GEM_COLOURS[stone];
  const id = `gem-${stone}`;
  return (
    <svg {...FRAME} className={className}>
      <defs>
        <linearGradient id={id} x1="0.15" y1="0.05" x2="0.85" y2="0.95">
          {colours.map((c, i) => (
            <stop key={c} offset={i / (colours.length - 1)} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="19" fill={`url(#${id})`} stroke="rgba(31, 28, 24, 0.4)" strokeWidth="1" />
      <polygon points={ROUND.table} fill="rgba(255, 255, 255, 0.22)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.9" strokeLinejoin="round" />
      <path d={ROUND.spokes} fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
