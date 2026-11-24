# Audit : Morris Jewelry (Bowling Green, Kentucky)

- **Site** : Morris Jewelry, https://www.morris1881.com/
- **Page de départ** : https://www.morris1881.com/design-a-ring (robots.txt sans interdiction, vérifié avec l'outil de contrôle)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Étapes 1 (réglage) et 2 (liste de diamants) parcourues ; étape 3 et panier non atteints (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Le constructeur est un module tiers « CaratWise » (« Powered by CaratWise »), monté dans la page [V]. Deux modes d'entrée sur /design-a-ring : « Start with a Setting » (réglage d'abord, puis diamant) ou « Start with a Diamond » ; un troisième bouton « Design with our Studio Collection » et, plus bas, « Start Designing » / « Explore Studio Collection » [V pour la présence, seul « Start with a Setting » a été actionné].

| Étape | Options observées [V] |
|---|---|
| 1. Choose Settings (liste, `#/ring`) | 247 montures ; styles (Studio, Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique) ; filtres forme, taille, type de diamant, métal, prix, filtres avancés ; tri |
| 1b. Fiche d'une monture (`#/ring/RP407-amara?…`) | origine, forme, taille (1/2/3/5 ct), métal, métal de la couronne, gravure (18 caractères, 3 polices), bande assortie, « Advance Customizations », détails produit, « Save Your Design » |
| 2. Choose Diamond (`#/diamond?…`) | inventaire de 6 927 diamants (lab grown, ronds, 1,5 à 2,5 ct par défaut) ; filtres ; tri ; prix de chaque pierre |
| 3. Complete Ring | non atteint |

## Contrôles vérifiés

Ordinateur, liste des montures (32 + contrôles internes du module) et fiche Amara. « Effet » = ce qui a été observé.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start with a Setting | bouton | ouvre la liste des montures à l'adresse `#/ring?dia_origin=LGN` (synthétique par défaut), sans rechargement | liste « Starting at » | OK [V] |
| Start with a Diamond / Design with our Studio Collection / Start Designing / Explore Studio Collection / Discover the Collection | boutons | présents ; non actionnés | - | non testé (un seul parcours suffisait ; le style « Studio » est visible dans le bandeau des styles) |
| Bandeau de styles (14 styles, flèches Previous/Next slide) | boutons | filtre les montures par style | - | présent [V] ; non cliqué un par un |
| Back / Clear Filters | boutons | Back revient à l'étape précédente ; Clear Filters retire les filtres (adresse redevient `#/ring`) | - | OK [V] |
| Filters | bouton | ouvre/ferme la colonne de filtres | - | OK [V] |
| Sort by (Best Sellers par défaut) | liste | s'ouvre ; options non relevées une à une | - | partiel |
| Center Diamond Shape (10 icônes) | boutons | le clic sur Oval met `dia_shape=OVA` dans l'adresse ; la liste restait à « 247 » (effet sur le décompte non constaté) | peut changer | partiel [V] |
| Center Diamond Size | filtre | options 0.7, 1, 1.5, 2, 3, 5 ct | - | options lues [V], non appliquées |
| Diamond Type (Lab Grown / Natural) | filtre | passage à Natural : adresse `dia_origin=GNU`, « Starting at » de Celeste passe de 1 937 $ à 2 117 $ ; une seule origine à la fois | +180 $ (Celeste) | OK [V] |
| Metal | filtre | 14K, 18K, PT (platine), couleurs blanc/jaune/rose | - | options lues [V] |
| Price Range | curseur double | 1 239 $ à 3 333 $ (bornes affichées) | - | lu [V] |
| Advanced Filters | bouton | ajoute Setting Style (21 valeurs), Setting Type (7), Head Style (11), Setting Width (8 tranches) avec effectifs | - | OK [V] |
| Pastilles « Swatch color » white/yellow/rose sur chaque carte | boutons | changent la photo de la carte ; non actionnées | - | présent |
| Pagination 1 à 7, Load All Designs | boutons | présents ; non actionnés | - | non testé |
| 360° Experience | bouton | présent dans la fiche | - | non testé (clic par libellé sans effet dans mon script) |
| Hand view | bouton | présent (photo sur la main) | - | non testé, même raison |
| Vignettes 1 à 7 + Video | boutons | présents, dont une vidéo (icône lecture) | - | non testé |
| Enter fullscreen | bouton | présent | - | non testé |
| More information about … (5 icônes « i ») | boutons | présents | - | non testé |
| Diamond Type Natural / Lab Grown (fiche) | radio | Natural : monture Amara 14 k jaune passe de 1 647 $ à 1 730 $ (adresse `GNU`) | +83 $ | OK [V] |
| Center Diamond Size 1/2/3/5 ct (fiche) | radio | modifie `dia_size` dans l'adresse ; le prix « Setting Only » ne varie pas avec la taille (1, 3 ct testés par adresse) | 0 $ sur la monture | OK [V] via adresse ; clics directs instables |
| Forme (10 icônes, fiche) | boutons | Oval : `dia_shape=OVA`, prix monture inchangé ; Pear par adresse : la page n'a pas rendu le module | 0 $ | partiel [V] |
| Metal (7 pastilles) | boutons | 14K blanc/jaune/rose : 1 647 $ ; 18K blanc/jaune : 2 280 $ ; 18K rose et platine : prix non lu | +633 $ en 18 k | partiel [V] |
| Crown Metal (7 pastilles) | boutons | présent ; non testé | - | non testé |
| Engraving (champ, 0/18, 3 polices) | champ + radio | présent ; aucune saisie | - | non testé |
| Matching Band (No Band / Single) | radio | présent ; non actionné (test par adresse sans résultat) | - | non testé |
| Advance Customizations | bouton | ouvre : Ring Side (Micro Pave, Plain, Channel Prong), Ring Crown (4 Prong Hidden Halo, 4 Prong, 4 Prong Halo) | non relevé | OK [V] |
| Product Details | accordéon | ouvre : 12 pierres de côté, 0,08 ct, G/VS minimum, largeur 1,7 mm, épaisseur 1,5 mm | - | OK [V] |
| Save Your Design | bouton | ouvre une fenêtre « Save this design… we'll send you a link » (e-mail à saisir) ; rien saisi | - | OK ouverture [V] |
| Choose This Setting • 1 647 $ | bouton | passe à l'étape 2 (`#/diamond?dia_size=1.5..2.5&ai_color=3..1&ai_clarity=5..9`) | - | OK [V] |
| Étape 2 : liste de diamants | liste | « Showing All (6,927) » ; lignes « 1.75 ct. Round Lab Grown Diamond, F, Very Good, VS1, 1 652 $ » ; filtres Diamond Type, Lab Certification, Shape, Size, Advanced | de 1 181 $ à 2 380 $ (extrait) | OK [V] mais voir Défauts |
| Étape 2 : clic sur un diamant | ligne | non réussi (liste vide ou trop lente lors de 2 essais sur 3) | - | échec observé |
| Chat « How can we help you? » (Clientbook) | bouton | bulle flottante ; non ouvert | - | non testé |
| (270) 843-6103, Contact Us, newsletter, réseaux sociaux | liens/champ | présents au pied de page ; rien saisi | - | présent [V] |
| Ajouter au panier / panier | - | non atteint | - | non testé |

