# Slovénie : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 (contrôles faits le 24/11 dans l'environnement de l'étude, date de l'étude conservée), pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun slovène) sans le refaire.

Périmètre : joailliers slovènes qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Les grandes maisons internationales, les grands magasins et les places de marché sont exclus.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

Méthode : recherche web (Parallel Search, requêtes génériques en slovène), lecture du robots.txt avec `robots.cjs` avant toute ouverture, réponse HTTP par curl, puis Chromium (Playwright, identité par défaut), 2 secondes au moins entre deux pages d'un même site. Aucun formulaire rempli, aucun compte, aucun chat.

## Ce qu'il faut retenir

- **Aucun vrai configurateur de bague en Slovénie** : pas de choix de monture, de pierre et de métal avec image et prix qui changent (V : 6 sites ouverts, aucun). Les sites vendent des **fiches produit à options** (couleur d'or, taille, gravure) ou des **demandes de devis**.
- **Un seul acteur parmi ceux ouverts met le diamant synthétique en avant avec prix et panier à grande échelle** : Zlatarna Sterle (Ljubljana), 12 pages de bagues « z laboratorijskimi diamanti », IGI laser, or 14 k en trois couleurs, gravure, panier (V).
- **Le prix ne change pas avec la couleur d'or** chez Sterle (V) ; l'image non plus, d'après les captures comparées (I).
- **Deux sites bloquent les robots** : Zlatarna Celje (`Disallow: /`) et Glamira.si (robots.txt en 403). Non ouverts.
- **Aucune photo ni vidéo de fabrication** vue sur les sites audités (V) ; Zmay et Atelje DR décrivent un travail à la main, sans preuve filmée (I).

## Terme employé pour le diamant synthétique (slovène)

| Terme | Où | Statut |
|---|---|---|
| « laboratorijski diamant », « zaročni prstani z laboratorijskimi diamanti » | Sterle (titres, fiches), Muršič (« laboratorijskimi diamanti ») | V |
| « laboratorijsko ustvarjen diamant / briljant » ; la fiche d'attributs écrit « labolatorijski briljant » (faute de frappe) | Holc | V |
| « laboratorijsko narejen diamant » ; « laboratorijsko ustvarjen diamant » dans la FAQ | Glamira.si (extrait d'index de recherche, site non ouvert) | I |
| « laboratorijski diamant » opposé à « moissanit » | Koman (extrait d'index) | I |
| « sintetični » : relevé seulement pour des rubis et opales (« sintetični rubin ») | Malalan (filtre de pierres, extrait d'index) | I |

« Sintetični diamant » n'a été vu nulle part comme terme de vente (I). Le terme de vente courant est « laboratorijski ». Aucune source juridique slovène n'a été lue sur un terme imposé : à demander à l'avocat (S).

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : le diamant synthétique mis en avant avec prix ; le nombre d'options réellement actionnables en ligne ; la transparence du prix et du délai ; l'atelier visible ; l'accès aux robots.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Zlatarna Sterle | Ljubljana (Citypark, Moskovska 4 ; Center Vič) (V) | https://www.zlatarna-sterle.si/ | https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti (catalogue) · fiche : https://www.zlatarna-sterle.si/zaroka/zarocni-prstani-z-laboratorijskimi-diamanti/zlat-zarocni-prstan-z-lab-diamantom-18 | Non. Fiche à options : couleur d'or (3), taille 46 à 66, gravure 10 caractères, panier (V) | Aucun : `Allow: /` (V). Cookies à 3 cases | SI seulement (aucun sélecteur de langue vu) (V) | Seul des sites ouverts avec une collection synthétique large à prix affichés, certificat IGI laser, filtres et panier. **Audité.** |
| 2 | Zlatarne Holc | Maribor (Gosposka 27) et Lenart (V) | https://www.spletna-zlatarna.si/ | https://www.spletna-zlatarna.si/c/zarocni-prstani/ (66 bagues) · synthétique : https://www.spletna-zlatarna.si/c/zarocni-prstani-z-laboratorijski-diamanti/ (7 bagues) | Non. Fiche WooCommerce à une seule option (taille 45 à 75), panier avec livraison (V) | `Disallow: /*?` : toute adresse à paramètre est interdite (tri, filtres, liste de souhaits) ; le reste est autorisé (V) | SI (V) | Catalogue de 66 bagues (le plus fourni des sites ouverts, I), 7 bagues synthétiques (marquise, ovale, émeraude) de 980 à 3 100 €, panier atteint. Tri et filtres non testables. **Audité.** |
| 3 | Zmay (Zmay Jewelry) | non vérifiée | https://www.zmay.si/ | https://www.zmay.si/kategorija-izdelka/zarocni-prstani/ · fiche : https://www.zmay.si/shop/prstani/zavit-diamantni-zarocni-prstan/ · sur mesure : https://www.zmay.si/po-narocilu/ | Non. Fiche à options : or 14 ou 18 k, 3 couleurs, taille 46 à 65 par demi-taille ; bouton « Pošlji povpraševanje » (demande) et non panier (V) | Aucun : `Allow: /` (V) | SI et EN (https://www.zmayjewelry.com/) (V) | Designer à la main, photo du certificat IGI dans la galerie, bagues « zaročni » de 897 à 1 932 € (V). Pas de panier : audit non fait faute de place dans les 2 premiers. |
| 4 | Zlatarna Muršič | Ljubljana (Litijska 38) (V, extrait d'index) | https://zlatarnamursic.si/ | https://zlatarnamursic.si/ (le catalogue est sur l'accueil ; la page de départ exacte n'a pas été ouverte) · extrait : bague « ZPLD002 » en synthétique à 1 790 € | Non. WooCommerce, « Izberite možnost », liste de souhaits (V) | Aucun : `Allow` (V) | SI (I) | Fabrication sur place, 1 bague synthétique ; petit catalogue de bagues à cirkonia. Non audité. |
| 5 | Zlatarstvo Koman | non vérifiée | https://www.zlatarstvokoman.si/ | https://www.zlatarstvokoman.si/groups/42-zarocni-prstani · sur mesure : https://www.zlatarstvokoman.si/izdelki_po_narocilu | Non. Catalogue avec fourchettes de prix, bagues en moissanite et « laboratorijski diamant », rubrique « Po naročilu » (I) | Aucun : `Allow` (V) | 9 langues annoncées dans le menu (SI, EN, DE, FR, IT, SV, DA, NL, JA) (V) | Seul à proposer l'interface en 9 langues ; synthétique et moissanite mêlés. Non audité. |
| 6 | Atelje DR | Grosuplje (V, extrait d'index) | https://www.atelje-dr.si/ | https://www.atelje-dr.si/sl/unique-engagement-rings · alliances : https://www.atelje-dr.si/sl/wedding-rings-atelje-dr | Non. Pièces uniques à prix affichés (1 690 € et 2 075 €), contact par téléphone ou visio pour le sur mesure (V) | Aucun : `Allow: /` (V) | SL et EN (V) | Atelier à taille humaine (« najin atelje », I), pierres rares, sur mesure en visio, visite à Grosuplje sur rendez-vous. Proche de l'esprit « l'atelier en direct ». Non audité. |
| 7 | Malalan | Ljubljana (Mestni trg 21 ; Nazorjeva 2) et Zagreb (V) | https://malalan.eu/si | https://malalan.eu/si/nakit/prstani/zarocni-prstani | Non. Catalogue multimarque, filtres de pierre et de matière (or 9 k et 18 k, platine) (V) | Aucun : `Allow: /` (V) | SI, HR, EN (I) | Platine et or 18 k, mais grandes marques tierces (Pomellato, Messika…). Non audité. |
| 8 | Zlatarstvo Kodre | non vérifiée | https://www.zlatarstvokodre.si/ | https://www.zlatarstvokodre.si/ (bagues de fiançailles et alliances faites main, depuis 1928) | Non. Boutique en ligne + sur mesure par esquisses (V, extrait) | Aucun : `Allow` (V) | SI (I) | Alliances sur mesure, pas de synthétique vu. Non audité. |
| 9 | Zlatarna Celje | Celje (V, extrait d'index) | https://www.zlatarnacelje.com/ | https://www.zlatarnacelje.com/ | Non vu | **Bloqué : `Disallow: /`** (robots.cjs : INTERDIT) | SI (I) | Plus grande marque nationale (180 ans d'après l'extrait), mais n'a pas été ouverte par le navigateur. Contenu connu seulement par un extrait d'index de recherche. |
| 10 | Glamira.si | Allemagne (filiale en ligne) | https://www.glamira.si/ | https://www.glamira.si/zaroka (non ouvert) | Oui, connu par extrait (3 388 bagues « personnalisables ») (I) | **Bloqué** : robots.txt en HTTP 403 (INCONNU) | SI et autres | Marque de masse étrangère, déjà traitée dans les inventaires allemand et belge ; non ouverte. |

Les adresses des rangs 1 à 8 ont répondu 200 (curl avec l'en-tête Safari, V). Chromium a ouvert les rangs 1 à 3 (Sterle, Holc, Zmay). Pour les rangs 4 à 8, seule la réponse HTTP et une partie des pages ont été vues.

### Sites vus et écartés

- **Kove Jewelry** (https://www.kove.jewelry/en) : bagues synthétiques sur mesure, mais société tchèque (TVA CZ dans le code de la page) (V). Hors territoire.
- **Swarovski, Diamond Lab Boutique, Hidden Gem Lab** : remontés par la recherche, internationaux ou américains. Hors territoire.

## Audits retenus

Les deux premiers sites qui ne bloquent pas les robots : **Zlatarna Sterle** et **Zlatarne Holc**. Rapports : `zlatarna-sterle.md`, `zlatarne-holc.md`.

## Sources

- Recherches web Parallel Search du 24/11 (requêtes en slovène : zaročni prstani, poročni prstani, laboratorijski diamant, konfigurator).
- Pages lues dans Chromium : https://www.zlatarna-sterle.si/ ; https://www.spletna-zlatarna.si/ ; https://www.zmay.si/ ; https://www.zlatarstvokoman.si/izdelki_po_narocilu.
- robots.txt : voir `robots.cjs` (sorties du 24/11) pour tous les sites listés.
