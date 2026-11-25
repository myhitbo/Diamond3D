# Audit : Hoskings Jewellers (Australie, Territoire du Nord)

- **Site** : Hoskings Jewellers (chaîne basée à Melbourne, magasins hors Territoire du Nord ; livraison dans toute l'Australie)
- **Adresse** : https://hoskings.com.au/ (départ : /collections/engagement-rings)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1440 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Pas de configurateur : catalogue de bagues prêtes à vendre, une fiche produit parcourue jusqu'au panier (tiroir). Paiement non cliqué.
- **Contrôle robots.txt** : toutes les adresses ouvertes sont AUTORISÉES (le robots.txt n'interdit que /fonts, /assets, /icons). Aucun écart.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Collection `/collections/engagement-rings` | 115 produits, 4 pages ; tri ; 2 interrupteurs (Clearance, Special Offers) ; 2 densités de grille ; fiches « AURA » (marque maison, diamant de laboratoire) et « HOSKINGS » |
| Fiche produit | 3 à 4 photos (miniatures + flèches + loupe), choix de taille (3 boutons L, N, P), quantité, Ajouter au panier, guide des tailles, 3 volets (retours, livraison, paiement), « Deliver to Store », bouton « Find your closest store » |
| Panier | Tiroir latéral : ligne produit, quantité, Retirer, option cadeau (boîte luxe / emballage), sous-total, livraison « calculée au paiement », bouton Checkout, logos de paiement |

Aucun choix de métal, de forme de pierre, de carat, d'origine ni de monture sur la fiche : chaque combinaison est un produit distinct. [V]

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu NEW, JEWELLERY, ENGAGEMENT, WEDDING, WATCHES, GIFTS, BRANDS, SALE, CATALOGUE | liens | Mènent aux collections (liens lus, non tous ouverts) | n/a | OK (liens présents) [V] |
| Fil d'Ariane / menu Diamond (Engagement Rings, bagues de mariage, bijoux diamant, perles) | liens | Navigation entre collections | n/a | présents [V] |
| Filtre & tri (bouton « FILTER & SORT ») | tiroir | Ouvre un tiroir avec Tri + 2 interrupteurs ; le bouton « Show 115 results » le referme | n/a | OK [V] |
| Tri : Newest, Popularity, Discount (biggest to smallest), $ High-Low, $ Low-High | boutons radio | Le choix change l'adresse (`?page=1&sortBy=shopify_products_price_asc`), mais **l'ordre des 6 premiers prix reste identique** (2 625 $, 3 187,50 $, 2 812,50 $, 1 525 $…) en croissant et en décroissant, après 4,5 s | n/a | **tri par prix sans effet visible** [V] |
| Clearance (interrupteur) | interrupteur | Compteur resté à 115 après 1,5 s | n/a | effet non observé [V] |
| Special Offers (interrupteur) | interrupteur | Compteur resté à 115 après 1,5 s | n/a | effet non observé [V] |
| Clear all filters | lien | Présent, non testé séparément (aucun filtre actif) | n/a | non testé |
| Grille 2 densités (icônes) | boutons | Présents (capture) ; non actionnés | n/a | non testé |
| Pagination 1, 2, 3, 4, Next | liens `#` | Page 2 : adresse `?page=2&sortBy=…` | n/a | OK [V] |
| Miniatures de la fiche (3) | boutons | Changent l'image principale | n/a | OK (flèche « suivante » vérifiée) [V] |
| Flèches image précédente / suivante | boutons | Image suivante affichée | n/a | OK [V] |
| Loupe (zoom) | bouton | Présent, non actionné | n/a | non testé |
| Taille L / N / P | boutons | **Change le produit vendu** : L = SKU 245386, 1 195 $ (barré 2 395 $) ; N = SKU 242299, 2 795 $ ; P = SKU 242301, 2 795 $ ; mensualités 298,75 $ puis 698,75 $/semaine | oui, 1 195 → 2 795 $ | OK sur ordinateur ; clic échoué sur iPhone (3 s, cause non identifiée) [V] |
| Size guide | bouton | Tiroir : tableau diamètre mm / taille AU-NZ / US-Canada (I à V), « How to measure » (doigt ou bague existante) | n/a | OK [V] |
| Quantité − / + | boutons | Présents ; non actionnés | n/a | non testé |
| Add to Cart | bouton | Le panier s'ouvre en tiroir, compteur d'en-tête à 1, produit + taille N, 2 795 $ ; /cart et /cart/add autorisés par robots.txt | n/a | OK [V] |
| Volets RETURNS / SHIPPING / FLEXIBLE PAYMENTS | volets | Texte court : « 14 day returns and exchanges », « Free on orders over $79* », « Buy now, pay later » | n/a | OK [V] |
| « See more » (mensualités) | lien | Présent ; non ouvert | n/a | non testé |
| Find your closest store | bouton | Clic non abouti en 3 s | n/a | échec de test [V] |
| Téléphone 1800 819 796, e-mail hello@… | liens tel / mailto | Présents ; non cliqués | n/a | présents [V] |
| FAQs (aide) | bouton | Présent ; non ouvert | n/a | non testé |
| Panier : quantité, Remove, option cadeau « Add » | boutons | Présents dans le tiroir ; non actionnés (hors lecture) | emballage cadeau 6,95 $ annoncé | non testé |
| Checkout et logos PayPal, Mastercard, Visa, Google Pay, Apple Pay, Afterpay, Zip | bouton / logos | Bouton **non cliqué** (paiement) | n/a | non testé (règle) |
| Fenêtre promotionnelle (« Black Friday », « 25 % off sitewide ») | fenêtre modale | S'ouvre seule et cache la fiche ; fermée par « Close dialog » | n/a | OK [V] |
| Newsletter (champ e-mail) | formulaire | Non rempli | n/a | non testé (règle) |
| Recherche, compte, chat (icônes d'en-tête) | boutons | Présents ; non ouverts | n/a | non testé |

Contrôles bruts relevés par `controls.cjs` : 142 sur la collection (ordinateur), 131 sur iPhone, 52 sur la fiche.

## Options disponibles

- **Métaux** : 9 ct et 18 ct, jaune, blanc, rose (dans le titre des produits) [V]. Pas de platine relevé sur la première page.
- **Pierres** : majorité de diamants de laboratoire (« Lab Grown », IGI mentionné sur la fiche), quelques diamants naturels (marque HOSKINGS) [V].
- **Formes** relevées dans les titres : ronde (brillant), ovale, princesse, émeraude, radiant, poire, marquise (lot) [V].
- **Carats** : 0,50 à 3,25 ct de poids total (TDW dans les titres) [V].
- **Styles** : solitaire, trilogie, halo, ensemble nuptial, mixte [V].
- **Tailles** : L, N, P (AU) sur la fiche vue ; chaque taille est une référence distincte [V].
- **Filtres** : aucun filtre de forme, métal, carat, pureté, couleur ni prix ; seulement tri + Clearance + Special Offers [V].
- **Gravure, monture sur mesure, essayage à domicile, AR, 3D, 360°, vidéo** : non relevés [V].

## Prix, délais, retours, garanties

- **Prix** : affichés en AUD, TTC (« prices include GST »), barrés avec « SAVE x $ » ; l'ancien prix « n'a peut-être donné lieu à aucune vente » (page Pricing Policy) [V]. Exemples : 9 ct jaune ovale 1 ct à partir de 1 195 $ ; 18 ct blanc 3 ct 6 746,25 $ (barré 8 995 $) [V]. Pas de décomposition (pierre / métal / façon). Prix en magasin pouvant différer [V].
- **Paiement en plusieurs fois** : mensualités hebdomadaires affichées (298,75 $/semaine pour 1 195 $) ; Afterpay, Zip, Humm ; paiement comptant, carte, lay-by en magasin [V].
- **Livraison** : gratuite dès 79 $ (hors cadeaux), Australia Post ; expédition 1 à 4 jours ouvrés puis 2 à 5 (métropole 2-5, campagne jusqu'à 6, interétat 3-9) ; signature exigée au-delà de 1 000 $ ; expédition depuis Melbourne ; livraison en magasin (Victoria seulement) [V]. Bandeau : « Delivered in 2–8 business days » [V].
- **Retours** : 14 jours après achat ou livraison pour changement d'avis, en magasin ou en ligne ; soldes, déstockage et catalogue soumis à une politique spéciale ; pas d'examen par e-mail ou téléphone [V]. Détail des réponses du FAQ non déployé à la lecture (volets repliés).
- **Garantie** : droits de la loi australienne (Australian Consumer Law) ; garanties fabricant selon produit [V].
- **Délai de fabrication** : sans objet, bagues en stock ; aucune option sur mesure relevée [V].

## Confiance et service

- Certificat : « IGI Certified » sur la fiche lab-grown vue ; pas de numéro ni lien de rapport [V]. Page « Lab Created Diamonds » (FAQ de 8 questions) et article de blog [V].
- Libellé : « Lab Grown », « Laboratory Grown » (spécifications : STONE CLASS = Laboratory Grown), phrase « same characteristics as natural diamonds but grown in a laboratory » [V].
- Contact : téléphone gratuit, e-mail, bouton boutique, FAQ, Zendesk d'aide, page Order Status [V].
- Langue : anglais ; devise : AUD seule ; livraison Australie seule [V].
- Avis clients : aucun relevé sur la fiche vue [V]. Preuves de fabrication (photos d'atelier, vidéos, suivi) : aucune [V].
- Autre : « Seen this product elsewhere? Contact us to match the price » (alignement de prix) ; emballage cadeau 6,95 $ ; mise à taille : page Ring Sizing (mesure au magasin conseillée, multisizer, guide imprimable) [V].

## Points forts à retenir pour JR Diamond

1. **Tableau de tailles en tiroir** avec « comment mesurer » (doigt ou bague existante) : lisible, sans quitter la fiche. Preuve : clic « Size guide » → tiroir (capture `sg_d.jpg`).
2. **Mensualités affichées sous le prix** (par semaine) : réduit le choc du prix. Preuve : « or installments from $298.75/week » sur la fiche.
3. **Politique de livraison et de retour résumée en trois volets** sur la fiche, avec page détaillée par délai et région (métropole, campagne, interétat). Preuve : /help/shipping.
4. **Logos de paiement dans le panier** (carte, Apple Pay, Google Pay, Afterpay, Zip) avant le paiement. Preuve : capture du tiroir panier.
5. **Mention d'alignement de prix** (« contactez-nous ») : traite la méfiance sur les prix relevée dans les forums. Preuve : encart sur la fiche.

## Défauts observés

- Tri par prix sans effet visible (ordre identique en croissant et décroissant, y compris par adresse directe) [V].
- Interrupteurs Clearance / Special Offers : compteur inchangé [V].
- Pas de filtre de forme, métal, carat, couleur, pureté ni prix pour 115 bagues [V].
- Une seule référence par taille avec prix différent (1 195 $ en L contre 2 795 $ en N et P) : changement de prix à la sélection d'une taille, non expliqué sur la page [V] ; interprétation (pièces uniques en stock) [S].
- Fenêtre promotionnelle plein écran qui masque la fiche à l'ouverture ; le visuel marketing Klaviyo devient le plus gros élément mesuré (LCP 2,7 à 3,5 s) [V].
- Prix barrés très élevés (remises de 25 à 50 %) avec avertissement que l'ancien prix peut ne pas avoir donné de ventes [V].
- Aucune composition du prix, aucune preuve de fabrication, aucun avis visible [V].
- Taille non sélectionnable sur iPhone dans mon test (3 s) [V].

## Limites de l'audit

- Pas de configurateur : le constructeur n'existe pas ; audit sur une fiche (9 ct jaune ovale 1 ct) et la collection.
- Volets de retours du FAQ, « See more » des mensualités, loupe, quantité, recherche, compte, chat, zone de magasin non testés ou non aboutis.
- Panier testé sur ordinateur seulement ; iPhone : collection, fiche, volets, guide.
- Tri/interrupteurs : l'absence d'effet est un constat à 1,5 à 4,5 s d'attente ; un rendu plus tardif n'est pas exclu.
- Temps du visuel principal : première photo reçue à 0,29 s (ordinateur) et 0,23 s (iPhone) selon les temps de réponse des ressources ; plus gros élément affiché (LCP) : titre H1 à 0,5 à 0,8 s sur fiche, photo à 1,0 s (collection ordinateur) ou 1,4 s (iPhone), puis visuel de la fenêtre promotionnelle à 2,7 à 3,5 s [V].
- Aucune donnée personnelle saisie, aucun paiement, pas de chat.

## Sources

- https://hoskings.com.au/collections/engagement-rings (collection)
- https://hoskings.com.au/products/9ct-yellow-gold-oval-lab-grown-1ct-diamond-solitaire-engagement-ring-245386 (fiche)
- https://hoskings.com.au/help/returns, /help/shipping, /help/payment-options, /help/pricing-policy
- https://hoskings.com.au/product-information/lab-created-diamonds, /product-information/ring-sizing
- Captures : scratchpad `audit/au/hoskings/` (pdp_d.jpg, sg_d.jpg, filt_d.jpg, sort_d.jpg, atc_d.jpg)
