'use client';

import { Suspense, useEffect, useMemo, useRef, useState, useSyncExternalStore, type MutableRefObject, type ReactNode } from 'react';
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
  /**
   * Taille apparente : diamètre du bijou en fraction de la plus petite dimension de l'écran (en mise en page large : de la hauteur,
   * plafonnée à 62 % de la largeur ; en CSS, `min(100svh, 62vw)`).
   */
  size: number;
  /**
   * Plafond du diamètre, en fraction de la hauteur de l'écran (aucun par défaut). Sur un téléphone, la taille suit la largeur alors
   * que les textes se placent selon la hauteur : sur un écran court, le plafond empêche la bague de passer sur un titre.
   */
  maxH?: number;
  /** Rotation en degrés : tangage (autour de l'horizontale), lacet (autour de la verticale), roulis (dans le plan de l'écran). */
  rot: [number, number, number];
  /** Écart entre le solitaire et l'alliance le long du doigt, en millimètres (0 : portés ensemble). */
  split?: number;
  /** Échelle du solitaire (pièce A) et de l'alliance (pièce B) : 1 = visible, 0 = absente. */
  a?: number;
  b?: number;
  metal?: MetalId;
  /** Éclairage du bijou : 1 = pleine lumière (par défaut), 0 = silhouette (reflets presque éteints). */
  light?: number;
};

export type StageKey = {
  /** Identifiant de l'élément de la page auquel la pose est accrochée (son centre vertical). */
  anchor: string;
  pose: StagePose;
  /**
   * Valeurs propres à la mise en page « étroite » : écran de 820 px de large au plus, ou écran en hauteur (tablette debout), comme
   * `@media (max-width: 820px), (max-aspect-ratio: 5/6)`. La bague y occupe le haut de l'écran et le texte le bas : c'est la bonne
   * disposition pour tout écran plus haut que large, même large de plus de 820 px.
   */
  narrow?: Partial<StagePose>;
  /**
   * Valeurs propres aux écrans en hauteur (largeur ÷ hauteur ≤ 5/6, comme `@media (max-aspect-ratio: 5/6)`), appliquées après
   * `narrow`. Pour une disposition qui dépend de la forme de l'écran et non de sa largeur : deux rangs de deux bagues sur un écran
   * en hauteur, une rangée sur un écran couché, même étroit (téléphone à l'horizontale, zoom à 200 %).
   */
  upright?: Partial<StagePose>;
};

/** Un bijou de la scène et ses poses. Plusieurs acteurs = plusieurs exemplaires du modèle (une rangée de quatre métaux…). */
export type StageActor = { id: string; keys: StageKey[] };

type Resolved = Required<Omit<StagePose, 'metal'>> & { color: THREE.Color; roughness: number };

const DEFAULT_METAL: MetalId = 'yellow-gold-18k';
const NARROW = 820;
const UPRIGHT = 5 / 6;
/** Mise en page large : la taille de référence ne dépasse pas cette part de la largeur (égale à la hauteur en 16:10). */
const WIDE_FIT = 0.62;
const FOV = 28;
const DISTANCE = 120;
/** Pas de plafond de taille (valeur finie : elle s'interpole avec un vrai plafond). */
const NO_CAP = 9;
/** Part du trajet entre deux ancres pendant laquelle la pose ne bouge pas, au départ et à l'arrivée. */
const HOLD = 0.18;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

/** `mirror` : mise en page de droite à gauche (hébreu) ; la scène est retournée horizontalement (place, lacet et roulis). */
function resolve(key: StageKey, narrow: boolean, upright: boolean, mirror: boolean): Resolved {
  const p = { ...key.pose, ...(narrow ? key.narrow : null), ...(upright ? key.upright : null) };
  const metal = METALS[p.metal ?? DEFAULT_METAL].render;
  const m = mirror ? -1 : 1;
  return {
    x: p.x * m,
    y: p.y,
    size: p.size,
    maxH: p.maxH ?? NO_CAP,
    rot: [p.rot[0], p.rot[1] * m, p.rot[2] * m],
    split: p.split ?? 0,
    a: p.a ?? 1,
    b: p.b ?? 1,
    light: p.light ?? 1,
    color: new THREE.Color(metal.color),
    roughness: metal.roughness,
  };
}

