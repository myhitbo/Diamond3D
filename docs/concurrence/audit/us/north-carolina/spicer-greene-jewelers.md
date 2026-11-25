# Audit : Spicer Greene Jewelers (Asheville, Hendersonville, Caroline du Nord)

- **Site** : Spicer Greene Jewelers, https://spicergreene.com/
- **Page de départ** : https://spicergreene.com/pages/diamond-bar?ose=false#page/ring-builder-settings-mounts/
- **Date** : 15/11/2026 (consigne) ; mesures faites le 25/11/2026
- **Appareils** : ordinateur Chromium 1366x900 ; affichage iPhone 13 (temps d'apparition seulement)
- **Statut** : **partiel**. Le constructeur « Diamond Bar Ring Builder » est un iframe hébergé par `digitalminingco.com` (autorisé par son robots.txt). Étapes monture lue et actionnée ; étape diamant, bande, récapitulatif et panier non parcourus (voir Limites).
- Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
| --- | --- | --- |
| Constructeur en 4 étapes : Choose a Diamond, Choose a Setting, Choose a Band (optional), Complete Set | on peut commencer par la monture ou par la pierre | [V] iframe `digitalminingco.com/spicergreene/page/ring-builder-settings-mounts/` |
| Choose a Setting (page de départ) | filtres style (4), métal (7), prix (min 300, max 3 000 par défaut) ; 17 montures « SEMI… » à prix affiché | [V] |
| Fiche monture | métal (7), carat de la pierre à sertir (0,50-0,70 / 0,90-1,00 / 1,50-2,00 / 2+), prix, « SELECT THIS SETTING » | [V] https://www.digitalminingco.com/spicergreene/setting/SEMI00022/ |
| Choose a Diamond | lien de l'étape `…/page/ring-builder-diamond` : réponse « 404 PAGE NOT FOUND » à l'ouverture directe | [V] (défaut ou adresse à paramètre) |
| Choose a Band, Complete Set, panier | non parcourus | non testé |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Style : Solitaire, Solitaire with Diamonds, Halo, Three Stones | cases | présentes ; cliquées par script : comptage des montures inchangé (36 liens) | inchangé | [V] présentes, effet non démontré |
| Métal : 14 k blanc, 18 k blanc, 14 k jaune, 18 k jaune, 14 k rose, 18 k rose, platine | boutons radio | actionnés un à un : les prix des 4 premières montures changent | 14 k blanc $1 059/1 089/1 489/1 859 ; 18 k blanc $1 309/1 359/1 759/2 119 ; 14 k jaune $1 069/1 099/1 499/1 869 ; 18 k jaune $1 309/…/2 119 ; 14 k rose $829/879/1 389/1 709 ; 18 k rose $1 409/1 459/1 889/2 279 ; platine $1 479/1 529/1 969/2 379 | [V] fonctionne ; l'image reste argentée (non vérifié pour le rendu de couleur) |
| Prix min / max (champs + curseur) | champs | max fixé à 1 500 : 36 → 20 liens ; certaines montures à $1 059 restent | filtre effectif | [V] fonctionne |
| « VIEW DETAILS » (17 montures) | liens | ouvre la fiche (SEMI00022…) | prix de la monture seule | [V] |
| Fiche : menu de métal | liste | 7 valeurs | prix selon métal | [V] présent ; non actionné sur la fiche |
| Fiche : menu de carat | liste | 4 plages (0,50-0,70 à 2+) | non observé | [V] présent ; non actionné |
| « SELECT THIS SETTING » | lien | mène à l'étape suivante ; non cliqué | - | non testé |
| « Choose a Diamond » (étape) | lien | 404 en ouverture directe | - | [V] défaut |
| BUY A DIAMOND, SELL A DIAMOND, DIAMONDS 101, RING BUILDER, FIND MY DIAMOND'S VALUE, SCHEDULE A DIAMOND TASTING | liens | présents ; non ouverts | - | non testé |
| « Text us » (Podium) | bouton | bulle « Hi there, have a question? Text us here. » ; non ouvert | - | [V] présent |
| Menu : SHOP, DIAMOND BAR, WATCH BAR, ESTATE, COLLECTIONS, ENGAGEMENT, SERVICES ; recherche ; LOG IN ; CART ; wishlist (Swym) | liens | présents ; panier `/cart` autorisé par robots.txt mais non ouvert (voir Limites) | - | non testé |
| Newsletter (e-mail + Subscribe) | formulaire | non rempli par consigne | - | non testé |
| Liens réseaux (Instagram, Facebook, YouTube, TikTok) | liens | présents | - | [V] |

Contrôles recensés : 57 (page hôte, ordinateur) ; l'iframe ajoute étapes, 4 cases de style, 7 radios de métal, 2 champs de prix, 17 « VIEW DETAILS ».

## Options disponibles

- **Métaux** : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine [V]. Écart de prix 14 k → 18 k visible, p. ex. $1 059 → $1 309 (blanc, première monture) [V].
- **Styles** : Solitaire, Solitaire with Diamonds, Halo, Three Stones [V].
- **Formes** : montures « pour pierre ronde, ovale, émeraude, poire, princesse » (noms des 17 montures : « Oval Halo », « Emerald Solitaire », « Pear… », « Princess… ») [V].
- **Carats de pierre** : plages 0,50-0,70, 0,90-1,00, 1,50-2,00, 2+ [V].
- **Prix** : curseur 300 à 3 000 par défaut [V].
- Origine naturel / synthétique, taille de doigt, gravure, vue 3D, 360°, AR : non vus dans les étapes actionnées [I]. Les images sont des photos de rendu sur fond blanc [V].

## Prix, délais, retours, garanties

- **Prix** : affichés sans connexion pour la monture seule (de $829 à $2 379 selon métal et modèle, parmi les montures lues) [V]. Pierre vendue à part (étape 1).
- **Livraison** : sous $4 999 expédition Ground gratuite ; $5 000-9 999 : 2 jours pour $50 ; dès $10 000 : Overnight pour $75 ; pas d'international ; signature adulte ; attente possible de 10 jours pour plus de $2 500 (https://spicergreene.com/pages/shipping-policy, mise à jour le 5/6/2026) [V].
- **Retours** : 30 jours, articles non portés ; « Special orders, … modified and/or custom pieces, discounted merchandise » ni repris ni échangés ; commande spéciale : acompte non remboursable de 50 % ; mise de côté à partir de 30 % (https://spicergreene.com/pages/exchanges-and-returns) [V].
- **Délai de fabrication** : non trouvé dans les pages lues [I].
- **Garanties, certificats** (GIA/IGI), libellé du synthétique : non relevés (l'étape pierre n'a pas été atteinte) [I].

## Confiance et service

- Boutiques : Downtown Asheville (121 Patton Avenue) et Hendersonville (225 N. Main Street) ; téléphone (828) 253-1805 ; lundi à samedi (Asheville 10 h-18 h) [V].
- Services : achat, vente et échange de diamants, estimation (« FIND MY DIAMOND'S VALUE »), dégustation de diamants sur rendez-vous, montres et estate [V].
- Éducation : « Diamonds 101 », « Engagement Rings 101 », « Gemstones 101 », blog [V].
- Chat par SMS (Podium) et suivi d'audience (Hotjar, CallRail, pixels publicitaires) [V par requêtes réseau].
- Langues : anglais ; devise : dollar [V]. Aucune preuve de fabrication (photos ou vidéos d'atelier) trouvée dans les pages lues pour le constructeur [I].
- Le site publie des consignes aux agents automatisés (https://spicergreene.com/agents.md) : recours aux outils UCP/WebMCP pour les actions d'achat, pas de saisie de formulaires de panier par script [V]. Je m'y suis conformé : lecture seule, aucune action de panier.

## Points forts à retenir pour JR Diamond

1. **Prix affiché dès la grille de montures, avec effet immédiat du métal** : changer de 14 k blanc à 18 k blanc fait passer $1 059 à $1 309 sans rechargement de page. C'est l'écart principal de JR Diamond (« Sur devis »). Preuve : radios de métal actionnées dans l'iframe.
2. **Plages de carat sur la fiche d'une monture** (0,50-0,70 à 2+) pour guider le choix : modèle pour le sélecteur de carat d'un solitaire. Preuve : fiche SEMI00022.
3. **Constructeur à entrée libre (monture ou pierre d'abord)**, 4 étapes avec bande optionnelle. Preuve : barre d'étapes de l'iframe.
4. **Barème d'expédition lisible et gratuit sous $4 999**. Preuve : page shipping-policy.
5. **Rachat et estimation de diamants** (Diamond Bar) : argument de confiance autour du prix de la pierre. Preuve : liens BUY/SELL A DIAMOND, FIND MY DIAMOND'S VALUE (non ouverts).

## Défauts observés

- Le lien de l'étape « Choose a Diamond » mène à une page 404 à l'ouverture directe (adresse `…/page/ring-builder-diamond` sans paramètre) [V].
- Pas de rendu 3D, 360° ni photo de la monture sur la main : photos fixes d'un rendu argenté, quel que soit le métal choisi [V pour les vignettes].
- Les cases de style ne changent pas le comptage dans mon essai (36 liens) ; le filtre a pu demander un autre geste [V, interprétation incertaine].
- Commandes spéciales et sur mesure non reprises, acompte de 50 % non remboursable [V].
- Page d'accueil du constructeur marquée « Diamond Bar Official Retailer » : outil tiers, texte de l'interface en anglais seulement [V].

## Limites de l'audit

- Étapes diamant, bande et récapitulatif non parcourues (404 à l'ouverture directe de l'étape pierre ; aucune action de panier par script : le site demande aux agents de passer par ses outils d'achat). Le panier (https://spicergreene.com/cart, autorisé par robots.txt) n'a pas été ouvert ; livraison, moyens de paiement du panier non relevés.
- Filtres de style : effet non démontré. Menus de la fiche (métal, carat) présents mais non actionnés.
- Aucune vue 3D, photo sur la main, AR, gravure, taille de doigt ni filtre de pierre relevés dans les étapes lues.
- Temps d'apparition du premier visuel (première image de monture dans l'iframe, mesuré depuis la requête de page) : ordinateur 4,1 s ; iPhone 5,4 s [V].
- Capture d'écran de la page hôte : le constructeur y est intégré en iframe, d'où un contenu d'iframe non listé par l'outil `controls.cjs`.

## Sources

- https://spicergreene.com/pages/diamond-bar?ose=false#page/ring-builder-settings-mounts/
- https://www.digitalminingco.com/spicergreene/page/ring-builder-settings-mounts/ (iframe)
- https://www.digitalminingco.com/spicergreene/setting/SEMI00022/
- https://spicergreene.com/pages/shipping-policy
- https://spicergreene.com/pages/exchanges-and-returns
- https://spicergreene.com/pages/engagement-rings-101
- https://spicergreene.com/agents.md ; robots.txt de spicergreene.com et de digitalminingco.com
- Inventaire : docs/concurrence/audit/us/north-carolina/INVENTAIRE.md
