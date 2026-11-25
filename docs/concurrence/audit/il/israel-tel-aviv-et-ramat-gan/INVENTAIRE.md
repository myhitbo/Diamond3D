# Tel-Aviv et Ramat Gan : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Israël. Ce fichier complète `docs/concurrence/2026-11-15_israel.md` (inventaire national, 15 sites) sans le refaire. Les acteurs déjà décrits là-bas gardent leur fiche ; on n'ajoute ici que ce qui a été revérifié ou trouvé le 15/11.

Périmètre : Bourse du diamant de Ramat Gan, Tel-Aviv, centre du pays, et marques nationales qui vendent en hébreu. Sont retenus les joailliers qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers et qui offrent au moins un des éléments suivants : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Les grandes maisons internationales sont exclues.

Méthode :

- Recherche web en hébreu et en anglais (Parallel Search, puis WebSearch quand le quota de Parallel a été atteint ; Firecrawl était sans crédit).
- Pour chaque candidat : lecture du robots.txt, puis de l'accueil avec `curl` (identité par défaut de curl), à 2 secondes d'intervalle au moins par site.
- Pour les trois sites audités : Chromium headless (Playwright), identité par défaut du navigateur, sans contournement.
- Aucun formulaire n'a été rempli, aucun compte créé, aucun chat ni WhatsApp ouvert.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré (déduit d'éléments vérifiés ou d'un extrait d'index de recherche) · **S** supposé.

Écarts à signaler :

- B-Gem demande `Crawl-delay: 10`. Le robots.txt, l'accueil et `/engagement-rings` ont été lus avec curl à quelques secondes d'intervalle, avant que ce délai soit relevé. Ensuite, 11 secondes au moins ont séparé deux chargements de page sur ce site.
- Diamony interdit `/legal/shipping-returns` dans son robots.txt : cette page n'a pas été lue.

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par :

1. la qualité du configurateur et le lien entre l'image et l'objet fabriqué ;
2. la transparence du prix ;
3. les preuves de fabrication ;
4. l'offre en synthétique.

