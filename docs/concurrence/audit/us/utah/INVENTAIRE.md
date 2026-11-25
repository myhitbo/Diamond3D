# Utah : inventaire des joailliers locaux qui vendent en ligne

Recensement du 25 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition en Utah et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales (Kay, Jared, Shane Co.), les grands magasins et les grandes maisons sont exclus.

Méthode : repérage par recherche web générique (Parallel Search), puis lecture des pages comme un visiteur ordinaire, avec curl (identité par défaut) et un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée) pour les pages en JavaScript. Le robots.txt de chaque site a été téléchargé avant les pages lues (voir l'écart noté plus bas). Au plus une page toutes les 2 secondes par site. Aucun formulaire envoyé, aucun compte créé, aucune donnée saisie, aucun panier ouvert, aucun chat ni SMS ouvert. Seuls contrôles actionnés : chez Beylora, « Start designing your ring », « Completely custom ring » et « Continue » (étapes 1 et 2 sur 7, sans aller jusqu'aux coordonnées) ; ailleurs, simple affichage des pages. Chaque fait porte une marque :

- **V** (vérifié) : page lue ou contrôle actionné le 25/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

Blocages et protections :

- **McKay Diamonds** (Salt Lake City) : la page d'accueil `https://www.mckaydiamonds.com/` répond **403** à curl, et son robots.txt répond 500 (V). Site marqué **bloqué**, pas de nouvel essai. Hors classement.
- **Morgan Jewelers** (chaîne régionale de l'Utah, City Creek, Sandy, Murray, Orem…) : son robots.txt interdit tout le site à `ClaudeBot`, `GPTBot` et d'autres robots d'IA, et impose `Crawl-delay: 30` aux autres (V). Site marqué **bloqué (robots.txt)** et hors classement. Écart à signaler : la page d'accueil a été téléchargée une fois, dans la même boucle que le robots.txt, avant la lecture de celui-ci ; aucune autre page n'a été demandée et rien de cette page n'est utilisé ici.
- **FORGE Jewelry Works** : son robots.txt nomme `ClaudeBot` et d'autres robots, mais dans le même groupe que `*`, qui n'interdit que des chemins techniques (`/api/`, `/search`, `/account`, `/config`…) (V). Pages lues autorisées.
- **Olive Ave Jewelry** : robots.txt interdit `/shop/stone-selection/` et `/shop/ring-review/` (étapes 2 et 3 du constructeur) (V) ; ces chemins n'ont pas été ouverts.
- **Forever Young** et **Duke's Jewelers** (plateforme Punchmark) : `Crawl-delay: 2` et `*?kw=` interdit (V) ; respectés (le filtre « lab grown » en `?kw=` n'a pas été ouvert).
- Limite technique, pas un blocage : le concepteur 3D JewelerOS s'affiche à l'étape « Step 1 of 4 » chez Forever Young et Old Main Gem Co. dans notre Chromium (V), mais la page de S.E. Needham reste blanche malgré le script JewelerOS chargé (V) ; aucune vue 3D n'a été rendue (navigateur sans carte graphique, S). Aucun canevas WebGL n'a été détecté sur les pages ouvertes (V).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Beylora | Provo (studio sur rendez-vous, The Shops at Riverwoods) | https://beylora.com | https://beylora.com/pages/custom-ring-design | oui (formulaire de création en 7 étapes : vision, diamant, monture, anneau, prix, coordonnées, suite ; pas de 3D) | aucun (Shopify, 200 ; seuls `/checkout`, `/services`, `/admin` interdits) | Le plus proche de la promesse « prix expliqué » : prix complet affiché sur chaque bague (« Full rings from $850 » en promotion, V), « Your exact price appears as soon as you finish » (V), grille publique par carat et métal (I). Synthétique seulement, D VVS, certificat IGI (V). CAO révisée avec le client, livraison « about 20 calendar days after you approve » (V). |
| 2 | Olive Ave Jewelry | American Fork (et Mesa, Arizona) | https://oliveavejewelry.com | https://oliveavejewelry.com/engagement-rings/best-selling?ringBuilderStart=setting | oui (constructeur maison en 3 étapes : monture, pierre, bague complète ; aperçu par carat) | partiel : étapes 2 et 3 interdites par robots.txt (non ouvertes) | Fiche Persephone : « $1,200 (Setting price only) », aperçu de 0,75 à 2,50 ct, largeur d'anneau (+300 $), gravure (+80 $), date de livraison estimée (V). Moissanite et diamant synthétique (I). Livraison offerte aux États-Unis (V). |
| 3 | June Rings | Draper | https://junerings.com | https://junerings.com/collections/shop-all-engagement | oui, par fiche (forme, type de pierre synthétique ou naturelle, couleur de l'or, taille) | aucun (Shopify, 200) | Prix « Starting at $3,100 » et ajout au panier (V). Choix « Certified lab diamond » ou « GIA certified mined diamond » sur la fiche (V). Essayage par **impression 3D** de la bague envoyée à domicile (V). Fabrication « 5-8 weeks », sur commande, sans retour (V). |
| 4 | Forever Young Fine Jewelers | St. George | https://www.foreveryoungfinejewelers.com | https://www.foreveryoungfinejewelers.com/pages/custom-ring-builder | oui (JewelerOS : 4 étapes de départ puis « 3D Ring Designer » ; constructeur d'alliance) | aucun (Punchmark, 200 ; `Crawl-delay: 2` respecté) ; vue 3D non rendue | Parcours en ligne puis pierre choisie en boutique, bague prête « in just a couple of weeks » (V). Bijoux en diamant synthétique au menu (V). |
| 5 | S.E. Needham Jewelers | Logan et Brigham City | https://www.seneedham.com | https://www.seneedham.com/pages/design-your-ring | oui (JewelerOS, « 3D ring designer ») | aucun pour la lecture (Shopify, 200) ; concepteur resté blanc dans notre navigateur | 250 bagues avec prix, par exemple trois pierres or 18 k « from $3,090 » (V). Naturel et synthétique (V). Maison de 1896, cinq générations, orfèvre formé à la Revere Academy (V). Sur-mesure en 4 à 6 semaines (V). |
| 6 | Wilson Diamonds | Provo | https://www.wilsondiamonds.com | https://www.wilsondiamonds.com/custom-ring-builder/ | oui (JewelerOS, « 3D Ring Builder ») | aucun (robots.txt `Allow: /`, 200) | Même outil que les rangs 4, 5 et 8 (script JewelerOS lu, V). Liens « Browse Lab Grown Diamonds » et « Natural Diamonds » (I). Maison de 1974 (I). |
| 7 | Duke's Jewelers | Springville | https://www.dukesjewelers.com | https://www.dukesjewelers.com/ringsettings | oui (constructeur Punchmark : bague, diamant, bague complète) | aucun (200 ; `Crawl-delay: 2` respecté) | 174 montures toutes avec prix, filtres par style et métal (or blanc, jaune, rose, platine) (V). Rubrique « Lab Grown Diamonds » (V). Maison de 1948 (I). |
| 8 | Old Main Gem Co. | Draper | https://oldmaingemco.com | https://oldmaingemco.com/pages/design-your-ring | oui (JewelerOS, 4 étapes puis concepteur 3D) | aucun (Shopify, 200) | Diamants vendus en ligne avec certificat IGI, naturels et synthétiques, par exemple émeraude synthétique 0,83 ct G VS1 à 128 $ (V). Collection sur mesure de 12 bagues, jusqu'à 14 501 $ (V). |
| 9 | FORGE Jewelry Works | Provo | https://www.forgejewelryworks.com | https://www.forgejewelryworks.com/connect | non (séance de création 3D en direct avec un dessinateur, en boutique ou en visio, gratuite) | aucun (Squarespace, 200) | Parcours sur mesure à distance le plus explicite : « In about an hour, you will have a 3D rendering » (V). Naturel, synthétique, moissanite (V). Bague en main « typically within 3 weeks », expédiée hors Utah (V). Pas de prix affiché sur les pages lues (V). |
| 10 | Tresor Jewelers | Salt Lake City (centre et 9th & 9th) | https://www.tresorjewelers.com | https://www.tresorjewelers.com/designyourring | oui, d'un autre type (questionnaire de 2 minutes avec images générées par IA, outil ShowroomPro intégré) | aucun (Wix, 200 ; ShowroomPro autorise `/design`) | Seul outil de création par IA rencontré : « 2-min quiz · AI-powered · 10,000+ designs » (V). Toute bague proposée en naturel, synthétique ou moissanite (V). Aucun prix lu (V). |

