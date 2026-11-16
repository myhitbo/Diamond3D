# Maine : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition dans le Maine et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales et les grandes maisons sont exclus.

Méthode : lecture des pages comme un visiteur ordinaire, une page à la fois par site, au moins 2 secondes entre deux pages. Le robots.txt de chaque site a été lu avant toute page. Les pages statiques ont été lues avec curl (identité par défaut). Les pages en JavaScript ont été lues dans un Chromium sans écran, identité par défaut ; le navigateur de rendu Firecrawl n'était pas disponible (crédits épuisés). Dans deux configurateurs (Day's et Ellsworth), des onglets et des options ont été actionnés, sans rien saisir. Aucun formulaire n'a été rempli, aucun compte créé, aucun chat ouvert, aucun panier validé. Un site qui répond 403 ou dont le robots.txt interdit ClaudeBot n'a pas été lu : il est marqué « bloqué » et les faits viennent alors d'extraits d'index de recherche. Chaque fait porte une marque :

- **V** (vérifié) : page lue ou contrôle actionné le 15/11/2026, à l'adresse citée ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Day's Jewelers | Waterville (siège, I) ; 9 magasins dans le Maine et le New Hampshire | https://www.daysjewelers.com | https://www.daysjewelers.com/pages/custom-ring-builder (outil dans un cadre : https://daysjewelers.gemist.co/designer/engagement) | oui (Gemist, images de rendu, prix en direct) | aucun (robots.txt Shopify standard ; pas de robots.txt sur le sous-domaine Gemist, 404) | Le configurateur le plus abouti de l'État : 8 onglets, prix mis à jour à chaque choix, monture dès 2 395 $ et diamant naturel vendu par tranche de poids et de qualité, de 8 195 à 30 795 $ (V). Fabrication en 4 semaines, bague sur mesure non reprise (V). Le synthétique est tenu hors du configurateur mais vendu en ligne, de 3 995 à 5 995 $ (V). |
| 2 | Ellsworth Jewelers | Ellsworth | https://www.ellsworthjewelers.com | https://www.ellsworthjewelers.com/pages/custom-ring-builder (second parcours : https://www.ellsworthjewelers.com/ringsettings) | oui, deux : 3D (JewelerOS) et monture → diamant (Punchmark) | aucun (robots.txt : `Crawl-delay: 2` ; panier, compte et tris interdits) | Seul site lu qui offre à la fois un parcours 3D et un constructeur à prix affichés : 140 montures, de 1 546 à 4 777 $ parmi les 24 premières, « Ships in 7-10 Business Days » (V). Le parcours 3D propose naturel ou « Lab Grown » dès l'étape 2, et la marquise parmi 9 formes (V). Bague annoncée en « a couple of weeks » (V). |
| 3 | Brown Goldsmiths | Freeport | https://browngoldsmiths.com | https://browngoldsmiths.com/custom-ring-builder (I, non lue) | oui (3D ; même parcours que Ellsworth, I) | **bloqué** : robots.txt lisible (`Crawl-delay: 10`), mais les pages répondent 403 à curl | Le profil le plus proche de JR Diamond : atelier sur place depuis plus de 55 ans, collection maison, constructeur 3D en ligne puis choix de la pierre en boutique, photos envoyées par e-mail pendant la fabrication (tout en I). Non audité directement. |
| 4 | Maine Gold & Silver | South Portland | https://www.mainegoldandsilver.com | https://www.mainegoldandsilver.com/apps/ringbuilder/settings/ | oui (GemFind, photos) | aucun (robots.txt Shopify standard) | Le plus gros catalogue de montures : 552, en or 14 k et 18 k (blanc, jaune, rose) et platine, 10 formes dont la marquise ; mais « CALL FOR PRICE » sur chaque monture (V). Recherche de diamants naturels, synthétiques et de couleur (V). Solitaire marquise synthétique de 0,79 ct à 799,20 $ en solde (V). |
| 5 | L & L Jewelers | Scarborough | https://www.landljewelers.com | https://www.landljewelers.com/ringsettings | oui (Punchmark, photos) | aucun (robots.txt : `Crawl-delay: 2` ; panier, compte et tris interdits) | Même constructeur en 3 étapes que Ellsworth et, semble-t-il, même catalogue (140 montures, mêmes intitulés, I), mais ici sans prix : « Inquire for Price » (V). Menus « Natural Diamonds » et « Lab Grown Diamonds » (V). Montre que l'affichage du prix est un choix du marchand, pas de l'outil. |
| 6 | Lily and Quartz | Portland | https://www.lilyandquartz.com | https://www.lilyandquartz.com/shop/engagement-rings | non (choix du métal sur la fiche produit) | aucun (robots.txt Squarespace : `/search`, `/config`, `/api` interdits) | Petit atelier qui affiche tout : 6 bagues de fiançailles de 695 à 3 995 $, bagues en diamant synthétique de 1 295 à 4 995 $ (V). Sur mesure en trois temps, devis remis, fabrication en 2 à 8 semaines (V). |
| 7 | Cross Jewelers | Portland (vente en ligne et par téléphone seulement) | https://crossjewelers.com | https://crossjewelers.com/collection/engagement-rings/ | non | aucun (robots.txt : `Disallow:` vide, `Crawl-delay: 10`) | Un joaillier devenu pur vendeur en ligne : « Now exclusively online and by phone » (V). 23 bagues de fiançailles de création maison, de 1 450 à 11 250 $ (V). Tout en naturel : « 100% Natural Diamond Guarantee » (V). |
| 8 | Springer's Jewelers | Portland et Bath (plus Portsmouth, New Hampshire) | https://www.springersjewelers.com | https://www.springersjewelers.com/collections/engagement-ring | non | aucun (robots.txt Shopify standard) | Le plus gros catalogue à prix affichés d'un indépendant : 160 bagues de fiançailles, de 1 175 à 43 400 $ sur la première page (V). Ligne maison « Springer's Forever » et bagues anciennes, dont certaines avec leur grade GIA (V). Aucune mention du synthétique sur les pages lues (V). |
| 9 | Keith Field Goldsmith | Brunswick | https://keithfieldgoldsmith.com | https://keithfieldgoldsmith.com/love-and-engagement | non | aucun (robots.txt Squarespace : `/search`, `/config`, `/api` interdits) | Orfèvre avec boutique en ligne à prix affichés : bagues de 4 400 à 22 500 $ (V). Sur mesure avec croquis ou « computerized image » à valider avant fabrication, et montage d'une pierre de famille sur ses modèles (V). |
| 10 | Designs by CC | Portland | https://shopdesignsbycc.com | https://shopdesignsbycc.com/collections/engagement-rings | non | aucun (robots.txt Shopify standard) | 31 bagues faites main, de 275 à 7 860 $, avec panier (V). Pierres naturelles par défaut, synthétique sur demande (V). Sur mesure sur devis (V). |

