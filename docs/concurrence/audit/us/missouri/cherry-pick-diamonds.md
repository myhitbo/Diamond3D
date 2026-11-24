# Audit — Cherry Pick Diamonds (Clayton, Missouri)

- **Site** : Cherry Pick Diamonds, 230 S. Bemiston Ave, Suite 1200, Clayton, MO 63105 (à St. Louis depuis 2007 selon la fiche produit)
- **Adresse auditée** : https://cherrypickdiamonds.com/pages/engagement-rings-in-st-louis
- **Date** : 15/11/2026 (rédaction le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 (en-US) ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Il n'y a **pas de configurateur** : le site vend des bagues prêtes à porter (« Rings Pronto ») en ligne et fait le sur-mesure uniquement sur rendez-vous. Le panier n'a pas été utilisé (voir limites, dont un écart à robots.txt).
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options observées [V] |
|---|---|---|
| Page de départ | `/pages/engagement-rings-in-st-louis` | 4 collections : Solitaire (30), Three Stone (24), Hidden Halo (13), Rings by Ari (78) ; 4 bagues vedettes ; boutons « Book a bridal appointment », « Browse ready-to-wear rings » ; FAQ de 7 questions |
| Collection | `/collections/rings-pronto` | 75 bagues, filtres Availability, Price (champs de/à), More filters ; 2/3/4 produits par ligne ; tri « Featured » |
| Fiche produit | `/products/old-european-soul` (2,52 ct, 16 500 $) | Photos, vidéo, zoom, quantité, « Add to cart », description. **Aucun choix de métal, forme, carat ni taille** |
| Sur mesure | `/pages/custom-engagement-ring-design-st-louis` | Texte en 6 étapes (consultation, pierre, CAO, modèle imprimé 3D, fabrication, contrôle) ; rendez-vous seulement |
| Panier | `/cart` | Page autorisée, mais on n'a pu la voir **que vide** (« Your cart is empty ») ; ajout au panier interdit par robots.txt |

## Contrôles vérifiés

Page de départ : 79 contrôles sur ordinateur et iPhone (liste `controls.cjs`) ; fiche produit : 54 ; collection : 126.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Browse ready-to-wear rings » | lien | Mène à `/collections/rings-pronto` | – | OK |
| « Book a bridal appointment » (×5) | lien | Mène à `/pages/book-an-appointment` (page autorisée, formulaire non rempli) | – | Page non lue en détail |
| Cartes de collection (Solitaire, Three Stone, Hidden Halo, Rings by Ari) | lien | Pages de collection | – | Non ouvertes sauf Rings Pronto |
| « Explore our custom design process » | lien | Page sur mesure lue en entier | – | OK |
| « How to choose your diamond » | lien | `/pages/4-cs` | – | Non ouvert |
| FAQ : 7 questions (essayage, coût, naturel/synthétique, modifications après le modèle imprimé, délai, entretien, retour) | accordéon | Une seule réponse ouverte à la fois ; 6 réponses lues (voir plus bas) | – | OK |
| « Read our Google reviews », « Read the feature » (STL Magazine), « Meet the expert » | lien | Liens externes / page ; non ouverts | – | Non testé |
| Boutons « Located in Clayton », « Call / Text », « Footer » | accordéon | Révèlent adresse, horaires, téléphone 314.616.0033 | – | OK (contenu lu) |
| Liens de pied (Contact, Shape guide, Four C's, réparations, rachat, Returns, Shipping, Terms, réseaux) | lien | Pages ; Returns et Shipping lues | – | Partiel |
| Menu « Open menu » | bouton | Présent (menu mobile et bureau) | – | Non testé en détail |
| Collection : « Hide filters » | bouton | Présent | – | Non testé |
| Collection : « Featured » (tri), 2/3/4 par ligne | bouton | Présents ; tri non modifié | – | Non testé |
| Collection : « Availability » | accordéon | Ouvert, mais aucun choix lisible (texte « In stock » introuvable) | – | Effet non établi |
| Collection : « Price » (champs `filter.v.price.gte` / `lte`) | champ | Présents ; non remplis | – | Non testé |
| Collection : « More filters » | accordéon | Ouvert, sans options relevées | – | Effet non établi |
| Collection : « All collections » (liste : Diamond Hoop Lab Earrings, Doves, Rings by Ari, Fine Jewelry, Native American Jewelry, New & Exciting, Rings Pronto, Vintage, Bracelets) | accordéon | Lu | – | OK |
| Collection : carte avec « Sold out » (Bruges Cushion 10 900 $) | carte | Marque « SOLD OUT » | 10 900 $ | OK |
| Fiche : « Previous » / « Next » | bouton | Défilement des photos | – | OK |
| Fiche : « Zoom » | bouton | S'ouvre (capture prise) | – | OK |
| Fiche : « Expand image caption » | bouton | Légende de l'image : « 14K yellow gold with 2.52ct natural old European cut diamond » | – | OK |
| Fiche : « Play » | bouton | Une balise vidéo (`cdn/shop/videos`) est présente, en pause ; la lecture n'a pas démarré par notre clic | – | Non confirmé |
| Fiche : « − » / quantité / « + » | champ | Présent (quantité 1) ; non modifié | – | Non testé |
| Fiche : « Add to cart • $16,500 » | bouton | **Non cliqué** : l'ajout appelle `/cart/add`, interdit par robots.txt (`Disallow: /cart/`) | 16 500 $ | **Panier interdit par robots.txt** |
| Fiche : « Only 1 left in stock » | texte | Stock d'une pièce | – | OK |
| Fiche : « More payment options » | lien (`#`) | **Ce clic a ouvert une adresse de paiement Shopify `/checkouts/cn/…`** (voir limites) ; aucun contenu relevé | – | Écart à robots.txt, non répété |
| Fiche : « Description » / « Read more » | accordéon | Texte complet : diamant ancien 2,52 ct, monture 14 k jaune et platine, Krosnow Brothers | – | OK |
| Fiche : « Related products » (flèches) | carrousel | 6 produits liés avec prix | – | OK |
| « Cart » (en-tête) | lien | `/cart` : « Your cart is empty. Continue browsing » | – | OK (vide) |
| Orders / Profile (pied) | lien | Mènent à un compte Shopify | – | Non ouverts (compte) |

## Options disponibles

- **Collections** : Solitaire, Three Stone, Hidden Halo, Rings by Ari, Rings Pronto (prêt-à-porter, 75 bagues) ; bracelets, boucles d'oreilles synthétiques, bijoux anciens, bijoux amérindiens.
- **Prix relevés** [V] : de 3 500 $ à 45 000 $ sur les bagues lues (liste « related » et collection) ; ex. Old Euro Solitaire LG 3 500 $, Emerald Trio 7 200 $, Milano Bold 28 000 $, Parma Old Euro 45 000 $.
- **Sur mesure** [V] : formes, carat, couleur, pureté, taille, diamants naturels, pierres de couleur, remodelage de bijoux de famille (« heirloom redesign ») ; modèle imprimé en 3D avant la fonte. Le choix se fait en rendez-vous, pas en ligne.
- **Naturel et synthétique** [V] : les deux (FAQ) ; page dédiée « Moval Lab-Grown Rings ». Libellé : « lab-grown ».
- **Pas de** sélecteur de métal, forme, carat, taille de doigt ou gravure dans le panier de la fiche vue [V].

## Prix, délais, retours, garanties

- **Prix** [V] : un prix fixe par pièce, en USD ; « Custom rings are designed around your budget ». Aucune décomposition. Fiche vue : 16 500 $.
- **Délais** [V] : prêt-à-porter « typically ship within 1-2 weeks » ; sur mesure et semi-monture « 3-5 weeks » (politique d'expédition) ; la FAQ dit « 3–5 weeks after final design approval » et la page sur mesure « approximately 3–6 weeks ». Trois formulations légèrement différentes.
- **Retours** [V] : 15 jours après réception pour les bagues du stock ; **les bagues sur mesure et les commandes spéciales sont exclues** ; au-delà de 15 jours, échange possible pendant 90 jours ; frais de traitement de 3,5 % pour les retours supérieurs à 2 000 $ ; articles soldés non remboursables ; certificat gemmologique d'origine requis.
- **Livraison** [V] : « complimentary nationwide shipping » ; 50 États et DC, pas de boîte postale, pas d'international ; signature d'un adulte à chaque livraison.
- **Garanties** [V] : « lifetime guarantee on the structure of your piece, excluding melee diamonds and sizing » ; nettoyage et contrôle proposés.
- **Certificats** [V] : la politique de retour exige « the original gemological certificate » pour les bagues ; la fiche vue ne montre ni numéro ni laboratoire.
- **Moyens de paiement** : non vus (lien « More payment options » → paiement, non lu).

## Confiance et service

- **Avis** [V] : lien vers les avis Google ; article de presse (STL Magazine) ; nombre d'avis non relevé.
- **Preuves de fabrication** [V] : texte sur la CAO et sur le modèle imprimé en 3D à essayer en rendez-vous ; pas de photos ni vidéos d'atelier relevées sur les pages lues ; vidéo de présentation sur la fiche (lecture non confirmée) ; lien YouTube.
- **Service** [V] : rendez-vous « bridal » (samedi sur rendez-vous), showroom du lundi au vendredi 10 h-16 h 30, téléphone / SMS 314.616.0033, réparations, rachat de bijoux, guide des tailles (`/pages/ring-size-guide`, non ouvert), questionnaire du diamant (30 s, non ouvert), guides 4 C et formes.
- **Langues et devises** [V] : anglais, USD.

## Points forts à retenir pour JR Diamond

1. **Modèle imprimé en 3D à essayer avant la fonte** : la page sur mesure l'annonce en étape 4 et la FAQ permet de modifier largeur de l'anneau et hauteur de la pierre après essayage. Preuve : `/pages/custom-engagement-ring-design-st-louis`, FAQ. Même promesse que « ce que vous voyez existe », mais physique.
2. **Page sur mesure en 6 étapes simples** avec délai de 3 à 6 semaines et mention du remodelage de bijoux de famille. Preuve : même page.
3. **Pièces uniques avec stock réel** : « Only 1 left in stock », « Sold out » visibles sur les cartes. Preuve : fiche et collection.
4. **Livraison gratuite et assurée, signature obligatoire**, affichée dans la politique d'expédition. Preuve : `/policies/shipping-policy`.
5. **Exclusion du sur-mesure du droit de retour écrite clairement** (« Custom and special-order rings are excluded »). Preuve : FAQ et politique de retour. Utile à comparer avec notre question à l'avocat israélien.
6. **Garantie à vie sur la structure**, hors petits diamants et mise à taille. Preuve : FAQ.
7. **Rendez-vous comme point d'entrée** : « mention [the ring] when you book » ; bouton répété cinq fois sur la page. Preuve : liste des contrôles.

## Défauts observés

- Aucun configurateur : pas de choix de métal, forme, carat ni taille sur la fiche d'une bague ; une seule pièce par fiche.
- Prix sans explication.
- Trois durées différentes pour le sur-mesure (3-5 sem., 3-6 sem.), non reliées à une date précise.
- Filtres de collection (« Availability », « More filters ») sans option lisible dans notre navigateur ; effet non établi.
- Bouton « More payment options » : lien `#` qui mène directement à un paiement, sans fenêtre d'explication visible.
- Politique de retour contraignante : frais de 3,5 % au-dessus de 2 000 $, soldes non remboursables.
- Page d'accueil `engagement-rings-in-st-louis` écrite pour le référencement local (liste de villes), peu informative sur le prix.

## Limites de l'audit

- **Écart à robots.txt (à connaître)** : en cliquant « More payment options » sur la fiche produit, la page a navigué vers une adresse `https://cherrypickdiamonds.com/checkouts/cn/…`, que robots.txt interdit (`Disallow: /checkouts/`). Le bouton est un lien `#` qui a déclenché la création d'un paiement par le script du site. Nous n'avons relevé aucun contenu de cette page, aucun champ rempli, et nous n'avons pas répété le clic. Aucun achat, aucune donnée personnelle. Une session de paiement vide a pu être créée côté site [I].
- `Add to cart` non cliqué (`/cart/add` interdit) : frais, taxes, récapitulatif et moyens de paiement du panier non relevés. `/cart` lu vide uniquement.
- Aucun configurateur à tester : l'audit couvre une fiche produit, une collection, la FAQ et les politiques.
- Pages non ouvertes : `/pages/book-an-appointment`, `/pages/ring-size-guide`, `/pages/4-cs`, Moval lab-grown, avis Google, STL Magazine.
- Vidéo de la fiche : lecture non confirmée par notre clic ; zoom pris en capture non relue.
- Mesure du visuel principal (première image) : **≈ 0,4 à 0,5 s sur ordinateur, ≈ 0,4 à 0,8 s en iPhone** sur la fiche ; page de départ iPhone ≈ 0,55 s ; chargement complet ≈ 1,3 à 2,3 s (réseau de session cloud, non représentatif).
- Chiffres de stock et de prix relevés le jour de l'audit.

## Sources

- https://cherrypickdiamonds.com/pages/engagement-rings-in-st-louis
- https://cherrypickdiamonds.com/collections/rings-pronto
- https://cherrypickdiamonds.com/products/old-european-soul
- https://cherrypickdiamonds.com/pages/custom-engagement-ring-design-st-louis
- https://cherrypickdiamonds.com/policies/refund-policy
- https://cherrypickdiamonds.com/policies/shipping-policy
- https://cherrypickdiamonds.com/cart (vide)
- https://cherrypickdiamonds.com/robots.txt
