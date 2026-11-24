# Audit : Keefirivunts (Tallinn, Estonie)

- **Site** : https://keefirivunts.ee/ (anglais : https://keefirivunts.ee/en)
- **Page de départ auditée** : https://keefirivunts.ee/en/shop/engagement-rings/solitaire/engagement-ring-grace
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1440 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le parcours jusqu'au panier est impossible : la boutique est fermée aux commandes jusqu'au 4 janvier (bouton « Let me know first » à la place de « ajouter au panier »), et `/en/cart` est interdit par robots.txt. Tout le reste est complet.
- Légende : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Modèle | 22 bagues en 4 familles : Solitaire (13), Accent (6), Unique (2), Toi et Moi (1) ; formes rondes, ovales, radiant/émeraude selon le nom | [V] /en/product-category/engagement-rings |
| 2. Diamant (carat) | 0,5, 0,8, 1, 1,5, 2 ct | [V] fiche Grace |
| 3. Métal | Or 585, or blanc 585, « Or 585, monture rhodiée » (défaut) | [V] |
| 4. Taille de doigt | liste de 14 à 24 mm par 0,5 mm (21 valeurs) ; unités mm, EU, US, UK | [V] |
| 5. Action | Commandes fermées : formulaire e-mail « Let me know first », ou « Book a consultation » | [V] |
| 6. Pierre naturelle ou sur mesure | Hors boutique : page « Natural diamonds » puis demande, le prix est fixé après le choix de la pierre | [V] /en/natural-diamonds |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 0,5 ct | radio (pill) | Coche l'option ; l'image ne change pas | 1 250 € ; mensualité 29,94 € | OK [V] |
| 0,8 ct | radio | idem | 1 650 € ; 39,20 € | OK [V] |
| 1 ct (défaut) | radio | idem | 1 950 € ; 46,15 € | OK [V] |
| 1,5 ct | radio | idem | 2 390 € ; 56,33 € | OK [V] |
| 2 ct | radio | idem | 2 890 € ; 67,90 € | OK [V] |
| Or 585 | radio | La photo principale passe à la version « or jaune » (fichier `…grace-kuld-1`) | inchangé (1 950 €) | OK [V] |
| Or blanc 585 | radio | Photo « or blanc » (`…valge-kuld-1`) | inchangé | OK [V] |
| Or 585, monture rhodiée | radio | Photo `…kuld-rod-1` (défaut) ; astérisque explicatif | inchangé | OK [V] |
| Choose a size | liste déroulante | 21 tailles ; message « la taille la plus courante est 16,5 à 17,5 mm » | inchangé | OK [V] |
| mm / EU / US / UK | radios d'unité | Change les libellés de la liste (EU 44, 46, 47… ; US 3, 3,5, 4… ; UK F½, G½, H½…) | aucun | OK [V] |
| What is a carat? | popover | Ouvre un tableau : 0,5 ct = 5 mm, 1 ct = 6,5 mm, 2 ct = 8 mm, surface relative (−41 % à +51 %) ; contient « See the stone size on a hand » | aucun | OK [V] ; le lien « sur une main » non testé (cible non relevée) |
| How to measure | popover | Explique que la taille est le diamètre intérieur en mm ; renvoie au guide complet | aucun | OK [V] |
| Model the monthly payment | bouton | Ouvre le tiroir Inbank (texte lu dans le HTML : 100 à 10 000 €, 3 à 72 mois, 10,9 %, TAEG 22,65 % pour 1 500 € sur 36 mois) ; ouverture du tiroir non constatée à l'écran | aucun | texte [V], ouverture non confirmée |
| Let me know first | submit | Non cliqué (formulaire : ne rien envoyer) | aucun | non testé : règle lecture seule |
| Book a consultation | lien | /en/booking : 3 types (atelier 45 min, téléphone 15 min, retouche de taille 15 min), nom, e-mail, téléphone, date, heure 10 h à 14 h, budget, message. Page lue sans envoi | gratuit | OK [V] |
| Send an enquiry | lien | /en/inquiry : taille, budget, métal (or 585, 750, or blanc 585), pierre (« Teemant » ou « Lab. teemant »), carat de 0,5 à 4 ct+ | aucun | OK [V] ; libellés partiellement en estonien dans la version anglaise |
| Précédent / Suivant image | boutons | Défilent dans la galerie (16 images détectées) | aucun | présents [V], défilement non compté |
| Menu (Menu), Cart | boutons | Tiroirs `menu-drawer` et `cart-drawer` présents ; panier vide affiché « Your cart is empty » | aucun | panier : page /en/cart non ouverte (interdite) |
| EN, ET, RU, FI | liens | Versions de la langue | aucun | OK [V] |
| Cookies : Accept / Decline | boutons | Boîte modale qui bloque les clics tant qu'elle reste ouverte ; « Decline » la ferme | aucun | OK [V] |
| Bannière « Next order day 4 January » | lien / ×  | Ancre vers un formulaire de rappel ; ferme avec × | aucun | OK [V] |
| Newsletter (case) | case | Case facultative, décochée par défaut [V] | aucun | non cochée |
| Carousel d'avis, « Read all reviews on Google » | liens | Mène à une recherche Google | aucun | lien noté, non ouvert |
| Éducation (« Knowledge »), « Ring size », « Financing », « Delivery to Latvia / Lithuania », « Press », « About us » | liens | Pages lues par curl : financement, tailles, atelier, fondateur | aucun | OK [V] |
| Instagram, Facebook, e-mail | liens | Externes | aucun | non ouverts |
| Chat, téléphone, WhatsApp, AR, 3D, 360°, vidéo | — | **Absents** de la fiche et de l'en-tête [V] | — | n'existent pas |