## Détail par acteur

### 1. Day's Jewelers (Waterville, 9 magasins)

- V : la page de présentation https://www.daysjewelers.com/pages/custom-engagement-ring-builder décrit trois étapes (monture, diamant, fabrication) et dit : « your ring is crafted to order within 4 weeks ». Elle annonce « Nine locations across Maine & New Hampshire » et « Trusted by more than 80,000 couples since 1914 ».
- V, sur la même page :
  - une bague sur mesure n'est ni reprise ni échangée ;
  - le parcours en ligne ne propose que des diamants naturels (« reflecting our belief in their rarity ») ; le synthétique se traite en boutique ;
  - on peut monter un diamant que l'on possède déjà ;
  - reprise du diamant naturel pour un plus gros (« trade-up ») ;
  - deux crédits : celui de la maison (« Day's Credit ») et Synchrony.
- V : la page de départ https://www.daysjewelers.com/pages/custom-ring-builder répond (code 200). Elle charge dans un cadre l'outil de l'éditeur Gemist, à l'adresse https://daysjewelers.gemist.co/designer/engagement. La configuration est écrite dans l'adresse (`style=Classic+Solitaire&band=Polished&metal=14K+Yellow+Gold&shape=Oval&carat=1.50-1.99&origin=Natural&engraving=No`).
- V, onglets actionnés un par un dans l'outil :
  - « Style » : 9 modèles (Classic Solitaire, Solitaire Cathedral, Solitaire Hidden Halo, Solitaire Cathedral Hidden Halo, Solitaire Bezel, Petite Three Stone, Classic Halo, Geometric Halo, Flower Halo) ;
  - « Band » : poli ou pavé ;
  - « Metal » : or jaune 14 k, or blanc 14 k, or jaune 14 k avec platine, or jaune 18 k, or jaune 18 k avec platine, platine ;
  - « Shape » : ovale, rond, poire, émeraude, princesse (pas de marquise) ;
  - « Carat » : quatre tranches, de 0,50–1,00 à 2,00–2,50 ct ;
  - « Stone » : « Natural Diamonds », neuf offres par tranche de poids et de qualité, de 8 195 $ (1,47–1,56 ct, I-J, SI1-2) à 30 795 $ (1,95–2,10 ct, E-F, VS1-2). Ce ne sont pas des pierres individuelles avec leur certificat ;
  - « Engraving » : 35 $, 15 caractères, une police ;
  - « Size ».
- V : le prix figure sur le bouton du bas et suit les choix : 2 395 $ pour la monture de départ, puis 33 190 $ une fois l'onglet « Stone » ouvert (soit 2 395 + 30 795 ; la première pierre de la liste semble retenue d'office, I).
- V : le visuel est une suite d'images de rendu que l'on fait défiler avec des flèches. Aucune 3D manipulable n'a été constatée (capture d'écran).
- V : le bouton « Save » demande une adresse e-mail (non saisie). Un bouton « Book appointment » accompagne le prix. La page hôte ouvre aussi une fenêtre d'inscription à la lettre d'information.
- V : https://www.daysjewelers.com/collections/lab-grown-diamond-bridal-rings vend des bagues en diamant synthétique avec prix, par exemple une bague coussin de 3 ct au total en or jaune 14 k à 3 995 $ et une émeraude de 3 ct à 5 995 $.
- V : maison fondée en 1914 à Portland, vendue à ses salariés en novembre 2021 (https://www.daysjewelers.com/pages/about-days-jewelers).
- I : 219 bagues de fiançailles au catalogue ; magasins à Auburn, Augusta, Bangor, South Portland, Topsham et Waterville (Maine), Manchester, Nashua et Salem (New Hampshire) ; rendus CAO soumis à validation pour le sur mesure en boutique (extraits d'index). Siège à Waterville d'après l'annuaire WeddingWire.
- Intérêt : c'est la référence régionale. Le prix est décomposé (monture, pierre, gravure), mais pas expliqué poste par poste, et l'image n'est pas le fichier de fabrication. Les 14 jours ouvrés de JR Diamond battent ses 4 semaines.

### 2. Ellsworth Jewelers (Ellsworth)

- V : https://www.ellsworthjewelers.com/pages/custom-engagement-rings annonce le parcours : « Design your ring online in stunning 3D / Pick out your center stone in our Ellsworth, ME showroom / Finalize & order ». La bague est finie « in just a couple of weeks ». Adresse : 126 Downeast Hwy. La maison dit exercer depuis plus de 13 ans et cite des diamants d'Anvers et la tourmaline du Maine.
- V : la page de départ https://www.ellsworthjewelers.com/pages/custom-ring-builder répond (code 200). Le texte seul affiche « Ring Builder is Loading... » ; l'outil se charge en JavaScript depuis `www.jeweleros.com` et `jos0.b-cdn.net` (outil JewelerOS).
- V, étapes actionnées dans le navigateur sans écran :
  - étape 1 sur 4 : huit styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) ou « Start from scratch », et trois couleurs de métal ;
  - étape 2 : « Natural » ou « Lab Grown », puis neuf formes (rond, ovale, coussin, émeraude, princesse, Asscher, marquise, poire, radiant) ou « Decide later » ;
  - étape 3 : taille de la pierre, de 0,5 à 5 ct, ou « Decide later » ;
  - étape 4 : « When do you need your ring? » (1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, pas encore décidé) ;
  - l'écran suivant, le « 3D Ring Designer », a affiché « Something went wrong ». Cause probable : pas de WebGL dans ce navigateur (S). Ce n'est pas un blocage du site, et aucun nouvel essai n'a été fait. Le prix dans la vue 3D n'a donc pas été vérifié.
- I : cet outil est celui que l'inventaire du Montana décrit sous le nom « StoneAlgo Ring Builder » (mêmes textes, mêmes étapes). L'annuaire StoneAlgo promet « See the price update as you design ».
- V : second parcours, https://www.ellsworthjewelers.com/ringsettings (site Punchmark) : « Choose Setting / Choose Diamond / Complete Ring », 140 montures, prix affichés (de 1 546 à 4 777 $ parmi les 24 premières, toutes en or blanc 10 k), « Ships in 7-10 Business Days », bouton « Add to Cart ».
- V : la recherche de diamants https://www.ellsworthjewelers.com/diamonds a répondu « 0 diamonds found » pendant la session. Cause non déterminée.
- V : rubrique « Lab Grown Diamond Jewelry » au menu (bracelets, boucles, colliers). Un bouton « Text us » (Podium) ouvre une conversation par SMS ; il n'a pas été ouvert.
- Intérêt : c'est le seul site lu où le synthétique entre dans le configurateur. La 3D reste un modèle générique de l'éditeur, pas le fichier de l'atelier.

### 3. Brown Goldsmiths (Freeport)

- **Audit bloqué** : https://browngoldsmiths.com/robots.txt répond (code 200 ; `Crawl-delay: 10`, panier et compte interdits, Amazonbot exclu). La page https://browngoldsmiths.com/custom-engagement-rings a répondu 403 à curl. Aucune autre page du site n'a été demandée.
- Les faits suivants viennent d'extraits d'index de recherche (Parallel), donc **I** :
  - la page `/custom-engagement-rings` reprend mot pour mot le parcours de Ellsworth : 3D en ligne, pierre choisie en boutique au 148 Main Street, bague prête « in just a couple of weeks at a great price » ;
  - la page de l'outil est `/custom-ring-builder` (titre « Custom Ring Builder », corps vide dans l'index : chargement en JavaScript) ;
  - la page d'accueil dit que le constructeur couvre « the metal and the stone to the setting, the finish, and the words engraved inside the band », et que « nothing goes into production until you're completely happy » ;
  - StoneAlgo présente Brown Goldsmiths comme « Preferred StoneAlgo Partner » à Freeport et à Portland ;
  - l'atelier est sur place (« Downstairs is our workshop of jewelers and goldsmiths »), avec une collection maison (bagues Ridge, Embrace, Luna) et une dessinatrice CAO ; un prototype en plastique peut être imprimé pour essayage ;
  - sur mesure en trois étapes, croquis ou rendu 3D photoréaliste, puis : « During the process, we can email you photos of your piece being crafted ». Délai de 4 à 8 semaines (environ 6 semaines après validation) ;
  - rendez-vous en visioconférence et chat sur le site.
