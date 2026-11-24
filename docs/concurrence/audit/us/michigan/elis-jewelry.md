# Audit : Eli's Jewelry (Troy / Détroit, Michigan)

- **Site** : Eli's Jewelry, https://eli.jewelry/ (Shopify + widget « Jeweler OS »). Page de départ : https://eli.jewelry/pages/design-your-ring
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (liste des contrôles et capture seulement).
- **Statut** : **partiel**. L'assistant en 4 étapes fonctionne ; le **« 3D Ring Designer » final ne se charge pas** (message « Something went wrong / Try again »), donc ni 3D, ni prix de bague configurée, ni panier. Le bouton d'ajout au panier de la recherche de diamants n'a pas été actionné : `/cart/add` est INTERDIT par robots.txt (`Disallow: /cart/`).
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1 sur 4 : style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; 3 pastilles de métal (jaune, blanc, rose) ; « Back », « Skip » | [V] |
| 2 sur 4 : pierre centrale | Onglets Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » | [V] |
| 3 sur 4 : taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » (le texte précise qu'un carat exact se règle dans le designer) | [V] |
| 4 sur 4 : échéance | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » (sert à « recommander le meilleur délai ») | [V] |
| Designer 3D | Annoncé « fully customize your design in our 3D Ring Designer » ; **erreur de chargement** | [V] erreur |
| Panier | Page lue vide (« Continue shopping », « Popular picks ») | [V] /cart |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 3 pastilles métal (jaune, blanc, rose) | boutons | Visibles au départ ; l'effet n'a pas été isolé | aucun | Non testé |
| Solitaire (carte de style) | bouton | Passe à l'étape 2 sans rechargement de page | aucun | OK |
| Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | cartes | Même mécanisme supposé ; non actionnées | - | Non testé |
| Natural / Lab Grown | onglets | Changent d'onglet ; la liste des formes reste identique | aucun | OK |
| Oval | carte | Passe à l'étape 3 | aucun | OK |
| Autres formes (8) | cartes | Non actionnées | - | Non testé |
| 1 carat | bouton | Passe à l'étape 4 | aucun | OK |
| Autres carats (7) | boutons | Non actionnés | - | Non testé |
| Decide later (étapes 2 et 3), Skip | boutons | Non actionnés | - | Non testé |
| Back | bouton | Présent (visible sur iPhone) ; non actionné | - | Non testé |
| 1 - 4 weeks | bouton | Lance le chargement du designer : écran gris, roue, puis « Something went wrong » + « Try again », barre de progression bloquée à 90 % environ | aucun | **Échec** (voir Défauts) |
| Try again | lien | Non actionné (pas de nouvel essai pour passer) | - | Non testé |
| Diamond Search (`/pages/diamonds`) : Natural / Lab Grown / Gemstones | onglets | Naturel : 11 504 diamants dès 1 908 $ ; synthétique : 23 095 ; pierres de couleur : 662 | prix par pierre | OK |
| Diamond Search : Shape Round / Oval / Emerald | boutons | Seulement 3 formes proposées ; non cliquées | - | Non testé |
| Diamond Search : Carats, Colour (E-G / Fancy), Clarity FL-VS2, Cut (Ideal, Excellent, Very Good), Price, Advanced Filters | filtres | Présents ; non manipulés | - | Non testé |
| Diamond Search : Sort (4 choix), LIST / GRID | liste, boutons | Présents ; non actionnés | - | Non testé |
| Diamond Search : « Add to cart » par pierre | bouton | Non actionné : panier interdit par robots.txt | - | Non testé |
| Gemstones : couleurs (11), clarté (4), taille (3) | filtres | Présents (ex. 0,77 ct ovale émeraude naturelle) | - | Listés |
| Engagement + Bridal (`/collections/rings`) : Quick View | boutons | Fiches de bijoux en magasin ; non ouverts | - | Non testé |
| APPOINTMENT (`#jos-book-appointment`) | lien | Ancre vers un module de rendez-vous ; non ouvert | - | Non testé |
| FULL COLLECTION | lien | Externe : `elijewelry.jewelershowcase.com` | - | Non suivi |
| CUSTOM JEWELRY | lien | Page de bijou sur mesure lue (voir plus bas) | - | OK |
| Boutons « START MY CUSTOM PIECE », « TEXT US (248) 585-4447 » | liens | Non suivis | - | Non testé |
| SEARCH, Log in, CART | liens | `/search`, compte, `/cart` ; seul /cart ouvert | - | Cart OK |
| Newsletter, Instagram, Facebook | formulaire, liens | Non remplis ni suivis | - | Non testé |
| Footer « Shipping Policy » | lien | `href="#"` sur la page de départ ; la page `/policies/shipping-policy` se lit | - | Lien partiellement mort [V] |

Total : 35 contrôles listés sur ordinateur, 17 sur iPhone.

## Options disponibles

- **Styles** [V] : 8 (solitaire, halo, halo caché, bezel, cathédrale, pavé complet, toi et moi, trois pierres) + départ libre.
- **Métaux** [V] : jaune, blanc, rose (pastilles) ; sur la page sur mesure : argent sterling, 10, 14, 18, 21, 22 k. Platine non vu.
- **Formes** [V] : 9 (rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant). La recherche de diamants n'en propose que 3.
- **Carats** [V] : 0,5 à 5 ct en 8 paliers.
- **Origine** [V] : naturel et synthétique (« Lab Grown »), GIA et IGI affichés par pierre.
- **Pierres de couleur** [V] : émeraude, etc. (662 résultats).
- **Gravure, pavage au choix, taille de doigt, 3D, AR, 360° : non observés** (derrière le designer en erreur).

## Prix, délais, retours, garanties

- **Prix** [V] : aucun prix de bague configurée vu. Diamants : prix à l'unité en USD. Bijoux en stock : prix fixes (ex. 14 k blanc 0,33 ct, 1 449 $ ; remise barrée « 6 000 $ → 1 999,99 $, -67 % » sur une bague de 3,8 ct).
- **Sur mesure** [V] (`/pages/custom-jewelry`) : devis approximatif gratuit ; **500 $ d'acompte** pour lancer le design ; rendu CAO 3D gratuit ; prix final fixé sur le poids exact après CAO ; **50 % pour lancer la production** ; paiement échelonné et financement annoncés.
- **Délai** [V] : 3 à 6 semaines (page sur mesure) ; 2 à 6 semaines (politique d'expédition), puis 2 à 5 jours de transport. Incohérence entre les deux pages. Traitement 24-48 h en stock, 48-72 h sinon.
- **Livraison** [V] : « free shipping on eligible orders » ; estimations non garanties ; suivi fourni.
- **Retours** [V] (`/policies/refund-policy`) : 30 jours en ligne (neuf, emballage d'origine), retour agréé par e-mail ; **pièces sur mesure, personnalisées, commandes spéciales et mise à taille : vente ferme** ; 14 jours de rétractation pour l'Union européenne ; remboursement sous 10 jours ouvrés ; magasin : échange ou avoir sous 14 jours.
- **Garantie** : non trouvée sur les pages lues [V].
- **Moyens de paiement affichés** [V] (pied de page) : Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa.
- **Devise** USD ; **langue** anglais [V].

## Confiance et service

- Avis [V] : « 5.0 · 580+ Google Reviews » affirmé sur la page sur mesure, extraits d'avis (non vérifié sur Google).
- Atelier [V] : « you deal directly with Eli », 100 % famille, Troy (MI) ; adresse de retour 398B W 14 Mile Rd., Troy.
- Contact [V] : SMS (248) 585-4447, e-mail de support, rendez-vous.
- Preuves de fabrication [V] : rendu CAO 3D avant production annoncé (« Production took less than 5 weeks » dans un avis) ; pas de vidéo de fabrication ni de suivi d'étapes vus.
- Éducation [V] : page « Diamond Education » dans le pied de page (non ouverte).

## Points forts à retenir pour JR Diamond

1. **Assistant de démarrage en 4 questions avec « Skip » et « Decide later »** : style, forme, carat, échéance, avant l'outil complet. Preuve : « Step 1 of 4 » à « Step 4 of 4 ».
2. **Question d'échéance** (« When do you need your ring? ») pour adapter le délai. Preuve : étape 4.
3. **Recherche de diamants avec onglet « Gemstones »** pour les pierres de couleur. Preuve : 662 gemmes, 11 couleurs.
4. **Processus sur mesure en cinq étapes chiffré** (devis gratuit, 500 $, CAO, prix fixé au poids, 50 %, 3 à 6 semaines). Preuve : page sur mesure. Proche du « prix expliqué » de JR Diamond.
5. **Politique de retour détaillée** avec exclusion nette du sur mesure et clause UE de 14 jours. Preuve : politique de remboursement.
6. **Moyens de paiement visibles dès le pied de page.** Preuve : logos de neuf moyens.

## Défauts observés

- **Designer 3D en erreur** : « Something went wrong » après l'étape 4, sur ordinateur dans la session testée ; erreurs console : requêtes vers `www.jeweleros.com/api/config/…` refusées (CORS), 403 sur une ressource, génération de configuration échouée [V]. Cause (blocage du bac à sable, réseau ou service tiers) [S], non tranchée.
- Pas d'alternative affichée en cas d'erreur, hors « Try again » [V].
- Délai annoncé différent selon les pages (2-6 ou 3-6 semaines) [V].
- Lien « Shipping Policy » du pied de page sur `#` [V].
- Collection « Engagement + Bridal » mélangée à de l'occasion et des intitulés de stock bruts (« 14K WG 0.33CT RD DIA LADIES RING ») [V].
- Pied de page de l'assistant qui déborde sur la capture iPhone (la page sous-jacente reste visible sous le calque) [V sur capture].
- Aucune garantie écrite trouvée ; pas de prix de bague configurée [V].

## Limites de l'audit

- Après l'étape 4, **rien de l'outil 3D n'a pu être vérifié** : vues (3D, 360°, zoom), prix, gravure, taille de doigt, enregistrer/partager, ajout au panier. Pas de nouvel essai insistant ni de contournement.
- Un seul essai de bout en bout avec les arguments « Solitaire, Lab Grown, Oval, 1 carat, 1-4 semaines », répété trois fois avec le même résultat (une fois avec rendu logiciel WebGL activé, WebGL disponible).
- Filtres de la recherche de diamants, tris, carats et boutons d'ajout au panier non actionnés.
- **Visuel principal** : l'assistant affiche ses cartes immédiatement (mesure automatique non concluante car les images sont petites) ; collection « rings » : 1 054 ms ordinateur, 829 ms iPhone ; temps d'apparition du designer 3D : jamais (échec).
- Le script a chargé des ressources tierces (Jeweler OS, Shopify, Google Ads) comme tout visiteur.

## Sources

- https://eli.jewelry/pages/design-your-ring
- https://eli.jewelry/pages/diamonds
- https://eli.jewelry/pages/custom-jewelry
- https://eli.jewelry/policies/refund-policy
- https://eli.jewelry/policies/shipping-policy
- https://eli.jewelry/collections/rings, https://eli.jewelry/cart
- Captures et JSON : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/elis-jewelry/
