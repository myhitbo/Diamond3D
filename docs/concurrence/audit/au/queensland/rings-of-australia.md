# Audit : Rings of Australia (ROA), Brisbane (Queensland)

- **Site** : Rings of Australia, https://ringsofaustralia.com.au (Murarrie, Brisbane ; sur rendez-vous)
- **Page de départ** : https://ringsofaustralia.com.au/collections/engagement-rings (étape 1 « Choose Your SETTING »)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026 : bandeaux « We're Open on Christmas », « Black Friday », compte à rebours « 02 d »)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-AU) et émulation iPhone 13 (390 px)
- **Statut** : **partiel**. Monture, fiche de monture, 4 familles de diamants et pages de politique parcourues. Ajout au panier **non actionné** : `/cart/add` est INTERDIT par `robots.txt` (`Disallow: /cart/`), donc « Choose setting », « Buy diamond loose », « Add diamond to a ring » et « Add to cart » (étape 3) n'ont pas été cliqués. La page `/cart` (AUTORISÉE) a été lue, vide.
- **Contrôle robots.txt** : curl et Chromium répondent 200 ; ClaudeBot nommément autorisé. AUTORISÉ : `/collections/*`, `/products/*`, `/pages/*`, `/policies/*`, `/cart`. INTERDIT : `/cart/add` (règle `Disallow: /cart/`). Voir « Limites » pour les requêtes `/cart/update.js` émises par la page elle-même.

## Parcours

| Étape | Options (vérifié) |
|---|---|
| Fenêtre d'accueil | « Design Your Ring In 3 Steps » (diamant, monture, bague) avec « EXPLORE NOW » ; réapparaît à chaque page du parcours |
| 1. Choose your SETTING (liste) | Filtres « Setting style » (Solitaire, Halo, Three Stone, Nature-Inspired, Vintage, Pavé), « Metal », « Shape », « Price » (champs 1 à 20 000), tri prix, « Load more », « Try it on you » |
| Fiche de monture | 3D « 360° · drag to rotate », métal (10 pastilles), forme (10), taille E à Z½, largeur de jonc, type de griffes, gravure, mode de paiement, « Choose this setting » |
| 2. Choose your DIAMOND | Quatre onglets (Lab Grown, Moissanite, Natural, Lab Grown Colour) ; filtres forme, carat, couleur, clarté, taille (cut), laboratoire, prix, numéro de rapport ; fiche de diamant avec « Buy diamond loose » ou « Add diamond to a ring » |
| 3. Complete your RING | « ADD TO CART » (non actionné) |

L'ordre monture puis diamant ou diamant puis monture est libre : les trois cases du bandeau sont les mêmes dans les deux sens (vu sur la fiche de monture et sur la page diamants).

## Contrôles vérifiés

