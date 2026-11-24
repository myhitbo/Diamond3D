# Audit : Danny Eliav (Jérusalem), catalogue en dollars

| | |
|---|---|
| Site | Danny Eliav Jewelry, 19 King David St., Jérusalem ; dimanche à jeudi 10 h à 17 h, vendredi sur rendez-vous ; +972-2-624-2190 (V) ; famille de joailliers sur quatre générations (inventaire) |
| Page de départ | https://dannyeliav.com/collections/engagement-rings, puis la fiche https://dannyeliav.com/products/six-prong-diamond-solitaire-engagement-ring-with-hidden-side-diamonds (la seule fiche relevée avec une option naturel ou laboratoire) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (locale he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Catalogue (flux `products.json` de la collection), fiche et politiques lus ; l'option naturel ou laboratoire actionnée. **Ajout au panier non réalisé** : `/cart/add.js` est interdit par le robots.txt, la requête a été bloquée par la règle de l'audit |
| robots.txt | Shopify standard : `Allow: /` ; interdits `/cart/`, `/cart.js`, `/checkout`, `/checkouts/`, `/account`, `/orders`, `/recommendations/products`, `/collections/*sort_by*`, `/collections/*+*`, `/collections/*filter*&*filter*`, `/cdn/wpm/*.js`, `/.well-known/shopify/monorail`. Aucun `Crawl-delay` (V). Les requêtes interdites émises par la page (`monorail`, `wpm`, `preloads.js`, `recommendations/products`) ont été bloquées |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Collection « Engagement Rings » | 24 bagues, de 520 à 26 000 $ ; 20 titres portent « diamond » ; pierres de couleur, tourmalines, saphirs, citrine, péridot (V : flux `products.json`) | prix fixe par bague | — |
| 2. Fiche | **une seule option** : « Jewelry material » = diamant naturel ou diamant de laboratoire (liste déroulante) ; pas de taille, de métal ni de carat ; « Ring Size 7.5 US / Inner Circumference 55 mm » écrit en texte ; « mise à taille sur demande » (V) | **naturel 18 000 $, laboratoire 3 000 $** (V : flux) | l'adresse prend `?variant=…` ; la photo n'a pas pu être comparée (V) |
| 3. Ajout au panier | « ADD TO CART » et « BUY IT NOW » (V) | — | — |

La pièce est annoncée en platine, avec un diamant central de 1,01 ct (laboratoire) ou « environ 1 ct » (naturel) et deux jeux de pierres de côté de 0,015 ct (V).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Jewelry material : Natural Diamond / Lab Grown Diamond | liste | l'adresse devient `?variant=47034661994735` (naturel) ou `?variant=47034662027503` (laboratoire) (V) | 18 000 $ ou 3 000 $ (V : flux `products.json`) ; l'écran n'a pas été relu pour le prix affiché | fonctionne |
| ADD TO CART | bouton | cliqué : la requête `/cart/add.js` a été **bloquée par la règle de l'audit** (V) | — | **non réalisé** |
| BUY IT NOW | bouton | présent (V) | — | non actionné |
| RINGS SIZE GUIDE · BRACELETS SIZE GUIDE | boutons | guides des tailles (V : libellés) | — | non actionnés |
| ASK A QUESTION | bouton | formulaire de question (V : libellé) | — | non actionné (données personnelles) |
| Accessibility Menu | bouton | menu d'accessibilité (V) | — | non actionné |
| Subscribe (newsletter) | champ et bouton | présent (V) | — | **non rempli** (règle) |
| Menu « Bespoke Jewelry » | lien | page `/pages/bespoke-jewelry` : formulaire de commande sur mesure (V : page lue) | — | formulaire non rempli |

Absents (V) : 3D, 360°, essayage, comparaison, choix de métal, de carat, de pureté, de taille de doigt dans la fiche, gravure, avis, suivi, WhatsApp.

## Options disponibles

- **Métal** : or 14 k ou 18 k, platine, selon la bague (V : descriptions) ; pas de choix par fiche.
- **Pierre** : naturel ou laboratoire sur une seule fiche ; pierres de couleur dans les autres (V).
- **Taille** : taille unique par fiche (US 7,5 pour la fiche lue) ; « mise à taille sur demande » (V).
- **Sur mesure** : « de un jour à plusieurs mois » selon le projet ; refaire une bague à partir d'un bijou déjà possédé (V : `/pages/bespoke-jewelry`).

