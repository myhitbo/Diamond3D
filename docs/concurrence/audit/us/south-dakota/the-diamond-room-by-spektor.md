# Audit : The Diamond Room by Spektor (Sioux Falls, Dakota du Sud)

- **Site** : The Diamond Room by Spektor
- **Adresse** : https://www.thediamondroom.com (départ : https://www.thediamondroom.com/apps/ringbuilder/settings/)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur est parcouru de bout en bout jusqu'à la liste de pierres, mais le site se déclare « non-ecommerce » : il n'y a ni ajout au panier ni paiement (panier vide, achat par téléphone). L'étape « Review Complete Ring » n'a pas été atteinte (aucune pierre n'a de prix ni de bouton de sélection visible).
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Parcours

Constructeur « GemFind Ring Builder » (V : pied de page « Powered by GemFind », appels à `api.jewelcloud.com/api/RingBuilder/…`, robots.txt de ce domaine : absent donc autorisé).

| Étape | Options (V) |
|---|---|
| 1. Choose your Setting (`/apps/ringbuilder/settings/`) | 19 styles (Halo, New Styles, Solitaire, Single Row, Prong Set, 3 Stone, Hidden Halo, Nature Inspired, Twisted Shank, Trellis, Fancy Shape Melee, Vintage, Multi Row, Double Halo, Diamond Scatter Rings, Cluster Sides, Promise Collection, Desire Collection, Bezel Set) ; 10 formes (Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher) ; curseur de prix 0 à 38 110 $ ; 7 métaux ; tri prix ; 12/24/48/99 par page ; grille 3 ou 4 colonnes ; pagination 46 pages ; « Save Search », « Reset » |
| Fiche monture (`/settings/<style>/<métal>-sku-<id>`) | Metal Type (5), Center Stone Size (1/2/3), Ring Size (3 à 13 par quarts), Center Diamond Type (Natural / Lab Grown), galerie 4 miniatures, zoom, vidéo, 4 boutons de contact, prix, « Add Your Diamond » |
| 2. Choose your Diamond (`/apps/ringbuilder/diamondtools`) | Onglets Mined / Lab Grown / Compare ; forme (10) ; coupe (5 crans) ; couleur D à P ; pureté FL à I2 ; carat ; « Advance Search » ; vue liste ou grille ; tri ; 12/24/48/99 ; recherche par numéro ; comparaison |
| 3. Review Complete Ring | **Non atteinte** (aucune pierre sélectionnable avec prix) |
| Panier (`/cart`) | Autorisé par robots.txt, ouvert directement : « Your cart is currently empty », produits « Example product $29 » (V) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Styles (19, ex. Halo, Solitaire, 3 Stone, Vintage) | radio | Filtre la grille : Halo 200, Solitaire 104, 3 Stone 60, Vintage 24, Promise 4, Bezel Set 1 monture (sur 547) | prix de monture, sans pierre | OK (V) |
| Formes (Round, Oval…) | radio | Round : 258 montures ; Oval : 85 (sur 547). Les autres formes non cliquées une à une | — | OK (V) pour Round et Oval ; autres non testées (même composant) |
| Curseur de prix + 2 champs | slider/texte | Présent (0 à 38 110 $) ; non manipulé | — | non testé : manipulation du curseur non automatisée |
| Métaux (14K blanc/jaune/rose, 18K blanc/jaune/rose, platine) | radio | Filtre la grille (14K jaune : 546 ; 14K rose : 546 ; 18K blanc : 547). La grille ne change pas d'image (V) | prix de grille : bas de liste inchangé (1 440 $) pour 18K blanc et platine ; 1 620 $ en 14K rose (V) | OK ; liste de prix ambiguë, voir « Défauts » |
| Records Per Page 12/24/48/99 | select | Change le nombre de cartes | — | OK (V) |
| Tri Price Low-High / High-Low | select | Seules ces 2 options. Le tri High-Low a été sélectionné sans erreur sur une liste d'une seule monture, effet non vérifié sur une liste longue | — | partiel |
| Grid view 3 / 4 colonnes | lien | Change la mise en page | — | non testé en capture |
| Pagination (« First », 2…8, 46, Next, Last) | lien | « 2 » absent du DOM après filtre à 1 résultat ; pagination non testée sur la liste complète | — | non testé |
| Save Search / Reset | bouton | Save Search : cliqué, aucune fenêtre visible, la page se recharge sur « Loading.. » ; effet non confirmé | — | effet inconnu |
| Zone de recherche « searchdidfield » | texte | Présente ; non utilisée | — | non testé : recherche `/search` à vérifier par robots.txt |
| Carte monture | lien | Ouvre la fiche (URL `/settings/solitaire/14k-white-gold-sku-7736598`, 6 s) | prix de monture 1 443 $ | OK (V) |
| Metal Type (5) | select | Change de variante : charge une autre fiche (SKU 85325-1-14KW → -2-14KR → -3-18KW → -2-18KY → -3-PL) | 14K blanc 1 443 $ ; 14K rose 1 625 $ ; 18K blanc 2 591 $ ; 18K jaune 2 313 $ ; platine 2 476 $ | OK (V) |
| Center Stone Size (1, 2, 3) | select | Valeur propre à la variante, revient à celle du SKU quand on la change ; transmise à l'étape suivante comme fenêtre de carat : 1 donne 0,95 à 1,05 ct | aucun | comportement ambigu (V pour la fenêtre, I pour la signification) |
| Ring Size (3 à 13) | select | Obligatoire : sans taille, alerte « Please Select Ring Size » et pas de passage à l'étape 2 | aucun | OK (V) |
| Center Diamond Type Natural / Lab Grown | select | Aucun changement d'image ni de prix sur la fiche monture | aucun | sans effet visible (V) ; le choix ne passe pas à l'étape 2, qui s'ouvre sur « Mined » |
| Miniatures (4) | bouton | Changent l'image principale (…14kw12, 13, 14, 11) | — | OK (V) |
| Icône zoom | icône | Aucun calque de zoom détecté dans le DOM | — | effet non confirmé |
| Icône vidéo | icône | Charge une vidéo `85325.video.white.mp4` (hébergée chez un fournisseur de montures) et 3 iframes | — | OK (V) |
| Drop A Hint | lien | Ouvre un formulaire : nom, e-mail, destinataire, motif, message, date limite. Non envoyé | — | OK (V), non soumis |
| Request More Info | lien | Formulaire : nom, e-mail, téléphone, message, préférence e-mail ou téléphone. Non envoyé | — | OK (V), non soumis |
| E-Mail A Friend | lien | Formulaire : 4 champs + message. Non envoyé | — | OK (V), non soumis |
| Schedule Viewing | lien | Formulaire : nom, e-mail, téléphone, message, lieu. Non envoyé | — | OK (V), non soumis |
| Twitter / share (Facebook) | lien | Liens de partage externes ; non suivis | — | non testé : domaines tiers |
| Add Your Diamond | bouton | Avec taille : ouvre `/apps/ringbuilder/diamondtools` (environ 8 s). Aucune requête d'ajout au panier | — | OK (V) |
| Mined / Lab Grown | onglet | Mined : 1 472 diamants (0,95 à 1,05 ct, rond) ; Lab Grown : 50 465 diamants, certificat IGI | « Call for Price » partout | OK (V) |
| Forme de la pierre (10) | radio | Le clic sur Oval a laissé la liste en rond (1 472, rond) ; effet non confirmé par mon script | — | non confirmé |
| Cut / Color / Clarity / Carat (curseurs) | slider | Présents (coupe 5 crans, couleur D à P, pureté FL à I2, carat) ; non manipulés | — | non testé |
| Advance Search | lien | Affiche deux champs texte (prix ? et carat) ; contenu non lu | — | partiel |
| Tri des pierres (Shape, Carat, Color, Intensity, Clarity, Cut, Certificate, Price) | select | « Carat » : liste triée de 0,95 en 0,95 (V) | — | OK pour Carat ; autres non testés |
| Per Page 12/24/48/99 (pierres) | select | Présent | — | non testé |
| List View / Grid view | lien | Bascule tableau (forme, carat, couleur, pureté, coupe, profondeur, table, certificat, prix) et grille de cartes avec « Add to Compare » | — | OK (V) |
| Ligne ou carte de pierre | clic | Aucune fenêtre ni page de détail ouverte (ni en liste, ni en grille, ordinateur et iPhone) | — | sans effet visible (V) |
| Compare / Add to Compare / Compare(0) | bouton | Présent ; non utilisé (aucune pierre cochée) | — | non testé |
| Search Diamond ID | texte | Présent ; non utilisé | — | non testé |
| Chat « Text us » (Podium) | bouton | Bulle de texto visible ; conversation non ouverte | — | non testé : règle « pas de chat » |
| Financing Options / Book an Appointment / Insurance / Testimonials | lien | Pages de texte ; Book an Appointment est un bouton sans lien visible | — | pages lues : voir ci-dessous |
| Newsletter (e-mail) | champ | Présent ; non rempli | — | non testé : formulaire |

