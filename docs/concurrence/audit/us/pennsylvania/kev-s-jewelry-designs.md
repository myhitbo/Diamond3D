# Audit : Kev's Jewelry Designs (Mount Wolf, Pennsylvanie)

- **Site** : Kev's Jewelry Designs, https://www.kevsjewelrydesigns.com/
- **Page de départ** : https://www.kevsjewelrydesigns.com/
- **Date** : 15/11/2026 (consigne de l'étude ; vérification faite le 25/11/2026)
- **Appareils** : aucun (aucune page ouverte)
- **Statut** : **bloqué**. Aucune page du site n'a été ouverte, ni par navigateur, ni par curl, ni par outil de lecture.
- Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Pourquoi l'audit est bloqué

- [V] Le fichier https://www.kevsjewelrydesigns.com/robots.txt (seule adresse lue) contient un groupe `User-agent: *` avec `Allow: /` et `Content-Signal: search=yes, ai-train=no`, puis un groupe qui interdit tout (`Disallow: /`) à `ClaudeBot`, `anthropic-ai`, `GPTBot`, `CCBot`, `Google-Extended`, `Applebot-Extended`, `Amazonbot`, `meta-externalagent`, `Bytespider`, `cohere-ai`, `Diffbot` et d'autres robots d'entraînement.
- L'auditeur est un agent d'Anthropic : le groupe `ClaudeBot` / `anthropic-ai` le vise nommément. L'outil de contrôle `robots.cjs` ne lit que le groupe `*` et répond « AUTORISÉ » ; cette réponse est donc trompeuse ici. Par prudence, la règle nominative l'emporte : aucune page ouverte, aucun contrôle actionné, aucune mesure de temps.
- Le site demande explicitement de ne pas être copié pour entraîner des modèles ; le propriétaire dit lui-même que les robots de recherche sont les bienvenus. Ce n'est pas une raison de contourner la règle nominative.

## Parcours, contrôles, mesures, panier

Non réalisés. Aucun tableau de contrôles : zéro contrôle vérifié. Aucune option relevée, aucun prix, aucun panier.

## Ce que l'on sait sans avoir ouvert le site (indirect, [I])

Source unique : extraits d'un moteur de recherche (requêtes génériques sur les joailliers de Pennsylvanie), déjà consignés dans `INVENTAIRE.md` (fiche 3). Ils ne remplacent pas un audit.

- Visionneuse 3D sur l'accueil (« This is a real model from my studio », « Tap to spin it in 3D »).
- Maquette imprimée en 3D (résine) à essayer « within about two days of settling the design » ; fonte faite à l'atelier, sertissage à la main.
- Budget typique d'une bague de fiançailles : « $1,000 to $50,000 » ; « Earth-mined or lab-grown diamonds, your choice ».
- Consultation et premiers rendus gratuits ; pas de boutique ; rendez-vous à domicile dans le centre-sud de la Pennsylvanie ou par vidéo ; CAO réalisée pour d'autres joailliers depuis 1999.

## Points forts à retenir pour JR Diamond

Aucun n'est retenu comme fait vérifié. Une seule piste est à confirmer par une personne : la maquette en résine à essayer deux jours après la validation de la CAO, qui va dans le sens de « ce que vous voyez existe » (preuve indirecte : extrait de recherche de l'accueil, [I]).

## Défauts observés

Aucun observé (aucune page ouverte).

## Limites de l'audit

- Rien n'a été actionné, mesuré ni lu sur le site. Prix, délais, retours, garanties, certificats, libellé du synthétique, avis, langues, devises : inconnus.
- Les faits [I] ci-dessus viennent d'extraits d'un index de recherche et peuvent être périmés ou tronqués.
- Pour auditer ce site, il faut que le propriétaire de l'étude le fasse à la main, ou obtienne l'accord du site.

## Sources

- https://www.kevsjewelrydesigns.com/robots.txt (lu le 25/11/2026)
- Extraits de recherche indexés de https://www.kevsjewelrydesigns.com/ (via `INVENTAIRE.md`)
