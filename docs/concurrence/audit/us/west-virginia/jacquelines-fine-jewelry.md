# Audit : Jacqueline's Fine Jewelry (Morgantown, Virginie-Occidentale)

- **Site** : Jacqueline's Fine Jewelry, https://www.jacquelinesfinejewelry.com/ (plateforme Punchmark ; outil 3D « Ring Designer » de Jeweler OS, jeweleros.com)
- **Page de départ** : https://www.jacquelinesfinejewelry.com/pages/custom-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur 3D n'a pas pu être ouvert : le premier clic sur une forme de monture déclenche des appels à `jeweleros.com/api/`, interdit par le robots.txt de ce domaine (`Disallow: /api/`). Je me suis arrêté là (voir « Limites »).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (toutes relevées) |
|---|---|
| Avant-étape : métal (pastilles) | Or jaune, or blanc, or rose [V] |
| 1 sur 4 « Let's start designing your ring » | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » [V] (les 9 vignettes changent de couleur avec le métal choisi) |
| 2 sur 4 « Choose your center stone » | Bascule Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » [V] |
| 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, « Decide later » [V] |
| 4 sur 4 « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| Suite (non actionnée) | « Skip » et le choix de l'étape 4 ouvrent le Ring Designer 3D, où l'on règle ensuite le carat exact (texte de l'étape 3) [V texte, I comportement] |
| Parcours alternatif « classique » | `/ringsettings` (choisir une monture : Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass ; métaux ; prix) puis `/ringsettings-diamonds` (choisir un diamant) puis « Complete Ring » [V] |

## Contrôles vérifiés

Relevé automatique : 128 contrôles sur ordinateur, 72 sur iPhone (`controls.cjs`). La majorité est de la navigation du gabarit (menus marques, bijoux, pied de page) : liens listés en bloc ci-dessous.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose (étape 1) | bouton | Remplace les 9 images de monture par la variante de couleur correspondante (webp précalculées, `jos0.b-cdn.net`) [V] | aucun | OK |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | Passe à l'étape 2. Un appel à `jeweleros.com/api/widget/config` et `/api/config` part avec ce clic : je l'ai bloqué côté navigateur avant envoi [V] | aucun | OK (étape), 3D non ouverte |
| « Start from scratch » | carte | Non cliquée (même chargement du designer attendu) [I] | n.c. | non testé : api interdit |
| Natural / Lab Grown | bascule | Change l'attribut de la liste ; les 9 formes restent identiques et un élément « unknown » sans titre apparaît dans la liste [V] | aucun | OK (effet visuel non constaté) |
| 9 formes de pierre | carte | Étape 3, icône SVG de forme [V] | aucun | OK |
| « Decide later » (étapes 2, 3) | carte | Saute le choix [V libellé, I effet] | aucun | non cliqué |
| 8 tailles de carat | carte | Étape 4 [V] | aucun affiché | OK |
| 4 délais souhaités | carte | Non cliqués : le choix lance le designer 3D (api interdit) [I] | aucun | non testé : api interdit |
| « Back », « Skip » | bouton | « Back » présent ; « Skip » visible, non cliqué [V] | | Skip non testé |
| Bandeau cookies : « Decline all cookies », « Accept all cookies », « Close consent popup » | bouton | « Decline » ferme le bandeau [V] | aucun | OK |
| Recherche (`kw`) | champ | Non utilisé : `?kw=` interdit par robots.txt | | non testé |
| Login, Wishlist, Cart (en-tête) | lien/bouton | `/cart`, `/myaccount`, `/login` interdits : non ouverts. [V] | | non testé : interdit |
| Menu Engagement : Design Your Ring, Shop Engagement Rings, Browse Diamonds, Men's Band Builder, Diamond Education, Custom Engagement Rings | liens | Cinq répondent 200. **« Custom Engagement Rings » (`/pages/custom-engagement-rings`) répond 200 mais affiche « Page Not Found »** [V] | | 1 lien mort (404 déguisé) |
| Menus Marques (20), Bijoux (17), Notre magasin (5), Contact | liens | Navigation ; non parcourus un par un (liste ci-dessous) | | non testé (hors périmètre) |
| Abonnement newsletter (prénom, nom, e-mail, SUBSCRIBE) | formulaire | Non rempli (règle : aucun formulaire) | | non testé |
| `(304) 599-6981` | lien tel | `tel:3045996981` [V] | | OK |
| Widget de chat (Clientbook, iframe `webchat.clientbook.com`) | bouton | Présent en bas à gauche ; conversation non ouverte [V] | | non testé |
| YouTube, Instagram | liens | `youtube.com/c/JacquelinesFineJewelryMorgantown`, `instagram.com/jacquelineswv` [V] | | non suivis |

Contrôles des pages voisines (actionnés sur la fiche `jewelry-details/engagement-rings/precious-solitaire-diamond-engagement-ring/123245`, 159 contrôles) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Galerie (« Click to zoom » ×9, miniatures) | image/bouton | Zoom au clic annoncé ; 9 vues [V texte] | | zoom non actionné |
| INQUIRE | bouton | Formulaire « product-inquiry » chargé via `api/async.php` ; non ouvert ni rempli [V requête] | | non testé : formulaire |
| SCHEDULE A VIEWING | bouton | Formulaire « schedule-appointment » ; non ouvert [V requête] | | non testé : formulaire |
| ADD TO WISH LIST | lien | Utilise le compte ; non cliqué (login interdit) [I] | | non testé |
| SHIPPING | lien | Ouvre une fenêtre « Shipping Information » : livraison gratuite sur toutes les commandes, retrait gratuit en magasin, 50 États + PR + APO/FPO, pas de PO box, pas d'international [V] | 0 $ | OK |
| RETURNS | lien | Ouvre « Return Policies » (texte complet lu, voir « Prix, délais, retours ») [V] | | OK |
| Product Details, About Fana, Reviews | accordéons | Déjà dépliés : style, métal, forme, poids, texte de marque, avis [V] | | OK |
| WRITE A REVIEW | bouton | Non cliqué | | non testé |
| Fiche : pas de bouton « Add to cart » | — | **Aucun ajout au panier sur cette fiche** : seulement renseigner, rendez-vous, liste de souhaits [V] | | — |
| Page `/diamonds` -> `/ringsettings-diamonds?carat=0.1-20` | page | Recherche de diamants : filtres Forme (10), Prix, Carat (0,1 à 20), Taille, Couleur (L à D), Pureté (SI2 à F), Avancé, tri, 20/40/60/120 par page, « Search by SKU » ; **0 diamant trouvé** (« No data available in table », après 9 s) [V] | | filtres affichés ; résultats vides |
| Clic sur « Oval » dans ce filtre | bouton | Libellé non trouvé comme bouton cliquable ; aucun résultat à comparer [V] | | non concluant |
| Page `/ringsettings` | page | Affiche styles, métaux, fourchette de prix, mais « Loading Rings » et **aucune monture après 10 s**, mise en page non stylée [V] | | défaillant |
| `/benchmark-ring-lab` (« Men's Band Builder ») | page | Texte seul « Customize Your Band » ; outil à iframe non exploré [V] | | non testé |

Liens de navigation relevés (tous menus) : bagues de fiançailles, alliances, bracelets, boucles d'oreilles, colliers, montres, chaînes, pendentifs et 20 marques (Ammara Stone, Belle Etoile, Benchmark, Brook & Branch, Charles Garnier Paris, Citizen, Fana, G-Shock, Lafonn, Lashbrook Designs, Malo Bands, Michael Aram, Overnight, Roberto Coin, Roman + Jules, Samuel B., Tantalum, Tissot, Uneek) ; non suivis.

## Options disponibles

- **Métal (constructeur)** : or jaune, or blanc, or rose. Pas de platine ni de choix 14/18 k dans la phase d'accueil [V] ; la liste de montures `/ringsettings` annonce aussi Platinum [V]. Les fiches du catalogue : 10 k, 14 k, 18 k, platine, argent plaqué platine (filtre Matériau) [V].
- **Montures** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone [V].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (+ Heart dans la recherche de diamants) [V].
- **Origine** : Natural / Lab Grown (le libellé est « Lab Grown ») [V].
- **Carat** : 0,5 à 5 ct en 8 paliers (réglage exact dans le designer) [V texte].
- **Taille de doigt, gravure, corps de bague, griffes, pavage** : non vus (derrière le designer 3D) [S]. La page Services mentionne « Engraving » et « 3-D Modeling » [V].
- **Filtres liste « Engagement Rings »** (`/jewelry/engagement-rings`, 329 produits) : Prix (8 tranches de 0 à 64 000 $), Marques, Matériau (9), Pierre (Diamant, Saphir), Forme (6), Genre ; tri Featured / High to Low / Low to High / Newest [V].
- **Recherche de diamants** : voir tableau ci-dessus ; certificats : colonne « Lab » dans le tableau (laboratoire), valeurs non visibles faute de résultats [V].

## Prix, délais, retours, garanties

- **Prix** : le constructeur n'affiche aucun prix pendant les 4 étapes [V]. Les fiches du catalogue affichent un prix net (ex. Fana S4065, 1 575 $ ; 3,1 CTW Halo, 235 $ : valeur manifestement erronée ou prix de monture seule, non expliquée) [V, https://www.jacquelinesfinejewelry.com/jewelry/engagement-rings]. Aucune décomposition (métal, pierre, façon).
- **Bandeau permanent** : « We are in the process of updating the website. For inquiries regarding accurate pricing and inventory, please contact 304.599.6981. » [V] : le site avoue que prix et stock peuvent être inexacts.
- **Délai** : sur la fiche, « Available in 3-5 Business Days » ; en liste, « Ships in 7-10 Business Days » (3,1 CTW Halo) [V]. Le constructeur demande « quand en avez-vous besoin ? » (1-4 semaines à 3-6 mois) au lieu d'annoncer un délai [V].
- **Livraison** : gratuite sur toute commande ; retrait gratuit en magasin ; États-Unis uniquement [V, fenêtre SHIPPING].
- **Retours** (texte lu) : 15 jours après réception pour retour ; articles non portés, emballage d'origine ; pièces personnalisées ou sur mesure exclues ; remboursement par le moyen de paiement ou avoir ; cadeaux : avoir non remboursable ; 7 à 10 jours ouvrés ; **échange pour défaut dans les 30 jours** ; « gemstones, including diamonds, are not covered by this policy and are sold as-is » ; retour à la charge du client, assuré [V].
- **Garantie** : « Jacqueline's Ring Quality Guarantee » contre l'usure normale ; inspection et nettoyage gratuits à vie pour chaque ensemble nuptial [V, /pages/all-diamonds]. Assurance bijoux Zillion (partenaire) [V, /pages/zillion].
- **Financement** : « Interest-Free Financing, 12 Months Same as Cash » [V] ; logo Sezzle chargé sur la fiche [V].
- **Panier** : non atteint (`/cart` interdit par robots.txt ; « panier interdit par robots.txt »). Aucun moyen de paiement relevé.

## Confiance et service

- Magasin physique : 1070 Suncrest Town Centre Drive, Morgantown, WV 26505 ; téléphone ; chat Clientbook ; prise de rendez-vous ; formulaire de demande [V].
- Avis : 4,8/5 sur 159 avis Google (page /testimonials) ; fiche : 4,8/5, 7 avis [V]. Prix « Best of Morgantown » affiché au pied de page [V].
- Service sur mesure en magasin : croquis, modèle 3D CAO, cire, fabrication (page /pages/custom-design) ; « Start a project » [V].
- Langues : anglais seul ; devise : dollar américain [V].
- Preuves de fabrication : aucune photo ni vidéo de fabrication, pas de suivi de commande visible hors compte [V pages lues].
- Libellé du synthétique : « Lab Grown » / « Lab-Grown Diamonds » [V]. Certificats : non mentionnés dans le parcours.

## Points forts à retenir pour JR Diamond

1. **Démarrage en 4 questions avec images par métal** : l'étape 1 change les 9 aperçus selon la pastille de métal, ce qui donne un retour visuel immédiat [V : `walkthrough-imgs/*_yellow|white|rose.webp`, 3,2 s pour afficher l'étape 1].
2. **Question « Quand en avez-vous besoin ? »** : adapte les propositions au calendrier du client ; utile pour la promesse de 14 jours ouvrés [V : étape 4].
3. **Lien 3D vers un réglage carat exact** (« Once you're in the ring designer you can easily set an exact carat weight ») : le carat est affiné après le choix grossier [V texte étape 3].
4. **Livraison gratuite + retrait en magasin affichés dans une fenêtre sur la fiche** [V].
5. **Assurance bijoux et garantie qualité à vie présentées** [V].

## Défauts observés

- Le designer 3D (cœur de l'offre) charge son code et sa configuration depuis un domaine tiers (jeweleros.com) et le premier clic de l'accueil déclenche ces appels [V].
- Lien « Custom Engagement Rings » mort : 200 + « Page Not Found » [V, /pages/custom-engagement-rings].
- Recherche de diamants vide (0 résultat) ; page `/ringsettings` bloquée sur « Loading Rings » [V].
- Aucun prix dans le constructeur ; bandeau « updating the website, pricing may be inaccurate » [V].
- Sur la fiche, le prix n'apparaît qu'après le chargement différé (absent du premier relevé de texte, 1 575 $ ensuite) ; en liste, une « 3,1 CTW Halo » à 235 $ semble incohérente [V].
- Pas de panier sur la fiche bague ; tout passe par demande ou rendez-vous [V].
- Bandeau cookies recouvre une carte de monture (Toi et Moi) sur ordinateur [V capture].
- Fond du constructeur en gris sur gris : titres peu contrastés [V capture].

## Limites de l'audit

- **Constructeur 3D non ouvert** : le clic sur la première monture appelle `www.jeweleros.com/api/widget/config/…`, `/api/config/…` et `/api/log-error/` ; ce chemin est interdit (`Disallow: /api/`). Les requêtes ont été interceptées et annulées par le navigateur avant envoi ; aucune n'a atteint le serveur après le clic. Les appels faits par la page à sa simple ouverture ne sont pas un écart. Ni 3D, ni prix, ni taille de doigt, ni gravure, ni vues photo/AR n'ont donc été vérifiés.
- Panier, compte, liste de souhaits et recherche (`?kw=`) interdits : non ouverts.
- Formulaires (demande, rendez-vous, newsletter) et chat : non remplis, non ouverts.
- Recherche de diamants sans résultat : colonnes certificat, filtres actionnés non évaluables.
- Pas de test de bouton « tri » de la liste (URL `?sortSpec=` interdite).
- Mesures (3 essais) : étape 1 du constructeur 2,95 à 3,75 s (ordinateur et iPhone) ; fiche bague, premier visuel 1,0 à 5,4 s (variable) en ordinateur, 1,85 s en iPhone [V].

## Sources

- https://www.jacquelinesfinejewelry.com/pages/custom-ring-builder [V]
- https://www.jacquelinesfinejewelry.com/pages/custom-engagement-rings (page introuvable) [V]
- https://www.jacquelinesfinejewelry.com/pages/all-diamonds, /pages/services, /pages/custom-design, /pages/zillion, /testimonials [V]
- https://www.jacquelinesfinejewelry.com/jewelry/engagement-rings [V]
- https://www.jacquelinesfinejewelry.com/jewelry-details/engagement-rings/precious-solitaire-diamond-engagement-ring/123245 [V]
- https://www.jacquelinesfinejewelry.com/ringsettings, /ringsettings-diamonds [V]
- robots.txt de www.jacquelinesfinejewelry.com et de www.jeweleros.com [V, via robots.cjs]
- Captures et scripts : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/jacquelines/
