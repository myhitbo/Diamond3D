# Inventaire des joailliers en ligne : Western Australia et Territoire du Nord

Date : 25 novembre 2026. Recenseur du territoire « Western Australia (avec le Territoire du Nord) ».
Étude parente : `docs/concurrence/2026-11-15_australie.md`. Monroe Yorke et Temple & Grace, qui ont une salle à Perth, sont déjà fichés dans `audit/au/new-south-wales/INVENTAIRE.md` ; ils ne sont pas reclassés ici.

Légende :
- **[Vn]** vérifié : page lue ou contrôle actionné le 25/11/2026 (source n en fin de fichier) ;
- **[En]** extrait : texte renvoyé par le moteur de recherche le 25/11/2026, page non ouverte (ou non exploitable) ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), TTC, tels qu'affichés. Les sites disent « lab-grown » ; ce document dit « synthétique ». Plusieurs sites affichaient des soldes de fin d'année le 25/11 : certains prix peuvent être remisés.

## Méthode

- Recherche par requêtes génériques (« Perth jeweller build your own engagement ring », « Darwin jeweller engagement rings online », « Perth wedding bands online shop prices jeweller », etc.), sans mention de JR Diamond.
- Avant toute page, contrôle de l'adresse par l'outil `robots.cjs` (groupe `User-agent: *`), puis lecture du robots.txt pour repérer les groupes visant les agents d'Anthropic (`ClaudeBot`, `Claude-Web`, `anthropic-ai`) et les `Crawl-delay`.
- Lecture par curl avec son identité par défaut, au moins 2,5 s entre deux requêtes vers un même site. Pages chargées en JavaScript : Chromium sans écran (Playwright, identité par défaut non modifiée), une seule ouverture par page, 9 à 15 s d'attente.
- Contrôles actionnés : aucun clic dans les configurateurs. Les valeurs relevées sont celles affichées par défaut au chargement. Aucun formulaire, aucun compte, aucun ajout au panier, aucune conversation ouverte. Pas d'affichage iPhone dans ce recensement (il relève de l'audit par site).
- « Configurateur : oui » désigne un outil en étapes qui assemble monture, pierre et métal, sur une page dédiée ou dans la fiche produit.

## Blocages et écart

- **Linneys** (Perth, joaillier haut de gamme) : le robots.txt répond HTTP 429 avec une page HTML. L'outil le classe INCONNU : site traité comme **bloqué**, aucune page ouverte [V0].
- **AUREK** (Perth) : le robots.txt interdit tout le site à `ClaudeBot`, `Claude-Web` et `anthropic-ai` (`Disallow: /`) ; la règle générale autorise tout [V0]. L'auditeur est un agent Claude : le site est traité comme **fermé**, seuls des extraits de recherche sont cités.
  - **Écart à signaler** : la page d'accueil a été lue une fois par curl, dans la même commande que la lecture du robots.txt, avant que le groupe visant Claude soit examiné. Son contenu n'est pas utilisé ici et le fichier local a été supprimé.
