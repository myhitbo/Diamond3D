# Arizona : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition en Arizona et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales, les grands magasins et les grandes maisons sont exclus.

Méthode : lecture des pages comme un visiteur ordinaire, avec curl (identité par défaut), puis avec un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée) pour les pages en JavaScript. Le navigateur de rendu Firecrawl n'était pas disponible (crédits épuisés). Le robots.txt de chaque site a été lu avant toute page. Au plus une page toutes les 2 secondes par site, 10 secondes pour Isaac Jewelers (`Crawl-delay: 10`). Aucun formulaire rempli, aucun compte créé, aucun panier ouvert, aucun chat ni SMS ouvert. Les seuls contrôles actionnés sont des choix de style, de pierre, de carat et de délai dans deux configurateurs (Christopher Fine Diamonds, V Jewelers), et le bouton « Start designing » d'Isaac Jewelers. Aucune requête n'a contourné une protection. Chaque fait porte une marque :

- **V** (vérifié) : page lue ou contrôle actionné le 15/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait d'index de recherche (Parallel Search, recherche web) ou de plusieurs indices ;
- **S** (supposé).

Blocage : aucun des 18 sites interrogés n'a renvoyé de 403 ni de défi Cloudflare à curl (code 200 partout, V). Aucun robots.txt n'interdit les pages de configurateur citées (V). Trois limites observées, qui ne sont pas des blocages de robots :

