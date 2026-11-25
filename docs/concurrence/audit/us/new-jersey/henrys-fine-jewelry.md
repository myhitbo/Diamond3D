# Henry's Fine Jewelry (Summit et Basking Ridge, New Jersey)

- Site : https://henrysfinejewelry.com/
- Page de départ : https://henrysfinejewelry.com/pages/design-your-ring
- Date : 15/11/2026
- Appareils : aucun (ordinateur et iPhone prévus, non lancés)
- Statut : **bloqué**

## Pourquoi l'audit est bloqué

- Le contrôle obligatoire `robots.cjs` répond INCONNU pour la page de départ, `/cart` et `/cart/add` : `robots.txt` est illisible (HTTP 403, page HTML) (vérifié, 15/11/2026).
- Règle de l'étude : INCONNU veut dire que le site refuse les robots. Aucune page de henrysfinejewelry.com n'a été ouverte, aucun nouvel essai, aucune protection contournée. Le blocage signalé « non » dans la consigne ne se vérifie donc pas aujourd'hui.

## Parcours

Non audité. Exploration antérieure (non revérifiée) : outil 3D JewelerOS (`data-org-id="9pGwMPMAAEVK"`) annoncé « Choose the setting, pick the diamond, and watch your ring come together in 3D » ; la conception est envoyée au magasin, qui la revoit avec le client puis la fabrique « at our bench, right here in New Jersey » ; boutique Shopify séparée (source : `INVENTAIRE.md`, section 4).

## Contrôles vérifiés

Aucun. Tous les contrôles sont « non testés : site bloqué aux robots (robots.txt illisible, HTTP 403) ».

## Options disponibles

Non relevées dans cet audit (non testé).

## Prix, délais, retours, garanties

Non audités. Exploration (inféré, non revérifié) : bagues de fiançailles de la boutique de 1 166 à 1 830 $ en première page de collection ; l'outil 3D ne montre pas de prix dans les extraits relevés. Recherche web (supposé) : « 100 % customer satisfaction guarantee », consultation gratuite, diamants certifiés GIA. Délais, retours, livraison, paiement : non relevés.

## Confiance et service

Non audité. Recherche web (supposé, sources tierces) : deux boutiques, Summit (419 Springfield Ave) et Basking Ridge (665 Martinsville Rd) ; ouverte en 1989 selon Yelp ; 29 avis sur la fiche Yelp de Basking Ridge ; réparation de bijoux et montres.

## Points forts à retenir pour JR Diamond

Sous réserve de reprise de l'audit (inféré) :
- Discours « conception 3D en ligne puis fabrication à l'établi local, revue en personne » : le plus proche de « l'atelier en direct » (preuve : `INVENTAIRE.md`, rang 4).
- Conception envoyée au magasin plutôt qu'achetée en ligne : indique que l'outil sert à ouvrir le dialogue, à rapprocher du devis de JR Diamond.

## Défauts observés

- robots.txt répond 403 (vérifié, via `robots.cjs`, 15/11/2026).
- Parcours non audité : aucun défaut fonctionnel relevé.

## Limites de l'audit

- Aucune page ouverte, aucune mesure de temps d'affichage, aucun panier, aucun affichage iPhone.
- À reprendre si le site autorise les robots ou si le propriétaire obtient son accord.

## Sources

- Contrôle `robots.cjs`, 15/11/2026 : https://henrysfinejewelry.com/robots.txt (403).
- `docs/concurrence/audit/us/new-jersey/INVENTAIRE.md`, section « 4. Henry's Fine Jewelry ».
- Recherche web générique : https://henrysfinejewelry.com/ (extrait de résultat), https://www.yelp.com/biz/henrys-fine-jewelry-basking-ridge, https://www.stonealgo.com/local-jewelers/summit-nj/henrys-fine-jewelry-74365abd30b92afbb97c1af179e0b584
