# JR Diamond — plateforme de joaillerie et configurateur 3D

Prototype technique (phase 2) : un configurateur 3D construit à partir d'un vrai fichier CAO Rhino de l'atelier.
Le site complet, les devis et le paiement ne sont pas encore développés.

- Rapport du prototype (mesures, tests, limites, estimations) : [`docs/PROTOTYPE_REPORT.md`](docs/PROTOTYPE_REPORT.md)
- Architecture : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Préparation des modèles 3D : [`docs/MODEL_PIPELINE.md`](docs/MODEL_PIPELINE.md)
- Règles de prix : [`docs/PRICING_RULES.md`](docs/PRICING_RULES.md) (aucune règle définie à ce jour)
- Cahier des charges (phases 3 à 8) : [`docs/CAHIER_DES_CHARGES.md`](docs/CAHIER_DES_CHARGES.md)
- Réponses de l'atelier : [`docs/REPONSES_ATELIER.md`](docs/REPONSES_ATELIER.md)
- Analyse concurrentielle : [`docs/ANALYSE_CONCURRENCE.md`](docs/ANALYSE_CONCURRENCE.md)
- Tâches : [`TODO.md`](TODO.md) · Historique : [`CHANGELOG.md`](CHANGELOG.md)

## Démarrage

Prérequis : Node.js 22, Python 3.13.

```bash
npm ci
npm run build
npm start            # http://localhost:3000 → configurateur du modèle pilote
```

Le modèle web (`public/models/ring-001/ring-001.glb`) et ses métadonnées (`src/models/ring-001/`) sont versionnés :
il n'est pas nécessaire de disposer du fichier CAO pour lancer le site.

## Régénérer un modèle depuis le fichier CAO

Les fichiers CAO originaux ne sont **pas** versionnés (voir [`cad/README.md`](cad/README.md)).

```bash
python3 -m venv .venv && .venv/bin/pip install -r pipeline/requirements.txt
cp /chemin/vers/Ring.3dm /chemin/vers/Ring.stl cad/originals/ && chmod 444 cad/originals/*
npm run models:extract -- ring-001   # .3dm → GLB brut → GLB optimisé + rapports
npm run models:validate              # contrôle définition + GLB avant publication
```

## Tests

```bash
npm run typecheck && npm run lint
npm test                                   # logique du configurateur (Vitest)
.venv/bin/python -m pytest pipeline/tests  # pipeline CAO (nécessite cad/originals/)
npm run build && npm run test:e2e          # navigateur, ordinateur + mobile émulé (Playwright)
```

Dans un environnement sans navigateur Playwright téléchargé, indiquer Chromium avec `CHROMIUM_PATH=/chemin/vers/chrome`.

## Outils de mesure

```bash
scripts/perf/serve-and-run.sh scripts/perf/screenshots.mjs <dossier>   # captures ordinateur et mobile
scripts/perf/serve-and-run.sh scripts/perf/measure.mjs <sortie.json>   # chargement, transferts, rendu
```

`?debug=1` dans l'URL active une sonde de test (`window.__jr`) ; `?quality=low` force le rendu simplifié des pierres.
