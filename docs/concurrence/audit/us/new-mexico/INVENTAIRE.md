# Inventaire des joailliers : Nouveau-Mexique

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Nouveau-Mexique et qui vendent en ligne des bagues de fiançailles ou des alliances, avec au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Vendeurs en ligne nationaux, chaînes nationales (Kay, Zales…), grands magasins et grandes maisons exclus.

Méthode : recherche web générique (Parallel Search) pour trouver les candidats, puis lecture des pages comme un visiteur ordinaire. Le robots.txt de chaque site a été contrôlé avant ses pages avec l'outil `robots.cjs` (groupe `User-agent: *`), puis lu en entier pour les groupes visant les agents d'IA. Pages lues dans un Chromium sans écran (Playwright, identité « HeadlessChrome » non modifiée) et, pour trois pages, avec curl tel quel. Au plus une page toutes les 2 secondes par site (`Crawl-delay: 2` de Cone Jewelers respecté). Aucun formulaire rempli, aucun compte créé, aucun panier ouvert, aucun chat ouvert, aucun contrôle actionné : le configurateur JewelerOS a seulement été affiché à son étape 1. Aucune protection contournée. Trois écarts involontaires sont décrits plus bas (section « Écarts »).

Repères :

- **[V]** vérifié : page lue le 25/11/2026, adresse dans le tableau, les fiches ou les sources ;
- **[I]** inféré : déduit d'éléments vérifiés ou d'un extrait d'index de recherche ;
- **[S]** supposé : non vérifié.

Prix en dollars américains, tels qu'affichés le 25/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

## Constat général

