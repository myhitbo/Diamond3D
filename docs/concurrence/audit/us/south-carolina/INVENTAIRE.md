# Inventaire des joailliers : Caroline du Sud (South Carolina)

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt de chaque site contrôlé avant toute page (outil de contrôle `robots.cjs`, puis lecture du fichier entier pour les groupes visant les agents d'IA et les `Crawl-delay`), aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ni SMS ouvert, au plus une page toutes les 2,5 secondes par site (10 secondes chez Sabyl's, dont le robots.txt fixe `Crawl-delay: 10` ; une seule page du constructeur chez Trails, `Crawl-delay: 30`).

Repères : **[V]** vérifié (page lue le 25/11/2026, numéro de source en fin de document) ; **[V, index]** lu dans l'extrait d'un moteur de recherche (Parallel Search), pas revu en direct ; **[I]** inféré (déduit d'éléments vérifiés) ; **[S]** supposé. Prix en dollars américains, tels qu'affichés le 25/11/2026 (période de soldes du « Black Friday » sur plusieurs sites). La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques, sans mention de JR Diamond) ; pages lues avec **curl tel quel**, sans changer d'identité de navigateur. Conséquence : **aucun rendu JavaScript**, donc aucun configurateur actionné. Ce qui est dit des outils vient du texte des pages et des scripts qu'elles chargent ; les déductions sont marquées [I].

## Constat général

