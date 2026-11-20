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

## État (mis à jour le 20/11 à 17 h 45 UTC)

Fait et poussé sur la branche `claude/modest-davinci-u398r2` :
- Éclairage « doux » (choix du propriétaire) au configurateur et dans les sept rendus Cycles (`public/images/rendus/*-cycles.webp`).
- Moteur `src/components/stage/RingStage.tsx` (poses accrochées à des ancres de la page ; plusieurs exemplaires ; métal ; écart
  solitaire/alliance ; miroir pour l'hébreu ; studio clair ou sombre ; inclinaison au pointeur ; repli sans WebGL ;
  `?quality=low|high` pour les essais).
- Index `/fr/versions`, sélecteur, textes communs `src/components/versions/copy.ts` (tout vient de l'accueil, du modèle, du dictionnaire).
- **A « Écrin »** (Ciao Energy), **B « Constellation »** (Maserati Trident Stars), **C « Lumière »** (Unique Jewelry, Seed Jewelry) :
  `src/components/versions/{a,b,c}/`, pages `src/app/[locale]/versions/{a,b,c}/page.tsx`.
- Tests : `tests/e2e/versions.spec.ts` ; versions ajoutées à `tests/e2e/accessibility.spec.ts` (axe, clavier, 320 px, zoom, cibles)
  et à `tests/e2e/legal.spec.ts` (aucune requête vers un autre domaine).
- Étude des quatre sites : `docs/versions/ETUDE_REFERENCES.md`, `etude-references.json` (Seed Jewelry bloqué : `agents.md`).
- **Critique par trois directeurs artistiques** (flux `critique-versions`) : notes de départ A 5,5/10, B 5/10, C 5/10. Corrections
  appliquées aux trois versions (commits `2dc8e90` pour A, `4afc3cd` pour B, version C ensuite). Principe commun retenu : des scènes
  « tenues » à l'écran (blocs collants) où le texte se pose pendant que la bague finit son mouvement ; les repères de pose sont des
  éléments sans hauteur, parce qu'un bloc collant suit l'écran et ne peut pas servir d'ancre.

Pièges rencontrés (à ne pas refaire) :
- Deux animations CSS sur les mêmes propriétés (`enter` et `leave`) : la seconde l'emporte, la première ne se voit jamais. Une
  seule animation par bloc, avec des paliers.
- Une règle `animation: none` de téléphone doit avoir le même poids que la règle qu'elle annule (sinon le texte reste masqué).
- Le matériau de réfraction des pierres garde sa propre référence : ne pas lui passer `ref`.
- `envMapIntensity` ne joue que sur l'environnement du matériau lui-même (three r163+) : donner `envMap` au métal.

Reste :
1. Contrôle des trois versions à d'autres tailles d'écran (petit téléphone 375 × 548, portable 1280 × 720, tablette, Firefox sans WebGL).
2. Suites complètes de tests (Chromium, puis WebKit et Firefox), `CLAUDE.md` et `CHANGELOG.md`, déclaration d'accessibilité.
3. Pousser sur `main` (toute autorisation donnée par le propriétaire), vérifier le déploiement Vercel et les trois adresses.
4. Message au propriétaire : trois liens, captures, ce qui reste perfectible ; désactiver la tâche planifiée « Reprise automatique JR Diamond ».
