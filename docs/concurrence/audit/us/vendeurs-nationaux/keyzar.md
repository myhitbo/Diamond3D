# Audit : Keyzar (États-Unis, vendeurs nationaux)

- **Site** : Keyzar Jewelry (New York), https://www.keyzarjewelry.com. Page de départ : la liste des montures [R1] ; fiche auditée : « The Kamellie » [R2].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données.
- **Statut : partiel.** Les 3 étapes (monture, pierre, bague complète) ont été parcourues, mais pas le panier : `robots.txt` interdit `/cart`, `/complete-product`, `/api/`, les fiches de pierre et les adresses à filtres [R15].
- **Deux passages.** [P1] : premier passage (14 h 44 à 15 h 16 UTC, même tâche, interrompu), qui a suivi les étapes 2 et 3 par la navigation interne du site. [V] sans [P1] : second passage (19 h 45 à 20 h 10 UTC), où toute requête vers un chemin interdit était bloquée dans le navigateur. Voir « Limites ».
- Complète la fiche Keyzar de `docs/concurrence/2026-11-15_etats-unis.md` ([V60] à [V63b]).
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé ; « sec. » : source secondaire. Prix en dollars US affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 0. Liste des montures [R1] | 9 styles, métal (7), forme (10), vue de face ou de profil, tri (4), 21 montures par page avec prix, pastilles de métal, « Load More » [V]. |
| 1. Monture « 1 Select your SETTING » [R2] | Forme (9), métal (7), style (2), extras (18 + gravure vocale), gravure, « Add Center Stone » ou « Buy Setting Only » [V]. |
| 1 bis. Type de pierre | Fenêtre « CHOOSE CENTER STONE TYPE » : Natural Diamonds, Lab Diamonds, Gemstones & Moissanite [V]. |
| 2. Pierre « 2 Select your STONE » [R3] | Liste déjà filtrée sur la forme de la monture ; incolore ou de couleur, forme (11), couleur, pureté, carats, taille, budget, symétrie, poli, certificat [P1]. |
| 2 bis. Fiche pierre [R4] | Vue 360° de la pierre, schéma coté, lien vers le rapport IGI, « Complete Your Ring » [P1]. |
| 3. Bague « 3 Complete RING » [R5] | Récapitulatif monture + pierre, extras, gravure, taille (3 à 11), total, rendez-vous, « Add to Cart » [P1]. |
| 4. Panier | Non ouvert : `/cart` interdit par `robots.txt` [R15]. |

## Contrôles vérifiés

