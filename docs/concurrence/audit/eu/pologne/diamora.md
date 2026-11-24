# Audit : Diamora Diamonds (Pologne)

- **Site** : Diamora Diamonds, https://diamora.pl/ (compte bancaire au nom de Finevo Polska Sp. z o.o. ; showroom Mennica Residence, ul. Grzybowska 43A/U4, Varsovie [V, /content/5-sposoby-platnosci]). Boutique PrestaShop [V, commentaire de robots.txt].
- **Page de départ** : https://diamora.pl/ringbuilder/engagement-ring-settings (constructeur de bague en 3 étapes : monture, diamant, bague finie).
- **Date** : 15/11/2026 (consigne) ; contrôles effectués le 24/11/2026.
- **Appareils** : Chromium ordinateur (1366 x 900, locale pl-PL) ; affichage iPhone 13 pour le relevé de contrôles seulement.
- **Statut** : **partiel**. Après une vingtaine de requêtes automatisées en une heure, le serveur a répondu **HTTP 429 « Too Many Requests »** sur la liste des diamants. L'audit s'est arrêté là, sans nouvel essai : fiche d'un diamant, étape « Dokończ Swój Pierścionek » et panier non vus.
- Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Wybierz Swoją Oprawę Pierścionka | liste de montures (24 puis 48 avec « Załaduj więcej »), filtres style, métal, origine, prix, tri ; fiche de monture avec 2 photos ; « Wybierz tę oprawę » [V] |
| Fenêtre après le choix de monture | 4 types de diamant : naturel blanc, laboratoire blanc, naturel de couleur, laboratoire de couleur [V] |
| 2. Wybierz diament | filtres forme, prix, carat, couleur, pureté, taille, certificat, numéro de certificat, vue réelle photo ou vidéo, filtres avancés ; tri ; grille ou liste ; comparer ; récemment vus [V] |
| 3. Dokończ Swój Pierścionek | **non atteint** (429) |
| Panier, livraison, paiement | non atteints ; conditions lues sur les pages d'aide [V] |
| Variante « Projekt na zamówienie » | lien vers un produit « projekt pierścionka 3D, plik CAD i dwie poprawki » : **non ouvert**, prix inconnu [V, lien relevé] |

## Contrôles vérifiés

