# Audit : Floyd & Green Fine Jewelers (Aiken, Caroline du Sud)

- **Site** : Floyd & Green Fine Jewelers, https://www.floydandgreen.com/
- **Page de départ** : https://www.floydandgreen.com/design-your-own-ring/choose-your-diamond
- **Date** : 15/11/2026 (jeu de contrôles relevé les 24-25/11 selon l'horloge de la machine d'audit ; les faits ci-dessous sont ceux observés)
- **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le choix de la pierre (naturelle) est audité en entier ; l'étape « style de bague » et le panier n'ont pas pu être vérifiés (voir « Limites »).
- **robots.txt** : ClaudeBot/Claude-User explicitement autorisés ; interdit `/*?stoneID`, `/*?ringType=`, `/*?productOf`, `/site-search.html?keyword=`. Aucune adresse interdite ouverte (contrôle `robots.cjs` avant chaque adresse). Les appels `diamond_restult_ajax.php?...` sont émis par la page elle-même quand on coche un filtre (ils ne se terminent pas par `.php`, donc hors de la règle `/*.php$`).

## Parcours

Le « constructeur » est un parcours en 3 onglets : diamant, puis style de bague. Ce n'est pas un configurateur visuel : il n'y a pas de rendu de la bague.

| Étape | Options (vérifié) |
|---|---|
| 1. Choose a Natural Diamond | 10 formes, prix, carat, couleur, pureté, taille (cut), certificat ; liste de 1 215 diamants ronds par défaut |
| 1 bis. Choose a Lab Grown Diamond | mêmes filtres, mais **0 résultat** quelle que soit la forme (10 formes cochées une à une) |
| Fiche diamant `diamond-detail.html?did=…` | photo + 5 vignettes, caractéristiques, prix, Affirm, boutons de service |
| 2. Choose Your Ring Style | « Add Diamond to Ring » renvoie vers `/design-your-own-ring/choose-your-style/?did=…` : **non vérifiable** (voir Défauts) |

## Contrôles vérifiés

Ordinateur : 149 contrôles détectés sur la page de départ ; iPhone : 116. Tableau des contrôles propres au parcours (les liens de menu et de pied de page sont comptés à part).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Round, Princess, Emerald, Asscher, Marquise, Oval, Radiant, Pear, Heart, Cushion (10 cases BR, PR, EM, AS, MQ, OV, RA, PS, HS, CU) | cases | Chaque case relance la liste par requête AJAX (GET `diamond_restult_ajax.php?shape[]=…`), ~1,8 s d'attente suffisait. Rond seul : 1 215 ; tout décoché : 0 « No result found! » ; en ajoutant sans Rond : PR 418, +EM 694, +AS 719, +MQ 891, +OV 1 551, +RA 1 840, +PS 2 085, +HS 2 136, +CU 2 654 | liste filtrée | OK (vérifié) |
| Price Range (200 à 100000 $, 2 champs + curseur) | champs/curseur | Présent ; valeurs min/max lues | filtre | non testé (saisie non actionnée) |
| Carat Weight (0,25 à 15) | champs/curseur | Présent | filtre | non testé |
| Diamond Color (D…) | curseur | Présent | filtre | non testé |
| Diamond Clarity (IF, VVS1, VVS2, VS1, VS2, SI1, SI2, SI3, I1) | curseur | Présent | filtre | non testé |
| Diamond Cut (Signature Ideal, Excellent, V.Good, Good) | curseur | Présent | filtre | non testé |
| Certificat : AGS, EGL USA, EGL INTL, GCAL, GIA, IGI (6 cases ; sans EGL INTL sur la page synthétique) | cases | Toutes cochées par défaut. Sur la page synthétique, décocher GIA : toujours 0 | filtre | présent ; effet non mesurable en naturel |
| Pagination « « 1 2 … 7 » » | liens | 7 pages de 20 lignes | – | non testé |
| Cases « Compare » par ligne | cases | Présentes (la 1re colonne) | – | non testé |
| Tri par en-tête de colonne | texte | Non vérifié | – | non testé |
| Lignes du tableau (Carat, Cut, Color, Clarity, Depth, Table, Symmetry, Polish, Report, Price) | liens | Ouvrent la fiche (`diamond-detail.html?did=30600`) | prix du diamant seul, ex. 337,00 $ | OK (adresse relevée dans le DOM ; fiche chargée directement) |
| Choose a Natural Diamond / Lab Grown / Ring Style | onglets | Navigation entre étapes | – | Natural et Lab OK ; Ring Style : erreur (voir Défauts) |
| Your Selected Settings | bouton | Menu déroulant du récapitulatif | – | non testé |
| Add Diamond to Ring | lien | Mène à `choose-your-style/?did=30600` ; la barre finale redirige en 301 vers `http://` | – | KO (voir Défauts) |
| Inquire Now | lien JS | Aucune fenêtre détectée après le clic | – | non confirmé |
| Continue Shopping | lien | Retour à la liste avec les filtres dans l'adresse | – | non cliqué |
| Add to Wishlist | lien | Ouvre la page « Your Wish List » ; compteur « Saved Items (0) » inchangé | – | résultat ambigu |
| Send a Hint | lien JS | Aucune fenêtre détectée | – | non confirmé |
| Request Appointment | lien | `/page/book-an-appointment.html` | – | non ouvert |
| Text Us / chat « Have a question? Ask here! » | widget (clientbook) | Bulle de chat ; **aucune conversation ouverte** (règle) | – | présent |
| Affirm « See if you qualify » | lien JS | Aucun cadre Affirm ouvert après 2,5 s ; texte « Starting at $30/mo or 0% APR with Affirm » | 30 $/mois pour 337 $ | partiel |
| Accordéon « Shipping & Returns » | accordéon | S'ouvre ; texte de la politique | – | OK |
| Vignettes de la fiche (6) | images | Photo du diamant, 3 vues, 2 schémas (`images/diamond-shapes/round/1.jpg … line-top.jpg`) ; ce sont des images génériques de forme | – | présent |
| Bandeau cookies (Essential, Personalization, Analytics, Marketing ; Decline all, Confirm, Accept all) | boutons | Deux bandeaux superposés (un modal et un bandeau « ACCEPT / REJECT / SETTINGS ») | – | OK |
| Recherche « Search For Jewelry », compte, panier, souhaits | champ/liens | Présents en en-tête | – | non actionnés |
| Panier `cart.html` | lien | **Non ouvert** : l'ouverture a été refusée par le système de permissions de la session ; le robots.txt l'autorise | – | non testé |

