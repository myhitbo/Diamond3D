# Audit Barron (Barron House, Tbilissi, Géorgie)

- **Site** : https://barron.ge/ (site sur mesure de l'agence Smartweb). Page de départ auditée : https://barron.ge/en/product/66-engagement-rings (le menu « Engagement rings » ne mène à aucune liste, voir « Défauts »)
- **Date** : 15/11/2026 (contrôles réalisés en session le 24/11/2026)
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (Chromium émulé)
- **Statut** : **complet** pour ce qui est offert (fiche, options, panier avec paiement non actionné) ; le site n'a pas de configurateur.
- Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.
- robots.txt : `User-agent: *` / `Disallow:` (rien d'interdit) [V].

## Parcours

| Étape | Options |
|---|---|
| 1. Menu « Engagement & Bridal » | Bridal jewellery, Wedding bands, Engagement rings, Unique solitaires, Bridal guides [V : méga-menu] |
| 2. Liste « Rings » (/en/category/jewellery/rings) | 13 modèles distincts, prix affichés ; **aucun filtre ni tri** [V] |
| 3. Fiche bague | Liste taille (7 options), liste métal (2), « Add to cart », « Book an appointment », favoris, galerie de 2 images, « Show more » |
| 4. Panier | Quantité − / +, suppression, vider le panier, adresse, bouton Visa/Mastercard/Amex, bouton SOLO (−10 %) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Barre de recherche | champ | « diamond » → `/en/products?search=diamond` : 60 produits | — | OK [V] |
| Menu ENGAGEMENT & BRIDAL (survol) | menu | Liste les 5 sous-pages ci-dessus et les catégories Jewellery, Exclusive jewellery (diamants blancs, jaunes, couleur ; émeraudes ; saphirs ; aigues-marines) | — | OK [V] |
| ENGAGEMENT RINGS → « SHOP NOW » | lien | Mène à `/en/category/engagement-rings/products` : titre « ENGAGEMENT RINGS » et **page vide**, 0 produit | — | **Cassé** [V] |
| Liste « Rings » | page | 13 produits dont 66, 71, 80, 81 (bagues de fiançailles) ; aucun filtre | de 1 890 à 23 900 ₾ [V : « produits similaires » de la fiche 66] | OK [V] |
| Liste SIZE (nice-select) | liste | 7 valeurs : 15, 15,5, 16, 16,5, 17, 17,5, 18 « მმ » (mm) ; sélection OK | **aucun effet** | OK [V : 3 valeurs essayées] |
| Liste METAL | liste | WHITE GOLD, YELLOW GOLD ; sélection OK | **aucun effet** sur le prix ; la photo principale ne change pas (image `Product/410331686245400.jpg` identique pour les 2 métaux) | OK mais sans effet [V] |
| ADD TO CART sans choix | bouton | Rien n'est ajouté (compteur reste 0), bordure rouge sur la liste Size ; aucun texte d'erreur | — | OK, validation par bordure seulement [V] |
| ADD TO CART avec taille et métal | bouton | Appel `POST /ajax-add-to-cart`, compteur 1, **page inchangée** (pas de fenêtre de confirmation) | 2 499 ₾ | OK [V] |
| Show more / Show less | lien | Déplie la description : « 0,25 carat diamond (E, VS1) » | — | OK [V] |
| BOOK AN APPOINTMENT | bouton | Ouvre un formulaire : date, heure (10:00 à 19:00), « Choose interest » (4 sujets en géorgien : bijoux exclusifs, commande de design exclusive, bijoux de mariage, autres services), prénom, nom, e-mail, 2 cases (conditions, confidentialité), « Request meeting » | — | Ouvert, **non envoyé** [V] |
| Favoris (cœur) | bouton | Non actionné | — | Non testé |
| Galerie (2 images : bague jaune, vue de profil) | miniatures | Non cliquées (pas de zoom, de 360° ni de vidéo visibles) | — | Non testé [V : 0 vidéo dans le DOM] |
| Sélecteur de langue (globe) | lien | `/en/…` ↔ `/ka/…` ; la fiche géorgienne s'affiche | — | OK [V] |
| Panier : − / + | boutons | Présents | — | Non actionnés |
| Panier : × (retirer), « Clear the cart » (Yes/No) | boutons | Présents | — | Non actionnés |
| Panier : champ Address | champ | « Enter your address » | — | Non rempli |
| Panier : « Visa/Mastercard/Amex » | bouton | Passerelle de paiement | — | **Non actionné** (paiement) |
| Panier : « SOLO » (« Pay with SOLO and get 10 % discount ») | bouton | Paiement via l'appli SOLO avec remise de 10 % | — | **Non actionné** (paiement) |
| Pied de page : Privacy, Terms, Sales policy, About, Contact, Size guide | liens | Pages lues (voir plus bas) | — | OK [V] |
| Size guide | page | Tableaux boucles d'oreilles (US/EU/mm), bracelets (XXS à L, 15,5 à 19,5 cm) ; table des bagues à vérifier [I] | — | OK [V : extrait] |
| Facebook, YouTube, Instagram | liens | Présents | — | Non suivis |

## Options disponibles

- **Taille** : 15, 15,5, 16, 16,5, 17, 17,5, 18 mm (diamètre) [V].
- **Métal** : or blanc, or jaune ; le titre (14 ou 18 k) n'est pas indiqué sur la fiche lue [V]. Pas de platine, ni d'or rose sur cette fiche [V].
- **Pierre** : diamant rond naturel 0,25 ct E VS1, fixé par modèle [V]. Pas de forme, de carat, de couleur ni de pureté au choix ; pas de diamant synthétique [V].
- **Gravure, pavage, griffes** : aucune option [V]. **Vues** : 2 photos fixes [V].
- **Services** : rendez-vous en ligne, recherche, favoris, compte, langue EN/KA, guide des tailles [V].

## Prix, délais, retours, garanties

- **Prix** : un seul prix par fiche en lari, **2 499 ₾** pour le modèle 66 ; pas de décomposition ni de TVA indiquée [V]. Prix de la liste des bagues : de 1 890 à 23 900 ₾ [V : produits similaires].
- **Délai** : aucun délai de fabrication ni de livraison annoncé [V : fiche, panier et politique lus].
- **Livraison** : frais et mode non affichés dans le panier ; le champ « Address » s'y trouve ; la politique de vente parle d'un contrôle de l'état du colis « en présence du coursier » [V].
- **Retours** [V : /en/sales-policy] : remplacement seulement si **défaut de fabrication constaté dans les 5 jours calendaires** après la vente, par un article de valeur égale ou supérieure (différence à la charge du client) ; accessoires et preuve d'achat à joindre. Aucune exception « sur mesure », aucun droit de rétractation indiqué.
- **Garantie** [V] : « garantie officielle du fournisseur » de **3 à 8 mois** ; réparation en centre de service sous 45 jours ouvrés ; le remplacement du produit n'est pas inclus ; carte de garantie à présenter. Texte rédigé comme pour de l'électronique (« device ») : formulation générique [I].
- **Certificats** : couleur et pureté annoncées dans le texte (E, VS1) ; aucun certificat GIA/IGI cité [V].
- **Moyens de paiement** : carte Visa/Mastercard/Amex, SOLO (−10 %) [V : panier].
- **Devise** : lari, symbole ₾ [V].

## Confiance et service

- Contact : téléphone 555931139, e-mails `info@barron.ge` et `contact@barron.ge`, adresse « Tbilisi, Georgia » ; la page « Contact » donne le même [V].
- Prise de rendez-vous en ligne (date et heure) [V].
- Avis clients, certificats, preuves de fabrication, suivi de commande : **aucun** [V : pages lues].
- Pages « About us » : texte générique sur la maison, sans atelier ni fabrication [V].

## Points forts à retenir pour JR Diamond

1. **Rendez-vous en ligne à côté du panier** (date, heure, motif) : donne un second chemin si l'on veut voir avant d'acheter. Preuve : bouton BOOK AN APPOINTMENT sur la fiche, formulaire ouvert [V].
2. **Remise de 10 % pour un moyen de paiement local (SOLO)** affichée dans le panier : incitation directe au paiement par un portefeuille géorgien. Preuve : texte « Pay with SOLO and get 10 % discount » [V].
3. **Carat, couleur et pureté dans la description de la bague** (0,25 ct, E, VS1) : utile pour la confiance malgré l'absence de certificat. Preuve : texte déplié par « Show more » [V].
4. **Panier simple en une page** : quantité, total, adresse et deux boutons de paiement sans compte. Preuve : page /en/cart avec un article [V].
5. **Recherche interne fonctionnelle** (60 résultats pour « diamond »). Preuve : `/en/products?search=diamond` [V].

## Défauts observés

- **Menu « Engagement rings » → page vide** : « SHOP NOW » mène à `/en/category/engagement-rings/products` sans produit [V].
- **Les listes taille et métal n'ont aucun effet** sur le prix ni sur l'image ; la photo reste en or jaune même si l'on choisit l'or blanc [V].
- **Le panier n'affiche ni la taille ni le métal choisis** : seulement le nom « ნიშნობის ბეჭედი » (« bague de fiançailles »), le prix et la quantité [V].
- **Pas de message d'erreur** si on ajoute sans choisir : seule une bordure rouge ; pas de confirmation après l'ajout [V].
- **Frais de livraison et délai absents** du panier [V].
- **Politique de garantie et de retour écrite comme celle d'un appareil** : « 3 à 8 mois », sans exception sur mesure ni droit d'annulation [V].
- **Liste « Rings » sans filtre ni tri** ; 2 images seulement par fiche ; aucune vue sur la main ou en vidéo [V].
- Libellé de page « Book an apointment » (faute) [V].

## Limites de l'audit

- Une seule fiche (modèle 66) ouverte à fond ; les 12 autres bagues de la liste ne sont lues qu'en prix et en nom.
- Boutons de paiement (Visa/Mastercard/Amex, SOLO) et champ « Address » non actionnés, formulaire de rendez-vous non envoyé, favoris et compte non testés ; frais de livraison éventuels inconnus [V].
- Un article a été ajouté puis lu dans le panier ; le panier n'a pas été vidé par un clic (session du navigateur jetée).
- Mesure du visuel principal : première image de produit visible en **3 239 ms** (ordinateur) et **2 191 ms** (iPhone émulé) depuis l'envoi de la requête, un seul essai chacun [V].
- Contrôles listés par `controls.cjs` sur la fiche : 44 sur ordinateur, 37 en iPhone ; nombre de contrôles sur la page de liste : 23 [V].
- Affichage iPhone : défilement horizontal, taille des cibles et lisibilité des listes non contrôlés.
- Politique de confidentialité et conditions d'utilisation lues seulement en partie.

## Sources

- https://barron.ge/en/product/66-engagement-rings (ordinateur et iPhone, 24/11/2026)
- https://barron.ge/en/category/jewellery/rings , https://barron.ge/en/category/engagement-bridal/engagement-rings , https://barron.ge/en/category/engagement-rings/products
- https://barron.ge/en/products?search=diamond , https://barron.ge/en/cart
- https://barron.ge/en/sales-policy , https://barron.ge/en/size-guide , https://barron.ge/en/about , https://barron.ge/en/contact , https://barron.ge/en/terms
- https://barron.ge/ka/product/66-engagement-rings , https://barron.ge/robots.txt
