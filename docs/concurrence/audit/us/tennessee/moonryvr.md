# Audit de site : Moonryvr (Chattanooga, Tennessee)

- **Site** : Moonryvr Jewelry
- **Adresse** : https://moonryvr.com/ (page de départ : https://moonryvr.com/pages/the-custom-process)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **partiel**. Aucun configurateur : le parcours « sur mesure » passe par un formulaire (non rempli). Les options des fiches de bagues ont été actionnées ; le bouton « Add to cart » n'a pas été cliqué (`/cart/add` interdit par le `robots.txt` : `Disallow: /cart/`), donc le récapitulatif de panier n'a pas été atteint (page `/cart` lue, vide).
- Repères : [V] vérifié (page lue ou contrôle actionné, adresse en « Sources »), [I] inféré, [S] supposé.
- `robots.txt` : tout autorisé sauf `/cart/…` et `/account` ; aucune adresse interdite ouverte.

## Parcours

| Étape | Options |
| --- | --- |
| 1. Page de départ « The custom process » | Quatre offres : I Ready to Ship, II Moonryvr Collection (made-to-order), III Tailor Made, IV Fully Bespoke [V] |
| 2a. Prêt à expédier / collection | Fiche produit : couleur de métal, taille, (selon la bague) carat du diamant de synthèse ; « ADD TO CART » [V] |
| 2b. Tailor Made | Formulaire « Semi-Custom Inquiry » (réponse promise sous 1 jour ouvré), non rempli [V texte] |
| 2c. Bespoke | Consultation virtuelle gratuite par e-mail ; dès 8 000 $ [V texte] |
| 3. Après consultation | Acompte 1 000 $ ; premier rendu en 7 jours ; 2 retouches gratuites, puis 50 $ ; facture par e-mail avec lien de paiement ; paiement intégral avant production [V texte FAQ] |
| 4. Fabrication | 8 semaines (sur mesure), 4 semaines (semi), 6 semaines après paiement (selon la FAQ de la page), 4 à 6 semaines (made-to-order, FAQ générale) [V texte] |

## Contrôles vérifiés

Page de départ (27 contrôles ordinateur, 25 iPhone, relevés par `controls.cjs`) :

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Menu / MENU | lien (ancre `#drawer-menu`) | ouvre le tiroir de navigation ; non actionné | - | Non testé (navigation) |
| DISCOVER | bouton | menu déroulant ordinateur ; non actionné | - | Non testé |
| SHOP ENGAGEMENT RINGS | lien | `/collections/engagement-rings` : 12 bagues + « LOAD MORE » [V] | prix affichés | OK |
| SEARCH | lien | tiroir de recherche ; non actionné (champ de recherche non utilisé) | - | Non testé |
| ACCOUNT | lien | `/account` : interdit par robots.txt | - | Non ouvert |
| VIEW MY CART (0) | lien | `/cart` ouvert : « Continue shopping », panier vide [V] | - | OK |
| SHOP READY-TO-SHIP ENGAGEMENT RINGS | lien | `/collections/ready-to-ship-copy` (autorisé), non ouvert | - | Non testé |
| SUBMIT YOUR TAILOR MADE INQUIRY | lien | `/pages/semi-custom-inquiry` lue : formulaire, non rempli [V] | « ≈ 30 % de plus » que le prix de la collection [V texte] | OK (lecture seule) |
| Lien Affirm prequal | lien externe | pré-qualification de financement (domaine affirm.com), non ouvert | - | Non testé |
| Champ e-mail + Subscribe | champ/bouton | lettre d'information ; formulaire non rempli | - | Non testé (règle) |
| Contact Us, Warranty, Shipping & Returns, About Us, Chattanooga Studio, The Journal, Careers | liens | Warranty, FAQ, About, Visit lues [V] ; autres non ouverts | - | OK / non testé |
| Reviews | lien | Google Maps (domaine externe), non ouvert | - | Non testé |
| concierge@moonryvr.com | lien | e-mail | - | Non testé |
| Facebook, Instagram, Pinterest, YouTube | liens | réseaux sociaux externes, non ouverts | - | Non testé |

