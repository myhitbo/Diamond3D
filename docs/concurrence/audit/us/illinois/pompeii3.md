# Audit : Pompeii3 (Illinois)

- **Site** : Pompeii3 (Libertyville, Illinois ; plateforme BigCommerce), « Family-owned since 1919 », « Made-to-order rings crafted in the USA » [V, page de départ et pied de page]
- **Adresse** : https://www.pompeii3.com/
- **Page de départ** : https://www.pompeii3.com/build-a-ring/
- **Date** : 15/11/2026 (date de l'étude ; relevés pris à l'ouverture de cette session, en pleine opération « Black Friday » : minuteur « Ends in 06 days », prix barrés à -50 %)
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) ; Chromium en affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le « Build a Ring » est vérifié jusqu'à son blocage (étape 1 vide). La fiche d'une bague a été actionnée. Le panier n'a pas été atteint : `/cart.php` est interdit aux robots d'IA (voir « Limites »).
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) ; **[I]** inféré ; **[S]** supposé. Prix en dollars américains. Rythme respecté : une page toutes les 10 s au plus (`Crawl-delay: 10` du `robots.txt`).

## Parcours

| Étape | Options | Prix |
|---|---|---|
| Page d'accueil du constructeur | « Create your own engagement ring », 3 étapes : Choose a Diamond, Choose a Setting, Complete Your Ring ; bouton « BUILD MY RING » ; liens « Ring Education », « Custom Ring Design », « Customer Care » [V, /build-a-ring/] | aucun |
| 1. Choose a Diamond | `/build-a-ring/diamonds/` : cinq sous-pages de forme (Cushion, Oval, Pear, Princess Cut, Round) ; barre « Refine by » avec facettes Shape, Type, Carat, Cut, Color, Clarity, Certification, Treatment, Price ; tri (Featured, Newest, Best Selling, A to Z, Z to A, By Review, Price asc/desc) [V] | **« There are no products listed under this category. »** [V] |
| 2. Choose a Setting | non atteignable : l'étape 1 ne donne aucune pierre à choisir [V] | n/a |
| 3. Complete Your Ring | page décrite seulement : garantie étendue de 5 ans et expertise d'assurance en option [V, texte de /build-a-ring/] | n/a |
| Voie de remplacement | Catalogue de bagues finies (`/engagement-rings/solitaire/` : 345 résultats), fiche produit avec taille et ajout au sac [V] | prix fixe par modèle |

## Contrôles vérifiés

