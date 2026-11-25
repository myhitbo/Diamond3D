# Audit : DiamondJools (Athènes)

> **[P1] pour tout le rapport (relevé le 25/11)** : le robots.txt du site interdit tout aux agents Claude (`Disallow: /` dans un groupe nominatif ClaudeBot / anthropic-ai). L'outil de contrôle ne lisait que le groupe `*` (défaut corrigé le 25/11) : l'audit l'a suivi à tort. Constats gardés pour mémoire, valeur [P1], jamais repris comme vérifiés.

- **Site** : https://www.diamondjools.gr/ (atelier « in-house » ; boutiques à Athènes [V : en-tête « Σχεδιασμένα & κατασκευασμένα στην Αθήνα »])
- **Page de départ auditée** : https://www.diamondjools.gr/monopetra/ftiakse-to-diko-sou/settings
- **Date** : 15/11/2026 (contrôles faits dans la session du 24/11)
- **Appareils** : Chromium ordinateur 1366×900 (parcours complet) ; affichage iPhone 13 (vitesse et débordement seulement).
- **Statut** : **partiel** (parcours complet jusqu'au tiroir du panier ; **la page `/cart` n'a pas été ouverte** car `robots.txt` l'interdit, comme `/checkout` et `/sign-in`).
- **Écart robots.txt probable (relevé le 24/11)** : le robots.txt interdit tout chemin commençant par `/cart` ; le bouton « Συνέχεια » qui remplit le tiroir passe très probablement par un tel chemin (`/cart/add` sur ce type de boutique) [I]. Les constats tirés du tiroir du panier portent **[P1]**, non revérifiés.
- Légende : [V] vérifié, [I] inféré, [S] supposé. Bandeau de cookies refusé (« Απόρριψη »).

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| 1. Base (« Επιλέξτε Βάση ») | `/monopetra/ftiakse-to-diko-sou/settings` | 90 modèles (prix « à partir de » 590 à 1 405 € et plus), tri 4 ; panneau : forme, couleur de métal, titre 14 ou 18 k, 5 photos, 360°, zoom [V] |
| 2. Diamant | `/diamonds?shape=ROUND&Type=natural&caratsMin=0.6&caratsMax=3&color=G,F,E,D&clarity=VS2…FL&enabledShapes=ROUND&continue=1` | Naturel ou synthétique, 8 formes, carat, couleur, pureté, coupe, prix, certificat [V] |
| 3. Finalisation | `/monopetra/ftiakse-to-diko-sou/personalize?design=…&v=…&d=…` | Taille du diamant (aperçu), taille de doigt, gravure, mensualités, délai [V] |
| Panier | tiroir (bouton « Καλάθι Αγορών ») | Lignes, remise, livraison, total, bouton « ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ » (non cliqué) [V] | [P1]

Le diamant peut être choisi avant la base (page `/diamonds`) ; barre de progression avec « Προβολή » et « Αφαίρεση » pour chaque étape [V].

## Contrôles vérifiés

### Étape 1 : choix de la base (modèle Everly)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Carte d'un modèle (15 visibles : Everly, Lilian, Kalliope, Olivia, Daisy, Amelia, Veronica, Luna, Eliza, Carmen, Hazel, Elowen, Aurelia, Scarlet, Chloe) | bouton | Ouvre le panneau de configuration, adresse avec `design=` et `v=` [V] | Everly dès 1 030 € | fonctionne |
| Tri : prix croissant / décroissant, plus populaires, plus récents | liste | Présent ; non changé | — | non testé |
| « Φίλτρα + » | bouton | Clic automatisé expiré ; contenu non relevé | — | **non testé** |
| Forme « Στρογγυλό » | bouton | Seule forme proposée pour Everly | aucun changement | fonctionne |
| Couleur « Λευκόχρυσο / Κίτρινο χρυσό / Ροζ χρυσό » | boutons | La photo change (fichiers `…_W_…`, `…_Y_…`, `…_P_…`) et le code article change (LEF, KIT, ROZ) [V] | 1 030 € dans les trois | fonctionne |
| Titre « K14 » / « K18 » | boutons | Code article K14 / K18 ; la photo ne change pas [V] | **1 030 € → 1 270 € (+240 €)** | fonctionne |
| Miniatures « Φωτογραφία 1 à 5 », flèches précédent et suivant | boutons | Ouvrent les 5 vues [V] | — | fonctionne |
| « Προβολή 360 μοιρών » | bouton | Charge une zone interactive (un `canvas` apparaît) ; rendu 3D réel non jugé en détail [V] | — | fonctionne |
| « Μεγέθυνση » | bouton | Ouvre le zoom ; la touche Échap ferme **tout le panneau** et perd la sélection [V] | — | fonctionne, défaut |
| « Δείτε τη σελίδα του προϊόντος » | lien | Mène à `/p/everly-…/1-50ct-round-natural-pave-lefkochryso-14k` (fiche d'un modèle à 1,50 ct) [V] | — | lien présent |
| « Περιγραφή προϊόντος + » | volet | Ouverture non constatée par le script | — | non testé |
| « Κλείσιμο και επιστροφή στα σχέδια » | bouton | Présent | — | non testé |
| « Επόμενο — επιλογή διαμαντιού » | bouton | Clic normal expiré (élément jamais « stable ») ; clic forcé : ouvre l'étape 2 [V] | — | fonctionne (forcé) |

### Étape 2 : choix du diamant

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Φυσικό » / « Εργαστηριακό » | boutons | Naturel : 293 571 diamants ; synthétique : 362 877 [V] | — | fonctionne |
| Formes : Στρογγυλό, Οβάλ, Emerald, Δάκρυ, Τετράγωνο, Cushion, Μαρκίζα, Καρδιά | boutons | Synthétique : ovale 62 835, poire 43 752, cœur 18 689, rond 42 509 [V] ; autres formes « Μη διαθέσιμο » quand une base impose le rond | — | fonctionne |
| Carats min / max (liste de 0,18 à 5,00) | listes | Présentes ; préréglées 0,6 à 3 ct depuis la base | — | non testé |
| Couleur J à D, pureté I1 à FL, coupe F / GD / VG / EX | curseurs | Présents, préréglés G à D, VS2 à FL | — | non testé |
| Prix min / max | champs | Bornes 255 à 6 694 105 € (liste complète) | — | non testé |
| Certificat, polissage, symétrie, fluorescence | groupes | Présents | — | non testé |
| Boutons « i » (Λεπτομέρειες) | boutons | Infobulles | — | non testé |
| Recherche (champ + bouton) | champ | Présente | — | non testé |
| « Όλα / Πρόσφατα / Σύγκριση » | onglets | Compteurs « Πρόσφατα (1) » après un choix ; « Σύγκριση (0) » | — | non testé |
| « Πλέγμα » / « Λίστα » | boutons | Changent l'affichage sans erreur [V] | — | fonctionne |
| Puces de filtres actifs et « Καθαρισμός φίλτρων » | boutons | Présentes ; non cliquées | — | non testé |
| Carte de diamant (type, lab, IGI ou GIA, forme, carat, couleur, pureté, coupe, n° d'identification, prix) | carte | Exemple synthétique : rond 0,32 ct D VS2 VG, IGI, 270 € [V] ; naturel : rond 0,60 ct F VS2 VG, IGI, 925 € [V] | prix du diamant seul | fonctionne |
| « Προβολή 360 » / « Περιστροφή 360° » (par carte) | boutons | Ouvre un rapport électronique IGI dans une fenêtre (« ELECTRONIC COPY … REPORT NUMBER 811616995 ») [V] | — | fonctionne ; contenu du 360° non relevé |
| « Πιστοποιητικό GIA / IGI », « Πιστοποίηση » | boutons | Rapport en ligne | — | fonctionne |
| « ΕΠΙΛΕΞΤΕ ΔΙΑΜΑΝΤΙ » | bouton | Sélectionne ; apparaissent « × » et « ΕΠΟΜΕΝΟ ΒΗΜΑ » [V] | — | fonctionne (forcé) |
| « Ρωτήστε έναν ειδικό » | bouton | Présent ; non ouvert | — | non testé |

### Étape 3 : finalisation et panier

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Curseur « Μέγεθος διαμαντιού » (0,20 à 5 ct, plage 0 à 1000) | curseur | Passer de 0,60 à 0,65 ct change l'aperçu (« Round, Side Stones, Λευκό, 0.65 καράτια », « Ενδεικτικό μέγεθος ») sans changer le diamant ni le prix [V] | aucun | fonctionne (illustratif) |
| Rapport IGI affiché dans la page + lien « IGI 811616995 ↗ » | bloc, lien | Rapport complet : forme et coupe, 0,60 ct, F, VS2, polissage EX, symétrie EX, fluorescence NON [V] | — | fonctionne |
| « Μέγεθος δαχτυλιδιού (EU) » : « Επιλέξτε », 46 à 80 | liste | Taille choisie (54) ; le bouton « Συνέχεια » ne marche qu'ensuite (message « Επιλέξτε μέγεθος… ») [V] | aucun | fonctionne |
| « Online μετρητής » | lien | Mène à `/education/egkyklopaideia-daxtylidion/metritis-daxtylidioy` [V : adresse] | — | lien présent, non ouvert |
| « Χάραξη μηνύματος + » | bouton | Aucun champ de saisie détecté après le clic | non affiché | **à vérifier** |
| « Πλάνο δόσεων + » | volet | « 12 × 139 € \| 0 % de taux » affiché [V] | 1 665 € / 12 | présent |
| « Αλλαγή » (bague, diamant) | boutons | Renvoient aux étapes 1 et 2 | — | non testé |
| « Συνέχεια » | bouton | Ajoute au panier et ouvre le tiroir [V] | — | fonctionne | [P1]
| Tiroir du panier | volet | Everly x1, métal, taille 54, bague 1 030 €, diamant ROUND 0,60 F VS2 VG 925 €, 1 955 € → 1 665 € ; « Κουπόνι GoldenWeek : Εφαρμόστηκε » ; livraison 0 € ; total 1 665 € [V] | voir ci-dessous | fonctionne | [P1]
| « ΔΕΙΤΕ ΤΟ ΚΑΛΑΘΙ » (`/cart`) | lien | **Non ouvert** : interdit par `robots.txt` | — | non testé |
| « ΟΛΟΚΛΗΡΩΣΗ ΠΑΡΑΓΓΕΛΙΑΣ » | bouton | Non cliqué (au-delà du panier) | — | non testé |
| Autres : « Κλείστε ραντεβού » (`/rantevou`), téléphone 2103210736, « Τα καταστήματά μας » (`/stores`), « Αγαπημένα » (`/favorites`), « Αναζήτηση » | liens | Adresses lues, autorisées pour `/rantevou`, `/favorites` ; non ouvertes | — | non testé |

## Options disponibles

- **Bases** : 90 modèles (Everly, Kalliope, Olivia, Elowen halo, Aurelia halo, etc.), styles « Classic Solitaire », « avec diamants latéraux », « Halo » [V : libellés des cartes].
- **Métal** : or blanc, jaune, rose ; titres K14 et K18 ; platine non vu [V].
- **Diamants** : naturels et synthétiques ; formes rond, ovale, émeraude, poire, carré, cushion, marquise, cœur ; certificats GIA, IGI (HRD cité dans le titre de la page) ; de 0,18 à 5 ct [V].
- **Taille de doigt** : EU 46 à 80 ; **gravure** présente (champ non vu) ; **mensualités** 12 sans intérêt ; **langues** grec, anglais [V].

## Prix, délais, retours, garanties

- **Décomposition** : le panier détaille « bague 1 030 € » et « diamant 925 € », puis la valeur initiale, la remise et le total ; le prix de la base affiché sur la liste est « à partir de ». Les titres 14 k / 18 k ajoutent 240 € (Everly) [V]. Pas de décomposition or / façon / marge. [P1]
- **Remise** : « Golden Week −15 % sur le solitaire jusqu'au 30/11 », compte à rebours en en-tête ; 1 955 € − 290 € = 1 665 € (290 € = 14,8 %, arrondi) [V : tiroir]. [P1]
- **Délai** : « Αποστολή έως : Τρίτη 8 Δεκεμβρίου » le 24/11 (14 jours) ; page livraison : fabriqué sur commande en 6 à 10 jours ouvrés, puis livraison gratuite et assurée 1 à 3 jours ouvrés en Grèce, 2 à 5 à l'étranger [V : /tropoi-apostolis].
- **Retours** : 14 jours calendaires en Grèce, 30 à l'étranger ; retour gratuit en Grèce ; un diamant n'est repris qu'avec le certificat d'origine, sinon le coût d'un nouveau certificat est retenu. Je n'ai pas trouvé d'exclusion du sur-mesure dans les lignes lues (non confirmé) [V : /politiki-epistrofon].
- **Garantie** : à vie (nettoyage profond, contrôle annuel ; valable aussi pour un bijou acheté chez un revendeur), garantie sur chaque diamant vendu [V : /eggyisi].
- **Paiement** : cartes Visa, MasterCard, UnionPay, Diners, Amex ; 12 mensualités sans intérêts ; PayPal ; virement [V : /tropoi-pliromis].

## Confiance et service

- Rendez-vous avec un conseiller (`/rantevou`, bouton « Κλείστε ραντεβού »), téléphone, boutiques, bouton « Ρωτήστε έναν ειδικό » sur chaque diamant [V].
- Rapport IGI ou GIA ouvert dans la page avant l'achat [V].
- Revendications du site, non vérifiées : 4 500 solitaires par an, gemmologue interne, présence à Las Vegas et en Arabie [V : texte de l'accueil].
- Avis clients, photos ou vidéos de fabrication, suivi illustré : **non vus** dans le parcours ; page « Craftsmanship » (`/craftsmanship-i-texni-toy-monopetroy`) non ouverte [I].
- Libellé du synthétique : « Εργαστηριακό » (filtre) et « Lab grown » (cartes, blog) [V].
- Vitesse : le visuel principal apparaît en 0,7 s et le LCP est de 1,3 s sur ordinateur ; 0,6 s et 1,0 s en affichage iPhone [V : mesure du 24/11, une seule mesure].
- iPhone : pas de débordement horizontal (390 px) ; 9 à 11 éléments de moins de 32 px dans les 1 200 premiers pixels [V].

## Points forts à retenir pour JR Diamond

1. **Panier détaillé base + diamant + remise + livraison + total**, avec taille, métal et caractéristiques du diamant (tiroir du panier, [V]).
2. **Rapport de laboratoire lu dans la page de finalisation**, sans quitter le parcours (IGI 811616995, [V]).
3. **Prix du titre d'or visible en un clic** : K14 → K18 passe de 1 030 à 1 270 € sur la même page [V].
4. **Étapes réorganisables** : on peut commencer par le diamant ou par la base, et retirer chaque choix (« Αφαίρεση ») [V].
5. **Mensualités et date d'expédition annoncées avant le panier** (« 12 × 139 € », « έως 8 Δεκεμβρίου ») [V].
6. **Garantie « à vie » visible dans le parcours** (nettoyage et contrôle annuels) [V : texte de la page].
7. **Vitesse** : visuel en moins de 1,5 s, y compris en affichage iPhone [V].

## Défauts observés

- **Bouton « Επόμενο — επιλογή διαμαντιού » jamais « stable »** : le clic normal automatisé a expiré à chaque essai ; seul un clic forcé fonctionne. Une animation continue est probable ; effet sur un visiteur non établi [V, I].
- **La touche Échap, dans le zoom, ferme tout le panneau de configuration** et fait perdre le choix [V].
- Les photos montrent une bague de 1,50 ct naturel (lien produit) alors que le diamant choisi fait 0,60 ct ; le texte précise « Ενδεικτική απεικόνιση » [V].
- La gravure est annoncée mais aucun champ de saisie n'a été détecté [V : script], à confirmer à la main.
- Erreur réseau 401 sur `drive-weur-1.app.ijewel3d.com/api/raw/v1/users/auth/refresh-token` : le 360° repose sur un service tiers (iJewel3D) [V : réponse réseau ; non visible pour le visiteur].
- Remise de 15 % affichée, soit 290 € sur 1 955 € (293,25 € attendus) ; écart de 3 € [V : arithmétique].
- Titre de page « Σχεδιάστε το δικό σας μονόπετρο » : le constructeur ne couvre que les solitaires (« μονόπετρα »), pas les alliances [V].

## Limites de l'audit

- **Panier** : seul le tiroir a été vu ; `/cart`, `/checkout` interdits par `robots.txt`, donc ni récapitulatif de page, ni frais finaux, ni moyens de paiement en situation.
- Non testés : filtre « Φίλτρα + » de l'étape 1, tri, carats, couleur, pureté, coupe, prix, certificat, polissage, symétrie, fluorescence, recherche, comparaison, « Ρωτήστε έναν ειδικό », rendez-vous, favoris, gravure (champ non apparu), compteur d'avis, guide des tailles, autres bases et autres formes, bases en 18 k (photo).
- Parcours complet sur ordinateur uniquement ; une seule base (Everly) et un seul diamant testés.
- Aucune donnée saisie ; aucun compte créé ; le panier de test n.est pas conservé sans compte [I].

## Sources

- https://www.diamondjools.gr/monopetra/ftiakse-to-diko-sou/settings ; https://www.diamondjools.gr/diamonds?Type=lab ; https://www.diamondjools.gr/monopetra/ftiakse-to-diko-sou/personalize?design=everly-monopetro-daxtylidi-eng152&v=ENG152-MASTER-RD-150-LEF-K14-NAT&d=9914550
- Politiques : https://www.diamondjools.gr/tropoi-apostolis ; /politiki-epistrofon ; /eggyisi ; /tropoi-pliromis (même domaine) ; accueil https://www.diamondjools.gr/ ; blog https://www.diamondjools.gr/blog/ti-einai-ta-lab-grown-diamantia
- `robots.txt` : `Disallow: /cart`, `/checkout`, `/sign-in` (contrôle `robots.cjs` du 24/11).
