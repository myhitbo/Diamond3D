# Audit : Pearce Jewelers (West Lebanon, New Hampshire)

- **Site** : Pearce Jewelers, plateforme Punchmark ; assistant « 3D Ring Designer » de JewelerOS
- **Adresse de départ** : https://www.pearcejewelers.com/pages/design-your-ring
- **Date** : 15/11/2026 (contrôles faits en session le 25/11/2026 selon l'horloge de la machine ; date de l'audit conservée comme demandée)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Page de départ, catalogue, fiche produit, pages de service lus ; la 3D, les étapes 2 à 4 et le panier n'ont pas été atteints (voir Limites).
- Marques : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée) ; **[I]** inféré ; **[S]** supposé. Prix en dollars américains.

## Parcours

| Étape | Options observées |
| --- | --- |
| 1 sur 4 « Let's start designing your ring » [V] | Métal (3 pastilles : jaune, blanc, rose) puis 9 cases : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; boutons « Back » et « Skip » |
| 2 à 4 (3D Ring Designer) | [S] Non atteintes : le texte annonce « you'll be able to fully customize your design in our 3D Ring Designer » ; le choix de la pierre se fait ensuite en boutique (page `custom-engagement-rings`) |
| Alternative en ligne [V] | Recherche de diamants `/diamonds?labGrown=0` ou `=1` (filtres ci-dessous) ; constructeur d'alliance `/pages/custom-band-builder` (page vide à la lecture) |
| Catalogue [V] | 318 produits en bagues de fiançailles, tous « Call for Price » ; bouton « Inquire » |

## Contrôles vérifiés

Relevé complet avec controls.cjs : 174 contrôles sur ordinateur, 60 sur iPhone (en grande majorité menu, pied de page, liens de service). Sont listés ici tous les contrôles propres au parcours ; les 110 liens de menu et de pied de page sont des liens simples vers des pages du site (pas ouverts un par un : [S] fonctionnels).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastille métal jaune (active par défaut) | bouton | Affiche les 9 vignettes en or jaune (`solitaire_yellow`…) [V] | aucun | OK |
| Pastille métal blanc | bouton | Remplace les 9 vignettes par la version « _white.webp » (CDN jos0.b-cdn.net), sans changer d'étape ni d'adresse ; 8 requêtes d'images, aucune autre [V] | aucun | OK |
| Pastille métal rose | bouton | Idem en « _rose.webp » [V] | aucun | OK |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | cases (9 styles) | Passage attendu à l'étape 2 | inconnu | **Non testé** : le clic charge le Designer, qui appelle `jeweleros.com/api/`, interdit par le robots.txt de JewelerOS (`Disallow: /api/`) |
| Start from scratch | case | Idem | inconnu | Non testé (même raison) |
| Back / Skip | boutons | Navigation de l'assistant | inconnu | Non testés (même raison [I]) |
| Bannière « Learn how we use cookies » (Close consent popup) | bouton | Bannière à fermer | aucun | Non actionnée (inutile) |
| Menu Bridal / Diamonds / Jewelry / Estate / Custom / Design Your Ring / Services / Our Store | liens | Méga-menus ; « Design Your Ring » → `/pages/custom-ring-builder` (redirige vers la page de départ d'après l'inventaire du 24/11) | aucun | Lus, pas tous ouverts |
| Menu forme de diamant (Round, Oval, Cushion, Princess, Emerald, Radiant, Pear, Marquise, Asscher, Heart) | liens | `/diamonds?diamondshape=…` | aucun | Non ouverts ; [S] OK |
| Call Us (603) 298-8833 | lien tel | Appel téléphonique | aucun | Non actionné |
| Book an Appointment | lien | `/make-an-appointment` (formulaire, non rempli) | aucun | Non rempli |
| Toggle Search / My Account / My Wishlist | liens | Panneaux ; compte et liste de souhaits appellent `/api/async.php` | aucun | Non actionnés (compte interdit par robots.txt [V] d'après la consigne) |
| Abonnement e-mail (champ + bouton) | formulaire | Newsletter | aucun | Non rempli |
| Filtres de diamants : Shape (10), Price (min/max), Carat (min/max), Cut (Fair à Excellent), Color (L à D), Clarity (SI2 à F) | filtres | Affichés ; « 0 diamonds found », tableau vide « No data available in table » à l'ouverture de `/diamonds?labGrown=1` [V] | n/a | Liste vide pendant la lecture : état « sans résultat », pas d'erreur visible |
| Pagination 20/40/60/120, recherche par SKU, « My Selected Diamond » (comparaison) | contrôles | Présents sur la page diamants [V] | n/a | Non testés (liste vide) |
| Catalogue bagues : filtres Subcategory, Price, Brands (ArtCarved, Eco-Brilliance, Ostbye), Material (14 k rose, blanc et jaune, blanc, jaune), Gemstone ; tri Featured, High to Low, Low to High, Newest ; vue grille ou liste | filtres | Présents [V] | prix « Call for Price » | Non actionnés |
| Fiche produit : Inquire | bouton | Demande de renseignements (formulaire) | « Call for Price » | Non actionné (formulaire) |
| Fiche produit : Add to Wish List | lien | Appel `api/async.php` | n/a | Non actionné |
| Fiche produit : Click to expand (zoom), 3 miniatures | contrôles | Galerie photo ; pas de 3D, vidéo, 360°, AR sur la fiche lue [V] | n/a | Non actionnés |
| Fiche produit : Product Details, About Ostbye | accordéons | Fiche technique : style IC24A30-4YC, 14 k jaune, « 0.33 ct tw », collection Celebration [V] | n/a | Lus |
| Write a Review | bouton | Formulaire d'avis | n/a | Non actionné |
| Ajouter au panier / Checkout | n/a | **Absents** : aucun prix, donc aucun bouton d'achat | n/a | Panier (`/cart`) interdit par robots.txt, non ouvert |

Contrôles absents du site [V] : partage, enregistrement de la conception, comparaison de configurations, guide des tailles de doigt (dans les pages de service seulement), gravure, essayage à domicile, AR, WhatsApp, chat (aucun chat ouvert ni visible), vidéo.

## Options disponibles

- **Métaux de l'assistant** : jaune, blanc, rose (pas de titre 14 k / 18 k ni platine à l'étape 1). Catalogue : 14 k seulement (rose, blanc, jaune, blanc et jaune) [V].
- **Styles de monture** : solitaire, halo, halo caché, bezel (clos), cathedral, full pavé, toi et moi, trois pierres, « from scratch ».
- **Formes de diamant** (recherche) : rond, princesse, émeraude, asscher, radiant, coussin, ovale, poire, marquise, cœur.
- **Origine** : naturel (`labGrown=0`) ou « Lab Grown Diamonds » (`labGrown=1`).
- **Filtres diamant** : cut, couleur D à L, pureté SI2 à F, carat, prix, SKU.
- **Pierres de couleur du site** : saphir, émeraude, rubis, morganite, aigue-marine, perle (menu).

