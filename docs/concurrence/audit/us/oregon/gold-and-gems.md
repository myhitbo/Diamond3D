# Audit : Gold and Gems Fine Jewelry (Ashland, Oregon)

- **Site** : Gold and Gems Fine Jewelry (Shopify, famille Hansen, depuis 1982)
- **Adresse** : https://www.goldandgems.com/ ; page de départ : https://www.goldandgems.com/pages/diamond-search
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et iPhone 13 émulé (mesure du temps et liste des contrôles seulement)
- **Statut** : partiel (le parcours bague + pierre n'a pas pu être mené jusqu'au panier : voir Limites)
- **robots.txt** : `Allow: /` ; `/cart/` interdit (donc aucun « Add to bag » cliqué) ; vérifié avec robots.cjs.

Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options observées |
| --- | --- |
| Bandeau en 3 étapes (`Select a ring` > `Center Diamond` > `Complete Your Setting`) [V] | affiché sur la recherche de diamants, la fiche de pierre et la fiche de monture |
| 1. Monture (`/collections/build-an-engagement-ring`) [V] | liste de montures « Setting Only » à prix affiché, tri (8 critères), filtres |
| 2. Pierre centrale (`/pages/diamond-search`) [V] | recherche de diamants : onglets Natural / Lab Created / Fancy color ; 9 formes ; carat, prix, couleur, pureté, taille, polissage, rapport L/l, table, profondeur, symétrie, fluorescence, laboratoire |
| 3. Fiche de pierre [V] | photo, bouton ROTATE, caractéristiques, prix, bouton « Return to search » |
| 4. Finition de la bague [S] | « Complete Your Setting » : non atteint (aucun bouton d'assemblage trouvé) |
| Sur mesure [V] | `/pages/custom-design` : « Send us your design concept », conçu par Ron Hansen et Anna May |

## Contrôles vérifiés

Ordinateur, page de recherche (239 contrôles listés, 96 en iPhone). Je ne détaille que les contrôles du configurateur ; la navigation du site (menus, pied de page, réseaux sociaux : environ 190 liens) est listée par controls.cjs et n'est pas testée un à un.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Natural | bascule | 64 676 résultats ; liste de pierres naturelles [V] | prix par pierre | fonctionne |
| Lab Created (UltraFire) | bascule | 14 184 résultats [V] | idem | fonctionne |
| Fancy color | bascule | 0 résultat dans l'état testé (avec Lab ou Natural) [V] | n/a | fonctionne, vide |
| Formes : ROUND, OVAL, CUSHION, PRINCESS, EMERALD, PEAR, MARQUISE, ASSCHER, RADIANT, HEART | boutons | clic par script : le compteur est resté illisible (« ? ») ; clic souris : délai dépassé (4 s) [V] | n/a | non concluant |
| Curseurs carat (0,31 à 16,40 ct), prix (302 à 34 200 $), couleur, pureté, taille, polissage, L/l (0 à 9), table %, profondeur %, symétrie, fluorescence | curseurs | présents, valeurs bornes lues [V] ; non manipulés | filtre le prix | non testé (curseurs à deux poignées) |
| Laboratoire : GCAL | case | 5 227 résultats [V] | n/a | fonctionne |
| Laboratoire : IGI | case | 14 103 résultats [V] | n/a | fonctionne |
| Laboratoire : GIA, HRD, GSI, NONE | cases | présentes [V] ; non cochées | n/a | non testé |
| RESET FILTER | bouton | revient à 14 184 résultats [V] | n/a | fonctionne |
| Tri par colonne : Shape, Carat, Cut, Color, Clarity, SKU | boutons | réordonne la liste ; Carat bascule croissant (0,31) puis décroissant (16,40) [V] | n/a | fonctionne |
| Recherche SKU + FIND | champ + bouton | clic FIND non abouti (délai dépassé) ; aucune saisie répétée [V] | n/a | non concluant |
| LOAD MORE | bouton | clic exécuté, nouvelle page de lignes non vérifiée [V] | n/a | non concluant |
| Ligne de pierre | ligne | remplit le panneau « STONE DETAILS » (stock, carat, couleur, forme, taille, symétrie, polissage, table, profondeur, labo) [V] | n/a | fonctionne |
| IMAGE | bouton | affiche la photo de la pierre [V] | n/a | fonctionne |
| ROTATE | bouton | lors d'un passage, un cadre loupe360.com (vidéo de la pierre, 500 x 500) a été chargé ; non reproduit à un second passage, ni sur la fiche [V partiel] | n/a | incertain |
| SEE DETAILS | bouton | ouvre `/pages/diamond-search/1-19-carat-faceted-cut-f-color-vs2-clarity-diamond-stock-stl604019` [V] | n/a | fonctionne |
| Fiche de pierre : Return to search | lien | retour à la recherche [S] | n/a | non testé |
| Fiche de pierre : Request More Info (mesures) | lien | présent, non cliqué (formulaire) [V] | n/a | non testé |
| Fiche de monture : puce Metal | radio | une seule valeur (18K White Gold) sur la monture testée [V] | n/a | non testé en variantes |
| Fiche de monture : Ring size | liste | 4 à 9,5 par quart de taille (23 valeurs) [V] | aucun effet visible | présent |
| Fiche de monture : PRODUCT INQUIRY | bouton | formulaire de demande ; non cliqué (aucune donnée envoyée) [V] | n/a | non testé |
| Ajout au panier (« Add to bag » annoncé par l'inventaire) | bouton | **non cliqué** : panier interdit par robots.txt (`/cart/`) | n/a | non testé |
| Cart | lien | `/cart` : « Your cart is empty » [V] | n/a | fonctionne |
| Wishlist, recherche du site, Virtual Appointment, Schedule Appointment, téléphone `tel:`, e-mail `mailto:` | liens | présents [V] ; non suivis (rendez-vous = `/pages/services`) | n/a | non testé |
| Vues 3D, AR, essayage sur la main, zoom, partage, comparer, chat, WhatsApp | n/a | **absents** de la page de recherche et de la fiche testée [V] | n/a | n/a |

## Options disponibles

- **Pierres** [V] : naturelles (64 676 en base le 15/11), « UltraFire » synthétiques (« Lab Created », 14 184), « Fancy color » ; 9 formes (rond, ovale, coussin, princesse, émeraude, poire, marquise, asscher, radiant, cœur selon les icônes) ; carat de 0,31 à 16,40 ; couleur ; pureté ; taille ; polissage ; symétrie ; fluorescence ; laboratoires GCAL, GIA, GSI, HRD, IGI.
- **Montures** [V] : fabricants Simon G., Scott Kay, ArtCarved, et marque maison ; or jaune 14 et 18 k, or blanc, or rose, multi-tons, platine (menus) ; tri : pertinence, meilleures ventes, A-Z, Z-A, prix croissant et décroissant, date.
- **Tailles de doigt** [V] : 4 à 9,5 (quarts).
- **Gravure** : mentionnée dans la politique de retour comme non retournable ; aucun champ de gravure vu [V].
- **Corps de bague, griffes, pavage** : non configurables en ligne [V] ; sur mesure par envoi de concept.

## Prix, délais, retours, garanties

- **Prix de la pierre** [V] : affiché ; exemple 1,19 ct, ronde, F, VS2, laboratoire GCAL : **937,00 $**. Prix de la pierre séparé de la monture.
- **Prix de la monture** [V] : « Regular price » « Setting Only », de 2 710 $ (marquise) à 5 990 $ (split-shank) dans les premières lignes de la liste. La fiche testée (LR3291) n'affiche pas de prix dans le texte extrait ; mention « Ring price does not include the center stone. Prices fluctuate according to international metal market prices ».
- **Total** : « Total » annoncé par l'inventaire (non revu : étape 4 non atteinte) [S].
- **Pas de décomposition** métal / façon / pierre [V].
- **Délai de fabrication** : non trouvé sur les pages lues [V]. Un avis client mentionne une bague « done weeks before the wedding » (témoignage).
- **Retours** [V] (`/policies/refund-policy`) : 31 jours à compter de l'expédition, pièce non portée ; un premier retour gratuit par client ou commande, les suivants jusqu'à 20 % de frais ; **gravé, mis à taille et commandes spéciales non retournables** ; expédition non remboursée.
- **Garantie** [V] (`/pages/warranty`) : un an ajouté à la garantie du fabricant sur chaque produit ; garanties des marques reprises sur la page.
- **Livraison, moyens de paiement** : non vus (panier non rempli) [V].
- **Politique de prix** [V] : « prix du métal précieux » variables sans préavis ; droit de corriger les erreurs.

## Confiance et service

- **Certificats** [V] : bandeau UltraFire : « Certified by trusted labs like IGI, GCAL, or GIA », inscription laser d'un identifiant, registre « UltraFire ». Labo affiché par pierre (ex. GCAL).
- **Libellé synthétique** [V] : « Lab Created » (filtre), « Labgrown » (fiche), « UltraFire™ Lab Grown Real Diamonds » (marque).
- **Avis** [V] : note 4,9 sur 127 avis Google, résumé automatique (« AI Summary »), avis nominatifs d'internautes affichés sur la fiche de monture.
- **Langue et devise** [V] : anglais, dollars ; aucune autre.
- **Contact** [V] : téléphone, courriel, rendez-vous virtuel ou en magasin (Ashland), consultation gratuite.
- **Preuves de fabrication** [V] : page « Ron's Custom » avec galerie de bagues sur mesure et prix ; aucune photo ou vidéo de fabrication ni suivi de commande vus.
- **Chargement** [V] : page de recherche prête en 1,8 s (DOM) et 3,3 s (tableau et premières images) sur ordinateur ; fiche de monture : image principale en 2,2 s (ordinateur) et 1,9 s (iPhone).

## Points forts à retenir pour JR Diamond

1. **Pierre à prix affiché, avec labo, mesures et vidéo** : filtres complets (formes, carat, couleur, pureté, taille, labo) sur 14 184 pierres de synthèse et 64 676 naturelles ; prix visible sur la fiche. Preuve : `/pages/diamond-search`, fiche STL604019 (937 $).
2. **Parcours en 3 étapes toujours visible** (monture > pierre > finition), repère clair pour l'acheteur. Preuve : bandeau sur les pages vues.
3. **Registre et gravure laser de l'identifiant** pour les pierres synthétiques : argument de confiance pour la peur de l'échange de pierre. Preuve : bandeau UltraFire.
4. **Retour de 31 jours** (plus long que la plupart) et garantie prolongée d'un an. Preuve : `/policies/refund-policy`, `/pages/warranty`.
5. **Page de sur mesure avec galerie et prix** de réalisations. Preuve : `/pages/custom-design`.

## Défauts observés

- Aucun aperçu 3D ni visuel de la bague assemblée : montures de fournisseurs, photos de catalogue [V].
- Prix de monture absent du texte de la fiche testée ; total non vérifiable [V].
- Boutons de formes sans retour fiable à l'automatisation (compteur illisible) [V]. Pas de message d'erreur visible.
- Un cadre `chrome-error://` est apparu sur la page lors d'un passage (embed bloqué, [I]).
- Pas de décomposition du prix, pas de délai de fabrication, pas de suivi de commande [V].
- Les liens du menu pointent en partie vers `goldandgems6.myshopify.com` (domaine technique Shopify) [V].
- Politique de prix : métal « sujet à changement sans préavis » [V].

## Limites de l'audit

- **Parcours bague + pierre non terminé** : après le choix de la pierre, aucun bouton d'assemblage n'est apparu ; « Add to bag » n'a pas été cliqué (`/cart/` interdit). Panier, frais de livraison et moyens de paiement non vus.
- Curseurs, boutons de forme, recherche par SKU, LOAD MORE et ROTATE non concluants ou non reproduits.
- Affichage iPhone : seule la liste des contrôles (96) et le temps d'affichage ont été relevés, aucune interaction.
- Aucun formulaire envoyé, aucun compte créé, aucun chat ouvert.

## Sources

- https://www.goldandgems.com/pages/diamond-search (page lue et actionnée)
- https://www.goldandgems.com/pages/diamond-search/1-19-carat-faceted-cut-f-color-vs2-clarity-diamond-stock-stl604019
- https://www.goldandgems.com/collections/build-an-engagement-ring
- https://www.goldandgems.com/products/lr3291-engagement-ring
- https://www.goldandgems.com/policies/refund-policy
- https://www.goldandgems.com/pages/warranty
- https://www.goldandgems.com/pages/pricing-policy
- https://www.goldandgems.com/pages/ring-sizing
- https://www.goldandgems.com/pages/custom-design
- https://www.goldandgems.com/cart
- https://www.goldandgems.com/robots.txt
