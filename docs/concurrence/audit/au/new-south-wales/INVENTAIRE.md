# Inventaire des joailliers en ligne : New South Wales et ACT

Date : 25 novembre 2026 (deuxième passe ; première passe du 15/11, dont le classement est confirmé).
Recenseur : New South Wales, avec le Territoire de la capitale australienne (ACT).
Étude parente : `docs/concurrence/2026-11-15_australie.md`. Larsen, Natalie Marie, Temple & Grace et Diamond Gallery y sont déjà fichés, sans le rang ci-dessous.

Légende :
- **[Vn]** vérifié : page lue ou contrôle actionné le 25/11/2026 (source n en fin de fichier).
- **[V15/11-n]** vérifié lors de la première passe du 15/11, non relu ce jour.
- **[I]** inféré ; **[S]** supposé ; **[E]** lu seulement dans un extrait de moteur de recherche, page non ouverte.

Prix en dollars australiens (AUD), tels qu'affichés, sauf mention « USD ». Les sites affichaient tous des soldes « Black Friday » le 25/11 : les prix relevés peuvent être remisés.

## Méthode

- Recherche par requêtes génériques (« engagement ring builder Sydney », « Canberra jeweller build your own engagement ring », « Wollongong jeweller engagement ring builder », etc.), sans aucune mention de JR Diamond.
- Contrôle des adresses par un petit script (bibliothèque standard Python `urllib.robotparser`) :
  - lecture du `robots.txt` de chaque hôte avant toute page ;
  - page ignorée si le `robots.txt` l'interdit ou répond par une erreur (403, 429) ;
  - 2,5 s au moins entre deux requêtes vers un même hôte ;
  - curl avec son identité par défaut, jamais changée.
