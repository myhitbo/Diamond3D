# Audit : Lucido Fine Jewelry (Birmingham, Rochester, Sterling Heights, Michigan)

- **Site** : Lucido Fine Jewelry, https://lucidojewelry.com/ (page de départ : /pages/custom-ring-builder)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (assistant et concepteur 3D explorés en détail sur iPhone ; concepteur non chargé sur ordinateur ; panier **interdit par robots.txt** : non ouvert, ajout au panier non fait ; bouton « Save » du concepteur non actionné)
- **Garde-fous** : robots.txt lu : `/cart`, `/account`, `/search` INTERDITS (non ouverts). Aucun formulaire rempli : le bouton « Continue without saving » du formulaire de capture a été utilisé, ni nom ni téléphone saisis.

## Parcours

Même moteur que Lewis Jewelers (JewelerOS) : assistant en étapes, puis concepteur 3D dans une iframe `jeweleros-custom.netlify.app` (robots.txt autorisé). Boutique Shopify, thème sur mesure.

| Étape | Options (vérifié) |
|---|---|
| 0. Pastilles de métal | Or jaune, blanc, rose : changent les miniatures de style (`solitaire_yellow/white/rose`) |
| 1 Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch (9) |
| 2 Pierre centrale | Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, Decide later |
| 3 Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, Decide later |
| 4 Délai | 1-4 semaines, 1-3 mois, 3-6 mois, Not sure yet |
| 5 Magasin (iPhone seulement) | « Select your preferred store location » : Michigan (3 magasins : Birmingham, Rochester, Sterling Heights), « Decide later » |
| Capture de contact | Fenêtre « Your dream ring is almost ready! » : nom, téléphone, case SMS, « Save & Continue », lien « Continue without saving » ; promesses : personnaliser, enregistrer/partager, prendre rendez-vous |
| Concepteur 3D | Voir « Options disponibles » ; « MSRP » (monture seule) ; bouton « Save » |

L'étape 5 est apparue sur iPhone et pas sur ordinateur (étape 4/4) : sur ordinateur le concepteur n'a pas chargé, comportement non expliqué (voir Défauts).

## Contrôles vérifiés