Liste de départ : 1 366 contrôles visibles sur ordinateur, 1 288 sur iPhone (controls.cjs ; la plupart sont les liens d'avis Google et Trustpilot). Tableau : tous les contrôles fonctionnels du parcours.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « EXPLORE NOW » | bouton | ferme la fenêtre d'explication | – | OK |
| Setting style (Solitaire, Halo, Three Stone, Nature, Vintage, Pavé) | 6 liens + pastilles | liens vers `/collections/engagement-rings/solitaire`, `/halo`, etc. ; clic sur la pastille Solitaire, Halo ou Three Stone : première carte et nombre de cartes (16) inchangés après 5 s | – | **effet non constaté** (voir défauts) |
| Metal : Platinum (pastille de la liste) | pastille | les 16 cartes passent à « AUD1,799 » et leurs liens portent la variante platine (`?variant=51894842589548`) | 899 → 1 799 AUD | OK |
| Shape : Pear (liste) | pastille | aucun changement visible des 16 premières cartes | – | effet non constaté |
| Price (champs 1 / 20 000) | 2 champs + curseur | présents | – | non saisis |
| Tri « Price: Low to High / High to Low » | liste (2 options) | présent | – | non manipulé |
| Load more | bouton | présent ; non cliqué | – | non testé |
| Try it on you | bouton | essai virtuel présumé (caméra) | – | non ouvert (accès caméra) |
| Pastilles de métal de la fiche (9K, 14K, 18K blanc, jaune, rose ; platine) | 10 boutons radio | change le prix et l'étiquette « Metal Color » | 9K 899 ; 14K 1 199 ; 18K 1 499 ; platine 1 799 AUD | OK (14K blanc, platine, 9K jaune mesurés ; les autres lus dans la liste des variantes) |
| Pastilles de forme (Round, Oval, Cushion, Emerald, Princess, Radiant, Pear, Marquise, Asscher, Heart) | 10 boutons radio | change l'étiquette « Shape » ; prix inchangé | 899 AUD pour toutes | OK (Oval, Pear, Heart, Round mesurés) |
| Visionneuse « 360° · drag to rotate » | iframe 3djewelrydesigner.com | modèle 3D du bijou, « Loading 3D view… » puis rendu ; **l'adresse de l'iframe ne change pas** quand on change le métal | – | OK à l'ouverture ; réaction au métal non confirmée (capture d'iframe échouée) |
| Taille E à Z½ (liste, 43 valeurs) | liste | valeur K acceptée ; prix inchangé | 899 | OK |
| Band Width 1,8 / 2 / 2,2 mm | liste | prix inchangé | 899 | OK |
| Prong Type (Round / Claw) | boutons | non actionnés (sélecteur introuvable en 2 essais) | – | non testé |
| ADD ENGRAVING TEXT (gratuit, 10 caractères, police) | champ | aperçu 3D de la gravure annoncé (« Write to see 3d preview… ») ; saisie non réalisée en 2 essais | gratuit | non testé |
| How would you like to pay : en totalité / acompte 50 % | 2 radios | libellés lus ; l'acompte est annoncé « pay 50% today and the remaining 50% when your jewellery is ready to ship » | – | présent |
| Compare options / View options / financement | liens | « Financing from $74/mo or 0% APR » (Shop Pay, Afterpay) | – | non ouvert |
| Matching Band : « ADD TO RING » (Peony, 328 $ au lieu de 364 $, code MATCH10) | bouton | **ajout au panier présumé** | – | non cliqué (panier interdit) |
| CHOOSE THIS SETTING / CHOOSE SETTING | bouton | passe à l'étape diamant (présumé) | – | non cliqué (appelle probablement le panier) |
| Onglets diamants : Lab Grown, Moissanite, Natural, Lab Grown Colour | 4 liens | pages distinctes `/collections/lab-diamonds`, `/moissanite-diamonds`, `/natural-diamonds`, `/coloured-lab-grown-diamonds` (200) | – | OK |
| Forme (10 icônes ; 16 sur Colour avec les teintes) | pastilles | Heart : 7 160 résultats ; Oval : la pastille passe en gras mais le compteur reste à 192 781 après 14 s | – | OK pour Heart, incertain pour Oval |
| Carat (min 1 / max 10) | 2 champs | min = 2 : 192 781 → 121 194 résultats | – | OK |
| Prix min / max | 2 champs | présents (80 et 500 000 par défaut) ; saisie du maximum échouée (champ non éditable au clic) | – | non confirmé |
| Couleur D à K, Clarté FL à SI1, Cut Ideal à Good | curseurs | présents ; D et VVS1 cliqués sans changement de compteur | – | non confirmé |
| Lab : GIA / IGI | 2 boutons | GIA : 360 résultats ; IGI actif ou non, premier résultat reste IGI sur les pierres de laboratoire | – | OK |
| Tri (Best Value, prix, carat, couleur, clarté : 9 options) | liste | « Carat: Biggest » : 8,25 ct D FL IGI à 175 581 AUD en tête | – | OK |
| Clear All | bouton | revient à 206 617 résultats (stock vivant, différent des 192 781 initiaux) | – | OK |
| Search By Report Number | champ + bouton | présent | – | non saisi |
| Advanced Filters | bouton | présent | – | non ouvert |
| Carte de diamant | lien | `/collections/lab-diamonds/diamonds?diamondId=700503805` : fiche (carat, couleur, clarté, taille, polissage, symétrie, fluorescence, mesures, ratio, table, profondeur, laboratoire, n° de certificat) | 449 AUD (748 barré, −40 %, code LAB40) | OK |
| View Certificate | lien | présent sur la fiche (laboratoire IGI) | – | non ouvert (domaine tiers) |
| BUY DIAMOND LOOSE / ADD DIAMOND TO A RING / ADD TO CART | boutons | achat de la pierre seule ou ajout à une bague / à une boîte « Signature Box » (299 $) | – | non cliqués (panier interdit) |
| Chat with us on WhatsApp, chat (bulle), BOOK A PRIVATE CONSULTATION, Book In-Person Appointment | boutons | présents ; non ouverts (pas de conversation, pas de formulaire) | – | non testés |
| Téléphone « +61 415 900 145 » | lien tel: | présent | – | non appelé |
| Cœur / wishlist (`/pages/wishlist`), connexion, recherche | liens | présents | – | non ouverts (compte) |
| Avis (Google, Trustpilot, « Read more », « View 1 photo », « READ OUR REVIEWS ») | liens | bandeau de 228 avis ; liens vers profils de tiers | – | non ouverts |
| Pied de page (Return Policy, Privacy Policy, FAQs, Site Map, Blogs, tailles populaires, éducation 4C) | liens | présents ; `/policies/refund-policy` 200 ; `/policies/shipping-policy` : **404** | – | 1 lien mort |

## Options disponibles

