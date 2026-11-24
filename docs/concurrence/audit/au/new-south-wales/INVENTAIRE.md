# Inventaire des joailliers en ligne : New South Wales et ACT

Date : 15 novembre 2026. Recenseur : New South Wales, avec le Territoire de la capitale australienne (ACT).
Étude parente : `docs/concurrence/2026-11-15_australie.md`. Larsen, Natalie Marie, Temple & Grace et Diamond Gallery y sont déjà fichés, sans le rang ci-dessous.

Légende : **[Vn]** vérifié, page lue ou contrôle actionné le 15/11/2026 (source n en fin de fichier) ; **[I]** inféré ; **[S]** supposé ; **[E]** lu seulement dans un extrait de moteur de recherche, page non ouverte.
Prix en dollars australiens (AUD), tels qu'affichés, sauf mention « USD ».

## Méthode

- Recherche par requêtes génériques (« engagement ring builder Sydney », « Canberra jeweller engagement rings online », etc.), sans aucune mention de JR Diamond.
- Pour chaque site : `robots.txt` lu d'abord. Puis une page toutes les 2 s au plus par site, avec curl (identité par défaut, jamais changée).
  Ensuite, rendu dans Chromium sans écran (identité par défaut) pour les outils en JavaScript, avec lecture du texte et capture d'écran.
