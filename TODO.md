# À faire

## Bloquant avant la suite
- [x] Aperçu en ligne relié à GitHub (13/11) : projet Vercel `jr-diamond` (équipe `diamond3-d`), https://jr-diamond.vercel.app, redéployé automatiquement à chaque push sur `main` ; chaque branche a son lien de prévisualisation. Protégé par la connexion Vercel : pour l'atelier, créer un lien de partage. L'ancien aperçu `jr-diamond-apercu` (compte hil123) n'est plus mis à jour.
- [x] Outillage des tests réels (13/11) : page cachée `/fr|en|he/diagnostic`, Speed Insights, protocole `docs/DEVICE_TESTS.md`, tests WebKit et Firefox, intégration continue GitHub Actions.
- [ ] Test sur appareils réels en suivant `docs/DEVICE_TESTS.md` : iPhone (Safari), Android milieu de gamme, ordinateur. Renvoyer les rapports de `/diagnostic`.
- [x] Speed Insights : script servi en production le 13/11 (`/_vercel/speed-insights/script.js` répond 200) et présent dans le code client ; premières mesures visibles dans l'onglet Speed Insights de Vercel après de vraies visites.
- [x] Intégration continue : premier passage vert le 13/11 (5 tâches, dont WebKit iPhone). À prévoir : passer aux versions des actions GitHub qui tournent sur Node 24 (avertissement de dépréciation de Node 20).
- [x] Campagne de mesure complète (`scripts/perf/measure.mjs`) relancée le 15/11 : 3 scénarios × 3 passes, sans échec, 1 min 25 s. Résultats dans `docs/PROTOTYPE_REPORT.md` (C) et `docs/perf/`. Rendu logiciel : les images par seconde sont un plancher, pas une mesure d'appareil. `serve-and-run.sh` corrigé (port 3100 occupé, serveur figé, arrêt sur signal) ; la mesure enregistre désormais chaque passe.
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
- [x] Pierres de couleur au configurateur, « sur demande » (15/11) : diamant de couleur ; émeraude, saphir et rubis naturels. Boutons en pointillés sous la pierre centrale, comme les autres formes : ils ouvrent le devis avec un message pré-rempli (FR/EN/HE), la 3D reste la marquise, aucun prix. En origine « synthétique », le message précise que les autres pierres sont des diamants synthétiques (jamais « émeraude synthétique »).
- [ ] Pierres de couleur, suite : rendu 3D (matériaux de l'émeraude, du saphir, du rubis et des diamants de couleur), prix (grille des pierres attendue de l'atelier). Origine naturelle / synthétique / imitation : libellés légaux par pays. Retirer l'argent s'il apparaît : non proposé par l'atelier. Certificat GIA / IGI dès 0,50 ct.

