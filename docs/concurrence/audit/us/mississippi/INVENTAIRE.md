# Inventaire des joailliers : Mississippi

Recensement du 24 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site (et contrôlé par programme, adresse par adresse, avant chaque lecture), aucun formulaire rempli ni envoyé, aucun compte créé, rien ajouté au panier, aucun chat ni SMS ouvert, au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue, adresse donnée dans la fiche ou en fin de document), **[V, extrait]** lu dans l'extrait qu'un moteur de recherche donne de la page (page non ouverte ou illisible), **[V, données]** lu dans les données publiques de la page (catalogue Shopify `products.json`, données structurées), pas dans le texte affiché, **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié). Prix en dollars américains, tels que présents le 24/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche Parallel Search (découverte des acteurs, 5 appels regroupant 25 requêtes génériques, plus une lecture, listées en fin de document), puis curl tel quel (sans changer d'identité ni d'en-tête) : 47 pages et 20 robots.txt sur 16 domaines. Le crédit Firecrawl était épuisé (réponse « Insufficient credits » au premier essai) et la lecture Parallel ne rend pas les scripts : aucune page n'a été vue avec ses scripts exécutés. Conséquence : les configurateurs, tous chargés par script, n'ont pas été vus en fonctionnement ; leur présence, leur fournisseur et leur page de départ sont vérifiés, leur contenu ne l'est pas. Les catalogues Punchmark (J. Parkerson, Van Atkins) sont aussi chargés par script : leurs prix n'ont pas pu être lus.

## Constat général

