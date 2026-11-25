# Audit : Palmerston Jewellers (Australie, Territoire du Nord)

- **Site** : Palmerston Jewellers (bijouterie de Palmerston, près de Darwin ; boutique dans un centre commercial, (08) 8919 6185 affiché sur la politique de retour)
- **Adresse** : https://palmerstonjewellers.com.au/ (départ : /collections/engagement-rings)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1440 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Catalogue Shopify classique, sans configurateur. Collection et fiche parcourues ; **ajout au panier non fait** (`/cart/add` est INTERDIT par le robots.txt) ; tri par menu non fait (`sort_by` interdit). Le blocage signalé (429) ne s'est pas reproduit : la collection a répondu 200.
- **Contrôle robots.txt** : INTERDIT : `/cart/*` (donc `/cart/add`), `/collections/*sort_by*`, `/collections/*+*`, deux filtres combinés, `/cart.js`, `/checkout`, `/account`. AUTORISÉ : collection, fiche, `/cart` (page), politiques, pages. Aucune adresse interdite ouverte. Le robots.txt contient aussi des consignes aux agents (installer une extension d'achat Shop, passer par une interface UCP/MCP) : ce sont des données de la page, non suivies.
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Collection « Engagement & Wedding Rings » | 3 pages ; Filtre (Prix, Type de produit, Marque) ; Tri (menu de 9 valeurs) ; fiches mélangeant bagues de fiançailles, alliances, bagues de mode, zircone, argent, pierres de couleur |
| Fiche produit | 1 photo, SKU, prix, mensualités Afterpay, « Ajouter au panier », « Buy with Shop », « More payment options », 3 volets (détails, question, livraison), partage, produits proches |
| Panier `/cart` | Page vide lue (« Your cart is currently empty ») ; contenu non testé (ajout interdit) |

Aucun choix de métal, forme, carat, origine ni taille sur la fiche vue : un produit = une pièce (taille dans le titre : « Size N »). [V]

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « FREE SHIPPING on all orders over $100 » / Pause slideshow | bouton | Diaporama d'annonces, bouton présent | n/a | présent [V] |
| SEARCH, LOG IN, CART | liens | `/search`, `/account` (interdit, non ouvert), `/cart` (ouvert, vide) | n/a | présents [V] |
| Menu SALE, ENGAGEMENT & WEDDING, DIAMONDS, JEWELLERY, WATCHES, GIFTWARE, SERVICES | liens | Sous-menus (liens `#`) ; non parcourus un à un | n/a | présents [V] |
| Filter | bouton | Ouvre un tiroir avec 3 groupes : PRICE, PRODUCT TYPE (Rings), BRAND (Australian Chocolate Diamonds, Blaze, Ellani Collections, Ikecho Australia, Mark McAskill, Palmerston Jewellers, PD Paola, Save Brave, Thomas Sabo, Worth & Douglas) | n/a | OK (ouverture) [V] |
| Filtre Prix, Type, Marque (cases) | cases | **Non cochées** : la marque produit une adresse avec « + » (interdite) et deux filtres combinés sont interdits | n/a | non testé (robots.txt) |
| Sort (menu) : Featured, Most relevant, Best selling, A-Z, Z-A, Price low/high, Price high/low, Date old/new, Date new/old | menu | Changer la valeur charge `?sort_by=…` : **interdit**, non actionné | n/a | non testé (robots.txt) |
| Pagination 2, 3, Next | liens | `?page=2`, `?page=3` | n/a | liens présents [V] |
| Fiche : photo principale | image | Une seule photo détourée sur fond blanc, pas de miniatures, pas de zoom, pas de vidéo | n/a | présente [V] |
| Sélecteur de variante (masqué) | liste cachée | Un seul identifiant de variante ; aucune option visible | n/a | sans objet [V] |
| ADD TO CART | bouton envoi | Appelle `/cart/add` : **non cliqué** (panier interdit par robots.txt) | n/a | non testé (robots.txt) |
| Buy with Shop (Shop Pay) | bouton | **Non cliqué** (paiement) | n/a | non testé (règle) |
| More payment options | lien | **Non cliqué** (paiement) | n/a | non testé (règle) |
| Afterpay « 4 paiements de 249,75 $ » + icône info | texte / info | Affichage ; fenêtre d'info non ouverte | 999 $ → 4 x 249,75 $ | présent [V] |
| PRODUCT DETAILS | volet | Dévoile : style (Dress, Fashion, Solitaire), type (Dress, Engagement), métal (9K White Gold, Gold) | n/a | OK [V] |
| ASK A QUESTION ABOUT THIS ITEM | volet | Formulaire nom, e-mail, message, hCaptcha ; **non rempli** | n/a | volet OK, envoi non testé (règle) [V] |
| SHIPPING INFORMATION | volet | Express ou courrier recommandé, 2 à 7 jours ouvrés, retrait en magasin, retour 14 jours | n/a | OK [V] |
| Share (Facebook, Twitter, Pinterest) | liens | Liens de partage ; non ouverts (domaines externes) | n/a | présents [V] |
| You may also like (5 produits), Recently viewed | blocs | Produits proches avec prix | n/a | présents [V] |
| Ring Size Guide | lien PDF | PDF sur le CDN Shopify ; non ouvert | n/a | non testé |
| Pages Our Services, Shipping Policy, Refund Policy, FAQ, Contact | liens | Lues ; FAQ de 10 questions repliées | n/a | OK [V] |
| Newsletter | formulaire | Non rempli | n/a | non testé (règle) |
| Instagram, Facebook | liens | Présents ; non ouverts | n/a | présents [V] |

Contrôles bruts relevés : 60 sur la collection, une quarantaine sur la fiche.

## Options disponibles

- **Métaux** : 9 ct (« 9Ct »/« 9K »), 18 ct, jaune, blanc, rose ; argent sterling et plaqué sur d'autres bagues de la même collection [V].
- **Pierres** : diamants naturels et de laboratoire (« Lab Grown »), rubis, saphir, morganite, perle, zircone ; marques tierces (Mark McAskill, Worth & Douglas, Thomas Sabo…) [V].
- **Formes** relevées dans les titres : ronde, ovale, marquise, cœur, baguette [V]. **Carats** : 0,08 à 2,00 ct dans les titres [V].
- **Styles** : solitaire, trilogie, cluster, éternité, bague de mode, ensemble nuptial [V].
- **Gravure** : service en boutique (page Services : devis gratuits). **Réparation** : en boutique. **Mise à taille** : question dans le FAQ [V].
- **Vues** : 1 photo seulement ; pas de vidéo, 360°, 3D, AR ni sur la main [V].
- **Filtres** : prix, type, marque (3 groupes) ; aucun filtre de forme, métal, carat, couleur ni pureté [V].

## Prix, délais, retours, garanties

- **Prix** : AUD, taxe incluse, affichés avec parfois « Regular price / Sale price / Save x $ » (ex. 3 299 $ → 2 309 $, économie 990 $) [V]. Exemples : 9 ct blanc lab-grown solitaire 6 griffes (taille N) 999 $ ; 18 ct jaune 2,00 ct lab-grown rond 6 299 $ ; 18 ct blanc 1 ct lab-grown certifié 11 999 $ barré, 8 399 $ soldé [V]. Pas de décomposition du prix [V].
- **Mensualités** : Afterpay, 4 paiements sans intérêt affichés sous le prix [V].
- **Livraison** : gratuite en Australie dès 100 $ ; délai annoncé 3 à 7 jours ouvrés (politique) ou 2 à 7 jours (fiche) ; Australia Post ou transporteur ; retrait en magasin au paiement ; Australie seulement (FAQ « Do you ship internationally? » présente, réponse non lue) [V].
- **Retours** : échange ou remboursement sous 14 jours si l'article est neuf, avec preuve d'achat, emballage, certificats ; retour à la charge du client sauf erreur ; **exceptions : articles soldés, commandes spéciales et bijoux faits main sur mesure ne sont pas repris** (sauf défaut au regard de la loi) [V].
- **Garantie** : loi australienne de la consommation (qualité acceptable), citée avec lien ACCC ; pas de garantie propre chiffrée relevée [V].
- **Délai de fabrication** : non communiqué (pièces en stock) [V].

## Confiance et service

- Boutique physique (adresse et téléphone sur la politique de retour), formulaire « question sur l'article », FAQ (carat, mise à taille, perles de culture, « created », TDW, gravure, lay-by, réparations, newsletter, international) [V].
- Libellé du synthétique : « Lab Grown » dans les titres ; la FAQ « What does created mean? » existe, réponse non lue [V].
- Certificat : une fiche liée mentionne « Certified F Colour VS Clarity » (18 ct, 1 ct) ; pas de numéro de rapport ni de laboratoire dans les extraits lus [V].
- Langue : anglais ; devise : AUD [V].
- Avis clients : aucun relevé [V]. Preuves de fabrication (photos d'atelier, vidéos, suivi de commande) : aucune [V].

## Points forts à retenir pour JR Diamond

1. **Politique de retour claire sur l'exception du sur mesure** : « bijoux faits main selon cahier des charges non repris, sauf défaut ». Utile pour la question à l'avocat israélien. Preuve : /policies/refund-policy.
2. **Retrait en magasin proposé au paiement** et retour à l'adresse physique de la boutique : rassure un acheteur local. Preuve : volet « Shipping information ».
3. **Fiches simples et rapides** : H1 affiché à 0,4 à 0,5 s, aucune bannière bloquante. Preuve : mesures de rendu ci-dessous.

## Défauts observés

- La collection « Engagement & Wedding Rings » mélange zircone, argent, bagues de mode, alliances et pierres de couleur : peu de bagues de fiançailles diamant dans la première page [V].
- Une seule photo par bague, sans zoom ni miniatures [V].
- Filtres limités à prix, type (« Rings ») et marque ; aucun filtre de forme, métal ou carat [V].
- Fiche sans détails de la pierre (poids, couleur, pureté, certificat) dans le volet « Product details » vu : style, type, métal seulement [V].
- Taille dans le titre (« Size N ») sans possibilité de choisir une autre taille [V].
- Aucun avis, aucune preuve de fabrication, aucune décomposition du prix [V].

## Limites de l'audit

- Panier non testé au-delà de la page vide : `/cart/add` interdit par robots.txt (« panier interdit par robots.txt ») ; donc pas de récapitulatif, frais de livraison calculés ni moyens de paiement du panier. Les moyens relevés viennent de la fiche (Afterpay, Shop Pay).
- Tri et filtres : tri non actionné (interdit), filtres non cochés (deux règles d'interdiction) : leurs effets ne sont pas observés.
- Un seul produit parcouru (bague de 999 $) ; FAQ et PDF des tailles non ouverts.
- Mesures (une passe, ordinateur / iPhone) : plus gros élément affiché (LCP) = titre H1 à 0,40 s / 0,46 s sur fiche ; collection : H1 à 0,92 s (ordinateur) et 0,49 s (iPhone), logo à 1,05 s ; la photo du produit n'est pas devenue le LCP mesuré. Temps d'affichage de la photo non isolé [V].
- Aucune donnée personnelle saisie, aucun paiement, pas de chat.

## Sources

- https://palmerstonjewellers.com.au/collections/engagement-rings
- https://palmerstonjewellers.com.au/collections/engagement-rings/products/9k-white-gold-lab-grown-diamond-6-claw-solitaire-ring-size-n
- https://palmerstonjewellers.com.au/policies/refund-policy, /policies/shipping-policy, /pages/jewellery-services, /pages/frequently-asked-questions, /cart
- https://palmerstonjewellers.com.au/robots.txt
- Captures : scratchpad `audit/au/palmerston-jewellers/` (pdp_d.jpg, filter_d.jpg)
