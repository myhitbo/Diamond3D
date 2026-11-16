# Audit : Do Amore (États-Unis, vendeurs nationaux)

- **Site** : Do Amore (Do Amore, Inc., Houston, Texas ; vente en ligne seulement), https://www.doamore.com. Page de départ prévue : l'accueil.
- **Constructeur trouvé** : pas de configurateur séparé. Chaque fiche de monture porte un panneau « Build Your Ring » en 4 étapes (Stone, Size, Engraving, Review) [Vc][D4]. S'y ajoutent les moteurs de recherche de pierres (bouton « Add to Ring ») [Vc][D7][D8] et le sur mesure par formulaire [Vc][D13]. Boutique WordPress + WooCommerce [V][D1][T5].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur), depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué**. L'accueil renvoie la page Cloudflare « Performing security verification » (HTTP 403, titre « Just a moment... », Ray ID a5af1aee1dcde82c) ; le témoin tournait encore sur « Verifying... » après 5 s [V][D2]. Le plan du site, autorisé par robots.txt, reçoit le même défi (403) [V][D3]. Conformément aux règles : aucun nouvel essai, aucun contournement.
- **Ce qui a été lu** : robots.txt (200) [V][D1] ; le texte des pages tel que le restituent les extraits du moteur de recherche Parallel. La plupart portent le bandeau « Black Friday Offer » lancé le 2/11/2026 : ce sont des copies récentes [I]. Ces lectures décrivent le site, elles ne remplacent pas un essai.
- Complète la ligne Do Amore de `docs/concurrence/2026-11-15_etats-unis.md` (constructeur « non identifié », défi Cloudflare) : blocage confirmé, constructeur identifié.
- **Légende** : [V] vu dans le navigateur ou par curl ; [Vc] texte du site lu dans un extrait de recherche, non actionné ; [T] tiers (avis, presse) ; [I] inféré ; [S] supposé. Prix en dollars US.

## Parcours

Reconstitué à partir du texte des pages, sans navigation : ordre et effets non vérifiés.

| Étape | Options |
|---|---|
| 0. Menu « Engagement » [D6] | « Start with a Ring Setting or Create a Custom Ring » ; pierres (diamants synthétiques, synthétiques de couleur « NEW », naturels, naturels de couleur « NEW », pierres de couleur, moissanite) ; formes ; styles ; métaux ; « 2 Days Ready-to-ship Rings » [Vc] |
| A1. Liste des montures (73 résultats) [D6] | Filtres forme, métal, style ; tri ; « All Settings / Shortlist » [Vc] |
| A2. Fiche monture, partie haute [D4][D5] | Forme, métal, taille, gravure ; prix « Setting Only » ; « Add to Bag \| total » ; Affirm ; date de livraison standard ou accélérée [Vc] |
| A3. Panneau « Build Your Ring » [D4] | Stone (4 pierres « Handpicked Stones » choisies pour la monture, curseur de carats) → Size → Engraving → Review ; « Ring Details Current Est. » [Vc] |
| B1. Pierre d'abord : recherche synthétique (280 418 résultats) ou naturelle [D7][D8] | Filtres et tri listés plus bas ; « Add to Ring » ou « Purchase Loose » ; liste de favoris [Vc] |
| B2. Fiche pierre [D9][D10] | Carats, taille, couleur, pureté, certificat, « Details & Dimensions », « Add to Ring », « Purchase Loose », dates de livraison [Vc] |
| C. Sur mesure [D13] | Formulaire (3 pièces jointes, 250 Mo) → devis sous 24 h → lien de commande → rendus 3D « within a few days », 3 versions au plus → fabrication, 2 à 3 semaines [Vc] |
| D. Panier `/cart`, paiement | Non atteints : site bloqué. Le panier n'est pas interdit par robots.txt [V][D1]. « Continue as a Guest » relevé sur une fiche [Vc][D10] |

## Contrôles vérifiés

Aucun contrôle actionné. Les libellés viennent du texte des pages ; l'effet décrit est celui que la page annonce.

