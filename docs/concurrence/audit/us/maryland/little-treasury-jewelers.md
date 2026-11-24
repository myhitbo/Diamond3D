# Audit : Little Treasury Jewelers

- **Site** : Little Treasury Jewelers
- **Adresse** : https://littletreasury.com
- **Page de départ prévue** : https://littletreasury.com/apps/ringbuilder/settings/
- **Date** : 15/11/2026 (contrôle de robots.txt refait le 24/11/2026 dans la session)
- **Appareils** : aucun (aucune page ouverte, ni sur ordinateur ni en affichage iPhone)
- **Statut** : **bloqué**

## Raison du blocage

Le contrôle obligatoire `robots.cjs` a répondu **INCONNU** pour la page de départ, pour `/cart` et pour `/cart/add` : le `robots.txt` de https://littletreasury.com n'est pas lisible. Le serveur répond **HTTP 429** avec une page « Verifying your connection… » (vérification anti-robot de la boutique) à la place du fichier (vérifié, requête curl du contrôleur le 24/11/2026 sur https://littletreasury.com/robots.txt). La règle du lot est : robots.txt illisible = site qui refuse les robots = audit « bloqué ». Je n'ai donc ouvert aucune page du site (ni navigateur, ni curl, ni outil de lecture), je n'ai pas réessayé et je n'ai pas cherché à contourner la vérification.

Le blocage est récent : l'inventaire du 15/11 signalait « aucun (Shopify, 200) » et disait avoir lu le robots.txt (vérifié, `INVENTAIRE.md` de ce dossier). Le 429 vient peut-être d'une limitation de débit sur l'adresse de sortie du mandataire (supposé) ; cela ne change pas le statut.

## Parcours

Non audité. Rien n'a été actionné.

## Contrôles vérifiés

Aucun contrôle testé : étapes du constructeur, filtres, vues, boutons de service et ajout au panier sont tous « non testés, site bloqué par la vérification anti-robot ». Le panier n'a pas été approché (`/cart` : INCONNU).

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| (tous les contrôles) | tous | non testé : audit bloqué | non relevé | non testé |

## Options disponibles

Non relevées par cet audit (aucune page lue). Les éléments connus par l'exploration du 15/11 sont repris plus bas, sans revérification.

## Prix, délais, retours, garanties

Non audités : pas de mesure du temps d'apparition du visuel, pas de panier, pas de frais de livraison, pas de moyens de paiement, pas de retours ni de garanties relevés. Seul repère connu (exploration du 15/11, non revérifié) : 31 montures de marque avec prix, de 1 300 à 8 200 $ (inventaire, liste `products.json`). Délai non relevé.

## Confiance et service

Repris de `INVENTAIRE.md` (exploration du 15/11, pages lues par curl et Chromium ; non revérifié par moi) :
- Constructeur GemFind identique : monture, diamant naturel, diamant synthétique (contenu non lu).
- Discours « atelier en direct » : « you're buying direct from the manufacturer when using our custom services », « custom jewelry doesn't cost a premium ».
- Parcours sur mesure en 4 temps : idée, rendu sur ordinateur, maquette en cire, bague.
- Transformation d'un bijou ancien en 5 étapes, avec devis après le dessin CAO.
- Boutique à Gambrills (2506 New Market Ln).

## Points forts à retenir pour JR Diamond

- Argument « achat direct auprès du fabricant » et « pas de surcoût pour le sur-mesure » : le même terrain que le positionnement de JR Diamond ; à confronter à notre explication du prix (source : inventaire, lecture du 15/11 ; à relire si l'audit est repris).
- Devis donné après le dessin CAO, pour la transformation (même source).

## Défauts observés

Aucun défaut du site n'a pu être observé. Seule constatation : la boutique oppose une vérification anti-robot (HTTP 429) à la lecture de son `robots.txt` le 24/11/2026 (vérifié, voir plus haut).

## Limites de l'audit

- Audit bloqué : aucune page ouverte, aucun contrôle actionné, aucune mesure de temps de chargement.
- Limite antérieure, indépendante du blocage : le constructeur GemFind appelle `api.jewelcloud.com` en HTTP simple, que le mandataire de la session ne transporte pas ; le contenu de l'outil (montures, diamants, prix) n'a pas été lu lors de l'exploration (vérifié, `INVENTAIRE.md`). Même sans blocage, l'outil n'aurait pas pu être parcouru depuis cette session.
- Rien n'est affirmé ici sur les parcours, les options ou les prix du constructeur.
- Reprise possible : relancer l'audit depuis une autre session si le propriétaire le décide (le 429 peut être passager).

## Sources

- Contrôle `robots.cjs` du 24/11/2026 sur https://littletreasury.com/ (page de départ), https://littletreasury.com/cart et https://littletreasury.com/cart/add : INCONNU (HTTP 429, « Verifying your connection… »).
- `docs/concurrence/audit/us/maryland/INVENTAIRE.md` : ligne du site, limites de lecture, source n° 3 (pages lues le 15/11/2026).
