# Historique

## 0.1.1 — 2026-11-04

- Fichiers CAO de ring-001 versionnés dans le dépôt privé (`cad/originals/`), modifiables. Une empreinte différente de la recette ne bloque plus la conversion : elle est signalée et enregistrée.
- `npm run preview:build` : préversion autonome publiable sur claude.ai (page unique, modèle intégré).

## 0.1.0 — 2026-10-20 — Prototype technique (phase 2)

- Pipeline CAO → web : extraction du `.3dm` sans Rhino (maillages de rendu enregistrés), séparation des deux bagues par recette, recoupement avec le STL, métadonnées des pierres, simplification mesurée du métal, compression meshopt.
- Modèle pilote `ring-001` : GLB de 191 Ko, 27 720 triangles, écart max 0,021 mm.
- Configurateur piloté par des données : compositions, métaux, emplacements de pierre avec variantes et formes indisponibles déclarées, origine du diamant, prix « sur devis » imposé par le schéma.
- Scène 3D : React Three Fiber, rendu à la demande, studio procédural, diamants par réfraction en lancer de rayons (scène en mm), repli qualité réduite, vues prédéfinies, gestes tactiles.
- Interface FR/EN, ivoire, mobile d'abord (scène fixe en haut, options dessous).
- Validateur de modèles, tests unitaires, tests du pipeline, tests navigateur ordinateur et mobile.
