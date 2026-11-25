# Inventaire des joailliers en ligne : Tasmanie

Date : 25 novembre 2026.
Recenseur : Tasmanie (État australien).
Antécédent : l'inventaire de Victoria du 15/11 (`docs/concurrence/audit/au/victoria/INVENTAIRE.md`) couvrait aussi la Tasmanie. Il avait retenu Sargisons (rang 10) et cité Claudia, Haab, Launceston Precision, My Jewellers, Dean Walker et David Parums. La présente passe les reprend et en ajoute trois : Watsons, Metal Urges, Diamond World.

Légende :
- **[Vn]** vérifié : page lue le 25/11/2026 (source n en fin de fichier) ;
- **[V15/11-…]** vérifié lors de la passe de Victoria du 15/11, non relu ce jour ;
- **[En]** lu seulement dans un extrait de moteur de recherche, page non ouverte par moi ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), tels qu'affichés. Le 25/11, Watsons affichait des soldes « Black Friday » : ses prix relevés peuvent être remisés.

## Méthode

- Recherche par requêtes génériques uniquement (« Hobart jeweller engagement rings online », « Launceston jeweller custom engagement rings », « Tasmania engagement ring builder », « Burnie jeweller engagement rings », etc.). Aucune mention de JR Diamond.
- Contrôle des adresses par un petit script (Python, `urllib.robotparser`, bibliothèque standard) :
  - lecture du `robots.txt` de chaque hôte avant toute page ;
  - page ignorée si le `robots.txt` l'interdit, ou s'il répond par une erreur (403, 429) ;
  - 2,5 s au moins entre deux requêtes vers un même hôte ;
  - curl avec son identité par défaut, jamais changée.
- Après une réponse 429 (« trop de requêtes ») ou une page de contrôle, l'adresse n'a pas été redemandée. Seules les pages déjà lues sont citées. Les extraits du moteur de recherche servent de complément, marqués [E].
- Pas de rendu dans un navigateur cette fois. Aucun site retenu n'annonce de configurateur ni de 3D en ligne : le contrôle WebGL n'apportait rien [I].
- Aucun formulaire rempli, aucun compte, aucun ajout au panier, aucune conversation ouverte.
- « Configurateur : oui » = un outil en étapes qui assemble monture, pierre et métal. « Partiel » = options sur la fiche produit seulement.

## Constat d'ensemble [I]

Aucun joaillier établi en Tasmanie n'offre un vrai configurateur, ni de 3D ou de 360° manipulable en ligne. Les marques nationales en ligne vendent en Tasmanie par des pages « Hobart » de référencement local, sans boutique sur l'île. Lily Dia et Cullen sont déjà audités ; Cushla Whiting a des salles à Melbourne et Sydney seulement [E19].

Faute de candidats, le classement retient les meilleurs sites de joailliers locaux, comme le prévoit la consigne. Quatre sites sur dix sont bloqués en tout ou en partie, ce qui limite l'audit.

## Classement

