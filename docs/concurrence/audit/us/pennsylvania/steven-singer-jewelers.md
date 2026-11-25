# Audit : Steven Singer Jewelers (Philadelphie, Pennsylvanie)

- **Site** : Steven Singer Jewelers (« I Hate Steven Singer »), https://www.ihatestevensinger.com/
- **Page de départ** : https://www.ihatestevensinger.com/collections/engagement-rings, puis le constructeur `/pages/diamond-landing` → `/pages/diamond-quiz`
- **Date** : 15/11/2026 (consigne de l'étude ; pages lues et contrôles actionnés le 25/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Parcours constructeur complet jusqu'à la page « Complete Ring » ; **ajout au panier et page du panier non faits** (voir Limites).
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.
- robots.txt : [V] `/cart/`, `/checkout`, `/cart.js`, `/collections/*sort_by*` et deux filtres combinés dans `/collections/` sont interdits ; `/pages/…` et `/products/…` sont autorisés. Aucun groupe nominatif contre ClaudeBot.

## Parcours

| Étape | Options (toutes relevées) |
|---|---|
| 0. Catalogue `/collections/engagement-rings` | 127 produits, 30 affichés puis « LOAD MORE » ; filtres : produit, métal (14K rose, 14K blanc, 18K blanc, 14K jaune, 18K jaune, platine), prix 0 à 33 988 $, pureté, couleur ; tri ; liste de souhaits ; avis par produit |
| 1. Choose Setting (`/pages/diamond-quiz?quiz_start=setting&setting=…`) | une monture (ex. Ember, à partir de 828 $) ; métal : 14K blanc, 14K jaune, 14K rose, platine ; « Choose this setting », liste de souhaits, partager, appeler, e-mail |
| 2. Choose Diamond | forme (8 : cushion, emerald, marquise, oval, pear, princess, radiant, round) ; type (naturel « Earth Born » / de laboratoire) ; prix ; carat (liste de cases) ; pureté (de/à) ; couleur (de/à) ; tri ; 182 pierres, 30 par page |
| 2b. Fiche pierre | 4 C, numéro d'article, « Choose this diamond » |
| 3. Complete Ring | taille de doigt, garantie « Lifetime Love » (payante), accessoire « cleaning wand », ajout au sac, rendez-vous |
| Accès alternatif | `/pages/diamond-landing` : « Start with a diamond » (10 formes dont radiant, asscher, heart) ou « Start with a setting » |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal 14K blanc / jaune / rose (monture Ember) [V] | radio | change la sélection | 828 $ inchangé | OK |
| Métal Platine [V] | radio | change la sélection | 1 128 $ (+300 $) | OK |
| Choose this setting [V] | bouton | passe à l'étape 2, bandeau « Ember - $1,128 » | total partiel | OK |
| Forme de pierre (8 liens) [V] | lien | filtre la liste (les liens existent ; le clic automatisé sur « Oval » n'a pas pu être confirmé) | — | partiel |
| Diamond Type Lab Grown [V] | radio | URL `?filter.p.m.custom.diamond_type=Lab+Grown`, 182 → 168 pierres | — | OK |
| Diamond Type Natural + carat 2 1/2 [V] | radio + case | URL avec les deux filtres, résultat « 0 » produit | — | OK (liste vide) |
| Carat (liste de cases, 0,5 à 7 ct) [V] | case | ajoute `filter.p.m.features.diamond_total_weight=2+1/2+Carats` | — | OK |
| Clarté, couleur, prix (curseur 0 à 22 188 $) [V] | champs / curseur | présents (SI1 à VVS2, D à K) ; non actionnés individuellement | — | non testé (le filtre type + carat a déjà validé le mécanisme) |
| Tri (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant…) [V] | liste | non actionné | — | non testé : `sort_by` interdit par robots.txt pour `/collections/` |
| View diamond [V] | bouton | ouvre la fiche (ex. 2 1/2 ct Oval E/VS1 lab grown, LGD892691) | 3 038 $ | OK |
| Delivery and returns / What's included [V] | accordéon | « What's included » : certificat de la pierre, mise à taille offerte, écrin, garantie 100 jours ; « Delivery and returns » : aucun texte affiché | — | partiel |
| Choose this diamond [V] | bouton | page « Complete Ring » | Ember 828 + pierre 3 038 = 3 866 $ | OK |
| Finger size (4 à 10 par demi-taille) [V] | liste | « Size 7 » ajouté au récapitulatif | inchangé | OK |
| Lifetime Love Guarantee, Apply / Remove [V] | bouton | ajoute la garantie étendue | +329,99 $ → 4 195,99 $ | OK |
| Premium Diamond Cleaning Wand, Add / Remove [V] | bouton | ajoute l'accessoire (« Added ») | +9 $ → 4 204,99 $ | OK |
| See details (garantie) [V] | bouton | ouvre un détail | — | OK, texte non relevé |
| ADD TO BAG [V] | bouton | **non cliqué** : appelle `/cart/add`, interdit par robots.txt | — | non testé |
| Add to wish list / Share product [V] | boutons | présents ; non actionnés (invitent probablement à un compte) | — | non testé |
| Call or text 215-627-3242 ; Drop us a line (mailto) ; Book an appointment [V] | liens | `tel:` et `mailto:` | — | présents, non suivis |
| Installments / Splitpay, « As low as $16.55/mo or $132.00/2 weeks » [V] | texte | information de financement (Bread, Afterpay) | — | OK |
| Fiche prête à expédier (Christa 1 ct) : métal (3), taille 5 à 8 + « Not Known », Size guide, Apply, Add, Add to bag [V] | divers | Lifetime Love à 279,99 $ ; bague 2 798 $, « as low as $87.67/mo » | 2 798 $ | présents, Size guide non ouvert |
| Pop-up « Join the VIP list », bandeau cookies (accepter, gérer, sans suivi) [V] | boutons | s'affichent à l'arrivée | — | OK |
| Panier `/cart` [V] | lien | **non ouvert** : l'ouverture a été refusée par l'environnement d'exécution ; `/cart/` est interdit par robots.txt | — | non testé |
| Chat (« Chat with us ») [V] | bouton | présent en bas à droite ; aucune conversation ouverte | — | non testé (règle) |
| Menu principal (~90 liens collections) [V] | liens | non parcourus un à un | — | non testé |

## Options disponibles

- **Métaux** [V] : 14K blanc, 14K jaune, 14K rose, platine ; 18K blanc et 18K jaune existent comme filtre du catalogue.
- **Montures** [V] : halo, classique, vintage, twist and split, trois pierres, bridal set, hommes ; « Build Your Own » (Ember, Maxine, Jocelyn, Camryn, Natalie, Melina, Gwyneth, Grace…).
- **Formes** [V] : étape pierre : 8 ; accueil du constructeur : 10 (radiant, asscher, heart en plus).
- **Origine** [V] : naturel (« Earth Born Diamond », GIA dans le titre) ou de laboratoire (« Lab Grown », marque « Lightworks » sur la page de garantie).
- **Taille de doigt** [V] : 4 à 10 par demi-taille ; sur les bagues prêtes à porter 5 à 8 ou « Not Known ».
- **Ajouts** [V] : garantie Lifetime Love, nettoyeur, liste de souhaits. **Gravure, pavage, griffes, corps de bague** : [V] absents du constructeur.
- **Vues** [V] : photos statiques ; montage et pierre en deux images séparées. Pas de 3D, 360°, vidéo, réalité augmentée ni zoom constatés (0 `video`, 0 `canvas` sur la page du constructeur).

## Prix, délais, retours, garanties

- **Prix** [V] : affiché partout ; ligne monture + pierre = total (3 866 $) avant ajouts ; décomposition par poste visible sur la page finale ; mensualité « as low as $16.55/mo ». Livraison gratuite dans les 50 États.
- **Délai** [V] (FAQ) : expédition 1 à 2 jours ouvrés ; livraison « Fast & Free » 2 à 7 jours ouvrés après expédition ; express 1 à 2 jours ; livraison le samedi ; **Build Your Own : jusqu'à 4 semaines**. Pas d'envoi hors États-Unis.
- **Retours** [V] (`/pages/returns`, `/pages/the-steven-singer-guarantee`) : 100 jours satisfait ou remboursé, retours gratuits ; deux indications divergentes sur le même texte : remboursement « within 10 business days » après réception, puis « within 30 days ». Pas d'exception pour le sur mesure lue.
- **Garanties** [V] : une mise à taille offerte la première année ; échange à valeur entière sur la pierre centrale (naturelle ; laboratoire : pierre de valeur au moins 50 % supérieure) ; garantie étendue payante.
- **Certificats** [V] : GIA mentionné pour les naturels ; « Diamond Certificate » pour les pierres de laboratoire (émetteur non lu).
- **Libellé synthétique** [V] : « Lab Grown Diamond » ; pas de promesse de valeur de revente.
- **Paiement** [V] (FAQ) : Visa, Mastercard, Discover, Amex, Apple Pay, Google Pay, PayPal, Afterpay, Bread (0 à 29,99 % TAEG, 36 mensualités de 32,26 $ pour 1 000 $ à 9,99 %). Signature exigée dès 200 $.

## Confiance et service

- [V] Boutiques physiques (Center City, 739 Walnut St pour les retours, et Newtown), téléphone/SMS 215-627-3242, e-mail, chat, rendez-vous.
- [V] Avis : 1 à 5 avis par bague, ex. « 4.8 star rating, 5 reviews » ; page `/pages/reviews`.
- [V] Langue anglaise, dollar américain uniquement.
- [V] Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande avant l'expédition (statut de commande via le compte) ; les images de bague sont des rendus de monture.

## Points forts à retenir pour JR Diamond

1. **Total toujours visible** : monture + pierre = « RING TOTAL » avec ajouts qui mettent le total à jour (3 866 → 4 195,99 → 4 204,99 $). Preuve : page « Complete Ring », lignes de total.
2. **Prix d'un changement de métal affiché au clic** : platine +300 $ sur la monture Ember, jaune/rose inchangés. Preuve : fiche de monture.
3. **Filtres reflétés dans l'adresse** (`?filter.p.m.custom.diamond_type=Lab+Grown`) : configuration partageable. Preuve : adresse après le clic.
4. **Garantie lisible en une ligne** : 100 jours, retours gratuits, mise à taille offerte, échange à valeur entière, rappelés en pied de page et sur la fiche.
5. **Étapes numérotées avec lien « Change »** pour revenir à chaque choix sans perdre le reste.

## Défauts observés

- Montage et pierre sont deux images séparées ; aucune vue 3D ni vidéo [V].
- Texte « Delivery and returns » de la fiche pierre vide à l'ouverture [V].
- Libellés « Translation missing: en.accessibility.previous_slide » visibles dans la page [V].
- Pas de gravure ni de choix de griffes ou de corps de bague ; pas de sur mesure en ligne (FAQ : appeler) [V].
- Pop-up d'inscription et bandeau cookies recouvrent la page à l'arrivée [V].
- Mobile : le filtre « Lab Grown » du constructeur n'est pas accessible directement (filtres repliés) ; total différent de celui du bureau car autre pierre première [V].
- Deux délais de remboursement contradictoires sur la page des retours [V].

## Limites de l'audit

- **Panier non visité, ajout au sac non cliqué** : `/cart/add` et `/cart/` sont interdits par robots.txt ; l'ouverture de `/cart` a aussi été refusée par l'environnement. Frais de livraison et moyens de paiement viennent donc de la FAQ, pas du panier.
- Délais mesurés (visuel principal, fiche Christa 1 ct) : **3,4 s ordinateur, 2,5 s iPhone** [V, une mesure chacune, première image > 200 px visible]. Sur le constructeur la mesure a capté des images de menu (non fiable).
- Tri, clarté, couleur, prix, liste de souhaits, partager, Size guide, détails de garantie, menu : non actionnés ou contenu non lu.
- Parcours mobile : montage jusqu'à la page finale (taille 7) ; la pierre choisie diffère de celle du bureau.
- Aucun formulaire rempli, aucun compte, aucun chat ouvert.

## Sources

- https://www.ihatestevensinger.com/collections/engagement-rings
- https://www.ihatestevensinger.com/pages/diamond-landing
- https://www.ihatestevensinger.com/pages/diamond-quiz (étapes monture, pierre, bague complète)
- https://www.ihatestevensinger.com/products/christa-ready-for-love-diamond-engagement-ring-1ct
- https://www.ihatestevensinger.com/pages/faq
- https://www.ihatestevensinger.com/pages/returns
- https://www.ihatestevensinger.com/pages/the-steven-singer-guarantee
- https://www.ihatestevensinger.com/pages/financing
- https://www.ihatestevensinger.com/robots.txt
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/steven-singer-jewelers/`
