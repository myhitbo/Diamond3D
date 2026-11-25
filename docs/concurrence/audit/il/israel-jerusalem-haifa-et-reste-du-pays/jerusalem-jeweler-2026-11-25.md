# Audit de site : Jerusalem Jeweler

- **Site** : Jerusalem Jeweler (Jérusalem, atelier individuel) ; **adresse** : https://jerusalemjeweler.com/
- **Date** : 15/11/2026 (exécution le 25/11 selon l'agenda de session ; date de rapport imposée par la consigne)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (pas de configurateur ; bouton « Add to cart » non cliqué, voir Limites)
- **robots.txt** : AUTORISÉ pour accueil, catégories, produits, /cart/, /checkout/, /?s= ; INTERDIT : `/*?*add-to-cart=` [V : robots.cjs]. Aucun écart.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
|---|---|
| Accueil `/` | Bandeau (tél. États-Unis, e-mail, « Jerusalem, Israel »), recherche, Wishlist, menu HOME / ABOUT / RINGS / BRACELETS / EARRINGS / NECKLACES / CONTACT, vitrines par catégorie, « SHOP JEWISH JEWELRY » [V] |
| Catégorie `/product-category/rings/` | 142 résultats, 8 par page, tri (6 choix), « Quick View », cœur « wishlist » [V] |
| Fiche produit | Galerie (2 photos), loupe, **un seul choix : taille US**, quantité, ADD TO CART, avis, produits liés [V] |
| Panier `/cart/` | Étapes 1 Panier, 2 Détails de paiement, 3 Commande terminée ; panier vide testé seulement [V] |
| Pas de configurateur | Aucun choix de métal, pierre, carat ou monture ; chaque bijou est une fiche figée [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Téléphone « U.S. # 1-914-768-4266 » | lien tel: | numéro américain, pas de numéro israélien | non | présent [V] ; appel non testé |
| jerusalemjeweler@gmail.com | lien mailto: | adresse Gmail | non | présent [V] |
| Recherche (champ + SEARCH BUTTON) | champ | `/?s=kiddushin` : « nothing matched » ; `/?s=wedding+band` : liste d'alliances | non | fonctionne [V] |
| WISHLIST (en-tête) | lien | page `/wishlist/` (autorisée), non ouverte | non | non testé : sans compte, état inconnu |
| Cœur « Add to wishlist » | lien `?add_to_wishlist=` | modifie un état côté serveur | non | non cliqué (écriture) |
| Réseaux (Facebook, Pinterest, Instagram, LinkedIn, Twitter) | liens | sortants | non | présents, non suivis [V] |
| Menu HOME, ABOUT, RINGS, BRACELETS, EARRINGS, NECKLACES, CONTACT | liens | pages ouvertes : about, contact, rings OK (200) | non | fonctionnent [V] ; bracelets, earrings, necklaces non ouverts |
| Panier (icône) | lien | `/cart/` : « Your cart is currently empty », bouton RETURN TO SHOP | non | fonctionne [V] |
| Tri (liste déroulante, 6 choix : défaut, popularité, note, nouveauté, prix croissant, prix décroissant) | select | `?orderby=price` : le moins cher en tête (articles argent) | oui, ordre | fonctionne [V] |
| Quick View (sur chaque vignette) | lien `#` | un clic : aucune fenêtre détectée en 2,5 s | non | **effet non confirmé** [V partiel] |
| Fiche : Size (select, 12 valeurs : 4 à 9,5 US, ordre « 9.5, 9 » inversé) | select | choisir 4, 7, 9.5 : prix inchangé 3 795,88 $ | aucun | fonctionne [V] |
| Clear options | lien | réinitialise la taille | non | présent [V] |
| Quantité | nombre | champ standard | multiplie | non testé (lié au panier) |
| ADD TO CART | bouton submit (POST) | non cliqué | n.a. | **non testé** : robots interdit `*add-to-cart=` ; panier interdit par robots.txt pour ce chemin |
| Galerie : 2 miniatures | liens vers .png | 2 images 303×540 px | non | fonctionne [V] |
| Loupe (zoom) | bouton | ouvre la visionneuse (PhotoSwipe) | non | fonctionne [V] |
| Avis : note (Perfect…Very poor), texte, nom, e-mail, case, Submit | formulaire | non rempli (règle de lecture seule) | non | non testé |
| Formulaire contact (prénom, nom, e-mail, tél., message) | formulaire | non rempli | non | non testé |
| Partager Facebook, Twitter, Pinterest, LinkedIn (fiche) | liens | sortants | non | présents, non suivis |
| Return Policy (pied de page) | lien | page lue | non | fonctionne [V] |
| Chat, WhatsApp, rendez-vous, comparer, 3D, 360°, AR, essayage | absents | | | aucun contrôle présent [V : liste des contrôles accueil, 96 desktop / 71 mobile] |

## Options disponibles

- **Taille (seule option par produit)** : US 4, 4,5, 5, 5,5, 6, 6,5, 7, 7,5, 8, 8,5, 9, 9,5 ; « custom orders from size 10 and up » [V : fiche solitaire].
- **Alliance tressée 14 k** : « Available in Rose or yellow gold as well », « Request matching wedding bands » : métal par demande, pas par menu [V].
- **Gravure** : « Free inside engraving name/initial/date/personal quote » annoncée sur l'alliance tressée ; aucun champ de saisie sur la fiche [V].
- Aucun choix de métal, pierre, carat, forme, monture, pavage. Aucun filtre (prix, matière) hormis le tri.
- Matières relevées au catalogue : or 14 k (jaune surtout), or 18 k (une bague), platine 950 (une alliance), argent sterling [V : recherche et catégorie].
- Diamant : « Natural Diamonds only! » (page About) ; pas de synthétique [V].

## Prix, délais, retours, garanties

- **Devise** : dollar uniquement, pas de sélecteur ; « Free Shipping » mondial [V].
- **Prix** : un montant unique par fiche, sans décomposition. Solitaire 14 k, 0,50 ct, couleur F : **3 795,88 $** ; alliance tressée 14 k : 1 675,79 $ ; bague hamsa + 0,10 ct : 3 295,50 $ ; alliance cœurs 14 k : 1 895,75 $ ; Hear O Israel 18 k : 1 486,70 $ [V]. Taxe/TVA : non indiquée.
- **Solitaire** : « Width 3 mm », « Type of Stone: 0.50 Ct Diamond, Color F White », pureté non indiquée [V].
- **Délai** : aucun délai annoncé sur la fiche, le panier ni la page de retours [V] (« Shipping from Jerusalem Israel », « Free worldwide express shipping »).
- **Retours** (`/return-policy/`) : « Returns & exchanges Accepted », frais de retour à la charge de l'acheteur, perte de valeur à sa charge si l'état change ; **aucun nombre de jours** ; droits de douane à la charge de l'acheteur ; « **Cancellations: not accepted** » [V]. Exception du sur-mesure : non mentionnée. En contradiction avec l'encart des fiches « No-Risk Money Back Guarantee / No Hassle Refunds » [V].
- **Garanties** : aucune page ; « certificate of authenticity in jewelry box » (pas de GIA/IGI) [V].
- **Panier** : récapitulatif, frais, moyens de paiement non vus (panier vide, ajout interdit). Pied de page : « Guaranteed Safe Checkout » (logos non identifiés) [V partiel].

## Confiance et service

- **Langues** : anglais uniquement ; pas d'hébreu ni de français [V]. Clientèle visée : diaspora anglophone, États-Unis (numéro +1) [I].
- **Avis** : « REVIEWS (0) » sur les deux fiches lues ; aucun avis sur l'accueil [V]. Une boutique Etsy est citée (About) [V].
- **Preuves de fabrication** : aucune vidéo ni photo d'atelier, pas de suivi de commande ; photos de produit isolées, certaines floues (303 px de large) [V]. Page About : « handcraft in Jerusalem » sans nom ni visage [V].
- **Contact** : formulaire, Gmail, téléphone américain. Pas de chat ni WhatsApp [V]. Adresse : « Jerusalem, Israel » seulement.
- Carte cadeau annoncée (About), emballage cadeau gratuit [V].
- **Alliance de kiddouchin** : introuvable. La recherche « kiddushin » renvoie zéro résultat [V]. Offre voisine : alliances hébraïques (« I Am My Beloved », « Woman of Valor »), alliances gravées en argent, or ou platine ; aucune alliance lisse sans pierre présentée comme telle [V].
- **Clientèle francophone** : aucun contenu français [V].

## Points forts à retenir pour JR Diamond

1. **Livraison mondiale gratuite annoncée sur chaque fiche** (« & Free Shipping », fiche solitaire) : attente de base du visiteur étranger [V].
2. **Gravure intérieure offerte** (alliance tressée) : service attendu pour l'alliance [V].
3. **Prix affiché dès la fiche, en dollars** : le prix « Sur devis » de JR Diamond détonne (inféré d'après la synthèse précédente) [V : 3 795,88 $].
4. **Vente directe du joaillier** : « Buy from the jeweler directly and save money » (About) : promesse proche de « l'atelier en direct », mais sans preuve [V].
5. **Offre diaspora** : textes hébraïques bibliques (Shema, Ani LeDodi) : marché des alliances juives, à croiser avec l'alliance de kiddouchin [V].

## Défauts observés

- Aucun configurateur ni visualisation avancée : 2 photos par bague, taille seule option [V].
- Prix sans décomposition ni mention du poids d'or, du carat de l'or ou de la pureté du diamant [V].
- Page de retours sans durée, annulation interdite, contredisant la garantie « Money Back » des fiches [V].
- Aucun délai de fabrication ni de livraison affiché [V].
- Aucun avis (0 sur les fiches lues), aucune preuve d'atelier, certificat « of authenticity » sans émetteur [V].
- Quick View sans effet visible ; ordre des tailles « 9.5, 9 » ; SKU « N/A » [V].
- Pas d'hébreu, pas de français, devise unique ; coordonnées israéliennes absentes (numéro +1) [V].
- Image principale en 303×540 px, soit faible définition sur écran récent [V].

## Limites de l'audit

- **Temps d'apparition du visuel principal** (mesure, une passe par appareil) : ordinateur, DOMContentLoaded 3,2 s, LCP 3,1 s ; iPhone 13, DCL 3,5 s, LCP 3,3 s. Réseau via proxy d'audit : valeurs indicatives [V].
- ADD TO CART non cliqué (règle robots `*add-to-cart=` ; le formulaire envoie en POST sur la fiche, mais l'action reste liée à ce motif) : **panier, frais de livraison, délai et moyens de paiement non vérifiés** ; panier vide seulement.
- Wishlist, avis, contact et Quick View non testés ou non concluants (lecture seule).
- Quick View : il pourrait s'ouvrir par survol ; non établi.
- Catalogue de 142 articles en rings : seules la première page, le tri par prix, la recherche « wedding band » et deux fiches ont été lues. Bracelets, boucles d'oreilles, colliers non ouverts.
- Pas de contrôle des mentions légales (aucune page trouvée dans le pied de page) ni du poinçon.

## Sources

- https://jerusalemjeweler.com/ (ordinateur et iPhone, captures et liste des contrôles dans le dossier de travail)
- https://jerusalemjeweler.com/product-category/rings/ et `?orderby=price`
- https://jerusalemjeweler.com/product/engagement-ring-14k-gold-and-half-a-ct-natural-diamond-israel-solitaire-rings-for-women-jerusalem-jewelry/
- https://jerusalemjeweler.com/product/14k-gold-braided-wedding-band-customized-wedding-bands-unique-wedding-ring-personal-design-jewelry/
- https://jerusalemjeweler.com/return-policy/ · /about/ · /contact/ · /cart/ · `/?s=kiddushin` · `/?s=wedding+band`
- robots.txt : lu par l'outil robots.cjs le 25/11/2026