Classé par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | My Jewellers | Burnie : Shop 33/22 Mount St [V1] | https://myjewellers.com.au | https://myjewellers.com.au/collections/bespoke-engagement-rings (lien « Bespoke engagement rings » de l'accueil [V1] ; page non lue, 429). Fiche lue : `/products/sylvara-oval-cut-diamond-half-bezel-solitaire-engagement-ring` [V2] | Non (partiel). La fiche a des sélecteurs : métal (or 9 ou 18 ct, jaune, rose ou blanc, et platine), « Lab-diamond » ou « Natural Diamond », pierre de 0,5 à 4 ct, taille de doigt. Pas de prix : « Sale price $0.00 », bouton « Enquire About This Ring » [V2] | **En partie.** `robots.txt` en 200, tout permis. Puis réponses 429 sur 3 des 4 pages demandées, non redemandées [V3] | Le plus proche de JR Diamond sur l'île [I]. Même duo de certificats : « GIA certification included » (naturel) et « IGI certification included » (synthétique). Fabrication à la commande en 4 à 6 semaines environ. Acompte de 50 % [V2]. Mais le prix reste « sur estimation » après demande [V2] |
| 2 | Watsons Jewellers | Launceston : 106 Brisbane St [V4] | https://watsonsjewellers.com.au | https://watsonsjewellers.com.au/collections/engagement-rings (lien vérifié [V4] ; page en 429 [V3], contenu [E6]). Sur mesure : https://watsonsjewellers.com.au/pages/custom-made [V5] | Non. Catalogue avec prix et bouton « Add to cart » [E6] | **En partie.** `robots.txt` en 200, tout permis. 429 sur la collection des bagues de fiançailles, non redemandée [V3] | Seul vrai commerce en ligne de bagues sur l'île [I] : 43 bagues en synthétique avec prix, de 2 999 $ à 6 499 $ sur la page vue [E6]. Collections séparées naturel (« engagement-ring-mined ») et synthétique [V4]. Bijoutier « since 1925 » ; sur mesure en boutique, en ligne ou par téléphone, croquis, atelier sur place, « natural or lab-grown » [V5] |
| 3 | Metal Urges Fine Jewellery & Diamonds | Hobart : 106 Murray St [V7] (un annuaire indique 105 Liverpool St [E20]) | https://www.metalurges.com.au | https://www.metalurges.com.au/collections/engagement-rings [V7] | Non | **En partie.** `robots.txt` en 200, tout permis. 429 sur `/pages/lab-grown-diamonds` et `/pages/about-metal-urges`, non redemandées [V3] | Récit de fabrication proche de « l'atelier en direct » : design numérique « with incredible accuracy and photo-like images », puis modèles en résine imprimés en 3D à essayer, puis fabrication à l'atelier de Hobart [V8]. Page « Pricing » sans prix publiés, mais une invitation à parler budget [E9]. Synthétique proposé « as an option », certifié IGI ou GIA [E9]. Spécialiste des saphirs : plus de 3 000 pierres [V7] |
| 4 | Sargisons Jewellers | Hobart : 125 Liverpool St [E12][V15/11-29] | https://sargisons.com.au | https://sargisons.com.au/collections/engagement-rings [V15/11-29] | Non | **Bloqué.** Le `robots.txt` répond 429 avec une page « Verifying your connection... » (contrôle anti-robot de Shopify) [V3]. Aucune page lue ce jour | Meilleure transparence de prix locale. Prix affichés avec la pierre décrite, par exemple « 0.50 Round Diamond Solitaire Four Claw Ring ~ Platinum $5,143.00 » [E12]. Sur la fiche : diamant GIA F SI1 [V15/11-30]. Mais l'achat se fait en boutique (« available to purchase in store ») [V15/11-30]. Atelier familial « Est. 1905 » [E12]. Synthétique non relevé [V15/11-29] |
| 5 | Claudia Jewellers | Sandy Bay (Hobart) : 24 Magnet Court [V10] | https://www.claudiajewellers.com | https://www.claudiajewellers.com/pages/engagement-rings [V10] | Non | **En partie.** Premier passage : `robots.txt` et page en 200. Second passage, quelques minutes plus tard : `robots.txt` en 429, rien d'autre demandé [V3] | Quatre modèles « Engagement by Scott Loring » avec prix : 5 750 $ à 7 500 $ [V10]. Consultation de conception en ligne ou au studio de Hobart, clients dans toute l'Australie par Zoom [V10]. « Virtual 3D models and pre-fab physical models » sur demande [V10]. Le reste du catalogue est affiché à 0,00 $ [E11] |
| 6 | Launceston Precision Jewellers | Launceston : Shop 2, 76 Brisbane Court [V13] | https://precisionjewellers.com.au | https://precisionjewellers.com.au/about/our-process [V13] | Non | Aucun [V3][V13] | Pas de vente en ligne. Retenu pour l'idée d'atelier visible : un établi au cœur de la salle, pour que les clients voient le joaillier travailler [V13]. Essayage pendant la fabrication [V13]. Gemmologue qui distingue naturel et « synthetic laboratory grown » [V13] |
| 7 | Dean Walker Designs | Burnie : 26 Wilmot St [V14] | https://www.deanwalkerdesigns.com.au | https://www.deanwalkerdesigns.com.au/shop-engagement-rings [V14] | Non | Aucun [V3][V14] | Diamants naturels et synthétiques, sur mesure [V14]. Pas de prix sur la page des bagues de fiançailles (aucun « $ » dans la page lue) [V14]. Membre du groupement Nationwide Jewellers [V14] |
| 8 | David Parums Design | Derwent Valley (sud de la Tasmanie), atelier [V15] | https://www.davidparums.com.au | https://www.davidparums.com.au/ (boutique) ; sur mesure : `/category/customstone-set` [V15] | Non | Aucun. `robots.txt` interdit seulement `*?lightbox=` [V3] | Alliances d'homme (acier damassé, zirconium, tantale, bois) avec prix en ligne, de 590 $ à plus de 4 770 $ [V15]. Fabrication à la commande en 1 à 2 semaines, jusqu'à 4 avec plus d'or [V15]. Un seul artisan, qui écrit à la première personne [V15]. Pas de bague de fiançailles en diamant : hors cœur de cible [I] |
| 9 | Haab Designer Jewellers | Launceston : 20 Coulter Ct [E16] | https://haabdesignerjewellers.com.au | https://haabdesignerjewellers.com.au/ (page non lue) | Non [E16] | **Bloqué.** Le `robots.txt` répond 429 avec la même page de contrôle « Verifying your connection... » [V3]. Aucune page lue | Prix affichés sur les nouveautés, par exemple une bague en diamant de couleur naturel à 7 995 $ [E16]. Sur mesure annoncé [E16]. Membre de Nationwide Jewellers [E16] |
| 10 | Diamond World | Hobart, deux magasins [E17] | https://diamond-world.com.au | — | Non relevé | **Refus des robots.** `robots.txt` : `User-agent: *` puis `Disallow: /` [V3]. Refus respecté, aucune page ouverte | Bijoutier familial fondé en 1975 ; création sur demande en magasin [E17]. Retenu pour mémoire seulement |