- Intérêt : c'est le concurrent local dont le discours ressemble le plus à « l'atelier en direct » (atelier visible, photos de fabrication). À relire à la main dans un navigateur ordinaire avant de le citer.

### 4. Maine Gold & Silver (South Portland)

- V : https://www.mainegoldandsilver.com/apps/ringbuilder/settings/ répond (code 200). Trois étapes : « Choose your Setting / Choose your Diamond / Review Complete Ring ». On y lit « 552 Settings » et « Powered By GemFind ».
  - 20 filtres de style (Halo, Solitaire, 3 Stone, Hidden Halo, Vintage, Bezel Set, etc.) ;
  - 10 formes, dont la marquise ;
  - métaux : or 14 k et 18 k (blanc, jaune, rose) et platine ;
  - chaque monture porte « CALL FOR PRICE » (12 sur 12 dans la première page).
- V : https://www.mainegoldandsilver.com/apps/diamondtools/diamondtype/navlabgrown offre trois onglets (« Natural », « Lab Grown », « Fancy Color »), des filtres sur les 4 C et une colonne de prix. La liste est restée vide pendant la session (« 0 Similar Diamonds »). Cause non déterminée.
- V : https://www.mainegoldandsilver.com/collections/engagement-rings affiche des prix, dont un solitaire marquise synthétique de 0,79 ct en or jaune 14 k à 799,20 $ (au lieu de 999 $) et un solitaire ovale synthétique de 0,72 ct au même prix.
- V : la page https://www.mainegoldandsilver.com/pages/custom-jewelry-design décrit le sur mesure en quatre temps, sans délai ni prix, et la reprise de pierres de famille. Une page « Natural vs Lab Grown Diamonds » figure au menu.
- V : adresse au 220 Maine Mall Rd, Suite 4. La maison vend aussi des monnaies, des lingots et des bijoux anciens. Un bandeau annonce une « Merry & Moving Sale ».
- Le robots.txt (Shopify) contient des consignes destinées aux agents d'IA. Elles ont été ignorées : seules les règles d'accès ont été retenues. Il en va de même pour Springer's et Designs by CC.