- **Kavalri** : accueil lu (HTTP 200) ; la fiche produit suivante a renvoyé HTTP 429 et une page « Verifying your connection... » [V5]. Pas de nouvel essai : **bloqué** au-delà de l'accueil.
- **Venezia Jewellery** (Darwin) : même réponse (429, « Verifying your connection... ») sur la collection des bagues synthétiques, après un accueil lu normalement [V12]. **Bloqué** au-delà de l'accueil.
- **Moi Moi** (consultations sur rendez-vous à Perth) : son robots.txt interdit nommément les agents d'Anthropic (constat du recensement Victoria). Aucune page ouverte ; non classé.
- **Sinclairs** autorise explicitement `ClaudeBot` et `anthropic-ai` (`Allow: /`) [V0].
- **Jewellery Design Studio** fixe `Crawl-delay: 10` pour tous les robots [V0] ; aucune page ouverte, seuls des extraits sont cités.
- Tous les autres robots.txt autorisent les pages citées, sans groupe visant Claude [V0].

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique [I]. La colonne « adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Jogia Diamonds | Perth (CBD, salle sur rendez-vous) | https://www.jogiadiamonds.com.au/ | https://www.jogiadiamonds.com.au/engagement_rings/ | oui (3 étapes, **3D temps réel** par monture et par métal) | aucun | Seul joaillier du territoire avec une **vue 3D WebGL** de chaque monture (fichier de scène par modèle et par métal). Prix de la monture par métal, recherche de diamants naturels et synthétiques chiffrés à l'unité, fabrication interne en 2 à 4 semaines, CAO à 200 AUD avec maquette imprimée à essayer [V1][V2][V3][V4] |
| 2 | VYOR Diamond Lab | Wembley (Perth), atelier et salle | https://vyor.com.au/ | https://vyor.com.au/collections/engagement-rings | oui (dans la fiche : monture, pierre, personnalisation, total en direct) | aucun | Configurateur en 3 étapes avec **total affiché** (3 445 AUD par défaut pour une marquise, avec diamant synthétique de 2 ct) et acompte de 50 % chiffré. Or 14 ou 18 carats, ou platine. Pierre approuvée sur certificat avant fabrication, rendu CAO, 6 à 8 semaines. Synthétique et moissanite seulement [V6][V7][V8] |
| 3 | Stelios Jewellers | Mt Hawthorn (Perth), atelier et salle | https://www.stelios.com.au/ | https://www.stelios.com.au/bespoke-ring-builder/ | oui (**3D WebGL**, outil hébergé chez un tiers) | aucun | Constructeur 3D : pierre naturelle ou synthétique, tête, corps, métal, alliance assortie, gravure. Mais **pas de prix** (« Enquire Now »). Puis CAO, prototype en argent ou en résine à essayer, 4 à 6 semaines. Atelier depuis 2007 [V9][V10] |
| 4 | Swales Diamond Jewellers | Mandurah (Halls Head) | https://www.swales.com.au/ | https://www.swales.com.au/collections/bespoke-engagement-rings | oui (3 étapes : monture, diamant, bague) | aucun | 193 montures « From » (4 499 à 5 399 AUD sur la première page), diamants naturels ou synthétiques. Bagues prêtes chiffrées avec « Add to cart » (68 en fiançailles), retour sous 14 jours. CAO, 3 à 7 semaines. Recherche de diamants non chargée dans notre rendu [V13][V14][V15][V16] |
| 5 | Vinny & Charles | Perth (atelier en ligne, sur rendez-vous) | https://vinnyandcharles.com/ | https://vinnyandcharles.com/collections/engagement-rings-perth | non (fiche avec choix du métal ; sur mesure guidé) | aucun | Marque en ligne : prix affichés, choix 14 k, 18 k ou platine et « Add to cart ». Sur mesure **dès 3 000 AUD**, modèle 3D avant fabrication, 4 à 6 semaines. Un avis client publié parle de photos de fabrication demandées et reçues. Synthétique et pierres de couleur [V17][V18][V19][V20] |
| 6 | Kavalri | Subiaco (salle de Perth) ; siège à Hawthorn East (Victoria) | https://kavalri.com.au/ | https://kavalri.com.au/pages/engagement-rings-perth1 | oui (selon le site : monture puis diamant, « custom build ») [E] | **partiel** (429 « Verifying your connection » sur fiche produit) | Prix « From » sur l'accueil (1 596 à 10 875 AUD) [V5]. Selon des extraits [E21] : « complete level of price transparency », diamants naturels (GIA) et synthétiques (IGI) chiffrés, vidéo 360° des pierres, fabrication en 4 à 6 semaines. Quatre salles en Australie [V5] |
| 7 | AUREK | Perth | https://aurek.com.au/ | https://aurek.com.au/ | non (achat direct au prix tout compris) [E] | **fermé aux agents Claude** (robots.txt) | Seulement d'après des extraits [E22] : bagues synthétiques en or 18 carats, « one complete price », certificat IGI dès 0,50 ct, délai d'une à deux semaines selon l'extrait. Très proche de l'offre de JR Diamond (IGI dès 0,50 ct, délai court), à surveiller sans robot |
| 8 | Scagnetti Fine Jewellers | Cottesloe (Perth), atelier et salle | https://www.scagnetti.com.au/ | https://www.scagnetti.com.au/engagement-wedding | non | aucun | 73 bagues prêtes, toutes chiffrées (jusqu'à 68 800 AUD), faites dans l'atelier de Cottesloe ; famille de joailliers depuis 1978. Diamants naturels seulement. Haut de gamme, sans parcours en ligne [V23][V24] |
| 9 | Venezia Jewellery | Darwin (Territoire du Nord) | https://veneziajewellery.com.au/ | https://veneziajewellery.com.au/collections/lab-diamond-engagement-ring | non (fiches à options) | **partiel** (429 sur la collection) | Seul site du Territoire du Nord avec prix et panier. Solitaires synthétiques en or 18 carats « From 2,450 » AUD, bijoux en diamants naturels chiffrés, « Add to cart » [V12] |
| 10 | Sinclairs Jewellers | Ardross (Perth), atelier sur place | https://sinclairsjewellers.com.au/ | https://sinclairsjewellers.com.au/engagement-ring-design/ | non | aucun (ClaudeBot autorisé) | Parcours sur mesure décrit en 6 étapes : CAO, maquette imprimée en résine, « firm quotation » avant fabrication. Atelier sur place, naturel et synthétique. Aucun prix de bague en ligne [V25][V26][V27] |

