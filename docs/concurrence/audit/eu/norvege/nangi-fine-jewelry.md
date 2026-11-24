# Audit : Nangi Fine Jewelry (Oslo)

- **Site** : Nangi Fine Jewelry, https://www.nangi.no/ (aussi https://www.nangi.store/, même contenu)
- **Page de départ auditée** : https://www.nangi.no/en/build-your-own (formulaire « Design your own ring »)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright). Accès depuis un réseau américain : devise par défaut USD.
- **Statut** : **partiel**. Parcours de conception, fiche produit à options, panier lus ; formulaire de devis, newsletter, réservation, boîtes « Engraving » et « Hidden Birthstone » non soumis ; prix en NOK de la fiche non relevés (devise USD par défaut) ; la 3D, la vidéo et le 360° n'existent pas sur ce site.
- **robots.txt** : `User-agent: *` / `Allow: /` (V, https://www.nangi.no/robots.txt). Aucun blocage.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Pierre centrale | « Lab grown diamond » ou « Colorful gemstone » (pierre de couleur naturelle : choix de couleurs multiples, ex. Pink, Orange) |
| 2. Forme | 14 : Pear, Oval, Emerald, Round, Cushion, Marquise, Asscher, Radiant, Baguette, Hexagon, Shield, Trillion, Princess, Other |
| 3. Carat (facultatif) | 11 tranches : 0 - 0,50 ; 0,50 - 1,00 ; … ; 4,50 - 5,00 ; 5,00+ |
| 4. Monture | 10 : Bezel, Cluster, Solitaire, Side Stones, Halo, Three Stone, Two Stone, Eternity, Half Eternity, Custom |
| 5. Métal | Yellow gold, White gold, Rose gold, Platina (or 14 k par défaut, 18 k sur demande dans la note) |
| 6. Taille de doigt | Système EU, champ libre, lien vers le guide |
| 7. Inspiration, note | Dépôt de fichier, zone de texte, champ « budget et devise » |
| 8. Coordonnées | Délai souhaité (menu de 5 choix), nom, e-mail, téléphone, « Where did you find us ? » (16 choix) |
| 9. Envoi | Bouton « REQUEST A NON OBLIGATION QUOTE » |

Parcours d'achat direct (fiche) : métal (7) → taille EU (45 à 61 par demi-taille) → gravure (facultatif) → pierre de naissance cachée (facultatif) → « Add to cart ».

## Contrôles vérifiés

Liste complète du formulaire : 107 contrôles sur ordinateur, 104 en affichage iPhone (`controls.cjs`). Les tableaux ci-dessous couvrent les contrôles propres à la conception et à la fiche ; l'en-tête, le menu et le pied de page (liens) sont résumés en dernière ligne.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Lab grown diamond / Colorful gemstone | bouton bascule | Le second affiche une section « Centre Stone Color » (choix multiple) ; le premier la cache | Aucun (devis) | OK (V) |
| Forme (14 tuiles) | boutons | Tuile illustrée ; l'adresse prend `stoneCut=Oval` (V pour Oval) | Aucun | OK (Oval actionné ; 13 autres non cliquées, mêmes composants) |
| Monture (10 tuiles) | boutons | L'adresse prend `design=Solitaire` (V pour Solitaire) | Aucun | OK (Solitaire actionné ; autres non cliquées) |
| Carat | menu 12 entrées | Sélection `0.50-1.00` prise en compte | Aucun | OK (V) |
| Métal | menu 5 entrées | Non actionné isolément, options lues | Aucun | Lu seulement |
| Taille | champ texte | Non rempli (donnée personnelle évitée ; pas de taille requise) | Aucun | Non testé |
| Inspiration | dépôt de fichier | Non utilisé (envoi de fichier) | — | Non testé |
| Note, budget, délai, nom, e-mail, téléphone, « Where did you find us » | champs | Non remplis (aucune donnée personnelle saisie) | — | Non testé |
| REQUEST A NON OBLIGATION QUOTE | bouton | Non cliqué (envoi de formulaire interdit) | — | Non testé |
| Liens « Learn about shapes / ring designs / metal guide / size guide » | liens | Ouvrent `/en/cuts`, `/en/ring-designs`, `/en/blog/metal-guide`, `/en/ring-size` (adresses lues) | — | Adresses vérifiées, pages non toutes lues |
| Fiche : menu des métaux | menu 7 entrées | « 14K yellow gold (+ USD 0) », « 14K rose (+ USD 60) », « 14K white (+ USD 110) », « 18K yellow (+ USD 220) », « 18K rose (+ USD 220) », « 18K white (+ USD 280) », « Platinum (+ USD 390) » | Bouton « Add to cart » passe de 3 130 à 3 240, 3 410, 3 520 USD (V : blanc 14 k, blanc 18 k, platine) | OK (V) ; changement d'image non constaté |
| Fiche : taille de doigt | menu | 45 à 61 par demi-taille, mention « Crafted for you » ; **54 « In stock (refundable) »** | Aucun | OK (V : taille 49,5 choisie) |
| Fiche : « Size guide » | bouton | Non actionné (clic sans effet visible dans le premier essai, le fond restait inerte) | — | Non concluant |
| Fiche : « Engraving » | bouton déplié | Affiche 3 polices (Playfair Display, Sans Serif, Pinyon Script), un champ texte, une note « les pièces gravées ne peuvent être ni retournées ni échangées » | **+ 150 USD** | OK (V), texte non saisi |
| Fiche : « Hidden Birthstone » | bouton déplié | Pierre secrète dans l'anneau : 12 pierres (Garnet janvier … Blue Topaz décembre) | **+ 280 USD par pierre** | OK (V) |
| Fiche : « Payment Options » | bouton, fenêtre | Cartes Visa, Mastercard, Amex ; Klarna 30 jours ; Apple Pay, Google Pay ; PayPal ; facture sur demande | — | OK (V) |
| Fiche : « Details & Specifications » | bouton, fenêtre | Pierre 0,50 ct ronde, couleur D à E, pureté VS1+, taille et symétrie Excellent, pas de fluorescence, 14 pierres latérales (~0,10 ct) | — | OK (V) |
| Fiche : « Delivery & Care » | bouton, fenêtre | Fabrication à la commande, 5 à 6 semaines ; taille en stock : expédié sous 1 à 2 jours ouvrés ; DHL Express taxes et droits inclus ; compensation CO2 | — | OK (V) |
| Fiche : « Add to cart • 3 130 USD » | bouton | Sans taille choisie : rien ne se passe (aucun message relevé). Avec taille : article ajouté (V) | Prix = métal choisi + options | OK (V) |
| Fiche : « Customize this design » | lien | Mène à `/en/build-your-own?stoneType=lab-grown&stoneCut=Round&stoneColor=white` : le formulaire reprend le modèle | Aucun | Adresse vérifiée |
| Fiche : « Save to wishlist » | bouton | Non actionné | — | Non testé |
| Liste (`/en/shop/engagement_diamond`) : « Load more products » | bouton | Non actionné ; prix et « 7 Metals » affichés sur chaque carte | « USD 1 680 » à « USD 4 020 » vus | Non testé |
| Devise (7) et langue (2) | menus | NOK, SEK, DKK, GBP, EUR, CHF, USD ; Norwegian, English. Page norvégienne : lien « Norsk side » | — | Menus lus, pas changés |
| Panier `/en/cart` | page | Voir plus bas | USD 3 130 | OK (V) |
| En-tête, menus, pied de page | liens (~85) | Engagement (solitaire, pierres latérales, trois pierres, prêts à expédier), Wedding, Custom, Fine Jewelry, rendez-vous, showroom, FAQ, soin, CGV, guide des tailles, carte cadeau, réseaux sociaux | — | Liens listés, non ouverts un à un |

## Options disponibles

- **Pierres** : synthétique (« lab grown diamond ») ou pierres de couleur naturelles rares. Pas de diamant naturel incolore annoncé sur les pages lues (S).
- **Formes** : 14 (voir parcours). **Carats** : 0 à 5 ct et plus.
- **Montures** : 10 (voir parcours). **Métaux sur la fiche** : or 14 k jaune, rose, blanc ; or 18 k jaune, rose, blanc ; platine.
- **Tailles de doigt** : 45 à 61 (EU), demi-tailles.
- **Services payants** : gravure 150 USD ; pierre de naissance cachée 280 USD pièce.
- **Mise à jour d'adresse** : l'adresse du formulaire reprend les choix (`stoneType`, `stoneCut`, `design`), donc partageable (V).

## Prix, délais, retours, garanties

- **Prix** : le formulaire n'affiche aucun prix ; « Custom Design start from NOK 30,000 » (page `nangi.no`) ; la page `nangi.store` indique « EUR 2000 » ; la page « Custom Process » dit « 30 000 NOK / 3 000 EUR / 3 000 USD » (V : trois valeurs différentes pour le même seuil). Fiche diamant 0,50 ct : 3 130 USD (V). Cartes de la liste : 1 680, 3 020, 3 130, 4 020 USD (V).
- **Décomposition** : supplément par métal visible (0 à 390 USD) ; pas de détail pierre / façon / marge.
- **Délai** : fiche 5 à 6 semaines (V) ; sur mesure : « 6–8 weeks » de production dans les étapes, « 8–10 weeks » dans la rubrique délai de la même page (V, incohérent) ; bannière : « Order by Nov 25 for Christmas Delivery » (V).
- **Sur mesure** : consultation sans engagement, **acompte de conception de 5 000 NOK déduit du prix final**, devis complet « no hidden costs », production après accord (V, https://www.nangi.no/en/the-custom-process).
- **Retours (V, https://www.nangi.no/en/terms)** : 90 jours après réception pour bijoux non portés ; **pour les bagues, seulement les tailles en stock et la taille 54 en or 14 k jaune ou blanc**, les autres sont « made-to-order, non-refundable ». Exclus : bagues mises à taille, gravées, alliances, pièces personnalisées ou sur mesure, métaux spéciaux. Frais de retour aux deux sens à la charge de l'acheteur, déduits. Échange gratuit hors ces cas.
- **Garanties** : « Lifelong warranty, yearly service & 90-day return » (pied de la fiche) ; entretien annuel proposé à l'atelier d'Oslo (V).

## Confiance et service

- Rendez-vous : bouton « Book appointment », showroom « The Nangi House » à Oslo, « Private Appointments outside Oslo » (pop-ups) (V : adresses `/en/book`, `/en/showroom`, `/en/popups`).
- Contact : téléphone +47 24 07 74 87, e-mail contact@nangi.no (V).
- Coffret en noyer fait main, livraison traçable et assurée (V). Avis clients : aucun relevé sur les pages lues.
- **Preuves de fabrication** : processus en 6 étapes décrit en texte ; pas de photos ni de vidéos d'atelier relevées sur les pages lues ; pas de suivi de commande observé (I).
- **Libellé du synthétique** : « lab grown diamond » partout ; page « Lab grown diamonds » (`/en/diamonds`) non lue.
- Certificat : non relevé sur la fiche lue (la fenêtre « Details » donne pierre, couleur, pureté, taille ; pas de mention GIA ni IGI vue).

## Panier

Page `/en/cart` (autorisée) lue avec un article ajouté (bague 3 130 USD, taille 49,5, or 14 k jaune) : récapitulatif avec nom, taille, métal, lien « Add engraving (+USD 150) », « Remove item from cart », message **« Your order will be shipped within 5-6 weeks »**, champ de code promo (« Apply »), total **USD 3 130 « Shipping, taxes & duties are included »**, bouton CHECKOUT (non cliqué), bloc d'aide (téléphone, e-mail). Pas de tiroir de panier après l'ajout : ajout silencieux (V). Moyens de paiement : voir « Payment Options ».

## Mesures

| Page | Ordinateur | iPhone |
|---|---|---|
| Fiche produit : première image de plus de 300 px visible | 1,6 s | 1,4 s |
| Formulaire de conception : première image visible | 1,8 s | non mesuré |

Mesure Playwright depuis `goto` jusqu'à une image chargée dans la fenêtre, un seul essai par appareil (valeur indicative, V).

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse** : le formulaire écrit `stoneType`, `stoneCut`, `design` dans l'URL, et la fiche produit renvoie vers le formulaire prérempli (« Customize this design »). Preuve : adresse observée après clic sur Oval et Solitaire ; lien de fiche ci-dessus. C'est l'action « partager » déjà retenue pour JR Diamond.
2. **Prix des options affiché dans le bouton** : « Add to cart • 3 520 USD » suit le métal (+110, +280, +390). Preuve : lectures du bouton après chaque choix.
3. **Livraison tout compris et délai dans le panier** : « Shipping, taxes & duties are included », « shipped within 5-6 weeks ». Preuve : `/en/cart`.
4. **Taille en stock signalée** : « 54 – In stock (refundable) » contre « Crafted for you » pour les autres ; la règle de retour suit (taille de stock seulement). Preuve : menu des tailles et page des CGV.
5. **Sur mesure transparent** : étapes numérotées, acompte de 5 000 NOK déduit, devis complet, aucun coût caché. Preuve : page « The Custom Process ».
6. **Paiements variés** : cartes, Klarna 30 jours, Apple Pay, Google Pay, PayPal, facture. Preuve : fenêtre « Payment Options ».

## Défauts observés

- Le formulaire ne donne **aucun prix ni visuel** : tout passe par un devis ; pas de 3D ni de 360° sur le site.
- Seuil de sur mesure annoncé trois fois différemment (30 000 NOK, 2 000 EUR, 3 000 EUR / USD) ; délais sur mesure 6–8 puis 8–10 semaines sur la même page.
- **Retours quasi inexistants pour une bague de fiançailles** : seulement les tailles en stock ; le 90 jours annoncé en bas de fiche est trompeur pour la plupart des tailles.
- Aucun message ni mise en évidence quand on clique « Add to cart » sans taille (aucun effet visible relevé).
- Devise : USD par défaut hors Norvège ; choix manuel de NOK.
- Aucune photo ni vidéo de fabrication, aucun avis client relevés sur les pages lues.

## Limites de l'audit

- Aucun formulaire envoyé ; devis, newsletter, réservation, checkout non testés (règle).
- Prix en NOK de la fiche non lus (devise USD) ; le menu de devise n'a pas été actionné.
- Les 13 autres formes et 9 autres montures n'ont pas été cliquées une à une ; un seul essai de chronométrage par appareil.
- Le champ de taille du formulaire et la plupart des liens de menu n'ont pas été ouverts.
- Les pages `/en/diamonds`, `/en/faq`, `/en/ring-size` n'ont pas été lues.
- Pas de 360°, de vidéo, d'essayage en réalité augmentée ni de chat observés (absence non prouvée pour tout le site).

## Sources

- https://www.nangi.no/en/build-your-own (contrôles, interactions, 15/11)
- https://www.nangi.no/en/shop/engagement_diamond
- https://www.nangi.no/en/products/swan-four-prong-pave-diamond-ring-0-50-carat
- https://www.nangi.no/en/cart
- https://www.nangi.no/en/terms
- https://www.nangi.no/en/the-custom-process
- https://www.nangi.no/robots.txt
- https://www.nangi.store/en/build-your-own (seuil EUR 2000)
