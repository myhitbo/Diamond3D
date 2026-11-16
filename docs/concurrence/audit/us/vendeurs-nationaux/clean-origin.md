# Audit : Clean Origin (États-Unis, vendeurs nationaux)

- **Site** : Clean Origin (fondé en 2017 [R23] ; adresse à Stamford, Connecticut, dans les conditions du plan de service [R13]), https://www.cleanorigin.com. Page de départ prévue : le constructeur `/product/builder/create/?builder_type=ring&product_type=first`.
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données, via le mandataire de l'environnement cloud.
- **Statut : partiel.** Le robots.txt interdit `/product/builder/`, `/ringbuilder/`, `/checkout/`, `/customer/` et toute adresse contenant « ? » [R1]. Le constructeur, les filtres de la liste (liens en « ? »), « Choose this setting », « Add to bag » et le panier n'ont donc pas été automatisés. Parcours remplacé par la liste des montures, la fiche « Stellamarquise » (marquise, comme ring-001), la recherche de pierres et deux fiches de pierre.
- Complète la fiche Clean Origin de `docs/concurrence/2026-11-15_etats-unis.md` ([V42] à [V46]).
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé ; « sec. » : source secondaire. Prix en dollars US affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 0. Accueil des bagues `/engagement-rings/` [R2] | « Start with settings » et « start with diamonds » mènent au constructeur (interdit) [V]. L'explorateur l'a vu rediriger vers `/engagement/` sans session (curl). |
| 1. Liste des montures `/engagement/` [R3] | 210 montures, 40 par page, tri « Featured », 6 pages. « Show Filters » : métal (8), forme (11), forme des pierres d'accompagnement (14), prix, style (8) [V]. |
| 2. Fiche monture [R4] | Méthode Lab / Natural, forme (11), métal (6), taille (25), plan de service, « Choose this setting » ; 4 vues dont une vidéo [V]. |
| 3. Pierre `/diamonds/` (labo) ou `/naturaldiamonds/` [R5][R6] | Tableau de 102 078 pierres de labo ; filtres forme, carat, prix, taille, couleur, pureté, « Hearts & Arrows », certificat IGI/GIA, méthode ; recherche en langage naturel [V]. |
| 4. Fiche pierre [R7][R8] | « Add to setting », « Add to bag », 5 vues (dont vidéo 360 de la pierre), « View Certification » [V]. |
| 5. Panier `/checkout/cart/` | Non atteint (interdit par robots.txt) [V R1]. |

## Contrôles vérifiés

