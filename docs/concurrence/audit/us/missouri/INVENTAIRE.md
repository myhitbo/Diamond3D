# Inventaire Missouri : joailliers locaux qui vendent des bagues en ligne

Date : 24 novembre 2026. Recenseur : Missouri (étude de concurrence États-Unis ; vendeurs nationaux exclus, voir `docs/concurrence/2026-11-15_etats-unis.md`).

Légende : **[Vn]** vérifié, page lue le 24/11/2026 (source n en fin de fichier) ; **[Vn, index]** lu dans l'extrait d'un moteur de recherche (Parallel), pas sur le site ;
**[I]** inféré ; **[S]** supposé. Prix en dollars US, tels qu'affichés.

Méthode : robots.txt lu avant les pages de chaque site ; lecture par curl (un en-tête de navigateur Safari, une seule tentative par page, au plus une page toutes les 2 s par site) ;
rendu JavaScript par Chromium sans interface (Playwright, identité par défaut, non modifiée) pour les constructeurs de bague. Firecrawl indisponible (crédits épuisés).
Aucun formulaire rempli ni envoyé, aucun compte, aucune conversation ouverte, pas de panier.

Constat général [I] : le Missouri a une particularité nette. **Neuf joailliers** de l'État (Noe's, Romantique, Betz, CornerStone, Marks, Jayson, Reed & Sons, Sam's, Blue Diamond)
affichent la même page « Custom Engagement Rings » au mot près et le même assistant « 3D Ring Designer » en 4 étapes, fourni par **JewelerOS** (script `jeweleros.com/static/dist/jos.js`) [V3][V6][V7][V8][V9][V20].
Le texte commun promet une bague prête « in just a couple of weeks », puis renvoie au magasin pour choisir la pierre et finaliser [V3]. C'est un produit de fournisseur, pas une 3D issue
d'un fichier d'atelier [I]. L'autre outil relevé est le constructeur de Buchroeders, branché sur le stock de pierres de Nivoda, avec prix des montures [V1].
Le reste vend en ligne avec prix affichés (Shopify, WooCommerce) ou propose un sur mesure par CAO, souvent avec maquette imprimée en 3D ou en cire.

Limite de l'audit : l'étape 3D de JewelerOS n'a pas été atteinte. Après les 4 étapes, la page affiche « Something went wrong Try again » ; la console du navigateur montre un appel
à `https://www.jeweleros.com/api/create/from-ring-config/` bloqué (CORS, `net::ERR_FAILED`) [V3]. Ce chemin `/api/` est interdit par le robots.txt de jeweleros.com [V4] :
aucun nouvel essai. L'accueil de jeweleros.com renvoie une page Cloudflare « Just a moment... » [V4] : **bloqué**, non contourné.

