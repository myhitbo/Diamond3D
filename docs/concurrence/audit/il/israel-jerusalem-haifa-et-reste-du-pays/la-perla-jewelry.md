# Audit : La Perla Jewelry (LPJ)

- **Site** : La Perla Jewelry, joaillier russophone de Ramat Gan (Harakon 9, [V] pied de page)
- **Adresse** : https://lpj.co.il/ (robots.txt relu le 25/11 : tout AUTORISÉ, seul /wp-admin/ est interdit [V])
- **Date de l'audit** : 15/11/2026 (pages rouvertes et complétées le 25/11)
- **Appareils** : Chromium ordinateur (1366×850) et affichage iPhone 13
- **Statut** : **partiel**. Site catalogue WordPress/WooCommerce sans configurateur ; parcours jusqu'au panier fait, paiement non ouvert (consigne).

## Parcours

| Étape | Options relevées [V] |
|---|---|
| Accueil | Menu SHOP / ABOUT / REVIEWS / CONTACTS ; onglets Best Sellers, Earrings, Bracelets, Rings, Pendants ; cartes produits ; sélecteur de langue ; bouton « Получить скидку » ; bouton « Ask a question » |
| Catégorie `/product-category/rings/` | 57 résultats, 12 par page, 5 pages ; tri : défaut, popularité, nouveauté, prix croissant, prix décroissant ; recherche texte. Aucun filtre (métal, pierre, carat, prix) |
| Fiche produit | Galerie (jusqu'à 15 vignettes), onglet « Description », liste de services, produits liés ; **sur les bagues à prix** : un seul menu « Gold » (red / white / yellow), quantité, « Add To Cart » ; **sur les bagues sans prix** : bouton « Check price » vers WhatsApp |
| Panier `/cart/` | Ligne produit, quantité, suppression, totaux, 3 modes de livraison, calcul de livraison (pays, région, ville, code postal), « Proceed To Checkout » |
| Paiement | Non ouvert (consigne : panier au plus) |

Pas de choix de forme, de carat, d'origine, de monture, de taille de doigt ni de gravure sur la fiche [V : fiches « Oval na million » et « Золотое помолвочное кольцо » lues].

## Contrôles vérifiés

Relevé automatique : accueil 141 contrôles (ordinateur), fiche 56 (ordinateur) et 50 (iPhone) ; la quasi-totalité sont des liens vers des fiches (carrousels). Tableau des contrôles distincts :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Facebook, Instagram (en-tête) | lien | réseaux sociaux (adresses relevées, non ouvertes) | – | non testé (domaines tiers) |
| « wishlist » | lien | mène à `http://demo.roadthemes.com/mirora/wishlist/`, c'est-à-dire le site de démonstration du thème, pas la boutique | – | cassé en pratique [I], non ouvert (domaine tiers) |
| SHOP / ABOUT / REVIEWS / CONTACTS | menu | pages ouvertes, code 200 ; « SHOP » renvoie à `/` | – | OK |
| Onglets Best Sellers / Earrings / Bracelets / Rings / Pendants | onglets | filtrent le carrousel de l'accueil | – | OK (relevés, non chronométrés) |
| Cartes produit (~100 liens) | lien | ouvrent la fiche | prix affiché ou absent | OK sur 4 fiches ouvertes |
| Fil d'Ariane Home > Rings | lien | catégorie bagues | – | OK |
| Vignettes de la galerie | lien image | 15 vignettes sur « Oval na million » ; agrandissement par visionneuse (balises `pswp` présentes) ; clic automatique sur l'image principale non concluant | – | partiel |
| Menu « Gold » (red, white, yellow) | liste | active « Add To Cart » (désactivé avant le choix, `variation_id` 21571 après) ; **l'image reste `22.jpg`** pour les trois couleurs | **inchangé : ₪18 975** pour les trois | fonctionne, sans effet visuel ni tarifaire |
| Add To Cart | bouton | message « a été ajouté à votre panier » + « View Cart » ; panier mis à jour | – | OK |
| « Check price » (16 occurrences sur la fiche sans prix) | lien externe | `https://wa.me/972775130680`, non ouvert | – | non testé (conversation interdite) |
| Tri (5 options) | liste | recharge `?orderby=…` ; **« prix croissant » place d'abord les bagues sans prix** | – | OK avec défaut d'ordre |
| Pagination 1-5 / NEXT / PREV | lien | page 5 ouverte, 9 produits | – | OK |
| Recherche (loupe, champ `s`) | formulaire | champ présent ; non soumis | – | non testé |
| Sélecteur « English▼ » | menu | s'ouvre et propose English, Français, עִבְרִית, Русский (liens `#`) ; langue non basculée | – | partiel : menu ouvert, traduction non vérifiée |
| « Получить скидку » (bas de page) | bouton flottant | élément du module « Click to Chat » (classes `ht-ctc`) : lien de chat, non ouvert | – | non testé (chat) |
| « Ask a question » | bouton flottant | idem | – | non testé |
| Formulaire de contact (nom, e-mail, message) | formulaire | Contact Form 7 ; **non envoyé** | – | non testé (consigne) |
| Quantité / Supprimer / Update cart | champ, lien, bouton | présents au panier ; suppression non cliquée | – | non testé (suppression) |
| Modes de livraison (3 boutons radio) | radio | Registered mail ₪20, Courier ₪50, Local pickup | total 18 995 avec le courrier recommandé | lus |
| Calculate shipping | lien + champs | présent ; non soumis | – | non testé |
| Proceed To Checkout | bouton | mène à `/checkout/` | – | non cliqué (consigne : pas au-delà du panier) |
| Flèches ‹ › des produits liés | boutons | font défiler le carrousel | – | présents, effet non relevé |

Absents (vérifié par l'absence de tout contrôle correspondant dans les relevés) : vue 3D, 360°, vidéo, essayage, réalité augmentée, comparateur, enregistrement de configuration, guide des tailles, financement interactif, prise de rendez-vous.

## Options disponibles

- **Catégories** : bagues (57), boucles d'oreilles, bracelets, pendentifs, « meilleures offres » [V].
- **Métal** : or rouge, blanc, jaune [V, menu Gold] ; titre : « 14 ou 18 carats (au choix) » écrit en texte sur la fiche « Золотое помолвочное кольцо », 585 ou 750 selon les descriptions ; **aucun menu pour le titre** [V].
- **Pierre** : « naturelle ou de laboratoire (les deux avec certificat GIA/IGI) » en texte libre sur des pendentifs ; sur la bague « Овал На Миллион » : diamant naturel 1,00 ct, G–H, VS1–VS2, taille Excellent [V]. Aucun choix interactif.
- **Platine** : mentionné seulement dans la page « About » (« or 14 K ou 18 K et platine ») [V].
- **Taille, gravure, monture, carat** : aucun sélecteur [V].
- **Langues** : russe (principal), anglais (libellés de thème), menu proposant aussi français et hébreu [V]. Pas de devise autre que ₪.
- **Livraison** : courrier recommandé 20 ₪, coursier 50 ₪, retrait sur place [V] ; « Israël, États-Unis, Canada et autres pays » en pied de page [V].

## Prix, délais, retours, garanties

- **Devise** : ₪ uniquement [V]. **TTC ?** Le site ne dit rien de la TVA (ni TTC ni HT) [V]. Écart relevé : la fiche « Овал На Миллион » affiche ₪18 975 en tête et « Цена: 16 500 ₪ » dans le texte. 16 500 × 1,15 = 18 975, donc la différence est un coefficient de 15 % [I] ; la TVA israélienne est de 18 % depuis 2025 [S : à confirmer], le site n'explique pas l'écart.
- **Décomposition du prix** : aucune (ni métal, ni pierre, ni façon) ; seules les caractéristiques de la pierre sont citées. Prix « à partir de » sur l'accueil (ex. pendentif « от ₪3200 ») [V]. Remises barrées vues (₪10 005 → ₪7 820 ; ₪10 120 → ₪7 417) [V].
- **Prix selon la couleur d'or** : identique (₪18 975 pour rouge, blanc, jaune), alors que le texte parle d'or blanc 750 [V].
- **Bagues sans prix** : 16 liens « Check price » sur la fiche relevée ; prix demandé par WhatsApp [V]. Sur 57 bagues, au moins 5 sur les 12 premières n'ont pas de prix [V].
- **Délai** : fabrication « jusqu'à 21 jours ouvrés » puis livraison « 3 à 7 jours ouvrés » par coursier [V : fiche `kolczo-zolotoe-22`]. Le délai de 14 jours de JR Diamond est meilleur.
- **Livraison** : texte « gratuite par coursier dans tout Israël » [V] contre 50 ₪ de coursier au panier [V] : **contradiction** sur la même boutique.
- **Retours / annulation** : aucune page ni mention relevée [V : fiches, panier, about, contact] ; exception du sur mesure non traitée.
- **Garanties** : certificat de bijou et coffret cadeau ; contrôle par l'Institut israélien de normalisation avec poinçon ; nettoyage et remise à neuf gratuits (sans durée) [V].
- **Paiement** : carte jusqu'à 24 mensualités sans intérêt, chèques jusqu'à 18, espèces échelonnées, iCredit ou PayPal [V : texte de fiche]. Moyens affichés au panier : non vus (paiement non ouvert).
- **Certificats** : GIA/IGI cités en texte, et « GIA, CGL » dans la page About [V] ; pas de numéro de certificat ni de lien.

## Confiance et service

- **Terme russe du synthétique** : « лабораторный / лабораторные бриллианты » (diamant de laboratoire), toujours associé à « naturel » dans la formule « натуральные или лабораторные » [V : accueil, fiches pendentifs]. Pas de mention « synthétique ».
- **Adresse et horaires** : Harakon 9, Ramat Gan ; dimanche à jeudi 9 h-19 h ; tél. +972 77-513-0680 ; courriel affiché [V]. Texte d'accueil : atelier fondé en 2009 à la Bourse du diamant, travail à la main [V : About].
- **Avis** : page REVIEWS avec 47 images de plus de 200 px (captures d'avis) mais aucune note agrégée, aucun lien vers une plateforme [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier relevée, pas de suivi de commande [V].
- **Contact** : formulaire, téléphone, bouton de chat (module WhatsApp) [V].
- **Pied de page** : « Copyright © 2023 » alors que des fiches datent de 2025 (image téléversée en 11/2025) [V].

## Points forts à retenir pour JR Diamond

- Public russophone des olim, avec langues du menu (fr, he, en, ru) : la cible existe côté israélien ; preuve : texte entièrement en russe [V].
- Paiement échelonné annoncé (24 mensualités sans intérêt, 18 chèques) : attente locale à couvrir ; preuve : liste des services de la fiche [V].
- Fiche « Oval na million » donne les 4 C (1,00 ct, G–H, VS1–VS2, taille Excellent) et l'épaisseur de la tige (1,6 mm) : bon modèle de transparence technique ; preuve : texte de la fiche [V].
- Frais de livraison choisis au panier (20 ₪ / 50 ₪ / retrait) : clairs avant le paiement ; preuve : page panier [V].
- Mention de l'Institut des normes et du poinçon : rassure sur le titre de l'or ; preuve : fiche [V]. Répond à la question de l'atelier sur le poinçon (à valider par l'atelier).

## Défauts observés

- Aucun configurateur, aucune 3D ; le menu « Gold » ne change ni image ni prix [V].
- Prix absent sur de nombreuses bagues ; le tri « prix croissant » les met en tête [V].
- Prix affiché ≠ prix du texte (18 975 / 16 500) sans explication, TVA non dite [V].
- Livraison « gratuite » contredite par le panier (50 ₪ le coursier) [V].
- Lien « wishlist » vers le site de démonstration du thème [I].
- Emoji illisibles (« ???? ») dans la description de la bague [V].
- Texte d'interface mêlant russe et anglais (« Add To Cart », « Choose an option », « Check price ») ; aucun SKU (« N/A ») [V].
- Titres de fiches génériques (« Gold Ring With Diamonds ») sur beaucoup de bagues [V].
- Aucun retour ni garantie écrits ; avis sans source [V].
- Temps d'apparition de l'image : voir ci-dessous.

## Mesures

| Appareil | Page | Visuel principal visible | Source |
|---|---|---|---|
| Ordinateur | fiche `kolczo-zolotoe-22` | 3,6 s (LCP 3,3 s) | mesure Playwright, une seule passe [V] |
| iPhone 13 | même fiche | 3,7 s (LCP 3,3 s) | idem [V] |
| Ordinateur | fiche `oval-na-million` | 3,4 s | idem [V] |
| iPhone 13 | même fiche | 2,6 s | idem [V] |

Photographies fixes, pas de 3D ; mesures par le proxy de l'audit, donc indicatives.

## Limites de l'audit

- Paiement `/checkout/` non ouvert ; moyens de paiement du panier non relevés.
- Menu de langues : ouvert seulement, traduction non vérifiée ; basculements fr/he non testés.
- Boutons WhatsApp, « Click to Chat », formulaire de contact, recherche, suppression du panier, calcul de livraison : non actionnés (consignes).
- Seules quatre fiches de bagues ouvertes sur 57 ; les autres prix et textes sont lus dans les listes.
- Lien « wishlist » non suivi (domaine tiers).
- Pas de modèle de bague à choix de carat ou d'origine trouvé : l'absence est constatée sur les fiches ouvertes, non sur tout le catalogue.
- Le site affiche un copyright 2023 mais du contenu 2025 : date de dernière mise à jour du catalogue inconnue.
- Captures conservées hors dépôt (dossier de travail de l'audit).

## Sources

- https://lpj.co.il/ (accueil, ordinateur et iPhone)
- https://lpj.co.il/product-category/rings/ (et `?orderby=price`, `?orderby=price-desc`, `/page/5/`)
- https://lpj.co.il/shop/kolczo-zolotoe-22/ (ordinateur et iPhone)
- https://lpj.co.il/shop/oval-na-million/ (variantes, ajout au panier)
- https://lpj.co.il/cart/ (après ajout)
- https://lpj.co.il/otzyvy/ · /about-us-2/ · /contact-2/
- https://lpj.co.il/robots.txt
- Inventaire : `INVENTAIRE.md` (fiche n° 9)
