# Audit : Neophytou Precious Jewellery (Larnaca, Chypre)

- **Site** : https://neophytoujewellery.com/ (WordPress, WooCommerce, thème Qode « Elfrida »)
- **Page de départ** : https://neophytoujewellery.com/lab-diamonds/ (constructeur, onglet synthétique) ; autres entrées : /natural-diamonds/, /engagement-rings/ (partir d'une monture)
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13.
- **Statut** : **partiel**. Les étapes 2 (monture) et 3 (bague complète) du constructeur et le panier n'ont pas été atteints : le passage de la fiche monture au choix du diamant, et le bouton « Choose This Diamond », passent par une adresse `add-to-cart=` que le `robots.txt` interdit (voir Limites). Légende : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Entrée du menu « Engagement Rings » | Start with a Setting, Start with a Natural Diamond, Start with a Lab Diamond, Start with a Gemstone, Start with a Colored Stone [V] |
| 1. Select Diamond (module tiers dans une iframe) | Onglets NATURAL / LAB CREATED / COLOURED ; 10 formes ; prix ; 360° ; carat ; couleur ; pureté ; coupe ; poli ; « More Filters » ; recherche de stock ; tri ; comparer ; vus récemment [V] |
| Fiche diamant | Dimensions, certificat IGI, visionneuse, vue 360°, « Choose This Diamond » (sans effet sur la fiche testée), partager, 4 diamants similaires comparés [V] |
| 2. Select Setting (fiche monture) | Couleur d'or (blanc, jaune, rose, 18 k) ; bouton « Choose This Setting » ouvrant « Select a Center Stone option » : naturel, synthétique, de couleur, gemme centrale, ou « Add To Cart Without Center Stone » [V]. Clic sur « Add a Lab Diamond » sans effet visible quand l'ajout par adresse est bloqué [V] |
| 3. Complete Ring | Non atteint [non testé] |
| Panier | Non atteint ; la page `/cart/` n'est pas interdite, mais aucun article n'a pu être ajouté sans requête interdite |

## Contrôles vérifiés

Mesure : `controls.cjs` sur /engagement-rings/ (178 contrôles visibles ordinateur), fiche monture (140 ordinateur, 90 iPhone), constructeur (iframe, 45 puis 32 sur iPhone hors en-tête). Les liens répétés du menu sont regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start with a Setting / Natural Diamond / Lab Diamond / Gemstone / Colored Stone | lien menu | Ouvre /engagement-rings/, /natural-diamonds/, /lab-diamonds/, /gemstones/, /colored-stones/ | — | OK (/lab-diamonds/ et /natural-diamonds/ chargent le constructeur ; /gemstones/ et /colored-stones/ ouverts seulement par lien, non rendus) |
| NATURAL / LAB CREATED / COLOURED | onglets du constructeur | Bascule le stock : 362 216 naturels, 621 691 synthétiques, 113 582 de couleur | Prix du stock affiché en euros | OK [V] |
| Forme : Round, Princess, Cushion, Emerald, Marquise, Oval, Radiant, Pear, Asscher, Heart | boutons image | Oval : 621 691 → 86 481 résultats, adresse devient /lab-diamonds/oval/ ; second clic : retour à 621 691 | — | OK [V], autres formes non cliquées une à une |
| Curseur Price (100 € à 1 000 000 €) et deux champs | curseur et texte | Présent, non manipulé | — | Non testé : une seule manipulation de filtre par catégorie suffisait à voir l'effet |
| 360 View Available | case à cocher | Aucun changement du nombre de résultats (621 691) après 3,5 s | — | **Sans effet observé** [V] |
| Curseur Carat (0,1 à 20) et deux champs | curseur et texte | Présent | — | Non testé |
| Curseur Colour M à D | curseur | Présent | — | Non testé |
| Curseur Cut (Good, Very Good, Excellent, Ideal) | curseur | Présent | — | Non testé |
| Curseur Clarity I1 à FL/IF | curseur | Présent | — | Non testé |
| Curseur Polish (Good à Excellent) | curseur | Présent | — | Non testé |
| Clear Filter | bouton | Présent | — | Non testé |
| More Filters + | bouton | Devient « Less Filters − » ; contenu supplémentaire non relevé | — | Ouvre [V], contenu non lu |
| Sort By : Popular, Price low/high, Carat low/high, Colour, Clarity, Cut, AI Score | liste | Carat High to Low : les 20 ct d'abord, prix de 12 330 € à 48 860 € | Trié | OK [V] |
| Pastille de pourcentage (97 %, 99 %...) sur chaque carte | étiquette | Score « AI » du diamant (tri « AI Score ») ; sens exact non expliqué sur la page | — | [I] |
| Results (n) / Recently Viewed (0) / Compare (0) | onglets | Présents ; « Compare » non essayé | — | Non testé |
| Search stock | champ | Présent | — | Non testé |
| Vue grille / liste | boutons icônes | Présents | — | Non testé |
| Carte de diamant | bouton | Ouvre /diamond-detail/<id>/ (adresse du site) | Prix de la pierre seule | OK [V] |
| Diamond image, Diamond viewer, View 360° | boutons fiche diamant | Visionneuse vidéo servie par loupe360.com (3 connexions fermées côté proxy, rendu non vérifié) | — | Non confirmé |
| IGI Certificate | bouton | Présent ; certificat numéroté (ex. LG784649849) | — | Non ouvert |
| Back to Collection | bouton | Retour au listing | — | Non testé |
| CHOOSE THIS DIAMOND | bouton | Aucun changement d'adresse ni d'étape après 24 s (2 essais, adresse directe ou depuis le listing) | — | **Sans effet** dans notre test [V] |
| Share | bouton | Présent | — | Non testé |
| Choose This Diamond / View (diamants similaires) | boutons | Présents | — | Non testés |
| Color (liste) : White/Yellow/Rose Gold 18K | liste fiche monture | Sélectionne le métal | **Aucun changement** : 2 000,00 € pour les trois [V] | OK mais sans effet de prix |
| Clear | lien | Efface la sélection | — | Non testé |
| Choose This Setting | bouton | Ouvre la fenêtre « Select a Center Stone option » | — | OK [V] |
| Add a Natural / Lab / Colored Diamond, Add a Center Gemstone | boutons de la fenêtre | Aucun passage à l'étape suivante dans notre test | — | **Sans effet observé** (voir Limites) |
| Add To Cart Without Center Stone | bouton | Non actionné (ajout par adresse interdit) | — | Non testé |
| Quantité − / 1 / + | champ | Présent | — | Non testé |
| Add to wishlist (cœur) | lien | Présent, adresse `?add_to_wishlist=` | — | Non testé |
| Zoom (loupe) et 3 vignettes | boutons | Galerie de 3 images (bague de profil, de côté, en vue éclatée) | — | Non cliqués |
| Sélecteur de devise USD / EUR | liste | Deux options | Conversion | Non testé |
| Compte, souhaits, panier (0) | liens | Présents | — | Non testés |
| Book An Appointment | lien | /book-appointment/ | — | Non ouvert |
| WhatsApp (bouton flottant vert) et lien de pied de page | lien | Ouvre wa.me/+35794040814 ; aucune conversation ouverte | — | Lien présent [V] |
| Téléphone +357 24 65 7082, courriel | liens | tel: et mailto: | — | Présents [V] |
| Pied de page : Our Story, Our Promise, Certifications, B2B, Shipping, After Sales, Care Guide, Size Guide, FAQ, Returns, Terms, Privacy, Sitemap | liens | Pages lues : Shipping, Returns, Certifications, After Sales, Our Promise ; les autres non | — | OK (200) |
| Aucun bouton d'essayage à domicile, de financement, de comparateur de bagues, d'AR | — | Absents du parcours | — | [V] |

