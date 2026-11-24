# Audit : Reis-Nichols Jewelers (Indianapolis et Greenwood, Indiana)

- **Site** : Reis-Nichols Jewelers, https://www.reisnichols.com/ (Shopify + outil « Ring Creator »). Page de départ : https://www.reisnichols.com/apps/ring-creator/rb-setting-list?in_journey=true
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13.
- **Statut** : **partiel**. Parcours complet jusqu'à « Your Completed Ring » (sous-total, taille). Le bouton « ADD TO CART » n'a pas été cliqué (un essai d'ajout au panier sur un autre site de ce lot a été refusé par le système de permissions ; je ne l'ai pas repris ici). Le panier a été lu vide. Le mode iPhone n'a servi qu'au relevé des contrôles et au chronométrage de la première page.
- Repères : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé. Toutes les adresses ouvertes étaient AUTORISÉES par robots.txt (contrôle avant ouverture). Bandeau de cookies fermé par « REJECT ».

## Parcours

| Étape | Page | Options |
| --- | --- | --- |
| 1. Choose Setting | `rb-setting-list` | 89 montures ; filtres forme, métal, prix ; tri ; « All filters » [V] |
| 1b. Fiche de monture | `rb-setting-details` | 10 métaux, 7 formes, 5 poids de centre (1,0 à 3,0 ct), taille 4,0 à 9,5, « Select Setting », « Ask a Question » [V] |
| 2. Choose Stone | `rb-stone-list` | Pierres naturelles ; forme, carat, couleur, pureté, taille (cut), tri [V] |
| 2b. Fiche de pierre | `rb-stone-details` | Fiche technique, « Add to Ring », « Ask a Question » [V] |
| 3. Complete Ring | `rb-ring-review` | Monture + pierre, taille, sous-total, « ADD TO CART », « Start Over », « Drop a Hint » [V] |
| Panier | `/cart` | Lu vide : « Your cart is currently empty. » [V] |

## Contrôles vérifiés

