# Audit : Amidon Jewelers (West Lebanon, New Hampshire)

- **Site** : Amidon Jewelers, https://www.amidonjewelers.com/ (boutique Shopify ; constructeur « Design Your Own Engagement Ring » fourni par **Caratwise**)
- **Page de départ auditée** : https://www.amidonjewelers.com/pages/design-your-own-engagement-ring (étapes `#/ring`, `#/diamond`, `#/summary`)
- **Date** : 15/11/2026 (ordre de mission) ; exécution le 25/11/2026. Ce rapport remplace la fiche « bloqué » du 24/11.
- **Appareils** : Chromium ordinateur (1366 × 900) et affichage iPhone 13 (Playwright).
- **Statut : partiel.** Le site est lisible (robots.txt en HTTP 200, `Allow: /`). Parcours exploré jusqu'à la page récapitulative (prix total, taille de doigt). Le bouton « Finalise Design » (ajout au panier par `/cart/add`, interdit par `Disallow: /cart/`) n'a pas été cliqué ; la page `/cart` (autorisée) n'a été vue que vide.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifiées) |
| --- | --- |
| Accueil | Menu Engagement & Wedding : bagues synthétiques, « Design Your Own », alliances, guide, financement, diamants. Deux entrées dans le constructeur : « Explore settings » (`#/ring`) ou « Search diamonds » (`#/diamond?dia_origin=LGN…`, synthétique, 2 ct, rond) |
| 1. Choose Settings (`#/ring`) | 247 montures synthétiques ; 14 familles en bandeau ; filtres forme, taille, type, métal, prix, filtres avancés ; tri |
| Fiche monture (`#/ring/RP407-celeste…`) | Vue 360° / « Experience », type de diamant, forme, taille, métal, métal de la couronne, gravure, bague assortie, personnalisation avancée, « Choose This Setting », « Save Your Design », « Product Details » |
| 2. Choose Diamond (`#/diamond`) | 6 886 diamants synthétiques (rond, 1,5–2,5 ct) ou 1 206 naturels ; filtres ; fiche de pierre (4C, certificat, spécifications) ; « Select This Diamond » |
| 3. Complete Ring (`#/summary`) | Prix détaillé (pierre + monture), taille de doigt 4 à 9, « Finalise Design », « Save Your Design » |
| Ordre inversé possible | Départ par le diamant, puis choix de la monture (« Choose Diamond » puis « Choose Settings ») ; vérifié : l'ordre des étapes 1 et 2 s'échange |

## Contrôles vérifiés

