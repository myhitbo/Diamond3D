# Islande : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Il complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun islandais) sans le refaire.

Périmètre : joailliers établis en Islande qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers (configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés). Exclus : grandes maisons internationales, grands magasins, places de marché. Marques nationales admises.

Méthode : recherche web (Parallel Search, requêtes génériques en islandais et en anglais), sondes `curl` avec en-tête Safari, `robots.cjs` avant chaque adresse ouverte, Chromium (Playwright, identité par défaut). Une page toutes les 2 secondes au plus par site. Aucun formulaire, compte, chat ni paiement.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Aucun joaillier islandais trouvé n'a de configurateur 3D ou 360° ni de constructeur de bague en ligne** (V sur les 6 sites ci-dessous ; l'absence ailleurs reste I, la recherche étant limitée à des requêtes web). Les sites sont des boutiques Shopify (ou Wix) à fiches simples ; le sur mesure se fait par courriel, rendez-vous ou en atelier.
- **Terme pour le diamant synthétique : pas de terme imposé trouvé.** Usages relevés (V) : « Lab grown demantar » (Klukkan, filtre « Steinar »), « ræktaðir demantar » (« diamants cultivés », GÞ Skartgripir / AMA, titre de fiche ; AURUM : « ræktaða demanta (e. lab-grown diamonds) »), « laboratory-grown » (Sif Jakobs, en anglais). Aucune loi islandaise sur l'étiquetage n'a été trouvée (I). « Ræktaðir » correspond à « cultivés », terme que la ligne directrice de la profession (NAJ, CIBJO, AWDC) déconseille (V, adresses en sources). « demantur » = diamant (V, Wiktionnaire).
- **AURUM est 100 % diamants synthétiques et or recyclé** (V) : même positionnement « éthique » que Courbet, avec une fiche très simple (taille, gravure gratuite). Prix en dollars US.
- **Tradition locale** : on porte des bagues de fiançailles assorties à la main droite, puis on les passe à la gauche au mariage (V : Klukkan, page des bagues). L'alliance lisse « pour deux » est donc la base du marché ; le solitaire est une option.
- **Ordre de grandeur des prix** (V) : alliance lisse or 14 k LAUPUR de 180 000 à 260 000 ISK (Klukkan ; paire ou unité non précisé sur la liste), 115 000 ISK l’unité en 3 mm et 230 000 ISK la paire (Jón & Óskar), solitaire synthétique 0,25 ct en or blanc 14 k : 230 000 ISK, solitaire synthétique 0,97 ct ovale : 3 210 USD (AURUM, avant remise).
- **Aucun des six ne montre de photos ni de vidéos de fabrication d'une commande** (V pour AURUM et Klukkan ; I pour les autres). Seul Ólistef propose un atelier où le couple forge ses alliances (V).
- **Aucun site ne bloque les robots** sur ses pages publiques (V). Réserve : les deux sites audités (Shopify) publient un `agents.md` qui interdit aux agents de scripter le panier ; l'audit s'est donc arrêté avant le panier (voir rapports).

## Classement

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | AURUM by Guðbjörg | Reykjavik | https://aurumiceland.com/ | https://aurumiceland.com/collections/engagement-rings | Non. Fiches à taille et gravure ; changement de métal, de diamant, 18 k sur devis par courriel ; rendez-vous en boutique ou vidéo | Aucun (robots : `/cart/` et `/account` interdits) | EN, USD ; boutique en IS | Seule marque 100 % synthétique ; expédition mondiale DHL ; garantie 5 ans ; gravure gratuite ; lignes directrices du sur mesure publiées (V) |
| 2 | Klukkan | Kópavogur (4 magasins) | https://www.klukkan.is/en | https://www.klukkan.is/en/collections/trulofunarhringar | Non. Filtres (vendeur, pierre dont « Lab Grown », prix), tri, 3 vues ; orfèvre maison pour le sur mesure | Aucun (robots : `/cart/` interdit) | IS, EN, PL ; ISK | Grand détaillant, 4,8/5 sur 209 avis, 49 bagues, paiement en 36 mois, 14 j d'annulation ; mélange naturel et synthétique (V) |
| 3 | Jón & Óskar | Reykjavik | https://jonogoskar.is/ | https://jonogoskar.is/collections/trulofunar-og-giftingarhringar | Non. Tarif par largeur (3, 4, 5 mm), simple ou paire ; rubrique « Ráðgjöf og sérsmíði » | Aucun | IS | Alliances en or 14 k avec tableau de prix par largeur ; pose de diamants à la demande (V) |
| 4 | GÞ Skartgripir og úr & GullBúðin | Reykjavik | https://www.skartgripirogur.is/ | https://www.skartgripirogur.is/collections/trulofunar-giftingarhringar | Non. Catalogue ; marque AMA (or 18 k, « Ræktaðir demantar ») | Aucun | IS | Naturels et synthétiques côte à côte, certificats et qualités affichés (D/VS), prix en ISK (V) |
| 5 | Gull og Silfur | Reykjavik | https://www.gullogsilfur.is/ | https://www.gullogsilfur.is/trúlofunar-hringar | Non. Catalogue de paires (site Wix) | Aucun | IS | Alliances par paire, gamme or, or blanc, diamants (V page ; prix non relevés) |
| 6 | Ólistef gullsmiður | Hafnarfjörður | https://www.olistefgoldsmith.com/ | https://www.olistefgoldsmith.com/ | Non. Sur mesure par contact ; atelier « forgez vos alliances » (4 h) | Aucun | IS, EN | Atelier d'artisan, transformation de bijoux de famille, galerie de réalisations ; pas de panier (V) |

Non classés : **Gilbert úrsmiður** (gilbert.is, Squarespace, horlogerie, aucune bague en vente trouvée, V) ; **Sif Jakobs** (sifjakobs.com, marque scandinave islando-danoise, bagues synthétiques « Laboratory-grown 14k » ; relève du périmètre danois, I) ; Kronan.is est un supermarché (écarté).

## Audit

Les deux premiers sites, **AURUM** et **Klukkan**, ont été audités : `aurum.md` et `klukkan.md` (dans ce dossier). Statut **partiel** pour les deux : le `agents.md` de chaque site demande aux agents de ne pas scripter les contrôles d'achat ; aucun ajout au panier n'a été fait et la page du panier n'a pas été ouverte.

## Sources

- Recherches Parallel Search du 15/11/2026 (requêtes génériques en islandais et en anglais).
- https://aurumiceland.com/robots.txt et https://aurumiceland.com/agents.md ; https://www.klukkan.is/robots.txt (V).
- https://www.klukkan.is/en/collections/trulofunarhringar ; https://www.klukkan.is/en/collections/giftingarhringar (V).
- https://www.skartgripirogur.is/collections/trulofunar-giftingarhringar (V, titre « AMA - 18kt Hringur - Ræktaðir demantar 1.95ct »).
- https://jonogoskar.is/products/copy-of-giftingarhringar-101-grunntypa (tarif par largeur, V).
- https://www.olistefgoldsmith.com/ (V).
- Terminologie : http://naj.co.uk/write/MediaUploads/Resources/NAJCOP-DiamondTerminologyGuide-v2.pdf ; https://www.awdc.be/diamond-terminology-guideline ; https://en.wiktionary.org/wiki/demantur.
