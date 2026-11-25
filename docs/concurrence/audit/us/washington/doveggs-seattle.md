# Audit : DovEggs-Seattle (Seattle, État de Washington)

- **Site** : DovEggs-Seattle, boutique Shopify de moissanite, diamants de laboratoire et pierres de couleur ; atelier de fabrication hors des États-Unis, salle d'exposition à Seattle sur rendez-vous.
- **Adresse de départ** : https://www.doveggs-seattle.com/pages/start-with-loose-lab-grown-diamond (page en `noindex`, d'après la fiche de mission)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Pages, options de fiche et politiques lus. Ajout au panier non fait : `/cart/add` et `/cart.js` sont interdits par le robots.txt (`Disallow: /cart/`, `Disallow: /cart.js`). L'effet des options sur le prix n'a pas pu être mesuré (voir limites).

Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
|---|---|
| Page de départ « DovEggs Lab Grown Diamond Collections » | Onze collections de pierres : DovEggs Boutique Lab Diamonds, puis Round, Radiant, Emerald, Heart, Marquise, Oval, Pear, Princess, Asscher, Cushion. Bloc « Custom Your Own Lab Grown Diamond » : menu de taille (1 / 1,5 / 2 / 3 / 4 / 5 ct en D, E ou F) et lien vers la fiche. |
| Menu « Build A Ring » | « Start From Semi-Mount », « Start With Loose Lab Grown Diamond », puis styles : Solitaire, Halo, Bezel, Vintage, Channel, Floral, Pavé, Bridal Set, Three Stones, Split Shanks, Side Stones ; formes : Round, Oval, Cushion/Elongated Cushion, Radiant, Emerald, Pear, Princess, Heart, Asscher, Octagon. |
| Fiche de bague (ex. `/products/6-prongs-solitaire-moissanite-engagement-ring`) | Poids de la pierre ; métal (karats) ; ton du métal ; couleur/matière de la pierre ; forme ; coupe (selon la forme) ; taille US ; gravure ; modification libre ; quantité ; Add to Cart. |
| Panier / paiement | Non audités (voir statut). |

