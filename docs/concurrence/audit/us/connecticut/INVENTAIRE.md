# Inventaire des joailliers : Connecticut

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun
formulaire rempli ni envoyé, aucun compte créé, aucun chat ouvert, au plus une page toutes les 2 secondes par site (10 s pour les sites qui demandent un délai de 10 s).

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié), **[sec.]** lu sur une source secondaire
(annuaire, article, extrait de moteur de recherche). Les prix sont ceux affichés le 15/11/2026, en dollars américains. Lecture : curl avec un en-tête Safari (convention du
dépôt), plus Firecrawl (proxy de base, sans mode furtif) pour les pages construites en JavaScript.

## Constat général

- [V] Le Connecticut compte beaucoup de joailliers familiaux bien notés, mais peu de vrais configurateurs. Trois sites seulement proposent un parcours de composition en
  ligne : Rumanoff's (monture, puis pierre, puis bague), Lenox Jewelers (configurateur 3D de la marque FANA, intégré) et Sterling Jewelers de Wethersfield (constructeur
  fourni par un tiers, en iframe).
- [V] L'outil le plus original est celui de Diamond Designs (Orange) : un questionnaire de 13 étapes, « AI-powered », qui transforme les choix (naturel ou synthétique,
  forme, carat, monture, métal, budget, date) en un concept dessiné par l'atelier. Il n'y a ni panier ni prix calculé : la suite se fait en boutique, devant les pierres.
- [V] Le discours le plus proche de « l'atelier en direct » vient de NAGI Jewelers (Stamford) et de Jewelry Designs (Danbury). NAGI montre un rendu 3D sous tous les angles,
  puis un modèle en cire à essayer, et affirme « Your project is never outsourced ». Chez Jewelry Designs, le client traverse l'atelier en entrant dans la boutique.
- [I] La 3D vue ici est toujours celle d'un fabricant de montures (FANA via Mesh3D, Benchmark pour les alliances). Aucun site ne montre la bague réellement fabriquée en 3D
  avant l'achat. C'est l'écart que JR Diamond peut occuper.
- [V] Le synthétique est partout, sauf chez Lux Bond & Green, qui le refuse par principe (page « Synthetic Diamonds »). Diamond Designs est le plus franc sur la revente :
  il rachète le naturel au prix d'origine et ne rachète pas le synthétique.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Diamond Designs | Orange | https://www.dia-designs.com/ | https://www.dia-designs.com/pages/design-your-ring | oui (questionnaire guidé, sans 3D ni panier) | non | [V] « Online ring builder » en 13 étapes (outil ShowroomPro) : photo d'inspiration, naturel ou synthétique, forme, carat, monture, métal, largeur, hauteur, détails libres, taille, budget, date. Explique l'écart de revente entre naturel et synthétique. Montures à prix affiché (2 314 $, 2 550 $), livraison gratuite, retours sous 21 jours. |
