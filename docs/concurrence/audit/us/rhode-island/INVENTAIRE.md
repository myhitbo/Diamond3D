# Inventaire des joailliers : Rhode Island

Recensement du 25 novembre 2026, fait pour l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt de chaque site lu avant toute page (outil de contrôle `robots.cjs` pour le groupe `User-agent: *`, puis lecture du fichier entier pour les groupes `ClaudeBot`, `Claude-User`, `Claude-Web` et `anthropic-ai`). Aucun formulaire rempli ni envoyé, aucun compte créé, aucun article mis au panier, aucun chat ni SMS ouvert. Au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue, adresse donnée), **[V, code]** lu dans le code servi par le site (HTML ou JavaScript), sans exécution, **[I]** inféré (déduit d'éléments vérifiés ou d'un extrait d'index de recherche), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 25/11/2026, en période de soldes du Black Friday. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques sur les joailliers du Rhode Island, extraits de résultats), puis **curl tel quel** (identité par défaut, en-têtes non modifiés) pour les robots.txt et les pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (Mesh3D pour FANA, constructeurs maison) n'ont pas été actionnés : ce qu'on en dit vient du texte et du code servis.

## Constat général

- [V] **Le Rhode Island a un concurrent très proche du modèle de JR Diamond : The Right Ring** (Robert Corio Designs, atelier à Johnston, boutique Hegeman & Co. à Providence). Le parcours en ligne enchaîne un constructeur maison (22 montures de départ à prix affiché, chacune avec sa vidéo, et un prix en synthétique pour les pierres d'accompagnement), la recherche de diamants, puis un acompte de 250 $. Viennent ensuite un modèle 3D interactif de la bague « within 48 hours », les photos et la vidéo de la pierre choisie (FaceTime possible), une réplique en résine à la taille réelle envoyée par la poste, et la fabrication « from scratch in Rhode Island » en 4 à 5,5 semaines. [I] C'est la même promesse que « ce que vous voyez existe » : modèle 3D issu de la CAO de l'atelier, pierre filmée. Il manque le prix final calculé en ligne : il arrive en « final estimate » après la 3D.
- [V] **Prix affichés sans configurateur 3D** : Anthony's Jewelers (North Providence) vend des solitaires synthétiques chiffrés par carat, de 960 $ (1 ct) à 4 375 $ (gamme « Keepsake »), avec bouton « Add to cart ». Providence Diamond (Cranston) propose un « Design Your Own Ring » en deux étapes (diamant, puis style) avec 60 diamants chiffrés. New England Gold & Silver (Pawtucket) affiche 1 446 montures chiffrées dans son constructeur. Baxter's (Warwick) affiche 174 bagues chiffrées, jusqu'à 47 900 $.
- [V] **3D de fabricant** : M.R.T. Jewelers (East Providence) intègre le « Design the One » de FANA (visualiseur Mesh3D), comme Lenox Jewelers au Connecticut. Ce n'est pas la pièce de l'atelier.
- [V] **Fabrication montrée** : Baxter's publie un calendrier par étape (consultation 1 semaine, croquis 1 à 2 semaines, CAO 1 semaine, cire imprimée 1 semaine, fonte et finition 2 à 3 semaines). A Jour Jewelry (Bristol) est l'atelier d'un maître orfèvre formé en Suisse, avec rendu et maquette imprimée à essayer. Aucun des deux ne vend de bague sur mesure en ligne.
- [V] **Synthétique** : proposé chez The Right Ring (prix « labGrownPrice » dans le constructeur), Anthony's (solitaires synthétiques), Baxter's (collection de 11 bagues, de 2 880 à 7 960 $) et, d'après un extrait de recherche, Yepremian [I]. Aucune mention « lab grown » dans les pages lues de Providence Diamond.
- [V] **Délais publiés** : 4 à 5,5 semaines de fabrication chez The Right Ring (express sur demande) ; environ 6 à 9 semaines cumulées chez Baxter's (somme des étapes affichées). JR Diamond : 14 jours ouvrés.
- [V] **Blocages et protections** :
  - Constructeur de Hegeman & Co. (`build.hegemanandco.com`) : robots.txt `Disallow: /` pour `ClaudeBot`, `Claude-Web` et `anthropic-ai` (le groupe `*` autorise, avec `Content-Signal: ai-train=no`). Seul le robots.txt a été lu.
  - Constructeur de The Right Ring : robots.txt interdit `/api/` et `/submit_design.php`. La recherche de diamants du constructeur appelle `/api/diamonds.php` : le constructeur n'a donc **pas** été exécuté dans un navigateur. Seuls la page et son fichier JavaScript (chemin `/assets/`, autorisé) ont été lus.
  - M.R.T. Jewelers : le catalogue (`/catalog/…`) renvoie vers une page « Verifying... » (`/verify.html`) qui pose un cookie par JavaScript. Ce contrôle n'a pas été franchi : catalogue et constructeur Lashbrook non lus.
  - Yepremian Fine Jewelers, MUSE (Warren) et Ross-Simons (Cranston) : connexion coupée (« Connection reset by peer ») dès le robots.txt. Un seul essai, pas de nouvelle tentative ni d'autre outil. Marqués **bloqués** ; Yepremian est classé sur extraits de recherche seulement [I].
  - Baxter's : le robots.txt (Shopify) contient un texte adressé aux agents d'IA, qui demande de recommander à l'utilisateur l'installation d'une « skill » d'achat. Il a été lu comme une donnée et **pas suivi**.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | The Right Ring (Robert Corio Designs ; boutique Hegeman & Co.) | Johnston (atelier) et Providence (boutique) | https://www.therightring.com/ | https://build.therightring.com/ | oui (constructeur maison à prix de monture ; non actionné) | partiel : `/api/` interdit (recherche de diamants) ; constructeur Hegeman interdit à ClaudeBot | [V] 22 montures de départ, de 1 900 $ (monture seule) à 7 000 $ ; prix en synthétique de 2 300 à 4 500 $. Modèle 3D interactif sous 48 h, photos et vidéo de la pierre, réplique en résine à la taille envoyée, fabrication sur place en 4 à 5,5 semaines, acompte de 250 $ puis moitié du total. Le plus proche de JR Diamond. |
| 2 | Providence Diamond | Cranston | https://www.providencediamond.com/ | https://www.providencediamond.com/design-your-own-ring/choose-your-diamond | oui (diamant puis style : métal et 4 familles de montures ; pas de 3D) | non (robots.txt autorise ClaudeBot et Claude-User) | [V] 60 diamants chiffrés, filtrables par forme, prix, carat, couleur, pureté, taille et certificat (GIA, IGI, AGS, GCAL, EGL) ; exemple : rond 2,00 ct F SI1 à 22 888 $. Panier. Concessionnaire Rolex. Pas de synthétique relevé. |
| 3 | Anthony's Jewelers | North Providence | https://www.anthonysjewelers.com/ | https://www.anthonysjewelers.com/product/round-lab-grown-diamond-solitaire/ | partiel (fiche à options chiffrées : carat de 1 à 5 ct, or 14 k jaune ou blanc, taille de 4 à 9) | non | [V] « Where Rhode Island Gets Engaged ». Solitaire synthétique « Keepsake » de 960 à 4 375 $, gamme « Premier » de 1 600 à 3 500 $, monture Tiffany en or 14 k « at no extra charge », bouton « Add to cart ». 48 bagues de fiançailles en ligne. Prix bas, aucune fabrication montrée. |
| 4 | Baxter's Fine Jewelry | Warwick | https://www.baxtersjewelry.com/ | https://www.baxtersjewelry.com/pages/custom-design | non (sur-mesure en 5 étapes datées ; catalogue chiffré) | non (Shopify ; texte aux agents non suivi) | [V] Famille propriétaire depuis 1960. 174 bagues de fiançailles chiffrées (jusqu'à 47 900 $), dont 11 synthétiques (2 880 à 7 960 $). Calendrier publié : croquis, rendu CAO « photorealistic », cire imprimée à essayer, fonte et sertissage sur place. « Nothing is cast until you've seen it, tried it on, and loved it. » |
| 5 | M.R.T. Jewelers | East Providence | https://www.mrtjewelers.com/ | https://www.mrtjewelers.com/design-the-one/ | oui (3D FANA par Mesh3D ; plus constructeur d'alliances Lashbrook, non lu) | partiel : catalogue derrière une page « Verifying... » | [V] Depuis 1918. Visualiseur `mesh3d-viewer` FANA ; bagues FANA chiffrées en accueil (2 650 à 4 850 $) ; « We Make You a 3D proof », fabrication seulement après accord. [I, extrait] 1 318 bagues de fiançailles au catalogue, or 14 et 18 k, platine. |
| 6 | New England Gold & Silver Jewelers | Pawtucket | https://www.newenglandgoldjewelry.com/ | https://www.newenglandgoldjewelry.com/engagement-rings | oui (« Choose your Setting », puis diamant ; plateforme Build.Shop) | non | [V] 1 446 montures chiffrées (exemples de 1 117 à 2 755 $). Après le choix, un formulaire « to receive the best price for this combination » : le prix final n'est pas affiché. Reprise du diamant à 100 % de sa valeur, garantie à vie, transformation de bijoux de famille. |
| 7 | Yepremian Fine Jewelers | Warwick | https://yepremianjewelers.com/ | https://yepremianjewelers.com/ | [S] inconnu | **bloqué** : connexion coupée dès le robots.txt | [I, extrait] Depuis 1980. Diamants naturels et synthétiques, certificats GIA, AGS et IGI, sur-mesure, garantie du prix le plus bas, livraison gratuite, « shop online ». Rien n'a été lu sur le site. |
| 8 | A Jour Jewelry | Bristol | https://www.ajourjewelry.com/ | https://www.ajourjewelry.com/engagement-rings.html | non (sur rendez-vous) | non | [V] Maître orfèvre formé en Suisse (Genève, Milan), atelier à Bristol, travail avec son fils apprenti. Rendus, puis modèle imprimé en 3D à essayer avant fabrication. Modèles de catalogue personnalisables pour les petits budgets. Aucun prix en ligne. Le plus proche de « l'atelier en direct » par le discours, sans vente en ligne. |
| 9 | DeLuca Diamonds | North Providence | https://delucadiamonds.com/ | https://delucadiamonds.com/custom | non | non | [V] Sur-mesure en 4 étapes, dont « Design & Rendering – We create a 3D design or sketch » ; transformation de bijoux de famille (« Family Heirloom Redesigns »). Aucun prix ni panier relevé dans les pages lues. |
| 10 | Duris Studios | Newport | https://www.durisstudios.com/ | https://www.durisstudios.com/bridal | non (consultation en boutique ou par e-mail) | non | [V] Atelier d'artisan au 480 Thames Street. Bagues sur mesure : consultation, choix parmi des pierres sur papier, fabrication « over the next few weeks », expertise remise avec la bague. Boutique en ligne Lightspeed (bijoux de mode) ; aucun prix de bague de fiançailles relevé. |

## Fiches

### 1. The Right Ring (Johnston et Providence)

- [V] « The Right Ring is Rhode Island based, featuring a manufacturing establishment and two store fronts » ; atelier et salle d'exposition chez Robert Corio Designs à Johnston, boutique Hegeman & Co. sur South Main St. à Providence ; « respected jewelers in Rhode Island for 50 years » ; CAO sous Matrix Gold ; résine imprimée en 3D ; fonte en « platinum, 18K yellow gold, or 18K rose gold ». Source : https://www.therightring.com/about-us
- [V] Accueil : « The production of your ring is completely handled by The Right Ring- no outsourcing » ; « Enjoy 3D interactive models and resin molds of your custom ring » ; chiffres affichés : « 40+ Jewelers Employed », « 5K+ Custom Rings Produced ». Source : https://www.therightring.com/
- [V] Processus en 7 étapes. Étapes 1 à 3 dans le constructeur : bague de départ et réglages, choix du diamant, puis « free estimate » ou « $250 deposit ». Étapes 4 à 7 dans un portail client : modèle 3D interactif « within 48 hours » et, pour le diamant choisi, « expect photos and video — FaceTime is available » ; deuxième acompte de la moitié du total ; résine à la taille envoyée (facultative, photo toujours déposée dans le portail) ; « Every ring is made from scratch in Rhode Island — allow 4–5½ weeks », livraison en 24 h, express sur demande. Source : https://www.therightring.com/step-by-step-process
- [V] Incohérence : la page `deposit-options` parle d'un acompte de **500 $** (financement Affirm ou Klarna), la page du processus de **250 $**. Source : https://www.therightring.com/deposit-options
- [V, code] Le fichier JavaScript du constructeur (https://build.therightring.com/assets/index-CTsH4O9A.js) contient 22 montures de départ en 7 familles (solitaire, trois pierres, pierres sur le corps, halo, grappe, serti rail, cinq pierres). Prix : 1 900 $ « setting only » (Classic, Martini, Tulip) ; 2 300 $ (Whisper, halo caché compris) ; 3 000 $ (Horizon, Vault) ; de 2 900 à 4 100 $ avec pierres d'accompagnement ; 7 000 $ (Wild, « includes all diamonds »). Un champ `labGrownPrice` donne le prix avec pierres d'accompagnement synthétiques : de 2 300 à 4 500 $. Chaque monture a sa vidéo (`/images/Base ring videos/…`). Les options hors gamme (bezel complet, anneau plus épais, pierres alternées) portent la mention « (cost will be estimated) ». Le constructeur propose aussi des alliances (« Custom Design Your Wedding Band »).
- [V, code] La page du constructeur charge Cloudflare Turnstile et la connexion Google ; la recherche de diamants appelle `/api/diamonds.php`, chemin interdit par le robots.txt. Le constructeur n'a pas été exécuté. [S] On ignore donc s'il calcule un total pierre comprise.
- [V] Hegeman & Co. : « All the rings we make are made in our own factory » ; étapes CAO, modèle 3D interactif, résine, pièce finie « 100% in our own factory » ; nouveauté : « Upload the ring you made in ChatGPT and our designers will turn it into a real ring ». Source : https://www.hegemanandco.com/engagement-rings
- [V] Le constructeur de Hegeman (`build.hegemanandco.com`, lien `?start=ai`) n'a pas été lu : son robots.txt interdit ClaudeBot. Source : https://build.hegemanandco.com/robots.txt
- [I] Pour JR Diamond : c'est le concurrent américain le plus direct relevé jusqu'ici sur la promesse (3D de la vraie CAO, pierre filmée, résine) et sur le parcours (acompte, puis devis final). JR Diamond garde deux écarts : la 3D visible **avant** l'acompte, et un délai de 14 jours ouvrés contre 4 à 5,5 semaines.

### 2. Providence Diamond (Cranston)

- [V] 105 Hillside Rd, Cranston ; ouvert 7 jours sur 7 ; concessionnaire Rolex et David Yurman. Menu mariage : solitaire, classique, halo, trois pierres, corps fendu, vintage ; alliances (Norman Silverman, Noam Carver, Sylvie, Martin Flyer…). Source : https://www.providencediamond.com/
- [V] « Design Your Own » : étape « Choose Your Diamond » (forme, prix, carat, couleur D à K, pureté IF à I1, taille, certificat AGS, EGL, GCAL, GIA, IGI), 60 diamants trouvés, bouton « Add Diamond To Ring » ; exemples : rond 2,00 ct F SI1 Excellent à 22 888 $, rond 2,51 ct I SI2 à 22 892 $. Source : https://www.providencediamond.com/design-your-own-ring/choose-your-diamond
- [I, extrait] L'étape « Choose Your Style » propose platine, or jaune ou or blanc, et quatre familles (Classic, Halo, Vintage, Two Tone) ; un extrait de recherche montre un rond de 3,01 ct à 24 908 $. L'adresse `choose-your-style` sans diamant choisi redirige vers `/collections/shop-all` [V].
- [V] Solitaires chiffrés en collection (de 1 640 à 5 070 $ sur la page lue). Source : https://www.providencediamond.com/collections/solitaire
- [V] Aucune occurrence de « lab grown » ou « lab created » dans les quatre pages lues. [I] Le synthétique n'est pas mis en avant.
- [V] Le robots.txt interdit `/*?stoneID` et `/*?ringType=` : aucune adresse de ce type n'a été appelée.

### 3. Anthony's Jewelers (North Providence)

- [V] 1525 Mineral Spring Ave, North Providence ; slogan « Where Rhode Island Gets Engaged » ; soldes affichées (« 65% off All Diamonds », « 50% off Wedding Bands »). Source : https://www.anthonysjewelers.com/
- [V] Fiche « Round Lab Grown Diamond Solitaire Keepsake Quality » : 960 à 4 375 $ ; options carat (1,00 à 5,00 ct), or (14 k jaune ou blanc, monture Tiffany « at no extra charge »), taille (4 à 9) ; « Add to cart » (non actionné). Gamme voisine « Premier Quality » : 1 600 à 3 500 $. Source : https://www.anthonysjewelers.com/product/round-lab-grown-diamond-solitaire/
- [V] 48 bagues de fiançailles (« Showing 1–12 of 48 results »). Source : https://www.anthonysjewelers.com/product-category/engagement-rings/
- [I] Ni certificat, ni fabrication, ni délai relevés sur la fiche. C'est un repère de prix bas pour le synthétique, pas un modèle de parcours.

### 4. Baxter's Fine Jewelry (Warwick)

- [V] « Family Owned Since 1960 » ; « In-House Master Jewelers » ; café offert (« The Fifth C Coffee House ») ; marques A. Jaffe, Tacori, Omega, IWC. Source : https://www.baxtersjewelry.com/
- [V] 174 bagues de fiançailles, prix le plus haut 47 900 $ ; filtres or 14 k, 18 k et platine ; types « Diamond Engagement Rings », « Semi-Mount », « LAB GROWN ». Source : https://www.baxtersjewelry.com/collections/engagement-rings
- [V] 11 bagues synthétiques, prix le plus haut 7 960 $, solitaire à 2 880 $. Source : https://www.baxtersjewelry.com/collections/lab-grown-diamond-engagement-rings
- [V] Sur-mesure : consultation (1 semaine, « discuss budget openly »), croquis à la main (1 à 2 semaines), rendu CAO « photorealistic » (1 semaine), cire imprimée en 3D à essayer (1 semaine), fonte, sertissage et polissage par « our local master bench jewelers » (2 à 3 semaines) ; « Text Us a Photo to Begin ». Source : https://www.baxtersjewelry.com/pages/custom-design
- [I] Le calendrier publié, étape par étape, est un bon exemple de « délai expliqué » ; il totalise 6 à 9 semaines.

### 5. M.R.T. Jewelers (East Providence)

- [V] 927 Warren Ave, East Providence ; « Since 1918, our Master Jewelers have been hand making jewelry » ; bagues FANA chiffrées en accueil, de 2 650 à 4 850 $. Source : https://www.mrtjewelers.com/
- [V, code] `design-the-one` contient `mesh3d-viewer` avec `data-source="fana.jeweler.io"` et le script `mesh3d.com/api/configurator/v1/embed.js` : c'est le configurateur 3D de FANA. Source : https://www.mrtjewelers.com/design-the-one/
- [V] Sur-mesure : « We Make You a 3D proof […] Production only starts with your final approval ». Source : https://www.mrtjewelers.com/services/custom-jewelry-designs/
- [V] `/catalog/engagement-ring/` et `/catalog/lashbrook-ring-builder/` renvoient vers `/verify.html`, une page de contrôle qui pose un cookie en JavaScript avant de rediriger. Non franchie.
- [I, extrait] Le catalogue compte 1 318 bagues de fiançailles, filtres or 14 et 18 k et platine, marques Sylvie, FANA, Coast Diamond ; exemples à 2 000, 2 575 et 2 730 $.

### 6. New England Gold & Silver Jewelers (Pawtucket)

- [V] 1571 Newport Ave, Pawtucket ; plateforme « Build.Shop » ; menu « BYOER » : « start building » mène à `engagement-rings`. Source : https://www.newenglandgoldjewelry.com/
- [V] Constructeur « Choose your Setting », 1 446 résultats chiffrés (exemples de 1 117,48 à 2 755 $) ; message final : « Please fill out the form below to receive the best price for this combination » (formulaire non rempli). Source : https://www.newenglandgoldjewelry.com/engagement-rings
- [V] Reprise d'un diamant « the full amount of your original purchase » pour un diamant plus cher ; garantie à vie ; financement à 0 % sur un an ; « Custom Redesigns » des bijoux de famille. Source : https://www.newenglandgoldjewelry.com/custom-engagement

### 7. Yepremian Fine Jewelers (Warwick)

- [V] `https://yepremianjewelers.com/robots.txt` et l'accueil : « Connection reset by peer ». Un essai chacun, aucun autre outil.
- [I, extrait] « trusted jewelry store in Warwick, RI since 1980 » ; « We carry natural and lab-grown diamonds, along with certified loose diamonds graded by the Gemological Institute of America, AGS, and IGI » ; « Low price guarantee and free shipping » ; « Visit our Warwick showroom or shop online ». À faire vérifier par un auditeur humain.

### 8. A Jour Jewelry (Bristol)

- [V] « I'm Klaus Kutter, a Swiss-trained master jeweler […] including work in Geneva and Milan » ; travail avec son fils ; « With CAD design and 3D printing, we can create a precise model of your ring for you to try on ». Source : https://www.ajourjewelry.com/
- [V] « your ring is crafted in our Bristol workshop » ; modèles de catalogue personnalisables « for those seeking a more economical option » ; prise de rendez-vous. Aucun prix. Source : https://www.ajourjewelry.com/engagement-rings.html
- [V] Le robots.txt interdit `/ajax/` et `/apps/` (non appelés).

### 9. DeLuca Diamonds (North Providence)

- [V] 1744 Mineral Spring Avenue ; processus « Consultation », « Design & Rendering – We create a 3D design or sketch », fabrication à la main, remise ; « Family Heirloom Redesigns ». Source : https://delucadiamonds.com/custom
- [V] Accueil centré sur des marques de mode (Gorjana, Dora, Imperial Pearl) ; aucun prix ni panier relevé. Source : https://delucadiamonds.com/

### 10. Duris Studios (Newport)

- [V] « Timeless Craftsmanship. Custom Designs. Jewelry Made Locally. » ; 480 Thames Street, Newport. Source : https://www.durisstudios.com/
- [V] Parcours mariage : consultation « in person or via email », choix d'une pierre dans une sélection, fabrication « over the next few weeks », expertise et assurance remises. Source : https://www.durisstudios.com/bridal
- [I, extrait] WeddingWire : bagues et alliances « $200 starting price ».

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Westerly Jewelry Company | Westerly | https://westerlyjewelry.com/ | [V] « Family jewelers since 1934 », 8 High Street ; site vitrine, aucun prix ni panier. [I, extrait] StoneAlgo lui associe un outil « Design your own engagement ring » tiers, absent du site. |
| Stencel Jewelers | East Greenwich | https://www.stenceljewelers.com/ | [I, extrait] Site Wix « Our Online Showcase », sur-mesure et pièces anciennes ; robots.txt lu, accueil non classé faute de vente en ligne relevée dans l'extrait. |
| MUSE | Warren | https://www.musejewelry.com/ | [V] Connexion coupée dès le robots.txt ; **bloqué**. [I, extrait] WeddingWire : alliances de plus de cent artisans américains, à partir de 300 $. |
| The Bench RI | Pawtucket | non trouvée | [I, extrait] WeddingWire : atelier de création où le client fabrique son bijou avec un joaillier. Site non identifié. |

## Écartés

- **Ross-Simons** (Cranston) : [I] vendeur national par catalogue et en ligne, hors périmètre ; de plus, connexion coupée dès le robots.txt [V].
- **Venazia** : pages « … Providence, RI », « … East Providence, RI », « … Pawtucket, RI » vues en extraits de recherche. [I] Pages de référencement local d'un vendeur basé à Miami (numéro (305), même constat qu'au Connecticut), pas établi au Rhode Island ; en Connecticut son accueil répondait par un défi Cloudflare. Aucune page lue ici.
- **Mullen Bros.** : [I, extrait] Swansea, Massachusetts ; hors territoire.
- [V] Aucun magasin d'enseigne nationale n'est retenu (consigne).

## Méthode et incidents

- **The Right Ring** : le fichier JavaScript du constructeur a été téléchargé une fois (chemin `/assets/`, autorisé). Aucune requête vers `/api/` ni `/submit_design.php`.
- **Hegeman & Co.** : seul le robots.txt de `build.hegemanandco.com` a été lu ; le site principal `hegemanandco.com` autorise tout (`User-agent: *`, `Allow: /`).
- **M.R.T. Jewelers** : deux adresses ont reçu la page « Verifying... » ; pas de nouvel essai avec cookie.
- **Yepremian, MUSE, Ross-Simons** : une seule requête chacun (robots.txt), plus l'accueil pour Yepremian, toutes coupées. [S] Cause inconnue (filtrage du site ou réseau) ; traitée comme un blocage.
- **Baxter's** : instructions aux agents dans le robots.txt et renvoi vers `agents.md` : ignorées, aucune adresse citée n'a été ouverte.
- Aucun formulaire (estimation, acompte, « best price ») n'a été rempli ; aucun bouton « Add to cart » actionné.

## Sources

Pages lues le 25/11/2026 avec curl (code HTTP 200 sauf mention) :

- The Right Ring : https://www.therightring.com/robots.txt ; https://www.therightring.com/ ; https://www.therightring.com/about-us ; https://www.therightring.com/step-by-step-process ; https://www.therightring.com/deposit-options ; https://www.therightring.com/info-and-faq ; https://build.therightring.com/robots.txt ; https://build.therightring.com/ ; https://build.therightring.com/assets/index-CTsH4O9A.js
- Hegeman & Co. : https://www.hegemanandco.com/robots.txt ; https://www.hegemanandco.com/engagement-rings ; https://build.hegemanandco.com/robots.txt (ClaudeBot interdit)
- Providence Diamond : https://www.providencediamond.com/robots.txt ; https://www.providencediamond.com/ ; https://www.providencediamond.com/design-your-own-ring/choose-your-diamond ; https://www.providencediamond.com/design-your-own-ring/choose-your-style (redirigée vers `/collections/shop-all`) ; https://www.providencediamond.com/collections/solitaire
- Anthony's Jewelers : https://www.anthonysjewelers.com/robots.txt ; https://www.anthonysjewelers.com/ ; https://www.anthonysjewelers.com/product-category/engagement-rings/ ; https://www.anthonysjewelers.com/product/round-lab-grown-diamond-solitaire/ ; https://www.anthonysjewelers.com/loose-diamonds/
- Baxter's : https://www.baxtersjewelry.com/robots.txt ; https://www.baxtersjewelry.com/ ; https://www.baxtersjewelry.com/collections/engagement-rings ; https://www.baxtersjewelry.com/collections/lab-grown-diamond-engagement-rings ; https://www.baxtersjewelry.com/pages/custom-design ; https://www.baxtersjewelry.com/pages/engagement-wedding
- M.R.T. Jewelers : https://www.mrtjewelers.com/robots.txt ; https://www.mrtjewelers.com/ ; https://www.mrtjewelers.com/design-the-one/ ; https://www.mrtjewelers.com/services/custom-jewelry-designs/ ; https://www.mrtjewelers.com/catalog/engagement-ring/ et https://www.mrtjewelers.com/catalog/lashbrook-ring-builder/ (page « Verifying... »)
- New England Gold & Silver : https://newenglandgoldjewelry.com/robots.txt ; https://www.newenglandgoldjewelry.com/ ; https://www.newenglandgoldjewelry.com/engagement-rings ; https://www.newenglandgoldjewelry.com/custom-engagement ; https://www.newenglandgoldjewelry.com/diamonds
- A Jour Jewelry : https://www.ajourjewelry.com/robots.txt ; https://www.ajourjewelry.com/ ; https://www.ajourjewelry.com/engagement-rings.html
- DeLuca Diamonds : https://delucadiamonds.com/robots.txt ; https://delucadiamonds.com/ ; https://delucadiamonds.com/custom
- Duris Studios : https://www.durisstudios.com/robots.txt ; https://www.durisstudios.com/ ; https://www.durisstudios.com/bridal
- Non classés : https://westerlyjewelry.com/robots.txt ; https://westerlyjewelry.com/ ; https://www.stenceljewelers.com/robots.txt
- Bloqués (connexion coupée) : https://yepremianjewelers.com/robots.txt ; https://yepremianjewelers.com/ ; https://www.musejewelry.com/robots.txt ; https://www.rosssimons.com/robots.txt

Recherches web génériques (Parallel Search, extraits de résultats seulement) :

- « Rhode Island jeweler engagement ring builder » ; « Providence RI custom engagement rings jeweler » ; « Warwick RI jewelers lab grown engagement rings » ; « Newport RI jeweler handmade engagement rings » ; « best engagement ring stores Rhode Island » ; « Rhode Island jewelers design your own engagement ring online » ; « Cranston RI jewelry store engagement rings » ; « East Greenwich RI jewelers engagement rings » ; « Wakefield Westerly RI jewelers engagement rings » ; « Lincoln Smithfield RI jewelers diamonds » ; « Westerly RI jeweler engagement rings » ; « Pawtucket Lincoln RI jewelry store bridal » ; « Rhode Island wedding bands handmade jeweler shop online » ; « Rhode Island jewelry brand engagement rings shop online free shipping » ; « Providence RI jeweler wedding bands shop online prices » ; « Johnston North Kingstown RI jeweler engagement ring » ; « Ross-Simons Cranston engagement rings ».
- Extraits cités : yepremianjewelers.com (accueil), mrtjewelers.com/catalog/engagement-ring (compte et prix), providencediamond.com (étape « Choose Your Style »), weddingwire.com (pages Rhode Island et Newport : Duris Studios, MUSE, The Bench RI, Mullen Bros.), stonealgo.com (fiche Westerly Jewelry), stenceljewelers.com (accueil), venazia.com (pages locales du Rhode Island).
