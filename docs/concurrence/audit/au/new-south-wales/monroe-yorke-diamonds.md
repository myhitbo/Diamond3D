# Audit : Monroe Yorke Diamonds (Australie, NSW / ACT)

- Site : Monroe Yorke Diamonds (MYD), ateliers à Melbourne, Sydney, Brisbane, Perth ; https://www.mydiamonds.com.au
- Page de départ : https://www.mydiamonds.com.au/pages/ring-builder (redirigée vers /collections/engagement, avec bandeau « Ring builder : Setting → Centre diamond → Review »)
- Date : 15/11/2026 (jours relatifs lus à la date système du 25/11/2026)
- Appareils : Chromium ordinateur 1440x900 et affichage iPhone 13
- Statut : **complet** jusqu'à l'étape de récapitulatif ; bouton « Secure this ring » non cliqué (il mène au panier, /cart/ interdit par robots.txt).
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| Liste /collections/engagement [V] | 131 bagues ; filtres forme, style, métal (10/14/18 ct, platine), prix ; tri 9 options |
| Fiche bague, étape 1 « Setting » [V] | Métal (blanc, jaune, rose, platine), titre 14 ct / 18 ct, diamants de la monture naturels ou de laboratoire |
| Étape 2 « Diamond » [V] | Type naturel / laboratoire, forme (selon monture), taille 0,50 à 3,0 ct, 3 pierres proposées (Best value, Most popular, Exceptional), « Browse more diamonds » |
| Étape 3 « Ring size » [V] | « I know my size » (F à Y avec équivalent US), « Measure now » (outil sur téléphone), « Not sure yet » (taille plus tard) |
| Étape 4 « Review » [V] | Récapitulatif, total, « Secure this ring », « Hold this diamond for 12 hours, free », « Ask a gemmologist », « Save and share this ring » |
| Recherche de diamants /pages/diamond-search [V] | Filtres complets, 186 166 pierres, « Build ring » |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Boutons métal : White / Yellow / Rose gold / Platinum | radio | Le prix de la monture change : jaune, rose, blanc 3 119 $ (14 ct) ; platine 3 959 $ [V] | platine +840 $ | OK |
| 14 ct / 18 ct | radio | 18 ct jaune : 3 709 $ (+590 $) [V] | +590 $ | OK |
| Natural / Lab grown (diamants de la monture) | radio | Natural : 3 549 $ ; lab : 3 119 $ (« save $430 ») [V] | +430 $ pour naturel | OK |
| Remise Black Friday | affichage | −10 % sur la monture seulement : 3 119 → 2 807 $ ; jusqu'au 30/11 [V] | −312 $ | OK |
| CONTINUE (étapes 1 à 3) | bouton | Passe à l'étape suivante, URL mise à jour (`?metal=yellow-14ct&type=natural&shape=Oval&ct=1&accent=Lab+Grown`) [V] | n/a | OK, configuration partageable |
| Étape 2 : type Natural / Lab grown | boutons | Prix « à partir de » 1 ct : naturel 4 458 $, laboratoire 1 262 $ (ovale) [V] | selon pierre | OK ; le clic automatisé n'a pas pu basculer le type (bouton hors zone visible pour Playwright), basculement validé par les prix affichés seulement [I] |
| Étape 2 : forme Oval / Round / Cushion | boutons | Ovale 1 ct 4 458 $ ; rond 4 116 $ ; coussin 2 730 $ ; texte « made for Oval, Round or Cushion » [V] | oui | OK |
| Étape 2 : tailles 0,50 / 0,75 / 1,0 / 1,25 / 1,5 / 1,75 / 2,0 / 2,5 / 3,0 ct | boutons | 2,0 ct coussin naturel : 3 pierres, 16 271 $ / 18 072 $ / 25 973 $ ; total bague 19 078 $ [V] | oui | OK |
| Cartes « Best value / Most popular / Exceptional » | cartes | Chaque carte : certificat GIA, couleur, pureté, finition, dimensions en mm, prix, « Ring complete » [V] | oui | OK |
| 360° (carte diamant), VIEW FULL DETAILS | boutons | Présents ; ouverture non actionnée | n/a | non testé |
| BROWSE MORE DIAMONDS | bouton | « 646 diamonds at this size » ; clic automatisé non abouti [V] | n/a | non testé |
| Étape 3 : liste de tailles F à Y | boutons | Choix « J½ (US 5) » affiché dans l'en-tête ; tailles > O : supplément « small additional fee » [V] | supplément | OK |
| MEASURE NOW / OPEN THE RING SIZER | bouton | Ouvre la méthode « carte bancaire sur l'écran », précision « half a size » ; lancement non actionné [V] | n/a | partiellement testé |
| SIZE GUIDE | bouton | Présent | n/a | non testé |
| Étape 4 : récapitulatif | page | Setting 2 807 $, diamant 4 458 $, total 7 265 $ ; « Free insured delivery across Australia » [V] | 7 265 $ | OK |
| SECURE THIS RING | bouton | Non cliqué : mène vraisemblablement au panier (/cart/add interdit par robots.txt) [I] | n/a | non testé : panier interdit |
| HOLD THIS DIAMOND FOR 12 HOURS, FREE | bouton | Présent, non cliqué (données personnelles probables) | n/a | non testé |
| SAVE AND SHARE THIS RING, Couples Folder, Send a hint, Book a call, Ask a question | boutons | Présents ; non cliqués (formulaires) | n/a | non testé |
| Vue 360° de la pierre (« YOUR DIAMOND ... 360° ») + 5 images de galerie | boutons | Présents sur la fiche [V] | n/a | non testé |
| Filtres liste : forme, style, métal, prix, tri | cases/select | Présents ; décomptes par option (ex. Round 72, Oval 18) [V] | n/a | relevés, non tous actionnés |
| ASK (concierge IA) + 4 suggestions | formulaire/boutons | Texte « AI concierge, backed by our jewellers » ; non utilisé (conversation) [V] | n/a | non testé |
| Recherche de diamants : NATURAL / LAB-GROWN / ANY ; CVD / HPHT | boutons | Compteur 186 166 → 125 164 (lab) → 84 018 (CVD) / 40 238 (HPHT) → 61 002 (natural) [V] | n/a | OK |
| Recherche de diamants : formes (14), carat, couleur D-M, pureté FL-SI2, coupe, polissage/symétrie, fluorescence, certificat (GIA/IGI/HRD/AGS), prix, table, profondeur, longueur, largeur, angles, numéro de certificat | filtres | Ovale : 65 547 ; Excellent : 3 657 ; 1-2 ct : 476 ; clics Pear, D, VS1 sans changement du compteur dans mon test [V] | n/a | OK / effet de D, VS1, Pear non confirmé |
| Tri recherche (prix, carat) ; Share search, Save search, Compare, VIEW DIAMOND, BUILD RING | select/boutons | VIEW DIAMOND mène à `/pages/diamond?cert=...` ; Build ring présent sur chaque carte [V] | n/a | liens relevés |
| Cadre « Montant minimal » (prix en AUD, min/max) | filtre | Présent sur la liste | n/a | non testé |
| /cart | page | Vide : « Your selection is empty » [V] | n/a | OK |

