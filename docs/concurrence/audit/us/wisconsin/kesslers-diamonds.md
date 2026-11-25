# Audit : Kesslers Diamonds (Wisconsin et Michigan)

- **Site** : Kesslers Diamonds, https://www.kesslersdiamonds.com/ (page de départ : /pages/custom-ring-builder)
- **Date** : 15/11/2026 (date fixée par la consigne ; contrôles faits à l'horloge de la session, le 25/11/2026)
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. L'assistant en étapes (JewelerOS) a été parcouru en entier. Le **concepteur 3D n'a pas été ouvert** : le dernier clic de l'assistant appelle `POST https://www.jeweleros.com/api/create/from-ring-config/`, adresse **interdite** par le robots.txt de jeweleros.com (`Disallow: /api/`). La requête a été interceptée dans le navigateur avant de partir et le clic n'a pas été poursuivi (l'assistant affiche « Something went wrong »). Ajout au panier **non fait** : `/cart/` est interdit par le robots.txt du site (« Add to cart » appelle `/cart/add`). Panier vide seulement lu.
- **Garde-fous** : robots.txt de www.kesslersdiamonds.com lu en entier ; `/cart/`, `/cart.js`, `/checkout`, `/account`, `/collections/*sort_by*`, filtres multiples interdits : non ouverts. Aucun formulaire rempli, aucun chat ouvert, aucun bouton de paiement cliqué.
- **Repères** : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V]) |
|---|---|
| Pastilles de métal (étape 1) | Or jaune (par défaut), blanc, rose : les 8 miniatures de style changent (`solitaire_yellow.webp` → `_white` → `_rose`) |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » (9) |
| 2. Pierre centrale | bascule Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, « Decide later » ; « vous fixerez le carat exact dans le concepteur » |
| 4. Délai | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » |
| 5. Magasin (iPhone seulement, « Step 5 of 5 ») | Michigan (2), Wisconsin (7), adresses et horaires, « Decide later » |
| Concepteur 3D | **non atteint** (voir statut) |
| Fiche produit (catalogue) | photo, vidéo, taille de doigt, quantité, « ADD TO CART », rendez-vous (voir plus bas) |

L'assistant compte 4 étapes sur ordinateur et 5 sur iPhone [V].

## Contrôles vérifiés

