# Inventaire des joailliers en ligne : Territoire de la capitale australienne (Canberra et ACT)

Date : 25 novembre 2026, entre 12 h 41 et 12 h 44 UTC. Recenseur du territoire « Australian Capital Territory ».
Étude parente : `docs/concurrence/2026-11-15_australie.md`. Voir aussi les inventaires `audit/au/new-south-wales/`, `victoria/`, `queensland/`, `south-australia/` et `western-australia/`. Larsen, Monroe Yorke, Cullen et Lily Dia ont des pages « Canberra » mais sont exclus (déjà audités, sans salle dans l'ACT).

Légende :
- **[Vn]** vérifié : page lue directement le 25/11/2026 (curl, identité par défaut de curl), source n en fin de fichier ;
- **[Cn]** copie : page lue dans la copie d'un service de lecture (Parallel, **cache seul**, sans connexion au site), date de la copie en Sources ;
- **[En]** extrait : texte renvoyé par un moteur de recherche (Parallel), page non ouverte ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), tels qu'affichés. « Synthétique » traduit « lab-grown ».

## Méthode

- Recherche par requêtes génériques, sans aucune mention de JR Diamond : « Canberra jeweller engagement rings online », « design your own engagement ring Canberra », « Belconnen jeweller engagement rings », « Manuka Kingston jeweller custom rings Canberra », « lab grown diamond engagement rings Canberra », etc.
- Candidats trouvés surtout dans le centre (Canberra City, Braddon), à Kingston, Manuka, Woden et Hall. Aucun à Belconnen, Gungahlin ou Tuggeranong hors chaînes [I].
- `robots.txt` lu d'abord pour les 11 domaines retenus (curl, 12 h 41), puis chaque adresse contrôlée avec l'outil `robots.cjs` avant d'être ouverte [V0].
  - Aucun fichier lu n'interdit tout le site.
  - Harlequin (Squarespace) nomme ClaudeBot et anthropic-ai, mais dans le même groupe que `*`, avec seulement les interdictions habituelles de Squarespace (`/config`, `/search`, `/account`, `/api/`, `/static/`…). Pages publiques permises [V0].
  - Chemins interdits (panier, caisse, compte) jamais visités.
- Au plus une page toutes les 2 secondes par site, et au plus trois pages par site. Aucun formulaire rempli ni envoyé, aucun compte, aucun ajout au panier, aucune conversation ouverte.
- « Configurateur : oui » = un outil en ligne qui assemble monture, pierre et métal, ou une fiche qui fait choisir forme, métal, origine et carat avec un prix de bague. « Non » = catalogue, ou sur mesure en salle.
- Les copies [C] ont été demandées en mode « cache seul » (`allow_live_fetch: false`), pour ne pas faire lire en direct, par un tiers, un site qui nous avait refusé.

## Blocage

- **Défi Shopify (429 « Verifying your connection… »)** [V0] :
  - **Arnold & Co** et **Venetia Major** : 429 dès `robots.txt` (curl, 12 h 41). Aucune page ouverte.
  - **Unique Diamonds** et **Vangeli** : `robots.txt` et accueil lus en 200, puis 429 sur la deuxième page (une collection, 12 h 42).
  - **Creations** : `robots.txt` lu en 200 par curl à 12 h 41 (règles Shopify par défaut) ; l'outil `robots.cjs`, quelques secondes plus tard, a reçu 429 (« INCONNU »). L'accueil, déjà demandé, a répondu 200. Aucune autre page ouverte.
  - Le même défi a touché l'Australie-Méridionale et le Queensland. Il dépend du volume de requêtes vers Shopify depuis notre adresse, pas d'un refus propre à ces sites [I].
