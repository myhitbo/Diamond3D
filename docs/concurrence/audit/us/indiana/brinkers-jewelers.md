# Audit : Brinker's Jewelers (Evansville, Indiana)

- **Site** : Brinker's Jewelers, https://brinkersjewelers.com/ (Shopify). Page de départ : https://brinkersjewelers.com/pages/perfect-love-custom-design
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13.
- **Statut** : **partiel**. Il n'y a pas de configurateur : le sur-mesure passe par un rendez-vous. Le parcours d'achat en ligne est limité aux bagues de catalogue. L'ajout au panier n'a pas été fait (le système de permissions de la session l'a refusé ; je n'ai pas contourné). Le panier a été lu vide. Le panneau « FILTER » n'a pas pu être ouvert.
- Repères : [V] vérifié, [I] inféré, [S] supposé. Robots.txt : toutes les adresses ouvertes sont AUTORISÉES (contrôle fait avant chaque ouverture).

## Parcours

| Étape | Page | Options constatées |
| --- | --- | --- |
| 1. Départ « Perfect Love Custom » | /pages/perfect-love-custom-design | Texte, 6 étapes illustrées, une vidéo (bouton lecture, non lancée), un bloc « Perfect Love Story », un formulaire de contact (non rempli), bouton « Text us ». Aucun choix de métal, pierre ni budget [V] |
| 2. Catalogue bagues maison | /collections/brinkers-jewelers-engagement-rings | Grille, FILTER, SORT BY, 3 densités de vignettes, vœux (wishlist), « Add to cart » ou « Learn more » selon l'article [V] |
| 3. Fiche d'une bague | /products/<bague> | 2 photos, prix, description, livraison, retours, « Add to cart » ou message « cannot be purchased online » [V] |
| 4. Panier | /cart | Lu vide (« Your cart is empty », « Continue shopping ») [V] |

## Contrôles vérifiés

Page de départ : 62 contrôles relevés sur ordinateur, 45 en iPhone (controls.cjs). Les contrôles de pied de page et d'en-tête sont regroupés.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Menu (David Yurman, Engagement Rings, Wedding Rings, Diamonds, Fashion Jewelry, Watches, Services) | liens + sous-menus | Navigation vers collections et pages | - | Lecture de /pages/diamonds, /pages/services : OK. Sous-menus non dépliés |
| Search for products | champ | Non utilisé (adresse de recherche à vérifier avant usage) | - | Non testé |
| Perfect Love : 6 étapes (consultation, prototype, fabrication, sertissage, finition, storybook) | texte illustré | Décrit la promesse ; aucun contrôle | - | OK [V] |
| Vidéo de la page (bouton lecture) | vidéo | Non lancée | - | Non testé |
| Formulaire « Reach out » | formulaire | Présent sous le texte, champs non listés par l'outil (chargé dans un cadre [I]). Non rempli (règle) | - | Non testé |
| Text us | bouton | Ouvre un module SMS/chat, non ouvert (règle) | - | Non testé |
| 812-476-0651 | lien tel: | Appel téléphonique | - | Présent |
| Appointments / Personal Shopping / Contact Us | liens | Pages de prise de rendez-vous : 3 types (fiançailles, alliances, bijou permanent) avec boutons « BOOK AN ... APPOINTMENT » [V] | - | Page lue, boutons non cliqués |
| Interest-Free Financing | lien | Page : 0 % 12 mois via Wells Fargo, périodes 18/24/36 mois « throughout the year », layaway sans intérêt, Affirm en ligne ; formulaire d'information [V] | - | OK |
| Zillion Insurance, Tell Us Your Story, Gift Cards, Subscribe | liens | Pages secondaires | - | Non ouvertes |
| Open Wishlist (Swym) | bouton | Panneau de vœux | - | Non testé |
| Cookies : Reject All / Accept All / Customise | boutons | Bandeau au premier chargement ; « Reject All » ferme [V] | - | OK |
| FILTER (collection) | bouton | Le clic n'a ouvert aucun panneau repérable (échec de mon sélecteur ; filtres non constatés) | - | Défaut possible ou limite de l'outil [S] |
| SORT BY | liste | 9 options : Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date ancien-nouveau, nouveau-ancien [V] | - | Options lues, tri non appliqué |
| Densité de vignettes (large, petite, compacte) | 3 boutons | Changent la grille | - | Présents, non cliqués |
| Add to wishlist | bouton | Vœux (Swym) | - | Non testé |
| Add to cart (liste et fiche) | bouton | **Non cliqué** (refus de la session) ; cinq bagues de la première page n’ont pas ce bouton | - | Non testé |
| Learn more (bagues sans prix) | lien | Fiche sans prix et sans achat en ligne | - | OK [V] |
| Image 1 / 2 de la fiche | boutons | Photo produit, pas de vue 3D, vidéo ni 360° | - | OK |
| Share (Facebook, X, Pinterest, e-mail) | liens | Partage par réseau (liens de partage) [V] | - | Présents |
| Have questions? We're here to help | bouton | Déplie un bloc de contact | - | Non testé |
| FAQ de fiche (3 accordéons) | accordéons | Pourquoi Brinker's, authenticité, livraison et retours | - | Lu |
| Get Directions (2 magasins + Scottsdale) | liens | Google Maps | - | Présents |
| Terms & Conditions | lien | Page lue : expédition, remboursement, sur-mesure | - | OK |