Le constructeur est dans un shadow DOM (`#caratwise-root`) : `controls.cjs` ne voit que l'habillage Shopify (211 contrôles à l'accueil, 35 sur la page du constructeur en iPhone) ; le détail vient de scripts Playwright.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Forme (10 boutons : Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion), liste de montures | bouton | filtre les montures compatibles : Pear 214, Marquise 237, Radiant/Princess/Emerald 217, Elongated Cushion 218, Heart 27, Square Cushion 8, Round/Oval 247 | aucun | OK [V] |
| Forme, fiche monture | bouton | change la forme de la pierre dans l'adresse (`dia_shape=MAR`) ; Oval sans effet sur l'adresse | prix de la monture inchangé (1 975 $) | partiel [V] |
| Taille de pierre, liste (0,7 / 1 / 1,5 / 2 / 3 / 5 ct) | bouton | filtre la liste | aucun | OK [V] |
| Taille de pierre, fiche (1, 2, 3, 5 ct) | bouton | 1 ct et 2 ct changent l'adresse ; 3 ct et 5 ct sans effet sur la monture Celeste | monture inchangée (1 975 $) | partiel [V] |
| Type de diamant (Natural / Lab Grown), liste de montures | bouton | ouvre l'option ; Lab Grown préchoisi | aucun | OK [V] |
| Type de diamant, liste des pierres | bouton | Natural : 1 206 pierres (ex. 1,51 ct rond K VS2 à 5 856 $) ; Lab Grown : 6 886 (ex. 1,75 ct rond F VS1 à 1 321 $) | oui, très fort | OK [V] |
| Métal, liste (14 K ×3 couleurs, 18 K ×3, PT) | bouton | filtre | aucun | OK [V] |
| Métal, fiche monture Celeste | bouton | 14 K blanc/jaune/rose 1 975 $ ; 18 K blanc 1 975 $ ; 18 K jaune et rose 2 807 $ ; platine 2 807 $ | oui | OK [V] ; 18 K blanc au prix du 14 K : écart à signaler |
| Métal de la couronne (mêmes 7 choix) | bouton | le nom de la monture reste « in 14K White Gold » ; seul le platine change le prix | PT : 2 011 $ (+36 $) | OK [V] |
| Bague assortie (No Band / Single) | bouton | « Single » ajoute « with Wedding Band » et un choix de métal de l'alliance | 1 975 → 3 152 $ (+1 177 $) | OK [V] |
| Gravure (champ, max 18 caractères, 3 polices « Aa ») | champ + bouton | saisie « AB » acceptée | aucun changement de prix | OK [V] ; rendu sur l'image non vérifié |
| Prix (curseur de 1 175 à 4 946 $) | curseur | affiché ; borne non modifiée | — | affiché seulement [V] |
| Filtres avancés, montures : Setting Style (21), Setting Type (7), Head Style (11), Setting Width (8) | cases | listes de valeurs avec effectifs, détaillées plus bas | aucun | OK [V] (valeurs lues, filtrage non testé) |
| Tri (« Best Sellers ») | bouton | menu non lu : options non relevées | — | non testé (menu inaccessible au script) |
| Lab Certification (GIA, IGI, GCAL), liste des pierres | bouton | trois logos affichés | — | non testé (filtrage) |
| Filtres avancés, pierres : prix, couleur D–M, pureté I1–FL, cut, L:W, polish, symétrie, profondeur | curseurs / cases | lus dans le panneau ; non actionnés un à un | — | lus [V], non testés |
| Cartes de diamant | bouton | ouvre la fiche : onglets 4C's, GCAL Certification, Specifications, « Diamond 360° », plein écran | prix de la pierre affiché | OK [V] |
| Fiche de pierre, onglet GCAL Certification | onglet | contenu non ouvert (domaine tiers non contrôlé) | — | non testé |
| View Certificate | lien | pointe vers `https://loupe.diam.me/certificate/certificate-images/XTRcJKHHNGGJN.png` | — | non ouvert (domaine tiers sans contrôle robots) |
| Select This Diamond | bouton | passe à la monture, adresse `#/ring?iid=…` | pierre incluse au total | OK [V] |
| Choose This Setting | bouton | passe aux pierres ; recherche pré-filtrée (1,5–2,5 ct, rond, synthétique, couleur et pureté de départ) | — | OK [V] |
| Change / Edit / View (bandeau d'étapes) | bouton | revient sur l'étape | — | présent [V] ; non actionné un à un |
| Taille de doigt (liste 4 à 9 par demi-taille, 11 choix) | liste | obligatoire avant « Finalise Design » (affichage « Select ») | aucun | OK [V] |
| Finalise Design • 3 296 $ | bouton | ajoute au panier (supposé) | — | NON cliqué : `/cart/add` interdit par robots.txt [S] |
| Save Your Design | bouton | ouvre « Save this design : no rush… we'll send you a link » (champ courriel) | — | ouvert, formulaire non rempli [V] |
| Personnalisation avancée | bouton | n'a rien développé dans le panneau ; seule la fenêtre « Save Your Design » est apparue | — | effet non établi [V] |
| 360° Experience / Drag to Rotate / Enter fullscreen | bouton | zone 360° de la fiche ; la capture d'écran échoue parfois (page lourde) ; rotation non filmée | — | présent, rotation non vérifiée |
| Vignettes (Previous / Next thumbnails) | bouton | galerie de la fiche monture | — | présent [V] |
| Pastilles couleur sur les cartes (white, yellow, rose) | bouton | change l'image de la carte | prix « Starting at » inchangé | présent [V] |
| Pagination 1 à 7, …, 345, Previous / Next page | bouton | 20 pierres par page | — | présent [V] |
| « Load All Designs » (montures) | bouton | charge le reste de la liste ; 40 montures par appel | — | présent [V] |
| Wishlist, recherche, compte, panier (barre Shopify) | lien / bouton | liens `/apps/page/wishlist`, `/cart`, connexion | — | liens présents [V] ; compte non ouvert (`/account` interdit) |
| Fenêtre « 10 % Off Your First Order » | modale | s'ouvre après quelques secondes et revient sur chaque étape ; « No thanks » la ferme | — | OK, gênante [V] |
| TEXT US (chat SMS) | bouton | ouvre une zone de message ; non ouverte | — | non testé (règle : pas de chat) |
| Menu d'accessibilité (UserWay) | bouton | présent à gauche | — | présent [V] |
| Appel : tel:603-795-7378 (accueil) | lien | numéro d'accueil | — | présent [V] |

## Options disponibles

- **Formes (10)** : rond, poire, ovale, marquise, radiant, princesse, émeraude, coussin allongé, cœur, coussin carré. Marquise : 237 montures sur 247 [V].
- **Familles de montures (14, bandeau)** : Studio, Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique [V].
- **Setting Style (21)** : 3/4 Eternity, Bold, Braided, Bypass, Cathedral (148), Comfort Fit (242), Criss-cross, Fancy Side Stones, Filigree, Knife Edge, Modern, Multi Row, Pinch, Plain, Rope, Split Shank, Straight Band, Tapered Baguette, Tapered Band, Trellis, Vintage Engraving [V].
- **Setting Type (7)** : Beadset, Channel, Flush, Micro Pave (88), Micro Prong, Pave, Prong [V].
- **Head Style (11)** : 4 Prong (147), 6 Prong, Basket, Bezel Set, Channel Set, Double Halo, Half Bezel, Halo (43), Hidden Halo (61), Integrated, Trellis [V].
- **Setting Width** : 1,60–1,79 mm à « 3,00 and above » (8 tranches) [V].
- **Métaux** : or 14 K (blanc, jaune, rose), or 18 K (blanc, jaune, rose), platine ; couronne dans les mêmes métaux [V].
- **Tailles de pierre** : filtre 0,7 / 1 / 1,5 / 2 / 3 / 5 ct ; curseur de 1,5 à 2,5 ct à l'étape pierre [V].
- **Origine** : naturel ou synthétique (« Lab Grown ») ; synthétique par défaut [V].
- **Laboratoires** : GIA, IGI, GCAL en filtre ; la pierre vue (1,75 ct) porte un certificat **GCAL** [V].
- **Filtres des pierres** : prix, couleur D–M, pureté I1–FL, cut (Good à Excellent), L:W, polish, symétrie, profondeur (%) [V] ; la liste est plus longue que ce qui a été relevé.
- **Taille de doigt** : 4, 4,5, 5, 5,5, 6, 6,5, 7, 7,5, 8, 8,5, 9 [V].
- **Vues** : photo, 360° (« Experience »), « Diamond 360° », plein écran. Pas de réalité augmentée, pas de « sur la main » dans le parcours ; la carte de la première monture montre une photo portée [V].

## Prix, délais, retours, garanties

- **Prix** : en dollars, « Starting at » en liste (de 1 090 $ à plus de 3 000 $ pour la monture seule) ; la fiche écrit « (Setting Only) ». Le récapitulatif affiche « Your Engagement Ring 3 296 $ (Exclusive tax) » : pierre 1 321 $ + monture 1 975 $, ligne par ligne, avec « Edit » et « More » [V]. Aucune décomposition en matière, façon et marge. Mention « Diamond price may change when finalize your design » [V].
- **Taxe** : bandeau « Enjoy Tax Free Shopping » (New Hampshire sans taxe de vente) [V].
- **Délai** : le constructeur n'annonce aucun délai de fabrication. Page livraison : « Some orders may take up to 10 days to ship depending on item availability or manufacturing time » (https://www.amidonjewelers.com/pages/shipping) [V].
- **Livraison** : « Free insured shipping » sur chaque commande aux États-Unis ; mais le même texte liste 35 $ (FedEx Ground, 300 à 999,99 $), 45 $ (2 jours), 60 $ (nuit) et nuit gratuite au-dessus de 1 000 $ ; signature d'un adulte requise ; retrait en boutique [V]. Texte en contradiction interne sur les frais.
- **Retours** (https://www.amidonjewelers.com/pages/returns-policy) : 30 jours ; remboursement sous 15 jours, avoir de 16 à 30 jours ; **exclus : articles « special ordered », portés, gravés, redimensionnés** ; numéro RMA par téléphone, formulaire, envoi assuré ; frais de port, assurance et paiement retenus [V]. Le sur mesure et la gravure sont donc exclus.
- **Garanties** (https://www.amidonjewelers.com/pages/price-guarantee et `/pages/warranty`) : plan « Platinum Care » (entretien à vie, griffes, rhodiage, remise à taille après le premier ajustement, pierre centrale), assurance perte et vol un an offerte, première mise à taille offerte (« when possible », sauf bague commandée à la taille), reprise à vie du diamant à valeur d'achat contre un article valant au moins le double, nettoyage gratuit à vie, réparations garanties 12 mois [V].
- **Financement** (https://www.amidonjewelers.com/pages/financing) : Affirm (0 à 36 % TAEG, 3 à 36 mois selon le panier) et Synchrony, mise en réserve (layaway) [V].
- **Moyens de paiement** : icônes « Payment methods » en pied de page ; non détaillés dans le texte [V]. Le panier vide ne les affiche pas.

## Confiance et service

- **Certificats** : GCAL pour la pierre vue ; filtre GIA, IGI, GCAL ; lien « View Certificate » vers un fichier image chez un tiers (loupe.diam.me) [V]. Page d'information sur les laboratoires (GIA, GCAL, IGI, AGS, EGL, HRD) [V].
- **Libellé du synthétique** : « Lab Grown ». La page `lab-grown-diamond-facts` dit « real diamonds », « They are diamonds. » [V].
- **Langues, devises** : anglais seul ; dollar américain (`currency=USD` dans les appels) [V].
- **Avis clients** : bloc « REAL STORIES. REAL SPARKLE. » de la fiche produit avec trois témoignages : l'un parle de « premium Australian brands » et de « a-beauty goodies », un autre d'un bracelet sur une page de bague. Texte de modèle non remplacé [V].
- **Preuves de fabrication** : page `custom-design` : « Consult, Design, Create, Cherish », « modern design technology… see the direction of your piece before it is created » ; formulaire (non rempli). Aucune photo ni vidéo d'atelier, aucun suivi de fabrication dans le constructeur [V]. Suivi de commande : page « order status » [V].
- **Service** : téléphone, SMS « Text us », « Request viewing » sur les fiches, rendez-vous en boutique ; trois numéros différents lus sur le site (603-795-7378, 603-207-3747, 603-420-2735) [V].
- **Aucune** vidéo de pierre vue dans le parcours (« Diamond 360° » et images), aucune bague tenue en main sur le constructeur.

## Points forts à retenir pour JR Diamond

1. **Prix visible à chaque étape** : « Starting at » par monture, prix de chaque pierre, total ligne par ligne au récapitulatif (3 296 $). Preuve : récapitulatif `#/summary` [V]. Comble l'écart « Sur devis ».
2. **Configuration dans l'adresse** : forme, taille, métaux et bague assortie sont dans le fragment (`dia_shape=MAR&dia_size=200&pri_comp_metal=14-WG…`) ; un lien reprend le choix. Preuve : adresses relevées [V].
3. **Ordre libre** : départ par la pierre ou par la monture, avec « Change » dans le bandeau. Preuve : deux entrées de l'accueil [V].
4. **Comparaison naturel / synthétique en un clic** : même recherche, 1 206 pierres naturelles contre 6 886 synthétiques, 5 856 $ contre 1 321 $ pour des pierres voisines. Preuve : bascule Natural [V].
5. **Ajout d'une alliance assortie** avec son prix (+1 177 $), dans la même fiche. Preuve : « Single » [V].
6. **Gravure** dès la fiche (18 caractères, 3 polices), sans surcoût affiché. Preuve : champ saisi [V].
7. **Garanties lisibles** : reprise du diamant, première mise à taille, nettoyage à vie, entretien. Preuve : page price-guarantee [V].
8. **Rapidité** : liste de montures visible en 4,8 s (iPhone 4,8 s aussi) puis fiche en 1 s sur iPhone ; toute la liste est chargée par 40 [V].
9. **Retour sur le sur mesure explicite** : « special ordered… engraved » exclus, à comparer à la question du sur mesure en Israël [V].

## Défauts observés

- **Ni vidéo de pierre ni preuve de fabrication** ; pas de rendu issu du fichier de l'atelier : la 3D vient d'un fournisseur (Caratwise) [V/I].
- **Prix incohérent** : 18 K blanc au prix du 14 K (1 975 $) alors que 18 K jaune ou rose coûte 2 807 $ ; la couronne affichée « 14K White Gold » même quand on choisit un autre métal ; avertissement « le prix du diamant peut changer » [V].
- **Options sans effet** : taille 3 ct et 5 ct, forme Ovale et gravure sans changement visible ni de prix ; personnalisation avancée sans contenu [V].
- **Promesse de livraison contradictoire** (gratuite / 35 à 60 $) et délai « up to 10 days » sans lien avec la fabrication [V].
- **Fiche produit avec témoignages de modèle** (marques australiennes, bracelet) et titre qui ne correspond pas au produit (titre « 14K White Gold Diamond Engagement Ring 2 450 $ », description d'un autre article, article épuisé) [V].
- **Fenêtre de remise de 10 %** qui s'ouvre au-dessus du constructeur à chaque étape et masque les filtres [V].
- **Premier chargement lent par adresse directe** : fiche monture en 17,6 s, diamant à 32 s après « Choose This Setting » sous forte charge [V, une mesure].
- **Retours** : exclusion de toute gravure et de tout sur mesure ; première mise à taille offerte seulement « quand c’est possible » [V].
- **Trois numéros de téléphone** sur le site [V].

## Limites de l'audit

- **Panier non atteint** : « Finalise Design » non cliqué (`/cart/add` interdit par le robots.txt d'Amidon) ; aucun récapitulatif de panier, frais de livraison finaux, moyens de paiement détaillés ni délai de panier. Le panier vide a seulement été lu.
- **Mesure** : premier visuel du constructeur à 4,8 s sur ordinateur et 4,8 s en iPhone (première carte « Starting at » ; `waitForSelector`), une seule mesure par appareil, via le proxy de l'agent ; le temps de chargement d'une fiche en lien direct est très variable (de 1 à 18 s). Le premier rendu 3D n'a pas été chronométré (zone 360°, captures qui échouent par moment).
- **Non testés** : tri, filtre GIA/IGI/GCAL, chaque filtre avancé pris isolément, effet de la gravure sur l'image, rotation 360°, onglet GCAL et lien de certificat (domaines tiers : `assets.caratwise.com` et `release.caratwise.com` répondent 403 au robots.txt ; leurs scripts se chargent à l'ouverture de la page, ce qui n'est pas un écart ; `storeapi.caratwise.com` n'a pas de robots.txt et reçoit les appels du constructeur), compte, chat SMS, rendez-vous.
- Lien d'accueil « Search diamonds » pointe vers le domaine `amidonjewelers.myshopify.com` : non suivi.
- Aucune donnée personnelle saisie ; aucun formulaire envoyé.

## Sources

- https://www.amidonjewelers.com/ et https://www.amidonjewelers.com/robots.txt (HTTP 200, `Allow: /` ; `Disallow: /cart/`, `/checkout`, `/account`, `/cart.js`, `/*sort_by*`)
- https://www.amidonjewelers.com/pages/design-your-own-engagement-ring (constructeur Caratwise ; `#/ring`, `#/ring/RP407-celeste…`, `#/diamond`, `#/diamond/XTRcJKHHNGGJN`, `#/summary`)
- https://www.amidonjewelers.com/collections/lab-grown-engagement-rings (70 produits, 2 450 $ et plus)
- https://www.amidonjewelers.com/pages/shipping, `/returns-policy`, `/warranty`, `/price-guarantee`, `/financing`, `/custom-design`, `/diamond-certification`, `/lab-grown-diamond-facts`, `/payment-policy`
- https://www.amidonjewelers.com/cart (vide)
- Captures et scripts : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/amidon/
