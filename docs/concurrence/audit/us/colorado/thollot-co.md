# Audit : Thollot & Co., constructeur « Build Your Own Ring » (Thornton, Colorado)

| | |
|---|---|
| Site | Thollot & Co., 3790 E 104th Ave, Thornton (CO) : https://thollotco.com |
| Page de départ | https://thollotco.com/apps/ring-creator/rb-get-started |
| Date | 15/11/2026 (en-tête demandé) ; les relevés ont été refaits le 24/11/2026, ce qui explique la date de livraison affichée (voir « délais ») |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour le parcours bague (monture et pierre synthétique, jusqu'au panier) ; non actionnés : pierres naturelles et de couleur, paiement |
| robots.txt | Shopify, `Allow: /`, aucun chemin interdit pour `*` (V : https://thollotco.com/robots.txt, vérifié par l'outil de contrôle avant chaque adresse). Le fichier contient aussi des commentaires adressés aux agents (installer un outil tiers, s'identifier) : sans objet pour cette étude, non suivis |

Marques : **V** vérifié (page lue ou contrôle actionné) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page citée dans la section.

## Parcours

Outil loué : RingCreator (images et données servies par `app.ringcreator.io`, V : requêtes réseau). Stepper en 3 étapes, dans les deux ordres (V : https://thollotco.com/apps/ring-creator/rb-get-started, boutons « Begin With Setting » et « Begin With Stone »).

| Étape | Options |
|---|---|
| 0. Départ | Begin With Setting / Begin With Stone ; liens « Natural / Lab Grown / Colored Gemstone Search » (V) |
| 1. Monture (`rb-setting-list`) | 7 styles (Three Stone, Solitaire, Side Stone, Halo, Vintage, Accented, Bezel Set), métal (10), prix, forme supportée (6), tri par prix ; 1 903 montures en 14 k or jaune, pagination 20 par page (96 pages avec les filtres de départ) |
| 1 bis. Fiche monture (`rb-setting-details`) | métal (10), forme (selon la monture), poids des pierres latérales, qualité des pierres latérales, taille de doigt US 3 à 13 par demi-taille, « Supported Carat From/To », guide des tailles, question, délai |
| 2. Pierre (`rb-stone-list`) | onglets Natural / Lab-Grown / Colored Gemstones, 8 formes, 14 filtres, 10 tris ; 21 786 diamants synthétiques (V) |
| 2 bis. Fiche pierre (`rb-stone-details`) | photo, aperçu « video preview », certificat, données du rapport, délai |
| 3. Bague terminée (`rb-ring-review`) | récapitulatif monture + pierre, taille de doigt, sous-total, « Add to Cart », « Drop a Hint », « Start Over » |
| Panier (`/cart`) | deux lignes (pierre, monture), quantité, note de commande, Affirm, « CHECK OUT » |

## Contrôles vérifiés

Prix : pour une monture W6610-N (14 k or jaune, rond, 2,0 ct de pierres latérales, SI2 G-H), base 2 369 $ (V : https://thollotco.com/apps/ring-creator/rb-setting-details?in_journey=true&ring_stock_num=W6610RN200SM-4YWB&ring_reference_id=128320).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Begin With Setting / Begin With Stone | liens | ouvrent la liste des montures ou des pierres | — | OK |
| Styles (7 boutons) | filtre | Three Stone 9, Solitaire **6**, Side Stone 7, Halo 683, Vintage 37, Accented 993, Bezel 233 résultats ; recliquer retire le filtre (1 903) | — | OK |
| Métal de la liste (menu « Metal Type ») | filtre | 10 valeurs : 10 k, 14 k, 18 k en jaune, blanc, rose, et Platinum ; relevé antérieur, ancien gabarit : 14 k rose 1 890, 14 k blanc 1 900, 18 k rose 1 895, 18 k blanc 1 899 résultats | change | OK ; les 10 valeurs n'ont pas toutes été rejouées dans le gabarit actuel |
| Prix (curseurs min/max) | filtre | relevé antérieur : plafond 1 500 $ donne 79 montures | — | OK (ancien gabarit) |
| Forme supportée (6 : round, oval, pear, emerald, princess, square) | filtre | liste le panneau « All Filters » ; effet de chaque forme non rejoué | — | panneau OK, effet non testé |
| Tri « Price: Lowest / Highest » | menu | options affichées ; ordre non relevé dans le gabarit actuel (le relevé antérieur n'avait pas pu l'ouvrir) | — | non confirmé |
| Reset All / All Filters | boutons | réinitialise / ouvre le tiroir de filtres | — | OK |
| Vignette de monture (survol) | image | l'image passe à une image servie par `meteor.stullercloud.com` (relevé antérieur ; indice que les montures viennent du catalogue Stuller, I) | — | OK |
| Pagination 1…96 | liens | page 2 : résultats 21 à 40 | — | OK |
| Métal de la fiche (10 boutons) | option | 10 k : 1 824 $ (jaune, blanc, rose, même prix) ; 14 k : 2 369 $ (les 3 couleurs) ; 18 k rose 3 043 $, blanc 3 038 $, jaune 3 091 $ ; Platinum 2 819 $ ; l'image change (V : variantes `-1` blanc, `-2` jaune, `-3` rose), l'adresse aussi (`…SM-4RWB`, `…-PTB`) | change | OK |
| Forme (Emerald / Oval / Round) | option | Emerald 2 438 $, Oval 2 287 $, Round 2 369 $ ; l'image change (code `EN`, `ON`, `RN`) | change | OK |
| Poids des pierres latérales (1,0 à 3,0 ct) | option | 1,0 : 2 210 $ ; 1,5 : 2 287 $ ; 2,0 : 2 369 $ ; 2,5 : 2 438 $ ; 3,0 : 2 565 $ ; l'image change | change | OK |
| Qualité des pierres latérales (Lab, SI1 G-H, SI2 G-H, VS G-H) | option | à 3,0 ct : Lab 2 166 $ ; SI1 2 588 $ ; SI2 2 565 $ ; VS 2 688 $ ; l'image change | change | OK ; « Lab » désigne des pierres latérales synthétiques (I) |
| Taille de doigt (US 3, 7, 13 testées) | option | sélectionne la taille ; 21 valeurs de 3 à 13 | aucun | OK |
| « See Size Conversion Chart » | bouton | tableau US, UK, France, Allemagne, Inde/Chine/Japon/Turquie/**Israël**, Italie/Espagne | — | OK |
| « Delivery information » | info-bulle | « Production time can range from 7 days to 3 weeks » | — | OK |
| « Ask a Question » | bouton | formulaire (nom, e-mail, mobile, message) ; non rempli | — | OK |
| « Supported Carat From / To » + « Select Setting » | liste + lien | **sans choix dans ces deux listes, « Select Setting » ne fait rien et n'affiche aucun message** (même avec la taille 7 choisie) ; après avoir choisi 0,25 dans chaque liste, la page `rb-ring-review` s'ouvre | — | **défaut** (voir plus bas) |
| Filtres de pierres (7 puces + « All Filters ») | filtre | chaque puce ouvre le tiroir « All Filters » : Shape, Carat, White Color (D à J), Fancy Color (14 couleurs), Clarity (FL à I1), Cut (Ideal, Excellent, Very Good, Good), Price, Polish, Symmetry, Fluorescence, Lab, Depth, Table, Hearts & Arrows ; boutons Reset All / Apply Filters | — | tiroir OK ; effet de « Apply Filters » non rejoué |
| Formes de pierre (8 boutons : Round, Oval, Pear, Emerald, Princess, Radiant, Marquise, Cush Brill) | filtre | présents | — | effet non rejoué |
| « Sort By » (pierres) | menu | Carat, Color, Clarity, Cut, Price, chacun « Lowest / Highest » ; ordre par défaut : prix croissant (0,35 ct rond à 166 $ en tête) | — | menu OK ; effet non rejoué |
| Onglets Natural / Lab-Grown / Colored | onglet | Lab-Grown actif (21 786 résultats) ; les deux autres non actionnés | — | non testé (par prudence de volume) |
| « Switch view » (grille/liste des pierres) | bouton | présent | — | non testé |
| Fiche pierre : image, « View video preview », « View certificate » | vignettes | l'aperçu vidéo est un cadre 360° (`labgrowns3.s3.ap-southeast-1.amazonaws.com/stoneimages360.html`) ; le clic sur « certificate » n'a pas changé le cadre relevé | — | OK pour le 360° ; certificat non confirmé |
| « Select Lab-Grown Diamond » | lien | ouvre la liste des montures filtrée sur la pierre (224 montures rondes 14 k or jaune, 20 par page) | — | OK |
| Fiche monture : cadre 360° (icône 360) | vue | cadre `3d.vdbapp.com/360-viewer` présent, 354 × 354 px, interaction non rejouée | — | présent, interaction non testée |
| Bague terminée : taille 7 puis « Add to Cart » | bouton | l'ajout fonctionne (`POST /cart/add.js` 200) mais **aucun message, aucun changement de page** ; il faut ouvrir `/cart` | — | OK avec défaut (voir plus bas) |
| « Add to Cart » sans taille | bouton | aucun message ; ajout non vérifié | — | non confirmé |
| « Want to share this product? Drop a Hint » | bouton | formulaire (champs nom, e-mail, téléphone, message) ; non rempli | — | OK |
| « Start Over » | bouton | non actionné (efface la composition) | — | non testé |
| Panier : quantité − / +, Remove, note, Affirm « See if you qualify », CHECK OUT | boutons | présents ; seul l'affichage a été lu, aucune modification | — | « CHECK OUT » non actionné (hors périmètre) |
| Menu, recherche, connexion, rendez-vous, appel `tel:`, texto, avis Google | liens | présents ; non suivis | — | non testé |

## Options disponibles

- **Métaux** : 10 k, 14 k, 18 k (jaune, blanc, rose) et platine (V : fiche monture). Titre 10 k proposé, absent chez JR Diamond.
- **Styles de monture** : trois pierres, solitaire, pierres latérales, halo, vintage, accentué, serti clos (V). Un seul vrai choix de solitaires : 6 montures en 14 k jaune.
- **Formes de la monture (liste)** : rond, ovale, poire, émeraude, princesse, carré. **Formes de pierre** : rond, ovale, poire, émeraude, princesse, radiant, marquise, coussin (V).
- **Pierres latérales** : 1,0 à 3,0 ct ; qualités SI1, SI2, VS (G-H) ou synthétiques (V).
- **Taille de doigt** : US 3 à 13 par demi-taille ; conversion vers 10 systèmes dont Israël (V).
- **Pierres** : naturelles, synthétiques, de couleur (onglets) ; certificat IGI sur la pierre synthétique relevée (V : fiche 2060425, « Lab IGI », rapport 821624410).
- **Non proposés dans le constructeur** : corps de bague, griffes, pavage, gravure, forme sur mesure ; la gravure se demande en boutique (V : https://thollotco.com/pages/jewelry-engraving). Pas de 3D interactive de la bague construite : photos de la monture (4 vues) et cadre 360° (V).

## Prix, délais, retours, garanties

- **Prix** : affiché à chaque étape, pierre et monture séparées, puis sous-total (V). Aucune décomposition par poste (métal, façon, marge). Exemple : pierre 166,00 $ + monture 2 336,00 $ = 2 502,00 $ au récapitulatif (V : `rb-ring-review`). **Dans le panier : pierre 166,25 $ et sous-total 2 502,25 $** (V : https://thollotco.com/cart), soit 0,25 $ d'écart.
- **Financement** : « 0 % APR or as low as $151/mo with Affirm » dans le panier ; page https://thollotco.com/pages/financing-options : Affirm, location Acima (300 à 4 000 $), mise de côté jusqu'à 6 mois avec 50 % à l'ouverture (V).
- **Délai** : la fiche et le récapitulatif affichent « Estimated Production Timeline: 15th, December 2026 » (V), soit la date du relevé (24/11) + 21 jours (I) ; l'info-bulle dit « 7 days to 3 weeks » ; la page sur mesure annonce 6 à 8 semaines (V : https://thollotco.com/pages/custom-jewelry-design). Un texto de l'atelier donne la date précise après commande (V).
- **Livraison** : sol 5 à 10 jours ouvrés, gratuite jusqu'à 499 $ ; express 2 jours gratuit au-delà de 500 $ « quand disponible » ; nuit 60 $ ; les créations sur mesure peuvent demander plus (V : https://thollotco.com/policies/shipping-policy). Le panier dit « Shipping, taxes… calculated at checkout » (V). Le seuil « 499 $ et moins » puis « plus de 500 $ » laisse le palier 499 à 500 $ sans règle (V, ambiguïté du texte).
- **Retours** : 30 jours, remboursement ou avoir, étiquette prépayée gratuite, pierre non portée avec certificats ; **vente ferme pour les créations sur mesure et les commandes spéciales « including rings designed through our online ring builder »** (V : https://thollotco.com/policies/refund-policy). Donc la bague construite en ligne n'est pas remboursable. Programme d'échange 364 jours sur la marque Gabriel & Co et sur certains sur mesure (V).
- **Garantie** : garantie d'atelier contre les défauts de fabrication, avec contrôle et entretien à jour ; l'usure normale (griffes, pierres abrasées) est exclue (V : https://thollotco.com/pages/faq).
- **Acompte sur mesure** : 200 $ pour passer à la CAO, 50 % avant la production (V : page sur mesure).

## Confiance et service

- **Certificats** : fiche de pierre synthétique avec laboratoire IGI, numéro de rapport, poli, symétrie, fluorescence, mesures, profondeur, table (V). Le certificat figure aussi dans le panier (« Certificate No: 821624410 », V). Libellé : « Lab-Grown » (V) ; la page https://thollotco.com/pages/lab-grown-diamonds dit « lab created » et affirme « Colorado's only local lab diamond producer » (V pour l'affirmation, S pour le fond).
- **Avis** : badge Google 5,0 sur 1 478 avis sur ordinateur, 1 465 sur iPhone au même relevé (V). Widget de messagerie « Text us » (Podium) ; non ouvert.
- **Preuves de fabrication** : sur mesure avec rendus CAO, prototype 3D à essayer, option de venir couler l'or le samedi (V : page sur mesure). Aucun suivi de commande photo ou vidéo ; les e-mails d'état de commande sont promis (V : politique de livraison).
- **Langues, devises** : anglais, dollar américain, seulement (V).
- **Service** : rendez-vous en boutique, téléphone (303) 280-3374, texto, mise de côté, assurance, reprise d'or, évaluation, gravure, réparations (V : liens du pied de page).
- **Affichage iPhone** : bandeau mobile « DUE TO VOLATILE GOLD PRICING AT THIS POINT IN TIME, GOLD PRICING IS SUBJECT TO C… » (texte tronqué à 80 caractères par l'outil, V pour le début ; la suite est S). Les prix des montures dépendent donc du cours de l'or.

### Mesure du visuel principal (Chromium sans écran, proxy de la session, une mesure par page)

| Page | Ordinateur : 1re image produit | iPhone : 1re image produit |
|---|---|---|
| Départ | 2,5 s | 2,2 s |
| Liste des montures | 5,5 s | 5,1 s |
| Fiche monture | 6,1 s (autres relevés 4,3 à 6,7 s ; **33,5 s** une fois sur la fiche monture avec pierre) | 5,9 s |
| Liste des pierres | 4,4 s | 5,0 s |

Le visuel est une photo (CDN `gemsoneconcierge.b-cdn.net`), pas une 3D (V). Des mesures isolées, avec le proxy de la session : à lire comme un ordre de grandeur.

## Points forts à retenir pour JR Diamond

1. **Chaque option change le prix et la photo, et l'adresse suit** (`ring_stock_num` change à chaque métal, forme, poids) : une configuration se partage par lien. Preuve : relevés ci-dessus et adresses `…SM-4RWB`, `…-PTB`. Cela rejoint l'action « configuration dans l'adresse » déjà faite chez JR Diamond.
2. **Prix visible dès la liste, au dollar près, et sous-total en 3 étapes** (monture, pierre, total) : le défaut de JR Diamond (« Sur devis ») s'oppose à cela (V : récapitulatif 2 502 $).
3. **Fiche pierre complète avec rapport IGI et numéro, et rapport repris dans le panier** : bon modèle pour le certificat dès 0,50 ct (V : fiche 2060425, panier).
4. **Guide des tailles avec colonne Israël** (V) et conversion en 10 systèmes : utile pour un lancement en Israël, puis la France.
5. **Retours expliqués avec exception explicite du sur mesure, même pour la bague construite en ligne** : même question que pour l'avocat israélien chez JR Diamond (V : politique de retour).
6. **Filtres de pierres très fournis** (14, dont polish, symétrie, fluorescence, profondeur, table) et tri sur 5 critères (V) : à garder pour le catalogue de pierres.
7. **Processus sur mesure dit en étapes, acompte et prototype 3D à essayer avant production** (V) : proche de la promesse « ce que vous voyez existe » de JR Diamond.

## Défauts observés

- **« Select Setting » muet** tant que les deux listes « Supported Carat From/To » n'ont pas de choix : aucun message d'erreur, le visiteur ne comprend pas (V : deux essais).
- **« Add to Cart » sans retour visuel** : l'ajout réussit mais rien ne l'indique (V : `POST /cart/add.js` 200, page inchangée).
- **Écart de 0,25 $ entre le récapitulatif (166,00 $) et le panier (166,25 $)** pour la même pierre (V).
- **Une seule monture sur 6 pour le solitaire en 14 k jaune** ; 993 « accentués » sur 1 903 : le catalogue est des montures de fabricants (références `W6610-N`), sans fichier de fabrication propre (V : référence ; I pour le fournisseur).
- **« Colorado's only local lab diamond producer »** : affirmation non prouvée par une preuve de production lue (S).
- **Lenteur de la fiche monture** : 4 à 7 s, un relevé à 33 s (V, mesures isolées).
- **Bandeau de prix de l'or sur mobile** : annonce que le prix peut changer, sans dire jusqu'à quand le prix du panier est tenu (I).
- **Aucune vue 3D** de la bague construite : photos 2D et 360° de la monture seule (V).

## Limites de l'audit

- Pierres naturelles et de couleur, « Apply Filters », tri des pierres, vue liste, « Start Over », « Add to Cart » sans taille, et le contrôle de l'ordre des tris des montures non actionnés ou non confirmés.
- Le constructeur d'alliances (Lashbrook, Ava Couture, https://thollotco.com/pages/eternity-band-builder) n'a pas été ouvert dans cet audit.
- Aucun paiement, aucun formulaire envoyé, « CHECK OUT » non actionné ; le choix des moyens de paiement du checkout n'a pas été lu. Les moyens de paiement du pied de page n'ont pas été relevés (le sélecteur n'a rien trouvé).
- Les relevés de style/métal/prix de la liste combinent un ancien gabarit (début du relevé) et le gabarit actuel : les deux sont signalés.
- Mesures de temps : une par page, avec le proxy de la session, sans cache ; les chiffres varient.
- La date 15/11 de l'en-tête est celle imposée par la commande ; les relevés du panier et du délai datent du 24/11.

## Sources

- https://thollotco.com/robots.txt
- https://thollotco.com/apps/ring-creator/rb-get-started
- https://thollotco.com/apps/ring-creator/rb-setting-list?in_journey=true
- https://thollotco.com/apps/ring-creator/rb-setting-details?in_journey=true&ring_stock_num=W6610RN200SM-4YWB&ring_reference_id=128320
- https://thollotco.com/apps/ring-creator/rb-stone-list?in_journey=true&diamond_type=labgrown&view_type=grid&color_type=White
- https://thollotco.com/apps/ring-creator/rb-stone-details?in_journey=true&labgrown_stock_num=2060425&stone_reference_id=27322
- https://thollotco.com/apps/ring-creator/rb-ring-review?in_journey=true&labgrown_stock_num=2060425&stone_reference_id=27322&ring_stock_num=1059122836P&ring_reference_id=36288
- https://thollotco.com/cart
- https://thollotco.com/policies/refund-policy, https://thollotco.com/policies/shipping-policy, https://thollotco.com/pages/faq, https://thollotco.com/pages/financing-options
- https://thollotco.com/pages/custom-jewelry-design, https://thollotco.com/pages/lab-grown-diamonds, https://thollotco.com/pages/colorado-cut-diamonds, https://thollotco.com/pages/jewelry-engraving
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/thollot-co/`
