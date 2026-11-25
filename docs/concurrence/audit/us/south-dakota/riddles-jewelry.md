# Audit : Riddle's Jewelry (Dakota du Sud)

- **Site** : Riddle's Jewelry, https://www.riddlesjewelry.com
- **Page de départ** : https://www.riddlesjewelry.com/pages/engagement-ring-builder (constructeur en 4 étapes, application tierce « ring builder » de operateone.com intégrée à Shopify)
- **Date** : 15/11/2026 (parcours exécuté le 25/11 d'après l'horloge de la session ; la date d'en-tête suit la consigne)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours complet jusqu'à la page « Review » ; panier non ouvert (`/cart` interdit par robots.txt) ; plusieurs contrôles du pas « Customize » non confirmés (voir « Limites »).
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (toutes vérifiées sauf mention) |
|---|---|
| 1. Diamond (`#/diamond`) | Case « I want to provide my own Center stone » (non cliquée) ; liste de 24 056 diamants, vue Table ou Grid, tri (Featured, prix croissant/décroissant, carat croissant/décroissant) ; panneau Filters : forme (8), carat (min/max), coupe, pureté, type (naturel/labgrown), prix (min/max) ; fiche diamant : visionneuse 360°, photo, image du certificat, « View full certificate », « Select this diamond » [V] |
| 2. Setting (`#/products`) | Filtres : forme (8), style (8 : Hidden Halo, Bezel, Nature, Solitaire, Twist, 3 Stone, Halo, Straight), métal du jonc (7), prix ; tri ; 49 montures sans filtre [V] |
| 3. Customize (`#/engagement-settings`) | Vue Ring (3D « Drag to rotate ») / Hand (sur la main, curseur de teinte de peau) ; galerie de 6 images ; forme du diamant (8) ; origine Natural / Lab Grown ; poids total en carats (3/4, 1, 1 1/2, 2, 2 1/2, 3, 4, 5) ; métal de la couronne centrale (7) ; taille de bague 4 à 9 par demi-taille ; métal du jonc (7) ; gravure facultative (16 caractères) ; « Select This Setting » [V] |
| 4. Review | Récapitulatif monture + diamant, prix total, mensualité, garantie payante facultative (No Care Plan / Premium Warranty 249 $), « Add to cart » (non cliqué), « Copy details » (non cliqué), « Modify » pour monture et diamant [V] |

## Contrôles vérifiés

Sur ordinateur sauf mention. « Prix » = effet sur le prix affiché.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Table / Grid | bouton | Table : lignes forme, carat, coupe, couleur, pureté, type, prix + « Select ». Grid : vignettes « 0.26 ct Round Diamond, VVS2, 350 $ » | aucun | OK [V] |
| Sort by (select) | liste | 5 choix lus (Featured, prix ↑↓, carat ↑↓). Tri par défaut observé : prix croissant, première ligne 0,26 ct D VVS2 labgrown 350 $ | aucun | lu ; changement de tri non actionné |
| Filters | bouton | Ouvre un tiroir à droite, filtres appliqués en direct (spinner pendant le rechargement) | aucun | OK [V] |
| Forme (8 cases) | case | Cushion : 24 056 → 1 950 diamants | aucun | OK [V] |
| Type Natural | case | + Cushion : 597 diamants (première ligne : cushion 0,50 ct G SI2 naturel, 465 $) | aucun | OK [V] |
| Pureté VS1 | case | + Cushion + naturel : 118 diamants (première ligne cushion 0,51 ct I VS1 naturel, 540 $) | aucun | OK [V] |
| Coupe (None, Poor, Fair, Good, Very Good, Excellent, Ideal, 8X) | case | Excellent ajouté aux trois filtres précédents : compteur illisible à cet instant (texte « Showing… » masqué pendant le chargement) | aucun | non concluant |
| Carat min/max, Prix min/max | champ numérique | Bornes affichées : 0,26 à 17,3 ct ; 350 à 71 460 $. Saisie d'une valeur non confirmée | aucun | lu, saisie non confirmée |
| Filtre couleur | (absent) | La colonne « Diamond Color » existe dans le tableau mais le tiroir n'a aucun filtre de couleur | n.a. | absent [V] |
| Icône « More information » (Stone Shape, Diamond Type) | bouton | Info-bulle explicative (texte non relevé) | aucun | non testé |
| Select (ligne de diamant) | bouton | Ouvre la fiche : 0,26 ct rond labgrown D VVS2 Ideal, polish/symétrie Excellent, profondeur 59,9, ceinture Medium, certifié IGI, 350 $ | 350 $ | OK [V] |
| Miniatures de la fiche (3) | vignette | 1 : visionneuse 360° (iframe Vision360 hébergée sur digitaloceanspaces.com) ; 2 : photo ; 3 : image du certificat | aucun | OK [V] |
| View full certificate | bouton | Ouvre un nouvel onglet vers `igi.org/verify-your-report/?r=…` (le site IGI répond par un défi Cloudflare, non lu, une requête du défi bloquée de mon côté) | aucun | s'ouvre ; contenu non lu |
| Select this diamond | bouton | Passe à l'étape Setting avec filtres préremplis (forme Round, fourchette de prix 1 571–5 714 $) | aucun | OK [V] |
| Setting, filtres préremplis | liste | Avec ce diamant de 350 $ : « no items / Sorry, products not found » alors que « Clear all filters » affiche 49 montures | n.a. | **défaut** [V] |
| Filtres Setting (forme, style, métal, prix) | cases | Lus ; non actionnés individuellement | aucun | lu |
| Carte de monture | clic | Ouvre Customize (≈ 8 s) ; bouton « Customize » visible seulement au survol sur ordinateur | n.a. | OK [V] |
| Ring / Hand | bouton | Hand : photo de main avec la bague en 3D, curseur « Skin Tone » | aucun | OK [V] |
| Forme Cushion | vignette | Le titre devient « … 3/4 Cushion … », info-bulle de description, la 3D se recharge (spinner) | inchangé : 1 899 $ « Setting Only » | OK [V] |
| Natural / Lab Grown | bouton | Clic automatisé en échec (30 s, bulle de chat « Text us » au-dessus) | non mesuré | non confirmé |
| Poids 3/4, 1, 2, 5 | bouton | Clics sans erreur ; aucun changement de prix « Setting Only » ni de titre | inchangé 1 899 $ | OK [V] ; effet sur le diamant [S] |
| Métal du jonc 14K Rose | vignette | Titre « …14K Rose Gold With 14K Rose Gold Crown » | inchangé 1 899 $ | OK [V] |
| Métal du jonc 18K Yellow | vignette | Titre « …18K Yellow Gold… » | 1 899 → 2 599 $ (prix barré 2 714 → 3 714 $) | OK [V] |
| Métal de la couronne (18K White, Platinum) | vignette | Aucun changement de titre ni de prix | inchangé | non concluant (le clic a peut-être touché un autre groupe) |
| Taille de bague | liste | 4, 4.5 … 9 ; taille 7 retenue, reprise au récapitulatif | aucun | OK [V] |
| Gravure | champ | Compteur 0/16 ; saisie en échec (délai dépassé) | non mesuré | non confirmé |
| Continue to Review (barre du bas) | bouton | Deux essais (sans taille, puis avec taille 7) : l'étape ne change pas | n.a. | **défaut** [V] |
| Select This Setting | bouton | Avec taille 7 : ouvre Review | aucun | OK [V] |
| Review : Modify (×2), Details, View Terms | lien/bouton | Non actionnés | n.a. | non testé |
| Review : Premium Warranty 249 $ / No Care Plan | radio | Lus, non actionnés | +249 $ [V sur le texte] | non testé |
| Add to cart / Copy details | bouton | Non cliqués : « Add to cart » appelle en général `/cart/add`, et `/cart` est interdit par robots.txt | n.a. | non testé, interdit |
| Exit | bouton | Quitte le constructeur (non cliqué) | n.a. | non testé |
| Recherche (texte, « Search by image ») | champ/bouton | Non utilisés : `/search` interdit par robots.txt | n.a. | non testé, interdit |
| Cœur (wishlist) | lien | Dialogue « Save your wishlist forever, Login or create an account » (compte requis) | n.a. | lu |
| Panier, Log in, Account, Order History | lien | `/cart`, `/account` interdits ; liens vers shopify.com non ouverts | n.a. | non testé, interdit |
| FIND A STORE, FINANCING, tel 1-888-402-3475, mailto sales@, SMS 605-716-8878, bulle « Text us here » | lien | Pages store-locator et financing ouvertes (store-locator vide à la lecture) ; téléphone/SMS non appelés ; chat non ouvert | n.a. | partiel |
| Pied de page (Diamond Guarantee, Jewelry Warranty, Theft Plan, Returns, Shipping, Financing, Ring Size Chart, Diamond Knowledge, Repairs) | lien | Pages lues (voir plus bas). `/policies/*` interdit | n.a. | OK [V] |
| Accessibility options (accessiBe) | bouton | Non ouvert | n.a. | non testé |
| Inscription e-mail (SIGN UP) | formulaire | Non rempli (règle) | n.a. | non testé |
| Bandeau cookies | bouton | Accept / Decline / Manage preferences ; « Decline » cliqué | n.a. | OK |

Sur iPhone 13 : 56 contrôles listés (66 sur ordinateur). Le menu passe en bouton « Menu », la liste de diamants garde la vue Table, le bouton Filters et le tri restent. Le parcours après la liste n'a pas été rejoué en mobile (voir Limites).

## Options disponibles

- **Formes (8)** : rond, coussin, ovale, émeraude, princesse, radiant, poire, marquise.
- **Origine** : naturel, labgrown (sélecteur sur la liste de diamants et sur Customize).
- **Pureté** : FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, SI3, I1, I2, I3. **Coupe** : None, Poor, Fair, Good, Very Good, Excellent, Ideal, 8X. **Couleur** : colonne seulement, pas de filtre.
- **Carat** (filtre) : 0,26 à 17,3. **Prix** (filtre) : 350 à 71 460 $.
- **Styles de monture (8)** : Hidden Halo, Bezel, Nature, Solitaire, Twist, 3 Stone, Halo, Straight.
- **Métaux (7)** : or jaune, blanc et rose en 14 k ; or jaune, blanc et rose en 18 k ; platine.
- **Poids total (Customize)** : 3/4, 1, 1 1/2, 2, 2 1/2, 3, 4, 5 ct.
- **Tailles** : 4 à 9 par demi-taille. **Gravure** : 16 caractères maximum.
- **Vues** : 3D rotative, photo de main avec teinte de peau, 6 images, 360° et photo du diamant, image du certificat.
- **Protection** : Premium Care & Repair 249 $ (facultatif).

## Prix, délais, retours, garanties

- **Prix** [V] : le diamant et la monture sont affichés séparément, puis additionnés (monture 1 899 $ + diamant 350 $ = 2 249 $). Les montures sont « Starting at » avec prix barré « 30 % OFF » (promotion Black Friday). Mensualité suggérée 125 $/mois sur 18 mois (Affirm) à la page Review. Pas de décomposition matière / façon.
- **Délai** [V] : « Estimated delivery by Wednesday, December 23, if ordered today » (Review). La page d'expédition parle de 1 à 3 jours de traitement + 3 à 5 jours de transport ; si la taille n'est pas en stock, 2 à 3 jours ouvrés de plus.
- **Livraison** [V] (`/pages/shipping-information`) : standard 3 à 5 jours ouvrés gratuit dès 99 $ ; express 2 jours 19,99 $ ; 1 jour 39,99 $ ; assurance incluse ; signature au-dessus de 500 $ ; livraison États-Unis, territoires, APO/FPO. Droits de douane à la charge du client.
- **Retours** [V] (`/pages/returns-exchanges`) : 60 jours pour un diamant de plus de 300 $, 20 jours pour les autres bijoux ; retour gratuit en ligne ; « unable to accept returns of special order items or customized pieces ». La page Review promet en même temps « a 60-day diamond return policy » : l'application au bijou configuré n'est pas précisée.
- **Garanties** [V] : « Lifetime Diamond Security » (pierre non perdue, inspection tous les 6 mois, bijou de 10 000 $ ou moins) ; première année gratuite : reserrage des griffes, mise à taille, rhodiage, resserrage ; nettoyage à vie ; reprise à vie d'un diamant naturel contre un achat au moins deux fois plus cher ; labgrown non repris ; plan Premium Care & Repair payant ; plan de remplacement en cas de vol 1 an.
- **Moyens de paiement** [V] (`/pages/financing-options`) : carte Riddle's, Affirm, PayPal (4 fois sans frais), comptes privés en magasin. Page de paiement non vue.
- **Certificats** [V] : IGI pour le labgrown observé (« Certified: IGI », lien vers le rapport IGI) ; GIA pour le naturel [I, non observé sur une fiche].

## Confiance et service

- Entreprise familiale depuis 1959, plus de 60 magasins dans 10 États, siège et atelier à Rapid City (Dakota du Sud) [V, page Diamond Guarantee et page retours]. Atelier de réparation en magasin, bijoutiers sur place.
- Avis : pastille « Verified Reviews 4,9/5 » en pied de page [V]. Aucun avis affiché sur les écrans du constructeur.
- Contact : téléphone 1-888-402-3475, SMS 605-716-8878, e-mail, bulle de chat « Hi there, have a question? Text us here. » [V, non ouverte].
- Magasins pour les retours, inspections, essais. Pas de rendez-vous visio observé.
- Libellé du synthétique : « Lab Grown » / « Labgrown » [V]. Langue : anglais seul ; devise : dollar américain [V].
- Preuves de fabrication : aucune photo ou vidéo d'atelier, aucun suivi de fabrication ; seulement confirmation d'expédition avec suivi sous 24 h (texte de la page livraison) [V].

## Points forts à retenir pour JR Diamond

1. **Parcours diamant d'abord, avec 24 056 pierres filtrables en direct** et compteur de résultats (24 056 → 1 950 → 597 → 118 en trois filtres). Preuve : passage de Cushion, Natural, VS1 observé sur la page de départ.
2. **Fiche de pierre complète** : 360°, photo, certificat, mesures (profondeur, ceinture, polish, symétrie) et lien vers le rapport IGI. Preuve : fiche de la pierre 0,26 ct.
3. **Vue sur la main avec teinte de peau réglable** à côté de la 3D rotative. Preuve : bouton Hand, curseur Skin Tone.
4. **Prix de la monture et de la pierre affichés séparément, puis totalisés**, avec mensualité. Preuve : écran Review (1 899 + 350 = 2 249 $).
5. **Retour 60 jours sur les diamants et garantie contre la perte de pierre** mis en avant sur le parcours (bandeau « Lifetime Diamond Warranty » en Review). Preuve : textes des pages retours et diamond-guarantee.
6. **Partage de la configuration par adresse** : l'adresse du constructeur contient l'identifiant de configuration (`configuration_id`, `dsku`, `psku`) et le bouton « Copy details » existe [V pour l'adresse, bouton non testé].

## Défauts observés

- **Liste de montures vide après le choix d'un diamant** (filtres préremplis incohérents : « Sorry, products not found ») ; il faut « Clear all filters » pour voir 49 montures. [V]
- **« Continue to Review » ne réagit pas** (deux essais), seul « Select This Setting » fait avancer. [V]
- **Apparition lente** : liste de diamants de 8 à 10 s sur ordinateur avant les premières lignes (tableau visible à 9,4–10,0 s ; rond d'attente avant) ; ≈ 4,9 s sur iPhone 13 pour 20 images. [V, mesures de cette session, proxy cloud]
- **Aucun filtre de couleur** alors que la couleur est affichée. [V]
- **Les options de pierre en Customize ne modifient pas le prix** « Setting Only » et le récapitulatif reprend la pierre choisie à l'étape 1 (0,26 ct) alors que l'écran Customize annonce « 3/4 Round » : le lien entre ces choix et le diamant acheté n'est pas clair. [V pour les écrans, I pour l'interprétation]
- **Contradiction retours** : « pas de retour des pièces sur mesure » contre « 60-day diamond return » en Review. [V]
- La bulle de chat recouvre les boutons Natural / Lab Grown sur un écran de 900 px de haut. [V]
- Bouton « Customize » de la carte visible seulement au survol sur ordinateur (aucun indice avant). [V]

## Limites de l'audit

- **Panier non ouvert ni testé** : `/cart` et `/cart/add` sont interdits par robots.txt (Shopify) ; « Add to cart » et tout paiement non cliqués. Frais de livraison au panier et moyens de paiement au paiement non vus ; les données viennent des pages d'information.
- **Natural / Lab Grown, métal de la couronne, gravure, tri, saisie des bornes de carat et de prix, couleur du diamant** : clics ou saisies automatisés en échec ou non concluants (voir tableau).
- Pas de rejeu complet du parcours sur iPhone 13 : seuls l'arrivée, la liste de diamants, la liste des contrôles et la mesure ont été faits.
- Mesures de temps dépendantes du proxy de l'environnement (cloud) et de l'état du serveur d'inventaire.
- Un bouton du site (« View full certificate ») a ouvert un nouvel onglet vers igi.org, domaine dont le robots.txt n'a pas été contrôlé avant ce clic ; seul le défi anti-robot a été vu, rien n'a été lu ni contourné.
- Aucun compte, aucun formulaire, aucun chat ouvert. Dates de livraison calculées par le site à la date de la session.

## Sources

- https://www.riddlesjewelry.com/pages/engagement-ring-builder (parcours complet, 4 étapes)
- https://www.riddlesjewelry.com/pages/returns-exchanges
- https://www.riddlesjewelry.com/pages/shipping-information
- https://www.riddlesjewelry.com/pages/financing-options
- https://www.riddlesjewelry.com/pages/diamond-guarantee
- https://www.riddlesjewelry.com/pages/jewelry-warranty, /pages/theft-plan, /pages/repairs-inspections, /pages/ring-size-chart, /pages/diamond-knowledge
- Captures et sorties dans le dossier de travail de l'audit (hors dépôt)
