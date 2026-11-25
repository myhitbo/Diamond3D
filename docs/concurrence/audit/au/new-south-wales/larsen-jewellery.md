# Audit : Larsen Jewellery (Sydney, Melbourne, Brisbane)

- **Site** : Larsen Jewellery, https://www.larsenjewellery.com.au
- **Page de départ** : https://www.larsenjewellery.com.au/engagement-rings (« Choose Your Setting », étape « 01 / 03 »)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026, bandeau « Black Friday » actif)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-AU) et émulation iPhone 13
- **Statut** : **partiel**. Parcours monture → pierre → panier mené en ordinateur ; non faits : fiches `/product/` (interdites par robots.txt), vidéo des diamants, formulaires, paiement, parcours mobile jusqu'au panier.
- **Contrôle robots.txt** : `Disallow: /product/` (sauf environ 30 fiches de diamants), `/wp-admin/` interdit sauf `admin-ajax.php`. Toutes les adresses ouvertes ont été vérifiées « AUTORISÉ » avec `robots.cjs` (listes, fiches de monture `/engagement-rings/<forme>/<nom>`, `/engagement-rings/designs/...`, `/cart`, `/policies`). Aucun chemin `/product/` n'a été ouvert. Le bouton « Add to cart » appelle `admin-ajax.php` (autorisé) et le panier `/cart` est autorisé. Nous n'avons pas cliqué « Proceed to checkout », « Apple Pay » ni « Google Pay ».

## Parcours

| Étape | Options (vérifié sauf mention) |
|---|---|
| 1. Choisir une monture (`/engagement-rings`, 241 modèles « rings found ») | Filtres forme (9), style (6), métal (4), pierre (9), disponibilité (2), tri ; carte « Choose X Setting » avec « Setting price » |
| Fiche de monture (`/engagement-rings/oval-cut/nimbus-yellow-gold`) | Galerie (photo, vue de côté, main, 360°), 4 pastilles de métal (chacune = autre adresse), « Drop a hint », « Share », « Size guide », « Proceed to step 2 » |
| 2. Pierre centrale (fenêtre modale) | « Ethical natural diamonds » (vers un tableau de diamants), « Lab grown diamonds » (carat standard E VS1), « Coloured gemstones » (demande de devis) |
| 2b. Lab grown : « Choose Diamond Size & Personalise Your Ring » | Carat 1 / 1,5 / 2 / 2,5 / 3 ; taille de doigt D à Z½ + « I don't know » ; surprise oui/non (obligatoire) ; contact (appel/e-mail) ; « Add to cart » ou « Book appointment » |
| 2c. Natural : « Our Exclusive Diamond Collection » (`/engagement-rings/designs/our-exclusive-diamond-collection/oval`) | 641 diamants ovales, filtres carat, prix, couleur, clarté ; tableau forme/carat/couleur/clarté/coupe/rapport/prix ; vidéo (bouton lecture) |
| 3. Panier (`/cart`) | Récapitulatif, code promo, total TTC, « Proceed to checkout », Apple Pay, Google Pay |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Shape (Round brilliant, Oval, Cushion, Pear, Marquise, Emerald, Asscher, Radiant, Princess) | cases | liste déroulante de 9 cases ; filtre la liste | – | OK (vérifié) |
| Filtre Style (Solitaire, Side stones, Halo, Three stone, Engraved, Vintage) | cases | idem | – | OK |
| Filtre Metal (Platinum, 18ct White/Yellow/Rose Gold) | cases | idem, affiche une pastille retirable | prix de monture change selon le métal | OK |
| Filtre Gemstone (Natural, Lab grown, Sapphire, Ruby, Emerald/Tsavorite/Tourmaline, Pink, Yellow, Champagne, Other) | cases | idem | – | OK |
| Filtre Availability (Signature « made to order, online » ; Atelier « by appointment ») | cases | sépare l'achat en ligne de la prise de rendez-vous | – | OK |
| Lab grown + Platinum cochés | combinaison | compteur passé de 241 à 119 (« 119 rings found ») | Cala platine 4 500 $ | OK |
| Sort by | liste | présent ; options non relevées | – | non testé (contenu non lu) |
| Pagination 1 à 9, « View all » | liens | pages `/engagement-rings/page/N` | – | lien présent, non ouvert |
| Pastilles de métal (platine, or blanc, jaune, rose) | liens | changent d'adresse (`nimbus-platinum`, etc.) et le titre | Nimbus : or jaune 3 800 $ ; platine 3 950 $ ; blanc et rose 3 800 $ (ligne « price as pictured » 57 890 $ puis 58 040 $ en platine) | OK |
| Miniatures de la galerie (4) | boutons | photo, vue de côté, main, vue 360° (2 `canvas` après le clic) | – | OK |
| Cœur (wishlist) | bouton | page `/wishlist` existe | – | non cliqué |
| Drop a hint / Share / Size guide | boutons | présents sur la fiche et sur la page de personnalisation | – | non ouverts (formulaires) |
| Proceed to step 2 | bouton | ouvre la fenêtre « Step 2: Choose Your Centre Stone » | – | OK |
| Lab grown diamonds (modale) | lien `a.proceed-to-next-step.lab-grown-diamond` | va à `/engagement-rings/designs/personalise-your-ring-lab-grown-diamond` en 11 s mesurées, monture conservée | – | OK |
| Ethical natural diamonds (modale) | lien | va au tableau de diamants naturels | – | OK |
| Coloured gemstones (modale) | lien | « Request a quote » : demande, pas de prix | sur devis | non suivi |
| Carat 1 ct / 1,5 / 2 / 2,5 / 3 | boutons radio | change la ligne « Your Design » (« 2ct E, VS1 Lab Grown Diamond ») | 5 640 / 6 030 / 6 900 / 7 930 / 8 480 $ (Nimbus or jaune, bague complète) | OK |
| Ring size D à Z½ | liste | 51 valeurs + « I don't know » ; valeur reprise au panier (« Size: L ») | – | OK |
| Is this a surprise ? (No / Yes) | radio | **obligatoire** : sans choix, bulle « Please select one of these options » | – | OK |
| Opt in for a jeweller (Please call / Email only) | radio | facultatif | – | présent |
| Show/Change Ring Details | lien | récapitulatif monture + pierre (type, forme, carat, couleur, clarté, coupe) | – | OK |
| Add to cart | bouton | sans taille ni choix surprise : rien ne se passe ; complet : va au panier `/cart` | 6 900 $ | OK |
| Book appointment | bouton | formulaire (État, date) | – | non rempli |
| Tableau diamants : carat min, carat max | champs | min 1,5 : 641 → 127 « available diamonds » | – | OK |
| Tableau : prix max | champ | saisie 10 000 sans effet sur le compteur (127) | – | effet non constaté |
| Tableau : Ideal / Oval / Other shapes | cases | 9 formes disponibles dans « Other shapes » ; compteur inchangé après le clic | – | effet partiel |
| Tableau : couleur (H à D), clarté (SI2 à FL) | curseurs | présents | – | non manipulés |
| Tableau : lecture vidéo et flèche d'aperçu | boutons | non cliqués (risque de fiche `/product/` ou de service vidéo tiers) | – | non testé |
| Code promo (panier) | champ + « Apply » | présent | – | non utilisé |
| Menu principal (Engagement, Wedding, Jewellery, About, Learn, Contact), Search, Get in touch, téléphones Sydney / Melbourne / Brisbane | liens | `tel:` pour les trois studios | – | présent |
| Fenêtre « Join the Larsen world » | modale | s'ouvre après quelques secondes | – | non remplie |

