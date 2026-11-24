# Audit : A.R. Morris Jewelers (Greenville, Delaware)

- **Site** : A.R. Morris Jewelers, bijouterie avec atelier interne (Greenville, DE).
- **Adresse** : https://www.armorrisjewelers.com/ ; page de départ : https://www.armorrisjewelers.com/design-your-own-ring/choose-your-style
- **Date** : 15/11/2026.
- **Appareils** : Chromium ordinateur (1 366 × 900) et affichage iPhone 13 (émulation Playwright).
- **Statut** : **partiel**. Les étapes 1 (monture) et 2 (pierre) du constructeur sont auditées. L'étape 3 « Complete Your Ring » n'est pas suivie : elle passe par les adresses `?stoneID`, `?ringType`, `?productOf=`, interdites par robots.txt. Le panier (`/cart.html`, autorisé) a été ouvert : il est vide, et aucune page de monture ni de pierre n'offre de bouton « ajouter au panier ». Les 20 lignes de chaque page de pierres affichent « Call for price ».
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains, affichés le 15/11/2026. Aucun formulaire rempli, aucun compte créé, aucun chat ouvert.

## Parcours

Constructeur en trois étapes, annoncé par un bandeau « Choose a Setting / Choose a Center Stone / Complete Your Ring » [V : `/ring-detail.html?rid=46059`].

| Étape | Adresse | Options |
| --- | --- | --- |
| 1. Monture | `/design-your-own-ring/choose-your-style` | Grille de 20 montures (puis 40 après défilement, chargement continu), filtre prix (6 tranches), métal (4 cases), tri (3 modes) [V] |
| 1 bis. Fiche monture | `/ring-detail.html?rid=…` | Liste « métal » (4), liste « forme de pierre » (4), taille de doigt (7 tailles), « Free Ring Sizer » (PDF), « Inquire », « Send a hint », « Schedule an appointment », « Add a Center Diamond » [V] |
| 2. Pierre | `/design-your-own-ring/choose-your-diamond` (la fiche monture y renvoie par `?rid=`) | Filtres forme (10), prix, carats, couleur, pureté, taille (cut), certificat (6) ; tableau de 1 588 diamants naturels, colonnes « Sarine(360) » et « Price » [V] |
| 3. Bague complète | `?stoneID`, `?ringType`, `?productOf=` | **Non suivie** (interdite par robots.txt) |
| Alternative | `/design-your-own.html` | Formulaire de demande sur mesure (non rempli) [V] |
| Panier | `/cart.html` | « Your Shopping Cart is Empty » [V] |

## Contrôles vérifiés

