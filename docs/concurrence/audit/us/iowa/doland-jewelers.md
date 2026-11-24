# Audit : Doland Jewelers (Iowa)

- **Site** : Doland Jewelers, Dubuque et Davenport (Iowa). Boutique Shopify.
- **Adresse de départ** : https://dolandjewelers.com/pages/design-your-ring
- **Date** : 15/11/2026 (exécuté le 24/11/2026 dans l'environnement de session)
- **Appareils** : Chromium ordinateur (1366 px), affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. L'assistant d'accueil (4 étapes) fonctionne ; le « 3D Ring Designer » qu'il annonce ne s'ouvre pas (voir Défauts). Le constructeur par réglage puis pierre (Ring Creator) a été parcouru jusqu'au panier.
- **Marquage** : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- **Écart à robots.txt, à noter** : le bouton « Add To Cart » du constructeur appelle `/cart/add.js`, interdit par `Disallow: /cart/` (contrôle fait après coup). Un ajout (1 bague + 1 pierre) a été fait deux fois dans des sessions jetables, sans compte ni paiement. Les constats « panier » portent donc la marque **[P1]**. Le robots.txt contient aussi un commentaire destiné aux agents (« utiliser les interfaces UCP… sans contournement par script ») : non suivi, car le visiteur automatisé n'achète rien ; à signaler.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| 0. Page `/pages/design-your-ring` | « Step 1 of 4 », 3 pastilles de métal (jaune, blanc, rose : changent l'image des cartes, `solitaire_white.webp`, `solitaire_rose.webp`) [V] |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; bouton Skip [V] |
| 2. Pierre centrale | Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 carat (« vous pourrez fixer le carat exact dans le designer ») [V] |
| 4. Délai souhaité | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| 5. Designer 3D | Échec : « Something went wrong / Try Again » (appel `jeweleros.com/api/create/from-ring-config/` bloqué par CORS) [V] |
| Alternative A. Choisir un réglage | `/apps/ring-creator/rb-setting-list` : 3 739 résultats (14K blanc par défaut), 7 familles de styles, filtres métal / prix / forme [V] |
| B. Fiche réglage | 4-5 photos, métal (7), forme de pierre (5), taille de doigt 3 à 13 par demi-taille, « Select Setting » / « Add To Cart » [V] |
| C. Choisir la pierre | `rb-stone-list` : naturel / synthétique, formes, carat, couleur, fancy, pureté, taille, prix [V] |
| D. Bague complète | `rb-ring-review` : récapitulatif réglage + pierre, taille, sous-total, « Add To Cart » [V] |
| E. Panier | `/cart` : deux lignes (pierre, réglage), sous-total, case CGV, « Checkout » [V][P1] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles jaune / blanc / rose (accueil) | bouton | change la photo des 8 cartes de style [V] | aucun | OK |
| Carte de style (8) | carte | passe à l'étape 2 sans changement d'adresse [V] | aucun | OK |
| Skip / Back | bouton | saute ou revient [V] ; Skip : page restée sur l'accueil après 8 s, non concluant | aucun | Non concluant |
| Natural / Lab Grown (étape 2) | bascule | libellés identiques, aucune indication de prix [V] | aucun | OK |
| Forme (9) | carte | étape suivante [V] | aucun | OK |
| Carat (7) | carte | étape suivante [V] | aucun | OK |
| Délai (4) | carte | lance la génération du designer 3D, puis erreur [V] | aucun | **Erreur** |
| Try Again | bouton | non retesté (une seule tentative, pas de contournement) | | Non testé |
| Start from scratch | carte | page restée sur l'accueil après 8 s [V] | | Non concluant |
| Metal Type (liste) | filtre | 14K rose/blanc/jaune, 18K rose/blanc/jaune, Platinum [V] | liste filtrée | OK |
| Price (liste) | filtre | deux champs 0,00 à 100 000,00 + curseur [V] | filtre | OK |
| Supported Shape (liste) | filtre | Round, Oval, Emerald, Square, Marquise, Asscher, Cush Brill [V] | filtre | OK |
| All Filters | tiroir | Ring Style, Metal Type, Price, Supported Shape ; Reset All / Apply Filters [V] | filtre | OK |
| Sort By (liste) | menu | Price : Lowest / Highest [V] | tri | OK |
| Pastille de style (liste) | bouton | « Three Stone » : 3 739 → 183 résultats [V] | filtre | OK |
| Pagination | lien | 312 pages annoncées (12 cartes/page) [V] | | OK |
| Pastilles métal (fiche) | bouton | 7 pastilles ; libellé « Metal Type » mis à jour ; photo inchangée ; prix affiché resté à 1 121,00 $ après 6 clics [V] | **inchangé** | À vérifier (voir Défauts) |
| Forme de pierre (fiche) | bouton | Cush Brill 2 667 $, Emerald 2 618 $, Oval 2 044 $, Round 1 958 $, Square 2 000 $ (base 1 121 $) ; photos changent [V] | **le prix du réglage change** | OK |
| Taille de doigt (fiche) | puces | 3 à 13 ; sans taille, « Select Setting » ne fait rien, sans message [V] | aucun | Défaut mineur |
| See Size Conversion Chart | lien | tableau US / UK / France / Allemagne / Inde-Israël… [V] | aucun | OK |
| Product Details / Description / Side Stone | accordéon | type, métal, pierres latérales (synthétiques, pureté VS, couleur F-G) [V] | aucun | OK |
| Ask A Question | lien | non ouvert (formulaire, aucune saisie) | | Non testé |
| Select Setting | bouton | ouvre la liste des pierres avec min/max carat et couleur déjà posés [V] | aucun | OK |
| Natural / Lab-Grown Diamonds (pierres) | bascule | résultats 60 → 4 (avec le filtre carat posé) [V] | filtre | OK |
| Carat / White Color / Fancy Color / Clarity / Cut / Price | filtres | ouverts ; seuls Carat (0,33 à 4,04) et Price ont des champs lisibles [V] ; couleur, pureté, taille : libellés non relevés | filtre | Partiel |
| Sort By (pierres) | menu | Carat, Color, Clarity, Cut, Price (Lowest / Highest) [V] | tri | OK |
| Fiche pierre | page | forme, carat, couleur, pureté, taille, polissage, symétrie, fluorescence, laboratoire (IGI), mesures, n° de rapport, lieu [V] | prix de la pierre | OK |
| Add To Ring | bouton | ouvre le récapitulatif [V] | sous-total 1 352,00 $ | OK |
| Change / View (récapitulatif) | liens | non cliqués | | Non testé |
| Start Over, Drop A Hint | liens | non cliqués (formulaire) | | Non testé |
| Add To Cart | bouton | sans taille : rien ; avec taille 6 : ajout après quelques secondes [V][P1] | | OK |
| Panier | page | 2 lignes, sous-total, CGV, Checkout [V][P1] | 1 351,52 $ | OK |
| Checkout | bouton | non cliqué (hors périmètre) | | Non testé |
| Accessibilité (icône), Book An Appointment, téléphone x2, wishlist (Swym), recherche, compte | liens | présents ; non suivis sauf wishlist non ouvert | | Non testé |
| Modes de vue 3D / 360° / AR / vidéo / sur la main | | absents du constructeur par réglage : 4-5 photos fixes [V] | | Absent |

