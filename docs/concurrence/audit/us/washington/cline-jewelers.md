# Audit : Cline Jewelers (Edmonds, État de Washington)

- **Site** : Cline Jewelers, joaillier familial depuis 1980, boutique à Edmonds (WA). Site propulsé par Thinkspace ; le constructeur 3D est un module JewelerOS (jeweleros.com).
- **Adresse de départ** : https://www.clinejewelers.com/custom-ring-builder/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. L'assistant en 4 étapes a été parcouru en entier. Le « 3D Ring Designer », qui s'ouvre à la dernière étape, n'a pas pu être audité : son ouverture appelle `jeweleros.com/api/create/from-ring-config/`, interdit par le robots.txt de jeweleros.com (`Disallow: /api/`). La requête a été interceptée avant d'être émise. Le panier (`/cart`) est interdit par le robots.txt du site : non ouvert.

Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié sur https://www.clinejewelers.com/custom-ring-builder/) |
|---|---|
| 1 sur 4 « Let's start designing your ring » | Pastilles métal : or jaune, or blanc, or rose. Huit styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone. Un neuvième encadré « Start from… » est coupé par la bulle de chat sur la capture. Boutons Back et Skip. |
| 2 sur 4 « Choose your center stone » | Interrupteur Natural / Lab Grown. Neuf formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, plus « Decide later ». |
| 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, plus « Decide later ». Texte : le poids exact se règle ensuite dans le designer 3D. |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks / 1 - 3 months / 3 - 6 months / Not sure yet. Le choix lance le designer 3D. |
| Designer 3D | Non audité (appel interdit, voir en-tête). |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose (étape 1) | bouton | Les 8 vignettes de styles changent de couleur (fichiers `*_yellow.webp`, `*_white.webp`, `*_rose.webp`) ; titre infobulle « White Gold », « Rose Gold » [V] | aucun prix affiché | OK |
| 8 cartes de style | bouton | Passe à l'étape 2 ; le style choisi s'affiche en puce en haut [V] | aucun | OK |
| Natural / Lab Grown | bouton à bascule | La classe `active` change ; la liste des 9 formes reste identique, aucun prix ou texte ne change [V] | aucun | OK (effet visible nul à cette étape) |
| 9 cartes de formes | bouton | Passe à l'étape 3 ; puce de forme ajoutée [V] | aucun | OK |
| « Decide later » (étapes 2 et 3) | bouton | Non actionné ; supposé passer à l'étape suivante [S] | aucun | non testé |
| 8 cartes de poids (0,5 à 5 ct) | bouton | Passe à l'étape 4 ; puce « 1 carat » [V] | aucun | OK |
| 4 cartes de délai | bouton | Lance la création de la configuration : appel POST à `jeweleros.com/api/create/from-ring-config/` (interdit par robots.txt de ce domaine). Requête interceptée chez moi, d'où un écran « Something went wrong / Try again » qui est un artefact de mon blocage, pas un défaut du site [V] | aucun | non poursuivi |
| Back | bouton | Revient à l'étape précédente. Sur ordinateur, le clic réel est intercepté par l'en-tête du site (`div.jr-inner` couvre le bouton) ; le clic programmatique fonctionne. En iPhone, même constat [V] | aucun | défaut d'accessibilité probable |
| Skip | bouton | Non actionné : mène vraisemblablement au designer, donc au même appel interdit [I] | aucun | non testé (raison : appel interdit) |
| Bulle « Have a Question? Message us here » / bouton de chat | chat | Recouvre la dernière carte de l'étape 1 sur ordinateur ; ouvre un chat (webchat.clientbook.com), non ouvert [V] | aucun | non testé (règle : pas de chat) |
| Bouton accessibilité (accessiBe) | bouton | Présent en bas à droite ; non actionné [V] | aucun | non testé |
| Menu (burger), recherche, liste de souhaits, panier, connexion | liens | Liste de souhaits et connexion renvoient vers `/account/login/` (interdit par robots.txt) ; panier vers `/cart/` (interdit) : aucun ouvert [V] | aucun | non testés (robots.txt) |
| Appel `tel:4256739090`, Appointment, Directions | liens | Numéro (425) 673-9090 ; page `/make-appointment/` lue (formulaire non rempli) [V] | aucun | OK |

