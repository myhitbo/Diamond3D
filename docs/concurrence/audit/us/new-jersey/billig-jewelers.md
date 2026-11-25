# Billig Jewelers (Marlton, New Jersey)

- Site : https://billigjewelers.com/
- Page de départ : https://billigjewelers.com/collections/engagement-ring-settings
- Date : 15/11/2026
- Appareils : aucun (ordinateur et iPhone prévus, non lancés)
- Statut : **bloqué**

## Pourquoi l'audit est bloqué

- Le contrôle obligatoire `robots.cjs` répond INCONNU pour la page de départ, `/cart` et `/cart/add` : `robots.txt` est illisible (HTTP 403, page HTML) (vérifié, 15/11/2026).
- Règle de l'étude : INCONNU veut dire que le site refuse les robots. Aucune page de billigjewelers.com n'a été ouverte (ni navigateur, ni curl, ni outil de lecture), aucun nouvel essai, aucune protection contournée. Le blocage signalé « non » dans la consigne ne se vérifie donc pas aujourd'hui.

## Parcours

Non audité. L'exploration antérieure (hors présent audit, non revérifiée) rapporte : choix de la monture puis de la pierre, plus un questionnaire « Start Your Custom Ring » en 7 étapes (étapes 1 à 7), boutique Shopify, bouton « Add To Cart » (source : `INVENTAIRE.md`, section 2).

## Contrôles vérifiés

Aucun. Tous les contrôles sont « non testés : site bloqué aux robots (robots.txt illisible, HTTP 403) ». Le bouton « Add To Cart » en particulier n'a pas été touché (panier non vérifiable par robots.txt).

## Options disponibles

Non relevées dans cet audit. Données de l'exploration, non revérifiées aujourd'hui (inféré) :
- Métaux annoncés : or 14 k et 18 k en blanc, jaune, rose, et platine (fiche « Aria »).
- Pierre centrale : diamant de synthèse inclus dans le prix de la fiche « Aria » ; choix d'un diamant certifié naturel ou synthétique annoncé.
- Formes évoquées par la recherche web : solitaire, hidden halo, trois pierres, ovale, pierres latérales, lunette (WebSearch, extraits du site).

## Prix, délais, retours, garanties

Non audités. Exploration (non revérifiée, inféré) : montures « from $1,250 for the setting » ; « Aria » 1 ct or 14 k 2 250 $, 1,5 ct 2 750 $, 2 ct 3 250 $ … 4 ct 5 250 $ (+500 $ par demi-carat, platine +250 $) ; délai « about 2–4 weeks » ; « Every ring is assembled and inspected by our in-house team » (source : `INVENTAIRE.md`, section 2). Retours, garanties, livraison, paiement : non relevés.

## Confiance et service

Non audité. Recherche web (supposé, sources tierces) : entreprise familiale de Marlton, 330 Route 73 S, depuis plus de 35 ans ; un avis tiers cité fait état d'un manque de communication et d'un retard pendant la conception d'une bague.

## Points forts à retenir pour JR Diamond

Sous réserve de reprise de l'audit (inféré, d'après l'exploration) :
- Prix complet de la bague affiché avec la pierre synthétique incluse, barème linéaire par demi-carat : le meilleur repère de prix expliqué de l'État (preuve : `INVENTAIRE.md`, rang 2 et section 2).
- Délai chiffré (2 à 4 semaines) et montage contrôlé en atelier annoncés sur la page (preuve : même section).

## Défauts observés

- robots.txt répond 403 (vérifié, via `robots.cjs`, 15/11/2026).
- Aucun défaut de parcours observé : parcours non audité.

## Limites de l'audit

- Aucune page ouverte, aucune mesure de temps d'affichage, aucun panier, aucun affichage iPhone.
- À reprendre si le site autorise les robots ou si le propriétaire obtient son accord.

## Sources

- Contrôle `robots.cjs`, 15/11/2026 : https://billigjewelers.com/robots.txt (403).
- `docs/concurrence/audit/us/new-jersey/INVENTAIRE.md`, section « 2. Billig Jewelers ».
- Recherche web générique : https://billigjewelers.com/ (extrait de résultat), https://www.inkl.com/news/jewelry-store-new-jersey-discover-luxury-elegance-at-billig-jewelers, https://willyou.net/jewelers/billig-jewelers-evesham-township-nj