Toutes les adresses de la colonne « Page de départ » ont répondu 200 le 15/11, sauf mention contraire (V).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | DAZZ | Ramat Gan (Bourse, bâtiment Maccabi) | https://dazzdiamonds.co.il/il | https://dazzdiamonds.co.il/il/build | **Oui**, 5 étapes : forme (10), style (8 à 10 selon la forme), couleur d'or (3, 14 k), diamant (laboratoire ou naturel, 1 à 4 ct). Prix TTC à chaque clic, images précalculées par modèle, couleur et angle (V) | aucun : robots.txt `Allow: /`, pas de Cloudflare (V) | HE (₪) ; EN (https://dazzdiamonds.com, $) | Le plus proche de « l'atelier en direct ». Le prix suit chaque choix (solitaire laboratoire 1 ct : 2 650 ₪, naturel : 21 200 ₪). Commande par WhatsApp avec un récapitulatif complet, lien de partage qui restaure la bague, rendez-vous à la Bourse pré-rempli (V). **Audité** : `dazz.md` |
| 2 | Shiree Odiz | Ramat Gan (Shoham 5, 5e étage, Bourse) ; aussi New York (site .com) | https://www.shireeodiz.co.il/ | https://www.shireeodiz.co.il/pages/byor | **Oui**, 3 étapes, deux entrées (diamant d'abord ou design d'abord). Stock réel de diamants naturels GIA avec filtres, 9 ou 10 montures × 4 métaux dont le platine, personnalisation gratuite. Total TTC en direct, puis panier (V) | Cloudflare sans défi ; robots.txt Shopify standard (V). Une fenêtre d'inscription recouvre le constructeur (V) | HE (EN sur shireeodiz.com, non audité) | Le seul constructeur relevé qui vend un diamant précis : numéro de pierre, photo réelle, mesures. Panier avec 10 paiements sans intérêt et le logo Bit (V). **Audité** : `shiree-odiz.md` |
| 3 | B-Gem | Ramat Gan (bâtiment Yahalom, Jabotinsky 3) | https://b-gem.com/ | https://b-gem.com/engagement-rings | **Oui**, monture puis diamant, page « Complete » avec le total. Les vues 360° (Imajize) affichent « temporarily unavailable » (V) | `Crawl-delay: 10`, respecté (V) | EN ($ ou ₪, hors TVA) | Parcours complet jusqu'au total, 2 513 diamants filtrables (V). Mais l'argument « 360° HD » est en panne et le prix est hors taxes (« 17 % VAT… not included »). **Audité** : `b-gem.md` |
| 4 | Diamony (DiamoNY) | non indiquée : « studio numérique », rendez-vous en visio ou au téléphone (V). Avis de clients de Rishon LeZion, Tel-Aviv, Ashkelon… (V) | https://diamony.me/ | https://diamony.me/virtual-try-on · https://diamony.me/collections/rings/engagement | Non. **Essayage en réalité augmentée** dans le navigateur du téléphone, sans application ni envoi de photo, 12 tailles de pierre et carat réglable (V, page lue ; non testé : il faut une caméra) | aucun ; robots.txt : `/legal/shipping-returns` interdit, non lu (V) | HE | Seul essayage AR relevé dans le territoire. Prix « à partir de » laboratoire et naturel côte à côte (bague « עלמה » : 3 100 ₪ en laboratoire, 6 200 ₪ en naturel) et esquisse 3D avant fabrication (V). Contradiction sur le délai : 7 jours ouvrés sur l'accueil, 14 dans les conditions, avec un acompte de 500 ₪ (V) |
| 5 | XLAB Diamonds | boutiques à Petah Tikva (centre commercial Ofer « HaKanyon HaGadol », 6e étage), Raanana, Netanya (V) | https://www.xlabdiamonds.co.il/ | https://www.xlabdiamonds.co.il/product/טבעת-יהלום-בודד-סוליטר-2 | Options sur fiche : 3 couleurs d'or, carat 0,50 à 3,00, couleur, pureté, tailles israéliennes 9 à 22 (+ 200 ₪ dès 17). Prix de 2 975 à 7 565 ₪ en promotion (V). L'essayage « TRY ON » est annoncé (https://www.xlabdiamonds.co.il/try-on), mais **aucun bouton** n'est apparu sur les 3 fiches testées (V) | aucun ; le robots.txt autorise nommément ClaudeBot (V) | HE | Marque nationale de diamants de laboratoire avec boutiques, 12 paiements, note 4,9 affichée (V). L'outil d'essayage annoncé n'a pas été retrouvé |
| 6 | Joolme | Ramat Gan (Bourse) | https://www.joolme.co.il/ | https://www.joolme.co.il/collections/engagement-rings | Partiel : monture, puis pierre vendue à part (V, inventaire national) | Cloudflare sans défi (V) | HE | Chaque règle de retour est chiffrée, frais de design compris. Fiche : `2026-11-15_israel.md` |
| 7 | Love Diamonds | Ramat Gan (Jabotinsky 1, tour Yahalom) | https://lovediamonds.com/ | https://lovediamonds.com/product-category/loose-diamonds/?lang=he&builder=ring&shape=cushion | Annoncé (« Design Your Forever »), mais le lien répond **404** (revérifié le 15/11, V) | Cloudflare sans défi (V) | HE | Leçon pour JR Diamond : l'appel principal mène à une page morte |
| 8 | Levy's Jewelry | Ramat Gan (HaYarkon 17, 1er étage, Bourse) | https://levysjewelry.co.il/ | https://levysjewelry.co.il/collections/טבעות-אירוסין-יהלומי-מעבדה (cible du bouton « התחל בבחירת טבעת ») | Non : catalogue Shopify à options (V) | Cloudflare sans défi (V) | HE | Se présente comme une « usine » qui suit chaque pièce, du croquis aux « logiciels informatiques avancés » (V). Pas d'annulation après le début de la fabrication ; livraison chiffrée sur demande (V) |
| 9 | Rozenbaum | Ramat Gan (Zisman Shalom 3) | https://www.rozenbaumj.co.il/ | https://www.rozenbaumj.co.il/product-category/engagement-ring/ | Non : fourchettes de prix par modèle, par exemple « שמש », solitaire rond, de 2 900 à 9 800 ₪ (V) | Cloudflare sans défi (V) | HE | Note 5,0 sur 150 avis, affichée (V). Fabricant depuis 1974 (V) ; propose de partir d'un croquis (I, extrait d'index) |
| 10 | Inbar Jewelry | Tel-Aviv (Dizengoff 237) | https://www.inbarj.com/ | https://www.inbarj.com/ (rubrique bagues de fiançailles) | Non : catalogue et commande personnalisée (V) | aucun (V) | HE | Seul joaillier de Tel-Aviv même retenu ici. Bagues de fiançailles dès 5 000 ₪, **24 paiements**, page « processus de fabrication d'une bague » (V) |

### Statut d'audit (mise à jour du 16/11/2026)

| Acteur | Statut | Rapport |
|---|---|---|
| DAZZ, Shiree Odiz, B-Gem | audités le 15/11 (complets) | `dazz.md`, `shiree-odiz.md`, `b-gem.md` |
| Diamony | **complet** (essayage en réalité augmentée non testé : il faut une caméra ; `/legal/shipping-returns` interdite, non lue) | `diamony.md` |
| XLAB Diamonds | **partiel** : les scripts de la fiche sont dans `/wp-content/plugins/`, interdit par le robots.txt et bloqué ; prix lus dans les données de la page ; panier non vérifié | `xlab-diamonds.md` |
| Joolme | **complet jusqu'au récapitulatif** : constructeur en 4 étapes (`stage=1` à `4`) ; ajout au panier non réalisé (`/cart/add.js` interdit) | `joolme.md` |
| Levy's Jewelry | **partiel** : fiche et tiroir de choix de pierre parcourus ; ajout au panier non réalisé (`/cart/add.js` interdit) | `levys-jewelry.md` |
| Rozenbaum | **complet jusqu'au panier** (volet et page « סל קניות ») | `rozenbaum.md` |
| Love Diamonds | **bloqué** : le robots.txt du 16/11 interdit `ClaudeBot` (`Disallow: /`) ; non audité | `love-diamonds.md` |
| Inbar Jewelry | **complet** pour ce qu'offre le site (catalogue sans prix ni panier) | `inbar-jewelry.md` |

