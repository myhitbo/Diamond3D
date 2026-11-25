# Audit : Lyght Jewelers

- Site : Lyght Jewelers (Kenso Designs LLC dba Lyght Jewelers), https://www.lyght.com ; page de départ : https://www.lyght.com/ (le catalogue de bagues est à /collections/explore-womens-engagement-rings).
- Date : 15/11/2026 (relecture du blocage le 25/11/2026). Appareils : Chromium ordinateur 1366×900, Chromium en affichage iPhone 13.
- Statut : **partiel**. Site lisible (HTTP 200, robots.txt lu : `Allow: /`). Le bouton « Add to cart » n'a pas été cliqué : il appelle `/cart/add` ou `/cart/add.js`, interdits par robots.txt (`Disallow: /cart/`). Le panier n'a donc été vu que vide.
- Ce rapport remplace l'ancien (« bloqué », robots.txt en 403 le 24/11, sans doute dû au relais réseau).
- Légende : (V) vérifié dans le navigateur ou page lue, (I) inféré, (S) supposé.

## Parcours
Pas de configurateur (V). Le site vend des modèles maison « Style LYxxxxx » dont on choisit deux options ; la pierre centrale n'est pas incluse (V).

| Étape | Options (V) |
|---|---|
| 1. Accueil / menu | Menu : DIAMONDS (« The 4 Cs of Diamonds », « How Shape Affects Price »), ENGAGEMENT (Wedding Bands, Explore Women's Engagement Rings), JEWELRY (Men's Wedding Bands, Gifts for Him, Contemporary Rings), SERVICES (réparation, remise à taille, rhodiage, remplacement de griffes, etc.), WORLD OF LYGHT, LOG IN |
| 2. Collection de bagues de fiançailles | 24 fiches sur la page 1, pagination « 2 » ; « from » 1 090 $ à 3 990 $ sur cette page |
| 3. Fiche produit | Taille (4 à 10 par demi-taille, 13 valeurs), Matière (7 valeurs), Quantité, galerie de 10 vues, « ADD TO CART » |
| 4. Panier | Page `/cart` : « YOUR CART IS CURRENTLY EMPTY » (panier non rempli, voir ci-dessus) |
| Hors parcours | Sur-mesure : page `/pages/custom-designs`, démarrage par courriel ou téléphone |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu (hamburger) | lien `#` | ouvre le menu à 5 rubriques et sous-menus | - | OK (V, ordinateur) |
| Search | lien /search | non ouvert (adresse de recherche, prudence robots) | - | non testé : /search non contrôlé comme chemin de recherche |
| Cart | lien /cart | page panier vide | - | OK |
| Diaporama d'accueil (2 pastilles, flèches) | onglets | bannière « Make Her Yours Forever… », 2 diapositives | - | présent, non parcouru |
| 4 fiches mises en avant (accueil) | liens | mènent aux fiches LY71930 à LY71933 | « from » 1 790 à 2 190 $ | OK |
| FIND OUT WHY (accueil) | lien | mène à `/pages/the-lyght-diamond` | - | **404 « PAGE NOT FOUND »** (lien mort, V) |
| Diaporama « Bandera » (3 pastilles) | onglets | produit en vedette (pendentif topaze) | 1 275 $ | présent, non parcouru |
| Longueur de chaîne 16" / 18" + ADD TO CART (accueil) | radio, bouton | ajout direct au panier depuis l'accueil | - | non cliqué (panier interdit) |
| DESIGN YOURS TODAY | lien | `/pages/award-winning-design-renowned-beauty` | - | lien présent, page non ouverte |
| GET DIRECTIONS / Open map | liens | Google Maps, boutique 10040 W. Cheyenne Ave Ste 160 | - | non suivi (autre domaine) |
| Pied de page : Customs Designs, Shipping & Returns, Privacy, Cookie, Terms, What's My Ring Size, The Lyght Experience, Corporate Responsibility, Conflict Free Diamonds | liens | pages de contenu | - | Customs, Shipping & Returns, Ring Size, Conflict Free lues (200) ; autres non ouvertes |
| info@lyght.com ; (702) 827-1117 | mailto, tel | courriel, téléphone ; 1-800-730-0763 cité dans les politiques | - | présents, non actionnés |
| Facebook, Twitter, Instagram, YouTube | liens externes | autres domaines | - | non suivis |
| Chat (bulle en bas à droite) | bouton | ouvre un clavardage | - | présent ; conversation non ouverte (règle) |
| Abonnement e-mail (champ + SUBSCRIBE) ; fenêtre « Stay connected » | formulaire | collecte un courriel | - | non rempli (règle) |
| FILTER (mobile seulement) | lien `#` | tiroir « REFINE » : SORT BY, MATERIALS, RING STYLE, RINGS BY SHAPE | - | tiroir ouvert (V) ; groupes de filtres non dépliés, options non relevées |
| Tri : Newest, Newest Last, Best Selling, A-Z, Z-A, Price Low to High, Price High to Low | liens `?sort_by=` | non actionnés | - | non testé : `sort_by` interdit par robots.txt |
| « view all » / Explore Engagement Rings / clear | liens | `/collections/all`, retour à la collection | - | non ouverts |
| Pagination « 2 » | lien `?page=2` | page suivante | - | non ouverte (S : même gabarit) |
| Fiche : Size (select) | liste | 13 valeurs 4 à 10 par demi-taille ; change `?variant=` | aucun écart de prix entre 4 et 10 (2 390 $ aux deux, V) | OK |
| Fiche : Material (select) | liste | change `?variant=` et le prix ; **l'image principale ne change pas** à la sélection (V) | 14 k blanc/jaune/rose 1 790 $ ; 18 k blanc/jaune/rose 2 390 $ ; platine 3 390 $ | OK pour le prix ; image décorrélée |
| Fiche : − / + quantité | boutons | « + » passe la quantité à 2 ; le prix affiché reste 2 390 $ (unitaire) | inchangé | OK |
| Fiche : flèches précédent / suivant de la galerie | boutons | font défiler les vues | - | OK |
| Fiche : 10 vignettes « Product image 1 à 10 » | boutons | **cliquer une vignette n'a pas fonctionné en automate** (bouton jugé non visible, délai 30 s dépassé) | - | défaut probable à confirmer à la main (I) |
| Fiche : clic sur l'image principale | image | ouvre une visionneuse plein écran (zoom, flèches, croix) ; vues dans la couleur de métal choisie | - | OK (V) |
| Fiche : Pinterest, Fancy, Email | liens de partage | partage vers sites externes ; pas de bouton « partager » natif ni lien copiable | - | présents, non suivis |
| Fiche : « ADD TO CART » | bouton | non cliqué | - | non testé : panier interdit par robots.txt |
| Fiche : 4 bagues « vous aimerez aussi » | liens | fiches voisines | « from » 1 490 à 2 210 $ | OK |
| Page « What's My Ring Size » | formulaire | demande d'un cercle de tailles gratuit (3 à 7 jours ouvrés) | - | formulaire non rempli (règle) |

