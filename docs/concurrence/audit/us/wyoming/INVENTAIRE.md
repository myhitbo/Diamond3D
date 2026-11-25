# Inventaire des joailliers : Wyoming

Recensement du 25 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Wyoming et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Sont exclus les vendeurs en ligne nationaux, les chaînes nationales (Kay et Zales ont des magasins à Cheyenne et Rock Springs), les grands magasins et les grandes maisons.

Méthode : lecture des pages comme un visiteur ordinaire, avec curl (identité par défaut), puis avec un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée) pour les pages en JavaScript. Le robots.txt de chaque site a été lu avant les pages, sauf un écart signalé plus bas. Au plus une page toutes les 2 secondes par site (3 secondes chez Punchmark, dont le robots.txt fixe `Crawl-delay: 2`). Aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier ouvert, aucun chat ouvert. Seuls contrôles actionnés : les deux premiers choix du configurateur 3D d'EK Jewelers (« Solitaire », puis « Oval »). Recherche par Parallel Search, requêtes génériques sur les joailliers du Wyoming.

Repères : **[V]** vérifié (page lue ou contrôle actionné le 25/11/2026, adresse en section Sources) ; **[I]** inféré (déduit d'un extrait d'index de recherche ou de plusieurs indices) ; **[S]** supposé. Prix en dollars américains, tels qu'affichés le 25/11/2026.

## Constat général

