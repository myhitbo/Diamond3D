# Inventaire des joailliers : Nebraska

Recensement du 15 novembre 2026, fait pour l'étude de concurrence de JR Diamond (marché des États-Unis). Lecture seule, comme un visiteur : aucun formulaire rempli ou envoyé, aucun compte créé, aucune conversation ouverte, aucun panier. Pour chaque site, le robots.txt a été lu (curl) avant toute lecture de page. Les pages ont été lues par Firecrawl (proxy ordinaire, sans mode furtif) ou par curl, à raison d'une page toutes les 2 secondes au plus par site.

Légende : **V** = vérifié (page lue, adresse en source) ; **I** = inféré (déduit d'une page lue ou d'un extrait de moteur de recherche) ; **S** = supposé.

Exclus d'office, comme le demande la consigne : vendeurs nationaux en ligne, chaînes nationales (Kay, Zales, Helzberg, Jared…), grands magasins et grandes maisons.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Martin Jewelry | Elkhorn (West Omaha) et Nebraska City | https://martinjewelry.net/ | https://martinjewelry.net/pages/womens-ring-builder | oui | non | Configurateur 3D en temps réel : orbite, zoom, rotation automatique, vue « On hand » avec choix du teint, 5 étapes, choix naturel ou synthétique. Total « On request » suivi d'une demande de devis : c'est le modèle de JR Diamond (V). |
| 2 | Mikado Diamonds | Omaha (vente en ligne seulement) | https://mikadodiamonds.com/ | https://mikadodiamonds.com/collections/settings-ring-builder | oui | non | Parcours monture → pierre → bague complète. Prix affichés (« From $995 »), synthétique, naturel et moissanite, 14 et 18 k et platine, vidéo par métal et par forme. Délai annoncé : 3 à 6 semaines (V). |
| 3 | Sartor Hamann Jewelers | Lincoln et Grand Island | https://sartorhamann.com/ | https://sartorhamann.com/custom-ring-builder/ | oui | non (la page du configurateur porte `noindex`, ce qui ne gêne pas la lecture) | Configurateur 3D en marque blanche StoneAlgo (« 3D Ring Designer », 5 étapes, 8 styles de départ). Le dessin se termine en boutique (V). |
| 4 | Borsheims | Omaha | https://www.borsheims.com/ | https://www.borsheims.com/design-your-engagement-ring | oui (I) | **oui** : Cloudflare (robots.txt répond 403 « Just a moment… ») | Grand joaillier régional. Configurateur en 3 étapes (monture, diamant, ou synthétique en premier). Synthétiques certifiés IGI (I, extraits de moteur de recherche). |
| 5 | A. T. Thomas Jewelers | Lincoln | https://atthomasjewelers.com/ | https://atthomasjewelers.com/build-your-own.aspx | oui | non | Configurateur en marque blanche Caratwise avec prix « Starting at ». Configurateur d'alliances Lashbrook. Stocks naturels et synthétiques, page de méthode du sur-mesure et galerie (V). |
| 6 | Lovette Jewelers | Lincoln | https://www.lovettejewelers.com/ | https://www.lovettejewelers.com/build-your-own.aspx | oui | non | Même module Caratwise qu'A. T. Thomas, avec les mêmes prix « Starting at ». Page dédiée aux diamants synthétiques (V). |
| 7 | Hériter Gems | Omaha (studio du quartier Blackstone) | https://www.heritergems.com/ | https://www.heritergems.com/custom-engagement-rings-bridal | non | non | Sur-mesure en 6 étapes décrites : découverte, choix de la pierre, CAO vue « from every angle », fabrication, contrôle qualité, essayage. Consultation par visioconférence et naturel ou synthétique. Promesse de battre les prix affichés à Omaha (V). |
| 8 | Perspective Jewelry | Omaha (North Downtown) | https://www.perspectivejewelry.com/ | https://www.perspectivejewelry.com/#custom | non | non | La fabrication la plus transparente du Nebraska : CAO 3D faite avec le client, rendu photoréaliste, cire imprimée en 3D ou fraisée, fonte du platine dans l'atelier. Pas de vente en ligne de bagues de fiançailles (V). |
| 9 | Wetzel & Truex Jewelers | Norfolk | https://wetzelandtruexjewelers.com/ | https://wetzelandtruexjewelers.com/pages/custom-band-builder | oui (alliances seulement) | non | Boutique Shopify avec prix affichés pour les bagues de fiançailles (2 380 à 4 710 $ en page d'accueil). « Custom Band Builder » intégré par iframe Ava Couture (V). |
| 10 | Malashock Jewelry | Omaha | https://malashocks.com/ | https://malashocks.com/designers/ava-couture/ | non (renvoi vers un créateur) | **partiel** : `/diamonds/` renvoie curl vers `/verify.html` (contrôle anti-robot) | Recherche de diamants avec rubrique synthétique. « Design your own » mène à la page du créateur Ava Couture. Prix sur demande à cause de la volatilité des métaux (V). |

