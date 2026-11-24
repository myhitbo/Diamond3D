# Audit : Snyder Jewelers (Longmont, Colorado)

- **Site** : Snyder Jewelers, https://www.snyderjewelers.com (plateforme Punchmark ; concepteur 3D JewelerOS / StoneAlgo)
- **Page de départ** : https://www.snyderjewelers.com/pages/design-your-ring ; concepteur 3D lui-même : https://jeweleros-custom.netlify.app/?jewelerid=9o2KAt6WCyE3 (cadre inséré dans la page ; hôte contrôlé : robots.txt `Disallow:` vide, adresse AUTORISÉE)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) et affichage iPhone 13 (Playwright), sans GPU, via un proxy ; `Crawl-delay: 2` respecté
- **Statut** : **partiel**. Aucun blocage. Le panier (`*/cart`), la caisse et le compte sont INTERDITS par robots.txt : non ouverts. Le parcours de l'assistant ne mène à aucun panier en ligne (voir Prix). Boutons Wedding Band, Add Stones, engraving non actionnés.
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Résumé

Deux outils. (1) Un assistant en 4 étapes (style, métal, forme et origine de la pierre, carat, délai) qui débouche sur (2) un concepteur 3D paramétrique : on voit la bague changer et un prix « MSRP (setting only) » se met à jour (hors pierre centrale). La pierre se choisit **en boutique** ; la page annonce « bague prête en quelques semaines ». Pas de paiement en ligne pour le sur-mesure, aucun prix du diamant dans le concepteur. À côté, un catalogue de 68 bagues de fiançailles en stock avec prix. Sur ordinateur, le passage de l'assistant au concepteur a échoué à chaque essai (3 sur 3), sur iPhone il a réussi.

## Parcours

