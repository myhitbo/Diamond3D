# À faire

## Bloquant avant la suite
- [x] Aperçu en ligne relié à GitHub (13/11) : projet Vercel `jr-diamond` (équipe `diamond3-d`), https://jr-diamond.vercel.app, redéployé automatiquement à chaque push sur `main` ; chaque branche a son lien de prévisualisation. Protégé par la connexion Vercel : pour l'atelier, créer un lien de partage. L'ancien aperçu `jr-diamond-apercu` (compte hil123) n'est plus mis à jour.
- [x] Outillage des tests réels (13/11) : page cachée `/fr|en|he/diagnostic`, Speed Insights, protocole `docs/DEVICE_TESTS.md`, tests WebKit et Firefox, intégration continue GitHub Actions.
- [ ] Test sur appareils réels en suivant `docs/DEVICE_TESTS.md` : iPhone (Safari), Android milieu de gamme, ordinateur. Renvoyer les rapports de `/diagnostic`.
- [x] Speed Insights : script servi en production le 13/11 (`/_vercel/speed-insights/script.js` répond 200) et présent dans le code client ; premières mesures visibles dans l'onglet Speed Insights de Vercel après de vraies visites.
- [x] Intégration continue : premier passage vert le 13/11 (5 tâches, dont WebKit iPhone). À prévoir : passer aux versions des actions GitHub qui tournent sur Node 24 (avertissement de dépréciation de Node 20).
- [ ] Relancer la campagne de mesure complète (`scripts/perf/measure.mjs`), interrompue deux fois.
- [x] Suite navigateur complète relancée le 3/11 : 28/28 (Chromium, rendu logiciel).
- [x] Réponse de l'atelier pour ring-001 (3/11) : griffes à replier et « 8 » à supprimer sur la version web ; le maquettiste ne peut pas le faire.
- [x] Retouche web de ring-001 (3/11) : griffes rabattues, plaques en « 8 » supprimées, modèle publié. Planche : `docs/images/retouche-ring-001-avant-apres.jpg`.
- [ ] Faire valider la planche avant/après par l'atelier (attention aux deux griffes de pointe de la marquise, qui forment un biseau de profil).
- [x] ring-001 régénéré depuis `cad/originals/Ring.3dm` (14/11) : équivalent au modèle publié (écart maximal 0,001 mm, 27 357 triangles, 190 Ko). La retouche web s'applique désormais après la simplification.
- [ ] Teintes des métaux conformes aux photos : en attente des photos studio de l'atelier.

## Modèles
- [ ] CGTrader, partie gratuite (filtre « Free », formats `.3dm`) : télécharger 2 ou 3 bagues gratuites pour tester le pipeline sur un fichier tiers, sans rien acheter. Candidats vus le 3/11 : « solitaire ring », « Wedding Ring N145 », « Eternal Majesty ring », « Vintage Woman Diamond Ring », « Wedding Rings C29 ». Licence à relever sur chaque fiche. Pas de copies de marques.
- [ ] CGTrader, modèles payants : sélectionner les modèles (têtes, corps, bagues complètes en `.3dm`), vérifier la licence de **chaque** fiche, faire valider la fabricabilité par l'atelier, puis les intégrer au pipeline (voir `docs/CAHIER_DES_CHARGES.md`, PIP-7).
- [ ] Têtes de pierre supplémentaires pour ring-001 (même ancrage), et prise en charge par le pipeline de variantes issues de fichiers séparés.
- [ ] Poids réels des pierres, à la place des carats estimés. Marquise affichée « ≈ 0,25 ct, à confirmer » (tableau Stuller) ; passer `confirmedByWorkshop` à true avec le poids réel.
- [ ] Choix du carat pour les solitaires (pierre + tête agrandies depuis l'ancrage, plage validée par l'atelier) : en attente d'un fichier de solitaire (CGTrader « solitaire ring » ou atelier).
- [ ] Densités des alliages et taux de perte : indisponibles chez l'atelier (3/11). Poids affichés « ≈ … (± 5 %) » depuis le 4/11.
- [ ] Recevoir les 3 modèles `.3dm` + STL + photos studio promis par l'atelier (3/11).
- [x] Or 14 k (jaune, blanc, rose) au configurateur, choix couleur + titre ; « Synthétique » en français (4/11).
- [ ] Ajouter au configurateur : diamants de couleur, émeraude / saphir / rubis, origine naturelle / synthétique / imitation (libellés légaux par pays). Retirer l'argent s'il apparaît : non proposé par l'atelier. Certificat GIA / IGI dès 0,50 ct.

