# À faire

## Bloquant avant la suite
- [ ] Test sur appareils réels : iPhone (Safari), Android milieu de gamme, ordinateur avec GPU. Une préversion privée nécessite ton accord.
- [ ] Relancer la campagne de mesure complète (`scripts/perf/measure.mjs`), interrompue deux fois.
- [x] Suite navigateur complète relancée le 3/11 : 28/28 (Chromium, rendu logiciel).
- [x] Réponse de l'atelier pour ring-001 (3/11) : griffes à replier et « 8 » à supprimer sur la version web ; le maquettiste ne peut pas le faire.
- [x] Retouche web de ring-001 (3/11) : griffes rabattues, plaques en « 8 » supprimées, modèle publié. Planche : `docs/images/retouche-ring-001-avant-apres.jpg`.
- [ ] Faire valider la planche avant/après par l'atelier (attention aux deux griffes de pointe de la marquise, qui forment un biseau de profil).
- [ ] À réception de `Ring.3dm`, régénérer avec `npm run models:extract -- ring-001` : la retouche est refaite sur le GLB brut.
- [ ] Teintes des métaux conformes aux photos : en attente des photos studio de l'atelier.

## Modèles
- [ ] CGTrader, partie gratuite (filtre « Free », formats `.3dm`) : télécharger 2 ou 3 bagues gratuites pour tester le pipeline sur un fichier tiers, sans rien acheter. Candidats vus le 3/11 : « solitaire ring », « Wedding Ring N145 », « Eternal Majesty ring », « Vintage Woman Diamond Ring », « Wedding Rings C29 ». Licence à relever sur chaque fiche. Pas de copies de marques.
- [ ] CGTrader, modèles payants : sélectionner les modèles (têtes, corps, bagues complètes en `.3dm`), vérifier la licence de **chaque** fiche, faire valider la fabricabilité par l'atelier, puis les intégrer au pipeline (voir `docs/CAHIER_DES_CHARGES.md`, PIP-7).
- [ ] Têtes de pierre supplémentaires pour ring-001 (même ancrage), et prise en charge par le pipeline de variantes issues de fichiers séparés.
- [ ] Poids réels des pierres, à la place des carats estimés. Marquise affichée « ≈ 0,25 ct, à confirmer » (tableau Stuller) ; passer `confirmedByWorkshop` à true avec le poids réel.
- [ ] Choix du carat pour les solitaires (pierre + tête agrandies depuis l'ancrage, plage validée par l'atelier) : en attente d'un fichier de solitaire (CGTrader « solitaire ring » ou atelier).
- [ ] Densités des alliages et taux de perte : indisponibles chez l'atelier (3/11). En attendant, afficher les poids « ≈ » avec ±5 %.
- [ ] Recevoir les 3 modèles `.3dm` + STL + photos studio promis par l'atelier (3/11).
- [ ] Ajouter au configurateur : or 14 k, platine, diamants de couleur, émeraude / saphir / rubis, origine naturelle / synthétique / imitation (libellés légaux par pays). Retirer l'argent s'il apparaît : non proposé par l'atelier. Certificat GIA / IGI dès 0,50 ct.

## Prix
- [ ] Lever les 9 points « Manque » de `docs/PRICING_RULES.md` (marge sur les postes en USD, double comptage, change, platine…).

## Site
- [ ] Délai affiché : 14 jours ouvrés, sans option express. Paiement intégral sur le site.
- [ ] Phase 4 : formulaire de devis (configuration, coordonnées, photos) et choix du stockage.
- [ ] Adresses traduites (`/en/configurator/…`), hébreu RTL.
- [ ] Tests Safari et Firefox.
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