## Tableau

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Buchroeders Jewelers | Columbia | https://brdiamonds.com (aussi buchroeders.com) | https://brdiamonds.com/pages/custom-engagement-ring | oui (constructeur Nivoda) | Aucun (200 ; robots.txt Shopify standard, panier interdit) [V1]. L'étape « Choose a Diamond » ne s'est pas affichée dans notre navigateur [V1] | Constructeur « 1 Choose a Setting, 2 Choose a Diamond, 3 Complete your Ring », filtres style, métal (14 K et 18 K rose, blanc, jaune, plus d'autres), forme ; montures avec prix, dès 1 600 $ (« The Bezel Set Solitaire ») [V1]. Diamant naturel ou synthétique au choix, rendu CAO 3D puis « physical 3D-printed model » sorti de leur imprimante, « Ask us to explain the price of your proposed design » ; depuis 1896 [V1]. Bagues prêtes avec prix, dont synthétique en platine à 7 500 $ [V2, index]. Le plus complet : outil, prix, maquette avant fabrication [I] |
| 2 | Noe's Jewelry | Raymore (agglomération de Kansas City) | https://www.noesjewelry.com | https://www.noesjewelry.com/pages/custom-ring-builder | oui (JewelerOS, 3D non atteinte) | Site lisible (200). robots.txt géré par Cloudflare : `User-agent: *` `Allow: /` avec `Content-Signal: search=yes,ai-train=no,use=reference` ; section « Training crawlers » qui interdit ClaudeBot, GPTBot, CCBot, etc. [V5]. Lecture faite comme visiteur, sans collecte pour entraînement ; point à garder en tête pour l'audit [I] | Assistant en 4 étapes vérifié : couleur du métal (jaune, blanc, rose), style (solitaire, halo, halo caché, clos, cathédrale, pavé, toi et moi, trois pierres, ou « Start from scratch »), forme, carat de 0,5 à 5, délai voulu ; puis 3D en échec chez nous [V3]. 159 bagues de fiançailles en ligne [V6], et 53 dans la collection synthétique, où le certificat IGI figure dans les titres (ex. « 2.52ct Lab Grown Marquise Center E VVS2 IGI ») [V6]. « two bench jewelers » ; livraison accélérée gratuite au-delà de 1 000 $ [V3]. Le meilleur des sites JewelerOS : outil plus grand catalogue synthétique [I] |
| 3 | Cherry Pick Diamonds | Clayton (Saint-Louis) | https://cherrypickdiamonds.com | https://cherrypickdiamonds.com/pages/engagement-rings-in-st-louis | non (sur mesure en rendez-vous) | Aucun (200 ; robots.txt Shopify standard) [V10] | Bagues prêtes avec prix : « Old European Soul » 16 500 $, « Emerald Trio » synthétique 4,74 ct 7 200 $, « Tangier Old Mine » synthétique 8 000 $ [V11]. Procédé en 4 étapes : discussion, « 3D CAD Preview » vue sous tous les angles, essai d'une maquette en cire, finition avec expertise [V10] ; ailleurs, maquette imprimée en 3D à essayer [V11]. Fondateur formé au GIA, depuis 2007 ; pierres naturelles et synthétiques IGI [V10][V11]. Le plus proche de « voir naître son bijou » parmi les indépendants, mais tout passe par un rendez-vous [I] |
| 4 | Romantique Jewelers | Saint-Louis | https://romantiquejewelers.com | https://romantiquejewelers.com/pages/design-your-ring | oui (JewelerOS, 3D non atteinte) | Pages lisibles (200 ; robots.txt Shopify standard) [V7]. La page charge un formulaire LeadConnector protégé par Cloudflare Turnstile (cadre `challenges.cloudflare.com`), non utilisé [V7] | Même assistant JewelerOS « Step 1 of 4 » [V7]. Page sur mesure : « Turnaround was extremely quick, even with having to make the ring from scratch » (avis client cité par le site) ; couple propriétaire nommé [V7]. Intérêt : montre que l'outil générique sert de vitrine à un petit atelier [I] |
| 5 | Vinca Jewelry | Kansas City | https://vincajewelry.com | https://vincajewelry.com/pages/engagement-rings-wedding-bands | non | Aucun (200 ; robots.txt Shopify standard) [V12] | « crafted by hand in our Kansas City workshop since 1987 » ; sur mesure en 4 à 6 semaines, consultation en personne ou à distance, retrait ou expédition [V12]. Collection en ligne de 9 bagues avec prix (de 1 900 à 31 500 $), dont une synthétique ovale 3,33 ct E VVS2 [V13]. Prix « à partir de 500 $ » selon la FAQ [V13]. Mise à taille offerte après la demande [V12]. Atelier propre et vente nationale, sans outil [I] |
| 6 | Serene Setting | Kansas City (atelier annoncé, adresse non publiée) | https://www.serenesetting.com | https://www.serenesetting.com/ | non (sur mesure à distance) | Aucun (200 ; pas de robots.txt, 404) [V14] | Sur mesure entièrement à distance : « Most consultations happen by email and video », livraison assurée dans tous les États-Unis ; modèle CAO « you can rotate and review », 2 séries de retouches incluses ; 4 à 6 semaines ; « Most custom rings land around $2,000 », dès 1 500 $ environ ; diamants naturels, synthétiques, certificat IGI en option ; pas de remboursement du sur mesure [V14]. Le parcours le plus proche de celui de JR Diamond (devis à distance, CAO, envoi), sans prix ni outil [I]. Indicatif téléphonique 601 (Mississippi) [V14] : implantation locale à confirmer [S] |
| 7 | Adam Foster Fine Jewelry | Saint-Louis | https://fosterjewelry.com | https://fosterjewelry.com/pages/custom-engagement-rings | non | Aucun (200 ; robots.txt Shopify, panier interdit) [V15] | « Your ring is crafted entirely in our St. Louis studio by our in-house bench jewelers » ; rendu CAO puis production ; 4 à 8 semaines [V15]. Or jaune, blanc, rose, platine ; naturel ou synthétique [V16]. Bagues synthétiques prêtes avec prix et bouton « Add to cart » (ex. 2,57 ct taille émeraude, 6 050 $), livraison offerte aux États-Unis sur le prêt-à-porter [V17, index]. Atelier « maker-direct » qui vend en ligne [I] |
| 8 | Betz Jewelers | Columbia | https://www.betzjewelers.com | https://www.betzjewelers.com/design-your-ring/ | oui (JewelerOS, 3D non atteinte) | Pages lisibles (200 ; robots.txt WordPress, ajout au panier interdit) [V8]. reCAPTCHA Google chargé sur la page (formulaire), non utilisé [V8] | Même assistant JewelerOS [V8]. Entreprise familiale depuis 1941, 4e génération [V8]. Site WordPress avec panier et liste d'envies [V8, index] |
| 9 | CornerStone Fine Jewelry | Springfield | https://www.cornerstonefinejewelry.com | https://www.cornerstonefinejewelry.com/pages/design-your-ring | oui (JewelerOS, 3D non atteinte) | Aucun (200 ; robots.txt Shopify standard) [V9] | Même assistant JewelerOS ; choix de la pierre en magasin à Springfield ; depuis 1986, « award-winning bench jewelers » ; transformation de bijoux de famille citée dans un avis [V9]. Seul site JewelerOS du sud-ouest de l'État [I] |
| 10 | Elleard B. Heffern Fine Jewelers | Clayton (Saint-Louis) | https://www.heffern.com | https://www.heffern.com/shop/engagement-rings/ | non | Aucun (200 ; robots.txt `Disallow:` vide) [V18] | 19 bagues de fiançailles en ligne [V18] ; montures vendues sans pierre centrale avec prix (« Platinum Solitaire Engagement Ring Mounting » 3 875 $, « 18K Rose Gold Engagement Ring Mounting » 2 175 $) [V19, index] ; page « Custom Design » [V18]. Joaillier de luxe classique, utile comme repère de prix des montures [I] |