Ordinateur sauf mention « iPhone ». Prix de la fiche : Stellamarquise, avant tout choix 1 031 $ (barré 1 375 $).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **En-tête et fenêtres** | | | | |
| Bandeau cookies, « Accept All Cookies » | bandeau | Ferme le bandeau | — | OK |
| « Join the CO.re Club » (e-mail, 3 cases) | fenêtre | S'ouvre sur la liste ; fermée par « No Thanks » | — | OK, non rempli |
| 1-888-487-2145 | lien `tel:` | Appel téléphonique | — | Non appelé |
| Appointments | lien | Déclenche un badge Calendly (code de la page) ; rien ne s'ouvre en 10 s (2 essais sur la fiche) | — | Défaut |
| Recherche (loupe) | champ | « What are you looking for? », envoi vers `/catalogsearch/` | — | Non soumis (robots.txt) |
| My Wishlist, compte, panier | liens | `/wishlist/`, `/customer/…`, `/checkout/cart/` | — | Non ouverts (robots.txt) |
| USD / CAD (pied de page) | liste | CAD bascule vers `/en_ca/…` ; prix remplacé par « HST and duty not included », sans montant (1 essai) [R25] | absent | Défaut |
| **Liste `/engagement/` [R3]** | | | | |
| Show Filters | bouton | Ouvre 5 groupes ; chaque option est un lien `?metal_type=…`, `?shape=…` | — | Ouvert ; options non appliquées (robots.txt) |
| 40 per page, Featured, pages 2 à 6 | listes, liens | Adresses en « ? » | — | Non testés (robots.txt) |
| Vignettes produit | liens | Fiche ; badges « Hidden Accents », prix barré | 4 premières : 1 110 à 1 766 $ | OK |
| **Fiche monture [R4]** | | | | |
| Creation Method : Lab | pastille | Image passe à une **asscher** en or blanc si aucune forme n'est choisie | inchangé | Anomalie d'image |
| Creation Method : Natural | pastille | Pierres d'accompagnement naturelles ; image inchangée | +57 $ (14 k : 1 088 $) | OK |
| Shape (11 pastilles, flèche « Next ») | pastilles | Rendu de la forme choisie (fichiers `r100`, `o100`, `e100`…) | inchangé | OK |
| Metal 14K White / Yellow / Rose Gold | liste | Rendu blanc, jaune ou rose | 1 031 $ | OK |
| Metal 18K White / Yellow Gold « +$251 » | liste | **Même image que le 14 k** | 1 283 $ (barré 1 710 $) | OK, image non distinguée |
| Metal Platinum « +$315 » | liste | **Image de l'or blanc** | 1 346 $ (barré 1 795 $) ; naturel 1 403 $ | OK, image non distinguée |
| Ring Size (4 à 10 au quart) | liste | Tailles 4, 6, 7,5, 10 essayées : ni prix ni date ne changent | inchangé | OK |
| Ring Size (i) | lien | Ouvre `/find-her-ring-size/` dans un nouvel onglet [R24] | — | OK |
| Vignettes 1 à 3 | vignettes | Rendus de face, de profil, en perspective (PNG ≈ 343 Ko) | — | OK (iPhone aussi) |
| Vignette 4 (cube 360) | vidéo | MP4 de 11 s en boucle, 3000×3000, 9,2 Mo, sans commandes, servi aussi sur iPhone [R26] | — | OK, lourd |
| Survol de l'image | zoom | Loupe de 76 px (`magnify-lens`) ; le clic n'ouvre pas de plein écran | — | Partiel |
| Try it on (Tangiblee) | fenêtre | Cadre Tangiblee 679×870, encore en squelette à 4 s. Bouton, qui n'apparaît qu'après le choix des options, présent dans 3 chargements sur 6 ; absent sur iPhone (1 essai) | — | Intermittent |
| Affirm « See if you qualify » | fenêtre | Demande un numéro de mobile ; exemples calculés **pour 150 $**, pas pour la bague ; TAEG 0 à 36 % | « Starting at $62/mo » | Défaut (non rempli) |
| Katapult « Estimate Payment » | fenêtre | Ordinateur : rien en 8 s (2 essais). iPhone : cadre Katapult 382×651 | — | Défaut sur ordinateur |
| Extended Service Plan $275 | case | Cochée : prix affiché inchangé | +275 $ annoncés | OK |
| Zillion « Learn More » | fenêtre | « 20 days of temporary protection », devis par SMS | — | OK, non rempli |
| Drop a hint | fenêtre | Formulaire : 4 champs, note, copie, abonnement | — | OK, non rempli |
| Est. Ship Date, Dec 4 / 60-Days Return | texte | Pas d'infobulle | — | OK |
| Cœur (liste d'envies) | lien | Renvoi vers `/customer/account/login` (bloqué), puis « You must login or register… » | — | Compte exigé |
| Partager (icône) | bouton | Partage natif du système (`navigator.share`), lien avec `utm_source=txtshare` | — | OK (simulé) |
| Étoiles, tri « DATE » des avis | liens | Aucun effet visible ; 1 avis (5/5, 13/02/2025) | — | Sans effet |
| CHOOSE THIS SETTING | bouton | Appelle `/product/builder/addtocart` | — | Non actionné (robots.txt) |
| Add To Bag | bouton | Présent dans le code, caché | — | Non visible |
| « Hi! I'm your Virtual Assistant » / « Ask me anything » | champ | Assistant de discussion (scripts Gladly [I]) | — | Non ouvert (règle) |
| **Recherche de pierres `/diamonds/` [R5]** | | | | |
| Préréglage à l'arrivée | — | 102 078 → 81 273 pierres : 1,5 à 12 ct, D à G, VS2 à IF, appliqué sans action du visiteur, plus de 10 s après le chargement | — | OK |
| Recherche en langage naturel + SEARCH | champ | « oval 1 carat » → 1 158 ovales 0,90–1,10 ct ; « marquise diamond under $1000 » → 6 353 ; « emerald cut 2 carat F VVS2 GIA » → 4. Résultat en 3 à 4 s, filtres mis à jour | dès 270 $ | OK (3 sur 3) |
| Certified by GIA | case | 81 273 → 834 pierres | — | OK |
| Shape (11 cases) | cases | Marquise cochée ; effet non isolé (mêlé à la recherche) | — | Non concluant |
| Carat, Price « From / To » | champs | Remplis par la recherche ; saisie directe non réussie (sélecteur) | — | Non concluant |
| Cut, Color, Clarity | curseurs | Restés en blocs gris de chargement à 14 s (capture) | — | Défaut ou non chargé |
| Hearts & Arrows « yes », IGI, 40 per page, cœurs | cases, listes | — | — | Non testés (temps) |
| Lab / Natural | liens | `/diamonds/` ou `/naturaldiamonds/` (24 398 pierres affichées) [R6] | — | OK |
| Clear Filters | bouton | Aucun changement visible sur `/naturaldiamonds/` | — | Non concluant |
| **Fiche pierre [R7][R8]** | | | | |
| Vue principale | image | Mention « **Sample Image** » : image type de la forme (`cushion.jpg`, `asscher.jpg`), labo comme naturel | — | Contre-exemple |
| Vignette 2 (labo) | vidéo 360 | Cadre Nivoda, MP4 de 19,4 Mo de la pierre réelle (n° du certificat) [R26] | — | OK |
| Vignettes 3 à 5 | images | Échelle des carats, profil et dessus types | — | OK |
| View Certification | fenêtre | PDF IGI `pdf.igi.org/FDR689561921.pdf` (437 Ko) dans un cadre ; vide dans Chromium sans interface | — | OK [V R26] |
| ADD TO SETTING, ADD TO BAG | boutons | — | — | Non actionnés (robots.txt) |
| Carat size (Tangiblee) | bouton | — | — | Non testé (fenêtre du certificat restée ouverte) |

### Temps d'apparition du visuel principal

| Page | Appareil | 1er octet | LCP (plus grand affichage) | Image visible | Options cliquables |
|---|---|---|---|---|---|
| Fiche monture, 1er essai (cache froid) | Ordinateur | 2,93 s | 3,53 s (rendu) | 4,0 s | 15,9 s |
| Fiche monture, 2e essai | Ordinateur | 0,20 s | 0,97 s | 2,2 s | 11,0 s |
| Fiche monture, 2 essais | iPhone | 0,14 / 0,12 s | 0,76 / 0,75 s | 1,1 / 1,0 s | 9,0 / 10,6 s |
| `/diamonds/` | Ordinateur | 0,15 s | 0,84 s (titre) | lignes avec vignettes : 6,6 et 7,5 s | — |
| `/diamonds/`, 2 essais | iPhone | 0,53 / 0,43 s | 7,6 / 11,7 s (bannière) | 1re vignette : 11,1 s | — |
| Fiche pierre (image type) | Ordinateur / iPhone | 0,26 / 0,29 s | 1,23 / 1,60 s | 2,2 / 1,9 s | — |

« Options cliquables » = apparition des pastilles (rendues par JavaScript). Mesures prises depuis un centre de données [V] ; un vrai téléphone en 4G serait plus lent [S].

## Options disponibles

- **Métal (fiche)** : 14K White Gold, 14K Yellow Gold, 14K Rose Gold, 18K White Gold (+251 $), 18K Yellow Gold (+251 $), Platinum (+315 $). Filtre de liste : en plus « 14k White and Yellow Gold », « 14k White and Rose Gold » [V R3][R4].
- **Formes (fiche et liste)** : Round, Oval, Emerald, Radiant, Cushion, Princess, Pear, Asscher, Elongated Cushion, Marquise, Heart [V].
- **Pierres d'accompagnement (filtre)** : Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round, Trillion, Baguette, Half Moon, Trapazoid (sic), Kite, Elongated Cushion [V R3].
- **Styles** : Solitaire, Vintage, Classic, Three Stone, Pave, Diamond Accent, Unique, Hidden Accent [V R3].
- **Origine** : Lab, Natural (monture et pierre) [V R4][R5].
- **Tailles** : 4 à 10 par quart (25 valeurs), système américain seul [V R4].
- **Fiche Stellamarquise** : « Setting Only », 2 marquises d'accompagnement, 1/7 ct, F/G, VS ; pierres compatibles de 0,30 à 5,00 ct ; griffes ; « hand finished », largeur ± 0,2 mm [V R4].
- **Pierre** : forme, carat, prix, taille, couleur, pureté, « Hearts & Arrows », certificat IGI ou GIA, méthode ; fiche avec mesures, table, profondeur, symétrie, poli, rondiste, colette, origine (« Canada » pour la naturelle) [V R5][R7][R8].
- **Absents de la fiche** : gravure (aucune mention dans le code de la fiche ; la politique de retaille en parle [R10]), largeur du corps, pavage, griffes au choix, vue 3D manipulable, réalité augmentée, WhatsApp [V R4].

## Prix, délais, retours, garanties

- **Prix** : prix barrés partout (−25 %) : remise automatique du 27/10 au 25/12/2026, sans code [V R17]. Monture et pierre vendues séparément : la fiche dit « Setting Only » [V R4].
- **Décomposition** : seuls les écarts d'option sont affichés (+251 $ pour le 18 k, +315 $ pour le platine, +57 $ pour l'accompagnement naturel). Rien sur le métal, la façon ou la marge [V R4].
- **Pierres** : labo 1,00 ct D VS2 IGI 270 $ (barré 360 $) ; 1,50 ct D VS2 562 $ ; naturelle 0,60 ct I SI1 GIA 430 $, sans prix barré [V R5][R7][R8].
- **Délai** : « Est. Ship Date, Dec 4 » pour la monture, quels que soient la forme, le métal et la taille ; « Nov 23 » pour une pierre seule [V R4][R7]. Soit 14 jours ouvrés hors Thanksgiving pour la monture [I]. Sur mesure : « delivery within four weeks » [V R2].
- **Livraison** : FedEx 2 jours offert ; nuit suivante en option (prix non affiché) ; signature exigée ; États-Unis et Canada seulement ; droits et taxes à la charge du client hors États-Unis [V R11][R14].
- **Paiement affiché** : Affirm jusqu'à 36 mois, TAEG de 0 à 36 % [V R15] ; location-vente Katapult, jusqu'à 3 500 $ de préapprobation [V R16] ; pas de réservation [V R14]. Carte et virement cités par la politique de retour [V R9]. Moyens du panier : non vus.
- **Retours** : 60 jours à compter du jour où la commande est prête à être livrée ou retirée ; remboursement ou avoir au choix ; étiquette gratuite aux États-Unis ; frais de 150 $ sans code de retour, 100 $ si le certificat manque [V R9].
- **Exceptions** : sur mesure remboursé en avoir seulement, et une seule refonte ; bague retaillée ou échangée = vente ferme ; pierre naturelle seule = avoir seulement (rappelé sur sa fiche) [V R9][R8].
- **Retaille** : 1 gratuite sous 60 jours (États-Unis), 1 à 3 semaines ; Canada : crédit jusqu'à 100 CA$ [V R10].
- **Garanties** : garantie à vie contre les défauts de fabrication, hors usure et perte de pierre [V R12]. Forever Service Plan payant : 150 $ (500–999 $) à 500 $ (≥ 10 000 $), 275 $ pour cette bague ; inspection annuelle, retaille, griffes, rhodiage ; centre de la pierre exclu [V R13]. Assurance Zillion [V R14].
- **Certificats** : IGI et GCAL pour le labo, GIA pour le naturel [V R14] ; filtre IGI/GIA [V R5]. Garantie de prix sur les pierres seules face à 8 enseignes nommées [V R18].

