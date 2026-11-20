'use client';

import { Suspense, useEffect, useMemo, useRef, useState, type MutableRefObject, type ReactNode } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshRefractionMaterial, PerformanceMonitor, useGLTF } from '@react-three/drei';
import { createStudioEnvironment } from '@/components/configurator/studioEnvironment';
import { METALS } from '@/config/metals';
import type { MetalId } from '@/lib/configurator/schema';

/**
 * Scène 3D pilotée par le défilement : le bijou reste à l'écran pendant que la page défile, et passe d'une « pose » à l'autre
 * (place, taille, rotation, métal, écart entre les deux bagues) au rythme des sections. C'est le mécanisme des sites de
 * lancement de produit où l'objet traverse toute la page ; ici l'objet est le modèle réel du configurateur.
 *
 * Principe : chaque pose est accrochée à un élément de la page (`anchor`, son identifiant). Quand le centre de l'écran est entre
 * deux ancres, la pose est interpolée entre les deux ; la mise en page peut donc changer (langue, taille d'écran) sans rien
 * recalculer à la main. Le défilement reste celui du navigateur (pas de défilement détourné) : seule la bague est animée.
 *
 * Accessibilité : la scène est décorative (`aria-hidden`), le texte des sections dit tout. Avec « réduire les animations », la
 * bague ne glisse plus : elle prend d'un coup la pose de la section la plus proche. Aucun mouvement ne continue sans action de
 * l'utilisateur (pas de rotation automatique). Sans WebGL, `fallback` est affiché à la place.
 */
export type StagePose = {
  /** Centre du bijou : fraction de la demi-largeur (x) et de la demi-hauteur (y) de l'écran ; 0 = centre, 1 = bord droit ou haut. */
  x: number;
  y: number;
  /** Taille apparente : diamètre du bijou en fraction de la plus petite dimension de l'écran. */
  size: number;
  /** Rotation en degrés : tangage (autour de l'horizontale), lacet (autour de la verticale), roulis (dans le plan de l'écran). */
  rot: [number, number, number];
  /** Écart entre le solitaire et l'alliance le long du doigt, en millimètres (0 : portés ensemble). */
  split?: number;
  /** Échelle du solitaire (pièce A) et de l'alliance (pièce B) : 1 = visible, 0 = absente. */
  a?: number;
  b?: number;
  metal?: MetalId;
};

export type StageKey = {
  /** Identifiant de l'élément de la page auquel la pose est accrochée (son centre vertical). */
  anchor: string;
  pose: StagePose;
  /** Valeurs propres aux écrans étroits (moins de 820 px de large). */
  narrow?: Partial<StagePose>;
};

type Resolved = Required<Omit<StagePose, 'metal'>> & { color: THREE.Color; roughness: number };

const DEFAULT_METAL: MetalId = 'yellow-gold-18k';
const NARROW = 820;
const FOV = 28;
const DISTANCE = 120;
/** Part du trajet entre deux ancres pendant laquelle la pose ne bouge pas, au départ et à l'arrivée. */
const HOLD = 0.18;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

function resolve(key: StageKey, narrow: boolean): Resolved {
  const p = { ...key.pose, ...(narrow ? key.narrow : null) };
  const metal = METALS[p.metal ?? DEFAULT_METAL].render;
  return { x: p.x, y: p.y, size: p.size, rot: p.rot, split: p.split ?? 0, a: p.a ?? 1, b: p.b ?? 1, color: new THREE.Color(metal.color), roughness: metal.roughness };
}

function mix(a: Resolved, b: Resolved, t: number, out: Resolved) {
  out.x = lerp(a.x, b.x, t);
  out.y = lerp(a.y, b.y, t);
  out.size = lerp(a.size, b.size, t);
  out.rot = [lerp(a.rot[0], b.rot[0], t), lerp(a.rot[1], b.rot[1], t), lerp(a.rot[2], b.rot[2], t)];
  out.split = lerp(a.split, b.split, t);
  out.a = lerp(a.a, b.a, t);
  out.b = lerp(a.b, b.b, t);
  out.color.lerpColors(a.color, b.color, t);
  out.roughness = lerp(a.roughness, b.roughness, t);
}

