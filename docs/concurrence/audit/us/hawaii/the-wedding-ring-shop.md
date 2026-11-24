# The Wedding Ring Shop (Honolulu) : audit

- **Site** : The Wedding Ring Shop, https://www.weddingringshop.com/
- **Page de départ** : https://www.weddingringshop.com/design-your-own (constructeur Caratwise, option « Design with our Studio Collection »)
- **Date** : 15/11/2026
- **Appareils** : Chromium sans interface, ordinateur (1366 px) ; affichage iPhone 13 : seul le temps d'affichage n'a pas pu être mesuré, voir « Limites »
- **Statut** : **partiel** (aucun blocage ; le robots.txt demande 30 s entre deux pages, respecté ; l'état de la 3D et de plusieurs options n'a pu être confirmé)
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en dollars américains.

## Parcours

| Étape | Options |
| --- | --- |
| Accueil du constructeur | [V] « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection » ; modèles « Popular Engagement Rings » (de 1 411 à 1 889 $ en « Starting at »), 13 styles, 4 métaux, 10 formes de diamant |
| 1. Réglage (monture) | [V] Studio Collection : origine, forme, taille, style d'anneau, côtés, chaton, métal de l'anneau, métal du chaton, gravure, alliance assortie ; bouton « Choose This Setting • 1 417 $ » |
| 2. « Choose Diamond » | [V] liste de diamants à prix affiché (7 323 ronds synthétiques de 1,5 à 2,5 ct d'après le relevé de l'inventaire ; non rouvert) |
| 3. « Complete Ring » | [I] récapitulatif ; **non ouvert** (étape grisée tant que le diamant n'est pas choisi) |
| Panier | **Non atteint** : le parcours Caratwise n'a pas été mené jusqu'au bout ; `/wishlist` est interdit par robots.txt et n'a pas été ouvert |

## Contrôles vérifiés

Constructeur Studio Collection, ordinateur. Prix de la monture seule : 1 417 $ (« Setting Only ») le 15/11 à l'ouverture ; le relevé d'inventaire du même jour notait 1 426 $ pour la même configuration par défaut [V, écart non expliqué].

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Natural / Lab Grown | bascule (2) | [V] « Natural » : l'adresse passe de `dia_origin=LGN` à `dia_origin=GNU`, le titre devient « Cathedral Plain Basket Natural Diamond Setting in 14K Yellow Gold » | monture inchangée, 1 417 $ (le diamant se paie à l'étape 2) | fonctionne |
| Forme du centre (10 : Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion) | boutons | [V] présents ; clic exécuté, **effet non confirmé** (l'adresse est restée `dia_shape=RND`) | non relevé | non confirmé |
| Taille du centre 1 / 2 / 3 / 5 ct | bascule (4) | [V] 2 ct par défaut (`dia_size=200`) ; changement **non confirmé** | non relevé | non confirmé |
| Style d'anneau : Classic, Knife Edge, Cathedral (défaut), Split, Twist | bascule (5) | [V] présents ; effet non confirmé | non relevé | non confirmé |
| Côtés : Pavé, Channel, Prong, Plain (défaut), Beadset | bascule (5) | [V] présents ; effet non confirmé | non relevé | non confirmé |
| Chaton : Basket (défaut), Diamond Basket, Hidden Halo, Bezel, Six Prong, Halo | bascule (6) | [V] présents ; effet non confirmé | non relevé | non confirmé |
| Métal de l'anneau : 14 k jaune/blanc/rose, 18 k jaune/blanc/rose, PT | pastilles (7) | [V] présentes ; effet non confirmé (`pri_comp_metal=14-YG`) | non relevé | non confirmé |
| Métal du chaton (mêmes 7 choix) | pastilles (7) | [V] présentes, distinctes du métal de l'anneau ; effet non confirmé | non relevé | non confirmé |
| Gravure « 0 / 18 », 3 polices « Aa » | champ + 3 boutons | [V] champ limité à 18 caractères ; non rempli (règle : aucune saisie) | non relevé | non testé |
| Alliance assortie : No Band / Single (+ double non vérifiée) | bascule | [V] présente (`bands=0`) ; non actionnée | non relevé | non testé |
| Vue « 360° Experience » (« Drag to Rotate ») | vue 3D (cadre `3d.caratwise.com`) | [V] à la 2e ouverture, le rendu 3D d'un solitaire jaune s'affiche (capture) ; à la 1re, le cadre est resté vide 8 s | n/a | fonctionne, avec chargement lent |
| Vignettes : main, vues fixes, vidéo (icône lecture), photos portées | miniatures | [V] présentes ; vidéo non lancée | n/a | non testé |
| Plein écran (flèche en haut à droite de la vue) | bouton | [V] présent ; non actionné | n/a | non testé |
| « Previous thumbnails » / « Next thumbnails » | boutons | [V] présents ; non actionnés | n/a | non testé |
| « Choose This Setting • 1 417 $ » | bouton | [V] vise l'étape 2 ; **non cliqué** (masqué par les fenêtres flottantes) | répète le prix de la monture | non testé |
| « Design Inquiry » | bouton (2) | [V] ouvre une demande de contact (formulaire non ouvert) | n/a | non testé |
| Fenêtre « Save this design » (Design Inquiry / Not Now) | fenêtre flottante | [V] propose d'enregistrer le dessin et d'envoyer un lien ; « Not Now » la ferme | n/a | fonctionne |
| Bulle « Aloha! Please enter your information, and a team member will text you shortly. » / « TEXT US » | chat par SMS | [V] présente ; **non ouverte** | n/a | non testé |
| Étapes « 1 Cathedral Plain Basket - 1 417 $ / Change », « 2 Choose Diamond », « 3 Complete Ring » | fil d'étapes | [V] « Change » revient au choix de monture ; les étapes 2 et 3 sont grisées | n/a | non testé |
| Téléphone 808-945-7766, SMS 808-638-3553, e-mail, « Schedule a Visit », « Get directions », réseaux, Yelp | liens | [V] adresses relevées ; non suivies | n/a | non testé |
| Recherche « SEARCH PRODUCTS », « Wishlist » (`/wishlist`, **interdit**), « My Account » (`/login`) | champ, liens | [V] présents ; non utilisés | n/a | non testé |

## Options disponibles

- [V] Origine : naturel, synthétique (« Lab Grown »).
- [V] Formes : rond, poire, ovale, marquise, radiant, princesse, émeraude, coussin allongé, cœur, coussin carré. Tailles : 1, 2, 3, 5 ct.
- [V] Styles d'anneau : Classic, Knife Edge, Cathedral, Split, Twist. Côtés : pavé, channel, prong, plain, beadset. Chatons : Basket, Diamond Basket, Hidden Halo, Bezel, Six Prong, Halo.
- [V] Métaux, choisis séparément pour l'anneau et pour le chaton : or 14 k et 18 k (jaune, blanc, rose), platine.
- [V] Gravure : 18 caractères, 3 polices. Alliance assortie : aucune ou une.
- [V] Vues : 360° interactif, main, vues fixes, vidéo, portée.
- [V] Pas de choix de taille de doigt ni de forme de gravure détaillée avant l'étape suivante (non vue).

## Prix, délais, retours, garanties

- [V] Prix de la monture seule affiché en grand (1 417 $) et répété sur le bouton ; diamant affiché à part à l'étape 2. Pas de décomposition métal / façon / marge.
- [V] Configuration écrite dans l'adresse (`#/ring/RB001-rosalie?dia_origin=…&dia_shape=…&dia_size=…&style_code=…&pri_comp_metal=…`) : lien partageable.
- [V] Expédition (https://www.weddingringshop.com/shipping-returns-policies) : pièces en stock expédiées sous 48 h avant midi HST ; port et assurance gratuits dès 500 $, 50 $ en dessous ; États-Unis seulement, adresse postale obligatoire (pas de boîte postale ni APO) ; retrait en boutique sans frais.
- [V] Retours : 30 jours avec preuve d'achat, « no questions asked » (même page). Exception du sur-mesure : non lue sur la partie vue de la page.
- [V] Délai sur-mesure : 6 à 10 semaines, 4 en urgence (relevé d'inventaire, `/custom-engagement-rings-in-honolulu-hi`). Pas de délai affiché dans le constructeur Studio [V, rien lu].
- [V] Garantie (https://www.weddingringshop.com/diamond-warranty) : remplacement à vie d'un diamant détaché d'une monture (valeur équivalente), sous réserve d'un nettoyage et d'un contrôle annuels faits par la maison ; hors dommage accidentel, perte, vol ; réparations par la maison seulement.
- [V] Financement (https://www.weddingringshop.com/financing) : carte American Gem Society (Wells Fargo), « no interest if paid in full within 12 months », TAEG de 28,99 % pour un nouveau compte.
- [V] Pied de page : les prix suivent le cours de l'or et peuvent changer sans préavis.

## Confiance et service

- [V] Maison familiale fondée en 1987, boutique 1181 Kapiolani Blvd ; bandeau de certification : GIA, IGI, GCAL, « ethically sourced ».
- [V] Téléphone, SMS, e-mail, rendez-vous (« Schedule a Visit »), événements (bandeau « Meet Noam Carver · Nov 27–30 · Save up to $750 »).
- [V] Libellé du synthétique : « Lab Grown » (« GIA or IGI » pour la certification, relevé d'inventaire).
- [V] Langue : anglais ; devise : dollar. Avis clients et suivi de commande : non vus dans les pages lues.
- [V] Preuves d'atelier : pour le sur-mesure, étapes décrites (CAO, cire validée en main, finition à Honolulu) ; pas de photos ni vidéos de fabrication par commande.

## Points forts à retenir pour JR Diamond

1. Constructeur modulaire où métal de l'anneau et métal du chaton se choisissent séparément (preuve : deux rangées de 7 pastilles « Metal » et « Crown Metal », 15/11).
2. Configuration entière dans l'adresse, donc partageable (preuve : adresse `#/ring/RB001-rosalie?dia_origin=LGN&…`).
3. Vue 360° interactive et vignettes main, vues fixes, vidéo dans le même cadre (preuve : libellé « 360° Experience », capture).
4. Prix de la monture en grand dès l'ouverture, répété sur le bouton d'action (preuve : « Choose This Setting • 1 417 $ »).
5. Invitation à enregistrer le dessin et à recevoir un lien (« Save this design »).
6. Sur-mesure à devis détaillé, validé étape par étape avant coupe du métal (preuve : page `/custom-engagement-rings-in-honolulu-hi`, relevé d'inventaire).
7. Retours 30 jours et garantie de remplacement du diamant à vie affichés dans le pied de page et sur des pages dédiées.

## Défauts observés

- [V] Au premier chargement, la vue principale est restée vide pendant 8 s (cadre 3D en chargement, aucune alternative photo immédiate) ; au second essai le rendu est apparu.
- [V] Des fenêtres flottantes (« Save this design », bulle de chat) recouvrent le bouton d'action principal sur un écran de 900 px de haut.
- [V] Prix de la monture par défaut différent entre deux relevés du même jour (1 417 $ contre 1 426 $ dans l'inventaire) [écart non expliqué].
- [V] Le prix affiché n'est que celui de la monture ; passer de synthétique à naturel ne le modifie pas, ce qui peut dérouter.
- [V] Le lien « Terms and Conditions » du pied de page pointe vers `/privacy-policy`.
- [V] Aucun délai de fabrication affiché dans le constructeur.

## Limites de l'audit

- Les clics sur forme, taille, style, côtés, chaton et métaux n'ont pas pu être confirmés : en navigateur sans carte graphique, seule la bascule « Natural » a modifié l'adresse. Leurs effets sur l'image et le prix restent donc **non vérifiés** ; le recalcul en direct est une affirmation du fournisseur (https://www.caratwise.com/).
- Étapes 2 et 3 (choix du diamant, récapitulatif) et panier non ouverts ; moyens de paiement non vus.
- Affichage iPhone et temps d'apparition du visuel sur mobile non mesurés ; sur ordinateur, première image visible en 3,7 s (page d'accueil), 3D visible une fois sur deux ouvertures.
- Délai de 30 s entre pages respecté ; chat, formulaires et `/wishlist` non ouverts.

## Sources

- https://www.weddingringshop.com/design-your-own (contrôles et captures, 15/11/2026)
- https://www.weddingringshop.com/shipping-returns-policies, https://www.weddingringshop.com/diamond-warranty, https://www.weddingringshop.com/financing
- `docs/concurrence/audit/us/hawaii/INVENTAIRE.md` (relevés du même jour : inventaire diamants, sur-mesure, robots.txt)
- https://www.caratwise.com/ (mention du fournisseur, via l'inventaire)
