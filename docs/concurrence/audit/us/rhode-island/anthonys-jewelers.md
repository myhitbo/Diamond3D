# Audit : Anthony's Jewelers

- **Site** : https://www.anthonysjewelers.com/ ; page de départ : https://www.anthonysjewelers.com/product/round-lab-grown-diamond-solitaire/
- **Date** : 15/11/2026 (réalisé le 25/11/2026 d'après l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13
- **Statut** : **partiel**. Aucun blocage robots (robots.txt : seul `/wp-admin/` interdit). Mais sur les fiches bagues de fiançailles et solitaires, le prix, les options et le bouton « Add to cart » sont **cachés par la feuille de style du site** : le visiteur ne peut ni choisir ni ajouter. Je n'ai pas forcé l'affichage. Le site a aussi renvoyé des erreurs 502 (hébergeur) pendant environ 5 minutes. Panier vu vide uniquement.
- Repères : [V] vérifié, [V, code] lu dans le HTML servi, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
| --- | --- |
| Départ : fiche « Round Lab Grown Diamond Solitaire Keepsake Quality » | titre, photo unique, « Add to wishlist », onglet « Additional information » ; **rien d'autre n'est visible** (formulaire d'options `display:none`) |
| Catégorie « Lab Grown Diamonds » | 12 solitaires (6 formes × 2 qualités), prix en fourchette, tri, filtre de prix |
| Fiche « Marry Me » (bague de fiançailles) | même masquage du formulaire ; description ; onglets Description, Additional information, Shipping & Delivery |
| Panier `/cart/` | « Your cart is currently empty » ; lien « Return to shop » |
| Paiement | non atteint (panier vide, ajout impossible) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Carat (11 valeurs) | liste (code) | dans le HTML de la fiche ; **invisible** pour le visiteur (largeur 0) | voir « Prix » | non testé : masqué par CSS |
| Gold choice (2 valeurs) | liste (code) | idem | identique pour les 2 | non testé : masqué |
| Ring size (11 tailles) | liste (code) | idem | – | non testé : masqué |
| Add to cart | bouton (code) | présent dans le HTML, invisible | – | non testé : masqué |
| Add to wishlist | lien | présent ; compteur 0 ; non cliqué (état serveur) | – | non testé |
| Click to enlarge (loupe) | lien | présent sous la photo ; ouverture non vérifiée | – | non testé |
| Additional information | onglet | texte : « Lab grown diamonds are as real as diamonds mined from the earth… Keepsake is VS1-SI1 clarity and G-H color » ; monture Tiffany 14 k jaune ou blanc « at no extra charge » | – | OK |
| Previous / Next product | flèches | mènent aux fiches voisines (Princess, Premier Quality) | – | OK [V, lien] |
| Related products (8, « Select options ») | liens | mènent aux fiches (prix en liste visibles ailleurs) | – | OK [V, lien] |
| Tri (Default, Popularity, Average rating, Newness, Price low→high, high→low) | liens catégorie | présents ; non cliqués | – | non testé |
| Filtre de prix (0–1 500, 1 500–3 000, 3 000–4 500, 4 500+) | liens catégorie | présents ; non cliqués | – | non testé |
| Recherche, My Account, Cart, Testimonials, About, Contact | liens | présents ; recherche et connexion non utilisées | – | non testé (compte) |
| Connexion / création de compte (formulaire) | champs | présent dans un tiroir ; non rempli | – | non testé : règle |
| CALL 401-353-5585, tel, mailto | liens | `tel:` et `mailto:` ; non déclenchés | – | non testé |
| Bandeau cookies ACCEPT | bouton | présent | – | OK |
| Badge The Knot | lien | vers theknot.com ; non suivi | – | non testé |
| 3D, 360°, vidéo, AR, sur la main | vues | absents | – | absent |
| Partager, comparer, financement, chat, WhatsApp, rendez-vous en ligne | services | absents ; rendez-vous par téléphone seulement (« Call Direct For An Appointment ») | – | absent |
| Page « Loose Diamonds » | lien menu | **502 Hosting Server Connect Timeout** [V] | – | en erreur |
| Fiche chaîne 14 kt (wheat) | lien | 502 au moment du test ; redevenu normal ensuite, non rouvert | – | erreur transitoire |

## Options disponibles

- **Solitaire synthétique (code HTML)** : carat 1,00 à 3,00 par 0,25, puis 4,00 et 5,00 ; or 14 k jaune ou 14 k blanc « Tiffany » ; taille 4 à 9 par demi-taille. [V, code]
- **Prix par carat (identiques jaune et blanc)** : 1 ct 960 $ ; 2 ct 1 800 $ ; 3 ct 2 800 $ ; 4 ct 3 500 $ ; 5 ct 4 375 $. Les carats intermédiaires ne figurent pas dans les 10 variantes lues (tableau tronqué à 5 carats, 2 métaux). [V, code]
- **Catégorie lab grown** : 12 produits : formes Round, Princess, Oval, Cushion, Pear, Emerald, en qualité « Keepsake » (960 à 4 375 $) et « Premier » (1 600 à 3 500 $). [V]
- **Fiche « Marry Me 1,00 ct »** : une seule variante de carat (1,00 ct t.w.), or 14 kt jaune ou blanc, taille 4 à 9 ; texte « Retail $3796 sell for $ 1499 ». [V, code]
- Autres rubriques : bagues « Keepsake / Investment Quality » de 649 à 12 999 $, alliances, boucles, chaînes (349 à 5 999 $), pendentifs, perles, cadeaux personnalisés. [V, listes]
- Pas de choix de forme, d'origine, de monture, de griffes, de gravure en ligne.

## Prix, délais, retours, garanties

- **Prix** : **affiché en fourchette dans les listes** (« $960.00 – $4,375.00 »), mais **absent des fiches** de bagues de fiançailles (masqué). Aucune décomposition. Comparaison à un « retail » barré dans le texte (1 499 $ au lieu de 3 796 $).
- **Délais** : livraison gratuite « in-stock » 7 à 10 jours ouvrés ; article non en stock jusqu'à 3 semaines ; express 2 jours +10 $, nuit +20 $. Pas de délai de fabrication. [V, `/policies/`]
- **Retours** : 10 jours calendaires, reçu joint, frais de retour à la charge du client, remboursement à réception. Pas d'exception « sur mesure » citée. [V]
- **Garantie** : 1 an gratuit contre défauts de fabrication. Remise à taille gratuite et certificat d'évaluation gratuits « FREE Certificate of Appraisal • FREE Diamond Ring Sizing » (page About). [V]
- **Livraison** : signature exigée ; pas de livraison hors des États-Unis ; taxe de vente RI pour le Rhode Island. [V]
- **Certificats** : aucun certificat GIA/IGI annoncé sur les fiches lues ; seulement une classe (« Keepsake VS1-SI1, G-H »). [V]
- **Synthétique** : « lab grown », « as real as diamonds mined from the earth ». Pas de comparaison de prix avec le naturel. [V]
- **Langues/devises** : anglais, dollars.

## Confiance et service

- Boutique à North Providence (1525 Mineral Spring Ave) ; ouvert mardi à samedi 10h-18h ; téléphone et e-mail ; numéro 800 dans le titre de certaines pages. [V]
- Avis : page de 10 témoignages (prénoms, États) sans note ni date ; pas d'avis sur les fiches. [V]
- Preuves de fabrication : aucune (pas de photos ni vidéos d'atelier) ; texte « consortium of experts… buying the finest diamonds » [V].
- Contenu soigné par endroits, mais un onglet de fiche contient du texte de remplissage « Vestibulum curae torquent… » [V, code].
- Message d'accueil rose : « FOR OUR BEST SALE PRICES, CALL 401-353-5585 » : les meilleurs prix se négocient au téléphone. [V]

## Points forts à retenir pour JR Diamond

1. **Prix par carat affichés en liste** (960 $ à 4 375 $) : le prix est visible avant le détail. Preuve : catégorie Lab Grown Diamonds.
2. **Mise à taille offerte et certificat d'évaluation offerts** : réduit le risque perçu. Preuve : page About Us.
3. **Livraison gratuite 7 à 10 jours** avec options express chiffrées (+10 $, +20 $). Preuve : `/policies/`.
4. **Une qualité nommée (Keepsake VS1-SI1 G-H)** : lisible pour le client.
5. **Coordonnées et horaires visibles** sur toutes les pages (téléphone, adresse).

## Défauts observés

- **Prix, options et ajout au panier cachés sur la fiche** d'une bague de fiançailles : le visiteur ne peut rien configurer en ligne [V, CSS : règle `display:none` sur le formulaire pour ces catégories].
- Aucune vue 3D, 360°, vidéo ; une seule photo.
- 502 intermittents (page Loose Diamonds, fiche chaîne, panier) [V].
- Aucun certificat GIA/IGI annoncé ; pas de décomposition du prix.
- Politique de retour de 10 jours sans mention du sur mesure ; politique datée de 2017 (confidentialité) [V].
- Texte de remplissage dans un onglet de fiche [V].
- Affichage iPhone : première image en 4,0 s (ordinateur 1,2 à 1,7 s).

## Limites de l'audit

- Impossible de tester ajout au panier, choix d'options, prix selon la taille, panier avec article : formulaire invisible, non forcé.
- Mesure de la première image : fiche « Marry Me 1,00 ct » mobile 4,0 s, ordinateur 1,2 s ; fiche de départ ordinateur 1,7 s (une mesure chacune, à froid).
- Fiches de collections (Marry Me, Lady Di), alliances, filtres de la catégorie, loupe : non actionnés.
- Pages du site lues par navigateur et curl ; l'ordre de grandeur des prix de variantes vient du code HTML, pas d'un affichage.

## Sources

- https://www.anthonysjewelers.com/product/round-lab-grown-diamond-solitaire/ (variantes lues dans `data-product_variations`)
- https://www.anthonysjewelers.com/product-category/lab-grown-diamonds-main/
- https://www.anthonysjewelers.com/product/1-00-ct-marry-me-diamond-engagement-rings/
- https://www.anthonysjewelers.com/policies/
- https://www.anthonysjewelers.com/our-company/
- https://www.anthonysjewelers.com/anthonys-jewelers-testimonials/
- https://www.anthonysjewelers.com/cart/
- robots.txt : https://www.anthonysjewelers.com/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/anthonys-jewelers/`
