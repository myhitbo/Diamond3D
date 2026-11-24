# Inventaire des joailliers : Alabama

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ni SMS ouvert, au plus une page toutes les 2 secondes par site (10 secondes chez Bromberg's, dont le robots.txt fixe un `Crawl-delay: 10`).

Repères : **[V]** vérifié (page lue, adresse donnée en fin de document), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 15/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : le crédit Firecrawl était épuisé dès le début du recensement. Recherche par Parallel Search (requêtes génériques, extraits de résultats), une lecture de page par Parallel (annuaire de l'Alabama Jewelers Association), puis **curl tel quel** (sans changer d'identité) pour toutes les autres pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (JewelerOS, Sabghi, listes Punchmark) n'ont pas été actionnés ; ce qu'on en dit vient du texte des pages et du contenu des scripts, marqué [I] quand c'est une déduction.

## Constat général

- [V] Trois joailliers (Hudson-Poole à Tuscaloosa, Ware à Auburn et dans trois autres villes, Marquirette's à Montgomery) utilisent **le configurateur 3D en marque blanche JewelerOS** : chaque page charge `jeweleros.com/static/dist/partner_config.js` avec un identifiant de partenaire propre (`9jyShjozVpif`, `9kWedpj4zYeb`, `9np2qevbEZ09`). Le script renvoie aussi à un service de mesure `stonealgoccwci.dataplane.rudderstack.com` : c'est le même éditeur (StoneAlgo) que les trois configurateurs vus au Tennessee. Hudson-Poole et Ware publient la même FAQ mot pour mot : dessin de la monture en 3D en ligne, prix « réel » de la monture affiché sans la pierre centrale, nom et téléphone demandés pour sauvegarder, relance par SMS d'un « concierge », choix de la pierre en boutique, bague prête en 2 à 4 semaines. [I] La 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier : c'est la différence que revendique JR Diamond.
- [V] Un seul configurateur 3D **développé en propre** : Sabghi Jewelers (Huntsville). La page charge une extension WordPress `sabghi-ring-designer` (script de 617 Ko bâti sur Three.js / WebGL) : métal et corps de bague, tête et serti, pierres d'épaule, grain de mil, gravure, poids de pierre souhaité, couleur et pureté souhaitées ; or 14 k et 18 k jaune, blanc, rose, et platine (exactement les métaux de JR Diamond) ; formes dont la marquise. [I] Le modèle est généré dans le navigateur à partir de paramètres (code de géométrie dans le script) ; la sortie est un fichier de dessin et une « fiche » à imprimer en PDF, sans prix (aucun libellé de prix dans le script).
- [V] Trois joailliers (Grogan à Florence et Huntsville, Diamond Jewelers à Gulf Shores, Sanders à Andalusia) ont le **constructeur Punchmark** « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring », avec filtres or blanc, jaune, rose, platine et 8 formes dont la marquise. Les trois affichent la même pagination (37 pages) : [I] catalogue de montures des fournisseurs, pas des créations maison.
- [V] Le diamant synthétique est très présent et souvent chiffré : 40 927 pierres synthétiques en ligne chez Hudson-Poole, à partir de 125 $ ; 21 bagues synthétiques chez Fincher & Ozment, de 699 à 12 999 $ ; pierres synthétiques nues chez Brock's ; entrées « Start with a Lab-Diamond » (Grogan) et « Shop Lab Grown Diamonds » (Sanders).
- [V] Personne en Alabama ne montre la fabrication en direct. Les plus proches sont des parcours de conception chiffrés en étapes : Studio Mullins (Birmingham : rendu CAO puis maquette imprimée en plastique, mais fabrication à New York), Sanders, Goldstein's et M&M (croquis, CAO, cire ou moule). [I] Le couple « modèle issu du fichier de fabrication + pierre filmée » de JR Diamond n'a pas d'équivalent local.
- [V] **Marquirette's** (Montgomery) met en avant un spécialiste du diamant qui achète « since 1965 from the major trading bourses of Antwerp and Ramat Gan » : l'argument de la Bourse de Ramat Gan est déjà utilisé par un joaillier local.
- [V] Blocages : Marquirette's et Anthony & Co. (Hoover) renvoient leurs fiches produits vers une page `/verify.html` (contrôle anti-robot par cookie JavaScript) : non contourné, lecture limitée aux pages servies. Bromberg's, Sabghi et The Sassy South interdisent ClaudeBot, GPTBot et d'autres agents d'IA dans leur robots.txt (« * » autorisé) : lecture réduite à une ou deux pages. Aucun captcha ni 403 sur les dix sites classés.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hudson-Poole Fine Jewelers | Tuscaloosa | https://www.hudsonpoole.com/ | https://www.hudsonpoole.com/page/custom-ring-builder.html (3D) ; parcours monture + pierre avec prix : https://www.hudsonpoole.com/design-your-own-ring/choose-your-style | oui (3D JewelerOS, plus constructeur « Design Your Own Ring » et Benchmark Ring Lab pour les alliances) | non (robots.txt interdit `/*?ringType`, `/*?product`… ; agents d'IA explicitement autorisés) | [V] Le parcours en ligne le plus complet de l'État : 3D JewelerOS ; constructeur monture puis pierre avec 11 montures chiffrées de 689 à 4 795 $ (platine, or jaune, blanc, rose) ; 40 927 diamants synthétiques chiffrés (dès 125 $ pour 0,36 ct E VS1) avec boutons « Add To Cart » et « Add Diamond To Ring » ; bagues synthétiques de 3 950 à 14 910 $ (première page) ; configurateur d'alliances Benchmark ; remontage de pierres de famille ; 2 à 4 semaines. |
| 2 | Sabghi Jewelers | Huntsville (siège à Fayetteville, TN) | https://www.sabghijewelers.com/ | https://www.sabghijewelers.com/create-your-dream-ring/ | oui (3D maison, Three.js) | partiel : robots.txt (géré par Cloudflare) interdit ClaudeBot, GPTBot, anthropic-ai… ; « * » autorisé ; outil en JavaScript non actionné | [V] Seul configurateur 3D développé en propre : métal (14 k / 18 k trois couleurs, platine), tête, serti, épaules, grain de mil, gravure, poids et qualité de pierre souhaités ; centre naturel, saphir, rubis ou émeraude ; marquise, ovale, poire ; sauvegarde du dessin en fichier et fiche à imprimer. [I] Pas de prix ni d'option synthétique dans l'outil. Le plus proche, techniquement, de la 3D de JR Diamond. |
| 3 | Ware Jewelers | Auburn, Opelika, Montgomery, Spanish Fort | https://www.warejewelers.com/ | https://www.warejewelers.com/page/custom-ring-builder.html | oui (3D JewelerOS) | non | [V] « Alabama's oldest continuously operating family jeweler », fondé en 1946 ; 4 salles ; même FAQ que Hudson-Poole : prix de la monture visible dans l'outil 3D, sans la pierre ; prête en 2 à 4 semaines. Catalogue chiffré : 19 bagues de 2 000 à 3 300 $ en première page, une mention « Call for Price ». Marques David Yurman, A.Jaffe, Henri Daussi… |
| 4 | Marquirette's Exquisite Jewelry | Montgomery | https://www.marquirettes.com/ | https://www.marquirettes.com/design-your-ring/ | oui (3D JewelerOS) | partiel : catalogue redirigé vers `/verify.html` (contrôle anti-robot), non contourné | [V] Parcours en 3 temps : « Design your ring online in stunning 3D », « Pick out your center stone in our Montgomery, AL showroom », « Finalize & order » ; bague prête « in just a couple of weeks » ; recherche de diamants synthétiques au menu. Spécialiste diamant formé aux bourses d'Anvers et de Ramat Gan : même argument d'origine que JR Diamond. |
| 5 | Fincher & Ozment Jewelers | Tuscaloosa | https://fincherandozment.com/ | https://fincherandozment.com/collections/engagement-wedding ; synthétique : https://fincherandozment.com/collections/lab-grown-bridal-collection | non | non (Shopify ; robots.txt demande aux agents d'acheter par l'interface UCP) | [V] Boutique en ligne chiffrée : 66 articles fiançailles et mariage (699 à 4 995 $ en première page), 21 bagues synthétiques (699 à 12 999 $). Sur mesure « within 10 days or less » (JR Diamond : 14 jours ouvrés). Garanties écrites : remboursement de l'écart de prix + 10 %, reprise du diamant, contrôle GIA ; pas de remboursement des pièces sur mesure. Plus de 120 ans à Tuscaloosa. |
| 6 | Studio Mullins | Birmingham | https://studiomullins.com/ | https://studiomullins.com/bespokeprocess | non | non (Squarespace) | [V] Studio de création sur mesure, clients dans tout le pays : esquisse, rendu CAO, maquette imprimée en plastique à essayer, puis fabrication par des maîtres joailliers à New York. Bagues de fiançailles « Inquire » (affichées à 0,00 $), 18 k et platine, 4 à 8 semaines, ventes définitives ; alliance « Lover's Knot » à 1 400 $. [I] Le récit de fabrication le plus proche de JR Diamond, sans atelier local. |
| 7 | Grogan Jewelers by Lon | Florence, Huntsville (et Brentwood, TN) | https://www.groganjewelers.com/ | https://www.groganjewelers.com/ringsettings | oui (Punchmark, 3 étapes) | non (Crawl-delay 2) | [V] Menu « Start with a Setting / a Diamond / a Lab-Diamond / Build Your Wedding Band » ; filtres 4 métaux, 8 formes dont marquise, tranche de prix ; marque maison « Designs by Lon ». Fiche produit lue sans prix (« Inquire via Email »). |
| 8 | Brock's Jewelers | Madison (près de Huntsville) | https://brocksjewelers.com/ | https://brocksjewelers.com/product-category/diamond-engagement-rings/ | non | non (robots.txt sans interdiction) | [V] 202 bagues de fiançailles chiffrées (1 399 à 5 555 $ en première page) ; 27 articles synthétiques dont des pierres nues de 0,73 à 3,03 ct (179 à 4 571,16 $). Paiement en ligne coupé : « ONLINE CHECKOUT DISABLED — CALL (256) 464-6610 FOR CURRENT PRICING », « Prices subject to change without notice due to market ». |
| 9 | Sanders Jewelry | Andalusia | https://www.sandersjewelry.com/ | https://www.sandersjewelry.com/ringsettings | oui (Punchmark, 3 étapes) | non (Crawl-delay 2) | [V] « Build Your Own Ring », « Shop Natural Diamonds » et « Shop Lab Grown Diamonds » ; sur mesure décrit en 3 temps (croquis, rendu 3D et moule, fonte et sertissage) ; depuis 1972. |
| 10 | Barton-Clay Fine Jewelers | Mountain Brook (Birmingham) | https://bartonclay.com/ | https://bartonclay.com/collections/engagement-rings | non | non (Shopify) | [V] 682 bagues de fiançailles en ligne, prix affichés de 1 066 à 139 320 $ (première page) ; collection maison (5 bagues) ; livraison offerte, 150 $ de remise sur la première commande. Aucune mention de synthétique dans les pages lues ; page « custom engagement ring » vide de contenu. |

## Fiches

### 1. Hudson-Poole Fine Jewelers (Tuscaloosa)

- [V] 1111 Greensboro Ave, Tuscaloosa, AL 35401 ; membre de l'American Gem Society et de Preferred Jewelers International. Source : https://www.hudsonpoole.com/page/custom-engagement-rings.html
- [V] FAQ : « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s) » ; « most custom engagement rings are ready in 2-4 weeks » ; sauvegarde contre nom et téléphone, puis SMS du « concierge » ; rendez-vous en boutique ou en visio. Même source.
- [V] Outil 3D : script JewelerOS (`data-org-id="9jyShjozVpif"`). Non actionné (rendu JavaScript). Source : https://www.hudsonpoole.com/page/custom-ring-builder.html
- [V] Constructeur classique : choix « Natural Diamond », « Lab Grown Diamond » ou « Gemstone », puis monture ; 11 montures de 689 à 4 795 $, tailles 4 à 12. Source : https://www.hudsonpoole.com/design-your-own-ring/choose-your-style
- [V] Recherche de diamants synthétiques : « 40927 Diamonds Found », filtres de rapport GIA et IGI ; première pierre 0,36 ct, E, VS1, à 125 $, avec mesures, table, profondeur. Source : https://www.hudsonpoole.com/find-a-lab-created-diamond.html
- [V] Bagues synthétiques : 20 prix en première page, de 3 950 à 14 910 $. Source : https://www.hudsonpoole.com/lab-grown-bridal/lab-grown-engagement
- [V] Alliances : configurateur Benchmark intégré (iframe `customizer-api.benchmarkrings.com`). Source : https://www.hudsonpoole.com/page/benchmark-ring-lab.html

### 2. Sabghi Jewelers (Huntsville)

- [V] Salle de Huntsville : 7500 Memorial Pkwy SW #102 A, Huntsville, AL 35802 ; maison mère : 1302 Huntsville Hwy, Fayetteville, TN 37334. Source : https://www.sabghijewelers.com/create-your-dream-ring/
- [V] La page affiche « Loading your ring design studio… » et charge `wp-content/plugins/sabghi-ring-designer/assets/designer.js`. Libellés relevés dans ce script : « Metal & shank », « Head & setting », « Accents & gallery », « Shoulder stones », « Add milgrain edges », « Engraving request », « Requested center weight », « Diamond clarity preference », « Natural diamond », « Sapphire », « Ruby », « Emerald », « 14K/18K Yellow, White, Rose Gold », « Platinum », « Marquise », « Choose a Sabghi ring design JSON file », « Your design sheet is open. Choose Print / Save PDF ». Source : script cité, lu avec curl.
- [I] Outil développé pour la maison (nom de l'extension), rendu WebGL paramétrique ; ni prix ni synthétique dans l'outil.
- [V] Le robots.txt interdit ClaudeBot et les autres agents d'IA (« * » autorisé, `Content-Signal: search=yes, ai-train=no, use=reference`). Lecture limitée à cette page et à son script.

### 3. Ware Jewelers (Auburn, Opelika, Montgomery, Spanish Fort)

- [V] Siège : 111 South College Street, Auburn ; fondé en 1946 par Lamar et Libby Ware. Source : https://www.warejewelers.com/page/custom-engagement-rings.html
- [V] Outil 3D JewelerOS (`data-org-id="9kWedpj4zYeb"`), non actionné. Source : https://www.warejewelers.com/page/custom-ring-builder.html
- [V] Catalogue : 19 prix en première page, de 2 000 à 3 300 $. Source : https://www.warejewelers.com/wedding-and-bridal/engagement-rings/all-engagement-rings

### 4. Marquirette's Exquisite Jewelry (Montgomery)

- [V] Peppertree Shopping Center, 8163 Vaughn Rd, Montgomery, AL 36116 ; depuis 2003 ; « diamond specialist Lyle Fields has sorted and purchased diamonds since 1965 from the major trading bourses of Antwerp and Ramat Gan, earned the coveted title of Diamantaire in 1994 ». Source : https://www.marquirettes.com/custom-engagement-rings/
- [V] Outil 3D JewelerOS (`jos.js` et `partner_config.js`, `data-org-id="9np2qevbEZ09"`). Source : https://www.marquirettes.com/design-your-ring/
- [V] Blocage : https://www.marquirettes.com/catalog/engagement-ring/ redirige vers `/verify.html?next=…` (page « Verifying… » qui pose un cookie par JavaScript). Non contourné.

### 5. Fincher & Ozment Jewelers (Tuscaloosa)

- [V] 1657 N. McFarland Blvd. Suite G3D, Tuscaloosa, AL 35406. Sur mesure en 4 étapes, « Most custom pieces are completed within 10 days or less ». Source : https://fincherandozment.com/pages/custom-design
- [V] « 66 items » en fiançailles et mariage, « 21 items » en synthétique. Sources : https://fincherandozment.com/collections/engagement-wedding ; https://fincherandozment.com/collections/lab-grown-bridal-collection
- [V] Garanties : contrôle GIA sous 30 jours, écart de prix remboursé « plus an additional 10% », reprise du diamant pour un diamant naturel au moins 50 % plus cher, échange ou remboursement sous 30 jours sauf « special ordered or customized items » ; « over 120 years ». Source : https://fincherandozment.com/pages/our-guarantee
- [V] L'ancienne page `/engagement-rings` (citée par la recherche, « direct diamond importers ») répond 404 : cette affirmation n'est plus vérifiable.

### 6. Studio Mullins (Birmingham)

- [V] « Our design studio is based out of Birmingham, Alabama, serving clients nationwide. Our bespoke jewelry is created by our team of Master Jeweler's in New York City » ; étapes : consultation et rendu sommaire, « 3D CAD RENDERING », « PLASTIC MODEL » sur demande, sertissage et finition. Source : https://studiomullins.com/bespokeprocess
- [V] Bague « Annie » : 18 k jaune et platine, « made to order, please allow 4-8 weeks », « all sales are final », bouton « Inquire » ; alliance « Signature Lover's Knot Band » à 1 400 $. Source : https://studiomullins.com/shop/p/annie-engagement-ring
- [V, extrait de recherche] Or recyclé et pierres « ethically sourced » (page « bespokeportfolio », non lue).

### 7. Grogan Jewelers by Lon (Florence, Huntsville)

- [V] 285 Cox Creek Parkway, Florence, AL 35630 ; 315 The Bridge Street, Suite 101, Huntsville, AL 35806 ; Brentwood, TN sur rendez-vous. Source : https://www.groganjewelers.com/pages/engagement-rings-in-huntsville-al
- [V] Constructeur en 3 étapes, filtres métal, forme et prix. Source : https://www.groganjewelers.com/ringsettings
- [V] Fiche lue sans prix (« Inquire via Email »). Source : https://www.groganjewelers.com/jewelry-details/engagement-rings/15-ctw-oval-shape-round-cut-diamond-semi-mound-engagement-ring-in-14k-rose-and-white-gold/828217

### 8. Brock's Jewelers (Madison)

- [V] 8760 Madison Boulevard, Madison, AL 35758 ; plus de 45 ans ; « We take orders by phone during our business hours ». Source : https://brocksjewelers.com/
- [V] « Showing 1–20 of 202 results » ; bandeau « ONLINE CHECKOUT DISABLED ». Source : https://brocksjewelers.com/product-category/diamond-engagement-rings/
- [V] « Showing 1–20 of 27 results » en synthétique (boucles, bracelets, pierres nues). Source : https://brocksjewelers.com/product-category/lab-grown-diamonds/

### 9. Sanders Jewelry (Andalusia)

- [V] 741 Copeland Dr, Andalusia, AL 36420 ; « since 1972 » ; « we then will create a 3D rendering in out state-of-the-art software and create a mold ». Source : https://www.sandersjewelry.com/pages/custom-jewelry
- [V] Constructeur Punchmark en 3 étapes. Source : https://www.sandersjewelry.com/ringsettings

### 10. Barton-Clay Fine Jewelers (Mountain Brook)

- [V] Mountain Brook, AL 35223 (2701 Cahaba Road selon l'annuaire de l'AJA) ; « 682 products » en fiançailles. Sources : https://bartonclay.com/collections/engagement-rings ; https://alabamajewelers.us/find-a-local-jeweler
- [V] Collection maison « Barton-Clay engagement rings » : 5 produits. Source : https://bartonclay.com/collections/barton-clay-engagement-rings

## Vus mais non classés

| Acteur | Ville | Constat |
| --- | --- | --- |
| Anthony & Co. Jewelers | Hoover | Accueil chiffré (V) : 4 bagues de 1 654 à 2 366 $, dont une monture marquise pour diamant synthétique (`160125-MQ100YLG`) à 1 654 $ ; depuis 1958. Fiches renvoyées vers `/verify.html` : partiel, non contourné. |
| Diamond Jewelers | Gulf Shores | Constructeur Punchmark en 3 étapes (V), identique à Grogan et Sanders ; rien de distinctif relevé. |
| Bromberg's | Birmingham, Mountain Brook | Grande maison historique, mais la page des bagues de fiançailles répond « It seems we can't find what you're looking for » (V) : pas de vente en ligne de bagues. robots.txt : ClaudeBot, GPTBot, CCBot interdits ; « * » avec `Crawl-delay: 10`. |
| Goldstein's Jewelers | Mobile | Processus sur mesure en 4 étapes avec CAO (V, extrait de recherche) ; depuis 1879 ; collection de bagues vide dans la page servie (V) ; maisons sœurs en Arkansas et au Texas (V). |
| M&M Jewelers | Birmingham (Inverness) | Parcours croquis, modèle CAO 3D, cire, fabrication (V) ; page « lab grown engagement rings » sans contenu chiffré (V). |
| Alabama Wholesale Diamonds | Birmingham | Catalogues fournisseurs intégrés (Benchmark, Overnight Mountings) (V) ; ses pages « engagement-rings » et « lab-grown » répondent 404 (V), alors que des prix synthétiques (1 299,95 à 3 999,95 $) figurent dans un extrait de recherche plus ancien. |
| Osborne's Jewelers | Huntsville, Athens | « one of Alabama's largest independent jewelers », depuis 1979 (V) ; pas de prix sur l'accueil. |
| Lou's Jewelry, Zundel's, Cronier's, Gary K, Isbell, Avani Rupă, Mefford, Jimmy Smith, Shay's, Wallace-Burke, Bradshaw, Michael Ross | Mobile, Montgomery, Madison, Birmingham, Florence, Decatur, Hoover, Dothan | Accueils lus (V) : ni configurateur, ni prix de bagues relevés (Jimmy Smith : composant de constructeur Punchmark dans le code, non exploré ; Mefford : collection de bagues en 404). |

Repérés par la recherche seulement, sites non ouverts : Rebecca's Fine Jewelry (McCalla), Cummings Jewelry Design (Birmingham), Jewelry by Design et Swanson Diamond Center (Auburn), Williams Jewelers (Dothan), Steeds Jewelers (Vestavia Hills).

## Écartés

- [V, extrait de recherche] Venazia : pages « Birmingham, AL » générées pour le référencement, téléphone en 305 (Floride) ; vendeur en ligne national, pas d'implantation en Alabama établie (site non ouvert).
- [V] The Sassy South (« Huntsville ») : site sans adresse postale, orthographe britannique (« Jewellery »), mention « Tax-free », blog sur la bijouterie canadienne ; implantation réelle non établie. robots.txt interdit ClaudeBot (accueil seul lu).
- [S] Diamonds Direct (Birmingham) : enseigne de Signet, exclue par la consigne ; présence en Alabama non revérifiée ici.
- [V, extrait de recherche] Kay (Mobile) : chaîne nationale citée par l'annuaire JewelryStoresAtlas, exclue.

## Sources

Pages lues le 15/11/2026 avec curl (robots.txt de chaque site lu avant, avec curl) :

- Hudson-Poole : https://www.hudsonpoole.com/robots.txt ; https://www.hudsonpoole.com/ ; https://www.hudsonpoole.com/page/custom-engagement-rings.html ; https://www.hudsonpoole.com/page/custom-ring-builder.html ; https://www.hudsonpoole.com/design-your-own-ring/choose-your-style ; https://www.hudsonpoole.com/lab-grown-bridal/lab-grown-engagement ; https://www.hudsonpoole.com/find-a-lab-created-diamond.html ; https://www.hudsonpoole.com/page/benchmark-ring-lab.html
- JewelerOS : https://www.jeweleros.com/robots.txt ; https://www.jeweleros.com/static/dist/partner_config.js
- Sabghi : https://www.sabghijewelers.com/robots.txt ; https://www.sabghijewelers.com/create-your-dream-ring/ ; https://www.sabghijewelers.com/wp-content/plugins/sabghi-ring-designer/assets/designer.js?ver=1.0.0
- Ware : https://www.warejewelers.com/robots.txt ; https://www.warejewelers.com/ ; https://www.warejewelers.com/page/custom-engagement-rings.html ; https://www.warejewelers.com/page/custom-ring-builder.html ; https://www.warejewelers.com/wedding-and-bridal/engagement-rings ; https://www.warejewelers.com/wedding-and-bridal/engagement-rings/all-engagement-rings
- Marquirette's : https://www.marquirettes.com/robots.txt ; https://www.marquirettes.com/custom-engagement-rings/ ; https://www.marquirettes.com/design-your-ring/ ; https://www.marquirettes.com/catalog/engagement-ring/ (redirigée vers `/verify.html`)
- Fincher & Ozment : https://fincherandozment.com/robots.txt ; https://fincherandozment.com/engagement-rings (404) ; https://fincherandozment.com/collections/engagement-wedding ; https://fincherandozment.com/collections/lab-grown-bridal-collection ; https://fincherandozment.com/pages/custom-design ; https://fincherandozment.com/pages/our-guarantee
- Studio Mullins : https://studiomullins.com/robots.txt ; https://studiomullins.com/ ; https://studiomullins.com/bespokeprocess ; https://studiomullins.com/shop?category=Engagement+Rings ; https://studiomullins.com/shop/engagement ; https://studiomullins.com/shop/p/annie-engagement-ring
- Grogan : https://www.groganjewelers.com/robots.txt ; https://www.groganjewelers.com/sitemap.xml ; https://www.groganjewelers.com/pages/engagement-rings-in-huntsville-al ; https://www.groganjewelers.com/ringsettings ; https://www.groganjewelers.com/jewelry/engagement-rings ; https://www.groganjewelers.com/jewelry-details/engagement-rings/15-ctw-oval-shape-round-cut-diamond-semi-mound-engagement-ring-in-14k-rose-and-white-gold/828217 ; https://www.groganjewelers.com/pages/lab-grown-diamonds ; https://www.groganjewelers.com/benchmark-ring-lab
- Brock's : https://brocksjewelers.com/robots.txt ; https://brocksjewelers.com/ ; https://brocksjewelers.com/product-category/diamond-engagement-rings/ ; https://brocksjewelers.com/product-category/lab-grown-diamonds/
- Sanders : https://www.sandersjewelry.com/robots.txt ; https://www.sandersjewelry.com/ ; https://www.sandersjewelry.com/ringsettings ; https://www.sandersjewelry.com/pages/custom-jewelry
- Barton-Clay : https://www.bartonclay.com/robots.txt ; https://bartonclay.com/ ; https://bartonclay.com/pages/custom-engagement-ring ; https://bartonclay.com/collections/barton-clay-engagement-rings ; https://bartonclay.com/collections/engagement-rings
- Vus mais non classés : https://www.anthonycojewelers.com/robots.txt ; https://www.anthonycojewelers.com/ ; https://www.anthonycojewelers.com/catalog/romance/160125-mq100ylg/ (redirigée vers `/verify.html`) ; https://www.diamondjewelers.net/ ; https://www.diamondjewelers.net/ringsettings ; https://brombergs.com/robots.txt ; https://brombergs.com/rings/engagement/ ; https://goldsteinsjewelry.com/robots.txt ; https://goldsteinsjewelry.com/pages/engagement-rings ; https://goldsteinsjewelry.com/collections/engagement-rings ; https://mmjewelersbirmingham.com/ ; https://mmjewelersbirmingham.com/lab-grown-diamond-engagement-rings.aspx ; https://alabamawholesalediamonds.com/ ; https://alabamawholesalediamonds.com/collections/engagement-rings (404) ; https://alabamawholesalediamonds.com/collections/lab-grown-diamond-jewelry (404) ; https://alabamawholesalediamonds.com/pages/benchmark ; https://alabamawholesalediamonds.com/pages/overnight-mountings ; https://www.meffordjewelers.com/collections/engagement-rings (404) ; accueils et robots.txt de www.osbornesjewelershuntsville.com, www.lousjewelry.com, zundelsjewelry.com, www.croniers.com, www.garykjewelers.com, isbelljewelers.com, avanirupa.com, www.meffordjewelers.com, www.jsmithjewelers.com, shayjewelry.com, www.wallaceburke.com, www.bradshawjewelers.com, michaelrossjewelers.com (www.marksjewelryhomewood.com : connexion refusée, erreur 502 du proxy)
- Écartés : https://thesassysouth.com/robots.txt ; https://thesassysouth.com/

Lues par Parallel (web_fetch) : https://alabamajewelers.us/find-a-local-jeweler (annuaire des membres de l'Alabama Jewelers Association, copie du 06/11/2026).

Recherches web génériques (Parallel Search, extraits de résultats seulement) : « Birmingham Alabama jeweler design your own engagement ring » ; « Huntsville Alabama jeweler custom engagement rings ring builder » ; « Alabama jeweler lab grown diamond engagement rings shop online » ; « Mobile Alabama jeweler engagement rings custom design » ; « Montgomery Alabama jeweler engagement rings ring builder » ; « Tuscaloosa Auburn jeweler custom engagement rings online » ; « Bromberg's engagement rings online » ; « Huntsville jeweler design your ring 3D » ; « Birmingham AL lab grown engagement rings jeweler prices » ; « Mountain Brook Homewood jeweler custom engagement ring » ; « Alabama jeweler start with a setting start with a diamond » ; « Mobile AL jeweler design your own ring » ; « Madison Huntsville AL jeweler lab grown engagement rings » ; « Gulf Shores Fairhope jeweler custom engagement rings 3D » ; « Alabama custom engagement ring studio CAD rendering online » ; « Birmingham Alabama engagement ring brand ships nationwide » ; « Alabama lab grown diamond jeweler online store engagement » ; « Huntsville AL jewelry store engagement rings shop online » ; « Huntsville jeweler custom engagement ring CAD » ; « Hoover Vestavia jeweler engagement rings online shop ». Les extraits citent aussi https://www.venazia.com/lab-grown-diamond-engagement-rings-birmingham-al et https://jewelrystoresatlas.com/alabama (non ouverts).