- Rendu dans Chromium sans écran (Playwright, identité par défaut), 15 s d'attente, une seule fois par page. Relevés : texte, capture d'écran, nombre de `canvas` et de contextes WebGL, cadres intégrés.
- Aucun formulaire rempli, aucun compte, aucun ajout au panier, aucune conversation ouverte. Aucun nouvel essai après un refus.
- « Configurateur : oui » = un outil en étapes qui assemble monture, pierre et métal. « Partiel » = options et prix sur la fiche produit seulement.

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Larsen Jewellery | Sydney : Strand Arcade, niveau 5, 412-414 George St [V2]. Aussi Melbourne et Brisbane [V1] | https://www.larsenjewellery.com.au | https://www.larsenjewellery.com.au/engagement-rings (« Choose Your Setting », « 01 / 03 ») [V1] | Oui : monture, puis pierre centrale, puis personnalisation. Prix de la monture affiché (« Setting price $2,450 » à « $4,730 ») ; 241 modèles [V1] | Aucun (curl 200, Chromium 200) [V1]. `robots.txt` : `Disallow: /product/`, sauf une trentaine de fiches de diamants, à ne pas automatiser [V3] | Fondée à Sydney. Le plus proche de « l'atelier en direct » : bague fabriquée « in the very same room where you designed it » ; « advanced 3D renderings » avant fabrication [V2]. Naturel et synthétique [V1]. Aucun `canvas` au rendu : pas de 3D manipulable [V1] |
| 2 | Kate & Kole | Newcastle : Suite 1 & 2, 2 Honeysuckle Drive. Aussi un point de vente à New York (69 Mercer St) [V6] | https://www.kateandkole.com.au | https://www.kateandkole.com.au/pages/jewellery-builder (puis `/solitaire`, `/duet`, `/toi-et-moi`, `/trilogy`) [V4][V15/11-5] | Oui. Récapitulatif « Your Ring » : anneau, taille, pierre, serti, halo caché, gravure, délai (8 semaines), livraison, garantie, prix (8 290 USD sur la configuration par défaut) [V4, capture] | Aucun. Chromium est redirigé vers `us.kateandkole.com.au`, prix en USD. L'outil est servi dans un cadre intégré (`kate-kole-builder.vercel.app`), sans `canvas` [V4] | Configurateur le plus abouti du territoire [I]. Fabrication à Newcastle ou par l'équipe de sertissage de Brisbane [V5]. « Detailed technical drawings for your approval » ; « We send photos and videos of your completed ring » avant le solde ; acompte de 50 % [V5]. C'est la logique de JR Diamond. Diamants synthétiques [V5]. La configuration est codée dans l'adresse (paramètre `e=`) [V4] |
| 3 | TMC Fine Jewellers | Sydney : salle de Paddington, 83 Paddington St. Salle principale à New Farm (Brisbane) [V8] | https://tmcfinejewellers.com | https://tmcfinejewellers.com/pages/ring-builder [V7] | Oui, en étapes : monture, personnalisations (pavé, halo caché), pierres de naissance cachées placées par glisser-déposer (« $100.00 per birthstone », devise non précisée), gravure laser, taille, pierre [V7] | Aucun. Chromium est redirigé vers `/en-us/`, prix en USD [V7] | Un CAD par commande, révisions illimitées ; « weekly progress updates » ; fabrication en 10 semaines [V8]. Synthétique et moissanite seulement [V8]. Siège hors NSW : le recenseur du Queensland peut aussi le retenir [I] |
| 4 | Monroe Yorke Diamonds | Sydney : Level 29, 85 Castlereagh St, sur rendez-vous. Le titre de la page dit « Leichhardt Showroom » et le texte « Inner West showroom » [V10] | https://www.mydiamonds.com.au | https://www.mydiamonds.com.au/pages/ring-builder, qui redirige vers `/collections/engagement` (« Your ring, in three steps » : Setting, Centre Diamond, Review) [V9] | Oui : monture puis diamant certifié, prix total en direct. Un assistant (« concierge ») trouve des pierres réelles, les place dans une monture et affiche le prix [V9] | Aucun [V9] | GIA pour le naturel et IGI pour le synthétique, comme JR Diamond (HRD aussi) [V9][V10]. Vidéo HD à 360° de chaque pierre ; CAD sous 7 à 10 jours ; bague en 4 à 8 semaines ; gammes « From $5,500 » et « From $15,000 » [V10]. Adresse de Sydney contradictoire sur la même page [V10] |
| 5 | York Jewellers | Penrith (22 Riley St) et Warriewood (Warriewood Square) [V11] | https://yorkjewellers.com.au | https://yorkjewellers.com.au/products/engagement-ring-builder [V11] | Oui : onglets Diamond, Colour, Size, Additions, Finalise ; « Lab Grown (E/VVS2) » ou « Natural (G/SI2) » ; prix affiché (A$0.00 avant choix) [V11] | Aucun. Outil d'une application tierce (`thecustomproductbuilder.com`, relevé le 15/11 [V15/11-17]) ; un `canvas` 2D, sans WebGL [V11] | Bijoutier indépendant (« EST. 1974 » sur le logo) [V11]. Délai au choix : 8, 6 ou 4 semaines [V11]. Visuel sommaire : un écrin, puis la bague en image fixe [V11, capture] |
| 6 | Temple & Grace | Sydney : siège à Edgecliff [E20]. Salles à Melbourne, Brisbane, Perth et Adelaide [V13] | https://www.templeandgrace.com.au | https://www.templeandgrace.com.au/jewellery/engagement-rings/custom-engagement-rings (« 98 customisable styles found ») [V12] | Partiel : métal (9 k 3 010 $, 14 k 3 460 $, 18 k 4 100 $, 22 k 4 640 $ sur l'exemple), synthétique ou naturel, carats de la pierre, taille [V13] | Aucun. `robots.txt` interdit seulement trois chemins AJAX [V3] | Preuve matérielle : lecteurs XRF Hitachi pour montrer le titre réel de l'or [V12]. Retours sous 100 jours ; « save over 40% by buying direct » [V13]. Seul du territoire à proposer l'or 22 k sur une bague de fiançailles [I] |
| 7 | Diamond Gallery | Sydney CBD : 401/64 Castlereagh St [V15/11-22]. Aussi Melbourne [V15/11-21] | https://diamondgallery.com.au | https://diamondgallery.com.au/engagement-ring-builder/ [V14] | Oui : « Engagement Ring Design Studio », filtres forme, métal, corps et style ; prix par modèle (« Price: $4280 », « $7419 ») [V14] | Aucun [V14] | Naturel et synthétique [V15/11-22]. L'outil ressemble à un catalogue filtré : pas de prix total en direct relevé [V14, rendu] |
| 8 | Novita Diamonds | Sydney CBD (Level 2, Suite 27, 104 Bathurst St) et Parramatta (71A Macquarie St). Aussi Melbourne, Brisbane, Adelaide, Perth [V15] | https://novitadiamonds.com | https://novitadiamonds.com/create/ring/lab-grown-diamond-engagement-rings [V15] | Oui : diamant d'abord (filtres prix, carat, couleur, pureté, taille, forme), puis monture [V15/11-24] | **Bloqué en partie.** Chromium sans écran : 403 sur la page de départ, le 15/11 comme le 25/11 [V15]. Recherche de diamants : réponse 202 vide à curl le 15/11 [V15/11-25]. Pas de nouvel essai. `robots.txt` n'interdit que `ia_archiver` [V3] | Spécialiste du synthétique : « Over 2,400 diamonds are available for viewing in person » [V15]. Audit à limiter aux pages lisibles par curl |
| 9 | Matthews Jewellers | Newcastle : Darby Street et Westfield Kotara [V16] | https://www.matthewsjewellers.com | https://www.matthewsjewellers.com/pages/custom-engagement-rings [V16] | Non : parcours sur mesure en 6 étapes, en salle ou en visioconférence [V16] | Aucun [V16] | Prix du parcours affiché : rendu CAD 3D contre un acompte de 50 % ou 250 $ de frais, déduits si la commande suit ; 8 semaines après validation, 4 semaines avec la priorité (+500 $) ; vidéo de la bague avant l'envoi [V16]. Naturel ou synthétique, or 18 k ou platine ; famille de joailliers depuis 1957 [V16] |
| 10 | Arnold & Co Jewellers | Canberra (ACT) : Canberra Centre, 148 Bunda St [V15/11-27] | https://arnoldcojewellers.com.au | https://arnoldcojewellers.com.au/collections/engagement-rings [V17] | Non. Modèles personnalisables (métal, type et taille de pierre) [V15/11-28] | Aucun. Le code contient une fenêtre « Confirm your age », non affichée au rendu du 15/11 [V17][V15/11-27] | Meilleur candidat de l'ACT trouvé [I]. Prix « from » en ligne (1 946,50 $ à 2 541,50 $ sur la page lue, remisés) [V17]. Synthétique et naturel ; modélisation 3D gratuite si la fabrication suit [V18] |

