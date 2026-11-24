# Audit : INDIVI (Lettonie)

- **Site** : INDIVI, https://indivi.lv/lv/ (PrestaShop ; salons à Vilnius, Riga, Madrid ; société UAB « Ankoras », filiale lettone, pied de page et page paiement).
- **Page de départ** : https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali (liste), puis fiche https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali/amazonia-saderinsans-gredzens-ar-briljantiem.html
- **Date** : étude du 15/11/2026 ; contrôles réalisés le 24/11/2026.
- **Appareils** : ordinateur (Chromium 1366 × 900) et affichage iPhone 13 (liste des contrôles et temps seulement).
- **Statut** : **partiel**. Parcours complet jusqu'à la page de finalisation (étape 3, bouton « Ajouter au panier » vu) ; le panier lui-même n'a pas été ouvert ; plusieurs contrôles non actionnés (voir « Limites »).
- Marques : V vérifié, I inféré, S supposé. Langue : tout le site est en letton ; libellés traduits par moi.

## Parcours

| Étape | Options (V) |
|---|---|
| Liste des montures | Rubriques : Classiques, Modernes, Halo, Autres formes, Trois diamants, Hommes, Pierres de couleur ; 159 montures « modernes » sur 4 pages ; tri par prix croissant ou décroissant |
| 1. Monture (« Ietvars ») | Métal : or 14 k blanc, jaune, rose ; or 18 k blanc, jaune, rose ; platine 950 (« fabrication 20 jours ouvrés »). Taille de doigt 14 à 24 par demi-point (21 valeurs). Prix de la monture seule. Bouton « Ajouter une pierre » |
| 2. Diamant (« Dimants ») | 5 onglets : naturels blancs, naturels de couleur, synthétiques blancs, synthétiques de couleur, pierres précieuses. Filtres : forme (10), carat (0,10 à 5,00), couleur (D à L), pureté (FL à I1), taille (5 niveaux), prix (0 à 30 000 €), « plus de filtres » (certificat, polissage, symétrie, fluorescence, délai, avec image, avec vidéo 360°). Vue tableau ou grille. Bouton « Ajouter au produit » par pierre |
| 3. Finalisation (« Pabeigts ») | Récapitulatif : monture, métal, pierre (carat, forme, couleur, pureté, taille), date de départ, délai de livraison, total. Boutons « Changer » (monture et pierre) et « Ajouter au panier » |

## Contrôles vérifiés