### 5. L & L Jewelers (Scarborough)

- V : https://www.landljewelers.com/ringsettings répond (code 200). Trois étapes : « Choose a Ring / Choose a Diamond / Complete Ring ». On y lit « 140 settings found ». Sept styles, quatre métaux (or blanc, jaune, rose, platine), curseur de prix.
- V : chaque monture de la première page porte « Inquire for Price ». Les intitulés sont ceux du catalogue de Ellsworth (« 10K White Gold Round Halo Engagement Ring »).
- V : https://www.landljewelers.com/diamonds a répondu « 0 diamonds found » pendant la session, comme chez Ellsworth. Le menu distingue « Natural Diamonds » et « Lab Grown Diamonds ».
- V : adresse au 426 US-1, Suite 3. Site Punchmark.

### 6. Lily and Quartz (Portland)

- V : https://www.lilyandquartz.com/shop/engagement-rings répond (code 200) et liste 6 bagues, de 695 à 3 995 $, dont 3 épuisées. Exemples : « The Leo », coussin de taille ancienne en or jaune 10 k, 3 995 $ ; « The World », diamant champagne, 3 995 $.
- V : la boutique https://www.lilyandquartz.com/shop vend des pièces en diamant synthétique avec prix : bague à diamant taille émeraude à 2 995 $, poire jaune fantaisie à 4 995 $, bague à poire de 0,14 ct « from $1,295 » avec choix du métal (or 10 k ou 14 k, blanc ou jaune). Les diamants naturels sont proposés sur demande.
- V : https://www.lilyandquartz.com/fine-jewelry-services décrit le sur mesure : consultation gratuite, croquis ou montures existantes et pierres à voir sur place, « An estimate will be provided », puis fabrication en « two to eight weeks ».
- I : une bague « The Archer » à diamant synthétique certifié IGI, « from $2,995 », faite à la commande en 2 à 4 semaines, figure dans l'index de recherche. Sa fiche répond aujourd'hui 404 (V).
- V : boutique au 560 Congress Street.

