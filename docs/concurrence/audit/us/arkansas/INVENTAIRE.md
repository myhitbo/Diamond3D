# Inventaire des joailliers : Arkansas

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, rien ajouté au panier, aucun chat ni SMS ouvert, au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue, adresse donnée dans la fiche ou en fin de document), **[V, extrait]** lu dans l'extrait qu'un moteur de recherche donne de la page (page non ouverte ou illisible), **[V, données]** lu dans les données intégrées à la page (catalogue Shopify `var meta`, données structurées), pas dans le texte affiché, **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié). Prix en dollars américains, tels que présents le 15/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche Parallel Search (découverte des acteurs, 5 appels regroupant 20 requêtes génériques, listées en fin de document), puis curl tel quel (sans changer d'identité ni d'en-tête) pour lire les pages : 45 pages et 21 robots.txt sur 20 sites. Le crédit Firecrawl était épuisé dès le début (réponse « Insufficient credits ») : aucune lecture rendue, avec exécution des scripts, n'a été possible. Conséquence : les configurateurs, tous chargés par script, n'ont pas été vus en fonctionnement ; leur présence, leur fournisseur et leur page de départ sont vérifiés, leur contenu ne l'est pas.

## Constat général

- [V] **Aucun configurateur 3D propre à un joaillier** en Arkansas. Les deux constructeurs 3D trouvés sont le même outil en marque blanche, **JewelerOS** (script `jeweleros.com/static/dist/jos.js`), chez Romance Diamond (Fayetteville) et Carter's Jewel Chest (Mountain Home). C'est l'outil déjà relevé au Tennessee (Fountain City, Southern Diamond, Minor). Le parcours annoncé est le même partout : dessiner en ligne, puis choisir la pierre en boutique, puis commander. [I] La 3D est un modèle de catalogue paramétrique, pas le fichier de fabrication de l'atelier.
- [V] Autres outils en marque blanche : GemFind RingBuilder (Lara's, Hot Springs) et GemFind DiamondLink (recherche de diamants de Jones & Son, Little Rock) ; constructeurs d'alliances Benchmark (iframe `customizer-api.benchmarkrings.com`, chez Romance Diamond) et « Emblem Ring Builder » servi par `ringdesignersstudio.com` (chez Carter's, qui le présente comme « Lashbrook Design Studio »).
- [V] L'acteur le plus proche du modèle de JR Diamond n'a pas de 3D : **Easson Diamonds** (studio à Fayetteville, « Arkansas · Nationwide ») vend ses propres modèles, configurables sur la fiche (forme, carat de 1 à 10 ct, couleur d'or) avec prix et ajout au panier, fabriqués à la commande en 4 semaines environ. La forme marquise y est proposée (avec une « Dutch Marquise »).
- [V] Transparence de fabrication : **Underwoods** (Fayetteville, depuis 1957) décrit tout son processus (rendu CAO 3D, modèle en cire imprimé à l'échelle avant tout acompte, acompte de 50 %, 4 à 6 semaines de fabrication, laboratoire gemmologique accrédité AGS) mais n'affiche aucun prix en ligne. Sissy's Log Cabin, Diamond Center, Lara's et J Olivers décrivent aussi le passage par un rendu CAO et, pour certains, une maquette en cire.
- [V] Prix : affichés chez Easson, Romance Diamond (boutique Shopify séparée), Carter's, Robert Irwin, Diamond Gems, Sissy's, Danwerke, Kahn, Linden's ; absents chez Underwoods et Diamond Center (prix à 0 dans les données du catalogue). **Diamond Gems** (Jonesboro) prévient que ses prix suivent le cours des métaux (« Due to fluctuating metal prices, prices within catalogs are subject to change ») : le même anneau est à 4 081,23 $ dans la liste et 4 091,83 $ sur la fiche. Aucun site lu n'explique la composition du prix (métal, façon, pierre, marge).
- [V] Synthétique (« lab grown ») proposé par presque tous : collections dédiées chez Danwerke, Kahn, Robert Irwin, Carter's, Diamond Gems ; recherche de diamants synthétiques chez Linden's ; pierre centrale synthétique par défaut chez Easson. Pas de mention relevée chez Underwoods ni chez Sissy's dans les pages lues.
- [V] Délais annoncés : environ 4 semaines (Easson, sur commande), 3 à 4 semaines (Gold & Diamond Co), 4 à 6 semaines de fabrication et 6 à 8 semaines au total (Underwoods), « a couple of weeks » (Romance Diamond, bague du configurateur). [I] Les 14 jours ouvrés de JR Diamond sont au niveau des plus rapides.
- [V] Blocages : un seul, Linden's (Bentonville), dont le catalogue et la recherche de diamants redirigent vers `/verify.html` (plate-forme Thinkspace, comme Pattons, Cut et Ramsey's en Louisiane). Aucun Cloudflare bloquant, aucun robots.txt interdisant les agents d'IA ; Linden's et J Olivers les autorisent explicitement.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Easson Diamonds | Fayetteville (vente « Nationwide ») | https://eassondiamonds.com/ | https://eassondiamonds.com/product-category/engagement-rings/ (exemple de fiche configurable : https://eassondiamonds.com/product/genevieve-engagement-ring/) | oui (options sur la fiche : forme, carat, couleur d'or ; sans 3D) | non | [V] Modèles maison (« Original designs created in-house »), chacun configurable avec prix et « Add to cart » : 8 formes dont marquise, 1 à 10 ct, or 14 k jaune, blanc ou rose ; fourchettes de 2 300 $ à 8 140 $ ; pierre centrale synthétique ; « Made to Order: Approximately 4 weeks », livraison gratuite. Sur mesure : rendu numérique offert, retouches, puis fabrication. Consultation privée par téléphone. Le modèle commercial le plus proche de JR Diamond. |
| 2 | Romance Diamond Co. | Fayetteville (et Rogers) | https://romancediamond.com/ | https://romancediamond.com/design-your-ring/ (alliances : https://romancediamond.com/jewelry/wedding-bands/#custom ; boutique : https://shop.romancediamond.com/collections/engagement-rings) | oui (3D JewelerOS ; alliances Benchmark) | non | [V] « 3D Ring Designer » : monture, pierre (forme, taille, carat, qualité), métal, en temps réel ; puis choix de la pierre en salle ; bague prête « in just a couple of weeks ». Constructeur d'alliances (métal, largeur, profil, finition). Boutique en ligne séparée : 20 bagues de 660 $ à 3 025 $ [V, données]. Famille Brosh « serving Arkansas since 1944 ». |
| 3 | Carter's Jewel Chest | Mountain Home | https://cartersjewelchest.com/ | https://cartersjewelchest.com/pages/custom-ring-builder (alliances : https://cartersjewelchest.com/apps/carters/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE) | oui (3D JewelerOS ; alliances « Emblem Ring Builder ») | non | [V] Trois niveaux expliqués : sur mesure complet avec rendu CAO, alliance dessinée en ligne, bague esquissée en ligne puis reprise par un conseiller. 24 bagues de 999 $ à 7 500 $ [V, données], dont un synthétique de 2,02 ct monté à 2 499 $. « Antwerp Diamond Broker », trois gemmologues diplômés, depuis 1976. |
| 4 | Underwoods Fine Jewelers | Fayetteville | https://underwoods.com/ | https://underwoods.com/pages/custom-design-process (catalogue : https://underwoods.com/collections/engagement-rings) | non | non | [V] Atelier intégré, transparence de fabrication la plus complète : rendu CAO 3D et modèle en cire à l'échelle avant tout engagement, acompte de 50 % à l'accord, 4 à 6 semaines de fabrication ; laboratoire gemmologique accrédité AGS « since 1961, the first in Arkansas », chaque pierre contrôlée à Fayetteville. 109 bagues en ligne, sans prix. Synthétique non relevé. |
| 5 | Robert Irwin Jewelers | Little Rock, North Little Rock (siège à Memphis, TN) | https://www.rijewelers.com/ | https://www.rijewelers.com/collections/build-an-engagement-ring | oui (3 étapes, sans 3D) | non | [V] « Select a ring, Center Diamond, Complete ring » ; 17 montures de 1 299 $ à 5 720 $ [V, données], pierre vendue à part ; bagues synthétiques à prix affiché ; garantie de retour de 365 jours si pierre et monture achetées ensemble ; livraison gratuite en 2 jours ou retrait en salle. Déjà classé 7e au Tennessee : doublon. |
| 6 | Diamond Gems Jewelry | Jonesboro | https://diamondgemsjewelry.com/ | https://diamondgemsjewelry.com/rings?categories=engagement-ring-jewelry | non (choix du métal et de la taille sur la fiche) | non | [V] 2 496 bagues de fiançailles à prix affiché (filtre de 100 $ à 48 100 $), majorité en synthétique certifié ; ajout au panier, expédition sous 1 à 3 jours ouvrés, retour sous 30 jours avec frais. Prix liés au cours des métaux (mention et écart de prix relevés). [I] Catalogue de fournisseur importé, pas un atelier. |
| 7 | Sissy's Log Cabin | Pine Bluff, Little Rock, West Little Rock, Jonesboro, Conway (et Memphis) | https://www.sissyslogcabin.com/ | https://www.sissyslogcabin.com/collections/engagement-rings (sur mesure : https://www.sissyslogcabin.com/pages/custom-creations) | non | non | [V] Marque régionale (Rolex, David Yurman). 21 bagues de 1 450 $ à 5 400 $ [V, données], montures « Setting Only ». Sur mesure : modèle 3D à l'échelle, essayage d'une réplique en cire, puis fonte et finition. Synthétique non relevé. |
| 8 | Danwerke Jewelers | Little Rock | https://www.danwerkejewelers.com/ | https://www.danwerkejewelers.com/pages/jewelry-store-engagement-rings-in-little-rock (catalogue : https://www.danwerkejewelers.com/collections/engagement-rings) | non (« interactive 3D ring builder » annoncé en salle) | non | [V] 144 bagues en ligne, premières à 1 911–2 420 $ [V, données] ; rubrique « Lab Diamond Engagement Rings » ; « Engagement rings starting at $999 » ; parcours sur mesure en salle avec un constructeur 3D. Maison familiale. |
| 9 | Lara's Jewelry and Design | Hot Springs | https://www.larasjewelryanddesign.com/ | https://www.larasjewelryanddesign.com/ringbuilder/settings/ (diamants : https://www.larasjewelryanddesign.com/diamondlink) | oui (GemFind RingBuilder) | non | [V] « Create Your Own Ring, Start Ring Builder » ; sur mesure par fabrication, cire sculptée ou CAO avec « 2D & 3D renderings ». La rubrique « Engagement Rings » est vide (« No products were found »). Depuis 2009. |
| 10 | Diamond Center Jewelers | Fayetteville et Fort Smith | https://www.diamondcenterjewelers.com/ | https://www.diamondcenterjewelers.com/pages/custom | non | non | [V] Sur mesure et refonte de bijoux de famille (« Give treasured family jewelry new life ») ; croquis et rendus 3D à valider ; comparateur glissant « from CAD design to finished masterpiece ». 7 bagues en ligne, sans prix (prix à 0 dans les données). |

## Fiches

### 1. Easson Diamonds (Fayetteville)

- [V] Studio : 217 E Dickson St Ste 105, Fayetteville, AR 72701 ; bannière « Easson Diamonds · Arkansas · Nationwide » ; « Natural & Lab-Grown Diamonds, Private Consultations, Made to Order ». Source : https://eassondiamonds.com/
- [V] Collection maison « Designed by Us. Chosen by You. » : neuf lignes aux noms français (Fleur d'Or, Céleste, Maison Voile, Maison Belle, Raffiné, Précieuse, Éternelle, Geneviève, Élégance) ; fourchettes lues : 2 300–8 064 $ (Élégance), 2 500–8 140 $ (Geneviève), 2 500–7 400 $ (Éternelle), 2 300–7 200 $ (Précieuse). Même source.
- [V] Fiche Geneviève : listes « Diamond Shape » (Cushion, Emerald, Dutch Marquise, Marquise, Oval, Pear, Radiant, Round), « Diamond Size » (1 à 10 ct), « Gold Color » (jaune, blanc, rose), bouton « Add to cart » ; « Made to Order: Approximately 4 weeks », « Metal: 14k Yellow, White, or Rose Gold », « Center Stone: Lab-Grown Diamond », « Free Shipping ». Source : https://eassondiamonds.com/product/genevieve-engagement-ring/
- [V] Le prix de chaque combinaison est chargé à la sélection (les variantes ne sont pas dans la page : `data-product_variations` vaut `false`) ; seule la fourchette est lisible sans script. Même source.
- [V] Sur mesure en 4 étapes : idée, « complimentary digital rendering », retouches, fabrication ; « See the Design Before You Commit ». Source : https://eassondiamonds.com/
- [I] Pas de 3D interactive ni de vidéo de pierre ; pas de platine dans les options lues. Pas d'explication du prix. C'est pourtant le seul acteur de l'État qui combine modèles propres, prix par configuration et achat en ligne.

### 2. Romance Diamond Co. (Fayetteville, Rogers)

- [V] Salles : Three Sisters Building, 248 W Dickson Street, Fayetteville, AR 72701 ; Signature Bank Building, 3712 S Pinnacle Hills Pkwy, Rogers, AR 72758. Source : https://romancediamond.com/design-your-ring/
- [V] La page « Design Your Ring » charge JewelerOS (`jos.js`, `partner_config.js`) ; le contenu de l'outil n'est pas dans le HTML. Même source.
- [V] Parcours : « Begin with our online 3D engagement ring designer », « Pick out your center stone in our Fayetteville, AR showroom », « Finalize & order your ring » ; « we can have it ready for you in just a couple of weeks at a great price, fully customized around your center stone ». Avis client citant la réutilisation des diamants de la mère et de la grand-mère. Histoire : famille Brosh depuis 1944, Fayetteville Square en 1996, Dickson Street depuis 2003. Source : https://romancediamond.com/custom-engagement-rings/
- [V] Accueil : « Romance Diamond 3D Ring Designer … watching the ring take shape in real time » ; « band builder » (métal, largeur, profil, finition, martelé, brossé, diamants sertis). Source : https://romancediamond.com/
- [V] L'alliance est une iframe Benchmark (`customizer-api.benchmarkrings.com/api/retailers/…/iframe`) dans la section « Create a Custom Wedding Band ». Source : https://romancediamond.com/jewelry/wedding-bands/
- [V, données] Boutique Shopify séparée : 20 bagues sur la première page, de 660 $ (solitaire or jaune) à 3 025 $ (double halo coussin), surtout de la marque Fana. Source : https://shop.romancediamond.com/collections/engagement-rings
- [I] Deux sites distincts (vitrine WordPress, boutique Shopify) : le configurateur ne mène pas au panier.

### 3. Carter's Jewel Chest (Mountain Home)

- [V, données] Adresse : 860 Hwy 62 E Ste 1, Mountain Home, AR 72653 (données du widget d'avis de la page d'accueil). Source : https://cartersjewelchest.com/
- [V] Accueil : « Design Your Engagement Ring », « Design your Wedding Band » ; trois formules : « Fully Custom Design » (rendu CAO avant fabrication, refonte de bijoux de famille), « Build Your Own Band (Lashbrook Design Studio) », « Design Your Engagement Ring (Start the Conversation) » où un conseiller reprend le dessin pour la pierre, le budget et le sur-mesure. « Antwerp Diamond Broker », « three Graduate Gemologists, a Master Goldsmith », depuis 1976. Même source.
- [V] La page « Custom Engagement Ring Builder » charge JewelerOS (`partner_config.js`, identifiant d'organisation propre). Source : https://cartersjewelchest.com/pages/custom-ring-builder
- [V] Le constructeur d'alliances est une application « Emblem Ring Builder - Personalized, Handmade Wedding Rings » servie par `ringdesignersstudio.com` (page vide sans script). Source : adresse d'alliance du tableau.
- [V, données] 24 bagues sur la première page, de 999 $ (synthétique 0,52 ct or jaune 14 k) à 7 500 $ ; synthétique 2,02 ct VS1 F à 2 499 $ ; montures Gabriel & Co. « to Hold » 1,5 à 3 ct ; texte : or blanc, jaune, rose, platine, naturel ou synthétique. Source : https://cartersjewelchest.com/collections/engagement-rings

### 4. Underwoods Fine Jewelers (Fayetteville)

- [V] Salle : 611 West Dickson Street, Fayetteville, AR 72701 ; « A third-generation Fayetteville jeweler », « Arkansas Legacy Since 1957 ». Source : https://underwoods.com/
- [V] Processus : « designed, crafted, and meticulously quality controlled under one roof » ; « a detailed 3D CAD rendering and a life size wax model to review before production begins. Up to this point, there is no financial obligation » ; acompte de 50 % ; « Atelier by Underwoods » au-dessus de la salle ; garantie de reprise du diamant jusqu'à 100 % du prix pour un diamant au moins deux fois plus cher. Source : https://underwoods.com/pages/custom-design-process
- [V] FAQ : variantes de dessin en une semaine, devis et cire en une semaine de plus, fabrication de 4 à 6 semaines, « Most clients have their piece within six to eight weeks » ; CAO et impression 3D avec fonte à cire perdue et laser ; laboratoire accrédité AGS depuis 1961. Source : https://underwoods.com/pages/custom-faq
- [V, données] 109 bagues de fiançailles, prix à 0 (non affichés) ; beaucoup de platine et de diamants de couleur. Source : https://underwoods.com/collections/engagement-rings
- [I] Le discours de fabrication le plus proche de « l'atelier en direct », sans prix ni achat en ligne.

### 5. Robert Irwin Jewelers (Little Rock, North Little Rock)

- [V] Salles en Arkansas listées dans les filtres : 11525 Cantrell Road, Little Rock, AR 72212 ; 3929 McCain Boulevard, North Little Rock, AR 72116 ; plus deux salles au Tennessee. Source : https://www.rijewelers.com/collections/build-an-engagement-ring
- [V] Parcours « Build your ring » en trois temps ; « Center diamonds are not included and sold separately » ; mise à taille, rhodiage et nettoyage gratuits ; « 365 Day Meant-to-be-Guarantee » ; bagues synthétiques 2 ct (ovale, rond, halo caché). Même source.
- [V, données] 17 montures et bagues de 1 299 $ à 5 720 $. Même source.
- Voir aussi la fiche 7 de `docs/concurrence/audit/us/tennessee/INVENTAIRE.md`.

### 6. Diamond Gems Jewelry (Jonesboro)

- [V] Adresse : 3014 Sun Ave, Jonesboro, AR 72401 (lien d'itinéraire) ; « A proud Jonesboro, AR family business », plus de 15 ans, joailliers sur place. Source : https://diamondgemsjewelry.com/
- [V] « Showing 24 of 2496 rings » dans les bagues de fiançailles ; premières fiches en synthétique certifié (« Certified Lab Grown Diamond VS+ F+ »). Source : https://diamondgemsjewelry.com/rings?categories=engagement-ring-jewelry
- [V] Fiche : 4 091,83 $ (4 081,23 $ dans la liste), choix du métal et de la taille, « Add to Cart », « Free insured shipping », « Orders ship within 1–3 business days », retour sous 30 jours « subject to restocking fee », « Due to fluctuating metal prices, prices within catalogs are subject to change ». Source : https://diamondgemsjewelry.com/products/diamond-rings/1680597
- [I] Prix au centime et écart entre liste et fiche : prix recalculé automatiquement d'après un catalogue de fournisseur et le cours du métal. Contre-exemple intéressant pour le prix « expliqué » de JR Diamond : le prix bouge, mais rien n'explique pourquoi.

### 7. Sissy's Log Cabin (Pine Bluff, Little Rock, Jonesboro, Conway, Memphis)

- [V] « stop by one of our locations in Pine Bluff, Little Rock, West Little Rock, Jonesboro, Memphis, or Conway » ; dessin avec le client, « computer-generated 3-dimensional model to scale », essayage d'une « wax replica », puis fonte, polissage, contrôle. Source : https://www.sissyslogcabin.com/pages/custom-creations
- [V, données] 21 bagues et alliances de 1 450 $ à 5 400 $, plusieurs « (Setting Only) ». Source : https://www.sissyslogcabin.com/collections/engagement-rings
- [V, extrait] Titre de l'accueil : « Arkansas' Finest Jewelry Store Since 1970 ». Source : https://www.sissyslogcabin.com/
- [V] La page des salles ne donne pas d'adresse lisible sans script. Source : https://www.sissyslogcabin.com/pages/stores

### 8. Danwerke Jewelers (Little Rock)

- [V] Adresse : 9816 N. Rodney Parham Rd., Little Rock, AR 72227. « Engagement rings starting at $999 » ; « The Custom Design Experience » en salle : « interactive 3D ring builder », pierres choisies à Little Rock, travail avec l'équipe. Source : https://www.danwerkejewelers.com/pages/jewelry-store-engagement-rings-in-little-rock
- [V] « 144 products » ; [V, données] 24 premières bagues de 1 911 $ à 2 420 $ (montures « Semi-Mount », halos cachés). Source : https://www.danwerkejewelers.com/collections/engagement-rings
- [V] Rubrique « Lab Diamond Engagement Rings » à l'accueil. Source : https://www.danwerkejewelers.com/
- [V] Page sur mesure sans outil ni prix. Source : https://www.danwerkejewelers.com/pages/custom-jewelry-designs

### 9. Lara's Jewelry and Design (Hot Springs)

- [V] Adresse : 236 Cornerstone Blvd., Hot Springs, AR 71913 ; « Serving the Hot Springs area since 2009 » ; « Create Your Own Ring, Start Ring Builder » ; bijoutier-concepteur nommé (J. Rob Saettele, extrait de recherche). Source : https://www.larasjewelryanddesign.com/
- [V] Page du constructeur : greffon GemFind (`Gemfind/js/…`), contenu chargé par script. Source : https://www.larasjewelryanddesign.com/ringbuilder/settings/
- [V] Sur mesure : fabrication, « 2D & 3D renderings » par CAO, cire sculptée, remontage de pierres anciennes. Source : https://www.larasjewelryanddesign.com/custom-design/
- [V] « No products were found matching your selection » dans la rubrique des bagues de fiançailles. Source : https://www.larasjewelryanddesign.com/product-category/bridal/engagement-rings/

### 10. Diamond Center Jewelers (Fayetteville, Fort Smith)

- [V] Salles : 1612 N College Ave # 1, Fayetteville, AR 72703 ; 4700 Rogers Ave, Fort Smith, AR 72903. Processus en 4 temps : vision, « detailed sketches and 3D renderings for your approval », fabrication, livraison ; refonte de bijoux de famille ; comparateur CAO / bijou fini. Source : https://www.diamondcenterjewelers.com/pages/custom
- [V] « 7 products », [V, données] prix à 0. Source : https://www.diamondcenterjewelers.com/collections/engagement
- [V] Bandeau « All Custom Design 20% Off ». Source : https://www.diamondcenterjewelers.com/

## Vus mais non classés

- **Linden's Jewelry** (Bentonville, 100 SW 14th St. Suite 20 [V, données]) : site Thinkspace, bagues à prix affiché sur l'accueil (halos Romance de 7 632 $ à 8 860 $), « Search Lab Grown Diamonds » [V]. Catalogue et recherche de diamants redirigés vers `/verify.html` [V] : non audités. robots.txt autorisant explicitement ClaudeBot, GPTBot, etc. https://lindensjewelry.com/
- **Adrianne Kahn Fine Jewelry and Design** (Hot Springs, AR 71913) : bagues soldées « 50% off » (bypass 4 250 $ au lieu de 8 500 $) [V] ; collection synthétique de 156 bagues, 50 premières de 2 069 $ à 3 081 $ [V, données]. Pas d'outil ni de sur-mesure décrit. https://www.kahnfinejewelry.com/
- **Jones & Son Fine Jewelry** (Little Rock) : « direct diamond importer », garantie d'alignement sur les prix en ligne, recherche de diamants GemFind DiamondLink [V] ; filtre de prix de 565 $ à 38 873 $ sur les bagues [V] ; lien « Jones & Son Custom » en 404, pied de page « © 2024 » [V]. https://jonesandson.com/
- **Gold & Diamond Co** (Fayetteville, 3065 N College Avenue ; Siloam Springs, 1701 US-412) : sur mesure en 5 étapes, naturel et synthétique (IGI cité), 3 à 4 semaines [V] ; pas de vente de bagues en ligne, métier principal le rachat d'or. https://www.goldanddiamond.co/engagement-rings
- **J Olivers Fine Jewelry** (Little Rock, AR 72212) : conception CAO avec rendus partagés, rubriques diamants naturels et synthétiques [V] ; pas de boutique en ligne. https://www.jolivers.com/
- **Regency Jewelers** (Pine Bluff, 2526 W 28th Ave ; North Little Rock, 3929 McCain Blvd) [V] : boutique Shopify, « Family-Owned Trusted Since 1999 » [V, extrait] ; synthétique 1 ct à 999 $ et naturel 1 ct à 8 999 $ [V, extrait]. Pas d'outil. https://regencyjewelersco.com/

## Écartés

- **Venazia** : pages « Fort Smith, AR », « Little Rock, AR », « Bentonville, AR », « Texarkana, AR » [V, extrait], mais téléphone (305) 332-9797 [V, extrait] ; [I] vendeur national en ligne basé hors d'Arkansas (indicatif de Miami), avec des pages par ville pour le référencement. Hors périmètre (vendeur national).
- **Crocker's Jewelers** : constructeur 3D (« Use our 3D ring builder »), mais salle au 3908 St Michael Dr, Texarkana, **TX** [V, extrait]. Hors territoire (Texas).
- **C Whites Jewelry** (Rogers) : prix « SETTING ONLY » de 2 030 $ à 3 420 $ dans l'extrait de recherche [V, extrait] ; le site répond 404 « ConnectYourDomain Error | Wix.com » le 15/11 [V]. Site hors ligne.

## Blocages constatés

| Site | Constat | Conduite |
| --- | --- | --- |
| lindensjewelry.com | Catalogue (`/catalog/engagement-ring/`) et recherche de diamants (`/diamonds/lab-grown/`) redirigés vers `/verify.html?next=…` (« Verifying… »), page de vérification anti-robot de Thinkspace | Une seule lecture par adresse, pas de nouvel essai ; audit limité à l'accueil |
| jeweleros.com (Romance, Carter's) | Pas de blocage : robots.txt `Allow: /` sauf `/api/` ; outil chargé par script, non exécuté faute de navigateur | À voir à la main |
| customizer-api.benchmarkrings.com (Romance) | robots.txt en 404 ; iframe non ouverte | À voir à la main |
| ringdesignersstudio.com (Carter's) | robots.txt ouvert ; application vide sans script | À voir à la main |
| www.cwhitesjewelry.com | 404 Wix (domaine non relié), pas un blocage | Écarté |

## Sources

Pages lues le 15/11/2026 avec curl (sans changement d'identité) ; robots.txt de chaque site lu avant toute page :

- Easson Diamonds : https://eassondiamonds.com/robots.txt ; https://eassondiamonds.com/ ; https://eassondiamonds.com/product/genevieve-engagement-ring/
- Romance Diamond Co. : https://romancediamond.com/robots.txt ; https://romancediamond.com/ ; https://romancediamond.com/design-your-ring/ ; https://romancediamond.com/custom-engagement-rings/ ; https://romancediamond.com/jewelry/wedding-bands/ ; https://shop.romancediamond.com/robots.txt ; https://shop.romancediamond.com/collections/engagement-rings ; https://www.jeweleros.com/robots.txt ; https://customizer-api.benchmarkrings.com/robots.txt (404)
- Carter's Jewel Chest : https://cartersjewelchest.com/robots.txt ; https://cartersjewelchest.com/ ; https://cartersjewelchest.com/pages/custom-ring-builder ; https://cartersjewelchest.com/collections/engagement-rings ; https://cartersjewelchest.com/apps/carters/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE ; https://ringdesignersstudio.com/robots.txt
- Underwoods : https://underwoods.com/robots.txt ; https://underwoods.com/ ; https://underwoods.com/pages/custom-design-process ; https://underwoods.com/pages/custom-faq ; https://underwoods.com/collections/engagement-rings
- Robert Irwin Jewelers : https://www.rijewelers.com/robots.txt ; https://www.rijewelers.com/collections/build-an-engagement-ring
- Diamond Gems Jewelry : https://diamondgemsjewelry.com/robots.txt ; https://diamondgemsjewelry.com/ ; https://diamondgemsjewelry.com/rings?categories=engagement-ring-jewelry ; https://diamondgemsjewelry.com/products/diamond-rings/1680597
- Sissy's Log Cabin : https://www.sissyslogcabin.com/robots.txt ; https://www.sissyslogcabin.com/collections/engagement-rings ; https://www.sissyslogcabin.com/pages/stores ; https://www.sissyslogcabin.com/pages/custom-creations
- Danwerke Jewelers : https://www.danwerkejewelers.com/robots.txt ; https://www.danwerkejewelers.com/pages/jewelry-store-engagement-rings-in-little-rock ; https://www.danwerkejewelers.com/pages/custom-jewelry-designs ; https://www.danwerkejewelers.com/collections/engagement-rings
- Lara's Jewelry and Design : https://www.larasjewelryanddesign.com/robots.txt ; https://www.larasjewelryanddesign.com/ ; https://www.larasjewelryanddesign.com/ringbuilder/settings/ ; https://www.larasjewelryanddesign.com/custom-design/ ; https://www.larasjewelryanddesign.com/product-category/bridal/engagement-rings/
- Diamond Center Jewelers : https://www.diamondcenterjewelers.com/robots.txt ; https://www.diamondcenterjewelers.com/ ; https://www.diamondcenterjewelers.com/pages/custom ; https://www.diamondcenterjewelers.com/collections/engagement
- Vus mais non classés : https://lindensjewelry.com/robots.txt ; https://lindensjewelry.com/ ; https://lindensjewelry.com/catalog/engagement-ring/ et https://lindensjewelry.com/diamonds/lab-grown/ (redirigées vers `/verify.html`) ; https://www.kahnfinejewelry.com/robots.txt ; https://www.kahnfinejewelry.com/ ; https://www.kahnfinejewelry.com/collections/lab-grown-diamond-engagement-rings ; https://jonesandson.com/robots.txt ; https://jonesandson.com/ ; https://jonesandson.com/diamond-search/ ; https://jonesandson.com/engagement-rings/ ; https://jonesandson.com/jas-custom/ (404) ; https://www.goldanddiamond.co/robots.txt ; https://www.goldanddiamond.co/engagement-rings ; https://www.jolivers.com/robots.txt ; https://www.jolivers.com/ ; https://regencyjewelersco.com/robots.txt ; https://regencyjewelersco.com/
- Écartés : https://www.cwhitesjewelry.com/ et https://www.cwhitesjewelry.com/robots.txt (404 Wix)

Recherches web génériques (Parallel Search, extraits de résultats seulement) :

- « Little Rock jeweler engagement rings design your own ring » ; « Arkansas jeweler custom engagement ring builder online » ; « Fayetteville Rogers Bentonville jeweler engagement rings custom design » ; « Jonesboro Arkansas jeweler engagement rings lab grown » ; « Fort Smith Arkansas jewelry engagement rings shop online » ; « Sissy's Log Cabin engagement rings design your own » ; « Underwood's Fine Jewelers Fayetteville engagement rings » ; « Robert Irwin Jewelers Jonesboro Arkansas » ; « Conway Arkansas jeweler engagement rings custom » ; « Hot Springs Arkansas jeweler engagement ring builder » ; « Rogers Arkansas jewelry store custom engagement rings 3D CAD » ; « Little Rock custom jewelry designer engagement rings CAD » ; « Searcy Russellville Arkansas jewelers engagement rings » ; « Jonesboro jeweler design your own engagement ring » ; « Fort Smith jeweler engagement rings ring builder » ; « El Dorado Arkansas jeweler engagement rings » ; « North Little Rock Benton Bryant jeweler engagement rings custom » ; « Little Rock diamond jeweler lab grown engagement rings showroom » ; « Arkansas family jeweler engagement rings shop online since » ; « Bentonville Rogers custom engagement ring designer CAD ».
- Extraits utilisés : https://www.venazia.com/custom-engagement-rings-fort-smith-ar ; https://www.venazia.com/lab-grown-diamond-engagement-rings-bentonville-ar ; https://www.crockersjewelers.com/custom-engagement-rings/ ; https://www.cwhitesjewelry.com/ ; https://regencyjewelersco.com/ ; https://www.sissyslogcabin.com/ ; https://www.larasjewelryanddesign.com/
