# Inventaire Moldavie : joailliers en ligne (bagues de fiançailles, alliances)

Date : 15/11/2026 (explorateur « Moldavie », marché Europe). Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse citée) · **[I]** inféré · **[S]** supposé.
Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun moldave) sans le refaire. Contrôle des adresses : `robots.cjs` puis curl (en-tête Safari, 1 requête / 2 s) et Chromium.

**Constat principal [V]** : aucun joaillier moldave trouvé ne propose de configurateur de bague ni de visuel 3D ou 360°. Tous vendent des **modèles de catalogue** (fiche, prix en lei, taille à choisir). Le seul sur mesure repéré est une page « commande individuelle » chez Sapfir (non ouverte à l'audit, hors des 2 premiers). Le marché est donc vierge pour « l'atelier en direct », mais aussi sans offre à copier côté outil.

**Terme employé pour le diamant synthétique en roumain (langue des sites ; russe en parallèle)** : « **Diamant creat în laborator** » [V : titres de produit et filtre « Diamant creat în laborator » sur paradis.md, `/ro/katalog/pomolvochnye-koltsa`]. Version russe de la même page : « выращенные бриллианты » [V, lu dans le résultat de recherche du site, non rouvert]. Le mot « sintetic » n'a pas été vu sur ces sites [V pour paradis.md et milenium.md ; I pour les autres]. Aucun terme imposé trouvé [S]. Milenium ne dit pas, sur la fiche lue, si le diamant est naturel ou de laboratoire (certificat GIA indiqué) [V].

## Tableau

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Paradis | Chișinău (17 magasins annoncés en Moldavie [I, extrait de recherche], 17 adresses listées dans le filtre « disponible à l'adresse » [V]) | https://www.paradis.md/ro/ (301 depuis /ro, 200) | https://www.paradis.md/ro/katalog/pomolvochnye-koltsa | Non. Catalogue avec filtres (diamant naturel ou « creat în laborator », forme, couleur, certificat GIA / IGI / GGL, taille, magasin) [V] | Aucun blocage de robots. robots.txt interdit le panier (`/*/cart`), la recherche, les filtres (`extra_fields`, `attr_val`…), les favoris (`/*/wish`) et le tri paginé (`limitstart`) [V] | RO, RU [V] | Plus grand catalogue, diamants de laboratoire étiquetés, filtre de certificat GIA / IGI, remise de 15 % en cas de paiement en 4 à 10 mensualités, livraison dès 2 000 lei |
| 2 | Milenium | Chișinău et Bălți (3 magasins) | https://milenium.md/ro/ (200) | https://milenium.md/ro/bijuterii-cu-diamante-ro/inele/ (bagues à diamant) ; alliances et fiançailles : https://milenium.md/ro/logodna-nunta/ | Non. Fiches à variantes de taille et de poids, filtres forme et taille [V] | Aucun. robots.txt n'interdit que `/app/` et `/store_closed.html` [V] | RO, RU [V] | Fiche avec 4 C (taille, couleur D–F, pureté VVS1, poids 0,247 ct) et mention « certificat GIA fourni » ; panier atteint ; crédit 0 % |
| 3 | Sapfir Jewellery | Chișinău et Bălți | https://sapfir.md/ (200) | https://sapfir.md/kollekciya/pomolvochnye-kolca/ | Non. Une page « commandes individuelles » (Custom orders) existe [V : lien listé, page non ouverte] | Aucun observé. /robots.txt répond 404 (donc tout autorisé [I]) | EN, RU, RO [V : sélecteur de pays] | Seul acteur avec un lien d'atelier sur mesure ; livraison gratuite dès 3 000 lei [I, extrait de recherche] |
| 4 | Solovov | Chișinău | https://solovov.md/ (200) | https://solovov.md/catalog/aur/kolcza/obruchalnyie/ | Non. Lien « Pentru a comanda » (for-order) [V : lien listé] | Aucun observé. robots.txt injoignable (code 000 de curl) : INCONNU pour cette adresse, mais Chromium charge la page en 200 [V] | RO, RU [I] | Bagues à diamant en or 585, garantie et certificats listés, crédit 0 % [I, extrait] |
| 5 | Platina | Chișinău | https://platina.md/ro (200) | https://platina.md/ro (bagues en accueil ; `/ro/product/inel-din-aur-roz-cu-diamant-1`) | Non | Aucun (robots.txt : Allow: /) [V] | RO, RU [I] | Remises de 20 à 40 % affichées, politique de retour en page dédiée (`/ro/info/retur`) [V : lien] ; 14 jours de retour [I, extrait] |
| 6 | Carat (carataur.md) | Chișinău | https://carataur.md/ro/ (302 depuis la racine, 200) | https://carataur.md/ro/53-pomolvochnye-kolca | Non | Aucun | RO, RU [V] | Mélange diamants, moissanite et zircone ; peu différenciant |
| 7 | Aureola & Lombard | Chișinău | http://www.aureola-lombard.md/ | http://www.aureola-lombard.md/ | Non connu | **Bloqué : Chromium reçoit 405 sur la page d'accueil, 0 contrôle lisible** [V]. Non contourné | RO [I] | Écarté de l'audit à cause du blocage |

Écartés : **Malvensky** (malvensky.com) : maison roumaine (Cluj, Bucarest), déjà dans `roumanie/INVENTAIRE.md`; propose un prix « Moldavie » en dollars US sur `/en-md/` [V : extrait de recherche], pas un acteur moldave. **VOIS (vois.md)** : revendeur de marques de mode, pas de bagues de fiançailles repérées [I]. **Mirnevest.md** : agrégateur de salons. **Savicki, Stil Diamonds, Sabrini** : roumains. Sites d'artisans (EVGOLD, atelier sur mesure en or, Chișinău) : or sans diamants, pas d'outil en ligne [I, extrait de recherche].

## Sites audités (étape 2)

Les 2 premiers sites ne bloquant pas les robots : **Paradis** (`paradis.md`) et **Milenium** (`milenium.md`). Ni l'un ni l'autre n'a de configurateur : la page de départ est le catalogue de bagues de fiançailles, puis une fiche produit.

- `paradis.md` : rapport `paradis.md` dans ce dossier.
- `milenium.md` : rapport `milenium.md` dans ce dossier.

## Sources

- Recherches web génériques (extraits) : « inele de logodna online Moldova », « кольца помолвочные Кишинев » (15/11/2026) ; pages citées dans le tableau.
- Pages lues : https://www.paradis.md/ro/katalog/pomolvochnye-koltsa ; https://milenium.md/ro/bijuterii-cu-diamante-ro/inele/ ; https://platina.md/ro ; https://sapfir.md/kollekciya/pomolvochnye-kolca/ ; https://solovov.md/catalog/aur/kolcza/obruchalnyie/ ; https://carataur.md/ro/53-pomolvochnye-kolca.
- robots.txt : https://www.paradis.md/robots.txt ; https://milenium.md/robots.txt ; https://platina.md/robots.txt ; https://carataur.md/robots.txt ; https://sapfir.md/robots.txt (404).
- Extraits de recherche non rouverts : https://www.paradis.md/ro/katalog/pomolvochnye-koltsa (nombre de modèles), https://solovov.md/catalog/aur/kolcza/obruchalnyie/inel-de-logodna-din-aur-cu-diamante/, https://malvensky.com/en/.
