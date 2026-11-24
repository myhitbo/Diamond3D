# Audit : The Diamond Guys (Scottsdale, Arizona, et Sherman Oaks, Californie)

- **Site** : The Diamond Guys, bijoutier-diamantaire, deux salons (Scottsdale, Sherman Oaks)
- **Adresse auditée** : https://www.thediamondguys.com/apps/ringbuilder/settings/ (redirige vers `/collections/ringbuilder-settings`)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright), sans GPU
- **Statut** : **partiel** : la liste des montures et la fiche produit fonctionnent jusqu'au panier ; l'étape « diamant » du constructeur ne s'affiche pas (page vide, voir Défauts)
- **Conformité** : `robots.txt` lu (Allow: /) ; toutes les adresses ouvertes AUTORISÉES ; aucun formulaire envoyé, aucun paiement ; le panier contient un article ajouté pour l'audit, jamais validé
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé

## Parcours

Ce n'est pas un configurateur visuel : un constructeur « en deux temps » classique, vendu comme « Ring Builder » (V, menu : Start with a Setting / Start with a Natural Diamond / Start with a Lab Grown Diamond).

| Étape | Options (vérifiées) |
|---|---|
| 1. Montures (`/collections/ringbuilder-settings`) | 563 produits annoncés, 21 pages de pagination, 32 cartes sur la page 1 ; tri ; photo 2D ; prix par monture (« center diamond sold separately ») |
| 2. Fiche monture | Photo(s) (15 images, 2 médias vidéo ou iframe, zoom présent), liste déroulante de variante (ici une seule : « 14K Gold / White, 1 590 $ »), « Add to cart », 3 accordéons (protection, conditions commandes spéciales, question), partage |
| 3. Diamant (`/apps/engagement-rings/diamonds`, `/navlabgrown`) | **Ne s'affiche pas** (page vide) ; menus diamants naturels et de laboratoire par forme visibles dans le menu (V) |
| 4. Panier (`/cart`) | Récapitulatif d'une ligne, quantité, retrait, note de commande, « Check out » |

Le configurateur de pierre est fourni par l'éditeur du constructeur (« RingBuilder Advance », `thediamondguy.app.theringbuilder.com`) (V, source de la page).

## Contrôles vérifiés