Non trouvé sur ce site : sélection de métal, de forme, de carat, d'origine ; taille de doigt ; gravure ; guide des tailles ; comparateur ; vue 3D, AR, 360° ; essayage à domicile ; chat WhatsApp [V : absence dans les 62 contrôles et sur les fiches lues].

## Options disponibles

- **Sur-mesure Perfect Love** : entretien (sur place ou à distance), maquette CAO, cire, sertissage, polissage, storybook numérique et relié [V].
- **Catalogue** : bagues « designed by Brinker's » (or 14 et 18 kt, platine, diamants de couleur GIA), bagues avec diamants de 0,71 à plusieurs carats, montures « semi-mounting » sans pierre de centre [V].
- **Tri** : 9 options listées ci-dessus. **Paiement** : voir plus bas.

## Prix, délais, retours, garanties

- **Prix affichés** [V, /collections/brinkers-jewelers-engagement-rings] : de 3 890 $ à 11 500 $ sur les articles chiffrés (ex. 11 500 $ ; 9 405 $ ; 5 890 $ ; 3 890 $) ; monture 14 k sans pierre de centre : 2 500 $ (SKU 140-11845) ; bague 3 pierres ovale : 9 405 $. Cinq bagues haut de gamme sont affichées sans prix, sans bouton d'achat [V]. Mention « SALE PRICE », sans prix barré relevé.
- **Décomposition du prix** : aucune (pas de métal, façon, sertissage séparés) [V].
- **Délai** : « Order today to receive it by Friday, November 27 » sur une monture en stock ; « Free 3-day shipping on most orders » [V]. Expédition « within 1 business day », pas de départ du vendredi au dimanche, livraison 2 jours au plus rapide ; tracking non communiqué « for security reasons » [V, /pages/online-terms-conditions]. **Aucun délai de fabrication** annoncé sur la page Perfect Love [V].
- **Retours** : 30 jours, remboursement moins 10 % de frais de restockage, échange sans frais ; expédition non remboursée ; RMA obligatoire. « **All sales are final on any custom made, special order items, clearance/sale items or any items that have been engraved or modified** » [V, /pages/online-terms-conditions]. Donc le sur-mesure est exclu des retours.
- **Livraison** : gratuite et assurée en États-Unis continentaux [V].
- **Garantie / certificats** : « GIA » en logo de pied de page ; fiche des diamants de couleur « GIA certified » dans le titre ; pas de garantie chiffrée sur les pages lues [V].
- **Financement** : Wells Fargo 0 % 12 mois, Affirm en ligne ; mention « Flexible installment financing provided by » sur la fiche [V].
- **Panier** : lu vide ; frais, moyens de paiement et récapitulatif **non vus** [V pour le vide].

## Confiance et service

