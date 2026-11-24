# Inventaire Kansas : joailliers locaux qui vendent des bagues en ligne

Date : 15 novembre 2026. Recenseur : Kansas (étude de concurrence États-Unis, voir `docs/concurrence/2026-11-15_etats-unis.md` pour les vendeurs nationaux, exclus ici).

Légende : **[Vn]** vérifié, page lue le 15/11/2026 (source n en fin de fichier) ; **[Vn, index]** lu dans l'extrait d'un moteur de recherche (Parallel), pas sur le site ;
**[I]** inféré ; **[S]** supposé. Prix en dollars US, tels qu'affichés.

Méthode : robots.txt lu avant les pages de chaque site ; lecture par curl (un seul en-tête de navigateur Safari, une seule tentative par page, 2 s entre deux pages d'un même site) ;
rendu JavaScript par Firecrawl pour 4 pages, puis crédits Firecrawl épuisés. Aucun formulaire rempli, aucun compte, aucune conversation ouverte, pas de panier.

Constat général [I] : le Kansas n'a pas de joaillier indépendant doté d'un vrai configurateur 3D maison. Les outils en ligne sont des briques de fournisseurs :
constructeur en 3 étapes de Punchmark (Stephen's), modèles configurables et constructeur d'alliance de Stuller en iframe (Scott's, Stephen's, Kuhn's), quiz IA de ShowroomPro (Solomon).
Le reste vend en ligne avec prix affichés (Shopify surtout) ou propose un sur mesure par CAO en rendez-vous.

## Tableau

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Stephen's Fine Jewelry | Leawood | https://www.sfj.biz | https://www.sfj.biz/ringsettings | oui | Aucun (200). robots.txt : `Crawl-delay: 2`, panier et compte interdits [V1]. Constructeur d'alliance en iframe Stuller (`jewelershowcase.com`, robots.txt `Disallow: /`) : non exploré [V4][V11] | Parcours « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring », 248 montures, filtres métal (or blanc, jaune, rose, platine) et fourchette de prix [V2]. « Build your ring online and bring your design to your private appointment » ; pierres naturelles et synthétiques « sourced at wholesale » ; bijoutier de 5e génération, 46 ans de métier [V3]. Recherche de pierres avec prix, laboratoire et origine [V5]. Prix des montures chargés en JavaScript, non lus [I]. Le plus proche d'un configurateur, mais vente finale en rendez-vous [V3] |
| 2 | Solomon Jewelers | Wichita | https://jewelsbysolomon.com | https://ringbuilder.ai/design?d=08bb5214cf3aa778 (redirige vers showroompro.ai) | oui (quiz IA tiers) | Aucun (200 ; robots.txt Shopify standard, panier interdit) [V6] | Bouton « Ai Ring Builder » de l'accueil vers ShowroomPro : « 2-min quiz · AI-powered · 10,000+ designs », puis consultation [V6][V7]. 49 bagues de fiançailles avec prix, dont synthétiques (« 8 1/2 Ctw Oval Lab Diamond Ring… (E/VVS2) » 6 680 $) et moissanite dès 329 $ ; panier Shopify, paiement fractionné Shop Pay [V8][V6]. Sur mesure à partir d'une photo ou d'une pierre de famille [V9]. Intérêt : l'IA générative comme porte d'entrée du sur mesure, sans 3D réelle [I] |
| 3 | Scott's Diamond Designs | Overland Park | https://www.scottsdiamonddesigns.com | https://www.scottsdiamonddesigns.com/pages/mountings | oui (Stuller en iframe) | Pages du site lisibles (200 ; robots.txt Shopify standard) [V10]. Les iframes Stuller (`scotts-frame-categoryembed.jewelershowcase.com`) ont un robots.txt `Disallow: /` : une seule page lue avant constat, puis arrêt [V11] | Iframe Stuller : « Adjust the stone type, shape, and size as well as metal quality and color on more than 2,800 customizable designs » [V11]. Pages « Stuller's Band Builder » et « Lab Diamonds » en iframe [V10]. Boutique Shopify avec prix (ex. bague or 14 k 700 $) [V10]. Configurateur générique de fournisseur, pas de 3D issue d'un fichier de l'atelier [I] |
| 4 | Kuhn's Diamond Jewelers | Hays | https://kuhnsdiamondjewelers.com | https://kuhnsdiamondjewelers.com/custom-design-center/ | non (parcours sur mesure en ligne) | Aucun sur le site (200 ; robots.txt WordPress standard) [V12]. Inventaire de diamants sur `kuhnsjewelers.jewelershowcase.com` (Stuller, robots.txt `Disallow: /`) : non exploré [V13][V11] | « Custom Design Center » : choisir un modèle de base « over a million variations » ou téléverser son idée, devis et « professional renders within 24 Hours », bijou livré « within 2 Weeks » [V12]. Ailleurs : « usually ready 10 to 12 days after approval » ; guide de bague en 2 minutes ; « Family-owned in Hays since 1930 » [V12][V13]. Les modèles de base ne s'affichent pas dans la page rendue [V12] (catalogue absent ou chargé ailleurs [I]). Promesse de délai la plus proche des 14 jours ouvrés de JR Diamond [I] |
| 5 | Mazzarese Jewelry | Leawood | https://mazzaresejewelry.com | https://mazzaresejewelry.com/collections/engagement-rings | non | Aucun (200 ; robots.txt interdit seulement quelques images et fichiers .js/.css/.pdf) [V14] | 208 bagues : 18 avec pierre centrale, 190 « Center Stone Sold Separately » ; prix jusqu'à 42 850 $ ; 14 k (65), 18 k (121), platine (21) ; filtre « LAB DIAMOND » (4) ; 122 modèles de la marque maison [V14]. Ex. : bague trois pierres synthétique or 14 k, 4 500 $ [V14]. « Lifetime Diamond Upgrade », « Custom Creations », 45 ans [V15]. Prix de la monture séparé de la pierre, comme les grands sites [I] |
| 6 | Visionary Jewelers | Overland Park | https://www.visionaryjewelers.com | https://www.visionaryjewelers.com/renderdesigns.php | non | Aucun (200 ; pas de robots.txt, 404) [V16] | Galerie « 3D Render Design Gallery » sur 15 pages, lien « bench videos » vers une chaîne YouTube (vidéos d'établi), inventaire de diamants filtrable mais « Please call for pricing » ; achat par « Add a Quote » [V16]. La plus proche de « voir naître son bijou », sans prix en ligne [I]. Pied de page daté de 2018 [V16] : site peu entretenu [I] |
| 7 | Burnell's Fine Jewelry & Design | Wichita | https://burnells.com | https://burnells.com/collections/engagement-rings | non | Injoignable depuis l'environnement cloud (proxy : 502 au CONNECT, puis nom non résolu) : panne réseau de notre côté, pas un blocage du site. Lu dans l'index de recherche [V17, index] | 48 bagues avec prix (5 entre 1 000 et 2 000 $, 38 entre 2 000 et 5 000 $, 5 au-delà) ; Gabriel, Simon G., Sylvie [V17, index]. « Design Suite » : rendu CAO « while you watch », sur mesure en 6 à 8 semaines ; page « Natural vs. Lab Grown Diamonds » [V17, index]. À relire depuis un autre réseau [S] |
| 8 | Kizer Cummings Jewelers | Lawrence | https://kizercummings.com | https://kizercummings.com/collections/engagement-rings | non | Aucun (200 ; robots.txt Shopify qui autorise les pages publiques) [V18] | 26 bagues en stock, prix jusqu'à 14 200 $ (ex. « Classic Round Diamond Ring, 1.51ct L I1… » 7 395 $) ; bijoux « handcrafted in-house » ; alliance synthétique 2,00 ct à 2 925 $ ; retrait le jour même ; page sur mesure [V18]. Fiches précises (couleur, pureté), mais pas d'outil [I] |
| 9 | House of Diamonds | Overland Park | https://www.mybigrock.com | https://www.mybigrock.com/custom-jewelry/engagement-ring/ | non | Aucun (200 ; robots.txt n'interdit que le calendrier) [V19] | « 100% in-house jewelry design and finish team » : conception, prototype, fonte et finition sur place, garantie à vie ; « we can even do 100% custom work with you online » ; refuse le synthétique (« you won't find any “Lab-Grown Love” », page « Why No Lab Diamonds? ») ; fondé en 1995 [V19]. Contre-modèle : même argument de fabrication que JR Diamond, position opposée sur le synthétique [I] |
| 10 | Noble House Jewelry | Overland Park | https://www.noblehousejewelry.com | https://www.noblehousejewelry.com/collections/engagement | non | Aucun (200 ; robots.txt Shopify standard) [V20] | Boutique Shopify avec prix (ex. « Architectural Elegance Mounting » 5 270 $), collection « Overnight mountings », Tacori, Benchmark ; « 30 Day Easy Return From Online Purchases », livraison gratuite au-delà de 500 $ ; textes sur diamant naturel, synthétique, or 14/18 k [V20]. Vente en ligne classique de détaillant [I] |

### Retenus hors des dix premiers (vérifiés, moins utiles à JR Diamond)

| Acteur | Ville | Page de départ | Configurateur | Blocage | Note |
|---|---|---|---|---|---|
| Powell Jewelry | Wichita | https://powelljewelry.com/collections/jewelry-engagement-engagement-rings | non | Aucun (200) | Prix affichés (bagues ASHI de 2 380 à 6 330 $) ; titre « Natural, Lab Grown, & Moissanite » [V21] |
| Toner Jewelers | Overland Park | https://www.tonerjewelers.com/jewelry/engagement-rings | non | Aucun (200 ; robots.txt Punchmark, `Crawl-delay: 2`) | Bagues synthétiques, pierres non serties (`/ringsettings-diamonds`) ; `/ringsettings` répond 404 : pas de constructeur [V22] |
| Warren Hannon Jewelers | Olathe | https://www.warrenhannonjeweler.com/services/custom-jewelry-designs/ | non | Aucun (200) | Rendu et modèle 3D « at no cost or obligation » ; vente sur commande seulement ; sur rendez-vous [V23] |
| Kroman Jewelry | Overland Park | https://kromanjewelry.com/custom/ | non | Aucun (200) | Bijoutier privé : rendus CAO et maquettes imprimées en 3D en option [V24] ; 3 à 5 pierres présélectionnées [V24, index] ; pas de vente en ligne relevée [V24] |
| Ruback Fine Jewelry | Overland Park | https://www.ruback.co/engagement-bridal | non | Aucun (200) | « We manufacture our engagement rings ourselves » ; sur rendez-vous seulement [V25] ; « since 1908 » [V25, index] |
| Pfeifley Jewelers | Manhattan | https://www.pfeifley.com/ | non | Aucun (200) | Du croquis au rendu CAO puis à la cire, 6 à 10 semaines ; pas de vente en ligne relevée [V26] |
| Premier Diamond Source | Overland Park | https://www.premierdiamondsource.com/engagement-rings | non | Aucun (200 ; pas de robots.txt) | Pierres vendues « only 10% over cost » avec la monture [V27, index] ; site ancien, pas de boutique [V27] |
| Showcase Diamond Jewelers | Salina | https://showcasejewelers.net/Diamonds.aspx | non | Aucun (200) | Recherche de diamants en iframe tiers (`ld.prerakinfotech.com`), non explorée [V31] |

### Écartés

- **Calhoun's Jewelers** (Topeka) : « We do not sell jewelry online » ; le site signale un faux site qui usurpe son nom et prend des commandes [V28, index]. Leçon pour JR Diamond : prévoir la protection de la marque [I].
- **Tivol** (siège à Kansas City, Missouri ; salle à Overland Park, Kansas) : `/engagement` renvoie à l'accueil, pas de page de bagues de fiançailles trouvée ; offre centrée sur les montres et les créateurs [V29].
- **Riddle's Jewelry** (salles à Wichita et Manhattan) : chaîne régionale de plusieurs États [V30, index] ; siège hors du Kansas [S].
- **Melange Custom Jewelry** (Wichita) : aucun site trouvé, page Facebook seulement ; l'outil « Jeweler AI » vient d'un annuaire, non vérifié [S].
- **Moshiri** (Leawood) : connexion coupée par le serveur (« connection reset »), sans nouvel essai [V32].
- **Venazia** : pages locales « Wichita, KS » et « Overland Park, KS » d'un vendeur en ligne établi hors du Kansas [V33, index] ; **Noe's Jewelry**, **Vinca**, **Serene Setting** : Missouri. **Kay**, **Helzberg** : chaînes nationales.

## Sources

Lues le 15/11/2026, sauf mention « index » (extrait du moteur Parallel, même jour).

- [V1] https://www.sfj.biz/robots.txt
- [V2] https://www.sfj.biz/ringsettings (rendu Firecrawl : « 248 settings found » ; HTML : « 1 Choose a Ring Search 2 Choose a Diamond Search 3 Complete Ring »)
- [V3] https://www.sfj.biz/jewelry/engagement-rings
- [V4] https://www.sfj.biz/pages/build-a-band (iframe `https://sfj-frame-categoryembed.jewelershowcase.com/band-builder`)
- [V5] https://www.sfj.biz/diamonds
- [V6] https://jewelsbysolomon.com/ et https://jewelsbysolomon.com/robots.txt
- [V7] https://www.showroompro.ai/design?d=08bb5214cf3aa778 (cible de https://ringbuilder.ai/design?d=08bb5214cf3aa778 ; robots.txt de showroompro.ai lu : `/design` autorisé)
- [V8] https://jewelsbysolomon.com/collections/engagement-rings (« 49 items »)
- [V9] https://jewelsbysolomon.com/pages/custom-jewelry-design
- [V10] https://www.scottsdiamonddesigns.com/ , https://www.scottsdiamonddesigns.com/pages/mountings , https://www.scottsdiamonddesigns.com/pages/stuller-s-band-builder , https://www.scottsdiamonddesigns.com/pages/lab-diamonds , https://www.scottsdiamonddesigns.com/robots.txt
- [V11] https://scotts-frame-categoryembed.jewelershowcase.com/robots.txt (`User-agent: *` `Disallow: /`) ; https://scotts-frame-categoryembed-catid3.jewelershowcase.com/browse/mountings (une lecture, avant constat du robots.txt)
- [V12] https://kuhnsdiamondjewelers.com/custom-design-center/ (HTML et rendu Firecrawl) et https://kuhnsdiamondjewelers.com/robots.txt
- [V13] https://kuhnsdiamondjewelers.com/ (« Most custom designs only take 10 to 12 days » ; lien d'inventaire `http://kuhnsjewelers.jewelershowcase.com/products/red-box-diamonds/`)
- [V14] https://mazzaresejewelry.com/collections/engagement-rings et https://mazzaresejewelry.com/robots.txt
- [V15] https://mazzaresejewelry.com/
- [V16] https://www.visionaryjewelers.com/ , https://www.visionaryjewelers.com/renderdesigns.php , https://www.visionaryjewelers.com/inventory/ , https://www.visionaryjewelers.com/bridal.php
- [V17, index] https://burnells.com/collections/engagement-rings , https://burnells.com/pages/engagement-rings , https://burnells.com/ (curl : « CONNECT tunnel failed, response 502 » ; WebFetch : « ENOTFOUND burnells.com »)
- [V18] https://kizercummings.com/ , https://kizercummings.com/collections/engagement-rings , https://kizercummings.com/robots.txt
- [V19] https://www.mybigrock.com/ , https://www.mybigrock.com/custom-jewelry/engagement-ring/ , https://www.mybigrock.com/robots.txt
- [V20] https://www.noblehousejewelry.com/ , https://www.noblehousejewelry.com/collections/engagement
- [V21] https://powelljewelry.com/collections/jewelry-engagement-engagement-rings
- [V22] https://www.tonerjewelers.com/ , https://www.tonerjewelers.com/jewelry/engagement-rings , https://www.tonerjewelers.com/ringsettings (404, rendu Firecrawl)
- [V23] https://www.warrenhannonjeweler.com/ , https://www.warrenhannonjeweler.com/services/custom-jewelry-designs/ , https://www.warrenhannonjeweler.com/jewelry-special-order/
- [V24] https://kromanjewelry.com/ , https://kromanjewelry.com/custom/ ; extrait index de https://kromanjewelry.com/engagement-rings-kansas-city
- [V25] https://www.ruback.co/engagement-bridal et https://www.ruback.co/robots.txt ; extrait index de https://www.ruback.co/
- [V26] https://www.pfeifley.com/
- [V27] https://www.premierdiamondsource.com/ (200) ; extrait index de https://www.premierdiamondsource.com/engagement-rings
- [V28, index] http://www.calhounsjewelers.com/
- [V29] https://www.tivol.com/ (et https://www.tivol.com/engagement, renvoyée à l'accueil)
- [V30, index] https://www.riddlesjewelry.com/pages/riddles-jewelry-store-wichita-kansas
- [V31] https://showcasejewelers.net/Diamonds.aspx
- [V32] http://moshirijewelry.com (curl : « Connection reset by peer » sur robots.txt)
- [V33, index] https://www.venazia.com/custom-rings-wichita-ks
- Recherche : moteurs Parallel et WebSearch, requêtes génériques (« Wichita jeweler design your own engagement ring », « Overland Park custom engagement rings jeweler », etc.), sans mention de JR Diamond.