| 2 | Lenox Jewelers | Fairfield | https://lenox-jewelers.com/ | https://lenox-jewelers.com/pages/design-the-one | oui (3D de la marque FANA, intégrée) | non | [V] « FANA Custom Ring Designer » intégré par Mesh3D, plus un essayage virtuel. 75 bagues de fiançailles à prix affiché (exemples à 3 390 et 5 290 $ ; maximum 10 690 $). [I] C'est le comparateur direct d'un configurateur 3D, mais le modèle est celui du fabricant, pas la pièce de l'atelier. |
| 3 | NAGI Jewelers | Stamford | https://nagijewelers.com/ | https://nagijewelers.com/pages/stamford-custom-jewelry-designs | non (sur mesure : rendu 3D, puis cire) | non | [V] Rendu 3D « from every angle », modèle en cire « to touch, hold, and wear », « never outsourced », maîtres joailliers présentés avec leur photo, filigrane et gravure à la main. Bagues à prix affiché (1 900 à 2 800 $ en page 1). Le discours le plus proche de JR Diamond sur la fabrication. |
| 4 | Rumanoff's Fine Jewelry & Design | Hamden [sec.] | https://www.rumanoffs.com/ | https://www.rumanoffs.com/create-your-ring | oui (monture, puis pierre, puis bague) | partiel : robots.txt interdit ClaudeBot (voir Méthode) | [V] Constructeur en 3 étapes, 1 223 montures, prix affichés (Tacori de 3 490 à 5 590 $, « Special order »). Pages diamants naturels et synthétiques, sur-mesure, FANA. Plateforme Build.Shop. Pas de 3D relevée. |
| 5 | Jewelry Designs | Danbury | https://jewelrydesigns.com/ | https://jewelrydesigns.com/design-your-own/ | non (formulaire, téléphone, visio) | non | [V] Le client traverse l'atelier en entrant. Le site décrit la CAO, l'impression en cire et la fonte. Conception à distance par téléphone ou en visio, validée sur photos. 287 bagues en catalogue, sans prix ([I], aucun prix dans la page). Sur mesure depuis 1980. |
| 6 | Sterling Jewelers (indépendant de Wethersfield) | Wethersfield | https://www.shopsterlingjewelers.com/ | https://www.shopsterlingjewelers.com/pages/engagement-ring-builder | oui (outils tiers en iframe) | partiel : le domaine de l'iframe interdit tout robot | [V] « Build Your Ring » (iframe d'un catalogue tiers sur jewelershowcase.com), « Build Your Band » (iframe Ava Couture), recherche de diamants filtrable par forme, prix, carat, synthétique et origine. Montures « for natural or lab-grown center stones ». [I] Sans lien avec Sterling Jewelers Inc. (Signet). |
| 7 | Michaels Jewelers | Waterbury et 10 autres villes du Connecticut | https://michaelsjewelers.com/ | https://michaelsjewelers.com/pages/diamond-search | partiel (recherche de diamants VDB) | non (Firecrawl a échoué, curl 200) | [V] Chaîne régionale : 11 villes listées sur le site. Recherche de diamants par l'application VDB, page « Lab Grown Diamonds », pages FANA et Sylvie. Bagues à prix affiché (1 221 à 2 950 $ en page 1). [sec.] « Access to over 150 CAD designers », visuel 3D sous quelques jours. |
| 8 | Becker's Diamonds & Fine Jewelry | West Hartford, Old Saybrook | https://beckers.com/ | https://beckers.com/collections/engagement-rings | non | non | [V] 1 929 bagues de fiançailles à prix affiché (maximum 74 800 $). Sur-mesure en 4 étapes, avec envoi des rendus CAO ou de la cire pour validation. Synthétique proposé depuis 2017. [sec.] Le synthétique ferait 70 % des ventes de mariage. |
| 9 | Cellini Design Jewelers | Orange [sec.] | https://www.cellinidesignjewelers.com/ | https://www.cellinidesignjewelers.com/benchmark-ring-lab | partiel (alliances Benchmark, recherche de diamants) | non | [V] « Benchmark Ring Lab » : alliance configurable (profil, bords, matières, largeur, taille, pierres, gravure). Recherche de diamants naturels ou synthétiques (`/diamonds?labGrown=1`), montures Sylvie. Pas de constructeur de bague de fiançailles relevé. |
| 10 | Baribault Jewelers | Glastonbury [sec.] | https://baribaultjewelers.com/ | https://baribaultjewelers.com/engagement-rings/ | non | non | [V] Modèles à personnaliser et « 100% custom » sur rendez-vous. Prix « From » (Tacori, de 3 069 à 5 049 $). Marque propre de synthétique, « B Lab ». [V] L'ancien domaine baribault.com renvoie vers une page `/lander` ([I] domaine parqué). |

## Fiches

### 1. Diamond Designs (Orange)

- [V] La page `design-your-ring` dit : « Answer a few questions about the stone, the style, and the details, and our online ring builder will turn it into a real concept.
  It is free and only takes about 2 minutes ». Le bandeau indique « 2-min quiz · AI-powered · 10,000+ designs », « Powered by ShowroomPro ». La FAQ précise « Thirteen short
  steps, and you can go back and change anything before you submit ». Source : https://www.dia-designs.com/pages/design-your-ring (rendu lu par Firecrawl).
