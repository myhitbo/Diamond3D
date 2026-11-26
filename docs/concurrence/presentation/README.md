# Présentation de l'étude de concurrence (PDF)

Un PDF de 24 pages au format A5 debout (lisible sur un téléphone sans zoom), pour partager l'étude avec des collègues : les huit constats, les captures commentées des sites visités, nos avantages, ce que l'étude a déjà changé sur le site, et qui fait quoi avant le lancement en Israël. Le PDF est balisé (lecteurs d'écran), porte un signet par page et des liens internes.

## Ce qui est dans le dépôt, ce qui n'y est pas

| Fichier | Rôle | Dans le dépôt |
|---|---|---|
| `etude.html` | texte et structure des 24 pages | oui |
| `style.css` | mise en page (identité du site : noir, ivoire, or ; Bodoni Moda et Jost) | oui |
| `build.mjs` | fabrique le PDF avec Chromium (Playwright), contrôle les débordements | oui |
| `images.json` | liste des images : site, pays, adresse, date, fichier d'origine, recadrage | oui |
| `crop.py` | recadre les captures d'origine vers `img/` | oui |
| `signets.py` | pose les signets (un par page) et les métadonnées du PDF ; demande `pypdf` | oui |
| `img/`, `fonts/`, `dist/` | captures recadrées, polices téléchargées, PDF et aperçus | **non** (`.gitignore`) |

Le dépôt est public : **les captures des sites concurrents et le PDF n'y sont pas versionnés**. Le PDF se partage de la main à la main ; les captures d'origine restent dans le dossier de travail de la session qui les a prises (`audit/`, `fresh/`, `own/`).

## Refaire le PDF

```sh
# 1. Images : à partir d'un dossier qui contient audit/, fresh/ et own/ (voir images.json)
python3 docs/concurrence/presentation/crop.py <dossier_des_captures>

# 2. PDF (et, avec --apercus, une image par page dans dist/pages/)
CHROMIUM_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome \
  node docs/concurrence/presentation/build.mjs --apercus
```

- Sortie : `dist/JR-Diamond_Etude-de-concurrence_2026-11.pdf`.
- Le script télécharge les polices (Google Fonts, licence OFL) au premier passage, pose les espaces insécables de la typographie française, signale toute image manquante et toute page dont le contenu dépasse. Il doit finir par « aucune page ne dépasse ».
- Après un changement, relire les aperçus page par page : le contrôle automatique ne voit ni un repère mal placé sur une capture, ni un texte qui en recouvre un autre.

## Règles suivies

- **Chiffres** : ils viennent de `../SYNTHESE.md` et des deux comparaisons vérifiées du 26/11. Toute correction de la synthèse se reporte ici.
- **Captures de sites tiers** : seulement des pages que `robots.txt` autorise (groupes « * » et agents Claude, domaine voisin compris), et seulement des sites dont ni `agents.md` ni `llms.txt` n'exigent une identification des agents (contrôle du 26/11/2026, `../audit/AGENTS_MD_2026-11-26.md`). Chaque capture porte le nom du site, son pays et sa date.
- **Repères sur les captures** (`.mark`) : positions en pourcentage de l'image recadrée ; une pastille numérotée renvoie à la légende, aucune étiquette ne recouvre le contenu.
- **Forums** : citations de 25 mots au plus, traduites, sans pseudonyme.
- **Graphiques** : une seule teinte, valeurs écrites à l'encre du texte, jamais la couleur seule pour porter un état (les pastilles « Fait », « À faire », « Atelier » ont chacune leur forme et leur mot).
- **Images de la bague** : rendus 3D du modèle de l'atelier (`public/images/rendus/`), légendés « pas une photo ».