Non présents sur les pages lues (V, recherche dans le texte de la fiche) : 360°, vidéo, essayage sur la main, réalité augmentée, comparateur, liste de souhaits, financement affiché (Klarna, Affirm, Afterpay), garantie sur la fiche, prise de rendez-vous en ligne, gravure en option, guide des tailles sur la fiche (renvoi au pied de page seulement). Aucun filtre carat, couleur, pureté ni certificat : le site ne vend pas de pierre centrale en ligne dans ce parcours.

## Options disponibles
- Métal (fiche LY71933, V) : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine.
- Taille de doigt (V) : 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10. Texte : « call or note in comments at checkout if ring size is not listed ».
- Pierre centrale : non incluse (« Center Diamond: Not Included ») ; la monture accueille un ovale de 0,50 à 2,00 ct (4×6 mm à 9×7 mm) (V).
- Pierres de côté, valeurs de la fiche LY71933 : 14 à 20 diamants, 0,07 à 0,17 ct au total, couleur moyenne F/G, pureté VS (V).
- Forme de pierre : tout le catalogue lu est « oval » ou « halo » ; un filtre « Rings by shape » existe sur mobile, options non lues (V pour l'existence).
- Gravure : non proposée en option ; « Engraved jewelry items may not be returned » (V).
- Naturel ou synthétique : aucun choix affiché sur les pages lues (V).
- Sur-mesure (V) : en 5 étapes, voir plus bas.

## Prix, délais, retours, garanties
- Prix affiché dès la fiche, décomposé seulement par métal ; fiche LY71933 : 1 790 $ (14 k), 2 390 $ (18 k), 3 390 $ (platine) (V). Pas de détail façon / sertissage / pierres de côté. Page 1 de la collection : de 1 090 $ (LY71912) à 3 990 $ (LY71927) (V). La mention « REGULAR PRICE » apparaît sans prix barré (V).
- Livraison (V, `/pages/shipping-returns`) : « ALWAYS FREE SHIPPING AND RETURNS », assurée, FedEx 2Day ou USPS Priority, signature obligatoire, pas de boîte postale, pas d'envoi international, APO/FPO sous 25 000 $. Diamants libres et pièces sur mesure : FedEx Priority Overnight.
- Délai (V) : « 5-14 business days » en moyenne depuis la commande ; 3 à 5 jours ouvrés pour les articles disponibles. Sur-mesure : « 4 - 6 weeks » en général.
- Retours (V) : 15 jours depuis la réception, numéro RMA obtenu par téléphone, état d'origine, retour gratuit. **Sur-mesure, spécial, gravé : non retournable** ; diamants libres non remboursables (programme d'échange « Diamond Upgrade »). Échange, remise à taille, réparation : par téléphone, pas en ligne. Certificat non rendu : 300 $ facturés. Dommage : à signaler sous 3 jours. Remboursement : jusqu'à 2 semaines + 7 à 10 jours.
- Acompte sur pièce finie : achat à finaliser sous 90 jours, sinon acompte perdu (V).
- Sur-mesure (V, `/pages/custom-designs`) : devis gratuit, valable 2 semaines ; acompte après le devis, rendu CAO ou cire sculptée, **modèle en cire envoyé au client**, paiement complet après approbation ; « Most custom design settings and pieces begin at $2,000 » ; pas de remboursement, d'échange ni d'annulation.
- Garantie : non trouvée sur les pages lues ; assurance Jewelers Mutual mentionnée comme conseil (V).
- Certificats : « all GIA paperwork » avec les diamants libres (V) ; aucun certificat sur la fiche bague.
- Moyens de paiement (V, pied de page) : American Express, Apple Pay, Diners, Discover, Google Pay, Mastercard, Shop Pay, Visa. Le récapitulatif du panier n'a pas été vu (panier vide).
- Devise : dollar US seul ; langue : anglais seul (V).