## Options disponibles

- **Formes** : ronde, princesse, émeraude, asscher, marquise, ovale, radiant, poire, cœur, coussin.
- **Origine** : naturel (onglet principal) ; synthétique (onglet « Lab Grown », vide au moment de l'audit).
- **Certificats** : AGS, EGL USA, EGL INTL, GCAL, GIA, IGI ; certaines lignes affichent « APPRAISAL » à la place d'un certificat.
- **Carat** : 0,25 à 15 ; **prix** : 200 à 100 000 $ ; **couleur** D à… ; **pureté** IF à I1 (SI3 compris) ; **taille** Signature Ideal à Good.
- **Colonnes de la liste** : carat, taille, couleur, pureté, profondeur, table, symétrie, polissage, certificat, prix.
- **Métal, corps de bague, griffes, taille de doigt, gravure** : non vus (étape bague inaccessible).

## Prix, délais, retours, garanties

- **Prix** : prix du diamant seul, en dollars, avec deux décimales (ex. 0,34 ct rond K SI1 GIA : 337,00 $). Pas de décomposition. Mention sur la fiche : « Prices may not reflect gold market fluctuations and cannot be guaranteed… Please call to confirm today's price and availability » (vérifié, fiche `did=30600`).
- **Financement** : Affirm, « Starting at $30/mo or 0% APR » (vérifié sur la fiche).
- **Livraison** (`/page/shipping-policy.html`, lu) : sous 250 $ : retrait gratuit ou FedEx Ground 15 $ ; 250 à 1 000 $ : FedEx Ground gratuit ; plus de 1 000 $ : FedEx 2 jours gratuit ; surclassements 40 $ (2 jours) et 75 $ (nuit). Délai standard 5-7 jours, accéléré 3-5 jours ; signature obligatoire ; envois assurés. Un ancien texte de la fiche parle de « FREE USPS Priority over $250 » et de FedEx 30 $ au-dessus de 1 000 $ : **les deux pages se contredisent** (vérifié).
- **Délai de fabrication** : commande spéciale « 4 à 6 semaines en moyenne » (politique de livraison) ; création sur mesure « 6 à 8 semaines » (`/page/about-custom-design.html`). Rien en jours ouvrés.
- **Retours** : 30 jours avec facture, article non porté, boîte d'origine. **Exclus** : articles soldés, commandes spéciales, mises à taille et pièces sur mesure ; les commandes spéciales exigent un acompte non remboursable ; layaway 180 jours, acompte 20 % (vérifié, `/page/store-policies.html`).
- **Garanties** : une FAQ « What warranties do you offer? » existe ; contenu non ouvert.

## Confiance et service

- Téléphone 803-649-6005, rendez-vous en ligne, chat, « Text Us », magasin à Aiken (515 Silver Bluff Road), horaires affichés.
- Préparation de la commande : pas de suivi visuel de fabrication sur le parcours. **Perfect Love Custom** : « nous conservons chaque étape » et assemblons les images en un récit (page sur mesure, lu) ; c'est la seule preuve de fabrication relevée.
- CAO : l'atelier montre des rendus photoréalistes et un modèle 3D en ligne pour valider le sur-mesure (texte lu).
- Libellé du synthétique : « Lab Grown » (onglet) et « lab created » dans l'adresse ; page FAQ « What is a synthetic diamond… ». Page « Conflict Free Diamonds » présente.
- Langues : un bouton « ES » en en-tête des pages internes (inféré à partir du texte) ; devise unique : dollar.
- Avis clients : aucun avis relevé sur les pages parcourues.

## Points forts à retenir pour JR Diamond

1. **Liste filtrable lisible et rapide** : chaque filtre répond en environ 2 s, avec colonnes complètes (profondeur, table, symétrie, polissage, certificat). Preuve : requêtes AJAX et comptes de résultats relevés ci-dessus.
2. **Grille de livraison claire par palier de prix** (retrait gratuit, Ground, 2 jours, nuit) avec jours annoncés. Preuve : page `shipping-policy.html`.
3. **Financement à côté du prix** (Affirm 30 $/mois). Preuve : fiche `did=30600`.
4. **Récit de fabrication vendu comme service** (Perfect Love Custom) : confirme l'intérêt du positionnement « on voit naître son bijou ». Preuve : `about-custom-design.html`.
5. **Mention honnête que le prix n'est pas garanti** : à éviter chez JR Diamond, mais montre que les prix de l'or bougent.

## Défauts observés

- **Étape « style de bague » inaccessible** : `…/choose-your-style?did=30600` en https affiche une **erreur PHP brute** (« Fatal error: Uncaught TypeError: Unsupported operand types: string - int … design-your-own-ring-page.php:191 ») avec chemins serveur visibles ; la même adresse avec barre finale répond par un 301 vers `http://` (HTTP en clair). Vérifié par `curl -I` (301, `location: http://…`) et par le navigateur.
- **Onglet synthétique vide** : 0 diamant pour les 10 formes.
- **Aucun rendu de la bague** : le parcours ne montre jamais le bijou.
- **Politiques contradictoires** sur la livraison (USPS 250 $ contre FedEx Ground 250 $ ; FedEx 2 jours à 30 $ contre gratuit).
- Le menu principal utilise des liens `javascript:;` (« GET ENGAGED », « SERVICES »…) ; deux bandeaux de cookies superposés ; « Terms & Conditions » pointe vers la page de confidentialité.

## Limites de l'audit

- Panier non ouvert (refus du système de permissions) : récapitulatif, moyens de paiement et frais finaux non vus.
- Étape bague (métal, monture, taille, gravure), comparaison, tri, pagination, curseurs, Affirm, « Inquire Now », « Send a Hint » non confirmés.
- Temps d'apparition : premier visuel (tableau et miniatures) en environ 2,2 s ordinateur, 1,5 s iPhone, mesuré une fois jusqu'à la première image du tableau.
- Pas de conversation de chat, pas de formulaire, pas de compte.

## Sources

- https://www.floydandgreen.com/design-your-own-ring/choose-your-diamond (vérifié, ordinateur et iPhone)
- https://www.floydandgreen.com/find-a-lab-created-diamond.html (vérifié)
- https://www.floydandgreen.com/diamond-detail.html?did=30600 (vérifié)
- https://www.floydandgreen.com/page/shipping-policy.html, /page/store-policies.html, /page/faqs.html, /page/about-custom-design.html (lus)
- https://www.floydandgreen.com/robots.txt (lu)
