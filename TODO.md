# À faire

## Bloquant avant la suite
- [ ] Test sur appareils réels : iPhone (Safari), Android milieu de gamme, ordinateur avec GPU. Une préversion privée nécessite ton accord.
- [ ] Relancer la campagne de mesure complète (`scripts/perf/measure.mjs`), interrompue deux fois.
- [ ] Relancer la suite navigateur complète (`npm run test:e2e`) : seuls 6 des 28 tests ont été rejoués après le dernier changement.
- [ ] Validation de l'atelier pour ring-001 : forme en « 8 » au bout de l'alliance ? métaux proposés ? teintes conformes aux photos ?
- [ ] Griffes longues : l'atelier a déjà répondu (selon le propriétaire), mais la réponse n'est consignée nulle part. La reporter ici.

## Modèles
- [ ] Bibliothèque DD Diamond (dd-diamond.com) = designs de référence : obtenir le droit d'usage écrit (designs et photos), demander les fichiers CAO existants, fixer l'ordre de priorité. Voir `docs/REPONSES_ATELIER.md`.
- [ ] Pour les designs sans fichier, CGTrader : sélectionner les modèles (têtes, corps, bagues complètes en `.3dm`), vérifier la licence de **chaque** fiche, faire valider la fabricabilité par l'atelier, puis les intégrer au pipeline (voir `docs/CAHIER_DES_CHARGES.md`, PIP-7).
- [ ] Têtes de pierre supplémentaires pour ring-001 (même ancrage), et prise en charge par le pipeline de variantes issues de fichiers séparés.
- [ ] Version web « griffes coupées », si l'atelier confirme.
- [ ] Poids réels des pierres, à la place des carats estimés.
- [ ] Densités des alliages du fondeur : or 14 k et 18 k (jaune, blanc, rose) et platine. Ces métaux ont été confirmés le 22/10.
- [ ] Ajouter au configurateur : or 14 k, platine, diamants de couleur, émeraude / saphir / rubis, origine naturelle / synthétique / imitation (libellés légaux par pays).

## Site
- [ ] Phase 4 : formulaire de devis (configuration, coordonnées, photos) et choix du stockage.
- [ ] Adresses traduites (`/en/configurator/…`), hébreu RTL.
- [ ] Tests Safari et Firefox.
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
