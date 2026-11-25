# Audit : TMC Fine Jewellers (The Moissanite Company), Brisbane (Queensland)

- **Site** : TMC Fine Jewellers, https://tmcfinejewellers.com (salle principale : 730 Brunswick Street, New Farm QLD 4005 ; aussi Sydney et Melbourne)
- **Page de départ** : https://tmcfinejewellers.com/pages/ring-builder (« Signature Ring Builder », 4 étapes)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026, bandeau « 20 % Off November 23-30 » actif)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-AU) et émulation iPhone 13
- **Statut** : **partiel**. Le parcours du constructeur (étapes 1 à 3) a été parcouru par l'audit de la Nouvelle-Galles du Sud (`audit/au/new-south-wales/tmc-fine-jewellers.md`, même site, même jour) ; je l'ai relu et complété ici (redirection et temps de chargement refaits, pages de Brisbane, de livraison et de garantie relues). **Étape 4 (« Complete Your Ring », ajout au panier) et panier non actionnés** : `Disallow: /cart/`, `/*/cart/`, `/cart.js`, `/checkout`, `/account`.
- **Contrôle robots.txt** (`robots.cjs`) : AUTORISÉ : `/pages/ring-builder`, `/en-us/pages/ring-builder`, `/pages/brisbane-bookings`, `/pages/shipping-australia`, `/pages/warranty`, `/pages/our-craft`, `/pages/faqs`, `/cart` ; INTERDIT : `/cart/add`. Aucune adresse interdite ouverte. Le fichier demande aussi aux agents d'utiliser les interfaces UCP/MCP du site pour les actions d'achat : aucune action d'achat tentée.

## Parcours

