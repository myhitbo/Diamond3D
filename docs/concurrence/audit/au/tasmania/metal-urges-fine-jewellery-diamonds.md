# Audit : Metal Urges Fine Jewellery & Diamonds (Hobart, Tasmanie)

- **Site** : Metal Urges Fine Jewellery & Diamonds
- **Adresse** : https://www.metalurges.com.au
- **Page de départ** : https://www.metalurges.com.au/collections/engagement-rings
- **Date** : 15/11/2026 (date de consigne ; contrôles exécutés le 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 ; locale en-AU
- **Statut** : **partiel**. Aucun blocage cette fois : les deux pages signalées en 429 (`/pages/lab-grown-diamonds`, `/pages/about-metal-urges`) se sont ouvertes en 200 ; `robots.txt` interdit seulement `/cart/`, `/checkout*`, `/cart.js`, `*sort_by*` et les filtres combinés. Limites : aucun configurateur, aucune bague en vente en ligne, bouton « Add to cart » non cliqué (`/cart/add` interdit).
- **Légende** : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Parcours

Le site est une vitrine de joaillier sur mesure : les bagues de fiançailles ne se commandent pas en ligne. Le seul catalogue achetable est celui des **pierres libres**. [V]

| Étape | Page | Options |
|---|---|---|
| 1. « Engagement Rings » | `/collections/engagement-rings` | Page éditoriale : 5 rubriques (diamants blancs, saphirs bleus, rubis, saphirs violets, saphirs parti) avec « DISCOVER MORE », bouton « SHOP NOW » vers les pierres libres, formulaire de question |
| 2. Rubrique (ex. « Diamond Rings ») | `/collections/diamond-rings` | Texte, « CERTIFIED DIAMOND ENGAGEMENT RINGS » (GIA), formulaire « Ask us a question » (Name, E-mail, Message) |
| 3. Pierres libres | `/collections/loose-gemstones` | 178 produits, 8 pages, 6 filtres + « Certified », tri |
| 4. Fiche pierre | `/products/0-50ct-brown-pink-radiant-cut-spinel` | Vignettes (5), Zoom, « ADD TO CART », « ASK A QUESTION » |
| 5. Panier | `/cart` | « Your cart is empty ». Récapitulatif, livraison et paiement non vus (panier vide) |

## Contrôles vérifiés

Relevé automatique : 55 contrôles sur la page de départ (ordinateur), 47 (iPhone) ; 99 sur les pierres libres ; la page de départ contient surtout du menu, des liens de rubriques et un formulaire.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « SHOP NOW » | lien | Mène à `/collections/loose-gemstones` (pas à des bagues) | — | OK |
| « DISCOVER MORE » (5 rubriques) | liens | Vers `/collections/diamond-rings`, `blue-sapphires`, `rubies`, `purple-sapphires`, `parti-sapphires`. Lues : diamond-rings et blue-sapphires (200, texte éditorial, formulaire de contact). Les 3 autres non ouvertes | — | Partiel |
| Formulaire « Name / E-mail / Message / SUBMIT » | formulaire | Présent sur chaque rubrique ; non rempli, non envoyé | — | Non testé (règle) |
| Filtre « Gem Colour » | accordéon | 12 valeurs : Bi-colour, Black, Blue, Green, Grey, Parti, Pink, Purple, Red, Teal, White, Yellow | — | OK |
| Filtre « Gem Type » | accordéon | Diamond (4), Garnet (11), Ruby (2), Sapphire (112), Spinel (20), Tasmania Sapphire (5), Tourmaline (23) | — | OK |
| Filtre « Gem Cut » | accordéon | Baguette 9, Cushion 31, Emerald 38, Heart 1, Hexagonal 4, Marquise 1, Octagon 3, Oval 21, Pear 6, Radiant 12, Round Brilliant 49, Trilliant 2 | — | OK |
| Filtre « Weight Range (ct) » | accordéon | 0,00–1,00 (46), 1,01–2,00 (77), 2,01–3,00 (26), 3,01–4,00 (13), 4,01–5,00 (5), 5,01–6,00 (4), 6,01–7,00 (3), 7,01–8,00 (1) | — | OK |
| Filtre « Price » | accordéon | Deux champs « $ … to $ » | — | Ouvert, valeurs non saisies |
| Case « Certified » | case | Par adresse `?filter.p.m.custom.certified=1` : « 5 products » sur 178 ; clic direct non abouti | — | Résultat par adresse seulement |
| Filtre « Availability » | accordéon | « In stock (178) », « Out of stock (0) » | — | OK |
| Tri « Date, new to old » | menu | Non actionné : `*sort_by*` interdit par `robots.txt` ; options non lues | — | Non testé (interdit) |
| Pagination 1 à 8 | liens | Présente (8 pages) ; page 2 non ouverte | — | Non testé |
| Vignettes de la fiche (5) | boutons | Clics acceptés, sans erreur ; la galerie charge 4 images ; l'image affichée n'a pas changé de façon lisible dans le relevé | — | OK, effet visuel non vérifié |
| « Zoom » | bouton | Ouvre une visionneuse plein écran (PhotoSwipe, classe `pswp--open`) ; Échap la ferme | — | OK |
| « ADD TO CART » | bouton | **Non cliqué** : `Disallow: /cart/` (`/cart/add`). Panier : 0 article | 300 AUD (fiche vue) | Non testé (interdit) |
| « ASK A QUESTION » | bouton | Clic expiré (3 s) ; effet non observé | — | Non testé |
| Panier de l'en-tête | lien | `/cart` ouvert : « Your cart is empty », bouton « START SHOPPING » | — | OK |
| Sélecteur de pays « United States (AUD $) » | bouton | Présent en pied de page ; non actionné | AUD | Non testé |
| Recherche (en-tête) | lien | Présente ; non utilisée | — | Non testé |
| Guides d'expertise (Diamond Shape, Carat Weight, Colour Grade, Clarity Grade, Cut, Pink Diamonds, Pearls, Tourmaline) | liens | Présents au pied de page ; non lus | — | Non lus |
| Liens sociaux (Facebook, Instagram, Pinterest, YouTube), `tel:`, `mailto:`, carte | liens | Présents ; non suivis | — | Non testé |

## Options disponibles

- **Bagues de fiançailles** : aucune option en ligne (ni métal, ni forme, ni monture, ni taille de doigt, ni gravure). Tout se règle avec l'atelier. [V]
- **Pierres libres** (acheter une pierre pour un projet) : couleur (12), type (7), taille (12), poids (8 tranches), prix (fourchette libre), certifié, disponibilité. [V]
- **Types de pierres** : diamant (4 en stock), saphirs (dont saphirs de Tasmanie), rubis, spinelles, tourmalines, grenats. [V]
- **Diamants de laboratoire** : proposés dans le sur-mesure (page « Lab Grown Diamonds » : bagues de fiançailles, alliances, solitaires, halos, trois pierres) ; **aucune pierre de laboratoire dans le catalogue en ligne** (le filtre « Diamond » en liste 4). [V / I]
- **Métaux** : « platinum and 18ct gold » cités dans le texte de la rubrique diamants ; aucune sélection. [V]
- **Certificats** : GIA pour les diamants blancs ; IGI et GIA cités pour le laboratoire. [V]
- **Pas de** : 3D, 360°, essayage, comparaison, enregistrement, financement.

## Prix, délais, retours, garanties

- **Prix** : seuls les produits en vente sont affichés, p. ex. spinelle de 0,50 ct à 300,00 AUD, saphir de Tasmanie de 0,79 ct à 2 981,82 AUD, rubis de 1,03 ct à 8 802,73 AUD (« Sale price »). Aucun prix de bague. Montants affichés avec centimes inhabituels (ex. 2 981,82), [I] vraisemblablement une conversion de taxe ou de devise. [V pour les montants]
- **Décomposition** : aucune pour les bagues. La fiche d'une pierre donne type, couleur, taille, poids en carats et dimensions en mm (ex. 4,45 × 4,43 × 3,05 mm). [V]
- **Livraison** : gratuite en Australie, expédiée sous 48 h ; retrait en boutique possible ; envoi assuré avec suivi ; **envoi international en DDP** (droits et taxes inclus) vers une vingtaine de pays dont États-Unis, France, Italie, Royaume-Uni, Japon, Émirats arabes unis ; pas d'envoi vers la Russie, l'Inde, la Thaïlande, le Sri Lanka, l'Afrique. Israël ne figure pas dans la liste. [V `/policies/shipping-policy`]
- **Retours** : 30 jours après livraison, article neuf, remboursement intégral hors frais d'envoi initiaux ; frais de retour à la charge du client. Aucune exception explicite pour le sur-mesure dans la politique. [V `/policies/refund-policy`]
- **Garantie** : non trouvée sur les pages lues. [V]
- **Délai de fabrication d'une bague** : non indiqué sur les pages lues. [V]
- **Moyens de paiement affichés (pied de page)** : American Express, Apple Pay, Google Pay, Mastercard, Shop Pay, Union Pay, Visa. [V]
- **Devise** : AUD, avec sélecteur de pays. [V]

## Confiance et service

- **Atelier montré** : « in-house team of craftspeople, gemmologists and designers » à Hobart ; propriétaires nommés (Jeffrey, au banc depuis 1998, spécialiste de CAO ; Natalia), fondateur Chris Hood ; « Award winning » avec page de distinctions. Aucune photo ni vidéo de fabrication relevée. [V `/pages/about-metal-urges`]
- **Provenance** : « River to Ring », saphirs d'origine déterminée (« origin determination » pour tous les clients) ; l'un des plus grands stocks de saphirs d'Australie (plus de 3 000 pierres, 300 teintes). [V `/collections/blue-sapphires`, `/collections/engagement-rings`]
- **Avis clients** : aucun bloc d'avis trouvé sur les pages lues. [V]
- **Service** : formulaire de question sur chaque rubrique, téléphone (03) 6234 4995, e-mail, boutique 106 Murray Street (lun–ven 9 h à 16 h 45, sam 9 h à 14 h 45). Pas de rendez-vous en ligne, pas de chat vu. [V]
- **Langues** : anglais. [V]
- **Mesures du visuel principal** : pierres libres ordinateur 1 237 ms, iPhone 959 ms (domcontentloaded jusqu'à la première grande image chargée). [V]

## Points forts à retenir pour JR Diamond

1. **Provenance expliquée** (origine d'un saphir vérifiée, « River to Ring ») : même logique que « ce que vous voyez existe » ; JR Diamond peut montrer la pierre filmée plutôt que décrire sa filière. Preuve : `/collections/blue-sapphires`.
2. **Fiche de pierre libre précise** : dimensions en mm, poids, type, couleur, SKU, prix affiché en AUD. À reprendre pour la pierre du configurateur. Preuve : fiche `0-50ct-brown-pink-radiant-cut-spinel`.
3. **Filtres de pierres avec effectifs** (« Sapphire (112) », « Oval (21) ») et tranches de poids : modèle de lecture pour une grille de pierres. Preuve : `/collections/loose-gemstones`.
4. **Livraison internationale tout compris (DDP)** avec liste de pays : base utile pour la future vente France. Preuve : `/policies/shipping-policy`.
5. **Atelier nommé** (propriétaires, ancienneté au banc, CAO) : confiance par les personnes. Preuve : `/pages/about-metal-urges`.
6. **Page dédiée au synthétique qui le présente comme une option, pas un remplacement** (« complementary options ») : ton à garder. Preuve : `/pages/lab-grown-diamonds`.

## Défauts observés

- **Aucune bague achetable ou configurable en ligne** : le bouton « SHOP NOW » d'une page « Engagement Rings » mène à des pierres libres, pas à des bagues. [V]
- **Aucun prix, aucun délai, aucune garantie** pour une bague de fiançailles. [V]
- **Aucune pierre de laboratoire en vente** malgré la page dédiée. [V / I]
- **Aucun avis client** sur les pages lues. [V]
- **Sélecteur « United States (AUD $) »** : l'étiquette du pays ne correspond pas à la devise AUD affichée. [V]
- **Tri non utilisable pour l'audit** et page produit : « Shipping calculated at checkout » ; frais non vus. [V]
- **Palier de prix à centimes irréguliers** (2 981,82 ; 4 075,45). [V]
- **Faute d'orthographe** dans le titre de la rubrique saphirs : « JEWELLLERY ». [V]

## Limites de l'audit

- Pas de panier rempli : `/cart/add` interdit, donc ni récapitulatif, ni frais, ni paiement vus. Le panier vide a été ouvert. Aucun bouton de paiement cliqué.
- Rubriques rubis, saphirs violets et saphirs parti, pages « diamond-shape », « carat-weight » et autres guides, blog, page des prix non lus. Un seul produit a été ouvert.
- Tri et filtres combinés non essayés (interdits) ; filtre « Certified » vu seulement par adresse ; clic direct sur les cases non abouti. Page « Ask a question » sans effet observé ; aucun formulaire rempli.
- Mesure de chargement sur la page des pierres libres : la page de départ demandée n'a pas de visuel principal interactif.
- Les 429 signalés au recensement ne se sont pas reproduits. Rythme : au plus une page toutes les 2 secondes.
- Les requêtes de la page à son ouverture (panier, recommandations) ne sont pas des écarts ; les parcours ont été lancés avec les adresses `/cart/`, `/checkout` et `/cart.js` bloquées côté navigateur.

## Sources

- https://www.metalurges.com.au/collections/engagement-rings (200 ; 55 contrôles ordinateur, 47 iPhone)
- https://www.metalurges.com.au/collections/diamond-rings ; https://www.metalurges.com.au/collections/blue-sapphires
- https://www.metalurges.com.au/collections/loose-gemstones (178 produits, filtres)
- https://www.metalurges.com.au/products/0-50ct-brown-pink-radiant-cut-spinel
- https://www.metalurges.com.au/pages/lab-grown-diamonds ; https://www.metalurges.com.au/pages/about-metal-urges
- https://www.metalurges.com.au/policies/shipping-policy ; https://www.metalurges.com.au/policies/refund-policy
- https://www.metalurges.com.au/pages/contact ; https://www.metalurges.com.au/cart (vide)
- https://www.metalurges.com.au/robots.txt (contrôle préalable par robots.cjs)