### À retenir pour JR Diamond [I]

- **Personne ne configure en ligne en Tasmanie.** Aucun outil en étapes, aucune 3D manipulable chez les dix joailliers retenus. Le plus avancé, My Jewellers, propose des sélecteurs sur la fiche mais aucun prix.
- **Le duo de certificats de JR se retrouve à Burnie.** My Jewellers inclut un certificat GIA pour le naturel et IGI pour le synthétique, comme JR [V2]. Metal Urges cite aussi IGI et GIA pour le synthétique [E9].
- **Montrer la fabrication reste rare.** Metal Urges montre des images numériques réalistes puis une maquette en résine à essayer [V8]. Claudia propose des modèles 3D sur demande [V10]. Launceston Precision montre l'établi en salle [V13]. Aucun ne publie de photos ou de vidéos de fabrication pour chaque commande [I].
- **Le prix est affiché ou caché, jamais expliqué.** Sargisons et Watsons affichent des prix ; My Jewellers, Metal Urges et Claudia, pour le sur-mesure, renvoient à un devis. Aucun site ne décompose le prix en métal, pierre et façon.
- **L'audit détaillé est limité.** Les sites Shopify de l'île (Sargisons, Haab, Watsons, My Jewellers, Metal Urges, Claudia) ont répondu par des 429 ou une page de contrôle à curl. Un audit en navigateur se heurterait sans doute aux mêmes limites [S] : prévoir surtout la lecture des pages restées accessibles.

## Autres candidats vus, non retenus

| Acteur | Ville | Adresse | Constat | Raison |
|---|---|---|---|---|
| Austen & Blake | Hobart : Shop 33, Cat & Fiddle Arcade, 51 Murray St [E18] | https://www.austenblake.com.au/customer-care/viewings/hobart | Salle d'exposition à Hobart ; « Choose your diamond and select your setting » ; bague livrée en 2 à 3 semaines [E18] | Chaîne à plusieurs salles, avec un numéro national en (02), indicatif de Sydney [E18] : pas un joaillier indépendant de Tasmanie [I]. **Bloqué** : le `robots.txt` répond 403 avec une page Cloudflare « Attention Required! » [V3] |
| Francesca Jewellery | Hobart, Cat & Fiddle Arcade [E20] | — | Bijoux fantaisie et médaillons [E20] | Pas de bague de fiançailles ni d'alliance [E20] |
| Lily Dia ; Cullen Jewellery ; Cushla Whiting | — | lilydiajewellery.com/engagement-rings-hobart ; cullenjewellery.com/engagement-rings/category/au-hobart ; cushlawhiting.com.au/collections/engagement-rings-hobart | Pages « Hobart » de référencement local [E19]. Lily Dia écrit « We do not have a showroom in Hobart » [E19] | Pas d'implantation en Tasmanie. Lily Dia et Cullen sont déjà audités (Victoria) |
| Australia Sapphire | Emerald (Queensland) [E19] | australiasapphire.com.au | Constructeur 3D annoncé (« 3D Vision Studio ») ; cite la Tasmanie parmi ses zones servies [E19] | Établi au Queensland, hors territoire |

