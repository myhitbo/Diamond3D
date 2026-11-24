# Audit : Sarah O. Jewelry (Denver, Colorado)

- **Site** : Sarah O. Jewelry, https://www.sarahojewelry.com
- **Page de départ** : https://www.sarahojewelry.com/collections/engagement-rings/featured-made-to-order (catalogue « Made-To-Order », 120 résultats) ; fiche auditée en détail : https://www.sarahojewelry.com/products/mto-nova-marquise-ring (The Nova Marquise Ring)
- **Date** : 15/11/2026 (les mesures et captures ont été faites le jour de l'audit)
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) et affichage iPhone 13 (Playwright), sans GPU, via un proxy
- **Statut** : **partiel**. Aucun blocage (robots.txt : seul `/search` est interdit ; adresses utilisées toutes AUTORISÉES). Limites : la page produit se fige par moments dans ce navigateur sans GPU, plusieurs captures ont échoué, l'essayage par caméra n'a pas pu être exécuté, le prix de la bague en 3 ct naturel n'a pas pu être relevé (voir Limites).
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Résumé

Pas de configurateur à étapes : une fiche produit « faite pour vous » avec trois choix (métal, pierre centrale avec carat et origine, taille de doigt). Le prix se recalcule à chaque choix de pierre. Visuel : 3D temps réel (iJewel3D / WebGI), photos, vidéo, essayage virtuel. Pas de retour possible sur le sur-mesure. Panier = tiroir « Your Bag », pas de page `/cart` (404).

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Catalogue (page de départ) | bouton « Made-To-Order » (filtre actif), « Reset », FILTER, SORT ; 120 résultats ; chaque carte : nom, prix « à partir de », pastilles de métal (14k jaune, blanc, rose), diaporama de 4 vues |
| 2. Fiche produit | Metal (3 pastilles) → Center Stone (liste déroulante, 10 entrées) → Size (liste de 29 tailles, 3 à 10 par quarts) → quantité → Add to cart |
| 3. Tiroir « Your Bag » | récapitulatif (métal, pierre, taille, quantité, prix), plan de protection Jewelers Mutual (aucun / 3 ans 134,99 $ / à vie 349,99 $), « Continue to checkout », « Pay over time with Shop Pay », mentions « Insured shipping » et « Dedicated customer care » |
| 4. Paiement | non ouvert (hors périmètre) |

## Contrôles vérifiés