- [V] Trois joailliers utilisent le **configurateur 3D en marque blanche JewelerOS**, le même qu'en Alabama, au Missouri ou au Nevada : John Thomas Jewelers (Albuquerque), Harris Jewelers (Rio Rancho) et Bullock's Jewelry (Roswell). Leurs pages chargent `jeweleros.com/static/dist/jos.js` ou `partner_config.js` avec des identifiants de partenaire propres (`9mqxNxFm0zZI`, `9mqxPEf3o2cy`, `9gAllRRehZZu`). L'étape 1 est identique partout : « Step 1 of 4 », « Let's start designing your ring », 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) et « Start from scratch ». Les trois pages d'accompagnement reprennent le même texte en trois temps : « Design your ring online in stunning 3D », choix de la pierre centrale en boutique, puis commande avec l'équipe. [I] La 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier : c'est la différence que revendique JR Diamond.
- [V] **John Thomas Jewelers** tient le discours le plus proche de « l'atelier en direct » : tout est fait sur place à Albuquerque (CAO, fonte, polissage, sertissage, gravure), le client peut regarder le créateur travailler derrière une vitrine, il reçoit avant fabrication des images 3D et une vidéo de la bague en rotation, et peut essayer une maquette en cire ou en résine. Une garantie « No-Regrets Ring » refait la bague gratuitement pendant un an.
- [V] Argument de la bourse du diamant : **Harris Jewelers** dit envoyer son équipe deux fois par an aux « Diamond Offices » d'Anvers, grâce à l'Independent Jewelers Organization, et choisir chaque pierre à la main. C'est l'équivalent local de l'argument « Bourse de Ramat Gan » de JR Diamond.
- [V] Le diamant synthétique est partout et chiffré : solitaires « Created Diamond » de 3 100 à 5 900 $ et 1 ct synthétique offert pour l'achat d'une monture d'au moins 1 500 $ chez Bullock's ; recherche de diamants synthétiques chez Reflective Jewelry et Cone Jewelers ; la première page de Mark Diamond's est presque entièrement en synthétique (de 2 775 à 4 777 $).
- [V] Les ateliers d'artisans de Santa Fe et de Taos vendent en ligne avec leurs prix : **Reflective Jewelry** (217 bagues de fiançailles faites dans son atelier, or Fairtrade, travail sur mesure à distance par Zoom) et **Marian Maloney** (choix d'une pierre en ligne, bague faite à la main en 4 à 6 semaines).
- [V] Aucun site ne détaille la composition du prix (métal, façon, pierre). [V] Harris prévient seulement que le prix des commandes spéciales suit le cours de l'or (« Current gold pricing on special orders can vary »).
- [V] Blocages : le catalogue de Mark Diamond's est en partie servi par un cadre Jeweler Showcase (Stuller) dont le robots.txt interdit tout robot (`Disallow: /`) : il n'a pas été lu. Boudreau's Jewelers (Las Cruces) est injoignable (certificat HTTPS qui ne correspond pas au domaine) : marqué bloqué et écarté. Garcia & Co. (Farmington) a fermé sa boutique en ligne (page protégée par mot de passe). Aucun captcha ni refus 403 sur les dix sites classés.

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | John Thomas Jewelers | Albuquerque | https://johnthomasjewelers.com/ | https://johnthomasjewelers.com/pages/design-your-ring | oui (3D JewelerOS, 4 étapes) | non (Shopify, robots.txt `Allow: /` pour `*` ; appels `jeweleros.com/api/` interdits par le robots.txt de JewelerOS, coupés à la lecture de l'étape 1) | [V] 3D JewelerOS ; fabrication entièrement sur place, créateur visible derrière une vitrine, rendus 3D et vidéo en rotation avant fabrication, maquette en cire ou en résine à essayer, devis individuel avant production ; refabrication gratuite pendant un an (« No-Regrets Ring ») ; 5 bagues en ligne de 1 439 à 11 800 $. Le plus proche du positionnement de JR Diamond. |
| 2 | Harris Jewelers | Rio Rancho (agglomération d'Albuquerque) | https://harrisjewelersnm.com/ | https://harrisjewelersnm.com/pages/custom-ring-builder | oui (3D JewelerOS, 4 étapes) | non (Shopify, même robots.txt) | [V] 3D JewelerOS ; « ready for you in just a couple of weeks » ; 150 bagues de fiançailles en ligne avec bouton « Add to cart », 1 299 à 4 625 $ sur la première page ; pierres choisies à la main à Anvers deux fois par an ; prix des commandes spéciales lié au cours de l'or. Entreprise dirigée par des femmes, plus de vingt ans. |
| 3 | Bullock's Jewelry | Roswell | https://www.bullocksjewelry.com/ | https://www.bullocksjewelry.com/custom-ring-builder/ | oui (3D JewelerOS, 4 étapes ; site Thinkspace) | non (robots.txt : agents d'IA explicitement autorisés ; `/cart`, `/checkout`, `/search` et filtres interdits, non visités) | [V] 3D JewelerOS ; 110 articles de mariage et fiançailles à prix affiché, 1 000 à 5 900 $ sur la première page, dont 9 solitaires en diamant synthétique de 2 à 3,11 ct (3 100 à 5 900 $) ; 1 ct synthétique offert pour une monture d'au moins 1 500 $ ; « 100 Years ». |
| 4 | Reflective Jewelry | Santa Fe | https://www.reflectivejewelry.com/ | https://www.reflectivejewelry.com/all-engagement-rings ; sur mesure : https://www.reflectivejewelry.com/custom (redirige vers `/news/custom-jewelry-design-process`) ; synthétique : https://www.reflectivejewelry.com/lab-grown-diamonds | non (catalogue à prix affichés et recherche de diamants synthétiques) | non (robots.txt sans interdiction pour les pages lues) | [V] Atelier et galerie dans le même bâtiment, six personnes, depuis 1995 ; 217 bagues de fiançailles faites sur place, 879 à 6 265 $ sur la première page ; or Fairtrade (« First and only Fairtrade Gold Jeweler in USA ») ; sur mesure à distance par Zoom, courriels et dessins, plus d'un tiers des clients hors de l'État ; recherche de diamants synthétiques par forme et prix ; retour sous 30 jours, mise à taille gratuite. |
| 5 | Crown Jewels & Coin | Albuquerque | https://crownjewelsandcoin.com/ | https://crownjewelsandcoin.com/collections/engagement-rings ; diamants : https://crownjewelsandcoin.com/pages/loose-diamonds | non (catalogue et recherche de diamants) | non (Shopify) | [V] 15 pages de bagues de fiançailles à prix affiché (« about $2,995 to $39,995 » selon la page) ; recherche de 26 388 diamants certifiés GIA, AGS ou IGI ; naturel et synthétique ; collection maison « Southwestern Bridal » (incrustations de turquoise et d'opale) conçue et fabriquée sur place ; marques Verragio, LeVian, Luminar. |
| 6 | Marian Maloney Fine Jewelry (ancien nom Chinchar Maloney) | Taos | https://marian-maloney.com/ (l'ancienne adresse chincharmaloney.com y redirige) | https://marian-maloney.com/custom-jewelry | partiel (« Build a Ring » : choix d'une pierre en ligne, sans 3D) | non (Squarespace : agents d'IA dans le même groupe que `*`, pages lues autorisées) | [V] « Build a Ring » : pierres présentées avec dimensions en mm et prix « from » (779 à 3 420 $ sur les premières fiches), bague faite à la main en 4 à 6 semaines, suivi par courriel de bout en bout ; diamants « rustiques » et « salt & pepper », saphirs du Montana ; bijoux de 545 à 8 785 $ en page d'accueil. Pas de synthétique vu. |
| 7 | Ooh! Aah! Jewelry | Albuquerque | https://oohaahjewelry.com/ | https://oohaahjewelry.com/engagement-rings ; sur mesure : https://oohaahjewelry.com/custom-jewelry | non | non (robots.txt `Allow: /` ; `Content-Signal: ai-train=no`) | [V] 94 bagues de fiançailles à prix affiché (1 750 à 6 685 $ sur la première page), diamant synthétique, moissanite, pierres de couleur, bagues anciennes ; 1 073 pièces en ligne ; sur mesure sur rendez-vous ; depuis 1988, quartier de Nob Hill. |
| 8 | Mark Diamond's Jewelers | Albuquerque | https://m-diamond.com/ | https://m-diamond.com/rings/diamond-engagement-rings/ | non | partiel : la page `/engagement/` charge un catalogue en cadre `markdiamondsjewelers-frame-categoryembed.jewelershowcase.com`, interdit à tout robot (`Disallow: /`), non lu | [V] 54 bagues de fiançailles (filtre de prix 1 430 à 10 890 $), filtres « Lab Diamond » et « Natural Diamond », 11 des 12 premières en synthétique ; sur mesure en quatre temps : « Design Consultation », « 3D Modeled Design », « Materialization », « Final Unveiling » ; « 52+ Years ». |
| 9 | Cone Jewelers | Carlsbad | https://www.conejewelers.com/ | https://www.conejewelers.com/diamonds ; montures : https://www.conejewelers.com/jewelry/bridal/engagement-ring-settings | non (recherche de diamants naturels ou synthétiques ; pas de constructeur de bague vu) | non (Punchmark, `Crawl-delay: 2` respecté) | [V] 577 montures de fiançailles (Romance Diamond, Gems One, Carizza), toutes « Call for Price » sur la première page, « Ships in 7-10 Business Days » ; recherche de diamants avec onglets « Natural » et « Lab-Grown » ; marques synthétiques au menu (Pure Grown Diamonds, Green Rocks Diamonds). Prix cachés : intérêt limité. |
| 10 | deBella Fine Gems & Jewelry Arts | Santa Fe | https://debellajewelry.com/ | https://debellajewelry.com/product-category/love-engagement/engagement-rings/ | non | non (robots.txt sans interdiction pour les pages lues) | [V] 126 bagues de fiançailles et alliances en ligne, sans prix sur la liste (« SEE MORE ») ; un pendentif à 1 720 $ avec « ADD TO CART » ; création sur mesure par un créateur gemmologue qui dit acheter ses pierres en Afrique, en Asie, en Israël et en Europe. [I] Retenu faute de mieux : pas de prix sur les bagues. |

