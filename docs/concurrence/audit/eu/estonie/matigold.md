# Audit : MATIGOLD (Mati Kullaäri, Tallinn, Estonie)

- **Site** : https://matikuld.ee/ (anglais : https://matikuld.ee/en ; ancien domaine matigold.com)
- **Page de départ auditée** : https://matikuld.ee/en/product-category/jewellery/engagement-rings/?pa-kivid=lab-grown-diamonds&pa-kivid_operator=OR (liste) puis la fiche https://matikuld.ee/en/product/gold-ring-with-lab-grown-diamond-code-rx3170-w-300/ ; alliances sur mesure : https://matikuld.ee/en/design-your-own-ring-2/
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1440 x 900). L'affichage iPhone n'a pas pu être mesuré (voir limites).
- **Statut** : **partiel**. Le site ne bloque pas les robots (robots.txt ouvert, sauf `?add-to-cart=`), mais la connexion de la session est instable (curl « 000 » par moments, réponse 502 du navigateur, feuilles de style non chargées dans Chromium). Le contenu a été lu dans le HTML de la fiche ; les contrôles n'ont pu être actionnés que partiellement. Le bouton « Add to cart » n'a pas été cliqué : il fonctionne par `?add-to-cart=`, chemin interdit par robots.txt [V]. Le panier n'a donc pas été atteint.
- Légende : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Constat central
**Le configurateur d'alliances (acredo) n'est pas en ligne** : la page « Design your own ring » dit « During the in-store consultation, we use a ring configurator… you can see how the ring changes and how the modification affects the price » [V]. En ligne, il n'existe qu'un catalogue filtrable de bagues fixes, vendues avec leur diamant. Les bagues des marques allemandes sont commandées en boutique (CGV 4.5) [V].

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Catégorie | Menu « Engagement rings » : collection Diore ; filtre « With natural diamond » / « With lab-grown diamond » | [V] |
| 2. Filtres de la liste | Forme : rond, princesse, ovale, émeraude, cœur, marquise, baguette, radiant ; type : une pierre, trois pierres, plusieurs pierres ; couleur : blanc, jaune, multicolore ; mesures ; matière ; collection (Diore, Colores Naturae) ; tri : popularité, nouveauté, prix croissant, prix décroissant | [V] liste filtrée |
| 3. Fiche | Une seule option : taille (16,0 / 16,5 / 17,0 / 17,5 mm) | [V] HTML, 4 variantes |
| 4. Panier | Non atteint (voir statut) | — |
| Alliances sur mesure | Brochure acredo : métal, pierres, forme, finition, gravure ; configurateur en boutique ; délai 4 à 5 semaines | [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre « With lab-grown diamond » | lien de filtre | Liste de 61 produits (contre 356 bagues de fiançailles) [V texte de la page, 15/11] | prix barrés -30 % | OK [V] |
| Filtres forme / type / couleur / matière / collection | liens de filtre | URL `?pa-kivi-kuju=oval`, `?pa-varv=white`, etc. ; présents dans le HTML | — | présents [V], non cliqués un par un |
| Tri (4 modes) | liste | Présent [V] | — | non testé (navigateur instable) |
| Pagination (6 pages sur le filtre synthétique) | liens | Présents [V] | — | non testé |
| Fiche : sélecteur « Choose size » | liste | 4 tailles ; changer la taille **ne change ni le prix ni la description** (3 200 € pour les 4) ; l'état « Stone data (16,5 mm) » reste affiché | inchangé | OK [V] |
| « Certificate: See more! » | lien | Pointe vers https://www.igi.org/verify-your-report/?r=673409667 (rapport IGI) | — | lien relevé, non ouvert [V] |
| Pay in three equal instalments (3 × 746,67 €) | texte / calculateur | Module Esto de paiement en 3 fois (extension `esto-payment-methods`) [V] | — | non testé |
| Explore our financing options | lien | Page « Installment payment » | — | non lue (réponse intermittente) |
| Add to cart | bouton | Non cliqué : le chemin `?add-to-cart=` est interdit par robots.txt | — | non testé |
| Design your own ring → « Contact us » | lien | Renvoie au contact ; prise de rendez-vous en boutique | — | lien relevé [V] |
| Return of goods : « Submit Withdrawal Request » | formulaire | Numéro de commande, e-mail de facturation, motif ; non rempli | — | non testé |
| Langues English / Eesti | liens | Deux langues | — | OK [V] |
| Icônes flottantes (3, en bas à droite) | boutons | Visibles sur la capture : chat, téléphone, aide ; cibles non identifiées dans le HTML | — | non testé [I] |
| Galerie, zoom, 3D, 360°, AR, essai virtuel, comparer, enregistrer, partager | — | Pas de contrôle relevé dans la fiche [V HTML] (une vidéo ou un iframe de suivi seulement) | — | n'existent pas [I] |

## Options disponibles
- **Fiche (RX3170-W-3,00)** : taille 16,0 / 16,5 / 17,0 / 17,5 mm ; métal « 18K Gold ; White » fixe ; pierre fixe : « Laboratory-grown diamond 1 pc. 3,11 ct E/VVS2 », couleur D–E, pureté VVS2 ; poids du métal « N/A » [V].
- **Catalogue** : 356 bagues de fiançailles (dont 61 avec diamant synthétique) ; 322 en version anglaise de l'accueil ; or jaune, blanc, rose ou multicolore ; 8 formes de pierre ; une, trois ou plusieurs pierres ; couleurs de pierre ; émeraude, rubis, saphir, topaze [V].
- **Alliances** : 212 modèles ; marques MatiGold, acredo, Fischer ; options acredo en boutique (métal, pierres, forme, finition, gravure, comfort fit) [V].
- **Origine** : naturel ou synthétique, au niveau du produit, pas de bascule sur une même bague [V].

## Prix, délais, retours, garanties
- **Affichage** : prix en € **TVA 24 % incluse** ; sur la fiche : « 3 200,00 € » barré puis « From 2 240,00 € » (-30 %) ; les mêmes remises s'affichent sur presque toutes les bagues (bandeau « All DIORE engagement rings -30% ») [V]. Aucune décomposition (or, pierre, façon).
- **Paiement** : paiement en 3 fois (Esto) sur la fiche ; liens bancaires estoniens cités dans les CGV [V]. Moyens exacts à l'écran non vus.
- **Délai** : 2 à 7 jours pour le stock, livraison via Itella/Smartposti ; **4 à 6 semaines** pour les articles de marques allemandes ; alliances sur mesure 4 à 5 semaines [V].
- **Livraison** : gratuite dès 35 € en Estonie ; sinon 3 € ; Finlande 14 € [V CGV 2.4].
- **Retours** : 14 jours, retour gratuit en point relais ; produit neuf, emballage d'origine. **Aucun droit de rétractation pour les articles gravés, personnalisés ou modifiés ; l'acompte n'est pas remboursé** (CGV 5.3) [V]. Annulation avant expédition possible.
- **Garanties, certificats** : certificats cités par produit (IGI pour le synthétique, lien de vérification) [V]. Politique de garantie non lue.

## Confiance et service
- Boutique physique depuis 1996 (centre T1, Tallinn), téléphone, e-mail, horaires Lun-Ven 10 h 20 h [V].
- Avis clients cités sur l'accueil (noms et textes, en estonien et en anglais), sans note globale ni nombre d'avis [V].
- Pas de photos ni vidéos de fabrication, pas de suivi de commande (« we will contact you as soon as your rings are ready ») [V].
- Page « Updating your rings » (adaptation de bagues existantes) [V]. Blog et guides (« Lab-grown diamonds », « How to choose a ring », table des tailles) [V], non lus.

## Points forts à retenir pour JR Diamond
1. **Filtre synthétique / naturel sur le catalogue**, avec 61 bagues synthétiques (preuve : URL `pa-kivid=lab-grown-diamonds`).
2. **Données de pierre par produit** : poids exact, couleur, pureté, lien vers le rapport IGI (fiche RX3170-W-3,00).
3. **Remise annoncée** (prix barré) à côté du prix de base : le client voit l'écart.
4. **Délai par marque affiché dans les CGV** (2 à 7 jours, 4 à 6 semaines) [V].
5. **Offre « modifier toute bague existante »** : « We can modify all existing rings to match your wishes » [V /en/design-your-own-ring-2/], proche de la transformation sur demande.
6. **Paiement en 3 fois** sur la fiche (Esto).

## Défauts observés
- **Pas de configurateur en ligne** : l'outil acredo est réservé à la boutique [V].
- **Taille sans effet visible** : 4 tailles seulement (16 à 17,5 mm), même prix, même photo ; pas de grille de conversion dans la fiche [V].
- **Remise permanente de 30 %** appliquée à presque tout : le prix de référence n'est pas crédible [I].
- **Contradiction de nombre** : 355, 356 ou 357 bagues de fiançailles selon la page et la langue [V].
- Interdiction de rétractation pour les articles gravés ou personnalisés, avec perte de l'acompte [V].
- Pas de preuve de fabrication, pas de suivi [V].
- Chargement très lent dans notre mesure (voir limites) [V].
- Fiches de produit en estonien et en anglais mélangés (« Kullast sõrmus… » côté anglais) [V].

## Limites de l'audit
- **Instabilité réseau** : le navigateur a reçu 502 deux fois sur la page « Design your own ring », puis a chargé la fiche en 18 s avec les feuilles de style abandonnées (requêtes annulées) : la capture montre une page sans mise en forme. Je n'ai pas insisté au-delà de quelques essais ; ce n'est pas un blocage anti-robot déclaré.
- **Temps d'apparition du visuel principal** : 18 s sur ordinateur (une mesure, non fiable), non mesuré en affichage iPhone.
- Filtres, tri, pagination et chat non actionnés ; le panier n'a pas été vu (bouton interdit par robots.txt).
- Pages « Installment payment » et « Lab-grown diamonds » : réponse 000 de la passerelle, non lues.
- Toutes les conclusions de fiche viennent d'un seul produit (RX3170-W-3,00).

## Sources
- https://matikuld.ee/en , …/en/design-your-own-ring-2/ , …/en/product-category/jewellery/engagement-rings/ (+ filtre lab-grown), …/en/product/gold-ring-with-lab-grown-diamond-code-rx3170-w-300/ , …/en/return-of-goods/ , …/en/order-terms-and-conditions/ , https://matikuld.ee/robots.txt ; page « about us » : https://matikuld.ee/en/contact/about-us (via recherche). Lues le 15/11/2026 après `robots.cjs` (AUTORISÉ).
- Scripts et captures : scratchpad `audit/eu/matigold/` (hors dépôt).
