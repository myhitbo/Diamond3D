# Richters Jewelry & Design Studio (Londonderry, New Hampshire) — audit du 15/11/2026

- **Site** : Richters Jewelry & Design Studio, boutique de joaillerie familiale avec atelier, Appletree Mall, 4 Orchardview Drive #16, Londonderry (NH 03053). Plateforme Shopify, recherche de diamants et liste de souhaits fournies par GemFind (pied de page « Powered by GemFind »).
- **Adresse** : https://richtersjewelry.com/ — page de départ ouverte : l'accueil, puis `/collections/engagement-rings` et `/apps/diamondtools` (le plus proche d'un constructeur).
- **Date** : 15/11/2026 (contrôle des adresses et pages lues le 25/11/2026).
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13.
- **Statut : partiel.** Le site se laisse lire normalement (HTTP 200, `robots.txt` lu : `Allow: /`). L'ancien blocage 403 de l'inventaire n'est pas reproduit. Il n'existe aucun configurateur de bague ; le bouton « Add To Cart » appelle `/cart/add`, interdit par `robots.txt` : il n'a pas été cliqué. Le panier n'a donc été vu que vide, sans frais de livraison ni moyens de paiement.
- Légende : [V] vérifié (page lue ou contrôle actionné, adresse indiquée), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
| --- | --- | --- |
| 1. Accueil | Diaporama de 4 vues (bijoux en diamant, pierres de couleur, nouveautés, « Designs by Paul Richter », création sur mesure) ; 9 formes de diamant en liens ; accès à la boutique, au sur-mesure, à la galerie de créations [V] | `/` |
| 2a. Bagues finies | Collection `/collections/engagement-rings`, 2 pages, tri (select). Bagues « preset » (déjà montées, avec pierre) et « settings » (monture seule pour une pierre centrale) [V] | `/collections/engagement-rings` |
| 2b. Recherche de diamants | `/apps/diamondtools` : bascule Natural / Lab Grown, 10 formes, taille, couleur, pureté, carat, prix, tri, vue grille ou liste, comparaison [V] | `/apps/diamondtools` |
| 3. Fiche d'une bague | Un seul choix : taille de doigt (4 à 10 par demi-taille) ; « Add To Cart » ; « Ask a question » [V] | fiches produit |
| 3'. Fiche d'un diamant | Détails, rapport, vue 360°, « Drop a hint », « Request more info », « E-mail a friend », « Print details », « Schedule viewing », « Add to cart » [V] | `/apps/diamondtools/product/…` |
| 4. Sur mesure | Rendez-vous Calendly (« Book design consult »), pas de rendu en ligne [V] | `/pages/appointment-paul-richter` |
| 5. Panier | Page `/cart` : « Your cart is currently empty » ; remplissage impossible (voir limites) [V] | `/cart` |

Il n'y a **pas d'assemblage monture + pierre en ligne** : la recherche de diamants vend la pierre seule ; la monture « setting » se commande à part. [I] L'association se fait donc en boutique ou par message (non testé).

## Contrôles vérifiés

