# Journey Jewelers (Oklahoma City) : audit du constructeur de bague

- **Site** : Journey Jewelers, https://journeyjewelers.com/ — page de départ https://journeyjewelers.com/ring-builder
- **Date** : 15/11/2026 (audit réalisé par l'auditeur Oklahoma 2)
- **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (parcours jusqu'à la page /checkout atteint, sans rien saisir ni payer ; chat, formulaire « Request this ring », boutons de paiement non actionnés ; détails mobile non rejoués étape par étape)
- Marquage : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé.
- robots.txt : `Allow: /`, `Disallow: /admin` [V]. Aucune adresse interdite ouverte. Un script a bloqué toute navigation vers un autre domaine (Turnstile Cloudflare, iframe Square) ; ces requêtes sont des chargements automatiques de la page.

## Parcours

| Étape | Options (vérifié) |
|---|---|
| 1. Choisir la monture (/ring-builder) | Filtres : type de pierre, carat, métal, tri, budget total ; forme (10) ; tête (5) ; anneau (7). Grille de 226 modèles « avec pierres assorties en stock » ; pastilles d'aperçu or jaune / blanc / rose |
| 1b. Fiche de la monture (même adresse, pas de changement d'URL) | Forme de la pierre centrale (6), nature de la pierre (3), taille de pierre (grille de carats), métal (7 pastilles), taille de doigt (liste), case « bande assortie », 5 vues photo, « Share this ring » |
| 2. Choisir la pierre | Onglets Lab-Grown / Natural / Gemstones, Filters, liste des pierres réelles qui rentrent dans la monture (24 en synthétique ovale 9x7 mm) avec photo, couleur, pureté, dimensions, prix ; « Play video » ; « View stone details » |
| 3. Vérifier la bague | Récapitulatif, case bande assortie, case plan de protection « JM Care Plan », « Request this ring », « Continue to checkout » |
| Paiement (/checkout) | Contact, livraison (expédition ou retrait en boutique), adresse, carte via Square |

## Contrôles vérifiés

Liste issue de controls.cjs (136 contrôles ordinateur, 110 en iPhone) puis actionnés à la main.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu Repairs / Custom design / Engagement / Wedding bands / Gifts / Learn | liens | Pages de contenu (/custom-design et /learn et /engagement lues) | - | OK |
| Search, Your account (Clerk), Cart (0 items) | boutons / lien | Non actionnés (compte non créé) ; lien /cart présent | - | non testé (règle : pas de compte) |
| Budget « Shopping with a total budget? » + Go | champ + bouton | Non testé (saisie de budget) ; seule la présence est relevée | - | non testé |
| Stone type : Any / Lab-grown diamond / Natural diamond / Gemstone | liste | Options lues dans le `<select>` natif | - | OK (lecture) |
| Carat size : Any / Under 0.5 / 0.5-0.75 / 0.75-1 / 1-1.5 / 1.5-2 / 2 ct and up | liste | Options lues | - | OK (lecture) |
| Metal : tous alliages 14K/18K jaune, blanc, rose, bicolores, avec platine, platine | liste | Options lues | - | OK (lecture) |
| Sort : Most popular / Price low to high / high to low | liste | Options lues | - | OK (lecture) |
| Shape (Asscher, Cushion, Elongated Cushion, Emerald, Heart, Marquise, Oval, Pear, Round, Square) | boutons | « Oval » : appel /api/rb/mountings?shape=Oval, compteur passe à « 222 ring designs » ; second clic : retire le filtre | - | OK |
| Head (Claw/prong, Bezel, Halo, Hidden halo, Three-stone) | boutons | « Bezel » : appel style_head=bezel, grille filtrée | - | OK |
| Band (Plain/solitaire, Pavé/accented, Vintage, Bypass, Infinity, Sculptural, Floral) | boutons | Présents ; non cliqués un par un | - | non testé individuellement |
| Pastilles « Preview in yellow / white / rose gold » | boutons | Rose : l'image de la carte change de couleur | prix de carte inchangé | OK |
| Carte de monture | div role=button | Ouvre la fiche (étape 1b), requête mounting-views | « from $1,006.50 » en carte | OK |
| Forme de pierre (Oval, Emerald, Round, Square, Cushion, Asscher) | boutons | Round puis Emerald : la monture est remplacée par une autre (CONFIG différent, 998,85 $ puis 997,95 $) | change | OK |
| Lab-Grown / Natural / Gemstone | radios | Lab 1,52 ct 1 045 $ ; Natural 1,55 ct 11 160 $ ; Gemstone 1,95 ct 248,25 $ (bague : 2 330,15 $, 12 445,15 $, 1 533,40 $) | change | OK |
| Taille de pierre (0,25 à 11,55 ct, mm) | boutons | 1,50 ct : monture 1 244,58 + pierre 1 687,50 ; 0,75 ct : 1 158,18 + 385 ; certaines tailles grisées (hors stock) | change | OK |
| Métal (7 pastilles) | boutons | 14K rose 1 304,88 ; 14K blanc 1 290,15 ; 14K jaune 1 285,15 ; 18K jaune/rose 2 040,10 ; 18K blanc 1 972,05 ; platine 2 068,53 (monture, $) | change | OK |
| Taille de doigt | liste de 21 options | 4 à 13 par demi-taille + « Not sure - size me at pickup » ; obligatoire pour continuer | - | OK |
| Case bande assortie | case | Coche : la photo montre la paire ; le total affiché en en-tête n'a pas changé (857,75 $ à 1 362,95 $ selon le métal affiché sur la case) | I : ajouté au récapitulatif | OK partiel |
| Vues 1 à 5 (boutons miniatures) | miniatures | Cliquées, images alternatives | - | OK (sans libellé accessible) |
| Share this ring | bouton | Cliqué ; aucun texte « copié » détecté | - | état incertain |
| Continue with this setting | bouton | Désactivé tant que la taille n'est pas choisie ; mène à l'étape 2 | - | OK |
| Onglets Lab-Grown / Natural / Gemstones (étape 2) | onglets | Natural : 11 pierres, de 11 160 $ à plus de 16 887 $ pour 1,70 ct | change | OK |
| Filters (étape 2) | panneau | Couleur (radios White / Fancy, D à N avec aide « D is colorless… »), 4 champs numériques ; non modifiés | - | ouverts, effets non testés |
| Play video (par pierre) | boutons | Présents sur chaque pierre ; non lancés | - | non testé |
| View stone details | bouton | Fiche : type, forme, carat, dimensions, couleur, pureté, laboratoire IGI, n° de rapport, procédé « Heat and pressure », « View grading report » | - | OK |
| Choose this stone & review ring | bouton | Étape 3 | - | OK |
| JM Care Plan (case) | case | 269,99 $ une fois, « on vous expliquera le plan » ; non cochée | I | présente |
| Request this ring | lien | Ouvre un formulaire « Free consultation » (non rempli) | - | OK (ouverture) |
| Continue to checkout | bouton | Mène à /checkout | - | OK |
| Call (405) 719-2535 | lien | Lien téléphone | - | présent |
| Ask Loupe | bouton | Assistant de chat ; non ouvert | - | non testé (règle chat) |
| Pay $2,534.04 by card | bouton | Non cliqué | - | non testé (paiement) |

## Options disponibles

- **Formes** : Asscher, Cushion, Elongated Cushion, Emerald, Heart, Marquise, Oval, Pear, Round, Square [V]. Sur la fiche, seulement les formes compatibles avec la monture (ex. 6).
- **Têtes** : griffes, serti clos, halo, halo caché, trois pierres. **Anneaux** : uni, pavé, vintage, bypass, infinity, sculptural, floral.
- **Métaux** : 14K et 18K jaune, blanc, rose, plus platine ; la liste de filtre contient aussi des bicolores et « & Platinum » [V].
- **Pierres** : synthétique, naturel, gemme. Carat par tranches et par pierre réelle (couleur D à N, fancy).
- **Taille de doigt** : 4 à 13 par 0,5 ; ou « size me at pickup ».
- **Extras** : bande assortie (prix par métal), JM Care Plan 269,99 $.
- Pas de gravure ni d'option de pavé personnalisée sur le parcours vérifié [V sur ce parcours].

## Prix, délais, retours, garanties

- **Prix affichés** en dollars, « from $X » en liste ; sur la fiche : « Setting $1,285.15 + stone $1,045.00 », « Ring from $2,330.15 » [V]. Décomposition monture + pierre visible, pas de détail métal/façon.
- **Panier/paiement** (/checkout) : sous-total 2 330,15 $, livraison « Free », taxe 203,89 $ (soit environ 8,75 % du sous-total ; calcul inféré), total 2 534,04 $ [V]. Retrait gratuit en boutique ou expédition.
- **Retours** : « exchanges and store credit within 15 days; no refunds » [V, texte du pied de paiement]. Mention d'exception du sur mesure : non trouvée.
- **Délai de fabrication de la bague** du constructeur : non annoncé sur les pages lues [V]. Pour le sur-mesure CAO : 3 à 5 jours ouvrés de consultation, 3 à 5 de CAO, acompte 50 % [V /custom-design].
- **Garantie** : seul le plan payant JM Care Plan ; durée de garantie gratuite non trouvée.
- **Moyens de paiement** : carte via Square [V] ; autres moyens non affichés.

## Confiance et service

- Boutique physique (13316 S Western Ave, Oklahoma City), téléphone, courriel, horaires, « At the bench since 1982 » [V].
- Certificats : IGI sur le synthétique, avec n° de rapport et lien vers le rapport [V] ; naturels non ouverts [S].
- Libellé « Lab-Grown Diamond » [V]. Langue : anglais seulement ; devise : USD.
- Photos de pierre réelles par pierre (et vidéo annoncée), mais images de monture issues d'un rendu de catalogue (domaine meteor.stullercloud.com) [V].
- Avis clients, suivi de commande, vidéos d'atelier : non vus sur les pages lues.
- Preuve de fabrication : pour le sur-mesure, impression 3D à tenir en main avant fonte ; messages par SMS à chaque étape [V].

## Points forts à retenir pour JR Diamond

1. **Pierre réelle choisie par numéro**, avec photo, mesures, couleur, pureté, n° de rapport IGI et lien vers le rapport, avant la bague. Preuve : fiche « 1.52 ct Oval Lab-Grown Diamond », Stone # 500131828.
2. **Prix qui bouge en direct à chaque option** : monture + pierre, par métal (14K jaune 1 285,15 $ ; 18K 2 040,10 $ ; platine 2 068,53 $).
3. **Comparaison naturel / synthétique dans la même bague** : 1,52 ct synthétique 2 330,15 $ contre 1,55 ct naturel 12 445,15 $.
4. **Total avec taxe et livraison avant paiement** : 2 534,04 $, livraison gratuite.
5. **Étapes numérotées** (monture, pierre, vérification) et bouton « Share this ring ».
6. **Preuve de fabrication SMS + modèle imprimé** pour le sur-mesure (/custom-design).
7. **Suggestion budget** : champ « total budget » (non testé).

## Défauts observés

- Les cartes de monture sont des `div` (non des liens) : pas d'adresse par bague, l'URL reste /ring-builder à chaque étape (partage et retour arrière peu fiables) [V].
- Retours : pas de remboursement, 15 jours [V].
- Les vues 1 à 5 n'ont pas de nom accessible ; le bouton « Share this ring » ne confirme rien de visible [V].
- Beaucoup de cartes de la grille n'ont pas d'image avant le défilement (chargement différé) [V sur capture pleine page].
- Le total d'en-tête ne change pas quand on coche la bande assortie [V].
- Aucune 3D ni vue manipulable : images fixes [V].

## Limites de l'audit

- Le chargement du premier visuel : 1,16 s (ordinateur) et 1,21 s (iPhone) pour la première image de la grille ; mesure sur la fiche non fiable (mobile : script trop rapide). [V pour la grille]
- Non testés : budget, anneaux, filtres de pierre, vidéo des pierres, chat Loupe, compte, formulaire, paiement, pages de livraison et de retours détaillées, avis.
- Le formulaire de paiement Square est resté en « Loading secure card form… » dans l'environnement bloqué (iframe tiers coupée volontairement).
- Parcours mobile seulement vérifié jusqu'à la fiche (pas de débordement horizontal).

## Sources

- https://journeyjewelers.com/ring-builder, /checkout, /custom-design, /learn, /engagement, /robots.txt (lus le 15/11/2026).
- API de la page : /api/rb/mountings, /api/rb/stone-floor, /api/rb/diamonds (observées).
