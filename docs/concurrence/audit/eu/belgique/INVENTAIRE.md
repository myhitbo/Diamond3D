# Belgique : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, dont un seul belge : Beldiamond) sans le refaire. La fiche de Beldiamond y reste valable ; on ajoute ici ce qui a été trouvé ou revérifié le 15/11.

Périmètre : joailliers établis en Belgique qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Les grandes maisons internationales, les grands magasins et les places de marché sont exclus.

Méthode :

- Recherche web en néerlandais, en français et en anglais (Parallel Search), avec des requêtes génériques.
- Pour chaque candidat : lecture du robots.txt avec `curl` (identité par défaut), puis d'une page avec Chromium headless (Playwright, identité par défaut, sans contournement), à 2,5 secondes d'intervalle au moins par site.
- Aucun formulaire rempli, aucun compte créé, aucun chat ni WhatsApp ouvert.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré (déduit d'éléments vérifiés, d'un extrait d'index de recherche ou d'une copie en cache) · **S** supposé.

Écart à signaler : sur Beldiamond, la liste de tri a chargé une adresse en `?sort_by=`, que le robots.txt interdit aux robots. Une seule page, non répété.

## Ce qu'il faut retenir

- **Presque tout est à Anvers** : les dix acteurs retenus y ont leur atelier ou leur boutique (V). Aucun joaillier de Bruxelles, de Gand ou de Wallonie avec un configurateur en ligne n'a été trouvé (I).
- **Aucun visuel 3D ni 360° de bague** n'a été vu sur les sites lisibles : photos, rendus fixes par métal et vidéos courtes (V). Les vidéos 360° de diamants annoncées par Grand Diamonds n'ont pas pu être vues (site bloqué).
- **Les deux sites les plus aboutis bloquent les robots** : BAUNAT (Cloudflare) et Grand Diamonds (« bot-denied ») (V).
- **Deux écoles** : le naturel seul (BAUNAT, Slaets, Geretti) et le synthétique mis en avant (Beldiamond, Juna Fae, Precious Jewels, Orogem, Diamond World) (V).
- **Beldiamond vient chercher le client français** : bandeau « Beldiamond à Paris, les 21 et 22 novembre », nuit d'hôtel offerte aux clients étrangers, rendez-vous en visio (V).

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : la proximité du modèle (atelier, fabrication à la commande, vente en français) ; la qualité du configurateur et le lien entre l'image et l'objet fabriqué ; la transparence du prix ; les preuves de fabrication ; l'offre en synthétique.

