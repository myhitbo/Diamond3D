# Audit : Martin Jewelry (Nebraska)

- **Site** : Martin Jewelry, joaillier d'Elkhorn / Omaha (Nebraska), boutique Shopify.
- **Adresse de départ** : https://martinjewelry.net/pages/womens-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright). Rendu 3D logiciel (machine sans GPU) : les durées de chargement sont indicatives.
- **Statut** : **partiel**. Le bouton « Add to Cart » du second constructeur appelle `/cart/add`, interdit par robots.txt (`Disallow: /cart/`) : non cliqué. Les boutons « Request a Quote », « Save & Share Design » et « Drop a Hint » (envoi de données) non cliqués. Le constructeur 3D est un service tiers (ringfacet.com) dont `/api/` est interdit : ses appels `/api/` déclenchés par un clic ont été bloqués côté navigateur (aucune requête envoyée).

## Parcours

Le site expose **deux constructeurs distincts** (vérifié, adresses lues) :

| Constructeur | Adresse | Nature |
|---|---|---|
| A. « Custom Ring Builder » 3D | `/pages/womens-ring-builder` (iframe `ringfacet.com/ring-builder-embed`) | 3D temps réel, **aucun prix total** (« On request »), sortie = demande de devis |
| B. « Build your ring » (menu) | `/apps/ring-creator/rb-setting-list` (app `ringcreator.io` derrière un proxy Shopify) | Catalogue : monture + pierre en stock, **prix affichés**, sortie = panier |

