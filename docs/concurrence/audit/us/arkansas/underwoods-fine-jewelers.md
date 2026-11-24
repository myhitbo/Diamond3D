# Audit : Underwoods Fine Jewelers (Fayetteville, Arkansas)

- **Site** : Underwoods Fine Jewelry, https://underwoods.com/ (Shopify)
- **Page de départ auditée** : https://underwoods.com/pages/custom-design-process, puis catalogue https://underwoods.com/collections/engagement-rings et une fiche
- **Date** : 15/11/2026 (robots.txt contrôlé avant chaque adresse : `Allow: /`, tout AUTORISÉ)
- **Appareils** : Chromium ordinateur (1366×900) ; affichage iPhone 13 pour la liste des contrôles de la page de départ seulement
- **Statut** : **complet pour ce qui existe** : le site n'a **pas de configurateur** en ligne ; le sur-mesure se fait en rendez-vous. Le parcours audité est « catalogue, fiche, panier » plus la page de processus et les politiques.
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
| --- | --- |
| 1. Page « Custom Design Process » | Texte en 3 étapes : choisir la pierre, dessiner la monture, relire / affiner / approuver ; boutons vers Gem Lab, Custom Gallery, FAQ, prise de rendez-vous |
| 2. Catalogue « Engagement Rings » | 109 produits (8 pages), filtres Gemstone / Metal / Shape / Style, tri, cœur « wishlist » |
| 3. Fiche produit | Photos (10 images), « Price available by appointment », Book Appointment, Add To Wishlist, Share, Ask a question, témoignages |
| 4. Panier | « Your cart is currently empty », aucun article ajoutable (pas de bouton d'achat sur la fiche lue) |
| 5. Sur-mesure réel | Consultation gratuite (en salle ou via Setmore), rendu 3D CAD et modèle en cire à l'échelle, acompte 50 %, fabrication 4 à 6 semaines |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Book Appointment (en-tête, `/pages/book-appointment`) | lien | Lu, non ouvert | — | non testé |
| Search (`/search`), Open wishlist, Cart (`/cart`) | lien | `/search` non ouvert (page de recherche exclue par prudence) ; `/cart` ouvert : panier vide | — | cart fonctionne ; autres non testés |
| EXPLORE OUR GEM LAB, CUSTOM GALLERY, FREQUENTLY ASKED QUESTIONS, AWARDS & HONORS, BOOK APPOINTMENT (page de départ) | bouton-lien | Adresses relevées ; Custom Gallery ouverte (116 produits, mêmes filtres et tri) ; Gem Lab ouverte (page quasi vide : 160 caractères de texte) | — | Gallery fonctionne ; Gem Lab pauvre ; autres non ouverts |
| Menu : Design Process, Design Gallery, Book Consultation (Setmore `atelierbyunderwoods.setmore.com/tyler`), Custom FAQ, Our Story, Craftsmanship, Gem Lab, Community Involvement, Awards & Honors, FAQ, Diamond Education, Gift Guide, Birthstone Guide, Blog | lien | Custom FAQ, FAQ ouvertes et lues ; Setmore non ouvert (tiers, réservation) ; autres non ouverts | — | partiellement testés |
| Pied de page : Refunds & Returns, Shipping, Custom Design Policies, Terms, Privacy, Jewelry Care & Services | lien | Refunds, Shipping, Custom Design Policies lues (200) | — | fonctionnent |
| 479-521-2000, Facebook, Instagram, YouTube | lien | Lus, non ouverts | — | non testés |
| Filtres Gemstone, Metal, Shape, Style (cases à cocher) | case | Chaque case change l'adresse (`?filter.p.m.custom.shape=Marquise`, `…metal=Platinum`, `…metal=Yellow+Gold`, `…gemstone=Diamond`, `…style=Halo`) ; **le compteur resté affiché « 109 products »** après chaque filtre dans mon contrôle [V] ; l'effet réel sur la liste n'est pas confirmé | — | fonctionne côté adresse ; effet sur la liste non confirmé |
| Valeurs de filtres listées | case | Gemstone : Diamond, Sapphire ; Metal : Platinum, Rose Gold, White Gold, Yellow Gold ; Shape : Asscher, Cushion, Emerald Cut, Marquise, Octagon, Oval, Pear, Princess, Radiant, Round ; Style : 3 Stone, Bezel, Classic, Double Row, Fancy Color Diamonds, Halo, Knife Edge, Modern, Stackable Rings, Vintage Inspired | aucun | présents |
| Tri (liste déroulante, 9 options : Featured, Most relevant, Best selling, A-Z, Z-A, Price low to high, Price high to low, Date old to new, Date new to old) | liste | Sélection par script refusée (erreur du test) ; options lues | — | non testé (réserve : l'option « Price » est proposée alors qu'aucun prix n'est affiché) |
| Pagination (1, 2, 3, …, 8, Next) | lien | Adresses `?page=n` relevées ; non ouvertes | — | non testée |
| Cœur « Add to wishlist » (vignettes) | bouton | Présent sur chaque vignette ; non actionné (compte probable) | — | non testé |
| Fiche : Book Appointment | bouton | Non actionné | — | non testé |
| Fiche : Add To Wishlist | bouton | Non actionné | — | non testé |
| Fiche : Share | bouton | Ouvre une fenêtre : champ avec l'adresse, « Copy », Facebook, X, Pinterest | — | fonctionne (présence vérifiée, partage non envoyé) |
| Fiche : Ask a question | bouton | Formulaire (nom, e-mail, téléphone, message, « Send Question ») ; **non rempli** | — | présent, non testé |
| Fiche : flèches « Slide left / right » | bouton | Défilement de la galerie (10 images) ; non actionnées | — | non testées |
| Étiquettes de la fiche : Diamond, Platinum, Round, Classic | lien | Mènent à `/collections/all?filter.p.m.custom.…` | — | lus |
| Vue 360°, vidéo, 3D, essayage, AR, zoom, comparer, carat, gravure, taille du doigt, financement | — | **Aucun** de ces contrôles n'existe sur la fiche lue (0 vidéo, 10 images) | — | absents |
| Chat, WhatsApp | — | Non relevés | — | absents |

## Options disponibles

- **Catalogue (109 bagues de fiançailles, 116 dans la galerie sur mesure)** : filtres ci-dessus ; la plupart des pièces sont en platine ou or blanc, avec diamants de couleur (roses, jaunes), halos, trois pierres [V, capture].
- **Fiche lue** (Round Diamond with Baguettes in Platinum Ring, item UCD1800) : diamant rond de 3,05 ct, deux baguettes de 0,75 ct au total, platine, « Price available by appointment » ; description en une phrase ; pas de sélecteur de taille, de métal ni de carat [V].
- **Personnalisation réelle** : en rendez-vous (modèles de la galerie ou création originale, pierre existante possible) ; révisions raisonnables incluses avant production [V, politiques].
- **Services** : réparation et mise à taille sur place (or 14 k, 18 k, platine ; pas d'or 10 k ni plaqué) [V, FAQ] ; estimation, entretien.

## Prix, délais, retours, garanties

- **Prix** : **aucun prix en ligne** ; « Price available by appointment ». Aucune décomposition. Devis de la pièce sur mesure donné avec le modèle de cire [V, FAQ custom].
- **Délai** : variantes de design en 1 semaine, devis et cire en 1 semaine de plus, fabrication 4 à 6 semaines, « most clients have their piece within six to eight weeks » [V, https://underwoods.com/pages/custom-faq].
- **Acompte** : consultation et conception sans frais ; **acompte de 50 % non remboursable** à l'approbation ; remis numériques (envoi par e-mail ou SMS) contre un acompte de design de 500 $ non remboursable, déduit des 50 % ; solde avant livraison [V, https://underwoods.com/pages/custom-design-policies].
- **Retours** : 30 jours, à l'état neuf, remboursement à l'original ou échange ; **vente finale** : bijou sur mesure, commande spéciale, objets personnalisés ou gravés, retouches au-delà de la première mise à taille offerte [V, https://underwoods.com/policies/refund-policy]. Une fois en production, pas d'annulation ni de remboursement [V].
- **Livraison** : FedEx, États-Unis seulement, assurée, signature adulte obligatoire, frais calculés à l'achat, retrait possible à Fayetteville ; étiquette de retour prépayée pour retours approuvés [V, https://underwoods.com/policies/shipping-policy].
- **Certificats** : toutes les pierres passent par le laboratoire accrédité AGS (depuis 1961, « first in Arkansas ») ; chaque pièce sur mesure livrée avec un **appraisal certifié** et une estimation d'assurance Jewelers Mutual [V, https://underwoods.com/pages/custom-faq].
- **Garantie** : « Lifetime Guarantee of Investment » (reprise jusqu'à 100 % du prix d'un diamant, si le nouveau vaut au moins le double) [V, https://underwoods.com/pages/faq].
- **Synthétique** : aucune mention de diamant synthétique (« lab-grown ») dans les pages lues (FAQ, FAQ sur mesure, politiques, catalogue : filtre Gemstone limité à Diamond et Sapphire) [V pour ces pages ; ailleurs inconnu].

## Confiance et service

- Atelier intégré : « in house design studio », fabrication, sertissage et finition sous un même toit ; CAD, impression 3D, fonte à la cire perdue, laser [V, FAQ].
- **Modèle de cire à l'échelle** à tenir en main avant tout acompte, plus rendu 3D CAD ; ajustements à cette étape [V]. Preuve de fabrication très proche de la promesse de JR Diamond, mais **remise en salle**, pas en ligne (aucune vidéo d'atelier lue).
- Récompenses citées : « America's Coolest Store », deux Robert M. Shipley Awards [V, page de départ ; non recoupé].
- Témoignages « Verified Buyer » sur la fiche (4 lus : James Y., Kimberly P., Landon R., Rena B.) [V] ; pas de note chiffrée.
- Rendez-vous : formulaire Setmore, studio privé « Atelier by Underwoods », téléphone 479-521-2000, e-mail info@underwoods.com ; showroom sans rendez-vous lundi à vendredi 10-18 h, samedi 10-17 h [V].
- Langue : anglais ; devise : dollar [V].

## Points forts à retenir pour JR Diamond

1. **Modèle de cire imprimé à l'échelle avant tout engagement** ; promesse « voir ce qui existe » (preuve : custom-faq, « print a to-scale 3D wax mold so you can hold the design in your hand »). JR Diamond peut la tenir à distance par vidéo du modèle.
2. **Étapes de délai précises et chiffrées** : 1 semaine (variantes), 1 semaine (devis et cire), 4 à 6 semaines (fabrication), 6 à 8 semaines au total (preuve : custom-faq).
3. **Politique sur mesure sans ambiguïté** : acompte, révisions, annulation, vente finale écrits sur une page dédiée (preuve : custom-design-policies). Le point d'ancrage manquant à beaucoup de sites ; utile pour la question de l'avocat israélien.
4. **Certificat d'estimation et devis d'assurance remis avec chaque pièce** (preuve : custom-faq).
5. **Laboratoire gemmologique maison accrédité** comme argument de contrôle des pierres (preuve : custom-faq, faq).
6. **Retrait en salle + FedEx assuré avec signature + étiquette de retour prépayée** (preuve : shipping-policy).

## Défauts observés

1. **Aucun prix en ligne** et **aucun configurateur** : le visiteur ne peut ni estimer ni acheter une bague (fiche sans bouton d'achat, panier inaccessible) [V].
2. **Rendus numériques payants** : 500 $ non remboursables pour recevoir le rendu par e-mail ; autrement uniquement en salle [V].
3. **Filtres du catalogue** : l'adresse change mais le compteur reste « 109 products » dans mon contrôle ; fonctionnement réel non confirmé [V, effet non établi].
4. **Page Gem Lab quasi vide** (160 caractères lus, contenu probablement injecté) [V].
5. **Option de tri « Price » sans prix affichés** [V].
6. Aucune mention du diamant synthétique dans les pages lues [V].
7. Descriptions de fiche minimales (une phrase) et aucune vidéo (0 élément vidéo) [V].

## Limites de l'audit

- Pas de configurateur à auditer : la « page de départ » est une page de texte ; les contrôles de la fiche sont ceux d'un catalogue Shopify.
- Temps d'apparition du visuel principal : liste des bagues, première photo affichée en **0,97 s** sur ordinateur (domcontentloaded jusqu'à une image de plus de 200 px chargée) ; **iPhone non mesuré** (mon critère de largeur d'image a expiré en 30 s ; ne dit rien sur la vitesse réelle). Fiche : mesure non faite.
- Non testés : Setmore, wishlist (compte), Ask a question (formulaire), recherche, pagination, tri, blog, Diamond Education, Gift Guide, Birthstones.
- Réponses de la FAQ lues dans le texte caché des accordéons (ouverts par script, aucune navigation) ; la réponse sur les certificats est tronquée côté lecture après « five certi… » [V pour le début].
- Aucun formulaire rempli, aucun compte, aucun achat ; pas de chat ouvert.

## Sources

- https://underwoods.com/pages/custom-design-process (15/11/2026, ordinateur et iPhone)
- https://underwoods.com/pages/custom-faq ; https://underwoods.com/pages/custom-design-policies ; https://underwoods.com/pages/faq
- https://underwoods.com/policies/refund-policy ; https://underwoods.com/policies/shipping-policy
- https://underwoods.com/collections/engagement-rings ; https://underwoods.com/collections/custom-gallery ; https://underwoods.com/products/round-diamond-with-baguettes-in-platinum-ring-1 ; https://underwoods.com/cart ; https://underwoods.com/pages/on-site-gem-lab
- Captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/underwoods-fine-jewelers/`
