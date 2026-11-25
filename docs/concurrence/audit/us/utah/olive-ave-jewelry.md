# Audit : Olive Ave Jewelry

- **Site** : Olive Ave Jewelry, https://oliveavejewelry.com (page de départ : https://oliveavejewelry.com/engagement-rings/best-selling?ringBuilderStart=setting)
- **Date** : 15/11/2026 (date imposée par la consigne ; l'horloge de la machine indiquait le 25/11/2026 et les avis du site sont datés jusqu'au 23/11/26)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright), locale en-US
- **Statut** : **partiel**. Les étapes 2 (choix de la pierre) et 3 (revue de la bague) du constructeur sont sous `Disallow: /shop/stone-selection/` et `/shop/ring-review/` du robots.txt : non ouvertes. Le panier (`/shop/cart`) n'a pas été ouvert (voir « Limites »).
- Légende : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options (fiche réglage, étape 1 « Select Your Setting ») | Source |
|---|---|---|
| Départ | `?ringBuilderStart=setting` ouvre la liste « Best Selling Engagement Rings » (20 réglages), filtres par style (10 liens), tri, filtre « Arrives by Christmas » | [V] page de départ |
| 1. Réglage | Fiche `/shop/products/persephone?variant=22998` : métal (3), forme de la pierre (10), largeur de corps (2), gravure, aperçu par carat (4 repères) | [V] |
| 2. Pierre | Bouton « SELECT THIS SETTING » mène à l'étape « Select Center Stone » (`/shop/stone-selection/…`) | [V] libellé ; adresse [I] ; **non ouverte, INTERDIT** |
| 3. Revue | « Review Completed Ring » (`/shop/ring-review/`) | [V] libellé ; **non ouvert, INTERDIT** |
| Panier | Lien « Cart » `/shop/cart` | non ouvert |

Le fil d'étapes affiché sur la fiche : « 1 Select Your Setting, 2 Select Center Stone, 3 Review Completed Ring » (et un libellé « Select Ring Size »).

## Contrôles vérifiés

