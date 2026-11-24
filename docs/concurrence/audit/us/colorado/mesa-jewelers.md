# Audit : Mesa Jewelers, « 3D Ring Designer » (Grand Junction, Colorado)

| | |
|---|---|
| Site | Mesa Jewelers, 444 Main Street, Grand Junction (CO) : https://www.mesajewelers.com |
| Page de départ | https://www.mesajewelers.com/pages/design-your-ring |
| Date | 15/11/2026 (en-tête demandé) ; relevés refaits le 24/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel** : questionnaire de départ en 4 étapes vérifié, mais **la vue 3D ne s'est jamais affichée** ; le panier n'a pas été ouvert (interdit par robots.txt) |
| robots.txt | `Disallow: */cart` (V : l'outil de contrôle répond INTERDIT pour https://www.mesajewelers.com/cart, jamais ouvert) ; la page de départ, `/ringsettings`, les pages de politique et de service : AUTORISÉ. Hôte du cadre 3D `jeweleros-custom.netlify.app` : `Allow` (V, cache de l'outil) |

Marques : **V** vérifié (page lue ou contrôle actionné) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page de départ.

## Parcours

Un assistant en 4 étapes (composant `ring-walkthrough`, script `jeweleros.com/static/dist/jos.js`, V : requêtes réseau) qui doit ouvrir un « 3D Ring Designer » (StoneAlgo/JewelerOS) ; puis, à part, un constructeur classique `/ringsettings` (V).

| Étape | Options |
|---|---|
| 1 sur 4, « Let's start designing your ring » | métal (jaune, blanc, rose) ; 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) + « Start from scratch » ; Back, Skip |
| 2 sur 4, « Choose your center stone » | bascule Natural / Lab Grown ; 9 formes (rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant) + « Decide later » |
| 3 sur 4, « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats + « Decide later » |
| 4 sur 4, « When do you need your ring? » | 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, « Not sure yet » ; pied : « we can expedite if needed » |
| Après l'étape 4 | la page ne montre plus que le titre « DESIGN YOUR RING » : aucune bague, aucun message d'erreur visible dans ce relevé (V : 3 relevés à 2, 6 et 15 s) |
| `/ringsettings` | 1 Choose a ring, 2 Choose a diamond, 3 Complete ring ; 314 montures |