- Aucun formulaire rempli, aucun compte, aucun panier, aucune conversation ouverte. Aucun nouvel essai après un refus (403, 202 vide).
- « Configurateur : oui » = un outil en étapes qui assemble monture, pierre et métal. « Partiel » = options et prix sur la fiche produit seulement.

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Larsen Jewellery | Sydney : studio de la Strand Arcade, niveau 5, 412-414 George St [V2]. Aussi Melbourne et Brisbane [V1] | https://www.larsenjewellery.com.au | https://www.larsenjewellery.com.au/engagement-rings (étape « Choose Your Setting », 01 / 03) [V1] | Oui : monture, puis pierre centrale, puis personnalisation ; prix de la monture affiché (« Setting price $2,450 » à « $4,730 » sur la page lue) [V1] | Aucun (curl et Chromium : 200) [V1]. `robots.txt` interdit `/product/`, sauf une trentaine de fiches de diamants : ces fiches ne sont pas à automatiser [V3] | Fondée à Sydney [V2]. Le plus proche de « l'atelier en direct » : la bague est fabriquée « dans la même pièce » que celle où on l'a dessinée ; rendus 3D avant fabrication [V2]. Naturel et synthétique [V1][V4]. Pas de 3D interactive dans l'outil (aucun `canvas` au rendu) [V1] |
| 2 | Kate & Kole | Newcastle : Suite 1 & 2, 2 Honeysuckle Drive. Aussi un point de vente à New York [V8] | https://www.kateandkole.com.au | https://www.kateandkole.com.au/pages/jewellery-builder (puis `/solitaire`, `/duet`, `/toi-et-moi`, `/trilogy`) [V5] | Oui : image et prix mis à jour à chaque choix [V5]. Récapitulatif : corps, pierre, serti, délai (8 semaines), livraison, garantie, prix (USD 8 290 sur l'exemple, version américaine) [V6] | Aucun. Depuis l'environnement cloud, Chromium est redirigé vers `us.kateandkole.com.au`, prix en USD [V6]. L'outil est servi dans un cadre intégré (`kate-kole-builder.vercel.app`) [V6] | Configurateur le plus abouti du territoire [I]. Siège et atelier à Newcastle, sertissage par une équipe à Brisbane [V7]. Dessins techniques à valider ; photos et vidéos de la bague finie avant le solde ; acompte de 50 % [V7]. C'est la logique de JR Diamond. Pierre du client acceptée (« Supply Your Own Stone ») [V6]. Synthétique seulement [I, d'après V7] |
| 3 | TMC Fine Jewellers | Sydney : salle de Paddington, 83 Paddington St [V10]. Siège à Brisbane [E12] | https://tmcfinejewellers.com | https://tmcfinejewellers.com/pages/ring-builder [V9] | Oui, en 4 étapes : monture, personnalisations, pierre, récapitulatif [V9]. L'article d'aide décrit les pierres de naissance cachées, placées par glisser-déposer, et la gravure gratuite [E13] | Aucun. Chromium est redirigé vers `/en-us/`, prix en USD [V9] | Un CAD pour chaque commande et des nouvelles de fabrication chaque semaine ; fabrication en 10 semaines [V10]. Sur mesure sans frais : CAD environ 2 semaines après un acompte de 50 % [V11]. Synthétique et moissanite seulement [V10]. Siège hors NSW : le recenseur du Queensland peut aussi le retenir [I] |
| 4 | Monroe Yorke Diamonds | Sydney : Level 29, 85 Castlereagh St. La même page parle aussi d'une salle « Inner West » et titre « Leichhardt Showroom » [V15]. Siège à Brisbane [E16] | https://www.mydiamonds.com.au | https://www.mydiamonds.com.au/pages/ring-builder, qui redirige vers `/collections/engagement` [V14] | Oui : monture puis diamant certifié, « total price live » [V13]. Un assistant IA trouve des pierres réelles et affiche un prix ; un joaillier peut rejoindre la conversation [V13] | Aucun [V14] | Certificats GIA pour le naturel et IGI pour le synthétique, comme JR Diamond [V13]. Vidéo HD à 360° de chaque pierre proposée ; CAD sous 7 à 10 jours ; bague en 4 à 8 semaines [V15]. Adresse de Sydney contradictoire sur la même page [V15] |
| 5 | York Jewellers | Penrith (22 Riley St) et Warriewood (Warriewood Square) [V17] | https://yorkjewellers.com.au | https://yorkjewellers.com.au/products/engagement-ring-builder [V17] | Oui : onglets Diamond, Colour, Size, Additions, Finalise. Diamant synthétique (E/VVS2) ou naturel (G/SI2), prix affiché [V17] | Aucun. L'outil vient d'une application tierce (`thecustomproductbuilder.com`) et s'affiche tard : page blanche après 4 s, visible après 15 s [V17] | Bijoutier indépendant (« EST. 1974 » sur le logo) [V17]. Délai au choix : 8, 6 ou 4 semaines [V17]. Visuel de l'outil sommaire [V17, capture] |
| 6 | Temple & Grace | Sydney : siège à Edgecliff [E20]. Salles à Melbourne (2), Brisbane, Perth et Adelaide [E20] | https://www.templeandgrace.com.au | https://www.templeandgrace.com.au/jewellery/engagement-rings/custom-engagement-rings (« 98 customisable styles ») [V18] | Partiel. Options sur la fiche : métal, synthétique ou naturel, carats de la pierre, taille ; prix affichés (3 010 à 4 640 AUD sur l'exemple) [V19]. Pas d'outil en étapes [V18] | Aucun. `robots.txt` interdit seulement l'ajout au panier en AJAX et deux filtres [V29] | Preuve matérielle : un lecteur XRF Hitachi montre au client le titre réel de l'or [V19]. Retours sous 100 jours, sauf sur mesure ; « No fake sales » [V19] |
| 7 | Diamond Gallery | Sydney CBD : 401/64 Castlereagh St (données structurées du site) [V22]. Aussi Melbourne [V21] | https://diamondgallery.com.au | https://diamondgallery.com.au/engagement-ring-builder/ [V21] | Oui : « Engagement Ring Design Studio », filtres forme, métal, corps et style, prix par modèle (« Price: $4280 ») [V21] | Aucun [V21] | Naturel et synthétique [V22]. L'outil ressemble à un catalogue filtré : pas de prix total en direct relevé [V21, rendu]. Même pâté de maisons qu'Australian Diamond Brokers (« above Chanel and Bvlgari ») [V22] ; lien entre les deux [S] |
| 8 | Novita Diamonds | Sydney CBD (104 Bathurst St) et Parramatta [V23]. Quatre autres salles en Australie ; présence au Royaume-Uni et en Allemagne [V23] | https://novitadiamonds.com | https://novitadiamonds.com/create/ring/lab-grown-diamond-engagement-rings [V25] | Oui : diamant d'abord (filtres prix, carat, couleur, pureté, taille, forme), puis monture [V24] | **Bloqué en partie.** Chromium sans écran : 403 sur l'accueil. Recherche de diamants : réponse 202 vide à curl. Pas de nouvel essai. Pages lues avec curl (200) : accueil, `/how-to-shop`, `/create/ring/…` [V23][V24][V25] | Spécialiste du synthétique : 2 400 diamants visibles en salle, acompte de 20 %, retours sous 30 jours [V23]. Audit à limiter aux pages lisibles par curl |
| 9 | Matthews Jewellers | Newcastle : Darby Street et Westfield Kotara [V26] | https://www.matthewsjewellers.com | https://www.matthewsjewellers.com/pages/custom-engagement-rings [V26] | Non : parcours sur mesure en 6 étapes, rendez-vous en salle ou en vidéo [V26] | Aucun [V26] | Prix du parcours affiché. Le rendu CAD 3D demande un acompte de 50 % ou 250 AUD de frais, déduits si la commande suit [V26]. Délai de 8 semaines après validation, 4 semaines avec la priorité (+500 AUD) [V26]. Vidéo de la bague avant l'envoi. Naturel ou synthétique. Famille de joailliers depuis 1957 [V26] |
| 10 | Arnold & Co Jewellers | Canberra (ACT) : Canberra Centre, boutique EF05, niveau 1, 148 Bunda St [V27] | https://arnoldcojewellers.com.au | https://arnoldcojewellers.com.au/collections/engagement-rings [V27] | Non. Les modèles se personnalisent : métal, type et taille de pierre [V28] | Aucun. Le code contient une fenêtre « Confirm your age », non affichée au rendu [V27] | Meilleur candidat de l'ACT trouvé [I]. Vente en ligne avec prix « from » (1 946,50 à 3 017,50 AUD sur la page lue) [V27]. Synthétique et naturel ; modélisation 3D gratuite si la fabrication suit [V28] |

