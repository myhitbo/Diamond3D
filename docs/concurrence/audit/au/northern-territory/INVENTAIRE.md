# Inventaire des joailliers en ligne : Territoire du Nord

Date : 25 novembre 2026.
Recenseur : Northern Territory (Darwin, Alice Springs).
Étude parente : `docs/concurrence/2026-11-15_australie.md`.
Antécédent : l'inventaire « Western Australia et Territoire du Nord » du même jour (`docs/concurrence/audit/au/western-australia/INVENTAIRE.md`) a déjà classé Venezia Jewellery (rang 9) et cité Chris Williams. La présente passe les reprend, relit leurs pages et ajoute six acteurs.

Légende :
- **[Vn]** vérifié : page lue ou contrôle actionné le 25/11/2026 (source n en fin de fichier) ;
- **[En]** extrait : texte renvoyé par le moteur de recherche le 25/11/2026, page non ouverte par moi ;
- **[WA-…]** constat de l'inventaire Western Australia du 25/11, non refait ici ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), TTC, tels qu'affichés. Le 25/11, Hoskings affichait des soldes : ses prix relevés sont remisés. Les sites disent « lab grown » ; ce document dit « synthétique ».

## Méthode

- Recherche par requêtes génériques uniquement (« Darwin jeweller engagement rings », « Alice Springs jeweller engagement rings », « Northern Territory jeweller lab grown diamonds », « Katherine NT jeweller rings », etc.), plus deux annuaires (Calso, Localsearch). Aucune mention de JR Diamond.
- Avant toute page, contrôle de l'adresse par l'outil `robots.cjs` de la session (groupe `User-agent: *` et groupes qui nomment ClaudeBot ou Anthropic). Page ignorée si le robots.txt l'interdit ou s'il est illisible.
- Lecture par curl avec son identité par défaut, jamais changée ; 2,6 s au moins entre deux requêtes. Une seule demande par page : après une réponse 429, l'adresse n'a pas été redemandée.
- Pas de rendu dans un navigateur : aucun site retenu n'annonce de configurateur ni de 3D [I].
- Aucun formulaire, aucun compte, aucun ajout au panier, aucune conversation ouverte. Les boutons « Add to cart » sont seulement relevés dans le code de la page.
- « Configurateur : oui » = outil en étapes qui assemble monture, pierre et métal. « Fiche à options » = choix sur la fiche produit seulement.

## Blocages et accès