## Fiches

**1. Jogia Diamonds** : 488 Murray St, Perth WA 6000, sur rendez-vous ; ABN 52 084 545 817 [V1]. Se dit « Australia's Oldest Internet Diamond Merchant » [V2].
- Parcours en 3 étapes : « Choose Ring Design », « Choose a Diamond », « Complete Ring » [V2][V3].
- Catalogue de 17 pages de montures [V2]. Exemple « The Jogia Setting » (ER29) [V3] :
  - 1 500 AUD en platine, 1 800 AUD en or 18 carats jaune, rose ou blanc ;
  - pierre centrale « not included in the price » ;
  - boutons « Add to Ring Builder » et « Enquire About This Ring » ;
  - fabrication interne, « between two to four weeks » ; première mise à taille offerte.
- **Vue 3D** [V3] :
  - la fiche intègre `360viewer.php?code=ER29-platinum` ;
  - ce cadre ouvre un `canvas` WebGL et charge une scène `/WEBEX/ER29-platinum.webex` par un lecteur WebAssembly ;
  - rendu observé dans notre Chromium : la bague tourne, se zoome et se déplace (consignes « Move Around Axis », « Zoom In and Out ») ;
  - un fichier par modèle et par métal [I] ; nous ne savons pas s'il est tiré du fichier de fabrication.
- Diamants [V1][V4] :
  - plus de 130 000 pierres GIA et AGS selon l'accueil ;
  - recherche de diamants synthétiques chiffrés à l'unité (premières lignes : 0,11 ct E VVS2 à 111,03 AUD) ;
  - filtres forme, carat, pureté, prix, taille, couleur, poli.
- Sur mesure [V4] :
  - CAO envoyée par e-mail, retouches possibles ;
  - maquette imprimée en 3D à essayer, « no extra charge » ;
  - environ 200 AUD de conception pour une bague de fiançailles ;
  - acompte pour le diamant et la conception.
- Services listés : retours jusqu'à 30 jours, financement sans intérêts, gravure et mise à taille offertes [V1].
- Cité positivement sur un forum de Perth (pierres GIA, prix, sur mesure) : `docs/concurrence/forums/2026-11-15_09-au.md`.
- Pour JR Diamond : la 3D par monture et par métal est la plus proche de notre configurateur parmi les sites lus en Australie. Le prix est donné poste par poste (monture, puis pierre) [I].

**2. VYOR Diamond Lab** (anciennement Diamond Lab) : 28/350 Cambridge Street, Wembley WA 6014 ; « Wembley Atelier » sur rendez-vous, consultation vidéo possible [V6].
- Configurateur dans la fiche produit, en trois étapes : « Setting », « Stone », « Personalise » [V7][V8]. Exemple de la Tulip Marquise Pavé Cathedral, valeurs affichées par défaut [V8] :
  - métal 14K Yellow Gold, anneau 1,8 mm ;
  - « Complete ring with a 2ct E/VS1 lab diamond », **TOTAL 3 445 AUD**, acompte de 1 723 AUD ;
  - suppléments de métal affichés : + 203 AUD et + 406 AUD [I : 18 carats et platine] ;
  - choix diamant synthétique ou moissanite, carat, couleur, pureté ; anneau de 1,8, 2,0 ou 2,2 mm ;
  - taille australienne de E à Z2, ou « Not sure yet » ; pierres de naissance (deux offertes) ; plan d'entretien en option ;
  - « Production time Standard · 6–8 weeks ».