## Sources

« curl » : requête simple, identité par défaut. Toutes les sources [Vn] ont été lues le 25/11/2026, sauf mention contraire.

- [V1] https://myjewellers.com.au/ (curl 200) : « BESPOKE DIAMONDS » ; « Each piece is customisable and made to order » ; « Shop 33/22 Mount St Burnie » ; lien `/collections/bespoke-engagement-rings`.
- [V2] https://myjewellers.com.au/products/sylvara-oval-cut-diamond-half-bezel-solitaire-engagement-ring (curl 200) :
  - sélecteurs : « 9ct Yellow Gold » à « Platinum », « Lab-diamond », « Natural Diamond », « 0.5ct » à « 4ct », tailles H à O ;
  - « Enquire About This Ring » ; « we will provide you with a price estimate » ; « Sale price $0.00 » ;
  - « GIA certification included », « IGI certification included » ;
  - « Approximately 4–6 weeks » ; « A 50% deposit is required to begin production ».
- [V3] Fichiers `robots.txt` lus avec curl le 25/11 :
  - en 200, sans interdiction des pages citées : myjewellers.com.au, watsonsjewellers.com.au, www.metalurges.com.au, www.claudiajewellers.com (premier passage), precisionjewellers.com.au, www.deanwalkerdesigns.com.au, www.davidparums.com.au (`Disallow: *?lightbox=`) ;
  - diamond-world.com.au : 200, `User-agent: *` puis `Disallow: /` ;
  - sargisons.com.au et haabdesignerjewellers.com.au : 429, page « Verifying your connection... » ;
  - www.claudiajewellers.com : 429 au second passage ;
  - www.austenblake.com.au : 403, page « Attention Required! | Cloudflare » ;
  - pages en 429, non redemandées : myjewellers.com.au (`/collections/bespoke-engagement-rings`, `/pages/custom-design`, `/collections/bespoke-wedding-bands`) ; watsonsjewellers.com.au/collections/engagement-rings ; www.metalurges.com.au (`/pages/lab-grown-diamonds`, `/pages/about-metal-urges`).
- [V4] https://watsonsjewellers.com.au/collections/jewellery (curl 200) : « visit our store at 106 Brisbane St. Launceston, Tasmania » ; liens `/collections/engagement-rings`, `/collections/engagement-ring-mined`, `/collections/engagement-ring-solitaire`, etc.
- [V5] https://watsonsjewellers.com.au/pages/custom-made (curl 200) : « Crafting Jewellery Since 1925 » ; « natural or lab-grown diamonds » ; « in-store, online, or over the phone » ; « we'll sketch it » ; « our on-site workshop ».
- [E6] Extraits de recherche, Parallel Search, 25/11 :
  - https://watsonsjewellers.com.au/collections/manual-collection-lab-grown-engagement-rings : « Showing 43 results », prix de 2 999 $ à 6 499 $, boutons « Add to cart » ;
  - https://watsonsjewellers.com.au/ : solitaire ovale synthétique 2 ct à 5 999 $, solitaire taille émeraude 1,20 ct à 16 999 $.
