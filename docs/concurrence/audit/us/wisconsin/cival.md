# Audit : CIVAL (Milwaukee, Wisconsin)

- **Site** : CIVAL, https://www.shopcival.com/ (Shopify, boutique et atelier à Bay View, Milwaukee)
- **Page de départ** : https://www.shopcival.com/collections/2026-made-to-order-rings-w-e
- **Date** : 15/11/2026 (lecture réelle faite en session le 25/11/2026 ; date de l'étude conservée)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (parcours de configuration complet jusqu'à l'ajout au panier exclu : « Add to cart » appelle `/cart/add`, INTERDIT par robots.txt ; panier vu vide)
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

Pas de configurateur 3D. Le « Made to Order » est une **fiche produit à options** (module tiers « tpo », Product Options) sur chaque modèle de bague. [V] https://www.shopcival.com/products/julia-14k-made-to-order-engagement-ring

| Étape | Options |
|---|---|
| Collection (départ) | ~35 modèles « 14k Made to Order » (Julia, Gia, Catarina, Hydra, Darcy… Elena) ; boutons de tri et 3 tailles de vignettes [V] |
| 1. Matériau de la monture | 14k or jaune, 14k or blanc [V] |
| 2. Taille de doigt | Liste déroulante : « Unsure send me a ring sizer! », 3 à 13 par quarts [V] |
| 3. Pierre | Lab Diamond, Moissanite [V] |
| 4. Forme | Oval, Round, Cushion, Emerald, Marquise, Asscher, Elongated Cushion, Princess (pictogrammes) [V] |
| 5. Carat | 1, 1,5, 2, 2,5, 3, 4 ct (selon pierre et forme ; moissanite : pas de 2,5 ct pour certaines formes) [V] |
| Fin de fiche | Quantité, « Gift Wrap? Yes », « Drop a Hint », « Add to wishlist », « ADD TO CART » [V] |

## Contrôles vérifiés

Collection, ordinateur : 146 contrôles relevés par `controls.cjs` (dont ~70 liens de menu et ~40 liens de fiches). Fiche Julia : contrôles ci-dessous.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| SORT BY | bouton (collection) | Tri ; options non ouvertes | n/a | non testé (liste non lue) |
| Vignettes large / medium / compact | boutons | Changent la taille des vignettes | non | présents [V], effet non mesuré |
| USD $ (Change country or currency) | bouton | Sélecteur pays/devise : liste de pays avec devises (EUR, GBP, CAD, AUD, CNY…) | affichage converti [I] | liste lue, sélection non faite |
| Search / Cart (0) / Login | liens | /search, /cart, connexion | n/a | /cart ouvert : « Your cart is empty » [V] |
| 14k Yellow Gold / 14k White Gold | boutons radio | Sélection, bouton noir | **aucun supplément** (total resté 2 840 $) | OK [V] |
| Select Ring Size | liste | 3 à 8,75 : 0 $ ; 9 à 13 : **+100 $** ; option « ring sizer » | 2 840 → 2 940 $ à la taille 9 | OK [V] |
| Lab Diamond / Moissanite | boutons | Choix de la pierre ; ouvre les formes et carats correspondants | voir carat | OK [V] |
| Forme (Round, Oval, Cushion…) | pictogrammes | Révèle la rangée de carats de cette forme ; affiche la valeur choisie à côté du titre | via carat | OK [V] (Round - Brilliant testé) |
| Carat 1 à 4 ct | boutons avec supplément | Chaque bouton affiche son supplément ; total mis à jour | Round 2 ct lab : **+1 350 $**, total 2 940 → 4 290 $ [V] | OK [V] |
| Moissanite après 2 ct lab | bouton | Retour à 2 940 $ (carat à rechoisir) | −1 350 $ | OK [V] |
| Total price | texte | Total recalculé à chaque option | oui | OK [V] |
| Quantité − / + | boutons | « − » désactivé à 1 | n/a | présents [V] |
| Gift Wrap? Yes | case | Emballage cadeau | non lu | présent [V] |
| Drop a Hint | bouton | Envoi d'un indice à un proche (formulaire) | n/a | **non ouvert** : le clic de mon script n'a pas ouvert de fenêtre, cause inconnue [S] |
| Add to wishlist (« 7 ») | bouton | Liste de souhaits, compteur 7 | n/a | non cliqué (écriture côté serveur possible) |
| Reviews (onglet latéral) / Wishlist (onglet) | widgets | Avis clients ; volet liste de souhaits | n/a | présents [V], contenu non lu |
| Galerie photo 15 vues (Go to item 1…15) | boutons | Photos produit, portées, écrin | n/a | présents [V] ; pas de 3D, vidéo ni 360° observés |
| ADD TO CART | bouton | Ajoute au panier via `/cart/add` | n/a | **non cliqué : panier interdit par robots.txt** |
| Affirm « Starting at $92/mo or 0% APR » + Learn more | texte + lien | Financement Affirm | mensualité 92 $ | lu [V], lien non ouvert |
| Custom Design Questionnaire | lien | Google Forms externe | n/a | non ouvert (formulaire) |
| Initiate a Return | lien | Compte Shopify (shopify.com/…/account) | n/a | non ouvert (compte) |
| Téléphone 414-394-0355 / e-mail | liens tel: / mailto: | Appel / mail | n/a | présents [V] |
| Newsletter (champ e-mail + SUBSCRIBE) | formulaire | Inscription | n/a | non rempli (règle) |
| Compte à rebours « CYBER MONDAY STARTS NOW… » | bannière | Lien vers /pages/band-builder | n/a | lu [V] |
| Pages /pages/shop-policies, /pages/custom-fine-jewelry, /pages/band-builder | liens | Pages de texte | n/a | lues [V] |

## Options disponibles

- **Métal** : 14k or jaune, 14k or blanc (pas de 18 k, pas de platine, pas de rose sur Julia) [V].
- **Pierre** : diamant de laboratoire (« Lab Diamond »), moissanite ; diamants naturels et pierres de couleur « sur demande » [V, texte de la FAQ].
- **Formes** : 8 (Oval, Round, Cushion, Emerald, Marquise, Asscher, Elongated Cushion, Princess) [V].
- **Carats** : 1 à 4 ct ; lab round : 1, 1,5, 2, 2,5, 3, 4 [V].
- **Taille** : 3 à 13 (quarts), ring sizer envoyé sur demande [V].
- **Pas** de choix de griffes, pavage, corps de bague, gravure, ni de filtre pureté, couleur, certificat, prix [V].

## Prix, délais, retours, garanties

- **Affichage du prix** : prix de base « $2,840.00 » (Julia, 14k jaune), « Tax excluded. Shipping calculated at checkout », puis « Total price » recalculé ; suppléments entre parenthèses sur chaque option [V]. Prix de modèles voisins : de 1 740 $ (Sable) à 3 600 $ (Elena) pour la base [V].
- **Décomposition** : supplément visible par taille ≥ 9 (+100 $) et par carat (+540 $ pour 1 ct lab round, +750 $ à 1,5 ct, +1 350 $ à 2 ct) [V] ; pas de décomposition métal / pierre / façon.
- **Délai** : « typical Made-to-Order turnaround 4–8 weeks » ; expédition « up to 7 business days » (hors production) ; sur mesure : 4 à 6 semaines après approbation [V] https://www.shopcival.com/pages/shop-policies
- **Livraison** : gratuite en livraison intérieure américaine (« domestic ») dès 100 $ ; USPS First Class 2-3 jours ouvrés ; Priority en option ; retrait gratuit en boutique ; international possible (douane) [V].
- **Retours** : 20 jours, article non porté ; frais de 10 % au-delà de 500 $ (plafonnés à 100 $) ; frais d'étiquette retranchés ; « Custom orders, gift cards, and sale items are non-returnable » [V]. Le « Made to Order » n'est pas cité nommément dans l'exception [I].
- **Garantie** : 60 jours pour signaler un défaut ; réparation gratuite si erreur de l'atelier ; mise à taille et réparations sur rendez-vous [V].
- **Certificats** : aucune mention GIA ou IGI vue sur la fiche Julia ni sur la page de règles [V, absence].
- **Paiement** : Shop Pay et paiement accéléré présents dans la page (requêtes à l'ouverture), Affirm affiché ; moyens finaux non vus (paiement interdit) [I].
- **Libellé du synthétique** : « Lab Diamond » (et « lab diamonds » dans la FAQ) [V].

## Confiance et service

- Atelier physique : 2159 S Kinnickinnic Ave, Milwaukee ; mar-sam 11-18 h, dim 11-16 h ; chien accepté [V].
- Rendez-vous de consultation Made-to-Order par e-mail ; consultation gratuite pour le sur mesure ; devis fourni avant fabrication ; contrat et acompte [V].
- Process « custom » décrit en 4 étapes (questionnaire, consultation, CAD + image « photorealistic », fabrication) ; envoi d'images et de vidéos des pierres aux clients à distance ; mises à jour « à chaque étape » [V].
- Avis : onglet Reviews présent, note non lue ; galerie de projets sur /blogs/test-custom et /pages/gallery [V liens, contenu non lu].
- Langue : anglais seulement observé ; devise USD avec sélecteur de pays [V/I].
- Partenariat Stuller pour la « Quick Build » (/pages/band-builder) [V].
- Pas de chat ni de WhatsApp vu ; téléphone et e-mail [V].

## Points forts à retenir pour JR Diamond

1. **Prix recalculé en direct avec le supplément affiché sur chaque option** (2 840 → 4 290 $ avec 2 ct lab round, constaté) : c'est exactement l'écart que JR Diamond (« Sur devis ») a avec le marché.
2. **Choix lab diamond / moissanite en deux clics**, avec les carats propres à chaque forme : une grille claire et courte.
3. **Photos de bijoux portés et dans l'écrin sur 15 vues** : l'image est réelle, pas un rendu.
4. **Financement Affirm affiché sur la fiche** (« à partir de 92 $/mois »).
5. **Politique écrite et claire** (20 jours, 10 % plafonné à 100 $, 60 jours de garantie défaut) : modèle de rédaction.
6. **Livraison gratuite dès 100 $ et retrait en boutique** annoncés avant le panier.

## Défauts observés

- Aucune vue 3D, 360° ni vidéo : le visuel ne change pas avec la forme ou le carat choisi (même photo après sélection) [V].
- Le premier « total » ne change pas avant le choix de la taille de doigt ; la moissanite fait retomber le carat (à rechoisir) [V].
- Pas de certificat ni de qualité de pierre (couleur, pureté) sur la fiche : le prix d'un « 2 ct » ne dit rien de la pierre [V, absence].
- Délai 4 à 8 semaines, très loin de 14 jours ouvrés [V].
- Sur mesure et « Custom » non remboursables ; ambiguïté pour le Made-to-Order [V/I].
- Bouton « Drop a Hint » n'a pas réagi dans mon essai (échec d'automatisation, cause inconnue) [S].

## Mesures

| Mesure | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche Julia : première image visible (≥ 200 px) | 396 ms | 440 ms |
| Fiche Julia : événement load | ≈ 4,2 s | ≈ 3,7 s |
| Défilement horizontal parasite | non | non |

(Connexion du bac à sable, une mesure par appareil ; ordre de grandeur seulement.)

## Limites de l'audit

- Statut partiel : pas d'ajout au panier (`/cart/add` INTERDIT), donc ni récapitulatif, ni frais, ni moyens de paiement du panier. Le panier vide a été ouvert (`/cart`, AUTORISÉ).
- Une seule fiche (Julia) parcourue en détail ; les autres modèles ont les mêmes champs [I]. Les suppléments des formes Oval, Cushion et Marquise (par exemple Marquise 2 ct : +1 950 $) ont été lus après un clic scripté sur un libellé pouvant correspondre à plusieurs formes : à tenir pour indicatifs [S].
- Prix des carats moissanite non relevés. Onglets Reviews/Wishlist et Drop a Hint non lus. Formulaires, newsletter, compte, retours en ligne, chat : non ouverts.
- Des requêtes `cart.js` et `shopify_pay/accelerated_checkout` ont été émises par la page elle-même pendant les sélections d'options (comportement du module), sans clic sur un bouton de panier ou de paiement.
- Collection : seul le relevé des contrôles ; tri et filtres non actionnés.

## Sources

- https://www.shopcival.com/collections/2026-made-to-order-rings-w-e [V]
- https://www.shopcival.com/products/julia-14k-made-to-order-engagement-ring [V]
- https://www.shopcival.com/pages/shop-policies [V]
- https://www.shopcival.com/pages/custom-fine-jewelry [V]
- https://www.shopcival.com/pages/band-builder [V]
- https://www.shopcival.com/cart [V, panier vide]
- https://www.shopcival.com/robots.txt [V]