Autres candidats lus, non retenus :

- **J. Brooks Jewelers** (Murray et Lehi) : 47 bagues de fiançailles avec prix (marques Tacori, Gabriel & Co. et maison, par exemple « Lucy | 2.59ct Oval » à 5 900 $), collection synthétique, sur-mesure avec rendez-vous vidéo ; pas de constructeur (V). Onzième en cas de besoin.
- **Jonathan's Jewelry** (ex-Payne Anthony, Trolley Square et Cottonwood Heights) : sur-mesure et rendez-vous, rien de configurable repéré (I, extrait de recherche).
- **Sierra-West** (Orem, Sandy, Murray), **Bennion Jewelers** et **O.C. Tanner** (Salt Lake City) : catalogue ou rendez-vous, sans constructeur ni prix de bague repérés (I, extraits de recherche ; aucune de leurs pages n’a été lue directement).

## Détail par acteur

### 1. Beylora (Provo)

- V : studio « by appointment » au 4801 N University Ave, Suite 330 #6, Provo (pied de page).
- V : https://beylora.com/pages/custom-ring-design : « Tell us what you want and see your exact price in seconds » ; consultation vidéo de 30 minutes avec un cofondateur, 50 $ plus taxe déduits du prix ; « We create your CAD design and revise it with you » ; « It arrives about 20 calendar days after you approve ».
- V : contrôles actionnés : étape 1 « Your starting point » (bague entièrement sur mesure, adaptation d'un modèle, photo d'inspiration ; jusqu'à 20 photos) ; étape 2 « Your diamond » : synthétique blanc, synthétique de couleur ou pierre du client ; 11 formes ; carats 1 à 5 ct. Les étapes suivantes (« Your price », puis « Your details ») n'ont pas été atteintes : I, le prix précède la demande de coordonnées d'après l'ordre des étapes.
- V : accueil : « Every center diamond Color D Clarity VVS » ; retours sous 45 jours ; livraison assurée offerte aux États-Unis, au Canada et en Europe ; prix « Complete ring: setting + diamond », par exemple Bellagio « From $1,190 » au lieu de 1 400 $ (promotion BLACKFRIDAY).
- I (extraits de recherche, pages beylora.com) : grille « 18k gold adds $500 and platinum adds $700 », 517 modèles. Le site publie aussi des pages comparant, par nom, ses prix à ceux des joailliers locaux (sources et date de lecture citées).
- Intérêt : marque jeune, prix complet publié et règle de calcul visible, CAO validée par le client. C'est la démarche la plus proche de « prix expliqué ». Pas de 3D ni de fabrication montrée en vidéo dans les pages lues.

### 2. Olive Ave Jewelry (American Fork)

- V : https://oliveavejewelry.com/our-locations : salle d'exposition « Utah - Showroom American Fork », 586 N 900 W Suite 5 ; une seconde à Mesa (Arizona), sur rendez-vous. S : siège en Utah.
- V : fiche https://oliveavejewelry.com/shop/products/persephone?variant=22998 (rendue) : étapes « Select Your Setting / Select Center Stone / Review Completed Ring », « Preview w/ carat size » 0,75 / 1,20 / 1,75 / 2,50 ct, « $1,200 (Setting price only) », « Estimated delivery: Dec 23rd - Dec 30th ».
- V : collection « Best Selling » : montures « Setting Only » de 880 $ à 1 750 $ en or jaune 14 k.
- I : diamants synthétiques et moissanite (article « Moissanite vs. Lab Diamond », lien de pierre `stoneType=Moissanite`).

### 3. June Rings (Draper)

- V (extrait de la page `policies/contact-information`) : « SLC flagship studio: 827 E Pioneer Rd 102 Draper, UT 84020 ».
- V : https://junerings.com/products/aster-emerald (rendue) : « Starting at $3,100 » ; « Want to try it on first? Order a 3D print » ; types de pierre : moissanite, « 2.50 carat VS1 F+ certified lab diamond », « 2.00 carat VS2 H GIA certified mined diamond » ; or jaune, blanc ou rose ; « Add to cart » ; « Production of your ring will take between 5-8 weeks » ; « All June rings are made to order. Returns, exchanges, and in-store credit are not available ».
- V : demande de personnalisation par un formulaire Jotform intégré (non rempli).
- Intérêt : l'essayage par impression 3D répond à la crainte « bijou reçu différent de la CAO » relevée dans les forums.

### 4. Forever Young Fine Jewelers (St. George)

- V : 41 N Main St, St. George, UT 84770 (page `custom-engagement-rings`).
- V : https://www.foreveryoungfinejewelers.com/pages/custom-ring-builder (rendue) : « Step 1 of 4 », « you'll be able to fully customize your design in our 3D Ring Designer » ; 8 styles de départ et « Start from scratch ». Menus « Wedding Band Builder » et « Lab Grown Diamond Jewelry ».
- V : parcours : dessin en ligne, pierre choisie en boutique, commande avec l'équipe, « ready for you in just a couple of weeks ».

### 5. S.E. Needham Jewelers (Logan, Brigham City)

- V : 141 N Main Street, Logan ; 12 S Main St., Brigham City (page `custom-engagement-rings`).
- V : https://www.seneedham.com/collections/engagement-rings : 250 produits avec prix ; FAQ : naturel et synthétique, sur-mesure « four to six weeks ».
- V : la page de départ charge les scripts JewelerOS ; le concepteur ne s'est pas affiché dans notre navigateur.

### 6. Wilson Diamonds (Provo)

- V : https://www.wilsondiamonds.com/custom-ring-builder/ (200, script JewelerOS) ; robots.txt `Allow: /`.
- I (extrait de recherche) : « Step 1 of 4 … 3D Ring Builder », 364 W 2230 N STE 101, Provo ; liens vers diamants synthétiques et naturels.

### 7. Duke's Jewelers (Springville)

- V : https://www.dukesjewelers.com/ringsettings (rendue) : « 1 Choose a ring, 2 Choose a diamond, 3 Complete ring », « 174 settings found », prix de 1 592,67 $ à 7 013,01 $ sur la première page, filtres de métal dont platine.
- I : 220 S Main St, Springville ; « since 1948 » (extrait de recherche).

### 8. Old Main Gem Co. (Draper)

- V : 12251 S 900 E, Draper, UT 84020 (pied de page).
- V : https://oldmaingemco.com/pages/design-your-ring (rendue) : même parcours JewelerOS en 4 étapes. Diamants à l'unité avec certificat IGI : émeraude naturelle 0,70 ct G VVS1 à 909 $, émeraude synthétique 0,83 ct G VS1 à 128 $.
- V : https://oldmaingemco.com/collections/custom-engagement-rings : 12 articles, prix maximal 14 501 $.

### 9. FORGE Jewelry Works (Provo)

- V : 522 N Freedom Blvd, Provo, UT 84601.
- V : https://www.forgejewelryworks.com/connect (page « Custom Engagement Rings », atteinte par la redirection de `/custom-jewelry`) : processus « CONNECT » en 5 étapes, séance de création gratuite « in-shop or online », logiciel de conception 3D, estimation selon le dessin, livraison hors Utah ; « Magnetic Ring Builder » cité (lien non trouvé dans le code de la page, V).
- V : bagues « Temple Rings » inspirées des temples de l'Église de Jésus-Christ des saints des derniers jours, faites à la taille.

### 10. Tresor Jewelers (Salt Lake City)

- V : « Tresor Headquarters » 156 S Rio Grande St, Salt Lake City (pied de page).
- V : https://www.tresorjewelers.com/designyourring intègre `https://www.showroompro.ai/design?d=22d51ae4a259419a` : « Design your dream ring », « 2-min quiz · AI-powered · 10,000+ designs », « Begin Your Design ». Questionnaire non commencé.
- V : accueil : « All our engagement rings have the option of a natural diamond, laboratory made diamond and a Forever One Moissanite ».

## Constats pour JR Diamond

- V : quatre joailliers sur dix utilisent le même concepteur 3D JewelerOS (rangs 4, 5, 6 et 8), comme quatre sites d'Arizona. Le parcours en ligne y sert à prendre rendez-vous : la pierre se choisit en boutique.
- V : les deux acteurs les mieux classés sont des marques jeunes, sans 3D, qui publient un prix complet (Beylora) ou un prix de monture avec date de livraison (Olive Ave).
- V : June Rings répond à l'écart CAO / bijou reçu par une impression 3D envoyée à domicile ; FORGE, par une séance 3D en direct. Aucun des sites lus ne montre de vidéo de fabrication de la bague du client.

## Sources

Pages lues le 25/11/2026 (curl ou Chromium local) :

- robots.txt : beylora.com, www.foreveryoungfinejewelers.com, www.seneedham.com, oldmaingemco.com, forgejewelryworks.com, www.dukesjewelers.com, junerings.com, oliveavejewelry.com, www.morganjewelers.com, www.tresorjewelers.com, www.wilsondiamonds.com, jbrooksjewelers.com, www.jonathansjewelry.com, sierra-west.com, www.showroompro.ai ; www.mckaydiamonds.com (500).
- Beylora : https://beylora.com/ ; https://beylora.com/pages/custom-ring-design (contrôles actionnés jusqu'à l'étape 2).
- Olive Ave Jewelry : https://oliveavejewelry.com/ ; https://oliveavejewelry.com/engagement-rings/best-selling?ringBuilderStart=setting ; https://oliveavejewelry.com/shop/products/persephone?variant=22998 ; https://oliveavejewelry.com/our-locations.
- June Rings : https://junerings.com/ ; https://junerings.com/collections/shop-all-engagement ; https://junerings.com/products/aster-emerald ; https://junerings.com/agents.md.
- Forever Young : https://www.foreveryoungfinejewelers.com/ ; https://www.foreveryoungfinejewelers.com/pages/custom-ring-builder ; https://www.foreveryoungfinejewelers.com/jewelry/engagement-rings-and-settings/complete-engagement-rings (prix chargés en JavaScript, non lus).
- S.E. Needham : https://www.seneedham.com/ ; https://www.seneedham.com/pages/design-your-ring ; https://www.seneedham.com/collections/engagement-rings.
- Wilson Diamonds : https://www.wilsondiamonds.com/custom-ring-builder/.
- Duke's Jewelers : https://www.dukesjewelers.com/ ; https://www.dukesjewelers.com/jewelry/engagement-rings ; https://www.dukesjewelers.com/ringsettings.
- Old Main Gem Co. : https://oldmaingemco.com/ ; https://oldmaingemco.com/pages/design-your-ring ; https://oldmaingemco.com/collections/custom-engagement-rings.
- FORGE Jewelry Works : https://www.forgejewelryworks.com/ ; https://www.forgejewelryworks.com/connect (via `/custom-jewelry`) ; https://www.forgejewelryworks.com/semi-custom-engagement-rings.
- Tresor Jewelers : https://www.tresorjewelers.com/ ; https://www.tresorjewelers.com/designyourring ; https://www.showroompro.ai/design?d=22d51ae4a259419a.
- J. Brooks Jewelers : https://jbrooksjewelers.com/ ; https://jbrooksjewelers.com/collections/engagement-rings-1.
- Bloqués : https://www.mckaydiamonds.com/ (403) ; https://www.morganjewelers.com/ (robots.txt, voir plus haut).

Extraits de recherche web (Parallel Search, 25/11/2026), source des marques I :

- https://www.seneedham.com/pages/custom-engagement-rings ; https://oldmaingemco.com/pages/custom-engagement-rings ; https://www.foreveryoungfinejewelers.com/pages/custom-engagement-rings.
- https://beylora.com/pages/custom-engagement-rings-utah-county ; https://beylora.com/pages/custom-engagement-ring-cost-provo-orem ; https://beylora.com/pages/beylora-facts ; https://beylora.com/pages/jewelry-stores-salt-lake-city ; https://beylora.com/pages/jewelry-stores-utah-county.
- https://junerings.com/policies/contact-information ; https://www.wilsondiamonds.com/custom-ring-builder/ ; https://www.jonathansjewelry.com/ ; https://sierra-west.com/ ; https://bennionjewelers.com/ ; https://jadejarvisphotography.com/blog/engagement-ring-shops-utah-valley.