## Options disponibles
- Métaux : 10 ct, 14 ct, 18 ct (blanc, jaune, rose), platine 950 [V].
- Pierres : naturelles (GIA, HRD) et laboratoire (IGI) ; formes de la monture selon modèle (ex. ovale, rond, coussin) ; tailles 0,50-3,0 ct ; recherche libre de 14 formes [V].
- Styles : solitaire (27), halo (38), trois pierres (13), côté (54), bezel, hidden halo, pierre de couleur, homme [V].
- Tailles de doigt F à Y (système australien + US) ; premier redimensionnement gratuit sous 60 jours [V].
- Gravure : non vue dans le parcours. Bijoux de famille : « Custom Made » et « Customise this design » [V, non ouverts].

## Prix, délais, retours, garanties
- Prix en AUD, décomposé en monture + diamant + total, avec remise barrée (Black Friday −10 % monture) [V]. Bagues de laboratoire « from $1,579 » ; « up to 43 % off » sur sélection [V].
- Délai : non chiffré en jours ; « Arrives before Christmas » avec compte à rebours (30 jours) ; design 3D soumis à validation avant fabrication [V].
- Retours : 14 jours remboursement ou échange pour les articles prêts-à-porter ; **ne s'applique pas aux articles sur mesure** ; pierres gravées au laser non reprises ; retour avec code d'autorisation par téléphone, colis assuré, frais de retour à la charge du client [V] (/policies/refund-policy). La page produit annonce « 14-day returns on every ring » : incohérence avec la politique [V].
- Garantie à vie sur la fabrication ; évaluation d'assurance fournie [V].
- Livraison : « Free insured shipping », partout en Australie [V].
- Paiement : non vu avant le panier ; Shop Pay détecté (requêtes de la page) [V].

