# Inventaire des joailliers : Texas

Recensement du 25 novembre 2026, fait pour l'étude de concurrence aux États-Unis. Je suis resté en lecture seule, comme un visiteur ordinaire :
- robots.txt lu avant chaque site ;
- aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ouvert ;
- au plus une page toutes les 3 secondes par site, et 11 secondes chez Karat 22, dont le robots.txt demande `Crawl-delay: 10` à ClaudeBot.

Repères :
- **[V]** vérifié : page lue le 25/11/2026 (le numéro renvoie aux sources en fin de document) ;
- **[V, index]** lu seulement dans l'extrait d'un moteur de recherche (Parallel Search), sans relecture en direct ;
- **[I]** inféré, c'est-à-dire déduit d'éléments vérifiés ;
- **[S]** supposé.

Les prix sont en dollars américains, tels qu'affichés le 25/11/2026. La colonne « Adresse » donne l'adresse du site.

Outils. J'ai cherché les sites avec Parallel Search, par des requêtes génériques (« Houston jeweler 3D ring designer », etc.). J'ai lu les pages avec **curl tel quel**, sans changer d'identité de navigateur. Je n'ai donc **exécuté aucun JavaScript**, et aucun configurateur n'a été actionné. Ce que j'en dis vient du texte des pages et des scripts qu'elles chargent. L'audit en navigateur reste à faire.

## Constat général

- [V] **Quatre joailliers utilisent le constructeur 3D en marque blanche JewelerOS.** C'est le même outil qu'en Alabama, en Oklahoma et au Washington.
  - Le script est vu directement chez trois d'entre eux, chacun avec son identifiant (`data-org-id`) :
    - Wolf Diamonds (Houston), `9d8RXKjBekdN` [5] ;
    - Sethi's Fine Jewelry (Houston), `9eYTuQIRLefA` [7] ;
    - CD Clark Diamonds (San Antonio), `9dUlA3mly6QN` [9].
  - Le quatrième, Quenan's (Georgetown), est déduit [I]. Sa page reprend mot pour mot le texte de JewelerOS (« Design your ring online in stunning 3D… ready for you in just a couple of weeks ») et utilise ses images (`jeweleros-seo-page/…`) [11]. Le script du configurateur n'est pas dans le HTML : il est sans doute chargé par JavaScript.
  - [I] La 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier. C'est la différence que revendique JR Diamond.
  - Aucun de ces quatre sites n'affiche de prix sur les pages lues. Le parcours se termine par un rendez-vous en magasin : on y choisit la pierre et on y finalise la commande [5][7][9][11].
- [V] **Deux sites expliquent le prix**, ce qui est rare.
  - Diamonds Above (Austin) détaille le prix poste par poste.
    - Monture : de 1 200 à 2 800 $ autour d'un diamant synthétique, de 1 700 à 4 500 $ autour d'un naturel.
    - Diamant synthétique de 1 ct (D à F, VS1 à VVS1) : de 975 à 1 250 $. Un naturel comparable : environ 8 500 $.
    - Rendu 3D gratuit, révisions illimitées, bague prête en 3 à 4 semaines [2].
    - Un « Ring Price Estimator » en 6 étapes (type de pierre, forme, carats, qualité, métal, monture) donne une fourchette. La page précise : « not a final quote » [1].
  - LaProng (Carrollton, au nord de Dallas) propose un constructeur d'alliances qui donne un prix en direct (« live, accurate estimate ») avec un rendu en temps réel [13].
    - [V] L'outil est intégré par une iframe `LaProng-frame-categoryembed.jewelershowcase.com/band-builder` [13]. [I] JewelerShowcase est la vitrine en marque blanche du fournisseur Stuller : catalogue et prix viennent donc du fournisseur.
- [V] **La fabrication est montrée chez deux joailliers**, à leur façon :
  - LaProng propose des ateliers où le couple fabrique lui-même ses alliances à l'établi, en une journée, « from $695 » [13][14]. Sinon, l'atelier fabrique la bague configurée en ligne en **10 à 14 jours ouvrés** [13]. C'est le délai le plus proche des 14 jours ouvrés de JR Diamond.
  - The Diamond Factory (Dallas) se dit « the only Jewelry Retail Showroom in the United States with an on-site Diamond Cutting Factory ». La taillerie se visite [17].
  - Ailleurs, la fabrication est racontée, pas montrée : croquis, CAO, cire, fonte, sertissage.
