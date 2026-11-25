# Audit : Danforth Diamond (Virginie, États-Unis)

- **Site** : Danforth Diamond, https://www.danforthdiamond.com
- **Page de départ prévue** : https://www.danforthdiamond.com/jewelry/engagement-rings
- **Date** : 15/11/2026 · **Appareils** : aucun (aucune page ouverte)
- **Statut** : **bloqué** (décision de méthode, pas blocage technique). Légende : [V] vérifié, [I] inféré, [S] supposé.

## Pourquoi l'audit n'a pas eu lieu

- [V] Le contrôle obligatoire `robots.cjs` répond **INCONNU** pour `/jewelry/engagement-rings` et pour `/cart` : `https://www.danforthdiamond.com/robots.txt` renvoie HTTP 200 mais une **page HTML** (l'application web, `<title>Danforth Diamond</title>`, balise Google Tag Manager, script `core.spreedly.com`), pas un fichier de règles.
- [I] Le site est une application monopage dont le serveur renvoie la même page pour toute adresse inconnue : il n'a probablement pas de robots.txt (aucune règle publiée, donc ni autorisation ni interdiction lisible).
- Consigne du dossier : INCONNU = marquer l'audit « bloqué ». Aucune page du site n'a été ouverte (ni navigateur, ni curl, ni outil de lecture) ; aucun contournement tenté. La remarque « fiches produit en erreur 404 dans le navigateur » vient de l'exploration précédente et n'a pas été revérifiée.

## Parcours, contrôles, options, prix, confiance

Non audités : aucun contrôle actionné, aucune mesure de temps, pas de panier. [V] Les seules données lues sont le début du fichier `robots.txt` (HTML) ci-dessus.

## Points forts à retenir pour JR Diamond

Aucun, faute d'observation.

## Défauts observés

- [V] robots.txt absent en pratique (renvoie l'application HTML avec le code 200) : empêche de savoir ce que le site autorise aux robots.
- [Reporté, non revérifié] Fiches produit en 404 dans le navigateur (signalé par l'exploration).

## Limites de l'audit

Site non audité. À reprendre si le propriétaire décide qu'une absence de robots.txt vaut autorisation, ou par une consultation manuelle hors protocole.

## Sources

- https://www.danforthdiamond.com/robots.txt (réponse HTML, via `robots.cjs`, 15/11/2026).