### À retenir pour JR Diamond [I]

- Trois configurateurs montrent un prix total en direct : Kate & Kole, Monroe Yorke et York. Aucun n'offre de 3D manipulable : on voit des images fixes, ou rien (aucun `canvas` WebGL au rendu sur les 10 sites).
  La 3D issue du fichier de fabrication reste donc un avantage net de JR Diamond sur ce territoire.
- Le récit « atelier » est porté par Larsen (« dans la même pièce »), Kate & Kole (photos et vidéos de la bague finie avant le solde) et TMC (nouvelles chaque semaine). Matthews envoie une vidéo avant l'envoi.
- Le prix expliqué est rare : Temple & Grace mesure l'or au XRF, Matthews affiche ses frais de CAD et de priorité. Personne ne décompose le prix en postes (métal, pierre, façon) [I].
- Le duo GIA (naturel) et IGI (synthétique), qui est celui de JR, se retrouve chez Monroe Yorke [V13].

## Autres candidats vus, non retenus

| Acteur | Ville | Adresse | Constat | Raison |
|---|---|---|---|---|
| RB Diamond Jewellers | Parramatta (Shop 1, 88 Church St) [V32] | https://rbdiamond.com.au | Constructeur en 3 étapes : `/pages/diamond-engagement-ring`, prix en AUD, choix naturel ou synthétique [V32] | Rang 11. Enseigne d'un groupe népalais fondé à Katmandou en 1997 [V33] ; offre centrée sur l'or 22 et 24 k [V32]. `robots.txt` standard, délai de 10 s pour certains robots seulement [V29] |
| AHW Atelier | Sydney : Strand Arcade et QVB [V30] | https://ahwatelier.com | Prix affichés (3 200 AUD, remisés à 3 040 AUD), finition dans l'atelier de Sydney, fabrication en 6 semaines, échange sous 14 jours [V30][V31] | Choix sur la fiche seulement (monture, métal, taille) [V31] |
| Me Jewellery | Magenta, Central Coast [V34] | https://mejewellery.com.au | Constructeur `/ringbuilder/engagement-ring-settings/` : monture, puis diamant naturel ou synthétique [V34] | Deux rendus, liste de montures vide les deux fois [V34] : fonctionnement non vérifié |
| Natalie Marie | Sydney : Paddington (70 William St) et Avalon [V38] | https://www.nataliemariejewellery.com | Sur mesure, surtout par e-mail ; acompte de 50 à 75 % ; 4 à 5 semaines ; nouvelles « toutes les quelques semaines » [V38] | Pas d'outil en ligne. Déjà fichée dans l'étude parente |
| Australian Diamond Brokers | Sydney (70 Castlereagh St), depuis 1977 [V39] | https://www.australiandiamondbrokers.com | Sur mesure sur croquis, naturel et synthétique [V39] | Pas d'outil en ligne |
| Moi Moi Fine Jewellery | Sydney (QVB) [E] | https://www.moimoi.com.au | — | **Non audité.** `robots.txt` interdit tout le site à ClaudeBot, anthropic-ai et Claude-Web [V35]. Refus respecté |
| Waldemar Jewellers | Sydney CBD [E] | https://www.waldemarjewellers.com.au | — | **Bloqué.** `robots.txt` répond 403 à curl [V36]. Pas de nouvel essai |
| Harlequin Jewellers | Braddon (ACT), G18/27 Lonsdale St [V37] | https://www.harlequinjewellers.com.au | Studio indépendant, sur mesure, sur rendez-vous seulement [V37] | Pas de vente en ligne relevée [I] |
| Aharoni Jewellery ; Venetia Major | Canberra ; Hall (ACT) [E] | aharoni-jewellery.com ; venetiamajor.com.au | Sur mesure [E] | Non ouverts ; pas de configurateur dans les extraits [E] |
| Hors territoire | — | — | Cullen (Melbourne) ; Lily Dia (bijoutiers à Melbourne et Auckland, pas de salle) [E] ; Simon Curwood (Brisbane) [E] | Pages « Sydney » ou « Canberra » de référencement local, sans implantation en NSW ni dans l'ACT [I] |