- [V] **La pierre est montrée en vidéo avant la production chez Jonathan's Fine Jewelers** (Houston) : « You review the stone in person or by HD video before we commit to production » [19]. [I] C'est la promesse de la « pierre filmée » de JR Diamond, mais dans un parcours sur rendez-vous, sans configurateur.
- [V] **Le synthétique est proposé partout** :
  - Diamonds Above [2] et Jonathan's [19][20] le comparent au naturel, chiffres à l'appui ;
  - The Diamond Factory [16], Sofia Lior [22][23] et Karat 22 [25] affichent des bagues ou des pierres chiffrées ;
  - Karat 22 cite un certificat IGI dans le nom d'une bague (« 3 Carat Oval Lab Grown Diamond… IGI Certified (2.96 Ct) », 4 450 $) [25].
- [V] **Blocages** :
  - Aucun des dix sites classés n'interdit l'accès aux robots, et tous ont répondu 200 à curl.
  - Sethi's autorise nommément ClaudeBot, Claude-Web et anthropic-ai [6].
  - Karat 22 range ClaudeBot dans un groupe d'agents d'IA, avec `Crawl-delay: 10` et sans interdiction de l'accueil ni des catégories [24].
  - Seul incident : chez The Diamond Factory, la page du constructeur (`/apps/ringbuilder/settings/`, lien du menu) répond 404 à curl [16]. Je n'ai pas fait de nouvel essai. [I] La page est servie par une extension Shopify (GemFind) qui demande un navigateur.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | LaProng Jewelers | Carrollton (agglomération de Dallas), sur rendez-vous | https://laprong.com/ | https://laprong.com/ring-builder/ | oui (constructeur d'alliances avec rendu en temps réel et prix en direct ; [I] outil Stuller JewelerShowcase) | non (robots.txt : `/wp-admin/` et `/wc-api/` seulement) [12] | [V] Le site réunit les trois promesses de JR Diamond, sous une autre forme [13][14][15] : un configurateur chiffré (« Our Wedding Ring Builder will provide you with a live, accurate estimate ») ; la fabrication en 10 à 14 jours ouvrés ; la fabrication montrée, puisque le couple peut fabriquer lui-même ses alliances (ateliers dès 695 $, « 1,200+ rings made in workshops »). Il fait aussi du sur-mesure : rendus 3D envoyés en quelques jours, prototype en résine expédié sur demande, diamants naturels et synthétiques classés GIA et IGI, métaux recyclés certifiés SCS. Limite : le configurateur ne couvre que les alliances, pas les bagues de fiançailles. |
