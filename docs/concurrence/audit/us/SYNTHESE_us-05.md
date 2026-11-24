# Synthèse États-Unis, groupe us-05 : Massachusetts, Michigan, Minnesota, Mississippi, Missouri

Date : 24/11/2026. Cette synthèse reprend les 20 audits du groupe (4 par territoire) et les 5 `INVENTAIRE.md` des dossiers `massachusetts/`, `michigan/`, `minnesota/`, `mississippi/`, `missouri/`.
Aucune page n'a été rouverte pour l'écrire : chaque fait vient du rapport cité, qui donne l'adresse lue. Audits datés du 15/11, scripts exécutés ou repris le 24/11 selon les rapports.

Marques, reprises des rapports : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé · **[Inv]** fait tiré d'un `INVENTAIRE.md` ou d'une exploration antérieure (« A » dans le rapport), non revérifié par l'audit.
Sans marque, un fait est [V] dans le rapport cité. Aucun site n'est bloqué : les « n/20 » portent sur les 20 sites. Le classement par impact est un jugement [I].
Temps mesurés depuis un centre de données, Chromium sans carte graphique, iPhone 13 émulé, une mesure par cas : ordres de grandeur.

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé (USD) | Rapport |
|---|---|---|---|---|---|
| Massachusetts | Sachs Jewelers | partiel : assistant JewelerOS complet ; dessinateur vu flouté (iPhone), non actionné ; écart à robots.txt signalé | assistant en cartes, premier choix en 1,6 s / 1,9 à 2,2 s ; erreur « Something went wrong » sur ordinateur | aucun dans l'assistant ; « real price » de la monture dans le dessinateur [Inv] | [rapport](massachusetts/sachs-jewelers.md) |
| Massachusetts | The Diamond Guild | partiel : dessinateur vu sur iPhone seulement (4 échecs sur ordinateur) ; pas de panier | dessinateur JewelerOS : rendu de l'anneau, rotation automatique [I] | MSRP 3 828 $ « Setting only » (cathédrale, poire, 14 k jaune), masqué après 18 K | [rapport](massachusetts/the-diamond-guild.md) |
| Massachusetts | Jewelry Express Works | partiel : constructeur d'alliances Stuller en cadre `Disallow: /`, lu une fois, rien actionné ; politiques non relues (refus de la session) | cadre étroit, 4 vues ; visuel en 2,75 s (ordinateur) | 2 680,86 $ pour 9,13 g d'or 14 k blanc [Inv] ; « pricing based on weight and dimensions » | [rapport](massachusetts/jewelry-express-works.md) |
| Massachusetts | Morin Jewelers | partiel : étape diamant à 0 résultat ; ajout au panier non confirmé (panier vide) | Punchmark : vignette 360°, 3 photos, zoom ; images de liste à 9,3 s | monture seule 2 811,75 $ ; pierres 614 à 6 926 $ ; livraison 9,99 $ / 49,95 $ | [rapport](massachusetts/morin-jewelers.md) |
| Michigan | Lewis Jewelers | partiel : concepteur JewelerOS chargé sur iPhone seulement ; `/cart/add` interdit | assistant 2,5 s / 1,5 s ; canevas 3D 0,6 à 1,5 s après le dernier clic (iPhone) | MSRP 1 362 $ monture seule (1 ct rond, 14 k jaune ; relevé des métaux incohérent) ; fiche 4 390 $ | [rapport](michigan/lewis-jewelers.md) |
| Michigan | Lucido Fine Jewelry | partiel : concepteur exploré sur iPhone (3 échecs sur ordinateur) ; panier interdit | canevas 3D 0,8 à 1,9 s après le clic (iPhone) | MSRP 1 398 $ (14 k), 1 970 $ (18 k), 1 630 $ (platine), 3 300 $ (4 mm, taille 13) | [rapport](michigan/lucido-fine-jewelry.md) |
| Michigan | Honey Jewelry Co | partiel : jusqu'à « Complete your ring » ; `/cart/add` interdit | photos, constructeur en 3 étapes, sans 3D ; fiche 1,8 s / 2,4 s | monture 2 195 $ (+300 $ 18 k, +400 $ platine) ; synthétiques dès 1 041 $ ; total 57 111 $ relevé | [rapport](michigan/honey-jewelry-co.md) |
| Michigan | Eli's Jewelry | partiel : « 3D Ring Designer » jamais chargé (3 essais) ; panier interdit | assistant seul ; designer jamais apparu | aucun prix de bague configurée ; diamants naturels dès 1 908 $ ; acompte sur mesure 500 $ | [rapport](michigan/elis-jewelry.md) |
| Minnesota | Wedding Day Diamonds | partiel : défi anti-robots 429 pendant l'audit, non contourné ; aucune option actionnée | galerie photos et vidéos par variante, sans 3D ; temps non mesuré | 2 135 $ tout compris (solitaire 14 k jaune, synthétique 1 ct) ; Affirm dès 99 $/mois | [rapport](minnesota/wedding-day-diamonds.md) |
| Minnesota | J.F. Kruse Jewelers | partiel : pas de configurateur ; catalogue et panier non ouverts (refus de la session) | aucun visualiseur ; premier visuel 0,87 s / 0,78 s | main-d'œuvre « starts around $695, plus metal and stones » | [rapport](minnesota/j-f-kruse-jewelers.md) |
| Minnesota | Knox Jewelers | partiel : pas de configurateur ni de panier (commande par téléphone ou chat) | 4 photos, pas de 3D ; image en 0,69 s / 0,67 s | monture Venita taille 6,5 : 3 590 $ (14 k), 4 190 $ (18 k), 4 390 $ (platine), sans pierre | [rapport](minnesota/knox-jewelers.md) |
| Minnesota | Graham Jewelers | partiel : designer JewelerOS non chargé (CORS) ; `/ringsettings` vide ; panier interdit | assistant visible en 4,2 s / 3,8 s ; 3D non vue | aucun dans l'assistant ; bagues en stock 3 000 à 6 100 $ | [rapport](minnesota/graham-jewelers.md) |
| Mississippi | Carter's Collective | partiel : configuration complète jusqu'à « Add to cart » (non cliqué, interdit) | rendus photo par variante, 9 images, zoom ; plus grand élément 0,77 s / 0,96 s | Iris 14 k synthétique : 4 725 $ (2 ct) à 7 700 $ (5 ct) ; prix lié au seul poids | [rapport](mississippi/carters-collective.md) |
| Mississippi | Traditional Jewelers | partiel : « Complete Ring » non atteint (clic sans effet) ; `/cart` interdit ; `/catalog/` non ouvert | CaratWise : 360° « Drag to Rotate », vidéo, plein écran, 360° du diamant ; accueil 2,8 s / 3,0 s | monture 1 417 $ « Setting Only » ; diamant 1,06 ct synthétique 744 $ ; synthétique IGI 1 ct dès 400 $ | [rapport](mississippi/traditional-jewelers.md) |
| Mississippi | Selman's Jewelers | partiel : designer JewelerOS jamais chargé (3 sur 3) ; `/cart/add` interdit | vignettes d'étapes seulement ; première image 2,4 s / 2,6 s | aucun dans le constructeur ; catalogue 2 140 à 8 280 $ | [rapport](mississippi/selmans-jewelers.md) |
| Mississippi | Kux Jewelers | partiel : designer JewelerOS en erreur ; pas de panier | vignettes d'étapes ; première image 1,9 s / 1,9 s | aucun : « Contact us for pricing and availability » | [rapport](mississippi/kux-jewelers.md) |
| Missouri | Buchroeders Jewelers | partiel : constructeur complet jusqu'au total ; `/cart` interdit | photos et vidéos de la bague et du diamant, rendus « _3D » de catalogue ; essayage par caméra (tiers) ; 1,0 s / 1,1 s | monture 1 600 $ + diamant 218 $ = 1 818 $ ; monture 1 600 à 2 740 $ | [rapport](missouri/buchroeders-jewelers.md) |
| Missouri | Cherry Pick Diamonds | partiel : pas de configurateur ; écart à robots.txt signalé (`/checkouts/`) | photos, zoom, vidéo (lecture non confirmée) ; 0,4 à 0,8 s | prix fixe par pièce, 3 500 à 45 000 $ (ex. 16 500 $) | [rapport](missouri/cherry-pick-diamonds.md) |
| Missouri | Noe's Jewelry | partiel : arrêt avant l'étape 3D (`jeweleros.com/api/` interdit) ; bague prête mise au panier | assistant JewelerOS ; première image 1,8 s / 2,0 s | aucun dans l'assistant ; bague prête 3 999,00 $ en un total | [rapport](missouri/noes-jewelry.md) |
| Missouri | Romantique Jewelers | partiel : même arrêt avant la 3D ; bague prête mise au panier | assistant JewelerOS ; première image 2,4 s / 2,6 s | aucun dans l'assistant ; bague 4 200,00 $ ; collection 975 à 17 615 $ | [rapport](missouri/romantique-jewelers.md) |

