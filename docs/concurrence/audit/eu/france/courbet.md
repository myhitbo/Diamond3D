# Audit : Courbet, configurateur 3D de bague de fiançailles (français, €)

| | |
|---|---|
| Site | Courbet, 7 place Vendôme, Paris 1er |
| Page de départ | https://www.courbet.com/page/creation-bague-fiancailles, puis https://www.courbet.com/configurator/configure/R26W1011%2003%20FV |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Configurateur testé en entier. Panier non atteint : robots.txt interdit `/panier/ajout/`, la fiche produit est servie sans script et `/panier` répond 404 |
| robots.txt | interdit `/*?sort=price`, `/panier/ajout/*`, `/cart/add/*` (V). Pas de Cloudflare, pas de défi (V) |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

**À savoir avant tout** : la société Courbet est liquidée (liquidation judiciaire le 20/05/2025, clôture pour insuffisance d'actif le 21/07/2026) (V, sources). Le site affiche : « nos collections en ligne s'accordent un instant de pause » (V). Le configurateur fonctionne encore ; la vente en ligne, non. Cet audit décrit donc un outil de référence, pas une boutique en service.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Page « Composez votre bague » | 3 créations qui ouvrent le configurateur (Halo pavée `R26W1011`, `R04W0011`, `R22W0011`), 3 liens par couleur d'or, 6 liens par forme de diamant, « Choisir une création », « Prendre rendez-vous » (V) | aucun prix sur cette page (V) | photos |
| Configurateur, étape 1 (`#design`) | couleur d'or : blanc, jaune, rose, tous en 750/1000 ; carrousel « Vous aimerez peut-être… » (3 variantes non pavées) (V) | inchangé : 3 600 € dans les trois ors (V) | la page se recharge avec un autre modèle 3D (4 à 6 s) (V) |
| Configurateur, étape 2 (`#diamant`) | 4 accordéons : forme (6), carat (4), couleur, pureté ; une aide « Comment choisir… ? » par critère (V) | carat, couleur et pureté changent le prix ; la forme, non (V) | la pierre 3D change de forme et de taille (V) |
| « Choisir et continuer » | fiche produit `/produit/…R26W1011/03/F/V` : récapitulatif du diamant, « Modifier ma création », « Guide des tailles » (V) | 3 600 € repris, mais **masqué par défaut** (« Afficher le prix ») (V) | la 3D ne se charge pas ; un carrousel de 14 photos suit (V) |
| Panier | non atteint (voir « Limites ») | — | — |

## Contrôles vérifiés

Relevés `controls.cjs` : page de départ 47 contrôles sur ordinateur, 50 sur iPhone ; configurateur 18 et 22 ; fiche produit 39 et 41 (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « instant de pause », FERMER | fenêtre | s'affiche sur chaque page lue (V) | — | fonctionne ; annonce l'arrêt des collections en ligne |
| 3 créations, 3 ors, 6 formes (page de départ) | liens | cibles lues ; la première ouvre le configurateur (V). Le lien « ovale » arrive directement sur `#diamant` (V) | — | fonctionne (1 lien ouvert, 11 lus) |
| Next slide (2 carrousels), CHOISIR UNE CRÉATION, PRENDRE RENDEZ-VOUS (`/rendez-vous`) | boutons, liens | cibles lues (V) | — | non actionnés |
| Étape 1 / Étape 2 | onglets | bascule le panneau, ajoute `#design` ou `#diamant` à l'adresse (V) | — | fonctionne |
| Or blanc, or jaune, or rose 750/1000 | boutons radio | recharge la page sur une autre référence (`R26W…`, `R26Y…`, `R26R…`) en 5,1 à 5,6 s ; la forme choisie est conservée (V) | 3 600 € partout (V) | fonctionne |
| Forme : Brillant, Princesse, Poire, Émeraude, Ovale, Coussin | boutons radio à pictogramme | recharge la page (`R26W1011` à `R26W1017`) en 3,9 à 5,8 s (V) | 3 600 € pour les six (V) | fonctionne |
| Carat : 0,3 ; 0,5 ; 0,7 ; 1 | liste déroulante | mise à jour sans rechargement (requête `updateProductVariant`, ≈ 4,4 s mesurés avec l'attente) ; adresse et référence changent (V) | 3 600 → 4 600 → 5 100 → 6 100 € (V) | fonctionne ; la pierre 3D grossit (V) |
| Couleur : D, E, F | boutons radio | à 0,3 ct, seul F est proposé ; D, E et F à partir de 0,5 ct (V) | à 0,5 ct : D 4 700, E 4 600, F 4 500 € (V) | fonctionne ; image inchangée (V) |
| Pureté : VVS, VS | boutons radio | à 0,3 ct, seule « VS+ » est proposée ; VVS et VS à partir de 0,5 ct (V) | à 0,5 ct F : VVS 4 600, VS 4 500 € (V) | fonctionne ; image inchangée (V) |
| « Comment choisir le carat / la couleur / la pureté ? » | 3 liens d'aide | ouvrent un volet de texte à côté du panneau ; la croix le referme (V) | — | fonctionne |
| Masquer le prix / Afficher le prix | bouton | cache le montant, le libellé s'inverse ; second clic : 3 600 € revient (V) | — | fonctionne dans le configurateur |
| Vue 3D : glisser | zone 3D | la bague tourne (V) ; pas de rotation automatique (V) | — | fonctionne, souris et tactile émulé |
| Vue 3D : molette | zone 3D | zoom (V) | — | fonctionne |
| Vue 3D : icône plein écran | bouton | passe en plein écran (zone 1366 × 900), un second bouton en sort (V) | — | fonctionne |
| Carrousel « Vous aimerez peut-être… » : flèches, 3 vignettes | boutons, liens | les vignettes mènent aux variantes non pavées `R26R0011`, `R26W0011`, `R26Y0011` ; l'une, ouverte sur iPhone, affiche 2 900 € (V) | 2 900 € (V) | fonctionne ; le clic automatisé sur la flèche « suivant » n'a pas abouti en 3 s sur ordinateur (V) |
| Fermer (croix) | lien | `/collection/les-solitaires-signature` (V, cible lue) | — | non actionné |
| Trouver un autre modèle | lien | `/catalogue/bagues-de-fiancailles` (V, cible lue) | — | non actionné |
| Choisir et continuer | bouton d'envoi | envoie le formulaire, arrive sur la fiche produit de la variante (V) | 3 600 € | fonctionne |
| Fiche : Afficher le prix | bouton | **aucun effet** : le prix reste caché (V) | — | en panne |
| Fiche : PRENDRE RENDEZ-VOUS | bouton | **aucun effet** : le volet « Prendre rendez-vous » existe dans la page mais ne s'ouvre pas (V) | — | en panne |
| Fiche : cœur (liste de souhaits) | bouton | **aucun effet**, aucune requête émise (V) | — | en panne |
| Fiche : astérisque vert (infobulle) | bouton | **aucun effet** (V). Texte de l'infobulle lu dans la page (V) | — | en panne |
| Fiche : AJOUTER AU PANIER (barre collante) | bouton | la barre n'apparaît pas au défilement ; le formulaire vise `/panier/ajout/R26W1011 03 FV` (V) | 3 600 € | **non actionné** (chemin interdit par robots.txt) ; inopérant sans script (I) |
| Fiche : Modifier ma création | lien | retour au configurateur (V, cible lue) | — | non actionné |
| Fiche : Guide des tailles | lien PDF | `/build/images/guide_des_tailles.pdf` répond 200, type PDF (V) | — | fonctionne |
| Fiche : flèches du carrousel photo (2) | boutons | — | — | non actionnés (page sans script) |
| En-tête : menu, contact, +33 7 81 78 17 82, Mon compte, FR/EN | boutons, liens | cibles lues (V) | — | non actionnés ; compte non ouvert |
| Pied de page : réseaux, rendez-vous, FAQ, CGV, lettre d'information | liens, champ | FAQ lue avec curl (V) | — | courriel non saisi |

## Options disponibles

- **Modèles configurables** : au moins 3 créations sur la page de départ ; la « Bague C de Courbet Halo pavée » a servi au test (V). Variante non pavée à 2 900 € (V).
- **Métal** : or blanc, jaune ou rose 750/1000 (18 k). Pas de 14 k, pas de platine (V).
- **Formes** : brillant, princesse, poire, émeraude, ovale, coussin (V). Pas de marquise.
- **Poids** : 0,3 ; 0,5 ; 0,7 ; 1 ct (V).
- **Qualité** : 0,3 ct en F / VS+ seulement ; à partir de 0,5 ct, D, E ou F et VVS ou VS (V).
- **Origine** : synthétique uniquement ; pavage « diamants de pavage synthétiques », 0,25 ct, F / VS ou mieux (V).
- **Poids du métal affiché** : 2,70 g à 0,3 ct, 2,80 g à 0,5 ct, 2,90 g à 0,7 et 1 ct (V).
- **Taille de doigt, gravure** : absentes du configurateur et de la fiche (V). La FAQ dit que la taille se choisit à l'ajout au panier (V, `/questions/order`).

Grille relevée sur la Halo pavée en or blanc, forme brillant (V) :

| Poids | Couleur / pureté | Prix |
|---|---|---|
| 0,3 ct | F / VS+ | 3 600 € |
| 0,5 ct | F / VS · E / VS · D / VS · F / VVS | 4 500 · 4 600 · 4 700 · 4 600 € |
| 0,7 ct | E / VS | 5 100 € |
| 1 ct | E / VS · D / VS | 6 100 · 6 500 € |

## Prix, délais, retours, garanties

- **Affichage** : un seul montant TTC, sans décomposition (V). Le prix « reste fixe et ne varie pas selon la taille de doigt » (V, `/questions/services`).
- **Délai** : 5 jours si la pièce est prête ; 20 à 30 jours ouvrés avec passage à l'atelier, « vous serez prévenu de ce délai avant le paiement » (V, `/questions/livraison`).
- **Livraison** : gratuite en France et dans l'Union européenne. Hors Union : offerte dès 1 000 €, sinon 50 € (90 € sous 500 €), prix hors taxes, droits à la charge de l'acheteur. Retrait place Vendôme, coursier dans Paris, Chronopost Express, Hipli (V).
- **Retours** : demande sous 30 jours ouvrés ; remboursement intégral si retour sous 14 jours ouvrés, avoir ensuite. Retour gratuit en France et dans l'Union. Remise en état d'au moins 80 € en cas d'échange. **Exclus** : sur mesure, gravure, mise à taille, modification à la demande (V, `/questions/return`).
- **Paiement** : carte par Stripe ; Alma en 3 ou 4 fois sous 4 000 € ; PayPal en 1 ou 4 fois sous 2 000 € ; cryptomonnaies par Lunu (V, `/questions/payment`). Rien n'est affiché dans le configurateur (V).
- **Mise à taille** : offerte, au moins 4 semaines ouvrées ; rhodiage payant sur devis ; nettoyage offert (V).
- **Certificats** : au-delà de 0,5 ct, certificat IGI, HRD ou GIA et numéro gravé au laser sur la pierre ; certificat d'authenticité Courbet pour chaque bijou (V, aide du configurateur).
- **Ces services ne sont plus rendus en ligne** depuis la « pause » (I, bandeau et fiche inerte).

## Confiance et service

- **Libellé du synthétique** : « Diamant synthétique, créé en laboratoire » sur la fiche ; « diamants de synthèse créés en laboratoire » dans les textes. L'infobulle écrit que « la terminologie imposée ne reflète pas la juste valeur des diamants cultivés » et que l'astérisque vert « symbolise le combat pour l'acceptation d'un nom plus juste » (V). Le mot « cultivés » est interdit par le décret 2002-65 (I).
- **Langues et devises** : français et anglais (en.courbet.com) ; euros (V).
- **Avis clients** : aucun avis ni note sur le configurateur et la fiche (V).
- **Contact** : téléphone mobile +33 7 81 78 17 82 et courriel dans l'en-tête ; rendez-vous place Vendôme ou en vidéo (V). Pas de chat ni de WhatsApp relevé (V).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier dans le parcours ; pas de suivi de commande illustré (V). Après paiement, « un conseiller vous contactera pour vous informer des étapes de création » (V, `/questions/order`).
- **Signature visible en 3D** : la gravure « COURBET » et l'émeraude verte cachée dans l'anneau se voient sur le modèle (V, captures).

## Points forts à retenir pour JR Diamond

1. **La 3D arrive vite et reste simple.** Modèle visible en 5,0 et 7,2 s sur ordinateur, 4,6 s en affichage iPhone (V, voir « Limites » pour un passage plus lent). Glisser, molette, plein écran : trois gestes, aucun réglage (V).
2. **Deux étapes seulement** : « le bijou », puis « le diamant », avec quatre accordéons dont un seul est ouvert à la fois (V). Sur iPhone, la 3D reste en haut et les onglets dessous (V, capture).
3. **Le prix suit le diamant en une requête**, sans recharger la page, et l'adresse change avec la référence : chaque configuration a un lien stable, donc partageable (V).
4. **Les choix impossibles disparaissent** : à 0,3 ct, une seule couleur et une seule pureté sont proposées (V). Pas de combinaison grisée ni de message d'erreur.
5. **Une aide par critère**, ouverte dans un volet à côté des options, qui rappelle au passage la règle du certificat au-delà de 0,5 ct (V).
6. **« Masquer le prix »** : utile quand on montre l'écran à la personne à qui la bague est destinée (V, I pour l'usage).
7. **La marque est dans le modèle 3D** : gravure et pierre cachée visibles (V). Pour JR Diamond, le poinçon ou la gravure de l'atelier peut jouer ce rôle, puisque la 3D vient du fichier de fabrication.
8. **Le délai est annoncé avant le paiement**, et un objet d'attente (« Présage », papier ou numérique) est proposé si la date est trop proche (V).

## Défauts observés

1. **Le parcours ne mène plus à l'achat.** La fiche produit ne contient aucun script du site : seul le chargeur Apviz est appelé, avec une fonction `initApviz` absente, d'où l'erreur « Provided callback "initApviz" cannot be found » (V, HTML reçu par curl et par Chromium). Conséquences mesurées : 3D bloquée sur « Chargement du modèle », prix impossible à afficher, rendez-vous, favoris et infobulle sans effet, barre d'ajout au panier invisible (V). `/panier` répond 404 (V).
2. **La même panne touche une fiche hors configurateur** (alliance `R03W1010`) : aucun script, mêmes boutons inertes (V).
3. **Chaque changement de forme ou d'or recharge toute la page** et le modèle 3D : 4 à 6 s par clic, alors que le carat se met à jour sans rechargement (V).
4. **La 3D peut échouer** : un chargement, sur une douzaine, a fini sur « Une erreur est survenue lors du chargement du modèle 3D, veuillez recharger la page » après 24,6 s (V, en revenant à l'or blanc).
5. **Pas de taille de doigt, pas de gravure, pas de 14 k ni de platine** dans le configurateur (V).
6. **Le prix n'est pas expliqué** : un seul montant ; l'écart D/E/F (100 € par cran) et VVS/VS (100 €) ne se découvre qu'en cliquant (V).
7. **Forme sans effet sur le prix** : six formes au même tarif à 0,3 ct (V). Simple à lire, mais éloigné des coûts réels (I).
8. **Libellé contestataire** : le terme légal est accompagné de « créé en laboratoire » et d'une infobulle qui parle de diamants « cultivés » (V).
9. **Aucune preuve sociale ni de fabrication** dans le parcours (V).
10. **Bannière de cookies défaillante** : la console signale que le domaine n'est pas autorisé pour la bannière Cookiebot (V).

## Limites de l'audit

- **Panier et paiement non vus** : `/panier/ajout/` est interdit par robots.txt, et la fiche est inerte. Frais, délai et moyens de paiement viennent de la FAQ, pas d'un panier (V).
- Un seul modèle testé en entier (Halo pavée). Les deux autres créations et les fiches du catalogue n'ont pas été parcourues.
- Prix relevés : 4 poids, 3 couleurs et 2 puretés à 0,5 ct, 2 combinaisons à 1 ct. La grille complète (24 combinaisons au-delà de 0,3 ct) n'a pas été relevée.
- Temps mesurés sur une machine partagée, 1 à 3 passages par appareil (V) :
  - configurateur sur ordinateur : document prêt en 1,7 à 3,0 s, modèle 3D visible à 5,0 et 7,2 s ; un passage du matin à 16,7 s (document prêt en 10,9 s, machine chargée) ;
  - configurateur sur iPhone émulé : document prêt en 1,5 s, modèle 3D visible à 4,6 s ;
  - fiche produit : document prêt en 1,3 à 2,0 s ; la 3D n'apparaît jamais (30 s d'attente) ; plus grand élément affiché à 1,2 s (texte) sur ordinateur, 2,8 s (photo) sur iPhone.
- Chromium headless rend la 3D sans carte graphique (WebGL 1 seulement) : les temps réels sur téléphone peuvent différer (I).
- La cause de la panne de la fiche (arrêt volontaire ou défaut) n'est pas connue ; elle coïncide avec la « pause » annoncée (I).
- Compte, liste de souhaits, lettre d'information et formulaire de rendez-vous non utilisés.

## Sources

- Parcours : https://www.courbet.com/page/creation-bague-fiancailles · https://www.courbet.com/configurator/configure/R26W1011%2003%20FV (et variantes `R26W1012` à `R26W1017`, `R26Y1017`, `R26R1017`, `R26W1011 05 E3`, `05 D3`, `05 F3`, `05 F2`, `07 E3`, `10 E3`, `10 D3`, `R26R0011 03 FV`)
- Fiches : https://www.courbet.com/produit/Bagues-de-fiancailles-Les-solitaires-Signature-en-Or-blanc-750-1000-R26W1011/03/F/V · https://www.courbet.com/produit/Bagues-de-fiancailles-Alliances-or-et-diamants-en-Or-blanc-750-1000-R03W1010 · https://www.courbet.com/panier (404)
- FAQ : https://www.courbet.com/questions/livraison · https://www.courbet.com/questions/return · https://www.courbet.com/questions/payment · https://www.courbet.com/questions/services · https://www.courbet.com/questions/order · https://www.courbet.com/questions/bridal
- Règles : https://www.courbet.com/robots.txt
- Liquidation : https://www.francereprises.com/vigie/entreprise/832805402 · https://www.infogreffe.fr/entreprise/edd205e7-20f1-4756-9ffd-9aae56e3f980 · https://www.lejournaldelabijouterie.com/p/clap-de-fin-pour-la-maison-courbet · https://luxus-plus.com/diamants-de-synthese-courbet-est-liquidee
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/france/courbet/`
