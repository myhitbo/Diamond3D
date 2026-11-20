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

## État (mis à jour le 20/11 à 15 h 30 UTC)

- [x] Éclairage « doux » choisi par le propriétaire (planche A/B/C), appliqué au configurateur (`fc29181`).
- [ ] Rendus Cycles en éclairage doux (7 images, `scratchpad/final3`, journal `log.txt`) : 5 sur 7 à 15 h 25 ; à convertir
      (`node scripts/render/to-webp.mjs <dossier>`), intégrer (mêmes noms `*-cycles.webp`), tester, pousser sur `main`.
      Si le dossier a disparu : relancer `scripts/render/render_ring.py … --studio doux` (voir son en-tête).
- [x] Moteur commun `src/components/stage/RingStage.tsx` : bague(s) pilotée(s) par le défilement (poses accrochées à des ancres,
      plusieurs exemplaires, métal, écart solitaire/alliance, miroir pour l'hébreu, studio clair ou sombre, inclinaison au pointeur).
      Page d'essai `/fr/versions/moteur`.
- [x] Index `/fr/versions`, sélecteur `VersionSwitcher`, fiches `src/content/versions.ts` (noms provisoires des versions B et C).
- [x] **Version A « Écrin »** (`/fr/versions/a`, `src/components/versions/a/`) : système de Ciao Energy (carrousel + curseur des
      quatre métaux, thème par métal, portrait, quatre vues de détail avec repères 01 à 04, grand mot sur bande claire, rangée des
      quatre métaux, solitaire/alliance séparés). Vérifié : captures ordinateur, iPhone, hébreu ; axe sans violation ; pas de
      débordement à 320 px dans les trois langues. Reste : polir (critique sur captures), ajouter aux tests e2e.
- [ ] Étude des sites (flux `etude-references`, `wf_2f8539b8-cb8`, captures dans `scratchpad/refs/`) : Ciao et Unique Jewelry
      capturés ; Maserati et Seed pas encore commencés à 15 h 25 (rendu logiciel lent). Ciao : carrousel de canettes avec curseur
      de parfums → canette qui avance (profil) → 4 bénéfices avec repères à droite et rotation de la canette → bande claire avec
      mot géant derrière la canette → gamme complète. Unique Jewelry (Mancini & Co) : bague en très gros plan sur fond rose doux,
      titre en capitales à empattements, personnalisation du métal et de la pierre dans la page.
- [ ] Version B (inspiration Maserati Trident Stars : nuit, cinématographique) : à concevoir après l'étude.
- [ ] Version C (inspiration Unique Jewelry / Seed Jewelry : fond clair, studio clair `studio="light"`) : à concevoir.
- [ ] Critique des trois versions sur captures, corrections.
- [ ] Tests (ajouter les versions à `tests/e2e/accessibility.spec.ts` et un test de fumée), build, mise en ligne sur `main`,
      message au propriétaire avec les trois liens ; désactiver la tâche planifiée de reprise.
