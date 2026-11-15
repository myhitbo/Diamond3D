# Audit : Rare Carat (États-Unis, vendeurs nationaux)

- **Site** : Rare Carat (siège à Southfield, Michigan ; ateliers à New York et dans le New Jersey [R14]), https://www.rarecarat.com. Page de départ : la liste des montures [R1].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données.
- **Statut : complet.** Les 3 étapes (monture, pierre, panier) ont été parcourues sur ordinateur et en affichage iPhone, sans blocage. Arrêt avant « Continue to checkout ». Quelques contrôles restent non concluants (tableau).
- **Deux passages.** [P1] : premier passage (14 h 51 à 15 h 16 UTC, même tâche, interrompu) ; sans mention : second passage (20 h 15 à 20 h 50 UTC), avec blocage de toute navigation vers un chemin interdit par `robots.txt` [R18].
- Complète la fiche Rare Carat de `docs/concurrence/2026-11-15_etats-unis.md` ([V56] à [V59]) : ses affirmations sont confirmées (voir « Prix, délais, retours, garanties »), sauf « plus de 2 millions de pierres », non recompté.
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé. Dans les tableaux, tout est [V] sauf mention. Prix en dollars US affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 0. Liste « Build Your Own Engagement Ring » [R1] | 730 montures ; 11 styles, forme (10), métal (4), prix, largeur, pierres d'accompagnement, date d'expédition, « Quick ship », recherche, tri (5) ; pastilles de métal par carte. |
| 1. Fiche monture « 1 Choose your Setting » [R2] | Forme de pierre affichée (9), métal (6), largeur (4), griffes (2), offre du moment, alliance assortie, « Choose this setting ». |
| 2. Recherche de pierres « 2 Choose your Diamond » [R3] | Limitée aux pierres compatibles avec la monture ; forme (10), origine (Lab / Natural), carats, prix, couleur, pureté, taille, certificat, date, scores Rare Carat, 13 filtres avancés, tri (9), 15 pastilles. |
| 2 bis. Fiche pierre [R4] | Vidéo 360° de la pierre, vue 3D (bêta), essai sur la main, certificat, schéma coté, grille de qualité « 18/18 », « Choose this diamond ». |
| 3. « Complete Ring » = panier [R5] | Pas de page de bague complète : on arrive dans le panier. Taille de doigt, gravure gratuite, plan de protection, expertise, cadeaux, récapitulatif, financement, « Continue to checkout ». |

## Contrôles vérifiés

