# Audit : 77 Diamonds, constructeur de bague en 3 étapes (Royaume-Uni, £)

| | |
|---|---|
| Site | 77 Diamonds Limited, société enregistrée en Angleterre (n° 05142579), 3 Hanover Square, Londres ; showrooms à Londres (Mayfair) et à Manchester ; site en 23 versions (dossier Europe) (V) |
| Page de départ | https://www.77diamonds.com/engagement-rings (galerie), puis une fiche, par exemple https://www.77diamonds.com/engagement-rings/delicacy-solitaire-round-cut-diamond-18k-white-gold/p/792 |
| Date | 15/11/2026 (mesures faites le 24/11/2026 selon l'horloge de la machine) |
| Appareils | Chromium headless 1366 × 900, langue en-GB ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour la galerie, la fiche, l'étape 2 et le panier (`/shop-bag`) ; « CHECKOUT » non ouvert. Plusieurs filtres et onglets non actionnés, voir « Limites » |
| robots.txt | Interdits : `/api`, `/*.aspx*`, `/*?c=`, `/shopnew`, `/Handlers`, `/Controls/`, `*gemcertificate*`, les blogs par langue et d'autres ; aucune de ces adresses n'a été ouverte. Adresses ouvertes contrôlées AUTORISÉ avec `robots.cjs`, y compris `/shop-bag` (V). Cloudflare sans défi en navigateur (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse en source) · **I** inféré · **S** supposé.

## Parcours

Le constructeur est un bandeau « Create Your Ring » : « 1 Select Your Setting », « 2 Select Your Diamond », « 3 Complete Ring » (V). Les étapes se lisent dans l'adresse (`step=item-diamond`).

| Étape | Adresse observée | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|---|
| Galerie | `/engagement-rings` | tri (4 choix), 8 styles, 4 métaux, 6 poids de carat, plus de 80 modèles nommés (V) | « From » par modèle, barré et soldé (V) | une photo par modèle, 2 vues (« Show image 1 », « Show image 2 ») (V) |
| 1. Fiche de monture | `/engagement-rings/<modèle>-<forme>-cut-diamond-<métal>/p/<n°>` | métal (6), forme (10), « ADD DIAMOND », « BOOK AN APPOINTMENT » (V) | monture seule, recalculée à chaque métal et chaque forme (V) | vue 360° de 75 images, change avec le métal et la forme (V) |
| 2. Choix du diamant | même adresse + `?diamond=…&item=180&mincarat=0.3&step=item-diamond&stone=1` | 4 onglets (Natural, Lab-grown, Coloured, Gemstones), 10 formes, carat, couleur, pureté, taille, prix (V) | barre fixe « SETTING SELECTION / DIAMOND / TOTAL » mise à jour (V) | vignette de monture et icône de pierre (V) |
| 3. Complete Ring / panier | `/shop-bag` | taille de doigt (« Change »), « Remove », code promo, « CHECKOUT » (V) | total, livraison, remise (V) | vignette |

Remarque : le bouton « ADD TO BASKET » de la barre fixe de l'étape 2 mène **directement au panier** sans passer par une page « 3 Complete Ring » distincte ; la taille de doigt est **déjà fixée à M** dans le panier sans que je l'aie choisie (V).

## Contrôles vérifiés

### Galerie `/engagement-rings`

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « US / GBP » | bouton | sélecteur de lieu et devise ; à l'ouverture d'une fiche : « Would you like to change the location and currency to USA / USD? » avec « YES » et « NO, THANKS » (V) | devise | fenêtre vue, « NO, THANKS » cliqué ; « YES » non cliqué |
| « Need Help? », « Book an Appointment », « Chat / Call / Book » | boutons, liens | `/book-an-appointment`, `tel:`, discussion ; non ouverts (V pour les adresses) | — | liens vus |
| Menu (8 entrées) | liens | Engagement Rings, Wedding Rings, Eternity Rings, Jewellery, Diamonds, Gemstones, Bespoke, Education (V) | — | adresses lues |
| « Select Your Diamond » | bouton | en tête de galerie (V) | — | non cliqué |
| Tri | menu | « Most Relevant », « New Arrivals », « Price Ascending », « Price Descending » (V) | — | liste lue, non appliquée |
| Cartes de modèle (plus de 80) | liens | ouvrent une fiche `…/p/<n°>` ou un constructeur `…/solitaire/round?item=1578&metal=2&stone=1` (V) | « From £… » barré puis soldé, par exemple Amara £433,61 → £372,91 (V) | fonctionne |
| « Show image 1 / 2 » | boutons | deux vues par carte (V) | — | présents, non cliqués |
| Étiquette « BESTSELLER » | étiquette | sur plusieurs cartes (V) | — | lue |
| Liens de style : SOLITAIRE, TRILOGY, HALO, DIAMOND BAND, VINTAGE, TOI ET MOI, GEMSTONE, COLOURED DIAMOND | liens | `/engagement-rings/solitaire`, `/trilogy`, `/halo`, `/diamond-band`, `/vintage`, `/diamond-collections/toi-et-moi`, `/engagement-rings/diamond?stone=2&gem=367&item=-4`, `/engagement-rings/diamond?item=-3` (V) | — | adresses lues, non ouvertes |
| Liens de métal : Yellow gold, White gold, Rose gold, Platinum | liens | `/engagement-rings/yellow-gold` etc. (V) | — | adresses lues |
| Liens de carat : 0,50, 1,00, 1,50, 2,00, 2,50, 3,00 | liens | `/engagement-rings/0-5-carat` … `/3-carat` (V) | — | adresses lues |
| Carrousel « previous-button / next-button » | boutons | présents sous la galerie (V) | — | non cliqués |
| FAQ (une quinzaine de questions en volets) | volets | taille, entretien, finance, retour, délai, assurance, etc. (V) | — | adresses de contenu lues par l'outil de lecture |
| « ring size guide », « printable ring sizer » | liens | `/engagement-rings/ring-size-chart`, PDF `/assets/Files/77_Diamonds_Ring_Sizer.pdf` (V) | — | liens vus |
| Newsletter | champ + bouton | champ courriel ; rien saisi | — | non actionné |

### Fiche de monture (Delicacy Solitaire, `p/792`)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Vue 360° | image + souris | « Move mouse left and right to control 360° view » ; l'image change quand la souris traverse la zone (empreinte de capture différente avant et après) (V) | — | fonctionne |
| « Go to frame 1 … » | boutons | 11 boutons de position vus, ils changent l'image (empreinte différente) (V) | — | fonctionne |
| Flèches précédent / suivant | boutons | présents (V) | — | clic du bouton « suivant » non abouti (introuvable dans le test) |
| « Shown with a 1.00ct diamond. » | texte | le rendu 360° est toujours fait avec une pierre de 1 ct (V) | — | lu |
| Métal (6 choix : 9 k blanc, 9 k jaune, 18 k blanc, 18 k jaune, 18 k rose, Pt) | liens | chaque métal ouvre une fiche à son adresse (`…-9k-white-gold/p/2647`, `…-platinum/p/987`) (V) | voir « Prix » | fonctionne |
| Forme (10 choix : Round, Oval, Pear, Marquise, Emerald, Radiant, Cushion, Princess, Heart, Asscher) | liens | chaque forme ouvre une fiche (`delicacy-solitaire-oval-cut-diamond-18k-white-gold`) (V) | — | adresses lues, une forme non ouverte |
| « ADD DIAMOND » | bouton | mène à l'étape 2 en 6,2 s (V) | — | fonctionne |
| « BOOK AN APPOINTMENT » | bouton | présent (V) | — | non cliqué |
| « PRODUCT DETAILS » | volet | non déplié dans le test ; le texte affiche : réglage solitaire, largeur 2,00 mm, 4 griffes ; au-delà de 1,20 ct, une petite bordure de métal (« bezel ») sous la pierre (V) | — | contenu lu |
| « DESIGNED & HANDCRAFTED BY 77 », « LIFETIME WARRANTY », « FREE INSURED DELIVERY », « 30 DAY RETURNS », « 60 DAY RESIZING », « SENT WITH LOVE » | volets | textes lus dans la page (V) | — | lus |
| « Have a question? Chat with us! » | bouton | présent à droite (V) | — | non cliqué |
| « Back to gallery » | bouton | présent (V) | — | non cliqué |
| Avis clients (322, note 4,9) | bloc | avis datés avec nom du « jewellery specialist » (V) | — | lus |

### Étape 2 : choix du diamant

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Onglets Natural, Lab-grown, Coloured, Gemstones | boutons | présents ; Natural affiche 220 527 diamants (V). Clic sur « Lab-grown » : le test a atteint un lien du menu (`/engagement-rings/lab-grown-diamonds`) au lieu de l'onglet | — | effet de l'onglet non établi |
| Shape : 10 boutons | boutons | présents ; clic sur « Oval » sans changement de total ni d'adresse lu | — | effet non établi |
| Carat min / max | listes | de 0,18 ct à 30 ct (liste de valeurs par paliers) ; min = 1,00 ct : 220 527 → 19 326 diamants (V) | **le prix de la monture monte** : £684,24 → £920,21 (V) | fonctionne |
| Colour | curseur | de L à D (V) | — | non actionné |
| Clarity | curseur | de SI2 à FL (V) | — | non actionné |
| Cut | curseur | Good, Very Good, Excellent, Cupid's Ideal (V) | — | non actionné |
| Price min / max | liste, champ | de £100 à £5 000 000 (V) | — | non actionné |
| « Advanced Filters » | bouton | clic sans ouverture lue | — | effet non établi |
| « List » / « Visual » | boutons | présents ; clics non aboutis dans le test | — | non établi |
| Case à cocher, champ de recherche | champs | présents (V) | — | non actionnés |
| Cartes de pierre | tuiles | 20 par page (« 20 / 19 326 Results ») ; carat, couleur, pureté, taille, laboratoire (HRD, IGI), prix hors TVA ; mention « THIS IS A SAMPLE IMAGE » sur certaines (V) | £1 590 à £1 600 pour 1,00 ct H SI1 | lues |
| Barre fixe | bloc | « SETTING SELECTION », « DIAMOND », « TOTAL (ex VAT) » ; mise à jour avec la pierre choisie : £2 354,50 pour une pierre de 1,00 ct (V) | oui | fonctionne |
| « ADD TO BASKET » | bouton | ouvre `/shop-bag` (V) | — | fonctionne |

### Panier `/shop-bag`

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Ligne de bague | bloc | « Delicacy, White Gold (18k), Ring Size: M » ; « Change » à côté de la taille (V) | £684,24 (barré £855,30) | lu |
| Ligne de pierre | bloc | « 0.30 Carat Round Diamond, H Colour, SI1 Clarity, HRD Certificate, Code: RBCPDU62KAJQ » ; « Change » (V) | £210,31 | lu |
| « Remove » | bouton | présent | — | non cliqué |
| « Do you have a promo code? » | volet + champ | champ prérempli « FRIDAY2026 », « Code applied » (V) | remise £171,06 | appliqué sans saisie |
| « Back to shopping » | lien | `/engagement-rings` (V) | — | lien vu |
| « CHECKOUT » | lien | `/checkout` ; non ouvert | — | non testé |
| « SIGN IN », « Register » | liens | pour enregistrer le panier : `/login`, `/register` (V) | — | non ouverts |
| « Chat », « Call », « Book » | boutons | présents ; non ouverts | — | liens vus |
| Volets « LIFETIME WARRANTY », « FREE INSURED DELIVERY », « 30 DAY RETURNS », « SECURE SHOPPING », « SENT WITH LOVE » | volets | textes lus (V) | — | lus |

Absent : essai sur la main, réalité augmentée, enregistrement de la composition sans compte, comparateur de montures, partage (V : aucun contrôle de ce type dans les listes). Gravure : annoncée à £30 et 15 caractères dans la FAQ, **aucune option de gravure** repérée dans le parcours ni dans le panier (V pour l'absence dans le panier, I pour une option ailleurs).

## Options disponibles

- **Styles** : Solitaire, Trilogy, Halo, Diamond Band, Vintage, Toi et Moi, Gemstone, Coloured Diamond (V).
- **Métaux** (par modèle) : 9 k blanc, 9 k jaune, 18 k blanc, 18 k jaune, 18 k rose, platine ; certains modèles n'en ont que quelques-uns (V pour Delicacy).
- **Formes** : 10 (Round, Oval, Pear, Marquise, Emerald, Radiant, Cushion, Princess, Heart, Asscher) (V).
- **Types de pierre** : Natural, Lab-grown, Coloured, Gemstones (V) ; saphir, émeraude, rubis dans le menu (V).
- **Filtres de pierre** : carat 0,18 à 30 ; couleur L à D ; pureté SI2 à FL ; taille Good à Cupid's Ideal ; prix £100 à £5 000 000 ; filtres avancés (V).
- **Certificats** : HRD vu au panier ; IGI vu dans les résultats ; GIA, IGI, HRD annoncés dans le dossier Europe (V).
- **Taille de doigt** : choisie dans le panier (« Change »), M par défaut (V).
- **Services** : rendez-vous en showroom ou en visio, discussion, téléphone, finance, retrait en showroom à Londres ou Manchester (V).

## Prix, délais, retours, garanties

- **Affichage du prix** : prix barré puis prix soldé (remise « Black Friday » de 20 %, soit 684,24 / 855,30 = 0,80 : I), mention « (ex VAT) » en rouge. La monture seule est affichée ; la pierre est ajoutée dans la barre fixe ; total « ex VAT » (V). Pas de décomposition or / façon / pierre (V).
- **TVA** : cette session était hors Royaume-Uni (proxy), le panier affiche « Inc. £0.00 VAT » ; le site dit « You will be charged your local VAT rate of (20%) directly at checkout » (`/delivery-and-returns`) (V). Le total TTC britannique n'a donc **pas** été observé (S pour son montant).
- **Prix de la monture Delicacy selon le métal** (soldé / barré) : 9 k blanc £470,89 / £588,61 ; 9 k jaune £427,78 / £534,72 ; 18 k blanc £684,24 / £855,30 ; 18 k jaune £626,84 / £783,56 ; 18 k rose £638,36 / £797,96 ; platine £560,11 / £700,13 (V). Le platine est affiché moins cher que l'or blanc 18 k, ce qui surprend (I : prix par modèle et par métal fixés à la main plutôt que calculés sur le poids).
- **Prix selon le carat** : la monture passe de £684,24 à £920,21 quand on exige une pierre d'au moins 1,00 ct (V) ; la FAQ dit aussi qu'au-dessus de la taille N le prix augmente (métal et pavé en plus) (V).
- **Délai** : « environ 15 à 20 jours ouvrés » pour la plupart des pièces, jusqu'à 8 semaines pour les pièces serties (halo, vintage, trilogie) ; accélération payante : £125 (solitaire) ou £175 (serti) (FAQ, V). Aucune date de livraison n'est affichée dans le parcours ni dans le panier (V).
- **Livraison** : gratuite et assurée, par Royal Mail Special Delivery (page livraison) ou FedEx / DHL (fiche) ; emballage discret ; retrait en showroom ; envoi à une autre adresse avec justificatif ; PayPal, Amazon Pay, V12 et Klarna imposent l'adresse de facturation (V). Panier : « Insured Delivery : Free ».
- **Retours** : 30 jours après réception pour un remboursement ou un échange, **14 jours au-delà de £15 000** ; bijou gravé ou sur mesure non remboursable ; remboursement en 10 jours ouvrés, jusqu'à 30 selon le paiement (FAQ et `/delivery-and-returns`, V). La bague composée en ligne (non gravée) est remboursable.
- **Mise à taille** : gratuite dans les 60 jours (jusqu'à 2 tailles) ; 3 tailles ou plus : £50 ; refonte : dès £100 ; après 60 jours : £100 ; certaines bagues (alliances pleines serties, sur mesure) ne se retaillent pas ; un kit de mesure gratuit part avec chaque commande (FAQ, V).
- **Garantie** : à vie sur les défauts de fabrication, sous réserve d'un contrôle envoyé tous les 2 à 3 ans ; « Clean & Polish » à £75 (FAQ, V).
- **Moyens de paiement et finance** : Splitit (3 mensualités sans intérêt) pour les États-Unis, V12 et Klarna annoncés pour le Royaume-Uni ; PayPal, Amazon Pay (V). La page de finance de cette session ne montrait que Splitit, car l'accès venait de l'étranger (I). Moyens de paiement du paiement : non vus.

## Confiance et service

- **Certificats** : « each diamond comes with its own grading report », « 1.8 million of them » (`/our-promises`, V) ; un synthétique reçoit un certificat qui le dit (FAQ, V) ; garantie écrite « conflict-free » (Kimberley) (FAQ, V).
- **Libellé du synthétique** : « Lab-grown » (onglet), « lab-growns » dans la FAQ ; les naturels et les synthétiques sont séparés pour éviter la confusion (V).
- **Avis** : note 4,9 en pastille flottante ; 322 avis sur la fiche Delicacy ; chaque avis nomme le conseiller (V). Données du site, sans audit.
- **Conseillers** : « Jewellery Specialist » nommé par client, rendez-vous en showroom ou en vidéo, WhatsApp (bouton vert) (V pour la présence).
- **Preuves de fabrication** : « handcrafted and made-to-order in the centre of Mayfair », poinçonnage au bureau d'essai indépendant (« independent Assay office ») ; certificat de poinçon `Hallmark-certificate.pdf` lié en pied de page ; **aucune photo ni vidéo de fabrication ni suivi illustré** dans le parcours (V pour le parcours). Suivi par numéro d'expédition après l'envoi (FAQ, V).
- **Sur mesure** : CAO avant production, croquis validé (FAQ, V).
- **Devises et langues** : £ ; sélecteur « US / GBP » (V) ; 23 versions de langue (dossier Europe, V).

## Points forts à retenir pour JR Diamond

1. **Vue 360° de 75 images qui suit la souris**, avec une pierre de 1 ct de référence. Preuve : fiche `p/792`, empreinte d'image différente avant et après le survol, texte « Move mouse left and right to control 360° view » (V). Le prototype 3D de JR Diamond va plus loin (orbite libre), mais l'attente est posée.
2. **Barre fixe « monture + pierre = total »** visible pendant tout le choix de la pierre. Preuve : étape 2, £2 354,50 pour une pierre de 1,00 ct (V). À reprendre : le client voit à chaque filtre le prix de la bague entière, ce que « Sur devis » ne permet pas.
3. **Lien profond partageable à l'étape 2** (`?diamond=…&step=item-diamond`), qui rouvre exactement la composition. Preuve : l'adresse complète s'ouvre directement sur l'étape 2 (V). Correspond au point « seule action sans dépendance » de la synthèse (mettre la configuration dans l'adresse).
4. **Une adresse par métal et par forme** : chaque choix est une page distincte avec sa série d'images. Preuve : `…-9k-white-gold/p/2647`, `…-platinum/p/987`, `…-oval-cut-…` (V).
5. **Retours et mise à taille chiffrés** : 30 jours, 14 jours au-delà de £15 000, mise à taille gratuite 60 jours puis £50 / £100, kit de mesure offert. Preuve : FAQ et `/delivery-and-returns` (V). Modèle de page « retours » complète.
6. **Moyens de contact en barre fixe** (Chat, Call, Book) et WhatsApp sur toutes les étapes. Preuve : bandeau du panier et bouton vert (V).
7. **Prix d'expédition de la commande urgente affiché** (£125 / £175). Preuve : FAQ (V). Résonne avec « sans option express » chez JR Diamond : l'honnêteté sur le délai est un argument.

## Défauts observés

- **Aucune date de livraison** dans le parcours ni dans le panier, seulement une fourchette en FAQ (15 à 20 jours, 8 semaines pour les pièces serties) (V). Le délai se lit mal pour un acheteur pressé.
- **Taille de doigt déjà posée à M** dans le panier sans avoir été demandée (V). Risque d'oubli du client.
- **Prix barré et prix soldé affichés avec « (ex VAT) »** ; le panier montre « Subtotal £894,54 », puis « Discount (£171,06) », puis « Total £894,54 » : la remise est déjà dans le sous-total, la ligne ne se lit donc pas (V).
- **Un code promo (FRIDAY2026) est déjà appliqué au panier**, sans saisie (V).
- **Prix du platine inférieur à celui de l'or blanc 18 k** pour la même monture (V) : incohérence apparente.
- **Le prix de la monture dépend du carat de la pierre choisie** (£684,24 à £920,21), sans explication visible sur la fiche (V).
- **Rendu 360° toujours montré avec une pierre de 1 ct**, quelle que soit la pierre choisie ensuite (V).
- **Page de finance** qui ne mentionne que les États-Unis lorsqu'on arrive de l'étranger (V).
- **Étape « 3 Complete Ring »** sautée : le client ne voit jamais un écran de récapitulatif avec l'image de sa bague composée (V pour le parcours, I pour la cause).

## Mesures

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Galerie `/engagement-rings` | premier visuel 3,0 s | 3,5 s |
| Fiche `p/792` | 2,4 s et 4,4 s (deux essais) | 3,2 s |
| Étape 2 (« ADD DIAMOND » → page) | 6,2 s | atteinte, filtres repliés, aucun dépassement horizontal |
| Panier | atteint après l'étape 2 | bouton « ADD TO BASKET » non retrouvé par le test |

Mesure : délai entre l'ouverture (`domcontentloaded`) et la première image de plus de 250 px visible dans l'écran, ou un `canvas` ou `video`. Connexion de l'environnement d'audit, via proxy : valeurs relatives.

## Limites de l'audit

- **Non testés** : onglets « Lab-grown », « Coloured », « Gemstones » de l'étape 2 (le test a visé un lien du menu) ; boutons de forme de l'étape 2 (« Oval » sans effet lu) ; « Advanced Filters » ; bascule « List » / « Visual » ; curseurs de couleur, pureté, taille, prix ; « Show image 1 / 2 » ; carrousel ; flèches précédent / suivant de la vue 360° ; « YES » du changement de devise ; changement de taille dans le panier ; « Remove » ; paiement.
- **Mobile** : galerie et fiche mesurées ; l'étape 2 atteinte avec un menu de filtres replié ; l'ajout au panier n'a pas été mené à bien sur iPhone.
- **Une seule monture explorée** (Delicacy) et un seul métal mis au panier (18 k blanc, pierre de 0,30 ct H SI1 HRD).
- **TVA et prix britanniques TTC non observés** : la session sortait par un proxy hors du Royaume-Uni ; le panier affiche « Inc. £0.00 VAT ».
- **Panier non vidé** à la fin de l'audit (session sans compte).
- Pages de politique (`/delivery-and-returns`, `/finance-information`, `/our-promises`, `/faq.html`) lues par l'outil de lecture ; dates d'acquisition du 13 au 24/11/2026.
- Remise « Black Friday » en cours : les prix barrés et soldés ne sont pas ceux d'un jour ordinaire.

## Sources

Pages ouvertes dans Chromium (24/11/2026) :
- https://www.77diamonds.com/engagement-rings
- https://www.77diamonds.com/engagement-rings/delicacy-solitaire-round-cut-diamond-18k-white-gold/p/792 (et variantes `…-9k-white-gold/p/2647`, `…-9k-yellow-gold/p/2657`, `…-18k-yellow-gold/p/857`, `…-18k-rose-gold/p/922`, `…-platinum/p/987`)
- https://www.77diamonds.com/engagement-rings/delicacy-solitaire-round-cut-diamond-18k-white-gold/p/792?diamond=RBCPDU62KAJQ&item=180&mincarat=0.3&step=item-diamond&stone=1
- https://www.77diamonds.com/shop-bag

Pages lues par l'outil de lecture :
- https://www.77diamonds.com/delivery-and-returns
- https://www.77diamonds.com/finance-information
- https://www.77diamonds.com/our-promises
- https://www.77diamonds.com/faq.html

Dossier de base : `docs/concurrence/2026-11-15_europe.md`. Contrôle des règles d'accès : `robots.cjs` (AUTORISÉ) sur la galerie, la fiche, l'étape 2, `/shop-bag` et les pages de politique.
