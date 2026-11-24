# Audit : Makriadis Jewelry (Athènes)

- **Site** : https://www.makriadis.com/ (atelier de famille depuis 1973 ; showroom Kornarou 2, Athènes, près d'Ermou [V : /i-ekthesi-mas])
- **Page de départ auditée** : https://www.makriadis.com/el/ringbuilder/engagement-ring-settings/
- **Date** : 15/11/2026 (contrôles faits dans la session du 24/11)
- **Appareils** : Chromium ordinateur 1366×900 (parcours complet) ; affichage iPhone 13 (pages de départ, mesure de vitesse, débordement) ; le parcours complet n'a pas été rejoué sur iPhone.
- **Statut** : **partiel** (constructeur parcouru de la base au panier ; plusieurs contrôles non testés, voir « Limites »).
- Légende : [V] vérifié, [I] inféré, [S] supposé. `robots.txt` : `Allow: /`, chaque adresse contrôlée avant ouverture ; aucun blocage, seulement un bandeau de cookies (refusé avec « Απόρριψη όλων »).

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| 1. Base (« Δέσιμο ») | `/el/ringbuilder/engagement-ring-settings/` puis `/ringbuilder/view-engagement-ring-setting/<modèle>?vid=…` | 35 bases ; styles, métal, forme, prix, tri ; fiche : métal 18 k jaune, blanc, rose [V] |
| Choix du type de diamant | fenêtre après « Επιλέξτε Αυτή Τη Βάση » | 4 types : blancs naturels, blancs lab grown, de couleur naturels, de couleur lab grown [V] |
| 2. Diamant | `/ringbuilder/lab-grown-diamonds?v=<id base>…` | 653 775 diamants synthétiques blancs ; 11 formes, prix, carat, couleur, coupe, pureté, certificat [V] |
| Fiche du diamant | `/ringbuilder/view-diamond/…?did=…&dtype=…` | Certificat, proportions, bouton « Choose This Diamond » [V] |
| 3. Bague finale | `/ringbuilder/view-ring/…?vid=…&did=…` | Taille EU 44 à 73 (pas de 0,5), gravure 15 signes, ajout au panier [V] |
| Panier | `/cart` | Récapitulatif, coupon, livraison, bouton « Ολοκλήρωση Παραγγελίας » (non cliqué) [V] |

Chaque étape reste modifiable (boutons « Αλλαγή » et « Προβολή » dans la barre de progression) [V : texte de la page].

## Contrôles vérifiés

### Liste des bases (ordinateur)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Diamond Band, Halo, Hidden Halo, Solitaire, Τρίπετρο, Vintage (6 cases « Σχέδια ») | filtre | Réduit la liste : 16, 17, 18, 34, 35, 35 bases [V]. Les nombres sont peu fiables (voir Défauts) | — | fonctionne |
| 14K rose, blanc, jaune ; 18K rose, blanc, jaune (6 cases « Μέταλλο ») | filtre | 13 bases pour chaque 14 k ; « 37 » pour chaque 18 k (plus que les 35 bases) [V] | — | fonctionne, compte incohérent |
| Asscher, Cushion, Emerald, Heart, Marquise, Oval, Pear, Princess, Radiant, Round (10 cases « Σχήμα ») | filtre | 6, 9, 13, 3, 8, 11, 9, 7, 7, 29 bases [V] | — | fonctionne |
| Prix min / max (champs « € 843 » et « € 5208 ») | champ | Bornes affichées ; non modifiées | de 843 à 5 208 € (bases) | non testé : saisie |
| Επαναφορά Φίλτρων | bouton | Remet la liste à zéro (retour à 35 sauf cas signalé) | — | fonctionne, voir Défauts |
| Tri « Τιμή (από χαμηλή σε υψηλή) / (υψηλή σε χαμηλή) / Νέα Άφιξη » | liste | 1re base : 843 € ; 2 926 € ; 2 058 € [V] | — | fonctionne |
| Δείτε περισσότερα | bouton | Passe de 24 à 29 cartes (filtre Round actif) [V] | — | fonctionne |
| Carte d'une base | lien | Ouvre la fiche (200) [V] | prix de la base seule | fonctionne |
| Sélecteur de devise EUR / GBP / USD | liste | Présent ; non changé | — | non testé |
| Langue « ΕΛΛΗΝΙΚΑ » (EN disponible) | lien | Présent ; hreflang el, en [V] | — | non testé |

