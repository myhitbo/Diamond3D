# Audit : Gabriel Edward Jewelers (Miami, Floride)

- **Site** : Gabriel Edward Jewelers, https://gabrieledward.com
- **Page de départ** : https://gabrieledward.com/apps/ring-creator/rb-setting-list?in_journey=true&jewelry_type=ring&view_type=grid&ring_style=Solitaire&metal_type=White%20Gold%7C14K
- **Date** : 15/11/2026 (audit en lecture seule, visiteur anonyme)
- **Appareils** : Chromium ordinateur 1366x900 (en-US) et affichage iPhone 13
- **Statut** : complet (parcours réglage → pierre → récapitulatif → panier ; pas de paiement). Robots.txt : AUTORISÉ pour toutes les pages ouvertes.
- Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Adresse (préfixe /apps/ring-creator/) | Options |
|---|---|---|
| 1. Choisir le réglage | rb-setting-list | Style (Solitaire, Three Stone, Round Pavé, Fancy Pavé, Round & Fancy Pavé), métal, prix, forme prise en charge, tri prix, « All Filters », « Reset All » [V] |
| 1b. Fiche du réglage | rb-setting-details | Métal (7 pastilles), forme du centre (11), corbeille (5), taille US 3 à 13 par quart, gravure intérieure, livraison express, « Choose This Setting » [V] |
| 2. Choisir la pierre | rb-stone-list | Lab-Grown / Natural, forme, carat, couleur blanche ou fantaisie, pureté, taille, prix, filtres avancés, tri [V] |
| 2b. Fiche de la pierre | rb-stone-details | Photo, vidéo 360°, certificat, « Add to Ring », « Ask a Question » [V] |
| 3. Finaliser | rb-ring-review | Récapitulatif, taille de doigt, délai estimé, sous-total, « Add to Cart », « Start Over », « Drop a Hint » [V] |
| 4. Panier | /cart | Lignes réglage + pierre, quantité, suppression, instructions, code de remise, « Check Out » [V] |

