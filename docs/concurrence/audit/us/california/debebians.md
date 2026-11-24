# Audit : deBebians

- **Site** : deBebians (Los Angeles ; bureau 611 Wilshire Blvd, Suite 913 ; « not open to the public, no showroom »)
- **Adresse** : https://debebians.com (départ : https://debebians.com/collections/engagement-rings)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366 x 900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **partiel** (parcours « monture » jusqu'au panier ; recherche de pierre lue sans lancer de requête ; visionneuse 3D absente des pages testées ; **écarts à robots.txt, voir « Limites »**)
- Marquage : V = vérifié (page lue ou contrôle actionné), I = inféré, S = supposé.

## Parcours

Modèle « monture + pierre séparée » en 3 étapes annoncées sur la fiche : « 1 Choose a Setting, 2 Choose a Center Stone, 3 Complete Purchase » (V).

| Étape | Options |
|---|---|
| Liste `/collections/engagement-rings` | filtres Center Stone Shape, Metal Type, Setting Style ; tri ; 4 pages ; prix « From » (V) |
| Fiche monture (exemple SE-26 « Classic Solitaire », https://debebians.com/products/classic-solitaire-engagement-ring-setting-with-6-prongs) | forme de pierre (10), métal (8), taille de doigt, centre (deBebians ou le sien), griffes, gravure intérieure (V) |
| Choix de la pierre `/pages/complete-your-engagement-ring` | 4 voies : diamant synthétique, diamant naturel, moissanite Kori ou Harro, gemme synthétique de couleur (V) |
| Recherche de diamant (application VDB) | forme, carat, couleur, pureté, taille, polissage, symétrie, budget, laboratoire, fancy, filtres avancés (V : champs lus ; recherche non lancée) |
| Panier `/cart` | ligne, quantité, code promo, sous-total, « Check out » (V) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Center Stone Shape (Round, Cushion, Oval, Emerald, Pear, Radiant, Marquise, Princess, Asscher, Heart) | cases | l'adresse reçoit `filter.v.option.center+stone+shape=Oval` (V) ; nombre de modèles non relevé de façon fiable | n/a | fonctionne (adresse) |
| Filtre Metal Type (14 k blanc, jaune, rose, « Super White », 18 k blanc, jaune, rose, platine 950) | cases | ajoute `filter.v.option.metal+type=Platinum+950` (V) | n/a | fonctionne (adresse) |
| Filtre Setting Style | cases + comptes | Diamond Accented 62, Five Stone 1, Halo 4, Hidden Halo 20, Solitaire 42, Three Stone 5 (V) | n/a | comptes lus ; la case « Halo » n'a pas changé d'état dans notre essai |
| Tri (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, décroissant, date) | liste | change l'ordre (prix croissant en tête : 1 022 $ ; décroissant : 3 142 $) (V) | n/a | fonctionne |
| Pagination 1 à 4, Next page | liens | `?page=2` etc. (V) | n/a | non suivi |
| Center Stone Shape (fiche) | radio | 10 formes ; ne change ni le prix ni l'image dans notre essai (V : 1 073 $ et même fichier d'image) | 0 | fonctionne ; effet visuel nul |
| Metal Type (fiche) | radio | 14 k blanc, jaune, rose : 1 073 $ ; 14 k « Super White » : 1 273 $ ; 18 k jaune : 1 516 $ ; platine 950 : 1 401 $ (V) | voir texte | fonctionne ; image inchangée (même fichier) |
| Finger Size | liste | 3 à 9 par quarts (25 valeurs), « Call for other sizes » (V) | 0 | fonctionne |
| Center Stone | liste | « Diamond or gemstone from deBebians (sold separately) » ou « I have my own stone » (V) | 0 | fonctionne |
| Center Stone Prong Style | liste | « Standard Bubble / Rounded » ou « Claw / Pointed » (V) | +100 $ pour claw | fonctionne (affichage) |
| Inside Band Engraving | liste | aucune, « Script » ou « Block Font » (V) | +40 $ | fonctionne (affichage) |
| Galerie : Previous, Next, Open media in modal, Load image n | boutons | présents (V) ; 5 images de galerie visibles | n/a | non actionnés un à un |
| Add to cart | bouton | ligne ajoutée (V) | 1 073 $ | fonctionne |
| Page panier : Quantity −/+, Coupon code Apply, Check out | boutons | présents (V) | n/a | non actionnés (paiement hors périmètre) |
| Select Stone → | lien | `/pages/complete-your-engagement-ring` (lue) (V) | n/a | fonctionne |
| Choose a Lab Grown Diamond | lien | `/apps/vdb-app/search-filters?diamondSearchType=Lab_grown_Diamond&structure=new` (lue) (V) | n/a | fonctionne ; recherche non lancée |
| Choose a Natural Diamond | lien | `/apps/vdb-app/search-filters?structure=new` (non ouvert) | n/a | non testé : même application |
| Choose Moissanite / Lab Grown Gemstone | liens | `/collections/loose-moissanite`, `/collections/loose-lab-grown-gemstones` (non ouverts) | n/a | non testés |
| Recherche (champ q) | champ | présent (V) | n/a | non testé |
| 213-627-1300, sales@debebians.com | liens | `tel:`, `mailto:` (V) | n/a | non utilisés |
| Custom design, Wholesale | liens | `/pages/custom-made-engagement-rings` (lue), `/pages/wholesale-inquiries` | n/a | seule la première lue |
| Newsletter Subscribe | formulaire | présent | n/a | non rempli (règle) |
| Accept All / Decline Non-Essential Cookies | boutons | bandeau fermé avec Accept All (V) | n/a | fonctionne ; sans clic, le bandeau empêchait d'ajouter au panier dans notre premier essai |
| Partager, enregistrer, comparer, AR, essayage virtuel, chat, 360°, 3D | n/a | absents des contrôles listés (V : 93 contrôles sur la fiche, 149 sur la liste) | n/a | absent |

