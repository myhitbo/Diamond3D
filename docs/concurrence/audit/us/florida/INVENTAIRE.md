# Floride : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition en Floride et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales, les grands magasins et les grandes maisons sont exclus.

Méthode : lecture des pages comme un visiteur ordinaire (curl sans en-tête modifié), au plus une page toutes les 2,5 secondes par site (10 secondes quand le robots.txt le demande). Le robots.txt de chaque site a été lu avant toute page (25 domaines de joailliers). Un seul rendu dans Chromium sans écran a été tenté (Jae's, page du constructeur 3D : deux lancements, une capture). Aucun formulaire rempli, aucun compte créé, aucun contrôle de configurateur actionné, aucun chat ni SMS ouvert, aucun générateur d'images lancé. Aucune requête n'a contourné une protection : après un 403, le site n'a plus été interrogé. Le service de rendu Firecrawl n'avait plus de crédit ce jour : les constructeurs écrits en JavaScript n'ont donc pas été déroulés. Chaque fait porte une marque :

- **V** (vérifié) : page lue le 15/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait d'index de recherche (Parallel Search) ou de plusieurs indices ;
- **S** (supposé).

Blocage : quatre sites bloquent les robots (V).

- **David Stern Jewelers** : le robots.txt interdit tout le site aux agents d'IA nommés (`Claude-User`, `ClaudeBot`, `anthropic-ai`, `GPTBot`, etc.) et le dossier `/build-your-ring/` à tous les robots (« DSJ Anti-Scrape »). Aucune page lue.
- **Arnold Jewelers** et **Venazia** : robots.txt lisible (200), puis défi Cloudflare « Just a moment… » (403) sur chaque page. Deux pages tentées par site, pas de nouvel essai.
- **Brilliance.com** : 403 Cloudflare dès le robots.txt.

Les 22 autres sites ont répondu 200 à curl. Les robots.txt des boutiques Shopify portent une consigne adressée aux agents (installer une « compétence » shop.com, passer par une interface dédiée pour les achats) : elle n'a pas été suivie, et aucun achat n'a été tenté.

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | GOLDZENN | Miami | https://goldzenn.com | https://goldzenn.com/collections/engagement-rings | oui (propre au site : fiche configurable par forme, carat de 1 à 5 ct, qualité, or 14 ou 18 k en trois couleurs, taille, gravure ; vue 360° et vue portée) | aucun (Shopify, 200) | Le modèle le plus proche de JR Diamond : « every design shows its price », pierre synthétique certifiée IGI, fabrication à la commande « in about 3 weeks » avec date d'expédition sur la fiche (V). Ophelia rond : 1 256,50 $ en prix de lancement, 1 795 $ ensuite (V). Cours de l'or affiché en tête de site (V). |
| 2 | Gabriel Edward Jewelers | Miami (centre, 169 E Flagler St) | https://gabrieledward.com | https://gabrieledward.com/apps/ring-creator/rb-setting-list?in_journey=true&jewelry_type=ring&view_type=grid&ring_style=Solitaire&metal_type=White%20Gold%7C14K | oui (RingCreator : monture, pierre synthétique ou naturelle, bague complète) | aucun (Shopify, 200 ; `/apps` non interdit) | « handcrafted in Miami, with transparent pricing » : montures à 1 050, 1 450, 1 850 et 2 250 $, acompte de 50 %, devis sur mesure sous 24 h, 4 à 5 semaines (V). Promet d'envoyer par SMS des vidéos des diamants et des montures (V). |
| 3 | David Stern Jewelers | Boca Raton | https://www.davidsternjewelers.com | https://www.davidsternjewelers.com/build-your-ring | oui (monture, diamant, total ; diamants du flux Nivoda) (I) | **bloqué** : robots.txt interdit le site aux agents d'IA et `/build-your-ring/` à tous les robots (V) | Total affiché à chaque étape : monture 1 476 $ + diamant 200 $ = 1 676 $ dans l'exemple indexé ; montures « Made to order », 7 métaux (I). Atelier derrière la salle, « where you can watch it happen » (I). À auditer à la main. |
| 4 | The DiamondLab | Boca Raton | https://www.thediamondlab.net | https://www.thediamondlab.net/pages/ring-builder?stage=Select+Setting&sort=PRICE-ASC | oui (Nivoda Connect : monture ou diamant d'abord) | aucun (Shopify, 200) ; contenu du constructeur en JavaScript, non lu | Spécialiste du synthétique qui se dit producteur : « We are the source », « Every diamond is grown in our own lab », « 5 Generations in the Diamond Industry » (V). Même discours « direct de la source » que JR Diamond. |
| 5 | Jae's Jewelers | Coral Gables | https://www.jaesjewelers.com | https://www.jaesjewelers.com/pages/custom-ring-builder | oui (3D, JewelerOS/StoneAlgo ; second constructeur Caratwise à `/pages/design-your-own-engagement-ring`) | aucun (Shopify, 200) ; la vue 3D est restée vide dans Chromium sans écran | Concepteur 3D en ligne, pierre choisie en boutique, bague prête « in just a couple of weeks » (V). Maison familiale depuis 1945 (V). Le même outil 3D tourne chez quatre autres joailliers de Floride (V). |
| 6 | Arnold Jewelers | Largo (baie de Tampa) | https://arnoldjewelers.com | https://arnoldjewelers.com/engagement-ring-builder/ | oui (« Ring Creator » : pierre ou monture d'abord) (I) | **bloqué** : défi Cloudflare, 403 (V) | Le délai devient un levier de prix : « Custom Build Timeline: 10 business days OR Flexible Timeline: 20% off Setting with 6–8 week build » (I). Diamant naturel ou synthétique, « Transparent pricing » (I). |
| 7 | Venazia | Aventura (Miami) | https://www.venazia.com | https://www.venazia.com/custom-engagement-rings-miami-fl | non constaté (fiches à options, sur-mesure par formulaire) (I) | **bloqué** : défi Cloudflare, 403 (V) ; `Crawl-delay: 10` | Vendeur en ligne de Miami : « Custom-Design Jewelry in About 10 Days », dessin CAO sous 24 h, prix affichés (bagues en synthétique d'environ 1 ct de 1 329 à 1 809 $) (I). Concurrent direct sur le délai. |
| 8 | Goody The Jeweler | Pembroke Pines | https://goodythejeweler.com | https://goodythejeweler.com/custom-piece-design | oui, d'un genre nouveau : générateur d'images par IA à partir d'une description (pas de paramètres) | aucun (200 ; `/api/` et `/mockup/` interdits, non visités) | Synthétique uniquement, certifié IGI, fabriqué sur place, dessin 3D gratuit et sans acompte, bagues dès 1 500 $ (V). « AI concept renders, powered by OpenAI. Goody finalizes every piece with you in 3D » (V). |
| 9 | J.R. Dunn Jewelers | Lighthouse Point | https://jrdunn.com | https://jrdunn.com/collections/diamond-finder | partiel (constructeur monture et diamant intégré au thème ; point d'entrée non trouvé en lecture statique) | aucun (Shopify, 200) | Le récit d'atelier le plus complet : CAO, prototype en cire à la taille du doigt, fonte, sertissage et finition « on-premises », rien ne sort de la maison (V). Budget publié : dès 3 000 $, bague sur mesure dès 5 000 $, 4 à 6 semaines (V). Bague en synthétique à 1 799 $ (V). |
| 10 | Unique Diamond Boutique | Winter Park (Orlando), Tampa | https://uniquediamondboutique.com | https://uniquediamondboutique.com/apps/ringbuilder/settings/ | oui (GemFind : monture ou diamant d'abord) | aucun (Shopify, 200) | Spécialiste du synthétique (« ESG Diamonds™ ») avec recherche de diamants en ligne (V). Sur mesure : CAO, cire imprimée, prototype en plastique expédié au client (V). |

## Détail par acteur

### 1. GOLDZENN (Miami)

- V : boutique au 1056 SW 67th Ave, Miami, FL 33144, du lundi au samedi (https://goldzenn.com/pages/engagement-rings-miami). Le cœur du catalogue est la chaîne en or (mailles cubaines, bagues d'homme) ; la bague de fiançailles est une gamme récente (I, d'après la mention « Launch price »).
- V : https://goldzenn.com/collections/engagement-rings : « Build your own Lab-grown diamond engagement rings. Choose the shape, carat and gold, and every design shows its price. IGI-certified center stones, set in 14K or 18K solid gold and made to order in about 3 weeks. » Et : « Prices are for a VS1 F–G center diamond. Choose ring size and diamond upgrades on the ring page. » Les vignettes portent les mentions « 360° view » et « On hand ».
- V : fiche Ophelia (adresse en Sources). Prix 1 256,50 $, « Launch price: 30% off through Nov 19 », prix normal 1 795 $. Options : carat de 1 à 5 ct, qualité « VS1 F–G, VVS1 F–G or VVS1 D », or 14 ou 18 k jaune, blanc ou rose, taille, gravure. « Made to order: ships in about 3 weeks. » Le modèle existe en huit formes, marquise comprise.
- V : même collection, questions fréquentes. Le rapport IGI est émis pour la pierre après la commande. Retour sous 30 jours : avoir de 100 %, ou remboursement moins 10 % de frais (400 $ au plus). Une mise à taille gratuite sous 60 jours. Les bagues gravées et le sur-mesure ne sont pas repris.
- V : bandeau « Gold $3,883 /oz Silver $48.75 /oz » avec un lien « Live Gold price guide ».
- V : https://goldzenn.com/pages/custom-engagement-rings : sur-mesure « from around $1,200 », dessin CAO puis rendu réaliste, fabrication après accord, or 10, 14 ou 18 k, pierre synthétique, naturelle ou moissanite. Tableau comparatif entre la bague de collection et la bague sur mesure (prix, rapport, retour, mise à taille).
- V : le bouton « text a jeweler » ouvre un SMS pré-rempli vers le +1 321 521 4651 (lien `sms:`, non ouvert). Chat Crisp chargé (non ouvert).
- I : les prix des autres modèles vont de 1 895 à 2 750 $ avant remise (valeurs relevées dans le HTML de la collection).
- Intérêt : c'est la référence de Floride. Le prix complet, pierre comprise, la date d'expédition et la politique de retour sont visibles avant l'achat, et l'outil est fait maison. Mais le visuel est une vue tournante, pas le fichier de fabrication, le prix n'est pas détaillé par poste, et le naturel n'existe que sur devis.

### 2. Gabriel Edward Jewelers (Miami)

- V : 169 E Flagler St, Miami, FL 33131 (HTML de https://gabrieledward.com/), salle sur rendez-vous (lien Calendly, non ouvert).
- V : accueil : « The smarter way to buy an Engagement Ring: premium Lab-Grown Diamonds, handcrafted in Miami, with transparent pricing that saves you thousands over traditional jewelry stores. » Trois entrées : « Start with Setting », « Start with Lab-Grown Diamond », « Start with Natural Diamond ».
- V : page de départ (adresse dans le tableau) : étapes « Choose Setting / Choose Stone / Complete Ring », or 14 ou 18 k en trois couleurs et platine, montures à 1 050, 1 450, 1 850 et 2 250 $, ligne « Pay a deposit 50% ». Outil servi par `ringcreator.io`.
- V : https://gabrieledward.com/pages/quote-my-dream-ring : devis sous 24 h par SMS ou courriel, début de fabrication à l'acompte de 50 %, « approximately four to five weeks », option express. Champ de téléphone libellé « We'll text you videos of Diamonds and Settings here! » (formulaire non rempli).
- V : accueil, questions fréquentes : garantie à vie contre les défauts de fabrication, retour ou échange sous 30 jours, première mise à taille gratuite, envoi assuré UPS Next Day Air gratuit aux États-Unis, envoi international « roughly $125 », TVA et droits à la charge du client, Affirm.
- V : https://gabrieledward.com/pages/create-your-dream-ring-in-miami : rubrique « Meet the Craftsmen », « the actual craftsmen behind your ring ».
- S : l'adresse est celle de l'immeuble Alfred I. duPont, dans le quartier des bijoutiers du centre de Miami.
- Intérêt : même promesse que JR Diamond (atelier, prix direct, vidéo de la pierre), avec un outil loué. Les vidéos partent par SMS après la prise de contact, pas sur le site. À noter pour la France : il expédie à l'étranger et laisse la TVA au client.

### 3. David Stern Jewelers (Boca Raton)

- Blocage (V) : https://www.davidsternjewelers.com/robots.txt contient un bloc « DSJ Anti-Scrape » : `Disallow: /build-your-ring/` pour tous, puis `Disallow: /` pour plus de trente agents d'IA, dont `Claude-User`. Aucune page du site n'a été demandée. Le même fichier indique que le constructeur sert « the live Nivoda diamond detail pages ».
- I (extraits d'index) : 21073 Powerline Rd #37, Boca Raton, FL 33433 ; maison familiale depuis 1970, gemmologue diplômé du GIA.
- I : page « Build Your Engagement Ring » : « Select Your Setting — Titania Solitaire, 18kt White Gold, Size 6 — $1,476 », « Select Your Diamond — 1.07-Carat Radiant Cut — $200 », « Complete Your Purchase — Free resizing for life — $1,676 ». Filtres par forme de pierre et style de monture. Montures « Made to order », « 7 metals », « from $2,788.48 » à « from $3,905.63 ».
- I : « Sketch, CAD, wax, then metal, built at the bench behind the showroom where you can watch it happen. » Refonte de bijoux hérités, or 14, 18 et 22 k, platine, diamants naturels et synthétiques.
- Intérêt : le seul constructeur de Floride qui additionne monture et pierre sous les yeux du client, chez un joaillier qui fabrique sur place. L'audit doit se faire à la main, dans un navigateur.

### 4. The DiamondLab (Boca Raton)

- V : 364 East Palmetto Park Road, Boca Raton, FL 33432 (https://www.thediamondlab.net/pages/contact-us).
- V : accueil : « We are the source. No middlemen. No showroom markups. », « Always GIA / IGI certified », « 5 Generations in the Diamond Industry », « Direct-from-Source Pricing », « 50,000+ lab diamonds », « Self-grown ». Comparatif « Jewelry Retailer $4,000 / The DiamondLab $1,000 ». Rubrique « Meet Eyal Cohen ».
- V : https://www.thediamondlab.net/pages/about-the-diamondlab : « Every diamond is grown in our own lab », « Each diamond comes with the seed it grew from. A keepsake. »
- V : la page de départ répond (200) et charge l'extension Shopify `nivoda-connect`. Menus « Start with a Setting », « Start with a Lab Diamond », « Loose Diamond Search ». Le contenu du constructeur n'a pas été lu.
- S : Nivoda est une place de marché de diamants. Un catalogue de 50 000 pierres servi par cet outil cadre mal avec « grown in our own lab » pour toutes les pierres. À vérifier lors de l'audit.
- V : des avis clients cités sur le site parlent de trois semaines de fabrication (« it only took about 3 weeks to make »).
- Intérêt : positionnement de diamantaire de métier qui vend en direct, proche de celui de l'atelier de Ramat Gan. L'idée du « germe » remis avec la pierre est un récit de fabrication propre au synthétique.

### 5. Jae's Jewelers (Coral Gables)

- V : 237 Miracle Mile, Coral Gables, FL 33134 ; « Family Owned Since 1945 », troisième génération (https://www.jaesjewelers.com/).
- V : https://www.jaesjewelers.com/pages/custom-engagement-rings : « Design your ring online in stunning 3D / Pick out your center stone in our Coral Gables, FL showroom / Finalize & order your ring with our expert team ». Et : « we can have it ready for you in just a couple of weeks at a great price, fully customized around your center stone ».
- V : la page de départ répond (200) et charge `jeweleros.com/main_theme/static/dist/partner_config.js`. Dans Chromium sans écran, la zone du constructeur est restée vide (capture faite, cause non établie : WebGL absent, S).
- V : https://www.jaesjewelers.com/pages/design-your-own-engagement-ring charge un second outil, Caratwise (`release.caratwise.com`). Le pied de page indique « Powered by GemFind ».
- V : page de diamants synthétiques de la marque Clarity (https://www.jaesjewelers.com/pages/lab-grown-diamonds).
- I : le concepteur affiche le prix de la monture, hors pierre centrale (lu chez Maharaja's, même outil).
- Intérêt : représentant du concepteur 3D loué de StoneAlgo, déjà relevé au Colorado. La 3D est un modèle générique, et la pierre se choisit en boutique.

### 6. Arnold Jewelers (Largo)

- Blocage (V) : https://arnoldjewelers.com/robots.txt répond (200, rien d'interdit hors `/wp-admin/`), mais les deux pages demandées renvoient un défi Cloudflare (403).
- I (extraits d'index) : 12293 Seminole Blvd, Largo, FL 33778 ; maison familiale depuis plus de 40 ans, connue pour le bijou ancien.
- I : page « Ring Creator » : « Design Your Own Engagement Ring — Custom Build Timeline: 10 business days OR Flexible Timeline: 20% off Setting with 6–8 week build - Contact Us for Coupon Code — Begin with a Stone / Begin with a Setting ».
- I : guide du 7 avril 2026 : diamant naturel ou synthétique, monture, métal, panier ; « your ring will take the jewelers approximately 2-3 weeks to craft » ; « Transparent pricing ». Les deux pages ne donnent pas le même délai.
- I : sur mesure complet en sept étapes, de 6 à 8 semaines.
- Intérêt : le délai de 10 jours ouvrés est plus court que les 14 jours de JR Diamond, et la remise de 20 % pour qui accepte d'attendre est une idée à étudier.

### 7. Venazia (Aventura, Miami)

- Blocage (V) : https://www.venazia.com/robots.txt répond (200, `Crawl-delay: 10`), puis défi Cloudflare (403) sur l'accueil et sur `/about-us`.
- I (extraits d'index) : société familiale fondée en 2005, de 2 à 10 salariés, 3201 NE 183rd St, Aventura, FL 33160 (LinkedIn, BBB). Elle se dit « Miami-based », avec des artisans dans l'immeuble Alfred I. duPont du centre de Miami.
- I : bandeau « Custom-Design Jewelry in About 10 Days », « Custom Design CAD Within 24 Hours », « All Designs Available in Lab-Grown & Natural Diamonds », retour sous 30 jours, certificats GIA et IGI, « Made in the USA ».
- I : prix affichés, par exemple « Four-Prong Basket Cathedral Sidestone Engagement Ring $1,329.00 » pour 1,03 ct synthétique.
- I : « Using Venazia's proprietary 3D design technology, you can view the exact replica of your custom engagement ring before it is created. » Le sur-mesure passe par un formulaire avec photos.
- I : des centaines de pages de référencement par ville (« Custom Engagement Rings Jacksonville, FL », etc.), déjà rencontrées dans l'inventaire du Colorado.
- Intérêt : concurrent direct sur le délai et sur la promesse « vous voyez la bague avant qu'elle existe ». Sa méthode de référencement local est à connaître avant le lancement en anglais.

### 8. Goody The Jeweler (Pembroke Pines)

- V : 2625 N Hiatus Rd, Pembroke Pines, FL 33026, ouvert 7 jours sur 7, en anglais et en espagnol (https://goodythejeweler.com/).
- V : « Goody works exclusively with laboratory-grown diamonds », rapport IGI avec chaque pierre, « Cast, set and finished right here in Pembroke Pines », « Free 3D design », « No deposit to start ».
- V : https://goodythejeweler.com/custom-piece-design : « Design your own lab-grown engagement ring or any piece, free. See it in 4K, instantly. Describe a ring, pendant, chain or anything you've imagined. We'll draw a concept, you refine it, then Goody makes it real. » Mention : « AI concept renders, powered by OpenAI. Goody finalizes every piece with you in 3D. » Générateur non lancé.
- V : https://goodythejeweler.com/lab-grown-engagement-rings : « Goody's lab-grown rings start at $1,500. » Et : « GIA stopped grading lab-grown stones for color, clarity and cut in October 2025. IGI still grades all three » (affirmation du site, non vérifiée ici).
- Intérêt : l'image générée remplace le configurateur. C'est l'inverse de la promesse de JR Diamond : l'image montre une idée, pas un bijou qui existe. L'affirmation sur le GIA est à vérifier, car elle touche la règle « GIA pour le naturel, IGI pour le synthétique ».

### 9. J.R. Dunn Jewelers (Lighthouse Point)

- V : 4210 N. Federal Hwy., Lighthouse Point ; « Family-Owned. Trusted for Over 55 Years », depuis 1969 (https://jrdunn.com/).
- V : https://jrdunn.com/pages/custom-jewelry : « the entire process — design consultation, CAD rendering, 3D wax prototype, casting, stone setting, and finishing — happens in our Lighthouse Point showroom ». « A wax model is printed to your exact finger size. You hold it, wear it. » Prix : « Simple custom pieces in gold typically start around $3,000 », bague sur mesure « from $5,000 and up ». Délai : « 4–6 weeks ». Refonte de bijoux hérités, pierres et métal du client repris.
- V : fiche « 0.80 Carat Lab Grown Cushion Diamond Halo Engagement Ring » à 1 799 $. Mention : « Prices may vary based on market conditions and customization. »
- V : le thème contient un constructeur (`ringBuilder.init`, `fetchProducts`, `addToCart`) et un panneau « Here's your perfect match / Design your dream ring again / ADD TO CART » qui assemble une monture et un diamant. La page qui l'ouvre n'a pas été trouvée en lecture statique.
- V : https://jrdunn.com/collections/diamond-finder répond (200), avec un lien vers les diamants synthétiques (`?filter.v.origin=lab_grown`).
- Intérêt : meilleur exemple de transparence sur la fabrication et sur le budget. Proche de l'offre de transformation de bijoux de famille. La fabrication est décrite, pas montrée pour la bague du client.

### 10. Unique Diamond Boutique (Winter Park, Tampa)

- V : 157 E New England Ave., Suite 290, Winter Park, FL 32789 (https://uniquediamondboutique.com/). I : seconde adresse au 4100 W Kennedy Blvd #228, Tampa.
- V : la page de départ répond (200) : « Start with a Setting / Start with a Diamond », outil GemFind (`gemfind.com`). Menus séparés pour le synthétique et pour le naturel (« Engagement (Natural Diamonds) »).
- V : https://uniquediamondboutique.com/pages/custom-jewelry-design : dessin, rendu CAO envoyé par courriel, cire imprimée en 3D, « A plastic model proto-type can be viewed in person or shipped to you for final approval. There may be an additional cost for the proto-type. »
- I : montures du fabricant Overnight Mountings « from $1,206.00 » à « from $4,769.00 » ; maître joaillier sur place.
- Intérêt : exemple du joaillier local passé au synthétique avec des outils de catalogue. Le prototype envoyé au client est un service que JR Diamond n'a pas.

## Hors classement (lus, moins pertinents)

- **Maharaja's Fine Jewelry** (Panama City, 105 W 23rd St) : même concepteur 3D que Jae's (`/pages/custom-ring-builder`, 200). Sa FAQ est la plus claire sur le prix : « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s). » Prêt en « 2-4 Weeks ». Nom et téléphone demandés pour enregistrer le dessin (V, https://shopmaharajas.com/pages/custom-engagement-rings).
- **Elebash's Jewelers** (Pensacola, 36 Palafox Pl) : même concepteur 3D, mêmes textes ; quatrième génération, depuis 1919 (V, https://www.elebashs.com/pages/custom-engagement-rings).
- **A&Z Jewelers** (Sarasota) : même concepteur 3D, annoncé en bandeau (V, https://azjewelersfl.com/pages/custom-ring-builder).
- **Dunkin's Diamonds** (Fort Myers et autres ; magasins en Floride et en Ohio) : trois outils sur le même site. « Dream Ring Builder » en 3D (`/pages/custom-ring-builder`, JewelerOS), constructeur GemFind (`/apps/ringbuilder/settings/`), recherche de diamants naturels et synthétiques (`/apps/diamondtools`). Trois générations (V, https://dunkinsdiamonds.com/).
- **Milan's Jewelry** (Sarasota, 1666 Main St.) : « Design Your Engagement Ring » (monture puis diamant), constructeur d'alliances, catalogue Stuller en cadre, site « Powered by: CaratIQ » (V, https://www.milansjewelry.com/pages/engagement).
- **Mavilo Wholesalers** (Tampa) : grossiste ouvert au public. Plateforme « Mavilo Net™ » de diamants naturels (V, https://www.mavilo.com/). Bagues montées avec prix, de 3 400 à 31 900 $ (I). Pas de constructeur.
- **LC Rings** (Tampa) : « rings priced at or near wholesale cost », bureau sur rendez-vous (V, https://lcrings.com/). Sur mesure « in as little as two weeks » (I).
- **Westshore Diamond** (Tampa) : salle sur rendez-vous depuis 2011, bagues « Starting at $1,000 », naturel ou synthétique, platine et or 14 ou 18 k (V, https://www.westshorediamond.com/).
- **Sakaris Jewelers** (Naples) : studio privé sans stock. Consultation par vidéo dans tout le pays, rendus 3D révisés sans limite, kit de mesure du doigt envoyé gratuitement, fabrication de 4 à 8 semaines, GIA pour le naturel et IGI pour le synthétique (V, https://sakarisjewelers.com/pages/design-your-ring). I : 3066 Tamiami Trail N, Suite 302. C'est le parcours à distance le plus abouti sans configurateur.
- **Carroll's Jewelers** (Fort Lauderdale, 915 East Las Olas Boulevard, depuis 1928) : page « Design Your Ring » qui renvoie au catalogue et à la prise de rendez-vous ; un quiz et un estimateur sont chargés, pas de constructeur (V, https://carrollsjewelers.com/pages/design-your-ring).
- **Riches Jewelry** (Orlando, 5135 International Dr., Suite 18) : or 18 k et platine, naturel et synthétique (V, https://richesjewelry.com/collections/engagement-ring). Prix « from $1,099.00 » à 5 046 $ (I).
- **Anchor Boutique** (St. Augustine, 77 San Marco Ave.) : sur mesure avec acompte de 500 $, dessins envoyés sur le téléphone, maquette imprimée en 3D à essayer, de 8 à 12 semaines (V, https://www.anchorboutique.com/).
- **Diamonds by Raymond Lee** (Boca Raton, 2801 N Federal Hwy) : montres et bijoux de luxe avec prix (V, https://diamondsbyraymondlee.com/). Bagues certifiées GIA de 15 995 à 250 995 $, sur mesure sur rendez-vous (I).
- **International Diamond Center** (Clearwater ; au moins huit salles en Floride et une à Savannah, I) : chaîne régionale de marques de créateurs. Aucun constructeur relevé sur l'accueil (V, https://shopidc.com/).
- **Underwood Jewelers** (Jacksonville, Ponte Vedra Beach) : depuis 1928, diamants naturels « Kipekee », « Diamond Calculator » (V, https://www.underwoodjewelers.com/engagement/).
- **Harby Jewelers** et **Jax Jewelers House** (Jacksonville), **Majestic Jewelers** (Winter Park, outil en ligne pour l'alliance), **Everglow Jewelry** (Tampa, constructeur en boutique avec bagues aimantées) : sur-mesure avec CAO, connus par les seuls extraits d'index (I).

## Écartés

- **Brilliance.com** : vendeur en ligne national, exclu par la consigne, mais absent de la liste des acteurs traités au niveau national. Atelier à Boynton Beach, « Every ring is made to order in our U.S. workshop », deux entrées « Start with a Setting / Start with a Diamond », « See your ring and total price instantly », sur-mesure en 3 à 6 semaines, 1,3 million de diamants certifiés (I, extraits d'index). **Bloqué** : 403 Cloudflare dès https://www.brilliance.com/robots.txt (V). À signaler à l'étude nationale.
- **GRWN Diamonds** : remonté par une recherche « Florida », mais boutique à West Hollywood, Californie (I, https://grwn.com/pages/all-design-your-own-rings).
- **Diamonds Direct**, **Mayors** : non étudiés. Le premier est une chaîne nationale (S) ; le second est une enseigne de montres et de grandes marques (S).

## Enseignements pour JR Diamond

- **Un seul configurateur fait maison.** GOLDZENN configure la bague sur la fiche produit (V). Tous les autres louent un outil : JewelerOS/StoneAlgo en 3D (Jae's, Maharaja's, Elebash's, A&Z, Dunkin's), RingCreator (Gabriel Edward ; Arnold, I), Nivoda (The DiamondLab ; David Stern, V par son robots.txt), GemFind (Unique Diamond Boutique, Dunkin's), Caratwise (Jae's), CaratIQ et Stuller (Milan's). Aucun ne montre le fichier de fabrication (I).
- **Le concepteur 3D de StoneAlgo est devenu un produit de série** : cinq sites de Floride, dont quatre avec les mêmes phrases mot pour mot (V). La 3D seule ne distingue plus un site ; la différence de JR Diamond est que son modèle est celui qui sera fabriqué.
- **Prix.** GOLDZENN affiche le prix complet, pierre comprise, et le cours de l'or (V). David Stern additionne monture et pierre (I). Gabriel Edward et le concepteur 3D affichent le prix de la monture seule (V). Personne ne détaille les postes : l'explication du prix reste libre.
- **Fabrication.** J.R. Dunn, David Stern et Goody insistent sur l'atelier sur place (V, I, V). David Stern propose de regarder le travail en boutique (I). Gabriel Edward envoie des vidéos de pierres par SMS (V). Aucun site lu ne propose de suivre sa propre bague en photos ou en vidéo (I).
- **Délais.** Arnold : 10 jours ouvrés, ou 20 % de remise sur la monture pour 6 à 8 semaines (I). Venazia : environ 10 jours (I). Concepteur 3D : « a couple of weeks », 2 à 4 semaines chez Maharaja's (V). GOLDZENN : environ 3 semaines, avec date d'expédition (V). Gabriel Edward : 4 à 5 semaines (V). J.R. Dunn : 4 à 6 (V). Sakaris : 4 à 8 (V). Anchor : 8 à 12 (V). Les 14 jours ouvrés de JR Diamond ne sont pas un record en Floride.
- **Synthétique.** Il domine dans le sud de la Floride : GOLDZENN et Goody ne proposent que lui en collection, The DiamondLab et Unique Diamond Boutique en font leur spécialité, Gabriel Edward le met en premier (V). Tous disent « lab-grown ». Le naturel reste le terrain des maisons anciennes (Underwood, Mavilo, Diamonds by Raymond Lee).
- **Retours.** Les bagues faites à la commande sont reprises sous 30 jours chez GOLDZENN (avec 10 % de frais en cas de remboursement) et chez Gabriel Edward (V). Chez GOLDZENN, le sur-mesure et les bagues gravées sont vendus ferme (V).
- **Protection des sites.** Quatre des acteurs les plus intéressants bloquent les robots. Leur audit demande un passage à la main, dans un navigateur ordinaire.

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire ; robots.txt lu pour chaque domaine) :

- GOLDZENN : https://goldzenn.com/robots.txt, https://goldzenn.com/, https://goldzenn.com/collections/engagement-rings, https://goldzenn.com/products/ophelia-round-lab-grown-diamond-engagement-ring?variant=67695078441261, https://goldzenn.com/pages/custom-engagement-rings, https://goldzenn.com/pages/engagement-rings-miami
- Gabriel Edward : https://gabrieledward.com/robots.txt, https://gabrieledward.com/, la page de départ du tableau, https://gabrieledward.com/pages/gabriel-edward-jewelers-miami, https://gabrieledward.com/pages/quote-my-dream-ring, https://gabrieledward.com/pages/create-your-dream-ring-in-miami
- David Stern : https://www.davidsternjewelers.com/robots.txt (seule page lue)
- The DiamondLab : https://www.thediamondlab.net/robots.txt, https://www.thediamondlab.net/, https://www.thediamondlab.net/pages/about-the-diamondlab, https://www.thediamondlab.net/pages/contact-us, https://www.thediamondlab.net/pages/ring-builder?stage=Select+Setting&sort=PRICE-ASC
- Jae's : https://www.jaesjewelers.com/robots.txt, https://www.jaesjewelers.com/, https://www.jaesjewelers.com/pages/custom-engagement-rings, https://www.jaesjewelers.com/pages/custom-ring-builder (curl, puis Chromium sans écran), https://www.jaesjewelers.com/pages/design-your-own-engagement-ring, https://www.jaesjewelers.com/pages/lab-grown-diamonds ; hôte de l'outil : https://www.jeweleros.com/robots.txt (`Disallow: /api/`)
- Arnold : https://arnoldjewelers.com/robots.txt ; https://arnoldjewelers.com/engagement-ring-builder/ (403), https://arnoldjewelers.com/engagement-rings/design-your-own-engagement-ring-in-tampa-bay-step-by-step-guide/ (403)
- Venazia : https://www.venazia.com/robots.txt ; https://www.venazia.com/ (403), https://www.venazia.com/about-us (403)
- Goody : https://goodythejeweler.com/robots.txt, https://goodythejeweler.com/, https://goodythejeweler.com/custom-piece-design, https://goodythejeweler.com/lab-grown-engagement-rings, https://goodythejeweler.com/custom-jewelry-design
- J.R. Dunn : https://jrdunn.com/robots.txt, https://jrdunn.com/, https://jrdunn.com/pages/custom-jewelry, https://jrdunn.com/products/lab-grown-diamond-engagement-ring-halo-cushion, https://jrdunn.com/collections/diamond-finder
- Unique Diamond Boutique : https://uniquediamondboutique.com/robots.txt, https://uniquediamondboutique.com/, https://uniquediamondboutique.com/apps/ringbuilder/settings/, https://uniquediamondboutique.com/pages/custom-jewelry-design
- Hors classement : https://shopmaharajas.com/ (et `/pages/custom-engagement-rings`, `/pages/custom-ring-builder`, `/pages/lab-grown-diamonds`), https://www.elebashs.com/ (et `/pages/custom-engagement-rings`, `/pages/custom-ring-builder`), https://azjewelersfl.com/ (et `/pages/custom-engagement-rings`, `/pages/custom-ring-builder`), https://dunkinsdiamonds.com/ (et `/pages/custom-ring-builder`, `/pages/ring-builder`, `/apps/ringbuilder/settings/`, `/pages/about-us`), https://www.milansjewelry.com/pages/engagement, https://www.mavilo.com/ (et `/pages/engagement-rings`), https://lcrings.com/, https://www.westshorediamond.com/, https://sakarisjewelers.com/pages/design-your-ring, https://carrollsjewelers.com/pages/ring-designer, https://carrollsjewelers.com/pages/design-your-ring (`/pages/ring-builder` y redirige), https://richesjewelry.com/collections/engagement-ring, https://www.anchorboutique.com/, https://diamondsbyraymondlee.com/, https://shopidc.com/, https://www.underwoodjewelers.com/engagement/ (et le robots.txt de chacun)
- Écartés : https://www.brilliance.com/robots.txt (403)

Extraits d'index de recherche (Parallel Search), utilisés pour les faits marqués I :

- David Stern : https://www.davidsternjewelers.com/build-your-ring, https://davidsternjewelers.com/, https://www.davidsternjewelers.com/visit-us, https://www.davidsternjewelers.com/jewelry-design, https://www.davidsternjewelers.com/about-us
- Arnold : https://arnoldjewelers.com/engagement-ring-builder/, https://arnoldjewelers.com/engagement-rings/design-your-own-engagement-ring-in-tampa-bay-step-by-step-guide, https://arnoldjewelers.com/custom-jewelry, http://arnoldjewelers.com/
- Venazia : https://www.venazia.com/about-us, https://www.venazia.com/custom-engagement-rings-miami-fl, https://www.venazia.com/custom-engagement-rings-boca-raton-fl, https://www.venazia.com/best-sellers-lab-grown-diamond-engagement-rings-orlando-fl, https://www.venazia.com/engagement-rings-tampa-fl, https://linkedin.com/company/venaziajewelry, https://www.bbb.org/us/fl/aventura/profile/jewelry-designers/venazia-inc-0633-90606084
- Brilliance : https://www.brilliance.com/, https://www.brilliance.com/about-us, https://www.brilliance.com/engagement-rings/custom, https://www.brilliance.com/diamonds, https://brilliance.com/products
- Unique Diamond Boutique : https://uniquediamondboutique.com/pages/tampa-location, https://uniquediamondboutique.com/pages/lab-grown-diamond-rings-in-winter-park-fl
- Autres : https://www.mavilo.com/pages/engagement-rings, https://lcrings.com/, https://richesjewelry.com/collections/engagement-ring, https://sakarisjewelers.com/pages/engagement-rings-naples-florida, https://diamondsbyraymondlee.com/, https://harbyjewelers.com/pages/jacksonville-custom-jewelry-design, https://www.jaxjewelershouse.com/, https://www.majesticjewelers.com/services/custom-jewelry-design, https://grwn.com/pages/all-design-your-own-rings ; Everglow Jewelry par un résumé de recherche web
