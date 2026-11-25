# Inventaire des joailliers : Vermont

Recensement du 25 novembre 2026 (pages lues entre 03 h 29 et 03 h 40 UTC), dans le cadre de l'étude de concurrence aux États-Unis. Vendeurs nationaux, chaînes,
grands magasins et grandes maisons exclus.

Méthode : lecture seule, comme un visiteur ordinaire. Le robots.txt de chaque site a été contrôlé avant toute page (outil `robots.cjs` de la session), puis lu en entier pour
repérer les groupes visant les agents d'IA. Pages statiques lues avec curl (en-tête de navigateur Safari, convention du dépôt, une seule tentative par page). Pages construites en
JavaScript lues dans un Chromium sans écran (Playwright, identité par défaut, non modifiée), avec les appels à `jeweleros.com/api/` coupés (interdits par le robots.txt de
JewelerOS). Au plus une page toutes les 2 s par site ; plus de 10 s chez Lippa's et Timco, qui demandent `Crawl-delay: 10`. Aucun formulaire rempli ni envoyé, aucun compte, aucun
chat ouvert, aucun bouton d'ajout au panier actionné, aucun filtre ni étape de configurateur choisi. Pas d'audit en affichage iPhone à ce stade (recensement).

Marques : **[V]** vérifié, page lue le 25/11/2026 (adresse donnée) ; **[V, index]** lu dans l'extrait d'un moteur de recherche (Parallel Search), pas sur le site ; **[I]**
inféré ; **[S]** supposé. Prix en dollars américains, tels qu'affichés.

## Constat général

- [V] Un seul configurateur de bague en ligne : celui de Karlise Fine Jewelers (Burlington), l'assistant « 3D ring builder » de JewelerOS, le même qu'au Missouri, chez Pearce
  (New Hampshire) et Ellsworth (Maine). Comme ailleurs, la 3D n'a pas été affichée : elle dépend d'appels à `jeweleros.com/api/`, interdits par le robots.txt de JewelerOS.
- [V] Trois recherches de diamants à prix affiché : Karlise (GemFind, onglets naturel, synthétique, couleur ; 5 615 pierres dans la vue par défaut), Evan James (Thinkspace,
  91 pages de pierres certifiées GIA) et Von Bargen's (outil « Diamond Finder », non affiché dans le délai de lecture).
- [V] Le discours de fabrication le plus proche de « l'atelier en direct » est celui de W.R. Metalarts (Brattleboro) : fourchettes de prix publiées, délais publiés, pièce
  « photographiée et filmée » avant l'envoi, catalogue chiffré de 78 bagues de fiançailles et 126 alliances, expédition dans le monde entier.
- [V] Le synthétique est mis en avant par After Midnight Jewelers (« Save Thousands on Lab-Grown Diamond Engagement Rings ») et Shannon's, proposé par Karlise (onglet
  « Lab Grown »). Von Bargen's ne parle que de diamants naturels sur les pages lues. Evan James : aucune mention du synthétique sur les pages lues.
- [V] Aucun site ne bloque les robots par Cloudflare ou par une page « Verifying your connection » ce 25/11, contrairement à six sites Shopify du New Hampshire la veille.
  Seul Hunter's Fine Jewelry (Rutland) sert une page HTML à la place de son robots.txt : traité comme **bloqué**, aucune page lue.
