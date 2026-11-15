# Audit : Brilliant Earth (États-Unis, vendeurs nationaux)

- **Site** : Brilliant Earth (Brilliant Earth Group, Inc., San Francisco, Nasdaq BRLT), https://www.brilliantearth.com. Page de départ : https://www.brilliantearth.com/engagement-rings/start-with-a-diamond/ (« Design Your Own Engagement Ring », pierre d'abord).
- **Date** : 15/11/2026. **Appareils** : Chromium (Playwright) 1366×900, en-US, depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué**. Une seule visite : 307, puis 403 avec `cf-mitigated: challenge`, puis une case Cloudflare Turnstile « Verify you are human » ; titre « Just a moment... » pendant 25 s [V][B2].
  - Captcha interactif : rien coché, aucun nouvel essai. Le robots.txt est lui-même derrière le défi (403 au curl et au service de lecture Parallel) [V][B1].
- **Ce qui a été lu** : le texte des pages restitué par les extraits du moteur de recherche Parallel (sans contacter le site), le rapport annuel 10-K, les résultats du 3e trimestre et des avis tiers.
  - La lecture de copies en cache de brilliantearth.com a été refusée par le système d'autorisation de la session : pas d'autre tentative.
- Complète la fiche Brilliant Earth de `docs/concurrence/2026-11-15_etats-unis.md` ([V1] à [V10]). Écarts avec cette fiche :
  - échange de pierre : crédit de 100 %, mais vers une pierre d'au moins 1,5 fois (naturel) ou 2 fois (synthétique) sa valeur, États-Unis et Canada seulement ; garantie : exclut toute perte de pierre et l'usure, pas seulement la pierre centrale [B16] ;
  - retours de 30 jours comptés depuis la mise à disposition pour l'expédition [B15] ; 44 salles sur la page Contact, 42 au 31/12/2025 selon le 10-K [B21][B24] ; ajout : Israël est livré [B17].
