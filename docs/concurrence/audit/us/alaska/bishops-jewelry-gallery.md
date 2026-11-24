# Audit : Bishops Jewelry Gallery, catalogue Shopify de bagues prêtes à expédier (Fairbanks, Alaska)

| | |
|---|---|
| Site | Bishops Jewelry Gallery : https://bishopsjewelry.com/ (Shopify ; boutique au 32 College Rd, Suite 22M, Fairbanks) |
| Page de départ | https://bishopsjewelry.com/pages/bridal-landing |
| Date | 15/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour ce qui est lisible (pas de configurateur : catalogue et sur-mesure en boutique). Panier visité vide ; ajout au panier non actionné (voir Limites) |

Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | État |
|---|---|---|
| 1. `/pages/bridal-landing` | 5 collections : Natural Diamond Rings, Natural Semi-Mount, Lab Diamond Rings, Lab Grown Semi-Mount, Colored Stone Rings ; vignettes par forme (rond, ovale, poire, asscher, princesse…) ; bouton « START THE PROCESS » (sur-mesure) | [V] |
| 2. Collection `/collections/engagement-ring-diamond-complete` | 31 produits (naturel), 52 produits (lab, `…lab-grown-diamond-complete`) ; 10 groupes de filtres, tri | [V] |
| 3. Fiche `/products/diamond-engagement-ring-14` | prix, stock, « ADD TO CART », retrait en boutique, « SHIPPING INFORMATION », « ASK A QUESTION » | [V] |
| 4. Panier `/cart` | « Your cart is currently empty », liste « Popular picks » (4 « Example product $29 ») | [V] |
| 5. Sur-mesure `/blogs/services/custom-design` | 4 étapes : exploration, devis et conception (acompte 300 $), finalisation (acompte 50 %), présentation | [V] lu |

## Contrôles vérifiés

