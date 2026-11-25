# Audit : Baxter's Fine Jewelry (Warwick, Rhode Island)

- **Site** : Baxter's Fine Jewelry, joaillerie familiale de Warwick (RI) fondée en 1960, boutique Shopify.
- **Adresse de départ** : https://www.baxtersjewelry.com/pages/custom-design
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366x900 (ordinateur), émulation iPhone 13 (390 px)
- **Statut** : **partiel**. Pas de configurateur 3D ni de constructeur en ligne : le « sur mesure » passe par un rendez-vous. Pages lues : sur mesure, collection des bagues, une fiche, retours, financement, panier. Ajout au panier non cliqué (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options observées |
|---|---|
| 1. Page « Custom » (`/pages/custom-design`) | Prise de rendez-vous, SMS avec photo, 5 étapes décrites, réalisations, FAQ, formulaire de consultation [V] |
| 2. Collection `/collections/engagement-rings` | 174 articles ; filtres Availability, Price, Stone Shape, Metal Type, Product type ; tri ; 2 densités de grille [V] |
| 3. Fiche produit (`/products/lab-grown-diamond-engagement-ring`) | Photos zoomables, quantité, Add to cart, rendez-vous, taille différente, formulaire « Inquire », retours, livraison, fabrication [V] |
| 4. Panier (`/cart`) | Vide ; suggestions d'articles ; récapitulatif non observé [V] |
| 5. Financement (`/pages/financing`) | Simulateur de mensualité, demande en magasin [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| SCHEDULE AN APPOINTMENT | lien | Mène à `/pages/make-an-appointment` ; page non ouverte | Aucun | Non testé : prise de rendez-vous |
| Text Us a Photo to Begin | lien | `sms:4017398222` : ouvrirait l'application de messages [V, href] | Aucun | Non testé : ouvre un SMS |
| SEE MORE IN STORE / CALL (401) 739-8222 | lien | `tel:4017398222` [V, href] | Aucun | OK (non appelé) |
| Questions fréquentes (6 : coût, durée, design raté, pierre apportée, aperçu, garantie) | accordéon | Chaque réponse déroulée et lue [V] | Texte : « entre le prix d'un modèle prêt-à-porter comparable et un peu au-dessus » | OK |
| Carrousel « Next slide » et diapos 1/2 – 2/2 | boutons | Présents ; carrousel des réalisations [V] | Aucun | OK |
| Curseur avant/après (input range 50), boutons Previous/Next before and after | curseur | Rempli à 80 sans effet visible sur la valeur (reste 50 en lecture) [V] | Aucun | Comportement douteux, non confirmé |
| Formulaire « Start the Conversation » (prénom, nom, e-mail, type de projet, SCHEDULE 30-MINUTE CONSULTATION) | formulaire | Options du menu : Engagement ring, Wedding bands, Redesign an heirloom, Fashion jewelry, Something else [V] | Aucun | Non rempli (règle : aucun formulaire) |
| Guide e-mail (« SEND THE GUIDE ») | formulaire | Présent ; non rempli | Aucun | Non testé : formulaire |
| Filtres de la collection : Availability, Price (bas/haut), Stone Shape (Cushion, Emerald, Marquise, Oval, Princess, Radiant, Round), Metal Type (14 Karat, 18 Karat, Platinum), Product type (Diamond Engagement Rings, Diamond Semi-Mount Rings, LAB GROWN DIAMOND ENG RINGS) | cases + champs | Libellés relevés [V]. Clics tentés : le compteur est resté à 174 articles ; l'ouverture des listes n'a pas pu être automatisée [V] | Filtre | **Effet non vérifié** |
| Sort | menu | « Most relevant » par défaut ; options non lues | Tri | Non testé |
| Grille (2 densités) | boutons | Présents [V, capture] | Aucun | Non testé |
| Cartes produit (ex. Radiant Engagement Ring 2 820 $, 14k Engagement Ring 2 270 $, Filigree 13 550 $) | liens | Ouvrent la fiche ; certaines cartes ont « Add », d'autres « Inquire » [V] | Prix affiché sur la carte | OK |
| Add (carte) / Add to cart (fiche) | bouton | **Non cliqué** : appelle `/cart/add`, interdit par robots.txt (`Disallow: /cart/`) | Non testé | Non testé : robots.txt |
| Quantité − / + | boutons | Présents sur la fiche [V] | Aucun | Non testé (liés à l'ajout) |
| Zoom media 1, 2 | boutons | Présents sur la fiche [V] | Aucun | Non ouverts |
| BOOK AN APPOINTMENT, MAKE AN APPOINTMENT | liens | `/pages/make-an-appointment` [V, href] | Aucun | Non ouverts |
| Request A Different Size / Inquire | lien + formulaire | Dépliant « Request a different size or modification » : nom, e-mail, téléphone, message [V] | Aucun | Non rempli |
| Return policy, Shipping, Manufacturing | accordéons | Textes lus (voir plus bas) [V] | Aucun | OK |
| READ ALL 908 REVIEWS ON GOOGLE, WRITE A REVIEW | liens | Mènent à Google (autre domaine) [V, href] | Aucun | Non ouverts |
| Recherche, panier (icône), compte | boutons | Panier : 0 article ; recherche et compte non ouverts [V] | Aucun | Partiel |
| Fenêtre « Sign up for 10 % off » | pop-up | S'affiche à l'ouverture de la collection : nom + mobile, 10 % de remise sur le premier achat [V, capture] | -10 % | Fermée, non remplie |
| Bulle « Text us » | widget | Présente en bas à droite ; chat non ouvert [V, capture] | Aucun | Non testé : chat |
| Simulateur de financement (page financing) | curseur/liste | Affiche une mensualité d'exemple (208,33 $) ; plan 6 mois sous 1 000 $, 12 mois dès 1 000 $ [V] | Mensualité estimée | Non manipulé |

## Options disponibles

- **Type de projet (formulaire)** : bague de fiançailles, alliances, refonte d'un bijou de famille, bijou fantaisie, autre [V].
- **Formes (filtre)** : Cushion, Emerald, Marquise, Oval, Princess, Radiant, Round [V].
- **Métaux (filtre)** : 14 Karat, 18 Karat, Platinum [V].
- **Types** : bague en diamant, monture seule (semi-mount), bague en diamant de laboratoire (« LAB GROWN ») [V].
- **Fiche produit** : pas de sélecteur de métal ni de carat ; la description donne la pierre (ex. diamant de laboratoire 2,07 ct E/VS1 coussin long certifié IGI, trois marquises de chaque côté 0,17 ct, or jaune 14 k, taille de doigt 6,5, modification sur demande) [V].
- **Designers** : A. Jaffe, Memoire, Tacori (menu Engagement & Wedding) [V].

## Prix, délais, retours, garanties

- **Prix** : affiché en dollars sur chaque carte et fiche, sans décomposition. Exemples [V] : 2 270 $ (14k engagement ring), 2 820 $ (radiant), 3 700 $ (lab-grown 2,07 ct IGI), 13 550 $ (filigrane). Bandeau : « Free shipping on orders over $100 » [V].
- **Sur mesure** : 6 à 8 semaines (consultation 1 sem. ; croquis 1-2 sem. ; CAO 1 sem. ; cire 1 sem. ; fonte et finition 2-3 sem.) [V]. Prix : « généralement entre le prix d'un modèle comparable et un peu au-dessus », discuté à la consultation, pas de prix en ligne [V].
- **Prêt-à-porter** : « Ships in 2-3 business days » ; traitement 2-3 jours ; signature au-delà de 500 $ ; e-mail de suivi [V].
- **Retours** [V, `/policies/refund-policy`] : 15 jours après réception, articles non portés, emballage d'origine ; **pièces personnalisées ou sur mesure non reprises** ; retour postal aux frais du client ; remboursement 7 à 10 jours ouvrés ; cadeau : avoir en magasin ; échange d'un article défectueux sous 30 jours.
- **Garantie** : « lifetime warranty » sur les pièces sur mesure, nettoyage et contrôle gratuits en magasin [V, FAQ]. Page « Our Warranty » non lue.
- **Financement** [V] : Synchrony, 0 % 6 mois (< 1 000 $) ou 12 mois (≥ 1 000 $), jusqu'à 18 mois en magasin ; demande **en magasin uniquement**.
- **Panier / paiement** : panier vide ; ni frais, ni moyens de paiement observés [V].
- **Certificats** : IGI cité pour un diamant de laboratoire ; libellé « Lab Grown » (pas « synthétique ») [V].

## Confiance et service

- Avis : Google 5,0 sur 908 avis, extraits datés (mars et août 2026), liens vers Google [V].
- Témoignages sur la page Custom (prénoms ou initiales) avec étoiles [V].
- Équipe nommée par rôle : designers, maître joaillier « 30+ ans », gemmologue GIA, « deux gemmologues certifiés » [V].
- Boutique 200 Jefferson Blvd, Warwick ; horaires : fermé lundi et dimanche, mardi-mercredi 10 h-18 h, jeudi 10 h-19 h, vendredi 10 h-18 h, samedi 10 h-17 h ; café sur place [V].
- Contact : téléphone, SMS avec photo, « Text us », formulaire, rendez-vous de 30 minutes [V].
- Langue : anglais ; devise : dollar [V].
- **Preuves de fabrication** : promesse « Nothing is cast until you've seen it » : rendu CAO photoréaliste puis modèle en cire imprimé en 3D à essayer, avec approbation avant fonte ; galerie « Recent Commissions » avec 4 réalisations ; pas de vidéo ni de suivi de commande en ligne observés [V].

## Points forts à retenir pour JR Diamond

1. **Un parcours de fabrication en 5 étapes avec délais par étape** (consultation, croquis, CAO, cire, fonte et finition), et approbation avant fonte. Preuve : section « How It Works » de la page de départ [V]. Rejoint le positionnement « l'atelier en direct » ; JR Diamond peut aller plus loin avec le fichier de fabrication visible en ligne.
2. **Garanties nommées en pastilles** : consultation gratuite, conception sans engagement, approbation 100 % (CAO ou cire avant fonte), garantie artisanale. Preuve : bandeau de la page [V].
3. **Réponse franche sur le prix du sur mesure** (« entre le prix d'un modèle comparable et un peu au-dessus ») : rassure même sans chiffre. Preuve : FAQ [V]. À rapprocher de l'écart principal de JR Diamond (prix « Sur devis »).
4. **Fiche d'une bague avec description complète des pierres** (poids, couleur, pureté, certificat IGI, nombre et poids des accessoires) et mention de délai « 2-3 jours ». Preuve : fiche lab-grown [V].
5. **Avis Google en volume** (908, 5,0) avec dates, plutôt que des témoignages sans source. Preuve : bloc « What our clients say » [V].
6. **Simulateur de mensualités** et page de financement claire, avec les étapes. Preuve : `/pages/financing` [V].
7. **Pierre apportée ou bijou de famille accepté** : FAQ « Can I bring my own stone or heirloom jewelry? » [V], comme la transformation de bijoux de JR Diamond.
8. **Chargement rapide** : le premier visuel de la page de départ s'affiche en 0,6 s (ordinateur) et 0,8 s (iPhone), sans défilement horizontal [V, mesure Playwright ; connexion et cache non contrôlés].

## Défauts observés

- **Pas de configurateur** : aucune personnalisation en ligne (métal, pierre, taille de doigt, gravure) ; la fiche n'a pas de variantes de métal ni de carat [V].
- **Pas de prix du sur mesure** ni d'estimation en ligne [V].
- Filtres de la collection difficiles à actionner en automatisation (compteur resté à 174) ; effet non établi [V].
- Pop-up de 10 % de remise par SMS qui masque la collection à l'ouverture, et bulle de chat superposée [V, capture].
- Le curseur avant/après n'a pas bougé à notre test (reste à 50) [V].
- Sur mesure et pièces personnalisées non reprises ; retour postal aux frais du client [V].
- Fiche de la bague lab-grown : « Finger size: 6.50 » figé dans la description ; autre taille par formulaire [V].
- Page « Shipping » : « Orders over $500 require a signature », sans tarif ni délai par destination en dehors de « free shipping over $100 » [V].
- Aucune vidéo de fabrication ni suivi de commande en ligne observé [V].

## Limites de l'audit

- **Ajout au panier non cliqué** : `/cart/add` est interdit par robots.txt (`Disallow: /cart/`). Seule la page `/cart` (autorisée) a été lue, vide. Frais de livraison, moyens de paiement et récapitulatif non observés.
- Le robots.txt contient un texte destiné aux agents (interfaces UCP/WebMCP pour les actions d'achat, contact bots@shopify.com). Il n'a pas été suivi pour les achats, aucun achat n'a été tenté ; l'audit se limite à de la lecture.
- Aucun formulaire, rendez-vous, SMS ni chat actionné.
- Filtres, tri, simulateur de financement et curseur avant/après : effet non confirmé.
- Pages non lues : garantie, rendez-vous, alliances, designers, « Baxter's Brides ».
- Mesure de chargement : une seule mesure par appareil, depuis un serveur proxy ; non représentative d'un utilisateur réel.

## Sources

- https://www.baxtersjewelry.com/pages/custom-design [V]
- https://www.baxtersjewelry.com/collections/engagement-rings [V]
- https://www.baxtersjewelry.com/products/lab-grown-diamond-engagement-ring [V]
- https://www.baxtersjewelry.com/policies/refund-policy [V]
- https://www.baxtersjewelry.com/pages/financing [V]
- https://www.baxtersjewelry.com/cart [V]
- https://www.baxtersjewelry.com/robots.txt [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/baxters-fine-jewelry/`