### Fiche d'une base (modèle Eve, 843 €)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Swatches « 18K Κίτρινος / Λευκός / Ροζ Χρυσός » | choix | Trois métaux 18 k proposés ; le clic automatisé a échoué (aucun changement d'adresse ni de prix après 4 s) | non vérifié | **non testé** (clic expiré) |
| Cuts « Round » | étiquette | Une seule forme (Round) pour cette base ; 10 formes dans le filtre de la liste | — | lecture |
| Επιλέξτε Αυτή Τη Βάση | bouton | Ouvre la fenêtre des 4 types de diamant [V] | — | fonctionne |
| Επιστροφή Στην Αναζήτηση | bouton | Retour à la liste | — | non testé |
| Λίστα Επιθυμιών | bouton | Aucun changement du compteur (reste « 0 ») ; compte probablement requis [I] | — | non fonctionnel sans compte |
| Ερώτησεις | bouton | Aucune fenêtre ou formulaire détecté | — | non fonctionnel ou non détecté |
| Μοιραστείτε το | bouton | Clic accepté ; aucune fenêtre de partage détectée | — | non vérifié |
| Λεπτομέρειες Βάσης | volet | Montre métal 18 k blanc, style Solitaire, forme Round [V] | — | fonctionne |
| +30 210 3220569 | lien tel | Lien `tel:` | — | présent |