## Confiance et service
- Boutique physique à Las Vegas, 10040 W. Cheyenne Ave, Suite 160 ; téléphone 702-827-1117 et 1-800-730-0763, courriel, chat (V). Pas de WhatsApp.
- Avis clients : aucun vu sur les pages ouvertes (V). Le site propose « See what other customers are creating » sur la page sur-mesure (galerie, non relue).
- Preuves de fabrication : modèle en cire expédié pour validation, CAO ou cire (V, texte) ; aucune photo ni vidéo d'atelier vue, pas de suivi de commande en ligne (V).
- Cercle de tailles gratuit sur demande par formulaire (V). Page « Conflict Free Diamonds » : Kimberley Process (V).
- Libellé du synthétique : aucun affichage de diamant synthétique dans le parcours audité (V).

## Points forts à retenir pour JR Diamond
1. **Prix visible dès la fiche, avec écart par métal à l'écran** : 1 790 / 2 390 / 3 390 $ selon 14 k, 18 k, platine, sans changer de page (V, `?variant=` observé). JR Diamond doit au minimum faire aussi bien.
2. **Pierres de côté décrites** : nombre (14 à 20), poids (0,07 à 0,17 ct), couleur F/G, pureté VS (V, fiche LY71933). Base d'une transparence de prix plus poussée.
3. **Retours et livraison gratuits** affichés en haut de la page de politique (V), avec retour de 15 jours, mais une exception claire pour le sur-mesure (V) : à comparer au « 14 jours ouvrés » de JR Diamond.
4. **Sur-mesure chiffré** : « begin at $2,000 », devis valable deux semaines, cire envoyée au client (V). La cire physique avant fabrication est une preuve de fabrication que JR Diamond peut remplacer par des photos et vidéos.
5. **Visionneuse plein écran** avec 10 vues par fiche, dans la couleur de métal choisie (V).