## Confiance et service

- **Libellé du synthétique** : « Lab », « Lab Grown Diamond », « Lab Created Diamond » ; « Creation Method: Lab / Natural » [V R4][R5][R7].
- **Langues et devises** : anglais seul ; USD et CAD (vitrine `/en_ca/`) [V R4][R25].
- **Avis** : fiche Stellamarquise 5,0 sur 1 avis [V R4] ; `/reviews/` n'affiche que son titre après 7 s [V R22] ; Trustpilot 4,1/5 sur 332 avis [R27, sec., extrait de recherche].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier. Les vues des montures sont des rendus de synthèse (noms `p1`, `p2`, `p3`, fond blanc uniforme) [I]. Suivi de commande : formulaire e-mail + numéro, statut et date de livraison seulement [V R20].
- **Magasins** : « FIND A STORE NEAR YOU » mène à `/jewelry-stores/`, qui redirige vers l'accueil [V R21]. Un avis d'août 2026 cite la fermeture d'un magasin [R27, sec.]. La fiche de l'explorateur (« 6 magasins », [V46, sec.]) est donc à corriger.
- **Conseil** : rendez-vous vidéo Zoom de 45 min, pas le jour même, « no inventory available to show » [V R19] ; téléphone ; e-mails dédiés (retours, retaille, réparations) [V R9][R10][R12].
- **Origine des pierres** : la vidéo 360 vient de Nivoda, place de marché de gros [V R26] ; stock virtuel de fournisseurs [I].