Il n'y a pas de constructeur 3D : la « construction » est un formulaire d'options sur une fiche, avec photos de bagues déjà livrées à d'autres clients (texte : « Real customer rings — not renders ») [V].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 11 vignettes de collections de pierres | liens | Mènent aux collections `/collections/round-lab-diamondsmade-to-order-premade`, etc. [V, liens lus] | - | liens lus, collections non parcourues |
| Menu « Custom Your Own Lab Grown Diamond » (18 combinaisons : 1 à 5 ct en D, E, F) | liste déroulante | Présent ; prix affiché 500,00 $ pour la sélection par défaut (1 ct D) [V] ; variation non mesurée | 500 $ (défaut) | partiel |
| « View the full product » | lien | Vers `/products/custom-your-own-lab-grown-diamond-stone` [V, lien lu] | - | non ouvert |
| Menu principal : Build A Ring, Engagement Rings, Wedding Bands, Loose Stones, Custom Design, Semi-Mount, All Jewelry, DovEggs Specialty, Help & About | menu | Liens extraits du DOM (voir Options) [V] | - | OK |
| Recherche (bouton « Open search modal »), compte, liste de souhaits, panier | boutons, liens | Non ouverts : `/account` interdit par robots.txt ; recherche non utilisée [V] | - | non testés |
| Bandeau « BLACK FRIDAY SALE: 18% OFF SITEWIDE · AUTO-APPLIED AT CHECKOUT · ENDS DEC 3 » | lien | Vers `/pages/current-offers` [V] | -18 % au paiement | lu |
| Formulaire e-mail « Get $50 off » | formulaire | Non rempli (règle) [V] | 50 $ de remise 1re commande | non testé |
| Sélecteur de devise « United States (USD $) » | bouton | Présent ; non actionné [V] | - | non testé |
| Fiche : galerie de 14 photos (boutons « Change image to image n »), « Open media in gallery view », vidéos d'aide au choix de la pierre | boutons | Présents ; photos de bagues réelles de clients [V] | - | présents, non parcourus un à un |
| Fiche : Center Stone Size 1 / 1,5 / 2 / 3 / 4 / 5 ct | menu | Liste lue dans le DOM ; menus personnalisés, pas de changement de prix observé par script [V, lecture] | prix de départ 181,00 $ | effet non mesuré |
| Fiche : Setting Metal Karats : Sterling Silver, Solid 10k, 14k, 18k, Solid Platinum | menu | Liste lue ; le texte indique « Sterling Silver (+$8.00) » et un supplément lié au cours du métal [V] | supplément variable | effet non mesuré |
| Fiche : Setting Metal/Metal Tone | menu | Sterling Silver ; Platinum ; or 10 k, 14 k, 18 k en blanc, jaune ou rose [V, lecture] | - | non mesuré |
| Fiche : Center Stone Color | menu | 15 choix : moissanite GHI, DEF, Peacock Blue, Champagne, Black, Twilight Blue, Stardust Grey ; émeraude de Zambie, rubis, saphirs bleu, rose, jaune, orange, noir, violet [V] | - | non mesuré |
| Fiche : Center Stone Shape | menu | 14 formes : Round, Oval, Cushion, Radiant, Pear, Princess, Heart, Octagon, Marquise, Emerald, Asscher, Criss Cut, Elizabeth Taylor Krupp Cut, Pixel Cut [V] | - | non mesuré |
| Fiche : coupe selon la forme (boutons radio) | radio | Par ex. rond : Crown Arrow, H&A, Astro, Nova, Old European, Rose, Portuguese ; coussin, ovale, etc. [V, lecture] | - | non mesuré |
| Fiche : Size (US Size) | menu | 3 à 10 par quart de taille ; lien « size chart » [V] | - | OK |
| Fiche : Engraving | champ texte | 15 caractères au plus (« 0/15 ») [V] | - | présent, non rempli |
| Fiche : « Make small changes? » | zone de texte | Modifications libres ; non remplie [V] | - | non remplie |
| Fiche : ADD TO CART | bouton | Non cliqué : panier interdit par robots.txt (`/cart/add`, `/cart.js`) [V] | - | non testé |
| Fiche : volets Description, Cut/Color/Stone Size Guide, Customization, Return & Refund, Services, Payment Method, Shipping, Warranty & Maintenance, Size Measurement | accordéons | Présents ; contenu des politiques lu sur leurs pages dédiées [V] | - | OK |
| Pied de page : Return Policy, Start a return or exchange (returnhelperapp.com), Repair & warranty, Custom Jewelry Policy, Shipping Policy, FAQs, Contact, Dovies Guides, Blog | liens | Pages de politiques lues ; autres non ouvertes [V] | - | OK |

## Options disponibles

