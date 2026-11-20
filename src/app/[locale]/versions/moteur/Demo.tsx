'use client';

import dynamic from 'next/dynamic';
import type { StageKey } from '@/components/stage/RingStage';

const RingStage = dynamic(() => import('@/components/stage/RingStage'), { ssr: false });

const KEYS: StageKey[] = [
  { anchor: 'm1', pose: { x: 0.45, y: 0, size: 0.9, rot: [20, -35, 10] }, narrow: { x: 0, y: -0.35, size: 0.8 } },
  { anchor: 'm2', pose: { x: -0.45, y: 0, size: 1.3, rot: [70, 20, 0], metal: 'white-gold-18k' } },
  { anchor: 'm3', pose: { x: 0, y: 0, size: 0.8, rot: [10, 60, -15], split: 14, metal: 'rose-gold-18k' } },
  { anchor: 'm4', pose: { x: 0.4, y: 0.1, size: 1.1, rot: [35, -20, 20], b: 0, metal: 'platinum-950' } },
];

export default function Demo() {
  return (
    <main style={{ background: '#0b0a08', color: '#f7f3ec' }}>
      <div style={{ position: 'sticky', top: 0, height: '100svh', marginBottom: '-100svh', pointerEvents: 'none' }}>
        <RingStage keys={KEYS} fallback={<p>Sans WebGL</p>} />
      </div>
      {['m1', 'm2', 'm3', 'm4'].map((id) => (
        <section key={id} id={id} style={{ minHeight: '100svh', display: 'grid', placeItems: 'center start', padding: '0 8vw', position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 400 }}>Section {id}</h2>
        </section>
      ))}
    </main>
  );
}
