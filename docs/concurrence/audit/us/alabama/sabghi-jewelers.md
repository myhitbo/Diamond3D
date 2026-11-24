# Audit : Sabghi Jewelers, studio 3D « Create Your Dream Ring » (Huntsville, Alabama)

| | |
|---|---|
| Site | Sabghi Jewelers, Huntsville (AL) et Fayetteville (TN) : https://www.sabghijewelers.com/ |
| Page de départ | https://www.sabghijewelers.com/create-your-dream-ring/ |
| Date | 15/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel** : studio 3D, boutique, fiche produit et panier vérifiés ; recherche de diamants (widget RapNet) non actionnée |
| robots.txt | géré par Cloudflare : `User-agent: *` → `Allow: /`, `Content-Signal: search=yes, ai-train=no, use=reference` ; robots d'entraînement (`ClaudeBot`, `anthropic-ai`, `Claude-Web`, `GPTBot`…) → `Disallow: /` ; `Disallow: /*?add-to-cart=` (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page de départ.

**Tranché le 24/11 : rapport conservé (décision du propriétaire).** Le robots.txt interdit les robots d'entraînement d'Anthropic et autorise « * ». L'audit a été fait dans un navigateur, pour une étude commandée par un utilisateur, sans défi ni refus du site, à moins d'une page toutes les 2 secondes. Les textes ne sont cités que par courts extraits avec leur adresse (`use=reference`). Si cette lecture du robots.txt ne convient pas, ce rapport est à écarter.

## Parcours

Le studio tient sur une seule page : la 3D à gauche, six rubriques repliables à droite, puis les boutons de sauvegarde. Il n'y a ni étapes obligatoires, ni prix, ni envoi à la boutique (V).

| Rubrique | Options proposées | Effet sur l'image | Effet sur le prix |
|---|---|---|---|
| Préréglages | Solitaire, Halo, Twisted, Filigree, Three stone, Custom | remplit plusieurs champs d'un coup (V) | aucun prix |
| 01 Metal & shank | métal (10), style de corps (13), profil (3), finition (3), largeur 1,2–8 mm, épaisseur 1–3 mm, taille US 3–16 | tout change l'image sauf la taille de doigt et « Comfort fit » (V) | aucun prix |
| 02 Head & setting | tête (8), métal de la tête (11), griffes (4), pointes (3), hauteur 2,5–8 mm, halo (4) ; si halo : pierre, couleur, taille 0,7–2 mm | change ; pointes de griffes presque invisibles (V) | aucun prix |
| 03 Center stone | pierre (15), couleur, forme (12), longueur 2–16 mm, largeur 2–13 mm, orientation (2), poids visé (texte), pureté (12), couleur D–Z (24) | pierre, couleur, forme, dimensions et orientation changent l'image ; poids, pureté et couleur D–Z sont seulement notés (V) | aucun prix |
| 04 Side stones | symétrie gauche/droite, disposition (3), nombre 0–6, pierre, couleur, forme, dimensions, serti (3) | change (V) | aucun prix |
| 05 Accents & gallery | accents de corps (4) ; si accents : pierre, couleur, taille, nombre 2–12 par épaule ; galerie (3) ; grain de mil | change (V) | aucun prix |
| 06 Name & personal details | nom du dessin, gravure intérieure (100 caractères), remarques (3 000 caractères) | aucun : texte reporté sur la fiche (V) | aucun prix |
| Fin | Save design, Print / Save PDF, Open design file, Restore device save, fiche complète | — | — |

Le site vend aussi en ligne des bijoux finis (boutique WooCommerce) : parcours liste → fiche → panier, vérifié plus bas (V).

## Contrôles vérifiés

