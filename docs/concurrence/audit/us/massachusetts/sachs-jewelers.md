# Audit : Sachs Jewelers (Massachusetts)

- **Site** : Sachs Jewelers, Shrewsbury, Mashpee, Franklin
- **Adresse** : https://www.sachsjewelers.com — page de départ : https://www.sachsjewelers.com/page/custom-ring-builder.html
- **Date** : 15/11/2026 (scripts lancés le 24/11/2026 dans l'environnement de l'auditeur)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le choix guidé (4 ou 5 étapes) a été parcouru en entier ; le dessinateur 3D lui-même n'a été vu que flouté sous un écran de collecte de coordonnées, et n'a pas été actionné (voir « Limites »).
- Marque : (V) vérifié, (I) inféré, (S) supposé.

## Parcours

| Étape | Options relevées (V, page de départ) |
|---|---|
| Avant l'étape 1 | Pastilles de métal : Yellow Gold, White Gold, Rose Gold (aria-label) |
| 1. « Let's start designing your ring » | 8 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » |
| 2. « Choose your center stone » | Interrupteur Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3. « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later ». Texte : le carat exact se règle dans le dessinateur |
| 4. « When do you need your ring? » | 1-4 weeks, 1-3 months, 3-6 months, Not sure yet |
| 5. « Select your preferred store location » (affiché en iPhone, « Step n of 5 ») | Massachusetts, 3 magasins (Franklin, Mashpee, Shrewsbury, avec adresses et horaires) ; « Decide later » |
| Écran suivant | Dessinateur 3D dans un cadre (iframe `jeweleros-custom.netlify.app/?jewelerid=…&ring=…`), recouvert d'un écran « Your dream ring is almost ready! » : nom, téléphone, case SMS, « Save & Continue » (grisé) et « Continue without saving » (V, mobile) |

Boutons communs : « Back », « Skip » (haut de l'écran), puces récapitulatives (Halo, Round, 1 carat) qui s'ajoutent en haut après chaque choix (V).

## Contrôles vérifiés

Relevé automatique de la page (63 contrôles visibles sur ordinateur, 34 sur iPhone) : en-tête, menus, pied de page, bouton « TEXT US », bandeau de cookies. Le tableau ci-dessous donne ceux du constructeur et les services de la page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow / White / Rose Gold | pastille | change la couleur des petites images de bague de l'étape 1 (V, capture d'écran) ; pas de choix de titre 14 k / 18 k ni de platine à cette étape | aucun | fonctionne (V) |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | passe à l'étape 2 ; Halo, Bezel testés (V) | aucun | fonctionne ; les 6 autres cartes non testées une à une (même composant, I) |
| Start from scratch | carte | non testée | — | non testé |
| Natural / Lab Grown | bouton | la sélection reste active (classe « active » lue, V) ; n'affiche aucun prix | aucun | fonctionne (V) |
| Round, Oval | carte | passe à l'étape 3 (V) | aucun | fonctionne ; 7 autres formes non testées une à une |
| 0.5 à 5 carats | carte | 1, 2 carats testés : passe à l'étape 4 (V) | aucun | fonctionne ; autres valeurs non testées |
| Délais (4 choix) | carte | « 1 - 4 weeks » testé (ordinateur), « Not sure yet » (iPhone) : passe à l'étape 5 ou au dessinateur (V) | aucun | **erreur sur ordinateur** (voir Défauts) ; fonctionne sur iPhone |
| Magasin (Shrewsbury) | carte | ouvre le dessinateur 3D sous l'écran de collecte (V, iPhone) | aucun | clic natif intercepté par un calque : action déclenchée par script (V) |
| Back / Skip | bouton | non testés | — | non testés |
| « Save & Continue » / « Continue without saving » | formulaire | non actionnés : formulaire de coordonnées (règle : aucune donnée saisie) | — | non testés |
| TEXT US | bouton flottant | non ouvert (pas de conversation) ; libellé seul | — | non testé |
| Schedule an Appointment | lien | mène à `/page/event-appointment.html` (lien relevé, non ouvert) | — | non testé |
| 508-792-2300 | lien tel | numéro de Shrewsbury (V) | — | non testé |
| Wish list, Login, Cart (0) | liens | `/wish-list.html`, `/login-checkout.html`, `/cart.html` relevés, non ouverts | — | non testés |
| Accept Cookies / Customize Cookies | bouton | non cliqués (le bandeau reste affiché sur les captures) | — | non testés |
| Liens de service : Financing and Purchase Options, Shipping Policy, Return Policy, Preferred Warranty, Insurance Appraisal, Jewelry Insurance, Order Status, Gold Buying, FAQ | liens | relevés dans le pied de page, non ouverts | — | non testés |
| Réseaux, avis : Facebook, Pinterest, Instagram, Tumblr, YouTube, WeddingWire, BBB, American Gem Society, Synchrony, PayPal | liens | relevés, non ouverts | — | non testés |