## Options disponibles

- **Styles** : Halo, New Styles, Solitaire, Single Row, Prong Set, 3 Stone, Hidden Halo, Nature Inspired, Twisted Shank, Trellis, Fancy Shape Melee, Vintage, Multi Row, Double Halo, Diamond Scatter Rings, Cluster Sides, Promise Collection, Desire Collection, Bezel Set (V).
- **Formes** : Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher (V).
- **Métaux** : 14K blanc, jaune, rose ; 18K blanc, jaune, rose ; platine (V).
- **Taille de doigt** : 3 à 13 par quarts de taille (V).
- **Origine de la pierre** : Natural (Mined, certificat GIA) ou Lab Grown (certificat IGI) (V). Libellé du synthétique : « Lab Grown ».
- **Pierres** : coupe (Ideal à Fair), couleur D à P, pureté FL à I2, carat 0 à 20, prix jusqu'à 100 000 $ (requête API), vue liste ou grille, comparaison (V).
- **Absents** : gravure, choix des griffes, pavage, largeur du corps, vue 360° ou 3D, essayage sur la main, réalité augmentée (V : aucun contrôle correspondant dans la liste de contrôles).
- **Services** : « Custom Design » (page lue : modèle 3D CAO, 4 à 6 semaines), rendez-vous, financement, assurance, 4 formulaires de contact.

