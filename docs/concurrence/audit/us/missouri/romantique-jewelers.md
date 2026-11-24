# Audit : Romantique Jewelers (Saint-Louis / Bridgeton, Missouri)

- **Site** : Romantique Jewelers — https://romantiquejewelers.com
- **Page de départ** : https://romantiquejewelers.com/pages/design-your-ring
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Les 4 étapes de l'assistant JewelerOS sont vérifiées ; l'étape « 3D Ring Designer » n'est pas atteinte (appel `jeweleros.com/api/` interdit par le robots.txt de JewelerOS, non appelé). Une bague prête a été suivie jusqu'au panier. Le formulaire LeadConnector protégé par Cloudflare Turnstile n'a pas été utilisé.
- Marquage : [V] vérifié, [I] inféré, [S] supposé.
- robots.txt de romantiquejewelers.com : `Allow: /` pour `*` (contrôle d'outil : fiche, panier, page de départ autorisés) [V].
- Le même assistant que chez Noe's Jewelry (même texte, mêmes cartes, mêmes classes `jos-*`) : voir `noes-jewelry.md` [V].

## Parcours

| Étape | Titre affiché | Options (vérifiées) |
|---|---|---|
| 1 | « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 8 styles + « Start from scratch » |
| 2 | « Choose your center stone » | Natural / Lab Grown ; 9 formes + « Decide later » |
| 3 | « Select your center stone size » | 0,5 à 5 carats (8 valeurs) + « Decide later » |
| 4 | « When do you need your ring? » | 1–4 semaines / 1–3 mois / 3–6 mois / « Not sure yet » |
| 5 | 3D Ring Designer | **non atteint** |

Ensuite : « Pick out your center stone in our St. Louis, MO showroom », puis « Finalize & order » (https://romantiquejewelers.com/pages/custom-engagement-rings) [V]. La pierre se choisit en magasin.

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose Gold | boutons | L'image des cartes passe à `solitaire_yellow.webp`, `solitaire_white.webp`, `solitaire_rose.webp` | aucun | OK [V] |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | cartes | Choix du style, étape 2 (Solitaire testé) | aucun | Solitaire OK [V] ; 7 autres non cliquées (même composant [I]) |
| Start from scratch | carte | Non cliqué | aucun | non testé (risque d'appel API interdit) |
| Natural / Lab Grown | bascule | « Lab Grown » devient actif | aucun | OK [V] |
| Formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) | cartes | Marquise testée, étape 3 | aucun | Marquise OK [V] ; autres non cliquées |
| Carats 0,5 à 5 | cartes | « 1 carat » testé, étape 4 | aucun | OK [V] |
| Decide later | cartes | Non cliquées | aucun | non testé |
| Délais (4 cartes) | cartes | Non cliquées : la sélection finale lance la création via `/api/` interdit | aucun | non testé (robots.txt de JewelerOS) |
| Back, Skip | boutons | Présents ; non testés sur ce site (Back vérifié chez Noe's, même composant [I]) | aucun | non testé |
| TEXT US | bouton flottant | Ouvre un envoi de SMS / formulaire de la boutique, non ouvert | aucun | non testé (règle : pas de conversation) |
| Showroom hours | lien | Page horaires : mardi–mercredi 10–6, jeudi 10–7, vendredi 10–6, samedi 9 h 30–4 [V] | aucun | affichage OK |
| Menu Bridal, Designer Jewelry, Watches, Shop, Our Store, Services, Log in, Search, Cart | liens | Navigation ; 33 contrôles sur ordinateur, 24 sur iPhone | aucun | liens présents [V] ; seuls Bridal et Cart ouverts |
| Formulaire LeadConnector (Turnstile) | formulaire | Cadre `challenges.cloudflare.com` présent ; non utilisé | n/a | non testé (règle : aucun formulaire) |

Collection https://romantiquejewelers.com/collections/bridal et fiche https://romantiquejewelers.com/collections/bridal/products/diamond-engagement-ring-44 :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filter | bouton | Panneau qui ne contient que le tri ; **pas de filtres** de pierre | n/a | OK, tri seul [V] |
| Sort | liste | Featured, Most relevant, Best selling, A–Z, Z–A, Price low→high, Price high→low, Date old→new, Date new→old | classe par prix | options lues [V] |
| Pagination (2, 3, 5, Next) | liens | Pages de la collection (`?page=`) | aucun | présents, non suivis |
| Finger size | liste | 4 à 9 par demi-taille, plus « Other – Please indicate in cart notes » | aucun | présent [V] ; dans le test, la taille n'apparaît pas dans la ligne du panier [V pour l'affichage, cause non établie] |
| ADD TO BAG | bouton | Appel `/cart/add.js` (200), article ajouté | 4 200,00 $ | OK [V] |
| More payment options | lien | Non suivi, probablement paiement fractionné Shopify [S] | n/a | non testé |
| DROP A HINT | lien | Message à un proche, non ouvert | n/a | non testé |
| ASK A QUESTION | bouton | Formulaire, non ouvert | n/a | non testé |
| Share (Facebook, Twitter, Pinterest) | liens | Partage externe | n/a | non testé |
| Panier : Quantité, Update cart, Remove, Check out | champs, boutons | `/cart` : un article, sous-total 4 200,00 $, « Shipping, taxes, and discount codes calculated at checkout » ; Check out non cliqué | 4 200,00 $ | affichage OK [V] ; paiement non testé (règle) |

## Options disponibles

- **Métaux de l'assistant** : jaune, blanc, rose [V]. Pas de platine ni de titre 14 / 18 k dans l'assistant ; la fiche vue décrit « 14k yellow gold » [V].
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch [V].
- **Origine** : Natural ou Lab Grown [V].
- **Formes** : 9 (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) [V].
- **Carats** : 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 [V].
- **Délai souhaité** : 1–4 semaines, 1–3 mois, 3–6 mois, pas sûr [V].
- **Taille de doigt** (fiche) : 4 à 9 par demi-taille ou « Other » [V].
- **Non trouvé** : gravure, griffes, corps, pavé, filtres de pierres dans l'assistant ; renvoyés au 3D non atteint [I]. Gravure à la machine ou à la main proposée en magasin [V] https://romantiquejewelers.com/pages/romantique-services.
- **Modes de vue** : 3D annoncée mais non vue ; fiche : photos ; pas de bouton 360°, vidéo ou AR dans la liste des contrôles de la fiche [V].

## Prix, délais, retours, garanties

- **Prix** : aucun dans l'assistant. Prix de bagues prêtes affichés en un seul total, sans décomposition (ex. 4 200,00 $ ; collection Bridal de 975 $ à 17 615 $ sur la première page) [V] https://romantiquejewelers.com/collections/bridal.
- **Délai du sur mesure** : « ready for you in just a couple of weeks » ; pas de date ferme [V].
- **Livraison** : « Shipping, taxes, and discount codes calculated at checkout » ; frais non vus au panier [V].
- **Retours** (https://romantiquejewelers.com/policies/refund-policy) [V] : 30 jours, article neuf, emballage d'origine, preuve d'achat ; échange seulement si l'article est défectueux ou abîmé ; soldes non remboursables ; le client paie le retour (phrase coupée à la lecture, montant non lu). La page ne mentionne pas d'exception « sur mesure » dans le texte lu [V pour l'absence, texte tronqué à la limite de lecture].
- **Garantie** : « lifetime warranty and rewards program » annoncés dans la page des bagues sur mesure, sans conditions détaillées [V] https://romantiquejewelers.com/pages/custom-engagement-rings. Nettoyage et inspection gratuits ; piles de montre avec garantie [V, page Services].
- **Certificats** : non relevés sur la fiche vue [V pour l'absence] ; liens avec diamantaires d'Anvers, d'Israël et de New York vantés [V].
- **Libellé du synthétique** : « Lab Grown » dans l'assistant ; un produit nommé `lab-diamond-bridal-5` dans la collection [V].

## Confiance et service

- Boutique depuis 46 ans ; « lifetime warranty », programme de fidélité ; rendez-vous conseillé pour le sur mesure [V].
- Avis : deux avis Google cités sur la page sur mesure (noms propres, non recopiés), deux témoignages courts sur la fiche [V].
- Services : estimations (75 $ puis 50 $ par pièce), rachat d'or, de diamants, de montres, réparation, gravure, emballage cadeau offert [V].
- Contact : bouton « TEXT US », page de contact, page « Staff / appointments » [V pour la présence]. Pas de téléphone relevé dans les contrôles de la page de départ [V].
- Langue : anglais ; devise : dollar américain [V]. Pas de comparateur ni d'enregistrement du design.
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande ; « We have a fully custom shop » en texte seulement [V].
- Moyens de paiement : non affichés au panier [V].
- Visuel principal : première image de l'assistant en **2,4 s** sur ordinateur, **2,6 s** sur iPhone (DOM prêt en 1,0 s et 1,2 s) [V, une mesure par appareil].

## Points forts à retenir pour JR Diamond

1. **Un atelier réel mis en avant par un texte clair** : « we handle everything right here – no corporate chains » (https://romantiquejewelers.com/pages/custom-engagement-rings). Preuve que ce message parle aux clients, que JR Diamond peut appuyer par des vidéos.
2. **Garantie à vie annoncée** (sans détail) : attente à couvrir par une garantie lisible [V].
3. **Services annexes lisibles** sur une page unique (estimation, gravure, nettoyage offert, rachat) [V].
4. **Fiche avec « Drop a hint »** : un bouton qui plaît aux futurs fiancés pour prévenir le partenaire ; idée de partage proche du bouton « Partager » prévu [V].
5. **Choix de taille avec option « Other »** et note au panier : tolère les tailles inhabituelles [V].

## Défauts observés

- **Même assistant sans prix** : le client dessine sans coût, puis doit venir en magasin pour la pierre [V].
- **Assistant qui se termine par une erreur** chez les sites JewelerOS d'après l'inventaire (appel `/api/create/from-ring-config/`, non retesté ici) [V par rapport précédent].
- **Aucun filtre** sur la collection (tri seul) ; **fiches sans certificat ni décomposition** du prix [V].
- **La taille choisie n'apparaît pas dans la ligne du panier** lors du test ; risque d'erreur de commande [V pour l'affichage].
- **Page de retours sans mention du sur mesure** : zone grise pour un anneau dessiné sur mesure [V].
- La page « Services » annonce un inventaire de bijoux anciens « bientôt en ligne » : contenu promis, non disponible [V].

## Limites de l'audit

- Étape 3D, « Start from scratch », « Skip », « Back » (sur ce site), délais de l'étape 4, chat « TEXT US », formulaire Turnstile : non actionnés (raisons dans les tableaux).
- Une seule bague prête ouverte et ajoutée au panier ; pas d'au-delà de `/cart` (aucun paiement, aucune donnée saisie) ; frais de livraison finaux et moyens de paiement non vus.
- Texte de la page de retours lu en partie (coupe à « You will be responsible for payi… ») ; coût du retour non établi.
- Mesures de temps : une par appareil, derrière un proxy : ordre de grandeur [I].
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/romantique-jewelers/` (hors dépôt).

## Sources

- https://romantiquejewelers.com/pages/design-your-ring (assistant, ordinateur et iPhone)
- https://romantiquejewelers.com/pages/custom-engagement-rings
- https://romantiquejewelers.com/pages/romantique-services
- https://romantiquejewelers.com/policies/refund-policy
- https://romantiquejewelers.com/collections/bridal
- https://romantiquejewelers.com/collections/bridal/products/diamond-engagement-ring-44
- https://romantiquejewelers.com/cart
- https://romantiquejewelers.com/robots.txt (via contrôle d'outil)
- `docs/concurrence/audit/us/missouri/INVENTAIRE.md` ([V3], [V4], [V7])
