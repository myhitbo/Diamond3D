# Audit : USA Jewels & Timepieces, constructeur « Design Your Own » (Ketchikan, Alaska ; siège en Floride)

| | |
|---|---|
| Site | USA Jewels & Timepieces : https://www.usajewels.com/ (boutique à Ketchikan, atelier et siège à Deerfield Beach, Floride) |
| Page de départ | https://www.usajewels.com/design-your-own-diamond-ring |
| Date | 15/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour le parcours catégorie → modèle → fiche → panier ; **partiel** pour les filtres de catégorie (Prix, Métal) et pour les modèles à diamant certifié (section masquée sur le modèle testé) |
| robots.txt | `User-agent: *` : `Allow: /` ; interdits notamment `/checkout/`, `/order-status`, `/help/dyo-categories.php`, `/help/dyo-products.php`, `/help/getmodeloptions.php`. Aucun de ces chemins appelé par moi ; les scripts du site en appellent eux-mêmes certains pour afficher la page (non contrôlable). ClaudeBot : `Allow: /`. Le bouton « Proceed to Checkout » (`/checkout/`) n'a pas été ouvert. |

Marques : **V** vérifié (page lue ou contrôle actionné, adresse indiquée) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page de départ. Prix en dollars américains, relevés le 15/11/2026 (période « Black Friday : jusqu'à 40 % »).

## Parcours

Trois étapes affichées en haut de page : « 1 Choose Style › 2 Customize › 3 View Product » (V).

| Étape | Adresse | Options |
|---|---|---|
| 0. Catégories | `/design-your-own-diamond-ring` | 7 catégories de bagues : alliances et anniversaire, trois pierres, ensembles assortis, solitaires, bagues de fiançailles, bagues pour hommes, bagues fantaisie ; 6 autres produits (boucles, pendentifs, bracelets, chaînes, bijoux or, alliances d'éternité) (V) |
| 1. Choisir le style | `?category=3053` (solitaires) | 22 modèles « Starting at » (de 363 $ à 1 862 $ au moins) ; filtres Prix et Métal (V) |
| 2. Personnaliser | `?category=3053&model=RAAR-MS252-A` | 5 métaux, 8 qualités de diamant (6 naturelles, 2 synthétiques), 6 poids de 0,25 à 1,5 ct ; prix mis à jour en direct (V) |
| 3. Fiche produit | `/rings/…/drngxxxpvsh150ms252-a?cat=3053&metal=Platinum` | métal, taille de doigt (4 à 9,5), poids, qualité, ajout au panier (V) |
| 4. Panier | `/shopping-cart/` | récapitulatif, livraison gratuite, code promo, notes, bouton « Proceed to Checkout » (non ouvert) (V) |

## Contrôles vérifiés

Relevé `controls.cjs` de la page de départ : 65 contrôles sur ordinateur, 57 en affichage iPhone (menus du site compris). Page de modèle : 53 contrôles visibles sur iPhone, dont les tuiles d'options (cliquables mais sans rôle ARIA, donc listées à la main). Ce relevé couvre la page de départ, une catégorie, un modèle (RAAR-MS252-A), sa fiche et son panier. Les 21 autres modèles de la catégorie, les 6 autres catégories et les autres produits n'ont pas été parcourus (limite).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Carte catégorie « Browse Styles → » (7) | liens | ouvrent `?category=<n>` | — | fonctionne (V, `?category=3053` ouvert) |
| « Start Designing → » | lien d'ancre | descend vers la grille des catégories | — | non actionné (I) |
| Carte produit d'une catégorie (22 en solitaires) | liens | ouvre `?category=3053&model=<référence>` | « Starting at » : 363 $ à 1 862 $ | fonctionne (V) |
| Filtre « Price » | bouton + double curseur | panneau « Price : $ 381 – $ 2045 », deux champs bas et haut | — | panneau s'ouvre (V) ; saisie de 1 000 dans le maximum : le nombre de cartes visibles est resté 22, effet non démontré |
| Filtre « Metal » | bouton + cases | panneau : 14K Gold (22), 18K Gold (21), Platinum (20), 10K Gold (4) | — | panneau s'ouvre (V) ; le cochage n'a pas pu être actionné par mon script (délai dépassé), effet non testé |
| « ← All Design Your Own Diamond Ring Categories » | lien | retour aux catégories | — | présent (V) |
| Bouton « Share » (copier le lien) | bouton | copie l'adresse **sans le modèle** (`…/design-your-own-diamond-ring`, `window.location.pathname` sans la requête) | — | fonctionne mais le lien copié ne reprend ni le modèle ni la configuration (V, code de la page : `u=origin+pathname`) |
| Partager Facebook / X / e-mail | liens | ouvrent les fenêtres de partage avec la même adresse tronquée | — | non ouverts (liens externes) ; adresses relevées (V) |
| Vignettes « Metal » (5) : 14K blanc, 18K jaune, platine, 18K blanc, 14K jaune | tuiles | l'étiquette et la ligne « Your Selection » changent ; **la galerie d'images ne change pas** (première image reste `MS252-AYellow.jpg`) | 14K blanc 707 $, 18K jaune 852 $, platine 735 $, 18K blanc 852 $, 14K jaune 707 $ (qualité Prestige Lab, 0,25 ct) | fonctionne ; 14 K jaune et blanc au même prix (V) |
| Texte « About This Metal » + « Learn more about jewelry metals → » | texte, lien | description selon le métal ; lien vers `/education/about-gold` | — | présent (V) |
| Vignettes « Diamond Quality » (8) : Collectors, Premier, Prestige, Fine, Popular, Regular (naturels) ; Collectors Lab, Prestige Lab (synthétiques) | tuiles | changent la ligne de sélection et la note « About This Quality » | à 0,25 ct, 14K jaune : 626 / 589 / 533 / 477 / 462 / 413 $ (naturels) ; 729 / 707 $ (synthétiques) | fonctionne ; Collectors Lab (729 $) est plus cher que Prestige Lab (707 $) et que les six qualités naturelles à 0,25 ct (V) : à ce poids, le synthétique n'est pas moins cher que le naturel (inféré : prix de la monture et du choix de qualité, non expliqué sur la page) |
| Vignettes « Carat Weight » (6) : 0,25 / 0,5 / 0,75 / 1 / 1,25 / 1,5 | tuiles | changent le poids affiché (« 1 × 0.50 ct », etc.) | Prestige Lab, 14K jaune : 707 / 910 / 1 104 / 1 319 / 1 527 / 1 700 $ | fonctionne ; le premier clic sur 1,5 n'a pas été pris en compte (étiquette restée à 1,25), le second, après défilement, a fonctionné (V, intermittent) |
| Carte « Your Selection » | résumé | rappelle métal, qualité, poids et prix | prix recopié | fonctionne (V) |
| « View Your Ring » (2 boutons, haut et bas) | bouton | ouvre la fiche produit de la combinaison (≈ 4,3 s mesurées jusqu'au chargement) | prix identique à la sélection (10 425 $ pour platine, Premier, 1,5 ct) | fonctionne (V) |
| Vidéos du modèle (2) | vidéos en boucle | lecture automatique muette avec contrôles, `MS252-A.mp4` et `MS252-A_Alt.mp4` | — | présentes (V) |
| Vignettes photo (4) | images | ouvrent une galerie plein écran (lightgallery) | — | présentes ; non ouvertes (I) |
| Bouton « Open chat » | bouton flottant | ouvre une conversation | — | non ouvert (règle : pas de chat) |
| Fiche : tuiles « Metal » (5) | liens `#` | changent métal et prix sur la fiche | — | présentes (V) ; effet sur le prix non mesuré sur la fiche |
| Fiche : « Ring Size » 4 à 9,5 (12 tailles) | liens `#` | choix de la taille (6 par défaut) | aucun | présent (V) ; la taille n'apparaît pas dans le panier (V) |
| « Not sure your ring size? » | lien | `/education/ring-size-guide` | — | présent (V) |
| Fiche : « Total Carat Weight » (6), « Gem Quality » (8) | liens `#` | permettent de changer sans repasser par le configurateur | — | présents (V) |
| « Add to Cart » (bas et barre fixe) | bouton | envoie un POST puis redirige (302) vers `/shopping-cart/` | ajoute 10 425 $ | fonctionne (V) |
| « Compare All Options » | lien | `/sku-index?model=RAAR-MS252-A` | — | présent ; non ouvert (I) |
| « Want a different style? Design Your Own Diamond Ring » | lien | retour à la catégorie | — | présent (V) |
| Onglets de la fiche : Overview, Information, Stones, Stone Map, Appraisal, IGI Appraisal, Shipping Details, Reviews | ancres | défilement dans la page | — | présents (V) |
| « Email a Friend », « Ask a Question », « Write a Review » | boutons | ouvrent des formulaires | — | non ouverts (règle : aucun formulaire) |
| `wishlistBtn` | bouton | liste de souhaits | — | présent ; non actionné (compte probable, S) |
| Panier : « Promotion Code », « Shipping Options », notes spéciales (500 caractères) | champs | — | — | présents ; non remplis (règle) (V) |
| Panier : « Proceed to Checkout » | lien `/checkout/` | page interdite par robots.txt | — | **non ouvert** (V) |
| Panier : « >> Continue Shopping » | lien | retour à l'accueil | — | présent (V) |
| Pied de page : Contact, FAQ, Returns, Shipping, Upgrade Policy, Order Status, About, Why Choose Us, Reviews, Blog | liens | pages d'aide | — | Returns, Shipping, Upgrade lues (V) ; Order Status interdit, non ouvert |
| Téléphone (877) 872-9909, e-mail contact@usajewels.com | `tel:`, `mailto:` | — | — | présents (V) |
| Vue 3D, 360°, essayage en réalité augmentée, comparateur de pierres, gravure, forme de pierre | — | **absents** du parcours testé | — | non trouvés (V) |

Remarque : le lien « Design Your Own » du menu mène à `/design-your-own` ; je ne l'ai pas rouvert (l'inventaire le disait en erreur 404 sur une autre page).

## Options disponibles

- **Métaux** (modèle testé) : 14K blanc, 14K jaune, 18K blanc, 18K jaune, platine. Le texte de la catégorie annonce aussi le 10 K (« 4 modèles » au filtre) (V).
- **Origine / qualité** : 6 naturelles (Collectors VS F-G ; Premier VS G-H ; Prestige SI G-H ; Fine SI I-J ; Popular I1 H-I ; Regular I2 I-J) et 2 synthétiques (« Lab-created » : Collectors Lab VS ; Prestige Lab SI) (V).
- **Poids** : 0,25 / 0,5 / 0,75 / 1 / 1,25 / 1,5 ct, une pierre centrale (V).
- **Taille de doigt** (fiche) : 4 à 9,5 par demi-taille ; 6 par défaut (V). Les tailles plus grandes ne sont pas proposées sur ce modèle.
- **Forme de pierre** : fixée par le modèle ; pas de choix (le modèle testé est rond) (V). Un bloc « Diamond Shape » et un bloc « Center Diamond / Certified Diamond Upgrade » existent dans la page mais sont masqués sur ce modèle (V, DOM) ; je n'ai pas trouvé quels modèles les activent.
- **Gravure, griffes, pavage, corps de bague** : aucun choix (V).
- **Catégories** : 7 types de bagues plus 6 autres familles de bijoux (V).

## Prix, délais, retours, garanties

- **Affichage** : « Starting at » en liste ; prix unique en configuration ; sur la fiche, prix barré **20 824 $ « Save 50 % »** puis 10 425 $ (1,5 ct platine Premier), plus « Wire transfer price : 10 269 $ (save 1,5 %) » (V). Le prix de base est donc un « prix catalogue » gonflé : l'écart de 50 % est présenté comme une remise (I, pratique à noter).
- **Décomposition** : aucune ligne diamant / monture / main-d'œuvre sur le parcours testé (V). La FAQ de l'inventaire mentionnait une somme diamant + monture ; non retrouvée sur cette page.
- **Délai** : « Estimated Shipping : 5 to 7 business days » sur la fiche ; la page d'expédition annonce 2 à 3 jours ouvrés d'expédition pour la plupart des articles (V, deux chiffres différents). L'accroche de la catégorie dit « made to order in Deerfield Beach » (V).
- **Livraison** : gratuite, assurée, US Priority Mail (2 à 3 jours) ; FedEx Overnight 25 $ ; signature obligatoire ; livraison en boîte postale possible pour Priority (V, `/help/shipping-policy`). Le panier affiche « US & INT. SHIPPING FREE » et « TAXES/DUTIES ESTIMATE T.B.D » (V).
- **Retours** : 30 jours après livraison, remboursement moins des frais de port et d'assurance non remboursables (15 $, 20 $ au-dessus de 1 000 $, 30 $ au-dessus de 2 500 $, au plus 10 % ; 25 $ pour FedEx) ; renvoi en courrier recommandé assuré, pas FedEx ni UPS ; rapport d'analyse à renvoyer (V, `/help/return-policy`). **Aucune exception pour le sur-mesure n'est mentionnée** sur cette page (V) ; la fiche indique « No restocking fees ».
- **Garanties** : « Lifetime Warranty Options », garantie à vie contre les défauts de fabrication (texte de la fiche), mise à niveau à vie du diamant avec crédit de 100 % si l'achat suivant est de valeur égale ou supérieure ; changement de monture avec frais « nominal » (V, `/help/upgrade-policy`).
- **Certificats** : la fiche indique « Inspected by a GIA Certified Gemologist » et une section « IGI Appraisal » (évaluation d'assurance, 5 jours ouvrés de plus) ; la pierre n'est pas vendue avec un certificat GIA ou IGI dans le parcours testé (rapport d'évaluation inclus, V).
- **Libellé du synthétique** : « Lab-created », étiquette verte « Lab », « ethically produced » ; qualités à part des naturelles ; modèle « Available in both Natural and Lab Created Diamonds » (V).
- **Devises, langues** : dollars, anglais uniquement (V).

## Confiance et service

- Bandeau de réassurance : livraison assurée gratuite, 30 jours, paiement sécurisé, diamants certifiés, depuis 1999, « 222+ Google 5-star reviews » (V). Fiche : « 5.0 ★ on Google (222 Reviews) » mais « **No Reviews Yet** » pour l'article lui-même (V).
- Chat (bouton flottant), téléphone gratuit, e-mail ; pas de WhatsApp, pas de rendez-vous en ligne trouvé, pas d'essayage à domicile (V).
- Moyens de paiement affichés au panier : Apple Pay, une autre icône « Pay », Authorize.Net (sceau vérifié), **virement bancaire** avec « Save $156 » à 10 425 $ (V). Pas de financement affiché sur le parcours.
- Preuves de fabrication : phrase « handcrafted in Deerfield Beach, Florida », deux vidéos de la bague terminée (rendu / produit), aucune photo ou vidéo d'atelier, aucun suivi d'étapes de fabrication ; suivi de livraison par e-mail et page « Order Status » (non ouverte) (V).

## Points forts à retenir pour JR Diamond

1. **Prix en direct, affiché à chaque clic** : passer de 0,25 à 1,25 ct fait varier le prix de 707 à 1 527 $, la sélection est rappelée dans un bloc « Your Selection » avec le prix (V, mesures ci-dessus). Écart avec JR Diamond : « Sur devis ».
2. **Séparation claire naturel / synthétique** dans les mêmes tuiles, avec groupes « Natural Diamonds » et « Lab Created Diamonds », descriptif de clarté et couleur sur chaque tuile (V).
3. **Étapes numérotées « Choose Style › Customize › View Product »** : le parcours est lisible en trois temps (V).
4. **Politique de retour de 30 jours détaillée en quatre étapes**, frais chiffrés, délai de remboursement (2 à 4 jours ouvrés) (V, `/help/return-policy`).
5. **Mise à niveau à vie avec crédit de 100 %** : argument de confiance pour un achat de pierre (V, `/help/upgrade-policy`).
6. **Virement avec remise de 1,5 %** annoncée au panier (V, `/shopping-cart/`).
7. **Chargement rapide du visuel** : voir « Limites » pour les mesures (V).

## Défauts observés

- **L'image ne change pas avec le métal ni la qualité** : la galerie reste sur le même cliché (jaune) quel que soit le métal choisi (V, `walk.cjs`). Le client ne voit pas la couleur choisie, contrairement à la promesse « ce que vous voyez existe ».
- **Pas de 3D, pas de 360°, pas de forme de pierre ni de gravure** dans le parcours testé (V).
- **Prix barré gonflé** (« Save 50 % » sur 20 824 $) (V).
- **Incohérences de texte** : couleur « G-H » à la sélection mais « Diamond Color = H,I » au panier (V) ; « Premeir » au panier (V) ; le résumé « Platinum | VS … G,H » de la fiche contredit le texte « SI1-SI2 » de la description (V) ; délai de 5 à 7 jours (fiche) contre 2 à 3 jours (politique) (V).
- **Taille de doigt absente du panier** (V) : le récapitulatif ne rappelle ni la taille ni le métal (« Platinum » absent, seule la qualité apparaît) (V).
- **Liens « Recently viewed / You may also like » du panier** pointent vers `/earrings/…` pour des bagues (V).
- **Bouton « Share » copie une adresse sans le modèle** (V, code).
- **Premier clic sur 1,5 ct sans effet** dans un test sur deux (V).
- **Adresse `/cart`** répond « 403 Forbidden » aux navigateurs automatisés (V) ; le vrai panier est `/shopping-cart/` (V). Je n'ai pas réessayé.
- La fiche affiche « Appraisal / IGI Appraisal » avec le libellé « About these Earrings » (V, texte copié d'un autre produit).

## Limites de l'audit

- Un seul modèle (RAAR-MS252-A, rond) de 22 a été configuré ; les formes (ovale, coussin, princesse, émeraude, poire), les trois pierres, les ensembles assortis et l'éternité n'ont pas été parcourus. La section « Certified Diamond Upgrade » reste masquée sur ce modèle.
- Filtres Prix et Métal : panneaux relevés, effet de filtrage non démontré. Galerie plein écran, « Compare All Options », partage, liste de souhaits, chat, formulaires : non actionnés ou non ouverts.
- Temps d'apparition du visuel principal (première image de plus de 300 px) : ordinateur 917 ms à 1 089 ms sur la page du modèle, 2 512 ms à 2 567 ms sur la fiche ; iPhone 1 025 ms à 1 922 ms sur la page du modèle, 5 466 ms sur la fiche ; une mesure par cas à deux essais, connexion de la machine d'audit, sans réseau mobile émulé (V).
- Le panier a été rempli une fois avec un article ; il n'a pas été vidé (cookie de session propre à ce navigateur de test). Aucun formulaire, compte ni paiement.
- L'outil de lecture Firecrawl était épuisé en crédits ; les pages de règles ont été lues avec Playwright.

## Sources

- https://www.usajewels.com/design-your-own-diamond-ring (V)
- https://www.usajewels.com/design-your-own-diamond-ring?category=3053 (V)
- https://www.usajewels.com/design-your-own-diamond-ring?category=3053&model=RAAR-MS252-A (V)
- https://www.usajewels.com/rings/four-prong-timeless-round-solitaire-diamond-ring-/raar-ms252-a/drngxxxpvsh150ms252-a?cat=3053&metal=Platinum (V)
- https://www.usajewels.com/shopping-cart/ (V)
- https://www.usajewels.com/help/return-policy , https://www.usajewels.com/help/shipping-policy , https://www.usajewels.com/help/upgrade-policy (V)
- https://www.usajewels.com/robots.txt (V)
- Inventaire : `docs/concurrence/audit/us/alaska/INVENTAIRE.md`
