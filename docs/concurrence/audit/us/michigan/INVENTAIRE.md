# Inventaire des joailliers : Michigan

Recensement du 15 novembre 2026, contrôlé à nouveau le 24 novembre 2026 (voir « Contrôle du 24/11 »), dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun chat ouvert, au plus une page toutes les 2 secondes par site (30 s chez Medawar's, 10 s chez Diamond Castle, selon leur `Crawl-delay`).

Repères : **[V]** vérifié (page lue le 15/11/2026, adresse en section « Sources ») ; **[V, ext.]** lu dans l'extrait d'un moteur de recherche, page non ouverte ; **[I]** inféré (déduit d'éléments vérifiés) ; **[S]** supposé. Les prix sont ceux affichés le 15/11/2026 (ou le 24/11/2026 quand c'est précisé), en dollars américains.

## Constat général

- [V] Un même outil domine : le constructeur 3D **JewelerOS** (StoneAlgo), loué aux joailliers indépendants. Le script `jeweleros.com/.../partner_config.js` ou `jos-ring-studio.js` est présent sur 12 sites du Michigan : Lewis, Lucido, Eli's, Medawar's, Metals in Time, Diamond Vault of Troy, Diamond Castle, Siegel, Michele & Co, Motif, Sanborn's, Carroll/Ochs [S1 à S30]. Tous reprennent le même texte : « Design your ring online in stunning 3D », pierre choisie en boutique, bague prête « in just a couple of weeks ».
- [V] Ce que montre l'outil, selon la FAQ de Lewis et de Lucido : le « real price of your engagement ring setting », **sans la pierre centrale**. Pour enregistrer le dessin, il faut donner son nom et son téléphone. Un « concierge » rappelle ensuite par SMS pour un rendez-vous en boutique ou en vidéo. Délai annoncé : 2 à 4 semaines [S2][S6].
- [I] Au Michigan, la 3D en ligne est donc une commodité, pas une différence. JR Diamond se distingue sur trois points qu'aucun site lu n'affiche : un modèle 3D issu du fichier de fabrication, une pierre réelle filmée et un prix complet, pierre comprise. Aucune page lue ne montre de photo ou de vidéo de fabrication de la bague du client [V, sur les pages lues ; non exhaustif].
- [V] La marque la plus proche d'un vendeur en ligne est Honey Jewelry Co (Grand Rapids). Ses modèles sont faits à la commande et sa monture a un prix affiché. Le client choisit ensuite la pierre (naturelle ou synthétique) et paie au panier. Il n'y a pas de 3D [S7 à S10].
- [V] Le diamant synthétique est partout : collections dédiées chez Tapper's, Eli's, Giorgio Conti, Diamond Vault of Troy, AZZI et Diamond Factory of Ann Arbor, et filtre naturel ou synthétique chez Orin et J. Thomas.
- [I] Le délai de 2 à 4 semaines annoncé chez Lewis et Lucido est comparable aux 14 jours ouvrés de JR Diamond, soit environ 3 semaines.

## Contrôle du 24/11/2026

- [V] Les dix pages de départ du classement répondent **200** le 24/11/2026 (curl, identité par défaut, une requête par site, au moins 2 s d'écart ; 30 s respectées chez Medawar's). Le script JewelerOS est toujours présent chez Lewis, Lucido, Eli's, Medawar's, Metals in Time et Diamond Vault of Troy ; absent, comme attendu, chez Honey, Orin, Giorgio Conti et Tapper's [S42].
- [V] robots.txt relus le 24/11 : aucun des dix n'interdit ClaudeBot ni les chemins visités. Medawar's garde `Crawl-delay: 30` ; chez Lucido, les `Crawl-delay` ne visent que des robots nommés (AhrefsBot, MJ12bot, Pinterest) ; le robots.txt d'Orin ne contient qu'une ligne pour un vérificateur de liens ; ceux de Lewis, Honey, Eli's, Diamond Vault et Tapper's sont les fichiers Shopify standard (panier, paiement, compte interdits, non visités) [S42].
- [V] Le constructeur 3D de Lewis a été **actionné** dans Chromium sans tête (navigateur standard, sans changement d'identité) : étape 1 sur 4 (couleur de métal, 8 styles, « Start from scratch »), étape 2 (naturel ou synthétique, 9 formes dont la marquise, « Decide later »), étape 3 (poids de 0,5 à 5 ct). À l'étape suivante, le rendu 3D ne s'est pas affiché (zone vide) : [I] WebGL indisponible dans le navigateur automatisé, comme chez Eli's le 15/11. Prix de la monture **non constaté** ; aucun bouton « Save » ni formulaire actionné. Bulle « Text us » (SMS) présente, non ouverte [S1].
- [V] Revus le 24/11 et inchangés : FAQ de Lewis (« real price of your engagement ring setting », « 2-4 weeks ») [S2] ; Lewis Ring Creator (« Begin with a Stone / Begin with a Setting ») [S3] ; montures Honey de 2 195 à 2 995 $ [S8] ; sur-mesure de Tapper's (croquis, puis « computer generated rendering ») [S26].
- Non refaits le 24/11 : les sites bloqués (Jensen, DeVries, Paul Medawar) n'ont pas été réessayés, pour ne pas forcer le blocage ; leur état est celui du 15/11.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Lewis Jewelers | Ann Arbor (300 S Maple Rd) | https://www.lewisjewelers.com/ | https://www.lewisjewelers.com/pages/custom-ring-builder (3D) ; https://www.lewisjewelers.com/apps/ring-creator/rb-get-started (pierre ou monture) | oui | non (200, Shopify ; robots.txt standard) | [V] Trois outils. (1) Un constructeur 3D JewelerOS : style, métal, forme de pierre, rendu « real-time 3D », prix réel de la monture, pierre exclue. (2) Le « Lewis Ring Creator » : « Begin with a Stone » ou « Begin with a Setting ». (3) Un « Design Your Wedding Band ». Bague prête en 2 à 4 semaines, consultation possible par téléphone ou vidéo. [V, 24/11, outil actionné] Parcours en 4 étapes : couleur de métal (jaune, blanc, rose), 8 styles (solitaire, halo, halo caché, clos, cathédrale, pavé, toi et moi, trois pierres) ou « Start from scratch » ; pierre naturelle ou synthétique, 9 formes dont la marquise ; poids de 0,5 à 5 ct. Boutique en ligne à prix affichés (alliance bombée de 10 mm en or jaune 14 k : 4 518,25 $ le 15/11, 4 293,25 $ le 24/11). Pages sur le synthétique et sur la reprise de diamant. Famille établie à Ann Arbor depuis 1971 selon la page de sur-mesure ; le logo porte « Since 1921 » (capture du 24/11) : date à vérifier [S1 à S4]. |
| 2 | Honey Jewelry Co | Grand Rapids (956 Cherry St SE) | https://honeyjewelry.com/ | https://honeyjewelry.com/collections/build-your-engagement-ring (monture d'abord) ; https://honeyjewelry.com/pages/shop-lab-grown-diamonds (pierre d'abord) | oui (monture puis pierre, sans 3D) | non (200, Shopify) | [V] Modèles maison (« Handcrafted in Michigan », créateur Nick), faits à la commande. Montures seules de 2 195 à 2 995 $ (6 modèles, taille ronde) en 6 métaux : or 14 k rose, blanc et jaune, or 18 k jaune et blanc, platine 950. Paiement au panier ; la taille de doigt est confirmée après l'achat. Recherche de pierres naturelles et synthétiques par l'extension Nivoda Connect ; toute pierre centrale synthétique est certifiée. 500 $ de sertissage si le client apporte sa pierre. Garantie de 6 mois. Livraison gratuite aux États-Unis, 30 $ à l'international. Aucun délai affiché [S7 à S10]. |
| 3 | Lucido Fine Jewelry | Birmingham, Rochester, Sterling Heights | https://lucidojewelry.com/ | https://lucidojewelry.com/pages/custom-ring-builder | oui | non (200) ; constructeur chargé en JavaScript, illisible en HTML statique ; accueil marqué `noindex,nofollow` | [V] Même outil et même FAQ que Lewis : prix réel de la monture sans la pierre, 2 à 4 semaines, nom et téléphone pour enregistrer, rendez-vous en boutique ou en vidéo. Configurateur du fabricant Gabriel & Co intégré (`/embed/gabriel-bridal`). Revendeur Rolex, 3 boutiques [S5][S6]. |
| 4 | Eli's Jewelry | Troy (398B W 14 Mile Rd) | https://eli.jewelry/ | https://eli.jewelry/pages/design-your-ring | oui | non ; le rendu 3D ne s'est pas chargé dans le navigateur automatisé (« We couldn't load your ring design ») | [V] « Ring Studio » JewelerOS en 4 étapes. Huit styles de départ : solitaire, halo, halo caché, clos, cathédrale, pavé complet, toi et moi, trois pierres. Ou bien « Start from scratch – Build it in 3D », ou une description avec photo. Pierre choisie en boutique. Prix affichés de 1 599 à 4 749 $ en page d'accueil (dont une bague synthétique à ovale central de 5 ct à 4 749 $). « In-House Craftsmanship », livraison assurée gratuite aux États-Unis [S11 à S13]. |
| 5 | Medawar's | Lansing, Flint, Fenton | https://www.medawars.com/ | https://www.medawars.com/custom-ring-builder | oui | non ; robots.txt `Crawl-delay: 30`, respecté | [V] Constructeur 3D JewelerOS : dessin en 3D, pierre choisie dans l'une des 3 boutiques, bague prête « in just a couple of weeks ». Famille de joailliers depuis 1920, « Direct Diamond Importers », sur-mesure et réparations maison, revendeur Rolex. Prix non relevés [S14][S15]. |
| 6 | Metals in Time | Royal Oak (301 S Main St), Birmingham (526 N Old Woodward) | https://www.metalsintime.com/ | https://www.metalsintime.com/custom-ring-builder/ | oui | non (robots.txt n'exclut que des robots de référencement et des filtres de prix, non visités) | [V] Constructeur 3D JewelerOS, catalogue WooCommerce par type de monture, recherche de diamants (`/detroit-diamonds/`), affirmation « matches or beats all online prices ». Partenaire StoneAlgo [V, ext. S29] [S16][S17]. |
| 7 | Diamond Vault of Troy | Troy (801 W Big Beaver Rd) | https://diamondvaultoftroy.com/ | https://diamondvaultoftroy.com/pages/custom-ring-builder | oui | non (200, Shopify) | [V] Constructeur JewelerOS (script présent). Montures « semi mounts » à prix affichés : les 12 premières bagues vont de 1 133 à 4 510 $ le 15/11 ; le 24/11, 24 montants de 937,50 à 4 510 $ sur la page (prix barrés compris) [S42]. Collection synthétique. « No custom fees and will make as many revisions as you want ». Forte activité de rachat d'or et de pièces [S18 à S20]. |
| 8 | Orin Jewelers | Northville (101 East Main Street) et Garden City | https://www.orinjewelers.com/ | https://www.orinjewelers.com/ringsettings | oui (constructeur en 3 étapes, sans 3D relevée) | non (robots.txt sans restriction pour les autres agents) | [V] Constructeur de la plateforme Punchmark : « Choose Setting », « Choose Diamond », « Complete Ring ». Menus « Shop Natural Diamonds » et « Shop Lab Grown Diamonds », page de sur-mesure, financement Wells Fargo. Les montures se chargent en JavaScript ; un seul prix lu dans le HTML (17 580 $) [S21][S22]. |
| 9 | Giorgio Conti Jewelers | Agglomération de Detroit (22637 Woodward Avenue ; Ferndale [I]) | https://www.gconti.com/ | https://www.gconti.com/engagement-ring-builder/ | oui (questionnaire, sans visuel du résultat ni prix) | non ; reCAPTCHA à l'envoi (non utilisé) | [V] « Engagement Ring Builder » en 8 étapes : style (dont toi et moi), métal (dont platine), origine (naturel, synthétique ou pierre du client), forme (dont marquise), 0,50 à 2,50 ct et plus, budget par tranche (moins de 3 000 $ à plus de 20 000 $), délai (de 1–2 semaines à plus d'un mois), coordonnées, puis « Get Your Quote ». Boutique à prix affichés (bague ancienne coussin taille mine, 1,47 ct poids total, 9 000 $), collection synthétique, « handcrafted in Detroit » [S23][S24]. |
| 10 | Tapper's Jewelry | Sud-est du Michigan (West Bloomfield, Troy, Novi [V, ext. S31][S32]) | https://tappers.com/ | https://tappers.com/collections/engagement-rings-1 ; sur-mesure : https://tappers.com/pages/custom-design | non | non (200, Shopify) | [V] Grand joaillier familial (« Family-owned for 49 years »). Boutique Shopify à prix affichés, bagues classées par tranche de prix (2 500 $ et moins, 2 500 à 5 000 $, 5 000 à 10 000 $). Montures seules, bagues et alliances synthétiques, diamants en vrac, reprise de diamant. Sur-mesure : consultation, croquis, puis rendu informatique, fabrication après validation. Transformation de bijoux anciens (« From old to new »). Revendeur Rolex [S25][S26]. |

## Autres acteurs repérés, non retenus dans les 10

| Acteur | Ville | Page lue | Configurateur | Blocage | Note |
| --- | --- | --- | --- | --- | --- |
| Diamond Castle Jewelers | Novi | https://www.diamondcastlejewelers.com/custom-ring-builder/ | oui (JewelerOS) | `Crawl-delay: 10`, respecté | [V] Famille depuis 1902, diamants en vrac surtout GIA. Le constructeur a été annoncé dans un billet daté du 17/07/2026 selon l'index de recherche [V, ext.] [S27]. Retiré du classement : outil identique aux rangs 1 à 7, sans prix relevé. |
| Siegel Jewelers | Grand Rapids | https://www.siegeljewelers.com/design-your-ring | oui (JewelerOS, script présent) | non | [V] « Est. 1889 », 6e génération. Site en JavaScript, peu lisible en HTML statique [S28]. |
| Michele & Company | Lapeer | https://www.michele-co.com/pages/custom-engagement-rings | oui (JewelerOS) | non | [V] Texte JewelerOS standard [S30]. |
| Motif Jewelers | Taylor, Milford | https://motifjewelry.com/pages/custom-engagement-rings | oui (JewelerOS) | non | [V] Texte JewelerOS standard ; panier « Call For Price » [V, ext.] [S30]. |
| Sanborn's Jewelers | Muskegon | https://www.sanbornsjewelers.com/custom-engagement-rings/ | oui (JewelerOS) | robots.txt sans réponse (page lue normalement) | [V] Famille depuis 1954 [V, ext.] [S30]. |
| Carroll/Ochs Jewelers | Monroe | https://www.carrollochs.com/pages/custom-engagement-rings | oui (JewelerOS) | non | [V] « Do our own work in-house » [V, ext.] [S30]. |
| Birmingham Jewelry | Sterling Heights | https://birminghamjewelry.com/pages/custom-designs | non (« Design Your Own » mène à la page de sur-mesure) | non | [V] Sur-mesure en atelier à Sterling Heights, CAO, croquis ou images de principe ; recherche de diamants (`/apps/diamondtools/`) ; boutique Shopify à prix affichés ; famille depuis 1975 [S33]. |
| AZZI Jewelers | Lansing | https://azzijewelers.com/ | non relevé | non | [V, ext.] Bagues de 3 670 à 8 400 $ en page d'accueil ; [V] collections synthétiques, page « Benchmark Ring Lab » (outil d'un fabricant d'alliances) [S34]. |
| Diamond Factory of Ann Arbor | Ann Arbor | https://www.diamondfactoryofannarbor.com/ | non | non | [V] Montures « semi-mount » avec diamants synthétiques de 1 553 à 2 366 $, galerie de sur-mesure [S35]. |
| J. Thomas Jewelers | Rochester Hills (2254 Crooks Road) | https://www.jthomasjewelers.com/engagement-rings-troy | probable (« Engagement Ring Builder » cité ; adresse non trouvée) | non | [V] Plateforme Punchmark, filtre naturel ou synthétique sur `/diamonds` [S36]. |
| Miner's Den Jewelers | Royal Oak (3417 Rochester Rd) | https://www.minersden.com/ | non relevé | non (`Crawl-delay: 2`) | [V] Recherche de diamants par forme, bijoux synthétiques, depuis 1971 [S37]. |
| Diamond Dave's | Lake Orion | https://www.diamonddavesjewelry.com/ | non | non | [V] « Design your own » : dessin en CAO avec le client, fabrication en 4 à 8 semaines ; pas de vente en ligne, prise de rendez-vous seulement [S38]. |
| Jensen Jewelers | Hudsonville | https://www.jensenjewelers.com/ | inconnu | **oui** : 403 sur robots.txt et sur l'accueil (une tentative, non contournée) | [V, ext.] « 1361 engagement rings » en boutique, synthétiques sous 2 000 $ (vidéo Facebook) [S39]. Site non lu. |
| DeVries Jewelers | Grand Rapids | https://devriesjewelers.com/robots.txt | inconnu | **oui** : robots.txt interdit ClaudeBot, Claude-Web et anthropic-ai ; site non automatisé | [V, ext.] « Since 1901 » [S40]. |
| Paul Medawar Fine Jewelry | Grand Rapids | https://www.shopmedawar.com/ | inconnu | **oui** : défi Cloudflare (403, `cf-mitigated: challenge`) | [V, ext.] Sur-mesure, revendeur Rolex [S41]. Site non lu. |
| Kesslers Diamonds | Siège au Wisconsin, boutiques au Michigan | non ouvert | oui (JewelerOS) [V, ext.] | non testé | [I] Hors périmètre : marque régionale du Wisconsin [S30]. |

Non audités, faute de signe de configurateur ou de vente en ligne dans les extraits de recherche : Craft-Revival, Almassian, Juhas and Sullivan, Metal Art Studio (Grand Rapids) ; Federico's, Miner's North, James C. Smith, Vince's (Traverse City) ; Jacob Matthew (Canton).

## Méthode et limites

- Pages lues avec Firecrawl (`firecrawl_scrape`, proxy standard, sans mode furtif) jusqu'à l'épuisement des crédits Firecrawl en cours de recensement. La suite a été lue avec `curl` (identité par défaut de curl, une seule tentative par adresse, pas de changement d'identité) et complétée par des extraits de recherche Parallel. Les crédits Firecrawl quotidiens se rechargent le 15/11/2026 vers 20 h 55 UTC.
- Les constructeurs 3D JewelerOS se chargent en JavaScript. Ils ont été identifiés par leur script et par le texte des pages, mais **aucun n'a été manipulé** : options internes, prix de monture affiché et qualité du rendu restent à constater par l'auditeur dans un vrai navigateur. Chez Eli's, le rendu 3D ne s'est pas chargé dans le navigateur automatisé [I : WebGL absent].
- Aucun « Save design », formulaire de devis ou rendez-vous n'a été envoyé. Le questionnaire de Giorgio Conti a été lu, pas rempli.

## Sources (lues le 15/11/2026)

1. Lewis, constructeur 3D (titre, description, script JewelerOS) : https://www.lewisjewelers.com/pages/custom-ring-builder
2. Lewis, sur-mesure et FAQ (prix de la monture, 2 à 4 semaines, depuis 1971, 300 S Maple Rd) : https://www.lewisjewelers.com/pages/custom-engagement-rings
3. Lewis Ring Creator (« Begin with a Stone / Begin with a Setting », prix de l'alliance de 10 mm) : https://www.lewisjewelers.com/apps/ring-creator/rb-get-started
4. Lewis, accueil (liens Ring Creator, Design Your Wedding Band, pages synthétique et reprise) : https://www.lewisjewelers.com/
5. Lucido, constructeur (script JewelerOS) : https://lucidojewelry.com/pages/custom-ring-builder ; accueil (3 boutiques, `noindex`, lien Gabriel) : https://lucidojewelry.com/
6. Lucido, sur-mesure et FAQ : https://lucidojewelry.com/pages/custom-engagement-rings
7. Honey, accueil et menus : https://honeyjewelry.com/
8. Honey, constructeur (6 montures, prix « From », métaux, adresse de la salle d'exposition) : https://honeyjewelry.com/collections/build-your-engagement-ring
9. Honey, fiche Abby (monture seule à 2 195 $, 6 métaux, fabrication à la commande, sertissage de 500 $, garantie de 6 mois, certificats) : https://honeyjewelry.com/products/abby-round-solitaire-tapered-band-engagement-ring
10. Honey, histoire (« Handcrafted in Michigan »), livraison, pierres (Nivoda Connect) : https://honeyjewelry.com/pages/story ; https://honeyjewelry.com/pages/shipping-policy ; https://honeyjewelry.com/pages/shop-lab-grown-diamonds
11. Eli's, Ring Studio 3D (étapes, scripts JewelerOS) : https://eli.jewelry/pages/design-your-ring
12. Eli's, page 3D (adresse de Troy) : https://eli.jewelry/pages/custom-ring-designer
13. Eli's, accueil (prix, livraison, « In-House Craftsmanship ») : https://eli.jewelry/
14. Medawar's, sur-mesure (3 boutiques, 1920, importateur direct) : https://www.medawars.com/custom-engagement-rings
15. Medawar's, constructeur (script JewelerOS) : https://www.medawars.com/custom-ring-builder
16. Metals in Time, sur-mesure (adresses, alignement sur les prix en ligne) : https://www.metalsintime.com/custom-engagement-rings/
17. Metals in Time, constructeur (script JewelerOS) : https://www.metalsintime.com/custom-ring-builder/
18. Diamond Vault of Troy, accueil (« no custom fees », adresse, liens) : https://diamondvaultoftroy.com/
19. Diamond Vault of Troy, bagues (prix des montures) : https://diamondvaultoftroy.com/collections/engagement-rings
20. Diamond Vault of Troy, constructeur (script JewelerOS) : https://diamondvaultoftroy.com/pages/custom-ring-builder
21. Orin, accueil (Punchmark, Garden City et Northville) : https://www.orinjewelers.com/
22. Orin, constructeur en 3 étapes : https://www.orinjewelers.com/ringsettings
23. Giorgio Conti, questionnaire en 8 étapes : https://www.gconti.com/engagement-ring-builder/
24. Giorgio Conti, accueil (prix, adresse, collection synthétique) : https://www.gconti.com/
25. Tapper's, accueil (menus, collections, description « 49 years ») : https://tappers.com/
26. Tapper's, sur-mesure : https://tappers.com/pages/custom-design
27. Diamond Castle, constructeur et page sur-mesure : https://www.diamondcastlejewelers.com/custom-ring-builder/ ; https://www.diamondcastlejewelers.com/custom-engagement-rings/ ; billet [ext.] : https://www.diamondcastlejewelers.com/design-your-dream-engagement-ring-online-with-diamond-castle-jewelers-new-3d-ring-builder
28. Siegel : https://www.siegeljewelers.com/ ; https://www.siegeljewelers.com/design-your-ring
29. StoneAlgo, joailliers partenaires près de Royal Oak (Diamond Vault of Troy, Metals in Time, Lucido) : https://www.stonealgo.com/local-jewelers/royal-oak-mi
30. Autres pages JewelerOS (statut 200 et script relevés ; texte via la recherche Parallel) : https://www.michele-co.com/pages/custom-engagement-rings ; https://motifjewelry.com/pages/custom-engagement-rings ; https://www.sanbornsjewelers.com/custom-engagement-rings/ ; https://www.carrollochs.com/pages/custom-engagement-rings ; Kesslers [ext.] : https://www.kesslersdiamonds.com/pages/custom-engagement-rings
31. [ext.] Tapper's dans le centre commercial Somerset Collection (Troy) : https://www.thesomersetcollection.com/retailer/tappers-diamonds-and-fine-jewelry/
32. [ext.] Crain's Detroit, salle d'exposition de Tapper's à Novi : https://www.crainsdetroit.com/retail/tappers-jewelry-opens-flagship-showroom-novi/
33. Birmingham Jewelry : https://birminghamjewelry.com/ ; https://birminghamjewelry.com/pages/custom-designs ; https://birminghamjewelry.com/apps/diamondtools/
34. AZZI : https://azzijewelers.com/
35. Diamond Factory of Ann Arbor : https://www.diamondfactoryofannarbor.com/
36. J. Thomas : https://www.jthomasjewelers.com/engagement-rings-troy
37. Miner's Den : https://www.minersden.com/
38. Diamond Dave's : https://www.diamonddavesjewelry.com/
39. Jensen, 403 (robots.txt et accueil) : https://www.jensenjewelers.com/ ; [ext.] https://www.facebook.com/jensenjewelersmi/videos/try-on-1361-rings-in-hudsonville/1749648076107717/
40. DeVries, robots.txt : https://devriesjewelers.com/robots.txt ; [ext.] https://devriesjewelers.com/
41. Paul Medawar, défi Cloudflare : https://www.shopmedawar.com/
42. Contrôle du 24/11/2026 (statut HTTP, script JewelerOS, robots.txt) : les dix pages de départ du tableau, plus https://diamondvaultoftroy.com/collections/engagement-rings et les robots.txt de chaque domaine (`/robots.txt`).