Relevé automatique de la page de départ : 80 contrôles sur ordinateur, 53 en iPhone. Les contrôles de la collection et de la fiche sont relevés sur les pages respectives.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Birthstones, Oval, Stacks, Round, Emerald, Men's Bands, Pear, Pearls, Wedding Rings, Good Friends (10 boutons) | boutons de méga-menu | ouvrent des sous-menus de collections | n/a | [V] présents ; sous-menus non tous ouverts |
| BRIDAL, RINGS, EARRINGS, BRACELETS, NECKWARE, GIFTS | `details` de navigation | déroulent les catégories | n/a | [V] présents |
| BY GEMSTONE / CUSTOM MADE | liens | `/pages/collection-search-by-stone`, `/pages/collection-custom-made` | n/a | [V] liens ; CUSTOM MADE ouvert (autorisé) |
| LOG IN | lien | `/account` : interdit par robots.txt, non ouvert | n/a | [non testé : robots.txt] |
| SEARCH | lien | `/search` | n/a | [V] lien, non utilisé |
| CART | lien | `/cart` : panier vide | n/a | [V] |
| Pause slideshow | bouton | met en pause le diaporama d'accueil | n/a | [V] présent |
| Bandeau « NOVEMBER BIRTHSTONE – CITRINE » | lien | `/collections/citrine` | n/a | [V] lien |
| Fenêtre « Save 10 % off your first purchase » + e-mail + SUBSCRIBE + « Close (esc) » | fenêtre modale | s'affiche à l'arrivée ; offre 10 % sur le premier achat contre e-mail ; e-mail non saisi | −10 % annoncé | [V] affichage ; envoi non testé (formulaire) |
| 5 liens de collection (Natural Diamond Rings, Semi-Mount, Lab Diamond Rings, Lab Semi-Mount, Colored Stone) | liens | collections 31 et 52 produits relevées (naturel, lab) | affichés par produit | [V] naturel et lab ouverts ; les autres non |
| Vignettes de formes (9, ex. `/collections/round-bridal`) | liens | collections par forme | n/a | [V] liens non ouverts |
| START THE PROCESS (+ 2 images) | liens | `/blogs/services/custom-design` | acompte 300 $ | [V] lu |
| Filtre STYLE | cases | Bypass, Halo, Love Bright, Solitare, Solitare Accent, Three Stone, Tiffany | filtre | [V] options listées ; non cliquées |
| Filtre PRICE | bouton | volet de prix ; non ouvert | filtre | [non testé] |
| Filtre RING SIZE | cases | 4,75 / 5,5 / 6 / 6,5 / 6,75 / 7 / 7,25 / 8,5 (collection naturelle) | filtre | [V] listées |
| Filtre METAL TYPE | cases | 14 k, 18 k, 14 k + pépite d'or d'Alaska, platine | filtre | [V] ; test URL `?…Metal=Platinum` : 4 produits (12 000 $, 4 175 $, 12 970 $, 2 750 $) |
| Filtre METAL COLOR | cases | Rose, Two Tone, White, Yellow | filtre | [V] listées |
| Filtre STONE TYPE | cases | Diamond, Lab Diamond | filtre | [V] listées |
| Filtre STONE SHAPE | cases | Cushion, Emerald, Oval, Pear, Princess, Rose Cut, Round, Square Cushion, Various Shapes | filtre | [V] listées |
| Filtre PURCHASE OPTIONS | case | « In Store (52) » en lab | filtre | [V] |
| Filtre CARAT WEIGHT | cases | tranches (≤1/4, 1/4–1/2, 1/2–3/4, 3/4–1, 1,0–1,5, 1,5–2,0, 2,0–3,0 ct ; lab : 52 produits, 17 entre 1,5 et 2,0 ct) et valeurs exactes (0,99 à 4,14) | filtre | [V] listées |
| Filtre BRAND | cases | ASHI Diamonds, Bishops Assembled, Bishops Jewelry Line, Consignment for customers, Costar, Discovery Gems, Imagine Bridal, River Diamond, Stuller, Tosco | filtre | [V] listées |
| Aucun filtre pureté, couleur du diamant ni certificat | n/a | absents | n/a | [V] |
| SORT (select : Featured, Most relevant, Best selling, A–Z, Z–A, prix croissant/décroissant, date) | liste | changer le tri ajoute `sort_by` à l'adresse, interdit par robots.txt : non actionné | n/a | [non testé : robots.txt] |
| Combinaison de filtres | n/a | les adresses à filtres multiples ou `+` sont interdites : non testé | n/a | [non testé : robots.txt] |
| Quick view (28 boutons par page) | bouton | essai d'ouverture : la fenêtre « 10 % » s'est affichée à la place (clic bloqué), aperçu non vérifié | n/a | [partiel] |
| ADD TO CART | bouton | non actionné : le thème appelle `/cart/add` ou `/cart.js`, interdits par robots.txt | 1 510 $ | [non testé : robots.txt] |
| More payment options | lien | options de paiement accélérées (Shop Pay etc.) ; non ouvert | n/a | [V] présent |
| View store information | lien | disponibilité en retrait : « Usually ready in 24 hours » | n/a | [V] |
| SHIPPING INFORMATION | bouton | déroule le texte de livraison | frais calculés | [V] présent |
| ASK A QUESTION (nom, e-mail, envoyer) | formulaire | non rempli | n/a | [non testé : règle formulaires] |
| Partager (Facebook, Pinterest) | liens | partage social | n/a | [V] présents |
| Call For Assistance 907-479-7001 | texte/lien | téléphone | n/a | [V] |
| Pied : politiques, financement, services (réparation, gravure, estimation, plan de service…) | liens | pages `/pages/…`, `/blogs/services/…` | n/a | [V] 40 liens ; 5 lus |
| Newsletter pied de page | formulaire | non rempli | n/a | [non testé] |
| Vues photo/vidéo/360°/3D/AR/zoom sur la fiche | n/a | pas de 3D ni AR relevés ; photos seulement [S : galerie non explorée] | n/a | [V] aucun contrôle relevé |
| Comparer, enregistrer/favoris, essayage à domicile, chat, WhatsApp | n/a | non trouvés | n/a | [V] absents |

## Options disponibles

