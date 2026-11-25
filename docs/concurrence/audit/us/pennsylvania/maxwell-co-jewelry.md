# Audit : Maxwell & Co. Jewelry (Leola, Pennsylvanie)

- **Site** : Maxwell & Co. Jewelry (« Maxwell The Jeweler »), https://maxwellandcojewelry.com/
- **Page de départ** : https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler
- **Date** : 15/11/2026 (consigne de l'étude ; mesures faites le 25/11/2026)
- **Appareils** : ordinateur (Chromium 1366 × 900, en-US) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours de la fiche testé en entier, mais le panier n'a pas pu être rempli : `/cart/add` est interdit par robots.txt (« panier interdit par robots.txt »). Seul le panier vide a été lu.
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en dollars américains.

## Parcours

Une seule fiche Shopify fait office de configurateur : 3 listes d'options, 60 variantes, un prix par variante. Pas de 3D, pas de choix de carat ni de forme libre. [V]

| Étape | Options |
| --- | --- |
| 1. Style | Round Halo, Oval Halo, Princess Solitaire, Round Solitaire, Heart Solitaire |
| 2. Métal | 14k ou 18k × blanc, jaune, rose (6 choix) |
| 3. Pierre centrale | Natural 1 ct, Lab 1 ct |
| 4. Quantité | − / + (1 par défaut) |
| 5. Ajout | « Add to cart » (non cliqué), puis panier, puis paiement (non ouvert) |
| Hors parcours | Taille : prix pour la taille US 7, ajustement par téléphone après la commande ; essayage caméra ; « Make an Offer » ; SMS |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Round Halo / Oval Halo / Princess Solitaire / Round Solitaire / Heart Solitaire | radio (Style) | Change l'adresse `?variant=…` et la photo principale (images « engagement-ring-builder-posNN » ou « cp-MXW-0680-pNN ») ; la photo suit le style | Oui (voir tableau des prix) | Fonctionne [V] |
| 14k White / Yellow / Rose Gold | radio (Metal) | Change la variante et la photo (p3 blanc, p4 jaune, pos06 rose) | Identique entre les trois couleurs d'un même titre | Fonctionne [V] |
| 18k White / Yellow / Rose Gold | radio (Metal) | Idem | +1 240 à +2 272 $ selon style et pierre, identique entre les couleurs | Fonctionne [V] |
| Natural 1 ct / Lab 1 ct | radio (Center Stone) | Change la variante et la photo (p4 naturel, p5 synthétique en jaune 18 k) | Lab moins cher de 1 705 à 6 160 $ (selon style et titre) | Fonctionne [V] |
| Quantity − / champ / + | boutons, nombre | 1 → 2 → 1 | Non relevé | Fonctionne [V] |
| Add to cart | submit | Non cliqué : appelle `/cart/add`, interdit par robots.txt | n. a. | Non testé (raison : robots.txt) |
| More payment options | lien `#` | Non cliqué (consigne : jamais de bouton de paiement) | n. a. | Non testé (raison : règle de l'audit) |
| Text us about this piece | lien `sms:` | Ouvre une application de SMS préremplie (« Hi Maxwell & Co. — I have a question about… ») ; adresse relevée dans le code, non ouvert | n. a. | Non ouvert (SMS) |
| 📷 Try It On — see this ring on you | bouton | Ouvre une fenêtre « See it on your hand » : « Use my camera » ou « Take / upload a photo » ; sur ordinateur, un QR code à scanner avec le téléphone ; « Find my ring size » ; « Nothing is uploaded, recorded, or stored » | n. a. | S'ouvre [V] ; caméra et envoi de photo non actionnés |
| 📏 Find my ring size | bouton (dans l'essayage) | Mesure de la taille à l'écran ; non actionné | n. a. | Non testé (caméra) |
| Make an Offer | bouton | Ouvre un formulaire : nom, e-mail, téléphone, adresse, offre en dollars, carte via Square, « charged only if your offer is accepted », offre valable 24 h, hCaptcha | n. a. | S'ouvre [V] ; formulaire non rempli |
| Share | `summary` | Déroule un champ avec l'adresse de la page et « Copy link » ; fermeture « Close share » | n. a. | Fonctionne [V] ; copie non faite |
| Photo principale (clic) | image | Pas de fenêtre agrandie obtenue par clic à l'écran (délai de 3 s dépassé) ; la page expose pourtant 40 médias (« Open media N in modal ») | n. a. | Zoom non confirmé |
| Vignettes / galerie | 40 éléments | 40 médias sur la fiche ; aucune vidéo (`<video>` : 0) ni 3D | n. a. | Présent [V] |
| Catalog (menu) | `summary` | 9 collections : By Maxwell The Jeweler, Shop All, Watches, Rings, Necklaces & Pendants, Earrings, Anklets & Bracelets, Sterling Silver, Coins & Bullion | n. a. | Liens relevés [V], non suivis |
| Home, We Buy Gold, Watch!, Design Your Own, About Us, Jewelry Repair, Slice of the Diamond District | liens | Pages relevées dans l'en-tête ; Design Your Own, About Us lues | n. a. | Lien vivant (200) [V] pour les pages lues |
| Search (loupe) | bouton | Barre de recherche ; non utilisée | n. a. | Non testé |
| Log in | lien | Mène à `customer_authentication/redirect` | n. a. | Non suivi (compte) |
| Cart | lien | `/cart` : panier vide lu | n. a. | Fonctionne [V] |
| Call or text (717) 475-8814 ; e-mail ; bandeau « QUESTION ABOUT A CUSTOM PIECE… » | liens `tel:`, `mailto:` | Non ouverts | n. a. | Présents [V] |
| See all Google reviews | lien | Mène à Google Maps ; non suivi | n. a. | Présent |
| Newsletter (e-mail + Subscribe) | formulaire | Non rempli | n. a. | Non testé (formulaire) |
| Facebook, Pinterest, Instagram, TikTok, YouTube | liens | Non suivis | n. a. | Présents |
| Shipping, Refund policy, Terms of Service, Contact | liens | Shipping et Refund lus (200) | n. a. | Fonctionnent [V] |

Contrôles relevés par `controls.cjs` : 71 sur ordinateur, 61 sur iPhone (même liste, le menu étant replié). Comportement identique sur iPhone 13 pour les options, l'essayage (sans le QR code) et les prix. [V]

## Options disponibles

- **Style** (5) : Round Halo, Oval Halo, Princess Solitaire, Round Solitaire, Heart Solitaire. [V]
- **Métal** (6) : 14k et 18k, blanc, jaune, rose. Pas de platine. [V]
- **Pierre centrale** (2) : Natural 1 ct, Lab 1 ct. Un seul carat, pas de choix de forme ni de couleur et pureté. [V]
- **Pierres d'accent** : Round Halo environ 0,50 ct (environ 1,50 ct au total) ; Oval Halo environ 0,90 ct (environ 1,90 ct au total) ; « Accent weights are estimates ». [V]
- **Taille** : prix pour la taille US 7 ; +2,7 % par demi-taille en plus, −2,7 % par demi-taille en moins ; la taille se donne par téléphone ou SMS après la commande. Pas de sélecteur de taille. [V]
- **Gravure, griffes, pavage, carat, certificat** : aucune option. [V]
- **Sur mesure** : page « Design Your Own », séance de dessin à 99,99 $, 5 rendus au plus, devenant l'acompte à l'approbation du devis. [V]

### Prix des 60 variantes (page lue, `.js` du produit)

| Style | 14k naturel | 14k Lab | 18k naturel | 18k Lab |
| --- | --- | --- | --- | --- |
| Round Halo | 5 390 | 2 921 | 7 370 | 4 874 |
| Oval Halo | 8 250 | 3 894 | 9 900 | 5 452 |
| Princess Solitaire | 5 258 | 2 823 | 6 820 | 5 095 |
| Round Solitaire | 4 950 | 3 245 | 6 490 | 4 485 |
| Heart Solitaire | 11 000 | 5 192 | 12 650 | 6 490 |

Les trois couleurs d'un même titre ont le même prix dans toutes les lignes. [V]

## Prix, délais, retours, garanties

- **Prix** : un prix complet par combinaison, affiché sans acompte ni supplément : « The price you see is the full price for that exact ring. No deposit games, no surprise add-ons, no “call for price.” » [V]. Pas de décomposition (or, pierre, façon). Le prix de l'or n'est pas expliqué. Un appel à `kdb-gw.prod.kitco.com` (cours de l'or) part à l'ouverture de la page ; son rôle n'est pas visible [I].
- **Livraison** : « Shipping calculated at checkout » ; assurée avec signature ; code FREESHIP250 pour la livraison gratuite au-delà de 250 $. [V]
- **Délai** : « 2 to 4 weeks for production », fabrication à la commande, à la main. Sur-mesure : 50 % à la mise en fabrication, solde à la remise. [V]
- **Retours** : bandeau de la fiche « 48-hour returns » ; politique de retour : « 30 day return policy », pièce non portée, étiquettes, frais de retour déduits du remboursement. Les deux textes se contredisent. Aucune exception pour le sur-mesure n'est écrite dans la politique ; les séances de dessin « ne sont pas remboursables ». [V]
- **Garanties** : pas de garantie écrite de la bague sur la fiche. En cas de défaut : « contact us immediately ». [V]
- **Certificats** : aucun certificat GIA ou IGI mentionné sur la fiche, ni pureté ni couleur de la pierre de 1 ct. [V]
- **Synthétique** : libellé « Lab 1 ct » et, dans le texte, « lab diamond ». Pas d'avertissement légal. [V]
- **Paiement** : Shop Pay, Square, hCaptcha présents dans le code ; moyens de paiement du panier non affichés (panier vide, rien à payer). [I]

## Confiance et service

- Avis : « 5.0 from 54 Google reviews », extraits de clients repris sur la page ; la plupart parlent de rachat d'or ou de réparation, un seul d'une bague de fiançailles sur mesure. [V]
- Preuves de fabrication : page « About Us » avec vidéos d'atelier (fonte de l'or, balayage de la poussière d'or, alliage de 10 k) et page « Watch! » ; aucune photo ou vidéo de la bague commandée, aucun suivi de commande vu. [V]
- Contact : téléphone, SMS, e-mail, magasin au 6 Glenbrook Rd, Leola, Pennsylvanie, mardi au samedi de 10 h à 17 h. Pas de chat, pas de WhatsApp. [V]
- Essayage sur la main par la caméra, sans envoi de données selon le site (« Nothing is uploaded, recorded, or stored ») [V, texte du site]. Vérification technique non faite.
- Langue : anglais seul ; devise : dollar américain seul. [V]
- Pas de financement, de comparaison, d'enregistrement ni de guide de tailles vus sur la fiche. [V]

## Points forts à retenir pour JR Diamond

1. **Un prix final par combinaison, sur la fiche, avec un bouton d'ajout.** Preuve : 60 variantes lues dans https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler.js, de 2 823 à 12 650 $ ; prix qui change à chaque clic. C'est l'écart principal relevé dans la synthèse (prix « Sur devis » chez JR Diamond).
2. **Adresse propre à chaque variante** (`?variant=…`) : la configuration se partage par le lien, avec un bouton « Share ». Preuve : l'adresse change à chaque option (relevé ci-dessus).
3. **Le texte dit le prix de l'écart naturel et synthétique** : Round Solitaire 14 k à 4 950 $ en naturel et 3 245 $ en synthétique ; l'option est une simple pastille. Preuve : tableau ci-dessus.
4. **Ajustement de taille expliqué en pourcentage** (+/− 2,7 % par demi-taille). Preuve : texte de la fiche.
5. **Essayage sur la main par caméra ou photo, avec QR code sur ordinateur** pour passer au téléphone. Preuve : fenêtre « See it on your hand » ouverte au clic.
6. **Rapidité du visuel** : photo principale en 0,6 s sur iPhone et 0,7 s sur ordinateur (voir mesures). Preuve : mesure LCP.
7. **Promesse de fabrication à la main sur place** appuyée par des vidéos d'atelier sur une page séparée. Preuve : page « About Us », section « Watch the Work Happen ».
8. **Offre ferme « Make an Offer »** (carte débitée seulement si l'offre est acceptée sous 24 h) : mécanisme de négociation en ligne que JR Diamond n'a pas. Preuve : formulaire ouvert.

## Défauts observés

- **Contradiction sur les retours** : « 48-hour returns » sur la fiche contre « 30 day return policy » dans la politique. [V]
- **Message d'essayage inexact** : « This piece is one of a kind in our Leola store; call … and we'll hold it for you », sur une bague annoncée comme fabriquée à la commande. [V]
- **Aucun certificat ni caractéristiques de la pierre** (couleur, pureté, taille) pour la pierre de 1 ct, naturelle ou synthétique. [V]
- **Pas de rendu 3D** : photos génériques par style et métal ; les photos de « Lab » et « Natural » sont d'autres images, sans garantie de montrer la bague exacte. [I]
- **Un seul carat** (1 ct) ; pas de choix de forme libre, de carat, de griffes ni de gravure. [V]
- **Les trois couleurs d'or ont le même prix** (14 k jaune = blanc = rose) ; aucune explication du prix (le rhodiage de l'or blanc n'est pas mentionné). [V]
- **Prix 18 k incohérents** : Princess Solitaire 18 k synthétique (5 095 $) coûte +2 272 $ de plus que le 14 k, contre +1 240 $ pour Round Solitaire. Écarts non expliqués. [V]
- **La taille se règle après la commande par téléphone**, pas dans le parcours. [V]
- **Délai de 2 à 4 semaines** : plus long que les 14 jours ouvrés de JR Diamond. [V]
- Les médias de la galerie n'ont pas pu être agrandis par un clic dans le test. [V, à reconfirmer]

## Limites de l'audit

- Panier non rempli : `/cart/add` interdit par robots.txt ; le récapitulatif, les frais de livraison réels, le délai et les moyens de paiement du panier n'ont donc pas été vus. Panier vide seulement.
- Essayage caméra, envoi de photo, « Find my ring size », SMS, téléphone, formulaire d'offre et lettre d'information non actionnés (aucune donnée saisie).
- Recherche, filtres et collections (rings, etc.) non explorés ; pas de comparaison du prix de pierres libres.
- Mesures : une seule passe par appareil, sur une connexion de bac à sable via proxy ; chiffres indicatifs.
- La carte des prix vient du fichier `.js` du produit, confirmé par les clics pour 13 combinaisons ; les autres sont lues sans clic.
- Pages lues à la cadence d'une toutes les 2 secondes au plus (pages de politique, de design et d'à-propos par curl, après contrôle robots.txt).

### Mesures du visuel principal

| Appareil | DOM prêt | Chargement complet | Plus grand élément visible (LCP) |
| --- | --- | --- | --- |
| Ordinateur 1366 × 900 | 1,7 s | 3,1 s | 0,66 s (second passage, 1,45 s au premier) |
| iPhone 13 | non mesuré | non mesuré | 0,59 s |

## Sources

- https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler (et `.js`, prix des 60 variantes)
- https://maxwellandcojewelry.com/policies/refund-policy
- https://maxwellandcojewelry.com/policies/shipping-policy
- https://maxwellandcojewelry.com/pages/custom-jewelry-design
- https://maxwellandcojewelry.com/pages/about-us-new-draft
- https://maxwellandcojewelry.com/cart (vide)
- https://maxwellandcojewelry.com/robots.txt (Disallow `/cart/`, `/checkout`, `/account`, `/orders`)
- Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/maxwell/` (hors dépôt)