Relevé par `controls.cjs` : 110 contrôles visibles sur ordinateur, 132 en affichage iPhone (page de montures) ; 156 et 139 sur la page de pierres ; la fiche monture : 148. Les ~60 liens de cartes produit et les liens de menu identiques ne sont pas répétés.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Filtre « Price » (liste) | select | Tranches « <= $500 » à « > $5000 » ; « $1001 - $2000 » : 20 montures de 1 875 $ ; « > $5000 » : 20 montures de 5 175 à 9 400 $. L'adresse ne change pas | Filtre | Fonctionne [V] |
| « Metal » (4 cases : Platinum, Yellow Gold, White Gold, Rose Gold) | cases | Rose Gold : montures en 18 k (4 025 $ et plus) ; Yellow Gold et White Gold filtrent aussi. **Platinum : 0 résultat** lors du test (alors que des montures en platine existent à 1 300 $) | Filtre | Partiel : un cas à vide [V] |
| « Category » | menu | Une seule case, « Engagement Rings » | — | Fonctionne [V] |
| Tri (Popularity, Price Low to High, Price High to Low) | select | « High to Low » : de 18 375 $ en descendant | Tri | Fonctionne [V] |
| Carte monture (image, titre) | lien | Ouvre `/ring-detail.html?rid=…` | Prix de la monture seule | Fonctionne [V] |
| « Quick View » (sur chaque carte) | lien | Clic forcé : aucun panneau détecté | — | Non vérifié |
| Cœur sur la carte | lien | Ajout aux favoris (`add_product_to_wishlist_from_listing.php`, lu dans le script) | — | Non actionné |
| Fiche : « Select Metal Type » (Platinum, 14K White Gold, 14K Yellow Gold, 18K White Gold) | select | **Charge une autre fiche** (le `rid` change) : image et prix changent. 14 k blanc rond 1 625 $ → Platinum 2 150 $ → 14 k jaune 2 375 $ → 18 k blanc 3 475 $ | Oui | Fonctionne [V] |
| Fiche : « Select Diamond Shape » (Emerald Cut, Oval, Pear Shape, Round) | select | Même mécanisme (autre fiche). En 18 k blanc : Oval 2 925 $, Emerald 1 900 $, Round 3 475 $ | Oui | Fonctionne [V] |
| Fiche : « Ring Size » (5 à 8, par demi-taille) | select | Pas de changement de prix (3 475 $ avant et après la taille 7) | Non | Fonctionne [V] |
| « Free Ring Sizer » | lien | PDF `/images/ring_sizer.pdf` (gabarit à imprimer) | — | Lien lu, non ouvert |
| Vignettes de la fiche (5) | liens | Changent la photo ; aucune vue 360° ni 3D de la bague | — | Présentes [V] |
| « Send a hint » | bouton | Formulaire d'indice à un proche | — | Non actionné (formulaire) |
| « Inquire » | bouton | Demande d'information | — | Non actionné (formulaire) |
| « Schedule an appointment » | lien | Renvoie vers `/contact-us.html` | — | Lien lu |
| « Add a Center Diamond » | lien | `/design-your-own-ring/choose-your-diamond?rid=46059` (autorisé) | — | Lien lu |
| Téléphone 302-777-4367 | lien tel | Appel | — | Lien lu |
| Pierres : forme (Round, Princess, Emerald, Asscher, Marquise, Oval, Radiant, Pear, Heart, Cushion) | cases | « Oval » : 2 437 diamants (plus que les 1 588 de départ) ; « Round » : **0** résultat ; comportement incohérent lors des tests automatisés | Non | Partiel [V] |
| Pierres : prix min/max (200 à 100 000) | champs | Saisie de 2 000 à 3 000 + Entrée : liste inchangée (1 588) | Non | Sans effet observé [V] |
| Pierres : carats (0,25 à 12), couleur (D à K), pureté (IF à SI2), taille (Signature Ideal à Good) | curseurs à 2 poignées | Présents ; non déplacés (jeu de poignées) | Non | Lus, non actionnés |
| Pierres : certificat (AGS, EGL USA, EGL INT'L, GCAL, GIA, IGI) | cases | « GIA » (après « Round ») : 4 lignes dont « EGL USA » ; « IGI » : liste inchangée | Non | Incohérent [V] |
| Pierres : en-tête « Price » | lien | Sans effet visible sur la liste filtrée à 0 | — | Non concluant |
| Pierres : case « Compare » | case | Coche la ligne (`compareStone`) ; pas de tableau de comparaison relevé | — | Partiel [V] |
| Pierres : icône 360° (colonne Sarine) | lien | Ouvre une fenêtre `v360gnd.s3…amazonaws.com/Data/…html` ou `.mp4` (lu dans le code, non ouvert) | — | Non ouvert |
| Pierres : ligne (clic) | ligne | `diamondDetailDivShow` : détail dans le tableau | « Call for price » | Non concluant |
| Pierres : pagination (2 à 10, « next ») | liens | Pages de 20 lignes | — | Lu |
| Bandeau cookies (Accept All, Decline All, Confirm choices, Settings) | boutons | Se ferme, 4 catégories | — | Fonctionne [V] |
| Cœur d'en-tête, compte, panier | liens | `/wish-list.html`, `/login-checkout.html`, `/cart.html` | — | Panier ouvert (vide) [V] |

## Options disponibles

- **Métaux (fiche monture)** : platine, or blanc 14 k, or jaune 14 k, or blanc 18 k. Filtre de la grille : platine, or jaune, or blanc, or rose [V]. Du rose existe à 14 k (Renaissance) et 18 k.
- **Formes de monture (fiche)** : Emerald Cut, Oval, Pear Shape, Round [V]. Formes de pierre (étape 2) : 10 [V].
- **Tailles de doigt** : 5, 5,5, 6, 6,5, 7, 7,5, 8 [V].
- **Pierres** : diamants naturels seulement dans le constructeur (menu « Natural Diamond », seule entrée) ; page distincte « Lab Grown Diamonds » (`/page/lab-grown-diamonds.html`) sans catalogue ni prix [V].
- **Certificats** : AGS, EGL USA, EGL INT'L, GCAL, GIA, IGI [V].
- **Absents** : gravure, choix de griffes, pavage, corps de bague [V : aucun contrôle correspondant].

## Prix, délais, retours, garanties

- [V] Montures seules, prix affichés : de 1 300 $ (platine, émeraude) à 18 375 $ en tri décroissant. Sur la fiche : « Center Diamond-Stone is Not Included - Sold Separately ».
- [V] Pierres : 20 lignes lues, toutes « Call for price » ; aucun prix de bague complète n'est calculable sans appeler (302-777-4367).
- [V] Aucune décomposition du prix (métal, façon, sertissage).
- [V] Délai : page `/design-your-own.html` sans délai chiffré ; « 4-6 weeks » indiqué dans l'inventaire du Delaware pour les montures personnalisées [sec.].
- [V] Livraison (`/page/shipping-policy.html`) : gratuite et assurée dès 300 $ (FedEx 2 jours), 35 $ en dessous, nuit : 45 $ ; retrait en boutique gratuit ; expédition du lundi au jeudi ; 3 à 5 jours ouvrés ; signature d'un adulte et pièce d'identité ; livraison à l'adresse de facturation seulement.
- [V] Retours (`/page/returns-policy.html`) : bijoux, 10 jours ouvrés après l'arrivée, frais de retour à la charge du client ; **« special orders, custom work » non repris** ; une pièce gravée, modifiée ou ajustée n'est pas reprise ; certificat à rendre.
- [V] Garantie : mention « Satisfaction Guaranteed » ; pas de page de garantie lue.
- [V] Taxe : « Tax Free Delaware », absence de taxe sur les ventes (bandeau et `/page/tax-free.html`).
- [V] Financement : « 0% financing* » sur crédit approuvé, par téléphone (`/page/financing.html`), pas de simulateur.
- Certificats : GIA, IGI et d'autres [V] ; libellé du synthétique : page « Lab Grown Diamonds », sans prix, avec « natural and lab-grown diamonds » [V].
- Moyens de paiement : non vus (panier vide) [V].

## Confiance et service

- [V] Atelier interne : « We create the piece exactly as you want it ... in our shop » ; CAO et fabrication ; refonte de bijoux anciens (`/design-your-own.html`).
- [V] Formulaire de sur mesure : téléversement de 3 images, métaux, pierres, fourchette de prix ; un conseiller rappelle pour un rendez-vous. Aucun parcours de dessin à distance en ligne.
- [V] Avis clients : « NO REVIEWS » sur la fiche. Rendez-vous, téléphone, adresse (3848 Kennett Pike), appel pour financement.
- [V] Aucune photo ou vidéo d'atelier, aucun suivi de commande avant achat. Langue : anglais ; devise : dollar. « 65 Years in business » en bandeau.

## Points forts à retenir pour JR Diamond

1. **Montures à prix affiché dès l'étape 1**, avec filtre de prix en 6 tranches et tri : l'utilisateur sait ce qu'il dépense avant de choisir la pierre [V : `choose-your-style`].
2. **Vidéo 360° des pierres** (colonne « Sarine(360) ») : preuve que « ce que vous voyez existe » est un argument déjà utilisé pour la pierre [V : lien `v360gnd…` dans la liste].
3. **Le métal et la forme changent le prix à l'écran** (1 625 $ → 3 475 $ selon le cas) avec une nouvelle photo [V].
4. **Filtre de certificats à six laboratoires**, GIA et IGI compris [V].
5. **Livraison chiffrée en un tableau** (35 $, gratuite dès 300 $, 45 $ la nuit) [V].

## Défauts observés

- **Prix des pierres « Call for price »** sur chaque ligne lue : impossible de composer une bague avec un prix complet [V].
- **Pas d'ajout au panier** pour une monture ni une pierre ; le panier n'est atteint que vide [V].
- **Les listes « métal » et « forme » rechargent une autre fiche** au lieu de transformer la même bague ; la photo n'est pas la bague configurée (aucune 3D) [V].
- **Filtre des montures « Platinum » à zéro résultat**, filtres de pierres incohérents (rond : 0, ovale : plus de résultats que le total) lors des tests [V ; cause non établie].
- **Les carats d'une monture ne sont pas précisés** : le nom de fichier de l'image (« 9.0RD », « 10.0RD ») laisse penser à des diamètres de pierre en millimètres [I].
- **Le sur-mesure n'est pas repris** (retours) et le synthétique n'a pas de catalogue [V].
- Quick View sans effet détecté [V, une tentative].

## Limites de l'audit

- Étape 3 du constructeur non suivie (adresses `?stoneID`, `?ringType`, `?productOf=` interdites) : récapitulatif, prix final et ajout au panier d'une bague complète inconnus.
- Chaque filtre a été testé une fois, sans reprise ; les anomalies (Platinum, Round, IGI) peuvent venir de l'ordre des clics ou du chargement asynchrone [S].
- Les curseurs carat, couleur, pureté et taille n'ont pas été déplacés ; la fenêtre 360° et la case « Compare » n'ont pas été ouvertes jusqu'au bout ; formulaires non remplis.
- Affichage iPhone : liste de contrôles relevée et captures prises ; les actions n'ont été jouées que sur ordinateur.
- Mesure du visuel principal (de la requête au premier visuel décodé) : montures 2,3 s ordinateur et 1,8 s iPhone ; fiche monture 0,9 s et 1,0 s ; liste de pierres 1,3 s (ordinateur). Une seule mesure par appareil, sans réseau étalonné [V].
- Délai de fabrication non lu sur le site lui-même (repris de l'inventaire du Delaware).

## Sources

- https://www.armorrisjewelers.com/design-your-own-ring/choose-your-style
- https://www.armorrisjewelers.com/ring-detail.html?rid=46059 (et `rid=45640`, `45653`, `45609`, `45666`, `45589`)
- https://www.armorrisjewelers.com/design-your-own-ring/choose-your-diamond
- https://www.armorrisjewelers.com/page/returns-policy.html
- https://www.armorrisjewelers.com/page/shipping-policy.html
- https://www.armorrisjewelers.com/design-your-own.html
- https://www.armorrisjewelers.com/page/lab-grown-diamonds.html
- https://www.armorrisjewelers.com/page/financing.html
- https://www.armorrisjewelers.com/cart.html
- https://www.armorrisjewelers.com/robots.txt
