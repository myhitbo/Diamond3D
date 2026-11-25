# Audit : Joolme, constructeur monture puis diamant (hébreu, ₪)

| | |
|---|---|
| Site | JOOLME, salle d'exposition à Ramat Gan (« חנות תצוגה », Bourse) ; téléphone 03-575-2457 ; WhatsApp et e-mail (V) |
| Page de départ | https://www.joolme.co.il/collections/engagement-rings, puis la fiche https://www.joolme.co.il/products/טבעת-אירוסין-albireo (le constructeur est la fiche elle-même : paramètre `stage=1` à `4`) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet jusqu'au récapitulatif** (étape 4, bouton « הוספה לעגלה »). **Ajout au panier non réalisé** : il passe par `/cart/add.js`, interdit par le robots.txt (`Disallow: /cart/`) ; la requête a été bloquée par la règle de l'audit. Le constructeur a été parcouru en entier sur ordinateur ; sur iPhone, seules les étapes 1 et 3 ont été chargées (voir les limites) |
| robots.txt | Shopify standard : `Allow: /` ; interdits `/cart/`, `/cart.js`, `/checkout`, `/checkouts/`, `/account`, `/orders`, `/recommendations/products`, `/collections/*sort_by*`, `/collections/*+*`, `/collections/*filter*&*filter*`, `/cdn/wpm/*.js`, `/.well-known/shopify/monorail`. Aucun `Crawl-delay` (V). Les requêtes interdites émises par la page (`monorail`, `checkouts/internal/preloads.js`, scripts `wpm`) ont été bloquées. Le tri, le cumul de filtres et le panier n'ont pas été actionnés |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

Dans l'inventaire, Joolme était classé « partiel : monture, puis pierre vendue à part ». Le parcours est en fait **un constructeur en quatre étapes sur une seule adresse** (V).

| Étape (`stage=`) | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 0. Collection « טבעות אירוסין » | 101 modèles « החל מ- » (de 2 340 ₪, « Classics », à 4 600 ₪ et plus) ; filtres : or jaune, émeraude, ovale, solitaire, trois pierres, halo (V) | « dès » sur chaque carte | — |
| 1. Fiche (monture) | métal : 14 k ou 18 k (modèle « Albireo », or blanc) ; la forme du diamant est annoncée « rond » et les 7 formes proposées en bas de page (V) | **14 k 2 900 ₪ → 18 k 3 300 ₪** (+ 400), paramètre `typeOfGold=18k` (V) | la photo reste celle de l'or blanc 14 k (V) |
| 2. `stage=2` : « בחרו את היהלום המרכזי » | **naturel ou laboratoire** ; couleur D / F / G ; pureté VS1 / VS2 / SI1 ; **poids** par curseur de 0,25 à 3,00 ct ; total des carats (centre + côtés, 0,41 ct) ; « המחיר כולל את הטבעת » (V) | voir ci-dessous | **illustration générique d'un diamant rond**, ni la bague, ni la pierre réelle (V) |
| 3. `stage=3` : taille | tailles européennes 48 à 56, « plus de tailles » jusqu'à 70 (demi-tailles de 43 à 70), tailles US, case « aidez-moi à choisir la taille après la commande », guide des tailles (V) | inchangé | — |
| 4. `stage=4` : récapitulatif | bague (modèle, 14 k blanc, pierres de côté 0,16 ct), taille « 52 EU », diamant (0,25 ct, rond, laboratoire, G, SI1), **2 900 ₪**, « 12 paiements sans intérêt de 241,67 ₪ », date de livraison estimée, **« הוספה לעגלה »** (V) | rappel du total | — |

L'état de la configuration est dans l'adresse (`shapeActive`, `natOrLab`, `diamondColor`, `diamondCleanlines`, `diamondSize`, `typeOfGold`, `stage`, `sizeProduct`) : elle se partage et se reprend (V).

## Prix relevés (V : étape 2, ordinateur, bague Albireo, or blanc 14 k, rond ; total « bague + pierre »)

| Choix | Total |
|---|---|
| laboratoire, 0,25 ct, G, SI1 (départ) | 2 900 ₪ |
| couleur F / D (pureté SI1) | 3 070 / 3 090 ₪ |
| pureté VS2 / VS1 (couleur G) | 3 070 / 3 100 ₪ |
| laboratoire, 1,30 ct, G, SI1 | 4 960 ₪ (total des carats 1,46) |
| laboratoire, 3,00 ct, G, SI1 | 7 660 ₪ (total des carats 3,16) |
| naturel, 0,25 ct, G, SI1 | 3 580 ₪ |
| naturel, 3,00 ct, G, SI1 | **95 300 ₪** |

