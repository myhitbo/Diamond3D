# Architecture

## Pile technique (validée en phase 1)

| Rôle | Choix | Remarque |
|---|---|---|
| Application | Next.js 16 (App Router), TypeScript, React 19 | Pages statiques générées par langue et par modèle |
| 3D | three.js 0.186, React Three Fiber 9, drei 10 | Chargé à la demande (`next/dynamic`, sans rendu serveur) |
| Format 3D | GLB, compression meshopt + quantification | Décodeur meshopt intégré à drei |
| Validation | zod 4 | Schéma unique pour les modèles et leurs règles |
| Pipeline CAO | Python (rhino3dm, trimesh) + gltf-transform | Aucune licence Rhino nécessaire |
| Tests | Vitest, pytest, Playwright | |

Aucun service externe, aucune base de données, aucun abonnement à ce stade.

## Trois couches séparées

```
cad/originals/Ring.3dm ──► pipeline (Python + gltf-transform)
                              │
          ┌───────────────────┼─────────────────────────┐
          ▼                   ▼                         ▼
public/models/<id>/<id>.glb   src/models/<id>/geometry.json   src/models/<id>/asset.json
(maillages nommés)            (faits mesurés dans la CAO)     (rapport d'optimisation)
          │                   │                         │
          └─────────► src/models/<id>/definition.ts ◄───┘
                      (règles éditoriales : compositions, métaux, variantes, textes)
                              │
                      src/lib/configurator/ (schéma, logique, validation)
                              │
                      src/components/configurator/ (interface + scène 3D, génériques)
```

1. **Faits** (`geometry.json`, `asset.json`) : générés, jamais écrits à la main. Pierres, dimensions, volumes, nœuds 3D, écarts mesurés.
2. **Règles** (`definition.ts`, `src/config/metals.ts`) : écrites par l'atelier. Ce qui est proposé, avec quels noms, dans quelles combinaisons.
3. **Rendu** (`Viewer.tsx`, `Configurator.tsx`) : ne connaît aucun modèle en particulier. Il affiche des nœuds et applique des matériaux.

## Modèle de configuration

- **Pièces** (`A`, `B`, …) : bijoux physiques distincts contenus dans un fichier CAO.
- **Compositions** : quelles pièces sont affichées (ex. solitaire, alliance, ensemble). Change réellement la géométrie.
- **Emplacements de pierre** (`stoneSlots`) : chaque variante est un ensemble de nœuds 3D (pierre et tête compatible) qui remplace le précédent. Les formes non modélisées sont déclarées `unavailableShapes`, avec leur raison, et ne sont jamais simulées.
- **Métal** : matériau uniquement ; la géométrie ne change pas.
- **Origine du diamant** : `affectsRendering: false`, information de certificat et de prix.
- **Prix** : `mode: 'quote'` est la seule valeur acceptée par le schéma tant que des règles réelles n'existent pas.

`validateModel()` refuse notamment : un nœud absent du GLB, une variante dont la forme annoncée diffère de la géométrie, une forme à la fois proposée et indisponible, une publication sans validation de l'atelier (`workshopValidated`).

## Rendu 3D

- Scène rendue **en millimètres**. Le shader de réfraction de drei décale ses rayons de 0,001 à 0,01 unité : en mètres, cela dépasse la taille des petites pierres (1,3 mm) et rendait les diamants gris.
- Rendu **à la demande** (`frameloop="demand"`) : aucune image n'est calculée quand rien ne bouge (batterie, chaleur sur mobile).
- Métal : `MeshPhysicalMaterial` (métallique, poli). Pierres : `MeshRefractionMaterial` (lancer de rayons, 3 rebonds, dispersion légère). Le niveau `low` utilise un matériau simple ; il s'active si `PerformanceMonitor` détecte une baisse de fluidité, ou avec `?quality=low`.
- Éclairage : studio procédural HDR généré dans le navigateur. Aucun fichier d'environnement à télécharger, aucune licence tierce.
- Ombre de contact calculée une fois par composition.

## Langues

`/[locale]/configurateur/[modelId]`, avec `fr` et `en`. Textes d'interface dans `src/i18n/dictionaries.ts`, textes des modèles dans leur définition (`{ fr, en }`).
L'hébreu (RTL) est prévu : `dir` est déjà posé sur `<html>`, mais la mise en page n'a pas encore été testée en RTL.

## Ajouter un modèle

Voir [`MODEL_PIPELINE.md`](MODEL_PIPELINE.md). En résumé : recette JSON, `npm run models:extract`, `definition.ts`, une ligne dans `src/models/index.ts`, puis `npm run models:validate`.
