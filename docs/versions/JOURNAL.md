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

## État

- [x] Éclairage « doux » choisi par le propriétaire (planche A/B/C), appliqué au configurateur (`fc29181`).
- [ ] Rendus Cycles en éclairage doux (7 images, `scratchpad/final3`) : en cours le 20/11 à 14 h 20 UTC ; à convertir
      (`scripts/render/to-webp.mjs`), intégrer, tester, pousser sur `main`.
- [ ] Étude des quatre sites de référence (flux d'agents « etude-references »).
- [ ] Trois concepts écrits (`docs/versions/CONCEPTS.md`).
- [ ] Construction des trois versions, critique sur captures, corrections.
- [ ] Intégration, tests (accessibilité comprise), mise en ligne, message au propriétaire avec les trois liens.