## Options disponibles

- **Origine** : Natural, Lab Grown (une seule à la fois) [V].
- **Formes** : Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion (10) [V].
- **Taille de la pierre (monture)** : 1, 2, 3, 5 ct ; filtre 0.7, 1, 1.5, 2, 3, 5 ct [V].
- **Métaux** : 14K, 18K (blanc, jaune, rose), platine ; métal de couronne séparé [V].
- **Styles** : Studio, Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique [V].
- **Setting Style (filtre avancé)** : 3/4 Eternity, Bold, Braided, Bypass, Cathedral, Comfort Fit, Criss-cross, Fancy Side Stones, Filigree, Knife Edge, Modern, Multi Row, Pinch, Plain, Rope, Split Shank, Straight Band, Tapered Baguette, Tapered Band, Trellis, Vintage Engraving [V].
- **Setting Type** : Beadset, Channel, Flush, Micro Pave, Micro Prong, Pave, Prong. **Head Style** : 4 Prong, 6 Prong, Basket, Bezel Set, Channel Set, Double Halo, Half Bezel, Halo, Hidden Halo, Integrated, Trellis [V].
- **Bande assortie** : No Band, Single. **Gravure** : 18 caractères, 3 polices [V].
- **Modes de vue** : 360° interactif (« Drag to Rotate »), Hand view, 7 vignettes dont 1 vidéo, plein écran [V pour la présence].
- **Taille de doigt** : aucun sélecteur vu aux étapes 1 et 2 [V pour ces étapes] ; guide des tailles non trouvé dans le module.
- **Diamants (étape 2)** : filtres couleur et pureté présents en défaut (`ai_color`, `ai_clarity`) ; certification (« Lab Certification »), coupe (Excellent, Very Good), couleur D à G, pureté FL à VS2 vus dans la liste [V].

## Prix, délais, retours, garanties