### 7. Cross Jewelers (Portland)

- V : https://crossjewelers.com/collection/engagement-rings/ répond (code 200). La liste se charge en JavaScript (moteur Searchspring) : « Results - 23 », avec des prix de 1 450 à 11 250 $. Exemples : « Lady Captain's Diamond Engagement Ring » de 1 450 à 11 250 $ selon la variante, « The Schooner » en platine à 9 067 $.
- V : pied de page : « Portland, ME — Now exclusively online and by phone », du lundi au vendredi, retrait possible sur le trottoir (« Curbside Pick-Up »).
- V : garanties affichées : « 100% Natural Diamond Guarantee », « 100% Diamond Grade Guarantee », taille de doigt offerte un an. Livraison gratuite aux États-Unis.
- V : le discours porte sur la fabrication (« Most of our jewelry is already made in America », bagues basses et sans aspérité) et sur la tourmaline du Maine, que la maison dit extraire elle-même.

### 8. Springer's Jewelers (Portland, Bath)

- V : https://www.springersjewelers.com/collections/engagement-ring répond (code 200). Le filtre indique « Engagement Rings (160) ». La première page compte 34 prix, de 1 175 $ (monture « Springer's Forever by Vlora ») à 43 400 $ (bague ancienne en platine, 3,01 ct).
- V : les bagues anciennes portent leur grade, par exemple « 2.61ct J/IF GIA ». Marques : Tacori, Hearts on Fire, Kwiat.
- V : https://www.springersjewelers.com/pages/custom-design présente le sur mesure sans étapes, délai ni prix. Gravure à la main, délai moyen de 3 semaines.
- V : trois magasins : Portland et Bath (Maine), Portsmouth (New Hampshire). Aucune mention « lab-grown » sur les trois pages lues.

### 9. Keith Field Goldsmith (Brunswick)

- V : la page d'accueil https://keithfieldgoldsmith.com sert de boutique, avec prix : « Cribstone Bridge Solitaire » 7 500 $, « Crown Solitaire » 22 500 $, « Elizabeth » 12 250 $, « Evelyn » 4 400 $, « Florence » 7 650 $. Adresse : 147 Maine Street.
- V : https://keithfieldgoldsmith.com/love-and-engagement présente quatre modèles « Active Lifestyle » et propose de les monter avec une pierre de famille.
- V : https://keithfieldgoldsmith.com/custom-ring annonce un croquis ou une image de synthèse à valider avant fabrication (« See a finished ring before you place an order »).
- V : l'ancienne adresse `/engagement` répond 404.

### 10. Designs by CC (Portland)

- V : https://shopdesignsbycc.com/collections/engagement-rings répond (code 200) : 31 articles, de 275 à 7 860 $, avec panier Shopify. Filtres de métal de l'argent au platine, or 14 k surtout.
- V : « All of our rings have natural diamonds or gemstones. If you prefer lab-grown we can accommodate your request. » Sur mesure et devis par contact. Adresse : 7 Pleasant Street.

## Hors classement (lus, moins pertinents)

