# Audit : Nick T. Arnold Jewelers (Owensboro, Kentucky)

- **Site** : Nick T. Arnold Jewelers (« Jewelers since 1902 », deux boutiques à Owensboro, KY)
- **Adresse** : https://www.shopnta.com/ ; page de départ : https://www.shopnta.com/build-your-own
- **Date** : 15/11/2026
- **Appareils** : Chromium (Playwright) sur ordinateur (1366 x 900) et en affichage iPhone 13
- **Statut** : **partiel**. Le configurateur a été parcouru jusqu'à l'écran « Complete Ring » (récapitulatif à 2 341 $). Le panier n'a pas été ouvert : `https://www.shopnta.com/cart` est INTERDIT par robots.txt (`Disallow: */cart`, `*/checkout`) ; le bouton « Finalize Your Design » n'a pas été cliqué (il renvoie vers `/build-your-own/summary` selon l'attribut `redirect-url` de l'outil, et peut ajouter au panier). Plusieurs options n'ont pas pu être actionnées dans le délai (voir Contrôles et Limites).
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains, hors taxe, tels qu'affichés le 15/11/2026.

## Parcours

[V] Outil **CaratWise** (client `shopnta`, version v1.5.2, https://release.caratwise.com) intégré dans un shadow DOM (`#caratwise-root`) de la page https://www.shopnta.com/build-your-own ; vue 3D dans un cadre `https://3d.caratwise.com/` ; adresses de l'outil en `#/…` (la configuration est dans l'adresse).

| Étape | Options |
| --- | --- |
| 0. Accueil de l'outil | 3 entrées : « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection » ; 8 « Popular Engagement Rings » dès 1 015 $ (Corinne) à 2 045 $ (Catriona) ; 13 styles ; 4 couleurs de métal ; 10 formes ; 4 bandeaux de réassurance |
| 1a. Choisir une monture | 247 montures (« Showing All (247) »), 14 onglets de style (Studio + 13), filtres forme, taille, type de diamant (Lab Grown préréglé), métal, prix, avancés ; tri « Best Sellers » ; « Load All Designs » |
| 1b. Studio Collection | Bague paramétrique « Rosalie » (RB001) : type de diamant, forme, taille, style d'anneau, côtés, couronne, métal, métal de la couronne, gravure, bague assortie ; 360° |
| 2. Choisir le diamant | Inventaire de 69 230 diamants, 3 462 pages (appelé « Diamond Inventory ») ; filtres Natural / Lab Grown, certification, forme, carats (curseurs min et max), couleur et pureté (avancés) |
| Fiche du diamant | Diamond 360°, image, onglets « 4C's », « GCAL Certification », « Specifications » ; bouton « Select This Diamond • 1 101 $ » |
| 3. Complete Ring | Récapitulatif : total 2 341 $ « (Exclusive tax) », caractéristiques, certificat, taille de doigt (liste), « Finalize Your Design », « Save Your Design » |

## Contrôles vérifiés

Relevé de la page : 192 contrôles sur ordinateur et 61 en affichage iPhone (menu replié) avec controls.cjs ; la plupart sont la navigation du site (non actionnée). L'outil CaratWise a été actionné bouton par bouton. **Le prix a été lu environ 1,2 s après chaque clic et peut être en retard** : un prix inchangé n'est donc pas une preuve d'absence d'effet. La machine de test était partagée et chargée (chaque clic a pris 9 à 80 s).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Start with a Setting | bouton | Adresse `#/ring?dia_origin=LGN` ; liste de 247 montures | dès 1 150 $ (Valeria) | fonctionne |
| Start with a Diamond | bouton | Adresse `#/diamond?dia_origin=LGN&ai_dia_size=2&ai_dia_shape=RND…` (2 ct rond synthétique préréglé) | 69 230 pierres | fonctionne |
| Design with our Studio Collection | bouton | Ouvre la bague Rosalie `#/ring/RB001-rosalie?dia_origin=LGN&dia_shape=RND&dia_size=200&style_code=CCD&pri_comp=PLN&sec_comp=CLP&pri_comp_metal=14-YG&sec_comp_metal=14-YG&bands=0` | 1 240 $ « (Setting Only) » | fonctionne ; spinner de la 3D encore affiché 5 s après |
| 13 styles de montures (Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique) | bouton | Filtrent la liste de montures | non testé | non testé (page de liste ouverte seulement) |
| Swatchs de métal d'une monture (white, yellow, rose) | bouton | Présents sur chaque carte | non testé | non testé |
| Diamond Type : Natural | bouton | `dia_origin=GNU` ; titre « Natural Diamond Setting » | monture inchangée 1 240 $ | fonctionne (19 s) |
| Diamond Type : Lab Grown | bouton | Revient à `dia_origin=LGN` | 1 240 $ | fonctionne |
| Center Diamond Size 1 ct, 3 ct | bouton | Pas de réponse en 80 s | n/a | échec sous charge, non confirmé |
| Center Diamond Size 5 ct | bouton | `dia_size=500` | 1 240 $ (monture seule) | fonctionne |
| Forme Pear / Marquise / Round | bouton | `dia_shape=PEA` / `MAR` / `RND` | 1 240 $ inchangé | fonctionne |
| Formes Oval, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion | bouton | n/a | n/a | non testé (Heart : échec sous charge) |
| Ring Style : Split | bouton | `style_code=EMS` | 1 240 $ (lecture possiblement en retard) | fonctionne |
| Ring Style : Cathedral | bouton | `style_code=CCD` | 1 240 $ | fonctionne |
| Ring Style : Classic, Knife Edge, Twist | bouton | n/a | n/a | non testé (Knife Edge et Twist : échec sous charge) |
| Ring Side : Channel Set | bouton | `pri_comp=CNL` | 1 240 $ lu (retard possible) | fonctionne |
| Ring Side : Pavé Set | bouton | `pri_comp=SPR` ; titre « Cathedral Pavé Set Basket » | **1 842 $ (+602 $)** | fonctionne |
| Ring Side : Prong Set, Beadset Set, Plain | bouton | n/a | n/a | non testé (Prong, Beadset : échec sous charge) |
| Ring Crown : Hidden Halo | bouton | `sec_comp=HHL` | 1 240 $ lu (retard possible) | fonctionne |
| Ring Crown : Bezel | bouton | `sec_comp=BZL` ; titre « Cathedral Plain Bezel » | **1 475 $ (+235 $)** | fonctionne |
| Ring Crown : Six Prong | bouton | `sec_comp=MRP` | 1 475 $ lu (retard possible) | fonctionne |
| Ring Crown : Diamond Basket | bouton | `sec_comp=FDP` ; titre « Cathedral Plain Diamond Basket » | **1 867 $** | fonctionne |
| Ring Crown : Halo, Basket | bouton | n/a | n/a | non testé (Halo : échec sous charge) |
| Metal : 14K blanc | pastille | `pri_comp_metal=14-WG` | 1 240 $ inchangé | fonctionne |
| Crown Metal : rose, blanc | pastille | `sec_comp_metal=14-RG` puis `14-WG` | 1 240 $ inchangé | fonctionne |
| Metal et Crown Metal : 18K (3 couleurs), PT (platine) | pastille | n/a | n/a | non testé (4 clics échoués sous charge) |
| Matching Band : Single | bouton | `bands=1` | 1 867 $ lu (lecture possiblement en retard) | fonctionne |
| Matching Band : No Band | bouton | n/a | n/a | non testé |
| Engraving (champ, 0 / 18, 3 polices « Aa ») | champ, bouton | n/a | n/a | non testé : saisie de texte non nécessaire ; présent dans le DOM |
| Vignettes (360°, main, 9 images), flèches « Previous/Next thumbnails », « Enter fullscreen » | bouton | Visible sur capture : 1re vignette « 360° Experience », 2e photo d'une main, puis photos de bague | non | présents ; plein écran et vignettes non actionnés |
| « More information about … » (7 boutons info) | bouton | n/a | n/a | non testé |
| Change / Back / Edit | bouton | Retour au choix de monture ou d'étape | non | présents, non actionnés (sauf Back) |
| Save Your Design | bouton | Ouvre une demande d'adresse (« we'll send you a link ») ; **non rempli** | non | non testé (formulaire) |
| Product Details | bouton | n/a | n/a | non testé |
| Choose This Setting • 1 240 $ | bouton | Passe à l'étape 2 `#/diamond?…&iid=…` avec filtre automatique 1,5 à 2,5 ct, rond, synthétique : 6 918 diamants | 1 240 $ | fonctionne |
| Filtres de l'inventaire : Natural / Lab Grown, Lab Certification (3 cases), formes (10), taille min/max, Advanced Filters, tri (Default, Recommended Selection), pagination 1 à 3 462 | bouton, champ | Présents (relevés) ; « Compare » présent seulement en affichage iPhone | prix des diamants : de 637 $ (1,00 ct poire) à 3 708 $ (6,03 ct émeraude) dans la 1re page | présents, **non actionnés** |
| Carte d'un diamant (1,75 ct rond synthétique F VS1) | bouton | `#/diamond/XTRcJKHHNGGJN?tab=4Cs` ; onglets 4C's, GCAL Certification, Specifications ; échelles D à M, FL à SI2, cut | 1 101 $ | fonctionne |
| Select This Diamond • 1 101 $ | bouton | `#/summary` ; ligne « Your Engagement Ring 2 341 $ (Exclusive tax) » | 2 341 $ = 1 240 + 1 101 | fonctionne |
| View Certificate (3 occurrences) | lien | n/a | n/a | non suivi |
| Ring Size (liste) | select | Valeurs 4 à 9 par demi-taille (11 valeurs relevées) ; défaut « Select » | non | présent, non actionné |
| Finalize Your Design • 2 341 $ | bouton | n/a | n/a | **non cliqué** : peut ouvrir le panier, interdit par robots.txt |
| Bulle « Need help? Message us here » | bouton | Widget de chat Clientbook (`webchatv2.clientbook.com`) ; **non ouvert** | non | présent |
| Bandeau cookies | bouton | « Decline all cookies » / « Accept all cookies » : refus cliqué | non | fonctionne |

