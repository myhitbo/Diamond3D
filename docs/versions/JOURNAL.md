# Trois versions du site : journal de travail

Journal tenu pendant le travail, pour reprendre après une interruption (limite de jetons, redémarrage). Une tâche planifiée
« Reprise automatique JR Diamond » relançait la session toutes les heures tant que le travail n'était pas livré ; elle a été
désactivée à la livraison (20/11).

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

## État (mis à jour le 20/11 à 19 h 30 UTC)

Fait et poussé sur la branche `claude/modest-davinci-u398r2` (dernier commit de travail : `91c99b2`) :
- Éclairage « doux » (choix du propriétaire) au configurateur et dans les sept rendus Cycles (`public/images/rendus/*-cycles.webp`).
- Moteur `src/components/stage/RingStage.tsx` : poses accrochées à des ancres de la page ; plusieurs exemplaires ; métal ; écart
  solitaire/alliance ; miroir pour l'hébreu ; studio clair ou sombre ; inclinaison au pointeur ; repli sans WebGL ;
  `maxH` (plafond par rapport à la hauteur), `narrow` (820 px de large au plus, ou écran plus haut que large), `upright` (écran en
  hauteur), taille de référence plafonnée à 62 % de la largeur en mise en page large ; `?quality=low|high` pour les essais.
- Index `/fr/versions`, sélecteur, textes communs `src/components/versions/copy.ts` (tout vient de l'accueil, du modèle, du dictionnaire).
- **A « Écrin »** (Ciao Energy), **B « Constellation »** (Maserati Trident Stars), **C « Lumière »** (Unique Jewelry, Seed Jewelry) :
  `src/components/versions/{a,b,c}/`, pages `src/app/[locale]/versions/{a,b,c}/page.tsx`.
- Tests : `tests/e2e/versions.spec.ts` ; versions dans `tests/e2e/accessibility.spec.ts` et `tests/e2e/legal.spec.ts` ; les pages
  des versions sont exclues du plan du site (`tests/unit/seo.test.ts`).
- Étude des quatre sites : `docs/versions/ETUDE_REFERENCES.md`, `etude-references.json` (Seed Jewelry bloqué : `agents.md`).
- **Critique par trois directeurs artistiques, chaque correction contrôlée par un second agent** (flux `critique-versions`,
  six agents, terminé à 17 h 50) : notes de départ A 5,5/10, B 5/10, C 5/10. Corrections appliquées aux trois versions, puis
  valeurs recalculées par les contrôleurs (projection du modèle publié : tailles et positions de la bague écran par écran).
- **Contrôle sur captures à huit tailles d'écran** : 1440 × 900, 1280 × 720, 1024 × 768 (tablette couchée), 834 × 1194 (tablette
  debout), 390 × 664, 375 × 548 (petit téléphone), 844 × 390 (téléphone à l'horizontale), 720 × 450 (zoom à 200 %), plus l'hébreu.
  Défauts trouvés et corrigés : bague sur le titre (petit téléphone), deuxième rang de bagues sur les noms (petit téléphone, zoom),
  texte sur la bague (tablette debout, tablette couchée, téléphone à l'horizontale), appel final de C sur téléphone.

Pièges rencontrés (à ne pas refaire) :
- Deux animations CSS sur les mêmes propriétés (`enter` et `leave`) : la seconde l'emporte, la première ne se voit jamais. Une
  seule animation par bloc, avec des paliers.
- Une règle `animation: none` de téléphone doit avoir le même poids que la règle qu'elle annule (sinon le texte reste masqué).
- Le matériau de réfraction des pierres garde sa propre référence : ne pas lui passer `ref`.
- `envMapIntensity` ne joue que sur l'environnement du matériau lui-même (three r163+) : donner `envMap` au métal.
- Une disposition réglée sur un seul écran (1440 × 900, 390 × 664) casse ailleurs : la taille de la bague suit la plus petite
  dimension, le texte suit la largeur ou la hauteur. Toujours recapturer aux huit tailles ci-dessus
  (outils de capture dans le dossier temporaire de la session : `outils/captures2.cjs`, `tailles2.cjs`).
- Une ancre placée au milieu d'une liste (cartes) n'est pas au même endroit sur téléphone (cartes empilées) : placer un repère
  sans hauteur à la fin de la liste.
- Les tests unitaires (`npm test`) doivent être relancés après l'ajout de pages : deux étaient cassés depuis l'ajout des versions.

Tests sur le commit final (20/11, 21 h UTC) : 116 unitaires ; Chromium 296 passés, 3 ignorés, 1 échec de délai sous charge
(le diagnostic ; il passe seul) ; WebKit iPhone, iPad et Firefox : 362 passés, 55 ignorés, aucun échec. Les versions sont aussi
jouées dans Firefox (sans WebGL : image fixe au premier écran seulement).

Livré le 20/11 à 19 h 30 UTC :
- Poussé sur `main` (commit `d2de427`), déployé par Vercel ; adresses vérifiées (200, non indexées) :
  https://jr-diamond.vercel.app/fr/versions et `/versions/a`, `/b`, `/c`, en français, anglais et hébreu.
- Trois planches de présentation envoyées au propriétaire (six vues d'ordinateur et cinq de téléphone par version).
- Tâche planifiée « Reprise automatique JR Diamond » désactivée.

Ce qui reste perfectible (dit au propriétaire) :
- Sans WebGL, la bague n'apparaît qu'au premier écran (image fixe) ; les scènes suivantes sont du texte seul.
- Téléphone à l'horizontale et zoom à 200 % : lisibles et sans chevauchement, mais la mise en scène y est simplifiée.
- Les pierres du rendu simplifié (appareils lents) sont un miroir à facettes, moins fin que la réfraction.
- Deux tests Chromium dépassent leur délai quand toute la suite tourne sur quatre cœurs (ils passent seuls).
- Aucun essai sur appareil réel : fluidité à vérifier sur un iPhone et un Android (protocole `docs/DEVICE_TESTS.md`).

Suite : le propriétaire choisit une version (ou un mélange) ; l'accueil en ligne n'est pas remplacé d'ici là.