| Acteur | Ville | Adresse | Constat |
|---|---|---|---|
| D. Cole Jewelers | Portland | https://www.dcolejewelers.com | V : boutique Shopify, mais les collections `/collections/engagement` et `/collections/wedding-bands` affichent « 0 Items ». Sur mesure en cinq étapes avec « sketches and CAD designs » (`/pages/custom`). 10 Exchange Street. |
| Thomas Michaels Designers | Camden | https://www2.thomasmichaels.com/bridal-anniversary | V : galerie de solitaires contemporains sur mesure, sans prix ni panier. 11 Elm Street (I). |
| Quality Jewelers | Bangor | https://qualityjewelers.com | V : site vitrine sans prix ; la page « lab-grown-diamond-engagement-rings » est vide hors JavaScript. Sur mesure en CAO avec révisions « until it is clear » (`Services.aspx?SPg=Custom Cad`). |
| Harvest Gold Gallery | Center Lovell | https://harvestgoldgallery.com/pages/harvest-gold-weddings | V : bagues de fiançailles et alliances faites sur mesure, en argent ou en or 14 k et 18 k (rose, jaune, blanc, vert), or recyclé accepté. I : prix affichés, par exemple une alliance bicolore à 2 200 $. Galerie d'art avant tout. |
| Peapod Jewelry | Edgecomb, Damariscotta | https://www.peapodjewelry.com/weddings/ | V : boutique en ligne à prix affichés, mais l'offre « Weddings » vise les cadeaux de cortège, pas la bague. Pierres naturelles ou synthétiques au choix. |
| Republic Jewelry & Collectibles | Auburn | https://republicjewelry.com | V : bijoux d'occasion avec prix, cartes de sport et pièces de collection. Pas de rubrique de fiançailles. |
| Goldworks | Auburn | https://www.goldworksme.com | V : la page d'accueil répond ; achat d'or, bijoux neufs et anciens, rubrique « Custom Rings » non lue. |
| J. Dostie Jewelers | Yarmouth | https://www.jdostie.com | I : maison de 1947, déplacée de Lewiston à Yarmouth en 2024, sans vente en ligne ; service de CAO et d'impression 3D en cours de création. |
| Striking Gold Jewelers | Ellsworth | https://www.strikinggoldjewelers.com | I : pièces uniques faites main, refonte de l'or du client ; catalogue de bagues de fiançailles sans prix constaté. |

Sites bloqués, non lus (faits tirés d'extraits d'index, donc I) :

| Acteur | Ville | Adresse | Blocage | Constat |
|---|---|---|---|---|
| Chaya Studio Jewelry | Biddeford | https://chayastudio.com | robots.txt : `ClaudeBot` et `anthropic-ai` en `Disallow: /` | Sur mesure très détaillé : au moins 3 croquis, puis un rendu affiné « along with a budget proposal », fabrication par impression 3D, cire ou forge. Or recyclé, diamants de réemploi. Sur rendez-vous. |
| Flux Jewelry Studio | Westbrook | https://www.fluxjewelrystudio.com | robots.txt : `ClaudeBot` et `anthropic-ai` en `Disallow: /` | Bagues faites main, entièrement personnalisables, prix sur demande. |
| Folia Jewelry | Portland | https://www.foliajewelry.com | robots.txt : `ClaudeBot` en `Disallow: /` | Aucun fait recueilli. |
| Designs by Aaron | Brewer | https://www.jewelrydesignsbyaaron.com | 403 de Cloudflare dès le robots.txt | Boutique en ligne ; sur mesure avec « computer imaging, and wax renderings » sans frais ni engagement ; diamants extraits ou synthétiques. |
| Arbor Jewelers (ancien Turtle Love Co.) | Portland (I) | https://arborjewelers.com | robots.txt : `User-agent: *` / `Disallow: /` | V : https://www.turtleloveco.com n'est plus qu'une page de renvoi vers Arbor Jewelers et Baxter Forest. Une interdiction totale sur une boutique Shopify signale souvent une boutique fermée ou protégée par mot de passe (S). |

## Écartés