- [V] Le parcours : photo d'une bague aimée (facultative) ; pierre (« natural or lab-grown », forme, carat) ; monture (solitaire, halo, trois pierres, pavé, torsadée, corps
  fendu), métal, largeur, hauteur de la pierre ; détails libres (milgrain, martelé, filigrane, pierre cachée) ; taille, budget, date. Ensuite : « you come into the store,
  see the actual stones in the range you picked, and we refine the design with you before anything is made ». Le questionnaire n'a pas été lancé.
- [V] Engagements affichés : rachat d'un diamant naturel « at the full original purchase price » contre une pierre plus grosse ; synthétique : « we do not buy them back » ;
  « A GIA graduate on site » ; garantie limitée à vie ; nettoyage gratuit ; « since 2002 ». Bandeau : « Free Shipping & 21-Day Returns », « Financing Available ».
- [V] Montures (« semi-mounts ») à prix affiché, par exemple 2 314 $ et 2 550 $ ; menu de budgets de 500 $ à plus de 10 000 $. Source :
  https://www.dia-designs.com/collections/engagement-ring-mountings
- [I] Pour JR Diamond : la référence sur la franchise du discours synthétique ou naturel, et sur un parcours guidé qui aboutit à une demande plutôt qu'à un panier, comme le
  devis de JR Diamond. La faiblesse est l'absence de visuel : le client ne voit rien avant le retour de l'atelier.

### 2. Lenox Jewelers (Fairfield)

- [V] Texte de la page : « Use the FANA Custom Ring Designer below to design your dream engagement ring right in front of your eyes. Use the Virtual Try-On feature to see
  beautiful FANA jewelry on you ». Le HTML contient `<div id="mesh3d-viewer" data-source="fana.jeweler.io" data-client="www.fanajewelry.com">` et le script
  `https://app.mesh3d.com/api/configurator/v1/embed.js`. La page porte `robots: noindex,nofollow`. Source : https://lenox-jewelers.com/pages/design-the-one
- [V] Le contenu du visualiseur (chargé en JavaScript depuis Mesh3D) n'a pas été lu. [S] On ignore donc si un prix s'y calcule.
- [V] 75 bagues de fiançailles en stock, prix le plus haut 10 690 $, exemples à 3 390 $ et 5 290 $. Source : https://lenox-jewelers.com/collections/engagement-rings
- [V] « A Legacy of Trust Since 1940 », famille propriétaire, revendeur Rolex (horloge officielle intégrée). Source : https://lenox-jewelers.com/

### 3. NAGI Jewelers (Stamford)

- [V] « Our artists will sketch some concepts, and then produce a computerized rendering of your design, allowing you to view it in 3-D, from every angle […] our jeweler
  creates a wax model, allowing you to actually touch » ; « Your project is never outsourced » ; deux maîtres joailliers présentés avec leur photo ; filigrane fabriqué et
  gravure faite à la main. Source : https://nagijewelers.com/pages/stamford-custom-jewelry-designs
- [V] « Located in Stamford and family-owned for two generations » ; bijoux de créateurs, montres suisses, pièces anciennes. Source : https://nagijewelers.com/
- [V] Bagues et alliances à prix affiché (1 900 à 2 800 $ en page 1), filtres de prix de moins de 500 $ à plus de 5 000 $. Source : https://nagijewelers.com/collections/bridal
- [I] Aucune mention du synthétique dans la page de la collection mariage. [sec.] The Knot cite aussi une boutique à Greenwich ; le site ne parle que de Stamford.

### 4. Rumanoff's Fine Jewelry & Design (Hamden)

- [V] La page `create-your-ring` affiche « 1 Choose Your Setting · 2 Choose Your Diamond · 3 Complete Your Ring », 1 223 articles, et des montures Tacori de 3 490 à
  5 590 $ (« Availability: SPECIAL ORDER »). Pied de page : « Jewelry Website Platform by Build.Shop ». Source : https://www.rumanoffs.com/create-your-ring (rendu Firecrawl)
- [V] L'accueil renvoie vers « Customize Your Ring » (même page), `/lab-grown-diamonds`, `/natural-diamonds`, `/custom-design`, `/fana`, et des tranches de prix des
  bagues (jusqu'à 500 $, puis jusqu'à plus de 5 000 $). Source : https://www.rumanoffs.com/
