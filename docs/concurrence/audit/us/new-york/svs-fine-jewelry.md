# Audit : SVS Fine Jewelry (Oceanside, Long Island, New York)

- **Site** : SVS Fine Jewelry, https://www.svsfinejewelry.com/ ; page de départ : https://www.svsfinejewelry.com/build-your-own
- **Date** : 15/11/2026 (date de l'étude ; mesures faites le 25/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900, en-US) et affichage iPhone 13 (relevé des contrôles de la page seulement)
- **Statut** : **partiel**. Étape 1 (montures) et fiche de monture actionnées ; étape 2 (diamants) restée en chargement ; étape 3 et panier non atteints. `/cart` est INTERDIT par robots.txt (`Disallow: */cart`).
- Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé. Prix en dollars américains.
- Mécanique : le constructeur est un widget Caratwise (`#caratwise-root`, DOM fermé en shadow DOM) servi par `release.caratwise.com` (robots.txt illisible, HTTP 403) et alimenté par `storeapi.caratwise.com` (pas de robots.txt). Images des montures chez `jewelverse.com`. [V]
- **Écart à signaler** : le clic sur « Start with a Setting » a demandé des images (`ring-preview-*.png`) à `release.caratwise.com`, dont le robots.txt répond 403 (statut INCONNU). Ce sont des fichiers statiques d'interface, de même nature que ceux chargés à l'ouverture de la page ; je les ai laissés passer dans les parcours suivants. [V]

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Entrée (hero) | 3 boutons : « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection » (seul le premier testé) |
| 1. Choose Settings | 14 styles : Studio, Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique ; 247 montures (Lab Grown préfiltré) ; tri ; filtres forme, taille, type de diamant, métal, prix, filtres avancés |
| 1b. Fiche de monture (Celeste) | Vues, type de diamant, forme (10), taille du centre, métal (7), métal de la couronne (7), gravure, bague assortie, personnalisations avancées, « Choose This Setting », « Save Your Design » |
| 2. Choose Diamond | Onglets « Diamond Inventory » et « Recommended Selection », filtres, tri : squelettes de chargement, aucune pierre affichée après 14 s (2 essais) |
| 3. Complete Ring et panier | Non atteints |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start with a Setting | bouton | Ouvre la liste des montures, adresse `#/ring?dia_origin=LGN` (synthétique présélectionné) | n/a | OK [V] |
| Start with a Diamond / Design with our Studio Collection | boutons | Non cliqués | n/a | Non testé (temps) |
| Styles (14) | boutons | Non cliqués un à un ; le style Studio ouvre le mode « Studio » [I] | n/a | Partiel |
| Sort by | liste | 4 options : Best Sellers (défaut), New Arrival, Price: Low to High, Price: High to Low | n/a | Options lues ; tri non appliqué [V] |
| Center Diamond Shape | accordéon | 10 formes en pictogrammes (rond, poire, ovale, marquise, radiant, princesse, émeraude, coussin allongé, cœur, coussin carré) | n/a | OK [V] ; filtrage non confirmé |
| Center Diamond Size | accordéon | Ouvre | n/a | Non confirmé |
| Diamond Type | accordéon | Boutons Natural / Lab Grown ; « Lab Grown » présélectionné | n/a | Compteur « Showing All (247) » inchangé après clic : effet non confirmé |
| Metal | accordéon | 7 pastilles : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine | n/a | OK [V] |
| Price Range | accordéon | Curseur à deux poignées, 1 053 à 3 388 $, deux champs | n/a | OK [V] ; effet non testé |
| Advanced Filters, Clear Filters | boutons | Présents ; « Setting Style » dans les filtres avancés | n/a | Non testé |
| Pagination 1 à 7, Load All Designs | boutons | Présents en bas de liste | n/a | Non testé |
| Carte monture | carte | Au survol : photo portée sur la main, 3 pastilles de métal, flèches ; au clic : fiche | « Starting at 1 083 à 2 488 $ » | OK [V] |
| Celeste, onglets de vue : 360° Experience, Hand view, Video, Thumb 1 à 7, Enter fullscreen | boutons | Présents (360°, main, vidéo, plein écran) ; non cliqués | n/a | Présents [V] ; effets non testés |
| Métal (7 pastilles) | boutons | Photo et titre changent (« …Setting in 18K Yellow Gold ») ; l'adresse suit (`pri_comp_metal=18-YG`) | 14 k blanc 1 453 $ ; 14 k jaune 1 453 $ ; 18 k jaune, blanc, rose : 1 453 $ ; **platine 2 000 $** | OK [V] ; 18 k au même prix que 14 k : à vérifier |
| Taille de centre 1 / 2 / 3 / 5 ct | boutons | L'adresse passe à `dia_size=100` pour 1 ct ; 3 ct et 5 ct sans changement d'adresse visible | 2 000 $ puis **1 495 $** (à 5 ct, monture rose 14 k) | Comportement incohérent [V] |
| Forme (Oval, Pear, Heart, Emerald) | boutons | Non atteints dans l'automatisation (libellés `shape-…`, sélection sans effet) | n/a | Non testé |
| Natural / Lab Grown (fiche) | boutons | Natural : `dia_origin=GNU` ; la monture ne change pas de prix | 1 495 $ inchangé | OK [V] |
| Crown Metal | pastilles | 7 pastilles ; non actionnées | n/a | Non testé |
| Engraving | champ (0 / 18 caractères) + 3 boutons « Aa » | Présent ; 3 polices ; limite 18 caractères ; rien saisi | n/a | Non testé |
| Matching Band | boutons | « No Band » / « Single » ; non cliqués | n/a | Non testé |
| Advance Customizations | bouton | Présent | n/a | Non testé |
| Choose This Setting • 1 453 $ | bouton | Passe à l'étape 2 ; adresse `#/diamond?…dia_size=1.5..2.5&ai_color=3..1&ai_clarity=5..9` | prix de la monture seule | OK [V] (clic par script : un widget de chat recouvrait le bouton) |
| Étape 2 : Diamond Inventory / Recommended Selection / Filters / Sort by Default | onglets, boutons | Page en squelettes gris, puis texte « That's all we have got » après 14 s ; aucune pierre | n/a | Chargement sans fin ou inventaire vide [V], 2 essais |
| Save Your Design | bouton | Présent ; non cliqué (probable demande de coordonnées [S]) | n/a | Non testé |
| Product Details | accordéon | Présent | n/a | Non testé |
| Navigation de page (menu, recherche, compte, favoris, panier, rendez-vous, financement, boutique) | liens | 305 contrôles à l'ordinateur, 87 sur iPhone ; liens vers /pages/financing, /return-policy, /pages/fastfree-shipping, /pages/svs-lifetime-warranty-, calendly (rendez-vous) | n/a | Liens présents ; les pages de politique ont été lues (voir plus bas) [V] |
| FAQ (6 questions) | accordéons | Non dépliés ; le texte de la 1re réponse est lu | n/a | Partiel |
| Chat « Text us » (Podium) | bouton flottant | Non ouvert | n/a | Non testé (règle) |
| Bandeau de consentement | bouton | « Close consent popup » | n/a | OK [V] |

## Options disponibles

- **Origine** : naturel et synthétique (« lab grown »), bascule dans le constructeur. [V]
- **Métaux** : 14 k et 18 k (blanc, jaune, rose), platine ; métal de la couronne choisi à part. [V]
- **Formes** : 10 formes de centre. [V]
- **Tailles de centre** : 1, 2, 3, 5 ct dans la fiche ; plage de 1,5 à 2,5 ct à l'étape 2 par défaut. [V]
- **Gravure** : 18 caractères, 3 polices. [V]
- **Bague assortie** : aucune ou simple. [V]
- **Filtres de montures** : forme, taille, type, métal, prix, style (avancé). [V]
- **Taille de doigt, pavage, griffes** : non vus dans les écrans atteints.

## Prix, délais, retours, garanties

- **Prix** [V] : « Starting at » sur chaque monture (1 083 à 2 488 $ vus sur la première page) ; prix de la monture seule, mis à jour selon le métal (platine : 2 000 $ contre 1 453 $). L'étape de total n'a pas été atteinte ; le texte promet « see your price » une fois le diamant ajouté.
- **Délai** [V] : « Builder rings typically take three to four weeks » ; échéance de Noël : commande avant le samedi 5 décembre ; bagues en stock « ready to propose » disponibles immédiatement.
- **Livraison** [V] : standard gratuite dès 75 $, priorité 2 à 3 jours gratuite dès 300 $, lendemain 35 $ (gratuit dès 599 $), même jour dans le comté de Nassau 25 $, retrait gratuit à Oceanside.
- **Retours** [V] : remboursement sous 14 jours sur les articles en stock ; échange 30 jours ; **vente finale pour les diamants libres et les pièces sur mesure, « including rings created in our online ring builder »**. Autorisation de retour (RA) par téléphone ou courriel ; frais de retour à la charge du client.
- **Garantie** [V] : garantie à vie gratuite (nettoyage, resserrage, ré-embout de griffes, une remise à taille gratuite, remplacement d'un diamant rond jusqu'à 0,20 ctw), inspection tous les six mois, honorée dans 145+ bijoutiers Preferred Jewelers.
- **Reprise et alignement** [V] : « Lifetime Diamond Trade Up » à 100 % et « Price Match » réservés aux diamants naturels ; **synthétiques exclus**.
- **Paiement** [V] : panier Stripe, Affirm, Klarna, cartes ; carte AGS (Wells Fargo) en boutique seulement ; mise de côté de 50 % jusqu'à six mois sans contrôle de crédit. Panier non ouvert.
- **Langue et devise** [V] : anglais, dollars.
- **Libellé du synthétique** [V] : « lab grown » ; la page explique « grading reports, not certificates » et la différence IGI / GIA.

## Confiance et service

- **Avis** [V] : « Over 2,500 five-star Google reviews » (affirmation du site), page de témoignages ; non vérifiée à la source.
- **Magasin** [V] : showroom de plus de 4 000 pieds carrés, 3323 Long Beach Rd, Oceanside ; ouvert depuis 2003 ; atelier interne, « Master Setter » nommé.
- **Rendez-vous** [V] : réservation Calendly, « Book a bridal appointment, save $100 » ; téléphone (516) 766-2614 ; chat Podium « Text us ».
- **Preuves de fabrication** : l'atelier et le sertissage sont décrits dans le texte ; pas de photos ou vidéos de fabrication, ni de suivi de commande vus sur les pages lues. Suivi de réparation (« Check Repair Status ») existe pour les réparations. [V]
- **Commande sur place** [V] : une conception en ligne peut être enregistrée puis finalisée en boutique avec un conseiller.

## Points forts à retenir pour JR Diamond

1. **Constructeur « monture puis diamant » avec bascule naturel / synthétique et adresse qui garde la configuration** (`#/ring/RP407-celeste?dia_origin=LGN&pri_comp_metal=14-WG…`) : le partage de configuration est ainsi réalisé. Preuve : l'adresse change à chaque clic.
2. **Vues multiples sur la fiche** : 360°, « Hand view », vidéo, 7 vignettes, plein écran. Preuve : boutons présents (effets non actionnés).
3. **Prix « à partir de » sur chaque carte** et mise à jour par métal (platine 2 000 $). Preuve : fiche Celeste.
4. **Honnêteté sur le sur-mesure** : page de retours qui dit noir sur blanc que les bagues du constructeur sont en vente finale ; délai de 3 à 4 semaines annoncé avec date limite de Noël. Preuve : /return-policy et /build-your-own.
5. **Double parcours en ligne ou en showroom** (« complete it in our showroom ») : continuité entre configurateur et conseiller.
6. **Page pédagogique sur le synthétique** (méthodes de croissance, IGI / GIA, « rapport » plutôt que « certificat »). Preuve : /pages/lab-grown-diamonds.

## Défauts observés

- **Étape 2 sans pierres** : squelettes puis « That's all we have got », sur deux essais à 14 s ; blocage possible dû à l'automatisation, non établi. [V]
- **Prix incohérents** : 18 k au même prix que 14 k (1 453 $) ; retour de platine à 14 k rose sans retour du prix à 1 453 $ (2 000 $ affiché) ; 5 ct à 1 495 $. Cause possible : latence d'affichage ; non tranché. [V]
- **Compteur « Showing All (247) » inchangé** après le changement de type de diamant. [V]
- **Widget en shadow DOM** (contrôles invisibles aux outils d'accessibilité classiques) ; bouton de choix recouvert par le chat Podium en automatisation. [V]
- **Synthétiques exclus** de la reprise et de l'alignement de prix ; **vente finale** du sur-mesure : frein pour un acheteur hésitant.
- Informations de prix de diamant et total non vues.

## Limites de l'audit

- Étape 2, étape 3, panier : non atteints. `/cart` INTERDIT par robots.txt : aucun bouton d'ajout cliqué.
- « Start with a Diamond », « Studio Collection », 13 styles sur 14, tri, filtres de forme et de taille, pagination, gravure, bague assortie, personnalisations avancées, 360° / main / vidéo : non actionnés ou effet non confirmé.
- Compteurs de résultats peu fiables (texte du shadow DOM).
- Mesure de temps : première image visible de la page en 1,9 s (ordinateur) ; iPhone non mesuré ; temps d'ouverture de la fiche non chronométré.
- `release.caratwise.com` : robots.txt illisible (403) ; requêtes d'images déclenchées par un clic, laissées passer (voir plus haut).
- Rien saisi dans aucun formulaire ; chat non ouvert.

## Sources

- https://www.svsfinejewelry.com/build-your-own : page et constructeur, actionnés le 25/11/2026 [V]
- https://www.svsfinejewelry.com/return-policy : retours [V]
- https://www.svsfinejewelry.com/pages/fastfree-shipping : livraison [V]
- https://www.svsfinejewelry.com/pages/svs-lifetime-warranty- : garantie [V]
- https://www.svsfinejewelry.com/pages/lab-grown-diamonds : synthétique [V]
- https://www.svsfinejewelry.com/pages/lifetime-diamond-upgrade : reprise [V]
- https://www.svsfinejewelry.com/pages/financing : financement [V]
- https://storeapi.caratwise.com/ et https://release.caratwise.com/ : widget du constructeur [V, hôtes tiers]