## Écartés ou non retenus

- **Garcia & Co. Jewelers** (Farmington) : [V] https://garciajewelers.com/ redirige vers `/password` (« Opening Soon »), avec l'annonce « RETIREMENT SALE HAPPENING NOW! » et « AVAILABLE IN-STORE ONLY ». [I] D'après l'extrait de l'index de recherche, le site proposait une conception 3D sur téléphone ; elle n'est plus accessible.
- **Boudreau's Jewelers & Gallery** (Las Cruces) : **bloqué**. [V] Robots.txt illisible : certificat HTTPS qui ne correspond pas à `www.boudreaujewelers.com`, et le proxy de la session n'accepte pas le HTTP simple. L'outil le classe INCONNU : site traité comme bloqué, aucun nouvel essai. [I] Selon l'index de recherche, site vitrine sans boutique (« Bridal », « Custom Jewelry Designs »).
- **Luna Felix Goldsmith** (Santa Fe) : [V] bijoux en granulation faits main ; commande sur mesure par prise de contact (occasion, catégorie, modèle, date). Pas de boutique de bagues de fiançailles vue.
- **Venazia** : pages « Albuquerque », « Santa Fe » et « Las Cruces » trouvées par la recherche ; [I] vendeur en ligne national (numéro en 1-800, « Available today until 9pm EST »), hors périmètre.
- **Fairchild & Co.** (Santa Fe) et **Austin's Jewelry** (Las Cruces) : [S] non lus ; Fairchild reçoit sur rendez-vous, Austin's n'apparaît que sur la page d'un fournisseur (Sylvie). Moins d'intérêt supposé que les dix retenus.
- Kay et Zales (Albuquerque, Farmington, Las Cruces, Santa Fe) : chaînes nationales, exclues.

