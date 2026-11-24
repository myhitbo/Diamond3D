# Audit : Harry K Jewelry (Atlantic Jewelry Corp, Rehoboth Beach, Delaware)

- **Site** : Harry K Jewelry (raison sociale : Atlantic Jewelry Corp), bijouterie et marque propre « Harry K », Rehoboth Beach.
- **Adresse** : https://harrykjewelry.com/ ; page de départ : https://harrykjewelry.com/services/custom-jewelry-designs/
- **Date** : 15/11/2026.
- **Appareils** : Chromium ordinateur (1 366 × 900) et affichage iPhone 13 (émulation Playwright).
- **Statut** : **partiel**. Le catalogue de bagues (`/catalog/engagement-ring/`) répond 302 vers `/verify.html` (vérification JavaScript par cookie, signalée avant l'audit) : non contourné, non rouvert. Le panier (`/cart/`) est interdit par robots.txt : non ouvert. Il n'existe pas de configurateur : le sur-mesure passe par des séances de dessin en boutique ou à distance. Lu : accueil, page de départ, recherche de diamants (`/diamonds/`), services, guide d'achat, conditions.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains, affichés le 15/11/2026.

## Parcours

Aucun constructeur en ligne. Le visiteur lit la page de sur-mesure, puis appelle ou vient en boutique [V].

| Étape | Adresse | Options |
| --- | --- | --- |
| 1. Page de départ | `/services/custom-jewelry-designs/` | Texte (« Design Your Own Ring • Computer Aided Designs • 3D Modeling »), bouton « Contact us », téléphone 302-226-0675 ; aucun formulaire, aucune option [V] |
| 2. Bagues de la marque | accueil, « Featured engagement rings » ; `/catalog/engagement-ring/` | Carrousel de pièces à prix affiché ; catalogue **bloqué** (vérification) |
| 3. Pierres seules | `/diamonds/` | Recherche de diamants : forme (9), carat, taille, couleur, pureté, polissage, symétrie, laboratoire, prix, comparaison [V] |
| 4. Panier | `/cart/` | **Non ouvert** (interdit) |

## Contrôles vérifiés

`controls.cjs` sur la page de départ : 55 contrôles visibles sur ordinateur, 44 en affichage iPhone (menu repliable). Page `/diamonds/` : relevée par script (champs et textes) ; l'accueil lu pour les prix.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Menu BRIDAL, DIAMONDS, DESIGNERS, JEWELRY, SERVICES, ABOUT, CONTACT | liens | `/catalog/engagement-ring/` (bloqué), `/diamonds/`, `/designers/`, `/catalog/fashion/`, `/services/`, `/company/about-us/`, `/contact-us/` | — | Bridal : bloqué ; autres non tous ouverts |
| Recherche (`/search/`) | lien | Chemin interdit par robots.txt (`Disallow: /search`) | — | Non ouvert |
| Favoris (`/account/login/?next=…`), compte (`/account/login/`) | liens | Mène à la connexion ; chemins `/account` interdits | — | Non ouverts |
| Panier (`/cart/`) | lien | Interdit par robots.txt | — | Non ouvert |
| Téléphone 302-226-0675 | lien tel | Appel | — | Lien lu |
| « Contact us », « Store hours », « Store map » | bouton, liens | Coordonnées (313 South Boardwalk), horaires, lien vers une carte | — | Lus, non ouverts |
| Réseaux (Facebook, Instagram) | liens | Sites externes | — | Non ouverts |
| Éducation (Buying, Diamond, Gemstone, Jewelry Care, Metal, Ring guides) | liens | Guides ; « Buying guide diamonds » lu | — | Un guide lu [V] |
| Services (Financing, Redesign, Appraisals, Engraving, Repairs…) | liens | Pages de texte ; Financing, Redesign, Engraving lues | — | Fonctionnent [V] |
| `/diamonds/` : forme (Round, Princess, Radiant, Cushion, Oval, Emerald, Pear, Marquise, Heart) | cases à icône | « Round » : tableau filtré, de 770 $ (0,50 ct, I, SI2, Excellent, GIA) | Affiché par pierre | Fonctionne [V] |
| `/diamonds/` : carat, taille (cut), couleur, pureté, polissage, symétrie (curseurs ou listes) | champs et listes | Présents (`carat_weight`, `cut_grade`, `clarity`) ; non déplacés | — | Lus, non actionnés |
| `/diamonds/` : numéro de stock | champ | Présent | — | Non utilisé |
| `/diamonds/` : « Compare (0) », « Clear », « Reset » | boutons | Présents | — | Non actionnés |
| `/diamonds/` : en-têtes (SHAPE, SIZE, CUT, COLOR, CLARITY, POLISH, SYMMETRY, LAB, PRICE) | liens de tri | Un clic sur « PRICE » a trié du plus cher au moins cher (142 147 $ en tête) ; les liens sont de la forme `?sort=…`, **interdits par robots.txt** (voir Limites) | Tri | Fonctionne [V], écart [P1] |
| Fiches de bagues (cartes de l'accueil) | liens | Pages de catalogue : non ouvertes | Prix en carte | Non testées |
| Ajout au panier, taille, gravure, options de monture | — | **Non testés** : catalogue bloqué, panier interdit | — | Non testé |

## Options disponibles

- **Formes de diamant (`/diamonds/`)** : 9 (rond, princesse, radiant, coussin, ovale, émeraude, poire, marquise, cœur) [V].
- **Critères de pierre** : carat, coupe (Ideal à Poor), couleur, pureté (FL à I3), polissage, symétrie, laboratoire (colonne « LAB », GIA relevé), prix [V].
- **Services** : sur-mesure, refonte de bijoux (« Jewelry Redesign »), gravure (« a number of different fonts and styles »), évaluation, assurance, réparations, financement [V].
- **Métaux, tailles de doigt, griffes, pavé, origine naturel ou synthétique** : non relevés (catalogue bloqué) [S pour tout le reste].

## Prix, délais, retours, garanties

- [V] Prix affichés sur l'accueil pour les bagues de la collection « Harry K Signature » : de 2 600 $ à 11 520 $ ; autre pièce à 9 980 $ ; les alliances jusqu'à 11 520 $ d'après l'inventaire du Delaware [sec.]. Pas de décomposition.
- [V] Diamants seuls : **4 521 diamants** à prix affiché ; première ligne 592 $ (0,50 ct, J, VVS2, GIA), plus chère lue 142 147 $ (5,10 ct, G, SI1).
- [V] Livraison : « free first-class shipping on all orders over $1,000 » (accueil). Aucun tableau de frais ni délai de livraison lu.
- [V] Financement : programme interne « Financing Guaranteed », conditions par téléphone, candidature gratuite (`/services/financing/`).
- **Délai de fabrication, retours, garanties** : non trouvés. La page `/terms-and-conditions/` (mise à jour le 1er avril 2022) est un texte d'usage du site, sans politique de retour dans la partie lue [V].
- Certificats : GIA relevé dans le tableau ; le guide d'achat dit « Always insist on grading from GIA or IGI for both natural and lab-grown diamonds » [V].
- Synthétique : le guide d'achat compare « Lab vs. Natural » : « Lab diamonds often cost 30–40% less » ; la recherche de diamants ne mentionne pas le synthétique [V].
- Devise : dollar ; langue : anglais.

## Confiance et service

- [V] « Over 30 years » de sur-mesure ; « 35 years of coastal craftsmanship » ; Harry Keswani a lancé la ligne Harry K en 2005 (`/company/about-us/`). « Custom houses and factories » : la fabrication n'est donc pas décrite comme interne [V].
- [V] Séances de dessin « virtual and long-distance », avec « the latest digital drawing technology » : service sans interface visible.
- [V] Aucune photo ou vidéo d'atelier lue sur les pages ouvertes ; aucun suivi de commande ; aucun avis client relevé sur les pages ouvertes.
- [V] Téléphone, boutique sur le front de mer (313 South Boardwalk), horaires, plan, financement.

## Points forts à retenir pour JR Diamond

1. **Recherche de diamants avec 4 521 pierres à prix affiché**, filtrable par neuf formes et par laboratoire : le prix de la pierre n'est pas caché [V : `/diamonds/`].
2. **Prix visibles dès l'accueil** pour la marque propre (2 600 à 11 520 $), avec numéro d'article (« # 167-00971 ») : référence que le client peut citer [V : accueil].
3. **Service à distance en trois mots-clés** (« Computer Aided Designs • 3D Modeling », séances virtuelles) : l'argument existe en texte, sans outil visible, ce que JR Diamond peut montrer [V : page de départ].
4. **Guide d'achat qui chiffre l'écart synthétique/naturel** (« 30–40% less ») [V].
5. **Livraison gratuite au-dessus de 1 000 $** annoncée en accueil [V].

## Défauts observés

- **Catalogue de bagues derrière une vérification JavaScript** : aucune bague de fiançailles n'est atteignable sans cookie de contrôle [V : 302 vers `/verify.html`, signalé avant l'audit].
- **Pas de configurateur** : le sur-mesure est un texte et un numéro de téléphone, sans formulaire ni fourchette de prix [V].
- **Aucune politique de retour, de délai ni de garantie trouvée** sur les pages ouvertes [V].
- **Contradiction de langage** : « hand-crafted » en accueil, « custom houses and factories » dans la page « À propos » [V].
- **Page de sur-mesure sans appel à l'action chiffré** : pas de prix de départ, pas de délai [V].

## Limites de l'audit

- **Catalogue bloqué** : `/catalog/engagement-ring/` (302 vers `/verify.html`) n'a pas été contourné ni rouvert. Métaux, tailles, options de monture, fiches de bagues, ajout au panier et panier non audités.
- **Écart à robots.txt [P1]** : le robots.txt interdit `/*?sort=`. Pour la recherche de diamants, un clic sur l'en-tête « PRICE » a été fait par script avant que j'aie rapproché cette règle des liens `?sort=` ; il a trié la liste (sans doute par appel de script, adresse finale non relevée). Ce constat est marqué [P1] ; aucun autre tri n'a été fait ensuite.
- Les curseurs, la comparaison et la recherche par numéro de stock n'ont pas été actionnés ; aucun diamant n'a été ouvert.
- Pages `/designers/`, `/catalog/fashion/`, `/services/` (index), `/contact-us/` non lues en détail.
- Mesure du visuel principal de l'accueil : 1,3 s sur ordinateur, 1,0 s en affichage iPhone ; `/diamonds/` : tableau complet après environ 7,5 s (une mesure chacune) [V].
- Aucun formulaire rempli ; aucun chat ouvert.

## Sources

- https://harrykjewelry.com/services/custom-jewelry-designs/
- https://harrykjewelry.com/ (accueil, bandeau de livraison, prix des bagues)
- https://harrykjewelry.com/diamonds/
- https://harrykjewelry.com/jewelry-redesign/
- https://harrykjewelry.com/services/financing/
- https://harrykjewelry.com/services/jewelry-engraving/
- https://harrykjewelry.com/education/buying-guide/diamonds/
- https://harrykjewelry.com/company/about-us/
- https://harrykjewelry.com/terms-and-conditions/
- https://harrykjewelry.com/robots.txt
