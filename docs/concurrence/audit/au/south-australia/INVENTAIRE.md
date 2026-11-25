# Inventaire des joailliers en ligne : Australie-Méridionale (South Australia)

Date : 25 novembre 2026, entre 00 h 30 et 00 h 40 UTC. Recenseur du territoire « South Australia ».
Étude parente : `docs/concurrence/2026-11-15_australie.md`. Voir aussi les inventaires `audit/au/new-south-wales/`, `victoria/` et `queensland/` : Temple & Grace, Lily Dia, Cullen et Moi Moi y sont déjà fichés. Ils ont des pages « Adelaide » mais leur siège est ailleurs (voir « Autres candidats »).

Légende :
- **[Vn]** vérifié : page lue directement le 25/11/2026 (curl, identité par défaut), source n en fin de fichier ;
- **[Cn]** copie : page lue dans la copie d'un service de lecture (Parallel, **cache seul**, sans connexion au site), date de la copie en Sources ;
- **[En]** extrait : texte renvoyé par un moteur de recherche (Parallel), page non ouverte ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), tels qu'affichés, sauf mention « USD ». « Synthétique » traduit « lab-grown » et « lab created ».

## Méthode

- Recherche par requêtes génériques, sans aucune mention de JR Diamond : « Adelaide jeweller engagement ring builder », « design your own engagement ring Adelaide », « Mount Gambier jeweller engagement rings online », « Unley jeweller engagement rings », etc. Aucun candidat sérieux hors de l'agglomération d'Adelaide (Glenelg, Burnside, Hyde Park compris) [I].
- `robots.txt` lu d'abord pour les 10 domaines retenus (curl), puis contrôlé avec l'outil `robots.cjs` avant chaque page [V0].
  - Aucun fichier lu n'interdit tout le site ni ne vise nommément ClaudeBot, Claude-Web ou anthropic-ai [V0].
  - Gerard McCabe impose `Crawl-delay: 10` : respecté (au moins 11 s entre deux pages) [V0].
  - Chemins interdits (panier, caisse, compte, `add-to-cart`) jamais visités.