- **Poids de la pierre sur la bague testée** : 1, 1,5, 2, 3, 4, 5 ct [V].
- **Métaux** : argent sterling, or 10 k, 14 k, 18 k (blanc, jaune, rose), platine [V].
- **Pierres** : moissanite (GHI, DEF, couleurs), diamant de laboratoire (autres fiches), émeraude, rubis et saphirs de couleur ; page « Loose Stones » : moissanite, diamants de laboratoire « Boutique », groupe, pierres de couleur [V].
- **Formes** : jusqu'à 14 (Round, Oval, Cushion, Radiant, Pear, Princess, Heart, Octagon, Marquise, Emerald, Asscher, Criss Cut, Elizabeth Taylor Krupp Cut, Pixel Cut) [V].
- **Styles** : solitaire, halo, bezel, vintage, channel, floral, pavé, ensemble de mariage, trois pierres, shank divisé, pierres latérales ; semi-monture seule [V].
- **Taille de doigt** : 3 à 10 par quart [V].
- **Gravure** : texte de 15 caractères [V].
- **Modes de vue** : photos réelles, vidéos d'aide, pas de 3D, pas de 360°, pas d'AR vus [V pour la fiche testée].
- **Origine naturel / synthétique** : aucune option « naturel » vue ; l'offre est synthétique (laboratoire) ou moissanite [V].
- **Certificats** : non vus sur les pages lues [V pour l'absence sur ces pages]. La FAQ parle d'évaluations NAGL « on request » [V].

## Prix, délais, retours, garanties

- **Prix** : bague testée affichée 181,00 $ (1 ct, argent sterling) ; pierre de laboratoire sur mesure 500,00 $ ; remise du Black Friday 18 % au paiement ; 50 $ de remise à l'inscription [V]. Un client écrit que les « add-on surcharges » ont fait monter les prix (avis du 19/04/2026) [V, /pages/customer-reviews]. Le site explique le supplément de métal (« Metal spot prices fluctuate ») [V]. Aucune autre décomposition.
- **Délai** : or et platine : 7 à 10 jours ouvrés de fabrication après l'accord de la CAO ; argent : environ 15 jours ouvrés ; livraison États-Unis 5 à 7 jours ouvrés ; photos de la bague terminée envoyées par e-mail avant l'expédition ; première épreuve CAO en 2 à 3 jours ouvrés (politique des pièces sur mesure) [V, /pages/shipping-policy, /pages/doveggs-custom-jewelry-policy].
- **Livraison** : 19 $ pour toute commande aux États-Unis depuis le 17/10/2025 ; international gratuit au-delà de 500 $ (9 $ de 300 à 500 $, 19 $ en dessous) ; droits de douane pris en charge par DovEggs pour les États-Unis ; FedEx ou DHL avec suivi ; pas de livraison en boîte postale [V].
- **Retours** : 30 jours (échange, mise à taille ou remboursement) ; **15 % de frais de reprise sur les pièces gravées ou sur mesure** ; pièces retaillées ou déjà échangées non retournables ; après 30 jours, reprise possible avec frais (échange 15 à 30 %, remboursement 30 à 50 %), transport à la charge du client [V, /pages/enjoy-your-free-shipping-return]. Une seule mise à taille gratuite et un seul échange.
- **Prix et cours de l'or** : pas de réajustement pour les variations ordinaires ; révision possible si le cours bouge de 5 % ou plus depuis le devis ; commande « dormante » après 60 jours sans confirmation [V, /pages/doveggs-custom-jewelry-policy].
- **Garantie** : garantie limitée à vie sur défauts de fabrication, étiquette de retour gratuite les 90 premiers jours [V, /pages/doveggs-repair-warranty].

## Confiance et service

- **Avis** : 4,97 sur 4 240 avis vérifiés, 2 744 avec photos (page de mission) [V, /pages/customer-reviews]. Les avis lus citent communication et suivi ; un avis d'avril 2026 note la hausse des prix.
- **Preuves de fabrication** : photos de bagues terminées envoyées avant l'expédition ; photos de bagues réelles de clients sur chaque fiche ; pas de vidéo d'atelier ni de suivi de fabrication en ligne vus ; suivi de colis après expédition [V].
- **Service** : e-mail inquiry@doveggs-seattle.com, téléphone 425-207-7431 (10 h à 17 h, heure du Pacifique), salle d'exposition 600 1st Ave Suite 208, Seattle, sur rendez-vous ; Facebook, Instagram, groupe de clients [V, /pages/faq et pied de page]. Programme de fidélité, page « Customer Designs » [V, liens].
- **Langues, devise** : anglais ; dollars, sélecteur de pays/devise présent [V].
- **Libellé du synthétique** : « Lab Grown Diamond », « lab diamonds » [V].
- **Page d'assistance aux agents** : le site publie `agents.md`, `llms-txt` et un point d'accès UCP/MCP pour les assistants d'achat [V, robots.txt] : non utilisés.

## Points forts à retenir pour JR Diamond

1. **Photos de bagues réelles de clients** avec le texte « Real customer rings — not renders » : même promesse « ce que vous voyez existe ». Preuve : fiche `6-prongs-solitaire-moissanite-engagement-ring`, 14 photos.
2. **Photos de la bague terminée par e-mail avant l'expédition**. Preuve : `/pages/shipping-policy` (« We will send you pictures of the finished jewelry by email for your review before we ship it »).
3. **Politique écrite pour le sur mesure** : révisions CAO gratuites, première épreuve en 2 à 3 jours, clause de 5 % sur le cours de l'or, commandes dormantes à 60 jours. Preuve : `/pages/doveggs-custom-jewelry-policy`.
4. **Droits de douane pris en charge et frais fixes annoncés** (19 $ États-Unis). Preuve : `/pages/shipping-policy`. Utile pour la future livraison vers la France.
5. **Explication du supplément de métal** (« Why is there an add-on price? ») au point de choix. Preuve : texte sur la fiche testée.
6. **Aide au choix de la pierre en vidéo** (« See videos for cut, color, and size ») et tableaux de taille. Preuve : bouton sur la fiche testée.

## Défauts observés

- Pas de visuel qui change selon les options : les photos sont celles d'autres bagues, pas celle que l'on configure [V, fiche testée, pas de rendu].
- Prix de départ très bas (181 $) mais supplément de métal et de pierre variables non décomposés ; un avis se plaint de hausses de prix [V].
- 15 % de frais de reprise sur le sur mesure et la gravure ; remboursement après 30 jours entre 30 et 50 % de frais [V].
- Les « Please choose » sont répétés pour plusieurs menus de ton de métal et de couleur de pierre dans le DOM, signe d'un empilement d'applications d'options [I].
- Faute de frappe dans l'adresse de la collection solitaire (`/collections/solitaite`) et orthographes approximatives dans les politiques (« repaire ») [V].
- La remise de 18 % est « appliquée au paiement » : le prix affiché n'est pas le prix payé [V].

## Limites de l'audit

- Ajout au panier, panier, livraison au paiement, moyens de paiement du panier : non audités (`/cart/add` et `/cart.js` interdits par robots.txt). Les logos de paiement du pied de page (Amex, Apple Pay, Discover, Google Pay, Mastercard, PayPal, Visa et d'autres) sont lisibles sur la capture [I] ; la page « Payment Method » de la fiche n'a pas été dépliée.
- Effet des options sur le prix et sur l'image : les menus de la fiche sont des composants personnalisés ; les essais de sélection par script n'ont modifié ni le prix ni l'image, donc **non vérifié** (le script n'a pas aussi cliqué les éléments visibles du menu personnalisé).
- Compte, recherche, collections détaillées, vidéos, fiche de diamant de laboratoire et « Custom Your Own » : non ouverts.
- Mesure du visuel principal : première image de fiche (supérieure à 200 px) en 1,9 s sur ordinateur et 1,9 s en iPhone [V, une mesure, sans cache].
- Le robots.txt contient des consignes pour les agents (identification, interfaces UCP) : non mises en œuvre, le contrôle était une lecture de visiteur ordinaire.

## Sources

- https://www.doveggs-seattle.com/pages/start-with-loose-lab-grown-diamond
- https://www.doveggs-seattle.com/products/6-prongs-solitaire-moissanite-engagement-ring
- https://www.doveggs-seattle.com/collections/solitaite et /collections/designs
- https://www.doveggs-seattle.com/pages/enjoy-your-free-shipping-return
- https://www.doveggs-seattle.com/pages/shipping-policy
- https://www.doveggs-seattle.com/pages/doveggs-custom-jewelry-policy
- https://www.doveggs-seattle.com/pages/doveggs-repair-warranty
- https://www.doveggs-seattle.com/pages/faq
- https://www.doveggs-seattle.com/pages/customer-reviews
- https://www.doveggs-seattle.com/robots.txt (contrôle par `robots.cjs`)
