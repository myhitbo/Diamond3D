import * as THREE from 'three';

/**
 * Environnement de studio procédural (HDR, équirectangulaire), généré localement : aucun téléchargement, aucune licence
 * d'image tierce. Il imite un studio de photographie de joaillerie : un studio sombre et de grandes boîtes à lumière
 * dégradées. Le métal poli ne montre que ce qu'il reflète : sur un fond clair uniforme il paraît
 * mat et « en plastique » ; c'est l'alternance de noir et de lumières dégradées qui dessine les rondeurs et les reflets.
 *
 * Repère : longitude = atan2(z, x) en degrés (convention de three.js pour une carte équirectangulaire), latitude = hauteur.
 * La caméra de la vue 3/4 est vers la longitude 44° : la lumière principale est placée de ce côté, derrière l'observateur.
 */
type Light = {
  lon: number;
  lat: number;
  /** Largeur et hauteur en degrés. */
  w: number;
  h: number;
  intensity: number;
  /** Part du bord qui s'estompe (0 : bord net, 1 : dégradé jusqu'au centre). */
  feather: number;
  /** Dégradé vertical dans la boîte (0 : uniforme ; 1 : du plein en haut à zéro en bas). */
  gradient?: number;
  warm?: boolean;
};

// Éclairage « doux » (choisi par le propriétaire le 20/11 : l'éclairage précédent, à bandes fines et points vifs, donnait
// « trop de reflets ») : de grandes boîtes dégradées seulement, un fond moins noir.
const STUDIO: Light[] = [
  { lon: 40, lat: 32, w: 130, h: 70, intensity: 6.5, feather: 0.8, gradient: 0.45 }, // principale, derrière l'observateur
  { lon: 0, lat: 80, w: 360, h: 30, intensity: 3.5, feather: 0.9 }, // plafond
  { lon: -70, lat: 12, w: 50, h: 80, intensity: 4.5, feather: 0.85 }, // côté gauche
  { lon: 130, lat: 12, w: 45, h: 80, intensity: 4.2, feather: 0.85 }, // côté droit
  { lon: -140, lat: 22, w: 110, h: 45, intensity: 3.2, feather: 0.8, warm: true }, // contre-jour chaud
  { lon: 60, lat: -14, w: 150, h: 22, intensity: 2, feather: 0.9 }, // réflecteur bas
];

/**
 * Variante « pierres » : mêmes lumières, plus de nombreuses bandes fines. C'est la technique des photographes de diamants
 * (contraste noir et blanc) : une pierre qui réfracte un fond uniforme paraît grise et terne.
 */
const GEM_STRIPS: Light[] = Array.from({ length: 22 }, (_, i) => ({
  lon: -180 + i * (360 / 22) + (i % 2) * 6,
  lat: -25 + ((i * 37) % 80),
  w: 3 + (i % 3) * 3,
  h: 24 + ((i * 13) % 44),
  intensity: 12 + (i % 4) * 5,
  feather: 0.25,
}));

const smoothstep = (e0: number, e1: number, x: number) => {
  const t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1);
  return t * t * (3 - 2 * t);
};

/**
 * Studio clair (pages à fond clair) : une tente de lumière, donc un fond lumineux, les mêmes grandes boîtes, et des « drapeaux »
 * noirs (les cartons noirs des photographes) qui dessinent les bords du métal. Sans eux, un métal poli dans une tente blanche
 * est uniformément clair et perd son volume.
 */
const FLAGS: { lon: number; lat: number; w: number; h: number; strength: number }[] = [
  { lon: -105, lat: 5, w: 30, h: 130, strength: 0.92 },
  { lon: 165, lat: 0, w: 40, h: 120, strength: 0.9 },
  { lon: 95, lat: -30, w: 70, h: 36, strength: 0.8 },
  { lon: 0, lat: 28, w: 16, h: 70, strength: 0.75 },
  { lon: -40, lat: -40, w: 60, h: 30, strength: 0.7 },
];

