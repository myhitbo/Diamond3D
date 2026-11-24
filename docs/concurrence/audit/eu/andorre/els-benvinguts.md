# Audit : Els Benvinguts

- Site : https://www.elsbenvinguts.com/ — page de départ : https://www.elsbenvinguts.com/en/collections/bagues-de-fiancailles
- Date : 15/11/2026 · Appareils : Chromium ordinateur 1280×900 et affichage iPhone 13 (partiel)
- Statut : **partiel**. Une action du navigateur automatisé a été refusée par le système d'autorisation en cours d'audit ; les contrôles de la fiche produit (zoom, guide des tailles, FAQ dépliée) et le panier n'ont pas été actionnés.
- Marquage : V vérifié · I inféré · S supposé.

## Parcours

| Étape | Options |
|---|---|
| Collection bagues de fiançailles | Sous-collections : en diamant, or blanc, or jaune, solitaire (V) ; filtres ; tri ; « Load more » |
| Fiche produit | Choix de la taille (52 à 62 sur la fiche testée), ajout au panier, description, livraison, FAQ (V) |
| Panier | Non actionné (voir limites) |

Aucun configurateur ni constructeur : le client choisit un modèle fini et une taille (V).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Langue (English) | bouton | Menu de langue FR/EN/ES (V, liste) | — | présent |
| Pays/devise | bouton | Affiche « reste-du-monde (USD) » depuis notre accès ; « Andorre (EUR) » dans l'index de recherche (V) | change la devise | non actionné |
| Prendre rendez-vous | lien | Mène à wa.me/33650516119 (WhatsApp, non ouvert) (V) | — | non testé |
| Recherche, compte, panier | liens | /en/search, connexion, /en/cart (V) | — | présents |
| Filtres : Availability, Price, Brand, Matter, Rock, Meshes, Genre | boutons | Options lues dans le HTML : Brand (Augis, Els Benvinguts, Orest) ; Matter (Gold 750, 925 Silver) ; Rock (Diamond, Emerald, Oxide) ; Meshes (Coffee bean) ; Genre (Femme) ; prix 0 à 7 400 € ; disponibilité en stock/rupture (V) | filtre | panneaux présents ; application des filtres non vérifiée |
| Tri | liste | Featured, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date (V) | — | présent |
| Load more | bouton | Affichage de 8 sur 224 produits ; le bouton n'a pas augmenté le nombre de liens produit sur l'essai (24 avant, 24 après) (V) | — | à revérifier |
| Taille 52 à 62 | boutons radio | Choix de taille sur la fiche (V) | aucun | non cliqués |
| Find my size | bouton | Présent (V) | — | non testé |
| Image zoom, vignettes, slide suivante | boutons | 6 vignettes et 6 zooms sur la fiche (V) | — | non testés |
| ADD TO CART | bouton | **Non cliqué** : Shopify appelle /cart/add, chemin interdit (`Disallow: /cart/`) par robots.txt | — | non testé |
| Description, Delivery information, 13 questions FAQ | accordéons | Présents (V) ; contenu lu sur les pages de politique | — | non dépliés |
| Track my order | lien | https://els-benvinguts.myshopify.com/apps/track123 (V, non ouvert) | — | non testé |
| Withdraw contract | lien | /en/a/withdrawal (V, non ouvert) | — | non testé |
| Infolettre | formulaire | Non rempli (règle) | — | non testé |

## Options disponibles

- Métaux : or 750 (18 k) ; argent 925. Platine seulement pour la fabrication sur mesure (V).
- Pierres : diamant, émeraude, oxyde (zirconium) (V).
- Tailles : 50 à 62 selon les modèles (V). Livraison express 48/72 h annoncée.
- Aucun choix de carat, forme, origine, gravure ou monture en ligne (V).

## Prix, délais, retours, garanties

- Prix affiché avec comparaison : solitaire 1,16 k or jaune 750, 7 400 € contre « prix moyen constaté en France 8 880 € à 9 620 € » (V, fiche /en/products/bague-solitaire-diamant-1-16k-or-jaune-750). Aucune décomposition (matière, façon, marge) (V). La fiche annonce « Weight bt: 1.16 kg TTLB », probablement une traduction automatique erronée du carat (I).
- Paiement en 3 ou 4 fois avec Klarna (V). Moyens listés : Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Shop Pay, Bancontact, etc. (V, /en/pages/expedition-et-livraison).
- Livraison : dès 4,99 € (Colissimo) ; France et Monaco 48/72 h ouvrées ; UE et monde 3 à 10 jours ouvrés ; Andorre non nommée ; envoi avant midi ; sur commande 2 à 4 semaines (V).
- Retours : 15 jours après réception, neuf, dans son écrin ; remboursement sous 8 jours ; frais d'envoi non remboursés ; **exclus : tout article personnalisé (modification, gravure, mise à taille)** (V, /en/pages/retour-et-remboursement). Pas de garantie commerciale décrite (V).
- Atelier de création : fabrication, transformation, réparation, pièces uniques ; or 18 k ou platine ; devis gratuit valable un an ; aucun délai ni prix ; contact par e-mail, téléphone ou WhatsApp (V, /en/pages/atelier-de-creation).

## Confiance et service

- Avis clients affichés sur l'accueil, sans note chiffrée vérifiée (V, extrait) ; magasin physique fermé, rendez-vous sur demande au point de retrait Silver Rush (V).
- Poinçon, « fabrication française » mentionnés (V). Aucun certificat GIA/IGI vu sur la fiche testée (V). Aucune photo ni vidéo de fabrication ; suivi de colis seulement (V).
- Libellé du synthétique : aucun ; « diamants naturels sertis » (V).

## Points forts à retenir pour JR Diamond

- Comparaison explicite du prix avec le prix moyen en France sur la fiche (V, fiche citée) : rend le prix « expliqué » plus convaincant.
- Klarna en 3 ou 4 fois sur une bague à 7 400 € (V).
- Chargement rapide : première image de la collection en 1,8 s sur ordinateur, 0,9 s en iPhone ; fiche produit 1,1 s (V, une mesure chacune, via proxy).

## Défauts observés

- Aucun configurateur, aucun visuel 3D ou 360° (V).
- Mélange de langues dans l'interface anglaise (« Bagues de Fiançailles… ») et traductions approximatives (V).
- Retours exclus pour toute personnalisation, y compris la mise à taille (V).
- Pas de décomposition du prix, pas de certificat visible, pas de preuve de fabrication (V).

## Limites de l'audit

- Navigateur : une exécution de script a été refusée par le système d'autorisation ; zoom, guide des tailles, FAQ, tri et filtres appliqués, version mobile de la fiche et panier non actionnés. Ajout au panier volontairement évité (chemin interdit par robots.txt).
- Une mesure de temps par appareil. Devise et pays observés depuis un proxy hors Andorre.
- Sondes : captures dans le dossier de travail (hors dépôt).

## Sources

- https://www.elsbenvinguts.com/en/collections/bagues-de-fiancailles
- https://www.elsbenvinguts.com/en/products/bague-solitaire-diamant-1-16k-or-jaune-750
- https://www.elsbenvinguts.com/en/pages/expedition-et-livraison
- https://www.elsbenvinguts.com/en/pages/retour-et-remboursement
- https://www.elsbenvinguts.com/en/pages/atelier-de-creation
- https://www.elsbenvinguts.com/robots.txt