Comptes relevés par `controls.cjs` : accueil 108 (ordinateur) / 78 (iPhone) ; collection des bagues 80 / 61 ; recherche de diamants 134 ; processus sur mesure 50.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Book an Appointment | lien | mène à `/pages/contact-us` [V] | — | non ouvert (lien, adresse seule relevée) |
| Send an Email | lien | `mailto:info@richtersjewelry.com` [V] | — | présent |
| Call: 603-437-2655 | lien | `tel:` [V] | — | présent |
| Search (loupe) et `/search` | bouton / lien | champ de recherche du magasin ; `robots.txt` autorise `/search` [V] | — | non lancé (aucune requête saisie) |
| Wishlist | lien | `/pages/gemfind-my-wishlist` (liste de souhaits GemFind) [V] | — | adresse relevée, non ouverte |
| Cart | lien | `/cart` : « Your cart is currently empty. Continue shopping » [V] | — | fonctionne |
| Diaporama 1 à 4 / pause | boutons | 4 vues d'accueil ; le bouton pause affiche le texte « Translation missing: en.sections.slideshow.pause_s » [V] | — | texte d'interface non traduit |
| SHOP ENGAGEMENT RINGS | lien | collection des bagues (80 contrôles) [V] | — | fonctionne |
| 9 formes (Round, Cushion, Princess, Oval, Marquise, Pear, Asscher, Emerald, Radiant) | liens | `/apps/diamondtools?shape=…` : ouvre la recherche de diamants [V pour Oval/Round via le filtre de la page, adresses relevées sur l'accueil] | — | non testé un à un par l'adresse |
| Tri de la collection (Featured, Most relevant, Best selling, A-Z…) | select | non actionné : le tri ajoute `?sort_by=`, **interdit** par `robots.txt` (`Disallow: /collections/*sort_by*`) | — | non testé (règle) |
| Pagination « 2 » / « Next » | liens | `/collections/engagement-rings?page=2`, autorisé [V] adresse relevée | — | non ouvert |
| Natural (`#mined`) | onglet | Par défaut. 2 941 diamants ; GIA ; à partir de 458 $ pour une émeraude de 0,32 ct [V] | 458 $ et plus | fonctionne |
| Lab Grown (`#labgrown`) | onglet | 11 634 diamants ; certificats IGI et GCAL ; à partir de 210 $ (rond 0,70 ct I SI2 IGI) ; **le filtre de forme actif est effacé** au changement [V] | 210 $ et plus | fonctionne |
| Forme Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher | cases | Oval (naturel) : 2 941 → 461 résultats, premier prix 576 $ [V] ; les 9 autres non actionnées | filtre | Oval fonctionne ; autres non testés |
| Cut (Ideal, Excellent, V.Good, Good, Fair) | curseur | présent, non actionné | filtre | non testé |
| Color (D à P) | curseur | présent, non actionné | filtre | non testé |
| Clarity (FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, SI3, I1, I2) | curseur | présent, non actionné | filtre | non testé |
| Carat 0,20 à 20,00 | curseur + 2 champs | présent, non actionné | filtre | non testé |
| Price 0 à 1 000 000 $ | curseur + 2 champs | présent, non actionné | filtre | non testé |
| Sort By (Price, Shape, Carat, Color, Clarity, Certificate) | select | « Carat » : tri par carat (lab : 0,47 ct d'abord) [V] | — | fonctionne |
| ASC / DESC | lien | inverse l'ordre : en tête 16,40 ct émeraude IGI, 9 840 $ [V] | — | fonctionne |
| Per page 12 / 24 / 48 / 99 | select | 48 sélectionné, aucune erreur ; nombre de lignes non recompté | — | partiel |
| List View / Grid view 3 column | liens | liste : tableau (forme, carat, couleur, pureté, taille, profondeur, table, dimensions, certificat, prix) ; grille : aucune ligne extraite par mon relevé [V/I] | — | liste vérifiée, grille non vérifiée |
| Compare, case par diamant, « Compare(0) » | lien / case | la case n'est pas visible (cliquée de force sans effet constaté) ; le lien ne change pas l'adresse [V] | — | non fonctionnel dans mon essai |
| Save Search | lien | présent, non actionné (compte probable) | — | non testé |
| Reset | lien | présent, non actionné | — | non testé |
| Ligne d'un diamant | clic | ouvre `/apps/diamondtools/product/round-shape-0.30-carat-j-color-vs1-clarity-excellent-cut-gia-certificate--sku-2002942307` : 0,30 ct, 462 $, polish Excellent, symétrie Very good, fluorescence None [V] | 462 $ | fonctionne |
| Vignette « 360° » | bouton | vignette présente ; la vignette voisine affiche « Error! » [V] | — | **erreur visible** |
| Diamond Grading Report « View » | lien | présent, rapport GIA ; non ouvert | — | non testé |
| Drop a hint, Request more info, E-mail a friend, Schedule viewing | boutons | formulaires ; non ouverts ni remplis | — | non testés |
| Print details, Twitter, share | boutons | présents ; non actionnés | — | non testés |
| Internal use only: Click here | lien | lien interne visible aux clients [V] | — | **défaut** |
| Ring size (4 à 10, demi-tailles) | select | « 9 » sélectionné ; le prix ne change pas (1 975 $) [V] | aucun effet | fonctionne |
| Galerie de la fiche (4 photos) | vignettes | 4 vignettes ; le clic sur l'image principale ne déclenche aucun zoom (30 s sans fenêtre ni agrandissement) [V] | — | pas de zoom |
| ASK A QUESTION | bouton | ouvre un formulaire (Your Name, Email, Phone, Message, Submit) ; non rempli [V] | — | fonctionne |
| ADD TO CART / More payment options | boutons | **non cliqués** : `/cart/add` interdit par `robots.txt` ; « More payment options » interdit par la consigne | — | non testés (règle) |
| Share Facebook / Tweet / Pin it | liens | présents ; non suivis | — | non testés |
| Filtre « In Stock and Ready To Ship » (galerie de créations) | bouton | `Filter` : le clic a expiré après 30 s (bouton non cliquable) [V] | — | non fonctionnel dans mon essai |
| Galerie de créations (48 produits) | collection | pièces « Sold Out » de Paul Richter, photos d'ouvrages vendus [V] | — | lisible |
| Rendez-vous Paul Richter | page | calendrier Calendly intégré (`calendly.com/richtersjewelry-paul/custom-design-consultation`) ; non utilisé [V] | — | s'affiche |
| Layaway : « Contact us for layaway » | bouton | présent ; non actionné | — | non testé |
| Instagram, Facebook, Pinterest, avis Google (9 avis) | liens | adresses externes relevées ; non suivies [V] | — | non testés |
| Inscription e-mail du pied de page | champ + bouton | présent ; **rien saisi** | — | non testé |

Aucun contrôle de partage de configuration, de visionneuse 3D, d'essayage à distance, de réalité augmentée, de chat ou de WhatsApp n'existe : aucun de ces mots ne figure dans les contrôles relevés sur l'accueil, la collection, la recherche de diamants et la fiche.

## Options disponibles

- **Métaux** (par le nom des produits, collection de bagues) : or blanc 14 k, or jaune 14 k, or rose 14 k, or blanc et jaune 18 k, platine, « two tone » ; pas de choix de métal sur la fiche, chaque métal est une pièce distincte [V].
- **Origine** : diamants naturels (« natural/mined » par défaut ; mention « All diamonds … are Natural/Mined unless otherwise notated ») et synthétiques, écrits « Lab Grown » [V].
- **Formes de la recherche** : Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher [V].
- **Filtres de pierre** : forme, cut, color, clarity, carat 0,20 à 20, prix jusqu'à 1 000 000 $, certificat visible en colonne (GIA pour les naturels ; IGI et GCAL vus pour les synthétiques) [V].
- **Tailles de doigt** : 4 à 10, par demi-taille [V].
- **Modes de vue** : photos (4 sur la fiche) ; vignette « 360° » d'un diamant (avec erreur) ; pas de vidéo, pas de 3D de la bague, pas de zoom, pas de vue portée [V].
- **Gravure** : aucune option de gravure ; la politique de retour la mentionne comme motif de non-retour [V].
- **Services** : rendez-vous (Calendly), liste de souhaits, questions par formulaire, nettoyage et inspection à vie, réparation, restauration, expertises, recherche de pierres, retaille, mise en gage « layaway » [V].
- **Sur mesure** : consultation, dessin colorisé à la main, plusieurs versions, retouches mineures, puis cire et fonte ou fabrication à la main [V, `/pages/the-custom-design-process`].

## Prix, délais, retours, garanties

- **Affichage du prix** : prix unique par pièce en dollars, sans ventilation (métal, pierre, main-d'œuvre) [V]. Exemples : bague solitaire synthétique émeraude 14 k blanc 1,58 ct IGI, 1 975 $ (`/collections/engagement-rings/products/14k-white-gold-bezel-set-emerald-cut-lab-grown-diamond-solitaire-engagement-ring-1-58ct`) ; monture à trois pierres 14 k 0,82 ctw, 3 750 $ ; solitaire synthétique 0,73 ct or rose 1 299 $ ; page « Engagement Rings » : bagues de 1 299 à 4 950 $ [V].
- **Prix par taille** : inchangé (1 975 $ en taille 4 et en taille 9) [V].
- **Diamants seuls** : prix affiché en liste : 458 $ (naturel 0,32 ct I VS2) ; 210 $ (synthétique 0,70 ct) ; 9 840 $ (synthétique 16,40 ct) [V].
- **Taxe** : non vue dans les pages lues [S] (l'absence de taxe de vente au New Hampshire est connue par l'inventaire, non revérifiée ici).
- **Délai de fabrication** : non annoncé sur les pages lues ; les bagues finies sont « en stock » ; le sur mesure n'a pas de durée indiquée [V].
- **Retours** (`/policies/refund-policy`) : remboursement complet dans les 2 semaines ; échange dans les 30 jours contre un article de valeur égale ou un avoir ; objet en état d'origine ; **gravé, modifié, redimensionné ou porté : ni retour ni remboursement** ; **sur mesure et commandes spéciales : non retournables** ; ventes finales exclues ; retour à l'adresse du magasin ; remboursement sous 10 jours ouvrés ; mention d'un droit de rétractation de 14 jours pour l'Union européenne [V].
- **Garantie** (`/pages/merchandise-gurantee`, faute d'orthographe dans l'adresse) : 2 ans contre les défauts de matière et de fabrication ; remplacement ou réparation d'une pierre perdue jusqu'à 0,20 ct par pierre ; nettoyage et inspection gratuits à vie [V].
- **Layaway** (`/pages/layaway-policy`) : 20 % d'acompte, 6 mensualités sans intérêt (3 pour les soldes) ; sur mesure : acompte 50 %, non remboursable ; frais de 5 % après 30 jours [V].
- **Reprise** : le prix d'achat d'un diamant est repris en totalité contre un diamant plus gros, à l'état d'origine et avec son certificat [V, `/pages/engagement-rings`].
- **Livraison, moyens de paiement, assurance du transport** : introuvables (panier vide, aucune page de livraison au pied de page, conditions de vente sans mention) [V]. L'expédition est donc **non vérifiée**.

## Confiance et service

- **Certificats** : GIA en colonne pour les naturels, IGI et GCAL pour les synthétiques [V]. Les fiches de bague citent le numéro de rapport, par exemple « Reference IGI certification #LG633406098 » [V]. L'inventaire cite par ailleurs « Every diamond we sell is GIA certified… laser inscription », formule non retrouvée sur les pages lues ce jour [V, index] ; elle contredirait les rapports IGI et GCAL.
- **Libellé du synthétique** : « Lab Grown » partout (titres, filtres, fiches). Aucune information sur la différence de valeur ; la mention « Natural/Mined unless otherwise notated » sert de règle [V].
- **Langues, devises** : anglais seulement, dollars américains seulement [V].
- **Avis clients** : bloc de 9 avis Google tiré de Google Maps sur l'accueil, avec liens vers chaque avis ; pas de note par produit [V].
- **Preuves de fabrication** : texte seul (dessin colorisé, cire, fonte, orfèvres sur place) ; aucune photo ni vidéo de fabrication vue, pas de suivi de commande [V]. La galerie de créations ne montre que des pièces vendues, affichées « Sold Out » [V].
- **Contact** : téléphone, e-mail, formulaire de question, rendez-vous Calendly ; pas de chat, pas de WhatsApp [V]. Horaires : mardi-jeudi 10 h-18 h ; vendredi 10 h-20 h ; samedi 10 h-15 h en pied de page et 10 h-17 h sur les pages de garantie et de layaway [V].

## Points forts à retenir pour JR Diamond

1. **Reprise à pleine valeur d'un diamant** contre un plus gros (argument de confiance sur le prix) — preuve : `/pages/engagement-rings`, section « Elevate Your Engagement Ring ». [V]
2. **Recherche de pierres avec tableau complet** (carat, couleur, pureté, taille, table, profondeur, dimensions, certificat, prix) et deux marchés distincts, naturel et synthétique, dans une même page — preuve : `/apps/diamondtools`, 2 941 naturels et 11 634 synthétiques le 15/11/2026. [V]
3. **Numéro du rapport sur la fiche de la bague** (« Reference IGI certification #… ») : le certificat est rattaché à la pièce — preuve : fiche de la bague de 1,58 ct. [V]
4. **Prix affiché avant tout contact** sur les bagues finies et sur les diamants (écart direct avec notre « Sur devis ») — preuve : 1 975 $, 3 750 $, 462 $ relevés. [V]
5. **Garantie claire et chiffrée** : 2 ans, perte de pierre jusqu'à 0,20 ct, entretien gratuit à vie — preuve : `/pages/merchandise-gurantee`. [V]
6. **Paiement échelonné par « layaway »** (6 mois sans intérêt) — preuve : `/pages/layaway-policy`. [V]
7. **Dessin colorisé à la main** comme étape visible du sur mesure — preuve : `/pages/the-custom-design-process`. [V] Le site ne montre en revanche aucun fichier de fabrication (notre avantage).

## Défauts observés

- Aucun configurateur, aucun assemblage monture + pierre, aucun aperçu de la bague faite [V].
- Pas de prix pour le sur mesure ; pas de durée de fabrication [V].
- Vue 360° du diamant avec une vignette en erreur (« Error! ») [V].
- Lien « Internal use only: Click here » visible sur la fiche d'un diamant [V].
- Page FAQ vide (« Coming Soon… ») [V, `/pages/frequently-asked-questions`].
- Bouton de pause du diaporama dont le texte est « Translation missing: en.sections.slideshow.pause_s » [V].
- Horaire du samedi incohérent (15 h au pied de page, 17 h sur les pages de garantie) [V].
- Changer l'origine (Lab Grown) efface le filtre de forme déjà posé [V].
- Aucun zoom sur les photos de la fiche [V].
- Adresse de la page de garantie mal orthographiée (`merchandise-gurantee`) [V].
- Politique de retour : tout article redimensionné ou gravé, et tout sur-mesure, n'est ni repris ni remboursé [V].
- Ne dit pas combien coûte l'envoi, ni quels moyens de paiement sont acceptés [V].

## Limites de l'audit

- Le bouton « Add To Cart » appelle `/cart/add` et le tri de la collection ajoute `sort_by` : ces deux chemins sont interdits par `robots.txt` ; aucun des deux n'a été actionné. Panier, frais de livraison, délai et moyens de paiement sont donc **non vérifiés**.
- Les curseurs cut, color, clarity, carat et prix, Compare, Save Search, Reset, la grille et les formulaires (question, hint, e-mail, visite) n'ont pas été actionnés (curseurs et formulaires : consigne de ne rien envoyer ; autres : essais sans résultat concluant).
- Le visuel principal se charge en 1,7 s sur ordinateur et 1,3 s en affichage iPhone (accueil, première image de plus de 100 px), 1,6 s sur ordinateur et 1,6 s en iPhone sur la fiche d'une bague, 2,4 s et 2,6 s pour la recherche de diamants. Mesure unique, sans limitation de débit, depuis le proxy de la session : à lire comme un ordre de grandeur [V].
- Les appels de la page à `gfdiamondlink.com/api/` (robots.txt de ce domaine : `Disallow:` vide) viennent de la simple ouverture ou du filtrage ; aucun appel interdit n'a été déclenché par un clic. Des requêtes vers `/cart.js` et des scripts de paiement partent de la page à son ouverture : ce n'est pas un écart.
- Je n'ai pas lu de page de livraison ni de politique d'expédition (aucun lien en pied de page).
- Le rendu du calendrier Calendly et des avis Google n'a pas été exploré.

## Sources

- https://richtersjewelry.com/ (accueil, robots.txt) — lu le 25/11/2026
- https://richtersjewelry.com/collections/engagement-rings
- https://richtersjewelry.com/pages/engagement-rings
- https://richtersjewelry.com/apps/diamondtools et https://richtersjewelry.com/apps/diamondtools/product/round-shape-0.30-carat-j-color-vs1-clarity-excellent-cut-gia-certificate--sku-2002942307
- https://richtersjewelry.com/collections/engagement-rings/products/14k-white-gold-bezel-set-emerald-cut-lab-grown-diamond-solitaire-engagement-ring-1-58ct
- https://richtersjewelry.com/collections/engagement-rings/products/14k-white-gold-round-diamond-three-stone-engagement-ring-setting-0-82ctw
- https://richtersjewelry.com/policies/refund-policy, https://richtersjewelry.com/pages/merchandise-gurantee, https://richtersjewelry.com/pages/layaway-policy
- https://richtersjewelry.com/pages/the-custom-design-process, https://richtersjewelry.com/pages/custom-design, https://richtersjewelry.com/collections/design-gallery, https://richtersjewelry.com/pages/appointment-paul-richter, https://richtersjewelry.com/pages/frequently-asked-questions, https://richtersjewelry.com/pages/about-us, https://richtersjewelry.com/cart
- https://gfdiamondlink.com/robots.txt
