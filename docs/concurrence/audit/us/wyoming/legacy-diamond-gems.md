# Audit : Legacy Diamond & Gems (Sheridan, Wyoming)

- **Site** : Legacy Diamond & Gems ; **adresse** : https://www.legacydiamondgems.com/ ; page de départ : https://www.legacydiamondgems.com/jewelry/bridal/engagement-rings
- **Date** : 15/11/2026 (date imposée ; pages lues le 25/11/2026 d'après l'horloge du poste)
- **Appareils** : Chromium sans écran, ordinateur (1366 × 900) et affichage iPhone 13
- **Statut** : **partiel** (catalogue, filtres, fiche, services lus ; panier interdit par robots.txt, donc ni ajout au panier ni récapitulatif)
- Repères : [V] vérifié, [I] inféré, [S] supposé. Prix en dollars américains. Plate-forme Punchmark (« Powered by Punchmark ») [V].

## Parcours

Pas de configurateur : catalogue de 311 bagues de fiançailles (montures « Semi-Mount » comprises), fiche produit, ajout au panier, plus un service de bijou sur mesure par formulaire. [V]

| Étape | Options |
|---|---|
| Catalogue | filtres (sous-catégorie, prix, métal, pierre, forme), tri, pagination (13 pages), vue en grille, « Quick view », liste de souhaits |
| Fiche produit | photos (2), « Click to expand », Add to Cart, Add to Wish List, fenêtres Shipping / Returns / Warranties |
| Sur mesure (https://www.legacydiamondgems.com/pages/custom-jewelry) | « Start a Project » (formulaire non ouvert), 3 étapes : croquis, rendu CAO 3D, sertissage et finition ; galerie « Inquire » |
| Panier | `/cart` interdit par robots.txt (`Disallow: */cart`) : non ouvert |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Material : 14K Rose / White / Yellow Gold | case | 311 → 205 résultats avec « 14K White Gold » ; l'adresse devient `?materials=14KW`, la liste est rechargée par `/api/fetch/grid/fetch/get_results` | prix visibles dans la grille | fonctionne [V] |
| Filtre Gemstone : Cubic Zirconia, Diamond, Sapphire | case | « Diamond » combiné au métal : 198 résultats (`&gemstone=5`) | : | fonctionne [V] |
| Filtre Stone Shape : cushion, emerald, marquise, oval, pear, princess, round | case | « marquise » seul : 5 résultats (`?diamondshape=5`) | : | fonctionne [V] ; autres formes non cliquées |
| Filtre Price : Under $1,000 ; $1,000-$1,999.99 ; $2,000-$4,999.99 ; $5,000-$9,999.99 ; $10,000+ | case | « $2,000-$4,999.99 » : 250 résultats (`?price=…`) ; **a remplacé** les filtres précédents au lieu de s'y ajouter (avant : métal + gemme) | : | fonctionne ; combinaison incohérente [V] |
| Filtre Subcategory : Engagement Rings, Mens Bands, Womens Bands | case | présents | : | non testé |
| CLEAR ALL | lien | réinitialise | : | non testé |
| Hide Filters / View (grille) | bouton | présents | : | non testés |
| Sort by : Featured, High to Low, Low to High, Newest | liste | **non actionné** : le tri de ce site passe par `?sortSpec=`, interdit par robots.txt | : | non testé (robots.txt) |
| Previous / Next, pages 1 à 13 | lien | pagination (`?page=2` autorisé) | : | non testés |
| Quick view | bouton | fenêtre « Quick view: Engagement Ring », prix 1 197 $, boutons Add to Cart et View Details | 1 197 $ | fonctionne [V] |
| Add this item to my shopping cart / Add to Cart | bouton | appelle le panier ; `/cart` et `/checkout` interdits | : | non testé (panier interdit par robots.txt) |
| Add to Wish List | bouton | liste de souhaits (compte possible) | : | non testé |
| Inquire about this item | bouton | présent sur les articles hors stock (formulaire) | : | non testé (formulaire) |
| Fiche : Shipping | fenêtre | FedEx Priority Overnight (50 $), USPS Priority Mail 2-3 jours (15 $), Priority Mail Express 1-2 jours (40 $), retrait gratuit en magasin ; 50 États, Porto Rico, APO/FPO ; pas d'envoi hors États-Unis | frais affichés | fonctionne [V] |
| Fiche : Returns | fenêtre | texte de la politique de retour (voir plus bas) | : | fonctionne [V] |
| Fiche : Warranties | fenêtre | garantie de 5 ans sur le travail maison (voir plus bas) | : | fonctionne [V] |
| Fiche : Click to expand | bouton | agrandit la photo | : | fonctionne [V] |
| Fiche : vignettes (2 photos) | image | changent la photo principale | : | non testé |
| Fiche : « Choose a shipping option now! » | lien | bandeau « 3 shipping options available to get it by Christmas! » | : | présent |
| Make an appointment | lien | https://www.legacydiamondgems.com/make-an-appointment | : | non ouvert (formulaire) |
| CALL OR TEXT (307) 672-9490 | lien tel | appel ou SMS | : | non testé |
| « Text us » (bulle de chat Podium) | bouton | **non ouvert** (chat) ; la bulle dit « Hi there, have a question? Text us here. » | : | non testé |
| Financing Options | lien | page : carte Synchrony, financement 12 ou 18 mois | : | lu [V] |
| Cookies : Decline all / Accept all | bouton | bandeau ; « Accept all cookies » cliqué | : | fonctionne |
| Abonnement e-mail | champ | non rempli | : | non testé |
| Recherche, compte, liste de souhaits, panier (icônes) | bouton | menus dépliants ; la recherche `?kw=` est interdite | : | non testés |
| Menu (Engagement, Diamonds, Colored Stones, Jewelry & Watches, Services, About) | lien | 100 liens environ ; voir `controls.cjs` | : | non suivis un à un |

Affichage iPhone : 228 contrôles listés ; les mêmes filtres existent (boutons « Subcategory », « Price », « Material »). Les filtres n'ont pas été actionnés sur iPhone. [V]

## Options disponibles

- **Métaux** (filtre de la page) : or 14 k rose, blanc, jaune. Page « Lab Grown » : or 14 k et 18 k blanc et jaune, argent sterling. Platine : non vu dans ce catalogue.
- **Pierres** : cubic zirconia, diamant, saphir ; formes : cushion, emerald, marquise, oval, pear, princess, round.
- **Prix** : 5 tranches.
- **Origine** : page dédiée « Lab Grown Diamond Jewelry » : 61 articles ; titres de fiches « Lab Created Diamond - Engagement Rings », prix 715 à 2 395 $ en première page. Le filtre « Diamond » de la page des bagues ne sépare pas naturel et synthétique. [V] https://www.legacydiamondgems.com/jewelry/lab-grown-diamond-jewelry
- **Taille de doigt** : indiquée sur la fiche (« SIZE 7 ») ; pas de sélecteur relevé.
- **Gravure** : service « Custom Hand Engraving » (page de services) ; les retours de pièces gravées sont refusés.
- **Vues** : 2 photos et agrandissement ; pas de 3D, de 360°, de vidéo, d'essayage ni de RA [V : 0 balise vidéo sur la fiche].

## Prix, délais, retours, garanties

- **Prix** : affichés en première page : 936 à 4 500 $ environ, par exemple 1 197 $ (14 k blanc, diamants baguette et ronds 0,33 ct tw, couleur et pureté **non renseignées** : « COLOR: CLARITY: » vide) [V]. Aucune décomposition du prix.
- **Délai** : « Ships Tomorrow (cutoff time was 2:00 pm MT) » pour les articles en stock ; « Only one left in stock » [V]. Sur mesure : pas de délai chiffré lu.
- **Retours** : 10 jours pour un remboursement complet ; ensuite crédit en magasin ; frais de carte de 3 % sur les retours ; **« Custom ordered merchandise cannot be returned or exchanged »** ; pièces gravées non reprises ; retour en magasin, ou par transporteur au choix du client ; reprise de diamant naturel d'au moins 0,5 ct à 100 % du prix du diamant [V] https://www.legacydiamondgems.com/return-policy.
- **Garantie** : 5 ans sur le travail et les matériaux des créations maison, à condition d'une inspection tous les 6 à 12 mois ; exclusions : accident, usure, perte, vol [V] (fenêtre « Warranties »).
- **Financement** : carte Synchrony, 12 ou 18 mois, carte reçue en 7 à 10 jours ouvrés [V] https://www.legacydiamondgems.com/financing-options. Un logo Sezzle est référencé sur la fiche (image bloquée par mon script, non vue) [I].
- **Panier, frais finaux, moyens de paiement** : non relevés (panier interdit).

## Confiance et service

- Avis : 5 avis (5 étoiles) sur la fiche, « 84 % of recent buyers gave Legacy Diamond & Gems 5 stars » ; avis Google cités sur la page du sur mesure (août et septembre 2026) [V]. Les avis de la fiche concernent le magasin, pas la bague : la même série figure sur les fiches [I].
- Sur mesure : « Sketch Your Design », « 3D CAD Rendering », « Setting & Finishing » ; galerie de réalisations avec bouton « Inquire » [V].
- Services : nettoyage, estimation, achat d'or et de diamants, gravure à la main, mise à taille, rhodiage, réparation, suivi de réparation (« Check Repair Status ») [V]. Lien de suivi de commande de bijou : non relevé.
- Contact : téléphone, SMS, chat Podium, rendez-vous, financement [V]. Pas de WhatsApp.
- Langue : anglais ; devise : USD ; livraison aux États-Unis seulement [V].
- Preuves de fabrication en photo ou vidéo : aucune sur les pages lues [V].

## Points forts à retenir pour JR Diamond

1. **Prix affichés dans la grille et filtrables par tranche** : 311 bagues, filtres de prix, métal, pierre et forme, avec nombre de résultats (« 311 product(s) found »). Preuve : page de départ ; filtre métal 311 → 205.
2. **Fenêtres « Shipping / Returns / Warranties » directement sur la fiche**, sans quitter le produit, avec tarifs de livraison chiffrés (15, 40 et 50 $). Preuve : fenêtres actionnées sur la fiche 18097.
3. **Politique de retour lisible et honnête sur le sur mesure** (« cannot be returned or exchanged »), à comparer avec la question de l'avocat israélien pour JR Diamond. Preuve : https://www.legacydiamondgems.com/return-policy.
4. **Garantie de 5 ans en contrepartie d'une inspection** régulière ; reprise de diamant à 100 % (naturel, 0,5 ct et plus). Preuve : fenêtre « Warranties » et page des retours.
5. **Mention « Ships Tomorrow (cutoff time…) » et « Only one left in stock »** : délai et rareté explicites. Preuve : fiche 18097.
6. **Page dédiée « Lab Grown »** avec ses propres filtres et libellé « Lab Created Diamond ». Preuve : page lab-grown, 61 articles. (JR Diamond emploie « synthétique » en français.)
7. **Quick view** avec prix et ajout au panier depuis la grille. Preuve : fenêtre actionnée.
8. Affichage : premier visuel en 1,8 à 2,1 s.

## Défauts observés

- Pas de configurateur ni de 3D ; deux photos par bague ; pas de vidéo. [V]
- Fiches incomplètes : « COLOR: CLARITY: » vide pour une bague à diamants ; titre générique « Engagement Ring » sur la plupart des articles. [V]
- Les filtres de prix et de métal ne se cumulent pas toujours : le choix d'une tranche de prix a remplacé les filtres précédents (adresse `?price=…` seule). [V]
- Le filtre « Diamond » ne distingue pas naturel et synthétique ; les articles synthétiques sont dans une page à part. [V]
- Aucun détail du prix. Pas de certificat GIA ou IGI affiché sur la fiche relevée. [V]
- Bandeau promotionnel périmé (« CRAZY DAYS AUGUST 6-8 », lu en novembre). [V]
- Retour : 3 % de frais de carte ; retours en magasin seulement ; pas de livraison hors États-Unis. [V]

## Limites de l'audit

- `robots.txt` interdit `*/cart`, `*/checkout`, `*/login`, `*/myaccount`, `*?kw=`, `*?sortSpec=`, `*?showAll=` : panier, compte, recherche, tri et « tout afficher » **non testés**. Mon script a bloqué ces adresses côté navigateur. Aucun bouton « Add to Cart » n'a été cliqué.
- Les fenêtres de connexion s'ouvrent au clic de la liste de souhaits ou du compte : non ouvertes.
- Filtres : seuls métal, gemme, prix et la forme marquise ont été actionnés, sur ordinateur. Les chiffres de résultats viennent du compteur de la page.
- Chat Podium, rendez-vous, formulaire « Start a Project », « Inquire » : non ouverts.
- Mon premier script de filtres a, par erreur de configuration, bloqué des scripts statiques du panier (`cartEngine.min.js`) : les clics ont été refaits sans ce blocage.
- Une seule page de catalogue (page 1) lue ; les prix ci-dessus viennent de cette page.

## Mesures

| Appareil | Premier visuel (image du catalogue) |
|---|---|
| Ordinateur | environ 1,8 à 2,1 s après `domcontentloaded` (2 mesures : 2,09 s, 1,77 s sur l'iPhone) |
| iPhone 13 | environ 1,8 s (1 mesure) |

## Sources

- https://www.legacydiamondgems.com/jewelry/bridal/engagement-rings (+ `?materials=14KW`, `?diamondshape=5`, `?price=2000-4999.99`)
- https://www.legacydiamondgems.com/jewelry-details/engagement-rings/engagement-ring/18097
- https://www.legacydiamondgems.com/return-policy
- https://www.legacydiamondgems.com/financing-options
- https://www.legacydiamondgems.com/pages/custom-jewelry
- https://www.legacydiamondgems.com/jewelry/lab-grown-diamond-jewelry
- robots.txt de legacydiamondgems.com (`Crawl-delay: 2`)
- Inventaire : `docs/concurrence/audit/us/wyoming/INVENTAIRE.md`