- [V] **Aucun configurateur 3D propre à un joaillier.** Les constructeurs 3D trouvés sont des outils loués : **JewelerOS** (script `jeweleros.com/static/dist/jos.js` ou `partner_config.js`) chez Kux (Laurel), Selman's (McComb) et W.P. Shelton (Ocean Springs), avec la même page type que Romance Diamond et Carter's Jewel Chest en Arkansas (« Design your ring online in stunning 3D », « Pick out your center stone in our … showroom », « Finalize & order ») ; **CaratWise** (script `release.caratwise.com/production/latest/assets/js/main.js`) chez Traditional Jewelers. [I] Dans tous les cas, la 3D est un modèle de catalogue paramétrique, pas le fichier de fabrication de l'atelier, et la commande se conclut en salle.
- [V] Autres outils en marque blanche : « Build Your Own » de Punchmark (monture puis diamant, naturel ou synthétique) chez J. Parkerson ; constructeur d'alliances Benchmark (« Benchmark Ring Lab », script `benchmarkrings.com/customizer-iframe/…`) chez Van Atkins ; vitrine Stuller « Jeweler Showcase » chez W.P. Shelton (« Jewelry Bar ») et Britt Jewelry (« Custom Ring Builder »), dont le robots.txt interdit tout robot.
- [V] L'acteur le plus proche du modèle de JR Diamond n'a pas de 3D : **Carter's Collective** (Hattiesburg) vend sa propre collection « Bloom » de 12 montures en diamant synthétique, configurables sur la fiche (forme, 2 à 5 ct, or 14 k jaune, blanc ou rose), avec un prix par combinaison et un bouton « Add to cart », « Ships in 3-6 weeks ». C'est le même schéma qu'Easson Diamonds en Arkansas.
- [V] Transparence de fabrication : **Platinum Jewelers** (Byram) décrit tout son processus (rendu CAO photoréaliste, maquette en cire physique avant la fonte, « 2 to 4 weeks » après validation de la CAO) et vend aussi en ligne à prix affiché. Selman's annonce un atelier sur place (« manufacturing facilities on site »), W.P. Shelton « two bench jewelers ». Aucun site lu n'explique la composition du prix (métal, façon, pierre, marge).
- [V] Prix affichés chez Carter's Collective, Selman's, Traditional, W.P. Shelton, Platinum Jewelers, Juniker et Jewelmasters ; absents chez Kux (137 bagues sans prix). Non lisibles sans script chez J. Parkerson et Van Atkins.
- [V] Synthétique très présent : 27 des 30 premières bagues de Selman's sont en synthétique, avec numéro de certificat (souvent IGI) dans la description ; collection Bloom entièrement synthétique chez Carter's Collective ; montures « Lab Grown » chez Traditional ; rubriques synthétiques chez J. Parkerson, Platinum Jewelers, Jewelmasters.
- [V] Délais annoncés : « a couple of weeks » (bague du configurateur JewelerOS : Kux, Selman's, W.P. Shelton), 2 à 4 semaines après validation de la CAO (Platinum Jewelers), 3 à 6 semaines (Carter's Collective, Bloom). [I] Les 14 jours ouvrés de JR Diamond sont au niveau des plus rapides.
- [V] Blocages : Traditional Jewelers (plate-forme Thinkspace) redirige son catalogue vers `/verify.html` (page de vérification anti-robot, comme Linden's en Arkansas) ; les vitrines Stuller `*.jewelershowcase.com` (W.P. Shelton, Britt) ont un robots.txt `Disallow: /` pour tous : non lues. Aucun Cloudflare bloquant. Kux et Traditional autorisent explicitement les agents d'IA dans leur robots.txt (ClaudeBot, Claude-User, GPTBot, etc.).

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Carter's Collective | Hattiesburg | https://carterscollective.com/ | https://carterscollective.com/collections/bloom-collection-engagement-rings (exemple de fiche configurable : https://carterscollective.com/products/tulip-oval-lab-grown-engagement-ring) | oui (options sur la fiche : forme, carat, couleur d'or ; sans 3D) | non | [V] Collection maison Bloom, 12 montures « Customizable Lab Grown », 7 formes dont marquise, 2 à 5 ct, or 14 k en 3 couleurs, prix par combinaison de 3 270 $ à 8 650 $ [V, données], « Add to cart », « Ships in 3-6 weeks », pierre F-H, VS1-VS2. Aussi bagues en naturel (995 $ à 29 900 $ [V, données]) et sur mesure à partir d'un bijou de famille (« grandma's ring »). |
| 2 | Selman's Jewelers | McComb | https://selmansjewelers.com/ | https://selmansjewelers.com/pages/custom-ring-builder (présentation : https://selmansjewelers.com/pages/custom-engagement-rings ; catalogue : https://selmansjewelers.com/collections/engagement-rings) | oui (3D JewelerOS) | non | [V] Constructeur 3D, puis choix de la pierre en salle, bague « in just a couple of weeks ». Atelier sur place, membre de l'American Gem Society depuis 1985, maison fondée en 1945. 30 bagues de 505 $ à 8 280 $, dont 27 en synthétique avec numéro de certificat (IGI, « LG… ») [V, données] ; une marquise synthétique 3 ct IGI F VS1 à 4 270 $. |
| 3 | Traditional Jewelers | Biloxi, McComb, Ridgeland | https://www.traditionaljewelers.net/ | https://www.traditionaljewelers.net/design-your-ring/ | oui (3D CaratWise) | partiel (catalogue redirigé vers `/verify.html`) | [V] « Design Your Ring » charge CaratWise ; accueil avec montures à prix affiché de 1 480 $ à 2 279 $, dont des montures « Lab Grown » et une monture marquise (référence `160125-MQ100YLG`, 1 557 $). Trois salles, depuis 1975. Catalogue non lu (vérification anti-robot). |
| 4 | Kux Jewelers | Laurel | https://www.kuxjewelers.com/ | https://www.kuxjewelers.com/design-your-ring/ (présentation : https://www.kuxjewelers.com/custom-engagement-rings/) | oui (3D JewelerOS) | non | [V] « Every shape, setting and metal, previewed in 3D », « Save your design and share it », « Finished in person » ; puis pierre choisie en salle, bague « in just a couple of weeks ». 137 bagues en ligne, sans prix. Maison familiale depuis 1965, gemmologue diplômée du GIA dans la famille. |
| 5 | W.P. Shelton Jewelers | Ocean Springs | https://wpsheltonjewelers.com/ | https://wpsheltonjewelers.com/pages/custom-ring-builder (présentation : https://wpsheltonjewelers.com/pages/custom-engagement-rings) | oui (3D JewelerOS ; « Jewelry Bar » Stuller) | partiel (vitrine Stuller interdite par robots.txt) | [V] Même parcours JewelerOS que Selman's et Kux. « Two bench jewelers », refonte de bijoux de famille, depuis 1945. 4 bagues « in-store » de 1 775 $ à 9 900 $ [V, données]. Le « Jewelry Bar » est une iframe `wpsheltonjewelers-frame-categoryembed.jewelershowcase.com` (Stuller) non lue. |
| 6 | Platinum Jewelers | Byram (agglomération de Jackson) | https://platinumjewelersms.com/ | https://platinumjewelersms.com/custom-engagement-rings-jewelry-design/ (catalogue : https://platinumjewelersms.com/engagement/) | non | non | [V] Processus le plus transparent de l'État : consultation, rendu CAO 3D photoréaliste, maquette en cire physique, fonte ; « 2 to 4 weeks » après validation de la CAO ; naturel ou synthétique, platine, or 14 et 18 k. Bagues soldées à prix affiché (de 799 $ à 5 800 $) avec « Add to cart ». |
| 7 | J. Parkerson Jewelers | Starkville | https://www.jparkersonjewelers.com/ | https://www.jparkersonjewelers.com/build-your-own (monture : `#/ring`, diamant : `#/diamond`) | oui (« Build Your Own » Punchmark, sans 3D) | non | [V] Monture ou diamant en premier, rubriques diamants synthétiques et naturels, bagues complètes ou montures seules ; formulaire de projet sur mesure en plusieurs étapes sur l'accueil (« no downpayment needed », [V, extrait]). Bijoutier depuis 1986. Prix chargés par script, non lus. |
| 8 | Juniker Jewelry Co. | Madison | https://www.junikerjewelry.com/ | https://www.junikerjewelry.com/collections/bridal (sur mesure : https://www.junikerjewelry.com/pages/custom-jewelry-design-in-madison-ms) | non | non | [V] Prix affichés : 30 premières pièces de mariage de 1 575 $ à 40 000 $ [V, données] ; « Heritage Collection » faite main, adaptable à « any size or shape center stone » ; sur mesure dessiné à l'échelle ou en CAO. Quatrième génération. Aucun synthétique relevé dans les 30 premières pièces. |
| 9 | Van Atkins Jewelers | New Albany, Oxford, Tupelo | https://www.vanatkins.com/ | https://www.vanatkins.com/benchmark-ring-lab (bagues : https://www.vanatkins.com/jewelry/engagement-rings) | oui (alliances seulement, Benchmark) | non | [V] Constructeur d'alliances Benchmark (« Build Your Wedding Band ») ; « The South's Leader in Estate Jewelry & Diamond Solitaires », rubriques de bagues anciennes par forme (dont marquise). Catalogue Punchmark chargé par script : prix non lus. Second site pour la salle d'Oxford : https://www.oxfordjeweler.com/ |
| 10 | Jewelmasters | Hattiesburg | https://jewelmastersonline.com/ | https://jewelmastersonline.com/collections/engagement-rings | non | non | [V] 19 bagues de 1 800 $ à 15 500 $ [V, données], dont 4 en synthétique (8 050 $ à 15 500 $) ; marques Verragio, Kim International ; sur mesure par le fondateur, bijoutier depuis 1977. Libellé de menu « Customizable Engagement Rings » (cible non vérifiée). |

