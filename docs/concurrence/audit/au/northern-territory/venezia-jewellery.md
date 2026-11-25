# Audit : Venezia Jewellery (Darwin, Territoire du Nord)

- **Site** : Venezia Jewellery, boutique de Darwin (Shop 2/32 Mitchell St), boutique en ligne Shopify.
- **Adresse** : https://veneziajewellery.com.au/ (page de départ : fiche https://veneziajewellery.com.au/products/18ct-wg-solitaire-oval-cut-lab-grown)
- **Date** : 15/11/2026 (date imposée par la consigne ; pages ouvertes le 25/11/2026 selon l'horloge de la session).
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Pas de configurateur ; fiche à options lue et actionnée. Le bouton « Add to cart » n'a pas été cliqué : `/cart/add` est INTERDIT par robots.txt (`Disallow: /cart/`). Le panier (`/cart`, autorisé) a été lu : vide. Le blocage 429 signalé sur la collection des bagues synthétiques ne s'est pas reproduit sur `/collections/rings` (200), mais cette collection est mixte et sans filtre synthétique.

Convention : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Pas de configurateur [V]. Parcours réel : menu « LAB GROWN DIAMOND JEWELLERY » (liens du menu pointant vers `/`) → fiche produit à variantes → « Add to cart » (non testé) → panier → paiement (non ouvert).

| Étape | Options |
|---|---|
| 1. Métal (fiche) | Platinum (défaut), 18ct YG, 18ct WG, 9ct YG, 9ct WG [V] |
| 2. Carat | 1 Carat (défaut), 1.5 Carat, 2 Carat [V] |
| 3. Taille de doigt | J, K, L, M, N, O seulement (« contact us if not listed ») [V] |
| 4. Galerie | 4 médias : photo or blanc, photo or jaune, 2 vidéos [V] |
| 5. Ajout au panier | bouton « Add to cart » ; « More payment options » [V, non cliqués] |
| 6. Livraison | calculateur « Estimate shipping » (pays, État, code postal) [V, non utilisé] |

## Contrôles vérifiés

Fiche (https://veneziajewellery.com.au/products/18ct-wg-solitaire-oval-cut-lab-grown) : 86 contrôles visibles sur ordinateur, 72 sur iPhone.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Metal : Platinum | radio | sélectionné par défaut, bien que le titre dise « 18ct WG » ; adresse `?variant=` mise à jour | 3 950 AUD | fonctionne [V] |
| Metal : 18ct YG / 18ct WG | radio | change la variante et l'adresse ; **l'image principale ne change pas** | 3 650 AUD (1 ct) | fonctionne, image statique [V] |
| Metal : 9ct YG / 9ct WG | radio | idem | 2 450 AUD (1 ct) | fonctionne [V] |
| Carat : 1,5 | radio | change la variante | +500 AUD (platine 4 450) | fonctionne [V] |
| Carat : 2 | radio | idem | +1 000 AUD (platine 4 950) | fonctionne [V] |
| Ring size J à O | radio | change la variante, sans effet sur le prix ni l'image | 0 | fonctionne [V] |
| Vignettes (4) | liens | changent le média affiché (photos or blanc / jaune, 2 vidéos avec icône lecture) | - | fonctionne [V] |
| Zoom image (« Roll over image to zoom in ») | survol | indication affichée ; un clic sur l'image n'ouvre pas de fenêtre de zoom | - | zoom au survol seulement [V] |
| Add to cart | submit | non cliqué : `/cart/add` INTERDIT | - | non testé (robots.txt) |
| More payment options | lien `#` | non cliqué (règle : jamais de bouton de paiement) | - | non testé |
| View more (livraison) | bouton | déplie les délais de livraison internationale | - | fonctionne [V] |
| Estimate shipping (pays, État, code postal) | select/input | non utilisé : appelle `/cart/shipping_rates.json`, sous `/cart/` interdit | - | non testé (robots.txt) |
| Boutons de partage Facebook, Pinterest, X, e-mail | liens | ouvrent les fenêtres de partage ; non suivis | - | présents [V], non suivis |
| Rangée « You may also like » + bouton Next | carrousel | 10 fiches liées, « From 2 300 à 2 600 AUD » ; Next fait défiler | - | fonctionne [V] |
| Recherche + liste « All categories » | input/select | 21 catégories (dont fautes « Rimg », doublons « Rings/RINGS ») ; recherche non lancée (`/search` non vérifié) | - | non testé |
| Menu principal (9 entrées) | liens | « LAB GROWN DIAMOND JEWELLERY », « WEDDING RING », « OPAL JEWELLERY », « ABOUT » pointent vers `/` ; « NATURAL DIAMOND » vers `/collections/frontpage` | - | liens génériques [V] |
| Subscribe & Save (bandeau) | bouton | non ouvert | - | non testé |
| Newsletter (pied de page) | e-mail + Subscribe | non rempli (règle : aucun formulaire) | - | non testé |
| Collection Rings : Display 48 / Sort by Best selling / grille-liste | boutons | présents ; **aucun filtre** (taille, couleur, pureté, prix, certificat) [V] | - | présents [V], non actionnés |
| Compte (Login / Signup) | lien | renvoie à `customer_authentication` ; non ouvert | - | non testé |
| Panier | lien `/cart` | « Your cart is empty » | - | fonctionne [V] |
| Contact (formulaire) | page | champs nom, e-mail, téléphone, message ; non remplis | - | présent [V], non testé |

Non existants sur le site [V, absence constatée sur la fiche et le menu] : vue 3D, 360°, AR, essai sur la main, comparateur, enregistrer, guide des tailles, financement dédié (Afterpay est chargé par la page, voir plus bas), réservation de rendez-vous, chat, WhatsApp, gravure, filtres de pierre.

## Options disponibles

- **Métaux** : platine, or jaune 18 ct, or blanc 18 ct, or jaune 9 ct, or blanc 9 ct (pas d'or rose ni de 14 ct) [V].
- **Pierre** : synthétique (« Lab Grown ») ovale, E, VS1, 1 ct annoncés dans la description ; 1,5 et 2 ct en variantes sans modification de la description (qualité à ces carats non précisée) [V].
- **Monture** : « Classic Simple Bezel set - Solitaire » seulement ; le modèle ne varie pas [V].
- **Tailles** : J à O (australiennes) [V].
- **Autres fiches proches** : ovale et rond, de 2 300 à 2 600 AUD « From » [V].
- **Gammes du menu** : synthétique, alliances, naturel, perles, pierres de couleur, opale, diamants roses (Argyle), carte cadeau [V].

## Prix, délais, retours, garanties

- **Prix** : un prix unique par variante, en AUD, sans décomposition (pierre, métal, façon). Matrice complète lue dans les 90 variantes du JSON-LD de la fiche [V] :

| Métal | 1 ct | 1,5 ct | 2 ct |
|---|---|---|---|
| Platine | 3 950 | 4 450 | 4 950 |
| 18 ct (jaune ou blanc) | 3 650 | 4 150 | 4 650 |
| 9 ct (jaune ou blanc) | 2 450 | 2 950 | 3 450 |

  Jaune = blanc à même titre ; la taille ne modifie pas le prix. Mention « Sale price » sans prix barré. Disponibilité « InStock » sur les 90 variantes ; prix valable jusqu'au 05/12/2026 (JSON-LD) [V].
- **Délai** : contradictoire. Fiche : « This Item might takes 1 to 4 weeks », expédition en 1 à 2 jours si en stock, fabrication « 2 - 3 weeks » plus 1 à 2 semaines de transport. Page de politique : traitement 1 à 2 jours ouvrés. FAQ : « up to 1 - 4 weeks » pour les commandes spéciales [V].
- **Livraison** : Australia Post. Fiche : standard 1 à 7 jours ouvrés, express 1 à 3. Politique : standard 3 à 10, express 1 à 5. International : 12 à 20 jours ouvrés sur la fiche, « NOT YET AVAILABLE » sur la page de politique. Bandeau : « Free Domestic Shipping », commande de plus de 10 000 AUD retirée en boutique uniquement [V].
- **Retours** : échange sous 30 jours (pas de remboursement annoncé) ; objet neuf, non porté, emballage d'origine ; échange vers une pierre plus chère avec paiement de la différence ; retour gratuit pour échange. Une commande spéciale (pierre ou bijou fini) **ne peut pas être échangée** si le client change d'avis. Annulation : dans la journée de la commande [V].
- **Garanties** : garantie à vie contre les défauts de fabrication ; nettoyage aux ultrasons gratuit à vie ; usure normale, accident, vol exclus [V].
- **Moyens de paiement** : FAQ : carte de crédit/débit et PayPal. Scripts chargés par la fiche : PayPal, Afterpay, Square [V ; l'écran de paiement n'a pas été ouvert].
- **Frais de panier réels** : non observés (panier vide, ajout interdit).

## Confiance et service

- **Certificats** : aucun numéro ni laboratoire sur la fiche synthétique. La FAQ affirme que chaque diamant est « 100 % natural » et certifié par un « renowned laboratory in Australia » : **contradictoire** avec la vente de pierres synthétiques [V].
- **Libellé du synthétique** : « Lab Grown » dans le titre et la description [V].
- **Langue, devise** : anglais, AUD [V].
- **Avis clients** : aucun avis sur la fiche ni sur la page lue [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ; la fiche porte 2 vidéos de rendu du bijou. La page « About » présente la famille (jade depuis 1985, boutique de Darwin Mall) [V].
- **Service** : téléphone 08 8942 4383 et 0417 123 888, e-mail, formulaire, boutique Shop 2/32 Mitchell St, ouverte lun-ven 10 h-16 h, sam 10 h 30-14 h [V].
- **Suivi de commande** : numéro de suivi par e-mail après commande (FAQ) [V].
- **Fabrication sur mesure** : « We specialize in custom made jewellery » (page About), sans parcours en ligne [V].

## Points forts à retenir pour JR Diamond

1. **Matrice de prix lisible en un clic** : métal x carat visibles et l'adresse change à chaque option (`?variant=…`), donc la configuration est partageable [V, fiche, 90 variantes].
2. **Vidéo du bijou dans la galerie** (une par couleur de métal) en plus des photos [V, 4 médias].
3. **Livraison gratuite affichée en bandeau** sur chaque page et seuil de retrait en boutique au-delà de 10 000 AUD, ce qui répond à la peur du transport d'un bijou de valeur [V].
4. **Échange 30 jours avec retour gratuit** et **garantie de fabrication à vie** clairement rédigés [V, pages de politique et FAQ].
5. Visuel principal affiché en 1,0 s (ordinateur et iPhone) [V, mesure ci-dessous].

## Défauts observés

1. Aucune personnalisation réelle : pas de forme de pierre, de monture ni de gravure ; un seul modèle par fiche [V].
2. **L'image ne suit pas le métal** : en sélectionnant 18ct YG, l'image principale reste la même (le jaune n'est visible qu'en vignette) [V].
3. **Métal par défaut = platine** alors que le titre dit « 18ct WG » : risque d'erreur d'achat (platine 3 950 contre 3 650 en or blanc) [V].
4. Description unique (E, VS1, 1 ct) pour des variantes 1,5 et 2 ct sans qualité précisée [V].
5. Délais et livraison contradictoires entre fiche, politique et FAQ ; international à la fois « 12 à 20 jours » et « non disponible » [V].
6. FAQ « 100 % naturel » sur un site qui vend du synthétique ; aucun certificat visible pour les pierres synthétiques [V].
7. Tailles J à O seulement ; menu avec liens génériques vers l'accueil ; catégories de recherche avec fautes et doublons [V].
8. Aucun filtre de collection ; la collection « Rings » mélange alliances d'homme, perles, boucles d'oreilles et pendentifs [V].
9. Prix sans décomposition ; aucune preuve d'atelier ; aucun avis [V].

## Limites de l'audit

- « Add to cart » non cliqué (`/cart/add` interdit par robots.txt) : récapitulatif, frais de livraison réels, délai affiché au panier et moyens de paiement du checkout non observés. `/cart` lu vide.
- « Estimate shipping » non utilisé (`/cart/shipping_rates.json` sous `/cart/`).
- « More payment options », paiement, compte, newsletter, formulaire de contact : non actionnés (règles).
- Recherche du site et filtres non testés. Les options ont été actionnées sur une seule fiche ; les autres fiches de la gamme n'ont été que listées.
- Mesure : un seul passage par appareil (réseau du bac à sable) ; non représentatif d'un visiteur australien.
- Le blocage 429 signalé précédemment sur la collection des bagues synthétiques n'a pas été reproduit sur `/collections/rings` ; la collection synthétique elle-même n'a pas été redemandée.

## Mesures du visuel principal

| Appareil | Image principale visible | LCP (Chromium) | Événement load |
|---|---|---|---|
| Ordinateur | 1,0 s | 1,32 s (image `SKU810091-71674-OVAL_350x.webp`) | 2,1 s |
| iPhone 13 (émulé) | 1,1 s | 1,28 s | 1,9 s |

Mesure faite sur un seul chargement, sans cache [V].

## Sources

- Fiche : https://veneziajewellery.com.au/products/18ct-wg-solitaire-oval-cut-lab-grown (lue et actionnée)
- Collection : https://veneziajewellery.com.au/collections/rings
- Politiques : https://veneziajewellery.com.au/policies/shipping-policy, https://veneziajewellery.com.au/pages/exchange-policy
- FAQ : https://veneziajewellery.com.au/pages/frequently-asked-questions
- À propos : https://veneziajewellery.com.au/pages/about-venezia-jewellery ; contact : https://veneziajewellery.com.au/pages/contact-venezia-jewellery
- Page « Diamonds » : https://veneziajewellery.com.au/pages/diamonds (page vide à la lecture)
- Panier : https://veneziajewellery.com.au/cart (vide)
- Contrôle robots.txt par `robots.cjs` : adresses lues AUTORISÉES, `/cart/add` INTERDIT.
- Captures et données brutes : dossier de travail `scratchpad/audit/au/venezia-jewellery/` (hors dépôt).