Mesures sur la fiche « Amazonia » (monture 3 pierres, 0,12 ct de petits diamants sur les côtés). Prix en € TVA comprise (I).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal : or 14 k blanc / jaune / rose | pastille (radio) | Change l'adresse (#/metalas-…) et le prix | 869 € (les trois couleurs identiques) | OK (V) |
| Métal : or 18 k blanc / jaune / rose | pastille | Idem | 1 070 € | OK (V) |
| Métal : platine 950 | pastille | Idem, affiche « fabrication 20 j. ouvrés » | 1 550 € | OK (V) |
| Image selon le métal | visuel | Non vérifié : mon contrôle d'image n'a pas permis de comparer les rendus (capture `amazonia_desktop_view.jpg` montre une photo en platine) | — | Non testé |
| Taille de doigt (liste 14 à 24) | liste | Sélection 17,5 puis 24 testée ; aucun changement de prix sur la monture | 0 € | OK (V) |
| Vidéo de la fiche | lecteur | Boutons Pause, Muet, Plein écran ; durée 0:31 sur Amazonia (V), chargement affiché 0 % au départ | — | Non actionné (lecture) |
| Flèches de galerie (précédent, suivant) et 5 vignettes | boutons | Présents ; non actionnés | — | Non testé |
| « Pielaiko ! » (« Essaie ») | bouton | Présent deux fois sur la fiche ; clic expiré (élément recouvert par la bannière de cookies à la première tentative, puis non rejoué). Fonction inconnue : essayage virtuel ou prise de rendez-vous (S) | — | Non testé |
| « Ajouter une pierre » (PIEVIENOT DĀRGAKMENI) | bouton | Passe à l'étape 2 (`?step=stone&stone_type=natural_white_diamond`) en environ 5 s | Prix monture reporté en tête (869 €) | OK (V) |
| Onglet naturels blancs | onglet | 306 509 pierres | — | OK (V) |
| Onglet naturels de couleur | onglet | 955 pierres | — | OK (V) |
| Onglet synthétiques blancs (« Lab. Balti ») | onglet | 245 966 pierres ; bulle d'info « i » présente | — | OK (V) |
| Onglet synthétiques de couleur (« Lab. Krāsaini ») | onglet | 13 851 pierres | — | OK (V) |
| Onglet pierres précieuses (« Dārgakmeņi ») | onglet | Le compteur n'a pas bougé (13 851) à la mesure ; contenu non vérifié | — | Non testé (I : latence de la liste) |
| Forme (10 : rond, ovale, princesse, émeraude, Asscher, coussin, marquise, poire, radiant, cœur) | cases à cocher (icônes) | Liste lue dans le code ; clic sur « ovale » : délai de 30 s dépassé dans mon script, effet non confirmé | — | Non confirmé |
| Pureté VS1 (sur synthétiques blancs) | case | 245 966 → 64 954 résultats en 3,6 s | tri par prix | OK (V) |
| Couleur F (en plus) | case | 64 954 → 8 027 résultats en 4,2 s ; première pierre : 0,11 ct F VS1 IGI, 199 € | — | OK (V) |
| Carat, taille, prix (curseurs) | curseurs | Présents (0,10 à 5,00 ct ; 0 à 30 000 €) ; non actionnés | — | Non testé |
| Taille (Lielisks, Izcils, Ļoti labs, Labs, Vājš) | cases | Présentes ; non actionnées | — | Non testé |
| « Plus de filtres » | case | Ajoute les clés `certificate_lab`, `polish`, `symmetry`, `flouresence`, `delivery_time`, `image`, `v360` (lues dans le code) | — | Lu, non actionné |
| Case « Vidéo » (360°) | case | Réduit la liste de 306 462 à 211 592 | — | OK (V) |
| Case « Images » | case | Réduit à 223 511 (cases peut-être cumulées, non démêlées) | — | OK (V) |
| Grille (Režģis) / Tableau (Tabula) | bascule | Le tableau liste forme, carat, couleur, pureté, taille, certificat, prix par ligne ; la grille affiche une photo « exemple » | — | OK (V) |
| « Plus d'informations » (par pierre) | lien | Élément masqué (`<p class="hide">`) : clic impossible en automatique | — | Non testé |
| « Ajouter au produit » (par pierre) | bouton | Passe à l'étape 3 (`?step=complete&stone_type=natural_white_diamond`) | +213 € pour la pierre choisie | OK (V) |
| « Changer » (monture, pierre) | bouton | Présents à l'étape 3 ; non actionnés | — | Non testé |
| « Ajouter au panier » | bouton | Présent à l'étape 3 (V) ; deux tentatives de clic automatisé échouées (élément non visible), panier non ouvert | — | Non testé |
| Appel (+371 272 66999), WhatsApp (wa.me/37127266999), « Écrivez-nous », « Visitez le salon », « Support en ligne » | liens, boutons | Présents partout ; pas ouverts | — | Non actionnés (règle : pas de chat) |
| Bannière Black Friday | lien | Compte à rebours jusqu'au 28/11/2026 23:59:59 | remises annoncées | Lu |
| Bandeau cookies (« Autoriser tout », « Personnaliser ») | boutons | « Autoriser tout » cliqué pour accéder à la page | — | OK (V) |
| Lettre d'information (e-mail, case, « Suivant ») | formulaire | Non rempli | — | Non testé (règle) |
| Sélecteur de langue (« Latvian ») | bouton | Présent ; langues proposées non ouvertes | — | Non testé |

## Options disponibles