## Fiches

### 1. Carter's Collective (Hattiesburg)

- [V] Adresse : 6093 US Highway 98, Hattiesburg, MS 39402 ; « On-Site Master Jeweler », « Woman-Owned », « Custom Design Specialists » ; collection « 40th Anniversary » (« Forty Years. Forty Pieces. »). Source : https://carterscollective.com/
- [V] Bloom : « The Bloom Collection lets you build a custom engagement ring, starting with a setting inspired by nature » ; étapes « Choose Your Setting », forme, « Choose Your Carat Weight », « Pick your Metal ». Source : https://carterscollective.com/collections/bloom-collection-engagement-rings
- [V] Fiche Tulip : options « Lab Grown Diamond Shape », « Lab Grown Diamond Carat Weight » (2 à 5 Carat), « 14 Karat Gold Color » ; prix affiché 4 125 $ pour Oval / 2 Carat / Yellow Gold ; « Add to cart » ; « Ships in 3-6 weeks » ; « Center Stone Color: F-H », « Clarity: VS1-VS2 ». Source : https://carterscollective.com/products/tulip-oval-lab-grown-engagement-ring
- [V, données] 84 combinaisons pour Tulip (7 formes × 4 carats × 3 ors), de 4 125 $ à 7 100 $ ; 12 montures Bloom de 3 270 $ à 8 650 $ ; dans la rubrique générale, 12 bagues en naturel sur 30, jusqu'à 29 900 $. Sources : `collections/lab-grown-engagement-rings/products.json`, `collections/engagement-rings/products.json`.
- [I] Pas de 3D ni de vidéo de pierre ; pas de platine dans les options lues ; prix non expliqué. Seul acteur de l'État qui combine modèles propres, prix par configuration et achat en ligne.

