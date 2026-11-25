# Audit : Von Bargen's Jewelry

- **Site** : Von Bargen's Jewelry (4 boutiques VT/NH, atelier à Quechee), https://vonbargensjewelry.com/ ; page de départ https://vonbargensjewelry.com/pages/diamonds
- **Date** : 15/11/2026 ; **appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13
- **Statut** : **partiel**. Le « Diamond Finder » est un widget RapNet Instant Inventory (`ii.api.prod.rapnet.com`) : son robots.txt est illisible (403 / « Missing Authentication Token »), donc traité comme INCONNU et **non actionné** ; seul son état à l'ouverture a été regardé. Ajout au panier non cliqué (`/cart/add` interdit par robots.txt, vérifié). Panier ouvert vide.
- Convention : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. `/pages/diamonds` | Bannière « Diamond Finder », widget de diamants en liste/grille avec « Filter » et tri [V, ouverture] |
| 2. Bague | Pas de configurateur : fiches de créateurs/bagues toutes faites (`/collections/engagement-rings`), ou consultation sur mesure (`/pages/our-diamond-process`) [V] |
| 3. Fiche bague | Aucune option (pas de métal, taille, ni pierre sélectionnables) : « ADD TO CART », « SEND A HINT », « ADD TO WISHLIST » [V] |
| 4. Panier | Non atteint avec un article ; « YOUR CART IS EMPTY » [V `/cart`] |

## Contrôles vérifiés

`/pages/diamonds` : 60 contrôles visibles sur ordinateur, 32 sur iPhone (dont 20 liens « Run on GSC » du fil Instagram).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Diamond Finder (widget RapNet) | iframe | Ouverture : « Showing 6226 Diamonds », colonnes forme, carat (0,5-20), couleur (D-M), pureté (SI1-FL), taille, polissage, symétrie (I-VG), labo (ANY), fluorescence, prix (200-99 999 999 $) ; tri par prix croissant ; premières lignes : rond 0,54 ct J SI1 GIA 891 $ [V capture] | affiché par pierre | lu seulement ; filtres, tri, grille **non actionnés** (robots INCONNU) |
| Filter / bouton grille / bouton tri (dans le widget) | boutons | Non actionnés | – | non testé (robots du domaine du widget illisible) |
| Pagination du widget (First 1 2 … Last) | liens | Non actionnée | – | non testé (idem) |
| Barre : Instagram, Gift Guide, Virtual Appointment, (603) 653 0006 | liens | Gift Guide / appointment : adresses `/pages/gift-guide`, `/pages/book-an-appointment` (robots AUTORISÉ pour book-an-appointment) ; téléphone `tel:` | – | liens relevés, non tous ouverts |
| Menu FINE JEWELRY / ARTISANS / BRIDAL / DIAMONDS / ABOUT / EVENTS | liens | BRIDAL ouvert (200) : 5 rubriques (fiançailles, alliances femme, homme, diamants, empilables) | – | OK |
| Search, Account, Open Wishlist, Cart | liens/boutons | `/cart` ouvert : vide ; `/search` non ouvert | – | OK partiel |
| Fiche bague : ADD TO CART | bouton | Non cliqué : `/cart/add` interdit | 26 900 $ affiché (Mark Patterson 2,01 ct) | non testé (robots.txt) |
| SEND A HINT | bouton | Non cliqué (ouvrirait un formulaire/e-mail à un tiers) | – | non testé |
| ADD TO WISHLIST / Open Wishlist | bouton | Non cliqué (état de compte/stockage) | – | non testé |
| Share (fiche) | bouton | Non cliqué | – | non testé |
| Pied : SUBSCRIBE + champ e-mail | formulaire | Non rempli | – | non testé (règle : aucun formulaire) |
| Pied : FAQs, Jewelry Care, Repairs & Service, Returns, Our Stores, Custom Design | liens | FAQ, Returns, Repairs, Our Stores, Custom Design ouverts (200) | – | OK |
| 19 questions de la FAQ | accordéon | Chaque réponse s'ouvre (19/19 lues) | – | OK |
| Previous/Next, Previous posts/Next posts | boutons | Carrousels Instagram/bandeau, non actionnés | – | non testé |

## Options disponibles

- **Diamants (widget)** : 6 226 pierres au chargement ; filtres présentés : forme, carat 0,5-20, couleur D-M, pureté SI1-FL, taille, polissage, symétrie, laboratoire (GIA affiché), fluorescence, prix [V capture]. Naturel/synthétique : non lisible, le site dit « finest natural diamonds » [V pied de page].
- **Bagues** : fiches de créateurs (Mark Patterson, Adel Chefridi, Rahaminov, Todd Reed, Ali Dumont, etc.), en or 18 k jaune dans les 10 premières ; pas de sélecteur de métal/taille sur la fiche testée [V].
- **Sur mesure** : consultation en boutique ou virtuelle, partir d'un diamant, d'un croquis ou d'un bijou existant [V `/pages/our-diamond-process`].
- **Services** : remise à taille, resertissage, refonte, évaluation, gravure, réparations (atelier Quechee) [V `/pages/repairs-services`], rendez-vous virtuels, retrait/essai en 4 boutiques [V `/pages/our-stores`].
- **Vues** : photos produit ; pas de 3D, 360°, AR [V, sur la fiche testée].

## Prix, délais, retours, garanties

