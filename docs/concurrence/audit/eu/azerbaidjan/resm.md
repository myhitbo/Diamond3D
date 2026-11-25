# Audit Resm Jewelry

- **Site** : Resm Jewelry (Bakou), https://resm.com/en ; départ : https://resm.com/en/categories/rings
- **Date** : 15/11/2026 (contrôles du 25/11/2026) · **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. Aucun configurateur. Panier et paiement non atteints : `/*/cart`, `/*/checkout` et `/currency/` sont interdits par robots.txt (vérifié : https://resm.com/robots.txt). Le bouton « Add to cart » n'a donc pas été actionné.
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| 1. Catalogue `/en/categories/rings` | filtres catégorie, matière, couleur, pierre, collection, prix mini/maxi ; tri ; « VIEW MORE » |
| 2. Fiche produit | un visuel, zoom au survol, pastille de couleur, guide des tailles, quantité, panier, favoris, onglets Description/Specifications |
| 3. Panier | non atteint (interdit) |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Catégories (14 cases : Rings 196, Pendants 360…) | cases | présentes, non cochées (le filtre passe par un formulaire « APPLY FILTERS ») | — | listé, non actionné [V] |
| Material : Gold 585 (14K) 194, Silver 925 1, Gold 750 (18K) 1 | cases | idem | — | listé [V] |
| Color : 15 valeurs (Black 37, White 33…) | cases | idem | — | listé [V] |
| Stone : Diamond 57, Blue sapphire 19, Black diamond 11, Ruby 9, Emerald 4… 12 valeurs | cases | idem | — | listé [V] |
| Collection : 12 valeurs (Carpet 89…) | cases | idem | — | listé [V] |
| Prix mini / maxi + APPLY | champs | non actionnés (pas de besoin) | — | listé [V] |
| CLEAR ALL | lien | mène à /en/collections | — | listé [V] |
| Tri : Featured, Price low→high, high→low, Newest | liste | **non actionné** : le tri charge `?sort=`, interdit par robots.txt | — | non testé [V] |
| VIEW MORE (4 groupes de filtres) | boutons | déplie des valeurs | — | listé [V] |
| Pastilles de prix du menu (< 500, 500–1 500, 1 500–5 000, > 5 000 ₼) | liens | `/en/collections?min_price=…` | — | listé, non ouvert [V] |
| Pastille de couleur « White » / « White-black » | lien | ouvre une autre fiche (1605 → 1609) | **2 950 → 2 400 ₼** pour la même bague | fonctionne [V] |
| SIZE GUIDE | bouton | modale : bagues et colliers, diamètre 17,2 mm, 2 méthodes de mesure, tableau US 5–10 ↔ EU 49–62, conseil du soir | aucun | fonctionne [V] |
| − / + quantité | boutons | 1 → 2 → 1 | — | fonctionne [V] |
| Zoom au survol (« HOVER TO ZOOM ») | survol | image agrandie ×2,5 | — | fonctionne [V] |
| Description / Specifications | onglets | Description : texte de collection + « Types : 14K Gold, Stone : Diamond » ; Specifications : matière, pierre, couleur, collection, genre, numéro de série | — | fonctionne [V] |
| ADD TO CART | bouton | **non actionné** (panier interdit) | — | non testé [V] |
| Add to wishlist / cœur | boutons | non actionnés (compte requis [I]) | — | non testé |
| Devises AZN / USD / EUR | liens | **non actionnés** (`/currency/` interdit) ; la page contact et la page FAQ ont affiché USD de leur propre chef [V] | — | non testé |
| Langues AZ / EN / RU | liens | `/az`, `/en`, `/ru` | — | listé [V] |
| Recherche, connexion, panier (en-tête) | liens | recherche et panier interdits ; connexion non ouverte | — | non testé |
| Newsletter (e-mail) | champ | non rempli | — | non testé (règle : pas de formulaire) |
| Liens pied de page : Contact, FAQ, Delivery & Returns, Care & Warranty, Terms, Privacy, Instagram, Facebook, YouTube, LinkedIn, TripAdvisor | liens | pages internes lues (sauf Privacy) ; réseaux non ouverts | — | listé [V] |
| Chat en ligne | — | annoncé dans la FAQ (« online chat »), aucun bouton visible | — | non trouvé [V] |

Nombre de contrôles listés : 224 (ordinateur), 223 (iPhone) sur la liste ; 102 et 100 sur la fiche.

## Options disponibles
- Matière : or 14 k (585), or 18 k (750, 1 article), argent 925 (1 article) ; pas de platine dans les filtres. L'or blanc, jaune ou rose n'est pas un filtre ; la couleur est celle de l'émail ou de la pierre [I].
- Pierres : diamant, saphir bleu, améthyste, diamant noir, rubis, grenat, jade, émeraude, multi-pierres, onyx vert, agate, « London sky » [V].
- Pas de choix de carat, de forme de pierre, de monture, de gravure ni de taille de doigt sur la fiche (seulement le guide) [V].
- Sur mesure en ligne : aucun ; certificat de pierre : « une boîte Resm avec un certificat » (certificat de marque), pas de GIA/IGI [V : https://resm.com/en/faq].

## Prix, délais, retours, garanties
- Prix affichés en ₼ ; exemples bagues : 850 (Chamomile) à 3 750 ₼ (Opposing Birds) sur la page 1 ; bague « Two under the Moon » 2 950 ₼ (blanc) et 2 400 ₼ (blanc-noir) [V]. Aucune décomposition (métal, pierre, façon) [V].
- Les prix changent sans préavis, le prix payé est celui du jour [V : FAQ].
- Livraison : lundi–vendredi ; commande avant 16 h (UTC+4) traitée le jour ouvré suivant ; 130 pays ; aucun frais ni délai chiffré [V : /en/delivery-returns].
- Échange sous **3 jours**, sans dommage ni modification ; pas de mention du sur mesure [V].
- Garantie **2 ans** : diagnostic et réparation gratuits des défauts de fabrication, en boutique avec la carte de garantie [V : /en/care-warranty].
- Paiement : carte Visa et MasterCard seulement [V : /en/terms].

## Confiance et service
- Boutique : 46F, rue 28 Mai, Bakou, tous les jours 10 h 30–19 h ; téléphone +994 51 303 07 81 ; e-mail info@resm.com ; formulaire de contact [V].
- Diamants « naturels, extraits de la terre, pas de synthétiques », certaines pierres peuvent être traitées [V : FAQ]. Pas de synthétique en vente.
- Avis : lien TripAdvisor, aucune note affichée sur le site [V]. Aucun suivi de commande, aucune photo ni vidéo de fabrication vues sur les pages ouvertes [V ; non cherché dans le blog et les événements].
- FAQ : or 14 k/18 k, platine contre or blanc, émail [V].

## Points forts à retenir pour JR Diamond
1. **Récit de marque par collections** (Carpet, Dragon, Buta and Moon…) : chaque pièce a une histoire ; preuve : la fiche « Two under the Moon » raconte la symbolique (https://resm.com/en/product/1605-two-under-the-moon-7).
2. **Prix et matière visibles dès la liste**, avec filtre de prix en 4 tranches : preuve : menu « Collections ».
3. **Guide des tailles en fenêtre** avec tableau US/EU et conseil de mesure : preuve : bouton SIZE GUIDE.
4. **Deux devises étrangères et trois langues** (AZ, EN, RU ; AZN, USD, EUR) : preuve : en-tête.
5. **Garantie de 2 ans chiffrée** et pochette avec chiffon : preuve : /en/care-warranty.
6. **Zoom au survol** sur un visuel de 600 px : preuve : test (×2,5).

## Défauts observés
- Aucune donnée de diamant (carat, couleur, pureté, certificat) sur la fiche [V]. Aucun sur mesure ni configurateur.
- Un seul visuel par fiche, pas de vidéo, pas de 360° [V].
- Pas de sélecteur de taille de bague sur la fiche, seulement le guide [V]. Le choix de la taille se fait donc après le panier ou à la boutique [S].
- Échange limité à 3 jours ; frais de port et délais non chiffrés ; paiement par carte seulement [V].
- La devise passe en USD d'une page à l'autre sans action (état de session) [V].
- Les libellés de filtres sont dans le HTML mais les cases n'ont pas d'étiquette accessible [V].

## Limites de l'audit
- Panier, paiement, tri, devises, recherche non testés (robots.txt). Filtres listés mais non actionnés.
- Temps d'apparition du visuel principal (LCP mesuré par le navigateur) : **296 ms** ordinateur, **320 ms** iPhone ; réseau rapide, un seul chargement chacun, valeur indicative [V].
- Une seule fiche contrôlée à fond (1605) ; 24 bagues listées sur 172.
- Le blog, les événements et la page « Resm World » n'ont pas été lus.

## Sources
https://resm.com/en · /en/categories/rings · /en/product/1605-two-under-the-moon-7 · /en/product/1609-two-under-the-moon-8 · /en/faq · /en/delivery-returns · /en/care-warranty · /en/terms · /en/contact · https://resm.com/robots.txt. Captures dans le scratchpad (hors dépôt).
