# Nevada : inventaire des joailliers locaux qui vendent en ligne

Recensement du 24 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Nevada et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales, les grands magasins et les grandes maisons sont exclus.

Méthode : recherche web générique (Parallel Search) pour trouver les candidats, puis lecture des pages comme un visiteur ordinaire : curl avec son identité par défaut, puis un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée) pour les pages en JavaScript. Le robots.txt de chaque site a été lu avant ses pages (une exception, voir « Écart »). Au plus une page toutes les 2 secondes par site, 10 secondes pour The Jewelers (`Crawl-delay: 10`). Aucun formulaire rempli, aucun compte créé, aucun panier ouvert, aucun chat ouvert. Le seul contrôle actionné est le bouton « Solitaire » à l'étape 1 du concepteur de Michael & Son's. Aucune requête n'a contourné une protection.

Repères :

- **V** (vérifié) : page lue ou contrôle actionné le 24/11/2026, à l'adresse citée en section Sources ;
- **I** (inféré) : déduit d'un extrait de l'index de recherche ou de plusieurs indices ;
- **S** (supposé).

Les prix sont ceux affichés le 24/11/2026, en dollars américains.

## Constat général

- V : un seul configurateur 3D dans l'État : Michael & Son's Jewelers (Reno), avec l'outil JewelerOS, le même que chez Christopher Fine Diamonds et Z's Fine Jewelry en Arizona. Il est complété par deux constructeurs d'alliance de fournisseurs (Ava Coutures pour les femmes, Ring Designer Studio pour les hommes).
- V : un seul constructeur « monture puis diamant » : Morgan Taylor Jewelers (Las Vegas), sur la plateforme Belgium Webnet, avec 4 001 montures à prix affiché et une recherche de diamants naturels ou synthétiques.
- V : la plupart des autres sites sont des boutiques Shopify à prix affichés, alimentées par des catalogues de fournisseurs (Allison Kaufman, Overnight Mountings, Noam Carver, Gabriel & Co.). I : aucun de ces modèles ne vient d'un fichier de fabrication de l'atelier.
- V : le sur-mesure se fait partout en boutique, avec rendu CAO puis cire. Sky Diamonds est le plus transparent : « Custom rings starting at $1,800 », CAO en 24 à 48 heures, bague en 2 à 3 semaines.
- V : la concurrence du synthétique est forte à Las Vegas. Sky Diamonds en propose sur 32 de ses 71 bagues de fiançailles lues, MJ Christensen et BVW ont une rubrique dédiée, D&R House of Diamonds en fait un argument d'accueil.
- V : aucun site ne détaille la composition du prix (métal, façon, pierre) comme le prévoit JR Diamond. Le plus détaillé est Lyght : pierres de côté décrites (nombre, poids, couleur, pureté), « Center Diamond: Not Included ».

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Michael & Son's Jewelers | Reno | https://www.michaelandsonsjewelers.com | https://www.michaelandsonsjewelers.com/pages/custom-ring-builder | oui (JewelerOS, 4 étapes puis concepteur 3D ; constructeurs d'alliance femme et homme) | aucun (Punchmark, 200 ; `Crawl-delay: 2` respecté ; `/cart`, `/checkout` interdits, non visités) | Seul configurateur 3D de l'État. Étape 2 : bascule « Natural / Lab Grown » et 10 choix de forme (V). « Design your ring online in stunning 3D », pierre choisie en boutique, bague prête « in just a couple of weeks » (V). Catalogue de 485 bagues à prix affiché, « Ships in 7-10 Business Days » (V). Fabrication sur place (V). |
| 2 | Morgan Taylor Jewelers | Las Vegas | https://morgantaylorjewelers.net | https://morgantaylorjewelers.net/ringsettings | oui (constructeur Belgium Webnet : « Choose a Setting », « Choose a Diamond », « Complete Ring ») | aucun (200 ; `/cart`, `/checkout-shipping` interdits, non visités) | 4 001 montures à prix affiché, par exemple semi-monture or blanc 14 k, 1/2 ct de pavage, 4 605 $ (V). Recherche de diamants avec onglet « Lab-Grown », pierres naturelles jusqu'à 257 370 $ (V). Ni 3D ni vidéo vues (V). Depuis 1987 (V). |
| 3 | Sky Diamonds | Las Vegas (Town Square) | https://skydiamonds.com | https://skydiamonds.com/pages/custom-design | non (sur-mesure en boutique, CAO montrée à l'écran) | aucun (Shopify, 200) | Parcours sur mesure chiffré : dès 1 800 $, CAO en 24 à 48 heures, bague en 2 à 3 semaines, séance de CAO présentée comme « normally $300 », offerte (V). Naturel et synthétique : par exemple marquise synthétique de 3,02 ct, sous-halo, 5 036 $ (V). Plus de 300 bagues de fiançailles annoncées en stock (I). |
| 4 | Lyght Jewelers | Las Vegas (nord-ouest) | https://www.lyght.com | https://www.lyght.com/collections/explore-womens-engagement-rings | non (modèles maison à options ; sur-mesure par courriel) | aucun (Shopify, 200) | 35 montures maison (« Style LY… ») de 1 090 à 5 900 $, en or 14 ou 18 k, trois couleurs (V). Fiche détaillée : 14 à 20 pierres de côté, 0,07 à 0,17 ct, F/G, VS, « Center Diamond: Not Included » (V). Sur-mesure : croquis par courriel, devis gratuit, acompte, puis CAO ou cire (V). |
| 5 | BVW Jewelers | Reno | https://www.bvwjewelers.com | https://www.bvwjewelers.com/collections/engagement-rings | non (catalogue à options ; sélecteur de diamants synthétiques) | partiel : le sélecteur de diamants ne s'est pas affiché dans notre navigateur (pas de blocage du site) | Prix par métal sur la même fiche : 3 094 $ en 14 k, 3 300 $ en 18 k, 3 850 $ en platine (V). Au moins 250 bagues, surtout du catalogue Overnight Mountings (V) ; 702 produits annoncés (I). Pages dédiées au synthétique et au sur-mesure à Reno (V). |
| 6 | MJ Christensen Diamonds | Las Vegas | https://mjchristensen.com | https://mjchristensen.com/pages/engagement-rings | non (le bouton « Costumize my ring » mène à la page de sur-mesure) | aucun (Shopify, 200) | Au moins 250 bagues à prix affiché, de 150 à 159 725 $, marques Gabriel & Co., Hearts On Fire, Roman & Jules (V). Rubriques « Lab Grown Diamonds » (V). Sur-mesure en 4 étapes : rendu CAO 3D, maquette en cire à essayer, fonte (V). |
| 7 | Huntington Jewelers | Las Vegas (Summerlin) | https://www.huntingtonjewelers.com | https://www.huntingtonjewelers.com/collections/engagement-rings | non | aucun (Shopify, 200) | Au moins 250 bagues à prix affiché, 248 de la marque Allison Kaufman, de 1 695 à 402 600 $ (V). « 14-Day Returns », « Insured Shipping », depuis 1950 (V). Peu de synthétique : 5 produits dans la collection dédiée, aucune bague de fiançailles (V). |
| 8 | D&R House of Diamonds | Las Vegas (Downtown Summerlin) | https://dandrhouseofdiamonds.com | https://dandrhouseofdiamonds.com/custom-jewelry/ | non | **bloqué pour la boutique** : la boutique en ligne `dandrdiamonds.jewelershowcase.com` interdit tout robot (`Disallow: /`) ; site principal lisible | Bureau privé sur rendez-vous, avec les propriétaires (V). Modèle CAO conçu devant le client, puis bague vue « on your actual hand using our in-store viewing technology » (V). Diamants synthétiques mis en avant (V). Boutique hébergée sur Jeweler Showcase de Stuller (V) ; I : catalogue du fournisseur. |
| 9 | Forever Rox Fine Jewelry | Incline Village (lac Tahoe) | https://foreverrox.com | https://foreverrox.com/pages/custom-jewelry-design-near-reno-nv | non | aucun (Shopify, 200) | Un seul joaillier, John Roxburgh, à l'établi : CAO à valider, « Eighty percent or more » des pièces faites sur place, envoi assuré (V). La page critique les configurateurs (« pick a setting from a screen… ships to a factory ») (V). 106 bijoux de mariage à prix affiché (V). Diamants naturels seulement (V). |
| 10 | Honey & Goldies | Reno | https://www.honeyandgoldies.com | https://www.honeyandgoldies.com/collections/engagement | non (demande de pièce sur mesure) | aucun (Shopify, 200) | Petit atelier de bijoux faits main : 26 bagues de fiançailles et 7 alliances à prix affiché, de 390 à 6 390 $ (V). Fiches précises (qualité GH SI2-3, métal recyclé, délai de mise à taille de deux semaines) (V). Synthétique sur 5 fiches (V). |

