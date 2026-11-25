# Inventaire des joailliers : North Carolina

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ni SMS ouvert, au plus une page toutes les 3 secondes par site (31 secondes chez Windsor Jewelers, dont le robots.txt fixe un `Crawl-delay: 30`).

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés ou d'un extrait d'index de recherche), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 25/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques sur les joailliers de Caroline du Nord, extraits de résultats), puis **curl tel quel** (identité par défaut, sans changement d'en-tête) pour les robots.txt et les pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (JewelerOS, listes Punchmark, application « Diamond Bar » de Spicer Greene) n'ont pas été actionnés ; ce qu'on en dit vient du texte des pages et du code servi, marqué [I] quand c'est une déduction.

## Constat général

- [V] **Le configurateur 3D en marque blanche JewelerOS domine** : Malak Jewelers (Charlotte, identifiant de partenaire `9fE4BEy7ek1U`) et J. Garett Jewelers (Wilmington, `9dWakxy1X8tE`) chargent `jeweleros.com/static/dist/jos.js` sur leur page `custom-ring-builder`. Leurs pages d'accueil du sur-mesure reprennent mot pour mot le même texte : « Design your ring online in stunning 3D », pierre choisie en salle d'exposition, bague prête « in just a couple of weeks ». Simon Jewelers (High Point) publie le même texte et les mêmes images (`jeweleros-seo-page/…`) ; [I] même outil, mais le script n'apparaît pas dans le code statique lu. [I] Ce sont les mêmes clients StoneAlgo/JewelerOS qu'en Alabama et au Tennessee : modèle paramétrique générique, pas le fichier de fabrication de l'atelier.
- [V] **Un seul joaillier montre la fabrication en direct** : J. Garett Jewelers (Wilmington) écrit que chaque pièce sur mesure est « designed, cast and finished by hand » dans son atelier sur place et que « we share photos and videos along the way so you can watch your dream piece come to life ». C'est la promesse « on voit naître son bijou » de JR Diamond, faite par un petit joaillier local, sans prix affiché.
- [V] **Hourglass Diamonds** (Charlotte, joaillier privé sans boutique) a développé une « Ring Studio » propre : 15 modèles maison, 3 métaux (rose, blanc, jaune), 4 angles, mode vidéo ou images fixes. [I] Ce sont des vidéos et images pré-rendues (balises `<video>` et dossier `/ring-studio/ring-assets`), pas un moteur 3D ; aucun prix.
- [V] **Prix affichés** chez Spicer Greene (Asheville : 209 bagues de fiançailles, 116 montures, la plupart de 1 029 à 2 900 $ en première page), Jewelsmith (Durham : 33 bagues, 3 290 à 22 525 $ en première page ; fourchette annoncée « approximately $3,000 to $30,000+ »), Rustic and Main (Huntersville : 133 bagues, 1 740 à 4 670 $ dans les premières données de la page), Windsor Jewelers (854 bagues avec filtre de prix), Brummitt (Raleigh : trois créations sur mesure de 2 500 à 13 900 $). Malak masque ses prix (« reach out for current pricing »).
- [V] Le synthétique est partout : entrée « Lab Grown Diamonds » chez Malak, Raleigh Diamond (`/ringsettings-diamonds?labGrown=1`), Windsor ; Jewelsmith et Hourglass le proposent en sur mesure ; Rustic and Main met en avant moissanite et diamant synthétique.
- [V] Délais publiés : « a couple of weeks » (JewelerOS : Malak, J. Garett, Simon), 6 à 8 semaines (Jewelsmith, Rustic and Main). JR Diamond : 14 jours ouvrés.
- [I, extrait de recherche] Vanscoy Diamonds (Greensboro) se présente comme « Direct Diamond Importers: Antwerp, Belgium, Tel Aviv & Israel » : l'origine israélienne est déjà un argument local, comme Marquirette's en Alabama.
- [V] **Blocages** : Diamonds Direct (siège à Charlotte) et Vanscoy Diamonds renvoient à curl une page Cloudflare « Just a moment… Enable JavaScript and cookies to continue » (code 403) sur toutes les pages demandées. Non contourné : pas de nouvel essai, pas de changement d'identité ; les faits les concernant viennent des extraits de recherche et sont marqués [I]. Windsor Jewelers impose `Crawl-delay: 30` et `Content-Signal: search=yes,ai-train=no,use=reference` (respectés : deux pages lues). Aucun robots.txt lu n'interdit ClaudeBot ni les pages citées.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | J. Garett Jewelers | Wilmington | https://www.jgarettjewelers.com/ | https://www.jgarettjewelers.com/pages/custom-ring-builder (3D) ; parcours monture + pierre : https://www.jgarettjewelers.com/ringsettings | oui (3D JewelerOS, plus constructeur Punchmark en 3 étapes) | non (robots.txt : `Crawl-delay: 2`, panier et compte interdits, non visités) | [V] Le plus proche de « l'atelier en direct » : fabrication sur place (« designed, cast and finished by hand »), photos et vidéos partagées pendant la fabrication, 3D en ligne, quatre générations de joailliers, bague prête « in just a couple of weeks ». Pas de prix lisible sans JavaScript. |
| 2 | Malak Jewelers | Charlotte | https://malakjewelers.com/ | https://malakjewelers.com/pages/custom-ring-builder | oui (3D JewelerOS) | non (Shopify, robots.txt standard) | [V] Parcours en 3 temps (3D en ligne, pierre en salle, commande), même texte que J. Garett ; 358 bagues de fiançailles en ligne, diamants naturels, synthétiques et de couleur, joaillerie indienne ; fondé en 1980. Prix masqués : « reach out for current pricing ». |
| 3 | Spicer Greene Jewelers | Asheville, Hendersonville | https://spicergreene.com/ | https://spicergreene.com/pages/diamond-bar?ose=false#page/ring-builder-settings-mounts/ (montures) ; pierres : https://spicergreene.com/pages/diamond-bar?ose=false#page/ring-builder-diamonds/ | oui (« The Diamond Bar Ring Builder », monture ou pierre d'abord) | non (Shopify) ; outil en JavaScript non actionné | [V] Prix affichés : 209 bagues de fiançailles (12 595 à 41 950 $ pour les vedettes), 116 montures (montures maison « Diamond Bar » de 1 029 à 2 089 $, une monture à 2 900 $ en première page). Sur mesure en atelier : rendu CAO « from every angle » puis maquette en cire imprimée en 3D. Achat, vente et échange de diamants (« Diamond Bar »). |
| 4 | Hourglass Diamonds | Charlotte | https://www.hourglassdiamonds.com/ | https://www.hourglassdiamonds.com/ring-studio/ring-studio-embed.html | oui (« Ring Studio » maison : vidéos et vues fixes) | non | [V] Joaillier privé, sans boutique, gemmologue diplômé du GIA : 15 modèles maison en 3 métaux et 4 angles ; sur mesure en 4 temps (conversation, croquis et CAO, mise au point, fabrication) ; naturel et synthétique. [I] Visuels pré-rendus, pas de 3D temps réel. Aucun prix. |
| 5 | Simon Jewelers | High Point | https://www.simonjewelers.com/ | https://www.simonjewelers.com/pages/custom-ring-builder ; parcours Punchmark : https://www.simonjewelers.com/ringsettings | oui ([I] 3D JewelerOS ; constructeur Punchmark en 3 étapes vérifié) | non (`Crawl-delay: 2`) | [V] Même page JewelerOS que Malak et J. Garett ; constructeur d'alliances ; depuis 1988. Prix non lus (chargés en JavaScript). |
| 6 | Raleigh Diamond Fine Jewelry | Raleigh | https://www.raleighdiamond.com/ | https://www.raleighdiamond.com/ringsettings (synthétique : https://www.raleighdiamond.com/ringsettings-diamonds?labGrown=1) | oui (Punchmark « Ring Designer App » ; alliances : Benchmark en iframe) | non (`Crawl-delay: 2`) | [V] Entrées « Start with a Lab Grown Diamond » et « Start with a Natural Diamond » ; quatre postes de CAO en boutique ; 18 k jaune, 14 k blanc, rose, jaune, platine ; « Low Price Guarantee », reprise du diamant à 110 %. |
| 7 | Jewelsmith | Durham | https://jewelsmith.com/ | https://jewelsmith.com/pages/engagement-rings-made-with-love-for-your-love ; catalogue : https://jewelsmith.com/collections/engagement-rings | non | non (Shopify) | [V] Atelier de création : 33 bagues de fiançailles chiffrées (3 290 à 22 525 $ en première page), métaux recyclés, sur mesure en 6 à 8 semaines, « Neither option costs more just because it's custom », remontage de pierres de famille sans frais, synthétique sur demande, consultation à distance. |
| 8 | Rustic and Main | Huntersville | https://rusticandmain.com/ | https://rusticandmain.com/pages/custom-engagement-rings ; catalogue : https://rusticandmain.com/collections/unique-engagement-rings | non | non (Shopify) | [V] Marque en ligne avec atelier en Caroline du Nord : 133 bagues chiffrées, sur mesure « typically start around $2,500 », rendu par IA et modèle 3D avant fabrication, 6 à 8 semaines ; fabrication en atelier ou par des partenaires américains (le site le dit). Moissanite et synthétique. |
| 9 | Windsor Jewelers | Winston-Salem, Charlotte | https://www.windsor-jewelers.com/ | https://www.windsor-jewelers.com/engagement-rings ; sur mesure : https://www.windsor-jewelers.com/create-your-rings | non | partiel : `Crawl-delay: 30` et `ai-train=no` (respectés, 2 pages lues) | [V] 854 bagues de fiançailles avec filtres de métal (14 k quatre couleurs, 18 k blanc, platine), de forme (dont marquise) et de prix ; diamants naturels et synthétiques ; croquis et rendus 3D en boutique. Mention : « The prices on the website may differ from the actual sale price ». Détaillant Rolex. |
| 10 | Diamonds Direct | Charlotte (siège) ; 34 salles dans plusieurs États | https://diamondsdirect.com/ | https://diamondsdirect.com/3d-ring-studio | oui ([I] « Adorette by Diamonds Direct 3D Ring Studio », 4 étapes) | **oui** : défi Cloudflare (403) sur toutes les pages | [I, d'après les extraits de recherche] Studio 3D maison en 4 étapes (style, monture et métal, forme et carat, revue) ; prix affichés (monture 3 100 $ soldée 2 480 $) ; sur mesure CAO puis cire imprimée ; retours sous 30 jours. Siège à Charlotte (LinkedIn). [I] Quasi-chaîne nationale : à dédoublonner avec les vendeurs nationaux. Site non lu. |

### Hors classement

- **Vanscoy Diamonds** (Greensboro) — https://www.vanscoydiamonds.com/ — **bloqué** (défi Cloudflare, 403, sur l'accueil et deux pages). [I, extraits de recherche] « Design Your Own » en partant d'un diamant naturel, d'un diamant synthétique, d'une moissanite ou d'une monture ; « Handcrafted in North Carolina », fabrication sur place, importateur direct d'Anvers et d'Israël, retour sous 30 jours. Aurait sa place entre les rangs 5 et 7 si le site était lisible. Page de départ indexée (non lue) : https://www.vanscoydiamonds.com/page/engagement-rings.html
- **Brummitt Jewelry Design Studio** (Raleigh) — https://brummittjewelrystudio.com/pages/raleigh-nc-custom-engagement-rings — [V] lisible ; sur rendez-vous ; trois créations chiffrées (2 500 à 13 900 $, cette dernière soldée à 9 730 $). Pas de configurateur.
- **Bailey's Fine Jewelry** (Raleigh, Cary, Charlotte, Greenville, Rocky Mount) — https://baileybox.com/pages/custom-jewelry-design — [V] sur mesure en 4 temps (consultation, croquis ou CAO, choix de la pierre, fabrication), consultation à distance, kit d'essai à domicile ; aucun catalogue de bagues de fiançailles chiffré trouvé (`/collections/engagement-rings` renvoie 404).
- **Exclus** : Venazia (pages « Charlotte » et « Raleigh » sur venazia.com), [I] vendeur en ligne basé à Miami et Aventura (Floride) selon sa page « About » et LinkedIn, avec des pages par ville ; Reeds Jewelers (siège à Wilmington), [I] chaîne régionale de grande taille, plusieurs États.

## Fiches

### 1. J. Garett Jewelers (Wilmington)

- [V] 2 Ann St, Wilmington, NC 28401 (Chandler's Wharf, centre historique) ; site Punchmark. Source : https://www.jgarettjewelers.com/
- [V] « Every piece in our custom collection is designed, cast and finished by hand right here in our on-site studio » ; « we share photos and videos along the way so you can watch your dream piece come to life ». Même source.
- [V] Page 3D : script `jeweleros.com/static/dist/jos.js`, `data-org-id="9dWakxy1X8tE"`. Non actionné. Source : https://www.jgarettjewelers.com/pages/custom-ring-builder
- [V] Parcours « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring ». Source : https://www.jgarettjewelers.com/ringsettings
- [V] « we can have it ready for you in just a couple of weeks at a great price ». Source : https://www.jgarettjewelers.com/pages/custom-engagement-rings
- [I] Aucun prix dans le code statique de la catégorie « Engagement » (`/jewelry/engagement`) : chargés en JavaScript, ou absents.

### 2. Malak Jewelers (Charlotte)

- [V] 8042 Providence Rd, Ste 1000, Charlotte, NC 28277 (Arboretum) ; fondé en 1980. Source : https://malakjewelers.com/pages/custom-engagement-rings
- [V] Script JewelerOS (`jos.js`, `partner_config.js`), `data-org-id="9fE4BEy7ek1U"`. Source : https://malakjewelers.com/pages/custom-ring-builder
- [V] 358 produits dans la collection des bagues de fiançailles ; bandeau : « simply reach out for current pricing, availability, or additional details » ; livraison dans tout le pays. Source : https://malakjewelers.com/collections/engagement-rings
- [V] Menu : diamants naturels, synthétiques, de couleur ; 10 formes dont la marquise ; métaux or blanc, jaune, rose, platine. Même source.

### 3. Spicer Greene Jewelers (Asheville, Hendersonville)

- [V] « The Diamond Bar Ring Builder — Pick your mounting or Start with your stone » ; « View all 209 products » ; vedettes de 12 595 à 41 950 $. Source : https://spicergreene.com/pages/engagement
- [V] 116 montures ; en première page, montures « Diamond Bar » de 1 029 à 2 089 $ (ex. « Solitaire RBC 6-Prong for 1.5-2CT », 1 109 $), une monture à 2 900 $ et une bague complète à 41 950 $ classée dans la même liste. Source : https://spicergreene.com/collections/mountings
- [V] Sur mesure : « CAD rendering of your piece so you can see it from every angle » et « 3D printer to create a wax model ». Source : https://spicergreene.com/pages/custom-jewelry-design
- [I] Le constructeur est une application JavaScript à adresses en `#page/…` dans `/pages/diamond-bar` : non rendue, contenu non vérifié.

### 4. Hourglass Diamonds (Charlotte)

- [V] « There is no showroom floor to browse » ; gemmologue diplômé du GIA ; « Natural and lab-grown diamonds can both be excellent when cut quality and transparency are prioritized ». Source : https://www.hourglassdiamonds.com/engagement-rings
- [V] Ring Studio : 15 modèles, métaux « Rose Gold, White Metal, Yellow Gold », angles « Profile, Angled, Side, Top », modes « Motion » et « Still Views », deux balises `<video>`. Aucun prix. Source : https://www.hourglassdiamonds.com/ring-studio/ring-studio-embed.html
- [V] Sur mesure en 4 temps ; vidéo de la pièce finie. Source : https://www.hourglassdiamonds.com/custom-design
- [V] robots.txt : n'interdit que `/api/` et `/executive-dashboard/`.

### 5. Simon Jewelers (High Point)

- [V] 1345 N Main St, Ste 108, High Point, NC 27262 ; depuis 1988. Source : https://www.simonjewelers.com/pages/custom-engagement-rings
- [V] Même texte et mêmes images que la page JewelerOS de Malak et J. Garett ; [I] script non trouvé dans le code statique de `/pages/custom-ring-builder`. Source : https://www.simonjewelers.com/pages/custom-ring-builder
- [V] Parcours Punchmark en 3 étapes. Source : https://www.simonjewelers.com/ringsettings

### 6. Raleigh Diamond Fine Jewelry (Raleigh)

- [V] 5925 Glenwood Avenue, Suite 100, Raleigh, NC 27612. « Using our Ring Designer App, you can choose one of our stunning settings, and then add one of our dazzling diamonds » ; « 4x In-Store Design Centers ». Source : https://www.raleighdiamond.com/pages/jewelry-design
- [V] Constructeur Punchmark (étape « Complete Ring (not available yet) »). Source : https://www.raleighdiamond.com/ringsettings
- [V] Constructeur d'alliances Benchmark en iframe (`raleighdiamond-frame-categoryembed.jewelershowcase.com/band-builder`). Source : https://www.raleighdiamond.com/pages/wedding-band-builder

### 7. Jewelsmith (Durham)

- [V] 2200 West Main St, Suite A-170, Durham, NC 27705 ; « Most custom rings take 6 to 8 weeks from design approval » ; « Ready-to-wear engagement rings in our collection range from approximately $3,000 to $30,000+ » ; pas de « corking fee » pour remonter une pierre de famille. Source : https://jewelsmith.com/pages/engagement-rings-made-with-love-for-your-love
- [V] 33 produits, prix soldés de 3 290 à 22 525 $ en première page (certains en dépôt-vente, une remise de 1 410 $ affichée). Source : https://jewelsmith.com/collections/engagement-rings

### 8. Rustic and Main (Huntersville)

- [V] « We create an AI render and 3D model so you can see exactly what your ring will look like before a single gram of metal is touched » ; « 6-8 Weeks Average production time » ; sur mesure « typically start around $2,500 ». Source : https://rusticandmain.com/pages/custom-engagement-rings
- [V] 133 produits ; prix des premiers articles dans les données de la page de 1 740 à 4 670 $. Source : https://rusticandmain.com/collections/unique-engagement-rings

### 9. Windsor Jewelers (Winston-Salem, Charlotte)

- [V] 854 articles (filtres de marque Fana, Frederic Sage, Henri Daussi, Martin Flyer… ; « Not Included (Sold Separately) » pour la pierre centrale). Source : https://www.windsor-jewelers.com/engagement-rings
- [V] Rendus 3D et croquis en boutique ; « The prices on the website may differ from the actual sale price ». Source : https://www.windsor-jewelers.com/create-your-rings
- [V] robots.txt : `Crawl-delay: 30`, `Content-Signal: search=yes,ai-train=no,use=reference`. Source : https://www.windsor-jewelers.com/robots.txt

### 10. Diamonds Direct (siège à Charlotte)

- [V] Toutes les pages demandées (`/3d-ring-studio`, `/engagement`, `/locations/`, `/lab-grown-diamonds/`) renvoient 403 et un défi Cloudflare. robots.txt lisible : n'interdit que compte, panier, paiement, recherche et `/ready-to-ship/`.
- [I, extrait de recherche] 3D Ring Studio : « 1 Choose Your Style, 2 Choose Your Setting & Precious Metal, 3 Choose Your Diamond Shape & Carat Weight, 4 Review » ; 34 salles d'exposition ; « Risk Free 30 Day Returns ». Source indexée : http://diamondsdirect.com/3d-ring-studio
- [I, extrait de recherche] Siège à Charlotte, fondé en 1995 (LinkedIn) : https://linkedin.com/company/976529

## Sources

Pages lues le 25/11/2026 avec curl (code 200 sauf mention) :

- J. Garett : https://www.jgarettjewelers.com/robots.txt, https://www.jgarettjewelers.com/, https://www.jgarettjewelers.com/pages/custom-engagement-rings, https://www.jgarettjewelers.com/pages/custom-ring-builder, https://www.jgarettjewelers.com/ringsettings, https://www.jgarettjewelers.com/jewelry/engagement
- Malak : https://malakjewelers.com/robots.txt, https://malakjewelers.com/, https://malakjewelers.com/pages/custom-engagement-rings, https://malakjewelers.com/pages/custom-ring-builder, https://malakjewelers.com/collections/engagement-rings
- Spicer Greene : https://spicergreene.com/robots.txt, https://spicergreene.com/, https://spicergreene.com/pages/engagement, https://spicergreene.com/pages/diamond-bar, https://spicergreene.com/pages/custom-jewelry-design, https://spicergreene.com/collections/mountings
- Hourglass : https://www.hourglassdiamonds.com/robots.txt, https://www.hourglassdiamonds.com/, https://www.hourglassdiamonds.com/engagement-rings, https://www.hourglassdiamonds.com/custom-design, https://www.hourglassdiamonds.com/ring-studio/ring-studio-embed.html
- Simon : https://www.simonjewelers.com/robots.txt, https://www.simonjewelers.com/, https://www.simonjewelers.com/pages/custom-engagement-rings, https://www.simonjewelers.com/pages/custom-ring-builder, https://www.simonjewelers.com/ringsettings
- Raleigh Diamond : https://www.raleighdiamond.com/robots.txt, https://www.raleighdiamond.com/, https://www.raleighdiamond.com/pages/jewelry-design, https://www.raleighdiamond.com/ringsettings, https://www.raleighdiamond.com/pages/wedding-band-builder
- Jewelsmith : https://jewelsmith.com/robots.txt, https://jewelsmith.com/pages/engagement-rings-made-with-love-for-your-love, https://jewelsmith.com/collections/engagement-rings, https://jewelsmith.com/pages/custom-design (redirige vers l'accueil)
- Rustic and Main : https://rusticandmain.com/robots.txt, https://rusticandmain.com/, https://rusticandmain.com/pages/custom-engagement-rings, https://rusticandmain.com/collections/engagement-rings (redirige vers `/collections/unique-engagement-rings`)
- Windsor : https://www.windsor-jewelers.com/robots.txt, https://www.windsor-jewelers.com/engagement-rings, https://www.windsor-jewelers.com/create-your-rings
- Brummitt : https://brummittjewelrystudio.com/robots.txt, https://brummittjewelrystudio.com/pages/raleigh-nc-custom-engagement-rings
- Bailey's : https://baileybox.com/robots.txt, https://baileybox.com/, https://baileybox.com/pages/custom-jewelry-design, https://baileybox.com/pages/engagement-rings ; `/collections/engagement-rings` et `/collections/engagement-rings-1` : 404
- Bloqués (403, Cloudflare) : https://diamondsdirect.com/3d-ring-studio, https://diamondsdirect.com/engagement, https://diamondsdirect.com/locations/, https://diamondsdirect.com/lab-grown-diamonds/ ; https://www.vanscoydiamonds.com/, https://www.vanscoydiamonds.com/page/engagement-rings.html, https://www.vanscoydiamonds.com/design-your-own-ring/choose-your-style (robots.txt des deux sites lisibles, code 200)

Extraits de recherche (Parallel Search, requêtes génériques sur les joailliers de Caroline du Nord), utilisés pour les faits marqués [I] : http://diamondsdirect.com/3d-ring-studio, https://diamondsdirect.com/, https://diamondsdirect.com/custom-design/, https://linkedin.com/company/976529, http://vanscoydiamonds.com/, https://www.vanscoydiamonds.com/page/about-us.html, https://www.vanscoydiamonds.com/service/custom-design--charlotte--north-carolina--25840.html, https://www.venazia.com/about-us, https://linkedin.com/company/venaziajewelry, https://www.reeds.com/reeds-locations/nc/wilmington/reeds-83