## Écarts

- **JewelerOS** : à la première lecture des pages de John Thomas, Harris et Bullock's (accueil et configurateur), le navigateur a laissé le module JewelerOS appeler `www.jeweleros.com/api/` de lui-même, alors que le robots.txt de jeweleros.com interdit `/api/`. Ces appels n'ont pas été demandés par nous et leur contenu n'a pas été lu. La lecture de l'étape 1 citée ici a été refaite avec ces appels coupés (3 appels bloqués par page). Aucun constat ne vient de la première lecture.
- **Mark Diamond's** : la page `/engagement/` a chargé dans notre navigateur le cadre Jeweler Showcase, interdit à tout robot. Son contenu n'a pas été lu (seul le texte de la page principale est relevé) et aucun constat n'en vient. Les lectures suivantes ont coupé ce domaine.
- **Boudreau's** : la page d'accueil en HTTPS a été demandée dans la même commande que le contrôle du robots.txt, avant d'en lire le résultat (INCONNU). Réponse 502, rien obtenu, aucun nouvel essai.
- **Marian Maloney** : `chincharmaloney.com` (robots.txt lu, autorisé) a redirigé vers `marian-maloney.com`, dont la page d'accueil a été chargée avant la lecture de son robots.txt. Celui-ci a été lu juste après : page autorisée.

## Fiches

### 1. John Thomas Jewelers (Albuquerque)

- [I] 10501 Montgomery Blvd NE, 2nd Floor, Albuquerque, NM 87111 (extrait de recherche de la page sur mesure).
- [V] Configurateur : script `jos.js`, `data-org-id="9mqxNxFm0zZI"` (HTML lu avec curl). Étape 1 affichée, rien d'actionné. Source : https://johnthomasjewelers.com/pages/design-your-ring
- [V] « Before your ring's made, you get a full 3D rendering of your design: still images plus a video that spins the ring » ; maquette « wax or resin » à essayer ; « Nothing moves into production until you've seen and approved » ; garantie « No-Regrets Ring » (refabrication gratuite pendant un an). Source : https://johnthomasjewelers.com/pages/custom-engagement-rings
- [I] Extraits de la FAQ de la même page, vus dans l'index de recherche : CAO, fonte, polissage, sertissage, mise à taille et gravure « under one roof » ; le créateur visible dans « our working jewelry lab » ; devis individuel avant production.
- [V] « SHOWING 5 OF 5 DESIGNS » : 1 439 $, 1 990 $, 2 499 $, 3 749 $, 11 800 $. Source : https://johnthomasjewelers.com/collections/engagement-rings
- [V] Fondateurs formés au GIA, « more than 2,000 custom rings » dessinées par le fondateur. Source : https://johnthomasjewelers.com/

### 2. Harris Jewelers (Rio Rancho)

- [I] 909 36th Place SE, Rio Rancho, NM 87124 (extrait de recherche de la page sur mesure).
- [V] Configurateur : `data-org-id="9mqxPEf3o2cy"`, étape 1 identique. Source : https://harrisjewelersnm.com/pages/custom-ring-builder
- [I] Page sur mesure (extrait de recherche) : « we can have it ready for you in just a couple of weeks ». Source : https://harrisjewelersnm.com/pages/custom-engagement-rings
- [V] « Showing: 150 Results » ; 9 prix en première page, de 1 299 à 4 625 $, avec « Add to cart » ; montures sans pierre centrale (« semi-mounts ») ; mention du cours de l'or pour les commandes spéciales. Source : https://harrisjewelersnm.com/collections/engagement-rings
- [V] « Twice a year, our team flies to Antwerp » ; accès aux « Diamond Offices » par l'Independent Jewelers Organization ; « Nothing is bought from a list ». Source : https://harrisjewelersnm.com/pages/antwerp-diamonds
- [S] Les fondateurs de John Thomas et la propriétaire de Harris portent le même prénom (Janelle) et les deux sites ont la même structure : un lien entre les deux maisons est possible, non vérifié.