Parcours A (5 étapes, vérifié) : 1 Diamond → 2 Setting → 3 Band → 4 Metal → 5 Review (taille obligatoire pour passer l'étape 1 : « Please select a ring size »).
Parcours B (3 étapes, vérifié) : 1 Choose Setting (liste) → fiche monture → 2 Choose Stone (liste de pierres) → fiche pierre → « Add to Ring » → 3 Complete Ring (récapitulatif) → Add to Cart.

## Contrôles vérifiés

Constructeur A (iframe ringfacet) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Diamond type : « Lab Grown » | bouton (un seul) | seul choix proposé ; aucun bouton « naturel » | aucun | OK (un seul état) |
| Ring size (US) | liste 3 à 13 par demi-taille (21 valeurs) | met à jour l'étiquette « SIZE 6.5 » ; débloque « Next » | aucun | OK |
| Size chart | lien/modale | tableau US, UK/AU, EU, diamètre, circonférence ; la taille choisie est surlignée | aucun | OK |
| Forme : Round, Oval, Cushion, Princess, Pear, Emerald, Marquise, Heart | 8 boutons | l'étiquette de l'image passe à la forme (ex. « OVAL · 1.0CT ») | total inchangé (« On request ») | OK |
| Carat : 1.0, 2.0, 3.0, 4.0, 5.0 | 5 boutons, sous-titre « Quote » | étiquette « 2.0CT » etc. | total inchangé | OK |
| Couleur : E (+5 %), F | 2 boutons | étiquette « F · VVS2 » | « +5 % » affiché, total inchangé | OK |
| Pureté : VVS2 (+10 %), VS2 | 2 boutons | étiquette « F · VS2 » | « +10 % » affiché, total inchangé | OK |
| Couleur de la pierre : White Diamond (base) | 1 bouton | aucun autre choix visible | aucun | OK (un seul état) |
| Vue « 3D » / « On hand » | bascule | « On hand » : photo de main + curseur DARKER/LIGHTER (teinte de peau) + « Scroll or click to zoom » | aucun | OK |
| AUTO-ROTATE ON/OFF | bouton | coupe/active la rotation ; libellé passe à OFF | aucun | OK |
| Glisser / molette | geste | « DRAG TO ORBIT · SCROLL TO ZOOM » (orbite, zoom) | aucun | non testé au geste (indication lue) |
| Setting : 4 Prong, Classic Basket (+$50), Tulip Basket (+$75), Bezel (+$125) | boutons | libellé de l'image change (ex. « TULIP BASKET ») | supplément affiché, total « On request » | OK |
| Halo : Pavé Halo (+$500), Fancy Halo (+$300), Floral Halo (+$600) | boutons | idem | idem | OK |
| Side-stone : Aurelia (+$800), Celeste (+$700), Aster (+$500) ; Trilogy : Lumière (+$1,100) | boutons | libellé « ROUND CENTRE · … FIXED DIAMONDS » : la pierre centrale devient fixe | idem | OK |
| Band : Plain, Side Stone (+$400), Twist (+$400), Diamond (+$400), Plain Twist (+$100), Graduated Pavé, Petite Side Stone, Diamond Cluster, Pavé Infinity, Marquise Cluster | 10 boutons | clic accepté, aperçu du fil de bague dans la vignette | supplément affiché sur 5 ; total inchangé | OK |
| Metal : 14KT Yellow / White / Rose Gold (base), Platinum 950 (+$250) | 4 boutons | libellé de l'image mis à jour (« PLATINUM 950 ») | +$250 affiché, total inchangé | OK |
| Finition : Polished, Brushed, Matte | 3 boutons | clic accepté | aucun | OK |
| Stepper (Diamond, Setting, Band, Metal, Review) / Next / Back / Edit | boutons | navigation entre étapes | — | OK |
| Review : gravure (20 caractères, « Inside, palm side » / « Outside, palm side », polices Script, Serif, Sans, Roman, Handwritten) | champ + choix | présent ; saisie non essayée | non affiché | non testé (saisie de texte) |
| Request a Quote — Size 6.5 | bouton | non cliqué (envoi probable de données vers ringfacet.com/api/, interdit : inféré) | — | non testé |
| Save & Share Design | bouton | non cliqué (même raison) | — | non testé |
| Bulle « Have a Question? » / widget de chat (Clientbook) | bouton | non ouvert (règle : pas de chat) | — | non testé |

Constructeur B (ring-creator) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Ring Style : Solitaire, Three Stone, Halo, Accented | 4 boutons de filtre | l'ouverture du menu est affichée ; application non suivie résultat par résultat | — | OK (menu), effet non mesuré |
| Metal Type | menu | 10K, 14K, 18K × Rose, White, Yellow ; Platinum | — | OK |
| Price | menu | curseur de fourchette (« $ – $ ») | — | OK (ouverture) |
| Supported Shape | menu | Round, Oval, Pear, Emerald, Princess, Marquise, Cush, Brill (libellés tels quels, coupés) | — | OK |
| All Filters / Reset All / Apply Filters / Sort By (Price: Lowest, Highest) | boutons | panneau commun ; tri par prix | — | OK (ouverture) |
| Fiche monture : Metal Type 14K White Gold, Shape Oval, Size 0.375 / 1.0 / 2.0, Ring Size 3–13 (21) | boutons | affichés ; « See Size Conversion Chart » | prix monture seul : 2 698,00 $ (exemple) | OK (lecture) |
| Select Setting | lien | mène à la liste de pierres avec la monture retenue | — | OK |
| Stone list : onglets « Natural Diamonds » / « Lab-Grown Diamonds » | 2 boutons | naturel : 273 résultats ; synthétique : 1 322 résultats (ovale, 0,50 à 2,00 ct) | de 1 410 $ (naturel) ; de 386 $ (synthétique) | OK |
| Filtres : Oval (forme), Carat 0.50–2.00, White Color, Clarity, Cut, Price, Hearts & Arrows, Reset All, All Filters, Sort By ; pagination 23 pages | boutons | affichés ; non tous appliqués | — | OK (présence) |
| Fiche pierre : Shape, Carat, Color, Clarity, Cut, Polish, Symmetry, Fluor, Lab (GIA), Depth, Table, Girdle, Culet, Meas., Ratio, Treatment | tableau | pierre naturelle exemple : 0,50 ct ovale I SI1 Very Good, GIA, 6,28×4,45×2,82 | 1 410,00 $ | OK (lecture) |
| Add to Ring | lien | mène au récapitulatif `rb-ring-review` | — | OK |
| Récapitulatif : taille 3–13, Subtotal, Change, View, Start Over, Drop a Hint, Ask a Question | boutons | **Subtotal 4 108,00 $** = 2 698 + 1 410 (arithmétique vérifiée) | oui | OK (lecture) |
| Add to Cart (fiche monture et récapitulatif) | bouton | **non cliqué** : `/cart/add` interdit par robots.txt (panier interdit) | — | non testé |
| Ask a Question, Drop a Hint | boutons | non cliqués (formulaire / chat) | — | non testé |
| Page /cart | lien | page lue : « Your cart is empty » (autorisée) | — | OK |

Pages de service lues : `/pages/shipping-policy`, `/pages/special-financing`, `/pages/custom-design` (formulaire non rempli). Non ouverts : `/pages/book-design-session`, `/pages/diamond-education`, `/collections/wedding-bands`, `/pages/benchmark-ring-builder` (hors périmètre de temps). Conditions générales (retours) : lecture non effectuée.

## Options disponibles

- **A (3D)** : formes (8) ; carats 1 à 5 ; couleurs E, F ; puretés VVS2, VS2 ; origine : synthétique seulement ; montures (11) ; bandes (10) ; métaux or 14 k jaune/blanc/rose et platine 950 ; finitions (3) ; tailles US 3 à 13 ; gravure 20 caractères, 2 emplacements, 5 polices.
- **B (catalogue)** : montures filtrables par style (4), métal (10 K, 14 K, 18 K en 3 couleurs, platine), forme, prix ; pierres naturelles et synthétiques avec filtres de forme, carat, couleur, clarté, taille, prix, Hearts & Arrows.
- **Sur mesure** (`/pages/custom-design`, lu, non envoyé) : produit (bague, boucles, collier, bracelet, alliance), métal 14 k/18 k en 3 couleurs, photos d'inspiration, pierre (synthétique, naturelle, couleur, pierre du client, aucune), date souhaitée.

## Prix, délais, retours, garanties

- **Prix A** : « Estimated total : On request » à chaque étape testée ; seuls des suppléments (+$50 à +$1 100) et pourcentages (+5 %, +10 %) sont affichés, jamais additionnés (vérifié sur toutes les étapes).
- **Prix B** : prix monture et prix pierre séparés, **Subtotal** additionné au récapitulatif (vérifié). Montures vues : 2 698 $ à 6 029 $.
- **Délai** (shipping-policy, lue) : environ 2 à 3 semaines pour le constructeur en ligne, 3 à 4 semaines pour le sur mesure avec un agent ; le transport s'ajoute.
- **Livraison** : standard gratuite, assurée, signature obligatoire ; express « sur demande, coût supplémentaire » ; retrait ou remise locale possible (Las Vegas, Floride, Nebraska). Les bagues de fiançailles passent d'abord par un représentant pour inspection (vérifié).
- **Retours / garantie** : non vérifiés (conditions générales non lues). Promesse « Price Match » affichée en pied de page (vérifié).
- **Financement** : carte Wells Fargo Jewelry Advantage (page lue).
- **Moyens de paiement** (icônes du pied de page) : American Express, Apple Pay, Diners, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa. Panier non dépassé.
- **Certificats** : « Lab GIA » sur la fiche d'une pierre naturelle (vérifié) ; pierre synthétique non ouverte.
- **Libellé** : « Lab Grown » / « Lab-Grown Diamonds » (vérifié).

## Confiance et service

- Téléphone 402-393-2254 (lien `tel:`), adresse 18881 West Dodge Road Suite 213C, Elkhorn NE 68022, bouton « Book an Appointment », chat Clientbook, Facebook, Instagram, abonnement e-mail (vérifié).
- Langue : anglais ; devise : dollar US. Avis clients et photos/vidéos de fabrication ou suivi de commande : **non vus** sur les pages ouvertes.
- Mesure du visuel principal (indicative, rendu logiciel) : constructeur A, cadre de l'iframe en 1,9 s, mais « LOADING 3D MODEL… » disparaît à **12,4 s sur ordinateur et 28,9 s en affichage iPhone** ; constructeur B, première image de monture en **2,7 s (ordinateur)**, récapitulatif en 3,5 s (ordinateur) et 4,5 s (iPhone).

## Points forts à retenir pour JR Diamond

1. **Vue « On hand »** avec curseur de teinte de peau et zoom : donne l'échelle réelle de la pierre (preuve : capture `p4b.jpg`, vue lue sur `/pages/womens-ring-builder`).
2. **Suppléments affichés sur chaque option** (+$50, +$500, +$250 platine), avant même le total : le prix est expliqué par option. Mais jamais additionné côté A : à faire mieux (preuve : total « On request » inchangé après 30 clics).
3. **Récapitulatif avec Subtotal additionné** et lignes « Change / View » par composant (constructeur B, lu).
4. **Tableau des tailles** (US, UK/AU, EU, diamètre, circonférence) avec la taille choisie surlignée (modale lue).
5. **Pierre en stock avec fiche technique complète** (profondeur, table, cullet, mesures, ratio, laboratoire) et **choix naturel ou synthétique** par onglet (B).
6. **Inspection avant expédition** par un représentant, annoncée : répond à la crainte « bijou différent de la CAO » (shipping-policy, lue).
7. **Délai annoncé distinct** pour le constructeur en ligne (2 à 3 semaines) et le sur mesure (3 à 4 semaines).
8. **Étiquettes de configuration** en haut de l'image (forme, qualité, monture, métal, origine) : toujours lisibles.

## Défauts observés

- Deux constructeurs incompatibles : l'un à prix (catalogue, sans 3D), l'autre en 3D sans prix (devis). Le visiteur ne peut pas voir la 3D et le prix ensemble.
- Constructeur A : prix « On request » partout, y compris sur les suppléments affichés ; aucune option naturelle ; carats limités à 5 valeurs ; deux couleurs et deux puretés seulement.
- Démarrage lent de la 3D (12 s ordinateur, 29 s iPhone dans nos mesures) avec message de chargement.
- Éléments de l'iframe peu stables au clic automatisé (animation permanente) : sans conséquence pour un utilisateur, mais invérifiable par clic standard (clics exécutés par script).
- Aucun avis client, aucune preuve de fabrication vue.
- Filtre de forme du B : libellés tronqués (« Cush », « Brill »).

## Limites de l'audit

- Pas de paiement ni de panier rempli : « Add to Cart » interdit par robots.txt. Moyens de paiement lus uniquement par les icônes.
- Constructeur A : appels `ringfacet.com/api/` (interdit) bloqués dans le navigateur après le chargement ; seul `POST /api/events` (statistiques) a été tenté puis refusé. Les chargements à l'ouverture de la page ne sont pas un écart.
- Retours et garantie : conditions générales non lues (accès refusé par l'outil). Effet image de chaque option du A : suivi par libellé, non comparé image par image.
- Temps de chargement mesurés en rendu logiciel : surestimés par rapport à un appareil réel.
- Filtres du constructeur B : ouverture contrôlée, résultats de chaque filtre non mesurés.

## Sources

- https://martinjewelry.net/pages/womens-ring-builder (contrôles, parcours A, mesures)
- https://martinjewelry.net/apps/ring-creator/rb-setting-list, `rb-setting-details`, `rb-stone-list`, `rb-stone-details`, `rb-ring-review` (parcours B)
- https://martinjewelry.net/pages/shipping-policy, `/pages/special-financing`, `/pages/custom-design`, `/cart`
- Contrôle robots.txt : AUTORISÉ pour les pages ci-dessus ; INTERDIT `/cart/add` ; ringfacet.com `/api/` INTERDIT
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/martin-jewelry/`
