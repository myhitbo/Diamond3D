# Audit : Goldsmith Gallery Jewelers

- **Site** : Goldsmith Gallery Jewelers (Billings et Bozeman, Montana) — https://www.goldsmithgalleryjewelers.com
- **Page de départ** : https://www.goldsmithgalleryjewelers.com/create-your-ring
- **Date** : 15/11/2026
- **Appareils** : aucun navigateur lancé (audit non commencé)
- **Statut** : **bloqué**. Le robots.txt contient une règle `User-agent: ClaudeBot` / `Disallow: /` (aussi pour d'autres robots d'IA), avec `Crawl-delay: 30`. Aucune page du site n'a été ouverte pour cet audit.

## Parcours

Non audité. Seule information (I, extrait d'index de recherche rapporté dans `INVENTAIRE.md`) : le constructeur compterait trois étapes « Choose Your Setting → Choose Your Diamond → Complete Your Ring ».

## Contrôles vérifiés

Aucun. Aucun contrôle n'a été relevé (controls.cjs non lancé), ni sur ordinateur ni sur iPhone : le site refuse explicitement les robots d'IA, et ne pas le contourner est la règle de l'étude.

## Options disponibles

Non vérifiées. D'après l'inventaire (I, non confirmé) : 936 montures avec prix ; or 14 k et 18 k (rose, blanc, jaune) et platine ; filtre « Stone type » avec « Lab-Grown Diamond ».

## Prix, délais, retours, garanties

Non vérifiés. Le prix est affiché dans le constructeur (I, par exemple Tacori Dantela à 7 090 $ en « Special order », d'après l'inventaire). Rien sur les délais, retours, garanties ni panier.

## Confiance et service

Non vérifiés. Magasins (I) : 903 Shiloh Crossing Blvd à Billings et 862 Harmon Stream Blvd à Bozeman ; maison familiale fondée en 1990 ; a repris Jewelry Studio à Bozeman (V par redirection, https://www.jsjewelrystudio.com/bozeman-engagement-rings, selon `INVENTAIRE.md`).

## Points forts à retenir pour JR Diamond

Aucun établi par observation directe. Seule piste (I) : un constructeur avec prix de monture affiché et filtre synthétique. À confirmer auprès d'un tiers autorisé ou d'une autre source si le propriétaire le souhaite.

## Défauts observés

Aucun observé. Le blocage ne vient pas d'un défaut du site : c'est un choix du propriétaire du site de refuser les robots d'IA.

## Limites de l'audit

- Le robots.txt a été lu (V, https://www.goldsmithgalleryjewelers.com/robots.txt ; groupe `*` : `Allow: /`, `Crawl-delay: 30` ; le groupe ClaudeBot interdit tout, d'après `INVENTAIRE.md`). L'outil robots.cjs ne lit que le groupe `*` et indique « AUTORISÉ » : cette réponse ne tient pas compte de la règle ClaudeBot et n'a pas été suivie.
- Aucune page lue, aucun contrôle actionné, aucun temps de chargement mesuré, aucun panier.
- Tous les éléments « I » ci-dessus viennent de l'inventaire du 15/11 et n'ont pas été revérifiés.

## Sources

- https://www.goldsmithgalleryjewelers.com/robots.txt (seule page lue)
- `docs/concurrence/audit/us/montana/INVENTAIRE.md` (section 3)