- Collections [V] : diamant naturel (31), diamant lab (52), montures vides naturel et lab, pierres de couleur ; par forme et par pierre de naissance.
- Filtres [V] : style (7), taille de doigt (8 valeurs), métal (14 k, 18 k, 14 k + pépite d'Alaska, platine), couleur de l'or (4), type de pierre (naturel, lab), forme (9), carat (tranches et valeurs), marque (10 fournisseurs), prix, tri (9).
- Fiche produit [V] : aucun variant (pas de choix de taille ni de métal), le produit est une pièce unique en stock ; mention « Halo 14 Karat Gold Yellow Various Shapes Diamonds Center ».
- Sur-mesure en boutique [V] : consultation gratuite, CAO imprimée en résine à essayer, cire sculptée à la main possible ; diamants naturels et de laboratoire.

## Prix, délais, retours, garanties

- Prix affichés en dollars, sans décomposition (une seule ligne, « Regular price $1,510.00 ») [V]. Fourchettes de la collection naturelle : de 1 188 $ à 14 000 $ pour les premières pièces listées [V].
- Expédition : traitement 3 jours ; envoi sous 1–3 jours ouvrés ; Standard 5 à 7 jours ouvrés, 15 $ ; retrait en boutique gratuit, prêt sous 24 h ; livraison locale dans 15 miles [V, /policies/shipping-policy].
- Retours en ligne : 10 jours après réception pour remboursement complet, frais de retour à la charge du client, envoi assuré ; échange avec crédit 30 jours ; articles sur mesure, commandes spéciales, gravés ou modifiés (mise à taille) non remboursables ni échangeables [V, /pages/terms-and-return-policy-on-line-orders].
- Sur-mesure : acompte non remboursable de 300 $ (déduit de la facture finale), 50 % à la finalisation, environ 3 semaines après approbation du design [V, /blogs/services/custom-design].
- Financement : Wells Fargo, Synchrony 6 mois à 0 % pour clients qualifiés, layaway sur 6 mois ; cartes MasterCard, Visa, American Express [V, /pages/financing].
- Prix « sujets à changement » ; une commande peut être annulée si le prix est erroné ; le prix peut suivre le marché des métaux et des pierres [V, /pages/online-sales-policy].
- Garantie : « Extended Service Plan » en pied de page [V, lien présent], contenu non lu. Panier : récapitulatif, frais et moyens de paiement non vérifiés faute d'ajout au panier.

## Confiance et service

- Boutique à Fairbanks, gemmologues et orfèvres en interne [V]. Catalogue de pages de formation : 4 C (`/pages/diamond-4cs-1`), choix du métal, glossaire, gravures [V, liens].
- Services : réparation, restauration, gravure, expertise, rachat d'or, montage temporaire, plan de service [V, liens].
- Langue : anglais ; devise : dollar US.
- Preuves de fabrication : CAO résine essayable avant fonte [V, texte] ; pas de photos ni vidéos d'atelier relevées, pas de suivi de commande décrit.
- Avis clients : aucun relevé sur les pages lues.
- Libellé synthétique : « Lab Diamond » / « Laboratory Grown » [V].

## Points forts à retenir pour JR Diamond

- Filtre d'origine naturel / lab visible dès la page « bridal » avec compte de produits (31 et 52) [V, collections].
- Filtres riches (style, taille de doigt, métal avec platine, forme, carat en tranches) sur le catalogue [V].
- Étapes du sur-mesure expliquées, avec acompte chiffré et délai (« environ 3 semaines ») [V, /blogs/services/custom-design].
- Modèle CAO imprimé en résine à essayer pour valider avant fonte : rejoint la promesse « ce que vous voyez existe » [V].
- Retrait en boutique « prêt en 24 h » et financement à 0 % sur 6 mois [V].

## Défauts observés

- Fenêtre de 10 % bloquante à l'arrivée ; elle a intercepté un clic sur « Quick view » [V].
- Fiches sans variantes : pas de choix de taille ni de métal sur la fiche (la taille est un filtre de stock) [V].
- Sur mesure et pièces uniques : aucun configurateur ; prix non décomposé [V].
- Dans l'audit : le panier vide affiche quatre « Example product $29 » (produits d'exemple du thème) [V].
- Délai d'expédition : 3 jours de traitement, puis 1–3 jours, puis 5–7 jours, trois fourchettes cumulées [V].
- Aucun filtre pureté, couleur ni certificat sur les bagues [V].
- Mesure iPhone de la fiche produit non concluante (aucune image large détectée en 25 s, seuil de mesure) [I].

## Limites de l'audit

- robots.txt interdit : `sort_by`, adresses de collections avec `+`, filtres multiples, `/cart/…`, `/cart.js`, `/account`, `/checkout`. Donc : tri, filtres combinés, ajout au panier, compte et checkout non actionnés. Un filtre simple à une seule valeur a été chargé par adresse directe (platine, 4 résultats) ; les autres filtres ont seulement été listés.
- Panier ouvert vide (`/cart` autorisé) ; récapitulatif, livraison au panier et moyens de paiement du panier non vus.
- Quick view, filtre prix, galerie de la fiche, avis non explorés ; chat et formulaires non ouverts.
- Temps d'apparition du visuel principal (première image large dans la fenêtre) : page « bridal » 755 ms (ordinateur) et 623 ms (iPhone) ; fiche produit 534 ms (ordinateur) ; iPhone fiche : non concluant. Une exécution par appareil [V].
- Pas d'audit de pages hors pistes citées ; les pages de politique ont été lues partiellement (premiers 1 200 à 1 800 caractères).

## Sources

- https://bishopsjewelry.com/pages/bridal-landing (ordinateur, iPhone, 15/11/2026)
- https://bishopsjewelry.com/collections/engagement-ring-diamond-complete et …/engagement-ring-lab-grown-diamond-complete
- https://bishopsjewelry.com/collections/engagement-ring-diamond-complete?filter.p.m.itemDetails.Metal=Platinum
- https://bishopsjewelry.com/products/diamond-engagement-ring-14
- https://bishopsjewelry.com/cart
- https://bishopsjewelry.com/pages/terms-and-return-policy-on-line-orders, /policies/shipping-policy, /pages/financing, /blogs/services/custom-design, /pages/online-sales-policy
- https://bishopsjewelry.com/robots.txt
- Captures et relevés JSON : scratchpad `audit/us/bishops-jewelry-gallery/`
