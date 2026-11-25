# Audit : Arnold & Co Jewellers (Canberra, ACT)

- **Site** : Arnold & Co Jewellers, https://arnoldcojewellers.com.au (Shopify, boutique au Canberra Centre)
- **Page de départ** : https://arnoldcojewellers.com.au/collections/shop-all-lab-grown-diamond-engagement-rings
- **Date** : 15/11/2026 (date imposée par la consigne ; les contrôles ont été faits le jour de la session, 25/11/2026 selon l'horloge)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-AU) et affichage iPhone 13
- **Statut** : **partiel**. Le « blocage signalé » (défi Shopify 429 dès robots.txt) **n'a pas été reproduit** : robots.txt lu (`Allow: /`, sauf `/cart/`, `/checkout`, `/account`, `*sort_by*`, filtres combinés), toutes les pages ouvertes ont répondu 200 sans défi. Partiel car l'ajout au panier est interdit par robots.txt (`Disallow: /cart/` couvre `/cart/add`) et le tri/filtre par prix l'est aussi.
- Constat de méthode : chaque fait est **vérifié** (page lue ou contrôle actionné) sauf mention « inféré » ou « supposé ».

## Parcours

Pas de configurateur graphique ni de visualiseur 3D. Deux types de fiches Shopify :

| Étape | Fiche « prête à porter » (stock) | Fiche « sur mesure » (ex. The Melody Ring) |
|---|---|---|
| Départ | Collection « Shop All Lab Grown Diamond Engagement Rings » : 12 pages, 17 bagues par page | Collection « Engagement Rings » (modèles à personnaliser) |
| 1 | Aucune option : une bague, une taille (M½), un prix | Métal (4 pastilles), qualité de pierre (3), carat (12), forme (8) |
| 2 | Plan de soin facultatif (3 radios) | Titre du métal (liste : 14K, 18K, Platinum), taille (liste ~60 valeurs), commentaire libre |
| 3 | Ajouter au panier (non actionné) | Service prioritaire +500 $ (case), plan de soin, ajouter au panier (non actionné) |
| Service | Bague « Ships in 7 business days » | Fabriquée sur commande, date d'expédition affichée |

URL des fiches vues : `/collections/shop-all-lab-grown-diamond-engagement-rings/products/lgd-oval-1-00ct-wg-lgr50706-100` et `/collections/engagement-rings/products/the-melody-ring-wave-ring-with-marquise-accents-lab-grown-diamond-copy`.

## Contrôles vérifiés

Relevé automatique (controls.cjs) de la page de collection : 67 contrôles sur ordinateur, 51 sur iPhone (menu replié).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Barre « FREE EXPRESS SHIPPING FOR ORDERS OVER $300 » | lien | mène à /pages/shipping | - | lu, OK |
| Menu : Engagement & Wedding, High Jewellery, Jewellery, Collections, Custom Design, Custom Gallery, Services, Learn More, Contact Us | liens | navigation ; 9 entrées sur ordinateur | - | liens listés, 4 ouverts (Custom design, Services, Warranty, Contact présent) |
| Recherche (SEARCH) | lien | /search | - | non testé (adresses de recherche à éviter) |
| LOG IN | lien | /account | - | non ouvert : /account interdit par robots.txt |
| CART | lien | /cart redirige vers l'accueil avec tiroir de panier vide (sous-total 0,00 $) | - | OK, panier vide |
| Tri (select, 9 valeurs : Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant/décroissant, date) | liste | non actionné | - | **non testé** : l'adresse produite contient `sort_by`, interdite |
| Filtre Avalibility (sic) | accordéon | présent | - | non testé (risque d'adresse de filtre) |
| Filtre Search | champ | présent | - | non testé |
| Filtre Price | curseur/champs | présent | - | **non testé** : l'URL combine deux `filter`, interdite |
| Liens de catégorie (Shop All, par style, par forme, Wedding and Eternity Bands, Wedding Rings For Him, Ready To Wear) | liens | pages de collection | - | listés ; « Engagement Rings » ouverte |
| Pagination 1…12, Next | liens | `?page=2` etc. | - | autorisé, listé (page 2 non ouverte) |
| Carte produit (17 par page) | lien | ouvre la fiche, avec badge « 50 % » | prix barré + soldé | OK |
| ADD TO CART | bouton | - | - | **non testé** : `/cart/add` interdit par robots.txt (panier interdit) |
| Size Chart Guide | bouton | ouvre une fenêtre « Ring size guide » : une mise à taille gratuite, deux méthodes (fil/bandelette, diamètre intérieur en mm) et tableau | - | OK ; fermée par Echap |
| WARRANTY, SHIPPING INFORMATION, RETURN POLICY, ASK A QUESTION | accordéons | déplient le texte (voir plus bas) ; « Ask a question » ouvre un formulaire (nom, e-mail, téléphone, hCaptcha) | - | OK ; formulaire non rempli |
| Plan de soin : No plan / 3-Year / 10-Year | radios (acp_plan) | sélection sans changement du prix affiché ; le tarif du plan est ajouté au panier | prêt à porter : +159 $ / +249 $ ; sur mesure : +189 $ / +299 $ | actionnés, le prix de page ne bouge pas (supposé : ajouté au panier) |
| Galerie (14 vignettes, dont 2 vidéos sur la fiche Melody) | boutons | change l'image principale ; icône loupe | - | vignettes cliquées sans erreur ; **zoom non confirmé** (le clic n'a ouvert aucun visualiseur) |
| Pastilles métal (Yellow, White, Rose Gold, Platinum) | radios | **n'ont changé ni le prix ni l'image principale** (4 couleurs testées) | 2 499,00 $ inchangé | fonctionne, sans retour visuel |
| Qualité de pierre F VS1 / E VVS2 / D VVS1 | radios | change le prix | 2 499 → 2 830,50 → 3 128,00 $ | OK ; image inchangée |
| Carat 0,75 / 1,00 / 2,00 / 5,00 ct (12 valeurs : 0,75 à 5,00) | radios | change le prix | 2 499 → 2 881,50 → 4 411,50 → 7 293,00 $ | OK ; image inchangée |
| Forme (Round, Oval, Emerald, Radiant, Cushion, Pear, Princess, Marquise) | radios | **aucun effet** sur prix ni image (Oval, Emerald, Marquise testées) | 2 499,00 $ | fonctionne, sans effet visible |
| Titre du métal (liste : 14K, 18K, Platinum) | select | change le prix | 14K 2 499 → 18K 2 799 → Platinum 3 099 $ | OK |
| Taille de bague (liste de 63 valeurs F à Z+6, notation australienne) | select | non modifié | - | listé |
| Commentaire libre | champ | présent | - | listé, non rempli |
| Two-week Priority Service +500 $ | case | prix +500 $ ; date passe de « Ships by Dec 24, 2026 » à « Dec 10, 2026 (priority) » | 3 099 → 3 599 $ (platine) | OK |
| Partage Facebook, Twitter, Pinterest | liens | pages de partage externes | - | listés, non ouverts |
| Widget d'avis Google (pastille bas gauche) | iframe | badge Google Merchant ; non ouvert | - | présent |
| Bouton de conversation (carré gris bas droite, iPhone) | bouton | non ouvert | - | présent ; ouverture non testée (consigne : pas de chat) |
| Custom Design / Custom Gallery / Services | liens | pages d'information (voir « Confiance ») ; « Get quote » mène à un formulaire | - | lus, formulaire non rempli |
| Pied de page : Warranty, Shipping & Delivery, Returns, Jewellery Care Plan, Privacy, Terms, Contact, Blog, Instagram, Facebook | liens | pages de politique | - | Warranty, Shipping, Returns lus |

## Options disponibles

- **Métal (fiche sur mesure)** : or jaune, blanc, rose, platine (pastilles) ; titre : 14K, 18K, Platinum (liste distincte, redondance avec la pastille « Platinum »).
- **Pierre** : diamant de synthèse (« Lab Grown Diamonds ») F VS1, E VVS2, D VVS1 ; carat de 0,75 à 5,00 (0,75 / 1,00 / 1,25 / 1,50 / 1,75 / 2,00 / 2,50 / 3,00 / 3,50 / 4,00 / 4,50 / 5,00).
- **Formes** : ronde, ovale, émeraude, radiante, coussin, poire, princesse, marquise.
- **Taille** : F à Z+6 (échelle australienne, par quarts) ; conseil « choisissez M, ajustement offert ».
- **Services** : service prioritaire deux semaines (+500 $), plan de soin 3 ou 10 ans, retrait en boutique, mise à taille gratuite une fois.
- **Prêt à porter** : or 10K et 14K, jaune ou blanc ; prix de 1 122,50 $ à 4 247,50 $ sur la première page (échantillon de 17, vérifié). Aucune option sur la fiche (taille M½ fixe ; « resizing available on request »).
- **Autres collections** : bagues de mariage, alliances homme, joaillerie haute, boucles d'oreilles, pendentifs.
- Pas de gravure, pas de choix de monture ni de griffes ni de pavé en option (supposé : tout passe par le design personnalisé).

## Prix, délais, retours, garanties

- **Affichage du prix** : prix barré + prix soldé (50 % sur le prêt-à-porter, 15 % « Black Friday » sur les modèles sur mesure), « Tax included. Shipping calculated at checkout » (vérifié). Dollars australiens ; pas de décomposition métal / pierre / façon : le prix change avec la sélection mais n'est pas expliqué.
- **Délai** : prêt à porter « up to 7 business days » pour l'expédition ; sur mesure « Made to order. Ships by Dec 24, 2026 » (environ 4 semaines depuis la date de session, inféré) ; prioritaire « Dec 10, 2026 ».
- **Livraison** : gratuite en express en Australie au-dessus de 300 $ AUD, sinon express 10 $ ; retrait en boutique (Canberra Centre) ; suivi par e-mail (vérifié, /pages/shipping lue via la fiche).
- **Retours** : pas de remboursement en cas de changement d'avis ; échange sous 30 jours ; **exclus : articles fabriqués ou commandés à la demande** et pièces « specially made or remanufactured » ; frais d'expédition non remboursés ; avoir de 12 mois (vérifié, fiche).
- **Garanties** : garantie fabricant « à vie » contre les défauts de fabrication, inspection et nettoyage gratuits (conseil tous les 6 à 12 mois), rhodiage à -30 % ; annulée si un autre bijoutier intervient ; non couverte : usure, perte de pierre, vol (vérifié, /pages/warranty).
- **Certificats** : aucune mention de GIA ou IGI trouvée sur les deux fiches lues ; seulement couleur/pureté (ex. « E-F, VS »). Pierre « Lab Grown Diamond » (vérifié). Origine « Stone Origin: Lab Grown Diamond » listée dans la fiche.
- **Moyens de paiement** : non affichés (panier vide, paiement non ouvert) ; **non vérifié**.
- Plan de soin (assurance entretien) : 159 / 249 $ (stock) ou 189 / 299 $ (sur mesure). Assurance Q-Report recommandée (page Services).

## Confiance et service

- Boutique physique à Canberra Centre (Shop DF 12-13, Level 1, 148 Bunda St) ; retrait en boutique.
- Avis : citations « Google Review » (nom abrégé) affichées en bas de la page d'accueil et des fiches ; pastille Google Merchant (vérifié). Pas de note chiffrée lue.
- Service sur mesure : « Quotes … complimentary » ; conception 3D incluse sans frais si la fabrication est faite chez eux, coût de concept déduit du prix final (vérifié, /pages/custom-design et /pages/services). Transformation de bijoux anciens (« Remodel old jewellery ») proposée avec devis gratuit.
- Preuves de fabrication : galerie « Custom Gallery » mentionnée (/pages/gallery, autorisé, non ouverte) ; aucune vidéo de fabrication ni suivi de commande étape par étape vu. Seule une vidéo de présentation sur la fiche Melody (non lue).
- Langue : anglais seulement ; devise : AUD uniquement.
- Contact : chat (bouton), formulaire « Ask a question » (hCaptcha), page Contact. Pas de WhatsApp vu.

## Points forts à retenir pour JR Diamond

1. **Délai affiché et option prioritaire payante** (« Ships by Dec 24 » ; +500 $ → Dec 10) : une date précise plutôt qu'une durée ; preuve : fiche Melody, case cochée, date changée.
2. **Le prix suit chaque option** (qualité de pierre, carat, titre) avec mise à jour instantanée : 2 499 → 7 293 $ de 0,75 à 5,00 ct ; preuve : essais ci-dessus.
3. **Prêt à porter avec poids du métal** (« 10K White Gold (1.22g) », couleur E-F, VS, taille) : le détail technique est donné, même si le prix n'est pas décomposé.
4. **Politique claire sur le sur mesure** : exclus des retours, échange sous 30 jours pour le reste ; mise à taille gratuite une fois (fiche).
5. **Plan de soin** vendu en option (3 ou 10 ans) : revenu additionnel après achat ; preuve : radios `acp_plan`.

## Défauts observés

- **Pastilles de métal et formes de pierre sans effet visible** : ni le prix ni l'image ne changent (tests sur 4 métaux et 3 formes) ; le client ne voit pas ce qu'il choisit. La couleur de métal est aussi redoublée par « Metal Karat: Platinum », une incohérence possible (inféré).
- Pas de visualisation 3D ni de 360° ; pas de rendu de la bague configurée.
- **Prix non expliqué** : aucun détail pierre / métal / main-d'œuvre ; remises permanentes de 50 % sur le stock (prix « barré » supposé de référence).
- **Faute dans le filtre** (« Avalibility ») et accord « Ships by » sans cohérence avec la fenêtre « 7 business days » du prêt-à-porter ; faute dans la page shipping (« EXPESS »).
- Certificat de pierre non mentionné sur les fiches lues : confiance moindre qu'un site qui affiche GIA/IGI.
- `/cart` redirige vers l'accueil et ouvre un tiroir : parcours de panier peu lisible.
- Mobile : la mise en page tient, mais le premier visuel de fiche met environ 4,3 s à apparaître (voir mesures).

## Limites de l'audit

- Ajout au panier non testé (`/cart/add` interdit) : donc ni récapitulatif, ni frais de livraison calculés, ni moyens de paiement, ni effet réel du plan de soin sur le panier.
- Tri et filtre par prix non testés (adresses interdites).
- Zoom non confirmé ; vidéos de la galerie non lues ; chat, formulaire de devis non ouverts (consigne).
- Défi 429 signalé non reproduit : le site a répondu normalement ; le blocage peut être intermittent (inféré).
- Mesures de temps (premier visuel) : fiche prêt-à-porter, ordinateur 1,5 s ; fiche Melody, ordinateur 1,9 s, iPhone 4,3 s ; collection, ordinateur 1,6 s ; collection sur iPhone non mesurée (critère de détection en échec). Mesures uniques, réseau du proxy.
- Aucun achat ; les prix peuvent varier avec la promotion en cours (Black Friday).

## Sources

- https://arnoldcojewellers.com.au/robots.txt
- https://arnoldcojewellers.com.au/collections/shop-all-lab-grown-diamond-engagement-rings
- https://arnoldcojewellers.com.au/collections/shop-all-lab-grown-diamond-engagement-rings/products/lgd-oval-1-00ct-wg-lgr50706-100
- https://arnoldcojewellers.com.au/collections/engagement-rings/products/the-melody-ring-wave-ring-with-marquise-accents-lab-grown-diamond-copy
- https://arnoldcojewellers.com.au/pages/warranty ; /pages/custom-design ; /pages/services ; /cart
