# Audit Hamzare (hamzare.com), Sofia

- **Site** : Hamzare, https://www.hamzare.com/ (société Solaris Circle EOOD, Sofia ; même groupe que DiamondTrade, vendeur de diamants B2B) [V : `/policies/refund-policy`, `/pages/about`]
- **Page de départ** : https://www.hamzare.com/collections/engagement-rings puis fiche https://www.hamzare.com/products/solitaire-ring-3
- **Date** : 15/11/2026 (session du 24/11 pour la rédaction)
- **Appareils** : Chromium ordinateur 1366×900, iPhone 13 émulé
- **Statut** : **partiel** (le panier n'a pas été alimenté : `/cart/add` est interdit par `robots.txt` ; plusieurs listes déroulantes n'ont pas pu être ouvertes)
- Légende : [V] vérifié (contrôle actionné ou page lue) · [I] inféré · [S] supposé. Les prix sont ceux vus par le navigateur de l'audit : **dollars (USD)**, URL avec `?country=US` ; le même site affiche des euros dans les extraits d'un moteur de recherche (« à partir de 1 690 € ») [V].

## Parcours

| Étape | Options |
|---|---|
| Catalogue (46 bagues en diamant naturel, 46 en synthétique) | Origine (tous / naturel / synthétique), filtres Forme, Carat, Style, Type d'or, « Tous les filtres », sélecteur de vue (de face / de côté), tri [V] |
| Fiche (configurateur) | Origine (onglets Naturel / Synthétique), forme, carat (prix par carat), titre 9 k ou 14 k, couleur d'or (blanc, jaune, rose), taille de doigt, comparaison sur main [V] |
| Aide | Tableau des tailles, « Réserver cette configuration » (consultation), bouton Appeler, Viber [V] |
| Panier | Non atteint (voir limites) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau cookies : « Tout accepter », « Seulement le nécessaire », « Réglages » | boutons | « Seulement le nécessaire » ferme le bandeau | — | OK [V] |
| Carat 0,30 / 0,50 / 0,80 / 1,00 / 1,50 ct (naturel, 9 k blanc) | boutons | change l'URL (`carat=`) et la variante ; la photo ne change pas | 1 680 / 2 320 / 3 690 / 5 350 / 8 660 USD | OK [V] |
| Carat 0,30 à 3,00 ct (synthétique, 14 k blanc) | boutons | idem | 1 490 / 1 650 / 1 920 / 2 290 / 2 680 / 2 960 / 3 550 USD | OK [V] |
| Titre 14 k / 9 k | boutons | change le SKU (`…-14KT-NAT`) | 9 k 1 680 → 14 k 1 930 USD (+250) ; synthétique 1 250 → 1 490 | OK [V] |
| Couleur d'or (blanc, jaune, rose) | boutons | change le SKU (`WG`, `YG`, `RG`) et les photos | aucun changement (1 930 USD) | OK [V] |
| Forme (rond, princesse, ovale, poire, émeraude, radiant, Asscher, marquise) sur `solitaire-ring-1` | boutons | change `shape=` et le SKU (`-RD-`, `-PR-`, `-OV-`…) | **identique à 0,30 ct : 2 020 USD** pour les 8 formes | OK [V] |
| Forme sur `solitaire-ring-3` | bouton | une seule forme proposée (rond) | — | Limité [V] |
| Origine Naturel / Synthétique | onglets | mène à `solitaire-ring-3-lab-grown` (autre fiche) ; 0,30 ct : 1 680 USD (naturel, 9 k) contre 1 490 (synthétique, 14 k) | voir ci-dessus | OK [V] |
| « Comment cette taille paraît-elle ? » | `summary` | panneau « Comparer le diamant sur la main » : forme, carat, couleur d'or, « Rapprocher », cote ≈ 4,4 × 4,4 mm pour 0,30 ct rond, « Appliquer le choix à la bague » ; note : échelle relative, pas 1:1 | — | OK [V] |
| Tableau des tailles | bouton | fenêtre : taille EU 45 à 65 et diamètre intérieur (14,3 à 20,7 mm) ; lien « Comment mesurer » | — | OK [V] |
| « Choisir la taille » | liste | ne s'est pas ouverte (hors fenêtre) | — | Non testé : liste fermée, élément hors écran |
| Unité de taille « Diamètre (mm) » | liste | ne s'est pas ouverte | — | Non testé : même raison |
| « Réserver cette configuration » | lien | `/pages/personal-selection?variant=…&shape=round` ; page non ouverte | — | Non testé |
| « Appeler » | bouton | ouvre un menu ; contenu non relevé | — | Partiel |
| « Ajouter au panier » | bouton | non cliqué : `robots.txt` interdit `/cart/add` | — | **Panier interdit par `robots.txt`** |
| Fiches de bagues d'alliance associées (6) | liens | `/products/…wedding-band?sku=HAM-NRB-…` ; prix 1 410 à 1 500 USD en 9 k | 1 410–1 500 USD | Liens présents [V] ; pages non ouvertes |
| Avis | carrousel | flèches précédent/suivant ; un avis Google affiché ; « Tous les avis » vers Google Maps | — | Présent [V] |
| FAQ (7 questions) | `summary` | certificat, consultation, échantillon, prix compris, fabrication et livraison, aide après-vente, choix du diamant ; ouvertures non lues en détail | — | Présent [V] |
| Pied de page : Viber, téléphone, e-mail, itinéraire | liens | `tel:+359877998775`, `hello@hamzare.com`, Viber Business | — | Présent [V] |
| Liens « GPT / Gemini / Perplexity / Claude » sous « Demandez à une IA » | liens | ouvrent un agent conversationnel externe avec un texte prérempli sur la marque | — | Présent [V] ; non ouverts |
| Langue Български / English | bouton | les deux langues existent (`/en`) | — | OK [V] |
| Catalogue : filtres Forme, Carat, Style, Type d'or ; sélecteur de vue ; « Tous les filtres » | boutons | présents sur la page ; **non actionnés un par un** | — | Non testé : temps |

