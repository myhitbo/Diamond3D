# Audit : Venus Jewelers (Somerset, New Jersey)

- **Site** : Venus Jewelers, https://www.venusjewelers.com/ (plateforme Punchmark, constructeur « 3D Ring Designer » de JewelerOS)
- **Page de départ** : https://www.venusjewelers.com/pages/custom-ring-builder/
- **Date** : 15/11/2026 (pages lues le 25/11 par la session d'audit ; les avis datés de novembre 2026 sont ceux affichés)
- **Appareils** : Chromium ordinateur 1366x900 ; Chromium en affichage iPhone 13
- **Statut** : **partiel** (le robot.txt de jeweleros.com interdit `/api/`, que l'étape finale du constructeur appelle ; le panier est interdit par le robots.txt de venusjewelers.com)
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (ordinateur, assistant à 4 étapes) [V] |
|---|---|
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ». Trois pastilles de métal : or jaune, or blanc, or rose (les vignettes changent : `solitaire_white.webp`, `solitaire_rose.webp`) |
| 2. Pierre centrale | Interrupteur Natural / Lab Grown ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, « Decide later » ; texte : le carat exact se règle ensuite dans le « 3D Ring Designer » |
| 4. Délai souhaité | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » (le clic mène au designer 3D) |
| 5. Designer 3D | **Non audité** : le clic de l'étape 4 envoie `POST jeweleros.com/api/create/from-ring-config/` (interdit par robots.txt) |

Affichage iPhone : assistant différent, à 6 étapes [V] : 1 nombre de pierres (One / Two / Three stone, « Design anything » = saisie libre décrite « Describe it, see your design, refine it ») ; 2 métal (or jaune, or blanc, **platine**, or rose) ; 3 pierre (Lab grown par défaut / Natural, 9 formes + « Other », carats 0,5 à 5 ct, « Not sure yet » par rubrique) ; 4 monture (4-prong, 6-prong, Basket, Bezel, Halo, Hidden halo, « Tulip and… » partiellement lu) ; 5 bague (Plain, Pavé, Cathedral, Pavé cathedral, option libre) ; 6 délai (1-4 semaines, 1-3 mois, 3-6 mois, Not sure yet).

## Contrôles vérifiés

Relevé complet de la page de départ par `controls.cjs` : 154 contrôles visibles sur ordinateur, 54 en iPhone ; ils se divisent en navigation du site (≈ 140 liens de méga-menu, pied de page, partenaires AGS/AGTA/GIA/Jewelers Mutual/JOA/JVC/RJO), cookies et assistant. L'assistant est dans un calque plein écran qui masque la page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose (étape 1) | bouton | change la couleur des vignettes de styles | aucun | OK [V] |
| 9 cartes de style | carte | passe à l'étape 2 (fil d'Ariane « Solitaire » affiché) | aucun | OK [V] |
| Natural / Lab Grown | interrupteur | bascule actif ; la liste des formes ne change pas | aucun | OK [V] |
| Formes de pierre (9) | carte | passe à l'étape 3 | aucun | OK [V] |
| Carats (8) | carte | passe à l'étape 4 | aucun | OK [V] |
| Délai (4) | carte | envoie la création du designer (appel bloqué par moi) | aucun | non terminé : robots.txt de jeweleros.com [V] |
| « Decide later » (formes, taille) | carte | saute l'étape | aucun | OK [V] |
| « Start from scratch » | carte | passe directement à l'étape 2 | aucun | OK [V] |
| Back (flèche) | bouton | revient à l'étape précédente | aucun | OK [V] |
| Skip | bouton | non cliqué (mène probablement au designer) | n/a | non testé : appel `/api/` probable [S] |
| Refuser / accepter les cookies | bouton | ferme le bandeau | n/a | OK [V] |
| Chat « Text us » (Podium) | bouton | bulle « Hi there, have a question? Text us here. » ; conversation non ouverte | n/a | non testé : règle « pas de chat » |
| Diamants : Natural / Lab-Grown | onglet | `?labGrown=0/1`, appel `/api/async.php?...get_diamonds` | n/a | OK mais **0 résultat** [V] |
| Diamants : 10 formes, curseurs prix, carat, cut, couleur K-D, pureté SI2-F, « ADVANCED », recherche par SKU, 20/40/60/120 par page | filtres | l'adresse prend `carat=0.1-20` ; tableau « No data available » | n/a | fonctionne, catalogue vide [V] |
| Bagues : filtres Subcategory, Price, Brand, Style, Material, Gemstone, Stone Shape ; tri Featured / High to Low / Low to High / Newest | menu | ouverts, listes lues (voir Options) ; non appliqués | n/a | OK [V] |
| Fiche : « Add to Cart » | bouton | **non cliqué** : panier interdit par robots.txt (`Disallow: */cart`) | 4 495 $ | non testé |
| Fiche : « Drop a Hint » | lien | formulaire « Dear…, a little hint… » (destinataire, e-mail) ; rien envoyé | n/a | s'ouvre [V] |
| Fiche : « Schedule a Viewing » | bouton | formulaire de rendez-vous avec prénom, nom, e-mail, téléphone, jour, heure, code de validation ; rien envoyé | n/a | s'ouvre [V] |
| Fiche : « Add to wish list », « Quick view », « Inquire about this item » | bouton | présents sur la liste ; non actionnés (liste de souhaits utilise `/api/async.php`, compte probable) | n/a | non testé |
| Mon panier / Connexion | lien | non ouverts : `/cart`, `/login` interdits | n/a | non testé |
| Téléphone (732) 247-4454, Store & Hours, Make an appointment | lien | `tel:` et pages `/contact`, `/make-an-appointment` | n/a | liens présents [V] |
| Sur mobile : « Design anything » | bouton | non cliqué (saisie libre assistée, probable appel API) | n/a | non testé [S] |

## Options disponibles

- **Métaux** : or jaune, blanc, rose (assistant ordinateur) ; platine en plus sur iPhone ; filtre catalogue : or 14 K rose et blanc, blanc, jaune et blanc, jaune, platine [V].
- **Pierres** : naturel ou synthétique (« Lab Grown ») ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (+ Heart dans la recherche de diamants) [V].
- **Carats** : 0,5 à 5 ct en 8 paliers [V].
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; iPhone : 4-prong, 6-prong, Basket, Bezel, Halo, Hidden halo ; corps : Plain, Pavé, Cathedral, Pavé cathedral [V].
- **Non trouvés** : taille de doigt, gravure, épaisseur du corps, titre (carats d'or) dans l'assistant ; peut-être dans le designer 3D non audité [S].
- **Services** : financement (Wells Fargo, 0 % sur 6 et 12 mois), rendez-vous, « Drop a Hint », liste de souhaits, expertises, réparation, design sur mesure (« START A PROJECT »), rachat de bijoux [V].
- **Modes de vue** : photo fixe sur la fiche ; assistant mobile avec bague 3D/animée en rotation (vue pivotante) ; mesures AR, vidéo, 360° non trouvés [V/I].

## Prix, délais, retours, garanties

- **Prix** : en dollars, seulement pour des pièces en stock (ex. bague cushion 2,01 ct synthétique, or jaune 14 K : 4 495,00 $ ; monture 14 K split shank : 1 825,00 $ ; monture solitaire rose et blanc : 2 265,00 $) ; « Call for Price » sur plusieurs montures [V, /jewelry/engagement-rings]. Le constructeur n'affiche **aucun prix** avant l'étape 5 [V]. Aucune décomposition du prix.
- **Délai** : « Ships on Next Open Business Day » pour les pièces en stock ; bandeau « 4 shipping options available to get it by Christmas ». Aucun délai de fabrication annoncé pour le sur-mesure ; le constructeur demande seulement quand on en a besoin [V].
- **Retours** [V, /return-policy] : 15 jours après réception, articles neufs dans leur emballage ; **« Personalized or custom pieces are not eligible for returns »** ; retour par la poste aux frais du client avec assurance ; remboursement 7-10 jours ouvrés ; échange pour défaut sous 30 jours.
- **Garantie / certificats** : bandeaux AGS, AGTA, GIA, Jewelers Mutual, JOA, JVC, RJO ; certificat de pierre non lu sur ces pages [V pour les logos]. Gemmologue GIA de plus de 40 ans d'expérience pour les expertises [V, /pages/appraisals].
- **Livraison, panier, moyens de paiement** : **non audités** (panier interdit par robots.txt). Financement Wells Fargo mentionné pour boutique et commandes en ligne [V].
- **Synthétique** : libellé « Lab Grown » / « Lab-Grown Diamond » ; page explicative « What's the difference? » : propriétés « essentiellement identiques », caractéristiques visibles seulement par un gemmologue ; section sur la durabilité nuancée [V, /pages/lab-grown-diamonds].
- **Langues, devises** : anglais, dollars seulement [V].

## Confiance et service

- Avis : 10 avis de magasin, 5 sur 5, affichés sur chaque fiche ; la dernière date de novembre 2026 [V]. Ce sont des avis de boutique, pas de produit [V].
- Boutique physique à Somerset (940 Easton Avenue Suite 11B), horaires, téléphone, rendez-vous, chat texte (Podium) [V].
- **Preuves de fabrication** : une galerie « Custom Gallery » de créations passées et la séquence « Sketching, Creating, Final Product » sur la page de design sur mesure ; pas de suivi de commande, pas de photos ni vidéos de fabrication de la commande [V, /pages/custom-Jewelry].
- Guides : quatre C, choix de monture, guide des bagues de fiançailles, guide des diamants de synthèse, blog, séminaires [V, liens].

## Points forts à retenir pour JR Diamond

1. **Assistant court avec aperçu qui change** : sur iPhone, une bague tourne et change de métal/monture à chaque choix, avec « Still needed : size » et bouton Next grisé tant qu'il manque une réponse (captures `mv3`, `ms3`, `ms4`). Preuve : parcours iPhone 6 étapes ci-dessus.
2. **Platine proposé dans l'assistant mobile** (quatre cartes avec vignettes) [V].
3. **Choix « Decide later » / « Not sure yet »** à chaque étape pour ne pas bloquer un client indécis [V].
4. **Vignettes de styles dans la couleur du métal choisi**, déjà à l'étape 1 [V : `jos0.b-cdn.net/walkthrough-imgs/solitaire_rose.webp`].
5. **Retour clair du sur-mesure** : non repris/non échangeable, écrit noir sur blanc [V].
6. **Financement 0 % 6/12 mois** présenté en page dédiée [V].
7. **Rendez-vous et « Drop a Hint »** (suggérer la bague à un proche) : idée de service gratuite [V].

## Défauts observés

- Le constructeur ne donne **aucun prix** ni délai de fabrication avant le designer 3D [V].
- Sur iPhone, l'en-tête du site (logo, recherche, panier) s'incruste au milieu de l'assistant sur les captures pleine page (`ms3.jpg`) : chevauchement, [V] en capture ; non confirmé en usage réel.
- Deux assistants différents selon l'appareil (4 étapes et 6 étapes, platine seulement sur iPhone) : incohérence [V].
- Catalogue de diamants : **0 diamant trouvé** en synthétique comme en naturel, après 20 s d'attente [V, `/diamonds?labGrown=0` et `=1`] ; la fonction « What's the difference? » n'a pas pu être actionnée (lien non trouvé par le texte).
- Le texte de la page de départ dit que les détails se règlent dans le « 3D Ring Designer » : l'utilisateur doit passer 4 étapes avant de voir le vrai outil [V].
- Après l'étape finale, mon appel a été annulé côté navigateur : la page affichait « Something went wrong » ; **ce n'est pas un défaut du site** (c'est dû à mon blocage de la requête).

## Limites de l'audit

- Designer 3D (aperçu, matière, taille de doigt, gravure, prix, ajout au panier) non audité : `POST jeweleros.com/api/create/from-ring-config/` est interdit par `Disallow: /api/` du robots.txt de jeweleros.com ; chaque clic menant à cet appel a été annulé dans le navigateur avant envoi (aucune requête n'a quitté mon poste). Le chargement initial de l'assistant appelle `jeweleros.com/api/config/…` : requête de simple ouverture, pas un écart.
- Panier, connexion, compte : `Disallow: */cart`, `*/login`, `*/myaccount`. Aucune frais de livraison, aucun moyen de paiement observé.
- Temps d'apparition : sur ordinateur, les images des cartes de l'assistant sont présentes 2,3 s après le chargement du DOM (sélecteur, non mesure de rendu) [V approximatif] ; sur iPhone, le calque est en place à 3,5 s et la bague est visible dans une capture à environ 20 s [mesure grossière]. Une première sonde ordinateur indiquait 20,6 s : mesure peu fiable (sélecteur trop large). Les chiffres sont des ordres de grandeur.
- iPhone : les étapes ont été pilotées par clics aux coordonnées (contenu en iframe `jeweleros-custom.netlify.app`, robots.txt autorisé) ; l'option « Tulip and… » de l'étape 4, « Design anything » et « Skip » n'ont pas été ouverts.
- Pas de formulaire envoyé, aucun compte créé, aucune donnée saisie.
- Page « Skip » et mode « sur la main / AR / vidéo » : non trouvés.

## Sources

- https://www.venusjewelers.com/pages/custom-ring-builder/ (assistant ordinateur et iPhone)
- https://jeweleros-custom.netlify.app/ (iframe de l'assistant mobile, URL vue dans les requêtes)
- https://www.venusjewelers.com/diamonds?labGrown=1 et `?labGrown=0`
- https://www.venusjewelers.com/jewelry/engagement-rings
- https://www.venusjewelers.com/jewelry-details/engagement-rings/14k-yellow-gold-cushion-lab-grown-diamond-bezel-solitaire-ring-201-ct/35389
- https://www.venusjewelers.com/return-policy ; /pages/financing-2 ; /pages/lab-grown-diamonds ; /pages/custom-Jewelry ; /pages/appraisals
- robots.txt de venusjewelers.com (Crawl-delay 2, `*/cart`, `*/checkout`, `*/login` interdits) et de jeweleros.com (`Disallow: /api/`)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/venus-jewelers/`