Le prix se met à jour à chaque clic, sans rechargement de page, avec le total de carats (V). Le « D » coûte plus que le « F » d'une faible marge (20 ₪) : cohérent avec un prix par grille (I).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 14k / 18k | boutons | l'adresse reçoit `typeOfGold`, le libellé du titre passe à « זהב לבן 18k » (V) | + 400 ₪ | fonctionne |
| המשך לבחירת היהלום | bouton (div) | passe à `stage=2` (V) | — | fonctionne |
| טבעי / מעבדה | bascule | change la grille de prix ; couleur et pureté sont conservées (V) | 2 900 → 3 580 ₪ à 0,25 ct | fonctionne |
| D / F / G (couleur), VS1 / VS2 / SI1 (pureté) | boutons radio | mettent le total à jour (V) | voir le tableau | fonctionne |
| Curseur de poids | poignée à glisser | affiche 1,30 puis 3,00 ct ; total de carats et prix suivent (V) | 4 960 ; 7 660 ₪ | fonctionne ; le champ de saisie « 0.25 ct » ne s'est pas rempli au clavier (V) |
| ? (info-bulles couleur, pureté, poids, naturel ou laboratoire) | boutons | présents (V : capture) | — | non actionnés |
| בחרו את היהלום הזה | bouton | passe à `stage=3` (V) | — | fonctionne |
| מידות 48 à 56 · עוד מידות | boutons radio | la taille « 52 EU » est reprise au récapitulatif (V) ; « plus de tailles » dévoile les tailles 43 à 70 (V) | inchangé | fonctionne |
| תעזרו לי לבחור מידה אחרי ההזמנה | case | présente (V) | — | non cochée |
| המשך | bouton | passe à `stage=4` (V) | — | fonctionne |
| הוספה לעגלה | bouton | cliqué : requête vers `/cart/add.js` **bloquée par la règle de l'audit** (V) | — | **non réalisé** |
| 12 paiements sans intérêt | texte | 241,67 ₪ par mois pour 2 900 ₪ (V) | — | informatif |
| קבע פגישה | bouton | rendez-vous en boutique ou visio (V : libellé) | — | non actionné |
| Cartes de forme en bas de fiche (עגול, פרינסס, קושן, אובל, אמרלד, טיפה, מרקיזה) | liens | **aucun changement observé** après un clic de 2 s ; l'effet réel (autre fiche ou autre paramètre) n'est pas établi (V) | — | non concluant |
| חריטה אישית | option | « gravure personnelle offerte » (חריטה אישית במתנה) prévue dans le panier : modèle de panier présent dans le HTML des pages (V : source de page) ; le panier n'a pas été ouvert | — | non vu en action |

Absents du parcours (V) : 3D, 360°, vidéo, essayage, comparaison, photo de la pierre réelle, certificat visible avant la commande, laboratoire du certificat nommé (voir les défauts).

## Options disponibles

- **Métal** : or 14 k et 18 k (or blanc sur la fiche lue) ; l'or rouge et l'or jaune existent (filtre jaune, retours « or rouge », « 18 k » dans la politique) ; pas de platine relevé (V).
- **Pierre** : naturel ou laboratoire, pour **chaque** modèle (« בכל דגם אפשר לבחור… ») ; couleur D, F, G ; pureté VS1, VS2, SI1 ; poids de 0,25 à 3,00 ct ; « tous nos diamants sont taillés Very Good ou Excellent » (V).
- **Formes** : rond, princesse, coussin, ovale, émeraude, poire, marquise (fiche) ; radiant, cœur, asscher dans le panier (V : modèle de panier).
- **Taille** : européenne 43 à 70 (V) ; guide « taille moyenne d'une femme » (V : lien).

## Prix, délais, retours, garanties

Sources : fiche et `/pages/returns-exchanges-resizes` (V).

- **Prix** : TTC, total bague + pierre, sans décomposition entre la monture et la pierre à l'écran (V). « Livraison gratuite » ; « jusqu'à 12 paiements sans intérêt » (V).
- **Délai** : date de livraison **affichée sur la fiche** (« mercredi 2 décembre », soit environ 16 jours le 16 novembre) ; express : moins de 10 jours ouvrés (V).
- **Retour** : 30 jours, remboursement complet pour une pièce de catalogue et une bague de fiançailles non modifiée ; **échange seulement** (pas de remboursement) pour le sur-mesure payant, la bague déjà mise à taille, l'or rouge, l'or 18 k, le diamant commandé spécialement (GIA), les alliances commandées sur mesure et les tailles au-dessus de 58 (V).
- **Diamant de laboratoire repris avec décote** : **15 % jusqu'à 2 ct, 35 % à partir de 2 ct** déduits du prix d'achat, pour « baisse de valeur du marché » (V).
- **Annulation avant livraison** (V) : gratuite jusqu'à 3 jours ouvrés et avant le début de fabrication ; **30 % de la commande après le début de fabrication** ; **1 800 ₪ + TVA après modélisation ou esquisse** ; or personnel fondu : avoir seulement.
- **Mise à taille** : la première est gratuite ; **garantie de fabrication à vie** (V).
- **Remboursement** : sous 7 jours ouvrés, sur le moyen de paiement d'origine ; le retour se fait aux frais du client avec un coursier assuré (V).