| Étape | Options (V) |
|---|---|
| 1 sur 4 « Let's start designing your ring » | métal (3 pastilles : jaune, blanc, rose) ; style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi (libellé partiellement masqué, I), Three Stone, « Start from scratch » (9 cartes) ; Skip |
| 2 sur 4 « Choose your center stone » | bascule Natural / Lab Grown ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3 sur 4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats, « Decide later » (« once you're in the ring designer you can set an exact carat weight ») |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Concepteur 3D | sections Metal, Diamonds, Head, Band, More ; « + Add Wedding Band » ; prix « MSRP $ (Setting only) » ; bouton Next |
| Après Next | non observé : envoi des données au serveur du concepteur (3 appels), aucune nouvelle page dans le cadre isolé (voir Limites). Sur iPhone : fenêtre « Your dream ring is almost ready! » (nom, téléphone, consentement SMS, « Continue without saving ») |

## Contrôles vérifiés

Assistant (page `design-your-ring`, 153 contrôles listés sur ordinateur, 65 sur iPhone ; la plupart sont les menus du site) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles métal (jaune, blanc, rose) | boutons | présélection du métal pour le concepteur | aucun à ce stade | présentes (V) ; effet non vérifié |
| 9 cartes de style | cartes | passent à l'étape 2 | aucun | Solitaire testé (V) ; les 8 autres non cliquées |
| Natural / Lab Grown | bascule | change l'origine de la pierre | aucun | Lab Grown testé (V) |
| 9 formes + Decide later | cartes | étape 3 | aucun | Marquise, Round testés (V) |
| 8 carats + Decide later | cartes | étape 4 | aucun | 1 carat testé (V) |
| 4 délais | cartes | lance le concepteur 3D | aucun | « 1 - 3 months » : **erreur sur ordinateur** « Something went wrong / Try again » (3 essais) ; « 1 - 4 weeks » sur iPhone : concepteur chargé (V) |
| Back, Skip | boutons | retour ; saute l'étape | aucun | présents ; non testés |
| Try again | bouton | ramène à l'étape 1 (le choix est perdu) | aucun | fonctionne (V) |

Concepteur 3D (hôte `jeweleros-custom.netlify.app`, ordinateur ; prix lus après stabilisation, 10 à 25 s) :

| Libellé | Type | Effet observé | Prix (MSRP, setting only) | État |
|---|---|---|---|---|
| Metal : 14K White, 18K Yellow, 14K Rose, 18K White, Platinum, 18K Rose, 14K Yellow | 7 boutons | change la couleur du rendu 3D (capture) | 18K jaune 1 794 $ ; 18K rose 1 794 $ ; 18K blanc 1 818 $ ; 14K blanc 1 371 $ ; 14K jaune 1 347 $ ; 14K rose 1 347 $ ; platine 1 383 $ | fonctionne ; **le prix met 2 à 25 s à se mettre à jour** (V) |
| Mixed | bouton | panneau « Mixed Metal » : métal de la tête et métal de l'anneau choisis séparément (7 couleurs chacun), « Apply & Return » | 1 425 $ avec les réglages par défaut du panneau (V) | fonctionne |
| Diamonds : One / Two / Three Stone | 3 boutons | une, deux ou trois pierres | 1 794 $ → 2 166 $ (deux) → 2 436 $ (trois) ; retour à une pierre : 1 872 $ (non revenu à 1 794 $) | fonctionne ; retour imparfait (V) |
| Center (forme et carat) | bouton | panneau : 9 formes, curseur de carats 0,25 à 10 (pas 0,01), orientation Classic / East-West (marquise) ; Apply & Return | marquise 1 ct : 1 908 $ ; marquise 2 ct : 2 052 $ (ronde 1 ct : 1 794 $) ; passe automatiquement à 6 griffes (V) | fonctionne |
| Natural / Lab Grown | bascule | aucun effet visible sur le prix de la monture | 1 872 $ dans les deux cas | fonctionne (V) |
| Skip (pierre) | bouton | non testé | | non testé |
| Head : None / Basket / Halo / Hidden Halo / Bezel | 5 boutons | change la tête | None 1 794 $ ; Basket 1 839 $ ; Halo 2 505 $ ; Hidden Halo 2 220 $ ; Bezel 1 908 $ | fonctionne (V) |
| Prong count : 4 Classic / 4 Compass / 6 Prong | 3 boutons | nombre et disposition des griffes | 4 Classic et 4 Compass 1 794 $ ; 6 Prong 1 908 $ | fonctionne (V) |
| Prong tips : Claw / Petite Claw / Rounded / Tab | 4 boutons | forme du bout des griffes | 1 794 $ pour les quatre | fonctionne (V) |
| Prong Pave : None / Pave | 2 boutons | pavé sur les griffes | Pave 2 217 $ | fonctionne (V) |
| Band style : Round / Square | 2 boutons | section de l'anneau | Square 1 983 $ ; Round 1 794 $ | fonctionne (V) |
| Cathedral : None / Cathedral | 2 boutons | épaulements | Cathedral 1 917 $ | fonctionne (V) |
| Pave style : None / Petite French | 2 boutons | pavé sur l'anneau | Petite French 3 081 $ (cumul, la remise à zéro précédente avait laissé 1 839 $) | fonctionne ; mesure cumulée (V) |
| Band width | curseur 1,5 à 4 mm (défaut 1,7) + champ | épaisseur de l'anneau | 4 mm : 3 294 $ ; 1,5 mm : 1 671 $ | fonctionne (V) |
| Ring size (US) | curseur 3 à 13 (défaut 6) + champ | taille de doigt | taille 13 : 1 947 $ ; taille 3 : 1 557 $ | fonctionne (V) |
| Fit : Comfort / Standard | 2 boutons | profil intérieur | Standard : 1 596 $ contre 1 557 $ | fonctionne (V) |
| Add Engraving | champ texte 14 caractères + Block / Cursive | présent ; Cursive cliqué | aucun changement (1 596 $) | présent ; saisie non testée |
| Surprise Stones : None / Add Stones | boutons | pierres cachées | non testé | non testé |
| + Add Wedding Band | bouton | présent | non testé | non testé |
| Next | bouton | 3 appels réseau vers `sa-custom-backend.onrender.com` : `ring/create-ring`, `api/ring-pricing`, `s3/upload-to-s3` ; aucun changement visible dans le cadre isolé | | action exécutée une fois (V) ; suite non vue |
| Rotation 3D par glissement | zone du rendu | non testée par geste ; rendu WebGL présent (1 canevas) | | partiel |

Autres pages :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu Create : Design Your Ring, Build Your Wedding Band (`/pages/wedding-band-builder`), Start from Scratch, Custom Engagement Rings | liens | pages existantes ; alliance et Custom non ouverts | | partiel |
| `/pages/engagement-ring-builder` (menu Custom) | page | titre seul « Engagement Ring Builder », corps vide à 5 s (V) | | défaut possible (I) |
| Diamonds : Natural / Lab Grown / View all (`/diamonds`) | recherche de pierres | filtres : forme (10), prix, carat, coupe, couleur D à L, pureté IF à SI2, recherche par SKU, 20 à 120 par page ; résultat : « 0 diamonds found » après 18 s, appel `get_diamonds` 200 | | **sans résultat** (V, 2 essais) |
| Catalogue `/jewelry/engagement-rings` | liste | 68 produits ; filtres : sous-catégorie, prix, style, matière, pierre, forme ; tri : Featured, High to Low, Low to High, Newest ; mention « LAB DIAMOND » ou « Engagement Ring », « In stock », « Ships Today (if ordered by 4:00 pm EST) » | de 950 $ à plus de 8 000 $ (V) | fonctionne ; filtres non cliqués |
| Menu : Bridal, Fine Jewelry, Diamonds, Custom, Services, About ; recherche, compte, favoris, panier (icônes) | liens, bascules | non actionnés : `*?kw=`, compte et panier sont INTERDITS par robots.txt | | non testés |
| Make an appointment, Contact, Check repair status, Custom Gallery | liens | adresses existantes ; non ouvertes | | non testés |
| Bandeau cookies : Decline / Accept | boutons | « Decline all cookies » recharge la page (l'assistant revient à l'étape 1) | | fonctionne (V) |

## Options disponibles (V)

- **Métal** : 14 k jaune, blanc, rose ; 18 k jaune, blanc, rose ; platine ; mixte (tête et anneau de deux couleurs). Les deux titres sont proposés pour chaque couleur.
- **Pierre centrale** : naturelle ou synthétique (« Lab Grown ») ; 9 formes (ronde, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant) ; 0,25 à 10 ct au curseur ; orientation classique ou est-ouest (marquise).
- **Nombre de pierres** : une (solitaire), deux, trois.
- **Tête** : aucune, basket, halo, halo caché, bezel ; 4 griffes classiques, 4 en compas, 6 griffes ; bouts de griffe claw, petite claw, ronds, tab ; griffes pavées ou non.
- **Anneau** : rond ou carré ; cathédrale ou non ; pavé « petite française » ou non ; largeur 1,5 à 4 mm ; taille US 3 à 13 ; confort ou standard.
- **Gravure** : 14 caractères, deux styles (bloc, cursive). **Pierres cachées** et **alliance assortie** : proposées, non testées.
- **Visuel** : rendu 3D temps réel (canevas WebGL), glissement pour tourner annoncé par l'interface (I). Pas de vidéo, de photo de bague portée ni d'essayage dans l'outil.
- **Services** : prise de rendez-vous en boutique ou virtuel, enregistrement de la bague (« Save ring »), SMS.

## Prix, délais, retours, garanties

- **Prix** : « MSRP » **hors pierre centrale** (« Setting only »), mis à jour à chaque choix ; pas de décomposition ; **le prix du diamant n'apparaît jamais** dans l'outil (choix en boutique) (V). Catalogue : prix fixes, 950 $ à 8 295 $ et plus (V). Monnaie : dollar ; taxes non indiquées.
- **Délai** : assistant : « 1 - 4 weeks » parmi les besoins ; page d'accueil du concepteur : bague prête « in just a couple of weeks » (V, inventaire du même jour ; formulation non relue dans l'outil). Catalogue : « Ships Today (if ordered by 4:00 pm EST) ».
- **Retours** : 30 jours, sans usage, emballage d'origine ; **« Personalized or custom pieces are not eligible for returns »** ; échanges non offerts pour le sur-mesure ; retour par la poste à la charge du client ; remboursement sous 7 jours sur le moyen d'origine, crédit en magasin sur demande (V, `/return-policy`).
- **Garanties** : non lues sur le site. Nettoyage et inspection, remise à taille, réparation : pages de services existent (V, menu).
- **Financement** : Comenity Capital Bank et Synchrony Bank, plans « same-as-cash » et sans intérêt, sur rendez-vous (V, `/financing-options`).
- **Certificats** : liens vers GIA et JVC/JBT dans le pied de page (V) ; mention de certificat par pierre dans la recherche de diamants (colonne « Lab ») non vérifiable (aucun résultat). Libellé synthétique : « Lab Grown » (concepteur), « LAB DIAMOND » (catalogue) (V).
- **Langues, devises** : anglais, dollar (V).
- **Panier** : non ouvert (INTERDIT par robots.txt). Le sur-mesure ne se paie pas en ligne : le visiteur est invité à enregistrer sa bague et à prendre rendez-vous (V pour l'assistant et la fenêtre mobile ; I pour la suite).

## Confiance et service

- Avis : « 4.8 of 5 from 290 reviews » sur Google, cinq avis affichés avec date et nom (V, `/testimonials`). Associations en pied de page : BBB, Jewelers of America, JVC, JBT, GIA, RJO (V).
- Fabricant et atelier : « Master Jeweler », « third generation, established 1948 » (logo, V). Processus sur mesure en trois temps : esquisse, **CAO photoréaliste avec aperçu 360°**, finition (V, `/pages/custom-designs`).
- Téléphone (303) 776-2992 ; adresse 2201 Ken Pratt Blvd, Suite E, Longmont ; boutique ouverte du mardi au samedi (V, pied de page). Chat Podium annoncé dans les requêtes ; non ouvert.
- Preuves de fabrication : galerie « Custom Gallery » (non ouverte) ; pas de suivi de commande en ligne pour le sur-mesure ; « Check Repair Status » pour les réparations seulement (V, menu).

## Points forts à retenir pour JR Diamond

1. **Un vrai concepteur 3D paramétrique** qui montre la bague changer à chaque option et recalcule un prix (tête, griffes, pavé, largeur, taille). Preuve : 25 contrôles relevés avec un prix par option dans le tableau ci-dessus ; les chargements de modèles `.glb` par pièce (`Band0.22.glb`, griffes, halos) sont visibles dans le réseau. Piste : nos configurations pourraient aussi expliquer l'effet de chaque option sur le prix.
2. **Prix de la monture séparé de la pierre** (« Setting only ») : décomposition simple et honnête, que JR Diamond peut pousser plus loin (métal, façon, pierre). Preuve : libellé « MSRP (Setting only) ».
3. **L'écart de prix visible par option** : par exemple halo +711 $, pavé petite française +1 287 $ environ, largeur 4 mm +1 500 $ (mesures du 15/11, cumulées avec réserve). Utile pour calibrer nos écarts.
4. **Assistant d'entrée en 4 étapes** avec « Decide later » partout, qui prépare le concepteur sans bloquer. Preuve : 4 écrans relevés.
5. **Orientation est-ouest et passage automatique à 6 griffes** pour la marquise, ajustés par l'outil (V). Pertinent pour notre modèle pilote marquise.
6. **Page « Custom Process » : CAO photoréaliste avec aperçu 360° avant fabrication** : même promesse que « ce que vous voyez existe », sans preuve d'atelier (V, `/pages/custom-designs`).
7. **Avis Google intégrés avec note et nombre** (4,8 sur 290) (V).

## Défauts observés

- **Passage de l'assistant au concepteur en échec sur ordinateur** : « Something went wrong », 3 essais ; la console signale un blocage CORS sur les appels `jeweleros.com/api/create/from-ring-config`, `api/widget/config` et `api/config` (V). Sur iPhone, le concepteur s'ouvre (V). Cause non établie (S : configuration du service, ou effet de ce navigateur sans GPU et du proxy).
- **Le prix met de 2 à 25 s à se mettre à jour** après un choix ; plusieurs lectures intermédiaires étaient fausses (V). Le retour à une pierre ou à « None » ne ramène pas toujours le prix de départ (1 872 $ au lieu de 1 794 $ ; 1 839 $) (V).
- **Aucun prix de diamant** ; « 0 diamonds found » dans la recherche de pierres, naturel et synthétique (V, 2 essais). Page `engagement-ring-builder` vide (V).
- **Fenêtre de capture de nom et téléphone avec consentement SMS** avant d'utiliser le concepteur sur iPhone ; « Continue without saving » existe mais en gris clair (V, capture).
- **Platine à 1 383 $ contre 1 794 $ pour l'or 18 k jaune** : écart inhabituel, prix de démonstration probable (I). Même prix pour 4 Classic et 4 Compass, pour les quatre bouts de griffe, pour Natural et Lab Grown (V).
- Le bouton « Next » envoie la bague à un serveur tiers sans écran de confirmation visible (V).

## Mesures de temps (V, proxy, navigateur sans cache)

| Appareil | Premier visuel utile | LCP |
|---|---|---|
| Ordinateur, assistant | écran « Let's start designing your ring » après 3,5 s | 824 ms (fond de page) |
| iPhone 13, assistant | 3,8 s | 852 ms |
| Ordinateur, concepteur seul (Netlify) | interface « Head & Band Color » après 6,4 s ; ring 3D complet et prix lisible vers 13 s | n/a |
| iPhone 13, concepteur dans le cadre | cadre présent 12 s après le dernier clic, canevas créé | n/a |

## Limites de l'audit

- Pas de GPU : qualité du rendu 3D jugée sur captures ; rotation par geste non testée.
- Le panier, la caisse et le compte sont INTERDITS par robots.txt : non visités. Le tarif de livraison et les moyens de paiement du sur-mesure ne sont pas connus.
- « Next » a été cliqué une fois dans le concepteur isolé (création d'un enregistrement de bague côté serveur du service, sans donnée personnelle) ; non répété.
- Wedding Band, Add Stones, saisie de gravure, Skip, huit cartes de style, filtres du catalogue non actionnés. Les écarts de prix par option sont mesurés dans une seule session et sur l'état de départ de la page, certains en cumul.
- L'assistant sur ordinateur ne mène pas au concepteur : la comparaison porte sur le concepteur ouvert directement (même outil que le cadre intégré, I).
- Catalogue : un seul chargement de la liste ; fiches produit non ouvertes.

## Sources

- https://www.snyderjewelers.com/pages/design-your-ring (V)
- https://jeweleros-custom.netlify.app/?jewelerid=9o2KAt6WCyE3 (V)
- https://www.snyderjewelers.com/return-policy, /financing-options, /pages/custom-designs, /testimonials, /diamonds, /jewelry/engagement-rings (V)
- https://www.snyderjewelers.com/robots.txt (V : `Crawl-delay: 2` ; `*/cart`, `*/checkout`, `*/myaccount`, `*?kw=` interdits)