function mix(a: Resolved, b: Resolved, t: number, out: Resolved) {
  out.x = lerp(a.x, b.x, t);
  out.y = lerp(a.y, b.y, t);
  out.size = lerp(a.size, b.size, t);
  out.maxH = lerp(a.maxH, b.maxH, t);
  out.rot = [lerp(a.rot[0], b.rot[0], t), lerp(a.rot[1], b.rot[1], t), lerp(a.rot[2], b.rot[2], t)];
  out.split = lerp(a.split, b.split, t);
  out.a = lerp(a.a, b.a, t);
  out.b = lerp(a.b, b.b, t);
  out.light = lerp(a.light, b.light, t);
  out.color.lerpColors(a.color, b.color, t);
  out.roughness = lerp(a.roughness, b.roughness, t);
}

const clonePose = (p: Resolved): Resolved => ({ ...p, rot: [...p.rot], color: p.color.clone() });

/** Pose visée de chaque acteur d'après la position de défilement ; mise à jour à chaque défilement ou redimensionnement. */
function useScrollTargets(actors: StageActor[], mirror: boolean, reduced: boolean, onChange: () => void): MutableRefObject<Resolved[]> {
  const targets = useRef<Resolved[]>(actors.map((a) => resolve(a.keys[0], false, false, mirror)));
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const upright = window.innerWidth / window.innerHeight <= UPRIGHT;
      const narrow = window.innerWidth <= NARROW || upright;
      const centre = window.scrollY + window.innerHeight / 2;
      const centres = new Map<string, number | null>();
      const centreOf = (id: string) => {
        if (!centres.has(id)) {
          const el = document.getElementById(id);
          const r = el?.getBoundingClientRect();
          centres.set(id, r ? r.top + window.scrollY + r.height / 2 : null);
        }
        return centres.get(id)!;
      };
      actors.forEach((actor, n) => {
        const stops = actor.keys
          .map((k) => ({ y: centreOf(k.anchor), key: k }))
          .filter((s): s is { y: number; key: StageKey } => s.y !== null)
          .sort((s1, s2) => s1.y - s2.y);
        if (!stops.length) return;
        let i = 0;
        while (i < stops.length - 1 && centre > stops[i + 1].y) i++;
        const from = stops[i];
        const to = stops[Math.min(i + 1, stops.length - 1)];
        let t = to.y > from.y ? Math.min(Math.max((centre - from.y) / (to.y - from.y), 0), 1) : 0;
        // Réduction des animations : pas de glissement, la pose de la section la plus proche.
        t = reduced ? (t < 0.5 ? 0 : 1) : smooth(Math.min(Math.max((t - HOLD) / (1 - 2 * HOLD), 0), 1));
        if (!targets.current[n]) targets.current[n] = resolve(actor.keys[0], narrow, upright, mirror);
        mix(resolve(from.key, narrow, upright, mirror), resolve(to.key, narrow, upright, mirror), t, targets.current[n]);
      });
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
  }, [actors, mirror, reduced, onChange, targets]);
  return targets;
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

