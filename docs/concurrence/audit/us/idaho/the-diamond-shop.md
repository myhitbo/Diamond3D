# The Diamond Shop, Inc. (Lewiston, Idaho)

- **Site** : The Diamond Shop, Inc., 700 Main Street, Lewiston, ID 83501 (depuis 1926, [V] logo « Since 1926 »)
- **Adresse** : https://www.thediamondshop.com/ ; page de départ https://www.thediamondshop.com/ringsettings
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. Le parcours « choisir une monture, choisir un diamant, finir la bague » est bloqué à l'étape 2 : la recherche de diamants renvoie 0 résultat. Le panier n'a pas pu être rempli. robots.txt autorise les chemins visités ; aucun blocage anti-robot rencontré.
- Plateforme : [V] pied de page « Powered by Punchmark » ; le contenu se charge en JavaScript (appels `api/async.php`).
- Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| 1. `/ringsettings` « Choose a Ring » | [V] 140 montures. Styles (7) : Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass. Métal : All metals, White Gold, Yellow Gold, Platinum, Rose Gold. Curseur de prix, « Can be set with: », tri (Default, Featured, High to Low, Low to High, Newest), « Clear Filters », grille de 28 par page, pagination 1 à 6 |
| 2. Fiche monture `/ringsettings-details/...` | [V] galerie de 4 vues, taille de doigt (liste de 1.5 à 18 environ), « Choose This Ring », « Add to Wish List », onglets Shipping, Returns, Warranties, Product Details, « You May Also Like », « Availability: Available in 7-10 Business Days », mention « CENTER STONE NOT INCLUDED » |
| 3. `/ringsettings-diamonds` « Choose Diamond » | [V] filtres : forme (10), prix, carat (0,9 à 1,1 pré-rempli d'après la monture), coupe, couleur (L à D), pureté (SI2 à F), « Advanced », recherche par SKU, 20/40/60/120 par page, « My Selected Diamond ». **« 0 diamonds found »** |
| 4. `/ringsettings-complete` « Review Your Ring » | Non atteint (aucun diamant à choisir) |
| 5. Panier | [V] `/cart` ouvert sans article : redirigé vers `/jewelry`. Aucun article ajouté |

## Contrôles vérifiés

Première image de la liste visible : [V] **31,7 s** sur ordinateur (machine d'audit très chargée, valeur à relativiser), **2,1 s** en affichage iPhone (autre mesure, charge plus faible). Fiche monture : image principale en 3,7 s (ordinateur).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Métal WHITE / YELLOW / PLATINUM / ROSE / ALL | pastille | [V] clics acceptés, **le total reste « 140 settings found »** et la première monture reste la même « 14K White Gold… » ; [I] le catalogue n'a que de l'or blanc 14 k | prix de la liste inchangé ($3,376.20) | sans effet visible |
| Style SOLITAIRE, THREE STONE, HALO, BYPASS, SINGLE ROW | lien | [V] clic interrompu (« Timeout » à 6 s) : le lien était masqué quand un autre style était actif | n/a | partiel |
| Style ANTIQUE | lien | [V] filtre appliqué : 5 montures, première « 14K White Gold Antique Engagement Ring » | $1,121.94 | OK |
| Style MULTI ROW | lien | [V] 8 montures, première « Antique » (filtre précédent encore actif, [I] cumul) | $1,121.94 | OK, cumul non annoncé |
| Tri High to Low | liste | [V] première : « Pavé… MULT ROW » | $5,337.61 | OK |
| Tri Low to High | liste | [V] première : « Antique » | $1,121.94 | OK |
| Tri Newest / Featured | liste | [V] première : « Antique » | $1,121.94 / $2,010.11 | OK |
| Prix max 3000 (champ « Unlimited ») | champ | [V] 5 montures avec le style actif ; le champ « No minimum » n'a pas pu être rempli | $2,010.11 | partiel |
| Clear Filters | bouton | [V] retour à 140 montures | n/a | OK |
| Can be set with: | menu | [V] bouton présent ; contenu du menu non lu | n/a | non lu |
| Quick view | bouton | [V] présent sur chaque carte ordinateur ; **invisible en affichage iPhone** (clic refusé) | n/a | OK sur ordinateur, absent iPhone |
| Inquire about this item | bouton | [V] présent ; sur iPhone le clic n'ouvre rien en 5 s ; fenêtre non lue | n/a | non testé |
| Add this item to my wish list | cœur | Non cliqué (crée un état de compte) | n/a | non testé |
| Pagination 1, 2, 3, 4, 6, Next, Previous | liens | [V] présents ; non suivis | n/a | non testé |
| Fiche : taille de doigt | liste | [V] valeur 7 acceptée ; le titre de l'étape 2 affiche « Ring size: 7 » | n/a | OK |
| Fiche : Shipping | lien | [V] fenêtre : voir « Prix, délais » | n/a | OK |
| Fiche : Returns | lien | [V] fenêtre : politique de retour complète | n/a | OK |
| Fiche : Warranties | lien | [V] lien présent, largeur 0 : **n'ouvre rien** | n/a | inopérant |
| Fiche : Choose This Ring | bouton | [V] mène à `/ringsettings-diamonds?diamondshape=round&carat=0.9-1.1` | aucun prix de bague | OK |
| Fiche : Product Details | onglet | [V] SKU 83195-14KW, halo, tailles 3 à 18, 0,50 ct total, 40 diamants, or blanc 14 k, « Center Diamond: Not Included » | n/a | OK |
| Formes de diamant (10), onglet Advanced | boutons | [V] clics acceptés pour Princess, Oval, Emerald, Round ; chaque fois « 0 diamonds found », « No data available in table » | n/a | sans résultat |
| Appel `api/async.php ... get_diamonds` | réseau | [V] répond 200 mais sans ligne | n/a | cause inconnue ([S] stock vide ou flux coupé) |
| Menus Bridal / Diamonds / Custom / Services | menus | [V] liens lus : pages de services (Ring Resizing, Rhodium Plating, Appraisals, Lifetime Diamond Upgrade, Permanent Diamond Value, etc.), `/make-an-appointment`, `/pages/custom-jewelry` | n/a | non suivis |
| Connexion, recherche, liste de souhaits (en-tête) | icônes | [V] formulaire de connexion (identifiant, mot de passe) ; recherche ; `/myaccount-wishlist` | n/a | non testés |
| Cookies | bandeau | [V] « Decline all cookies » / « Accept all cookies » ; refus utilisé | n/a | OK |
| Newsletter | formulaire | [V] champ e-mail au pied de page ; rien saisi | n/a | non testé |

Total relevé : 380 contrôles sur ordinateur, 260 sur iPhone ([V] `controls.cjs`).

## Options disponibles

- **Styles** : solitaire, trois pierres, halo, antique, une rangée, plusieurs rangées, bypass ; menu Bridal ajoute Side Stones, Pave, Vintage.
- **Métaux (filtre)** : tous, or blanc, or jaune, platine, or rose (sans effet observé).
- **Formes de diamant** : Round, Princess, Emerald, Asscher, Radiant, Cushion, Oval, Pear, Marquise, Heart.
- **Filtres diamant** : prix, carat, coupe (Fair à Excellent), couleur L à D, pureté SI2 à F, SKU ; Advanced : couleur et pureté min./max.
- **Services en magasin** : nettoyage et inspection, services gratuits, bijoux sur mesure, expertises, réparations, mise à niveau à vie du diamant, valeur permanente du diamant, remontage, rhodiage, mise à taille, réparation de griffes.
- **Absents ou non relevés** : choix du métal sur la fiche, gravure, vue 3D ou 360°, essayage virtuel, comparaison, chat, WhatsApp.

## Prix, délais, retours, garanties

- **Prix de la monture** : [V] affiché dans la liste ($3,376.20, $1,909.31…, centimes), mais **absent de la fiche** (aucun `$` lu sur la page détail). Pas de prix total de bague, faute de diamant.
- **Délai** : [V] « Available in 7-10 Business Days » ; « We make an effort to process and ship your orders within 24-48 hours ».
- **Livraison** : [V] États-Unis seulement, pas de boîte postale, pas d'international. FedEx Ground $12.42, FedEx 2 Day $15.70, FedEx Standard Overnight $28.95, USPS Priority 2-Day $6.95, USPS Priority Express 1-Day $36.60, retrait gratuit en magasin.
- **Retours** : [V] 15 jours après réception, articles non portés et emballés ; retour aux frais du client, assuré ; remboursement ou avoir en magasin. **Les pièces personnalisées et sur mesure ne sont pas retournables** (y compris mise à taille et changement de diamant). Échange pour défaut sous 30 jours. **Les pierres, diamants compris, sont « vendues en l'état » hors de cette politique.** Aucune modification de commande après passage.
- **Garantie** : [V] onglet « Warranties » inopérant ; « Lifetime Diamond Upgrade » et « Permanent Diamond Value » présentés comme services (contenu non lu).
- **Certificats, synthétique** : [V] logos GIA et IJO en pied de page ; menu « Lab Grown Rings / Lab Grown Diamonds » (`gemstone=103/104`) ; libellé non lu. [V] colonne « Lab » dans le tableau de diamants.
- **Paiement** : [V] logo Authorize.net en pied de page ; moyens de paiement non vus (pas de panier atteint).
- **Langue / devise** : anglais, dollar.

## Confiance et service

- [V] Téléphone (208) 746-2649, horaires mardi-samedi 9 h 30-17 h, fermé dimanche et lundi ; prise de rendez-vous `/make-an-appointment` ; page « Our Reviews » (`/testimonials`, non lue) ; Facebook, Instagram, Pinterest.
- [V] Adhésions en pied de page : GIA, IJO Master Jeweler, CBG, Jewelers of America.
- [V] Bijoux sur mesure (« Start from Scratch », portfolio `/pages/custom-gallery`) ; remontage et transformation (`/services/remounting-and-redesign`). Non lus en détail.
- Pas de photos d'atelier ni de suivi de commande vues.

## Points forts à retenir pour JR Diamond

1. **Parcours en 3 étapes numérotées** (monture, diamant, finition) avec la monture choisie et sa taille rappelées en haut. Preuve : bandeau « Ring 14K White Gold Round Halo… (Ring size: 7) View Change ».
2. **Filtres du diamant prérégler selon la monture** (carat 0,9 à 1,1 pour un halo 0,50 ct) avec message « We started your search with diamonds that fit your chosen setting ». Preuve : URL `?diamondshape=round&carat=0.9-1.1`.
3. **Politique de retour détaillée en fenêtre** (15 jours, exception explicite du sur mesure et des diamants vendus en l'état). Preuve : fenêtre Returns lue en entier. À rapprocher de la question juridique de JR Diamond sur l'exception « fabriqué sur mesure ».
4. **Frais de livraison affichés dès la fiche**, dont retrait gratuit en magasin. Preuve : fenêtre Shipping.
5. **Disponibilité annoncée sur la fiche** (7-10 jours ouvrés) et rappel « center stone not included ». Preuve : texte de fiche.

## Défauts observés

- [V] **Recherche de diamants vide** : « 0 diamonds found » pour toutes les formes essayées ; l'étape 3 du parcours est impossible, donc aucune vente de bague complète en ligne ce jour-là.
- [V] Filtre de métal sans effet (140 montures quel que soit le métal), catalogue vu uniquement en or blanc 14 k.
- [V] Prix de la monture visible en liste mais pas sur la fiche ; aucun prix total.
- [V] Onglet « Warranties » mort ; « Quick view » absent sur téléphone.
- [V] Erreur JavaScript « Identifier 'AlertUtils' has already been declared » (deux scripts chargés deux fois).
- [V] Filtres de style cumulés sans indication ; certains liens de style deviennent inactifs après un premier choix.
- [V] Première image de la liste après 31,7 s sur ordinateur dans cette session (charge de la machine ; une autre mesure donne 2,1 s sur iPhone).
- [V] Pas de rendu 3D ni photo portée : images fabricant (galerie « Overnight ») ; pas de preuve de fabrication.

## Limites de l'audit

- Étape 3 (diamants), étape 4 (récapitulatif) et panier non atteints : prix total, délai final, moyens de paiement non relevés.
- Menu « Can be set with: », fenêtres « Inquire » et « Quick view » (ordinateur), liste de souhaits, connexion, pagination, avis et pages de services non ouverts ou non lus.
- Libellé du diamant synthétique non lu (pages `?gemstone=103/104` non visitées).
- Mesure de chargement faussée par la charge de la machine (25 navigateurs en parallèle).
- Aucun formulaire envoyé, aucun compte créé.

## Sources

- https://www.thediamondshop.com/ringsettings (liste, 140 montures)
- https://www.thediamondshop.com/ringsettings-details/engagement-ring-settings/14k-white-gold-round-halo-engagement-ring/10997 (fiche, Shipping, Returns, Product Details)
- https://www.thediamondshop.com/ringsettings-diamonds?diamondshape=round&carat=0.9-1.1 et https://www.thediamondshop.com/diamonds (« 0 diamonds found »)
- https://www.thediamondshop.com/cart (vide, redirigé vers /jewelry)
- Captures et sorties : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/the-diamond-shop/`