Toutes les adresses de la colonne « Page de départ » ont répondu 200 dans Chromium le 15/11, sauf mention contraire (V).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | BAUNAT | Anvers (ateliers à Anvers et à Paris, showrooms) (I) | https://www.baunat.com/ | https://www.baunat.com/fr/bague-fiancaille (catalogue) · sur mesure : https://www.baunat.com/fr/bague-de-fiancailles-sur-mesure | Non. Catalogue de 154 bagues à filtres (style, serti, alliage), recherche par image, questionnaire, sur mesure sur devis avec modèle 3D en CAO après la commande (I, extraits d'index) | **Bloque les robots** : 403 Cloudflare « Sorry, you have been blocked » dans Chromium (V). robots.txt lisible : 4 528 lignes `Disallow`, et une ligne `Content-Signal: search=yes, ai-input=yes, ai-train=yes` (V) | FR, EN, NL au moins ; sélecteur de TVA de 17 à 27 % et « hors UE » (I) | Le plus gros vendeur en ligne du pays. Diamants naturels seulement, prix « à partir de » TTC (solitaire 0,50 ct or jaune : 3 049,20 €), retour 30 jours, garantie 20 ans, 4 050 avis Trustpilot affichés (I). **Non audité** : bloqué |
| 2 | Beldiamond | Anvers ; showrooms à Anvers et à Bruxelles | https://www.beldiamond.com/fr | https://www.beldiamond.com/fr/collections/lab-grown-diamond-engagement-rings/products/classic-solitaire-round-lab-grown-diamond-engagement-ring (fiche à options) | Non. Fiche à options : 4 métaux, diamant (7 poids en synthétique, 22 choix en naturel), taille, gravure offerte. Prix et date de livraison recalculés à chaque choix (V) | Aucun : Shopify et Cloudflare sans défi (V) | FR, EN, NL ; 22 devises, sans le shekel (V) | Le plus proche de JR Diamond : place diamantaire, atelier, naturel et synthétique côte à côte, vente en français vers la France. Date de livraison par variante jusque dans le panier (V). **Audité** : `beldiamond.md` |
| 3 | Slaets | Anvers (De Keyserlei 46-48, trois boutiques) | https://shop.slaets.eu/ | https://shop.slaets.eu/verlovingsringen/ | **Oui** : 5 collections × 4 modèles, 3 ors, diamant par poids (5), couleur (5) et pureté (6), taille, gravure avec aperçu de la police. **Le prix est calculé mais masqué, et le bouton de commande est retiré de la page** (V) | Aucun ; robots.txt : `/checkout/` interdit (V) | NL seulement (V) | Seul vrai configurateur belge lisible. Sa mécanique (monture à prix fixe + diamant selon trois critères) est celle que vise JR Diamond, et son état actuel (prix non affiché) aussi. **Audité** : `slaets.md` |
| 4 | Grand Diamonds | Anvers | https://granddiamonds.com/ | https://granddiamonds.com/diamond-engagement-rings/start-setting | **Oui** (I, extraits d'index) : 3 étapes (monture, diamant, récapitulatif), entrée par la monture, par un diamant naturel ou par un diamant « labgrown », « 360 degree HD videos » des diamants | **Bloque les robots** : 403 `{"error":"forbidden","code":"bot-denied"}` (V) | EN, NL ; sélecteur de TVA (I) | Son blog promet « photos and videos as the ring progresses » et un modèle en cire avant fabrication (I). C'est la promesse de JR Diamond, sans preuve visible. **Non audité** : bloqué |
| 5 | Precious Jewels | Anvers (Vestingstraat 46) | https://preciousjewels.be/ | https://preciousjewels.be/pages/build-your-ring · diamants : https://preciousjewels.be/pages/lab-diamonds | **Oui** : 3 étapes (monture, diamant, bague). 626 937 diamants « lab grown » filtrables, bouton « Set in a ring », montures limitées à celles qui conviennent au diamant choisi (30 pour un 0,30 ct émeraude), prix de monture à part (V) | Aucun : Shopify (V) | EN (V) | Constructeur complet et qui fonctionne. Prix d'entrée bas grâce à l'or 9 k (fiche à 1 160 €), bandeau « 20 % off » (V). Stock de pierres virtuel : l'inverse de « ce que vous voyez existe » (I). Premier candidat pour un audit suivant |
| 6 | Juna Fae | Anvers (Groen Kwartier, studio sur rendez-vous) | https://junafae.com/ | https://junafae.com/products/primrose-ring | Non. Fiche à options : 3 ors, 0,50 à 3,00 ct, qualité du diamant, tailles 44 à 65, « Personalize » ; 1 800 € (V) | Aucun : Shopify (V) | EN ; accueil en EN, NL, FR (V) | Synthétique seulement. **Simulation vidéo 3D montrée avant toute fabrication**, cire imprimée sur demande, prix lié au cours de l'or du jour, bagues non retournables et dit clairement, acompte de 50 %, service « Relove » de transformation de bijoux anciens (I, copie en cache du 4/11) |
| 7 | Orogem Jewelers | Anvers (Vestingstraat 38) | https://juwelenorogem.be/ | https://juwelenorogem.be/product-category/verlovingsring/ | Non. Catalogue de 466 bagues (I) avec filtres (or, forme, couleur, pureté, poids, prix) et étiquettes « klaar om te verzenden » et « op bestelling » (V) | Aucun (V) | NL, EN, FR, IT (V) | « Labgrown » dès 965 € TTC (V), naturel dès 985 € (I). Dit que ce qui est « en stock » est physiquement à l'atelier, avec son rapport (I). Page française qui explique le vocabulaire du synthétique (I) |
| 8 | Belgium Diamonds (aussi MyAntwerpDiamonds, même téléphone) | Anvers (Schupstraat 9/11) | https://belgiumdiamonds.net/ | https://belgiumdiamonds.net/18k-gold-platinum-engagement-settings/ · diamants : https://belgiumdiamonds.net/certified-diamond-search/ | Partiel : monture (468 à 912 €), puis recherche de diamants à filtres (forme, poids, couleur, pureté, taille, poli, symétrie, fluorescence, laboratoire) (V) | Aucun (V) | EN, FR, IT, DE (V) | Prix **hors TVA**, avec un « retail price » plus élevé en regard (0,40 ct J VVS1 : 615 € contre 1 475 €) (V). Galeries vidéo de l'atelier (V, liens) |
| 9 | Diamond World Antwerp | Anvers (De Keyserlei 40) | https://www.diamond-world.be/ | https://www.diamond-world.be/collections/engagement-rings | Annoncé : « Build your ring » et « Start ring builder ». Le lien https://www.diamond-world.be/apps/ringbuilder/settings/ répond **404** (V) | Aucun : Shopify (V) | EN (V) | Leçon : l'appel principal mène à une page morte. Bagues en « lab grown » dès 1 750 € (V) ; prix TTC, commande par téléphone ou WhatsApp (I) |
| 10 | De Bruyloft | Anvers (Deurne) | https://www.debruyloft.be/ | https://www.debruyloft.be/nl/producten/verlovingsringen | Non en ligne : catalogue et prise de rendez-vous (V). Le configurateur d'alliances acredo est utilisé en boutique (I, FAQ du site en extrait d'index) | Aucun (V) | NL (V) | Enseigne d'alliances « sinds 1895 », note Google 5,0 sur plus de 550 avis affichée (V). Prix en ligne non vérifiés |

