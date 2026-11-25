# Joseph Schubach Jewelers (Scottsdale, Arizona)

- Site : https://schubachstore.com
- Page de départ : https://schubachstore.com/apps/ring-creator/rb-get-started (constructeur « Design Your Own Ring », RingCreator + visionneuse 3D)
- Date : 15/11/2026 (consigne) ; relevés refaits le 25/11/2026, qui remplacent le rapport du 24/11 (alors bloqué)
- Appareils : ordinateur (Chromium 1366x900, en-US) et affichage iPhone 13 (Playwright)
- Statut : **partiel** (parcours complet jusqu'à l'écran de revue ; panier non atteint, voir Limites)
- Contrôle robots.cjs du 25/11 : AUTORISÉ pour la page de départ, les listes, les fiches, la revue, le panier, les pages de politique ; **INTERDIT** : `/cart/add` (règle `Disallow: /cart/`). Le bouton « Add to Cart » n'a donc pas été cliqué. Aucun écart aux règles.

## Parcours

Deux entrées, trois étapes numérotées « Choose Stone / Choose Setting / Review Complete Ring » (ordre inversé si on commence par la monture). État porté par l'adresse (`labgrown_stock_num`, `ring_stock_num`, `diamond_type`, `shape`...). Une seule monture est offerte dans le catalogue du constructeur (voir Défauts).

| Étape | Adresse (sous /apps/ring-creator/) | Options observées (V = vérifié le 25/11) |
|---|---|---|
| 0. Départ | rb-get-started | « Begin with a Stone », « Begin with a Setting » (V) |
| 1. Pierre | rb-stone-list | 4 onglets : Natural Diamonds, Lab-Grown Diamonds, Colored Gemstones, Radiance Gemstones ; 11 formes ; carat 0,50 à 5,00 ; couleur (blanc D à Z / Fancy) ; pureté FL à I3 ; taille (cut) ; budget ; filtres avancés ; tri (V) |
| 1b. Fiche pierre | rb-stone-details | photo, vidéo, certificat (3 vignettes) ; 18 caractéristiques ; « Select Lab-Grown Diamond » / « Select Natural Diamond », « Ask a Question » ; **aucun prix** (V) |
| 2. Monture | rb-setting-list puis rb-setting-details | filtres forme, style, métal, budget ; fiche : taille de tête, style de tête, métal de tête, style d'anneau, métal d'anneau, taille de doigt, vue 3D, « Select Setting » (V) |
| 3. Revue | rb-ring-review | résumé pierre + monture, taille de doigt, « Ask a Question », « Drop a Hint », « Start Over » ; pas de bouton de panier avec une pierre choisie (V) |
| Variante | rb-setting-details sans pierre | prix de la monture seule + « Add to Cart » (présent, non cliqué, panier interdit par robots.txt) (V) |

## Contrôles vérifiés

