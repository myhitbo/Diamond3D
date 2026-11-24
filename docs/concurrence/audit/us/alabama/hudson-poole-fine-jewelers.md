# Audit : Hudson-Poole Fine Jewelers, « Custom Ring Builder » (Tuscaloosa, Alabama)

| | |
|---|---|
| Site | Hudson-Poole Fine Jewelers, 1111 Greensboro Ave, Tuscaloosa (AL) : https://www.hudsonpoole.com/ |
| Page de départ | https://www.hudsonpoole.com/page/custom-ring-builder.html |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : assistant d'entrée, application 3D et parcours classique audités jusqu'au panier ; le passage assistant vers 3D et plusieurs boutons de service sont coupés par `robots.txt` (voir Limites) |
| Plateforme | Assistant « JewelerOS » (jeweleros.com) + application 3D « StoneAlgo » (jeweleros-custom.netlify.app) + boutique Bluestar Applications (catalogue classique). Même éditeur que Ware Jewelers. Vérifié (scripts réseau). |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en USD, « MSRP, setting only » affiché par le site.

## Parcours

| Étape | Options (toutes relevées) |
|---|---|
| 0. Page `/page/custom-ring-builder.html` | Assistant à 4 étapes, visible en 1,8 s. Bouton « Skip ». Aucune 3D sur cette page. [V] |
| 1. « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ». Bouton Back/Skip. [V] |
| 2. « Choose your center stone » | Bascule Natural / Lab Grown (couleur des cartes change) ; 10 cartes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant + « Decide later ». [V] |
| 3. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, « Decide later ». Phrase : le carat exact se règle ensuite. [V] |
| 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet ». [V] |
| 5. Sortie de l'assistant | Appel `POST jeweleros.com/api/create/from-ring-config/` interdit par `robots.txt` : non exécuté. Dans mon navigateur gardé : « Something went wrong / Try again ». Le résultat réel (ouverture de la 3D) n'est donc pas observé. [V] |
| 6. Application 3D (adresse directe, sans assistant) | Panneau « Custom Engagement Ring » : 17 rubriques (voir Options), canevas 3D, prix « MSRP $… (Setting only) », boutons « + Add Wedding Band » et « Next ». [V] |
| 7. Parcours classique (monture existante) | `/design-your-own-ring/choose-your-style` (monture) vers `choose-your-diamond` (pierre) vers `complete-ring.html` (taille) vers `cart.html`. Bandeau « Your Selections » avec sous-total. [V] |
| 8. Panier | `/cart.html` : lignes monture + pierre, coupon, « Proceed to Checkout » (`/checkout.html`, non suivi). [V] |

## Contrôles vérifiés

Légende état : OK = fonctionne ; LENT = fonctionne mais > 5 s ; KO = échec ; NT = non testé.

### A. Application 3D (ordinateur ; prix de base : 18K jaune, rond 1 ct, solitaire = 2 093 $)