### Retenus hors des dix premiers (vérifiés, moins utiles à JR Diamond)

| Acteur | Ville | Page de départ | Configurateur | Blocage | Note |
|---|---|---|---|---|---|
| Vincent's Jewelers | Saint-Louis | https://www.vincentsjewelers.com/custom-jewelry-service | non | Aucun (200 ; robots.txt Wix) [V21] | Atelier de fabrication dans le magasin ; CAO et méthode traditionnelle ; le client reçoit des images à chaque étape : « Detailed Computer Rendering, Production Layout, Wax, Casting, Finished Ring » [V21]. Idée proche des photos de fabrication de JR Diamond, sans vente en ligne relevée [I] |
| The Diamond Shop | Clayton | https://www.thediamondshop.net/engagement-rings/ | non | Page lue (200). robots.txt interdit `/product-category/engagement-rings/` : non lu [V22] | Depuis 1910 ; sur mesure par un gemmologue diplômé du GIA, 4 à 6 semaines ; « the best way to understand pricing is to come in » [V22]. Liste de bagues avec prix (de 770 à 6 075 $) [V22, index] |
| Marks Jewelry Co. | Wentzville | https://marksjewelryco.com/design-your-ring/ | oui (JewelerOS) | Aucun (200) [V20] | Assistant JewelerOS ; diamants synthétiques et moissanite mis en avant [V20]. L'ancienne adresse `custom-engagement-rings.aspx` répond 404 [V20] |
| Jayson Jewelers | Cape Girardeau | https://www.jaysonjewelers.com/pages/custom-ring-builder | oui (JewelerOS) | Aucun (200 ; robots.txt `Crawl-delay: 2`, panier interdit) [V20] | Même page et même outil [V20] |
| Reed & Sons | Sedalia | https://www.reedsons.com/pages/design-your-ring | oui (JewelerOS) | Aucun (200 ; `Crawl-delay: 2`) [V20] | Même outil ; « Since 1939 » [V20, index] |
| Sam's Fine Jewelry | Sikeston et Jackson | https://samsfinejewels.com/pages/custom-ring-builder | oui (JewelerOS) | Aucun (200) [V20] | Même outil ; deux magasins [V20, index] |
| Blue Diamond Jewelers | Hamilton | https://www.bdjewelers.com/design-your-ring | oui (JewelerOS) | Aucun (200 ; pas de robots.txt) [V20] | Même outil ; refonte de bagues anciennes citée [V20, index] |

### Écartés

