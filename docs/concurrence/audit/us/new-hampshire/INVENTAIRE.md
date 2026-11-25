# Inventaire des joailliers : New Hampshire

Recensement du 24 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis (vendeurs nationaux, chaînes, grands magasins et grandes maisons exclus).

Méthode : lecture seule, comme un visiteur ordinaire. Le robots.txt de chaque site a été contrôlé avant toute page (outil `robots.cjs` de la session, puis lecture du fichier
entier pour repérer les groupes visant les agents d'IA). Pages statiques lues avec curl (en-tête de navigateur Safari, convention du dépôt, une seule tentative par page). Pages
construites en JavaScript lues dans un Chromium sans écran (Playwright, identité par défaut, non modifiée). Au plus une page toutes les 2 s par site (3 s chez Pearce, qui
demande `Crawl-delay: 2`). Aucun formulaire rempli ni envoyé, aucun compte, aucun chat ouvert, aucun bouton d'ajout au panier actionné, aucune étape de configurateur choisie.
Firecrawl non utilisé (crédits épuisés selon les recensements précédents).

Marques : **[V]** vérifié, page lue le 24/11/2026 (adresse donnée) ; **[V, index]** lu dans l'extrait d'un moteur de recherche (Parallel Search), pas sur le site ; **[I]**
inféré ; **[S]** supposé. Prix en dollars américains, tels qu'affichés.

## Constat général

- [V] Six des dix sites retenus (Cardin, Amidon, Bellman's, Richters, Exeter Jewelers, Jewelry Creations), tous sous Shopify d'après leurs pages, ont répondu le 24/11 par une
  page « Verifying your connection... » (HTTP 403) dès la lecture de leur robots.txt. L'outil de contrôle les classe INCONNU : ils sont marqués **bloqués**, aucune autre page
  n'a été demandée, aucun nouvel essai. Leurs faits viennent d'extraits d'index de recherche. [I] Ce contrôle semble propre à la plateforme et non choisi par chaque joaillier ;
  un audit à la main pourrait les lire normalement.
- [V] Deux configurateurs lisibles : Pearce Jewelers (assistant « 3D Ring Designer » de JewelerOS, le même que chez neuf joailliers du Missouri) et White Box Jewelers
  (constructeur en 3 étapes avec prix de chaque monture et de chaque diamant, 17 277 diamants synthétiques listés).
- [V, index] Le discours de fabrication le plus complet vient de Bellman Jewelers (Manchester) : rendu CAO révisé sans frais, maquette imprimée en 3D dont le client garde une
  copie, 2 à 3 semaines. Jewelry Creations (Dover) et Newbury Gold & Silversmith (Seabrook) décrivent le même enchaînement CAO, cire, fonte.
- [I] Comme dans le Maine et le Connecticut, la 3D vue en ligne est celle d'un fournisseur (JewelerOS) ; aucun site ne montre la pièce issue du fichier de l'atelier avant l'achat.
- [V] Le synthétique est proposé partout où l'offre de pierres est décrite, sauf chez Portsmouth Jewelers (diamants « GIA Graded » seulement, page lue). L'absence de taxe sur
  les ventes au New Hampshire est un argument commercial récurrent (Portsmouth Jewelers, Jewelry Creations).

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Pearce Jewelers | West Lebanon | https://www.pearcejewelers.com/ | https://www.pearcejewelers.com/pages/design-your-ring | oui (« 3D Ring Designer » JewelerOS, 3D non atteinte) | non (200 ; robots.txt Punchmark, `Crawl-delay: 2`, panier et compte interdits) | [V] « Design your ring online in stunning 3D », puis choix de la pierre en boutique ; assistant « Step 1 of 4 » (solitaire, halo, halo caché, clos, cathédrale, pavé, toi et moi, trois pierres, « Start from scratch ») ; bague prête « in just a couple of weeks ». Constructeur d'alliance (`/pages/custom-band-builder`, cadre Ava Couture), recherche de diamants naturels ou synthétiques (`/diamonds?labGrown=1`). [V] Bagues en catalogue (318) toutes en « Call for Price » en page 1. Le plus proche d'un configurateur 3D, sans prix. |
| 2 | White Box Jewelers | Portsmouth | https://whiteboxjewelers.com/ | https://whiteboxjewelers.com/ringsettings | oui (monture, puis diamant, puis bague, avec prix) | non (robots.txt lisible, panier et compte interdits). [V] Le serveur renvoie HTTP 404 sur les pages internes, qui s'affichent quand même (application JavaScript) | [V] « Design Your Own Diamond Engagement Ring » en 3 étapes ; 1 145 montures filtrables (style, métal 14 k, 18 k ou platine, forme, prix), prix affichés, par exemple 1 461 $ à 6 678 $ en page 1. 17 277 diamants synthétiques à prix affiché (exemple : 1,05 ct rond E à 573 $). Sur mesure : rendu CAO en 3D avant fabrication ; rendez-vous virtuel. Le parcours le plus transparent sur le prix. |
| 3 | Cardin Jewelers | Nashua | https://www.cardinjewelers.com/ | https://www.cardinjewelers.com/apps/ringbuilder/settings/ | oui (constructeur en 3 étapes) | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] « Design Your Own Engagement Ring… in 3 easy steps » ; départ par la monture, un diamant naturel, synthétique ou de couleur. 226 montures en 14 k à prix affiché (de 2 112 à 5 784 $ dans l'extrait). Sur mesure avec « 3D Mock-Up », rendez-vous en boutique ou en visio. Maison familiale « Since 1920 ». |
| 4 | Amidon Jewelers | West Lebanon | https://www.amidonjewelers.com/ | https://www.amidonjewelers.com/pages/design-your-own-engagement-ring | oui (monture ou diamant ; contenu non lu) | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] Départ par la monture (`#/ring`) ou par le diamant (lien d'exemple filtré sur synthétique, 2 ct, rond). 70 bagues de fiançailles synthétiques à prix affiché (de 2 450 à 5 430 $ dans l'extrait). Livraison assurée avec signature, retours sous 30 jours, financement Affirm. Sur mesure « from the first concept to the finished piece ». |
| 5 | Bellman Jewelers | Manchester (et Boston, Seaport) | https://bellmans.com/ | https://bellmans.com/pages/custom-jewelry | non (sur mesure par CAO ; questionnaire « Engagement Ring Quiz ») | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] Processus en 4 temps : rendez-vous, CAO révisée « at no extra charge », maquette imprimée en 3D (« You'll even receive a copy of the wax model to keep »), fonte et sertissage. « Most custom designs are completed in 2–3 weeks », option express ; processus gratuit et sans engagement ; vidéo CAO 3D gratuite pour une pierre fournie par le client ; expédition dans le monde entier. Collection synthétique. Le discours le plus proche de « voir naître son bijou ». |
| 6 | Jewelry Creations | Dover | https://jewelrycreationsinc.com/ | https://jewelrycreationsinc.com/pages/custom-engagement-rings-in-dover-nh | non (sur mesure par CAO) | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] « You'll see your design, refine it, and even try it on before it's ever created » : consultation, CAO, retouches, maquette en cire imprimée, fonte. Pierres choisies par des fournisseurs d'Anvers, déplacement à Anvers proposé. Naturel et synthétique. Boutique en ligne (produits « Special Order » avec prix). Depuis 1981. |
| 7 | Richters Jewelry & Design Studio | Londonderry | https://richtersjewelry.com/ | https://richtersjewelry.com/pages/engagement-rings | partiel (montures et recherche de diamants) | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] Montures et bagues à prix affiché (1 299 $ pour un solitaire synthétique de 0,73 ct en or rose 14 k ; montures de 3 650 à 6 350 $). Outil de recherche de diamants « thousands of diamonds available by order ». Orfèvre et créateur maison, fabrication à l'atelier. Valeur d'achat entière reprise contre un diamant plus gros. Plateforme GemFind. |
| 8 | Exeter Jewelers | Exeter | https://exeterjewelersnh.com/ | https://exeterjewelersnh.com/ (menu « Diamond Search ») | partiel (recherche de diamants) | **bloqué** : robots.txt en HTTP 403, page « Verifying your connection... » | [V, index] Solitaires synthétiques à prix affiché, par exemple 3,08 ct rond certifié IGI en or blanc 14 k à 2 895 $. Menus « Custom Design » et « Diamond Search », panier. Maison familiale depuis 1979. Adresse de la page de recherche non relevée. |
| 9 | Newbury Gold & Silversmith | Seabrook | https://www.newburygoldandsilversmith.com/ | https://www.newburygoldandsilversmith.com/custom-engagement-rings | non (sur mesure, consultation en visio) | non (200 ; robots.txt Wix, `Allow: /`) | [V] Consultation en atelier ou « video consultation » ; modèle 3D vu « by email or in the studio », puis cire imprimée à essayer ; fonte et sertissage sous loupe à l'atelier ; retrait ou expédition assurée « across New England ». Bague synthétique (rapports GIA, EGL ou IGI) montée et finie le jour même. Aucun prix sur le site ; vente en ligne par eBay et Etsy. |
| 10 | Naser Diamonds | Bedford | https://www.naserdiamonds.com/ | https://www.naserdiamonds.com/diamonds/ | partiel (recherche de diamants, non lue) | partiel : accueil lisible (200, robots.txt qui autorise ClaudeBot) ; les pages internes renvoient vers `verify.html` (page « Verifying... »), non contournée | [V] « Serving New Hampshire Since 1986 », famille propriétaire ; menus « Loose Diamond Search », « Signature Bridal Collection », marques Tacori, ArtCarved, Goldman ; panier. Aucun prix ni mention du synthétique sur l'accueil. |

## Fiches

### 1. Pearce Jewelers (West Lebanon)

- [V] Page `custom-engagement-rings` : « Design your custom ring online using our new 3D engagement ring designer » ; étapes « Design your ring online in stunning 3D », « Pick out
  your center stone in our West Lebanon, NH showroom », « Finalize & order your ring » ; « we can have it ready for you in just a couple of weeks ». Source :
  https://www.pearcejewelers.com/pages/custom-engagement-rings
- [V] Page `design-your-ring` (rendue dans Chromium) : « Step 1 of 4 », « Let's start designing your ring », « you'll be able to fully customize your design in our 3D Ring
  Designer », neuf styles listés. Le script est `https://www.jeweleros.com/static/dist/jos.js`. Aucune étape n'a été choisie ; les appels à `jeweleros.com/api/` (interdits par
  le robots.txt de JewelerOS, d'après l'inventaire du Missouri) ont été coupés dans le navigateur. `/pages/custom-ring-builder` redirige vers cette page. Source :
  https://www.pearcejewelers.com/pages/design-your-ring
- [V] Constructeur d'alliance : cadre `https://www.avacoutures.com/retailer/eternity-ring-detail/Signature-Cup.html?r_id=627713` (non ouvert). Source :
  https://www.pearcejewelers.com/pages/custom-band-builder
- [V] Recherche de diamants synthétiques avec filtres forme, prix, carat, taille, couleur, pureté. Source : https://www.pearcejewelers.com/diamonds?labGrown=1
- [V] « 318 product(s) found » en bagues de fiançailles, mention « Call for Price » et « Ships in 7-10 Business Days » sur toute la page 1. Pied de page « POWERED BY:
  PUNCHMARK ». Source : https://www.pearcejewelers.com/jewelry/engagement-rings
- [I] Même outil JewelerOS qu'au Missouri et chez Ellsworth (Maine) : la 3D est un produit de fournisseur, pas le fichier de l'atelier.

### 2. White Box Jewelers (Portsmouth)

- [V] Accueil : « Design Your Own Diamond Ring », « Start With Setting », « Start With Diamond » ; boutique « on the corner of Congress and Fleet Street » ; rendez-vous virtuel
  proposé. Source : https://whiteboxjewelers.com/
- [V] Étape 1 : « 1 Choose a Setting, 2 Choose a Diamond, 3 Complete Ring » ; filtres style, métal (14 k et 18 k jaune, blanc, rose ; platine), forme, prix ; « 1145 product(s)
  found » ; prix en page 1 de 1 461 $ (« Solitaire Bezel Set Round Engagement Ring ») à 6 678 $ (« Multirow Pavé Halo Engagement Ring »). Source :
  https://whiteboxjewelers.com/ringsettings
- [V] Diamants : bascule « Earth-Mined / Lab-Grown », filtres couleur, pureté, carat, taille, fluorescence, poli, symétrie ; « 17277 Product(s) Found » en synthétique ; exemples
  1,05 ct rond E à 573 $, 2,04 ct ovale D à 1 420 $. Source : https://whiteboxjewelers.com/diamonds/lab
- [V] Sur mesure : « We will present to you a Computer-Aided Design which will be a digital 3-dimensional representation of the final product. You can review the design and
  request changes ». Le formulaire de la page n'a pas été rempli. Source : https://whiteboxjewelers.com/custom-design
- [V] Une fiche de monture ouverte depuis l'accueil a renvoyé « page-not-found » (lien périmé). Site « Designed & Developed By Belgium Webnet Inc. ».

### 3. Cardin Jewelers (Nashua) — bloqué

- [V] `https://www.cardinjewelers.com/robots.txt` : HTTP 403, page « Verifying your connection... ». Rien d'autre n'a été demandé au site.
- [V, index] Menu « Design Your Own » : « Start with a Setting » (`/apps/ringbuilder/settings/`), « Start with a Natural Diamond » (`/apps/ringbuilder/diamondtools`), « Start
  with a Lab Grown Diamond », « Start with a Fancy Colored Diamond » ; « Family Owned Since 1920 », 125 Main Street. Source : extrait de https://www.cardinjewelers.com/
- [V, index] « Engagement Ring - Semi Mount (226) », toutes en or 14 k, prix de 2 112 à 5 784 $ dans l'extrait. Source : extrait de https://www.cardinjewelers.com/collections/engagement-rings
- [V, index] Processus sur mesure : consultation en boutique ou virtuelle, puis « Design Development & 3D Mock-Up » ; « we provide in-house design ». Source : extrait de
  https://www.cardinjewelers.com/pages/custom-design

### 4. Amidon Jewelers (West Lebanon) — bloqué

- [V] `https://www.amidonjewelers.com/robots.txt` : HTTP 403, page « Verifying your connection... ».
- [V, index] « EXPLORE SETTINGS » vers `/pages/design-your-own-engagement-ring#/ring` ; « SEARCH DIAMONDS » vers la même page avec `#/diamond?dia_origin=LGN…` ; « Insured
  Shipping », « 30 Day Returns ». Source : extrait de https://www.amidonjewelers.com/
- [V, index] « Lab Grown Diamond Engagement », 70 produits, par exemple « Platinum Lab Grown Diamond Engagement Ring » à 3 200 $. Source : extrait de
  https://www.amidonjewelers.com/collections/lab-grown-engagement-rings
- [I] Même ville que Pearce : West Lebanon compte deux joailliers avec parcours en ligne.

### 5. Bellman Jewelers (Manchester) — bloqué

- [V] `https://bellmans.com/robots.txt` : HTTP 403, page « Verifying your connection... ».
- [V, index] « we 3D print your design for an in-person review. You'll even receive a copy of the wax model to keep » ; « completed in 2–3 weeks, with rush options » ; « Our custom
  design process is completely free » ; « three Graduate Gemologists ». Source : extrait de https://bellmans.com/pages/custom-jewelry
- [V, index] « we will generate a free 3D CAD (computer-aided design) video for your review » pour une pierre apportée ; « we ship all over the world » ; première mise à taille
  offerte. Source : extrait de https://bellmans.com/pages/bellmans-engagement-rings
- [V, index] Deux boutiques : 1650 Elm St., Manchester, et 268 Summer Street, Boston ; collection « Lab Grown ». Source : extrait de https://bellmans.com/
- [I] Siège supposé à Manchester (première adresse du site) ; non vérifié sur une page « About ».

### 6. Jewelry Creations (Dover) — bloqué

- [V] `https://jewelrycreationsinc.com/robots.txt` : HTTP 403, page « Verifying your connection... ».
- [V, index] Processus : « 1. Consultation 2. CAD Design 3. Refinement 4. 3D Wax Model 5. Creation ». Source : extrait de https://jewelrycreationsinc.com/pages/custom-jewelry-design-dover-nh
- [V, index] « including connections in Antwerp […] we will travel to Antwerp and hand-pick a diamond just for you ». Source : extrait de
  https://jewelrycreationsinc.com/pages/custom-engagement-rings-in-dover-nh
- [V, index] Services inclus : estimation, première mise à taille, rhodiage, sertissage sans frais, « no sales tax ». Source : extrait de
  https://jewelrycreationsinc.com/pages/engagement-rings-in-dover-nh

### 7. Richters Jewelry & Design Studio (Londonderry) — bloqué

- [V] `https://richtersjewelry.com/robots.txt` : HTTP 403, page « Verifying your connection... ».
- [V, index] Bagues à prix : « 14k Rose Gold Bezel Set Emerald Cut Lab Grown Diamond Solitaire Engagement Ring (0.73ct.) $1,299.00 » ; reprise du diamant « full purchase price ».
  Source : extrait de https://richtersjewelry.com/pages/engagement-rings
- [V, index] « Every diamond we sell is GIA certified, coming with a laser inscription » ; « © 2026 Richters Powered by GemFind ». [I] La
  formule sur le GIA cadre mal avec les bagues synthétiques de la même boutique (le GIA n'est pas le laboratoire habituel du synthétique). Source : extraits de https://richtersjewelry.com/pages/engagement-rings-in-londonderry-nh et https://richtersjewelry.com/

### 8. Exeter Jewelers (Exeter) — bloqué

- [V] `https://exeterjewelersnh.com/robots.txt` : HTTP 403, page « Verifying your connection... ».
- [V, index] « 14k White Gold Genuine IGI Certified Lab Grown 3.08 Carat Round Brilliant Cut Diamond Solitaire » à 2 895 $ ; « 14k Two Tone Lab Grown 2.89 Carat Radiant »
  à 3 495 $ ; « Family-Owned Jeweler Since 1979 », 101 Water Street. Source : extrait de https://exeterjewelersnh.com/

### 9. Newbury Gold & Silversmith (Seabrook)

- [V] « Book a visit to our Seabrook studio or a video consultation » ; « you can look at the design closely by email or in the studio. Once you approve the design, we print a
  wax model » ; « ship it to you with full insurance across New England » ; collections « on our eBay and Etsy shops ». Source : https://www.newburygoldandsilversmith.com/
- [V] « Choose your lab-grown diamond, pick your shape, setting, and metal, and our jewelers set, size, and finish your ring the same day » ; rapports « GIA, EGL, or IGI ».
  Source : https://www.newburygoldandsilversmith.com/lab-grown-diamonds-new-england
- [V] Clients cités de Boston à Bangor. Source : https://www.newburygoldandsilversmith.com/custom-engagement-rings
- [V] Le site propose aussi des « grillz » dentaires en or : [I] atelier généraliste, loin du positionnement de JR Diamond.

### 10. Naser Diamonds (Bedford) — partiel

- [V] Robots.txt : groupes « ClaudeBot », « Claude-User » et « Claude-SearchBot » en `Allow: /`. Accueil lisible (200). Source : https://www.naserdiamonds.com/robots.txt et
  https://www.naserdiamonds.com/
- [V] `https://www.naserdiamonds.com/catalog/engagement-ring/` et `https://www.naserdiamonds.com/diamonds/` redirigent vers `/verify.html?next=…` (page « Verifying... »,
  attente en JavaScript). Pas de nouvel essai dans un navigateur.

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Portsmouth Jewelers | Portsmouth | https://www.portsmouthjewelers.com/ | [V] Boutique WooCommerce (bijoux de créateurs à prix, par exemple 235 $) ; bagues de fiançailles et sur mesure en boutique, « All of our diamonds […] are GIA Graded », « No Sales Tax in NH ». Pas de bague en ligne relevée. |
| Capitol Craftsman Romance Jewelers | Concord | https://capitolcraftsman.com/engagement-rings-concord-nh.html | [V] Liste de marques (Benchmark, Jabel, Ostbye), « 0% financing », visite en boutique. Pas de vente en ligne relevée. |
| Gem Jewelers | Derry | https://www.gem-jewelers.com/ | [V, index] Site vitrine : sur mesure, diamants « Ideal cut », certificats GIA, AGS, IGI. Robots.txt lisible ; pages non lues. |
| Gems First | Concord | http://www.gems1st.com/ | [V, index] Atelier de création (cire perdue, CAO 3D) sur rendez-vous ; pas de vente en ligne. Robots.txt lisible ; pages non lues. |

## Écartés

- **Day's Jewelers** : 9 magasins au Maine et au New Hampshire, siège à Waterville (Maine) ; déjà classé premier dans `docs/concurrence/audit/us/maine/INVENTAIRE.md`
  (configurateur Gemist). [V, index] Page https://www.daysjewelers.com/pages/custom-engagement-ring-builder : fabrication « within 4 weeks », parcours en ligne centré sur le naturel.
- **Hannoush Jewelers** (Dover, Salem) : chaîne née au Massachusetts, « more than 50 company-owned and franchised stores » selon l'inventaire du Massachusetts ; hors périmètre.
- **Von Bargen's Jewelry** (Hanover) : maison du Vermont (atelier à Quechee, d'après sa page de Hanover, [V, index]) ; à traiter avec le Vermont.
- **Venazia** : pages « Custom Rings Bedford, NH » écrites pour le référencement local ; joaillier en ligne basé à Miami selon l'inventaire du Connecticut ; hors périmètre.
- [V] Aucun magasin d'enseigne nationale n'est retenu (consigne).

## Méthode et incidents

- Défi Shopify : les six robots.txt bloqués ont été demandés une seule fois chacun, en parallèle, à 23 h 24 UTC (heure du cache de l'outil). [S] Un contrôle déclenché par
  l'adresse du proxy de la session plutôt que par chaque boutique ; non vérifié. Aucune page de ces sites n'a été ouverte, ni par curl ni par navigateur.
- Pearce : `Crawl-delay: 2` respecté (3 s entre deux pages). Chemins interdits (`*/cart`, `*/login`, `*?kw=`…) non appelés ; le lien de menu `?kw=lab` n'a pas été suivi.
- White Box : pages lues dans Chromium ; `/cart`, `/wishlist`, `/account` non appelés.
- Aucune adresse avec paramètre interdite n'a été appelée ; aucun formulaire, questionnaire ou chat lancé ; pas d'audit mobile à ce stade (recensement).

## Sources

Pages lues le 24/11/2026 (HTTP 200 sauf mention) :

- Pearce Jewelers : https://www.pearcejewelers.com/robots.txt ; https://www.pearcejewelers.com/ ; https://www.pearcejewelers.com/pages/custom-engagement-rings ;
  https://www.pearcejewelers.com/pages/design-your-ring (curl et Chromium) ; https://www.pearcejewelers.com/pages/custom-ring-builder (redirection) ;
  https://www.pearcejewelers.com/pages/custom-band-builder ; https://www.pearcejewelers.com/jewelry/engagement-rings (Chromium) ; https://www.pearcejewelers.com/diamonds?labGrown=1 (Chromium)
- White Box Jewelers : https://whiteboxjewelers.com/robots.txt ; https://whiteboxjewelers.com/ (Chromium) ; https://whiteboxjewelers.com/ringsettings ;
  https://whiteboxjewelers.com/diamonds/lab ; https://whiteboxjewelers.com/custom-design (HTTP 404, contenu affiché) ; une fiche de monture (page-not-found)
- Newbury Gold & Silversmith : https://www.newburygoldandsilversmith.com/robots.txt ; https://www.newburygoldandsilversmith.com/ ;
  https://www.newburygoldandsilversmith.com/custom-engagement-rings ; https://www.newburygoldandsilversmith.com/lab-grown-diamonds-new-england
- Naser Diamonds : https://www.naserdiamonds.com/robots.txt ; https://www.naserdiamonds.com/ ; https://www.naserdiamonds.com/catalog/engagement-ring/ et
  https://www.naserdiamonds.com/diamonds/ (redirection vers `verify.html`)
- Non classés : https://www.portsmouthjewelers.com/robots.txt ; https://www.portsmouthjewelers.com/ ; https://www.portsmouthjewelers.com/services/engagement-rings-portsmouth-nh/ ;
  https://capitolcraftsman.com/robots.txt ; https://capitolcraftsman.com/engagement-rings-concord-nh.html ; https://www.gem-jewelers.com/robots.txt ; http://www.gems1st.com/robots.txt
- Bloqués (robots.txt en HTTP 403, « Verifying your connection... ») : https://www.cardinjewelers.com/robots.txt ; https://www.amidonjewelers.com/robots.txt ;
  https://bellmans.com/robots.txt ; https://richtersjewelry.com/robots.txt ; https://exeterjewelersnh.com/robots.txt ; https://jewelrycreationsinc.com/robots.txt
- Inventaires du dépôt consultés : `docs/concurrence/audit/us/maine/INVENTAIRE.md` (Day's, Hannoush), `docs/concurrence/audit/us/massachusetts/INVENTAIRE.md` (Hannoush),
  `docs/concurrence/audit/us/connecticut/INVENTAIRE.md` (Venazia), `docs/concurrence/audit/us/missouri/INVENTAIRE.md` (JewelerOS)

Recherches web génériques (Parallel Search, extraits seulement) :

- « New Hampshire jeweler engagement ring builder » ; « New Hampshire custom engagement rings online design your own » ; « Manchester NH jewelers engagement rings lab grown » ;
  « Portsmouth NH custom engagement ring jeweler » ; « Nashua NH jewelry store engagement rings » ; « Bedford NH jeweler engagement rings » ; « Portsmouth NH jeweler engagement
  rings shop online » ; « Keene NH jeweler custom engagement ring » ; « Concord NH engagement rings jeweler lab grown » ; « Salem NH jewelers design your own ring » ; « Laconia
  NH jeweler engagement rings custom » ; « New Hampshire 3D ring designer jeweler » ; « Londonderry NH jeweler engagement rings ».
- Requêtes limitées à un domaine (`site:`) pour les sites bloqués : cardinjewelers.com, amidonjewelers.com, bellmans.com, richtersjewelry.com, exeterjewelersnh.com,
  jewelrycreationsinc.com.
- Extraits cités : pages des six sites bloqués (adresses dans les fiches), https://www.daysjewelers.com/pages/custom-engagement-ring-builder,
  https://www.hannoush.com/pages/engagement-rings-dover-nh, https://vonbargensjewelry.com/pages/our-stores-hanover, https://www.venazia.com/custom-rings-bedford-nh,
  https://www.gem-jewelers.com/, http://www.gems1st.com/.