| Libellé | Type | Effet observé (image) | Prix | État |
|---|---|---|---|---|
| Head & Band Color : 14K White / 14K Yellow / 14K Rose / 18K White / 18K Yellow / 18K Rose / Platinum | 7 boutons | métal du rendu change | 14K blanc 1 600 ; 14K jaune 1 572 ; 14K rose 1 572 ; 18K blanc 2 121 ; 18K jaune/rose 2 093 ; platine 1 614 [V, note : platine moins cher que 18K] | OK, 5-7 s |
| Head & Band Color : Mixed | bouton | ouvre un choix séparé tête / anneau (captures `A_mixed_*`) | non relevé dans cette passe | OK (prix NT) |
| Center Stones : One / Two / Three Stone | 3 boutons | 2 pierres (toi et moi) ou 3 pierres, apparition de Left/Right ou Center/Side, « Stone Elevation Tiered / Level Set » (2 pierres) | 1 pierre 2 093 ; 2 pierres 2 527 ; 3 pierres 2 678 | OK |
| Select Your Stones : Center (Left / Right / Side) | bouton | ouvre l'éditeur de pierre (forme, carat, orientation) ; bouton « Apply & Return » | prix inchangé au retour | OK |
| Diamond Shape : Round, Oval, Princess, Emerald, Cushion, Radiant, Pear, Marquise, Asscher | 9 boutons | pierre et tête changent (volume de tête 28 à 54 mm3) | 2 086 à 2 104 hors marquise ; Marquise 2 226 | OK |
| Diamond Dimensions (Cushion) : Elongated / Square | 2 boutons | forme de pierre change | 2 090 (carré) | OK |
| Carat Weight | champ + curseur 0,25-10, pas 0,01 | pierre grossit ; frappe + Entrée et touches Home/End | 0,25 ct 1 995 ; 0,5 ct 2 013 ; 1 ct 2 093 ; 10 ct 2 639 (prix du **monture seule**) | OK, 1-7 s |
| Orientation : Classic / East-West | 2 boutons (marquise, ovale…) | pierre pivote de 90° | inchangé | OK |
| Diamond Type : Natural / Lab Grown / Skip | 3 boutons | rendu identique ; « Skip » retire la pierre du prix | solitaire seul : inchangé ; avec pavé : lab 2 520 contre naturel 2 587 ; avec pavé d'anneau éternité : lab 3 427 contre naturel 4 984 | OK |
| Basket & Halo : None / Basket / Halo / Hidden Halo / Bezel | 5 boutons | panier, halo, halo caché, chaton | Basket 2 146 ; Bezel 2 226 ; Hidden Halo 2 590 ; Halo 2 923 naturel / 2 422 lab (pavé inclus) | OK, affichage parfois décalé d'une action |
| Prong Count : 4 Classic / 4 Compass / 6 Prong | 3 boutons | nombre et position des griffes | 4 Compass 2 093 ; 6 griffes 2 226 | OK |
| Prong Tips : Claw / Petite Claw / Rounded / Tab | 4 boutons | bout des griffes change | aucun effet (2 093) | OK |
| Prong Pave : None / Pave | 2 boutons | pavé sur les bras de griffes | +494 (2 587) | OK |
| Style (anneau) : Round / Square | 2 boutons | section de l'anneau | Square 2 314 (+221) | OK |
| Cathedral : None / Cathedral | 2 boutons | épaules relevées | environ +91 | OK |
| Pave Style : None / Petite French | 2 boutons | pavé sur l'anneau ; fait apparaître Pave Length | +1 449 (3 595 avec longueur par défaut « Half ») | OK |
| Pave Length : One Third / Half / Two Thirds / Three Quarters / Eternity | 5 boutons | longueur du pavé | 2 979 / 3 595 / 4 057 / 4 214 / 4 984 | OK |
| Band Width | champ + curseur 1,5-4 mm, pas 0,1 | anneau plus large | 1,5 mm 2 002 ; 2,5 mm 2 730 ; 4 mm 3 892 ; saisie 9 ramenée à 4 | OK |
| Ring Size (US) | champ + curseur 3-13, pas 0,25 | taille du rendu | taille 3 : 1 992 ; 6,25 : 2 160 ; 13 : 2 510 (**le prix dépend de la taille**) | OK |
| Fit : Comfort / Standard | 2 boutons | profil intérieur | effet non isolé (lecture de prix décalée) | OK (prix NT) |
| Add Engraving + Engraving Style (Block / Cursive) | champ 14 car. + 2 boutons | gravure non montrée sur l'image (captures `D_engraving_*`) [I] | Cursive +77 (2 170) | OK |
| Surprise Stones : None / Add Stones | 2 boutons | ajoute quantité, taille et forme de pierres cachées (2 de 1,5 mm testées) | prix non relevé de façon fiable | OK (prix NT) |
| Icônes d'info (17 rubriques) | infobulle | texte explicatif (ex. : carats d'or, 18K = 75 % d'or) au clic ; rien au survol | aucun | OK |
| Canevas : glisser, molette, double-clic | souris | rotation (vue de face vers 3/4), zoom avant/arrière ; double-clic : effet NT en détail | aucun | OK [V pour la rotation, I pour le reste] |
| + Add Wedding Band | bouton | panneau alliance : Matching Band / Custom Band ; métal (7), style, pavé, largeur, taille, fit, gravure ; second prix | alliance seule 1 267 à 1 726 selon métal (affichage décalé) | OK, lent (jusqu'à 14 s) |
| Remove Wedding Band | bouton | fenêtre « Remove wedding band? » Remove / Cancel ; Cancel garde l'alliance, Remove la supprime | prix revient | OK |
| Next | bouton | envoie `ring-pricing`, `create-ring` et `s3/upload-to-s3`, puis « Reviewing your custom ring design… », URL inchangée | aucun | OK jusqu'à ce message ; la suite (saisie nom et téléphone, selon la FAQ du site) non observée |
| Partager / enregistrer / comparer / AR / 360° / vidéo | absents de l'application | aucun bouton trouvé dans le panneau | | absent [V] |

### B. Parcours classique

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Metal : Platinum / Yellow / White / Rose Gold | cases | seul « White Gold » renvoie des montures (11) ; les 3 autres 0 résultat | 689 à 4 795 $ | OK (catalogue pauvre) |
| Filtre Style : Classic / Halo / Infinity / Modern / Nostalgic / Vintage | cases | Classic 5 ; Halo 7 ; Vintage 2 ; Infinity, Modern, Nostalgic 0 | | OK |
| Sort : Popularity / Price asc / Price desc | liste | tri correct (de 689 à 4 795 $) | | OK |
| Quick View | bouton | requête `quick_view.php?productId=` interdite : non exécutée | | NT |
| Compare, Wish List (liste) | liens | clic non abouti (délai dépassé) | | KO sur la liste, NT |
| Fiche monture : image, vignettes, onglets Specifications / Shipping / Reviews | liens | image 600x600 chargée en 2,8 s (3,1 s complète) ; onglets s'ouvrent ; pas de zoom au survol | | OK |
| Facebook / Twitter / Pinterest | boutons 30x30 | clic non abouti (délai dépassé) | | KO (non testé) |
| Write a review | lien | ouvre le formulaire (nom, e-mail, texte, note) | | OK, non rempli |
| Request viewing | lien | fenêtre : magasin, nom, e-mail, téléphone, bijou | | OK, non rempli |
| Add to Wishlist | lien | page `/wish-list.html` | | OK |
| Email to a friend | lien | fenêtre ouverte ; envoi (`send_friend_ajax.php?productID=`) interdit | | NT |
| Add a Center Diamond | lien | `choose-your-diamond?rid=7456`, 8 s | | OK |
| Diamants naturels : 10 formes, prix, carat, couleur D-K, pureté IF-SI2, taille (cut), certificat AGS / GCAL / GIA | cases, champs, curseurs | 6 869 pierres rondes au départ ; GIA 6 853 ; AGS 16 ; GCAL 0 ; carat 1,00-1,10 : 903 ; avec 3 000-5 000 $ : 289 | filtre prix en $ | OK (lent : 8 s à l'ouverture) |
| Diamants synthétiques (`find-a-lab-created-diamond.html`) : mêmes filtres + EGL USA, IGI | idem | environ 41 000 pierres (compteur 41 302) ; IGI 36 930 ; GIA 4 372 ; AGS et GCAL 0 ; marquise 16 261 ; avec 0,90-1,10 ct 1 896 | à partir de 133 $ (0,30 ct) | OK |
| Tri par colonne (Shape, Carat, Cut, Color, Clarity, Price) et pagination (1 à 10, next, last) | liens | tri prix : 1 clic puis 2 clics inverse ; page 2 chargée | | OK |
| Case Compare d'une pierre | case | appel `compare_stone_ajax.php?stoneID=` interdit : non exécuté | | NT |
| Ligne de diamant : More Details / Add Diamond To Ring / Add To Cart | liens | fiche du diamant (GIA Report, vidéo « Diamonds Video » vers view.rmcdiamond.com, non ouverte) ; `Add To Cart` direct du diamant : adresse `?ringType=D` interdite, non ouverte | | OK / NT |
| Complete Your Ring | lien | fiche bague complète | 0,31 ct rond + monture : 3 062 $ | OK |
| Select Ring Size (4 à 12, « Greater than 12 ») | liste | taille obligatoire ; « Add to Cart » sans taille : alerte « Please Select a Ring Size !! » | total inchangé | OK |
| Free Ring Sizer | lien PDF | `/images/ring_sizer.pdf` interdit : non ouvert | | NT |
| Add to Cart (taille 6,5) | bouton | `/cart.html` après 5,7 s | 3 062 $ | OK |
| Panier : Remove The Set, Coupon, Continue Shopping, Proceed to Checkout | liens, champ | `Proceed` vise `/checkout.html` (non suivi) ; coupon non saisi ; `Remove` non cliqué | | NT |
| Téléphone, chat Podium (bulle), UserWay (accessibilité) | liens, widgets | bulle chat présente, non ouverte ; téléphone `tel:` | | NT (règle : pas de chat) |

## Options disponibles

- **Métaux** : 14K blanc, jaune, rose ; 18K blanc, jaune, rose ; platine ; « Mixed » (tête et anneau séparés) [V]. Alliance : mêmes 7 sans Mixed.
- **Formes** : Round, Oval, Princess, Emerald, Cushion, Radiant, Pear, Marquise, Asscher (cœur seulement dans la recherche de diamants) [V].
- **Carat** : 0,25 à 10 ct, pas 0,01 ; assistant : 0,5 à 5 ct [V].
- **Origine** : Natural, Lab Grown, Skip (aucune pierre) [V].
- **Compositions** : solitaire, deux pierres (toi et moi), trois pierres ; halo, halo caché, panier, chaton ; cathédrale ; griffes 4 classiques / 4 « compass » / 6 ; 4 bouts de griffe ; pavé de griffes ; pavé d'anneau « Petite French » sur 5 longueurs [V].
- **Anneau** : section ronde ou carrée, largeur 1,5 à 4 mm, taille US 3 à 13, confort ou standard [V].
- **Gravure** : 14 caractères, polices Block ou Cursive (2 seulement). **Pierres cachées** (« Surprise Stones ») [V].
- **Pierres libres** (classique) : certificats AGS, GCAL, GIA (naturel) ; AGS, EGL USA, GCAL, GIA, IGI (synthétique) [V].
- **Pas d'option** : pas de choix de titre 10K/22K, pas de gemme de couleur dans la 3D, pas de sélection de cœur de pierre par prix.

## Prix, délais, retours, garanties

- **Affichage du prix** : prix de la monture seule « MSRP $… (Setting only) », sans décomposition (pas de métal, façon, pierre). Un appel `ring-pricing` renvoie un seul total (`results.price`). La pierre n'est pas incluse : la FAQ le dit pour Ware, même éditeur [V]. Prix de base d'un solitaire 18K jaune : 2 093 $.
- **Le prix dépend de la taille et de la largeur** (de 1 992 à 2 510 $ de la taille 3 à 13) [V].
- **Parcours classique** : prix affichés pour la monture, la pierre et le total (« Your Selections », sous-total) : 2 495 + 567 = 3 062 $ [V]. Taxes 0,00 $ au panier, remise 0,00 $.
- **Délai** : page « Custom Engagement Rings » : « Ready In 2-4 Weeks », avec un concierge qui texte le client pour un rendez-vous (magasin ou virtuel) et le suivi « keep you updated » [V]. Classique : « ships out in 5-7 business days » [V].
- **Livraison** : moins de 750 $ : frais (65 $ lisible dans le tableau) ; 750 à 1 500 $ : FedEx ou UPS Ground gratuit ; plus de 1 500 $ et diamants libres : FedEx Priority Overnight gratuit ; mises à niveau 75 à 95 $ ; signature adulte obligatoire ; « may take up to 10 days » en cas de fabrication [V] (`/page/shipping-policy.html`).
- **Retours** : 30 jours après livraison ; « only items that were **not special ordered**, worn, damaged, re-sized, engraved or altered » ; ligne contradictoire plus bas : « Items received after 15 days will not be accepted » ; remboursement diminué des frais de livraison, de manutention, d'assurance et de paiement ; certificat et viseur à joindre [V]. **Une bague conçue dans le configurateur est une commande spéciale** [I].
- **Garanties** : page « Preferred Warranty » vide (en-tête seul) [V] ; nettoyages et inspections gratuits, remise à taille, estimations gratuites [V]. Pas de garantie chiffrée trouvée.
- **Certificats** : GIA, AGS, GCAL (naturel) ; IGI, EGL USA (synthétique) ; page diamant : « diamond grading report from the GIA » avec lien « GIA Report » [V].
- **Libellé du synthétique** : « Lab Grown » partout dans l'interface ; titre SEO « Synthetic Diamond Rings AL » [V].
- **Moyens de paiement affichés** au panier : Visa, Mastercard, American Express, Discover [V]. Financement : page « Credit Application » existe (non ouverte) [I].
- **Langues, devises** : anglais, dollar uniquement [V].

## Confiance et service

- Avis : aucun avis sur les fiches (« Currently 0/5 Stars. No reviews »), formulaire d'avis ouvert. Un avis Google de client cité sur la page « Custom Engagement Rings » (note 5 étoiles) [V].
- Rendez-vous : concierge par texto, rendez-vous en magasin ou virtuel (FAQ du site) ; « Request viewing » sur chaque fiche [V].
- Service : téléphone 1-855-752-5535 (sur toutes les pages), chat Podium, essayage en magasin ; pas d'essayage à domicile trouvé [V].
- Preuves de fabrication : aucune photo ou vidéo d'atelier, aucun suivi de commande en ligne vu dans les pages lues (« Order Status » existe) [V pour l'absence dans les pages lues, I pour le reste du site].
- Partage, enregistrement du design, comparaison, AR, vidéo : absents de l'application 3D ; liste de souhaits, e-mail à un ami, partage social sur le classique [V].

## Points forts à retenir pour JR Diamond

1. **Un prix en direct sur chaque option** de la 3D (appel `ring-pricing` à chaque clic), mais sans explication des postes. Preuve : 17 rubriques, réponses 1 572 à 4 984 $. JR Diamond peut faire mieux en **décomposant** métal, façon, pierre.
2. **Assistant d'entrée en 4 étapes** (style, forme, carat, délai) avec choix « Decide later » partout : peu de friction. Preuve : étapes 1 à 4, apparition en 1,8 s.
3. **Parcours « concevoir en ligne, finaliser en magasin »** par rendez-vous et concierge (page « Custom Engagement Rings »). Proche de la logique devis de JR Diamond.
4. **Modèle 3D rendu à partir de pièces de fabrication** (fichiers `.glb` par type de griffe, pavé, halo) : le client voit des détails réalistes (bout de griffe, pavé). Preuve : 24 fichiers `.glb`/`.hdr` au chargement.
5. **Carat, largeur et taille saisis au clavier** (valeur hors bornes ramenée à la limite, 9 mm vers 4 mm).
6. **Filtres de diamants complets** (forme, prix, carat, couleur, pureté, taille, certificat) avec compteurs de stock : 6 869 naturels, environ 41 000 synthétiques.

## Défauts observés

1. **Prix 3D non attaché à une pierre** : le client voit un total « setting only », ce qui laisse un écart au moment du choix de la pierre (3 062 $ réel contre 2 093 $ en 3D, exemple [V]).
2. **Prix qui se rafraîchit avec un décalage** : après plusieurs clics rapides, le prix affiché correspond à l'action précédente (relevé sur formes, halo, alliance). Chargement du prix : de 11 à 37 s après l'apparition du canevas (1,5 s) en mesure isolée [V].
3. **Platine moins cher que l'or 18K** (1 614 contre 2 093 $) : incohérent, en l'absence de décomposition [V, l'explication n'est pas donnée].
4. **Pas de partage, d'enregistrement ni de comparaison** dans l'application 3D.
5. **Gravure** : pas d'aperçu dans l'image [I d'après captures], deux polices seulement.
6. **Retours contradictoires** (30 jours puis 15 jours) et « commandes spéciales » non retournables, sans mention du cas du bijou configuré [V].
7. **Catalogue classique très étroit** : seul l'or blanc renvoie des montures ; filtres Infinity/Modern/Nostalgic vides [V].
8. **Erreurs de page** : « Bootstrap's JavaScript requires jQuery », « `$(...).modal is not a function` », « `$(...).slick is not a function` » sur la fiche et la recherche ; clic sans effet sur Compare, partage, Wish List de liste [V].
9. **Assistant coupé en pratique** : le dernier écran appelle une API interdite aux robots ; sans elle, « Something went wrong » (test limité à mon navigateur) [V].

## Limites de l'audit

- `robots.txt` interdit `/*?product`, `/*?stoneID`, `/*?ringType`, `/*.pdf$`, `/*?cartId`. Non exécutés : Quick View, Email to a friend (envoi), comparaison de pierres, « Add To Cart » direct d'un diamant, guide PDF, appel `jeweleros.com/api/`. Le navigateur a bloqué 4 requêtes dont les sondages `compare_stone_ajax` de la page elle-même.
- L'application 3D a été ouverte par son adresse directe (`jeweleros-custom.netlify.app`, robots.txt absent, backend `sa-custom-backend.onrender.com` sans robots.txt). La configuration Hudson-Poole (`jewelerID`) n'a pas pu être chargée (API interdite) : métaux, prix et options sont ceux de l'application générique. Le prix de 2 093 $ n'est donc peut-être pas celui de Hudson-Poole [S].
- Le bouton « Next » envoie une image du design à `s3/upload-to-s3` (comportement normal d'un visiteur ; aucun formulaire rempli).
- Chronométrage : plusieurs tests ont été relevés en parallèle (jusqu'à 9 navigateurs) : seuls les temps de la mesure isolée (apparition du canevas 1,4 à 1,5 s, prix 11 à 37 s) sont fiables. Panier atteint avec une bague d'une pierre et d'une monture ; paiement, connexion et chat non ouverts.
- Pas testés : essayage à domicile, AR, 360° (absents), langues (une seule).
- Affichage iPhone : appli 3D chargée (canevas 390x332, panneau de 391 px), appui sur « Halo » (prix en 5,2 s), aucune barre de défilement horizontale ; canevas prêt à 1,7 s, prix à 12 s (mesure isolée, deux essais).

## Sources

- https://www.hudsonpoole.com/page/custom-ring-builder.html, `/page/custom-engagement-rings.html`, `/page/return-policy.html`, `/page/shipping-policy.html`, `/page/preferred-warranty.html`, `/page/service.html` [V]
- https://jeweleros-custom.netlify.app/ (application 3D) et `sa-custom-backend.onrender.com/stone-algo-backend/api/ring-pricing` (réponses de prix) [V]
- `/design-your-own-ring/choose-your-style`, `/ring-detail.html?rid=7456`, `/design-your-own-ring/choose-your-diamond?rid=7456`, `/diamond-detail.html?did=2908980`, `/complete-ring.html?did=2908980`, `/cart.html`, `/find-a-lab-created-diamond.html`, `/lab-grown-bridal/lab-grown-engagement` [V]
- https://www.hudsonpoole.com/robots.txt (lu le 15/11/2026) [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/hudson-poole-fine-jewelers/` (hors dépôt).