### Terme hébreu du diamant synthétique

- **« יהלום מעבדה » / « יהלומי מעבדה »** (diamant de laboratoire), sur tous les sites lus qui en vendent : DAZZ, Diamony, XLAB, Levy's, Rozenbaum, menus de Shiree Odiz (V).
- Love Diamonds ajoute **« מתורבתים »** (cultivés) (V, inventaire national).
- B-Gem écrit en anglais « Laboratory grown Diamond » (V).
- **« סינתטי » n'apparaît dans aucune page lue** (V).

### Repérés mais écartés

| Acteur | Raison |
|---|---|
| L'Émeraude Paris (Netanya) | hors territoire ; fiche nationale |
| Alpha Gold | a quitté la Bourse pour Haïfa (« HaDshanim 3, Haïfa ») (V) |
| D'oro (Tel-Aviv) | configurateur 3D, mais boutique de démonstration qui n'exécute aucune commande (V, inventaire national) |
| Royalty (royalty.me) | **bloqué** : 403 Cloudflare sur le robots.txt et l'accueil, pas de nouvel essai (V) |
| iLab Diamonds (HaYarkon 9, Bourse) | script `challenge-platform` de Cloudflare servi (V) ; défi possible, non audité (I) |
| Daskalo | même script (V, inventaire national) |
| Gispan, Green Diamonds, Yahalomei HaBorsa, Diamond House, Alexis, Stav, Louisa | catalogue ou formulaire de sur-mesure, sans configurateur ; voir l'inventaire national |
| Tiarra, DiamondF, Daniel Matat, Dina Jewelry, MJM, Collier, THJ | catalogue seul, prix affichés, sans configurateur ni visuel 3D ou 360° relevé (V, accueils lus) |

## Sources (lues le 15/11/2026)

- Inventaire national : `docs/concurrence/2026-11-15_israel.md`
- DAZZ : https://dazzdiamonds.co.il/robots.txt · https://dazzdiamonds.co.il/il · https://dazzdiamonds.co.il/il/build · https://dazzdiamonds.co.il/il/prices · https://dazzdiamonds.co.il/il/terms · https://dazzdiamonds.co.il/il/faq
- Shiree Odiz : https://www.shireeodiz.co.il/robots.txt · https://www.shireeodiz.co.il/ · https://www.shireeodiz.co.il/pages/byor · https://www.shireeodiz.co.il/pages/החזרות · https://www.shireeodiz.co.il/cart
- B-Gem : https://b-gem.com/robots.txt · https://b-gem.com/ · https://b-gem.com/engagement-rings · https://b-gem.com/item/r004-1 · https://b-gem.com/diamonds · https://b-gem.com/faq
- Diamony : https://diamony.me/robots.txt · https://diamony.me/ · https://diamony.me/virtual-try-on · https://diamony.me/collections/rings/engagement · https://diamony.me/contact · https://diamony.me/page/about · https://diamony.me/legal/site-policy · https://diamony.me/sitemap.xml
- XLAB : https://www.xlabdiamonds.co.il/robots.txt · https://www.xlabdiamonds.co.il/ · https://www.xlabdiamonds.co.il/try-on · https://www.xlabdiamonds.co.il/product-category/טבעות · https://www.xlabdiamonds.co.il/product/טבעת-יהלום-בודד-סוליטר-2 · https://www.xlabdiamonds.co.il/product/טבעת-אובל-אנגל · https://www.xlabdiamonds.co.il/product/טבעת-יהלום-יחיד-סוליטר-אובל
- Joolme : https://www.joolme.co.il/robots.txt · https://www.joolme.co.il/ · https://www.joolme.co.il/collections/engagement-rings
- Love Diamonds : https://lovediamonds.com/ · https://lovediamonds.com/product-category/loose-diamonds/?lang=he&builder=ring&shape=cushion (404)
- Levy's : https://levysjewelry.co.il/robots.txt · https://levysjewelry.co.il/ · https://levysjewelry.co.il/collections/טבעות-אירוסין-יהלומי-מעבדה
- Rozenbaum : https://www.rozenbaumj.co.il/robots.txt · https://www.rozenbaumj.co.il/ · https://www.rozenbaumj.co.il/product-category/engagement-ring/
- Inbar : https://www.inbarj.com/robots.txt · https://www.inbarj.com/
- Écartés : https://alpha-gold.co.il/ · https://www.royalty.me/ (403) · https://ilabdiamonds.com/ · https://tiarra.co.il/ · https://diamondf.co.il/ · https://www.daniel-matat.co.il/ · https://dinajewelryshop.com/ · https://mjm.co.il/ · https://www.collier.co.il/ · https://thj.co.il/ (extrait d'index seulement)
