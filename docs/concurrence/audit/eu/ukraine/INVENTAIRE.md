# Inventaire Ukraine : joailliers en ligne (bagues de fiançailles, alliances)

Explorateur : Ukraine (Europe). Date de consigne : 15/11/2026 ; recherches et contrôles d'adresses faits le 24/11/2026.
Légende : **[V]** vérifié (page lue ou contrôle actionné dans un navigateur) · **[VR]** vérifié par extrait de recherche web seulement (page non ouverte dans le navigateur) · **[I]** inféré · **[S]** supposé.
Le premier inventaire européen (`docs/concurrence/2026-11-15_europe.md`) ne couvre pas l'Ukraine : aucun de ses 14 sites n'est ukrainien. Rien n'est refait ici, les 10 sites ci-dessous sont nouveaux.

Contrôles faits pour chaque adresse : `robots.cjs` (robots.txt, groupe `*`), puis `curl` avec en-tête Safari (code HTTP final), une requête par site et par contrôle, avec 2 s d'écart. Les prix sont en hryvnias (₴, UAH) ; les sites ukrainiens affichent des prix TTC en ₴ [V].

## Classement par intérêt pour JR Diamond

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Guzema (GUZEMA Fine Jewelry) | Kyiv (2 boutiques), Lviv ; boutique à New York | https://guzema.ua/ (200) | https://guzema.ua/engagement-ring-studio/ (200, autorisé) | **Oui** : constructeur en 5 étapes (6 designs, or blanc ou jaune, 3 formes, 8 carats, couleur D à H, pureté VVS1 à VS2, taille, gravure), image qui change, **prix estimé affiché en direct**, envoi d'une demande (pas de paiement) [V] | Aucun | UK ; version EN sur guzema.com (hreflang) [V] | Seul constructeur de bague de fiançailles à prix en direct trouvé en Ukraine. Diamants naturels GIA, fabrication à la main à Kyiv, garantie à vie [V] |
| 2 | Family Gold Masters (FGM) | Lviv | https://fgm.gold/ (200) | https://fgm.services.confmetrix.com/ (200 ; configurateur d'alliances en EN/UAH) | **Oui** : configurateur d'alliances (« Start configuration ») ; essayage en ligne par application mobile ; numéro d'identification gravé sur chaque alliance [VR] | **Marqué bloqué** : `robots.cjs` répond INCONNU pour fgm.gold et pour confmetrix (le robots.txt renvoie la page HTML de l'application, pas un fichier de règles) ; consigne : ne pas auditer | UK, EN, PL [VR] | Alliances sur mesure, 3D, preuve de fabrication par numéro de série : très proche de l'alliance de kiddouchin. À reprendre si le propriétaire autorise un site sans robots.txt |
| 3 | 14KARAT | Kyiv (showroom sur rendez-vous) | https://diamonds14k.com/ (200) | https://diamonds14k.com/product-category/rings/ (200) | Non : catalogue de bagues en **diamants de laboratoire**, centre de 0,5 à 10 ct, IGI, or 585 et 750, sur mesure en 3 à 5 semaines [VR] | **Non audité** : le robots.txt interdit nommément `anthropic-ai` et `Claude-Web` (et d'autres robots d'IA) ; seule la page d'accueil a été chargée une fois, avant lecture de ce fichier, aucune autre | UK, RU | Même positionnement matière que JR Diamond (synthétique + IGI). Livraison gratuite, paiement en plusieurs fois PrivatBank [VR] |
| 4 | Centaurus (ювелірна майстерня) | Kyiv | https://centaurus.ua/ (200) | https://centaurus.ua/kabluchky/kabluchky-na-zaruchyny (200, autorisé) | Non : catalogue avec filtres (métal, couleur, pierre dont « Лабораторний діамант ») et bouton « Commander » qui ouvre une demande de chiffrage ; modèle 3D proposé avant fabrication [V] | Aucun | UK (sélecteur UA) | Atelier, platine, grille de prix de main-d'œuvre publique, 65 % d'acompte sur mesure [V] |
| 5 | Kochut | Uzhhorod, Kyiv, Odesa (boutiques, filtre de stock) | https://jewellery.kochut.org/ (200) | https://jewellery.kochut.org/shop/rings/rings-with-diamonds (200 puis **redirection vers la boutique US**) | Non : catalogue à filtres (certificat GIA, carat central, forme, métal) et panier [VR] | **Non audité** : depuis notre adresse IP, le site redirige vers `/en-us/` (géolocalisation, boutique de Red Bank, NJ) ; robots.txt : `Crawl-delay: 10`, filtres et tri interdits | UK, EN, plusieurs régions | Marque nationale reconnue, mais la boutique ukrainienne n'est pas atteignable sans contourner la géolocalisation, ce qui est exclu |
| 6 | KYuZ (КЮЗ) | n.d. | https://kuz.ua/ (200 en 6,5 s) | https://kuz.ua/ua/catalog/kabluchki/filter/nalichie_vstavki-z_diamantami-type-dlja_zaruchin (200) | Non : catalogue de bagues de fiançailles à diamants, filtres, prix remisés de 29 % [VR] | Aucun | UK, RU, EN (hreflang) [V] | Grande marque nationale ; utile pour la fourchette de prix du catalogue |
| 7 | Zlato (Злато) | n.d. | https://zlato.ua/ (200) | https://zlato.ua/uk/f-diamant_laboratornyj/ (200) | Non : catalogue « diamant de laboratoire », vidéos de produits, paiement en plusieurs fois [VR] | Aucun | UK, RU (hreflang) [V] | Se présente comme « hypermarché de bijouterie » (proche d'une place de marché) : classé bas |
| 8 | Denarius | Lviv (showroom) | https://denarius.com.ua/ (200) | https://denarius.com.ua/ (rubrique « Каблучки на заручини ») | Non : fabricant lvivois, articles sur diamant naturel ou de laboratoire et formes de taille [VR] | Aucun | UK, EN [V] | Contenu pédagogique comparable à nos guides |
| 9 | SkyGold (SkyJewel) | Kyiv | https://skygold.com.ua/ | https://skygold.com.ua/ | Non : sur mesure à partir d'un croquis ou d'une photo, 2 à 4 semaines [VR] | **Bloqué** : `robots.cjs` INCONNU (robots.txt en HTTP 429) | UK, RU, EN | Atelier qui vend aussi des diamants de laboratoire et exporte [VR] |
| 10 | Stolychna (Столична) | Kyiv | https://stolychnashop.com.ua/ | https://stolychnashop.com.ua/ua/koltsa/vstavka_brilliant | Non : catalogue de 1 454 bagues à diamant, remises affichées [VR] | **Bloqué** : HTTP 403 avec curl (en-tête Safari), non retenté | UK, RU | Réseau national, catalogue seulement |

