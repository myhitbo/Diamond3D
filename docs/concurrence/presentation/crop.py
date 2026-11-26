#!/usr/bin/env python3
"""Recadre les images listées dans images.json vers img/<id>.jpg.
Usage : python3 crop.py <dossier_des_captures> [id...]   (le dossier contient audit/, fresh/ et own/ ; « repo: » = racine du dépôt)"""
import json, os, sys
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
here = os.path.dirname(os.path.abspath(__file__)); repo = os.path.abspath(os.path.join(here, '..', '..', '..'))
src_root = sys.argv[1]; only = set(sys.argv[2:])
os.makedirs(os.path.join(here, 'img'), exist_ok=True)
for im in json.load(open(os.path.join(here, 'images.json')))['images']:
    if only and im['id'] not in only: continue
    path = os.path.join(repo, im['src'][5:]) if im['src'].startswith('repo:') else os.path.join(src_root, im['src'])
    if not os.path.exists(path): print('MANQUE', im['id'], path); continue
    img = Image.open(path)
    if im.get('bg'):  # image à fond transparent : posée sur la couleur de la page
        img = img.convert('RGBA'); base = Image.new('RGBA', img.size, im['bg']); base.alpha_composite(img); img = base
    img = img.convert('RGB'); x, y, w, h = im['crop']
    w = w or img.width - x; h = h or img.height - y
    out = img.crop((x, y, min(img.width, x + w), min(img.height, y + h)))
    maxw = 1600 if 'desktop' in im['id'] else 1300
    if out.width > maxw: out = out.resize((maxw, round(out.height * maxw / out.width)), Image.LANCZOS)
    out.save(os.path.join(here, 'img', im['id'] + '.jpg'), quality=86, optimize=True)
    print(im['id'], out.size)
