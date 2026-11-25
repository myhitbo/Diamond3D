# Macédoine du Nord : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, dont aucun des 14 sites n'est macédonien.

Périmètre : joailliers établis en Macédoine du Nord qui vendent ou personnalisent en ligne des bagues de fiançailles ou des alliances pour des particuliers. Exclus : grandes maisons internationales, grands magasins, places de marché, marques mondiales (Pandora, revendeur Damiani) et sites sans bagues de fiançailles (perles d'Ohrid de Filevi).

Méthode : recherche web générique (Parallel Search, 3 séries de requêtes en macédonien et en anglais, sans donnée sur JR Diamond) ; `robots.cjs` sur chaque adresse avant ouverture ; curl (en-tête Safari) et Chromium (Playwright, une page toutes les 2 s au plus) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Un seul acteur utilisable : Maze Diamonds (Skopje)**, avec un vrai configurateur en ligne (bague, puis diamant, puis taille), 3 étapes, prix en dinars (MKD, « ден ») affichés à chaque étape, visuel 360° [V]. C'est la franchise en ligne de Majoni Diamonds (page « Contact » de mazediamonds.com) [V].
- **Les autres acteurs sont inauditables** : Majoni Diamonds (boutique Shopify, robots.txt en 403, donc « bloqué »), Maslinko (Bitola, robots.txt illisible) ; Garnet (site en erreur HTTP 500) ; Her Diamond (domaine en vente chez Zemi.mk) [V].
- **Terme pour le synthétique en macédonien** : « лабораториски дијаманти » (diamants de laboratoire), vu sur la page d'accueil macédonienne de Maze Diamonds [V]. Majoni emploie aussi « Dijamantski prsten » en translittération latine pour ses fiches [V, extrait de recherche].
- **Une critique d'un client sur Google Maps (17/08/2026, 2 sur 5) vise Majoni** : pas d'aide pour choisir le diamant, pierres non vues en vrai, prix des diamants de laboratoire jugés « anormalement élevés », manque de transparence sur la fabrication [V, extrait de la fiche Google Maps ; avis unique, non représentatif].
- **Aucun site ne propose l'achat intégral en ligne chez Maze** : la page Contact dit que tous les achats se font « exclusivement » en magasin [V]. Le bouton « Complete Ring » existe pourtant ; il n'a pas été actionné (panier interdit par robots.txt).
- **Monnaie** : dinar macédonien (MKD) chez Maze et Pandora ; euro chez Majoni [V]. **Langues de Maze** : anglais et macédonien (`/mk`) [V].

## Classement

Critères : configurateur et lien image-objet ; prix visible ; synthétique proposé ; preuves de fabrication ; proximité du modèle.

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Maze Diamonds | Skopje (Luj Paster 1, local 8, selon Google Maps) | https://www.mazediamonds.com/en | https://www.mazediamonds.com/en/setting-search | Oui : bague (50 modèles), diamant (laboratoire ou naturel, filtres), taille, 360° [V] | Aucun (`Allow: /`, interdit : `/cart`, `/checkout`, `/account*`, `/api/*`) [V] | EN, MK [V] | Seul vrai configurateur du pays ; prix décomposé (bague + pierre) ; synthétique mis en avant ; consultation vidéo avec un expert HRD |
| 2 | Majoni Diamonds | Skopje (GTC, rue Zlatarska) | https://www.majonidiamonds.mk/en | https://www.majonidiamonds.mk/collections/wedding | Non repéré ; catalogue Shopify, bagues de fiançailles à 869 à 4 868 EUR, alliances 14 k à 1 000 EUR [V, extraits de recherche] | **Bloqué** : robots.txt en HTTP 403 [V] | EN, MK | Franchiseur de Maze ; non audité faute d'accès |
| 3 | Zlatar Maslinko 1934 | Bitola | https://www.maslinko.com/ | https://www.maslinko.com/ | Non repéré ; boutique avec panier [V, extrait] | **Bloqué ou illisible** : robots.txt HTTP 0 ; certificat TLS expiré pour curl [V] | MK | Franchise de Maze (page Contact) ; non audité |
| 4 | Garnet Jewelry | Skopje (Vieux Bazar) | https://garnet.mk/ | https://garnet.mk/ | Non ; catalogue, or 14 k « pour bague de fiançailles » [V, extrait] | Pas de robots.txt ; **HTTP 500** sur curl et Chromium [V] | EN | Atelier artisanal ; site en panne le 15/11 |
| 5 | Sigma jewelry | Skopje | https://www.sigma.mk/ | https://www.sigma.mk/ | Non ; vitrine ancienne avec liste de prix en PDF, sans vente en ligne [V] | Aucun | MK, EN, IT | Hors cible |
| 6 | Her Diamond | Ohrid | https://herdiamond.mk/ | https://herdiamond.mk/ | Non : domaine « enregistré chez Zemi.mk » (page de parking) [V] | Aucun | | Franchise de Maze citée en page Contact, sans site |

Le site de Machique (Skopje, atelier sur mesure, 5/5 sur 19 avis Google) n'a pas été trouvé : `machique.mk` ne répond pas [V]. Pages de départ : toutes celles du rang 1 répondent 200 ; `/en/design-a-ring`, `/en/rings`, `/en/diamonds` répondent 404 (les vraies adresses sont `setting-search`, `ring-search`, `diamond-search`) [V].

## Audits réalisés

- `maze-diamonds.md` (statut complet).
- Second audit : **aucun**. Les rangs 2 et 3 bloquent les robots, les rangs 4 à 6 n'ont ni configurateur ni site utilisable.

## Sources

- Recherches Parallel Search du 15/11/2026 : majonidiamonds.mk, mazediamonds.com/en et /en/contact, maslinko.com, garnet.mk, fiches Google Maps (Majoni, Machique, Zlatara Paola, Maze), pandorashop.mk, damiani.com, filevi.com.
- Contrôles directs : `robots.cjs`, curl et Chromium sur les adresses du tableau.
