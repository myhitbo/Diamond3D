# Audit : Panos Melekkis (Limassol, Chypre ; bureau à Dubai)

- **Site** : https://panosmelekkis.com/ (WordPress, WooCommerce)
- **Page de départ** : https://panosmelekkis.com/product-category/love-engagement/engagement-rings/ (catalogue) puis fiche https://panosmelekkis.com/product/engagement-ring-lr14051-19/
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13.
- **Statut** : **partiel**. Pas de configurateur 3D. Parcours testé jusqu'au choix d'options et au bouton d'ajout ; le panier n'a pas été ouvert : `https://panosmelekkis.com/cart/` est **interdit** par le `robots.txt` (contrôle `robots.cjs`) [V]. Légende : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Catalogue « Love & Engagement » | 2 pages ; fiches « Engagement Ring LR14051 » à LR14074 (une référence, pas de nom) ; tri (popularité, note, nouveauté, prix croissant ou décroissant) ; bouton FILTER ; « SELECT OPTIONS » par fiche [V] |
| Fiche bague | 5 menus : Metal (18K, 14K), Diamonds (Natural, Lab Grown), gold-variant (Rose, White, Yellow), Clarity (VVS, VS, SI), size (45 à 76) ; quantité ; ADD TO CART ; « Hint about a Gift » ; détails du produit [V] |
| Sur mesure | « Book a Design » (https://panosmelekkis.com/book-a-design/) : rendez-vous, croquis, choix de pierre et métal, **modèle CAO 3D** à valider, fabrication [V : texte] |
| Transformation | « Jewellery Redesign » (https://panosmelekkis.com/recreate-your-sentimental-jewellery/) : essai de l'or et dépose des pierres, design 3D photoréaliste, fonte de l'or du client, raffinage, fabrication [V : texte] |
| Panier | Non ouvert (interdit par `robots.txt`) |

## Contrôles vérifiés

Mesure : `controls.cjs` sur le catalogue (110 contrôles ordinateur, 101 iPhone) et sur la fiche LR14051 (84 ordinateur, 73 iPhone), plus test des cinq menus par script.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Metal : 18K, 14K | liste | Bascule le titre de l'or | 18 k, naturel, VS, taille 52, or blanc : 13 993 $ ; 14 k, naturel : 13 535 $ [V] | OK |
| Diamonds : Natural / Lab Grown | liste | Change la pierre | Synthétique 14 k : 2 179 $ (contre 13 535 $ en naturel) [V] | OK |
| gold-variant : Rose, White, Yellow | liste | Couleur de l'or | Aucun écart de prix constaté (2 179 $ pour les trois essais après changement de couleur) [V] | OK |
| Clarity : VVS, VS, SI | liste | Pureté de la pierre | Aucun écart constaté en synthétique (2 179 $ pour VVS et SI) [V] | OK, effet nul observé |
| size : 45 à 76 | liste | Taille de doigt (échelle européenne) | Aucun écart | OK |
| Quantité − / 1 / + | champ | Présent | — | Non testé |
| ADD TO CART | bouton | Non actionné : le panier est interdit aux robots | — | Non testé |
| CLEAR | lien | Réinitialise les menus | — | Non testé |
| Hint about a Gift | bloc | « laisser discrètement savoir quel bijou vous a plu » | — | Présent, formulaire non rempli |
| Add to wishlist | lien | Présent sur le catalogue | — | Non testé |
| SELECT OPTIONS (catalogue) | lien | Ouvre la fiche | Fourchette « €1,900 – €15,700 » | OK |
| Tri (6 critères) | liste | Présent | — | Non testé |
| FILTER | bouton | Présent | — | Non testé |
| Pagination 1, 2, Next | liens | Page 2 existe | — | Lien vérifié, non suivi |
| Book a Design | lien | Ouvre la page « Book a Design » | — | OK (200) |
| Jewellery Redesign | lien | Page de transformation | — | OK (200) |
| Shipping & Returns | lien | Page lue | — | OK (200) |
| Pay In Installments / Shop now | lien | Paiement en plusieurs fois annoncé, conditions non lues | — | Non vérifié |
| Track Your Order | lien | Présent | — | Non testé |
| Gift Voucher | lien | Présent | — | Non testé |
| WhatsApp us (flottant) | lien | Ouvre WhatsApp, aucune conversation ouverte | — | Présent |
| Accordéon FAQ (4 questions) | lien | Carat, budget, mise à niveau, sécurité d'achat en ligne à Chypre | — | Présent, non ouvert |
| Menu : Ready to wear, Collections, Love & Engagement, Rustoria, Candy, Monarchy, Earrings, Necklaces… | liens | Pages de catalogue | — | OK (liens) |
| Aucun bouton de vue 3D, 360°, vidéo, AR, comparateur, essayage ou chat | — | Absents | — | [V] |

## Options disponibles

- **Métal** : 14 k et 18 k ; couleurs jaune, rose, blanc. Pas de platine [V].
- **Pierre** : naturel ou synthétique, au choix sur la même fiche [V]. Pas de choix de forme : une bague par forme (LR14051 est coussin 10 x 10 mm, 1,5 ct, 10 petits diamants ronds de 1,6 mm) [V].
- **Pureté** : VVS, VS, SI [V]. Couleur du diamant non proposée en menu [V].
- **Taille** : 45 à 76 [V]. **Gravure** : non vue.
- **Sur mesure** : toutes pierres (diamant noir, blanc, émeraude, rubis), métaux « de l'or rose au platine » [V : page Book a Design].

## Prix, délais, retours, garanties

- **Prix** : fourchette en euros sur le catalogue (« €1,900 – €15,700 » pour LR14051) ; après choix des options, **le prix affiché passe en dollars** (13 993 $) alors que la fourchette reste en euros : devise incohérente [V].
- **Décomposition du prix** : aucune ; seules les masses sont données (or 18 k 3,8 g, 14 k 3,192 g, 1,65 ct au total) [V].
- **Délai** : « within 30 days after the day on which we accept your order » dans la page livraison, qui date de la boutique de Dubai (frais en AED, livraison gratuite dès 1 000 AED aux Émirats) [V]. Aucun délai propre à Chypre trouvé [V].
- **Livraison** : « tous les pays éligibles hors boîtes postales » ; frais selon destination, douane et TVA possibles hors des Émirats [V].
- **Retours et garanties** : la page « Shipping & Returns » a été lue en partie (commande, livraison) ; la partie retours n'a pas été lue jusqu'au bout, donc délai de rétractation et exception du sur mesure **non vérifiés**. Avoir de 3 mois si la commande n'est pas acceptée [V].
- **Certificats** : GIA, IGI, HRD non cités sur les pages lues [V].

## Confiance et service

- **Libellé du synthétique** : « Lab Grown Diamonds » [V]. « Synthetic » n'apparaît pas.
- **Langues** : anglais seulement [V]. **Devises** : euro puis dollar, voir défaut [V].
- **Avis clients** : aucun avis ni note sur les pages lues [V]. Distinctions annoncées : « WADA Awards 2022-23 Bridal Jewellery Designer of the World » [V : texte du site, non vérifié ailleurs].
- **Preuves de fabrication** : le texte promet des rendus 3D photoréalistes et un suivi « informed throughout the process », sans photo ni vidéo d'atelier vue [V].
- **Service** : showroom à Limassol (Arch. Makarios III) sur rendez-vous, horaires affichés, WhatsApp, rendez-vous de design, paiement en plusieurs fois, suivi de commande, bon cadeau [V].

## Points forts à retenir pour JR Diamond

1. **Transformation de bijoux de famille expliquée en 5 étapes** : essai de l'or, dépose des pierres, design 3D, fonte de l'or du client, raffinage (preuve : /recreate-your-sentimental-jewellery/). Même promesse que « Bijou de famille » chez JR Diamond ; l'étape « on fond votre or » n'a pas de preuve en images.
2. **Naturel ou synthétique sur la même fiche**, avec l'écart de prix visible : 13 535 $ contre 2 179 $ pour la même bague en 14 k (preuve : essai des menus sur LR14051).
3. **Poids du métal et du diamant publiés par fiche** (3,8 g en 18 k, 3,192 g en 14 k, 1,65 ct) (preuve : « Product details »).
4. **Pages rapides** : catalogue et fiche affichent leur première image en 1,3 à 2,1 s sur ordinateur et iPhone (mesure unique).
5. **Rendez-vous de design clair**, de la prise de rendez-vous à la fabrication (preuve : /book-a-design/).

## Défauts observés

- Devise incohérente : fourchette en euros, prix de la variante en dollars [V].
- Page de livraison rédigée pour Dubai (AED, UAE) sur un site qui se présente comme chypriote [V].
- Pas de configurateur ni de visuel qui change avec les options (couleur d'or, pureté sans effet de prix) [V].
- Une référence « LR14051 » par bague, sans nom ni photo d'atelier ; aucun avis [V].
- Pas de libellé légal « synthétique » ; pas de certificat cité [V].

## Limites de l'audit

- Panier, frais finaux, moyens de paiement et ajout au panier **non testés** : `/cart/` interdit.
- Retours et exception du sur mesure non lus en entier ; FAQ, tri, filtre, liste de souhaits, suivi de commande non actionnés.
- Une seule mesure de temps par page ; captures dans `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/panos-melekkis/` (hors dépôt).
- Prix en dollars vus pour une seule fiche (LR14051).

## Sources

- https://panosmelekkis.com/ , /product-category/love-engagement/engagement-rings/ , /product/engagement-ring-lr14051-19/ , /book-a-design/ , /recreate-your-sentimental-jewellery/ , /shipping-returns/ (lues le 15/11/2026).
- `robots.txt` : https://panosmelekkis.com/robots.txt (règle `Disallow: /cart/`).