- [V] Le robots.txt (géré par Cloudflare) dit « User-agent: * / Content-Signal: search=yes,ai-train=no,use=reference / Allow: / ». Il interdit tout (« Disallow: / ») à
  ClaudeBot, Claude-Web, anthropic-ai et aux autres robots d'entraînement. Voir la section Méthode.
- [sec.] The Knot : boutique de Hamden, « build and view an engagement ring online ». Source : https://www.theknot.com/content/engagement-rings-connecticut
- [I] Pas de 3D ni de vidéo des pierres relevée dans la page lue ; l'étape « diamant » n'a pas été ouverte.

### 5. Jewelry Designs (Danbury)

- [V] « Upon visiting our Danbury, CT location you will pass through our jewelers' workshop as jewelry is being created » ; « This online catalog is just a sample » ;
  287 bagues de fiançailles. Source : https://jewelrydesigns.com/product-category/engagement-rings/
- [V] Fabrication décrite : modèle CAO « then print it in a wax form to be prepared for casting », fonte, sertissage ; « crafting custom engagement rings since 1980 ».
  Source : https://jewelrydesigns.com/engagement-rings/custom-engagement-ring/
- [V] Conception à distance : demande par la messagerie du site, puis « phone or by video call » ; « Our designers will also double and triple-check the design with you
  via photos ». Clients cités du Vermont à la Californie. Source : https://jewelrydesigns.com/education/engagement-ring-design-online/
- [V] Point d'entrée : https://jewelrydesigns.com/design-your-own/ ; formulaire `/design-form/` (non rempli). Les diamants s'achètent en consultation (« contact one of
  our consultants »). Source : https://jewelrydesigns.com/diamonds/loose-diamonds/
- [I] Aucun prix dans le HTML de la liste des bagues (aucune balise de prix WooCommerce).

### 6. Sterling Jewelers (Wethersfield)

- [V] Le titre du site est « Find Your Diamond | Sterling Jewelers | Wethersfield, CT ». Menu : « Build Your Ring » (`/pages/engagement-ring-builder`), « Build Your Band »
  (`/pages/build-a-band`), « Start with a Design » (`/pages/customizable-designs`), « Custom Design » (`/pages/custom-jewelry`). Source :
  https://www.shopsterlingjewelers.com/diamonds
- [V] `engagement-ring-builder` est une iframe vers `shopsterlingjewelers-frame-categoryembed.jewelershowcase.com/browse/3c-collection/engagement/` ; `build-a-band` est une
  iframe vers avacoutures.com. Source : https://www.shopsterlingjewelers.com/pages/engagement-ring-builder et https://www.shopsterlingjewelers.com/pages/build-a-band
- [V] Le robots.txt de jewelershowcase.com dit « User-agent: * Disallow: / » : le contenu du constructeur n'est pas audité (voir Méthode).
- [V] Recherche de diamants avec filtres « Shape », « Price », « Carat », « Lab », « Origin ». Les montures sont « designed for natural or lab-grown center stones ».
  Source : https://www.shopsterlingjewelers.com/jewelry/engagement-rings/engagement-ring-settings
- [I] Boutique indépendante à une seule adresse, sans lien avec Sterling Jewelers Inc., la filiale de Signet qui exploite Kay et Jared. [sec.] Adresse : 965 Silas Deane
  Hwy, Wethersfield.

### 7. Michaels Jewelers (Connecticut, 11 villes)

- [V] Magasins listés : Bristol, Canton, Danbury, Farmington, Manchester, Milford, Orange, Southbury, Trumbull, Wallingford, Waterbury ; plus Michaels Estate Jewelers (Avon)
  et deux centres de rachat (Cromwell, Windsor Locks). Source : https://michaelsjewelers.com/
- [V] La page `diamond-search` contient l'application VDB (`/apps/vdb-app/search-filters`). Firecrawl n'a pas pu la rendre ; aucun nouvel essai. Source :
  https://michaelsjewelers.com/pages/diamond-search
- [V] Bagues de fiançailles à prix affiché, de 1 221 à 2 950 $ en page 1. Source : https://michaelsjewelers.com/collections/engagement-rings
- [sec.] Extrait de recherche de `michaelsjewelers.com/services` : « access to over 150 CAD designers […] Within just a few days, we can provide a 3D visual ». L'adresse
  `/pages/services` répond 404 le 15/11 ; non vérifié.