- **Paspaley** : le robots.txt répond HTTP 429 avec une page HTML. L'outil le classe INCONNU : site **bloqué**, aucune page ouverte [V0].
- **Embella** : même réponse (429, page HTML) sur le robots.txt : **bloqué** [V0].
- **Palmerston Jewellers** : robots.txt et accueil lus (200) ; la collection des bagues de fiançailles a répondu 429, non redemandée : **bloqué** au-delà de l'accueil [V0][V10].
- **Venezia Jewellery** : la collection des bagues synthétiques avait répondu 429 lors de la passe Western Australia [WA-V12]. Ce jour, l'accueil et une fiche produit ont répondu 200 [V1][V2] ; la collection n'a pas été redemandée.
- **Injoignables** (le mandataire de la session ne joint pas l'hôte, HTTP 502) : wahine.com.au, thegemcave.com.au, centrejewellers.com.au [V0]. Ce n'est pas un refus du site ; ils peuvent être hors ligne [S].
- **creativejewellers.com.au** : page « SITE NOT FOUND » (HTTP 404) [V13].
- Les autres robots.txt autorisent les pages citées, sans groupe visant Claude [V0].

## Constat d'ensemble [I]

Aucun joaillier établi dans le Territoire du Nord n'offre de configurateur ni de 3D ou 360° en ligne. Deux sites seulement vendent des bagues en ligne avec prix et panier : Venezia (Darwin) et Hoskings (chaîne familiale venue de Victoria, cinq boutiques dans le Territoire). Les artisans (Chris Williams, Steve the Jeweller, Creative Jewellers, Foxfire) ont des sites vitrines sans prix, ou pas de site.

À Alice Springs, aucun site propre de joaillier n'a pu être lu : la seule présence en ligne vérifiée est la boutique Hoskings [V6]. Les marques nationales en ligne (Rings of Australia, Brilliyond, Moi Moi, Armans) publient des pages « Darwin » de référencement sans boutique sur place [E19].

Faute de candidats, le classement retient les meilleurs sites de joailliers locaux, comme le prévoit la consigne.

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique [I]. La colonne « adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Venezia Jewellery | Darwin (centre) | https://veneziajewellery.com.au/ | https://veneziajewellery.com.au/products/18ct-wg-solitaire-oval-cut-lab-grown (fiche lue). Collection : `/collections/lab-diamond-engagement-ring` [WA-V12] | Non (fiche à options : métal, carat, taille, **prix par combinaison**) | **En partie** : collection en 429 lors de la passe WA, non redemandée ; accueil et fiche en 200 ce jour [V1][V2] | Seul joaillier du Territoire dont la fiche donne le prix de chaque combinaison : solitaire synthétique de 2 450 $ (9 ct, 1 ct) à 4 950 $ (platine, 2 ct), pierre E VS1, « Add to cart » [V2]. Fabrication à la commande en 2 à 3 semaines si la pièce n'est pas en stock [V2]. Diamants roses d'Argyle avec certificat [V1] |
| 2 | Hoskings Jewellers | Darwin (Smith Street Mall), Casuarina, Yarrawonga (Palmerston), Alice Springs ; siège familial à Frankston (Victoria) | https://hoskings.com.au/ | https://hoskings.com.au/collections/engagement-rings [V4] | Non (catalogue ; taille choisie sur la fiche) | Aucun [V0] | Vrai commerce en ligne : 115 bagues de fiançailles chiffrées, surtout en synthétique [V4]. Fiche : solitaire ovale synthétique de 2 ct, or 18 ct blanc, « IGI Certified », 5 246,25 $ remisé (6 995 $), « Add to Cart », retours sous 14 jours [V5]. 46 alliances de 149,25 $ à 1 350 $ sur la première page [V7]. Seul acteur vérifié à Alice Springs [V6]. Mais revendeur de marques, sans récit de fabrication [I] |
| 3 | Chris Williams Retail & Manufacturing Jewellers | Wanguri (Darwin) : 22 Cubillo St | https://www.chriswilliamsjewellers.com/ | https://www.chriswilliamsjewellers.com/custom-design [V9] | Non | Aucun [V0] | Atelier de fabrication sur place, propriétaire joaillier depuis 1986 [V9][E16]. Parcours décrit : conception, choix de la pierre, puis « a clear quote before we begin crafting » [V9]. Synthétique (« lab-crafted ») mis en avant. Refonte de bijoux anciens, proche de la transformation de JR [V9]. Aucun prix, aucune vente en ligne : tout passe par le téléphone ou la demande [V9] |
| 4 | Palmerston Jewellers | Palmerston : Palmerston Shopping Centre, 10 Temple Terrace | https://palmerstonjewellers.com.au/ | https://palmerstonjewellers.com.au/collections/engagement-rings (lien de l'accueil [V10] ; page en 429) | Non (catalogue) | **En partie** : 429 sur la collection des bagues de fiançailles, non redemandée [V10] | Boutique en ligne avec rubriques « Engagement Rings », « Solitaire », « Halo », « Three Stone », « Diamond Rings » [V10]. Prix et panier non vus (page bloquée) [I]. Revendeur de marques (Autore, Ania Haie, Nomination) [V10] |
| 5 | Steve the Jeweller | Rapid Creek (Darwin) | https://www.stevethejeweller.com.au/ | https://www.stevethejeweller.com.au/handmade-jewellery.html [V11] | Non | Aucun [V0] | Artisan seul, « over 30 years » à Darwin. Bagues de fiançailles et alliances faites à la main, sur mesure, refonte de bijoux [V11]. Site vitrine (copyright 2018), sans prix ni vente en ligne [V11] |
| 6 | Paspaley | Darwin : boutique au Charles Darwin Centre, 19 Smith Street ; siège du groupe à Darwin | https://www.paspaley.com/ | — (aucune page ouverte) | Non relevé | **Bloqué** : robots.txt en 429 avec une page HTML [V0] | Retenu pour mémoire. Maison de la perle des mers du Sud, siège à Darwin, onze boutiques en Australie [E15]. Boutique en ligne avec panier ; bagues à perle [E15]. Aucune bague de fiançailles en diamant relevée [E15]. Proche d'une grande maison : hors cœur de cible [I] |
| 7 | House of Fulton Jewellery | Darwin : 45 Smith Street Mall | https://houseoffulton.com.au/ | https://houseoffulton.com.au/ [V12] | Non | Aucun [V0] | Retenu pour mémoire. Joaillier indépendant depuis 1997 [E16]. Boutique en ligne avec prix (collier de perles en argent à 410 $) [V12]. Mais aucune rubrique de bagues : argent, opale, perles [V12]. Site daté (copyright 2017) [V12] |

Moins de dix acteurs retenus : les autres joailliers du Territoire relevés n'ont pas de site lisible (voir plus bas).

## Fiches

**1. Venezia Jewellery** : Shop 2/32 Mitchell St, Darwin City NT 0800 ; ouvert du lundi au samedi [V1].
- Accueil [V1] :
  - rubriques : synthétique, alliances (homme ; femme et anniversaire), naturel, perles, pierres de couleur, opale, diamants roses ;
  - quatre solitaires synthétiques (ovale, émeraude, rond, poire) « From $2,450.00 », bouton « Choose options » ;
  - « Free Domestic Shipping » ; retrait en boutique obligatoire au-delà de 10 000 $ ;
  - « Venezia Special Collection » : diamants roses d'Argyle, avec « Argyle Certificate » ; diamants blancs « GIA Certificates » sur une bague.
- Fiche « 18ct WG Solitaire Oval cut Lab Grown Diamond Ring » [V2] :
  - serti clos (« Classic Simple Bezel set ») ; pierre « Colour: E », « Clarity: VS1 » ;
  - options : métal (9 ct jaune ou blanc, 18 ct jaune ou blanc, platine), 1, 1,5 ou 2 ct, tailles J à O ;
  - prix par combinaison, taille J : 9 ct 2 450 / 2 950 / 3 450 $ ; 18 ct 3 650 / 4 150 / 4 650 $ ; platine 3 950 / 4 450 / 4 950 $ ;
  - le platine coûte 300 $ de plus que l'or 18 ct, quel que soit le carat [V2] ; chaque demi-carat ajoute 500 $ [V2] ;
  - délai : envoi en 1 à 2 jours si en stock ; sinon « we will make your special item to order within 2 - 3 weeks », plus 1 à 2 semaines de transport ;
  - bouton « Add to cart ».
- Pas de certificat cité pour la pierre synthétique de la fiche [V2].

**2. Hoskings Jewellers** : boutiques du Territoire listées sur le site : Darwin Mall (36 Smith Street), Casuarina Shopping Centre, Yarrawonga, Alice Springs [V6].
- Histoire [E14] :
  - fondée en 1945 à Frankston (Victoria) par Perc Hosking ;
  - première boutique du Territoire en octobre 1987, Smith Street Mall, Darwin ;
  - « 17 stores across Australia », trois générations de la famille.
- Ce n'est pas une des chaînes nationales exclues : chaîne familiale de Victoria et du Territoire [E14][I]. Elle a une salle d'exposition dans le Territoire, donc admise [I].
- Bagues de fiançailles [V4] :
  - 115 produits ; la première page montre surtout des bagues synthétiques de la marque « aura », en or 9 ou 18 ct ;
  - prix remisés, par exemple 2 625 $ (9 ct, 2 ct au total) ou 6 746,25 $ (18 ct, solitaire ovale de 3 ct).
- Fiche du solitaire ovale de 2 ct en or 18 ct blanc [V5] :
  - « IGI Certified » ; 5 246,25 $ au lieu de 6 995 $ ; paiement fractionné proposé ;
  - choix de la taille, « Add to Cart » ;
  - retours et échanges sous 14 jours ; envoi en 1 à 4 jours ouvrés.
- Page d'information sur le synthétique (« lab-created diamonds ») [V8].
- Alliances : 46 produits (marque Peter W Beck notamment), de 149,25 $ à 1 350 $ sur la première page [V7].
- Pas de configurateur, ni de 3D, ni de récit de fabrication [V3][V4][V5].

**3. Chris Williams Retail & Manufacturing Jewellers** : 22 Cubillo St, Wanguri NT 0810 ; ABN 46 652 124 055 [V9].
- « territory-owned business », à Darwin depuis 2004 ; fabrication « in-house » [V9].
- Page « Custom Design » [V9] :
  - conception autour du budget ; choix du métal, des pierres et de la finition ;
  - « Because we manufacture jewellery in-house, you get direct input from an experienced jeweller throughout the process » ;
  - devis avant fabrication ; délai « a few weeks » pour une pièce simple ;
  - refonte de bijoux hérités : réemploi des pierres, et parfois du métal.
- Pages « Engagement Rings » et « Lab-Grown Diamonds » : conseils, aucun prix, bouton « Enquire Now » [V9].
- Le plus proche de JR Diamond par le métier (atelier, sur mesure, refonte, synthétique), mais sans rien en ligne au-delà de la vitrine [I].

**4. Palmerston Jewellers** : T18/20 Palmerston Shopping Centre, 10 Temple Terrace, Palmerston City NT 0830 ; ABN 22 078 824 674 [V10].
- Boutique Shopify : rubriques « Engagement & Wedding » et diamants, montres, cadeaux [V10].
- Collection des bagues de fiançailles bloquée (429) : contenu non vu [V10].

**5. Steve the Jeweller** : Rapid Creek, Darwin [E16].
- « Steve Erdelyi has been designing and hand making unique, sentimental jewellery pieces in Darwin for over 30 years » [V11].
- Bagues de fiançailles et alliances sur mesure ; refonte ; réparations [V11]. Pas de prix.

**6. Paspaley** : boutique de Darwin au rez-de-chaussée du Charles Darwin Centre, 5/19 Smith Street [E15]. Siège du groupe : 19 The Mall, Darwin [E15]. Site non ouvert (robots.txt en 429) [V0].

**7. House of Fulton Jewellery** : 45 Smith Street Mall, Darwin NT 0800 [V12]. Argent, opale, perles, réparations ; prix affichés TTC (« includes 10% GST ») [V12].

## Autres candidats vus, non retenus

| Acteur | Ville | Adresse | Constat | Raison |
|---|---|---|---|---|
| Creative Jewellers | Darwin (32 Smith Street) et atelier à Coolalinga (465 Stuart Hwy) [E17] | creativejewellers.com.au | Famille, plus de 30 ans ; bagues de fiançailles, alliances, diamants d'Argyle ; fabrication et réparation dans l'atelier [E17] | Site en 404 « SITE NOT FOUND » [V13] |
| Foxfire Designs | Parap : 13a/34 Parap Rd [E16] | — | Établi en 1993 ; sur mesure, bagues de fiançailles, salle et atelier sur place [E16] | Pas de site relevé |
| Crux studio ; J A Manufacturing Jewellers | Casuarina ; Larrakeyah [E16] | — | Fabricants [E16] | Pas de site relevé |
| Wahine | Darwin [E16] | wahine.com.au | — | Site injoignable (502) [V0] |
| Embella Jewellery | Darwin : Star Village Arcade, 32 Smith Street Mall [E20] | embella.com.au | Bijoux artisanaux de plage, argent, plaqué or [E20] | Pas de bague de fiançailles [E20] ; robots.txt en 429, bloqué [V0] |
| Gem Cave ; Showcase Jewellers | Alice Springs : 85 Todd St ; 40 Hartley St [E18] | thegemcave.com.au ; centrejewellers.com.au | — | Sites injoignables (502) [V0] |
| Hourglass Jewellery / Leading Edge Jewellers | Alice Springs : Alice Plaza, Todd Mall [E18] | — | Un avis client signale une fermeture (« it is closing down ») [E18] | Pas de site propre relevé |
| Alice Springs Jewelry | — | alicespringsjewellery.com | Marque de bijoux de mode [E18] | Le nom désigne une marque, pas un joaillier d'Alice Springs [S] ; non ouvert |
| Moi Moi ; Armans Fine Jewellery ; Rings of Australia ; Brilliyond | Sydney, Melbourne, Perth ; Sydney ; Brisbane ; Melbourne et Gold Coast [E19] | pages « Darwin » | Pages de référencement local [E19]. Moi Moi : rendus 3D ou CAO, 4 à 6 semaines [E19] | Pas de boutique dans le Territoire [E19][I]. Le robots.txt de Moi Moi interdit les agents d'Anthropic [WA] : non ouvert |
| Michael Hill, Prouds, Angus & Coote, Goldmark, Pandora | Casuarina, Palmerston [E16] | — | — | Chaînes exclues par la consigne |

## À retenir pour JR Diamond [I]

- **Personne ne configure en ligne dans le Territoire.** Aucun outil en étapes, aucune 3D ni 360°.
- **Venezia montre une grille de prix lisible sur une seule fiche** : métal × carat, à prix fixe [V2]. C'est la forme la plus simple du « prix expliqué » vue ici. On y lit aussi que le platine coûte 300 $ de plus que l'or 18 ct [V2]. Le prix n'est pas décomposé pour autant (métal, pierre, façon).
- **Le délai de Venezia est comparable à celui de JR** : 2 à 3 semaines de fabrication, plus le transport [V2]. JR annonce 14 jours ouvrés.
- **IGI pour le synthétique** chez Hoskings, comme chez JR [V5]. Venezia ne cite pas de certificat pour sa pierre synthétique [V2].
- **Montrer la fabrication** : seul Chris Williams met l'atelier en avant (« manufacture jewellery in-house »), sans photo ni vidéo de commande [V9]. Personne ne promet de suivre la fabrication.
- **Transformation de bijoux** : Chris Williams et Steve the Jeweller proposent la refonte de bijoux hérités [V9][V11], comme JR. Ni l'un ni l'autre ne la vend en ligne.
- **Marché petit** : sept acteurs retenus, dont deux pour mémoire. Un audit détaillé n'aurait de sens que pour Venezia et Hoskings [I].

## Sources

« curl » : requête simple, identité par défaut. Toutes les sources [Vn] ont été lues le 25/11/2026.

- [V0] Contrôle `robots.cjs` du 25/11 :
  - autorisés : veneziajewellery.com.au (`Allow: /`), www.chriswilliamsjewellers.com, www.hoskings.com.au, www.stevethejeweller.com.au, www.palmerstonjewellers.com.au (`Allow: /`), houseoffulton.com.au ;
  - INCONNU, robots.txt en HTTP 429 avec page HTML : www.paspaley.com, www.embella.com.au ;
  - INCONNU, hôte injoignable par le mandataire (HTTP 502) : www.wahine.com.au, thegemcave.com.au, centrejewellers.com.au ;
  - creativejewellers.com.au : robots.txt en 404 (page « SITE NOT FOUND ») ;
  - www.alicespringsjewellery.com : pas de robots.txt ; aucune page ouverte.
- [V1] https://veneziajewellery.com.au/ (curl 200) : « From $2,450.00 », « Choose options », « Free Domestic Shipping. (Store Pick up ONLY for item over $10,000) », « Argyle Certificate », « GIA Certificates », « Shop 2/32 Mitchell St, Darwin City NT 0800 ».
- [V2] https://veneziajewellery.com.au/products/18ct-wg-solitaire-oval-cut-lab-grown (curl 200) : grille « Platinum / 1 Carat / J - $3,950.00 » à « 9ct WG / 2 Carat / J - $3,450.00 » ; « Colour: E », « Clarity: VS1 » ; « Classic Simple Bezel set » ; « we will make your special item to order within 2 - 3 weeks » ; « Shipping time is 1 - 2 weeks on top » ; « Add to cart ».
- [V3] https://hoskings.com.au/ (curl 200) : « Since we opened our doors in 1945, this family-run Jewellery Store » ; « EASY 14 DAY RETURNS » ; menus « ENGAGEMENT », « WEDDING ».
- [V4] https://hoskings.com.au/collections/engagement-rings (curl 200) : « 115 Products » ; bagues « aura » en or 9 ou 18 ct, synthétiques ; prix remisés de 1 195 $ à 6 746,25 $ sur la première page.
- [V5] https://hoskings.com.au/products/18ct-white-gold-2ct-lab-grown-oval-diamond-solitaire-ring-242344 (curl 200) : « IGI Certified » ; « $5,246.25 », « $6,995.00 » ; « SELECT SIZE » ; « Add to Cart » ; « 14 day returns and exchanges » ; « dispatch all orders within 1 - 4 business days ».
- [V6] https://hoskings.com.au/stores (curl 200) : magasins « Darwin Mall », « Casuarina Shopping Centre », « Yarrawonga », « Alice Springs », et des magasins de Victoria.
- [V7] https://hoskings.com.au/collections/wedding-bands (curl 200) : 46 produits ; prix de 149,25 $ à 1 350 $ sur la première page ; « Peter W Beck 9ct White Gold 4mm Wedding Ring ».
- [V8] https://hoskings.com.au/product-information/lab-created-diamonds (curl 200) : page d'information sur le synthétique.
- [V9] https://www.chriswilliamsjewellers.com/ , `/engagement-rings` , `/custom-design` , `/lab-grown-diamonds` (curl 200) : « creating meaningful jewellery since 2004 » ; « territory-owned business » ; « provide a clear quote before we begin crafting » ; « Because we manufacture jewellery in-house » ; refonte de bijoux hérités ; « Enquire Now » ; aucun prix ; « 22 Cubillo St, Wanguri NT 0810 ».
- [V10] https://palmerstonjewellers.com.au/ (curl 200) : rubriques « Engagement Rings », « Solitaire », « Halo », « Three Stone » ; marques Autore, Ania Haie, Nomination Italy ; « T18/20 Palmerston Shopping Centre » ; ABN 22 078 824 674. https://palmerstonjewellers.com.au/collections/engagement-rings : HTTP 429, non redemandée.
- [V11] https://www.stevethejeweller.com.au/ et `/handmade-jewellery.html` (curl 200) : « designing and hand making unique, sentimental jewellery pieces in Darwin for over 30 years » ; « custom designed and expertly handmade » ; « © COPYRIGHT 2018 ».
- [V12] https://houseoffulton.com.au/ (curl 200) : « Independent jeweller » ; « Silver Pearl Necklet $ 410.00 (includes 10% GST) » ; catégories bracelets, opale, boucles d'oreilles, perles, colliers, pendentifs ; « 45 Smith Street Mall » ; « Copyright © 2017 ».
- [V13] https://creativejewellers.com.au/ (curl 404) : « SITE NOT FOUND ».
- [E14] https://hoskings.com.au/hoskings-jewellers et https://hoskings.com.au/journal/the-hoskings-story (extraits de recherche) : « founded in 1945 by the late Perc Hosking » ; « first store in Frankston, Victoria » ; « 17 stores across Australia » ; « establishing the first Hoskings Jewellers in Smith Street Mall, Darwin in October 1987 ».
- [E15] Extraits de recherche :
  - https://paspaleygroup.com/about.html : « The Paspaley head office is in Darwin » ;
  - http://paspaleygroup.com/pages/contact : « Level 19 19 The Mall Darwin NT 0801 » ;
  - https://www.paspaleygroup.com/pages/jewellery : « eleven Paspaley boutiques across Australia » ;
  - https://www.paspaley.com/en-us/pages/paspaley-darwin-boutique-northern-territory : « Charles Darwin Centre, 5/19 Smith Street » ; « pearl rings » ;
  - https://paspaley.com/ : panier, « Shop Jewellery ».
- [E16] Annuaires (extraits de recherche) :
  - https://calso.com.au/directory/nt/darwin/jewellers (lu par l'outil de recherche, données d'octobre 2026) : Chris Williams, Steve the Jeweller (Darwin et Rapid Creek), Wahine, Paspaley, Crux studio, Foxfire, Creative Jewellers Studios Coolalinga, Venezia, Embella, Hoskings, Palmerston Jewellers, The House of Pearls, chaînes nationales ;
  - https://www.localsearch.com.au/find/jewellers/darwin-city-nt : Foxfire « Established in 1993 », « showroom and on-site workshop » ; House of Fulton, 45 Smith St ;
  - https://www.whereis.com/darwin-city-nt-0800/jewellery-designers : Chris Williams, « 40 Years in Business » ; House of Fulton « operating since 1997 » ; J A Manufacturing Jewellers, Larrakeyah ;
  - https://www.chriswilliamsjewellers.com/about : « Chris began his trade in 1986 in his hometown of Whyalla, SA ».
- [E17] Creative Jewellers (extraits de recherche) : https://www.whereis.com/darwin-city-nt/wip/creative-jewellers-580582927 (« family owned and operated », « more than 30 years », 32 Smith Street) ; https://www.localsearch.com.au/profile/creative-jewellers-studio/coolalinga-nt/aVJi (« Work completed on-premises, in our workshop », Argyle, alliances).
- [E18] Alice Springs (extraits de recherche) : http://alice-springs-nt.place-advisor.com/jewelry-store (Gem Cave, 85 Todd Street, thegemcave.com.au ; Showcase Jewellers, 40 Hartley Street, centrejewellers.com.au) ; https://jewellink.com.au/jeweller/alice-springs-nt-0870/hoskings-jewellers-alice-springs (Hoskings, 36/38 Hartley Street ; Leading Edge Jewellers, Alice Plaza) ; https://www.dlook.com.au/business/jewellery-store-in-alice-springs-nt-870/hourglass-jewellery-alice-plaza (avis « it is closing down ») ; https://alicespringsjewellery.com/ (marque de bijoux).
- [E19] Pages « Darwin » de marques d'autres États (extraits de recherche) : https://www.moimoi.com.au/custom-made-engagement-rings-darwin/ (« 3D renders and/or CAD drawings », « 4 to 6 weeks », salles à Sydney, Melbourne, Perth) ; https://armansfinejewellery.com/collections/engagement-rings-darwin (numéro (02), indicatif de Sydney) ; https://ringsofaustralia.com.au/pages/shop-engagement-rings-in-darwin-australia (Murarrie, Queensland) ; https://www.brilliyond.com.au/locations/darwin (équipes à Melbourne, atelier à Gold Coast).
- [E20] https://www.embella.com.au/pages/darwin-store (extrait de recherche) : « Shop 7, Star Village Arcade 32 Smith Street Mall » ; bijoux de plage, argent, plaqué or.
- Inventaire Western Australia du 25/11 (`docs/concurrence/audit/au/western-australia/INVENTAIRE.md`), non refait ici :
  - [WA-V12] https://veneziajewellery.com.au/collections/lab-diamond-engagement-ring : HTTP 429, non réessayé ;
  - [WA] robots.txt de Moi Moi interdisant nommément les agents d'Anthropic.
