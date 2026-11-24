# Audit : B-Gem, monture puis diamant (anglais, $ ou ₪)

| | |
|---|---|
| Site | B-Gem, bâtiment Yahalom, 3 Zeev Jabotinsky, Ramat Gan |
| Page de départ | https://b-gem.com/engagement-rings |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **complet** jusqu'à la page « Complete » (récapitulatif et total) ; le paiement (CHECKOUT) n'a pas été ouvert |
| robots.txt | aucun chemin interdit, mais `Crawl-delay: 10` (V). Au moins 11 s entre deux chargements de page pendant l'audit. Pas de Cloudflare (V) |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Liste des montures `/engagement-rings` | 58 montures avec prix en $ (de 195 à 3 060 $, 14 k) (V). Filtres : « all » et 7 métaux (cases), styles (Solitaire, Side Stone, Halo, Channel Set, Pave, Tension, Three Stone, Vintage), créateurs (Kremlew, Emilio, François) ; APPLY et RESET FILTERS ; tri par prix (V) | prix sur chaque vignette (V) | photo par vignette (V) |
| Fiche de monture (ex. `/item/r004-1`, Châtillon) | métal (7) ; taille ; case « Send me free ring sizer » ; ADD TO CART ; vignettes ; visionneuse 360° (V) | 519 $ en or blanc 14 k, 1 419 $ en platine (« Setting price ») (V) | le changement de métal charge une autre fiche, avec son adresse et son prix (V) |
| Fenêtre après ADD TO CART | « WHAT WOULD YOU LIKE TO DO? » : ADD DIAMONDS ou ADD GEMSTONES (V) | — | — |
| Liste des diamants `/diamonds` | 2 513 diamants. Filtres : origine (naturel ou laboratoire), 10 formes, couleur D à M, pureté FL à I1, taille, symétrie, poli (Excellent à Poor), fluorescence (None à Very strong), carat 0,1 à 4,1, prix 1 à 105 663 ; APPLY et HIDE FILTERS ; tri (V) | prix sur chaque fiche (V) | vignette (V) |
| Fiche du diamant (ex. `/diamonds/round-11458`) | caractéristiques complètes, ADD THIS DIAMOND, visionneuse 360°, 2 vignettes dont le certificat (V) | 4 680 $ (« Gemstone Price ») (V) | vue 360° indisponible (V) |
| `/complete` | diamant et monture côte à côte ; champ « Gemstone Inscription Text » avec style normal ou italique ; métal et taille modifiables ; total ; CHECKOUT (V) | 1 326 + 519 = **1 845,00 $** (V) | vignettes (V) |

## Contrôles vérifiés