/** Pose visée d'après la position de défilement ; mise à jour à chaque défilement ou redimensionnement. */
function useScrollTarget(keys: StageKey[], reduced: boolean, onChange: () => void): MutableRefObject<Resolved> {
  const target = useRef<Resolved>(resolve(keys[0], false));
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const narrow = window.innerWidth < NARROW;
      const centre = window.scrollY + window.innerHeight / 2;
      const stops = keys
        .map((k) => {
          const el = document.getElementById(k.anchor);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { y: r.top + window.scrollY + r.height / 2, pose: resolve(k, narrow) };
        })
        .filter((s): s is { y: number; pose: Resolved } => s !== null)
        .sort((s1, s2) => s1.y - s2.y);
      if (!stops.length) return;
      let i = 0;
      while (i < stops.length - 1 && centre > stops[i + 1].y) i++;
      const from = stops[i];
      const to = stops[Math.min(i + 1, stops.length - 1)];
      let t = to.y > from.y ? Math.min(Math.max((centre - from.y) / (to.y - from.y), 0), 1) : 0;
      // Réduction des animations : pas de glissement, la pose de la section la plus proche.
      t = reduced ? (t < 0.5 ? 0 : 1) : smooth(Math.min(Math.max((t - HOLD) / (1 - 2 * HOLD), 0), 1));
      mix(from.pose, to.pose, t, target.current);
      onChange();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Les polices et les images changent la hauteur des sections après le premier calcul.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [keys, reduced, onChange, target]);
  return target;
}

function bakeToFloat(src: THREE.BufferGeometry, m: THREE.Matrix4): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  const pos = src.getAttribute('position');
  const nrm = src.getAttribute('normal');
  const p = new Float32Array(pos.count * 3);
  const n = new Float32Array(pos.count * 3);
  const v = new THREE.Vector3();
  const normalMatrix = new THREE.Matrix3().getNormalMatrix(m);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).applyMatrix4(m).toArray(p, i * 3);
    if (nrm) v.fromBufferAttribute(nrm, i).applyMatrix3(normalMatrix).normalize().toArray(n, i * 3);
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  if (nrm) g.setAttribute('normal', new THREE.BufferAttribute(n, 3));
  if (src.index) g.setIndex(src.index.clone());
  g.computeBoundingSphere();
  g.computeBoundingBox();
  return g;
}

type Part = { name: string; piece: 'A' | 'B'; gem: boolean; geometry: THREE.BufferGeometry };

function Ring({ url, target, reduced, lowQuality, onReady }: { url: string; target: MutableRefObject<Resolved>; reduced: boolean; lowQuality: boolean; onReady: () => void }) {
  const gltf = useGLTF(url);
  const invalidate = useThree((s) => s.invalidate);
  const size = useThree((s) => s.size);
  const env = useMemo(() => ({ metal: createStudioEnvironment(1024, 'metal'), gem: createStudioEnvironment(512, 'gem') }), []);
  const metalMat = useMemo(() => new THREE.MeshPhysicalMaterial({ metalness: 1, roughness: 0.08, envMapIntensity: 1.15 }), []);
  const gemFallback = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 1, roughness: 0.02, envMap: env.gem, envMapIntensity: 1.25, flatShading: true }),
    [env.gem],
  );

  // Géométries en millimètres, centrées sur l'ensemble ; rayon de l'ensemble pour la taille à l'écran.
  const { parts, radius } = useMemo(() => {
    gltf.scene.updateMatrixWorld(true);
    const toMm = new THREE.Matrix4().makeScale(1000, 1000, 1000);
    const raw: Part[] = [];
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      const match = /^(A|B)__(metal|gem)_/.exec(o.name);
      if (!mesh.isMesh || !match) return;
      raw.push({ name: o.name, piece: match[1] as 'A' | 'B', gem: match[2] === 'gem', geometry: bakeToFloat(mesh.geometry, toMm.clone().multiply(mesh.matrixWorld)) });
    });
    const box = new THREE.Box3();
    for (const p of raw) box.union(p.geometry.boundingBox!);
    const centre = box.getCenter(new THREE.Vector3());
    for (const p of raw) p.geometry.translate(-centre.x, -centre.y, -centre.z);
    return { parts: raw, radius: box.getSize(new THREE.Vector3()).length() / 2 };
  }, [gltf.scene]);

  const root = useRef<THREE.Group>(null);
  const pieceA = useRef<THREE.Group>(null);
  const pieceB = useRef<THREE.Group>(null);
  const current = useRef<Resolved | null>(null);
  const ready = useRef(false);

  useEffect(() => invalidate(), [size, lowQuality, invalidate]);

  useFrame((state, delta) => {
    const t = target.current;
    if (!current.current) current.current = { ...t, rot: [...t.rot], color: t.color.clone() };
    const c = current.current;
    // Amortissement : la bague suit la page avec un léger retard, puis s'arrête. Sans amortissement en animations réduites.
    const k = reduced ? 1 : 1 - Math.exp(-delta * 7);
    mix(c, t, k, c);
    const camera = state.camera as THREE.PerspectiveCamera;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * DISTANCE;
    const halfW = halfH * camera.aspect;
    const g = root.current;
    if (g) {
      g.position.set(c.x * halfW, c.y * halfH, 0);
      g.scale.setScalar((c.size * Math.min(halfW, halfH)) / radius);
      g.rotation.set(THREE.MathUtils.degToRad(c.rot[0]), THREE.MathUtils.degToRad(c.rot[1]), THREE.MathUtils.degToRad(c.rot[2]), 'YXZ');
    }
    // Axe du doigt : Z (repère glTF du modèle). Le solitaire recule, l'alliance avance.
    if (pieceA.current) {
      pieceA.current.position.z = -c.split / 2;
      pieceA.current.scale.setScalar(Math.max(c.a, 0.0001));
      pieceA.current.visible = c.a > 0.01;
    }
    if (pieceB.current) {
      pieceB.current.position.z = c.split / 2;
      pieceB.current.scale.setScalar(Math.max(c.b, 0.0001));
      pieceB.current.visible = c.b > 0.01;
    }
    metalMat.color.copy(c.color);
    metalMat.roughness = c.roughness;
    const moving =
      Math.abs(c.x - t.x) + Math.abs(c.y - t.y) + Math.abs(c.size - t.size) + Math.abs(c.split - t.split) / 20 + Math.abs(c.a - t.a) + Math.abs(c.b - t.b) > 0.0005 ||
      Math.abs(c.rot[0] - t.rot[0]) + Math.abs(c.rot[1] - t.rot[1]) + Math.abs(c.rot[2] - t.rot[2]) > 0.05 ||
      !c.color.equals(t.color);
    if (moving) invalidate();
    if (!ready.current) {
      ready.current = true;
      onReady();
    }
  });

  const piece = (id: 'A' | 'B') =>
    parts
      .filter((p) => p.piece === id)
      .map((p) =>
        !p.gem ? (
          <mesh key={p.name} geometry={p.geometry} material={metalMat} />
        ) : lowQuality ? (
          <mesh key={p.name} geometry={p.geometry} material={gemFallback} />
        ) : (
          <mesh key={p.name} geometry={p.geometry}>
            <MeshRefractionMaterial envMap={env.gem} bounces={3} ior={2.42} fresnel={0.9} aberrationStrength={0.012} fastChroma toneMapped={false} />
          </mesh>
        ),
      );

  return (
    <>
      <Environment map={env.metal} environmentIntensity={1} />
      <group ref={root}>
        <group ref={pieceA}>{piece('A')}</group>
        <group ref={pieceB}>{piece('B')}</group>
      </group>
    </>
  );
}

