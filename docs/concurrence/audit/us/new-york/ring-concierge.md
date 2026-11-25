# Audit : Ring Concierge

- **Site** : Ring Concierge (Manhattan, Madison Avenue et Midtown ; aussi SoHo, Los Angeles, Boca Raton)
- **Adresse** : https://ringconcierge.com/ ; page de départ : https://ringconcierge.com/pages/the-ring-builder
- **Date** : 15/11/2026 (séance réelle du 25/11/2026)
- **Appareils** : Chromium ordinateur (1366 x 900) ; affichage iPhone 13 pour la page de départ et la fiche de monture
- **Statut** : **complet** pour le parcours monture, diamant, finalisation, ajout au sac et page du panier ; paiement, chat, rendez-vous, formulaires non touchés.
- **robots.txt** [V] : `/checkout`, `/checkouts/`, `/orders`, `/policies/`, `/collections/*sort_by*`, `/collections/*+*` interdits ; `/cart`, `/pages/*`, `/products/*` autorisés. **Crawl-delay 10 respecté** : au moins 10 s entre deux chargements de page. Aucun clic sur « CHECKOUT NOW » ni « CHECKOUT ». Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifiées sur https://ringconcierge.com/pages/the-ring-builder puis `/products/rc-solitaire`, `/pages/select-diamond`) |
| --- | --- |
| 0. Départ | deux entrées : « START WITH A SETTING » ou « START WITH A DIAMOND » ; 14 montures en carrousel, « From » 2 200 à 4 800 $ ; rendez-vous ; bagues en stock |
| 1. Monture (fiche produit) | forme de pierre (8), métal (3), détail de design (halo caché oui / non), taille de doigt, guide des tailles, vidéo, « DROP A HINT », « SELECT THIS SETTING » |
| 2. Diamant (`select-diamond`) | naturel / synthétique, 8 formes, prix, carat, couleur, pureté, taille (« cut precision »), filtres supplémentaires, tableau triable, comparaison jusqu'à 3, détails de chaque ligne |
| 3. « Complete Your Ring » | récapitulatif monture + diamant + total ; « CHECKOUT NOW » ; « ADD TO BAG » ; « DROP A HINT » ; changer monture ou diamant |
| 4. Panier `/cart` | ligne de la bague, code automatique, total estimé, « CHECKOUT », suggestions d'ajouts |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| « START WITH A SETTING » | lien | `/collections/ring-builder?start-with-setting=true` | non | lien lu [V] |
| « START WITH A DIAMOND » | lien | `/pages/select-diamond?shapes=all` | non | lien lu, non suivi [V] |
| Carrousel (Previous / Next slide) | boutons | fait défiler les 14 montures « From … » | non | présents [V] |
| Forme : Oval, Round, Emerald, Pear, Marquise, Radiant, Cushion, Antique-Style Round | radios (8) | change l'image (ex. `RC_RB_CLOUD_SOLITAIRE_ROUND_YG_02.jpg`, `…EMERALD_YG_02.jpg`) ; photos propres à chaque forme | **aucun** (2 200 $ pour les 8) | OK [V] |
| Métal : 14K Yellow Gold + Platinum Prongs / Platinum / 14K Rose Gold + Platinum Prongs | radios (3) | change l'image (`…OVAL_PLAT_01.jpg`, `…HH_OVAL_RG_01.jpg`) ; pas d'or 18 k ni d'or blanc | **aucun** (2 200 $) | OK [V] |
| Détail de design : « No Hidden Halo » / « Hidden Halo » | liste | ouvre une liste de 2 choix ; prix inchangé | aucun constaté (2 200 $) | OK [V] |
| Taille de doigt « Select » | liste | 3, 3,25, 3,5, 3,75, 4, 4,25, 4,5… (par quarts) ; choisie : « 6 » reportée dans l'adresse (`Ring_Size=6`) | non | OK [V] |
| « SIZE GUIDE » | bouton | fenêtre : « Sizing can be tricky… », « How to Measure », « Measure Your Finger » | non | OK [V] |
| Galerie (miniatures, « Open media N in modal », « Play video ») | liens / boutons | ouvre les images en fenêtre ; bouton de vidéo présent (lecture non attendue) | non | présents [V] |
| « DROP A HINT » | bouton | ouvre une fenêtre à 4 champs, une zone de texte et « Send hint to » ; **non remplie** | non | ouverte seulement [V] |
| « SELECT THIS SETTING » | bouton | ouvre l'étape diamant ; l'adresse porte la monture, la forme et la taille | non | OK [V] |
| « Natural Diamonds » / « Lab Grown Diamonds » | boutons | naturel : 1,00 ct E VS1 GIA 3 292 $ en tête ; synthétique : 2,00 ct E VVS2 2 600 $, « View Certificate » (le minimum de carat passe de 1,00 à 2,00) | oui | OK [V] |
| Formes du diamant (8 icônes) | boutons | filtrent le tableau (Oval, Round…) | oui | OK [V] |
| Prix (curseur 2 000 à 150 000 $) | curseur + 2 champs | affichés ; manipulation du curseur non testée | oui | présent [V] |
| Carat (1,00 à 7,10) | curseur + champs | affichés, non manipulés | oui | présent [V] |
| Couleur (D-F, G-J, D…J) / Pureté (FL-IF, VVS, VS, SI, IF…SI2) / « Cut precision » (Too Deep, Too Shallow, Excellent) | cases | testés par clic de libellé : effet partiel sur le tableau (le tableau a changé de forme en même temps) ; fiabilité des filtres à confirmer | oui | OK mais résultat mal isolé [S] |
| « ADDITIONAL FILTERS » | bouton | déplie des filtres supplémentaires (liste précise non relevée) | oui | présent [V] |
| En-têtes Carat, Price, Color, Clarity, Shape | boutons de tri | tri effectif : 7,05 ct en tête par carat ; 140 494 $ en tête par prix | non | OK [V] |
| Case « Compare » + « COMPARE DIAMONDS (0/3) » | case + bouton | 3 diamants maximum ; bouton grisé à 0 ; comparaison non ouverte | non | présents [V] |
| « RESET » | bouton | remet les filtres | non | OK [V] |
| Chevron de ligne | bouton | ouvre : « *actual diamond », certificat, mesures (7,91x5,62x3,50), polissage, symétrie, fluorescence, « SELECT THIS DIAMOND », « CHAT WITH A SPECIALIST », « SHARE DIAMOND », « Add to compare » | non | OK [V] |
| « View Certificate » | lien | vise `gia.edu/report-check?reportno=…` (autre domaine, non ouvert) | non | lien lu [V] |
| « SELECT THIS DIAMOND » | bouton | ouvre « Complete Your Ring » (`is_pre_cart=true`) : monture 2 200 + diamant 3 292 = **5 492 $** | oui | OK [V] |
| « EDIT » (monture) / « CHANGE » (diamant) | liens | retour à la monture ou au diamant | non | présents [V] |
| « ADD TO BAG » | bouton | ajoute (appel `POST /api/2026-07/graphql.json`) ; tiroir « My Bag » ; l'en-tête affiche « 2 items » pour une seule ligne | oui | OK [V] |
| « CHECKOUT NOW » / « CHECKOUT » | boutons de paiement | **non cliqués** (`/checkout` interdit) | – | non testé |
| « SHARE DIAMOND » | bouton | non cliqué (envoi) | – | non testé |
| Panier : « REMOVE », « ADD » (6 suggestions), quantité | boutons | « REMOVE » et « ADD » présents ; non actionnés | non | présents [V] |
| « CHAT WITH US » | lien | `javascript:void(0)` ; chat non ouvert | – | non testé (règle) |
| « MAKE AN APPOINTMENT » | lien | Calendly (`calendly.com/d/…`), non ouvert | – | lien lu [V] |
| « IN STOCK RINGS » | lien | `/collections/ready-to-ship-engagement-rings` | non | lien lu [V] |
| Lien Affirm (page de départ) | lien | `affirm.com/apps/prequal/…`, non ouvert | – | lien lu [V] |
| « Log in » (wishlist Swym), recherche, cœur | liens / boutons | présents ; compte non créé | – | non testé |
| « Track an Order » | lien | `/apps/tracktor/track` | – | lien lu [V] |
| « WRITE A REVIEW », « SEE ALL REVIEWS + » | boutons | présents ; non actionnés | – | non testé |
| Accordéons « Product Details » et « Insured Shipping + Easy Returns » | boutons | **contenu non obtenu** (dépliage non confirmé) | – | non lu |