Fiche produit (82 contrôles listés sur ordinateur par controls.cjs, 563 sur le catalogue mobile dont la plupart sont des cartes produits) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 14k Yellow / White / Rose Gold (pastilles) | bouton, `aria-pressed` | seule la pastille et le libellé « Metal » changent ; les noms de fichiers des photos de la galerie restent les mêmes ; l'adresse ne change pas (V). Le rendu 3D n'a pas pu être contrôlé visuellement (captures échouées) | aucun changement (3 399 $ pour les trois) | fonctionne (V) ; effet sur le visuel non établi |
| Center Stone : liste de 10 entrées | liste déroulante (MUI) | change la pierre ; le texte « as low as X $/mo » d'Affirm se met à jour | voir tableau des prix ci-dessous | fonctionne ; par moments la page se fige 2 à 4 s après un choix (V, répété) |
| Size : 29 tailles | liste déroulante | taille 3 sélectionnée **par défaut** sans action de l'acheteur ; le choix de 4,25 n'a pas modifié le prix | aucun | fonctionne (V) |
| Size Guide | bouton | ouvre une fenêtre « Ring Size Guide » : instructions, tableau taille → diamètre intérieur (3 = 14,1 mm … 10 = 19,8 mm, pas de 0,5), conseil « quarter size in between », mention d'un ring sizer à ajouter | aucun | fonctionne (V) |
| Decrease / Increase quantity | boutons | non actionnés (quantité 1 par défaut) | non testé | non testé (sans intérêt pour la comparaison) |
| Add to wishlist | bouton | non actionné (compte requis supposé) | | non testé (S) |
| Save to Pinterest | bouton | non actionné (ouvre un service externe) | | non testé |
| DROP A HINT | bouton | ouvre un panneau de partage : Facebook, X, Email | aucun | fonctionne (V) ; aucun envoi |
| CLICK HERE TO TRY ON | bouton | charge la bibliothèque web-vto d'iJewel3D (0.1.11), le modèle 3D et des cartes d'environnement ; aucune fenêtre visible ensuite dans ce navigateur sans caméra | aucun | partiel : l'écran de caméra n'a pas pu être vérifié |
| 3D « Drag to Rotate » | visionneuse | WebGI v0.22.0 (iJewel3D) charge `int507_nova_marquise2ct_….glb` (nom de fichier : 2 ct) ; rotation par glissement annoncée | | chargé (V) ; rotation non vérifiée par capture |
| Next slide + 4 vignettes « View product image » | diaporama | galerie : 3D, photo bague, photo de profil, photo portée, vidéo (2 vidéos en lecture automatique) | | fonctionne (V pour la liste, I pour l'ordre) |
| ADD TO CART | bouton | ouvre le tiroir « Your Bag » ; l'adresse reçoit `#!sku=210000022328` | prix de la combinaison choisie | fonctionne (V) |
| Learn more (Affirm) | lien | fenêtre d'information Affirm ; non lue | | non testé |
| Description / Additional Information / Care Instructions / Shipping & Returns | accordéons | dépliés (V) : texte lu ci-dessous | | fonctionnent |
| Financing Available, Have questions? MAKE AN APPOINTMENT | liens | `/financing`, `/appointments` (pages lues pour la première) | | fonctionnent |
| Catalogue : FILTER (Shapes, Ring Styles, Design Style, Stones, Metals, General Color, For, Price, More), SORT, Made-To-Order, Reset | boutons | le bouton Price affiche l'étendue 996 $ à 8 955 $ ; les autres volets n'ont pas montré de liste lisible lors de l'automatisation ; les valeurs de forme et de style viennent du menu du site | | partiel : filtres non appliqués un à un |
| Pied de page : Sizing Guide, Diamond Guide, Care & Cleaning, Returns, Resizing & Repairs, Financing, JM Care Plans, Ordering and Shipping, Contact, téléphone (720) 502-3229, e-mail, chat | liens | pages ouvertes : Ordering & Shipping, Returns, Custom & Heirloom, Financing (lues) | | fonctionnent (V) ; chat non ouvert (règle) |
| Inscription e-mail « SIGN UP », Log in, Search, Cart (icône) | champ, boutons | non actionnés (formulaire, compte) ; `/search` est interdit par robots.txt | | non testés |
| Bandeau annonce « Dismiss announcement » | bouton | non testé | | non testé |

### Prix selon la pierre centrale (Nova Marquise, 14k jaune, V)

| Pierre | Prix |
|---|---|
| 1 ct synthétique | 3 399 $ |
| 1 ct naturel | 8 549 $ |
| 1,5 ct synthétique | 4 188 $ |
| 1,5 ct naturel | 16 188 $ |
| 2 ct synthétique | 5 260 $ |
| 2 ct naturel | 27 760 $ |
| 2,5 ct synthétique | 6 376 $ |
| 2,5 ct naturel | 38 576 $ |
| 3 ct synthétique | 7 520 $ |
| 3 ct naturel | liste présente, prix non relevé (page figée) |

## Options disponibles (V)

- **Métal** : 14 k jaune, 14 k blanc, 14 k rose (pas de platine ni de 18 k sur cette fiche ; le catalogue affiche « 14k » partout). Un élément « alternative metals » apparaît dans le menu (I).
- **Pierre centrale** : synthétique ou naturelle, 1 / 1,5 / 2 / 2,5 / 3 ct (10 combinaisons). Forme fixée par le modèle (marquise) ; le catalogue décline les modèles par forme : ronde, ovale, émeraude, marquise, poire, coussin, radiant (noms de produits).
- **Taille** : 3 à 10 par quarts (29 valeurs).
- **Styles du catalogue** (menu) : solitaire, halo, side stone, 3 stone, bezel, pavé, toi et moi.
- **Gravure, corps de bague, griffes, pavage** : non proposés sur cette fiche (V : aucun contrôle). Gravure vendue ailleurs sur le site (« Personalized Jewelry », I).
- **Services** : plan de protection JM (US seulement), prise de rendez-vous, essayage virtuel.

## Prix, délais, retours, garanties

- **Prix** : unique, TTC non précisé (taxes calculées à la caisse, I). Affiché pour la combinaison choisie ; pas de décomposition (métal, pierre, façon) (V). Fourchette du catalogue sur-mesure : 996 $ à 8 955 $ (V, filtre Price, bagues sans la pierre variable, I).
- **Financement** : Affirm (« 4 interest-free payments or as low as 157 $/mo », 1 ct synthétique) ; Shop Pay Installments (quatre versements bimensuels à 0 % ou mensuels, plafond 30 000 $, États-Unis et Canada) (V, `/financing`).
- **Délai annoncé** : « Delivery Time: 5-7 WEEKS » pour toutes les combinaisons testées (V). Rush possible avec frais (V, `/ordering-and-shipping`). Dates limites de Noël : sur-mesure à commander avant le 18/11 (Noël) et le 25/11 (Nouvel An) (V).
- **Livraison** : UPS 2 jours ou lendemain, assurée, signature obligatoire, pas de boîte postale ; retrait au magasin de Denver (Tennyson Street) ; international hors États-Unis et Canada par demande puis facture (FedEx, droits à la charge du client). Tarif non affiché dans le tiroir ; « options at checkout » (V).
- **Retours** : « Due to the custom nature of this piece, no returns or exchanges are available after purchase » (V, fiche). La page Returns liste « Made-To-Order Rings » et « Custom Design » comme vente définitive ; standard 30 jours avec 10 % de frais de réapprovisionnement sur le stock (V). Changement ou annulation : sous 24 h, sinon frais (V).
- **Garanties** : « Limited Lifetime Warranty », nettoyage et inspection gratuits (V, fiche) ; plans payants JM Care 134,99 $ (3 ans) ou 349,99 $ (à vie) (V, tiroir). Première mise à taille : non lue (S).
- **Certificats** : naturel GIA ; synthétique IGI ou GCAL (V, fiche). Couleur D-J naturel, D-F synthétique ; pureté VS1-SI1 naturel, VVS1-VS1 synthétique (V). Seuil de carat pour le certificat : non indiqué.
- **Libellé synthétique** : « Lab Grown Diamond » (V).
- **Langues, devises** : anglais, dollar (V).

## Confiance et service

- Rendez-vous en boutique (Tennyson Street, Dairy Block) ou virtuel ; chat ; téléphone (720) 502-3229 ; e-mail (V).
- Page « Custom & Heirloom » : consultation gratuite, acompte déduit du prix final, **rendu 3D avant approbation**, délai 8 à 10 semaines, travail avec pierres de famille, consultations virtuelles hors Denver (V).
- Récompense citée : « 5280's Top of the Town Readers' Choice 2026 » (V, bas de page).
- Avis clients : aucun module d'avis visible sur la fiche (V, texte de la fiche). Outil Hotjar chargé (V, requêtes).
- Preuves de fabrication : aucune photo ni vidéo d'atelier ni suivi de commande sur la fiche ; l'étape « 3D rendering » n'existe que pour le sur-mesure (V).

## Points forts à retenir pour JR Diamond

1. **Prix recalculé en direct pour 10 combinaisons de pierre** (naturel et synthétique, 1 à 3 ct) sur une même liste : l'acheteur voit l'écart naturel / synthétique (3 399 $ contre 8 549 $ pour 1 ct). Preuve : liste lue et prix relevés ci-dessus.
2. **Visionneuse 3D et essayage virtuel sur la fiche**, sans quitter la page (iJewel3D : `bundle-0.22.0.js`, `web-vto.js`, fichier `.glb`). Le visuel principal apparaît en environ 0,45 s (voir Mesures).
3. **Mention du modèle de la main** (« shown with a 1 ct and 2 ct »), de la bague à la taille 4,5 et de l'écart d'échelle de l'essayage : honnêteté sur ce que montre l'image (V, onglet Additional Information). Dans la logique « ce que vous voyez existe ».
4. **Politique du sur-mesure écrite sur la fiche** : pas de retour, délai « 5-7 WEEKS », livraison au checkout (V). À reprendre, à valider par l'avocat israélien.
5. **Financement et plan de protection proposés dans le panier** (Affirm, Shop Pay, plans JM) (V, tiroir).
6. **Certificat par origine** (GIA naturel, IGI ou GCAL synthétique) et fourchettes de couleur/pureté affichées sur la fiche (V). Proche de la règle de l'atelier (GIA/IGI).

## Défauts observés

- **Taille de doigt présélectionnée à 3** : « ADD TO CART » sans toucher à la liste ajoute une bague en taille 3 sans avertissement (V, tiroir : « Size: 3 »). Risque d'erreur de commande.
- **Le métal ne modifie ni le prix ni la photo ni l'adresse** (V) : pas de lien de partage de la configuration ; l'effet sur la 3D n'a pas pu être vérifié.
- **Le fichier 3D se nomme « …marquise2ct… »** et l'essayage « is shown with a ~2 ct center stone » : la taille de pierre choisie ne semble pas changer le modèle montré (I, d'après le nom du fichier et le texte de la fiche).
- **Pas de décomposition du prix** (métal, pierre, main-d'oeuvre) (V).
- **`/cart` répond 404** (V) ; le panier n'existe que sous forme de tiroir.
- **Lenteur et gel de la page** après le choix de certaines pierres (2 ct naturel, 3 ct synthétique) dans ce navigateur sans GPU : réponses de 2 à 4 s, parfois dépassement de délai (V sur cette machine, cause supposée : rendu 3D logiciel, S).
- Délai de 5 à 7 semaines contre 14 jours ouvrés visés par JR Diamond (V).
- 3 ct naturel et plus : « Interested in a larger natural diamond? contact » (V).

## Mesures de temps (V, proxy, navigateur sans cache)

| Appareil | Premier visuel produit (image Shopify visible) | LCP |
|---|---|---|
| Ordinateur | 496 ms après la navigation | 456 ms |
| iPhone 13 (émulation) | 428 ms | 408 ms |

Le modèle 3D (`.glb`) se charge ensuite ; son instant d'affichage n'a pas été mesuré (aucune capture réussie).

## Limites de l'audit

- Pas de GPU : la 3D, l'essayage par caméra et la rotation n'ont pas été jugés à l'image ; plusieurs captures ont échoué à cause des gels de page.
- 3 ct naturel : prix non relevé. Filtres du catalogue non actionnés un à un. Tailles : le prix ne change pas en 4,25 (les autres tailles non essayées, I).
- Paiement non ouvert (règle) ; frais de livraison et TVA/taxes non vus. Chat, wishlist, inscription e-mail, compte non ouverts (règle). Sans consentement de caméra, l'essayage n'a pas été exécuté.
- Quantité et plan de protection non modifiés. Version mobile : liste des contrôles et mesures seulement ; le parcours de choix n'a pas été rejoué.
- Un seul modèle audité en détail (Nova Marquise) ; les autres fiches du catalogue (mêmes pastilles de métal) non ouvertes.

## Sources

- https://www.sarahojewelry.com/collections/engagement-rings/featured-made-to-order (V)
- https://www.sarahojewelry.com/products/mto-nova-marquise-ring (V)
- https://www.sarahojewelry.com/ordering-and-shipping (V)
- https://www.sarahojewelry.com/resizing-and-returns (V)
- https://www.sarahojewelry.com/financing (V)
- https://www.sarahojewelry.com/custom-and-heirloom (V)
- https://www.sarahojewelry.com/cart (404, V)
- https://www.sarahojewelry.com/robots.txt (V : seul `/search` interdit)