| 2 | Diamonds Above Fine Jewelers | Austin (4101 Guadalupe St, près de l'université) | https://www.diamondsabove.com/ | https://www.diamondsabove.com/ring-price-estimator (sur-mesure : https://www.diamondsabove.com/custom-engagement-rings-austin) | non (estimateur de budget en 6 étapes, sans 3D) | non (robots.txt : `/_dev/`, `/docs/`, `/node_modules/` seulement) [4] | [V] Le prix le mieux expliqué de l'État. Il est séparé entre monture et pierre, et l'écart entre synthétique et naturel est chiffré (voir le constat) [2]. Bagues par style « from $2,000 » (solitaire), 2 500 $ (pavage), 3 000 $ (halo caché) ; la page précise : « Starting prices include the setting and center stone » [3]. Modèle 3D photoréaliste gratuit, rien n'est fabriqué avant validation, bague prête en 3 à 4 semaines, fabrication à Austin. Platine, or 14 et 18 k [2][3]. Depuis 1986 [3]. Pas de vente en ligne vue sur les pages lues [I]. |
| 3 | Wolf Diamonds | Houston (952 Echo, Suite 315) | https://wolfdiamonds.com/ | https://wolfdiamonds.com/pages/custom-ring-builder | oui (3D JewelerOS, `data-org-id="9d8RXKjBekdN"`) | non (Shopify, robots.txt standard) [4b] | [V] Tout le site tourne autour du constructeur 3D : bandeau « Build your dream ring », menu « Design Your Ring » [5]. Le parcours : dessin en 3D en ligne, puis choix de la pierre dans la salle d'exposition de Houston, puis commande avec l'équipe [5b]. Aucun prix sur les pages lues ; la page `/collections/engagement-rings` répond 404 [5]. [I] La vente se conclut en magasin. |
| 4 | Sethi's Fine Jewelry | Houston (2221 S Voss Rd) | https://sethisfinejewelry.com/ | https://sethisfinejewelry.com/custom-ring-builder/ | oui (3D JewelerOS, `data-org-id="9eYTuQIRLefA"`) | non (ClaudeBot nommément autorisé) [6] | [V] Constructeur 3D JewelerOS ; page sur-mesure : « Free Online Custom Design Tool », pierre choisie en salle d'exposition [7]. Menu « Natural Diamonds » et « Lab-Grown Diamonds », alliances Benchmark, marques Gabriel & Co., Luvente, Odelia [7]. Même adresse depuis plus de 25 ans [7b]. Aucun prix relevé sur les pages lues. |
| 5 | CD Clark Diamonds | San Antonio (213 NW Loop 410) | https://cdclarkdiamonds.com/ | https://cdclarkdiamonds.com/pages/custom-ring-builder (puis https://cdclarkdiamonds.com/pages/design-your-ring) | oui (3D JewelerOS, `data-org-id="9dUlA3mly6QN"`) | non (Shopify, robots.txt standard) [8] | [V] Le site entier est construit autour du configurateur (menu « Design Your Ring », « Client Gallery »). La page de départ propose 8 styles (solitaire, halo, halo caché, clos, cathédrale, pavage, toi et moi, trois pierres) ou « Start from scratch », avant le « 3D Ring Designer » [9]. Titre du site : « Custom Rings, Natural & Lab Diamonds ». Rubrique « Shipping & Returns » au pied de page [9]. Aucun prix lu. |
| 6 | Jonathan's Fine Jewelers (JFJCO) | Houston (6222 Richmond Ave) | https://www.jfjco.com/ | https://www.jfjco.com/design-custom-engagement-ring-houston/ | non | non (robots.txt WordPress : `/wp-admin/`, `/cgi-bin/`) [18] | [V] Parcours sur-mesure détaillé et chiffré [19][19b] : la pierre est montrée « in person or by HD video » avant la production ; deux à trois révisions de la CAO incluses ; production en 2 à 3 semaines après validation de la CAO, 4 à 6 semaines en tout ; trois gammes de prix, de 2 500 à 25 000 $ et plus, dont un solitaire en or 14 k avec un synthétique de 1 ct « starts around $2,500 ». Il publie aussi un tableau des prix des diamants naturels et synthétiques par carat, prix de détail américains typiques : 1 ct naturel G-H VS de 4 000 à 8 000 $, synthétique de 800 à 1 500 $ [20]. Grossiste en diamants et revendeur de montres. |
| 7 | The Diamond Factory | Dallas (13719 Omega Rd) | https://diamondfactorydallas.com/ | https://diamondfactorydallas.com/apps/ringbuilder/settings/ (lien du menu, **404 à curl**) ; recherche de diamants : https://diamondfactorydallas.com/apps/diamondtools/ | oui (constructeur monture et diamant GemFind, sans 3D ; recherche de pierres « vdb-app ») | partiel : le constructeur répond 404 à curl, sans nouvel essai ; robots.txt Shopify standard [16a] | [V] 112 bagues de fiançailles en ligne ; en première page, 20 prix de 2 450 à 280 000 $, naturels et synthétiques mêlés (synthétique taille ronde en solitaire, 2 900 $) [16]. **Taillerie de diamants dans le magasin**, ouverte aux visiteurs ; « 5th generation diamond cutters », plus de 35 ans d'expérience [17]. Rendu CAO détaillé avant toute fabrication [17b]. |
| 8 | Quenan's Fine Jewelers | Georgetown (nord d'Austin) | https://www.quenansjewelers.com/ | https://www.quenansjewelers.com/pages/custom-ring-builder | oui ([I] 3D JewelerOS, chargée par JavaScript ; le site tourne sur Punchmark) | non (robots.txt : `Crawl-delay: 2`) [10] | [V] La page sur-mesure reprend le texte et les images de JewelerOS : dessin en ligne, pierre choisie dans la salle d'exposition de Georgetown [11]. Menu « Design Your Ring », « Loose Diamonds », « Bridal Sets », alliances [11b]. Entreprise familiale depuis plus de 75 ans, à Georgetown depuis 1999 [11b]. Un seul montant lu : un avis client qui parle d'une économie de 2 000 $ [11]. |
| 9 | Sofia Lior Diamonds | Dallas (4201 Spring Valley Rd, Suite 520) | https://sofialior.diamonds/ | https://sofialior.diamonds/engagement-rings-with-lab-created-diamonds/ (montures ; pierres : https://sofialior.diamonds/stone-catalog/lab-grown-diamond/) | oui (constructeur en 3 étapes : monture, pierre, bague complète ; sans 3D) | non (robots.txt : `/tag/`, `/api/`, `/wp-content/`) [21] | [V] Le constructeur « lets you combine your chosen center stone and setting to create and purchase » [22]. Montures chiffrées sur la page lue : 17 prix, à partir de 1 076,10 $ [23]. Catalogue de pierres synthétiques et de moissanites, avec filtre par laboratoire (GIA, IGI…) [23b]. Sur-mesure avec CAO, cire ou résine imprimée [22b]. [I] Positionné sur le synthétique et le prix bas (« Beauty does not have to cost twice as much ») [22]. |
| 10 | Karat 22 Jewelers | Houston (Hillcroft) | https://karat22.com/ | https://karat22.com/engagement-rings | non | non (ClaudeBot : `Crawl-delay: 10`, sans interdiction de ces pages) [24] | [V] Bagues de fiançailles chiffrées en première page : 12 prix distincts, de 1 200 à 4 450 $, dont des synthétiques certifiés IGI [25]. Sur-mesure fait sur place avec un rendu CAO 3D ; diamant naturel ou synthétique présentés côte à côte ; remontage des diamants de famille [25]. Bandeau « PRICES MAY VARY DUE TO GOLD RATE » [25]. Spécialiste de l'or 22 carats, plus de 40 ans d'expérience [25]. |