- [V] Les robots.txt Squarespace (Shannon's, Tossi, Global Pathways) citent ClaudeBot, GPTBot et d'autres agents d'IA dans le même groupe que `*` : mêmes règles que tout
  visiteur, pas d'interdiction propre. Evan James autorise explicitement ClaudeBot, Claude-User et Claude-SearchBot (`Allow: /`).
- [I] Marché petit (Burlington et ses environs concentrent l'offre) ; aucune enseigne ne combine 3D, prix de la bague configurée et synthétique en ligne.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Karlise Fine Jewelers | Burlington | https://www.karlisejewelers.com/ | https://www.karlisejewelers.com/pages/custom-ring-builder | oui (« 3D ring builder » JewelerOS, 3D non affichée) | non (200 ; robots.txt Shopify, `Allow: /`) ; API JewelerOS interdite par le robots.txt de JewelerOS, appels coupés | [V] « Design your ring online in stunning 3D », puis pierre choisie en boutique ; bague prête « in just a couple of weeks ». Recherche de diamants GemFind avec onglets « Natural », « Lab Grown », « Fancy Color », 5 615 pierres à prix affiché (dès 630 $ pour 0,30 ct E VVS2 GIA). 595 bagues de fiançailles à prix affiché (de 765 à 4 500 $ en page 1). Le seul configurateur en ligne de l'État. |
| 2 | W.R. Metalarts | Brattleboro | https://www.wrmetalarts.com/ | https://www.wrmetalarts.com/pages/custom | non (sur mesure, consultation en visio ou en atelier ; catalogue chiffré) | non (200 ; robots.txt Shopify, `Allow: /`) | [V] Prix et délais publiés : la plupart des projets « between $5,000 and $25,000 », minimum 2 000 $ pour un sur-mesure complet, dessin en 2 à 10 semaines, fabrication en 8 à 10 semaines (express possible en 1 à 2 semaines). Croquis ou rendus 3D, cire ou forge à la main, pièce « photographiée et filmée » avant l'envoi. Or Fairmined, pierres traçables. 78 bagues de fiançailles (dès 2 688 $) et 126 alliances (dès 406 $) à prix affiché. Le plus proche de la transparence de JR Diamond. |
| 3 | Evan James Ltd. | Brattleboro | https://www.evanjames.com/ | https://www.evanjames.com/diamonds/ | partiel (recherche de diamants ; catalogue de bagues filtrable) | non (200 ; robots.txt qui autorise ClaudeBot, interdit `/cart`, `/checkout`, `/search` et des paramètres de tri) | [V] 885 bagues de fiançailles ArtCarved à prix affiché (de 2 008,50 à 8 212,50 $ en page 1), filtres par métal (or 10, 14, 18 k, platine, palladium) et style. Recherche de diamants à prix affiché, 91 pages (dès 592 $ pour 0,50 ct J VVS2 GIA). Sur mesure par les orfèvres de la maison (formulaire). Seul joaillier certifié American Gem Society de la région, selon le site. Pas de synthétique vu. Plateforme Thinkspace. |
| 4 | Von Bargen's Jewelry | Burlington, Stowe, Stratton (et Hanover, NH) ; atelier à Quechee | https://vonbargensjewelry.com/ | https://vonbargensjewelry.com/pages/diamonds | partiel (« Diamond Finder », non affiché) | non (200 ; robots.txt Shopify, `Allow: /`) | [V] 87 bagues de fiançailles à prix affiché, haut de gamme (de 6 640 à 78 800 $ en page 1 ; Mark Patterson, Jade Trau, Ali Dumont, Rahaminov), boutique en ligne et panier. Sur mesure « from the first sketch to the final polish », atelier de fabrication à Quechee. Rendez-vous virtuel. Diamants naturels seulement sur les pages lues. Quatre boutiques. |
| 5 | After Midnight Jewelers | South Burlington | https://aftermidnightjewelers.com/ | https://aftermidnightjewelers.com/custom-design/ | non (sur mesure par CAO, en boutique) | non (200 ; robots.txt WordPress sans interdiction) | [V] Spécialiste affiché du synthétique (« Save Thousands on Lab-Grown Diamond Engagement Rings ») ; processus en 4 étapes : CAO, choix des pierres, maquette en cire sur demande, remise. Page des bagues de fiançailles consacrée à la marque Sylvie, sans prix ni panier. « Over 30 years » de service au Vermont. |
| 6 | Shannon's Fine Jewelry | Essex Junction | https://www.shannonsofvermont.com/ | https://www.shannonsofvermont.com/custom-jewelry | non (sur mesure par CAO, en boutique) | non (200 ; robots.txt Squarespace, agents d'IA au même régime que `*`) | [V] CAO et orfèvre sur place, naturel et synthétique (page dédiée : pierres « hand-select[ed] »). [V, index] Délais : « some projects can be completed in just a week or two ». Aucun prix ni panier sur les pages lues ; tout passe par un rendez-vous. Maison familiale depuis 2016. |
| 7 | Lippa's Estate & Fine Jewelry | Colchester (anciennement Church Street, Burlington) | https://www.lippas.com/ | https://www.lippas.com/vermont-engagement-rings/ | non (boutique en ligne de bagues anciennes ; sur mesure par CAO) | non (200 ; robots.txt WooCommerce, `Crawl-delay: 10` respecté) | [V] Bagues de fiançailles anciennes et de succession à prix affiché avec « Add to cart » (de 1 500 à 9 150 $ en page 1 ; 7 pages), certificats GIA pour plusieurs pierres. Sur mesure : CAO envoyée sous plusieurs angles, contre un acompte, avant fabrication. Maison familiale « 93 » ans sur Church Street, désormais sur rendez-vous à Colchester. |
| 8 | Ferro Jewelers | Stowe | https://ferrojewelers.com/ | https://ferrojewelers.com/collections/engagement-rings | non (catalogue ; pages « Custom Design » et « Repurpose Family Jewelry ») | non (200 ; robots.txt Shopify, `Allow: /`) | [V] Bagues de fiançailles anciennes et sur mesure, prix affichés pour une partie (2 525 à 97 500 $ en page 1), « CONTACT FOR PRICING » pour les pièces sur mesure. Collection de créations sur mesure (9 pages) ; une pièce à diamant « LAB GROWN » chiffrée. Catégorie « Repurpose Family Jewelry », proche de l'offre de transformation de JR Diamond. |
| 9 | Tossi Jewelry | Montpelier | https://www.tossijewelry.com/ | https://www.tossijewelry.com/engagement | non (sur mesure, à distance par téléphone, visio et e-mail) | non (200 ; robots.txt Squarespace, agents d'IA au même régime que `*`) | [V] Créatrice indépendante : « designing is usually done long-distance via phone/video meetings and email », première consultation et premier jeu de croquis offerts. Boutique en ligne à prix affichés, surtout en argent (bagues de 132 à 3 800 $). Pas de bague de fiançailles en vente directe. |
| 10 | Hunter's Fine Jewelry | Rutland | https://www.jewelrycreationsbyhr.com/ | https://www.jewelrycreationsbyhr.com/ (accueil, non lu) | inconnu | **bloqué** : `/robots.txt` répond par une page HTML (HTTP 200), robots.txt illisible ; aucune page lue | [V, index] Maison familiale du comté de Rutland ; « Fine Jewelry, Custom Design, Jewelry Repairs » ; zones servies : Rutland, Middlebury, Manchester, Granville (NY). Pas de vente en ligne relevée dans l'extrait. Retenu faute de meilleur candidat local. |

## Fiches

### 1. Karlise Fine Jewelers (Burlington)

- [V] Page `custom-engagement-rings` : « Design your custom ring online using our new 3D engagement ring builder » ; étapes « Design your ring online in stunning 3D », « Pick out
  your center stone in our Burlington, VT showroom », « Finalize & order your ring » ; « we can have it ready for you in just a couple of weeks ». Adresse : 78 Church St.
  Source : https://www.karlisejewelers.com/pages/custom-engagement-rings
- [V] Page `custom-ring-builder` (Chromium) : le script `https://www.jeweleros.com/static/dist/jos.js` et `partner_config.js` sont chargés ; les appels à
  `https://www.jeweleros.com/api/config/…` et `/api/widget/config/…` ont été coupés (robots.txt de JewelerOS : `Disallow: /api/`). La page n'affiche alors que l'en-tête. 3D non vue.
  Source : https://www.karlisejewelers.com/pages/custom-ring-builder
- [V] Recherche de diamants : onglets « Natural », « Lab Grown », « Fancy Color » ; filtres forme, taille, couleur D à P, pureté FL à I2, carat 0 à 20, prix jusqu'à 100 000 $ ;
  « 5615 Similar Diamonds » dans la vue par défaut, premières pierres de 630 à 816 $, toutes certifiées GIA ; « Powered By GemFind ». Les données viennent de
  `api.jewelcloud.com` (pas de robots.txt). L'onglet « Lab Grown » n'a pas été ouvert. Source : https://www.karlisejewelers.com/apps/diamondtools/
- [V] « 595 products » en bagues de fiançailles, prix de 765 $ (« KENNEDY », « ASHLYN ») à 4 500 $ (« DAME ») en page 1, 8 pages. Source :
  https://www.karlisejewelers.com/collections/engagement-rings
- [V] Accueil : menus « Design Your Ring », « Diamond Search Tool », alliances FANA « from $1,375.00 ». Source : https://www.karlisejewelers.com/
- [I] Même outil que chez Pearce (New Hampshire) et au Missouri : la 3D est un produit de fournisseur, pas le fichier de fabrication de l'atelier.

### 2. W.R. Metalarts (Brattleboro)

- [V] « Most projects land between $5,000 and $25,000, with a standard crafting timeline of 8–10 weeks once your design is final » ; « Our minimum for full custom designs is
  $2,000 » ; « The design phase typically takes 2–10 weeks » ; « we can expedite production to as little as 1–2 weeks ». Source : https://www.wrmetalarts.com/pages/custom
- [V] Étapes : consultation en visio ou en atelier, « hand-drawn sketches, detailed 3D renderings, or both », approbation, cire et fonte ou forge à la main ; « Before your piece
  leaves the studio, we photograph and film it ». Retrait à l'atelier ou expédition. Source : https://www.wrmetalarts.com/pages/custom
- [V] « 78 products » en fiançailles, prix « From » 2 688 $ à 7 192 $ sur les 10 premiers. Source : https://www.wrmetalarts.com/collections/engagement
- [V] « 126 products » en alliances, dès 406 $ ; titre de page « Ships Worldwide from Vermont ». Source : https://www.wrmetalarts.com/collections/wedding-bands
- [V] « designed and made by the same 5 people, never an outside factory » ; or Fairmined, diamants recyclés ; « Custom jewelry, handcrafted in Vermont, Pennsylvania, and Ohio ».
  Source : https://www.wrmetalarts.com/
- [I] Siège et atelier principal à Brattleboro (adresse de l'atelier citée partout), avec des ateliers secondaires hors de l'État, non vérifiés.

### 3. Evan James Ltd. (Brattleboro)

- [V] Robots.txt : `ClaudeBot`, `Claude-User`, `Claude-SearchBot` en `Allow: /` ; pour `*`, interdits `/account`, `/cart`, `/checkout`, `/search`, `/*?sort=`, `/*?item=`… Les liens
  produits de l'accueil se terminent par `?` : non suivis. Source : https://www.evanjames.com/robots.txt
- [V] « 885 Items » en bagues de fiançailles, toutes ArtCarved en page 1, prix de 2 008,50 à 8 212,50 $ ; filtres de métal (10K White Gold, 14K, 18K, Palladium, Platinum, Silver).
  Source : https://www.evanjames.com/catalog/engagement-ring/
- [V] Recherche de diamants : filtres forme, prix, carat, couleur D à N, taille, pureté ; 50 pierres par page, 91 pages, premières pierres de 592 à 955 $, toutes certifiées GIA.
  Source : https://www.evanjames.com/diamonds/
- [V] « Custom Jewelry Designs Created In-House By Our Master Goldsmiths » ; formulaire de question avec pièce jointe (non rempli). Source :
  https://www.evanjames.com/services/custom-jewelry-designs/
- [V] « Established in 1987 » ; « the region's only American Gem Society certified jeweler » ; bâtiment du Latchis Hotel. Plateforme Thinkspace (nom présent dans le code de la
  page). Source : https://www.evanjames.com/

### 4. Von Bargen's Jewelry (Burlington, Stowe, Stratton ; atelier à Quechee)

- [V] « 87 products » en bagues de fiançailles ; page 1 de 6 640 $ (Ali Dumont, diamant « salt and pepper ») à 78 800 $ (Rahaminov, 3,35 ct) ; « shop with us online to explore
  our engagement rings and natural diamonds ». Source : https://vonbargensjewelry.com/collections/engagement-rings
- [V] Sur mesure : « From the first sketch to the final polish » ; « With our own jewelry making Studio in Quechee, Vermont » (extrait d'index sur la même page) ; bouton
  « Book a design consultation ». Source : https://vonbargensjewelry.com/pages/custom-design
- [V] « DIAMOND FINDER — Use the Diamond Finder Tool Below » : script `instantinventory-widgets…/diamonds/1.0.0/main.js` chargé, aucune pierre affichée dans les 3,5 s de lecture.
  Source : https://vonbargensjewelry.com/pages/diamonds
- [V, index] Boutiques : 131 Church Street (Burlington), 35 South Main Street (Stowe), Stratton, Hanover (NH) ; « Virtual Appointment ». Source : extrait de
  https://vonbargensjewelry.com/pages/our-stores-stowe
- [I] Le New Hampshire avait renvoyé Von Bargen's au Vermont (`docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md`) : traité ici.

### 5. After Midnight Jewelers (South Burlington)

- [V] Accueil : « Save Thousands on Lab-Grown Diamond Engagement Rings », 150 Dorset Street, Suite 240 ; FAQ : CAO, choix des pierres « new or heirloom », maquette « 3D wax model
  […] upon request ». Aucun prix sur l'accueil. Source : https://aftermidnightjewelers.com/
- [V] Processus en 4 étapes (« Computer-Aided Design (CAD) », choix des pierres, approbation et cire, remise) ; « We appreciate photos of the design to showcase in our design
  portfolios ». Source : https://aftermidnightjewelers.com/custom-design/
- [V] Page « Engagement Rings » : marque Sylvie, « Top Five trending styles », avis clients ; ni prix ni panier. Source : https://aftermidnightjewelers.com/engagement-rings/

### 6. Shannon's Fine Jewelry (Essex Junction)

- [V] « our custom process includes CAD-based jewelry design—guided in person » ; orfèvre sur place. Source : https://www.shannonsofvermont.com/custom-jewelry
- [V] Synthétique : « We hand-select every stone for cut, balance, and performance » ; naturel et synthétique proposés. Source : https://www.shannonsofvermont.com/lab-created-diamonds
- [V] Page des bagues : rendez-vous « Book a Bridal Appointment », « Family-Owned & Trusted Since 2016 » ; aucun prix trouvé dans la page. Source :
  https://www.shannonsofvermont.com/engagement-rings

### 7. Lippa's Estate & Fine Jewelry (Colchester)

- [V] Nouvelle adresse « 463 Mountain View Drive, Suite 205 Colchester », « Now Open by Appointment Only », « After 93 wonderful years on Church Street ». Bagues à prix avec
  « Add to cart » : 1 500 $ (solitaire 0,72 ct, or blanc 14 k) à 9 150 $ (halo 1,07 ct, rapport GIA) ; 7 pages. Source : https://www.lippas.com/vermont-engagement-rings/
- [V] Sur mesure : « We will give you a few angles of the 3-D image to review. If CAD is what you need, we will take a deposit ». Source :
  https://www.lippas.com/services/custom-designs/
- [V] Catégorie des bagues de fiançailles anciennes lue (titre « Vintage Engagement Rings | Antique Diamond Engagement Rings for Sale Online »). Source :
  https://www.lippas.com/estate-jewelry/rings/engagement-rings/

### 8. Ferro Jewelers (Stowe)

- [V] Bagues de fiançailles : filtres époque, métal, pierre, « Signed Jewelry Tiffany & Co. » ; pièces sur mesure en « CONTACT FOR PRICING », autres de 2 525 $ à 97 500 $ en page 1
  (5 pages). Source : https://ferrojewelers.com/collections/engagement-rings
- [V] Collection « Custom Design » (9 pages), dont un collier à diamant « LAB GROWN » à 13 500 $. Source : https://ferrojewelers.com/collections/custom-design
- [V] Menus « Custom Experience », « Repurpose Family Jewelry », « Vermont Inspired » ; Shopify. Source : https://ferrojewelers.com/

### 9. Tossi Jewelry (Montpelier)

- [V] « designing is usually done long-distance via phone/video meetings and email » ; « Contact me for a free initial consultation and round of sketches ». Source :
  https://www.tossijewelry.com/engagement
- [V] Boutique : bagues en argent et or de 132 $ à 3 800 $ (« 18K Serpent Goddess Ring »), nombreux articles « Sold Out ». Source : https://www.tossijewelry.com/shop

### 10. Hunter's Fine Jewelry (Rutland) — bloqué

- [V] `https://www.jewelrycreationsbyhr.com/robots.txt` : réponse HTTP 200 avec une page HTML au lieu d'un fichier texte ; l'outil de contrôle classe le site INCONNU. Aucune
  autre page demandée.
- [V, index] « 158 N Main Street #3 Rutland » ; « family owned and operated business in Rutland county » ; zones servies Rutland, Middlebury, Manchester, Granville (NY). Source :
  extrait de http://www.jewelrycreationsbyhr.com/

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Global Pathways Jewelry | Burlington | http://globalpathwaysjewelry.com/wedding-and-engagement | [V] Sur mesure en boutique (« custom engagement ring design is the heart and soul of our business »), aucun prix ; vente en ligne par une boutique Etsy (lien de menu). |
| Timco Jewelers & Goldsmiths | Rutland | https://timcojewelers.com/ | [V] Site vitrine (« For over 40 years »), sur mesure et réparation ; pas de vente en ligne relevée. Robots.txt `Crawl-delay: 10`. |

## Écartés

- **Venazia** : pages « Custom Wedding Bands Burlington, VT » écrites pour le référencement local ; joaillier en ligne basé à Miami selon l'inventaire du Connecticut ; hors
  périmètre. [V, index] https://www.venazia.com/custom-wedding-bands-burlington-vt
- **Hannoush**, **Kay Jewelers**, **Pandora** : chaînes (2 magasins chacune au Vermont selon l'annuaire JewelryStoresAtlas, [V, index] https://jewelrystoresatlas.com/vermont) ;
  hors périmètre.

## Méthode et incidents

- Aucun 403, captcha ni page de vérification sur les dix sites classés, sauf Hunter's (robots.txt illisible, non contourné, aucune nouvelle tentative).
- Karlise : appels `jeweleros.com/api/` coupés dans le navigateur ; l'assistant 3D n'a donc pas été vu. Aucun onglet ni filtre actionné dans la recherche de diamants.
- Evan James : `/cart`, `/search` et les adresses à paramètres interdits (`?item=`, `?sort=`…) non appelés ; une adresse de recherche de diamants par forme (`/diamonds/?cut=RD`)
  repérée sur l'accueil, non suivie.
- Lippa's et Timco : `Crawl-delay: 10` respecté (plus de 10 s entre deux pages chez Lippa's).
- Aucun formulaire, questionnaire, chat ou prise de rendez-vous lancé ; aucun panier ouvert.

## Sources

Pages lues le 25/11/2026 (HTTP 200) :

- Karlise Fine Jewelers : https://www.karlisejewelers.com/robots.txt ; https://www.karlisejewelers.com/ ; https://www.karlisejewelers.com/pages/custom-engagement-rings ;
  https://www.karlisejewelers.com/pages/custom-ring-builder (Chromium) ; https://www.karlisejewelers.com/apps/diamondtools/ (Chromium) ;
  https://www.karlisejewelers.com/collections/engagement-rings (Chromium)
- W.R. Metalarts : https://wrmetalarts.com/robots.txt ; https://www.wrmetalarts.com/ ; https://www.wrmetalarts.com/pages/custom (curl et Chromium) ;
  https://www.wrmetalarts.com/collections/engagement ; https://www.wrmetalarts.com/collections/wedding-bands (Chromium)
- Evan James Ltd. : https://www.evanjames.com/robots.txt ; https://www.evanjames.com/ ; https://www.evanjames.com/catalog/engagement-ring/ ; https://www.evanjames.com/diamonds/ ;
  https://www.evanjames.com/services/custom-jewelry-designs/ (Chromium)
- Von Bargen's Jewelry : https://vonbargensjewelry.com/robots.txt ; https://vonbargensjewelry.com/ ; https://vonbargensjewelry.com/collections/engagement-rings (curl et
  Chromium) ; https://vonbargensjewelry.com/pages/custom-design ; https://vonbargensjewelry.com/pages/diamonds (Chromium)
- After Midnight Jewelers : https://aftermidnightjewelers.com/robots.txt ; https://aftermidnightjewelers.com/ ; https://aftermidnightjewelers.com/engagement-rings/ ;
  https://aftermidnightjewelers.com/custom-design/ (Chromium)
- Shannon's Fine Jewelry : https://www.shannonsofvermont.com/robots.txt ; https://www.shannonsofvermont.com/engagement-rings ;
  https://www.shannonsofvermont.com/lab-created-diamonds ; https://www.shannonsofvermont.com/custom-jewelry ; https://www.shannonsofvermont.com/wedding-bands (Chromium)
- Lippa's : https://www.lippas.com/robots.txt ; https://www.lippas.com/vermont-engagement-rings/ ; https://www.lippas.com/services/custom-designs/ ;
  https://www.lippas.com/estate-jewelry/rings/engagement-rings/
- Ferro Jewelers : https://ferrojewelers.com/robots.txt ; https://ferrojewelers.com/ ; https://ferrojewelers.com/collections/engagement-rings ;
  https://ferrojewelers.com/collections/custom-design (Chromium)
- Tossi Jewelry : https://www.tossijewelry.com/robots.txt ; https://www.tossijewelry.com/ ; https://www.tossijewelry.com/engagement ; https://www.tossijewelry.com/shop (Chromium)
- Non classés : http://globalpathwaysjewelry.com/robots.txt ; http://globalpathwaysjewelry.com/wedding-and-engagement ; http://timcojewelers.com/robots.txt ; https://timcojewelers.com/
- Bloqué : https://www.jewelrycreationsbyhr.com/robots.txt (page HTML)
- Tiers : https://www.jeweleros.com/robots.txt (`Disallow: /api/`, lu dans le cache de l'outil de contrôle, rempli plus tôt dans la session) ; https://api.jewelcloud.com/robots.txt (absent)
- Inventaires du dépôt consultés : `docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md` (Von Bargen's, JewelerOS, format), `docs/concurrence/audit/us/alabama/INVENTAIRE.md`
  et `docs/concurrence/audit/us/connecticut/INVENTAIRE.md` (traitement des agents d'IA dans les robots.txt, Venazia)

Recherches web génériques (Parallel Search, extraits seulement) :

- « Vermont jeweler engagement ring builder » ; « Burlington VT custom engagement rings jeweler » ; « Vermont jewelry store lab grown engagement rings » ; « design your own
  engagement ring Vermont » ; « Rutland VT jeweler engagement rings » ; « Montpelier VT jewelers engagement rings » ; « Stowe Vermont jeweler engagement rings » ; « Middlebury VT
  jeweler custom rings » ; « Brattleboro VT jeweler engagement rings » ; « South Burlington VT jeweler engagement rings shop online » ; « Vermont jeweler diamond search ring
  builder » ; « Bennington VT jeweler engagement rings » ; « St Johnsbury VT jeweler engagement rings » ; « Vermont goldsmith wedding bands shop online prices ».
- Extraits cités : http://www.jewelrycreationsbyhr.com/, https://vonbargensjewelry.com/pages/our-stores-stowe, https://www.venazia.com/custom-wedding-bands-burlington-vt,
  https://jewelrystoresatlas.com/vermont.