- **Métaux** : or 9 K, 14 K, 18 K (blanc, jaune, rose) et platine ; seuls 9 K, 14 K, 18 K et platine changent le prix.
- **Formes** : ronde, ovale, coussin, émeraude, princesse, radiante, poire, marquise, Asscher, cœur ; teintes fantaisie (jaune, rose, bleu, rouge, vert, champagne) sur la page Colour.
- **Pierres** : lab grown (192 781 pierres), naturel (5 884), moissanite (90), couleur de laboratoire (21 176) ; compteurs lus le 25/11.
- **Certificats** : GIA ou IGI ; la liste naturelle affichait des pierres « IGI Certified ».
- **Montures** : solitaire, halo et halo caché, trois pierres et toi et moi, inspirées de la nature, vintage, pavé.
- **Personnalisation** : largeur de jonc 1,8 / 2 / 2,2 mm, griffes rondes ou « Claw », gravure gratuite (10 caractères), taille E à Z½, page « Customize your engagement ring » (CAO gratuite).
- **Paiement** : en totalité, mensuel (Shop Pay, Afterpay), acompte de 50 % ; la page de la pierre ajoute « Card, Shop Pay, Apple Pay or Google Pay ».

## Prix, délais, retours, garanties

- **Prix de la monture seule** : 899 AUD (9 K), 1 199 (14 K), 1 499 (18 K), 1 799 (platine) pour « Rose Twisted Shank » ; pierre vendue à part ; mention « (Setting Price Only) » (fiche de monture, vérifié). **Pas de décomposition** du prix (métal, façon, marge) : le prix est affiché en bloc.
- **Pierres** : lab 1,01 ct émeraude E SI1 Ideal IGI 449 AUD (748 barré) ; naturel 1,04 ct poire K SI1 2 456 AUD ; moissanite 1 ct ronde 300 AUD ; lab couleur 1 ct émeraude 507 AUD (845 barré). Promotion « Black Friday −40 % ». Les photos des pierres viennent de `diabrilliance.com` : stock de fournisseur, non photographié par l'atelier [I].
- **Délai** : « STANDARD CHECKOUT – DELIVERY IN 25 DAYS » ; « Free insured shipping by Wednesday, January 6 – Wednesday, January 13 » (monture) ; pour une pierre seule : « by Wednesday, December 16 – December 23 ».
- **Livraison** : gratuite, assurée, Australie entière ; la FAQ cite aussi la Nouvelle-Zélande.
- **Retours** (`/policies/refund-policy`) : 30 jours, bague non portée, emballage d'origine. **Exclusions** : « custom products (such as special orders or personalized items) » et « sale items ». Le texte, de type modèle, contient encore « [INSERT RETURN ADDRESS] » (non remplacé). Remboursement sous 10 jours ouvrés après contrôle. Délai de rétractation de 14 jours pour l'Union européenne.
- **Garanties** : garantie de fabrication à vie ; redimensionnement gratuit ; certificat GIA ou IGI ; « 100 % conflict-free » (pages d'accueil et 404).
- **Devise** : AUD seulement (aucun sélecteur de pays vu) ; GST non mentionnée dans les prix relevés.

## Confiance et service

- **Avis** : 4,9 sur 228 avis (Google et Trustpilot), avis récents de 8 à 22 jours ; liens vers les profils publics des auteurs (vérifié).
- **Adresse** : Corporate House, Building 1, 747 Lytton Rd, Murarrie QLD 4172, sur rendez-vous ; ABN 19 675 350 722 ; téléphone +61 415 900 145 ; WhatsApp ; rendez-vous vidéo.
- **Langues** : anglais seulement.
- **Libellé synthétique** : « Lab Grown Diamond » (jamais « synthétique ») ; la FAQ a une question « Are Lab Grown Diamonds Real? » (titre vu, réponse non lue).
- **Preuves de fabrication** : discours « nous concevons, fabriquons et contrôlons chaque pièce » (page Why us) ; **aucune photo ou vidéo d'atelier ni suivi de commande** relevés dans le parcours. Un avis cite des mises à jour pendant la fabrication.
- **Cadeaux et réductions** : « GET 40% OFF », boîte « Signature Box » à 299 $, boucles d'oreilles offertes dès 3 500 $, bague assortie −10 %.

## Points forts à retenir pour JR Diamond

1. **Visionneuse 3D manipulable sur la fiche de monture** (« 360° · drag to rotate »), chargée en 2,4 à 5,7 s sur ordinateur et 5,0 s sur iPhone (mesures sur la machine d'audit, sous charge). Preuve : iframe `3djewelrydesigner.com/embed/…?mode=view&controls=1`, capture iPhone avec la pierre en 3D.
2. **Prix de la monture qui se met à jour à chaque métal**, avec libellé « Setting Price Only » et prix des variantes visibles (899 / 1 199 / 1 499 / 1 799 AUD). Preuve : liste `select#id` de la fiche et prix mesuré à 14 K blanc et platine.
3. **Parcours en trois étapes dans les deux sens** (pierre d'abord ou monture d'abord) avec bandeau d'étapes persistant. Preuve : bandeau « Choose your DIAMOND / SETTING / Complete your RING » sur les deux pages.
4. **Moteur de pierres très large avec fiche technique complète** (mesures, ratio, table, profondeur, n° de certificat, lien certificat) et compteur de résultats. Preuve : fiche `diamondId=700503805`, 192 781 pierres.
5. **Trois modes de paiement affichés dès la fiche** (totalité, mensuel, acompte de 50 % « le reste quand le bijou est prêt à expédier »). Preuve : texte lu sur la fiche.
6. **Barre fixe sur iPhone** (taille, largeur, « CHOOSE SETTING ») sans défilement horizontal (390/390 px). Preuve : capture et mesure de `scrollWidth`.
7. **Date de livraison estimée affichée** (fenêtre de 7 jours) sur la monture et sur la pierre. Preuve : « by Wednesday, January 6 – January 13 ».

## Défauts observés

- Politique de retour générique avec « [INSERT RETURN ADDRESS] » non remplacé et exclusion des produits personnalisés et des articles soldés : contredit les bandeaux « 30 days return » et « 40 % off » sur un site presque entièrement en promotion.
- Liens vers `/policies/shipping-policy` : 404 (pied de page).
- Fenêtre « Design Your Ring In 3 Steps » qui revient à chaque page ; fenêtre de notification présente aussi (« Exciting Offers »).
- Filtres de la liste de montures (Halo, Solitaire, Pear) sans effet observé sur les 16 premières cartes ; filtre forme Oval des pierres sans effet sur le compteur ; mise à jour lente (> 3 s).
- Le 3D vient d'un module tiers ; l'adresse de l'iframe ne change pas avec le métal (réaction de la 3D non confirmée) [I].
- Première carte de monture visible en 7,3 s (ordinateur, sous charge).
- Compte à rebours de promotion permanent (« Sale ends in 02 d ») et prix barrés très élevés (−40 %) : crédibilité du prix réel douteuse [I].
- Page vide `/cart` et aucune donnée de frais avant paiement.
- Console de la page : erreur CSP (« Framing shop.app »), 403 et 413 non bloquants.

## Limites de l'audit

- **Panier, récapitulatif, frais, moyens de paiement du panier : non relevés** (`/cart/add` INTERDIT ; boutons de panier non cliqués ; « Buy now », Shop Pay, Afterpay non cliqués). La page `/cart` n'a été lue que vide.
- **Écart de contrôle** : la page émet elle-même `GET /cart.js` et `POST /cart/update.js` (chemin INTERDIT par `/cart/`) à l'ouverture et pendant l'usage (5 occurrences mesurées sur une session de la page diamants). Lors des premiers essais ces requêtes ont atteint le serveur avant que je ne les intercepte ; ensuite, un filtre Playwright les a remplacées par une réponse locale fictive. Aucun clic sur un bouton d'ajout n'a été fait.
- Effet exact de la gravure, des griffes, de la largeur de jonc sur la 3D et de la plupart des filtres de pierres non confirmé (sélecteurs introuvables, page lourde, machine chargée).
- « Try it on you », fenêtre de chat, WhatsApp, rendez-vous, formulaire d'e-mail : non ouverts.
- FAQ : questions lues, réponses repliées non ouvertes (3 essais).
- Mesures de temps faites avec 6 navigateurs d'autres audits en parallèle ; elles sont majorées.
- Prix et stocks du 25/11 (promotion Black Friday), pas du 15/11.

## Sources

- https://ringsofaustralia.com.au/collections/engagement-rings : vérifié (ordinateur, iPhone).
- https://ringsofaustralia.com.au/products/rose-twisted-shank-engagement-ring : vérifié.
- https://ringsofaustralia.com.au/collections/lab-diamonds, `/natural-diamonds`, `/moissanite-diamonds`, `/coloured-lab-grown-diamonds` : vérifié.
- https://ringsofaustralia.com.au/collections/lab-diamonds/diamonds?diamondId=700503805 : vérifié.
- https://ringsofaustralia.com.au/policies/refund-policy, `/pages/why-rings-of-australia`, `/pages/faqs`, `/cart` (vide) : vérifié ; `/policies/shipping-policy` : 404.
- https://ringsofaustralia.com.au/robots.txt : vérifié ; contrôle `robots.cjs` sur chaque chemin.
- Inventaire Queensland (`INVENTAIRE.md`, [V2] à [V5]) : adresse, certificats, CAO gratuite.
- Captures et scripts : scratchpad `audit/au/rings-of-australia/` (hors dépôt).
