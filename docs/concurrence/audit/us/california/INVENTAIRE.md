# Californie : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition en Californie et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Sont exclus les vendeurs en ligne nationaux (dont plusieurs ont leur siège en Californie : Brilliant Earth, VRAI, Ritani, Keyzar…), les chaînes nationales, les grands magasins et les grandes maisons.

Méthode : lecture des pages comme un visiteur ordinaire, avec curl (identité par défaut), puis avec un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée) pour les pages en JavaScript. Le robots.txt de chaque domaine a été lu avant toute page ; aucun chemin interdit n'a été ouvert. Au plus une page toutes les 2,5 secondes par site. Aucun formulaire rempli, aucun compte créé, aucun panier ouvert, aucun chat, SMS ni WhatsApp ouvert (les liens wa.me sont seulement notés). Les seuls contrôles actionnés sont les quatre premiers choix du configurateur JewelerOS de Nick Engel & Co. (style, forme, « Decide later », « Not sure yet »). Les candidats ont été trouvés par des recherches web génériques (Parallel Search, recherche web), sans rien transmettre sur JR Diamond. Chaque fait porte une marque :

- **V** (vérifié) : page lue ou contrôle actionné le 15/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

Blocages et limites (V sauf mention) :

- **The Jewelry Exchange** (Tustin) : l'accueil répond 403 avec la page Cloudflare « Just a moment... » (défi navigateur). Site marqué **bloqué** ; aucun nouvel essai, aucun contournement. Son robots.txt répond 404.
- **Brax Jewelers** : un widget Cloudflare Turnstile se charge dans le formulaire de contact de la page du configurateur ; la lecture n'est pas bloquée. `Crawl-delay: 2` respecté.
- **Apex Jewelry Design** et **Shreve & Co.** : robots.txt géré par Cloudflare. Il interdit les robots d'entraînement (dont ClaudeBot, anthropic-ai, Claude-Web) et autorise `*` avec `Content-Signal: search=yes,ai-train=no,use=reference`. Nos lectures sont ponctuelles, sous l'identité curl ou Chromium, sans entraînement ; à garder en tête si une collecte plus large est envisagée.
- **Chemins interdits non visités** : `/apps/` chez RockHer (recherche de diamants `/apps/diamondsearch`), `/studio`, `/api/` et `/virtual-diamonds/` chez Victor Canera, `*/customize/` chez Robbins Brothers.
- **JewelerOS** (Nick Engel & Co., Brax, Angelucci et quatre autres) : après les quatre étapes de départ, le concepteur 3D affiche « Something went wrong » ; la console montre un refus CORS de `www.jeweleros.com/api/create/from-ring-config/`. Même échec qu'en Arizona : limite de notre navigateur sans écran, pas blocage du site.
- **Visionneuses iJewel3D** (Apex, deBebians) : la page de la visionneuse répond 200 et charge les ressources iJewel3D et WebGi, mais aucun canevas ne s'affiche dans notre Chromium sans carte graphique. Rendu 3D non confirmé.

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Apex Jewelry Design | Los Angeles (Jewelry District, 607 S Hill St, Suite 850) | https://apexjewelrydesign.com | https://apexjewelrydesign.com/shop/engagement-rings (fiches à options chiffrées) ; démonstration 3D : https://apexjewelrydesign.com/interactive-3d/ | oui (fiche à options chiffrées : métal, pierre centrale, taille ; pas de 3D en libre-service) ; 3D interactive iJewel3D du modèle CAO, envoyée pour validation | aucun (200) ; robots.txt Cloudflare (voir plus haut) ; 3D non affichée chez nous | Le plus proche de JR Diamond. Le client valide en 3D interactive le modèle CAO de sa bague avant fabrication (V). Le prix est décomposé : monture par métal (14 k 1 936 $, 18 k 2 436 $, platine 2 586 $), centre synthétique ≈ 1,50 ct D VS1 + 1 150 $ (V). Une page explique ce qui fait le prix (V). Délais : 1 à 2 jours ouvrés pour la 3D, 7 à 10 jours ouvrés de fabrication (V). Un seul joaillier, joignable sur WhatsApp (V). |
| 2 | RockHer | Los Angeles (607 S Hill St #801) | https://www.rockher.com | https://www.rockher.com/pages/design-your-own-engagement-ring (puis https://www.rockher.com/collections/build-an-engagement-ring) | oui (monture puis diamant, ou l'inverse ; 3 étapes Setting / Diamond / Complete ; essayage virtuel « Try On ») | partiel : `/apps/` interdit par robots.txt (recherche de diamants non visitée) | Prix le plus explicite : « The setting plus the diamond. Nothing added », monture de 1 310 à 9 480 $ (V). Modèle CAO construit sur les mesures du certificat, fonte, sertissage à Los Angeles, 8 à 12 jours ouvrés (V). Naturel GIA, synthétique IGI : la même règle que JR Diamond (V). Création libre à 1 000 $ de frais : trois CAO, maquette en résine portée avant la fonte (V). |
| 3 | deBebians | Los Angeles (611 Wilshire Blvd #913) | https://debebians.com | https://debebians.com/collections/engagement-rings | oui (Choose a Setting puis Choose a Center Stone ; 8 métaux) ; 3D interactive du fichier CAO pour le sur-mesure | aucun (Shopify, 200) ; 3D non affichée chez nous | Vendeur en ligne depuis 2005, fabrication à Los Angeles (V). Monture à prix affiché (Bezel Solitaire 1 444 $), « Ready to ship in 15 to 20 business days », sertissage offert (V). La page sur mesure intègre une visionneuse 3D qui charge un vrai fichier de commande (`/EFA/CUSTOM ORDERS/127577-Rendering.glb`) (V). |
| 4 | Adiamor | Los Angeles (510 W 6th St, Suite 1200) | https://adiamor.com | https://adiamor.com/design-your-own/ring/ (puis https://adiamor.com/engagement-rings/search/) | oui (Choose a Setting / Choose a Diamond / Review Your Ring ; 272 montures) | aucun (200) | Constructeur classique et complet, prix barrés partout (monture R3099 14 k jaune 950 $) (V). Filtre « Lab grown diamonds selected » actif par défaut (V). « Made in Los Angeles », expédition annoncée sous 10 jours, retours 30 jours (V). |
| 5 | Mark Broumand | Los Angeles (628 1/2 South Hill Street) | https://www.markbroumand.com | https://www.markbroumand.com/collections/ring-builder | oui (monture, forme, métal, pierres de côté naturelles ou synthétiques) | aucun (Shopify, 200) | Monture « Setting Only (Made To Order) » à 2 295 $ en or 18 k « Champagne Yellow Gold », métal maison (V). Fabrication en interne, parcours à distance avec vidéos et rendus CAO, bouton « Request More Images/Videos » (V). |
| 6 | Nick Engel & Co. | San Francisco (4011 18th St.) | https://nickengel.com | https://nickengel.com/pages/custom-ring-builder | oui (JewelerOS : 4 étapes puis concepteur 3D) | partiel : concepteur 3D en échec dans notre navigateur (CORS) | Atelier du quartier Castro, depuis 2004 (V). Publie ses prix d'entrée : or 2 800 $ et plus, platine 3 100 $ et plus, argent 1 200 $ et plus (V). Ateliers « fabriquez vos alliances » à prix fixe (1 600 $ en semaine, plus la matière) (V). Diamants surtout recyclés ou canadiens (V). |
| 7 | Angelucci Jewelry | Whittier (13006 Philadelphia St, Suite 304) | https://angeluccijewelry.com | https://angeluccijewelry.com/pages/custom-ring-builder | oui (JewelerOS) | partiel : même échec 3D (I) | Ce que couvre le prix est écrit : Venezia 7 499 $ pour un centre synthétique de 1,00 ct H SI1 et 1,50 ct au total (V). Fabriquée à la commande, livrée en 2 à 3 semaines, accélération possible (V). « Since 1907 », vente à distance (texte, appel, courriel) (V). |
| 8 | Victor Canera | Los Angeles (631 South Olive Street, Suite 950) | https://victorcanera.com | https://victorcanera.com/us/engagement-rings ; sur mesure : https://victorcanera.com/us/design-request | non (fiches à options métal et taille ; formulaire de création, non rempli) | aucun (200) ; `/studio`, `/api/` interdits, non visités | Contre-positionnement : forgé à la main, « without the aid of casting », sans fichier CAO, donc pièce unique (V). Prix affichés : Elodie six griffes, platine, 1 995 $ (V). Fabrication à la commande dans l'atelier de Los Angeles (V). |
| 9 | Gold Empire Jewelry | Los Angeles (607 S Hill St, Suite 452) | https://goldempirejewelry.com | https://goldempirejewelry.com/pages/benchmark-ring-builder (alliances) ; sur mesure : https://goldempirejewelry.com/pages/custom-design | oui pour les alliances (configurateur Benchmark : profil, métaux, largeur, finitions, gravure ; 2 435 $ affichés) ; non pour les bagues de fiançailles | aucun (Shopify, 200) | Entreprise familiale depuis 1978 (V). Devis détaillé (dessin, matières, fabrication, délai), CAO puis cire, bague prête en « approximately two weeks » (V). Bagues synthétiques à prix affichés dès 399 $ (V). Configurateur d'alliances d'un fabricant tiers (Benchmark) (V). |
| 10 | Harold Stevens | San Diego (225 Broadway, Suite 1580) | https://www.haroldstevens.com | https://www.haroldstevens.com/collections/engagement-rings | non (catalogue à prix ; sur-mesure en boutique) | aucun (Shopify, 200) | Prix affichés en naturel et en synthétique, par exemple marquise synthétique 1,57 ct à 4 335 $, poire synthétique 2,10 ct à 4 885 $ (V). Sur mesure : rendu CAO, puis maquette imprimée en 3D que le client essaie, 3 à 4 semaines (V). |

## Détail par acteur

### 1. Apex Jewelry Design (Los Angeles)

- V : 607 S Hill Street, Suite 850, Los Angeles ; « Jewelry manufacturing experience since 1997 » ; fondateur Max Libarian, « bench training with computer-aided jewelry design », a fabriqué pour des détaillants (https://apexjewelrydesign.com/).
- V : promesse « One jeweler. No handoffs » ; « approve your design in interactive 3D before production begins ».
- V : https://apexjewelrydesign.com/interactive-3d/ : « Open the model on a phone, rotate it, zoom in, inspect every angle and compare preselected metal or stone colors before production ». La page intègre `https://jewelry3dview.online/?id=Z3p64HxtQdOFiNEv_Ru4dA`, une visionneuse iJewel3D. Ressources chargées : `releases.ijewel3d.com`, `static.webgi.xyz` ; aucun canevas affiché dans notre navigateur.
- V : https://apexjewelrydesign.com/shop/engagement-rings : 18 modèles, chacun avec un prix « As shown » et sa composition, par exemple « 14k yellow gold · approx. 1.5 ct D/VS1 lab-grown center », de 3 020 $ à 4 670 $.
- V : fiche https://apexjewelrydesign.com/shop/engagement-rings/marquise-cathedral-solitaire (rendue) :
  - prix : « Marquise Cathedral Solitaire, $3,086 As shown » ;
  - étape « 01 Metal » : 14 k blanc, jaune ou rose 1 936 $ ; 18 k 2 436 $ ; platine 2 586 $ ;
  - étape « 02 Center diamond » : synthétique ≈ 1,50 ct D VS1 + 1 150 $, moissanite + 650 $, ou monture seule ;
  - centre naturel : « begin custom sourcing with Max », paiement intégral avant fabrication ;
  - galerie : « Exact-item gallery · APX-ENG-SOL-002. Every image shown on this page belongs only to this design ».
- V : https://apexjewelrydesign.com/custom-engagement-ring-cost/ :
  - prix courants : « around $4,000 to $5,000 » avec un centre synthétique en 14 k ; le naturel « usually starts around $8,000 » ;
  - quatre facteurs de prix : pierre, métal, travail de sertissage, pierre ou or apportés par le client ;
  - délais : « The 3D design typically takes 1 to 2 business days », puis fabrication « in 7 to 10 business days » ;
  - paiement : « Half is due to start production and the rest when the ring is ready » ; mise à taille gratuite la première année.
- V : diamants naturels et synthétiques ; lien WhatsApp `wa.me/18184646077` (non ouvert).
- Intérêt : la même promesse que JR Diamond (le client voit en 3D le modèle qui sera fabriqué, le prix est expliqué), avec un délai plus court. Mais la 3D arrive après le devis, sur rendez-vous ou WhatsApp, pas dans un configurateur public. La fiche de la marquise est un point de comparaison direct pour ring-001 : 500 $ d'écart entre 14 et 18 k sur cette monture (V).

### 2. RockHer (Los Angeles)

- V : 607 S Hill St #801 (données structurées de la page) ; « Los Angeles Atelier · Since 1967 », « four generations in the diamond trade ».
- V : https://www.rockher.com/pages/design-your-own-engagement-ring :
  - « choose a certified diamond and a setting, and our designers model the ring around that diamond's measurements » ;
  - « made to order in our Los Angeles atelier in 8 to 12 business days » ;
  - « Over 200 designs » ;
  - prix : « The setting plus the diamond. Nothing added. A setting is $1,310 to $9,480 … There are no codes, no countdowns and no second number crossed out next to the first ».
- V : trois voies : en ligne (sans frais de dessin) ; d'après une photo envoyée au gemmologue (sans frais) ; création libre (« Bespoke Design Commission », 1 000 $ : esquisses, trois CAO, maquette en résine expédiée « to wear before we cast »).
- V : https://www.rockher.com/collections/build-an-engagement-ring : « Show 2932 Settings » ; retours sous 40 jours, une mise à taille offerte sous 60 jours, garantie à vie. Échantillon `products.json` : Agnes ovale 18 k 2 140 $, Eartha 18 k blanc 2 610 $, Florence platine 4 550 $.
- V : fiche Agnes (rendue) : « Setting only · 18K Yellow Gold. Your center diamond, natural or lab-grown, is chosen next » ; bouton « Try On » (essayage virtuel) ; « Drafted around your diamond and your finger, cast in solid gold or platinum ». Pas de vue 3D ni 360°.
- V : https://www.rockher.com/pages/how-we-make-your-ring-to-order : maquette en résine imprimée en 3D, fonte à cire perdue, « A new 3D model is created for your order … Nothing about your ring exists before you order it ».
- V : naturel gradué GIA, synthétique gradué IGI ; assistant « ROSI™ » (conversation automatisée, non ouverte).
- Intérêt : le discours de prix le plus proche de « prix expliqué » ; même délai que JR Diamond (8 à 12 jours ouvrés contre 14). Sans 3D.

### 3. deBebians (Los Angeles)

- V : 611 Wilshire Blvd #913, Los Angeles, CA 90017 (données structurées) ; « Since 2005 » ; « Crafted exclusively in Los Angeles », avec la réserve que les pierres ne sont ni extraites ni taillées à Los Angeles.
- V : https://debebians.com/collections/engagement-rings : montures à prix « From » (Classic Solitaire dès 1 073 $, Tulip 1 136 $, trois pierres poires 1 330 $).
- V : fiche Bezel Solitaire (rendue) : étapes « Choose a Setting / Choose a Center Stone » ; 1 444 $ ; 8 métaux dont « 14k Super White Gold (Recommended - No Rhodium Required) » et platine 950 ; « I have my own diamond » ; gravure + 40 $ ; « Ready to ship in 15 to 20 business days » ; « Complimentary Stone Setting ».
- V : https://debebians.com/pages/custom-made-engagement-rings :
  - parcours : devis gratuit sous 1 à 2 jours ouvrés, acompte, CAO, fabrication « 2 to 4-week » ;
  - « Once we finalize you CAD, we can generate an interactive 3D rendering and send it to you for your review » ;
  - visionneuse intégrée : `https://www.rendercreations.com/?path=…`, chemin décodé `/EFA/CUSTOM ORDERS/127577-Rendering.glb`, outil iJewel3D ; non affichée dans notre navigateur.
- V : spécialiste du synthétique, y compris de couleur (rose, bleu, vert, jaune).
- Intérêt : seul acteur lu qui montre publiquement un vrai fichier de commande en 3D. Le configurateur, lui, reste en photos.

### 4. Adiamor (Los Angeles)

- V : 510 W 6th St, Suite 1200, Los Angeles, CA 90014 ; « © 1999-2026 » ; « Made in Los Angeles · Free Shipping · 30-day Returns » ; « made for you in our Los Angeles manufacturing house ».
- V : https://adiamor.com/design-your-own/ring/ : « Design a custom diamond ring in 3 easy steps » ; départ par le diamant (« AGS & GIA certified ») ou par la monture.
- V : https://adiamor.com/engagement-rings/search/ (rendue) : « Choose a Setting / Choose a Diamond / Review Your Ring », « Lab grown diamonds selected », « Results 272 », prix barrés (3 140 $ → 2 355 $, 2 850 $ → 2 138 $…).
- V : fiche R3099 (rendue) : « $950 (Setting Only) », « Order now for shipment as early as Wednesday, November 25 », livraison offerte, Affirm.
- V : https://adiamor.com/custom-design-engagement-rings/ : sur mesure sur devis (formulaire non rempli).
- Intérêt : un constructeur standard, utile comme point de prix. Rien sur la fabrication montrée.

### 5. Mark Broumand (Los Angeles)

- V : 628 1/2 South Hill Street (données structurées) ; « We're proudly based in Los Angeles, but we ship securely across the U.S. and worldwide ».
- V : https://www.markbroumand.com/collections/ring-builder : « preview them with your favorite center diamond shape and metal color » ; « START BY CHOOSING A SETTING » ; diamants « GIA/IGI-certified natural or lab-grown » ; « Because we produce rings in-house, you avoid the layers of markups » ; parcours à distance : « detailed videos, CAD renders, at home try-on (when applicable) ».
- V : fiche Hidden Halo Solitaire (rendue) : 2 295 $, « 18K Champagne Yellow Gold », forme du diamant au choix, « DIAMOND TYPE: Natural / Lab Grown » pour les pierres de côté, « Setting Only (Made To Order) », « Request More Images/Videos ».
- V : livraison FedEx assurée offerte ; retour sous sept jours ; pièces sur mesure échangées en avoir.

### 6. Nick Engel & Co. (San Francisco)

- V : 4011 18th St., San Francisco, CA 94114 ; atelier du Castro, Nick Engel joaillier « since 2004 ».
- V : https://nickengel.com/pages/custom-engagement-rings : « Design your ring online in stunning 3D / Pick out your center stone in our San Francisco, CA showroom / Finalize & order » ; « ready for you in just a couple of weeks ».
- V : https://nickengel.com/pages/custom-ring-builder (rendue, quatre étapes actionnées) : « Step 1 of 4 … our 3D Ring Designer » ; ensuite « Something went wrong » (refus CORS de l'API JewelerOS).
- V : https://nickengel.com/pages/pricing-financing : « Our project buy-in depends on the metal you choose: Silver: $1,200+ / Gold: $2,800+ / Platinum: $3,100+ » ; atelier d'alliances 1 600 $ en semaine, 1 850 $ le week-end, plus la matière selon une grille publiée par métal et largeur : 14 k de 495 $ (2 mm) à 1 055 $ (7 mm), 18 k de 630 $ à 1 460 $, platine de 545 $ à 1 215 $. La case 18 k 5 mm affiche 1 660 $, plus que 6 mm (S : erreur de saisie). Affirm pour le paiement en plusieurs fois.
- V : https://nickengel.com/pages/sustainability : « mostly repurposed (recycled) diamonds » ou diamants canadiens ; estimation du coût des matières après consultation.
- I : l'adresse `/pages/design-your-ring` (404) n'est pas celle du configurateur sur ce site.

### 7. Angelucci Jewelry (Whittier)

- V : 13006 Philadelphia St, Suite 304, Whittier ; « Since 1907 », « Design your ring from your house. Text/Call/Email ».
- V : https://angeluccijewelry.com/pages/custom-ring-builder (rendue) : JewelerOS, « Step 1 of 4 ».
- V : accueil : Venezia 7 499 $, « Center diamond: 1.00 ct round brilliant, H color, SI1 clarity, lab-grown », « Delivery: 2–3 weeks; expedited available » ; certificat, expertise et facture fournis.

### 8. Victor Canera (Los Angeles)

- V : salle d'exposition 631 South Olive Street, Suite 950, Los Angeles, CA 90014 (https://victorcanera.com/us/contact-us).
- V : https://victorcanera.com/us/education/jewelry/hand-forged : « Hand Fabricating … doesn't involve the use of wax, molds or casting » ; « there are no "rubber molds" or digital files in a CAD\CAM machine to replicate the work ».
- V : https://victorcanera.com/us/engagement-rings : prix affichés (995 $, 1 695 $, 4 295 $…) ; fiche Elodie, platine, 1 995 $, options métal et taille.
- V : https://victorcanera.com/us/design-request : « Every piece is made to order in our Los Angeles atelier » ; réponse sous un jour ouvré ; choix naturel ou synthétique dans le formulaire (non rempli).
- Intérêt : il vend l'inverse de JR Diamond, le refus du fichier numérique. Son argument « pièce unique, sans moule » pourra être opposé à la 3D issue du fichier de fabrication.

### 9. Gold Empire Jewelry (Los Angeles)

- V : 607 S Hill St, Suite 452, Los Angeles, CA 90014 ; « Family-Owned Since 1978 », dirigée par Johnny Kalo, gemmologue diplômé du GIA.
- V : https://goldempirejewelry.com/pages/custom-design : devis « covering design, materials, manufacturing, and timeline » ; « Design & CAD Approval », puis cire, fonte « by our Los Angeles partners », « approximately two weeks » ; sur-mesure non remboursable une fois lancé.
- V : https://goldempirejewelry.com/pages/benchmark-ring-builder (rendue) : cadre `customizer.benchmarkrings.com`, profil « Euro Dome Comfort Fit », métal du bord et du centre, largeur 6 mm, finitions et motifs, gravure, prix 2 435 $.
- V : bagues synthétiques « From $1,009 », « From $499 », « From $399 » sur l'accueil.

### 10. Harold Stevens (San Diego)

- V : 225 Broadway, Suite #1580, San Diego (données structurées) ; « Upstairs, secure and away from the chaos ».
- V : https://www.haroldstevens.com/collections/engagement-rings : prix affichés, du synthétique (émeraude 5,09 ct 7 845 $, coussin 3,02 ct 7 500 $, poire 2,97 ct 5 385 $, marquise 1,57 ct 4 335 $) au naturel (93 250 $).
- V : https://www.haroldstevens.com/pages/custom-jewelry : « CAD Renderings … use 3D printing to create a model of your piece, you can actually try on » ; « about 3 - 4 weeks » après validation du dessin.

## Hors classement (lus, moins pertinents)

- **Brax Jewelers** (Newport Beach, 3601 Jamboree Road Suite 15A ; Laguna Niguel, 32411 Golden Lantern St Suite D) : JewelerOS sur un site Punchmark, « Pick out your center stone in our Newport Beach or Laguna Niguel showroom » (V) ; « Brax Fine Jewelry since 2005 » (V) ; widget Turnstile dans le formulaire (V).
- **Monaco Jewelers** (San Juan Capistrano), **The King's Jewelers** (Walnut Creek, « Since 1915 » selon un extrait Parallel, I), **Geneva Watch & Jewelry** (Riverside), **Kim Los Angeles** (Los Angeles, 818 N Broadway selon un extrait Parallel, I) : même page JewelerOS « Design your ring online in stunning 3D » (V, références `jeweleros` dans le code).
- **Daniel's Jewelers** (chaîne régionale du sud de la Californie, I) : catalogue à prix (V) ; « Bespoke Custom Jewelry » avec « Computer 3D rendering » sous 24 à 48 heures et fabrication « in only 2-3 weeks from approval » (V).
- **Robbins Brothers** (chaîne régionale, magasin au 587 E Colorado Blvd selon les données structurées, V) : 1 164 bagues de créateurs à prix affichés (Tacori, Verragio, A.JAFFE) (V) ; « IN-HOUSE DESIGN STUDIO » en magasin (V) ; pas de configurateur.
- **Leo Hamel Fine Jewelers** (San Diego, 1851 San Diego Ave #130) : boutique en ligne à prix barrés (V) ; sur-mesure CAO puis cire, sur appel ou courriel (V).
- **Peter Norman** (Los Angeles, 11640 San Vicente Blvd) : sur-mesure fait main, à distance par photos et vidéos des pierres (V) ; fourchette « $3,000 and $25,000 » (I, extrait Parallel de l'accueil, absente du texte que nous avons lu).
- **Shreve & Co.** (trois boutiques à Palo Alto selon le site, V) : joaillier de luxe (Rolex) ; sur-mesure en cire ou sur ordinateur, en boutique (V).

## Écartés

- **The Jewelry Exchange** (Tustin) : **bloqué** (403, défi Cloudflare, V). I : chaîne présente dans plusieurs États.
- **The Diamond Guys** : salle de Sherman Oaks sur rendez-vous, siège à Scottsdale ; déjà classé dans l'inventaire de l'Arizona.
- **Gemist** (Los Angeles) : `gemist.co` redirige vers `gemist.io`, « FOR FINE JEWELRY BRANDS … Gemist embeds directly into your site » (V). C'est désormais un fournisseur de configurateurs pour joailliers, pas un vendeur aux particuliers. I : ancienne marque de vente directe avec constructeur 3D (Los Angeles Business Journal, CB Insights).
- **Ada Diamonds** : ancienne salle de San Francisco fermée, marque rachetée par Sasha Primak et installée à New York (I : JCK, PR Newswire, site d'Ada).
- **Brilliant Earth, VRAI, Ritani, Keyzar** et autres vendeurs nationaux : exclus par le périmètre, même avec un siège en Californie.

## Enseignements pour JR Diamond

- **Le quartier de la joaillerie de Los Angeles fait déjà « l'atelier en direct ».** Sept des dix acteurs classés sont à quelques rues les uns des autres. Quatre sont au 607 S Hill St ou à côté (Apex, RockHer, Gold Empire, Mark Broumand) ; Victor Canera, Adiamor et deBebians sont dans les rues voisines (V). Tous disent fabriquer sur place. Le discours « Bourse du diamant de Ramat Gan » aura en face, aux États-Unis, le « Los Angeles Jewelry District ».
- **La 3D issue du fichier de fabrication existe, mais après la commande.** Apex et deBebians envoient au client une 3D interactive de sa CAO pour validation, avec iJewel3D (V). Aucun des deux ne la met dans un configurateur public. Les configurateurs 3D publics (JewelerOS) sont des modèles paramétriques. Le configurateur JR Diamond, qui montre dès le départ le modèle de fabrication, reste un argument libre.
- **Prix expliqué.** Trois façons de faire :
  - Apex décompose monture par métal et pierre centrale, et donne l'écart 14 k / 18 k (500 $ sur la marquise) (V) ;
  - RockHer additionne monture et diamant, « Nothing added » (V) ;
  - Nick Engel publie un prix d'entrée par métal (V).
  C'est le niveau de clarté à viser pour le prix « à partir de ».
- **Délais.** Apex : 7 à 10 jours ouvrés après la 3D. RockHer : 8 à 12 jours ouvrés. Gold Empire : « approximately two weeks ». Angelucci, Daniel's : 2 à 3 semaines. deBebians : 15 à 20 jours ouvrés. Harold Stevens : 3 à 4 semaines (V). Les 14 jours ouvrés de JR Diamond sont dans la moyenne, derrière les deux plus rapides.
- **Synthétique.** Il est souvent le choix par défaut : centre synthétique sur toutes les fiches d'Apex (V), filtre « Lab grown diamonds selected » actif chez Adiamor (V). RockHer applique la règle de JR Diamond : naturel GIA, synthétique IGI (V). Le terme employé est « lab-grown » (V).
- **Maquette avant fonte.** RockHer (résine, création libre) et Harold Stevens (impression 3D) font essayer une maquette avant la fonte (V). Victor Canera vend l'inverse : forgé à la main, sans fichier ni moule (V).
- **Paiement.** Apex demande la moitié au lancement et le solde à la fin, sauf pour un centre naturel, payé en entier avant fabrication (V). C'est un repère pour le parcours devis → prix confirmé → lien de paiement.
- **Prestataires.** JewelerOS équipe sept joailliers californiens (Nick Engel, Brax, Angelucci, Monaco, King's, Geneva, Kim) avec la même page et la même promesse « a couple of weeks » (V). Les autres outils vus : iJewel3D et WebGi (Apex, deBebians), le configurateur d'alliances Benchmark (Gold Empire), Gemist, vendu comme service aux joailliers (V).

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire ; robots.txt lu pour chaque domaine avant toute page) :

- Apex Jewelry Design : https://apexjewelrydesign.com/robots.txt, https://apexjewelrydesign.com/, https://apexjewelrydesign.com/engagement-rings/, https://apexjewelrydesign.com/interactive-3d/, https://apexjewelrydesign.com/custom-jewelry/, https://apexjewelrydesign.com/custom-engagement-ring-cost/, https://apexjewelrydesign.com/shop/engagement-rings (curl et rendu), https://apexjewelrydesign.com/shop/engagement-rings/marquise-cathedral-solitaire (rendu) ; visionneuse https://jewelry3dview.online/?id=Z3p64HxtQdOFiNEv_Ru4dA (rendu ; robots.txt sans règles, page d'application)
- RockHer : https://www.rockher.com/robots.txt, https://www.rockher.com/, https://www.rockher.com/pages/design-your-own-engagement-ring, https://www.rockher.com/collections/build-an-engagement-ring, https://www.rockher.com/collections/build-an-engagement-ring/products.json?limit=3, https://www.rockher.com/pages/custom-engagement-rings, https://www.rockher.com/pages/contact, https://www.rockher.com/pages/how-we-make-your-ring-to-order, https://www.rockher.com/pages/ringbuilder, https://www.rockher.com/products/agnes-oval-bezel-solitaire-engagement-ring-setting-in-18k-yellow-gold (rendu)
- deBebians : https://debebians.com/robots.txt, https://debebians.com/, https://debebians.com/pages/custom-made-engagement-rings, https://debebians.com/collections/engagement-rings, https://debebians.com/products/bezel-solitaire-engagement-ring (rendu) ; visionneuse https://www.rendercreations.com/?path=L0VGQS9DVVNUT00gT1JERVJTLzEyNzU3Ny1SZW5kZXJpbmcuZ2xi (rendu)
- Adiamor : https://adiamor.com/robots.txt, https://adiamor.com/, https://adiamor.com/design-your-own/ring/, https://adiamor.com/custom-design-engagement-rings/, https://adiamor.com/engagement-rings/search/ (curl et rendu), https://adiamor.com/engagement-rings/solitaire/the-perfect-solitaire-engagement-ring-setting/r3099?sku=R3099-YG14-Round&rfr=search&nav=rings (rendu)
- Mark Broumand : https://www.markbroumand.com/robots.txt, https://www.markbroumand.com/, https://www.markbroumand.com/collections/ring-builder (curl et rendu), https://www.markbroumand.com/pages/custom-designed-jewelry, https://www.markbroumand.com/products/hidden-halo-solitaire (rendu)
- Nick Engel & Co. : https://nickengel.com/robots.txt, https://nickengel.com/, https://nickengel.com/pages/custom-engagement-rings, https://nickengel.com/pages/design-your-ring (404), https://nickengel.com/pages/custom-ring-builder (curl et rendu, quatre étapes actionnées), https://nickengel.com/pages/pricing-financing, https://nickengel.com/pages/sustainability
- Angelucci Jewelry : https://angeluccijewelry.com/robots.txt, https://angeluccijewelry.com/, https://angeluccijewelry.com/pages/custom-ring-builder (curl et rendu), https://angeluccijewelry.com/pages/custom-engagement-rings
- Victor Canera : https://victorcanera.com/robots.txt, https://victorcanera.com/us (redirection de l'accueil), https://victorcanera.com/us/engagement-rings, https://victorcanera.com/us/design-request, https://victorcanera.com/us/contact-us, https://victorcanera.com/us/education/jewelry/hand-forged, https://victorcanera.com/us/products/elodie-lotus-six-prong-ring?v_id=variant_01KR7FKC460Z2YAYZ4B5ZJWH0S (rendu)
- Gold Empire Jewelry : https://goldempirejewelry.com/robots.txt, https://goldempirejewelry.com/, https://goldempirejewelry.com/pages/benchmark-ring-builder (curl et rendu, cadre customizer.benchmarkrings.com), https://goldempirejewelry.com/pages/custom-design
- Harold Stevens : https://www.haroldstevens.com/robots.txt, https://www.haroldstevens.com/, https://www.haroldstevens.com/collections/engagement-rings, https://www.haroldstevens.com/pages/custom-jewelry
- Hors classement : https://www.braxjewelers.com/robots.txt, https://www.braxjewelers.com/, https://www.braxjewelers.com/pages/custom-engagement-rings-2, https://www.braxjewelers.com/pages/custom-ring-builder (rendu) ; https://www.monacojewelers.com/robots.txt, https://www.monacojewelers.com/pages/custom-engagement-rings ; https://www.thekingsjewelers.com/robots.txt, https://www.thekingsjewelers.com/page/custom-engagement-rings.html ; https://www.genevajewelry.com/robots.txt, https://www.genevajewelry.com/pages/custom-engagement-rings ; https://kimlosangeles.com/robots.txt, https://kimlosangeles.com/pages/custom-engagement-rings ; https://www.danielsjewelers.com/robots.txt, https://www.danielsjewelers.com/, https://www.danielsjewelers.com/pages/bespoke-custom-jewelry ; https://www.robbinsbrothers.com/robots.txt, https://www.robbinsbrothers.com/, https://www.robbinsbrothers.com/shop/engagement-rings ; https://www.leohamel.com/robots.txt, https://www.leohamel.com/, https://www.leohamel.com/custom-design-jewelry/ ; https://peternorman.com/robots.txt, https://peternorman.com/, https://peternorman.com/custom-engagement-ring-design/ ; https://shreve.com/robots.txt, https://shreve.com/, https://shreve.com/pages/custom-jewelry-design
- Écartés : https://www.jewelryexchange.com/robots.txt (404), https://www.jewelryexchange.com/ (403, défi Cloudflare) ; https://www.gemist.co/robots.txt, https://www.gemist.co/ (→ https://gemist.io/)

Extraits d'index de recherche (Parallel Search, recherche web), utilisés pour les faits marqués I et pour trouver les candidats :

- https://www.thekingsjewelers.com/page/custom-engagement-rings.html (« Since 1915 »), https://kimlosangeles.com/pages/custom-engagement-rings (adresse 818 N Broadway)
- https://peternorman.com/ (fourchette de 3 000 à 25 000 $)
- https://labusinessjournal.com/featured/gemist-lands-6-million-round/, http://cbinsights.com/company/gemist (Gemist, Los Angeles)
- https://www.jckonline.com/editorial-article/ada-diamonds-sasha-primak, https://www.prnewswire.com/news-releases/sasha-primak-acquires-ada-diamonds-brand-enhancing-legacy-of-excellence-in-lab-grown-diamond-jewelry-302435209.html, https://www.adadiamonds.com/ (Ada Diamonds à New York)
- Repérage : https://www.emersonfinejewelry.com/pages/custom-engagement-rings-in-redlands-ca, https://www.revediamonds.com/us/custom-engagement-rings-los-angeles (vendeur en ligne, non retenu)
