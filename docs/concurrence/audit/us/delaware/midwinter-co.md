# Audit : Midwinter Co. (Wilmington, Delaware)

- **Site** : Midwinter Co. (marque en ligne et showroom sur rendez-vous, Wilmington).
- **Adresse** : https://www.midwinter.co/ ; page de départ : https://www.midwinter.co/collections/stones-best-for-engagement-rings
- **Date** : 15/11/2026.
- **Appareils** : Chromium ordinateur (1 366 × 900) et affichage iPhone 13 (émulation Playwright).
- **Statut** : **partiel**. Le panier n'a pas été ouvert (`/cart` et `/cart…` interdits par robots.txt, vérifié avec l'outil de contrôle) et aucun bouton « Add to cart » n'a été actionné (l'ajout passe par `/cart/add`, même chemin interdit). L'application de recherche de diamants GemFind (`/apps/diamondtools`, chargée par script) n'a pas été lue. Le chat n'a pas été ouvert.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains (USD), affichés le 15/11/2026.

## Parcours

Il n'y a pas de configurateur visuel : la bague se compose au panier en ajoutant **une pierre + une monture** [V : « Make it custom - simply add to cart: a stone & a setting », inventaire du Delaware, et FAQ « I've added a stone + setting to my cart. Will it come assembled? Yes »].

| Étape | Page | Options |
| --- | --- | --- |
| 1. Pierre | `/collections/stones-best-for-engagement-rings` | Filtres : disponibilité, prix (curseur 0 à 11 640 $), type de pierre (diamant, saphir, saphir du Montana, aigue-marine, synthétique « lab grown », gemme), forme (23), couleur (28), taille de coupe (brillant, rose, starbrite, fantaisie…), carats (5 tranches) [V] |
| 2. Fiche pierre | `/collections/…/products/inventory-code-dcm340` | Coupe (brillant ou rose), « Next Steps » (4 modes de livraison/montage), quantité, ajout au panier [V] |
| 3. Monture | `/collections/setting-designs` (puis `/products/weston-setting`) | Taille de doigt, métal (3 ors 14 k, platine +500 $), finition, type de griffes, « Next Steps », quantité [V] |
| 4. Panier | `/cart` | **Non ouvert** (interdit) |
| Alternative | `/pages/midwinter-co-custom-work-inquiry` | Formulaire de projet sur mesure : non rempli [V : lien présent] |

## Contrôles vérifiés