- [V7] https://www.metalurges.com.au/collections/engagement-rings (curl 200) : « 106 Murray Street » ; « more than 3,000 unique gemstones and 300 shades » ; menu « Pricing », « Lab Grown Diamonds ». Accueil https://www.metalurges.com.au/ également lu (200).
- [V8] https://www.metalurges.com.au/collections/custom-rings-and-jewellery (curl 200) : « created digitally with incredible accuracy and photo-like images » ; « 3D print resin models which can be tried on » ; « conducted within our Hobart workshop ».
- [E9] Extraits de recherche, Parallel Search, 25/11 :
  - https://www.metalurges.com.au/pages/pricing : pas de prix publiés pour les pièces vendues ; demande d'un budget ; prêts sans intérêt sur 12 mois (« COLLECT Art Purchase Scheme ») ;
  - `/pages/lab-grown-diamonds` : « certified by leading gemmological laboratories such as IGI and GIA » ; synthétique « as an option, not a replacement » ;
  - `/pages/master-jeweller-chris-hood` : « GIA certified diamonds of Excellent Cut ».
- [V10] https://www.claudiajewellers.com/pages/engagement-rings (curl 200) : New York 6 000 $, Luxembourg 7 500 $, Venice 5 750 $, Manhattan 7 500 $ ; « available online or in our Hobart studio » ; « Zoom » ; « virtual 3D models and pre-fab physical models » ; « 24 Magnet Court ».
- [E11] https://www.claudiajewellers.com/collections/engagement-rings (extrait de recherche) : produits affichés à 0,00 $.
- [E12] https://sargisons.com.au/ , `/collections/engagement-rings` , `/pages/about-us` (extraits de recherche, 25/11) : « Est. 1905 » ; « 125 Liverpool Street Hobart » ; prix, dont « 0.50 Round Diamond Solitaire Four Claw Ring ~ Platinum $5,143.00 » ; « We manufacture in-house at our Hobart workshop ».
- [V13] https://precisionjewellers.com.au/ , `/about` , `/about/our-process` (curl 200) : « Shop 2, 76 Brisbane Court » ; établi en salle pour « see & talk to a jeweller honing his craft » ; essayage pendant la fabrication ; « natural earth mined or synthetic laboratory grown ».
- [V14] https://www.deanwalkerdesigns.com.au/ et `/shop-engagement-rings` (curl 200) : « natural and lab-grown diamonds » ; « 26 Wilmot Street, Burnie » ; « Membership: Nationwide Jewellers » ; aucun prix sur la page des bagues.
- [V15] https://www.davidparums.com.au/ , `/faq` , `/category/customstone-set` (curl 200) : prix de 590 $ à 4 770 $ ; « dispatched within 1–2 weeks », « up to 4 weeks » avec plus d'or ; « Derwent Valley, Southern Tasmania ».
- [E16] https://haabdesignerjewellers.com.au/ (extrait de recherche) : « 20 Coulter Ct Launceston » ; « Natural Coloured Diamond Ring … $7,995.00 » ; « custom design » ; Nationwide Jewellers.
- [E17] https://askmelbourne.com.au/best-engagement-wedding-rings-hobart (extrait de recherche) : Diamond World, fondé en 1975, deux magasins, création sur demande.
- [E18] https://www.austenblake.com.au/customer-care/viewings/hobart (extrait de recherche) : adresse de la Cat & Fiddle Arcade ; « 2—3 weeks » ; « Choose your diamond and select your setting » ; numéro (02) 8310 6291.
- [E19] Extraits de recherche, 25/11 : https://lilydiajewellery.com/engagement-rings-hobart (« We do not have a showroom in Hobart ») ; https://cullenjewellery.com/engagement-rings/category/au-hobart ; https://cushlawhiting.com.au/collections/engagement-rings-hobart (« MELBOURNE, SYDNEY & VIRTUAL SHOWROOMS ») ; https://australiasapphire.com.au/pages/custom-engagement-rings (« Emerald, Queensland »).
- [E20] https://threebestrated.com.au/jewellery-in-hobart-tas (extrait de recherche) : Metal Urges au « 105 Liverpool Street, Suite 3 » (contredit par le site, qui dit 106 Murray Street [V7]) ; Francesca Jewellery, Cat & Fiddle Arcade.
- Passe de Victoria du 15/11 (`docs/concurrence/audit/au/victoria/INVENTAIRE.md`), non relue ce jour :
  - [V15/11-29] https://sargisons.com.au/collections/engagement-rings ;
  - [V15/11-30] https://sargisons.com.au/collections/engagement-rings/products/0-50-diamond-solitaire-ring-platinum (« available to purchase in store », GIA F SI1, 5 143 $).