- [I] Siège à Waterbury, d'après l'ordre du site et les annuaires ; non vérifié sur une page « Our Story ».

### 8. Becker's Diamonds & Fine Jewelry (West Hartford)

- [V] « In 1978, Paul & Risa Becker opened Becker's […] in West Hartford » ; seconde boutique à Old Saybrook en 2014 ; « In 2017 Becker's expanded it offerings to include
  Lab-Grown Diamonds » ; racheté en 2021 par une entreprise familiale (groupe H6) ; maître orfèvre et gemmologues diplômés du GIA. Source : https://beckers.com/pages/about-us
- [V] 1 929 bagues de fiançailles en stock, prix le plus haut 74 800 $. Source : https://beckers.com/collections/engagement-rings
- [V] Sur-mesure en 4 étapes : devis gratuit ; concept ; « wax or computerized (CAD) model which displays multi-angled renderings […] sent for you to approve » ; fonte,
  sertissage et contrôle qualité. Source : https://beckers.com/pages/custom-design
- [sec.] « Lab-grown diamonds now make up 70 percent of our bridal business » (City Lifestyle, extrait de recherche, https://citylifestyle.com/articles/beckers ; non ouvert).

### 9. Cellini Design Jewelers (Orange)

- [V] « Benchmark Ring Lab » : configurateur d'alliance (profil, bords, matières, largeur, taille, pierres, gravure, d'après le résumé de la page rendue par Firecrawl,
  pas une citation). La page porte `robots: noindex` et redirige vers `?_bmsku=EUCF16014KY08`. Source : https://www.cellinidesignjewelers.com/benchmark-ring-lab
- [V] Page diamants avec liens « natural » et « lab-grown » (`/diamonds?labGrown=0`, `?labGrown=1`), bagues synthétiques, montures Sylvie. Source :
  https://www.cellinidesignjewelers.com/diamonds
- [sec.] 464 Boston Post Road, Orange ; financement Affirm ; maison de 1948 selon Sylvie, de 1950 selon Jewelers of America.
- [I] Même plateforme de site que Sterling Jewelers (robots.txt identique, mêmes chemins `/jewelry/…`).

### 10. Baribault Jewelers (Glastonbury)

- [V] « Customize one of our bestselling engagement ring styles, or work with us to design something completely your own » ; « Baribault is proud to offer 100% custom
  engagement ring design. Make an appointment » ; Tacori « From $3,069 » à « From $5,049 ». Source : https://baribaultjewelers.com/engagement-rings/
- [V] Marque de synthétique « B Lab », « Certified Lab Diamonds, now available » ; « the number one engagement and bridal jewelry destination in New England » (affirmation
  du site). Source : https://baribaultjewelers.com/lab-diamonds/
- [sec.] 81 Rankin Road, Glastonbury, depuis 1948 ; programme « Engaged Couples Experience ».

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Henry C. Reid & Son Jewelers | Fairfield | https://hcreidjewelers.com/ | [V] « Since 1910 » ; 13 bagues de fiançailles, prix le plus haut 97 125 $ ; synthétique proposé pour le sur-mesure ; pas de configurateur. |
| Christie's Fine Jewelry | Manchester | https://www.christiesfinejewelry.com/bridal/ | [V] « We custom design and manufacture our own exclusive bridal collection » ; conception en 5 étapes avec dessin à la main ; boutique sans prix (« inquire about availability, pricing »). |
| Lux Bond & Green | Connecticut et Massachusetts | https://lbgreen.com/bridal/ | [V] Refuse le synthétique (« has neither promoted synthetics/Laboratory Grown ») ; sur-mesure sur rendez-vous en boutique ; aucun outil en ligne relevé. |
| Manfredi Jewels | Greenwich, New Canaan | https://www.manfredijewels.com/collections/engagement-rings | [V] Bagues de 2 à 6 ct en platine, pièces anciennes ; aucun prix dans le texte de la liste. Luxe, loin du positionnement de JR Diamond. |
| Pennachio Jewelers | Glastonbury | https://pennachiojewelers.com/ | [V] Site vitrine (catalogue, visite virtuelle en .wmv) ; [I] pas de vente en ligne. |

## Écartés et bloqués

