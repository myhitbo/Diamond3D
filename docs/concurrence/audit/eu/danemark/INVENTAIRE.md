# Danemark : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 (étude de concurrence JR Diamond, marché Europe). Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun danois) sans le refaire.
Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré (extrait de moteur de recherche, déduction) · **S** supposé.
Méthode : recherche web en danois et en anglais (requêtes génériques), `robots.txt` lu avant chaque adresse, une page tous les 2 secondes au plus par site, Chromium (Playwright, identité par défaut), aucun formulaire, compte, chat ni panier.

## Ce qu'il faut retenir

- **Aucun configurateur 3D de bague de fiançailles n'a été trouvé chez un joaillier danois** (V pour les 11 sites lus ; absence non prouvée pour tout le pays). Le seul outil de conception en ligne vu est un « ring-designer » d'alliances, chez Christoffersen Guld, et il **bloque les robots** (défi Cloudflare, HTTP 403).
- **Le modèle dominant** : catalogue de modèles prêts, avec quelques options (métal, carat, taille), puis **sur mesure sur rendez-vous** avec rendu 3D validé avant fabrication (Sisi, Lemelé, Manich, Stinneholm).
- **Deux acteurs poussent le synthétique** (Sisi Copenhagen, Clearcarats) et Manich vend les deux (même modèle à 7 900 kr en synthétique, 14 900 kr en naturel, V).
- **Termes pour le diamant synthétique** : « laboratorieskabt / laboratorieskabte diamanter » (Sisi), « laboratoriedyrkede diamanter » (Lemelé), « lab-grown / labgrown » (Manich, Clearcarats, Jan Jørgensen). Le mot « syntetisk » n'a été vu sur aucune des pages lues (V pour les pages lues). Aucune règle danoise du libellé n'a été recherchée ici (S).
- Les prix sont en couronnes danoises (kr / DKK), TVA comprise sur les fiches lues (I : prix « kr. » de boutique grand public).

## Classement