Départ (ordinateur 48 contrôles listés par controls.cjs, iPhone 26) : menu de 10 rubriques (+ 6 sous-menus), recherche, compte, panier (0), pied de page (réseaux, téléphone, courriel, politiques, BBB, GIA). Seuls les contrôles du constructeur sont détaillés ci-dessous.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Begin with a Stone | lien | ouvre rb-stone-list (diamants naturels par défaut) | aucun prix de pierre | OK |
| Begin with a Setting | lien | ouvre rb-setting-list (1 monture) | monture 1 675 $ | OK |
| Onglet Natural / Lab-Grown | onglet | bascule le catalogue : 12 711 naturels, 54 081 synthétiques (adresse `diamond_type=`) | non affiché | OK |
| Onglet Colored Gemstones, Radiance Gemstones | onglet | présents ; non ouverts | n/a | non testé : hors sujet (pierres de couleur, marque maison) |
| Forme (Round, Oval, Pear, Emerald, Princess, Radiant, Square, Marquise, Asscher, Heart, Cush Brill) | bouton | filtre : Oval en synthétique 9 600 sur 54 081 ; adresse `shape=Oval` ; Round, Marquise (naturel) cliquées sans erreur | non affiché | OK |
| Carat | curseur + 2 champs | plage 0,50 à 5,00 ct affichée ; saisie non modifiée | non affiché | non testé : valeur par défaut seule relevée |
| Couleur White / Fancy | bascule + curseur D à Z | bascule Fancy : clic sans effet détecté (le décompte reste 12 711) ; curseur non déplacé | non affiché | partiel |
| Clarity (FL, IF, VVS1 à I3) | curseur 12 crans | présent ; non déplacé | non affiché | non testé : curseur à poignées |
| Cut (Ideal à Poor) | curseur 6 crans | présent ; non déplacé | non affiché | non testé : idem |
| Budget (0 à 100 000 $) | curseur + 2 champs | présent sur les pierres mais les prix sont masqués (classe `vdbrb_hide_price`) | prix jamais vus | OK (affichage) / inutilisable (I) |
| Advanced Filters | bouton | déplie : Budget, Polish, Symmetry, Fluorescence, Lab (GIA, IGI, HRD, AGS, GSI, SGL, suite par flèche), Depth, Table | n/a | OK |
| Reset Filters | lien | présent ; non cliqué | n/a | non testé |
| Sort By | menu | options Cut, Color, Clarity, Carat, Budget, chacune Lowest / Highest | n/a | OK (lu) ; non appliqué |
| Pagination | liens | 8 pierres par page, 1 589 pages (naturel) ; résultats « 1 to 8 of 12,711 » | n/a | OK (lu) |
| Carte de pierre | lien | ouvre rb-stone-details (stock, forme, carat, couleur, pureté) | masqué | OK |
| Vignette photo | bouton | photo de la pierre (JPEG, cloudfront) | n/a | OK |
| Vignette vidéo | bouton | vidéo MP4 de la pierre qui tourne (assets.stullercloud.com) | n/a | OK |
| Vignette certificat | bouton | la vidéo reste affichée, aucun certificat ouvert dans la visionneuse | n/a | défaut possible (I) |
| Select Lab-Grown / Natural Diamond | bouton | ouvre rb-setting-list avec la pierre conservée dans l'adresse | n/a | OK |
| Change Stone / Change / View (en-tête d'étapes) | liens | retour à la liste ou à la fiche | n/a | OK (adresses lues) |
| Filtres monture : forme (6), style (6), métal (6), budget | boutons/curseur | présents ; non appliqués (1 seule monture) | n/a | non testé : sans objet avec 1 résultat |
| Carte de monture | lien | ouvre rb-setting-details | 1 675 $ | OK |
| Create a Custom Design | lien | renvoie à /pages/design-your-own-engagement-ring | n/a | OK (lu) |
| Head Size 1 ct / 2 ct / 3 ct | bouton | change le numéro de stock et l'image | **0 $** (1 675 $ partout) | OK |
| Head Style (13) | carrousel | change l'aperçu et le stock : voir Options | de 1 675 $ à 1 970 $ | OK |
| Head Metal (7) | bouton | 14 k jaune/blanc/rose, 18 k jaune/blanc/rose, platine | 14 k : 0 ; 18 k : +500 $ ; platine : +700 $ | OK (aperçu en retard pour 2 combinaisons) |
| Shank Style (15) | carrousel | change l'anneau : voir Options | de 1 970 $ à 3 125 $ (base tête halo) | OK (prix de 5 styles à confirmer) |
| Shank Metal (7) | bouton | mêmes 7 métaux | 18 k : +190 $ ; platine : +370 $ (par rapport à 14 k) | OK |
| Ring Size (3 à 12 par quart, 37 valeurs) | bouton | sélection de la taille ; pas de guide ni conversion | **0 $** | OK |
| Vignette 3D | bouton | charge la visionneuse 3D : GLB de la tête et de l'anneau (schubach.sirv.com), éclairage HDR (pixotronics) ; canvas 531x500 | n/a | OK ; rendu pâle dans notre navigateur sans carte graphique (I) |
| Vignettes 2 à 5 | bouton | 4 vues photo fixes de la monture | n/a | OK |
| Select Setting | lien | ouvre rb-ring-review | n/a | OK |
| Add to Cart (monture seule) | bouton | présent sous la fiche monture sans pierre | 1 675 $ | non testé : /cart/add INTERDIT par robots.txt |
| Ask a Question | bouton | ouvre un formulaire : nom, courriel, mobile, message | n/a | non testé au-delà de l'ouverture : formulaire non rempli |
| Drop a Hint | bouton | présent sur la revue ; non ouvert | n/a | non testé : formulaire (données personnelles) |
| Start Over | bouton | présent ; non cliqué | n/a | non testé |
| Chat (bulle) | bouton | « We're offline / Leave a message » | n/a | non ouvert (règle) |
| Email « Let's talk about your dream ring » | formulaire | « Joe will reach out later today » | n/a | non testé : formulaire |
| Téléphone | lien | tel:480-946-6000 (pied de page) et 888-724-8222 (service client) | n/a | lu |
| Partager / enregistrer / comparer | n/a | absents du constructeur ; « Drop a Hint » est le seul partage | n/a | absent |
| Essayage sur la main, AR, zoom, 360° photo | n/a | absents (vue 3D seule) | n/a | absent |
| Page Financing | lien | Bread Pay (paiement différé) ; vérification du taux sans quitter le site | n/a | OK (lu) |

## Options disponibles

- **Pierres** : naturel, synthétique (« Lab-Grown »), pierres de couleur, pierres maison Radiance ; formes : Round, Oval, Pear, Emerald, Princess, Radiant, Square, Marquise, Asscher, Heart, Cush Brill (V). Filtres : carat, couleur, pureté (FL à I3), taille, budget, polissage, symétrie, fluorescence, laboratoire, profondeur, table.
- **Formes de montures filtrables** : Emerald, Pear, Oval, Round, Cush Mod, Cush Brill ; styles : Bezel Set, Accented, Solitaire, Side Stone, Halo, Vintage (V).
- **Têtes (13)** : Ballerina, Cathedral Crown Accented, Vintage Style Tapering, Adeline, Split Band Leaf Accent, Duchess, Petal Prong Head, Mosaic Bezel, Window Bezel, Half Bezel, Half Bezel Horizontal, Petal Bezel, Adeline Head with Hidden Halo (V). Tailles de tête : 1, 2, 3 ct.
- **Anneaux (15)** : Ballerina, Adeline, Duchess, Bezel Set Marquise and Round, Mini Blake, Paris Cathedral with Diamonds, Split Cathedral with Petals, Knife Edge Twist, Classic Tapered Cathedral, Curved Band with Petals, Round Wire Twisted, Round Wire Twisted with Diamonds, Wide Flat, Round Comfort Fit, Round Paris with Diamonds (V).
- **Métaux (tête et anneau, choix séparés)** : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine (V).
- **Taille de doigt** : 3 à 12 par quart de taille (V). **Gravure, griffes, pavage à la carte** : absents (aucun contrôle).
- **Vues** : photo, vidéo de pierre, 3D de la monture, 4 photos de monture (V). Sur la main, AR, 360° : absents.

Prix lus (V, ordinateur) pour une tête Ballerina 14 k : base 1 675 $ ; Cathedral Crown 1 845 $ ; Vintage Tapering 1 845 $ ; Adeline 1 675 $ ; Split Band Leaf 1 690 $ ; Duchess 1 990 $ ; Petal Prong 1 675 $ ; quatre bezels et Petal Bezel 1 744 $ ; Adeline Hidden Halo 1 970 $. Anneaux (tête Halo) : Adeline 2 625 $, Bezel Set Marquise and Round 3 125 $, Mini Blake 2 270 $, Paris Cathedral 2 470 $, Split Cathedral 2 270 $, Round Wire Twisted 2 325 $, Wide Flat 2 370 $, Comfort Fit 2 170 $, Paris with Diamonds 2 170 $ ; Knife Edge, Classic Tapered, Curved Band, Wire Twisted with Diamonds, Duchess et Ballerina affichent 1 970 $ : lecture faite 2 s après le clic, valeur possiblement en retard pour ces cinq (I).

## Prix, délais, retours, garanties

- **Prix** : seul le prix de la monture est affiché (« Setting Price », 1 675 $ au départ). Le prix de la pierre est masqué sur toutes les fiches lues (classe CSS `vdbrb_hide_price`, V) ; la revue n'affiche que 1 675 $ « Setting Price ». Aucun total bague complète. La page de conception promet une demande de devis personnalisée (inventaire du 15/11). Aucune décomposition métal / pierre / façon ; seuls les suppléments par option apparaissent via le prix de la monture.
- **Délai** : stock expédié « within a day or two » ; sur mesure « from several days to 2 - 6 weeks » (https://schubachstore.com/pages/faq, V).
- **Livraison** : FedEx États-Unis à partir de 59,95 $ ; international à partir de 129 $, droits et taxes à la charge du client ; pas de taxe de vente hors Arizona (FAQ, V). Frais exacts au panier : non vus.
- **Retours** : 30 jours, sans restocking, numéro RA par téléphone, retour assuré à la charge du client, remboursement jusqu'à une semaine après réception. **« Special and custom orders ... are not returnable »** (https://schubachstore.com/pages/extended-policy, V).
- **Garanties** : garantie limitée à vie contre les défauts de fabrication ; garantie à vie moissanite (Charles & Colvard) ; « Guaranteed Value » (pages shipping-and-returns, V).
- **Financement** : Bread Pay (page bread-financing, V).
- **Paiements affichés** : Visa, Mastercard, PayPal, Discover (pied de page, V) ; autres moyens au paiement : non vus.

## Confiance et service

- **Certificats** : naturel : GIA avec numéro de rapport (ex. 2487738010, fiche BR038784) ; synthétique lu : GCAL (fiche 500079058) ; le filtre « Lab » propose GIA, IGI, HRD, AGS, GSI, SGL (V). Aucun certificat ne s'est ouvert dans la visionneuse.
- **Libellé du synthétique** : « Lab-Grown Diamonds » dans le constructeur ; la page https://schubachstore.com/pages/lab-grown-diamonds dit « also known as synthetic or man-made diamonds » et « up to 90% less than mined » (V).
- **Langues, devises** : anglais, dollars seulement (V).
- **Avis clients** : aucun avis affiché dans le constructeur ; badges MJSA, Jewelers of America, BBB, GIA en pied de page (V).
- **Preuves de fabrication** : page https://schubachstore.com/pages/custom-design : page de projet par client sur un blog, avec dessins CAO, illustrations, **maquette en plastique imprimée en 3D avant production**, vidéo de reportage (V). Fabrication surtout à Scottsdale (FAQ, V). Pas de suivi de commande vu.
- **Contact** : téléphone, courriel, rendez-vous en salle d'exposition (lun-ven 9 h 30-17 h 30), chat « We're offline » (V).

## Points forts à retenir pour JR Diamond

1. **État dans l'adresse** : chaque choix est dans l'URL (`labgrown_stock_num`, `ring_stock_num`) ; le retour arrière et le partage par lien marchent (V, adresses lues).
2. **Prix de la monture qui bouge avec chaque option** : 14 k à 18 k +500 $ sur la tête, platine +700 $ ; anneau +190 $ / +370 $ (V). Le client voit au moins le coût de la matière ; JR Diamond peut aller plus loin avec une ligne par poste.
3. **Maquette imprimée en 3D avant production** et page projet avec CAD (https://schubachstore.com/pages/custom-design, V) : proche de « ce que vous voyez existe ».
4. **Vidéo tournante de chaque pierre + fiche de 18 caractéristiques** (V), au-delà d'une simple photo.
5. **Choix de la tête et de l'anneau séparément, chacun avec son métal** (V) : la bicolore (ex. tête rose, anneau blanc) est un choix de première classe.
6. **Visionneuse 3D de la vraie monture** (fichiers GLB) avec préchargement des matériaux par métal (V) ; JR Diamond peut faire mieux avec le fichier de fabrication.
7. **Moteur de pierres de grande taille** (12 711 naturels, 54 081 synthétiques) avec filtres de laboratoire GIA / IGI (V) ; pertinent pour les certificats dès 0,50 ct.

## Défauts observés

- **Prix de la pierre jamais affiché** ; le tri « Budget » et le curseur de budget existent sans prix visible (V). Pas de prix total de la bague.
- **Catalogue de montures réduit à une seule monture** (« View 1 Rings ») ; avec une pierre ovale choisie, la seule monture proposée est coussin et la revue montre un anneau coussin avec une pierre ovale en vignette : l'aperçu ne correspond pas à la pierre (V).
- **Pas de bouton de panier avec une pierre choisie** : la revue n'offre que « Ask a Question », « Drop a Hint », « Start Over ». Le parcours mène à une demande, pas à l'achat (V). L'inventaire du 15/11 mentionnait un « Add to Cart » : il n'existe que sur la monture seule.
- **Lenteur** : la liste de pierres montre ses premières photos après environ 7 à 9,5 s ; le chargement réseau complet dépasse 20 s (V).
- **Certificat de la pierre non consultable** dans la visionneuse ; certificat synthétique GCAL, pas IGI (V).
- **Aperçu qui ne suit pas toutes les combinaisons de métal** (platine ou 18 k rose retombent sur un aperçu 18 k blanc ou 14 k rose) (V).
- **Aucun guide des tailles ni conversion** près de la taille de doigt ; aucune gravure ; aucune mention du délai sur le constructeur (V).
- **Retour exclu pour le sur mesure** (V) : le « 30 jours sans condition » ne couvre pas les bagues dessinées.

## Limites de l'audit

- **Panier** : `/cart/add` interdit par robots.txt ; l'« Add to Cart » de la monture seule n'a pas été cliqué ; le panier vide a été lu (« Your cart is empty »). Frais de livraison et moyens de paiement du paiement : non vus.
- Gabarit des filtres de pierre (carat, pureté, taille) et bascule Fancy : non manipulés ou sans effet détecté.
- Formulaires (« Ask a Question », « Drop a Hint », courriel du pied de page) non remplis ; chat non ouvert.
- Temps du visuel, une mesure par appareil : monture 3,2 s (sans écran de chargement) sur ordinateur et iPhone ; fiche pierre environ 2,6 à 2,8 s et revue environ 1,4 à 1,8 s (image chargée, écran de chargement non contrôlé) ; liste de pierres 7 à 9,5 s ; réseau complet environ 22 à 25 s. Pas de carte graphique : le rendu 3D peut différer d'un vrai appareil.
- Les prix des anneaux marqués « à confirmer » ont été lus 2 s après le clic. Un seul modèle de pierre synthétique et un naturel ont été ouverts.
- Seul le parcours « pierre d'abord » a été fait en entier ; « monture d'abord » a été vérifié jusqu'à la fiche.

## Sources

Pages lues le 25/11/2026 (code 200, AUTORISÉ par robots.txt) :
- https://schubachstore.com/apps/ring-creator/rb-get-started, rb-stone-list (natural, labgrown, Oval, Round), rb-stone-details (labgrown_stock_num=500079058 ; natural_stock_num=BR038784), rb-setting-list, rb-setting-details (ring_stock_num=H102777-Cushion-1ct-14K W-S102777-2ct-2W-14K R ; H103279-Oval-2ct-14K Y-S103343-14K W), rb-ring-review
- https://schubachstore.com/pages/shipping-and-returns, /pages/extended-policy, /pages/faq, /pages/lab-grown-diamonds, /pages/custom-design, /pages/bread-financing, /cart
- Inventaire de l'exploration : /home/user/Diamond3D/docs/concurrence/audit/us/arizona/INVENTAIRE.md (15/11/2026)
- Captures et scripts : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/schubach/