Contrôles relevés : 230 (liste, ordinateur), 218 (liste, iPhone), 179 (fiche, ordinateur), 74 (fiche, iPhone). Environ 110 contrôles distincts actionnés, dont 22 au premier passage sur des écrans interdits aux robots.
Prix de référence : The Kamellie, ovale, or jaune 14 k = 1 150 $. « robots » = non actionné parce que le contrôle appelle un chemin interdit par `robots.txt` (requête bloquée).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **Liste des montures [R1]** | | | | |
| Bandeau « New York Showroom Open » ; « Meet a Consultant » | liens | Vers `/book-appointment` (page lue [R11]) | — | OK |
| Search (champ et bouton) | champ | Vers `/search` | — | Non testé (robots) |
| Login, Wishlist, Cart (icônes) | liens | `/account/login`, `/wishlist`, `/cart` | — | Non testés (robots) |
| Fine Jewelry, Engagement Rings, Wedding Bands, Diamonds, Gemstones | 5 menus | Au survol, panneau de liens : par forme, style, métal, « Education », « Start Quiz » | — | OK ; liens du panneau non suivis |
| Barre d'étapes, « Browse Stones » | bouton | Ouvre le choix du type de pierre (3 liens vers 3 listes) | — | OK |
| Solitaire, Nature, Pave, Halo, Hidden Halo, Side Stones, Three Stone, Vintage, Bezel | 9 filtres | Adresse `?ring_design_filter=…` | — | Non testés (robots) |
| Jewelry material ; Stone shape | 2 listes | S'ouvrent : 7 métaux ; 10 formes (dont Asscher) | — | Ouverture OK ; choix non testé (robots) |
| Front View / Side View | liste | « Side View » remplace la photo de chaque carte par une vue de profil ; adresse inchangée | — | OK |
| Tri « Recommended » | liste | Options : Low-to-high, High-to-low, Recommended, Best Selling | — | Ouverture OK ; choix non testé (robots) |
| Carte : « View … details » (×21) | lien | Ouvre la fiche, métal et forme dans l'adresse | Prix sous le nom | OK (Kamellie) |
| Carte : pastilles 14k White, Yellow, Rose | 3 boutons | La photo de la carte change ; l'attribut du lien reste sur l'or jaune | — | OK ; lien à confirmer [I] |
| Carte : image précédente, suivante, points | carrousel | Photo suivante (bague portée) | — | OK |
| Carte : « Add to wish list » | bouton | Appelle `/api/wishlist.data` | — | Non testé (robots) |
| Load More | lien | 21 puis 42 montures (`?direction=next&cursor=…`) | — | OK |
| United States (USD$) | sélecteur | 235 pays, 117 devises. Israël : `/en-IL/`, prix en dollars majoré. France : `/en-FR/`, dollars | Voir « Prix » | OK (Israël, France) |
| Newsletter (e-mail, SUBSCRIBE) | formulaire | — | — | Non testé (formulaire) |
| Pied de page : adresse (Google Maps), téléphone, e-mail, Instagram, Facebook, Pinterest | liens | `tel:`, `mailto:`, liens externes | — | Relevés, non ouverts |
| Pied de page : About, Contact, Blog, FAQ, Reviews, Education, Affiliate, 4 liens « Buyer information », Terms, Privacy, 6 liens bijoux | liens | Pages lues : FAQ, Reviews, About, Buyer information [R6][R13][R17][R9] | — | OK pour les pages lues ; autres non ouvertes |
| Accessibility ; Cookies settings ; Do not sell my information | boutons | — | — | Non testés (réglages hors parcours) |
| Bulle de chat | bouton | Widget Kustomer (script `cdn.kustomerapp.com`) | — | Non ouvert (règle de l'audit) |
| iPhone : « Open menu » | panneau | Devise, « Virtual Meeting… Book Now », 5 rubriques, Virtual / In-Person, Start Quiz, Chat, Meet, Call, Email | — | OK |
| iPhone : « Filters » ; « View options » ; « Recommended » | panneaux | Filters : métal (7), forme (10), style (9), quiz, « View Results » | — | Ouverture OK ; choix non testé (robots) |
| **Fiche monture [R2]** | | | | |
| Galerie : 25 tuiles « Zoom image » | boutons | Un clic agrandit l'image dans son cadre ; chaque image porte « Shown with 2 ct » | — | OK |
| Tuiles à carrousel (Previous / Next slide, 5 points) | carrousel | Photos de la bague portée | — | Non concluant [P1] |
| Tuile « 360 » (flèches ◄ • ►) | canvas 2D | Glisser fait tourner la bague : suite d'images JPEG propre à chaque forme × métal (`162q-er-ov-yg_NN.jpg` ; 100 images comptées en or blanc) | — | OK (souris et doigt) |
| « Load Video » (×8) | boutons | Lit un MP4 1080×1080 de 20 s, muet, en boucle | — | OK (1re vidéo) |
| « Shop the products featured in this image » | bouton sur photo | Fenêtre « Featured Items » : alliance assortie et son prix | — | OK [P1] |
| « View extra upgrades shown in this image » | bouton sur photo | Fenêtre : l'extra visible sur la photo, « not included unless you add them » | +200 $ (2mm Band) | OK [P1] |
| Center Stone Carat Size Guide, 1.0 à 5.0 | 9 boutons | Pierre redimensionnée sur une photo de main ; « The setting in the image is for reference only » | Aucun | OK (1, 3, 5) [P1] |
| Match Made in Heaven (2 alliances, pastilles, cœurs, flèches) | carrousel | The Natalie 900 $, The 1.5mm Helen 1 300 $ | — | Relevé, liens non suivis |
| Drop a Hint | bouton | Formulaire : destinataire, 2 e-mails, taille, message de 200 caractères | — | Ouverture OK [P1] ; non rempli |
| Center Stone Shape : Round, Oval, Pear, Cushion, « More Options » (E.Cushion, Emerald, Radiant, Princess, Marquise) | 9 boutons | Adresse, photos et 360° changent (`…stone-2ct-<forme>…`) | Aucun | OK (×9) |
| Material : 14K White, Yellow, Rose ; PT ; « More Options » (18K ×3) | 7 boutons | Photos et 360° changent de couleur ; mensualité recalculée | 14 k 1 150 $ ; 18 k 1 450 $ ; platine 1 750 $ | OK (×7) [P1], revérifié or blanc et platine |
| Style : Solitaire, Pave | 2 liens | Autre fiche (« The Pave Kamellie ») | 2 200 $ en platine | OK [P1] |
| Add Extras : 2mm Band, 2.5mm Band, Double Prongs, Two-Tone | 4 bascules | Ajoute `&extras=…` ; photos inchangées | +200, +400, +100, +200 $ | OK [P1] |
| « More » ; « Add Extra Features » | fenêtre | « Choose your upgrades » : 18 extras avec prix, « Cancel », « Select Upgrade » | +0 à +800 $ | Ouverture OK ; 14 extras non basculés un à un |
| Voice engraving, « Record Now » | bouton | — | — | Non testé (microphone) |
| Add Engraving | champ | Compteur « 2/15 Max (+$50) », 2 polices (Fancy, Classic), ajoute `&engraving=…` | +50 $ (1 200 $) | OK ; police non testée |
| Add Center Stone | bouton principal | Choix du type de pierre, puis liste filtrée sur la forme | — | OK [P1] |
| Buy Setting Only | bouton | Fenêtre : taille obligatoire, photos de votre pierre et dimensions en mm obligatoires, « Add Setting to Cart » | — | Ouverture OK ; non envoyé |
| « Receive as soon as Mon, Dec 14 » (?) | bouton | Avertissement : environ 3 semaines, FedEx Priority Overnight, « 97 % à l'heure », international en DDP | — | OK |
| « Learn more » (mensualités) | bouton | Fenêtre « Installment Plans » (Shop Pay) | — | OK [P1] |
| « Read our Google and Trustpilot reviews », 1 686 avis | bouton | Fenêtre d'avis datés, mention « Verified » | — | OK [P1] ; contenu bloqué au 2e passage (robots) |
| Add to wish list | bouton | Appelle `/api/wishlist.data` | — | Non testé (robots) |
| Overnight Shipping, Lifetime Warranty, 30 Days Free Returns, Certificate & Appraisal | 4 boutons | Fenêtres d'explication ; liens `/lifetime-warranty` et `/buyer-information` | — | OK |
| Know Your Setting | bloc | Poids des pierres d'accent (0,08 ct, D-F, VVS), alliage, largeur 1,5 mm, profil | — | Relevé |
| Product Overview, Ring Details, Shipping, Return Policy | 4 accordéons | Référence, origine des pierres d'accent « Lab Diamond », délai, retours | — | OK [P1] |
| Book Appointment ; « About Our Craftsmanship » ; Our Couples (10 cartes) | liens | Rendez-vous [R11] ; billet de blog ; témoignages | — | Rendez-vous lu ; autres non ouverts |
| iPhone : onglets 360°, Images, Videos | onglets | 360° ouvert par défaut ; Images : carrousel de 25 ; Videos : lecture automatique | — | OK |
| iPhone : Try-On (absent sur ordinateur) | bouton | Widget Tangiblee : On Model (4 photos de modèles, bague à glisser d'un doigt à l'autre), On Me, Compare (règle de 10 cm, écouteur), Stack | Prix et bouton d'achat repris | On Model et Compare OK ; On Me non testable (pas de caméra) ; Stack non testé |
| iPhone : sélecteurs repliés forme, métal, style | boutons | Ouvrent la liste des options | Poire 1 150 $ ; platine 1 750 $ | OK (forme, métal) |
| iPhone : barre fixe « Add Center Stone » | bouton | Reste en bas de l'écran après défilement | — | Visible, non cliqué |
| **Listes de pierres [R3]** | | | | |
| Natural Diamonds, Lab Diamonds, Gemstones & Moissanite | 3 liens | 3 listes ; barre d'étapes conservée | — | OK [P1] |
| Colorless / Fancy Diamonds | bascule | 27 971 pierres, puis 966 de couleur (filtres couleur ×10, intensité ×4) | — | OK [P1] |
| Forme (11) | boutons | Round 7 132 ; Oval 5 904 | — | OK pour 2 [P1] ; autres non testés |
| Color J à D ; Clarity SI1 à FL | 2 échelles | Adresse `colorGrades=J`, `clarityGrades=SI1` | — | Clic OK [P1] ; nombre de résultats non relevé |
| Cut : Good, Very Good, Excellent | boutons | — | — | Non concluant (clic du script échoué) [P1] |
| Carat (2 champs, curseur 0,5 à 11) | curseur | `caratMin=…` ; valeur par défaut 3 ct en synthétique | — | OK [P1] |
| Budget (300 à 1 000 000 $) | 2 champs | — | — | Non testé |
| Advanced quality specs | panneau | Symmetry, Polish (3 niveaux), Certificate (IGI, GIA) | — | Ouverture OK [P1] ; choix non testés |
| Reset ; Load More | bouton, lien | Retour à 27 971 ; 14 puis 28 pierres | — | OK [P1] |
| Tri « Price: Low-to-high » | liste | — | — | Non testé |
| Carte de pierre | lien | Photo détourée, pas de vidéo au survol ; prix barré et prix avec code | — | OK [P1] |
| « Find Me a Diamond » (liste des naturels) | bouton | — | — | Non testé |
| Gemstone : Moissanite, Sapphire, Emerald ; forme (9) ; Carat ; Budget | filtres | Relevés | — | Non testés |
| « Quick Look » (monture, barre d'étapes) | bouton | Fenêtre récapitulative, « View Product », « Change » | — | OK [P1] |
| **Fiche pierre [R4]** | | | | |
| Vue 360° de la pierre | canvas | Glisser fait tourner la pierre | — | OK [P1] |
| View Certificate | lien | `igi.org/verify-your-report?r=781606772` | — | Relevé, non ouvert |
| Product Overview, Diamond Details, Return Policy | 3 accordéons | Fluorescence, poli, symétrie, table, profondeur | — | OK [P1] |
| Complete Your Ring | bouton | Passe à l'étape 3 | — | OK [P1] |
| **Bague complète [R5]** | | | | |
| Change, View Details (monture, pierre) ; Clear ; Quick Look ×2 | liens | Retour aux étapes | — | Relevés, non suivis |
| Add Extras ; Add Engraving | bouton, champ | Mêmes fenêtres qu'à l'étape 1 | — | Extras : ouverture OK [P1] |
| Select Ring Size | liste | 33 tailles, de 3 à 11 par quarts ; ajoute `&ringSize=` | Aucun (6 et 10,5) | OK [P1] |
| Find My Ring Size | lien | Fenêtre : « Convert Size From Other Units » ou « Measure Your Finger » (vidéo, pas à pas) | — | Ouverture OK [P1] ; sous-écrans non testés |
| Meet With Our Consultant : Virtual, In-Person, Book Now | bascule, lien | Vers `/book-appointment` | — | Non concluant [P1] ; page lue |
| Add to Cart | bouton | Actif | — | Non actionné (robots) |
| **Pages de service** | | | | |
| `/book-appointment` : Book Appointment ×2 | liens | Visio de 30 min, ou salle de New York 45 min | — | Lu ; prise de rendez-vous non ouverte (formulaire) |
| `/quiz` : « Let's Start » | bouton | Une page : style, métal, origine, forme, budget (2 000, 3 500, 5 000 $ ou saisie), « Find your match » | — | Ouverture OK ; non rempli |
| `/faq` : 10 onglets, 72 questions | onglets, accordéons | Texte lu en entier [R6] | — | OK |

## Options disponibles

- **Formes de monture** (9) : Round, Oval, Pear, Cushion, Elongated Cushion, Emerald, Radiant, Princess, Marquise [V R2]. Listes de pierres : 11 formes (plus Heart et Asscher) [P1 R3].
- **Métaux** (7) : or 14 k blanc, jaune, rose ; or 18 k blanc, jaune, rose ; platine [V R2]. Or blanc toujours rhodié [V R6].
- **Styles de la liste** (9) : Solitaire, Nature, Pave, Halo, Hidden Halo, Side Stones, Three Stone, Vintage, Bezel [V R1].
- **Extras** (18) [V R2] : corps 2 mm +200 $, 2,5 mm +400 $, 3 mm +600 $, 3,5 mm +800 $ ; Euro Shank +200 $ ; Tapered +150 $ ; Reverse Tapered +150 $ ; Pave Prongs +350 $ ; Double Prongs +100 $ ; Compass +150 $ ;
  Tulip Basket +250 $ ; halo caché en diamants roses ou jaunes +350 $ ; Bezel +250 $ ; Two-Tone +200 $ ; Remove Hidden Halo +0 $ ; Low Profile +150 $ ; East West +150 $. En plus : gravure vocale.
- **Gravure** : 15 caractères au plus, 2 polices, +50 $ [V R2]. La FAQ dit 20 caractères [V R6].
- **Tailles de doigt** : 3 à 11 (US) par quarts de taille, 33 valeurs [P1 R5].
- **Pierres** : diamants naturels, diamants synthétiques (CVD et HPHT), incolores D à J, pureté SI1 à FL, ou de couleur ; moissanite, saphir et émeraude « Lab Created » [P1 R3][V R6].
- **Carats** : curseur de 0,5 à 11 ct ; la liste des synthétiques s'ouvre à 3 ct et plus [P1 R3]. Certificats : IGI ou GIA [P1 R3][V R6].
- **Vues** : photos (fond blanc, bague portée), 360° en images, 8 vidéos, zoom, pierre à l'échelle sur une main, essayage Tangiblee sur mobile [V R2]. Pas de 3D temps réel : canvas 2D, ni WebGL ni three.js [V R2]. Pas d'AR native relevée.

## Prix, délais, retours, garanties

- **Affichage du prix** : prix de la monture seule, puis total monture + pierre à l'étape 3 [V R2][P1 R5]. Chaque option montre son supplément avant le clic ; le total et la mensualité se recalculent aussitôt [V R2].
- **Pas de décomposition du prix** (métal, façon, marge). Seule la composition de l'alliage est donnée : « 58.5% Gold, 6.1% Silver, 4.7% Zinc, 30.5% Copper » [V R2].
- **Exemple complet** [P1 R5] : The Kamellie 14 k (1 150 $) + synthétique ovale 3,04 ct F VVS2 IGI (2 020 $, ou 1 212 $ avec le code BIG40) = 3 170 $, affiché 2 362 $ « Offer ends Nov 17 ».
- **Repères de pierres** [P1 R3] : naturel ovale 0,51 ct J VVS1 à 500 $ ; moissanite, saphir ou émeraude de laboratoire 1 ct à 500 $ (300 $ avec le code).
- **Prix selon le pays** [V R14] : la même monture vaut 1 150 $ aux États-Unis et en France (`/en-FR/`, en dollars), 1 357 $ en Israël (`/en-IL/`, en dollars). 1 357 = 1 150 × 1,18 : la TVA israélienne de 18 % semble incluse [I].
- **Mensualités** : « Pay in 12 interest-free installments of $95.83 » sous le bouton d'achat [V R2]. Shop Pay : 4 versements sans intérêt de 400 à 999 $, 12 mois sans intérêt de 1 000 à 17 500 $, 18 ou 24 mois avec intérêts [P1 R2].
- **Autres paiements** : Klarna, virement, plan maison en 3 versements au plus (fabrication lancée à 50 % payés) [V R6]. Icônes du pied de page : Visa, Mastercard, American Express, Diners, PayPal, Klarna [V R2].
- **Délai** : date calculée « Receive as soon as Mon, Dec 14 », soit 29 jours après le 15/11 [V R2]. Textes : « about 3 weeks », « 15-20 business days », « 3-4 weeks », platine « up to 4 weeks » [V R2][R6][R8].
- **Livraison** : gratuite dans le monde, FedEx Overnight (États-Unis) ou International Priority, assurée, signature d'un adulte, colis sans marque, pas de boîte postale [V R6][R8]. Frais réels au panier : non vus.
- **Retours** : 30 jours, étiquette prépayée et assurée, remboursement sous 14 jours ouvrés, échange possible, annulation possible pendant la fabrication [V R6].
- **Exception du sur mesure** [V R6][R7] : une bague construite sur le site (modèle, pierre, extras) est « non-custom », donc reprise. Sont exclus : pièces gravées, demandes passées par le support, modèles hors site.
- **Garantie à vie** [V R10] : défauts de fabrication (remboursement ou réparation), rhodiage, resserrage des griffes, nettoyage, repolissage. Exclus : usure, pierres perdues par griffes tordues, intervention d'un autre bijoutier. Réservée à l'acheteur d'origine.
- **Mise à taille** : la première est offerte pendant un an ; 2 à 3 semaines [V R6].
- **Certificats et documents** : rapport GIA ou IGI (papier ou numérique), expertise de valeur gratuite pour l'assurance, écrin [V R6][R9]. Keyzar n'assure pas les bijoux [V R6].

## Confiance et service

- **Libellé du synthétique** : « Lab Diamonds », « Lab Diamond », « Lab Grown » (quiz) ; « Lab Created Emerald / Sapphire » [V R2][R12][P1 R3].
- **Langues** : anglais seul (`lang="en-US"`, `en-FR`, `en-IL`) [V R14]. **Devises** : 117 dans le sélecteur ; la FAQ n'en cite que 5 (USD, CAD, AUD, EUR, GBP) [V R2][R6].
- **Avis** : « 1,686 reviews » Google et Trustpilot réunis, page `/reviews` avec liens vers chaque avis [V R13]. Trustpilot : 4,9 sur 5, 1 382 avis, 92 % à 5 étoiles, 100 % des avis négatifs avec réponse [R16, sec., copie du 18/07/2026].
- **Contact** : chat Kustomer, téléphone (212) 203-9900, e-mail, formulaire ; pas de commande par téléphone [V R6]. Pas de WhatsApp relevé [V R1][R2].
- **Rendez-vous** : visio de 30 min (tous les jours, 9 h à 17 h) ; salle au 1 Rockefeller Plaza, 45 min, lundi à jeudi 9 h à 17 h, vendredi 9 h à 16 h [V R11].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier par commande. Bloc « Our work… hand-craft it individually » avec lien vers un billet, témoignages « Our Couples » [V R2].
- **Suivi de commande** : pas d'outil ; il faut écrire au support [V R6]. Un client le regrette : « I wish they had a process where you can put in your order number » [V R13].
- **Bijoux et pierres du client** : refusés (« we do not accept jewelry that was made by other companies », « unable to receive outside materials and stones ») [V R6].
- **Éthique** : Kimberley Process, or recyclé « where possible » [V R9]. **Outils tiers appelés par la page** : Tangiblee, Kustomer, Klaviyo, Postscript, Clarity, Shop Pay, Impact [V R2].

## Temps d'apparition du visuel principal

| Page | Ordinateur | iPhone 13 émulé |
|---|---|---|
| Liste des montures [R1] | 1,7 à 2,0 s (3 mesures ; première image de carte) | 1,2 s (1 mesure) |
| Fiche monture [R2] | 1,1 à 1,5 s (4 mesures ; première photo) | 1,1 à 1,7 s (3 mesures ; première image du 360°) |
| Fiche pierre [R4] | 0,5 s après le clic (navigation interne) [P1] | Non mesuré |

Mesure : plus grand élément affiché (LCP) dans Chromium sans tête, cache vide, sans bridage de réseau. À ne pas comparer à un vrai téléphone en 4G.

## Points forts à retenir pour JR Diamond

1. **Date de réception et mensualité sous le bouton d'achat.** Preuve : « Receive as soon as Mon, Dec 14 » et « 12 interest-free installments of $95.83 », recalculés à chaque option [V R2].
2. **Chaque option annonce son prix avant le clic.** Preuve : 18 extras de +0 à +800 $, gravure « (+$50) », 18 k +300 $, platine +600 $ [V R2].
3. **L'image suit la forme et le métal.** Preuve : 9 formes × 3 couleurs, photos et 360° remplacés à chaque choix [V R2]. Limite : les extras ne changent pas l'image. La 3D temps réel de JR Diamond peut faire mieux avec un seul modèle [I].
4. **Honnêteté sur ce qui est montré.** Preuve : « Shown with 2 ct » sur chaque image, « The setting in the image is for reference only » sur le guide des carats [V R2].
5. **Fiche mobile pensée pour le pouce.** Preuve : 360° en premier onglet, options repliées, bouton d'achat fixe en bas [V R2].
6. **Essayage sans AR lourde.** Preuve : widget Tangiblee, bague posée sur 4 photos de modèles, comparaison avec une règle de 10 cm [V R2].
7. **Composition de l'alliage affichée.** Preuve : bloc « Know Your Setting » [V R2]. JR Diamond peut ajouter le poids du métal.
8. **La bague configurée reste reprise 30 jours.** Preuve : définition de « non-custom » dans la FAQ [V R6]. À peser avant de choisir l'exception « fabriqué sur mesure » en Israël.
9. **Prix israélien tout compris.** Preuve : 1 357 $ sur `/en-IL/` [V R14]. C'est un repère direct pour le prix en ₪ d'un solitaire 14 k.
10. **Ce que Keyzar ne fait pas.** Preuve : pas de suivi de fabrication, bijoux et pierres du client refusés [V R6]. Ce sont deux promesses de JR Diamond (photos d'atelier, bijou de famille).

## Défauts observés

- **Textes contradictoires** [V] : retour compté « from receiving your item » (fiche, FAQ) ou « from the shipping confirmation date » (Refund Policy) [R2][R6][R7].
- Douane : « duties and taxes are included » (fiche) contre « customs charges you have to pay » (Shipping Policy) [R2][R8]. Gravure : 15 caractères (fiche) contre 20 (FAQ) [R2][R6].
- Prêt à expédier : 1 jour ouvré [R9] contre 4 [R8]. La FAQ cite encore « SplitIt » [R6]. Platine annoncé plus long, mais même date affichée [V R2][R6].
- **Prix promotionnel affiché comme acquis** : total 2 362 $ alors que le code BIG40 se saisit au paiement ; compteur « 211 claimed / 350 total » dans la liste [P1 R3][R5].
- **Les extras ne modifient pas l'image** : avec « 2mm Band », les photos restent celles du corps de 1,5 mm [P1 R2].
- **Essayage absent sur ordinateur** ; sur iPhone, l'image « On Model » était vide à 3,5 s et chargée à 9 s [V R2].
- **Pastille de métal d'une carte** : l'image change, l'attribut du lien reste sur l'or jaune [V R1] ; effet réel au clic non vérifié [I].
- **France en dollars** alors que la FAQ annonce l'euro [V R14][R6]. Site en anglais seulement.
- **Limitation de débit** : deux pages ouvertes à quelques secondes d'écart ont reçu un 429 « Just a moment… » [P1 R1]. Sans effet aux essais suivants, espacés.

## Limites de l'audit

- **Panier non ouvert** (`robots.txt`). Frais de livraison, taxes, moyens de paiement réels et délai au panier : non vus. Les moyens de paiement viennent de la FAQ et du pied de page.
- **Premier passage** : il a atteint la fiche pierre, l'étape 3 et les filtres de pierres par la navigation interne du site. Ces écrans appellent des adresses que `robots.txt` interdit aux robots (`/api/`, `/products/stones/*_loosediamond_`, `/complete-product`, `shapes=`, `caratMin=`…).
  Le test du curseur de carats a aussi émis une trentaine de requêtes rapprochées. Le second passage n'a rien rejoué : les constats [P1] ne sont pas revérifiés. À la session principale de décider s'ils sont conservés.
- **Second passage** : `/api/` bloqué, donc avis, favoris et produits complémentaires non chargés ; filtres de la liste des montures non testés.
- **Non testés** : gravure vocale (microphone), « On Me » (caméra), formulaires (Drop a Hint, rendez-vous, newsletter, quiz), chat, recherche, compte, favoris, liens externes (IGI, Google, réseaux sociaux).
- **Nature des images** : rendu ou photo, non établi ; les noms de fichiers systématiques (`…stone-2ct-oval-lab-grown-diamond-white-background`) suggèrent des rendus [I]. Source des images 360° des pierres non identifiée.
- iPhone émulé dans Chromium, pas Safari. Prix en livres (`/en-GB/`) non relevé. Trustpilot lu sur une copie du 18/07/2026 ; les crédits Firecrawl étaient épuisés.

## Sources (15/11/2026)

- [R1] https://www.keyzarjewelry.com/collections/engagement-ring-settings
- [R2] https://keyzarjewelry.com/products/the-kamellie-engagement-ring-setting-solitaire?Material=14k+Yellow+Gold&Center+Stone+Shape=Oval
- [R3] https://keyzarjewelry.com/collections/lab-diamonds · https://keyzarjewelry.com/collections/natural-diamonds · https://keyzarjewelry.com/collections/moissanite-and-gemstones
- [R4] https://keyzarjewelry.com/products/stones/aslb_lab_loosediamond_oval_03-04_vvs2_f_93b18f33c700 (premier passage)
- [R5] https://keyzarjewelry.com/complete-product?flow=engagement_ring&setting=44802681864243&stone=44776398356531&first=setting (premier passage)
- [R6] https://keyzarjewelry.com/faq · [R7] https://keyzarjewelry.com/policies/refund-policy · [R8] https://keyzarjewelry.com/policies/shipping-policy
- [R9] https://keyzarjewelry.com/buyer-information · [R10] https://keyzarjewelry.com/lifetime-warranty · [R11] https://keyzarjewelry.com/book-appointment
- [R12] https://keyzarjewelry.com/quiz · [R13] https://keyzarjewelry.com/reviews · [R17] https://keyzarjewelry.com/about-us
- [R14] https://keyzarjewelry.com/en-IL/products/the-kamellie-engagement-ring-setting-solitaire?Material=14k+Yellow+Gold&Center+Stone+Shape=Oval (même adresse en `/en-FR/` et `/en-GB/`)
- [R15] https://keyzarjewelry.com/robots.txt · [R16, sec.] https://www.trustpilot.com/review/www.keyzarjewelry.com
- Scripts, relevés JSON et 20 captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/keyzar/`