### Autres pages du site (lues, hors constructeur)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche de diamants `/diamonds/` : curseurs prix, carat, couleur (N à D), taille (Fair à Ideal), pureté (I1 à FL) | filtres | Tableau de 91 pages, 101 lignes par page, colonnes forme, taille, taille de coupe, couleur, pureté, laboratoire, prix [V] | de 592 $ à 295 333 $ (bornes des curseurs) | OK |
| En-têtes de colonne (tri) | liens `?sort=` | Interdits par robots.txt (`Disallow: /*?sort=`) : non cliqués [V] | - | non testés |
| Survol d'une ligne | survol | Panneau « Diamond Information » : schéma de la forme, bouton View Details, forme, prix, coupe, carat [V] | oui | OK |
| Clic sur une ligne | lien | Page détail `/diamonds/14637647/` : « 0.50 Carat, Round », Excellent / I / SI2 par le GIA, numéro de stock, 770 $, boutons Inquire, Call, Appointment, lien « View Report » vers gia.edu [V] | 770 $ | OK |
| Icône vidéo sur les lignes | icône | Présente sur beaucoup de lignes (pas toutes) ; non actionnée [V] | - | non testée |
| Compare (0), Advanced Options | onglet, lien | Présents ; non actionnés [V] | - | non testés |
| Catalogue bagues de fiançailles `/catalog/bridal-engagement/` | liste | 651 articles ; tri (Featured, Newest, Name, Price Low-High, High-Low) ; 24 / 48 / 72 / 96 par page ; filtres désigner, métal, gemme, prix ; « Load More » [V] | affiché | OK (tri et filtres par URL non suivis) |
| Fiche bague `/catalog/cline/100-816/` | page | Menu de taille (4 à 13 par quart), « I don't know or see my size », Add to Cart, formulaire Inquire, prix 12 950 $, « 0% APR or as low as $418/mo with Affirm » [V] | oui | Add to Cart non cliqué (appelle vraisemblablement `/cart/add`, `/cart` interdit) |

## Options disponibles

- **Métaux dans l'assistant** : or jaune, or blanc, or rose. Pas de platine dans l'assistant [V]. Le catalogue liste 14 k, 18 k, platine, tantale, titane, tungstène, etc. (filtre « Metal ») [V].
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone [V].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant [V].
- **Origine** : Natural, Lab Grown [V].
- **Poids** : 0,5 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 ct [V].
- **Délai souhaité** : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, pas sûr [V].
- **Taille de doigt** : 4 à 13 par quart de taille sur les fiches [V] ; absente de l'assistant.
- **Gravure, pavage, griffes, corps de bague** : non vus ; probablement dans le designer 3D [S].
- **Modes de vue** : vignettes de style en photo ; 3D annoncée (« 3D Ring Designer ») mais non vue ; vidéos sur certains diamants (icône) [V pour l'icône].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant. Diamants et bagues du catalogue : prix affichés en dollars (ex. 770 $ pour 0,50 ct rond GIA ; bagues à diamant de laboratoire de 2 995 $ à 4 995 $ ; bague naturelle de 2,02 ct fancy jaune 12 950 $) [V, https://www.clinejewelers.com/catalog/bridal-engagement/]. Aucune décomposition du prix (métal, main-d'œuvre, pierre) [V].
- **Financement** : « 0% APR or as low as $418/mo with Affirm » sur la fiche testée [V].
- **Délai** : page https://www.clinejewelers.com/custom-design-cline/ : « Ring-builder designs can be ready in a couple of weeks » [V]. Aucun délai ferme dans l'assistant.
- **Retours** : « special orders » : 30 jours de retour gratuit, **en avoir en magasin** seulement [V, /company/why-cline/]. Sur mesure : « If you don't love it... we will do whatever we can to bring your vision to life » (nouvelle conception, pas de remboursement annoncé) [V]. Les conditions générales du site (`/terms-and-conditions/`) ne traitent ni retours ni livraison [V].
- **Garanties** : « Love It Guarantee » ; nettoyage et inspection gratuits (conseil : tous les ans) ; « Lifetime Upgrades » : 100 % de la valeur en avoir pour les diamants naturels achetés chez eux [V, /company/why-cline/].
- **Panier et livraison** : non audités (`/cart` interdit). Moyens de paiement : logos American Express, Mastercard, Visa, Discover en pied de page [V pour les logos].

## Confiance et service

