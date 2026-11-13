import type * as THREE from 'three';

/**
 * Sonde de test et de mesure, active seulement avec `?debug=1`.
 * Elle expose l'état réel de la scène (pièces affichées, couleur du métal, rendus effectués)
 * pour que les tests vérifient ce qui est rendu, et pas seulement l'interface.
 */
export type DebugProbe = {
  ready: boolean;
  /** Niveau de rendu en cours (« high » ou « low ») ; le PerformanceMonitor peut le faire baisser. */
  quality?: string;
  startAt: number;
  firstFrameMs?: number;
  renders: number;
  info: () => { calls: number; triangles: number; dpr: number; programs: number };
  visibleNodes: () => string[];
  metalColor: () => string;
  orbit: (azimuthDeg: number) => void;
  cameraDistance: () => number;
};

declare global {
  interface Window {
    __jr?: DebugProbe;
  }
}

export function initProbe() {
  window.__jr = {
    ready: false,
    startAt: performance.now(),
    renders: 0,
    info: () => ({ calls: 0, triangles: 0, dpr: 0, programs: 0 }),
    visibleNodes: () => [],
    metalColor: () => '',
    orbit: () => undefined,
    cameraDistance: () => NaN,
  };
}

export function setProbe(values: Partial<DebugProbe>) {
  if (window.__jr) Object.assign(window.__jr, values);
}

export function markReady() {
  if (window.__jr) setProbe({ ready: true, firstFrameMs: Math.round(performance.now() - window.__jr.startAt) });
}

/** Compte les rendus effectifs (la scène ne se redessine qu'à la demande). */
export function instrumentRenderer(gl: THREE.WebGLRenderer) {
  const original = gl.render.bind(gl);
  gl.render = (scene, camera) => {
    original(scene, camera);
    if (window.__jr) window.__jr.renders += 1;
  };
  setProbe({
    info: () => ({
      calls: gl.info.render.calls,
      triangles: gl.info.render.triangles,
      dpr: gl.getPixelRatio(),
      programs: gl.info.programs?.length ?? 0,
    }),
  });
  return () => {
    gl.render = original;
  };
}
