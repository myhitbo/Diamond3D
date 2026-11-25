# Inventaire des joailliers : New Jersey

Recensement du 24 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun
formulaire rempli ni envoyé, aucun compte créé, aucun article mis au panier, aucun chat ni WhatsApp ouvert, au plus une page toutes les 2 secondes par site.

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié), **[sec.]** lu sur une source secondaire
(extrait de moteur de recherche). Prix en dollars américains, tels qu'affichés le 24/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques, sans mention de JR Diamond), puis **curl tel quel** (identité par défaut, sans en-tête de navigateur) pour toutes les
pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (JewelerOS, GemFind, VDB) n'ont pas été actionnés ; ce qu'on en dit vient du texte des
pages, des données intégrées au HTML et, pour deux boutiques Shopify, du fichier public `/products/<nom>.js` (variantes et prix), non interdit par leur robots.txt.

## Constat général

- [V] **Le configurateur 3D en marque blanche JewelerOS domine** : six joailliers du New Jersey chargent `jeweleros.com/static/dist/partner_config.js` (ou `jos.js`) avec un
  identifiant propre : Yanina & Co. (`9oeFbBpbdCE0`), Venus (`9YqM7cC37tX6`), Henry's (`9pGwMPMAAEVK`), Casale (`9eC9kylEVEpL`), Salermo (`9mYywO0Pli8E`), Diamond Hut
  (`9eaDwena8nLO`) ; Diamonds by Dawn publie la même page d'accueil JewelerOS (images `jeweleros-seo-page/…`). Toutes reprennent le même texte : « Design your ring online in
  stunning 3D », choix de la pierre en boutique, bague prête « in just a couple of weeks ». C'est le même éditeur qu'en Alabama et au Tennessee. [I] La 3D est un modèle
  paramétrique générique, pas le fichier de fabrication de l'atelier : la différence que revendique JR Diamond reste entière.
- [V] **Deux constructeurs « monture puis pierre » sur des montures maison** : Hamilton Jewelers (Princeton, depuis 1912) et Billig Jewelers (Marlton). Hamilton affiche
  33 montures maison « Starting at » de 795 à 8 150 $, en 18 k trois couleurs et platine, construites « in our own workshop ». Billig affiche le **prix complet de la bague avec
  pierre synthétique incluse** : 2 250 $ pour 1 ct en or 14 k, puis 500 $ par demi-carat jusqu'à 4 ct (5 250 $), platine + 250 $. C'est le barème le plus lisible vu dans l'État.
- [V] Le diamant synthétique est partout : recherche de pierres synthétiques en ligne chez Venus, Yanina, Casale et Salermo ; catalogue en ligne 100 % synthétique chez
  Prestige Diamonds (Paramus) ; bagues synthétiques chiffrées chez Billig et Braunschweiger.
- [V] Le parcours de fabrication montré se limite à des étapes décrites : croquis, rendu CAO, maquette imprimée ou cire, fonte (Casale, Corinne, Prestige, Astra, Francis J.).
  Astra (Montclair) va le plus loin dans le discours : rendu 3D, puis maquette imprimée portée au doigt, puis prix exact approuvé avant la fonte. [I] Personne ne montre la
  pierre réelle filmée ni la bague en cours de fabrication sur le site.
- [V] Délais affichés : « a couple of weeks » (modèle JewelerOS), 2 à 3 semaines (Casale), 2 à 4 semaines (Billig), 3 à 5 puis 6 à 8 semaines (Prestige), 4 à 8 semaines
  (Corinne, Francis J.). JR Diamond : 14 jours ouvrés.
- [V] Blocages : aucun captcha ni 403 sur les sites classés. Casale et Astra autorisent explicitement ClaudeBot dans leur robots.txt. Berman Jewelers (Cherry Hill) répond
  **503** sur l'accueil et la page des bagues de fiançailles : marqué « bloqué », pas de nouvel essai. Spivak (Cherry Hill) demande `Crawl-delay: 10` : non lu au-delà du
  robots.txt.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hamilton Jewelers | Princeton (et Palm Beach, FL) | https://hamiltonjewelers.com/ | https://hamiltonjewelers.com/pages/design-your-ring (constructeur : `/apps/ring-creator/rb-setting-details?ring_stock_num=…`) | oui (3 étapes : monture, pierre, bague ; widget VDB) | non (Shopify, robots.txt standard) | [V] Montures maison faites « in our own workshop » : 33 montures chiffrées de 795 à 8 150 $ ; 18 k blanc, jaune, rose et platine (les métaux de JR Diamond, sans le 14 k) ; 10 formes dont la marquise ; texture du corps et finition (poli, satiné) ; sur mesure « sketch, 3D render, cast in our workshop ». Maison régionale depuis 1912. [I] Synthétique non proposé dans les pages lues (le mot n'apparaît que dans les libellés génériques du widget). |
