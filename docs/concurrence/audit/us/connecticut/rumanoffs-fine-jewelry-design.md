# Audit : Rumanoff's Fine Jewelry & Design (Hamden, Connecticut)

- **Site** : Rumanoff's Jewelers, https://www.rumanoffs.com/
- **Page de départ** : https://www.rumanoffs.com/create-your-ring
- **Date** : 15/11/2026 (mesures du 24/11)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (liste de contrôles et mesure de chargement seulement)
- **Statut** : **partiel** (étape 1 « choisir la monture » parcourue ; fiche produit, choix du diamant et panier non atteints, voir Limites)
- Légende : [V] vérifié, [I] inféré, [S] supposé.
- **Arbitrage robots.txt** : le signalement disait que ClaudeBot, Claude-Web et anthropic-ai sont interdits et que le groupe `*` est autorisé. Le contrôle d'adresses a répondu AUTORISÉ pour toutes les adresses ouvertes (groupe `*`, `Allow: /`). Le navigateur de l'audit est un Chromium standard, lecture seule, une page à la fois. Aucun contournement de protection n'a eu lieu.

## Parcours

Constructeur en 3 étapes annoncées dans l'en-tête : 1 « Choose your setting » → 2 « Choose your diamond » → 3 « Complete your ring » [V].

| Étape | Options |
|---|---|
| 1. Monture (page testée) | 1 223 montures, 77 pages ; 6 groupes de filtres ; tri en 10 modes ; liste de souhaits |
| 2. Diamant | lien « CHOOSE YOUR DIAMOND » présent ; non ouvert |
| 3. Bague complète | non atteinte |

## Contrôles vérifiés