- **Libero Jewelers** (North Haven) : [V] `https://liberojewelers.com/robots.txt` répond 403 avec `cf-mitigated: challenge` (défi Cloudflare). Rien n'a été lu, aucun
  contournement. [sec.] The Knot : diamants naturels et synthétiques, « both onsite and online ». À auditer par un humain.
- **Venazia** : [V] robots.txt lisible (Crawl-delay 10), accueil en défi Cloudflare (403). [sec.] Birdeye : joaillier en ligne basé à Miami. [I] Ses pages « … Stamford, CT »
  ou « … Hartford, CT » visent le référencement local : hors périmètre (pas établi au Connecticut).
- [V] Aucun magasin d'enseigne nationale n'est retenu (consigne).

## Méthode et incidents

- **Rumanoff's** : le groupe `*` du robots.txt autorise tout avec « use=reference » et « ai-train=no » ; ClaudeBot, Claude-Web et anthropic-ai sont interdits. Cinq pages ont
  été lues (accueil, `create-your-ring`, `engagement-rings`, `custom-design`, `fana`), dans le cadre d'une consultation demandée par un utilisateur, sans entraînement.
  L'inventaire de l'Alaska applique une règle plus stricte (site non lu dès que ClaudeBot est interdit) : la session principale doit trancher, et à défaut faire
  revérifier ces faits par un auditeur humain.
- **Sterling Jewelers** : une requête a été faite par erreur sur la page de l'iframe `jewelershowcase.com`, juste après la lecture de son robots.txt (« Disallow: / »). Son
  contenu a été effacé sans être utilisé ; aucune autre requête n'a suivi.
- **Michaels Jewelers** : Firecrawl a échoué sur `diamond-search` (le site répond 200 à curl) ; pas de nouvel essai.
- **Lux Bond & Green** : le robots.txt impose « Crawl-delay: 10 » aux agents d'IA ; 11 secondes ont séparé chaque page.
- **Christie's** : le robots.txt interdit les adresses avec paramètres (`/*?`) et impose 3 secondes ; aucune adresse avec paramètre n'a été appelée.
- Chemins Shopify interdits (`/cart`, `/checkout`, `/collections/*sort_by*`…) : non appelés. Aucun questionnaire ni formulaire n'a été lancé.

## Sources

Pages lues le 15/11/2026 (code HTTP 200 sauf mention) :

- Diamond Designs : https://www.dia-designs.com/robots.txt ; https://www.dia-designs.com/ ; https://www.dia-designs.com/pages/design-your-ring (curl et Firecrawl) ;
  https://www.dia-designs.com/collections/engagement-ring-mountings ; https://www.dia-designs.com/pages/custom-design
- Lenox Jewelers : https://lenox-jewelers.com/robots.txt ; https://lenox-jewelers.com/ ; https://lenox-jewelers.com/pages/design-the-one (curl et Firecrawl) ;
  https://lenox-jewelers.com/collections/engagement-rings ; https://lenox-jewelers.com/pages/custom-design
- NAGI Jewelers : https://nagijewelers.com/robots.txt ; https://nagijewelers.com/ ; https://nagijewelers.com/pages/stamford-custom-jewelry-designs ;
  https://nagijewelers.com/collections/bridal
- Rumanoff's : https://rumanoffs.com/robots.txt ; https://www.rumanoffs.com/ ; https://www.rumanoffs.com/create-your-ring (curl et Firecrawl) ;
  https://www.rumanoffs.com/engagement-rings ; https://www.rumanoffs.com/custom-design ; https://www.rumanoffs.com/fana
- Jewelry Designs : https://jewelrydesigns.com/robots.txt ; https://jewelrydesigns.com/ ; https://jewelrydesigns.com/design-your-own/ (curl et Firecrawl) ;
  https://jewelrydesigns.com/education/engagement-ring-design-online/ ; https://jewelrydesigns.com/engagement-rings/custom-engagement-ring/ ;
  https://jewelrydesigns.com/product-category/engagement-rings/ ; https://jewelrydesigns.com/diamonds/loose-diamonds/