## Options disponibles

- **Métaux** : or 14 et 18 carats jaune, blanc, rose ; platine [V].
- **Styles** : solitaire, trois pierres, pierres latérales, halo, vintage, accentué, bezel ; en accueil aussi hidden halo, cathedral, full pavé, toi et moi [V].
- **Formes** : ronde, ovale, coussin, émeraude, princesse/carrée, asscher, marquise, poire, radiante (accueil) ; 5 à 7 formes acceptées par réglage [V].
- **Origine** : naturel et synthétique (« Lab-Grown ») pour les pierres, par bascule [V].
- **Carat** : de 0,33 à 4,04 ct dans la liste ; 7 repères à l'accueil [V].
- **Taille de doigt** : 3 à 13 (demi-tailles) [V].
- **Gravure, griffes, pavage personnalisé, corps de bague** : absents du constructeur observé [V].

## Prix, délais, retours, garanties

- **Prix** : affichés en dollars, séparés par composant (« Setting Price », « Stone Price »), sous-total sur la page de bague complète [V]. Exemple : réglage 1 121,00 $ + pierre synthétique 0,51 ct émeraude 231,00 $ = 1 352,00 $ [V]. Taxes et livraison « calculées à la caisse » [V][P1].
- **Écart d'arrondi** : le panier affiche la pierre à 230,52 $ (affichage : 231,00 $) et un sous-total de 1 351,52 $ au lieu de 1 352,00 $ [V][P1].
- **Délai** : l'accueil demande le délai souhaité ; aucun délai de fabrication annoncé sur les pages lues [V].
- **Retours** (`/pages/returns-exchanges`) : remboursement sous 30 jours pour les bijoux non portés ; les commandes spéciales, sur mesure ou modifiées à la demande ne sont ni reprises ni échangées [V].
- **Garanties** (`/pages/warranty`) : garantie à vie gratuite sur les bagues de fiançailles (mise à taille, remise en état, griffes, remplacement des diamants de moins de 0,20 ct), à condition d'une visite tous les six mois ; garantie d'un an sur les nouveaux bijoux [V].
- **Évolution** (`/pages/diamond-upgrades`) : reprise de la valeur d'un diamant naturel si le nouveau coûte au moins le double ; exclue pour le synthétique [V].
- **Financement et mise de côté** (FAQ) : financement avec crédit approuvé ; layaway avec 20 % d'acompte [V].

