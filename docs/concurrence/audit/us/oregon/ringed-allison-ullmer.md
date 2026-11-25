# Audit : Ringed (Allison Ullmer) (Oregon, États-Unis)

- **Site** : Ringed, Allison Ullmer LLC, https://www.ringedpdx.com/ (Portland, atelier d'une orfèvre ; site Squarespace). Page de départ : https://www.ringedpdx.com/build-a-ring.
- **Date** : 15/11/2026. **Appareils** : Chromium (Playwright) 1366×900 en-US et iPhone 13, depuis un centre de données.
- **Statut : partiel**. Pages et sélecteurs actionnés ; **Add To Cart non cliqué** : sur Squarespace il appelle `/api/commerce/shopping-cart/…`, et le robots.txt du site interdit `/api/` [V : robots.cjs sur les pages, règle `Disallow: /api/` lue dans le robots.txt]. Panier ouvert vide (`/cart`, autorisé). Aucun blocage de robots.
- Légende : [V] vu ou actionné (adresse en Sources) ; [I] inféré ; [S] supposé. Prix en dollars US. Ce n'est pas un configurateur 3D : c'est une bibliothèque de pierres plus une bibliothèque de montures, sans visuel combiné.

## Parcours

| Étape | Options |
|---|---|
| 0. `/build-a-ring` [V] | Texte d'explication, deux portails « View Gems » et « View Ring Settings », FAQ de 5 questions |
| 1. Gem Library `/build-a-ring-gems` [V] | 32 pierres, prix de 133 à 6 303 $ ; filtres par forme (9) et par provenance ; champ de recherche ; carrousel de formes |
| 1b. Fiche pierre [V] | Carat, origine, taille, dimensions en mm, bagues compatibles, prix, « ADD TO CART », 4 questions, « You Might Also Like » |
| 2. Ring Settings `/build-a-ring-settings` [V] | 11 montures ; filtres : Flush, Bezel, Patterned Band, Multiple Flush, Prong ; recherche |
| 2b. Fiche monture [V] | Taille de doigt (4,5 à 12 par demi), métal (5 options), quantité, ADD TO CART, FAQ |
| 3. Après achat [V] | La pierre est « gardée dans le coffre » ; formulaire de modification avant le paiement ; croquis envoyé ; discussion de design si besoin |
| 4. Panier `/cart` [V] | « You have nothing in your shopping cart », CONTINUE SHOPPING |
| Parcours parallèle [V] | Bague entièrement sur mesure (`/custom-rings`, non lue en détail) ; ateliers où le couple fabrique son alliance (`/handmade-wedding-rings`, lien seulement) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Wedding Ring Experiences, Custom Wedding Rings, Build a Ring, About, Blog, Gimme a Ring, Sourcing, Signature Line, Giving Back, Contact | liens | Navigation | — | Listés (controls.cjs, 37 contrôles sur ordinateur, 45 sur iPhone) [V], non tous ouverts |
| VIEW GEMS / GEM LIBRARY ; VIEW RING SETTINGS / RING SETTINGS | liens | Ouvrent les deux bibliothèques (200) | — | OK [V] |
| Filtres de forme : Emerald, Pear Cut, Oval Cut, Round Cut, Amorphous, Kite, Square, Shield Cut, Hexagon | liens `?category=` | Rechargent la liste | — | `?category=Emerald` : 0 pierre affichée (liste vide) [V] |
| TRACEABLE GEMS | lien | 24 pierres | — | OK [V] |
| UNKNOWN ORIGIN | lien | 6 pierres | — | OK [V] |
| Previous Slide / Next Slide | liens | Carrousel des formes | — | Non actionnés [V] |
| Search (gemmes, montures) | champ | Non saisi : `/search` est interdit par robots.txt, comportement non vérifié | — | Non testé |
| Filtres de monture : Flush, Bezel, Patterned Band, Multiple Flush, Prong | liens | Liste filtrée | — | Listés, non ouverts |
| Select Ring Size (4,5 à 12, 16 valeurs) | liste | Pas d'effet sur le prix pour 14 k jaune, 18 k rose, platine entre 4,5, 7 et 12 | aucun | OK [V] |
| Select Precious Metal : 14KY FAIRMINED, 14KY Rose FAIRMINED, 18KY FAIRMINED, 18KY Rose FAIRMINED, Platinum | liste | Change le prix affiché (fiche Bipartite Solitaire) | 14 k jaune 2 200 $ ; 18 k rose 2 600 $ ; platine 2 300 $ ; initial « from 2 200 $ » | OK [V] ; 14 k rose et 18 k jaune non mesurés |
| Quantity | champ numérique | Valeur 1 | — | Non modifié |
| ADD TO CART (pierre et monture) | bouton | Appelle `/api/commerce/…` | — | **Non cliqué : interdit par robots.txt** |
| Accept (cookies) | bouton | Ferme le bandeau | — | OK [V] |
| FAQ du portail (5 volets) | boutons | Chaque volet s'ouvre, un seul à la fois | — | OK [V] |
| FAQ d'une pierre (4 volets : Return Policy, What happens after I purchase, Repurposed/Lab/Untraceable, What is a Repurposed Diamond) | boutons | S'ouvrent | — | OK [V] |
| You Might Also Like | liens | Pierres ou montures voisines | — | Non ouverts |
| FREE RING SIZER | lien | Page du baguier gratuit (téléchargement) | gratuit | Lien listé, non ouvert [V] |
| GIFT CERTIFICATE | lien | Carte-cadeau (page d'atelier) | — | Non ouvert |
| 503.341.2521 ; allison@ringedpdx.com | liens tel et mailto | Non ouverts | — | Non testés (règles) |
| Zoom, vue 3D, 360°, AR, essayage, comparer, partager, enregistrer, gravure, financement, chat | — | Absents des fiches [V] | — | Absents |

## Options disponibles

- **Pierres** [V] : saphirs de couleur, diamants taille rose, diamants vintage, spinelle noir, rubis, tanzanite, grenat, cabochons. 32 pierres, prix 133 à 6 303 $. Formes : émeraude, poire, ovale, rond, amorphe, cerf-volant, carré, bouclier, hexagone. Origine affichée par pierre (ex. Kenya) ; traçables ou « unknown origin ».
- **Montures** [V] : 11 (Bipartite Solitaire, Subtle Wave, Flat Band, Cluster, Two-Toned Signet, Mountain, Deco Floral, Nouvelle Solitaire, Wide Baroque, Fuse, Shell) ; prix de départ de 1 595 à 7 800 $ [V pour 1 595 (Subtle Wave), 2 200, 3 100, 5 900 ; 7 800 repris du recensement].
- **Métaux** [V] : or Fairmined 14 k jaune, 14 k rose, 18 k jaune, 18 k rose, platine. Pas d'or blanc, pas d'argent.
- **Taille** [V] : 4,5 à 12 par demi-taille.
- **Gravure, forme de pierre au choix, diamant de laboratoire, carat sur mesure** : absents ; pas de filtre carat, couleur, pureté, certificat [V]. Une pierre n'est compatible qu'avec une liste de montures [V].
- **Services** [V] : design chat, baguier gratuit, ateliers de fabrication d'alliances, carte-cadeau.

## Prix, délais, retours, garanties

- **Prix** : prix d'une pierre affiché ; monture « from $… » qui comprend métal, main-d'œuvre, fabrication, sertissage, pierres d'accent et livraison, **hors pierre centrale** [V]. C'est une décomposition simple en deux postes (pierre, monture tout compris).
- **Délai** : tout est fait à la commande ; 6 à 8 semaines pour les montures « Build a Ring », 7 à 9 semaines pour le sur mesure ou modifié, jusqu'à 10 semaines pour la bague Two-Toned Signet [V]. Soit environ 3 à 4 fois le délai annoncé de JR Diamond (14 jours ouvrés).
- **Retours** : « All made to order and custom work is nonrefundable » ; pierres et bagues à pierre de plus de 1 400 $ : remboursement à la discrétion du propriétaire, avec 25 % de frais de réapprovisionnement possibles [V].
- **Livraison, paiement, garantie** : livraison incluse dans le prix de la monture [V] ; frais de livraison, moyens de paiement et garantie non affichés avant le panier ; panier vide sans récapitulatif [V]. Aucune garantie lue sur les pages ouvertes [S pour l'absence ailleurs].

## Confiance et service

- **Éthique** : « traceable and ethical stones », engagement depuis fin 2022 ; or Fairmined ; certifications en pied de page (Fairmined, Ethical Metalsmiths, New York Times) [V]. Ne vend pas de diamants de laboratoire : explique pourquoi (émissions) et dit en examiner une source neutre en carbone [V].
- **Certificats de pierre** : non mentionnés sur les fiches lues (pas de GIA ni IGI) [V].
- **Langues, devises** : anglais, dollars [V].
- **Avis** : aucun avis sur les pages ; liens vers WeddingWire, annuaires et articles de presse en pied de page [V].
- **Preuves de fabrication** : ateliers où les couples fabriquent leur alliance, croquis avant fabrication [V]. Pas de suivi de commande ni de vidéo vus [S].
- **Contact** : une personne (Allison), téléphone et e-mail en pied de page [V]. Pas de chat.
- **Pied de page** : © 2022 [V].

## Points forts à retenir pour JR Diamond

1. **Prix de la monture « tout compris sauf la pierre »** : la phrase « Price includes all precious metal, labor, fabrication, surrounding, accent diamond and gemstones, and shipping. Price does not included the center stone » est la décomposition la plus claire de cette étude locale [V : /build-a-ring-settings/bipartite-solitaire].
2. **Pierre d'abord, puis monture** (« Choose the gem… Then select the ring setting ») et une pierre « gardée dans le coffre » jusqu'au sertissage : répond à la peur de l'échange de pierre relevée dans les forums [V : fiche pierre, FAQ].
3. **Compatibilité pierre/monture écrite sur chaque fiche** (liste des montures compatibles) : évite les mauvais appariements [V].
4. **Modification de la monture : questionnaire avant le paiement, puis croquis, avant toute fabrication** [V : FAQ].
5. **Menu de métal avec prix par métal** : platine moins cher que l'or 18 k rose sur la fiche mesurée (2 300 $ contre 2 600 $), changement de prix immédiat à la sélection [V].
6. **Ateliers de fabrication d'alliance par le couple** : forme de « on voit naître son bijou » [V : lien, page non lue].

## Défauts observés

- **Pas de visuel du bijou assemblé** : ni 3D, ni aperçu pierre + monture ; la monture est montrée avec une autre pierre [V : texte « Worried the center stone of the setting shown isn't the same shape… »].
- **Retours quasi inexistants** : « nonrefundable » pour tout le sur mesure et 25 % de frais pour les pierres [V].
- **Délai long** : 6 à 10 semaines [V].
- **Filtre vide** : `?category=Emerald` n'affiche aucune pierre sur la liste, alors que le bouton existe [V].
- **Libellés incohérents** : les liens de menu « Blog » et « Gimme a Ring » pointent vers des adresses croisées (`/gimme-a-ring` et `/blog`) [V : controls.json].
- Pas de certificat, de carat, de pureté ni de couleur : inadapté à un acheteur de diamant [V].
- Pas de prix en direct combiné pierre + monture ; pas de gravure ; pas de livraison chiffrée avant le panier [V].

## Limites de l'audit

- Pas de clic sur ADD TO CART (interdit par robots.txt, `/api/`) : récapitulatif de panier, frais, délais de livraison et moyens de paiement non vus ; panier vide seul.
- Recherche non utilisée (`/search` interdit). Formulaire de modification, design chat et ateliers non ouverts. Pages Sourcing, Custom Rings et Contact non lues. Prix de 14 k rose et 18 k jaune non mesurés.
- Mesure du temps d'affichage de la première image de contenu (grande image de `main`) : fiche pierre 2,8 s ordinateur et 2,6 s iPhone ; fiche monture 1,6 s ordinateur et 1,2 s iPhone (une mesure chacune, depuis un centre de données, donc indicatif) [V].
- Une seule monture et une seule pierre ouvertes en détail ; les autres sont supposées similaires [S].

## Sources

- https://www.ringedpdx.com/build-a-ring (navigateur, ordinateur et iPhone)
- https://www.ringedpdx.com/build-a-ring-gems et `?category=Emerald`, `?category=Traceable`, `?category=Unknown%20Origin`
- https://www.ringedpdx.com/build-a-ring-gems/lagoon-round-sapphire
- https://www.ringedpdx.com/build-a-ring-settings
- https://www.ringedpdx.com/build-a-ring-settings/bipartite-solitaire
- https://www.ringedpdx.com/cart
- https://www.ringedpdx.com/robots.txt
- `docs/concurrence/audit/us/oregon/INVENTAIRE.md` (recensement du 15/11)