## Options disponibles

- **Métaux** [V] (Studio) : 14K (jaune, blanc, rose), 18K (jaune, blanc, rose), platine « PT ». Métal de l'anneau et métal de la couronne **séparés** (14 pastilles au total).
- **Types de diamant** [V] : Natural et Lab Grown ; Lab Grown préréglé sur l'accueil.
- **Formes** [V] : Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion (10).
- **Carats du Studio** [V] : 1, 2, 3, 5 ct ; inventaire avec curseurs min/max libres.
- **Ring Style** [V] : Classic, Knife Edge, Cathedral, Split, Twist. **Ring Side** : Pavé Set, Channel Set, Prong Set, Plain, Beadset Set. **Ring Crown** : Basket, Diamond Basket, Hidden Halo, Bezel, Six Prong, Halo.
- **Bague assortie** [V] : No Band, Single. **Gravure** : 18 caractères, 3 polices (DOM). **Taille de doigt** : 4 à 9 par demi-taille.
- **Pierres** [V] : inventaire de 69 230 diamants avec prix ; la fiche donne couleur, pureté, taille, polissage, table, girdle, mesures, profondeur.
- **Certificats** [V] : bandeau « GIA Graded », « IGI Certified », « GCAL Verified » ; la fiche examinée affiche « Certification GCAL ». Filtre « Lab Certification » à trois cases (libellés non lus).
- **Vues** [V] : 360° « Drag to Rotate », photo sur une main (vignette), plein écran, 360° du diamant. Pas d'AR relevée.
- **Langues, devises** : anglais, dollars (`currency=USD`, `ring-size-country=US`).

