import * as THREE from 'three';

/**
 * Environnement de studio procédural (HDR, équirectangulaire), généré localement :
 * aucun téléchargement, aucune licence d'image tierce. Il imite un studio photo de
 * joaillerie : fond clair et chaud, grandes boîtes à lumière douces, quelques bandes
 * fines pour les reflets nets sur le métal et les pierres.
 */
type Softbox = { lon: number; lat: number; w: number; h: number; intensity: number; warm?: boolean };

const SOFTBOXES: Softbox[] = [
  { lon: -40, lat: 35, w: 50, h: 30, intensity: 7 }, // principale, haut gauche
  { lon: 60, lat: 25, w: 35, h: 45, intensity: 4.5 }, // remplissage, droite
  { lon: 170, lat: 30, w: 60, h: 20, intensity: 3, warm: true }, // contre-jour
  { lon: 0, lat: 80, w: 360, h: 12, intensity: 3.5 }, // plafond
  { lon: -110, lat: 5, w: 6, h: 70, intensity: 9 }, // bande verticale fine
  { lon: 110, lat: 0, w: 5, h: 60, intensity: 7 }, // bande verticale fine
  { lon: 20, lat: -10, w: 80, h: 6, intensity: 2.5 }, // réflecteur bas
];

const smooth = (edge: number, x: number) => {
  const t = Math.min(Math.max(x / edge, 0), 1);
  return t * t * (3 - 2 * t);
};

/**
 * Variante « pierres » : fond sombre et bandes lumineuses nombreuses. C'est la technique
 * des photographes de diamants (contraste noir et blanc) : sans contraste, une pierre
 * réfractant un fond uniforme paraît grise et terne.
 */
const GEM_STRIPS: Softbox[] = Array.from({ length: 18 }, (_, i) => ({
  lon: -180 + i * (360 / 18) + (i % 2) * 7,
  lat: -20 + ((i * 37) % 70),
  w: 4 + (i % 3) * 3,
  h: 30 + ((i * 13) % 40),
  intensity: 10 + (i % 4) * 4,
}));

export function createStudioEnvironment(width = 512, variant: 'metal' | 'gem' = 'metal'): THREE.DataTexture {
  const boxes = variant === 'gem' ? [...SOFTBOXES, ...GEM_STRIPS] : SOFTBOXES;
  const dim = variant === 'gem' ? 0.5 : 1;
  const height = width / 2;
  // Demi-flottants : filtrage linéaire garanti en WebGL2, y compris sur iOS (le Float32 ne l'est pas).
  const data = new Uint16Array(width * height * 4);
  const h = THREE.DataUtils.toHalfFloat;
  for (let y = 0; y < height; y++) {
    // Ligne 0 = bas de la texture (v = 0) = sol ; dernière ligne = zénith.
    const lat = -90 + (y / (height - 1)) * 180;
    // Fond : ivoire chaud au-dessus, plus sombre sous l'horizon pour donner du contraste au métal.
    const up = Math.max(Math.sin((lat * Math.PI) / 180), 0);
    const down = Math.max(-Math.sin((lat * Math.PI) / 180), 0);
    const base = 0.55 + 0.35 * up - 0.4 * down;
    for (let x = 0; x < width; x++) {
      const lon = (x / width) * 360 - 180;
      let r = base * dim;
      let g = base * dim * 0.96;
      let b = base * dim * 0.9;
      for (const s of boxes) {
        let dl = Math.abs(lon - s.lon);
        if (dl > 180) dl = 360 - dl;
        const dx = s.w / 2 - dl;
        const dy = s.h / 2 - Math.abs(lat - s.lat);
        if (dx <= 0 || dy <= 0) continue;
        const k = s.intensity * smooth(Math.min(4, s.w / 4), dx) * smooth(Math.min(4, s.h / 4), dy);
        r += k;
        g += k * (s.warm ? 0.9 : 0.98);
        b += k * (s.warm ? 0.78 : 0.95);
      }
      if (variant === 'gem' && lat > 50) {
        // Couronne segmentée au zénith (comme un éclairage annulaire) : vue de dessus, la pierre
        // renvoie surtout la lumière située derrière l'observateur.
        const seg = Math.sin((lon * 14 * Math.PI) / 180) > 0.2 ? 1 : 0;
        const k = seg * 8 * smooth(6, lat - 50);
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
