# Inventaire des joailliers : Iowa

Recensement du 15 novembre 2026, fait pour l'étude de concurrence de JR Diamond (marché des États-Unis). Lecture seule, comme un visiteur : aucun formulaire rempli ou envoyé, aucun compte créé, aucune conversation ouverte, aucun panier. Pour chaque site, le robots.txt a été lu (curl) avant toute lecture de page. Les pages ont été lues par curl (identité curl par défaut, sans en-tête de navigateur), à raison d'une page toutes les 2 secondes au plus par site. Les configurateurs chargés en JavaScript n'ont pas été actionnés : ce qui en est dit vient du code source des pages et des textes qui les présentent.

Recherche des candidats : WebSearch et Parallel Search (requêtes génériques par ville). Firecrawl n'avait plus de crédits ce jour-là et n'a rien renvoyé.

Légende : **V** = vérifié (page lue, adresse en source) ; **I** = inféré (déduit d'une page lue ou d'un extrait de moteur de recherche) ; **S** = supposé.

Exclus d'office, comme le demande la consigne : vendeurs nationaux en ligne, chaînes nationales (Kay, Zales, Helzberg, Jared…), grands magasins et grandes maisons.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Alloy Custom Jewelers | Cedar Falls | https://alloycustomjewelers.com/ | https://alloycustomjewelers.com/pages/ring-studio (3D : https://alloycustomjewelers.com/pages/custom-ring-builder) | oui | non (la page du Ring Studio porte `noindex`, ce qui ne gêne pas la lecture) | Le concurrent le plus proche de JR Diamond dans l'État. Atelier qui fabrique tout sur place et a écrit son propre configurateur « Ring Studio: Build & Price » : monture, forme, taille, métal, vraie pierre certifiée, prix exact, délai annoncé, paiement en ligne. Second outil 3D en marque blanche, constructeur d'alliances 3D, synthétique en tête, FAQ et méthode très transparentes (V). |
| 2 | Doland Jewelers | Dubuque et Davenport | https://dolandjewelers.com/ | https://dolandjewelers.com/pages/design-your-ring (parcours monture → pierre : https://dolandjewelers.com/apps/ring-creator/rb-setting-list?jewelry_type=ring&view_type=grid) | oui | non | Deux configurateurs : dessin 3D en marque blanche (JewelerOS de StoneAlgo) et parcours en 3 étapes avec filtre de budget. Orfèvres sur place, « rather than something we order from a catalog ». Boutique avec prix (V). |
| 3 | Siebke Hoyt Jewelers | Cedar Rapids | https://www.siebkehoyt.com/ | https://www.siebkehoyt.com/pages/custom-ring-builder | oui | non | Dessin 3D JewelerOS, recherche de diamants GemFind, bagues en diamant synthétique « from $999 », livraison offerte et retour sous 10 jours. La monture est ajustée aux cotes exactes de la pierre choisie (V). |
| 4 | James Martin Jewelers | Dubuque | https://jamesmartinjewelers.com/ | https://jamesmartinjewelers.com/pages/design-your-ring | oui | non | Dessin 3D JewelerOS et listes de diamants naturels ou synthétiques par forme (application « ring-creator »). Prix affichés, orfèvres sur place (V). |
| 5 | Herteen & Stocker Jewelers | Iowa City | https://herteenandstockerjewelers.com/ | https://herteenandstockerjewelers.com/ring-builder/ (I) | oui (I) | **oui** : le robots.txt (géré par Cloudflare) interdit ClaudeBot, anthropic-ai, Claude-Web, GPTBot et d'autres robots d'IA ; aucune page lue | Dessin 3D en temps réel, constructeur d'alliances (naturel ou synthétique), stock de bagues en diamant synthétique avec prix (2 375 $ à 6 600 $ dans l'extrait) (I, extraits de moteur de recherche). |
| 6 | Josephs Jewelers | West Des Moines | https://www.josephsjewelers.com/ | https://www.josephsjewelers.com/create-your-ring (I) | oui (I) | **oui** : même robots.txt Cloudflare (ClaudeBot, anthropic-ai, Claude-Web interdits) ; aucune page lue | Maison de 1871, la référence de Des Moines. Parcours « Create Your Ring » en 3 étapes sur 522 montures avec prix, 706 bagues de fiançailles au catalogue, sept orfèvres d'atelier, expédition assurée (I, extraits de moteur de recherche). |
| 7 | Nelson Jewelry | Spencer | https://www.nelsonjewelry.com/ | https://www.nelsonjewelry.com/ringsettings | oui | non (`Crawl-delay: 2` ; les adresses en `?kw=` sont interdites, donc la recherche de diamants filtrée n'a pas été lue) | Parcours en 3 étapes (monture, diamant, bague complète) avec départ par la pierre ou par la bague, diamants naturels et synthétiques. Sur-mesure avec rendu 3D ou cire « view every angle » (V). |
| 8 | Rosalee Jewelry | Davenport | https://rosaleejewelry.com/ | https://rosaleejewelry.com/pages/custom-jewelry-design | non | non | Studio de création sur rendez-vous, spécialisé dans le diamant synthétique. Prix plancher affiché (« starting at $2500 »), méthode en 6 étapes avec CAO, délai de 5 à 8 semaines, travail à distance et envoi FedEx offert (V). |
| 9 | Greenberg's Jewelers | Sioux City (7 magasins : Iowa, Nebraska, Dakota du Sud) | https://www.greenbergsjewelers.com/ | https://www.greenbergsjewelers.com/design-your-ring/ | oui | non (le robots.txt accueille nommément ClaudeBot et Claude-User ; la page du configurateur porte `noindex, nofollow, noarchive`) | Marque régionale familiale née à Sioux City en 1900. Configurateur en marque blanche Caratwise. Diamants achetés « direct from the cutters in Belgium » (V). |
| 10 | Ginsberg Jewelers | Cedar Rapids | https://www.ginsbergjewelers.com/ | https://www.ginsbergjewelers.com/ringbuilder/settings/ | oui | non | Constructeurs de bague et de puces d'oreilles GemFind. A quitté sa boutique pour un bureau sur rendez-vous : conseil « in person, by phone or on Zoom » (V). |