Page de départ : 179 contrôles visibles sur ordinateur, 150 sur iPhone (liste JSON du script `controls.cjs`). Fiche Persephone : relevé complet par script.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal : 14K Yellow / White / Rose Gold | pastilles (radio) | change `?variant=` (22998, 22978, 22958) ; image de galerie à vérifier visuellement | inchangé, 1 200 $ | OK [V] |
| Forme : Duchess, Marquise, Elongated Cushion, Emerald, Lozenge, Oval, Pear, Radiant, Round, Duchess Step | 10 radios | le texte « Shown in … with X CT … Center Stone » change (ex. Emerald : 3,00 CT ; Pear : 1,44 CT ; Round : 1,52 CT en 4 mm) ; nouvelle `variant` à chaque clic | inchangé, 1 200 $ | OK [V] ; Marquise : texte « Shown in » vide un instant |
| Largeur : 2.6MM | radio | variante 22966 | 1 200 $ | OK [V] |
| Largeur : 4MM +$300 | radio | variante 22965 | **1 500 $** (+300) | OK [V] |
| Add Engraving (+$80) | bouton | ouvre un champ texte « Enter your engraving… » | +80 $ annoncé ; total non relu | OK [V] ; non rempli (aucune saisie) |
| Aperçu par carat : 0.75 / 1.20 / 1.75 / 2.50 CT | repères d'un curseur 0–3 | clic et valeur forcée : le texte « Shown in … 1.50 CT Marquise » ne change pas | aucun | effet visuel non constaté [V] ; cause inconnue |
| Curseur d'images (range 0–3) | slider | présent ; effet non relevé | – | non évalué |
| Galerie : 5 « Zoom image n of 5 » | boutons | non cliqués | – | non testé (zoom) |
| Vidéo « Pause video : PersephoneOval-12x6mmYG-LD-5.26-6.mov » | bouton | une vidéo de la bague existe dans la galerie | – | présence [V], lecture non testée |
| SELECT THIS SETTING | bouton submit | passe à l'étape 2 (adresse interdite) | – | **non cliqué : stone-selection INTERDIT** |
| Accordéons DESCRIPTION, CUSTOMIZATION, SHIPPING, WARRANTY & RESIZING POLICY, SATISFACTION GUARANTEE, JEWELRY CARE GUIDE | boutons | s'ouvrent, texte lu (voir plus bas) | – | OK [V] (testés sur iPhone) |
| Drop a Hint | bouton | non testé (ouvre probablement un formulaire d'e-mail) | – | non testé |
| Contact Us / mailto hello@oliveavejewelry.com | liens | non suivis | – | non testé |
| « Delivery estimate » sur certaines vignettes | boutons | non testés | – | non testé |
| Pastilles de métal des vignettes (3 par ring) | div | non cliquées | – | non testé |
| Prev/Next (carrousels « Pairs Well With », « You May Also Like ») | boutons | non testés | – | non testé |
| Recherche (champ + bouton), Cart, Locations, Request An Appointment | champ, liens | non utilisés | – | non testé (aucune saisie) |
| Bouton « Text us » (texto) | widget | n'a pas été ouvert (aucune conversation) | – | présence [V] sur la capture |
| Bandeau « Your Privacy Choices » | bouton | non ajusté | – | présent |
| Pied de page : Shipping & Returns, Resizing, Warranty, Stone Warranty, Insurance, Flexible Payment, Track Your Order, etc. | liens | pages lues (voir plus bas) | – | OK [V] |

## Options disponibles

- **Métal** : 14K jaune, blanc, rose ; pas d'autre titre ni de platine sur la fiche relevée [V]. Une vignette (Luna) ne propose que jaune et blanc [V].
- **Forme de pierre de la fiche Persephone** : Duchess, Marquise, Elongated Cushion, Emerald, Lozenge, Oval, Pear, Radiant, Round, Duchess Step [V].
- **Largeur de corps** : 2,6 mm, 4 mm (+300 $) [V].
- **Gravure** : texte libre, +80 $ ; les pièces gravées ne sont pas reprises [V].
- **Styles du catalogue** : All Engagement, Wedding Set, Solitaire, Accented Solitaire, Halo, Three Stone, Side Cluster, Hidden Halo, East West, Asymmetrical [V].
- **Pierres** (d'après les pages éducatives et la garantie) : diamants de laboratoire, diamants naturels, moissanite « Always », pierres de couleur [V texte] ; la grille de pierres elle-même est derrière l'étape interdite, non vue.
- **Taille de doigt** : « Select Ring Size » apparaît dans le fil d'étapes ; menu non relevé.

## Prix, délais, retours, garanties

- **Prix affiché** : « Setting price only » (Persephone 1 200 $) ; la pierre s'ajoute à l'étape suivante, non vue. Catalogue des 20 vignettes : de 850 $ (Clementine) à 2 000 $ (Birdy) [V]. Décomposition du prix total : non observable.
- **Paiement échelonné** : « Choose up to 6 payments at 0 % interest » sur la fiche, « jusqu'à 12 paiements » dans le bandeau ; Shop Pay Installments (États-Unis, Canada, Royaume-Uni) [V] /flexible-payment-options.
- **Délai** : « Estimated delivery : Dec 23rd – Dec 30th » (fiche) ; « each product is made to order and will ship in approximately 3-4 weeks » ; envoi FedEx avec signature, suivi, assurance [V]. Bandeau : « order by 12/18 for guaranteed Christmas delivery ». Livraison gratuite aux États-Unis [V].
- **Retours** : 30 jours, sauf pièces sur mesure, gravées ou endommagées ; étiquette prépayée assurée ; droit de rétractation de 14 jours pour l'UE (retour à la charge du client) [V] /support/shipping-and-returns.
- **Garantie** : 60 jours limitée (dents tordues, pierres d'accent manquantes, défauts de fabrication, nettoyage) ; plan Jewelers Mutual par 3 ans ou à vie, ajoutable pendant la construction ; pierres « Always » (moissanite, gemmes de laboratoire) garanties à vie contre casse, éclat, décoloration ; gemmes naturelles exclues [V].
- **Mise à taille** : une gratuite la première année (10 à 14 jours ouvrés + transport) ; 60 $ de retour pour l'international ; refabrication facturée pour bagues restreintes [V].

## Confiance et service

- **Avis** : 4,95/5 sur 1 431 avis (1 381 à 5 étoiles) ; la fiche Persephone n'a pas d'avis propre [V].
- **Showrooms** : Arizona et Utah, prise de rendez-vous, rendez-vous virtuel [V] ; entreprise familiale depuis 1981 (The Diamond Consortium) [V texte du site].
- **Libellé du synthétique** : « Lab Grown », « Lab Created », « Man-Made » ; « Lab diamonds are conflict free » ; 30 à 40 % moins chers en moyenne ; certificat de laboratoire annoncé pour tout diamant de laboratoire [V] /learn/lab-vs-natural-diamonds.
- **Langues, devises** : anglais, dollars ; page de retrait UE [V].
- **Suivi de commande** : formulaire « Track Your Order » (numéro + e-mail) [V]. Preuves d'atelier (photos ou vidéos de fabrication) : non vues.
- **Services** : texto, rendez-vous, guide de style (Typeform), réparation, assurance bijoux, guides (4 C, tailles, mm→carat) [V liens].

## Points forts à retenir pour JR Diamond

1. **Prix du réglage affiché par option**, avec supplément chiffré visible au clic (4 mm : +300 $ ; gravure : +80 $) : preuve, le prix passe de 1 200 à 1 500 $ au clic [V].
2. **Configuration dans l'adresse** : chaque choix de métal, forme et largeur change `?variant=` (22998, 22978, 22958, 22965…), donc le lien est partageable [V].
3. **Estimation de livraison datée** sur la fiche (« Dec 23rd – Dec 30th ») et bandeau de date limite avant Noël avec compte à rebours [V].
4. **Aperçu de la forme avec carat représentatif** (« Shown in … with 2.00 CT … ») [V].
5. **Vidéo de la bague dans la galerie** et photos portées [V : bouton « Pause video », capture].
6. **Bouton « Drop a Hint »** et lien d'assurance : services émotionnels et protection [V présence].
7. **Politique d'engravure et de sur-mesure claire** (non retournable, annoncée avant l'achat) [V].

## Défauts observés

- Étape décisive (pierre) et revue finale inaccessibles à un robot : impossible de vérifier la décomposition du prix total [V robots.txt].
- Le repère carat (0,75 à 2,50 CT) ne modifie pas le texte « Shown in … 1.50 CT » lors de mes essais ; effet incertain [V].
- Les images de la galerie sont chargées en différé (premiers `src` factices dans le DOM) ; la vignette de métal d'une carte n'indique que « 14K Yellow Gold » en texte [V].
- Retour : gravure et sur-mesure exclus ; le prix du réglage seul (« setting only ») peut sembler incomplet avant l'étape 2 [V].
- L'ouverture de la fiche déclenche le préchargement de ressources du panier (`/shop/cart.json`, JS de la page panier), simple effet du préchargement du site, non lié à un clic [V requêtes observées].

## Limites de l'audit

- Étapes 2 et 3 (`/shop/stone-selection/`, `/shop/ring-review/`) interdites par robots.txt : non ouvertes ; filtres de pierres, certificats, tailles de doigt et carat réel non audités.
- Panier : robots.txt interdit `/shop/cart/` ; l'outil robots.cjs a répondu AUTORISÉ pour `/shop/cart` (sans barre finale), mais par prudence la page et « Add to cart » n'ont pas été ouverts. Frais de livraison, moyens de paiement du panier : non relevés.
- Non testés : zoom de galerie, lecture vidéo, « Drop a Hint », « Delivery estimate », gravure remplie, chat texto.
- Temps d'apparition du visuel principal (première image de plus de 300 px dans la fenêtre) : **1,97 s sur ordinateur, 1,51 s sur iPhone** [V, une mesure chacune, connexion de la machine d'audit].
- Aucun formulaire envoyé, aucun compte, aucun paiement. Une page toutes les 2 s au plus.

## Sources

- https://oliveavejewelry.com/engagement-rings/best-selling?ringBuilderStart=setting
- https://oliveavejewelry.com/shop/products/persephone?variant=22998
- https://oliveavejewelry.com/support/shipping-and-returns, /support/warranty, /support/stone-warranty, /support/resizing-policies
- https://oliveavejewelry.com/flexible-payment-options, /learn/lab-vs-natural-diamonds, /track
- https://oliveavejewelry.com/robots.txt
- Captures et JSON : scratchpad `audit/us/olive-ave-jewelry/` (hors dépôt)
