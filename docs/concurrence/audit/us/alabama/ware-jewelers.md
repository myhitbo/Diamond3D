# Audit : Ware Jewelers, « Custom Ring Builder » (Auburn, Alabama)

| | |
|---|---|
| Site | Ware Jewelers, Auburn (AL), aussi Montgomery, Opelika, Spanish Fort ; bijoutier familial depuis 1946 : https://www.warejewelers.com/ |
| Page de départ | https://www.warejewelers.com/page/custom-ring-builder.html |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : assistant d'entrée et parcours classique audités jusqu'au panier ; la 3D de Ware n'a pas pu être chargée (API du fournisseur interdite aux robots) et l'outil « Build a Band » est un site tiers interdit aux robots |
| Plateforme | Assistant « JewelerOS » (identifiant de partenaire propre à Ware) + boutique Bluestar Applications. Même éditeur que Hudson-Poole. Vérifié (scripts réseau, pied de page « Managed by Bluestar Applications »). |

Convention : **[V]** vérifié, **[I]** inféré, **[S]** supposé. Prix en USD. Les détails de l'application 3D (17 rubriques, prix en direct) sont dans `hudson-poole-fine-jewelers.md` : même application générique, non vérifiée avec la configuration de Ware [S].

## Parcours

| Étape | Options |
|---|---|
| 0. Page de départ | « Step 1 of 4 », assistant visible en 1,9 s (vignettes à 1,9 s) ; pas de 3D sur la page [V] |
| 1. « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose ; pas de platine visible) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » [V] |
| 2. « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) + « Decide later » [V] |
| 3. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 ct, « Decide later » [V] |
| 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| 5. Sortie | `POST jeweleros.com/api/create/from-ring-config/` interdit par `robots.txt` : non exécuté ; message « Something went wrong / Try again » dans mon navigateur gardé. Les choix sont conservés (stockage local : métal, type de diamant, 4 réponses) [V] |
| 6. 3D de Ware | non atteinte (voir Limites) |
| 7. Classique | Engagement Rings (Classic, Halo, Solitaire, Vintage, 3 Stone, All) vers fiche monture vers choix du diamant vers bague complète vers panier [V] |
| 8. Panier | `/cart.html` puis « Proceed to Checkout » vers `/login-checkout.html` (non suivi) [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (jaune / blanc / rose) | 3 boutons | enregistre le métal (`metal: yellow` en stockage) ; vignettes de l'assistant changent de couleur | aucun | OK (3 métaux seulement) |
| Cartes de style (9) | boutons | passe à l'étape 2 ; « Start from scratch » aussi ; l'historique en haut rappelle les choix | aucun | OK |
| Bascule Natural / Lab Grown | 2 boutons | change la couleur des cartes (bleu / vert) | aucun | OK |
| Cartes de forme (10) | boutons | étape 3 | aucun | OK |
| Cartes de carat (9) | boutons | étape 4 | aucun | OK |
| Cartes de délai (4) | boutons | dernière étape : appel API interdit | aucun | NT (suite) |
| Back / Skip | boutons | retour d'étape ; Skip ouvre normalement la 3D (appel API interdit) | | OK pour Back ; Skip NT |
| Page « Custom Engagement Rings » : 10 questions FAQ | accordéon | la réponse s'ouvre au clic (vérifié sur « How much… ») | | OK |
| Boutons « Start Designing Your Ring », « 3D Ring Builder », « Build Your Custom Ring », « Design Your Ring Now » | liens | tous vers la page de départ | | OK |
| Engagement Rings : Classic, Halo, Solitaire, Vintage, 3 Stone | liens | listes par style | | OK |
| Liste : Select Price (5 tranches), Metal (14K jaune / rose / blanc), Category (6), Product Type (Ring), Sort (Popularity / Price asc / Price desc) | 5 listes | listes présentes ; 30 cartes, prix de 500 à 3 300 $ ; effet de chaque filtre non actionné un par un | | OK (filtres NT individuellement) |
| « Add to Wish List », « Comapre » (sic) sur chaque carte | liens | non cliqués (comparaison : appels `?stoneID` interdits sur le site frère) | | NT |
| Fiche monture (Fana S3842/WG) : PRODUCT DETAILS / QUESTIONS | onglets | détail : 14K or blanc, 0,02 ctw de pierres latérales, tailles 4-12 | monture 2 200 $ | OK |
| Add a Center Diamond | lien | `choose-your-diamond/?rid=20556` | | OK |
| Request Information, Send hint, Wishlist, Compare, Facebook, Twitter, Pinterest | liens | formulaires et partage ; pas de saisie, pas d'envoi | | NT (règle : aucun formulaire) |
| Diamants : 10 formes, prix (min 200), carat 0,25-15, couleur D-K, pureté IF-SI2, taille, certificat (AGS, EGL USA, EGL INTL, GCAL, GIA, IGI) | cases, champs, curseurs | 2 023 résultats au départ ; filtres présents ; effet chiffré non relevé (il l'a été sur Hudson-Poole, même moteur) | 504 $ (0,30 ct K SI1 GIA, première ligne) | OK (effet NT) |
| Complete Your Ring (bague complète) | lien | fiche avec monture + pierre | 2 704 $ | OK |
| Add to Cart sans taille | bouton | alerte « Please Select a Ring Size !! » | | OK |
| Taille (liste 4 à 12) puis Add to Cart | liste, bouton | `/cart.html` | monture 2 200 + pierre 504 = 2 704 $ | OK |
| Panier : Remove The Set, Coupon, Continue Shopping, Proceed to Checkout, lien Kimberley | liens, champ | `Proceed` vers `/login-checkout.html` (non suivi) ; coupon non saisi | | NT |
| Wish List / Login / Search / David Yurman / téléphones | en-tête | liens présents (2 numéros, 334-821-7375 et 334-826-9000) | | NT |
| Page « Build a Band » | iframe `malobands.com` | outil tiers dont `robots.txt` interdit toute la racine : non audité (voir Limites) | | NT |

## Options disponibles

- **Assistant** : métaux jaune, blanc, rose ; 8 styles + « from scratch » ; naturel ou synthétique ; 9 formes ; carat 0,5 à 5 ; délai en 4 tranches [V].
- **Classique** : monture en or 14K jaune, rose ou blanc (pas de platine dans le filtre) ; la fiche indique « special ordered in any finger size, in Platinum, 18KT & 14KT gold » [V].
- **Diamants** : 10 formes ; certificats AGS, EGL USA, EGL INTL, GCAL, GIA, IGI ; filtres prix, carat, couleur, pureté, taille [V].
- **Taille de doigt** : 4 à 12 par demi-taille [V].
- Pas d'option de gravure, d'alliance ou de pavé sur les fiches classiques lues ; la 3D n'a pas été vue [I].

## Prix, délais, retours, garanties

- **Prix** : classique : prix de la monture sur la fiche (« Our Price: $2200.00 »), prix de la pierre, total (« Total Price: $2704.00 ») [V]. Page de la liste : prix de 500 à 3 300 $ pour 30 montures [V]. Pas de décomposition métal / façon.
- **Prix 3D** : selon la FAQ du site, « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s) » [V].
- **Délai** : « most custom engagement rings are ready in 2-4 weeks » ; durée précise donnée au rendez-vous [V].
- **Livraison** (`/page/shipping.html`) : assurée aux États-Unis, **aucun envoi hors États-Unis** ; commande de moins de 100 $ : 20 $ ; de 100 à 1 000 $ : gratuite FedEx 2Day ; plus de 1 000 $ : FedEx Next Day ; diamants libres gratuits ; options Next Day / Samedi 15 à 50 $ ; signature adulte ; retrait en magasin avec pièce d'identité ; jusqu'à 10 jours si fabrication [V].
- **Retours** (`/page/return.html`) : 30 jours après livraison ; exclus : articles commandés spécialement, portés, endommagés, redimensionnés, gravés ou modifiés ; numéro RMA par téléphone ; assurance obligatoire (moins de 25 000 $) ; certificats à joindre [V]. Une bague configurée est une commande spéciale, donc non retournable [I].
- **Garantie** : « warranty on any manufacturing defects » sur les bagues sur mesure, sans durée ni conditions (FAQ du site) [V].
- **Certificats** : GIA, AGS, GCAL, IGI, EGL ; mention « diamond grading report from the GIA » sur la bague complète [V].
- **Libellé du synthétique** : « Lab Grown » dans l'assistant [V].
- **Moyens de paiement affichés** au panier : Visa, Mastercard, American Express, Discover ; taxe 0,00 $, remise 0,00 $ [V]. Pas de financement vu.
- **Langues, devises** : anglais, dollar [V].

## Confiance et service

- Rendez-vous : un concierge texte le client pour un rendez-vous en magasin ou virtuel (téléphone / vidéo) ; on peut apporter sa propre pierre centrale [V, FAQ].
- Compte : non requis pour concevoir ; nom et téléphone demandés pour enregistrer le design [V, FAQ].
- Service : téléphones 334-821-7375 et 334-826-9000, cartes de magasins, remise à taille, estimation, conception sur mesure, réparation, expertise [V].
- Avis : aucun avis chiffré lu ; fiche bague complète « Currently 0/5 Stars. No reviews » [V].
- Preuves de fabrication : aucune photo ou vidéo d'atelier, aucun suivi de commande lu ; « Order Status » annoncé dans la politique de livraison [V pour ce qui a été lu].
- Page « About Us » : fondation en 1946 par Lamar et Libby Ware, « oldest continuously operating family jeweler » de la région [V].

## Points forts à retenir pour JR Diamond

1. **Page de présentation du service sur mesure en 3 étapes** (« Design Online », « Finalize In Store », « Ready In 2-4 Weeks ») avec une FAQ de 10 questions qui répond au prix, à la garantie, à la pierre apportée, au rendez-vous à distance. Preuve : `/page/custom-engagement-rings.html`.
2. **Assistant d'entrée sans friction**, réponses facultatives (« Decide later »), historique des choix affiché, 2 colonnes sur iPhone sans débordement (390/390). Preuve : étapes 1 à 4, iPhone 13.
3. **Prix annoncé honnêtement comme celui de la monture seule** (la pierre est ajoutée au rendez-vous) : la mention évite la surprise. Preuve : réponse FAQ « does not include your center stone(s) ».
4. **Panier simple** pour monture + pierre : total unique (2 704 $), coupon, paiement Visa/MC/Amex/Discover affichés avant la connexion. Preuve : `/cart.html`.
5. **Rendez-vous virtuels et pierre apportée** : service utile pour une clientèle éloignée, proche du besoin « transformation de bijou de famille » de JR Diamond.

## Défauts observés

1. **3D non atteignable pour un robot** : le dernier écran de l'assistant appelle une API interdite ; il affiche « Something went wrong » sans la 3D (limité à mon navigateur gardé) [V].
2. **Métaux limités** dans l'assistant (3 couleurs) et le filtre classique (14K uniquement) ; pas de platine dans le filtre malgré la mention « special order » [V].
3. **Livraison États-Unis uniquement** [V] ; aucune devise ni langue autre.
4. **Retours** : pas de retour pour une commande spéciale ; aucun cas explicite pour le sur mesure [V/I].
5. **Garantie sans durée** ni conditions [V].
6. **Faute de frappe sur toutes les cartes** : « Comapre » [V].
7. **Erreurs réseau** : `ERR_TUNNEL_CONNECTION_FAILED` sur des appels tiers, 401 sur Usermaven, 401 sur un autre service d'analyse à l'ouverture des pages [V].
8. **La fiche monture n'a pas de prix de pierre** : la monture « Fana » doit être associée à une pierre pour acheter (« Add a Center Diamond »), pas de bouton « Add to Cart » cliquable sur la fiche de monture (clic expiré) [V], donc pas d'achat de la monture seule [I].

## Limites de l'audit

- `robots.txt` de Ware interdit `/cgi-bin/`, `/exec/`, `/admin/`, `/upload/pdf/seo_report/` : tout le reste a été ouvert. Les appels `jeweleros.com/api/` (configuration, enregistrement, création de bague) sont interdits par le `robots.txt` du fournisseur et ont été annulés dans le navigateur.
- **Écart à signaler** : en lançant le relevé de contrôles, j'ai chargé une fois la racine de `https://customer4204403-build-a-band.malobands.com/` (iframe de la page « Build a Band ») **avant** d'avoir lu le résultat de la vérification (`INTERDIT`, règle `Disallow: /`). Le relevé de 3 contrôles et la capture ont été supprimés ; rien n'en est repris ici. L'outil « Build a Band » n'est pas audité.
- La 3D de Ware n'a pas été vue : aucune rubrique, option ni prix en direct de Ware n'est établi ; ce qui précède sur la 3D vient de l'application générique testée chez Hudson-Poole [S].
- Pas actionnés individuellement : filtres de la liste classique, liste de souhaits, comparaison, partage, formulaires (demande d'information, indice) ; aucun formulaire n'a été rempli ni envoyé.
- Un article a été ajouté au panier (1 bague complète de test) ; la page « Proceed to Checkout » (`/login-checkout.html`) n'a pas été ouverte ; le panier est lié à la session du navigateur, non à un compte.
- Chronométrage : assistant visible en 1,7 à 1,9 s (ordinateur), 1,9 s (iPhone) ; fiche monture chargée en 6,8 s (DOM) ; page diamants 7,6 s ; panier atteint après le clic sur « Add to Cart » (délai non chronométré) ; mesures isolées de la 3D impossibles (voir plus haut).
- Pas testés : essayage à domicile, AR, 360°, vidéo (absents des pages lues), langues autres, chat (règle de l'étude).

## Sources

- https://www.warejewelers.com/page/custom-ring-builder.html, `/page/custom-engagement-rings.html`, `/page/about-us.html`, `/page/shipping.html`, `/page/return.html`, `/wedding-and-bridal`, `/wedding-and-bridal/engagement-rings/all-engagement-rings` [V]
- `/ring-detail.html?rid=20556`, `/design-your-own-ring/choose-your-diamond/?rid=20556`, `/complete-ring.html?did=2138970`, `/cart.html` [V]
- https://www.warejewelers.com/robots.txt (lu le 15/11/2026) [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/ware-jewelers/` (hors dépôt).