## Écartés ou non retenus

- The Jewelers of Las Vegas (https://www.thejewelers.com, trois boutiques) : la page des bagues de fiançailles ne montre aucun prix ni produit (V). Sur-mesure en boutique seulement.
- Jeff White Custom Jewelry (https://www.jeffreywhite.com, Tivoli Village) : sur-mesure, « About 3–5 weeks », consultation possible à distance, synthétique proposé (V). Aucun prix (« no flat price ») ni vente en ligne (V).
- Jewel Trendz (https://jeweltrendz.com, Henderson et Summerlin-South) : site injoignable à deux reprises (délai dépassé, pas de réponse du serveur). Selon l'index de recherche, sur-mesure en 5 étapes (CAO, cire imprimée, fonte) et diamants synthétiques (I).
- Trigon Diamonds (https://www.trigondiamond.com, Wix) : boutique en ligne signalée (lien `/online-store`, V), non lue plus avant ; S : moins d'intérêt que les dix retenus.
- Venazia (pages « Las Vegas » et « Henderson ») : vendeur en ligne national (« The 1st Nationwide Online Jeweler », numéro en 305, I : Floride), hors périmètre.

## Écart à la règle

- D&R House of Diamonds : la page d'accueil de la boutique `dandrdiamonds.jewelershowcase.com` a été ouverte une fois dans notre navigateur, dans la même commande que la lecture de son robots.txt, avant d'avoir lu que celui-ci interdit tout le site (`User-agent: *` puis `Disallow: /`). Aucune autre page de ce domaine n'a été demandée. Le seul constat qui en vient est la liste des rubriques (« Customizable Designs », « Diamond Engagement Rings », « Wedding Bands ») : il porte la marque `[P1]` et ne doit pas servir à l'audit.

## Détail des constats par acteur

### 1. Michael & Son's Jewelers (Reno)

- V : 924 S Virginia Street, Reno, NV 89502 ; « Since 1983 », entreprise familiale.
- V : script `https://www.jeweleros.com/static/dist/jos.js` chargé sur la page du constructeur. Étape 1 (« Let's start designing your ring ») : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ». Après un clic sur « Solitaire », étape 2 (« Choose your center stone ») : « Natural / Lab Grown », 10 choix de forme et « Decide later ».
- V : https://www.michaelandsonsjewelers.com/pages/custom-engagement-rings : « Design your ring online in stunning 3D », « Pick out your center stone in our Reno, NV showroom ».
- V : constructeur d'alliance femme en iframe `avacoutures.com/retailer/eternity-ring-detail/…` ; constructeur d'alliance homme en iframe `ringdesignersstudio.com/apps/michael-and-sons/rings/…`.
- V : catalogue des bagues de fiançailles (rendu) : « 485 product(s) found », par exemple Noam Carver à 2 807 $, semi-monture solitaire à 1 899 $, « Ships in 7-10 Business Days ».
- V : page de sur-mesure : croquis, modèle CAO 3D, impression 3D possible, fonte et finition sur place.

### 2. Morgan Taylor Jewelers (Las Vegas)

- V : 7995 W Sahara Ave #103, Las Vegas, NV 89117 ; « since 1987 ». Site Belgium Webnet en application JavaScript (page vide sans rendu).
- V : accueil : « Create your Own Diamond Ring », « Start with a setting » (`/ringsettings`), « Start with a Diamond » (`/diamonds`).
- V : `/ringsettings` : étapes « Choose a Setting », « Choose a Diamond », « Complete Ring » ; « 4001 product(s) found » ; prix de 711 $ à 6 255 $ sur la première page.
- V : `/diamonds` : onglet « Lab-Grown » ; pierres naturelles, par exemple radiant de 10,01 ct J à 120 120 $.

### 3. Sky Diamonds (Las Vegas)

- V : 6539 S Las Vegas Blvd, Suite C112, Las Vegas, NV 89118 (Town Square).
- V : page de sur-mesure servie en iframes depuis `v0-sky-diamonds-e-commerce.vercel.app` : « Within 24-48 hours, see your exact ring as a stunning 3D CAD rendering », « Custom rings starting at $1,800 », « From Vision to Reality in 2-3 Weeks », « Choose your diamond (lab or natural) ».
- V : `collections/rings/products.json` (250 premiers produits) : 71 bagues de fiançailles de 1 136 à 26 981 $, dont 32 mentionnent le synthétique dans le titre ou les étiquettes.

### 4. Lyght Jewelers (Las Vegas)

- V : 10040 W. Cheyenne Ave, Suite 160, Las Vegas, NV 89129.
- V : fiche LY71933 : tailles à partir de 4 par demi-taille, matières « 14K White / Yellow / Rose Gold, 18K White / Yellow / Rose Gold » ; texte : platine aussi disponible.
- V : https://www.lyght.com/pages/custom-designs : « STEP 3: CAD/WAX RENDERING After quote approval, we secure a deposit ».

### 5. BVW Jewelers (Reno)

- V : 35 Foothill Road, Suite 3, Reno, NV 89511.
- V : fiche `oval-diamond-engagement-ring-4` : variantes « 14K Gold / White » 3 094 $, « 18K Gold / White » 3 300 $, « Platinum / White » 3 850 $.
- V : robots.txt : seul le robot Nutch est interdit sur tout le site ; `/cart` et `/checkout` interdits à tous (non visités).

### 6. MJ Christensen Diamonds (Las Vegas)

- V : 8980 W. Charleston Blvd., Las Vegas, NV 89117.
- V : https://mjchristensen.com/pages/custom-jewelry-center : « Step 2: Evolution … CAD … 3D jewelry rendering », « Step 3: Transformation … full-sized wax model ».

### 7. Huntington Jewelers (Las Vegas, Summerlin)

- V : 1990 Village Center Cir, Suite 6, Las Vegas, NV 89134 ; « since 1950 ».
- V : page de sur-mesure : « nothing is made until you love it » ; gravure à la main.

### 8. D&R House of Diamonds (Las Vegas)

- V : https://dandrhouseofdiamonds.com/engagement-rings/ : « Using CAD design software, we create a 3D model of your ring while you watch ». Aucun prix sur le site principal.
- V : le lien « ONLINE SHOP » mène à `https://dandrdiamonds.jewelershowcase.com/`, dont le robots.txt interdit tout.

### 9. Forever Rox Fine Jewelry (Incline Village)

- V : sur-mesure en six étapes (consultation, CAO, choix de la pierre, fabrication, présentation, retrait ou envoi assuré par Jewelers Mutual) ; pierre de famille acceptée.
- V : `collections/bridal-collection` : 106 produits de 650 à 475 000 $ ; aucune mention de synthétique.

### 10. Honey & Goldies (Reno)

- V : 115 Thoma St., Reno, NV 89501, ouvert le vendredi et le samedi.
- V : fiche type : « Made As Size 7- Please Allow Up To Two Weeks If Sizing Is Needed », « Recycled Metal ».

## Sources

Pages lues le 24/11/2026 (curl, ou Chromium pour les pages marquées « rendu ») :

- https://www.michaelandsonsjewelers.com/robots.txt ; https://www.michaelandsonsjewelers.com/ ; https://www.michaelandsonsjewelers.com/pages/custom-engagement-rings ; https://www.michaelandsonsjewelers.com/pages/custom-ring-builder (rendu, clic sur « Solitaire ») ; https://www.michaelandsonsjewelers.com/pages/womens-band-builder ; https://www.michaelandsonsjewelers.com/pages/mens-band-builder ; https://www.michaelandsonsjewelers.com/jewelry/engagement-rings (rendu) ; https://www.michaelandsonsjewelers.com/jewelry/engagement-rings/engagement-ring-settings
- https://morgantaylorjewelers.net/robots.txt ; https://morgantaylorjewelers.net/ (rendu) ; https://morgantaylorjewelers.net/ringsettings (rendu) ; https://morgantaylorjewelers.net/diamonds (rendu)
- https://skydiamonds.com/robots.txt ; https://skydiamonds.com/ ; https://skydiamonds.com/pages/custom-design (rendu, iframes comprises) ; https://skydiamonds.com/collections/rings/products.json?limit=250
- https://www.lyght.com/robots.txt ; https://www.lyght.com/ ; https://www.lyght.com/collections/explore-womens-engagement-rings/products.json?limit=250 ; https://www.lyght.com/collections/explore-womens-engagement-rings/products/oval-halo-engagement-modern-clean-ring-style-ly71933 ; https://www.lyght.com/pages/custom-designs
- https://www.bvwjewelers.com/robots.txt ; https://www.bvwjewelers.com/ ; https://www.bvwjewelers.com/collections/engagement-rings/products.json?limit=250 ; https://www.bvwjewelers.com/pages/loose-lab-diamonds-selector (rendu) ; https://www.bvwjewelers.com/pages/custom-jewelry-craftsmanship
- https://mjchristensen.com/robots.txt ; https://mjchristensen.com/pages/engagement-rings ; https://mjchristensen.com/pages/custom-jewelry-center ; https://mjchristensen.com/collections/all-engagement-rings/products.json?limit=250
- https://www.huntingtonjewelers.com/robots.txt ; https://www.huntingtonjewelers.com/ ; https://www.huntingtonjewelers.com/collections/engagement-rings/products.json?limit=250 ; https://www.huntingtonjewelers.com/collections/lab-grown-diamonds/products.json?limit=250 ; https://www.huntingtonjewelers.com/pages/custom-design (rendu)
- https://dandrhouseofdiamonds.com/robots.txt ; https://dandrhouseofdiamonds.com/ (rendu) ; https://dandrhouseofdiamonds.com/engagement-rings/ (rendu) ; https://dandrdiamonds.jewelershowcase.com/robots.txt ; https://dandrdiamonds.jewelershowcase.com/ (une fois, voir « Écart »)
- https://foreverrox.com/robots.txt ; https://foreverrox.com/ ; https://foreverrox.com/pages/custom-jewelry-design-near-reno-nv ; https://foreverrox.com/collections/bridal-collection/products.json?limit=250
- https://www.honeyandgoldies.com/robots.txt ; https://www.honeyandgoldies.com/ ; https://www.honeyandgoldies.com/collections/engagement/products.json?limit=250 ; https://www.honeyandgoldies.com/collections/wedding-bands/products.json?limit=250 ; https://www.honeyandgoldies.com/pages/engagement
- Écartés : https://www.thejewelers.com/robots.txt et https://www.thejewelers.com/jewelry/engagement-rings-las-vegas/ ; https://www.jeffreywhite.com/robots.txt et https://www.jeffreywhite.com/custom-engagement-rings ; https://www.trigondiamond.com/robots.txt et https://www.trigondiamond.com/ ; https://jeweltrendz.com/robots.txt (sans réponse).
- Recherche (I) : Parallel Search, requêtes génériques (« Las Vegas jeweler custom engagement ring design your own ring », « Reno Nevada jeweler engagement rings ring builder », etc.), extraits de jeweltrendz.com, venazia.com et skydiamonds.com.