## Options disponibles

- **Métal** : or blanc, jaune, rose 18 k sur la monture testée (Seraphina) ; une seule description « solid 18K gold » [V]. Pas de 14 k, pas de platine sur cette fiche.
- **Formes de pierre** : rond, princesse, coussin, émeraude, marquise, ovale, radiant, poire, asscher, cœur [V].
- **Origine** : naturel, synthétique, de couleur, gemme centrale ; pas de tri par certificat sur l'écran visible [V].
- **Filtres** : prix, 360°, carat, couleur, pureté, coupe, poli, « More Filters » [V].
- **Taille de doigt, gravure** : non vus dans le parcours accessible ; un guide des tailles existe (/size-guide/) [V : lien].
- **Montures** : 12 fiches sur la première page de /engagement-rings/ (Amara, Ariadne, Aurelia, Charlotte, Gabrielle, Isabella, Juliet, Lumen, Mariselle, Rosalie, Seraphina, Valentina) [V]. Une catégorie « Engagement Rings Ready To Ship » existe [V : lien].

## Prix, délais, retours, garanties

- **Prix** : prix en euros affichés partout [V]. La monture est « sold as a setting only » (2 000,00 € pour Seraphina, sans pierre) [V]. La pierre s'ajoute ; le total n'est pas affiché avant le panier, que nous n'avons pas atteint [V].
- **Pierres** : 0,83 ct E VVS2 rond synthétique à 350 € ; 1,92 ct D VVS1 ovale synthétique à 287 € (ancien prix barré 330 €) alors que quatre diamants « similaires » de 1,93 à 2,01 ct valent de 1 030 € à 1 050 € sur la même fiche. **Prix incohérents ou erreur de saisie probable** [V ; explication supposée].
- **Délai** : fiche diamant « Deliver by: Thursday 24 December » le 15/11 [V]. Page livraison : 8 à 30 jours ouvrés à Chypre, 10 à 30 jours ouvrés en Europe [V]. Annoncé sans option express.
- **Livraison** : gratuite, assurée, Chypre et Europe ; pas de livraison hors Europe ; pas de droits de douane dans l'UE [V : /shipping-and-delivery/].
- **Retours** : annulation par courriel sous 14 jours après réception, retour sous 14 jours, frais de retour à la charge du client, inspection visuelle ; articles ouverts repris seulement s'ils sont défectueux ; réclamation pour dommage sous 48 h [V : /return-exchange-policy/]. **Le sur mesure n'est pas mentionné** [V].
- **Garanties** : certificat d'authenticité et « lifetime guarantee » sur matériaux et façon, hors dommage extérieur [V].
- **Après-vente** : nettoyage et contrôle, resertissage, mise à taille, réparations, rhodiage, expertises, certification GIA, HRD, IGI sur rendez-vous ; prix non affichés [V : /after-sales-services/].