## Lancement en Israël (décisions du 4/11, voir `docs/STRATEGIE.md` §6)
- [ ] Envoyer `docs/PROCEDURE_PHOTO_ATELIER.md` à l'atelier.
- [ ] Prix affichés en ₪ TTC (TVA 18 %).
- [ ] Alliance de kiddouchin : obtenir un modèle simple (atelier ou CGTrader) et faire la page. Guide fait le 14/11 (`/fr/guides/alliance-de-kiddouchin`).
- [x] Parcours « transformation de bijoux de famille » : photos de l'ancien bijou + demande de devis (`/fr|en|he/transformation`, 14/11). Reste : relecture par l'atelier.
- [ ] Avocat israélien : la bague configurée relève-t-elle de l'exception « fabriqué sur mesure » au droit d'annulation ? Délai étendu pour nouveaux immigrants ? Poinçon ?
- [x] Version hébreu (RTL) du configurateur et de la FAQ (4/11) : `/he/…`, polices Frank Ruhl Libre et Assistant.
- [ ] Faire relire tous les textes hébreux par un locuteur natif (Yonathan ou un proche) : traduction faite par l'IA, termes de joaillerie à vérifier (« יהלום מעבדה », « זהב אדום » pour l'or rose, « הילה » pour le halo).
- [ ] Vérifier s'il existe en Israël une obligation de vocabulaire pour les diamants de synthèse (équivalent du décret français 2002-65).

## FAQ (`/fr/faq`, contenu : `src/content/faq.ts`)
- [ ] Faire valider par l'atelier les 5 réponses « À confirmer » : modèle hors catalogue, paiement (moyens acceptés), annulation et retour (avec l'avocat), livraison à l'étranger, entretien.
- [ ] Faire relire par l'atelier les réponses issues de déductions : gravure de l'alliance de kiddouchin après la cérémonie, contrôle du titre et des pierres pour une transformation, page transformation (rien n'est démonté avant accord, perte de poids à la fonte, pierres fragiles, photos des étapes), les six guides (questions 61 à 66 de `docs/QUESTIONS_ATELIER.md`). Alliances serties tout autour difficiles à mettre à taille : confirmé par le GIA le 14/11.
- [ ] Ajouter un contact réel (WhatsApp de l'atelier) sous « Une autre question ? ».
- [ ] Retirer le badge « Brouillon » quand plus aucune réponse n'est « À confirmer ».
- [x] Réponse « Or 14 ou 18 carats » corrigée (14/11) : la dureté dépend de l'alliage (fiches de fondeur), le 14 carats n'est pas « en général plus dur ». Même correction dans la note du configurateur.

## Guides (`/fr/guides`, contenu : `src/content/guides.ts`)
- [x] Six guides en français (14/11) : synthétique ou naturel, formes de diamant, alliance de kiddouchin, les 4 C, or 14 ou 18 carats, taille de doigt (tableau des tailles françaises, israéliennes et américaines).
- [x] Liens depuis le configurateur français vers les guides de l'or et de la taille (14/11).
- [ ] Relecture par l'atelier, puis retrait du badge « Brouillon » (questions 61 à 66).
- [ ] Traduire les guides en hébreu et en anglais si l'atelier le souhaite (aujourd'hui 404 hors français).

## Prix
- [x] Moteur de prix indicatif en ₪ TTC (4/11), non branché : `src/lib/pricing/engine.ts`. Il refuse de calculer tant qu'il manque un paramètre.
- [ ] Brancher le prix « à partir de » dans le configurateur dès que `src/config/pricing.ts` ne contient plus de `null` pour ring-001.
- [ ] Lever les 9 points « Manque » de `docs/PRICING_RULES.md` (marge sur les postes en USD, double comptage, change, platine…).

## Site
- [x] Délai affiché : 14 jours ouvrés (4/11).
- [ ] Paiement intégral sur le site.
- [x] Phase 4, version légère (13/11) : formulaire de devis FR/EN/HE envoyé par e-mail (sans base de données), avec accord facultatif de publication des photos et vidéos de fabrication.
- [ ] Devis en production (vérifié le 14/11 au soir : aucune variable saisie) : saisir dans Vercel `NEXT_PUBLIC_WHATSAPP_NUMBER` (bouton WhatsApp, prêt depuis le 14/11) et/ou `QUOTE_TO`, `QUOTE_FROM`, `SMTP_*` (e-mail), puis redéployer et tester une vraie demande.
- [x] Formes « sur demande » cliquables, en-tête mobile sur une ligne, actions GitHub en v7 (14/11).
- [x] Étude du paiement en Israël (`docs/PAIEMENT.md`) et dossier pour l'avocat (`docs/juridique/DOSSIER_AVOCAT_IL.md`) (14/11).
- [ ] Paiement : ouvrir un compte Grow au nom de l'entreprise de l'atelier, demander des devis à PayPlus et Cardcom, puis développer le parcours devis → lien de paiement.
- [ ] Juridique : compléter la partie 4 du dossier avec l'atelier et consulter un avocat israélien.
- [ ] Devis : faire relire les textes hébreux du formulaire (traduction IA).
- [x] Adresses traduites (`/en/configurator/…`, `/he/configurator/…`, 14/11). Redirections à passer en permanent au lancement.
- [ ] Tests Safari et Firefox.
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
