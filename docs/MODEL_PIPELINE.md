# Préparation des modèles 3D

## Règles

- Les fichiers de fabrication sont dans `cad/originals/`, versionnés dans le dépôt (public depuis le 15/11/2026). Le pipeline les **lit sans jamais les réécrire**. Leur empreinte SHA-256 est comparée à celle de la recette : un fichier retravaillé est signalé, converti, et son empreinte est enregistrée dans `geometry.json`.
- Le pipeline **ne crée aucune géométrie** : il réutilise les maillages de rendu que Rhino enregistre dans le `.3dm`, avec leurs normales, et les regroupe selon une recette.
- Chaque objet des calques de production doit être affecté à **exactement une** pièce, sinon l'extraction échoue.
- Les pierres ne sont **jamais simplifiées** (facettes exactes).

## Étapes (`npm run models:extract -- <id>`)

1. **Extraction** (`pipeline/extract_3dm.py`, recette `pipeline/recipes/<id>.json`)
   - lit les calques de production (ici `Metal 01` et `Gem 03`) et sélectionne les objets par calque, groupe Rhino et bloc ;
   - convertit le repère : Rhino (Z vers le haut, mm) vers glTF (Y vers le haut, m) ;
   - mesure chaque pierre dans le repère de son bloc : forme, longueur, largeur, profondeur, volume, carats estimés ;
   - recoupe chaque bague avec la coque fermée correspondante du STL de référence (écart de boîte englobante < 0,01 mm exigé) et en reprend le volume de métal ;
   - lit la taille de doigt sur la courbe « Ring Rail … ».