- **Tivol** (Kansas City) : déjà écarté par le recenseur du Kansas (pas de page de bagues de fiançailles, offre centrée sur les montres) ; non relu.
- **Venazia** : pages locales « Kansas City, MO » et « St. Louis, MO » d'un vendeur en ligne établi hors du Missouri [V23, index].
- **Helzberg** (siège à Kansas City) et **Kay** : chaînes nationales, exclues par la consigne.
- **JewelerOS** (fournisseur de l'outil commun) : accueil derrière une vérification Cloudflare, marqué « bloqué » [V4].

## Sources

Lues le 24/11/2026, sauf mention « index » (extrait du moteur Parallel, même jour).

- [V1] https://brdiamonds.com/pages/custom-engagement-ring (HTML et rendu Chromium ; adresse finale `?stage=Select+Setting&isSWS=true&sort=PRICE-ASC`, script `nivoda-connect`) ; https://brdiamonds.com/robots.txt ; essai de `?stage=Select+Diamond` (page sans liste de pierres)
- [V2, index] https://buchroeders.com/ (bagues prêtes avec prix) ; robots.txt de buchroeders.com : 404
- [V3] https://www.noesjewelry.com/pages/custom-engagement-rings et https://www.noesjewelry.com/pages/custom-ring-builder (rendu Chromium, 4 étapes parcourues, console : appel `jeweleros.com/api/create/from-ring-config/` en échec)
- [V4] https://www.jeweleros.com/robots.txt (`Disallow: /api/`) ; https://www.jeweleros.com/ (« Just a moment... Enable JavaScript and cookies to continue »)
- [V5] https://www.noesjewelry.com/robots.txt
- [V6] https://www.noesjewelry.com/collections/engagement-rings (« 159 products ») ; https://www.noesjewelry.com/collections/lab-grown-engagement-ring (« 53 products »)
- [V7] https://romantiquejewelers.com/pages/custom-engagement-rings ; https://romantiquejewelers.com/pages/design-your-ring (rendu Chromium) ; https://romantiquejewelers.com/robots.txt
- [V8] https://www.betzjewelers.com/custom-engagement-rings/ ; https://www.betzjewelers.com/design-your-ring/ (rendu Chromium) ; https://www.betzjewelers.com/robots.txt
- [V9] https://www.cornerstonefinejewelry.com/pages/custom-engagement-rings ; https://www.cornerstonefinejewelry.com/pages/design-your-ring (rendu Chromium) ; https://www.cornerstonefinejewelry.com/robots.txt
- [V10] https://cherrypickdiamonds.com/ et https://cherrypickdiamonds.com/robots.txt
- [V11] https://cherrypickdiamonds.com/pages/engagement-rings-in-st-louis
- [V12] https://vincajewelry.com/pages/engagement-rings-wedding-bands et https://vincajewelry.com/robots.txt
- [V13] https://vincajewelry.com/collections/engagement-rings
- [V14] https://www.serenesetting.com/ (FAQ) ; https://www.serenesetting.com/robots.txt (404)
- [V15] https://fosterjewelry.com/pages/custom-engagement-rings et https://fosterjewelry.com/robots.txt
- [V16] https://fosterjewelry.com/pages/engagement-rings
- [V17, index] https://fosterjewelry.com/ (bagues synthétiques avec prix et « Add to cart »)
- [V18] https://www.heffern.com/shop/engagement-rings/ (« Showing all 19 results ») ; https://www.heffern.com/ ; https://www.heffern.com/robots.txt
- [V19, index] https://www.heffern.com/ (prix des montures)
- [V20] https://marksjewelryco.com/design-your-ring/ (rendu Chromium), https://marksjewelryco.com/custom-engagement-rings.aspx (404), https://marksjewelryco.com/robots.txt ; https://www.jaysonjewelers.com/pages/custom-engagement-rings et robots.txt ; https://www.reedsons.com/pages/custom-engagement-rings et robots.txt ; https://samsfinejewels.com/pages/custom-engagement-rings et robots.txt ; https://www.bdjewelers.com/custom-engagement-rings (robots.txt 404). Sur chacune, script ou bouton JewelerOS relevé dans le HTML ; extraits index des mêmes pages pour les dates de fondation et les adresses
- [V21] https://www.vincentsjewelers.com/custom-jewelry-service et https://www.vincentsjewelers.com/robots.txt
- [V22] https://www.thediamondshop.net/engagement-rings/ et https://www.thediamondshop.net/robots.txt ; [V22, index] même page (prix)
- [V23, index] https://www.venazia.com/lab-grown-jewelers-kansas-city-mo , https://www.venazia.com/lab-grown-diamond-engagement-rings-st-louis-mo