## Confiance et service
- Certificats : rapport GIA ou IGI pour chaque pierre centrale ; numéro de certificat consultable [V].
- Libellé : « Lab grown » ; mention « Every lab-grown diamond IGI certified » [V].
- Langue : anglais ; devise AUD [V].
- Service : 1800 766 567, WhatsApp, chat bijoutier, concierge IA, appel vidéo/téléphone, 4 salles d'exposition [V].
- Avis clients : non relevés sur les pages lues [V]. Preuve de fabrication : design 3D validé avant fabrication, « Made for you in Australia by our own jewellers » ; pas de vidéo d'atelier vue [V].

## Points forts à retenir pour JR Diamond
1. Configurateur en 4 étapes sur une seule fiche (monture, diamant, taille, récapitulatif), prix mis à jour à chaque étape avec le total. Preuve : total 7 265 $ affiché à l'étape 4.
2. Configuration dans l'adresse (`?metal=...&type=...&shape=...&ct=...`), donc partageable. Preuve : URL relevée après chaque étape.
3. Trois pierres proposées par un gemmologue (meilleur rapport, la plus choisie, exceptionnelle), avec certificat, couleur, pureté et dimensions en mm. Preuve : étape 2.
4. Bouton « Hold this diamond for 12 hours, free » : réduit la peur du changement de pierre. Preuve : étape 4.
5. Aide pour la taille : liste, outil de mesure sur téléphone, ou « confirmer plus tard ». Preuve : étape 3.
6. Recherche de diamants avec numéro de certificat consultable et 186 166 pierres. Preuve : /pages/diamond-search.
7. Comparateur naturel / laboratoire avec l'économie chiffrée (« save $430 »). Preuve : étape 1.

## Défauts observés
- Incohérence : « 14-day returns on every ring » sur la fiche, mais le sur mesure est exclu de la politique [V].
- Aucun délai de fabrication en jours (seulement « before Christmas ») [V].
- Boutons de l'étape 2 (type de pierre) difficiles à atteindre au clic automatisé (« outside of the viewport ») : possible défaut d'accessibilité ou artefact de test [I].
- Filtres D, VS1, Pear de la recherche sans effet sur le compteur dans mon test [V, à revérifier].
- La page ring-builder ne présente pas d'outil propre : elle redirige vers la collection [V].

## Mesures de chargement
- Fiche bague : interface de configuration visible à 1 090 ms (ordinateur), 979 ms (iPhone) ; LCP iPhone 564 ms [V, mesure unique].
- Redirection /pages/ring-builder → /collections/engagement en 1,3 s (ordinateur) [V].

## Limites de l'audit
- Panier non atteint avec une bague (« Secure this ring » non cliqué : /cart/ interdit) : pas de moyens de paiement ni de frais au panier.
- 360°, vue sur la main, essayage et mesure de bague non actionnés.
- Concierge IA, chat, formulaires non utilisés.
- Un seul modèle (Bella) parcouru.
- Le robots.txt contient un texte destiné aux agents (liens agents.md, UCP) ; non utilisé, par choix de ne passer que par le navigateur comme un visiteur.

## Sources
- https://www.mydiamonds.com.au/pages/ring-builder, /collections/engagement
- https://www.mydiamonds.com.au/products/bella-oval-diamond-hidden-halo-engagement-ring
- https://www.mydiamonds.com.au/pages/diamond-search
- https://www.mydiamonds.com.au/policies/refund-policy, /cart
- Captures et scripts : dossier scratchpad `audit/au/monroe-yorke-diamonds/`