- Sterling Jewelers : https://www.shopsterlingjewelers.com/robots.txt ; https://www.shopsterlingjewelers.com/ ; https://www.shopsterlingjewelers.com/diamonds ;
  https://www.shopsterlingjewelers.com/jewelry/engagement-rings/engagement-ring-settings ; https://www.shopsterlingjewelers.com/pages/engagement-ring-builder ;
  https://www.shopsterlingjewelers.com/pages/build-a-band ; robots.txt de `shopsterlingjewelers-frame-categoryembed.jewelershowcase.com` (Disallow: /)
- Michaels Jewelers : https://michaelsjewelers.com/robots.txt ; https://michaelsjewelers.com/ ; https://michaelsjewelers.com/pages/diamond-search ;
  https://michaelsjewelers.com/collections/engagement-rings ; https://michaelsjewelers.com/pages/fana ; https://michaelsjewelers.com/pages/lab-grown-diamonds ;
  https://michaelsjewelers.com/pages/services (404)
- Becker's : https://beckers.com/robots.txt ; https://beckers.com/ ; https://beckers.com/collections/engagement-rings ; https://beckers.com/pages/custom-design ;
  https://beckers.com/pages/about-us
- Cellini Design Jewelers : https://www.cellinidesignjewelers.com/robots.txt ; https://www.cellinidesignjewelers.com/ ;
  https://www.cellinidesignjewelers.com/benchmark-ring-lab (curl et Firecrawl) ; https://www.cellinidesignjewelers.com/diamonds ;
  https://www.cellinidesignjewelers.com/jewelry/bridal/semi-mount-diamond-engagement
- Baribault : https://baribault.com/robots.txt et https://baribault.com/ (redirection JavaScript vers `/lander`) ; https://baribaultjewelers.com/robots.txt ;
  https://baribaultjewelers.com/ ; https://baribaultjewelers.com/engagement-rings/ ; https://baribaultjewelers.com/lab-diamonds/ ;
  https://baribaultjewelers.com/product-category/engagement-rings/
- Non classés : https://hcreidjewelers.com/ ; https://hcreidjewelers.com/collections/engagement-rings ; https://hcreidjewelers.com/pages/lab-grown-diamonds ;
  https://www.christiesfinejewelry.com/ ; https://www.christiesfinejewelry.com/custom-designed-jewelry/ ; https://www.christiesfinejewelry.com/bridal/ ;
  https://www.christiesfinejewelry.com/shop/ ; https://lbgreen.com/ ; https://lbgreen.com/bridal/ ; https://lbgreen.com/diamonds/ ; https://lbgreen.com/about/synthetic-diamonds/ ;
  https://www.manfredijewels.com/ ; https://www.manfredijewels.com/collections/engagement-rings ; https://pennachiojewelers.com/ ; robots.txt de chacun de ces sites
- Bloqués : https://liberojewelers.com/robots.txt (403, défi Cloudflare) ; https://venazia.com/robots.txt (200) ; https://venazia.com/ (403, défi Cloudflare)
- Source secondaire lue : The Knot, « 11 Stores to Shop For Engagement Rings in Connecticut », mise à jour du 19/11/2024,
  https://www.theknot.com/content/engagement-rings-connecticut (Firecrawl)

Recherches web génériques (extraits de résultats seulement) :

- « Connecticut jeweler custom engagement ring builder online design your own ring » ; « best engagement ring jewelers Connecticut independent custom design » ;
  « Connecticut jewelry store "lab grown" engagement rings shop online "ring builder" » ; « Michaels Jewelers Connecticut engagement rings design your own » ;
  « Rumanoff's Hamden engagement ring builder website » ; « Diamond Designs Orange CT engagement rings website » ; « Cellini Design Jewelers Orange CT custom engagement
  rings » ; « Baribault Jewelers Glastonbury website engagement rings » ; « Sterling Jewelers Wethersfield CT website » ; « Libero Jewelers North Haven engagement rings
  online diamonds » ; « Venazia jewelry company headquarters showroom location » ; recherche sur les constructeurs de bague des joailliers de la région de Hartford.
- Extraits cités : sylviejewelry.com (pages des boutiques Michaels, Cellini et Baribault), jewelers.org (Cellini), citylifestyle.com/articles/beckers (part du synthétique),
  reviews.birdeye.com (Venazia), willyou.net (adresse de Sterling Jewelers).
