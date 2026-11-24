# Royaume-Uni : inventaire des joailliers qui vendent en ligne

Recensement pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, dont trois britanniques : Taylor & Hart, 77 Diamonds, Queensmith) sans le refaire. On garde ces trois sites, on les classe, et on ajoute ce qui a été trouvé pour le Royaume-Uni.

Date de l'étude : 15/11/2026 (date retenue pour le dossier). Les mesures et les pages de cette passe ont été faites avec l'horloge de la machine au 24/11/2026 (compte à rebours « Black Friday » encore affiché sur 77 Diamonds). Les prix sont donc ceux de la période Black Friday.

Périmètre : joailliers établis au Royaume-Uni qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Exclus : grandes maisons internationales, grands magasins, places de marché.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré (déduit d'un extrait d'index de recherche, d'une page lue seulement en tête, ou du dossier Europe) · **S** supposé.

Méthode :
- Recherche web avec des requêtes génériques (Parallel Search), puis contrôle de `robots.txt` avec l'outil `robots.cjs` avant d'ouvrir chaque adresse.
- Chaque adresse a été ouverte une fois dans Chromium (Playwright, identité par défaut, proxy de l'environnement, sans contournement), à 2 secondes d'intervalle au moins par site. Statut HTTP et titre relevés.
- Aucun formulaire rempli, aucun compte créé, aucun paiement. Pas d'envoi d'information sur JR Diamond.

## Ce qu'il faut retenir

- **Sept constructeurs en ligne (monture, pierre, récapitulatif) ont été trouvés** : Steven Stone et 77 Diamonds (parcours actionné jusqu'au panier, V), puis Aardvark, Allure Jewellers, ASR Gems, Jessica Flinn et Diamond Rocks (page ouverte et extrait d'index lu, parcours non actionné, I). Les ateliers de Hatton Garden (Queensmith, Harmony Jewels, Primo, Faire & Fine) ajoutent un parcours sur mesure avec CAO et maquette.
- **Aucun site britannique rencontré n'affiche une 3D manipulable issue du fichier de fabrication.** Steven Stone montre des photos de rendu fixes par métal ; 77 Diamonds montre une séquence de 75 images à faire tourner à la souris (« 360° ») (V).
- **« Lab-grown » est le terme courant** au Royaume-Uni (onglet « Lab Grown » chez Steven Stone, « Lab-grown » chez 77 Diamonds, « lab grown » chez Queensmith et Harmony) (V). Le dossier Europe rappelle que la règle nationale admet « synthetic », « laboratory-grown » et « laboratory-created », et que la London Diamond Bourse a adopté « synthetic » le 2/9/2026 (V, repris du dossier Europe).
- **Quatre sites sont bloqués ou inutilisables** pour l'audit : Ernest Jones et H.Samuel (robots.txt illisible, HTTP 403), Novita Diamonds (HTTP 403), Diamonds Factory (page de blocage Cloudflare) (V). Aucune tentative de contournement.
- **Le prix en ligne est la norme** (« à partir de » pour la monture, pierre choisie à part, total TTC au récapitulatif). C'est l'écart principal avec le prototype, qui affiche « Sur devis ».

## Classement

Critères, dans cet ordre : un configurateur en ligne avec prix qui va jusqu'au panier (le plus proche du produit de JR Diamond) ; la fabrication à la commande dans un atelier visible ; l'offre naturel et synthétique avec certificat ; les preuves de fabrication ; la facilité d'audit (pas de blocage).

Les deux premiers sites, qui ne bloquent pas les robots, sont audités : `steven-stone.md` et `77-diamonds.md`.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Steven Stone | Hale (Altrincham, Cheshire), boutiques dans le nord de l'Angleterre (I) | https://www.stevenstone.co.uk/ | https://www.stevenstone.co.uk/create/engagement-ring/ | Oui : « Your Setting », « Your Diamond », « Review Order ». 55 montures, 5 types de pierres dont 274 780 diamants naturels et 84 787 synthétiques, panier avec décomposition du prix (V) | Aucun. `robots.txt` sans règle pour tous les robots (V) | EN | Marque nationale (fondée en 1937, selon l'en-tête du site) ; constructeur complet jusqu'au panier ; prix TTC décomposé ; retour 30 jours même pour la bague composée ; finance 0 % |
| 2 | 77 Diamonds | Londres (Mayfair) | https://www.77diamonds.com/ | https://www.77diamonds.com/engagement-rings | Oui : « Select Your Setting », « Select Your Diamond », « Complete Ring ». Vue 360° de 75 images, 1,8 million de diamants annoncés, 4 types de pierre (V) | Aucun défi en navigateur (Cloudflare sans défi, dossier Europe). `robots.txt` interdit `/api`, `/*.aspx*`, `/*?c=` et quelques autres chemins (V) | 23 versions (dossier Europe, V) ; ici EN, GBP | Modèle le plus proche du « voir la pierre réelle » : 360° de la bague, filtres de pierres complets, lien profond partageable de l'étape 2, panier ; comparable au constructeur de JR Diamond |
| 3 | Queensmith | Londres (Hatton Garden) | https://www.queensmith.co.uk/ | https://www.queensmith.co.uk/engagement-rings/bespoke | Non : parcours sur mesure en 5 étapes (consultation, design, pierre, CAO, fabrication) ; personnalisation en ligne de modèles du catalogue (I) | Cloudflare avec script de détection de robots, mais page servie en 200 sans défi dans Chromium (V) | EN | Atelier dans le showroom, modèle en cire, visite d'atelier à chaque rendez-vous (dossier Europe, V) ; le plus proche du positionnement « l'atelier en direct » ; hors audit faute de place dans les deux premiers rangs (constructeur absent) |
| 4 | Taylor & Hart | Londres (Hatton Garden) | https://taylorandhart.com/ | https://taylorandhart.com/custom-engagement-rings | Non : consultation, CAO, jusqu'à 3 retouches (dossier Europe, V) | Aucun (200) | EN-GB, EN-US | Parcours humain et maquette physique, courriel à chaque étape ; prix « dès 1 415 £ » (dossier Europe, V) |
| 5 | Aardvark Jewellery | Non vérifiée | https://aardvarkjewellery.com/ | https://aardvarkjewellery.com/ring-builder | Oui : 4 étapes « Ring, Centre stone, Metal, Size », bouton « Preview your ring », galerie « Community Creations » ; production jusqu'à 8 semaines (I, extrait d'index ; page ouverte en 200) | Aucun (`robots.txt` : `Allow: /`) ; bandeau de cookies | EN | Constructeur avec aperçu et partage ; à auditer ensuite |
| 6 | Harmony Jewels | Londres (Hatton Garden) | https://www.harmonyjewels.co.uk/ | https://www.harmonyjewels.co.uk/bespoke-engagement-rings | Non : sur mesure ; CAO et modèle en cire à essayer inclus, 3 séries de modifications ; or 14 k, 18 k, platine ; naturel (GIA, IGI) et synthétique (IGI) (I, extrait ; page ouverte en 200) | Aucun | EN (sites UK et US) | Mêmes preuves de fabrication que JR Diamond veut montrer (CAO, cire) ; synthétique et naturel certifiés |
| 7 | Allure Jewellers | Londres (12-13 Greville Street, Hatton Garden) | https://www.allurejewellers.co.uk/ | https://www.allurejewellers.co.uk/pages/build-your-ring | Oui : deux chemins (« Start with a diamond » ou « Start with a setting ») ; la page redirige vers `?stage=Select+Setting&isSWS=true` (V pour la redirection, I pour le reste) ; retour 30 jours (I) | Aucun (`Allow: /`) | EN | Constructeur Shopify, atelier propre à Hatton Garden |
| 8 | Primo Diamonds | Londres (Hatton Garden) | https://www.primodiamonds.co.uk/ | https://www.primodiamonds.co.uk/collections/engagement-rings | Oui : « Configure Ring » ; prix affiché = monture seule, pierre choisie ensuite (I, extrait ; page ouverte en 200) | Aucun (`Allow: /`) | EN | Même logique monture + pierre, 10 formes, naturel et synthétique |
| 9 | Jessica Flinn | Non vérifiée | https://jessicaflinn.co.uk/ | https://jessicaflinn.co.uk/pages/about-our-ring-builder-and-diamond-finder | Oui : constructeur et « Lab Grown Diamond Finder » ; CAO envoyée environ 10 jours après achat, fabrication 6 à 8 semaines ; rendus CAO, écart avec le produit final annoncé (I, extrait ; page ouverte en 200) | Aucun (`Allow: /`) | EN (devise réglée sur USD à l'ouverture) | Annonce honnêtement l'écart rendu / produit final : argument utile pour JR Diamond |
| 10 | Diamond Rocks | Londres (Hatton Garden, d'après la page) | https://www.diamondrocks.co.uk/ | https://www.diamondrocks.co.uk/design-your-own-engagement-ring | Oui : forme (10), métal (4), monture (8 styles), modèle (plus de 150 noms), puis pierre (I, extrait ; page ouverte en 200) | Aucun | EN | Le choix par styles et par noms de modèles est le plus riche vu ; non audité |

Autres acteurs trouvés, hors des dix :

| Acteur | Statut | Preuve |
|---|---|---|
| ASR Gems (Hatton Garden) | constructeur « Select Setting » (même moteur que Allure) | page ouverte en 200 ; redirigée vers `?stage=Select+Setting&isSWS=true&sort=PRICE-ASC` (V) |
| Faire & Fine (Hatton Garden) | sur mesure dès 3 000 £, croquis, CAO et modèle imprimé en 3D ; formulaire de demande | page ouverte en 200 (V pour l'ouverture, I pour le contenu) |
| Beaverbrooks (marque nationale) | pages bagues de fiançailles en 200 ; aucun constructeur observé en tête de page | `robots.txt` autorise ; page ouverte en 200 (I : pas d'exploration de la fiche) |
| Goldsmiths (marque nationale) | page d'accueil en 200 ; menu « Bespoke » ; non explorée | I |
| Ernest Jones, H.Samuel | **bloqués** : `robots.txt` illisible, HTTP 403 | outil `robots.cjs` : INCONNU (V) |
| Novita Diamonds | **bloqué** : HTTP 403 | Chromium (V) |
| Diamonds Factory | **bloqué** : « Sorry, you have been blocked », Cloudflare | Chromium (V) |
| Pobjoy Diamonds | domaine non relié (page Wix « Reconnect Your Domain ») | Chromium (V) |
| Vashi | domaine racheté par Queensmith, redirige vers `queensmith.co.uk/vashi` | Chromium (V) |
| Created Brilliance | le site « .co.uk » redirige vers `/en-us` ; origine britannique non établie | Chromium (V pour la redirection, S pour l'origine) ; écarté |
| Engagement Rings UK (`engagementringsuk.com`) | **pas un joaillier** : « independent buyer's guide » avec un constructeur 3D, sans vente | page lue (V) ; écarté du classement |

## Libellé du synthétique

- Termes vus : « Lab Grown » (Steven Stone), « Lab-grown » (77 Diamonds, Harmony), « lab grown » (Queensmith) (V). Le mot « synthetic » n'apparaît pas dans les parcours audités (V pour Steven Stone et 77 Diamonds).
- Règle nationale et position de la London Diamond Bourse : voir le dossier Europe (V).
- Pour JR Diamond, qui dira « synthétique » en France et en Israël, le terme anglais cohérent est « lab-grown » dans le configurateur (décision déjà prise dans `CLAUDE.md`).

## Sources

Pages ouvertes dans Chromium le jour de l'étude :
- https://www.stevenstone.co.uk/create/engagement-ring/ · https://www.77diamonds.com/engagement-rings · https://www.queensmith.co.uk/engagement-rings/bespoke · https://taylorandhart.com/custom-engagement-rings
- https://aardvarkjewellery.com/ring-builder · https://www.allurejewellers.co.uk/pages/build-your-ring · https://asrgems.com/pages/ring-builder · https://www.diamondrocks.co.uk/design-your-own-engagement-ring · https://jessicaflinn.co.uk/pages/about-our-ring-builder-and-diamond-finder · https://www.harmonyjewels.co.uk/bespoke-engagement-rings · https://www.primodiamonds.co.uk/collections/engagement-rings · https://www.faireandfine.com/pages/bespoke-engagement-ring
- https://www.beaverbrooks.co.uk/engagement-rings/ · https://www.goldsmiths.co.uk/ · https://novitadiamonds.co.uk/ · https://www.diamondsfactory.co.uk/ · https://www.pobjoydiamonds.co.uk/ · https://www.vashi.com/ · https://createdbrilliance.co.uk/ · https://www.engagementringsuk.com/bespoke

Contrôle des règles d'accès : `robots.cjs` (AUTORISÉ pour tous les sites ci-dessus sauf Ernest Jones et H.Samuel, INCONNU).

Recherche web (extraits d'index, marque I) : requêtes génériques sur les constructeurs de bagues britanniques (Parallel Search). Document de base : `docs/concurrence/2026-11-15_europe.md`.