- Avant fabrication : « Our gemologist sources the stone to this spec and sends you the certificate to approve before crafting begins » [V8]. Rendus CAO pour toute pièce sur mesure [V7].
- Paiement [V6] :
  - acompte de 50 %, non remboursable, la production commençant aussitôt ; solde remboursable jusqu'à l'expédition ;
  - Afterpay, Klarna, humm, PayPal, cryptomonnaie.
- Bagues prêtes à expédier sous 3 à 5 jours ouvrés, par exemple une marquise pavée 2,02 ct D VVS2, or 18 carats, 6 290 AUD [V6].
- Vidéos de produit en lecture automatique sur la fiche [V8]. Diamants IGI ou GIA [V6]. Pas de diamant naturel.
- Pour JR Diamond : le meilleur exemple local de prix total en direct, avec acompte. Le délai est quatre fois plus long que le nôtre [I].

**3. Stelios Jewellers** : atelier et salle à Mt Hawthorn (Perth), fondé en 2007 [V9].
- « Online Custom Ring Builder » sur `/bespoke-ring-builder/`, dans un cadre servi par `main.di1xsemah3mhv.amplifyapp.com` [V10]. L'hôte n'a pas de robots.txt (404) : autorisé [V0].
- Options du constructeur [V10] :
  - diamant ou pierre de couleur ; naturel ou synthétique ;
  - forme, taille, couleur, pureté ;
  - tête (« Ring Head »), corps (« Ring Shank »), sertissage latéral, métal ;
  - alliance assortie, taille, gravure (choix de police) ;
  - bouton « Enquire Now ».
- 3D : un `canvas` WebGL charge un modèle `configurator/static/UV_TCC.glb` (CloudFront). Dans notre rendu, la scène est restée vide et des valeurs affichaient « undefined » : la 3D n'a pas été vue [V10].
- Le site présente l'outil comme un brouillon : « The builder is a visual starting point, not the final word » [V10].
- Processus [V10] :
  - consultation en atelier ou en vidéo ;
  - CAO, y compris un rendu porté à la main ;
  - prototype en argent ou en résine à garder « for a day or two » ;
  - poinçonnage ; diamants GIA ou équivalent ; 4 à 6 semaines.
- Pour JR Diamond : même technique (GLB dans un canvas WebGL), mais sans prix et avec un modèle générique [I].

**4. Swales Diamond Jewellers** : Shop 44, Halls Head Central, 14 Guava Way, Halls Head WA 6210 (Mandurah) ; « Mandurah's most established jeweller » [V13].
- Constructeur « Bespoke Engagement Ring Builder » en trois étapes [V14] :
  - « Choose Your Setting », « Choose Your Diamond », « Complete Your Ring » ;
  - 193 montures ;
  - « Choose from our inventory of mined diamonds and lab-grown diamonds » ;
  - exemples : « Marquise Cut Diamond Wave Set Engagement Ring » from 4 499 AUD, demi-clos ovale from 4 699 AUD.
- Recherche de diamants : `/apps/ub/diamonds-ai?jewelry_type=ring`. Dans notre rendu, seul le choix de forme est apparu, sans liste de pierres [V14].
- Collection fiançailles : 68 produits chiffrés avec « Add to cart » [V13]. Exemple : toi et moi synthétique (deux pierres de 1 ct environ, DEF/VS) en or 18 carats, 6 399 AUD, « made to order, with delivery available within 5 weeks » [V15].
- Retour ou échange sous 14 jours ; Afterpay et Zip [V15].
- Sur mesure : croquis ou rendu CAO, fabrication de 3 à 7 semaines [V16].
- Pour JR Diamond : un détaillant régional qui a adopté le constructeur en 3 étapes, sans 3D [I].

**5. Vinny & Charles** : « Location: Perth, Australia », sur rendez-vous ; bijoux « handcrafted in our workshop in Western Australia » [V18][E19b].
- Collection « Engagement Rings Perth » : 59 produits chiffrés [V17].
- Fiche « Alexandrite East-West Lab Diamond Engagement Ring » [V20] :
  - 5 499 AUD ;
  - métal au choix : 14 k (rose, blanc, jaune), 18 k (rose, blanc, jaune) ou platine ;
  - taille, « Add to cart » ; pièces faites sur commande.