## Prix, délais, retours, garanties

- **Prix de monture** : 1 260 $ à 38 110 $ (curseur), affichés sans pierre (« Center stone not included ») ; format « 1,443$ » (V, fiche `/settings/solitaire/14k-white-gold-sku-7736598`). Aucune décomposition (métal, façon, marge).
- **Prix des pierres** : « Call for Price » sur toute la liste, aucune exception vue (V : 1 472 pierres naturelles et 50 465 de laboratoire). Le prix total de la bague n'est donc jamais calculable en ligne.
- **Délai** : aucun délai affiché dans le constructeur. Custom Design : « 4 à 6 semaines » (V, `/pages/custom-design`). Shipping : « si l'article n'est pas en stock, nous donnons la date de livraison prévue » (V).
- **Livraison** : « our site is non-ecommerce » ; achat par téléphone ; frais 15 à 200 $ selon article, lieu et mode ; signature adulte ; expédition lundi à jeudi ; FedEx et USPS ; colis assurés (V, `/policies/shipping-policy`).
- **Retours** : 30 jours, remboursement complet, état « like-new » ; **« Special/Custom orders are NON-returnable »** (V, `/policies/refund-policy`).
- **Garantie** : travail garanti 1 an ; diamants garantis contre la perte (centre compris) si nettoyage et contrôle tous les 12 mois ; reprise à vie des diamants Diamond Room pour une pierre supérieure (« lifetime diamond trade up ») (V, `/pages/guarantee`).
- **Financement** : carte American Gem Society émise par Wells Fargo, sur demande (V, `/pages/financing-options`).
- **Paiement affiché** : aucun (pas de paiement en ligne).

## Confiance et service

- **Téléphone** (605) 362-0008, adresse physique 3501 W 57th Street, Sioux Falls, horaires affichés (V).
- **Chat** Podium « Text us » en bas à droite sur toutes les pages (V).
- **Certificats** : colonne « Cert. » GIA ou IGI par pierre ; lien vers `stoneinfo.digital` (V).
- **Avis** : page `/pages/testimonials` existe (lien) ; non lue. Aucun avis sur la fiche monture (V).
- **Preuves de fabrication** : atelier interne mentionné (modèle CAO, coulée à la cire perdue, sertissage à la main) sur la page Custom Design ; aucune photo ni vidéo d'atelier, aucun suivi de commande (V).
- **Langue et devise** : anglais seulement, dollars (V).

## Points forts à retenir pour JR Diamond

