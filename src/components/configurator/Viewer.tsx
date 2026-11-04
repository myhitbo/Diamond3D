'use client';

import { Component, Suspense, useEffect, useLayoutEffect, useMemo, useRef, type ReactNode } from 'react';
import * as THREE from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { CameraControls, ContactShadows, Environment, MeshRefractionMaterial, PerformanceMonitor, useGLTF } from '@react-three/drei';
import { createStudioEnvironment } from './studioEnvironment';
import { instrumentRenderer, markReady, setProbe } from './debugProbe';

export type ViewName = 'hero' | 'top' | 'side' | 'front';
export type Quality = 'high' | 'low';

/** Directions de caméra, repère glTF (Y vers le haut, axe du doigt selon Z). */
const VIEWS: Record<ViewName, [number, number, number]> = {
  hero: [0.62, 0.5, 0.6],
  top: [0, 1, 0.02],
  side: [1, 0.12, 0],
  front: [0, 0.12, 1],
};
const FOV = 28;
/**
 * La scène est rendue en millimètres (le GLB est en mètres, norme glTF). Le shader de
 * réfraction décale ses rayons de 0,001 à 0,01 unité : en mètres, cela dépasse la taille
 * d'une pierre de 1,3 mm et fausse complètement le rendu. En millimètres, c'est négligeable.
 */
const M_TO_MM = new THREE.Matrix4().makeScale(1000, 1000, 1000);
// Valeurs de CameraControls.ACTION (camera-controls) : rotation, travelling avant, gestes tactiles.
const ACTION = { NONE: 0, ROTATE: 1, DOLLY: 16, TOUCH_ROTATE: 64, TOUCH_DOLLY: 1024 } as const;

export type ViewerProps = {
  url: string;
  nodes: { name: string; kind: 'metal' | 'gem' }[];
  visible: string[];
  metal: { color: string; roughness: number };
  view: { name: ViewName; nonce: number };
  quality: Quality;
  debug?: boolean;
  label: string;
  onReady?: () => void;
  onQualityDrop?: () => void;
};

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
  return g;
}

function useStudio() {
  return useMemo(() => ({ metal: createStudioEnvironment(512, 'metal'), gem: createStudioEnvironment(512, 'gem') }), []);
}

function Model({ url, nodes, visible, metal, quality, debug, onReady, env }: ViewerProps & { env: THREE.Texture }) {
  const gltf = useGLTF(url);
  const invalidate = useThree((s) => s.invalidate);
  const gl = useThree((s) => s.gl);

  const metalMat = useMemo(
    () => new THREE.MeshPhysicalMaterial({ metalness: 1, roughness: 0.13, envMapIntensity: 1.15 }),
    [],
  );
  // Rendu simplifié des pierres (appareils lents) : un miroir à facettes qui reflète le studio.
  // Un matériau blanc diffus donnait des taches blanches, confondues avec le fond crème
  // (« les diamants disparaissent »). Ici, les bandes sombres du studio dessinent les facettes.
  const gemFallback = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 1, roughness: 0.02, envMap: env, envMapIntensity: 1.25, flatShading: true }),
    [env],
  );

  useEffect(() => {
    metalMat.setValues({ color: new THREE.Color(metal.color), roughness: metal.roughness });
    invalidate();
  }, [metal.color, metal.roughness, metalMat, invalidate]);

  // Centre l'ensemble à l'origine une fois pour toutes : la caméra tourne autour du bijou.
  const offset = useMemo(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    return box.getCenter(new THREE.Vector3()).multiplyScalar(-1000);
  }, [gltf.scene]);

  const meshes = useMemo(() => {
    gltf.scene.updateMatrixWorld(true);
    return nodes.map((n) => {
      const obj = gltf.scene.getObjectByName(n.name) as THREE.Mesh | undefined;
      if (!obj?.isMesh) throw new Error(`Nœud absent du modèle 3D : ${n.name}`);
      // La matrice du nœud porte la déquantification (KHR_mesh_quantization) : à conserver.
      const toMm = M_TO_MM.clone().multiply(obj.matrixWorld);
      if (n.kind === 'metal') return { ...n, geometry: obj.geometry, matrix: toMm };
      // Pierres : le lancer de rayons de MeshRefractionMaterial exige des positions flottantes
      // dans le repère de l'objet. On convertit et on intègre la transformation (≈ 5 000 triangles).
      return { ...n, geometry: bakeToFloat(obj.geometry, toMm), matrix: new THREE.Matrix4() };
    });
  }, [gltf.scene, nodes]);

  const visibleSet = useMemo(() => new Set(visible), [visible]);
  useEffect(() => invalidate(), [visibleSet, invalidate]);

  useLayoutEffect(() => {
    if (debug) setProbe({ visibleNodes: () => [...visibleSet].sort(), metalColor: () => `#${metalMat.color.getHexString()}` });
  }, [debug, visibleSet, metalMat]);

  useEffect(() => {
    // Premier rendu effectif : deux images après le montage, pour inclure la compilation des shaders.
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        if (debug) markReady();
        onReady?.();
      });
    });
    invalidate();
    return () => cancelAnimationFrame(raf);
  }, [gl, onReady, debug, invalidate]);

  return (
    <group position={offset}>
      {meshes.map((m) =>
        m.kind === 'metal' ? (
          <mesh key={m.name} name={m.name} geometry={m.geometry} matrix={m.matrix} matrixAutoUpdate={false} material={metalMat} visible={visibleSet.has(m.name)} />
        ) : quality === 'high' ? (
          <mesh key={m.name} name={m.name} geometry={m.geometry} matrix={m.matrix} matrixAutoUpdate={false} visible={visibleSet.has(m.name)}>
            <MeshRefractionMaterial envMap={env} bounces={3} ior={2.42} fresnel={0.9} aberrationStrength={0.012} fastChroma toneMapped={false} />
          </mesh>
        ) : (
          <mesh key={m.name} name={m.name} geometry={m.geometry} matrix={m.matrix} matrixAutoUpdate={false} material={gemFallback} visible={visibleSet.has(m.name)} />
        ),
      )}
    </group>
  );
}

