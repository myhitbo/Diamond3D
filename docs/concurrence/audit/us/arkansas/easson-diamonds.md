# Audit : Easson Diamonds (Fayetteville, Arkansas)

- **Site** : Easson Diamonds, https://eassondiamonds.com/ (page de départ : https://eassondiamonds.com/product-category/engagement-rings/)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **complet** pour ce que le site propose (pas de configurateur 3D : catalogue de 12 bagues à variantes). Pas de blocage : robots.txt autorise les pages visitées, y compris `/cart/`.
- Convention : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Catégorie « Engagement Rings » | 12 bagues (8 par page), tri (6 choix), aucun filtre [V] |
| 2. Fiche produit (ex. Céleste, 3 pierres) | Forme (7), taille de pierre (10), couleur d'or (3), quantité, « ADD TO CART » [V] |
| 3. Panier `/cart/` | Récapitulatif, livraison (retrait ou gratuite), taxe estimée, « PROCEED TO CHECKOUT » [V] |
| (Hors catégorie) Demande sur mesure | Formulaire `/custom-request/` : rendu CAO gratuit sous ~48 h, paiement après validation [V, lu, non rempli] |
| (Hors catégorie) Consultations | Rendez-vous sur place ou par téléphone `/consultations/` (module de réservation « Loading booking… ») [V] |

## Contrôles vérifiés

Page catégorie (ordinateur ; 40 contrôles listés par `controls.cjs`, 34 sur iPhone) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu ENGAGEMENT RINGS (+ sous-menu) | lien / déroulant | Ouvre la catégorie, sous-menu liste les bagues | — | OK [V] |
| CONSULTATIONS | lien | Page de prise de rendez-vous | — | OK [V] |
| CUSTOM REQUEST | lien | Formulaire de demande sur mesure | — | OK (formulaire non rempli) [V] |
| LOGIN | lien | Compte client `/my-account/` | — | Non testé : pas de compte |
| Icône recherche | lien `#` | Ouvre un champ de recherche | — | Non testé (adresses de recherche à éviter) |
| Panier (icône, « empty ») | lien | Mène à `/cart/` | — | OK [V] |
| Tri (Default, popularité, note, nouveauté, prix croissant, prix décroissant) | liste | 6 options présentes | — | Présent [V] ; non actionné (12 articles seulement) |
| 8 cartes bagues (image et titre) | lien | Fiche produit | fourchette « $2 200 – $7 881 » (Amélie) à « $2 600 – $8 325 » (Clémence, Fleurette) | OK [V] |
| Pagination (« 1–8 sur 12 ») | lien | Page 2 : autorisée par robots.txt, non ouverte | — | Non testé |
| Pied de page : Contact, Garantie, Retours, CGU, Confidentialité, DMCA, Cookies, CCPA | liens | Pages légales | — | Lus : contact, garantie, retours [V] |
| Adresse (Google Maps), Facebook, Instagram, TikTok | liens | Sortie vers sites tiers | — | Non suivis |
| Bouton d'accessibilité (cercle bleu) | bouton | Panneau d'accessibilité | — | Présent [V] |

