# Dakota du Sud : inventaire des joailliers locaux qui vendent en ligne

Recensement du 25 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Dakota du Sud et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales (Kay, Zales, Helzberg) et les grandes maisons sont exclus. Les enseignes régionales dont le siège est dans un autre État sont décrites à part (« Hors classement »), comme dans les inventaires du Dakota du Nord, du Montana et de l'Iowa.

Le marché est petit : Sioux Falls et Rapid City concentrent presque tous les joailliers repérés ; Aberdeen, Brookings et Spearfish en ont un chacun avec un site exploitable. La liste retient huit acteurs, dont un sans prix ni configurateur, comme le prévoit le cahier des charges quand les candidats sont peu nombreux. Riddle's Jewelry, que l'inventaire du Dakota du Nord renvoyait au Dakota du Sud, est classé ici : son siège et son usine sont à Rapid City.

Méthode :

- recherche des candidats par requêtes génériques (« Sioux Falls SD jeweler engagement rings », « Rapid City SD jewelry store », etc.) dans le moteur de recherche web ; Firecrawl n'était pas disponible (crédits épuisés) ;
- lecture du robots.txt de chaque site, groupe `User-agent: *` et groupes `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `anthropic-ai` lus à la main ;
- lecture des pages comme un visiteur ordinaire : curl avec un en-tête de navigateur Safari, et, pour les pages construites en JavaScript, le Chromium local de l'espace de travail (Playwright, sans écran, identité du navigateur laissée par défaut) ;
- une page à la fois par site, avec au moins 2 secondes entre deux pages (3 secondes chez Wink's et Heiser's, dont le robots.txt demande `Crawl-delay: 2`) ;
- dans les configurateurs, seuls des choix d'options ont été cliqués ; aucun formulaire rempli, aucun compte créé, aucun chat ouvert, aucun article mis au panier, aucune visite du panier.

Chaque fait porte une marque :

- **V** (vérifié) : page lue ou contrôle actionné le 25/11/2026, à l'adresse citée ;
- **I** (inféré) : déduit d'un extrait de moteur de recherche, d'un annuaire ou de plusieurs indices ;
- **S** (supposé).

Prix en dollars américains, tels qu'affichés.

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Riddle's Jewelry | Rapid City (siège et usine) ; magasins à Sioux Falls, Rapid City et ailleurs | https://www.riddlesjewelry.com | https://www.riddlesjewelry.com/pages/engagement-ring-builder | oui (4 étapes, photos) | aucun (robots.txt Shopify : `/cart`, `/checkout`, `/account` et filtres de tri interdits ; aucun groupe propre à Claude) | Constructeur « Diamond / Setting / Customize / Review » : 24 056 diamants, synthétiques certifiés IGI dès 350 $, option « provide my own Center stone » (V). Configuration inscrite dans l'adresse (V). 2 170 articles « bridal » avec prix et « Add to Cart » (V). Usine à Rapid City qui fabrique ses propres modèles (V). Enseigne régionale de plus de 60 magasins (V). |
| 2 | The Diamond Room by Spektor | Sioux Falls | https://www.thediamondroom.com | https://www.thediamondroom.com/apps/ringbuilder/settings/ | oui (GemFind, photos) | aucun (robots.txt Shopify : `Allow: /`, panier et paiement interdits) | 547 montures avec prix, dès 1 440 $ ; or 14 k et 18 k et platine (V). Recherche « Mined / Lab Grown » : 164 579 diamants synthétiques IGI, tous « Call for Price » (V). 541 bagues de fiançailles « from » 2 100 $ (V). Modèle 3D en CAO avant fabrication, fonte sur place, 4 à 6 semaines (V). Branche de gros Spektor Diamonds (V). |
| 3 | Faini Designs Jewelry Studio | Sioux Falls | https://www.fainidesigns.com | https://www.fainidesigns.com/custom-ring-builder/ | oui, annoncé en 3D (JewelerOS) ; non vu en fonctionnement | **partiel** : le catalogue (`/catalog/…`) redirige vers une page « Verifying... » (non contournée) ; le concepteur 3D n'a pas chargé (voir l'écart noté plus bas) | « Design your ring online in stunning 3D », puis choix de la pierre en magasin (V). Questionnaire en 4 étapes : style, pierre naturelle ou synthétique, forme, carat, délai (V). Procédé le plus détaillé de l'État : CAO, imprimantes 3D, cire, fonte sur place, sertissage à la main, 3 à 4 semaines, acompte de 20 % (V). |
| 4 | Heiser's Jewelry | Aberdeen | https://www.heisersjewelry.com | https://www.heisersjewelry.com/ringsettings | oui (3 étapes, photos) | aucun (robots.txt : `Crawl-delay: 2`, compte, panier et paiement interdits) | Constructeur « Choose a ring / Choose a diamond / Complete ring » : 248 montures avec prix, de 1 311 $ à plus de 7 000 $ (V). Menus « Natural Diamonds » et « Lab Grown Diamonds », mais la recherche affiche « 0 diamonds found » (V). Maison familiale fondée en 1973 (V). |
| 5 | Neugebauer's Jewelry, Design & Service | Rapid City | https://www.neugebauers.com | https://www.neugebauers.com/pages/custom-design | non | aucun (robots.txt Shopify : `Allow: /`) | 791 bagues de fiançailles et alliances avec prix, de 2 125 $ à plus de 7 000 $, mais « Inquire about this piece » au lieu d'un achat (V). Sur mesure dessiné en CAO, « you'll see it in three dimensions », fabriqué sur place (V). Prix ferme annoncé avant tout travail de dessin (V). Transformation de bijoux de famille, y compris à distance (V). Depuis 1945 (V). |
| 6 | Thomas James & Bechtold Jewelry | Sioux Falls | https://bechtoldjewelry.com | https://bechtolds-jewelers.myshopify.com/collections/bridal | oui, annoncé (« Made-to-Order », Jewelershowcase) ; non lu | **partiel** : l'outil « Made-to-Order » est intégré depuis `TJBJewelry-frame.jewelershowcase.com`, dont le robots.txt interdit tout (`Disallow: /`) ; non lu | Boutique en ligne : 59 bagues « bridal » avec prix et « Add to Cart » (V). Première mise à taille offerte, comme chez JR Diamond (V). Rubriques « Laboratory Diamonds » et « Lab-Grown Jewelry » (V). Plus ancienne bijouterie de Sioux Falls, racines en 1902 (V). |
| 7 | Wink's Fine Jewelry | Brookings | https://www.winksjewelry.com | https://www.winksjewelry.com/jewelry/bridal-jewelry/engagement-rings | non | aucun (robots.txt : `Crawl-delay: 2`, compte, panier et paiement interdits) | 317 bagues avec prix, dès 1 795 $ (V). Sur mesure en 3 temps : croquis, rendu CAO, fonte et sertissage (V). Menu « Lab Grown Diamonds », mais la recherche affiche « 0 diamonds found » (V). Depuis 1963 (V). |
| 8 | RMS Jewelers | Spearfish | https://rmsjewelers.com | https://rmsjewelers.com/bridal | non | aucun (robots.txt : seul `/new` est interdit) | Site vitrine : bagues en stock, « Custom Weddings Rings », « Handmade Wedding Bands », revendeur agréé Stuller (V). Ni prix ni boutique en ligne (V). Depuis 1981 (V). Seul joaillier indépendant des Black Hills du Nord repéré avec un site propre. |

## Détail par acteur

### 1. Riddle's Jewelry (Rapid City)

- V : la page https://www.riddlesjewelry.com/pages/about-us indique :
  - « Since 1959 », entreprise familiale, « over 60 stores in 10 states » ;
  - « From our headquarters in Rapid City, South Dakota, we operate a thriving factory that produces many of our own jewelry designs », dont les diamants Noventa® et le Black Hills Gold ;
  - usine ouverte à Rapid City en 1989.
- V : la page https://www.riddlesjewelry.com/pages/engagement-ring-builder (rendue dans Chromium) propose 4 étapes, « Diamond / Setting / Customize / Review » :
  - « Showing 20 Of 24056 Diamonds », filtres de forme, carat, taille, couleur, pureté, type de diamant et prix ;
  - premiers résultats : rond 0,26 ct, D, VVS2, « Labgrown », 350 $ ;
  - option « I want to provide my own Center stone ».
- V (contrôle actionné) : « Select » sur ce diamant ouvre sa fiche (« Certified: IGI », « View full certificate »). L'adresse porte alors toute la configuration (`configuration_id`, forme, carat, type, certificat…). « Select this diamond » passe à l'étape « Choose a Setting », qui affiche « Sorry, products not found » pour ce diamant de 0,26 ct. Métaux proposés en filtre : or 14 k et 18 k (jaune, blanc, rose) et platine. L'étape « Customize » n'a donc pas été vue.
- V : la page https://www.riddlesjewelry.com/pages/design-your-own-ring (redirigée vers `/pages/design-your-own-engagement-ring`) propose « Start with a diamond » ou « Start with a setting ». Montures « Starting at » 1 400 $, 1 499 $, 1 599 $, etc. ; alliances assorties « Made to match ».
- V : la page https://www.riddlesjewelry.com/collections/bridal compte « 2,170 Results » avec « Add to Cart ». Exemple : bague Adamante de 3-1/10 ct t.w. en diamants synthétiques, 5 714 $ barrés, 2 999 $ (« BLACK FRIDAY »).
- V : la page https://www.riddlesjewelry.com/pages/returns-exchanges exclut des retours « special order items or customized pieces ».
- V : aucune vue 3D ni 360° dans le constructeur rendu (aucun élément `canvas`).
- Intérêt : le constructeur le plus complet de l'État, avec des prix de pierres affichés et le synthétique mis en avant. C'est une enseigne régionale (plus de 60 magasins), pas un atelier indépendant ; sa fabrication n'est pas montrée commande par commande.

### 2. The Diamond Room by Spektor (Sioux Falls)

- V : magasin au 3501 W 57th Street, Sioux Falls, SD 57108, téléphone 605.362.0008 (pied de page de https://www.thediamondroom.com/apps/ringbuilder/settings/).
- V : la page https://www.thediamondroom.com/pages/about indique « Since 1996 », fondée par Alon Spektor et Dave Anderson, « backed by Spektor Diamonds' wholesale arm ».
- V : la page https://www.thediamondroom.com/apps/ringbuilder/settings/ (rendue dans Chromium) propose 3 étapes, « Choose your Setting / Choose your Diamond / Review Complete Ring » :
  - « 547 Settings » ; premières montures à 1 440 $, 1 930 $, 2 000 $, 2 080 $ ;
  - curseur de prix de 0 à 38 110 $ ;
  - métaux : or 14 k et 18 k (blanc, jaune, rose) et platine ;
  - mention « Powered by GemFind ».
- V : la page https://www.thediamondroom.com/apps/ringbuilder/diamondtools/diamondtype/navlabgrown affiche des onglets « Mined » et « Lab Grown ». Pour le synthétique : « 164579 Similar Diamonds », certificats IGI, et « Call for Price » sur chaque ligne lue.
- V : la page https://www.thediamondroom.com/collections/engagement-rings compte « 541 products », avec des prix « from » (4 850 $, 2 100 $, 3 450 $…).
- V : la fiche https://www.thediamondroom.com/collections/fana-engagement-ring/products/classic-diamond-engagement-ring-with-detailed-milgrain-band-9 affiche 3 450 $, des choix de titre (14 k, 18 k, platine) et de couleur, et « Ask a question » ; aucun bouton d'achat.
- V : la page https://www.thediamondroom.com/pages/custom-design décrit 3 étapes : inspiration, « 3D digital model… using state-of-the-art CAD technology », fonte sur place à la cire perdue et sertissage à la main. Délai : « about 4 to 6 weeks ». Elle se termine par un formulaire de contact, non rempli.
- I : un second magasin à Mitchell, 314 N Main St (extrait d'annuaire BBB cité par le moteur de recherche).
- Intérêt : bon parcours « monture → pierre » avec prix des montures, mais les pierres synthétiques sont sans prix. La 3D n'existe que dans l'échange sur mesure, pas en ligne.

### 3. Faini Designs Jewelry Studio (Sioux Falls)

- V : magasin au 6203 S. Old Village Place, Sioux Falls, SD 57108, téléphone (605) 339-6956 (https://www.fainidesigns.com/custom-ring-builder/).
- V : la page d'accueil https://www.fainidesigns.com/ annonce « Begin with our online 3D engagement ring builder, then visit our showroom », en trois temps : « Design your ring online in stunning 3D », « Pick out your center stone in our Sioux Falls showroom », « Finalize & order your ring ». Elle mentionne aussi des gemmologues diplômés du GIA et une maison fondée en 1950.
- V (contrôles actionnés) : la page https://www.fainidesigns.com/custom-ring-builder/ ouvre un questionnaire en 4 étapes :
  1. style (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ») ;
  2. pierre « Natural » ou « Lab Grown », puis 9 formes, marquise comprise ;
  3. carat, de 0,5 à 5 ;
  4. délai (« 1 - 4 weeks » à « 3 - 6 months »).
  Il annonce ensuite « our 3D Ring Designer ». Après la dernière réponse, la page affiche « Something went wrong Try again » : le concepteur 3D n'a pas été vu.
- V : le concepteur est fourni par JewelerOS (`www.jeweleros.com`, scripts `partner_config.js`). Ses appels à `https://www.jeweleros.com/api/…` ont échoué (erreur CORS dans la console du navigateur).
- V : la page https://www.fainidesigns.com/CustomDesigns/TheProcess/ détaille :
  - CAO, « in-house 3D printers, CNC mill and wax carvers », prototype à essayer avant la fonte ;
  - fonte sur place, avec l'or du client s'il le souhaite ;
  - sertissage à la main sous microscope ; gravure à la main ;
  - délai : « about three to four weeks from design approval » ;
  - paiement : « twenty percent (20%) minimum deposit » et paiement intégral des pierres importantes avant la CAO ; devis écrit valable 30 jours.
