# Audit Italdizain (Royal Collection)

- **Site** : Italdizain, Bakou, https://italdizain.az/en ; départ : https://italdizain.az/en/catalog/bridal
- **Date** : 15/11/2026 (contrôles du 25/11/2026) · **Appareils** : Chromium ordinateur 1366×900 ; iPhone 13
- **Statut** : **partiel**. Revendeur de marques étrangères (Graff, Messika, Leo Pizzo…) ; **pas de panier ni de vente en ligne** : le site dit que les prix sont indicatifs et renvoie à la boutique [V]. Aucun configurateur. Aucun blocage ; robots.txt interdit seulement `/search`, `/profile`, `/auth`.
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| 1. Catalogue « Bridal » | 56 bagues (24 affichées, puis « Show more ») ; libellés Brand, Material, Stones, Types, Recommended |
| 2. Fiche (ex. Messika Joy 05493wg) | galerie de 3 photos, guide des tailles (PDF), « More features », « Contact the boutique », produits associés |
| 3. Achat | aucun : prise de contact avec la boutique |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Brand / Material / Stones / Types / Recommended | libellés de filtres | visibles, **aucun menu ne s'ouvre au clic** (5 clics essayés) | — | ne fonctionne pas [V] |
| Show more | lien (`?page=2`) | ajoute 24 bagues dans la liste (31 → 55 liens produits) | — | fonctionne [V] |
| Fiche : photos (3) | galerie, boutons Previous/Next slide | présents ; 22 images visibles, aucun zoom 3D | — | listé [V] |
| Size guide | lien | PDF `/helpers/guides/rings/ring_size_guide_en.pdf` | — | **non ouvert** [V] |
| More features | lien `javascript:;` | déplie des caractéristiques [I] | — | non actionné |
| Contact the boutique | ancre `#butics-featured` | mène à la liste des boutiques [I] | — | non actionné |
| Favorites | lien | `/en/favorites` | — | non ouvert |
| Langues AZ / EN / RU | liens | `/catalog/bridal`, `/en/…`, `/ru/…` | — | listé [V] |
| Cœur sur chaque produit (bouton) | boutons | non actionnés | — | non testé |
| Panier, paiement, compte, recherche | — | **absents** (recherche et compte interdits) | — | absent [V] |

Contrôles listés : 74 (ordinateur), 71 (iPhone) sur la page Bridal.

## Options disponibles
- Métal : or blanc, or rose, or jaune selon la fiche, via variantes de références (« wg », « pg ») [V]. Pas de platine vu.
- Pierre : diamant, poids total en carats par fiche (ex. 0,20 ct) ; pas de couleur, pureté ni certificat [V].
- Aucun choix de taille en ligne ; guide PDF [V].

## Prix, délais, retours, garanties
- Prix affichés en ₼ : de 3 055 à 50 100 ₼ vus ; une bague « Price on request » ; mention « The prices shown are for informational purposes only. Please check with boutiques for current prices. » [V].
- Services annoncés : nettoyage, polissage, réduction ou agrandissement de taille, personnalisation, réparation [V : https://italdizain.az/en/service].
- Délais, retours, garantie : non trouvés sur les pages lues [V].

## Confiance et service
- Distributeur officiel de marques ; 200 marques ; plusieurs boutiques à Bakou ; atelier de réparation et de mise à taille [V : /en, /en/service].
- Pas d'avis, pas de preuve de fabrication, pas de certificats annoncés.

## Points forts à retenir pour JR Diamond
1. **Poids de diamant indiqué par fiche** (« Total diamond weight (ct) 0.20 ») : preuve : fiche Messika Joy 05493wg.
2. **Prix visibles dans la liste** même pour des pièces à 50 000 ₼ : preuve : /en/catalog/bridal.
3. **Chargement progressif** « Show more » sans changer de page : preuve : 31 → 55 produits.
4. Service d'ajustement de taille proposé en boutique : preuve : /en/service.

## Défauts observés
- Aucune vente en ligne ; prix « indicatifs » [V].
- Libellés de filtres non cliquables (5 sur 5) [V].
- Visuel principal lent : LCP **2 136 ms** (ordinateur) et **1 844 ms** (iPhone) [V, indicatif].
- Pas de donnée de pureté, couleur ni certificat ; pas de synthétique.

## Limites de l'audit
- Marques étrangères : peu de valeur comparative pour une vente en ligne.
- PDF du guide des tailles, ancre « Contact the boutique », « More features » non ouverts. Une seule fiche lue à fond. Pas de panier à atteindre.
- Le site charge Google Analytics et Yandex Metrica (requêtes sortantes observées, normales pour un visiteur).

## Sources
https://italdizain.az/en · /en/catalog/bridal · /en/catalog/jewelry/rings/messika/05493wg · /en/service · https://italdizain.az/robots.txt.
