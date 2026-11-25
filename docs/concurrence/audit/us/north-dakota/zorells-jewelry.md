# Audit : Zorells Jewelry, « Ring Builder » GemFind (Bismarck, Dakota du Nord)

| | |
|---|---|
| Site | Zorells Jewelry, 221 S 9th St, Bismarck (ND) ; « Master IJO Jeweler » : https://zorells.com |
| Page de départ | https://zorells.com/apps/ringbuilder/settings/ |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : parcours monture, diamant et « Complete Ring » audité jusqu'à l'écran « Add To Cart » ; le bouton n'a pas été cliqué (il appelle `/cart/add.js`, interdit par `robots.txt` : `Disallow: /cart/`). Panier lu vide (`/cart`, autorisé). |
| Plateforme | Boutique Shopify + application GemFind / JewelCloud (`gemfind.org`, `api.jewelcloud.com`, dealer 3991). Aucune 3D : photos, galerie, vidéo de la monture. |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en USD, affichés « 2,601$ » (symbole après le chiffre).

Note sur `robots.txt` : la première lecture (via l'outil) a renvoyé HTTP 429 (« Verifying your connection ») et a été mise en cache ; relue à la main, la même adresse renvoie 200 (`Allow: /`, `Disallow: /cart/`, `/cart.js`, `/collections/*sort_by*`). L'audit a été mené après cette relecture [V]. Le blocage était donc ponctuel, pas un refus des robots.

## Parcours

| Étape | Options |
|---|---|
| 1. « Choose your Setting » (`/apps/ringbuilder/settings/`) | 552 montures, 12 par page (12/24/48/99), tri prix croissant ou décroissant ; 20 styles (Halo, New Styles, Solitaire, Single Row, Prong Set, 3 Stone, Hidden Halo, Nature Inspired, Twisted Shank, Trellis, Fancy Shape Melee, Vintage, Multi Row, Double Halo, Bypass, Diamond Scatter Rings, Cluster Sides, Promise, Desire, Bezel Set) ; 10 formes ; curseur de prix 0 à 43 441 $ ; 7 métaux ; recherche par numéro de monture [V] |
| 2. Fiche monture (`/settings/<style>/<métal>-sku-<id>`) | 5 à 6 métaux, taille de la pierre (1 à 3 cases de la monture), taille de doigt 3 à 13 par quarts, « Natural / Lab Grown », 4 photos, zoom, vidéo, « Ring Specification » [V] |
| 3. « Add Your Diamond » (`/apps/ringbuilder/diamondtools`) | Mined / Lab Grown, 10 formes, cut, couleur, clarté, carat, prix, filtres avancés, tri, liste ou grille, comparaison [V] |
| 3 bis. Voie inverse | Fiche diamant, « Add Your Setting » : liste de montures déjà filtrée sur la forme et la plage de carats [V] |
| 4. « Review Complete Ring » (`/apps/ringbuilder/completering`) | Récapitulatif monture + diamant + total, « Drop A Hint », « E-Mail A Friend », « Add To Cart » (non cliqué) [V] |
| 5. Panier (`/cart`) | « Your cart is currently empty » (vide, car aucun ajout) [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Style (20 vignettes) | boutons radio | filtre la liste (ex. Oval + 18K rose + Halo : 30 montures, Solitaire : 15) | prix affichés recalculés par la liste | OK |
| Forme (10) | radio | Round : 552 à 263 montures ; Oval : 85 ; Emerald : 61 (après un diamant) | aucun sur la bague | OK |
| Métal (7 : 14K blanc/jaune/rose, 18K blanc/jaune/rose, platine) | radio | filtre la liste (`MetalType=`) et change le prix de tête (3 751 $ en platine, 3 861 $ en 18K rose, pour le même premier rang) | oui | OK |
| Curseur et champs de prix | curseur + 2 champs | présents (0,00 à 43 441,00) ; curseur non glissé, champs non remplis | | NT (aucun besoin vérifié) |
| Tri prix croissant/décroissant | liste | ordre inversé (9 611 $ en tête en décroissant, filtre Round) | | OK |
| Enregistrements par page (12/24/48/99) | liste | 48 : « Results 1 to 48 of 263 » | | OK |
| Grille 3 / 4 colonnes | liens | bascule la grille | | OK (effet visuel non mesuré) |
| Recherche « Setting# » | champ | numéro 51196 : « No Records Found » (numéro saisi au hasard, ce n'est pas un numéro de monture connu) | | OK (fonctionne, pas d'exemple valide) |
| Pagination (« 2 », « Next », 46 pages) | liens | page 2 : « Results 13 to 24 of 552 » | | OK |
| Reset | lien | boîte « Are you sure you want to reset data? » OK / CANCEL | | OK |
| Save Search | lien | présent ; non cliqué (probable formulaire de compte) | | NT |
| Vignette monture | lien | ouvre la fiche (≈ 5 s à charger sur ordinateur) | | OK |
| Métal (fiche) | liste | change de monture : autre SKU, autre photo (`85325-2-14KR`), autre prix : 14K blanc 2 597 $, 14K rose 2 924 $, 18K blanc 4 353 $, 18K jaune 4 163 $, platine 4 457 $. 14K jaune absent pour cette bague | oui | OK |
| Taille de la pierre (1, 2, 3) | liste | aucun changement de prix ni de photo | non | OK |
| Taille de doigt (3 à 13) | liste | obligatoire : « Please Select Ring Size » (alerte) tant qu'elle manque | non | OK |
| Natural / Lab Grown (fiche) | liste | aucun changement visible de prix, de photo ni de texte (monture seule) | non | OK |
| Miniatures (4) | images | change l'image principale | | OK |
| Loupe | icône | ouvre une fenêtre avec l'image agrandie | | OK |
| Vidéo | icône | ouvre un lecteur ; la vidéo est un fichier `.mp4` du fournisseur de montures (voir Limites) | | OK |
| Ring Specification | lien | fenêtre : numéro, prix, métal, « Can be set with Round 0.95–1.05 » | | OK |
| Drop A Hint | lien | formulaire : nom, e-mail, destinataire, motif, message, date limite | | OK (non envoyé) |
| Request More Info | lien | formulaire : nom, e-mail, téléphone, message, préférence e-mail/téléphone | | OK (non envoyé) |
| E-Mail A Friend | lien | formulaire ami | | OK (non envoyé) |
| Schedule Viewing | lien | formulaire : nom, e-mail, téléphone, message, lieu | | OK (non envoyé) |
| Twitter / « share » | liens | partage Twitter / Facebook (adresses `twitter.com/share`, `facebook.com/sharer`) | | NT (domaines externes) |
| Add Your Diamond | bouton | transfère vers `/diamondtools` avec forme et carat de la monture (0,95 à 1,05 pour un rond « 1 ») | | OK |
| Mined / Lab Grown (diamants) | onglets | Mined : 48 450 diamants ; Lab Grown : 9 158 ; l'adresse devient `/diamondtools/navlabgrown` | | OK |
| Forme, cut, couleur, clarté (diamants) | curseurs à libellés | clic sur un libellé = borne de plage (« G » : 26 173 résultats sur 48 450 ; + « VS1 » : 20 780) | | OK |
| Advance Search | lien | ouvre Depth %, Table %, Polish, Fluorescence, Symmetry | | OK |
| Tri (Shape, Carat, Color, Intensity, Clarity, Cut, Certificate, Price) | liste | Price : 527 $ en tête (Emerald 0,30 K SI2) | | OK |
| Ligne diamant | ligne de tableau | ouvre la fiche (forme, carat, couleur, clarté, certificat GIA, prix) | | OK |
| Certificat « GIA » | lien | vers `stoneinfo.digital/library/diamond/natural/certificates/giacertificate.php?...` (domaine tiers) | | NT (non ouvert) |
| Case Compare | case à cocher par ligne | présente, compteur « Compare Items (0) » ; non cochée | | NT |
| Add Your Setting | bouton | liste de montures déjà filtrée (Emerald, 0,2 à 0,4 ct : 61 montures) | | OK |
| Complete Your Ring | bouton | écran de synthèse `/completering` | | OK |
| Add To Cart | bouton | non cliqué : `/cart/add.js` interdit par `robots.txt` | 3 323 $ | NT (panier interdit) |
| Menus, bandeau, pied de page | liens | « Contact Us », téléphone, « Visit our Showroom » (Google Maps), réseaux, 7 rubriques, abonnement e-mail | | OK (liens lus, pas tous suivis) |

## Options disponibles

- Métaux : 14K blanc, jaune, rose ; 18K blanc, jaune, rose ; platine (selon la monture) [V].
- Formes de pierre : Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher [V].
- Origine du diamant : Mined (48 450 diamants) ou Lab Grown (9 158), les deux avec certificat GIA dans les premières lignes affichées ; Lab Grown aussi dans la monture (menu), sans effet sur le prix de la monture [V].
- Critères de diamant : cut (Ideal, Excellent, V.Good, Good, Fair), couleur D à P, clarté FL à I2 (SI3 aussi), carat 0 à 20, prix 0 à 100 000 $, profondeur, table, polissage, fluorescence, symétrie [V].
- Taille de doigt 3 à 13, par quarts [V]. Pas de gravure ni de choix de griffes ou de corps de bague : les variantes sont des montures distinctes [V].

## Prix, délais, retours, garanties

- Prix de la monture affiché dès la liste (dès 2 601 $), puis prix du diamant, puis total (monture 2 796 $ + diamant 527 $ = 3 323 $ à l'écran de synthèse) [V, `/apps/ringbuilder/completering`]. Une vignette affichée à 2 761 $ a mené à une fiche à 2 796 $ (autre variante 9x7 mm) : écart non expliqué à l'écran [V].
- Pas de décomposition du prix (matière, façon, marge). Mention en pied : « Prices … subject to change without notice … Contact store for current pricing » [V].
- Délai de fabrication ou d'expédition : **non affiché** dans le parcours [V]. Page « Build Your Own » : processus sur mesure en 5 temps (consultation, CAD, cire imprimée Envision Tec ou Solidscape, fonte à la cire perdue, finition) sans délai ni prix [V, `/pages/build-your-own`].
- Retours (`/policies/refund-policy`) : « 15 day unless special ordered, custom-designed, or altered » ; frais de service jusqu'à 20 % sur tout retour ; pièces commandées, ajustées, taillées ou portées exclues [V]. Aucun mot sur l'exception « sur mesure » au-delà de cette phrase.
- Garantie : non trouvée sur les pages lues [V].
- Financement : carte Wells Fargo Jewelry Advantage, demande en magasin ou en ligne (`/pages/financing`) ; paiement intégral avant l'expédition (FAQ du financement) [V].

## Confiance et service

- Magasin physique à Bismarck, téléphone (701) 250-0511, horaires lun-ven 9 h 30–17 h 30, sam 10 h 30–16 h, rendez-vous en ligne [V].
- Argument d'achat direct à Anvers « auprès des sightholders De Beers » (page `/pages/antwerp-diamonds`) : revendication non vérifiée [V pour le texte, S pour le fait].
- Libellés : « Lab Grown » (liste) et « Lab Grown » dans la fiche ; page d'éducation non lue [V].
- Avis clients, évaluations : non vus dans le parcours [V]. Preuves de fabrication : photos catalogue et vidéo du fabricant de montures ; pas de photo d'atelier ni de suivi de commande [V]. Langue : anglais, devise : USD [V].
- Formulaires d'aide : « Drop A Hint », « Request More Info », « Schedule Viewing » [V].

## Points forts à retenir pour JR Diamond

1. Parcours monture, diamant, bague finale en trois étapes numérotées, avec retour possible dans les deux sens (diamant d'abord) : preuve : fiche diamant « Add Your Setting » mène à 61 montures déjà filtrées [V].
2. Filtres de montures instantanés (forme et métal), compteur « 552 → 263 → 85 » : preuve : appels `GetMountingList` avec `Shape=`, `MetalType=` [V].
3. Chaque métal est une fiche et une photo distinctes, avec prix à part (14K blanc 2 597 $, 18K blanc 4 353 $, platine 4 457 $) : le prix suit le métal sans attendre [V].
4. Total clair monture + diamant à l'écran de synthèse (2 796 + 527 = 3 323 $) [V].
5. Photos multiples, loupe et vidéo sur la fiche monture [V].
6. Diamants naturels et de laboratoire séparés (48 450 et 9 158 stones) avec certificat GIA cliquable [V].
7. Boîte « Schedule Viewing » : lien direct vers un rendez-vous en magasin [V].

## Défauts observés

- Aucune 3D ni vue sur la main ; les teintes sont des photos fournisseur (« All metal color images may not be available ») [V].
- Chargement du filtre lent sur mobile : la capture à 4,2 s montre encore le voile de chargement avec un diamant animé [V].
- Prix sans décomposition ; écart 2 761 $ (liste) / 2 796 $ (fiche) sans explication [V].
- Taille de doigt obligatoire avant « Add Your Diamond », signalée par une alerte du navigateur [V].
- Sans délai de fabrication affiché ; retours avec 20 % de frais [V].
- Message « Error! » présent dans le texte de la fiche diamant (élément masqué dans la page lue, sans effet visible) [I].
- Le bouton « Add To Cart » n'est pas atteignable par le panier chez un auditeur respectant `robots.txt` : parcours de paiement non audité.

## Limites de l'audit

- Pas de clic sur « Add To Cart » ni au-delà du panier : `/cart/add.js` interdit ; frais de livraison, moyens de paiement et délai de livraison non relevés [V].
- Appel hors règle probable : le clic sur l'icône vidéo a fait charger `https://overnightmountings.s3.amazonaws.com/85325.video.white.mp4` ; le `robots.txt` de ce domaine est illisible (HTTP 403), donc statut INCONNU. Je ne l'ai pas rouvert [V].
- Lab-grown : prix des diamants de laboratoire, certificats IGI, et page d'éducation sur le synthétique non lus ; les prix de diamants listés sont ceux des 3 à 12 premières lignes seulement.
- Aucun formulaire envoyé ; certificat GIA tiers (`stoneinfo.digital`) non ouvert.
- Mesures : liste 4,0 s (ordinateur) et 4,2 s (iPhone 13) jusqu'à l'image de monture ; fiche 2,6 s (ordinateur) et 2,9 s (iPhone) ; connexion de l'espace de travail, donc valeurs indicatives [V].
- Aucun défilement horizontal du document en iPhone (liste et fiche) [V].

## Sources

- https://zorells.com/robots.txt, https://zorells.com/apps/ringbuilder/settings/, https://zorells.com/apps/ringbuilder/settings/solitaire/14k-white-gold-sku-7736598, https://zorells.com/apps/ringbuilder/diamondtools, https://zorells.com/apps/ringbuilder/diamondtools/product/emerald-shape-0.30-carat-k-color-si2-clarity-none-cut-gia-certificate--sku-1933158096, https://zorells.com/apps/ringbuilder/completering
- https://zorells.com/policies/refund-policy, https://zorells.com/pages/financing, https://zorells.com/pages/build-your-own, https://zorells.com/pages/antwerp-diamonds, https://zorells.com/pages/faqs, https://zorells.com/cart
- Appels de l'application : `api.jewelcloud.com/api/RingBuilder/GetMountingList`, `GetDiamond`, `GetMountingDetail`, `GetDiamondDetail` (relevés dans le navigateur).
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/zorells/