### Choix de diamants (653 775 synthétiques blancs)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 11 formes (Round, Princess, Cushion, E. Cushion, Asscher, Marquise, Oval, Radiant, Pear, Emerald, Heart) | cases | Round : 242 283 résultats ; Heart : 265 614 ; les comptes dépendent de l'état précédent (voir Défauts) | — | fonctionne |
| Prix min / max (100 à 1 500 000 €) | champ | Bornes affichées | diamant 100 € minimum | non testé (champs non retrouvés par le script) |
| Carat min / max (0,3 à 5,2 ct) | champ | Bornes affichées | — | non testé |
| Couleur D à L (9 cases), regroupées « Incolore, presque incolore, léger » | cases | Présentes | — | non testé |
| Coupe Excellent / Very Good / Good (« Στρογγυλό » seulement) | cases | Présentes | — | non testé |
| Pureté IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1 | cases | Présentes | — | non testé |
| Certificat GIA / IGI / GCAL / HRD | cases | GIA : 4 256 résultats (avec d'autres filtres actifs) ; IGI : liste vide | — | fonctionne, comptage douteux |
| Recherche par numéro de certificat | champ + bouton | Présent | — | non testé |
| Προηγμένα Φίλτρα | bouton | Clic accepté ; contenu non relevé | — | non vérifié |
| Επαναφορά Φίλτρων | bouton | Après reset, 264 782 résultats au lieu de 653 775 | — | défaut |
| Tri carat croissant / décroissant, prix croissant / décroissant | liste | Le script n'a pas retrouvé la liste | — | non testé |
| Vue « Πλέγμα » / « Λίστα » | boutons | Présents | — | non testé |
| Cases « Σύγκριση » (16 par page) + compteur | cases | Présentes, compteur à 0 | — | non testé |
| « video » sur certaines cartes | icône | Une vidéo du diamant existe pour certaines pierres [V : mention sur 4 cartes] | — | non lue |
| Carte (0,31 ct Round D VS1 Very Good IGI) | lien | Ouvre la fiche : n° de certificat LG707534560, table 59 %, profondeur 59 %, 4,39×4,47×2,6 mm, fluorescence none, symétrie VG, polissage Good [V] | 100 € | fonctionne |
| « Choose This Diamond » | bouton | Passe à la bague finale ; libellé en anglais dans une interface grecque | — | fonctionne |

### Bague finale et panier

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Taille « επιλέξτε μέγεθος δαχτυλιδιού » | liste | EU 44 à 73 par 0,5 ; rubriques « Δημοφιλές » 49, 52, 56 ; « Δεν ξέρω το μέγεθός μου » | aucun supplément | fonctionne |
| Boutons EU / US / UK | boutons | Cliqués ; les libellés de la liste n'ont pas changé | — | à vérifier |
| « Δεν ξέρω το μέγεθός μου » | option | Aucune fenêtre ni message visibles | — | sans effet visible |
| Gravure | champ | Texte de 15 caractères au plus, marque « Παρακαλώ εισάγετε… » ; non rempli | non affiché | présent |
| Αλλαγή (base, diamant) | liens | Présents | — | non testé |
| Προσθήκη Στο Καλάθι | bouton | Redirige vers `/cart` [V] | 843 + 100 = 943 € | fonctionne |
| Panier : coupon, « Ενημέρωση Καλαθιού », « Ολοκλήρωση Παραγγελίας » | champ, boutons | Présents ; commande non cliquée | — | non testé volontairement |

## Options disponibles

- **Métaux** : or 14 k et 18 k, jaune, blanc, rose (filtres) ; platine non vu [V].
- **Styles de base** : Diamond Band, Halo, Hidden Halo, Solitaire, Three-stone, Vintage [V].
- **Formes** : 10 pour les bases, 11 pour les diamants (dont Elongated Cushion) [V].
- **Diamants** : naturels blancs, synthétiques blancs, naturels de couleur, synthétiques de couleur (4 sections) ; certificats GIA, IGI, GCAL, HRD [V].
- **Tailles** : EU 44 à 73 ; gravure 15 signes ; devises EUR, GBP, USD ; langues grec et anglais [V].

## Prix, délais, retours, garanties

- **Décomposition** : le prix de la base et celui du diamant sont affichés séparément à chaque étape (base 843 €, diamant 100 €, total 943 €), TVA 24 % incluse [V : fiches et panier]. Aucune décomposition or / façon / marge.
- **Délai** : « fabriqué sur commande, prêt en 3 à 4 semaines » sur chaque fiche ; page livraison : stock 1 à 3 jours ouvrés, bague du constructeur 3 à 6 semaines, autres pièces environ 2 semaines [V : /methodoi-apostolis].
- **Livraison** : gratuite dans le monde (liste de pays exclus), assurée, transporteurs locaux et FedEx ; panier : « Δωρεάν μεταφορικά », « Παραλαβή από το Κατάστημα », « Αποστολή σε Αττική » [V].
- **Retours** : 30 jours après réception, bijou non porté, avec certificat. **Exceptions** : bagues faites à votre taille, bijoux personnalisés ou gravés = vente définitive ; frais de retour à la charge du client ; 30 € de frais d'expédition déduits d'un remboursement [V : /politiki-epistrofon]. La page livraison promet une livraison « gratuite » : contradiction apparente avec les 30 € retenus [I].
- **Garantie** : à vie, défauts de fabrication seulement, pour l'acheteur d'origine ; réparation faite ailleurs = garantie annulée [V : /eggyisi].
- **Paiement** : cartes Visa, MasterCard, UnionPay, Diners, Amex ; PayPal ; virement ; plan de mensualités sans intérêts pour les pièces du magasin ; les moyens ne sont pas affichés dans le panier [V : /methodoi-pliromis].

## Confiance et service

- Atelier de famille depuis 1973 ; deux téléphones et un e-mail dans l'en-tête ; bouton « Ερώτησεις » sans effet visible [V].
- Certificat de laboratoire cité dans le panier (numéro du diamant, coupe, couleur, pureté, code de la base, métal, taille) [V].
- Avis clients, photos ou vidéos d'atelier, suivi de commande : non vus [V : parcours] ; page « Κοσμήματα κατά παραγγελία » non ouverte.
- Libellé du synthétique : « Λευκά Lab Grown Διαμάντια », « Εργαστήριο Καλλιεργημένων Διαμαντιών » (« diamants cultivés en laboratoire ») [V].
- Vitesse : LCP 5,7 s sur la fiche d'une base, 4,5 s sur la liste (ordinateur) ; 6,6 s sur la liste, iPhone ; l'attente d'une image de produit visible a dépassé 40 s sur la liste, ordinateur, une fois, car les images sont chargées au défilement [V : mesure ; le délai exact est incertain].
- iPhone : pas de défilement horizontal (largeur 390 px) ; 24 à 31 éléments de moins de 32 px dans les 1 200 premiers pixels [V].

## Points forts à retenir pour JR Diamond

1. **Base et diamant séparés dès le premier écran**, chacun avec son prix et la TVA incluse : on voit « 843 € + 100 € = 943 € » avant le panier (fiches, panier `/cart`) [V].
2. **Immense choix de diamants avec certificat consultable** : 653 775 synthétiques, filtres jusqu'au n° de certificat ; fiche avec table, profondeur, dimensions en mm, fluorescence [V].
3. **Barre de progression modifiable** : la base et le diamant se changent à tout moment (« Αλλαγή », « Προβολή ») [V : texte].
4. **Panier qui garde le numéro de certificat, le code de la base et la taille** [V].
5. **Gravure limitée à 15 signes, annoncée avant l'ajout** [V : texte].
6. **Délai annoncé sur la fiche, avant l'achat** (3 à 4 semaines) [V].

## Défauts observés

- **Compteurs de filtres incohérents** : 37 bases pour un filtre 18 k alors que la liste n'en compte que 35 ; « Réinitialiser » laisse 264 782 diamants au lieu de 653 775 [V : exécutions du 24/11 ; automatisation par clics JavaScript, comportement réel à confirmer à la main].
- Fiche de base : la photo d'une bague finale est montrée avant le choix du diamant ; aucune vue 3D ni 360° ; le prix du métal n'est pas lisible (non testé).
- Interface mêlée : bouton « Choose This Diamond », « Subscribe », « Email Address » en anglais dans la version grecque [V].
- Boutons « Ερώτησεις », « Μοιραστείτε το », « Λίστα Επιθυμιών » : aucun effet visible sans compte [V].
- Délai de chargement lent (LCP 4,5 à 6,6 s), surtout sur iPhone [V].
- Contradiction livraison « gratuite » / 30 € retenus au remboursement ; vente définitive pour tout bijou à la taille ou gravé [V].
- Un diamant à 100 € est le prix d'entrée : prix affiché sans explication de sa composition [V].

## Limites de l'audit

- Non testés : changement de métal sur la fiche (clic expiré), prix et image selon le métal, champs de prix et de carat, coupe, pureté, couleur, recherche de certificat, tri des diamants, vue liste, comparaison, filtres avancés, diamants naturels et de couleur, vidéos des diamants, devise, langue anglaise, bouton « Ολοκλήρωση Παραγγελίας » (volontairement).
- Parcours complet sur ordinateur seulement ; sur iPhone, seules les pages de départ ont été ouvertes.
- Les clics de filtres ont été faits par script ; des comptes contradictoires peuvent venir de l'automatisation.
- Rien n'a été saisi (pas de gravure, pas d'e-mail, pas de compte).

## Sources

- https://www.makriadis.com/el/ringbuilder/engagement-ring-settings/ ; fiche https://www.makriadis.com/ringbuilder/view-engagement-ring-setting/monopetro-dachtylidi-arravonon-eve-with-18k-white-gold-metal-EVE-WG-18K-RD?vid=560043
- https://www.makriadis.com/ringbuilder/lab-grown-diamonds?v=54 ; fiche https://www.makriadis.com/ringbuilder/view-diamond/0.31-carat-round-shape-lab-grown-diamond?did=EE9943942&dtype=lab-grown-diamonds
- Bague finale https://www.makriadis.com/ringbuilder/view-ring/eve-swirl-solitaire-engagement-ring-4-with-0.31-carat-round-shape-lab-grown-diamond?vid=560043&did=EE9943942&dtype=lab-grown-diamonds ; panier https://www.makriadis.com/cart
- Politiques : /methodoi-apostolis, /politiki-epistrofon, /eggyisi, /methodoi-pliromis, /i-ekthesi-mas (même domaine).
