# Audit : Andrew Mazzone Design Jewellers (Adelaide, Australie-Méridionale)

- **Site** : https://www.mazzone.com.au ; page de départ https://www.mazzone.com.au/collections/custom-engagement-rings
- **Date** : 15/11/2026 (séance d'audit menée le 25/11)
- **Appareils** : ordinateur (Chromium 1440 x 900) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Page de départ, fiche produit, constructeur intégré et pages de service lus et actionnés. Non faits : ajout au panier (`/cart/add` interdit par robots.txt), tri (`sort_by` interdit), cumul de filtres (interdit), paiement. Aucun défi 429 rencontré pendant la séance.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- Conformité : `robots.txt` du site lu ; aucune adresse INTERDITE ouverte. Le constructeur est servi par un autre domaine (`designer.unbridaled.ai`, robots.txt : Allow `/`) ; il se charge à l'ouverture de la fiche, aucun clic n'a appelé d'adresse interdite. Le chargement de la fiche déclenche des scripts de paiement accéléré (Shopify) : ressources de page, pas un clic.

## Parcours

| Étape | Adresse | Options [V] |
|---|---|---|
| 1. Choisir la monture | `/collections/custom-engagement-rings` (193 produits ; bandeau « Step 1: Choose Your Setting / Step 2: Choose Your Diamond / Step 3: Complete Your Ring ») | filtres Métal (7) et Forme (9) ; cartes « Custom made », prix « From $2,299 à $5 299 » (fiches vues) |
| 2. Fiche monture + constructeur | `/products/round-brilliant-cut-diamond-solitaire-engagement-ring-8-rb-yg` | métal (7 pastilles), taille de doigt (liste), carat (½ à 3 ct), tableau de pierres (Mined / Lab Grown, 3 niveaux IDEAL / PREMIUM / EXCELLENT) |
| 3. Panier | `/cart` | page vide ouverte seule ; ajout non testé (`/cart/add` interdit) |
| Alternative | `/pages/make-appointment`, « Enquire now » (`/pages/enquire-now?title=…&sku=…`) | consultation gratuite ; formulaire non rempli |

## Contrôles vérifiés

Page collection (588 contrôles listés par `controls.cjs`, dont la plupart sont des puces de variantes répétées par carte) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « Black Friday sale, up to 50 % off » | lien | mène à `/collections/black-friday-sale-2026` (non ouvert) | — | non testé |
| Menu Engagement / Wedding / Jewellery / Custom jewellery / Discover / Services / Contact | liens | présents | — | présents [V], non parcourus |
| Login, Search, Cart | liens | `/customer_authentication/redirect`, `/search`, `/cart` | — | Cart ouvert (vide) ; Login non ouvert (compte) |
| Filtre Métal (14 ct jaune, 18 ct jaune, 14 ct blanc, 18 ct blanc, 14 ct rose, 18 ct rose, platine) | cases | listées [V] ; activation par script sans effet (adresse et compteur inchangés : 193) | — | non confirmé |
| Filtre Forme (rond, ovale, radiant, émeraude, poire, marquise, coussin, princesse, toi et moi) | cases | idem | — | non confirmé |
| SORT BY | bouton | ouverture non obtenue ; `sort_by` interdit par robots.txt, aucune option activée | — | non testé |
| Vues large / medium / compact | boutons | présents [V] | — | non testé |
| Pagination 2, 3, 5, … | liens | `?page=2` etc. (autorisé) | — | présents, non suivis |
| Puces de métal sur chaque carte | radios | 7 variantes par carte | variantes à prix différents | présentes [V] |
| Shipping & Returns / Contact Us / Learn More (diamants) / Find Your Size | liens | `/policies/shipping-policy`, `/pages/contact`, `/pages/demystifying-diamonds`, `/pages/ring-size-guide` | — | ring-size-guide lu |
| Abonnement e-mail | formulaire | non rempli | — | non testé |
| Pied de page : remodelling, repairs, gift certificate, FAQ, politiques | liens | présents | — | FAQ lue |
| Téléphone 08 8223 5447, info@mazzone.com.au | tel / mailto | présents | — | non actionnés |

Fiche produit (ordinateur) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal (pastilles dans l'iframe) : 14 ct jaune | pastille | sélection par défaut ; l'étiquette « Metal : » affiche la valeur | $2 399 | OK [V] |
| 18 ct jaune / 14 ct blanc / 18 ct blanc / 14 ct rose / 18 ct rose / platine | pastilles (clic sur la pastille) | l'étiquette du constructeur change (vérifié pour 18 ct blanc) ; photo principale inchangée (jaune) | $2 999 / $2 599 / $3 199 / $2 399 / $2 999 / $3 199 (relevés par les variantes du formulaire) | OK pour le prix, la photo ne suit pas [V] |
| Taille de doigt (liste) | liste | H, H½, I, … jusqu'à Q au moins (liste lue, coupée à Q dans le relevé) | aucun | OK [V] |
| Carat (liste) | liste | ½, ¾, 1, 1¼, 1½, 1¾, 2, 2¼, 2½, 2¾, 3 ct | aucun sur le prix de la monture | OK [V] |
| Tableau de pierres après choix du carat | tableau | pour 1 ct : IDEAL mined 1,04 E VVS2 $18 820 ; IDEAL lab 1,01 E VVS2 $1 800 ; PREMIUM mined 1,01 F VS2 $10 820 ; PREMIUM lab 1,05 F VS2 $1 510 ; EXCELLENT mined 1,01 G SI1 $7 690 | prix de la pierre seule | OK [V] |
| Icônes média (vidéo, certificat) par pierre | icônes | présentes sur chaque ligne ; non cliquées (destination non établie, le certificat IGI/GIA est hors domaine) | — | non testé |
| « View → » par pierre | bouton | sans effet visible sur la page après clic : le prix reste « From $3 199 AUD » (monture seule) | prix total non affiché | à confirmer [V] |
| Info « i » des niveaux IDEAL / PREMIUM / EXCELLENT, du métal | icônes | présentes ; fenêtres modales chargées (`/modal?type=carat|shape|metal`) | — | non lues |
| Galerie « Go to item 1 à 12 » | boutons | 12 images (photos de rendu studio ; vues jaune, blanc, rose) | — | OK [V] |
| ADD TO CART | bouton | **non cliqué** : appelle `/cart/add`, interdit | — | non testé (panier interdit par robots.txt) |
| MAKE AN APPOINTMENT | lien | `/pages/make-appointment` : consultation gratuite | — | page lue |
| ENQUIRE NOW | lien | `/pages/enquire-now?title=…&sku=8-rb-yg-14` | — | non ouvert |
| Ring Size Guide | lien | `/pages/ring-size-guide` : papier ou ficelle, bande de 1,9 x 10 cm, tableau | — | lu |
| Share (Facebook, Twitter, Pinterest, e-mail) | liens | liens de partage vers des domaines tiers | — | non cliqués |
| Deliveries, returns & exchanges / After sales service | accordéons | se déplient ; texte lu (voir plus bas) | — | OK [V] |
| Chat Podium (bulle « Hi, have a question, please text us here ») | bouton | affiché au chargement ; conversation non ouverte | — | non testé |
| Boutons de paiement accéléré | — | non affichés sur la fiche ; jamais cliqués | — | — |

Absents : vue 3D, 360°, essayage en réalité augmentée, vidéo de la bague, comparateur, enregistrement de favoris sur la fiche, gravure (proposée en magasin selon la FAQ).

## Options disponibles [V]

- **Métal** : or 14 ct et 18 ct (jaune, blanc, rose) ; platine.
- **Formes** : rond, ovale, radiant, émeraude, poire, marquise, coussin, princesse, toi et moi.
- **Montures** (titres de cartes) : solitaire 4 griffes, knife edge, serti clos (bezel), pavé sur le jonc, halo, halo caché, trilogie, baguettes latérales.
- **Origine de la pierre** : naturelle (« Mined », certificat GIA) ou lab-grown (IGI), selon la fiche.
- **Carat** : ½ à 3 ct (la monture accepte 0,50 à 3,00 ct).
- **Pureté / couleur** : affichées dans le tableau de pierres (exemples E VVS2, F VS2, G SI1) ; pas de filtre libre.
- **Taille de doigt** : liste H à Q et au-delà.
- **Corps de bague** : largeur 1,7 mm sur la fiche vue.

## Prix, délais, retours, garanties [V]

- **Prix** : affiché en AUD ; « From $2 299 à $2 399 » pour les solitaires de la page ; la fiche précise : prix de la monture seule, photographiée avec une pierre de 1,00 ct ; « a final price will be determined following your centre stone selection ». Aucune décomposition en un total (monture + pierre + main-d'œuvre) n'a été vue ; le tableau de pierres donne le prix de la pierre.
- **Fourchette de monture par métal** (solitaire rond n° 8) : 14 ct jaune $2 399 ; 18 ct jaune $2 999 ; 14 ct blanc $2 599 ; 18 ct blanc $3 199 ; 14 ct rose $2 399 ; 18 ct rose $2 999 ; platine $3 199 [V].
- **Délai** : « 4-6 week turn around » pour la fabrication ; délais plus courts sur demande ; FAQ : « 2-6 weeks » (incohérence entre la fiche et la FAQ) [V].
- **Livraison** : coursier avec signature ; « up to 7 working days » ; gratuite dès 150 $ ; **commandes de plus de 3 000 $ : retrait en magasin uniquement** ; pas d'envoi international (FAQ) ; Australie seulement [V].
- **Commandes sur mesure** : acompte de 50 % avant fabrication ; après lancement, **ni annulation ni remboursement pour changement d'avis, acompte perdu** ; diamants, pierres et perles non retournables [V]. Prêt-à-porter : retour pour défaut dans 14 jours ; échange sous 14 jours (pièces en stock), pas de retour sur articles soldés [V].
- **Garantie** : garantie à vie contre les défauts de fabrication ; nettoyage et contrôle des pierres offerts à vie sur les bagues sur mesure ; rhodiage conseillé tous les 12 mois pour l'or blanc [V].
- **Paiement** : FAQ : Visa, Mastercard, Amex (frais), virement, Zip Money ; icônes Apple Pay, Google Pay, PayPal, Amex, Mastercard en pied de page ; lay-by de 2 mois (50 % d'acompte) [V].
- **Certificats** : naturel = GIA, synthétique = IGI (fiche) ; la FAQ dit que tous les diamants sont certifiés, GIA recommandé, y compris le lab-grown [V].
- **Libellé du synthétique** : « Lab Grown » / « Laboratory-Grown Diamond » ; FAQ « created » = cultivé en laboratoire ; aucune mention légale du terme [V].
- **Langue, devise** : anglais, AUD, TVA australienne non détaillée ; panier non vu avec articles [V].

## Confiance et service

- Atelier : « handcrafted to order in Australia » ; studio au 204 Grenfell St, Adelaide ; horaires affichés (mardi à samedi) [V].
- Consultation gratuite sur rendez-vous, croquis avec un joaillier, remodelage, réparations, bon cadeau, rendez-vous ; chat Podium ; téléphone et e-mail [V].
- Avis clients : aucun avis affiché sur la page de départ ni sur la fiche relevée [V] ; liens vers Facebook, Instagram, Pinterest, YouTube.
- Preuves de fabrication : aucune photo ni vidéo d'atelier vue sur les pages relevées ; pas de suivi de commande décrit [V, absence sur les pages lues].

## Mesures du visuel principal

| Page | Ordinateur | iPhone |
|---|---|---|
| Collection, première image | 1 387 ms (LCP 644 ms) | 1 214 ms |
| Fiche, première image | 2 744 ms | 1 715 ms |

Un essai par cas, réseau du bac à sable : ordre de grandeur seulement. Pas de défilement horizontal sur la fiche iPhone [V].

## Points forts à retenir pour JR Diamond

1. **Pierre, monture et prix lisibles dans le même écran** : tableau origine / carat / couleur / pureté / prix avec trois niveaux nommés. Preuve : tableau de pierres de la fiche rond n° 8, 1 ct (relevé ci-dessus).
2. **Prix de monture par métal visible** et différent pour chacun des 7 métaux ; cela évite l'effet « Sur devis ». Preuve : variantes $2 399 à $3 199.
3. **Précision sur l'incertitude** : « price shown is for the setting only … final price determined following your centre stone selection ». Preuve : texte de la fiche.
4. **Certificat par origine** (GIA naturel, IGI synthétique) indiqué sur la fiche, comme chez JR Diamond. Preuve : section « Specifications ».
5. **Politique de sur mesure écrite sans détour** (acompte 50 %, pas de remboursement après lancement) : référence de transparence, mais sévère pour l'acheteur. Preuve : accordéon « Deliveries, returns & exchanges ».
6. **Service à vie** (nettoyage, contrôle des pierres) et conseil de rhodiage. Preuve : accordéon « After sales service ».
7. **Rendez-vous gratuit et formulaire « Enquire now » pré-rempli avec le titre et la référence du produit.** Preuve : lien `/pages/enquire-now?title=…&sku=…`.

## Défauts observés

- La photo principale **ne change pas** quand on choisit un autre métal (nom du fichier inchangé après chaque clic) ; seule la galerie contient des vues d'autres couleurs.
- Le prix affiché pour le carat choisi ne montre **pas de total** ; « View → » sur une pierre n'a pas changé le prix de la page (« From $3 199 AUD »).
- Délai incohérent : 4 à 6 semaines (fiche) contre 2 à 6 semaines (FAQ) ; livraison 7 jours ouvrés « sale period » avec retards possibles.
- Commandes de plus de 3 000 $ : **retrait en magasin uniquement** ; aucune livraison hors Australie.
- Aucun avis, aucune preuve de fabrication, aucun suivi de commande visible.
- Les pastilles de métal du constructeur ne répondent pas à un clic classique sur leur libellé (invisible) ; seule la pastille colorée fonctionne.
- Filtres de collection et tri : non activables dans le test automatisé (état inconnu pour un visiteur humain).
- La collection porte un bandeau promotionnel (jusqu'à 50 % de remise Black Friday) : prix soumis à variation.

## Limites de l'audit

- Ajout au panier non fait : `/cart/add` interdit par robots.txt ; récapitulatif, frais de livraison et moyens de paiement du panier non relevés ; seul `/cart` vide a été lu.
- Tri, filtres, icônes média et modales du constructeur non testés ou non confirmés ; contenus du certificat (GIA/IGI) non ouverts.
- Mesures de vitesse : une seule mesure par page.
- Le constructeur est un service tiers (`designer.unbridaled.ai`) dont le comportement a été observé sur une seule fiche.
- Étapes 2 et 3 annoncées par le bandeau (« Choose Your Diamond », « Complete Your Ring ») : aucun lien visible n'y mène ; elles semblent correspondre au tableau de pierres de la fiche [I].

## Sources

- https://www.mazzone.com.au/collections/custom-engagement-rings (page lue et actionnée)
- https://www.mazzone.com.au/products/round-brilliant-cut-diamond-solitaire-engagement-ring-8-rb-yg (fiche)
- https://designer.unbridaled.ai/?product_id=9471994331377&store_id=77493272817&currency=AUD (constructeur dans l'iframe)
- https://www.mazzone.com.au/pages/faq ; /pages/make-appointment ; /pages/ring-size-guide ; /cart (lues)
- https://www.mazzone.com.au/robots.txt