## Options disponibles
- **Carat** : 0,5 ; 0,8 ; 1 ; 1,5 ; 2 ct. Au-delà, ou pierre naturelle : demande [V].
- **Métal** : or 585 (14 k), or blanc 585, monture rhodiée. Or 750 uniquement dans le formulaire de demande. Pas de platine listé [V].
- **Origine** : synthétique par défaut (fiche Grace : certificat IGI, couleur D, pureté VVS1, taille EX-VG, sans fluorescence). Naturel : « sur demande », prix fixé après choix de la pierre [V].
- **Taille** : 14 à 24 mm de diamètre intérieur (21 valeurs) [V].
- **Gravure, monture, pavage, griffes** : aucune option en ligne [V].
- **Filtres de la liste** : aucun (4 familles seulement) [V].

## Prix, délais, retours, garanties
- **Affichage** : prix TTC « final, nothing hidden », en euros ; page liste « dès 1 250 € » ; la fiche Grace donne 1 250 à 2 890 € selon le carat. Pas de décomposition (pierre, or, façon) [V].
- **Paiement** (page « How ordering works ») : virement bancaire estonien, Visa, Mastercard, **Inbank** : « payer le mois suivant » (30 à 800 €), « en 3 fois » (75 à 2 500 €), crédit 100 à 10 000 €, 3 à 72 mois, 10,9 % [V]. Traitement MakeCommerce.
- **Délai** : 3 à 4 semaines de fabrication (fiche et CGV) [V]. Livraison Estonie 1 à 5 jours ouvrés, étranger 3 à 14 jours [V]. Fiche : « Shipping is on us », mais CGV §9 : frais « à la charge du client sauf mention » et frais affichés avant paiement. **Contradiction à signaler** [V].
- **Retours** : droit de rétractation de 14 jours **non applicable** aux bagues sur mesure, dit avant l'achat dans la FAQ et les CGV §10 [V]. Une remise à taille gratuite la première année. Réclamation sous 2 mois [V].
- **Garantie** : 2 ans contre les défauts de fabrication ; exclusions listées (usure, chocs, produits chimiques, pierres perdues) [V].
- **Certificats** : GIA ou IGI au-delà de 0,3 ct, numéro vérifiable chez le laboratoire [V]. Aucun lien direct vers le rapport sur la fiche Grace [V].