/** Charge le modèle une fois : géométries en millimètres, centrées sur l'ensemble ; rayon de l'ensemble pour la taille à l'écran. */
function useRingParts(url: string) {
  const gltf = useGLTF(url);
  return useMemo(() => {
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
}

type Studio = { metal: THREE.Texture; gem: THREE.Texture };

function Actor({
  index,
  parts,
  radius,
  targets,
  pointer,
  reduced,
  lowQuality,
  studio,
  gemFallback,
}: {
  index: number;
  parts: Part[];
  radius: number;
  targets: MutableRefObject<Resolved[]>;
  pointer: MutableRefObject<{ x: number; y: number; tilt: number }>;
  reduced: boolean;
  lowQuality: boolean;
  studio: Studio;
  gemFallback: THREE.Material;
}) {
  const invalidate = useThree((s) => s.invalidate);
  // Matériaux du métal de cet acteur, recueillis à leur création : leur couleur suit la pose à chaque image.
  const metals = useRef(new Set<THREE.MeshPhysicalMaterial>());
  const collect = (m: THREE.MeshPhysicalMaterial | null) => {
    if (m) metals.current.add(m);
  };
  // Pierres : leur teinte suit l'éclairage de la pose. On garde les objets, pas les matériaux : le matériau de réfraction tient sa
  // propre référence (lui en passer une autre l'empêche de fonctionner).
  const gems = useRef(new Set<THREE.Mesh>());
  const collectGem = (mesh: THREE.Mesh | null) => {
    if (mesh) gems.current.add(mesh);
  };
  const root = useRef<THREE.Group>(null);
  const pieceA = useRef<THREE.Group>(null);
  const pieceB = useRef<THREE.Group>(null);
  const current = useRef<Resolved | null>(null);
  const tilt = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = targets.current[index];
    if (!t) return;
    if (!current.current) current.current = clonePose(t);
    const c = current.current;
    // Amortissement : la bague suit la page avec un léger retard, puis s'arrête. Sans amortissement en animations réduites.
    const k = reduced ? 1 : 1 - Math.exp(-delta * 7);
    mix(c, t, k, c);
    // Inclinaison vers le pointeur (souris seulement) : la bague « regarde » le curseur, de quelques degrés.
    const p = pointer.current;
    tilt.current.x = lerp(tilt.current.x, p.y * p.tilt, k);
    tilt.current.y = lerp(tilt.current.y, p.x * p.tilt, k);
    const camera = state.camera as THREE.PerspectiveCamera;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * DISTANCE;
    const halfW = halfH * camera.aspect;
    const g = root.current;
    if (g) {
      g.position.set(c.x * halfW, c.y * halfH, 0);
      // Dimension de référence de la taille : la plus petite dimension de l'écran ; en mise en page large, la hauteur, plafonnée
      // par la largeur (les poses sont réglées en 16:10 : sur un écran 4:3, des bagues dimensionnées sur la seule hauteur
      // prendraient la place du texte et se toucheraient dans une rangée).
      const narrow = state.size.width <= NARROW || state.size.width / state.size.height <= UPRIGHT;
      const unit = narrow ? Math.min(halfW, halfH) : Math.min(halfH, WIDE_FIT * halfW);
      g.scale.setScalar(Math.max(Math.min(c.size * unit, c.maxH * halfH) / radius, 0.00001));
      g.visible = c.size > 0.005;
      g.rotation.set(THREE.MathUtils.degToRad(c.rot[0] - tilt.current.x), THREE.MathUtils.degToRad(c.rot[1] + tilt.current.y), THREE.MathUtils.degToRad(c.rot[2]), 'YXZ');
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
    const lit = 0.1 + 0.9 * c.light;
    for (const m of metals.current) {
      m.color.copy(c.color);
      m.roughness = c.roughness;
      m.envMapIntensity = lit;
    }
    for (const mesh of gems.current) (mesh.material as THREE.Material & { color?: THREE.Color }).color?.setScalar(lit);
    const moving =
      Math.abs(c.x - t.x) + Math.abs(c.y - t.y) + Math.abs(c.size - t.size) + Math.abs(c.split - t.split) / 20 + Math.abs(c.a - t.a) + Math.abs(c.b - t.b) + Math.abs(c.light - t.light) > 0.0005 ||
      Math.abs(c.rot[0] - t.rot[0]) + Math.abs(c.rot[1] - t.rot[1]) + Math.abs(c.rot[2] - t.rot[2]) > 0.05 ||
      Math.abs(tilt.current.x - p.y * p.tilt) + Math.abs(tilt.current.y - p.x * p.tilt) > 0.02 ||
      Math.abs(c.color.r - t.color.r) + Math.abs(c.color.g - t.color.g) + Math.abs(c.color.b - t.color.b) > 0.002;
    // Arrivé : la pose visée est prise telle quelle (un écart infime ne relance pas le rendu indéfiniment).
    if (moving) invalidate();
    else c.color.copy(t.color);
  });

  const piece = (id: 'A' | 'B') =>
    parts
      .filter((p) => p.piece === id)
      .map((p) =>
        !p.gem ? (
          <mesh key={p.name} geometry={p.geometry}>
            {/* Environnement donné au matériau lui-même : son intensité se règle alors par bijou (celle de la scène est commune). */}
            <meshPhysicalMaterial ref={collect} metalness={1} roughness={0.08} envMap={studio.metal} />
          </mesh>
        ) : lowQuality ? (
          <mesh key={p.name} geometry={p.geometry} material={gemFallback} />
        ) : (
          <mesh key={p.name} ref={collectGem} geometry={p.geometry}>
            <MeshRefractionMaterial envMap={studio.gem} bounces={3} ior={2.42} fresnel={0.9} aberrationStrength={0.012} fastChroma toneMapped={false} />
          </mesh>
        ),
      );

  return (
    <group ref={root}>
      <group ref={pieceA}>{piece('A')}</group>
      <group ref={pieceB}>{piece('B')}</group>
    </group>
  );
}

function Scene({
  url,
  actors,
  targets,
  pointer,
  reduced,
  lowQuality,
  tone,
  onReady,
}: {
  url: string;
  tone: 'dark' | 'light';
  actors: StageActor[];
  targets: MutableRefObject<Resolved[]>;
  pointer: MutableRefObject<{ x: number; y: number; tilt: number }>;
  reduced: boolean;
  lowQuality: boolean;
  onReady: () => void;
}) {
  const { parts, radius } = useRingParts(url);
  const invalidate = useThree((s) => s.invalidate);
  const size = useThree((s) => s.size);
  const studio = useMemo(() => ({ metal: createStudioEnvironment(1024, 'metal', tone), gem: createStudioEnvironment(512, 'gem', tone) }), [tone]);
  // Rendu simplifié des pierres (appareils lents) : miroir à facettes. Sur une page claire, il reflète le studio sombre à bandes :
  // dans le studio clair, toutes les facettes seraient blanches et la pierre perdrait son relief.
  const gemFallback = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#ffffff',
        metalness: 1,
        roughness: 0.02,
        envMap: tone === 'light' ? createStudioEnvironment(256, 'gem', 'dark') : studio.gem,
        envMapIntensity: 1.25,
        flatShading: true,
      }),
    [studio.gem, tone],
  );
  const ready = useRef(false);
  useEffect(() => invalidate(), [size, lowQuality, invalidate]);
  useFrame(() => {
    if (ready.current) return;
    ready.current = true;
    onReady();
  });
  return (
    <>
      <Environment map={studio.metal} environmentIntensity={1} />
      {actors.map((a, i) => (
        <Actor key={a.id} index={i} parts={parts} radius={radius} targets={targets} pointer={pointer} reduced={reduced} lowQuality={lowQuality} studio={studio} gemFallback={gemFallback} />
      ))}
    </>
  );
}