## Points forts à retenir pour JR Diamond

1. **Recherche en langage naturel** : 3 requêtes sur 3 traduites en filtres justes, en 3 à 4 s [V R5]. Pour JR : un champ « décrivez la pierre » en français, hébreu et anglais, qui remplit les filtres visibles.
2. **Écart de prix dans le libellé de l'option** (« 18K White Gold +$251 », « Platinum +$315 ») [V R4]. Simple et lisible ; JR peut aller plus loin avec sa décomposition.
3. **Date d'expédition sur chaque fiche**, monture comme pierre (Dec 4, Nov 23) [V R4][R7]. JR annonce 14 jours ouvrés : afficher la date calculée.
4. **Certificat en un clic** (PDF IGI) et **vidéo 360 de la pierre réelle**, liée au numéro du certificat [V R7][R26].
5. **Exception du sur mesure écrite noir sur blanc** : avoir seul, une refonte, retaille = vente ferme [V R9]. Modèle de rédaction pour la question à l'avocat israélien.
6. **Plan de service à prix fixes par tranche** (150 à 500 $), proposé dans une case sur la fiche [V R13][R4].
7. **Partage natif du téléphone** avec suivi de la source (`utm_source=txtshare`) [V R4].

## Défauts observés

1. **Image type à la place de la pierre** : « Sample Image » en vue principale (labo et naturel), la vraie vidéo n'est qu'en 2e vignette [V R7][R8]. Confirme l'explorateur ([V46, sec.]).
2. **Rendu non fidèle aux options** : 18 k identique au 14 k, platine montré en or blanc, « Lab » sans forme affiche une asscher [V R4].
3. **Options tardives** : les pastilles n'apparaissent qu'après 9 à 16 s (4 mesures), alors que l'image est là en 1 à 4 s [V R4].
4. **Fenêtre Affirm** calculée pour 150 $ au lieu du prix de la bague [V R4].
5. **Boutons sans effet sur ordinateur** : Katapult (2 essais), Appointments (2 essais) ; « Try it on » intermittent (3 chargements sur 6) [V R4].
6. **Curseurs taille, couleur, pureté** restés en blocs gris (capture à 14 s) [V R5].
7. **Lien des magasins** renvoyé vers l'accueil [V R21] ; page `/reviews/` vide [V R22].
8. **Vitrine canadienne sans prix** (1 essai) [V R25].
9. **Vidéo de 9,2 Mo en 3000×3000** servie au téléphone [V R26].
10. **Prix barré permanent** : −25 % pendant 2 mois sur tout le site [V R17] ; le prix « normal » sert de référence [I].