function Rig({ view, debug, radius }: { view: ViewerProps['view']; debug?: boolean; radius: number }) {
  const ref = useRef<CameraControls>(null);
  const distance = radius / Math.sin(((FOV / 2) * Math.PI) / 180);
  const reduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const d = new THREE.Vector3(...VIEWS[view.name]).normalize().multiplyScalar(distance);
    void c.setLookAt(d.x, d.y, d.z, 0, 0, 0, view.nonce > 0 && !reduced);
  }, [view, distance, reduced]);

  useEffect(() => {
    if (!debug) return;
    setProbe({
      orbit: (deg: number) => void ref.current?.rotate((deg * Math.PI) / 180, 0, false),
      cameraDistance: () => ref.current?.distance ?? NaN,
    });
  }, [debug]);

  return (
    <CameraControls
      ref={ref}
      makeDefault
      minDistance={distance * 0.45}
      maxDistance={distance * 2}
      minPolarAngle={0.05}
      maxPolarAngle={Math.PI - 0.05}
      smoothTime={0.3}
      draggingSmoothTime={0.08}
      truckSpeed={0}
      mouseButtons={{ left: ACTION.ROTATE, middle: ACTION.DOLLY, right: ACTION.NONE, wheel: ACTION.DOLLY }}
      touches={{ one: ACTION.TOUCH_ROTATE, two: ACTION.TOUCH_DOLLY, three: ACTION.NONE }}
    />
  );
}

function DebugInfo({ debug }: { debug?: boolean }) {
  const gl = useThree((s) => s.gl);
  useLayoutEffect(() => (debug ? instrumentRenderer(gl) : undefined), [gl, debug]);
  return null;
}

class LoadBoundary extends Component<{ fallback: (retry: () => void) => ReactNode; children: ReactNode; url: string }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    console.error('Échec du chargement du modèle 3D', error);
  }
  retry = () => {
    useGLTF.clear(this.props.url);
    this.setState({ failed: false });
  };
  render() {
    return this.state.failed ? this.props.fallback(this.retry) : this.props.children;
  }
}

export default function Viewer(props: ViewerProps & { errorFallback: (retry: () => void) => ReactNode; radiusMm: number; shadowYMm: number }) {
  const env = useStudio();
  const shadowKey = props.visible.join('|');

  return (
    <LoadBoundary url={props.url} fallback={props.errorFallback}>
      <Canvas
        frameloop="demand"
        dpr={props.quality === 'high' ? [1, 2] : [1, 1.25]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: THREE.NeutralToneMapping, preserveDrawingBuffer: !!props.debug }}
        camera={{ fov: FOV, near: 2, far: 1000, position: [50, 40, 50] }}
        aria-label={props.label}
        role="img"
      >
        {/* Ne bascule en rendu simplifié que si l'appareil reste nettement sous 24 images/s. */}
        <PerformanceMonitor bounds={() => [24, 50]} iterations={8} threshold={0.8} onDecline={props.onQualityDrop} />
        <Environment map={env.metal} environmentIntensity={1} />
        <Suspense fallback={null}>
          <Model {...props} env={env.gem} />
          <ContactShadows
            key={shadowKey}
            position={[0, props.shadowYMm, 0]}
            scale={90}
            far={30}
            blur={2.6}
            opacity={0.32}
            resolution={512}
            frames={1}
            color="#4a3b26"
          />
        </Suspense>
        <Rig view={props.view} debug={props.debug} radius={props.radiusMm} />
        <DebugInfo debug={props.debug} />
      </Canvas>
    </LoadBoundary>
  );
}