### 2. Selman's Jewelers (McComb)

- [V] Adresse : 1311 Delaware Ave., McComb, MS 39648. « Founded by watchmaker Charles Selman » en 1945, « manufacturing facilities on site », membre de l'American Gem Society depuis 1985. Source : https://selmansjewelers.com/pages/custom-engagement-rings
- [V] Parcours : « Design your ring online in stunning 3D », « Pick out your center stone in our McComb, MS showroom », « Finalize & order your ring with our expert team » ; « ready for you in just a couple of weeks ». Même source.
- [V] La page « Custom Ring Builder » charge `jeweleros.com/static/dist/partner_config.js` ; contenu chargé par script. Source : https://selmansjewelers.com/pages/custom-ring-builder
- [V, données] 30 bagues de 505 $ (bague synthétique 0,25 ct) à 8 280 $ (synthétique taille radiant, 10 ct au total) ; 27 en synthétique, la plupart avec numéro de certificat dans la description (IGI ou « LG… ») ; marquise « Lightworks » 3,00 ct IGI F VS1 à 4 270 $. Source : `https://selmansjewelers.com/collections/engagement-rings/products.json`

### 3. Traditional Jewelers (Biloxi, McComb, Ridgeland)

- [V] « Three convenient locations in Biloxi, McComb and Ridgeland » ; « Serving Mississippi since 1975 » ; site Thinkspace. Source : https://www.traditionaljewelers.net/
- [V] Accueil : bagues à prix affiché, dont « Classic Semi-Mount Lab Grown Diamond Engagement Ring » et « Fancy Semi-Mount Lab Diamond Engagement Ring » ; références et prix lus : `160125-MQ100YLG` 1 557 $, `160125-OV200Y` 2 245 $, `160127-RD100Y` 1 480 $. Même source. Un extrait de recherche du même jour donnait d'autres prix pour certaines références (2 118 $ pour `160125-MQ100YLG`) [V, extrait] : [I] prix modifiés entre l'indexation et la lecture.
- [V] « Design Your Ring » charge CaratWise (`release.caratwise.com/production/latest/assets/js/main.js`, élément `caratwise-root`). Source : https://www.traditionaljewelers.net/design-your-ring/
- [V] Le catalogue `/catalog/engagement-ring/` redirige vers `/verify.html?next=/catalog/engagement-ring/` : une seule lecture, pas de nouvel essai. `/custom/` répond 404.