Pages : `/build-a-ring/` (controls.cjs : 272 contrôles sur ordinateur, 245 sur iPhone, dont le menu et le pied de page), `/build-a-ring/diamonds/`, `/build-a-ring/diamonds/round-diamonds/`, `/engagement-rings/solitaire/`, fiche https://www.pompeii3.com/1ct-round-diamond-solitaire-engagement-ring-clarity-enhanced-h-i-i1/.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| BUILD MY RING / STEP 1 Choose a Diamond | lien | Mène à `/build-a-ring/diamonds/`, qui s'affiche sans pierre | aucun | cassé (liste vide) |
| Cushion Diamonds, Oval, Pear, Princess Cut, Round Diamonds (5) | lien | Round : « Showing 0 Results », « There are no results to refine » ; les quatre autres liens n'ont pas été ouverts (même gabarit [I]) | n/a | cassé (Round) / non testé |
| Facettes Shape, Type, Carat, Cut, Color, Clarity, Certification, Treatment, Price | filtre | Présentes en en-têtes ; aucune valeur sélectionnable puisque 0 résultat | n/a | non testé (liste vide) |
| Sort By (7 tris) | liste | Présente ; aucun effet possible sans résultat | n/a | non testé |
| Menu Engagement Rings : style (Solitaire, Halo, Three Stone, Side Stones, Hidden Halo, Vintage, Bridal Sets, Moi Et Toi, Certified, Top Sellers, New Arrivals), forme (8), métal (4), type (Diamond, Lab-Grown, Black, Blue, Moissanite, Gemstone) | liens | Pages de catalogue ; seule `/engagement-rings/solitaire/` ouverte | n/a | OK (1 sur ~30 ouverts) |
| Filtres du catalogue Solitaire : Metal, Carat Weight, Stone Type, Shape, Metal Purity, Handling Time, More Filters | filtre | Présents, 345 résultats ; valeurs non actionnées | n/a | non testé |
| Tri du catalogue (Most Popular, Newest, Price, Name) ; 40/80/120 par page | liste | Présents ; non actionnés | n/a | non testé |
| Carte de produit « QUICK VIEW », « CHOOSE OPTIONS » | bouton | Présents sur chaque carte ; non actionnés | n/a | non testé |
| Taille (4 à 10 par demi-taille ; 13 valeurs) | liste et boutons radio | Liste « Select Size » lue ; le choix de 7 ne change pas le prix (724,79 $) ; clic sur les boutons de taille : sans effet visible | aucun | OK (liste), clic radio échoué |
| « All options » / « Ready to ship » | bouton | Présents sur la fiche ; non actionnés | n/a | non testé |
| Appraisal Certificate (+120,99 $) ; Thicker Band, 4 grammes et 5 mm (+482,79 $) | case | Libellés cliqués : le prix du bouton reste 724,79 $ ; effet non établi (le supplément ne s'affiche pas avant le sac) | annoncé, non observé | partiel |
| ADD TO BAG – 724,79 $ | bouton | **Non cliqué** : l'ajout mène au sac `/cart.php`, interdit par `robots.txt` | n/a | non testé |
| Galerie de 5 vues | images | 27 grandes images sur la page ; photos de la bague, sur la main, sur tissu, écrin ; aucune vidéo, aucun canvas 3D (`video` 0, `canvas` 0 ; 4 iframes) | aucun | OK |
| ADD TO WISHLIST, DROP A HINT | bouton | Présents ; non actionnés (pas de compte, pas de formulaire) | n/a | non testé |
| Accordéons Overview, Details, Return Policy, FAQs | accordéon | Details : référence, largeur 1,65, poids 2,2 g, 14 k blanc, carat 1, coupe ronde brillante, couleur F-G, pureté VS1, « Created Diamond » ; Return Policy : 30 jours | aucun | OK |
| Check your purchasing power (Affirm) | lien | « Starting at $44/mo or 0% APR with Affirm » ; fenêtre non ouverte | n/a | non testé |
| Live Chat (Tidio), Virtual Appointment, Call 24/7, Order Tracker | bouton, liens | Chat non ouvert ; `/order-status-tracker/` lue : formulaire « TRACK MY ORDER » (non rempli) | n/a | OK (lecture) |
| Truly Custom : START CREATING | bouton | Page lue ; portail non ouvert | n/a | non testé |
| Ensemble sur iPhone | tous | Largeur de page 390 / 390 (aucun débordement horizontal) sur fiche et `/diamonds/` ; contrôles non actionnés en mobile | n/a | partiel |

## Options disponibles

- **Constructeur** : forme de pierre (5 sous-pages : coussin, ovale, poire, princesse, ronde), facettes Type, Carat, Cut, Color, Clarity, Certification, Treatment, Price [V]. **Aucune pierre listée**, donc aucune option réellement choisissable.
- **Catalogue (menu)** [V] : styles Solitaire, Halo, Three Stone, Side Stones, Hidden Halo, Vintage, Bridal Sets, Moi Et Toi ; formes rond, princesse, ovale, coussin, émeraude, marquise, poire, radiant ; métaux or blanc, jaune, rose, platine ; pierres : diamant, diamant synthétique, noir, bleu, moissanite, gemme.
- **Fiche** : taille 4 à 10, garantie étendue en option, appraisal, bande plus épaisse [V]. Pas de gravure, de griffes, de pavage choisissables ; métal fixé par modèle [V sur la fiche lue].
- **Sur-mesure « Truly Custom »** [V, https://www.pompeii3.com/truly-custom-jewelry/] : boucles d'oreilles, fiançailles, collier, bracelet, anniversaire, gemme ; envoi d'inspirations sur un portail, rendus en 48 heures, livraison « in as little as 20 days ».

## Prix, délais, retours, garanties

- **Prix** [V] : prix barré puis prix remisé, « SAVE $724.79 (50%) » ; exemple fiche : 1 449,58 $ barré, **724,79 $** (1 ct synthétique rond, F-G VS, or 14 k blanc) ; catalogue solitaire de 591,61 $ (moissanite 2 ct) à 2 540,99 $. Aucune décomposition (métal, pierre, main-d'œuvre) ; la page « Choose a Diamond » ne permet pas non plus d'ajouter monture et pierre [V].
- **Délai** [V, /shipping/] : transit après fin de production ; « Some items may require up to 15 business days before shipment » ; sur-mesure plus long ; commandes après 8 h CST traitées le jour suivant. Fiche : étiquette « Ships in 1 day » sur le catalogue Solitaire.
- **Livraison** [V] : « Free Shipping » affiché partout ; USPS First Class 4 à 10 jours, Priority 3 à 4, FedEx 2-Day Express 1 à 2 jours ouvrés après expédition ; international : droits et taxes à la charge du client, pas de déclaration sous la valeur ; assurance incluse ; **signature au-dessus de 500 $** ; pas de retenue en point relais ; adresse non modifiable.
- **Retours** [V, /returns/] : 30 jours après livraison, demande d'autorisation (réponse sous 48 heures ouvrées) ; état neuf, non porté, non mis à taille ; **pas d'étiquette de retour prépayée** ; « Extended Holiday Returns » jusqu'au 1er janvier 2027 pour les achats du 5 novembre au 31 décembre 2026 ; **« All custom orders remain nonrefundable »** ; réparations suspendues à partir du 26 novembre 2026.
- **Garanties** [V, /warranty/ et fiche] : bandeau « 180 Days Warranty » ; plan étendu de 5 ans à acheter dans les 30 premiers jours (inspections, réparations ; exclut pertes, vol, pierres de 1/5 ct ou plus ; annulé si un autre bijoutier intervient ; port aller-retour à la charge du client) ; certificat d'authenticité gratuit annoncé sur la fiche.
- **Paiement** [V] : Affirm (0 % APR annoncé, mensualité de 44 $ dans l'exemple), crédit-bail (« Lease to own »), page `/financing/` ; moyens de paiement du panier non vus.
- **Libellé du synthétique** [V] : « Lab Grown », « Lab Created », « Created Diamond » ; étiquette « Lab Grown Diamond » sur les cartes.
- **Langues, devises** : anglais, dollar [V].

## Confiance et service

- **Avis** [V] : « 50,000+ Reviews » en bandeau ; sur la fiche, « 4 Reviews » pour ce produit, témoignages Google et The Knot ; « Over 3,000 5-star reviews on Google », 4,5 étoiles [lu sur capture]. Note BBB (« Accredited Business ») dans le pied de page.
- **Service** [V] : téléphone « Call 24/7 » (847) 367-7022 ; page d'aide indiquant lundi à jeudi 8 h à 11 h 59 CST, vendredi 10 h 30 à 12 h 30, fermé le week-end ; chat Tidio ; rendez-vous virtuel ; suivi de commande ; annulation ou modification de commande.
- **Preuves de fabrication** [V] : « Made by us », « Best Price. No Markup. We ship direct from the manufacturers », « Made in USA » ; aucune photo ou vidéo d'atelier ni de commande sur les pages lues ; seul le portail sur-mesure promet des rendus à 48 heures.
- **Incohérence** : « Since 1919 » (en-tête) et « Since 1969 » sur la page « About », relevée par l'inventaire [S2].

## Points forts à retenir pour JR Diamond

1. **Sur-mesure en trois temps et un nombre de jours** : envoi de l'inspiration, rendus en 48 heures, livraison en 20 jours (« in just 20 days ») [V, /truly-custom-jewelry/].
2. **Rendu avant fabrication** présenté comme argument de réassurance [V, même page].
3. **Politique de livraison détaillée** : transporteurs, délais par mode, signature au-dessus de 500 $, assurance incluse, règle de colis non livré à 10 jours [V, /shipping/].
4. **Retour « extended holiday »** daté et chiffré, avec la règle des colis dont le suivi doit bouger avant le 1er janvier [V, /returns/] : modèle de transparence sur les dates.
5. **Garantie étendue vendue à l'étape 3** (5 ans) et expertise d'assurance en option : idée de revenu additionnel [V, /build-a-ring/ et /warranty/].
6. **Spécifications de fiche** utiles : poids du métal (2,2 g), largeur, couleur et pureté, nature « Created Diamond » [V, fiche].

## Défauts observés

- **Constructeur inutilisable** : l'étape 1 (`/build-a-ring/diamonds/`) affiche « There are no products listed under this category. » et la forme Round « Showing 0 Results » ; le bouton « BUILD MY RING » aboutit à une impasse [V, ordinateur]. Cause non établie (stock vide, panne, ou gamme retirée) [S].
- **Aucune 3D, vidéo, 360° ni essayage** sur la fiche : galerie de 5 photos [V].
- **Prix** remisé de 50 % partout pendant l'opération, sans explication de la remise ni du prix de référence ; aucune décomposition du prix [V].
- **Pas d'étiquette de retour prépayée** ; sur-mesure non remboursable [V].
- Chargement lent : fiche, charge complète 6,9 à 9,1 s selon l'appareil [V, voir « Limites »] ; ressources tierces bloquées ou refusées en test (suivi publicitaire) et deux appels `customer/current.jwt` en 404 [V, journal réseau].
- Suppléments « Appraisal » et « Thicker Band » : prix du bouton inchangé après le clic sur le libellé ; ambiguïté sur le moment où ils s'ajoutent [V, partiel].
- Réparations suspendues à partir du 26 novembre 2026 : turnaround « up to two months » [V, /returns/].

## Limites de l'audit

- `robots.txt` (https://www.pompeii3.com/robots.txt) : le groupe qui vise `ClaudeBot`, `Claude-Web` et `anthropic-ai` autorise le site mais interdit `/cart.php`, `/checkout`, `/account.php`, `/login.php`, `/search.php`, `/finishorder.php`, avec `Crawl-delay: 10`. Le panier, le tunnel de commande, le compte et la recherche n'ont donc pas été ouverts ; les liens du menu vers `/search…` n'ont pas été suivis. Panier, frais de livraison et moyens de paiement du panier : **non vus**. (L'outil de contrôle a répondu AUTORISÉ pour `/cart`, mais le bouton mène à `/cart.php`, interdit.)
- Aucun formulaire rempli ; chat, crédit-bail, Affirm, retour, rendez-vous et portail Truly Custom non ouverts.
- Une seule fiche actionnée (1 ct rond synthétique) ; les étapes 2 et 3 du constructeur n'ont jamais pu être atteintes ; sous-pages Cushion, Oval, Pear, Princess non ouvertes ; affichage iPhone : chargement seul.
- Mesures (Playwright, une mesure par cas, réseau de l'environnement ; 4 s d'attente) : visuel principal de la fiche, plus grand élément : ordinateur 2,5 s (image de fond de bandeau, puis un pictogramme de chargement à 3,0 s), iPhone 2,1 s (titre) puis 3,1 s (photo de la bague) ; accueil du constructeur, ordinateur : 2,1 s (bandeau), 2,6 s (image principale) ; `/diamonds/` iPhone : 1,7 s (titre), 2,3 s (bandeau). Chargement complet : fiche 9,1 s ordinateur, 6,9 s iPhone ; accueil 5,6 s ; `/diamonds/` iPhone 5,1 s. Les pierres elles-mêmes n'apparaissent jamais (liste vide).
- Prix et minuteur d'opération changent avec la date.

## Sources

1. Accueil du constructeur : https://www.pompeii3.com/build-a-ring/
2. Étape 1 : https://www.pompeii3.com/build-a-ring/diamonds/ ; https://www.pompeii3.com/build-a-ring/diamonds/round-diamonds/
3. Catalogue : https://www.pompeii3.com/engagement-rings/solitaire/
4. Fiche : https://www.pompeii3.com/1ct-round-diamond-solitaire-engagement-ring-clarity-enhanced-h-i-i1/
5. Livraison : https://www.pompeii3.com/shipping/
6. Retours : https://www.pompeii3.com/returns/
7. Garantie : https://www.pompeii3.com/warranty/
8. Sur-mesure : https://www.pompeii3.com/truly-custom-jewelry/
9. Suivi : https://www.pompeii3.com/order-status-tracker/
10. robots.txt : https://www.pompeii3.com/robots.txt
11. Inventaire de l'Illinois : `docs/concurrence/audit/us/illinois/INVENTAIRE.md`