Relevé complet avec `controls.cjs` : 115 contrôles sur ordinateur, 82 sur iPhone pour la liste ; 58 pour la fiche de monture (V). Tous ont été actionnés, sauf ceux de la fin du tableau.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « 17% VAT for Israeli citizens… not included » | fenêtre | s'ouvre à chaque fiche, se ferme (V) | annonce un prix hors taxes | fonctionne ; **taux faux** : la TVA israélienne est de 18 % (I, voir l'inventaire national) |
| Case 14K Yellow Gold puis APPLY FILTERS | filtre | adresse `/engagement-rings/f/metal=04-yellow-gold-14`, toujours 58 montures, ordre changé (V) | prix toujours en 14 k | fonctionne en partie (le nombre ne baisse pas) |
| SORT BY PRICE : High to Low | liste | adresse `/f/sort=desc`, Nîmes 3 060 $ en tête (V) | — | fonctionne, mais **efface le filtre de métal** (V) |
| RESET FILTERS, autres métaux, styles, créateurs | filtres | même mécanisme d'adresse `/f/…` (V, liens lus) | — | non actionnés un par un (délai de 10 s) |
| CHOOSE YOUR DIAMONDS (bandeau de la liste) | lien | mène à `/catalog`, pas à `/diamonds` (V) | — | lien trompeur |
| CONTINUE (bas de liste) | lien `#` | — | — | non actionné |
| Vignette d'une monture | lien | ouvre la fiche (V) | — | fonctionne |
| Visionneuse 360° (iframe `embed.imajize.com/1229330`) | iframe | « This 360° view is temporarily unavailable. » (V) | — | **en panne** sur la fiche de monture et sur deux fiches de diamant (ordinateur) ; même iframe chargée sur iPhone (V) |
| Vignettes photo (4) | liens | la première ouvre une galerie en plein écran (`#gallery-1`) ; les suivantes, rien de visible (V) | — | fonctionne en partie |
| Sélecteur de métal : Platinum, 14K et 18K White, 14K et 18K Yellow, 14K et 18K Pink Gold | liste | charge une autre fiche (`r004-1` à `r004-7`) en gardant `?size=` (V) | Platinum : 519 → 1 419 $ (V) | fonctionne |
| Select ring size | liste | tailles US **4 à 6,5 seulement**, par demi-taille (V) ; la taille passe dans l'adresse (V) | inchangé | fonctionne ; gamme très courte |
| tell me more / need help | liens d'aide | aucune bulle ni fenêtre détectée après le clic (V) | — | aucun effet observé |
| Send me free ring sizer | case | cochée puis décochée : aucun formulaire visible (V). L'accueil contient un formulaire « Order caliper » (nom, courriel, téléphone, adresse) (I) | — | non rempli |
| ADD TO CART (monture) | bouton | fenêtre « ADD DIAMONDS / ADD GEMSTONES » (V) | — | fonctionne |
| ADD DIAMONDS | lien | `/diamonds` (V) | — | fonctionne |
| ADD GEMSTONES | lien | — | — | non actionné |
| Origine LABORATORY GROWN puis APPLY | filtre | `/diamonds/f/origin=laboratory-grown` : **0 diamant** (V) | — | filtre vide ; la FAQ dit « GIA certified natural diamonds only » (V) |
| Autres filtres de diamants (forme, couleur, pureté, taille, symétrie, poli, fluorescence, curseurs de carat et de prix), HIDE FILTERS, tri | filtres | listés (V) | — | non actionnés un par un (chaque application recharge la page, délai de 10 s) |
| Fiche d'un diamant (liste) | lien | ouvre la fiche, visuel en 1,1 s (V) | 4 680 $ (0,90 ct H VVS1) | fonctionne |
| ADD THIS DIAMOND | bouton | mène à `/complete` avec la monture choisie (V) | total 1 845 $ (V) | fonctionne |
| Complete : CHOOSE YOUR SETTING / CHOOSE YOUR DIAMONDS | liens d'étape | tous deux mènent à `/catalog` (V) | — | liens trompeurs |
| Complete : Gemstone Inscription Text, normal ou italique | champ et boutons radio | présents (V) | — | **non remplis** (pas de saisie) |
| Complete : métal, taille, ring sizer | listes et case | mêmes listes que la fiche (V) | — | non actionnés |
| CHECKOUT | bouton | paiement | — | **non actionné** (règle) |
| Devise USD ou ILS (en-tête) | menu | ILS : la même monture passe à « ILS 1,669.47 » (V), soit 3,217 ₪ pour 1 $ (I, calcul) | hors TVA | fonctionne |
| LOG IN, WISHLIST, BAG | liens | — | — | non actionnés (compte, ou panier vide dans une nouvelle session) |
| +1 773 831 4317, Viber 972548969858, info@b-gem.com, Google Maps | liens | tel:, viber:, mailto: (V, adresses lues) | — | non ouverts |
| WRITE A REVIEW, iVouch, Google, bizrate | bouton et liens | — | — | non actionnés |
| Menus, pied de page (éducation, FAQ, à propos), lettre d'information | liens et champ | `/faq` lue avec curl (V) | — | les autres n'ont pas été ouverts ; le courriel n'a pas été saisi |

## Options disponibles

- **Montures** : 58 dans la liste, 14 k par défaut (V). 7 métaux : platine, or blanc, jaune ou rose en 14 et 18 k (V).
- **Tailles** : US 4 ; 4,5 ; 5 ; 5,5 ; 6 ; 6,5 (V).
- **Diamants** : 2 513, tous naturels d'après le filtre (V). Formes : rond, princesse, asscher, coussin, émeraude, cœur, marquise, ovale, poire, radiant (V).
- **Exemples** (V) :
  - 0,90 ct H VVS1 rond, 6,40 × 6,36 × 3,99 mm, 4 680 $ ;
  - 0,60 ct J VS1 rond, 7,11 × 7,09 × 4,44 mm, 1 326 $.
- **Inscription** : texte sur la pierre, en style normal ou italique (V).

## Prix, délais, retours, garanties

- **Affichage** : prix en $ par défaut, ou en ₪ ; « Setting price » et « Gemstone Price » séparés, total sur `/complete` (V). **Hors TVA**, avec une mention de 17 % (V).
- **Délai** : « Delivery within 12 business days. To receive it sooner, please contact us. » (V).
- **Livraison** : « Free FedEx Shipping » (V).
- **Retours** :
  - promesse « 30-Day Returns · 100 % Refund · Free returns » (V, fiche) ;
  - la FAQ exclut les commandes sur mesure, les collections de créateurs, et les pièces personnalisées, inscrites ou gravées (V) ;
  - remboursement en 15 jours ouvrés, par chèque pour les cartes Visa, Mastercard, Amex et Diners (V, `/faq`).