Relevé `controls.cjs` : 120 contrôles sur ordinateur, 117 sur iPhone (menus du site compris). Le studio compte 75 contrôles : 53 champs (dont 16 qui n'apparaissent que sous condition) et 22 boutons. Tous ont été actionnés ; chaque option de chaque liste a été choisie et l'image comparée avant et après (part des pixels modifiés) (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Solitaire / Halo / Twisted / Filigree / Three stone / Custom | boutons | Halo : halo simple + pavage d'épaules ; Twisted : corps torsadé ; Filigree : corps filigrane, tête Trellis, galerie Scrollwork ; Three stone : corps effilé, 1 poire 4 × 2,5 mm par côté ; Custom : corps et tête « sur mesure » (V) | — | fonctionne ; revenir à Solitaire laisse la galerie Scrollwork et les réglages de pierres de côté (V) |
| Perspective / Front / Side / Top | boutons de vue | recadrent la 3D (11 à 14 % de pixels modifiés) (V) | — | fonctionne |
| Glisser sur la 3D | geste | fait tourner la bague (V) | — | fonctionne, souris et doigt |
| Molette / pincement | geste | zoom avant et arrière ; la page ne défile pas pendant le geste (V) | — | fonctionne |
| Start over | lien | demande « Start a new design? Download your current design first… », puis remet tous les champs à zéro (V) | — | fonctionne |
| Rubriques 01 à 06 | accordéon | seule 01 est ouverte à l'arrivée ; chaque titre affiche un résumé (« 14K Yellow Gold · Straight ») (V) | — | fonctionne |
| Shank metal | liste (10) | couleur du métal ; la légende sous la 3D suit (« Platinum · Oval natural diamond ») (V) | — | fonctionne ; 10 k et 14 k ont le même rendu (V) ; or blanc et platine semblables sur la planche (I) |
| Shank style | liste (13) | 11 corps distincts ; « Chevron » presque identique à « Straight » (0,3 %) ; « Custom shank » garde l'image et ouvre une zone de texte de 500 caractères (V) | — | fonctionne |
| Band profile | liste (3) | « Flat » change l'image ; « Comfort fit » ne la change pas (0 %) (V) | — | Comfort fit sans effet visible |
| Metal finish | liste (3) | poli, satiné, martelé : rendu différent (V) | — | fonctionne |
| Band width / thickness | nombres | élargit, épaissit ; saisie hors bornes ramenée à la borne (99 → 8 ; 9 → 3) (V) | — | fonctionne |
| Ring size (US) | nombre, pas de 0,25 | aucun effet sur l'image, reporté sur la fiche ; 20 → 16 (V) | — | fonctionne |
| Head style | liste (8) | 7 têtes distinctes ; « Custom head » garde l'image et ouvre une zone de texte (V) | — | fonctionne |
| Head metal | liste (11) | tête d'un autre métal que le corps (bicolore) (V) | — | fonctionne |
| Prongs | liste (4) | 4, 6, 8 griffes ou doubles griffes (V) | — | fonctionne |
| Prong tips | liste (3) | écart d'image de 0,04 % : invisible à l'œil (V) | — | effet imperceptible |
| Requested setting height | nombre | hausse ou baisse la tête ; 20 → 8 (V) | — | fonctionne |
| Halo style | liste (4) | simple, double, caché ; fait apparaître Halo stone (15), couleur, taille 0,7–2 mm (V) | — | fonctionne |
| Center stone | liste (15) | change la couleur de la pierre et la légende ; la perle devient une boule (V) | — | fonctionne |
| Couleur de la pierre | liste | diamant : White, Champagne, Cognac, Black ; autres pierres : 11 couleurs (V) | — | fonctionne ; accepte « Ruby · Blue » sans avertir (V) |
| Stone shape | liste (12) | silhouettes distinctes, sauf Emerald et Radiant, identiques (0 %) (V) | — | fonctionne ; les dimensions ne suivent pas la forme (voir Défauts) |
| Length / Width (Diameter pour Round) | nombres | changent la taille de la pierre ; 30 → 16 (V) | — | fonctionne |
| Stone orientation | liste (2) | tourne la pierre d'un quart de tour (V) | — | fonctionne |
| Target carat weight | texte | image inchangée ; fiche : « 1.5-2 ct (target; individual stone to be selected) » (V) | — | fonctionne |
| Clarity preference / Color grade preference | listes (12 / 24) | image inchangée (0 %) ; disparaissent pour une pierre de couleur ; la couleur D–Z disparaît pour un diamant de couleur (V) | — | fonctionne |
| Match left and right sides | case | décochée : 7 champs de plus pour le côté droit ; essai 2 pierres à gauche, 4 à droite accepté (V) | — | fonctionne |
| Side-stone layout | liste (3) | Three stone : pierres alignées à côté de la tête ; Shoulder stones et Graduated : sur les épaules (V) | — | fonctionne ; pierres flottantes (voir Défauts) |
| Number of stones | nombre 0–6 | ajoute les pierres ; 9 → 6 (V) | — | fonctionne |
| Pierre, couleur, forme, serti (côtés) | listes | mêmes choix que le centre ; serti Prong, Bezel, Channel (V) | — | fonctionne |
| Length / Width (côtés) | nombres | pour une pierre ronde, seule la largeur agit (V) | — | fonctionne |
| Band accents | liste (4) | pavé, rail, tour complet ; fait apparaître pierre, couleur, taille 0,7–2 mm, nombre 2–12 (V) | — | fonctionne |
| Under-stone gallery | liste (3) | Scrollwork, Heart detail : petit détail sous la tête (0,3 %) (V) | — | fonctionne |
| Add milgrain edges | case | grain de mil sur le corps (0,4 %) ; fiche « Milgrain : Yes » (V) | — | fonctionne |
| Design name / Inside engraving / Anything else | textes | image inchangée (0 %) ; repris sur la fiche (essai « TEST 2026 ») (V) | — | fonctionne ; la gravure n'est pas dessinée |
| View complete design specifications | dépliant | tableau de 25 à 28 lignes, à jour à chaque réglage (V) | — | fonctionne |
| Save design | bouton | télécharge `<nom>.sabghi-ring.json` (1,5 ko, format `sabghi-ring-design` version 1) et garde une copie dans le navigateur (V) | — | fonctionne, iPhone compris |
| Restore device save | bouton | sans copie : « No saved design was found on this device… » ; avec copie : confirmation puis restauration (V) | — | fonctionne |
| Open design file | bouton | sélecteur de fichier `.json` ; confirmation, puis « Design file opened. You can continue editing. » (V) | — | fonctionne |
| Print / Save PDF | bouton | nouvelle fenêtre : 3 vues (Angle, Front, Side), tableau complet, mention « Design concept for jeweler review », bouton d'impression (V) | — | fonctionne ; impression elle-même non lancée (navigateur sans écran) |
| Boutique : Department, Ring setting, Diamond shape, prix mini et maxi, recherche, Find jewelry, Clear filters | filtres | 1 468 pièces ; Engagement Rings 121 ; + Marquise 20 ; Halo 10 ; 1 000–3 000 $ : 64 ; recherche « marquise » 27 ; remise à zéro : 1 468 (V, https://www.sabghijewelers.com/shop-our-jewelry-inventory/) | prix barré et prix courant | fonctionne ; pas de tri ni de filtre de métal |
| Fiche : vignettes, loupe, onglets | galerie | 2 photos ; visionneuse plein écran (zoom, partage, précédent, suivant) ; onglets Description et Additional information (V, fiche citée en Sources) | — | fonctionne |
| Add to cart | bouton | « … has been added to your cart. View cart » ; le total de l'en-tête passe à 2 999,00 $ (V) | 2 999 $ | fonctionne |
| Panier : ×, Refresh Cart, UPS / In Store, Calculate shipping, Proceed to checkout, Apple Pay, Google Pay | divers | lus ; mode d'envoi UPS coché par défaut (V, https://www.sabghijewelers.com/cart/) | + 25 $ | × : clic sans effet en 30 s ; les autres non actionnés (règle : pas au-delà du panier, aucune adresse saisie) |

Non testés, et pourquoi :
- Recherche de diamants : widget RapNet en cadre (`ii.api.prod.rapnet.com`), dont le robots.txt est illisible (403). Filtres de taille, couleur, pureté, prix et certificat non actionnés (V, https://www.sabghijewelers.com/diamond-search/).
- « Our Jewelry Showcase » : cadre `designerproducts.jewelershowcase.com` (catalogue de fournisseur), non exploré (V, https://www.sabghijewelers.com/collections/engagement/).
- Boutons « Add to cart » des produits associés : liens `?add-to-cart=`, interdits par le robots.txt (V).
- Bulle de discussion (script `platform.aminos.ai/w/chat_plugin.js`, pastille « 1 ») : non ouverte. Formulaire de contact (nom, e-mail, sujet, message) : non rempli. Login, recherche du site, réseaux sociaux, « Click to load Facebook content », carrousel de témoignages : non actionnés (hors parcours d'achat).

## Options disponibles

- **Métaux (10)** : or 14 k, 10 k et 18 k en jaune, blanc et rose ; platine (V).
- **Corps (13)** : Straight, Twisted, Split shank, Bypass, Cathedral, Tapered, Knife edge, Filigree, Braided, Double band, Triple band, Chevron, Custom shank (V).
- **Profil** : Rounded, Flat, Comfort fit. **Finition** : High polish, Satin, Hammered (V).
- **Têtes (8)** : Basket, Peg head, Tulip, Trellis, Bezel, Half bezel, Tension look, Custom head. **Griffes** : 4, 6, 8, Double claw. **Pointes** : Rounded, Claw, V-tip (V).
- **Halo** : None, Single, Double, Hidden (V).
- **Pierres (15)** : Natural diamond, Sapphire, Ruby, Emerald, Amethyst, Aquamarine, Garnet, Topaz, Peridot, Citrine, Tourmaline, Morganite, Opal, Onyx, Pearl. **Aucun diamant synthétique, aucune moissanite** (V).
- **Formes (12)** : Round, Oval, Princess, Cushion, Emerald, Radiant, Asscher, Pear, Marquise, Heart, Trillion, Baguette (V).
- **Pureté** : FL à I3. **Couleur** : D à Z. **Carat** : texte libre, pas de liste (V).
- **Pierres de côté** : Three stone, Shoulder stones, Graduated shoulders ; 0 à 6 par côté ; serti Prong, Bezel, Channel (V).
- **Accents** : None, Pavé shoulders, Channel shoulders, Full eternity. **Galerie** : Open, Scrollwork, Heart detail. **Grain de mil** : oui ou non (V).
- **Taille de doigt** : US 3 à 16 par quart ; pas de guide des tailles (V). **Gravure** : texte libre de 100 caractères, pas de choix de police (V).
- **Vues** : 3D seulement (4 angles, rotation, zoom). Pas de photo, de vidéo, de vue sur la main ni de réalité augmentée dans le studio (V).

## Prix, délais, retours, garanties

- **Studio 3D : aucun prix, aucune fourchette, aucun délai** (V). La page prévient : « Designs are saved on this device or in your downloaded file. They are not automatically sent to the store. » (V).
- **Boutique en ligne** : prix barré puis prix courant, sans décomposition. Montures de 66,69 $ (argent) à 3 914,92 $ sur la première page ; le prix courant vaut 65 % du prix barré (340,49 / 523,83 $) (V, page boutique). Fiche auditée : « Retail Price: $6,000.00 », vendue 2 999,00 $ (V).
- **Panier** : sous-total 2 999,00 $ ; « UPS Shipping Adult Signature Required: $25.00 » ou retrait « In Store Fayetteville, TN » ; total 3 024,00 $ ; pas de champ de code promotionnel ; aucun délai de livraison affiché (V, panier).
- **Paiement** : Apple Pay et Google Pay au panier ; message Affirm et Klarna « As low as $98 / month or interest-free » (V, panier). En boutique : American Express, Visa, MasterCard, Apple Pay, Discover, mise de côté gratuite de 6 mois, crédit Wells Fargo (V, https://www.sabghijewelers.com/financing/) ; « 12 months interest free financing on in store purchases » (V, https://www.sabghijewelers.com/services/).
- **Retours** : « All online purchases […] are considered final sales » ; ni retour, ni échange, ni annulation ; recours seulement pour un article abîmé ou non conforme ; envoi à l'adresse de facturation uniquement ; politique datée du 13 octobre 2026 (V, https://www.sabghijewelers.com/refund_returns/). Rien n'est écrit sur le sur-mesure.
- **Garanties** : nettoyage et contrôle gratuits en boutique (V, page Services). Aucune garantie écrite, aucune mise à taille offerte dans les pages lues.
- **Certificats** : fiche auditée sans certificat, qualité « Approximately G-H », « Approximately SI1-SI2 » (V). La recherche de diamants annonce « Thousands of competitively priced certified diamonds », laboratoire non précisé (V).
- **Synthétique** : le mot n'apparaît ni dans le studio ni dans la boutique ; la recherche « lab » y renvoie « 0 matching pieces » (V, page boutique).

## Confiance et service

- **Ancienneté** : fondé en 1981 à Fayetteville par David Sabghi ; magasin de Huntsville ouvert en 1989 (V, https://www.sabghijewelers.com/about-us/).
- **Avis** : le site n'affiche pas de note ; pied de page : sceau BBB A+ et carrousel de témoignages (V). Hors site, d'après les extraits d'une recherche du 15/11/2026 : Google 4,9/5 sur 118 avis (Huntsville) ; Yelp 3,4/5 sur 10 avis ; Facebook 92 % de recommandations sur 75 avis ; BBB A+ et aucune plainte en 3 ans (V pour les extraits, pages non ouvertes ; adresses en Sources).
- **Contact** : deux téléphones, horaires et e-mail dans l'en-tête ; formulaire de contact ; bulle de discussion ; visite virtuelle des deux magasins (V, https://www.sabghijewelers.com/virtual-tour/). Pas de WhatsApp ni de prise de rendez-vous en ligne (V).
- **Services** : mise à taille, réparation, gravure, rhodiage, expertise, rachat d'or, transformation de bijoux anciens (« convert those heirlooms into well-designed jewelry ») (V, page Services).
- **Langue et devise** : anglais et dollars uniquement (V).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande dans les pages lues (V).
- **Temps d'apparition du visuel** (deux mesures par appareil, à travers le proxy de la session) : 3D du studio à 6,5 et 9,2 s sur ordinateur, 6,9 et 8,1 s sur iPhone ; photo de la fiche produit à 3,5 et 6,4 s sur ordinateur, 4,8 s sur iPhone. Le serveur répond en 1,8 à 2,5 s ; le script du studio pèse 159 ko compressé, 617 ko décompressé (V).

## Points forts à retenir pour JR Diamond

1. **Le dessin se garde et se rouvre sans compte.** « Save design » donne un fichier lisible et une copie locale ; « Open design file » et « Restore device save » le rechargent. Preuve : cycle complet réussi, avec les messages « Design file downloaded and a copy saved on this device » et « Your saved design is restored » (V).
2. **Une fiche à imprimer prête pour l'atelier.** Trois vues, tableau de 28 lignes, date, mention « Design concept for jeweler review ». Preuve : fenêtre ouverte par « Print / Save PDF » (V).
3. **Honnêteté affichée sur les limites de la 3D.** Sous l'image : « A design illustration for your consultation. Stone appearance, setting height and proportions are approximate » ; pour une demande libre : « The preview shows the closest starting form » (V).
4. **Préférences notées sans effet sur l'image, et c'est dit.** « Millimeter dimensions control the preview. Carat weight and grades are recorded as preferences for stone selection » (V).
5. **La 3D reste à l'écran sur ordinateur.** Le panneau est collant (`position: sticky`) alors que le formulaire déplié mesure 2 848 px (V).
6. **Résumé dans chaque titre de rubrique** et légende en clair sous la 3D : l'état du dessin se lit sans rien ouvrir (V).
7. **Saisies bornées.** Toute valeur hors limites revient à la borne, sans message d'erreur (V).
8. **Bicolore et asymétrie.** Tête d'un autre métal que le corps, côtés gauche et droit réglables séparément (V).

## Défauts observés

1. **Ni prix, ni délai, ni envoi.** Le studio s'arrête à un fichier ou à une impression à apporter en boutique : aucun bouton de devis, de rendez-vous ou de contact dans l'outil (V).
2. **Pierres de côté flottantes.** En disposition « Three stone », les pierres s'alignent dans le vide à côté de la tête ; avec 6 par côté, la rangée dépasse largement la bague. Sertis Bezel et Channel dessinés sans appui (V, planche de captures).
3. **Les dimensions ne suivent pas la forme.** Passer par « Round » met la pierre à 6 × 6 mm ; Marquise, Pear ou Oval restent ensuite à 6 × 6 mm tant qu'on ne saisit pas les millimètres (V).
4. **Options sans effet visible** : Comfort fit (0 %), pointes de griffes (0,04 %), Chevron (0,3 %) ; 10 k rendu comme 14 k ; Emerald et Radiant identiques (V). Or blanc et platine semblables à l'œil (I).
5. **Sur iPhone, la 3D sort de l'écran** dès qu'on règle une rubrique basse (panneau non collant) ; un glissement vertical sur la 3D ne fait pas défiler la page (`touch-action: none`) (V).
6. **Combinaisons incohérentes acceptées** : « Ruby · Blue », perle taillée en marquise (V).
7. **Pas de diamant synthétique** dans le studio ni dans la boutique (V).
8. **Fiche produit contradictoire** : titre « 1 1/4 CTW », onglet Additional information « ct-wgt 1/2CT » (V).
9. **Page « Weekly Specials » vide** (V, https://www.sabghijewelers.com/weekly-specials/) ; recherche boutique « lab » servie en 24 s environ, une seule mesure (V).
10. **Deux erreurs JavaScript sur chaque page** (« Cannot set properties of null (setting 'oncontextmenu') ») : étrangères au studio, sans effet constaté (V).
11. **Ventes en ligne définitives** et envoi à l'adresse de facturation seulement : conditions plus dures que celles des vendeurs nationaux (V ; comparaison I).

## Limites de l'audit

- La lecture du robots.txt retenue (groupe « * ») est une interprétation, signalée en tête de rapport.
- Recherche de diamants RapNet et catalogue Jeweler Showcase non explorés : filtres de pierres et certificats non vérifiés.
- Paiement, calcul des frais par adresse et page de commande non ouverts (règle de l'audit). Un article est resté dans un panier de session anonyme : le clic sur × n'a pas abouti.
- Les écarts d'image sont des parts de pixels modifiés entre deux captures de la zone 3D (seuil de 6 sur 255 par canal) ; les jugements « invisible » ou « flottant » viennent de planches de captures regardées à l'œil.
- Temps mesurés dans un centre de données, à travers un proxy : ordres de grandeur, pas des temps d'utilisateur.
- iPhone émulé dans Chromium, pas Safari. Impression réelle non lancée. Fiche produit et panier non refaits sur iPhone.
- Avis hors site lus dans des extraits de recherche, sans ouvrir Google, Yelp, Facebook ni le BBB.

## Sources

Pages ouvertes le 15/11/2026 (sabghijewelers.com) : `/robots.txt` ; `/create-your-dream-ring/` (ordinateur et iPhone) ; `/services/` ; `/diamond-search/` ; `/about-us/` ; `/contact-us/` ; `/refund_returns/` ; `/financing/` ; `/education/` ; `/shop-our-jewelry-inventory/` (avec les filtres `sj_category`, `sj_shape`, `sj_style`, `sj_min`, `sj_max`, `sj_search`) ; `/product-category/sabghi-pilot/engagement-rings/` ; `/product/1-1-4-ctw-natural-diamond-14k-white-gold-engagement-ring/` ; `/cart/` ; `/` ; `/collections/engagement/` ; `/weekly-specials/` ; `/virtual-tour/` ; `/jewelry-repair/` ; `/sitemap_index.xml`, `/page-sitemap.xml`, `/product-sitemap.xml`, `/product_cat-sitemap.xml`.

Extraits de recherche (Parallel Search, requête « Sabghi Jewelers Huntsville reviews », pages non ouvertes) : https://www.google.com/maps/place?q=place_id:ChIJHW_RUc4SYogRxMMwl0Xxiow ; https://www.yelp.com/biz/sabghi-jewelers-huntsville-2 ; https://www.facebook.com/sabghijewelers/ ; https://www.bbb.org/us/al/huntsville/profile/jewelry-stores/sabghi-jewelers-inc-0513-15000824.

Signification du robots.txt : https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt ; https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler.

Captures et scripts (17 captures, hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/sabghi-jewelers/`.
