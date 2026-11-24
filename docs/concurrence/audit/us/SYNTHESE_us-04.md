# Synthèse États-Unis, groupe us-04 : Kansas, Kentucky, Louisiane, Maine, Maryland

Date : 24/11/2026. Cette synthèse reprend les 20 audits du groupe (4 par territoire) et les 5 `INVENTAIRE.md` des dossiers `kansas/`, `kentucky/`, `louisiana/`, `maine/`, `maryland/`.
Aucune page n'a été rouverte pour l'écrire : chaque fait vient du rapport cité, qui donne l'adresse lue. Audits du 15/11 (Solomon et Kuhn's refaits le 24/11 ; robots.txt de Nelson Coleman et Little Treasury recontrôlé le 24/11).

Marques, reprises des rapports : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé · **[Inv]** fait tiré d'un `INVENTAIRE.md`, pas de l'audit · **[ext]** extrait de moteur de recherche, page non ouverte · **[P1]** constat obtenu par une requête vers un chemin interdit par robots.txt, signalé par le rapport lui-même.
Sans marque, un fait est [V] dans le rapport cité. Dans les « n/15 », les 5 sites bloqués ne sont pas comptés. Le classement par impact est un jugement [I].
Temps mesurés depuis un centre de données, Chromium sans carte graphique, iPhone 13 émulé, une mesure par cas : ordres de grandeur.

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé (USD) | Rapport |
|---|---|---|---|---|---|
| Kansas | Stephen's Fine Jewelry | partiel : étape diamant vide (0 résultat), étape 3 non atteinte, panier interdit | Punchmark : 6 photos par monture, vidéo Stuller sur 5 montures sur 24 (non lue) ; pas de 3D ; plus grand élément 0,6 à 0,9 s | monture seule 1 275,54 à 6 970,89 $ (page 1) ; taille +19 à +46 $ ; « 7-10 Business Days » | [rapport](kansas/stephens-fine-jewelry.md) |
| Kansas | Scott's Diamond Designs | partiel : page de départ seule ; lecture suivante refusée par le contrôle d'autorisation de la session | non relevé : catalogue dans une iframe Stuller (`Disallow: /`) ; page hôte 1,3 s / 1,6 s | aucun lu ; bague 14 k à 700 $ [Inv] | [rapport](kansas/scotts-diamond-designs.md) |
| Kansas | Solomon Jewelers | partiel : quiz IA arrêté à l'étape 1/13 (coordonnées exigées) ; panier interdit | quiz ShowroomPro (images générées par IA) ; fiche : 5 photos, 0 vidéo ; photo 1,5 s / 1,3 s | 329 à 8 335 $ ; 6 680 $ « au lieu de » 11 130 $ ; pas de décomposition | [rapport](kansas/solomon-jewelers.md) |
| Kansas | Kuhn's Diamond Jewelers | partiel : pas de configurateur ; modèles de base chez Stuller (`Disallow: /`) | aucun visuel de bague ; titre 2,4 s / 1,8 s | aucun ; devis et rendus « within 24 Hours » | [rapport](kansas/kuhns-diamond-jewelers.md) |
| Kentucky | Morris Jewelry | partiel : liste de diamants vide 2 fois sur 3 ; étape 3 et panier non atteints | CaratWise : 360°, vue portée, vidéo, plein écran ; 3D encore en chargement à 5 s, image à 15 s | monture Amara 1 647 $ (synthétique, 14 k), 1 730 $ (naturel), 2 280 $ (18 k) ; diamants 1 181 à 2 380 $ (extrait) | [rapport](kentucky/morris-jewelry.md) |
| Kentucky | Herzog Jewelers | partiel : designer 3D JewelerOS en erreur (2/2) ; panier interdit | questionnaire en 4 étapes, cartes en 2,7 s / 3,4 s ; 3D non vue | aucun dans le constructeur ; bagues prêtes 1 999 à 6 495 $ | [rapport](kentucky/herzog-jewelers.md) |
| Kentucky | The Leake Co. | partiel : pas de configurateur ; bibliothèque « Ready to Style » sur sous-domaine `Disallow: /` | photos (portfolio de 50), pas de 3D ; photo 1,1 s / 1,2 s | planchers : or 14 k dès 2 000 $, platine 3 000 $, argent 1 000 $ ; frais de création 350 $ déduits | [rapport](kentucky/the-leake-co.md) |
| Kentucky | Nick T. Arnold Jewelers | partiel : jusqu'au récapitulatif ; panier interdit ; la moitié des options non actionnées sous charge | CaratWise, 3D 360° (cadre `3d.caratwise.com`) ; outil en 5,8 à 12,9 s (ordinateur), 5,7 à 17,8 s (iPhone) | monture 1 240 $ + diamant 1,75 ct synthétique 1 101 $ = 2 341 $ hors taxe ; pavé +602 $, bezel +235 $ | [rapport](kentucky/nick-t-arnold-jewelers.md) |
| Louisiane | Embark Fine Jewelry | **bloqué** : robots.txt en HTTP 429 « Verifying your connection… », aucune page ouverte | non audité | montures sans pierre 2 155 à 3 550 $ [Inv] | [rapport](louisiana/embark-fine-jewelry.md) |
| Louisiane | Aucoin Hart Jewelers | partiel : pas de constructeur ; fiche sans bouton d'achat ; écart à robots.txt signalé | 1 photo par fiche, ni 360° ni vidéo ; /custom-design 1,5 s / 11,8 s | bagues finies 4 250 à 46 500 $ (page 1) ; fiche 4 600 $ « Inquire » | [rapport](louisiana/aucoin-hart-jewelers.md) |
| Louisiane | Dianna Rae Jewelry | partiel : pas de configurateur ; panier et recherche de diamants interdits | 2 photos fixes ; photo 1,4 s / 1,0 s | 1 795 à 24 995 $ ; prototype 3D contre 150 $ déduits | [rapport](louisiana/dianna-rae-jewelry.md) |
| Louisiane | Friend & Company | partiel : constructeur GemFind jamais affiché (squelette gris 25 à 32 s) | aucune visionneuse ; fiche en photos | 1 200 à 9 000 $ (30 premières) ou « CALL FOR PRICE » | [rapport](louisiana/friend-and-company-fine-jewelers.md) |
| Maine | Day's Jewelers | partiel : configuration complète ; panier interdit ; politiques en 429 | Gemist : images de rendu (face, profil) et vidéo sur main de 11 s, pas de 3D manipulable ; visuel 5,5 s, zone blanche 4 fois sur 5 | monture dès 2 395 $ ; pierre naturelle 750 à 35 925 $ ; total en direct (ex. 33 190 $) | [rapport](maine/days-jewelers.md) |
| Maine | Brown Goldsmiths | **bloqué** : 403 malgré un robots.txt qui autorise la page | non audité | aucun | [rapport](maine/brown-goldsmiths.md) |
| Maine | Ellsworth Jewelers | partiel : designer 3D JewelerOS non chargé (CORS) ; panier interdit | questionnaire en 4 étapes (4,1 à 5,3 s) ; vidéo dans la galerie des montures | aucun dans le constructeur ; montures sans pierre 1 546 à 4 777 $ (10 k) | [rapport](maine/ellsworth-jewelers.md) |
| Maine | Maine Gold & Silver | **bloqué** : robots.txt en HTTP 429 | non audité | « CALL FOR PRICE » sur 552 montures [Inv] | [rapport](maine/maine-gold-silver.md) |
| Maryland | Nelson Coleman Jewelers | **bloqué** : robots.txt en HTTP 429 le 24/11 | non audité | 89 bagues de 375 à 29 950 $ [Inv] | [rapport](maryland/nelson-coleman-jewelers.md) |
| Maryland | Little Treasury Jewelers | **bloqué** : robots.txt en HTTP 429 le 24/11 | non audité | 31 montures de 1 300 à 8 200 $ [Inv] | [rapport](maryland/little-treasury-jewelers.md) |
| Maryland | Meritage Jewelers | partiel : étape diamant vide (0 résultat, 3 essais) ; panier interdit | Punchmark : 5 photos de catalogue, pas de 3D ; photo 2,2 s / 1,6 s | monture seule 2 507,64 $ (14 k jaune) ; taille +19 à +46 $ ; « 7-10 Business Days » | [rapport](maryland/meritage-jewelers.md) |
| Maryland | Bloomstone | partiel : fiche à options, pas de constructeur ; panier interdit | 17 médias dont 1 vidéo, pas de 3D ; image 2,3 s / 1,3 s | bague complète : 3 075 $ (1,50 ct) à 5 100 $ (3,00 ct), 18 k | [rapport](maryland/bloomstone.md) |

