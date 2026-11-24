# Audit : Traditional Jewelers (Biloxi, McComb, Ridgeland, Mississippi)

- **Site** : Traditional Jewelers, https://www.traditionaljewelers.net/ (plateforme Thinkspace, constructeur CaratWise)
- **Page de départ** : https://www.traditionaljewelers.net/design-your-ring/ (le constructeur est une application à adresses en `#/…`)
- **Date** : 15/11/2026 (date de l'étude ; contrôles exécutés avec l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur s'ouvre et fonctionne normalement (aucun écran anti-robot rencontré sur `/design-your-ring/`). Le blocage signalé (catalogue redirigé vers `/verify.html`) concerne `/catalog/…` : ces adresses n'ont pas été ouvertes. Étape « Complete Ring » et panier non atteints (voir limites) ; `/cart` est interdit par robots.txt.
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| Accueil du constructeur | « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection » ; rangées « Shop by Ring Style » (13), « Shop by Metal Type » (4), « Shop by Diamond Shape » (10) ; 8 bagues « Starting at » [V] | /design-your-ring/ |
| 1A. Monture d'abord : liste | 247 montures, filtres Filters, Sort by (Best Sellers), Metal, Price Range, Advanced Filters, onglets de style (Studio, Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique), pastilles blanc / jaune / rose par carte [V] | `#/ring` |
| 1B. Fiche monture | type de diamant, forme (10), poids, style de bague, côté, couronne, métal, métal de couronne, gravure, bande assortie, « Choose This Setting • prix », « Save Your Design » [V] | `#/ring/RB001-rosalie…` |
| 2. Diamant | inventaire de diamants avec filtres ; fiche diamant (4 C, certification, spécifications, 360°) ; « Select This Diamond • prix » [V] | `#/diamond` |
| 3. Complete Ring | non atteint : le clic automatisé sur une carte de monture n'a pas ouvert la fiche (voir limites) [non testé] | n/a |

L'ordre est inversé selon le point d'entrée : la barre d'étapes devient « 1 Choose Diamond, 2 Choose Settings, 3 Complete Ring » ou « 1 [monture] - prix, 2 Choose Diamond, 3 Complete Ring » [V].

## Contrôles vérifiés

Les actions sur le constructeur se répercutent dans l'adresse (`dia_origin`, `dia_shape`, `dia_size`, `style_code`, `pri_comp_metal`…). Dans les essais, l'interface réagit avec un décalage de plusieurs secondes : le résultat d'un clic n'apparaissait parfois qu'après le clic suivant, donc les prix ci-dessous sont les valeurs lues et non une grille complète.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start with a Setting | bouton | ouvre la liste des montures (`#/ring`), origine synthétique par défaut (`dia_origin=LGN`) | n/a | fonctionne |
| Start with a Diamond | bouton | ouvre l'inventaire de diamants (`#/diamond`), préfiltré : synthétique, 2 ct, rond, couleur et pureté de milieu de gamme | n/a | fonctionne |
| Design with our Studio Collection | bouton | ouvre la fiche « Cathedral Plain Basket Lab Grown Diamond Setting in 14K Yellow Gold » (collection « Studio ») | 1 417 $ (monture seule) | fonctionne |
| Solitaire (style) | bouton | filtre `collections=SOLITAIRE` | n/a | fonctionne |
| Platinum (métal) | bouton | filtre `pri_comp_metal=PT-WG` | n/a | fonctionne |
| Oval (forme) | bouton | bascule vers l'inventaire de diamants ovales (`dia_shape=OVA`) | n/a | fonctionne |
| Natural / Lab Grown | bascule | Natural passe `dia_origin` à `GNU` ; Lab Grown revient à `LGN` | prix monture inchangé | fonctionne |
| Forme : Round, Oval, Marquise, Radiant, Emerald | boutons | l'adresse change (`RND`, `OVA`, `MAR`, `RAD`, `EMR`) | 1 417 $ monture seule (inchangé) | fonctionne |
| Forme : Pear, Heart, Elongated Cushion, Princess, Square Cushion | boutons | clics sans effet visible dans la fenêtre d'essai (3 s) [I : indisponibles pour cette monture ou lents] | n/a | résultat incertain |
| Poids : 1 ct, 2 ct, 3 ct, 5 ct | boutons | 3 ct prend effet (`dia_size=300`) ; 1 ct et 5 ct sans effet visible dans l'essai | monture seule inchangée | partiel |
| Style de bague : Classic, Knife Edge, Cathedral, Split, Twist | boutons | le `style_code` change (`CCD`, `NKE`, `EMS`, `PKR`) | monture seule vue à 1 417 $, 1 234 $ et 1 494 $ selon le style | fonctionne (lent) |
| Côté : Pavé, Channel, Prong, Plain, Beadset | boutons | cliquables ; effet prix non isolé | non établi | non vérifié en détail |
| Couronne : Basket, Diamond Basket, Hidden Halo, Bezel, Six Prong, Halo | boutons | cliquables ; effet non isolé | non établi | non vérifié en détail |
| Métal (14 k ×3, 18 k ×3, platine) et métal de couronne | pastilles | 7 pastilles chacune ; l'adresse porte `14-YG`, `PT-WG`… | non mesuré | non testé en détail |
| Gravure (champ + 3 polices « Aa ») ; « 0 / 18 » caractères | champ | non rempli ; limite de 18 caractères lue [V] | n/a | non testé |
| Matching Band : No Band, Single | boutons | cliquables ; effet non isolé | non établi | non vérifié en détail |
| 360° Experience, miniatures, plein écran | boutons | « Interactive Experience, Drag to Rotate » affiché ; 9 miniatures dont une vidéo (icône lecture) et une photo sur la main [V sur capture] | n/a | présents |
| Save Your Design | bouton | non cliqué (peut demander une adresse e-mail) | n/a | non testé |
| Choose This Setting • prix | bouton | non cliqué avec succès : sa présence est vérifiée | 1 417 $ | présent |
| Diamants : Filters, Sort by, Diamond Type, Lab Certification (GIA, IGI, GCAL), forme (10), taille (min/max), Advanced Filters | contrôles | listés ; inventaire de 67 034 puis 81 160 diamants selon le chargement, 4 058 pages ; cartes avec photo, carat, couleur, taille, pureté, prix | de 637 $ (1,00 ct poire) à plus de 3 000 $ vus | listés ; filtres non appliqués un par un |
| Carte diamant « 1.06 ct. Round » | carte | ouvre la fiche : 4 C (échelles couleur, pureté, taille), « GCAL Certification », « Specifications », 360°, « Select This Diamond • $744 » | 744 $ | fonctionne |
| Select This Diamond | bouton | passe à la liste des montures avec « 1.06 ct. Round Lab Grown - $744 » en en-tête, bouton « Change » et « View » | 744 $ | fonctionne |
| Carte de monture (« Amara », « Starting at $1,411 ») | carte | clic automatisé sans effet (la fiche ne s'est pas ouverte) | n/a | non réussi |
| Pastilles blanc, jaune, rose sous chaque carte | boutons | présents ; non cliqués | n/a | non testés |
| BRIDAL, JEWELRY, WATCHES, DIAMONDS, ABOUT, recherche, favoris, compte | liens | listés ; recherche `/search/` et compte interdits ou hors parcours ; catalogue `/catalog/…` non ouvert | n/a | non testés |
| Téléphone (601) 898-3999, 3 magasins, appointments, financing, warranty | liens | pages appointments, financing, warranty, lab-grown lues | n/a | lues |

## Options disponibles

- **Origine** : synthétique (par défaut) ou naturel, par bascule [V].
- **Formes** : 10 (Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion) [V].
- **Poids** : 1, 2, 3, 5 ct sur la fiche monture ; saisie min/max dans l'inventaire [V].
- **Métaux** : or blanc, jaune, rose en 14 k et 18 k, platine [V]. 7 pastilles par réglage, deux réglages indépendants (bague et couronne).
- **Styles de bague** : Classic, Knife Edge, Cathedral, Split, Twist ; **côtés** : pavé, serti rail, serti griffes, uni, perlé ; **couronnes** : panier, panier diamant, halo caché, serti clos, six griffes, halo [V].
- **Familles de montures** : Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique [V] ; collection « Studio » (propre au site, montures à composants) [V].
- **Gravure** : jusqu'à 18 caractères, 3 polices proposées [V].
- **Bande assortie** : sans ou simple [V].
- **Taille de doigt** : aucun contrôle trouvé [V, absence dans la fiche].
- **Certificats** : GIA, IGI, GCAL (filtre) [V].

## Prix, délais, retours, garanties

- **Prix** : la monture affiche « (Setting Only) », le diamant est ajouté séparément. Montures « Starting at » de 1 160 $ à 1 929 $ sur l'accueil ; monture Studio vue à 1 417 $ ; diamants de 637 $ à plus de 3 000 $ vus ; page de diamants synthétiques IGI : 1,00 ct à 400 $ [V]. Total = monture + diamant ; décomposition par composant : non vue.
- **Délai** : non trouvé sur les pages lues (constructeur, financement, garantie) [V pour l'absence].
- **Retours** : non trouvé ; conditions générales non lues [non testé].
- **Garantie** : garantie à vie sur la fabrication pour les bijoux achetés en magasin ; le sur-mesure y est inclus avec un examen préalable ; exclusions : perte, accident, usure normale (griffes usées), réparations par un autre bijoutier [V, /product-care/jewelry-warranty/].
- **Financement** : carte Synchrony, 12 mois de financement spécial à partir de 500 $ sous réserve d'accord de crédit [V, /customers/financing/].
- **Livraison, frais, moyens de paiement** : non vus [non testé].

## Confiance et service

- **Certificats** : bandeau « GIA Graded », « IGI Certified », « GCAL Verified », « 100% conflict-free » sur l'accueil du constructeur ; diamant vu avec certification GCAL ; liste synthétique de la page diamants avec IGI [V].
- **Libellé du synthétique** : « Lab Grown » (dans le titre des fiches et dans le filtre) ; collection « Surreal » propre au site [V].
- **Langues, devises** : anglais, dollars (appel `currency=USD`) [V].
- **Avis clients** : aucun vu sur les pages lues [V pour ces pages].
- **Rendez-vous et contact** : 3 magasins, téléphone, formulaire de rendez-vous (First Name, Phone, Email, magasin, date : non rempli) [V].
- **Preuves de fabrication** : rien sur la fabrication ; le constructeur parle de « Design with our Studio Collection » et annonce « watch your dream ring come to life before it's ever crafted » [V]. La 360° et la vidéo sont des rendus et médias de catalogue [I].
- **Performance** : accueil du constructeur : plus grand élément à 2,76 s (ordinateur) et 2,98 s (iPhone) ; fiche monture : première grande image à 2,6 s dans les deux cas ; inventaire de diamants : 4,2 s (ordinateur) et 3,5 s (iPhone) [V, une exécution, sans limitation de réseau].

## Points forts à retenir pour JR Diamond

1. **Prix de la pierre et de la monture visibles à chaque étape** : « (Setting Only) » puis « Select This Diamond • $744 » ; le client voit le total se construire [V, fiches monture et diamant].
2. **Choix du diamant réel dans un inventaire** avec filtre de certificat (GIA, IGI, GCAL), 4 C expliquées et vue 360° du diamant [V]. Pour JR Diamond : la « pierre filmée » répond au même besoin.
3. **Configuration partageable par adresse** : l'état complet (forme, poids, style, métal) est dans l'adresse, plus « Save Your Design » [V].
4. **Deux points d'entrée** (monture ou diamant d'abord) avec barre d'étapes qui se réordonne [V].
5. **Gravure intégrée à la configuration** (18 caractères, 3 polices) [V].
6. **Garantie à vie et financement sur 12 mois** affichés [V, pages lues].

## Défauts observés

- Interface lente à répondre : plusieurs clics n'ont été pris en compte qu'après plusieurs secondes ou n'ont pas eu d'effet visible dans l'essai [V, avec l'incertitude du pilotage automatisé].
- Nombre de diamants différent d'un chargement à l'autre (67 034, puis 81 160) [V].
- Le constructeur est construit en composants isolés (`shadow DOM`) : les boutons « Choose This Setting » ne sont pas détectables par le relevé standard, et les étiquettes de métaux sont répétées (« 14K », « 14K », « 14K ») sans nom de couleur lisible [V].
- Le prix « Starting at » de l'accueil ne précise pas la pierre incluse ; la monture Studio est vendue « Setting Only » : le prix total n'apparaît qu'après le choix du diamant [V].
- Aucune photo de fabrication, aucun délai, aucune taille de doigt dans le constructeur [V].
- Le catalogue classique (`/catalog/…`) serait redirigé vers `/verify.html` (anti-robot) d'après l'inventaire [I, non reconstaté].

## Limites de l'audit

- Étape finale « Complete Ring » et panier non atteints : le clic sur une carte de monture n'a pas ouvert la fiche en pilotage automatisé ; `/cart` est interdit par robots.txt. Frais de livraison, délai, moyens de paiement, récapitulatif : non vus.
- Chaque option de la fiche monture (côté, couronne, métaux, bande) n'a pas été isolée : l'interface répond avec retard et mon relevé d'état était décalé d'un clic. Les prix de chaque métal ne sont donc pas établis.
- `/catalog/…` et `/verify.html` n'ont pas été ouverts ; aucune tentative de contournement.
- Compte, recherche (`/search` interdit), formulaires (rendez-vous), conditions générales et retours non lus.
- Une seule exécution de chaque mesure de temps.
- Pages lues avec un robots.txt vérifié : `/design-your-ring/`, `/diamonds/lab-grown/`, `/customers/financing/`, `/product-care/jewelry-warranty/`, `/company/appointments/` autorisées.

## Sources

- https://www.traditionaljewelers.net/design-your-ring/ (et ses adresses `#/ring`, `#/diamond`)
- https://www.traditionaljewelers.net/diamonds/lab-grown/
- https://www.traditionaljewelers.net/customers/financing/
- https://www.traditionaljewelers.net/product-care/jewelry-warranty/
- https://www.traditionaljewelers.net/company/appointments/
- https://www.traditionaljewelers.net/robots.txt
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/traditional-jewelers/`
