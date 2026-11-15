# Colorado : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Colorado et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales, les grands magasins et les grandes maisons sont exclus.

Méthode : lecture des pages comme un visiteur ordinaire (curl, ou navigateur de rendu Firecrawl pour les pages en JavaScript), au plus une page toutes les 2 secondes par site. Le robots.txt de chaque site a été lu avant toute page. Aucun formulaire rempli, aucun compte créé, aucun contrôle de configurateur actionné, aucun chat ni essayage par caméra ouvert. Aucune requête n'a contourné une protection. Chaque fait porte une marque :

- **V** (vérifié) : page lue le 15/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait d'index de recherche (Parallel, Firecrawl) ou de plusieurs indices ;
- **S** (supposé).

Blocage : aucun des 35 sites interrogés n'a renvoyé de 403 ni de défi Cloudflare à curl (code 200 partout, V). Le seul blocage relevé est un robots.txt qui interdit tout robot (The Golden Gem, rang 9).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Sarah O. Jewelry | Denver (Tennyson Street, Dairy Block) | https://www.sarahojewelry.com | https://www.sarahojewelry.com/collections/engagement-rings/featured-made-to-order | oui (fiche configurable : métal, pierre naturelle ou synthétique, carat, taille ; rotation « Drag to Rotate » ; essayage virtuel) | aucun (Vercel, 200 ; robots.txt : seul `/search` est interdit) | Le modèle commercial le plus proche de JR Diamond : bague « made just for you », prix affiché pour la combinaison choisie, délai « 5-7 WEEKS », certificats GIA (naturel) ou IGI/GCAL (synthétique) (V). La Nova Marquise, or 14 k jaune, 1 ct synthétique : 3 399 $ (V). |
| 2 | Thollot & Co. | Thornton (nord de Denver) | https://thollotco.com | https://thollotco.com/apps/ring-creator/rb-get-started | oui (RingCreator : pierre ou monture d'abord ; diamants naturels, synthétiques, pierres de couleur ; constructeurs d'alliances Lashbrook et Ava Couture) | aucun (Shopify, 200 ; `/apps` non interdit) | Se présente comme « Colorado's only local lab diamond producer » (V pour l'affirmation, non vérifiée sur le fond). Prix affichés en synthétique (V). En sur mesure : rendus et prototype 3D avant fabrication en atelier (V). Diamants « Colorado Cut » (V). |
| 3 | Snyder Jewelers | Longmont | https://www.snyderjewelers.com | https://www.snyderjewelers.com/pages/design-your-ring | oui (3D, JewelerOS/StoneAlgo ; plus un constructeur monture → diamant → bague) | aucun (Punchmark, 200 ; `Crawl-delay: 2` respecté) | Concepteur 3D en ligne, pierre choisie en boutique, bague prête « in just a couple of weeks » (V). Le constructeur classique filtre les montures par prix et cherche des diamants naturels ou synthétiques (V). |
| 4 | Mesa Jewelers | Grand Junction | https://www.mesajewelers.com | https://www.mesajewelers.com/pages/design-your-ring | oui (3D, même outil StoneAlgo, 4 étapes ; constructeur `/ringsettings`) | aucun pour le site ; la vue 3D (cadre `jeweleros-custom.netlify.app`) ne s'est pas chargée dans le navigateur de rendu | Même parcours que Snyder : « Design your ring online in stunning 3D / Pick out your center stone in our Grand Junction, CO showroom / Finalize & order » (V). Aucun prix lu dans l'outil (I). |
| 5 | Silvadi | Aurora | https://silvadi.com | https://silvadi.com/pages/design-your-own-engagement-ring | oui (Caratwise : monture ou diamant d'abord) | partiel : constructeur rendu en JavaScript, contenu non lu (pas de blocage du site) | « watch the ring come together as you build it, and we'll make it here in Aurora » (V). Diamants naturels et synthétiques certifiés IGI, discours « Wholesale-direct since 1993 » (V). |
| 6 | Diamond Source Jewelers | Greenwood Village | https://www.diamondsourcejewelers.com | https://www.diamondsourcejewelers.com/engagement-rings | oui pour les alliances (Malo Bands, `/band-builder/`) ; non pour la bague (catalogue « DSJ Custom » et consultation) | aucun (200) | Prix « Starting From » de 1 250 à 1 950 $ pour des montures faites à la commande, avec la mention « do not include center stones » (V). Prix final selon métal, pierre, naturel ou synthétique (V). Maquettes imprimées en 3D à essayer, selon un avis client (V pour l'avis). |
| 7 | Bohemi | Boulder | https://bohemi.com | https://bohemi.com/pages/custom-jewelry | non (personnalisation des modèles et sur mesure sur rendez-vous) | aucun (Shopify, 200) | Transparence rare : sur-mesure moyen de 4 000 à 10 000 $, délai de 6 à 12 semaines, pierre choisie avant le rendu CAO 3D « from all angles », vieil or repris (V). Prix affichés : monture Stellaris dès 4 740 $ (V). |
| 8 | John Atencio | Denver (Larimer Square, Cherry Creek Mall), Park Meadows, Flatiron Crossing, Boulder, Fort Collins | https://johnatencio.com | https://johnatencio.com/apps/johnAtencio/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE | oui pour les alliances homme (Lashbrook) | aucun (Shopify, 200) | Marque régionale de créateur, six boutiques (V). Constructeur d'alliance avec date d'expédition affichée (V). Recherche de diamants synthétiques (V). Le constructeur ne couvre pas la bague de fiançailles (V). |
| 9 | The Golden Gem | Golden | https://www.thegoldengem.com | https://www.thegoldengem.com/collections/engagement | oui (« Build Your Engagement Ring » : monture, pierre, bague ; catalogue Stuller) | **bloqué pour le constructeur** : le cadre `thegoldengem-frame.jewelershowcase.com` a un robots.txt `Disallow: /` ; non automatisé | Prix « From » de 1 089 à 2 105 $ (V). Première année d'assurance offerte, une mise à taille gratuite sous 6 mois (V). Salle sur rendez-vous (V). |
| 10 | Biondi Diamond Jewelers | Aurora | https://www.biondijewelry.com | https://www.biondijewelry.com/ringsettings | oui (monture → diamant → bague) | aucun (Punchmark, 200 ; `Crawl-delay: 2` respecté) | Fabrication sur place : croquis, rendu CAO, modèle en cire, bague « crafted on location at our studio in Aurora » (V). Bagues en synthétique (V). Accueil en espagnol (V). |