- **Métaux** : or 14 k (585) blanc, jaune, rose ; or 18 k (750) blanc, jaune, rose ; platine 950 (V).
- **Taille de doigt** : 14 à 24 par demi-point (V, lue dans la liste ; échelle non précisée à l'écran).
- **Pierre** : naturelles blanches, naturelles de couleur, synthétiques blanches, synthétiques de couleur, pierres précieuses (V, 5 onglets) ; 10 formes ; 0,10 à 5,00 ct ; couleur D à L ; pureté FL à I1 ; taille 5 niveaux ; certificat (IGI vu sur les premières lignes ; liste complète non ouverte).
- **Gravure** : non trouvée dans le parcours (I).
- **Corps de bague, griffes, pavage** : pas de choix ; la monture est celle du modèle (V).
- **Rubriques de catalogue** : saderināšanās (fiançailles) 159 montures modernes, halo, trois diamants, autres formes, hommes ; alliances 270 modèles (V, liste « laulību gredzeni » : de 457 € à plus ; page FAQ : « de 314 € », puis 1 500 à 4 700 € avec diamants) ; bijoux, diamants, « production individuelle ».

## Prix, délais, retours, garanties

| Sujet | Constat (V) |
|---|---|
| Affichage du prix | Prix de la monture, puis prix de la pierre, puis total à l'étape 3 (869 € + 213 € = 1 082 €). Mention « le prix est celui de la monture seule » (étape 1) |
| Composition du prix | Pas de décomposition matière, façon, marge |
| Délai annoncé | Fiche : « le délai se calcule après le choix de la pierre » ; étape 3 : « prêt à l'envoi le 16 décembre 2026 » et « livraison 1 à 2 jours ouvrés ». Page livraison : « 10 à 15 jours ouvrés après paiement ». Platine : 20 jours ouvrés. Trois chiffres différents sur le site |
| Livraison | Gratuite en Lettonie (coursier Express pasts), assurée ; Union européenne 48 €, 3 à 5 jours ouvrés ; retrait au salon (Panorama Plaza). Emballage cadeau offert |
| Retours | 30 jours, remboursement 5 à 8 jours ouvrés après contrôle ; refus des bijoux portés ou modifiés ; **refus des pièces faites sur mesure** (« hors catalogue du site »). Code de retour, emballage, certificat obligatoires. Une mise à taille offerte dans les 60 jours, seulement pour les bagues en salon ; les anneaux d'éternité ne peuvent être changés de taille |
| Garantie | À vie contre les défauts de fabrication ; exclut l'usure, la perte de pierre, la réparation par un tiers |
| Paiement | Virement bancaire ou Paysera (page « Paiement ») ; « achat par mensualités » : page vide (« information en préparation ») mais la fiche affiche « Achetez à crédit avec Inbank » |
| Certificats | IGI sur les premières lignes ; « chaque diamant est certifié par une organisation indépendante » (page diamants) |

## Confiance et service

- Avis : widget Google, 5 sur 5 sur 5 avis visibles (V) ; page « Atsauksmes » liée (non ouverte).
- Salons à Vilnius, Riga et Madrid (V, en-tête) ; téléphone, WhatsApp, support en ligne, mail (V).
- Production individuelle : page « Individuālā ražošana » : designers 3D, imprimantes 3D, maîtres de plus de 20 ans d'expérience (V). Aucune photo ni vidéo de fabrication pour la commande en ligne, pas de suivi de commande (I : non trouvés).
- Liens d'aide en tête de liste : « Sur quel doigt la porter », « Informations pour l'acheteur », « Conseils vidéo » (V, non ouverts).

## Points forts à retenir pour JR Diamond

1. **Stock de pierres filtrable avec prix en direct** : 306 509 naturels et 245 966 synthétiques, filtres jusqu'à la fluorescence, prix additionnés (preuve : étapes 2 et 3, 1 082 € au total).
2. **Naturel et synthétique côte à côte** dans le même parcours, sans changer de site (preuve : onglets de l'étape 2).
3. **Le parcours se découpe en 3 étapes numérotées** avec le prix cumulé en haut (preuve : bandeau 1 Monture 869 € / 2 Diamant / 3 Finalisation).
4. **Date de départ affichée à l'étape 3** (16 décembre 2026) : reprend l'engagement de délai (preuve : récapitulatif).
5. **Vidéo de la monture sur la fiche** (31 s) : preuve que le modèle existe (preuve : lecteur de la fiche Amazonia).

## Défauts observés

- **Pas de 3D ni de 360° de la bague**, photo et vidéo seulement (V).
- **Délais contradictoires** : 1-2 jours, 10-15 jours et une date de départ au 16/12 (V, trois pages).
- **Mise à taille offerte seulement pour les bagues en salon** ; **le sur-mesure n'est pas repris** (V).
- **Prix d'une monture identique en or jaune, blanc et rose** : pas de différence de métal à l'intérieur d'un titre (V).
- **Page « mensualités » vide** alors que la fiche renvoie vers Inbank (V).
- **Photo d'exemple** à la place de la photo de la pierre dans la liste (« Parauga foto ») (V).
- **Image principale lente sur iPhone** : 5,98 s contre 1,71 à 2,23 s sur ordinateur (V).
- Bandeau de cookies qui gêne les clics automatiques ; bandeau Black Friday en tête de chaque page.

## Limites de l'audit

- Panier non ouvert ; frais de livraison, taxes et moyens de paiement du panier non vérifiés (seulement les pages d'information).
- Plusieurs contrôles non actionnés : curseurs, taille de pierre, formes (délai dépassé), « Plus d'informations », « Changer », vignettes, flèches, « Pielaiko ! », chat, WhatsApp.
- Un seul modèle audité (Amazonia). Autres montures, halo, trois diamants, alliances non essayées.
- Comptages de résultats : la liste se rafraîchit avec un retard ; je n'ai gardé que les chiffres confirmés par un second relevé.
- Version lettone seulement ; hébreu, anglais, russe non vus.

## Sources

- https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali (24/11/2026)
- https://indivi.lv/lv/saderinasanas-gredzeni-visi/musdienigi-un-aktuali/amazonia-saderinsans-gredzens-ar-briljantiem.html (étapes 1 à 3)
- https://indivi.lv/lv/precu-piegade-un-atgriesana ; /lv/apmaksa ; /lv/indivi-garantija ; /lv/individuala-razosana ; /lv/pirkums-pa-dalam
- https://indivi.lv/lv/laulibu-gredzeni-visi (extrait de recherche, prix des alliances)
- robots.txt : https://indivi.lv/robots.txt (PrestaShop ; interdit panier, compte, commande, recherche)