Contrôles de la liste lus avec controls.cjs (77 sur ordinateur, 66 sur iPhone), puis fiche et panier actionnés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pagination (2, 3, … 21, Next) | liens | `?page=N` ; 32 cartes sur la page 1 (563 produits annoncés pour 21 pages : le découpage n'est pas uniforme, I) | n/a | liens présents, page 1 lue |
| Tri (Sort) | liste | 9 choix : Featured, Most relevant, Best selling, A-Z, Z-A, Price low to high, Price high to low, Date old to new, Date new to old | n/a | choix lus, non actionnés |
| Bouton « Filter » (tiroir de filtres) | bouton | S'ouvre, mais ne contient que le tri : aucune facette de forme, métal, carat, prix (V, étiquettes du tiroir) | n/a | **tiroir sans filtre** |
| Carte monture (32 sur la page 1) | lien | Fiche `/collections/ringbuilder-settings/products/<nom>` ; prix affiché sur la carte | oui, 1 590 à 13 140 $ (page 1) | fonctionne (une fiche ouverte) |
| Variante (liste) | select | Une seule option (« 14K Gold / White - $1,590.00 ») | oui | vérifié |
| ADD TO CART | bouton | Redirige vers `/cart` avec « Metal Type : 14K Gold, Metal Color : White, Ring Size : 6 » ; prix 1 590 $ | oui | fonctionne ; la taille « 6 » est une valeur par défaut non choisie (I) |
| INCLUDES A 1-YEAR COMPLIMENTARY PROTECTION PLAN | accordéon | « Anything Promise » : un an de protection pour achats entre 500 et 250 000 $ (perte, vol, dommage, usure, entretien, remise à taille) | n/a | fonctionne |
| TERMS FOR SPECIAL ORDERS | accordéon | Commandes spéciales non remboursables ; prix ajustables avant confirmation (cours de l'or, du platine, des diamants) ; client prévenu avant validation | n/a | fonctionne |
| ASK A QUESTION | accordéon | Formulaire nom, e-mail, message (non rempli) | n/a | non testé (formulaire) |
| Partager (Facebook, X, Pinterest) | liens | Adresses `sharer.php`, `twitter.com/share`, `pinterest.com/pin/create` | n/a | présents, non suivis |
| Qté − / + / Remove (panier) | boutons | Modifient ou retirent la ligne (`/cart/change?…&quantity=0`) | n/a | vus, non actionnés |
| ORDER NOTE | zone de texte | Note de commande | n/a | présent |
| CHECK OUT | bouton | Mène au paiement (non cliqué) | n/a | non testé (limite de l'étude) |
| Menu Engagement Rings (forme, style), Create Your Own Ring | liens | Collections par forme (10 dont cœur), style (solitaire, halo, trois pierres, pavé, corps fendu, bande large) | n/a | présents |
| Menu Diamonds (naturels, laboratoire par forme) | liens | `/apps/diamondtools/…`, `/apps/diamondtools/diamondtype/navlabgrown` : pages sans contenu affiché | n/a | **défaillant** |
| Scottsdale/Los Angeles (téléphone), Visit Our Store, Make a Payment | liens | `tel:` ; `/pages/virtual-diamond-consultation` ; `/pages/secure-payment` | n/a | présents (rendez-vous page lue) |
| Newsletter | champ e-mail + Submit | « 5 % de remise immédiate » ; non rempli | n/a | non testé (donnée personnelle) |
| Black Friday (bandeau) | lien | 20 % sur la bijouterie (`/collections/black-friday-jewelry-promotion`) | oui | présent, non suivi |

Absents (V, aucun contrôle trouvé) : vue 3D ou 360° de la monture, essai sur la main, réalité augmentée, comparaison, enregistrement de conception, gravure, filtres de la liste, choix du titre d'or ou de la taille (hors variante), chat, WhatsApp.

## Options disponibles

- Montures : 563 (naturel et laboratoire mêlés ; au moins une monture « Lab Grown » dans la liste), des fabricants listés comme des numéros de style (N0595SMA, YJA6567R, GR2624DD…).
- Métal : variantes Shopify par fiche ; la fiche vue offre « 14K Gold / White » seulement (V).
- Garanties de qualité : or 14 k, 18 k ou platine seulement (V, `/pages/guarantee`).
- Formes de pierre (par menu) : rond, coussin, poire, princesse, asscher, ovale, émeraude, radiant, marquise, cœur.
- Pierre : naturelle (GIA) ou de laboratoire, choix hors du constructeur visible (page vide).
- Taille de doigt, gravure : non proposées sur la fiche lue.

## Prix, délais, retours, garanties

- **Prix** : affiché pour la monture seule (« Center Diamond Sold Separately ») ; pas de décomposition ; des promotions barrées apparaissent (3 190 $ barré, 2 550 $, V). Prix « sujets à ajustement avant confirmation » à cause des cours (V, accordéon).
- **Délai** : non affiché sur la fiche ; les devis CAD sont « dans quelques jours » (V, `/pages/custom-design`) ; aucun délai de livraison de bague.
- **Panier** : une ligne, sous-total 1 590 $, « Shipping, taxes, and discount codes calculated at checkout » ; les frais n'apparaissent qu'au paiement (V). Moyens de paiement : icônes dans le pied (cartes, Apple Pay, PayPal, Venmo, autres, passerelle Authorize.Net ; lues sur capture) (I).
- **Retours** : 15 jours, échange ou remboursement, en boutique ou par étiquette FedEx ; **commandes spéciales, sur mesure, non standard, CAD : jamais remboursées** ; envois internationaux ni repris ni remboursés ; frais de 200 $ si le rapport GIA est perdu ; la gravure sur bague est reprise mais non remboursée (V, `/policies/refund-policy`, `/pages/guarantee`).
- **Garanties** : garantie à vie de fabrication (remise à taille, cuvette, griffes, petits diamants latéraux), mais visites tous les 6 mois exigées dans un salon ; ne couvre pas la perte ou le vol du diamant central (V). Protection d'un an « Anything Promise » (V). Reprise « trade-up » à plein prix si le nouvel achat vaut au moins le double (plafond 50 000 $, diamants naturels GIA uniquement, V, `/pages/trade-up-policy`). Alignement de prix de gros annoncé (V).
- **Certificats** : « nos diamants sont tous certifiés GIA » (V, garantie) ; synthétiques non couverts par la reprise (V).
- **Libellé synthétique** : « Lab Grown » (V, intitulé d'une monture et chemin `navlabgrown`).
- **Langues, devises** : anglais, dollar ; aucun sélecteur (V).
- **Financement** : « Special financing with approved credit through Wells Fargo » (V, `/pages/services`).

## Confiance et service

- Avis : page `/pages/customer-reviews` vide ; bloc « What our Customers Say » sans contenu rendu sur les pages lues (V) ; le contenu tiers est peut-être bloqué dans notre environnement (S).
- Rendez-vous en salon ou en visioconsultation avec écran partagé et vidéos de pierre agrandies 40 fois (V, `/pages/virtual-diamond-consultation`) : preuve filmée de la pierre.
- Atelier sur place pour la réparation ; remises à taille comprises dans la garantie à vie (V, services).
- Conception sur mesure en trois étapes : concept, fichier CAD 3D « en quelques jours » à valider, impression de cire, fonte, sertissage (V, `/pages/custom-design`). Aucune photo de fabrication d'une commande, aucun suivi en ligne (V, absence).
- Contact : deux téléphones, e-mail info@thediamondguys.com, horaires mardi-vendredi 10 h-18 h, samedi 11 h-17 h (V, pied).

## Points forts à retenir pour JR Diamond

1. **Prix visible dès la liste**, avec tri par prix croissant ou décroissant (V, 9 choix de tri). C'est l'écart principal avec JR Diamond (« Sur devis »).
2. **Clause « prix ajustable avant confirmation » explicite** : le client est prévenu et approuve avant validation (V, accordéon). Modèle de transparence possible pour un prix lié à l'or.
3. **Définition écrite du « special order »** (tout article modifié, CAD, taille hors stock) avec raison du non-remboursement (V). Utile pour la question de l'avocat sur l'exception « fabriqué sur mesure ».
4. **Protection d'un an incluse** à partir de 500 $ (perte, vol, dommage, entretien) (V) : argument concret après-vente à comparer à l'offre de JR Diamond (première mise à taille offerte).
5. **Consultation vidéo avec vidéo de la pierre grossie 40 fois** (V) : proche de « pierre filmée ».
6. **Reprise « trade-up » à plein prix** (V) : mécanisme de fidélisation.
7. Fiche très courte (« Shipping, taxes… at checkout ») : le panier est lisible en une page (V).

## Défauts observés

- **Étape du diamant vide** : `/apps/engagement-rings/diamonds` et `/navlabgrown` chargent l'en-tête puis aucune application (page blanche) ; erreurs de script « jQuery is not defined » et une requête de worker à l'adresse `//www.thediamondguys.com/cdn/…` rejetée ; testé deux fois, avec défilement et souris (V). Cause site ou environnement non établie (I : page vide aussi en réel serait un défaut majeur).
- **Pas de filtres** dans la liste des montures : le tiroir ne contient que le tri (V), pour 563 produits.
- **Photo seulement** : aucune vue 3D, 360°, ou sur la main de la monture (V). Aucune vue du rendu avec le diamant.
- **Fiche sans choix** : une seule variante, taille 6 posée par défaut dans le panier (V), sans sélecteur de taille.
- **Clauses de retour restrictives** : aucun retour sur le sur mesure, les envois internationaux et les envois hors stock ; la garantie à vie dépend de visites tous les 6 mois en salon (V) ; peu adapté à un client hors Arizona.
- Frais de livraison inconnus avant le paiement (V).
- Avis clients non rendus, page d'avis vide (V).

## Limites de l'audit

- Le constructeur de diamant ne s'est pas affiché : filtres de pierres (taille, couleur, pureté, prix, certificat), choix naturel/synthétique, résumé « Complete Ring » et panier avec pierre n'ont pas pu être audités.
- Une seule fiche monture ouverte (N0595SMA) ; 563 produits non parcourus ; tri non actionné ; accordéon « Ask a question » et newsletter non remplis (données personnelles).
- Paiement non ouvert ; moyens de paiement lus sur capture (icônes) seulement. Frais de livraison inconnus.
- Temps (sans GPU, I) : premier visuel de produit sur la liste 0,68 s (ordinateur, deux mesures 0,68 et 0,78 s) et 0,66 s (iPhone) ; fiche 0,37 à 0,55 s ; le HTML répond en 0,3 à 1,4 s. Mesure sur images 2D (aucune 3D à mesurer).
- Pages de politique, de services et de consultation lues en texte ; pages Blog, Diamond Education, Custom Design (formulaire) non explorées plus loin.

## Sources

- https://www.thediamondguys.com/apps/ringbuilder/settings/ → `/collections/ringbuilder-settings`
- https://www.thediamondguys.com/collections/ringbuilder-settings/products/wide-bypass-solitaire-engagement-ring-n0595sma
- https://www.thediamondguys.com/cart
- https://www.thediamondguys.com/apps/engagement-rings/diamonds et `/navlabgrown`
- https://www.thediamondguys.com/policies/refund-policy
- https://www.thediamondguys.com/pages/guarantee, `/pages/trade-up-policy`, `/pages/services`, `/pages/faq`, `/pages/custom-design`, `/pages/virtual-diamond-consultation`, `/pages/customer-reviews`
- robots.txt contrôlé par l'outil de l'étude (toutes AUTORISÉES)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/the-diamond-guys/`
