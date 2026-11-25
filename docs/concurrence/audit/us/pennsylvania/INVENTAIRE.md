# Inventaire des joailliers : Pennsylvanie

Recensement du 25 novembre 2026, fait pour l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site (groupe `User-agent: *` puis, à la main, les groupes `ClaudeBot`, `Claude-User`, `Claude-Web` et `anthropic-ai`). Aucun formulaire rempli ni envoyé, aucun compte créé, aucun article mis au panier, aucun chat ni SMS ouvert. Au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés ou d'un extrait d'index de recherche), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 25/11/2026, en période de soldes du Black Friday. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques sur les joailliers de Pennsylvanie, extraits de résultats), puis **curl tel quel** (identité par défaut, en-têtes non modifiés) pour les robots.txt et les pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (JewelerOS, GemFind, Punchmark) n'ont pas été actionnés : ce qu'on en dit vient du texte et du code servis, marqué [I] quand c'est une déduction.

## Constat général

- [V] **Le configurateur 3D en marque blanche JewelerOS domine, comme dans l'Ohio, l'Alabama, le Tennessee et la Caroline du Nord.** Quatre sites chargent `jeweleros.com/static/dist/jos.js` ou `partner_config.js` : House of Milner (Philadelphie, identifiant de partenaire `9VRv6dXlURGs`), Sara Gallo (Lancaster, `9eUYwAhi1Txh`), Noah Gabriel & Co. (Wexford, `9npNC88sXKcr`) et Dahlkemper's (Erie, `9ogPjdbFD1D4`). Ils publient le même texte : « Design your ring online in stunning 3D », pierre choisie en salle d'exposition, bague prête « in just a couple of weeks ». [I, extrait] King's Jewelry (7 magasins en Pennsylvanie et dans l'Ohio) publie le même texte. [V] La FAQ de Milner précise que l'outil montre « the real price of your engagement ring setting », pierre centrale exclue. Pour sauvegarder un dessin, l'outil demande le nom et le téléphone, puis un « concierge » relance par SMS. [I] C'est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier.
- [V] **Maxwell & Co. (Leola, près de Lancaster) est le site le plus proche de l'esprit « prix expliqué » de JR Diamond.** Une seule fiche produit sert de configurateur : 5 styles, or 14 ou 18 k en jaune, blanc ou rose, pierre de 1 ct naturelle ou synthétique. Ses 60 variantes ont chacune leur prix, de 2 823 à 12 650 $. La page dit : « The price you see is the full price for that exact ring ». La bague est faite à la main sur place en 2 à 4 semaines, avec bouton « Add to cart », essayage sur la main par la caméra et mesure de la taille à l'écran avec une pièce de monnaie. Pas de 3D : ce sont des photos.
- [I, extraits] **Kev's Jewelry Designs (Mount Wolf) est le plus proche de la promesse « ce que vous voyez existe ».** Le site a une visionneuse 3D d'« a real model from my studio », et le parcours est montré pas à pas : CAO, maquette imprimée en résine à essayer « within about two days », fonte à l'atelier, sertissage à la main. Le budget va de 1 000 à 50 000 $, en naturel ou en synthétique. Le robots.txt interdit `ClaudeBot` et `anthropic-ai` : aucune page lue.
- [V] **Steven Singer (Philadelphie) fait le même délai que JR Diamond.** Ses bagues « Build Your Own » sont chiffrées (à partir de 1 748 $), en or 14 k ou en platine, avec une « Shipping Estimate: 14 Business Days », une garantie de 100 jours et la livraison gratuite dans les deux sens. Le site ne propose que du naturel : « all are natural ».
- [V] **Fabrication montrée, sans configurateur** : L. Priori (Philadelphie) montre rendus CAO, maquette en cire à l'échelle, 4 à 6 semaines de fabrication et une option express à 350 $ sans maquette. Bario Neal (Philadelphie) annonce un atelier sur place, des métaux recyclés ou Fairmined et une maquette en cire imprimée en 3D. Henne (Pittsburgh) fait une CAO « often accompanied by a 360-degree video rendering » et compte 4 à 6 semaines. BEL Jewelers (nord-est de Philadelphie) fait CAO et fabrication sur place. Trinity (Pittsburgh) passe par croquis, CAO, maquette en cire ou en résine.
- [V] **Synthétique** : il est proposé chez Maxwell (option « Lab 1 ct »), PHD Jewelers (collection « Lab Grown Diamonds Engagement Rings », 384 produits), L. Priori (bagues synthétiques chiffrées en page d'accueil), Bario Neal (filtre « Lab-Grown Diamonds »), Trinity (certificats IGI) et Milner (guide « Lab Grown vs Natural Diamonds »). Henne le propose « upon request » seulement. Steven Singer n'en propose pas.
- [V] **Délais publiés** : 14 jours ouvrés (Steven Singer), 2 à 4 semaines (Maxwell, Milner), « a couple of weeks » (Noah Gabriel, Dahlkemper's), 4 à 6 semaines (Sara Gallo, L. Priori, Henne), environ 8 semaines du premier rendez-vous à la livraison (L. Priori). JR Diamond : 14 jours ouvrés.
- [V] **Blocages** :
  - King's Jewelry : page Cloudflare « Just a moment... » (code 403) sur l'accueil et sur la page du sur-mesure. Aucun nouvel essai, faits tirés des extraits de recherche [I].
  - Kev's Jewelry Designs : robots.txt `Disallow: /` pour `ClaudeBot` et `anthropic-ai`, alors que `*` est autorisé avec `Content-Signal: search=yes, ai-train=no`. Seul le robots.txt a été lu.
  - Crawl-delay de 2 s chez Dahlkemper's et Trinity (respecté).
  - Robbins Diamonds : le nom de domaine `robbinsdiamonds.com` est à vendre (fichier `llms.txt` de GoDaddy), site écarté.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Maxwell & Co. Jewelry | Leola (Lancaster) | https://maxwellandcojewelry.com/ | https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler | oui (fiche à options chiffrées : style, métal, naturel ou synthétique ; pas de 3D) | non (robots.txt Shopify standard) | [V] Prix complet et final de chaque combinaison : 60 variantes de 2 823 à 12 650 $ ; solitaire rond 1 ct en or 14 k : 3 245 $ en synthétique, 4 950 $ en naturel ; en 18 k : 4 485 et 6 490 $. Taille 7 de référence, ± 2,7 % par demi-taille. Fait main sur place, 2 à 4 semaines, « Add to cart », essayage par caméra, mesure de la taille à l'écran. Sur-mesure à séance de dessin payante (99,99 $, déduits de l'acompte, 5 rendus au plus), 50 % à la mise en fabrication. |
| 2 | Steven Singer Jewelers | Philadelphie (Center City) et Newtown | https://www.ihatestevensinger.com/ | https://www.ihatestevensinger.com/collections/engagement-rings (fiches « Build Your Own », ex. https://www.ihatestevensinger.com/products/jocelyn-build-your-own-earth-born-diamond-engagement-ring) | oui (monture + forme + métal + pierre certifiée choisie ; non actionné) | non (robots.txt Shopify ; `/collections` sans barre interdit, `/collections/` autorisé) | [V] 127 bagues chiffrées, dont 8 « Build Your Own » ; Jocelyn à partir de 1 748 $, 10 formes, or 14 k (3 couleurs) ou platine. Délai 14 jours ouvrés, comme JR Diamond. Garantie de 100 jours, livraison gratuite aller et retour, première mise à taille offerte. Naturel seulement. |
| 3 | Kev's Jewelry Designs | Mount Wolf (York) | https://www.kevsjewelrydesigns.com/ | https://www.kevsjewelrydesigns.com/ (visionneuse 3D « Tap to spin it in 3D » sur l'accueil) | non (visionneuse 3D d'un vrai modèle de l'atelier ; sur-mesure en visio) [I] | **partiel** : robots.txt interdit `ClaudeBot` et `anthropic-ai` ; aucune page lue | [I, extrait] Le plus proche de « ce que vous voyez existe » : modèle 3D réel à faire tourner, maquette imprimée en résine à essayer, fonte à l'atelier (« three 3D printers »), budget de 1 000 à 50 000 $, naturel ou synthétique, transformation de bijoux de famille, clients à distance par vidéo. Pas de salle d'exposition. CAO depuis 1999. |
| 4 | House of Milner Jewelers | Philadelphie (Jewelers' Row) | https://milnerdiamonds.com/ | https://milnerdiamonds.com/pages/engagement-ring-builder | oui (3D JewelerOS ; non actionné) | non (Shopify) | [V] « Since 1906 », 728 Sansom St. Prix réel de la monture dans l'outil 3D, sans la pierre centrale. Prête en 2 à 4 semaines. Guide naturel ou synthétique. Nom et téléphone demandés pour sauvegarder un dessin, relance par SMS. Rendez-vous en salle ou à distance. |
| 5 | PHD Jewelers | Haverford (Main Line, Philadelphie) | https://phdjewelers.com/ | https://phdjewelers.com/apps/ringbuilder/settings/ (« Start with a Setting » / « Start with a Diamond ») | oui (Ring Builder GemFind ; non actionné) | non (Shopify) | [V] Parcours monture puis diamant, recherche de diamants en ligne. Collection synthétique de 384 bagues de fiançailles, prix « from » de 2 594 à 23 326 $ sur la page lue. Mention « Prices are … only guaranteed when you place an order online ». |
| 6 | Sara Gallo Custom Jewelers | Lancaster | https://saragallo.com/ | https://saragallo.com/pages/custom-ring-builder | oui (3D JewelerOS ; non actionné) | non (Shopify) | [V] Créatrice diplômée (MFA en métal, bijou et CAO-FAO, Temple University ; AJP du GIA). Fabrication en 4 à 6 semaines après validation. Transformation de bijoux de famille (« Heirloom redesign »). 146 N Prince St. |
| 7 | Noah Gabriel & Co. Jewelers | Wexford et Ross Park Mall (Pittsburgh) | https://noahgabrielco.com/ | https://noahgabrielco.com/pages/design-your-ring | oui (3D JewelerOS ; non actionné) | non (Shopify) | [V] Texte JewelerOS, « more than 400 unique engagement ring styles on display ». Garanties « Perfect Ring Guarantee™ », reprise à 110 % pour une pierre plus grosse, meilleur prix. Pierre choisie en salle. |
| 8 | Dahlkemper's Jewelry Connection | Erie | https://www.dahlkempers.com/ | https://www.dahlkempers.com/pages/design-your-ring | oui (3D JewelerOS ; plus montures Punchmark) [V script] | non (Crawl-delay 2) | [V] Joaillier familial « for over 60 years », 6845 Peach St. Texte JewelerOS, « a couple of weeks ». Rubrique « Lab Grown Diamonds ». |
| 9 | L. Priori Jewelry | Philadelphie | https://www.lpriorijewelry.com/ | https://www.lpriorijewelry.com/pages/custom-engagement-ring-process | non (sur-mesure sur rendez-vous ; bagues prêtes à porter chiffrées) | non (Shopify) | [V] Bagues synthétiques chiffrées en page d'accueil (de 3 000 à 9 700 $ sur la page lue). Processus détaillé : rendus CAO, maquette en cire à l'échelle, 4 à 6 semaines de fabrication, environ 8 semaines en tout, option express à 350 $ sans maquette. Synthétique non repris à l'échange. 1719 Chestnut St. |
| 10 | Bario Neal | Philadelphie (siège et atelier ; aussi New York) | https://bario-neal.com/ | https://bario-neal.com/product-category/custom-design/ ; catalogue : https://bario-neal.com/product-category/engagement/ | non (questionnaire Typeform pour le sur-mesure) | non (WordPress) | [V] 60 articles en première page du catalogue de fiançailles, prix « Starts At » de 300 à 7 520 $. Métaux recyclés ou Fairmined, pierres traçables, synthétique, tailles 2 à 16. Atelier et boutique au 524 S. 5th St. Cire imprimée en 3D puis fonte. |

## Fiches

### 1. Maxwell & Co. Jewelry (Leola)

- [V] 6 Glenbrook Rd, Leola, PA 17540, du mardi au samedi. Source : https://maxwellandcojewelry.com/pages/custom-jewelry-design
- [V] Sur-mesure : « Start your design session — $99.99 » (au plus 5 rendus, montant déduit de l'acompte, non remboursable), « When building starts, 50% of the price is due », solde à la remise. Même page.
- [V] Constructeur : options « Style » (Round Halo, Oval Halo, Princess Solitaire, Round Solitaire, Heart Solitaire), « Metal » (14k et 18k, blanc, jaune, rose) et « Center Stone » (Natural 1 ct, Lab 1 ct). Texte : « No deposit games, no surprise add-ons, no "call for price." » Délai « 2 to 4 weeks ». Taille US 7 de référence, ± 2,7 % par demi-taille. Mentions « 48-hour returns · Fully insured shipping ». Essayage « See it on your hand » (caméra ou photo, « Nothing is uploaded »). Formulaire « Make an Offer » avec carte bancaire : non ouvert. Source : https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler
- [V] Prix des 60 variantes, lus dans les données du produit servies par la page : de 2 823 $ (Princess Solitaire, 14k, Lab) à 12 650 $ (Heart Solitaire, 18k jaune, Natural). Même page.

### 2. Steven Singer Jewelers (Philadelphie)

- [V] « the Other Corner of 8th & Walnut in Center City Philadelphia », plus une salle d'exposition à Newtown (comté de Bucks). Source : https://www.ihatestevensinger.com/
- [V] 127 produits ; texte : « all are natural and ethically sourced ». Garanties : une mise à taille offerte, « 100-day money-back Love Guarantee », nettoyage annuel offert. Source : https://www.ihatestevensinger.com/collections/engagement-rings
- [V] Jocelyn « Build Your Own » : « From $1,748 », 10 formes, métal 14K blanc, jaune, rose ou platine, « Shipping Estimate: 14 Business Days ». Texte : « you pick the loose certified diamond, metal type, diamond shape and finger size ». Extension de garantie « Lifetime Love Guarantee » à 224,99 $. Source : https://www.ihatestevensinger.com/products/jocelyn-build-your-own-earth-born-diamond-engagement-ring
- [I] Le choix de la pierre certifiée se fait dans un module chargé par script (mention `ring-builder` dans le code), non actionné.

### 3. Kev's Jewelry Designs (Mount Wolf)

- [V] robots.txt : `User-agent: *` → `Allow: /` avec `Content-Signal: search=yes, ai-train=no` ; groupe `GPTBot`, `ClaudeBot`, `anthropic-ai`, `CCBot`… → `Disallow: /`. `Claude-User` n'est pas cité. Par prudence, aucune page lue. Source : https://www.kevsjewelrydesigns.com/robots.txt
- [I, extrait de recherche] « This is a real model from my studio » (visionneuse 3D) ; « Within about two days of settling the design, I print a 3D model so you can try it on » ; « I cast many pieces myself in my studio » ; « $1,000 to $50,000 typical engagement ring range » ; « Earth-mined or lab-grown diamonds, your choice » ; consultation et premiers rendus gratuits ; pas de boutique, rendez-vous à domicile dans le centre-sud de la Pennsylvanie ou par vidéo ; CAO pour d'autres joailliers depuis 1999. Source indexée : https://www.kevsjewelrydesigns.com/

### 4. House of Milner Jewelers (Philadelphie)

- [V] « Since 1906 » ; Jewelers' Row. Source : https://milnerdiamonds.com/
- [V] JE Caldwell Building, 728 Sansom St, Philadelphia, PA 19106. Textes : « Ready In 2-4 Weeks », « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s) ». Nom et téléphone demandés pour sauvegarder, sans compte. Source : https://milnerdiamonds.com/pages/custom-engagement-rings-philadelphia
- [V] Script JewelerOS `partner_config.js`, `data-org-id="9VRv6dXlURGs"`. Source : https://milnerdiamonds.com/pages/engagement-ring-builder

### 5. PHD Jewelers (Haverford)

- [V] 379 W Lancaster Ave, Haverford, PA 19041. Le menu mène au « Ring Builder ». Source : https://phdjewelers.com/
- [V] Page du constructeur : « Start with a Setting », « Start with a Diamond ». Outil GemFind chargé par script, non actionné. Source : https://phdjewelers.com/apps/ringbuilder/settings/
- [V] « 384 products », prix « from » de 2 594 à 23 326 $ sur la page lue ; mention « Prices are subject to change and are only guaranteed when you place an order online ». Source : https://phdjewelers.com/collections/lab-grown-diamonds-engagement-rings-haverford-pa

### 6. Sara Gallo Custom Jewelers (Lancaster)

- [V] 146 N Prince St., 3rd Floor, Lancaster, PA 17603. Créatrice avec plus de 20 ans de métier, MFA « Metals/Jewelry/CAD-CAM », AJP du GIA. Texte : « Production typically takes 4–6 weeks after design approval ». Source : https://saragallo.com/pages/custom-engagement-rings
- [V] Script JewelerOS, `data-org-id="9eUYwAhi1Txh"`. Source : https://saragallo.com/pages/custom-ring-builder
- [V] Rubrique « Heirloom redesign ». Source : https://saragallo.com/

### 7. Noah Gabriel & Co. Jewelers (Wexford)

- [V] 271 Market Ln, Wexford, PA 15090, et Ross Park Mall. Texte : « more than 400 unique engagement ring styles on display », « 110% Lifetime Diamond Upgrade Guarantee », « Best Price Guarantee ». Source : https://noahgabrielco.com/pages/custom-engagement-rings
- [V] Script `jeweleros.com/static/dist/jos.js`, `data-org-id="9npNC88sXKcr"`. Source : https://noahgabrielco.com/pages/design-your-ring

### 8. Dahlkemper's Jewelry Connection (Erie)

- [V] 6845 Peach St, Erie, PA 16509 ; « For over 60 years ». Source : https://www.dahlkempers.com/pages/custom-engagement-rings
- [V] Script JewelerOS, `data-org-id="9ogPjdbFD1D4"`. Le code contient un gabarit Punchmark (`/ringsettings-diamonds`) et une rubrique « Lab Grown Diamonds ». Sources : https://www.dahlkempers.com/pages/design-your-ring, https://www.dahlkempers.com/

### 9. L. Priori Jewelry (Philadelphie)

- [V] 1719 Chestnut Street, Ste 300, Philadelphia, PA 19103. 11 mentions « Lab Grown » ; prix soldés de 3 000 à 9 700 $ sur la page lue. Source : https://www.lpriorijewelry.com/
- [V] « computer generated renderings, and even a to-scale wax model of your ring » ; « about 4-6 weeks » de fabrication ; « up to ~8 weeks » en tout ; option express : « we can rush your ring for an extra fee of $350 » ; les diamants synthétiques ne sont pas repris à l'échange. Source : https://www.lpriorijewelry.com/pages/custom-engagement-ring-process

### 10. Bario Neal (Philadelphie)

- [V] « Philadelphia flagship store and workshop », 524 S. 5th Street, Philadelphia, PA 19147 ; « 100% recycled or Fairmined certified metals ». Source : https://bario-neal.com/philadelphia-shop/
- [V] 60 articles « Starts At » en première page (de 300 à 7 520 $). Filtres « Lab-Grown Diamonds » et « Recycled Diamonds ». Diamonds from « Australia, Canada, or Namibia with full traceability ». Source : https://bario-neal.com/product-category/engagement/
- [V] Sur-mesure : questionnaire Typeform, photos des pierres disponibles, puis « made into wax by 3D printing or through a molding process and then cast ». Source : https://bario-neal.com/product-category/custom-design/

## Écartés ou hors classement

- Henne Jewelers (Pittsburgh, Shadyside, 5501 Walnut St, depuis 1887, revendeur officiel Rolex) :
  - [V] bagues chiffrées de 1 625 à 13 950 $ sur la page lue, plus 5 « Price Upon Request ». Source : https://www.hennejewelers.com/collections/engagement-rings
  - [V] CAO « often accompanied by a 360-degree video rendering », 4 à 6 semaines après validation. Source : https://www.hennejewelers.com/pages/your-guide-to-designing-custom-engagement-ring (redirection depuis `/pages/engagement-ring-design`)
  - [V] Synthétique « upon request » seulement. Source : https://www.hennejewelers.com/pages/engagement-rings-faq
  - Hors classement : aucun outil en ligne, synthétique en retrait.
- Trinity Jewelers (Pittsburgh, 647 Mount Nebo Road) :
  - [V] parcours Punchmark « Choose Setting / Choose Diamond » chargé par script, prix non lus. Source : https://www.trinityjewelers.com/ringsettings-diamonds
  - [V] diamants synthétiques certifiés IGI. Source : https://www.trinityjewelers.com/jewelry/engagement-rings/lab-diamond-engagement-rings
  - [V] croquis, CAO, maquette en cire ou en résine, « over five decades ». Source : https://www.trinityjewelers.com/pages/custom-jewelry
  - Candidat suivant si un rang se libère.
- King's Jewelry (5 magasins en Pennsylvanie, 2 dans l'Ohio, fondé en 1914) :
  - [V] page Cloudflare de vérification (403) sur https://www.kingsjewelry.com/ et https://www.kingsjewelry.com/page/custom-engagement-rings.html : **bloqué**, aucun nouvel essai.
  - [I, extraits] texte JewelerOS (« Design your ring online in stunning 3D ») et articles « Call for Price » en page d'accueil.
  - Écarté : chaîne régionale, prix masqués, site illisible.
- BEL Jewelers (nord-est de Philadelphie, 13023 Bustleton Ave, depuis 1984) : [V] « We render your ring in 3D CAD, then our master jewelers make it in-house » ; aucun prix ni outil en ligne. Sources : https://beljewelers.com/engagement-rings/, https://beljewelers.com/custom-jewelry-design/
- JM Lichterman & Co (Jewelers' Row, 740 Sansom St) :
  - [V] page « Jewelry Configurator » : recherche de diamants naturels ou synthétiques (« 3,293 Total Stones Found ») et page « buildaband ». Sources : https://jmlichtermancompany.com/jewelry_configurator/, https://jmlichtermancompany.com/buildaband/
  - [I] les fiches affichées sur l'accueil (« Diamond #20 … 0.50 Carat Yellow Color ») ressemblent à des données d'essai et le site illustre ses rubriques avec des photos de banque d'images : site peu fiable.
  - Écarté.
- Robbins Diamonds (Philadelphie) : [V] nom de domaine à vendre sur GoDaddy le 25/11 (https://www.robbinsdiamonds.com/llms.txt ; l'accueil renvoie vers `/lander`). Écarté.
- Beeghly & Co. : [I, extrait] page « Lab Grown Diamonds in Pittsburgh, PA », mais adresse « 401 S Main St », hors Pennsylvanie [S, probablement Ohio]. Non retenu.
- South Hills Jewelers (Pittsburgh), MISKA Jewelers (State College) : [I, extraits] prix d'appel des diamants synthétiques (« 1ct. starts at $400 ») chez South Hills ; recherche de diamants et « Create Your Own Ring » chez Miska. Non lus, faute de rang disponible.

## Sources

Pages lues le 25/11/2026 avec curl (code 200 sauf mention) :

- Maxwell & Co. : https://maxwellandcojewelry.com/robots.txt, https://maxwellandcojewelry.com/, https://maxwellandcojewelry.com/pages/custom-jewelry-design, https://maxwellandcojewelry.com/products/engagement-ring-handmade-by-maxwell-the-jeweler
- Steven Singer : https://www.ihatestevensinger.com/robots.txt, https://www.ihatestevensinger.com/, https://www.ihatestevensinger.com/collections/engagement-rings, https://www.ihatestevensinger.com/products/jocelyn-build-your-own-earth-born-diamond-engagement-ring
- Kev's Jewelry Designs : https://www.kevsjewelrydesigns.com/robots.txt (seule page lue)
- House of Milner : https://milnerdiamonds.com/robots.txt, https://milnerdiamonds.com/, https://milnerdiamonds.com/pages/custom-engagement-rings-philadelphia, https://milnerdiamonds.com/pages/engagement-ring-builder
- PHD Jewelers : https://phdjewelers.com/robots.txt, https://phdjewelers.com/, https://phdjewelers.com/apps/ringbuilder/settings/, https://phdjewelers.com/pages/custom-design, https://phdjewelers.com/collections/lab-grown-diamonds-engagement-rings-haverford-pa
- Sara Gallo : https://saragallo.com/robots.txt, https://saragallo.com/, https://saragallo.com/pages/custom-engagement-rings, https://saragallo.com/pages/custom-ring-builder
- Noah Gabriel : https://noahgabrielco.com/robots.txt, https://noahgabrielco.com/, https://noahgabrielco.com/pages/custom-engagement-rings, https://noahgabrielco.com/pages/design-your-ring
- Dahlkemper's : https://www.dahlkempers.com/robots.txt, https://www.dahlkempers.com/, https://www.dahlkempers.com/pages/custom-engagement-rings, https://www.dahlkempers.com/pages/design-your-ring
- L. Priori : https://www.lpriorijewelry.com/robots.txt, https://www.lpriorijewelry.com/, https://www.lpriorijewelry.com/pages/custom-engagement-ring-process
- Bario Neal : https://bario-neal.com/robots.txt, https://bario-neal.com/, https://bario-neal.com/product-category/engagement/, https://bario-neal.com/product-category/custom-design/, https://bario-neal.com/philadelphia-shop/
- Henne : https://www.hennejewelers.com/robots.txt, https://www.hennejewelers.com/collections/engagement-rings, https://www.hennejewelers.com/pages/engagement-rings-faq, https://www.hennejewelers.com/pages/engagement-ring-design (redirige vers `/pages/your-guide-to-designing-custom-engagement-ring`)
- Trinity : https://www.trinityjewelers.com/robots.txt, https://www.trinityjewelers.com/, https://www.trinityjewelers.com/jewelry/engagement-rings/lab-diamond-engagement-rings, https://www.trinityjewelers.com/ringsettings-diamonds, https://www.trinityjewelers.com/pages/custom-jewelry
- King's Jewelry : https://www.kingsjewelry.com/robots.txt (404), https://www.kingsjewelry.com/ et https://www.kingsjewelry.com/page/custom-engagement-rings.html (403, vérification Cloudflare)
- BEL Jewelers : https://beljewelers.com/robots.txt, https://beljewelers.com/engagement-rings/, https://beljewelers.com/custom-jewelry-design/
- JM Lichterman : https://jmlichtermancompany.com/robots.txt, https://jmlichtermancompany.com/, https://jmlichtermancompany.com/jewelry_configurator/, https://jmlichtermancompany.com/buildaband/
- Robbins Diamonds : https://www.robbinsdiamonds.com/robots.txt, https://www.robbinsdiamonds.com/, https://www.robbinsdiamonds.com/llms.txt

Extraits de recherche (Parallel Search, requêtes génériques sur les joailliers de Pennsylvanie), utilisés pour les faits marqués [I] : https://www.kevsjewelrydesigns.com/, https://www.kingsjewelry.com/page/custom-engagement-rings.html, https://www.kingsjewelry.com/page/locations.html, https://www.kingsjewelry.com/, https://www.wkbn.com/marketplace/holiday-gift-guide/be-exquisite-timeless-treated-royally-for-the-holidays, https://www.beeghlyandcompany.com/pages/lab-grown-diamonds-in-pittsburgh-pa, https://www.southhillsjewelers.com/lab-grown-diamonds, https://www.miskajewelers.com/