| 2 | Billig Jewelers | Marlton (près de Cherry Hill) | https://billigjewelers.com/ | https://billigjewelers.com/collections/engagement-ring-settings | oui (monture puis pierre, plus questionnaire « Start Your Custom Ring » en 7 étapes) | non (Shopify) | [V] Prix complet affiché, pierre synthétique comprise : bague « Aria » 2 250 $ (1 ct, or 14 k) à 5 250 $ (4 ct), +500 $ par 0,5 ct, platine +250 $ ; bouton « Add To Cart » ; or 14 et 18 k trois couleurs et platine annoncés ; marquise ; montures « from $1,250 » ; sur mesure en 2 à 4 semaines ; montage et contrôle en atelier. Le meilleur repère de prix expliqué de l'État. |
| 3 | Venus Jewelers | Somerset | https://www.venusjewelers.com/ | https://www.venusjewelers.com/pages/custom-ring-builder/ | oui (3D JewelerOS) | non (Crawl-delay 2, respecté) | [V] 3D JewelerOS + recherche de diamants naturels et synthétiques (`/diamonds?labGrown=…`) + panier « My Bag » ; famille de joailliers depuis 1972, gemmologue GIA qui fait de la pédagogie sur Instagram ; guide synthétique ou naturel. [I] Prix de la 3D et des pierres chargés par script, non lus. |
| 4 | Henry's Fine Jewelry | Summit, Basking Ridge | https://henrysfinejewelry.com/ | https://henrysfinejewelry.com/pages/design-your-ring | oui (3D JewelerOS) | non (Shopify) | [V] « Choose the setting, pick the diamond, and watch your ring come together in 3D », puis fabrication « at our bench, right here in New Jersey » ; boutique en ligne chiffrée (bagues de fiançailles de 1 166 à 1 830 $ en première page) ; famille depuis 1989. Le discours « 3D en ligne + établi local » le plus proche de JR Diamond. |
| 5 | Casale Jewelers | Red Bank (studio sur rendez-vous ; maison mère à Staten Island, NY) | https://www.casalejewelers.net/ | https://www.casalejewelers.net/custom-ring-builder/ | oui (3D JewelerOS) | non (ClaudeBot autorisé explicitement) | [V] 3D JewelerOS + recherche de diamants naturels et synthétiques (`/diamonds/`) ; chiffres publiés : bague sur mesure moyenne 3 000–7 000 $, alliance 1 000–4 000 $, délai 2–3 semaines ; croquis, rendus 3D, maquette avant fabrication ; garantie de prix (« we will beat any advertised price »). |
| 6 | Yanina & Co. | Cedar Grove | https://yanina-co.com/ | https://yanina-co.com/pages/design-your-ring | oui (3D JewelerOS) | non (Shopify) | [V] 3D JewelerOS + « Lab Diamond Search » ; création, réparation et expertise sur place ; transformation de bijoux (« reset & redesign ») ; depuis 1987. |
| 7 | Thomas Jewelers | Totowa | https://www.thomasjewelersnj.com/ | https://www.thomasjewelersnj.com/collections/engagemen-rings-gf | non (fiche à options, plus parcours sur mesure en 4 étapes) | non (Shopify) | [V] Semi-montures chiffrées par option : pierres d'accompagnement synthétiques F-VS1 ou naturelles G-SI1, 10 formes dont marquise, or 14 k et 18 k trois couleurs et platine ; ex. ERSM0035 : 745 $ (14 k, synthétique) à 1 160 $ (18 k, naturel) ; « Add To Cart » ; rendu numérique validé avant fabrication ; livraison assurée offerte dès 1 000 $, retours 30 jours. La grille métal × pierre la plus proche de celle de JR Diamond. |
| 8 | Salermo Jewelers | Elizabeth | https://www.salermojewelers.com/ | https://www.salermojewelers.com/pages/design-your-ring (3D) ; https://www.salermojewelers.com/apps/ringbuilder/settings/ (monture puis pierre, GemFind) | oui (3D JewelerOS + constructeur GemFind) | non (Shopify) | [V] Deux outils : 3D JewelerOS et « Build Your Own Ring » GemFind ; recherche de diamants naturels, synthétiques et de couleur ; importateur direct de bijoux européens ; depuis 1969. |
| 9 | Corinne Jewelers | Toms River | https://www.corinnejewelers.com/ | https://www.corinnejewelers.com/collections/engagement-rings | non | non (Shopify) | [V] 87 montures A.Jaffe et Gabriel & Co. chiffrées sans pierre centrale (1 075 à 5 100 $ dans les données de la première page) ; pierres naturelles et synthétiques côte à côte ; sertissage « in-house, never sent out » ; sur mesure avec rendu 3D validé, 4 à 8 semaines ; reprise du diamant naturel à vie. |
| 10 | Prestige Diamonds | Paramus | https://prestigediamondsnj.com/ | https://prestigediamondsnj.com/services/custom-jewelry-design | non | non | [V] Catalogue en ligne entièrement synthétique, chaque fiche étiquetée (« Every diamond online is lab-grown and named that way ») ; bague 1,12 ct à 899,99–1 499,99 $ avec « Add to Cart », retours 30 jours ; sur mesure en 4 temps (consultation, croquis et CAO, fonte et sertissage, essayage), 3–5 semaines ou 6–8 semaines ; prix du sur mesure seulement sur rendez-vous. |