- la vue 3D de JewelerOS (Christopher Fine Diamonds, et le même outil chez Z's, Maya Caroleena et Paul Bensel) affiche « Something went wrong » dans notre Chromium sans carte graphique, après les quatre étapes de départ (V) ;
- le constructeur GemFind de Trinity Diamonds reste blanc après 15 secondes (V) ;
- Schubach charge un widget Cloudflare Turnstile sur ses pages, sans bloquer la lecture (V) ; I : il protège les formulaires (courriel, connexion).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Isaac Jewelers | Scottsdale (Kierland Commons) | https://www.isaacjewelers.com | https://www.isaacjewelers.com/design-your-ring/ | oui (3D maison en three.js : bague, collier ou bracelet ; 10 formes, montures combinables, 4 métaux, 0,50 à 5 ct, taille, gravure) | aucun (WordPress derrière Cloudflare, 200 ; `Crawl-delay: 10` respecté) ; rendu 3D non confirmé dans notre navigateur | Seul configurateur développé en propre parmi les sites lus : « realistic 3D, true to size », vues « Studio / Sparkle / On a hand », design gardé dans l'adresse de la page (V). Il se présente comme une illustration et renvoie à un rendez-vous pour le prix : « Every Isaac Jewelers ring is drawn, priced and made with you in person » (V). Fabrication sur place, « Made in Scottsdale » (V). |
| 2 | Joseph Schubach Jewelers | Scottsdale | https://schubachstore.com | https://schubachstore.com/apps/ring-creator/rb-get-started | oui (RingCreator : pierre ou monture d'abord ; monture composée d'une tête et d'un anneau ; visionneuse 3D VDB ; constructeurs d'alliance et d'alliance éternité) | aucun pour la lecture (Shopify, 200) ; widget Turnstile chargé | Le plus complet en vente directe : prix de la monture affiché (1 675 $), bouton « Add to Cart » (V). Recherche de diamants synthétiques, moissanite (V). La page 3D promet « Review your design in 3D then request a personalized quote » (V). |
| 3 | The Diamond Guys | Scottsdale (et Sherman Oaks, Californie) | https://www.thediamondguys.com | https://www.thediamondguys.com/apps/ringbuilder/settings/ (redirige vers `/collections/ringbuilder-settings`) | oui (constructeur GemFind : monture, diamant naturel ou synthétique) | aucun (Shopify, 200) | 571 montures du constructeur, toutes avec prix (V). La fiche précise ce que le prix couvre : monture 14 k pour un centre rond de 2 ct, 20 pierres de côté (0,05 ct, G-H, SI), « Center Diamond Sold Separately », 7 250 $ (V). Un an de protection offert (V). |
| 4 | Christopher Fine Diamonds | Chandler | https://christopherfinediamonds.com | https://christopherfinediamonds.com/pages/design-your-ring | oui (JewelerOS : 4 étapes de départ, puis concepteur 3D) | partiel : `/apps/` interdit par robots.txt (non visité) ; la vue 3D ne s'est pas chargée dans notre navigateur | Le parcours pose le choix naturel ou synthétique dès l'étape 2 et demande le délai souhaité à l'étape 4 (V). Pas de vente de bagues en ligne : le site se dit « SEO-only showroom site » et ne vend que des rendez-vous et services (V). Revue CAO puis maquette en cire avant fabrication (V). |
| 5 | Z's Fine Jewelry | Peoria | https://www.zsfinejewelry.com | https://www.zsfinejewelry.com/pages/design-your-ring | oui (JewelerOS, même parcours que Christopher) | aucun (Punchmark, 200 ; `Crawl-delay: 2` respecté) ; même limite 3D (I) | Bague dessinée en ligne, pierre choisie en boutique, prête « in just a couple of weeks » (V). Entreprise familiale, troisième génération (V). Prix du catalogue non lus (chargés en JavaScript, V). |
| 6 | V Jewelers | Surprise | https://www.vjewelersaz.com | https://www.vjewelersaz.com/custom-ring-builder/ | oui (outil maison guidé : Refinement, Concept, Review, Sent ; 6 questions) | aucun (200 ; seul `/diamond-comparison`, outil interne, est interdit) | Seul autre outil propre (I : ni JewelerOS ni GemFind détectés). Premier écran en photos, malgré l'annonce « Build your dream engagement ring in beautiful 3D » (V). « Fully custom, often ready in just a couple of weeks » (V). Paiement en ligne (Stripe, Affirm, Apple Pay), livraison assurée offerte dès 500 $ (V). |
| 7 | Trinity Diamonds | Tucson | https://www.trinitydiamonds.com | https://www.trinitydiamonds.com/apps/ringbuilder/settings/ | oui (GemFind : montures, diamants naturels et synthétiques) | partiel : constructeur vide après 15 s dans notre navigateur (pas de blocage du site) | Prix affichés « from 2 925 $ » à « from 7 032 $ » sur la page des bagues de fiançailles, 771 produits (V). Livraison offerte, retours sous 30 jours port payé (V). Fabrication à Tucson (V). |
| 8 | Elite Fine Jewelers | Tempe | https://www.elitefinejewelers.com | https://www.elitefinejewelers.com/collections/engagement-rings | non (collection et sur-mesure en boutique) | aucun (Shopify, 200) | Vente directe à prix affichés : 242 bagues, nombreuses en synthétique certifié IGI, par exemple ovale 2,13 ct, or 14 k, 1 795 $ (V). Bijoux anciens et d'occasion, sur-mesure par le joaillier d'établi (V). |
| 9 | London Gold | Scottsdale, Chandler, Peoria | https://www.londongold.com | https://www.londongold.com/engagement/ | non (filtres par métal et par origine ; sur-mesure en boutique) | aucun (200 ; filtres de prix interdits par robots.txt, non utilisés) | Trois boutiques, prix barrés et soldés : bague Isadora, 1,10 ct synthétique, or 18 k jaune, 5 525 $ au lieu de 7 895 $ (V). Montures « Setting Only » vendues seules (V). |
| 10 | Myranda Fine Jewelry | Chandler (et Scottsdale) | https://myrandafinejewelry.com | https://myrandafinejewelry.com/engagement-rings/ | non (sur-mesure à distance : Zoom, FaceTime ou SMS) | aucun (WordPress, 200) | Parcours sur mesure le plus explicite : rendu CAO 3D de chaque bague, fabrication en atelier à Chandler, « four to six weeks » (V). Diamants naturels et synthétiques, GIA ou IGI (V). Aucun prix ni configurateur (V). |

## Détail par acteur

### 1. Isaac Jewelers (Scottsdale)

- V : 15044 N. Scottsdale Rd. #130, Scottsdale, AZ 85254 (Kierland Commons), ouvert 7 jours sur 7 ; « Family owned · Serving Scottsdale for over twenty years » (pages lues).
- V : https://www.isaacjewelers.com/design-your-ring/ : « Design an engagement ring, a diamond necklace or a diamond bracelet in realistic 3D. Pick the shape, setting, metal and carat weight and turn it any way. When you love it, send it to Frank Isaac and our team will make it for you in Scottsdale. » Contrôles lus : « What are you designing? », forme du diamant, « Setting pick one or more », pierres de côté (diamant ou pierre de naissance), métal, anneau et griffes (largeur, finition, griffes, métal des griffes), carat de 0,50 à 5,00 ct, lien « Compare diamond cut, color and clarity », taille de 3 à 10, gravure facultative (trois écritures), boutons « Send this design to Frank » et « Save design ».
- V : capture du rendu après « Start designing » : 10 formes (rond, ovale, coussin, princesse, émeraude, asscher, radiant, poire, marquise, cœur). La page des bagues annonce « ten diamond shapes, nine settings you can combine and four metals ».
- V : le code de la page charge three.js 0.169.0 depuis jsDelivr (`WebGLRenderer`, vue chargée quand elle devient visible). Dans notre Chromium sans carte graphique, la zone de vue affichait une illustration de main, pas de bague en 3D : rendu 3D non confirmé.
- V : avertissement sous l'outil : « An illustration to help you picture proportions. Diamond sizes are typical for well-cut stones of each shape and vary from stone to stone. »
- V : processus en trois temps : « Design it here » (design partagé par le lien), « Sit down with Frank » (choix des vrais diamants en boutique), « Made in Scottsdale » (« Our master jeweler makes your piece by hand »).
- V : https://www.isaacjewelers.com/engagement-rings-scottsdale/ : sur-mesure présenté comme « the largest part of our business », plan numérique (« digital blueprint ») montré avant fabrication, réemploi d'un diamant ou d'un bijou existant, « Wholesale diamond pricing ». Collection « Exclusive Bridal » de 2,51 à 10,16 ct, cinq bagues sur six certifiées GIA.
- V : boutique WooCommerce avec paiement Authorize.net (scripts de la page). Aucune mention de diamant synthétique dans les pages lues ; la maison propose des diamants « Smart Cut™ » (S : marque de taille, origine non précisée).
- Intérêt : c'est la démarche la plus proche de JR Diamond (configurateur 3D développé en propre, fabrication sur place). Mais Isaac assume une illustration paramétrique et un prix donné en rendez-vous. JR Diamond se distingue par le modèle issu du fichier de fabrication et le prix expliqué.

### 2. Joseph Schubach Jewelers (Scottsdale)

- V : 7150 E Camelback Rd #250, Scottsdale, AZ 85251 ; Joe Schubach se présente comme « third-generation jeweler » (https://schubachstore.com/pages/scottsdale-custom-rings).
- V : https://schubachstore.com/apps/ring-creator/rb-get-started : « You can start your journey in two ways / Begin with a Stone / Begin with a Setting ».
- V : fiche de monture https://schubachstore.com/apps/ring-creator/rb-setting-details?ring_stock_num=H103279-Oval-2ct-14K%20Y-S103343-14K%20W (rendue) : étapes « Choose Setting / Choose Stone / Review Complete Ring » ; monture composée d'une tête (« Adeline », or blanc 14 k) et d'un anneau (« Duchess », or jaune 14 k) ; « $1,675.00 Setting Price » ; tête de 1, 2 ou 3 ct ; formes rond, coussin, émeraude, poire, ovale ; 14 styles de tête (dont griffes « Petal Prong », serti clos « Mosaic Bezel ») ; métaux 14 k blanc, jaune, rose, 18 k blanc ; tailles de doigt ; boutons « Select Setting » et « Add to Cart ».
- V : la fiche charge une visionneuse 3D de VDB (`vdb-3d-viewer.js`) et un logo « three_d » ; visionneuse non affichée dans notre navigateur.
- V : https://schubachstore.com/pages/design-your-own-engagement-ring : « Choose your preferred style, metal, gemstone and customization options. Review your design in 3D then request a personalized quote. » Le bouton « Start Designing » mène à la fiche ci-dessus ; une vidéo de démonstration est intégrée (Vimeo).
- V : liens de l'accueil : recherche de diamants synthétiques (`/apps/vdb-app/search-filters?diamondSearchType=Lab_grown_Diamond`), pierres de couleur « Radiance », constructeur d'alliance (`/apps/schubach/rings/profiles/...`), constructeur d'alliance éternité (`/pages/eternity-band-builder`), moissanite.
- I : le constructeur d'alliance suit le même schéma d'adresse que celui de John Atencio (Colorado), donc probablement le même prestataire.
- Intérêt : le parcours monture puis pierre le plus abouti de l'État, avec un prix et un panier. Le prix reste celui de la monture seule ; la pierre et la fabrication ne sont pas détaillées.

### 3. The Diamond Guys (Scottsdale)

- V : salle de Scottsdale, 14601 N. Scottsdale Rd, Suite 125, Scottsdale, AZ 85254 ; seconde salle à la Sherman Oaks Galleria (Californie), sur rendez-vous ; « locally owned and operated Scottsdale jewelry store ». Site « Powered by GemFind ».
- V : menu « Create Your Own Ring » : « Start with a Setting / Start with a Natural Diamond / Start with a Lab Grown Diamond » ; demandes de pierres naturelles ou synthétiques.
- V : l'adresse du constructeur redirige vers la collection « Engagement Rings - Ringbuilder », 571 produits, tous à prix affiché (de 1 590 $ à 7 250 $ sur la première page).
- V : fiche N0627SMD : or 14 k jaune, tailles 4 à 10, « Center Diamond Sold Separately », centre rond prévu de 2,00 ct, 20 pierres de côté (0,05 ct, G-H, SI), 7 250 $ ; « 1-Year Complimentary Protection Plan » (perte, vol, dommages, usure).
- V : collection des bagues de fiançailles, 664 produits ; solitaire « starting at: $900.00 ».
- Intérêt : transparence sur ce que contient le prix de la monture. Pas de 3D (photos).

### 4. Christopher Fine Diamonds (Chandler)

- V : 3245 W Ray Rd, Suite 4, Chandler, AZ 85226 ; « Serving Chandler & the East Valley Since 2003 » ; affirmation « Arizona's only in-person CAD design experience » (non vérifiée sur le fond).
- V : configurateur JewelerOS (scripts `jeweleros.com/static/dist/jos.js`, configuration du partenaire). Étapes actionnées dans notre navigateur :
  1. « Let's start designing your ring » : trois couleurs d'or ; styles Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ;
  2. « Choose your center stone » : bascule Natural / Lab Grown ; formes rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant, « Decide later » ;
  3. « Select your center stone size » : de 0,5 à 5 ct, « Decide later » ;
  4. « When do you need your ring? » : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, « Not sure yet ».
  Ensuite, le concepteur 3D affiche « Something went wrong » (bouton « Try again » non actionné).
- V : https://christopherfinediamonds.com/pages/custom-ring-designer : « Rotate the ring and review it from different angles / Submit your design when you are ready for assistance ».
- V : https://christopherfinediamonds.com/products.json : 19 produits, tous des rendez-vous ou services (« CAD/ Wax Review », rhodiage 75 $, expertise 150 $). `/collections/engagement-rings` répond 404. Le robots.txt se décrit comme « SEO-only showroom site ».
- V : processus sur mesure : consultation, conception, « CAD Preview », fabrication ; rendez-vous de revue de la CAO et de la cire avant production.
- Intérêt : bon exemple de qualification du client (délai demandé dans le parcours). Pas de prix en ligne.

### 5. Z's Fine Jewelry (Peoria)

- V : 7547 W Greenway Rd, Peoria, AZ 85381 ; « family-owned and operated », « over 25 years », troisième génération.
- V : https://www.zsfinejewelry.com/pages/design-your-ring (rendue) : même écran JewelerOS que Christopher (« Step 1 of 4 … our 3D Ring Designer »).
- V : https://www.zsfinejewelry.com/pages/custom-engagement-rings : « Design your ring online in stunning 3D / Pick out your center stone in our Peoria, AZ showroom / Finalize & order your ring » ; « we can have it ready for you in just a couple of weeks ».
- V : site Punchmark (ressources `shopfinejewelry.com`, I pour l'attribution) ; prix du catalogue absents du HTML (chargés en JavaScript).
- Intérêt : même modèle que Snyder et Mesa au Colorado : 3D en ligne, pierre en boutique, délai court.

### 6. V Jewelers (Surprise)

- V : 13761 W Bell Rd, Ste 205, Surprise, AZ 85374 ; « family-owned shop … since 2005 » ; « IJO Master Jeweler ».
- V : https://www.vjewelersaz.com/design-your-ring/ : « Build your dream engagement ring in beautiful 3D: choose the setting, the diamond, every detail. Then book a time with our IJO Master Jeweler » ; « Fully custom, often ready in just a couple of weeks ».
- V : le bouton « Design Your Ring » ouvre https://www.vjewelersaz.com/custom-ring-builder/ : « 01 Refinement / 02 Concept / 03 Review / 04 Sent », question « 01 / 06 What style calls to you? » avec photos (Solitaire, Hidden Halo, Halo…). Étapes suivantes non explorées.
- V : panier « Secure payment by Stripe · Cards · Affirm · Apple Pay », « Free insured shipping over $500 », mise à taille « From $50, done in-house », rubrique « Lab-Grown Diamonds ».
- I : outil développé pour le site (aucun script JewelerOS, GemFind ni StoneAlgo dans les requêtes).

### 7. Trinity Diamonds (Tucson)

- V : 6070 N Oracle Rd, Tucson, AZ 85704 ; « All engagement rings are done locally by trusted professionals right here in Tucson. Our jeweler has over 40 years in experience ».
- V : constructeur GemFind (`/apps/ringbuilder/settings/`, scripts `gemfind.org`) ; recherche de diamants synthétiques par forme (`/apps/ringbuilder/diamondtools/diamondtype/navlabgrown/`). Rendu vide dans notre navigateur.
- V : https://www.trinitydiamonds.com/pages/engagement-rings-in-tucson-az : prix « from » (2 925 $, 5 024 $, 6 538 $, 7 032 $), 771 produits ; bandeau « Free shipping Sitewide / Hassle-free returns 30-day postage paid returns ».
- I : processus en 3D CAD, rendu montré avant fabrication (extraits Parallel des pages `custom-engagement-rings-in-tucson-az` et `custom-jewelry-in-tucson-az`) ; bague synthétique certifiée IGI « Call for price ».

### 8. Elite Fine Jewelers (Tempe)

- V : 805 N Scottsdale Road, Tempe, AZ 85281 ; « 3rd Generation Family Jewelers » ; vintage et bijoux d'occasion.
- V : https://www.elitefinejewelers.com/collections/engagement-rings : 242 produits ; exemples synthétiques certifiés IGI : ovale 2,09 ct halo caché, or blanc 14 k, 2 115 $ ; poire 3,09 ct, or jaune 14 k, 2 235 $ ; ovale allongé 2,13 ct, 1 795 $.
- V : sur-mesure par « an award winning, world-renowned bench jeweler » ; financement « $0 Down, 0% Interest » via Shop Pay.
- Intérêt : niveau de prix du synthétique en vente directe dans la région.

### 9. London Gold (Scottsdale, Chandler, Peoria)

- V : 10441 N Scottsdale Rd, Scottsdale, AZ 85253 ; 3100 W Chandler Blvd, Chandler, AZ 85226 ; 7311 W Bell Rd, Peoria, AZ 85382. Prix « Best Engagement Ring Store » 2026 (Arizona Foothills Magazine, selon le site).
- V : https://www.londongold.com/engagement/ : filtres par métal (dont platine) et par origine (« Lab Grown Diamond », « Natural Diamond ») ; Isadora 1,10 ct synthétique, or 18 k jaune, 5 525 $ (barré 7 895 $) ; Isadora 1,46 ct synthétique, 4 199 $ (barré 5 997 $) ; montures « Setting Only » ; lien vers le service de création sur mesure.
- I : diamants synthétiques en vrac à prix affichés, par exemple radiant 1,59 ct D VVS2 à 1 111 $ (extrait Parallel de `/lab-grown-diamonds/`).

### 10. Myranda Fine Jewelry (Chandler)

- V : 5055 W Ray Road, Suite 5, Chandler, AZ 85226 ; boutiques de Chandler et de Scottsdale (accueil).
- V : https://myrandafinejewelry.com/engagement-rings/ : bagues conçues et fabriquées « in-house at our Chandler, Arizona showroom — no outsourcing » ; travail avec la créatrice « in person at our showroom or virtually via Zoom, FaceTime, or text » ; « Every custom ring goes through a full 3D CAD rendering » ; « Most custom engagement rings take four to six weeks from consultation to delivery » ; naturel et synthétique, « certified by GIA, IGI » ; synthétique « typically cost 30–50% less » selon le site.
- Intérêt : parcours sur mesure à distance proche de celui de JR Diamond, sans outil ni prix en ligne.

## Hors classement (lus, moins pertinents)

- **Maya Caroleena Jewelers** (Gilbert) : même configurateur JewelerOS (https://mayacaroleena.com/design-your-ring, rendu identique à Christopher, V). Site refait avec Lovable ; l'ancienne page `/pages/custom-engagement-rings` répond 404 (V). Pas de prix lus.
- **Paul Bensel Jewelers** (Yuma) : JewelerOS, « Pick out your center stone in our Yuma, AZ showroom » (V, https://www.paulbenseljewelers.com/pages/custom-engagement-rings).
- **Quantum Qarat** (Phoenix) : joaillier privé tourné vers le synthétique (V) ; constructeur Punchmark `/ringsettings` vide : « No products found matching your filters » (V).
- **Raskin's Jewelers** (Prescott) : prix affichés de bagues ASHI, de 1 900 $ à 3 720 $ sur l'accueil (V) ; ni configurateur ni 3D.
- **L. Trapp Jewelry Design** (Scottsdale) : prix « from » 900 $ à 4 500 $, solitaire ovale synthétique 2 ct à 2 999 $ (V) ; sur-mesure.
- **Andrew Z Diamonds** (Anthem, Carefree, DC Ranch à Scottsdale) : « Since 1949 » (V) ; sur-mesure sans frais, rendu 3D et estimation de prix après rendez-vous (V) ; pas de catalogue en ligne (`/collections/engagement-rings` en 404, V).
- **The Diamond Vault** (Scottsdale) : « Designer Collection », devis puis modèle 3D et fonte après acompte (V) ; pas de configurateur.
- **Molina Fine Jewelers** (Phoenix, 3134 East Camelback Road) : « Design Studio » (V) ; pas de vente en ligne vue sur l'accueil.
- **Rainbow Jewelers** (Tucson) : CAO sur mesure, prix alignés « on the Internet » (I, extrait Parallel ; site non ouvert).

## Écartés

- **Venazia** : pages « Mesa, AZ » et « Scottsdale, AZ » écrites pour le référencement ; numéro en 305 et horaires « EST » (I, extraits Parallel) : vendeur en ligne basé hors d'Arizona.
- **Hyde Park Jewelers** (salle à Scottsdale) : enseigne de The 1916 Company, dont le siège est hors d'Arizona (I, annuaire StoneAlgo) ; déjà écartée au Colorado.
- **Rêve Diamonds** : vendeur en ligne qui publie un guide sur Phoenix (I) ; pas d'ancrage local établi.
- **Cornelis Hollander, Schmitt Jewelers, Watchlink** : sur-mesure en boutique, sans signe de vente en ligne de bagues dans les extraits (I, recherche web) ; non ouverts.

## Enseignements pour JR Diamond

- **Prestataires.** JewelerOS équipe quatre joailliers de la région de Phoenix et de Yuma (Christopher, Z's, Maya Caroleena, Paul Bensel), avec le même parcours et la même promesse : « ready in just a couple of weeks » (V). GemFind équipe The Diamond Guys et Trinity ; RingCreator et VDB équipent Schubach (V). Deux outils maison seulement : Isaac (3D three.js) et V Jewelers (questionnaire guidé).
- **Ce que voit le client.** Aucun site lu ne dit montrer le fichier de fabrication. Isaac écrit le contraire : « An illustration to help you picture proportions » (V). La promesse « ce que vous voyez existe » reste un argument libre.
- **Prix.** Les prix affichés portent sur la monture seule (Schubach 1 675 $, The Diamond Guys 7 250 $ « Center Diamond Sold Separately ») ou sur une bague finie de catalogue (Elite, London Gold) (V). Aucun ne décompose métal, pierre et façon. Isaac et Christopher renvoient le prix à un rendez-vous (V).
- **Délais.** « A couple of weeks » (Z's, V Jewelers, Paul Bensel), 4 à 6 semaines (Myranda) (V). Les 14 jours ouvrés de JR Diamond sont au niveau des plus rapides.
- **Synthétique.** Partout, souvent dès la première étape : bascule Natural / Lab Grown chez Christopher (V), entrée « Start with a Lab Grown Diamond » chez The Diamond Guys (V), certificats IGI chez Elite (V). Le terme employé est « lab-grown » (V).
- **Idée à reprendre.** La question « When do you need your ring? » (JewelerOS, V) qualifie la demande sans formulaire long ; elle pourrait précéder le devis de JR Diamond.

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire ; robots.txt lu pour chaque domaine) :

- Isaac Jewelers : https://www.isaacjewelers.com/robots.txt, https://www.isaacjewelers.com/, https://www.isaacjewelers.com/design-your-ring/ (curl et rendu, bouton « Start designing »), https://www.isaacjewelers.com/engagement-rings-scottsdale/
- Joseph Schubach : https://schubachstore.com/robots.txt, https://schubachstore.com/, https://schubachstore.com/pages/scottsdale-custom-rings, https://schubachstore.com/pages/design-your-own-engagement-ring (curl et rendu), https://schubachstore.com/apps/ring-creator/rb-get-started, https://schubachstore.com/apps/ring-creator/rb-setting-details?ring_stock_num=H103279-Oval-2ct-14K%20Y-S103343-14K%20W (curl et rendu), https://schubachstore.com/pages/about-us
- The Diamond Guys : https://www.thediamondguys.com/robots.txt, https://www.thediamondguys.com/, https://www.thediamondguys.com/collections/engagement-rings, https://www.thediamondguys.com/apps/ringbuilder/settings/ (→ https://www.thediamondguys.com/collections/ringbuilder-settings, curl et rendu), https://www.thediamondguys.com/collections/ringbuilder-settings/products/two-tone-solitaire-engagement-ring-with-diamond-hidden-halo-n0627smd
- Christopher Fine Diamonds : https://christopherfinediamonds.com/robots.txt, https://christopherfinediamonds.com/, https://christopherfinediamonds.com/pages/custom-ring-designer, https://christopherfinediamonds.com/pages/engagement-rings, https://christopherfinediamonds.com/pages/design-your-ring (curl et rendu, quatre étapes actionnées), https://christopherfinediamonds.com/products.json, https://christopherfinediamonds.com/collections/engagement-rings (404)
- Z's Fine Jewelry : https://www.zsfinejewelry.com/robots.txt, https://www.zsfinejewelry.com/, https://www.zsfinejewelry.com/pages/custom-engagement-rings, https://www.zsfinejewelry.com/pages/design-your-ring (curl et rendu), https://www.zsfinejewelry.com/jewelry/engagement-rings
- V Jewelers : https://www.vjewelersaz.com/robots.txt, https://www.vjewelersaz.com/, https://www.vjewelersaz.com/design-your-ring/ (curl et rendu, bouton « Design Your Ring »), https://www.vjewelersaz.com/custom-engagement-rings/, https://www.vjewelersaz.com/custom-ring-builder/
- Trinity Diamonds : https://www.trinitydiamonds.com/robots.txt, https://www.trinitydiamonds.com/, https://www.trinitydiamonds.com/pages/engagement-rings-in-tucson-az, https://www.trinitydiamonds.com/apps/ringbuilder/settings/ (rendu)
- Elite Fine Jewelers : https://www.elitefinejewelers.com/robots.txt, https://www.elitefinejewelers.com/, https://www.elitefinejewelers.com/collections/engagement-rings
- London Gold : https://www.londongold.com/robots.txt, https://www.londongold.com/, https://www.londongold.com/engagement/
- Myranda Fine Jewelry : https://myrandafinejewelry.com/robots.txt, https://myrandafinejewelry.com/, https://myrandafinejewelry.com/engagement-rings/
- Hors classement : https://mayacaroleena.com/robots.txt, https://mayacaroleena.com/, https://mayacaroleena.com/pages/custom-engagement-rings (404), https://mayacaroleena.com/design-your-ring (rendu), https://mayacaroleena.com/engagement-rings ; https://www.paulbenseljewelers.com/robots.txt, https://www.paulbenseljewelers.com/, https://www.paulbenseljewelers.com/pages/custom-engagement-rings ; https://www.quantumqarat.com/robots.txt, https://www.quantumqarat.com/, https://www.quantumqarat.com/jewelry/engagement-rings, https://www.quantumqarat.com/ringsettings (rendu) ; https://raskinsjewelers.com/robots.txt, https://raskinsjewelers.com/ ; https://www.ltrapp.com/robots.txt, https://www.ltrapp.com/, https://www.ltrapp.com/diamond-rings-scottsdale ; https://andrewzdiamonds.com/robots.txt, https://andrewzdiamonds.com/, https://andrewzdiamonds.com/pages/engagement-rings, https://andrewzdiamonds.com/collections/engagement-rings (404) ; https://www.diamond-vault.com/robots.txt, https://www.diamond-vault.com/, https://www.diamond-vault.com/engagement/custom-wedding-rings/ ; https://www.molinafinejewelers.com/robots.txt, https://www.molinafinejewelers.com/

Extraits d'index de recherche (Parallel Search, recherche web), utilisés pour les faits marqués I :

- https://www.trinitydiamonds.com/pages/custom-engagement-rings-in-tucson-az, https://www.trinitydiamonds.com/pages/custom-jewelry-in-tucson-az (processus CAO, bague IGI « Call for price »)
- https://www.londongold.com/lab-grown-diamonds/ (diamants synthétiques en vrac)
- https://www.rainbowjewelersinc.com/
- https://www.venazia.com/engagement-rings-sets-mesa-az, https://www.venazia.com/lab-grown-diamond-engagement-rings-mesa-az, https://www.venazia.com/unique-engagement-rings-scottsdale-az
- https://www.stonealgo.com/local-jewelers/scottsdale-az (Hyde Park Jewelers, The 1916 Company)
- https://www.revediamonds.com/us/blog/where-to-buy-an-engagement-ring-in-phoenix
- https://www.theknot.com/marketplace/cornelis-hollander-jewelry-designs-scottsdale-az-2109697, https://www.theknot.com/marketplace/schmitt-jewelers-phoenix-az-529012, https://www.watchlink.com/pages/scottsdale-custom-jewelry-designs