### 3. Bullock's Jewelry (Roswell)

- [I] 215 N Main St, Roswell, NM 88201 (extrait de recherche).
- [V] Configurateur : `data-org-id="9gAllRRehZZu"`, site « Thinkspace » ; étape 1 identique. Source : https://www.bullocksjewelry.com/custom-ring-builder/
- [V] « 110 Items » ; première page de 24 articles de 1 000 à 5 900 $, dont « 3.03ctw Created Diamond Solitaire » à 5 900 $ et « 2.00ctw Bezel Oval Created Diamond Solitaire » à 3 100 $. Source : https://www.bullocksjewelry.com/catalog/bridal-engagement/
- [V] « Free 1-carat created diamond with any semi-mount ring purchase of $1,500 or more » ; « Making Cherished Memories for 100 Years ». Source : https://www.bullocksjewelry.com/
- [V] La page `/design-studio/` ne montre aucun contenu lisible (titre seul). Source : https://www.bullocksjewelry.com/design-studio/

### 4. Reflective Jewelry (Santa Fe)

- [V] 912 Baca Street Suite D, Santa Fe, NM 87505 ; « a business of just six people, established in 1995 » ; atelier et galerie dans le même bâtiment ; « Over a third of our business is from outside New Mexico. Through Zoom, emails, and drawings ». Source : https://www.reflectivejewelry.com/custom (adresse finale `/news/custom-jewelry-design-process`)
- [V] « ALL ENGAGEMENT RINGS (217) » ; première page de 879 à 6 265 $ ; métaux or jaune, blanc, rose, bicolore, platine. Source : https://www.reflectivejewelry.com/all-engagement-rings
- [V] Recherche « SELECT LAB GROWN DIAMONDS » (prix, carat, une quarantaine de formes dont la marquise) ; données chargées au clic, non actionné. « Free Shipping », « 30 Day returns », « Free Resizing », « Lifetime Guarantee ». Source : https://www.reflectivejewelry.com/lab-grown-diamonds
- [V] « First and only Fairtrade Gold Jeweler in USA ». Source : https://www.reflectivejewelry.com/

### 5. Crown Jewels & Coin (Albuquerque)

- [V] Depuis 2006, salle d'exposition sur San Mateo Blvd ; revendeur Verragio et Movado ; « more than 1,000 five-star reviews on Google ». Source : https://crownjewelsandcoin.com/
- [V] 15 pages ; prix de 2 495 $ (« from ») à 39 995 $ en première page ; « Our engagement rings run from about $2,995 to $39,995 » ; collection « Southwestern Bridal » conçue et fabriquée sur place. Source : https://crownjewelsandcoin.com/collections/engagement-rings
- [V] « SEARCH DIAMONDS : Showing 26,388 diamonds » ; certificats GIA, AGS ou IGI ; alignement sur un prix plus bas. Source : https://crownjewelsandcoin.com/pages/loose-diamonds

### 6. Marian Maloney Fine Jewelry (Taos)

- [I] 114 Kit Carson Rd Suite B, Taos, NM 87571, sur rendez-vous (extrait de recherche de chincharmaloney.com).
- [V] « Build a Ring : Choose from a selection of our loose diamonds and gemstones and build your own custom ring. We will handcraft your ring in 4-6 weeks » ; fiches de pierres avec dimensions (par exemple 10,8 × 9,4 mm) et prix « from » ; rubriques « Custom Consultation » et « Heirloom Restyle ». Source : https://marian-maloney.com/custom-jewelry
- [V] Bijoux en page d'accueil de 545 à 8 785 $. Source : https://marian-maloney.com/

### 7. Ooh! Aah! Jewelry (Albuquerque)