- Sur mesure [V19] :
  - « Custom designs start from AU$3000 » ;
  - modèle 3D numérique avec images détaillées ; 4 à 6 semaines ;
  - devis valable environ 7 jours (cours des métaux).
- Avis clients publiés sur la collection [V17] : vidéos de la pierre envoyées avant le choix ; photos de fabrication demandées et reçues ; modèles 3D envoyés pendant le processus.
- Pour JR Diamond : le récit le plus proche de « on voit naître son bijou », mais seulement à la demande du client [I].

**6. Kavalri** : salle de Perth, Suite 8 (Level 1), 177-183 Rokeby Road, Subiaco WA 6008. Autres salles à Hawthorn East (Victoria), Brisbane (214 Elizabeth Street) et Sydney (428 George Street) [V5].
- Accueil [V5] :
  - prix « From » de 1 596 à 10 875 AUD ;
  - parcours en salle ou en ligne : « photorealistic 3D model » revu avec le designer, « six weeks » ;
  - essai de toute la collection en salle.
- Fiche produit bloquée (429) [V5]. Selon des extraits [E21] :
  - « over a hundred engagement ring designs », puis diamant naturel ou synthétique « transparently priced through our diamond portal » ;
  - diamants internationaux avec « 360 online video » ;
  - 4 à 6 semaines de fabrication.
- La FAQ citée dans l'extrait parle de clients « outside of Melbourne » : siège à Melbourne [I]. Établi dans le territoire par sa salle seulement. Non classé dans l'inventaire Victoria.

**7. AUREK** : Perth. Fermé aux agents Claude par son robots.txt [V0]. Tout ce qui suit vient d'un extrait de recherche [E22] :
- « From Perth, Western Australia · Solid 18k gold » ;
- « Every stone of 0.50ct and above carries an IGI certificate you can verify yourself » ;
- « One complete price, insured to your door, made in one to two weeks » ;
- bagues de fiançailles dès 2 290 AUD, alliances dès 1 490 AUD.
- Le délai et les prix peuvent avoir changé depuis l'indexation [S]. À vérifier à la main par le propriétaire s'il le souhaite.

**8. Scagnetti Fine Jewellers** : 18 Napoleon St, Cottesloe WA 6011 ; « making jewellery since 1978 … in Cottesloe since 1996 » [V23].
- Page fiançailles : « Bespoke engagement rings, made in our Cottesloe workshop » ; « Natural diamonds, made in our own workshop, and never rushed » [V24].
- 73 bagues prêtes, chacune avec son prix. Exemples : solitaire en platine 950, 68 800 AUD ; solitaire ovale en platine, 29 800 AUD [V24].
- Pas de configurateur, ni de synthétique [V24].

**9. Venezia Jewellery** : Shop 2/32 Mitchell St, Darwin City NT 0800 [V12].
- Accueil [V12] :
  - solitaires synthétiques en or 18 carats blanc ou jaune (ovale, émeraude, rond, poire), « From 2,450 » AUD, bouton « Choose options » ;
  - bijoux en diamants naturels avec prix et « Add to cart » ;
  - livraison gratuite en Australie, retrait en boutique obligatoire au-delà de 10 000 AUD.
- Collection des bagues synthétiques : bloquée (429) [V12].
- Les autres joailliers de Darwin relevés n'affichent pas de prix (Chris Williams, Wanguri [V28]).

**10. Sinclairs Jewellers** : 7-9 Riseley Street, Ardross [V25]. Atelier « on-site in Ardross », conception par CAO [V27].
- Parcours en 6 étapes sur `/engagement-ring-design/` [V25] :
  - dessins et rendus ;
  - « firm quotation » (« There are no unexpected costs ») ;
  - recherche de diamants ;
  - maquette imprimée en 3D en résine ;
  - fabrication sur place.
- Page fiançailles : « Diamond and Lab Grown », mais aucun prix de bague [V26].

## Autres candidats, non retenus