Relevé de contrôles : 76 (liste de montures, ordinateur), 66 (iPhone), 41 (fiche monture, ordinateur), 29 (iPhone).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre solitaire | case | liste de 24 montures ; premier résultat « Z Diamentami Bocznymi Laboratoryjnymi P0701 » : le résultat ne change pas visiblement avec cette case | 2 999 à 4 999 zł | Effet non net [V] |
| Filtre side-stone | case | liste de 24 | idem | Effet non net [V] |
| Filtres or 14 k jaune, blanc, rose | cases | listes de 24 montures, 585 | 2 999 zł | Fonctionne [V] |
| Filtres or 18 k jaune, blanc, rose | cases | **0 résultat** (aucune monture en 18 k) | — | Fonctionne, vide [V] |
| Filtre platine | case | 24 montures « Platyna 950 » | dès 3 999 zł | Fonctionne [V] |
| Filtre naturel, filtre laboratoire (montures) | cases | **0 résultat** dans chaque cas, alors que des montures « diamants latéraux naturels / laboratoire » existent ; cause inconnue | — | Anomalie [V] |
| Champs prix (min 2 999, max 9 900) | texte | deux champs ; modification non testée | — | Non testé |
| Tri par prix (croissant, décroissant) | liste | décroissant : premier résultat « P0702 – Platyna 950 » à 9 900 zł | 2 999 à 9 900 zł | Fonctionne [V] |
| Załaduj więcej | bouton | passe de 24 à 48 montures | — | Fonctionne [V] |
| Resetuj Filtry | bouton | présent, non cliqué | — | Non testé |
| Vignette de monture (par couleur d'or) | lien | ouvre la fiche : 2 photos, SKU `OPR-P01010103B`, détails style, métal, titre 585 | 2 999 zł (monture seule) | Fonctionne [V] |
| Wybierz tę oprawę | bouton | ouvre une fenêtre à 4 liens de type de diamant, puis la liste de diamants | — | Fonctionne [V] |
| Napisz do nas | lien | `mailto:` avec sujet pré-rempli | — | Lien [V], non ouvert |
| Zadzwoń do nas | lien | `tel:507320777` | — | Lien [V] |
| Powrót Do Wyszukiwania | bouton | retour à la liste | — | Non cliqué |
| Forme (10) | cases à vignettes | Okrągły, Princess, Szmaragdowy, Asscher, Owalny, Radiant, Gruszka, Serce, Markiza, Poduszka ; clic lent (compteur « … » pendant plus de 4 s) | — | Effet chiffré non confirmé [V] |
| Cena (curseur + 2 champs) | curseur | 189 zł à 3 758 365 zł | — | Non actionné |
| Karat (curseur + 2 champs) | curseur | 0,1 à 50 ct | — | Non actionné |
| Barwa | curseur | D, E, F, G, H, I, J, K, L, M, N-Z ; « zalecane D–I » | — | Non actionné |
| Czystość | curseur | FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1, I2, I3 ; « zalecane FL–VS2 » | — | Non actionné |
| Szlif | curseur | Ideal, 8X, Excellent, Very Good, Good, Fair, Poor ; « dotyczy tylko Round » ; « zalecane Ideal, 8X, Excellent » | — | Non actionné |
| Certyfikat (IGI, GIA, HRD) | cases | texte : GIA recommandé pour le naturel, IGI pour le laboratoire | — | Cliqué, compteur en chargement [V] |
| Szukaj według numeru certyfikatu | champ + bouton | recherche d'un numéro | — | Non utilisé (donnée à saisir) |
| Tylko z widokiem rzeczywistym : real foto, real video | cases | filtre les diamants avec vraie photo ou vidéo ; compteur en chargement | — | Cliqué [V] |
| Zaawansowane Filtry | bouton | ajoute polissage, fluorescence, symétrie | — | Libellés relevés [V] |
| Sortuj : carat, prix (croissant, décroissant) | liste | 4 tris | — | Non testé |
| Grid / List | boutons | change l'affichage | — | Non testé |
| Porównaj ; Ostatnio oglądane | zones | comparateur et historique, tous deux à (0) | — | Non testé |
| Cartes de diamant | lien | « 0,3 Karatów – Diament Okrągły Diament Laboratoryjny, D, SI1, Ideal, Very Good, zł 3 440 » avec badge « video » | dès 3 386 zł (0,30 ct) | Lues [V] ; fiche non ouverte |
| Szukaj (champ du haut) | champ | recherche du site | — | Non utilisé |
| Koszyk 0,00 zł | lien | `/koszyk?action=show` | — | Non ouvert |
| Diamenty / Pierścionki zaręczynowe / Biżuteria / Esencja / Diamenty laboratoryjne / Kontakt | menu | navigation | — | Liens [V] |

## Options disponibles

- **Monture** : style jednokamieniowa (solitaire) et side-stone (diamants latéraux naturels ou de laboratoire) ; or 14 k jaune, blanc, rose et platine 950 ; or 18 k annoncé dans les filtres mais sans produit (0 résultat) [V].
- **Diamant** : naturel blanc, laboratoire blanc, naturel de couleur, laboratoire de couleur ; 761 186 diamants de laboratoire blancs annoncés ; 10 formes ; carat 0,1 à 50 ; couleur D à N-Z ; pureté FL à I3 ; taille (ronds seulement) ; polissage, symétrie, fluorescence ; certificat IGI, GIA, HRD [V].
- **Photo et vidéo réelles** : filtre « real foto », « real video » ; badge « video » sur les cartes [V].
- **Gravure, taille de doigt, corps de bague, griffes** : **non vus** (étape 3 non atteinte) [S].

## Prix, délais, retours, garanties

- **Prix** : monture seule 2 999 zł (14 k, solitaire) à 9 900 zł (platine, diamants latéraux naturels) ; diamant ajouté à part, dès 189 zł dans le filtre ; une carte de 0,30 ct en laboratoire coûte 3 386 à 3 476 zł. Le total n'est visible qu'à la 3e étape [V]. Pas de décomposition or, façon, marge.
- **Délai** : sur la fiche monture : « Zamów teraz, a Twoje zamówienie zostanie wysłane do wtorek, 15 grudnia » (date calculée, 3 semaines d'après la date de lecture) [V].
- **Livraison** : gratuite en Pologne ; retrait au showroom ; coursier maison pour achats de 15 000 zł et plus : le client voit le diamant au microscope et vérifie le numéro sur gia.edu avant de payer [V, /content/5-sposoby-platnosci, /content/3-regulamin-sklepu].
- **Paiement** : Przelewy24 (286 banques, cartes, BLIK, Google Pay), virement avec **3 % de remise pour paiement intégral anticipé**, paiement à la livraison sans frais jusqu'à 10 000 zł [V].
- **Retours et garantie** : le lien « Zwroty i reklamacje » mène au règlement, qui ne contient que la garantie légale (loi du 30 mai 2014) ; **durée de retour et exception du sur-mesure : non trouvées** [V].
- **Certificats** : GIA pour le naturel, IGI pour le laboratoire (recommandations), HRD possible ; page « Dlaczego GIA » non lue [V].

## Confiance et service

- Téléphones d'accueil (507 320 777) et de showroom (507 320 888), e-mail, showroom sur rendez-vous « pour la sécurité et la discrétion » [V].
- Rendez-vous, conseils : « Poradnik o diamentach » (page de guide, non lue) [V, lien].
- Avis : le lien « Opinie » du pied de page mène à la page d'accueil : aucun avis lisible dans ce que j'ai ouvert [V].
- **Libellé du synthétique** : « diament laboratoryjny » (« Białe diamenty laboratoryjne ») ; aucune mention de « syntetyczny » dans les pages vues [V].
- Langues : polonais ; devise zł ; prix affichés `zł2,999` avec séparateur anglais [V].
- Preuves de fabrication : aucune photo d'atelier vue ; les montures sont des photos de studio [V].

## Points forts à retenir pour JR Diamond

1. **Un constructeur « monture puis diamant » avec un vrai stock de diamants (761 186 annoncés)** : filtres 4C, certificat, forme, avec valeurs « recommandées par Diamora » en légende sous les curseurs (D–I, FL–VS2, Ideal à Excellent) [V, capture a4_list].
2. **Filtre « vue réelle photo ou vidéo »** : on ne choisit que des diamants dont on voit la vraie image ; badge « video » sur chaque carte [V, capture a4_list].
3. **Recherche par numéro de certificat** dans le constructeur [V].
4. **Date d'expédition affichée sur la fiche** avant même le panier [V].
5. **Remise de 3 % pour paiement intégral anticipé**, paiement à la livraison sans frais jusqu'à 10 000 zł, coursier-gemmologue au-delà de 15 000 zł : réponse directe à la peur de l'échange de pierre [V].
6. **Parcours en 3 étapes numérotées en haut de page** : état d'avancement lisible [V, capture a4_list].

## Défauts observés

- **Limitation de débit 429** après une vingtaine de requêtes : un utilisateur qui filtre vite peut être bloqué (la liste de diamants n'a plus répondu à ce moment) [V].
- **Lenteur** : première image de la liste de montures à 6,8 s (LCP 7,0 s) sur ordinateur, machine d'audit chargée ; fiche de monture jusqu'à 25 s lors d'une autre lecture ; cartes de diamants parfois absentes après 60 s [V, mesures peu fiables].
- Filtres de monture « naturel » et « laboratoire » : 0 résultat, alors que des montures de ces deux types existent [V].
- Filtre or 18 k proposé sans produit [V].
- La fiche monture ne montre que 2 photos : pas de 3D, pas de 360°, pas de rendu avec le diamant choisi [V, capture a3_setting].
- Lien « Opinie » vers l'accueil ; « Zwroty i reklamacje » et « Regulamin » pointent vers la même page [V].
- Retours et sur-mesure non explicités dans les pages lues [V].

## Limites de l'audit

- Arrêt sur 429. Non vus : fiche d'un diamant, étape 3, taille de doigt, gravure, ajout au panier, panier, livraison, délai de bague finie.
- Pas de mesure mobile du temps d'affichage ; contrôles iPhone relevés seulement (66 et 29).
- Mesures de temps non fiables (une seule passe, machine chargée).
- Pages « Dlaczego GIA », « Poradnik o diamentach » et le produit « projet 3D plik CAD » non ouverts.
- Pas de lecture des avis (aucun avis trouvé) ni du règlement jusqu'à la clause de rétractation.

## Sources

- https://diamora.pl/robots.txt (lu le 24/11/2026).
- https://diamora.pl/ringbuilder/engagement-ring-settings ; https://diamora.pl/ringbuilder/view-engagement-ring-setting/oprawa-jednokamieniowa-p0101-biale-zloto-585?vid=-711 ; https://diamora.pl/ringbuilder/diamond-listing/lab-grown-diamonds (lue avant le 429).
- https://diamora.pl/content/5-sposoby-platnosci ; https://diamora.pl/content/3-regulamin-sklepu ; https://diamora.pl/content/4-o-nas (extraits via recherche web, pages du site).
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/diamora/` (a3_setting_d.jpg, a4_list.jpg).