## Limites de l'audit

- Constructeur, panier, compte, recherche interne et filtres de liste non automatisés (robots.txt [R1]) : frais du panier, moyens de paiement du paiement, gravure et récapitulatif non vus.
- Lors d'un premier passage du même jour, avant le blocage des appels interdits, « Choose this setting » a été cliqué une fois : il a appelé le constructeur et ouvert `/naturaldiamonds/`. Ce clic n'a pas été répété.
- Une seule fiche de monture étudiée en détail, deux fiches de pierre. Navigateur sans interface : PDF et partage natif non rendus (partage simulé). iPhone émulé, pas Safari.
- Assistant de discussion et formulaires (rendez-vous, indice, Affirm, Zillion) ouverts sans saisie, ou non ouverts.
- Mesures de temps prises depuis le cloud, 1 à 2 essais par page. Note Trustpilot lue dans un extrait de recherche, page non ouverte.

## Sources

Pages lues ou contrôles actionnés le 15/11/2026.
- [R1] https://www.cleanorigin.com/robots.txt · [R2] https://www.cleanorigin.com/engagement-rings/ · [R3] https://www.cleanorigin.com/engagement/
- [R4] https://www.cleanorigin.com/engagement/stellamarquise-ring-rvr01936-x1-e-2/ · [R5] https://www.cleanorigin.com/diamonds/ · [R6] https://www.cleanorigin.com/naturaldiamonds/
- [R7] https://www.cleanorigin.com/diamonds/cushion-lab-grown-diamond-0ce401099115/ · [R8] https://www.cleanorigin.com/naturaldiamonds/asscher-natural-diamond-0d63c7700da6
- [R9] https://www.cleanorigin.com/customer-service/return-policy/ · [R10] https://www.cleanorigin.com/customer-service/resizing-policy/
- [R11] https://www.cleanorigin.com/customer-service/shipping-policy/ · [R12] https://www.cleanorigin.com/customer-service/warranty/
- [R13] https://www.cleanorigin.com/customer-service/forever-service-plan/ · [R14] https://www.cleanorigin.com/customer-service/faq/
- [R15] https://www.cleanorigin.com/customer-service/affirm-financing/ · [R16] https://www.cleanorigin.com/customer-service/katapult-lease-to-own/
- [R17] https://www.cleanorigin.com/promo-codes/ · [R18] https://www.cleanorigin.com/price-match-guarantee/ · [R19] https://www.cleanorigin.com/virtual-appointments/
- [R20] https://www.cleanorigin.com/customer-service/track-order/ · [R21] https://www.cleanorigin.com/jewelry-stores/ (redirige vers l'accueil) · [R22] https://www.cleanorigin.com/reviews/
- [R23] https://www.cleanorigin.com/our-story/ · [R24] https://www.cleanorigin.com/find-her-ring-size/ · [R25] https://www.cleanorigin.com/en_ca/engagement/stellamarquise-ring-rvr01936-x1-e-2/
- [R26] En-têtes HTTP : https://pdf.igi.org/FDR689561921.pdf · https://nivoda-inhousemedia.s3.amazonaws.com/inhouse-360-689561921 · https://media2.cleanorigin.com/videos/Engagement/Engagement_Images/VLR01936-M100_WG_video.mp4
- [R27, sec.] https://www.trustpilot.com/review/cleanorigin.com (extrait de recherche Parallel, 15/11/2026)
