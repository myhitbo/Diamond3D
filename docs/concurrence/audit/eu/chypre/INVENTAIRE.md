# Inventaire des joailliers en ligne de Chypre

Date : 15/11/2026. Explorateur : Chypre. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun chypriote) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Constat

Chypre n'a aucun configurateur 3D de bague de fiançailles pour les particuliers parmi les sites chypriotes que j'ai trouvés. Un seul acteur national propose un constructeur en trois étapes (diamant, monture, bague complète) : Neophytou (Larnaca) [V]. Ce constructeur est un module tiers (iframe `ring-builder.apps.keyideasglobal.com`) branché sur un stock de diamants de fournisseurs, pas un fichier de fabrication de l'atelier [V]. Les autres sont des boutiques WooCommerce à fiches produit, avec parfois des options (métal, titre, naturel ou synthétique) ou un rendez-vous de création sur mesure. La liste compte 7 acteurs chypriotes (6 vendent en ligne, Edelweiss n'est qu'une vitrine) et 2 sites étrangers qui disent servir Chypre ; je ne complète pas jusqu'à 10 avec des sites sans vente en ligne.

Aucun site de la liste ne bloque les robots : tous les `robots.txt` autorisent les pages de départ (contrôle `robots.cjs`, 15/11) [V]. Interdit chez Panos Melekkis : `/cart/` (je ne l'ai pas ouvert, voir son rapport). Interdit chez Neophytou : toute adresse contenant `add-to-cart=` (ajout au panier par adresse) [V].

## Tableau

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Neophytou Precious Jewellery (« ESTD 1964 ») | Larnaca [V : tél. +357 24…, 3e génération selon le site] | https://neophytoujewellery.com/ (200) | https://neophytoujewellery.com/lab-diamonds/ (constructeur ; aussi /natural-diamonds/ et /engagement-rings/ pour partir d'une monture) | **Oui** : constructeur en 3 étapes, 621 691 diamants synthétiques, 362 216 naturels, 113 582 de couleur ; vue 360° [V] | Aucun (robots.txt : seul `add-to-cart=` interdit) | EN ; devises EUR ou USD [V] | Seul constructeur chypriote ; prix affichés, certificat IGI visible, livraison gratuite assurée Europe, retour 14 j. **Audité.** |
| 2 | Panos Melekkis | Limassol (boutique) et Dubai (bureau) [V] | https://panosmelekkis.com/ (200) | https://panosmelekkis.com/product-category/love-engagement/engagement-rings/ | Pas de configurateur : 20+ fiches avec menus (métal 14/18 k, naturel/synthétique, couleur d'or, pureté, taille 45-76) [V] ; sur mesure par rendez-vous « Book a Design » (CAO 3D) ; refonte de bijoux de famille [V] | Aucun ; `/cart/` interdit | EN | Seul acteur à vendre en ligne naturel et synthétique sur la même fiche, avec transformation de bijoux de famille. **Audité.** |
| 3 | Tsiropoulos Jewelry | Nicosie | https://tsiropoulos.net/ (200) | https://tsiropoulos.net/product-category/engagement-rings/ (par forme, par pierre : naturel, synthétique « Lab-Grown », zircone, pierres de couleur) | Non : catalogue par formes et sous-catégories [V] | Aucun | EN | Maison depuis 1987 [I : texte du site], laboratoire gemmologique chypriote (CGL) [V], page « Consult with an expert ». Non audité (limite de deux audits). |
| 4 | Azure Chic | Limassol | https://www.azurechic.com/ (200) | https://www.azurechic.com/ (« Natural or lab-grown diamonds in solid 9k–18k gold », bagues de fiançailles) | Non ; options naturel ou synthétique par fiche [V] | Aucun (`Allow: /`) | EN | En ligne depuis 2014 [V : texte du site] ; GIA (naturel) et IGI (synthétique) ; 30 j de retour ; avis affichés 4,8 Google et 4,7 Trustpilot (non vérifiés). Non audité. |
| 5 | Yiotis Jewellery | Paphos, Latchi, Polis | https://www.yiotisjewellery.com/ (200) | https://www.yiotisjewellery.com/ | Non : boutique avec prix barrés (ex. 2 395 € à 1 437 €) [V] | Aucun | EN | Présent en ligne depuis 2003 [V : texte du site] ; pas de synthétique trouvé. Non audité. |
| 6 | Hermanas Miguel | Paphos | https://hermanasmiguel.com/ (200) | https://hermanasmiguel.com/product-category/engagement-bridal/ | Non ; sur mesure sur rendez-vous (book-appointment) | Aucun | EN | Marque récente, bijoux 9-18 k, catégorie « Engagement & Bridal » ; peu de bagues en ligne. Non audité. |
| 7 | Edelweiss Diamonds | Chypre [I] | http://www.edelweissdiamonds.com.cy/ (200) | — | Non : vitrine de 44 Ko, sans boutique ni panier [V] | Aucun (pas de robots.txt) | EN | Vitrine, hors périmètre de vente en ligne. |
| — | Variation (Surat, Inde) | — | https://variation.in/ (200) ; page « en-cy » : 404 le 15/11 [V] | https://variation.in/en-cy (404) | Non vérifié : la vitrine chypriote annoncée par la recherche n'existe plus à cette adresse | Aucun | EN | **Étranger**, hors liste : prix en euros, livraison Chypre annoncée dans les résultats de recherche [S]. |
| — | Malvensky (Roumanie) | — | https://www.malvensky.com/en-cy/engagement-rings (200) | idem | Non : catalogue ; une bague 18 k synthétique 0,28 ct à partir de 1 700 € [V : snippet de recherche] | Aucun | EN | **Étranger**, vitrine « en-cy ». |

## Libellé du synthétique à Chypre

- Aucun texte national chypriote trouvé : le droit applicable est celui de l'Union (pratiques commerciales trompeuses) [I]. Je n'ai pas trouvé de règle chypriote spécifique ni de terme officiel en grec [S].
- Les sites chypriotes audités écrivent en anglais : « Lab Created » et « Lab-Grown » (Neophytou), « Lab Grown Diamonds » (Panos Melekkis), « Lab-Grown » (Tsiropoulos), « lab-grown ... Created in a laboratory » (Azure Chic) [V]. « Synthetic » n'apparaît pas dans ces pages [V].
- En grec, la presse utilise « εργαστηριακά διαμάντια » (powergame.gr, grec de Grèce, pas Chypre) [V].

## Sources

- Pages lues le 15/11/2026 : https://neophytoujewellery.com/ , /engagement-rings/ , /lab-diamonds/ , /product/solitaire-engagement-ring-seraphina/ , /shipping-and-delivery/ , /return-exchange-policy/ ; https://panosmelekkis.com/ , /product-category/love-engagement/engagement-rings/ , /product/engagement-ring-lr14051-19/ ; https://tsiropoulos.net/ ; https://www.azurechic.com/ ; https://www.yiotisjewellery.com/ ; https://hermanasmiguel.com/ ; http://www.edelweissdiamonds.com.cy/ ; https://variation.in/ .
- Recherches web génériques (sans donnée sur JR Diamond) : annuaires cyprusnet.com, cyprusalive.com ; guide https://cyprus-mail.com/2026/10/23/lab-grown-diamond-engagement-rings-what-buyers-should-know ; https://www.powergame.gr/art-market/642894/ergastiriaka-diamantia-to-mellon-tis-polyteleias/ .
- Écartés : Oro Vitchenza (Limassol, 3 magasins, seule fiche d'annuaire trouvée, pas de site) ; Spanos Fine Jewellery (Nicosie, domaine non trouvé) ; Kings Jewellers (Limassol, domaine non trouvé) ; Michelle Massoura, Maria Kotsoni (ventes via 1stDibs, place de marché exclue) ; Diamonds Factory (Londres, pas de magasin chypriote) ; Sateur (marque américaine, simili-diamants).