## Options disponibles

- **Formes** (fiches multiforme) : rond, princesse, ovale, poire, émeraude, radiant, Asscher, marquise [V].
- **Carat du centre** : 0,30 / 0,50 / 0,80 / 1,00 / 1,50 en naturel (fiche testée) ; 0,30 à 3,00 en synthétique [V].
- **Or** : 9 k et 14 k, blanc / jaune / rose ; pas de 18 k ni de platine sur la fiche (cf. boucles d'oreilles en 18 k sur la page Bulgarie) [V].
- **Origine** : naturel ou synthétique, avec rapport IGI ou GIA pour la pierre centrale [V].
- **Taille de doigt** : 45 à 65 (tableau) ; sélecteur non ouvert [V pour le tableau].
- **Gravure** : « gravure gratuite » et « mise à taille gratuite » annoncées [V] ; polices et nombre de caractères non trouvés.
- **Styles** : solitaire, pavé, trois pierres, halo, bezel, grappe ; 46 modèles [V].

## Prix, délais, retours, garanties

- **Prix** : affiché sur chaque carat et chaque titre, « le prix se met à jour selon la configuration » [V]. Pas de décomposition (matière, façon, pierre) [V]. Poids du métal ≈ 2,74 g et largeur ≈ 2,4 mm donnés pour le modèle (ordre de grandeur, dépend de la taille) [V].
- **Délai** : « fabrication et livraison 3 à 5 semaines » avec une date de livraison estimée affichée ; politique : 2 à 4 semaines en Bulgarie, 3 à 5 semaines ailleurs, jusqu'à +10 jours ouvrés à Noël [V].
- **Livraison** : 15 € Bulgarie, 30 USD États-Unis, 30 € Europe et reste du monde ; retrait gratuit au showroom ; UPS assuré [V]. Droits et taxes à la charge du client hors Bulgarie [V].
- **Retours** : 14 jours conditionnels (bijou non porté, sans retouche de taille ni polissage, pierre intacte, certificats et emballage, **sans gravure personnalisée**) ; reprise payée par Hamzare, frais d'envoi initiaux non remboursés ; « garantie commerciale volontaire » ; la page précise que toutes les bagues sont faites sur mesure [V].
- **Garanties** : redimensionnement et gravure gratuits (affiché) ; durée de garantie de la monture non trouvée [V].
- **Certificats** : « rapport IGI ou GIA pour chaque pierre centrale » ; fourchettes de couleur D–H, pureté FL–VS2, taille Excellent–Very Good ; un « diamant d'exemple » est montré (« nous choisissons un exemple selon votre configuration ») ; une mention technique indique que les fiches sont des exemples et non des pierres affectées [I : texte lu dans une adresse de lien] [V pour la fourchette].

## Confiance et service

- **Consultation** gratuite de 30 minutes (showroom, visio ou téléphone), 7 j sur 7 de 8 h à 20 h ; Viber [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande trouvé ; la page parle d'exemples et de « dossiers » de bague [V sur les pages lues].
- **Avis** : avis Google affichés ; notes et nombre non relevés [V].
- **Transparence** : mentions légales complètes (EIK 203809678, TVA BG203809678), adresse du showroom [V].
- **Langues** : bulgare, anglais ; **devise** : USD (selon le pays détecté) ; euros pour la Bulgarie d'après la recherche web [V/I].
- **Libellé** : « лабораторен диамант » (diamant de laboratoire) ; jamais « синтетичен » [V].

## Points forts à retenir pour JR Diamond

1. **Prix par carat sur chaque bouton** (1 680 → 8 660 USD) : le client voit le coût de chaque choix avant de cliquer. Preuve : boutons « 0,50 карата 2 320 USD » sur la fiche.
2. **URL de configuration partageable** (`shape=`, `carat=`, `gold=`, `metal_karat=`) et SKU lisible (`HAM-NRE-001-RD-WG-14KT-NAT`) : proche de la référence JR-XXXXXX de JR Diamond. Preuve : changement d'URL à chaque clic.
3. **Comparaison de la taille du diamant sur une main** (4,4 × 4,4 mm pour 0,30 ct) avec choix de la forme, du carat et de l'or. Preuve : panneau « Comment cette taille paraît-elle ? ».
4. **Date de livraison estimée** affichée sur la fiche, à côté du délai en semaines. Preuve : « Livraison estimée : 15 – 29 décembre ».
5. **Tableau de tailles intégré** avec diamètres, et lien « comment mesurer ». Preuve : fenêtre « Таблица с размери ».
6. **Politique de retour qui reconnaît la fabrication sur mesure** tout en offrant 14 jours (retour payé par l'atelier) : formulation à étudier pour le droit israélien. Preuve : `/policies/refund-policy`.

## Défauts observés

- Les 8 formes de pierre coûtent le même prix à 0,30 ct sur la fiche testée (2 020 USD) : le prix ne reflète pas la forme pour cette pierre [V].
- Aucune vue 3D : photos et trois vidéos par fiche (32 images, 0 canvas, 0 model-viewer) ; le visuel ne change pas avec le carat [V].
- Incohérence de chiffres : « 2 208 configurations uniques » (accueil anglais) contre « 29 520 configurations » (page Bulgarie) [V].
- « Gravure gratuite » et « mise à taille gratuite » annoncées, mais la reprise est refusée si la bague est gravée ou retaillée [V].
- Liste « Choisir la taille » et liste d'unité non ouvrables en navigation automatique (élément hors écran) [V].
- Prix en dollars pour un visiteur détecté aux États-Unis, sans sélecteur de devise visible [V].
- Texte caché dans des liens vers des assistants IA : requêtes préremplies longues, dont une consigne de réponse (« pas d'affirmation non vérifiée ») ; ignoré [V].

## Limites de l'audit

- Pas d'ajout au panier (`/cart/add` interdit) : récapitulatif, frais, moyens de paiement non vus.
- Filtres du catalogue non actionnés un par un ; sélecteur de taille et unité non ouverts ; page « consultation » non ouverte ; bagues d'alliance non auditées.
- Mesure de chargement : visuel principal à 2,9 s sur ordinateur (HTML prêt à 2,8 s) et 3,3 s en affichage iPhone (3,2 s) [V], sur un seul passage.
- Devise et pays déterminés par l'adresse de l'audit (États-Unis).

## Sources

- https://www.hamzare.com/collections/engagement-rings · https://www.hamzare.com/products/solitaire-ring-3 · https://www.hamzare.com/products/solitaire-ring-1 · https://www.hamzare.com/products/solitaire-ring-3-lab-grown
- https://www.hamzare.com/policies/refund-policy · https://www.hamzare.com/policies/shipping-policy · https://www.hamzare.com/pages/bulgaria · https://www.hamzare.com/pages/about · https://www.hamzare.com/en · https://www.hamzare.com/pages/laboratorni-diamanti
- `robots.txt` : https://www.hamzare.com/robots.txt (vérifié avec `robots.cjs`)
