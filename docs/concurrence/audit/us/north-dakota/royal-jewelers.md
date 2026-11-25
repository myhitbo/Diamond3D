# Audit : Royal Jewelers (Fargo, Dakota du Nord)

> **[P1] pour tout le rapport (relevé le 25/11)** : le robots.txt du site interdit tout aux agents Claude (`Disallow: /` dans un groupe nominatif ClaudeBot / anthropic-ai). L'outil de contrôle ne lisait que le groupe `*` (défaut corrigé le 25/11) : l'audit l'a suivi à tort. Constats gardés pour mémoire, valeur [P1], jamais repris comme vérifiés.

- **Site** : Royal Jewelers
- **Adresse** : https://www.royaljewelersfargo.com ; page de départ https://www.royaljewelersfargo.com/create-your-ring
- **Date** : 15/11/2026 (date de l'étude ; contrôles exécutés à la session du 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **complet pour ce que le site offre** : parcours « Create Your Ring » jusqu'à la fiche produit. Il n'y a ni panier ni paiement en ligne (voir « Limites »).
- **robots.txt** : toutes les adresses ouvertes étaient AUTORISÉES ; `/wishlist` et `/login` INTERDITES (non ouvertes, liens notés seulement). Aucun formulaire envoyé.
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Parcours

Le « constructeur » annonce trois étapes (V, `/create-your-ring`) : 1 Choose your Setting, 2 Choose your Diamond, 3 Complete your Ring.

| Étape | Options | État |
|---|---|---|
| 1. Monture | Liste de 899 montures (57 pages de 16 ; V) filtrable par forme de pierre centrale, type, métal, collection, forme de pierres latérales, type de pierre ; 9 tris | Fonctionne (V) |
| Fiche monture | Photo unique, taille de doigt (17 valeurs), bouton « Inquire », comparer, favori, envoyer par e-mail, fiche technique | Fonctionne (V) ; **aucun bouton « Choisir cette monture »** |
| 2. Diamant | `/diamonds` : filtres forme, taille, clarté, couleur, prix, coupe, certification, polissage, symétrie, fluorescence | **Vide** : « 0 ITEMS » / « No Diamonds available! » (V). Étape 2 non cliquable depuis la liste (V) |
| 3. Bague complète | Non atteignable | Non testé : dépend de l'étape 2 |
| Sur mesure (hors constructeur) | `/custom-engagement-rings` : texte, galerie « image de référence, croquis, bague finie » ; `/custom-services` | Pages lues (V) |

## Contrôles vérifiés

Page de liste (ordinateur ; 57 contrôles détectés, 54 sur iPhone) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| CENTER STONE SHAPE | accordéon, 10 cases (Asscher, Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round) | Round : 319 résultats ; Marquise : 24 (V) | Le prix du 1er résultat change | OK |
| ENGAGEMENT RING TYPE | accordéon, 4 cases (Halo, Hidden Halo, Sidestone, Solitaire, Three Stone) | Solitaire : 494 ; Three Stone : 127 (V) | idem | OK |
| MATERIAL | accordéon, 7 cases : or 14 k et 18 k (rose, blanc, jaune), platine | Platinum 175 ; 18K White 338 ; 14K Rose 26 (V) | idem | OK |
| SET | accordéon, case « Engagement Ring » | 32 résultats (V) | idem | OK |
| STONE SHAPE | accordéon (Baguette, Emerald, Pear, Princess, Round, Trapezoid) | Baguette : 1 résultat (V) | idem | OK |
| STONE TYPE | accordéon (Blue Sapphire, Diamond, Emerald, Lab-Grown Diamond, Sapphire) | Lab-Grown Diamond : **1 résultat** à 9 490 $ ; Blue Sapphire 39 (V) | idem | OK |
| RESET FILTERS | bouton | Non actionné isolément (les cases ont été décochées une à une) | n/a | Non testé |
| SORT BY | liste, 10 entrées : Default, prix croissant/décroissant, Newest, In Stock First, Orderable, marque A-Z/Z-A, modèle A-Z/Z-A | « Price: Low to High » : 1er prix 1 390 $ (V) ; autres tris non testés | trie | OK / partiel |
| Carte produit | clic sur la vignette | Ouvre la fiche (ex. `/tacori/forma-pear-toi-et-moi-ring/4060001/en`) en 1,4 à 1,7 s (V) | prix affiché | OK |
| Pagination « « 1 2 3 … 57 » » | liens | Page 2 et suivantes non ouvertes ; 57 pages annoncées | n/a | Non testé |
| Add to Wishlist (16 boutons) | bouton | Mène à `/wishlist`, INTERDIT par robots.txt : non actionné | n/a | Non testé (robots.txt) |
| Icônes en-tête : recherche `/keyword-search`, favoris `/wishlist`, compte `/login` | liens | `/wishlist` et `/login` INTERDITS : non ouverts ; recherche non ouverte | n/a | Non testé |
| Menu TIMEPIECES / BRIDAL / FINE JEWELRY / DESIGNERS / COMPANY, APPOINTMENTS | menus | Sous-menus lus dans le DOM (V) ; BRIDAL : Engagement Rings, Wedding Bands, Diamonds, Create Your Ring | n/a | OK |
| Étapes « Choose your Setting » / « Choose your Diamond » | liens | Le 1er recharge la page ; le 2e (`javascript:void(0)`) ne fait rien sans monture choisie (V) | n/a | Sans effet |
| Téléphone 701-232-2491 | lien tel: | Lien présent | n/a | Non testé (appel) |
| Pied de page : Facebook, Instagram, Pinterest, e-mail, Newsletter Signup, Site map | liens | Site map lu (V) ; le reste non ouvert | n/a | Partiel |

Fiche produit (ordinateur) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Ring Size | liste, 4 à 12 par demi-taille (17 valeurs) | Sélection de 7 : prix inchangé (15 590 $) (V) | aucun | OK |
| Inquire | bouton | Fenêtre : prénom, nom, téléphone, e-mail, message (tous obligatoires), « Send » (V) ; **non envoyé** | n/a | OK |
| ADD TO COMPARE | lien | Ouvre un panneau « Comparison » (marque, modèle, prix, matériau, type, forme) (V) | n/a | OK |
| EMAIL THIS ITEM | lien | Formulaire prénom, nom, destinataire, expéditeur (V) ; non envoyé | n/a | OK |
| ADD TO WISHLIST | bouton | Menait à `/wishlist` (INTERDIT) : non actionné | n/a | Non testé |
| Open product image | image | Clic sans effet visible (V : aucune fenêtre d'agrandissement) | n/a | Aucun zoom |
| ITEM SPECIFICATIONS | accordéon | Type, métal, tailles, poids des diamants (3,08/2,04 ; total 5,17), collection, qualité « G, VS ou mieux », modèle (V) | n/a | OK |
| CENTER STONE INFORMATION | accordéon | Forme Pear, plage 0,5 à 5 ct, « Not Included (Sold Separately) » (V) | n/a | OK |
| Related items (Previous / Next) | carrousel | 12 montures voisines avec prix (V) | n/a | Non cliqué |
| Modales « Customization Inquiry » et « Tell a Loved One » | présentes dans le DOM | Ouvertes ni l'une ni l'autre (texte lu seulement) | n/a | Non testé |
| Add to cart / Buy | absent | Aucun bouton d'achat : « AVAILABILITY: CALL FOR AVAILABILITY » (V) | n/a | Inexistant |

Modes de vue : photo fixe unique (une vue, vignettes 300×300). Pas de vidéo, 360°, 3D, essayage, AR ni zoom (V, fiche et liste). Pas de partage réseau social autre que l'e-mail.

## Options disponibles

- **Formes de pierre centrale** : Asscher, Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round (V).
- **Types de monture** : Halo, Hidden Halo, Sidestone, Solitaire, Three Stone (V).
- **Métaux** : or jaune, blanc, rose en 14 k et 18 k ; platine (V). Aucun choix de métal sur la fiche : un métal par référence.
- **Pierres** : Diamond, Lab-Grown Diamond, Blue Sapphire, Sapphire, Emerald (V).
- **Formes latérales** : Baguette, Emerald, Pear, Princess, Round, Trapezoid (V).
- **Tailles de doigt** : 4 à 12 par demi-taille (V).
- **Filtres du diamant** (`/diamonds`, sans stock) : forme (10), taille 0 à 10 ct, clarté I3 à IF, couleur M à D, prix, coupe, certification, polissage, symétrie, profondeur, fluorescence, table (V).
- **Absents** : gravure, choix des griffes, pavage, corps de bague, carat sur la monture, filtre de certificat opérationnel.

## Prix, délais, retours, garanties

- **Prix** : prix de la monture seule, ex. 15 590 $ (V). Pierre centrale « vendue séparément » (V). Aucune décomposition. Plage observée : de 1 390 $ (tri croissant) à plus de 22 000 $ (V). Prix identique pour toutes les tailles de doigt (V).
- **Disponibilité** : « CALL FOR AVAILABILITY » sur chaque carte observée (V). Aucune date de livraison.
- **Délai de fabrication** : annoncé nulle part. Sur mesure : aucun délai chiffré (V, `/custom-engagement-rings`).
- **Retours, livraison, garantie, financement** : aucune page. `/shipping` et `/return-policy` répondent 404 (V). Aucun paiement ni livraison affichés.
- **Panier** : `/cart` répond 404 (V). Pas de panier, pas de moyens de paiement : le site est un catalogue qui renvoie vers le magasin.
- **Certificats** : aucun GIA/IGI sur les montures (V). Qualité « G, VS ou mieux » pour les petits diamants Tacori ; sur mesure : « VS-SI, G-H » (V).
- **Libellé du synthétique** : « Lab-Grown Diamond » (V).
- **Devise et langue** : dollars, anglais seul (V).

## Confiance et service

- Rendez-vous : lien `/book-an-appointment` (non ouvert, V lien).
- Téléphone, e-mail `office@royaljewels.com`, adresse 73 Broadway, North Fargo ; horaires lun-ven 9 h 30-17 h 30, sam 10-16 h (V).
- Pas de chat, WhatsApp, essayage à domicile ni financement visibles (V). Pas d'avis clients ; `/proposal-stories` publie des histoires de demandes en mariage, sans note (V).
- Distributeur agréé Tacori (« AUTHORIZED RETAILER », V). Atelier maison : joaillier, horloger, CAO, ajustage sur place (`/custom-services`, V).

## Points forts à retenir pour JR Diamond

1. **Galerie « référence, croquis, bague finie »** : trois visuels côte à côte par bague (V, `/custom-engagement-rings`). C'est la preuve de fabrication la plus proche de l'idée « on voit naître son bijou », sans vidéo.
2. **Processus sur mesure en 3 étapes avec « rendu 3D informatisé »** validé avec le client avant fabrication (V, même page). Rejoint le positionnement « modèle issu du fichier de fabrication ».
3. **Filtres complets et instantanés** avec compteur de résultats : 899 montures, filtre métal 14 k/18 k/platine et pierre « Lab-Grown Diamond » (V). Réponse en environ 3 s par filtre.
4. **Fiche technique honnête sur la pierre** : « pierre centrale non incluse », poids de diamants, plage de carat compatible (V).
5. **Visuel principal rapide** : première vignette en 1,2 à 2,2 s sur ordinateur, 1,7 s sur iPhone (V, 3 mesures).
6. **Services sur place revendiqués** : sertissage et retouche faits à l'atelier, « rien ne quitte nos mains » (V, `/custom-services`).

## Défauts observés

- Étape 2 (diamants) vide : « No Diamonds available! » ; aucun lien monture, diamant ou bague complète fonctionne (V). Le « constructeur » est en pratique un catalogue.
- Sur mobile, les filtres sont derrière un bouton « Filters » (V, ouvert, non appliqué).
- Pas de bouton « choisir cette monture », pas de prix total, pas de panier (V).
- Un seul visuel fixe par bague : pas de choix de métal ni de vue sur la fiche, pas de zoom (V).
- Prix « à partir de » trompeur : le prix exclut la pierre centrale (V). Aucune disponibilité ni délai : « Call for availability ».
- Pages livraison et retours inexistantes (404, V). Aucun avis.
- Filtre « Lab-Grown Diamond » : un seul résultat, donc offre synthétique quasi absente en ligne (V).

## Limites de l'audit

- Pages 2 à 57 de la liste, `/wedding-bands`, `/wishlist`, `/login`, recherche, rendez-vous, tri hors prix croissant : non ouverts (robots.txt ou temps).
- Aucune comparaison de prix par métal : les références sont séparées.
- Mobile : liste, filtres (ouverture) et fiche mesurés ; filtrage mobile non appliqué.
- Pas de panier ni de paiement à atteindre : il n'en existe pas. Aucun formulaire envoyé (Inquire, e-mail).
- Mesure : « visuel principal » = première image de carte chargée (naturalWidth > 0) après `domcontentloaded`, sans cache ; 3 mesures sur ordinateur, 1 sur iPhone.
- L'inventaire du dossier mentionnait un « rendu 3D sur mesure » : il s'agit d'un texte de processus, pas d'un visualiseur 3D (V).

## Sources

- https://www.royaljewelersfargo.com/create-your-ring (liste, filtres, tris)
- https://www.royaljewelersfargo.com/tacori/forma-pear-toi-et-moi-ring/4060001/en (fiche)
- https://www.royaljewelersfargo.com/diamonds (étape diamant vide)
- https://www.royaljewelersfargo.com/custom-engagement-rings, /custom-services, /proposal-stories, /engagement-rings (903 articles), /sitemap
- https://www.royaljewelersfargo.com/cart, /shipping, /return-policy (404)
- robots.txt du site : `Allow: /`, `Disallow: /wishlist`, `/login`
