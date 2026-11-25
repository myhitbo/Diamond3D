# Audit : TMC Fine Jewellers (Sydney, Brisbane, Melbourne)

- **Site** : TMC Fine Jewellers, https://tmcfinejewellers.com
- **Page de départ** : https://tmcfinejewellers.com/pages/ring-builder (« Signature Ring Builder », 4 étapes)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026, bandeau « 20 % Off November 23-30 » actif)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-AU) et émulation iPhone 13
- **Statut** : **partiel**. Étapes 1 à 3 du constructeur parcourues ; l'étape 4 (« Complete Your Ring », qui ajoute au panier) et le panier ne sont pas actionnés : `robots.txt` interdit `/cart/` (donc `/cart/add.js`) et `/cart.js`.
- **Contrôle robots.txt** : `Disallow: /cart/`, `/*/cart/`, `/cart.js`, `/checkout`, `/account`, `/collections/*sort_by*`, filtres multiples. Le fichier demande aussi aux agents d'utiliser les interfaces UCP/MCP du site pour les actions d'achat ; nous n'avons exécuté aucune action d'achat. Les pages `ring-builder`, `warranty`, `shipping-australia`, `our-craft`, `terms-and-conditions`, `our-lab-grown-diamonds` et `/cart` sont « AUTORISÉ » (robots.cjs). Nous avons bloqué dans le navigateur les appels de la page à `cart.js` pendant nos clics (la page les émet à l'ouverture) et n'avons ouvert ni `/cart` ni `/cart/add`. Aucune adresse interdite ouverte.

## Parcours

| Étape | Options (vérifié) |
|---|---|
| Ouverture | Ordinateur : redirection vers `/en-us/pages/ring-builder` (menu devise « US (USD $) »). iPhone : reste sur `/pages/ring-builder` |
| 1. Select your Setting | Filtre forme (10), filtre métal (6), grille de montures (cartes « The Amira Ring », « The Isla Ring »…, prix « From $1,317.00 » barré puis remisé) |
| Fiche de monture (dans la page) | Métal (6), carat du métal (14 K / 18 K), largeur du jonc (1,6 / 1,8 / 2,0 mm), pierres d'accent (Lab Diamond / Moissanite), taille (F à Z½), style de griffes (4), « Select this setting », « Skip to Gemstone Selection », « Send a hint », « Book an appointment », « Talk to an expert » |
| 2. Bespoke Customisations | Hidden Halo, Pavé Band, Pavé Bridge (pierre au choix), Hidden Birthstones (jusqu'à 4, glisser-déposer), gravure laser (20 caractères), « Add bespoke customisations », « Skip » |
| 3. Select your Gemstone | Type : Moissanite, Lab-Grown Diamond, Coloured ; filtres couleur, clarté, carat, prix ; tri ; vues galerie/liste ; « Select Gemstone », « View More Details » |
| 4. Complete your Ring | « Complete Your Ring » (non actionné : ajout au panier) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Forme (Oval, Round, Emerald, Radiant, Elongated Cushion, Pear, Marquise, Asscher, Cushion, Moval) | 10 icônes | Oval : liste de 213 à 59 cartes (compte de nœuds) | – | OK |
| Métal (Platinum, Yellow Gold, Rose Gold, White Gold, Yellow Gold/Platinum, Rose Gold/Platinum) | 6 pastilles | change l'image et le prix de la monture | Amira, 14 K, jonc 1,8 : jaune/rose/blanc 1 729 $, platine 1 934 $, bicolores 1 831 $ (prix barrés ; remisé 1 383 / 1 547 / 1 465 $ AUD) | OK |
| Carte de monture | clic | ouvre la fiche dans la même page (pas de changement d'adresse) | Amira : « 1 729 $ → 1 383 $ AUD (GST Included, Setting Only) » | OK |
| Metal Karat : 14 Karat / 18 Karat (liste « Select Metal Type ») | liste | change le prix | 14 K 1 383 $ ; 18 K 1 520 $ ; entrée de liste « Select Metal Type » (1 328 $) | OK, étiquette ambiguë |
| Band Width 1,6 / 1,8 / 2,0 mm | liste | change le prix | 1 465 / 1 520 / 1 547 $ (en 18 K) | OK |
| Accent Stone Type : Lab Diamond / Moissanite | 2 boutons | change le prix | moissanite 1 273 $ contre 1 547 $ (18 K, 2,0 mm) | OK |
| Prong Style : Singular / Compass / Double / Petal | liste | change le prix | Singular et Compass 1 383 $ ; Double 1 493 $ ; Petal 1 466 $ | OK |
| Ring Size F à Z½ | liste (F à Z, demi-tailles) | obligatoire : « Please select a ring size » | – | OK |
| Size Guide | lien | présent | – | non ouvert |
| Galerie de la fiche (5 miniatures) | images | photo du bijou, écrin, portées sur mannequins | – | vu en capture, non parcouru |
| Select this setting | bouton | va à l'étape « Bespoke Customisations » après choix de taille | – | OK |
| Skip to Gemstone Selection | bouton | va à l'étape 3 | – | OK |
| Hidden Halo / Pavé Band / Pavé Bridge | boutons | choix de pierre Lab ou Moissanite | Halo 220 $ (lab) / 110 $ (moiss.) ; pavé jonc 247 / 138 $ ; pavé pont 220 / 110 $ (valeurs affichées de l'étape 2) | présent, non coché |
| Hidden Birthstones (Garnet à Topaz, 12 mois) | cases, glisser-déposer | jusqu'à 4 pierres cachées | 69 $ → 55 $ affiché | présent, non glissé |
| Gravure (0 / 20) | champ | gravure laser à l'intérieur, étiquette « Complimentary Engraving » | gratuite | champ non rempli (texte personnel) |
| Gemstone Type : Moissanite / Lab-Grown / Coloured | 3 onglets | Moissanite : 16 cartes ; Coloured : 40 ; Lab : 40 cartes chargées | Moissanite 1 ct ovale D VVS1 : 426 → 341 $ ; lab 1,45 ct ovale F VS1 : 1 283 → 1 026 $ | OK |
| Filtres Colour Grade (F, E, D), Clarity (VS2 à IF), Carat (1,45 à 8 ct), Price Range | curseurs | présents (pastilles « Clarity VS2, VVS1 » retirables) | – | affichés, non manipulés |
| Coloured : Black, Blue, Champagne, Green, Grey, Orange, Pink, Red, Yellow | cases | présentes | – | non testées |
| Sort by (Price lowest to highest / highest to lowest) | liste | 2 options | – | OK |
| Gallery View / List View | boutons | basculent l'affichage | – | OK |
| View More Details | lien | ouvre une fenêtre générique (carat, couleur : guides pédagogiques, pas de fiche de pierre) | – | OK |
| Select Gemstone | bouton | choisit la pierre ; « Selected Stone(s) 0 of 1 » | – | non cliqué |
| Complete Your Ring | bouton | ajout au panier | – | **non cliqué : panier interdit par robots.txt** |
| Send a hint, Book an appointment, Talk to an expert | boutons | formulaires | – | non ouverts |
| Menu devise « US (USD $) » | bouton | liste de pays (AU, etc.) | – | non changé (envoi de formulaire de localisation) |
| Menu principal, Book a consultation, Loyalty Atelier, recherche, connexion, panier | liens | `/en-us/...` | – | présents |

## Options disponibles

- **Métaux** : platine, or jaune, rose, blanc, deux bicolores or/platine ; 14 K et 18 K.
- **Formes** : ovale, ronde, émeraude, radiante, coussin allongé, poire, marquise, Asscher, coussin, « moval ».
- **Pierres** : moissanite, diamant de laboratoire (« Lab-Grown Diamond »), couleurs (noir, bleu, champagne, vert, gris, orange, rose, rouge, jaune). **Pas de diamant naturel** relevé dans le constructeur.
- **Montures** : solitaires, toi et moi, trilogie, bezel, antique, est-ouest (menu), 4 styles de griffes, 3 largeurs de jonc.
- **Options** : halo caché, pavé du jonc, pavé du pont, pierres de naissance cachées (jusqu'à 4), gravure laser de 20 caractères.
- **Certificat** : « Gemstone certification and authenticity » (promesse) ; la moissanite a un certificat numérique.

## Prix, délais, retours, garanties

- **Prix** : prix de monture seul (« GST Included, Setting Only »), puis pierre séparée en étape 3 ; chaque option de l'étape 1 modifie le prix (+ 137 $ du 14 K au 18 K, + 110 $ environ pour les griffes doubles). Prix barrés et remisés (promotion « 20 % Off »).
- **Devise** : ordinateur redirigé vers la boutique USD (liste « From $1,317.00 ») ; dans la fiche du constructeur, étiquette « AUD ». Rapport USD/AUD déduit : 1 054 $ remisé en liste contre 1 383 $ AUD dans la fiche (inféré).
- **Délai** : « Crafted to order, for you in 10 weeks » ; CAD reçu 3 semaines après l'achat, puis moulage 1 à 3 semaines (https://tmcfinejewellers.com/en-us/pages/our-craft, vérifié).
- **Livraison** : express assurée offerte via Australia Post, 1 à 3 jours ouvrés, suivi et signature ; international : DHL offert (pages `shipping-australia`, vérifié). « Vous recevez une vidéo de votre bijou terminé avant l'expédition » (même page).
- **Retours** : politique de retour du sur-mesure **non trouvée** sur les pages lues. Réclamations de garantie : certificat de pierre + photos ; frais d'expédition de retour à la charge du client (https://tmcfinejewellers.com/en-us/pages/warranty, vérifié).
- **Garanties** : garantie à vie sur toutes les pièces ; garantie moissanite signée ; redimensionnement offert (« Complimentary Ring Resizing »).
- **Paiement** : Afterpay, Zip, Humm, PayIn4 PayPal, en plus des cartes ; pied de page : Amex, Apple Pay, Google Pay, Mastercard, PayPal, Shop Pay, Visa (vérifié).

## Confiance et service

- Rendez-vous : consultation gratuite, showrooms à Sydney (Paddington), Brisbane, Melbourne ; consultations en ligne offertes (accordéon « International clients »).
- Libellé synthétique : « Lab-Grown Diamond » ; moissanite présentée comme alternative « éthique ».
- Langue : anglais ; menu pays pour la devise.
- Avis clients : aucun affiché sur le constructeur.
- Preuves de fabrication : page « Our craft » avec étapes (CAD, moule, fonte), « weekly progress updates » annoncés dans l'inventaire ; vidéo du bijou fini avant envoi (vérifié).
- Fidélité : « Loyalty Atelier » ; concours « Win back the value of your ring ».

## Points forts à retenir pour JR Diamond

1. **Prix qui se met à jour à chaque option** (métal, carat du métal, largeur, pierre d'accent, griffes) sur la fiche, avec mention « GST included, setting only » (preuve : montants relevés à chaque changement).
2. **Le prix de la monture est séparé de celui de la pierre** et le constructeur montre le total « Selected stone(s) 0 of 1 » (preuve : étape 3).
3. **Vidéo du bijou fini envoyée avant l'expédition** (page `shipping-australia`) : proche de la promesse « pierre filmée ».
4. **Chronologie de fabrication publiée** : CAD à 3 semaines, 10 semaines au total (page `our-craft`).
5. **Gravure laser et pierres de naissance cachées** proposées comme options à étapes (étape 2).
6. **Paiement en plusieurs fois** annoncé (Afterpay, Zip, Humm, PayPal).
7. **Moissanite proposée à côté du lab grown** avec prix très inférieur (426 $ contre 1 283 $ à carat voisin).

## Défauts observés

- Chargement lent : première peinture 2,1 à 3,2 s, plus grand élément 4,2 à 5,2 s ; première carte de monture visible en 8,3 à 8,6 s (mesures sur la machine d'audit).
- Redirection vers une boutique en dollars américains en ordinateur ; double affichage USD (liste) / AUD (fiche).
- Liste de métal avec une entrée « Select Metal Type » qui change réellement le prix ; confusion avec les pastilles de métal.
- Aucune vue 3D ou 360° dans le constructeur (images fixes).
- Pas de diamants naturels ; la page n'annonce pas de GIA.
- Retours du sur-mesure introuvables.
- « View More Details » ouvre un guide générique plutôt qu'une fiche de la pierre choisie.
- Aucune URL stable pour une configuration (l'adresse reste `/pages/ring-builder`).

## Limites de l'audit

- Étape 4 et panier non actionnés (robots.txt interdit `/cart/`) : frais, total, délai et moyens de paiement du panier non relevés. Les moyens de paiement viennent du pied de page.
- Devise : ordinateur en USD par redirection ; changement de pays non essayé.
- Pierres de naissance (glisser-déposer), halo, pavé, filtres couleur/clarté/prix et gravure non actionnés.
- Parcours iPhone limité au chargement (370 contrôles listés, première carte à 8,3 s) ; étapes suivantes non rejouées.
- Retours : seule la page de garantie a été lue ; les conditions de vente complètes n'ont pas été trouvées.
- Prix pendant la promotion de novembre ; mesures depuis un réseau rapide.

## Sources

- https://tmcfinejewellers.com/pages/ring-builder (redirigé vers `/en-us/pages/ring-builder`) : vérifié.
- https://tmcfinejewellers.com/en-us/pages/warranty : vérifié.
- https://tmcfinejewellers.com/en-us/pages/shipping-australia : vérifié.
- https://tmcfinejewellers.com/en-us/pages/our-craft : vérifié.
- https://tmcfinejewellers.com/en-us/pages/terms-and-conditions (promotions et fidélité seulement) : vérifié.
- https://tmcfinejewellers.com/robots.txt : vérifié.
- Captures et scripts : scratchpad `audit/au/tmc-fine-jewellers/` (hors dépôt).