## Confiance et service

- **Certificats** : synthétiques IGI (« Lab Report: IGI », numéro de certificat sur la fiche) [V] ; naturels : lien « GIA » à confirmer sur la fiche, non ouvert.
- **Libellé du synthétique** : « Lab Created », « Lab-Grown Diamonds », « Lab Diamond » [V]. Le mot « synthetic » n'apparaît pas.
- **Langues** : anglais seulement ; devises EUR et USD [V]. Pas de version grecque, ni hébraïque, ni française.
- **Avis clients** : aucun avis chiffré trouvé sur les pages lues [V]. Pastille Google Merchant (ouverte par le site, non lue) [I].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, pas de suivi de commande trouvé [V]. Le site dit « handcrafted in Cyprus » pour les bijoux sur mesure [V : page Our Promise], sans preuve.
- **Service** : rendez-vous en boutique, téléphone, WhatsApp, courriel [V].

## Points forts à retenir pour JR Diamond

1. **Constructeur diamant d'abord, stock énorme** : 621 691 synthétiques, 362 216 naturels, 113 582 de couleur, filtre par 10 formes (preuve : bandeau « Results (621691) » sur /lab-diamonds/, puis 86 481 après « Oval »).
2. **Fiche diamant très complète** : cotes en mm, rapport table/profondeur, certificat IGI numéroté, tableau comparatif de 4 diamants voisins avec l'écart de prix (« +€ 753 ») (preuve : fiche /diamond-detail/6b0491ecb7a4ec7eeb44979d/).
3. **Frise en trois étapes visible en permanence** (Select Diamond, Select Setting, Complete Ring), au choix « partir de la monture » ou « partir du diamant » (preuve : bandeau de la page et menu).
4. **Livraison gratuite assurée et date de livraison sur la fiche** (preuve : « Deliver by: Thursday 24 December », « Free Shipping »).
5. **Rendu rapide des fiches** : première image visible en 3,7 s (ordinateur) et 4,0 s (iPhone) sur la fiche monture ; 1,7 s pour le module du constructeur, résultats entre 4,5 s et 10,6 s selon l'essai [V].

## Défauts observés

- « Choose This Diamond » sans effet dans nos deux essais, et fenêtre « Add a Lab Diamond » sans suite (peut venir du blocage de `add-to-cart=` de notre côté).
- Prix de la monture identique pour les trois couleurs d'or (2 000,00 €) : cohérent, mais le prix de la bague complète n'est jamais montré avant le panier [V].
- Prix de diamant manifestement incohérents (287 € pour 1,92 ct D VVS1 ovale contre 1 040 € pour un voisin) ; plusieurs cartes à 350 € quel que soit le carat [V].
- Contrôle « 360 View Available » sans effet sur le nombre de résultats [V].
- Constructeur dépendant d'un module tiers : 25 s de squelette gris vus avant l'affichage lors d'un premier essai ; erreur 409 sur `admin-ajax.php` ; requêtes bloquées par le proxy [V].
- Exceptions du sur mesure absentes de la politique de retour [V].
- Aucune version en grec, aucun avis, aucune preuve d'atelier [V].

## Limites de l'audit

- Pas de panier ni de récapitulatif : la fiche monture et le bouton « Choose This Diamond » déclenchent, selon toute vraisemblance, un ajout par adresse `add-to-cart=`, interdit par le `robots.txt` du site. J'ai bloqué ces requêtes dans le navigateur, donc les étapes 2 et 3, les moyens de paiement et les frais de livraison au panier restent **non vérifiés** [I].
- Filtres de carat, couleur, pureté, coupe, poli, comparer et recherche non manipulés un à un ; la vue 360° du fournisseur (loupe360.com) n'a pas pu être chargée de façon fiable.
- Mesure unique des temps, sans répétition suffisante pour une moyenne.
- Captures dans `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/neophytou/` (hors dépôt).

## Sources

- https://neophytoujewellery.com/engagement-rings/ , /lab-diamonds/ , /natural-diamonds/ , /diamond-detail/6b0491ecb7a4ec7eeb44979d/ , /product/solitaire-engagement-ring-seraphina/ (lues le 15/11/2026).
- https://neophytoujewellery.com/shipping-and-delivery/ , /return-exchange-policy/ , /after-sales-services/ , /certifications/ , /our-promise/ .
- Module du constructeur : https://ring-builder.apps.keyideasglobal.com/listingPage?category=lab-diamonds (sans `robots.txt`).
- `robots.txt` : https://neophytoujewellery.com/robots.txt .