- V : la page https://www.fainidesigns.com/Diamonds/Lab-Grown-Diamonds/ présente une collection en diamants synthétiques et compare synthétique et naturel (dont « Lab-Grown diamonds will not hold their value »).
- V : `https://www.fainidesigns.com/catalog/bridal-engagement/` redirige vers `/verify.html?next=…`, page titrée « Verifying... ». Elle n'a pas été contournée : le catalogue et ses prix n'ont pas été vus.
- V : le robots.txt autorise `ClaudeBot`, `Claude-User` et `Claude-SearchBot` (`Allow: /`). Le groupe `*` interdit compte, panier, recherche et certains paramètres de tri.
- I : « Preferred StoneAlgo Partner », 433 avis (page https://stonealgo.com/local-jewelers/sioux-falls-sd).
- Intérêt : c'est le seul site de l'État qui promet une 3D en ligne, et c'est la description de fabrication la plus proche de « l'atelier en direct ». À revoir dans un navigateur ordinaire pour juger le concepteur 3D.

### 4. Heiser's Jewelry (Aberdeen)

- V : magasin au 506 South Harvard Street, Aberdeen (https://www.heisersjewelry.com/). La page d'accueil indique « Since 1973 » et une entreprise familiale de deuxième génération.
- V : la page https://www.heisersjewelry.com/ringsettings (rendue dans Chromium) propose 3 étapes, « Choose a ring / Choose a diamond / Complete ring » :
  - « 248 settings found » ; prix lus de 1 311,30 $ à 7 013,01 $ ;
  - filtres de style et de métal (or blanc, jaune, rose, platine).
- V : la recherche https://www.heisersjewelry.com/diamonds?labGrown=1 affiche « 0 diamonds found » et « No data available in table » après 10 secondes. L'étape du diamant semble donc vide (I).
- V : menus « Custom Projects », « Remounting & Redesign », « Bridal Consultations ».

### 5. Neugebauer's Jewelry, Design & Service (Rapid City)

- V : téléphone 605-348-4557, « The Black Hills' Family Jeweler Since 1945 » (https://www.neugebauers.com/).
- V : la page https://www.neugebauers.com/collections/engagement-rings compte « 791 products », avec prix (2 125 $, 6 933 $, 2 883 $…). Marques : Sylvie Bridal, A.JAFFE, CrownRing, etc.
- V : la fiche https://www.neugebauers.com/products/diamond-wave-wedding-ring-with-milgrain affiche 2 125 $ et « INQUIRE ABOUT THIS PIECE », sans bouton d'achat.
- V : la page https://www.neugebauers.com/pages/custom-design indique :
  - « We design your piece in CAD, so you'll see it in three dimensions long before we touch any gold » ;
  - « The setting and the final polish happen here, at our bench » ;
  - « you'll have a real number before any design work begins » ;
  - refonte de bijoux de famille, avec un témoignage d'un projet mené à distance.
- I : magasin au 601 Main St, Rapid City (extrait d'annuaire cité par le moteur de recherche).

### 6. Thomas James & Bechtold Jewelry (Sioux Falls)

- V : téléphone (605) 332-7151 ; « Established 1902 – Downtown Sioux Falls » ; le texte se présente comme « the oldest jewelry store in Sioux Falls and South Dakota » (https://bechtoldjewelry.com/).
- V : la boutique est sur un domaine Shopify distinct. La page https://bechtolds-jewelers.myshopify.com/collections/bridal (rendue dans Chromium) compte « In stock (46) » et « Out of stock (13) ». Exemples : 4 124 $, 1 845 $, 5 988 $.
- V : la fiche https://bechtolds-jewelers.myshopify.com/products/platinum-princess-cut-diamond-engagement-ring-g1432 affiche 4 124 $, « ADD TO CART » (non cliqué) et un choix de taille. Elle précise : « The first resizing is complimentary ».
- V : la page https://bechtoldjewelry.com/services/jeweler-showcase/ intègre `https://TJBJewelry-frame.jewelershowcase.com`. Le robots.txt de ce sous-domaine contient `User-agent: *` / `Disallow: /` : l'outil n'a pas été lu.
- V : rubriques « Laboratory Diamonds » et « Lab-Grown Jewelry », et un article sur la différence entre synthétique et naturel.
- I : délai moyen d'une bague de fiançailles de 1 à 2 semaines (fiche WeddingWire citée par le moteur de recherche).

### 7. Wink's Fine Jewelry (Brookings)

- V : magasin au 322 5th St, Brookings, SD 57006 (https://www.winksjewelry.com/).
- V : la page https://www.winksjewelry.com/pages/about-us indique « in business since 1963 ».
- V : la page https://www.winksjewelry.com/jewelry/bridal-jewelry/engagement-rings (rendue dans Chromium) compte « 317 product(s) found », avec prix (1 795 $, 1 850 $, 2 395 $…). Filtres : or 14 k et 18 k, platine ; marques A. Jaffe, Allison Kaufman, Ostbye.
- V : la recherche https://www.winksjewelry.com/diamonds?labGrown=1 affiche « 0 diamonds found ». L'adresse `/ringsettings`, présente chez Heiser's sur la même plateforme, répond 404.
- V : la page https://www.winksjewelry.com/pages/custom-jewelry décrit croquis, rendu CAO et « complete manufacturing service », dont la refonte de pièces de famille.
- I : profil dans la série « 50 Jewelers / 50 States » de National Jeweler (2017), qui cite la concurrence des achats en ligne comme principal défi.

### 8. RMS Jewelers (Spearfish)

- V : magasin au 508 N. Main St, Spearfish, SD 57783, téléphone 605-642-7387 (https://rmsjewelers.com/bridal).
- V : « serving Spearfish and Northern Hills… since 1981 », « authorized Stuller dealer » ; rubriques « Custom Weddings Rings », « Handmade Wedding Bands », « Repurposed Jewelry ».
- V : aucun prix ni panier sur les pages lues.

## Hors classement

### Enseignes régionales dont le siège est hors du Dakota du Sud

| Acteur | Salle au Dakota du Sud | Adresse | Constat |
|---|---|---|---|
| Greenberg's Jewelers | Sioux Falls, 4829 S Louise Ave (I, annuaires) | https://www.greenbergsjewelers.com/design-your-ring/ | V : la page https://www.greenbergsjewelers.com/company/about-us/ indique un premier magasin ouvert en 1900 à Sioux City (Iowa) et « seven locations in Iowa, Nebraska and South Dakota ». Elle revendique aussi l'achat des diamants « direct from the cutters in Belgium ». V : menu « Design Your Ring », diamants « Natural » et « Lab Grown ». La page du constructeur a répondu 200, mais son contenu n'a pas été analysé au-delà du menu. V : le robots.txt autorise `ClaudeBot`, `Claude-User` et `Claude-SearchBot`. Même plateforme que Faini (même robots.txt, I) : son catalogue peut aussi passer par une page de vérification (S). À auditer avec l'Iowa. |
| Gunderson's Jewelers | Sioux Falls (I, pied de page lu dans l'inventaire du Dakota du Nord) | https://gundersons.com/collections/engagement-rings | Déjà décrit dans les inventaires de l'Iowa et du Dakota du Nord. Non relu ici. |

### Sites lus, moins pertinents ou écartés

- **Jewelry Black Hills Gold** (https://jewelryblackhillsgold.com) : V, boutique en ligne de bijoux Black Hills Gold, dont des bagues, avec un délai de « 15 to 20 business days ». Mais la page https://jewelryblackhillsgold.com/pages/our-story présente un distributeur de la côte Est, pas un joaillier du Dakota du Sud. Écarté.
- **Landstrom's** (Black Hills Gold, Rapid City) : `landstroms.com` redirige vers une page de catégorie de `trjconcepts.com`, un site de vente en gros (WooCommerce B2B) (V). Aucun site de vente aux particuliers trouvé. I : l'usine « Mt. Rushmore Black Hills Gold » du 2707 Mt. Rushmore Road réunit Landstrom's et Riddle's (blackhillsbadlands.com, cité par le moteur).
- **Raymond Jewelers** (https://www.raymondjewelers.com) : V, le site n'est plus qu'un blog de remerciements (« RaymondJewelers.com from 1953 through 2015 »). Son lien avec Sioux Falls n'est pas établi (S). Écarté.
- **Gold Mine** (annuaire de Sioux Falls) : V, `goldminejewelers.com` est une boutique hors taxes des Caraïbes, homonyme. Aucun site du magasin de Sioux Falls trouvé.
- **Makepeace Jewelers** (Watertown), **Kline's Jewelry** (Yankton) : aucun site propre trouvé. `makepeacejewelers.com` et `klinesjewelry.com` ne répondent pas (V). I : Makepeace a deux bijoutiers sur place (visitwatertownsd.com) ; Kline's revendique 1884 (willyou.net).
- **Stamper Black Hills Gold**, **Spektor Diamonds**, **Nasser's Jewelry**, **Moissanite Fine Jewelry** (Sioux Falls) : aucun site propre trouvé. Les domaines essayés (`stamperbhg.com`, `stamperblackhillsgold.com`, `spektordiamonds.com`, `nassersjewelry.com`) ne répondent pas (V).
- **Kay, Zales, Helzberg** (Sioux Falls, Rapid City, Watertown) : chaînes nationales, exclues par le cahier des charges.

## Écart à signaler

- Faini Designs : le concepteur 3D est un module de JewelerOS intégré à la page. En chargeant https://www.fainidesigns.com/custom-ring-builder/ dans Chromium, le navigateur a appelé de lui-même `https://www.jeweleros.com/api/config/…` et `/api/widget/config/…`. Or le robots.txt de `www.jeweleros.com` interdit `/api/` (V, lu après coup). Il y a eu six chargements de la page (rendu initial, parcours du questionnaire, un chargement de diagnostic). Tous ces appels ont échoué (erreur CORS) : aucun contenu de `jeweleros.com` n'a été obtenu ni exploité. Après la lecture de ce robots.txt, la page n'a plus été chargée.

## Enseignements pour JR Diamond

- Configurateurs en marque blanche : comme au Dakota du Nord et au Montana, les constructeurs vus sont des outils loués : GemFind chez The Diamond Room, Jewelershowcase (Stuller) chez Bechtold, JewelerOS chez Faini (V), outil de la plateforme du site chez Heiser's (I). Aucun ne montre de 3D issue du fichier de fabrication du joaillier. Seul Faini annonce une 3D en ligne, et elle n'a pas pu être vue.
- Constructeurs incomplets : chez Heiser's et Wink's, la recherche de diamants est vide (« 0 diamonds found », V). Chez Riddle's, aucune monture n'est proposée pour un petit diamant synthétique de 0,26 ct (V). Chez The Diamond Room, les 164 579 pierres synthétiques sont « Call for Price » (V). Un parcours qui va jusqu'à une pierre réelle, filmée et chiffrée reste un écart net.
- Transparence du prix : les prix des montures et des bagues sont affichés presque partout (Riddle's, Diamond Room, Heiser's, Neugebauer's, Bechtold, Wink's ; V). Personne ne les détaille poste par poste. Les meilleures formulations sont chez Neugebauer's (« a real number before any design work begins », V) et chez Faini (acompte de 20 %, devis écrit valable 30 jours, V).
- Fabrication montrée : Faini (CAO, impression 3D, cire, fonte, sertissage), The Diamond Room (CAO, fonte sur place) et Neugebauer's (« at our bench ») décrivent leur atelier (V). Aucun site lu ne propose de suivre sa propre commande en photos ou en vidéo (I, d'après les pages lues).
- Délais : 3 à 4 semaines chez Faini et 4 à 6 semaines chez The Diamond Room après validation du dessin (V), contre 14 jours ouvrés chez JR Diamond.
- Synthétique : présent chez tous les classés sauf Neugebauer's et RMS (V pour les menus et rubriques). Riddle's en fait un argument de prix (pierres dès 350 $, bagues Adamante en promotion, V). Faini le décrit avec réserve (« will not hold their value », V).
- Après-vente : Bechtold offre la première mise à taille (V), comme JR Diamond.
- Bijoux de famille : la refonte est proposée par Neugebauer's (y compris à distance), Wink's, Heiser's, RMS et Faini, qui peut refondre l'or du client (V). C'est un point de comparaison direct pour la page « Bijou de famille ».

## Sources

Pages lues le 25/11/2026 (code 200 sauf mention contraire) :

- Riddle's : https://www.riddlesjewelry.com/robots.txt, https://www.riddlesjewelry.com/, https://www.riddlesjewelry.com/pages/about-us, https://www.riddlesjewelry.com/pages/engagement-ring-builder (et ses états `#/diamond?…` et `#/products?…` après clic), https://www.riddlesjewelry.com/pages/design-your-own-engagement-ring (redirection de `/pages/design-your-own-ring`), https://www.riddlesjewelry.com/pages/returns-exchanges, https://www.riddlesjewelry.com/collections/bridal
- The Diamond Room : https://www.thediamondroom.com/robots.txt, https://www.thediamondroom.com/, https://www.thediamondroom.com/apps/ringbuilder/settings/, https://www.thediamondroom.com/apps/ringbuilder/diamondtools/diamondtype/navlabgrown, https://www.thediamondroom.com/collections/engagement-rings, https://www.thediamondroom.com/collections/engagement-rings/products.json?limit=250 (lue, chiffres non repris), https://www.thediamondroom.com/collections/wedding-rings, https://www.thediamondroom.com/collections/fana-engagement-ring/products/classic-diamond-engagement-ring-with-detailed-milgrain-band-9, https://www.thediamondroom.com/pages/custom-design, https://www.thediamondroom.com/pages/about, https://www.thediamondroom.com/pages/return-policy (404)
- Faini Designs : https://www.fainidesigns.com/robots.txt, https://www.fainidesigns.com/, https://www.fainidesigns.com/custom-ring-builder/, https://www.fainidesigns.com/CustomDesigns/TheProcess/, https://www.fainidesigns.com/Diamonds/Lab-Grown-Diamonds/, https://www.fainidesigns.com/catalog/bridal-engagement/ (redirigée vers la page « Verifying... »), https://www.fainidesigns.com/about/history/ (404), https://www.jeweleros.com/robots.txt
- Heiser's : https://www.heisersjewelry.com/robots.txt, https://www.heisersjewelry.com/, https://www.heisersjewelry.com/ringsettings, https://www.heisersjewelry.com/diamonds?labGrown=1
- Neugebauer's : https://www.neugebauers.com/robots.txt, https://www.neugebauers.com/, https://www.neugebauers.com/collections/engagement-rings, https://www.neugebauers.com/products/diamond-wave-wedding-ring-with-milgrain, https://www.neugebauers.com/pages/custom-design
- Thomas James & Bechtold : https://bechtoldjewelry.com/robots.txt (atteinte aussi par la redirection de thomasjamesjewelers.com), https://bechtoldjewelry.com/, https://bechtoldjewelry.com/services/jeweler-showcase/, https://bechtolds-jewelers.myshopify.com/robots.txt, https://bechtolds-jewelers.myshopify.com/collections/bridal, https://bechtolds-jewelers.myshopify.com/products/platinum-princess-cut-diamond-engagement-ring-g1432, https://tjbjewelry-frame.jewelershowcase.com/robots.txt (seule page lue sur ce sous-domaine)
- Wink's : https://www.winksjewelry.com/robots.txt, https://www.winksjewelry.com/, https://www.winksjewelry.com/jewelry/bridal-jewelry/engagement-rings, https://www.winksjewelry.com/diamonds?labGrown=1, https://www.winksjewelry.com/ringsettings (404), https://www.winksjewelry.com/pages/custom-jewelry, https://www.winksjewelry.com/pages/about-us
- RMS : https://rmsjewelers.com/robots.txt, https://rmsjewelers.com/, https://rmsjewelers.com/bridal
- Greenberg's : https://www.greenbergsjewelers.com/robots.txt, https://www.greenbergsjewelers.com/, https://www.greenbergsjewelers.com/company/about-us/, https://www.greenbergsjewelers.com/design-your-ring/
- Écartés : https://jewelryblackhillsgold.com/robots.txt, https://jewelryblackhillsgold.com/, https://jewelryblackhillsgold.com/pages/our-story ; https://landstroms.com/robots.txt (redirigée vers trjconcepts.com), https://trjconcepts.com/robots.txt, https://trjconcepts.com/ ; https://www.raymondjewelers.com/robots.txt, https://www.raymondjewelers.com/ ; https://www.goldminejewelers.com/ ; sans réponse : winksfinejewelry.com, neugebauersjewelry.com, neugebauersfinejewelry.com, mtrushmorebhg.com, mtrushmoregold.com, stamperbhg.com, stamperblackhillsgold.com, spektordiamonds.com, thediamondroombyspektor.com, makepeacejewelers.com, klinesjewelry.com, nassersjewelry.com

Annuaires et extraits de moteur de recherche, utilisés pour les faits marqués I et pour trouver les candidats :

- https://willyou.net/jewelry-stores/sd/sioux-falls, https://willyou.net/jewelry-stores/sd/rapid-city, https://willyou.net/jewelers/gold-mine-sioux-falls-sd, https://willyou.net/jewelers/moissanite-fine-jewelry-sioux-falls-sd, https://willyou.net/jewelers/klines-jewelry-yankton-sd, https://willyou.net/jewelers/makepeace-jewelers-watertown-sd
- https://stonealgo.com/local-jewelers/sioux-falls-sd
- https://www.nationaljeweler.com/articles/2043-50-jewelers-50-states-south-dakota
- https://www.weddingwire.com/biz/thomas-james-and-bechtold-jewelry/6a48142eddc2cdc8.html
- https://bbb.org/us/sd/category/jewelry-designers (fiche de The Diamond Room à Mitchell, extrait)
- https://www.blackhillsbadlands.com/business/mt-rushmore-gold-diamond-factory-outlet, https://www.travelsouthdakota.com/rapid-city/arts-culture-history/art-gallerydisplay/mt-rushmore-black-hills-gold-factory-tour
- https://visitwatertownsd.com/?p=1827
- https://www.theknot.com/marketplace/neugebauers-fine-jewelry-rapid-city-sd-872567, https://wanderlog.com/place/details/5966609/neugebauers-fine-jewelry