## Options disponibles

- **Métaux** : platine, or 18 ct blanc, jaune, rose (filtre). Pas de 14 ct sur la fiche relevée. Mokume et titane/zirconium pour les alliances.
- **Formes** : ronde, ovale, coussin, poire, marquise, émeraude, Asscher, radiante, princesse.
- **Styles** : solitaire, pierres latérales, halo, trois pierres, gravé, vintage.
- **Pierres** : diamant naturel, lab grown, saphir, rubis, émeraude/tsavorite/tourmaline, diamants rose, jaune, champagne, autres.
- **Carat en ligne (lab grown)** : 1 à 3 ct, qualité fixée E, VS1, coupe Excellent. Choix couleur et clarté absent sur ce parcours.
- **Naturels** : tableau de 641 ovales, rapport GIA, couleurs D à H, filtre de clarté jusqu'à FL.
- **Autres** : gravure (style « Engraved »), personnalisation en studio, bespoke, « The Vault » (prêt à expédier), ensemble d'alliances « Make your own wedding rings ».

## Prix, délais, retours, garanties

- **Prix** : visible dès la première liste (« Setting price » de 2 450 $ à 4 730 $ relevés). Fiche : « SETTING PRICE $3,800 incl. GST - Excludes centre diamond » et « PRICE AS PICTURED $57,890 » (avec pierre de 2,5 ct). Panier : « Total $6,900 (inclusive of GST) », livraison « Secure FREE shipping ». Monnaie non indiquée explicitement (dollars australiens inféré, GST).
- **Décomposition** : monture + pierre, mais le prix de la pierre n'est pas isolé pour le lab grown (la ligne totale change avec le carat). Pour les naturels, prix par diamant dans le tableau.
- **Délai** : fiche de monture « Made to order. Order now, estimated for 5th January 2027 » ; page de personnalisation « Leaves our studio in 4-6 weeks » ; panier « Ready to ship in 4-6 weeks ». Écart entre deux affichages de la même commande.
- **Retours** (https://www.larsenjewellery.com.au/policies#return-policy, vérifié) : 30 jours pour les achats en ligne, échange ou remboursement ; pièces sur mesure (custom-made) non retournables ni remboursables, et la commande n'est pas annulable après acompte. Diamants libres achetés en ligne : 30 jours ; autres pierres libres : non.
- **Garanties** (vérifié, même page) : garantie à vie contre défauts de matière et de fabrication ; redimensionnement offert, entretien annuel offert (bandeau « Shop with confidence »).
- **Paiement** (même page) : Visa, Mastercard, virement en ligne ; paiement intégral à la commande ; acompte de 30 % pour le sur mesure. Panier : Apple Pay et Google Pay affichés (non cliqués).
- **Livraison** : « Free insured shipping », envoi sous enveloppe discrète.

## Confiance et service

- Avis : 5,0 étoiles Google (pastille), 1 836 avis sur la fiche Nimbus (vérifié), « Customer testimonials » sur la fiche.
- Équipe : photos des bijoutiers au travail (Ornella, Ben, Jacinta…), page « Meet the team » et ateliers à Sydney, Melbourne, Brisbane (vérifié).
- Certification : « GIA certification » listée sur la fiche ; rapport GIA dans le tableau naturel.
- Libellé synthétique : « Lab Grown Diamond » partout (aucun terme « synthetic »).
- Langue : anglais ; devise unique ; aucune version hébraïque.
- Service : rendez-vous en studio, « Drop a hint », conseil par téléphone par ville, FAQ sur le panier (surprise, taille inconnue, garantie).
- Preuves de fabrication : photos d'ateliers et d'équipe ; « Digital rendering » proposé ; le texte de l'inventaire cite des rendus 3D avant fabrication (inventaire V2). Pas de suivi de commande ni vidéo de fabrication trouvés sur les pages lues.

## Points forts à retenir pour JR Diamond

1. **Prix de monture affiché dès la liste, puis total qui évolue avec le carat** : 5 640 à 8 480 $ pour 1 à 3 ct, et ligne « Your Design » mise à jour (preuve : carats testés, fiche Nimbus lab grown).
2. **Une URL par métal** : chaque pastille a sa propre adresse (`nimbus-platinum`, `nimbus-rose-gold`), donc partageable (preuve : liens relevés).
3. **Étape de choix de la pierre en deux voies claires** (naturel / lab / couleur) dans une fenêtre unique (capture de la modale).
4. **Taille de doigt et « surprise » intégrées au tunnel**, avec conseil d'aide si on ne connaît pas la taille (« I don't know », FAQ du panier).
5. **Politique de retour explicite** : 30 jours en ligne, sur mesure non remboursable, dit en toutes lettres (page `/policies`).
6. **Équipe visible au travail** sous la fiche et téléphone pour chaque ville (preuve : captures).
7. **Rapidité de la première image** : première peinture 272 à 372 ms, plus grand élément 284 à 492 ms (voir limites).

