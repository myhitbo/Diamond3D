# Audit — Buchroeders Jewelers (Columbia, Missouri)

- **Site** : Buchroeders Jewelers (Menser & Co., depuis 1896), showroom au 1021 E Broadway, Columbia, MO
- **Adresse auditée** : https://brdiamonds.com/pages/custom-engagement-ring
- **Date** : 15/11/2026 (session du 24/11/2026 pour la rédaction)
- **Appareils** : Chromium ordinateur 1366×900 (en-US) ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur « Setting → Diamond → Ring » fonctionne de bout en bout dans notre navigateur (contrairement au blocage signalé). Le panier et l'ajout au panier n'ont pas été ouverts : `/cart` est interdit par robots.txt.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse (paramètre `stage=`) | Options observées [V] |
|---|---|---|
| 0. Page de départ | `/pages/custom-engagement-ring` | Filtres Style, Prix, Métal, Forme ; tri ; 24 montures, puis 48 après « Load more » |
| 1. Choose a Setting | `stage=Select+Setting&…&id=…&variant=…` | Fiche de monture : forme, métal, prix de la monture seule, « Try it on », « Share », « Save this design for later », « Select Setting » |
| 2. Choose a Diamond | `stage=Add+Diamond&…&activeTab=Natural|Lab+Grown` | Onglets Natural / Lab Grown, forme, carats, couleur, pureté, taille (cut), prix, filtres avancés, tri, liste/grille ; 92 522 diamants naturels, 175 058 synthétiques |
| 2b. Fiche diamant | `…&viewDetailsId=…&stoneType=diamond` | Certificat (IGI ici), mesures, table, profondeur, polish, symétrie, fluorescence, pédagogie 4 C, « Select diamond », « Connect with an expert » |
| 3. Complete your Ring | `stage=Complete+Ring&…&ringRegion=UNITED_STATES` | Récapitulatif monture + diamant, taille de doigt (liste), total, bouton « Select ring size » (non actionné), « Try it on », « Connect with an expert » |
| 4. Panier | `/cart` | **INTERDIT par robots.txt** (règle `Disallow: /cart`) : non ouvert |

## Contrôles vérifiés