## Prix, délais, retours, garanties

- **Prix** [V] : aucun prix affiché sur 318 bagues (« Call for Price »), ni dans l'assistant. Le sur mesure : « We will give you an honest estimate during your consultation before any work begins » (`/pages/custom-jewelry`). Prix du lab-grown : « Typically 50 to 80 percent less than natural » (page `lab-grown-vs-natural`, sans chiffre de bague).
- **Délais** [V] : catalogue « Ships in 7-10 Business Days » ; sur mesure « four to six weeks » après approbation du dessin (FAQ) ; page `custom-engagement-rings` : « ready for you in just a couple of weeks » (incohérent avec 4 à 6 semaines).
- **Retours** [V, lu partiellement] : les conditions de vente parlent d'un « Right of Return » pour les produits « in their original, complete condition », frais de port à la charge du client, assurance recommandée ; remboursement sous 30 jours si le produit devient indisponible. Le nombre de jours du droit de retour et l'exception du sur mesure n'ont pas été relevés.
- **Garantie, certificats** : GIA cité (équipe « GIA-certified », rapports GIA pour le naturel) ; rapports pour le lab-grown « can be certified by GIA and other independent laboratories » (page `lab-grown-vs-natural`) [V].
- **Financement** [V] (`/financing-options`) : Iddeal by Comenity et Synchrony, en boutique seulement ; layaway sur 3 mois, sans contrôle de crédit.
- **Paiement en ligne** [S] : non vu ; livraison, frais et moyens de paiement non vus (panier non atteint).

## Confiance et service