### Sites vus et écartés

- **Zizov Diamonds** (Anvers, https://zizovdiamonds.com/) : « Restricted Access… you cannot visit our store from your current location » (V). Blocage géographique, non contourné.
- **MyDiamondRing** (https://mydiamondring.com/) : constructeur de bague, mais maison autrichienne (« About Schullin ») (V). Hors territoire.
- **Celinni** (France), **Glamira** (Allemagne), **Hauthentic** (Suisse) : présents en Belgique, étrangers (I).
- **Tollet** (Bruxelles, https://www.tollet.com/) : enseigne nationale, mais catalogue à prix « indicatifs », sans vente en ligne visible (V).
- **stAen, Kubini, Geretti, Di Amore, Antwerp Or, Antwerp Ateliers, Berete, Poupette in Antwerp** : boutiques Shopify ou sur devis, sans configurateur (V pour l'accueil de stAen, Geretti, Di Amore et Antwerp Or ; I pour les autres). Antwerp Ateliers annonce un devis en quatre lignes (métal, pierre, façon, livraison) (I).

## Terme employé pour le diamant synthétique

| Langue | Termes relevés | Où |
|---|---|---|
| Néerlandais | « labgrown diamant », « lab grown diamanten », « lab-grown diamant » | Orogem, Beldiamond NL, Kubini (V, I) |
| Néerlandais | « synthetisch », « artificieel », par opposition au naturel | Slaets : « niet synthetisch, lab-grown of treated (HPHT) » (V) |
| Français | « diamant synthétique », « diamant de laboratoire » et « diamant cultivé en laboratoire » sur le même site | Beldiamond FR (V) |
| Français | « diamants de laboratoire », adresse en « diamants-cultives-en-laboratoire » ; « diamant de synthèse » présenté comme le terme technique dont « la profession s'éloigne » | Orogem FR (I) |
| Anglais | « lab-grown », « lab grown », « labgrown » | Juna Fae, Precious Jewels, Diamond World, Grand Diamonds (V, I) |

Règles belges :

- **Arrêté royal du 20/11/2019** (surveillance du secteur du diamant), art. 5 § 2 : le commerçant en diamants décrit un diamant synthétique par « synthétique », « créé en laboratoire » ou « fabriqué en laboratoire ». « Toute autre description ou abréviation est interdite. » « Diamant » seul désigne toujours un diamant naturel (V, copie du texte sur refli.be). Le texte vise les commerçants en diamants enregistrés ; son application à un site de détail n'a pas été vérifiée (S).
- **Arrêté royal du 26/1/2023**, en vigueur depuis le 1/5/2023 : avant la vente, le bijoutier remet au consommateur un document qui dit si la pierre est naturelle ou synthétique, traitée ou non, et son poids, « sans abréviations » (V, SPF Économie). D'après l'AWDC, cette obligation ne vaut que pour la vente en magasin (V).
- **12/8/2026** : l'AWDC demande que cette obligation soit étendue aux boutiques en ligne et à la publicité. Le ministre de l'Économie veut examiner si « diamant » peut être réservé au naturel, le synthétique n'étant vendu que sous le mot « synthétique » (V, communiqué de l'AWDC).
- **Guide de terminologie de l'AWDC** : « synthetic », « laboratory-grown » ou « laboratory-created » ; pas d'abréviation comme « lab-grown », pas de « cultured » ni « cultivated » (V).

Conséquence pour JR Diamond : « synthétique » est le seul terme admis à la fois en France et en Belgique (I). L'anglais « lab-grown » du configurateur est une abréviation que l'AWDC déconseille et que l'arrêté de 2019 interdit aux commerçants en diamants (I).

## Audits

| Site | Statut | Rapport |
|---|---|---|
| Beldiamond | complet jusqu'au panier | `beldiamond.md` |
| Slaets | partiel : le parcours s'arrête avant le panier, faute de bouton de commande | `slaets.md` |

BAUNAT et Grand Diamonds, mieux classés ou voisins, bloquent les robots : ils n'ont pas été audités.

## Sources (lues le 15/11/2026)

- Adresses du tableau : toutes lues dans Chromium, sauf BAUNAT et Grand Diamonds (403).
- BAUNAT, extraits d'index : https://www.baunat.com/en/engagement-rings · https://www.baunat.com/en/tailor-made-engagement-ring · https://www.baunat.com/en/buy-engagement-ring-jeweller · https://baunat.com/ · https://www.baunat.com/robots.txt
- Grand Diamonds, extraits d'index : https://granddiamonds.com/diamond-engagement-rings/start-setting · https://granddiamonds.com/blog/design-your-own-engagement-ring · https://granddiamonds.com/robots.txt
- Precious Jewels : https://preciousjewels.be/collections/engagement-rings · https://preciousjewels.be/products/er-79-princess-cut-diamond-4-prongs-scallop-setting-engagement-ring
- Juna Fae : https://junafae.com/pages/faq (copie en cache du 4/11) · https://junafae.com/collections/engagement
- Orogem : https://juwelenorogem.be/product-category/juwelen-van-labgrown-diamanten/labgrown-diamanten-verlovingsringen · https://juwelenorogem.be/fr/product-category/bijoux-en-diamants-cultives-en-laboratoire/bagues-de-fiancailles-en-diamants-de-laboratoire
- Diamond World : https://www.diamond-world.be/pages/custom-design
- De Bruyloft : https://www.debruyloft.be/nl/trouwringen-antwerpen
- Écartés : https://mydiamondring.com/ · https://www.tollet.com/ · https://www.staen.be/ · https://geretti.be/ · https://diamore.be/ · https://www.antwerpor.com/ · https://antwerpateliers.com/bespoke/engagement-rings · https://kubini.be/lab-grown-diamanten · https://www.celinni.com/fr/be · https://www.glamira.be/fr/bagues-fiancailles/lab-grown-diamond
- Règles belges : https://refli.be/fr/lex/2019015617 · https://economie.fgov.be/fr/themes/entreprises/secteurs-specifiques/diamant/obligation-dinformation · https://www.awdc.be/news/press/antwerp-diamond-industry-body-warns-consumers-about-deception-when-buying-diamond · https://www.awdc.be/diamond-terminology-guideline
- Captures et journaux, hors dépôt : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/belgique/`, `…/eu/beldiamond/`, `…/eu/slaets/`.