- Fondée en 1972 (« Family owned »), graduate gemologists GIA, horlogers certifiés [V, fiche produit]. Trois points de vente (Evansville, Scottsdale x2) [V].
- Avis clients : aucun module d'avis sur les pages lues [V]. 4,9 sur 1 071 avis annoncés par l'inventaire (source extérieure) [V, ext.].
- Langue : anglais. Devise : dollar. Pas de sélecteur [V].
- **Preuves de fabrication** : promesse de photos de chaque étape « from wax to setting » et d'un album ; **les photos d'atelier réelles ne sont pas montrées sur la page** (images de catalogue : mannequin, CAO sur écran, impression 3D bleue, mains au sertissage) [V : capture pleine page]. Pas de suivi de commande en ligne [I].
- Support : téléphone, texto (« Text us »), rendez-vous, chat annoncé sur les fiches, pas de WhatsApp [V].

## Points forts à retenir pour JR Diamond

1. **Promesse de documentation du sur-mesure** : « images of every milestone », photos « from wax to setting », storybook numérique et relié (page Perfect Love). Même thème que « on voit naître son bijou », mais livré après coup et sans exemple visible. Preuve : https://brinkersjewelers.com/pages/perfect-love-custom-design.
2. **Politique de retour claire sur le sur-mesure** : exclusion explicite, tout en l'écrivant dans les conditions de vente (/pages/online-terms-conditions). À expliquer côté Israël (question de l'avocat).
3. **Livraison et retour lisibles sur chaque fiche** : trois lignes (livraison gratuite assurée, 3 jours, 30 jours de retour) répétées sous le prix. Preuve : fiche 140-11845.
4. **Estimation de livraison datée** sur la fiche (« Order today to receive it by ... »).
5. **Message honnête** « This item cannot be purchased online » sur les pièces non vendables en ligne, avec appel et chat.

## Défauts observés

- Aucun configurateur ; le sur-mesure est un parcours de rendez-vous, sans prix, sans délai, sans choix de métal ni de pierre [V].
- Prix non décomposé ; des bagues sans prix ni achat en ligne (5 sur la première page de la collection) [V].
- Pas de vue 3D, 360° ni vidéo produit ; seulement 2 photos par fiche [V].
- Aucune mention du diamant synthétique sur les pages lues [V].
- Page Perfect Love : grands espaces vides entre sections sur la capture (vidéo et formulaire chargés tard) ; le formulaire n'apparaît pas dans la liste des contrôles [V : capture].
- Pas de tracking de colis « for security reasons » [V].

## Limites de l'audit

- Ajout au panier non fait (refus de la session) : frais, délai, récapitulatif et moyens de paiement du panier ne sont pas vus.
- Panneau FILTER, vidéo, formulaire, texto, rendez-vous : non actionnés ou non ouverts (règles de lecture seule).
- Page Perfect Love : durée de fabrication non annoncée ; le prix du sur-mesure n'existe pas en ligne.
- Le délai du visuel principal (voir ci-dessous) est mesuré une fois, sur ligne partagée.

**Temps d'apparition du visuel principal** (première image produit visible, une mesure chacune) : fiche produit ordinateur 2,1 s ; iPhone 2,1 s ; liste de collection en HTML 2,6 s (ordinateur) [V, scripts a1 et a4].

## Sources

- [S1] https://brinkersjewelers.com/pages/perfect-love-custom-design (lu 15/11/2026, 62 contrôles ordinateur / 45 iPhone)
- [S2] https://brinkersjewelers.com/collections/brinkers-jewelers-engagement-rings
- [S3] https://brinkersjewelers.com/products/14kt-white-gold-three-stone-oval-diamond-engagement-ring-2-20ct-total-diamonds-size-5-5
- [S4] https://brinkersjewelers.com/products/14k-white-gold-0-33cttw-pear-diamond-3-stone-engagement-ring-semi-mounting
- [S5] https://brinkersjewelers.com/pages/online-terms-conditions ; /pages/interest-free-financing ; /pages/appointments ; /pages/services ; /pages/diamonds ; /cart (vide)
