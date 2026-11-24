# Audit : Brown Goldsmiths (Freeport, Maine, États-Unis)

- **Site** : Brown Goldsmiths, https://browngoldsmiths.com
- **Page de départ** : https://browngoldsmiths.com/custom-ring-builder
- **Date** : 15/11/2026.
- **Appareils** : Chromium sur ordinateur (1366 x 900, en-US), identité par défaut. L'affichage iPhone n'a pas été essayé : la page répond 403, un second essai n'aurait pas changé le constat.
- **Statut** : **bloqué**. Le robots.txt est lisible (`Crawl-delay: 10`) et autorise l'adresse, mais le serveur répond « 403 Forbidden » aux robots (curl dans l'inventaire du jour, puis navigateur ouvert une fois ici). Aucun contournement n'a été tenté (pas de changement d'identité, pas de proxy, pas de nouvel essai).
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré (extrait de recherche), **S** supposé.

## Parcours

Non observé. Seule la réponse de la page a été lue : titre « Error 403 Forbidden », 0 contrôle visible (V, https://browngoldsmiths.com/custom-ring-builder, navigateur, 15/11/2026).

D'après les extraits de recherche (I) : le constructeur 3D se commence en ligne, puis le choix de la pierre et la finalisation se font en boutique avec un spécialiste.

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| (aucun) | - | page de refus 403, aucun bouton ni option | - | bloqué : aucun contrôle à tester |
| Constructeur 3D, vues, tailles, gravure, panier, service | - | non observés | - | non testés : site bloqué aux robots |

## Options disponibles

Non relevées. Les extraits de recherche ne listent ni métaux, ni formes, ni prix du constructeur (I).

## Prix, délais, retours, garanties

- **Prix** : aucun relevé.
- **Délai** : la maison annonce une bague prête « en quelques semaines » (« a couple of weeks ») avec ce parcours (I, extrait de https://browngoldsmiths.com/custom-engagement-rings/ ; promesse commerciale du site, non vérifiée).
- **Retours, garanties, certificats, synthétique, panier** : non vus.

## Confiance et service

- Atelier sur place à Freeport, en activité depuis 1967 (I, extrait de recherche) ; adresse 148 Main St. (I, annuaire StoneAlgo).
- Un avis de The Knot décrit un travail d'atelier d'un peu plus d'une demi-journée selon le style de la bague (I, extrait de recherche) ; un client dit avoir dessiné ses bagues sur le site avant sa visite (I).
- Photos envoyées pendant la fabrication : mentionné dans l'inventaire du jour (I), non confirmé par une page lue.

## Points forts à retenir pour JR Diamond

Aucun fait vérifié. À titre d'hypothèse (I) : Brown Goldsmiths associe un atelier sur place, un constructeur 3D en ligne et une finalisation en boutique ; c'est le profil le plus voisin de « l'atelier en direct », mais la preuve reste un extrait de recherche, non une page lue.

## Défauts observés

- Le site refuse les robots (403) alors que son robots.txt l'autorise : l'étude automatisée ne peut pas le lire (V).
- Le choix de la pierre se fait en boutique, donc le client ne finit pas son achat en ligne (I).

## Limites de l'audit

- Aucune page de contenu n'a pu être lue ; tout ce qui précède, sauf le code 403, est un extrait de recherche.
- Un audit utile demande une lecture à la main par une personne, sur un vrai navigateur.
- Les recherches ont utilisé des requêtes génériques, sans mention de JR Diamond.

## Sources

- https://browngoldsmiths.com/custom-ring-builder (V : 403, 15/11/2026)
- https://browngoldsmiths.com/robots.txt (V : lisible, `Crawl-delay: 10`, adresse de la page de départ autorisée)
- https://browngoldsmiths.com/custom-engagement-rings/ (I : extrait de recherche)
- https://www.stonealgo.com/local-jewelers/freeport-me/brown-goldsmiths-43d055e44036865b79408a2d0c83daed (I)
- https://www.theknot.com/marketplace/brown-goldsmiths-freeport-me-549152 (I)
- Inventaire du Maine du même jour : `docs/concurrence/audit/us/maine/INVENTAIRE.md`