- Au plus une page toutes les 2 secondes par site. Aucun formulaire rempli ni envoyé, aucun compte, aucun ajout au panier, aucune conversation ouverte (l'assistante « Aria » de Simon Alexander est seulement notée [C1]).
- « Configurateur : oui » = un outil en ligne qui assemble monture, pierre et métal, ou qui fait choisir la pierre exacte avec un prix de bague finie. « Non » = catalogue, ou demande sur mesure en salle.
- Les copies [C] ont été demandées en mode « cache seul » (`allow_live_fetch: false`), pour ne pas faire lire en direct, par un tiers, un site qui nous avait refusé.

## Blocage

- **Défi Shopify (429 « Verifying your connection… »)**. Depuis l'environnement cloud, les boutiques Shopify ont répondu 200 à une ou deux requêtes, puis 429 [V0] :
  - **Simon Alexander** et **The Classic Jewellers** : `robots.txt` lu en 200 à 00 h 32, puis 429 à la deuxième requête (celle de l'outil de contrôle, à 00 h 33) ;
  - **Utopian Creations** : 429 dès `robots.txt` (curl). L'outil de contrôle, quelques secondes plus tard, a lu le fichier en 200 (`Allow: /`). Aucune page ouverte ensuite ;
  - **Harry & Co** : `robots.txt` lu en 200, puis 429 sur la page de départ ;
  - **Mazzone** : `robots.txt` et page de départ lus en 200, puis 429 sur une fiche produit.
  - Le même défi a touché le Queensland le même jour (voir son inventaire). Il dépend du volume de requêtes vers Shopify depuis notre adresse, pas d'un refus propre à ces sites [I].
- **Cloudflare (403 « Just a moment… »)** : **Everett Brookes**, dès `robots.txt` [V0].
- **403** sur `https://shop.gerardmccabe.com.au/robots.txt` (sous-domaine cité dans le plan du site de Gerard McCabe) [V0]. Le domaine principal www.gerardmccabe.com.au a répondu 200 : pages lues normalement.
- Règle appliquée : aucun nouvel essai, pas de navigateur, pas de changement d'identité pour passer un défi. Ces sites sont marqués **bloqué** ; leurs constats viennent de copies [C] ou d'extraits [E].
- Lus sans difficulté : DDS Diamonds (WordPress), Gerard McCabe (WordPress), Solid Gold Diamonds (Magento), Wishart (Shopify, une page) [V].

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique [I]. Colonne « adresse » : site ; adresse postale dans la colonne « ville ».

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Simon Alexander Jewellers | Adelaide CBD : Level 1, 14 King William Street ; boutique et établi à Adelaide [C1][C2] | https://www.simonalexander.com.au | https://www.simonalexander.com.au/collections/lab-grown-engagement-rings [C1] | **Oui**, sur la fiche : métal et carat, puis choix de la **pierre exacte parmi « Simon's five »**, chacune « in 360° », avec le prix de la bague finie [C1][C2] | **Bloqué** (défi Shopify après `robots.txt`) [V0] | Le plus proche de « prix expliqué » et « pierre filmée » : 88 modèles synthétiques ; « Every price is live » ; dès moins de 2 000 AUD à 1 ct en or 9 ct, environ 3 000 AUD à 1 ct en or blanc 18 ct [C1]. GIA pour le naturel, IGI pour le synthétique ; chaque modèle existe dans les deux [C2]. Dessin approuvé avant fabrication, 4 à 6 semaines, acompte de 50 %, devis valable 14 jours [C2]. « The report in the box is the only place the word lab-grown appears » [C1] |
| 2 | Andrew Mazzone Design Jewellers | Adelaide CBD : Studio 204 Grenfell St [V3] | https://www.mazzone.com.au | https://www.mazzone.com.au/collections/custom-engagement-rings (cible de la redirection de `/collections/engagement-rings`) [V3] | **Oui**, en 3 étapes : « Choose Your Setting », « Choose Your Diamond », « Complete Your Ring » ; 193 montures ; or 14 et 18 ct (jaune, blanc, rose) et platine ; naturel ou synthétique [V3] | Aucun sur la page de départ (200) ; puis défi Shopify sur une fiche [V0] | Montures à prix affichés (« From $2,299 », prix de la monture seule) avec « Add to cart » [V3][C4]. Pierre centrale de 0,50 à 3,00 ct ; GIA pour le naturel, IGI pour le synthétique ; 4 à 6 semaines [C4]. Acompte de 50 %, sur mesure non remboursable [C4]. Page « CAD (Computer Aided Design) » au menu ; maison fondée en 1960 [V3] |
| 3 | EverettBrookes Jewellers | Adelaide CBD : 90 Gawler Place [C5] | https://everettbrookes.com.au | https://everettbrookes.com.au/create-your-own-engagement-ring-online/choose-a-setting/ (lien du menu : `?clearcart=true&step=setting`) [C6] | **Oui**, en 3 étapes : « Choose a setting », « Choose a diamond », « Place your order online » ; « hundreds of Custom Designer Series styles » [C5][C6] | **Bloqué** (Cloudflare 403 dès `robots.txt`) [V0] | Inventaire de diamants synthétiques avec filtres (taille, pureté, couleur, laboratoire GIA, IGI, HRD…) ; prix en AUD TTC ; « all sales are final » [E7]. Toutes les bagues sont faites sur commande [C5]. Service « make your own ring » à l'établi avec un joaillier ; essayage virtuel de pierres (« Virtual Diamond ring sizer ») [E7]. Copies datées de juin 2026 : contenu actuel non contrôlé [C6] |
| 4 | Harry & Co Jewellery | Hyde Park : 148 King William Road, SA 5061 [C8][E9] | https://harryandcojewellery.com.au | https://harryandcojewellery.com.au/collections/engagement-rings [C8] | Non : catalogue de 83 bagues à prix « From », puis rendez-vous pour le sur mesure [C8][E9] | **Bloqué** (défi Shopify sur la page de départ) [V0] | Prix affichés dès 2 500 AUD (de 2 500 à 4 500 AUD sur la page) ; or 14 ou 18 ct et platine ; naturel ou synthétique [C8]. Sur mesure dès 4 000 AUD : rendus CAO **et maquettes imprimées en 3D**, 4 à 6 semaines après validation, 50 % puis 50 %, Afterpay et Humm [E9]. « Transparent pricing - no surprises, ever » [E9] |
| 5 | The Classic Jewellers | Adelaide CBD : salle et atelier au 94 Gawler Place ; réparations au 21-23 Rundle Mall [C10] | https://theclassicjewellers.com | https://theclassicjewellers.com/collections/engagement-rings-ready-to-ship [C10] | Non : bagues synthétiques prêtes à expédier, à prix affichés ; sur mesure sur devis [C10] | **Bloqué** (défi Shopify après `robots.txt`) [V0] | Prix du sur mesure annoncé : dès 2 500 AUD pour un solitaire 18 K avec un synthétique rond de 1,0 ct G VS1 [C10]. 4 à 6 semaines **après validation du dessin CAO** [C10]. Bagues prêtes de 4 020 à 5 780 AUD (remises) [C10]. Location d'une bague de demande, déduite ensuite [C10]. Atelier dans le centre depuis 1999 [C10] |
| 6 | Utopian Creations | Adelaide CBD : 20 Ebenezer Place [C11] | https://utopiancreations.com.au | https://utopiancreations.com.au/pages/engagement-rings-adelaide-utopian-creations [E12] | Non : consultation (studio ou vidéo), puis dessin et rendu [E12] | **Bloqué** (défi Shopify dès `robots.txt`) [V0] | Parcours de fabrication détaillé : dessins et rendus, puis maquette imprimée à essayer, fonte à Sydney, finition et sertissage à Adelaide, 6 à 8 semaines [E12]. Pierres à essayer chez soi ; « Client sign-in » [E12]. Saphirs australiens, naturel et synthétique ; bagues prêtes de 8 850 à 17 400 AUD [E12][C11] |
| 7 | Gerard McCabe | Adelaide CBD : Shop 2 Adelaide Arcade, et Rundle Mall Plaza, 50 Rundle Mall [V13] | https://www.gerardmccabe.com.au | https://www.gerardmccabe.com.au/product-category/engagement-rings/ [V14] | Non : bagues prêtes à acheter (« Add to cart ») ; gamme « Made To Order » sans prix (« $POA ») [V14][V15] | Aucun sur le domaine principal (`Crawl-delay: 10` respecté) ; `shop.gerardmccabe.com.au` : 403 [V0] | Bagues synthétiques à prix affichés, en USD pour notre adresse américaine (ex. « Martine 1.59ct Oval Cut EVVS2 LAB », 4 243 USD) [V14] ; en AUD dans un extrait (6 495 AUD pour Celeste 1,16 ct) [E16]. Diamants dès 0,50 ct certifiés et gravés au laser [V13] ; GIA pour le naturel, IGI pour le synthétique [E16]. Sur mesure « POA » [V15] |
| 8 | Wishart Jewellers | Glenelg : 103 Jetty Road ; atelier sur place depuis 1953 [V17] | https://www.wishartjewellers.com.au | https://www.wishartjewellers.com.au/ (rubriques « Engagement Rings », « Wedding Bands », « Custom Design ») [V17] | Non : bagues à prix affichés avec « Add to cart » ; sur mesure en consultation [V17] | Aucun (200 sur la seule page lue) [V0] | Discours de fabrication fort : « built from raw gold or platinum », tout fait sur place, « four manufacturing jewellers » et un gemmologue [V17]. Bagues de 3 550 à 9 880 AUD sur l'accueil (bagues de couleur) [V17]. Pas de rubrique synthétique visible sur l'accueil [V17] |
| 9 | DDS Diamond Design Studios | Burnside : 46 High St, SA 5066 [V18] | https://ddsdiamonds.com.au | https://ddsdiamonds.com.au/jewellery/diamond-engagement-rings-adelaide/ [V19] | Non : catalogue filtrable (forme, métal, sertissage, prix de 800 à 80 000), surtout sans prix [V19] | Aucun (200) [V0] | Fabricant familial depuis plus de 65 ans ; naturel et synthétique ; or et platine [V18][V19]. Prix indicatifs en FAQ : la plupart dès environ 3 000 AUD, souvent de 5 000 à 15 000 AUD ; 3 à 5 semaines [V19] (6 à 8 semaines pour le sur mesure selon l'accueil [V18]). **Pas de paiement en ligne** : « We don't sell through an online checkout » ; demande ou rendez-vous [V18]. Un extrait de recherche plus ancien disait l'inverse [E28] |
| 10 | Solid Gold Diamonds (salle d'Adelaide) | Adelaide CBD : 32-36 Gawler Place. Siège et atelier à Perth (Hay St Mall) [V20][E21] | https://www.solidgold.com.au | https://www.solidgold.com.au/adelaide [V20] | Non relevé : le lien « Create your ring » (`designmyring/page/settings`) répond 404 [V22] | Aucun (200) [V0] | « See Your Diamond in 360° » pour chaque pierre certifiée ; naturel ou synthétique ; spécialiste du rose d'Argyle [V20]. Mais prix « $0.00 » dans la liste des bagues [E21], et fabrication à Perth [E21]. Retenu faute de mieux : marque de deux villes, sans fabrication locale [I] |

## Autres candidats, non retenus

| Acteur | Lieu | Raison |
|---|---|---|
| Temple & Grace | Salle au Suite 3, Level 1, 66 Wyatt Street, Adelaide [E23] | Siège à Sydney ; déjà fiché dans l'inventaire de la Nouvelle-Galles du Sud |
| Cullen Jewellery | Pages « Adelaide » : constructeur, CAO sous 5 jours ouvrés, 30 jours ouvrés de fabrication [E24] | Siège à Kew (Victoria), déjà fiché. La page parle d'un « Adelaide showroom » [E24] : non contrôlé |
| Lily Dia | Page « Engagement Rings Adelaide » [E25] | « No » salle à Adelaide, selon sa propre FAQ [E25] ; fiché dans l'inventaire de Victoria |
| Moi Moi Fine Jewellery | Page « Custom Made Engagement Rings Adelaide » [E26] | Siège à Sydney ; `robots.txt` interdit le site aux agents d'Anthropic (inventaire NSW). Page non ouverte |
| VYOR Diamond Lab | Perth [E27] | Seulement des rendez-vous vidéo pour Adelaide [E27] |
| Shiels | Siège historique à Adelaide [S] | Chaîne nationale exclue par la consigne |

## Ce qu'il faut retenir pour JR Diamond [I]

- **Simon Alexander** est le concurrent local le plus proche de la promesse « pierre filmée, prix expliqué ». On choisit la pierre réelle parmi cinq, en vidéo 360°, avec le prix de la bague finie et le certificat. Les prix sont publiés « so you can plan before you speak to anyone » [C1]. Il n'y a pas de 3D de la monture.
- **Aucun site du territoire ne montre la monture en 3D** issue du fichier de fabrication. Les CAO et maquettes imprimées viennent après la consultation (Mazzone, Harry & Co, Classic, Utopian) [V3][E9][C10][E12].
- Le **prix décomposé** reste rare. Mazzone sépare la monture (« setting only ») et la pierre ; Simon Alexander prévient que l'or suit le cours du jour [C4][C1]. Personne ne détaille façon, sertissage et marge.
- Le délai local est de **4 à 8 semaines** après validation [C2][C4][E9][C10][E12] ; JR Diamond annonce 14 jours ouvrés.
- Le synthétique est partout. Simon Alexander et Mazzone l'associent à l'IGI et le naturel au GIA, comme l'atelier de JR Diamond [C2][C4].

## Sources

Toutes les lectures directes datent du 25/11/2026, entre 00 h 32 et 00 h 40 UTC. Les dates des copies Parallel sont celles de leur acquisition dans le cache.

- [V0] `robots.txt` (curl, identité par défaut) et outil `robots.cjs` :
  - lus en 200 : www.simonalexander.com.au, www.mazzone.com.au, harryandcojewellery.com.au, theclassicjewellers.com, ddsdiamonds.com.au (après redirection depuis www), www.gerardmccabe.com.au (`Crawl-delay: 10`), www.wishartjewellers.com.au (après redirection), www.solidgold.com.au ;
  - refus : utopiancreations.com.au (429 « Verifying your connection… » en curl, 200 `Allow: /` via l'outil) ; everettbrookes.com.au (403 « Just a moment… », Cloudflare) ; shop.gerardmccabe.com.au (403) ;
  - l'outil a reçu 429 pour simonalexander.com.au et theclassicjewellers.com (« INCONNU ») ;
  - 429 sur https://harryandcojewellery.com.au/collections/engagement-rings et https://www.mazzone.com.au/products/cushion-cut-diamond-solitaire-engagement-ring-1-cu-yg.
  - Aucun nouvel essai.
- [C1] https://www.simonalexander.com.au/collections/lab-grown-engagement-rings (copie Parallel du 19/11/2026) : « today's five diamonds that meet Simon's standard, most in 360° » ; « 88 products » ; « Every price is live » ; « From under $2,000 at 1.00ct » ; « about $3,000 at 1.00ct in 18ct white gold » ; « $4,800 and $6,300 » à 2 ct ; « Allow four to six weeks » ; assistante « Aria ».
- [C2] https://www.simonalexander.com.au/pages/jewellers-adelaide (copie Parallel du 19/11/2026) : « Level 1, 14 King William Street » ; « GIA certificate » / « IGI certificate » ; « A 50% deposit » ; « Custom quotes … hold for 14 days » ; « in the city since 2001 ».
- [V3] https://www.mazzone.com.au/collections/engagement-rings → `/collections/custom-engagement-rings` (curl 200) : « BUILD YOUR ENGAGEMENT RING Step 1: Choose Your Setting Step 2: Choose Your Diamond Step 3: Complete Your Ring » ; « 193 products » ; « From $2,299 » ; métaux 14ct, 18ct, Platinum ; « natural mined diamonds and laboratory grown diamonds » ; menu « CAD (Computer Aided Design) » ; « 204 Grenfell St, Adelaide ».
- [C4] https://www.mazzone.com.au/products/cushion-cut-diamond-solitaire-engagement-ring-1-cu-yg (copie Parallel du 26/10/2026) : « Sale price $2,399 » ; « Add to cart » ; « Above price shown is for the setting only » ; « GIA certification » / « IGI certification » ; « 0.50ct to 3.00ct » ; « 4-6 week turn around » ; « 50% deposit ».
- [C5] https://everettbrookes.com.au/ (copie Parallel du 20/11/2026) : « 90 Gawler Place, Adelaide » ; « Build your own from hundreds of Custom Designer Series styles » ; « all our rings are made to order ».
- [C6] https://everettbrookes.com.au/create-your-own-engagement-ring-online/choose-a-setting/ (copie Parallel du 23/06/2026) et https://everettbrookes.com.au/engagement-rings/create-your-own-engagement-ring/ (copie du 07/11/2025) : « 1. CHOOSE A SETTING 2. CHOOSE A DIAMOND 3. PLACE YOUR ORDER ONLINE ».
- [E7] https://everettbrookes.com.au/labgrown-diamonds et https://everettbrookes.com.au/engagement-rings (extraits de recherche) : filtres « Grading Report : AGS CGL GIA HRD IGI GCAL » ; « All prices quoted in Australian dollars, inclusive of GST » ; « all sales are final » ; « make your own ring » ; « Virtual Diamond ring sizer ».
- [C8] https://harryandcojewellery.com.au/collections/engagement-rings (copie Parallel du 22/11/2026) : « View 83 items » ; « From $3,000 », « From $4,500 », « From $2,500 » ; « 18kt or 14kt gold … or platinum » ; « 148 King William Road, Hyde Park SA 5061 ».
- [E9] https://harryandcojewellery.com.au/pages/custom-made-engagement-rings et https://harryandcojewellery.com.au/ (extraits de recherche) : « CAD renders and 3D prints » ; « starting from $4,000 » ; « 4 - 6 weeks » ; « 50% to begin and 50% on completion » ; « Humm and AfterPay » ; « Transparent pricing ».
- [C10] https://theclassicjewellers.com/ et https://theclassicjewellers.com/pages/lab-grown-diamonds-adelaide (copies Parallel du 22/11/2026) : « 94 Gawler Place » ; « Since 1999 » ; prix des bagues prêtes (4 020,50 à 5 780 AUD) ; « 4 to 6 weeks … once you approve the CAD drawing » ; « from $2,500 for an 18K solitaire with a 1.0ct round lab-grown diamond, G colour, VS1 » ; location de bague. Extrait de recherche de la page lab-grown : réparations au 21-23 Rundle Mall.
- [C11] https://utopiancreations.com.au/ (copie Parallel du 22/11/2026) : « 20 Ebenezer Place, Adelaide » ; « Margaret … $17,400 ».
- [E12] https://utopiancreations.com.au/pages/engagement-rings-adelaide-utopian-creations et https://utopiancreations.com.au/ (extraits de recherche) : « Most pieces are cast in Sydney, then finished and set at our Adelaide bench » ; « six to eight weeks » ; « a printed model to try » ; « Home trial » ; « Cassia … $8,850 » ; « Since 2005 ».
- [V13] https://www.gerardmccabe.com.au/engagement-rings/ (curl 200) : « diamonds 0.50ct and up are certified and laser inscribed » ; « Shop 2 Adelaide Arcade » ; « Rundle Mall Plaza, 50 Rundle Mall ».
- [V14] https://www.gerardmccabe.com.au/product-category/engagement-rings/ (curl 200) : « Martine 1.59ct Oval Cut EVVS2 LAB Diamond Engagement Ring USD $ 4,243 Add to cart ».
- [V15] https://www.gerardmccabe.com.au/collection/made-to-order/?product-category=engagement-rings (curl 200, 11 s après [V14]) : « $POA - Made to Order ».
- [E16] https://www.gerardmccabe.com.au/product-category/engagement-rings et `/collection/lab-diamond-engagement-rings` (extraits de recherche) : « AU $ 6,495 » ; « Natural diamonds are fully certified by GIA, and lab grown diamonds are certified by IGI ».
- [V17] https://www.wishartjewellers.com.au/ (curl 200) : « 103 Jetty Road, Glenelg » ; « built from raw gold or platinum » ; prix de 3 550 à 9 880 AUD avec « Add to cart » ; « Since 1953 » ; « four manufacturing jewellers, a full-time designer, and a qualified gemmologist ».
- [V18] https://ddsdiamonds.com.au/ (curl 200) : « 46 High St, Burnside SA 5066 » ; « over 65 years » ; « six to eight weeks » ; « We don't sell through an online checkout. Every piece is discussed with you first ».
- [V19] https://ddsdiamonds.com.au/jewellery/diamond-engagement-rings-adelaide/ (curl 200) : filtres et « Price Range 800 — 80,000 » ; modèles en « Read more » ; « $ 1,700 » sur un ensemble ; « most start around $3,000 » ; « 3–5 weeks ».
- [V20] https://www.solidgold.com.au/adelaide (curl 200) : « 32-36 Gawler Place » ; « See Your Diamond in 360° » ; « natural or lab-grown » ; « Perth Showroom … Hay St Mall ».
- [E21] https://www.solidgold.com.au/engagement/engagement-rings.html et https://solidgold.com.au/ (extraits de recherche) : « handcrafted in our Perth jewellery manufacturing workshop » ; « $0.00 Add to Cart » ; « Head Office, L1 / 726 Hay St Mall Perth ».
- [V22] https://www.solidgold.com.au/designmyring/page/settings (curl 404 ; outil `robots.cjs` : autorisé).
- [E23] https://www.templeandgrace.com.au/engagement-rings-adelaide (extrait de recherche).
- [E24] https://cullenjewellery.com/en-au/engagement-rings/custom/au-adelaide et `/category/au-adelaide` (extraits de recherche).
- [E25] https://lilydiajewellery.com/engagement-rings-adelaide (extrait de recherche) : « Is there a LILY DIA showroom in Adelaide? No. ».
- [E26] https://www.moimoi.com.au/custom-made-engagement-rings-adelaide (extrait de recherche ; page non ouverte).
- [E27] https://vyor.com.au/collections/engagement-rings (extrait de recherche).
- [E28] https://ddsdiamonds.com.au/ (extrait de recherche, date inconnue) : « we offer online ordering through our website … simple checkout process ». Contredit par la page lue [V18] : la page lue prévaut.