| Libellé | Type | Effet annoncé (non observé) | Prix | État |
|---|---|---|---|---|
| **Page de défi Cloudflare [D2]** | | | | |
| Cloudflare ; Privacy ; témoin « Verifying... » | liens, vérification | Site et politique de Cloudflare ; vérification du visiteur | — | Relevés par controls.cjs, non actionnés (contournement exclu) [V] |
| **En-tête et menus [D6][D2]** | | | | |
| ENGAGEMENT, WEDDING BANDS, JEWELRY, OUR STORY, LEARN, MORE, SHOP BLACK FRIDAY | menus | Sous-menus (pierres, formes, styles, métaux, guides, journal) | — | Non testé : blocage |
| Search the store ; Suggestions ; Trending | champ, liens | Recherche ; liens « test5 », « test3 », « test2 », « test4 » (voir Défauts) | — | Lu [Vc] |
| WISH LIST (0) ; SHOPPING BAG (0) | icônes | Favoris ; panier latéral (« Your bag is empty ») | — | Non testé : blocage |
| Call Us / Place Order on Call ; Text Us ; Schedule an Appointment | liens | 1-888-492-3456, appel ou SMS ; visio gratuite de 30 min | — | Numéro relevé [Vc] ; rendez-vous non pris (règles) |
| Chat (« we're online! ») | bouton | Conversation | — | Non ouvert (règles) |
| Diamond 4Cs in 4 minutes ; Watch a Short Film | vidéos | Vidéo pédagogique ; film de marque | — | Non testé : blocage |
| Bandeau défilant | texte | « FREE ENGRAVINGS • $200 (ou $250) TOWARDS NEXT PURCHASE • 60-DAY RETURNS • LIFETIME CARE » | — | Lu [Vc][D9] |
| **Liste des montures [D6]** | | | | |
| Shape (10) ; Metal (5) ; Style (8) | filtres | Filtrent les 73 montures | — | Non testé : blocage |
| Best selling ; Price low/high ; Reset Filters ; All Settings / Shortlist | tri, boutons | Tri ; montures enregistrées | — | Non testé : blocage |
| **Fiche monture, ex. Asha [D4]** | | | | |
| Vignettes : face, angle, profil, « lifestyle », bague montée, écrin ; « video cover » (Dottie) [D5] | galerie | Photos ; une vidéo sur certaines fiches | — | Non testé : rendu inconnu |
| Shape (11 au plus) | boutons | Change la forme, le titre de la page et les photos (adresse `?attribute_pa_shape=princess-cut`) | Total inchangé dans l'extrait (13 240 $) | Lu [Vc] |
| Metal (8) | boutons | Choix du métal | Plage 1 080 – 1 480 $ | Non testé : blocage |
| Size : 3 à 10 au quart, « Show All Sizes », « Not Sure » | liste | Taille US | Gratuit au quart [D14] | Non testé : blocage |
| Engraving : Custom / No Engraving | choix | « ADD COMPLIMENTARY ENGRAVING (optional) » | Gratuit | Non testé : blocage |
| Add to Bag \| 4 640 $ | bouton | Ajout au panier | Total monture + pierre | Non testé : blocage |
| « 0% APR or as low as $71 /mo with Affirm. See if you qualify » (Dottie) [D5] | lien | Simulation Affirm | — | Non testé : blocage |
| Shipping & Delivery | tableau | « Nov 23 - 25 Standard (Free) », « Nov 19 - 21 Rushed » ; « Need it sooner? Contact us » | Accéléré : 45 $ [D13] | Lu [Vc] |
| Product Details ; Craftsmanship | onglets | Hauteur 1,8 mm, largeur 2 mm, confort, « Two-Piece Casting », lieu de fabrication | — | Lu en partie [Vc] |
| Finish the Look | liens | Alliance assortie (Asha Band, 980 $) | — | Non testé : blocage |
| Badges « Insured Shipping », « Free Redesign », « 60 Day Returns », « This Ring Gives Clean Water » | textes | Engagements de service | — | Lu [Vc] |
| **Panneau « Build Your Ring » [D4]** | | | | |
| Stone ; Size ; Engraving ; Review ; Back | étapes | Parcours en 4 étapes, récapitulatif « Review the details of your one-of-a-kind ring » | — | Non testé : blocage |
| Carat Weight : 0,5 / 1,0 / 1,5 / 2,0 / 2,5 / 3,0 ct | curseur | « Drag to compare prices across stones » | Prix des 4 pierres | Non testé : blocage |
| Compare Weights ; See true size on hand | boutons | Comparaison des poids ; taille réelle sur une main | — | Non testé : rendu inconnu (photo ou superposition) |
| Lab Diamond ; Natural Diamond ; Moissanite ; Gemstone | cartes | Pierre choisie par les gemmologues pour la monture ; « Stone details » | 4 880 $ ; 44 800 $ ; 1 299 $ ; 680 $ (voir Défauts) | Lu [Vc] |
| Symboles de gravure ❤ ✝ ∞ ✡ ☪ ⋅ | boutons | Insertion d'un symbole | — | Non testé : blocage |
| ADD TO BAG | bouton | Ajout au panier | — | Non testé : blocage |
| **Recherche de pierres [D7][D8]** | | | | |
| SHAPE (Standard / Antique) ; CARAT ; CUT ; COLOR (White / Fancy) ; CLARITY ; PRICE | filtres, curseurs | Listes complètes plus bas | — | Non testé : blocage |
| Advanced Filters : Depth, Table, Ratio, Length, Symmetry, Polish, Fluorescence, Certified by ; « More info » | filtres, infobulles | Idem ; explication de chaque critère | — | Non testé : blocage |
| Sort by (prix, carats, croissant ou décroissant) ; Reset ; View Results | tri, boutons | — | — | Non testé : blocage |
| Cœur ; All Stones / Shortlist | boutons | « Tap the heart on any stone to save it here and compare side by side » | — | Non testé : blocage |
| Add to Ring ; Purchase Loose ; Browse all stones ; Talk to a gemologist ; Browse Settings | boutons, liens | Pierre vers la monture ; pierre seule ; retour, contact, montures | — | Non testé : blocage |
| **Fiche pierre [D9][D10]** | | | | |
| Details & Dimensions ; Certificate (IGI, GCAL, GIA) | onglet, texte | Mesures ; rapport de laboratoire | — | Non testé : blocage |
| Size 0,5 à 3,0 ct ; Shape (naturel choisi pour vous) [D10] | listes | Pierre choisie après commande, vidéo et certificat envoyés par courriel | 1 980 – 64 800 $ | Lu [Vc] |
| **Autres pages** | | | | |
| SUBMIT YOUR DESIGN ; formulaire du sur mesure [D13] | lien, formulaire | Devis sous 24 h | — | Non rempli (règles) |
| Get Your Kit [D20] | quiz, formulaire | Baguier gratuit, 5 à 7 jours ouvrés, vidéo par code QR | Gratuit | Non rempli (règles) |
| See Your Ripple Effect [D19] ; Ring Resize (Order ID, Billing Email) [D16] | champs | Puits financé (GPS, photo) ; demande de mise à taille, gratuite, port payé par le client | — | Non testé (aucune commande) |
| Lifetime Extended Warranty [D16] | produit | Extension de garantie | 1 000 $ | Non testé : blocage |

Non relevés faute d'accès : partage, comparaison de montures, zoom, rotation 360° d'une bague, essayage AR, prix exact après chaque choix de métal.

## Options disponibles

- **Formes** : constructeur, 11 au plus (Round, Antique Round, Oval, Princess, Cushion, Emerald, Radiant, Pear, Heart, Marquise, Asscher), selon la monture : Katherine 3, Gabrielle 2, Dottie 7 [Vc][D4][D5].
  - Recherche « Antique » : Old Mine Cushion, Old Mine Oval, Old Euro, Dutch Marquise, Old Mine Marquise, Hexagon, Kite, Rose, Criss Cross, Moval, Portugese, Trillion, Other [Vc][D7].
- **Métaux** : 8 sur les fiches (or 14 et 18 k blanc, jaune, rose ; platine ; palladium) [Vc][D4]. 10 k sur demande ; 14 k par défaut ; griffes en or blanc 14 k ou platine [Vc][D14].
  - Alliages publiés : or blanc 14 k = 58,5 % or, 21 % cuivre, 8,5 % zinc, 12 % nickel ; 18 k = 75 % or, 10 % cuivre, 8 % nickel, 5 % zinc [Vc][D14].
- **Styles** : Side Stones, Halo, Vintage Inspired, Solitaires, Hidden Halo, Nature, Three Stone [Vc][D6].
- **Pierres du constructeur** : diamant synthétique, diamant naturel, moissanite, pierre de couleur ; poids de 0,5 à 3,0 ct [Vc][D4].
- **Recherche de pierres** [Vc][D7][D8] :
  - synthétiques : 0,5 à 40 ct ; taille Signature Ideal, Excellent, Very Good, Good ; couleur D à J ou « Fancy » ; pureté FL à SI2 ; prix de 50 à 2 000 000 $ ; certificats GIA, IGI, GCAL ;
  - naturels : 0,5 à 20 ct, sans « Signature Ideal », GIA seulement ;
  - avancés : profondeur, table, rapport L/l (1–3), longueur (1–25 mm), symétrie, poli, fluorescence (None à Very Strong).
- **Moissanite** « Forever One », incolore VVS, 10 formes (13 articles), dès 599 $ (radiant 699 $) [Vc][D11].
- **Pierres de couleur** : saphirs synthétiques (bleu, blanc, rose, pêche), alexandrite, rubis, émeraude synthétiques, dès 580 $ ; saphirs naturels dès 830 $ (blanc), 1 120 $ (bleu) ; approvisionnement sur demande [Vc][D12].
- **Tailles** : US 3 à 10 au quart, sans supplément. Hors plage : « custom size », environ 40 $, et non retournable [Vc][D4][D14]. Conversion des tailles étrangères faite par l'atelier [Vc][D14].
- **Gravure** : gratuite ; symboles ❤ ✝ ∞ ✡ ☪ ⋅ [Vc][D4]. Police au choix, image ou écriture manuscrite : petit supplément ; empreinte digitale ; regravure après mise à taille 20 $ [Vc][D13][D16].

## Prix, délais, retours, garanties

- **Affichage** : monture seule (« Setting Only », ex. Asha 1 080 – 1 480 $), pierre « priced separately », total sur le bouton [Vc][D4]. Montures dès 980 $ (Maeve) [Vc][D18].
  - Exemples de totaux : Asha + 1,0 ct synthétique « Hearts and Arrows » 4 640 $ ; + 3,0 ct 13 240 $ ; Gabrielle + 1,0 ct moissanite 2 778 $ [Vc][D4][D5].
  - Avec la monture à 1 080 $ (or blanc 14 k sélectionné), la pierre de 1,0 ct coûte environ 3 560 $ [I]. Dans la recherche : 1,01 ct émeraude E VS1 IGI 1 610 $ ; 2,08 ct rond E VS1 IGI 2 330 $ ; 3,60 ct E VVS1 IGI 7 830 $ ; 2,07 ct F VS1 GCAL 4 730 $ [Vc][D9]. La pierre présélectionnée paraît plus chère [I] (formes et dates différentes).
- **Aucune décomposition** du prix (métal, façon, marge) [I]. Promesse : « We compare our prices to the top jewelers every week » ; alignement de prix « for any reason » refusable [Vc][D2][D15]. « We never mark-up to mark down » [Vc][D18].
- **Promotion du 15/11** : cadeau jusqu'à 1 500 $ dès 3 000 $ d'achat, jusqu'à 3 000 $ dès 6 000 $ ; carte-cadeau de 200 $ ou 250 $ par bague de fiançailles (voir Défauts) [Vc][D18][D15].
- **Délais** :
  - dates sur chaque fiche, standard gratuite ou accélérée ; accélération à 45 $ ; en moyenne 2,5 à 3 semaines [Vc][D4][D13] ;
  - sur mesure : rendus en 3 jours ouvrés, fabrication en 14 jours, réception en 14 à 18 jours (article de 2020), ou 2 à 3 semaines après validation (page actuelle) [Vc][D13] ;
  - bagues prêtes à expédier en 2 jours [Vc][D6].
- **Livraison** : FedEx Express assuré, gratuit aux États-Unis et au Canada ; ailleurs 45 $ (Royaume-Uni, Australie, Nouvelle-Zélande), taxes payées par le client à l'import [Vc][D14][D9]. Retrait en agence FedEx, signature exigée [Vc][D17].
- **Retours** : 60 jours après la livraison, 2 retours ou échanges par client et par an, sans frais de remise en stock [Vc][D15][D17].
  - Exclus : gravures personnalisées, empreintes, tailles hors plage, modifications, pierres sourcées spécialement, créations ; ni annulation ni échange [Vc][D16].
  - Les cadeaux promotionnels doivent revenir intacts, sinon leur valeur est déduite [Vc][D15].
- **Garantie « Perfect Yes »** (accueil) [Vc][D2][D15] :
  - une refonte gratuite de la monture dans l'année ; on paie ou l'on reçoit la différence ;
  - date de livraison confirmée par écrit, sinon 250 $ et une bague de remplacement pour la demande ;
  - selon les conditions, valable seulement pour les commandes du 25/06 au 30/09/2026.
- **Garantie** : à vie, défauts de fabrication ; soins gratuits à vie (mise à taille, rhodiage, polissage, serrage, inspection), port à la charge du client ; réparations hors garantie « at cost » ; garantie annulée si un tiers intervient [Vc][D16]. Extension payante (Extend, ou Mulberry sur la fiche à 1 000 $) [Vc][D16][D17].
- **Paiement** :
  - Affirm de 0 à 36 % sur 12, 24 ou 36 mois, 12 mois à 0 % ;
  - acompte de 50 % puis réservation, ou deux cartes (par téléphone ou courriel) ; virement −1,5 % [Vc][D14] ;
  - acompte exigé avant les images du sur mesure complet [Vc][D18] ;
  - pas de taxe de vente hors du Texas [Vc][D13, 2020] ; marques de cartes non relevées.
- **Certificats** : naturels GIA ; synthétiques IGI, GCAL ou GIA (fiches) [Vc][D9][D8]. Naturel « choisi pour vous » : poids au moins égal à la commande, jusqu'à +0,04 ct [Vc][D10].
- **Libellé du synthétique** : « Lab Created Diamond » (fiches), « Lab Diamond », « Lab Grown Diamonds » (recherches). Le guide cite aussi « Man Made » et « Synthetic Diamonds » [Vc][D9][D7][D21].
- **Langues et devises** : anglais et dollar seulement [Vc][D14][D15].

## Confiance et service

- **Fabrication** : aux États-Unis (New York, Long Island, Orange County en Californie), lieu indiqué par fiche dans l'onglet « Craftsmanship » [Vc][D14]. Chaque bague est inspectée avant l'envoi [Vc][D17]. Métaux recyclés ; « never Russian diamonds » [Vc][D13]. Écrin en hêtre de Nouvelle-Zélande [Vc][D4].
- **Preuves** :
  - vidéos 360° grossies des pierres [Vc][D17] ;
  - photos ou vidéos d'une bague sur demande [Vc][D14] ;
  - rendus 3D « 1:1 digital model » en sur mesure, 3 versions au plus [Vc][D13][D14].
  - Aucune photo ni vidéo d'atelier relevée, aucun suivi d'étapes de fabrication [I].
- **Impact suivi par numéro de commande** : chaque achat finance l'eau d'une personne (charity: water). Avec le numéro de commande : pays et région dans les premiers mois, avancement du forage, puis coordonnées GPS et photo du puits vers 18 mois [Vc][D14][D19].
  - Compteurs : 22 944 personnes, 77 puits, 14 pays [Vc][D19]. La liste qui suit compte 15 pays [Vc][D19].
- **Contact** : téléphone et SMS 1-888-492-3456, chat, care@doamore.com, visio de 30 min ; du lundi au vendredi, le week-end par courriel seulement [Vc][D17][D6]. Baguier gratuit [Vc][D20].
- **Avis** :
  - sur le site : « ★★★★★ 5.0 · 22,000+ happy customers » [Vc][D18] ;
  - Trustpilot 4,2 sur 39 avis [T][T1] ; Google 4,9 sur 92 (données du 23/10/2026) [T][T2] ; The Knot 5,0 sur 63 [T][T3].
  - Plainte (2 étoiles) : pierre vendue entre-temps, remplacée par une autre (procédé HPHT, sans « Hearts and Arrows ») sans le dire [T][T1].
  - Avis positifs : le fondateur appelle après la commande et propose une meilleure pierre [T][T1].
- **Entreprise** : fondée en 2013 par Krish Himmatramka, ingénieur [T][T4]. Accord dans l'émission Shark Tank (18/03/2022, 15 % à Daniel Lubetzky, dont 3 % pour la cause) [Vc][D22]. Équipe de 9 personnes ; Affirm : +177 % de revenus sur un an, panier moyen +7,1 % [T][T5]. Chiffre d'affaires estimé à 5 M$ par un annuaire, non vérifié [T][T4].

## Points forts à retenir pour JR Diamond

1. **Constructeur sur la fiche du modèle**, 4 étapes, avec 4 pierres présélectionnées pour cette monture et un curseur de carats « Drag to compare prices » [Vc][D4]. Pour JR : sur la fiche de ring-001, quelques pierres filmées choisies par l'atelier plutôt qu'une recherche de 280 000 pierres [I].
2. **Symboles de gravure en un clic, dont ✡** [Vc][D4]. Pour JR : symboles (Maguen David, Hamsa) en plus de la gravure en hébreu déjà possible chez l'atelier [I].
3. **Suivi par numéro de commande** : pays, avancement, coordonnées GPS et photo du puits [Vc][D14][D19]. Pour JR : la même page, avec les photos et vidéos de chaque étape de fabrication. Do Amore montre le puits, pas la bague en cours de fabrication [I].
4. **Sur mesure balisé** : devis sous 24 h, rendus 3D en quelques jours, 3 versions incluses, acompte avant les images [Vc][D13][D18]. Modèle pour le bijou de famille [I].
5. **Fiche technique tirée de la fabrication** : hauteur, largeur, confort, procédé (« Two-Piece Casting »), lieu de fabrication [Vc][D4][D14]. JR peut aller plus loin avec les cotes et le poids de métal du fichier CAO [I].
6. **Date de livraison sur chaque fiche**, standard gratuite ou accélérée (45 $) [Vc][D4][D13]. La promesse « par écrit, sinon 250 $ » rassure, à condition d'être tenue [Vc][D15].
7. **Taille au quart sans supplément, conversion des tailles étrangères, baguier gratuit avec vidéo** [Vc][D14][D20]. Pour JR : tailles israéliennes et françaises converties, déjà calculées dans le guide des tailles [I].
8. **Composition de l'or blanc publiée**, nickel compris [Vc][D14]. Répond à la question 61 posée à l'atelier (alliage de l'or blanc) [I].
9. **Paiement étalé** : Affirm (+177 % sur un an) et acompte de 50 % avec réservation [T][T5][Vc][D14]. En Israël, l'équivalent serait le paiement en plusieurs versements (`docs/PAIEMENT.md`) [S].
10. **Leçon des contradictions** : retours, port du retour, carte-cadeau et garantie diffèrent d'une page à l'autre (Défauts 2 à 5). Pour JR : une seule source pour chaque règle, reprise partout, comme `src/content` [I].

## Défauts observés

1. **Visiteurs bloqués** : défi Cloudflare sur l'accueil et le plan du site, depuis un centre de données [V][D2][D3]. Les acheteurs derrière un VPN pourraient l'être aussi [S].
2. **Garantie « Perfect Yes » expirée mais affichée** : l'accueil et la page Black Friday la promettent (« Free redesign for all engagement rings, anytime within a year. Including custom! »). Les conditions, mises à jour le 22/10/2026, la limitent aux commandes du 25/06 au 30/09/2026 [Vc][D2][D18][D15].
3. **Retours contradictoires** [Vc] :
   - 30 jours sur `/do-amore-guarantee/`, 60 jours ailleurs [D16][D15] ;
   - « We don't pay for return shipping » [D16], mais « we pay the return shipping » [D2] et une étiquette gratuite aux États-Unis [D17] ;
   - taille hors plage au-delà de 9,0 [D16] ou de 10,0 [D14], alors que la fiche propose jusqu'à 10.
4. **Gravure « gratuite » qui supprime le droit de retour** : la fiche l'offre en option, mais une gravure personnalisée rend la bague « custom », non retournable [Vc][D4][D14][D16]. Rien ne prévient sur la fiche, d'après le texte lu [I].
5. **Carte-cadeau de 250 $ (bandeau) ou de 200 $ (conditions, page Black Friday)** ; le bandeau défilant dit l'un ou l'autre selon la page [Vc][D15][D18][D9].
6. **Libellés de test en ligne** : menu « Trending » avec « test5 », « test3 », « test2 », « test4 » [Vc][D6][D2].
7. **FAQ périmée** : diamants synthétiques « certified by Diamond Foundry » et « created in a lab in California », contre IGI, GCAL ou GIA sur les fiches [Vc][D14][D9].
8. **Alliage de l'or blanc 18 k** : 75 + 10 + 8 + 5 = 98 % [Vc][D14][I].
9. **Cartes de pierres incohérentes** dans le constructeur : mêmes 4 cartes et mêmes prix sur toutes les fiches lues ; une carte affiche « 1.0 Carat » et « 0.50 Carat » ; naturel à 44 800 $ face à « 0.50 Carat » (plage 1 980 – 64 800 $ [D10]) [Vc][D4][D5].
   - Possible état non interactif capté par le moteur de recherche [S]. La copie de la recherche affiche aussi « NaN Carat » et 350 $ pour chaque pierre [Vc][D7], sans doute rendu sans JavaScript [S].
10. **Chiffres qui divergent** [Vc] :
    - « hundreds of thousands of happy customers » [D17] contre « 22,000+ » [D18] ;
    - horaires de 8 h à 17 h [D17] ou de 8 h 30 à 17 h 30 [D6] (heure du Centre) ;
    - « 14 nations » pour une liste de 15 pays [D19].
11. **Pierre vendue après la commande et remplacée sans tout dire** (avis Trustpilot) [T][T1].

## Temps d'apparition du visuel principal

Non mesurable : aucune page du site n'a été servie au navigateur, seule la page de défi s'est affichée (ordinateur) [V].

## Limites de l'audit

- **Statut bloqué** : une visite de l'accueil, refusée (403). Pas de second essai, pas d'affichage iPhone : changer d'identité de navigateur après un blocage est exclu par les règles. Un curl du plan du site (autorisé par robots.txt) a reçu le même défi.
- **Aucun contrôle actionné** : effets réels sur le prix et l'image, rendu du « true size on hand », galerie, panier et moyens de paiement restent inconnus. Le tableau des contrôles reprend ce que le texte annonce.
- **Sources indirectes** : extraits du moteur Parallel (publications de 2017 à novembre 2026 ; pages actuelles au bandeau Black Friday 2026). La lecture d'une page de doamore.com par un service tiers a été refusée par le système d'autorisation de la session : aucune autre tentative, Firecrawl non utilisé sur ce domaine. Non revérifiés : prix du jour, dates de livraison, état réel de la garantie « Perfect Yes » après le 30/09/2026.
- Captures : 1 (page de défi), dans `scratchpad/audit/us/do-amore/`, avec robots.txt et la réponse du plan du site.

## Sources (lues le 15/11/2026)

- [D1] https://www.doamore.com/robots.txt (curl, 200 ; WooCommerce, `/da-search/` interdit)
- [D2] https://www.doamore.com/ (navigateur : 403 Cloudflare, Ray ID a5af1aee1dcde82c ; texte : extraits, et copies `/shop`, `/rings`)
- [D3] https://www.doamore.com/sitemap_index.xml (curl : 403, « Just a moment... »)
- [D4] https://www.doamore.com/engagement-rings/classic-solitaire-ring?aff_stone=1 · `?aff_stone=5` · `?aff_stone=5&attribute_pa_shape=princess-cut`
- [D5] https://www.doamore.com/engagement-rings/ : `cathedral-solitaire-engagement-ring?aff_stone=4` · `engraved-engagement-ring?aff_stone=2` · `simple-petal-solitaire-engagement-ring?aff_stone=2` · `modern-pave-engagement-ring/` · `floating-diamond-ring` · `bezel-engagement-ring`
- [D6] https://www.doamore.com/engagement-rings (liste, menus, panier latéral)
- [D7] https://www.doamore.com/lab-created-diamonds · `/lab-grown-diamonds/` (et `heart-cut/`, `radiant-cut`, `asscher-cut`, `cushion-cut`, `emerald-cut`) · `/lab-created-diamonds/old-mine-cut-lab-diamonds`
- [D8] https://www.doamore.com/diamonds · `/natural-diamonds/` · `/diamonds/round-cut/`
- [D9] https://www.doamore.com/lab-grown-diamonds/ : `25-2214127-012` · `19-866339` · `7-1737354` · `27-25de72e21/` · `7-1726433` · `36-1866748`
- [D10] https://www.doamore.com/gemstones/diamond/natural-diamond/
- [D11] https://www.doamore.com/moissanite · `/resource/forever-one-moissanite` · `/moissanite-rings-read-before-you-buy`
- [D12] https://www.doamore.com/gemstones · `/gemstones/sapphires` · `/lab-grown-gemstones` · `/lab-grown-gemstones/sapphires/` · `/gemstones/asscher-lab-created-blue-sapphire/` · `/gemstones/lab-created-blue-sapphires/` · `/gemstones?attribute_pa_shape=pear-cut`
- [D13] https://www.doamore.com/custom-rings/ · `/design-a-custom-ring` · `/design-your-custom-engagement-ring-6-easy-steps` (2020) · `/engagement-rings/customized-ring`
- [D14] https://www.doamore.com/faq (copies aussi à `/pages/faq` et `/f`)
- [D15] https://www.doamore.com/terms-conditions/ (« last updated on October 22, 2026 »)
- [D16] https://www.doamore.com/do-amore-guarantee/ · `/warranty/` · `/free-ring-resizing/` · `/60-day-returns/` · `/extend-warranty/lifetime-extended-warranty` · `/ring-resize`
- [D17] https://www.doamore.com/how-we-support-you · `/get-in-touch`
- [D18] https://www.doamore.com/black-friday/ · `/black-friday/engagement-rings/` · `/black-friday/bridal-sets` · `/why-not-to-buy-a-ring-on-black-friday/`
- [D19] https://www.doamore.com/impact · `/charity-water-our-clean-water-non-profit-partner/` · `/your-ethical-jeweler-how-do-amore-makes-an-impact` · `/worlds-most-ethical-engagement-ring`
- [D20] https://www.doamore.com/find-the-perfect-fit · `/how-to-get-ring-size` (11/11/2026)
- [D21] https://www.doamore.com/resource/lab-diamonds · `/lab-diamonds-vs-natural-diamonds` · `/lab-diamond-engagement-rings/1-carat-lab-diamond-ring?aff_stone=1`
- [D22] https://www.doamore.com/the-only-shark-tank-engagement-and-wedding-ring-company · `/meet-the-do-amore-team/`
- [T1] https://www.trustpilot.com/review/doamore.com
- [T2] Fiche Google Maps « Do Amore » (place_id ChIJ62KrKoXHQIYRYHc-lRbKpqw), données du 23/10/2026
- [T3] https://www.theknot.com/marketplace/do-amore-houston-tx-675509
- [T4] https://linkedin.com/company/do-amore · http://prospeo.io/c/do-amore (estimations d'annuaire) · https://www.jckonline.com/editorial-article/how-i-got-here-krish-himmatramka (24/01/2024)
- [T5] https://woocommerce.com/posts/do-amore-affirm-customer-story (22/10/2025)