71 contrôles listés par script (ordinateur) [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| CENTER STONE SHAPE | filtre (cases) | 9 choix : Asscher, Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round | n/a | liste lue [V] |
| ENGAGEMENT RING TYPE | filtre | Halo, Sidestone, Solitaire, Three Stone | n/a | liste lue [V] |
| MATERIAL | filtre | 14K pink, 14K rose, 14K white, 14K yellow, 18K rose, 18K white, 18K yellow, Platinum | n/a | liste lue [V] |
| SET | filtre | Engagement Ring | n/a | lu [V] |
| STONE SHAPE | filtre | Baguette, Emerald, Marquise, Oval, Pear, Princess, Round | n/a | lu [V] |
| STONE TYPE | filtre | Blue Sapphire, Diamond, Emerald, Lab-Grown Diamond, Sapphire, Yellow Diamond | n/a | lu [V] |
| Lab-Grown Diamond (filtre) | case | recharge la page en `?Spec_Stone_Type=Lab-Grown%20Diamond` ; **1 résultat sur 1 223** | n/a | OK [V] |
| + Oval, + Platinum, + Halo (cumul) | cases | l'adresse accumule les filtres ; 1 résultat puis 0 résultat | n/a | OK mais aucun message d'aide en cas de 0 [V, 0 prix affiché] |
| RESET FILTERS | bouton | présent, non cliqué | n/a | non testé |
| SORT BY | liste | Default, Price low→high, high→low, Newest, In Stock First, Orderable, Brand A–Z / Z–A, Model A–Z / Z–A | n/a | `?sort_by=price-asc` : premiers prix 1 182 $, 1 413 $, 1 428 $, 1 434 $, 1 506 $ [V] |
| Add to Wishlist (cœur, ×16 par page) | bouton | présent | n/a | non testé (compte) |
| Pagination « 1 2 3 … 77 » | liens | présent | n/a | non testée |
| Étapes en-tête CHOOSE YOUR SETTING / DIAMOND | liens | l'étape 1 recharge la page (`location.reload()`), l'étape 2 `javascript:void(0)` | n/a | liens relevés, non ouverts |
| Tuile produit (image, nom) | clic | un clic sur l'image n'a pas ouvert de fiche sur l'essai effectué (URL inchangée) ; cause inconnue (bandeau de cookies au premier plan probable [S]) | n/a | non concluant [V] |
| SEARCH PRODUCTS | champ | présent | n/a | non testé (saisie) |
| Suivre ma commande, wishlist, panier, connexion | liens | /track-my-order, /wishlist, /shopping-cart, /login | n/a | liens présents, non ouverts |
| MAKE AN APPOINTMENT | lien | /contact-us | n/a | présent [V] |
| Téléphone 203-230-1199, info@rumanoffs.com | liens | tel / mailto | n/a | présents [V] |
| Bandeau cookies (Accept all / Decline all / Settings) | boutons | présents ; **non cliqués** | n/a | relevé [V] |

## Options disponibles

- **Matières** : or 14 k (rose, « pink », blanc, jaune), or 18 k (rose, blanc, jaune), platine [V].
- **Formes de la pierre centrale** : asscher, coussin, émeraude, marquise, ovale, poire, princesse, radiant, rond [V].
- **Types de bague** : halo, pierres latérales, solitaire, trois pierres [V].
- **Pierres** : diamant, diamant de laboratoire (« Lab-Grown Diamond »), diamant jaune, saphir, saphir bleu, émeraude [V].
- **Marques visibles** : Tacori, Noam Carver, Allison Kaufman, entre autres [V].
- **Absents sur cette page** : taille de doigt, gravure, carat, certificat, filtre de prix, vue 360°/3D/essayage [V].

## Prix, délais, retours, garanties

- **Prix** : affiché sur la grille pour une partie des montures seulement (exemples 3 490 $ à 5 590 $ pour des Tacori en première page ; 1 182 $ pour la moins chère dans le tri croissant) ; beaucoup de montures n'ont **aucun prix** et la mention « Availability: Special Order » [V].
- **Pas de décomposition** : les prix de montures ne comprennent pas la pierre centrale [I : mention absente, parcours « choisir le diamant » ensuite].
- **Délai** : non annoncé (« Special Order ») [V].
- **Retours** : remboursement ou avoir sous 30 jours si l'article est dans son état d'origine ; « Special Order Items are not subject to a full refund » ; diamants : remboursement ou avoir sous **7 jours** avec papiers [V, /refund-policy].
- **Livraison** : gratuite et le lendemain pour 1 000 $ et plus (commande avant midi, heure de l'Est) ; sinon lendemain 35 $, 2-3 jours 15 $, terrestre 10 $ ; signature +3 $ (ou gratuite pour le lendemain) [V, /shipping-policy].
- **Langues, devises** : anglais, dollar [V].
- Certificats, libellé du synthétique (« Lab-Grown Diamond ») : seulement dans le filtre [V].

## Confiance et service

- Magasin au 4130 Whitney Ave, Hamden ; horaires affichés (fermé lundi et dimanche) ; téléphone, e-mail, prise de rendez-vous, suivi de commande en ligne [V].
- Pas d'avis clients, pas de photos ou vidéos d'atelier sur la page testée [V].
- Pages « Education » et « Resources » présentes dans le pied de page (non lues).
- Mesure du visuel : première image de monture dans la grille en ≈ **25 s** (ordinateur) et ≈ **36 s** (iPhone) avec l'agent d'audit ; le site répond lentement et un délai de connexion de 30 s est apparu lors d'un essai [V, mesures uniques, réseau de l'agent ; I : site peu performant]. Le texte et les filtres s'affichent bien avant.

## Points forts à retenir pour JR Diamond

1. **Filtres réellement dans l'adresse** (`?Spec_Stone_Type=…&Spec_Material=…`) : une sélection se partage par lien [V].
2. **Filtre « Lab-Grown Diamond » à côté de « Diamond »** : le synthétique est un type de pierre à part entière [V].
3. **Tri par prix croissant** dès le premier écran, en un seul changement de liste [V].
4. **Retours des diamants clairs** (7 jours avec papiers) distincts des autres articles (30 jours) [V].
5. **Livraison gratuite et le lendemain dès 1 000 $** annoncée sur une page dédiée avec les suppléments chiffrés [V].

## Défauts observés

- Les filtres sont des pages rechargées ; les combinaisons mènent à 0 résultat sans message ni suggestion [V].
- Sur 1 223 montures, 1 seule en diamant de laboratoire [V].
- Beaucoup de montures sans prix (« Special Order ») [V].
- Chargement des images très lent (25 à 36 s) [V].
- Aucune personnalisation : pas de gravure, pas de taille de doigt, pas de visuel 3D ; c'est un catalogue de montures de marques, pas un configurateur [V].
- Pas de photos ni de preuve de fabrication ; clic sur une tuile sans effet lors d'un essai [V].

## Limites de l'audit

- Fiche produit, étape « Choose your diamond », filtres de diamants (carat, couleur, pureté, certificat), vues et panier **non atteints** : un clic sur une tuile n'a pas ouvert de fiche, et une seconde tentative (avec acceptation du bandeau de cookies) n'a pas été exécutée : l'acceptation d'un consentement n'a pas été jugée acceptable pour un audit en lecture seule.
- Pagination, wishlist, recherche, RESET FILTERS : non testés.
- Mesures de temps : une exécution par appareil, depuis l'environnement de l'agent.
- Pas de test complet en affichage iPhone (liste de contrôles à partir de la page de départ seulement).

## Sources

- https://www.rumanoffs.com/create-your-ring (contrôles, 15 et 24/11/2026)
- https://www.rumanoffs.com/create-your-ring?sort_by=price-asc et ?Spec_Stone_Type=Lab-Grown%20Diamond (filtres et tri)
- https://www.rumanoffs.com/refund-policy ; https://www.rumanoffs.com/shipping-policy