## Confiance et service

- **Libellé du synthétique** : « יהלום מעבדה » (V).
- **Sur-mesure** : page « טבעות אירוסין בעיצוב אישי » : rendez-vous en boutique ou en visio, choix de style et de pierre, **simulation CAD** approuvée avant fabrication, fabrication (V). Aucun prix de départ, aucun délai chiffré sur la page lue (V).
- **Avis** : trois témoignages nominatifs (non recopiés) dans le récapitulatif, page « avis », carrousel Instagram (V).
- **Contenu** : guides du diamant, des métaux, de la taille, des alliances ; « showroom » (V).
- **Preuves de fabrication** : aucune photo d'atelier relevée dans le parcours (V).

## Temps d'apparition du visuel principal (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Collection | LCP 5,3 s ; charge complète 5,9 s | — |
| Fiche Albireo, `stage=1` | LCP 2,2 s ; charge complète 5,9 s | — |
| `stage=3` | LCP 1,5 s ; charge complète 5,2 s | LCP 1,4 s ; charge complète 5,3 s |

## Points forts à retenir pour JR Diamond

1. **Le prix suit couleur, pureté, poids et origine, sur le même écran que la monture**, avec le total de carats et la mention « le prix inclut la bague » [V]. C'est le prix « exact à chaque clic » que JR Diamond n'affiche pas encore.
2. **La configuration est dans l'adresse** (`natOrLab`, `diamondColor`, `diamondSize`, `typeOfGold`, `stage`) [V] : le partage et la reprise de la bague sont gratuits. C'est la seule action sans dépendance de `SYNTHESE.md`.
3. **Naturel et laboratoire sur chaque modèle**, avec l'écart de prix visible (2 900 contre 3 580 ₪ à 0,25 ct ; 7 660 contre 95 300 ₪ à 3 ct) [V].
4. **Taille facultative** : « aidez-moi à choisir après la commande », tailles de 43 à 70 [V].
5. **Politique d'annulation chiffrée à chaque étape** (gratuite, 30 %, 1 800 ₪ + TVA) [V] : modèle de franchise pour un sur-mesure ; à soumettre à l'avocat (`DOSSIER_AVOCAT_IL.md`) avant de la reprendre [I].
6. **Date de livraison estimée affichée sur la fiche** (« 2 décembre ») [V] : répond à la plainte sur les délais qui glissent (forums).
7. **Parcours rapide** : LCP de 1,4 à 1,5 s à l'étape 3 [V].

## Défauts observés

1. **L'image de l'étape 2 est une illustration de diamant générique** : ni la monture, ni le poids, ni la couleur ne changent l'image [V]. Même défaut que DAZZ ; contraire à « ce que vous voyez existe ».
2. **Pas de photo de la pierre réelle ni de numéro de certificat** : la pierre est une catégorie (D/F/G, VS1/VS2/SI1), pas un diamant précis [V]. Shiree Odiz vend une pierre précise.
3. **Décote de 15 % ou 35 % sur le diamant de laboratoire à la reprise** [V] : rare et peu visible avant l'étape de paiement (la page de retours est séparée) [I].
4. **Annulation après esquisse : 1 800 ₪ + TVA** [V] : élevée par rapport à une bague d'entrée de gamme à 2 900 ₪.
5. **Cartes de forme en bas de fiche sans effet observé** [V].
6. **Champ « poids » qui n'accepte pas la saisie au clavier** [V] : seul le curseur fonctionne (accessibilité, I).
7. **Collection lente** : LCP de 5,3 s [V].
8. **L'or blanc 18 k ne change pas la photo** [V].

## Limites de l'audit

- Ajout au panier, panier et paiement : non réalisés (robots.txt interdit `/cart/add.js` et `/checkout`). Le panier n'a pas été ouvert : la gravure et la décomposition du prix du panier ne sont connues que par le modèle de page (V pour le modèle, I pour l'usage réel).
- Un seul modèle (Albireo, rond, or blanc) a été parcouru. Les autres formes, l'or jaune et rouge, et les filtres de la collection n'ont pas été actionnés (cumul de filtres et tri interdits).
- iPhone : seules les pages d'étape 3 ont été chargées ; le constructeur n'a pas été refait sur iPhone.
- Rendez-vous, WhatsApp, formulaire d'e-mail : non ouverts.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://www.joolme.co.il/robots.txt
- https://www.joolme.co.il/collections/engagement-rings
- https://www.joolme.co.il/products/טבעת-אירוסין-albireo (étapes `stage=1` à `4`, paramètres d'adresse)
- https://www.joolme.co.il/pages/returns-exchanges-resizes · /pages/טבעת-אירוסין-בעיצוב-אישי
- Inventaire : `INVENTAIRE.md` (classement) ; `docs/concurrence/2026-11-15_israel.md`
- Captures et journaux (hors dépôt) : `scratchpad/il/out/joolme/`