### À retenir pour JR Diamond [I]

- Trois configurateurs montrent un prix total en direct : Kate & Kole, Monroe Yorke et York. Aucun n'offre de 3D manipulable : aucun contexte WebGL au rendu sur les huit outils ouverts dans Chromium le 25/11 (Novita : 403) [V1][V4][V7][V9][V11][V14][V19][V20].
  La 3D issue du fichier de fabrication reste un avantage net de JR Diamond sur ce territoire.
- Le récit « atelier » est porté par Larsen (« in the very same room »), Kate & Kole (photos et vidéos de la bague finie avant le solde) et TMC (nouvelles chaque semaine). Matthews envoie une vidéo avant l'envoi.
- Le prix expliqué reste rare : Temple & Grace mesure l'or au XRF, Matthews affiche ses frais de CAD et de priorité. Personne ne décompose le prix en postes (métal, pierre, façon).
- Le duo GIA (naturel) et IGI (synthétique) de JR se retrouve chez Monroe Yorke [V10]. Kate & Kole met la configuration dans l'adresse, comme JR depuis le 24/11 [V4].

## Autres candidats vus, non retenus

| Acteur | Ville | Adresse | Constat | Raison |
|---|---|---|---|---|
| RB Diamond Jewellers | Parramatta (Shop 1, 88 Church St) [V19] | https://rbdiamond.com.au | Constructeur en 3 étapes (`/pages/diamond-engagement-ring`) : montures de 1 930 à 3 370 $, pastilles « Natural » et « LabGrown » [V19] | Rang 11. Groupe fondé à Katmandou en 1997 [V15/11-33] ; offre centrée sur l'or 22 et 24 k [V19]. `robots.txt` : délais pour certains robots seulement [V3] |
| Me Jewellery | Magenta, Central Coast [V20] | https://mejewellery.com.au | Constructeur `/ringbuilder/engagement-ring-settings/` en 3 étapes ; métaux 14 k, 18 k, platine [V20] | « Settings Found (0) » le 15/11 et le 25/11 [V20] : outil vide, fonctionnement non vérifiable |
| AHW Atelier | Sydney : Strand Arcade et QVB [V15/11-30] | https://ahwatelier.com | Prix affichés, finition dans l'atelier de Sydney, 6 semaines [V15/11-30][V15/11-31] | Choix sur la fiche seulement. Le 25/11, `robots.txt` a répondu 429 (trop de requêtes) : rien d'autre n'a été lu [V3] |
| Natalie Marie | Sydney : Paddington et Avalon [V15/11-38] | https://www.nataliemariejewellery.com | Sur mesure, surtout par e-mail ; acompte de 50 à 75 % [V15/11-38] ; page toujours en ligne [V21] | Pas d'outil en ligne. Déjà fichée dans l'étude parente |
| Australian Diamond Brokers | Sydney (70 Castlereagh St) [V15/11-39] | https://www.australiandiamondbrokers.com | Sur mesure sur croquis, naturel et synthétique ; page toujours en ligne [V21] | Pas d'outil en ligne |
| KTS Jewellery | Sydney CBD (Suite 208, 155 King St) [V22] | https://ktsjewellery.com.au | Entreprise familiale depuis 1999 ; sur mesure en CAO 3D et impression 3D [V22] | Pas d'outil ni de prix en ligne [V22] |
| Robbie Chapman Jewellery | Sydney [V23] | https://www.robbiechapman.com.au | Sur mesure en tête-à-tête, croquis puis concepts 3D, naturel et synthétique [V23] | Pas d'outil ni de prix en ligne [V23] |
| Sara Handmade Jewellery | Kiama, côte sud (2/130 Terralong St) [V24] | https://sarahandmadejewellery.com.au | Aperçu 3D avant fabrication ; « transparent, itemised quotes » ; bagues sur mesure « from $2,500 » [V24] | Pas d'outil en ligne. Devis détaillé par postes, rare : à noter [I] |
| Harlequin Jewellers | Braddon (ACT) [V15/11-37] | https://www.harlequinjewellers.com.au | Studio sur mesure de Canberra, sur rendez-vous [V25] | Pas de vente en ligne relevée [I]. `robots.txt` (Squarespace) : robots d'IA soumis aux mêmes règles que les autres, accueil permis [V3] |
| Moi Moi Fine Jewellery | Sydney (QVB) [E] | https://www.moimoi.com.au | — | **Non audité.** `robots.txt` interdit tout le site à ClaudeBot, anthropic-ai et Claude-Web (relu le 25/11) [V3]. Refus respecté |
| Waldemar Jewellers | Sydney CBD (428 George St) [E] | https://www.waldemarjewellers.com.au | Sur mesure en 3 à 4 semaines, rendu 3D, « From $ 7,400 » [E] | **Bloqué.** `robots.txt` répond 403 à curl, le 15/11 comme le 25/11 [V3]. Aucune page ouverte |
| Aharoni Jewellery ; Venetia Major ; Set Together | Canberra ; Hall (ACT) ; ville non trouvée | aharoni-jewellery.com ; venetiamajor.com.au ; settogether.com.au | Sur mesure ; Set Together annonce des bagues de 4 000 à 20 000 $ et plus [E] | Non ouverts ; pas de configurateur dans les extraits [E] |
| Hors territoire | — | — | Cullen (Melbourne), Lily Dia (« no Sydney showroom », « no Canberra showroom »), Simon Curwood (Brisbane), Australia Sapphire (Emerald, Queensland, constructeur 3D annoncé) [E] | Pages « Sydney » ou « Canberra » de référencement local, sans implantation en NSW ni dans l'ACT [E] |

