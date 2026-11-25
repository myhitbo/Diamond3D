# Audit : Anny's Manufacturing Jewellers (Victoria, Australie)

- **Site** : https://www.annys.com.au/ ; page de départ https://www.annys.com.au/engagement-rings
- **Date** : 15/11/2026 (séance d'audit du 25/11 au plan technique, date de rapport demandée : 15/11/2026)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours complet jusqu'à la page de demande de devis (étape 3). Il n'y a ni panier ni paiement pour une bague de fiançailles (voir « Parcours »). Plusieurs contrôles dépendent de `/api/`, interdit par robots.txt : voir « Limites ».
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Catalogue (39 modèles) [V] | `/engagement-rings` | style (Solitaire, Side Stone, Halo, Trilogy), forme (10), métal (7), prix mini/maxi, tri |
| 1. Configure [V] | `/engagement-rings/crystal-six-claw-solitaire` | métal, taille de doigt (H à Z+2), forme, naturel / synthétique, carat 1,00 à 4,00 ct, gravure |
| 2. Choose Diamond [V] | `…/diamonds?shape=round&stone=lab&…` | couleur, taille de coupe, carat, pureté, retour 7 jours, filtres avancés, tri, liste de diamants réels (IGI) |
| 3. Review & Enquire [V] | `/enquiry?designSlug=…&diamond=…` | récapitulatif, taille, gravure, formulaire nom/e-mail/téléphone, bouton « MAKE AN ENQUIRY » |
| Fin | (aucune) | pas de panier, pas de paiement : « Our team confirms your final quote within 24 hours » [V]. Le sac « Shopping bag » ne reçoit que le prêt-à-expédier (« Pieces you add will appear here, ready to ship ») [V] |

## Contrôles vérifiés

Le contrôleur (`controls.cjs`) liste 210 contrôles visibles sur ordinateur et 128 en affichage iPhone sur le catalogue [V]. Le tableau ci-dessous détaille ceux qui comptent pour le parcours ; la navigation, le pied de page (≈ 90 liens) et le bandeau de cookies ne sont pas détaillés un à un.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Material : 18kt Yellow Gold / 18kt White Gold / Platinum | boutons | change l'adresse (`?metal=`), la photo de la bague change (jaune/blanc) ; l'effet est lu par chargement direct de l'adresse | jaune et blanc : monture 2 000 A$ ; platine : 2 100 A$ (+100) | OK [V] |
| Finger size (liste, 35 valeurs H à Z+2) | liste | adresse `?size=` ; ajoute une ligne « Finger size surcharge » | aucun supplément H, M, N ; +200 A$ P à R ; +250 A$ T ; +350 A$ Z et Z+1 (O, S, U à Y, Z+2 non testés) | OK [V] |
| Shape : ROUND (seule forme proposée sur ce modèle) | bouton | `?shape=oval` est ignoré, ROUND reste sélectionné | aucun | OK [V] ; autres formes proposées sur d'autres modèles [I] |
| Stone type : Natural (F, VS2) / Lab Grown (E, VS1) | boutons | change la pierre « estimée » | voir tableau des prix | OK [V] |
| Carat size : 1,00 à 4,00 ct (7 pas) | boutons | change l'estimation de la pierre centrale | voir tableau | OK ; naturel 3,50 ct : « Pricing on Enquiry » [V] |
| Add Engraving (+95 A$) | bascule | ouvre un champ (20 caractères), 3 polices (Trajan Pro 3, Monotype Corsiva, Lucida Calligraphy), aperçu « Similar font shown » | +95 A$ | s'ouvre, aperçu vide tant que rien n'est tapé ; le calcul du prix passe par `/api/price` : non actionné jusqu'au bout [V] |
| View larger | bouton | ouvre une visionneuse « Photo 1 of 2 », flèches, zoom − / 100 % / +, « Double-tap or pinch to zoom » | aucun | OK [V] |
| Vignettes photo | boutons | 3 images : vue principale, face avant (« front »), et la vue principale en double | aucun | OK [V] |
| Onglets SPECIFICATIONS / CARE / SIZING | onglets | le texte visible reste le même (largeur de la bande 2 mm, livraison, garantie, 7 jours, appraisal, 3 étapes de fabrication) | aucun | contenu identique pour les trois onglets au moment du test [V] |
| LET ANNY'S TAKE CARE OF IT | bouton | non cliqué : sens inconnu (sélection du diamant par les experts, d'après son texte) | — | non testé [I] |
| SELECT MY DIAMOND | bouton | mène à l'étape 2 (liste de diamants) | — | OK [V] |
| ADD TO WISHLIST / View wishlist | boutons | `/wishlist` interdit par robots.txt | — | non testé (interdit) |
| Make an Enquiry | bouton | panneau : nom, téléphone, e-mail, sujet (5), message, « Verifying you're not a robot… » (Turnstile), « SEND ENQUIRY », « We typically respond within a few hours » | — | ouvert, rien envoyé [V] |
| Send to a Friend | bouton | panneau : nom, e-mail, nom et e-mail de l'ami, message ; « We'll send them a link to this ring » | — | ouvert, rien envoyé [V] |
| Étape 2 : Colour D, E, F, G | boutons | filtre l'adresse (`colour=E%2CF`), la liste se recharge | — | OK [V] |
| Étape 2 : Cut ID / EX ; Clarity FL à SI1 ; Carat 1 à 4 ct ; 7-day return Yes / Any | boutons | filtres, adresse mise à jour | — | OK (couleur, pureté et carat actionnés ; coupe et retour lus, non actionnés) |
| ADVANCED FILTERS | bouton | affiche Polish (EX/VG), Symmetry (EX/VG), Fluorescence (N/F/M/S), Table, Depth, Ratio | — | OK [V] |
| Sort results (4 choix : prix croissant/décroissant, carat croissant/décroissant) | liste | adresse `sort=price-desc` | — | OK [V] |
| RESET FILTERS | bouton | retire les filtres ajoutés | — | OK [V] |
| CHOOSE THIS DIAMOND | bouton | mène à `/enquiry?…&diamond=<référence>` avec la pierre choisie | pierre IGI 1,10 ct E VS1 : 2 935,94 A$ ; total 4 935,94 A$ | OK [V] |
| Catalogue : Solitaire / Halo / Side Stone / Trilogy | boutons | « Halo » : 7 modèles sur 39 | — | OK [V] |
| Catalogue : métal 18kt jaune, platine | boutons | adresse `?metal=…`, 39 modèles restent affichés | — | sans effet sur le nombre [V] |
| Catalogue : métal 9kt Rose Gold | bouton | 2 modèles | — | OK [V] |
| Catalogue : formes (Round à Heart), prix mini/maxi | boutons, champs | « OVAL » : clic non abouti ; saisie dans « Minimum price » : échec | — | non testés (échec du clic ou de la saisie) |
| Account, Search, wishlist, 7-DAY DIAMOND RETURN, 1300 092 000, e-mail | liens | téléphone `tel:`, e-mail `mailto:`, retour 7 jours `/diamond-return` | — | liens lus [V], non suivis sauf pages de règles |
| Shopping bag | bouton | tiroir « Your bag is empty. BROWSE READY TO SHIP » | — | OK [V] |

