# Audit : Honey Jewelry Co (Grand Rapids, Michigan)

- **Site** : Honey Jewelry Co, https://honeyjewelry.com/ (Shopify). Page de départ : https://honeyjewelry.com/collections/build-your-engagement-ring
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright, liste des contrôles et captures seulement).
- **Statut** : **partiel**. Parcours vérifié jusqu'à l'étape « Complete your ring ». Le bouton « Add to cart » n'a pas été actionné : `/cart/add` est INTERDIT par robots.txt (`Disallow: /cart/`, vérifié avec robots.cjs), et le panier reste donc vide. Les requêtes `/cart/add|change|update|clear` étaient en plus bloquées côté script.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Choix d'une monture (collection) | 6 montures rondes : Abby (solitaire fût fuselé, dès 2 195 $), Harlow (halo caché, 2 695 $), Lolo (solitaire fin, 2 195 $), Sarah (pavé, 2 795 $), Willow (halo caché, 2 995 $), Winnie (bezel, 2 295 $) | [V] collection |
| 1b. Fiche monture (« Setting Only ») | Forme de pierre (7), couleur/titre de métal (6), taille de doigt confirmée après achat, boutons « Build a ring » et « Add to cart » | [V] fiche Abby |
| 2. Choisir un diamant | Onglets Naturel / Synthétique (« Lab Grown »), forme, carats, couleur (blanc ou « Fancy »), pureté, taille, prix, filtres avancés, tri, liste/grille | [V] `/pages/engagement-ring-builder?stage=Add+Diamond&settingId=…` |
| 3. Compléter la bague | Récapitulatif (monture + diamant), « Finger Size » (région puis taille ; option « Not sure »), total ; bouton final intitulé « Select region » tant que la région n'est pas choisie | [V] `stage=Complete+Ring` |
| 4. Panier | Non atteint avec contenu (interdit) ; panier vide lu : « Your Cart is Empty » | [V] /cart |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Show Filters (collection) | bouton | Ouvre 7 groupes : Price (min/max), Color (métaux), Gem Shapes, Gem Types, Product Type, Diamond Shape, Metal ; devient « Hide Filters » | sans | OK ; les cases n'ont pas été cochées |
| Sort by (collection) | bouton | Non actionné | - | Non testé (peu d'enjeu, 6 produits) |
| Fiche : Stone Shape Round/Emerald/Oval/Radiant/Pear/Marquise/Cushion | boutons | Chaque forme mène à une **fiche distincte** (slug `abby-<forme>-solitaire-…`), sans rechargement visible | identique, 2 195 $ | OK. « Oval » mène au slug `abby-pear-…-1` [V], nommage incohérent |
| Fiche : Color 14k rose / 14k blanc / 14k jaune | boutons | Change la variante (URL `?variant=`) | 2 195 $ | OK |
| Fiche : 18k jaune / 18k blanc | boutons | Idem | **2 495 $** (+300) | OK |
| Fiche : Platinum | bouton | Idem | **2 595 $** (+400) | OK |
| Image principale selon le métal | affichage | Premier visuel inchangé dans la mesure (photo d'ambiance) ; le 360 des vignettes n'a pas été vérifié | - | [I] l'image de la bague suit le métal (vignettes nommées YG/WG/RG), non démontré |
| Ring Size | texte | « We will contact you after purchase to confirm a ring size » : pas de choix sur la fiche monture | sans | OK |
| Description / Warranty / Loose Gemstone Policy / Do all diamonds come with a certificate? | accordéons | Texte lu (voir plus bas) ; le dernier n'a rien affiché dans ma lecture | sans | 3 OK, 1 contenu vide observé |
| Share | lien | Non actionné | - | Non testé |
| Product inquiry (formulaire) | formulaire | Présent (nom, e-mail, style, message, hCaptcha) | - | Non rempli (règle) |
| Build a ring | lien | Ouvre le constructeur, étape « Add Diamond » avec `settingId` et variante | prix monture repris (2 195 $) | OK |
| Add to cart (fiche) | bouton | `/cart/add` interdit | - | **Non testé : panier interdit par robots.txt** |
| Natural / Lab Grown | onglets | Naturel : 11 195 diamants dès 2 471 $ ; synthétique : 44 425 dès 1 041 $ (défaut : synthétique) | prix du diamant | OK |
| Fancy / White | boutons | Fancy : 3 647 diamants de couleur (ex. « Fancy Deep Green Blue », 972 $) ; White : retour à 44 425 | oui | OK |
| Couleur D–G | cases | D seul : 15 555 résultats | oui | OK |
| Pureté FL…VS2 | cases | VS2 en plus : 1 314 résultats | oui | OK |
| Taille (cut) Excellent / Very Good | cases | Very Good seul : 70 résultats ; Excellent : 1 314 | oui | OK |
| Shape (constructeur) | boutons | **Une seule forme : Round** (alors que la fiche monture propose 7 formes) | - | Limite observée |
| Carats / Price (curseurs et champs) | curseurs | Plages 1 à 8 ct et 1 à 5 000 000 $ ; champs non modifiés | - | Non testé |
| Sort (Price low/high, Carat low/high) | liste | « Price high to low » : premier résultat 7,05 ct à 54 916 $ | oui | OK |
| List / Grid | boutons | Non actionnables par mon script (cliquables présents) | - | Non testé |
| Advanced Filters | bouton | Ouvre un panneau ; étiquettes actives affichées (« Color: D - D », « Clear All ») ; contenu détaillé non lu | - | OK partiel |
| Select diamond | bouton | Passe à l'étape 3 ; diamant ajouté à la ligne « Remove », total 57 111 $ (2 195 + 54 916) | + prix du diamant | OK |
| Remove / View (récap) | liens | Non actionnés | - | Non testé |
| Select Region | liste | 11 régions : États-Unis, Royaume-Uni, Australie, Italie, Espagne, Hong Kong, Europe, Afrique du Sud, Canada, Japon, Corée | - | OK ; le choix d'une région et la liste des tailles n'ont pas été obtenus |
| Select Ring Size | liste | Non obtenue (dépend de la région) | - | Non testé |
| Select region (bouton final) | bouton | Libellé tant que la région manque ; probable ajout au panier ensuite | - | Non actionné (panier interdit) |
| Pop-up « Let's begin a journey » | fenêtre | Apparaît sur l'étape 3 (prénom + e-mail), avec « No, thank you » | - | OK, non rempli |
| JOIN (e-mail pied de page) | formulaire | Non rempli | - | Non testé |
| Appointments | lien | `/pages/appointments` | - | Non ouvert |
| Ring Sizer | lien | `/products/ring-sizer` (mesureur de doigt vendu) | - | Non ouvert |
| Téléphone (616) 272-3983 / « Send us a message » / Instagram, Facebook, Pinterest | liens | `tel:` et liens externes | - | Non suivis |
| USD $ (devise) | bouton | Non actionné ; une seule devise vue | - | Non testé |
| Panier (/cart) | lien | « Your Cart is Empty », lien « Continue Shopping » | - | OK |

Total : 65 contrôles listés sur la collection (ordinateur), 52 en iPhone ; la liste complète est dans les JSON du dossier de travail.

## Options disponibles

- **Métaux** [V] : 14 k rose, blanc, jaune ; 18 k jaune, blanc ; platine. Pas d'or rose 18 k.
- **Formes** [V] : rond, émeraude, ovale, radiant, poire, marquise, coussin (fiche monture). Constructeur de diamants : rond seulement.
- **Origine** [V] : naturel et synthétique (« Lab Grown »), IGI et GIA affichés par diamant.
- **Filtres de pierre** [V] : carats, couleur D–G (blanc) ou Fancy, pureté FL–VS2, taille Excellent/Very Good, prix, filtres avancés, tri, liste/grille.
- **Autres** [V] : pierres « salt and pepper », saphirs, diamants « champagne », vieilles tailles (menu), alliances femme et homme, chevalières.
- **Non proposé** [V] : gravure, choix du pavage ou des griffes, vue 3D, essai en réalité augmentée (non vus sur le parcours).

## Prix, délais, retours, garanties

- **Prix** [V] : « From 2 195 $ » à 2 995 $ (monture seule). Le prix de la pierre s'ajoute et est affiché par diamant. Total dans l'étape 3, ex. 2 195 + 54 916 = 57 111 $. Pas de décomposition façon/métal/marge. Paiement fractionné **Affirm** annoncé sur la fiche (« Pay with Affirm on orders over $93 ») [V].
- **Fourniture de pierre** [V] : frais de **500 $** si le client apporte sa pierre.
- **Fabrication** [V] : « custom-made to order » ; **aucun délai chiffré** trouvé sur la fiche (« We ship fast »). Délai [S] à demander.
- **Livraison** [V] (`/pages/shipping-policy`) : gratuite aux États-Unis, 30 $ forfaitaires ailleurs, assurée, avec suivi.
- **Retours** [V] (`/pages/faqs`) : aucun remboursement, avoir ni échange pour un bijou sur mesure. Pierres libres : vente ferme, échange sous 5 jours ouvrés pour une pierre de valeur égale ou supérieure, non montée.
- **Garantie** [V] : 6 mois sur les défauts de fabrication ; usure, dommages accidentels, perte de pierre exclus ; assurance externe conseillée.
- **Service** [V] : expédition de retour prépayée vers l'atelier pour entretien ; réparation gratuite si défaut ; frais possibles pour une bague « well loved ».
- **Certificats** [V] : FAQ « presque exclusivement GIA » pour le naturel ; IGI pour le synthétique ; liste de diamants IGI et GIA.
- **Libellé du synthétique** [V] : « Lab Grown » ; page de comparaison disant « 100 % real Diamonds », 30 à 40 % moins chers que le naturel.
- **Devise** : USD seule ; **langue** : anglais [V].

## Confiance et service

- Avis [V] : 189 avis sur la page de livraison, « Collected by Google », réponses de l'atelier ; un avis du 11/06/2026 décrit trois réparations en 1 an et demi (cité en résumé, non recopié).
- Rendez-vous [V] : bouton « Appointments » dans l'en-tête, visite en showroom (956 Cherry St SE, Grand Rapids ; mardi-vendredi 9 h 30-17 h, samedi 9 h 30-16 h), rendez-vous vidéo décrit dans la FAQ.
- Contact [V] : téléphone, e-mail, formulaire. Chat : la page d'explication le mentionne ; aucun widget vu [I].
- Preuves de fabrication [V] : pas de photos ni vidéos de fabrication ni de suivi de commande vus sur le parcours. Une photo du showroom est présente.
- Évaluation incluse [V] : estimation de valeur de remplacement avec chaque achat (FAQ).

## Points forts à retenir pour JR Diamond

1. **Constructeur en trois étapes lisible** (monture, diamant, bague) avec récapitulatif et total à chaque étape. Preuve : barre « Abby 2 195 $ / Choose a Diamond / Complete your Ring ».
2. **Catalogue énorme de diamants réels avec filtres complets** (44 425 synthétiques, 11 195 naturels) et compteur de résultats qui se met à jour. Preuve : D + VS2 + Very Good donne 70 résultats.
3. **Prix de la monture par métal visible sur la fiche** (+300 $ en 18 k, +400 $ en platine). Preuve : Abby, 2 195 / 2 495 / 2 595 $.
4. **Chaque forme de pierre a sa propre fiche**, avec photos réelles de la bague. Preuve : slugs `abby-<forme>-…`.
5. **Politique claire sur le sur-mesure** (pas de retour) et garantie de 6 mois écrite. Preuve : FAQ et fiche.
6. **Rendez-vous vidéo pour les clients éloignés** et expédition d'entretien prépayée. Preuve : FAQ.

## Défauts observés

- Constructeur limité à la forme ronde malgré 7 formes sur la fiche [V].
- « Oval » ouvre une fiche au slug « pear-…-1 » [V].
- Aucun délai de fabrication chiffré [V].
- Taille de doigt demandée après l'achat sur la fiche monture ; l'étape 3 demande région et taille [V].
- Pas de gravure, pas de 3D, pas d'AR, pas de vidéo de fabrication [V sur le parcours].
- Pop-up d'inscription sur l'étape finale [V].
- Accordéon « Do all diamonds come with a certificate? » sans contenu visible dans ma lecture [V].
- Chargement iPhone de la collection : visuels visibles à la capture ; mesure automatique non concluante (voir limites).

## Limites de l'audit

- Ajout au panier, choix de région/taille, récapitulatif de panier, moyens de paiement et frais au panier **non vérifiés** (panier interdit, aucun achat).
- Filtres de la collection (cases), tri de la collection, liste/grille, curseurs, Share, devise : non actionnés.
- **Temps d'apparition du visuel principal** (images ≥ 200 px chargées) : fiche Abby 1 772 ms ordinateur, 2 373 ms iPhone ; collection 2 120 ms ordinateur ; iPhone collection non mesurée (détecteur non concluant, visuels pourtant présents sur la capture). Mesure unique, réseau du bac à sable.
- Le script a vu deux requêtes `GET /cart.js` émises par la page elle-même (lecture du panier, pas d'ajout).
- Les prix de diamants sont ceux de la session du 15/11/2026 et varient.

## Sources

- https://honeyjewelry.com/collections/build-your-engagement-ring
- https://honeyjewelry.com/collections/build-your-engagement-ring/products/abby-round-solitaire-tapered-band-engagement-ring
- https://honeyjewelry.com/pages/engagement-ring-builder?stage=Add+Diamond&settingId=7898883064023&settingVariantId=43637337194711
- https://honeyjewelry.com/pages/shipping-policy, /pages/faqs, /pages/warranty-information, /pages/lab-grown-vs-earth-mined-diamonds, /cart
- Captures et JSON : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/honey-jewelry-co/
