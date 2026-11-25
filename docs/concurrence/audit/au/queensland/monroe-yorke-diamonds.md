# Audit : Monroe Yorke Diamonds (Queensland)

- **Site** : Monroe Yorke Diamonds, https://www.mydiamonds.com.au (salle de Brisbane : Eagle Street, sur rendez-vous ; aussi Sydney, Melbourne, Perth)
- **Page de départ** : https://www.mydiamonds.com.au/pages/ring-builder, qui redirige vers `/collections/engagement` (vérifié, 200)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026 : bandeau « Black Friday jusqu'au 30 novembre »)
- **Appareils** : Chromium ordinateur 1440×900 (locale en-US) ; émulation iPhone 13 (accueil, fiche de monture)
- **Statut** : **partiel**. Parcours monture, diamant, taille, récapitulatif exploré jusqu'à l'étape 4 ; ajout au panier **non actionné** (voir Limites). Panier lu (vide).
- **robots.txt** : AUTORISÉ pour `/pages/*`, `/collections/*`, `/products/*`, `/policies/*`, `/cart` ; INTERDIT : `/cart/add` et `/cart/add.js` (`Disallow: /cart/`). Aucun blocage de robots (200 partout).
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V]) |
|---|---|
| 0. `/collections/engagement` (« Ring Builder » en 3 cases : 1 SETTING, 2 CENTRE DIAMOND, 3 REVIEW) | 131 bagues ; 4 styles (solitaire 27, halo 38, trois pierres 13, pierres latérales 54) ; 7 formes ; filtres forme, style, métal, prix ; tri ; concierge IA ; « Load more » |
| 1. Fiche de monture « Choose your setting » (`/products/bella-oval-…`, étape 1 sur 4) | Couleur du métal (jaune, blanc, rose, platine) ; titre 14 ct ou 18 ct ; « diamants sur le jonc » naturels ou synthétiques |
| 2. « Choose your centre diamond » | Type natural / lab grown (avec prix « à partir de » au carat choisi) ; forme (3 formes compatibles avec la monture : ovale, rond, coussin) ; taille 0,50 à 3,0 ct (9 pastilles) ; 3 « picks » du gemmologue ; « Browse more diamonds » |
| 3. « Choose your ring size » | « I know my size » (liste F à Y½, équivalent US) ; « Measure now » (outil de mesure sur téléphone, carte bancaire pour calibrer l'écran) ; « Not sure yet » (taille plus tard) |
| 4. « Review and secure » | Récapitulatif monture + diamant + taille + total ; « SECURE THIS RING » ; retenir la pierre 12 h ; poser une question ; enregistrer et partager |
| Parcours parallèle `/pages/diamond-search` | Recherche de pierres (61 002 naturelles) puis « Build Ring » ; fiche pierre `/pages/diamond?cert=…` |

## Contrôles vérifiés

Liste de départ : 343 contrôles visibles sur ordinateur, 339 sur iPhone (controls.cjs ; majorité de liens de maillage et de cartes). Tableau : tous les contrôles fonctionnels du parcours.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Jaune / blanc / rose (14 ct) | Bouton radio | Change la couleur du métal, prix inchangé [V] | 3 119 $ (liste), 2 807 $ après −10 % | Fonctionne |
| Platine | Bouton radio | Change le métal | 3 959 $ (liste) ; 3 563 $ après remise [V] | Fonctionne |
| 14 ct / 18 ct | Bouton radio | 18 ct : 3 709 $ (liste), 3 338 $ remisé [V] | +590 $ pour 18 ct | Fonctionne |
| Natural / Lab grown (« diamonds on the band ») | Bouton radio | Natural : 3 549 $ ; lab : 3 119 $ ; mention « save $430 » [V] | +430 $ pour naturel | Fonctionne |
| CONTINUE | Bouton | Passe à l'étape suivante, l'adresse porte la configuration (`?metal=yellow-14ct&type=natural&shape=Oval&ct=1&accent=Lab+Grown`) [V] | | Fonctionne |
| Natural / Lab grown (centre) | Bouton | Recalcule la pierre proposée : ovale 1 ct naturel dès 4 458 $, lab dès 1 262 $ [V] | de 1 262 $ à 4 458 $ | Fonctionne |
| Oval / Round / Cushion | Bouton | Change la pierre proposée : rond 1 ct naturel dès 4 116 $, coussin dès 2 730 $ [V] ; en rond, le prix lab 1 ct n'est pas affiché [V] | variable | Fonctionne |
| 0,50 à 3,0 ct (9 pastilles) | Bouton | 2,0 ct coussin naturel : dès 16 271 $, lab dès 2 081 $ ; « Ring complete » 19 078 $ [V] | variable | Fonctionne |
| « Best value / Most popular / Exceptional » | Carte + « CHOOSE » | 3 pierres GIA : 16 271 $, 18 072 $, 25 973 $ (2,01 ct) avec cotes en mm et prix de la bague complète [V] | +2 807 $ (monture) | Fonctionne |
| « View full details », badge « 360° » | Lien | Détail de la pierre ; fiche non ouverte depuis le parcours (voir Limites) | | Non testé |
| BROWSE MORE DIAMONDS | Bouton | « 646 diamonds at this size. Filter by colour, clarity and price » [V] | | Fonctionne |
| Tailles F à Y½ (+ US) | Liste | « Sizes F to O are included. Sizes above O … a small additional fee » ; J½ choisi [V] | supplément au-dessus de O, montant non affiché | Fonctionne |
| Measure now / OPEN THE RING SIZER | Bouton | Ouvre l'outil de mesure ; l'outil lui-même non lancé [V] | | Partiel |
| Not sure yet | Bouton | « Order now, size later » [V libellé] | | Non actionné |
| EDIT (étapes faites) | Bouton | Retour à une étape [V libellé] | | Non testé |
| SECURE THIS RING | Bouton | Non actionné : probable ajout au panier (`/cart/add` INTERDIT) [I] | 7 265 $ | Non testé (robots.txt) |
| HOLD THIS DIAMOND FOR 12 HOURS, FREE | Bouton | Non actionné : demande à données personnelles | | Non testé |
| ASK A GEMMOLOGIST / Book a call / Send a hint / Couples Folder | Boutons | Libellés relevés ; formulaires et compte non ouverts | | Non testé |
| SAVE AND SHARE THIS RING | Bouton | Non actionné | | Non testé |
| `/pages/diamond-search` : Natural, Oval, Pear, D, VS1, Excellent, 1–2 ct | Filtres | 61 002 → 44 912 (D) → 31 091 (VS1) → 3 657 (Excellent) → 476 (1–2 ct) pierres [V] ; adresse inchangée | | Fonctionne |
| LAB-GROWN / CVD / HPHT | Filtres | Le compteur est resté à 0 après le clic [V] ; cause inconnue (chargement ou pierres absentes) [S] | | Non conclu |
| Tri (4 options) | Liste | Prix croissant/décroissant, carat grand/petit [V libellés] | | Non testé |
| Share search / Save search / Build Ring | Boutons | Libellés relevés ; « Build Ring » mène à la fiche de monture [I] | | Non testé |
| Fiche pierre : STILL PHOTO / 360° HD VIDEO | Onglets | Présents ; « laser inscribed IGI 835613812 » [V lu] | 4 253 $ la pierre seule, GST inclus | Lu, non actionné |
| Fiche pierre : Share, Compare, Print, Save, Reserve (12 h) | Boutons | Présents [V lu] | | Non testé |
| Filtres de collection (forme, style, métal 10 ct à platine, prix) | Cases | Présents (131 bagues, comptes par métal) [V lu] | | Non testé |
| `/pages/custom-made-jewellery` « Design Studio » | Formulaire en 5 étapes + formulaire de contact | Type, métal, pierre, style, détails ; envoi non fait [V lu] | | Non testé |

## Options disponibles

- **Métaux** : or 10 ct (blanc, jaune, rose : 2 bagues), 14 ct (84 bagues), 18 ct (112 à 127), platine 950 (129) ; sur la fiche testée : 4 couleurs × 14 ou 18 ct [V].
- **Pierres** : naturel ou synthétique (« lab grown »), certificats GIA, IGI ou HRD ; GIA toute pierre de plus de 0,30 ct selon l'inventaire du territoire [V lu ailleurs].
- **Formes de la collection** : rond, ovale, poire, coussin, émeraude, princesse, marquise, radiant (asscher et cœur en lien) [V].
- **Styles** : solitaire, halo, halo caché, trois pierres, serti clos, nature, pierre de couleur, homme [V].
- **Tailles** : F à Y½ (australiennes avec équivalent US) ; premier réajustement offert sous 60 jours après livraison [V].
- **Non trouvés** : gravure, griffes, pavage, largeur du jonc dans le parcours ; mode 3D manipulable ou AR [V].

## Prix, délais, retours, garanties

- **Prix** : prix de monture « From » affiché (remise Black Friday −10 % sur la monture, jusqu'à −43 % sur des bagues synthétiques) ; pierre ajoutée à part ; total en direct à l'étape 4 : 3 119 $ − 10 % = 2 807 $ + pierre 4 458 $ = 7 265 $ [V]. Devise AUD, GST inclus [V].
- **Délai** : « Four to six weeks » (accueil) ; 3 à 6 semaines par pièce (page du maître joaillier) ; bandeau « Arrives before Christmas » à l'étape 3 [V] : trois annonces non identiques.
- **Retours** : 14 jours pour articles prêts à porter, étiquette intacte, avec code d'autorisation ; **ne s'applique pas aux articles sur mesure** ; pierres gravées au laser non reprises ; frais de retour à la charge du client [V `/policies/refund-policy`].
- **Garantie** : garantie à vie sur le travail ; livraison assurée gratuite en Australie ; mise à taille offerte (premier réajustement, 60 jours) [V].
- **Certificats** : GIA ou IGI, lien de vérification sur igi.org depuis la fiche pierre [V].
- **Paiement** : plans de paiement mentionnés en FAQ (réponse non lue) ; moyens de paiement non affichés dans le panier vide [V].

## Confiance et service

- Assistant IA (« concierge ») qui propose des pierres et un prix, un joaillier peut rejoindre [V].
- Appel de 15 minutes (lundi–samedi 10–19 h, heure de Brisbane) ; salles de Sydney, Melbourne, Brisbane, Perth sur rendez-vous ; mention « Four studios + video » [V].
- Dossier couples (« Couples Folder »), « Send a hint », bon de 100 $ contre inscription (dépense minimale 3 000 $) [V].
- Page « maître joaillier » : 20 ans d'atelier, membre de la JAA ; accueil : « master jeweller thirty-eight years at the bench » [V]. Aucune photo ni vidéo de fabrication de la commande ; « 3D design for your approval » pour le sur mesure [V].
- Avis clients : non relevés dans le parcours testé [V absence].

## Points forts à retenir pour JR Diamond

1. **Prix total en direct** monture + pierre + taille avec « Ring complete » sur chaque carte de pierre (preuve : 16 271 $ → 19 078 $ à 2,01 ct, `/products/bella-…?…ct=2`).
2. **Configuration dans l'adresse** (`?metal=…&type=…&shape=…&ct=…`) : partage et reprise (preuve : adresse après étape 2).
3. **Trois pierres proposées avec une raison** (valeur, populaire, exceptionnel), cotes en mm et nombre de pierres restantes (646).
4. **Écart naturel / synthétique chiffré** (« save $430 » sur la monture ; 1 ct dès 4 458 $ contre 1 262 $).
5. **Taille de doigt en trois voies** : liste, mesure sur téléphone, « plus tard », avec resize offert 60 jours.
6. **Retenue gratuite de la pierre 12 h** et appel de 15 minutes avant la visite.
7. **Fiche pierre détaillée** : 4C expliqués, proportions, rapport vérifiable (IGI 835613812).

## Défauts observés

- Délai annoncé différent selon les pages (4–6 semaines, 3–6 semaines, « avant Noël ») [V].
- Filtre synthétique de la recherche de pierres resté à 0 pierre au test (cause non établie) [V].
- Remise Black Friday sur la monture seulement ; la pierre reste au prix plein [V].
- Retour 14 jours exclu pour tout article sur mesure, et la bague configurée est de fait sur mesure [V policy] [I].
- En rond, le prix du lab 1 ct n'était pas affiché sur la pastille [V].
- Pas de 3D manipulable de la bague : photos de monture et fiche de pierre en vidéo 360° seulement [V].
- Aucun moyen de paiement ni calcul de livraison visibles avant d'« ouvrir » le panier [V].

## Limites de l'audit

- « SECURE THIS RING » et ajout au panier : non actionnés, `/cart/add` est INTERDIT par robots.txt ; récapitulatif de panier, frais de livraison et moyens de paiement non vus. Panier vide lu à `/cart`.
- Les robots.txt de Shopify indiquent aux agents d'utiliser les interfaces UCP / WebMCP pour les actions d'achat ; aucune action d'achat n'a été faite [V].
- Mesure : interface du configurateur prête en 3,0 s (ordinateur) et 1,7 s (iPhone) ; plus gros élément visible (LCP) à 0,52 s sur iPhone ; une seule mesure, sur la fiche Bella [V].
- Capture pleine page iPhone de l'accueil vide (0 octet) ; fiche testée en iPhone, parcours complet en ordinateur seulement.
- Aucun formulaire, appel, chat, compte ni outil de mesure lancé.
- Réponses FAQ (délai, plan de paiement, « si la bague ne va pas ») et avis clients non lus.

## Sources

- https://www.mydiamonds.com.au/pages/ring-builder (redirige vers `/collections/engagement`) : accueil, filtres, FAQ.
- https://www.mydiamonds.com.au/products/bella-oval-diamond-hidden-halo-engagement-ring : étapes 1 à 4.
- https://www.mydiamonds.com.au/pages/diamond-search ; https://www.mydiamonds.com.au/pages/diamond?cert=835613812
- https://www.mydiamonds.com.au/policies/refund-policy ; /pages/custom-made-jewellery ; /pages/master-jeweller ; /pages/book-a-call ; /cart
- https://www.mydiamonds.com.au/robots.txt
- Scripts et captures : scratchpad/audit/au/monroe-yorke-diamonds/ (hors dépôt).