- [I] Le marché est petit : un annuaire compte 118 bijouteries dans l'État, dont Sheridan 22, Casper 16, Cheyenne 15, Rock Springs 13 et Jackson 12, avec 6 magasins Riddle's (source : jewelrystoresatlas.com, extrait d'index). Peu de sites vont au-delà de la vitrine.
- [V] Deux joailliers utilisent **le configurateur 3D en marque blanche JewelerOS**, celui déjà vu en Alabama, au Montana et en Arizona : EK Jewelers à Gillette (`data-org-id="9qVN4islemcK"`) et Rasmussen Jewelers à Rock Springs et Laramie (`data-org-id="9m9U3x5iEgwu"`). Le parcours est identique sur les deux sites : « Design your ring online in stunning 3D », choix de la pierre centrale en boutique, puis commande ; bague prête « in just a couple of weeks ». Chez EK, l'étape 2 propose « Natural » ou « Lab Grown » et 9 formes, dont la marquise ; l'étape 3 propose de 0,5 à 5 ct. [I] Comme ailleurs, la 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier.
- [V] Personne ne développe son propre configurateur ni n'affiche de prix calculé dans la 3D. La transparence passe par des catalogues à prix affichés : 311 bagues de fiançailles chez Legacy Diamond & Gems (Sheridan), 150 articles de mariage chez JC Jewelers (Jackson), 50 bagues de fiançailles chez Jackson Hole Jewelry Company.
- [V] Le synthétique est présent mais secondaire : 61 articles « Lab Grown » chez Legacy, 13 bagues synthétiques chez Rasmussen (447 à 2 495 $), choix « Lab Grown » dans la 3D d'EK, quelques anneaux chez Seevers. Jackson Hole Jewelry Company se limite aux diamants naturels.
- [V] Le récit de fabrication le plus détaillé est celui de JC Jewelers (Jackson) : croquis, modèle CAO, prototype en cire ou en résine imprimé en 3D, fonte à cire perdue, sertissage, rendez-vous possible en visio. [I] Legacy annonce deux bijoutiers d'établi sur place et des rendus CAO « before any metal is cast ». [I] Aucun ne montre la fabrication de la commande en photo ou en vidéo : le « on voit naître son bijou » de JR Diamond n'a pas d'équivalent ici.
- [V] Blocages : aucun 403, aucun captcha, aucun robots.txt n'interdit ClaudeBot sur les sites classés. Deux limites : Rasmussen répond par intermittence en erreur 522 (serveur d'origine injoignable derrière Cloudflare, ce n'est pas un blocage de robots) ; le catalogue de Fagan (Casper) est servi par un sous-domaine JewelerShowcase dont le robots.txt interdit tout (`Disallow: /`).
- [V] Écart à signaler : la page d'accueil de ce sous-domaine (`fagandiamondjewelers-frame.jewelershowcase.com`) a été chargée une fois dans le navigateur, juste après la lecture de son robots.txt qui l'interdisait. Seul constat tiré de cette page : un menu « WEDDING AND ENGAGEMENT » [P1]. Aucune autre page de ce domaine n'a été appelée.
- Exclus : **Venazia** (vendeur en ligne national ; pages « near Cheyenne », « near Laramie », « Rock Springs », « Jackson », « Evanston » générées pour le référencement, numéro national 1-800 et horaires sur le fuseau de l'Est [I] ; déjà écarté en Idaho, en Ohio et en Indiana) ; **Perrian** (vendeur en ligne ; une adresse à Cheyenne figure dans un annuaire, mais le numéro est en Floride [I]) ; **Kay** et **Zales** (chaînes de Signet). Hors sujet : Cody Jewelers (site « UNDER CONSTRUCTION » [V]), Rawhide Studio (bijoux en cuir brut [I]), Frontier Jewelers à Cheyenne (vitrine sans catalogue en ligne [I]).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | EK Jewelers (ex-Elegant Kreations) | Gillette | https://ekjewelers.com/ | https://ekjewelers.com/pages/design-your-ring (hommes : https://ekjewelers.com/pages/mens-ring-builder) | oui (3D JewelerOS, femmes et hommes) | aucun (robots.txt Shopify standard ; rien contre ClaudeBot) | [V] « Choose the setting, the stone and the metal in 3D, right on your phone » ; 4 étapes de départ actionnées (style, naturel ou synthétique et 9 formes dont marquise, carat de 0,5 à 5) ; finition avec l'orfèvre de l'atelier et un gemmologue diplômé du GIA ; bague prête « in just a couple of weeks ». Collection « Bridal » de 13 articles chiffrés de 1 299 à 18 299 $ (bague 14 k avec rapport GIA) ; collection « EK Mine » de 8 pierres nues pour le sur-mesure. Pas encore de conditions d'expédition (« policy to come »). |
| 2 | Rasmussen Jewelers | Rock Springs et Laramie (siège à Spanish Fork, Utah) | https://www.rasmussenjewelers.com/ | https://www.rasmussenjewelers.com/pages/custom-ring-builder | oui (3D JewelerOS, même parcours qu'EK) | partiel : erreurs 522 intermittentes du serveur (pas un blocage de robots) ; robots.txt Punchmark, `Crawl-delay: 2` respecté | [V] Même outil 3D et même texte qu'EK ; pierre choisie « at one of our three showrooms ». Catalogue Punchmark : 13 bagues de fiançailles synthétiques de 447 à 2 495 $ ; recherche de diamants naturels et synthétiques ; montures et alliances (Gabriel & Co., Lashbrook) en or 10, 14 et 18 k et platine. « Founded in 1885 », six générations. [I] Peut réapparaître dans l'inventaire de l'Utah (non recensé à ce jour) : à dédoublonner. |
| 3 | Legacy Diamond & Gems | Sheridan | https://www.legacydiamondgems.com/ | https://www.legacydiamondgems.com/jewelry/bridal/engagement-rings | non (catalogue et recherche de diamants) | aucun (robots.txt Punchmark, `Crawl-delay: 2` respecté) | [V] Le plus gros catalogue chiffré de l'État : 311 bagues de fiançailles (936 à 4 500 $ en première page, montures « Semi-Mount » comprises, mention « Ships Tomorrow ») ; 61 articles synthétiques, dont des bagues de fiançailles (715 à 2 395 $ en première page). [I] Sur-mesure (page indexée) : rendus CAO avant la fonte, deux bijoutiers d'établi sur place, or 14 et 18 k et platine, formes dont la marquise ; magasin familial depuis 1964. |
| 4 | JC Jewelers | Jackson | https://jcjewelers.com/ | https://jcjewelers.com/custom-pieces/ (catalogue : https://jcjewelers.com/shop/brides-and-grooms/) | non | aucun (robots.txt WordPress et Yoast, rien contre ClaudeBot) | [V] Le parcours de fabrication le mieux décrit : croquis, CAO et modèle 3D, prototype en cire ou en résine imprimé en 3D, fonte à cire perdue, sertissage et polissage ; rendez-vous en personne ou en visio avec le joaillier. 150 articles « Wedding Rings », prix de 795 à 4 225 $ en première page, bouton « Add to cart », livraison offerte dès 1 999 $. Bagues « handcrafted in Jackson Hole », diamants sans conflit, métaux « sustainable ». Pas de synthétique repéré. |
| 5 | Jackson Hole Jewelry Company | Jackson | https://www.jacksonholejewelry.com/ | https://www.jacksonholejewelry.com/collections/engagement-rings (sur mesure : https://www.jacksonholejewelry.com/pages/concierge) | non | aucun (robots.txt Shopify standard) | [V] 50 bagues de fiançailles de création maison (lignes « Le Grande Teton », « Le PeTeton »), prix « From » 3 650 à 15 590 $ en première page, or 18 k blanc ou jaune, achat direct. Service « concierge » de création : « Designed by you. Crafted by us », dessin par l'équipe, certificat, estimation écrite et garantie de 24 mois. Diamants naturels seulement. Marque haut de gamme avec revendeurs (« Stockists »). |
| 6 | Riddle's Jewelry | Rock Springs, Gillette, Casper et autres (siège à Rapid City, Dakota du Sud) | https://www.riddlesjewelry.com/ | https://www.riddlesjewelry.com/pages/engagement-ring-builder | oui (4 étapes, photos) | aucun (robots.txt Shopify ; rien contre ClaudeBot) | [V] Magasin de Rock Springs au 2441 Foothill Blvd (White Mountain Mall). [I] 6 magasins au Wyoming selon un annuaire. Enseigne régionale déjà classée 1re au Dakota du Sud : constructeur « Diamond / Setting / Customize / Review », synthétiques IGI, usine à Rapid City (voir `../south-dakota/INVENTAIRE.md`). Gardée ici pour mémoire : c'est l'offre en ligne la plus complète accessible aux clients du Wyoming. |
| 7 | Seevers Jewelers | Evanston | https://www.seeversjewelers.com/ | https://www.seeversjewelers.com/collections/engagement-rings | non | aucun (robots.txt Shopify standard) | [V] 31 articles dans « Engagement Rings », prix affichés de 125 $ (anneau en argent et diamants synthétiques) à 6 000 $ (monture « Choose Your Center Natural Diamond »). Diamants synthétiques et moissanite en plusieurs bagues. Modèles CAO faits par le joaillier de la boutique (« Jeff the Jeweler »), réparations en interne, ouvert en 2018. |
| 8 | Burri Jewelers | Cheyenne | https://burrijewelers.com/ | https://burrijewelers.com/collections/engagement-rings | non | aucun (robots.txt Shopify standard) | [V] « Cheyenne's Oldest & Finest Jeweler for Over 100 Years ». Catalogue de montures de fournisseurs (S. Kashi, Allison Kaufman, Supreme), filtres par métal dont platine, **sans prix** : fiche produit avec formulaire « Inquire ». Sur-mesure annoncé (« If you can dream it, we can build it »), avant-après en photos. |
| 9 | Fagan Diamond Jewelers | Casper | https://www.fagandiamondjewelers.com/ | https://www.fagandiamondjewelers.com/custom-jewelry (catalogue LaVie : https://www.fagandiamondjewelers.com/collections/lavie-diamond-rings) | non | partiel : catalogue « Shop » dans un cadre JewelerShowcase dont le robots.txt interdit tout (non exploré, voir l'écart plus haut) | [V] Atelier de création du centre de Casper (« Crafting one-of-a-kind jewelry for over 40 years ») ; bagues de fiançailles et alliances sur mesure ; page de la collection LaVie sans prix ; fonction « Get a Quote » et liste de souhaits annoncées sur l'accueil. |
| 10 | Okes Jewelers | Casper | https://okesdiamondcenter.com/ | https://okesdiamondcenter.com/bridal-line | non | aucun (robots.txt : seuls `/wp-admin/`, `/wp-includes/` et deux dossiers techniques interdits) | [V] Aucun prix sur la page. [I] « Custom Bridal Line » : bagues de fiançailles et alliances faites dans la boutique de Casper, taille, pierre et monture au choix ; plus de six décennies d'expérience. Aucun prix ni catalogue en ligne : retenu faute de meilleur candidat, comme le prévoit la consigne. |

## Détail par acteur

### 1. EK Jewelers (Gillette)

- [V] 304 S Gillette Ave, Gillette, WY 82716 ; ouvert en avril 2018 sous le nom Elegant Kreations ; « on-site goldsmith » et gemmologue diplômé du GIA ; slogan « Where Wyoming gets engaged ». Sources : https://ekjewelers.com/ et https://ekjewelers.com/pages/custom-engagement-rings
- [V] Outil 3D JewelerOS (`jeweleros.com/static/dist/jos.js`, `partner_config.js`). Contrôles actionnés : « Step 1 of 4 » (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ») ; « Solitaire » ouvre « Step 2 of 4 » (« Natural » ou « Lab Grown » ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; « Oval » ouvre « Step 3 of 4 » (0,5 à 5 ct). L'étape 4 et la vue 3D n'ont pas été ouvertes. Source : https://ekjewelers.com/pages/design-your-ring
- [V] Texte du parcours : « Pick out your center stone in our Gillette showroom », « we can have it ready for you in just a couple of weeks at a great price ». Source : https://ekjewelers.com/pages/custom-engagement-rings
- [V] Second outil pour les bagues d'homme (même identifiant JewelerOS). Source : https://ekjewelers.com/pages/mens-ring-builder
- [V] « Bridal » : 13 produits, de 1 299 $ (chevalière) à 18 299 $ (« 14K White Gold and Diamond Engagement Ring with GIA Report ») ; monture « Ladies Semi Mount » à 4 949 $. Source : https://ekjewelers.com/collections/bridal
- [V] « EK Mine » : « Loose gemstones for designing custom pieces », 8 produits, le plus cher à 6 499 $. Source : https://ekjewelers.com/collections/ek-mine
- [V] Les pages « Lab Grown Diamonds » et « Natural Diamonds » chargent leur contenu par script (texte vide en lecture simple). Source : https://ekjewelers.com/pages/lab-grown-diamonds
- [V] « Shipping & Returns policy to come ». Source : https://ekjewelers.com/pages/shipping-returns
- [I] Pour JR Diamond : le parcours concurrent le plus proche au Wyoming, mais sans prix dans la 3D et sans lien avec le fichier de fabrication.

### 2. Rasmussen Jewelers (Rock Springs, Laramie ; siège dans l'Utah)

- [V] Magasins : 2400 Foothill Blvd, Rock Springs, WY 82901 ; 205 S. 2nd Street, Laramie, WY 82070 ; siège « Spanish Fork (HQ) », Utah. « Founded in 1885 », six générations. Source : https://www.rasmussenjewelers.com/pages/custom-engagement-rings
- [V] Même texte et même outil qu'EK (JewelerOS, `data-org-id="9m9U3x5iEgwu"`) ; « Step 1 of 4 » affiché dans le navigateur. Source : https://www.rasmussenjewelers.com/pages/custom-ring-builder
- [V] « Lab Grown Engagement Rings » : 13 produits, de 447 à 2 495 $. Source : https://www.rasmussenjewelers.com/jewelry/engagement/lab-grown-engagement-rings
- [V] Filtres de la page « Engagement Rings » : or 10, 14 et 18 k (trois couleurs), platine ; marques Gabriel & Co., Gems One, Imagine Bridal. La liste des produits est restée sur « fetching products... » dans notre navigateur. Source : https://www.rasmussenjewelers.com/jewelry/engagement/engagement-rings
- [V] Recherche de diamants avec filtre naturel ou synthétique (`/diamonds?labGrown=1`). Source : https://www.rasmussenjewelers.com/diamonds?labGrown=1
- [V] Erreur 522 au premier appel de robots.txt, de `/pages/custom-ring-builder` et de la page des bagues synthétiques ; ces pages ont répondu 200 plus tard, au fil du parcours normal (un seul nouvel appel par page).

### 3. Legacy Diamond & Gems (Sheridan)

- [V] 11 N Main Street, Sheridan, WY 82801 (pied de page de l'accueil). [I] Propriétaire gemmologue diplômé du GIA, plus de quarante ans de métier ; magasin familial sur Main Street depuis 1964 ; « two in-house Graduate Bench Jewelers ». Source : https://www.legacydiamondgems.com/pages/sheridan-custom-jeweler (extrait d'index, page non lue)
- [I] « CAD renderings let you see the design before any metal is cast » ; or 14 et 18 k, platine. Même source.
- [V] « Engagement Rings » : « 311 product(s) found », prix de 936 à 4 500 $ en première page. Source : https://www.legacydiamondgems.com/jewelry/bridal/engagement-rings
- [V] « Lab Grown Diamond Jewelry » : « 61 product(s) found », plusieurs « Lab Created Diamond - Engagement Rings », prix de 715 à 2 395 $ en première page. Source : https://www.legacydiamondgems.com/jewelry/lab-grown-diamond-jewelry
- [I] La bijouterie « carry lab-grown diamond jewelry » et dit être « straightforward about the differences in resale value ». Source : https://www.legacydiamondgems.com/pages/sheridan-custom-jeweler
- [V] `/ringsettings` répond 404 : pas de constructeur monture puis pierre. Source : https://www.legacydiamondgems.com/ringsettings

### 4. JC Jewelers (Jackson)

- [V] 132 North Cache Street, Jackson, WY 83001 ; bijoux exposés dans une cabane en rondins du centre de Jackson. Source : https://jcjewelers.com/
- [V] Processus : « Sketch », « CAD Design & 3D Modeling », « Wax Prototype & Casting » (« often via 3D printing », « lost-wax casting »), « Finishing & Final Product ». Source : https://jcjewelers.com/custom-pieces/
- [V] « Showing 1–18 of 150 results », prix de 795 à 4 225 $ en première page, boutons d'ajout au panier ; « free shipping on all orders over $1,999 » ; « handcrafted in Jackson Hole ». Source : https://jcjewelers.com/shop/brides-and-grooms/

### 5. Jackson Hole Jewelry Company (Jackson)

- [V] Salle d'exposition au 60 E. Broadway Ave., Jackson, WY 83001 ; fondateur et équipe présentés. Source : https://www.jacksonholejewelry.com/pages/about-us
- [V] « Engagement Rings » : 50 produits, prix « From » 3 650 à 15 590 $ en première page, or 18 k blanc ou jaune. Source : https://www.jacksonholejewelry.com/collections/engagement-rings
- [V] Sur mesure : « Designed by you. Crafted by us », équipe de dessin, certificat, estimation écrite, garantie de 24 mois ; consultation privée sur place. Source : https://www.jacksonholejewelry.com/pages/concierge
- [V] « featuring natural diamonds » (pied de page de chaque page lue).

### 6. Riddle's Jewelry (magasins au Wyoming)

- [V] Page du magasin de Rock Springs, liste des services (« Custom jewelry design », « Engagement rings & loose diamonds »). Source : https://www.riddlesjewelry.com/pages/riddles-jewelry-store-rock-springs-wyoming
- [V] Le constructeur répond (200). Source : https://www.riddlesjewelry.com/pages/engagement-ring-builder. Détail du constructeur : inventaire du Dakota du Sud.
- [I] Magasins à Gillette (2610 S Douglas Hwy) et à Casper, 6 au total dans l'État (annuaires, extraits d'index).

### 7. Seevers Jewelers (Evanston)

- [V] 701 Front Street, Evanston, WY ; « Jeff the Jeweler specializes in custom jewelry and cad designs » ; ouvert en février 2018. Sources : https://www.seeversjewelers.com/ et https://www.seeversjewelers.com/pages/about-us (extrait d'index pour la seconde, [I])
- [V] 31 produits dans « Engagement Rings », de 125 à 6 000 $, dont des anneaux en diamants synthétiques et des bagues en moissanite. Source : https://www.seeversjewelers.com/collections/engagement-rings

### 8. Burri Jewelers (Cheyenne)

- [V] 2206 Dell Range Blvd #A, Cheyenne, WY 82009 ; entreprise familiale. Source : https://burrijewelers.com/
- [V] Catalogue « Engagement Rings » sans prix, bouton « Load More », filtres par métal (dont 5 articles en platine). Source : https://burrijewelers.com/collections/engagement-rings
- [V] Fiche produit avec formulaire « Inquire » (nom, e-mail, téléphone), non rempli ; « Built to hold a 1 ct center stone. Band sold separately ». Source : https://burrijewelers.com/products/engagement-ring (extrait d'index, [I])

### 9. Fagan Diamond Jewelers (Casper)

- [V] 105 E 2nd St, Casper, WY 82601 ; « Casper's custom jeweler », « for over 40 years » ; « Get a Quote for Jewelry - New Website Feature », « Wish Book », mise de côté. Source : https://www.fagandiamondjewelers.com/
- [V] La page « Shop » n'affiche qu'un cadre `fagandiamondjewelers-frame.jewelershowcase.com`, dont le robots.txt contient `User-agent: *` puis `Disallow: /`. Source : https://www.fagandiamondjewelers.com/shop
- [V] Page LaVie sans prix ; page de création sans parcours en ligne. Sources : https://www.fagandiamondjewelers.com/collections/lavie-diamond-rings et https://www.fagandiamondjewelers.com/custom-jewelry

### 10. Okes Jewelers (Casper)

- [V] Page lue (200), aucun prix. [I] 147 East 2nd Street, Casper, WY 82601 ; bagues et alliances faites sur place ; « Call 307-234-8314 to talk engagement rings ». Source : https://okesdiamondcenter.com/bridal-line
- [I] « more than six decades of experience » (extrait d'index de la page d'accueil).

## Sources

Pages lues le 25/11/2026 (code 200 sauf mention contraire) :

- EK Jewelers : https://ekjewelers.com/robots.txt, https://ekjewelers.com/, https://ekjewelers.com/pages/design-your-ring (lue, puis 2 contrôles actionnés), https://ekjewelers.com/pages/custom-engagement-rings, https://ekjewelers.com/pages/mens-ring-builder, https://ekjewelers.com/pages/lab-grown-diamonds, https://ekjewelers.com/collections/bridal, https://ekjewelers.com/collections/ek-mine, https://ekjewelers.com/pages/shipping-returns
- Rasmussen : https://www.rasmussenjewelers.com/robots.txt (522, puis 200), https://www.rasmussenjewelers.com/, https://www.rasmussenjewelers.com/pages/custom-engagement-rings, https://www.rasmussenjewelers.com/pages/custom-ring-builder (522 à la lecture simple, 200 dans le navigateur), https://www.rasmussenjewelers.com/jewelry/engagement/engagement-rings, https://www.rasmussenjewelers.com/jewelry/engagement/lab-grown-engagement-rings (522, puis 200 dans le navigateur), https://www.rasmussenjewelers.com/diamonds?labGrown=1
- Legacy Diamond & Gems : https://www.legacydiamondgems.com/robots.txt, https://www.legacydiamondgems.com/, https://www.legacydiamondgems.com/jewelry/bridal/engagement-rings, https://www.legacydiamondgems.com/jewelry/lab-grown-diamond-jewelry, https://www.legacydiamondgems.com/jewelry/custom-jewelry (redirige vers `/jewelry/exclusive-collections/custom-jewelry`), https://www.legacydiamondgems.com/ringsettings (404)
- JC Jewelers : https://jcjewelers.com/robots.txt (après redirection de `www`), https://jcjewelers.com/, https://jcjewelers.com/shop/brides-and-grooms/, https://jcjewelers.com/custom-pieces/, https://jcjewelers.com/product/one-of-a-kind-18k-bezel-set-oval-diamond-solitaire-ring/
- Jackson Hole Jewelry Company : https://www.jacksonholejewelry.com/robots.txt, https://www.jacksonholejewelry.com/collections/engagement-rings, https://www.jacksonholejewelry.com/pages/about-us, https://www.jacksonholejewelry.com/pages/concierge
- Riddle's : https://www.riddlesjewelry.com/robots.txt, https://www.riddlesjewelry.com/pages/riddles-jewelry-store-rock-springs-wyoming, https://www.riddlesjewelry.com/pages/store-locator (contenu chargé par script, non exploité), https://www.riddlesjewelry.com/pages/engagement-ring-builder
- Seevers : https://www.seeversjewelers.com/robots.txt, https://www.seeversjewelers.com/collections/engagement-rings
- Burri : https://burrijewelers.com/robots.txt, https://burrijewelers.com/, https://burrijewelers.com/collections/engagement-rings
- Fagan : https://www.fagandiamondjewelers.com/robots.txt, https://www.fagandiamondjewelers.com/, https://www.fagandiamondjewelers.com/shop, https://www.fagandiamondjewelers.com/collections/lavie-diamond-rings, https://www.fagandiamondjewelers.com/custom-jewelry ; https://fagandiamondjewelers-frame.jewelershowcase.com/robots.txt, puis la page d'accueil de ce domaine (écart, voir le constat général)
- Okes : https://okesdiamondcenter.com/robots.txt, https://okesdiamondcenter.com/bridal-line
- Hors classement : https://www.perrian.com/robots.txt ; http://codyjewelers.com/ (page « UNDER CONSTRUCTION » ; robots.txt absent, 404 ; la connexion HTTPS n'a pas abouti)

Extraits d'index de recherche (Parallel Search), utilisés pour les faits marqués [I] :

- https://jewelrystoresatlas.com/wyoming et https://jewelrystoreatlas.com/wyoming/sheridan (nombre de bijouteries par ville, magasins Riddle's)
- https://www.jewelrystoredirectory.com/city/cheyenne, https://www.jewelrystoredirectory.com/city/casper, https://www.jewelrystoredirectory.com/store/diamond-tree-casper-wyoming (Perrian, Rawhide Studio, Diamond Tree, Bejeweled By Linda)
- https://www.venazia.com/custom-rings-cheyenne-wy, https://www.venazia.com/custom-jewelry-laramie-wy, https://www.venazia.com/wedding-rings-rock-springs-wy, https://www.venazia.com/wedding-rings-jackson-wy, https://www.venazia.com/custom-rings-evanston-wy
- https://www.legacydiamondgems.com/pages/sheridan-custom-jeweler, https://www.legacydiamondgems.com/pages/sheridan-bridal-jewelry, https://www.seeversjewelers.com/pages/about-us, https://burrijewelers.com/products/engagement-ring, https://okesdiamondcenter.com/, https://www.frontierjewelers.com/, https://www.rawhidestudio.com/, https://www.facebook.com/CodyJewelers

Non retenus faute de site exploitable ou d'offre en ligne repérée : Diamond Tree et Bejeweled By Linda (Casper), CR Diamonds & Gems et Marshall Jewelry (Gillette), On The Rocks Jewelry (Sheridan), The Golden Buffalo (Riverton), Bill Coffey Goldsmith et Reynolds Jewelers (Rock Springs). Ils n'ont pas été visités [S : catalogues en ligne absents ou réduits].