Liste des montures : 95 contrôles relevés sur ordinateur, 97 en iPhone.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Étapes 1-2-3 (Choose Setting / Choose Stone / Complete Ring) | liens | Navigation entre étapes ; l'étape 2 renvoie à `rb-stone-list` | - | OK [V] |
| SUPPORTED SHAPE | liste à cocher | 7 formes : Round, Oval, Pear, Emerald, Princess, Cush Brill, Marquise. Marquise : 26 résultats au lieu de 89 | Prix affichés recalculés pour la forme (W6190 : 1 442 $ -> 1 427 $) | OK [V] |
| METAL TYPE | liste à cocher | Platinum, 10K Rose/White/Yellow, 14K Rose/White/Yellow dans le filtre (18 k absent du filtre, présent sur la fiche). Platine : nombre inchangé (89) | Prix recalculés : W4421 1 551 $ -> 1 784 $ en platine | OK [V] |
| PRICE | curseur double | Bornes 500 $ à 10 000 $ ; non déplacé | - | Présent |
| RESET ALL | bouton | Non vérifié (clic perdu : j'ai cliqué une carte par erreur) | - | Non testé |
| ALL FILTERS / APPLY FILTERS | panneau | Ouvre un panneau avec bouton « Apply Filters » | - | OK [V] |
| SORT BY | liste | 2 options : LOWEST, HIGHEST ; non appliquées (clic bloqué par une liste ouverte) | - | Non testé |
| Carte de monture | lien | Ouvre la fiche (stock, prix « Setting Price ») ; premier visuel de la fiche en 6,5 s | - | OK [V] |
| Métal (10 pastilles photo) | boutons | Remplacent le numéro de stock et la photo : Platinum, 10/14/18 k en jaune, blanc, rose | Voir « Prix » | OK [V] |
| Forme (7 boutons) | boutons | Round, Pear, Oval, Emerald, Marquise, Cushion Modified, Radiant ; changent le stock et le prix | Round 1 383 $, Oval 1 391 $, Pear 1 394 $, Marquise 1 427 $ (14 k jaune, 1,0 ct) | OK [V] |
| Poids de centre (5 boutons) | boutons | 1,0 / 1,5 / 2,0 / 2,5 / 3,0 ct : change le stock | Marquise 14 k jaune : 1,0 ct 1 427 $, 2,0 ct 1 548 $, 3,0 ct 1 731 $ | OK [V] |
| Ring Size | liste | 4,0 à 9,5 par quart de taille (23 valeurs) | Sans effet sur le prix [V] | OK |
| I Don't Know My Ring Size | case | Présente ; effet non essayé | - | Non testé |
| Select Setting | lien | Passe à `rb-stone-list` avec forme, carat (0,90 à 1,10) et couleur « White » préremplis | - | OK [V] |
| Ask a Question | bouton + formulaire | Formulaire nom, e-mail, téléphone ; non rempli (règle) | - | Non testé |
| Filtres pierres : forme (5), carat, couleur D à T, pureté FL à I1 (10), cut Good / Very Good / Excellent | filtres | Affichés ; 6 résultats préfiltrés (marquise, 0,9 à 1,1 ct, blanc) | - | Lus [V], non appliqués |
| Carte de pierre | lien | Ouvre la fiche (stock LPJ471991, GIA, mesures 9,35 x 5,05 x 2,97, ratio 1,85) | 3 618 $ | OK [V] |
| Add to Ring | bouton | Mène à `rb-ring-review` en 6,9 s | - | OK [V] |
| Change / View / Change Stone / Change Setting | liens | Retour à l'étape concernée | - | Présents |
| Ring Size (récapitulatif) | liste | 4,0 à 9,5 | - | Présent |
| ADD TO CART | bouton | **Non cliqué** | - | Non testé |
| START OVER, Drop a Hint | boutons | Réinitialisent ; « Drop a Hint » partage | - | Non testés |
| Wishlist / My Collections | tiroir | Vide, comptes non créés | - | Non testé |
| Text us | bouton | Module texto, non ouvert | - | Non testé |
| Search, Account, Cart | liens | Cart : page vide lue ; compte non ouvert | - | Partiel |
| Pied de page (FAQ, Refund Policy, Online Orders & Shipping, Schedule an Appointment, Find A Store, Financing) | liens | Pages lues | - | OK [V] |

Absent du parcours : choix d'origine (synthétique), gravure, vue 3D, 360°, AR, vidéo, comparateur, partage de configuration par lien (une fonction « Drop a Hint » existe) [V : absence sur les pages lues].

## Options disponibles

- **Métaux (fiche de monture)** : platine ; 10 k, 14 k, 18 k en jaune, blanc, rose (10 pastilles) [V].
- **Formes de monture** : Round, Pear, Oval, Emerald, Marquise, Cushion Modified, Radiant ; liste des filtres : + Princess, Cush Brill [V].
- **Poids de centre** : 1,0 ; 1,5 ; 2,0 ; 2,5 ; 3,0 ct [V]. **Tailles de doigt** : 4,0 à 9,5 [V].
- **Pierres** : diamants naturels (Natural Diamonds) ; couleur D à T ; pureté FL à I1 ; coupe Good à Excellent [V]. Aucune option de laboratoire.
- **Tri** : Lowest / Highest. **Prix** : 500 à 10 000 $ pour les montures [V].

## Prix, délais, retours, garanties

- **Prix** [V] : monture seule, hors pierre, à partir de 1 442 $. Marquise 14 k jaune 1,0 ct (W6190) : 1 427 $ ; plus pierre GIA 0,90 ct marquise I SI1 3 618 $ = **sous-total 5 045 $**. Autres pierres marquise 0,9-1,1 ct : 3 886 à 8 065 $.
- **Effet du métal sur la monture W6190 marquise 1,0 ct** [V] : 10 k jaune 998 $ ; 14 k jaune 1 427 $ ; 14 k rose 1 427 $ ; 14 k blanc 1 490 $ ; 18 k rose 1 959 $ ; 18 k jaune 2 008 $ ; 18 k blanc 2 017 $ ; platine 1 935 $.
- **Décomposition** : deux postes (monture, pierre). Pas de métal, façon ou sertissage séparés [V].
- **Délai** : pas de délai de fabrication ; expédition le jour ouvré suivant, traitement 24 à 48 h, envois du lundi au mercredi ; signature à la livraison [V, /pages/shipping-and-online-shopping-information]. Page sur-mesure de l'inventaire : 4 à 8 semaines [V, ext.].
- **Livraison** : « Free 2-Day Shipping Over $500 » [V].
- **Retours** : 30 jours, reçu, sans trace d'usure ; « some exclusions apply to special orders » (sans détail) [V, /policies/refund-policy et FAQ].
- **Garanties, certificats** : GIA indiqué sur la fiche de pierre (« Lab: GIA ») ; pas de garantie chiffrée sur les pages lues du parcours [V].
- **Financement** : Wells Fargo - carte Reis-Nichols, **en magasin** ; le site dit ne pas encourager la demande avant le choix de la bague [V, /pages/financing et FAQ]. Rachat et échange : crédit du prix payé contre un diamant naturel de valeur supérieure [V, FAQ].
- **Panier, moyens de paiement** : non vus (panier vide ; ADD TO CART non cliqué).

## Confiance et service

- Maison depuis 1919 ; gemmologues de l'American Gem Society ; 2 magasins (Indianapolis, Greenwood) ; revendeur Rolex [V, FAQ et en-tête].
- Avis clients : aucun module d'avis dans le parcours [V].
- Langue : anglais ; devise : dollar [V].
- **Preuves de fabrication** : aucune dans le constructeur : photos de catalogue, pas de vidéo ni de photos d'atelier, pas de suivi de commande [V].
- Service : téléphone, texto, « Ask a Question », rendez-vous, « Drop a Hint » [V].

## Points forts à retenir pour JR Diamond

1. **Prix dynamique visible par option** : changer le métal, la forme ou le poids de centre met à jour stock et prix immédiatement ; le platine, le 18 k et le 10 k sont comparables en un clic. Preuve : W6190, mesures ci-dessus.
2. **Sous-total en deux lignes (monture + pierre)** sur la page « Your Completed Ring » : 1 427 $ + 3 618 $ = 5 045 $.
3. **Filtres de pierre complets sur un stock réel** : forme, carat, couleur D-T, pureté FL-I1, coupe ; fiche avec laboratoire (GIA), mesures et ratio. Preuve : `rb-stone-details`, stock LPJ471991.
4. **Préremplissage entre étapes** : la forme et le poids de la monture reportent les filtres de la pierre (adresse `shape=Marquise&min_carat=0.90&max_carat=1.10`).
5. **Adresses de configuration partageables** (stock monture + stock pierre dans l'adresse) [V : URL de chaque étape].
6. **Message honnête sur le financement** (ne pas demander de crédit avant d'avoir choisi) [V, FAQ].

## Défauts observés

- Premier visuel lent : 4,5 s (ordinateur), 4,3 s (iPhone) sur la liste ; 6,5 s sur la fiche de monture ; 6,9 s pour passer au récapitulatif (une mesure chacun).
- Pas de synthétique, pas de 3D, pas de vue 360° ni vidéo ; photos uniquement.
- Filtre de métal sans 18 k, alors que la fiche l'offre ; le nombre de résultats ne change pas avec le métal (89 dans les deux cas) [V].
- Bouton « RESET ALL » et menu « SORT BY » difficiles à manier : un menu ouvert intercepte les clics (constaté dans mon script ; défaut d'ergonomie possible) [I].
- « Cut » affiché « - » pour la marquise (pas de coupe pour les fantaisie) [V].
- Politique de retour du sur-mesure sans précision (« some exclusions ») [V].
- Cookies : bandeau avec 3 boutons ; « Do not Sell or Share My Personal Information » [V].

## Limites de l'audit

- ADD TO CART non cliqué : frais finaux, délai affiché au panier et moyens de paiement non vus.
- Tri, curseur de prix, RESET ALL, case « I don't know my ring size », « Ask a Question », « Text us », compte : non actionnés.
- Seules la marquise (parcours) et quelques formes ont été essayées ; l'iPhone n'a pas été utilisé pour le parcours complet.
- Les prix sont ceux du 15/11/2026, hors taxe de vente ; ils ont été relevés une fois.

## Sources

- [S1] https://www.reisnichols.com/apps/ring-creator/rb-setting-list?in_journey=true (+ `jewelry_type=ring&view_type=grid&supported_shape=Marquise`)
- [S2] https://www.reisnichols.com/apps/ring-creator/rb-setting-details?in_journey=true&ring_stock_num=W6190MN100SM-4Y&ring_reference_id=117503
- [S3] https://www.reisnichols.com/apps/ring-creator/rb-stone-list?in_journey=true&ring_stock_num=W6190MN100SM-4Y&ring_reference_id=117503&diamond_type=natural&view_type=grid&shape=Marquise&min_carat=0.90&max_carat=1.10&color_type=White
- [S4] .../rb-stone-details?...&natural_stock_num=LPJ471991&stone_reference_id=20618 ; .../rb-ring-review?...
- [S5] https://www.reisnichols.com/pages/shipping-and-online-shopping-information ; /policies/refund-policy ; /pages/faq ; /pages/financing ; /cart