## Fiches

### 1. Hamilton Jewelers (Princeton)

- [V] « Hand-selected diamonds, settings made in our own workshop » ; collections maison Cherish, Embrace, Centennial, Silhouette, 1912 ; platine et or 18 k blanc, jaune et
  rose ; sur mesure « From a sketch to a 3D render to a finished ring cast in our workshop » ; salles à Princeton et à Palm Beach. Source :
  https://hamiltonjewelers.com/pages/engagement-rings
- [V] Page « Design Your Ring » : 33 montures avec « Starting at », de 795 $ (Hamilton Select Solitaire) à 8 150 $. Source : https://hamiltonjewelers.com/pages/design-your-ring
- [V] Constructeur, fiche « Hamilton Solitaire 4-Prong » : étapes « Choose Setting », « Choose Stone », « Complete Ring » ; métal 18 K blanc, jaune, rose, platine ; formes
  ronde, asscher, marquise, émeraude, coussin, poire, cœur, princesse, ovale, radiant ; tailles US 3 à 11,5 et plus ; corps « Evergreen Textured » ou lisse ; finition polie ou
  satinée ; prix de la monture chargé par script. Source :
  https://hamiltonjewelers.com/apps/ring-creator/rb-setting-details?ring_stock_num=DMT180990_Rou
- [I] Le widget porte les marques `vdb`/`Ringbuilder` : outil tiers (VDB), images photographiques, pas de 3D temps réel.

### 2. Billig Jewelers (Marlton)

- [V] 330 Route 73 South, Marlton ; famille depuis plus de 40 ans ; questionnaire « STEP 1 OF 7 … STEP 7 OF 7 » ; « Most custom and made-to-order rings take about 2–4 weeks ».
  Source : https://billigjewelers.com/
- [V] Collection des montures : « Select your setting first, then pair it with the ideal diamond », « select a certified diamond (natural or lab-grown) », « Prices starting
  from $1,250 for the setting », « Every ring is assembled and inspected by our in-house team ». Source : https://billigjewelers.com/collections/engagement-ring-settings
- [V] Fiche « Aria » : « Center Stone: Lab-grown diamond included », « Available Metals: 14kt and 18kt Gold in White, Yellow, or Rose, and Platinum », largeur 1,85 mm.
  Variantes (fichier public de la fiche) : poire, or jaune ou blanc 14 k, 1 ct 2 250 $, 1,5 ct 2 750 $, 2 ct 3 250 $… 4 ct 5 250 $ ; platine 2 500 $ à 5 500 $. Sources :
  https://billigjewelers.com/products/aria-engagement-ring et https://billigjewelers.com/products/aria-engagement-ring.js
- [I] Le barème linéaire (+500 $ par demi-carat) suggère un prix forfaitaire de la pierre synthétique, sans détail par qualité.

### 3. Venus Jewelers (Somerset)

- [V] 940 Easton Avenue Suite 11B, Somerset, NJ 08873 ; « 5th generation family jewelry business, proudly serving customers since 1972 » ; gemmologue GIA. Sources :
  https://www.venusjewelers.com/ et https://www.venusjewelers.com/pages/custom-engagement-rings