## Sources

« curl » : requête simple, identité par défaut. « Chromium » : rendu sans écran, 15 s, texte et capture lus. Toutes les sources [Vn] ont été lues le 25/11/2026.

- [V1] https://www.larsenjewellery.com.au/engagement-rings (curl 200, Chromium 200, 0 `canvas`) : « Choose Your Setting 01 / 03 Choose a setting Select a center stone Personalise your ring 241 rings found », « Setting price $2,450 », « Lab Grown Diamond ».
- [V2] https://www.larsenjewellery.com.au/engagement-rings/sydney (curl 200) : « Founded in Sydney by Lars and Susie Larsen » ; « The Strand Arcade Level 5 … 412-414 George Street » ; « in the very same room where you designed it with us » ; « advanced 3D renderings and drawings ».
- [V3] Fichiers `robots.txt` lus avec curl le 25/11 :
  - en 200, règles courantes, sans interdiction des pages citées : larsenjewellery.com.au (`Disallow: /product/` avec exceptions), kateandkole.com.au, tmcfinejewellers.com, mydiamonds.com.au, yorkjewellers.com.au, templeandgrace.com.au, diamondgallery.com.au, novitadiamonds.com (`Disallow: /` pour `ia_archiver` seulement), matthewsjewellers.com, arnoldcojewellers.com.au, rbdiamond.com.au, mejewellery.com.au (ClaudeBot explicitement permis), ktsjewellery.com.au, robbiechapman.com.au, sarahandmadejewellery.com.au, nataliemariejewellery.com, australiandiamondbrokers.com, harlequinjewellers.com.au ;
  - moimoi.com.au : 200, `Disallow: /` pour ClaudeBot, Claude-Web, anthropic-ai et d'autres robots d'IA ;
  - waldemarjewellers.com.au : 403 ;
  - ahwatelier.com : 429.