- **Squarespace (429 « Too Many Requests »)** : **Harlequin**, sur la deuxième page (`/faqs`), après un accueil lu en 200 [V0].
- Règle appliquée : aucun nouvel essai, pas de navigateur, pas de changement d'identité pour passer un défi. Ces sites sont marqués **bloqué** ; leurs constats viennent de la page lue avant le blocage [V], de copies [C] ou d'extraits [E].
- Lus sans difficulté : Diamond Boutique (WordPress), Aharoni (site statique), Alexander Pepin (Wix), Solitaire Jewellers (WordPress), Dimitries (Shopify, accueil seul) [V0].

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique [I]. Colonne « adresse » : site ; adresse postale dans la colonne « ville ». Peu de candidats dans l'ACT : deux seulement ont un outil de configuration ; les rangs 3 à 10 sont les meilleurs sites de joailliers locaux, sans configurateur.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Unique Diamonds | Kingston : salle au 64 Giles Street, ACT 2604 [E4] ; seconde salle à Melbourne [V1] | https://uniquediamonds.com.au | https://uniquediamonds.com.au/products/oval-four-claw-solitaire-engagement-ring-with-hidden-halo (fiche type ; la liste « UD Signatures » est `/collections/engagement-rings-best-sellers`) [V1][C2] | **Oui**, sur la fiche : forme (11 tailles), métal (or 18 K jaune, blanc, rose, bicolore, platine), **origine « Lab-Grown » ou « Natural »**, poids de 0,50 à 6 ct ; bloc « Your Dream Ring » avec « View Setting » [C2] | **Bloqué** (défi Shopify à la deuxième page) [V0] | Prix affichés : montures « UD Signatures » de 3 400 à 3 600 AUD sur l'accueil [V1] ; « Starting at » 2 800 AUD, « (Setting price) », avec « Add to cart » [C2]. Trois parcours : prêt à expédier, fait sur commande en 4 à 5 semaines, sur mesure en 6 à 8 semaines avec **rendus CAO approuvés** après acompte [C2][C3]. **Fabrication express de 2 semaines** sur demande [C3]. Sur mesure à la main ou en fonte [C3] |
| 2 | Arnold & Co Jewellers | Canberra City : Canberra Centre, Level 1, 148 Bunda Street, ACT 2601 (boutique « EF05 » au pied de page, « DF 12-13 » sur une fiche) [C5][C6] | https://arnoldcojewellers.com.au | https://arnoldcojewellers.com.au/collections/shop-all-lab-grown-diamond-engagement-rings [C5] | **Oui**, sur la fiche : métal (jaune, blanc, rose, platine ; 14 ou 18 K selon le texte), qualité de la pierre synthétique (F VS1, E VVS2, D VVS1), carat de 0,75 à 5 ct, prix recalculé par combinaison [C6] | **Bloqué** (défi Shopify dès `robots.txt`) [V0] | Le plus transparent sur le synthétique : **chaque combinaison a son prix** (ex. « Maria » 0,75 ct F VS1 : 2 116,50 AUD remisé, au lieu de 2 490 ; 5 ct : 7 046,50 AUD) [C6]. Collection synthétique de 11 pages, dès 1 495 AUD en or 10 K à 1 ct (remise) [C5]. Sur mesure en trois niveaux, **modélisation 3D gratuite** si la commande suit [C6]. Remises permanentes (« Sale price ») : prix barré à vérifier à l'audit [I] |
| 3 | Diamond Boutique | Braddon : Shop 141 Mode3, 24 Lonsdale St, ACT 2612 [V8] | https://diamondboutique.com.au | https://diamondboutique.com.au/engagement-rings/ [V9] | Non : catalogue à prix affichés, filtres métal (or 18 K jaune, rose, blanc, bicolore, platine) et forme [V9] | Aucun (200) [V0] | Prix visibles mais peu de modèles en ligne : trois bagues, de 5 999 à 9 990 AUD, toutes « Out of stock » [V9]. Service « CAD Designed Jewellery – Visualising your creation in 3D » [V10]. **Atelier « Make Your Own Piece »** : le client fabrique ses alliances [V10]. Rendez-vous en salle pour le sur mesure [V8]. Pas de synthétique visible [V9] |
| 4 | Aharoni Jewellery | Canberra City : Suite 2, City Executive Suites, 88–96 Bunda Street, ACT 2601 [V11] | https://www.aharoni-jewellery.com | https://www.aharoni-jewellery.com/engagement-rings/ [V12] | Non : parcours sur mesure en 4 étapes (conversation, pierre, dessin, bague) [V12] | Aucun (200) [V0] | Parcours de fabrication expliqué pas à pas, date de remise fixée avant la fabrication [V12]. Gemmologue formé au GIA et à la CAO dans la famille [V11]. **Alliances Mokume Gane** taillées dans un même lingot pour le couple [V12]. Naturel « by choice », synthétique sur demande [V12]. Aucun prix [V12]. Studio depuis 1989, à Canberra depuis 2002 [V11] |
| 5 | Creations Jewellers | Manuka (adresse postale non relevée) ; atelier sur place, six joailliers [V13] | https://creationsjewellers.com.au | https://creationsjewellers.com.au/pages/weddings [C14] | Non : boutique en ligne de pièces finies, sur mesure en salle [V13][C14] | **Bloqué** en partie (`robots.txt` 200 en curl, puis 429 pour l'outil ; accueil seul lu) [V0] | « JEWELLERY DESIGNED & MADE AT CREATIONS CANBERRA » ; famille depuis 1993 ; lauréat Diamond Guild Australia 2026 [V13]. Alliances dessinées, fabriquées et serties sur place [C14]. Sur mesure : devis, puis croquis à la main et fabrication à l'atelier [C14]. Prix non relevés dans le texte de l'accueil [V13] |
| 6 | Vangeli | Woden : Shop 2 Ground Floor, Bowes Place, Woden Town Square, ACT 2606 [V15] | https://vangeli.com.au | https://vangeli.com.au/collections/diamond-rings [C16] | Non : catalogue avec « Product Enquiry » ; sur mesure en consultation [C16] | **Bloqué** (défi Shopify à la deuxième page) [V0] | Atelier sur place depuis 1978, or 18 ct et platine [V15]. Bagues et alliances en ligne sans prix lisible dans la copie [C16] [I]. Parcours sur mesure : consultation gratuite, création, contrôle qualité [C16]. Pas de synthétique mentionné [V15] |
| 7 | Harlequin Jewellers | Braddon : G18/27 Lonsdale St, sur rendez-vous [V17] | https://www.harlequinjewellers.com.au | https://www.harlequinjewellers.com.au/ [V17] | Non : tout sur mesure, consultation gratuite en salle ou en vidéo [V17][C18] | **Bloqué** (429 Squarespace à la deuxième page) [V0] | Le client parle au joaillier, pas à un vendeur [V17]. Forgé à la main, **sans CAO ni fonte** [E19]. Refonte gratuite si la surprise déplaît ; mise à taille gratuite un an [V17]. Délai moyen de 10 à 12 semaines après acompte [C18]. Aucun prix : « book an appointment » [C18] |
| 8 | Venetia Major – Bespoke Jewellery | Hall : 3/8 Victoria St, ACT 2618 [C20] | https://venetiamajor.com.au | https://venetiamajor.com.au/pages/custom-made-jewellery (lien « Custom Made Jewellery » de l'accueil) [C20] | Non : boutique de pièces finies et sur mesure [C20] | **Bloqué** (défi Shopify dès `robots.txt`) [V0] | Boutique en ligne à prix affichés, surtout des bagues de fantaisie en or 9 ct (549 à 4 661 AUD) [C20]. Pièces « designed, cast, and handcrafted » sur place [C20]. Pas de bague de fiançailles à prix visible dans la copie [C20] |
| 9 | Alexander Pépin Jewellery | Kingston : Unit 30/6 Trevillian Quay, ACT 2604 [V21] | https://www.alexanderpepin.com | https://www.alexanderpepin.com/services-6 [V22] | Non : sur mesure seulement, pas de boutique [V22] | Aucun (200) [V0] | Joaillier artisan, plus de 20 ans d'expérience [V21] ; bagues de fiançailles et alliances sur consultation [V22]. Aucun prix, aucun délai [V22]. Retenu faute de mieux [I] |
| 10 | Solitaire Jewellers | Woden (selon le titre de la page) [V24] | https://solitairejewellers.com.au | https://solitairejewellers.com.au/jewellery-canberra-woden-solitaire-jewellers-canberra/ [V24] | Non en pratique : la page décrit « Solitaire Bar », « Solitaire Custom » et une plateforme « Solitaire Design Studio » (« build their own ring »), mais **la boutique est fermée pour maintenance** [V23][V24] | Aucun (200) [V0] | Promesse proche de JR Diamond sur le papier : monture choisie, puis diamant, synthétique mis en avant (« lab grown diamonds ») [V24]. Outil non visible ; accueil « The store is closed for maintenance » [V23]. À recontrôler [S] |