Mentionnés, non classés : 3D-Jewel (3d-jewel.com, Kherson) : studio de modélisation 3D pour joailliers, pas de vente aux particuliers [VR] ; Divo (divo.dp.ua, Dnipro) : atelier de réparation et de fabrication à la commande, sans vente en ligne [VR] ; centaurus.com.ua : second domaine du même atelier que Centaurus [I, mêmes numéros de téléphone].

## Terme employé pour le diamant synthétique en ukrainien

Aucun site vu n'emploie « синтетичний ». Les termes relevés [VR sauf mention] : « лабораторний діамант » (Centaurus : filtre « Лабораторний діамант » [V] ; 14KARAT ; Zlato ; Denarius), « лабораторно вирощений » et « синтетичні діаманти, вирощені в лабораторних умовах » (SkyGold), « вирощені діаманти » (Guzema, titre de section « Натуральні та вирощені діаманти : у чому різниця » [V]). Guzema affiche un bandeau « ПРИРОДНІ ДІАМАНТИ » sur ses fiches [V]. Je n'ai pas vérifié de règle ukrainienne sur le libellé [S : aucune règle équivalente au décret français n'a été cherchée].

## Territoire et couverture

- 10 sites trouvés ; 1 seul (Guzema) offre un constructeur de bague de fiançailles avec prix en direct. Un second configurateur (alliances, FGM) existe mais est marqué bloqué.
- Audités (2 premiers sites ouverts aux robots) : **Guzema** (`guzema.md`) et **Centaurus** (`centaurus.md`). Non audités : FGM (INCONNU), 14KARAT (robots d'IA interdits), Kochut (redirection géographique).

## Sources

- Recherches web (Parallel) du 24/11/2026 sur « конструктор каблучки », « каблучка на заручини на замовлення », « обручки конструктор », « лабораторні діаманти ».
- https://guzema.ua/engagement-ring-studio/ · https://fgm.gold/ · https://fgm.services.confmetrix.com/ · https://diamonds14k.com/ · https://centaurus.ua/ · https://jewellery.kochut.org/ · https://kuz.ua/ · https://zlato.ua/ · https://denarius.com.ua/ · https://skygold.com.ua/ · https://stolychnashop.com.ua/ · https://skyjewel.com.ua/en/portfolio/lab-grown-diamonds
- Contrôle des robots.txt : guzema.ua, centaurus.ua, jewellery.kochut.org, kuz.ua, zlato.ua, denarius.com.ua, diamonds14k.com (lus le 24/11/2026).