Relevé automatique de la page de départ : 51 contrôles visibles (ordinateur), 45 (iPhone). Hors assistant : menu, pied de page, réseaux sociaux.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose Gold | bouton | Change les miniatures des 8 styles | non | OK ordinateur ; sur iPhone la pastille White fonctionne, Rose et Yellow : clic refusé par le navigateur (non expliqué) |
| 8 styles + « Start from scratch » | cartes | Passent à l'étape 2 (les 9 testés avec le bouton « Back ») | non | OK |
| Natural / Lab Grown | bascule | Reste à l'étape 2 (état actif), ne fait pas avancer | non | OK |
| 9 formes + « Decide later » | cartes | Passent à l'étape 3 (10/10) | non | OK |
| 8 tailles + « Decide later » | cartes | Passent à l'étape 4 (9/9) | non | OK |
| 4 délais | cartes | **Non cliqués** : le clic lance l'appel interdit (ordinateur) ou mène à l'étape 5 puis au même appel (iPhone, inféré [I] d'après le code observé) | non | non testé : adresse interdite |
| Back | bouton | Revient d'une étape | non | OK (par clic DOM, le clic souris ne passait pas) |
| Skip | bouton | Présent en haut de l'assistant ; mène probablement au concepteur | non | non testé : même appel interdit [I] |
| Close | bouton | Présent | non | non testé |
| Étape 5 : 9 magasins, « Decide later » | liste | Liste affichée avec adresse et horaires ; « Decide later » non cliqué (appel au concepteur) | non | affichage OK, clic non testé |
| Concepteur 3D (métal, griffes, pavé, taille, gravure…) | outil tiers | Non ouvert | non | **non testé : adresse interdite** |
| « Text us » (bulle Podium) | bouton | Bulle « Hi there, have a question? Text us here! » ; chat non ouvert | non | non testé (règle) |
| REQUEST AN APPOINTMENT | lien | Mène à /pages/happiness-by-appointment ; formulaire non rempli | non | lien présent, page non lue |
| Wishlist, Search, Cart | liens | /cart ouvert (vide) ; recherche et compte interdits | non | Cart lu ; autres non testés |
| Newsletter (Email, SUBSCRIBE) | formulaire | Non rempli | non | non testé (règle) |
| Pied de page : FAQ, retours, livraison, financement, garantie | liens | Pages lues (voir plus bas) | non | OK |
| Catalogue /collections/engagement-rings : 15 filtres | accordéons | Ouverts, options lues avec leur nombre de produits | non | OK |
| Filtre Prix (From / To) | champs | Présents ; non saisis | non | non testé |
| Tri « Featured » | bouton | Non cliqué : le tri écrit `?sort_by=`, interdit par robots.txt | non | non testé : interdit |
| Fiche : « Add to wishlist » | bouton | Non cliqué (appel au service Swym, compte) | non | non testé |
| Fiche : champ RING SIZE | champ texte libre | Pas de liste : saisie libre ; « Size Later » accepté d'après la page d'aide | non | présent, non saisi |
| Fiche : « Learn More » (taille) | lien | Ouvre « Ring Sizing Information » | non | OK |
| Fiche : quantité −/+ | boutons | Présents | non | non testé |
| Fiche : ADD TO CART | bouton | **Non cliqué** : `/cart/add` interdit par robots.txt | non | non testé : panier interdit |
| Fiche : « MAKE AN APPOINTMENT » et 7 magasins | liens | Ancre `#make-appointment` (sur la page) | non | présent, non rempli |
| Fiche : DETAILS, SPECIFICATIONS, SHIPPING & IN-STORE PICKUP, WARRANTY & RETURNS | accordéons | S'ouvrent, texte lu | non | OK |
| Fiche : vidéo (autoplay) | vidéo | MP4 1080p lu automatiquement ; sans commandes sur ordinateur, avec commandes sur iPhone | non | OK |
| Fiche : « You May Also Like » | carrousel | Boutons précédent / suivant et 3 groupes présents | non | non testé |
| Boutons de paiement accéléré (Shop Pay…) | boutons | Non cliqués (règle) | non | non testé (règle) |

## Options disponibles

- **Assistant** : voir le tableau Parcours. Aucune option de prix dans l'assistant [V] : le texte annonce que le prix de la monture se règle dans le concepteur 3D, non vu ici [I d'après le descriptif de l'inventaire].
- **Catalogue (filtres, nombre de produits entre parenthèses, lus sur /collections/engagement-rings)** [V] :
  - Collection : Divine (1), EverMORE (31), K81 Signature (36), Kesslers (583), Kesslers Creations (1), Martin Flyer (145), Sky Set (6), Star of Hope (1), The One (155), True Promise (2), WOW! (6).
  - Style : Anniversary Ring (3), Bezel (3), Fashion (5), Halo (124), Promise (33), Side Stone (579), Solitaire (170), Three Stone (47), Wedding Set (1).
  - Métal : Platinum, Rose Gold, Sterling Silver, Two Tone, White Gold, Yellow Gold. Titre : 10K, 14K, 18K.
  - Type de diamant : Lab Created, Natural.
  - Forme du centre : Round (91), Oval (73), Cushion (13), Elongated Cushion (7), Emerald (18), Kessler Emerald (7), Princess (11), Kessler Princess (3), Radiant (41), Kessler Square Radiant (6), Marquise (34), Dutch Marquise (1), Pear (14), Heart (3), Kessler 81 (20).
  - Couleur du centre : de D à M par plages (F-G : 166 produits, E-F : 35), Pink (3), Yellow (7). Pureté : de VVS1 à I2 par plages (VS1-VS2 : 174).
  - Poids total (≈ 70 valeurs, de 0,02 à 6 1/2 ct), forme des accents, genre, prix (de / à).
- **Fiche d'une bague (exemple lab marquise 14 k)** : taille de doigt (champ libre), quantité, retrait en magasin dans 7 magasins, rendez-vous. Pas de choix de métal ni de pierre sur la fiche : chaque variante est une fiche distincte (ex. même modèle en or jaune et en or blanc, vus dans « You May Also Like ») [V].
- **Modes de vue** : photo, une vidéo par fiche. Pas de 360°, ni de vue sur la main, ni d'AR relevés [V sur la fiche lue].
- **Services (liens)** : financement (Wells Fargo), mise de côté 90 jours (layaway), rendez-vous, avis Google, trade-up, évaluations (/pages/appraisals), entretien (/pages/jewelry-care), événements.

## Prix, délais, retours, garanties

- **Prix** : prix d'une seule ligne par fiche (« Regular price »), exemple : 4 1/2 ct t.w. marquise synthétique 14 k or jaune **6 913 $** (/products/…bmbgn373825) [V]. Première page du catalogue : de 998 $ à 6 913 $ pour des bagues finies [V, extraction de la liste] ; l'inventaire du territoire donne 967 bagues chiffrées. Aucune décomposition (métal, pierre, façon) sur la fiche [V]. Les prix du concepteur 3D n'ont pas été vus.
- **Délai** : « Most orders ship within 1 to 3 business days. Sizing, personalization, and special-order items may require additional processing time » [V, /pages/shipping-policies-procedures]. Pour une taille non standard, une personne contacte le client avec un délai estimé [V, fiche]. Sur mesure : « as little as six weeks » (FAQ de la page /pages/custom-design-process) [V].
- **Livraison** : UPS Ground ; commande < 99 $ : 9,95 $ ; 100 à 249 $ : 19,95 $ ; **gratuite au-dessus de 249 $** ; Next Day Air 24,95 $ ; retrait en magasin gratuit (pièce d'identité) ; pas de PO Box, **pas d'envoi hors États-Unis** ; emballage discret (expéditeur « KDC Plastics ») [V].
- **Retours** : **30 jours, remboursement** ; remboursement sur la carte d'origine, environ 7 jours ouvrés après réception ; refus des bagues portées, **gravées, modifiées, redimensionnées ou abîmées** ; retour assuré et signature à la charge du client (« not responsible for items lost or damaged while shipping ») [V, /pages/return-policies-procedures]. Le texte ne traite pas explicitement du sur mesure [V : pas de mention lue].
- **Garantie** : « Miraculous, No Small Print Warranty » : réparations et entretien gratuits à vie, remplacement gratuit d'un diamant perdu, centre compris ; sans inspection ni frais ; **non transférable** ; seule la perte de la bague entière n'est pas couverte [V, /pages/warranty et FAQ].
- **Reprise / évolution** : reprise de diamants **naturels** Kesslers pour une pierre de plus grande valeur, sans doubler le prix ; les synthétiques sont **exclus** ; passé les 30 jours, ni rachat ni reprise hors de cette règle [V, /pages/trade-up-policy et FAQ].
- **Financement** : Wells Fargo « Jewelry Advantage », 0 % pendant 18 mois dès 500 $ d'achat ; taux 28,99 % si le solde n'est pas réglé à temps ; layaway 90 jours avec 20 % d'acompte [V, /pages/financing].
- **Taille** : première mise à taille en magasin gratuite (« Size Later » : taille ajustée sans frais plus tard) ; bagues en stock surtout en 7 [V].
- **Devise, langue** : dollars américains, anglais [V]. Moyens de paiement affichés dans le pied de page : American Express, Apple Pay, Diners Club, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa [V].

## Confiance et service

- [V] Enseigne familiale à 9 magasins, « employee-owned », fondée en 1980 (FAQ). Équipe d'orfèvres internes d'après l'inventaire du territoire.
- [V] Avis : une page « Google Reviews » mène à 9 lieux ; aucune note ni avis recopié sur la page lue. Pas d'avis sur la fiche produit.
- [V] Chat par SMS (bulle « Text us », Podium) sur la page ; téléphone, e-mail `contact@kesslers.us` et SMS 920-332-5572 pour les retours.
- [V] Rendez-vous en magasin (formulaire non rempli), événements.
- [V] Preuves de fabrication : page « Custom Design Process » en 5 étapes (consultation, concept en croquis ou CAO, revue du dessin, **modèle en cire** « final approval », fonte, polissage, sertissage). Galerie « Custom Design Gallery ». Pas de photos ou vidéos de la fabrication de **la** bague du client, ni de suivi de commande (hors courriel UPS) relevés.
- [V] Certificats : non relevés sur la fiche lue (spécifications : couleur E-F, pureté VS1-VS2 en plages, sans rapport GIA ou IGI).
- [V] Libellé du synthétique : « **Newborn Lab Created** » sur les fiches et « newborn diamonds, also known as lab-created diamonds » ; « Lab Grown » dans l'assistant.

## Points forts à retenir pour JR Diamond

1. **Assistant de démarrage en 4 étapes très court** : style, pierre, taille, délai, sans prix ni compte (1,4 à 2,5 s pour apparaître, voir la mesure). Preuve : parcours testé, 28 options sur 3 étapes. Utile pour JR Diamond : la composition (solitaire, alliance) pourrait démarrer ainsi.
2. **Garantie à vie simple et sans paperasse** : remplacement d'un diamant perdu, entretien gratuit, achats conservés dans leur système (/pages/warranty). Contraste avec un risque central des forums (peur de l'échange de la pierre) : un message à reprendre sous forme de promesse écrite.
3. **Retour de 30 jours affiché sur la fiche** (accordéon « Warranty & Returns ») et page dédiée : le client lit les conditions à l'endroit où il achète (PDP, accordéon vérifié).
4. **Frais de livraison en trois paliers lisibles** et gratuité dès 249 $ ; **retrait en magasin** avec disponibilité par magasin (fiche).
5. **Fiche produit rapide** : photo principale affichée en 0,70 s (ordinateur) et 0,74 s (iPhone), plus une vidéo 1080p en lecture automatique. Preuve : mesure LCP, fiche …bmbgn373825.
6. **Filtres de catalogue riches avec compteurs** (type de diamant, forme, couleur, pureté, titre, métal) : modèle de transparence pour la future grille de JR Diamond.
7. **Reprise de diamant naturel pour une pierre plus grande** sans doubler le prix : argument commercial à envisager (réserve : exclut le synthétique).

## Défauts observés

- **Impossible d'aller au bout de l'assistant sans appeler une interface interdite aux robots** : le visiteur humain passe, l'audit s'arrête. Hors audit, un visiteur dont le réseau bloque `jeweleros.com` voit « Something went wrong » (observé avec l'appel interrompu) : pas de repli.
- **Aucun prix dans l'assistant** ; le prix de la monture vient après l'étape 4 (inféré de l'inventaire du territoire) : le visiteur ne voit pas de prix tant qu'il n'a pas franchi 4 étapes, voire 5 sur iPhone.
- **Étape supplémentaire sur iPhone** (choix du magasin) absente sur ordinateur : parcours différent selon l'appareil.
- **Catalogue sans choix de métal ou de pierre sur la fiche** : chaque variante est une fiche distincte, ce qui donne des titres surprenants : l'adresse `…1-2ct-t-w-lab-grown…bmmqn376891` annonce 1/2 ct alors que le titre dit 2 1/2 ct t.w. [V, liste du catalogue].
- **Pas de certificat GIA ou IGI affiché** sur la fiche lue ; couleur et pureté en plages (« VS1-VS2 », « E-F »).
- **Retours** : aucune règle pour le sur mesure, et refus des bagues redimensionnées ou gravées ; retour assuré aux frais du client.
- **Livraison** : États-Unis seulement, pas de PO Box.
- **Faute dans la page de menu** : « Jewerly Appraisals » (menu, texte lu).
- **Taux d'intérêt élevé** du financement (28,99 %) rappelé en petits caractères ; remise à 0 % seulement dès 500 $.

## Limites de l'audit

- Concepteur 3D non ouvert (adresse interdite) : ni prix de monture, ni métal, ni griffes, ni gravure, ni vue 3D, ni sauvegarde, ni partage. Résultat des options du concepteur : non testé.
- Ajout au panier, récapitulatif, calcul de livraison et paiement : non testés (panier interdit, paiement hors périmètre). Le panier lu est vide (« Your bag is empty »). Les moyens de paiement viennent du pied de page, pas d'un récapitulatif [V].
- Une seule fiche produit ouverte en détail (bague marquise synthétique) ; aucune bague naturelle ouverte. Pas de vue 360°, de vue sur la main, d'AR : absents de la fiche lue, non cherchés ailleurs.
- Pastilles de métal et « Back » : comportement iPhone partiellement testé (voir tableau).
- Mesures de temps : une seule série par appareil, réseau de la session via proxy ; elles mesurent le premier visuel (LCP), pas la 3D.
- Un chargement de page par site à la fois, au plus une page toutes les 2 secondes.
- Les requêtes faites par la page à son ouverture (jeweleros.com/api/config, shopify_pay, cart.js) ne sont pas des écarts ; aucun clic n'a appelé une adresse interdite.

## Sources

- https://www.kesslersdiamonds.com/pages/custom-ring-builder (assistant, mesures, contrôles) [V]
- https://www.kesslersdiamonds.com/collections/engagement-rings (catalogue, filtres) [V]
- https://www.kesslersdiamonds.com/collections/engagement-rings/products/4-1-2ct-t-w-marquise-cut-newborn-lab-created-diamond-engagement-ring-in-14k-yellow-gold-bmbgn373825 (fiche) [V]
- https://www.kesslersdiamonds.com/pages/shipping-policies-procedures ; /pages/return-policies-procedures ; /pages/warranty ; /pages/financing ; /pages/faq ; /pages/trade-up-policy ; /pages/custom-design-process ; /pages/diamond-options ; /cart [V]
- https://www.kesslersdiamonds.com/robots.txt ; https://www.jeweleros.com/ (robots.txt : `Disallow: /api/`) [V]
- Inventaire du territoire : /home/user/Diamond3D/docs/concurrence/audit/us/wisconsin/INVENTAIRE.md [I pour les points marqués]