- [V] 110 Amherst Dr SE, Albuquerque, NM 87106 ; « Founded in 1988 » ; « 1,073 pieces available online ». Source : https://oohaahjewelry.com/
- [V] « 94 pieces » ; par exemple « Amada 1.0 ctw Lab Diamond… 14k White Gold Engagement Ring » à 2 526 $, « Emerald cut Diamond 1.33ctw 14k Yellow Gold Engagement Ring » à 6 685 $. Source : https://oohaahjewelry.com/engagement-rings
- [V] Sur mesure sur rendez-vous ou sans rendez-vous ; « PIECES WE HAVE MADE » (97 de plus). Source : https://oohaahjewelry.com/custom-jewelry

### 8. Mark Diamond's Jewelers (Albuquerque)

- [V] 8000 Paseo Del Norte Blvd NE Suite B-1 ; « For over 52 years » ; financement Synchrony et location Acima. Source : https://m-diamond.com/
- [V] 54 bagues, filtre de prix 1 430 à 10 890 $, première page de 2 775 à 4 777 $. Source : https://m-diamond.com/rings/diamond-engagement-rings/
- [V] Étapes du sur-mesure et cadre Jeweler Showcase (non lu). Source : https://m-diamond.com/engagement/

### 9. Cone Jewelers (Carlsbad)

- [I] 111 S Canyon St, Carlsbad, NM 88220 (extrait de recherche de la page d'accueil) ; site Punchmark.
- [V] « 577 product(s) found », « Call for Price », « Ships in 7-10 Business Days ». Source : https://www.conejewelers.com/jewelry/bridal/engagement-ring-settings
- [V] Recherche de diamants « Natural » / « Lab-Grown », filtres forme, prix, carat, taille (l'adresse ajoute `?carat=0.1-20` d'elle-même). Source : https://www.conejewelers.com/diamonds

### 10. deBella Fine Gems & Jewelry Arts (Santa Fe)

- [I] 66 E. San Francisco St, Santa Fe, NM 87501 (extrait de recherche).
- [V] « SHOWING 1–12 OF 126 RESULTS », aucun prix sur la liste. Source : https://debellajewelry.com/product-category/love-engagement/engagement-rings/
- [V] Créateur gemmologue ; voyages d'achat « throughout Africa, Southeast Asia, India, Pakistan, Israel, and Europe ». Source : https://debellajewelry.com/

## Sources

Recherche (Parallel Search, requêtes génériques en anglais, 25/11/2026) : joailliers et bagues de fiançailles à Albuquerque, Santa Fe, Las Cruces, Taos, Roswell, Farmington, Carlsbad, Clovis, Hobbs ; annuaire `jewelrystoreatlas.com/custom-jewelers/new-mexico` (extrait seulement).

Pages lues le 25/11/2026 (Chromium sans écran, sauf mention) :

- https://johnthomasjewelers.com/ ; /pages/design-your-ring (aussi avec curl) ; /pages/custom-engagement-rings ; /collections/engagement-rings
- https://harrisjewelersnm.com/ ; /pages/custom-ring-builder (aussi avec curl) ; /collections/engagement-rings ; /pages/antwerp-diamonds
- https://www.bullocksjewelry.com/ ; /custom-ring-builder/ (aussi avec curl) ; /design-studio/ ; /catalog/bridal-engagement/
- https://www.reflectivejewelry.com/ ; /custom ; /all-engagement-rings ; /lab-grown-diamonds
- https://crownjewelsandcoin.com/ ; /collections/engagement-rings ; /pages/loose-diamonds
- https://chincharmaloney.com/ (redirige vers https://marian-maloney.com/) ; https://marian-maloney.com/custom-jewelry
- https://oohaahjewelry.com/ ; /engagement-rings ; /custom-jewelry
- https://m-diamond.com/ ; /engagement/ ; /rings/diamond-engagement-rings/
- https://www.conejewelers.com/ ; /jewelry/bridal/engagement-ring-settings ; /diamonds
- https://debellajewelry.com/ ; /product-category/love-engagement/engagement-rings/
- https://garciajewelers.com/ (redirige vers /password)
- https://www.lunafelixgoldsmith.com/ ; /custom-order-luna-felix-goldsmith-santa-fe-jewelry-store
- https://www.boudreaujewelers.com/ (502, voir « Écarts »)

Robots.txt lus : ceux des domaines ci-dessus, plus `www.jeweleros.com` (`Disallow: /api/`) et `markdiamondsjewelers-frame-categoryembed.jewelershowcase.com` (`Disallow: /`).