### Prix de la fiche « Crystal Six Claw Solitaire » (jaune 18 k, A$ TTC, GST inclus) [V]

Lus en chargeant directement les adresses `?metal=…&stone=…&carat=…` (prix rendu côté serveur).

| Carat | Synthétique E VS1 : pierre estimée / total | Naturel F VS2 : pierre estimée / total |
|---|---|---|
| 1,00 | 1 521,36 / 3 521,36 | 7 712,11 / 9 712,11 |
| 1,50 | 1 877,76 / 3 877,76 | 17 161,95 / 19 161,95 |
| 2,00 | 2 087,73 / 4 087,73 | 35 586,62 / 37 586,62 |
| 2,50 | 2 361,39 / 4 361,39 | 52 247,90 / 54 247,90 |
| 3,00 | 3 095,43 / 5 315,43 | 83 389,90 / 85 609,90 |
| 3,50 | 3 213,27 / 5 433,27 | « Pricing on Enquiry » |
| 4,00 | 3 772,30 / 5 992,30 | 140 023,25 / 142 243,25 |

À partir de 3 ct, le total dépasse de 2 220 A$ la pierre, soit 220 A$ de plus que la monture à 2 000 A$ [I] (la ligne de monture n'est pas relue).

## Options disponibles

- **Métaux** : or 18 k jaune, blanc, rose ; platine ; or 9 k jaune, blanc, rose (catalogue). Sur Crystal : or 18 k jaune, blanc, platine [V].
- **Formes** (catalogue) : Round, Oval, Cushion, Princess, Marquise, Pear, Emerald, Asscher, Radiant, Heart [V]. Seule la forme ronde est proposée sur Crystal.
- **Origine** : naturel (F VS2 par défaut), synthétique (E VS1 par défaut) ; filtres couleur D à G, coupe ID/EX, pureté FL à SI1 [V].
- **Carat** : 1 à 4 ct ; polices de gravure : 3 ; styles : solitaire, side stone, halo, trilogy [V].
- **Tailles** : H à Z+2 (échelle australienne) ; page « ring size converter » et « printable ring sizer » listées sous `/tools` [V pour les liens].
- Non proposés : vue 360°, vidéo, réalité augmentée, essayage à la maison sur cette fiche [V].

## Prix, délais, retours, garanties

- **Décomposition du prix** : monture + pierre estimée = total TTC ; « Final price depends on your diamond » ; sur la page 3, monture, pierre, supplément de taille et total [V]. Pas de marge ni de main-d'œuvre séparées.
- **Délai** : « Made to order · 3–4 weeks » ; livraison estimée « mid-December 2026 » sur la page de devis (consultée le 25/11) [V].
- **Livraison** : « Free insured delivery » ; prêt-à-expédier 9,99 A$ sous 150 A$ [V, `/refund-policy`].
- **Retours** : le sur-mesure et le fait-à-la-commande sont exclus du retour pour changement d'avis ; le travail sur mesure ne s'annule pas ; si insatisfait : écrire sous 14 jours, remodelage à tarif réduit aux frais du client. Prêt-à-expédier : 14 jours, étiquette 15 A$. Diamant : retour 7 jours après visionnage en boutique, 150 A$ retenus si le diamant repart chez le fournisseur ; pas tous les diamants éligibles [V, `/refund-policy`, `/diamond-return`].
- **Garanties** : nettoyage et polissage à vie ; défauts de fabrication réparés à vie ; une mise à taille gratuite sous 2 mois (jusqu'à 3 tailles) ; usure exclue [V, `/lifetime-guarantee`].
- **Certificats** : rapport IGI cité sur les diamants synthétiques (n° affiché sur la page 3) ; « Actual report details shown for the selected stone » ; « Workshop appraisal signed by Chris Ozkoch » [V]. GIA : non vu.
- **Libellé du synthétique** : « Lab Grown » [V].
- **Langues, devises** : anglais, A$ (GST incluse) [V].

## Confiance et service

- 1300 092 000, e-mail, 3 lieux (Frankston, Melbourne CBD, Mornington), rendez-vous par e-mail ; pas de chat ni WhatsApp relevés sur la page [V pour les liens].
- Avis : « 5,0 / 5 sur 407 avis Google (312 Frankston, 95 Collins Street) », avis nominatifs affichés sur `/reviews` [V, chiffres annoncés par le site, non recomptés].
- Preuves de fabrication : étapes décrites (« CAD & 3D print : we render your design in 3D and 3D-print it for a real-finger try-on », fonderie, sertissage) ; pas de photo ni vidéo d'atelier vérifiée sur la fiche ; pas de suivi de commande [V].
- Dossier de pierres « Curated by Anny's Frankston workshop » ; guides (4C, coût d'une bague) [V pour les liens].

## Points forts à retenir pour JR Diamond

1. **Prix décomposé et affiché dès la fiche** : monture + pierre estimée = total, tous les chiffres changent avec chaque option (preuve : tableau ci-dessus, adresses `?stone=&carat=`).
2. **Configuration dans l'adresse** : métal, taille, pierre et carat sont dans l'URL, donc partageables (`?metal=18kt-white-gold&size=q&stone=natural&carat=1.50`).
3. **Diamant réel, avec rapport** : étape 2 montre de vraies pierres IGI avec leur prix, filtres avancés (poli, symétrie, fluorescence, table, profondeur) ; page finale avec référence du rapport.
4. **Essayage d'une maquette imprimée en 3D** décrit dans les étapes de fabrication (page fiche, onglet Spécifications).
5. **Prix de la taille de doigt et gravure chiffrés** (+200/250/350 A$ ; +95 A$), supplément expliqué par une ligne dédiée.
6. **Délai et date de livraison estimée** sur la page de récapitulatif ; « confirm your final quote within 24 hours ».
7. **Garantie claire sur une page** (nettoyage à vie, première mise à taille gratuite sous 2 mois).

## Défauts observés

- Pas de vrai achat en ligne : la bague de fiançailles finit en demande de devis ; aucun moyen de paiement affiché [V].
- Le total reste « estimé » : le prix change quand une pierre précise est choisie (1,10 ct : 2 935,94 A$ contre 1 521,36 A$ estimés pour 1,00 ct) [V].
- Naturel 3,50 ct : « Pricing on Enquiry » alors que 3,00 et 4,00 ont un prix [V].
- Les trois onglets Specifications / Care / Sizing montrent le même texte au moment du test [V].
- Pas de vue 3D temps réel sur le site public : `/3d/` existe mais interdit aux robots, non vu ; la fiche n'a que deux photos [I].
- Page unique en anglais, une seule devise [V].

## Limites de l'audit

- robots.txt interdit `/api/`, `/3d/`, `/wishlist`. La page appelle `POST /api/price` à chaque clic d'option (métal, taille, pierre, carat, gravure) : je ne l'ai pas laissée partir (requêtes interceptées côté navigateur, rien n'a atteint le serveur). Les prix ont donc été lus par **chargement direct d'adresses** à paramètres, rendues côté serveur. Les appels `GET /api/custom-jewellery-public-state` et `POST /api/visit-source`, faits par la page à son simple chargement, ont été interceptés aussi. Aucun écart à robots.txt.
- Bouton « Add to wishlist » et visionneuse 3D (`/3d/`) non testés (interdits).
- Non testés : catalogue par forme et par prix (clic non abouti), filtres coupe et retour 7 jours de l'étape 2, bouton « Let Anny's take care of it », envoi des formulaires (interdit par la règle de lecture seule).
- Mesures en connexion de session cloud (réseau de laboratoire) : valeurs relatives. Temps d'apparition de la photo principale sur la fiche : **ordinateur 550 ms visible, 759 ms chargée, premier rendu 696 ms ; iPhone 554 ms visible, 651 ms chargée** [V]. Liste de diamants : premier résultat 492 à 732 ms (ordinateur), 442 ms (iPhone) [V].
- Page de devis consultée le 25/11/2026 (date de la séance), le rapport porte la date demandée.

## Sources

- https://www.annys.com.au/engagement-rings [V] ; `/engagement-rings/crystal-six-claw-solitaire` [V] (+ adresses à paramètres) ; `…/diamonds?shape=round&stone=lab&…` [V] ; `/enquiry?designSlug=crystal-six-claw-solitaire&…` [V]
- https://www.annys.com.au/refund-policy [V] ; https://www.annys.com.au/diamond-return [V] ; https://www.annys.com.au/lifetime-guarantee [V] ; https://www.annys.com.au/reviews [V] ; https://www.annys.com.au/bag (404) [V]
- https://www.annys.com.au/robots.txt [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/annys/` (hors dépôt)