## Autres candidats, non retenus

| Acteur | Lieu | Raison |
|---|---|---|
| Dimitries Jewellers | Ancienne salle « Riverside » ; vente de fermeture au 126 Monaro Street, Queanbeyan (Nouvelle-Galles du Sud) [V25] | Salle fermée après 59 ans ; plus d'établissement dans l'ACT [V25] |
| Austen & Blake | Salle de rendez-vous à Canberra [E27] | Marque internationale (constructeur en ligne), pas un joaillier établi dans l'ACT [I] ; à voir avec les marques nationales |
| Lily Dia, Cushla Whiting, DG & Co., Armans Fine Jewellery | Pages « Canberra » [E27] | Pas de salle dans l'ACT (Lily Dia et Cushla Whiting le disent ; DG & Co. fabrique à Melbourne ; Armans a un numéro de Sydney) [E27] |
| Larsen, Monroe Yorke, Cullen | Pages « Canberra » [E27] | Déjà audités (exclus par la consigne) |

## Ce qu'il faut retenir pour JR Diamond [I]

- **Arnold & Co** montre ce que JR Diamond n'affiche pas encore : un prix par combinaison métal × qualité × carat de la pierre synthétique, sans devis [C6]. Mais rien sur la fabrication, et des remises permanentes brouillent le prix [C5].
- **Unique Diamonds** a le parcours le plus proche du nôtre : choix de l'origine naturel ou synthétique sur la fiche, CAO validée avant fabrication, et une option express de 2 semaines, comparable à nos 14 jours ouvrés [C2][C3].
- **Aucun site de l'ACT ne montre la bague en 3D** avant l'achat. La CAO ou la 3D vient après la consultation (Unique Diamonds, Arnold & Co, Diamond Boutique) [C3][C6][V10].
- Les artisans (Aharoni, Harlequin, Creations, Vangeli) vendent la fabrication sur place, sans prix en ligne ; leurs délais vont de 6 à 12 semaines [C3][C18]. JR Diamond peut leur opposer « l'atelier en direct » avec un prix expliqué.
- L'alliance de couple (Mokume Gane d'Aharoni, atelier « Make Your Own » de Diamond Boutique) est un argument local [V10][V12].

