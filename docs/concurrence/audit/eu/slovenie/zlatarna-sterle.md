# Audit : Zlatarna Sterle (Slovénie)

- **Site** : Zlatarna Sterle, Ljubljana (Citypark, Moskovska 4 ; Center Vič, Jamova 105), « plus de 30 ans » de tradition familiale (V, https://www.zlatarna-sterle.si/o-nas)
- **Adresse** : https://www.zlatarna-sterle.si/
- **Page de départ** : https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti (catalogue des bagues synthétiques) puis la fiche https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti/zlat-zarocni-prstan-z-lab-diamantom-18
- **Date** : 15/11/2026 (contrôles exécutés le 24/11 dans l'environnement de l'étude)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **complet** pour ce que le site propose (pas de configurateur, une fiche à options). Pas de page de panier complète : voir « Limites ».
- **robots.txt** : `User-agent: *` `Allow: /` (V, https://www.zlatarna-sterle.si/robots.txt). Toutes les adresses ouvertes : AUTORISÉ.

Légende : V vérifié (page lue ou contrôle actionné) · I inféré · S supposé. Prix en € TTC, tels qu'affichés le 24/11/2026 pendant une promotion « Črni teden » (Black Friday) à −25 %.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Menu « Zaroka » | 4 sous-catégories : classiques, formes variées, pierres de couleur, **synthétiques** (V) | /zaroka |
| 2. Catalogue synthétique | ≈ 12 pages de 10 bagues (« 1 2 … 11 12 », I), filtre FILTRIRAJ (or, genre, prix) | page de départ |
| 3. Fiche bague | quantité, taille (46 à 66), couleur d'or (3), gravure (10 caractères) | fiche |
| 4. Onglets | « Opis » (description), « Lastnosti » (caractéristiques) | fiche |
| 5. « V KOŠARICO » | message d'erreur si taille ou couleur manquent ; sinon mini-panier latéral | fiche |
| 6. Panier | mini-panier avec bouton « NA BLAGAJNO » (non cliqué : paiement) ; page /kosarica vide au rechargement | voir Limites |

Il n'y a **pas de configurateur** : on choisit une bague déjà dessinée (poids de pierre fixé par la fiche, par exemple 0,30 / 0,50 / 0,70 / 1,00 ct) et on règle trois options (V).

## Contrôles vérifiés

Ordinateur : 74 contrôles sur le catalogue, 60 sur la fiche. iPhone : 61 et 47 (V, `controls.cjs`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Storitve, Naši pari, O nas, Blog, Zaposlitev, Pogosta vprašanja, Odkup zlata | liens barre haute | pages de service (réparations, couples, histoire, blog, FAQ, rachat d'or) | — | `Storitve`, `O nas`, `Pogosta vprašanja` lus (V) ; les autres non ouverts |
| Zaroka, Kolekcije, Poroka, Diamantni nakit, Zlati nakit, Darila | menu principal | rubriques ; « Zaroka » mène à 4 sous-catégories dont les synthétiques | — | Zaroka testé ; les autres non ouverts |
| Loupe, compte, panier « 0 » | icônes | recherche, connexion, panier | — | non testés (recherche et compte : formulaires) |
| FILTRIRAJ | lien (ouvre un panneau) | ouvre or / genre / prix | — | OK (V) |
| Zlato (case parent) | case | regroupe belo et rumeno zlato | — | non testée |
| belo zlato | case | recharge la page en **/belo-zlato#shop** ; au moins 7 pages restent | prix inchangés | OK (V) |
| rumeno zlato | case | /rumeno-zlato#shop ; une seule page, moins de bagues (I) | inchangés | OK (V) |
| žensko | case | /zensko#shop ; au moins 6 pages | inchangés | OK (V) |
| Curseur de prix + « FILTRIRAJ PO CENI » | curseur jQuery UI, champ `amount` | plage de départ 937 € à 5 063 € ; poignée haute baissée à 5 023 € → adresse `?minPrice=937&maxPrice=5023#shop`, 10 bagues de 960 à 3 037,50 € | filtre | OK (V). Incohérence : la page 1 montre 862,50 € alors que le minimum du curseur est 937 € (V) |
| Pagination 1, 2 … 12 | liens | pages suivantes du catalogue | — | non cliquée (2 s entre pages) |
| Carte produit (image et titre) | lien | ouvre la fiche | — | OK (V) |
| Quantité | champ nombre, défaut 1 | quantité au panier | ×qté | non modifiée |
| Velikost | liste, 46 à 66 par pas de 1 (21 valeurs) | sans choix : « izberite velikost prsta! » | — | OK (V) |
| belo / rdeče / rumeno zlato | 3 pastilles | sélection marquée par un anneau gris ; **ni le prix ni le numéro d'article (TB404P070LG) ne changent** ; l'onglet « Lastnosti » reste sur « belo zlato » après avoir choisi rouge | aucun | fonctionne, effet minimal (V) |
| Gravura | champ texte | coupé à 10 caractères (`maxlength`) | inclus | OK (V) |
| Nasveti za graviranje | lien | page de conseils de gravure | — | non ouvert |
| Opis | onglet | texte : round brillant, VVS, Excellent Cut, certificat | — | OK (V) |
| Lastnosti | onglet | couleur, matière, 585/1000, pierres, « IGI certifikat - laser » | — | OK, texte figé (V) |
| V KOŠARICO | lien javascript | sans taille/couleur : messages « izberite velikost prsta! », « izberite barvo zlata prstana! » ; avec : panneau panier | voir plus bas | OK (V) |
| Panneau panier | mini-panier | « Velikost: 54, Barva zlata: rdeče zlato, Gravura: AB », quantité × prix | **affiche deux lignes : « 1 x 1560,00 € » et « 1 x 1.170,00 € »** (prix barré et prix soldé) | OK mais ambigu (V) |
| NA BLAGAJNO | bouton du mini-panier | passe à la commande | — | **non cliqué** (au-delà du panier) |
| Piškotki : 3 cases (système, analytique, marketing), « Potrdi vse piškotke », « Shrani izbrane » | bannière | enregistre les choix | — | « Potrdi vse » cliqué ; le reste non |
| Newsletter : e-mail, case RGPD, « Prijavi se » | formulaire | inscription | — | non rempli |
| Footer : Pogoji poslovanja, Obvestilo o zasebnosti, Oznake izd. iz pl.kovin, Pomoč pri spletnem nakupu | liens | pages légales et d'aide | — | Pomoč et Pogoji lus (V) |

Aucun bouton partager, comparer, liste de souhaits, essayage à domicile, chat, WhatsApp, financement, guide des tailles ou rendez-vous en ligne n'a été trouvé sur la fiche (V, liste des contrôles de la fiche). Un lien de pied de page « Piškotki » de la fiche pointe vers `/zlatarna-sterle.si/gdpr/contract/piskotki` (préfixe de domaine en trop), alors que le catalogue utilise `/gdpr/contract/piskotki` (V, controls.cjs) : lien probablement mort sur les fiches (I).

## Options disponibles

- **Métal** : 3 couleurs d'or (blanc, rouge, jaune), titre 585/1000 (14 k) (V, onglet Lastnosti). Pas de 18 k ni de platine vus sur la fiche (V).
- **Forme de pierre** : choisie par la bague (rond, émeraude, coussin « fancy vivid pink »), pas une option (V sur la page 1 du catalogue).
- **Carat** : fixé par la bague ; la page 1 liste 0,30, 0,50, 0,70 et 1,00 ct (V, titres).
- **Origine** : catalogue séparé « laboratorijski diamanti » ; les bagues en diamant naturel sont dans d'autres rubriques (« klasični », « barvni kamni ») (V, liens du menu). Pas de bascule naturel / synthétique sur une même fiche (V).
- **Qualité** : « VVS » et « Excellent Cut » sur la fiche lue (V) ; couleur D à F non indiquée sur la fiche.
- **Taille** : 46 à 66 (V).
- **Gravure** : 10 caractères, texte libre (V).
- **Quantité** : champ numérique (V).
- **Filtres du catalogue** : or (blanc, jaune), genre (femme), prix (curseur) (V).

## Prix, délais, retours, garanties

| Point | Valeur | Source |
|---|---|---|
| Prix affiché | TTC, avec prix barré et « Najnižja cena zadnjih 30 dni » (prix le plus bas des 30 derniers jours) | page de départ (V) |
| Exemples (page 1, avant −25 % → après) | 0,30 ct : 1 280 → 960 € ; 0,50 ct : 1 420 → 1 065 € ; 0,70 ct : 1 560 → 1 170 € ; 1,00 ct : 2 090 → 1 567,50 € ; émeraude : 2 250 → 1 687,50 € ; fancy vivid pink : 4 050 → 3 037,50 € ; « Val » : 1 150 → 862,50 € | page de départ (V) |
| Décomposition du prix | **aucune** (pas de métal, pierre, façon) ; la ligne « Cena : 1560 € » de l'onglet Lastnosti répète le prix barré | fiche (V) |
| Livraison | gratuite en Slovénie, par Pošta Slovenije ; envoi dans toute l'UE ; hors UE : contacter avant | /pomoc-pri-spletnem-nakupu (V) |
| Délai de livraison | 3 à 5 jours ouvrés si en stock ; 2 à 3 semaines sur commande ; fiche : « Cca. 2-3 tedne » ; conditions : « 3-14 delovnih dneh » | pomoc, fiche, pogoji (V) |
| Alliances | 2 à 3 semaines ; commander 2 mois avant le mariage | /pogosta-vprasanja (V) |
| Paiement | cartes Visa, Maestro, Mastercard, ou facture proforma valable 7 jours | pogoji (V) |
| Retour | 14 jours légaux ; en boutique (Citypark, Center Vič) ou par envoi ; l'acheteur paie le retour | pomoc (V) |
| Exception du sur mesure | pas de rétractation pour un bijou fait sur instructions, **gravé** ou une alliance sur mesure | pomoc (V) |
| Garantie | **aucune mention** du mot « garancija » dans l'aide, la FAQ et les conditions lues (V) | pomoc, faq, pogoji |

## Confiance et service

- **Certificats** : « diamants avec certificats GIA et IGI », numéro gravé au laser (FAQ) ; la fiche lue dit « IGI certifikat - laser » (V). Pas de numéro de rapport visible, pas de lien vers le rapport (V).
- **Libellé du synthétique** : « laboratorijski diamant » partout ; la FAQ explique que la différence avec le naturel est « l'origine et en général le prix » (V). Aucun « synthétique » (V).
- **Langues et devise** : slovène seulement (aucun sélecteur) ; euro (V).
- **Avis clients** : aucun sur la fiche (V). Rubrique « Naši pari » (couples) non ouverte.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ; la fiche montre 2 photos : bague sur fond blanc et photo de main (V). Pas de suivi de commande vu.
- **Service** : téléphone 01 541 20 90, deux boutiques à Ljubljana, rachat d'or, réparations, gravure, **sur mesure par e-mail** avec dessin à valider (FAQ) (V). Pas de chat ni de WhatsApp vus (V).
- **Prix de réparation et de mise à taille** : modification de taille « selon le modèle, le matériau et les pierres » (FAQ) (V).

## Points forts à retenir pour JR Diamond

1. **Catalogue synthétique à prix affichés et panier, avec le mot « laboratorijski »** : 12 pages de bagues, prix par poids de pierre, certificat IGI laser sur la fiche (V, page de départ et onglet Lastnosti). Le parcours est court : taille, couleur, gravure, panier.
2. **Validation claire des options manquantes** : deux messages précis (taille, couleur) avant le panier (V, test sans taille).
3. **Récapitulatif d'options dans le panier** : taille, couleur d'or et gravure rappelées (V, mini-panier).
4. **Délai annoncé sur la fiche** (« 2-3 semaines ») et dans l'aide, avec stock 3 à 5 jours (V).
5. **Prix le plus bas des 30 derniers jours** affiché à côté du prix soldé (V). Preuve de transparence que JR Diamond peut égaler.
6. **Filtre de prix avec adresse partageable** (`?minPrice=…&maxPrice=…`) (V).
7. **Temps d'affichage correct** : image principale de la fiche en 3,1 s sur ordinateur et 2,4 s en affichage iPhone (V, LCP d'une mesure unique).

## Défauts observés

- **Aucun configurateur ni visuel 3D, 360°, vidéo ou essayage** : une seule photo de produit et une photo portée (V).
- **Le choix de la couleur d'or ne change ni le prix, ni la photo, ni le texte** : l'onglet Lastnosti reste sur « belo zlato » après avoir choisi « rdeče zlato » (V). La bague blanche est donc montrée quelle que soit la couleur choisie (I, comparaison de captures).
- **Mini-panier à deux prix** (« 1 x 1560,00 € » puis « 1 x 1.170,00 € ») sans libellé (V).
- **Le panier n'est pas conservé au rechargement** : /kosarica affichait « Vaša košarica je prazna » juste après un ajout réussi, dans la même session de navigateur (V). Cause non établie (cookies de session ? I).
- **Incohérence de curseur** : minimum 937 € alors qu'une bague soldée est à 862,50 € (V).
- **Pas de décomposition du prix**, pas de garantie annoncée, pas d'avis, pas de langue autre que le slovène (V).
- **Rétractation exclue pour toute gravure** : la gravure est proposée sur la fiche, mais rend le retour impossible (V). L'exception est dite sur la page d'aide, pas sur la fiche (V).

## Limites de l'audit

- Page /kosarica complète non vue : le panier se vidait au rechargement. Le récapitulatif lu est celui du mini-panier. Le bouton « NA BLAGAJNO » n'a pas été cliqué (commande).
- Recherche, compte, newsletter, pages « Naši pari », « Blog », « Kolekcije », « Darila », « Nasveti za graviranje » : non ouverts.
- Pagination au-delà de la page 1 non parcourue ; le nombre de pages (12) est déduit de la barre de pagination (I).
- Les autres fiches (par exemple « émeraude », « fancy vivid pink ») n'ont pas été ouvertes une à une : les options ont été relevées sur une fiche (0,70 ct rond) et supposées identiques (S) ; la carte de la page 1 montre les mêmes 3 couleurs.
- Temps d'affichage : une seule mesure par appareil ; le catalogue a affiché sa première grande image en 1,5 à 3,6 s sur ordinateur (V, deux mesures) ; sur iPhone, mesure du catalogue non exploitable.
- Promotion de 25 % en cours : les prix soldés ne sont pas les prix habituels.
- Le prix par carat suggère une structure de prix à paliers (0,30 → 1 280 €, 1,00 → 2 090 €) : lecture personnelle, non expliquée par le site (I).

## Sources

- https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti (catalogue, filtres, prix)
- https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti/zlat-zarocni-prstan-z-lab-diamantom-18 (fiche)
- https://www.zlatarna-sterle.si/pomoc-pri-spletnem-nakupu (livraison, retours, paiement)
- https://www.zlatarna-sterle.si/pogosta-vprasanja (certificats, alliances, sur mesure)
- https://www.zlatarna-sterle.si/gdpr/contract/pogoji-poslovanja (conditions)
- https://www.zlatarna-sterle.si/o-nas, /storitve (présentation, services)
- https://www.zlatarna-sterle.si/robots.txt
- Captures dans le dossier de travail de la session (hors dépôt).
