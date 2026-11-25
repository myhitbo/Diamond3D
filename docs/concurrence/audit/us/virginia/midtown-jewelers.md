# Audit : Midtown Jewelers (Herndon, Virginie)

- **Site** : Midtown Jewelers, https://www.midtownjewelersinc.com (plateforme Punchmark / Shop Fine Jewelry ; constructeur « 3D Ring Designer » de JewelerOS)
- **Page de départ** : https://www.midtownjewelersinc.com/pages/custom-ring-builder
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Seule l'étape 1 du constructeur est visible : le clic sur un style appelle `jeweleros.com/api/` (INTERDIT par robots.txt, règle `Disallow: /api/`), donc arrêté avant le clic effectif (requête interceptée et abandonnée, jamais envoyée). Panier interdit (`Disallow: */cart`) : « Add to Cart » non cliqué.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé. Crawl-delay 2 s respecté.

## Parcours

| Étape | Options (vérifié sauf mention) |
|---|---|
| 1 sur 4. « Let's start designing your ring » (page de départ) | 3 pastilles de métal (jaune, blanc, rose) ; 9 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; boutons Back et Skip (mobile) |
| 2 à 4 | Non vus : interdits (appel `jeweleros.com/api/`). Le texte de l'étape 1 annonce un « 3D Ring Designer » complet ensuite [V pour la phrase, contenu inconnu] |
| Fiche bague finie | Photo zoomable, « Add to Cart », « Add to Wish List », « View shipping options », description, détails, marque |
| Diamants (`/diamonds`) | Naturel / Lab-Grown, forme (10), prix, carat, coupe, couleur, pureté, avancé, nombre par page, recherche par SKU |
| Panier | Non atteint (interdit) |

