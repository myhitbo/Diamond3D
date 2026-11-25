# Inventaire Géorgie (pays du Caucase) : joailliers en ligne, bagues de fiançailles et alliances

Date : 15/11/2026 (contrôles faits en session le 24/11/2026). Explorateur : Géorgie. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun géorgien) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé. Prix en lari (₾, GEL).

## Constat d'ensemble
- Le marché géorgien est **un marché de catalogue et de boutique** : aucun site trouvé n'a de configurateur, de visuel 3D ou 360°, ni de constructeur de bague en ligne [V : 7 sites examinés ou lus, voir tableau].
- Le sur mesure passe par un **formulaire ou un rendez-vous en boutique** (Marilisi, Suli & Guli, Lazaro, Barron). Seul Suli & Guli annonce une « visualisation 3D photoréaliste » avant fabrication, et un croquis 3D gratuit à la demande, sans la montrer en ligne [V : suliandguli.ge/en].
- Terme géorgien pour le diamant synthétique : **« ლაბორატორიული ბრილიანტი »** (« diamant de laboratoire »), parfois suivi de « (Lab Grown) » [V : https://suliandguli.ge/ , section « ლაბორატორიული ბრილიანტები (Lab Grown) »]. Variante : « ლაბორატორიაში გაზრდილი ბრილიანტები » (« diamants cultivés en laboratoire ») [V : extrait de résultat de recherche d'un post Instagram, page non ouverte]. Redberry affiche en anglais « Lab-Grown Diamond Rings » [V : extrait de recherche, site bloqué]. Aucun terme « synthétique » (სინთეზური) trouvé chez les vendeurs [V : recherche sur 2 requêtes, aucune occurrence chez un joaillier].
- Le diamant synthétique est peu présent : seuls Suli & Guli et Redberry en proposent [V]. Barron, Marilisi : naturel seulement affiché [V].

## Tableau

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Marilisi Jewelry House (marque nationale, depuis 2008) | Tbilissi | https://marilisi.ge/ (200) | https://marilisi.ge/pages/engagement-rings-individual-order | Non. Catalogue de 12 bagues de fiançailles et 4 alliances avec prix, taille de doigt, panier Shopify ; formulaire « sur mesure » + guides PDF (EN, KA) | Aucun blocage de lecture. robots.txt : tout autorisé. Défi Cloudflare reçu par curl sur /agents.md (non contourné). Avis aux agents dans robots.txt : utiliser les interfaces UCP pour les actions d'achat | EN, KA (boutique internationale : marilisi.com) | Seul site géorgien avec un parcours d'achat complet, prix, politique de livraison et de retour publiée, fabrication « atelier » mise en scène |
| 2 | Barron (Barron House) | Tbilissi | https://barron.ge/ (200) | https://barron.ge/en/product/66-engagement-rings (le menu « Engagement rings » mène à une liste vide) | Non. Fiches à 2 listes (taille, métal), panier, prise de rendez-vous | Aucun (robots.txt : `Disallow:` vide) | EN, KA | Catalogue de diamants naturels avec carat, couleur et pureté annoncés (0,25 ct E VS1), panier avec paiement par carte, rendez-vous en ligne |
| 3 | Zarapkhana (Zarapxana) | Tbilissi | https://zarapkhana.ge/ | https://zarapkhana.ge/en/wedding/engagement-rings | Non [V : extrait de recherche] ; pages « Custom Order », « Exclusive Design », « Tax Free » | **Bloqué** : robots.txt illisible (HTTP 200, page HTML) → INCONNU | EN, KA, RU | Plus grande marque nationale ; prix affichés (de 1 970 à 21 060 ₾), mention « By order » ; non audité |
| 4 | Suli & Guli | Tbilissi | https://suliandguli.ge/en (200) | https://suliandguli.ge/en (page unique, formulaire de contact) | Non. Atelier sur mesure : diamants naturels, synthétiques, saphirs ; « visualisation 3D » promise ; pas de prix, pas de panier | Aucun (pas de robots.txt) | KA (racine), EN | Positionnement le plus proche de JR Diamond (atelier, GIA, synthétique, 3D, platine/or) mais vitrine sans vente en ligne |
| 5 | Redberry (groupe wegroup) | Tbilissi | https://myredberry.ge/en | https://myredberry.ge/en | Non. Filtres « Engagement Rings », « Lab-Grown Diamond Rings », « Per Budget » ; paiement échelonné | **Bloqué** : robots.txt autorise mais HTTP 403 au premier accès par curl (un essai, pas de nouvel essai) | EN, KA | Grande chaîne en ligne avec rayon de bagues au diamant de laboratoire ; non audité |
| 6 | Mr. Shavit (Shavit's jewelry salon) | Tbilissi | https://wedrings.mrshavit.com/ | https://wedrings.mrshavit.com/ | Non. Boutique d'alliances classiques et modernes et de bagues de fiançailles, vidéo par modèle [V] | **Bloqué** : robots.txt illisible (HTTP 200, HTML) → INCONNU. Page d'accueil ouverte une fois par erreur (voir « Écarts ») | KA | Alliances à prix affichés, vidéo de chaque modèle, poinçons 585 et 750 ; non audité |
| 7 | Lazaro | Tbilissi | https://lazaro.ge/ (200) | https://lazaro.ge/custom-jewelry | Non. Demande sur mesure par formulaire | Aucun (robots.txt : `Allow: /`) | EN, KA | Contenu qui semble de test [I] : 9 produits dont « hello 101 ₾ », « New Product 123,45 ₾ », « pure aero 5 050 USD » ; sans intérêt pour la comparaison |

Écartés : Arma Rings (« Wedding Rings in Georgia ») : seul un post Instagram trouvé, aucun site [V : 2 recherches]. UNIL Jewelry (uniljewelry.com) : bijoux en argent de créateur, alliances sans diamant, hors cible [V : extrait de recherche]. Gremi Jewelry : atelier de quartier, fiche d'annuaire seulement [V]. Barron et Marilisi sont les seuls sites ouverts sans blocage avec prix et panier.

## Audit décidé
Les 2 premiers sites non bloqués de la liste (Marilisi, Barron) sont audités : `marilisi.md`, `barron.md` dans ce dossier.

## Écarts à la règle de lecture (à reporter dans la synthèse)
1. **wedrings.mrshavit.com** : le contrôle `robots.cjs` a répondu INCONNU, mais la commande de lecture suivante, lancée dans la même ligne de commande, a ouvert la page d'accueil dans Chromium (HTTP 200, texte lu : liste de prix, mentions de vidéo et de rendez-vous). Aucune autre page n'a été ouverte. Les constats du tableau marqués [V] pour ce site viennent de cette lecture et doivent être traités comme obtenus hors règle.
2. **zarapkhana.ge/en/main** : après un verdict INCONNU sur une autre page du site, un `curl` a demandé cette page pour contrôler le code HTTP (200). Le contenu n'a pas été lu. Les informations sur Zarapkhana viennent d'extraits d'un outil de recherche tiers.
3. **marilisi.ge/agents.md** : demandé une fois par curl, a reçu un défi Cloudflare ; pas de nouvel essai.

## Sources
- Recherches web (Parallel Search), 6 requêtes en anglais, géorgien : joailliers de Tbilissi, bagues de fiançailles, « ლაბორატორიული ბრილიანტი », 24/11/2026.
- https://marilisi.ge/ et pages citées dans `marilisi.md` ; https://marilisi.ge/robots.txt.
- https://barron.ge/ et pages citées dans `barron.md` ; https://barron.ge/robots.txt.
- https://suliandguli.ge/ et https://suliandguli.ge/en (curl et Chromium).
- https://lazaro.ge/ , https://lazaro.ge/custom-jewelry (extraits de recherche et curl, code 200).
- https://zarapkhana.ge/en/wedding/engagement-rings , https://myredberry.ge/en (extraits de recherche).
- https://madloba.info/en/tbilisi/jewelry-stores/suli-guli (annuaire, description du processus de Suli & Guli : consultation, sélection des pierres, 3D, fabrication, contrôle, poinçon).
