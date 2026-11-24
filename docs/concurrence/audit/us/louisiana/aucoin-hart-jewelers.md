# Audit : Aucoin Hart Jewelers, « Custom Design » et catalogue (Metairie, Louisiane)

| | |
|---|---|
| Site | Aucoin Hart Jewelers, 1525 Metairie Road, Metairie (LA) : https://www.aucoinhart.com/ |
| Page de départ | https://www.aucoinhart.com/custom-design (page de processus, pas un configurateur) |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur 1366 × 900 (en-US) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : il n'existe **aucun configurateur ni constructeur de bague** ; pages de processus, catalogue (filtres), une fiche, panier vide et pages de service lus. Pas d'ajout au panier (la fiche testée n'a pas de bouton d'achat). Un écart à robots.txt est signalé dans les Limites. |
| robots.txt | `User-agent: *` : `Crawl-delay: 30`, `Content-Signal: search=yes, ai-train=no, use=reference`, `Allow: /` ; interdits notamment `/skeleton` (sauf css, js, images, polices), `/skeleton/1.0/view/ws/`, `/wishlist`, `/login`, `/keyword-search`, `/product_comparisons`, `/dynamic-filter`, paramètres `?sort=`, `size=`, `color=`, `clarity=`, `price=`… (V, https://www.aucoinhart.com/robots.txt). `/shopping-cart` : autorisé. |

Marques : **V** vérifié (page lue ou contrôle actionné, adresse donnée), **I** inféré, **S** supposé. Prix en USD affichés par le site. Délai respecté : une page toutes les 31 s.

## Parcours

| Étape | Options relevées |
|---|---|
| 0. `/custom-design` | Processus en 7 étapes décrit (idée, CAD, modèle cire/imprimé 3D, fonte sur place, gravure à la main, sertissage, finition). Boutons « SCHEDULE A CONSULTATION », « CALL US », « BOOK APPOINTMENT », « TEXT US ». Pas de 3D ni de choix en ligne. [V] |
| 1. `/engagement-rings` | 988 articles (62 pages). Filtres : marques (4), forme (9), type de pierre (3), type de bague (6), matière (6), prix. Tri (4). Fiches à prix affiché. [V] |
| 2. Fiche produit | Choix de la taille de doigt (3 à 12 par demi-taille), « Inquire », « Notify Me », comparer, liste de souhaits, envoyer par e-mail, téléphone. [V] |
| 3. `/shopping-cart` | Panier vide : « Your cart is empty », sélecteur de magasin (« Select a Store »). Rien d'autre vérifié. [V] |

## Contrôles vérifiés

Page de départ `/custom-design` : 68 contrôles visibles à l'ordinateur (liste brute du script `controls.cjs`). Regroupés ci-dessous ; ce qui n'a pas été actionné est dit.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Designers, Engagement Rings, Wedding Bands, Accessories, Fine Jewelry, Men's Jewelry, Timepieces, About, Services, Contact Us | boutons de menu | ouvrent des sous-menus de pages ; non tous actionnés | – | présents ; non actionnés |
| Rolex, David Yurman | liens | pages de marques ; non ouvertes | – | non testés |
| Champ « SEARCH » | champ | recherche du site ; `/keyword-search` interdit par robots.txt | – | non testé (interdit) |
| Wishlist (cœur) | lien `/wishlist` | page interdite par robots.txt | – | non ouvert (interdit) |
| Panier | lien `/shopping-cart` | page « Your cart is empty » | – | fonctionne [V] |
| Compte | lien `/login` | interdit par robots.txt | – | non ouvert (interdit) |
| MAKE AN APPOINTMENT / SCHEDULE A CONSULTATION / BOOK APPOINTMENT | liens | mènent à `/request-an-appointment` (formulaire) | – | lien lu, formulaire non rempli |
| 504-834-9999 (en-tête, pied, « CALL US », « TEXT US ») | liens `tel:` | appel ; « TEXT US » est aussi un lien `tel:`, pas un SMS préparé | – | présents |
| Pastilles « In-House Workshop », « Master Craftsmanship », « Lifetime Quality » | liens `#` | aucun effet (ancre vide) | – | décoratifs [V] |
| Trois avis (2 Google, 1 Yelp) + « READ MORE REVIEWS » | texte, lien | lien `share.google/…` (page Google) ; non suivi | – | présents |
| FAQ (6 questions) | texte | réponses lisibles (voir plus bas) | – | présentes |
| Réseaux sociaux (5), plan du site, « Configure Cookies Consent » | liens/boutons | externes ; bandeau cookies avec « Accept all » / « Decline all » | – | présents |
| Widget « Text us » (Podium) | bouton flottant | ouvre un fil de messages ; **non ouvert** (consigne) | – | présent [V, capture] |

Catalogue `/engagement-rings` (desktop, 1366 px) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre « CENTER STONE SHAPE » : Asscher, Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round | cases à cocher | cocher « Marquise » met à jour la grille sans recharger ; **appel XHR POST à `/skeleton/1.0/view/ws/ajax_filters.php` (chemin interdit par robots.txt)**, voir Limites | grille filtrée | fonctionne ; chiffres du résultat non conservés |
| Filtre « MATERIAL » : 14K rose, 14K blanc, 14K jaune, 18K blanc, 18K jaune, platine | cases | « Platinum » coché en plus de Marquise : la case se coche, grille mise à jour | idem | fonctionne [V, capture] |
| Filtres « BRANDS » (Aucoin Hart, Simon G, Sylvie, Vlora), « CENTER STONE TYPE » (Diamond, Not Included, Stone Not Included), « ENGAGEMENT RING TYPE » (Bezel Set, Halo, Sidestone, Solitaire, Three Stone, Two Stone), « PRICE » | accordéons | options lues ; non cochées (autres appels interdits évités) | – | options relevées ; non actionnés |
| Tri `sort_by` : Default, Price Low to High, High to Low, Newest Arrivals | liste | sélection « Price: Low to High » effectuée ; ordre non relevé | – | actionné, résultat non conservé |
| Pagination « 1 2 3 … 62 » | liens | non suivis | – | non testés |
| Liens de catégories : Halo, Side Stone, Solitaire, Three Stone ; 9 formes ; tranches 1 000–2 000, 2 000–5 000, 5 000 et plus | liens | pages de catégories ; non ouvertes | – | non testés |

Fiche produit (14K Yellow Gold Round Diamond Engagement Ring with Round Diamond Side Stones, 4 600,00 $) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Ring Size » 3 à 12 (19 valeurs) | liste | choix de taille ; le texte dit « available in a 6.5 ring size » (pièce unique, en stock) | aucun changement visible | présent [V] |
| « Inquire » | bouton | ouvre un formulaire modal : prénom, nom, téléphone, e-mail, message, « Send » (reCAPTCHA) ; **non rempli** | – | s'ouvre [V, capture] |
| « Notify Me » | bouton | non actionné (formulaire) | – | non testé |
| « ADD TO COMPARE » | bouton | le panneau « Comparison » s'ouvre (« No products added to compare list ») ; **appel à `ajax_cmp.php` (chemin interdit)** ; l'ajout n'a pas abouti | – | ambigu [V] |
| « ADD TO WISHLIST » | bouton | `/wishlist` interdit ; non actionné | – | non testé |
| « EMAIL THIS ITEM » | lien | formulaire d'envoi ; non ouvert | – | non testé |
| « CALL US » 504-834-9999 | lien `tel:` | appel | – | présent |
| « ITEM SPECIFICATIONS », « CENTER STONE INFORMATION », « SIDE STONE SPECIFICATIONS » | accordéons | cliqués ; contenu non relevé | – | non lu |
| Galerie | images | une seule vignette et une photo ; ni vidéo, ni 360°, ni 3D, ni essayage en réalité augmentée relevés | – | [V, capture] |
| **Aucun bouton « Add to cart »** sur cette fiche | – | « Inquire » et « Notify Me » à la place | – | constat [V] |

## Options disponibles

- Métaux du catalogue : 14 k rose, blanc, jaune ; 18 k blanc, jaune ; platine (V, filtre MATERIAL). Sur mesure : « all precious metals including yellow gold, white gold, rose gold, platinum, and sterling silver » (V, /custom-design).
- Formes de pierre : asscher, coussin, émeraude, marquise, ovale, poire, princesse, radiant, ronde.
- Types de monture : bezel, halo, pierres latérales, solitaire, trois pierres, deux pierres.
- Pierre centrale : « Diamond » ou « Not Included (Sold Separately) » ; l'écran « Diamonds Consultation » existe. Origine naturel / synthétique : **aucun filtre**. Texte de la page catégorie : « premium natural diamonds » (V).
- Tailles de doigt : 3 à 12 par 0,5.
- Gravure : à la main, choisie au sur-mesure (V).

## Prix, délais, retours, garanties

- [V] Prix affichés sur les fiches, bagues complètes, de 4 250 $ à 46 500 $ sur la première page (/engagement-rings). Aucune décomposition (métal, façon, pierre, marge). Sur mesure : « Cost varies widely… free consultation » (/custom-design).
- [V] Délai du sur-mesure : « Typically 4-8 weeks » (FAQ de /custom-design). L'inventaire de ce dossier indiquait 3 à 6 semaines : divergence entre pages du site (non résolue).
- [V] « Free Ground Shipping on all online orders » (/complimentary-services). Frais de livraison au panier non vérifiés (panier vide).
- [V] Garantie : « free from defects in materials or craftsmanship for life of the jewelry » (/workshop) ; sur-mesure : « quality guarantee » (FAQ).
- [V] Changements : mineurs pendant la CAO ; après la fonte, des coûts supplémentaires possibles (FAQ).
- [V] « Aucoin Hart guarantees that no one will sell you a diamond of identical quality for less in 30 days… GIA "certified" » (/the-ah-difference).
- [V] Financement : carte Wells Fargo Jewelry Advantage, « 90-day layaway » : 25 % d'acompte puis paiements égaux tous les 30 jours (/financing).
- [S] Retours : politique de retour non trouvée dans les pages lues ; sur-mesure et « exception » non vérifiés.

## Confiance et service

- [V] 3 avis de 3 clients (2 Google, 1 Yelp), « READ MORE REVIEWS » vers Google ; un avis détaillé sur /financing. Aucune note chiffrée sur la page lue.
- [V] Préparation visible : « photo-realistic computer renderings… from every angle », modèle en cire ou imprimé en 3D avant la fonte, « All precious metals are cast on-site » (/custom-design). **Aucune photo ou vidéo d'atelier, ni suivi de commande, relevés sur les pages lues.**
- [V] Langues : anglais seul. Devise : USD. Services gratuits : nettoyage, estimations, consultations diamant et design, emballage cadeau (/complimentary-services).
- [V] Service : téléphone, rendez-vous, widget SMS (Podium), e-mail `SHOP@AUCOINHART.COM`. Heures : mardi–vendredi 10–18 h, samedi 10–17 h (/complimentary-services).
- [V] Discours : sélection familiale (« hand-selected by an Aucoin family member »), 50 personnes de personnel, gemmologues diplômés.

## Points forts à retenir pour JR Diamond

1. **Étapes de fabrication nommées de 1 à 7** avec rendu CAO « from every angle », modèle en cire ou imprimé en 3D, fonte sur place : met en scène l'atelier sans configurateur (preuve : /custom-design). JR Diamond peut aller plus loin en montrant des photos réelles.
2. **FAQ du sur-mesure franche** : délai (4–8 semaines), coût variable, « Can I see the design before it is made? » (preuve : /custom-design).
3. **Garantie à vie** des défauts de fabrication, affichée sur la page atelier (preuve : /workshop).
4. **Engagement de prix sur le diamant** : « no one will sell you a diamond of identical quality for less in 30 days », mais sur certificat GIA (preuve : /the-ah-difference). Un argument de transparence de prix à reprendre autrement, par l'explication du prix.
5. **Livraison gratuite** annoncée en toutes lettres (preuve : /complimentary-services).
6. **Layaway** en 4 versements (25 % puis tous les 30 jours) : modèle de paiement échelonné simple (preuve : /financing).

## Défauts observés

- Aucun configurateur : aucune personnalisation de bague possible en ligne ; le parcours sur mesure repose sur un rendez-vous.
- Pas de bouton d'ajout au panier sur la fiche testée ; seul « Inquire » (formulaire).
- Montures et bagues finies : aucune décomposition du prix ; pas de choix synthétique/naturel.
- Une seule photo sur la fiche testée ; ni 360°, ni vidéo.
- Délai du sur-mesure incohérent entre pages (3–6 semaines dans l'inventaire, 4–8 sur /custom-design).
- Pastilles « In-House Workshop », « Master Craftsmanship », « Lifetime Quality » sans lien réel (ancre vide).
- Lenteur sur iPhone émulé : visuel principal de /custom-design à 11,8 s (une mesure, réseau variable).

## Limites de l'audit

- **Écart à robots.txt (signalé).** Le robots.txt interdit `/skeleton/1.0/view/ws/`. Mes clics sur les filtres (forme, matière) et sur « Add to compare » ont déclenché des requêtes **POST faites par la page elle-même** vers `ajax_filters.php` et `ajax_cmp.php` dans ce chemin ; `ajax_interaction.php` du même chemin est aussi appelé au simple chargement par le site. Je ne l'avais pas anticipé. J'ai ensuite arrêté d'actionner les autres filtres et boutons AJAX. Les constats « filtre fonctionne » viennent de ces clics.
- Crawl-delay de 30 s respecté (31 s entre deux pages). Pages chargées : custom-design (3 fois), engagement-rings (3), the-ah-difference, complimentary-services, financing, shopping-cart, workshop, une fiche (2).
- Panier non rempli : aucun récapitulatif, frais, délai ni moyens de paiement du panier vus. Aucun formulaire rempli ; chat non ouvert.
- Nombre d'articles après filtre et ordre après tri non conservés (sortie perdue). Mesures de temps : une seule par page et appareil.
- Non lus : politique de retour, `/request-an-appointment`, accordéons de la fiche, `/diamond-consultations`, catégories, pagination.
- Aucune vérification de l'effet de la taille de doigt sur le prix.

## Sources

Pages lues le 15/11/2026 : https://www.aucoinhart.com/custom-design ; /engagement-rings ; /the-ah-difference ; /complimentary-services ; /financing ; /workshop ; /shopping-cart ; fiche https://www.aucoinhart.com/aucoin-hart-jewelers/14k-yellow-gold-round-diamond-engagement-ring-with-round-diamond-side-stones/4903668/en ; https://www.aucoinhart.com/robots.txt. Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/aucoin-hart/`.

Temps d'apparition du visuel principal (LCP, une mesure) : /custom-design 1,5 s ordinateur, 11,8 s iPhone ; /engagement-rings 4,1 s et 4,1 s ; fiche 4,4 s et 1,3 s ; /shopping-cart 1,95 s ordinateur.
