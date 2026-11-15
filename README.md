# JR Diamond — plateforme de joaillerie et configurateur 3D

Prototype technique (phase 2) : un configurateur 3D construit à partir d'un vrai fichier CAO Rhino de l'atelier.
Le formulaire de devis (phase 4, version légère) envoie les demandes par e-mail. Le site complet et le paiement ne sont pas encore développés.

- Rapport du prototype (mesures, tests, limites, estimations) : [`docs/PROTOTYPE_REPORT.md`](docs/PROTOTYPE_REPORT.md)
- Architecture : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Préparation des modèles 3D : [`docs/MODEL_PIPELINE.md`](docs/MODEL_PIPELINE.md)
- Règles de prix : [`docs/PRICING_RULES.md`](docs/PRICING_RULES.md) (structure connue depuis le 3/11 ; moteur prêt, en attente des marges)
- Cahier des charges (phases 3 à 8) : [`docs/CAHIER_DES_CHARGES.md`](docs/CAHIER_DES_CHARGES.md)
- Réponses de l'atelier : [`docs/REPONSES_ATELIER.md`](docs/REPONSES_ATELIER.md)
- Stratégie et décisions (lancement en Israël) : [`docs/STRATEGIE.md`](docs/STRATEGIE.md) · procédure photo de l'atelier : [`docs/PROCEDURE_PHOTO_ATELIER.md`](docs/PROCEDURE_PHOTO_ATELIER.md)
- Analyse concurrentielle : [`docs/ANALYSE_CONCURRENCE.md`](docs/ANALYSE_CONCURRENCE.md)
- Tâches : [`TODO.md`](TODO.md) · Historique : [`CHANGELOG.md`](CHANGELOG.md)

## Démarrage

Prérequis : Node.js 22, Python 3.13.

```bash
npm ci
npm run build
npm start            # http://localhost:3000 → configurateur du modèle pilote (fr, en, he) et FAQ (/fr/faq)
```

Le modèle web (`public/models/ring-001/ring-001.glb`) et ses métadonnées (`src/models/ring-001/`) sont versionnés :
il n'est pas nécessaire de disposer du fichier CAO pour lancer le site.

## Demandes de devis (e-mail, sans base de données)

Le bouton « Demander un devis » ouvre un formulaire en français, anglais ou hébreu (coordonnées, taille, message, 3 photos au plus, accord facultatif de publication des photos et vidéos de fabrication). Si `NEXT_PUBLIC_WHATSAPP_NUMBER` est renseigné, le formulaire propose aussi « Envoyer sur WhatsApp » (lien wa.me avec la configuration pré-remplie).
La route `POST /api/devis` revalide la configuration sur la définition du modèle, recalcule le récapitulatif
et l'envoie par SMTP à l'atelier, photos en pièces jointes ; « Répondre » écrit directement au client.
Rien n'est stocké sur le serveur.

Configuration : copier `.env.example` en `.env.local` et renseigner `QUOTE_TO`, `QUOTE_FROM`, `SMTP_*`.
Sans ces variables, la route répond 503 et le formulaire affiche un message d'indisponibilité.
`QUOTE_DRY_RUN=1` n'envoie rien et écrit l'e-mail dans le journal du serveur (utilisé par les tests navigateur).

Protections : champ piège anti-robots, 5 demandes par IP et par 10 minutes (en mémoire, instance unique),
photos JPEG/PNG/WebP/HEIC de 3 Mo chacune et 4 Mo en tout. La préversion claude.ai n'a pas de serveur :
le bouton y reste désactivé.

## Régénérer un modèle depuis le fichier CAO

Les fichiers CAO sont dans `cad/originals/` (dépôt privé, voir [`cad/README.md`](cad/README.md)).

```bash
python3 -m venv .venv && .venv/bin/pip install -r pipeline/requirements.txt
npm run models:extract -- ring-001   # .3dm → GLB brut → GLB optimisé + rapports
npm run models:validate              # contrôle définition + GLB avant publication
```

## Tests

```bash
npm run typecheck && npm run lint
npm test                                   # logique du configurateur (Vitest)
.venv/bin/python -m pytest pipeline/tests  # pipeline CAO (nécessite cad/originals/)
npm run build && npm run test:e2e          # navigateur, Chromium ordinateur + mobile émulé (Playwright), devis en envoi simulé
npm run test:e2e:browsers                  # WebKit (iPhone, iPad) et Firefox : plus lent
```

Dans un environnement sans navigateur Playwright téléchargé, indiquer Chromium avec `CHROMIUM_PATH=/chemin/vers/chrome` ; pour WebKit et Firefox : `npx playwright install webkit firefox`.
L'intégration continue (`.github/workflows/ci.yml`) rejoue tout cela à chaque push sur `main`, avec WebKit en iPhone.

Les tests automatiques tournent en WebGL logiciel. Pour la fluidité et le rendu réels : page cachée **`/fr/diagnostic`** (mesure sur l'appareil, rapport JSON à copier) et protocole `docs/DEVICE_TESTS.md`.

## Préversion claude.ai

```bash
npm run preview:build   # → preview/dist/index.html, page unique publiable comme Artifact claude.ai
```

Même code de configurateur, assemblé sans Next.js, modèle 3D intégré à la page (claude.ai ne sert pas les `.glb`).
Préversion actuelle (privée) : https://claude.ai/artifact/9DTFa5XeY4THn1gpKfmHjv

## Outils de mesure

```bash
scripts/perf/serve-and-run.sh scripts/perf/screenshots.mjs <dossier>   # captures ordinateur et mobile
scripts/perf/serve-and-run.sh scripts/perf/measure.mjs <sortie.json>   # chargement, transferts, rendu
```

`measure.mjs` dure environ 1 min 30 : la lancer en arrière-plan avec un journal, sans autre charge sur la machine. Résultats : `docs/perf/` et `docs/PROTOTYPE_REPORT.md` (C).

`?debug=1` dans l'URL active une sonde de test (`window.__jr`) ; `?quality=low` force le rendu simplifié des pierres.