| Étape | Options (vérifié par l'audit NSW, relu) |
|---|---|
| Ouverture | Ordinateur : redirection `/pages/ring-builder` → `/en-us/pages/ring-builder` (menu « US (USD $) ») ; iPhone : même redirection constatée aujourd'hui (adresse finale `/en-us/…`). Les pages `/pages/shipping-australia` et `/pages/warranty` restent en « AU (AUD $) » |
| 1. Select your Setting | Filtre forme (10), filtre métal (6), grille de montures avec prix « From … » barré puis remisé |
| Fiche de monture (dans la page) | Métal (6), carat du métal 14 K ou 18 K, largeur du jonc 1,6 / 1,8 / 2,0 mm, pierres d'accent (Lab Diamond ou Moissanite), taille F à Z½, style de griffes (4), « Select this setting », « Skip to Gemstone Selection », « Send a hint », « Book an appointment », « Talk to an expert » |
| 2. Bespoke Customisations | Halo caché, pavé du jonc, pavé du pont, pierres de naissance cachées (jusqu'à 4), gravure laser (20 caractères), « Add bespoke customisations », « Skip » |
| 3. Select your Gemstone | Moissanite, Lab-Grown Diamond, Coloured ; filtres couleur, clarté, carat, prix ; tri ; vues galerie et liste ; « Select Gemstone », « View More Details » |
| 4. Complete your Ring | « Complete Your Ring » (non actionné : ajout au panier) |

## Contrôles vérifiés

Liste de départ (controls.cjs) : 441 contrôles visibles sur ordinateur, 370 sur iPhone ; majoritairement menu, pied de page et grille de cartes. Colonne « État » : « OK (NSW) » = effet constaté par l'audit NSW et non rejoué ici ; « OK » = constaté aujourd'hui.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Redirection `/pages/ring-builder` → `/en-us/…` | automatique | boutique USD sur ordinateur et iPhone | liste « From … » en USD | OK (revérifié) |
| Menu devise « US (USD $) » / « AU (AUD $) » | bouton | liste de pays et devises | – | présent ; non changé (formulaire de localisation) |
| Forme : Oval, Round, Emerald, Radiant, Elongated Cushion, Pear, Marquise, Asscher, Cushion, Moval | 10 icônes | filtre la grille (Oval : 213 → 59 cartes) | – | OK (NSW) |
| Métal : Platinum, Yellow, Rose, White, Yellow/Platinum, Rose/Platinum | 6 pastilles | change l'image et le prix | Amira 14 K : or 1 729 $, platine 1 934 $, bicolores 1 831 $ (barrés) | OK (NSW) |
| Carte de monture | clic | ouvre la fiche dans la page (adresse inchangée) | « 1 729 $ → 1 383 $ AUD (GST Included, Setting Only) » | OK (NSW) |
| Metal Karat 14 / 18 K | liste | change le prix | 1 383 → 1 520 $ | OK (NSW) |
| Band Width 1,6 / 1,8 / 2,0 mm | liste | change le prix | 1 465 / 1 520 / 1 547 $ (18 K) | OK (NSW) |
| Accent Stone : Lab Diamond / Moissanite | 2 boutons | change le prix | moissanite 1 273 $ contre 1 547 $ | OK (NSW) |
| Prong Style : Singular, Compass, Double, Petal | liste | change le prix | 1 383 / 1 383 / 1 493 / 1 466 $ | OK (NSW) |
| Ring Size F à Z½ | liste | obligatoire (« Please select a ring size ») | – | OK (NSW) |
| Size Guide | lien | présent | – | non ouvert |
| Galerie de 5 miniatures de la fiche | images | photos, écrin, portées | – | vu en capture |
| Select this setting / Skip to Gemstone Selection | boutons | passent aux étapes 2 et 3 | – | OK (NSW) |
| Hidden Halo, Pavé Band, Pavé Bridge | boutons | choix de pierre Lab ou Moissanite | halo 220 $ (lab) / 110 $ (moiss.) ; pavé jonc 247 / 138 $ ; pavé pont 220 / 110 $ | présent, non coché |
| Hidden Birthstones (12 mois, jusqu'à 4) | glisser-déposer | pierres cachées | 69 $ → 55 $ | présent, non glissé |
| Gravure laser (0 / 20, « Complimentary Engraving ») | champ | gratuite | gratuite | non rempli (texte personnel) |
| Gemstone Type : Moissanite / Lab-Grown / Coloured | 3 onglets | 16, 40 et 40 cartes chargées | moiss. 1 ct 341 $ ; lab 1,45 ct F VS1 1 026 $ | OK (NSW) |
| Filtres Colour (F, E, D), Clarity (VS2 à IF), Carat (1,45 à 8), Price | curseurs | présents | – | non manipulés |
| Coloured : Black, Blue, Champagne, Green, Grey, Orange, Pink, Red, Yellow | cases | présentes | – | non testées |
| Sort by (prix croissant / décroissant) | liste | 2 options | – | OK (NSW) |
| Gallery View / List View | boutons | basculent l'affichage | – | OK (NSW) |
| View More Details | lien | fenêtre pédagogique générique | – | OK (NSW) |
| Select Gemstone | bouton | « Selected Stone(s) 0 of 1 » | – | non cliqué |
| Complete Your Ring | bouton | ajout au panier | – | **non cliqué : panier interdit** |
| Send a hint / Book an appointment / Talk to an expert | boutons | formulaires | – | non ouverts |
| Brisbane Bookings : « Ring Consultation », « Online Consultation », « Ring Collection Appointment », « Lifetime Servicing » | liens | page `/pages/brisbane-bookings` : 730 Brunswick Street, (07) 3271 4673, lundi à dimanche 8 h à 18 h, sur rendez-vous | – | lu (aujourd'hui) |
| Livraison : onglets Australia, United States, United Kingdom, Canada, New Zealand, Rest of the World | onglets | `/pages/shipping-australia` | – | lu (aujourd'hui) |
| Menu principal, Loyalty Atelier, recherche, connexion, panier | liens | `/en-us/…` | – | présents |

## Options disponibles

- **Métaux** : platine, or jaune, rose, blanc, deux bicolores or/platine ; 14 K et 18 K.
- **Formes** : ovale, ronde, émeraude, radiante, coussin allongé, poire, marquise, Asscher, coussin, « moval ».
- **Pierres** : moissanite, diamant de laboratoire (« Lab-Grown Diamond », appelé « Cultured Diamond » dans la garantie), couleurs (noir, bleu, champagne, vert, gris, orange, rose, rouge, jaune). **Pas de diamant naturel** relevé dans le constructeur.
- **Montures** : solitaire, bezel, toi et moi, trilogie, antique, est-ouest ; 4 styles de griffes ; 3 largeurs de jonc.
- **Options** : halo caché, pavé du jonc, pavé du pont, pierres de naissance cachées, gravure laser de 20 caractères.
- **Certificats** : IGI ou GIA pour les diamants de laboratoire (page de garantie, lue aujourd'hui) ; certificat numérique pour la moissanite (NSW).
- **Rendez-vous** : consultation en salle (New Farm, Paddington, Armadale) ou en ligne, gratuite, sur rendez-vous.

## Prix, délais, retours, garanties

- **Prix** : monture seule, GST incluse (« GST Included, Setting Only »), puis pierre séparée à l'étape 3 ; chaque option de la fiche modifie le prix. Prix barrés et remisés (« 20 % Off November 23-30 »). Pas de décomposition métal / façon / marge.
- **Devise** : ordinateur et iPhone redirigés vers la boutique USD (liste « From … ») ; la fiche indique « AUD » ; changement de pays non essayé [vérifié, redirection ; lecture du double affichage reprise du NSW].
- **Délai** : « Crafted to order, for you in 10 weeks » ; CAO reçue 3 semaines après l'achat puis moulage 1 à 3 semaines (`/pages/our-craft`, relevé NSW).
- **Livraison** (`/pages/shipping-australia`, lue aujourd'hui) : express assurée offerte par Australia Post, 1 à 3 jours ouvrés après expédition, suivi, signature requise ; international 5 à 9 jours ouvrés. **Vidéo du bijou fini reçue avant l'expédition** (« you'll receive a video of your finished TMC piece before we carefully prepare it »). Retrait possible en salle sur rendez-vous.
- **Retours** : politique de retour du sur-mesure **non trouvée** dans les pages lues ; la page de garantie parle de « Warranty, Shipping and Exchanges » et de frais de transport à la charge du client pour une réparation sous garantie.
- **Garantie** (`/pages/warranty`, lue aujourd'hui) : garantie à vie limitée sur la fabrication (« under normal wear ») et sur les propriétés optiques des diamants de laboratoire IGI ou GIA et de la moissanite ; réparation ou remplacement gratuits ; retour à l'atelier aux frais du client ; mauvais entretien exclu. Entretien en salle : nettoyage, polissage, resserrage des griffes offerts ; rhodiage à la demande ; redimensionnement offert (NSW).
- **Paiement** : Afterpay, Zip, Humm, PayIn4 PayPal, cartes ; pied de page : Amex, Apple Pay, Google Pay, Mastercard, PayPal, Shop Pay, Visa (NSW). Panier non vu.

## Confiance et service

- **Salle de Brisbane** : New Farm, ouverte tous les jours de 8 h à 18 h sur rendez-vous ; consultations « one-on-one » avec les fondateurs ; entretien à vie offert (page Brisbane, lue aujourd'hui).
- **Langue** : anglais ; menu de pays pour la devise.
- **Libellé synthétique** : « Lab-Grown Diamond » dans le constructeur, « Cultured Diamond » dans la garantie ; la moissanite est vendue comme alternative éthique.
- **Avis clients** : aucun affiché sur le constructeur (vérifié NSW) ; non cherchés ailleurs.
- **Preuves de fabrication** : page « Our Craft » (CAO, moule, fonte), vidéo du bijou fini avant l'envoi, « weekly progress updates » annoncés dans l'inventaire ; pas de suivi de commande observé.
- **Fidélité** : « Loyalty Atelier » ; concours « Win back the value of your ring ».

## Points forts à retenir pour JR Diamond

1. **Prix qui se met à jour à chaque option** de la monture (métal, carat du métal, largeur, pierre d'accent, griffes), avec « GST included, setting only ». Preuve : montants relevés à chaque changement (NSW).
2. **Prix de la monture séparé de celui de la pierre**, avec compteur « Selected stone(s) 0 of 1 » à l'étape 3 (NSW).
3. **Vidéo du bijou fini avant l'expédition**, annoncée sur la page de livraison. Preuve : texte lu aujourd'hui sur `/pages/shipping-australia`. Proche de la promesse « pierre filmée ».
4. **Chronologie de fabrication publiée** : CAO à 3 semaines, 10 semaines au total (NSW, `/pages/our-craft`).
5. **Garantie à vie lisible et limitée** (ce qu'elle couvre, ce qu'elle exclut, qui paie le transport). Preuve : `/pages/warranty`.
6. **Gravure et pierres de naissance cachées** comme options d'une étape à part (NSW).
7. **Livraison offerte, assurée, avec signature** et choix du retrait en salle (page de livraison).

## Défauts observés

- Redirection vers une boutique en dollars américains sur ordinateur et iPhone : prix USD affichés à un visiteur australien, double affichage USD (liste) et AUD (fiche) (revérifié).
- Chargement lent : première image de la page à 9,9 s sur ordinateur et 6,5 s sur iPhone dans ce contrôle (image de menu ; machine chargée, mesure majorée) ; première carte de monture à 8,3 s relevée par NSW.
- Aucune vue 3D ou 360° ni vidéo dans le constructeur : images fixes (NSW).
- Pas de diamants naturels ; GIA mentionné seulement dans la garantie.
- Retours du sur-mesure introuvables ; prix soldés qui se comparent à des prix barrés (promotion).
- « View More Details » ouvre un guide générique et non une fiche de la pierre.
- Aucune adresse stable pour une configuration : l'adresse reste `/pages/ring-builder` (NSW).
- Étiquette « Select Metal Type » ambiguë dans la liste du carat (NSW).
- Libellé double « Lab-Grown » et « Cultured » pour la même pierre.

## Limites de l'audit

- **Étape 4 et panier non actionnés** (`/cart/` interdit) : récapitulatif, frais, total, délai et moyens de paiement du panier non relevés ; les moyens de paiement viennent du pied de page.
- **Contrôles du constructeur non rejoués** : effets, prix et comptages des étapes 1 à 3 repris du rapport NSW (même site, même jour) ; je n'ai refait que la redirection, le chargement, les pages de Brisbane, de livraison et de garantie.
- Halo, pavé, pierres de naissance, gravure, filtres couleur, clarté et prix : présents, non manipulés.
- Parcours iPhone limité au chargement (370 contrôles listés).
- Changement de pays non essayé ; retours du sur-mesure : pages de conditions complètes non trouvées ; avis non cherchés.
- Mesures de temps faites avec d'autres audits en parallèle (machine chargée) ; prix de la promotion de novembre.

## Sources

- https://tmcfinejewellers.com/pages/ring-builder (redirigé vers `/en-us/pages/ring-builder`) : vérifié.
- https://tmcfinejewellers.com/pages/brisbane-bookings : vérifié (curl, 200).
- https://tmcfinejewellers.com/pages/shipping-australia : vérifié (curl, 200).
- https://tmcfinejewellers.com/pages/warranty : vérifié (curl, 200).
- https://tmcfinejewellers.com/pages/our-craft, `/pages/terms-and-conditions` : relevé NSW.
- https://tmcfinejewellers.com/robots.txt : vérifié.
- Rapport NSW : `docs/concurrence/audit/au/new-south-wales/tmc-fine-jewellers.md`.
- Inventaire Queensland (`INVENTAIRE.md`, [V10], [V11]).
- Captures et scripts : scratchpad `audit/au/tmc-fine-jewellers/` (hors dépôt).