- **Hannoush Jewelers** (Maine Mall, South Portland) : enseigne de centres commerciaux à plusieurs magasins, dont le siège est hors du Maine (S). I : bagues en diamant naturel et synthétique, sur mesure avec rendus numériques (https://www.hannoush.com/pages/engagement-rings-south-portland-me).
- **Venazia** : pages de référencement local (« Custom Rings Bangor, ME », Auburn, Westbrook, Biddeford) d'un vendeur national. Pas d'établissement dans le Maine constaté.
- **Kay** et les autres enseignes de Signet : exclues par le cahier des charges.
- **Windham Jewelers** : le domaine windhamjewelers.com est à vendre (renvoi vers un revendeur de domaines, V).
- **Etienne Perret** (Camden) : https://www.etienneperret.com tourne en boucle de redirections (V). Site hors service.
- **G.M. Pollack & Sons** : https://gmpollack.com n'est plus qu'une page d'hébergeur (V).

## Enseignements pour JR Diamond

- Configurateurs loués : les cinq configurateurs du Maine viennent de quatre éditeurs. Gemist chez Day's, JewelerOS chez Ellsworth et Brown Goldsmiths, GemFind chez Maine Gold & Silver, Punchmark chez L & L et Ellsworth (V, sauf Brown en I). Aucun ne montre le fichier de fabrication du joaillier : l'écart que JR Diamond revendique tient aussi ici.
- Le prix dépend du marchand, pas de l'outil : le constructeur Punchmark affiche ses prix chez Ellsworth et les masque chez L & L, pour 140 montures aux mêmes intitulés (V ; identité du catalogue en I). GemFind les masque chez Maine Gold & Silver, alors que l'inventaire du Montana les montrait chez Diamond Dream.
- Prix décomposé, pas expliqué : Day's sépare la monture (2 395 $), la pierre (8 195 à 30 795 $) et la gravure (35 $) (V). Personne ne détaille le métal, la façon et le sertissage. Le prix « expliqué » de JR Diamond reste sans équivalent local.
- Pierre vendue par tranche : Day's vend le diamant par fourchette de poids et de qualité, sans certificat ni vidéo de la pierre (V). La « pierre filmée » de JR Diamond va plus loin.
- Fabrication montrée : Brown Goldsmiths dit envoyer des photos de la pièce en cours de fabrication (I). C'est la seule promesse proche de « voir naître son bijou », et elle passe par e-mail, pas par le site.
- Synthétique : il est présent partout sauf chez Cross (garantie « 100 % naturel ») et Springer's. Ellsworth le met dans le configurateur ; Day's le réserve à la boutique et au prêt-à-porter. Repère de prix : solitaire marquise synthétique de 0,79 ct à 799,20 $ en solde chez Maine Gold & Silver (V).
- Délais : « a couple of weeks » chez Ellsworth et Brown, 7 à 10 jours ouvrés pour une monture de catalogue chez Ellsworth, 4 semaines chez Day's, 2 à 8 semaines chez Lily and Quartz (V). Les 14 jours ouvrés de JR Diamond sont dans la tranche rapide.
- Marquise : elle figure dans les formes de Ellsworth et de Maine Gold & Silver, pas dans celles de Day's (V).
- Vente sans boutique : Cross Jewelers a fermé sa boutique et vend en ligne et par téléphone, avec garanties écrites et livraison gratuite (V). C'est un exemple local de confiance bâtie sans vitrine.
- Blocage des robots : six sites refusent la lecture automatique, quatre par robots.txt (Chaya, Flux, Folia, Arbor) et deux par un code 403 (Brown Goldsmiths, Designs by Aaron). Un audit plus poussé de Brown Goldsmiths demande une lecture à la main.

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire) :