## 2. Fonctions et options récurrentes

| Fonction ou option | n/20 | Sites (preuve dans le rapport du site) |
|---|---|---|
| Outil loué à un fournisseur | 14 | JewelerOS (Sachs, Diamond Guild, Lewis, Lucido, Eli's, Graham, Selman's, Kux, Noe's, Romantique), Punchmark (Morin, `/ringsettings` de Graham), Stuller (Jewelry Express Works), CaratWise (Traditional), Nivoda (Buchroeders [Inv]). Outil maison : aucun. JewelerOS sur 29 sites des 5 inventaires (MA 2, MI 12, MN 3, MS 3, MO 9) [Inv] |
| Assistant JewelerOS « style, origine et forme, carat, délai » avec « Decide later » | 10 | les 10 ci-dessus ; mêmes 9 styles, 9 formes (marquise comprise), 8 carats de 0,5 à 5, 3 teintes d'or sans titre ni platine |
| … concepteur 3D vu en marche | 3/10 | Diamond Guild, Lewis, Lucido, **sur iPhone seulement** ; Sachs flouté sous l'écran de coordonnées |
| … « Something went wrong » sur ordinateur | 8/8 essayés | Sachs, Diamond Guild, Lewis, Lucido, Eli's, Graham, Selman's, Kux (requêtes `jeweleros.com/api/` bloquées par CORS ; cause liée ou non à l'environnement d'audit [S]). Non essayé : Noe's, Romantique |
| … écran nom et téléphone avant la 3D, avec « Continue without saving » | 3 | Sachs, Diamond Guild, Lucido |
| … étape « magasin » ajoutée sur iPhone (4 étapes sur ordinateur, 5 sur iPhone) | 3 | Sachs, Lucido, Graham |
| Constructeur « monture puis pierre » | 5 | Morin, Honey, Traditional, Buchroeders, Graham (`/ringsettings-diamonds`). Ordre inversable : Morin, Traditional, Graham |
| … total monture + pierre atteint | 2/5 | Honey (2 195 + 54 916 = 57 111 $), Buchroeders (1 818 $) |
| … étape vide | 2/5 | Morin (« 0 diamonds found »), Graham (« 0 settings found ») ; filtre de prix vide sans message chez Buchroeders |
| Fiche à options avec prix par combinaison, sans constructeur | 3 | Carter's, Wedding Day (non actionnée, 429), Knox |
| Pas de configurateur | 3 | J.F. Kruse, Knox (catalogue), Cherry Pick |
| 3D ou 360° manipulable vu | 4 | concepteur JewelerOS (Diamond Guild, Lewis, Lucido, iPhone), Traditional (360° CaratWise). Vignette 360° non actionnée : Morin |
| Vidéo de la bague sur la fiche | 5 | Wedding Day (par variante [Inv]), Traditional, Buchroeders (bague et diamant), Cherry Pick, Morin (360° en vidéo) |
| Prix affiché en ligne (parcours ou catalogue) | 17 | Morin, Diamond Guild, Lewis, Lucido, Honey, Eli's, Wedding Day, Knox, Graham, Carter's, Traditional, Selman's, Buchroeders, Cherry Pick, Noe's, Romantique ; Jewelry Express Works [Inv]. Plancher seul : J.F. Kruse. Aucun : Sachs (non vu), Kux |
| … monture seule, pierre à part | 8 | Morin, Diamond Guild, Lewis, Lucido (« Setting only »), Honey, Knox (« not including center stone »), Traditional, Buchroeders |
| … bague complète, un prix | 6 | Wedding Day, Carter's, Cherry Pick, Noe's, Romantique, Selman's ; aussi en catalogue : Lewis, Eli's, Graham |
| … surcoût par option lisible | 6 | Lucido (métal, griffes, largeur, taille, confort −127 $, pierres surprise +25 $), Honey (+300 / +400 $), Knox (métal), Buchroeders (forme, platine 1 810 $), Traditional (style de corps 1 234 à 1 494 $), Wedding Day (gravure +40 $) |
| … prix lié au poids du métal ou à la taille | 4 | Lucido (taille 3 : 2 375 $, taille 13 : 3 300 $), Knox (platine sans taille : « Please Select Finger Size »), Eli's (prix fixé au poids exact après CAO), Jewelry Express Works (poids en DWT et g [Inv pour le montant]) |
| … décomposé en métal, façon, marge | 0 | le plus proche : J.F. Kruse (« labor … $695, plus metal and stones ») |
| Aucun prix dans le parcours de conception | 10 | les 10 assistants JewelerOS (prix éventuel seulement dans le concepteur 3D) |
| Configuration dans l'adresse | 3 | Traditional, Buchroeders, Honey (`stage=…&settingId=…`) ; variante seule : Carter's, Honey (`?variant=`) |
| Enregistrer la conception | 3 | Traditional (« Save Your Design »), Buchroeders (« Save this design for later », effet non établi), Lucido (contre nom et téléphone) |
| « Drop a Hint » ou « Send a hint » | 5 | Kux, Romantique, Morin, Wedding Day, Graham |
| Naturel et synthétique proposés | 18 | tous sauf Carter's (collection Bloom en synthétique seul) et J.F. Kruse (non listé sur la page ; présents [Inv]) ; Jewelry Express Works compté sur [Inv] |
| … synthétique par défaut | 2 | Honey, Traditional (`dia_origin=LGN`). Naturel par défaut : assistants JewelerOS (Lewis, Graham, Selman's) |
| … libellé « Lab Grown », jamais « synthetic » | 20 | tous ; « man-made » et « lab-created » en plus chez Lewis |
| Certificat par pierre (GIA, IGI, GCAL) | 6 | Honey, Eli's, Knox, Traditional, Buchroeders (PDF), Noe's (IGI dans le titre) ; numéros IGI chez Selman's [Inv] |
| Or 14 k, 18 k et platine dans le parcours | 6 | Lewis et Lucido (concepteur), Honey (sans 18 k rose), Knox, Traditional, Buchroeders. 14 k seul : Carter's. Teinte sans titre : 10 assistants JewelerOS |
| Métal de la tête et du corps séparés | 3 | Lewis, Lucido (« mixte »), Traditional (couronne) |
| Taille de doigt dans le parcours ou la fiche | 9 | Lucido, Honey (région puis taille), Wedding Day, Knox, Buchroeders (« Not sure » = US 6), Noe's, Romantique (« Other »), Selman's, Jewelry Express Works. Absente : Carter's, Traditional |
| Gravure en ligne | 5 | Lucido (14 caractères, 2 polices), Lewis (même éditeur), Traditional (18 caractères, 3 polices), Wedding Day (+40 $), Jewelry Express Works (intérieur et extérieur) |
| Alliance dans le même outil | 3 | Lucido et Diamond Guild (« Add Wedding Band »), Traditional (« Matching Band ») ; constructeur d'alliances dédié : Jewelry Express Works |
| Délai affiché | 17 | « a couple of weeks » (Diamond Guild, Noe's, Romantique ; Sachs [Inv]) ; 2-3 jours ouvrés en stock (Morin) ; 3-4 sem. (Graham, Kruse, Jewelry Express Works [Inv]) ; 4-6 sem. (Lewis) ; 5-6 sem. (Buchroeders) ; 6 sem. (Knox) ; 1 à 12 sem. (Lucido) ; plus Eli's, Carter's, Cherry Pick, Wedding Day et Selman's (lignes suivantes). Aucun : Honey, Traditional, Kux |
| … délais contradictoires entre pages | 5 | Eli's (2-6 / 3-6 sem.), Kruse (3-4 / 3-6), Carter's (3-6 / 6-8 / 2-12), Buchroeders (5-6 sem. / 3-5 jours), Cherry Pick (1-2 / 3-5 / 3-6) |
| … date calculée sur la fiche | 2 | Wedding Day (« Custom Made. Ships by Dec 8 »), Selman's (« Estimated delivery between November 28 and November 30 ») |
| Délai souhaité demandé au client | 10 | les 10 assistants JewelerOS (1-4 semaines à 3-6 mois) |
| Rendu CAO ou maquette validé avant fabrication (promesse écrite) | 10 | Kruse (cire en photos et vidéo), Cherry Pick et Buchroeders (impression 3D), Eli's, Lewis, Lucido (cire), Knox, Morin (« You approve every stage »), Graham (cire), Jewelry Express Works (résine [Inv]) |
| Photos ou vidéos de la commande en cours de fabrication | 2 | Knox (« Creation of an Heirloom », photos d'avancement par e-mail), Kruse (modèle en cire en photos et vidéo, avant la fonte seulement). Mises à jour par e-mail sans photo : Carter's. Montrées sur le site : 0 |
| Sur-mesure exclu des retours | 12 | Jewelry Express Works, Morin, Lewis, Lucido, Honey, Eli's, Knox, Graham, Carter's, Selman's, Cherry Pick, Noe's. Nuancé : Buchroeders (30 j en avoir), Kruse (« Love it or we remake it »). Silence : Romantique, Diamond Guild, Kux |
| Délai de retour hors sur-mesure | — | 7 j en avoir (Carter's) ; 10 j (Morin, Lewis, Lucido) ; 15 j (Graham, Cherry Pick, Buchroeders et Selman's, contredits par 30 j ailleurs) ; 30 j (Eli's, Noe's, Romantique) ; 60 j (Wedding Day) ; 14 j pour l'UE : Eli's, Selman's, Noe's |
| Garantie écrite | 11 | à vie : Wedding Day, Kruse, Knox, Graham (+ 5 ans), Carter's, Traditional, Cherry Pick (structure), Romantique (sans détail) ; 1 an : Morin, Lucido (« Anything Promise ») ; 6 mois : Honey. Non trouvée : Eli's, Diamond Guild, Noe's, Kux |
| Première mise à taille offerte | 4 | Jewelry Express Works, Knox (12 mois), Carter's (1re année), Lucido (dans la protection d'un an) |
| Financement affiché | 12 | Sachs, Morin, Lewis, Honey, Eli's, Wedding Day, Kruse, Knox, Graham, Traditional, Buchroeders, Kux |
| Livraison gratuite annoncée | 7 | Morin (message contradictoire), Lewis, Honey, Eli's, Wedding Day, Selman's (dès 150 $), Cherry Pick (signature d'un adulte) |
| Avis chiffrés sur le site | 7 | Morin (682), Eli's (580+), Kruse (458), Knox (956), Selman's (438), Buchroeders (1 943), Honey (189) |
| Chat ou SMS | 12 | Sachs, Morin, Lewis, Eli's, Wedding Day, Kruse, Knox, Graham, Selman's, Buchroeders, Noe's, Romantique. WhatsApp vu : 0/20 |
| Rendez-vous en visio | 5 | Honey, Wedding Day, Kruse, Carter's, Buchroeders |
| Transformation de bijou de famille | 4 | Kruse (métal réutilisé), Carter's (or crédité), Cherry Pick, Noe's ; pierre du client contre 500 $ : Honey |
| Anglais et dollar seulement | 20 | tous |

## 3. Points forts à retenir pour JR Diamond, classés par impact [I]

1. **Prix qui bouge avec chaque option, taille et largeur comprises.** Lucido : 1 398 $ (14 k) → 1 970 $ (18 k) → 1 630 $ (platine) ; largeur 4 mm 2 650 $ ; taille 3 à 13 de 2 375 à 3 300 $ ; comfort fit −127 $ ([rapport](michigan/lucido-fine-jewelry.md)). Knox : 3 590 / 4 190 / 4 390 $ selon le métal, prix refusé tant que la taille manque en platine ([rapport](minnesota/knox-jewelers.md)). Les deux montrent l'effet du poids de métal que le moteur de prix de JR calcule déjà : c'est la forme à donner au « à partir de ».
2. **Total monture + pierre qui se construit.** Buchroeders : 1 600 $ + 218 $ = « Complete ring $1,818 USD », fiche diamant avec certificat IGI, mesures, table, profondeur et PDF ([rapport](missouri/buchroeders-jewelers.md)) ; Honey : total à chaque étape, compteur de résultats ([rapport](michigan/honey-jewelry-co.md)). Seuls 2 sites sur 20 vont jusqu'au total ; 0 explique métal, façon et marge : la place du « prix expliqué » reste libre.
3. **Preuves de fabrication : validation promise par 10 sites, images envoyées par deux.** Knox envoie des photos d'avancement par e-mail ([rapport](minnesota/knox-jewelers.md)) ; J.F. Kruse montre la cire en photos et vidéo, « Nothing gets cast in gold until you're happy » ([rapport](minnesota/j-f-kruse-jewelers.md)) ; Cherry Pick fait essayer un modèle imprimé en 3D et modifie largeur et hauteur de pierre ([rapport](missouri/cherry-pick-diamonds.md)). Aucun ne les montre sur le site : terrain libre pour « on voit naître son bijou ».
4. **Prix du sur-mesure dit en une phrase.** Kruse : « Labor on most custom engagement rings starts around $695, plus metal and stones » ; Jewelry Express Works : « transparent pricing based on weight and dimensions », poids en DWT et en grammes sous le modèle ([rapport](massachusetts/jewelry-express-works.md)) ; Eli's : devis gratuit, 500 $, CAO, prix au poids exact, 50 % au lancement ([rapport](michigan/elis-jewelry.md)). Modèle pour le parcours devis → prix confirmé de `docs/PAIEMENT.md` [I].
5. **Date d'expédition calculée près du bouton.** Wedding Day : « Custom Made. Ships by Dec 8 », avec garantie à vie, 60 jours de retour, 365 jours d'échange et livraison gratuite dans le même bloc ([rapport](minnesota/wedding-day-diamonds.md)) ; Selman's : fourchette de livraison datée ([rapport](mississippi/selmans-jewelers.md)). Répond au délai qui glisse ; les 14 jours ouvrés se convertissent en date [I].
6. **Prix par combinaison sur une seule page.** Carter's : forme, poids, métal, prix mis à jour en 1,5 s (4 725 à 7 700 $), 66 contrôles sur iPhone ([rapport](mississippi/carters-collective.md)). Le plus court du groupe ; mais forme et métal y sont sans effet sur le prix, sans explication.
7. **Choix de qualité simplifié.** Wedding Day : 3 niveaux (Luxury VVS2+/D, Signature VS1+/E, Classic VS2+/F-G), la maison choisit la pierre [Inv] ; Morin : pierres recommandées Premium / Select / Value avec prix sur la fiche de la monture ([rapport](massachusetts/morin-jewelers.md)). Utile tant que la grille des pierres de l'atelier n'est pas reçue.
8. **Entrée guidée sans impasse.** Assistant JewelerOS sur 10 sites : « Decide later » à chaque étape, chips récapitulatives, naturel ou synthétique dès la forme, « When do you need your ring? » ([rapport](michigan/lewis-jewelers.md), [rapport](minnesota/graham-jewelers.md)). À reprendre sans sa porte de coordonnées ni sa dépendance à un tiers (voir section 4).
9. **Politique du sur-mesure et garanties écrites en clair.** Knox définit la « special order » non remboursable et impute l'acompte de 500 à 800 $ ; Cherry Pick : « Custom and special-order rings are excluded » ; Graham : tableau de garanties daté (maintenance à vie, 5 ans, refonte 30 jours) ([rapport](minnesota/graham-jewelers.md)) ; Kruse : refonte gratuite si le client n'aime pas. Matière pour la question « fabriqué sur mesure » de l'avocat.
10. **Client éloigné servi à distance.** Kruse : 4 formules (tout à distance, visite pour la cire, visite pour la remise, tout en boutique) et 3 modes de remise ; rendez-vous vidéo chez Honey, Wedding Day, Carter's, Buchroeders. Pertinent pour la France plus tard [I].
11. **Alliance dans le même outil, avec fiche technique.** Lucido : « Add Wedding Band », alliance assortie ou sur mesure ; Jewelry Express Works : largeur, taille, épaisseur, poids et 10 finitions de bord sous le modèle. Base pour la page de l'alliance de kiddouchin [I].
12. **Partage vers le partenaire.** « Drop a Hint » sur 5 sites (Kux, Romantique, Morin, Wedding Day, Graham) ; configuration dans l'adresse chez Traditional, Buchroeders, Honey. JR Diamond l'a déjà (24/11) ; l'indice au partenaire est une variante du bouton « Partager ».

## 4. Défauts fréquents à éviter

- **Outil 3D loué qui n'aboutit pas.** JewelerOS : « Something went wrong » sur ordinateur 8 fois sur 8 essayées, aucune solution de repli ; 3D vue sur iPhone seulement (3 sites). Cause possiblement liée à l'environnement d'audit [S], mais le visiteur reste sans rien si la panne est réelle.
- **Concevoir sans prix.** 10 assistants sans prix ; prix de monture seule sans total chez 8 sites ; MSRP masqué après un changement de métal (Diamond Guild) ; valeurs inattendues (Lucido : pavé sur griffes « None » plus cher que « Pave » ; Lewis : platine sous le 14 k).
- **Coordonnées exigées avant le produit.** Écran nom et téléphone qui recouvre le dessinateur, « Continue without saving » en gris pâle (Sachs, Diamond Guild, Lucido) ; pop-up d'inscription sur l'étape finale (Honey).
- **Étapes vides ou incohérentes.** « 0 diamonds found » (Morin), « 0 settings found » (Graham), filtre vide sans message (Buchroeders) ; constructeur limité au rond malgré 7 formes (Honey) ; 3 formes dans la recherche de diamants contre 9 dans l'assistant (Eli's) ; 4 formes annoncées, 7 vendues (Carter's) ; 4 étapes sur ordinateur, 5 sur iPhone (Sachs, Lucido, Graham).
- **Textes contradictoires.** Délais (5 sites, jusqu'à trois valeurs chez Carter's et Cherry Pick) ; retours 15 contre 30 jours (Selman's, Buchroeders) ; livraison gratuite contre 9,99 $ (Morin) ; part d'or réutilisable 30 contre 50 % (Kruse).
- **Liens et contrôles morts.** « BOOK AN APPOINTMENT » et « GET IN TOUCH » vers `/collections/all` (Carter's) ; « Shipping Policy » en `#` (Eli's) ; « More payment options » en `#` qui ouvre un paiement (Cherry Pick) ; liens vers `daywdd.myshopify.com` (Wedding Day) ; « DETAILS » sans effet (Knox) ; taille choisie absente du panier (Romantique).
- **Vente hors ligne malgré l'outil.** Commande en boutique, au téléphone ou en rendez-vous : Jewelry Express Works, Knox, Kux, Diamond Guild ; pierre choisie en salle sur les 10 sites JewelerOS.
- **Image qui n'est pas la bague.** Rendus de catalogue de la monture (Buchroeders) ; 3D paramétrique d'éditeur, pas le fichier de fabrication (JewelerOS [Inv]) ; vignettes webp d'étapes seulement (Selman's, Kux).
- **Vente finale sans nuance et frais au retour.** Sur-mesure exclu chez 12/20 ; frais de 3 % (carte) et 10 % (financement), remboursement par chèque, cartes américaines seulement (Knox) ; 3,5 % au-dessus de 2 000 $ (Cherry Pick) ; « comparison purchasing » interdit (Lucido) ; 7 jours en avoir (Carter's).
- **Rien sur l'atelier.** 18/20 n'envoient ni photo ni vidéo de la commande en cours, 20/20 n'en montrent aucune sur le site, alors que 10 promettent une validation avant la fonte.

## 5. Couverture

- **Territoires sans site** : aucun. 5 territoires, 20 sites (rangs 1 à 4 de chaque inventaire).
- **Statuts** : 0 complet, 20 partiels, 0 bloqué. Wedding Day est passé en défi anti-robots 429 pendant l'audit : seuls deux relevés antérieurs au défi sont exploités, aucune option actionnée.
- **Causes des audits partiels** :
  - panier interdit par robots.txt (`/cart` ou `/cart/add`) : Jewelry Express Works, Lewis, Lucido, Honey, Eli's, Wedding Day, Graham, Carter's, Traditional, Selman's, Buchroeders, Cherry Pick ; panier vu avec un article seulement chez Noe's et Romantique (robots.txt `Allow: /`) ;
  - concepteur JewelerOS non chargé ou non visé : Sachs, Diamond Guild, Lewis, Lucido (ordinateur), Eli's, Graham, Selman's, Kux ; arrêt volontaire avant l'appel `/api/` : Noe's, Romantique ;
  - pas de configurateur : J.F. Kruse, Knox, Cherry Pick ; étape vide : Morin, Graham ;
  - lectures refusées par le contrôle d'autorisation de la session : Jewelry Express Works (politiques), J.F. Kruse (catalogue, panier), Wedding Day (second site).
- **Écarts à robots.txt à trancher par la session principale** :
  - Sachs : les scripts de la page ont appelé `jeweleros.com/api/` (interdit) sur environ 6 passages ; arrêt avant le dessinateur. Signalé par le rapport.
  - Jewelry Express Works : le cadre `*.jewelershowcase.com` (`Disallow: /`) a été chargé par la page et lu une fois, sans clic. Signalé. Les chiffres de prix de ce site viennent de l'inventaire.
  - Cherry Pick : « More payment options » a ouvert `/checkouts/cn/…` (interdit) ; rien relevé, clic non répété. Signalé. Aucun constat n'en dépend.
  - [I] Diamond Guild, Lewis, Lucido, Eli's, Graham, Selman's et Kux : le dernier choix de l'assistant déclenche par le widget le même `POST jeweleros.com/api/create/from-ring-config/` (noté dans chaque rapport) ; Selman's et Kux le précisent, les cinq autres ne le classent pas comme écart. Les constats du concepteur 3D (Diamond Guild, Lewis, Lucido) en dépendent.
- **Sites des inventaires non audités** (rangs 5 à 10), dont des pistes [Inv] :
  - Massachusetts : Melanie Casey, Laura Preshong (menu de modifications chiffrées), Bostonian (alliances Lashbrook), Long's, Boston Diamond Company ; DePrisco refuse le synthétique (contre-modèle).
  - Michigan : Medawar's, Metals in Time, Diamond Vault of Troy (JewelerOS), Orin, Giorgio Conti, Tapper's (croquis puis rendu informatique).
  - Minnesota : Patterson's (3D du fabricant Berco, « Inquire for Price »), Lasker, Princess Jewelry (11 858 marquises synthétiques), Greatons, Ken K Thompson (JewelerOS), Gittelson.
  - Mississippi : W.P. Shelton (JewelerOS), Platinum Jewelers (rendu CAO, cire, 2 à 4 semaines, prix en ligne), J. Parkerson (Punchmark), Juniker, Van Atkins (alliances Benchmark), Jewelmasters.
  - Missouri : Vinca, Serene Setting (sur mesure à distance), Adam Foster, Betz et CornerStone (JewelerOS), Elleard B. Heffern.
- **Bloqués dès l'inventaire** [Inv] : Barmakian et M. Flynn (Cloudflare 403 ; M. Flynn interdit aussi ClaudeBot), Jensen (403), Paul Medawar (Cloudflare), DeVries (robots.txt fermé aux robots d'IA), Britt et la vitrine de W.P. Shelton (Stuller `Disallow: /`), catalogue de Traditional (`/verify.html`), accueil de jeweleros.com (Cloudflare). À voir à la main.
- **Limites communes** : une mesure par cas, iPhone émulé dans Chromium (pas Safari), pas de GPU ; aucun paiement, chat, WhatsApp ni formulaire ; avis hors site non recoupés ; alliance de kiddouchin non recherchée.