- **Avis** : note 4,9 sur 711 avis (widget, page vue) ; logos Facebook, Google, Yelp, The Knot, WeddingWire ; récompenses « Best of Edmonds » (5 ans) et « Best of the PNW » (4 ans) ; American Gem Society [V].
- **Preuves de fabrication** : fabrication sur place ; processus « wax » : modèle 3D puis cire à toucher et essayer avant la coulée [V, /design-your-own/]. Pas de suivi de commande ni de photos ou vidéos de fabrication vus [V].
- **Service** : chat, texto, téléphone, rendez-vous gratuit (consultation personnalisée), formulaire Inquire sur chaque fiche ; transformation de bijoux de famille proposée (« Heirloom Redesign ») [V].
- **Langues, devise** : anglais, dollars [V].
- **Libellé du synthétique** : « Lab Grown » dans l'assistant, « Lab-Grown Diamonds » sur la page dédiée ; l'article cite la FTC (« a diamond is a diamond ») et un écart de prix moyen de 70 à 90 % [V].
- **Page de départ** : la page `/custom-design-cline/` présente deux voies, constructeur 3D en ligne ou consultation ; on y lit « Choose lab-grown or natural center stones in store » alors que l'assistant demande déjà l'origine : incohérence [V].

## Points forts à retenir pour JR Diamond

1. **Assistant court en 4 étapes avant le 3D**, avec bouton « Decide later » et « Skip » : on peut commencer sans connaître le carat. Preuve : étapes 1 à 4 ci-dessus.
2. **Style en premier, avec vignettes qui changent de couleur selon le métal** : retour visuel immédiat dès la première étape. Preuve : `solitaire_yellow.webp` devient `solitaire_white.webp` au clic sur la pastille.
3. **Question sur le délai souhaité** (« When do you need your ring? ») pour recommander un calendrier. Preuve : étape 4.
4. **Recherche de diamants avec lien vers le rapport GIA** de la pierre et numéro de stock. Preuve : `/diamonds/14637647/`, lien `gia.edu/report-check?reportno=6555475400`.
5. **Prix affichés partout dans le catalogue et financement Affirm** sur la fiche. Preuve : fiche `100-816`.
6. **« Lifetime Upgrades »** (100 % en avoir sur les diamants naturels) : argument de rétention. Preuve : `/company/why-cline/`.

## Défauts observés

- Bouton « Back » recouvert par l'en-tête du site : le clic réel échoue ; seul un clic programmatique passe (ordinateur et iPhone) [V].
- La bulle de chat cache la neuvième carte de l'étape 1 sur ordinateur [V].
- Basculer Natural / Lab Grown ne change rien à l'écran à l'étape 2 (ni formes, ni prix, ni texte) [V].
- Aucun prix indicatif ni décomposition dans l'assistant ; l'écart avec le catalogue, prix affichés, est net [V].
- Retour sur les commandes spéciales : avoir en magasin uniquement [V].
- Le designer 3D dépend d'une API tierce (`jeweleros.com/api/`) appelée dès le chargement de la page (config) : si elle tombe, le module affiche « Something went wrong » [I, d'après l'écran obtenu quand l'appel est bloqué].

## Limites de l'audit

- Designer 3D, rendu final de la bague, prix en direct, gravure, pavage, griffes, taille de doigt, enregistrer et partager : **non audités**, car l'ouverture du designer appelle une adresse interdite par robots.txt (jeweleros.com/api/). Les appels de chargement de la page (config, widget) ont été interceptés aussi, sans écart.
- Panier, comptes, liste de souhaits, tris par URL : interdits par robots.txt du site, non ouverts.
- Chat, formulaires, rendez-vous : non utilisés.
- Délai de chargement mesuré : texte « Solitaire » visible en 3,1 s lors de la première ouverture ; pastilles de métal visibles en 2,1 s sur ordinateur et 2,2 s en iPhone, vignettes toutes chargées vers 2,2 à 2,3 s [V, une mesure par appareil, sans cache].

## Sources

- https://www.clinejewelers.com/custom-ring-builder/ (assistant, 15/11/2026)
- https://www.clinejewelers.com/custom-design-cline/
- https://www.clinejewelers.com/design-your-own/
- https://www.clinejewelers.com/company/why-cline/
- https://www.clinejewelers.com/terms-and-conditions/
- https://www.clinejewelers.com/lab-grown-diamonds/
- https://www.clinejewelers.com/diamonds/ et https://www.clinejewelers.com/diamonds/14637647/
- https://www.clinejewelers.com/catalog/bridal-engagement/ et https://www.clinejewelers.com/catalog/cline/100-816/
- https://www.clinejewelers.com/robots.txt et le robots.txt de jeweleros.com (contrôle par `robots.cjs`)