## Détail par acteur

### 1. Sarah O. Jewelry (Denver)

- V : deux salles, « Tennyson Street » et « Dairy Block » (rendez-vous listés sur https://www.sarahojewelry.com/). I : 4301 Tennyson Street et 1825 Blake St, fondée en 2015, 11 à 50 salariés (page LinkedIn de l'entreprise, source secondaire).
- V : fiche https://www.sarahojewelry.com/products/mto-nova-marquise-ring. Options : métal (« 14k Yellow Gold »), pierre centrale (« 1 ct Lab Grown Diamond »), taille. Prix : 3 399 $, avec Affirm (« as low as $157/mo »). Délai : « Delivery Time: 5-7 WEEKS ». Visuel « Drag to Rotate », bouton « Click here to try on » (essayage par caméra, non ouvert).
- V : même fiche. Tableau des pierres : naturel D-J, VS1-SI1, GIA ; synthétique D-F, VVS1-VS1, IGI ou GCAL. Halo de diamants naturels de 0,12 à 0,19 ct. « Due to the custom nature of this piece, no returns or exchanges are available after purchase. »
- V : collection « Made To Order » (https://www.sarahojewelry.com/collections/engagement-rings/featured-made-to-order) : The Jenna Oval 2 550 $, The Bailey Radiant 2 515 $.
- V : quiz de bague (`/engagement-ring-quiz`), page « Custom & Heirloom » (`/custom-and-heirloom`), contrats de protection.
- I : le prix change avec chaque combinaison (la fiche dit « made just for you based on the customizations you select » ; contrôles non actionnés).
- Intérêt : c'est la référence commerciale du Colorado pour JR Diamond : prix et délai visibles avant l'achat, choix naturel ou synthétique sur la même fiche. Mais le visuel est une suite de photos et de vidéos du modèle, pas le fichier de fabrication, et le prix n'est pas expliqué poste par poste.

### 2. Thollot & Co. (Thornton)

- V : 3790 E 104th Ave, Thornton, CO 80233 (métadonnées de https://thollotco.com/).
- V : https://thollotco.com/apps/ring-creator/rb-get-started : « Build Your Own Ring / You can start your journey in two ways / Begin With Stone / Begin With Setting ». Recherches « Natural Diamond Search », « Lab Grown Diamond Search », « Colored Gemstone Search » (`/apps/ring-creator/rb-stone-list?diamond_type=…`). Image servie par `app.ringcreator.io`.
- V : menu « Men's Wedding Band Builder » (même outil Lashbrook que John Atencio) et page https://thollotco.com/pages/eternity-band-builder : « Thollot Eternity Band Builder by Ava Couture. Create your custom wedding band in your choice of metals, diamond shapes, and finger size. »
- V : https://thollotco.com/pages/lab-grown-diamonds : « As Colorado's only local lab diamond producer, Thollot & Co. lab diamond pricing is unbeatable. » Aucune preuve de production lue (S : affirmation commerciale).
- V : https://thollotco.com/collections/engagement-rings : « DV Jewelry 14K White Gold 6 Prong Marquise 2.24ctw Lab Grown Diamond Engagement Ring $3,380.00 ». Un extrait d'index antérieur donnait 2 475 $ pour la même bague (I) : le prix a changé ou l'index est ancien.
- V : https://thollotco.com/pages/custom-jewelry : « review visual renderings and, when appropriate, a 3D prototype before your custom design moves into production », « much of our custom work can be completed in-house ».
- Intérêt : le plus complet en outils (bague, alliance, éternité) et le plus engagé sur le synthétique. Les outils sont trois produits loués (RingCreator, Lashbrook, Ava Couture), sans 3D propre.

### 3. Snyder Jewelers (Longmont)

- V : 2201 Ken Pratt Blvd, Suite E, Longmont (données structurées de https://www.snyderjewelers.com/). « Snyder Jewelers has served the Longmont community since 1948 » (https://www.snyderjewelers.com/pages/custom-engagement-rings).
- V : même page : « Design your ring online in stunning 3D / Pick out your center stone in our Longmont, CO showroom / Finalize & order your ring ». Et : « we can have it ready for you in just a couple of weeks at a great price, fully customized around your center stone ».
- V : https://www.snyderjewelers.com/pages/design-your-ring répond (200) et charge le script `jeweleros.com/static/dist/jos.js`, le même que Mesa.
- V : https://www.snyderjewelers.com/ringsettings : « 1 Choose a Ring / 2 Choose a Diamond / 3 Complete Ring », filtres « Setting Price Range », métaux or blanc, jaune, rose et platine, « Natural Diamond Search » et « Lab Grown Diamond Search ».
- Intérêt : même promesse de rapidité que JR Diamond (« a couple of weeks » contre 14 jours ouvrés). La 3D est le modèle générique de StoneAlgo.

### 4. Mesa Jewelers (Grand Junction)

- V : 444 Main Street, Grand Junction, CO 81501 (https://www.mesajewelers.com/pages/custom-engagement-rings).
- V : https://www.mesajewelers.com/pages/design-your-ring : « Step 1 of 4 / Let's start designing your ring / … fully customize your design in our 3D Ring Designer ». Huit styles de départ, de solitaire à trois pierres, et « Start from scratch ». Or jaune, blanc et rose. Cadre `jeweleros-custom.netlify.app`, description « StoneAlgo Ring Builder ».
- V : dans le navigateur de rendu, la vue 3D affiche « We couldn't load your ring design ». Cause probable : pas de WebGL dans ce navigateur sans écran (S). Le robots.txt de l'hôte du cadre autorise tout (V).
- V : liens vers `/ringsettings` (constructeur Punchmark) et `/pages/antwerp-diamonds`.
- Intérêt : copie conforme de l'offre de Snyder. Il confirme que le concepteur 3D StoneAlgo se répand chez les indépendants.

### 5. Silvadi (Aurora)

- I : 3033 S Parker Rd #222, Aurora, CO 80014, ouvert du lundi au vendredi (extrait d'index de https://silvadi.com/).
- V : https://silvadi.com/ : « Wholesale-direct since 1993 », « Three decades supplying Denver's jewelers before we opened our own showroom », « IGI-CERTIFIED NATURAL & LAB-GROWN DIAMONDS », « Start with a setting, or start with the diamond », « watch the ring come together as you build it, and we'll make it here in Aurora ».
- V : https://silvadi.com/pages/design-your-own-engagement-ring répond (200) et charge le script `release.caratwise.com`. Le contenu du constructeur, rendu en JavaScript, n'a pas été lu.
- V : menu « Natural Diamonds (By Request) » : le synthétique est l'offre par défaut, le naturel se demande.
- Intérêt : grossiste devenu détaillant, qui fabrique sur place. C'est un modèle proche de l'atelier de Ramat Gan. Le constructeur reste à auditer dans un vrai navigateur.

### 6. Diamond Source Jewelers (Greenwood Village)

- V : 5910 South University Blvd, Greenwood Village, CO 80121 ; « Graduate Gemologist & Certified Appraiser » (https://www.diamondsourcejewelers.com/). Le numéro d'unité diffère selon les pages (C-11 ou C-14, I).
- V : https://www.diamondsourcejewelers.com/engagement-rings : « Custom rings are made to order. Prices shown reflect starting prices for settings and do not include center stones. Final pricing depends on metal type, center stone selection, lab-grown or mined diamond choice, carat weight, color, clarity, and cut. » Exemples : « Style #4: The Marquise Bezel Solitaire DSJ Custom Starting From $1,250.00 », « Style #2: The Contemporary Bezel … $1,950.00 ».
- V : https://www.diamondsourcejewelers.com/band-builder/ intègre `customer4204403-build-a-band.malobands.com` (constructeur d'alliances Malo).
- V : le menu « Design Your Own Engagement Ring » mène à « Schedule a consultation » : pas d'outil en ligne pour la bague.
- V : avis client sur l'accueil : « he also created 3-D printer-mock ups for me to try on ».
- Intérêt : la formulation du prix « à partir de, hors pierre centrale » est celle que JR Diamond prévoit pour son prix « à partir de ».

### 7. Bohemi (Boulder)

- V : 901 Pearl St, Unit 101, Boulder, CO 80302 (https://bohemi.com/). Bagues « alternatives » (saphirs, pierres de couleur), collections Stellaris, Nyx, Chrysos, etc.
- V : https://bohemi.com/pages/custom-jewelry : « Stone Sourcing happens before Design and CAD rendering », « converted into a 3D CAD rendering, where you'll see lifelike visualizations from all angles », « The average cost of an alternative stone custom engagement ring typically ranges from $4,000 to $10,000 », « Please allow 6-12 weeks from design to completion », reprise du « scrap gold, platinum, or silver ».
- V : https://bohemi.com/collections/engagement-rings : « Stellaris Engagement Ring Setting From $4,740.00 », « Stellaris Montana Sapphire Engagement Ring $5,600.00 ».
- Intérêt : bonne pratique de transparence (budget moyen, délai, ordre des étapes) et service proche de la transformation de bijoux de famille. Peu de diamant et pas de configurateur.

### 8. John Atencio (Denver et Front Range)

- V : boutiques listées sur https://johnatencio.com/ : Boulder, Fort Collins, Larimer Square, Cherry Creek Mall, Park Meadows Mall, Flatiron Crossing.
- V : accueil : « Build your men's wedding band with our new John Atencio Ring Builder ». Le lien mène à l'outil cité en page de départ, qui affiche « Powered by Lashbrook Builder » et « Ships as soon as: Sat. Nov. 14th* ».
- V : lien « Search Lab Diamonds » (https://johnatencio.com/pages/lab-grown-diamonds-search) et page de processus sur mesure (`/pages/engagement-ring-process`).
- I : bagues en synthétique et sur mesure à Denver, Boulder et Fort Collins (extraits d'index de `/collections/lab-grown-diamond-engagement-rings`).
- Intérêt : marque de créateur régionale bien implantée. Son constructeur ne vise que l'alliance homme.

### 9. The Golden Gem (Golden)

- V : 1111 Washington Ave, Suite 215, Golden, CO 80401, « By appointment only » (https://www.thegoldengem.com/collections/engagement).
- V : même page : « 3 EASY WAYS TO SHOP ENGAGEMENT RINGS / 1. Build Your Engagement Ring (Choose a Setting, Choose a Gemstone, Complete your Ring) / 2. Try on Sample Rings / 3. Custom Design ». Prix « From » de 1 089 à 2 105 $. « First Year of Comprehensive Jewelry Insurance on us », « One Free Resizing within 6 months of purchase ».
- V : « Explore Now » mène à https://www.thegoldengem.com/pages/engagement, qui intègre le catalogue Stuller (`thegoldengem-frame.jewelershowcase.com`) : catégories « Customizable Engagement Rings » et « Lab-Grown Diamond Engagement Rings ».
- Blocage (V) : https://thegoldengem-frame.jewelershowcase.com/robots.txt contient `User-agent: *` et `Disallow: /`. La lecture de la page hôte (autorisée) a rendu le cadre une fois. Aucune autre requête n'a été faite vers le cadre.
- Intérêt : exemple d'un constructeur de catalogue (Stuller) monté sur Shopify. À auditer à la main.

### 10. Biondi Diamond Jewelers (Aurora)

- V : 15755 East Briarwood Circle, Aurora (données structurées de https://www.biondijewelry.com/).
- V : https://www.biondijewelry.com/engagement (FAQ) : « Our certified master jeweler works with you from initial sketch through CAD rendering, wax model, and finished ring, all crafted on location at our studio in Aurora, Colorado. » Marques Gabriel & Co., Natalie K, Coast Diamond. Question « Does Biondi carry lab grown diamond engagement rings? » (I pour la réponse « Yes », lue dans l'extrait d'index).
- V : https://www.biondijewelry.com/ringsettings : « Choose Diamond / Find a Stone / 3 Complete Ring », recherche de diamants (`/diamonds?…&labGrown=0`). « Se habla español. »
- Intérêt : atelier sur place, comme JR Diamond. Mais la fabrication est décrite, pas montrée.

## Hors classement (lus, moins pertinents)

- **Miro Jewelers** (Centennial, 6750 S. Emporia St.) : prix affichés (bagues à 4 860 $ et 5 700 $), diamants naturels et synthétiques (IGI, GIA), page sur mesure, pas de configurateur (V, https://mirojewelers.com/collections/engagement-rings).
- **acredo** (Denver, 3000 E 3rd Ave, Unit 8) : salle américaine d'un fabricant allemand. Prix affichés, « Processing Time for Design Creation 2-6 weeks », « Made in Germany », recherche de diamants GemFind (`/apps/diamondtools/`) (V, https://www.acredo-rings.com/). Fabriqué hors du Colorado.
- **Johannes Hunter Jewelers** (Colorado Springs, 5182 N. Nevada Ave, Suite 100) : bagues avec prix, de 1 829 $ à 197 500 $ (V, https://johanneshunter.com/collections/engagement-rings). Pas de configurateur.
- **Walters & Hogsett** (Boulder) : pages « Find Your Diamond », « Custom Engagement », « Lab-Created Diamonds », « Diamond Upgrade Program » (V, liens de https://waltersandhogsett.com/). Aucun prix lu sur la collection (I).
- **Weiss Jewelers** (Greeley, 955 52nd Ave Ct, Suite 200) : page « Ring Builder » (https://www.weissjewelers.com/ring-builder, 200, V). Elle mentionne Lashbrook, mais le contenu en JavaScript n'a pas été lu (I : alliances Lashbrook).
- **Young in the Mountains** (studio à Boulder) : bagues en saphir du Montana avec prix, The Geminus 4 530 $ (V, https://younginthemountains.com/ et `/pages/contact`). Sur mesure en saphir ou en diamant. Signalé par l'inventaire du Montana.
- **Lane Mitchell Jewelers** (Colorado Springs) : sur mesure en 5 étapes avec rendu CAO 3D et impression du modèle, recherche de diamants (I, extrait de https://lanemitchelljewelers.com/custom-jewelry).
- **Revolution Jewelry Works** (Colorado Springs) : processus en 6 étapes, avec la durée de chaque étape (CAO de 3 à 8 h, cire de 2 à 6 h), taille de pierres sur place (I, extrait de https://revolutionjewelryworks.com/engagement-rings). C'est le récit de fabrication le plus détaillé relevé.
- **Ashley Schenkein Jewelry Design**, **Abby Sparks Jewelry**, **Leigh Sandusky Jewelry** (Denver), **Jeffery B Jewelers** (Parker) : ateliers de sur-mesure avec rendus CAO, devis après conception (I). Leigh Sandusky publie des exemples en synthétique et une fourchette de 5 000 à 10 000 $ (I).
- **Denver Jewelers** (Lakewood) : le lien d'accueil « Design Your Own Engagement Rings » renvoie une erreur 404 (V), tout comme la page « semi-custom » ; il y a un « earring stud builder ».
- **Foster & Son** (Cherry Creek) : page « Build-Your-Own-Jewelry » (200, contenu en JavaScript non lu). **Williams Jewelers** (Cherry Creek) : marques de créateurs (Tacori, A. Jaffe, Gabriel & Co.). **Sather's** (Fort Collins) : montures Punchmark. **Darvier**, **Garwood's**, **Rocky Mountain Goldworks**, **Doozie** (Fort Collins), **Cronin** (Boulder), **5th Avenue Designs** et **Bulow** (Denver), **Jewels & Gems** (Glenwood Springs) : sur-mesure et vitrine, sans outil en ligne relevé (accueils lus, V).

## Écartés

- **Shane Co.** : chaîne nationale, exclue par la consigne (siège au Colorado, S).
- **Hyde Park Jewelers** : https://www.hydeparkjewelers.com redirige vers https://www.the1916company.com/ (V). Groupe national, surtout horloger.
- **Brilliant Earth** (salle à Denver) : vendeur national, couvert à part.
- **Taylor Custom Rings** (Carlsbad, Californie), **Stienhardt** (New York), **Ben Garelick** (Buffalo, New York) : remontés par les recherches « Colorado » mais établis hors de l'État (V, pages « visit us » et « about »).
- **Venazia** : page de référencement local « Custom Rings Colorado Springs, CO » d'un vendeur en ligne (I, https://www.venazia.com/custom-rings-colorado-springs-co). Aucun établissement au Colorado constaté.

## Enseignements pour JR Diamond

- **Configurateurs loués.** Aucun outil n'est propre au joaillier (V) : StoneAlgo/JewelerOS en 3D (Snyder, Mesa), RingCreator (Thollot), Caratwise (Silvadi), Lashbrook (John Atencio, Thollot, Weiss), Ava Couture (Thollot), Malo Bands (Diamond Source), Stuller (The Golden Gem), Punchmark (Snyder, Mesa, Biondi), GemFind (acredo). Comme au Montana, la 3D montre un modèle générique, jamais le fichier de fabrication du joaillier.
- **Prix.** Sarah O. affiche le prix de la bague complète, pierre comprise, pour chaque combinaison (V, I pour la variation). Diamond Source affiche un prix « à partir de, hors pierre centrale » (V). Bohemi publie un budget moyen (V). Personne ne détaille les postes : l'explication du prix reste libre pour JR Diamond.
- **Fabrication.** Biondi, Thollot, Revolution et Bohemi décrivent les étapes (CAO, cire, prototype) (V et I), et Diamond Source fait essayer des maquettes imprimées (V pour l'avis). Aucun site lu ne propose de suivre sa propre bague en photos ou en vidéo (I).
- **Synthétique.** Courant au Colorado, contrairement au Montana : Sarah O., Thollot, Silvadi (synthétique par défaut), Miro, Diamond Source, The Golden Gem, John Atencio (V). Les sites disent « lab grown » ou « lab-created ».
- **Délais.** Snyder annonce « a couple of weeks » ; Sarah O. de 5 à 7 semaines ; acredo de 2 à 6 semaines ; Bohemi de 6 à 12 semaines (V). Les 14 jours ouvrés de JR Diamond sont au niveau du plus rapide.

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire ; robots.txt lu pour chaque domaine) :

- Sarah O. : https://www.sarahojewelry.com/robots.txt, https://www.sarahojewelry.com/, https://www.sarahojewelry.com/products/mto-nova-marquise-ring, https://www.sarahojewelry.com/collections/engagement-rings/featured-made-to-order
- Thollot & Co. : https://thollotco.com/robots.txt, https://thollotco.com/, https://thollotco.com/apps/ring-creator/rb-get-started, https://thollotco.com/apps/ring-creator/rb-stone-list?diamond_type=labgrown&view_type=grid&color_type=White, https://thollotco.com/pages/eternity-band-builder, https://thollotco.com/pages/lab-grown-diamonds, https://thollotco.com/collections/engagement-rings
- Snyder : https://www.snyderjewelers.com/robots.txt, https://www.snyderjewelers.com/, https://www.snyderjewelers.com/pages/custom-engagement-rings, https://www.snyderjewelers.com/pages/design-your-ring, https://www.snyderjewelers.com/ringsettings
- Mesa : https://www.mesajewelers.com/robots.txt, https://www.mesajewelers.com/, https://www.mesajewelers.com/pages/custom-engagement-rings, https://www.mesajewelers.com/pages/design-your-ring, https://www.mesajewelers.com/pages/antwerp-diamonds ; hôte du cadre : https://jeweleros-custom.netlify.app/robots.txt
- Silvadi : https://silvadi.com/robots.txt, https://silvadi.com/, https://silvadi.com/pages/design-your-own-engagement-ring
- Diamond Source : https://www.diamondsourcejewelers.com/robots.txt, https://www.diamondsourcejewelers.com/, https://www.diamondsourcejewelers.com/engagement-rings, https://www.diamondsourcejewelers.com/band-builder/ ; hôte du cadre : https://customer4204403-build-a-band.malobands.com/robots.txt
- Bohemi : https://bohemi.com/robots.txt, https://bohemi.com/, https://bohemi.com/pages/custom-jewelry, https://bohemi.com/collections/engagement-rings
- John Atencio : https://johnatencio.com/robots.txt, https://johnatencio.com/, https://johnatencio.com/apps/johnAtencio/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE, https://johnatencio.com/collections/all-engagement-rings ; https://johnatencio.com/pages/stores (404) ; hôte de l'outil : https://ringdesignersstudio.com/robots.txt
- The Golden Gem : https://www.thegoldengem.com/robots.txt, https://www.thegoldengem.com/, https://www.thegoldengem.com/collections/engagement, https://www.thegoldengem.com/pages/engagement ; https://thegoldengem-frame.jewelershowcase.com/robots.txt (`Disallow: /`)
- Biondi : https://www.biondijewelry.com/robots.txt, https://www.biondijewelry.com/, https://www.biondijewelry.com/engagement, https://www.biondijewelry.com/ringsettings
- Hors classement : https://mirojewelers.com/ (et `/pages/custom-design`, `/collections/engagement-rings`), https://www.acredo-rings.com/ (et `/collections/engagement-rings`), https://johanneshunter.com/collections/engagement-rings, https://waltersandhogsett.com/ (et `/pages/find-your-diamond`, `/collections/engagement-rings`), https://www.weissjewelers.com/ring-builder, https://younginthemountains.com/ (et `/pages/contact`), https://denverjewelers.com/ (liens `/engagement-rings/design-your-own-engagement-rings/` et `/engagement-rings/shop-semi-custom-engagement-rings/` en 404), https://cherrycreekjewelry.com/Build-Your-Own-Jewelry, https://williamsjewelers.net/, https://www.sathersjewelers.com/, https://www.darvier.com/, https://www.garwoodsjewelers.com/, https://www.rockymountaingoldworks.com/, https://dooziejewelry.com/, https://croninjewelers.com/, https://www.5thavenuedesigns.com/, https://www.bulowjewelers.com/, https://lanemitchelljewelers.com/, https://revolutionjewelryworks.com/, https://www.abbysparks.com/, https://www.asjewelrydesign.com/ (accueils et robots.txt)
- Écartés : https://www.hydeparkjewelers.com/ (redirection), https://www.taylorcustomrings.com/ ; https://www.taylorcustomrings.com/pages/visit-us-in-carlsbad, https://stienhardt.com/, https://www.bengarelick.com/pages/our-jewelry-store (extraits Parallel)

Extraits d'index de recherche (Parallel Search, Firecrawl Search), utilisés pour les faits marqués I :

- https://www.linkedin.com/company/64945108 (Sarah O.)
- https://silvadi.com/ (adresse)
- https://thollotco.com/collections/engagement-rings (prix antérieur)
- https://johnatencio.com/collections/lab-grown-diamond-engagement-rings
- https://lanemitchelljewelers.com/custom-jewelry, https://revolutionjewelryworks.com/engagement-rings, https://www.asjewelrydesign.com/, https://www.abbysparks.com/custom-jewelry-design-process-denver/, https://www.leighsandusky.com/custom-1, http://jefferyb.com/, https://www.jewelsandgemsinc.com/
- https://www.venazia.com/custom-rings-colorado-springs-co
