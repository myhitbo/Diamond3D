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
