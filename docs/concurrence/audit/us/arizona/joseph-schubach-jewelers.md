# Joseph Schubach Jewelers (Scottsdale, Arizona)

- Site : https://schubachstore.com
- Page de départ : https://schubachstore.com/apps/ring-creator/rb-get-started
- Date : relevé du 24/11/2026 (étude du 15/11/2026)
- Appareils : aucun contrôle de parcours effectué (ordinateur et iPhone prévus, non lancés)
- Statut : **bloqué**

## Pourquoi l'audit est bloqué

- Le contrôle obligatoire `robots.cjs` répond INCONNU pour les trois adresses vérifiées (page de départ, accueil, panier) : `robots.txt` est illisible (HTTP 429, page HTML « Verifying your connection... ») (vérifié, 24/11/2026).
- Règle de l'étude : INCONNU veut dire que le site refuse les robots. Aucune page de schubachstore.com n'a donc été ouverte pour cet audit, aucun nouvel essai n'a été fait, aucune protection n'a été contournée.
- L'exploration précédente (INVENTAIRE.md) avait pu lire le site avec curl (200) et notait seulement un widget Cloudflare Turnstile ; le défi observé aujourd'hui est donc apparu depuis (inféré : durcissement de la protection ou limitation de débit).

## Parcours

Non audité. Ce que l'inventaire de l'exploration (lecture du 15/11, hors présent audit, non revérifié) rapporte du parcours RingCreator :

| Étape | Options relevées par l'exploration |
|---|---|
| Départ | « Begin with a Stone » ou « Begin with a Setting » |
| Monture | tête (par ex. « Adeline », or blanc 14 k) + anneau (par ex. « Duchess », or jaune 14 k) ; têtes de 1, 2 ou 3 ct ; formes rond, coussin, émeraude, poire, ovale ; 14 styles de tête ; métaux 14 k blanc, jaune, rose, 18 k blanc ; tailles de doigt |
| Pierre | recherche de diamants synthétiques et naturels, moissanite, pierres de couleur |
| Récapitulatif | « Review Complete Ring », visionneuse 3D VDB, boutons « Select Setting » et « Add to Cart » |

## Contrôles vérifiés

Aucun dans cet audit. Tous les contrôles sont « non testés : site bloqué aux robots (robots.txt illisible, HTTP 429) ».

## Options disponibles

Non relevées (voir le tableau ci-dessus, issu de l'exploration, état inféré).

## Prix, délais, retours, garanties

Non audités. Données de l'exploration, non revérifiées : prix de monture affiché « $1,675.00 Setting Price » (pierre à part) ; page de conception : « Review your design in 3D then request a personalized quote » (source : INVENTAIRE.md, section Schubach).

## Confiance et service

Non audité.

## Points forts à retenir pour JR Diamond

Sous réserve de reprise de l'audit, d'après l'exploration (inféré, non revérifié aujourd'hui) :

- Parcours monture puis pierre avec prix de monture et bouton panier : le plus abouti de l'État en vente directe (preuve : INVENTAIRE.md, rang 2).
- Monture composée d'une tête et d'un anneau choisis séparément, ce qui rend le prix lisible par composant.

## Défauts observés

- Aujourd'hui : robots.txt répond 429 avec une page de vérification (vérifié, https://schubachstore.com/robots.txt via robots.cjs).
- Exploration précédente : visionneuse 3D non affichée dans le navigateur de l'époque (inféré).

## Limites de l'audit

- Aucune page du site ouverte ; aucune mesure de temps d'affichage ; aucun panier.
- À reprendre si le propriétaire obtient l'accord du site ou si le défi disparaît (nouveau contrôle `robots.cjs`).

## Sources

- Contrôle `robots.cjs`, 24/11/2026 : https://schubachstore.com/robots.txt (429).
- `docs/concurrence/audit/us/arizona/INVENTAIRE.md`, section « 2. Joseph Schubach Jewelers ».