export default function RingStage({
  url = '/models/ring-001/ring-001.glb',
  keys,
  className,
  fallback = null,
}: {
  url?: string;
  /** Poses dans l'ordre de la page ; au moins une. */
  keys: StageKey[];
  className?: string;
  /** Affiché à la place de la scène quand WebGL n'est pas disponible. */
  fallback?: ReactNode;
}) {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const [lowQuality, setLowQuality] = useState(false);
  const reduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const invalidateRef = useRef<() => void>(() => {});
  const onChange = useMemo(() => () => invalidateRef.current(), []);
  const target = useScrollTarget(keys, reduced, onChange);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    setWebgl(!!(canvas.getContext('webgl2') ?? canvas.getContext('webgl')));
  }, []);

  // La scène remplit son conteneur (la page lui donne sa place : en général un bloc collant de la hauteur de l'écran).
  const fill = { width: '100%', height: '100%' } as const;
  if (webgl === null) return <div className={className} style={fill} aria-hidden="true" />;
  if (!webgl) return (
    <div className={className} style={fill}>
      {fallback}
    </div>
  );
  return (
    <div className={className} aria-hidden="true" data-stage-ready={ready ? 'true' : 'false'} style={{ ...fill, opacity: ready ? 1 : 0, transition: 'opacity 0.9s ease' }}>
      <Canvas
        frameloop="demand"
        dpr={lowQuality ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: THREE.NeutralToneMapping }}
        camera={{ fov: FOV, near: 5, far: 600, position: [0, 0, DISTANCE] }}
        style={{ pointerEvents: 'none' }}
        onCreated={(state) => {
          invalidateRef.current = () => state.invalidate();
        }}
      >
        <PerformanceMonitor bounds={() => [24, 50]} iterations={8} threshold={0.8} onDecline={() => setLowQuality(true)} />
        <Suspense fallback={null}>
          <Ring url={url} target={target} reduced={reduced} lowQuality={lowQuality} onReady={() => setReady(true)} />
        </Suspense>
      </Canvas>
    </div>
  );
}