let webglSupport: boolean | undefined;
function hasWebgl(): boolean {
  if (webglSupport === undefined) {
    const canvas = document.createElement('canvas');
    webglSupport = !!(canvas.getContext('webgl2') ?? canvas.getContext('webgl'));
  }
  return webglSupport;
}
const noSubscription = () => () => {};

export default function RingStage({
  url = '/models/ring-001/ring-001.glb',
  keys,
  actors,
  tilt = 0,
  studio = 'dark',
  mirror = false,
  className,
  fallback = null,
}: {
  url?: string;
  /** Un seul bijou : ses poses dans l'ordre de la page. */
  keys?: StageKey[];
  /** Plusieurs exemplaires du bijou, chacun avec ses poses (remplace `keys`). */
  actors?: StageActor[];
  /** Studio d'éclairage : sombre (fonds noirs, par défaut) ou clair (tente de lumière, pour les pages à fond clair). */
  studio?: 'dark' | 'light';
  /** Retourne la scène horizontalement (pages de droite à gauche). */
  mirror?: boolean;
  /** Inclinaison maximale vers le pointeur de la souris, en degrés (0 : aucune). Ignorée sur écran tactile et en animations réduites. */
  tilt?: number;
  className?: string;
  /** Affiché à la place de la scène quand WebGL n'est pas disponible. */
  fallback?: ReactNode;
}) {
  // Inconnu au rendu du serveur (null), puis détecté une fois dans le navigateur.
  const webgl = useSyncExternalStore<boolean | null>(noSubscription, hasWebgl, () => null);
  const [ready, setReady] = useState(false);
  // `?quality=low` force le rendu simplifié, `?quality=high` l'interdit (essais et captures), comme au configurateur.
  const forced = useMemo(() => (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('quality') : null), []);
  const [lowQuality, setLowQuality] = useState(forced === 'low');
  const reduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const cast = useMemo<StageActor[]>(() => actors ?? [{ id: 'bijou', keys: keys ?? [] }], [actors, keys]);
  const invalidateRef = useRef<() => void>(() => {});
  const onChange = useMemo(() => () => invalidateRef.current(), []);
  const targets = useScrollTargets(cast, mirror, reduced, onChange);
  const pointer = useRef({ x: 0, y: 0, tilt: 0 });

  useEffect(() => {
    if (!tilt || reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    pointer.current.tilt = tilt;
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      invalidateRef.current();
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [tilt, reduced]);

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
        <PerformanceMonitor bounds={() => [24, 50]} iterations={8} threshold={0.8} onDecline={() => forced !== 'high' && setLowQuality(true)} />
        <Suspense fallback={null}>
          <Scene url={url} actors={cast} targets={targets} pointer={pointer} reduced={reduced} lowQuality={lowQuality} tone={studio} onReady={() => setReady(true)} />
        </Suspense>
      </Canvas>
    </div>
  );
}
