#!/usr/bin/env python3
"""Pose les signets (un par page) et les métadonnées du PDF. Appelé par build.mjs.
Usage : python3 signets.py <fichier.pdf> <titres.json>   (titres.json : liste des titres, dans l'ordre des pages)
Chromium sait écrire des signets, mais il colle les mots aux retours de ligne des titres : on les écrit ici."""
import json, logging, sys
from pypdf import PdfReader, PdfWriter

logging.getLogger('pypdf').setLevel(logging.ERROR)  # Chromium annonce une taille de table un peu courte : sans effet

path, titles = sys.argv[1], json.load(open(sys.argv[2], encoding='utf-8'))
reader = PdfReader(path)
assert len(reader.pages) == len(titles), (len(reader.pages), len(titles))
writer = PdfWriter(clone_from=reader)
for number, title in enumerate(titles):
    writer.add_outline_item(title, number)
writer.add_metadata({
    '/Title': 'JR Diamond — Étude de concurrence, novembre 2026',
    '/Author': 'JR Diamond',
    '/Subject': '371 joailliers en ligne audités sur quatre marchés : constats, captures commentées, plan d\'action',
})
writer.write(path)
print(f'signets : {len(titles)}')