Relevé automatique : 112 contrôles visibles (ordinateur), 42 (iPhone). Hors assistant : menus, 3 magasins, marques, pied de page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow/White/Rose Gold | bouton | Change les miniatures | non | OK |
| 9 styles | cartes | Passent à l'étape 2 | non | OK (Solitaire, Three Stone testés ; même assistant que Lewis, 9/9 vérifiés là-bas) |
| Natural / Lab Grown (assistant) | bascule | Change l'état actif | non | OK |
| 10 formes, 9 tailles, 4 délais | cartes | Avance d'une étape ; chips récapitulatifs en haut | non | OK (Round, Pear, 1 et 3 carat, 1-4 sem., 3-6 mois testés) |
| Michigan (3 stores) | accordéon | Liste : Birmingham (250 N Old Woodward Ave), autres adresses et horaires | non | OK |
| Decide later (magasin) | bouton | Ouvre la fenêtre de capture de contact | non | OK |
| Continue without saving | lien | Ouvre le concepteur ; canevas présent 0,8 à 1,9 s après | non | OK (iPhone) |
| Save & Continue, case SMS | formulaire | Non rempli | non | non testé (règle) |
| Métal : 14K jaune/blanc/rose, 18K jaune/blanc/rose, platine, mixte | boutons | Image change (empreinte d'image différente à chaque clic) | **14K $1 398 ; 18K $1 970 ; platine $1 630** | OK (lecture stable après 5,5 s) |
| Mixte | bouton | Ouvre « Head Metal Color » et « Band Metal Color » séparés | non lu (« - ») | OK |
| Nombre de pierres : One / Two / Three Stone | boutons | Change la monture | **Two $1 678 ; Three $1 765** (base $1 398) | OK |
| Diamant : Natural / Lab Grown (concepteur) | boutons | Change le type d'origine | aucun changement ($1 398 : monture seule) | OK |
| Skip (diamant) | bouton | Présent ; non actionné | non | non testé |
| Centre (bouton avec crayon) | bouton | Ouvre « Center Diamond » : formes (9) + curseur carat 0,25 à 10 + « Apply & Return » | voir carat | OK |
| 9 formes de pierre | boutons | Image change à chaque forme (9 empreintes différentes) | non lu par forme | OK |
| Carat (saisie) | champ + curseur | 0,25 → 0,25 ; 0,5 ; 2 ; 3 ; 10 acceptés ; 12 → 10 ; 0,1 → 0,25 (bornes) | **0,25 ct rond : $1 330** (au lieu de $1 398 à 1 ct) | OK |
| Tête : Basket / Halo / Hidden Halo / Bezel / None | boutons | Image change | Basket $1 463 ; Halo $1 498 ; Hidden Halo $1 498 | Bezel et None : clic échoué (bouton introuvable après changement de mise en page) |
| Griffes : 4 Classic / 4 Compass / 6 Prong | boutons | Image change | 4 Compass $1 398 ; 6 Prong $1 488 ; 4 Classic $1 398 | OK |
| Bouts de griffe : Claw / Petite Claw / Rounded / Tab | boutons | Image change | $1 398 pour tous | OK |
| Pavé sur griffes : Pave / None | boutons | Image change | Pave $1 398 ; None $1 603 (résultat inattendu, à revérifier) | OK avec réserve |
| Corps : Round / Square | boutons | Image change | Square $1 548 ; Round $1 398 | OK |
| Cathédrale : Cathedral / No Cathedral | boutons | Image change | Cathedral $1 463 | OK (No Cathedral : clic non abouti) |
| Style de pavé : None / Petite French | boutons | Non atteint (options masquées dans mon essai) | non | non testé |
| Largeur du corps | champ + curseur | 1,5 → $1 295 ; 3 → $2 090 ; 4 → $2 650 ; 5 refusé et reste à 4 | oui | OK |
| Taille US | champ + curseur | 3 → $2 375 ; 10 → $3 028 ; 13 → $3 300 ; 14 → reste à 13 (valeurs à largeur 4 mm) | **le prix varie avec la taille** | OK |
| Confort : Standard / Comfort Fit | boutons | Image change | Comfort −$127 ($3 173 contre $3 300) | OK |
| Gravure : champ (14 caractères max), polices Block / Cursive | champ, boutons | « AB » saisi accepté ; Block testé ; Cursive : clic non abouti dans l'essai | aucun surcoût | OK partiel |
| Pierres surprise : None / Add Stones | boutons | Ajoute des pierres cachées | +$25 ($3 300 → $3 325) | OK |
| + Add Wedding Band | bouton | Ouvre « Matching Band » / « Custom Band » ; bouton « Remove Wedding Band » | non lu | OK |
| Save → | bouton | **Non actionné** (appelle probablement le panier, interdit par robots.txt) | non | non testé |
| Panier (« SHOPPING BAG ») | lien | `/cart` interdit par robots.txt, non ouvert | non | **non testé : panier interdit** |
| Mon compte, recherche | liens | `/account` et `/search` interdits : non ouverts | non | non testé |
| Téléphone (+1 248 723 7880), e-mail, partage Facebook/Instagram | liens | Présents ; non suivis | non | non testé |
| 3 pages de lieux, marques (Rolex, Tacori…), blogue, Signature Club, magazine | liens | Présents | non | non testés (hors sujet) |

## Options disponibles

- **Style** : solitaire, halo, halo caché, bezel, cathédrale, full pavé, toi et moi, trois pierres, départ de zéro.
- **Métaux** : 14K jaune, blanc, rose ; 18K jaune, blanc, rose ; platine ; mixte (tête et corps séparés).
- **Pierre** : naturel ou lab grown ; 9 formes (rond, ovale, princesse, émeraude, coussin, radiant, poire, marquise, asscher) ; 0,25 à 10 ct par saisie ; 1, 2 ou 3 pierres.
- **Monture** : tête (aucune, panier, halo, halo caché, bezel), 4 griffes classique ou compass, 6 griffes, bouts de griffes (claw, petite claw, rounded, tab), pavé sur griffes, corps rond ou carré, cathédrale, pavé du corps « Petite French », largeur 1,5 à 4 mm, taille US 3 à 13, confort standard ou comfort, gravure (14 caractères, Block ou Cursive), pierres surprise, alliance assortie ou sur mesure.
- **Assistant** : délai 1-4 semaines à 3-6 mois, magasin préféré, « Decide later » partout.
- **Services** (liens de pied de page) : conception sur mesure, réparation, Signature Club, « Anything Promise », 3 magasins.

## Prix, délais, retours, garanties

- **Prix** : « MSRP » de la monture seule (« Setting only ») dans le concepteur : 1 ct rond, solitaire, 14K jaune = **$1 398** ; chaque option change le prix à l'écran (valeurs ci-dessus, vérifié sur iPhone, lecture après 3 à 5,5 s). Pas de décomposition métal/façon/pierre ; pas de prix de pierre. Les fiches de la boutique n'ont pas été lues.
- **Délai** : assistant propose 1-4 semaines à 3-6 mois. Conditions générales : articles non en stock « 1 à 12 semaines en moyenne » ; poids carat total jusqu'à ±0,05 ct ; tolérances 0,25 mm (page Terms, vérifié).
- **Retours** : remboursement, échange ou crédit **dans les 10 jours** ; **commandes spéciales et bijoux sur mesure non remboursables** (`/policies/refund-policy`, vérifié). Mise de côté (layaway) tenue 120 jours.
- **Politique d'achats comparatifs** : « Comparison purchasing » interdit (acheter plusieurs pièces pour en garder une) ; non-respect évoqué pour garder les prix bas (Terms, vérifié).
- **Garantie** : « Anything Promise » : **1 an de protection gratuite** : entretien (polissage, resserrage, pierres perdues, mise à taille) plus perte, dommage, vol, disparition, voyage ; transférable ; application Luxsurance® ; exclusions mentionnées (page lue partiellement).
- **Certificats** : non lus (page `diamond-guide` : délai de chargement de 30 s, non lue).
- **Libellé du synthétique** : « Lab Grown » dans le concepteur.
- **Livraison, moyens de paiement, frais** : **non vus** (panier interdit ; page d'expédition non trouvée).
- **Devise / langue** : USD, anglais.

## Confiance et service

- Entreprise familiale « parmi les plus anciennes du sud-est du Michigan » ; 3 magasins ; marques de luxe (Rolex, Tacori, Messika…). Texte lu : page `service-page`.
- Conception sur mesure : « dessins à la main, images CAO, sculptures en cire » ; consultation sur rendez-vous.
- Page « Testimonials » existe (`/pages/testimonials`, autorisée) : non lue. Pas d'avis dans le concepteur.
- Photos/vidéos de fabrication et suivi de commande : non trouvés.
- Contacts : téléphone, e-mail, rendez-vous ; pas de WhatsApp.

## Points forts à retenir pour JR Diamond

1. **Concepteur 3D avec prix qui bouge à chaque option** (métal, pierre, largeur, taille, confort, gravure). Preuve : MSRP $1 398 → $1 970 (18K), $1 630 (platine), $2 650 (4 mm), $3 173 (comfort fit). Notre « Sur devis » reste l'écart principal.
2. **La taille de doigt et la largeur modifient le prix à l'écran** : transparence sur l'effet de la quantité de métal. Preuve : $2 375 (taille 3) → $3 300 (taille 13).
3. **Carat saisissable de 0,25 à 10, avec bornes claires** (0,1 corrigé en 0,25 ; 12 en 10). Preuve : champ de saisie testé.
4. **Capture de contact avec issue de secours** (« Continue without saving »), promesse « enregistrer et partager » et rendez-vous. Preuve : fenêtre « Your dream ring is almost ready! ».
5. **« Anything Promise »** (1 an de protection gratuite, transférable) : argument après-vente fort. Preuve : `/anything-promise-benefits`. Compare avec notre mise à taille offerte.
6. **Alliance assortie ou sur mesure dans le même concepteur** (« Add Wedding Band »). Preuve : panneau Matching/Custom Band.
7. **Assistant d'entrée avec « Decide later »** partout et récapitulatif en chips. Preuve : captures iPhone.

## Défauts observés

- **Concepteur 3D non chargé sur ordinateur** (3 essais) : le formulaire de capture n'apparaît pas ; en fin d'assistant l'écran reste « Something went wrong. Try again ». Cause non établie (inféré : appels à `jeweleros.com` refusés ou limités depuis notre environnement). Sur iPhone, mêmes appels réussis (réponses 200).
- **Prix de monture seule** : pas de total avec la pierre, d'où un prix affiché peu utile pour un acheteur ; les pierres ne sont pas choisies dans ce parcours (vérifié : le prix ne change pas avec naturel/synthétique).
- **Comportements de prix inattendus** : « Prong Pave None » plus cher que « Pave » ; sauts de lecture à vérifier (supposé : décalage d'affichage).
- **Politique « comparison purchasing »** : mentionnée dans les conditions, peu accueillante pour un client qui hésite.
- **Sur-mesure non remboursable**, comme chez Lewis ; retours à 10 jours seulement.
- **Panier interdit aux robots** : le parcours jusqu'au paiement n'est pas vérifiable.
- Étape 5 « magasin » obligatoire en apparence sur iPhone (seul « Decide later » permet de l'éviter).

## Limites de l'audit

- Concepteur observé seulement sur iPhone ; ordinateur non chargé (3 essais), sans contournement.
- Bouton « Save », panier, paiement, livraison, garanties détaillées, certificats, avis : non vus (robots.txt, ou non atteints).
- Quelques clics du concepteur ont échoué (Bezel, No Cathedral, Cursive, Pave Style) à cause de la mise en page changeante ; ils sont marqués comme tels.
- Prix lus à l'écran après 3 à 5,5 s ; l'ordre de certaines valeurs reste à confirmer.
- Firecrawl indisponible (crédits épuisés) ; lecture faite par Playwright.

## Sources

- https://lucidojewelry.com/pages/custom-ring-builder (assistant et concepteur, vérifié)
- https://jeweleros-custom.netlify.app/ (iframe du concepteur, robots.txt autorisé, vérifié)
- https://lucidojewelry.com/policies/refund-policy (vérifié)
- https://lucidojewelry.com/policies/terms-of-service (vérifié)
- https://lucidojewelry.com/anything-promise-benefits (vérifié)
- https://lucidojewelry.com/service-page (vérifié)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/lucido-fine-jewelry/` (hors dépôt)