## Confiance et service

- Deux boutiques physiques avec adresses, horaires et téléphones en pied de page [V]. Bouton « Book An Appointment » [V].
- Réseaux sociaux, FAQ (générale, services et réparations), page témoignages (contenu chargé par un module, vide à la lecture simple) [V].
- Moyens de paiement du pied de page : Visa, Mastercard, Amex, PayPal, Diners, Discover ; « Follow on shop » [V].
- Certificats : le rapport affiché est celui du laboratoire (IGI pour un synthétique, numéro de rapport reproduit dans le panier) [V]. Libellé synthétique : « Lab-Grown Diamond » [V].
- Langue : anglais ; devise : dollar [V].
- Preuves de fabrication (photos ou vidéos d'atelier, suivi de commande) : non vues [V].
- Chat, WhatsApp : absents ; téléphone : liens `tel:` [V].

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 questions qui préremplit le constructeur** : style, forme, carat, délai, en moins de 2,4 s sur iPhone (étape 1 visible à 1,9 s sur ordinateur) [V ; mesures de cette session].
2. **Prix décomposé et recalculé à chaque choix** : réglage + pierre + sous-total, et filtre de prix en dollars [V, pages `rb-ring-review`].
3. **Fiche de pierre complète** : polissage, symétrie, fluorescence, mesures, laboratoire, numéro de rapport [V, `rb-stone-details`].
4. **Garantie à vie conditionnée à une visite semestrielle** et promesse d'évolution du diamant naturel [V, `/pages/warranty`, `/pages/diamond-upgrades`].
5. **Tableau de conversion des tailles incluant Israël** (colonne « India/China/Japan… /Israel ») [V].

## Défauts observés

- **Le « 3D Ring Designer » ne s'ouvre pas** : après l'étape 4, « Something went wrong » ; la console montre des appels vers `jeweleros.com` refusés (CORS, réponses 403) [V]. Cause : inférée, soit refus du service pour ce visiteur automatisé, soit panne ; non vérifiée, aucun nouvel essai (règle de non-contournement).
- Aucun mode 3D, 360° ou « sur la main » sur la fiche : seulement 4 ou 5 photos de catalogue [V].
- Le prix affiché ne bouge pas quand on change de métal (6 clics) [V] ; [I] le prix se règle par référence de réglage, mais l'utilisateur ne voit pas de lien entre métal et coût.
- Image de pierre cassée (« Product image 2 », icône d'image brisée) dans le récapitulatif ; la bague montrée reste le réglage, sans la pierre choisie [V].
- Bague « poire » acceptant une pierre émeraude ou ovale sans avertissement [V].
- Aucune mention d'erreur quand la taille manque (« Select Setting » muet) [V].
- Écart d'arrondi de 0,48 $ entre affichage et panier [V][P1].
- Bandeau cookies recouvrant le contenu à la première étape [V].

## Limites de l'audit

- Pas de validation d'un second parcours en 3D : aucune interface 3D n'a pu être atteinte.
- Filtres couleur, pureté et taille : ouverts mais options non relevées.
- Pas de contrôle d'un cas hors panier (coupon, modification de quantité).
- Le catalogue semble issu d'un flux partagé (mêmes numéros de stock et mêmes prix que James Martin Jewelers pour les réglages communs) [I].
- Temps d'apparition : première carte de liste 3,5 s (ordinateur, réseau de la session) ; image principale de la fiche 3,6 s (ordinateur) et 3,2 s (iPhone) ; accueil 1,9 s et 2,4 s. Mesures sur un seul essai chacune.
- Écart à robots.txt (`/cart/add.js`), décrit en tête.

## Sources

- https://dolandjewelers.com/pages/design-your-ring (et `/apps/ring-creator/rb-setting-list`, `rb-setting-details`, `rb-stone-list`, `rb-stone-details`, `rb-ring-review`, `/cart`), consultés le 24/11/2026
- https://dolandjewelers.com/pages/returns-exchanges, `/pages/warranty`, `/pages/diamond-upgrades`, `/pages/faqs`, `/pages/customer-testimonials`
- https://dolandjewelers.com/robots.txt
- Captures et scripts : dossier de travail de session, hors dépôt
