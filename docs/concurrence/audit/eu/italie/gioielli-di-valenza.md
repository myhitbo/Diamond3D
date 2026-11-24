# Audit : Gioielli di Valenza (gioiellidivalenza.com)

- **Site** : Gioielli di Valenza, groupe de joailleries de Valence (Piémont) ; boutique en ligne sur le sous-domaine `store.gioiellidivalenza.com` (V, liens « Acquista online »).
- **Page de départ** : https://www.gioiellidivalenza.com/it/anello-fidanzamento-solitario (configurateur de solitaire).
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900, iPhone 13 émulé.
- **Statut** : **partiel**. L'étape 1 (choix de la pierre) est lue ; le passage à la monture n'a pas pu être déclenché en automatisation (voir limites). Marques : V vérifié, I inféré, S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Seleziona la pietra | Pierre : diamant ; forme : « ROUND BRILLIANT » seule ; carats 0,29 à 2,99 ; fourchette de prix 0 à 26 800 € ; couleur L à D ; pureté SI2 à FL ; filtres avancés : certificat (IGI), fluorescence (none, very slight, slight), polissage, symétrie, taille (Excellent, Very Good, Good) ; « Cancella i filtri » ; 117 pierres |
| 2. Scegli la montatura | Annoncé par le texte : couleur de l'or blanc, jaune ou rose ; type de monture : tige droite, tige droite à nœud, Valentino, Valentino en losange, à chaton, six griffes ; gravure |
| 3. Acquista il tuo gioiello | Gravure en cursive ou en caractères d'imprimerie, offerte ; emballage cadeau gratuit ; mot personnel ; livraison directe à la destinataire (V, texte) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| ACCETTA TUTTO / ACCETTA NECESSARI | boutons | Ferment le bandeau de consentement | — | OK |
| Strumenti di accessibilità (et outil flottant) | boutons | Présents ; non ouverts | — | non testé |
| Menu : Acquista online, Attiva Fidelity, Compro oro, Chi siamo, Vantaggi, Supporto, Investimento, Le nostre gioiellerie, GV Magazine, IT | liens | Mènent à `store.gioiellidivalenza.com` ou à des pages `/it/gv/<n>/…` (V, adresses) | — | liens lus, non ouverts |
| Bandeau Black Friday « Leggi il regolamento » | lien | Règlement sur le store ; 10 % de plus aux détenteurs de la carte Fidelity jusqu'à 4 999,99 €, 15 % au-delà ; promotion du 01/11 au 30/11 (V, bandeau) | remise | lu |
| Curseur de carats (0,29 – 2,99) | curseur | Plage lue ; non déplacé (aucune poignée actionnable en automatisation) | — | non testé |
| Curseur de prix (0 – 26 800 €) | curseur | Idem | — | non testé |
| Couleur L … D (clic sur « D ») | repères | Aucun changement : 117 pierres avant et après | — | **sans effet constaté** |
| Pureté SI2 … FL | repères | Non testé | — | non testé |
| Filtres avancés : Certificato, Fluorescenza, Politura, Simmetria, Taglio | listes | S'ouvrent comme listes de valeurs (IGI ; none / very slight / slight ; excellent, good, very good) ; aucun effet mesuré | — | partiel |
| Cancella i filtri | lien | Résultat inchangé à 117 | — | OK (rien à effacer) |
| Cartes de pierre (« Diamante Certificato IGI CT 0,30 E SI 1 », prix) | liens | Clic : la page se recharge sur la même adresse, toujours à l'étape 1, après 7 s ; la fiche (`…/2?ID=9836`) retourne la même page | 1 120,00 € | **n'avance pas** (2 essais) |
| Liste des pierres | liste | 117 pierres de 1 120 € (0,30 ct E SI1) à plus de 2 300 € dans les 48 premières lignes lues, tri par prix croissant, 4 colonnes d'images | prix de la pierre | OK |
| Sélecteur « Seleziona la nazione » | bouton | Présent sur la page | — | non ouvert |