## Prix, délais, retours, garanties

- **Prix** : en dollars, « taxes incluses » (V : fiche). Aucune conversion en shekel.
- **Livraison** : gratuite en Israël dès 150 $ et dans le monde dès 500 $ (V : bandeau).
- **Naturel** : « chaque bague de diamant naturel est faite selon vos spécifications ; **le prix final reflète les propriétés et le grade de la pierre** » ; contactez-nous pour la personnaliser (V : fiche).
- **Retour et annulation** (V : `/policies/refund-policy`) : conformes à la loi israélienne de protection du consommateur ; on ne peut pas rendre un produit utilisé **ni personnalisé**, sauf défaut ; modification ou annulation **par téléphone ou e-mail seulement**, après approbation de la commande ; frais d'annulation de 5 % de la commande (livraison comprise) ou 100 ₪ (le plus bas) ; **frais de carte possibles** ; pas d'annulation après une modification sur mesure ou après expédition.
- **Délai, garantie, certificat** : non relevés sur la fiche (V).

## Confiance et service

- **Libellé du synthétique** : « Lab Grown Diamond » (V). Argument éthique : « luxe éthique » pour le laboratoire, « prestige traditionnel » pour le naturel (V : fiche).
- **Marque** : famille de joailliers sur quatre générations, collections « showcase » nommées d'après de grands hôtels de Jérusalem (« King David Showcase », « Waldorf Astoria Showcase », « David Citadel Showcase ») (V : menu).
- **Contenu** : collections (Israeli Heritage, Textured Gold, Primavera in Jerusalem, Memories of Bukhara…), perles, montres (V : menu).
- **Avis, photos d'atelier** : aucun relevé (V).
- **Langue** : anglais seulement (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Fiche | LCP 1,1 s ; charge complète 4,0 s | LCP 0,9 s ; charge complète 4,0 s |

## Points forts à retenir pour JR Diamond

1. **Écart naturel / laboratoire de 6 à 1 sur la même fiche** (18 000 contre 3 000 $) [V : flux `products.json`], avec deux pierres de poids presque identiques (1 ct) : un argument chiffré direct.
2. **Deux phrases claires pour les deux origines** (« luxe éthique », « prestige traditionnel ») [V] : ton neutre qui ne dénigre pas le naturel, utile avec les règles de libellé de JR Diamond.
3. **Taille en mm de circonférence intérieure écrite sur la fiche** (« 55 mm ») [V] : un repère mesurable.
4. **Commande sur mesure à partir d'un bijou déjà possédé** (« une refonte complète à partir d'un bijou qu'on possède ») [V] : proche de la page « transformation » de JR Diamond.

## Défauts observés

1. **Prix en dollars seulement** pour des clients israéliens [V].
2. **Une seule bague sur 24 offre le choix naturel ou laboratoire** (une option « Jewelry material » sur 24 fiches) [V : flux].
3. **Pas de choix de taille, de métal, de carat** [V] : l'acheteur ne peut pas configurer.
4. **Prix du naturel « selon le grade »** sans grille [V].
5. **Annulation par téléphone ou e-mail seulement**, plus frais de carte [V].
6. **Pas de délai, de garantie, de certificat sur la fiche** [V].
7. **Un prix à 0 $ dans le flux** pour une bague (« Yulia's ring ») [V : flux] : probablement une pièce non à vendre, non vérifié (S).

## Limites de l'audit

- Ajout au panier, panier, paiement : non réalisés (robots.txt interdit `/cart/add.js`).
- Une seule fiche (platine, naturel ou laboratoire) a été parcourue ; la photo par variante et le prix affiché à l'écran après le changement d'option n'ont pas été relus (les prix viennent du flux `products.json`).
- Page sur mesure : formulaire non rempli.
- iPhone : chargement seulement.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://dannyeliav.com/robots.txt
- https://dannyeliav.com/collections/engagement-rings · /collections/engagement-rings/products.json
- https://dannyeliav.com/products/six-prong-diamond-solitaire-engagement-ring-with-hidden-side-diamonds
- https://dannyeliav.com/policies/refund-policy · /pages/bespoke-jewelry
- Inventaire : `INVENTAIRE.md` (famille de quatre générations)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/danny/`
