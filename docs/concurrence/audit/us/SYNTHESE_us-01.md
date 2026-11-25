# Synthèse États-Unis, groupe us-01 : Alabama, Alaska, Arizona, Arkansas, Californie

Date : 24/11/2026. Cette synthèse reprend les 20 audits du groupe (4 par territoire) et les 5 `INVENTAIRE.md` des dossiers `alabama/`, `alaska/`, `arizona/`, `arkansas/`, `california/`.
Aucune page n'a été rouverte pour l'écrire : chaque fait vient du rapport cité, qui donne l'adresse lue. Audits faits le 15/11 (Marquirette's relu le 16/11 ; Christopher et Schubach relevés le 24/11).

Marques, reprises des rapports : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé · **[Inv]** fait tiré d'un `INVENTAIRE.md`, pas de l'audit · **[P1]** constat de deBebians obtenu en déclenchant des adresses interdites par son robots.txt (tri, filtres cumulés, `POST /cart/add`, `/cart.js`), signalé par le rapport lui-même, à garder ou écarter par la session principale.
Sans marque, un fait est [V] dans le rapport cité. Dans les « n/19 », le site bloqué (Schubach) n'est pas compté. Le classement par impact est un jugement [I].
Temps mesurés depuis un centre de données, Chromium sans carte graphique, iPhone 13 émulé : ordres de grandeur.

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé (USD) | Rapport |
|---|---|---|---|---|---|
| Alabama | Hudson-Poole Fine Jewelers | partiel : 3D ouverte par son adresse directe, config. du joaillier non chargée ; assistant coupé par une API interdite | assistant JewelerOS 4 étapes (1,8 s) ; app 3D StoneAlgo, canevas 1,5 s, prix 11 à 37 s ; 24 fichiers glb | 3D : monture seule « MSRP » 2 093 $ (18K jaune, 1 ct) [S : peut-être pas le prix du joaillier] ; classique : 2 495 + 567 = 3 062 $ au panier | [rapport](alabama/hudson-poole-fine-jewelers.md) |
| Alabama | Ware Jewelers | partiel : 3D non atteinte (API interdite) | même assistant (1,9 s) ; classique en photos | monture 2 200 $ + pierre 504 $ = 2 704 $ au panier ; 30 montures de 500 à 3 300 $ | [rapport](alabama/ware-jewelers.md) |
| Alabama | Sabghi Jewelers | partiel : recherche de diamants non actionnée | studio 3D maison Three.js, page unique ; 3D en 6,5 à 9,2 s (ordinateur), 6,9 à 8,1 s (iPhone) | aucun dans le studio ; boutique : 2 999 $ (« Retail » 6 000 $) + 25 $ de port | [rapport](alabama/sabghi-jewelers.md) |
| Alabama | Marquirette's Exquisite Jewelry | partiel : dessinateur 3D non ouvert (API interdite) | assistant JewelerOS, options en 2,1 s | aucun ; « a couple of weeks » | [rapport](alabama/marquirettes-exquisite-jewelry.md) |
| Alaska | USA Jewels & Timepieces | partiel (parcours complet jusqu'au panier ; filtres non démontrés) | photos et 2 vidéos du modèle fini, fixes quel que soit le métal ; 0,9 à 2,6 s (ordinateur), 1,0 à 5,5 s (iPhone) | en direct : 707 $ (0,25 ct synthétique, 14K) à 10 425 $ (1,5 ct, platine) ; barré 20 824 $ « Save 50 % » | [rapport](alaska/usa-jewels-and-timepieces.md) |
| Alaska | 5th Avenue Jewelers | partiel : pas de configurateur ; panier interdit | photos de montures ; CAO 3D promise en consultation ; 1,2 à 1,8 s | aucun en sur-mesure ; monture seule 2 825 $ (Gabriel & Co.) ou « Call/Email » | [rapport](alaska/5th-avenue-jewelers.md) |
| Alaska | Northern Made Creations | partiel : iframe tierce non chargée ; pages de prix interdites | 3 photos fixes, vide de 1 800 px | aucun (« PLEASE CALL FOR CURRENT PRICING ») | [rapport](alaska/northern-made-creations.md) |
| Alaska | Bishops Jewelry Gallery | complet (ajout au panier interdit, panier vu vide) | photos fixes, 0,5 à 0,8 s | prix unique par pièce (ex. 1 510 $) ; naturel 1 188 à 14 000 $ | [rapport](alaska/bishops-jewelry-gallery.md) |
| Arizona | Isaac Jewelers | complet (pas de panier) | 3D WebGL maison : studio, éclat, sur la main ; 5,5 à 6,4 s (ordinateur), 5,0 s (iPhone) | aucun : conception puis rendez-vous | [rapport](arizona/isaac-jewelers.md) |
| Arizona | The Diamond Guys | partiel : étape « diamant » vide | photos 2D, 0,66 à 0,78 s | monture seule 1 590 à 13 140 $ (page 1) ; 1 590 $ au panier | [rapport](arizona/the-diamond-guys.md) |
| Arizona | Joseph Schubach Jewelers | **bloqué** : robots.txt en HTTP 429 « Verifying your connection » le 24/11, aucune page ouverte | non audité | non audité (monture 1 675 $ selon [Inv]) | [rapport](arizona/joseph-schubach-jewelers.md) |
| Arizona | Christopher Fine Diamonds | partiel : concepteur 3D en erreur | assistant JewelerOS (1,4 s / 2,0 s), puis « Something went wrong » | aucun ; vente en magasin sur rendez-vous | [rapport](arizona/christopher-fine-diamonds.md) |
| Arkansas | Easson Diamonds | complet | photos et vidéo .mp4 par variante (forme, or) ; 1,7 s / 1,9 s | 2 600 $ (1 ct) à 7 500 $ (10 ct) sur la fiche testée ; taxe 162,41 $ sur 2 900 $ | [rapport](arkansas/easson-diamonds.md) |
| Arkansas | Carter's Jewel Chest | partiel : designer 3D non chargé (3 essais) | tuiles filaires (2,0 à 2,3 s) | aucun dans l'outil ; bagues finies 3 799 et 3 999 $ | [rapport](arkansas/carters-jewel-chest.md) |
| Arkansas | Romance Diamond Co. | partiel : concepteur 3D en erreur | assistant JewelerOS (4 étapes sur ordinateur, 5 sur iPhone), 1,2 s | aucun sur les bagues de fiançailles ; alliance Benchmark 2 050 $ | [rapport](arkansas/romance-diamond-co.md) |
| Arkansas | Underwoods Fine Jewelers | complet (pas de configurateur) | photos (10 par fiche), 0,97 s | aucun (« Price available by appointment ») ; rendu numérique contre 500 $ | [rapport](arkansas/underwoods-fine-jewelers.md) |
| Californie | Apex Jewelry Design | partiel : visionneuse iJewel3D non affichée | photo par couleur d'or, galerie « exact item » ; 0,6 à 1,2 s | monture 14K 1 936 $, 18K 2 436 $, platine 2 586 $ ; synthétique ≈ 1,50 ct +1 150 $ ; priorité +350 $ ; ex. 3 086 $ | [rapport](california/apex-jewelry-design.md) |
| Californie | deBebians | partiel : écarts à robots.txt [P1] | photos ; image fixe quand forme ou métal change ; 0,6 s | monture SE-26 : 14K 1 073 $, 14K Super White 1 273 $, platine 1 401 $, 18K jaune 1 516 $ ; griffes +100 $, gravure +40 $ | [rapport](california/debebians.md) |
| Californie | RockHer | partiel : recherche de diamants et panier interdits | photos fixes, 4 vidéos d'atelier par fiche | monture seule 2 140 $ (1 310 à 9 480 $) ; total non vu | [rapport](california/rockher.md) |
| Californie | Adiamor | partiel : panier interdit | photo de monture « Shown With 2.11 Ct » ; 0,7 à 1,0 s | monture 450 $ (500 barré) + diamant 2 453 $ = 2 903 $ ; virement 2 859 $ | [rapport](california/adiamor.md) |

## 2. Fonctions et options récurrentes

| Fonction ou option | n/19 | Sites (preuve dans le rapport du site) |
|---|---|---|
| Assistant JewelerOS (style, naturel/synthétique, forme, carat, délai souhaité, « Decide later ») | 6 | Hudson-Poole, Ware, Marquirette's, Christopher, Carter's, Romance. Le même outil chez Z's (AZ), Nick Engel et Angelucci (CA) [Inv] |
| … dont designer 3D effectivement vu derrière l'assistant | 0/6 | « Something went wrong » (Ware, Hudson-Poole, Christopher, Carter's, Romance) ou chargement sans fin (Marquirette's). Causes : API `jeweleros.com/api/` interdite par robots.txt ou appel CORS refusé ; cause réelle non tranchée [I] |
| 3D temps réel vue et manipulée | 3 | Isaac et Sabghi (outils maison), Hudson-Poole (app générique ouverte directement). Annoncée sans être vue : Apex (iJewel3D), 5th Avenue (CAO en consultation), Northern Made (iframe), Schubach [Inv] |
| Constructeur « monture puis pierre » | 6 | Hudson-Poole, Ware (classique), The Diamond Guys (étape pierre vide), deBebians, RockHer (étape 2 interdite), Adiamor. Deux ordres de départ : Adiamor, RockHer |
| Prix dans le parcours de conception | 9 | Hudson-Poole, Ware, USA Jewels, The Diamond Guys, Easson, Apex, deBebians, RockHer, Adiamor. Catalogue chiffré sans parcours : Bishops |
| … calculé en direct à chaque option | 6 | Hudson-Poole (3D), USA Jewels, Apex, Easson (par carat), deBebians (par métal), Adiamor (total par étape) |
| … prix de la monture seule, pierre à part | 7 | Hudson-Poole, Ware, 5th Avenue, The Diamond Guys, deBebians, RockHer, Adiamor |
| … décomposé en lignes au-delà de « monture + pierre » | 2 | Apex (monture, centre, taille, priorité), deBebians (surcoûts griffes +100 $, gravure +40 $). Métal, façon, marge : 0/19 ; « Aucun site lu n'explique la composition du prix » (Arkansas [Inv]) |
| Aucun prix de bague de fiançailles en ligne | 8 | Sabghi (studio), Marquirette's, Northern Made, Isaac, Christopher, Romance, Underwoods, 5th Avenue (sur-mesure) |
| Naturel et synthétique proposés | 13 | Hudson-Poole, Ware, Marquirette's, USA Jewels, Bishops, The Diamond Guys, Christopher, Carter's, Romance, Apex (naturel sur demande), deBebians, RockHer, Adiamor. Synthétique seul sur la fiche : Easson. Aucun synthétique : Sabghi, Isaac, Underwoods, 5th Avenue |
| Or 14K, or 18K et platine dans le parcours | 8 | Hudson-Poole (3D), Sabghi, USA Jewels, 5th Avenue (formulaire), Bishops (filtres), Apex, deBebians, Adiamor (+ 19K). Assistants JewelerOS : 3 couleurs, ni titre ni platine (6) ; Isaac : 4 métaux sans titre ; Easson : 14K seul |
| Visuel qui suit le métal ou la variante | 7 | Isaac, Sabghi, Hudson-Poole (3D) ; Apex (photo par couleur, sauf platine = or blanc), Easson (fichier par forme et métal) ; vignettes JewelerOS (Marquirette's, Christopher). Image figée : USA Jewels, deBebians, Adiamor |
| Taille de doigt dans le parcours | 8 | Hudson-Poole (3 à 13), Ware, Sabghi (au quart), USA Jewels, Isaac, Apex, deBebians, Adiamor (au quart) |
| Gravure | 4 | Hudson-Poole (14 caractères, 2 polices), Sabghi (100 caractères), Isaac (20 caractères, 3 polices), deBebians (+40 $) |
| Conception enregistrée sans compte ou partageable | 2 | Isaac (état dans l'adresse, 3 conceptions), Sabghi (fichier, fiche PDF). Nom et téléphone exigés pour enregistrer : JewelerOS (FAQ de Ware ; conditions SMS de Marquirette's et Romance). Filtres dans l'adresse : Adiamor, deBebians [P1] |
| CAO montrée et validée avant fabrication (promesse écrite) | 11 | 5th Avenue, Bishops, Isaac, The Diamond Guys, Christopher, Easson (gratuit, ≈ 48 h), Romance, Underwoods (500 $ pour un rendu envoyé), Apex, deBebians, RockHer. Maquette physique (cire ou résine) : Bishops, The Diamond Guys, Christopher, Underwoods, RockHer (5) |
| Vidéos d'atelier en ligne | 1 | RockHer (CAO, résine, fonte, sertissage ; vidéos génériques). Suivi de fabrication de la commande : 0/19 |
| Numéro de certificat visible avant l'achat | 2 | RockHer (GIA naturel / IGI synthétique), Adiamor (GIA). Aucun certificat de laboratoire par pierre : Easson, 5th Avenue, Sabghi, Apex (absence sur les pages lues) |
| Délai souhaité demandé au client | 6 | les 6 assistants JewelerOS |
| Date d'expédition calculée sur la fiche | 2 | Adiamor (4 puis 7 décembre avec le diamant), deBebians (fenêtres d'expédition et de livraison) |
| Rendez-vous vidéo ou virtuel | 4 | Hudson-Poole et Ware (concierge par SMS), The Diamond Guys (pierre grossie 40 fois), RockHer (Calendly). WhatsApp : Apex seul |
| Pierre apportée ou bijou de famille | 7 | Ware, 5th Avenue, Sabghi, Isaac, Christopher, Easson (numéro de certificat demandé), Underwoods |
| Sur-mesure exclu des retours ou vente définitive | 12 | Hudson-Poole, Ware, Sabghi (toute vente en ligne), 5th Avenue, Bishops, The Diamond Guys, Christopher, Easson (toute vente), Romance, Underwoods, deBebians, RockHer. Pas d'exception écrite : USA Jewels, Carter's. Aucune politique trouvée : Marquirette's, Northern Made, Isaac, Apex |
| Délai de retour | — | 3 j (échange, 5th Avenue), 10 j (Bishops), 15 j (The Diamond Guys), 30 j (9 sites), 40 j (RockHer), aucun (Sabghi, Easson) |
| Garantie à vie conditionnée à une inspection périodique | 4 | Christopher et The Diamond Guys (tous les 6 mois), Marquirette's (6 mois, payante), deBebians (annuelle) |
| Financement affiché | 9 | Hudson-Poole, Sabghi, Marquirette's, 5th Avenue, Bishops, The Diamond Guys, Christopher, RockHer, Adiamor. Remise de 1,5 % par virement : USA Jewels, Adiamor |
| Prix barré permanent | 5 | USA Jewels (−50 %), Adiamor (−10 %), Sabghi, The Diamond Guys, Christopher (« 30 % OFF »). Refus affiché du prix barré : RockHer |
| Avis chiffrés | 4 | USA Jewels (222 Google), deBebians (4,9 sur 113), RockHer (Trustpilot 4,9 sur 237), Adiamor (158 sur la monture, avec photos) |
| Anglais et dollar seulement | 19 | aucun site en autre langue ; Adiamor affiche un sélecteur « USD » |

## 3. Points forts à retenir pour JR Diamond, classés par impact [I]

1. **Prix total en direct, ligne par ligne.** Apex affiche monture, centre, taille, priorité et « Order total » à chaque clic (3 086 → 3 736 $ en platine) ([rapport](california/apex-jewelry-design.md)). Adiamor tient le total dans un bandeau de 3 étapes avec View / Change / Remove ([rapport](california/adiamor.md)). C'est l'écart principal avec le « Sur devis » du prototype.
2. **Règle de prix écrite, sans prix barré.** RockHer : « The setting plus the diamond. Nothing added », « no codes, no countdowns, no second number crossed out » ([rapport](california/rockher.md)). deBebians montre le prix de la monture par alliage avant l'ajout (1 073 / 1 273 / 1 401 / 1 516 $) ([rapport](california/debebians.md)). Base pour le « prix expliqué ».
3. **Fabrication montrée.** RockHer, seul des 19 : 4 vidéos d'atelier sur chaque fiche et une page « made to order » (modèle 3D bâti sur les mesures du certificat, résine, cire perdue). Apex : galerie « exact item » propre au modèle et validation du modèle CAO en 3D interactive ([rapport](california/apex-jewelry-design.md)). Personne ne montre la commande du client en cours : la place de « on voit naître son bijou » est libre.
4. **Certificat lisible avant l'achat.** RockHer donne le numéro GIA ou IGI sur la fiche de la pierre ; Adiamor ajoute la fiche technique complète (table, profondeur, mesures en mm) ([rapport](california/adiamor.md)). Réponse directe à la peur de l'échange de pierre.
5. **Conception gardée dans l'adresse.** Isaac écrit l'état complet dans l'adresse (`#design-ring-solitaire-round-white-1.00-6`) et enregistre 3 conceptions sans compte ([rapport](arizona/isaac-jewelers.md)). Sabghi enregistre un fichier et imprime une fiche de 28 lignes « for jeweler review » ([rapport](alabama/sabghi-jewelers.md)). Rejoint la seule action sans dépendance du prototype.
6. **Taille rendue concrète.** Isaac : légende « 1.00 ct round solitaire · about 6.4 mm » à chaque clic, vue sur la main à l'échelle de la taille choisie, comparateur de carats par forme.
7. **Politique du sur-mesure écrite sur une page.** Underwoods : acompte de 50 %, révisions, annulation, vente finale ([rapport](arkansas/underwoods-fine-jewelers.md)) ; The Diamond Guys définit le « special order » et prévient que le prix peut être ajusté avant confirmation ([rapport](arizona/the-diamond-guys.md)) ; deBebians chiffre ses frais de remise en stock (20 ou 50 $). Matière pour la question de l'avocat israélien.
8. **Délai affiché et daté.** Adiamor et deBebians calculent la date d'expédition sur la fiche ; Underwoods chiffre chaque étape (1 + 1 + 4 à 6 semaines). Délais des concurrents : 8 à 12 jours ouvrés (RockHer), 15 à 20 (deBebians), 2 à 4 semaines (Apex, Hudson-Poole, Ware), 6 à 8 semaines (Underwoods) : les 14 jours ouvrés de JR Diamond sont parmi les plus courts [I].
9. **Option de rapidité payante.** Apex : « Priority production » +350 $, ≈ 10 jours ouvrés au lieu de 2 à 4 semaines.
10. **Visuel propre à chaque variante.** Easson charge une vidéo par forme et par couleur d'or ([rapport](arkansas/easson-diamonds.md)) ; Apex une photo par couleur d'or.
11. **Entrée guidée en 4 questions.** JewelerOS : style, naturel/synthétique, forme, carat, puis « When do you need your ring? », avec « Decide later » partout (ex. [Marquirette's](alabama/marquirettes-exquisite-jewelry.md)). Le délai souhaité sert à trier les demandes.
12. **Pierre filmée en consultation.** The Diamond Guys : visioconsultation avec vidéo de la pierre grossie 40 fois.
13. **Un seul interlocuteur sur WhatsApp.** Apex : « No handoffs », WhatsApp et téléphone en pied de page.
14. **Après-vente chiffré.** Grille de garantie à vie par valeur (150 à 675 $) chez Marquirette's ; protection d'un an incluse dès 500 $ chez The Diamond Guys ; mise à niveau du diamant avec crédit de 100 % chez USA Jewels ([rapport](alaska/usa-jewels-and-timepieces.md)) ; remise de 1,5 % par virement (USA Jewels, Adiamor).
15. **Argument Ramat Gan déjà pris localement.** Marquirette's met en avant un diamantaire qui achète « from the major trading bourses of Antwerp and Ramat Gan ». L'origine seule ne distingue pas JR Diamond ; l'atelier filmé, si [I].

## 4. Défauts fréquents à éviter

- **3D confiée à un tiers qui ne charge pas.** 0 designer JewelerOS vu sur 6 ; iframe Overnight vide (Northern Made) ; étape diamant blanche (The Diamond Guys) ; iJewel3D non affiché (Apex). Écrans d'erreur sans reprise ni repli (Marquirette's). La cause tient en partie à l'environnement de test [I], mais le risque de dépendance est réel.
- **Prix de monture seule présenté comme prix de la bague.** Hudson-Poole : 2 093 $ en 3D contre 3 062 $ au panier ; 5th Avenue, The Diamond Guys, RockHer, deBebians : total inconnu tant que la pierre n'est pas choisie ailleurs.
- **Aucun prix** sur 8 sites sur 19, souvent « call for pricing » ou rendez-vous.
- **Visuel qui ne suit pas les choix.** USA Jewels (même photo jaune pour tous les métaux), deBebians (forme et métal), Apex (platine = or blanc), Adiamor (« Shown With 2.11 Ct » au lieu du diamant choisi), Sabghi (options sans effet, pierres de côté flottantes).
- **Incohérences de prix ou de texte.** Platine moins cher que l'or 18K sans explication (Hudson-Poole) ; prix « As shown » figé (Apex) ; G-H puis H,I et « Premeir » au panier (USA Jewels) ; forme sans effet sur le prix (Easson, deBebians).
- **Politiques contradictoires.** Retours 30 j puis 15 j (Hudson-Poole) ; « 15 Day Return Period » contre échange sous 3 jours (5th Avenue) ; 40 jours comptés depuis la commande ou la livraison (RockHer) ; délai 5-7 j contre 2-3 j (USA Jewels) ; délai standard plus long que le sur-mesure (Apex).
- **Récapitulatif incomplet.** Taille et métal absents du panier (USA Jewels) ; taille, griffes, gravure absentes de la ligne (deBebians [P1]).
- **Prix barrés permanents** (5 sites), effet de promotion sans fin.
- **Fenêtres qui bloquent les clics** : remise de 10 % (Bishops), inscription e-mail (Adiamor), cookies (deBebians [P1]).
- **Erreurs et boutons morts** : erreurs jQuery et boutons Compare / partage sans effet (Hudson-Poole), « Comapre » (Ware), partage sans le modèle (USA Jewels), Grid/List, Reset, Natural/Lab sans réaction (Adiamor), LOAD MORE et galerie (RockHer), liens 404 (Romance, Marquirette's).
- **Lenteur.** Prix 3D 11 à 37 s (Hudson-Poole) ; 3D visible en 5 à 6,4 s puis 1,2 à 3,8 s par clic sans GPU (Isaac), 6,5 à 9,2 s (Sabghi) ; page « Verifying… » de 12,5 s (Marquirette's).
- **Mobile négligé.** 3D qui sort de l'écran sur iPhone (Sabghi) ; étapes différentes selon l'appareil (Romance).
- **Après-vente inadapté à la vente à distance.** Garantie liée à des visites semestrielles en boutique (Christopher, The Diamond Guys) ; livraison États-Unis seulement (Ware, Underwoods) ; droits de douane non calculés (RockHer).
- **Coordonnées exigées pour enregistrer** un dessin (nom et téléphone, SMS de relance : JewelerOS).

## 5. Couverture

- **Territoires sans site** : aucun. 5 territoires, 20 sites (4 par territoire : les rangs 1 à 4 de chaque inventaire).
- **Statuts** : 4 complets (Bishops, Isaac, Easson, Underwoods ; trois n'ont pas de configurateur), 15 partiels, 1 bloqué (Joseph Schubach : robots.txt en 429 le 24/11, alors que l'inventaire l'avait lu en 200 le 15/11).
- **Causes des audits partiels** : designer 3D tiers non atteint (6 JewelerOS, Northern Made, Apex) ; panier ou recherche de diamants interdits par robots.txt (Marquirette's, 5th Avenue, Bishops, Christopher, RockHer, Adiamor) ; étape diamant vide (The Diamond Guys) ; Chromium sans carte graphique pour toute 3D.
- **Écarts de méthode à connaître** : deBebians, adresses interdites déclenchées, constats marqués [P1] ; Ware, racine de l'outil « Build a Band » chargée une fois avant le contrôle robots.txt, relevé supprimé ; Sabghi, robots.txt qui interdit ClaudeBot mais autorise « * », rapport conservé par décision du propriétaire du 24/11 ; Hudson-Poole, app 3D générique ouverte par son adresse, prix peut-être différents de ceux du joaillier [S].
- **Sites des inventaires non audités** : rangs 5 à 10 de chaque territoire, dont Mark Broumand (« Request More Images/Videos »), Nick Engel, Harold Stevens (CA), V Jewelers, Trinity, Myranda (AZ), Robert Irwin, Diamond Gems (AR), Fincher & Ozment, Studio Mullins (AL), Monarch Jewels (AK) [Inv]. Bloqués dès l'inventaire : Michael's Jewelers (403 Cloudflare), David's Jewelers et Aurora Jewelers (robots.txt interdit ClaudeBot), The Jewelry Exchange (403), Linden's et Anthony & Co. (`/verify.html`) [Inv].
- **Limites communes** : une mesure par cas, iPhone émulé dans Chromium (pas Safari), aucun paiement, chat, WhatsApp ni formulaire ; avis hors site rarement recoupés.

- **Apex Jewelry Design : [P1] pour tout le rapport (25/11)** : robots.txt `Disallow: /` nominatif pour les agents Claude, manqué par l'outil de contrôle (défaut corrigé le 25/11). Ses constats sortent des décomptes [V] de cette synthèse.

- **Reprise du 25/11** : les sites marqués « bloqués » ici à cause du relais réseau ont été réaudités ; voir `SYNTHESE_us-reprise.md`, qui prime pour eux.
