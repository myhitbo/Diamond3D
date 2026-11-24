# Audit : Farsi Jewelers (Sandy Springs, Géorgie)

- **Site** : Farsi Jewelers, https://farsijewelers.com/ (Shopify). Page de départ : https://farsijewelers.com/pages/build-your-engagement-ring-farsi-jewelers
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900, affichage iPhone 13.
- **Statut** : **partiel**. Le constructeur est une iframe du catalogue Stuller (`farsijewelers-frame-categoryembed-catid15.jewelershowcase.com/browse/wedding-and-engagement`) dont le robots.txt porte « Disallow: / » : **ni lue, ni actionnée**. Le navigateur l'a chargée avec la page (comportement normal d'un visiteur) ; seul le texte de la page hôte a été lu. Le reste du site (fiche avec 3D, collection, politiques, panier) est audité.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains, relevés le 15/11/2026.
- robots.txt du site : `/cart/` est interdit (`Disallow: /cart/`) : l'ajout au panier (`/cart/add`) n'a pas été fait ; la page `/cart` (autorisée) a été lue.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Page de présentation | « BUILD YOUR SETTING » (monture, style, métal) puis « SELECT YOUR DIAMOND » (forme et carat) puis « Request this item » [V] | page de départ |
| 2. Constructeur (iframe Stuller) | Forme et taille de pierre, métal, taille de doigt, gravure, alliance assortie, prix en direct, bouton « Request this Item » [V, d'après le texte de la page hôte seulement ; l'iframe n'a pas été lue] | texte de la page de départ |
| 3. Demande | « Request this item » : la demande arrive à l'atelier, sans paiement ; l'atelier confirme dessin et taille, puis invite à choisir la pierre au salon [V, texte] | page de départ |
| 4. Choix de la pierre | En salle, avec le gemmologue GIA ; ou pierre apportée par le client [V, texte] | page de départ |
| 5. Fabrication | « Most rings are finished in 2–3 weeks » [V] | page de départ |
| Autre voie : fiche d'une bague de la maison | Galerie photo et vidéo, essai 3D / réalité augmentée, « Add to cart » (non actionné) [V] | fiche lue (ci-dessous) |

## Contrôles vérifiés

Page de départ : 47 contrôles listés sur ordinateur, 43 en affichage iPhone (controls.cjs). L'iframe n'est pas comptée.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Book a free appointment | lien | mène à /pages/appointments (non ouvert) | n/a | présent [V] |
| Search | bouton | recherche du site (non ouverte : chemins de recherche non contrôlés) | n/a | non testé |
| BRIDAL JEWELRY / JEWELRY COLLECTION / CUSTOM DESIGN / SERVICES & RESOURCES / ABOUT US | boutons de menu | ouvrent des sous-menus | n/a | présents [V], sous-menus non parcourus |
| APPOINTMENTS | lien | /pages/appointments | n/a | présent [V] |
| LOG IN | lien | /customer_authentication/redirect (compte) | n/a | non ouvert (compte) |
| CART 0 ITEMS | bouton | panier ; /cart lu : « Your cart is empty », « CONTINUE SHOPPING » | n/a | fonctionne [V] |
| PAUSE ANIMATION (×2) | bouton | arrête le bandeau défilant | n/a | présent [V], non actionné |
| Ring builder (iframe Stuller) | iframe | **non lue** (robots.txt du domaine : Disallow: /) | « live, up-to-the-day pricing » [V, texte] | non testé : interdit |
| Vidéo YouTube du constructeur | iframe | « See the Ring Builder in Action » (youtube.com/embed/50oYLK5t2EY) | n/a | présente [V], non lue |
| bring your own stone | lien | /pages/bring-your-own-stone-custom-setting | n/a | présent [V] |
| Farsi 3D Bespoke Method | lien | page de méthode, lue (voir Confiance) | n/a | fonctionne [V] |
| gallery of real Farsi pieces | lien | https://photos.farsijewelers.site/ (autre domaine) | n/a | non ouvert |
| Diamond Shape Guide | lien | guide des formes | n/a | présent [V] |
| Lifetime Care | lien | page lue : nettoyage et inspection gratuits | n/a | fonctionne [V] |
| REVIEWS / FAQ / POLICY CENTER / CONTACT / HOURS / AI FEED | liens | pages ; REVIEWS, POLICY CENTER lues | n/a | présents [V] |
| REFUND / PRIVACY / TERMS / SHIPPING POLICY | liens | REFUND et SHIPPING lues | n/a | fonctionnent [V] |
| Facebook, Instagram, YouTube, TikTok, X, Pinterest | liens | réseaux sociaux (externes) | n/a | non ouverts |

Fiche produit « 14K Yellow Gold 3 CT East-West Lab-Grown Emerald-Cut Engagement Ring » (https://farsijewelers.com/collections/virtual-try-on/products/14k-yellow-gold-3-ct-east-west-lab-grown-emerald-cut-engagement-ring), ordinateur :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Galerie, 7 vignettes (photos et 2 vidéos « Play video ») | boutons | changent l'image principale (photos de la bague, rendu 3D fixe, deux entrées vidéo) ; vignettes 1, 4 et 6 à 7 cliquées, image mise à jour | aucun | fonctionnent [V] |
| Flèches « Previous page » / « Next page » de la galerie | boutons | font défiler les vignettes | aucun | fonctionnent [V] |
| Champ « Size, chain or stone notes (optional) » | champ texte | note libre jointe à la commande | aucun | présent [V], non rempli (règle : aucune saisie) |
| Image fixe + bouton rond de lecture « Try it on your hand » | iframe iJewel3D (ijewel3d.com/drive/…/embedded) | un clic au centre charge la 3D : le visuel change environ 1,5 s après le clic (mesure sur ordinateur, capture avant et après) | aucun | fonctionne [V] |
| Pastilles de pierre du centre (blanche, verte, rouge, bleue) | boutons dans la 3D | recolorent la pierre centrale : rouge et verte vérifiées par capture ; la bague tourne légèrement | aucun | fonctionnent [V] ; la bague en vente n'existe qu'avec la pierre indiquée [I] |
| Onglets « Center Gem / Side Gem / Shank Trim » | boutons dans la 3D | « Center Gem » actif ; un clic sur « Side Gem » n'a pas changé l'onglet actif sur la capture | aucun | non concluant [V] |
| Icônes de la 3D : réglages, réinitialiser, rotation, centrer, plein écran, partager, AR, zoom + / − | boutons | réinitialiser et zoom actionnés sans erreur ; « partager » : un indicateur de chargement, aucun panneau visible ; plein écran, AR et réglages non vérifiés | aucun | partiel |
| AR (essai sur la main) | bouton dans la 3D | texte de la page : caméra du navigateur, ordinateur ou téléphone [V, texte] | aucun | non testé : pas de caméra dans l'environnement d'audit |
| ADD TO CART | bouton | **non actionné** : l'ajout passe par `/cart/add`, interdit par robots.txt | 3 950 $ | non testé : interdit |
| Ask About This Item | lien | /pages/ask-about-this-piece?handle=… (formulaire, non ouvert) | n/a | présent [V] |
| Product Details / Shipping & Pickup / Lifetime Care / Sizing & Fit / Questions or Custom Requests | accordéons | texte replié, non déplié ; liens vers guide des tailles et rendez-vous | n/a | présents [V] |
| Write a review / View customer reviews | boutons | « Be the first to write a review » sur cette fiche ; avis de boutique (4,9) affichés | n/a | présents [V] |
| « Open chat » (pastille en bas à droite) | bouton | non ouvert (règle : pas de chat) | n/a | non testé |
| 0 % APR « or from $191.52/mo with Shop » | texte (Shop Pay) | financement Shop Pay Installments affiché sous le prix | 191,52 $/mois | affiché [V], non ouvert |

Collection https://farsijewelers.com/collections/engagement-rings : « FILTERS » (tiroir ouvert : Availability « In stock (56) », Price curseur 0 à 5 490 $ avec champs From / To, Shop by Category, Birthstones by Month, Shape & Style), tri (7 options : Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant / décroissant, dates) ; « Price, low to high » actionné : premiers prix 1 249 $, 1 250 $, 1 350 $ [V] ; « LOAD MORE » présent.

## Options disponibles

- **Métaux (texte de la page, constructeur non lu)** : 10 k, 14 k, 18 k en or blanc, jaune, rose ; platine ; argent [V, texte].
- **Pierres** : formes et tailles au choix dans le constructeur (liste non lue) ; diamants synthétiques et naturels ; pierre de centre choisie en salle ou apportée par le client ; pierres colorées sur la collection (saphir naturel, alexandrite, saphir vert) [V].
- **Personnalisation annoncée** : taille de doigt, gravure, alliance assortie [V, texte]. Montures asymétriques (toi et moi, east-west) : « a Farsi specialty » [V, texte].
- **Fiche lue** : 3 pierres, synthétique taille émeraude 3 ct, E, VS1, certificat IGI, 14 k jaune, 0,50 ct de pierres latérales [V].
- **Collection** : 56 produits, de 1 249 à 5 490 $ ; nombreuses montures du revendeur Ever & Ever à côté de créations de la maison [V].
- **Formes de service** : rendez-vous gratuit, téléphone 770-206-8000, courriel, retrait au magasin [V].

## Prix, délais, retours, garanties

- **Prix affiché** : prix de la monture sans pierre de centre, « live » selon le cours de l'or et du platine [V, texte]. Pas de décomposition monture / pierre / main-d'œuvre. Prix de la fiche : 3 950 $ ; « The ring and the center stone are priced separately » (centre de politiques) [V].
- **Mention juridique** : « The prices on the website may differ from the actual sale price. » [V]
- **Délai** : 2 à 3 semaines après dessin approuvé ; 15 jours ouvrés pour une pièce à la commande (politique de livraison) [V].
- **Retours** : 7 jours sur pièces éligibles, neuves ; pièce redimensionnée, modifiée ou personnalisée non éligible ; sur mesure non remboursable « once production begins » ; frais de retour à la charge du client ; remboursement 3 à 4 jours après réception ; soldes et cartes cadeaux définitifs [V, https://farsijewelers.com/policies/refund-policy].
- **Paiement** : travail sur mesure payé en totalité au départ, sans acompte ; non remboursable après début du dessin et commande des matières ; Shop Pay Installments pour le reste [V, centre de politiques].
- **Garanties** : nettoyage et inspection gratuits à vie ; 90 jours d'ajustement gratuit (une mise à taille) ; garantie de fabrication sur les pierres d'accent ; contrôle à 6 mois pour sur-mesure ; pierre de centre non couverte (assurance conseillée) ; évaluation et documents d'assurance gratuits [V].
- **Livraison** : États-Unis seulement ; gratuite dès 350 $ ; UPS Parcel Pro assurée, signature d'un adulte de 21 ans ou plus ; pas de livraison à un hôtel ni à une boîte postale ; retrait gratuit au magasin [V, /policies/shipping-policy].
- **Panier** : fiche et panier non parcourus jusqu'au récapitulatif (ajout interdit) ; frais de livraison « calculés à la caisse », moyens de paiement non vus [V pour « Shipping calculated at checkout »].

## Confiance et service

- **Certificats** : rapport GIA ou IGI sur la pierre de centre, IGI pour la pierre de la fiche [V]. Gemmologue GIA sur place.
- **Synthétique** : écrit « lab-grown », vendu à côté du naturel ; page dédiée « lab-grown diamonds » ; nettoyage identique [V].
- **Avis** : 4,9 sur 188 avis, « Verified » (184 de 5 étoiles, 1 de 4) [V, /pages/reviews]. Résumé « selected by AI » affiché.
- **Preuves de fabrication** : méthode « Farsi 3D Bespoke » en six étapes (consultation, CAO MatrixGold avec fil de fer sous 3 à 5 jours ouvrés, rendu photoréaliste, vue 360° partagée par lien, cire imprimée à essayer, fonte locale) ; vidéo « Filmed at our Sandy Springs workshop » de 2 min 47 [V, page lue]. Pas de suivi de commande en ligne relevé.
- **Langues, devises** : anglais, dollar [V].
- **Autres services** : rendez-vous, chat (non ouvert), appel, courriel, réparation, estimation [V].

## Points forts à retenir pour JR Diamond

1. **Le 3D issu de la CAO de la maison, à l'essai sur la main.** « SEE THIS DESIGN ON YOUR OWN FINGER, AT TRUE SIZE, BEFORE IT IS CAST » ; visionneuse iJewel3D qui se charge en environ 1,5 s après le clic ; pastilles de pierre et bouton AR [V, fiche]. Le plus proche de « ce que vous voyez existe ».
2. **Méthode de fabrication en étapes visibles**, avec vidéo d'atelier et lien de partage de la vue 360° (page de méthode) [V].
3. **Page de conditions claire** : retours, garanties, couvert / non couvert, paiement, expédition sur une seule page [V].
4. **Prix de monture expliqué comme indexé sur l'or**, avec la raison de la séparation pierre / monture [V].
5. **Financement affiché sur la fiche** : « 0% APR or from $191.52/mo » [V].
6. **Avis visibles et vérifiés** (4,9 sur 188) [V].

## Défauts observés

- Le constructeur est un tiers (Stuller) en iframe : on ne peut pas partager ni mettre la configuration dans l'adresse de la page hôte [I].
- Pas de prix de la pierre de centre en ligne ; le prix final n'est pas connu avant la visite [V, texte].
- Un prix de monture seul ne dit pas le prix de la bague ; la mention « prices may differ from the actual sale price » affaiblit la promesse [V].
- Essai AR dépendant d'une caméra ; l'onglet « Side Gem » n'a pas réagi au test [V].
- Livraison États-Unis seulement ; sur mesure sans remboursement dès le début de la production [V].
- La page de départ ne dit pas où sont fabriquées les montures du revendeur Ever & Ever, vendues à côté des créations de la maison [V pour l'absence de mention].

## Limites de l'audit

- Iframe Stuller non lue ni actionnée (robots.txt : Disallow: /). Les options de ce constructeur (métaux, formes, gravure, alliance, filtres de pierre, prix) reposent sur le texte de la page hôte seulement ; les prix du constructeur ne sont pas relevés.
- « Add to cart » non actionné (`/cart/add` interdit) ; le récapitulatif de panier, la livraison à la caisse et les moyens de paiement n'ont pas été vus. Le panier consulté était vide.
- AR, plein écran, partage, onglets « Side Gem » et « Shank Trim » : non vérifiés ou non concluants. Chat, formulaires et compte : non ouverts.
- Temps d'apparition mesurés avec Chromium sans écran, via la file d'attente de l'audit : fiche ordinateur 2,5 s (DOMContentLoaded) et 3,4 s (première image supérieure à 300 px) ; iPhone 2,3 s et 3,3 s ; collection ordinateur 1,4 s et 1,6 s. Le constructeur de la page de départ n'a pas été chronométré (iframe interdite).
- Prix et conditions lus le 15/11/2026, susceptibles de changer.

## Sources

- https://farsijewelers.com/pages/build-your-engagement-ring-farsi-jewelers
- https://farsijewelers.com/pages/farsi-3d-bespoke-method-custom-rings-in-sandy-springs-without-the-surprises
- https://farsijewelers.com/collections/virtual-try-on/products/14k-yellow-gold-3-ct-east-west-lab-grown-emerald-cut-engagement-ring
- https://farsijewelers.com/collections/engagement-rings
- https://farsijewelers.com/policies/refund-policy et https://farsijewelers.com/policies/shipping-policy
- https://farsijewelers.com/pages/policy-center-farsi-jewelers-sandy-springs
- https://farsijewelers.com/pages/lifetime-care
- https://farsijewelers.com/pages/reviews
- https://farsijewelers.com/cart
- Captures et listes de contrôles : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/farsi-jewelers/
