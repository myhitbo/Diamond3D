"""Détoure le logo JR de l'atelier (or sur fond noir) : couche alpha tirée de la luminosité, couleurs dé-prémultipliées.

Le fond d'origine est noir : l'image vaut déjà alpha × couleur. On réduit donc l'image et le masque avec le même filtre,
puis on divise l'une par l'autre : aucun liseré sombre sur un fond clair.
Usage : python3 scripts/logo/detourer.py docs/atelier/logo-jr-2026-11-17.jpg <dossier de sortie> (Pillow et numpy)
Sorties : logo-jr-atelier.webp (public/images/), icon.png et apple-icon.png (src/app/), controle.png (planche de contrôle).
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

T0, T1 = 14.0, 52.0  # seuils sur le canal le plus clair : fond (bruit JPEG) → or


def smoothstep(x, a, b):
    t = np.clip((x - a) / (b - a), 0.0, 1.0)
    return t * t * (3 - 2 * t)


def cutout(src: Path):
    rgb = np.asarray(Image.open(src).convert('RGB'), dtype=np.float32)
    v = rgb.max(axis=2)
    alpha = smoothstep(v, T0, T1)
    premult = rgb * (alpha > 0)[..., None]
    ys, xs = np.where(alpha > 0.5)
    pad = int(0.02 * (ys.max() - ys.min()))
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad + 1, rgb.shape[0])
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad + 1, rgb.shape[1])
    return premult[y0:y1, x0:x1], alpha[y0:y1, x0:x1]


def resize(premult, alpha, height):
    h, w = alpha.shape
    width = round(w * height / h)
    chans = [Image.fromarray(premult[..., c], mode='F').resize((width, height), Image.LANCZOS) for c in range(3)]
    a = np.clip(np.asarray(Image.fromarray(alpha * 255.0, mode='F').resize((width, height), Image.LANCZOS)), 0, 255)
    p = np.stack([np.asarray(c) for c in chans], axis=2)
    colour = np.where(a[..., None] > 1.0, p / np.maximum(a[..., None] / 255.0, 1e-3), 0.0)
    out = np.dstack([np.clip(colour, 0, 255), a]).round().astype(np.uint8)
    return Image.fromarray(out, mode='RGBA')


def on_background(img: Image.Image, colour, pad=0.35):
    w, h = img.size
    side = round(max(w, h) * (1 + 2 * pad))
    bg = Image.new('RGBA', (side, side), colour + (255,))
    bg.alpha_composite(img, ((side - w) // 2, (side - h) // 2))
    return bg.convert('RGB')


def main(src, out):
    out = Path(out)
    out.mkdir(parents=True, exist_ok=True)
    premult, alpha = cutout(Path(src))
    print('cadre du logo :', alpha.shape[1], '×', alpha.shape[0], 'rapport largeur/hauteur %.3f' % (alpha.shape[1] / alpha.shape[0]))
    master = resize(premult, alpha, 384)
    master.save(out / 'logo-jr-atelier.webp', lossless=True, method=6)
    master.save(out / 'logo-jr-atelier.png', optimize=True)
    print('logo 384 px :', master.size, (out / 'logo-jr-atelier.webp').stat().st_size, 'o (webp),', (out / 'logo-jr-atelier.png').stat().st_size, 'o (png)')
    # Icônes : logo or sur carré noir.
    for name, size in (('icon.png', 256), ('apple-icon.png', 180)):
        mark = resize(premult, alpha, round(size * 0.66))
        on_background(mark, (14, 13, 11), pad=0.0).save(out / ('carre-' + name))
        side = size
        bg = Image.new('RGBA', (side, side), (14, 13, 11, 255))
        bg.alpha_composite(mark, ((side - mark.width) // 2, (side - mark.height) // 2))
        bg.convert('RGB').save(out / name, optimize=True)
        print(name, (out / name).stat().st_size, 'o')
    # Planche de contrôle : tailles réelles ×4 sur fond sombre et fond ivoire.
    tiles = []
    for bg in ((14, 13, 11), (247, 243, 236)):
        row = []
        for height in (24, 30, 34, 64, 160):
            small = resize(premult, alpha, height)
            tile = on_background(small, bg, pad=0.3)
            scale = 4 if height < 100 else 1
            row.append(tile.resize((tile.width * scale, tile.height * scale), Image.NEAREST))
        hmax = max(t.height for t in row)
        strip = Image.new('RGB', (sum(t.width for t in row) + 10 * (len(row) - 1), hmax), bg)
        x = 0
        for t in row:
            strip.paste(t, (x, (hmax - t.height) // 2))
            x += t.width + 10
        tiles.append(strip)
    sheet = Image.new('RGB', (max(t.width for t in tiles), sum(t.height for t in tiles)), (128, 128, 128))
    y = 0
    for t in tiles:
        sheet.paste(t, (0, y))
        y += t.height
    sheet.save(out / 'controle.png')
    print('planche :', sheet.size)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
