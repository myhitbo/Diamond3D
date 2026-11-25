# Audit : Evan James Ltd. (Brattleboro, Vermont)

- **Site** : Evan James Ltd., https://www.evanjames.com/ (site Thinkspace)
- **Page de départ** : https://www.evanjames.com/diamonds/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13
- **Statut** : **partiel** (pas de configurateur ; recherche de diamants et fiche bague lues ; panier, recherche du site et tris par adresse interdits par robots.txt, donc non ouverts)

Convention : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| `/diamonds/` | Tableau de 91 pages de diamants (GIA), filtres Shape, Price, Carat, Color, Cut, Clarity, onglets « All Diamonds » et « Compare (0) », Reset Filters, « Advanced Options » |
| Fiche diamant `/diamonds/11574742/` | Photo ou visionneuse 360° (iframe v360), prix, boutons Add to Cart, Inquire, Call, Appointment, rapport GIA |
| Catalogue `/catalog/engagement-ring/` | 885 articles, filtres par type, designer, métal, prix, tri, vue 24/48/72/96 |
| Fiche bague `/catalog/artcarved/31-v163-e/` | Taille, poids de carat (de la monture), métal, Add to Cart, liste d'envies, Contact, Appointment, Share, Drop a Hint |
| Panier `/cart/` | **Non ouvert** : interdit par robots.txt (`Disallow: /cart`) |

Il n'y a pas de constructeur de bague : la bague se choisit sur catalogue, la pierre à part [V].

## Contrôles vérifiés

Relevé automatique : 99 contrôles sur ordinateur, 70 sur iPhone (page `/diamonds/`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tableau de diamants (ligne) | ligne cliquable (`data-url`) | Ouvre la fiche `/diamonds/<id>/` | 592 $ pour une émeraude 0,50 ct J VVS2 GIA | OK [V] |
| Icône vidéo dans la ligne | icône | Présente sur environ la moitié des lignes (vidéo ou 360°) ; non ouverte | - | Non testé |
| Tris Shape, Size, Cut, Color, Clarity, Lab, Price | en-tête | Liens `?sort=…&order=asc` : **interdits par robots.txt** (`Disallow: /*?sort=`) | - | Non testé, adresse interdite |
| Pagination 1 à 91, Next | lien | `?page=2` autorisé ; non actionné au-delà de l'adresse | - | Lien présent [V] |
| Filtre Shape (8 icônes) | icônes | Présent ; non actionné | - | Non testé (peut produire des adresses à paramètres) |
| Curseurs Price (592 à 295 333 $), Carat (0,50 à 10,09), Color (N à D), Cut (Fair à Ideal), Clarity (I1 à FL) | curseur | Valeurs lues ; non manipulés. Un curseur de prix peut produire `?price_0=` (interdit) | - | Non testé |
| Advanced Options | lien | Non ouvert | - | Non testé |
| Compare (0) | onglet | Présent ; non utilisé | - | Non testé |
| Reset Filters | lien | Recharge `/diamonds/` | - | Lien présent |
| Survol d'une ligne | survol | Panneau « Hover over a diamond to find more information » à droite (visible sur ordinateur) | - | Lu [V] |
| Fiche diamant : visionneuse | iframe | Visionneuse v360 (hébergée sur S3) présente | - | Chargée [V] ; non manipulée |
| Fiche diamant : Add to Cart | bouton | **Non cliqué** : /cart interdit | 592 $ | Non testé, panier interdit |
| Fiche diamant : Inquire / Call / Appointment | bouton | Inquire ouvre un formulaire (ancre `#`) ; Call mène à /contact-us/ ; Appointment à /appointments/ | - | Liens lus, non remplis |
| Fiche diamant : View Report | lien | Mène à gia.edu/report-check?reportno=… | - | Non suivi (domaine tiers) |
| Fiche diamant : Gemprint | bloc | Rapport « Light Return : Excellent », date 23/11/2026, ID Gemprint | - | Lu [V] |
| Fiche bague : Size | liste | 4,0 à 13,0 par quart de taille (37 valeurs) + « I don't know or see my size » | aucun | Lu [V] |
| Fiche bague : Carat Weight | liste | 0,05 / 0,07 / 0,55 / 0,8 / 1,07 / 1,32 / 1,57 ; change le prix : 0,55 donne 2 887,50 $, 1,07 donne 3 697,50 $ (sur la configuration choisie) | oui | Actionné [V] |
| Fiche bague : Metal | liste | 14K White, 18K White, 18K Yellow (non disponible), Platinum, 14K Yellow with Rhodium, 18K Yellow with Rhodium. 18K White : 4 042,50 $ (inchangé), Platinum : 3 487,50 $, 14K Yellow with Rhodium : 2 887,50 $ | oui, parfois étrange | Actionné [V] ; l'ordre des prix est peu logique (platine moins cher que l'or 14 k blanc) |
| Fiche bague : Add to Cart | bouton | **Non cliqué** (/cart interdit) | - | Non testé |
| Fiche bague : Add to Wish List | bouton | Mène à `/account/login/` : interdit | - | Non testé |
| Fiche bague : Share, Drop a Hint | bouton | Présents ; Drop a Hint sert à envoyer une idée à un proche ; formulaire non rempli | - | Non testé |
| Fiche bague : Contact / Appointment | bouton | Liens vers formulaire et prise de rendez-vous | - | Non testé |
| Fiche bague : Ask a Question + reCAPTCHA | formulaire | Non rempli | - | Non testé |
| Téléphones 802.254.3333 / 800.EVAN.LTD | lien tel | Présents partout | - | Non testé |
| Recherche du site `/search/`, compte `/account/`, panier `/cart/` | liens | Interdits | - | Non ouverts |