## Détail par acteur

### 1. Martin Jewelry (Elkhorn et Nebraska City)
- **V** Adresses : « West Omaha: 18881 West Dodge Road Suite 213C Elkhorn, NE 68022 » et « 904 Central Avenue, Nebraska City, NE, 68410 » (page d'accueil). Entreprise familiale sur trois générations.
- **V** Le menu « Build Your Ring » propose « Ring Builder » (`/apps/ring-creator/rb-setting-list`), « Womens Ring Builder » (`/pages/womens-ring-builder`) et « Men's Band Builder » (`/pages/benchmark-ring-builder`).
- **V** Sur `/pages/womens-ring-builder`, le configurateur est en 3D temps réel : « Loading 3D model… », « DRAG TO ORBIT · SCROLL TO ZOOM », « Auto-rotate on », bascule « 3D / On hand » sur une main modèle avec trois teints de peau (« Darker / Lighter »). Il compte 5 étapes (« Step 1 of 5 — Diamond »). Choix « Lab Grown / Natural », forme (8 formes, marquise comprise), carat de 1 à 5, couleur, pureté et couleur de la pierre centrale. Tailles américaines de 3 à 13 avec leur diamètre en mm (taille 7 = Ø 17,3 mm). Les ressources graphiques viennent de `ringfacet.com`.
- **V** Prix : « Estimated total — On request ». Certaines options montrent un écart relatif (« E+5% », « VVS2+10% ») ; chaque taille porte la mention « Quote ». Le parcours se termine par un formulaire « Request a Quote » (non rempli).
- **V** Mentions visibles : « PRICE MATCH PROMISE », « FREE, INSURED SHIPPING ». La page `/pages/custom-design` décrit un sur-mesure par CAO, avec le choix « Lab-grown diamond / Earth-mined diamond / Colored gemstone / Use my own stone(s) ». La page d'accueil promet « A lifelike 3D rendering » du projet.
- **I** C'est le concurrent local le plus proche de JR Diamond : 3D, prix sur devis, synthétique. Le module 3D semble être un service en marque blanche (ringfacet). Rien n'indique que le modèle 3D soit le fichier de fabrication.

### 2. Mikado Diamonds (Omaha)
- **V** Page « About » : « family owned and operated company based in Omaha, NE », « We only sell online », « Since 2009 ». Membre du JBT. Labos cités : GIA, IGI, GCAL. Le menu propose « Request an In-Person Consultation (Omaha, NE) » et « Book A Virtual Appointment ».
- **V** Configurateur en 3 étapes (`/collections/settings-ring-builder`) : « Choose a Setting », « Choose a Diamond », « View Complete Ring ». Départ possible par « a lab-grown diamond » ou « a moissanite ». Filtres de métal : 14K or rose, blanc et jaune, 18K blanc et jaune, platine. Prix affichés à partir de 995 $ ; le filtre de prix indique « The highest price is $84,170 ». La liste des montures compte 41 pages.
- **V** Texte de la page : « Every Mikado Diamonds setting is expertly crafted in-house ». La fiche produit (`/products/jacklynn-lab-grown-diamond-engagement-ring`) dit : « Each ring is made to order », « Most custom engagement rings… take about 4 to 6 weeks… Simpler solitaire designs… around 3 weeks », « 30 Day Returns », « Free Insured Shipping ».
- **V** Le code de la fiche contient une vidéo par combinaison métal × forme, hébergée chez `assets.stullercloud.com`, et prévoit des visionneuses 360 (« Vision360 », « loupe360 »).
- **I** Les vidéos Stuller laissent penser que les montures viennent du catalogue du fabricant Stuller, ce qui nuance le « crafted in-house ». Modèle en ligne pur, prix transparents, synthétique en tête : c'est un repère utile pour la page de prix de JR Diamond.

### 3. Sartor Hamann Jewelers (Lincoln et Grand Island)
- **V** « Since 1905 », quatrième génération, « 3 Convenient Locations » (Lincoln et Grand Island). Téléphone (402) 476-8561.
- **I** Adresse de Grand Island : 3337 W State St, Suite B (extraits MapQuest et Sylvie dans le moteur de recherche).
- **V** `/custom-ring-builder/` : « Step 1 of 5 — Let's start designing your ring… you'll be able to fully customize your design in our 3D Ring Designer ». Styles proposés : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone. Mention « StoneAlgo » ; méta-description : « Design your custom ring online then come discuss in store with our specialists ». Méta `robots: noindex, nofollow, noarchive`, qui interdit l'indexation mais pas la lecture.
- **V** Menu : « Custom Engagement Rings », « Design Your Dream Ring », panier présent (vente en ligne).
- **I** Les prix dans le configurateur n'ont pas été vérifiés : le contenu 3D se charge en JavaScript et n'a pas été actionné.

### 4. Borsheims (Omaha) : bloqué
- **V** `https://www.borsheims.com/robots.txt` lu par curl répond 403 avec une page Cloudflare « Just a moment… ». Le site n'a pas été lu davantage, conformément à la consigne (aucun nouvel essai, aucun autre client).
- **I** D'après les extraits du moteur de recherche Firecrawl du 15/11/2026 : « Design Your Own Engagement Ring », avec trois départs (« Start with a setting », « Start with a diamond », « Start with a Lab Grown Diamond », `/design-your-engagement-ring/start-with-lab-diamond`). Extraits cités : « Create your own engagement ring in three simple steps using Borsheims' online ring builder » ; « all of our lab-grown diamonds come with IGI… certification » ; téléphone 402.391.0400.
- **S** La présence de prix et d'images 360 dans le configurateur est probable pour un acteur de cette taille, mais elle n'est pas vérifiée.

### 5. A. T. Thomas Jewelers (Lincoln)
- **V** Adresse : 6420 O Street, Lincoln, NE 68510.
- **V** `/build-your-own.aspx` : « Design a Ring as Unique as Your Love… Start with a Setting / Start with a Diamond… Design with our Studio Collection ». Exemples de prix « Starting at » : Tiana 1 591 $, Corinne 1 239 $, Catriona 2 058 $. Métaux : or blanc, jaune, rose et platine. Le module vient de `release.caratwise.com` (vu dans le source de la page) ; les images viennent de `hb-image-cdn.jewelverse.com`.
- **V** Menu : « Build Your Wedding Band » (`/lashbrook.aspx`), « Earth-Mined » et « Lab Grown » (stocks de diamants), « Custom Design — Our Process / Our Custom Gallery », panier présent.

### 6. Lovette Jewelers (Lincoln)
- **V** Adresse : 6100 O Street, Suite 274, Lincoln, NE 68505. Rubriques « Natural Diamonds » et « Lab Grown Diamonds ».
- **V** `/build-your-own.aspx` reprend le même module Caratwise, avec le même texte et les mêmes prix « Starting at » que chez A. T. Thomas (Tiana 1 591 $, Ziva 2 018 $, etc.).
- **V** Le robots.txt n'a pas de ligne `User-agent` ; il interdit seulement `/js/`, `/css/` et quelques scripts.
- **I** Ces prix identiques d'un détaillant à l'autre viennent du catalogue du fournisseur, pas d'un calcul propre au bijoutier.

### 7. Hériter Gems (Omaha)
- **V** « Omaha's Premier Custom Jewelry Experience ». Studio du quartier Blackstone. Équipe de « GIA Graduate Gemologists, Master Craftsman, and JoA Certified Designers ». Rendez-vous « In-Person » ou « Virtual Design Consultation » par Calendly.
- **V** `/custom-engagement-rings-bridal` décrit 6 étapes, dont « Design & CAD Visualization… so you can see your ring from every angle before it's ever made » et « Handcrafting… casting to setting ». Pierres : « natural diamonds, lab-grown, or colored gemstones ». Promesse de battre les prix affichés à Omaha, ou 100 $ de crédit.
- **V** Pas de prix ni de configurateur en ligne.

### 8. Perspective Jewelry (Omaha)
- **V** Adresse : 1320 Mike Fahey St, Omaha, NE 68102. « Custom Jewelry — Made in Omaha! » ; entreprise familiale (Powell).
- **V** Méthode décrite : « Consultation » ; « 3D CAD design… we often do this with you… From the CAD model we generate a realistic photo » ; « Wax Model… on either our 3D printer, CNC milling machine or… hand carving » ; « we are the only jeweler in Omaha that casts platinum in house ». Avis client : « originally 3D printed in wax and then cast into metal ».
- **V** Le seul lien « Shop Online » mène à argentsports.com (bijoux sportifs). Il n'y a ni vente en ligne de bagues de fiançailles, ni prix.
- **I** C'est l'exemple local le plus proche de la promesse « on voit naître son bijou », mais seulement en boutique et sans contenu de fabrication en ligne (pas de vidéo).

### 9. Wetzel & Truex Jewelers (Norfolk)
- **V** Adresse : 2001 Market Lane, Norfolk, NE 68701. « Independently owned & operated since 1905 ». Boutique Shopify avec panier. Prix des bagues de fiançailles ASHI en page d'accueil : 2 380 $ à 4 710 $.
- **V** `/pages/custom-band-builder` intègre une iframe `avacoutures.com/retailer/eternity-ring-detail/…` : c'est un configurateur d'alliances du fournisseur Ava Couture.

### 10. Malashock Jewelry (Omaha) : partiellement bloqué
- **V** Adresse : 16811 Burke St. #112, Omaha, NE 68118. « Your Trusted Omaha Jeweler for More Than 125 Years ». Menu : « Diamond Search », « Laboratory Grown Diamonds », « Custom Jewelry Designs ». Bandeau : « Due to the volatility in metal values, please inquire with us for current prices ».
- **V** La bannière « Design your own » mène à `/designers/ava-couture/` (page de créateur, pas un configurateur propre).
- **V** `https://malashocks.com/diamonds/` lu par curl répond 302 vers `/verify.html?next=/diamonds/` (contrôle anti-robot). Pas de nouvel essai.

## Autres candidats examinés, non retenus dans les 10

| Acteur | Ville | Raison |
|---|---|---|
| Akala Jewelry (https://akalajewelry.com/) | Lincoln, 4230 South 33rd St #200 | Boutique Shopify avec prix (bijoux de couleur de 405 à 1 325 $), sur-mesure sur rendez-vous, pas de configurateur visible en page d'accueil (V). |
| 14 Karat (https://www.14karatomaha.com/) | Omaha, 16950 Wright Plaza, suite 127 | Catalogue de créateurs (A. Jaffe, Sylvie, Gabriel & Co.) ; message « call the store for pricing » à cause de la volatilité des métaux ; pas de configurateur (V). |
| Michael Tish Jewelers (https://www.michaeltishjewelers.com/) | Lincoln, 5305 O Street | Site Wix sommaire, « Shop in store or online », pas de configurateur (V). |
| Tallmon Jewelers (https://www.tallmonjewelers.com/) | North Platte, 503 N Dewey St | Catalogue simple, sur-mesure en boutique (V). |
| Riddle's Jewelry | Omaha, Lincoln, Grand Island, Norfolk | Chaîne régionale ; le siège est au Dakota du Sud (S), donc plutôt à recenser là-bas. « Men's Band Customizer » (I, extrait de moteur). Non lue. |
| Gunderson's Jewelers | Omaha (102 N 145th St) | Chaîne régionale dont le siège est hors du Nebraska (S). Non lue. |
| Howard's Jewelry (https://howardsjewelrygi.com/) ; CK Jewelry (https://www.ckvjewelry.com/) | Grand Island | Sur-mesure sur devis ; CK annonce « Nationwide Shipping » (I, extraits). robots.txt lus ; pages non lues, faute de signe d'un configurateur. |
| Goldsmith Silversmith ; Lincoln Jewelry Co. ; Elder Jewelry ; Nebraska Diamond | Omaha, Lincoln | Boutiques locales sans signe de configurateur dans les extraits (I). Non lues. |
| Brodkey's Jewelers | Omaha | Fermée après une faillite (I, extraits World-Herald et Yelp « CLOSED »). |
| Bowen Arrow Diamonds & Design | — | Écartée : le site renvoie à une fiche Yelp « …-chicago », donc pas au Nebraska (I). |
| Venazia (pages « Omaha, NE ») | — | Pages de référencement local d'un vendeur en ligne ; aucune boutique au Nebraska n'est prouvée (S). Non lue. |

## Constats utiles pour JR Diamond
- **V** Trois des six configurateurs vérifiés sont des modules en marque blanche : Caratwise chez A. T. Thomas et Lovette, StoneAlgo chez Sartor Hamann, ringfacet chez Martin. Un petit bijoutier du Nebraska peut donc offrir une 3D en temps réel sans développement propre.
- **I** Ces outils montrent une bague générique de catalogue. Aucun ne dit que le modèle 3D est le fichier de fabrication de la bague livrée, et aucun ne montre la pierre réelle filmée. La promesse « ce que vous voyez existe » reste un vrai point de différence.
- **V** Deux approches du prix coexistent : le devis (Martin : « On request » ; Malashock, 14 Karat : prix à demander) et le prix affiché (Mikado, Wetzel & Truex, et les prix « Starting at » de Caratwise). Aucun acteur ne détaille le prix poste par poste (métal, façon, pierre, marge).
- **V** La fabrication est surtout montrée par une méthode décrite (Perspective, Hériter Gems, Martin), parfois avec une galerie. On ne trouve pas de suivi photo ou vidéo de la bague du client sur les sites lus.
- **V** Le synthétique est présent partout où il a été cherché : Martin, Mikado, A. T. Thomas, Lovette, Hériter, Malashock, et Borsheims (I).

## Sources (lues le 15/11/2026 sauf mention)
- robots.txt lus par curl : martinjewelry.net, mikadodiamonds.com, sartorhamann.com, borsheims.com (403 Cloudflare), atthomasjewelers.com, lovettejewelers.com, heritergems.com, perspectivejewelry.com, wetzelandtruexjewelers.com, malashocks.com, akalajewelry.com, michaeltishjewelers.com, tallmonjewelers.com, howardsjewelrygi.com, ckvjewelry.com, 14karatomaha.com, bowenarrowdiamonds.com, knoxjewelers.biz.
- Martin Jewelry : https://martinjewelry.net/ ; https://martinjewelry.net/pages/womens-ring-builder ; https://martinjewelry.net/pages/custom-design
- Mikado Diamonds : https://mikadodiamonds.com/ ; https://mikadodiamonds.com/pages/about ; https://mikadodiamonds.com/collections/settings-ring-builder ; https://mikadodiamonds.com/products/jacklynn-lab-grown-diamond-engagement-ring (source HTML, curl)
- Sartor Hamann : https://sartorhamann.com/ ; https://sartorhamann.com/custom-ring-builder/
- Borsheims : https://www.borsheims.com/robots.txt (403) ; extraits du moteur Firecrawl pour https://www.borsheims.com/design-your-engagement-ring, …/start-with-setting, …/start-with-diamond, …/start-with-lab-diamond, https://www.borsheims.com/lab-grown-diamond-jewelry
- A. T. Thomas : https://atthomasjewelers.com/build-your-own.aspx (page et source HTML)
- Lovette : https://www.lovettejewelers.com/build-your-own.aspx (page et source HTML)
- Hériter Gems : https://www.heritergems.com/ ; https://www.heritergems.com/custom-engagement-rings-bridal
- Perspective Jewelry : https://www.perspectivejewelry.com/
- Wetzel & Truex : https://wetzelandtruexjewelers.com/ ; https://wetzelandtruexjewelers.com/pages/custom-band-builder (source HTML)
- Malashock : https://malashocks.com/ ; https://malashocks.com/diamonds/ (302 vers /verify.html)
- Autres : https://akalajewelry.com/ ; https://www.14karatomaha.com/ ; https://www.michaeltishjewelers.com/ ; https://www.tallmonjewelers.com/ ; https://www.bowenarrowdiamonds.com/
- Extraits du moteur de recherche (Firecrawl, 15/11/2026) : Brodkey's (facebook.com/WorldHerald, m.yelp.com/biz/brodkeys-jewelers-omaha), Sartor Hamann Grand Island (mapquest.com, sylviejewelry.com), Riddle's (riddlesjewelry.com, pages de magasins au Nebraska), Gunderson's (yelp.com), Howard's, CK Jewelry, Elder Jewelry, Goldsmith Silversmith, Lincoln Jewelry Co.