- **Linneys** (Perth) : bloqué dès le robots.txt (429) [V0].
- **Jewellery Design Studio** (133 Grand Boulevard, Joondalup) : atelier depuis plus de 30 ans, dessins et rendus 3D, devis ferme. Pas de prix ni de parcours en ligne ; naturel et synthétique [E29].
- **Chris Williams Retail & Manufacturing Jewellers** (22 Cubillo St, Wanguri, Darwin) : fabricant, page synthétique ; site vitrine sans prix [V28].
- **Creations Jewellery** (118 High St, Fremantle) et **Ecali Fine Jewellery** (91 Rokeby Rd, Subiaco) : sur mesure décrit, sans configurateur [E30]. Non ouverts.
- **Monroe Yorke** (salle St Georges Terrace, Perth) et **Temple & Grace** (salle de Subiaco) : déjà fichés dans l'inventaire New South Wales. Monroe Yorke : prix « From », CAO sous 7 à 10 jours, vidéo 360° des pierres, « about 50% of our 2026 Perth sales are lab-grown » [E31].
- **Moi Moi** (consultations à Perth) : son robots.txt interdit les agents d'Anthropic. Non ouvert.
- **Cullen**, **Rings of Australia**, **Brilliyond** : pages « Perth » ou « Darwin » écrites pour le référencement, entreprises établies dans d'autres États [E30][I]. Brilliyond dit n'avoir aucune boutique à Darwin (« No, but we have a workshop in Gold Coast ») [E30].

## Ce qu'il faut retenir pour JR Diamond [I]

- **3D** : deux joailliers de Perth montrent une bague en 3D temps réel.
  - Jogia : un fichier de scène par monture et par métal, rendu vu dans notre navigateur [V3].
  - Stelios : modèle GLB dans un configurateur paramétrique, rendu non vu [V10].
  - Aucun ne dit que la 3D vient du fichier de fabrication. Ce point reste distinctif pour JR Diamond.
- **Prix** : VYOR montre un total en direct et l'acompte chiffré [V8]. Jogia donne le prix de la monture par métal, puis le prix de chaque pierre [V3][V4]. Jogia affiche le platine moins cher que l'or 18 carats sur la monture lue (1 500 contre 1 800 AUD) [V3].
- **Délai** : les délais lus vont de 2 à 8 semaines (Jogia 2 à 4, Stelios 4 à 6, VYOR 6 à 8) [V3][V8][V10]. Seule AUREK annonce une à deux semaines [E22], comparable aux 14 jours ouvrés de JR Diamond.
- **Fabrication visible** :
  - maquette imprimée ou prototype en argent à essayer (Jogia, Stelios, Sinclairs) [V4][V10][V25] ;
  - pierre approuvée sur vidéo ou certificat avant le sertissage (VYOR [V8], AUREK [E22]) ;
  - photos de fabrication seulement à la demande, chez Vinny & Charles [V17] ;
  - aucun site lu ne promet systématiquement des photos ou vidéos de l'établi.
- **Synthétique** : présent chez tous les classés, sauf Scagnetti (naturel seulement) [V24]. VYOR et AUREK ne vendent que du synthétique (et de la moissanite chez VYOR) [V6][E22].

## Sources (lues ou extraites le 25/11/2026)