## Options disponibles

- **Diamants** : formes (au moins Round, Radiant, Cushion, Emerald, Oval, Princess vues ; 8 icônes), carat 0,50 à 10,09, couleur D à N, cut Fair à Ideal, pureté I1 à FL, certificat GIA (colonne « Lab »), prix de 592 à 295 333 $ [V]. 91 pages de résultats.
- **Bagues** : 885 articles de fiançailles ; types (solitaire, halo, hidden halo, pavé, trois pierres, bezel, vintage, etc.) ; designers (ArtCarved et d'autres) ; métaux 10 k à 18 k (blanc, jaune, rose), platine, palladium, argent ; filtre prix [V].
- **Fiche** : taille 4 à 13, poids de carat de monture, 6 libellés de métal (platine inclus) [V].
- **Pas de** : constructeur sur mesure, gravure à l'écran, choix de griffes, comparaison de bagues. Origine : « Origin : Natural » sur la fiche ; aucune pierre synthétique vue dans la liste lue [V pour la fiche testée].

## Prix, délais, retours, garanties

- **Prix** : affichés partout. Bague sans la pierre : « Center Diamond Not Included, Setting Charges May Apply » ; ex. 4 042,50 $ (ArtCarved 31-V163-E) [V]. Pierre vendue à part, ex. 592 $ [V]. Aucune décomposition du prix. « Special pricing for military, police, fire, EMS » [V]. Devise : dollars (« all monetary amounts given on the website are in US dollars ») [V].
- **Poids** : le poids en carats total peut varier de 0,05 ct par rapport à l'affiché [V].
- **Retours** (https://www.evanjames.com/terms-and-conditions/ [V]) : « 30-day risk-free return/exchange » ; numéro d'autorisation, objet reçu sous 30 jours ; certificat non renvoyé : 250 $ par certificat ; frais d'expédition payés non remboursés ; **travaux sur mesure, commandes spéciales, objets gravés : ni retour ni remboursement** sauf défaut ; **annulation d'un objet personnalisé : 24 heures**.
- **Livraison, délai** : non vus (panier interdit) ; aucun délai de fabrication affiché [V].
- **Financement** : « 1 year no-interest financing, if qualified » (page Services) [V].
- **TVA** : taxe de vente collectée pour le Vermont seulement [V].
- **Garanties** : atelier de réparation interne, devis gratuit [V]. Garantie produit non vue.
- **Paiement** : non vu ; la politique cite carte et PayPal [V].

## Confiance et service

- Boutique à Brattleboro, adresse, horaires, 2 numéros, rendez-vous privés « always welcome » [V].
- Logos AGS (American Gem Society), GIA, AGTA, Jewelers of America en pied de page [V].
- Ateliers en interne : réparations, montres, gravure, restringing [V].
- Rapport GIA lié sur chaque fiche de diamant, plus rapport Gemprint [V].
- Visionneuse 360° et icône vidéo dans la liste [V, présence ; contenu non regardé].
- Pas d'avis clients sur les pages lues ; pas de photos de fabrication ; pas de suivi de commande [V].
- Langue : anglais ; devise : USD [V].

## Points forts à retenir pour JR Diamond

1. **Prix visible sur chaque diamant dès la liste**, avec certificat et rapport GIA liés sur la fiche (ex. diamant 11574742, 592 $) [V].
2. **Fiche diamant très complète** : mesures, table, profondeur, polissage, symétrie, fluorescence, numéro de rapport, rapport de lumière Gemprint [V].
3. **Vidéo ou 360° signalé par une icône dans la liste** : le visiteur sait quelles pierres ont un film [V].
4. **« Drop a Hint »** : bouton pour glisser une idée à un proche, adapté à la bague de fiançailles [V].
5. **« I don't know or see my size »** dans le choix de taille [V].
6. **Annulation d'un sur mesure en 24 h** expliquée en clair dans les conditions [V].

## Défauts observés

- Pas de constructeur : bague et pierre sont achetées séparément, sans simulation du résultat [V].
- Prix de la monture incohérent selon le métal choisi (platine moins cher que l'or blanc 14 k sur la fiche testée) : ou erreur d'affichage ou prix lié à une combinaison carat/métal [V pour les valeurs ; cause S].
- Un contrôle anti-robot s'insère au chargement (`/verify.html?next=…`) puis redirige automatiquement ; sur la page de fiche, 2 chargements successifs [V].
- Libellé « Solitare » (faute) sur la fiche testée [V].
- Terms and Conditions rédigées de façon générique (modération de commentaires, communauté) sans rapport avec la boutique [V].
- Aucun avis clients sur les pages lues [V].

## Limites de l'audit

- Tris par adresse (`?sort=`), panier, compte, liste d'envies et recherche du site : interdits ; non ouverts.
- Filtres de pierres et de bagues non actionnés : ils risquent de produire des adresses à paramètres interdits (`?price_0=`, `?material=`). Seule la lecture des bornes a été faite.
- Pas de passage au panier, donc ni livraison, ni délai, ni moyens de paiement vus.
- Une seule bague et un seul diamant lus en détail ; la fiche bague n'a pas été testée sur iPhone au-delà du chargement.
- Visionneuse 360° et vidéos : présence vérifiée, contenu non lu.
- Les prix de la fiche bague après changement de métal ou de carat sont les premiers « $ » trouvés dans la page : peut ne pas être le prix principal [S].

## Sources

- https://www.evanjames.com/diamonds/ (relevé de contrôles, capture complète, 15/11/2026)
- https://www.evanjames.com/diamonds/11574742/
- https://www.evanjames.com/catalog/engagement-ring/
- https://www.evanjames.com/catalog/artcarved/31-v163-e/
- https://www.evanjames.com/terms-and-conditions/
- https://www.evanjames.com/services/
- https://www.evanjames.com/in-house-repairs/
- https://www.evanjames.com/robots.txt (via le contrôle d'adresses)
- Mesures : tableau de diamants 2,0 s (ordinateur), 1,6 s (iPhone) ; photo de fiche bague 2,9 s et 2,3 s ; fiche diamant 5,6 s environ jusqu'au rendu complet ; un passage chacun.
