# Audit : Edenly, atelier 3D de bagues (français, €) : **bloqué**

| | |
|---|---|
| Site | Edenly (société à Genève ; boutique à Paris Opéra, d'après l'inventaire européen) |
| Page de départ | https://www.edenly.com/create-engagement.php (accueil de « L'Atelier » : https://www.edenly.com/create-home.php) |
| Date | 16/11/2026 (audit non tenté ; constat du 15/11/2026 repris) |
| Appareils | aucun : aucune page n'a été ouverte aujourd'hui |
| Statut | **bloqué, non audité.** Le 15/11/2026, le site a répondu par un défi Cloudflare (403, « Just a moment… ») à `curl` sur l'accueil et à Chromium sur `create-engagement.php` (V, `INVENTAIRE.md`, `docs/concurrence/2026-11-15_europe.md`). La règle de l'étude impose de ne pas réessayer ni contourner : aucune adresse du site n'a été rouverte pour ce rapport |
| robots.txt | lu le 16/11 (réponse 200, fichier seul) : `Disallow` sur les filtres (`taille=`, `budget=`, `metal=`, `pierre=`…), `/panier.php*`, `/customer/*`, `/sur-mesure.php*`, `/inc/rdv.php*`, `/create-engagement.php?id=` et `/create-engagement.php?*&id=` (V). `create-engagement.php` seul est permis ; les fiches de création par `?id=` sont interdites. Le fichier annonce `Content-Signal: ai-train=yes, search=yes, ai-input=yes` (V) |

Marques : **V** vérifié · **I** inféré · **S** supposé.

## Ce qui est connu sans ouvrir le site

Tout vient de l'inventaire du 15/11 (extrait de recherche, non actionné) ; rien n'a été manipulé (V pour la source, S pour l'état actuel du site).

- Configurateur 3D : modèle (solitaire, accompagné, halo), 11 pierres dont diamant naturel et diamant synthétique, 0,3 à 1 ct, or 9 ou 18 k (V, texte lu par la recherche ; non actionné).
- Prix affichés ; créations de clients à 900–1 170 € en synthétique de 0,5 à 1 ct (V, extrait).
- Retour à 30 jours sur les pièces configurées (inventaire européen, non revérifié).
- Langues : FR, EN, DE, ES, IT, NL, PL, RO (V, sous-domaines du `robots.txt`).
- Libellé : « diamant synthétique », « diamant naturel ou de synthèse » (V, extrait) : conforme au décret 2002-65.
- Les pages de suivi, de panier et de rendez-vous sont interdites aux robots (V, `robots.txt`) : l'audit de bout en bout n'aurait de toute façon pas pu atteindre le panier.

## Pour JR Diamond

- **Concurrent 3D le plus direct en France**, avec prix et choix naturel/synthétique, mais **fermé aux robots** : il faudra l'étudier à la main (un visiteur humain, sur son propre appareil) si l'étude doit le couvrir.
- Un site qui sert un défi Cloudflare aux navigateurs automatisés bloque aussi des outils d'accessibilité et d'agents ; ce n'est pas un défaut de JR Diamond, mais un point à connaître pour les tests e2e du site (`tests/e2e`).

## Limites

- Aucun contrôle actionné, aucune capture. Les chiffres cités sont des extraits de recherche d'hier.
- À faire : un test manuel par une personne (ordinateur et iPhone), puis rapport complet sur le modèle de `courbet.md`.

## Sources

- https://www.edenly.com/robots.txt (lu le 16/11/2026)
- Constat de blocage et extraits : `docs/concurrence/audit/eu/france/INVENTAIRE.md`, `docs/concurrence/2026-11-15_europe.md`