- **Prix** : affiché dès la liste (« Starting at 1 937 $ »), puis monture seule (« Setting Only ») sur la fiche, puis prix de chaque diamant à l'étape 2 : le prix total est donc la somme monture + pierre [V]. Pas de décomposition main-d'œuvre / matière.
- **Écarts mesurés** : origine naturelle +83 $ (Amara) et +180 $ (Celeste) sur la monture [V] ; 18 k +633 $ vs 14 k (Amara) [V].
- **Devise** : USD (`currency=USD` dans l'appel API) [V]. Langue : anglais seulement [I].
- **Délai** : constructeur non lu ; page « Custom Design » : « 6-8 weeks » pour le sur mesure [V].
- **Retours** : conditions de service (mise à jour 22/07/2025) : paiement intégral avant traitement ; « custom pieces… not eligible for return or exchange » [V, https://www.morris1881.com/terms-of-service]. Aucune période de retour pour le prêt-à-assembler trouvée sur cette page [V pour l'absence sur cette page].
- **Garanties, financement, livraison, mode de paiement** : non trouvés dans les pages lues ; panier non atteint [S : probablement traités en magasin].
- **Certificats** : bandeau de page d'accueil « GIA », « IGI », « GCAL » et « 100 % conflict-free » [V pour l'affichage] ; certificat par diamant non vérifié.
- **Libellé du synthétique** : « Lab Grown » partout [V].

## Confiance et service

- Magasin physique depuis 1881, adresse 409 E Main Ave, Bowling Green, KY ; téléphone (270) 843-6103 ; histoire détaillée sur /our-story [V].
- Service sur mesure : consultation, rendus CAO et modèles en cire, refonte d'héritage, bijoutiers sur place ; « Will I get to see the design before… » dans la FAQ [V, /services/custom-design].
- Pages éducatives (4 C, métaux, soin des bijoux), blog [V].
- Chat Clientbook, bouton « Save Your Design » (lien envoyé par e-mail) [V pour la présence].
- Avis clients : aucun vu sur la page de départ ni dans le module [V pour ces pages]. Photos ou vidéos d'atelier, suivi de commande : non vus [V pour ces pages].

## Points forts à retenir pour JR Diamond

1. **Configuration entièrement dans l'adresse** (origine, forme, taille, métaux, bande) : partageable et retrouvable. Preuve : `#/ring/RP407-amara?dia_origin=LGN&dia_shape=RND&dia_size=200&…&pri_comp_metal=14-YG`. Le propriétaire a déjà fait cette action (CLAUDE.md, 24/11).
2. **Prix visible à chaque étape, « Setting Only » explicite**, avec sélecteur naturel / synthétique qui change le prix. Preuve : Amara 1 647 $ (synthétique) → 1 730 $ (naturel), 14 k → 18 k : 2 280 $.
3. **Inventaire de pierres avec coupe, couleur, pureté et prix**, 6 927 pierres. Preuve : lignes « 1.75 ct. Round Lab Grown Diamond F · Very Good · VS1 1 652 $ ».
4. **Fiche très complète** : 360°, vue portée, vidéo, spécifications (nombre de pierres de côté, 0,08 ct, largeur 1,7 mm, épaisseur 1,5 mm) : le client voit des cotes en mm, ce que les forums réclament.
5. **Personnalisation avancée** (forme du corps, couronne) séparée du parcours de base.
6. Bouton « Save Your Design » : reprise plus tard, sans compte [V pour l'ouverture].

## Défauts observés

- **Le module ne tient pas toujours** : à l'étape 2, « That's all we have got. » (liste vide) apparaît pendant le chargement et, dans 2 essais sur 3 avec attente jusqu'à 16 s, la liste ne s'est pas affichée [V].
- **Visuel principal lent** : 3D à roulette de chargement encore visible environ 5 s après l'arrivée sur la fiche, image affichée à 15 s [V, captures] ; la fiche (prix) apparaît en 2,3 s.
- **La page change d'état de façon instable sous automatisation** : après un clic sur Natural ou sur une forme, les contrôles suivants devenaient souvent inactifs (5 expirations de 5 s) [V] ; non établi si le défaut touche aussi un visiteur humain.
- **Bulle de chat qui recouvre** les formes et le bouton « Choose This Setting » dans le coin inférieur droit [V, capture].
- **Aucune taille de doigt, aucune gravure chiffrée en prix, délai non indiqué** dans le constructeur [V pour les étapes vues].
- Sur mobile : page à 390 px de large sans défilement horizontal [V] ; liste des montures prête en 1,2 s après le clic [V].

## Limites de l'audit

- Étape 3 « Complete Ring », détail d'un diamant et panier non atteints : la liste de diamants n'a pu être ouverte que dans un des essais, et le clic sur un diamant a échoué.
- Plusieurs contrôles (360°, Hand view, Vidéo, plein écran, gravure, bande, Crown Metal, pagination, tri) vérifiés comme présents, non actionnés.
- Les écarts de prix viennent de lectures de l'en-tête de fiche ; 18 k rose et platine non lus.
- Les paramètres par adresse ont servi quand le clic direct échouait : même effet pour le visiteur, mais ce n'est pas un clic.
- Mesures de temps : une seule série, réseau d'un serveur ; la vitesse sur appareil réel est inconnue.
- Chat, formulaire d'enregistrement et newsletter non ouverts ni remplis (règles de l'audit).
- Firecrawl indisponible (crédits) : pages lues avec Playwright.

## Sources

- https://www.morris1881.com/design-a-ring et son module (états `#/ring`, `#/ring/RP407-amara?…`, `#/diamond?…`), consultés le 15/11/2026 avec Chromium.
- https://www.morris1881.com/terms-of-service (mise à jour 22/07/2025)
- https://www.morris1881.com/services/custom-design
- https://www.morris1881.com/our-story
- https://www.morris1881.com/buying-and-care-tips/diamond-education
- Appels du module observés : storeapi.caratwise.com (`/api/v1/list/landing-catalog`, `/api/v1/list/diamond?…&currency=USD`).