## Lancement en Israël (décisions du 4/11, voir `docs/STRATEGIE.md` §6)
- [x] Procédure photo et vidéo envoyée à l'atelier en PDF (`docs/atelier/Procedure_photo_video_atelier.pdf`).
- [ ] Le jour du lancement : basculer `SITE_INDEXABLE` à `true` dans `src/config/site.ts` (et avec lui les redirections permanentes des adresses traduites, `TRANSLATED_REDIRECTS_PERMANENT`) et retirer dans le même commit le test « garde-fou avant le lancement » de `tests/unit/seo.test.ts` (les autres tests suivent l'interrupteur), renseigner `NEXT_PUBLIC_SITE_URL` si le domaine change, redéployer, puis lever la protection Vercel : tant qu'elle est active, Vercel dépose son cookie de connexion `_vercel_jwt`, alors que la politique annonce un site sans cookie. Un seul réglage ouvre l'indexation (balise robots), le plan du site et son annonce dans `robots.txt`. Ensuite : envoyer un lien sur WhatsApp pour vérifier l'aperçu (image, titre), soumettre `/sitemap.xml` à la Search Console.
- [x] Page 404 traduite (`/fr|en|he/…`, français hors langue), aperçus de liens partagés (Open Graph, image `public/images/apercu-partage.jpg`), `robots.txt` et plan du site pilotés par l'interrupteur de lancement (15/11). Aperçus invisibles tant que la protection Vercel est active. Relecture native du texte hébreu de la 404 à faire.
- [ ] Prix affichés en ₪ TTC (TVA 18 %).
- [ ] Alliance de kiddouchin : obtenir un modèle simple (atelier ou CGTrader) et faire la page. Guide fait le 14/11 (`/fr/guides/alliance-de-kiddouchin`).
- [x] Parcours « transformation de bijoux de famille » : photos de l'ancien bijou + demande de devis (`/fr|en|he/transformation`, 14/11). Reste : relecture par l'atelier.
- [ ] Avocat israélien : la bague configurée relève-t-elle de l'exception « fabriqué sur mesure » au droit d'annulation ? Délai étendu pour nouveaux immigrants ? Poinçon ?
- [x] Déclaration d'accessibilité et politique de confidentialité en brouillon (15/11), FR/EN/HE : `/fr/accessibilite`, `/en/accessibility`, `/he/accessibility`, `/fr/confidentialite`, `/en/privacy`, `/he/privacy`. Liens dans le pied de page de chaque page et dans un lien d'évitement en tête de page ; lien vers la politique sous la case d'accord des deux formulaires. Contenu : `src/content/legal/`.
- [ ] Avant la vente : remplir les marques « [à compléter : …] » des deux pages, en un seul endroit, `src/config/business.ts` (18 informations : nom légal, numéro ח.פ. ou ע.מ., adresse, téléphone, e-mail, contact accessibilité et ses coordonnées, accès au local, fournisseur d'e-mail, base du transfert hors d'Israël, durée de conservation, durée de conservation du journal de Vercel selon la formule souscrite (1 heure en Hobby, 1 jour en Pro ; la formule Hobby est réservée à un usage non commercial), paiement, livraison, validité du devis, garantie, annulation). La déclaration d'accessibilité n'a aucun contact effectif tant que le contact accessibilité manque (règle 35ה), et la politique n'identifie pas le responsable du traitement (article 11(2א)) : bloquant pour la publication. Réponses attendues : questions 67 à 79 de `docs/QUESTIONS_ATELIER.md` ; base du transfert et annulation : avocat.
- [ ] Faire valider les deux pages par l'avocat israélien (questions 25 à 43 du dossier, sections H et I), puis retirer le badge « Brouillon · à valider par un avocat ». Relecture native de leur texte hébreu.
- [x] Audit automatisé d'accessibilité (15/11) : `tests/e2e/accessibility.spec.ts`, axe-core 4.14.0 (WCAG 2.0 à 2.2, A et AA, plus titres et repères) sur toutes les pages dans les trois langues, et contrôles complémentaires (parcours au clavier, vue 3D au clavier, erreurs et succès des formulaires annoncés, 320 px, zoom 200 %, animations réduites, description de la 3D, cibles de 24 px, droite-à-gauche) ; Chromium, WebKit, Firefox. Défauts trouvés et corrigés ; déclaration mise à jour (conformité « partielle »).
- [ ] Avant l'ouverture au public : contrôle manuel selon le formulaire de la Commission et essai avec de vrais lecteurs d'écran (NVDA sous Windows, VoiceOver sur iPhone, si possible TalkBack) ; reporter date, lecteurs et résultats dans `src/content/legal/accessibility-status.ts` (`screenReaders`, `limits`), puis changer `ACCESSIBILITY_UPDATED`. Limite connue restante : la langue des titres de sources (souvent en anglais) n'est pas marquée.
- [x] Envoi des e-mails : chiffrement de la connexion SMTP imposé (15/11, `smtpOptions` dans `src/lib/quote/mailer.ts` : TLS sur le port 465, STARTTLS exigé ailleurs). Ne jamais activer `QUOTE_DRY_RUN` en production (l'e-mail entier irait dans le journal de Vercel, ce que la politique exclut).
- [ ] Notice courte de l'article 11 (loi sur la protection de la vie privée) à côté du bouton d'envoi des formulaires, et texte de la case d'accord : après l'avis de l'avocat (question 39).
- [x] Version hébreu (RTL) du configurateur et de la FAQ (4/11) : `/he/…`, polices Frank Ruhl Libre et Assistant.
- [ ] Faire relire tous les textes hébreux par un locuteur natif (Yonathan ou un proche) : traduction faite par l'IA, termes de joaillerie à vérifier (« יהלום מעבדה », « זהב אדום » pour l'or rose, « הילה » pour le halo ; pierres : « יהלום צבעוני », « אזמרגד », « ספיר », « אודם », alignés le 15/11 sur l'accueil, la FAQ et le configurateur, qui écrivaient aussi « אמרלד » et « רובי » ; « אמרלד » reste le nom de la taille émeraude ; question 83).
- [ ] Vérifier s'il existe en Israël une obligation de vocabulaire pour les diamants de synthèse (équivalent du décret français 2002-65).

## FAQ (`/fr/faq`, contenu : `src/content/faq.ts`)
- [ ] Faire valider par l'atelier les 6 réponses « À confirmer » : modèle hors catalogue, paiement (moyens acceptés), annulation et retour (avec l'avocat), livraison à l'étranger, entretien, suivi de la fabrication en photos et vidéos (ajoutée le 15/11 : présentée jusque-là comme un engagement, alors que les modalités ne sont pas fixées ; question 82).
- [ ] Faire relire par l'atelier les réponses issues de déductions : gravure de l'alliance de kiddouchin après la cérémonie, contrôle du titre et des pierres pour une transformation, page transformation (rien n'est démonté avant accord, perte de poids à la fonte, pierres fragiles, photos des étapes), les six guides (questions 61 à 66 de `docs/QUESTIONS_ATELIER.md`). Alliances serties tout autour difficiles à mettre à taille : confirmé par le GIA le 14/11.
- [ ] Ajouter un contact réel (WhatsApp de l'atelier) sous « Une autre question ? ».
- [ ] Retirer le badge « Brouillon » quand plus aucune réponse n'est « À confirmer ».
- [x] Réponse « L'or blanc jaunit-il ? » corrigée (15/11) : la fréquence du rhodiage citée ne correspondait pas à la source ; d'un à cinq ans selon les joailliers.
- [x] Liens de sources contrôlés (15/11) : tous en ligne, redirections remplacées par l'adresse finale.
- [x] Réponse « Or 14 ou 18 carats » corrigée (14/11) : la dureté dépend de l'alliage (fiches de fondeur), le 14 carats n'est pas « en général plus dur ». Même correction dans la note du configurateur.

## Guides (`/fr/guides`, `/en/guides`, contenu : `src/content/guides/`)
- [x] Six guides en français (14/11) : synthétique ou naturel, formes de diamant, alliance de kiddouchin, les 4 C, or 14 ou 18 carats, taille de doigt (tableau des tailles françaises, israéliennes et américaines).
- [x] Liens depuis le configurateur français vers les guides de l'or et de la taille (14/11).
- [ ] Relecture par l'atelier, puis retrait du badge « Brouillon » (questions 61 à 66).
- [x] Six guides en anglais (15/11), adresses traduites, liens depuis le configurateur anglais. Un test vérifie que l'anglais suit le français.
- [ ] Guides en hébreu : seulement avec une relecture native (aujourd'hui `/he/guides` répond 404). Ajouter la langue à `GUIDE_LOCALES` et un fichier `he.ts`.
- [ ] Toute correction d'un guide se fait dans les deux langues (`fr.ts` et `en.ts`).

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
- [ ] Page d'accueil (`/fr`, `/en`, `/he`, contenu `src/content/home.ts`) : relecture par l'atelier, puis retrait du badge « Brouillon ». Points à confirmer (questions 80 à 82 de `docs/QUESTIONS_ATELIER.md`) : étapes confiées à d'autres (le site ne dit plus « sur place »), point de départ de l'année de mise à taille offerte, photos et vidéos de fabrication (intention, réponse de la FAQ marquée « À confirmer »). Formulations corrigées le 15/11 : un diamant synthétique n'est plus dit « vrai diamant » (décret 2002-65, article 4), ni sur l'accueil, ni dans la FAQ, ni dans le configurateur.
- [x] Étude du paiement en Israël (`docs/PAIEMENT.md`) et dossier pour l'avocat (`docs/juridique/DOSSIER_AVOCAT_IL.md`) (14/11).
- [ ] Paiement : ouvrir un compte Grow au nom de l'entreprise de l'atelier, demander des devis à PayPlus et Cardcom, puis développer le parcours devis → lien de paiement.
- [ ] Juridique : compléter la partie 4 du dossier avec l'atelier et consulter un avocat israélien.
- [ ] Devis : faire relire les textes hébreux du formulaire (traduction IA).
- [x] Lien de partage (16/11) : configuration dans l'adresse, bouton « Partager cette configuration », lien complet dans l'e-mail du devis et dans WhatsApp. Reste : relecture native du texte hébreu du bouton et de ses messages.
- [x] Adresses traduites (`/en/configurator/…`, `/he/configurator/…`, 14/11). Redirections passées en permanent au lancement par l'interrupteur `SITE_INDEXABLE` (voir « Lancement en Israël »).
- [x] Tests Safari et Firefox automatisés (15/11) : WebKit iPhone et iPad, Firefox sans 3D (`npm run test:e2e:browsers`). Reste le test sur appareils réels (section « Bloquant »).
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