## Options disponibles

- **Métaux** : 14 k blanc, jaune, rose, « Super White » (recommandé, sans rhodium) ; 18 k blanc, jaune, rose ; platine 950 (V).
- **Formes de pierre** : rond, coussin, ovale, émeraude, asscher, poire, marquise, cœur, princesse, radiant (V).
- **Styles de monture** : accentué de diamants, cinq pierres, halo, halo caché, solitaire, trois pierres (V). Collections supplémentaires : antique, halo, etc. (V : liens de pied de page).
- **Griffes** : standard arrondies, claw pointues (+100 $) (V).
- **Gravure** : intérieure, script ou block (+40 $) ; pas de gravure en hébreu mentionnée (V : absence).
- **Taille** : 3 à 9 par quarts, autres tailles sur appel (V).
- **Pierres** : diamants synthétiques et naturels (recherche), moissanite, gemmes synthétiques de couleur (V).
- **Catalogue** : plus de 90 modèles de montures (comptes de styles cumulés, un modèle peut figurer dans plusieurs) ; prix « From » de 1 022 $ à 3 142 $ la monture seule (V).

## Prix, délais, retours, garanties

- **Prix** (V) : la monture seule s'affiche avec son prix du métal choisi ; la pierre est vendue à part. Le panier montre sous-total ; « Taxes and shipping calculated at checkout » ; « You are eligible for free shipping ». Pas de décomposition matière / façon.
- **Exemple** : SE-26, 14 k jaune, rond = 1 073 $ au panier (V : ligne panier).
- **Délai** (V) : « Ready to ship in 15 to 20 business days » ; dates estimées affichées (expédition entre le 14 et le 18 décembre, livraison offerte aux États-Unis entre le 18 et le 25 décembre) ; bandeau « Guaranteed Delivery by Christmas* ». Sur mesure : devis sous 1 à 2 jours ouvrés, 2 à 4 semaines de production après approbation CAO.
- **Livraison** : offerte aux États-Unis (V).
- **Retours** (V, https://debebians.com/pages/returns-exchanges) : 30 jours après livraison pour un article non gravé et non sur mesure, non porté ; frais de remise en stock 20 $ (moins de 1 000 $) ou 50 $ (plus de 1 000 $) ; retour à la charge du client ; les articles gravés ou sur mesure ne sont pas repris. Une gravure intérieure retire donc le droit au retour.
- **Garanties** (V, https://debebians.com/pages/warranty-information) : plan d'un an (diamant d'accent de 0,10 ct ou moins remplacé gratuitement) ; nettoyage, polissage et rhodiage gratuits à vie (frais d'envoi) ; garantie à vie contre les défauts de fabrication, avec inspection annuelle obligatoire ; le diamant central et les pierres certifiées sont exclus.
- **Mise en place de la pierre** : offerte quand pierre et monture viennent de deBebians (V).
- **Certificats** : « certified lab grown diamonds » ; laboratoire en filtre de recherche (« Lab ») ; GIA / IGI non vérifiés dans les pages lues (V : absence).
- **Libellé du synthétique** : « lab grown » ; la FAQ précise que tout diamant est naturel sauf mention contraire, et qu'un diamant « lab created or synthetic » est indiqué clairement (V).

## Confiance et service

- **Avis** (V, https://debebians.com/pages/debebians-client-testimonials-customer-reviews) : 4,9 sur 113 avis Google, résumé « AI Summary » ; extraits cités sur la page.
- **Ancienneté** : « Since 2005 » (V).
- **Contact** : téléphone du lundi au vendredi 9 h à 17 h PST, e-mail, formulaire de devis sur mesure ; pas de chat ni de WhatsApp observés (V : absence).
- **Fabrication** : « manufactured in Los Angeles » ; précision de bas de page : pierres non extraites ni taillées à Los Angeles (V).
- **Preuves de fabrication** : pas de photos ni vidéos d'atelier, pas de suivi de commande observés (V : absence). La fiche annonce un contrôle qualité sans le montrer.
- **Langues, devises** : anglais, dollar américain (V). Liens d'accessibilité et de politique « conflict-free » (V).
- **Assurance** : lien vers Jewelers Mutual (V).

## Points forts à retenir pour JR Diamond

1. **Retours et garanties sur deux pages claires** avec le chiffre des frais de remise en stock (20 $ ou 50 $) et l'exclusion du sur mesure et du gravé : exactement le point que JR Diamond doit faire valider par l'avocat. Preuve : https://debebians.com/pages/returns-exchanges.
2. **Prix de la monture lisible par métal** : 1 073 / 1 273 / 1 401 / 1 516 $ selon l'alliage (V). La différence de prix entre 14 k, 18 k et platine est visible avant l'ajout au panier.
3. **Surcoûts d'options affichés dans la liste** (« +$100 », « +$40 ») au lieu d'un total opaque (V).
4. **Page comparative des types de pierre** (synthétique, naturel, moissanite, gemmes) en tableau, avec dureté et prix relatif (V : `/pages/complete-your-engagement-ring`).
5. **Dates de livraison estimées affichées sur la fiche** et promesse « livraison avant Noël » (V). Pour JR Diamond : afficher la date calculée à partir de 14 jours ouvrés.
6. **Preuve sociale chiffrée** : 4,9 sur 113 avis Google, page dédiée (V).
7. **Filtres par adresse** : l'état du filtre est dans l'adresse (`?filter.v.option…`), donc partageable (V). C'est le point que le prototype n'a pas encore.
8. **Compte des modèles par style** affiché à côté de chaque filtre (V).

## Défauts observés

- Le choix de forme et de métal ne change pas l'image principale dans notre essai (même fichier avant et après) (V).
- Le prix ne dépend pas de la forme de pierre (V : 1 073 $ pour toutes) ; il dépend du métal.
- Le panier n'affiche que forme et métal pour la ligne ajoutée ; taille de doigt, griffes, gravure n'y apparaissent pas (V : panier ; cause non établie, I : propriétés de ligne vides dans `cart.js`).
- Bandeau de cookies bloquant : le clic sur « Add to cart » n'a pas ajouté la ligne tant que le bandeau n'était pas fermé (V, premier essai).
- Pas de total ni de décomposition tant qu'on n'a pas choisi une pierre ailleurs : le client doit assembler monture et pierre en deux achats séparés (V).
- Gravure ou sur mesure : aucun retour (V), risque de litige sur une bague de fiançailles.
- Pas de photos de fabrication, pas de 3D, pas de vidéo (V : absence sur les pages testées).
- Prix « From » identiques pour plusieurs variantes de couleur de tête (ex. trois fiches Two-Tone à 1 022 $) : doublons dans la liste (V).
- Livraison offerte, mais taxes calculées seulement au paiement (V).

## Limites de l'audit

- **Écarts à robots.txt (à connaître avant de réutiliser ces constats).** Le contrôle `robots.cjs` a répondu AUTORISÉ pour chaque adresse de départ, mais le robots.txt de deBebians interdit aussi des motifs : `/collections/*sort_by*`, `/collections/*+*`, `/collections/*filter*&*filter*`, `/cart/` et `/cart.js`. Nous les avons déclenchés : (1) tri par prix (`?sort_by=price-ascending` et `-descending`) ; (2) filtres cumulés forme + métal produisant des adresses avec « + » et deux filtres ; (3) clic sur « Add to cart » (requête `POST /cart/add`, sous `/cart/`) ; (4) lecture de `/cart.js` par notre script, et par le site lui-même pendant l'ajout. Aucune autre page interdite n'a été ouverte. Les constats issus de ces essais sont : prix extrêmes 1 022 $ et 3 142 $ (tri), adresses de filtres, contenu de la ligne du panier. À marquer `[P1]` dans la synthèse. Aucun nouvel essai n'a été fait.
- Panier : atteint par la page `/cart` (autorisée), puis session fermée ; aucun paiement ni saisie de données.
- Recherche de pierres : la page est lue, aucune requête de recherche lancée (application tierce, résultats non vérifiés).
- Visionneuse 3D : non trouvée sur la liste ni sur la fiche testée (aucun lien, bouton ou ressource iJewel dans le code de la fiche) ; l'inventaire en signale une ailleurs, non localisée ici.
- Mesure du visuel principal : ordinateur 607 ms et 603 ms (premier visuel > 150 px, `performance.now`) ; iPhone **non mesuré** (le script n'a pas trouvé d'image de cette taille) ; réseau du poste d'audit, cache froid (V).
- Un seul modèle testé (SE-26), une seule couleur de pierre ; les autres métaux testés par radio ; les autres fiches non ouvertes.
- Aucune interaction avec téléphone, e-mail, formulaire de devis sur mesure, newsletter, réseaux.

## Sources

- https://debebians.com/collections/engagement-rings (liste, filtres, tri)
- https://debebians.com/products/classic-solitaire-engagement-ring-setting-with-6-prongs (fiche SE-26)
- https://debebians.com/cart (panier)
- https://debebians.com/pages/complete-your-engagement-ring, https://debebians.com/apps/vdb-app/search-filters?diamondSearchType=Lab_grown_Diamond&structure=new
- https://debebians.com/pages/returns-exchanges, https://debebians.com/pages/warranty-information, https://debebians.com/pages/faqs
- https://debebians.com/pages/debebians-client-testimonials-customer-reviews, https://debebians.com/pages/custom-made-engagement-rings
- https://debebians.com/robots.txt
- Inventaire : `docs/concurrence/audit/us/california/INVENTAIRE.md`