- [V] Outil 3D JewelerOS (`org-id 9YqM7cC37tX6`), non actionné. Source : https://www.venusjewelers.com/pages/custom-ring-builder/
- [V] Recherche de diamants synthétiques (« Search for Lab Grown Diamonds », filtres de carat ; résultats chargés par script). Source :
  https://www.venusjewelers.com/diamonds?labGrown=1

### 4. Henry's Fine Jewelry (Summit, Basking Ridge)

- [V] « Start the ring tonight. Finish it with us. » ; « watch your ring come together in 3D… building it at our bench, right here in New Jersey » ; « Family-owned since 1989 ».
  Source : https://henrysfinejewelry.com/
- [V] Outil 3D JewelerOS (`data-org-id="9pGwMPMAAEVK"`). Source : https://henrysfinejewelry.com/pages/design-your-ring
- [V] Bagues de fiançailles en ligne, prix de 1 166 à 1 830 $ en première page, mention « Sold, Available As Special Order ». Source :
  https://henrysfinejewelry.com/collections/engagement-rings

### 5. Casale Jewelers (Red Bank)

- [V] Studio de Red Bank : 157 Broad Street, Suite 203, sur rendez-vous ; maison mère au 1639 Richmond Road, Staten Island (NY) ; famille depuis 1986 ; « Average Custom
  Engagement Ring: $3,000–$7,000 », « Design Timeline: 2-3 weeks » ; « sketches, 3D renderings, wax models ». Source : https://www.casalejewelers.net/company/about-us [sec.]
  (extrait de recherche) et https://www.casalejewelers.net/ [V]
- [V] Outil 3D JewelerOS (`data-org-id="9eC9kylEVEpL"`) ; liens vers la recherche de diamants (`/diamonds/`) et de diamants synthétiques. Sources :
  https://www.casalejewelers.net/custom-ring-builder/ et https://www.casalejewelers.net/custom-engagement-rings/
- [I] Acteur à cheval sur New York et le New Jersey ; retenu pour son studio de Red Bank.

### 6. Yanina & Co. (Cedar Grove)

- [V] 451-455 Pompton Ave., Cedar Grove, NJ 07009 ; depuis 1987 ; « on-site design, repair, and appraisal » ; outil 3D JewelerOS (`data-org-id="9oeFbBpbdCE0"`) ; « LAB
  DIAMOND SEARCH » au menu. Sources : https://yanina-co.com/pages/custom-engagement-rings, https://yanina-co.com/pages/design-your-ring, https://yanina-co.com/

### 7. Thomas Jewelers (Totowa)

- [V] « Family Owned & Operated since 1992 » ; parcours « Custom Engagement Rings — By You, For You » : pierre, monture, « personalized digital rendering », remise ; livraison
  assurée offerte au-delà de 1 000 $, retours 30 jours ; diamants GIA. Source : https://www.thomasjewelersnj.com/
- [V] Collection : 18 prix en première page, de 380 à 1 810 $. Source : https://www.thomasjewelersnj.com/collections/engagemen-rings-gf
- [V] Fiche ERSM0035-1.00RB, type « Semi-Mount » : options « Diamond Type » (Lab Grown F-VS1 / Natural G-SI1), « Shape » (10 formes dont marquise), « Metal Type » (14 k et 18 k
  blanc, rose, jaune, platine), 140 variantes de 745 à 1 160 $ ; « Every piece is finished to your chosen center stone, metal, and size… prepare a personal quote ». Sources :
  https://www.thomasjewelersnj.com/products/35 et https://www.thomasjewelersnj.com/products/35.js
- [I] « Diamond Type » porte sur les pierres d'accompagnement ; la pierre centrale fait l'objet d'un devis.

### 8. Salermo Jewelers (Elizabeth)

- [V] 955 Elizabeth Ave, Elizabeth, NJ 07201 ; famille depuis 1969, « direct European jewelry importers » ; outil 3D JewelerOS (`data-org-id="9mYywO0Pli8E"`). Sources :
  https://www.salermojewelers.com/pages/custom-engagement-rings et https://www.salermojewelers.com/pages/design-your-ring
- [V] Constructeur GemFind : recherche de diamants naturels, synthétiques et de couleur, filtres de prix. Source : https://www.salermojewelers.com/apps/ringbuilder/settings/

### 9. Corinne Jewelers (Toms River)

