# Audit : Providence Diamond (Cranston, Rhode Island)

- **Site** : Providence Diamond, joaillier indépendant de Cranston (RI), boutique ouverte 7 j/7.
- **Adresse de départ** : https://www.providencediamond.com/design-your-own-ring/choose-your-diamond
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366x900 (ordinateur), émulation iPhone 13 (390 px)
- **Statut** : **partiel** (parcours « choisir son diamant » complet ; l'étape « choisir sa monture » est restée vide dans tous les essais ; ajout au panier non cliqué car interdit par robots.txt)
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options observées |
|---|---|
| 1. Choose Your Diamond | Filtres : forme (10), prix, carat, couleur, pureté, taille (cut), certificat (6) ; tableau de résultats triable ; ligne dépliable [V] |
| 2. Fiche du diamant (`diamond-detail.html?did=…`) | Photo « sample image » + 4 vignettes, prix, Add to Cart, Add Diamond to Ring, Back to Search, Wishlist, Email to Friend, Request Viewing, Call Us [V] |
| 3. Choose Your Ring Style (`/choose-your-style/?did=…`) | Cases métal (Platinum, Yellow Gold, White Gold), cases style (Classic, Halo, Vintage, Nostalgic) ; résultat : « No Result Found. » [V] |
| 4. Your Selected Settings | Menu déroulant : diamant choisi, prix, VIEW, EDIT, sous-total [V] |
| 5. Panier (`cart.html`) | Vide (« Cart is Empty ») ; ajout non testé [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Formes BR, PR, EM, AS, MQ, OV, RA, PS, HS, CU (cases) | cases, rechargement ajax | Relance la recherche. Après fixation d'une seule forme : BR 58, PR 0, EM 14, AS 4, MQ 8, OV 10, RA 4, PS 1, HS 0, CU 10 résultats [V] | Aucun calcul de prix de bague | OK ; Princess et Heart : 0 résultat |
| Prix min/max (champs 200 / 100000) + curseur | champ + curseur | Appelle `filterByPrice` à la modification [V] | Filtre | OK |
| Carat min/max (0,25 / 15) | champ + curseur | Avec max 1,2 ct et forme ronde : 0 résultat [V] | Filtre | OK ; aucun diamant < 2 ct trouvé dans nos essais |
| Couleur D à K, pureté IF à I1, taille Signature Ideal à Good | curseurs | Présents ; poignées par défaut non toutes aux extrémités [V] | Filtre | Non manipulés (curseurs jQuery), effet non mesuré |
| Certificats AGS, EGL USA, EGL INT'L, GCAL, GIA, IGI | cases | Présents, tous cochés par défaut, même gestionnaire `filterByPrice` [V] | Filtre | Non décochés individuellement |
| En-têtes de colonne (Carat, Cut, Color, Clarity, Price…) | tri | Réordonne les lignes (ex. tri carat : 5,51 ct en tête) [V] | Tri | OK |
| Pagination 2, 3, next, « » » | liens `javascript:void(0)` | Cliquée une fois (lien « 2 ») : échec de sélection dans notre script ; non confirmé [V] | Aucun | Non confirmé |
| Case Compare (par ligne) | case | `compareStone(id)` ; non cochée | Aucun | Non testé |
| Ligne du tableau | clic | Déplie un volet : « 2.00-Carat Round Diamond », MORE DETAILS, ADD DIAMOND TO RING, carat, clarté, couleur, coupe, fluorescence, profondeur, table, symétrie, polish, cote en mm, prix [V] | Prix du diamant | OK |
| MORE DETAILS | lien | Mène à `diamond-detail.html?did=…` (chargement 3,1 s) [V] | Prix affiché « $ 22648.00 » sans séparateur | OK |
| ADD DIAMOND TO RING | lien | Mène à `/choose-your-style/?did=…` ; la page répond « No Result Found. » pour 2 pierres essayées (ronde 2,00 ct, marquise 2,01 ct) [V] | Aucun | **Parcours bloqué** |
| Cases métal (3) et style (4) | cases | Déclenchent `search_product_byor_ajax.php` ; la requête reste sans résultat [V] | Aucun | Sans effet visible |
| Your Selected Settings | bouton | Déroule la pierre choisie, prix, VIEW, EDIT, sous-total 22 648 $ [V] | Sous-total = prix de la pierre | OK |
| Add to Cart (fiche diamant) | lien | Mène à `cart.html?ringType=D&to_do=add&ProductID=…` : adresse **interdite** par robots.txt (`Disallow: /*?ringType=`) | Non testé | Non cliqué, raison : robots.txt |
| Add to Wishlist, Email to Friend, Request Viewing | liens JS | Présents ; non ouverts (formulaires) | Aucun | Non testé : formulaire |
| Call Us | lien | `tel:401.946.7070` [V] | Aucun | OK |
| Vignettes de la fiche (5) | images | Photo « Sample image », vues de côté et schémas ; pas de vidéo ni de 360° [V, capture] | Aucun | OK |
| Wishlist, Login/Signup, Cart (0) | liens d'en-tête | `wish-list.html`, `login-checkout.html`, `cart.html` ; seul le panier a été lu | Aucun | Wishlist et compte non ouverts |
| Newsletter (champ + SUBMIT) | formulaire | Présent ; non rempli | Aucun | Non testé : formulaire |
| Bandeau cookies (ACCEPT / REJECT / SETTINGS) | boutons | Apparaît sur les pages suivantes ; ACCEPT cliqué sans effet notable [V] | Aucun | OK |
| Menu principal (Rolex, Fine Jewelry, Bridal, Watches, Gift Guides, Services…) | liens | Hors parcours bague ; seule `collections/shop-all` (Bridal) lue [V] | Aucun | Partiellement testé |
| Pied de page : Appraisals, Gemstone Education, Shipping & Returns, FAQ | liens | Pages Shipping & Returns et FAQ lues [V] | Aucun | OK |

## Options disponibles

- **Formes** : Round, Princess, Emerald, Asscher, Marquise, Oval, Radiant, Pear, Heart, Cushion [V].
- **Certificats** : AGS, EGL USA, EGL INT'L, GCAL, GIA, IGI [V]. Les lignes lues portent surtout GIA, une AGS.
- **Couleur** D à K ; **pureté** IF, VVS1, VVS2, VS1, VS2, SI1, SI2, SI3, I1 ; **taille** Signature Ideal, Excellent, V.Good, Good [V]. Les lignes lues affichent surtout « Good » ou « Excellent ».
- **Métaux (étape monture)** : Platinum, Yellow Gold, White Gold ; **styles** : Classic, Halo, Vintage, Nostalgic [V]. Pas de titre 14/18 k dans le constructeur.
- **Rien** sur l'origine naturel/synthétique, la taille de doigt, la gravure, les griffes ou le corps de bague dans le constructeur [V].
- **Boutique « Bridal »** (`collections/shop-all`) : 170 bagues, filtres style (Three Stone, Halo, Solitaire, Vintage, Split Shank…), designer (Noam Carver, Norman Silverman, Martin Flyer…), métal (or jaune, blanc, rose, platine, bicolores) ; prix affichés ou « Price Upon Request » [V].

## Prix, délais, retours, garanties

- **Prix** : prix de la pierre en dollars, affiché sans décomposition. Exemples [V] : ronde 2,00 ct F SI1 GIA, 22 888 $ (première ligne) ; marquise 2,01 ct F SI2, 22 648 $. Plusieurs lignes « Call for availability ». Mention : « Prices may not reflect gold market fluctuations and cannot be guaranteed… Please call to confirm today's price and availability » [V].
- **Bagues du catalogue** : à partir de 2 326 $ (Noam Carver Luna) ; nombreuses en « Price Upon Request » [V].
- **Livraison** [V, `/page/shipping-returns.html`] : 50 États et APO/FPO, FedEx/USPS ; en stock : expédié en 1 à 3 jours ouvrés ; sur commande : délai supplémentaire non chiffré. Standard gratuit ; 2-3 jours : 25 $ sous 500 $, gratuit au-dessus ; lendemain : 50 $ jusqu'à 5 000 $, gratuit au-delà. Signature au-delà de 1 000 $. Retrait en magasin et curbside.
- **Retours** [V] : retour avec remboursement sous 10 jours après livraison ; échange sous 30 jours ; **frais de 10 % ou 300 $ sur les achats « bridal »** ; articles portés, gravés, modifiés ou redimensionnés non repris ; **commandes spéciales et pièces sur mesure : vente ferme**. Remboursement jusqu'à 30 jours après réception.
- **Financement** [V, FAQ] : Synchrony, 0 % pendant 6 mois.
- **Redimensionnement** [V, FAQ] : fait en 72 h au plus, gratuit pour les « PD Brides ».
- **Panier** : vide, donc ni récapitulatif ni moyens de paiement observés [V].
- **Garantie** : non lue sur les pages ouvertes [S].

## Confiance et service

- Magasin physique : 105 Hillside Rd, Cranston ; ouvert tous les jours (10 h-18 h, dimanche 11 h-17 h) ; téléphone en en-tête [V].
- Demande de rendez-vous / visionnage (« Request Viewing »), « Call Us », curbside, cartes cadeaux en magasin [V].
- Sur mesure : « in-house design team », sertissage en interne de diamants de famille, contact par e-mail ou téléphone, sans configurateur ni délai ni prix [V, FAQ].
- Annulation et modification de commande : e-mail ou téléphone seulement [V, FAQ].
- Langue : anglais ; devise : dollar. Avis clients : aucun vu sur les pages ouvertes [V].
- Preuves de fabrication (photos ou vidéos d'atelier, suivi de commande) : aucune ; le suivi se limite à un e-mail d'expédition avec numéro [V].
- Services : estimations (appraisals), éducation sur les gemmes, événements [V, liens].

## Points forts à retenir pour JR Diamond

1. **Prix, 4C et certificat visibles dès la liste** : la ligne affiche carat, coupe, couleur, pureté, profondeur, table, symétrie, polish, rapport et prix, avec cote en mm dans le volet. Preuve : tableau lu sur la page de départ [V]. À retenir : la transparence des paramètres qu'attend l'acheteur.
2. **Comparaison de pierres** par case à cocher et filtres d'inventaire en direct (60 résultats ajax en environ 1,6 s). Preuve : script de mesure [V].
3. **Livraison claire** : grille de tarifs par montant, seuils de signature, retrait sur place. Preuve : `/page/shipping-returns.html` [V].
4. **Financement 0 % 6 mois** affiché en FAQ [V]. À rapprocher du « paiement intégral » de JR Diamond.
5. **Rassurance locale** : boutique ouverte 7 j/7, téléphone dans l'en-tête sur chaque page [V].

## Défauts observés

- **L'étape « choisir sa monture » ne livre rien** : « No Result Found. » avec une ronde de 2,00 ct et une marquise de 2,01 ct, métaux et styles tous cochés, après cases décochées aussi. Le constructeur annoncé ne permet donc pas d'obtenir une bague dans nos essais [V]. Cause : inconnue [S] (stock de montures non adapté aux pierres de plus de 2 ct ?).
- **Aucune pierre sous 2 ct trouvée** : avec la forme ronde, max 1,2 ct donne 0 résultat ; les lignes lues commencent à 2,00 ct et 22 648 $ [V]. Le « 0,25 ct » du curseur est trompeur [I].
- Princess et Heart : 0 résultat [V].
- Pas de rendu 3D, pas de visualisation sur la main, pas de 360° ; la fiche porte une photo « Sample image » et non la pierre réelle [V, capture].
- Prix de la fiche sans séparateur de milliers (« $ 22648.00 ») [V].
- Pas de choix d'origine (naturel/synthétique), pas de gravure ni de taille de doigt dans le constructeur [V].
- Sur mesure et bagues « bridal » : retour impossible ou frais de 10 % / 300 $ [V].
- En-tête de colonne « Symmety » mal orthographié sur mobile [V].

## Limites de l'audit

- Ajout au panier **non cliqué** : l'adresse `…cart.html?ringType=D&to_do=add…` est interdite par robots.txt (`Disallow: /*?ringType=`). Panier, récapitulatif et moyens de paiement non observés.
- Curseurs couleur/pureté/taille, pagination, comparaison, wishlist, « Email to Friend » et « Request Viewing » non actionnés (formulaires ou curseurs jQuery).
- L'état « No Result Found. » peut dépendre du stock du jour ou d'un défaut ponctuel ; vérifié deux fois seulement (deux pierres).
- Navigateur automatisé : le comptage des résultats après filtres vient de l'interface, sans contrôle indépendant.
- Mobile (iPhone 13, 390 px) : liste des 12 colonnes sans défilement horizontal, premier résultat en 1,5 s ; fiche détaillée non analysée en détail.

## Sources

- https://www.providencediamond.com/design-your-own-ring/choose-your-diamond [V]
- https://www.providencediamond.com/design-your-own-ring/choose-your-style/?did=2068080 et `?did=2067965` [V]
- https://www.providencediamond.com/diamond-detail.html?did=2067965 [V]
- https://www.providencediamond.com/page/shipping-returns.html [V]
- https://www.providencediamond.com/page/faq.html [V]
- https://www.providencediamond.com/cart.html [V]
- https://www.providencediamond.com/collections/shop-all [V]
- https://www.providencediamond.com/robots.txt [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/providence-diamond/`