## Candidats vus et écartés

- **Nazar's & Co. Jewelers** (Houston, 4901 Richmond Ave) : constructeur GemFind (« Start with a Setting / Natural Diamond / Lab Diamond »), page de départ https://nazarsandco.com/apps/ringbuilder/settings/ (répond 200). Bagues synthétiques de la marque maison Nazarelle « from $2,494 » ; « 396 products » [V, 26][V, 27]. Robots.txt Shopify standard. Il serait 11e.
- **Stone Oak Jewelers** (San Antonio, 18730 Stone Oak Pkwy) : extension Shopify « ring-creator » (https://stoneoakjewelers.com/apps/ring-creator/rb-setting-list), avec départ par une pierre naturelle, synthétique ou de couleur. Filtres or 14 et 18 k et platine. « Rings Starting at $2,350.00 ». Tout est fait sur place, « From 3-D modeling to metalwork » [V, 28][V, 29]. Il serait 12e.
- **RS Diamond Broker** (Dallas, 17194 Preston Rd) : une page « Ring Configurator » existe (https://www.rsdiamondbroker.com/design-your-own-ring-or-band), mais l'outil n'apparaît pas dans le HTML. [I] Il est chargé par JavaScript (site Wix). Courtier en diamants naturels et synthétiques ; acompte de 50 % avant la CAO [V, 30]. Son robots.txt ne cite que trois robots, sans règle générale.
- **Cullen Jewellery** : pages « Houston » et « Austin » [V, index], mais c'est un vendeur en ligne australien, pas un joaillier établi au Texas. Écarté.
- Vus seulement dans l'index de recherche, sans lecture en direct :
  - **Lindsey Leigh Jewelry** (Houston) : sur-mesure en 6 à 8 semaines, cire expédiée [V, index] ;
  - **House of Brilliance** (Dallas) : sur-mesure, 4 à 8 semaines [V, index] ;
  - **Dallas Gold & Silver Exchange** : 6 magasins dans l'agglomération de Dallas-Fort Worth, depuis 1978 [V, index] ;
  - **Rialto Jewelry** (San Antonio) : devis en ligne, cire imprimée en 3D [V, index].
- Non examinés : les grandes enseignes régionales connues du Texas (par exemple Shiels, Zadok, Bachendorf's). Elles n'ont pas été cherchées dans ce recensement, et leur siège n'a pas été vérifié.

## Sources

Les pages ont été lues le 25/11/2026 avec curl, sans exécution de JavaScript. Les extraits « index » viennent de Parallel Search, consulté le même jour.

1. https://www.diamondsabove.com/ring-price-estimator
2. https://www.diamondsabove.com/custom-engagement-rings-austin
3. https://www.diamondsabove.com/austin-engagement-rings (et https://www.diamondsabove.com/ : menu et adresse)
4. https://www.diamondsabove.com/robots.txt — 4b. https://wolfdiamonds.com/robots.txt
5. https://wolfdiamonds.com/pages/custom-ring-builder et https://wolfdiamonds.com/ (script `jeweleros.com/static/dist/jos.js`, org-id 9d8RXKjBekdN ; adresse au pied de page) ; https://wolfdiamonds.com/collections/engagement-rings (404) — 5b. https://wolfdiamonds.com/pages/custom-engagement-rings
6. https://sethisfinejewelry.com/robots.txt
7. https://sethisfinejewelry.com/custom-ring-builder/ (`partner_config.js`, org-id 9eYTuQIRLefA) et https://sethisfinejewelry.com/custom-engagement-rings/ — 7b. https://sethisfinejewelry.com/
8. https://cdclarkdiamonds.com/robots.txt
9. https://cdclarkdiamonds.com/, https://cdclarkdiamonds.com/pages/custom-ring-builder et https://cdclarkdiamonds.com/pages/design-your-ring (org-id 9dUlA3mly6QN)
10. https://www.quenansjewelers.com/robots.txt
11. https://www.quenansjewelers.com/pages/custom-engagement-rings — 11b. https://www.quenansjewelers.com/ et https://www.quenansjewelers.com/pages/custom-ring-builder
12. https://laprong.com/robots.txt
13. https://laprong.com/ring-builder/ (iframe `LaProng-frame-categoryembed.jewelershowcase.com/band-builder`)
14. https://laprong.com/
15. https://laprong.com/custom-design-service/
16. https://diamondfactorydallas.com/collections/lab-grown-engagement-rings (redirige vers `/a/search/engagement-rings?filter_custom.diamond_type=Lab+Grown`, 112 produits) et https://diamondfactorydallas.com/ (liens GemFind et vdb-app, adresse) ; https://diamondfactorydallas.com/apps/ringbuilder/settings/ et https://diamondfactorydallas.com/apps/ringbuilder/diamondtools (404) — 16a. https://diamondfactorydallas.com/robots.txt
17. https://diamondfactorydallas.com/pages/diamond-cutting-factory — 17b. https://diamondfactorydallas.com/pages/custom-design-process
18. https://www.jfjco.com/robots.txt
19. https://www.jfjco.com/design-custom-engagement-ring-houston/ — 19b. https://www.jfjco.com/custom-diamond-jewelry-houston/
20. https://www.jfjco.com/diamond-price-chart/
21. https://sofialior.diamonds/robots.txt
22. https://sofialior.diamonds/ — 22b. https://sofialior.diamonds/custom-engagement-rings/
23. https://sofialior.diamonds/engagement-rings-with-lab-created-diamonds/ — 23b. https://sofialior.diamonds/stone-catalog/lab-grown-diamond/
24. https://karat22.com/robots.txt
25. https://karat22.com/engagement-rings et https://karat22.com/
26. https://nazarsandco.com/ et https://nazarsandco.com/apps/ringbuilder/settings/
27. https://nazarsandco.com/pages/lab-grown-diamond-engagement-rings-houston-tx
28. https://stoneoakjewelers.com/ (et https://stoneoakjewelers.com/robots.txt)
29. https://stoneoakjewelers.com/apps/ring-creator/rb-setting-list
30. https://www.rsdiamondbroker.com/, https://www.rsdiamondbroker.com/customdesign et https://www.rsdiamondbroker.com/design-your-own-ring-or-band (et https://www.rsdiamondbroker.com/robots.txt)

Recherches Parallel Search (index) : « Houston jeweler design your own engagement ring online 3D », « Dallas jeweler ring builder custom engagement rings », « Austin Texas jeweler 3D ring designer », « San Antonio jeweler build your own engagement ring », « Texas lab grown diamond engagement rings jeweler online prices », « Fort Worth jewelers engagement ring builder prices », « Zadok Jewelers engagement rings design your own ». Elles ont fait remonter Cullen (cullenjewellery.com/engagement-rings/custom/us-houston), Lindsey Leigh (lindseyleighjewelry.com/pages/custom), House of Brilliance (houseofbrilliance.com/bridal/engagement-rings), DGSE (dgse.com/engagement-rings/) et Rialto (rialtojewelry.com/pages/custom-jewelry-designs-san-antonio).