- [V] 917 North Main Street, Toms River, NJ 08753 ; depuis 1964 ; « Most rings are shown as settings — priced without the center stone » ; « Our in-house jeweler sets your
  diamond… never sent out ». Source : https://www.corinnejewelers.com/collections/engagement-rings (le total de 87 produits et les tranches de prix viennent de l'extrait de
  recherche [sec.] ; les prix de 1 075 à 5 100 $ des données de la page [V]).
- [V] Sur mesure : rendu 3D « from every angle » validé avant fabrication ; « Most custom pieces take 4 to 8 weeks ». Source :
  https://www.corinnejewelers.com/pages/custom-jewelry-design

### 10. Prestige Diamonds (Paramus)

- [V] Booth 32, The Jewelry Center, 327 E State Route 4, Paramus, NJ 07652 ; depuis 1989 ; sur mesure en 4 étapes ; « Typically three to five weeks… six to eight weeks for a
  complex design » ; prix du sur mesure : « Call us… or book a consultation ». Source : https://prestigediamondsnj.com/services/custom-jewelry-design
- [V] Fiche « 1.12ct TW Lab-Grown Diamond Ring » : 14 k, E VS1, 899,99 à 1 499,99 $, « Add to Cart », expédition sous 1 à 3 jours ouvrés, retours 30 jours. Source :
  https://prestigediamondsnj.com/products/1-12ct-lab-grown-diamond-ring
