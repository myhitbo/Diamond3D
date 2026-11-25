# Audit : Kate & Kole (Australie, Nouvelle-Galles du Sud / ACT)

- Site : Kate & Kole, studio de Newcastle (NSW), https://www.kateandkole.com.au
- Page de départ : https://www.kateandkole.com.au/pages/jewellery-builder
- Date : 15/11/2026 (jours relatifs du site lus à la date système du 25/11/2026)
- Appareils : Chromium ordinateur 1440x900 et affichage iPhone 13
- Statut : **partiel**. Le constructeur est un outil d'un autre domaine (`kate-kole-builder.vercel.app`) dont le robots.txt n'est pas lisible (réponse HTML, verdict INCONNU de l'outil). Je ne l'ai pas ouvert directement et je n'ai cliqué aucun contrôle à l'intérieur ; j'ai lu seulement ce qu'il affiche à l'ouverture de la page. Le parcours de configuration a été audité sur la fiche produit Shopify (autorisée) de la bague Kali.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| Constructeur (cadre vercel.app) [V] | Choix de la pièce : Bagues (Solitaire, Duet, Toi et Moi, Trilogy, Band, Birthstone Ring), Boucles d'oreilles, Bracelets, Colliers (sections repliées). Étapes suivantes non ouvertes. |
| Fiche Kali (Shopify) [V] | Poids total (1 / 1,5 / 2 ct), matière (or 18 ct jaune, rose, blanc, platine), taille de doigt (F à S + « Custom Half Size »), guide des tailles, Pay in Full / Pay 50 % Deposit, Add to bag, Design your own, Pay by instalments, Send a hint |
| Panier [V] | Page vide lue : « You're $300 from complimentary shipping ». Ajout au panier non fait (voir contrôles) |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Page constructeur : 123 contrôles du thème (menus, pied de page, recherche, panier) | liens | Navigation Shopify classique ; relevé complet par controls.cjs, ordinateur [V] | n/a | relevé seulement, non cliqués un à un |
| Cadre constructeur : Solitaire, Duet, Toi et Moi, Trilogy, Band, Birthstone Ring | boutons submit | Lus (libellé + phrase « one lab-grown diamond » etc.) ; **non cliqués** (domaine INCONNU) | n/a | non testé : robots du domaine illisible |
| Cadre : RINGS, EARRINGS, BRACELETS, NECKLACES | boutons (accordéon) | Listés ; non cliqués, même raison | n/a | non testé |
| Cadre : lien BUILDERS | lien | Pointe vers la racine du domaine vercel.app ; non suivi | n/a | non testé |
| Fiche : select Total Carat Weight | select | 1 ct 5 990 $ ; 1,5 ct 6 390 $ ; 2 ct 6 990 $ (or jaune) [V] | +400 $ puis +600 $ | OK |
| Fiche : select Material | select | Jaune 5 990 $ ; rose 5 990 $ ; blanc 6 690 $ ; platine 6 590 $ (1 ct) [V] | blanc +700 $, platine +600 $ | OK |
| Fiche : image à chaque changement de métal | visuel | La première image reste la même miniature (même fichier) pour les 4 métaux [V] | n/a | l'image ne suit pas le métal |
| Fiche : select ring-size | select | 15 options F-S + « Custom Half Size » ; texte « Ring Sizer » : bague d'essai envoyée après commande [V] | aucun | OK |
| SIZE GUIDE | bouton | Présent ; ouverture non actionnée | n/a | non testé (gain limité) |
| Pay in Full / Pay 50 % Deposit | boutons | Présents ; mention « Made to order, estimated dispatch 20th Jan » [V] | acompte 50 % | non cliqués |
| ADD TO BAG | submit | Appelle /cart/add : robots.txt du site l'interdit (`Disallow: /cart/`). Non cliqué : **panier interdit par robots.txt** [V] | n/a | non testé |
| PAY BY INSTALMENTS | bouton | Présent ; non cliqué (voie de paiement) | n/a | non testé |
| SEND A HINT | bouton | Présent ; non cliqué (formulaire à données personnelles) | n/a | non testé |
| DESIGN YOUR OWN | bouton | Présent, renvoie vraisemblablement au constructeur [I] | n/a | non testé |
| Accordéons DESCRIPTION, PRODUCT DETAILS, SHIPPING & TIMINGS, VIEW IN STUDIO, WARRANTY, FAQ, PERSONALISE & CUSTOMISE, MADE SUSTAINABLY, LAB GROWN DIAMONDS, COMPLIMENTARY SHIPPING, CONNECTED TO YOUR LOCAL JEWELLER, WARRANTY & CARE, IN-STUDIO & VIRTUAL APPOINTMENTS | summary | Ouverts ; textes lus (voir sections suivantes) [V] | n/a | OK |
| Galerie (Front/Side/Back, flèches) et favoris (« Add to favourites ») | boutons | Présents ; 3 vues photo ; pas de vidéo, pas de 3D relevées [V] | n/a | non testé |
| WRITE A REVIEW | bouton | Présent ; non cliqué (formulaire) | n/a | non testé |
| Page /cart (vide) | page | Affiche « Your bag is currently empty », seuil de livraison offerte [V] | n/a | OK |
| Liens rendez-vous (kateandkole-appointments.as.me), Gorgias (chat) | liens/widget | Détectés ; chat non ouvert | n/a | non testé |

## Options disponibles
- Constructeur : 6 types de bague (solitaire, duet, toi et moi, trilogy, band, birthstone), + boucles d'oreilles, bracelets, colliers [V].
- Fiche Kali : carat 1 / 1,5 / 2 ; métaux or 18 ct jaune/rose/blanc et platine ; tailles F à S et demi-tailles sur demande [V].
- Boutique : 97 produits bague de fiançailles en diamant de laboratoire (collection) [V]. Un modèle en diamant naturel (Micah marquise) est listé dans la même collection [V] ; l'atelier dit n'acheter de mines que « Australian or Canadian diamonds » sur demande [V].
- Filtres de pierre carat/couleur/pureté/prix : aucun relevé dans le constructeur (non ouvert) ; la fiche promet couleur ≥ E, pureté ≥ VVS2 [V].
- Gravure, personnalisation, bijou de famille : pages « Personalisation », « Remodels », « Supply Your Own Stone » existent [V] (contenu non lu).

## Prix, délais, retours, garanties
- Prix affichés en AUD, décomposition absente (un seul prix par variante) [V]. Exemples : Kali 1 ct 5 990 $ ; Duet pear « From 6 590 $ » ; Riva Signet « From 2 790 $ » [V]. Remise « up to 20 % » Black Friday sur d'autres collections [V].
- Délai : fiche Kali « made to order, up to 8 weeks », estimation « dispatch 20th Jan » ; priorité 4-6 semaines (450 $ ou 900 $) ; bagues « ready to wear » expédiées en 7-10 jours [V]. Une bannière affiche « Order by 18 October » en novembre : date périmée [V].
- Livraison Australie : offerte dès 300 $, sinon 12,50 $ ; fiançailles et alliances par coursier avec signature ; international : 50 $ / 30 $ / gratuit dès 500 $ ; taxes et droits inclus pour USA, Canada, UK, UE [V] (https://www.kateandkole.com.au/pages/shipping).
- Retours : 7 jours, échange ou avoir seulement, pas de remboursement ; **bagues de fiançailles, alliances, pièces sur mesure et gravées non reprises** ; frais de 10 % (min. 50 $) ; en cas d'annulation d'une commande sur mesure, acompte et bague perdus [V] (/pages/repairs-returns).
- Garanties : bague de fiançailles 12 mois incluse, 36 mois en option, garantie à vie mentionnée ; fine jewellery 3 mois (12 mois en option) ; une remise à taille gratuite [V] (/pages/warranty).
- Paiement : cartes, Apple Pay, Google Pay, Shop Pay, PayPal, Afterpay (< 2 000 $), Humm (jusqu'à 120 mois), acompte 50 % sur mesure [V] (/pages/payment-options). Moyens affichés au panier : non vus (panier vide).

## Confiance et service
- Certificats : IGI ou GCAL au-dessus de 0,50 ct (« matching the inscription on the girdle ») ; sous 0,50 ct, certificat d'authenticité maison [V]. La pierre exacte est confirmée après l'achat [V].
- Libellé : « Lab-Grown Diamond » partout, y compris dans le titre [V]. Page d'explication « chemically, physically, optically identical » [V].
- Langues/devises : anglais ; le constructeur reçoit `countryCode=AU&currencyCode=AUD&rate=1.0` [V]. Aucune redirection vers us.kateandkole.com.au constatée depuis cette machine [V].
- Avis : 460 avis, 5/5, acheteurs vérifiés (Yotpo) sur /pages/reviews [V].
- Preuves de fabrication : page « How Our Jewellery Is Made » (matières recyclées, atelier de Newcastle) ; pas de photo ou vidéo de la pièce du client relevée ; suivi de commande via compte (lien « Track Your Order ») [V].
- Services : rendez-vous en studio ou virtuel (as.me), chat Gorgias, e-mail, « Send a hint », « Click & Collect » à Newcastle [V].

## Points forts à retenir pour JR Diamond
1. Construire un bijou en choisissant d'abord le type (solitaire, duet, toi et moi, trilogy) avec une phrase claire par type. Preuve : cadre du constructeur, texte relevé.
2. Prix qui bouge visiblement avec carat et métal (jaune → blanc +700 $ ; 1 → 2 ct +1 000 $) sur la fiche. Preuve : mesures ci-dessus.
3. Acompte de 50 % pour le sur mesure, et solution de paiement échelonné jusqu'à 120 mois. Preuve : /pages/payment-options.
4. Garantie chiffrée par durée (12 / 36 mois) et remise à taille offerte. Preuve : /pages/warranty.
5. Frais de priorité affichés par barème (1-2 jours à 4-6 semaines). Preuve : /pages/timings-priority-service.
6. Livraison offerte dès 300 $ avec « Guaranteed arrival » (remplacement si perdu). Preuve : /pages/shipping.

## Défauts observés
- Bannière « Order by 18 October » encore affichée en novembre [V].
- L'image principale ne change pas quand on change de métal [V].
- Aucun remboursement ; bagues de fiançailles non reprises (contraire à l'esprit « acheter sans risque ») [V].
- Pierre exacte confirmée seulement après l'achat [V] ; délai de 8 semaines.
- Outil de configuration hébergé sur un autre domaine : chargement dans un cadre, 1,8 s avant affichage du contenu [V].

## Mesures de chargement
- Contenu du constructeur dans le cadre : 1 789 ms (ordinateur), 2 146 ms (iPhone) après `domcontentloaded` [V, mesure unique].
- Fiche Kali : sélecteurs visibles à 1 716 ms (ordinateur) [V].

## Limites de l'audit
- Intérieur du constructeur non exploré : robots.txt du domaine vercel.app illisible, traité comme bloqué par consigne. Ni 3D, ni vue sur la main, ni gravure, ni choix de pierre n'ont donc été vérifiés ; il faut un second audit autorisé pour le constructeur.
- Aucun ajout au panier (panier interdit), donc pas de récapitulatif, de frais finaux ni de moyens de paiement au panier.
- Mobile : seul le chargement du constructeur a été relevé.
- Filtres de pierre (taille, couleur, pureté) non audités.

## Sources
- https://www.kateandkole.com.au/pages/jewellery-builder (+ cadre https://kate-kole-builder.vercel.app/?countryCode=AU&currencyCode=AUD&rate=1.0, lecture passive)
- https://www.kateandkole.com.au/products/kali-elongated-cushion-lab-grown-diamond-engagement-ring
- https://www.kateandkole.com.au/collections/engagement-rings
- https://www.kateandkole.com.au/pages/shipping, /pages/payment-options, /pages/repairs-returns, /pages/warranty, /pages/timings-priority-service, /pages/reviews, /pages/how-our-jewellery-is-made, /cart
- Captures et scripts : dossier scratchpad `audit/au/kate-and-kole/`
