# Audit : Heiser's Jewelry (Aberdeen, Dakota du Sud)

- **Site** : Heiser's Jewelry
- **Adresse** : https://www.heisersjewelry.com (départ : https://www.heisersjewelry.com/ringsettings)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) ; affichage iPhone 13 pour la liste des montures seulement
- **Statut** : **partiel**. La page `/cart` est interdite par robots.txt (`Disallow: */cart`) : le panier n'a pas été ouvert, le bouton « Choose This Ring » a été cliqué avec les adresses `/cart` et `/checkout` bloquées dans le navigateur (aucune n'a été appelée). L'étape des pierres affiche « 0 diamonds found » : le parcours s'arrête avant « Complete Ring ».
- Robots.txt lu : `Crawl-delay: 2` respecté (2 s au moins entre deux pages) ; `?sortSpec=` interdit en adresse de page (jamais ouvert ; le tri passe par l'API, voir plus bas).
- Marques : **V** vérifié, **I** inféré, **S** supposé.

## Parcours

Plateforme Punchmark (V : pied de page « POWERED BY: PUNCHMARK »).

| Étape | Options (V) |
|---|---|
| 1. Choose a Ring (`/ringsettings`) | 7 styles (Solitaire, Side Stone, Three Stone, Halo, Pave, Antique, Bypass) ; métaux : All Metals, White Gold, Yellow Gold, Platinum, Rose Gold ; curseur de prix « Setting price range » ; « Can be set with » (8 formes + Princess) ; tri (5) ; vue grille ou liste ; « Clear Filters » ; 24 cartes par page |
| Fiche (`/ringsettings-details/engagement-ring-settings/<nom>/<id>`) | 5 vues avec zoom, Ring Size (3 à 10 avec supplément), « Choose This Ring », « Add to Wish List », « Shipping », « Returns », détails produit, avis |
| 2. Choose a Diamond (`/ringsettings-diamonds?diamondshape=…&carat=…`) | Natural / Lab-Grown, « What's the difference? », formes (10), prix, carat, coupe, couleur, pureté, « Advanced », 20/40/60/120 par page, recherche par SKU, comparaison |
| 3. Complete Ring (`/ringsettings-complete`) | Non atteint (aucune pierre) |
| Panier | **Interdit par robots.txt** : non ouvert |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Styles (7) | lien (javascript) | Se cumulent : chaque clic ajoute un type à la requête (`settingType=20,10,…`) | prix de monture | OK (V), comportement cumulatif |
| Métaux (All, White, Yellow, Platinum, Rose) | lien | Cumulent aussi (`materials=WhiteGold,YellowGold,Platinum,RoseGold`) ; la liste change (ex. blanc seul : premiers prix 1 788,72 $ ; 4 262,73 $…) | prix par métal | OK (V) |
| Setting price range (min, max) | curseur | Présent (`price=0-14999` en requête) ; non manipulé | — | non testé |
| Can be set with | liste | Round, Princess, Emerald, Asscher, Cushion, Oval, Pear, Marquise (liste lue) | — | affichage vérifié ; choix de forme non testé |
| Sort by (Default, Featured, High to Low, Low to High, Newest) | select | Chaque choix envoie `sortSpec=…` à l'API (newest, lowtohigh, hightolow, featured) | — | requête OK (V) ; effet sur l'ordre visible non confirmé (les 4 premiers prix lus n'ont pas changé : voir limites) |
| Clear Filters | bouton | Après 12 clics de filtres, n'a retiré qu'un seul type (`settingType=21,3,10,9,16,17`, Solitaire retiré) | — | comportement inattendu (V, 1 essai) |
| View grille / liste | icône | Présent ; non testé | — | non testé |
| Previous / Next | bouton | Présent ; non testé | — | non testé |
| Cartes de monture | lien | Ouvre la fiche, ex. `/…/bezel-set-three-stone-engagement-ring/847497` | 6 395,10 $ | OK (V) |
| Click to zoom (5 vues) | lien | Ne s'est pas ouvert à mon clic Playwright (aucune fenêtre repérée) ; liens vers `cdn.jewelryimages.net/.../CONFIG.11387977_3.jpg` | — | effet non confirmé |
| Go to slide 1 à 5 | bouton | Présents ; non cliqués | — | non testé |
| Ring Size (3 à 10) | select | Supplément affiché par taille : 3 : +22 $, 7 : +19 $, 7,5 : +28 $, 8,5 : +37 $, 9,5 : +46 $, 10 : +46 $. Le prix principal suit : 6 395,10 $ → 6 414,10 $ (7) → 6 441,10 $ (10) → 6 417,10 $ (3) | oui | OK (V) |
| Choose This Ring | bouton | Ouvre `/ringsettings-diamonds?diamondshape=cushion&carat=6.42-8.67` (filtre dérivé de la monture : cushion 11x11, 7,5 ct) ; la bannière affiche « Ring size: 3 » | — | OK (V) |
| Add to Wish List | lien | Présent ; non cliqué (liste de souhaits liée à un compte) | — | non testé |
| Shipping / Returns (onglets) | lien | Mon clic n'a pas ouvert de fenêtre lisible (le texte lu était le menu) | — | effet non confirmé ; politique lue sur sa page |
| Toggle Shopping Cart | bouton | Présent ; non cliqué (cart interdit) | — | non testé : robots.txt |
| Toggle My Account / Login / Sign up | lien | Formulaire de connexion visible ; non rempli | — | non testé : compte |
| Natural / Lab-Grown | lien | Les deux onglets répondent « 0 diamonds found » avec le filtre rond 0,9 à 1,1 ct et avec le filtre dérivé de la monture | — | liste vide (V) |
| What's the difference? | lien | Aucune fenêtre repérée (mon script a lu le formulaire de connexion) | — | effet non confirmé |
| Formes de pierre (10), prix, carat, coupe, couleur, pureté, Advanced, par page, SKU | divers | Affichés ; non exploitables (0 résultat) | — | non testés : résultat vide |
| Make an Appointment / Schedule | lien | Formulaires (jour, heure, nom, e-mail, téléphone, captcha) ; non remplis | — | non testé : formulaire |
| Write a Review | bouton | Présent ; non utilisé | — | non testé : formulaire |
| Subscribe (newsletter) | formulaire | Présent ; non rempli | — | non testé : formulaire |
| Bannière cookies | bouton | « Accept all » / « Decline all » ; fermée | — | OK (V) |

## Options disponibles

- **Styles** : Solitaire, Side Stone, Three Stone, Halo, Pave, Antique (« Vintage » dans le menu), Bypass (V).
- **Métaux** : blanc, jaune, rose, platine (V). Le titre (14 k, 18 k) n'est pas un filtre : il est dans la fiche (« 14K Rose Gold », V).
- **Taille de doigt** : 3 à 10 par demi-taille, avec supplément (V).
- **Origine** : Natural / Lab-Grown (V, onglets). Libellé : « Lab-Grown » (menu « Lab Grown Diamonds »).
- **Pierres** : 10 formes, prix, carat, coupe (Fair à Excellent), couleur (L à D), pureté (SI2 à F), certificat « Lab » en colonne (V, libellés).
- **Absents** : gravure, choix des griffes, vue 360, 3D, essayage, AR (V).
- **Services** : consultation, resizing, remounting, gravure, bagues sur mesure avec « Ring and Band Builder » et « Custom Gallery » (V, menu).

## Prix, délais, retours, garanties

- **Prix des montures** : affichés au centime (ex. 6 395,10 $ ; 1 758,15 $), sans pierre (« CENTER STONE NOT INCLUDED », V). Premières cartes de la liste : 1 311,30 $ à 7 013,01 $ (V, grille ordinateur et iPhone, 248 montures).
- **Décomposition** : aucune (ni métal ni façon) ; seul le supplément par taille de doigt est détaillé (V).
- **Délai** : « Availability: Ships in 7-10 Business Days » sur la fiche (V). Aucun délai pour la bague complète.
- **Retours** : 30 jours, retour en boutique ou par la poste aux frais du client (assurance demandée) ; « Personalized, resized, or custom pieces are not eligible for returns » ; remboursement ou avoir (V, `/return-policy`).
- **Garanties** : Lifetime Diamond Guarantee (contrôle au moins tous les 6 mois, perte de pierre par mauvais usage exclue) ; Lifetime Diamond Upgrade pour les diamants naturels (échange vers une pierre plus grande ou meilleure, sans limite) (V).
- **Financement** : Affirm, carte Heiser's, layaway sans intérêt (V, `/financing-options`).
- **Paiement affiché** : non vu (panier interdit).
- **Prix des pierres** : non vérifiable (liste vide).

## Confiance et service

- **Avis** : fiche monture : 4,9 sur 5 (note de l'ensemble) avec 6 avis datés (de avril 2025 à octobre 2026) ; « 84 % des acheteurs récents » ; bouton « Write a Review » (V). Les avis sont ceux du magasin, pas de la monture.
- **Téléphone** (605) 225-6705 en haut de chaque page ; adresse 506 South Harvard Street, Aberdeen ; carte Google (V).
- **Atelier** : « Father & Sons », page `/staff`, jusqu'à « ils font leur propre travail dans leur atelier » dans un avis client (V, citation d'un avis, non vérifiée par l'atelier). Rendus 3D ou modèles en cire proposés pour le sur mesure (V, page Custom).
- **Preuves de fabrication** : galerie `/pages/custom-gallery` annoncée ; non lue. Aucun suivi de commande vu.
- **Langue / devise** : anglais, dollars (V).
- **Origine des images de montures** : dossiers `galleries/stuller_inc/CONFIG.…` et marque « Ever & Ever » sur la fiche (V) ; modèles de catalogue d'un fournisseur (I).

## Points forts à retenir pour JR Diamond

1. **Supplément de taille de doigt détaillé par taille, prix recalculé aussitôt** : 3 : +22 $, 7 : +19 $, 10 : +46 $ ; total 6 395,10 → 6 414,10 → 6 441,10 $ (V, menu `Ring Size` de la fiche 847497).
2. **Passage de la monture à la pierre avec un filtre déjà réglé sur la monture** (forme et plage de carat dérivées de la pierre prévue) et rappel de la taille de doigt dans la bannière : `?diamondshape=cushion&carat=6.42-8.67`, « Ring size: 3 » (V).
3. **Avis datés et note globale sur la fiche** (4,9 sur 5, 6 avis, V) : preuve sociale au point de décision.
4. **Politique de retour à 30 jours explicite, avec exception « Personalized, resized, or custom »** (V) : exemple d'exception sur mesure déjà formulée.
5. **Garantie à vie avec contrôle périodique et échange à vie des pierres naturelles** (V) : argument de réassurance.
6. **Délai affiché par fiche** (« Ships in 7-10 Business Days », V).
7. **Bouton « Add to Wish List » et page de souhaits** (V : présents dans les contrôles), utile pour revenir sur une configuration.
8. **Pas de blocage ni de redirection vers une autre application** : tout se fait sur le domaine du joaillier (V).

## Défauts observés

- Étape des pierres vide : « 0 diamonds found » en naturel et en laboratoire avec 2 jeux de filtres (V). Le parcours n'aboutit pas pendant l'audit.
- Filtres de style et de métal cumulatifs sans retour visuel clair ; « Clear Filters » n'en retire qu'un (V, 1 essai).
- Premiers prix lus identiques après plusieurs changements de filtre (V) : lecture d'un rafraîchissement lent ou d'un tri qui ne s'applique pas.
- Zoom, onglets Shipping et Returns, « What's the difference? » sans effet visible à mes clics (V ; peut venir de mon outil, non tranché).
- Prix de monture seul ; aucun prix total de bague ; aucune décomposition (V).
- Aucune gravure, aucun choix de griffes ni de largeur (V).
- Liste lente : voir mesures ci-dessous. Aucune faute de langue repérée, sauf « Lifetime Diamond **Gaurantee** » dans le menu et « **Lilfetime** » dans le pied de page (V).

## Limites de l'audit

- **Temps d'apparition** (1 mesure chacun) : premières images de montures **8,0 s** (ordinateur) et **7,3 s** (iPhone) à partir de `/ringsettings`, texte « loading rings » visible d'abord (V). La fiche monture a été capturée à 4 s environ sans mesure chiffrée.
- Panier interdit par robots.txt : ni récapitulatif, ni frais de livraison, ni moyens de paiement relevés. Les requêtes `/cart` et `/checkout` ont été bloquées côté navigateur pour éviter tout appel.
- Aucun bouton de paiement ni d'ajout au panier cliqué. « Choose This Ring » n'ajoute pas d'objet au panier (aucune requête panier, V) mais enregistre la monture pour l'étape suivante.
- Non testés : curseur de prix, formes de pierre, liste d'envies, changement d'image par miniature, affichage iPhone de la fiche et des pierres, pages « Custom Gallery », « Father & Sons », « Reviews ».
- Domaines tiers observés au chargement : Affirm, Typekit, Google ; aucune requête de ma part vers leurs adresses autres que celles chargées par la page.
- Le nombre de montures (248) est celui du 15/11/2026.

## Sources

- https://www.heisersjewelry.com/ringsettings ; `/ringsettings-details/engagement-ring-settings/bezel-set-three-stone-engagement-ring/847497` ; `/ringsettings-diamonds` (lues le 15/11/2026).
- https://www.heisersjewelry.com/return-policy ; `/services/lifetime-diamond-guarantee` ; `/services/lifetime-diamond-upgrade` ; `/financing-options` ; `/pages/custom-jewelry` (lues).
- https://www.heisersjewelry.com/robots.txt (Crawl-delay 2 ; `Disallow: */cart`, `*?sortSpec=`).
- Requêtes observées : `/api/async.php?t=grid&m=fetch&a=get_results&…` (montures) et `t=diamonds&m=getDiamonds` (pierres).