## Sources

Toutes les lectures directes datent du 25/11/2026, entre 12 h 41 et 12 h 44 UTC. Les dates des copies Parallel sont celles de leur acquisition dans le cache.

- [V0] `robots.txt` (curl, identité par défaut, 12 h 41) et outil `robots.cjs` :
  - lus en 200 : uniquediamonds.com.au, dimitries.com.au (après redirection depuis www), solitairejewellers.com.au, diamondboutique.com.au, vangeli.com.au, creationsjewellers.com.au, www.aharoni-jewellery.com, www.harlequinjewellers.com.au, www.alexanderpepin.com ;
  - refus : arnoldcojewellers.com.au et venetiamajor.com.au (429 « Verifying your connection… ») ;
  - l'outil a reçu 429 pour creationsjewellers.com.au (« INCONNU ») après la lecture en 200 par curl ;
  - 429 sur https://uniquediamonds.com.au/collections/engagement-rings-best-sellers, https://vangeli.com.au/collections/diamond-rings (Shopify) et https://www.harlequinjewellers.com.au/faqs (Squarespace).
  - Aucun nouvel essai.
- [V1] https://uniquediamonds.com.au/ (curl 200) : « Unique Diamonds | Engagement Rings | Melbourne & Canberra » ; « UD Signatures » ; « Regular price $3,600.00 » ; « Old Miner Vintage Ring … $3,400.00 » ; « Traditionally we allow 6-8 weeks for bespoke creations » ; liens « Melbourne Showroom », « Canberra Showroom ».
- [C2] https://uniquediamonds.com.au/products/oval-four-claw-solitaire-engagement-ring-with-hidden-halo (copie Parallel du 24/11/2026) : « Starting at : Regular price $2,800.00 » ; « Origin Lab-Grown … Natural » ; « Weight 0.50ct … 6ct » ; « 18K YG … Platinum » ; « (Setting price) » ; « Add to cart » ; « Your Dream Ring … View Setting » ; « Made to order: allow 2-5 weeks » ; « approval of the CAD rendering ».
- [C3] https://uniquediamonds.com.au/pages/ud-bespoke (copie du 23/11/2026) : « CUSTOM CAD RENDERS » ; « a deposit allows us to begin creating a detailed CAD » ; « handmade and cast options » ; https://uniquediamonds.com.au/pages/shipping-timeline (copie du 14/11/2026) : « four to five weeks » ; « minimum of two months » ; « expedited production timeline of 2 weeks » ; https://uniquediamonds.com.au/pages/our-story (copie du 23/11/2026) : « For 15 years ».
- [E4] https://uniquediamonds.com.au/pages/canberra-showroom (extrait de recherche) : « 64 Giles Street, Kingston, ACT 2604 ».
- [C5] https://arnoldcojewellers.com.au/collections/shop-all-lab-grown-diamond-engagement-rings (copie du 22/11/2026) : « 10K White Gold 1ct Cushion Lab Grown Diamond … Sale price $1,495.00 » ; pagination « 1 2 3 … 11 » ; « Canberra Centre, Shop EF05 Level 1/148 Bunda Street ».
- [C6] https://arnoldcojewellers.com.au/products/the-maria-ring-lab-grown-diamond-with-round-brilliant-accents-copy (copie du 18/11/2026) : « Regular price $2,490.00 Sale price $2,116.50 » ; « Yellow Gold White Gold Rose Gold Platinum » ; « 14K or 18K » ; variantes « Lab Grown Diamonds F VS1 / 0.75ct » à « 5.00ct » (prix 704 650 cents) ; « Shop DF 12-13 Level 1/148 Bunda St » ; https://arnoldcojewellers.com.au/pages/custom-design (copie du 18/11/2026) : « no charge for design and 3D modelling services ».
- [E7] https://arnoldcojewellers.com.au/ (extrait de recherche) : « Engagement Rings », « Wedding Bands », « Lab Grown Diamonds » au menu.
- [V8] https://diamondboutique.com.au/ (curl 200) : « Shop 141 Mode3, 24 Lonsdale St, Braddon ACT 2612 » ; « Book an appointment ».
- [V9] https://diamondboutique.com.au/engagement-rings/ (curl 200) : filtres « 18k Yellow Gold … Platinum » ; « Oval Solitaire Ring $6,490.00 », « Trilogy Ring $9,990.00 », « Double Halo Ring $5,999.00 », « Out of stock ».
- [V10] https://diamondboutique.com.au/services/?gt=cad-designed-jewellery (curl 200) : « Visualising your creation in 3D » ; « Workshop Experience – Make Your Own Piece » ; « Imagine being able to make your own wedding rings ».
- [V11] https://www.aharoni-jewellery.com/ (curl 200) : « making jewellery since 1989 » ; « to Canberra in 2002 » ; « GIA certified gemologist, also trained in CAD design » ; « 88–96 Bunda Street ».
- [V12] https://www.aharoni-jewellery.com/engagement-rings/ (curl 200) : « Four steps to the ring » ; « We make the ring to a date agreed with you » ; « Mokume Gane … A pair can be cut from one billet » ; « We work with natural stones by choice and lab-grown can be sourced upon request ».
- [V13] https://creationsjewellers.com.au/ (curl 200) : « on-site workshop in Manuka, Canberra, home to six jewellers » ; « established in 1993 » ; « JEWELLERY DESIGNED & MADE AT CREATIONS CANBERRA » ; « Diamond Guild Australia 2026 Award Winner ».
- [C14] https://creationsjewellers.com.au/pages/weddings et `/pages/bespoke` (copies du 23/11/2026) : « We design, make and hand set all of our diamond wedding bands » ; « we will offer a quotation … We will hand sketch, design ».
- [V15] https://vangeli.com.au/ (curl 200) : « Established in 1978 » ; « handcrafted onsite in their fully-equipped workshop » ; « 18ct gold and platinum » ; « Woden Town Square ».
- [C16] https://vangeli.com.au/collections/diamond-rings, `/collections/wedding-bands`, `/pages/custom-jewellery-design` (copies du 22/11/2026) : « Product Enquiry » ; « obligation-free consultation » ; « Quality Control ».
- [V17] https://www.harlequinjewellers.com.au/ (curl 200) : « G18/27 Lonsdale St, Braddon ACT » ; « By Appointment Only » ; « I will remodel it using the same materials at no extra cost » ; « resize it for free for a year » ; « in person or online ».
- [C18] https://www.harlequinjewellers.com.au/faqs (copie du 07/05/2026) : « Every piece we make at Harlequin Jewellers is completely custom » ; « 10-12 weeks from the time of your deposit » ; « video consultations ».
- [E19] https://www.harlequinjewellers.com.au/approach (extrait de recherche) : « no use of computer-aided design or casting ».
- [C20] https://venetiamajor.com.au/ (copie du 24/11/2026) : « 3/8 Victoria St, Hall ACT 2618 » ; « designed, cast, and handcrafted » ; prix de 549 à 4 661 AUD ; lien « Custom Made Jewellery » vers `/pages/custom-made-jewellery`.
- [V21] https://www.alexanderpepin.com/ (curl 200) : « Unit 30/6 Trevillian Quay Kingston ACT 2604 » ; « over 20 years experience ».
- [V22] https://www.alexanderpepin.com/services-6 (curl 200) : « Bespoke Design », « Engagement and Wedding Rings », « Remodelling ».
- [V23] https://solitairejewellers.com.au/ (curl 200) : « The store is closed for maintenance ».
- [V24] https://solitairejewellers.com.au/jewellery-canberra-woden-solitaire-jewellers-canberra/ (curl 200) : titre « Jewellery Canberra Woden » ; « Solitaire Bar » ; « build their own ring and select their own diamond » ; « Solitaire Design Studio platform » ; « lab grown diamonds ».
- [V25] https://dimitries.com.au/ (curl 200) : « Dimitries Jewellers has closed it's Riverside showroom » ; « 126 Monaro Street Queanbeyan ».
- [E26] https://region.com.au/best-custom-jewellers-canberra/677119 (extrait de recherche, mis à jour le 17/04/2025) : liste Venetia Major, Vangeli, Aharoni, Harlequin, Unique Diamonds.
- [E27] Extraits de recherche, pages non ouvertes : https://www.austenblake.com.au/customer-care/viewings/canberra ; https://lilydiajewellery.com/engagement-rings-canberra (« We have no Canberra showroom ») ; https://cushlawhiting.com.au/collections/engagement-rings-canberra (« we don't currently have a physical showroom in Canberra ») ; https://diamondgold.com.au/pages/engagement-rings-canberra (« produced in Melbourne ») ; https://armansfinejewellery.com/collections/engagement-rings-canberra (« (02) 9233 8633 ») ; https://www.larsenjewellery.com.au/engagement-rings/canberra ; https://www.mydiamonds.com.au/pages/engagement-rings-canberra ; https://cullenjewellery.com/engagement-rings/category/au-canberra.