### 4. Kux Jewelers (Laurel)

- [V] Adresse : 650 N. 15th Avenue, Laurel, MS 39440 ; « Independently Owned and Operated Since 1965 » ; « Every shape, setting and metal, previewed in 3D », « Save your design and share it », « Finished in person, with the guidance Kux has offered since 1965 ». Source : https://www.kuxjewelers.com/
- [V] Même texte type JewelerOS que Selman's (« Design your ring online in stunning 3D », « Pick out your center stone in our Laurel showroom », « just a couple of weeks ») ; « GIA Graduate Gemologist » dans la famille ; 4,9 étoiles sur plus de 380 avis Google (déclaré). Source : https://www.kuxjewelers.com/custom-engagement-rings/
- [V] La page « Design Your Ring » charge `jos.js` et `partner_config.js` (JewelerOS). Source : https://www.kuxjewelers.com/design-your-ring/
- [V] « 137 Items » dans les bagues de fiançailles (marques Beautiful Bride, Love Story Diamonds), sans prix affiché. Source : https://www.kuxjewelers.com/engagement-rings/
- [V] Sur mesure : « Design Your Own Ring • Computer Aided Designs • 3D Modeling » [V, extrait]. Source : https://www.kuxjewelers.com/services/custom-jewelry-designs/

### 5. W.P. Shelton Jewelers (Ocean Springs)

- [V] Adresse : 1516 Government St, Ocean Springs, MS 39564 ; fondée en 1945, dirigée par la petite-fille du fondateur, « two bench jewelers, and an appraiser » ; « re-designing heirloom jewelry ». Source : https://wpsheltonjewelers.com/pages/custom-engagement-rings
- [V] Page « Custom Ring Builder » : `partner_config.js` de JewelerOS. Source : https://wpsheltonjewelers.com/pages/custom-ring-builder
- [V] « Welcome to our Jewelry Bar! » : iframe `https://wpsheltonjewelers-frame-categoryembed.jewelershowcase.com/browse/3c-collection/engagement` (Stuller). Le robots.txt de ce domaine est `User-agent: * / Disallow: /` : non lue. Source : https://wpsheltonjewelers.com/pages/personalized-engagement-rings
- [V, données] 4 bagues « in-store » de 1 775 $ à 9 900 $ (Stuller, Kim International, CoStar). Source : `https://wpsheltonjewelers.com/collections/in-store-engagement-rings/products.json`

### 6. Platinum Jewelers (Byram)