## Défauts observés
- Lien mort « FIND OUT WHY » sur l'accueil : `/pages/the-lyght-diamond` répond 404 (V).
- Changer de métal ne change pas l'image principale de la fiche ; la prise en compte du métal se fait dans la visionneuse et la galerie (V).
- Vignettes de la galerie non cliquables en automate (I : problème de rendu ou de visibilité à confirmer).
- Sections de l'accueil vides à la capture pleine page (images à chargement différé, grands blancs, V sur capture) ; le visuel principal est tardif (voir mesures).
- Pas de choix de forme de pierre, de carat, de naturel ou synthétique : « Center Diamond: Not Included » renvoie la sélection de la pierre à un autre canal (V).
- Prix par taille identique (4 à 10) et mention « call us if ring size is not listed » : pas de taille hors plage en ligne (V).
- Échanges, remises à taille et réparations « cannot be set up online » (V).
- Aucune gravure, aucun avis, aucune vidéo, aucune 3D (V).
- Mesure (V, 1 mesure chacune, connexion de la session) : accueil, premier rendu à 752 ms (ordinateur) et 588 ms (iPhone) ; plus grand élément visible (bannière) à 2 708 ms sur ordinateur et 2 544 ms en affichage iPhone ; fin du chargement 1 968 ms et 1 755 ms. Image principale de la fiche produit : non chronométrée séparément.

## Limites de l'audit
- Pas d'ajout au panier, donc ni récapitulatif, ni frais, ni délai du panier, ni moyens de paiement du panier (panier interdit par robots.txt) ; le panier n'a été vu que vide.
- Tri non essayé (`sort_by` interdit) ; filtres Materials, Ring style, Rings by shape vus seulement par leur titre sur mobile.
- Une seule fiche de bague testée (LY71933) ; autres fiches seulement lues dans la liste. Page 2 de la collection, alliances, pendentifs non ouverts.
- Pas de formulaire rempli, pas de chat ouvert, pas de téléphone ni courriel actionnés.
- Aucune lecture du flux produits (`products.json`) dans cet audit ; les prix « from » viennent des listes affichées.
- Le robots.txt cite des consignes pour agents (UCP/MCP, `agents.md`) ; nous n'avons pas utilisé ces interfaces, seulement la navigation ordinaire, et n'avons pas lu `agents.md`.

## Sources
- https://www.lyght.com/robots.txt
- https://www.lyght.com/ (ordinateur et iPhone 13)
- https://www.lyght.com/collections/explore-womens-engagement-rings (ordinateur et iPhone 13)
- https://www.lyght.com/collections/explore-womens-engagement-rings/products/oval-halo-engagement-modern-clean-ring-style-ly71933 (ordinateur et iPhone 13 ; variantes `?variant=30217351921718` à `30217352118326`)
- https://www.lyght.com/pages/shipping-returns ; /pages/custom-designs ; /pages/whats-your-ring-size ; /pages/conflict-free-diamonds ; /pages/the-lyght-diamond (404) ; /cart (vide)
- Fiche d'exploration : /home/user/Diamond3D/docs/concurrence/audit/us/nevada/INVENTAIRE.md (section « Lyght Jewelers »)
