# Audit : Bloomstone (Annapolis, Maryland)

- **Site** : Bloomstone, https://bloomstonejewelers.com (boutique Shopify, diamant synthétique exclusivement)
- **Page de départ** : https://bloomstonejewelers.com/products/blooming-classic-solitaire (pas de constructeur : fiche de bague à options)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 × 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Fiche, options, prix par variante, pages de service lus. Panier non atteint : « ADD TO BAG » appelle `/cart/add`, interdit par robots.txt (`Disallow: /cart/`).
- Marques : **V** vérifié (page lue ou contrôle actionné, adresse citée), **I** inféré, **S** supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Fiche de bague | /products/blooming-classic-solitaire | carat (4), forme (4), métal (2), quantité, photos et vidéo (17 médias) |
| Sur mesure | /pages/custom | vidéo d'une cliente, rendez-vous, diamants à l'unité à partir de 1 715 $, avant/après |
| Rendez-vous | /pages/schedule-an-appointment | adresse autorisée, non ouverte |
| Panier | /cart | `cart/add` interdit : aucun ajout, panier non vu |

Il n'y a pas de choix de pierre à part : la pierre est comprise dans le prix de la bague (carat et forme sont des options de la fiche).

## Contrôles vérifiés

`controls.cjs` : 80 contrôles visibles sur ordinateur, 77 sur iPhone (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Carat Weight (liste) : 1.50 / 2.00 / 2.50 / 3.00 | liste | change la variante et l'adresse (`?variant=`) | 3 075 / 3 765 / 5 850 (affiché, voir défauts) / 5 100 $ | OK, avec bascule d'office si la combinaison n'existe pas |
| Shape (liste) : Round Brilliant, Oval Shape, Emerald Cut, Elongated Cushion | liste | idem | voir tableau des variantes | OK, idem |
| Color : 18k White Gold / 18k Yellow Gold | 2 boutons | change la variante | identique à carat égal (3,00 ct : 5 100 $ dans les deux métaux) | OK |
| Sélecteur de variante complet (7 lignes) | liste masquée | liste les 7 variantes, dont 3 « Sold out » | n/d | OK |
| Quantité (− / champ / +) | boutons | non actionnés | n/d | non testé |
| ADD TO BAG | bouton | non cliqué : appelle `/cart/add`, interdit | n/d | panier interdit par robots.txt |
| More payment options | lien | a ouvert une adresse de paiement Shopify (paramètre `skip_shop_pay=true`) au lieu d'une fenêtre ; arrêt immédiat, rien saisi | n/d | voir limites |
| View store information | bouton | retrait à Annapolis Harbour Center, « usually ready in 24 hours » (texte lu) | n/d | texte lu, clic non abouti |
| Shipping (lien) | lien | /policies/shipping-policy, lu | n/d | OK |
| SHARE | bouton | affiche « Link copied! », « POST », « SHARE », « PIN IT » | n/d | OK |
| Change image to image 1 à 17 | 17 boutons | 17 médias : 16 images et 1 vidéo (le 2ᵉ, `.js` de la fiche) | n/d | présents ; clic non abouti après la navigation de « More payment options » |
| Description (accordéon) | bouton | déploie le texte | n/d | OK |
| Open search modal | lien | non actionné (/search) | n/d | non testé |
| Compte, panier « 0 » | liens | non suivis | n/d | non testé |
| Carrousel « recommandations » (précédent / suivant) | boutons | 8 produits (ex. 5 850 $, 4 250 $, 5 175 $) | n/d | non actionné |
| Abonnement e-mail (SUBSCRIBE) | champ + bouton | non rempli | n/d | non testé |
| Facebook, Instagram, Pinterest, avis Google | liens | non suivis | n/d | non testé |
| Menu : Home, Shop, Collections, Custom Design, Contact, FAQs, News, Blog, About Us | liens | Custom, FAQ, About lus | n/d | OK |

### Variantes réellement vendues (V, `/products/blooming-classic-solitaire.js`)

| Variante | Prix | Stock |
|---|---|---|
| 1,50 ct rond, or blanc 18 k | 3 075 $ | en stock |
| 2,00 ct rond, or blanc 18 k | 3 765 $ | en stock |
| 2,50 ct ovale, or jaune 18 k | 4 250 $ | en stock |
| 3,00 ct rond, or blanc | 5 100 $ | épuisé |
| 3,00 ct ovale, or blanc | 5 100 $ | épuisé |
| 3,00 ct émeraude, or blanc | 5 100 $ | épuisé |
| 3,00 ct coussin allongé, or jaune | 5 100 $ | en stock |

## Options disponibles

- **Carat** : 1,50, 2,00, 2,50, 3,00 sélectionnables ; la description annonce 0,50 à 3,00 en 7 tailles (V : écart).
- **Formes** : rond brillant, ovale, émeraude, coussin allongé sélectionnables ; la description cite aussi la poire (V : écart).
- **Métal** : or 18 k blanc ou jaune. Pas de 14 k, de rose ni de platine sur cette fiche. Monture : 4 griffes, 2 mm de large (description, V).
- **Pierre** : diamant synthétique uniquement (« lab grown »).
- **Absent** : choix de la pierre à part, certificat, taille de doigt (confirmée après la commande par l'équipe), gravure, vue 3D, 360°, essayage, AR, comparateur, financement propre.

## Prix, délais, retours, garanties

- **Prix** : un prix par variante, bague complète avec pierre (V). Pas de décomposition pierre, métal, façon. Exemple : 3 075 $ pour 1,50 ct rond or blanc 18 k.
- **Livraison** : « Free standard shipping on all orders » sur la fiche ; « Shipping calculated at checkout » (V, deux textes à la suite). Expédition du stock sous 48 heures ouvrées ; retrait à Annapolis (V, /policies/shipping-policy et fiche).
- **Délai** : « Please allow 4-6 weeks for fulfillment of out of stock items » (V, description). Disponibilité affichée : « Only 1 left. Order soon! » (V).
- **Retours** (V, /policies/refund-policy) : 30 jours après réception, neuf et non porté, avec étiquettes ; « Custom products … including items which have been resized are not eligible for return » ; pas de retour sur les soldes ; 14 jours de rétractation pour l'Union européenne ; remboursement sous 10 jours ouvrés après contrôle ; échange = retour puis nouvel achat. Pas d'expédition hors des États-Unis (FAQ, relevé de l'inventaire).
- **Garantie, certificat** : aucun texte de garantie ni de certificat GIA ou IGI sur la fiche (V).
- **Moyens de paiement** : non vus (panier interdit). Mentions « Fast and secure payment » et « More payment options » (V).

## Confiance et service

- Magasin à Annapolis (2548 Solomons Island Rd, V) ; « Visit us in Annapolis, Maryland, Monday - Saturday, 10 AM » en bandeau (V) ; rendez-vous en ligne (/pages/schedule-an-appointment).
- Sur mesure : /pages/custom (V) propose rendez-vous, 6 familles de diamants à l'unité, une vidéo d'une cliente qui dessine sa bague de bout en bout, des photos avant/après et trois citations de clients signées d'un prénom et d'une initiale. Pas de photos de fabrication de la commande promises.
- FAQ : 5 questions sur le synthétique, puis taille de doigt, cadeau refusé, expédition, taxes, export et retours (titres lus, réponses non dépliées, V).
- Libellé : « lab grown » / « Lab-Grown » partout, discours sur l'accessibilité et le développement durable (titres de FAQ, V). Aucune mention de certificat sur la fiche.
- Langue : anglais ; devise : dollar. Pas de chat visible (V, liste de contrôles). Courriel de retours `returns@bloomstonejewelers.com` (V).

## Points forts à retenir pour JR Diamond

1. **Prix complet sur la fiche, par variante** : bague avec pierre, l'adresse garde la variante (`?variant=…`, V), donc partageable. Argument fort contre le « Sur devis » de JR Diamond.
2. **Média riche sur la fiche** : 17 médias dont 1 vidéo de la bague (V, `.js`), thumbnails numérotés.
3. **Bouton « Partager »** : lien copié, publication et Pinterest (V).
4. **Disponibilité honnête** : « Only 1 left », variantes « Sold out » visibles, délai hors stock 4 à 6 semaines (V).
5. **Retour 30 jours avec exception du sur-mesure et du retaillé écrite en clair** (V) ; 14 jours pour l'Union européenne : point de comparaison pour la France.
6. **Livraison gratuite affichée sur la fiche** (V) et retrait en 24 h à l'atelier.
7. **Parcours sur mesure illustré par la vidéo d'une cliente** (V) : preuve de fabrication sous forme de témoignage filmé.

## Défauts observés

- **Combinaisons absentes, bascule silencieuse** : choisir 2,50 ct + rond fait revenir la page à 2,00 ct rond (V, test) ; seule l'adresse change, sans message sur l'indisponibilité.
- **Prix affiché incohérent sous la bascule** : après le choix 2,50 ct, le texte de prix lu était 5 850 $ (prix d'une autre bague du carrousel) pendant que la variante restait 2,00 ct (V, texte lu ; **I** : prix en cours de rafraîchissement, à revérifier à la main).
- **Description différente des options** : 0,50 à 3,00 ct en 7 tailles et la poire annoncés, 4 tailles et 4 formes proposées (V).
- **Peu d'options réelles** : 7 variantes, 2 métaux, 18 k seulement ; pas de choix libre de la pierre, du titre d'or, de la taille de doigt, de la gravure.
- **Taille de doigt traitée après la commande** : « A Bloomstone team member will reach out … to confirm your finger size » (V).
- **Pas de décomposition du prix** et pas de certificat annoncé sur la fiche (V).

## Limites de l'audit

- **Panier non atteint** : `ADD TO BAG` appelle `/cart/add` (interdit) ; frais de livraison réels, taxes et moyens de paiement non vus.
- **Écart à signaler** : le clic sur « More payment options » a navigué vers une adresse de paiement Shopify (paramètre `skip_shop_pay=true`). C'est probablement le bouton de paiement dynamique de Shopify (**I**), qui peut passer par un chemin que le robots.txt interdit. Rien n'a été saisi et je n'ai plus cliqué sur la page ; l'adresse complète n'a pas été relevée.
- Photos, vidéo, zoom, quantité, recherche, compte, carrousel : non actionnés ou clics non aboutis après cette navigation. L'effet des options sur l'image n'a pas été mesuré.
- Une seule fiche de bague auditée ; mesures du visuel principal : première grande image visible en 2,3 s sur ordinateur et 1,3 s sur iPhone (une mesure chacune, V).
- iPhone : liste de contrôles seulement (77), parcours des options non refait.

## Sources

Lues le 15/11/2026 (V), robots.txt lu avant (`Allow: /`, `Disallow: /cart/`, `/cart.js`) :
- https://bloomstonejewelers.com/products/blooming-classic-solitaire (fiche, options, textes)
- https://bloomstonejewelers.com/products/blooming-classic-solitaire.js (7 variantes, prix, stocks, 17 médias)
- https://bloomstonejewelers.com/pages/custom
- https://bloomstonejewelers.com/policies/refund-policy
- https://bloomstonejewelers.com/policies/shipping-policy
- https://bloomstonejewelers.com/pages/faq (titres des questions)
- Inventaire préalable : docs/concurrence/audit/us/maryland/INVENTAIRE.md
