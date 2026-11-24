# Audit : Steven Stone, constructeur « Create your own engagement ring » (Royaume-Uni, £)

| | |
|---|---|
| Site | Steven Stone Ltd, société enregistrée en Angleterre (n° 00579757), atelier et boutiques dans le nord de l'Angleterre ; marque « 1937 » en en-tête (V) |
| Page de départ | https://www.stevenstone.co.uk/create/engagement-ring/ |
| Date | 15/11/2026 (mesures faites le 24/11/2026 selon l'horloge de la machine) |
| Appareils | Chromium headless 1366 × 900, langue en-GB ; émulation iPhone 13 (Playwright) |
| Statut | **complet** jusqu'à la page du panier (`/cart`) ; « CHECKOUT » non ouvert. Quelques contrôles non testés, listés plus bas |
| robots.txt | Pas de règle pour tous les robots (seuls Googlebot et Bingbot sont nommés, sans règle) ; toutes les adresses ouvertes contrôlées AUTORISÉ avec `robots.cjs` (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse en source) · **I** inféré · **S** supposé.

## Parcours

Le constructeur est un bandeau en 3 étapes : « 1 Your Setting », « 2 Your Diamond », « 3 Review Order » (V).

| Étape | Adresse observée | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|---|
| 1. Choix de la monture (liste) | `/create/engagement-ring/` | 55 montures, 12 affichées d'abord (« Showing 12 of 55 ») ; filtres forme (10), style (4), métal (4), « Quick Delivery » ; tri (3) (V) | « From £650 » à « From £895 » pour les 12 premières (V) | une photo par carte ; pastilles de métal sur chaque carte (V) |
| 1. Fiche de la monture | `/create/engagement-ring/product/PR-00207/round-brilliant/<métal>` | métal (11 variantes), bouton « Choose This Setting » (V) | recalculé à chaque métal (voir « Prix ») (V) | change de série de photos par métal (V) |
| 2. Choix du diamant | `/create/engagement-ring/PR-00207/round-brilliant/platinum/gemstones` | fenêtre « Diamond Genius », puis 5 types de pierres, 11 filtres, cartes « Compare / Details / Add To Ring » (V) | prix de la pierre seule ; 274 780 naturels, 84 787 synthétiques (V) | une photo ou icône par carte ; fiche détaillée (V) |
| 3. Récapitulatif | `/create/engagement-ring/review/PR-00207/round-brilliant/platinum/<n° de pierre>` | monture, pierre, « Change Setting », « Change Diamond », taille de doigt (37 choix), « Add To Cart » (V) | total TTC avec TVA détaillée (V) | pas d'image de la bague composée repérée dans le texte (I) |
| Panier | `/cart` | code promo, « CHECKOUT », bandeaux de service (V) | frais de livraison « calculés au paiement » (V) | vignette |

Remarque : ouvrir directement l'adresse de l'étape 2 (`…/gemstones`) sans passer par l'étape 1 donne une **page 404** « the page you are looking for does not exist » (V). Le parcours ne se partage donc pas par lien à cette étape.

## Contrôles vérifiés

### Étape 1 : liste des montures

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Shape (menu) | menu à cases | 10 formes : Round, Oval, Cushion, Pear, Emerald, Princess, Heart, Radiant, Marquise, Asscher (V) | — | ouvert, case non cochée |
| Style (menu) | menu à cases | 4 styles : Solitaire, Shoulder Set, Three Stones, Halo (V) | — | ouvert, case non cochée |
| Metal (menu) | menu à cases | 4 métaux : Platinum, Yellow Gold, Rose Gold, White Gold (V) | — | ouvert, case non cochée ; une liste filtrée par métal existe à l'adresse `/create/engagement-ring/platinum` (atteinte par un clic sur un libellé « Platinum », V) |
| Quick Delivery | case | cliquée, aucun changement de total lu | — | effet non établi |
| Tri | menu | 3 tris : Price: Low - High (défaut), Most Popular, Price: High - Low (V) | — | ouvert, non appliqué |
| Carte de monture | lien | ouvre la fiche (V) | « From £… » | fonctionne |
| Pastilles « Select Platinum / Yellow Gold / Rose Gold / White Gold » | boutons | présentes sur chaque carte (V) | — | non cliquées |
| Account, panier, favoris, recherche | liens | `/user/account`, `/cart` (V) | — | liens vus ; compte non ouvert |

### Étape 1 : fiche de monture (Compass, `PR-00207`)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Metal (liste) | liste | 11 variantes : 14 ct (rose et platine, jaune et platine, rose, jaune, blanc), 18 ct (rose et platine, jaune et platine, rose, jaune, blanc), Platinum (950) (V) | voir « Prix » | fonctionne |
| Changement de métal | choix | change l'adresse (`…/14ct-white-gold`), le prix et la série de photos (V) | oui | fonctionne |
| « show more » | lien | déplie la description : « suitable for a Round Brilliant diamond between 0.18ct and 10.00ct » (V) | — | fonctionne |
| Miniatures de la galerie | images | 4 miniatures de 260 px après la photo principale de 536 px ; clic sans effet lu | — | effet non établi (images chargées après la lecture) |
| « Choose This Setting » | bouton | mène à l'étape 2 en 6 s (V) | — | fonctionne |
| « Chat with our Experts » | bouton | une fenêtre de discussion se charge (2 cadres `iframe`) ; aucun message saisi | — | ouvert une fois, voir « Limites » |
| « Design Information » (n° de stock, style, métal, largeur haut 1,6 mm et bas 2,25 mm) | tableau | cotes de l'anneau affichées (V) | — | lu |
| « Finance Information », « Shipping and Returns », « Lifetime Warranty & Insurance Valuation » | volets | « Shipping and Returns » s'ouvre : livraison suivie et assurée, retour sous 30 jours (V) ; les deux autres volets n'ont pas montré de changement de texte | — | un volet sur trois vérifié |
| Cœur (favori) | bouton | présent à droite du titre (V) | — | non cliqué |
| Avertissement or blanc | texte | « White Gold is generally not recommended for engagement rings as the silver colour is plated and will wear off. Platinum is the recommended alternative » (V, affiché pour 18 ct blanc) | — | lu |

### Étape 2 : choix du diamant

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « Diamond Genius » | fenêtre | « narrow your search from 500,000 diamonds to 3 in just a few clicks » ; « GET STARTED » ou « LET ME CHOOSE MY OWN » (V) | — | assistant : étape « Choose A Diamond Shape », puis « Choose A Diamond Type » (Natural / Lab Grown), puis « CONTINUE » ; la suite n'a pas pu être menée jusqu'au bout (voir « Limites ») |
| « LET ME CHOOSE MY OWN » | bouton | ferme la fenêtre, filtres accessibles (V) | — | fonctionne |
| Type : Natural | bouton | 274 780 résultats, certificat GIA, 48 affichés (V) | dès £172 pour 0,22 ct | fonctionne |
| Type : Lab Grown | bouton | 84 787 résultats, certificat IGI, 48 affichés ; le total affiche « 0 of 0 » les premières secondes, puis se corrige en 4 s (V) | dès £213 pour 0,24 ct D VVS2 | fonctionne, chargement visible |
| Type : Natural Fancy Colour | bouton | 90 résultats (V) | dès £536 pour 0,30 ct jaune | fonctionne |
| Type : Lab Grown Fancy Colour | bouton | total non lu avant la fin du délai | — | non établi |
| Type : Gemstones | bouton | 7 résultats « Showing 7 of 7 » (V) | £570 pour 1,21 ct jaune | fonctionne |
| Filtres Shape (10 icônes), Carat (0,17 à 10,85), Colour (K à D), Clarity (SI1 à IF), Cut (Fair à Excellent ; « Ideal » pour les synthétiques), Price (100 à 100 000), Polish, Symmetry, Fluorescence, Table (%), Depth (%) | curseurs et icônes | listés ; aucun curseur déplacé (V pour la liste) | — | non actionnés |
| « Reset All », « Quick Delivery » | bouton, case | présents (V) | — | non actionnés |
| Carte : « Compare » | bouton | aucun changement visible lu | — | effet non établi |
| Carte : « Details » | bouton | ouvre le détail : « Round, 0.24ct, D, VVS2 – IGI Certificated », numéro de pierre `LG693542042`, table 60 %, profondeur 60 %, mesures 4,01 × 4,05 × 2,42 mm, explications des 4 C, date de livraison, « Change Diamond » (V) | £213,00 (TTC) | fonctionne |
| Carte : « Add To Ring » | bouton | mène au récapitulatif (V) | — | fonctionne |
| Mobile : filtres | boutons | sur iPhone, les 12 filtres sont des boutons repliés (Type, Shape, Carat, Colour, Clarity, Cut, Price, Polish, Symmetry, Fluorescence, Table, Depth) (V) | — | boutons non ouverts |

### Étape 3 : récapitulatif et panier

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Change Setting », « View Setting », « Change Diamond », « View Diamond » | boutons | présents (V) | — | non cliqués |
| Finger Size | liste | « Choose Finger Size », « Not Sure », puis F, F ½, F ¼, F ¾ jusqu'à U ¾ (taille britannique) (V) | aucun | fonctionne |
| « Add To Cart » sans taille | bouton | message « Please choose a finger size », reste sur la page (V) | — | validation correcte |
| « Add To Cart » avec taille L | bouton | ouvre `/cart` ; la ligne affiche « Finger Size:L » (V) | £993,00 | fonctionne |
| Lien de financement | lien | « from £25.43 per month when a £198.60 deposit is paid » (V) | — | lu, calculateur non ouvert |
| Panier : code promo, « APPLY » | champ, bouton | champ vide ; rien saisi | — | non actionné |
| Panier : « CHECKOUT » | bouton | non ouvert (limite des règles) | — | non testé |
| Panier : WhatsApp `+44 7385 561 752`, téléphone `+44 800 080 3535`, « Book Consultation », « Live Chat », « Send us an Email » | liens | WhatsApp pointe vers `api.whatsapp.com/send?phone=447385561752` ; non ouvert (V pour l'adresse) | — | liens vus |
| Gravure, taille d'alliance, certificat à choisir | — | **aucune option de gravure** ni de carat de métal à choisir au récapitulatif (V : absence dans la liste des contrôles) | — | absent |

Absent partout : vue 3D, vue 360°, essayage sur la main, réalité augmentée, partage, enregistrement de la composition, comparateur de montures (V : aucun contrôle de ce type dans les listes relevées sur les trois étapes).

## Options disponibles

- **Formes** : Round, Oval, Cushion, Pear, Emerald, Princess, Heart, Radiant, Marquise, Asscher (10) (V). Une monture est liée à une forme dans son adresse (`round-brilliant`, `pear-shape`).
- **Styles de monture** : Solitaire, Shoulder Set, Three Stones, Halo (V).
- **Métaux** : 14 ct (blanc, jaune, rose, jaune et platine, rose et platine), 18 ct (blanc, jaune, rose, jaune et platine, rose et platine), Platinum (950) (11 variantes sur la fiche Compass) (V). Les 4 filtres de la liste regroupent par couleur.
- **Types de pierre** : Natural, Lab Grown, Natural Fancy Colour, Lab Grown Fancy Colour, Gemstones (V).
- **Critères de filtre** : carat 0,17 à 10,85 ; couleur K à D ; pureté SI1 à IF ; taille Fair à Excellent (Ideal en synthétique) ; prix 100 à 100 000 ; poli, symétrie, fluorescence, table, profondeur (V).
- **Certificats** : GIA (naturel, vu), IGI (synthétique, vu) (V).
- **Taille de doigt** : F à U ¾ par quarts, ou « Not Sure » (V).
- **Services** : consultation, discussion en ligne, WhatsApp, téléphone, finance Omni, assurance conseillée, garantie à vie (V).

## Prix, délais, retours, garanties

- **Affichage du prix** : prix de la monture seule « From £… Setting only (Includes VAT) », prix de la pierre seule, puis total TTC. Le récapitulatif donne : monture platine £780,00 + diamant £213,00 = £827,50 hors TVA, TVA 20 % £165,50, **total £993,00** (V, `/create/engagement-ring/review/…`). Le prix ne détaille ni l'or, ni la main-d'œuvre : un seul prix de monture.
- **Prix de la monture Compass selon le métal** (V) : 14 ct rose et platine £650 ; 14 ct blanc £685 ; platine £780 ; 18 ct jaune £815 ; 18 ct rose £815 ; 18 ct rose et platine £815 ; 18 ct blanc £850.
- **Écart de prix** : la carte de la liste affiche « Compass 18ct Rose Gold & Platinum (950) From £650 », mais la fiche du même métal affiche £815 ; £650 est le prix de la variante 14 ct rose et platine (V). Le libellé de la carte ne correspond donc pas au prix.
- **Délai** : date calculée à la commande, « Order now and your order will arrive on Thursday 24th of December » (monture, au 24/11), « Wednesday 16th of December » pour la pierre seule, « Tuesday 29th of December » pour une autre monture en platine (V). Soit environ 4 semaines pour la bague composée (I). Option « Quick Delivery » : effet non établi.
- **Livraison** : le panier dit « Shipping cost will be calculated during checkout » alors qu'un bandeau voisin dit « Free International Delivery … free fully insured worldwide delivery with the leading courier services » (V). Les deux messages se contredisent à l'écran.
- **Retours** (page `/returns-and-exchanges`, lue par l'outil de lecture) : remboursement complet « for any reason » jusqu'au 30e jour après réception, pièce non portée, emballage et certificats d'origine ; échange du dessin de la bague composée (« create your own ring ») dans les 30 jours avec différence de prix à payer ; les pièces « bespoke » (non vendues sur le site) : 7 jours, pierre remboursée, monture environ 50 % ; retour en Royal Mail Special Delivery, remboursement visé sous 10 jours (V). La bague composée en ligne n'est donc **pas** exclue du retour.
- **Garantie** : garantie constructeur à vie sur les bagues et bijoux sertis achetés sur le site, sous réserve d'un contrôle gratuit chaque année ; pas d'assurance fournie, assurance conseillée (V).
- **Finance** (page `/learn/finance-information`) : Omni ; 0 % sur 6 ou 12 mois, 9,9 % TAEG sur 18, 24 ou 36 mois ; articles de £500 à £20 000, acompte de 20 à 50 % (V).
- **Moyens de paiement affichés** : non vus avant le paiement (V : absents du panier).

## Confiance et service

- **Certificats** : GIA (naturel) et IGI (synthétique) vus sur les fiches (V). Un PDF de certificat d'établissement est lié en pied de page (`/Steven_Stone_Certificate_653674.pdf`), non ouvert (V pour le lien).
- **Libellé du synthétique** : « Lab Grown » (bouton de type, cartes « Lab Grown »), jamais « synthetic » dans le parcours (V). Texte de l'assistant : « Lab Grown Diamonds and Natural Diamonds are identical in appearance. Where they differ is in price and rarity. » (V)
- **Avis** : liens vers Feefo, Google Maps, Facebook (V pour les liens), non ouverts.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande sur le parcours (V pour le parcours). Les photos de la bague sont des rendus propres (V).
- **Service** : téléphone gratuit 0800, WhatsApp, discussion, consultation sur rendez-vous, lien « Locations » (V). Adhésion à la National Association of Jewellers : lien `naj.co.uk` en pied de page (V pour le lien).
- **Offres croisées** : « 10 % off your wedding band » pour qui achète la bague de fiançailles au même endroit (V).
- **Langues et devises** : anglais, livres sterling, TVA 20 % incluse (V). Pas de sélecteur de langue ni de devise repéré (V).

## Points forts à retenir pour JR Diamond

1. **Prix décomposé par ligne et total TTC avec la TVA** au récapitulatif (monture, pierre, hors TVA, TVA, total). Preuve : `/create/engagement-ring/review/PR-00207/…` : 780 + 213 = 827,50 + 165,50 = 993,00 (V).
2. **Date de livraison calculée à chaque étape**, avec mention « subject to your selected diamond » sur la monture. Preuve : fiche `PR-00207` et détail de pierre (V). Répond à la méfiance « le délai glisse sans prévenir » relevée dans les forums.
3. **Le métal change l'adresse, le prix et la série de photos**, donc la configuration se partage par lien à l'étape 1. Preuve : `…/14ct-white-gold` £685 contre `…/18ct-yellow-gold` £815 (V).
4. **Fiche de pierre complète** : numéro de certificat, table, profondeur, mesures en mm, 4 C expliqués en clair. Preuve : « Details » de la carte 0,24 ct D VVS2 (V). À reproduire pour la marquise de JR Diamond.
5. **Assistant « Diamond Genius »** : de 500 000 pierres à 3 en quelques clics. Preuve : fenêtre d'accueil de l'étape 2 (V).
6. **Mise en garde honnête sur l'or blanc** (placage qui s'use, platine conseillé) au moment du choix. Preuve : texte affiché sur la fiche 18 ct blanc (V). Utile pour le guide « or 14 ou 18 carats ».
7. **Retour 30 jours aussi pour la bague composée en ligne**, avec échange de design possible. Preuve : page `/returns-and-exchanges` (V). Point de comparaison pour la réponse de l'avocat israélien sur le « sur mesure ».
8. **Finance affichée dans le récapitulatif et le panier** (« from £25.43 per month »). Preuve : `/cart` (V).
9. **Parcours mobile complet** sans défilement horizontal, jusqu'au panier. Preuve : essai iPhone 13, aucun dépassement horizontal aux trois étapes (V).

## Défauts observés

- **Aucun visuel 3D, 360° ou sur la main** : des photos de rendu fixes, une série par métal (V). Les photos de 14 ct blanc et de platine ont le même nom de fichier de série « pt » (I : même rendu pour deux métaux).
- **Étape 2 en 404 si on ouvre l'adresse directement** (V) : pas de lien de partage à cette étape.
- **Le total « 0 of 0 » s'affiche quelques secondes pour les synthétiques** avant de se corriger (V), ce qui ressemble à une panne.
- **Prix de carte trompeur** (« 18ct Rose Gold & Platinum From £650 » alors que ce métal coûte £815) (V).
- **Frais de livraison contradictoires** dans le panier (« calculés au paiement » contre « Free International Delivery ») (V).
- **Pas de gravure, pas de choix de carat de métal, pas de cote** : on ne choisit que la monture, la pierre et la taille (V).
- **Premier visuel lent sur la liste** : 9,4 s (ordinateur) et 9,1 s (iPhone) avant qu'une image soit affichée, les cartes restant en gris pendant ce temps (V).
- **Texte hérité** : pied de page « © 2025 » en novembre 2026 (V).

## Mesures

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste des montures `/create/engagement-ring/` | premier visuel 9,4 s | premier visuel 9,1 s |
| Fiche de monture `PR-00207` | 4,2 s et 4,75 s (deux essais) | 4,4 s |
| Étape 2 (après « Choose This Setting ») | 6 s pour la page et la fenêtre « Diamond Genius » | atteinte, filtres repliés |
| Du parcours à l'ajout au panier (iPhone, automatique) | — | 63 s au total, avec les attentes volontaires |

Mesure : délai entre l'ouverture de l'adresse (`domcontentloaded`) et la première image de plus de 250 px visible dans l'écran. Connexion de l'environnement d'audit, via proxy : valeurs relatives (V pour la méthode).

## Limites de l'audit

- **Chat ouvert une fois** : le bouton « Chat with our Experts » de la fiche a été cliqué ; un widget de discussion s'est chargé (2 `iframe`). Aucun message n'a été saisi. C'est contraire à la consigne de ne pas ouvrir de conversation : notée ici.
- **Non testés** : curseurs de carat, couleur, pureté, taille et prix ; icônes de forme de l'étape 2 ; « Compare » (effet non établi) ; « Quick Delivery » (effet non établi) ; « Lab Grown Fancy Colour » (total non lu) ; miniatures de la galerie ; volets « Finance Information » et « Lifetime Warranty » de la fiche ; boutons « Change/View » du récapitulatif ; code promo ; paiement.
- **Assistant « Diamond Genius »** : les deux premières étapes (forme, type) ont été lues ; les suivantes n'ont pas été parcourues (le test automatique a perdu la fenêtre).
- **Panier** : une seule bague (Compass platine, 0,24 ct IGI D VVS2, taille L) a été ajoutée ; aucune autre combinaison n'a été mise au panier. Le panier n'a pas été vidé.
- **Une seule monture explorée à fond** (Compass) ; les autres ont été lues dans la liste et par leurs adresses.
- **Prix** : relevés pendant la période Black Friday, mais aucune remise n'était visible sur ce site (V : aucune mention de remise).
- Pages de politique (`/returns-and-exchanges`, `/warranty`, `/learn/finance-information`) lues par l'outil de lecture, dont le cache peut dater de quelques semaines (dates d'acquisition du 30/09 au 24/11/2026).

## Sources

Pages ouvertes dans Chromium (24/11/2026) :
- https://www.stevenstone.co.uk/create/engagement-ring/
- https://www.stevenstone.co.uk/create/engagement-ring/product/PR-00207/round-brilliant/18ct-rose-gold-&-platinum (et variantes `…/platinum`, `…/14ct-white-gold`, `…/18ct-yellow-gold`, `…/14ct-rose-gold-&-platinum`, `…/18ct-rose-gold`, `…/18ct-white-gold`)
- https://www.stevenstone.co.uk/create/engagement-ring/PR-00207/round-brilliant/platinum/gemstones (404 en entrée directe)
- https://www.stevenstone.co.uk/create/engagement-ring/review/PR-00207/round-brilliant/platinum/340311628
- https://www.stevenstone.co.uk/cart

Pages lues par l'outil de lecture :
- https://www.stevenstone.co.uk/returns-and-exchanges
- https://www.stevenstone.co.uk/warranty
- https://www.stevenstone.co.uk/learn/finance-information

Contrôle des règles d'accès : `robots.cjs` sur la liste, la fiche, le panier et les pages de politique (AUTORISÉ).