- [V] Adresse : 7282 S. Siwell Rd. Ste. A, Byram, MS 39272 ; « The Custom Bridal Journey » : consultation, « CAD & 3D Rendering » (« Approve a photoreal 3D rendering before casting begins »), « Master Creation ». Source : https://platinumjewelersms.com/
- [V] « inspect a physical 3D wax model » ; « Most custom pieces take between 2 to 4 weeks from the moment you approve your 3D CAD design » ; « natural or lab-grown diamonds », « platinum, 14k/18k gold » ; alliance contournée en 3D pour épouser la bague. Source : https://platinumjewelersms.com/custom-engagement-rings-jewelry-design/
- [V] Rubrique « Engagement » : prix barrés et soldés (6 800 $ → 5 800 $ ; 1 250 $ → 799 $), boutons « Add to cart ». Source : https://platinumjewelersms.com/engagement/
- [I] La partie spécialisée est confiée à des « master bench jewelers » partenaires (texte de l'accueil) : pas d'atelier intégré revendiqué.

### 7. J. Parkerson Jewelers (Starkville)

- [V] Adresse : 100 Russell Street Suite 7, Starkville, MS 39759 ; « Jamie Parkerson has been perfecting his craft since 1986 » ; plate-forme Punchmark. Source : https://www.jparkersonjewelers.com/
- [V] « Build Your Own » : « Start with a Setting », « Start with a Diamond », « Lab Grown Diamonds », « Natural Diamonds » ; contenu chargé par script. Source : https://www.jparkersonjewelers.com/build-your-own
- [V, extrait] Formulaire « What would you like to build? » (type de bijou, style, forme, photos), « no downpayment needed ». Source : https://www.jparkersonjewelers.com/
- [V] Liste des bagues : « fetching products... » sans script, prix non lus. Source : https://www.jparkersonjewelers.com/jewelry/engagement-rings

### 8. Juniker Jewelry Co. (Madison)

- [V, données] Adresse : 1485 Highland Colony Parkway, Madison, MS 39110 ; « a fourth generation jewelry store ». Source : https://www.junikerjewelry.com/
- [V] « Heritage Collection » : « Each piece of the collection is unique and handmade, so the pieces can be made to fit any size or shape center stone you choose. » Même source.
- [V, données] 30 premières pièces de la rubrique « Bridal » de 1 575 $ à 40 000 $ (platine trois pierres 3,29 ct), aucune à prix nul, aucune mention de synthétique. Source : `https://www.junikerjewelry.com/collections/bridal/products.json`
- [V] Sur mesure : « draw your idea to scale, or will create your piece in CAD ». Source : https://www.junikerjewelry.com/pages/custom-jewelry-design-in-madison-ms

### 9. Van Atkins Jewelers (New Albany, Oxford, Tupelo)

- [V] Salles : 129 West Bankhead St., New Albany, MS 38652 ; 124 Courthouse Square, Oxford, MS 38655 ; 124 W Main St, Tupelo, MS 38804 ; « The South's Leader in Estate Jewelry & Diamond Solitaires ». Source : https://www.vanatkins.com/
- [V] « Benchmark Ring Lab » charge `benchmarkrings.com/customizer-iframe/bm-ring-builder-iframe-controller.js` ; menu « Build Your Wedding Band ». Source : https://www.vanatkins.com/benchmark-ring-lab
- [V] Liste des bagues chargée par script (« fetching products... »), prix non lus. Source : https://www.vanatkins.com/jewelry/engagement-rings

### 10. Jewelmasters (Hattiesburg)

- [V] Adresse : 6156 US Highway 98, Suite 60, Hattiesburg, MS 39402 ; « Since 1994 » ; fondateur bijoutier depuis 1977. Source : https://jewelmastersonline.com/
- [V, données] 19 bagues de 1 800 $ à 15 500 $, dont 4 synthétiques (« Lab Grown 3 Stone » 8 050 $, solitaire baguette allongée 9 075 $). Source : `https://jewelmastersonline.com/collections/engagement-rings/products.json`

## Vus mais non classés

- **Britt Jewelry** (Cleveland, « Established in 1989 ») : lien « Custom Ring Builder » vers `https://brittjewelry.jewelershowcase.com` (Stuller), dont le robots.txt interdit tout robot : non lu, marqué **bloqué**. Sur mesure en CAO (formation GemVision cité). https://www.brittjewelry.com/
- **Stone's Jewelry** (Tupelo, 709 W Main St, depuis 1976) : galeries d'images, pas de vente ni de prix en ligne [V]. https://stonesjewelryinc.com/
- **Horne Custom Jewelry** (Gulfport, 1500 Pass Road, depuis 2013) : sur mesure uniquement, pas de prix ni de boutique [V]. https://hornecustomjewelry.com/

## Écartés

- **Venazia** : pages « Tupelo, MS », « Jackson, MS », « Hattiesburg, MS », « Gulfport, MS », « Oxford, MS » [V, extrait], mais numéro (305) 332-9797 et 1-800 [V, extrait] ; [I] vendeur national en ligne (déjà écarté en Arkansas pour la même raison).

## Blocages constatés

| Site | Constat | Conduite |
| --- | --- | --- |
| www.traditionaljewelers.net | `/catalog/engagement-ring/` redirigé vers `/verify.html?next=…` (vérification anti-robot Thinkspace) | Une seule lecture, pas de nouvel essai ; accueil et page du configurateur lisibles |
| wpsheltonjewelers-frame-categoryembed.jewelershowcase.com | robots.txt `User-agent: * Disallow: /` | Non lu |
| brittjewelry.jewelershowcase.com | robots.txt `User-agent: * Disallow: /` | Non lu |
| release.caratwise.com (Traditional) | robots.txt en 403 (AccessDenied) ; `www.caratwise.com` autorise tout sauf `/studio/` ; outil chargé par script, non exécuté | À voir à la main |
| jeweleros.com (Kux, Selman's, W.P. Shelton) | Pas de blocage : `Allow: /` sauf `/api/` ; outil non exécuté faute de navigateur | À voir à la main |
| Punchmark (J. Parkerson, Van Atkins) | Pas de blocage ; produits chargés par script (`fetching products...`) | À voir à la main |

## Sources

Pages lues le 24/11/2026 avec curl (sans changement d'identité) ; robots.txt de chaque domaine lu avant toute page :

- Carter's Collective : https://carterscollective.com/robots.txt ; https://carterscollective.com/ ; https://carterscollective.com/collections/bloom-collection-engagement-rings ; https://carterscollective.com/products/tulip-oval-lab-grown-engagement-ring ; https://carterscollective.com/collections/engagement-rings/products.json ; https://carterscollective.com/collections/lab-grown-engagement-rings/products.json
- Selman's Jewelers : https://selmansjewelers.com/robots.txt ; https://selmansjewelers.com/ ; https://selmansjewelers.com/pages/custom-engagement-rings ; https://selmansjewelers.com/pages/custom-ring-builder ; https://selmansjewelers.com/collections/engagement-rings ; https://selmansjewelers.com/collections/engagement-rings/products.json
- Traditional Jewelers : https://www.traditionaljewelers.net/robots.txt ; https://www.traditionaljewelers.net/ ; https://www.traditionaljewelers.net/design-your-ring/ ; https://www.traditionaljewelers.net/catalog/engagement-ring/ (redirigée vers `/verify.html`) ; https://www.traditionaljewelers.net/custom/ (404) ; https://www.caratwise.com/robots.txt ; https://release.caratwise.com/robots.txt (403)
- Kux Jewelers : https://www.kuxjewelers.com/robots.txt ; https://www.kuxjewelers.com/ ; https://www.kuxjewelers.com/custom-engagement-rings/ ; https://www.kuxjewelers.com/design-your-ring/ ; https://www.kuxjewelers.com/engagement-rings/ ; https://www.jeweleros.com/robots.txt
- W.P. Shelton Jewelers : https://wpsheltonjewelers.com/robots.txt ; https://wpsheltonjewelers.com/ ; https://wpsheltonjewelers.com/pages/custom-engagement-rings ; https://wpsheltonjewelers.com/pages/custom-ring-builder ; https://wpsheltonjewelers.com/pages/personalized-engagement-rings ; https://wpsheltonjewelers.com/collections/in-store-engagement-rings ; https://wpsheltonjewelers.com/collections/in-store-engagement-rings/products.json ; https://wpsheltonjewelers-frame-categoryembed.jewelershowcase.com/robots.txt
- Platinum Jewelers : https://platinumjewelersms.com/robots.txt ; https://platinumjewelersms.com/ ; https://platinumjewelersms.com/engagement/ ; https://platinumjewelersms.com/custom-engagement-rings-jewelry-design/
- J. Parkerson Jewelers : https://www.jparkersonjewelers.com/robots.txt ; https://www.jparkersonjewelers.com/ ; https://www.jparkersonjewelers.com/build-your-own ; https://www.jparkersonjewelers.com/jewelry/engagement-rings ; https://www.jparkersonjewelers.com/pages/custom-design-studio
- Juniker Jewelry Co. : https://www.junikerjewelry.com/robots.txt ; https://www.junikerjewelry.com/ ; https://www.junikerjewelry.com/collections/bridal ; https://www.junikerjewelry.com/collections/bridal/products.json ; https://www.junikerjewelry.com/pages/custom-jewelry-design-in-madison-ms
- Van Atkins Jewelers : https://www.vanatkins.com/robots.txt ; https://www.vanatkins.com/ ; https://www.vanatkins.com/jewelry/engagement-rings ; https://www.vanatkins.com/benchmark-ring-lab ; https://benchmarkrings.com/robots.txt ; https://www.oxfordjeweler.com/robots.txt
- Jewelmasters : https://jewelmastersonline.com/robots.txt ; https://jewelmastersonline.com/ ; https://jewelmastersonline.com/collections/engagement-rings ; https://jewelmastersonline.com/collections/engagement-rings/products.json
- Vus mais non classés : https://www.brittjewelry.com/robots.txt ; https://www.brittjewelry.com/ ; https://brittjewelry.jewelershowcase.com/robots.txt ; https://stonesjewelryinc.com/robots.txt ; https://stonesjewelryinc.com/ ; https://stonesjewelryinc.com/jewelry/ ; https://hornecustomjewelry.com/robots.txt ; https://hornecustomjewelry.com/ ; https://hornecustomjewelry.com/products/ ; https://hornecustomjewelry.com/custom/

Lecture rendue tentée sans résultat : Firecrawl (crédit épuisé) et Parallel (sans exécution des scripts) sur https://www.jparkersonjewelers.com/jewelry/engagement-rings et https://www.vanatkins.com/jewelry/engagement-rings.

Recherches web génériques (Parallel Search, extraits de résultats seulement) :

- « Mississippi jeweler design your own engagement ring online » ; « Jackson Mississippi jewelry store engagement rings ring builder » ; « Tupelo Mississippi jeweler engagement rings custom design » ; « Hattiesburg Mississippi jeweler engagement rings lab grown » ; « Gulfport Biloxi jeweler engagement rings custom design » ; « Oxford Mississippi jeweler engagement rings shop online » ; « Ridgeland Madison Mississippi jewelers bridal custom engagement ring » ; « Starkville Columbus Mississippi jeweler engagement rings » ; « Tupelo Mississippi jeweler engagement rings design your own » ; « Southaven Olive Branch Mississippi jeweler engagement rings » ; « Meridian Mississippi jewelers engagement rings » ; « Mississippi jeweler RingBuilder diamond search lab grown » ; « Vicksburg Natchez Greenville Mississippi jeweler bridal » ; « Juniker Jewelry Ridgeland engagement rings » ; « Jackson MS jeweler custom engagement ring CAD lab grown diamonds online shop » ; « Mississippi Gulf Coast jeweler Gulfport Biloxi engagement rings shop » ; « Oxford MS jewelry store bridal engagement rings Square » ; « Starkville jeweler engagement rings Mississippi State » ; « "Gulfport, MS" jewelers engagement rings "design your own" » ; « "Oxford, MS" jeweler engagement rings custom » ; « "Starkville, MS" jewelers engagement rings » ; « "Meridian, MS" jewelers engagement rings » ; « "Brandon, MS" OR "Flowood, MS" jewelers engagement rings ring builder » (l'outil s'arrête à 5 requêtes par appel : les requêtes du premier appel restées sans réponse ont été relancées dans le deuxième).
- Extraits utilisés : https://www.kuxjewelers.com/services/custom-jewelry-designs/ ; https://www.jparkersonjewelers.com/ ; https://traditionaljewelers.net/ ; https://www.venazia.com/custom-engagement-rings-tupelo-ms ; https://www.venazia.com/diamond-engagement-rings-jackson-ms
