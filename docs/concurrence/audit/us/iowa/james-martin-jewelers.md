# Audit : James Martin Jewelers (Iowa)

- **Site** : James Martin Jewelers, Dubuque (Iowa), boutique familiale depuis 1983. Boutique Shopify.
- **Adresse de départ** : https://jamesmartinjewelers.com/pages/design-your-ring
- **Date** : 15/11/2026 (exécuté le 24/11/2026 dans l'environnement de session)
- **Appareils** : Chromium ordinateur (1366 px), affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Assistant d'accueil et constructeur réglage + pierre parcourus jusqu'au récapitulatif de bague ; **panier non atteint**, car le bouton « Add to Cart » appelle `/cart/add.js`, interdit par `Disallow: /cart/` (page de panier `/cart` elle-même autorisée) ; le designer 3D annoncé ne s'ouvre pas.
- **Marquage** : [V] vérifié, [I] inféré, [S] supposé.
- **Précaution** : requêtes vers `/cart.js` et `/cart/` bloquées dans le navigateur de test. Aucun écart à robots.txt sur ce site.
- Même éditeur de constructeur que Doland Jewelers (assistant « jos » + application Ring Creator) : comparer avec `doland-jewelers.md`.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| 0. Accueil `/pages/design-your-ring` | « Step 1 of 4 », 3 pastilles de métal (jaune, blanc, rose) qui changent les images des cartes [V] |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch ; Skip [V] |
| 2. Pierre | Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; Decide later [V] |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; Decide later [V] |
| 4. Délai | 1-4 semaines, 1-3 mois, 3-6 mois, Not sure yet [V] |
| 5. Designer 3D | Échec : « Something went wrong / Try again » [V] |
| A. Liste de réglages | `rb-setting-list` : 1 901 résultats (14K blanc par défaut), 7 styles, filtres métal / prix / forme, tri [V] |
| B. Fiche de réglage | photos, 7 métaux, formes de pierre, taille 3 à 13, Select Setting, Add to Cart [V] |
| C. Liste de pierres | `rb-stone-list` : 287 naturelles, 111 synthétiques (carat 0,33-4,04) [V] |
| D. Fiche de pierre | caractéristiques complètes, Add to Ring [V] |
| E. Bague complète | `rb-ring-review`, sous-total, Add to Cart [V] |
| F. Panier | non atteint (voir statut) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (accueil) | bouton | change l'image des cartes (`solitaire_white.webp`, `solitaire_rose.webp`) [V] | aucun | OK |
| Cartes de style, forme, carat, délai | cartes | étape suivante, sans changement d'adresse [V] | aucun | OK |
| Natural / Lab Grown | bascule | aucune indication de prix [V] | aucun | OK |
| Délai (dernier clic) | carte | lance la génération du designer, puis erreur [V] ; console : appels à `jeweleros.com` refusés (CORS, 403) | aucun | **Erreur** |
| Skip, Back, Start from scratch | boutons | non testés après l'échec (une seule tentative) | | Non testé |
| Metal Type (liste) | filtre | 14K rose/blanc/jaune, 18K rose/blanc/jaune, Platinum [V] | liste filtrée | OK |
| Price, Supported Shape | filtres | champs prix 0 à 100 000 ; formes [V] | filtre | OK |
| Pastille Three Stone | bouton | 1 901 → 179 résultats [V] | filtre | OK |
| All Filters, Sort By, Reset All | boutons | présents ; mêmes menus que Doland (non rouverts) [I] | | Non testé |
| Pastilles métal (fiche) | bouton | 6 clics : libellé change ; prix affiché reste à 1 121,00 $ [V] | **inchangé** | À vérifier |
| Forme de pierre (fiche) | bouton | Cush Brill 2 667 $, Emerald 2 618 $, Oval 2 044 $ (base 1 121 $) [V] | le prix du réglage change | OK |
| Taille de doigt | puces | 3 à 13 ; « US Sizes / See Size Conversion Chart » [V] | aucun | OK |
| Select Setting | bouton | avec taille 6 : ouvre la liste des pierres, carat et couleur préposés [V] | aucun | OK |
| Natural / Lab-Grown Diamonds | bascule | 287 → 111 résultats [V] | filtre | OK |
| Carat, Price | filtres | carat 0,33 à 4,04 ; prix 0 à 100 000 [V] | filtre | OK |
| White Color, Fancy Color, Clarity, Cut | filtres | ouverts ; options non relevées | filtre | Partiel |
| Fiche pierre | page | 0,52 ct ovale, 900,00 $, I, SI1, polissage Excellent, GIA, mesures 6,68x4,44x2,72, rapport « - » [V] | 900 $ | OK |
| Add to Ring | bouton | récapitulatif : 1 121 $ + 900 $ = 2 021,00 $ [V] | sous-total | OK |
| Add to Cart | bouton | **non cliqué** (appelle un chemin interdit) | | Non testé |
| Ask a Question, Drop a Hint, Start Over, Change, View | liens | non cliqués (formulaires, aucune saisie) | | Non testé |
| Book An Appointment, téléphone, Swym wishlist, recherche, compte | liens | présents ; non suivis | | Non testé |
| Newsletter (champ + Submit) | formulaire | non rempli | | Non testé |
| Modes de vue 3D / 360° / AR / vidéo / sur la main | | absents du constructeur par réglage [V] | | Absent |

## Options disponibles

- **Métaux** : or 14 et 18 carats jaune, blanc, rose ; platine [V].
- **Styles, formes** : comme Doland (7 familles en liste, 9 formes à l'accueil) [V].
- **Origine** : naturel et synthétique (« Lab-Grown ») [V]. Collections dédiées « Lab Grown Engagement » et « Lab Grown Wedding Bands » dans le menu [V].
- **Carat** : 0,33 à 4,04 ct ; repères de 0,5 à 5 ct à l'accueil [V].
- **Taille de doigt** : 3 à 13 par demi-taille [V].
- **Gravure, griffes, corps de bague** : absents du constructeur [V].
- **Services** : réparations, piles de montres, expertises, achat d'or, financement, assurance, bagues de fiançailles sur mesure [V, menu].

## Prix, délais, retours, garanties

- **Prix** : en dollars, séparés réglage / pierre, sous-total sur la page de bague complète [V]. Taxes et livraison : non vus (panier non atteint).
- **Délai de fabrication** : non annoncé ; seul le délai de préparation « 24-48 heures » pour expédier est écrit dans la politique (`/pages/store-policies`) [V]. [I] il vise les articles en stock.
- **Retours** (`/pages/store-policies`) : 15 jours après réception, articles non utilisés, en emballage d'origine ; retour par la poste aux frais du client, avec assurance conseillée ; articles personnalisés, sur mesure et modifiés (mise à taille, évolution de diamant) ni repris ni échangés [V].
- **Garantie** (`/pages/our-warranty`) : garantie à vie gratuite sur les bagues de fiançailles (mise à taille, remise en état, griffes, remplacement des diamants de moins de 0,20 ct), avec visite tous les six mois ; deux ans sur l'or et le platine de mode, inspection tous les six mois [V].
- **Financement** (`/pages/financing`) : 0 % pour les acheteurs qualifiés, sous réserve d'accord de crédit, à demander en boutique [V].
- **Assurance** : partenariat Zillion présenté dans la FAQ [V].

## Confiance et service

- Boutique familiale depuis 1983 (page « About » du pied de page) [V]. Adresse unique : 4340 Asbury Road, Dubuque [V].
- Rendez-vous en ligne (« Book An Appointment »), réseaux sociaux, FAQ, blog [V].
- Moyens de paiement du pied de page : Visa, Mastercard, Amex, PayPal, Diners, Discover, Apple Pay, Google Pay, Shop Pay [V].
- Certificats : la fiche pierre affiche le laboratoire et un numéro de rapport (ici « - » pour la pierre testée) [V]. Libellé : « Lab-Grown » [V].
- Langue : anglais ; devise : dollar [V].
- Preuves de fabrication, avis clients intégrés, chat, WhatsApp : non vus [V].

## Points forts à retenir pour JR Diamond

1. **Garantie à vie liée à une visite semestrielle**, détaillée sur une page dédiée, avec ce qui est couvert [V, `/pages/our-warranty`].
2. **Financement à 0 % annoncé et assurance partenaire** présentés dans les services [V, `/pages/financing`, FAQ].
3. **Prix décomposé réglage + pierre**, recalculé à chaque choix ; 2 021,00 $ obtenus avec une pierre naturelle de 0,52 ct [V, `rb-ring-review`].
4. **Catalogue de pierres en direct** (287 naturelles, 111 synthétiques dans la fenêtre 0,33-4,04 ct) avec fiche complète [V, `rb-stone-list`, `rb-stone-details`].
5. **Page « sur mesure » dédiée** (Custom Engagement Rings) et menu « Lab Grown » séparé : l'origine est un choix visible dès le menu [V].

## Défauts observés

- **Le designer 3D ne s'ouvre pas** : « Something went wrong » au dernier clic de l'assistant ; appels `jeweleros.com` refusés (CORS, 403) [V]. Cause inférée : refus pour ce visiteur automatisé ou panne ; non vérifiée, aucun contournement.
- Pas de 3D, de 360° ni de vue « sur la main » dans le constructeur par réglage [V].
- Politique de retour pour le sur mesure strictement négative (pas d'exception, pas de délai de rétractation évoqué) [V].
- Aucune information de livraison ni de délai de fabrication sur le parcours [V].
- Prix inchangé quand on change de métal sur la fiche [V].
- Numéro de rapport vide sur la pierre testée : pas de preuve de certificat visible [V].
- Pied de page : double rangée d'icônes de paiement (doublon visuel) [V, capture].

## Limites de l'audit

- Panier, livraison, moyens de paiement du récapitulatif de commande : non atteints (chemin interdit).
- Filtres couleur, pureté, taille : options non relevées.
- Un seul essai pour le designer 3D, pas de nouvel essai.
- Mesures de temps sur un essai chacune : accueil 1,7 s (ordinateur) et 2,3 s (iPhone) ; première carte de liste 4,1 s ; image principale de la fiche 3,7 s (ordinateur, mesure répétée : 4,0 s) et 3,3 s (iPhone).
- Catalogue de réglages partagé avec Doland Jewelers (même numéro de stock 390124742P-LG, mêmes prix) [V] ; le nombre de résultats diffère (1 901 contre 3 739) [V].

## Sources

- https://jamesmartinjewelers.com/pages/design-your-ring, `/apps/ring-creator/rb-setting-list`, `rb-setting-details`, `rb-stone-list`, `rb-stone-details`, `rb-ring-review`, consultés le 24/11/2026
- https://jamesmartinjewelers.com/pages/store-policies, `/pages/our-warranty`, `/pages/financing`, `/pages/faqs`, `/pages/payment-details`
- https://jamesmartinjewelers.com/robots.txt (règle `Disallow: /cart/`)
