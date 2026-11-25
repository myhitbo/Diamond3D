# Audit : Xronos Jewellery (Queensland)

- **Site** : Xronos Jewellery, https://xronosjewellery.com (Brisbane : Shop 14, West Village, West End ; atelier visible depuis la boutique)
- **Page de départ** : https://xronosjewellery.com/collections/custom-engagement-rings (200)
- **Date** : 15/11/2026 (date de l'étude ; pages relues à l'horloge de la machine le 25/11/2026)
- **Appareils** : Chromium ordinateur 1440×900 (parcours complet de la fiche) ; émulation iPhone 13 (liste des contrôles de la page de départ seulement)
- **Statut** : **partiel**. Collection, fiche de monture et constructeur (métal, taille, carat, tableau de pierres) parcourus ; sélection d'une pierre, récapitulatif et ajout au panier non vérifiés (voir Limites).
- **robots.txt** : AUTORISÉ pour `/collections/*`, `/products/*`, `/pages/*`, `/policies/*`, `/cart` ; INTERDIT : `/cart/add` (`Disallow: /cart/`). Constructeur hébergé par `designer.unbridaled.ai` : robots.txt de ce domaine sans règle bloquante (AUTORISÉ). Aucun blocage de robots.
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V]) |
|---|---|
| 0. Collection « Custom engagement rings » | 26 montures « Signature » ; filtres (disponibilité, prix 0 à 7 740 $, deux familles de cases) ; tri ; 3 densités d'affichage ; pastilles de métal par carte ; « Choose options » |
| 1. Fiche de monture (ex. Selene, ovale) | Galerie de 8 vues ; texte « Finer Details » (jonc 2,4 mm effilé à 2 mm, 2 mm d'épaisseur, demi-rond, griffes pointues) ; accordéons Production, Shipping, Warranty |
| 2. Constructeur dans la fiche (iframe tiers `designer.unbridaled.ai`) | Métal (7 pastilles) ; taille (liste) ; carat (liste ½ à 5 ct) ; tableau de pierres (origine, carat, couleur, clarté, média, prix) |
| 3. Ajout au panier | « ADD TO CART » : non actionné |
| Parcours sur mesure (hors constructeur) | Rendez-vous de conception, sourçage de pierre, acompte 50 %, rendus CAO, fabrication, solde sous 7 jours (`/pages/new-our-process`) |

## Contrôles vérifiés

Liste de départ : 327 contrôles visibles sur ordinateur, 284 sur iPhone (controls.cjs ; la grande majorité sont les pastilles de métal des 26 cartes). Fiche de monture : constructeur dans une iframe hors de la liste de départ.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille 14 ct or jaune | Pastille | Métal actif par défaut [V] | 2 650 $ (monture Selene ovale) | Fonctionne |
| Pastille 18 ct or jaune | Pastille | Libellé « 18ct Yellow Gold » [V] | 3 450 $ | Fonctionne |
| Pastille 14 ct or blanc | Pastille | [V] | 2 950 $ | Fonctionne |
| Pastille 18 ct or blanc | Pastille | [V] | 3 720 $ | Fonctionne |
| Pastille 14 ct or rose | Pastille | [V] | 2 610 $ (le plus bas) | Fonctionne |
| Pastille 18 ct or rose | Pastille | [V] | 3 420 $ | Fonctionne |
| Pastille platine | Pastille | [V] | 3 280 $ | Fonctionne |
| Image de la galerie après changement de métal | Galerie | La première image reste l'or jaune ; les vignettes 2 à 8 montrent d'autres métaux et angles [V vignettes] | | Pas de recoloration de l'image principale vue |
| Ring Size (liste) | Liste | Tailles H, H½, I … jusqu'à Q au moins (liste lue tronquée) ; K choisie [V] | inchangé | Fonctionne |
| Carat (liste) | Liste | ½, ¾, 1, 1¼ … jusqu'à 5 ct par quarts [V] | | Fonctionne |
| 1 CT choisi | Liste | Affiche un tableau de pierres : « IDEAL », « PREMIUM », « EXCELLENT » [V] | prix du bandeau inchangé (monture seule) | Fonctionne |
| Ligne « Natural » (Ideal) | Case/ligne | 1,01 ct D VVS1 : 15 300 $ AUD [V] | 15 300 $ | Sélection non confirmée |
| Ligne « Lab Grown » (Ideal) | Case/ligne | 1,04 ct D VVS1 : 1 200 $ AUD [V] | 1 200 $ | Sélection non confirmée |
| Lignes « Premium » | Case/ligne | Natural 1,01 ct E VS1 : 11 760 $ ; lab 1,01 ct E VS1 : 1 450 $ [V] | idem | Sélection non confirmée |
| Ligne « Excellent » | Case/ligne | Natural 1,00 ct G SI1 : 10 110 $ [V] | 10 110 $ | Sélection non confirmée |
| Icônes vidéo et certificat (colonne Media) | Icônes | Présentes sur chaque ligne ; vidéo grisée sur une ligne naturelle [V] | | Non ouvertes |
| « View → » | Lien | Cliqué sans changement visible ni nouvel onglet [V] | | Sans effet observé |
| « See our full diamond inventory » | Lien | Libellé relevé [V] | | Non testé |
| Size Guide / Ring Size Guide | Lien | Mène à `/pages/ring-sizing` : mesure en studio ou anneau de mesure gratuit sur demande [V lu] | | Fonctionne |
| Production Information / Shipping / Warranty and Servicing | Accordéons | S'ouvrent avec les textes de délai, livraison, garantie [V] | | Fonctionne |
| ADD TO CART | Bouton | Non actionné : `/cart/add` INTERDIT par robots.txt | | Non testé |
| Choose options (cartes liées) | Bouton | Non actionné (formulaire d'ajout au panier) | | Non testé |
| Filtres de collection (prix, cases) | Cases | Présents (curseur 0 à 7 740 $) [V lu] | | Non testé |
| AUD $ / Australia (AUD $) | Sélecteur | Devise et pays [V libellé] | | Non testé |
| Search, Account, Cart | Liens | `/cart` lu : panier vide [V] | | Fonctionne |
| Book an Appointment, Visit Us, Contact | Liens | Pages de rendez-vous ; formulaires non remplis | | Non testé |
| Newsletter « SUBSCRIBE » | Formulaire | Non rempli | | Non testé |

## Options disponibles

- **Métaux** : or 14 et 18 ct (jaune, blanc, rose), platine : 7 choix [V].
- **Formes** (une fiche par forme) : ovale, rond, coussin allongé, émeraude, marquise, radiant, poire [V].
- **Pierres** : naturel (certificat GIA) ou synthétique (certificat IGI) ; ½ à 5 ct par quarts de carat [V].
- **Qualité de pierre** : trois niveaux nommés Ideal, Premium, Excellent avec couleur et clarté affichées [V].
- **Tailles** : H à Q au moins ; anneau de mesure gratuit sur demande [V].
- **Non trouvés** : gravure, pavage, griffes au choix, filtre carat/couleur/clarté libre, 3D manipulable, essayage AR [V absence].
- **Sur mesure** : rendus CAO en images et en vidéos ; maquette imprimée en 3D à 150 $ (clients sur mesure, acompte de 50 % payé) [V `/pages/3d-mock-up`].

## Prix, délais, retours, garanties

- **Prix** : prix de monture seule « mount only » affiché par métal ; la pierre est choisie dans le tableau ; total non vu (voir Limites) [V]. Montures dès 2 610 $ AUD ; bagues de stock avec pierre à prix fixe, ex. 4 000 $ (Selene 1,51 ct lab émeraude D VS1) [V].
- **Délai** : production de 6 à 8 semaines, 8 à 10 en octobre–décembre [V accordéon] ; la page de livraison indique « dispatched within 7-21 business days » : deux annonces différentes [V].
- **Livraison** : express et standard gratuits, Australia Post, signature à la livraison, tracking [V].
- **Retours** : pas de remboursement pour changement d'avis ; aucun retour ni échange sur bagues prêtes à porter, sur commande, Signature ou sur mesure ; acompte non remboursable ; défaut : avis sous 30 jours [V `/policies/refund-policy`].
- **Garantie** : garantie fabrication et entretien à vie sur les bagues de fiançailles ; inspection annuelle, nettoyage et mise à taille gratuits (jusqu'à 4 tailles) [V].
- **Devise** : AUD ; Visa, Mastercard, Amex, Apple Pay, Google Pay, Shop Pay, UnionPay (icônes du pied de page) [V].
- **Langues** : anglais [V].

## Confiance et service

- Atelier visible depuis la boutique de West End ; « designed and crafted at our Brisbane studio » [V] ; équipe réduite, un seul rendez-vous de conception à la fois [V].
- Sur mesure : CAO en images **et vidéos**, révisions illimitées jusqu'à approbation, photos et vidéos de la bague finie avant solde [V `/pages/new-our-process`, `/pages/3d-mock-up`].
- Signature Settings : « Design concepts will not be shared for review or approval » [V] ; mention « Images shown are digital representations » : les photos sont des rendus [V].
- Avis clients : non relevés [V absence]. Téléphone 0491 278 049 et e-mail dans le pied de page [V].
- Pas de chat, WhatsApp ni suivi de commande en ligne observés [V absence].

## Points forts à retenir pour JR Diamond

1. **Prix de monture par métal sans cliquer plus loin** (14 ct rose 2 610 $ à 18 ct blanc 3 720 $) : écart 14/18 ct lisible [V].
2. **Tableau de pierres réelles avec trois niveaux nommés**, origine, carat, couleur, clarté, prix, média (preuve : 1 ct, Ideal naturel 15 300 $ contre lab 1 200 $) [V].
3. **Monture fabriquée aux cotes de la pierre choisie** et « chaque bague faite main aux mesures de la pierre » (texte de fiche) : proche du positionnement « ce que vous voyez existe » [V].
4. **Preuve de fabrication** : CAO en vidéo, photos et vidéos de la bague finie avant solde, maquette 3D à essayer [V].
5. **Livraison gratuite, mise à taille gratuite, garantie à vie** annoncées sur la fiche [V].
6. **Chaque forme a sa fiche et son prix « from »** : choix clair avant le constructeur [V].

## Défauts observés

- Constructeur chargé après plusieurs secondes dans une iframe tierce : au premier test, zone vide entre la description et « ADD TO CART » ; la page entière a mis plus de 3 s à le montrer [V].
- Sélection d'une pierre dans le tableau non confirmée visuellement (prix de la page inchangé à 2 610 $) ; « View → » sans effet visible [V].
- Image principale non recolorée au changement de métal [V].
- Deux délais annoncés (6–8 semaines et 7–21 jours ouvrables) [V].
- Sur mesure et prêt à porter sans retour pour changement d'avis ; acompte non remboursable [V].
- Les « Signature Settings » n'ont pas de validation de design : le client voit un rendu générique, pas le fichier de fabrication [V].
- Aucun avis clients ni suivi de commande observés [V absence].

## Limites de l'audit

- Ajout au panier **non actionné** : `/cart/add` INTERDIT par robots.txt ; frais de livraison, récapitulatif et moyens de paiement du panier non vus ; panier vide lu.
- Prix total (monture + pierre) non vérifié : le clic sur une ligne de pierre n'a pas changé le prix affiché ; test non répété.
- Une seule fiche (Selene ovale) explorée ; les autres formes supposées identiques [S].
- Affichage iPhone : seule la liste des contrôles de la page de départ ; constructeur non testé sur iPhone. Mesure : plus gros élément visible 0,66 s (ordinateur), constructeur prêt en ≈ 3,1 s ; une mesure.
- Pages de rendez-vous, newsletter, formulaires, sélecteur de pays/devise non utilisés.

## Sources

- https://xronosjewellery.com/collections/custom-engagement-rings ; https://xronosjewellery.com/products/the-selene-ring
- https://xronosjewellery.com/policies/refund-policy ; /policies/shipping-policy ; /pages/new-our-process ; /pages/3d-mock-up ; /pages/ring-sizing ; /cart
- https://xronosjewellery.com/robots.txt ; https://designer.unbridaled.ai/robots.txt
- Scripts et captures : scratchpad/audit/au/xronos-jewellery/ (hors dépôt).