## Options disponibles

- **Pierre** : diamant rond brillant uniquement ; certificat IGI uniquement (V, texte : « l'outil ne permet pour l'instant que des solitaires en or blanc »).
- **Or** : blanc, jaune, rose (texte de l'étape 2) alors que l'en-tête dit « oro bianco seulement » : contradiction (V).
- **Montures** : 6 formes de tige et de serti (texte).
- **Gravure** : offerte, deux styles. **Cadeau** : emballage gratuit, mot personnel.
- **Origine** : pas de choix ; les pierres sont dites IGI, sans mention de naturel ou de synthétique dans ce que j'ai lu [I : naturel].
- **Titre de l'or** : non indiqué dans ce que j'ai lu.

## Prix, délais, retours, garanties

- **Prix** : affiché pour la pierre seule (de 1 120 € dans la liste) ; le prix de la bague complète n'est apparu qu'après le choix de la monture, étape non atteinte.
- **Promotion** : Black Friday, 10 à 15 % de remise pour les détenteurs de la carte Fidelity (V, bandeau).
- **Délai, retours, paiement, livraison** : non lus (pages du store non ouvertes).
- **Certificat** : IGI (V).

## Confiance et service

- Groupe de boutiques physiques (« Le nostre gioiellerie »), programme Fidelity, rachat d'or (« Compro oro »), service « Investimento » (V, menu).
- Magazine « GV Magazine » sur `stories.gioiellidivalenza.com` (V, lien).
- Pas d'avis clients, de WhatsApp, de chat ni de rendez-vous vus sur la page du configurateur (V).
- Aucune photo ou vidéo de fabrication (V).

## Mesures de chargement

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste de pierres (texte « Diamante Certificato » visible) | 5,7 s | 4,9 s |

Mesures uniques ; la liste est générée par JavaScript (V).

## Points forts à retenir pour JR Diamond

1. **Filtres de pierre très complets** (carat, couleur, pureté, certificat, fluorescence, polissage, symétrie, taille, prix) : preuve, page de départ.
2. **Prix de chaque pierre visible dès la liste** avec 117 pierres IGI réelles : preuve, liste.
3. **Gravure offerte et emballage cadeau offert**, avec option « c'est un cadeau » avant la fin de la commande : texte de l'étape 3.
4. **Choix de la forme de tige** parmi six montures nommées (Valentino, à nœud, …) : texte de l'étape 2.

## Défauts observés

- **Choix d'une pierre sans effet visible** : le clic recharge la même étape (V, deux essais) ; peut venir de l'automatisation (I).
- **Les filtres de couleur n'ont pas modifié la liste** (V, un essai).
- Seulement le **rond brillant** et l'**or blanc** annoncés, pas d'autres formes ni de platine (V, texte), contradiction avec l'étape 2.
- Page lente à charger la liste (≈ 5 s) ; **aucune photo du bijou** ni rendu 3D dans l'étape 1 (V, capture).
- Pas d'indication de l'origine (naturel ou synthétique) sur la page lue.
- La boutique en ligne est sur un sous-domaine séparé (changement de domaine au paiement, I).

## Limites de l'audit

- Étapes 2 et 3, panier, livraison, retours, paiement : **non vus** (l'étape 2 n'a pas pu être atteinte ; le panier du store n'a pas été ouvert pour ne pas pousser un parcours incomplet).
- Aucun formulaire, compte, chat ou paiement. Une seule session, un seul jour.
- Les clics de curseur et de repères de couleur ne sont pas fiables en automatisation : ces contrôles sont peut-être fonctionnels pour un visiteur ordinaire (S).

## Sources

- https://www.gioiellidivalenza.com/it/anello-fidanzamento-solitario (lu le 15/11/2026, `robots.cjs` : autorisé)
- https://www.gioiellidivalenza.com/robots.txt (PrestaShop, aucune règle gênante pour ce chemin)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/italie/valenza/`