export function createStudioEnvironment(width = 1024, variant: 'metal' | 'gem' = 'metal', tone: 'dark' | 'light' = 'dark'): THREE.DataTexture {
  const lights = variant === 'gem' ? [...STUDIO, ...GEM_STRIPS] : STUDIO;
  // Les pierres gardent le studio sombre à bandes dans les deux cas : c'est le contraste qui les fait briller.
  const light = tone === 'light' && variant === 'metal';
  const height = width / 2;
  // Demi-flottants : filtrage linéaire garanti en WebGL2, y compris sur iOS (le Float32 ne l'est pas).
  const data = new Uint16Array(width * height * 4);
  const h = THREE.DataUtils.toHalfFloat;
  for (let y = 0; y < height; y++) {
    // Ligne 0 = bas de la texture (v = 0) = sol ; dernière ligne = zénith.
    const lat = -90 + (y / (height - 1)) * 180;
    // Fond presque noir, sol à peine plus clair (le bijou s'y reflète par-dessous) et fine ligne d'horizon.
    const floor = lat < 0 ? 0.16 * smoothstep(0, -40, lat) : 0;
    const horizon = 0.12 * Math.exp(-((lat / 5) ** 2));
    const sinLat = Math.sin((lat * Math.PI) / 180);
    // Tente claire : lumineuse au zénith, nettement plus sombre sous l'horizon (le métal garde des ombres).
    // Pierres sur page claire : un fond de studio gris clair au lieu du noir (elles restent contrastées par les bandes).
    const gemLift = tone === 'light' && variant === 'gem' ? 0.3 + 0.2 * Math.max(sinLat, 0) : 0;
    const base = light ? 0.62 + 0.5 * Math.max(sinLat, 0) - 0.42 * Math.max(-sinLat, 0) : 0.05 + floor + horizon + gemLift;
    for (let x = 0; x < width; x++) {
      const lon = (x / width) * 360 - 180;
      let r = base;
      let g = base * 0.97;
      let b = base * 0.92;
      for (const s of lights) {
        let dl = Math.abs(lon - s.lon);
        if (dl > 180) dl = 360 - dl;
        const ax = dl / (s.w / 2);
        const ay = Math.abs(lat - s.lat) / (s.h / 2);
        if (ax >= 1 || ay >= 1) continue;
        let k = s.intensity * smoothstep(1, 1 - s.feather, ax) * smoothstep(1, 1 - s.feather, ay);
        if (s.gradient) k *= 1 - s.gradient * (0.5 - (0.5 * (lat - s.lat)) / (s.h / 2));
        r += k;
        g += k * (s.warm ? 0.88 : 0.985);
        b += k * (s.warm ? 0.72 : 0.96);
      }
      if (light) {
        let keep = 1;
        for (const f of FLAGS) {
          let dl = Math.abs(lon - f.lon);
          if (dl > 180) dl = 360 - dl;
          const ax = dl / (f.w / 2);
          const ay = Math.abs(lat - f.lat) / (f.h / 2);
          if (ax >= 1 || ay >= 1) continue;
          keep *= 1 - f.strength * smoothstep(1, 0.55, ax) * smoothstep(1, 0.55, ay);
        }
        r *= keep;
        g *= keep;
        b *= keep;
      }
      if (variant === 'gem' && lat > 50) {
        // Couronne segmentée au zénith (comme un éclairage annulaire) : vue de dessus, la pierre renvoie surtout la lumière
        // située derrière l'observateur.
        const seg = Math.sin((lon * 14 * Math.PI) / 180) > 0.2 ? 1 : 0;
        const k = seg * 9 * smoothstep(50, 58, lat);
        r += k;
        g += k * 0.98;
        b += k * 0.95;
      }
      const i = (y * width + x) * 4;
      data[i] = h(r);
      data[i + 1] = h(g);
      data[i + 2] = h(b);
      data[i + 3] = h(1);
    }
  }
  const tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.LinearSRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}