- [V4] https://www.kateandkole.com.au/pages/jewellery-builder et `/pages/jewellery-builder/solitaire` (curl 200 ; Chromium : redirection vers `us.kateandkole.com.au/…/solitaire?e=…`, cadre `kate-kole-builder.vercel.app`, 0 `canvas`, capture du récapitulatif « Your Ring » à 8 290,00 USD).
- [V5] https://www.kateandkole.com.au/pages/faqs (curl 200) : « hand-finished in our Newcastle Studio » ; « jewellers in Newcastle or by our master jeweller and setting team in Brisbane » ; « detailed technical drawings for your approval » ; « We send photos and videos of your completed ring » ; « 50% deposit » ; « lab-grown diamonds ».
- [V6] https://www.kateandkole.com.au/pages/visit-us (curl 200) : Suite 1 & 2, 2 Honeysuckle Drive ; 69 Mercer Street, New York.
- [V7] https://tmcfinejewellers.com/pages/ring-builder (curl 200 : textes de l'outil, « Click and drag to arrange them », « $100.00 per birthstone », « laser engraved » ; Chromium : redirection vers `/en-us/pages/ring-builder`, 0 `canvas`).
- [V8] https://tmcfinejewellers.com/pages/sydney-engagement-rings (curl 200) : « 83 Paddington St, Paddington NSW 2021 » ; « New Farm showroom » ; CAD « within one to two weeks », « unlimited CAD revisions » ; « weekly progress updates » ; « made to order in 10 weeks » ; synthétique et moissanite.
- [V9] https://www.mydiamonds.com.au/pages/ring-builder (curl : redirection vers `/collections/engagement`, 200 ; Chromium 200, 0 `canvas`) : « Your ring, in three steps 1 SETTING 2 CENTRE DIAMOND 3 REVIEW » ; « It finds real certified diamonds, puts them in a setting and shows you the price » ; « GIA, IGI or HRD ».
- [V10] https://www.mydiamonds.com.au/pages/engagement-rings-sydney (curl 200) : titre « Leichhardt Showroom » ; « Level 29, 85 Castlereagh Street, Sydney NSW 2000 » ; « Inner West showroom » ; « 360° HD video » ; CAD sous 7 à 10 jours ; « 4-8 weeks » ; gammes « From $5,500 », « From $15,000 » ; « Lab-grown IGI or natural GIA ».
- [V11] https://yorkjewellers.com.au/products/engagement-ring-builder (curl 200 ; Chromium 200, 1 `canvas` sans WebGL, capture) : onglets, « Lab Grown (E/VVS2) », « Natural (G/SI2) », « A$0.00 », « 8, 6 or 4 Week Delivery », adresses de Penrith et de Warriewood, logo « EST. 1974 ».
- [V12] https://www.templeandgrace.com.au/jewellery/engagement-rings/custom-engagement-rings (curl 200) : « 98 customisable styles found » ; « Hitachi precious metal XRF readers ».
- [V13] https://www.templeandgrace.com.au/buy/classic-2ct-lab-oval-diamond-engagement-ring (curl 200) : « 9K $3010 14K $3460 18K $4100 22K $4640 » ; « Lab Grown Natural » ; carats 0,80 à 1,50 et plus ; « 100 day free returns » ; « Sydney, Melbourne, Brisbane, Perth & Adelaide ».
- [V14] https://diamondgallery.com.au/engagement-ring-builder/ (curl 200, Chromium 200, 0 `canvas`) : « Engagement Ring Design Studio », filtres, « Price: $4280 », « Price: $7419 ».
- [V15] https://novitadiamonds.com/create/ring/lab-grown-diamond-engagement-rings (curl 200 : salles de Sydney CBD et de Parramatta avec adresses, « Over 2,400 diamonds are available for viewing in person » ; Chromium : 403 Forbidden, pas de nouvel essai).
- [V16] https://www.matthewsjewellers.com/pages/custom-engagement-rings (curl 200) : six étapes ; « 50% deposit, or pay a $250 design fee » ; « within 8 weeks of design approval » ; « priority service (+$500) … 4 weeks » ; « we'll send you a video of your ring » ; « since 1957 » ; Darby Street et Westfield Kotara.
- [V17] https://arnoldcojewellers.com.au/collections/engagement-rings (curl 200) : « Sale price from $1,946.50 » à « from $2,541.50 » ; texte « Confirm your age » dans le code.
- [V18] https://arnoldcojewellers.com.au/pages/custom-design (curl 200) : « advanced 3D modelling software » ; « no charge for design and 3D modelling services » si la fabrication suit ; synthétique et naturel au menu.
- [V19] https://rbdiamond.com.au/pages/diamond-engagement-ring (curl 200, Chromium 200, 0 `canvas`) : « 1. Choose Setting 2. Choose Diamond 3. Final Product », prix des montures, Shop 1, 88 Church Street, Parramatta.
- [V20] https://mejewellery.com.au/ringbuilder/engagement-ring-settings/ (curl 200, Chromium 200) : « 1 Select Setting 2 Select Diamond 3 Complete Ring », « Settings Found (0) », Magenta Shores.
- [V21] https://www.nataliemariejewellery.com/pages/bespoke-process et https://www.australiandiamondbrokers.com/pages/custom-engagement-rings (curl 200, contenu non relu en détail).
- [V22] https://ktsjewellery.com.au/ (curl 200) : « family run business since 1999 » ; « 3D CAD Design and 3D printing » ; Suite 208/155 King Street.
- [V23] https://www.robbiechapman.com.au/pages/custom-engagement-rings (curl 200) : « Sydney-based » ; naturel et synthétique.
- [V24] https://sarahandmadejewellery.com.au/ (curl 200) : 2/130 Terralong Street, Kiama ; « 3D Design Previews » ; « Transparent pricing from the very start » ; « transparent, itemised quotes » et « from $2,500 » (extrait de recherche [E], même page).
- [V25] https://www.harlequinjewellers.com.au/ (curl 200) : « A Canberra jewellery studio specialising in custom engagement rings ».
- Sources de la première passe (15/11), non relues ce jour, citées par leur numéro d'alors :
  - [V15/11-5] https://www.kateandkole.com.au/pages/jewellerybuilder-landing-page ;
  - [V15/11-17] script `cdn.thecustomproductbuilder.com` chez York ;
  - [V15/11-21] et [V15/11-22] https://diamondgallery.com.au/ (adresse dans les données structurées, magasin de Melbourne, naturel et synthétique) ;
  - [V15/11-24] https://novitadiamonds.com/how-to-shop ; [V15/11-25] `/create/diamond/…` (202 vide) ;
  - [V15/11-27] https://arnoldcojewellers.com.au/ ; [V15/11-28] fiche de personnalisation ;
  - [V15/11-30] et [V15/11-31] https://ahwatelier.com/collections/engagement-rings , `/products/astra` ;
  - [V15/11-33] https://rbdiamond.com.au/pages/about-us ;
  - [V15/11-37] adresse de Harlequin (G18/27 Lonsdale St, Braddon) ;
  - [V15/11-38] et [V15/11-39] Natalie Marie et Australian Diamond Brokers (adresses, acomptes).
- [E20] https://www.templeandgrace.com.au/contact et https://linkedin.com/company/templeandgrace (extraits de recherche du 15/11) : Edgecliff.
- [E] Extraits de recherche (Parallel Search, requêtes génériques, 15/11 et 25/11) : Moi Moi, Waldemar (`/custom-made-engagement-rings-sydney`), Aharoni, Venetia Major, Set Together (`settogether.com.au/online-custom-engagement-rings`), Lily Dia (`lilydiajewellery.com/engagement-rings-sydney`, `/engagement-rings-canberra`), Cullen, Simon Curwood, Australia Sapphire.