- [V] Un seul configurateur 3D en ligne encore servi : **Skatell's Jewelers** (Spartanburg) charge le script en marque blanche JewelerOS (`data-org-id="9pGXewqmwP2Z"`) [7]. C'est le même outil que chez Hudson-Poole, Ware et Marquirette's (Alabama), Fountain City, Southern Diamond et Minor (Tennessee), Diamond Consulate (Oklahoma). [I] Modèle paramétrique générique, pas le fichier de fabrication de l'atelier.
- [V] **Charleston Rings** a retiré son constructeur 3D : la page `pages/custom-engagement-rings`, qui le présentait encore dans l'index d'un moteur de recherche (« Design your custom ring online using our new 3D engagement ring builder » [V, index]), répond **404** [4] ; le lien « Design Your Ring » du menu mène désormais au parcours sur rendez-vous « Truly Custom » (CAO, puis paiement) [3].
- [V] Les autres parcours en ligne sont des constructeurs « monture, puis pierre » de prestataires : **GemFind** (Trails on Falls, Greenville) [21], **Punchmark** (Moseley, Lexington) [30], parcours « Design Your Own Ring » avec choix « Natural Diamond » / « Lab Grown Diamond » (Floyd & Green, Aiken) [11], application « Ring Creator » (Skatell's) [8]. Sabyl's (Greenville) intègre le configurateur d'alliances et le catalogue de Stuller (cadres `jewelershowcase.com`), dont le robots.txt interdit tout (`Disallow: /`) : non lus [17].
- [V] **Fabrication montrée** : Floyd & Green (Aiken) est le seul acteur qui annonce photographier la fabrication de la bague du client, « from wax to setting », et remettre ces images dans un livre (numérique et relié), « Perfect Love Custom » [13]. C'est l'idée « on voit naître son bijou » de JR Diamond, en version album remis à la fin [I]. Ailleurs, le récit de fabrication s'arrête à la CAO et à la maquette en cire à essayer (Hitched, Gold Creations, llyn strong, Skatell's) [10][19][26][27].
- [V] **Diamant synthétique** : présent chez 8 des 10 acteurs classés. Charleston Rings ne vend que du synthétique (522 produits, filtre « Lab Grown Diamond (522) ») [5] ; Gold Creations affiche surtout des bagues synthétiques en stock (dès 1 750 $ pour 1 ct ovale) [18] ; Floyd & Green, Hitched, Sabyl's, Skatell's, Trails proposent les deux.
- [V] **Métaux identiques à JR Diamond** chez Charleston Rings : or 14 k jaune, blanc, rose et platine sur chaque fiche [6]. [V] Délais affichés : Skatell's, environ 2 semaines après validation [9, index] ; Charleston Rings, 4 à 5 semaines [3] ; Floyd & Green, 6 à 8 semaines [12] ; llyn strong, 3 à 12 semaines [27]. Les 14 jours ouvrés de JR Diamond sont au niveau du plus rapide [I].
- [V] Blocages : Sylvan's (Columbia) et Christopher's Fine Jewelry (Pawleys Island) interdisent ClaudeBot, anthropic-ai et Claude-Web dans leur robots.txt (`Disallow: /`) ; Croghan's Jewel Box (Charleston) renvoie une page Cloudflare « Just a moment... » (HTTP 403) dès le robots.txt ; Skatell's Manufacturing Jewelers (Mount Pleasant) redirige son catalogue vers `/verify.html`. Aucun de ces sites n'a été lu au-delà ; ils sont listés en fin de tableau comme **bloqués**, sans classement.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Floyd & Green Fine Jewelers | Aiken | https://www.floydandgreen.com/ | https://www.floydandgreen.com/design-your-own-ring/choose-your-diamond ; montures : https://www.floydandgreen.com/get-engaged/engagement-ring-settings ; sur mesure : https://www.floydandgreen.com/page/perfect-love-custom.html | oui (pierre puis monture, naturel ou synthétique) | non (robots.txt autorise explicitement ClaudeBot et Claude-User ; interdit `/*?stoneID`, `/*?ringType=`, `/cart`) | [V] Seul acteur qui photographie la fabrication de la bague du client (« from wax to setting ») et la remet en livre-souvenir numérique et relié [13]. Sur mesure : croquis et « online 3-D model » pour valider, CAO vue « from every angle », 6 à 8 semaines [12]. 124 montures chiffrées (750 à 1 300 $ en première page) [14] ; bagues complètes avec diamant, dont synthétiques Martin Flyer à 3 500 et 4 000 $ [V, index]. |
| 2 | Charleston Rings | Charleston | https://charlestonrings.com/ | https://charlestonrings.com/collections/engagement-rings-all ; sur mesure : https://charlestonrings.com/pages/truly-custom-rings | non (constructeur 3D retiré, page en 404) | non (Shopify ; aucun groupe visant les agents d'IA) | [V] Spécialiste du **synthétique seul** : 522 bagues chiffrées « From 990 $ » à « From 4 400 $ » en première page, 10 formes dont la marquise, or 14 k jaune, blanc, rose et platine (les métaux de JR Diamond) [5][6]. Sur mesure dès 3 000 $, sans acompte : CAO et choix de la pierre d'abord, paiement après validation, 4 à 5 semaines, refaite gratuitement sous 14 jours si le client n'est pas satisfait [3]. Diamants F ou mieux, VS1 ou mieux [6]. |
| 3 | Skatell's Jewelers | Spartanburg | https://skatellsjewelers.com/ | https://skatellsjewelers.com/pages/design-your-ring (3D) ; pierres : https://skatellsjewelers.com/apps/ring-creator/rb-stone-list?diamond_type=labgrown | oui (3D JewelerOS + « Ring Creator ») | non (Shopify ; aucun groupe visant les agents d'IA) | [V] Seul configurateur 3D servi dans l'État (script JewelerOS) [7] ; recherche de pierres naturelles et synthétiques [8] ; 1 242 résultats en bagues de fiançailles, prix de 620 à 6 400 $ en première page [8]. [V, index] Sur mesure : CAO et moule en cire avant fabrication, bague prête « in approximately two weeks » [9]. Maison familiale depuis 1964 (Greenville), boutique de Spartanburg depuis 1996 [7]. |
| 4 | Hitched (salle de Charleston) | Charleston (siège à Philadelphie) | https://tryhitched.com/ | https://tryhitched.com/pages/signature-engagement-ring-builder ; page locale : https://tryhitched.com/pages/engagement-rings-charleston | oui (constructeur monture + pierre avec prix) | non (robots.txt autorise ClaudeBot, Claude-User) | [V] Salle d'exposition au 49 1/2 John Street ; montures « starting at 2 499 $ » ; sur mesure en 5 étapes (pierre payée d'abord, rendu CAO et devis, cire imprimée à essayer, fabrication) ; naturel et synthétique [10]. **Déjà audité** dans le groupe Illinois (`../illinois/hitched.md`) : à ne pas réauditer [I]. |
| 5 | Trails on Falls (Trails by Sandberg Jewelers) | Greenville | https://www.trailsonfalls.com/ | https://www.trailsonfalls.com/ringbuilder/settings/ | oui (GemFind Ring Builder) | non, mais `Crawl-delay: 30` | [V] Constructeur GemFind (extension WordPress `gemfind-ring-builder`) [21] ; bagues chiffrées avec bouton « Add to cart » en page d'accueil, de 2 999 $ (« Celtic Round Lab Created ») à 16 999 $ [20] ; page de sur mesure. Bijoux anciens et objets d'art aussi. |
| 6 | Gold Creations | Charleston | https://www.goldcreationschas.com/ | https://www.goldcreationschas.com/gifts/engagement-rings/ ; sur mesure : https://www.goldcreationschas.com/custom-designs/ | non | non (`Crawl-delay: 2`) | [V] Bagues en stock chiffrées, surtout synthétiques (1 ct ovale serti clos 1 750 $, 3 ct taille émeraude 2 095 $ soldé), plus des bagues anciennes (1 250 à 7 650 $ en première page) [18]. Sur mesure : acompte de 125 $ non remboursable, CAO modifiable, cire sur demande contre un petit supplément, plus de 50 modèles d'essai [19]. Depuis 1975. |
| 7 | Sabyl's Fine Jewelry | Greenville | https://sabyls.com/ | https://sabyls.com/custom-engagement-rings-greenville-sc/ ; alliances : https://sabyls.com/customize-your-wedding-band/ | partiel (configurateur d'alliances Stuller en cadre, non lu) | partiel : cadres `jewelershowcase.com` interdits par leur robots.txt ; `Crawl-delay: 10` | [V] Studio sur rendez-vous : images photoréalistes gratuites de la bague, sans engagement ; inspiration envoyée par SMS ; garantie de retouche jusqu'à satisfaction ; naturel et synthétique [15][16]. Pas de prix : « Call or Text Us for Our Best Price! » [17]. Depuis 1988. |
| 8 | Moseley Diamond Showcase | Lexington et Chapin (région de Columbia) | https://www.moseleydiamond.com/ | https://www.moseleydiamond.com/ringsettings | oui (Punchmark, « Choose a Ring » puis « Choose a Diamond ») | non (`Crawl-delay: 2`) | [V] Constructeur Punchmark avec filtres or blanc, platine, marquise… [30] ; « Benchmark Ring Lab » pour les alliances [29] ; sur mesure « online or in person », maquette imprimée en 3D à tenir en main, avec les pierres posées [28]. Prix du catalogue chargés par script : non relevés [I]. |
| 9 | Hale's Jewelers | Greenville | https://www.halesjewelers.com/ | https://www.halesjewelers.com/collections/engagement-rings | non | non (Shopify) | [V] « A Greenville Tradition Since 1856 » ; 20 prix en première page, de 5 600 à 110 990 $, deux « Price Upon Request » ; Forevermark, Christopher Designs [22]. Page sur mesure. Aucune mention de synthétique dans la page lue. |
| 10 | llyn strong Fine Art Jewelry | Greenville | https://llynstrong.com/ | https://llynstrong.com/custom/engagement-rings/ (processus : https://llynstrong.com/custom/) | non | non (seul `/wp-admin/` interdit) | [V] Atelier de création : consultation, acompte non remboursable, rendu CAO en couleur, essayage de la fonte avant sertissage, expertise et photo par la gemmologue de la maison, 3 à 12 semaines [27]. Pas de prix lus. Boutique en ligne séparée (Shopify). |
| — | Sylvan's Jewelers | Columbia | https://sylvans.com/ | https://sylvans.com/collections/engagement-rings | non déterminé | **bloqué** : robots.txt interdit ClaudeBot, anthropic-ai, Claude-Web (`Disallow: /`) | [V, index] Maison familiale (cinq générations), marque propre « 1893 Bridal », page « Custom Ring Design » (CAO ou cire). Non lu. |
| — | Christopher's Fine Jewelry | Pawleys Island | https://christophersfinejewelry.com/ | https://christophersfinejewelry.com/collections/lab-grown-diamond-engagement-rings | non déterminé | **bloqué** : même interdiction des agents Claude | [V, index] Collection de bagues en diamant synthétique. Non lu. |
| — | Croghan's Jewel Box | Charleston | https://www.croghansjewelbox.com/ | non déterminée | non déterminé | **bloqué** : robots.txt servi derrière Cloudflare (« Just a moment... », HTTP 403) | [S] Joaillier historique de King Street. Aucune page ouverte. |
| — | Skatell's Manufacturing Jewelers | Mount Pleasant et Charleston | https://www.skatells.com/ | https://www.skatells.com/catalog/engagement-ring/ | non déterminé | **bloqué** (partiel) : catalogue redirigé vers `/verify.html` ; non contourné | [V] Fabricant depuis 1988, page d'accueil lisible [31] ; [V, index] page « Design Your Own Ring • Computer Aided Designs • 3D Modeling » (formulaire de contact, pas d'outil en ligne). |

Écartés : Venazia (pages par ville « United States > South Carolina > … », [I] vendeur en ligne national, non lu) ; Embler's (Mount Pleasant), Symbols Jewelers et Jacob the Jeweler (Myrtle Beach), Score's (Anderson), Traditions (Lexington), B&D Family Jewelers (Spartanburg), Cash for Gold Direct (Summerville) : [V, index] sur mesure sur rendez-vous ou catalogue de marques sans constructeur ni parcours en ligne mis en avant.

## Fiches

### 1. Floyd & Green Fine Jewelers (Aiken)

- [V] 515 Silver Bluff Road, Aiken, SC 29803 ; « Buy online, give us a call or text, or stop by » [11].
- [V] Parcours « Design Your Own Ring » : choix « Natural Diamond » ou « Lab Grown Diamond », encart « Your Selected Settings » ; liste de pierres chargée par script, non actionnée [11].
- [V] 124 montures ; première page de 750 à 1 300 $ [14].
- [V] Sur mesure en 3 étapes : photo ou bijou apporté, puis « an online sketch and an online 3-D model to confirm your design », puis fabrication ; 6 à 8 semaines [12].
- [V] « Perfect Love Custom » : images de chaque étape « from initial sketches to the final creation » ; « We photograph the custom creation process—from wax to setting » ; livre-souvenir numérique et relié [13]. [I] Pas de vidéo, pas de diffusion en cours de fabrication : les images sont remises à la fin.
- [V] robots.txt : section « AI crawlers - explicitly allowed » (ClaudeBot, Claude-SearchBot, Claude-User) [11, robots].

### 2. Charleston Rings (Charleston)

- [V] 111 E Bay St, Charleston, SC 29401 [V, index] ; téléphone et mention « Truly Custom® Lab Grown Diamond Engagement Rings » au pied de page [3].
- [V] La page 3D citée par l'index répond 404 [4] ; les liens « Design Your Ring » et « Start Designing » mènent à `/pages/truly-custom-rings` [2][3].
- [V] FAQ : « No deposit is required to begin the design process » ; « custom engagement rings start at $3,000 » ; « 4-5 weeks » après validation de la CAO et de la pierre ; « Satisfaction Guarantee » sous 14 jours ; garantie d'un an sur les petites pierres [3].
- [V] Catalogue : « 522 products », filtre « Lab Grown Diamond (522) », 10 formes dont « Marquise (50) » [5]. Fiche « Marquise Crush » (alliance) : 1 900 $, 14 k jaune, blanc, rose, platine [6].
- [I] Positionnement le plus proche de l'offre synthétique de JR Diamond : prix « à partir de » sur chaque modèle, CAO gratuite, paiement après validation.

### 3. Skatell's Jewelers (Spartanburg)

- [V] Page « Design Your Ring » : charge `jeweleros.com/static/dist/jos.js` et `partner_config.js` (`data-org-id="9pGXewqmwP2Z"`) ; contenu chargé par script, non actionné [7].
- [V] Menu « Diamond & Lab Grown Search » ; liens vers `apps/ring-creator/rb-stone-list?diamond_type=…` [7][8].
- [V] « 1242 results » en fiançailles ; prix de 620 à 6 400 $ (solitaire marquise 3/4 ct, 14 k jaune) en première page [8].
- [V, index] Sur mesure : « detailed CAD rendering and wax mold », fabrication « in approximately two weeks » [9].

### 4. Hitched, salle de Charleston

- [V] Page locale lue [10]. Audit complet du constructeur : `docs/concurrence/audit/us/illinois/hitched.md` (15/11/2026).

### 5 à 10

- Trails on Falls : 320 Falls Street Suite D, Greenville, SC 29601 [20] ; page du constructeur réduite à l'enveloppe GemFind en HTML [21].
- Gold Creations : Charleston, SC 29401 ; « family-owned Charleston jewelry store since 1975 » [18].
- Sabyl's : 1200 Woodruff Rd., Suite A-3, Greenville, SC 29607 ; sur rendez-vous [15].
- Moseley : adresses à Lexington (SC 29072) et Chapin (SC 29036) [31b].
- Hale's : 761 Verdae Blvd, Greenville, SC 29607 [22].
- llyn strong : 1322 East Washington St, Suite C1, Greenville, SC 29607 [27].

## Sources (lues le 25/11/2026)

1. https://charlestonrings.com/robots.txt (outil de contrôle : AUTORISÉ ; aucun groupe visant les agents d'IA)
2. https://charlestonrings.com/
3. https://charlestonrings.com/pages/truly-custom-rings
4. https://charlestonrings.com/pages/custom-engagement-rings (HTTP 404)
5. https://charlestonrings.com/collections/engagement-rings-all
6. https://charlestonrings.com/products/marquise-crush
7. https://skatellsjewelers.com/ et https://skatellsjewelers.com/pages/design-your-ring
8. https://skatellsjewelers.com/collections/jewelry-engagement-engagement-rings et https://skatellsjewelers.com/apps/ring-creator/rb-stone-list?diamond_type=labgrown
9. https://skatellsjewelers.com/pages/custom-design [V, index]
10. https://tryhitched.com/pages/engagement-rings-charleston
11. https://www.floydandgreen.com/design-your-own-ring/choose-your-diamond (et https://www.floydandgreen.com/robots.txt)
12. https://www.floydandgreen.com/page/about-custom-design.html
13. https://www.floydandgreen.com/page/perfect-love-custom.html
14. https://www.floydandgreen.com/get-engaged/engagement-ring-settings
15. https://sabyls.com/
16. https://sabyls.com/custom-engagement-rings-greenville-sc [V, index]
17. https://sabyls.com/engagement-rings/ et https://sabyls.com/customize-your-wedding-band/ (cadres `sabyls-frame-categoryembed*.jewelershowcase.com` : INTERDIT, non ouverts)
18. https://www.goldcreationschas.com/gifts/engagement-rings/
19. https://www.goldcreationschas.com/custom-designs/
20. https://www.trailsonfalls.com/ (robots.txt : `Crawl-delay: 30`)
21. https://www.trailsonfalls.com/ringbuilder/settings/
22. https://www.halesjewelers.com/collections/engagement-rings
23. https://sylvans.com/robots.txt (groupes ClaudeBot, anthropic-ai, Claude-Web : `Disallow: /`)
24. https://christophersfinejewelry.com/robots.txt (mêmes groupes)
25. https://www.croghansjewelbox.com/robots.txt (HTTP 403, page Cloudflare)
26. https://www.skatells.com/catalog/engagement-ring/ (redirigé vers `/verify.html`)
27. https://llynstrong.com/custom/
28. https://www.moseleydiamond.com/custom-design
29. https://www.moseleydiamond.com/ (lien `/benchmark-ring-lab`)
30. https://www.moseleydiamond.com/ringsettings
31. https://www.skatells.com/ (page d'accueil lisible ; robots.txt autorise ClaudeBot) ; 31b : https://www.moseleydiamond.com/ (adresses)
32. Recherche Parallel Search, requêtes génériques (« Charleston SC custom engagement ring jeweler », « Greenville SC jeweler ring builder », « Columbia SC jeweler design your own ring », « Myrtle Beach jeweler custom engagement rings », « SC jeweler 3D ring designer online », etc.) : extraits marqués [V, index].