Fiche produit Céleste (https://eassondiamonds.com/product/celeste-engagement-ring/) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Forme : Cushion, Emerald, Marquise (présélectionnée), Oval, Pear, Radiant, Round | boutons (aussi `select` caché) | Change l'image principale (ex. Marquise → Round → Pear : fichiers différents) [V] | **aucun effet** : Round 10 ct et Marquise 10 ct = 7 500 $ | OK [V] |
| Taille : 1 à 10 ct (10 boutons) | boutons | Prix de la variante affiché sous le bouton | 1 ct 2 600 $ ; 2 ct 2 900 $ ; 5 ct 4 200 $ ; 10 ct 7 500 $ (blanc/rose/jaune identiques à taille égale) [V] | OK [V] |
| Couleur d'or : Yellow, White, Rose | boutons | Change le média principal (fichier différent par couleur, en vidéo .mp4) ; **aucun effet sur le prix** (2 ct rose = 2 ct jaune = 2 900 $) | 0 | OK [V] |
| CLEAR | lien | Réinitialise les choix | — | Présent ; non actionné |
| Quantité − / + | boutons | Champ numérique | × quantité | Présent [V] |
| ADD TO CART | bouton | **Désactivé** (classe `disabled wc-variation-selection-needed`) tant que taille et couleur ne sont pas choisies ; actif ensuite [V] | — | OK [V] |
| Ajout au panier (2 ct, jaune, marquise) | bouton | Ajout réussi (AJAX, pas de redirection ni message visible) ; l'article apparaît dans `/cart/` [V] | 2 900 $ | OK [V] |
| Galerie : zoom (loupe), « Previous / More images », vignettes | boutons | Loupe + lightbox présents ; galerie composée de vidéo (.mp4) puis 4 images [V] | — | Présent [V] ; lightbox non ouverte |
| Étoiles d'avis, formulaire d'avis | formulaire | « Reviews (0) » | — | Non rempli (règle) |
| Produits associés (« SELECT OPTIONS ») | lien | Vers autres fiches | — | OK [V] |

Panier (https://eassondiamonds.com/cart/) :

| Libellé | Type | Effet | Prix | État |
|---|---|---|---|---|
| Remove item | lien | Retire (`?remove_item=`) | — | Présent, non actionné |
| − / quantité / + | boutons | Quantité | — | Présent [V] |
| Livraison : « Local pickup » / « Free shipping » | boutons radio | Choix du mode | 0 $ affiché pour la livraison | OK [V] |
| Change address | lien | Calcul d'adresse | — | Non testé (saisie de données) |
| Have a coupon? | lien | Champ code promo | — | Présent [V] |
| PROCEED TO CHECKOUT | bouton | Vers `/checkout/` | — | Non suivi (hors périmètre) |

## Options disponibles

- **Formes** : cushion, emerald, marquise, oval, pear, radiant, round (fiche Céleste) [V].
- **Tailles** : 1 à 10 ct par pas de 1 ct (10 boutons) [V] ; ni 0,5 ct ni 0,75 ct sur cette fiche.
- **Métal** : or 14 k jaune, blanc, rose uniquement (« Metal: 14k ») ; pas de platine, pas d'or 18 k sur cette fiche [V].
- **Origine** : diamants **de laboratoire** uniquement (« Lab-Grown Diamond », couleur F+, pureté VS1+) sur la fiche [V] ; le formulaire sur mesure propose laboratoire ou naturel [V].
- **Monture / style** : une monture fixe par modèle (12 modèles dont plusieurs trois-pierres) [V]. Pas de choix de griffes, pavage, corps de bague.
- **Taille de doigt, gravure** : absentes de la fiche ; demandées dans le formulaire sur mesure (tailles 2 à 15 par ¼, gravure laser intérieure jusqu'à 15 caractères) [V, texte lu].
- **Formulaire sur mesure** (lu seulement) : pierre fournie par l'atelier ou par le client (numéro de certificat), 12 formes (dont Dutch marquise, cœur), carats 0,25 à 20, couleur D–M, pureté FL–I2, ratio, jusqu'à 4 photos d'inspiration [V].
- **Pas de filtres de pierre** (taille, couleur, pureté, certificat) ni de catalogue de diamants libres [V].
- **Pas de** : vue 360°, 3D, AR, essayage, partage, enregistrement, comparaison, financement, chat, WhatsApp [V : absents des listes de contrôles]. Téléphone non repéré dans l'en-tête ni le pied (adresse seulement) [V].

## Prix, délais, retours, garanties

- **Prix** : affiché en $ TTC non précisé ; fourchette sur la carte, prix exact de la variante après choix de taille ; **aucune décomposition** (métal, pierre, façon) [V]. Le prix ne dépend que de la taille de pierre (forme et couleur sans effet) [V sur 9 combinaisons].
- **Taxe** : 162,41 $ sur 2 900 $ (« Shipping to MO », adresse estimée par le site) ; total 3 062,41 $ [V]. Le taux suit l'État de livraison [I].
- **Livraison** : « & Free Shipping » sur la fiche ; panier : retrait sur place ou livraison gratuite [V].
- **Délai** : « Made to Order : Approximately 4 weeks » (fiche) ; consultation : « Usually 3-4 Weeks » [V].
- **Retours** : **toutes les ventes sont définitives**, ni retour, ni échange, ni remboursement, ni avoir ; sur mesure inclus ; dommages à signaler sous 24 h avec photos [V : /return-and-refund-policy/].
- **Garantie** : 6 mois limitée (défauts de fabrication, pierres d'accent perdues), exclusions : pierre centrale perdue, pierres latérales des trois-pierres, articles soldés [V : /warranty-policy/].
- **Certificats** : non mentionnés sur la fiche (couleur F+ et pureté VS1+ en fourchette, sans rapport GIA ou IGI) [V]. Le formulaire demande le numéro de certificat d'une pierre apportée [V].
- **Libellé synthétique** : « Lab-Grown Diamond » [V].
- **Langue / devise** : anglais, dollar [V].
- **Moyens de paiement** : non affichés au panier ; checkout non ouvert [V].

## Confiance et service

- Magasin physique : 217 E Dickson St Ste 105, Fayetteville AR 72701 [V]. Rendez-vous sur place ou par téléphone [V].
- Avis : « Reviews (0), no reviews yet » sur la fiche Céleste [V].
- Rendu CAO gratuit sous ~48 h avant tout paiement, révisions illimitées jusqu'à l'accord, « pay after design approval » [V : /custom-request/].
- Processus en 5 étapes (conversation, choix du diamant, conception, approbation, inspection finale) [V : /consultations/].
- Preuves de fabrication : aucune photo ni vidéo d'atelier repérée ; pas de suivi de commande visible [V pour les pages lues].
- Contact : formulaire (réponse sous un jour ouvré) ; pas de chat [V].

## Points forts à retenir pour JR Diamond

1. **Chaque variante change le visuel principal** (fichier distinct par forme et par métal), avec vidéo en tête de galerie. Preuve : Marquise.1356.mp4 → Round.1428.mp4 → Pear.1392.mp4 lors des clics [V].
2. **Prix affiché par taille de pierre sans compte ni devis** et bouton d'achat verrouillé tant que les choix sont incomplets (classe `wc-variation-selection-needed`) [V].
3. **Rendu CAO gratuit avant paiement** pour le sur mesure : proche de la promesse « ce que vous voyez existe » [V, /custom-request/].
4. Livraison gratuite et taxe estimée dès le panier [V].
5. Rapide : visuel principal en ~1,7 s (ordinateur) et ~1,9 s (iPhone) [V, mesure unique].

## Défauts observés

- Pas de configurateur : une monture figée par fiche, aucune personnalisation fine (griffes, pavage, corps) [V].
- Prix opaque : aucune décomposition ; forme et métal sans effet sur le prix [V].
- **Ventes définitives, sans exception pour le sur mesure** ; aucun avoir [V] : très en retrait des 30 jours de Carter's.
- Pas de certificat visible, pas de GIA/IGI ; fiche : laboratoire seulement [V].
- Aucun avis sur la fiche testée, aucune preuve de fabrication [V].
- ADD TO CART sans message de confirmation visible ; l'utilisateur doit ouvrir le panier [V].
- Page 1 de la catégorie : 8 bagues sur 12, pas de filtre [V].

## Limites de l'audit

- Une seule fiche (Céleste) testée en détail ; les 11 autres non ouvertes (la page 2 de la catégorie non plus).
- Checkout, moyens de paiement, compte, recherche, formulaire sur mesure et module de réservation non actionnés (règle : pas de données personnelles). Le panier a été rempli puis non vidé (session éphémère).
- Zoom/lightbox non ouvert ; vidéo non lue en entier.
- Temps de visuel : une mesure par appareil (Playwright, connexion du serveur d'audit), à prendre comme ordre de grandeur.
- Taxe calculée d'après une adresse « MO » attribuée par le site, non saisie.

## Sources

- https://eassondiamonds.com/product-category/engagement-rings/ (vu 15/11/2026)
- https://eassondiamonds.com/product/celeste-engagement-ring/
- https://eassondiamonds.com/cart/
- https://eassondiamonds.com/return-and-refund-policy/
- https://eassondiamonds.com/warranty-policy/
- https://eassondiamonds.com/custom-request/
- https://eassondiamonds.com/consultations/
- https://eassondiamonds.com/contact/
- robots.txt contrôlé par `robots.cjs` : AUTORISÉ pour toutes ces adresses.