- **Légende** : [V] vu dans le navigateur ou par curl ; [Vc] texte du site lu dans un extrait de recherche, non actionné (date de l'extrait inconnue : prix, dates et promotions peuvent dater de plusieurs mois) ; [Vs] document de la société déposé à la SEC ou publié pour les investisseurs ; [T] tiers (avis) ; [I] inféré ; [S] supposé. Prix en dollars US.

## Parcours

Reconstitué d'après le texte des pages, sans navigation.

| Étape | Options |
|---|---|
| 0. Entrées « Design Your Own » [B12][B22] | Start with a Setting, a Natural Diamond, a Lab Grown Diamond, a Gemstone, a Bridal Set ; barre « Design Your Ring » en 3 étapes, dont l'ordre suit l'entrée choisie [Vc] |
| 1. Choose Diamond (page de départ) [B2][B3][B5] | Naturel ou synthétique ; 12 formes ; carats et prix min.–max. ; 3 profils ; taille, couleur, pureté ; collections ; L:W, fluorescence, poli, symétrie, table, profondeur ; provenance ; laboratoire ; Hearts & Arrows ; date de livraison ; Real View ; vue vignettes ou liste ; Quick Ship ; tri [Vc] |
| 1b. Fiche pierre [B6][B7] | Vidéo réelle interactive, photo réelle, vues cotées de profil et de dessus, taille réelle sur une main taille 6 (3 teintes de peau), certificat, add to ring, add to bag, comparaison avec 4 pierres voisines [Vc] |
| 2. Choose Setting : liste [B8] | 13 raccourcis, Quick Ship, Delivery by Christmas, tri ; filtres style, Bridal Sets Only, métal, forme, largeur, griffes, prix [Vc] |
| 2b. Fiche monture [B9] | View in 3D, photos « Shown with 2 carat diamond », vidéo « Drag to Rotate », bague sur la main, forme et carat d'affichage, métal, style, poids du pavage ou largeur, origine des petites pierres, CHOOSE THIS SETTING [Vc] |
| 3. Complete Ring [B2][B12] | « Select Ring Size », aperçu de la bague finie, panier ou liste de souhaits [Vc]. Gravure « available on many » montures [Vc]. Contenu exact non lu. |
| 4. Panier et paiement | Non atteints (blocage). Le panier propose l'Extend Protection Plan [Vc][B18] et un code promo (« Use Code … in Cart ») [Vc][B6] ; « Expedited delivery may be available in checkout » [Vc][B7] |
| Variante : bague prête [B10] | Métal (18 k blanc ou jaune), forme, carat central 1 ou 1,5 ct, taille, Size Guide, Add To Bag [Vc] |
| Variante : sur mesure complet [B13] | Request a Quote, concept, modèle numérique à valider, fabrication ; 4–6 semaines, dès 2 000 $ [Vc] |

## Contrôles vérifiés

Aucun contrôle actionné : seuls ceux de la page de blocage ont été vus. Les autres libellés viennent du texte des pages ; l'effet décrit est celui que la page annonce.

| Libellé | Type | Effet annoncé (non observé) | Prix | État |
|---|---|---|---|---|
| **Page de blocage [B2]** | | | | |
| Verify you are human ; Privacy ; Help | case Turnstile, liens | Vérification Cloudflare ; pages Cloudflare | — | Vus, non actionnés (règles) [V] |
| **En-tête et pied de page [B21][B22]** | | | | |
| Select your country for shipping and currency ; USD ; Save ; Cancel | sélecteur | Pays de livraison et devise | Devise locale promise [B17] | Non testé : blocage |
| Virtual Appointment ; our showrooms ; Contact us | liens | Rendez-vous vidéo ; salles ; contact | — | Non testé : blocage |
| Sign In (Google ou e-mail) ; Create an account ; Wish List ; My Bag | liens, formulaire | Compte, liste, panier | — | Non testé ; compte exclu par les règles |
| Menus ENGAGEMENT RINGS (Start with…, Shop by Shape, styles) | menus | Navigation | — | Non testé : blocage |
| Bandeau « ENDS SOON! … Use Code … in Cart » | lien | Cadeau avec achat dès 1 000 $ | Voir Prix | Lu [Vc] |
| Live Chat (Brilliant Earth Virtual Assistant) ; Call 800.691.0952 ; Text +1 415.520.6526 | boutons | Assistance 24/7 | — | Non ouverts (règles) |
| **Recherche de pierres [B3][B4][B5]** | | | | |
| Natural Diamonds / Lab Grown Diamonds | onglets | Change le stock affiché | — | Non testé : blocage |
| 12 formes | boutons | Filtre | — | Non testé |
| Carat, Diamond Price, L:W Ratio, Table %, Depth % (min, max) | champs | Filtres numériques | — | Non testé |
| Most Sparkle ; Best Balance ; Top Quality | boutons | Préréglages de taille, couleur et pureté | — | Non testé |
| Cut ; Color ; Clarity ; Fluorescence ; Polish ; Symmetry | curseurs | Filtres de qualité | — | Non testé |
| Our Diamond Collections ; Origin ; Report ; Hearts & Arrows | cases | Filtres | — | Non testé |
| Delivery On Or Before (7 dates, Any Date) | liste | Filtre par date de livraison | — | Non testé |
| Real View ; Visual / List ; Quick Ship | interrupteurs | Pierres filmées seulement ; vignettes ou tableau ; livrables vite | — | Non testé |
| Sort By (jusqu'à 15 tris) ; Reset All ; View Results | liste, boutons | Tri ; remise à zéro | — | Non testé |
| Compare (0) ; cœur sur chaque pierre | onglet, bouton | Comparateur | — | Non testé |
| Aperçu : View More ; Add To Ring ; Add To Bag ; View Diamond Details ; certificat | boutons | Ajout ou fiche | — | Non testé |
| Glissière 0,25–2,00 ct « Actual Diamond Size on Size 6 Hand » ; 3 mains | curseur, boutons | Taille réelle sur la main | — | Non testé |
| Size Guide (fenêtre) ; Ring Size Guide | liens | Guide des tailles, baguier gratuit | — | Non testé |
| **Fiche pierre [B6][B7]** | | | | |
| Interactive Real Diamond Video ; Real Diamond Image ; vues cotées | médias | Vidéo et photo de la pierre vendue | — | Non testé |
| light hand, dark hand, dark hand2 ; Darker / Lighter | boutons | Teinte de la main | — | Non testé |
| add to bag ; add to ring | boutons | Panier, ou étape monture | Prix de la pierre | Non testé |
| DROP HINT ; ADD TO WISHLIST ; Email Us ; Contact Us ; Visit Store | boutons, liens | Indice ; liste ; question sur cette pierre | — | Non testé (formulaire, compte) |
| Compare Similar Diamonds : View Diamond (×4) | liens | Pierre voisine avec l'écart de prix | « Better Color » +480 $, « Larger Diamond » +130 $ | Lu [Vc][B6] |
| Affirm « Learn more » ; Bank Wire Price ; Need it sooner? | lien, texte | Mensualité ; prix par virement ; express au paiement | −1,5 % ; express non chiffré | Lu [Vc] |
| **Liste des montures [B8]** | | | | |
| 13 raccourcis ; Quick Ship ; Delivery by Christmas | boutons | Filtres rapides | — | Non testé |
| Setting Style (17) ; Bridal Sets Only ; Metal (7) ; Diamond Shape (11) ; Width (3) ; Prong Type (3) ; Setting Price ; Sort By (4) ; Reset All ; View Results | filtres, tri | Listes ci-dessous | — | Non testé |
| **Fiche monture [B9]** | | | | |
| Barre « Design Your Ring » : Browse Settings, Browse Diamonds, Select Ring Size | liens | Étapes du parcours | — | Non testé |
| View in 3D | bouton | « rotate your design to see the profile, band width, and prongs » [B12] | — | Non testé : nature du rendu inconnue |
| Photos ; Interactive Video – Drag to Rotate ; Ring on Hand, Darker / Lighter | médias | Photos « Shown with 2 carat diamond », vidéo tournante, bague portée | — | Non testé |
| View with Diamond Shape (10 ou 11) ; View with Carat Size (2) | boutons | Change la pierre montrée | Aucun effet annoncé | Non testé |
| Metal (6) | boutons | Change l'image et le prix | 14 k → 18 k blanc : +200 $ | Prix lus [Vc] |
| Style ; Setting Carat Weight (1/8, 1/4) ; Band Width (1,5 ou 2 mm) | boutons | Variante de la monture | 1/8 → 1/4 ct tw : +900 $ en 18 k blanc [I] | Prix lus [Vc] |
| Diamond Origin : Natural / Lab Grown | bascule | Les petites pierres suivent l'origine de la pierre centrale | — | Non testé |
| CHOOSE THIS SETTING ; DROP HINT ; ADD TO WISHLIST ; avis (317) | boutons, lien | Étape suivante ; indice ; liste ; avis sur la monture | — | Non testé |
| **Bague prête et alliance [B10][B11]** | | | | |
| Select size (moins de 3, 3 à 12 au quart, plus de 12) ; Size Guide ; Add To Bag | liste, lien, bouton | Taille ; date « depending on selected ring size » ; panier | — | Non testé |
| add engraving (+$40) : texte, icônes, Block / Script, SUBMIT & ADD TO BAG, Skip Engraving & Add to Bag | fenêtre | Gravure intérieure | +40 $ | Non testé |
| **Services** | | | | |
| Virtual Try On (sur mobile, sous les images) [B14] | bouton | Photo de la main, bague superposée, carats, forme, métal, alliance, « Save and Share » | — | Non testé : blocage, affichage iPhone non lancé |
| Book Appointment : lieu, prestation (5), date, formulaire [B22] | fenêtre | Salle ou Zoom, 50 min | Gratuit | Non testé (formulaire exclu) |
| Request a Free Ring Sizer [B20] ; Request a Quote [B13] | formulaires | Baguier envoyé par la poste ; devis détaillé du sur-mesure | Gratuits | Non testé (formulaires exclus) |
| Order Status : numéro et e-mail [B21] | formulaire | Date prévue et numéro FedEx | — | Non testé (aucune commande) |
| Find my matching wedding ring [B2] | outil | Bague et alliance ensemble | — | Non testé |

Non relevés faute d'accès : contenu exact de l'étape 3 et du panier, partage, zoom, réalité augmentée en direct.

## Options disponibles

- **Formes** : 12 dans la recherche de pierres (Oval, Round, Marquise, Emerald, Elongated Cushion, Cushion, Old Mine, Pear, Radiant, Princess, Asscher, Heart) ; 11 pour les montures (sans Elongated Cushion), 10 sur certaines [Vc][B3][B8][B9].
- **Pierres** : diamants naturels et synthétiques ; saphirs, émeraudes, rubis et autres pierres de couleur [Vc][B3][B8].
- **Métaux** : filtre à 7 valeurs (or 14 et 18 k jaune, blanc, rose ; platine) ; fiches lues à 6 valeurs, sans or rose 18 k [Vc][B8][B9]. Or blanc 18 k rhodié [Vc][B9]. Métal recyclé ou « responsibly sourced » [Vc][B12].
- **Styles (17)** : Vintage, Nature Inspired, Sculptural, Bezel, Cathedral, Hidden Halo, Solitaire, Classic, Three Stone, Luxe, Modern, Unique, Accents, Halo, Stacks Flush, East West, Gemstone [Vc][B8].
- **Griffes** : 4 Prong, 6 Prong, Double Prong (filtre) ; sur les fiches : Four-Claw, Four-Bead, Four-Prong [Vc][B8][B9]. **Largeur** : moins de 2 mm, 2–3 mm, plus de 3 mm ; 1,5 ou 2 mm au choix sur certaines montures [Vc].
- **Pavage** : poids au choix sur certaines montures (1/8 ou 1/4 ct tw) ; petites pierres F/G, SI1, naturelles ou synthétiques selon la pierre centrale [Vc][B9].
- **Qualité (synthétique, filtres)** : taille Fair à Super Ideal ; couleur D à J ; pureté FL à SI2 [Vc][B5]. Naturel : D à K annoncé pour les radiants [Vc].
  - Échelle de taille maison en 6 grades (Poor non vendu) ; un GIA « Excellent » est affiché Super Ideal ou Ideal [Vc][B23].
- **Collections** : naturel Flawless, Blockchain Enabled, Truly Brilliant ; synthétique Flawless, Carbon Capture, 100% Renewable Energy, Sustainably Rated, Truly Brilliant [Vc][B3][B4].
- **Provenance (naturel)** : Canada, Botswana Sort, Angola, Recycled ; rapport d'origine GIA pour une collection ; pierres « blockchain » depuis 2019 [Vc][B3][B7].
- **Laboratoires** : naturel IGI, GIA, HRD ; synthétique IGI, GIA, GCAL, HRD [Vc][B3][B4]. Fluorescence en 5 niveaux ; poli et symétrie Good, Very Good, Excellent [Vc][B5].
- **Tailles de doigt** : moins de 3, de 3 à 12 au quart, plus de 12 (tailles US) ; la table de conversion a une colonne qui inclut Israël [Vc][B11][B20].
- **Gravure** : 40 $ ; 15 caractères (corps fin) ou 20 (corps épais), 5 $ par caractère en plus ; polices Block et Script, icônes facultatives ; corps d'au moins 1,4 mm ; 1 à 3 jours de plus [Vc][B11][B19].

## Prix, délais, retours, garanties

- **Affichage** : monture « (Setting Only) » et pierre affichées à part. FAQ : « We list the diamond and setting separately, so you see exactly where every dollar goes » [Vc][B2].
  - Rien n'est décomposé à l'intérieur de la monture (métal, façon) [I]. La monture ne se vend pas seule : « available only with purchase of a diamond » [Vc][B9].
- **Repères de prix** :
  - montures : 750 $ (Horizontal Petite Comfort Fit Solitaire, 14 k blanc), 1 050 $ (Twisted Vine, 14 k), 2 490 $ (Bezel Halo, platine) [Vc][B8][B9] ;
  - synthétique : dès 140 $ (0,30 ct) ; 1,44 ct ovale D VVS1 IGI 2 190 $ ; 3,02 ct ovale H VS1 IGI 3 980 $ [Vc][B5][B6] ;
  - naturel : 1,00 ct rond F VS2 GIA 3 750 $ ; 1,50 ct rond H VS2 GIA 8 780 $ [Vc][B7] ;
  - bague composée dès ≈ 1 000 $ en synthétique, ≈ 1 800 $ en naturel [Vc][B2] ; bague prête 1 ct ovale naturel, or 18 k : 3 990 $ [Vc][B10].
- **Effet des options** : 14 k → 18 k blanc : +200 $ sur deux montures (1 050 → 1 250 $ ; 1 790 → 1 990 $) [Vc][B9]. La forme et le carat « d'affichage » ne changent pas le prix de la monture [I].
- **Prix par virement** sur chaque pierre : −1,5 % (3 980 → 3 920 $) [Vc][B6], mais 35 $ de frais par virement [Vc][B18].
- **Mensualités** : « From $343 /mo or 0% APR with Affirm » sur une pierre à 9 870 $ ; Affirm jusqu'à 36 mois, Wells Fargo 12 mois, réservation avec 20 % d'acompte [Vc][B6][B10][B18].
- **Paiement** : Visa, Mastercard, American Express, PayPal, Apple Pay (site mobile), virement dès 500 $ (États-Unis, Canada), Affirm, Wells Fargo, réservation ; ACH refusé [Vc][B18].
- **Promotions** : cadeau avec achat dès 1 000 $, codes successifs (STUDS, FREEGIFT, GIVEAWAY, DIAMOND, GIFT, BLACKFRIDAY « up to $800 in Jewelry Value »), tous sous « ENDS SOON! » [Vc][B6][B9][B21]. Offres étudiants, soignants, militaires [Vc][B22].
- **Délais** :
  - date sur chaque fiche, avec heure limite : monture « Order now for delivery by Tue, Dec 1, depending on center diamond » ; pierre « Estimated Delivery by … if ordered by 2 PM PT tomorrow » ; alliance « Wed, Nov 18 - Tue, Nov 24, depending on selected ring size » [Vc][B6][B9][B11] ;
  - bague composée « typically arrive within 2-3 weeks » [Vc][B12] ; 10-K : sur commande en 6 à 15 jours ouvrés, articles stockés en 2 à 5 [Vs][B24] ;
  - sur mesure complet : 4–6 semaines [Vc][B13] ; express possible « for a fee » [Vc][B18].
- **Livraison** : FedEx gratuite aller et retour, assurée, signature au-delà de 250 $, pas de boîte postale [Vc][B17].
  - International : FedEx International Priority gratuit, 2 à 5 jours ouvrés après l'expédition ; droits et taxes à la charge du client, sauf Royaume-Uni, Canada et Australie [Vc][B17].
  - **Israël figure parmi les destinations** [Vc][B17].
- **Retours** : 30 jours, gratuits, remboursement ou échange [Vc][B15].
  - Départ du délai : « when your purchase is available for shipment or pickup » [B15], ou « within 30 days of the ship date » [B17] ; jamais la réception [Vc].
  - Fêtes : commandes du 1/11 au 15/12 retournables jusqu'au 15/01 [Vc][B15].
  - Exclus : hors délai (réservation comprise), gravé (retour possible contre 40 $ de retrait de gravure), personnalisé, « custom designed jewelry », modifié en cours de fabrication, retaillé, réparé, reçu en échange, acheté par l'échange de pierre [Vc][B15].
  - Les bagues « Create Your Own » restent retournables, par téléphone ; portail en ligne pour moins de 1 000 $ aux États-Unis ; remboursement ≈ 5 jours ouvrés après réception [Vc][B15].
- **Mise à taille** : 1 gratuite sous 60 jours quelle que soit la taille, ou sous 1 an dans la plage de la bague, port compris. Payante pour le sur-mesure, le modifié et le gravé ; impossible pour les bagues tour complet et les métaux alternatifs (échange sous 60 jours) [Vc][B15].
- **Garantie** : à vie contre les défauts de fabrication [Vc][B16].
  - Exclut l'usure, les griffes usées ou tordues, la perte de pierres, la perte et le vol. Remplacement sous 60 jours ; ensuite seulement pour les pièces de moins de 1 000 $. Annulée si un autre bijoutier intervient.
  - Hors États-Unis, Canada, Australie et Royaume-Uni : 50 $ de dépôt pour l'expertise.
  - Extension payante « Extend Protection Plan » (tiers, de 2 ans à vie), proposée dans le panier [Vc][B18][Vs][B24].
- **Échange de pierre à vie** : crédit de 100 % du prix d'achat vers une pierre d'au moins **1,5 fois** sa valeur (naturel) ou **2 fois** (synthétique) ; pas pour les pierres de couleur ; États-Unis et Canada seulement ; achat ferme [Vc][B16].
- **Certificats** : « IGI Certificate » ou « Digital GIA Certificate » (lien envoyé après l'achat) et « Professional Appraisal » inclus [Vc][B6][B7]. Numéro du certificat inscrit sur la pierre (bague prête) [Vc][B10].
- **Libellé du synthétique** : « Lab Grown Diamond(s) » (titres, filtres), « Lab Diamond » (menus), « cultured diamonds » dans le texte d'origine. Naturel : « Natural, untreated diamond » [Vc][B4][B6][B7].
- **Langues et devises** : anglais seulement, déclinaisons en-ca, en-gb, en-au [Vc][I]. Prix en CAD sur le site canadien, « Taxes Included » sur l'australien ; « pricing in your local currency » promis [Vc][B7][B9][B17].

## Confiance et service

- **Omnicanal** : 44 salles listées sur la page Contact (dont Beverly Hills, San Antonio, San Jose), 42 au 31/12/2025 selon le 10-K ; visites sans rendez-vous acceptées [Vc][B21][Vs][B24]. Au 3e trimestre 2026, réservations sans rendez-vous : +50 % sur un an [Vs][B25].
- **Rendez-vous vidéo** : Zoom 50 min, gratuit, tous les jours de 7 h à 18 h (heure du Pacifique) [Vc][B21]. En salle : bague de fiançailles, alliance, bijoux (50 min), dépôt ou retrait (15 min) [Vc][B22].
- **Assistance 24/7** : téléphone, chat, SMS ; numéros pour le Canada, le Royaume-Uni et « All Other Countries » (+1 415 426 2781) [Vc][B17][B21].
- **Essayage virtuel** sur une photo de la main, sans réalité augmentée en direct : redimensionner, déplacer, carats, forme, métal, alliance ; enregistrer, télécharger ou envoyer à un conseiller [Vc][B14].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier relevée [I]. Modèles du studio maison, fabriqués par des « long-term manufacturing partners » [Vs][B24].
  - Suivi de commande : date prévue et numéro FedEx seulement [Vc][B21]. Sur mesure : « computerized model » à valider avant fabrication [Vc][B13].
- **Traçabilité** : provenance de chaque pierre naturelle, « Beyond Conflict Free », blockchain, rapport d'origine GIA [Vc][B7].
- **Avis** :
  - Trustpilot 4,2/5 sur 1 618 avis ; profil payant signalé par Trustpilot ; répartition lue : 69 % à 5 étoiles, 18 % à 1 étoile [T][B26] ;
  - BBB : accrédité, A+, 4,49/5 sur 344 avis [T][B27] ; nombre d'avis sur chaque fiche (317 pour Petite Twisted Vine) [Vc][B9] ;
  - plaintes récurrentes : solidité (fermoirs, pierres perdues), délais de réparation et de retaille, service après-vente [T][B26].
- **Chiffres** : 437,5 M$ de ventes en 2025, dont 15,5 M$ hors des États-Unis [Vs][B24]. 3e trimestre 2026 : 112,8 M$, 52 720 commandes, panier moyen 2 140 $, marge brute 59,7 % [Vs][B25].

## Points forts à retenir pour JR Diamond

1. **Date de livraison sur chaque fiche**, recalculée selon la pierre et la taille, avec heure limite (« if ordered by 2 PM PT ») [Vc][B6][B9][B11]. Pour JR : « reçue au plus tard le … » calculée sur 14 jours ouvrés, fêtes juives comprises [I].
2. **La vraie pierre, à l'échelle** : vidéo réelle, vues cotées, taille réelle sur une main avec 3 teintes de peau ; le filtre « Real View » isole les pierres filmées [Vc][B3][B6]. JR filme déjà la pierre : y ajouter la main à l'échelle et les cotes [I].
3. **« Compare Similar Diamonds » avec l'écart de prix** (« Better Color » +480 $, « Larger Diamond » +130 $) [Vc][B6] : l'arbitrage des 4 C sans tableau. Le moteur de prix de JR peut en faire autant pour le carat et le métal [I].
4. **Prix séparés monture et pierre**, « where every dollar goes » [Vc][B2], sans détail de la monture. JR peut aller plus loin : métal au gramme, façon, sertissage [I].
5. **Essayage sur photo de la main**, sans réalité augmentée lourde, avec envoi au conseiller [Vc][B14]. Faisable avec le GLB de JR [I].
6. **Règles de gravure chiffrées et publiées** (40 $, 15 ou 20 caractères, 2 polices, corps de 1,4 mm au moins) [Vc][B19]. JR (20 à 25 polices, hébreu) peut publier des règles aussi nettes [I].
7. **Sur-mesure cadré** : devis détaillé gratuit, modèle numérique validé avant fabrication, 4–6 semaines, dès 2 000 $ [Vc][B13]. Même schéma pour la transformation de bijoux de famille de JR [I].
8. **Un humain joignable partout** : téléphone, chat et SMS 24/7, Zoom 50 min, 44 salles [Vc][B21]. Pour JR : WhatsApp, rendez-vous vidéo avec l'atelier, puis visite à Ramat Gan [I].
9. **Prix par virement affiché à côté du prix** (−1,5 %) [Vc][B6]. Modèle pour un prix « virement ou Bit » si le prestataire de `docs/PAIEMENT.md` le permet [S].
10. **Concurrent présent en Israël**, livraison gratuite et assurée [Vc][B17]. Ses limites : anglais seul, droits et TVA à l'import pour le client, pas d'échange de pierre hors États-Unis et Canada [Vc][B16][B17]. JR doit montrer ses avantages locaux : ₪ TTC, hébreu, atelier proche, pas de douane [I].

## Défauts observés

1. **Blocage des visiteurs** : captcha Turnstile dès la page de départ, robots.txt compris [V][B1][B2]. Les acheteurs derrière un VPN ou un réseau d'entreprise pourraient le subir [S].
2. **Le visuel ne montre pas la bague commandée** : photos « Shown with 2 carat diamond » quel que soit le choix [Vc][B9]. « View in 3D » n'apparaît que sur certaines fiches (absent de l'extrait de la 2mm Petite Elodie) [Vc][B9] ; rien n'indique si c'est un rendu [S]. C'est la faille que comble la promesse de JR (modèle issu du fichier de fabrication) [I].
3. **Gravure, trois règles contradictoires** [Vc] : la fiche dit « Engraved items are not eligible for return, resize, or exchange » [B11] ; la page Retours, retour possible contre 40 $ et retaille payante sous 1 an [B15] ; le guide, retaille gratuite sous 60 jours avec regravure offerte [B19].
4. **Délai de retour qui court avant la réception** (« available for shipment », ou « ship date ») [Vc][B15][B17].
5. **Urgence permanente** : « Going Fast 61% chance of selling by tomorrow », « In Another User's Bag », « Only One Available », et « ENDS SOON! » sur une suite de codes différents [Vc][B6][B7] [I].
6. **Garantie « à vie » restreinte** : perte de pierre et griffes usées exclues ; remplacement limité à 60 jours ou aux pièces de moins de 1 000 $ [Vc][B16].
7. **Incohérences** : or rose 18 k dans le filtre mais absent des fiches lues [B8][B9] ; virement remisé de 1,5 % mais facturé 35 $ [B18] [Vc].
8. **Restrictions** : monture non vendue seule [Vc][B9] ; échange de pierre réservé aux États-Unis et au Canada [Vc][B16].
9. **Avis** : 18 % d'une étoile sur Trustpilot ; plaintes de solidité et d'après-vente [T][B26].

## Temps d'apparition du visuel principal

Non mesurable : seule la page de blocage s'est affichée. Sur ordinateur, réponse 403 à 1,3 s et case Turnstile chargée à 4,0 s après le début de la navigation [V]. Affichage iPhone non mesuré.

## Limites de l'audit

- **Statut bloqué** : une visite, captcha interactif. Ni case cochée, ni second essai, ni affichage iPhone : changer d'identité de navigateur après un blocage est exclu par les règles.
- **Aucun contrôle actionné** : effets sur l'image, nature de « View in 3D », contenu de l'étape 3 et du panier (frais, taxes, moyens de paiement affichés) restent inconnus.
- **robots.txt illisible** (403 au curl et à Parallel) : chemins interdits inconnus. Aucune automatisation n'est allée au-delà de la page de départ.
- **Sources indirectes** : extraits Parallel non datés. Les dates de livraison lues vont de février à décembre selon l'extrait : elles prouvent le mécanisme, pas le délai du jour. Prix et promotions à revérifier.
- **Lectures refusées ou impossibles** : copies en cache de brilliantearth.com (système d'autorisation de la session) ; Firecrawl sans crédits (« lisible par Firecrawl » dans la fiche d'exploration : non revérifié).
- Avis tiers (Trustpilot, BBB) lus dans des extraits, sans visite. Captures : 1 (page de blocage), `scratchpad/audit/us/brilliant-earth/visit1_desktop.jpg`.

## Sources (lues le 15/11/2026, sauf mention)

- [B1] https://www.brilliantearth.com/robots.txt (curl : 403, `cf-mitigated: challenge` ; Parallel : 403)
- [B2] https://www.brilliantearth.com/engagement-rings/start-with-a-diamond/ (navigateur : 307 puis 403, Turnstile ; texte : extrait)
- [B3] https://www.brilliantearth.com/design-your-own-engagement-ring (extrait : filtres et valeurs)
- [B4] https://www.brilliantearth.com/engagement-rings/start-with-a-diamond/lab (extrait)
- [B5] https://www.brilliantearth.com/lab-diamonds-search · https://www.brilliantearth.com/lab-diamonds · https://www.brilliantearth.com/lab-grown-diamonds (extraits)
- [B6] https://www.brilliantearth.com/lab-diamonds-search/view_detail/47104553 · …/58705841 · …/60039916 · …/62148571 (extraits)
- [B7] https://www.brilliantearth.com/loose-diamonds/view_detail/80188195 · …/56549854 · …/41426946 · https://www.brilliantearth.com/en-ca/loose-diamonds/view_detail/89904789 (extraits)
- [B8] https://www.brilliantearth.com/engagement-rings/shop-all/ (et `?page=3`, `?page=4`, `?page=9`) · https://www.brilliantearth.com/engagement-rings/platinum/?page=7 · https://www.brilliantearth.com/engagement-rings/4-prong (extraits)
- [B9] Fiches montures (extraits) : https://www.brilliantearth.com/Petite-Twisted-Vine-Diamond-Ring-(1/8-ct.-tw.)-White-Gold-BE1D54-3821855 · `…-Gold-BE1D54-3821856` · https://www.brilliantearth.com/Twisted-Vine-Solitaire-Ring-White-Gold-BE1M56D-1153494 · `…-14K-White-Gold-BE1M56D-76788679`
  · https://www.brilliantearth.com/2mm-Petite-Elodie-Perfect-Fit-Solitaire-Ring-White-Gold-BE1284-43097728 (et `/en-au/…`) · https://www.brilliantearth.com/Petite-Luxe-Twisted-Vine-Diamond-Ring-(1/4-ct.-tw.)-White-Gold-BE1M55D-1153190 · `…-14K-White-Gold-BE1M55D-76820203` · https://www.brilliantearth.com/Petite-Twisted-Vine-Three-Stone-Diamond-Ring-(2/5-ct.-tw.)-White-Gold-BE1M30D-3015415
- [B10] https://www.brilliantearth.com/Petite-Elodie-1.5mm-Solitaire-with-1ct-Oval-Certified-Natural-Diamond-White-Gold-BE18959PSOV1CTNAT/ (extrait)
- [B11] https://www.brilliantearth.com/2mm-Comfort-Fit-Wedding-Ring-14K-Gold-BE201 · https://www.brilliantearth.com/Avalon-Eternity-Diamond-6mm-Wedding-Ring-(2/5-ct.-tw.)-Gold-BE2M2621 (extraits)
- [B12] https://www.brilliantearth.com/pages/custom-engagement-rings (extrait)
- [B13] https://www.brilliantearth.com/pages/custom-design-studio · https://www.brilliantearth.com/engagement-rings/custom (extraits)
- [B14] https://www.brilliantearth.com/pages/virtual-try-on (extrait)
- [B15] https://www.brilliantearth.com/30-Day-Returns (et `/en-au/30-Day-Returns`, extraits)
- [B16] https://www.brilliantearth.com/customer-service/warranty (extrait)
- [B17] https://www.brilliantearth.com/shipping · https://www.brilliantearth.com/international-shipping-policies (extraits)
- [B18] https://www.brilliantearth.com/flexible-payment-options · https://www.brilliantearth.com/frequently-asked-questions (extraits)
- [B19] https://www.brilliantearth.com/wedding-rings/buying-guide/engraving (extrait ; page datée du 26/10/2026)
- [B20] https://www.brilliantearth.com/guides/ring-size-chart · https://www.brilliantearth.com/jewelry/buying-guide/ring-size/free-ring-sizer (extraits ; 05/08/2026)
- [B21] https://www.brilliantearth.com/contact/ · https://www.brilliantearth.com/stores · https://www.brilliantearth.com/stores/virtual-appointment/ · https://www.brilliantearth.com/track-order · https://www.brilliantearth.com/customer-care (extraits)
- [B22] https://www.brilliantearth.com/promo-codes-and-offers/ · https://www.brilliantearth.com/en-gb/promo-codes-and-offers/Shop%20Now (fenêtre de rendez-vous ; extraits)
- [B23] https://www.brilliantearth.com/guides/diamond-cut/ · https://www.brilliantearth.com/guides/4-cs-of-diamonds (extraits)
- [B24] https://www.sec.gov/Archives/edgar/data/1866757/000162828026018794/brlt-20251231.htm (10-K de l'exercice 2025, déposé le 17/03/2026)
- [B25] https://investors.brilliantearth.com/news-releases/news-release-details/brilliant-earth-reports-third-quarter-results (05/11/2026) · https://investors.brilliantearth.com/static-files/d666881e-c76f-42ec-8899-22fe3871be0c (présentation)
- [B26] https://www.trustpilot.com/review/brilliantearth.com (et `?page=4`)
- [B27] https://www.bbb.org/us/ca/san-francisco/profile/diamond/brilliant-earth-llc-1116-154721/customer-reviews
