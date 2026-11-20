# Trois versions du site : journal de travail

Journal tenu pendant le travail, pour reprendre après une interruption (limite de jetons, redémarrage). Une tâche planifiée
« Reprise automatique JR Diamond » relance la session toutes les heures tant que le travail n'est pas livré ; la désactiver à la fin.

## Demande du propriétaire (20/11)

> Tu peux gérer le projet de façon autonome. Recopie tout le système du site en remplaçant les canettes par des bijoux.
> Inspire-toi et reproduis, sois autonome et crée 3 versions différentes. 0 questions, toute autorisation accordée,
> budget de jetons illimité, relance automatiquement dès que possible.

Références données :
- https://www.awwwards.com/sites/ciao-energy-launch-website (la canette en 3D pilotée par le défilement : c'est « le système » à reprendre avec la bague)
- https://www.awwwards.com/sites/unique-jewelry
- https://www.awwwards.com/sites/maserati-trident-stars
- https://www.awwwards.com/sites/seed-jewelry

## Cadre

- On reprend les **mécanismes** (mise en scène au défilement, objet 3D qui traverse la page, rythme, typographie, transitions),
  pas le code, les textes, les images ni la marque des sites de référence.
- Textes : uniquement les faits acquis (`src/content/home.ts`, règles de `CLAUDE.md`). Trois langues, hébreu de droite à gauche.
- Accessibilité : réduction des animations respectée, aucun mouvement sans fin non arrêtable, contrastes, clavier.
- Étude des sites : lecture seule, `robots.txt` respecté, aucune protection contournée (awwwards.com coupe la connexion depuis
  ce conteneur le 20/11 : passer par la recherche web, ne pas insister).
- Les trois versions vivent à des adresses séparées (`/fr/versions/a`, `b`, `c`, non indexées) pour être comparées en ligne ;
  le propriétaire a donné toute autorisation : pousser sur `main` une fois les contrôles verts.

## État (mis à jour le 20/11 à 16 h 40 UTC)

Fait et poussé sur la branche `claude/modest-davinci-u398r2` :
- Éclairage « doux » (choix du propriétaire) au configurateur et dans les sept rendus Cycles (`public/images/rendus/*-cycles.webp`).
- Moteur `src/components/stage/RingStage.tsx` (poses accrochées à des ancres de la page ; plusieurs exemplaires ; métal ; écart
  solitaire/alliance ; miroir pour l'hébreu ; studio clair ou sombre ; inclinaison au pointeur ; repli sans WebGL).
- Index `/fr/versions`, sélecteur, textes communs `src/components/versions/copy.ts` (tout vient de l'accueil, du modèle, du dictionnaire).
- **A « Écrin »** (Ciao Energy), **B « Constellation »** (Maserati Trident Stars), **C « Lumière »** (Unique Jewelry, Seed Jewelry) :
  `src/components/versions/{a,b,c}/`, pages `src/app/[locale]/versions/{a,b,c}/page.tsx`.
- Tests : `tests/e2e/versions.spec.ts` ; versions ajoutées à `tests/e2e/accessibility.spec.ts` (axe, clavier, 320 px, zoom, cibles)
  et à `tests/e2e/legal.spec.ts` (aucune requête vers un autre domaine).
- Étude des quatre sites : `docs/versions/ETUDE_REFERENCES.md`, `etude-references.json` (Seed Jewelry bloqué : `agents.md`).

En cours à 16 h 40 :
- Suites complètes de tests en arrière-plan sur le commit `08000ff` (journaux `scratchpad/e2e-g1.log`, `e2e-g2.log`).
- Critique des trois versions par trois directeurs artistiques (flux `critique-versions`, `wf_2559bb66-138`), puis corrections.

Reste :
1. Appliquer les corrections retenues de la critique ; reconstruire ; recapturer ; relancer les tests des versions et d'accessibilité.
2. `CLAUDE.md` et `CHANGELOG.md` (section « Trois versions de l'accueil »).
3. Pousser sur `main` (toute autorisation donnée par le propriétaire), vérifier le déploiement Vercel et les trois adresses.
4. Message au propriétaire : trois liens, captures, ce qui reste perfectible ; désactiver la tâche planifiée « Reprise automatique JR Diamond ».
