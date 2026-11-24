# Audit : Redz Diamonds (Irlande)

- **Site** : Redz Diamonds, https://redzdiamonds.ie/ (Shopify, constructeur sur mesure de tiers)
- **Page de départ** : https://redzdiamonds.ie/pages/build-your-own-ring
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (liste et mesure seulement)
- **Statut** : **partiel**. Parcours monture, diamant et récapitulatif parcourus et actionnés ; **aucun ajout au panier** : `robots.txt` et `agents.md` du site demandent que les achats d'agents passent par leur interface UCP, sans contrôles de page scriptés. Panier, livraison et moyens de paiement non vérifiés en direct.
- Marques : V vérifié · I inféré · S supposé.

## Parcours
| Étape | Adresse | Options |
|---|---|---|
| 1. Choisir une monture | `?stage=Select+Setting` | 24 montures par page ; filtres style, prix, métal, forme ; tri ; fiche monture (V) |
| 2. Choisir un diamant | `?stage=Add+Diamond` | onglets Naturel / Lab Grown ; forme ; carats ; couleur ; pureté ; taille ; prix ; filtres avancés ; liste ou grille ; tri ; fiche diamant (V) |
| 3. Finaliser | `?stage=Complete+Ring` | récapitulatif monture + diamant, taille de doigt (région, taille), total, « Talk to one of our Experts » (V) |
Chaque choix est écrit dans l'adresse (partage possible, V : URL avec `settingId`, `diamondAddedId`).

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Style : Diamond Band, Halo, Hidden Halo, Nature, Side Stone, Solitaire, Three Stone, Vintage | filtre | « Halo » 24 → 2 montures ; « Hidden Halo » → 2 ; « Side Stone » → 7 ; le filtre s'inscrit dans l'adresse (`styles=halo`) | liste filtrée | OK (V) |
| Style : « More / Fewer Styles » | bouton | déplie les 3 styles de plus | – | OK (V) |
| Prix (curseur + 2 champs €917 à €45,837) | curseur | présent, borne mini/maxi lue ; non manipulé | – | non testé : curseur à glisser |
| Métal (9 k, 14 k, 18 k × blanc, jaune, rose ; platine 950) | filtre | 10 puces après « More Metals » | – | OK (V pour la liste) |
| Forme (10) : Asscher, Cushion, Emerald, Heart, Marquise, Oval, Pear, Princess, Radiant, Round | filtre | « Oval » garde 24 montures et l'adresse reçoit `shapes=oval` ; « Cushion » a affiché 0 résultat à la lecture (à 2,5 s) alors que la page d'accueil montre un modèle « cushion » | – | **anomalie possible** (V : 0 lu, cause non établie) |
| Tri (bouton « Price (low to high) ») | menu | le bouton n'a pas pu être actionné par son nom | – | non testé |
| Carte monture (ex. Ruby Ring) | lien | ouvre la fiche : titre, style, forme, métal, prix « Setting only », description, mesures (bande 2,4 mm, 8 pierres de côté, 0,26 ct F-G VS) | 612 € (barré 680 €) | OK (V) |
| Fiche monture : forme Round / Oval / Pear / Emerald / Marquise | puces | change la variante dans l'adresse ; **le prix de la monture ne change pas** (612 €) | 0 | OK (V) |
| Fiche monture : métal 9 k blanc → 18 k jaune → 14 k rose → platine → 9 k blanc | puces | prix de la monture : 612 € → 1 242 € → 927 € → 1 053 € → 612 € (prix barrés 680, 1 380, 1 030, 1 170) | oui | OK (V) |
| Fiche monture : « More Metals » | bouton | liste complète non relevée ; les cinq métaux testés sont atteints | – | partiel |
| Vue 360° (icône sur l'image) | vue | icône « 360° » visible sur la photo ; photo statique d'une bague en ovale (rendu photo, pas 3D) | – | présent ; rotation non testée |
| Partager (Share) | bouton | présent sur fiche monture, fiche diamant et récapitulatif ; non actionné | – | non testé |
| Select Setting | bouton | passe à l'étape 2 ; la monture reste affichée avec « Remove » | – | OK (V) |
| Book a Consultation | bouton | présent ; non actionné (ouvre un formulaire) | – | non testé |
| Naturel / Lab Grown (onglets) | onglet | Lab Grown : 39 720 diamants ; Naturel : 11 445 ; l'adresse reçoit `activeTab=Natural&queryLabGrown=false` | oui | OK (V) |
| Carats (2 champs 0,5 à 10) | champs | présents ; non saisis | – | non testé |
| Couleur D à J ; Blanc / Fantaisie | boutons | « D » : 39 720 → 17 470 diamants (`color_min=D&color_max=D`) | filtre | OK (V) |
| Pureté FL à SI2 | boutons | « VVS1 » en plus de D : 3 950 diamants | filtre | OK (V) |
| Taille (Ideal, Excellent, Very Good) | boutons | « Ideal » ajouté : adresse `cut_min=ID&cut_max=ID`, compteur illisible à cet instant | filtre | OK (V) |
| Prix du diamant (€1 à €4,583,708) | champs | présents ; non saisis | – | non testé |
| Tri : prix croissant, décroissant, carats croissants, décroissants | liste | « Price high to low » et « Carat: high to low » appliqués ; premiers résultats changent (V) | – | OK |
| Liste / Grille | boutons | bascule l'affichage ; la vue Liste est un tableau (forme, carats, couleur, pureté, taille, prix) | – | OK (V) |
| Advanced Filters | panneau | Tableau, Ratio, Polish, Symmetry, Fluorescence (None à Very Strong), Certificat (GIA, IGI), Type synthétique (HPHT, CVD, IIA), puces « Clear All » | – | OK (V pour la liste ; non actionnés) |
| Diamant (carte) | lien | fiche : certificat n° LG847690786, « Click to view certificate », PDF, type, polish, symétrie, fluorescence, mesures 6,68×4,44×2,7 mm, table 62 %, profondeur 60,8 %, échelles couleur et pureté, « Looking for a bigger diamond? » | 393 € (barré 436 €) | OK (V) |
| Select diamond | bouton | passe à l'étape 3, total 1 005 € (barré 1 116 €) pour 0,51 ct E SI1 + Ruby 9 k blanc | oui | OK (V) |
| Select Region / Select Ring Size | listes | régions « UK/IE » et « Europe » ; tailles non listées | – | partiel |
| Talk to one of our Experts | bouton | présent ; non actionné | – | non testé |
| Ring Size Guide | lien/bouton | présent en bas de page ; non ouvert | – | non testé |
| Bouton WhatsApp flottant | lien | `wa.me/+353834823394` pré-rempli ; non ouvert | – | présent (V) |
| BOOK (en-tête) | lien | `/pages/book-appointment` | – | présent |
| Finance | lien | `/pages/humm` (finance Humm annoncé en bandeau) | – | non ouvert |
| Panier (icône), favoris, compte | liens | `/cart`, `/search/?view=wishlist`, `/account` | – | **non ouverts** (consigne du site) |

## Options disponibles
- **Styles (8)** : Diamond Band, Halo, Hidden Halo, Nature, Side Stone, Solitaire, Three Stone, Vintage.
- **Métaux (10)** : 9 k, 14 k, 18 k en or blanc, jaune et rose ; platine 950.
- **Formes (10)** : Asscher, Cushion, Emerald, Heart, Marquise, Oval, Pear, Princess, Radiant, Round.
- **Diamant** : naturel ou synthétique ; carats 0,5 à 10 ; couleur D à J (+ fantaisie) ; pureté FL à SI2 ; taille Ideal, Excellent, Very Good ; certificat GIA ou IGI ; polish et symétrie ; fluorescence ; synthétique HPHT, CVD, IIA.
- Non proposé : gravure, choix de griffes ou de corps de bague à la carte, alliances dans ce constructeur (S : non vu).

## Prix, délais, retours, garanties
- **Prix** : monture et diamant affichés séparément, puis total ; remise de 10 % barrée partout (V). Exemple : monture 612 € + diamant 393 € = 1 005 € (V). Le prix de la monture varie avec le métal (612 à 1 242 €) mais pas avec la forme (V).
- **Délai** : « Standard delivery within Ireland typically takes 1–2 business days » une fois la bague prête ; « Custom orders may take longer » ; aucun délai de fabrication chiffré (V, FAQ, extrait de cache du 16/09).
- **Retours** : 30 jours, bague non portée, évaluation 10 à 14 jours ; **les gravures, les commandes sur mesure et spéciales, les bagues remises à taille ne sont ni reprises ni échangées** (V, page `returns-refunds`, cache du 16/09). Mise à taille gratuite 30 jours après retrait pour le sur mesure.
- **Garantie** : fabrication à vie, réparation gratuite sauf usure ou accident (V). Garantie d'alignement de prix (V).
- **Certificats** : GIA ou IGI, PDF consultable par pierre (V).
- **Financement** : Humm affiché (V, bandeau).
- **Frais de livraison, moyens de paiement** : non vérifiés (panier non ouvert).

## Confiance et service
- Note 5,0 sur 110 avis affichés ; « Lifetime Warranty », « Free Resizing », « 50 % Less Than High Street » (V, déclarations du site).
- Sept salons sur rendez-vous ; WhatsApp ; réservation en ligne (V).
- Service sur mesure : CAO, « digital 3D model » avant fabrication (V, page `bespoke-service`).
- Preuves de fabrication (photos ou vidéos d'atelier, suivi de commande) : **aucune trouvée** (V pour les pages lues).
- Libellé du synthétique : « Lab Grown » ; « fancy lab grown » en rubrique (V).

## Points forts à retenir pour JR Diamond
1. **Constructeur en 3 étapes avec adresse partageable** : chaque état est dans l'URL (preuve : `settingId`, `diamondAddedId`, `color_min`).
2. **Filtres de pierre riches et rapides** : D seul réduit 39 720 à 17 470 pierres sans rechargement de page (V).
3. **Prix composé visible à chaque étape** (monture + diamant + total, V).
4. **Fiche de pierre complète** : certificat, PDF, mesures, échelles pédagogiques (V).
5. **Naturel et synthétique dans le même parcours** (V).
6. **Le métal change le prix de la monture** de façon lisible (612 → 1 242 €, V).

## Défauts observés
- La forme ne modifie pas le prix ni la photo de la monture à l'écran (V pour le prix ; image : mêmes pixels non comparés).
- Filtre « Cushion » à 0 résultat sur la monture ovale triée (V, cause non établie).
- Aucun délai de fabrication chiffré ; aucune preuve de fabrication (V).
- Exclusion de toute reprise pour le sur mesure et les gravures (V).
- Rendu photo, pas de 3D ni de prévisualisation du diamant choisi dans la monture (V : photo statique à l'étape 1).
- Sur iPhone, la liste des montures se charge mais la mesure de la photo de fiche n'a pas pu être répétée par la méthode de lecture d'image sur la page d'accueil du constructeur.

## Limites de l'audit
- Pas d'ajout au panier ni d'ouverture de `/cart` (demande du site pour les agents) : frais de livraison, délai du panier et moyens de paiement non vérifiés.
- Filtres de prix, champs de carats, partage, rendez-vous, taille de doigt (liste), guide des tailles non actionnés.
- Pages de politique lues dans un cache daté du 16/09/2026.
- Affichage iPhone : liste des montures chargée, filtres repliés derrière un bouton (non ouvert).

## Mesures de chargement (visuel principal, image ≥ 500 px visible)
| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche monture | 4,2 s et 4,4 s (V) | 3,8 s et 3,9 s (V) |
| Liste des montures (première image) | 2,8 s (domcontentloaded) | 3,1 s à 3,9 s (V) |

## Sources
- https://redzdiamonds.ie/pages/build-your-own-ring (et adresses du parcours, 15/11/2026)
- https://redzdiamonds.ie/robots.txt, https://redzdiamonds.ie/agents.md
- https://redzdiamonds.ie/pages/returns-refunds, /pages/faqs, /pages/lifetime-manufacturing-guarantee, /pages/bespoke-service
