# Historique

## 0.1.2 — 2026-11-04 — Or 14 carats, libellés, moteur de prix

- Or 14 carats jaune, blanc et rose. Le métal se choisit en deux temps : couleur, puis titre (14 ou 18 carats ; aucun pour le platine).
- Disponibilité des métaux confirmée par l'atelier : la mention « à confirmer » disparaît.
- Diamant « Synthétique » (et non « Laboratoire ») en français, avec la précision qu'il ne s'agit pas d'une imitation.
- Poids du métal affiché « ≈ … g (± 5 %) » ; délai de fabrication « 14 jours ouvrés ».
- Tailles des pierres avec une virgule décimale en français.
- Moteur de prix indicatif en ₪ TTC (non branché).

## 0.1.1 — 2026-11-03 — Retouche web de ring-001

- Demande de l'atelier : griffes rabattues et « 8 » supprimés, pour le web uniquement.
- `pipeline/web_retouch.py` + `scripts/models/apply-web-edits.mjs` : 48 griffes ajustées, 452 triangles de plaques supprimés, 88 triangles de bouchons ajoutés. Étape intégrée à `models:extract` ; `models:retouch` pour le modèle publié.
- GLB : 194 272 octets, 27 356 triangles. Test de non-régression `pipeline/tests/test_web_retouch.py`. Suite navigateur complète : 28/28.
- Correction du rapport de phase 2 : les griffes dépassaient de 0,25 à 0,5 mm, pas de 4 mm.

## 0.1.0 — 2026-10-20 — Prototype technique (phase 2)

- Pipeline CAO → web : extraction du `.3dm` sans Rhino (maillages de rendu enregistrés), séparation des deux bagues par recette, recoupement avec le STL, métadonnées des pierres, simplification mesurée du métal, compression meshopt.
- Modèle pilote `ring-001` : GLB de 191 Ko, 27 720 triangles, écart max 0,021 mm.
- Configurateur piloté par des données : compositions, métaux, emplacements de pierre avec variantes et formes indisponibles déclarées, origine du diamant, prix « sur devis » imposé par le schéma.
- Scène 3D : React Three Fiber, rendu à la demande, studio procédural, diamants par réfraction en lancer de rayons (scène en mm), repli qualité réduite, vues prédéfinies, gestes tactiles.
- Interface FR/EN, ivoire, mobile d'abord (scène fixe en haut, options dessous).
- Validateur de modèles, tests unitaires, tests du pipeline, tests navigateur ordinateur et mobile.
