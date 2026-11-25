# Audit : Peter & Co. Jewelers (Avon Lake, Ohio)

- **Site** : Peter & Co. Jewelers. **Adresse** : https://www.peterjewelers.com/ (départ : https://www.peterjewelers.com/pages/custom-ring-builder)
- **Date** : 15/11/2026 (consigne ; pages lues le 25/11/2026 d'après l'horloge de la machine). **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13.
- **Statut** : **partiel**. L'assistant d'entrée (4 étapes) est lisible ; le concepteur 3D lui-même n'a pas pu être actionné (voir « Limites »). Panier : interdit par robots.txt, non ouvert.
- Repères : [V] vérifié (page lue ou contrôle actionné, adresse donnée), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| Page de départ `/pages/custom-ring-builder` [V] | « Step 1 of 4 : Let's start designing your ring » ; 3 pastilles de métal (jaune, blanc, rose) ; 9 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Three Stone, un neuvième carte (« … Mo… », masquée par le bandeau cookies), « Start from scratch » ; boutons Back et Skip |
| Étape 2 « Choose your center stone » [V, après clic sur Solitaire] | bascule Natural / Lab Grown ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| Étapes 3 et 4 | **Non vues** (clics arrêtés, voir « Limites »). [I] ensuite ouverture du « 3D Ring Designer » annoncé dans le texte de la page |
| Parcours parallèle : recherche de diamants `/diamonds` [V] | Natural / Lab-Grown, forme, prix, carat, taille (cut), couleur, pureté, avancé (rapport longueur/largeur, polissage, symétrie, fluorescence, table %, profondeur %, laboratoire AGS, EGL, GIA, HRD, IGI) |
| Parcours parallèle : catalogue `/jewelry/engagement/engagement-rings` [V] | 168 produits, filtres, fiche produit « Inquire » / « Schedule a viewing » |
| Panier [V pour l'interdit] | `/cart` interdit par robots.txt (`Disallow: */cart`) : non ouvert, aucun bouton d'ajout cliqué |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastilles métal (jaune, blanc, rose) page de départ | boutons `jos-metal-btn` | présentes ; **non cliquées** (le sélecteur ne les a pas retrouvées après le refus des cookies) | aucun affiché | non testé [V présence] |
| Carte « Solitaire » | carte | passe à l'étape 2 « Choose your center stone » ; le clic déclenche aussi des appels vers `www.jeweleros.com/api/…` (interdit par le robots.txt de ce domaine) : je les ai **bloqués côté navigateur, rien n'a été envoyé**, puis j'ai arrêté | aucun | fonctionne (affichage), parcours arrêté |
| Cartes Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Three Stone, « Start from scratch », Skip, Back | cartes / boutons | présents ; non testés (même raison) | aucun | non testé |
| Natural / Lab Grown (étape 2) | bascule | présente, Natural actif par défaut ; non basculée | aucun | non testé |
| 10 formes de pierre (étape 2) | cartes | présentes, non actionnées | aucun | non testé |
| Natural / Lab-Grown (`/diamonds`) | liens `?labGrown=0/1` | rechargement de la recherche | aucun | fonctionne mais **0 résultat** |
| Formes (10 : Round, Princess, Emerald, Asscher, Radiant, Cushion, Oval, Pear, Marquise, Heart) | boutons | Round cliqué : requête renvoyée, 0 diamant | aucun | fonctionne, vide |
| Prix, carat (0,1 à 20), cut (Fair à Excellent), couleur (L à D), pureté (SI2 à F) | curseurs | présents ; seul l'état initial vu | aucun | non testé individuellement |
| « Advanced » | bouton | déplie 5 filtres + laboratoire (AGS, EGL, GIA, HRD, IGI) | aucun | fonctionne |
| Recherche par SKU, 20/40/60/120 par page | champ, liste | présents ; sans effet visible (0 ligne) | aucun | non testé |
| « My Selected Diamond » / comparaison | zone | « There are no diamonds selected to compare » | aucun | inutilisable (aucun diamant) |
| Filtre « Lab Grown Diamond » du catalogue | case | URL `…/engagement-rings?gemstone=104`, **10 produits** | prix affichés | fonctionne |
| Autres filtres catalogue (sous-catégorie, prix 6 tranches, marques, stock, matière 14K/18K or blanc/jaune + platine, gemme, forme, genre) | cases | présents ; non cliqués | aucun | non testé |
| Tri (Featured, High to Low, Low to High, Newest) | liste | **non actionné** : l'adresse de tri `?sortSpec=` est interdite par robots.txt | aucun | non testé (interdit) |
| Vue grille / liste | icônes | présentes | aucun | non testé |
| « Inquire about this item », « Quick view », cœur « wish list » (sur chaque carte) | boutons | Quick view cliqué : ouvre le panneau de connexion du compte, pas un aperçu produit [V] | aucun | Quick view : comportement inattendu |
| Fiche produit : « Inquire », « Schedule a viewing », « My wish list », « View in wish list » | boutons | présents ; non cliqués (formulaires) | **aucun prix sur la fiche** | non testé |
| Fiche produit : photo de face + vue de profil | images | 2 images fixes ; ni 360°, ni vidéo, ni zoom relevés | | présent |
| « Text us » (Podium), téléphone (440) 933-4871 | bouton, lien `tel:` | non ouverts (pas de chat) | | présents |
| Bandeau cookies : Decline / Accept / manage | boutons | « Decline all cookies » ferme le bandeau | | fonctionne |
| Financement Affirm | lien `/financing-options/affirm` | page lue | | fonctionne |
| Panier (icône), Mon compte | liens | `/cart` interdit, `/login` interdit : non ouverts | | non testé (interdit) |

## Options disponibles

- **Métaux de l'assistant** : or jaune, blanc, rose (3 pastilles) [V]. Le catalogue filtre 14K blanc/jaune, 18K blanc/jaune, platine [V]. Titre et rose au catalogue : non vus.
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Three Stone, un style « Mo… » non lisible, ou départ de zéro [V].
- **Formes de pierre (assistant)** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; Heart seulement dans la recherche de diamants [V].
- **Origine** : Natural / Lab Grown, dans l'assistant et la recherche [V].
- **Filtres de pierres** : forme, prix, carat, cut, couleur, pureté, polissage, symétrie, fluorescence, table, profondeur, laboratoire AGS/EGL/GIA/HRD/IGI [V].
- **Autres outils** (liens du pied de page ou de la page services) : constructeur de bandes AVA Couture, gravure non vue ; rachat d'or ; réparation en atelier [V sur `/pages/store-services`].
- Taille de doigt, gravure, pavage, griffes : **non relevés** (dans le 3D inaccessible).

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant d'entrée [V]. Catalogue : prix barrés puis soldés (« Original price: $2,975.00, now on sale for $2,677.50 », remise de 10 % à 50 % observée, période du Black Friday) [V `/jewelry/engagement/engagement-rings`]. Fiche A.JAFFE lab-grown ouverte : pas de prix sur la page [V]. Pas de décomposition (monture, pierre, façon).
- **Délai** : aucun annoncé sur le configurateur ni sur la fiche lues [V absence]. L'inventaire de l'Ohio relève « a couple of weeks » pour le texte JewelerOS [I, autre page].
- **Retours** [V `/return-policy`] : 10 jours après réception, articles inutilisés, emballage d'origine ; **les pièces personnalisées ou sur mesure ne sont pas retournables** (« Custom and Special Order Items … not eligible for returns or refunds », y compris mise à taille et surclassement de diamant) ; aucune modification de commande après passage ; retour à ses frais, étiquette assurée sur demande ; remboursement 7 à 10 jours ouvrés.
- **Financement** [V] : Affirm, 0 % ou 10 à 36 % TAEG, 3 à 36 mois (« a $700 purchase might cost $63.18/mo over 12 months at 15% APR »).
- **Garantie, certificats** : logos GIA, AGS, IJO Master Jeweler, JA, BBB dans le pied de page [V] ; aucune garantie chiffrée lue. Le libellé « Lab Grown » est utilisé [V].
- **Livraison, moyens de paiement** : non lus (panier interdit). Logo Authorize.net en pied de page [V].

## Confiance et service

- Boutique physique (32020 Walker Rd, Avon Lake), horaires affichés, téléphone, SMS (« Text us »), rendez-vous (« Schedule a viewing ») [V].
- Avis clients : aucun sur les pages lues [V absence]. Photos ou vidéos de fabrication, suivi de commande : aucun relevé ; `/myaccount-orders` (« Track My Order ») existe dans le menu compte [V lien, page interdite non ouverte].
- Langue : anglais seul ; devise : USD [V].
- Éducation : `/education`, `/education-settings` (page de conseils sur les montures lue) [V].

## Points forts à retenir pour JR Diamond

1. **Assistant d'entrée en 4 étapes très simple** (métal, style, pierre, puis 3D) avec « Skip » et « Decide later » : réduit la peur de se tromper. Preuve : https://www.peterjewelers.com/pages/custom-ring-builder (« Don't worry, you'll be able to fully customize your design »).
2. **Bascule Natural / Lab Grown visible dès l'étape pierre** et dans la recherche de diamants. Preuve : étape 2 et `/diamonds`.
3. **Filtre « Lab Grown Diamond » dans le catalogue**, 10 bagues sur 168. Preuve : `…/engagement-rings?gemstone=104`.
4. **Politique de retour explicite sur le sur-mesure** (non retournable) : le client sait à quoi s'attendre. Preuve : `/return-policy`.
5. **Financement affiché** avec exemple chiffré. Preuve : `/financing-options/affirm`.

## Défauts observés

- **Recherche de diamants vide** : 0 diamant, naturel comme synthétique, forme ronde comprise (« 0 diamonds found », réponse `recordsTotal 0`) [V `/diamonds`].
- **Aucun prix sur la fiche produit** ouverte et aucun bouton d'achat : seulement « Inquire » ; le client ne peut ni voir ni payer en ligne [V]. Fiche : champ « Style # » vide, « Gender : Men's » pour une bague de fiançailles en pierre de 3,02 ct [V].
- **« Quick view » ouvre une fenêtre de connexion** au lieu d'un aperçu [V].
- **Chargement lent du catalogue** : « fetching products… » encore affiché 7 s après l'ouverture, produits visibles ensuite ; fiche produit : image principale après environ 21 s [V mesure Playwright].
- Bandeau cookies et bouton « Text us » masquent des cartes sur la page de départ [V capture].
- Le configurateur dépend d'une API tierce interdite aux robots (jeweleros.com) ; l'assistant n'affiche aucun prix [V].

## Limites de l'audit

- **Le concepteur 3D n'a pas été actionné** : son chargement et ses clics appellent `www.jeweleros.com/api/…`, interdit par le robots.txt de ce domaine (`Disallow: /api/`). Un clic (Solitaire) a tenté ces appels ; je les ai coupés dans le navigateur (aucune requête n'est partie) et j'ai arrêté le parcours. Les requêtes faites par la page à sa seule ouverture ne sont pas un écart. Donc : pas de contrôles 3D (carat, griffes, pavage, taille, gravure, vues), pas de prix du configurateur, pas de panier.
- Panier, compte, tri : interdits par robots.txt, non ouverts. Aucun formulaire, chat ou SMS ouvert.
- Une seule fiche produit lue, une seule recherche de pierres ; couleur des métaux non cliquée.
- Mesures : visuel principal de l'assistant visible en **3,9 s (ordinateur)** et **4,5 s (iPhone)** (un essai chacun, moyenne non faite) ; pas de visuel 3D à mesurer.
- Prix soldés du Black Friday ; dates : voir en-tête.

## Sources

- https://www.peterjewelers.com/pages/custom-ring-builder (robots.txt : AUTORISÉ, capture et liste de contrôles ordinateur 107 / iPhone 92)
- https://www.peterjewelers.com/diamonds ; https://www.peterjewelers.com/jewelry/engagement/engagement-rings (et `?gemstone=104`)
- https://www.peterjewelers.com/jewelry-details/engagement-rings/ajaffe-lab-grown-diamond-engagement-ring/41333
- https://www.peterjewelers.com/return-policy ; https://www.peterjewelers.com/financing-options/affirm ; https://www.peterjewelers.com/pages/ring-settings-1 ; https://www.peterjewelers.com/pages/store-services
- https://www.peterjewelers.com/robots.txt ; https://www.jeweleros.com/static/dist/jos.js (code du chargeur lu, pas exécuté hors page)
- Captures dans le scratchpad : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/peter-and-co/`