Un bandeau en haut des pages montre les 3 étapes (Choose Setting, Choose Stone, Complete Ring) [V]. On peut aussi commencer par la pierre (liens « Lab-Grown Diamonds », « Natural Diamonds » du pied de page) [V : liens lus ; le départ par la pierre n'a pas été déroulé].

## Contrôles vérifiés

Liste de départ : 87 contrôles visibles sur ordinateur, 138 sur la fiche réglage en iPhone (145 sur ordinateur) [V, controls.cjs].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Solitaire / Three Stone / Round Pavé / Fancy Pavé / Round & Fancy Pavé | onglets-liens | Changent `ring_style` dans l'adresse et rechargent la liste | selon réglage | lus (href) ; non tous cliqués |
| Metal Type (liste des réglages) | bouton | Ouvre 7 choix : 14K blanc/jaune/rose, 18K blanc/jaune/rose, platine | voir fiche | OK |
| Price | bouton | Ouvre deux champs « $ » (min, max) | filtre | ouvert, non saisi |
| Supported Shape | bouton | Ouvre 11 formes : Oval, Radiant, Marquise, Cush Mod, Emerald, Heart, Asscher, Round, Princess, Pear, Square | filtre | OK (ouvert) |
| All Filters | bouton | Panneau : style, métal, prix, forme, « Apply Filters » | filtre | OK |
| Sort By | bouton | Prix croissant / décroissant | tri | OK (ouvert) |
| Reset All | bouton | Réinitialise les filtres | — | non testé (sans intérêt) |
| Vignette réglage (6 résultats) | lien | Ouvre la fiche (rb-setting-details) | 1 150 à 1 750 $ | OK |
| Pastille métal (7) | bouton | Change la mention de métal, l'image 3D/photos ; prix 14K : 1 150 $ ; 18K : 1 450 $ ; platine : 1 450 $ | +300 $ en 18K [V] | OK |
| Forme du centre (11) | bouton | Remplace les photos (fichiers OVAL-, RAD-, MQ-, ROUND-, PEAR-…) et la 3D | aucun | OK, mise à jour des images avec 2 à 4 s de retard [V] |
| Corbeille : Classic Basket / Classic Gallery Rail | bouton | Variantes de corbeille | 1 150 $ | OK |
| Corbeille : Hidden Halo / Top Halo | bouton | Ajoute un halo « 0,20 carat » au nom | +250 $ (1 400 $) | OK |
| Corbeille : Fully Pave Basket | bouton | Corbeille entièrement sertie | +350 $ (1 500 $) | OK |
| Tuile 3D (icône « 3D ») | bouton/visionneuse | Visionneuse WebGL chargée au départ (fichier .glb) ; la souris fait tourner la bague | aucun | OK [V] |
| « Expand » | bouton | Agrandir la galerie | — | cliqué, aucun changement visible détecté [I : possible zone cliquable trop petite] |
| Taille US 3 à 13 (41 boutons par quart) | bouton | Choisit la taille ; reportée dans le panier (« Ring Size: 7 ») | aucun | OK |
| « See Size Conversion Chart » | bouton | Ouvre une table de conversion | — | non ouvert |
| Add Engraving (case) | case | Gravure intérieure | +75 $ | non cochée (effet sur sous-total non testé) |
| Rush Order (case) | case | Production 2-3 semaines, UPS Next Day | +250 $ | non cochée |
| Choose This Setting | lien | Mène à rb-stone-list avec le réglage | — | OK |
| Ask a Question | bouton | Ouvre un formulaire (nom, e-mail, téléphone, message) | — | ouvert, rien saisi |
| Reviews (onglet latéral) | bouton | Fenêtre d'avis Google | — | présent |
| Lab-Grown / Natural Diamonds (liste pierres) | bouton | Bascule ; 6 209 pierres de labo, 630 naturelles pour la forme ovale | voir plus bas | OK |
| Formes (liste pierres) | bouton | Verrouillées sur la forme du réglage choisi (clic sur Marquise sans effet) | — | [V] sans effet ; cause [I] |
| Carat | bouton | Curseur 0,50 à 20,00 ct | filtre | ouvert |
| White Color / Fancy Color | bouton | Blanc : D, E, F ; fantaisie : 14 teintes (jaune, orange, rose, bleu, vert…) | filtre | OK |
| Clarity | bouton | FL, IF, VVS1, VVS2, VS1, VS2 | filtre | OK |
| Cut | bouton | Ideal, Excellent | filtre | OK |
| All Filters (pierres) | bouton | Poli, symétrie, fluorescence, labo (IGI, GIA, GCAL), profondeur, table | filtre | OK |
| Sort By (pierres) | bouton | Prix, couleur, pureté (ordre croissant ou décroissant) | tri | OK |
| Fiche pierre : « View image 1 » | bouton | Photo de la pierre (cloudfront) | — | OK |
| Fiche pierre : « View video preview » | bouton | Ouvre une visionneuse 360° tierce (ssdweb.co) | — | affiche « upstream request failed » [V] ; cause possible : filtrage du réseau d'audit [S] |
| Fiche pierre : « View certificate » | bouton | Même fenêtre | — | même message d'erreur [V] |
| Add to Ring | lien | Mène à rb-ring-review | + prix pierre | OK |
| Add to Cart (sans taille) | bouton | Aucun message d'erreur visible en 2,5 s | — | [V] absence de retour |
| Add to Cart (taille 7) | bouton | « Adding to Cart » pendant ~8 s puis ajout ; /cart affiche deux lignes | 1 433,92 $ | OK |
| Start Over | bouton | Recommence le parcours | — | non testé |
| Drop a Hint | bouton | Formulaire d'envoi à un proche (e-mail, message) | — | présent, non rempli |
| Panier : quantité, retirer, instructions, remise, Check Out | divers | Contrôles présents | — | Check Out non cliqué (limite de l'audit) |
| Appel (305) 796-6143, Book In-Person Appointment (Calendly), « Text us » | liens/widget | tel: ; lien calendly.com/gabrieledwardjewelers ; bulle « Text our team directly » | — | non ouverts (règle : pas de chat) |
| Wishlist /apps/vdb-wishlist, compte | liens | Présents dans l'en-tête | — | non ouverts |

## Options disponibles

- **Styles** : Solitaire, Three Stone, Round Pavé, Fancy Pavé, Round & Fancy Pavé. Solitaire 14K blanc : 6 réglages [V].
- **Métaux** : 14K blanc, jaune, rose ; 18K blanc, jaune, rose ; platine [V].
- **Formes** : Oval, Radiant, Marquise, Cushion Modified, Emerald, Heart, Asscher, Round, Princess, Pear, Square (11) [V].
- **Corbeilles** : Classic Basket, Classic Gallery Rail, Hidden Halo, Top Halo, Fully Pave Basket [V].
- **Tailles de doigt** : US 3 à 13 par quart (41) [V]. Aucune table de conversion lue.
- **Gravure** : intérieure, 75 $ ; production express 250 $ [V].
- **Pierres** : labo ou naturelle ; carat 0,50 à 20 ct ; D-F ; FL à VS2 ; taille Ideal/Excellent (filtre) ; IGI/GIA/GCAL ; 14 couleurs fantaisie [V].
- **Pas de** : choix de largeur de bande libre (largeurs fixes par modèle : 1,8 / 2 / 3 / 4 mm dans les noms), pas de choix de griffes, de pavé personnalisé ni de mode « sur la main » ou RA [V sur les pages ouvertes].

## Prix, délais, retours, garanties

- **Prix** : réglage et pierre affichés séparément, puis sous-total ; ex. réglage ovale 14K blanc 1 150 $ + pierre labo 0,52 ct 284 $ = 1 434 $ [V]. Le panier compte 283,92 $ + 1 150 $ = 1 433,92 $ (écart de 0,08 $ avec l'affichage) [V].
- **Pierres labo (ovales, tri croissant)** : 0,52 ct 284 $ ; 1,00 ct 419 $ à 453 $ [V]. Naturelles : 0,52 ct 1 028 $, 1,31 ct 5 612 $, 2,00 ct 20 880 $ [V].
- **Décomposition** : aucune ventilation (métal, main-d'œuvre, marge) ; seulement réglage + pierre + options. Texte du devis : « sans marges de vente classiques », « +50 % moins cher que le détail » (revendication du site) [V].
- **Délai** : page de récapitulatif : fabrication 4-5 semaines (standard), 2-3 semaines (express) [V] ; politique de livraison : 3-4 semaines (standard) [V] ; **contradiction entre les deux pages**. Le délai court à partir du paiement.
- **Livraison** : gratuite aux États-Unis (UPS 2nd Day Air, signature adulte 21 ans) ; express en UPS Next Day ; international : appeler [V]. Taxes et livraison calculées au paiement (panier) [V].
- **Retours** (politique du 29/10/2026) : 30 jours après finition pour la « ligne nuptiale sur commande » ; **les commandes sur mesure (custom) ne sont pas remboursables** ; retour international non remboursable ; annulation possible avant production, 250 $ retenus si la CAO est faite ; 50 $ par certificat manquant [V].
- **Garanties** : garantie fabricant à vie (pierres et griffes), une remise à taille offerte, nettoyage tous les 3 ans, repolissage avant le mariage ; frais d'envoi à la charge du client ; assurance Jewelers Mutual recommandée (1 à 2 % de la valeur par an) [V].
- **Financement** : bandeau « Financing Available » [V] ; modalités non lues.
- **Moyens de paiement** : non visibles au panier ; apparaissent à l'étape suivante (non franchie) [V].

## Confiance et service

- **Certificats** : IGI affiché pour la pierre labo testée (n° 844613793 affiché sur la fiche et au panier) [V]. Le visuel du certificat n'a pas pu être chargé (erreur) [V].
- **Libellé synthétique** : « Lab-Grown Diamonds » [V]. Pas de mention de « synthétique ».
- **Avis** : 5,0 sur 469 avis Google, avis datés du jour (24/11/2026 au moment de l'audit) [V] ; fenêtre d'avis latérale et liens vers les profils Google.
- **Preuves de fabrication** : page « Quote My Dream Ring » avec six vidéos « Some Recently Made Rings » ; slogan « nous fabriquons directement » ; pas de suivi de commande vu ; pas de photo ou vidéo de la bague commandée [V sur la page, non lue en détail].
- **Service** : téléphone, rendez-vous Calendly, atelier-salle d'exposition à Miami, « Text us » (SMS), formulaire « Ask a Question », devis sur mesure [V].
- **Langues, devises** : anglais, dollars américains uniquement [V].

## Points forts à retenir pour JR Diamond

1. **Réglage + pierre + sous-total toujours visibles** (1 150 $ + 284 $ = 1 434 $) ; le prix suit chaque option (+300 $ en 18K, +250 $ halo, +350 $ pavé) [V : fiche et revue].
2. **Visionneuse 3D chargée d'emblée sur la fiche** avec rotation à la souris, à côté de photos et d'une vidéo [V].
3. **Fiche de pierre complète** : photo, vidéo 360° (tierce), certificat, mesures, ratio, poli, symétrie, n° de rapport [V].
4. **Filtres de pierres riches** (6 209 labo / 630 naturelles pour l'ovale) avec filtres avancés (poli, symétrie, fluorescence, laboratoire) [V].
5. **Texte de délai et d'envoi sur la page de revue**, avant l'ajout au panier [V].
6. **Garantie et services gratuits listés sur une page dédiée** (taille offerte, polissage) [V].
7. **Option express à prix fixe (250 $)** ajoutée par case à cocher [V].
8. **Avis Google (469) et vidéos de bagues réalisées** [V].
9. **Aveu honnête sur la 3D** : « tous les centres montrés en 2D/3D sont de 3 carats par défaut » (utile à copier comme modèle, mais voir défauts) [V].

## Défauts observés

- Contradiction de délais : 4-5 semaines (revue) contre 3-4 semaines (politique) [V].
- La 3D et les photos montrent un centre de 3 ct par défaut et ignorent la pierre choisie : l'image finale ne correspond pas à la bague commandée (reconnu par l'avertissement) [V].
- Mise à jour du prix et des photos après un clic avec 2 à 4 s de décalage ; plusieurs clics rapides ont laissé l'affichage en retard (gabarit « un pas derrière ») [V].
- Visionneuse 360° et certificat : « upstream request failed » ; cause incertaine (filtrage du réseau d'audit ou panne) [V/S].
- « Add to Cart » sans taille : aucun message visible ; bouton « Adding to Cart » long (~8 s) [V].
- Écart de centimes entre le prix affiché (284,00 $) et le panier (283,92 $) [V].
- Sur mesure non remboursable ; retours internationaux non remboursables [V].
- Les formes de pierre sont verrouillées par le réglage : impossible de changer de forme sans reprendre l'étape 1 [V/I].
- Pas d'ajustement de largeur de bande, de griffes ni de pavé (variantes fixes) [V].
- Pas de langue autre que l'anglais, une seule devise [V].
- Temps d'apparition du visuel : voir limites.

## Limites de l'audit

- **Temps d'apparition** (visuel principal, connexion de l'environnement d'audit) : liste des réglages ≈ 5,3 s (ordinateur) et 5,4 s (iPhone) ; fiche réglage ≈ 7,7 s (ordinateur, photo) et 5,4 s (iPhone) ; fichier 3D (.glb) terminé ≈ 5,7 s ; DOM prêt ≈ 4,1 à 4,4 s. Mesures uniques, sans cache, par un proxy : valeurs relatives [V].
- Non testés : cases gravure et express, paiement, « Check Out », Calendly, SMS, financement, tableau de conversion, choix de la pierre en partant d'une pierre, chat.
- Les contrôles du mode iPhone ont été listés (138) mais seule la fiche réglage et son temps ont été mesurés ; la capture mobile de la fiche s'est faite avant le chargement complet de l'image [V].
- Cause de l'erreur de la visionneuse 360° et du certificat non établie.
- Le délai « 20 heures » ou d'autres comptes à rebours : aucun vu sur ce site.

## Sources

- Départ : https://gabrieledward.com/apps/ring-creator/rb-setting-list?in_journey=true&jewelry_type=ring&view_type=grid&ring_style=Solitaire&metal_type=White%20Gold%7C14K
- https://gabrieledward.com/apps/ring-creator/rb-setting-details?in_journey=true&ring_stock_num=ER-SOL-1.8MM-14KWHITE-HGR-OVAL&ring_reference_id=31301
- https://gabrieledward.com/apps/ring-creator/rb-stone-list?in_journey=true&ring_stock_num=ER-SOL-1.8MM-14KWHITE-HGR-OVAL&ring_reference_id=31301
- https://gabrieledward.com/apps/ring-creator/rb-stone-details?in_journey=true&ring_stock_num=ER-SOL-1.8MM-14KWHITE-HGR-OVAL&ring_reference_id=31301&labgrown_stock_num=9440200245&stone_reference_id=21718
- https://gabrieledward.com/apps/ring-creator/rb-ring-review?in_journey=true&ring_stock_num=ER-SOL-1.8MM-14KWHITE-HGR-OVAL&ring_reference_id=31301&labgrown_stock_num=9440200245&stone_reference_id=21718
- https://gabrieledward.com/cart
- https://gabrieledward.com/policies/refund-policy
- https://gabrieledward.com/policies/shipping-policy
- https://gabrieledward.com/pages/warranty-insurance-complimentary-services
- https://gabrieledward.com/pages/quote-my-dream-ring
