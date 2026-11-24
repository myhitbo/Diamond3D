# No Ka ʻOi Jewelers (Kahului, Maui) : audit

- **Site** : No Ka ʻOi Jewelers, https://nokaoijewelers.com/
- **Page de départ** : https://nokaoijewelers.com/engagement-rings (redirige vers le constructeur `/apps/ring-builder/engagement-rings`)
- **Date** : 15/11/2026
- **Appareils** : Chromium sans interface, ordinateur (1366 px) ; affichage iPhone 13 pour la mesure du temps seulement
- **Statut** : **partiel** (aucun blocage, robots.txt « Allow: / » ; parcours mené jusqu'à la sélection d'un diamant et au panier vide, pas jusqu'à un panier rempli)
- Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé. Prix en dollars américains. Site construit par Belgium Webnet (pied de page), application JavaScript.

## Parcours

| Étape | Options |
| --- | --- |
| 1. Montures (`/apps/ring-builder/engagement-rings`) | [V] 2 518 produits ; filtres style, forme, couleur d'or, prix ; tri ; « Reset Filters » |
| Fiche monture (`/rings-details/?groupId=…`) | [V] Shape, Metal (14 k or blanc), Ring Size (« Select... »), « Enquire Now » ; pas de bouton panier |
| 2. Diamants (`/apps/ring-builder/diamonds`) | [V] 2 873 diamants, bascule Natural / Lab Grown, 7 filtres, tri |
| Fiche diamant (`/diamonds-details?diamondId=…`) | [V] fiche technique, « SELECT THIS DIAMOND », « VIEW CERTIFICATE » |
| Après sélection | [V] retour à la liste de montures filtrée par la forme du diamant (`/ring-builder?shape=radiant`, 77 produits) ; 3e étape (récapitulatif) non atteinte |
| Panier (`/cart`) | [V] « YOUR CART IS CURRENTLY EMPTY. » : rien n'a été ajouté |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Styles (Solitaire, Nature, Celtic, Halo, Hidden Halo, Three Stone, Two Stone, Single Row, Multi Row, Pave, Cluster, Channel Set, Vintage, Bypass, Side Stone, Modern, Other) | carrousel de liens (+ « ‹ » « › ») | [V] chaque entrée est un lien filtré (`?style=Halo`…) ; 3 liens (Channel-Set, Multi-Row, Pave) pointent vers `/apps/ring-builder?style=` sans le segment `engagement-rings` ; non suivis individuellement | n/a | non testé |
| Formes (Round, Princess, Oval, Cushion, Emerald, Radiant, Pear, Marquise, Asscher, Heart, Other) | liens | [V] filtrent par forme (`?shape=…`) ; le clic sur « Radiant » après sélection du diamant a donné 77 produits | « Starting at » inchangé | fonctionne |
| Couleur d'or : Yellow, Rose, White | liens | [V] présents (`?color=rose`…) ; non suivis | n/a | non testé |
| Prix (deux champs, 0 à 100 000 $) | curseur + champs | [V] présent ; non actionné | n/a | non testé |
| Sort By « Featured » | liste | [V] présente ; non actionnée | n/a | non testé |
| Reset Filters | bouton | [V] présent ; non actionné | n/a | non testé |
| Fiche monture : Shape | liste | [V] présente ; non actionnée | non modifié (« Starting at 1 500 $ ») | non testé |
| Fiche monture : Metal « 14K White Gold » | liste | [V] présente, une seule valeur lue | idem | non testé |
| Fiche monture : Ring Size « Select... » | liste | [V] présente ; non actionnée | idem | non testé |
| « Enquire Now » | bouton | [V] cliqué : aucune fenêtre ni formulaire visible dans la page (aucun dialogue détecté) ; effet non élucidé | n/a | douteux |
| « Can Be Set With » | onglet | [V] présent ; non ouvert | n/a | non testé |
| Diamants : NATURAL / LAB GROWN | bascule | [V] présente ; la liste affichée est naturelle par défaut (2 873) | de 828 $ | fonctionne (liste lue) |
| Diamants : Shape (11), Price, Color (White/Fancy, D à L), Carat, Cut, Clarity (I1 à FL), Polish, Symmetry | filtres | [V] présents ; non actionnés (curseurs) | n/a | non testé |
| Advanced Filters | bouton | [V] présent ; non ouvert | n/a | non testé |
| Carte diamant (par ex. 0,60 ct radiant J VS1, 828 $) | lien | [V] ouvre la fiche : « 0.6 Carat radiant Diamond », prix, couleur, pureté, taille, table 70, profondeur 70,8, L/W/D 4,46 × 4,43 × 3,14 mm, fluorescence « None » | 828 $ | fonctionne |
| « SELECT THIS DIAMOND » | bouton | [V] mène à la liste de montures filtrée par forme, sans ligne de récapitulatif visible | n/a | fonctionne |
| « VIEW CERTIFICATE » / « View Report » | boutons | [V] présents ; non ouverts | n/a | non testé |
| Echelle de carats 1/4, 1/3, 1/2, 3/4, 1, 1,5, 2, 3 | illustration | [V] présente | n/a | non testé |
| Vue du visuel : photo fixe, pas de 3D ni de 360° ni de vidéo | n/a | [V] aucune vue 3D relevée sur les pages lues ; fiche monture : photo seule | n/a | n/a |
| Téléphone, e-mail, adresse, « Virtual Appointment », réseaux, Yelp, JOIN (infolettre) | liens | [V] relevés ; non suivis, formulaire non rempli | n/a | non testé |
| Compte (`customer_authentication`), liste de souhaits (`/pages/wishlist`), panier (`/cart`) | liens | [V] panier ouvert : vide | n/a | fonctionne |

## Options disponibles

- [V] Montures : styles, formes, 3 couleurs d'or (fiche : 14 k blanc), taille de doigt, « Contact us/email for pricing and customization options ».
- [V] Diamants : naturel ou synthétique ; formes, couleur (blanc D à L, fantaisie), carat de 0,09 à 35,04 ct, taille, pureté, polissage, symétrie.
- [V] Autres rayons : gemmes (`/apps/ring-builder/gemstones`), alliances et bijoux (« overnight-shop »), clous d'oreilles, réparation, rendez-vous virtuel.
- [V] Pas de gravure, de choix de chaton, de monture à composer ni de visualisation de la monture avec le diamant choisi.

## Prix, délais, retours, garanties

- [V] Montures « Starting at 1 500 $ » (certaines « From 993 $ ») ; le prix ne dépend pas du diamant : fiche monture « Available in all diamond shapes and sizes. Contact us/email for pricing and customization options. »
- [V] Diamants à prix affiché dès 828 $ ; certificat à ouvrir (pas de lecture du rapport).
- [V] « Free Shipping & Holiday Returns », « Free Lifetime Warranty » (fiches monture et diamant) ; durées et exceptions du sur-mesure non précisées sur les pages lues.
- [V] Délai de fabrication : non affiché dans le parcours lu. Moyens de paiement et frais : non vus (panier vide).
- [V] Mention : « The center stone is sold separately and is not included with the engagement ring setting. »

## Confiance et service

- [V] Boutique à Kahului (340 Hana Hwy), téléphone +1 (808) 276-4223, e-mail, rendez-vous virtuel, pages Instagram, Facebook, Yelp.
- [V] Libellé du synthétique : « Lab Grown » (bascule et titres « Lab Oval Diamond… »). Langue : anglais ; devise : dollar.
- [V] Avis clients, preuves de fabrication, suivi de commande : non relevés dans les pages lues.

## Points forts à retenir pour JR Diamond

1. Montures et diamants cherchés séparément, avec bascule naturel / synthétique et ordre « diamant d'abord » possible (preuve : bouton « SELECT THIS DIAMOND » menant aux montures de la même forme, 77 résultats).
2. Fiche diamant complète : dimensions en mm, table, profondeur, fluorescence, lien vers le certificat (preuve : `/diamonds-details?diamondId=6a8898…`).
3. Prix des diamants affiché dès la liste, à partir de 828 $ (preuve : liste de 2 873 diamants).
4. Mention claire que la pierre est vendue séparément (preuve : « DISCLAIMER » des fiches).
5. Filtres par forme et style en lien direct, donc partageables (preuve : `?shape=radiant`, `?style=Halo`).

## Défauts observés

- [V] Aucune vue 3D, 360° ou vidéo : une photo fixe par monture.
- [V] Prix unique « Starting at 1 500 $ » identique sur de nombreuses montures, sans lien avec les choix de métal ou de pierre ; « Contact us/email for pricing » : le prix reste à demander.
- [V] Bouton « Enquire Now » sans effet visible (aucun formulaire détecté).
- [V] Trois liens de style (`/apps/ring-builder?style=…`) omettent `engagement-rings`.
- [V] Retours et garantie affichés par des slogans sans durée.

## Limites de l'audit

- Pas de configuration complète : aucune monture n'a pu être ajoutée au panier (seul « Enquire Now » est proposé) ; panier vide, donc ni livraison, ni délai, ni moyens de paiement observés.
- Filtres des diamants, tri, listes de la fiche monture et « VIEW CERTIFICATE » non actionnés ; étape 3 du parcours non atteinte.
- Mesure du visuel principal : première image de produit visible en 4,2 s sur ordinateur et 5,1 s en affichage iPhone (une mesure chacune) ; aucune 3D à mesurer.
- Affichage iPhone : liste des contrôles et parcours non refaits.

## Sources

- https://nokaoijewelers.com/engagement-rings et https://nokaoijewelers.com/apps/ring-builder/engagement-rings (contrôles et capture)
- https://www.nokaoijewelers.com/apps/ring-builder/rings-details/?groupId=cc-LC20284&ringId=6ae333eb999da3cc5844f8f7
- https://www.nokaoijewelers.com/apps/ring-builder/diamonds et `/diamonds-details?diamondId=6a8898ac5ff24a29069c1d2c`
- https://www.nokaoijewelers.com/cart (panier vide)
- `docs/concurrence/audit/us/hawaii/INVENTAIRE.md`