- **Paiement** : PayPal, cryptomonnaies, cartes, virement d'après la FAQ (V). Aucun moyen affiché avant CHECKOUT (V).
- **Garantie** : « Lifetime Warranty » (V).
- **Certificat** : « Diamond Certificate » ; la fiche indique « Certificate number GIA », sans numéro (V).

## Confiance et service

- **Avis** :
  - « There are no reviews at this time » sur la fiche (V) ;
  - badges iVouch « 1593 Reviews, 2649 Vouches », Google « 3,825 · 4,8 Rating », bizrate « 9,5/10 » (V, chiffres affichés par le site).
- **Synthétique** : « Laboratory grown Diamond » dans les menus, mais aucune pierre de ce type en stock (V).
- **Langue et devises** : anglais seulement ; $ ou ₪ (V).
- **Contact** : numéro américain, Viber israélien, adresse à Ramat Gan (V).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande dans le parcours (V). « Designed by "Shmuel's" » sur la fiche (V).

## Points forts à retenir pour JR Diamond

1. **Un parcours complet et lisible** : bandeau « CHOOSE YOUR SETTING → CHOOSE YOUR DIAMONDS → COMPLETE », prix séparés puis total (V). C'est la décomposition la plus simple relevée.
2. **Une fenêtre au bon moment** : après la monture, « que voulez-vous faire ? diamant ou pierre de couleur » (V). C'est une bonne transition pour une offre à pierres de couleur, comme celle de JR Diamond (émeraude, saphir, rubis).
3. **Des filtres de diamants exhaustifs**, du type de taille à la fluorescence (V). C'est la référence pour les filtres « taille, couleur, pureté, prix, certificat ».
4. **Le changement de devise** fonctionne en un clic (V).

## Défauts observés

1. **La vue 360°, argument du titre (« presented in 360° HD »), est en panne** sur les fiches de monture et de diamant : « temporarily unavailable » (V). Le visuel principal annoncé est absent.
2. **Prix hors taxes avec un taux faux** (17 % au lieu de 18 %) (V/I). Le client israélien découvre la taxe au paiement (I).
3. **Le filtre « laboratoire » est vide** alors que le menu le propose (V).
4. **Tailles US 4 à 6,5 seulement** (V). Au-delà, rien n'est prévu dans la liste.
5. **Liens d'étape et de bandeau mal ciblés** : CHOOSE YOUR SETTING et CHOOSE YOUR DIAMONDS mènent tous deux à `/catalog` (V).
6. **Le tri efface le filtre** de métal, et le filtre de métal ne réduit pas la liste (V).
7. **Données douteuses** : 7,11 mm de diamètre pour 0,60 ct, alors qu'un rond de cette taille pèse environ 1,3 ct (I). Pas de numéro de certificat (V).
8. **Retours contradictoires** : « 100 % Refund » sur la fiche, mais pièces inscrites exclues dans la FAQ, alors que l'inscription est proposée sur la même commande (V).
9. **Les liens « tell me more » et « need help » n'affichent rien** (V).

## Limites de l'audit

- `Crawl-delay: 10` : les filtres n'ont pas été testés un par un, car chaque application recharge la page. Testés : un filtre de métal, le tri des montures, le filtre « laboratoire ».
- CHECKOUT, compte, avis, lettre d'information, Viber et téléphone non actionnés ; le champ d'inscription n'a pas été rempli.
- Le panier (BAG) n'a pas été relu à part : la page `/complete` en tient lieu.
- iPhone émulé (Chromium). Temps sur une machine partagée, un passage par appareil (V) :
  - fiche de monture sur ordinateur : DOM 4,7 s, premier visuel 5,6 s, LCP 2,2 s (titre H1) ;
  - fiche de monture sur iPhone : DOM 1,9 s, visuel 1,9 s, LCP 1,9 s ;
  - fiche de diamant sur ordinateur : visuel 1,1 s.

## Sources

- https://b-gem.com/robots.txt
- https://b-gem.com/engagement-rings · https://b-gem.com/engagement-rings/f/metal=04-yellow-gold-14 · https://b-gem.com/engagement-rings/f/sort=desc
- https://b-gem.com/item/r004-1 · https://b-gem.com/item/r004-7?size=6.5
- https://b-gem.com/diamonds · https://b-gem.com/diamonds/f/origin=laboratory-grown · https://b-gem.com/diamonds/round-11458 · https://b-gem.com/diamonds/round-11537
- https://b-gem.com/complete
- https://b-gem.com/faq
- https://embed.imajize.com/1229330 · https://embed.imajize.com/3484999 (visionneuses, « temporarily unavailable »)