Fiche « No. 12 Emerald Cut Diamond Engagement Ring » (https://moonryvr.com/products/no-12-emerald-cut-diamond-engagement-ring) [V, tests sur ordinateur] :

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Color : 14k yellow / rose / white gold | bouton radio (3) | sélection ; photo principale inchangée (même fichier d'image avant et après) | 6 797 $ | OK, pas de changement d'image |
| Color : 18k yellow / « 19k white gold » / 18k rose | bouton radio (3) | idem ; libellé « 19k » (faute de frappe probable, [I]) | 7 237 $ (+440 $ sur 14 k) | OK |
| Ring Size : 4,5 à 9 (10 valeurs, demi-tailles) | bouton radio | aucun effet | aucun | OK |
| Diamond Selection : 2 / 2,5 / 3 ct synthétique | bouton radio | change le prix, pas la photo | 7 237 $ / 7 670 $ / 8 202 $ (en 18 k) | OK |
| ADD TO CART | bouton | **non cliqué** : appelle `/cart/add`, interdit par robots.txt | - | Non testé, raison robots.txt |
| « The Details », « Delivery & Returns » | onglets | déplient la description (IGI, F+, VS+, « two triangle cut lab created diamonds ») et les règles de livraison/retour [V] | - | OK |
| Liens « No. 12 wedding band », « tailor made inquiry form » | liens | non ouverts | - | Non testé |

Sur « No. 01 Old Mine Diamond Split Shank » (7 117 $ de départ) : mêmes options couleur et taille (4 à 9, 11 valeurs), pas de choix de carat ; seule la variante « 14k yellow gold, taille 6 » est prête à expédier, les autres sont faites sur commande [V texte]. Collection : bouton « LOAD MORE » non actionné.

Aucun mode de vue 3D, 360°, AR, essayage ni vidéo : un nœud vidéo/iframe présent dans la page (2 éléments `video`/`iframe` comptés), non identifié [V compte, S nature]. Pas de bouton partager, enregistrer, comparer, ni guide des tailles en ligne sur la fiche (un lien « Ring Size Guide » existe dans la FAQ, non ouvert).

## Options disponibles

- **Métaux** : or 14 k jaune, rose, blanc ; or 18 k jaune, rose, blanc (libellé « 19k white gold » sur les fiches lues) [V]. Pas de platine relevé sur les fiches lues [V absence].
- **Pierres** : diamants naturels, synthétiques, anciens/récupérés, pierres de couleur ; « Many pieces can be made with lab grown diamond upon request » [V texte]. Fiche No. 12 : 2, 2,5, 3 ct synthétique (IGI, F+, VS+) [V].
- **Tailles** : 4 à 9 (demi-tailles), tailles US standard ; le site « ne peut pas déterminer la taille à distance » [V texte].
- **Gravure** : selon le modèle ; les bandes rondes fines ne sont pas gravables, « Jasmine » l'est [V texte].
- **Pierre du client** : acceptée sur les montures existantes ; pas sur le sur-mesure complet (pierres de famille en accent seulement) [V texte].
- **Pas de** choix de forme de pierre, pavage ou griffes en ligne : tout cela passe par le formulaire.

## Prix, délais, retours, garanties

- **Prix affichés** [V] : « from » 5 325 $ (No. 07) à 19 577 $ (No. 12 naturel) sur la page d'accueil ; No. 12 émeraude 6 797 $ (14 k, 2 ct) à 8 202 $ (18 k, 3 ct). Aucune décomposition (métal, pierre, façon).
- **Sur mesure** dès 8 000 $ ; semi-sur-mesure « 25 % » de plus que la collection (FAQ) et « ≈ 30 % » (page du formulaire) : les deux chiffres coexistent [V texte].
- **Acompte** 1 000 $ remboursable (moins frais de recherche de pierre) si le projet ne part pas en production [V texte].
- **Délais** : made-to-order 4 à 6 semaines ; prêt à expédier le jour ouvré suivant ; 8 semaines pour du sur-mesure ; 4 semaines pour du semi ; « 6 semaines après paiement » sur la page de départ [V texte]. Incohérences entre pages [I].
- **Retours** : prêt à expédier, 14 jours, remboursement moins frais de retour ; **made-to-order, modifié, personnalisé, sur mesure : aucun retour** ; défaut : réclamation sous 2 jours (FAQ) / 48 h [V texte].
- **Annulation** : 12 h pour remboursement complet ; ensuite jusqu'à 50 % de frais de restockage ; sur mesure non annulable 24 h après approbation finale [V texte].
- **Garantie** : 1 an « manufacturer's defect » puis garantie limitée à vie sur la fabrication ; **pierre centrale exclue** ; réparation extérieure (mise à taille) annule la garantie [V, `/pages/moonryvr-warranty`]. Note : la FAQ affiche une version plus courte (« limited lifetime ») [V].
- **Livraison** : FedEx/UPS express, signature obligatoire ; États-Unis seulement en ligne, international par e-mail au cas par cas (droits à la charge du client) ; taxe de vente Tennessee [V texte]. Frais de livraison au panier : non vus.
- **Paiement annoncé** : cartes, Google Pay, PayPal, Venmo, Shop Pay en plusieurs fois, Affirm ; virement ou Zelle sur facture ; mise de côté (« layaway ») [V texte].

## Confiance et service

- **Certificat** : rapport IGI cité pour une bague prête à expédier (n° 726520921 ; diamant 2,11 ct synthétique) [V, fiche No. 01] ; « IGI certified » sur No. 12 [V].
- **Libellé synthétique** : « lab created diamond » (fiche) et « lab grown » (FAQ) [V].
- **Avis** : lien « Reviews » vers Google Maps ; aucun avis sur la page de départ [V].
- **Preuves de fabrication** : atelier-studio à Chattanooga, 1301 Cowart Street, visite sur rendez-vous ; styliste Katie Wright ; aucune photo ni vidéo de fabrication ou suivi de commande relevé [V texte]. Rendu 3D du designer fourni par e-mail, hors site [V texte].
- **Service** : consultation virtuelle gratuite, e-mail `concierge@moonryvr.com`, `support@moonryvr.com` ; pas de chat ni téléphone relevés [V].
- **Langues/devises** : anglais, dollar américain [V].
- **Financement** : Affirm au paiement, « individualized layaway » [V texte].

## Points forts à retenir pour JR Diamond

1. **Processus sur mesure entièrement chiffré en ligne** : prix de départ, acompte, nombre de retouches, coût d'une retouche supplémentaire, délais par étape. Preuve : FAQ de https://moonryvr.com/pages/the-custom-process. [V]
2. **Premier rendu sous 7 jours, 2 retouches offertes** : l'équivalent de la promesse « modèle issu du fichier de fabrication » mais hors site. Preuve : même FAQ. [V]
3. **Facture par e-mail avec lien de paiement après approbation** : le parcours « devis, prix confirmé, lien de paiement » de `docs/PAIEMENT.md`. Preuve : même FAQ. [V]
4. **Prix qui varient en direct avec les choix** (+440 $ pour 18 k, +433 $ puis +532 $ pour le carat) sur les fiches. Preuve : test du 15/11 sur la fiche No. 12. [V]
5. **Rapport IGI numéroté** cité sur la fiche d'une bague prête à expédier. Preuve : fiche No. 01. [V]
6. **Règles de retour et d'annulation écrites sans ambiguïté** (sur mesure non retournable, restockage jusqu'à 50 %). Preuve : FAQ. [V]

## Défauts observés

- Pas de visualisation 3D ni de configurateur ; la photo ne change pas avec le métal choisi (test sur la fiche No. 12). [V]
- Libellé « 19k white gold » sur les fiches lues (faute de frappe probable). [V libellé, I faute]
- Délais contradictoires selon les pages (4 à 6 semaines, 6 semaines, 8 semaines) et pourcentage semi-sur-mesure contradictoire (25 % et 30 %). [V]
- Garantie : la pierre centrale est exclue ; une mise à taille ailleurs annule la garantie. [V]
- Aucun prix pour le sur-mesure avant la consultation ; fiche de ring « Sold out / Preorder open » sur certaines bagues. [V]
- Pas de décomposition du prix. [V]

## Limites de l'audit

- Panier : `/cart` lu (vide) ; « Add to cart » non cliqué (`/cart/add` interdit) : récapitulatif, frais de livraison et moyens de paiement au panier non vus.
- Mesure du visuel principal : première image de plus de 300 px complètement chargée mesurée à 0,55 s (fiche No. 12, ordinateur), 0,57 s (iPhone), 0,50 s (fiche No. 01, ordinateur) [V mesure] ; la valeur peut correspondre à une première image basse définition [S]. Pas de 3D à mesurer.
- Non testés : tiroirs de menu et de recherche, « Load more », filtres éventuels de la collection, liens Affirm, avis Google, vidéo/iframe de la fiche, guide des tailles, formulaires (règle).
- Un seul modèle détaillé (No. 12) pour les prix ; No. 01 lu pour les options.
- Les pages `/pages/faq` et la page de départ ont été lues avec le texte des accordéons (textContent), pas par clic.

## Sources

- https://moonryvr.com/robots.txt (via `robots.cjs`)
- https://moonryvr.com/pages/the-custom-process ; https://moonryvr.com/pages/semi-custom-inquiry ; https://moonryvr.com/pages/faq ; https://moonryvr.com/pages/moonryvr-warranty ; https://moonryvr.com/pages/visit ; https://moonryvr.com/pages/meet-katie ; https://moonryvr.com/
- https://moonryvr.com/collections/engagement-rings ; https://moonryvr.com/products/no-12-emerald-cut-diamond-engagement-ring ; https://moonryvr.com/products/no-01-old-mine-diamond-split-shank ; https://moonryvr.com/cart
- Captures et relevés : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/moonryvr/
