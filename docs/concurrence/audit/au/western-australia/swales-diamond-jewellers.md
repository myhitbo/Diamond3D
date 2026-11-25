# Audit : Swales Diamond Jewellers

- **Site** : Swales Diamond Jewellers, Halls Head (Mandurah), Australie-Occidentale
- **Adresse** : https://www.swales.com.au/ (départ : https://www.swales.com.au/collections/bespoke-engagement-rings ; fiche testée : https://www.swales.com.au/products/oval-cut-diamond-half-bezel-set-engagement-ring ; outil de pierres : https://www.swales.com.au/apps/ub/diamonds-ai?jewelry_type=ring)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900, en-AU) et affichage iPhone 13 (Playwright)
- **Statut** : partiel (parcours « monture, diamant, bague » exploré jusqu'au choix du carat ; ajout au panier non actionné, voir Limites)
- Marque : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé. Montants en AUD.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Listing `/collections/bespoke-engagement-rings` | 193 produits ; vignettes avec pastilles de métal ; filtres Métal (7) et Forme (9) ; tri (« Sort by ») ; 3 densités d'affichage [V] |
| 1 Choisir la monture | fiche produit : prix « From » de la monture seule (ex. 4 699), description, specs, 12 photos ; pas de choix de métal sur la fiche [V] |
| 2 Choisir le diamant | `/apps/ub/diamonds-ai` : 11 formes, taille de 1/4 ct à 7 ct, liste de pierres naturelles et synthétiques avec prix, par niveau (Ideal / Premium / Excellent) [V] |
| 3 Compléter la bague | bandeau « Design your ring : Choose diamond / Choose setting / Complete ring » ; étape 3 non atteinte [V pour l'intitulé] |
| Alternative | « Make an appointment » (formulaire) pour un dessin sur mesure ; page « Remake / Remodelling » pour les bijoux de famille [V] |
| Panier | `/cart` ouvert vide uniquement (voir Limites) [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Forme (Round, Oval, Radiant, Emerald, Pear, Marquise, Cushion, Princess, Toi et Moi) | cases à cocher | « Oval » : 193 -> 44 produits ; l'adresse reçoit `?filter.p.m.custom.shape=…` | - | OK |
| Filtre Métal (14/18 ct jaune, blanc, rose ; platine) | cases à cocher | « Platinum » combiné à Oval : toujours 44 produits, premiers produits identiques | - | OK, effet non visible |
| « Sort by » (prix croissant / décroissant) | bouton | **non actionné** : `/collections/*sort_by*` interdit par robots.txt | - | non testé (robots.txt) |
| Densité large / moyenne / compacte | boutons | change la taille des vignettes ; non vérifié visuellement | - | non testé (visuel seul) |
| Pastilles de métal sur vignette (336 sur la page) | boutons radio | clic sur la 2e pastille : prix de la vignette inchangé (4 699), image non comparée | « From 4 699 » | OK, sans effet prix |
| Vignette de bague | lien | ouvre la fiche produit | - | OK |
| Carrousel photos de la fiche (12 diapositives, « Go to item n ») | boutons | change la photo ; pas de vidéo, pas de 3D (0 `video`, 0 `model-viewer`) | - | OK |
| Zoom sur photo | survol/clic | élément de zoom présent dans la page ; effet non mesuré | - | OK (non mesuré) |
| « ADD TO CART » (fiche) | bouton | **non actionné** : `/cart/add` interdit par robots.txt (`Disallow: /cart/`) | « From 4 699 » (monture seule) | non testé (robots.txt) |
| « Ring Size Guide » | lien | `/pages/ring-size-guide` | - | non ouvert |
| « Make an Appointment > » | lien | `/pages/make-an-appointment` : formulaire nom, e-mail, téléphone, message ; autre voie : e-mail et (08) 9535 6088 | - | page lue, formulaire non rempli |
| « Delivery & returns » | accordéon | livraison offerte au-dessus de 100 (sinon 15), 2 à 7 jours ouvrés après expédition, +3 jours si mise à taille ; retour 14 jours | 0 / 15 | OK |
| « Our guarantee » | accordéon | garantie 12 mois + 14 jours de changement d'avis en ligne, « Diamond Guarantee » conditionnée à une inspection tous les 6 mois | - | OK |
| Partage Facebook / Twitter / Pinterest / e-mail | liens | ouvrent les sites de partage (non suivis) | - | OK (présence) |
| « You may also like » (12 bagues avec pastilles de métal) | carrousel | recommandations ; le bouton « Next » n'a pas été actionné | - | OK |
| Outil `/apps/ub/diamonds-ai?jewelry_type=ring` (onglets « AI » / « Curated » vus dans l'intitulé) | page | s'ouvre après environ 10 s ; 11 boutons de forme | - | OK, chargement long |
| Forme de diamant « Oval diamond » | bouton | ouvre texte historique de la forme + liste de tailles ; adresse `#Oval%20Diamond` ; recharger l'adresse ne restaure pas la forme choisie | - | OK, état non conservé |
| Taille de diamant (liste de 29 valeurs, ¼ à 7 ct) | liste | « 1 CT » affiche 5 pierres : E VS1 (naturelle 1,01 ct 17 260 ; synthétique 1,05 ct 1 620), F VS2 (naturelle 1,01 ct 11 790 ; synthétique 1,03 ct 1 200), G SI2 (naturelle 1,00 ct 7 750) | 1 200 à 17 260 | OK |
| « Diamond guide » | bouton | colonne de la liste ; contenu non ouvert | - | non testé |
| « Size guide » (outil) | bouton | ouvre une fenêtre « Diamond size guide » | - | OK |
| « ADD THIS DIAMOND » | bouton | **non actionné** : ajoute vraisemblablement au panier, `/cart/add` interdit par robots.txt | A$ selon la pierre | non testé (robots.txt) |
| Newsletter (e-mail) | champ | formulaire d'abonnement ; non rempli | - | non testé (donnée personnelle) |
| Téléphone | lien | `tel:(08) 9535 6088` | - | OK (non appelé) |
| Panier (icône Cart) | lien | `/cart` autorisé : « Your cart is empty » ; propose « recently viewed » | - | OK |
| Chat, WhatsApp, essayage à domicile, financement en ligne, comparer, enregistrer | - | absents ; le financement se traite en magasin (« lay-by and interest free payment plans… ask in store ») | - | absent [V] |

## Options disponibles

- **Métaux** (sur la vignette) : 14 ct et 18 ct jaune, blanc, rose ; platine [V].
- **Formes** (filtre) : rond, ovale, radiant, émeraude, poire, marquise, coussin, princesse, toi et moi ; l'outil de pierres ajoute asscher, carré coussin, coussin rectangulaire, radiant carré [V].
- **Styles** (collections) : solitaire, pierres latérales, trilogie, halo, halo caché, toi et moi, bezel, collection « Pink Caviar » [V].
- **Montures** : 193 modèles « Custom made » ; plage de pierres centrales d'une monture (ex. 0,50 à 4,00 ct) ; largeur 2,5 mm sur la fiche testée [V].
- **Pierres** : diamants naturels (GIA) ou synthétiques (IGI) ; tailles de ¼ à 7 ct ; niveaux Ideal / Premium / Excellent [V].
- **Autres services** : alliances, remodelage de bijoux de famille, réparations, estimations, évaluations, retipage des griffes [V].

## Prix, délais, retours, garanties

- **Prix** : « From 4 699 » = monture seule ; « A final price will be determined following your centre stone selection » (fiche). Le prix de la pierre est lisible dans l'outil de pierres (1 ct synthétique E VS1 : 1 620 ; naturelle : 17 260). Pas de total en direct au moment de la lecture, étape 3 non vue [V].
- **Délai** : « 4-6 week turn around », plus court sur demande (fiche). Lors de mes tests, aucune date estimée au panier [V].
- **Livraison** : offerte au-dessus de 100 AUD, sinon 15 ; 2 à 7 jours ouvrés (fiche) ; la FAQ dit 5 à 7 jours et « we do not ship internally [sic] » (pas d'expédition hors du pays, formulation ambiguë) [V].
- **Retours** : 14 jours de changement d'avis, remboursement complet « subject to terms » ; **mais** la politique précise que les commandes spéciales et les pièces faites sur mesure sont exclues du retour et du changement d'avis ; la fiche « Bespoke » annonce pourtant le retour sous 14 jours dans l'accordéon (contradiction à signaler) [V : `/policies/refund-policy`, fiche].
- **Garanties** : 12 mois et 14 jours en ligne ; garantie à vie sur les bijoux sur mesure, sous condition d'inspection tous les 6 mois ; nettoyage et inspection annuels complémentaires ; pierres perdues ou ébréchées non couvertes ; 15 ans sur le prêt-à-porter [V : `/pages/services`].
- **Certificats** : GIA pour les diamants naturels, IGI pour les synthétiques (fiche) [V].
- **Libellé du synthétique** : « Laboratory-Grown Diamond » sur la fiche ; la page `/pages/lab-grown-diamonds` (marque VERO) dit « lab grown diamonds are real diamonds » et « the same » qu'un diamant naturel [V].
- **Devise / langue** : AUD, anglais ; aucun sélecteur [V].

## Confiance et service

- Magasin physique à Mandurah (Halls Head Central), horaires lundi à samedi 9 h 15 à 17 h, téléphone, formulaire de rendez-vous [V].
- Avis clients : aucun affichage d'avis ou de note vu sur la fiche ni le listing [V pour l'absence sur ces pages].
- Preuves de fabrication : processus sur mesure en 4 étapes (conversation, choix de la pierre, croquis ou rendu CAO, fabrication) avec « final quotation » avant fabrication ; aucune photo ni vidéo d'atelier systématique ; pas de suivi de commande en ligne [V : `/pages/custom-design`].
- Paiement : non listé en ligne ; financement et lay-by « in store » [V].

## Points forts à retenir pour JR Diamond

1. **Outil de pierres avec prix par pierre et par origine** : à 1 ct ovale, naturel et synthétique côte à côte (17 260 contre 1 620 pour E VS1), regroupés en trois niveaux Ideal / Premium / Excellent. Exemple de « prix expliqué » à côté du métal (outil `/apps/ub/diamonds-ai`, mesuré le 15/11).
2. **Trois étapes lisibles** « choose diamond / choose setting / complete ring » en en-tête de page (même outil).
3. **Filtres par forme et par métal sur 193 montures** : le filtre « Oval » réduit à 44 produits ; le filtre est mémorisé dans l'adresse (`?filter.p.m.custom.shape=`).
4. **Message de prix honnête** : « prix de la monture seule, prix final après le choix de la pierre » (fiche).
5. **Processus sur mesure décrit avec devis ferme avant fabrication** (page « Bespoke Custom Design »), proche d'un « prix confirmé » avant lancement.
6. **Remodelage de bijoux de famille proposé comme service à part** (`/pages/remake-remodelling`).

## Défauts observés

- Le panier de la fiche ajoute « la monture seule » : il n'y a pas de total de bague dans la fiche, le choix de la pierre est dans un autre outil [V].
- Fiche « sur mesure » : le bandeau de retour 14 jours contredit l'exclusion des pièces faites sur mesure de la politique de retour [V].
- Pas de choix de métal ni de largeur sur la fiche ; les pastilles de métal du listing ne modifient pas le prix de la vignette [V].
- Outil de pierres lent (environ 10 s avant les boutons de forme) ; recharger l'adresse perd la forme choisie [V].
- Aucun avis ni photo d'atelier ; aucun suivi de commande ; FAQ avec fautes (« ship internally ») et réponse sur la livraison différente de la fiche (5-7 jours contre 2-7) [V].
- Pas de rendu 3D, de vidéo, d'AR ni de vue sur la main : photos seulement [V].

## Limites de l'audit

- Ni « ADD TO CART » (fiche) ni « ADD THIS DIAMOND » n'ont été actionnés : robots.txt interdit `/cart/` ; l'étape « Complete your ring » n'a pas été atteinte. Récapitulatif, frais et moyens de paiement du panier non vus.
- « Sort by » non actionné (robots.txt interdit `*sort_by*`).
- Une seule fiche (ovale demi-bezel) parcourue ; la sélection du métal d'une bague n'a pas été vue (pas de choix sur la fiche). L'onglet « Curated / AI » de l'outil n'a pas été exploré. La barre d'avis et les images zoomées n'ont pas été mesurées.
- Mesure du visuel principal : première image complète visible (>200 px) : ordinateur 0,6 s, iPhone 0,4 s (une mesure chacune, indicatif) ; l'outil de pierres met environ 10 s à afficher ses boutons.
- Les outils d'affichage `swales-jewellers.myshopify.com/apps/ub/…` sont servis par le même site ; robots.txt contrôlé AUTORISÉ.

## Sources

- https://www.swales.com.au/collections/bespoke-engagement-rings (listing, filtres)
- https://www.swales.com.au/products/oval-cut-diamond-half-bezel-set-engagement-ring (fiche, accordéons livraison et garantie)
- https://www.swales.com.au/apps/ub/diamonds-ai?jewelry_type=ring (outil de pierres)
- https://www.swales.com.au/pages/faq ; /policies/refund-policy ; /pages/lab-grown-diamonds ; /pages/custom-design ; /pages/services ; /pages/make-an-appointment ; /pages/remake-remodelling ; /cart
- robots.txt contrôlé avec l'outil `robots.cjs` avant chaque adresse (`/cart/`, `*sort_by*` interdits)