## 2. Fonctions et options récurrentes

| Fonction ou option | n/15 | Sites (preuve dans le rapport du site) |
|---|---|---|
| Outil loué à un fournisseur | 12 | CaratWise (Morris, Nick T. Arnold), JewelerOS (Herzog, Ellsworth), Punchmark (Stephen's, Meritage, Ellsworth `/ringsettings`), Gemist (Day's), GemFind (Friend), ShowroomPro (Solomon), Stuller en iframe (Scott's, Kuhn's, Leake). Aucun outil maison ; « aucun configurateur 3D propre à un joaillier » en Louisiane et au Kansas [Inv] |
| Constructeur « monture puis pierre » vu en marche | 6 | Stephen's, Morris, Nick T. Arnold, Day's, Ellsworth (`/ringsettings`), Meritage. Ordre libre : Meritage ; Embark [Inv] |
| … étape pierre vide (« 0 diamonds found ») | 3/6 | Stephen's, Meritage, Ellsworth (`recordsTotal: 0` chez les deux premiers) ; liste instable chez Morris (vide 2 fois sur 3) |
| … total bague + pierre atteint | 2/6 | Nick T. Arnold (2 341 $ hors taxe), Day's (33 190 $) |
| … pierre préfiltrée sur la monture | 2 | Stephen's (princesse 0,86 à 1,16 ct), Meritage (forme et carat dans l'adresse) |
| 3D manipulable vue | 2 | Morris et Nick T. Arnold (CaratWise, lente). Designer 3D JewelerOS vu : 0/2 (Herzog `ERR_FAILED`, Ellsworth CORS) ; GemFind jamais affiché (Friend) |
| Vidéo de la bague sur la fiche | 5 | Morris, Day's (sur main, 11 s), Ellsworth, Bloomstone, Stephen's (5 montures sur 24, non lue) |
| Prix affiché en ligne (parcours ou catalogue) | 12 | Stephen's, Solomon, Morris, Herzog, Nick T. Arnold, Aucoin Hart, Dianna Rae, Friend (en partie), Day's, Ellsworth, Meritage, Bloomstone ; planchers seulement : Leake. Aucun : Kuhn's, Scott's (non lu) |
| … monture seule, pierre à part | 6 | Stephen's, Morris (« Setting Only »), Nick T. Arnold, Day's, Ellsworth et Meritage (« CENTER STONE NOT INCLUDED ») |
| … bague complète, un prix par fiche ou variante | 6 | Solomon, Herzog (36 bagues prêtes), Aucoin Hart, Dianna Rae, Friend, Bloomstone |
| … surcoût par option chiffré | 5 | Morris (naturel +83 $, 18 k +633 $), Nick T. Arnold (pavé +602 $, bezel +235 $, diamond basket +627 $), Day's (pavé +600 $, 18 k +600 $, platine +700 $), Stephen's et Meritage (taille +19 à +46 $) |
| … décomposé en métal, façon, marge | 0 | poids du métal affiché sans lien avec le prix : Stephen's (3,66 g), Meritage (3,71 g) |
| Aucun prix dans le constructeur | 4 | Herzog, Ellsworth (questionnaires JewelerOS), Kuhn's, Solomon (quiz) |
| Configuration dans l'adresse | 3 | Morris, Nick T. Arnold, Day's ; variante dans l'adresse : Bloomstone (`?variant=`). Herzog : une seule adresse pour 4 étapes |
| Enregistrer la conception (lien par e-mail) | 3 | Morris, Nick T. Arnold, Day's (« Save Your Design ») ; bouton « Partager » : Bloomstone |
| Naturel et synthétique proposés | 9 | Stephen's, Solomon, Morris, Herzog, Nick T. Arnold, Leake, Dianna Rae, Ellsworth, Meritage. Synthétique seul : Bloomstone. Naturel seul en ligne : Day's (synthétique en boutique), Aucoin Hart (aucun filtre ; discours contre le synthétique [Inv]), Friend (aucune mention) |
| … synthétique par défaut | 2 | Morris, Nick T. Arnold (`dia_origin=LGN`) |
| Or 14 k, 18 k et platine dans le parcours | 3 | Morris, Nick T. Arnold, Day's (pas d'or blanc 18 k ni de rose). Couleur seule, sans titre : questionnaires JewelerOS (Herzog, Ellsworth) ; 4 couleurs sans titre : Stephen's, Meritage |
| Métal de l'anneau et de la couronne séparés | 2 | Morris, Nick T. Arnold |
| Taille de doigt dans le parcours ou la fiche | 7 | Stephen's, Meritage, Nick T. Arnold (récapitulatif), Day's (au quart), Solomon, Aucoin Hart, Ellsworth. Absente : Morris ; confirmée après la commande : Bloomstone |
| Gravure en ligne | 3 | Morris et Nick T. Arnold (18 caractères, 3 polices), Day's (35 $, 15 caractères) |
| Délai affiché | 11 | 7-10 jours ouvrés pour la monture (Stephen's, Meritage, Ellsworth) ; 2 semaines ou 10-12 jours (Kuhn's) ; 4 semaines (Day's) ; 4-6 semaines (Solomon, Dianna Rae, Bloomstone hors stock) ; 4-8 semaines (Leake, Aucoin Hart) ; 6-8 semaines (Morris, page sur mesure). Absent du constructeur : Morris, Nick T. Arnold, Herzog |
| … délai contradictoire entre deux pages | 3 | Solomon (4-6 / 4-8 sem.), Kuhn's (2 sem. / 10-12 j), Aucoin Hart (3-6 / 4-8 sem.) |
| Délai souhaité demandé au client | 2 | Herzog, Ellsworth (1-4 semaines à 3-6 mois) |
| Rendu CAO validé avant fabrication (promesse écrite) | 6 | Kuhn's (rendus sous 24 h), Leake, Aucoin Hart, Dianna Rae, Morris, Meritage. Maquette physique (cire ou impression 3D) : Leake, Aucoin Hart, Dianna Rae, Morris, Meritage (5) |
| Photos ou vidéos de fabrication de la commande | 0 | tableau de bord privé de suivi : Leake ; atelier derrière une vitre en salle : Dianna Rae |
| Sur-mesure exclu des retours | 10 | Stephen's, Solomon, Morris, Herzog, Nick T. Arnold, Leake, Day's, Ellsworth, Meritage, Bloomstone. Nuancé : Dianna Rae (remboursement partiel, annulation gratuite pendant la conception). Diamants « as-is » : Nick T. Arnold, Ellsworth, Meritage |
| Délai de retour hors sur-mesure | — | 14 j (Ellsworth), 15 j (Stephen's, Meritage), 30 j (Solomon, Herzog, Nick T. Arnold, Dianna Rae, Bloomstone, Day's [ext]) ; 14 j pour l'Union européenne : Solomon, Bloomstone |
| Retour aux frais du client | 5 | Stephen's, Herzog, Nick T. Arnold, Ellsworth, Meritage |
| Pierre du client ou bijou de famille | 8 | Stephen's, Kuhn's (envoi de photos), Morris, Leake, Friend (« Reimagine something old »), Dianna Rae, Day's (diamant déjà possédé), Solomon [Inv] |
| Reprise du diamant pour un plus gros | 2 | Herzog (crédit au prix d'achat, rapport GIA/IGI exigé), Day's (naturel). Prix garanti 30 jours : Aucoin Hart |
| Financement affiché | 11 | Stephen's, Solomon, Kuhn's, Herzog, Nick T. Arnold, Leake, Aucoin Hart, Dianna Rae (mensualité sur la fiche), Day's, Ellsworth (simulateur), Meritage |
| Livraison gratuite annoncée | 6 | Solomon (100 ou 200 $), Herzog (100 $), Nick T. Arnold (250 $), Aucoin Hart, Day's (100 $), Bloomstone |
| Avis chiffrés sur le site | 3 | Stephen's (4,8 sur 66 Google), Kuhn's (5,0 sur 25, avis de 5 ans), Meritage (4,9 sur 5). Page d'avis factice : Nick T. Arnold |
| Chat ou SMS | 8 | Morris, Herzog et Nick T. Arnold (Clientbook), Aucoin Hart et Friend (Podium), Dianna Rae, Ellsworth, Solomon. WhatsApp visible : 0/15 (numéro dans les données du quiz de Solomon seulement) |
| Rendez-vous en visio | 3 | Leake (tout le pays, questionnaire de préparation), Solomon, Dianna Rae |
| Anglais et dollar seulement | 15 | tous ; quiz de Solomon en anglais, espagnol, français |

## 3. Points forts à retenir pour JR Diamond, classés par impact [I]

1. **Prix en direct par composante, total en fin de parcours.** Nick T. Arnold : monture « (Setting Only) » 1 240 $, diamant 1 101 $, total 2 341 $ « (Exclusive tax) », avertissement « Diamond price may change when finalize your design » ([rapport](kentucky/nick-t-arnold-jewelers.md)) ; Day's : total cumulé sur le bouton à chaque onglet, 2 395 $ puis 33 190 $ ([rapport](maine/days-jewelers.md)). Seuls 2 sites sur 15 vont jusqu'au total ; aucun n'explique métal, façon et marge : la place du « prix expliqué » reste libre.
2. **Surcoût de chaque option lisible.** Day's : pavé +600 $, 18 k +600 $, platine +700 $ ; Morris : naturel +83 $, 18 k +633 $ sur la même monture ([rapport](kentucky/morris-jewelry.md)) ; Stephen's et Meritage : supplément par taille de doigt affiché (+19 à +46 $) ([rapport](kansas/stephens-fine-jewelry.md)). Modèle direct pour l'écart 14 k / 18 k du configurateur.
3. **Frais de conception déduits et échéancier écrit.** The Leake Co. : 350 $ couvrant 5 planches, une CAO avec 3 retouches et un prototype imprimé, déduits du prix ; puis 50 % au lancement, solde à la livraison ; prix planchers par métal publiés ([rapport](kentucky/the-leake-co.md)). Dianna Rae : prototype imprimé en 3D contre 150 $ déduits, devis exact joint au rendu, « Can I see my design before I pay? Yes », annulation gratuite pendant la conception ([rapport](louisiana/dianna-rae-jewelry.md)). Applicable à la transformation de bijoux de famille et au parcours devis → prix confirmé de `docs/PAIEMENT.md` [I].
4. **Suivi du projet en ligne : promesse faite une fois, preuve jamais montrée.** Leake : « private online design board » pour suivre croquis, rendus et prototype ; Dianna Rae : atelier derrière une vitre, mais en salle. 0/15 montre des photos ou vidéos de fabrication de la commande : c'est le terrain libre de « on voit naître son bijou ».
5. **Partage et reprise sans compte.** Configuration dans l'adresse chez Morris, Nick T. Arnold et Day's ; « Save Your Design » par lien e-mail chez les trois ; Bloomstone garde la variante dans l'adresse et a un bouton « Partager » ([rapport](maryland/bloomstone.md)). JR Diamond l'a déjà fait (24/11) : à garder au niveau.
6. **Fiche technique en millimètres et pierre documentée.** Morris : 12 pierres de côté, 0,08 ct, largeur 1,7 mm, épaisseur 1,5 mm ; Nick T. Arnold : onglets 4C avec phrases d'explication, certificat, mesures, 360° de la pierre. Répond à la demande de cotes en mm relevée dans les rapports de forums (`docs/concurrence/forums/`).
7. **Entrée guidée sans impasse.** Herzog et Ellsworth : questionnaire en 4 étapes avec « Decide later » et « Skip », historique des choix et « Back », naturel ou synthétique dès l'étape de la pierre, puis « When do you need your ring? » ([rapport](maine/ellsworth-jewelers.md)). La réponse « 14 jours ouvrés » s'y loge directement. À l'inverse, Solomon exige nom, e-mail et téléphone dès l'étape 1/13 ([rapport](kansas/solomon-jewelers.md)).
8. **Délai court, chiffré en jours.** Kuhn's : devis et rendus sous 24 h, bague « within 2 Weeks » ([rapport](kansas/kuhns-diamond-jewelers.md)) ; Solomon : délai selon le type de commande (3-7 jours ouvrés en stock, 4-6 semaines sur mesure). Ailleurs 4 à 8 semaines : les 14 jours ouvrés de JR Diamond sont le délai le plus court du groupe pour une pièce faite à la commande [I].
9. **Politique du sur-mesure écrite en clair.** Herzog : 30 jours, personnalisé exclu ; Leake : annulation possible seulement avant la production, défaut à signaler sous 14 jours ; Bloomstone et Solomon : 14 jours pour l'Union européenne. Matière pour l'avocat (exception « fabriqué sur mesure ») et pour la France.
10. **Confiance sur la pierre après l'achat.** Herzog : reprise du diamant au prix payé, rapport GIA ou IGI exigé ([rapport](kentucky/herzog-jewelers.md)) ; Day's : trade-up du naturel ; Aucoin Hart : prix du diamant garanti 30 jours, garantie à vie de fabrication ([rapport](louisiana/aucoin-hart-jewelers.md)).
11. **Transformation de bijoux de famille mise en avant.** Friend : section « Reimagine something old » ([rapport](louisiana/friend-and-company-fine-jewelers.md)) ; Kuhn's : formulaire d'idée avec photos ; Embark : « Redesign Kit » [Inv]. 8 sites sur 15 la proposent, toujours en rendez-vous.
12. **Étapes de fabrication nommées.** Aucoin Hart : 7 étapes (rendu « from every angle », cire ou impression 3D, fonte sur place, gravure à la main). Texte seul, sans image d'une commande réelle : JR Diamond peut y mettre ses photos.

## 4. Défauts fréquents à éviter

- **Outil loué qui n'aboutit pas.** Designer JewelerOS en erreur (Herzog `ERR_FAILED`, Ellsworth CORS ; cause possiblement liée à l'environnement d'audit [I]) ; GemFind en squelette gris 25 à 32 s (Friend) ; quiz bloqué par une porte de coordonnées (Solomon).
- **Parcours vides.** « 0 diamonds found » chez Stephen's, Meritage et Ellsworth (constructeurs Punchmark) ; liste vide 2 fois sur 3 chez Morris : le client ne voit jamais de prix complet.
- **Lenteur.** CaratWise : outil en 5,8 à 17,8 s, boutons désactivés tant que la 3D charge (Nick T. Arnold), 3D à 15 s (Morris) ; filtres en 5,6 à 7,6 s (Stephen's) et 7 s (Meritage) ; visuel à 5,5 s et zone blanche 4 fois sur 5 (Day's) ; 11,8 s sur iPhone (Aucoin Hart).
- **Image qui ne montre pas le choix.** Même rendu pour toutes les pierres, pierre en icône générique (Day's) ; photos de catalogue Stuller (Stephen's, Meritage) ; images générées par IA, « concept images, not exact SKU renders » (Solomon).
- **Contrôles sans effet.** Tri et saisie de prix (Stephen's) ; « CONFIGURE », « More payment options » et « Shipping » en `#`, « Chat now » vers un domaine de démonstration (Solomon) ; bascule silencieuse vers une autre variante (Bloomstone) ; prix « $0,000 » transitoire (Day's) ; styles cumulés sans le dire (Meritage).
- **Textes contradictoires ou non finis.** Seuil de livraison, délai, retours et certificat contradictoires (Solomon) ; libellés GIA et IGI croisés, pierre certifiée GCAL, retours 30 puis 15 jours, page d'avis en latin de 2017 (Nick T. Arnold) ; page Synchrony écrite pour les commerçants et coquilles « SYNCRHONY », « Diammond » (Meritage) ; liens 404 et « dimaond » (Stephen's) ; copyright 2015 (Kuhn's) ; description 0,50-3,00 ct et poire contre 4 tailles et 4 formes vendues (Bloomstone).
- **Stock affiché faux.** Toutes les variantes « sold out » avec « Hurry! Low inventory » (Solomon) ; inventaire qui passe de 69 230 à 69 008 diamants en quelques minutes (Nick T. Arnold).
- **Certificat absent ou flou.** Aucun laboratoire sur la fiche (Dianna Rae, Bloomstone) ; pierres vendues en bandes sans certificat individuel (Day's) ; ni GIA ni IGI dans la FAQ (Leake).
- **Vente finale sans nuance.** Sur-mesure exclu chez 10/15, retours aux frais du client chez 5, diamants « as-is » chez 3 ; fichiers CAO et moules non remis au client (Leake) ; bandeau de cookies sans refus (Leake).
- **Écran encombré.** Bulle de chat sur le bouton « Choose This Setting » (Morris) ; bandeau de cookies sur la dernière carte (Ellsworth) ; fenêtre d'inscription sur le titre (Scott's) ou sur l'outil (Day's).

## 5. Couverture

- **Territoires sans site** : aucun. 5 territoires, 20 sites (rangs 1 à 4 de chaque inventaire).
- **Statuts** : 0 complet, 15 partiels, 5 bloqués : Embark, Maine Gold & Silver, Nelson Coleman, Little Treasury (robots.txt en HTTP 429 « Verifying your connection… », lisible à l'inventaire du 15/11) et Brown Goldsmiths (403). Leurs faits viennent de l'inventaire [Inv] ou d'extraits [ext] et ne sont pas comptés dans les « n/15 ».
- **Causes des audits partiels** :
  - panier interdit par robots.txt (`/cart`, `/cart/add`) : Stephen's, Solomon, Herzog, Nick T. Arnold, Dianna Rae, Day's, Ellsworth, Meritage, Bloomstone ; aucun panier vu avec un article ;
  - outil tiers non lisible : catalogues Stuller `Disallow: /` (Scott's, Kuhn's, Leake, alliances de Stephen's) ; JewelerOS non chargé (Herzog, Ellsworth) ; GemFind non affiché (Friend) ;
  - étape pierre vide : Stephen's, Meritage, Morris (en partie) ;
  - pas de constructeur : Kuhn's, Leake, Aucoin Hart, Dianna Rae, Bloomstone ;
  - porte de coordonnées : Solomon ; refus du contrôle d'autorisation de la session : Scott's (le site publie un `agents.md` qui demande aux agents de s'identifier) ;
  - pages de politique de Day's en 429 : retours et garantie repris d'extraits [ext].
- **Écarts de méthode à trancher par la session principale** :
  - Aucoin Hart : les clics sur les filtres et « Add to compare » ont fait appeler par la page `/skeleton/1.0/view/ws/`, chemin interdit ; noté par le rapport. Les constats « filtre fonctionne » de ce site relèvent donc de [P1] ; aucun n'est repris ici.
  - Bloomstone : « More payment options » a ouvert une adresse de paiement Shopify (`skip_shop_pay=true`) ; rien saisi, noté par le rapport. Aucun constat n'en dépend.
  - Nelson Coleman et Little Treasury : le 429 du 24/11 vient peut-être de la limitation de débit du mandataire [S] ; même sans lui, GemFind appelle `api.jewelcloud.com` en HTTP simple, non transporté depuis la session.
- **Sites des inventaires non audités** (rangs 5 à 10), dont des pistes fortes [Inv] :
  - Kansas : Visionary Jewelers (galerie de rendus 3D et vidéos d'établi sur YouTube, « Please call for pricing »), House of Diamonds (fabrication entièrement maison, refuse le synthétique : contre-modèle), Burnell's (rendu CAO « while you watch », injoignable depuis la session), Mazzarese, Kizer Cummings, Noble House ; Premier Diamond Source (« only 10% over cost ») ; Calhoun's signale un faux site qui usurpe son nom.
  - Kentucky : Farmer's (GemFind, 413 montures en 14 k, 18 k et platine), Monmouth (JewelerOS, 2 à 4 semaines, catalogue derrière `/verify.html`), Michelson, Clater (189 montures « Call for Price »), Davis, Puckett's. Constructeur d'alliances de Herzog avec prix en direct et « Ships as soon as Tomorrow », non audité.
  - Louisiane : Brilliance in Diamonds (« progress updates » pendant la fabrication), Boudreaux's (rendus 3D interactifs de projets réels ; Cloudflare 403), Fakier (« Cut My Diamond », pierre taillée pour le client), Allain's (Punchmark), Anne Dale, Symmetry. Stuller, fournisseur de plusieurs outils, a son siège à Lafayette.
  - Maine : L & L (même catalogue Punchmark qu'Ellsworth, « Inquire for Price »), Lily and Quartz (prix affichés, 2 à 8 semaines), Cross Jewelers (vente seulement en ligne et par téléphone, 100 % naturel), Springer's, Keith Field, Designs by CC.
  - Maryland : Dickinson (Punchmark par la pierre, « Inquire Now »), Empire (JewelerOS), Colonial (Cloudflare), Sergio's (assistant « Start a Project »), Saxon's (fabrication expliquée), Smyth.
- **Bloqués dès l'inventaire** [Inv] : Merkley Kendrick et Genesis (robots.txt fermé aux robots d'IA), Boudreaux's, Lee Michaels, Adler's, Designs by Aaron, Colonial ; catalogues Thinkspace derrière une page de vérification (Monmouth, Michelson, Pattons, Cut, Ramsey's). À auditer à la main.
- **Limites communes** : une mesure par cas, iPhone émulé dans Chromium (pas Safari), pas de GPU, machine parfois chargée (Nick T. Arnold : 9 à 80 s par clic) ; aucun paiement, chat, WhatsApp ni formulaire ; avis hors site non recoupés ; alliance de kiddouchin non recherchée.
