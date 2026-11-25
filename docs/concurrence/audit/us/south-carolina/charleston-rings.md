# Audit : Charleston Rings (Caroline du Sud)

- **Site** : Charleston Rings (Charleston, SC ; « Truly Custom® Lab Grown Diamond Engagement Rings »), boutique Shopify
- **Adresse** : https://charlestonrings.com/
- **Page de départ** : https://charlestonrings.com/collections/engagement-rings-all (aucun configurateur : le constructeur 3D est retiré, voir l'inventaire). Fiche testée : https://charlestonrings.com/products/the-jasmine-marquise
- **Date** : 15/11/2026 (date de l'étude) ; mesures prises le 25/11/2026, pendant les soldes « Black Friday »
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) ; Chromium en affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Fiche produit, catalogue (522 bagues) et pages de service vérifiés sur ordinateur. Non faits : « ADD TO CART » (`/cart/add` interdit par robots.txt), tri (`sort_by` interdit), filtres cumulés (interdits), parcours sur rendez-vous. Sur iPhone : chargement et débordement mesurés, interactions non rejouées.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée), **[I]** inféré, **[S]** supposé. Prix en dollars américains.

## Parcours

Pas de constructeur en ligne : le visiteur choisit une bague finie dans le catalogue, puis règle ses options sur la fiche [V]. Le sur-mesure passe par un rendez-vous, puis un rendu CAO, et le paiement vient après validation [V, https://charlestonrings.com/pages/truly-custom-rings].

| Étape | Options | Prix |
| --- | --- | --- |
| 1. Catalogue (`/collections/engagement-rings-all`) | 522 produits ; filtres forme, métal, type de pierre, prix ; tri ; bouton « Choose options » (aperçu rapide) | « From » le prix le plus bas de la fiche |
| 2. Fiche (`/products/the-jasmine-marquise`) | forme (10 liens vers une fiche par forme), « Add Hidden Halo » (autre fiche), métal (4), carat (7), type de pierre (1), taille de doigt (31 entrées) | prix de la variante affiché seul, sans décomposition |
| 3. Panier (`/cart`) | ouvert vide : « Your cart is empty » ; rien ajouté | non vu |
| Sur mesure (`/pages/truly-custom-rings`) | séance de conception (gratuite), CAO, approbation et paiement, livraison | à partir de 3 000 $ [V, FAQ] |

## Contrôles vérifiés

Catalogue : 451 contrôles visibles sur ordinateur, 364 sur iPhone (JSON du relevé : surtout les pastilles de métal des 96 fiches affichées). Fiche : base Jasmine Marquise, or jaune 14 k, 1 ct.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Center Stone Shape (10 liens : Asscher, Cushion, Elongated Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round) | lien vers fiche | ouvre la fiche de la forme (`/products/the-jasmine-<forme>`) ; une fiche par forme | 2 700 $ au départ | OK (liens relevés ; seule la marquise ouverte) |
| Add Hidden Halo | lien | mène à `/products/the-jasmine-marquise-hidden-halo` | non ouvert | non testé (autre fiche) |
| Metal Type : 14k Yellow / White / Rose Gold | pastille radio | adresse `?variant=…` ; prix inchangé (2 700 $) ; photo principale inchangée (même fichier `ERSL1806Mq200YG-Top.png`) | aucun écart entre ors | OK ; l'image ne suit pas le choix |
| Metal Type : Platinum | pastille radio | prix 3 100 $ au lieu de 2 700 $ (+400 $ à 1 ct) ; photo principale inchangée | +400 $ | OK ; aucune photo platine dans la galerie |
| Center Stone Carat Weight : 1, 1.5, 2, 2.5, 3, 4, 5 | bouton radio | or jaune : 2 700, 3 300, 5 100, 5 500, 7 200, 9 700, 11 700 $ ; platine : 3 100, 3 700, 5 500, 5 900, 7 600, 10 100, 12 100 $ ; photo principale inchangée (même fichier à 5 ct qu'à 1 ct) | oui | OK ; l'image ne grossit pas |
| Stone Type : Lab Grown Diamond | bouton radio | seule valeur (aucun naturel) | aucun | OK (unique) |
| Finger Size (liste) | select | « Unsure (Send Free Ring Sizer) », puis 3 à 10 par quart de taille (31 entrées) ; choix sans effet visible sur le prix | aucun | OK |
| ADD TO CART | bouton | non cliqué : le formulaire envoie vers `/cart/add`, interdit par robots.txt | n/a | non testé (panier interdit par robots.txt) |
| Barre fixe « ADD TO CART » avec vignette et prix ($11,700 après sélection) | bouton | apparaît au défilement, suit la variante ; non cliquée | suit la sélection | OK (affichage seul) |
| Galerie : 12 vignettes (haut, côté, face, « 3D » pour chaque or jaune, blanc, rose) + vidéo | vignettes, bouton « Next » | « 3D » est une image fixe (`…-3D.png`) [V, nom de fichier] ; une vignette vidéo (`.thumbnail`) relevée, non lue ; pas de photo platine | aucun | OK (lecture de la vidéo non testée) |
| Zoom picture | bouton | présent à la lecture du texte ; clic automatisé sans résultat (délai dépassé), effet non établi | aucun | non testé (échec du clic) |
| Shop Pay « 0% APR, from $130.91/mo » | texte et bouton | financement affiché dans l'aperçu rapide pour 2 700 $ ; le « i » et Shop Pay non cliqués (paiement) | mensualité | non testé (paiement) |
| Text us (bulle) | bouton | « Hi there, have a question? Text us here. » ; non ouvert (conversation) | aucun | non testé (chat) |
| Choose options (catalogue) | bouton | ouvre une fenêtre avec forme, métal, carat, taille, 16 points de galerie et le même « ADD TO CART » | 2 700 $ | OK (ouverture seule) |
| Filtres du catalogue : Center Stone Shape (10 cases : Oval, Radiant, Emerald, Round, Elongated Cushion, Pear, Marquise, Princess, Cushion, Asscher) | cases | via adresse unique `?filter.p.m.custom.stone_shape=Marquise` : 50 produits (au lieu de 522), de 2 700 à 2 900 $ en tête. Clic sur la case non réussi par le script | oui | partiel (adresse lue, clic non rejoué) |
| Filtre Metal Type (jaune, blanc, rose, platine) | cases | non appliqué : l'adresse contient « + » (`metal+type`), interdite par robots.txt | n/a | non testé (interdit par robots.txt) |
| Filtre Stone Type (Lab Grown Diamond 522) | case | 522 sur 522 : tout le catalogue est synthétique [V, libellé] | aucun | non testé (aucun effet possible) |
| Filtre Price (champs From / To, curseur jusqu'à 22 480 $) | champs, curseur | `?filter.v.price.lte=3000` : 120 produits ; saisie dans le champ non réussie par le script | oui | partiel (adresse lue) |
| SORT BY | bouton | liste : Featured, Best selling, A-Z, Z-A, Price low to high, Price high to low, Date old to new, Date new to old ; options non choisies (`sort_by` interdit par robots.txt) | n/a | non testé (interdit par robots.txt) |
| Pagination 1 à 11 | liens | `?page=2`… ; 96 fiches par page [V, relevé] ; non suivie | n/a | non testé |
| Black Friday Deals, Truly Custom®, Wedding Bands, Fine Jewelry, Appointments, Learn | liens de menu | `/collections/black-friday-collection`, `/pages/truly-custom-rings`, etc. ; seuls `truly-custom-rings`, `return-policy`, `limited-warranty-overview`, `your-faqs`, `care-plan` ouverts | n/a | partiel |
| Newsletter (e-mail, SUBSCRIBE) | champ, bouton | rien saisi | aucun | non testé (formulaire) |
| (843) 951-9250 | lien `tel:` | non appelé | aucun | non testé |
| Compte, recherche, panier (icônes) | liens | panier ouvert : vide ; compte et recherche non ouverts (`/account` interdit) | n/a | partiel |
| Ensemble sur iPhone | tous | fiche : aucun débordement (390 sur 390) ; catalogue : boutons FILTER et SORT BY | n/a | OK (chargement) ; interactions non rejouées |

## Options disponibles

- **Formes (10)** : asscher, cushion, elongated cushion, émeraude, marquise, ovale, poire, princesse, radiant, rond [V].
- **Métal** : or 14 k jaune, blanc, rose ; platine. Pas de 18 k ni de choix de titre [V].
- **Carats** : 1, 1,5, 2, 2,5, 3, 4, 5 ct [V]. Pas de curseur, pas de pierre au choix : « Truly Exceptional » (F ou mieux, VS1 ou mieux, taille « beyond-ideal ») [V].
- **Pierre** : synthétique seulement (IGI ou GIA pour les pierres de centre) [V].
- **Autres** : ajout d'un halo caché (fiche distincte) ; taille 3 à 10 par quart ou « baguier gratuit » [V]. Pas de gravure ni de griffes sur la fiche [V].
- **Vues** : photos (haut, côté, face, « 3D » fixe) par or ; vidéo ; zoom annoncé. Pas de 3D interactive, pas de réalité augmentée relevés [V].
- **Catalogue** : 522 bagues, tri en 8 modes, filtres forme, métal, type, prix [V].

## Prix, délais, retours, garanties

- **Prix** [V] : un seul montant par variante (« SALE PRICE »). Bague finie de 2 700 à 12 100 $ selon le métal et le carat (marquise). Aucune décomposition monture, pierre, façon. Catalogue : 990 à 4 400 $ en première page selon l'inventaire [V, inventaire] ; curseur de prix jusqu'à 22 480 $. Financement Shop Pay 0 % annoncé.
- **Délai** [V] : 4 à 5 semaines à partir de l'approbation de la CAO et de la pierre ; accélération possible, avec « expedited fee » en période chargée [V, https://charlestonrings.com/pages/your-faqs]. Aucune date estimée sur la fiche.
- **Livraison** [V] : expédition assurée ; États-Unis seulement (« we only ship in the USA ») ; frais non vus (panier non rempli).
- **Retours** [V, FAQ et https://charlestonrings.com/pages/return-policy] : « 30 day free returns » pour les bagues non modifiées ; **exclus** : bagues retaillées, modifiées, gravées ou personnalisées, et toutes les « Truly Custom® ». Celles-ci ont une « Satisfaction Guarantee » : modification ou refonte gratuite si signalée sous 14 jours. Aucun rachat des bagues. Une retaille gratuite par bague (exceptions : bagues sous 2 000 $, anneaux complets, plus d'une taille d'écart).
- **Garanties** [V, https://charlestonrings.com/pages/limited-warranty-overview] : défauts de structure ; perte de petites pierres (moins de 100 $) la première année ; retouches sous 14 jours ; expédition de retour prépayée. Plan d'entretien Jeweler's Mutual en option (314,99 à 1 449,99 $ selon la valeur de la bague) [V, https://charlestonrings.com/pages/care-plan].
- **Certificats** [V] : pierres de centre IGI ou GIA ; certificat tiers pour les centres de 0,75 ct et plus ; estimation écrite (« appraisal ») pour toute bague synthétique de 2 000 $ et plus.
- **Libellé du synthétique** [V] : « Lab Grown Diamond » sur les boutons et les fiches ; « lab-grown diamonds are real diamonds » dans la FAQ.
- **Langues, devises** [V] : anglais, dollar.
- **Contradiction** [V] : la fiche annonce un échange sous 30 jours, la page « Return Policy » une garantie de 14 jours ; les deux concernent des cas distincts mais ne sont pas distingués sur la fiche.

## Confiance et service

- **Avis** [V] : un témoignage nommé (« Cat & Dan ») et un carrousel d'avis sur la page du sur-mesure ; « Over 1,000 custom rings designed » ; aucune note chiffrée relevée.
- **Atelier et fabrication** [V] : « handcrafted in the USA » ; étapes affichées : séance, CAO, approbation, livraison. Aucune photo ni vidéo de fabrication de la commande, aucun suivi de commande relevé.
- **Service** [V] : rendez-vous en boutique (Charleston) ou virtuel ; « Expert Guidance » ; appel d'introduction ; téléphone et bulle « Text us » ; FAQ de 4 thèmes. Accessibilité : page dédiée.
- **Pied de page** [V] : le site se présente comme soutenant des « initiatives pro-vie, anti-traite, confessionnelles » : prise de position à ne pas reprendre.

## Points forts à retenir pour JR Diamond

1. **Le prix est affiché dès le catalogue**, y compris sur 522 bagues, avec un curseur et un filtre de prix [V, `?filter.v.price.lte=3000` : 120 produits].
2. **Une fiche par forme, avec le même modèle** : le visiteur compare les formes en changeant de fiche et retrouve le prix « From » [V, 10 liens].
3. **Écart d'option visible** : platine +400 $ à chacun des 7 carats relevés, carats de 1 à 5 chiffrés (1 ct 2 700 $, 2 ct 5 100 $, 5 ct 11 700 $ en or jaune) [V, relevés ci-dessus].
4. **Sur-mesure sans acompte** : CAO et choix de la pierre d'abord, paiement après validation ; « You're not locked in » [V, FAQ] : lève une peur citée dans les forums (payer avant de voir).
5. **Satisfaction sur mesure** : refonte ou modification gratuite sous 14 jours, retour d'expédition prépayé [V].
6. **Certificat et estimation** annoncés par seuil (0,75 ct pour le certificat tiers, 2 000 $ pour l'estimation), comme JR Diamond le fait dès 0,50 ct [V].
7. **Financement affiché** sur la fiche (0 % APR, mensualité calculée) [V, aperçu rapide].

## Défauts observés

- **La photo ne suit ni le carat ni le platine** : la même image (fichier or jaune) reste à l'écran de 1 à 5 ct et en platine ; la galerie n'a aucune photo platine [V]. C'est l'inverse de la promesse « ce que vous voyez existe ».
- Image « 3D » = photo fixe ; pas de vue 3D, pas de vidéo lue [V].
- Pas de décomposition du prix (pierre, monture, façon) ; la pierre n'est pas choisie ni filmée [V].
- Un seul titre d'or (14 k) ; pas de naturel ; pas de 18 k [V].
- Politique de retour répartie sur quatre pages (fiche, FAQ, retour, garantie) avec des durées différentes (30 et 14 jours) [V].
- Expédition aux États-Unis seulement ; aucune date de livraison estimée sur la fiche [V].
- Constructeur 3D retiré : la page `pages/custom-engagement-rings` répond 404 (relevé de l'inventaire) [V, inventaire].
- Le clic sur « Zoom picture » n'a pas répondu à l'automatisation [V, effet non établi].

## Limites de l'audit

- « ADD TO CART » et le panier rempli : non faits (`Disallow: /cart/`) ; le panier a été ouvert vide. Frais de livraison, délai au panier, moyens de paiement non vus.
- Tri (`sort_by`) et filtres de métal (`+` dans l'adresse) interdits par robots.txt ; filtres de forme et de prix lus par adresse unique, clics sur les cases non réussis.
- Aucun formulaire envoyé ; le chat « Text us », Shop Pay, la réservation de séance et la page de compte non ouverts.
- Mesures de chargement (fiche Jasmine Marquise, 2 essais, Playwright, réseau de l'environnement) : visuel principal ordinateur **616 ms** (plus grand élément) et **0,58 s** de premier contenu ; iPhone **848 ms** ; chargement complet 3,4 s (ordinateur) et 4,1 s (iPhone) [V]. Photo décodée seulement ; pas de 3D.
- La fiche testée est la marquise ; les autres formes n'ont pas été ouvertes, leurs prix sont supposés identiques à partir de la liste « From 2 700 $ » [I].
- Les prix et les soldes (« Black Friday » tout novembre) changent avec la date.

## Sources

1. Catalogue : https://charlestonrings.com/collections/engagement-rings-all (et variantes `?filter.p.m.custom.stone_shape=Marquise`, `?filter.v.price.lte=3000`)
2. Fiche : https://charlestonrings.com/products/the-jasmine-marquise
3. Sur mesure : https://charlestonrings.com/pages/truly-custom-rings
4. Retours : https://charlestonrings.com/pages/return-policy
5. Garantie : https://charlestonrings.com/pages/limited-warranty-overview
6. FAQ : https://charlestonrings.com/pages/your-faqs
7. Plan d'entretien : https://charlestonrings.com/pages/care-plan
8. Panier (vide) : https://charlestonrings.com/cart
9. robots.txt : https://charlestonrings.com/robots.txt
10. Inventaire de la Caroline du Sud : `docs/concurrence/audit/us/south-carolina/INVENTAIRE.md`