- [V] Avis : « 4.9 of 5 from 286 reviews » sur Google (`/testimonials`), 5 avis sur la fiche. Les avis visibles datent d'août à novembre 2026.
- [V] Libellé du synthétique : « Lab Grown Diamonds », « lab grown diamonds are real diamonds ». Pas de « synthétique ».
- [V] Langue : anglais seul ; devise : dollar.
- [V] Preuves de fabrication : description du processus (consultation, croquis, CAD, fonte) ; galerie « Custom Design Gallery » avec boutons « Inquire » ; aucune vidéo de fabrication ni suivi de commande.
- [V] Rendez-vous en ligne, téléphone, boutique (200 South Main Street, mardi à vendredi 10 h à 18 h, samedi 10 h à 16 h). Logos GIA, BBB, IJO, JBT, JA, Jewelers Mutual, DCA.
- [V] Services : mise à taille, réparation, rhodiage, estimation, transformation de bijoux de famille (« Heirloom Restoration & Redesign »).
- [V] Le site accepte les pierres du client (« Can I use my own stones in a custom design? Yes »).

## Points forts à retenir pour JR Diamond

1. **Choix du métal dès la première étape** avec changement immédiat des 9 vignettes (trois pastilles, aucune requête hors images) : bon modèle de première interaction. Preuve : clics sur les pastilles 2 et 3, images `_white.webp` puis `_rose.webp`.
2. **Entrée par le style de monture avec une phrase de description** (« Timeless and elegant ») : réduit la page blanche. Preuve : page de départ.
3. **Comparaison naturel / lab-grown claire** avec tableau et fourchette de prix (« 50 to 80 percent less »). Preuve : `/pages/lab-grown-vs-natural`.
4. **Financement et layaway expliqués** page par page. Preuve : `/financing-options`.
5. **Avis Google intégrés à chaque fiche** (note, répartition, 100 % de 5 étoiles). Preuve : fiche 30015.
6. **Explication des étapes du sur mesure** en trois temps avec CAD. Preuve : `/pages/custom-jewelry`.

## Défauts observés

- Aucun prix visible (« Call for Price » partout) : l'écart principal avec la promesse de JR Diamond.
- Le « 3D Ring Designer » est un outil de fournisseur ; il n'apparaît qu'après l'étape 1 et la pierre se choisit en boutique : parcours non terminable en ligne [V, texte de `custom-engagement-rings`].
- Délais contradictoires : « couple of weeks » contre « four to six weeks ».
- Recherche de diamants vide (« 0 diamonds found ») à la lecture, sans message d'explication.
- Constructeur d'alliance : page vide à la lecture (corps de 19 caractères) ; l'inventaire du 24/11 signalait un cadre externe (Ava Couture) non chargé ici [V].
- Bandeau cookies qui recouvre la partie basse gauche en bas de l'écran (visible sur la capture).
- Appels à `jeweleros.com/api/` dès l'ouverture de la page, même sans interaction, ainsi qu'un appel d'erreur (`log-error`) quand ils sont coupés [V, requêtes observées].

## Limites de l'audit

- Les styles et « Skip » n'ont pas été cliqués : l'ouverture du Designer appelle `jeweleros.com/api/`, interdit par le robots.txt de JewelerOS. Les appels faits spontanément à l'ouverture de la page ne sont pas un écart ; mon script en a coupé certains pour les clics sur pastilles seulement. Étapes 2 à 4, 3D, vues, carat, taille de doigt, gravure, partage : **non testés**.
- Panier : `/cart` est interdit (`Disallow: */cart`), et il n'y a aucun bouton d'ajout au panier (prix sur demande) : livraison, moyens de paiement et récapitulatif non relevés.
- Temps d'apparition du visuel principal (images des 9 styles chargées) : ordinateur 1,5 s, iPhone 1,4 s, depuis la requête de la page, une seule mesure par appareil, réseau du bac à sable [V mesure ; valeur indicative].
- Liens de menu et de pied de page non ouverts un à un ; conditions de retour lues en extrait.
- Cadence respectée : au moins 3 s entre deux pages.

## Sources

- https://www.pearcejewelers.com/pages/design-your-ring (contrôles, captures et mesures de cette session)
- https://www.pearcejewelers.com/pages/custom-jewelry ; /pages/custom-engagement-rings ; /pages/lab-grown-vs-natural ; /financing-options ; /testimonials ; /terms-and-conditions
- https://www.pearcejewelers.com/jewelry/engagement-rings ; fiche https://www.pearcejewelers.com/jewelry-details/diamond-engagement-rings/14k-yellow-gold-engagement-ring/30015 ; https://www.pearcejewelers.com/diamonds?labGrown=1
- robots.txt contrôlés : pearcejewelers.com (panier interdit) et jeweleros.com (`/api/` interdit)
- Inventaire du territoire : `docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md`
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/pearce-jewelers/