Page de départ : 141 contrôles listés sur ordinateur, 109 sur iPhone (`controls.cjs`) ; les contrôles de navigation et de pied de page sont regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Style : Bezel, Diamond Band, Halo, Hidden Halo, Nature | case (filtre) | Filtre la liste ; l'adresse reçoit `styles=halo`. « Halo » seul donne 2 résultats | – | OK |
| « More Styles » | bouton | Ajoute Side Stone, Solitaire, Three Stone, Vintage (10 styles en tout) ; devient « Fewer Styles » | – | OK |
| Métal : 14K rose/blanc/jaune, 18K rose/blanc | pastille | Liste des montures filtrée | – | Cliquée via libellé : « 14K Rose Gold » introuvable par texte, non confirmée sur la liste |
| « More Metals » | bouton | Ajoute 18K jaune, 18K rose, 950 Platinum | – | OK |
| Forme : Round, Oval, Emerald, Radiant, Princess | pastille | `shapes=round` ; Halo + Round = 1 résultat | – | OK |
| « More Shapes » | bouton | Ajoute Pear, Cushion, Heart, Asscher, Marquise (10 formes) | – | OK |
| Prix mini / maxi (champs texte $1,500 – $50,000) | champ | Saisie de 2000 → `setting_price_min=2000&setting_price_max=50000` ; avec Halo + Round, **0 résultat** (pas de message vide relevé) | – | OK, état vide non expliqué [V] |
| Tri « Price (low to high) » | liste | Présent ; non changé sur cette étape | – | Non testé (même tri testé à l'étape 2) |
| Carte monture (lien) | lien | Ouvre la fiche (`stage=Select+Setting&…&id=`) | prix de la monture seule | OK |
| « Try it on » (carte et fiche) | bouton | Ouvre une fenêtre (iframe) vers `sparkle.clouddeploy.in/capturing-image` avec permissions caméra/micro : essayage virtuel. Pendant qu'elle est ouverte, elle bloque les clics de la page | – | S'ouvre ; **caméra non autorisée, essayage non testé** |
| « Load more » | bouton | 24 → 48 cartes | – | OK |
| Fiche : forme (Round, Princess, Cushion, Oval, Pear, + « More Shapes » : Emerald, Heart, Radiant, Asscher, Marquise) | pastille | Change la variante (`variant=` change), les photos (`…-PR_ROSE_DOWN…`) et le prix | Bezel Set Solitaire, rose 14 k : rond 1 600 $, princesse 1 800, coussin 1 830, ovale 2 040, poire 1 650, cœur 1 660, marquise 2 000 | OK |
| Fiche : métal (14K blanc/jaune/rose, 18K blanc/jaune/rose, 950 Platinum) | pastille | Change la variante et les photos (`_YELLOW_`, `_WHITE_`, `_ROSE_`) | 14 k : 1 600 $ (jaune, rose) ; platine : 1 810 $ (rond) ; 18 k non cliqués séparément (libellé non retrouvé) | Platine, jaune, rose OK ; 18 k non confirmé |
| « Share » | bouton | Présent | – | Non testé (ouvre un partage, [S]) |
| « Save this design for later » | bouton | Clic : aucune fenêtre lisible détectée (seul un style SVG remonte) ; aucune saisie faite | – | Effet **non établi** |
| « Select Setting » | bouton | Passe à l'étape diamant en conservant la monture (adresse `settingId`, `settingVariantId`) | monture 1 600 $ | OK (échec du 1er essai : clic bloqué par une fenêtre ouverte) |
| Diamant : onglets Natural / Lab Grown | onglet | Natural : 92 522 ; Lab Grown : 175 058 ; `queryLabGrown=true` | – | OK |
| Diamant : forme | pastille | `shapes=round` ajouté (clic sur « Round ») ; les autres formes de cette barre n'ont pas été listées | – | Partiel |
| Diamant : carats (champs 0.5 – 6) | champ | Présents ; non modifiés | – | Non testé |
| Diamant : couleur White/Fancy, D à M | bouton | « G » : 175 058 → 7 615 résultats (`color_min=G&color_max=G`) | – | OK |
| Diamant : pureté FL à I2 | bouton | « VS2 » : 7 615 → 938 | – | OK |
| Diamant : taille « 8X, Ideal, Excellent, Very Good, Good » | bouton | « Ideal » : 938 → 601 (`cut_min=ID`) | – | OK |
| Diamant : prix ($1 – $5 000 000) | champ | Présent ; non modifié | – | Non testé |
| « Advanced Filters » | bouton | Ouvre : Table, Ratio, Polish, Symmetry, Fluorescence (None à Very Strong), Certificate (GIA, IGI), Labgrown Type (HPHT, CVD, IIA) | – | OK (options lues, non actionnées) |
| Tri (liste) | liste | Choix : prix croissant/décroissant, carat croissant/décroissant. « Price high to low » sélectionné sans variation du compte (attendu) | – | OK, ordre non relu |
| « List » / « Grid » | bouton | Bascule d'affichage | – | OK |
| Carte diamant (lien) | lien | Fiche : certificat IGI (numéro masqué `5632*****`), mesures 5,23×5,26×3,28 mm, table 55 %, profondeur 62,5 %, lien « View » du PDF | 218 $ le diamant 0,55 ct M I1 | OK |
| « Click to view certificate » / « View » (PDF) | lien | Non ouverts | – | Non testé |
| « Select diamond » | bouton | Passe à l'étape 3 ; total monture + diamant | 1 600 $ + 218 $ = 1 818 $ | OK |
| « Remove » (monture, diamant) | lien | Présents ; non actionnés | – | Non testé |
| « Select Ring Size » | liste | Options : « Not sure » (taille US 6,0 par défaut), puis 3,00 ; 3,25 ; 3,50 ; 3,75 ; 4,00 ; 4,25 … par quarts de taille | – | OK |
| « Select ring size » (gros bouton bleu) | bouton | Libellé tant qu'aucune taille n'est choisie ; ajoute probablement au panier [S] | – | **Non actionné** : panier interdit par robots.txt |
| « Connect with an expert » | bouton | Présent aux 3 étapes ; non actionné (ouvre un contact, [S]) | – | Non testé |
| « Text us » (bouton flottant) | bouton | Visible sur la capture ; non ouvert (aucune conversation ouverte) | – | Non testé |
| Galerie de la fiche ring (flèches, miniatures lecture) | média | Photos de la bague (dessus, dessous), deux miniatures avec icône lecture (vidéo de la bague, vidéo du diamant), vues « _3D » | – | Visible sur capture ; lecture non lancée |
| Avis Google (carrousel, « Show more ») | carrousel | Texte lu, 1 943 avis cités | – | OK |
| Bandeau « Make The Ring Happen → » | lien | Mène à `/pages/financing-or-15-percent-back-event-2026` | – | Non ouvert |
| Liens de pied de page (consultation, réparation, FAQ, financement, protection, rendez-vous Calendly ×3, réseaux) | lien | Présents ; pages de politique lues (voir plus bas) | – | Calendly non ouvert |

## Options disponibles

- **Styles de monture** : Bezel, Diamond Band, Halo, Hidden Halo, Nature, Side Stone, Solitaire, Three Stone, Vintage (+ « Nature »).
- **Métaux** : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine 950.
- **Formes de monture et de pierre** : Round, Oval, Emerald, Radiant, Princess, Pear, Cushion, Heart, Asscher, Marquise.
- **Montures** : environ 48 en catalogue (24 puis « Load more »), de 1 600 $ à 2 740 $ le prix de la monture seule (relevé sur les 24 premières).
- **Diamants** : naturels et synthétiques (« Lab Grown » ; types HPHT, CVD, IIA), couleur D à M et Fancy, pureté FL à I2, taille 8X/Ideal/Excellent/Very Good/Good, table, ratio, polish, symétrie, fluorescence, certificat GIA ou IGI, prix.
- **Taille de doigt** : « Not sure » (US 6,0 par défaut) puis 3,00 à plus de 4,25 par quarts de taille (liste coupée dans la capture ; fin de liste non relevée).
- **Pas observés** : choix du nombre de griffes, pavage, gravure, corps de bague ; pas de choix de carat sur la monture (la pierre est choisie à l'étape 2).

## Prix, délais, retours, garanties

- **Prix** [V] : affiché à chaque étape en USD ; la fiche dit « This price is for the Setting only ». Étape 3 : monture 1 600 $ + diamant 218 $ = « Complete ring $1,818 USD ». Aucune décomposition main-d'œuvre / métal / marge. Changer de forme ou de métal change le prix de la variante.
- **Délais** [V] (`/pages/custom-engagement-rings-faq`) : « 5-6 weeks » de bout en bout pour une bague sur mesure ; expédition « generally within 3-5 business days from the receipt of payment » (`/pages/shipping-and-returns`). Aucun délai n'est affiché sur le constructeur lui-même ; [I] le délai pour le constructeur n'est pas précisé.
- **Retours** [V] : bijoux 15 jours après la livraison (étiquette postée dans les 15 jours, état neuf, retour à la charge du client). La FAQ du sur-mesure cite une « Gotta Love it Guarantee » : retour ou échange sous **30 jours**, avec crédit du prix d'origine pour une nouvelle monture (pas un remboursement). Les deux textes diffèrent (15 j contre 30 j) sans que le site dise lequel s'applique à une bague du constructeur [V]. Montres : 4 jours. Affirm : pas de frais si retour sous 30 jours.
- **Garanties** [V] : programme interne « Assurance Jewelry Protection » : réparations courantes, perte/vol/disparition, franchise zéro, prime annuelle, réduction de 10/15/20 % pour 2/3/4+ ans ; le montant de la prime n'est pas affiché. Réparations, remise à taille et entretien en magasin.
- **Certificats** [V] : IGI sur le diamant observé (naturel de 0,55 ct) ; filtre GIA / IGI. Numéro de certificat masqué, PDF accessible par « View ».
- **Libellé du synthétique** [V] : « Lab Grown » (onglet et pages) ; le site précise aussi « Labgrown Type : HPHT, CVD ».
- **Financement** [V] : Wells Fargo et Affirm, à partir de 300 $ ; offre « Special Financing or 15% Back Toward Your Ring ».
- **Livraison** [V] : assurée, avec confirmation de signature. Frais non indiqués sur la page lue ; étape panier non vue.
- **Moyens de paiement** : non vus (panier interdit). Dans la requête réseau de la page : un point d'accès « accelerated_checkout » (Shopify), sans lecture du contenu [I].

## Confiance et service

- **Avis** [V] : 1 943 avis Google (carrousel et « AI Summary ») ; texte cité de Buchroeders sur la fiche.
- **Preuves de fabrication** [V] : rendu CAO 3D avant fabrication et impression 3D d'un modèle physique (FAQ). Sur la fiche ring, galerie avec photos et vidéos (icônes lecture). Pas de suivi de commande ni de photos d'atelier relevés sur ces pages.
- **Service** [V] : consultation en magasin ou virtuelle, rendez-vous Calendly pour trois conseillers, téléphone (573) 443-1457, texte par SMS (« Text us »), « Connect with an expert » à chaque étape, réparation, rachat (« Sell With Us »).
- **Langues et devises** [V] : anglais, USD uniquement (`ringRegion=UNITED_STATES`).
- **Essayage** [V] : « Try it on » (essayage virtuel par caméra, tiers `sparkle.clouddeploy.in`).

## Points forts à retenir pour JR Diamond

1. **Parcours en 3 étapes avec total toujours visible** : monture, puis diamant, puis taille, avec le prix de chaque ligne et le total « Complete ring 1 818 USD ». Preuve : étape 3 (`stage=Complete+Ring`). Pour nous : afficher le total et sa décomposition en continu.
2. **Choix du diamant parmi un stock énorme** (92 522 naturels, 175 058 synthétiques) avec filtres couleur / pureté / taille / certificat, et le nombre de résultats mis à jour à chaque clic (175 058 → 7 615 → 938 → 601). Preuve : adresse `color_min=G…`.
3. **Fiche diamant très explicite** : certificat, mesures en mm, table, profondeur, fluorescence, lien vers le PDF, explication de la couleur / pureté / taille. Preuve : fiche du 0,55 ct.
4. **Configuration entière dans l'adresse** (`settingId`, `diamondAddedId`, `shapes`, `color_min`) : un lien partageable. Preuve : adresses relevées à chaque étape.
5. **Impression 3D avant la fabrication et rendu CAO** annoncés dans la FAQ : même idée que « ce que vous voyez existe », mais sans montrer la preuve sur le constructeur lui-même.
6. **Garantie « Gotta Love it »** de 30 jours, retour ou échange sur le sur-mesure, citée dans la FAQ. Argument face à la peur de la bague refusée.
7. **Taille « Not sure » (US 6,0 par défaut)** : l'acheteur n'est pas bloqué s'il ignore la taille. Preuve : texte de l'étape 3.
8. **Galerie photos + vidéos sur la fiche de la bague** (vidéo de la bague, vidéo du diamant, vues 3D). Preuve : capture de l'étape 3.

## Défauts observés

- Les photos de la fiche sont des rendus de catalogue de la monture (`RG79763_…_3D.jpg`) ; ce n'est pas la bague finale : [I] proche du « rendu qui n'est pas la bague ».
- Les prix ne détaillent pas la façon : la monture est vendue 1 600 $, le diamant 218 $, sans explication du prix.
- Deux politiques de retour différentes (15 j et 30 j) sans règle claire pour le constructeur.
- Délais incohérents entre pages : 5-6 semaines (FAQ), expédition en 3-5 jours ouvrés (politique) ; rien sur le constructeur.
- Un filtre de prix trop serré donne 0 résultat sans suggestion visible (relevé : liste vide).
- « Try it on » masque la page tant que la fenêtre est ouverte (un clic de carte échoue pendant ce temps).
- Le site demande l'accès à la caméra pour l'essayage virtuel, via un tiers.
- Aucun libellé légal sur les poids ou sur l'origine éthique des diamants relevé.

## Limites de l'audit

- **Panier non ouvert** : `/cart` est interdit par robots.txt (règle `Disallow: /cart`) ; le bouton final « Select ring size » n'a pas été cliqué (il appelle probablement `/cart/add`, [S]). Frais de livraison, délai affiché au panier et moyens de paiement non relevés.
- La page `/pages/shipping-and-returns`, la FAQ, `/pages/buchroeders-financing` et `/pages/assurance-jewelry-protection` ont été lues (autorisées).
- Les trois contrôles « Save this design », « Share » et « Connect with an expert » n'ont pas été explorés (risque de demande de données personnelles) ; « Text us » et le chat non ouverts.
- Essayage virtuel : caméra non accordée, rendu non vu.
- 18 k : les pastilles « 18K … » sont dans la liste, mais les variantes 18 k n'ont pas été relevées une par une.
- Mesure du visuel principal : première image chargée (> 150 px) : **≈ 1,0 s sur ordinateur, ≈ 1,1 s en iPhone** ; chargement complet ≈ 2,0 s (3 mesures chacun, page de départ et fiche monture, depuis un réseau de session cloud, non représentatif).
- Les chiffres du stock (92 522 / 175 058) sont ceux affichés le jour de l'audit.
- Le script de la page appelle de lui-même `/cart?view=ajax` et un point d'accès de paiement accéléré à son chargement ; ce n'est pas une ouverture de notre part.

## Sources

- https://brdiamonds.com/pages/custom-engagement-ring (et adresses `?stage=…` relevées ci-dessus)
- https://brdiamonds.com/pages/custom-engagement-rings-faq
- https://brdiamonds.com/pages/shipping-and-returns
- https://brdiamonds.com/pages/buchroeders-financing
- https://brdiamonds.com/pages/assurance-jewelry-protection
- https://brdiamonds.com/robots.txt (consulté pour les règles)
