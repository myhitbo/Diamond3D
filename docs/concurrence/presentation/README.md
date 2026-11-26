# Présentation de l'étude de concurrence (PDF)

Un PDF de 41 pages au format A5 debout (lisible sur un téléphone sans zoom), pour partager l'étude avec des collègues. Il compare JR Diamond aux joailliers en ligne de **trois marchés : États-Unis, France, Israël** (245 des 371 sites de l'étude ; demande du propriétaire du 26/11). L'Europe hors France et l'Australie n'y figurent pas : elles restent dans `../SYNTHESE.md` et dans `../audit/`.

1. **Synthèse** (15 pages) : l'essentiel, la méthode, le tableau de bord « JR Diamond face aux trois marchés », huit constats avec captures commentées, les forums, l'alliance de kiddouchin.
2. **Site par site** (13 pages) : pour Israël (21 sites), la France (8) et les vendeurs nationaux américains (12), une page de marché, un tableau de dix critères et une fiche par site. Un site sans capture est décrit comme les autres ; la raison de l'absence d'image est écrite à sa place.
3. **Conclusions** (5 pages) : nos avantages, ce qu'il ne faut pas copier, ce que l'étude a déjà changé sur le site, qui fait quoi, les limites.
4. **Annexe** (7 pages) : les 204 joailliers des 50 États américains, un par un. Puis la page des sources.

Le PDF est balisé (lecteurs d'écran), porte un signet par page et des liens internes.

## Ce qui est dans le dépôt, ce qui n'y est pas

| Fichier | Rôle | Dans le dépôt |
|---|---|---|
| `etude.html` | texte des pages rédigées à la main (synthèse, pages de marché, conclusions) | oui |
| `extraire.py` | tire des synthèses d'audit la liste des sites des trois marchés → `donnees/sites.json` | oui |
| `donnees/sites.json` | 246 lignes : Israël 21, France 9 (dont 1 bloqué), États-Unis 216 ; statut, visuel, prix relevé, rapport, site bloqué, site qui demande une identification | oui |
| `pages_sites.py` | tableaux, fiches et annexe (`.fragments/`) ; contient les dix critères et la phrase « à retenir » de chaque site | oui |
| `style.css` | mise en page (identité du site : noir, ivoire, or ; Bodoni Moda et Jost) | oui |
| `build.mjs` | assemble, numérote, met l'annexe en colonnes, contrôle les débordements, imprime le PDF avec Chromium (Playwright) | oui |
| `signets.py` | pose les signets (un par page) et les métadonnées du PDF ; demande `pypdf` | oui |
| `images.json`, `crop.py` | liste des images (site, pays, adresse, date, fichier d'origine, recadrage) et recadrage vers `img/` | oui |
| `img/`, `fonts/`, `dist/`, `.fragments/` | captures recadrées, polices téléchargées, PDF et aperçus, pages fabriquées | **non** (`.gitignore`) |

Le dépôt est public : **les captures des sites concurrents et le PDF n'y sont pas versionnés**. Le PDF se partage de la main à la main ; les captures d'origine restent dans le dossier de travail de la session qui les a prises (`audit/`, `fresh/`, `own/`).

## Refaire le PDF

```sh
# 1. Données : seulement si une synthèse d'audit a changé
python3 docs/concurrence/presentation/extraire.py

# 2. Images : à partir d'un dossier qui contient audit/, fresh/ et own/ (voir images.json)
python3 docs/concurrence/presentation/crop.py <dossier_des_captures>

# 3. PDF (--apercus : une image par page dans dist/pages/ ; --garder : garde la page assemblée pour une relecture du texte)
CHROMIUM_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome \
  node docs/concurrence/presentation/build.mjs --apercus
```

- Sortie : `dist/JR-Diamond_Etude-de-concurrence_2026-11.pdf`.
- `build.mjs` lance `pages_sites.py`, qui vérifie que les totaux des tableaux recoupent la synthèse (Israël : 16, 7, 2, 1, 16 + 1, 10, 10, 16, 14, 8 ; France : 7, 5, 0, 2, 5, 5, 8, 8, 4, 5) et s'arrête sinon.
- Dans `etude.html` : `<!--@inclure nom-->` insère `.fragments/nom.html` ; `data-ancre="x"` nomme une page ; `{{page:x}}` et `href="#@x"` y renvoient, avec le bon numéro.
- Le script doit finir par « aucune page ne dépasse ». Relire ensuite les aperçus page par page : le contrôle automatique ne voit ni un repère mal placé sur une capture, ni un texte qui en recouvre un autre.

## Règles suivies

- **Chiffres** : ils viennent de `../SYNTHESE.md`, des deux comparaisons vérifiées du 26/11 et des synthèses d'audit (`../audit/il/`, `../audit/eu/france/`, `../audit/us/`). Le texte a été relu deux fois, affirmation par affirmation, contre ces sources ; toute correction de la synthèse se reporte ici, et inversement.
- **Conventions** : « sur 12 » = les 12 vendeurs nationaux américains (7 visités, 5 lus sans visite) ; « sur 8 » = France ; « sur 21 » = Israël (trois synthèses additionnées, relevé le plus récent quand un site a été vu deux fois).
- **Captures de sites tiers** : seulement des pages que `robots.txt` autorise (groupes « * » et agents Claude, domaine voisin compris), et seulement des sites dont ni `agents.md` ni `llms.txt` n'exigent une identification des agents (relevé du 26/11/2026, `../audit/AGENTS_MD_2026-11-26.md`). Aucune acceptation de cookies pour dégager une page : si le panneau n'offre pas de refus, pas de capture. Chaque capture porte le nom du site, son pays et sa date.
- **Repères sur les captures** (`.mark`) : positions en pourcentage de l'image recadrée ; une pastille numérotée renvoie à la légende, aucune étiquette ne recouvre le contenu.
- **Forums** : citations de 25 mots au plus, sans pseudonyme, deux par marché.
- **Graphiques et tableaux** : une seule teinte ; valeurs écrites à l'encre du texte ; un état n'est jamais porté par la couleur seule (disque plein, demi-disque, tiret ; pastilles « Fait », « À faire », « Atelier » avec leur mot).
- **Images de la bague** : rendus 3D du modèle de l'atelier (`public/images/rendus/`), légendés « pas une photo ».
