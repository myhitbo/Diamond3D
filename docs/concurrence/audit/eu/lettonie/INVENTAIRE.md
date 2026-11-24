# Lettonie : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 (étude de concurrence JR Diamond, marché Europe ; contrôles réalisés le 24/11/2026). Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun letton) sans le refaire.
Marques : **V** vérifié (page lue, extrait de page lu par l'outil de recherche, ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.
Méthode : recherche web en letton, en russe et en anglais (requêtes génériques), `robots.txt` lu avec `robots.cjs` avant chaque adresse ouverte dans le navigateur, Chromium (Playwright, identité par défaut), aucun formulaire, compte, chat ni paiement.

## Ce qu'il faut retenir

- **Un seul vrai constructeur de bague en Lettonie : INDIVI** (V, audité). Parcours en 3 étapes (monture, diamant, finalisation) avec choix du métal, de la taille et d'un diamant parmi 306 509 pierres naturelles, 245 966 synthétiques blanches, des pierres de couleur et des pierres précieuses, filtrées par forme, carat, couleur, pureté, taille, prix et certificat (V). Le prix de la monture et celui de la pierre s'additionnent à l'écran (V : 869 € + 213 € = 1 082 €).
- **Aucun visuel 3D ou 360° de bague, aucun configurateur d'alliance** n'a été trouvé chez les neuf autres sites (V pour les sites listés ; I pour le pays : une dizaine de requêtes en letton, russe et anglais n'ont ramené que des catalogues, des sites d'atelier à contacter par téléphone et des acteurs étrangers).
- **Juvex** (Riga) est l'archétype du petit joaillier-vendeur de pierres : fiches avec poids, pureté, couleur, prix barré et prix soldé, commande par WhatsApp, certificats GIA, HRD et IGI (V, audité). Pas de choix en ligne : « à la demande du client, tous les paramètres peuvent changer ».
- **Terme pour le diamant synthétique** (V) : « **laboratorijā audzēts dimants** » (littéralement « diamant cultivé en laboratoire » ; Glamira.lv, extrait de recherche), « **Lab. Balti** » / « Lab. Krāsaini » (diamants synthétiques blancs / de couleur, onglets d'INDIVI), « laboratorijās briljanti » (briljants.lv). « Sintētisks » est employé pour la moissanite (« sintētiskiem moisainītiem », briljants.lv) mais pas relevé pour le diamant. La Lettonie étant dans l'Union européenne sans règle de nom relevée ici, les termes sont libres (I).
- Prix en euros, TVA comprise (I : prix affichés sans mention hors taxe ; Latvia applique 21 % de TVA, non vérifié ici).
- **Ordre des marchés** : la Lettonie est un petit marché (S) ; elle importe surtout comme exemple de **constructeur diamant par diamant** (INDIVI) avec un stock partagé énorme, ce que JR Diamond ne fait pas (stock de pierres de la Bourse de Ramat Gan).

## Classement

Mesure de l'intérêt, dans l'ordre : options en ligne qui changent prix et image ; lien entre prix et carat ou origine ; naturel et synthétique côte à côte ; preuves de fabrication et sur mesure ; proximité du modèle « atelier ». Adresses : réponse 200 (curl ou Chromium) le 24/11 sauf mention.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | INDIVI (marque de la société UAB « Ankoras », filiale lettone ; salons à Vilnius, Riga, Madrid) | Riga (salon Panorama Plaza, Lielirbes iela 17A) | https://indivi.lv/lv/ (200, PrestaShop) | https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali (liste de 159 montures) puis fiche, par ex. https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali/amazonia-saderinsans-gredzens-ar-briljantiem.html | **Oui** : 3 étapes, métal 7 choix, taille, pierre filtrée parmi 5 types | Aucun (robots.txt n'interdit que le panier, les comptes et la recherche) | LV (sélecteur de langue présent, contenu non testé) | Le plus proche d'un configurateur de la liste ; naturel et synthétique côte à côte ; 306 509 diamants ; prix additionné en direct (V) |
| 2 | Juvex (et briljants.lv, même propriétaire) | Riga (Pildas iela 16b) | https://juvex.lv/ (200, Shopify) | https://juvex.lv/collections/engagement-rings-with-diamonds (25 produits) | Non : fiches à poids de pierre fixe, commande par WhatsApp | Aucun (`Allow: /`) ; le fichier `agents.md` demande aux agents de ne pas scripter le panier : panier non actionné | LV, RU (EN dans les fiches) | Prix barrés et soldés, prix soldés 26 à 39 % sous le prix barré (calculé sur 4 fiches), livraison 1 à 3 jours, certificats GIA, HRD, IGI ; modèle « bijoutier qui fabrique pour vous » (V) |
| 3 | Gem Elements | Riga (Alberta iela 13) | http://www.gemelements.com/ (200) | http://www.gemelements.com/ (« Katalogs un cenas ») | Non : catalogue, devis, « possible en naturel ou Lab Grown » | Aucun | LV, RU, EN ; EUR, GBP, USD | Atelier avec production à Riga et en Belgique, GIA, 4,9 Google (extrait), visite virtuelle ; diamants naturels et synthétiques sur demande (V extrait ; non audité) |
| 4 | Fine Cast Gems | Riga (Merķeļa iela 5) | https://finecastgems.com/ (200) | https://finecastgems.com/ | Non : catalogue de diamants (« Dimantu katalogs ») et fabrication sur commande | Aucun (`Allow: /`) | LV, EN | Atelier depuis 2004, consultation gemmologue, diamants certifiés GIA/IGI, livraison mondiale (V extrait ; non audité) |
| 5 | Goldinga | Riga | https://www.goldinga.lv/gredzeni/saderinasanas-gredzeni/ (200) | idem | Non : catalogue, zircons et diamants, prix barré | Aucun | LV, RU | Boutique en ligne généraliste, prix barrés, expédition 2 à 3 jours (V extrait) |
| 6 | MV Fine Jewellery (Mārtiņš Veinbergs) | Riga (S) | https://mvjewellery.com/ (200) | https://mvjewellery.com/ | Non : sur mesure par formulaire ou téléphone | Aucun | LV | Bijoutier formé au GIA à Londres, sur mesure, fancy colour (V extrait) |
| 7 | Laiks | Riga | https://laiksjewellery.lv/lv/catalog/juvelierizstradajumi/laulibas-gredzeni (200) | idem | Non : alliances Aster, prix soldé de 40 %, tailles listées | Aucun | LV, EN (S) | Alliances avec diamants, 14 jours de retour, garantie 2 ans (V extrait) |
| 8 | Jahonts | Riga | https://jahonts.com/latvia/lv/katalogs/visi-produkti/zelts/laulibas-gredzeni (200) | idem | Non : filtres de taille, matériau, pierre ; 46 alliances | Aucun | LV, RU, EN (S) | Filtre par taille de doigt et par pierre sur les alliances (V extrait) |
| 9 | Sudrabanams (« Sudraba nams ») | Riga (Matīsa iela 52A) | https://www.sudrabanams.lv/lv/12-zelta-laulibu-gredzeni (200) | idem | Non : 71 alliances en or avec filtres prix et poids | Aucun | LV | Fabrication en atelier (« Rotkaļu darbnīca »), filtres prix et poids (V extrait) |
| 10 | Glamira.lv (marque allemande, version lettone) | — (siège étranger) | https://www.glamira.lv/saderinasanas-gredzeni/ (200 en curl ; robots.txt illisible : HTTP 403) | https://www.glamira.lv/saderinasanas-gredzeni/lab-grown-diamond | Oui (configurateur pierre, métal, gravure) mais acteur international, hors périmètre national | **Bloqué** (robots.txt 403, page non ouverte au navigateur) | LV, RU, etc. | Cité pour le terme « Laboratorijā audzēts dimants » et ses conditions (60 jours de retour, mise à taille offerte) ; extrait de recherche seulement |

Non retenus : Kove Jewelry (kove.jewelry, société tchèque, extrait de recherche) ; Gredzenti (gredzentins.lv, répondu 200, sur mesure d'alliances, non étudié faute de temps).

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots : **INDIVI** (`indivi.md`) et **Juvex** (`juvex.md`). Fichiers : `indivi.md`, `juvex.md`.

## Sources

- Recherche : requêtes en letton (« saderināšanās gredzeni », « laulību gredzeni », « laboratorijā audzēts dimants »), russe et anglais, via l'outil de recherche web ; extraits lus pour les rangs 3 à 10.
- robots.txt vérifiés avec l'outil du dépôt : indivi.lv, juvex.lv, briljants.lv, finecastgems.com, gemelements.com, goldinga.lv, mvjewellery.com, laiksjewellery.lv, jahonts.com, sudrabanams.lv (autorisés) ; glamira.lv (inconnu, 403).
- Pages lues : https://indivi.lv/lv/precu-piegade-un-atgriesana ; https://indivi.lv/lv/indivi-garantija ; https://indivi.lv/lv/apmaksa ; https://indivi.lv/lv/individuala-razosana ; https://juvex.lv/policies/refund-policy ; https://juvex.lv/pages/contacts ; https://juvex.lv/collections/diamonds ; https://www.glamira.lv/saderinasanas-gredzeni/lab-grown-diamond (extrait) ; https://www.briljants.lv/ (extrait).