## Détail par acteur

### 1. Alloy Custom Jewelers (Cedar Falls)
- **V** Adresse : 314 Brandilynn Blvd, Cedar Falls, IA 50613 ; du lundi au vendredi, 10 h à 17 h ; téléphone 319-290-6116 (pied de la page `/pages/ring-studio`). Studio fondé et dirigé par le créateur Aram Susong (`/pages/custom-engagement-rings`).
- **V** Page d'accueil : « Three Ways to Your Ring. Every ring is made in our studio. » Trois voies, chacune avec son délai : « Choose » (une bague de la collection et un diamant au choix, 1 à 3 semaines), « Build » (assemblage pièce par pièce, vu en 3D, 3 à 4 semaines), « Create » (pièce unique, « See renders and a 3D model before we make it », 4 à 6 semaines). Prix des montures : « Starting at $675 » à « Starting at $1,425 », avec la mention « Center diamond selected separately ». Vidéo de l'équipe (« The people who make your ring », 0:52) et rubrique « Made Here, Made for Them ».
- **V** Quatre outils au menu : « Ring Studio: Build & Price » (`/pages/ring-studio`), « 3D Ring Builder » (`/pages/custom-ring-builder`), « Band Builder » (`/pages/band-builder`), « Family Ring Builder » (`/products/family`).
- **V** Le Ring Studio est un outil maison. Le code de la page le montre : un script propre (`ring-studio-v2.js`), des fichiers de prix par forme de pierre, un catalogue de bagues, et des points d'accès hébergés sur Vercel (`nivoda-proxy-nu.vercel.app/api/ring-diamonds`, `…/ring-concept`, `…/design-request`). Ces points d'accès n'ont pas été appelés.
- **V** Étapes lues dans le script : « Choose your setting », « Choose your diamond shape », « Choose your diamond size » (« Prices are for the setting at that size »), « Choose your metal » (« Tap a metal to see your ring in it »), « Choose your diamond » (« Every one is certified and measured to fit »), « Choose your finger size » (« Finger size: a little more metal »). Message d'attente : « Choose your setting and diamond to see your exact price ». Le récapitulatif sépare « Setting price » et « Diamond price ».
- **V** Diamants : la page embarque 199 pierres du stock de l'atelier, marquées « In our studio now ». Toutes sont synthétiques (195 notées IGI, 2 GIA, 2 GCAL), de 413 $ (0,75 ct coussin F VS1) à 6 053 $. Le script prévoit aussi des pierres latérales « Lab-grown » ou « Natural ».
- **I** Le reste des pierres vient du grossiste Nivoda (nom du point d'accès).
- **V** Commande : « Made for you · made to order », délai réglé à 26 jours dans la configuration (`leadDays: 26`). Avant le paiement, une case à cocher : « I understand this ring is made for me and is final sale. Defects are covered by the 5-year Alloy warranty. » Si le client demande une modification, le prix devient « quote needed ». Fonctions « Save your ring », « Text me my ring » et envoi par e-mail.
- **V** Fonction « Sketch my idea » : le client envoie une photo d'inspiration et reçoit un croquis d'idée. Mentions : « Alloy may use AI tools (currently Google Gemini)… Sketches are concepts, not final designs or prices » ; « My photos are reference and inspiration only ».
- **V** Le « 3D Ring Builder » est le module en marque blanche JewelerOS de StoneAlgo (script `jeweleros.com/…/partner_config.js`, identifiant de boutique dans la page). Le « Band Builder » se décrit ainsi : « Design your own wedding band in 3D: the metal, the shape and width, the finish, a personal pattern and the engraving inside ».
- **V** Page de méthode `/pages/alloy-custom`, 5 étapes : consultation d'une heure « in our Cedar Falls studio or online », choix de la pierre (« Lab-grown or natural · Certified diamonds »), « Renderings + a 3D printed model » à essayer (« Nothing is made until you approve the design and the price »), fabrication (« Pay in full securely online… cast, set, and finished by hand in our Cedar Falls studio », 3 à 4 semaines), remise. Promesses : « Designed In-House », « Prototyped In-House », « Cast & Set In-House », « Transparent pricing. No surprises ».
- **V** FAQ (`/pages/faq`) : « Our prices follow the gold, platinum and diamond markets. The price at checkout is the price you pay. » Pièces sur commande : vente ferme ; pièces en stock : retour sous 30 jours. Garantie de 5 ans, à condition d'un contrôle gratuit tous les six mois. Première mise à taille offerte (une taille en plus ou en moins). Or blanc « white all the way through », sans rhodiage. Certificat (IGI ou GIA) pour les « larger center diamonds ». Estimation pour l'assurance fournie.
- **I** Sur les pages lues, rien ne dit que la 3D vient du fichier de fabrication ; les pierres du stock portent une photo, et aucune vidéo de pierre n'a été vue. La promesse de JR Diamond (« ce que vous voyez existe ») reste donc distincte. Tout le reste (prix expliqué, atelier, délai, synthétique) est déjà là. Les fiches produit et la page des réalisations n'ont pas été lues : à vérifier à l'audit.

### 2. Doland Jewelers (Dubuque et Davenport)
- **V** Adresses : 1735 J.F.K. Rd, Dubuque, IA 52002 et 3865 Elmore Ave, Davenport, IA 52807. « family-owned jeweler since 1986 ». Page d'accueil : « custom pieces are designed and created on-site… trained goldsmiths and watchmakers », diplômés du GIA dans l'équipe.
- **V** `/pages/design-your-ring` charge le module JewelerOS (script `jeweleros.com/static/dist/jos.js`, identifiant de boutique). Le contenu 3D se charge en JavaScript et n'a pas été actionné.
- **V** `/pages/custom-engagement-rings` : « Design your ring online in stunning 3D », puis « Pick out your center stone in our Dubuque & Davenport, IA showrooms », puis « Finalize & order your ring with our expert team ». Délai : « ready for you in just a couple of weeks ». Argument : « our goldsmiths do custom work in-house… rather than something we order from a catalog ».
- **V** Second outil, `/apps/ring-creator/rb-setting-list` : « Ring Builder » en 3 étapes (« Choose Setting », « Choose Stone », « Review Complete Ring »). Filtres : 7 styles, or 14K et 18K (rose, blanc, jaune), platine, « Budget », forme de pierre. Tri « Lowest Budget / Highest Budget ».
- **I** Les montures de cette liste portent un prix (filtre et tri par budget) ; la liste se charge en JavaScript et les prix n'ont pas été lus.
- **V** Boutique Shopify avec prix en page d'accueil (alliance en or jaune 14K à 1 095 $, pendentif solitaire en diamant synthétique à 1 999 $).

### 3. Siebke Hoyt Jewelers (Cedar Rapids)
- **V** Adresse : 4800 1st Ave NE, Cedar Rapids, IA 52402. « Founded in 1889 ».
- **V** `/pages/custom-ring-builder` charge JewelerOS (script `partner_config.js`, image d'aperçu hébergée chez StoneAlgo).
- **V** `/pages/custom-engagement-rings-in-cedar-rapids` : dessin en ligne, choix de la pierre en boutique, finalisation. « Design your dream ring online and our team can pull it up in-store… Once you pick out your diamond center stone, we'll tweak the design so the prongs will perfectly hold your diamond based on its exact dimensions. »
- **V** Menu : « Loose Diamonds » (`/apps/diamondtools`, « Powered By GemFind ») et « Ring Builder » (`/apps/ringbuilder/settings`, qui a répondu 404 à curl le 15/11).
- **V** Bandeau : « Free 10-Day Returns » ; « FREE Shipping! Purchases over $100 - FREE Expedited Shipping for purchases over $1000 ».
- **V** `/collections/lab-grown` : « Lab grown engagement rings at Siebke Hoyt start at just $999 ».

### 4. James Martin Jewelers (Dubuque)
- **V** Adresse : 4340 Asbury Rd Ste 1, Dubuque, IA 52002. « serving the Dubuque area since 1983 », « On-Site Jewelers ».
- **V** `/pages/design-your-ring` charge JewelerOS. `/pages/custom-engagement-rings` reprend le texte en 3 étapes de Doland et annonce « a couple of weeks ».
- **V** La page d'accueil renvoie à des listes de diamants par forme et par origine (`/apps/ring-creator/rb-stone-list?…diamond_type=labgrown…` et `…natural…` : poire, ovale, émeraude, rond, coussin) et à « Find a diamond ». Texte : « Choose from natural or lab-grown diamonds—all at competitive prices with lifetime warranty ».
- **V** Prix affichés sur les produits de la page d'accueil (montures de 1 549 $ à 4 849 $).

### 5. Herteen & Stocker Jewelers (Iowa City) : bloqué
- **V** `https://herteenandstockerjewelers.com/robots.txt` répond 200. Il est géré par Cloudflare : `Content-Signal: search=yes,ai-train=no,use=reference` et `Disallow: /` pour ClaudeBot, anthropic-ai, Claude-Web, GPTBot, CCBot et d'autres. Aucune page du site n'a été lue, comme pour les cas semblables des autres États.
- **I** D'après les extraits de Parallel Search du 15/11/2026 : 101 S Dubuque St, Iowa City, IA 52240 ; maison familiale ouverte en 1947 ; un orfèvre d'atelier dans la famille.
- **I** Page d'accueil : « With our 3D ring designer, choose your setting, select your center stone by shape, cut, carat, and quality, and pick your metal, watching your ring come to life in real time ». « Custom Band Builder » : 9 formes, « Halfway, 3/4, Eternity », « Earth Mined and Lab Grown », platine et or.
- **I** `/ring-builder/` : « Choose your setting, select your diamond or gemstone ». `/custom-engagement-rings` reprend le texte en 3 étapes des sites JewelerOS, ce qui désigne le même module.
- **I** Stock de bagues en diamant synthétique avec prix et bouton « Add to cart » : 1,10 ct émeraude à 2 375 $, 2,01 ct marquise à 2 800 $, 2,00 ct ovale à 6 600 $. Retour sous 30 jours ; « free local delivery ».

### 6. Josephs Jewelers (West Des Moines) : bloqué
- **V** `https://josephsjewelers.com/robots.txt` répond 200, avec les mêmes règles Cloudflare que Herteen & Stocker. Aucune page du site n'a été lue.
- **I** D'après les extraits de Parallel Search du 15/11/2026 : 5425 Mills Civic Parkway, West Des Moines, IA 50266 ; « Since 1871 » ; entreprise familiale.
- **I** `/create-your-ring` : « 1 Choose Your Setting, 2 Choose Your Diamond, 3 Complete Your Ring », 522 montures avec prix (Simon G. à 3 960 $, Sylvie à 3 485 $, monture maison à 2 100 $), or 14K et 18K. `/engagement-rings` : 706 articles avec prix et disponibilité (« IN STOCK », « SPECIAL ORDER »), platine dans les filtres. `/rings` : filtre « Lab-Grown Diamond ».
- **I** `/custom-design` : « Our seven bench jewelers ». Expédition : préparation en 1 à 2 jours ouvrés, assurance comprise, signature dès 500 $, États-Unis seulement. Retour sous 30 jours, sauf commandes spéciales.

### 7. Nelson Jewelry (Spencer)
- **V** Adresse : 409 Grand Ave, Spencer, IA 51301. « Serving Spencer and the Great Lakes Region since 1928 », quatrième génération.
- **V** `/ringsettings` : « 1 Choose Setting », « 2 Choose Diamond », « 3 Complete Ring ». Site Punchmark. Page d'accueil : « Start with the Diamond / Start with the Ring » ; menus « Natural Diamonds » et « Lab Grown Diamonds ».
- **V** `/pages/custom-jewelry` : consultation, puis « Using advanced CAD technology, we create a precise 3D rendering or wax model… You can view every angle », puis fabrication. « Browse thousands of certified loose diamonds and pair them with your favorite setting styles ».
- **I** Les montures et leurs prix se chargent en JavaScript et n'ont pas été lus.

### 8. Rosalee Jewelry (Davenport)
- **V** « Design Studio in Downtown Davenport », sur rendez-vous seulement, sept jours sur sept. L'adresse postale ne figure pas sur les pages lues.
- **V** Bandeau : « CUSTOM ENGAGEMENT RINGS - STARTING AT $2500 ». `/collections/engagement-rings` : bagues déjà faites de 1 199 $ à 5 500 $, une mise à taille offerte.
- **V** `/pages/custom-jewelry-design` : prise de rendez-vous, consultation avec la créatrice, modèle CAO (« This enables you to see the final product before it is made »), choix des pierres (« Diamonds, Lab Diamonds, Moissanites, Sapphires »), fabrication (« cast, set, polished… about 5-8 weeks »), remise. À distance : « If you are from out of town and we worked virtually we will ship the completed piece at no charge via FedEx ». Garantie de façon de 2 ans.
- **V** Positionnement : « we specialize in creating lab diamond engagement rings » ; « Unlike many other jewelry stores that… assemble your ring from semi-mounts and pre-set diamonds, we take a different approach ».
- **V** Boutons : « BOOK NOW » (calendrier Calendly) et « TEXT NOW » ; aucun n'a été actionné.

### 9. Greenberg's Jewelers (Sioux City et six autres magasins)
- **V** Magasins : Sioux City, West Des Moines (deux), Iowa City (Coral Ridge Mall), Ankeny, Sioux Falls (Dakota du Sud), Omaha (Nebraska). `/company/about-us/` : « In 1900, Jacob Greenberg opened the first Greenberg's store in Sioux City, Iowa » ; « the largest family-owned jewelry chain in Iowa, with seven locations » ; « purchasing our diamonds in large quantities direct from the cutters in Belgium ».
- **V** `/design-your-ring/` charge le module Caratwise (`release.caratwise.com`). Méta `robots: noindex, nofollow, noarchive`. Le contenu se charge en JavaScript.
- **I** Le même module, lu chez deux joailliers du Nebraska, affiche des prix « Starting at » : c'est probable ici aussi.
- **V** `/services/custom-design/` : modèle en cire ou en CAO, « multi-angled renderings… sent for you to approve ».
- **V** Le robots.txt range GPTBot, ClaudeBot, Claude-User et PerplexityBot sous « AI SEARCH & ANSWER ENGINES » avec `Allow: /`.

### 10. Ginsberg Jewelers (Cedar Rapids)
- **V** Page d'accueil : « We moved from our Storefront to Appointment-based office with full jewelry concierge service! Let's meet... in person, by phone or on Zoom! ». Téléphone (319) 363-3563.
- **V** `/ringbuilder/settings/` (« Create Your Own Diamond Ring ») et `/stud-builder/` : conteneur GemFind (`gemfind-app-wrapper`). Le contenu se charge en JavaScript et n'a pas été lu. Site WordPress « Designed, and Developed, by GemFind ».
- **V** `/custom-design/` : or blanc, jaune, rose et platine.

## Non retenus dans les dix

- **Windmill Park Jewelers** (Orange City, 112 2nd Street NW) : https://windmillparkjewelers.com/pages/custom-ring-builder. Module JewelerOS, « Where Northwest Iowa Gets Engaged », bagues de 750 $ à 3 395 $ en page d'accueil (V). Sixième site avec le même module, sans contenu propre en plus.
- **Becker's Jewelers** (West Burlington et Mt. Pleasant) : https://www.beckerdiamonds.com/pages/design-your-ring. Module JewelerOS sur un site Punchmark, « Since opening our doors in 1946 » (V).
- **Gunderson's Jewelers** (siège à Sioux City, 4830 Sergeant Road ; magasins dans cinq États) : https://gundersons.com/collections/engagement-rings et https://gundersons.com/pages/diamond-search. Bagues de fiançailles avec prix (par exemple 2 195 $), livraison express offerte aux États-Unis (V). Fondé à Sioux City en 1945, « one of the largest independent jewelers in the Midwest », remboursement de la différence sous 30 jours sur un diamant naturel (I, extraits de moteur de recherche). Maison de luxe (Rolex), pas de configurateur de bague trouvé.
- **My Jeweler** (Sioux City) : https://myjeweler.biz/pages/custom-design. Sur-mesure à distance (« via email, phone, or in-person »), « 3D CAD renderings… from every angle », retrait à Sioux City ou envoi assuré ; bagues de 1 830 $ à 4 560 $ en page d'accueil (V).
- **Facets by Susong** (Waterloo, 201 E Tower Park Dr) : https://www.facetsbysusong.com/. « All engagement rings at Facets are made custom » (V). Pas de configurateur.
- **Philip's Diamond Shop** (Marion, 1317 7th Ave) : https://www.philipsdiamonds.com/. Collection de modèles nommés à personnaliser, fabrication sur place (V).
- **Diamond Leaf Jewelers** (Coralville, 570 1st Ave) : https://www.diamondleafjewelers.com/. Méthode en étapes : CAO, résine imprimée en 3D sur place, fonte ou fabrication à la main (V).
- **McCoy Jewelers** (Dubuque, 261 Main St) : https://www.mccoyjeweler.com/. Trois façons d'acheter (« Ready-to-Propose », « Design Your Way », « Crafted Just for you »), naturel et synthétique (V).
- **Necker's Jewelers** (DeWitt et Davenport) : https://neckersjewelers.com/. Catalogue de marques avec prix (V).
- **Iowa Diamond** (West Des Moines), **M.C. Ginsberg** et **Hands Jewelers** (Iowa City) : sites vitrines, sur-mesure en boutique, pas d'outil en ligne (V, pages d'accueil).
- Ateliers de la région de Des Moines sans outil en ligne : Owen Jewelry Design, Artisans Jewelry Designs, AdornDSM, Fiscus Diamond Jewelers et Dave's Jewelry à Ankeny (I, extraits de moteur de recherche).
- **Écarté** : Venazia. Ses pages « near Des Moines, IA » sont des pages de référencement local d'un vendeur en ligne sans établissement dans l'État (I).

## Ce que l'Iowa apprend à JR Diamond

- **V** Six sites lus chargent le même module 3D, JewelerOS de StoneAlgo : Alloy, Doland, Siebke Hoyt, James Martin, Windmill Park, Becker's. **I** Herteen & Stocker sans doute aussi. La 3D est donc devenue un produit de série. Les textes de ces sites décrivent le même parcours : dessin en ligne, puis choix de la pierre et commande en boutique.
- **I** Alloy est le seul à aller jusqu'au prix exact et au paiement en ligne, avec un outil qu'il a écrit lui-même. Ses points forts à comparer à ceux de JR Diamond : prix séparés monture et pierre, délai daté, vente ferme assumée par une case à cocher, garantie de 5 ans, FAQ qui explique pourquoi les prix bougent.
- **I** Sur les pages lues, aucun site ne relie la 3D au fichier de fabrication, et aucune vidéo de pierre ou de fabrication d'une commande n'apparaît. Les fiches produit n'ont pas été lues : à confirmer à l'audit.
- **V** Délais annoncés : « a couple of weeks » (Doland, James Martin, Windmill Park), 3 à 4 semaines (Alloy), 5 à 8 semaines (Rosalee). **I** Les 14 jours ouvrés de JR Diamond sont dans le bas de cette fourchette.

## Sources

Toutes consultées le 15 novembre 2026.

Alloy Custom Jewelers
- https://alloycustomjewelers.com/robots.txt
- https://alloycustomjewelers.com/
- https://alloycustomjewelers.com/pages/ring-studio
- https://alloycustomjewelers.com/cdn/shop/t/109/assets/ring-studio-v2.js (script chargé par la page précédente)
- https://alloycustomjewelers.com/pages/custom-ring-builder
- https://alloycustomjewelers.com/pages/band-builder
- https://alloycustomjewelers.com/pages/custom-engagement-rings
- https://alloycustomjewelers.com/pages/alloy-custom
- https://alloycustomjewelers.com/pages/faq

Doland Jewelers
- https://dolandjewelers.com/robots.txt
- https://dolandjewelers.com/
- https://dolandjewelers.com/pages/design-your-ring
- https://dolandjewelers.com/apps/ring-creator/rb-setting-list?jewelry_type=ring&view_type=grid
- https://dolandjewelers.com/pages/custom-engagement-rings
- https://dolandjewelers.com/pages/custom

Siebke Hoyt Jewelers
- https://www.siebkehoyt.com/robots.txt
- https://www.siebkehoyt.com/
- https://www.siebkehoyt.com/pages/custom-ring-builder
- https://www.siebkehoyt.com/pages/custom-engagement-rings-in-cedar-rapids
- https://www.siebkehoyt.com/apps/ringbuilder/settings (404)
- https://www.siebkehoyt.com/apps/diamondtools
- https://www.siebkehoyt.com/collections/lab-grown

James Martin Jewelers
- https://jamesmartinjewelers.com/robots.txt
- https://jamesmartinjewelers.com/
- https://jamesmartinjewelers.com/pages/design-your-ring
- https://jamesmartinjewelers.com/pages/custom-engagement-rings

Herteen & Stocker Jewelers (robots.txt seul lu ; le reste par extraits de Parallel Search)
- https://herteenandstockerjewelers.com/robots.txt
- https://herteenandstockerjewelers.com/ (extrait)
- https://herteenandstockerjewelers.com/ring-builder/ (extrait)
- https://herteenandstockerjewelers.com/custom-engagement-rings (extrait)
- https://herteenandstockerjewelers.com/product-category/in-stock-lab-grown-diamond-engagement-rings (extrait)
- https://herteenandstockerjewelers.com/services/ (extrait)
- https://herteenandstockerjewelers.com/about/ (extrait)

Josephs Jewelers (robots.txt seul lu ; le reste par extraits de Parallel Search)
- https://josephsjewelers.com/robots.txt
- https://www.josephsjewelers.com/create-your-ring (extrait)
- https://www.josephsjewelers.com/engagement-rings (extrait)
- https://www.josephsjewelers.com/rings (extrait)
- https://www.josephsjewelers.com/custom-design (extrait)
- https://www.josephsjewelers.com/shipping-policy (extrait)
- http://josephsjewelers.com/services (extrait)

Nelson Jewelry
- https://www.nelsonjewelry.com/robots.txt
- https://www.nelsonjewelry.com/
- https://www.nelsonjewelry.com/ringsettings
- https://www.nelsonjewelry.com/pages/custom-jewelry

Rosalee Jewelry
- https://rosaleejewelry.com/robots.txt
- https://rosaleejewelry.com/
- https://rosaleejewelry.com/pages/custom-jewelry-design
- https://rosaleejewelry.com/collections/engagement-rings

Greenberg's Jewelers
- https://www.greenbergsjewelers.com/robots.txt
- https://www.greenbergsjewelers.com/
- https://www.greenbergsjewelers.com/design-your-ring/
- https://www.greenbergsjewelers.com/company/about-us/
- https://www.greenbergsjewelers.com/services/custom-design/

Ginsberg Jewelers
- https://www.ginsbergjewelers.com/robots.txt
- https://www.ginsbergjewelers.com/
- https://www.ginsbergjewelers.com/ringbuilder/settings/
- https://www.ginsbergjewelers.com/custom-design/

Non retenus
- https://windmillparkjewelers.com/ ; https://windmillparkjewelers.com/pages/custom-ring-builder ; https://windmillparkjewelers.com/pages/custom-engagement-rings ; https://windmillparkjewelers.com/pages/custom-jewelry-design
- https://www.beckerdiamonds.com/ ; https://www.beckerdiamonds.com/pages/design-your-ring ; https://www.beckerdiamonds.com/custom-jewelry
- https://gundersons.com/ ; https://gundersons.com/pages/diamond-search ; https://gundersons.com/collections/engagement-rings ; https://gundersons.com/policies/shipping-policy ; extraits : https://gundersons.com/blogs/news/the-top-five-reasons-to-buy-an-engagement-ring-at-gunderson-s, https://gundersons.com/pages/sioux-city-store-location, https://www.bbb.org/us/ia/sioux-city/profile/jewelry-stores/gundersons-jewelry-co-0664-25297
- https://myjeweler.biz/ ; https://myjeweler.biz/pages/custom-design ; https://myjeweler.biz/pages/about-us
- https://www.facetsbysusong.com/ ; https://www.philipsdiamonds.com/ ; https://www.diamondleafjewelers.com/ ; https://www.mccoyjeweler.com/ ; https://neckersjewelers.com/ ; https://www.iowadiamond.com/ ; https://mcginsberg.com/ ; https://handsjewelers.com/
- Extraits seulement : https://www.owenjewelrydesign.com/custom-design ; https://www.artisansjewelry.com/ ; https://www.adorndsm.com/ ; https://fiscusjewelers.com/ ; https://www.davesjewelry.com/ ; https://www.venazia.com/custom-wedding-rings-des-moines-ia
- Robots.txt du fournisseur du module 3D : https://www.jeweleros.com/robots.txt (`Disallow: /api/` ; le module n'a pas été chargé)
- Comparaison avec le Nebraska : `docs/concurrence/audit/us/nebraska/INVENTAIRE.md` (modules StoneAlgo et Caratwise)

Recherche des candidats
- WebSearch : « Iowa jeweler custom engagement rings "design your own" ring builder Des Moines » ; « independent jewelry store Iowa engagement rings online ring builder Cedar Rapids Iowa City Davenport lab grown ».
- Parallel Search : requêtes par ville (Des Moines, West Des Moines, Ames, Ankeny, Iowa City, Davenport, Dubuque, Waterloo, Cedar Falls, Cedar Rapids, Sioux City, Council Bluffs, Mason City, Fort Dodge, Spencer, Marshalltown, Burlington) sur « ring builder », « design your ring », « custom engagement rings », « lab grown ».
- Annuaires vus dans les résultats, non lus en détail : https://iowa.wedsociety.com/article/engagement-rings-iowa/ ; https://www.stonealgo.com/local-jewelers/cedar-rapids-ia
