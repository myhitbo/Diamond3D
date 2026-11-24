# Audit : Jewelbox (Valletta, Malte)

- **Site** : Jewelbox, https://www.jewelboxmalta.com/ ; départ du constructeur : https://www.jewelboxmalta.com/apps/ring-builder
- **Date** : 15/11/2026 · **Appareils** : ordinateur (Chromium 1366 px) ; iPhone 13 simulé pour les mesures de temps seulement
- **Statut** : **partiel** (parcours complet jusqu'au panier vérifié sur ordinateur ; options de gemmes, d'alliances et affichage iPhone non parcourus à fond)
- Marques : V vérifié · I inféré · S supposé. Adresse : Merchants street n° 8, Valletta (V, pied de page).

## Parcours

| Étape | Options | Adresse |
|---|---|---|
| 1. Choix de la monture | 1 329 montures ; filtres : style (15 icônes), forme de pierre (10), métal (blanc, jaune, rose), prix ; tri ; « Reset Filters » (V) | `/apps/ring-builder/engagement-rings` |
| 2. Fiche monture | Forme (9 icônes), métal (7 choix), taille de bague, bouton « Select Stone For Your Ring » (V) | `/apps/ring-builder/rings-details/?groupId=…&ringId=…` |
| 3. Choix de la pierre | Six onglets : Natural Diamond, Natural Diamond (AI), Lab Grown Diamond, Lab Grown Diamond (AI), Gemstone, Complete Ring ; « AI-powered search » (V pour l'affichage des intitulés) | `/apps/ring-builder/diamonds?shape=round&minCarat=0.26&maxCarat=0.4` |
| 4. Fiche du diamant | Dimensions, certificat (« View Certificate »), « Select this diamond » (V) | `/apps/ring-builder/diamonds-details?diamondId=…` |
| 5. Bague complète | Récapitulatif monture + pierre, taille, « Modify » ×2, « Add to cart » (V) | `/apps/ring-builder/complete-ring` |
| 6. Panier | Lignes, sous-total, estimation de livraison, « Check out » (V) ; paiement non ouvert | `/cart` |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 15 icônes de style (Solitaire, Nature, Celtic, Halo, Hidden Halo, Three Stone, Two Stone, Pavé, Cluster, Channel Set, Vintage, Bypass, Side Stone, Modern, Other) | lien | Liens vers `engagement-rings?style=…` (V, adresses lues) ; clic non actionné | — | non testé : liste lue, pas cliquée |
| Forme (10 icônes) en liste de montures | lien | Liens `?shape=…` (V, lus) | — | non testé (clic) |
| Couleur du métal (blanc, jaune, rose) en liste | lien | Liens `?color=…` (V, lus) | — | non testé (clic) |
| Curseurs de prix + champs 200 / 80000 | curseur, champ | Affichés, valeurs par défaut 200 et 80 000 (V) | filtre | non testé (saisie) |
| « Reset Filters » | bouton | Présent (V) | — | non testé |
| Vignettes de montures (15 par page) | carte | Ouvrent la fiche ; certaines images restent grises (pastille de chargement) quelques secondes (V, capture) | « From €650 » | OK |
| Forme (9 icônes) sur la fiche | bouton | Une icône sélectionnée (rond) ; clics sur les autres sans changement de titre ni de prix lors du test (la mise en page avait bougé, clics possiblement hors cible) | — | douteux |
| Métal : Platine | bouton | Charge une **autre fiche** : « Platinum 0.25ct Round Solitaire … Mounting » | 836 € | OK |
| Métal : 14K or rose | bouton | Charge « 14K Rose Gold 0.38ct … Semi-Set » (autre ringId) | 656 € | OK |
| Métal : 18K or rose | bouton | « 18K Rose Gold 0.25ct … Mounting » | 851 € | OK |
| Métal : 14K or blanc | bouton | « 14K White Gold 0.33ct … Semi-Set » (fiche d'origine) | 650 € | OK |
| Métal : 18K or blanc | bouton | « 18K White Gold 0.25ct … Mounting » | 827 € | OK |
| Métal : 14K or jaune | bouton | « 14K Yellow Gold 0.38ct … Semi-Set » | 650 € | OK |
| Métal : 18K or jaune | bouton | « 18K Yellow Gold 0.25ct … Mounting » | 851 € | OK |
| Menu de taille de bague | liste | Valeurs 6 à 8 par quart de taille (6, 6.25 … 8) lues ; taille « US » probable (I), aucune unité affichée | — | OK |
| « Select Stone For Your Ring » sans taille | bouton | Message rouge « Please select a ring size first. » | — | OK |
| « Select Stone For Your Ring » avec taille 7.5 | bouton | Affiche les six onglets de pierre | — | OK |
| Onglet « Natural Diamond » | onglet | Ouvre la recherche de diamants avec forme, carat (0,26–0,4) préréglés selon la monture ; 90 315 résultats sur 371 314 (V) | de 180 € (0,30 ct J SI2) | OK |
| Bascule « Lab Grown » | bouton | 9 644 résultats sur 538 755 ; prix dès 182 € (0,27 ct D VS1, V) | dès 182 € | OK |
| Filtres : forme (10), couleur (blanc/fantaisie), carat, coupe, pureté, polissage, symétrie, prix | filtres | Présents et affichés (V) ; non manipulés un à un | — | non testé (manipulation) |
| « Advanced Filters » | bouton | Ajoute fluorescence, table, profondeur, rapport L/L, **certification (IGI, GIA, HRD)** (V) | — | OK |
| Vue grille / vue tableau | bouton | Deux vues disponibles (V) | — | non testé en détail |
| Tri « Featured » | liste | Présent (V) | — | non testé |
| Carte de diamant | carte | Ouvre la fiche : dimensions, table, profondeur, polissage, symétrie, « View Report » | 182 € | OK |
| « View Certificate » / « View Report » | lien | Présents ; non ouverts (domaine tiers) | — | non testé |
| « Select this diamond » | bouton | Mène à `/complete-ring` : monture 650 € + pierre 182 € = **832 €** (V) | 832 € | OK |
| « Modify » (monture ou pierre) | lien | Présents ; non cliqués | — | non testé |
| « Add to cart » | bouton | Pastille de chargement puis redirection vers `/cart` après quelques secondes (V) | 832 € | OK, lent |
| Panier : lignes, taille 7.5, sous-total | page | « ROUND LAB GROWN 0.27CT D VS1 » 182 € + monture 650 € = 832 € ; « Tax included and shipping calculated at checkout » ; devise EUR (V) | 832 € | OK |
| Panier : « Get shipping estimates » (Malta) | champ | Présent, non utilisé | — | non testé |
| Panier : « Message to Sellers » | champ | Présent, non rempli | — | non testé |
| « Check out » | bouton | Non cliqué (limite de l'audit) | — | non testé |
| Onglet « Gemstone » (saphir, rubis, émeraude, tanzanite, etc.) | onglet / lien | Pages `gemstones?…` existent (liens lus) | — | non testé |
| « Complete Ring », onglets « (AI) » | onglet | Intitulés vus ; effet non vérifié | — | non testé |
| Alliances (« Wedding Rings ») | page | 14K jaune dès environ 815 € ; filtres taille, forme, type de pierre, pureté, couleur, qualité du métal ; fiches avec « + Lab-Grown Diamond » (V) | 815 à 1 936 € | OK, non configuré |
| « Custom Design » | page | Formulaire : type (bague, pendentif, bracelet, boucles), métal (or, blanc, rose, argent, platine), notes, envoi de fichier ; non rempli (V) | — | non testé (formulaire) |
| « Book An Appointment » | page | Titre seul, sans formulaire visible à la lecture (V) | — | page quasi vide |
| Téléphone, e-mail, Facebook, Instagram, carte | lien | Présents dans le pied de page (V) | — | non ouverts |
| Liste de souhaits, compte | lien | Présents (V) | — | non testé |
| Page `/pages/engagement-rings-education` | lien | **404** (V), alors que le menu y renvoie | — | **lien mort** |

## Options disponibles

- **Métaux** : platine, or 14 et 18 k en blanc, jaune et rose (V).
- **Formes de pierre** : ronde, princesse, ovale, coussin, émeraude, poire, marquise, asscher, cœur, radiant, autres (V ; le sélecteur de la fiche en montre neuf).
- **Pierres** : diamants naturels, synthétiques, diamants fantaisie, pierres de couleur (saphir, rubis, émeraude, tanzanite, alexandrite, grenat, péridot, opale, tourmaline) (V, liens).
- **Styles de monture** : solitaire, nature, celtique, halo, halo caché, trois pierres, deux pierres, pavé, cluster, serti canal, vintage, bypass, pierres latérales, moderne, autre (V, icônes).
- **Tailles** : 6 à 8 par quart de taille dans le menu lu ; plage complète non vérifiée.
- **Certificats** : IGI, GIA, HRD (filtre) (V).
- **Gravure** : aucune option trouvée dans le parcours (I).
- **Financement, essayage à domicile, AR, 360°, vidéo** : aucun trouvé (I).

## Prix, délais, retours, garanties

- **Prix affiché et décomposé** : monture + pierre = total, avant le panier (V : 650 + 182 = 832 €). Pas de détail métal / façon / marge.
- **Variation du prix par métal** (même modèle, tailles de pierre différentes selon les fiches) : 650 à 851 € (V, tableau ci-dessus). Les fiches diffèrent aussi par la pierre centrale prévue (0,25, 0,33, 0,38 ct) : un changement de métal change donc aussi le modèle (V, titres).
- **Délai** : « made to order and will be ready in 10 business days » (V), en haut de chaque fiche monture.
- **Livraison** : « Free Shipping & Holiday Returns » (V) ; panier : « shipping calculated at checkout » (V). Livraison à une adresse physique seulement, signature d'un adulte au-dessus de 250 dollars (V, conditions).
- **Retours** : renvoie à « Return Policies » sans page dédiée trouvée (V : aucun lien de retours dans le pied de page) ; le certificat doit être renvoyé avec le diamant sous peine de 250 dollars (V, conditions). Pas d'exception explicite pour le sur-mesure lue. Interdiction d'acheter plusieurs pièces pour comparer (V, conditions).
- **Garantie** : « Free Lifetime Warranty » (V, bandeau).
- **Devise** : euro ; les conditions parlent de dollars (V, incohérence).
- **Paiement** : moyens non vus (checkout non ouvert).

## Confiance et service

- Photo : quatre vues par monture avec zoom (V). Pas de 3D, 360°, vidéo ni essayage.
- Atelier interne décrit (consultation, CAO, impression 3D, fonte, sertissage, finition) ; fondateur Warren, quatrième génération, formé au GIA (V, page « About Us »). Aucune photo ni vidéo de fabrication de commande.
- Sur-mesure : « Computer-Aided Design … digital 3-dimensional representation » envoyée avant fabrication (V, texte).
- Avis clients : aucun lu sur les pages parcourues (I). Magasin ouvert lundi-vendredi 9-19 h, samedi 9-13 h (V). Téléphone et e-mail en en-tête (V). Pas de WhatsApp ni de chat vus.
- Diamants fournis par catalogue en ligne : 371 314 naturels et 538 755 synthétiques (V) ; exemple : pierre de 0,27 ct D VS1 en synthétique.

## Points forts à retenir pour JR Diamond

1. **Parcours monture → pierre → bague complète avec total** : la pierre est choisie parmi des centaines de milliers de références, avec un récapitulatif monture 650 € + pierre 182 € (V, `/complete-ring`).
2. **Filtres de diamant complets** : coupe, polissage, symétrie, fluorescence, table, profondeur, certification (V, « Advanced Filters ») ; le carat de départ est prérempli selon la monture (V, URL).
3. **Bascule naturel / synthétique d'un clic** avec un compteur de résultats (V).
4. **Délai de 10 jours ouvrés affiché sur chaque fiche** (V), proche des 14 jours de JR Diamond.
5. **Règle de taille bloquante avant la pierre** : message clair « Please select a ring size first » (V).

## Défauts observés

- Aucun visuel 3D : la bague ne reflète pas la pierre choisie ; la pierre n'est pas montrée sertie avant l'étape finale (V : photos de montures vides ou avec pierre type).
- Un changement de métal **remplace le modèle** (autre titre, autre pierre centrale, autre prix) sans avertissement (V). Impossible de comparer 14 et 18 k à iso-configuration.
- Images grises avec pastille de chargement sur plusieurs montures de la liste (V, capture).
- Lien de menu mort vers `/pages/engagement-rings-education` (404, V).
- Page « Book An Appointment » sans formulaire lisible (V).
- Conditions mêlant dollars et euros, retours non détaillés, pas de page de retours (V).
- Pas de gravure, pas d'avis, pas de preuve de fabrication visuelle (I).
- Ajout au panier : une pastille tourne plusieurs secondes sans message (V).

## Limites de l'audit

- Parcours testé avec une seule monture (« 14K White Gold 0.33ct Round 1/6 CTW Lab-Grown … Semi-Set », 650 €) et un diamant synthétique de 0,27 ct ; gemmes, alliances et sur-mesure seulement lus.
- Clics sur les icônes de style, de forme et de métal en liste, filtres de diamant, tri, vue tableau, « Modify », paiement : non actionnés ou non confirmés.
- Contrôles listés avec `controls.cjs` sur ordinateur seulement (page des montures) ; affichage iPhone limité à des temps de chargement.
- Moyens de paiement, frais de livraison et retours réels non vérifiés (checkout non ouvert).
- Temps de chargement : un seul essai par appareil, réseau de l'environnement d'audit.

## Mesure du visuel principal

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste des montures : première photo de bague | 3,7 s (V) | 3,8 s (V) |
| Fiche monture : photo principale | 4,7 s (V) | 1,1 s (V, mesure peu fiable : image possiblement mise en cache par le même navigateur) |

## Sources

Pages lues le 15/11/2026 : https://www.jewelboxmalta.com/apps/ring-builder, `/apps/ring-builder/engagement-rings`, `/apps/ring-builder/rings-details/?groupId=st-207787&ringId=6aab957f60853c377203a681`, `/apps/ring-builder/diamonds?stoneType=Lab+Grown&shape=round&minCarat=0.26&maxCarat=0.4`, `/apps/ring-builder/diamonds-details?diamondId=6ab4641260853c37724fa048`, `/apps/ring-builder/complete-ring`, `/cart`, `/apps/stuller-shop/wedding-rings`, `/pages/custom-design`, `/pages/our-story`, `/pages/contact`, `/pages/make-an-appointment`, `/pages/terms-and-conditions`. robots.txt : autorisé (`Allow: /`). Captures dans le dossier de travail de session, hors dépôt.