Contrôles relevés : liste 130 (ordinateur, `controls.cjs`) et 126 (iPhone) ; fiche monture 112 et 105 ; recherche de pierres 200 ; fiche pierre 171 et 87 ; panier 54 et 48. Environ 130 contrôles distincts actionnés.
Référence : Linda Comfort-Fit (1,5 mm), or blanc 14 k = 600 $ ; pierre synthétique ronde 1,25 ct D VVS1 = 805 $. « Non concluant » = clic envoyé par l'automate, effet non observé.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **Toutes les pages** | | | | |
| Téléphone (855) 720-4858, « Contact us », « Sign in » | liens | `tel:` ; « Sign in » → `/login` | — | Non testés (pas d'appel, pas de compte) |
| Menu : Engagement rings, Wedding bands, Diamonds, Earrings, Necklaces, Bracelets, Gemstones, Gifts | 8 liens | Adresses relevées ; les deux premières entrées du parcours ouvertes | — | OK ; les 6 autres non suivis (hors sujet) |
| Icônes Notification, Search, Wishlist, Shopping Bag | 4 boutons | Pastille « 1 » sur le sac après « Choose this setting », « 2 » ou « 3 » au panier | — | Pastille OK ; panneaux non ouverts |
| Fenêtre plein écran « Save up to 45%* sitewide » (e-mail, « Redeem offer ») | fenêtre | Apparue seule, une vingtaine de secondes après l'arrivée, à certains passages seulement ; se ferme par la croix | — | OK ; e-mail non saisi ; gêne (voir Défauts) |
| « Live Chat », « Chat now », « Chat with us », questions suggérées (8 à 9 par fiche) | boutons | Ouvrent la messagerie Intercom (script `widget.intercom.io` chargé) [I] | — | Non ouverts (règle) |
| Pied de page : services, garanties, FAQ, avis, « Get my $100 coupon code » (e-mail), réseaux sociaux | liens, champ | Pages de service lues [R6] à [R17] | — | OK ; e-mail non saisi ; réseaux non suivis |
| **Liste des montures [R1]** | | | | |
| Tuiles de style (11) + Yellow Gold, White Gold | liens | Vers `/setting-search/solitaire-rings`, etc. | — | Adresses relevées ; clic non concluant |
| Sort : Best sellers, Newest, Price low to high, high to low, Fastest shipping | liste | « Price: low to high » : première carte à 475 $ | — | OK (1 option sur 5) |
| Champ « Search for Nature or 6 Prong » | champ | « bezel » : 152 montures ; vidé : retour à la liste | — | OK |
| « Filter » | tiroir | Tous les filtres en un panneau, « Clear all », « Show 730 settings » | — | Ouverture OK [P1] |
| Shape (10) ; Price (2 curseurs, 2 champs, 0 à 20 000 $) ; Band width (4) ; Side stones (4) | filtres | Les panneaux s'ouvrent, options relevées | — | Ouverture OK [P1] ; choix non concluant ou non actionné |
| Metal : White Gold, Yellow Gold, Rose Gold, Platinum | filtre | Platinum : 698 montures, `?metals=platinum`, cartes en platine | Prix des cartes en platine | OK |
| Ships by : 3 dates, Any date, « Pick a date » | filtre | « Pick a date » : liste de dates (« Show 15 more ») | — | Ouverture OK |
| Quick ship | case | 730 → 209 montures ; décochée : 887 affichées | — | OK ; compteur incohérent [P1] |
| Carte de monture (20 par lot) ; « Show more results » | liens, bouton | La carte ouvre la fiche ; 20 cartes de plus au défilement | Prix et « Comp. value » | Carte OK ; bouton non concluant |
| Pastilles de métal d'une carte (4) | boutons | Photo et lien de la carte passent à l'or jaune, infobulle « 14K Yellow Gold » | Inchangé (14 k) | OK à la souris ; échec des clics programmés [P1] |
| FAQ de bas de page (6 questions) | accordéon | Première réponse ouverte (retaille gratuite, 1 an) | — | OK (1 sur 6) |
| iPhone : « Filter & sort », Quick ship, Promotions, My Account, Cart, Menu | boutons | Relevés | — | Non actionnés |
| **Fiche monture [R2]** | | | | |
| Galerie : 360° (canvas), 4 photos, vidéo portée, planche des largeurs ; flèches | 8 médias | Le 360° tourne seul et suit le glisser ; les flèches font défiler les médias [P1] | — | OK ; pas de zoom ni d'AR relevés |
| Vignette « Recent orders » | bouton | Aucune fenêtre détectée | — | Non concluant |
| Cœur « add to wishlist » | bouton | Devient rouge sans compte | — | OK |
| « 5.0 based on 109 reviews » | lien | Défile jusqu'aux avis (tri, 8 pages, photos de clients, « Share ») | — | OK ; « Share » non cliqué |
| (i) près de « Comp. value » | infobulle | Fenêtre « How much am I saving with Rare Carat? » (méthode de la valeur comparée) | — | OK |
| « Financing options » | lien | Fenêtre : Affirm, « Buy now, pay over time », 3e offre mensuelle, Katapult, « Talk to an expert » | Mensualité « From $53/mo or 0% APR » | OK ; « Learn more », « See if you qualify » non cliqués (tiers) |
| « Apply Black Friday Offer » | case | Sur la fiche monture : clic non abouti (3 essais) ; sur la fiche pierre et le panier : cadeau ajouté | Inchangé | Partiel |
| « View with diamond shape » : Round, Oval, Emerald, Pear, Princess, Radiant, Cushion, Heart, Asscher | 9 boutons | Le 360° et les photos montrent la forme ; adresse `?shape=…` | Inchangé | OK (9 sur 9) [P1] |
| Metal : 14K White, Yellow, Rose ; PT ; « + » puis 18K White, 18K Yellow | 6 pastilles | Rendu recoloré ; l'identifiant de l'adresse change | 14 k : 600 $ ; 18 k : 700 $ ; platine : 930 $ | OK (6 sur 6) [P1] |
| « More options » → Width : 1.50, 2, 2.5, 3 mm | 4 boutons | Chaque largeur est une autre fiche (autre nom, autre identifiant) | 600 $ ; 895 $ ; 910 $ ; 1 040 $ | OK |
| « Width guide » | lien | Affiche la planche comparative des 4 largeurs dans la galerie | — | OK |
| Style : 4-Prong, 6-Prong | 2 boutons | « 6-Prong » ouvre la fiche « Boda Six-Prong Comfort-Fit » | 600 $ | OK |
| « Matching band available » ; « Add to bag » (lot bague + alliance) | lien, bouton | Défile jusqu'à « Recommended matching band » | Alliance 600 $ | Lien OK ; « Add to bag » non testé (ajoute un second produit) |
| « Choose this setting » | bouton | Ouvre la recherche de pierres, filtrée sur la monture | — | OK (ordinateur et iPhone) |
| « Need it sooner? » | lien | Aucun effet visible (fiche monture, fiche pierre, panier) | — | Sans effet (voir Défauts) |
| « Price protected until Dec 1st » | bouton | Texte : remboursement de la différence si le prix baisse | — | Texte lu ; clic non concluant [P1] |
| Product information ; 100% money back guarantee ; Free extended returns | 3 accordéons | Référence, style, tailles 3 à 10, formes compatibles ; textes de garantie | — | OK |
| « Why you'll love it » (4 boutons) ; lecteur vidéo | boutons | Changent le visuel éditorial (dont « Handcrafted in the USA ») | — | Relevés, effet [I] |
| « You may also like » (8 cartes) ; « Back to search » | liens | Relevés | — | Non suivis |
| iPhone : « Shape: Round », « Style options · Customize », barre fixe « Choose this setting » + chat | boutons | Barre fixe en bas d'écran | — | Bouton principal OK ; autres relevés |
| **Recherche de pierres [R3]** | | | | |
| Bandeau « Setting … View / Remove » ; « Remove Setting » | liens | Rappel de la monture et de son prix | 600 $ | Non cliqués |
| Shape : Round, Oval, Marquise, Emerald, Pear, Princess, Radiant, Cushion, Heart, Asscher | 10 boutons | Round 281 380 pierres ; Oval 153 453 ; Marquise 87 265 | — | OK (3 sur 10) |
| Diamond type : Lab / Natural ; « See the difference » | 2 radios, lien | 281 380 « lab-grown » ↔ 253 788 « conflict-free natural » ; fenêtre d'explication | 1re pierre : 801 $ (1,25 ct) ↔ 817 $ (0,5 ct) | OK |
| Carat (2 curseurs, 2 champs, 0,15 à 35) ; « See on hand » | filtre, lien | Min 1 : 273 515 ; max 1,5 : 102 992 ; lien vers `/viewer` [R16] | — | OK |
| Price (2 curseurs, 2 champs, 350 $ à 4 000 000 $) | filtre | Max 600 $ : 9 431 → 8 346 ; « Best overall » affiché à 610 $ | — | OK ; anomalie |
| Color (K à D) ; Clarity (SI2 à FL) | 2 curseurs doubles | Deux crans au clavier : 102 992 → 102 018 → 66 682 | — | OK |
| Cut (Good à Ideal) ; « RC Ideal » | curseur, bouton | « RC Ideal » ouvre les critères publiés de la taille maison | — | Curseur non atteint ; bouton OK |
| Certification : GIA, GCAL, IGI | 3 bascules | GCAL décoché : 66 682 → 65 727 | — | OK (1 sur 3) ; GIA, IGI non concluants |
| « Search by GIA/IGI number » ; « Search by brand » ; « Search earring pairs » | champ, listes | Liste de vendeurs relevée [P1] | — | Non remplis, non actionnés |
| « Ship as loose diamond by » | liste | 26 dates (16/11 au 22/12) ; date du 18/11 : 8 151 → 1 250 | — | OK |
| « Track this search » | interrupteur | Ouvre la création de compte (nom, e-mail, mot de passe, Google, Facebook) | — | OK ; non rempli |
| Quick ship (2 emplacements) ; « Image or video » | cases | « Image or video » : 65 727 → 74 088 | — | Quick ship non concluant ; l'autre OK |
| Rare Carat scores : Great, Good, Fair Price ; Meets all checks, Misses 1, 2, 3 | 7 filtres | Great Price : 8 346 → 8 343 ; Meets all checks : 8 151 | — | OK (2 sur 7) |
| Advanced settings : Fluorescence, Table, Depth, Polish, Symmetry, L/W Ratio, Length, Width, Height, Crown Angle, Pavilion Angle, Girdle Thickness, Price Per Carat | 13 filtres | Panneau ouvert, curseurs relevés [P1] | — | Non actionnés |
| Sort by : Best value, Price ×2, Carat ×2, Color ×2, Clarity ×2 | liste | « Clarity: Less Pure » appliqué | — | OK (1 sur 9) |
| Pastilles : <1ct à 5ct+ (9), Sweet Spot, Top Quality, Budget Friendly, Largest, Lowest price, Highest price | 15 boutons | <1ct : 281 457 → 12 941 ; Sweet Spot : 67 ; Top Quality : 9 431 (cumul) | — | OK (3) ; 12 hors champ, non concluants |
| Vue grille / vue liste | 2 boutons | Liste : photo, forme, carats, taille, couleur, pureté, prix, score, favori | — | OK |
| « Clear filters » | bouton | — | — | Non concluant |
| Carte de pierre ; « Top AI picks » (Best overall, Biggest size, Highest quality) ; cœur | liens | Ouvre la fiche ; pastille « 18/18 quality » | Prix et « Comp. value » | Carte OK ; cœur non trouvé par l'automate |
| « Compare » | bouton flottant | Panneau « 0 saved diamonds… Tap the heart… No account needed » | — | OK (vide) |
| iPhone : « Filter & Sort (5) », formes avec accroche (« Oval looks 8% bigger »), carrousels par carat | boutons | Première pierre ouverte | — | OK ; filtres non actionnés |
| **Fiche pierre [R4]** | | | | |
| « Play 360 diamond video » | bouton | Vidéo 360° sur canvas en 0,2 s ; tourne, suit le glisser | — | OK |
| « 3D » (« See it in a ring, in 3D », BETA) ; bouton « 3D view » | vignette, bouton | Scène WebGL, glisser et molette actifs ; « Sample solitaire setting » | — | OK ; rendu incomplet (voir Défauts) |
| View Size ; Certificate IGI ; Dimensions ; Guarantee ; flèches | vignettes | Main ; n° LG_835667632 et « View IGI report » [R20] ; schéma coté ; 6 garanties | — | OK ; rapport IGI non ouvert (site tiers) |
| IGI certified ; 18/18 quality ; RC Ideal Cut ; D Color ; VVS1 Clarity | 5 pastilles | Fenêtres : certificat, score, grilles « cible / valeur de la pierre » | — | OK (5 sur 5) |
| « Wholesaler direct: Bayside Gems » | bouton | Fenêtre « About this seller » : marque créée sur Rare Carat pour un grossiste | — | OK |
| Diamond details ; Cut, Color, Clarity, Diamond Size ; 19 infobulles « More about… » | accordéons | 18 caractéristiques ; grilles de contrôle | — | OK ; infobulles non ouvertes |
| « See your diamond on a ring » : 5 onglets de style, 10 bagues « Handcrafted for a customer in … », « View this ring » | carrousel | Vues 360° de bagues livrées, par État du client | — | Relevé ; non actionné |
| Essai sur la main : Model hand, Your hand, teint (curseur), carats (0,5 à 6), réinitialiser, « Close up » | 6 contrôles | L'image suit chaque réglage ; « Your hand » : consigne de photo, traitée sur l'appareil | — | OK ; caméra non activée |
| « See how it works » ; iPhone : « Watch the full journey » (5 étapes de fabrication) | vidéos | Lecteur vidéo ouvert sur ordinateur | — | OK ; version iPhone relevée |
| Cœur ; avis ; « View all » pierres similaires ; champ e-mail | divers | Relevés | — | Cœur non concluant ici ; e-mail non saisi |
| « Choose this diamond » | bouton | Mène au panier [R5] | 805 $ | OK (ordinateur et iPhone) |
| **Panier [R5]** | | | | |
| « Show the ring » / « Show the diamond » | 2 vignettes | Image composée de la bague ↔ photo de la pierre | — | OK |
| « Add free engraving » | fenêtre | 2 polices (Classic, Script), 20 caractères, symboles cœur et infini, aperçu « illustrative » | Gratuit | Ouverture OK ; non saisi |
| « Select Ring Size » : 3 à 10 par quarts, « Greater than 10 » ; (i) | liste, infobulle | Taille dans l'adresse ; rappel de la retaille gratuite, « average ring is a size 6 » | Inchangé ; date inchangée | OK |
| Change, Remove (monture, pierre) | 4 liens | « Change » (monture) : retour à la liste des montures | — | 1 sur 4 ; « Remove » non testés |
| « Protect your ring » : See all benefits, 3 years, Lifetime | fenêtre, 2 boutons | Plan « JM Care Plan » ; second clic : retiré | + 109 $ ; + 269 $ (449 $ barré) | OK |
| « Add insurance appraisal » | case | Total 1 405 $ → 1 425 $ | + 20 $ | OK |
| « Apply Black Friday Offer » ; cadeaux ; « Claim my free diamond necklace » | case, boutons | 2 → 3 articles : bracelet « $400.00 $0.00 » | Total inchangé | Case OK ; cadeaux non ouverts |
| Promo code BLACKFRIDAY (croix) | bouton | Code retiré, champ « Enter coupon code » | Total inchangé (1 405 $) | OK ; aucun code saisi |
| Shipping (i) ; « View options » (financement) | infobulle, fenêtre | « FedEx Overnight with 21+ Adult Signature » ; 4 offres | « Free » ; « from $85/mo » | OK |
| « + Add to bag » (alliance assortie) | bouton | — | 600 $ | Non testé |
| « Continue to checkout » ; « Google Pay » ; iPhone : « Go to checkout » | boutons | — | — | Non cliqués (au-delà du panier) |
| « Email for later » ; « Save for later » ; « Ask a question » | 3 liens | Champ e-mail ; les deux autres exigent un compte | — | OK ; rien saisi |

## Options disponibles

- **Styles (11)** : Solitaire, Hidden Halo, Vintage, Pavé, Nature, Three Stone, Halo, Cathedral, Unique, Bezel, Gemstone [V, R1].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Radiant, Pear, Marquise, Asscher, Heart ; la fiche auditée n'accepte pas la marquise (9 formes) [V, R1, R2].
- **Métaux** : or 14 k blanc, jaune, rose ; or 18 k blanc, jaune ; platine (fiche auditée) [V, R2]. L'outil `/viewer` affiche trois pastilles 18 k, donc sans doute aussi l'or rose [I, R16].
- **Monture** : largeur 1,5, 2, 2,5 ou 3 mm ; 4 ou 6 griffes ; filtres de liste : moins de 2, 2 à 3, 3 à 4, plus de 4 mm ; sans pierre d'accompagnement, moins de 0,5 ct, 0,5 à 1 ct, plus de 1 ct [V, R1, R2].
- **Taille de doigt** : 3 à 10 par quarts (29 valeurs) et « Greater than 10 ». **Gravure** : gratuite, 20 caractères, 2 polices, 2 symboles [V, R5].
- **Pierres** : origine Lab ou Natural ; 0,15 à 35 ct ; 350 $ à 4 000 000 $ ; couleur K à D ; pureté SI2 à FL ; taille Good, Very Good, Excellent, Ideal, RC Ideal [V, R3].
- **Certificats** : GIA, GCAL, IGI (synthétique) ; GIA, IGI (naturel) [V, R3]. Papier pour IGI et GCAL ; rapport numérique pour un synthétique GIA [V, R11].
- **Vues** : photos, vidéo portée, 360° de la monture, vidéo 360° de la pierre, 3D bêta, main modèle ou sa propre main (photo). Pas d'AR en direct [V, R2, R4].
- **Paiement** : Visa, Mastercard, Amex, PayPal, virement (remise), Affirm, Katapult, paiement réparti sur plusieurs moyens [V, R12] ; Google Pay au panier [V, R5]. Scripts Klarna et Afterpay chargés sur la fiche [V, R2].
- **Services payants** : plan de protection 3 ans (109 $) ou à vie (269 $) ; expertise pour assurance (20 $) [V, R5].

## Prix, délais, retours, garanties

- **Affichage du prix** : prix, « Comp. value » barrée et « Save $… », mensualité (« From $53/mo or 0% APR ») [V, R2]. Monture et pierre au prix séparé ; total au panier : 600 + 805 = 1 405 $ [V, R5]. Aucune décomposition (métal, façon, marge) [V].
- **« Comp. value »** : moyenne de produits comparables chez d'autres détaillants, revue au moins chaque trimestre ; le site écrit : « Our percent-off claims are not discounts from regular prices we charge » [V, R2].
- **Promotion** : « Black Friday Sale · Save up to 45%* » se mesure contre la « Comp. value » ; le code BLACKFRIDAY ne change pas le total, l'offre ajoute des cadeaux [V, R5]. Prix garanti jusqu'au 1/12 (différence remboursée) [V, R2].
- **Taxes** : ajoutées à la caisse selon le code postal ; remise pour virement ; remise militaire [V, R12]. Non vu à l'écran (au-delà du panier).
- **Délai** : fiche monture « Free insured shipping by Friday, Nov 20 if you order in the next 13 hours » ; bague complète « Ships insured by Fri, Nov 27 with FedEx overnight delivery », soit 12 jours [V, R2, R5]. FAQ : 2 à 3 semaines en général [V, R12].
- **Commande** : la pierre est confirmée en 24 à 48 h (72 h au plus), aucun débit avant [V, R9]. Livraison gratuite et assurée, États-Unis et Canada seulement, signature d'un adulte de 21 ans [V, R9].
- **Retours** : 30 jours à compter de l'expédition, gratuits, sans frais de remise en stock ; remboursement sous 7 jours ouvrés ; certificat perdu : 250 $ ; cadeaux à rendre [V, R8]. Fêtes : commandes du 1/11 au 15/12, retour jusqu'au 15/1/2027 [V, R7].
- **Exception du sur-mesure** : aucune dans les pages lues (« All products… can be returned ») ; seule exclusion : un article envoyé en retaille [V, R6]. Une bague gravée serait donc reprise [I].
- **Retaille** : une fois, gratuite, la première année ; alliances serties et bracelets : 30 jours [V, R10].
- **Garantie** : à vie contre les défauts de fabrication ; hors usure, perte de pierre, vol ; annulée par une réparation chez un tiers [V, R6].
- **Échange de pierre** : crédit de 100 % ; nouvelle pierre au moins 3 fois plus chère (naturel GIA) ou 2 fois (synthétique) ; couleurs D à K ; États-Unis [V, R6].
- **Temps d'apparition du visuel principal** (mesures indicatives, une à deux par page) :

| Page | Ordinateur | iPhone émulé |
|---|---|---|
| Liste des montures [R1] | Plus grand élément visible (photo de bague) : 1,5 s ; DOM prêt : 4,7 s [P1] | 1,2 s ; DOM prêt : 3,0 s [P1] |
| Fiche monture [R2] | Première image du 360° : 1,6 à 2,8 s | 1,5 s |
| Recherche de pierres, après « Choose this setting » | Première photo : 2,2 à 4,9 s après le clic | 3,0 s |
| Fiche pierre [R4] | Photo : 0,7 s après le clic ; vidéo 360° : 0,2 s ; vue 3D stable : 1,3 s | 4,5 s (clic ou accès direct) |
| Panier [R5] | Image de la bague : 7,3 s après « Choose this diamond » | Non mesuré |

## Confiance et service

- **Avis** : 5,0 sur 5, 8 670 avis vérifiés, 98 % à 5 étoiles ; fiche auditée : 109 avis avec photos de clients [V, R13, R2]. « #1 rated online jeweler on Trustpilot » : affirmation du site, non vérifiée chez Trustpilot.
- **Modèle** : ancien comparateur devenu détaillant en 2021 ; « Rare Carat is always the merchant of record » ; pierres de grossistes sous des marques créées sur le site [V, R14, R4].
- **Contrôle** : inscription laser lue entre 60× et 110× et comparée au certificat, test UV, le tout filmé ; emballage filmé [V, R11, R15].
- **Preuves de fabrication** : bagues livrées en 360° sur la fiche pierre, 5 étapes « Making your ring » et vidéo, « Handcrafted in the USA », vidéo du colis [V, R4, R15].
- **Suivi de commande** : page « My Orders » (compte) et e-mail de suivi la veille de l'expédition [V, R12, R9]. Aucun suivi de fabrication par étapes avec photos n'est annoncé [I].
- **Conseil** : gemmologues diplômés GIA par chat (Intercom), téléphone, e-mail ; « Rare Carat Report » gratuit pour un diamant naturel GIA [V, R7, R17]. Ni WhatsApp, ni salle d'exposition, ni essai à domicile [V, R12].
- **Libellés** : « Lab », « Lab Diamond », « lab-grown diamonds », « Lab-created » ; naturel : « conflict-free natural diamonds » [V, R3, R16].
- **Langue et devise** : anglais seul (`lang="en-US"`, pas de `hreflang`) ; dollars US seuls, y compris pour le Canada [V, R9].

## Points forts à retenir pour JR Diamond

1. **Grille de qualité lisible.** Chaque pierre porte un score « 18/18 » et, par critère, la cible et la valeur mesurée ; les critères de la taille maison sont publiés [V, R4, R3]. Idée : la même grille à côté de la pierre filmée.
2. **Bagues réellement livrées, en 360°.** « See your diamond on a ring… Handcrafted for a customer in Minnesota » [V, R4]. C'est la promesse « ce que vous voyez existe », appliquée aux bagues finies.
3. **Essai sur la main sans application.** Main modèle, teint réglable, curseur de carats, photo de sa main traitée sur l'appareil (« We never see, keep or use your photo ») [V, R4, R16].
4. **Date d'expédition et compte à rebours** sur chaque fiche et au panier ; filtre « Ships by » [V, R2, R5, R1].
5. **Planche comparative des largeurs** (1,5 à 3 mm) dans la galerie, ouverte par « Width guide » [V, R2].
6. **Étapes de fabrication sur la fiche** : fonte, sertissage, mise à taille, polissage, expédition, avec vidéo [V, R4].
7. **Aucun débit avant confirmation de la pierre** (24 à 48 h) [V, R9] ; contrôle filmé de l'inscription laser [V, R11].
8. **Favoris et comparateur sans compte** (« No account needed ») [V, R3].
9. **Panier complet** : gravure gratuite avec aperçu, taille choisie en dernier avec rappel de la retaille, expertise à 20 $, mensualité [V, R5].
10. **iPhone** : barre fixe avec le bouton principal et le chat ; formes avec une accroche (« Oval looks 8% bigger ») [V, R2, R3].

## Défauts observés

- **Vue 3D en bêta** : monture d'exemple, pas la monture choisie ; dans notre test, pierre flottante au-dessus d'un demi-anneau [V, R4]. À confirmer sur un appareil réel.
- **Fenêtre d'inscription plein écran** une vingtaine de secondes après l'arrivée (à certains passages) ; elle a intercepté des clics en cours de parcours [V, R4].
- **Promotion peu lisible** : le « Subtotal » du panier (2 096 $) additionne les « Comp. values », le prix réel est 1 405 $ ; le code promo ne change rien [V, R5]. Bracelet offert « On orders $2000+ », pourtant ajouté à un panier de 1 405 $ (2 096 $ en « Comp. value ») [V, R5].
- **« Need it sooner? »** sans effet visible sur trois pages [V, R2, R4, R5]. « Clear filters », « Show more results », tuiles de style : clics non concluants (automate).
- **Compteurs** : 730 montures, puis 887 après avoir coché et décoché « Quick ship » [P1] ; plafond de 600 $ et « Best overall » à 610 $ [V, R3].
- **Largeur et griffes changent de fiche** (nom, identifiant, galerie) ; pas de marquise sur la monture auditée [V, R2].
- **Pas de page « bague complète »** : « Choose this diamond » envoie au panier, où l'image composée n'est pas la pierre choisie [I]. La monture ne se vend pas seule [V, R12].
- **Retour compté dès l'expédition** ; « Save for later » et « Ask a question » exigent un compte [V, R8, R5].
- **Chiffres qui varient** : 58 gemmologues [R7] ou « over 100 » [R15] ; 8 670 avis [R13] ou 2 962 [R15]. Erreur JavaScript « Key Name: items » sur les fiches et la recherche [V].
- **Portée** : États-Unis et Canada, anglais, dollars [V, R9].

## Limites de l'audit

- Navigateur sans écran, adresse de centre de données ; iPhone émulé. Temps mesurés une ou deux fois : ordres de grandeur.
- Une monture (Linda Comfort-Fit) et une pierre synthétique auditées en détail ; fiche d'un diamant naturel non ouverte ; alliances et pierres de couleur hors parcours.
- Caisse non ouverte : moyens de paiement, taxes et remise pour virement tirés de la FAQ. Chat, appel, caméra et formulaires non utilisés.
- Contrôles non concluants ou non actionnés : indiqués dans le tableau (pastilles hors champ, filtres avancés, GIA et IGI, « Remove », cadeaux).
- `robots.txt` [R18] interdit notamment `/product`, `/ring-detail`, `/diamond-details`, `/shop…`, `/my-stuff`, `/orders/`, `/appointment/`, `/terms-of-service` : aucun n'a été demandé. `/cart` est autorisé.
- Un clic sur « Financing options » a suivi par erreur le lien de pied de page vers `/learn/financing-options` (page autorisée, déjà lue par l'explorateur).
- Firecrawl indisponible (crédits épuisés) : toutes les pages ont été lues dans le navigateur. Captures et journaux : dossier de travail `audit/us/rare-carat/` (19 captures), hors dépôt.

## Sources (lues le 15/11/2026)

- [R1] https://www.rarecarat.com/setting-search · [R2] https://www.rarecarat.com/setting/59-Linda-Comfort-Fit-Engagement-Ring-(1.5mm)-Solitaire/1845066
- [R3] https://www.rarecarat.com/diamond-search?shape=round · [R4] https://www.rarecarat.com/diamond/162533147/1.25ct-d-vvs1-rare-carat-ideal-cut-round-lab-grown-diamond
- [R5] https://www.rarecarat.com/cart/59-Linda-Comfort-Fit-Engagement-Ring-(1.5mm)-Solitaire/1845066/162533147?discount=BLACKFRIDAY
- [R6] https://www.rarecarat.com/policies · [R7] https://www.rarecarat.com/rare-carat-guarantee · [R8] https://www.rarecarat.com/services/30-day-returns
- [R9] https://www.rarecarat.com/services/shipping · https://www.rarecarat.com/services/free-insured-shipping · [R10] https://www.rarecarat.com/services/resizing-policy
- [R11] https://www.rarecarat.com/services/authenticity-inspection · [R12] https://www.rarecarat.com/faq · [R13] https://www.rarecarat.com/reviews · [R14] https://www.rarecarat.com/about
- [R15] https://www.rarecarat.com/blog/company-news/inside-rare-carat-s-uncompromising-commitment-to-quality · [R16] https://www.rarecarat.com/viewer
- [R17] https://www.rarecarat.com/diamond-report · [R18] https://www.rarecarat.com/robots.txt · [R19] https://www.rarecarat.com/services/money-back-guarantee
- [R20] https://www.igi.org/reports/verify-your-report?r=LG_835667632 (adresse du lien « View IGI report », non ouverte)