- [V0] robots.txt lus avant toute page (outil `robots.cjs`, puis lecture des groupes visant les agents d'IA) :
  - https://www.jogiadiamonds.com.au/robots.txt, https://vyor.com.au/robots.txt, https://www.stelios.com.au/robots.txt ;
  - https://main.di1xsemah3mhv.amplifyapp.com/robots.txt (404) ;
  - https://www.swales.com.au/robots.txt, https://vinnyandcharles.com/robots.txt, https://kavalri.com.au/robots.txt ;
  - https://aurek.com.au/robots.txt (`Disallow: /` pour ClaudeBot, Claude-Web, anthropic-ai) ;
  - https://www.scagnetti.com.au/robots.txt, https://veneziajewellery.com.au/robots.txt ;
  - https://sinclairsjewellers.com.au/robots.txt (`Allow: /` pour ClaudeBot) ;
  - https://jdstudio.com.au/robots.txt (`Crawl-delay: 10`) ;
  - https://www.chriswilliamsjewellers.com/robots.txt, https://ecali.com.au/robots.txt, https://www.creationsjewellery.com.au/robots.txt ;
  - https://www.mydiamonds.com.au/robots.txt ;
  - https://www.linneys.com.au/robots.txt (HTTP 429, page HTML).
- [V1] https://www.jogiadiamonds.com.au/ (curl).
- [V2] https://www.jogiadiamonds.com.au/engagement_rings/ (curl).
- [V3] https://www.jogiadiamonds.com.au/engagement_rings/classic-knife-edge-diamond-engagement-ring-ER29/ (curl et Chromium, capture), cadre https://www.jogiadiamonds.com.au/engagement_rings/360viewer.php?code=ER29-platinum (curl).
- [V4] https://www.jogiadiamonds.com.au/diamonds/lab-grown-diamonds.php et https://www.jogiadiamonds.com.au/information/design.php (Chromium).
- [V5] https://kavalri.com.au/ (curl, 200) ; https://kavalri.com.au/products/allegra-grande-oval-diamond-engagement-ring-setting (HTTP 429, « Verifying your connection... », non réessayé).
- [V6] https://vyor.com.au/ et https://vyor.com.au/products/aura-glide-marquise-pave-lab-diamond-engagement-ring-2-02ct-d-vvs2 (curl).
- [V7] https://vyor.com.au/pages/our-crafting-process, https://vyor.com.au/collections/engagement-rings, https://vyor.com.au/pages/customise-lab-diamond-moissanite (curl).
- [V8] https://vyor.com.au/products/tulip-marquise-pave-cathedral-solitaire-ring (curl et Chromium).
- [V9] https://www.stelios.com.au/engagement-rings/ (curl).
- [V10] https://www.stelios.com.au/bespoke-ring-builder/ (Chromium) et son cadre https://main.di1xsemah3mhv.amplifyapp.com/ (Chromium, capture, requête du fichier `UV_TCC.glb` relevée).
- [V12] https://veneziajewellery.com.au/ (curl, 200) ; https://veneziajewellery.com.au/collections/lab-diamond-engagement-ring (HTTP 429, non réessayé).
- [V13] https://www.swales.com.au/collections/engagement-rings (curl).
- [V14] https://www.swales.com.au/collections/bespoke-engagement-rings et https://www.swales.com.au/apps/ub/diamonds-ai?jewelry_type=ring (Chromium).
- [V15] https://www.swales.com.au/collections/engagement-rings/products/18ct-yellow-gold-lab-grown-diamond-ring-2734-18yd-2 (curl).
- [V16] https://www.swales.com.au/pages/custom-design (curl).
- [V17] https://vinnyandcharles.com/collections/engagement-rings-perth (curl).
- [V18] https://vinnyandcharles.com/pages/contact-us (curl).
- [V19] https://vinnyandcharles.com/pages/engagement-ring-design-online (curl).
- [E19b] Extrait de recherche de https://vinnyandcharles.com/collections/engagement-wedding-rings (« handcrafted in our workshop in Western Australia »).
- [V20] https://vinnyandcharles.com/products/alexandrite-east-west-lab-diamond-engagement-ring (curl).
- [E21] Extraits de recherche de https://kavalri.com.au/pages/engagement-rings-perth1 et https://kavalri.com.au/pages/wedding-rings-perth.
- [E22] Extrait de recherche de https://aurek.com.au/ (page non exploitée : robots.txt fermé aux agents Claude ; voir l'écart ci-dessus).
- [V23] https://www.scagnetti.com.au/ (curl).
- [V24] https://www.scagnetti.com.au/engagement-wedding (curl).
- [V25] https://sinclairsjewellers.com.au/engagement-ring-design/ (curl).
- [V26] https://sinclairsjewellers.com.au/engagement/ (curl).
- [V27] https://sinclairsjewellers.com.au/workshop/ (curl).
- [V28] https://www.chriswilliamsjewellers.com/ (curl).
- [E29] Extraits de recherche de https://jdstudio.com.au/custom-engagement-rings et https://jdstudio.com.au/ ; aucune page ouverte (`Crawl-delay: 10` lu, aucun besoin de lecture).
- [E30] Extraits de recherche de https://local.creationsjewellery.com.au/, https://ecali.com.au/bespoke-engagement-rings-perth, https://cullenjewellery.com/en-au/engagement-rings/custom/au-perth, https://ringsofaustralia.com.au/pages/shop-engagement-rings-in-darwin-australia, https://www.brilliyond.com.au/locations/darwin.
- [E31] Extrait de recherche de https://www.mydiamonds.com.au/pages/engagement-rings-perth.