- **Prix** : affichés sur les fiches (exemples relevés : 26 900 $ ; « you may also like » 7 200 $ à 27 370 $) [V]. Pas de décomposition du prix. Promesse « 110 % Price Match » [V `/pages/returns`]. Pierre du widget : prix par pierre [V]. USD seul [V].
- **Délai** : custom « 4-6 semaines selon la complexité » [V FAQ] ; en stock « a few business days » [V].
- **Retours** : jusqu'à 20 jours ; remboursement intégral sous 14 jours (en stock) ; avoir au-delà ; « Custom or special orders are non-refundable » ; tout article non en stock est une commande spéciale ; bague non portée, non rayée, non redimensionnée, non gravée ; période des fêtes prolongée au 10/01 ; frais de port non remboursés [V `/pages/returns`].
- **Garanties** : « Lifetime Jewelry Care » (bandeau) ; contrôle conseillé tous les 6-12 mois [V]. Détail de la garantie non lu.
- **Certificats** : fiche testée : rapport GIA n° cité dans le texte (2,01 ct, H, VS2, Excellent) [V]. Widget : colonne « Lab : GIA » [V].
- **Libellé synthétique** : non vu [V].
- **Livraison** : « secure, insured shipping » ; monde entier, frais ajoutés au paiement ; suivi par e-mail [V FAQ]. Montant des frais non vu (panier non rempli).
- **Paiement** : cartes majeures et « other payment options » ; financement « flexible » non détaillé ; logos Amex, Apple Pay, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa en pied de page [V capture].

## Confiance et service

- Avis clients : aucune note agrégée vue (le texte « Rating of 1 means . » sur la page process est un résidu d'un gadget d'avis) [V]. Bandeaux « Award winning », « Family owned », « Diamond experts » (sans preuve chiffrée) [V].
- Preuves de fabrication : atelier à Quechee, phrase « from first sketch to final polish » ; pas de photos/vidéos de fabrication par commande vues [V].
- Suivi : e-mail de confirmation puis suivi du colis [V FAQ].
- Chat : bouton flottant visible sur la capture (non ouvert) ; téléphone (603) 653 0006 ; rendez-vous virtuel.
- Langues : anglais seul [V].

## Points forts à retenir pour JR Diamond

1. **Catalogue de diamants par filtres (carat, couleur, pureté, taille, polissage, symétrie, labo, fluorescence, prix) avec prix par pierre** : ce que les clients israéliens attendent avant de choisir (preuve : capture `/pages/diamonds`).
2. **Rubrique « partir d'un diamant » et « d'un bijou existant »** sur la page de design (preuve : `/pages/our-diamond-process`).
3. **FAQ en 6 thèmes avec 19 réponses ouvertes en un clic**, utile pour modéliser la nôtre (preuve : `/pages/faqs`).
4. **Retours chiffrés (14 jours remboursés, 20 jours avoir) et « 110 % Price Match »** : confiance sur le prix (preuve : `/pages/returns`).
5. **Rendez-vous virtuel + 4 boutiques + téléphone en bandeau** (preuve : barre supérieure et `/pages/our-stores`).
6. **Mention du rapport GIA numéroté dans la description** (preuve : fiche Mark Patterson).

## Défauts observés

- Le widget de diamants est un iframe tiers sans lien entre la pierre et une monture ; aucun configurateur [V].
- Fiche bague sans options (taille, métal) ni prix de la pierre séparé [V].
- Retours : tout article non en stock = commande spéciale non remboursable ; sur mesure non remboursable [V].
- « Rating of 1 means . » : texte de gadget d'avis visible sur la page process [V].
- 20 liens « Run on GSC » dans le fil Instagram (artefact) et blanc d'environ 450 px sous le widget sur la capture [V].
- Délai de fabrication « 4-6 semaines » sans engagement ; aucun suivi de fabrication [V].

## Limites de l'audit

- Widget RapNet non actionné : robots.txt de `ii.api.prod.rapnet.com` illisible (403), traité comme INCONNU ; aucun filtre ni tri testé. Les options listées viennent de la seule capture à l'ouverture.
- Ajout au panier non fait (`/cart/add` interdit) : frais de livraison, délai et moyens de paiement du panier non observés ; logos de paiement lus en pied de page.
- Une seule fiche bague examinée ; formulaires (hint, rendez-vous, newsletter) non remplis.
- Temps d'apparition du visuel : fiche bague ordinateur DOM 1,1 s / image 1,3 s ; iPhone DOM 1,5 s / image 1,7 s ; page Diamonds DOM 0,85 s ordinateur et iPhone, widget chargé en moins de 8 s (une mesure, via proxy).
- Le robots.txt du site invite les agents à utiliser des interfaces UCP ; non utilisées.

## Sources

- https://vonbargensjewelry.com/pages/diamonds ; /pages/bridal ; /pages/our-diamond-process ; /pages/returns ; /pages/faqs ; /pages/repairs-services ; /pages/our-stores
- https://vonbargensjewelry.com/collections/engagement-rings/products/18-karat-yellow-gold-2-01ct-cushion-ring ; /cart ; /robots.txt
- https://ii.api.prod.rapnet.com/api/Feeds/48ced523-9fb2-4c5b-884c-4cae1be57a33/Widget (chargé par la page, non actionné)
- Captures : scratchpad `audit/us/von-bargens-jewelry/` (hors dépôt)