Constat central [V] : c'est un **constructeur d'entrée de gamme** (choix du style et du métal, puis 3D) combiné à une **visite en boutique** : la page « Custom Engagement Rings » dit « Design your ring online », « Pick out your center stone in our showroom », « Finalize & order with our expert team » (https://www.midtownjewelersinc.com/pages/custom-engagement-rings). La commande n'est donc pas finalisée en ligne [I].

## Contrôles vérifiés

Liste brute : JSON de `controls.cjs` (184 contrôles ordinateur, 77 iPhone sur la page de départ ; 119 sur la liste des bagues). Navigation, pied de page et marques regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles métal (jaune, blanc, rose), jaune présélectionné | bouton | Visible ; changement non actionné : les images de style viennent de `jos0.b-cdn.net/walkthrough-imgs/<style>_yellow.webp`, probablement une variante par métal [I] | aucun | non testé (widget JewelerOS) |
| 9 tuiles de style (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch) | carte cliquable | Le clic déclenche `GET jeweleros.com/api/widget/config/…` : interdit, requête abandonnée, rien ne s'ouvre [V] | aucun | non testé : interdit |
| Back / Skip (mobile) | boutons | Non cliqués (même widget) | | non testé |
| FAQ du constructeur (5 questions : outil, commande personnalisée, style, aide en personne, CAO) | accordéon | Se déplie [V] ; texte : l'outil sert à « explorer » un design avant d'en discuter avec l'équipe | | OK |
| Bandeau cookies (Decline all / Accept all / manage) | boutons | Décline sans effet sur la page [V] | | OK |
| Bouton d'accessibilité (côté droit, equalweb) | bouton | Présent [V], non ouvert | | non testé |
| Menu Bridal : Shop Engagement Rings, Design Your Ring, Choosing the Right Setting (`/ringsettings?settingType=Halo`), Design a Band (`/pages/design-a-band`), Bridal Sets | liens | Présents [V] ; Design a Band non lu | | non testé |
| Liste des bagues : filtres Brand, Material, Gemstone, Stone Shape, Price (2 champs $0 – $15 270), Gender, In Stock, curseur de prix | bouton/case/champ | Présents [V]. Non actionnés : leurs adresses passent peut-être par `?kw=` ou `?sortSpec=`, interdits | filtre | non testé |
| Liste des bagues : « Showing 1 – 24 of 187 », Quick View, Add to Wish List, flèches d'image | bouton | Présents [V] ; non actionnés (liste de souhaits probablement liée au compte [S]) | | non testé |
| Fiche : « Add to Cart » | bouton | NON cliqué : `/cart` interdit par robots.txt | 3 390 $ affiché | non testé (interdit) |
| Fiche : « View shipping options » | bouton | Le clic ouvre en réalité les fenêtres de connexion (login, mot de passe oublié) selon mon test [V, comportement possiblement lié à mon blocage de requêtes] ; options de livraison non lues | | partiel |
| Fiche : Product Details, Supporting Stones | accordéon | Présents [V], contenu lu : style, catégorie, stock, métal | | OK |
| Fiche : « Click image to zoom in » | image | Mention affichée [V] ; effet non confirmé | | partiel |
| Diamants : bascule Natural / Lab-Grown | onglet | L'adresse devient `?labGrown=1` [V] ; **0 diamants affichés** dans les deux modes | | défaut |
| Diamants : 10 formes (Round à Heart) | boutons | Ajoute `carat=0.1-20` ; « 0 diamonds found » [V] | | défaut |
| Diamants : prix min/max, carat 0,1 – 20, coupe (Fair à Excellent), couleur (L à D), pureté, « Advanced », 20/40/60/120 par page, « Search by SKU » | champs | Présents [V]. Résultats toujours vides : effet impossible à juger | | non testable |
| Téléphone (703) 707-9663 ; e-mail ; Book an Appointment (`#jos-book-appointment`) | liens | `tel:`, `mailto:`, ancre vers le module de rendez-vous JewelerOS [V] ; ouverture non faite | | non testé |
| Chat Podium (widget `connect.podium.com`) | widget | Script chargé [V] ; conversation non ouverte (règle) | | non testé |
| Financement (`/services/financing`) | page | Formulaire de rendez-vous « Financing » ; aucun plan chiffré [V] | | OK |
| Newsletter (e-mail + bouton) | formulaire | Non rempli (règle) | | non testé |

## Options disponibles

- **Métal** [V] : jaune, blanc, rose (pastilles) ; aucun titre (14 k / 18 k) ni platine au premier écran. Les fiches finies indiquent le métal (ex. « 14K Yellow Gold », « Platinum »).
- **Styles du constructeur** [V] : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, départ vierge.
- **Formes de pierre (recherche de diamants)** [V] : Round, Princess, Emerald, Asscher, Radiant, Cushion, Oval, Pear, Marquise, Heart.
- **Filtres diamants** [V] : prix, carat, coupe, couleur (L à D), pureté, avancé, SKU ; naturel ou « Lab-Grown ».
- **Filtres bagues** [V] : marque (Michael M., Sylvie…), matériau, pierre, forme, prix, genre, en stock.
- **Taille de doigt, gravure, certificat** : non vus dans le constructeur (non atteint).

## Prix, délais, retours, garanties

- **Prix** [V] : bagues finies affichées TTC hors taxes de vente non précisées : 3 390 $, 3 690 $, 3 950 $, 5 690 $, 5 950 $, 7 490 $ (liste, 24 de 187). Aucune décomposition. Constructeur : aucun prix à l'étape 1.
- **Livraison** [V] : « Free Shipping via FedEx Ground », « Ships Today (if ordered by 4:00 pm EST) », « Arrives by Christmas! », 2 options de livraison ; « Available in store ».
- **Délai sur mesure** [V] : « ready for you in just a couple of weeks » (page Custom Engagement Rings).
- **Retours** [V] (https://www.midtownjewelersinc.com/return-policy) : 15 jours après réception, articles non portés, emballage d'origine ; « Personalized or custom pieces are not eligible for returns » ; retour par la poste aux frais du client, assuré ; remboursement 7 à 10 jours ouvrés ; échange défaut sous 30 jours ; pierres vendues « as-is ».
- **Moyens de paiement** [I] : icônes Visa, Mastercard, Amex, Discover, Amazon Pay, Apple Pay, Google Pay, Affirm, Klarna chargées par le panier (fichiers `stripe-checkout-icons/*`) ; panier non vu.
- **Financement** [V] : « may be available » ; rendez-vous demandé.

## Confiance et service

- [V] Boutique physique : 700 Lynn St, Herndon, VA ; lundi–samedi (fermé dimanche) ; famille depuis 1982 selon la page « Why Midtown ».
- [V] Logos GIA, IJO Master Jeweler, JBT, Jewelers Mutual, The Knot en pied de page.
- [V] Avis : deux citations Google sur la page Custom Engagement Rings ; page `/testimonials` non lue.
- [V] Processus sur mesure : consultation, croquis et rendus CAO « approuvés sous tous les angles » avant production, révisions bienvenues (https://www.midtownjewelersinc.com/pages/custom-design).
- [V] Synthétique : « lab grown » ; la page dit que ce n'est « not synthetic, simulated, or fake » (https://www.midtownjewelersinc.com/pages/natural-vs-lab-grown-diamonds). Certificats : GIA (naturel), IGI et GIA (lab-grown).
- [V] Langue : anglais ; devise : dollar. Pas de photos ni vidéos d'atelier ni suivi de commande vus ; « Track My Order » existe dans le compte (menu).

## Points forts à retenir pour JR Diamond

1. **Choix de style avec photos d'abord, métal en pastilles** : 9 vignettes de styles en 3 colonnes, étape numérotée « Step 1 of 4 » (preuve : capture `custom-ring-builder`). Entrée très simple pour un visiteur novice.
2. **Parcours en 3 temps annoncé en clair** (concevoir en ligne, choisir la pierre en boutique, finaliser) : pas de fausse promesse de commande intégrale en ligne (https://www.midtownjewelersinc.com/pages/custom-engagement-rings).
3. **CAO approuvée avant fabrication, révisions comprises** : la promesse qui correspond au constat des forums (https://www.midtownjewelersinc.com/pages/custom-design).
4. **Exception du sur mesure écrite noir sur blanc** (« not eligible for returns ») : modèle de clarté pour la politique de retour de JR Diamond, à valider par l'avocat israélien.
5. **Comparatif naturel / synthétique accessible**, tableau côte à côte (page `natural-vs-lab-grown-diamonds`).
6. **Mise en avant du délai en « Ships Today » + livraison offerte** sur les bagues finies (liste des bagues).

## Défauts observés

- [V] Constructeur non utilisable sans appeler `jeweleros.com/api/` : aucune vue 3D, ni prix, ni option au-delà de l'étape 1 pour un auditeur respectant robots.txt.
- [V] **Recherche de diamants vide** : « 0 diamonds found » en naturel comme en lab-grown, deux essais (un navigateur sans blocage), 8 s d'attente.
- [V] Aucun prix ni titre d'or à l'étape 1 ; « Toi et Moi » en français dans une interface anglaise.
- [V] Retour des pièces sur mesure impossible ; retour à la charge du client, pierres « as-is » : peu rassurant.
- [V] « View shipping options » ouvre la fenêtre de connexion dans mon test (comportement douteux, possiblement dû à mon blocage de scripts).
- [V] Bandeau de cookies qui recouvre la dernière tuile de style sur ordinateur à l'ouverture.
- [V] Aucune preuve de fabrication (photos ou vidéos d'atelier).

## Limites de l'audit

- **Mesure du visuel principal** [V] (3 essais, réseau de l'environnement) : texte et vignettes de l'étape 1 visibles en **3,8 s** sur ordinateur et **4,1 s** en affichage iPhone ; vignettes chargées dans la même mesure. Visuel 3D jamais vu.
- Pas d'étape 2 à 4, de panier, de moyens de paiement réels, d'AR ou de « sur la main » : constructeur et panier interdits.
- Plusieurs scripts de la page ont été bloqués par mes interceptions dans les tests (cartEngine, config JewelerOS) : certains comportements (livraison, zoom, diamants) ont été revérifiés sans blocage pour les diamants seulement.
- Aucun formulaire rempli, aucun chat ouvert, aucun compte créé.

## Sources

- https://www.midtownjewelersinc.com/pages/custom-ring-builder (ordinateur et iPhone)
- https://www.midtownjewelersinc.com/pages/custom-engagement-rings
- https://www.midtownjewelersinc.com/pages/custom-design
- https://www.midtownjewelersinc.com/jewelry/engagement-rings
- https://www.midtownjewelersinc.com/jewelry-details/engagement-rings/engagement-ring/20747
- https://www.midtownjewelersinc.com/diamonds et `?labGrown=1`
- https://www.midtownjewelersinc.com/return-policy
- https://www.midtownjewelersinc.com/services/financing
- https://www.midtownjewelersinc.com/pages/natural-vs-lab-grown-diamonds
- robots.txt : midtownjewelersinc.com (`Disallow: */cart`, `Crawl-delay: 2`) ; jeweleros.com (`Disallow: /api/`)