Mesure de l'intérêt, dans l'ordre : outil de conception en ligne ; lien image et objet fabriqué ; prix affiché et expliqué ; synthétique et naturel côte à côte ; preuves de fabrication ; proximité du modèle « atelier ».
Adresses : réponse 200 dans Chromium le 15/11, sauf mention.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Christoffersen Guld | Plusieurs boutiques (ville du siège non relevée) | https://christoffersenguld.dk/ | https://christoffersenguld.dk/vielsesringe (page d'accueil du « ring-designer » d'alliances, lien « Design jeres vielsesringe her ») | **Oui, pour les alliances** : profil, mesures (taille 44 à 76 mm, hauteur 1 à 3,5 mm, largeur 1 à 12 mm), matériau, réglables par anneau (I, extrait d'index) | **Bloque les robots** : HTTP 403 avec jeton `__cf_chl_rt_tk` (défi Cloudflare), constaté une seule fois, sans nouvel essai (V). `robots.txt` : Allow (V) | DA | Le seul vrai concepteur en ligne repéré au Danemark. Alliances seulement. **Non audité** : bloqué |
| 2 | Sisi Copenhagen | Copenhague (showroom Rosenborggade 1B) | https://sisicph.dk/ | https://sisicph.dk/collections/alle-forlovelsesringe · fiche à options : https://sisicph.dk/products/classic-solitaire-6-prong-diamond-ring-1-0ct-yg | Non. Fiche à options : métal (or jaune ou blanc 14 k), carat (0,5 à 1,5), taille ; prix et photo recalculés à chaque choix (V). Sur mesure par rendez-vous | Aucun (Shopify). `robots.txt` interdit `/cart/`, `/cart.js`, `?sort_by=` (V) | DA ; sites SE, NO, EU (V) | Spécialiste synthétique, prix affichés, retour 30 jours étendu jusqu'à 90 jours pour un cadeau ou une demande en mariage, 6 500 avis annoncés. **Audité** : `sisi-copenhagen.md` |
| 3 | Manich Jewelry | Vodskov, près d'Aalborg (showroom Brorsonsvej 30) | https://manich.dk/ | Recherche de diamants : https://manich.dk/pages/lab-grown-diamanter · bagues : https://manich.dk/collections/ringe-lab-grown-diamanter · sur mesure : https://design.manich.dk/ | Non pour la bague. Moteur de recherche de pierres (631 502 synthétiques, filtres carat, couleur, pureté, taille, forme, délai) ; sur mesure : devis puis 3 à 6 propositions en 3D (V) | Aucun (Shopify). `robots.txt` interdit `/cart/`, `/cart.js`, `?sort_by=` (V) | DA, EN ; livraison EU, 8 devises dont EUR, SEK, PLN (V) | Naturel et synthétique côte à côte, prix de la pierre affichés, délai affiché par pierre, conception offerte dès 5 000 kr de pierre. **Audité** : `manich.md` |
| 4 | Clearcarats | Non relevée | https://clearcarats.dk/ | https://clearcarats.dk/kategori/diamantringe/forlovelsesringe/ · sur mesure : https://clearcarats.dk/specialbestilling/ | Non. Catalogue de bagues synthétiques avec remises affichées (11 196 kr au lieu de 13 995 kr) (V) | Aucun (V) | DA | Synthétique mis en avant, note 4,8 sur 5 annoncée dans le titre de page (V). Non audité : hors des 2 premiers sites non bloqués |
| 5 | Lemelé | Copenhague (showroom Bredgade) | https://www.lemele.dk/ | https://www.lemele.dk/pages/forlovelse | Non. Sur mesure : rendez-vous (showroom, téléphone ou visio), rendu 3D validé avant fabrication, 2 à 4 semaines (V) | Aucun (V) | DA | Prix d'entrée annoncés : dès 13 000 kr (naturel) et 8 500 kr (synthétique) ; GIA (naturel) et IGI (synthétique) au-dessus de 0,30 ct (V). Modèle proche de « sur mesure + preuve 3D » |
| 6 | Jonatan Dror | Non relevée | https://jonatandror.com/ | https://jonatandror.com/collections/oval | Non. Choix de la forme de pierre, puis modèles à prix fixes : solitaire 10 000 kr, pavé 14 500 kr, halo 17 500 kr, trilogie sur demande (V) | Aucun (V) | DA | Diamants naturels, or 18 k, prix par type de monture clairs (V). Peu d'options |
| 7 | Jan Jørgensen Smykker | Blokhus | https://janjorgensensmykker.dk/ | https://janjorgensensmykker.dk/vielsesringe | Non. Catalogue d'alliances et de bagues par collection, filtre de prix (V) | Aucun (V) | DA | Marque nationale. Or recyclé et synthétique revendiqués, « expédié sous 8 à 10 jours ouvrés » (V). Catalogue sans personnalisation en ligne |
| 8 | To Form | Aarhus (Vestergade 24) | https://www.toform.dk/ | https://www.toform.dk/forlovelsesringe | Non. Prix « à partir de » (6 600 à 79 550 kr), sur mesure sur rendez-vous (V) | Aucun (V) | DA | Atelier de designers, prix prévenus comme montants (or en hausse) (V) |
| 9 | Stinneholm | Copenhague (Nørrebro) | https://stinneholm.com/ | https://stinneholm.com/vielsesringe/ | Non. Alliances faites main : croquis ou modèle en cire, 4 à 8 semaines (V) | Aucun (V) | DA | Atelier d'un seul créateur, prix de modèles affichés (27 275 kr l'alliance Facet 14 k) (V) |
| 10 | Guldsmed Alice | Vejle | https://guldsmedalice.dk/ | https://guldsmedalice.dk/vielsesringe (réponse 301 vers une autre adresse) | Non. Conception avec la bijoutière, boutique en ligne de pièces uniques (V) | Aucun (V) | DA | Atelier artisanal, prix des bagues de 11 500 à 36 900 kr (V). Intérêt faible pour la comparaison |

Candidats vus et non retenus ou non lus : Guldsmed Lind (Horsens, https://guldsmedlind.dk/, famille depuis 1867, atelier de trois orfèvres, catalogue sans outil, V) ; Hirsch Jewellery (Aarhus, adresse en 301, diamants bruts, non lu en navigateur) ; Müllers Guldsmedje (revendeur de grandes marques). Hors périmètre : Glamira.dk (site danois d'un groupe international, 60 jours de retour, configurateur propre, I), 77 Diamonds (déjà au dossier Europe), Valley Rose Studio (États-Unis, version danoise), Variation (Inde), Swarovski.

## Audit

Les deux premiers sites non bloquants de la liste, **Sisi Copenhagen** et **Manich Jewelry**, ont été audités (rang 1 exclu : bloqué).
- `sisi-copenhagen.md`
- `manich.md`

## Sources

- Recherches web du 15/11/2026 (Parallel Search et WebSearch), requêtes en danois : « design din egen forlovelsesring », « vielsesringe design selv online », « lab grown forlovelsesring dansk guldsmed ».
- Pages lues : sisicph.dk (collection, fiche, pages bespoke, retour, prix garanti, produits, fabrication), manich.dk (collection, fiche, recherche de pierres, retour, service de conception), christoffersenguld.dk (extrait de recherche seulement), lemele.dk, jonatandror.com, janjorgensensmykker.dk, toform.dk, stinneholm.com, guldsmedalice.dk, guldsmedlind.dk, clearcarats.dk.
- `robots.txt` : contrôlés avec l'outil du scratchpad (`robots.cjs`) avant toute ouverture.