2. **Optimisation** (`scripts/models/optimize-glb.mjs`) : soudure des sommets, simplification du **métal seulement** (meshoptimizer, erreur relative 0,05 %, bords verrouillés), quantification (positions 16 bits, normales 12 bits), compression `EXT_meshopt_compression`.
3. **Mesure** (`pipeline/measure_deviation.py`) : écart réel entre GLB brut et GLB simplifié, par échantillonnage de 20 000 points dans les deux sens, en mm.
4. **Retouches web** (si la recette contient `webRetouch`) : `pipeline/web_retouch.py` calcule, `scripts/models/apply-web-edits.mjs` applique, sur le **modèle simplifié** (après l'étape 2), puis le résultat est recompressé.
   - griffes : l'extrémité de chaque tige qui tient une pierre est abaissée à mi-couronne et rabattue vers la pierre ;
   - plaques basses des paniers (les « 8 » vus en enfilade) : supprimées ; les bouts de tiges qu'elles masquaient reçoivent un bouchon plat ;
   - rien d'autre n'est créé ; le fichier de fabrication n'est pas touché ; le rapport `asset.json` décrit la retouche (`webRetouch`) ;
   - l'écart de l'étape 3 est mesuré avant la retouche : il décrit la simplification seule, face au fichier de fabrication.
   Pourquoi après la simplification : retoucher le GLB brut double le nombre de triangles (46 084 au lieu de 27 357, mesuré le 14/11/2026), car la simplification verrouille les bords ouverts et les sommets déplacés. Régénéré depuis `Ring.3dm` le 14/11, le modèle est équivalent à celui publié le 3/11 (écart maximal 0,001 mm).
   `npm run models:retouch -- <id>` (retouche d'un modèle publié sans le `.3dm`) ne sert plus pour ring-001.
5. **Rapports** : `src/models/<id>/geometry.json` et `src/models/<id>/asset.json`.

## Choix du niveau de simplification (ring-001)

| Erreur relative | Triangles métal | Taille GLB | Écart max mesuré |
|---|---|---|---|
| 0,02 % | 45 230 | 295 Ko | 0,011 mm |
| **0,05 % (retenu)** | **22 466** | **191 Ko** | **0,021 mm** |
| 0,1 % | 11 880 | 143 Ko | 0,037 mm |

Brut : 142 064 triangles de métal, 4,2 Mo. L'écart retenu (2 centièmes de mm) est invisible à l'écran.

## Fichier sans courbe de taille ni STL (ring-002, 26/11/2026)

Le solitaire marquise reçu de l'atelier le 17/11 n'a ni courbe « Ring Rail », ni STL de référence, et ses calques et groupes ne séparent pas l'anneau de la tête. Le script d'extraction sait désormais :

- **choisir des objets par nom ou par identifiant** : `"name": "Prong On Surface"`, `"unnamed": true`, `"ids": [...]`, `"idsNone": [...]` dans un sélecteur de recette (le fichier est figé par son empreinte, les identifiants ne bougent pas) ;
- **mesurer le volume de métal sans STL** : union booléenne des solides fermés du fichier (manifold3d), car les griffes et les galeries pénètrent le corps ; la somme brute des volumes est gardée dans `metalSolidsSumMm3` (ring-002 : 396,95 mm³ pour l'union, 404,31 mm³ en somme brute). Rien de cette union n'est exporté ;
- **mesurer la taille de doigt sur l'anneau** (`"fingerSizeFrom": { "piece": "A", "part": "metal_shank" }`) : profil intérieur par secteur d'angle, cercle des moindres carrés, points hors du cercle écartés. Contrôle : sur ring-001, la mesure redonne exactement la courbe du fichier (16,393 mm, France 51 ½). La taille française est la circonférence intérieure, arrondie à la demi-taille ;
- **lire la forme d'une pierre dans le nom de son bloc**, suffixe compris (« Diamond_Round 01 » → ronde).

L'extraction de ring-001 reste identique au fichier près (`geometry.json` inchangé). ring-002 : 90 568 triangles bruts, 39 962 sur le web, 285 Ko, écart maximal 0,030 mm.

**Retouche des grandes griffes** (`"claws"` dans `webRetouch`, ring-002, demande du propriétaire du 26/11/2026). Les six griffes de la marquise sont effilées et montent 2,5 mm au-dessus du rondiste, plus haut que la table (1,2 mm) : sur la bague finie, elles sont coupées et rabattues. Pour le web, la partie au-dessus du rondiste est ramenée à 60 % de la hauteur de la couronne (`crownFraction`). Chaque sommet garde sa place autour de l'axe de la griffe, et cet axe (un polynôme ajusté sur les tranches de la griffe) est suivi moins haut : la griffe retouchée épouse la couronne comme la griffe d'origine à la même hauteur. Rien n'est créé, seuls des sommets bougent ; le rapport `asset.json` (`webRetouch`) dit qui a demandé la retouche (`request` dans la recette). Les tiges droites des petites pierres gardent la retouche `prongs` de ring-001.

## Anneau en plusieurs polysurfaces, maillages fissurés, griffes en fil rond (ring-003, 26/11/2026)

`Bague-coeur.3dm` n'a, comme le solitaire marquise, ni courbe de taille ni STL. Il a demandé trois choses de plus :

- **anneau en quatre polysurfaces** (deux moitiés basses, deux côtés) : la recette les désigne par quatre identifiants (`ids`) ; la tête est « sans nom, sauf l'anneau », les 78 grains portent le nom Rhino `Prong` ;
- **fissures d'arête** : huit grains ont un maillage de rendu qui n'est pas fermé. Le long de l'arête commune à leurs deux faces, un bord a une arête droite, l'autre suit la courbe par des sommets intermédiaires (sommets « en T ») ; il reste une fissure de quelques microns, que la soudure des sommets ne referme pas. `close_edge_cracks` recoupe chaque arête ouverte aux sommets ouverts qui la longent (à 0,02 mm au plus) : aucun sommet n'est créé ni déplacé, et un vrai trou reste un trou (l'extraction s'arrête, comme avant). C'est fait **pour la mesure du volume seulement** : le modèle affiché garde le maillage du fichier. `geometry.json` le signale (`metalSolidsCracksClosed`: 8) ;
- **volume des pierres** : mesuré sur un maillage nettoyé (faces dégénérées ou en double retirées), comme pour le métal. Le bloc `Diamond_Heart` a des facettes en double : sans ce nettoyage, le cœur n'avait ni volume ni estimation de poids.

Les `geometry.json` de ring-001 et de ring-002 sont restés identiques à l'octet près (contrôlé le 26/11).

**Dimensions : toujours sur le maillage.** La boîte englobante d'une polysurface lue par rhino3dm est lâche : 11,1 × 11,5 mm pour le bloc du cœur, alors que son maillage fait 10 × 10 mm. Lu sur les boîtes, le cœur ferait 8,1 × 8,4 mm ; il fait 7,3 × 7,3 mm.

**Griffes en fil rond** (`"claws"`, options `weldMm` et `tipMm`). Les cinq griffes du cœur sont des fils ronds coiffés d'un embout arrondi, et non des griffes effilées comme celles de la marquise. Deux différences :

- le corps et l'embout de chaque griffe sont maillés à part (cinq pièces par griffe dans le modèle simplifié) : `weldMm` (0,005) les réunit par leurs sommets confondus avant de chercher les griffes. Sans cela, la retouche traitait chaque bande comme une griffe et déchirait le maillage ;
- tassé sur une courte hauteur comme le bout d'une griffe effilée, l'embout devenait un méplat à bord vif : `tipMm` (0,55) le descend d'un bloc, seule la tige raccourcit.

Sans ces deux options, le comportement est celui de ring-002, inchangé.

## Ajouter un nouveau modèle

1. Copier les fichiers dans `cad/originals/`.
2. Inventorier le fichier : calques, groupes, blocs de pierres. Le script d'audit de la phase 0 peut servir de base.
3. Écrire `pipeline/recipes/<id>.json` : empreinte, calques de production, pièces et sélecteurs.
4. `npm run models:extract -- <id>` : l'extraction échoue tant qu'un objet n'est pas affecté.
5. Écrire `src/models/<id>/definition.ts` : textes FR/EN, compositions, métaux, emplacements de pierre ; puis l'ajouter à `src/models/index.ts`.
6. `npm run models:validate`, contrôle visuel (`scripts/perf/screenshots.mjs`), validation par l'atelier (`workshopValidated: true`).

## Préparation à faire dans Rhino, quand c'est nécessaire

- **Maillages de rendu absents** : ouvrir le fichier, passer en affichage « Rendu », puis enregistrer. Sinon, exporter en glTF/OBJ.
- **Variantes de tête** (autres formes de pierre) : les modéliser dans le même repère que la bague, sur un calque ou dans un groupe dédié, au même point d'ancrage. La recette déclarera chaque variante comme une pièce supplémentaire.
- **Griffes** : la longueur affichée est celle du fichier. Si les griffes sont volontairement longues pour la fonte, prévoir une version « griffes coupées » pour le web.