Le texte de la page https://www.mesajewelers.com/pages/custom-engagement-rings décrit la suite : « Design your ring online in stunning 3D / Pick out your center stone in our Grand Junction, CO showroom / Finalize & order » (V). La pierre se choisit donc en boutique, pas en ligne.

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow / White / Rose Gold (étape 1) | bouton | le bouton actif change et **les 9 vignettes de style changent de couleur** (`solitaire_yellow.webp` devient `_white`, `_rose`) | aucun prix | OK |
| 8 styles + « Start from scratch » | option | passe à l'étape 2 ; l'historique affiche « Solitaire » | aucun prix | OK (solitaire testé ; les 8 autres non cliqués) |
| Natural / Lab Grown (étape 2) | bascule | le bouton actif change ; les formes restent les mêmes | aucun prix | OK |
| 9 formes + « Decide later » | option | passe à l'étape 3 ; historique « Solitaire Marquise » (marquise testée) | aucun prix | OK (une forme testée) |
| 8 tailles de carat + « Decide later » | option | passe à l'étape 4 ; historique « … 1 carat » ; conseil « Most popular choice: 1 to 1.5 carat for natural and 2-3 carat for lab-grown » | aucun prix | OK (1 ct testé) |
| 4 délais | option | « 1 - 4 weeks » déclenche l'ouverture du designer 3D ; rien ne s'affiche (voir défauts) | aucun prix | **échec d'affichage** |
| Back, Skip | boutons | présents à chaque étape ; non actionnés | — | non testé |
| Requête de configuration du widget (`/api/widget/config/…`, `/api/config/…`, `/api/create/from-ring-config/`) | réseau | échouent (`ERR_FAILED`) ; la console montre « Config generation failed: TypeError: Failed to fetch » | — | **en panne dans ce navigateur** |
| `/ringsettings` : « 314 settings found » | liste | apparaît après **14 s** (« LOADING RINGS » d'abord) ; prix avec centimes, par exemple « 14K White Gold Round Halo Engagement Ring $2,425.10 » | affiché | OK mais lent |
| Menu « Sort » (Default, Featured, High to Low, Low to High, Newest) | liste | « Low to High » : liste inchangée à 4,5 s ; « High to Low » : la liste commence ensuite par 875,45 $ (ordre croissant) ; effet **décalé d'une action** (I : latence) | — | comportement incertain |
| Styles de bague (9 : Solitaire, Side Stone, Three Stone, Halo, Pave, Antique, Single Row, Multi Row, Bypass), métaux (4), prix min/max | filtres | liens masqués dans des menus repliés ; les tentatives de clic ont échoué (« click err ») | — | **non testé** |
| Vue grille / liste (`grid-layout-*`) | boutons | la vue liste ajoute « QUICK VIEW » à chaque carte | affiché | OK |
| « Can be set with: » | menu | présent ; non actionné | — | non testé |
| Panier | lien | **non ouvert** (robots.txt) | — | non testé |
| Liens « Financing », « Appointments », « Our Reviews », « Antwerp Diamonds » | liens | présents ; seules les pages de retour, service, sur mesure ont été lues | — | non testé |

Contrôles de la page de départ, au sens de `controls.cjs` : 192 sur ordinateur, 70 sur iPhone (menu replié) ; téléphone `tel:9702451617`, rendez-vous `/make-an-appointment`, recherche (V).

## Options disponibles

- **Métaux de l'assistant** : or jaune, blanc, rose (V). Ni platine ni titre (14 k, 18 k) ; le constructeur `/ringsettings` ajoute « Platinum » (V). Titre noté seulement dans les libellés de montures (« 14K White Gold », V).
- **Styles de départ** : 8 + départ libre (V). **Styles du constructeur** : 9 (V).
- **Formes** : 9 (V). **Carats** : 8 valeurs de 0,5 à 5 (V). **Origine** : Natural / Lab Grown (V).
- **Délai souhaité** : 4 choix (V).
- **Non proposés dans l'assistant** : corps de bague, griffes, pavage, taille de doigt, gravure ; le texte dit que le 3D Ring Designer permet de « customize every detail » et de fixer un carat exact (V : https://www.mesajewelers.com/pages/custom-engagement-rings), mais ce niveau n'a pas pu être vu.

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant (V). Le constructeur affiche le prix de la monture seule, avec centimes (V). Le prix de la bague complète dépend de la pierre choisie en boutique (I : texte de la page « Pick out your center stone in our showroom »).
- **Délai** : « we can have it ready for you in just a couple of weeks » (V : https://www.mesajewelers.com/pages/custom-engagement-rings) ; l'assistant propose « 1 - 4 weeks » et dit pouvoir accélérer (V).
- **Retours** : remboursement dans les 7 jours si la pièce est dans son état d'origine et non retouchée par un autre bijoutier ; échange contre un avoir jusqu'à 30 jours ; « Custom orders, special orders and modified pieces are not refundable » ; numéro d'autorisation de retour (RA#) par téléphone (V : https://www.mesajewelers.com/pages/return-policy).
- **Livraison** : 2 jours à 30 $ (gratuit au-dessus de 500 $) ; nuit 50 $ (gratuit au-dessus de 2 000 $), par UPS (V : même page).
- **Garantie** : non lue ; la page de services mentionne nettoyage et inspection, réparations, évaluation (V : https://www.mesajewelers.com/services).
- **Financement** : une page « Financing » existe ; non lue (V : lien).
- **Sur mesure hors assistant** : devis gratuit, concept, approbation, coulée, pose, contrôle qualité, ré-création de bijoux anciens (V : https://www.mesajewelers.com/pages/custom-jewelry).

## Confiance et service

- **Certificats** : « conflict free » et gemmologues diplômés GIA cités dans la page sur mesure (V) ; aucun certificat par pierre dans l'assistant. Libellé : « Lab Grown » (V).
- **Avis** : deux avis Google cités en toutes lettres sur la page de la conception (V) ; page « Our Reviews » (`/testimonials`) non lue.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande sur les pages lues (V pour les pages lues).
- **Langues, devises** : anglais, dollar (V).
- **Service** : téléphone (970) 245-1617, rendez-vous, boutique de plus de trois décennies, personnel « presque 100 ans d'expérience cumulée » (V : page de conception). Cadre de marque : « Antwerp Diamonds », page de titre seul (V).

### Mesure du visuel principal

| Page | Ordinateur | iPhone |
|---|---|---|
| Assistant : 1re vignette de style visible | 3,2 s (HTML prêt en 0,8 s) | 4,8 s (HTML prêt en 0,8 s) |
| Constructeur `/ringsettings` : cadre prêt | 0,6 s | non mesuré |
| `/ringsettings` : liste de 314 montures | 14 s | non mesuré |
| Vue 3D du designer | **jamais affichée** (15 s) | non obtenue |

Mesures isolées, avec le proxy de la session, un seul essai par page. Les vignettes sont des images `.webp` (V) ; la vue 3D n'a pas pu être mesurée.

## Points forts à retenir pour JR Diamond

1. **Un questionnaire en 4 questions courtes avant toute 3D** (style, pierre, taille, délai) avec une indication « le plus choisi » à chaque étape : bon pour guider un novice (V : étapes 1 à 4).
2. **La couleur du métal change toutes les vignettes de style dès l'étape 1** : le visiteur voit tout de suite le métal choisi (V : `solitaire_yellow.webp` devient `_rose`).
3. **Le choix du délai posé comme une question** (1 à 4 semaines, 1 à 3 mois…) : le délai de 14 jours ouvrés de JR Diamond y répond sans effort (V : étape 4).
4. **Parcours « dessiner en ligne, choisir la pierre en boutique, finaliser »** : explicite et honnête sur la place du magasin ; même parcours que Snyder Jewelers, d'après l'inventaire (V : https://www.mesajewelers.com/pages/custom-engagement-rings ; l'inventaire du dossier le note).
5. **Retour et livraison en quatre phrases**, avec seuils de gratuité chiffrés (V : https://www.mesajewelers.com/pages/return-policy), plus clair que beaucoup de sites de la série.

## Défauts observés

- **La vue 3D n'apparaît pas** après l'étape 4 : page vide avec le seul titre. Les appels de configuration échouent (`ERR_FAILED`, « Failed to fetch »). Cause non établie : une note de mon script d'exploration indique que l'API de l'éditeur répond par un défi Cloudflare (403), non revérifié ici ; l'inventaire du dossier évoque plutôt l'absence de WebGL (« We couldn't load your ring design »). Aucun blocage n'a été contourné. Un visiteur dans ce cas voit une page vide sans explication (V pour l'état, I pour la cause).
- **Aucun prix et aucun carat exact avant la boutique** : l'assistant ne peut pas donner un budget (V).
- **Constructeur très lent** : 14 s de « LOADING RINGS » avant la première monture (V).
- **Tri des montures confus** : le résultat de « Low to High » n'apparaît pas, et celui de « High to Low » ressemble à un tri croissant (V pour l'observation, I pour la latence).
- **Pas de gravure, pas de taille, pas de corps de bague** dans l'assistant (V).
- **Libellés génériques** : pas de titre 14 k ou 18 k, pas de platine dans l'assistant (V).
- **Image de substitution de la bannière** (`placeholder.shopfinejewelry.com/1800x600`) comme plus grande image affichée (V : mesure de rendu).

## Limites de l'audit

- Le « 3D Ring Designer » n'a jamais été vu : aucune option de bague, aucun prix, aucun mode de vue (photo, 360°, 3D, sur la main, AR, zoom) n'a pu être vérifié. L'audit est donc partiel.
- Les filtres de style, de métal et de prix du constructeur, les formes autres que la marquise, les styles autres que le solitaire, Back et Skip, et le panier ne sont pas testés.
- Pour ne pas insister face au défi noté, le script d'exploration abandonnait les appels vers `jeweleros.com/api/` ; la vue a donc été mesurée **avec** ces appels coupés. Un navigateur ordinaire, avec les appels permis, peut afficher la 3D (S).
- Aucun formulaire rempli, aucun paiement, panier non ouvert (robots.txt).
- Mesures de temps : un essai par page, avec le proxy de la session. La date 15/11 de l'en-tête est imposée par la commande ; les relevés ont été refaits le 24/11.

## Sources

- https://www.mesajewelers.com/robots.txt (via l'outil de contrôle)
- https://www.mesajewelers.com/pages/design-your-ring
- https://www.mesajewelers.com/ringsettings
- https://www.mesajewelers.com/pages/custom-engagement-rings
- https://www.mesajewelers.com/pages/custom-jewelry
- https://www.mesajewelers.com/pages/return-policy
- https://www.mesajewelers.com/services
- https://www.mesajewelers.com/pages/antwerp-diamonds
- Script de l'éditeur : https://www.jeweleros.com/static/dist/jos.js
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/mesa-jewelers/`