- [sec.] « the pieces you can buy online are lab-grown, and labeled that way » (extrait de recherche de https://prestigediamondsnj.com/).

## Vus mais non classés

- **Astra Jewelers** (250 Bellevue Ave, 2e étage, Montclair) : [V] studio privé ; rendu 3D, puis maquette imprimée en résine ou en cire portée au doigt, puis « approve the
  exact price before anything is cast » ; naturel et synthétique montrés côte à côte en lumière du jour ; bouton WhatsApp ; ClaudeBot autorisé. Pas de vente ni de prix en
  ligne, d'où l'exclusion ; c'est pourtant le discours de fabrication le plus proche de « l'atelier en direct ». Sources : https://astrajewelers.com/custom-jewelry,
  https://astrajewelers.com/engagement-rings
- **Diamond Hut Jewelers** (Hudson Mall et Newport Centre, Jersey City) : [V] 3D JewelerOS (`9eaDwena8nLO`), bijoux synthétiques chiffrés (425 à 936 $). Même outil que les
  rangs 3 à 8. Source : https://www.diamondhut.com/pages/custom-ring-builder
- **Diamonds by Dawn** (Riverdale) : [V] page d'accueil JewelerOS et page « Custom Ring Builder » (script non trouvé dans le HTML statique). Source :
  https://www.diamondsbydawn.com/pages/custom-ring-builder/
- **Braunschweiger Jewelers** (33 South Street, Morristown ; New Providence) : [V] Shopify, 127 articles de mariage, prix de 150 à 8 239 $ en première page, bagues
  synthétiques de 1 à 3 ct. Pas de configurateur de bague de fiançailles (page « eternity-designer » pour les alliances, non lue). Source :
  https://braunschweiger.com/collections/bridal-designers
- **Jewelry by Allen Joseph** (Mahwah) : [V] sur mesure en 4 étapes, rendu CAO validé, naturel et synthétique ; ni prix ni outil en ligne. Source :
  https://jewelrybyallenjoseph.com/custom-engagement-rings
- **Velvet Box Jewels** (Teaneck) : [V] bagues synthétiques IGI « from $1,500 » à 7 000 $, beaucoup épuisées. Source : https://velvetboxnj.com/collections/lab-grown-engagement-rings
- **JewelWeSell** (« New Jersey · Est. 1982 ») : [V] vente directe en ligne (synthétique, naturel, moissanite), rendu CAO gratuit ; aucune adresse postale lue sur l'accueil
  [I], d'où l'exclusion. Source : https://jewelwesell.com/
- **Jewelry Design Gallery** (357 State Route 9 South, Manalapan) : [V] « CAD/CAM » en atelier, rubrique synthétique, panier WooCommerce ; non approfondi. Source :
  https://jewelrydesigngallery.com/
- **Francis J. Jewelers** (Woodbury Heights) : [sec.] CAO, prototype imprimé, 4 à 8 semaines ; site ancien (`.asp`), non lu.
- **Hoboken Gold & Diamonds** (Hoboken) : [sec.] bagues « manufactured on site since 1978 » ; non lu.

## Écartés et bloqués

- **Berman Jewelers** (Cherry Hill) : [V] HTTP 503 sur https://bermanjewelers.com/ et https://bermanjewelers.com/engagement-rings. Marqué **bloqué** ; pas de nouvel essai.
  L'extrait de recherche [sec.] mentionne un menu « Build Your Own » et un sélecteur de diamants.
- **Spivak Jewelers** (Cherry Hill) : robots.txt `Crawl-delay: 10` ; page « Build Your Own Engagement Ring » décrite par l'extrait de recherche [sec.] comme un parcours en
  boutique, sans outil en ligne. Non lu.
- **Haejin Jewelry** : studio de Brooklyn (NY) qui cible le comté de Bergen ; hors territoire.

## Méthode et incidents

- Requêtes génériques uniquement (« New Jersey jeweler custom engagement ring builder », etc.), 4 appels de recherche.
- robots.txt lu pour les 20 domaines consultés avant toute page ; les chemins interdits (`/cart`, `/checkout`, `/account`, filtres) n'ont pas été appelés.
- Une page par site au plus toutes les 2 secondes (requêtes parallèles seulement entre sites différents).
- Une requête mal formée vers un hôte inexistant (`www.thomasjewelersnj.com.js`) a échoué côté proxy ; corrigée, sans incidence sur le site.

## Sources

- Recherche : Parallel Search, identifiants `search_6f7a2f19d468317b2017f993b8835438`, `search_79d5597e37b11cc6b3df7c913fba587d`, `search_84fbced0cadcb2f7a50cabd0c55eb445`,
  `search_7093a5fb745c3c5c544d71a232e91c71` (24/11/2026).
- Pages lues (curl, 24/11/2026) :
  - https://hamiltonjewelers.com/pages/engagement-rings · https://hamiltonjewelers.com/pages/design-your-ring ·
    https://hamiltonjewelers.com/apps/ring-creator/rb-setting-details?ring_stock_num=DMT180990_Rou
  - https://billigjewelers.com/ · https://billigjewelers.com/collections/engagement-ring-settings · https://billigjewelers.com/products/aria-engagement-ring(.js)
  - https://www.venusjewelers.com/ · https://www.venusjewelers.com/pages/custom-engagement-rings · https://www.venusjewelers.com/pages/custom-ring-builder/ ·
    https://www.venusjewelers.com/diamonds?labGrown=1
  - https://henrysfinejewelry.com/ · https://henrysfinejewelry.com/pages/design-your-ring · https://henrysfinejewelry.com/collections/engagement-rings
  - https://www.casalejewelers.net/ · https://www.casalejewelers.net/custom-engagement-rings/ · https://www.casalejewelers.net/custom-ring-builder/
  - https://yanina-co.com/ · https://yanina-co.com/pages/custom-engagement-rings · https://yanina-co.com/pages/design-your-ring
  - https://www.thomasjewelersnj.com/ · https://www.thomasjewelersnj.com/collections/engagemen-rings-gf · https://www.thomasjewelersnj.com/products/35(.js)
  - https://www.salermojewelers.com/pages/custom-engagement-rings · https://www.salermojewelers.com/pages/design-your-ring ·
    https://www.salermojewelers.com/apps/ringbuilder/settings/
  - https://www.corinnejewelers.com/collections/engagement-rings · https://www.corinnejewelers.com/pages/custom-jewelry-design
  - https://prestigediamondsnj.com/services/custom-jewelry-design · https://prestigediamondsnj.com/products/1-12ct-lab-grown-diamond-ring
  - https://astrajewelers.com/ · https://astrajewelers.com/engagement-rings · https://astrajewelers.com/custom-jewelry
  - https://www.diamondhut.com/pages/custom-engagement-rings · https://www.diamondhut.com/pages/custom-ring-builder
  - https://www.diamondsbydawn.com/pages/custom-engagement-rings · https://www.diamondsbydawn.com/pages/custom-ring-builder/
  - https://braunschweiger.com/ · https://braunschweiger.com/collections/bridal-designers
  - https://jewelrybyallenjoseph.com/ · https://jewelrybyallenjoseph.com/custom-engagement-rings
  - https://velvetboxnj.com/collections/lab-grown-engagement-rings · https://jewelwesell.com/ · https://jewelrydesigngallery.com/
  - https://bermanjewelers.com/ (503) · https://bermanjewelers.com/engagement-rings (503)
- robots.txt lus : les 20 domaines ci-dessus, plus https://spivakjewelers.com/robots.txt.