## Défauts observés

- Délai annoncé différent selon la page (5 janvier 2027, puis « 4-6 weeks »).
- Pas de 3D manipulable : photos et vue 360° seulement (2 `canvas` après clic sur 360° : à confirmer).
- Filtre prix du tableau des diamants sans effet visible ; la bascule « Other shapes » laisse le compteur à 127.
- Fenêtre d'inscription qui recouvre la page et bloque les clics après quelques secondes.
- Page de personnalisation : le bouton « Add to cart » échoue en silence sans choix « surprise » (seule une bulle).
- Version mobile : un second bouton « Add to cart » (le premier est masqué `d-md-block`), non testé jusqu'au panier.
- Monnaie non écrite sur la fiche ; 14 ct non proposé.
- Sur mesure : aucune photo ou vidéo de fabrication de la commande du client trouvée.

## Limites de l'audit

- Fiches `/product/` (interdites) non ouvertes ; vidéo des diamants, quick view et formulaires non utilisés.
- Parcours mobile limité à la liste et à la fiche (438 contrôles listés ; capture pleine page) ; ajout au panier non fait en iPhone.
- Mesures de temps prises avec cache de navigateur vierge mais depuis la machine d'audit (réseau rapide) ; non comparables à un vrai téléphone.
- Tri, curseurs de couleur et clarté, wishlist, rendez-vous non actionnés.
- Prix relevés pendant une promotion « Black Friday » possible.
- Une seule monture (Nimbus) suivie jusqu'au panier ; autres montures vues par leur liste seulement.

## Sources

- https://www.larsenjewellery.com.au/engagement-rings (listes, filtres, 241 modèles) : vérifié.
- https://www.larsenjewellery.com.au/engagement-rings/oval-cut/nimbus-yellow-gold et variantes `nimbus-platinum`, `nimbus-white-gold`, `nimbus-rose-gold` : vérifié.
- https://www.larsenjewellery.com.au/engagement-rings/designs/personalise-your-ring-lab-grown-diamond : vérifié.
- https://www.larsenjewellery.com.au/engagement-rings/designs/our-exclusive-diamond-collection/oval : vérifié.
- https://www.larsenjewellery.com.au/cart (articles, total, Apple/Google Pay) : vérifié.
- https://www.larsenjewellery.com.au/policies (retours, garantie, paiement) : vérifié.
- https://www.larsenjewellery.com.au/robots.txt : vérifié.
- Captures et scripts : scratchpad `audit/au/larsen-jewellery/` (hors dépôt).
