// Convertit les rendus PNG (transparents) de render_ring.py en WebP pour le site, avec la transparence.
// Usage : node scripts/render/to-webp.mjs <dossier des PNG> [dossier de sortie = public/images/rendus]
// Nom de sortie : ring-001-<vue>.webp (vues : hero, marquise-detail, solitaire, or-jaune, or-blanc, or-rose, platine).
import { readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const [src, out = 'public/images/rendus'] = process.argv.slice(2);
if (!src) throw new Error('Dossier des PNG manquant');
for (const f of readdirSync(src).filter((x) => x.endsWith('.png'))) {
  const file = join(out, `ring-001-${basename(f, '.png')}.webp`);
  const info = await sharp(join(src, f)).webp({ quality: 86, alphaQuality: 90, effort: 6 }).toFile(file);
  console.log(`${file} : ${info.width} × ${info.height}, ${Math.round(info.size / 1024)} Ko`);
}