## Confiance et service
- Fondateur nommé (Rauno Oidram, orfèvre ancien tatoueur), « a named maker, not a factory » [V /en/about, /en/how-ordering-works].
- Avis : 4,9 sur 5, 48 avis Google affichés sur la fiche ; textes en estonien et en anglais, noms complets [V]. Non audités [I].
- Consultation gratuite à l'atelier (sur rendez-vous, Suur-Karja 2) ou par vidéo [V].
- Preuves de fabrication : « pour une commande spéciale, nous envoyons des photos en cours de route » ; **pas de photos ou vidéos de fabrication publiées** ni suivi de commande [V /en/how-ordering-works].
- Articles pédagogiques (carat, métaux, certificats, calendrier d'une demande en mariage) [V].
- Couverture : livraison vers l'Estonie, la Lettonie, la Lituanie, la Finlande [V].

## Points forts à retenir pour JR Diamond
1. **Prix par carat affiché sans compte**, mensualité à côté (preuve : fiche Grace, 5 prix distincts). Répond à l'écart n° 1 de JR Diamond (« Sur devis »).
2. **Phrase d'exception du sur mesure dite avant l'achat**, avec la raison (« that is the law, not our choice ») [V /en/how-ordering-works].
3. **Franchise sur le naturel** : « Lab-grown diamonds do not hold resale value… we sell both, so we have no reason to flatter either » [V /en/lab-grown-diamond-engagement-rings].
4. **Un fondateur nommé** en signature de chaque page : modèle de confiance voisin de « l'atelier en direct ».
5. **Photos par métal** : le choix or jaune / blanc change la photo (3 fichiers distincts) [V].
6. **Guide de carat avec dimensions réelles** (5 mm à 8 mm) intégré à la fiche [V].
7. **Bandeau d'attente honnête** (commandes fermées, date de réouverture, rappel par e-mail) plutôt qu'un bouton mort [V].

## Défauts observés
- Commandes fermées jusqu'au 4 janvier : aucune vente possible le 15/11 [V].
- Pas de 3D, pas de 360°, pas de vidéo, pas d'essayage virtuel : photos fixes seulement [V].
- Le carat ne change pas l'image [V].
- Contradiction livraison (« on us » ou « à la charge du client ») [V].
- Libellés mêlés dans la version anglaise du formulaire (« Teemant », « Lab. teemant », « Kuld 585 », « Üle 4000 € ») [V].
- Pas de photos ni de vidéos de fabrication ni de suivi de commande [V].
- Pas de platine, pas de gravure, pas de choix de monture en ligne [V].
- Une boîte de cookies modale bloque la page avant tout choix [V].

## Limites de l'audit
- Le panier et le tunnel de paiement n'ont pas été vus : bouton d'achat absent (commandes fermées) et `/en/cart`, `/en/checkout` interdits par robots.txt.
- Un seul modèle (Grace) testé en détail ; les 21 autres suivent le même gabarit [I].
- Mesure de chargement : image principale visible en **1,9 s** sur ordinateur et **1,6 s** en affichage iPhone (une mesure chacune, via la passerelle de la session) [V].
- Boîte « Model the monthly payment » : texte lu, ouverture à l'écran non constatée.
- Formulaires non remplis, avis et réseaux sociaux non ouverts.

## Sources
- https://keefirivunts.ee/en (accueil), …/en/shop/engagement-rings/solitaire/engagement-ring-grace, …/en/product-category/engagement-rings, …/en/lab-grown-diamond-engagement-rings, …/en/natural-diamonds, …/en/how-ordering-works, …/en/terms-and-conditions-of-sale, …/en/financing, …/en/booking, …/en/inquiry, …/en/about, https://keefirivunts.ee/robots.txt. Toutes lues le 15/11/2026 après `robots.cjs` (AUTORISÉ, sauf /en/cart INTERDIT, non ouvert).
- Captures et scripts : scratchpad `audit/eu/keefirivunts/` (hors dépôt).
