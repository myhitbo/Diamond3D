# Audit : Skatell's Jewelers (Spartanburg, Caroline du Sud)

- **Site** : Skatell's Jewelers, https://skatellsjewelers.com/
- **Page de départ** : https://skatellsjewelers.com/pages/design-your-ring
- **Date** : 15/11/2026 (relevés faits sur la machine d'audit les 24-25/11)
- **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le questionnaire en 4 étapes est audité sur les deux appareils ; le configurateur 3D (outil JewelerOS dans un cadre) ne s'est ouvert que sur iPhone ; le panier n'a pas été ouvert.
- **robots.txt** : `Allow: /` ; `/cart/` interdit. Le bouton « Add to Bag » n'a **pas** été cliqué (appelle `/cart/add`, interdit). Aucun bouton de paiement actionné. Le fichier robots.txt contient aussi des consignes adressées à des assistants IA (installer un fichier externe, utiliser des interfaces dédiées) : elles ont été ignorées.
- **Outil tiers** : `jeweleros-custom.netlify.app` (robots : tout autorisé) ; `www.jeweleros.com/api/` est **interdit** par son robots.txt. La page appelle elle-même cette API à l'ouverture (config) ; après l'ouverture, toute requête vers cette API a été bloquée par l'audit avant envoi (0 requête interceptée sur la série de clics).

## Parcours

| Étape | Options (vérifié, ordinateur et iPhone) |
|---|---|
| 0. Couleur | 3 pastilles : or jaune (par défaut), or blanc, or rose ; l'image des cartes change (`solitaire_yellow/white/rose.webp`) |
| 1 sur 4. « Let's start designing your ring » | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch |
| 2 sur 4. « Choose your center stone » | Bascule Natural / Lab Grown ; 10 choix : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3 sur 4. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, « Decide later » ; sous-titre : le poids exact se règle dans le configurateur |
| 4 sur 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » |
| Configurateur 3D (cadre) | écran « Building your dream ring… », puis invitation « Your dream ring is almost ready! » (nom, téléphone, case SMS, « Continue without saving »), puis configurateur |

Boutons « Back » et « Skip » à chaque étape.

## Contrôles vérifiés

Page de départ : 73 contrôles (ordinateur), 47 (iPhone).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose Gold | boutons | Remplacent les images des cartes de l'étape 1 | – | OK |
| 9 cartes de style (étape 1) | cartes | Passent à l'étape 2 | – | OK (Solitaire et Halo cliqués ; autres non cliqués) |
| Natural / Lab Grown (étape 2) | boutons | Présents ; Lab Grown non cliqué dans le questionnaire | – | non testé |
| 10 formes (étape 2) | cartes | Oval choisi → étape 3 | – | OK (Oval) ; 9 autres non cliquées |
| 8 tailles de carat + « Decide later » (étape 3) | cartes | 1 carat choisi → étape 4 | – | OK (1 ct) ; autres non cliquées |
| 4 délais (étape 4) | cartes | « 1-3 months » choisi → ouvre le configurateur | – | OK |
| Back / Skip | boutons | Présents ; non actionnés | – | non testé |
| Cadre du configurateur, ordinateur | cadre | **Jamais apparu en 40 s** (écran « Something went wrong / Try again » à 12 s lors d'un premier essai) ; deux appels `jeweleros.com/api/config` et `/log-error` en échec | – | **KO** (reproductible 2 fois sur ordinateur) |
| Cadre du configurateur, iPhone | cadre | Apparaît en 1,5 à 2,5 s ; écran de chargement puis invitation à saisir nom et téléphone ; « Continue without saving » (cliqué par coordonnées, sans rien saisir) ouvre le configurateur après ~12 s | « Engagement Ring MSRP 1 140 $ (Setting only) » | OK sur iPhone |
| Bouton « Save ring » | bouton | Présent, non cliqué (invite à saisir des données) | – | non testé |
| « + Add Wedding Band » | bouton | Présent, non cliqué | – | non testé |
| Accordéon « Metal » (Head & Band Color) | accordéon | Liste : 14K Yellow, 14K White, 18K Yellow, 14K Rose, 18K White, Platinum, 18K Rose, Mixed ; l'anneau et l'ambiance 3D changent | 14K jaune 1 140 $ ; 14K blanc 1 160 $ (+20 $) ; 18K rose 1 523 $ (+383 $ sur 14K jaune) ; platine : prix non relevé (clic ambigu) | OK (3 prix vérifiés) |
| Accordéon « Diamond » : Natural / Lab Grown | boutons | Lab Grown : clic non confirmé ; le prix affiché reste celui du **réglage seul** | 1 523 $ inchangé | partiel |
| Center Stones : One Stone, Two Stone, Three Stone | boutons | Présents ; non cliqués | – | non testé |
| Head : None, Basket, Halo, Hidden Halo, Bezel | boutons | Présents ; non cliqués | – | non testé |
| Prong count : 4 Classic, 4 Compass, 6 Prong | boutons | Présents ; non cliqués | – | non testé |
| Prong tips : Claw, Petite Claw, Rounded, Tab | boutons | Présents ; non cliqués | – | non testé |
| Prong Pave : None, Pave ; Band style Round/Square ; Cathedral/No Cathedral ; Pavé None/Petite/French | boutons | Présents ; non cliqués | – | non testé |
| Band width 1,5 à 4 ; taille US 3 à 13 ; Standard / Comfort Fit | curseurs/boutons | Présents ; non actionnés | – | non testé |
| Engraving : texte (14 caractères max), Block / Cursive | champ/boutons | Présents ; non saisis | – | non testé |
| Surprise Stones : None / Add Stones | boutons | Présents ; non cliqués | – | non testé |
| « Save » (pied) | bouton | « You can purchase as is or craft a fully custom ring » ; non cliqué | – | non testé |
| Image du configurateur | rendu | Image d'anneau 3D qui tourne selon le métal (vues différentes entre jaune, blanc, rose) ; 1 canevas dans le cadre | – | OK |
| Chat « Need a quote or have a question? Text here » | widget (textmechat) | Bulle ; **non ouvert** | – | présent |
| Accessibilité (userway) | bouton | Présent | – | présent |
| Add to Bag / Check Out du site | boutons | **Non cliqués** : panier interdit par robots.txt (`/cart/`) | – | non testé |
| Panier `/cart` | page | **Non ouvert** : l'ouverture a été refusée par le système de permissions de la session | – | non testé |

## Options disponibles

- **Métaux** : or 14 k jaune, blanc, rose ; or 18 k jaune, blanc, rose ; platine ; mixte.
- **Styles** : solitaire, halo, halo caché, lunette (bezel), cathédrale, tout pavé, toi et moi, trois pierres, « partir de zéro ».
- **Formes** : ronde, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant.
- **Origine** : naturel, synthétique (« Lab Grown », libellé du site).
- **Carat (questionnaire)** : 0,5 à 5 ; exact dans le configurateur.
- **Griffes** : nombre 4 classique, 4 compass, 6 ; bouts claw, petite claw, arrondi, tab ; pavé sur griffes.
- **Corps** : rond ou carré, cathédrale, pavé petit ou français, largeur 1,5 à 4 mm (unité non vue), taille US 3 à 13, confort ou standard.
- **Gravure** : 14 caractères, styles block et cursive. **Pierres surprise** : oui. **Alliance** : bouton « Add Wedding Band ».
- **Recherche de diamants** : lien « Diamond & Lab Grown Search » (`/apps/ring-creator/rb-stone-list…`), autorisé, non parcouru.

## Prix, délais, retours, garanties

- **Prix** : « MSRP » du **réglage seul** en dollars, mis à jour à chaque option (1 140 $ → 1 160 $ → 1 523 $ vérifiés) ; la pierre se choisit à part. Pas de décomposition.
- **Délai** : question « When do you need your ring? » (1-4 semaines à 3-6 mois) ; aucun délai de fabrication annoncé par le configurateur.
- **Livraison** (`/policies/shipping-policy`, lue) : États-Unis seulement, pas de boîte postale, signature obligatoire ; numéro de suivi par e-mail ; commandes spéciales payées à la commande.
- **Retours** (`/policies/refund-policy`, lue) : crédit ou échange 15 jours après livraison, avec facture, certificat et emballage ; **exclus** : commandes spéciales ou sur mesure, articles regravés ou mis à taille.
- **Financement** (`/pages/financing`) : Affirm et 1st Franklin Financial ; offre « SkaTELL Her and Save » : 500 $ de réduction sur achats de fiançailles éligibles.
- **Garanties** : aucune page de garantie ouverte.

## Confiance et service

- Magasin physique, 217 East Blackstock Road, Spartanburg ; téléphone (864) 576-6434 ; rendez-vous (« Book Appointment ») et assurance bijoux en pied de page.
- Avis : page « Testimonials » (textes signés d'initiales, sans date) ; aucune note chiffrée relevée.
- Certificats : mention « diamond/jewelry certificate » dans la politique de retour ; non vus dans le parcours.
- Preuves de fabrication : aucune photo ni vidéo d'atelier relevée ; la 3D est un rendu de catalogue (inféré).
- Langue : anglais ; devise : dollar. Cookies : un bandeau « allow all » ; invitation à saisir nom et téléphone avec case SMS **avant** le configurateur (iPhone).

## Points forts à retenir pour JR Diamond

1. **Questionnaire d'entrée en 4 étapes avec « Decide later » partout** : chaque étape se saute, pas de blocage. Preuve : boutons « Skip » et cartes « Decide later » (étapes 2 et 3).
2. **Prix du réglage mis à jour à chaque option** (1 140 → 1 160 → 1 523 $) : l'effet métal est visible tout de suite. Preuve : relevés ci-dessus.
3. **Option « Mixed » et pastille de couleur dès la première étape** : l'image de départ change avec le métal. Preuve : `solitaire_white.webp`, `solitaire_rose.webp`.
4. **Écran d'enregistrement du dessin** (« Auto-save & share your design », rendez-vous en magasin ou virtuel) : modèle de partage à reprendre sans exiger les coordonnées (JR Diamond propose déjà le bouton « Partager »).
5. **Remise de 500 $ sur appointment honoré** : montre que la prise de rendez-vous se paie en incitation.

## Défauts observés

- **Configurateur 3D inaccessible sur ordinateur** dans la session d'audit (deux essais : cadre absent après 40 s ; autre essai : « Something went wrong / Try again »). Vérifié ; cause non établie (proxy de l'audit ou service tiers : appels à `jeweleros.com/api/config` en échec).
- **Chargement de tout le catalogue** à l'ouverture : la page demande `collections/all/products.json?limit=250&page=N` en boucle jusqu'à la page 101 (relevé de 10 à 11 requêtes dans les 2 premières secondes ; la boucle continue ensuite).
- **Coordonnées demandées avant le configurateur** sur iPhone (nom, téléphone, SMS), même si « Continue without saving » existe en bas, en gris très pâle.
- **Prix du réglage seul** : le total avec pierre n'est pas visible ici ; l'écart prix du site / prix de la pierre n'est pas expliqué.
- Texte parasite `-->` en bas de la page (capture pleine page).
- Page FAQ générique (questions de site web, aucune sur les diamants ni les délais).

## Limites de l'audit

- Panier non ouvert (refus du système de permissions) et « Add to Bag » non cliqué (`/cart/` interdit) : récapitulatif, frais, délai et moyens de paiement non vus. Seule indication : logos Visa, Mastercard, American Express, Discover, PayPal en pied de page (vérifié sur la capture).
- Configurateur : testé sur iPhone seulement ; clics sur Platinum et Lab Grown ambigus (délai de réponse élevé), la plupart des options présentes mais non cliquées.
- Visuel principal : cartes du questionnaire visibles en environ 2,0 s (ordinateur) et 2,4 s (iPhone) ; cadre du configurateur en 1,5 à 2,5 s sur iPhone, puis ~12 s avant le rendu de l'anneau après « Continue without saving ». Mesures uniques.
- Aucun formulaire rempli, aucun chat ouvert, aucun compte créé.

## Sources

- https://skatellsjewelers.com/pages/design-your-ring (vérifié, ordinateur et iPhone)
- https://jeweleros-custom.netlify.app/?jewelerid=…&ring=… (cadre du configurateur, vérifié sur iPhone)
- https://skatellsjewelers.com/policies/shipping-policy et /policies/refund-policy (lus)
- https://skatellsjewelers.com/pages/financing, /pages/faqs, /pages/testimonials (lus)
- https://skatellsjewelers.com/robots.txt ; https://jeweleros-custom.netlify.app/robots.txt (lus)
