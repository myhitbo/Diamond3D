# Synthèse États-Unis, groupe us-10 : Virginia, Washington, West Virginia, Wisconsin, Wyoming

Date : 25/11/2026. Cette synthèse reprend les 20 audits du groupe (rangs 1 à 4 de chaque inventaire) et les 5 `INVENTAIRE.md` des dossiers `virginia/`, `washington/`, `west-virginia/`, `wisconsin/`, `wyoming/`.
Aucune page n'a été rouverte pour l'écrire : chaque fait vient du rapport cité, qui donne l'adresse lue. Les audits portent la date de l'étude (15/11) ; ceux de Virginie-Occidentale, du Wisconsin et du Wyoming ont été exécutés ou relus le 25/11 selon leur en-tête.

Marques reprises des rapports : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé · **[Inv]** fait tiré d'un `INVENTAIRE.md`, que l'audit n'a pas revérifié.
Un fait sans marque est [V] dans le rapport cité. Les « n/18 » portent sur les 18 sites audités dans un navigateur (Danforth et Rasmussen sont bloqués). Le classement par impact est un jugement [I].
Les temps ont été mesurés depuis un centre de données, dans Chromium sans carte graphique, avec un iPhone 13 émulé, en général une fois par cas : ce sont des ordres de grandeur.

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé (USD) | Rapport |
|---|---|---|---|---|---|
| Virginia | Fink's Jewelers | partiel : pas de configurateur ; `/cart/add` interdit | 3 photos, essayage virtuel Camweara (caméra non testée) ; 0,56 à 0,75 s / 0,64 s | 7 600 $ (ovale halo 1,20 ct, 14 k jaune) ; 10 800 $ (solitaire 1,51 ct, platine) ; prix unique | [rapport](virginia/finks-jewelers.md) |
| Virginia | Ben David Jewelers | partiel : étape 1 de JewelerOS seulement (`jeweleros.com/api/` interdit) | vignettes du constructeur en 1,3 s ; fiche à une photo, 0,8 / 0,5 s | 1 725 $ (ovale 0,40 ct, or jaune) ; aucun dans le constructeur | [rapport](virginia/ben-david-jewelers.md) |
| Virginia | Danforth Diamond | **bloqué** : robots.txt renvoie la page HTML de l'application (contrôle INCONNU) | aucun | non relevé | [rapport](virginia/danforth-diamond.md) |
| Virginia | Midtown Jewelers | partiel : étape 1 de JewelerOS ; panier interdit | vignettes photo, pas de 3D ; 3,8 s / 4,1 s | bagues finies 3 390 à 7 490 $ ; aucun dans le constructeur | [rapport](virginia/midtown-jewelers.md) |
| Washington | Joseph Jewelry | partiel : `/checkout/` interdit | 6 photos dont la main, vidéo du modèle d'origine, pas de 3D ; 848 / 951 ms | monture 3 995 $ (14 k), 5 115 $ (18 k), 5 452 $ (platine), 4 880 $ (platine, accompagnement synthétique) ; pierre centrale à part | [rapport](washington/joseph-jewelry.md) |
| Washington | Green Lake Jewelry Works | **complet** (9 écrans jusqu'au récapitulatif, non envoyé ; pas de panier, vente sur devis) | aucun visuel dans le constructeur ; page en 1 795 / 1 574 ms | aucun dans le constructeur ; fiche 223497 : 14 kt 2 379 à 2 974 $, 18 kt 2 620 à 3 307 $, platine 2 904 à 3 596 $, hors pierre et sertissage ; synthétiques seuls 409 à 4 027 $ | [rapport](washington/green-lake-jewelry-works.md) |
| Washington | Cline Jewelers | partiel : 4 étapes JewelerOS vues, 3D non ouverte ; `/cart` interdit | vignettes recolorées par métal ; 2,1 / 2,2 s | aucun dans l'assistant ; diamant 0,50 ct GIA 770 $ ; bagues synthétiques 2 995 à 4 995 $ | [rapport](washington/cline-jewelers.md) |
| Washington | DovEggs-Seattle | partiel : `/cart/add` interdit ; effet des options non mesuré | 14 photos de bagues réelles de clients, pas de 3D ; 1,9 / 1,9 s | 181 $ (1 ct moissanite, argent) ; pierre de laboratoire 500 $ ; −18 % au paiement ; livraison 19 $ | [rapport](washington/doveggs-seattle.md) |
| West Virginia | Jacqueline's Fine Jewelry | partiel : 4 étapes JewelerOS, 3D non ouverte ; panier interdit | vignettes recolorées ; étape 1 en 2,95 à 3,75 s | aucun dans l'outil ; fiche 1 575 $ ; bandeau « for inquiries regarding accurate pricing… » | [rapport](west-virginia/jacquelines-fine-jewelry.md) |
| West Virginia | White's Fine Jewelry | partiel : pas de configurateur ; `/cart/add`, filtres de prix et tri interdits | 2 photos de catalogue ; 1,3 à 1,6 s | 1 749 à 5 997 $, certains « Call for Price » ; Affirm dès 140 $/mois | [rapport](west-virginia/whites-fine-jewelry.md) |
| West Virginia | Calvin Broyles Jewelers | partiel : pas de configurateur ; panier, tri, prix interdits | une photo par article ; LCP 2,98 / 2,77 s | 1 799 $ (barré 1 949 $) ; 6 bagues synthétiques à 2 499 $ ; pierres 592 à 290 790 $ | [rapport](west-virginia/calvin-broyles-jewelers.md) |
| West Virginia | Spencer & Kuehn | partiel : `?add-to-cart=` interdit ; vitrine Stuller non ouverte | photos et vidéo de 15 s ; LCP 2,59 / 2,04 s | stock 865 à 14 300 $ ; sur mesure : devis par e-mail sous une semaine | [rapport](west-virginia/spencer-kuehn-fine-jewelry-studio.md) |
| Wisconsin | CIVAL | partiel : fiche à options parcourue ; `/cart/add` interdit | 15 photos réelles, image fixe quelles que soient les options ; 396 / 440 ms | Julia 14 k 2 840 $ ; taille ≥ 9 +100 $ ; synthétique rond 1 ct +540 $, 1,5 ct +750 $, 2 ct +1 350 $ (total 4 290 $) | [rapport](wisconsin/cival.md) |
| Wisconsin | Paul's Jewelers | partiel : accueil du widget ShowroomPro seulement (`/api/` interdit) ; panier interdit | une photo par fiche ; 520 / 479 ms | 1 250 $ (synthétique 0,25 ct) à 6 550 $ (18 k, 1,70 ct naturel) ; constructeur non vu | [rapport](wisconsin/pauls-jewelers.md) |
| Wisconsin | Kesslers Diamonds | partiel : 4 étapes JewelerOS (5 sur iPhone), 3D non ouverte ; panier interdit | photo et vidéo 1080p sur la fiche ; assistant 1,4 à 2,5 s ; fiche 0,70 / 0,74 s | 6 913 $ (marquise synthétique 4 1/2 ct t.w., 14 k) ; 998 à 6 913 $ en page 1 | [rapport](wisconsin/kesslers-diamonds.md) |
| Wisconsin | Jewelers Workshop | partiel : 4 étapes JewelerOS ; pas de vente en ligne | photos de galerie ; options en 1,33 / 1,15 s | aucun (« Call for Price » sur 144 bagues) | [rapport](wisconsin/jewelers-workshop.md) |
| Wyoming | EK Jewelers | partiel : 4 étapes JewelerOS, 3D non ouverte ; `/cart/add` interdit | vignettes recolorées ; 1,0 à 1,2 s / 1,2 s | aucun dans l'outil ; catalogue 1 299 à 18 299 $ (1,30 ct GIA) | [rapport](wyoming/ek-jewelers.md) |
| Wyoming | Legacy Diamond & Gems | partiel : `*/cart`, tri et recherche interdits | 2 photos et agrandissement ; 1,8 à 2,1 s | 936 à 4 500 $ en page 1 ; fiche 1 197 $ | [rapport](wyoming/legacy-diamond-gems.md) |
| Wyoming | Rasmussen Jewelers | **bloqué** : robots.txt en HTTP 522 à deux essais (contrôle INCONNU) | aucun | non relevé ; [Inv] 13 bagues synthétiques de 447 à 2 495 $ | [rapport](wyoming/rasmussen-jewelers.md) |
| Wyoming | JC Jewelers | partiel : pas de configurateur ; `?add-to-cart=` interdit | photos sans zoom ni vidéo ; fiche 0,4 / 0,9 s | 1 995 à 20 295 $ ; solitaire 0,50 ct GIA 3 895 $ (rupture) ; livraison offerte dès 1 999 $ | [rapport](wyoming/jc-jewelers.md) |

## 2. Fonctions et options récurrentes

| Fonction ou option | n/18 | Sites (preuve dans le rapport du site) |
|---|---|---|
| Prix d'une bague ou d'une monture affiché quelque part sur le site | 17 | tous sauf Jewelers Workshop (« Call for Price ») ; Green Lake en fourchette, Jacqueline's avec un bandeau d'avertissement |
| Prix dans l'outil de conception | 0 | aucun des 7 assistants JewelerOS, ni Green Lake, ni le formulaire de départ de Joseph ; Paul's non vu |
| Prix recalculé à chaque option, sur une fiche | 2 | Joseph (métal, pierres d'accompagnement, récapitulatif « Your selections »), CIVAL (taille, carat, « Total price »). DovEggs : supplément écrit (« Sterling Silver (+$8.00) »), effet non mesuré |
| … prix de la bague complète, pierre comprise | 1 | CIVAL (synthétique ou moissanite inclus). Monture seule : Joseph, Green Lake |
| Décomposition métal, façon, pierre, marge | 0 | aucun. Ce qui s'en approche : DovEggs explique le supplément de métal par le cours (« Metal spot prices fluctuate ») |
| 3D temps réel vue | 0 | annoncée mais non atteinte : 7 sites JewelerOS et Paul's (ShowroomPro) |
| Assistant JewelerOS (métal, style, origine, forme, carat, délai, « Decide later ») | 7 | Ben David, Midtown (étape 1 seulement), Cline, Jacqueline's, Kesslers, Jewelers Workshop, EK. Aussi Rasmussen [Inv] |
| Visuel qui suit le métal | 5 | vignettes recolorées (Cline, Jacqueline's, Kesslers, EK) ; photo de la fiche Joseph. Image fixe : CIVAL, DovEggs |
| Délai souhaité demandé au client | 5 | Cline, Jacqueline's, Kesslers, Jewelers Workshop, EK (1-4 semaines à 3-6 mois) |
| Naturel et synthétique proposés sur le site | 14 | Ben David, Midtown, Joseph, Green Lake, Cline, Jacqueline's, White's, Calvin Broyles, Spencer & Kuehn (FAQ), Paul's, Kesslers, Jewelers Workshop, EK, Legacy. Synthétique (et moissanite) seulement : DovEggs, CIVAL (naturel « sur demande »). Naturel seulement : Fink's. Aucune mention : JC |
| … écart chiffré dans le même parcours | 1 | Joseph : pierres d'accompagnement synthétiques, 4 880 $ contre 5 452 $ en platine |
| Or 14 k, 18 k et platine au choix | 3 | Joseph (7 métaux), Green Lake (11 dont 22 kt et mokume), DovEggs (10, 14, 18 k, platine, argent). Couleurs d'or sans titre : les assistants JewelerOS. 14 k seul : CIVAL |
| Taille de doigt choisie en ligne | 8 | Ben David, Joseph, Green Lake, Cline, DovEggs, Calvin Broyles (sans effet), CIVAL (+100 $ dès 9, baguier envoyé), Kesslers (champ libre, « Size Later ») |
| Gravure dans le parcours | 2 | Green Lake (à la main, 6 styles, 3 emplacements), DovEggs (15 caractères) |
| Configuration dans l'adresse | 1 | Joseph (`?finish[0]=pt:W&size=5.75&meleeOfferID=1`). Filtres dans l'adresse : Fink's, Legacy |
| Recherche de diamants qui répond | 4 | Joseph (17 561 pierres), Green Lake (511 synthétiques avec prix), Cline (91 pages, lien GIA), Calvin Broyles (91 pages). « 0 diamonds found » : Midtown, Jacqueline's |
| Numéro de certificat ou lien vers le rapport sur une fiche | 3 | Green Lake (IGI n° 735595067), Cline (`gia.edu/report-check`), EK (GIA n° 5181938321). Mention seule : JC (« GIA certified »). Rien sur la fiche : Fink's, CIVAL, Kesslers, Legacy |
| Délai du sur-mesure chiffré | 7 | Fink's (4 à 7 semaines), Joseph (6 à 8), DovEggs (7 à 10 jours ouvrés après accord de la CAO), Spencer & Kuehn (4 à 6 semaines, « sometimes as little as 12 to 15 business days »), CIVAL (4 à 8), Kesslers (« as little as six weeks »), Jewelers Workshop (« less than a month »). Vague (« a couple of weeks ») : Midtown, Cline, EK, Paul's |
| CAO, cire ou rendu montré avant fabrication (promesse écrite) | 12 | Midtown, Joseph, Cline, DovEggs, Jacqueline's, Calvin Broyles, Spencer & Kuehn, CIVAL, Kesslers, Jewelers Workshop, Legacy, JC. Aussi White's [Inv] |
| Objet physique avant fabrication | 3 | Cline (cire à toucher et essayer), Jewelers Workshop (résine ou cire à essayer), Joseph (cire montrée en salle ou expédiée). Aussi White's [Inv] (cire à taille réelle envoyée par la poste) |
| Photos ou vidéos de la commande du client | 1 | DovEggs (photos de la bague terminée par e-mail avant l'envoi). CIVAL envoie images et vidéos des pierres aux clients éloignés. Fabrication filmée : 0 |
| Vidéo de la bague sur la fiche | 3 | Joseph, Spencer & Kuehn (15 s), Kesslers (1080p) |
| Retours avec exclusion écrite du sur-mesure | 13 | Fink's, Ben David, Midtown, Joseph, Cline (avoir), DovEggs (15 % de frais), Jacqueline's, White's, Spencer & Kuehn, CIVAL, EK, Legacy, JC. Sans exclusion lue : Calvin Broyles, Paul's, Kesslers. Aucune politique : Jewelers Workshop ; EK « policy to come » |
| Reprise ou échange du diamant | 5 | Fink's, Cline (« Lifetime Upgrades », avoir), Kesslers (naturel seulement), EK, Legacy (naturel ≥ 0,5 ct) |
| Garantie liée à une inspection périodique | 3 | Fink's (6 mois), Joseph (6 mois, sous peine d'annulation), Legacy (6 à 12 mois). Sans inspection : Kesslers |
| Financement affiché avec une offre nommée | 11 | Fink's, Joseph, Green Lake, Cline, CIVAL (Affirm, parfois avec d'autres) ; White's (Affirm) ; Jacqueline's (12 mois, Sezzle) ; Calvin Broyles, Kesslers (Wells Fargo) ; Legacy (Synchrony) ; Spencer & Kuehn (sans taux) |
| Livraison gratuite, totale ou au-dessus d'un seuil | 9 | Fink's, Ben David (contredit sur la fiche), Midtown, Joseph, Green Lake (> 500 $), Jacqueline's, CIVAL (≥ 100 $), Kesslers (> 249 $), JC (> 1 999 $). Frais chiffrés : DovEggs, Spencer & Kuehn, Legacy |
| Bijou de famille proposé | 6 | Cline, Calvin Broyles, Spencer & Kuehn, Paul's, Jewelers Workshop, JC |
| Chat ou SMS | 10 | Fink's, Midtown, Green Lake, Cline, Jacqueline's, White's, Calvin Broyles, Paul's, Kesslers, Legacy. WhatsApp : 0 |
| Pierre choisie en boutique, pas d'achat en ligne de bout en bout | 8 | Midtown, Cline, Paul's, Jewelers Workshop, EK, Kesslers (assistant), Green Lake (devis), Jacqueline's (fiche sans panier) |
| Livraison hors États-Unis | 3 | Joseph (FedEx International Priority), DovEggs, CIVAL. Refusée : Fink's, Jacqueline's, White's, Kesslers, Legacy |

## 3. Points forts à retenir pour JR Diamond, classés par impact [I]

1. **Un prix qui bouge avec chaque option, écrit sur l'option.** CIVAL affiche 2 840 $ de base, +100 $ dès la taille 9, +540 $, +750 $ ou +1 350 $ selon le carat du synthétique, et un « Total price » à jour (4 290 $ pour 2 ct) ([rapport](wisconsin/cival.md)). Joseph recalcule la monture : 3 995 $ en 14 k, 5 115 $ en 18 k, 5 452 $ en platine, 4 880 $ avec des pierres d'accompagnement synthétiques, et rappelle chaque choix dans « Your selections » ([rapport](washington/joseph-jewelry.md)). C'est l'écart principal avec le « Sur devis » de JR Diamond ; aucun des deux ne décompose le prix.
2. **Montrer la bague réelle avant l'envoi.** DovEggs écrit « Real customer rings — not renders » sur ses fiches et « We will send you pictures of the finished jewelry by email for your review before we ship it » ([rapport](washington/doveggs-seattle.md)). CIVAL envoie « images and video links » des pierres retenues aux clients éloignés ([rapport](wisconsin/cival.md)). Personne ne filme la fabrication : la promesse « on voit naître son bijou » reste libre.
3. **Un délai proche des 14 jours ouvrés, et des concurrents bien plus lents.** DovEggs fabrique en 7 à 10 jours ouvrés après l'accord de la CAO, première épreuve en 2 à 3 jours ouvrés ([rapport](washington/doveggs-seattle.md)). Spencer & Kuehn annonce « 4 to 6 weeks - sometimes as little as 12 to 15 business days » ([rapport](west-virginia/spencer-kuehn-fine-jewelry-studio.md)). Joseph (6 à 8 semaines), CIVAL (4 à 8), Fink's (4 à 7) et Kesslers (six semaines au mieux) sont loin derrière.
4. **La pièce validée avant la fonte.** Jewelers Workshop fait essayer un modèle en résine ou en cire et le corrige ([rapport](wisconsin/jewelers-workshop.md)) ; Cline fait toucher la cire ([rapport](washington/cline-jewelers.md)) ; Joseph montre ou expédie la cire et tient un « espace projet privé » avec rendus et approbations ([rapport](washington/joseph-jewelry.md)) ; Midtown fait approuver la CAO « sous tous les angles », révisions comprises ([rapport](virginia/midtown-jewelers.md)). Réponse directe au constat des forums « bijou reçu différent de la CAO ».
5. **La pierre identifiée sur la fiche.** EK donne couleur, pureté, mesures en mm, numéro du rapport GIA et poids de la bague (4,89 g) ([rapport](wyoming/ek-jewelers.md)). Cline relie chaque pierre à son rapport sur gia.edu ([rapport](washington/cline-jewelers.md)). Green Lake cite le numéro IGI de la pierre sertie et filtre 511 synthétiques avec leur prix ([rapport](washington/green-lake-jewelry-works.md)). Réponse à la peur de l'échange de pierre.
6. **Des règles du sur-mesure écrites avant l'achat.** DovEggs : révisions de CAO gratuites, révision du prix seulement si l'or bouge de 5 % ou plus, commande « dormante » à 60 jours ([rapport](washington/doveggs-seattle.md)). Legacy ouvre « Shipping / Returns / Warranties » sur la fiche, frais de livraison chiffrés (15, 40, 50 $) et exclusion du sur-mesure en une phrase ([rapport](wyoming/legacy-diamond-gems.md)). Kesslers met retours et garantie dans un accordéon de la fiche ([rapport](wisconsin/kesslers-diamonds.md)).
7. **L'atelier nommé.** Green Lake nomme sur la fiche la designer et la sertisseuse (Krista, Jessica R) et son constructeur couvre gravure à la main, 8 sertissages, filigrane et jonc ([rapport](washington/green-lake-jewelry-works.md)). Spencer & Kuehn signe ses réalisations (« Made by Katherine Spencer ») ([rapport](west-virginia/spencer-kuehn-fine-jewelry-studio.md)). Modèle direct pour « l'atelier en direct ».
8. **Une garantie sans petits caractères.** Kesslers remplace un diamant perdu, centre compris, sans inspection ni frais ([rapport](wisconsin/kesslers-diamonds.md)). Paul's inclut sans frais le plan d'entretien JM Care sur toute pièce sur mesure ([rapport](wisconsin/pauls-jewelers.md)). EK offre la première mise à taille sous 6 mois, proche de la règle de l'atelier JR ([rapport](wyoming/ek-jewelers.md)).
9. **Une entrée guidée courte, sans compte.** L'assistant JewelerOS tient en 4 écrans, vignettes recolorées par métal, « Decide later », délai souhaité ; il s'affiche en 1,0 à 1,2 s chez EK, 1,4 à 2,5 s chez Kesslers ([EK](wyoming/ek-jewelers.md), [Kesslers](wisconsin/kesslers-diamonds.md), [Cline](washington/cline-jewelers.md)). Le widget de Paul's propose son quiz en anglais, espagnol et français ([rapport](wisconsin/pauls-jewelers.md)). Aucun n'affiche de prix.
10. **La bague portée.** Fink's ouvre un essayage virtuel Camweara d'un bouton ([rapport](virginia/finks-jewelers.md)) ; Joseph montre la bague sur la main et en vidéo ([rapport](washington/joseph-jewelry.md)) ; CIVAL, 15 photos portées et en écrin ([rapport](wisconsin/cival.md)).
11. **Le bijou de famille.** Cline (« Heirloom Redesign »), Calvin Broyles (« from jewelry that has been passed down »), Spencer & Kuehn (refonte de l'or du client), Paul's (premier témoignage de la page) ([Cline](washington/cline-jewelers.md), [Calvin Broyles](west-virginia/calvin-broyles-jewelers.md), [Spencer & Kuehn](west-virginia/spencer-kuehn-fine-jewelry-studio.md), [Paul's](wisconsin/pauls-jewelers.md)).
12. **Des catalogues filtrables avec compteurs.** Fink's affiche le nombre de bagues à côté de chaque filtre ; Kesslers, 15 filtres dont type de diamant, couleur et pureté ; Legacy passe de 311 à 205 résultats avec un clic ([Fink's](virginia/finks-jewelers.md), [Kesslers](wisconsin/kesslers-diamonds.md), [Legacy](wyoming/legacy-diamond-gems.md)).
13. **Un visuel servi vite.** CIVAL 396 / 440 ms, JC 0,4 / 0,9 s, Fink's 0,6 s, Kesslers 0,70 s, Joseph 848 ms ([CIVAL](wisconsin/cival.md), [JC](wyoming/jc-jewelers.md), [Fink's](virginia/finks-jewelers.md)) : repères pour le rendu simplifié.

## 4. Défauts fréquents à éviter

- **Un outil 3D loué qu'on n'atteint pas.** Sur les 7 sites JewelerOS et chez Paul's, l'écran 3D n'a jamais été vu. Kesslers et Cline affichent « Something went wrong » quand l'appel à l'API est coupé, sans repli ; la cause est en partie l'audit [S]. Chez Paul's, les cinq boutons de la page de départ n'ouvrent pas le widget.
- **Concevoir sans prix.** Aucun outil de conception du groupe ne montre un prix ; Jewelers Workshop n'en affiche nulle part ; Green Lake exige un e-mail et un compte « Design Page » pour obtenir un devis.
- **Des prix non fermes ou douteux.** Bandeau « updating the website » et bague « 3,1 CTW Halo » à 235 $ (Jacqueline's) ; « Subject to Availability, Credit Authorization and Pricing » (Ben David) ; prix payé ≠ prix affiché, −18 % au paiement (DovEggs) ; annulation possible après débit en cas d'erreur de prix (Calvin Broyles) ; « prices subject to change without notice » (Fink's, Spencer & Kuehn).
- **Des pages vides ou cassées.** « 0 diamonds found » (Midtown, Jacqueline's) ; `/ringsettings` bloqué sur « Loading Rings » et lien « Custom Engagement Rings » mort (Jacqueline's) ; pages Financing et Education vides (White's) ; catégorie redirigée vers une image PNG (JC) ; lien vers le domaine de développement du fournisseur et « Cushion » qui mène au rond (Calvin Broyles) ; « agrandir » sans effet (Joseph).
- **Du contenu périmé ou contradictoire.** Texte d'une autre bijouterie de Floride resté en ligne et horaires de fêtes faux (Jewelers Workshop) ; événement d'avril en novembre, ancienneté de 50, 57 ou 59 ans, avis signé « Jane Doe » (Paul's) ; bandeau d'août (Legacy) ; retours à 30 ou 7 jours selon la page (Spencer & Kuehn) ; livraison gratuite et 12,50 $ à la fois (Ben David) ; origine choisie en ligne puis « in store » (Cline).
- **Des fiches pauvres.** Une seule photo (Ben David, Calvin Broyles, Paul's) ; « COLOR: CLARITY: » vides (Legacy) ; titres bruts du stock répétés (Ben David, White's : « 14K YG LAB DIA RING WITH CERT » ×11) ; adresse qui annonce 1/2 ct pour une bague de 2 1/2 ct (Kesslers) ; aucun certificat sur la fiche (Fink's, CIVAL, Kesslers, Legacy).
- **Une image qui ne suit pas le choix.** CIVAL garde la même photo après le choix de la forme ou du carat ; chez DovEggs, les photos sont celles d'autres bagues. La bascule « Natural / Lab Grown » ne change rien à l'écran (Cline, Jacqueline's, EK).
- **Des retours durs.** Avoir seulement (Ben David, Cline, White's) ; frais de reprise de 15 % (DovEggs), 10 % (Joseph, stock), 4 % (JC), 3 % de frais de carte (Legacy) ; pierres vendues « as-is » (Midtown, Jacqueline's) ; retour aux frais du client (Midtown, Jacqueline's, White's, Calvin Broyles, Kesslers, JC) ; acompte de 50 % non remboursable (EK).
- **Une garantie sous condition.** Inspection tous les 6 mois sous peine d'annulation, à faire en boutique (Joseph, Fink's) ou tous les 6 à 12 mois (Legacy) : pénalisant pour un client à distance.
- **Des gestes ratés sur mobile et ordinateur.** « Back » recouvert par l'en-tête (Cline) ou sans effet (EK) ; bulle de chat sur une carte (Cline) ; bandeau de cookies sur une tuile (Midtown, Jacqueline's) ; pastilles Rose et Yellow non cliquables et étape de plus sur iPhone (Kesslers).
- **Rien sur l'atelier pendant la commande.** 12 sites promettent une CAO, une cire ou un rendu avant la fonte, aucun ne montre la fabrication de la bague du client.

## 5. Couverture

- **Territoires sans site** : aucun. 5 territoires, 20 sites (rangs 1 à 4 de chaque inventaire).
- **Statuts** : 1 complet (Green Lake, vente sur devis), 17 partiels, 2 bloqués (Danforth : robots.txt remplacé par la page HTML de l'application ; Rasmussen : HTTP 522 à deux essais). Aucun contournement.
- **Causes des audits partiels** :
  - assistant JewelerOS (`jeweleros.com/api/` interdit) : Ben David et Midtown (étape 1), Cline, Jacqueline's, Kesslers, Jewelers Workshop, EK (4 étapes) ;
  - widget ShowroomPro (`showroompro.ai/api/` interdit) : Paul's ;
  - vitrine tierce interdite à tout robot : Spencer & Kuehn (alliances Stuller) ;
  - panier ou ajout au panier interdit : 16 sites (tous les partiels sauf Jewelers Workshop, qui n'a pas de panier utilisable ; chez Ben David, adresse d'envoi du bouton non identifiable) ;
  - pas de vente ou de constructeur en ligne : Fink's, White's, Calvin Broyles, Spencer & Kuehn, Legacy, JC (catalogue) ; Jewelers Workshop (aucune vente) ;
  - étape en panne côté site : Midtown et Jacqueline's (recherche de diamants vide), Jacqueline's (`/ringsettings`).
- **Divergences avec les inventaires, à trancher** :
  - Fink's : l'inventaire du 25/11 décrit une fiche configurable (Trellis, 56 combinaisons métal × carat × qualité, 2 875 à 30 015 $) [Inv] ; l'audit n'a vu que des pièces uniques de la Studio Collection. Fiches différentes [I] : la Trellis est à auditer.
  - Spencer & Kuehn : « pas de synthétique » dans l'inventaire ; la FAQ lue par l'audit cite « top quality lab-grown gemstones ».
  - Calvin Broyles : l'inventaire voyait le catalogue redirigé vers `/verify.html` ; l'audit du 25/11 ne l'a pas vu (contrôle intermittent).
  - Paul's : « widget non chargé » dans l'inventaire ; l'audit l'ouvre avec `/#ringbuilder-quiz` sur l'accueil.
  - Jacqueline's : l'inventaire lit un constructeur Punchmark de 37 pages (copie en cache) ; l'audit le voit bloqué sur « Loading Rings ».
  - Joseph : le curseur de teint de peau cité par l'inventaire n'a pas été retrouvé [S].
  - Rasmussen : l'inventaire a lu des pages après les erreurs 522 (JewelerOS, synthétiques de 447 à 2 495 $) [Inv] ; l'audit est resté bloqué.
- **Points de méthode à trancher par la session principale** :
  - requêtes vers `jeweleros.com/api/` interceptées et annulées avant l'envoi au clic (Midtown, Cline, Jacqueline's, Kesslers) : même cas que Karlise et Forever Young (us-09), jugé sans écart ;
  - EK : un premier relevé a laissé passer les appels faits par la page à son ouverture (règle déjà tranchée : pas un écart) ;
  - inventaire du Wyoming : la page d'accueil de `fagandiamondjewelers-frame.jewelershowcase.com` a été chargée une fois après lecture d'un robots.txt qui l'interdit (`Disallow: /`) ; seul constat tiré : un menu « WEDDING AND ENGAGEMENT » [Inv] ;
  - robots.txt de Fink's et de DovEggs : consignes adressées aux agents d'achat, traitées comme des données, sans suite.
- **Sites des inventaires non audités** (rangs 5 et suivants), avec des pistes [Inv] :
  - Virginia : Mervis (14 133 diamants listés), Nine Roses (prix d'exemple avec la composition couverte, « videos and photos of the stones sourced for you »), Chrysella (cire envoyée gratuitement avant fabrication), Sycamore (JewelerOS), Washington Diamond (CAO, cire, remboursement intégral), Adele Diamond (constructeur d'alliances : 3 028,25 $ et « Ships as soon as Today » à l'ouverture). Danforth annonce 5 à 7 jours ouvrés [I].
  - Washington : Seattle Gold Grills (aperçu 2D étiqueté « Design rendering · shape & metal match » ou « Design inspiration · details may differ »), Ben Bridge (chaîne, hologramme 360° en magasin), Valerie Madison (barème : dès 3 500 $, acompte 300 $, 2 retouches de CAO puis 250 $), L T Denny, Baraka Gems, Stórica Studio (« Come see where it's made »).
  - West Virginia : Lewisburg et Delfine's (constructeur Punchmark), C. F. Reuschlein (CAO qu'on fait tourner), Jefferson Estate (pages sans réponse), Feagans, T. K. Dodrill.
  - Wisconsin : The Diamond Center (cire imprimée en 3D avant la fonte), Jim Kryshak, Craig Husar, Wickersham, Bay Area (JewelerOS ; « our website pricing may not be accurate »), The Jewelry Center (garantie de prix sur les pierres de 0,50 ct et plus).
  - Wyoming : Jackson Hole Jewelry Company (estimation écrite, garantie de 24 mois), Riddle's (déjà audité au Dakota du Sud), Seevers, Burri (sans prix), Fagan (catalogue dans un cadre interdit), Okes.
- **Limites communes** :
  - une seule mesure de temps par cas, iPhone émulé dans Chromium (pas Safari), sans carte graphique ;
  - aucun paiement, chat, WhatsApp ni formulaire, aucun panier rempli ;
  - avis non recoupés ; prix relevés pendant les soldes de fin novembre (DovEggs −18 %) ;
  - alliance de kiddouchin non recherchée : seuls des constructeurs d'alliances tiers sont signalés (Adele [Inv], « Men's Band Builder » de Jacqueline's, Stuller chez CIVAL et Spencer & Kuehn), aucun audité.

## Contrôle de la session principale (25/11)
- Fagan (inventaire du Wyoming) : page chargée après lecture d'un robots.txt qui l'interdit. Le seul constat qui en vient porte désormais [P1] dans l'inventaire et n'est pas repris dans la comparaison.
- Danforth (robots.txt remplacé par la page HTML de l'application) et Rasmussen (erreur 522) : contrôle impossible, donc site non ouvert. Ce n'est pas un refus explicite : ces deux sites sont à proposer pour un nouvel essai.
