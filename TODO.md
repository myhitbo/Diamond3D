# À faire

## Bloquant avant la suite
- [ ] Test sur appareils réels : iPhone (Safari), Android milieu de gamme, ordinateur avec GPU. Une préversion privée nécessite ton accord.
- [ ] Relancer la campagne de mesure complète (`scripts/perf/measure.mjs`), interrompue deux fois.
- [ ] Relancer la suite navigateur complète (`npm run test:e2e`) : seuls 6 des 28 tests ont été rejoués après le dernier changement.
- [ ] Validation de l'atelier pour ring-001 : forme en « 8 » au bout de l'alliance ? métaux proposés ? teintes conformes aux photos ?
- [ ] Griffes longues : l'atelier a déjà répondu (selon le propriétaire), mais la réponse n'est consignée nulle part. La reporter ici.

## Modèles
- [ ] Bibliothèque CGTrader : sélectionner les modèles (têtes, corps, bagues complètes en `.3dm`), vérifier la licence de **chaque** fiche, faire valider la fabricabilité par l'atelier, puis les intégrer au pipeline (voir `docs/CAHIER_DES_CHARGES.md`, PIP-7).
- [ ] Têtes de pierre supplémentaires pour ring-001 (même ancrage), et prise en charge par le pipeline de variantes issues de fichiers séparés.
- [ ] Version web « griffes coupées », si l'atelier confirme.
- [ ] Poids réels des pierres, à la place des carats estimés.
- [ ] Densités des alliages du fondeur.

## Site
- [ ] Phase 4 : formulaire de devis (configuration, coordonnées, photos) et choix du stockage.
- [ ] Adresses traduites (`/en/configurator/…`), hébreu RTL.
- [ ] Tests Safari et Firefox.
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