1. **Constructeur en trois étapes lisible, avec ruban Setting, Diamond, Review** : preuve, bandeau d'étapes sur `/apps/ringbuilder/settings/` et `/diamondtools` (V).
2. **Prix de la monture change avec le métal sur la fiche** (14K blanc 1 443 $ ; 14K rose 1 625 $ ; 18K blanc 2 591 $ ; platine 2 476 $) : l'écart métal est visible, même si sans explication (V).
3. **Carat de la fiche reporté en fenêtre de recherche de pierres** (1 donne 0,95 à 1,05 ct) : la configuration suit d'une étape à l'autre (V, requête `GetDiamond?CaratMin=0.95&CaratMax=1.05`).
4. **Onglet Mined / Lab Grown dans la recherche de pierres**, avec certificat GIA ou IGI affiché par pierre (V).
5. **Obligation de choisir la taille de doigt avant de continuer** (alerte « Please Select Ring Size », V) : évite une commande sans taille.
6. **Vidéo de la monture et 4 vues miniatures** (V : fichier vidéo `85325.video.white.mp4`).
7. **Garantie claire** (1 an, perte de pierre couverte avec contrôle annuel, reprise à vie) et **retours 30 jours** (V).

## Défauts observés

- Aucun prix de pierre ni prix total : « Call for Price » partout (V). Le configurateur ne mène pas à une commande.
- Aucun panier, aucun achat en ligne ; « site non-ecommerce » (V).
- Liste de montures : le prix en grille (1 440 $) ne suit pas le métal choisi (même plus bas prix pour 18K blanc et platine) alors que la fiche donne 2 591 $ et 2 476 $ (V) ; l'affichage « à partir de » n'est pas expliqué.
- Les boutons radio de métal portent le nom `ring_shape` : les cliquer décoche la forme, les deux filtres se mélangent (V : radios `ring_shape_14K White Gold` dans le DOM ; le cumul forme + métal n'a pas été vérifié).
- Menu « Center Stone Size 1, 2, 3 » sans unité ; la valeur change toute seule en changeant de métal (V) ; sa signification (carat) est déduite de la requête (I).
- Aucune gravure, aucun choix de griffes, d'épaisseur ni de pavage : seule la monture catalogue est vendue (V).
- Ligne ou carte de pierre sans page de détail ni vidéo (V).
- « Save Search » sans retour visible (V).
- Le panier « Example product $29 » (produits fictifs du thème) est visible sur `/cart` (V).
- Chargement du visuel principal : environ 4 s (ordinateur et iPhone, voir limites).

## Limites de l'audit

- Temps d'apparition mesuré une fois par appareil : premiers prix et images de montures **4,0 s** (ordinateur, 4,2 s pour les images) et **3,9 s** (iPhone, 4,1 s), depuis la requête de page jusqu'à l'affichage de 4 images (V, 1 mesure chacun, connexion de l'espace de travail).
- Non testés : curseurs de prix, coupe, couleur, pureté et carat ; toutes les formes sauf Round et Oval ; pagination longue ; comparaison ; soumission des 4 formulaires (interdit) ; chat (interdit) ; partage Twitter ou Facebook ; pages « Testimonials », « Insurance », « Services » (non lues).
- L'étape « Review Complete Ring » n'a pas été atteinte faute de pierre sélectionnable.
- Aucun achat ni paiement tenté. Le panier a été consulté directement (autorisé par robots.txt) ; aucun bouton de paiement cliqué.
- Les requêtes de la page vers `api.jewelcloud.com` (robots.txt absent) ont été observées ; aucune adresse interdite n'a été ouverte.
- La mention « 547 settings » est celle de la page le 15/11/2026 ; le catalogue peut varier.

## Sources

- https://www.thediamondroom.com/apps/ringbuilder/settings/ (liste, filtres) ; `/settings/solitaire/14k-white-gold-sku-7736598` (fiche) ; `/apps/ringbuilder/diamondtools` (pierres).
- https://www.thediamondroom.com/cart ; `/policies/refund-policy` ; `/policies/shipping-policy` ; `/pages/guarantee` ; `/pages/financing-options` ; `/pages/custom-design` (lues le 15/11/2026).
- https://api.jewelcloud.com/api/RingBuilder/… (requêtes observées : GetMountingList, GetMountingDetail, GetDiamond, GetDiamondFilter).
- Captures et données brutes : répertoire de travail de l'audit (hors dépôt).
