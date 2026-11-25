# Audit : GH Jewells (ghjewells.com)

- **Site** : GH Jewells, atelier d'Erevan, boutique en ligne Shopify. **Adresse de départ** : https://ghjewells.com/products/round-solitaire-engagement-ring-white-gold (pas de configurateur) ; liste https://ghjewells.com/collections/rings.
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur ; affichage iPhone non mesuré.
- **Statut** : **partiel**. La lecture des pages de politique, du sur mesure, du panier et de l'affichage iPhone n'a pas pu être menée (un script de lecture a été refusé par l'environnement et n'a pas été relancé). Les constats ci-dessous viennent d'une fiche produit, d'un relevé de contrôles et de résultats de recherche.
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| 1. Catalogue | Rings, Necklaces, Chains, Bracelets, Pendants, Shop All ; 16 produits dans « Rings » dont 10 bagues de fiançailles (solitaire, halo caché, double halo, marquise, poire, princesse, deux tons, anneau fendu) [V liens de /collections/rings] |
| 2. Fiche | Une seule option : taille 16 à 20 (pas de 0,5), quantité [V] |
| 3. Sur mesure | « Have a Photo? We'll Make It in Gold » : envoi d'une photo, retour du poids d'or et du prix, modèle 3D montré, fabrication à Erevan [V accueil] |
| 4. Achat | Add to cart (Shopify) [non testé] |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Size 16 à 20 (9 boutons radio) | radio | Sélection sans effet sur l'image | 1 800,00 USD pour 16 et pour 20 | OK, prix constant [V] |
| Quantité − / + | boutons | — | — | Non testé |
| Add to cart | soumission | — | — | **Non cliqué : `/cart/add` interdit par robots.txt** |
| Open media 1, 2, 3 | boutons | Ouvrent le visuel en fenêtre | — | Non vérifié |
| Slide left / right | boutons | Défilement des 3 images | — | Non vérifié |
| Share | résumé | Affiche l'adresse à copier | — | Non testé |
| Lien « yellow gold version » | lien | Mène à la fiche en or jaune | — | Présent [V] |
| Langue, pays/devise (USD), mode sombre | boutons | — | — | Non testés |
| Recherche, Subscribe (courriel), Book a Call | champs et lien | — | — | Non testés (aucune donnée saisie) |
| Cart | lien | — | — | Non ouvert |

## Options disponibles
- Une fiche : or blanc 14 k (version jaune sur une autre fiche) ; pierre centrale naturelle ronde 0,50 ct (≈ 5 mm) ; 0,65 ct au total ; 2,5 g ; tailles 16 à 20 mm [V].
- Pas de choix de carat, d'origine, de forme ni de titre sur la fiche [V].
- Boutique en 14 k ; 14 k et 18 k annoncés en accueil [V].

## Prix, délais, retours, garanties
- Prix : 1 800,00 USD « taxes comprises, livraison au paiement », sans décomposition [V].
- Délai annoncé : fabrication 3 à 4 jours, livraison 1 à 2 semaines [V fiche].
- Livraison : bandeau « commandez depuis notre boutique néerlandaise, fabriqué à la commande à Erevan, livraison gratuite en Arménie et aux Pays-Bas » [V].
- Retours, garantie, certificats : non lus (pages de politique non ouvertes).

## Confiance et service
- Boutique visitable : 33 rue Movses Khorenatsi, Tashir Trade Center, ouverte tous les jours 10 h à 19 h ; fabrication depuis 2010 [V blog du 30/10/2026].
- Avis Google annoncés en lien sur l'accueil ; non lus [V].
- Aucune vidéo, 3D ou 360° sur la fiche (0 élément `video`, `canvas`, `model-viewer`) [V].
- Langues : EN, RU, ES ; devise : USD [V].

## Mesures du visuel principal
| Appareil | Premier visuel | Réseau calme |
|---|---|---|
| Ordinateur | 1 923 ms (1 essai) | 31,9 s (scripts tiers : compte Shopify, chat) |
| iPhone 13 | non mesuré | — |

## Points forts à retenir pour JR Diamond
- Parcours « envoyez une photo, recevez poids d'or, prix et modèle 3D avant fabrication » : proche de « ce que vous voyez existe » (annonce de l'accueil [V], non testée).
- Blog pédagogique (choisir une bague, 14 k contre 18 k, or blanc contre jaune) : preuve, liens présents sur la fiche [V].
- Poids total en carats affiché avec la pierre centrale (« demandez les deux chiffres ») : [V blog].

## Défauts observés
- Aucun configurateur, un seul choix (taille) ; prix identique pour 16 et 20 [V].
- Pierre naturelle seulement sur la fiche vue ; pas d'option synthétique ni de certificat visible [V].
- Prix en USD pour un atelier arménien ; pas de décomposition [V].
- Chargement réseau long en environnement automatisé (31,9 s jusqu'au calme) [V, dû aux scripts tiers].

## Limites de l'audit
- Une fiche testée ; panier, retours, garanties, sur mesure, liste et iPhone non audités.
- Aucun ajout au panier (robots.txt).

## Sources
- https://ghjewells.com/products/round-solitaire-engagement-ring-white-gold ; https://ghjewells.com/ ; https://ghjewells.com/collections/rings (liens) ; https://ghjewells.com/robots.txt.
- https://ghjewells.com/blogs/news/engagement-rings-yerevan (extrait de recherche).