- Day's : https://www.daysjewelers.com/robots.txt, https://www.daysjewelers.com/pages/custom-engagement-ring-builder, https://www.daysjewelers.com/pages/custom-ring-builder, https://daysjewelers.gemist.co/robots.txt (404), https://daysjewelers.gemist.co/designer/engagement, https://www.daysjewelers.com/pages/about-days-jewelers, https://www.daysjewelers.com/collections/lab-grown-diamond-bridal-rings, https://www.daysjewelers.com/collections/engagement-rings (liste non lue, chargée en JavaScript)
- Ellsworth : https://www.ellsworthjewelers.com/robots.txt, https://www.ellsworthjewelers.com/pages/custom-engagement-rings, https://www.ellsworthjewelers.com/pages/custom-ring-builder, https://www.ellsworthjewelers.com/ringsettings, https://www.ellsworthjewelers.com/diamonds
- Brown Goldsmiths : https://browngoldsmiths.com/robots.txt, https://browngoldsmiths.com/custom-engagement-rings (403)
- Maine Gold & Silver : https://www.mainegoldandsilver.com/robots.txt, https://www.mainegoldandsilver.com/, https://www.mainegoldandsilver.com/apps/ringbuilder/settings/, https://www.mainegoldandsilver.com/apps/diamondtools/diamondtype/navlabgrown, https://www.mainegoldandsilver.com/collections/engagement-rings, https://www.mainegoldandsilver.com/pages/custom-jewelry-design
- L & L : https://www.landljewelers.com/robots.txt, https://www.landljewelers.com/ringsettings, https://www.landljewelers.com/diamonds
- Lily and Quartz : https://www.lilyandquartz.com/robots.txt, https://www.lilyandquartz.com/, https://www.lilyandquartz.com/shop, https://www.lilyandquartz.com/shop/engagement-rings, https://www.lilyandquartz.com/fine-jewelry-services, https://www.lilyandquartz.com/shop/p/the-archer-emerald-cut-lab-grown-diamond-engagement-ring (404)
- Cross : https://crossjewelers.com/robots.txt, https://crossjewelers.com/, https://crossjewelers.com/collection/engagement-rings/
- Springer's : https://www.springersjewelers.com/robots.txt, https://www.springersjewelers.com/, https://www.springersjewelers.com/collections/engagement-ring, https://www.springersjewelers.com/pages/custom-design
- Keith Field : https://keithfieldgoldsmith.com/robots.txt, https://keithfieldgoldsmith.com/, https://keithfieldgoldsmith.com/love-and-engagement, https://keithfieldgoldsmith.com/custom-ring, https://keithfieldgoldsmith.com/engagement (404)
- Designs by CC : https://shopdesignsbycc.com/robots.txt, https://shopdesignsbycc.com/collections/engagement-rings
- Hors classement : https://www.dcolejewelers.com/ (et son robots.txt), https://www.dcolejewelers.com/collections/engagement, https://www.dcolejewelers.com/collections/wedding-bands, https://www.dcolejewelers.com/pages/custom ; https://www2.thomasmichaels.com/ (et son robots.txt), https://www2.thomasmichaels.com/bridal-anniversary ; https://qualityjewelers.com/ (et son robots.txt), https://qualityjewelers.com/lab-grown-diamond-engagement-rings.aspx, https://qualityjewelers.com/Services.aspx?SPg=Custom%20Cad ; https://harvestgoldgallery.com/ (et son robots.txt), https://harvestgoldgallery.com/pages/harvest-gold-weddings ; https://www.peapodjewelry.com/ (et son robots.txt), https://www.peapodjewelry.com/weddings/ ; https://republicjewelry.com/ (et son robots.txt) ; https://www.goldworksme.com/ (et son robots.txt) ; https://cvjewelry.com/ (et son robots.txt ; Carrabassett Valley Jewelry, non retenu)
- Robots.txt des sites bloqués, seule page lue : https://chayastudio.com/robots.txt, https://www.fluxjewelrystudio.com/robots.txt, https://www.foliajewelry.com/robots.txt, https://arborjewelers.com/robots.txt, https://www.jewelrydesignsbyaaron.com/robots.txt (403)
- Écartés : https://www.turtleloveco.com/ (et son robots.txt), https://www.windhamjewelers.com/ (renvoi), https://www.etienneperret.com/ (boucle de redirections), https://gmpollack.com/

Extraits d'index de recherche (Parallel Search et recherche web), utilisés pour les faits marqués I :

- https://browngoldsmiths.com/, https://browngoldsmiths.com/custom-engagement-rings, https://browngoldsmiths.com/custom-ring-builder, https://browngoldsmiths.com/custom-ring-designs, https://browngoldsmiths.com/custom-design-bespoke-jewelry, https://browngoldsmiths.com/custom-jewelry-design, https://browngoldsmiths.com/cad-jewelry/, https://browngoldsmiths.com/the-brown-goldsmiths-experience/
- https://www.stonealgo.com/local-jewelers/freeport-me, https://www.stonealgo.com/local-jewelers/portland-me
- https://www.daysjewelers.com/collections/engagement-rings, https://www.daysjewelers.com/pages/augusta-me, https://www.daysjewelers.com/pages/bangor-me
- https://www.weddingwire.com/c/me-maine/wedding-jewelers/19-sca.html
- https://www.lilyandquartz.com/ (fiche « The Archer »)
- https://harvestgoldgallery.com/collections/rings
- https://chayastudio.com/, https://chayastudio.com/custom-design-process, https://chayastudio.com/faq
- https://www.fluxjewelrystudio.com/engagement-and-wedding
- https://jewelrydesignsbyaaron.com/, https://www.jewelrydesignsbyaaron.com/custom-jewelry
- https://www.jdostie.com/, https://www.strikinggoldjewelers.com/, http://thomasmichaels.com/
- https://localjewelers.net/Maine (adresse de Turtle Love Co. à Portland), https://www.jewelrystoredirectory.com/state/maine
- https://www.hannoush.com/pages/engagement-rings-south-portland-me, https://www.venazia.com/custom-rings-bangor-me
- Référence interne : `docs/concurrence/audit/us/montana/INVENTAIRE.md` (description de l'outil StoneAlgo chez L&M Fine Jewelry)