Liste issue de `controls.cjs` (181 contrôles visibles sur ordinateur, 222 en affichage iPhone sur la page de pierres) puis actionnés par script sur deux fiches. Les ~70 liens de cartes produit identiques ne sont pas répétés.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Filtres « In stock / Out of stock » | lien | Recharge la collection filtrée (`?filter.v.availability=`) | — | Non actionné (lien lu) |
| Curseur de prix (2 poignées, 0 à 11 640) | range | Présent ; sur « lab grown », l'intervalle affiché est 3 400–3 400 | — | Lu, non déplacé |
| Filtres type de pierre (diamond, sapphire, montana sapphire, aquamarine, lab grown, gemstone) | liens | Chemins propres `/…/lab-grown` ; page « lab grown » chargée, 48 liens produit | Prix par pierre | Fonctionne [V] |
| Filtres forme (23, dont marquise, ovale, poire, coussin, kite, hexagone) | liens | `/…/marquise` charge 66 liens produit, la 1re pierre est bien une marquise | — | Fonctionne [V] |
| Filtres couleur (28 teintes) et coupe (6) | liens | Chemins du même type | — | Lus, non actionnés |
| Filtres carats (under 1, 1-2, 2-3, 3-4, over 4) | liens | Chemins du même type | — | Lus, non actionnés |
| Vue « 2 / 3 / 4 colonnes / List » | liens `#` | Change la grille | — | Lus, non actionnés |
| LOAD MORE | lien | 74 → 122 liens produit sans changer d'adresse ; fonctionne | — | Fonctionne [V] |
| Fiche pierre : lecteur (PLAY, MUTE, ENTER FULLSCREEN, barres de temps) | boutons | Lecteur vidéo présent dans la galerie de la pierre | — | Présent, **non lancé** |
| Fiche pierre : « Stone Cut » (Brilliant / Rose) | select | Choix enregistré, **l'image et le prix de la fiche ne changent pas** | 5 560 $ barré 6 950 $, inchangé | Fonctionne, sans effet visuel [V] |
| Fiche pierre : « Next Steps » (4 options) | select | Monter dans la bague du panier (5+ semaines) ; réserver la pierre ; acheter loose sans monture (1-3 jours, vente définitive, limite 2) ; acheter loose pour renvoi ultérieur (US seulement) | Affichage inchangé | Fonctionne ; surcoût éventuel non visible [V] |
| Quantité (– / + / champ) | boutons | Présents | — | Non actionnés |
| ADD TO CART (pierre et monture) | bouton | **Non actionné** : appelle `/cart/add`, interdit | — | Non testé (robots.txt) |
| Liens d'information (taille des gemmes imprimable, charte « Celestial Diamond », coupe rose vs brillant, FAQ, rendez-vous, photos/vidéos sur demande, « Request a mockup ») | liens | Pointent vers articles et formulaires | — | Lus, non ouverts |
| Accordéons « Returns, Exchanges, and Cancelations », « Warranty », « Shipping », « Gemstone Information » | liens `javascript:` | Ouvrent un panneau ; seul « Gemstone Information » (14 questions de FAQ sur les pierres) a été lu | — | Fonctionnent [V] |
| Monture : taille de doigt (3 à 13 par quarts + 2 options « Unknown ») | select | « Unknown – make in size 7 » ou « secure my purchase while determining the size » | — | Fonctionne [V] |
| Monture : métal (14k blanc, jaune, rose ; platine « + $500 ») | 4 radios | Sélection prise en compte ; **le prix affiché reste 920 $** (le + 500 $ n'apparaît pas à la sélection) et la photo principale reste la même (vue en or rose) | 920 $ barré 1 150 $ | Fonctionne ; effet sur prix non visible [V] |
| Monture : finition (polie / brossée) ; griffes (rondes / « claw ») | select | Sélection prise en compte ; ni prix ni image ne changent | inchangé | Fonctionne [V] |
| Monture : galerie (≈ 12 vignettes dont vues blanc, jaune, rose, sur la main) et bouton plein écran | vignettes, bouton | Photos de rendu par métal et photo portée ; zoom non testé | — | Présent [V], zoom non testé |
| Menu : Custom, Create, Engagement Rings, Wedding Bands, Gifts, Info, Connect | liens | Navigation | — | Lus |
| Recherche « I'm looking for… » | champ | Non utilisé (`/search` interdit) | — | Non testé (robots.txt) |
| Compte, liste de souhaits, vus récemment, devise (« United States (USD $) ») | boutons/liens | Présents | — | Non ouverts |
| Chat (bouton « Chat » en bas à droite), fenêtre « Become an MCO Insider » (e-mail) | widget | Chat non ouvert ; fenêtre fermable | — | Non testé (règle : pas de chat ni de formulaire) |
| Liens sociaux, The Knot, WeddingWire, e-mail hello@midwinter.co | liens | Sortants | — | Lus |
| Plan de paiement Affirm (`/pages/payment-plan-affirm`) | lien | Page de présentation | — | Lu en FAQ |

## Options disponibles

- **Pierres** [V] : diamants naturels (salt-and-pepper, « celestial », gris, noirs, blancs « misty », opalescents), saphirs (dont Montana, parti, bicolores), aigue-marine, pierres de synthèse (« lab grown »), autres gemmes ; 23 formes ; 28 teintes ; carats de moins de 1 à plus de 4 ; coupe « brillant » ou « rose ». Aucune grille GIA/IGI à filtrer sur cette page ; le GIA est traité en FAQ (non lue en détail).
- **Montures** [V] : 169 modèles d'après l'inventaire du dossier ; Plus de 30 filtres de style ou de pierres d’accent (solitaire, halo, pavé, bezel, toi et moi, vintage, art déco, cathédrale…) [V].
- **Métal** [V] : or 14 k blanc, jaune, rose ; platine (+ 500 $) ; 10 k mentionné en FAQ. Pas d'or 18 k à la sélection sur la fiche Weston.
- **Finition** : polie, brossée. **Griffes** : rondes, « claw ». **Taille** : 3 à 13.
- **Gravure** : non vue sur les deux fiches.
- **Modes de vue** : photos, vignettes, vidéo de pierre (lecteur), photo portée ; aucune 3D, 360°, AR ni essayage virtuel [V : aucun contrôle correspondant].
- **Services** : rendez-vous (Zoom ou showroom), « Request a mockup », plan Affirm, plan de garantie Jewelers Mutual, boîte offerte dès 2 000 $, projet sur mesure [V].

## Prix, délais, retours, garanties

- **Affichage du prix** [V] : prix réel + ancien prix barré + badge « -20 % » (monture Weston 920 $ au lieu de 1 150 $ ; pierre de 3,40 ct 5 560 $ au lieu de 6 950 $). Chaque pierre a son prix ; pas de « sur devis » dans le catalogue. Le prix d'une bague = pierre + monture ; décomposition par poste (métal, façon, marge) non affichée.
- **Frais annexes** [V, FAQ] : acompte de CAO 200 $ (déduit du prix de la monture) ; acompte de recherche de pierre 500 $ non remboursable (déduit du prix) ; 3 modifications de CAO incluses, puis 50 $ chacune ; première résine offerte (États-Unis), suivantes 30 $ ; changement complet de style 50 $ ; livraison de la résine à l'étranger 40 $.
- **Délais** [V, FAQ] : pièces prêtes à tailler et expédier 1-3 jours ouvrés (1-2 semaines si mise à taille, 4-6 si refonte en autre ton de métal) ; pierre + monture « 4-8+ semaines » après achat ; sur mesure complet 10-12+ semaines au total ; alliances 4-6+ semaines. Fiche : « 5+ weeks » pour monter la pierre. Express : au cas par cas, frais de rush, sans garantie.
- **Livraison** [V, FAQ] : incluse ; FedEx 2 jours assuré, signature, colis discret (expéditeur « MC Bird ») ; nuit 105 $ ; samedi + 30 $ ; international DHL 2-7 jours, droits et taxes à la charge du client.
- **Retours** [V, FAQ] : annulation sous 24 h remboursée, ensuite 250 $ de frais, plus d'annulation après 21 jours ; chaque pièce a sa politique ; le **sur mesure n'est pas remboursable**, mais échangeable sous 7 jours contre une pièce d'au moins 1 000 $ de plus ; pierre loose : vente définitive ; modifier métal ou taille d'une pièce prête à expédier annule le droit de retour.
- **Garanties** [V, FAQ] : garantie limitée offerte (États-Unis seulement, 5 ans, retirée aux commandes internationales depuis le 01/04/2024), ne couvre pas la pierre centrale ; plan prolongé Jewelers Mutual à ajouter à l'achat ; réparation chez un autre bijoutier annule la garantie (sauf mise à taille) ; première mise à taille offerte, frais de port à la charge du client.
- **Taxes** [V, FAQ] : pas de taxe de vente dans le Delaware ; achat en ligne taxable selon l'État du client.
- **Financement** [V] : Affirm (États-Unis), 3, 6 ou 12 mois.

## Confiance et service

- **Certificats** : GIA traité dans la FAQ sur les pierres (« What about GIA certification? », non lue en détail) ; la fiche de pierre n'affiche aucun numéro de certificat [V]. Pierres « salt-and-pepper » vendues avec une charte maison de couleur et pureté [V].
- **Synthétique** : filtre « lab grown » dans le catalogue ; une page FAQ « Are these diamonds real? » existe [V, titre]. Libellé « lab grown » (pas « lab-created »).
- **Langues et devises** : anglais, dollars américains uniquement ; sélecteur « United States (USD $) » [V].
- **Avis** : « top rated 5/5 100 % 5 star on google » déclaré dans le texte de bas de page ; aucun widget d'avis sur la fiche [V].
- **Preuves de fabrication** [V] : processus décrit (CAO, rendus à l'échelle, modèle en résine envoyé, fabrication) ; photos de chaque pièce client au contrôle qualité, postées 1 à 2 mois après la commande sauf demande contraire ; photos ou vidéos de pierres sur demande. Suivi : e-mail automatique avec numéro de suivi à l'expédition ; demande de point d'étape possible.
- **Service** : showroom sur rendez-vous, Zoom, mockup à la demande, formulaire de projet, chat (non ouvert), e-mail. Pas de numéro de téléphone ni de WhatsApp vus sur les pages lues.

## Points forts à retenir pour JR Diamond

1. **Prix de chaque poste de service chiffré en FAQ** (acompte CAO 200 $, retouches 50 $, résine 30 $) : la transparence est la promesse de marque. Preuve : FAQ `https://www.midwinter.co/pages/faq`, rubrique « Can I expect any other fees? ».
2. **Prix affiché pour chaque pierre et chaque monture**, avec ancien prix barré, filtrage possible par prix. Preuve : fiche `/products/inventory-code-dcm340` (5 560 $), `/products/weston-setting` (920 $).
3. **Rendus CAO à l'échelle puis modèle en résine envoyé avant production** : l'équivalent de « ce que vous voyez existe ». Preuve : FAQ, rubrique « What does the custom work design process look like? ».
4. **Politique de retour par type de pièce** annoncée en fiche (accordéon) et en FAQ, avec exception du sur mesure explicite et échange sous 7 jours. Preuve : FAQ « What happens if I am not happy… ».
5. **Colis discret et livraison assurée incluse**, option nuit à prix fixe (105 $). Preuve : FAQ « How can I expect my order to ship/arrive? ».
6. **Photographie de chaque pièce au contrôle qualité**, avec choix du client sur la publication. Preuve : FAQ « Will you post photos of my ring? ». Proche de l'accord facultatif de JR Diamond.
7. **Choix « loose / à renvoyer plus tard »** pour la demande en mariage puis le dessin de la monture. Preuve : liste « Next Steps » de la fiche pierre.
8. **Filtres complets des pierres** (forme, couleur, carat, prix, type) avec adresses propres partageables. Preuve : `/collections/…/marquise`, `/lab-grown` chargées.
9. **Fiche pierre précise** : dimensions en mm, poids, traitement, notes de couleur, « modeled on a size 6.25 finger ». Preuve : fiche DCM340.

## Défauts observés

- **Aucune 3D, 360° ni AR** : les visuels sont des photos de rendus par métal [V : aucun contrôle de ce type].
- **Le choix du métal et celui de la finition ne changent ni l'image principale ni le prix affiché** (Platinum « + 500 $ » libellé mais total inchangé sur la fiche) ; l'effet réel n'apparaît qu'au panier (non vérifié) [V pour l'absence de changement à l'écran].
- **Le choix de coupe sur la pierre** (brillant ou rose) ne change aucune image [V].
- **Pas de carat ni de certificat visibles sur la fiche pierre** de la page de départ (pierres « salt and pepper » vendues sans rapport de laboratoire) [V].
- **Délais longs** : 4-8+ semaines, sur mesure 10-12 semaines [V].
- **Garantie réservée aux États-Unis** ; international sans garantie depuis 04/2024 ; droits de douane au client [V].
- **Annulation payante** : 250 $ après 24 h [V].
- **Lecteur vidéo de pierre** : bouton PLAY actif en apparence, non lancé par l'auditeur ; présence de la vidéo non confirmée [I].
- **Effets d'interface** : fenêtre de capture d'e-mail à l'arrivée ; erreur 403 d'un service de paiement tiers (shop.app) dans le journal réseau, sans effet visible [V].

## Limites de l'audit

- Panier, ajout au panier, recherche interne et `/cart` : non ouverts (robots.txt). Montants du panier, frais d'expédition affichés, moyens de paiement effectifs : **non vérifiés** ; Affirm, Shop Pay et cartes selon la FAQ et le bas de page seulement.
- Application GemFind (`/apps/diamondtools`, diamants certifiés avec carat, couleur, pureté, certificat) : chargée par script, non lue.
- Pages « Returns, Exchanges, Cancelations », « Warranty » et « Shipping » complètes (accordéons) non lues ; les règles ci-dessus viennent de la FAQ.
- Vidéo de la pierre, plein écran, zoom, quantité, filtres couleur/coupe/carats : non actionnés. Chat, formulaires, pop-up e-mail : non utilisés.
- Un seul modèle de pierre et un seul modèle de monture ont été ouverts ; mesures de temps : une mesure par appareil.
- Mesure du visuel principal [V, un essai chacun] : fiche pierre, ordinateur 2,7 s (DOM 1,9 s) ; fiche monture, ordinateur 1,7 s puis 2,5 s ; fiche monture, iPhone 13 émulé 2,5 s (réseau du bac à sable, non représentatif).

## Sources

- https://www.midwinter.co/collections/stones-best-for-engagement-rings (contrôles, filtres, LOAD MORE)
- https://www.midwinter.co/collections/stones-best-for-engagement-rings/lab-grown et `/marquise`
- https://www.midwinter.co/collections/stones-best-for-engagement-rings/products/inventory-code-dcm340
- https://www.midwinter.co/collections/setting-designs et `/products/weston-setting`
- https://www.midwinter.co/pages/faq (FAQ complète lue)
- https://www.midwinter.co/robots.txt (`Disallow: /cart`, `/checkout`, `/search`) ; outil `robots.cjs` du 15/11/2026
- `docs/concurrence/audit/us/delaware/INVENTAIRE.md` (recensement du site)
- Captures et scripts : `scratchpad/audit/us/midwinter/` (hors dépôt)
