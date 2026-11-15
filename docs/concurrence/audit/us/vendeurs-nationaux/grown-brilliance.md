# Audit : Grown Brilliance (États-Unis, vendeurs nationaux)

- **Site** : Grown Brilliance, https://www.grownbrilliance.com. Exploitant : AJS Creations, Inc. / Grown Brilliance, Inc., 579 5th Avenue, New York [Vc][G22][T7]. Page de départ : https://www.grownbrilliance.com/design-your-lab-grown-diamond-ring (« Design Your Engagement Ring », monture d'abord).
- **Date** : 15/11/2026. **Appareils** : Chromium (Playwright) 1366×900, en-US, depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué**. Une seule visite (20 h 57 UTC) : HTTP 403, titre « Just a moment... », page Cloudflare « Performing security verification », témoin encore sur « Verifying... » après 5 s, Ray ID a5b12ab13e4b79d9 [V][G2]. Conformément aux règles : aucun nouvel essai, aucun contournement.
- **Ce qui a été lu** : robots.txt (200 au curl) [V][G1] ; le texte des pages du site tel que le restituent les extraits du moteur de recherche Parallel, sans contacter le site ; des tiers (Trustpilot, BBB, JCK, deux bancs d'essai affiliés).
  - robots.txt : `Crawl-delay: 20` ; interdit aux robots toute adresse à paramètres (`/*?*`), `/shoppingcart`, `/checkout`, `/login`, `/diamond_search_result_ajax` ; autorise nommément GPTBot, CCBot, ClaudeBot et anthropic-ai [V][G1]. Le panier n'aurait donc pas été automatisé, même sans blocage.
- Complète la ligne Grown Brilliance de `docs/concurrence/2026-11-15_etats-unis.md` : défi Cloudflare confirmé dans le navigateur ; constructeur décrit (4 entrées, 3 étapes). Lien avec la fiche Clean Origin : même propriétaire depuis août 2024 [T5].
- **Société** [T] : fondée en 2021 par Akshie Jhaveri, dirigée par Tejas Shah ; rachat des actifs de Clean Origin et d'Aether Diamonds (août 2024) [T5] ; « 17 stores across the U.S. » [Vc][G17] ; environ 130 M$ de ventes par an selon la fondatrice (déclaration non vérifiée) [T6].
- **Légende** : [V] vu directement le 15/11/2026 (navigateur ou curl) ; [Vc] texte du site lu dans un extrait de recherche, non actionné (date de copie inconnue : prix, dates et promotions peuvent dater de quelques semaines ou mois) ; [T] tiers ; [I] inféré ; [S] supposé. Prix en dollars US, tels qu'affichés.

## Parcours

Reconstitué d'après le texte des pages, sans navigation : ordre et effets non vérifiés.

| Étape | Options |
|---|---|
| 0. Menu « Design Studio » [G2] | START WITH SETTING ; START WITH A DIAMOND ; Design your gemstone ring ; GB Custom Engagement Rings. Slogan : « as easy as 1+2=3 » [Vc] |
| 1. Setting (page de départ) [G2] | Barre « 1 Setting, 2 Diamond, 3 Ring » ; « Choose and customize the setting » ; grille des montures absente de l'extrait (chargée par script [I]). D'après les récapitulatifs [G6], une monture combine un dessin de corps (French Pave, Graduated, Floating Marquise…), une tête (Classic Prong, Halo, Hidden Halo) et un métal (or 14 k blanc ou jaune, platine relevés) [Vc] |
| 2. Diamond [G3] | Recherche de pierres synthétiques : 11 formes, carats, prix, couleur, taille, pureté, Quick Ship, laboratoire, 6 filtres avancés, quiz, comparateur, vue vignettes ou liste, 11 tris ; « Diamonds Available: 101,238 » avec 3 filtres actifs (site saoudien) [Vc][G6] |
| 2b. Fiche pierre [G5] | Galerie (5 vues, dont deux schémas cotés), prix, « Add To Ring », « Add To Bag », date d'expédition, tableau des caractéristiques, échelles pédagogiques, pierres similaires [Vc] ; vidéo 360° sur la plupart des pierres [T3] |
| 3. Ring (récapitulatif) [G6] | Total = monture + pierre ; taille de doigt (obligatoire) ; gravure gratuite ; alliance assortie NO / YES ; quantité ; « Add To Bag » ; date d'expédition ; mensualité Affirm ; liens « Change » (monture, pierre) et « View » (pierre) [Vc] |
| 4. Panier `/shoppingcart`, paiement | Non atteints : blocage, et chemin interdit aux robots [V][G1]. Le texte du site y place : date d'expédition estimée, saisie du code promo (« must be entered in My Bag »), gravure, plan Extend, UPS Next Day Air payant [Vc][G13][G15][G16][G12] |
| Variante A : bague prête [G7] | Style (largeur 1,8 ou 2,2 mm, ou tête Standard / Low), métal, forme (11), poids (½ à 8 ct), qualité (2 niveaux), taille, gravure gratuite, « Ring Enhancer » en option, « Add To Bag » [Vc] |
| Variante B : pierre de couleur [G9] | 2 étapes : « Gemstone and Setting », puis « Ring » ; ex. aigue-marine synthétique 7 × 7 mm sur monture « Lily Double Twist » [Vc] |
| Variante C : GB Custom (sur mesure) [G10] | Envoi d'un croquis ou d'une photo sur un portail → rendus 3D sous 48 h → validation → pièce « in as little as 14 days » ; minimum 1 500 $ [G21] ; retour en avoir seulement [Vc] |
| Variante D : boutique ou visio [G17] | « Book Virtual Appointment », « Book In-Person Appointment », 18 adresses dont Nassau [Vc] |

## Contrôles vérifiés

Aucun contrôle actionné : seuls les deux liens de la page de défi ont été vus. Les autres libellés viennent du texte des pages ; l'effet décrit est celui que la page annonce.

| Libellé | Type | Effet annoncé (non observé) | Prix | État |
|---|---|---|---|---|
| **Page de défi Cloudflare [G2]** | | | | |
| Cloudflare ; Privacy ; témoin « Verifying... » | liens, vérification | Pages de Cloudflare ; vérification du visiteur | — | Relevés par controls.cjs, non actionnés [V] |
| **En-tête, menus, pied de page [G2][G13][G17]** | | | | |
| Bandeau « Choose up to 36 monthly payments, from 0% APR financing » ; « Free Shipping and Free Returns » | liens défilants | Pages financement et livraison | — | Non testé : blocage |
| Bandeau « Free matching band when you design your own engagement ring – limited-time. *See Terms » | lien | Alliance assortie offerte avec le constructeur | « $780 → Free » sur un récapitulatif [G9] | Lu [Vc][G4] |
| Menus Engagement, Wedding, bijoux, Gift Guide, Custom ; « Shop by Style », « Shop by Shape », guides | menus | Navigation | — | Non testé |
| Drapeau « United States » : Country (23), Currency, Language, « Update preferences », « All countries » | fenêtre (Glopal) | Pays, devise et langue | Prix « Delivered Duty Paid » hors États-Unis [G13] | Non testé |
| Contact Us : Support Center, Book Virtual Appointment, Book In-Person Appointment, Call, Chat, Email Us, Store Locator | menu | Aide, rendez-vous, +1-877-476-9627, conversation, formulaire, boutiques | — | Non ouverts (règles) |
| Stores ; Wishlist 0 ; My Account ; My Bag 0 ; Image Search ; Search | icônes | Boutiques, favoris, compte, panier latéral (« Your Bag is Empty! »), recherche par photo, recherche | — | Non testé ; compte exclu par les règles |
| Pied de page : About Us, Sustainability Report, Reviews, Warranty, Payment & Financing, Special Offers, GB Club, Track Your Order, Price Match Guarantee, GB 365, Accessibility Statement, Careers, Affiliates | liens | Pages lues pour la plupart (voir Sources) | — | Non testé |
| « Get on the Guest List » (e-mail) ; « Cookies Settings » ; « Accept All Cookies » | champ, boutons | Inscription (« 10% off your first order ») ; cookies | — | Non remplis (règles) |
| **Étape 1 « Setting » (page de départ) [G2]** | | | | |
| Barre 1 Setting, 2 Diamond, 3 Ring | étapes | Progression ; « Change » revient à l'étape | — | Non testé |
| Grille et personnalisation des montures (dessin, tête, métal) | vignettes, boutons | Choix de la monture avant la pierre | Monture seule : 1 315 à 2 130 $ relevés [G6] | Non vu : absent de l'extrait |
| FAQ dépliable ; 4 pavés Competitive Pricing, Free Shipping, Free Returns, Lifetime Warranty | accordéon, liens | Texte ; pages de politique | — | Non testé |
| **Étape 2 : recherche de pierres [G3][G4]** | | | | |
| Shape (11) ; bulle « ? » sur chaque filtre | boutons, aide | Filtre par forme ; définition du critère | — | Non testé |
| Carat (min, max) ; « Carat Hand : Actual Diamond Size 1.00 carat on Hand » (1,00 à 7,00 ct) | champs, curseur | Filtre ; taille réelle de la pierre sur une main | — | Non testé |
| Price (min, max) ; Color ; Cut ; Clarity (avec « Color Chart », « Cut Grade Chart », « Clarity Chart ») | champs, curseurs, liens | Filtres ; tableaux explicatifs | « All of our prices are in US$ » | Non testé |
| « What matters to you most? » Price / Quality / View All | boutons | Préréglage du tri ou des filtres [I] | — | Non testé |
| Quick Ship ; Report : IGI, GIA | cases | Pierres expédiées en 1 à 2 jours ouvrés ; laboratoire | — | Non testé |
| More Filters : L:W Ratio, Polish, Table %, Fluorescence, Depth %, Symmetry | curseurs | Filtres avancés | — | Non testé |
| Reset Filters ; « Filters 0 » ; View Diamonds ; Search ; champ de recherche en langage courant [T3] | boutons, champ | Remise à zéro ; lancer la recherche | — | Non testé |
| « Take a QUIZ » : forme (4, « View all Shapes ») → budget (curseur) → Price / Quality ; Next ; Previous Question ; « Retake the Quiz! » | assistant en 3 questions | « Here are a few options » | Budget de 395 à 91 285 US$ (site saoudien) [G6] | Non testé |
| Visual / List ; Sort (Quick Ship, puis prix, carat, couleur, pureté, taille, croissant ou décroissant) | bascule, liste | Vignettes ou tableau ; 11 tris | — | Non testé |
| Par pierre : Compare ; Wish ; Details (ou Choose) ; « Compare Diamonds (0) » ; Load More | case, boutons | Comparateur ; favoris ; fiche ; suite de la liste | Prix par ligne | Non testé |
| Fenêtre « This diamond comes with a GIA or IGI Certificate » : Live Chat, Email Us, Call Us | fenêtre | Renvoie au service client pour obtenir le certificat | — | Lu [Vc] ; voir Défauts |
| Bandeau Aether Diamonds (« made from 100% air-captured carbon ») | lien | Page pédagogique | — | Non testé |
| **Fiche pierre [G5]** | | | | |
| Galerie 1 à 5 : photos, schémas cotés (table, profondeur, longueur, largeur) ; vidéo 360° [T3] | médias | Inspection de la pierre | — | Non testé |
| Add To Ring ; Add To Bag ; Wish | boutons | Vers l'étape monture ; pierre seule au panier ; favoris | 820 $ (1,08 ct rond D VVS1) à 5 375 $ (3,24 ct radiant) relevés | Non testé ; panier exclu |
| « Based on availability, we may issue a replacement diamond of equal or better quality. Details » | mention, lien | Sur les pierres « Made-to-Order » : la pierre livrée peut être une autre | — | Lu [Vc] ; voir Défauts |
| Estimated Ship Date (« In-Stock » ou « Made-to-Order », date) | affichage | Date d'expédition, pas de réception | — | Lu [Vc] |
| « No credit? Pay over time. Estimate Payment » ; « Earn 5% cashback… GB Club » ; FREE GIFT dès 2 000 ou 3 000 $ | liens, encart | Location-vente Katapult ; fidélité ; cadeau | — | Non testé |
| Drop a hint (fenêtre, « Send ») ; Book An Appointment ; Live Chat ; Email Us ; téléphone ; Free Shipping ; Free Returns | boutons, liens | Envoi d'un message à un proche ; contact ; politiques | — | Non ouverts (règles) |
| Échelles Carat (0,25 à 5,00 ct), Color (D à Z), Clarity, Cut ; « Learn More… » ; Similar Diamonds | repères, liens | Situe la pierre sur chaque échelle ; guides ; autres pierres | — | Non testé |
| **Étape 3 : récapitulatif « Ring » [G6]** | | | | |
| Galerie : 4 images de la monture + 1 de la pierre ; Lighter / Darker | médias, 2 boutons | Images séparées, pas de vue composée [I] ; teinte de peau ou luminosité [S] | — | Non testé |
| Size (33 valeurs, obligatoire) ; Find Ring Size ; message « Please select ring size » | liste, lien | Taille US 3 à 11 au quart ; guide | Sans effet relevé | Non testé |
| Add Engraving | bouton | Texte gravé (longueur et polices non lues) | « Price: Free » | Non testé |
| Matching Band NO / YES ; Matching Band Info ; Qty 1 ou 2 | bascule, lien, liste | Ajoute l'alliance assortie | + 860 à 1 430 $ | Non testé |
| Add To Bag ; Wish | boutons | Panier ; favoris | Total 2 840 à 4 415 $ relevés | Non testé ; panier exclu |
| « Starting at US$110 /mo or 0% APR with Affirm. Prequalify now » | lien | Simulation Affirm | Mensualité sous le prix | Non ouvert (formulaire de crédit) |
| « Sorry, this diamond is no longer available, click here to choose new diamond » | message, lien | Sur un récapitulatif dont la pierre est vendue : retour à l'étape 2 | — | Lu [Vc] |
| Ring and Diamond Information (référence, pierre, « Ring Details », « Setting Details ») | tableau | Nombre, poids, couleur et pureté des pierres d'accompagnement ; largeur moyenne | — | Lu [Vc] |
| **Fiche d'une bague prête, ex. Vera [G7]** | | | | |
| Galerie : « product video », « product video 2 », 2 images ; légende « Shown with 3.00ctw Round center diamond » | médias | Vidéos et photos du modèle, pas toujours au poids choisi | — | Non testé |
| Style (1.8mm / 2.2mm ; Standard / Low Setting) ; Metal ; Shape (11) ; Carat ; Quality (Good E, VS1 ; Best D, VVS) | boutons | Chaque choix ouvre une autre fiche : « results in a full page refresh » | 7 ct ovale E-VS1 : 6 095 $ (or 14 k blanc), 6 895 $ (platine) | Non testé |
| Size ; Find Ring Size ; Add Engraving (« Price: Free ») ; Add To Bag (2 fois) | liste, boutons | Comme à l'étape 3 | — | Non testé |
| Add-On : Ring Enhancer, « View Details » | option | Ajoute un anneau d'habillage | + 2 655 ou 2 825 $ | Non testé |
| Avis : note, « AI Generated Review Summary », extraits | bloc | 4,47 / 5 sur 45 avis (Vera) ; résumé automatique | — | Lu [Vc] |
| **Listes de bagues [G8]** | | | | |
| In-Stock ; Filter (Shape 17, Metal 4, Stone 3, Price, Carat) ; Sort (4) ; raccourcis de style (6) ; « View N Designs » | filtres, tri | 208 à 354 modèles selon l'extrait | — | Non testé |
| Par vignette : Shape, Metal, Carat, Quality ; « Available Ring Size » (stock) | boutons | Change la variante affichée | Prix par variante | Non testé |
| **Services [G17][G18][G19]** | | | | |
| Digital Ring Sizer (étalonnage par carte bancaire ou règle, curseurs + / −) ; PDF imprimable | outil, fichier | Mesure d'une bague posée sur l'écran | Gratuit | Non testé |
| Visual Search : Take a Photo ; Upload an Image (JPEG ou PNG, 100 Ko à 2 Mo) | envoi d'image | Trouve des modèles proches d'une photo | — | Non testé (aucun envoi) |
| Track Your Order : Order Number, Order Billing Email, Submit | formulaire | État de la commande | — | Non rempli (règles) |
| Store Locator : BOOK AN APPOINTMENT ; « See what's in … store » | boutons, liens | Rendez-vous ; stock de la boutique | — | Non pris (règles) |
| WhatsApp ; essayage à domicile ; 3D ; AR ; essayage virtuel | — | Aucun de ces boutons dans les textes lus | — | Absents [Vc] |

## Options disponibles

- **Pierre centrale** : diamant synthétique seulement (« We are proud to offer only… lab grown diamonds ») [Vc][G15]. Formes du constructeur (11) : Round, Oval, Emerald, Princess, Radiant, Cushion, Pear, Marquise, Elongated Cushion, Heart, Asscher [Vc][G3].
  - Formes en plus dans le catalogue : Cushion Old Mine Cut, Dutch Marquise, Elongated Cushion Old Mine Cut, Moval, Multi-Shape, Round Old European Cut [Vc][G8].
  - Qualités : accueil « D to H », « FL to VS2 », « Ideal & Excellent », « from 0.90 to over 20.00 carats » [Vc][G4] ; un test d'août 2026 n'a trouvé que D à F, VS2 à IF, 1,00 à 20,07 ct [T3].
- **Pierres de couleur** : synthétiques seulement (aigue-marine au constructeur ; saphir, rubis, émeraude en sur mesure) [Vc][G9][G10].
- **Métaux** : or 14 k, or 18 k, platine ; or blanc, jaune ou rose ; or blanc rhodié ; pas d'argent en sur mesure [Vc][G15][G10]. Filtres : Platinum, Yellow Gold, Rose Gold, White Gold [G8].
- **Montures du constructeur** (relevées sur 7 récapitulatifs, liste incomplète) : corps French Pave, Graduated, Floating Marquise ; têtes Classic Prong, Halo, Hidden Halo ; largeur moyenne 1,8 mm [Vc][G6].
- **Styles du catalogue** : Solitaire, Side Stone, Halo, Vintage, Botanical, Bridal Sets, Gemstone, Hidden Halo, Three-Stone [Vc][G8].
- **Bague prête** : poids ½, 1, 1½, 2, 2½, 3, 3½, 4, 5, 6, 7, 8 ct (Vera) ; 2 qualités « Good – E, VS1 » et « Best – D, VVS » [Vc][G7][G8].
- **Tailles de doigt** : 3,00 à 11,00 au quart (33 tailles US) ; tableau de conversion Royaume-Uni, Europe, Japon, Pays-Bas [Vc][G6][G18]. **Gravure** : gratuite sur les fiches lues ; la FAQ dit « may be a small fee » [Vc][G7][G15].
- **Filtres des pierres** : forme, carat, prix, couleur, taille, pureté, Quick Ship, IGI ou GIA, rapport L/l, poli, table, fluorescence, profondeur, symétrie [Vc][G3].
- **Tris des pierres** : Quick Ship ; prix, carat, couleur, pureté, taille (croissant et décroissant) [Vc][G3]. **Tris des bagues** : Best Sellers, Newest, prix croissant ou décroissant [G8].
- **Pays** (sélecteur, 23) : Australie, Bahamas, Canada, Danemark, Allemagne, Espagne, Hong Kong, Irlande, Italie, Pays-Bas, Nouvelle-Zélande, Norvège, Autriche, Pologne, Portugal, Suisse, Singapour, Suède, Émirats, Royaume-Uni, États-Unis, Arabie saoudite, Qatar [Vc][G13]. **Ni la France ni Israël.**
- **Paiement** : cartes (Visa, Mastercard, Discover, American Express), PayPal, Venmo (mobile), Apple Pay, Google Pay, carte cadeau, virement au-delà de 500 $ ; Affirm ; Katapult ; Klarna hors États-Unis [Vc][G14].

## Prix, délais, retours, garanties

- **Affichage du prix** : au récapitulatif, total puis deux lignes, monture et pierre. Exemples : 3 610 $ = 1 780 $ + 1 830 $ ; 4 415 $ = 1 415 $ + 3 000 $ ; 4 035 $ = 1 315 $ + 2 720 $ [Vc][G6]. Les six totaux relevés égalent la somme des deux lignes [I]. Pas de détail métal, façon ou marge.
  - Monture French Pave à Hidden Halo en or 14 k jaune : 1 415 $ avec un rond de 3 ct comme avec un radiant de 4 ct ; le prix de la monture ne suit donc pas la pierre [I][G6]. Même corps en platine avec halo : 2 130 $ [Vc].
  - Sur mesure : « we will show you the setting price, the center diamond price, and the total price » ; aucun frais de dessin [Vc][G10].
- **Niveaux de prix** : Vera en platine, E-VS1 : 1 195 $ (½ ct), 1 595 $ (1 ct) ; D-VVS : 3 595 $ (2 ct) ; en or 14 k blanc, E-VS1, 2 ct : 2 295 $ [Vc][G7]. Un autre extrait donne 1 895 $ pour la Vera 2 ct : prix variables selon la date [Vc][G8].
  - Pierres seules : rond 2,02 ct D VS2 : 1 595 $ ; ovale 2,02 ct D VVS1 : 2 120 $ [Vc][G5]. Un comparatif d'août 2026 : 1 615 $ pour un rond 2,05 ct E VVS2, contre 422 $ (médiane de 5 pierres proches) chez Ritani [T3].
- **Promesse « GB365 »** : « priced right year-round, without ever going on sale » [Vc][G2]. Mais coupons de 20 % (membres) et 10 % (abonnés) du 26/10 au 16/11/2026, 10 % de bienvenue dès 1 000 $, 10 % « Heroes », cadeau dès 2 000 $, alliance offerte [Vc][G16][G7].
- **Garantie de prix** : pierres seules uniquement, avant l'achat, face à 9 enseignes nommées ; conseillers « NOT work on commissions » [Vc][G16]. **GB Club** : 5 % du montant en bon d'achat valable 1 an, clients américains seulement [Vc][G16].
- **Délais** : en stock, expédition en 1 à 6 jours ouvrés ; à la commande, « approximately three (3) weeks » ; date d'expédition estimée sur la fiche, au panier, au paiement et dans l'e-mail [Vc][G13]. Sur mesure : 2 à 4 jours pour le lien, puis 10 à 12 jours [Vc][G10].
  - Exemple tiers : fiche vue le 29/10/2026, expédition estimée le 25/11 [T4]. Calendrier des fêtes par catégorie : constructeur commandé au plus tard le jeudi 12/11 pour Thanksgiving [Vc][G13].
- **Livraison** : UPS 2nd Day Air gratuit, signature obligatoire, pas de boîte postale, adresse non modifiable ; Next Day Air payant (10 $ selon l'aide, qui cite FedEx) ; colis sans marque [Vc][G13][G21][G15]. International : FedEx gratuit, 2 à 5 jours, droits et taxes compris [Vc][G13].
- **Annulation** : aucune modification après paiement ; annulation d'une pièce à la commande sous 24 h ; sur mesure sous 2 jours ouvrés [Vc][G15][G10].
- **Retours** : 30 jours **à compter de l'expédition**, étiquette UPS gratuite, colis à remettre sous 7 jours après accord, contrôle jusqu'à 7 jours ouvrés [Vc][G11].
  - Bagues prêtes et bagues du constructeur : remboursées sur le moyen de paiement. High Jewelry, commandes spéciales et sur mesure : avoir seulement, un seul redessin, ensuite vente ferme [Vc][G11].
  - 100 $ retenus par certificat manquant ; pièce gravée, modifiée ou retaillée par un tiers : non reprise ; clause « Returns Abusers » [Vc][G11].
- **Garantie** : « Lifetime Manufacturing Warranty », non cessible ; exclut usure, griffes amincies, perte de la pierre centrale, chocs ; toute réparation par un tiers l'annule [Vc][G12]. Plan Extend payant (casse, perte de pierre), de 1 an à vie [Vc][G12].
- **Mise à taille** : 1 fois gratuite sous 30 jours après expédition (États-Unis) ; ensuite payante, 2 fois au plus ; aucune pour l'international [Vc][G12].
- **Financement** : Affirm jusqu'à 36 mois, de 0 à 36 % ; exemple du site : 2 000 $ → 69,57 $ par mois sur 36 mois à 15 % ; Katapult (location-vente, jusqu'à 3 500 $) [Vc][G14].

## Confiance et service

- **Libellé du synthétique** : « Lab Grown Diamond » dans chaque titre de produit ; aussi « Lab Created » et « ethically created diamonds » ; « Creation Method : Lab Grown » dans les fiches ; poinçon « LGD » à côté du titre du métal [Vc][G7][G2][G15].
- **Certificats** : IGI ou GIA pour toute pierre centrale du constructeur et dès ¾ ct ailleurs ; gravure laser du rondiste dès 0,70 ct [Vc][G15]. Le certificat ne s'ouvre pas en ligne : il faut le demander au service client [Vc][G3] ; constat identique d'un testeur le 31/08/2026 [T3].
- **Langues et devises** : 23 pays, contenu traduit et prix convertis par Glopal ; sous-domaines relevés en allemand, néerlandais, suédois, danois, italien ; pas de français, pas d'hébreu [Vc][G13][G18].
- **Avis** : par produit, avec résumé automatique qui cite aussi les critiques (« others complain about loose diamond ») [Vc][G7]. Trustpilot : 4,5 / 5, 1 016 avis, 79 % à 5 étoiles, 9 % à 1 étoile, réponse à 92 % des avis négatifs [T1]. BBB : non accrédité, note D+, 3 plaintes sans réponse [T2].
- **Service** : téléphone, conversation et e-mail tous les jours de 9 h à 22 h (heure de l'Est) ; rendez-vous vidéo ou en boutique ; 17 boutiques américaines et Nassau [Vc][G17]. Pas de WhatsApp ni d'essai à domicile relevés [Vc].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi par étapes dans les pages lues ; le suivi est un formulaire (numéro de commande, e-mail) [Vc][G19]. Sur mesure : rendus 3D, « video and multiple angle views », pas de maquette en cire [Vc][G10].
  - Lieu : « Most of our settings and diamonds are created overseas… Center stones are set in the United States » [Vc][G10] ; fabrication en Inde selon la presse [T8]. 260 machines de croissance en propre, selon le dirigeant [T5].
- **Environnement** : chaîne « Carbon Neutral » depuis le 21/04/2023 par achat de crédits carbone ; diamants Aether issus de CO2 capté [Vc][G20].

## Points forts à retenir pour JR Diamond

1. **Total = monture + pierre, sur deux lignes visibles.** Preuve : 6 récapitulatifs où la somme tombe juste [G6]. JR Diamond peut aller plus loin (métal au gramme, façon, sertissage), mais ce minimum est déjà attendu.
2. **Date estimée sur chaque fiche, avec l'état « In-Stock » ou « Made-to-Order »**, et un calendrier des dates limites de commande par catégorie avant les fêtes [G5][G13]. À transposer : « commandez avant le … pour Pessah ».
3. **Taille réelle sur la main dans le filtre des carats** (« Actual Diamond Size 1.00 carat on Hand », curseur 1 à 7 ct) [G3]. Utile pour le futur sélecteur de carat du solitaire.
4. **Quiz en 3 questions** (forme, budget, prix ou qualité) qui propose quelques pierres [G3]. Peu coûteux, adapté à un acheteur novice.
5. **Fiche technique des petites pierres** au récapitulatif : nombre, poids total, couleur, pureté, largeur du corps [G6]. JR Diamond a ces données dans le fichier de fabrication.
6. **Gravure affichée « Price: Free » à côté du bouton, et alliance assortie en bascule NO / YES avec son prix** [G6]. Vente additionnelle sans quitter la page.
7. **Sur mesure en 14 jours, rendus 3D en 48 h, sans frais de dessin** [G10] : même délai que l'atelier (14 jours ouvrés). Le marché américain l'annonce comme « one of the fastest in the industry ».
8. **Mesure de bague à l'écran**, étalonnée avec une carte bancaire, plus un PDF imprimable et une table de conversion [G18]. À ajouter au guide des tailles de JR Diamond.
9. **Retour remboursé même pour une bague du constructeur** (30 jours), avoir seulement pour le vrai sur mesure [G11]. Frontière nette entre « configuré » et « créé pour vous » : utile au dossier de l'avocat.
10. **Prix tout compris à l'étranger** (« Delivered Duty Paid », langue et devise locales) [G13]. Modèle pour la France.
11. **Conseillers déclarés sans commission** et horaires étendus, 7 jours sur 7 [G16][G17].
12. **Recherche par photo** (« Upload a screenshot or take a photo ») [G19] : une entrée possible vers le devis ou la transformation de bijou.

## Défauts observés

1. **La pierre choisie n'est pas garantie** : « we may issue a replacement diamond of equal or better quality » sur les pierres à la commande [Vc][G5][G6]. C'est l'inverse de « ce que vous voyez existe ».
2. **Certificat non consultable en ligne** : fenêtre qui renvoie au chat, à l'e-mail ou au téléphone [Vc][G3] ; confirmé par un testeur [T3].
3. **Visuel qui ne suit pas le choix** : « Shown with 3.00ctw Round center diamond » sur une fiche 2 ct [Vc][G7] ; au récapitulatif, images de la monture et de la pierre séparées [I][G6].
4. **Chaque option recharge la page** (« Interacting with this results in a full page refresh ») : une fiche et une adresse par combinaison [Vc][G7].
5. **« Jamais de soldes », mais des coupons de 10 à 20 %, des cadeaux et une alliance offerte** [Vc][G2][G16].
6. **Pages qui se contredisent ou datent** [Vc] : prolongation des retours des fêtes 2025 encore affichée [G11] ; UPS sur la page livraison, FedEx dans l'aide [G13][G21] ; 16 pays sur la page livraison, 23 dans le sélecteur [G13].
   - Bagues « eternity » : refaites une fois selon la garantie, « cannot be resized » selon la FAQ [G12][G15]. Offre de bienvenue : « 10% » ou « $100 » selon la page [G16][G21]. Horaires et téléphones des boutiques différents entre deux pages [G17][G21].
7. **Délais comptés depuis l'expédition** pour le retour comme pour la mise à taille [Vc][G11][G12] ; risque de perte transféré au client à la remise au transporteur [Vc][G13].
8. **Garantie étroite** : perte de la pierre centrale et griffes usées exclues, annulation si un autre bijoutier intervient [Vc][G12]. Plaintes de pierres desserrées dans les avis du site lui-même [Vc][G7] et note D+ au BBB [T2].
9. **Gamme de pierres resserrée et chère** : D à F, VS2 ou mieux ; près de 4 fois le prix de Ritani sur un exemple [T3]. Aucun diamant naturel [Vc][G15].
10. **Sur mesure** : Grown Brilliance garde les droits exclusifs sur le dessin soumis par le client [Vc][G10].
11. **Site fermé aux navigateurs automatisés** (défi Cloudflare) alors que robots.txt invite les robots d'IA [V][G1][G2] ; la liste des pierres n'existe pas sans script (« Diamonds Available: 0 », « Loading... » dans le texte brut) [Vc][G3].

## Limites de l'audit

- Aucun contrôle actionné, aucun parcours fait : tout ce qui porte [Vc] est un texte de page, pas un essai. Les effets sur l'image et les états (erreur, lien mort, chargement sans fin) ne sont pas vérifiés.
- **Temps d'apparition du visuel : non mesuré**, ni sur ordinateur ni en affichage iPhone. L'affichage iPhone n'a pas été lancé : ç'aurait été un second essai sous une autre identité de navigateur.
- Panier et paiement non vus : blocage, et `/shoppingcart` interdit aux robots. Frais, récapitulatif et moyens de paiement viennent des pages de politique.
- L'étape 1 (grille et personnalisation des montures) n'apparaît dans aucun extrait : la liste des corps, des têtes et des métaux du constructeur est partielle. Nature du visuel (photo ou rendu) inconnue.
- Extraits non datés. Indices : dates d'expédition d'octobre 2026 sur les fiches, calendrier de Thanksgiving 2026, coupons du 26/10 au 16/11/2026. Les prix peuvent avoir changé.
- Certains extraits viennent d'adresses à paramètres (centre d'aide, site saoudien) que robots.txt interdit aux robots : lus dans les résultats de recherche seulement, jamais chargés.
- Plan du site non lu : la requête a été refusée par le système d'autorisation de la session, sans autre tentative. Aucun service de collecte n'a été utilisé pour franchir le défi.
- Une seule capture : la page de défi (dossier de travail de l'audit, hors dépôt).

## Sources

Site (lues le 15/11/2026 ; [G1] et [G2] vus directement, les autres en extraits de recherche) :
- [G1] https://www.grownbrilliance.com/robots.txt · [G2] https://www.grownbrilliance.com/design-your-lab-grown-diamond-ring
- [G3] https://www.grownbrilliance.com/start-with-a-lab-grown-diamond · [G4] https://www.grownbrilliance.com/lab-grown-diamonds-search · https://grownbrilliance.com/
- [G5] https://www.grownbrilliance.com/lab-created-1.08-carat-d-color-vvs1-clarity-excellent-cut-igi/did/KD-100743798215.html · …/lab-created-2.02-carat-d-color-vs2-clarity-excellent-cut-igi/did/EV-LGRD20-124503.html
  …/lab-created-2.02-carat-d-color-vvs1-clarity-ideal-cut-igi/did/UG-50078.html · …/lab-created-3.24-carat-d-color-vvs1-clarity-excellent-cut-igi/did/NI-033CE288F.html
- [G6] https://www.grownbrilliance.com/design-your-ring/review/LGR5624X5GY/T300L1GY/875795091 · …/review/LGR5162X4GY/T400LHGY/KD-100752541687 · …/review/LGR5162X3GY/R300LHGY/EV-LGRD30-14232
  …/review/LGR5162X4GW/O400LOGW/EV-LGOV40-86944 · …/review/LGR5162X3LW/R200L1LW/KD-100753316255 · sa.grownbrilliance.com/design-your-ring/review/… (3 récapitulatifs et une liste de pierres, prix en US$ taxes comprises)
- [G7] https://www.grownbrilliance.com/2-ctw-round-lab-grown-diamond-petite-solitaire-engagement-ring-14k-white-gold/pid/RIGTXR05314-GW2 · …/7-ctw-oval-lab-grown-diamond-petite-solitaire-engagement-ring-14k-white-gold/pid/RVR04273O700-GW2
  …/7-ctw-oval-lab-grown-diamond-petite-solitaire-engagement-ring-platinum/pid/RVR04273O700-PL2 · …/2-ctw-oval-lab-grown-diamond-petite-solitaire-engagement-ring-platinum/pid/RIGTXR05314O200PL1
  …/1-2-ctw-oval-lab-grown-diamond-petite-solitaire-engagement-ring-platinum/pid/RIGTXR05314O50-PL2 · …/3-ctw-round-lab-grown-diamond-solitaire-engagement-ring-14k-white-gold/pid/RIGJRO1323-GW1
- [G8] https://www.grownbrilliance.com/engagement-rings · https://www.grownbrilliance.com/solitaire-engagement-rings
- [G9] https://www.grownbrilliance.com/design-your-lab-grown-gemstone-ring · https://www.grownbrilliance.com/design-your-gemstone-ring/review/LCR2665X1GW/R001H1GW/R001AQ
- [G10] https://www.grownbrilliance.com/gb-custom-engagement-rings · https://www.grownbrilliance.com/gb-custom-jewelry · https://www.grownbrilliance.com/truly-custom-jewelry
- [G11] https://www.grownbrilliance.com/pages/free-returns · [G12] https://www.grownbrilliance.com/pages/free-lifetime-warranty · https://www.grownbrilliance.com/extend-warranty
- [G13] https://www.grownbrilliance.com/pages/free-shipping · [G14] https://www.grownbrilliance.com/pages/flexible-payment-options · https://www.grownbrilliance.com/pages/affirm-financing
- [G15] https://www.grownbrilliance.com/pages/faqs · [G16] https://www.grownbrilliance.com/pages/price-match-guarantee · https://www.grownbrilliance.com/pages/special-offers · https://www.grownbrilliance.com/gb-club
- [G17] https://www.grownbrilliance.com/store-locator · https://www.grownbrilliance.com/about-us · https://www.grownbrilliance.com/pages/contact-us
- [G18] https://www.grownbrilliance.com/education-guide/finding-your-ring-size · https://www.grownbrilliance.com/images/ringsizer.pdf
- [G19] https://www.grownbrilliance.com/visual-search · https://www.grownbrilliance.com/track-order · https://www.grownbrilliance.com/customer-reviews
- [G20] https://www.grownbrilliance.com/education-guide/sustainability-report · https://www.grownbrilliance.com/education-guide/learn-about-aether-diamonds
- [G21] Centre d'aide https://www.grownbrilliance.com/customer-support : articles sur les frais de livraison, les boutiques, les promotions et les commandes « Truly Custom » (adresses à paramètres)
- [G22] https://www.grownbrilliance.com/pages/terms-conditions

Tiers :
- [T1] https://www.trustpilot.com/review/grownbrilliance.com · [T2] https://www.bbb.org/us/ny/new-york/profile/jewelry-stores/grown-brilliance-0121-87177782
- [T3, affilié] https://labgrowncarats.com/grown-brilliance-review (mise à jour du 15/10/2026) · [T4, affilié] https://trustedjewelries.com/grown-brilliance-review/ (29/10/2026)
- [T5] https://www.jckonline.com/editorial-article/grown-brilliance-clean-origin (27/08/2024) · https://www.jckonline.com/editorial-article/aether-lab-grown-india-ceo/ (03/09/2024)
- [T6] https://founderreports.com/interview/grown-brilliance · [T7] Registre des sociétés de Floride (search.sunbiz.org), fiche « GROWN BRILLIANCE, INC. », document F23000004385
- [T8] https://www.forbes.com/sites/kyleroderick/2023/10/13/grown-brilliance-high-jewelry-sparkles-with-chic-and-ethical-origins · https://legalclarity.org/who-owns-grown-brilliance-founders-and-acquisitions/