## Sources

Toutes lues le 15/11/2026. « curl » : requête simple, identité par défaut. « Chromium » : rendu sans écran, texte et capture lus.

- [V1] https://www.larsenjewellery.com.au/engagement-rings (curl 200, Chromium 200) : « Choose Your Setting », « 01 / 03 », « center stone », « Personalise your ring », « 241 rings found », prix des montures, studios de Sydney, Melbourne et Brisbane.
- [V2] https://www.larsenjewellery.com.au/engagement-rings/sydney (curl 200) : « Founded in Sydney by Lars and Susie Larsen » ; Level 5, 412-414 George Street ; « in the very same room where you designed it » ; « advanced 3D renderings ».
- [V3] https://www.larsenjewellery.com.au/robots.txt (curl 200).
- [V4] https://www.larsenjewellery.com.au/engagement-rings/lab-grown-diamond (curl 200).
- [V5] https://www.kateandkole.com.au/pages/jewellerybuilder-landing-page (curl 200) : « everything updates in real time, including pricing » ; « request design drawings instantly » ; liens vers les quatre styles.
- [V6] https://www.kateandkole.com.au/pages/jewellery-builder/solitaire (curl 200 ; Chromium : redirection vers `us.kateandkole.com.au`, récapitulatif et prix sur la capture, cadre `kate-kole-builder.vercel.app`, lien « Supply Your Own Stone »).
- [V7] https://www.kateandkole.com.au/pages/faqs (curl 200) : siège à Newcastle ; ateliers de Newcastle et de Brisbane ; « detailed technical drawings for your approval » ; « We send photos and videos of your completed ring » ; acompte de 50 % ; diamants synthétiques ; pas de remboursement sur commande.
- [V8] https://www.kateandkole.com.au/pages/visit-us (curl 200).
- [V9] https://tmcfinejewellers.com/pages/ring-builder (curl 200 ; Chromium : redirection vers `/en-us/pages/ring-builder`, capture des 4 étapes).
- [V10] https://tmcfinejewellers.com/pages/sydney-engagement-rings (curl 200) : 83 Paddington St ; CAD ; « weekly progress updates » ; « made to order in 10 weeks » ; diamants synthétiques et moissanite.
- [V11] https://tmcfinejewellers.com/pages/our-custom-process (curl 200) : sans frais, 7 à 10 semaines, acompte de 50 %, CAD environ 2 semaines après l'acompte.
- [E12] https://www.linkedin.com/company/the-moissanite-company/ (extrait de recherche) : siège à Brisbane, fondée en 2020.
- [E13] https://tmcfinejewellers.com/blogs/journal/how-to-our-signature-ring-builder (extrait de recherche).
- [V13] https://www.mydiamonds.com.au/ (curl 200) : « Build your ring », « see your total price live », assistant IA, « A jeweller can join anytime », GIA et IGI.
- [V14] https://www.mydiamonds.com.au/pages/ring-builder (curl 200 après redirection vers `/collections/engagement` ; Chromium 200).
- [V15] https://www.mydiamonds.com.au/pages/engagement-rings-sydney (curl 200, Chromium 200) : Level 29, 85 Castlereagh Street ; « Inner West showroom » ; « 360° HD video » ; CAD sous 7 à 10 jours ; 4 à 8 semaines.
- [E16] https://linkedin.com/company/monroe-yorke-diamonds (extrait de recherche) : siège à Brisbane, fondée en 2006.
- [V17] https://yorkjewellers.com.au/products/engagement-ring-builder (curl 200 ; Chromium : vide à 4 s, outil visible à 15 s, capture) : onglets, « Lab Grown (E/VVS2) », « Natural (G/SI2) », « 8, 6 or 4 Week Delivery », adresses de Penrith et de Warriewood, logo « EST. 1974 », script `cdn.thecustomproductbuilder.com`.
- [V18] https://www.templeandgrace.com.au/jewellery/engagement-rings/custom-engagement-rings (curl 200, Chromium 200) : « 98 customisable styles found ».
- [V19] https://www.templeandgrace.com.au/buy/classic-2ct-lab-oval-diamond-engagement-ring (Chromium 200) : options, prix, XRF Hitachi, 100 jours, « No fake sales ».
- [E20] https://www.templeandgrace.com.au/contact et https://linkedin.com/company/templeandgrace (extraits de recherche) : Edgecliff, salles des autres États.
- [V21] https://diamondgallery.com.au/engagement-ring-builder/ (curl 200, Chromium 200) : « Engagement Ring Design Studio », filtres, prix, magasins de Sydney et de Melbourne.
- [V22] https://diamondgallery.com.au/ (curl 200) : adresse dans les données structurées, « above Chanel and Bvlgari », naturel et synthétique.
- [V23] https://novitadiamonds.com/ (curl 200 ; Chromium 403) : salles, « Create Your Own Engagement Ring », acompte de 20 %, retours sous 30 jours, 2 400 diamants.
- [V24] https://novitadiamonds.com/how-to-shop (curl 200) : diamant d'abord, filtres.
- [V25] https://novitadiamonds.com/create/ring/lab-grown-diamond-engagement-rings (curl 200) ; https://novitadiamonds.com/create/diamond/lab-grown-diamond-engagement-rings (curl : 202, corps vide).
- [V26] https://www.matthewsjewellers.com/pages/custom-engagement-rings (curl 200, Chromium 200) et https://www.matthewsjewellers.com/ (curl 200).
- [V27] https://arnoldcojewellers.com.au/collections/engagement-rings (curl 200, Chromium 200) et https://arnoldcojewellers.com.au/ (curl 200).
- [V28] https://arnoldcojewellers.com.au/pages/custom-design (curl 200).
- [V29] Fichiers `robots.txt` lus avec curl : templeandgrace.com.au, tmcfinejewellers.com, kateandkole.com.au, mydiamonds.com.au, yorkjewellers.com.au, diamondgallery.com.au, novitadiamonds.com, matthewsjewellers.com, arnoldcojewellers.com.au, rbdiamond.com.au, ahwatelier.com, nataliemariejewellery.com, australiandiamondbrokers.com, mejewellery.com.au, harlequinjewellers.com.au. Tous en 200, règles Shopify ou WordPress courantes ; aucune n'interdit les pages citées.
- [V30] https://ahwatelier.com/collections/engagement-rings (curl 200, Chromium 200).
- [V31] https://ahwatelier.com/products/astra (Chromium 200).
- [V32] https://rbdiamond.com.au/pages/diamond-engagement-ring (curl 200, Chromium 200).
- [V33] https://rbdiamond.com.au/pages/about-us (curl 200).
- [V34] https://mejewellery.com.au/ et https://mejewellery.com.au/ringbuilder/engagement-ring-settings/ (curl 200, deux rendus Chromium : « Settings Found » sans modèle).
- [V35] https://www.moimoi.com.au/robots.txt (curl 200) : `Disallow: /` pour ClaudeBot, Claude-Web, anthropic-ai et d'autres robots d'IA.
- [V36] https://www.waldemarjewellers.com.au/robots.txt (curl 403).
- [V37] https://www.harlequinjewellers.com.au/ (curl 200).
- [V38] https://www.nataliemariejewellery.com/pages/bespoke-process (curl 200, Chromium 200).
- [V39] https://www.australiandiamondbrokers.com/pages/custom-engagement-rings (curl 200).
- [E] Extraits de recherche (Parallel Search, requêtes génériques) pour Moi Moi, Waldemar, Aharoni, Venetia Major, Lily Dia, Cullen, Simon Curwood et Armans Fine Jewellery (dont le numéro (02) 9233 indique Sydney [I] ; non retenu, non vérifié).
