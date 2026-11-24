# Audit : Mathews & Peters (Fort Wayne, Indiana)

- **Site** : Mathews & Peters ; **adresse de départ** : https://www.mathewsandpeters.com/ringsettings
- **Date** : 15/11/2026 ; **appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Montures, filtres, fiche d'une monture et page de choix du diamant atteints ; la liste de diamants est restée vide (0 résultat), le récapitulatif et le panier n'ont pas été vus (panier interdit par robots.txt : `Disallow: */cart`, `*/checkout`).
- **robots.txt** : lu ; `Crawl-delay: 2` respecté ; chaque adresse contrôlée « AUTORISÉ » avant ouverture. Interdits relevés : `*?kw=`, `*?sortSpec=`, `*?showAll=`, `*/cart`, `*/checkout`, `*/myaccount`, `*/login` : non ouverts [V].
- Marques : [V] vérifié, [I] inféré, [S] supposé. Plateforme : Punchmark (pied de page « Powered by Punchmark ») [V]. Vendeur en ligne uniquement ; catalogue de montures de fournisseurs (images `cdn.jewelryimages.net/galleries/stuller_inc/`) [V, I : origine Stuller].

## Parcours

| Étape | Contenu | Source |
|---|---|---|
| 1. Choose a Ring | « Styles » : Solitaire, Side Stone, Three Stone, Halo, Pave, Antique, Bypass ; « Filters » : métal, fourchette de prix, « Can be set with », tri ; 174 montures [V] | /ringsettings |
| Fiche d'une monture | Photos, taille de doigt (3 à 11), prix, délai, « Choose This Ring » [V] | /ringsettings-details/engagement-rings/half-bezel-engagement-ring/890277 |
| 2. Choose a Diamond | « We started your search with diamonds that fit your chosen setting » ; Natural / Lab-Grown ; filtres forme, prix, carat, cut, couleur, pureté, « Advanced » [V] | /ringsettings-diamonds?diamondshape=princess&carat=4.71-6.36 |
| 3. Complete Ring | « Review Your Ring » (« not available yet » tant qu'aucun diamant) [V] | /ringsettings-complete (non ouvert) |

## Contrôles vérifiés

Liste des montures : 173 contrôles sur ordinateur, 64 sur iPhone (controls.cjs) ; fiche d'une monture : 168 ; la plupart sont la navigation et le pied de page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Styles : Solitaire, Side Stone, Three Stone, Halo, Pave, Antique, Bypass | lien (javascript) | Les 7 icônes sont présentes [V]. « Halo » : clic scripté non confirmé (échec du sélecteur) ; liens du menu `?settingType=…` existent (Solitaire, Side-Stone, Three Stone, Halo, Pave, Antique, Single Row, Bypass) | change | non testé (sauf lecture des liens) |
| Filtre métal : All, White Gold, Yellow Gold, Platinum, Rose Gold | lien | « Platinum » et « White Gold » cliqués : les prix affichés changent (ex. 1re carte : 2 520,30 $ → 1 434,66 $ en platine ; ce sont peut-être d'autres cartes) [V] | oui | fonctionne |
| Fourchette de prix (« No minimum » / « Unlimited ») | champ texte | Présents ; non remplis | - | non testé |
| « Can be set with: » | liste | Présente ; non ouverte | - | non testé |
| Tri : Default, Featured, High to Low, Low to High, Newest | liste | Les 5 choix sélectionnés ; l'ordre des 6 premiers prix n'a changé qu'avec « Newest » (830,20 $ à 887,80 $) ; effet de « Low to High » / « High to Low » non démontré (rechargement asynchrone) [V] | - | fonctionne en partie |
| Clear Filters | bouton | Cliqué ; liste réinitialisée [V] | - | fonctionne |
| Vue grille / liste (View) | bouton | Présents ; non cliqués | - | non testé |
| Carte d'une monture | lien | Ouvre la fiche (clic de la carte via l'adresse) [V] | prix affiché | fonctionne |
| Fiche : photos (5 images, « Click to zoom ») | lien | Zoom au clic annoncé ; 5 images `CONFIG.11221916*.jpg` ; non actionné [V] | - | non testé |
| Fiche : taille de doigt (17 pointures) | liste | « 6 » choisi : prix passe de 2 520,30 $ à 2 542,30 $ (+ 22 $) [V] ; suppléments : 3 à 6,5 = +22 $, 7 = +19 $, 7,5 et 8 = +28 $, 8,5 et 9 = +37 $, 9,5 et 10 = +46 $, 10,5 et 11 = +55 $ | oui | fonctionne |
| Fiche : « Choose This Ring » | bouton | Ouvre l'étape 2 avec la taille mémorisée (« Ring size: 6 ») et filtres préremplis (forme princesse, 4,71 à 6,36 ct) [V] | - | fonctionne |
| Fiche : « Shipping », « Returns » | accordéon | « Returns » ouvre le texte de la politique de retour dans une fenêtre ; « Shipping » : texte non relevé [V] | - | « Returns » fonctionne |
| Fiche : « Add to Wish List » | lien | Non cliqué (compte) | - | non testé |
| Étape 2 : Natural / Lab-Grown | bascule | Cliquée : 0 résultat pour les deux (« 0 diamonds found », « No data available in table ») [V] | - | **ne renvoie rien** dans cet audit |
| Étape 2 : 10 formes, prix, carat, cut (Fair à Excellent), couleur (L à D), pureté (F à SI2), « Advanced », par page 20/40/60/120, recherche par SKU | filtres | Présents, non exploitables (aucune ligne) [V] | - | non testé |
| Étape 2 : bouton « Change » (monture) et « View » | bouton | Présents ; non cliqués | - | non testé |
| Menu Diamonds : /diamonds?labGrown=0 et =1 ; 10 formes | liens | `/diamonds?labGrown=1` ouvert : la requête de données (`api/async.php?...getDiamonds`) a échoué dans cet environnement [V] | - | échec |
| Financement Affirm (pied de page) | lien | Page lue : 0 % APR ou 10 à 36 % APR, prêts de 3, 6, 12, 18, 36 mois ; exemple 700 $ à 63,18 $/mois sur 12 mois à 15 % [V, /affirm-monthly-financing] | - | lu |
| Return Policy, Messages & Returns, About | liens | Return Policy lue [V] | - | lu |
| Icône panier (Toggle Shopping Cart Menu), Mon compte, Wishlist, Recherche | bouton | Présents ; panier et compte non ouverts (interdits) | - | non testé (interdit) |
| Téléphone (260) 222-8484 ; e-mail de retours | lien | Présents ; appel non testé | - | non testé |
| Newsletter (e-mail + bouton) | formulaire | Non rempli | - | non testé |
| Réseaux : Instagram, Facebook, Google, TikTok, Pinterest, YouTube | liens | Présents ; non suivis | - | non testé |

## Options disponibles

- **Métaux** (filtre) : or blanc, or jaune, platine, or rose ; la fiche d'une monture affiche un seul métal (« 14K Yellow Gold ») [V]. [V, ext. inventaire : 174 montures, formes de pierre : 8 relevées au menu côté bagues, 10 côté diamants.]
- **Styles** : solitaire, side stone, three stone, halo, pavé, antique (vintage), bypass (+ single row au menu) [V].
- **Pierre** : naturel ou synthétique (« Lab-Grown ») ; 10 formes dont marquise ; cut, couleur L à D, pureté F à SI2 [V].
- **Taille de doigt** : 3 à 11 par demi-pointure, avec suppléments [V]. **Gravure** : non vue dans le parcours ; les pages « Personalized » et « Custom » existent [V, liens].
- **Vues** : photos zoomables ; pas de 3D, de 360°, de vidéo, de RA ni d'essayage relevés [V].

## Prix, délais, retours, garanties

- **Prix** : la monture est vendue sans pierre (« CENTER STONE NOT INCLUDED »), prix affiché, ex. 2 520,30 $ pour une monture bezel or jaune 14 k, + 22 $ pour la taille 6 [V]. 174 montures : prix de 830,20 $ (tri « Newest ») à plus de 4 000 $ sur les cartes vues [V ; inventaire : 874,06 à 14 007,16 $ sur la première page]. Pas de décomposition (métal, façon, marge) [V].
- **Délai** : « Availability: Ships in 7-10 Business Days » sur la monture ; délai de la bague complète non vu [V].
- **Retours** : 15 jours à compter de la réception, article non porté, emballage d'origine ; retour à la charge du client (recommandé et assuré) ; **les pièces personnalisées et sur mesure sont en vente ferme** ; remboursement en 7 à 10 jours ouvrés ; échange sous 30 jours pour défaut ; **les pierres, diamants compris, sont vendues « as-is », hors politique** ; demande par e-mail [V, /return-policy].
- **Garantie** : aucune garantie de bijou relevée ; défaut échangeable sous 30 jours [V].
- **Financement** : Affirm [V]. **Moyens de paiement, frais de livraison** : non vus (panier non ouvert).

## Confiance et service

- Entreprise de fournisseur depuis 1975, boutique en ligne lancée en octobre 2025 [V, ext. inventaire, /pages/about-mathews-and-peters]. Aucun avis client affiché sur les pages vues [V].
- Service : téléphone (260) 222-8484, e-mail pour retours ; pas de chat, WhatsApp, essayage à domicile ou rendez-vous relevés [V].
- Éducation : guides sur diamants, montures, gemmes, métaux, soins [V, liens]. Langue : anglais ; devise : dollar [V].
- **Preuves de fabrication** : aucune photo, vidéo d'atelier ni suivi de commande [V].

## Points forts à retenir pour JR Diamond

1. **Taille de doigt avec supplément affiché par pointure** dans le menu (« 7 (+ $19.00) ») : le prix bouge avant l'achat [V, fiche 890277].
2. **Parcours en trois étapes visibles en permanence** (monture, diamant, récapitulatif) avec « Change » et la taille mémorisée à l'étape suivante [V].
3. **Filtres de diamant préremplis selon la monture** (forme, fourchette de carats autour de 5,50 ct) [V].
4. **Page d'information « Specs » complète** : poids en grammes (6,33 g), fourchette de carats, couleur/pureté usuelle, plage de tailles [V, fiche].
5. **Politique de retour claire et publiée**, y compris l'exclusion du sur-mesure et des pierres [V, /return-policy] : modèle pour rédiger celle de JR Diamond.

## Défauts observés

1. **Liste des montures lente** : 17 s avant l'apparition des cartes (« Loading Rings ») sur ordinateur et sur iPhone [V].
2. **Liste de diamants vide** dans l'audit : 0 résultat pour Natural et Lab-Grown (étape 2 et /diamonds), la requête de données a échoué ici ; [I] cause possible : environnement d'audit, non confirmée.
3. **Pas de 3D, de 360° ni de visuel de la bague terminée** : seulement la monture sans pierre [V].
4. **Prix de la bague complète inconnu avant la fin du parcours** (monture + pierre séparées) [V].
5. **Pas de photos de fabrication, d'avis ni de délai de bague complète** [V].
6. Faute de frappe au menu : « Lab-Grown Dimaonds » [V].
7. Tri : l'effet de « Low to High » / « High to Low » n'a pas été constaté (voir tableau) [V].

## Limites de l'audit

- Aucun diamant sélectionné : étape 3 (récapitulatif), frais de livraison, délai final, moyens de paiement et panier **non vus** (panier interdit par robots.txt).
- Texte « Shipping » non relevé ; style Halo non confirmé par clic.
- Temps d'apparition du visuel principal : liste des montures **17,7 s** (ordinateur) et **16,9 s** (iPhone) ; fiche d'une monture **3,4 s** (ordinateur) et **3,1 s** (iPhone), jusqu'à l'apparition du bouton « Choose This Ring » [V].
- Le site a été ouvert une quinzaine de fois, à plus de 2 s d'intervalle ; aucune donnée saisie.

## Sources

- [S1] https://www.mathewsandpeters.com/ringsettings (navigateur, ordinateur et iPhone, 15/11/2026)
- [S2] https://www.mathewsandpeters.com/ringsettings-details/engagement-rings/half-bezel-engagement-ring/890277
- [S3] https://www.mathewsandpeters.com/ringsettings-diamonds?diamondshape=princess&carat=4.71-6.36 et /diamonds?labGrown=1
- [S4] https://www.mathewsandpeters.com/return-policy ; /affirm-monthly-financing ; /pages/customizable-designs
- [S5] https://www.mathewsandpeters.com/robots.txt
- [S6] Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/mathews-and-peters/ (hors dépôt)