## Options disponibles

- **Formes** : ovale, ronde, émeraude, poire, marquise, radiant, coussin, ronde de style ancien (8). [V]
- **Métal** [V] sur la monture Cloud Solitaire : or jaune 14 k avec griffes platine, platine, or rose 14 k avec griffes platine. L'or blanc et l'or 18 k n'y figurent pas.
- **Diamants** [V] : naturels (GIA) et « Lab Grown » ; formes, prix, carats, couleurs D à J, puretés IF à SI2, « cut precision » ; liste d'environ une centaine de lignes par page.
- **Taille de doigt** : de 3 à plus de 6 par quarts ; option « I Don't Know My Size » (FAQ) avec anneau gratuit envoyé sous 5 jours. [V]
- **Gravure** : non offerte dans le constructeur ; « engravable » seulement sur des charmes. [V]
- **Absents** : vue 3D, AR, sur la main, choix de griffes ou de corps de bague, titre d'or, comparaison de la bague entière. [V]

## Prix, délais, retours, garanties

- **Affichage** [V] : « Regular price $2,200 (Setting Only) » ; « $2,000 Off - Limited Time Discount Applied in Cart ». Total de la bague 5 492 $ ; code `BLACKFRIDAY2000` appliqué dans le panier : −2 000 $, **total estimé 3 492 $**. La remise n'est pas visible sur la page diamant.
- **Décomposition** : monture, puis diamant ; **pas de ventilation main-d'œuvre, métal, marge**. [V]
- **Délai** [V] : « EACH RING IS MADE JUST FOR YOU, PLEASE ALLOW 3-4 WEEKS FOR PRODUCTION » ; conseil de fixer le diamant « 8–10 weeks before your desired delivery date » ; production accélérée possible avec supplément (https://ringconcierge.com/pages/faq). L'inventaire précédent annonçait 6 à 8 semaines : l'écart est constaté à ce jour.
- **Livraison** [V] : « shipped overnight via FedEx with full insurance », signature requise ; **frais non chiffrés dans le panier**.
- **Paiement** [V] (FAQ) : virement, ACH, carte, Apple Pay, Affirm et Afterpay ; acompte de 50 % sous 48 h pour un sur-mesure, solde avant expédition ; taxe 8,875 % si retrait à New York, autrement selon l'adresse. Moyens de paiement non affichés dans le panier.
- **Retours** [V] (https://ringconcierge.com/pages/warranty-exchanges) : 30 jours sur la joaillerie éligible, étiquette assurée gratuite, États-Unis seulement ; **« Customized Bespoke bridal jewelry » et « custom orders » exclus**. Le bandeau du panier dit « Free returns + extended holiday exchanges » : application aux bagues du constructeur non établie [S].
- **Garantie** [V] : garantie à vie limitée (défauts de fabrication), évaluation professionnelle, certificat du diamant, **première mise à taille offerte dans l'année, jusqu'à 1,5 taille d'écart**.

## Confiance et service

- [V] **Fabrication** : « Every engagement ring is made in NYC using ethically sourced diamonds & recycled precious metals » ; « handcrafted by our master bench jewelers » (FAQ). Aucune photo ni vidéo de fabrication dans le constructeur ; [I] pas de suivi par étape (seulement « Track an Order » et un e-mail de suivi FedEx).
- [V] **Certificats** : GIA sur le naturel, lien de vérification ; certificat remis avec la bague. Synthétique : « Lab Grown », « View Certificate » (émetteur non vérifié).
- [V] **Avis** : 5 / 5 sur 2 avis pour cette monture, marqués « Incentivized review » ; page `/pages/reviews`, Yotpo.
- [V] **Service** : chat, téléphone 646 580 3059, e-mail, rendez-vous (Calendly), 4 boutiques et un salon de bijoux de mariage ; horaires affichés ; pas de WhatsApp relevé.
- [V] **Langues et devises** : anglais, dollar américain ; retours pour les États-Unis seulement.
- [V] Insistance commerciale : bandeau « BLACK FRIDAY ENDS DEC 1 », « POPULAR! 9 others are looking at this right now », « OUR LOWEST PRICES OF THE YEAR ».

## Points forts à retenir pour JR Diamond

1. **Deux portes d'entrée** : « Start with a setting » ou « Start with a diamond ». Preuve : deux liens de la page de départ.
2. **Récapitulatif d'étape** : la barre « 1 Choose a Diamond / 2 Choose a Setting — Cloud Solitaire — $2,200 / 3 Complete Your Ring » garde la monture visible avec son prix, « VIEW / CHANGE ». Preuve : page `select-diamond`.
3. **Fiche de ligne de diamant** : mesures, polissage, symétrie, fluorescence, « actual diamond », certificat vérifiable chez GIA, comparaison à trois. Preuve : chevron de la première ligne.
4. **Configuration portée par l'adresse** : forme, taille, monture, variante dans `?shapes=…&variant=…&Ring_Size=6`. Preuve : adresse de l'étape diamant.
5. **Garantie complète et mise à taille offerte** (1,5 taille, 1 an) rappelée dans le récapitulatif. Preuve : bloc « Our Promise To You ».
6. **Photos par forme et par métal** : l'image change avec chaque forme et chaque métal. Preuve : 8 fichiers `RC_RB_CLOUD_SOLITAIRE_<FORME>_YG_02.jpg` différents.
7. **Paiements fractionnés et option « I Don't Know My Size »** avec anneau gratuit. Preuve : FAQ.

## Défauts observés

- **Aucune variation de prix dans la monture** : forme, métal et halo ne changent pas 2 200 $, alors que le platine coûte autre chose que l'or ; le prix réel n'apparaît qu'à l'étape diamant. [V]
- **Remise invisible avant le panier** : prix barré absent, −2 000 $ constaté seulement dans le panier. [V]
- **« 2 items » pour une seule bague** dans l'en-tête et le tiroir. [V]
- **Livraison et moyens de paiement non chiffrés dans le panier** ; il faut lire la FAQ. [V]
- **Retours ambigus** pour une bague composée : « Easy Returns » sur la fiche, mais les commandes sur mesure sont « final sale » dans la politique. [V] le texte, [S] l'application.
- **Filtres du diamant ambigus** : le passage naturel → synthétique fait sauter le minimum de carat de 1,00 à 2,00 ; mon test de couleur et pureté n'a pas isolé l'effet. [V]
- **Image principale lente** : 4,95 s sur ordinateur, 4,99 s sur iPhone avant que la photo soit chargée. [V]
- **Pas de 3D**, pas de vue sur la main, pas de photo ni vidéo de fabrication dans le parcours. [V]
- **Pression commerciale** : compteurs « 9 others are looking at this right now ». [V]

## Limites de l'audit

- Paiement, « CHECKOUT », chat, rendez-vous (Calendly), Affirm, envoi de « DROP A HINT », lien GIA : non ouverts (règle ou donnée personnelle).
- Filtres couleur, pureté, taille et carats : testés une seule fois, sans isoler chaque effet ; curseurs de prix et de carat non manipulés.
- Accordéon « Insured Shipping + Easy Returns » non lu ; politique complète du constructeur : [S].
- Mesure du temps : une seule par appareil (4,95 s ordinateur, 4,99 s iPhone pour la photo principale ; 3,1 s pour la liste des diamants sur ordinateur).
- Un article a été ajouté au sac pendant la séance (session éphémère, fermée sans achat).
- Une seule monture (Cloud Solitaire) testée à fond ; les autres montures peuvent varier de prix selon le métal. [S]

## Sources

- https://ringconcierge.com/pages/the-ring-builder (départ, 14 montures)
- https://ringconcierge.com/products/rc-solitaire (monture : formes, métaux, tailles)
- https://ringconcierge.com/pages/select-diamond?shapes=Oval&variant=40677149343832&handle=rc-solitaire&Ring_Size=6 (diamants)
- https://ringconcierge.com/products/rc-solitaire?variant=40677149343832&is_pre_cart=true&Ring_Size=6 (finalisation)
- https://ringconcierge.com/cart (panier)
- https://ringconcierge.com/pages/faq (délai, paiement, taxe, taille, garantie)
- https://ringconcierge.com/pages/warranty-exchanges (retours)
- https://ringconcierge.com/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/ring-concierge/`
