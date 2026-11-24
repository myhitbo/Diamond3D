# Audit David Stern Jewelers (Floride, États-Unis)

- **Site** : David Stern Jewelers — https://www.davidsternjewelers.com
- **Page de départ** : https://www.davidsternjewelers.com/build-your-ring
- **Date** : 15/11/2026
- **Appareils** : aucun (aucune page ouverte)
- **Statut** : **bloqué**

## Parcours

Non audité. Aucune page du site n'a été ouverte dans le navigateur, ni par curl, ni par un outil de lecture.

## Contrôles vérifiés

Aucun contrôle testé : l'audit est bloqué (voir « Limites »).

## Options disponibles

Non relevées.

## Prix, délais, retours, garanties

Non relevés.

## Confiance et service

Non relevés.

## Points forts à retenir pour JR Diamond

Aucun, faute d'audit. Seule indication, tirée du fichier robots.txt (lu, pas du site) : le site est un WordPress/WooCommerce avec un « Ring Builder » en étapes (`/build-your-ring/`) alimenté par des diamants Nivoda en direct (commentaires du robots.txt), ce qui laisse supposer un constructeur diamant + monture à stock changeant (inféré, non vérifié sur la page).

## Défauts observés

Aucun relevé.

## Limites de l'audit

- Le blocage signalé en entrée de mission (« Disallow: / pour les agents d'IA nommés et Disallow: /build-your-ring/ pour tous les robots ») n'a pas été rouvert pour y chercher une faille : l'ouverture du site a été refusée par le contrôle d'autorisation de la session, et je n'ai pas cherché à la contourner.
- **Écart à signaler au propriétaire** : le robots.txt que j'ai relu le 24/11/2026 (curl sur `/robots.txt` seulement, avec l'en-tête de navigateur utilisé par l'outil de contrôle) ne montre **ni** `Disallow: /` pour des agents d'IA nommés **ni** `Disallow: /build-your-ring/` global. Pour `User-agent: *`, il n'interdit que `/build-your-ring/complete/`, `/build-your-ring/view-diamond/?`, `/build-your-ring/select-your-diamond/?`, les adresses contenant `stock=` ou `dp=`, et `/build-your-ring/archive/` ; les pages d'étape sont dites « crawlable ». L'outil `robots.cjs` répond AUTORISÉ pour `/build-your-ring`. Le robots.txt a donc changé depuis le relevé initial, ou le relevé initial portait sur une autre version (non déterminé). Le texte du site cite aussi un fichier `llms.txt`, autorisé. Cette lecture n'est pas une autorisation d'ouverture : la décision d'auditer ou non ce site revient au propriétaire ; l'audit à la main reste à faire.
- Aucun chiffre de prix, délai, retour ou garantie n'est donné pour ce site.

## Sources

- https://www.davidsternjewelers.com/robots.txt (lu le 24/11/2026 ; seule page du site consultée)
