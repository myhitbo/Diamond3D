# Audit : Maine Gold & Silver

- **Site** : Maine Gold & Silver
- **Adresse de départ** : https://www.mainegoldandsilver.com/apps/ringbuilder/settings/
- **Date** : 15/11/2026
- **Appareils** : aucun ouvert (voir ci-dessous)
- **Statut** : **bloqué**

## Raison du blocage

Le contrôle obligatoire `robots.cjs` sur l'adresse de départ a répondu **INCONNU** : le `robots.txt` du site est illisible, HTTP 429 avec une page HTML (le site limite ou refuse les robots) [V : sortie de l'outil de contrôle, 15/11/2026]. Selon la règle de l'étude, le site est traité comme bloqué : aucune page n'a été ouverte dans le navigateur, aucun relevé de contrôles, aucune mesure, aucun nouvel essai pour passer, aucune tentative de contournement. Le signalement initial (« robots.txt Shopify standard ») n'a donc pas pu être confirmé.

## Parcours

Non audité. Rien n'est vérifié sur le constructeur (`/apps/ringbuilder/settings/`).

## Contrôles vérifiés

Aucun. Tous les contrôles sont **non testés**, raison : site bloqué (HTTP 429 sur robots.txt).

## Options disponibles, prix, délais, retours, garanties, confiance et service

Non relevés (aucune page lue). Aucun chiffre n'est donné.

## Points forts à retenir pour JR Diamond

Aucun, faute de preuve.

## Défauts observés

Aucun relevé. Seul fait vérifié : le `robots.txt` répond 429 à l'outil d'audit [V].

## Limites de l'audit

- Pas de lecture de page, pas de capture, pas de mesure de temps d'affichage sur ordinateur ni iPhone.
- Le blocage peut être temporaire (limitation de débit) [I] ; un nouvel essai ultérieur par la session principale, après un délai raisonnable, reste possible, mais n'a pas été tenté ici.
- La page de départ indiquée est une page de réglages d'une application Shopify (`/apps/ringbuilder/…`) ; son contenu n'a pas été examiné.

## Sources

- Résultat de `robots.cjs` du 15/11/2026 pour https://www.mainegoldandsilver.com/apps/ringbuilder/settings/ : « INCONNU (robots.txt illisible : HTTP 429, page HTML) ».