## Prix, délais, retours, garanties

- **Affichage du prix** [V] : une seule somme en direct par composante : monture « Starting at … » puis « (Setting Only) », diamant, total « (Exclusive tax) ». Exemple : monture 1 240 $ + diamant 1 101 $ = 2 341 $ (récapitulatif, https://www.shopnta.com/build-your-own#/summary). Aucune décomposition par poste (métal, façon, sertissage). « Diamond price may change when finalize your design ».
- **Effet des options sur la monture** [V] : le diamant n'influe pas sur le prix de la monture ; changer le côté (Pavé +602 $), la couronne (Bezel +235 $, Diamond Basket +627 $) ou la bague assortie modifie le prix ; changer la couleur du métal 14K ne l'a pas modifié dans la lecture (retard possible ; 18K et platine non testés).
- **Délai** [S] : aucun délai de fabrication de la bague configurée trouvé dans l'outil ; bandeau général « We make an effort to process and ship your orders within 24-48 hours » (https://www.shopnta.com/return-policy), valable pour le catalogue, pas pour le sur-mesure.
- **Livraison** [V] : « Free shipping on orders over $250 » (bandeau de l'accueil de l'outil).
- **Financement** [V] (https://www.shopnta.com/pages/financing) : Synchrony 0 % pendant 6 mois pour plus de 300 $, 0 % pendant 12 mois pour plus de 1 000 $ ; location SNAP Retail Leasing ; « layaway » (paiement échelonné maison) annoncé en bandeau.
- **Retours** [V] (https://www.shopnta.com/return-policy) : 30 jours après réception, articles neufs, dans l'emballage d'origine, frais de retour à la charge du client ; remboursement 7 à 10 jours ouvrés ; **« Personalized or custom pieces are not eligible for returns »** ; « Gemstones, including diamonds, are not covered by this policy and are sold as-is » ; aucune modification d'une commande passée ; retour d'une commande dans les 15 jours (page contradictoire avec les 30 jours). Défaut de fabrication : échange sous 30 jours.
- **Garanties** [S] : non trouvées sur les pages lues ; maison fondée en 1902, gemmologue GIA et bijoutier d'atelier au sein de la famille (https://www.shopnta.com/pages/ourstore).
- **Taxe** [V] : montant « Exclusive tax » ; taxe non calculée avant le panier.

## Confiance et service

- [V] Avis : la page https://www.shopnta.com/testimonials contient un **gabarit non rempli** (texte « Et harum quidem rerum facilis est… » répété, auteurs « Username Lastname », dates « June 1st, 2017 », note 4,8/5 de gabarit) : à ne pas prendre pour de vrais avis.
- [V] Contact : deux téléphones (270) 686-8463 et (270) 215-7733 en en-tête ; deux adresses (3630 Frederica Street, 2594 Calumet Trace, Owensboro) ; bouton de chat Clientbook (« Need help? Message us here. ») ; formulaire « Start a Project » (https://www.shopnta.com/start-a-project : « Please send us a message describing what you're looking to create »).
- [V] Rendez-vous, essayage à domicile, WhatsApp : non relevés.
- [V] Sur mesure : « Custom Bridal Jewelry » (formulaire Start a Project) en plus du Studio ; réparation, restauration, expertises ; liens vers GIA et IJO (Master IJO Jeweler).
- [V] Preuves de fabrication : aucune photo ni vidéo d'atelier trouvée sur les pages lues ; pas de suivi de commande visible sans compte (compte `/myaccount` et `/register` interdits par robots.txt, non ouverts).
- [V] Libellé du synthétique : « Lab Grown » (jamais « synthetic »), « Lab Grown Diamond Rings » dans la navigation.

## Points forts à retenir pour JR Diamond

1. **Configuration entièrement dans l'adresse** (`#/ring/RB001-rosalie?dia_origin=…&style_code=…&pri_comp_metal=…`) : chaque choix change l'adresse, donc le lien est partageable. Idée directe pour la fonction « Partager » de JR Diamond (adresse relevée après chaque clic).
2. **Prix en direct, par composante** : monture, puis pierre, puis total, avec la mention « (Setting Only) » et « Exclusive tax » (récapitulatif, https://www.shopnta.com/build-your-own#/summary).
3. **Deux métaux indépendants** (anneau et couronne) en 14 K, 18 K et platine : très proche de l'offre de métaux de JR Diamond (page Studio).
4. **Option de pierre naturelle ou synthétique** sur la monture et dans l'inventaire, avec synthétique par défaut (accueil de l'outil).
5. **Fiche de pierre complète** : onglets 4C's, certificat, spécifications, 360° de la pierre, échelles couleur, pureté, cut avec phrases d'explication (« It looks clear and shines brightly… »), pédagogie utile à JR Diamond (fiche du diamant).
6. **Taille de doigt choisie dans le récapitulatif** avec message « Diamond price may change when finalize your design » : clarté sur le prix final.
7. **Pied de page de réassurance** : livraison gratuite dès 250 $, paiement échelonné, financement à 0 % (accueil de l'outil et page financement).
8. **Bouton « Save Your Design »** à chaque étape (non rempli) : enregistrement par envoi d'un lien.

## Défauts observés

- [V] Le bandeau de réassurance de l'outil dit « GIA Graded : Every diamond graded by the International Gemological Institute » et « IGI Certified : Backed by the world's most trusted diamond grading laboratory » : les deux libellés sont croisés (GIA est l'Institut gemmologique d'Amérique) ; la fiche examinée est certifiée GCAL, ni GIA ni IGI.
- [V] La page https://www.shopnta.com/testimonials est un gabarit factice (texte latin, dates de 2017).
- [V] Retours contradictoires : 30 jours pour l'article, mais « return it within 15 days » pour une commande annulée ; personnalisé non retournable, diamants vendus en l'état.
- [V] Outil lent : l'interface reste figée tant que la 3D charge (boutons `disabled` ; plusieurs clics sans réponse en 80 s dans mon environnement chargé) ; première apparition de l'outil 5,8 s à 12,9 s sur ordinateur, 5,7 s à 17,8 s en affichage iPhone ; la 3D affiche encore un spinner 5 s après l'ouverture du Studio.
- [V] Le prix ne se met pas toujours à jour immédiatement après un clic (lecture à 1,2 s) ; le titre de l'étape 1 et le prix du bouton suivent avec retard.
- [V] Écran d'accueil de l'outil vide pendant les premières secondes : la page ne montre que le titre « Build Your Own Ring » (capture à 4 s).
- [V] Pas de délai de fabrication ni de garantie visible dans le parcours ; pas de décomposition du prix de la monture.
- [V] Inventaire en direct instable : 69 230 diamants sur ordinateur, 69 008 en affichage iPhone, à quelques minutes d'écart.

## Limites de l'audit

- **Panier non atteint** : `/cart` et `/checkout` sont INTERDITS par robots.txt (https://www.shopnta.com/robots.txt). « Finalize Your Design » non cliqué. Moyens de paiement, frais de livraison, délai au panier : non vérifiés.
- Environnement partagé et chargé (rendu logiciel de la 3D) : environ la moitié des options n'ont pas pu être actionnées dans le délai (1 ct, 3 ct, Heart, Twist, Knife Edge, Prong Set, Beadset Set, Halo, 18K, platine, bague No Band, gravure). Prix lus 1,2 s après chaque clic : retards possibles.
- Montures « Start with a Setting » : seule la liste a été lue ; aucune monture hors Studio n'a été ouverte.
- Diamants : une seule carte ouverte (1,75 ct rond synthétique) ; filtres de l'inventaire relevés mais non actionnés ; « View Certificate » non suivi.
- Affichage iPhone : outil rendu (accueil, liste, inventaire) mais Studio et fiche non parcourus.
- Les hôtes `release.caratwise.com`, `storeapi.caratwise.com` et `3d.caratwise.com` sont des sous-ressources chargées par la page ; leurs robots.txt n'ont pas été contrôlés. Aucune adresse INTERDITE de shopnta.com n'a été ouverte (`*?kw=` des liens du menu non suivis).
- Aucun formulaire rempli, aucun compte, aucune conversation de chat ouverte.

## Sources

- https://www.shopnta.com/build-your-own (contrôles, mesures, parcours, captures)
- https://www.shopnta.com/build-your-own#/ring , `#/ring/RB001-rosalie?…` , `#/diamond?…` , `#/diamond/XTRcJKHHNGGJN?tab=4Cs` , `#/summary` (états de l'outil)
- https://www.shopnta.com/return-policy , https://www.shopnta.com/pages/financing , https://www.shopnta.com/start-a-project , https://www.shopnta.com/testimonials , https://www.shopnta.com/pages/ourstore (lues)
- https://www.shopnta.com/robots.txt (lu : Crawl-delay 2)
- Inventaire du 15/11 : `docs/concurrence/audit/us/kentucky/INVENTAIRE.md`
