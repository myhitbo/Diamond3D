# Audit : Lion Diamonds (Dogana, Saint-Marin)

- **Site** : Lion Diamonds, https://liondiamonds.it/ (WooCommerce + Elementor, thème de l'agence Bismatica, en italien)
- **Date** : 15/11/2026 (jeu de relectures le 25/11)
- **Appareils** : Chromium ordinateur 1366x850 ; iPhone 13 (émulation Playwright)
- **Statut : partiel.** Le robots.txt est lisible et AUTORISÉ (contrôle `robots.cjs` du 25/11, seule règle gênante : `Disallow: /*?*add-to-cart=`). Mais le serveur est instable (réponses 502 « upstream request failed » sur plusieurs pages, chargements de 12 à 30 s, scripts de pages qui échouent) : l'ajout au panier et la page `/carrello/` n'ont pas pu être vérifiés.
- Marquage : (V) vérifié (page lue ou contrôle actionné), (I) inféré, (S) supposé.

## Parcours

Pas de configurateur : catalogue WooCommerce (V, accueil et `/anelli/`). Le parcours est : accueil → catégorie d'anneaux → fiche produit à variantes → panier.

| Étape | Options (V sauf mention) |
|---|---|
| Accueil | Menu : Diamanti, Bracciali, Pendenti, Orecchini, Anelli, recherche, wishlist, panier. Sections « vai allo shop » par catégorie ; 4 produits en vedette |
| Anelli (`/anelli/`) | 11 sous-catégories : Solitario, Solitari con contorno, Trilogy, Anello con diamante Magic, Veretta, Girodito, Groumette, Trilogy e Veretta con pietre preziose colorate, pierres colorées taille ovale / octogonale / cœur |
| Catégorie (ex. Solitario) | Filtre « Filtra per carati » (liste multiple 0,05 à 0,70+, bouton « Applica »), cartes avec « Scegli » (vers la fiche) et « Aggiungi alla wishlist » |
| Fiche (ENG12) | 3 sélecteurs à pastilles : Carati (0,05 à 1,00 en 32 valeurs), Color (F seul), Purezza (VS seul), quantité, « Aggiungi al carrello », « Aggiungi alla wishlist », « Svuota », produits liés |
| Panier | Non vérifié (502 le 15/11 et le 25/11) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche (`s`) | champ | Présent sur toutes les pages ; non testé (la recherche est une adresse à paramètre, non vérifiée au robots.txt) | n/a | non testé |
| Diamanti / Bracciali / Pendenti / Orecchini / Anelli | liens de menu | Ouvrent les pages de catégorie ; Anelli lu (11 sous-catégories) | n/a | OK (Anelli) ; les autres non ouverts |
| « Compra un diamante », « Diamante in cartina », « Diamanti da investimento » | liens de sous-menu | Adresses autorisées ; « Compra un diamante » : 502 à l'ouverture | n/a | 502 / non testés |
| Wishlist (icône) | lien | Adresse `/wishlist/` autorisée, non ouverte | n/a | non testé |
| 0 Carrello | lien `#` | Affiche « Nessun prodotto nel carrello », total 0,00 € | n/a | OK |
| « vai allo shop » (x8) | liens | Mènent aux fiches vedettes et à `/shop/?swoof=1&product_cat=…` (filtre) | n/a | liens présents, non tous suivis |
| Filtre « Carati » + « Applica » | liste multiple | Présent sur la catégorie Solitario ; application non testée (filtre en paramètre d'adresse) | n/a | non testé |
| Pastille Carati (0,05 / 0,25 / 1,00) | sélecteur | Change la variante ; appel `?wc-ajax=get_variation` | 0,05 ct = 824 € ; 0,25 ct = 1 609 € ; 1,00 ct = 11 830 € | OK (3 valeurs, par script) |
| Pastille Color (F) / Purezza (VS) | sélecteur | Un seul choix chacun, sans effet sur le prix | aucun | OK |
| Quantité | champ | Présent | n/a | non testé |
| Aggiungi al carrello | bouton | Désactivé tant que les variantes ne sont pas choisies (`wc-variation-selection-needed`). Formulaire POST vers l'adresse de la fiche (champ caché `add-to-cart`) | n/a | non testé : le site a échoué (voir Limites) |
| Aggiungi alla wishlist | bouton | Présent sur chaque carte et fiche | n/a | non testé |
| Zoom image (`pswp`) | bouton | Présent sur la galerie de la fiche | n/a | non testé |
| Newsletter (« OTTIENI UN COUPON ») | formulaire | Coupon de 10 % contre inscription, case RGPD | −10 % | non rempli (règle) |
| Chi siamo | lien | Page lue | n/a | OK |
| « Rapaport » | lien | Ouvre en réalité une page de compte (« Accedi » / « Registrati »), pas un barème Rapaport | n/a | OK (trompeur) |
| Facebook / Instagram | liens externes | Vers `liondiamonds.srl` | n/a | non suivis |

Pas de bouton partager, comparer, guide des tailles, financement, chat, WhatsApp, essayage, 3D, 360° ni vidéo repérés (V : absents des listes de contrôles de l'accueil et d'une fiche ; les extensions de paiement CartaSi X-Pay et PagoDIL sont chargées, V par requêtes réseau).

## Options disponibles

- **Catégories** : diamants (achat en stock « magazzino Belgio », diamants en cartina, diamants d'investissement), bracelets (fancy color, noirs et blancs, blancs), pendentifs (magic, point lumière, collier tennis, cœur, croix, pierres colorées 3 tailles), boucles d'oreilles (idem), bagues (liste ci-dessus).
- **Variantes d'une bague solitaire (ENG12)** : carats 0,05 à 0,30 par 0,01 puis 0,40 / 0,50 / 0,60 / 0,70 / 0,80 / 0,90 / 1,00 ; couleur F ; pureté VS.
- **Absent** : choix du métal, de la forme, de la taille de doigt, de la gravure, du certificat (V : aucune option de ce genre sur la fiche lue).
- **Langue** : italien seul. **Devise** : euro.

## Prix, délais, retours, garanties

- Prix « From € » sur les cartes ; prix précis après choix du carat. Bague solitaire ENG12 : de 824 € (0,05 ct) à 11 830 € (1,00 ct) (V). Bague rubis AC02 : « From 2 589 € », 5 variantes de carats (V). Aucune décomposition (métal, pierre, façon).
- Délai, retours, garantie, livraison, frais : non trouvés sur les pages lues (le panier n'a pu être ouvert). Pas de page de conditions repérée au menu (V : pied de page = Chi siamo, Rapaport, Privacy Policy, Cookies).
- Moyens de paiement : modules CartaSi X-Pay et PagoDIL chargés (V par requêtes réseau, I pour les moyens réellement proposés).

## Confiance et service

- Point de vente : Via Tre Settembre 99, Dogana (SM), « si riceve su appuntamento » ; téléphone +39 393 7902494, e-mail visibles en en-tête (V).
- « Chi siamo » : importateur de diamants présent chaque semaine à la bourse d'Anvers ; certificats IGI, GIA ou HRD ; certification Kimberley pour le brut (V, citation de la page).
- Pas d'avis clients, pas de photos ni vidéos d'atelier, pas de suivi de commande repérés (V sur les pages lues). Pied de page « © 2022 » (V).
- **Libellé du synthétique** : aucun relevé. Le site ne vend que des diamants naturels apparents ; le terme italien d'usage est « diamante sintetico » ou « coltivato in laboratorio » (S, usage général, non trouvé sur le site).

## Points forts à retenir pour JR Diamond

1. **Prix par carat visible et par palier** : la fiche affiche immédiatement le prix selon le carat (824 € à 11 830 €), preuve : variations `get_variation` observées (V).
2. **Pierre spécialisée assumée** : couleur F et pureté VS fixes, présentées comme un choix de qualité (V, fiche ENG12).
3. **Certificats cités** (IGI, GIA, HRD) et approvisionnement à Anvers (V, page Chi siamo) : même argument de confiance que JR Diamond, mais sans preuve visuelle.
4. **Prix de bagues bas** (dès 621 € pour un solitaire, V sur la catégorie), repère pour l'écart avec le prix « sur devis » de JR Diamond.

## Défauts observés

- Serveur très instable : réponses 502 (`/carrello/`, magazzino-belgio, fiche ENG02 en 404, fiche rubis en 502 sur ordinateur), chargement de 12 à 30 s, erreurs de scripts (« Loading chunk … failed », `$form.block is not a function`) (V).
- Lien du menu « Diamanti » : page vide hors menu (V, texte de page = en-tête et pied seulement).
- Lien « Rapaport » : mène à une connexion/inscription, pas à un barème (V).
- Aucune personnalisation en ligne : pas de métal, forme, taille ni gravure ; pas de visuel d'atelier ; pas d'avis ; copyright 2022 (V).
- Photos : une seule image par fiche vue, sans 3D ni vidéo (V, galerie de la fiche ENG12).
- Mesure du visuel principal (LCP) : fiche rubis sur iPhone 13, 19,5 s ; ordinateur : 502 à cet essai ; temps de chargement complet 12 à 30 s selon la page (V, un essai chacun, mesure bruitée par les 502).

## Limites de l'audit

- Le panier n'a pas été atteint : `/carrello/` a répondu 502 à deux essais (15/11 et 25/11) ; l'ajout au panier a échoué trois fois (boutons de variantes inopérants car les scripts de la page ne se chargeaient pas). Donc non vérifiés : récapitulatif, frais de livraison, délai, moyens de paiement réels, retours.
- Le bouton « Aggiungi au panier » poste vers l'adresse de la fiche (champ `add-to-cart`) ; la règle robots `/*?*add-to-cart=` vise l'adresse avec paramètre, qui n'a jamais été ouverte.
- Prix lus par script (changement de valeur du sélecteur caché, puis événement), non par clic de pastille ; trois paliers seulement.
- Filtre carats, recherche, wishlist, « magazzino Belgio » (diamants à l'unité), diamants d'investissement non lus.
- Une page ouverte toutes les 2 s au plus ; aucun formulaire rempli.
- Captures dans `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/lion/` (accueil ordinateur et iPhone, fiche).

## Sources

- https://liondiamonds.it/ , /anelli/ , /categoria-prodotto/tutti-i-prodotti/anelli/anelli-solitario/ , /prodotto/anello-solitario-brillante/ , /prodotto/anello-rubino-con-10-diamanti/ , /chi-siamo-lion-diamonds/ , /rapaport/ , /diamanti/ (lus le 15/11/2026 et le 25/11/2026, V)
- robots.txt de liondiamonds.it (outil `robots.cjs`, AUTORISÉ pour les pages ci-dessus, INTERDIT `/*?*add-to-cart=`)
- `docs/concurrence/audit/eu/saint-marin/INVENTAIRE.md` (fiche d'exploration)