Modes de vue (photo, vidéo, 360°, sur la main, AR, zoom), partage, comparaison, essayage à domicile, ajout au panier : **non observés** (le dessinateur n'a pas été actionné) ; ils peuvent exister dans le dessinateur (S).

## Options disponibles

- **Métaux (étape 1)** : or jaune, blanc, rose (V). Platine et titres 14/18 k : non vus sur cette page (le dessinateur n'a pas été lu).
- **Styles de monture** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, ou départ de zéro (V).
- **Pierre centrale** : naturelle ou « Lab Grown » ; 9 formes ; 8 carats prédéfinis de 0,5 à 5 ct (V). Certificat, couleur, pureté : non relevés.
- **Taille de doigt, gravure, pavage détaillé, griffes** : non relevés.

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans les cinq étapes (V). La FAQ de l'étude d'exploration (INVENTAIRE.md, page `custom-engagement-rings.html`) dit qu'on voit le « real price » de la monture dans le dessinateur, hors pierre centrale (V, lecture antérieure ; non revérifiée ici).
- **Délai** : l'étape 4 demande « When do you need your ring? » (1-4 semaines à 3-6 mois) mais n'annonce pas de délai de fabrication ; « a couple of weeks » vient de la page d'exploration (V, antérieur).
- **Retours, livraison, garantie, financement** : pages `Return Policy`, `Shipping Policy`, `Preferred Warranty`, `Financing and Purchase Options` présentes dans le pied de page (V) ; **contenu non lu**. Financement Synchrony et PayPal : logos relevés (V). Garantie contre les défauts de fabrication : exploration antérieure.
- **Panier** : non atteint (aucun article ajouté, aucune page de panier ouverte). Moyens de paiement, livraison, récapitulatif : non vus.
- **Langues, devises** : anglais, dollars (I, aucune sélection vue).

## Confiance et service

- Maison fondée en 1923, quatrième génération (exploration antérieure, V).
- Service : « TEXT US » flottant (V), téléphone (V), rendez-vous en ligne (lien V), trois magasins avec horaires (V à l'étape 5).
- Avis : liens WeddingWire et BBB (V, non ouverts) ; pas d'étoiles ni de nombre d'avis sur la page du constructeur.
- Preuves de fabrication (photos ou vidéos d'atelier, suivi) : aucune vue ; « Order Status » existe (lien, V).
- Libellé du synthétique : « Lab Grown » (V).

## Points forts à retenir pour JR Diamond

1. **Entrée guidée courte, sans prix ni compte** : 4 questions en cartes (style, forme, carat, délai) avant tout dessin, puces récapitulatives qui s'accumulent (V, captures `d4.jpg`, `m3.jpg`). Adaptable au configurateur JR.
2. **Naturel / Lab Grown dès la 2e étape**, avant la forme (V, `lib.cjs`, texte de l'étape 2).
3. **Carat préréglé, réglage fin renvoyé plus loin** (« you can easily set an exact carat weight ») : évite de bloquer l'utilisateur (V, étape 3).
4. **Magasin choisi dans le parcours** (adresse et horaires) : pertinent pour un atelier unique (V, étape 5, iPhone).
5. **Écran de sauvegarde avec « Continue without saving »** : la collecte du téléphone n'est pas obligatoire (V, iPhone). À noter : la case SMS est décochée (V).
6. **Premier choix visible en environ 1,6 s (ordinateur) et 1,9 à 2,2 s (iPhone)**, mesuré à l'apparition de « Start from scratch » (V, 1 575 ms ordinateur ; 1 865 et 2 173 ms iPhone).

## Défauts observés

1. **Passage au dessinateur en échec sur ordinateur** : après « 1 - 4 weeks », message « Something went wrong » et « Try again » ; la console montre un blocage CORS (« No 'Access-Control-Allow-Origin' ») sur les appels de l'éditeur (`jeweleros.com/api/…`). « Try again » échoue de la même façon. Le même parcours sur iPhone a abouti (code 200). Cause : inconnue (I : défaut intermittent côté éditeur, ou lié à l'environnement de test). Deux tentatives sur ordinateur, une réussite sur iPhone.
2. **Étape 5 sur iPhone mais « Step 4 of 4 » sur ordinateur** : le nombre d'étapes change (V) ; sur ordinateur la liste des magasins n'a pas été chargée (appel de configuration bloqué, I).
3. **Clic sur un magasin intercepté par un calque** sur iPhone (V, journal Playwright) : le clic ordinaire échoue, seul le clic par script passe ; à vérifier avec un vrai doigt (S).
4. **Aucun prix pendant le choix guidé** (V) : l'écart principal avec les autres sites américains.
5. **Bandeau de cookies grand** sur ordinateur et iPhone, posé sur le bas de l'écran du constructeur (V, captures).
6. **Écran de collecte du téléphone avant le dessinateur** : « Continue without saving » est en gris très clair, peu visible (V, `m3.jpg`).

## Limites de l'audit

- **Écart au robots.txt, à signaler** : le robots.txt de `jeweleros.com` interdit `/api/` (règle `Disallow: /api/`). La page de Sachs appelle ces adresses par son propre script dès son ouverture (configuration) et au choix du délai (`POST /api/create/from-ring-config/`). Je ne les ai pas ouvertes à la main, mais mes scripts ont déclenché ces appels sur ~6 passages de test. Le dessinateur affiché ensuite (`jeweleros-custom.netlify.app`) est autorisé (`AUTORISÉ`). Par prudence, **je me suis arrêté là** : le dessinateur n'est pas actionné.
- Dessinateur 3D, vues, prix de monture, financement, retours, garantie, livraison, panier : non vus. Aucun formulaire rempli, aucun chat ouvert, aucun panier atteint.
- Les mesures de temps portent sur l'apparition du premier choix (JS du constructeur), pas sur un visuel 3D. Visuel principal 3D : non mesuré.
- 20 captures au plus : 6 utilisées (dossier de travail, non dans le dépôt).
- Un clic de choix a été fait par script (`element.click()`), après interception d'un calque.

## Sources

- https://www.sachsjewelers.com/page/custom-ring-builder.html (V, lu et actionné, ordinateur et iPhone)
- https://www.sachsjewelers.com/robots.txt (via l'outil de contrôle : AUTORISÉ pour la page et `/cart`)
- https://jeweleros-custom.netlify.app/?jewelerid=9j5IQjAWRS1m (cadre du dessinateur, vu flouté, iPhone)
- `docs/concurrence/audit/us/massachusetts/INVENTAIRE.md` (exploration du 15/11, pour la fondation, la FAQ et le délai)
