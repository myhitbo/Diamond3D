# Audit : Feichtinger (Graz, Autriche)

- **Site** : Feichtinger Schmuckhandels GmbH, https://feichtinger-shop.com/
- **Page de départ** : https://feichtinger-shop.com/products/ehering-konfigurator (configurateur 3D d'alliances) ; bagues de fiançailles : https://feichtinger-shop.com/collections/verlobungsringe-alle
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 · **Statut** : partiel (voir limites)
- Faits marqués V (vérifié, adresse indiquée), I (inféré), S (supposé). Le configurateur est un module tiers (confmetrix.com) dans un shadow DOM (V).

## Parcours

| Étape | Options (V, https://feichtinger-shop.com/products/ehering-konfigurator) |
|---|---|
| 1 Farbe | Un ou deux anneaux (RING 1, RING 2, bouton « lier »), ajout d'un anneau ; couleur unie ou bicolore ; matériau ; titre ; 13 surfaces |
| 2 Form | 7 profils : Antik, Flach, Oval, Kugel, Linse, Band, Zylinder |
| 3 Maße | Largeur (4 mm par défaut), hauteur (1,6 mm), case « rapport optimal largeur/hauteur », taille de doigt (système EU, 56 par défaut) |
| 4 Design | Rainures : U rond, V, ombre (Schattenfuge), Perlfuge ; « Randfuge hinzufügen » : Stufe, Perlfuge |
| 5 Diamanten | Diamant n° 1 : taille « Brillant », 0,02 ct (Ø 1,75 mm) par défaut, qualité TW/VS, nombre, position, préréglage « Eingerieben » (serti fermé) |
| 6 Gravur | ohne, Lasergravur (défaut), Diamantgravur ; texte par anneau (30 signes), symbole, police (« Laserschrift 2 ») |
| Fin | Total en direct, « JETZT BESTELLEN » |

Prix de départ (jaune 585, 4 mm, un diamant de 0,02 ct par anneau) : anneau 1 = 1 136 €, anneau 2 = 1 403 €, total 2 539 € TTC (V, relevé identique sur ordinateur et iPhone).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 1 Farbe … 6 Gravur (6 onglets) | liens | Changent le panneau de gauche | — | OK (V) |
| RING 1 / RING 2 | boutons | Choix de l'anneau à éditer | — | OK |
| Bouton « lier » (deux cercles) | bouton | Édition commune des deux anneaux (état « actif » par défaut) ; désactivé à l'étape Diamants | — | OK |
| Ajouter un anneau (+) | bouton | Présent ; non actionné | — | non testé (hors parcours de lecture) |
| Aide (?) | bouton | Présent sur chaque étape ; non ouvert | — | non testé |
| Bicolore/Einfarbig (liste) | liste | Une seule valeur ouverte : « Einfarbig » ; menu bi/tri-color annoncé sur la page (V, texte) | — | partiel |
| Matériau (liste) | liste | 8 valeurs dans le DOM : Gelbgold, Weißgold, Roségold, Rotgold, Champagner, Silber, Platin, Tantal | voir ci-dessous | OK |
| Feingehalt 375 / 585 / 750 | boutons | Titres selon le matériau : or jaune 375/585/750 ; rouge 585/750 ; argent 925 ; platine 950 ; tantale 999 | oui | OK |
| 13 surfaces (poli, mat diagonal, croisé, longitudinal, glace, limé, martelé, fraisé, sable, laminé, mat transversal, mat cristal, concassé) | pastilles | Changent la finition ; miniature vidéo pour la couleur | à vérifier | OK (effet sur l'image non mesuré) |
| Profils (7) | vignettes | Changent la forme de section | non mesuré | OK |
| Largeur, hauteur, taille (EU) | listes | Valeurs numériques ; menus de valeurs non listés un à un | oui (annoncé) | partiel |
| Case « rapport optimal » | case | Cochée par défaut | — | OK |
| Rainures (4) + bord (2) | vignettes | Perlfuge désactivée sur le bord (état « disabled ») | non mesuré | OK |
| Diamant : taille, qualité, nombre, position | listes | Listes présentes, valeurs détaillées non parcourues | oui (annoncé) | partiel |
| ohne / Laser / Diamantgravur | boutons | Trois modes, Laser actif par défaut | non mesuré | OK |
| Texte de gravure, symbole, police | champs | Présents, non remplis (règle : aucune saisie) | — | non testé |
| Main (Handansicht) | bouton | Présent en haut du visuel ; non actionné | — | non testé |
| Plein écran | bouton | Présent ; non actionné | — | non testé |
| Imprimante | bouton | Présent ; non actionné | — | non testé |
| Letzte Aktion rückgängig | bouton | Désactivé au départ | — | OK |
| Zurücksetzen auf Grundeinstellung | bouton | Présent ; non actionné | — | non testé |
| Speichern / Laden | bouton | Présent ; non actionné (la page annonce « Design speichern » puis conseil en filiale) | — | non testé |
| Details Ihrer Konfiguration | bouton | Présent ; non ouvert | — | non testé |
| JETZT BESTELLEN | bouton | Ajoute au panier Shopify ; **non actionné** : `/cart/` est interdit par robots.txt | — | non testé |
| Panier (en-tête), recherche, souhaits, compte | boutons | Présents ; compte non ouvert | — | non testé |
| Cookies : Alle akzeptieren / Cookie-Einstellungen / Nur Essentielle | boutons | Voile de consentement bloquant ; « seulement essentiels » choisi | — | OK |
| Liens de pied de page (AGB, Versand, Widerruf, FAQ, Filialen, Kataloge, Goldankauf, Gutscheine, blog) | liens | Lisibles (200) pour Versand, Widerruf, FAQ, Manufaktur | — | OK |

Matériaux et prix de la paire (relevés de la page, ordinateur) : l'affichage du libellé et du prix était décalé d'une action sous rendu logiciel, je ne retiens que les lignes cohérentes : Gelbgold 585 = 2 539 € ; Weißgold ≈ 2 767 € ; Silber 925 = 454 € ; Platin 950 = 3 052 €. Le prix change donc fortement avec le métal (V, sauf décalage ; les autres métaux : non retenus).

## Options disponibles

- Matériaux : or jaune, blanc, rose, rouge, champagne, argent, platine, tantale ; titres 375/585/750 pour l'or (V).
- Profils : 7 (V). Surfaces : 13 (V). Rainures : 4 + 2 bords (V).
- Diamants : taille « Brillant » ; 0,02 ct par défaut (Ø 1,75 mm) ; qualité « sehr kleine Einschlüsse TW/VS » par défaut ; nombre et position réglables (V).
- Gravure : laser, diamant, symbole, 30 signes, police (V). Le site annonce aussi écriture manuscrite et empreinte en filiale (V, FAQ).
- Bagues de fiançailles (fiche Terry G/VS, https://feichtinger-shop.com/products/verlobungsring-terry-gvs-weissgold-585) : alliage, brillant de 0,05 à 0,60 ct (9 tailles), diamant « Natur G/VS », « Natur H/SI » ou « Lab-Grown G/VS », taille de doigt, quantité, gravure, coffret de 4,99 à 49 € (V).
- Filtres de la collection : 257 résultats, catégories par style, par couleur d'or, lab-grown, sets ; le tiroir « Filter » n'a pas livré son contenu (non lu).

## Prix, délais, retours, garanties

- Prix TTC affiché, mis à jour en direct avec « tagesaktuellem Edelmetallkurs » (V, page du configurateur). Pas de décomposition matière / façon.
- Promotion « Verlobungsaktion −25 % » sur les fiançailles (ex. Terry à partir de 360,75 € au lieu de 481 €) (V, collection).
- Délai : alliances 2 à 3 semaines, express en 1 à 3 jours pour 25 € par anneau ; fiançailles « geliefert in 3-5 Werktagen » (V).
- Livraison : 7,90 € ; gratuite dès 75 € (AT, DE, SI, IT, NL, LU) ; retrait en filiale gratuit (V, https://feichtinger-shop.com/pages/versandinformationen).
- Retours : 14 jours, retour gratuit ; **aucun droit de rétractation pour les articles faits sur mesure : alliances et gravés** (§18 FAGG) (V, pages Widerrufsrecht et Versand). Mise à taille gratuite sur les fiançailles, une fois, sous six mois, bague non portée et non gravée (V).
- Garantie : réclamation possible après le délai pour défaut (V). Pas de durée de garantie chiffrée lue.
- Paiement : non affiché avant le panier (non vu).

## Confiance et service

- Atelier : « 35+ orfèvres », manufacture de Graz depuis 1978/79, « 100 % Made in Austria » (V, https://feichtinger-shop.com/pages/schmuckmanufaktur). Service 3D maison avant fonte (V).
- Fiche produit : « Der Weg Ihres Schmuckstücks » : Graz, design 3D, production, contrôle qualité, livraison (V). Pas de photos ni vidéo d'atelier par commande (I).
- Avis : note 4,74 / 5 via eTrusted en pied de page (V).
- Chat Tidio, filiales, rendez-vous, catalogues gratuits, rachat d'or avec +10 % en avoir (V).
- Transformation : alliances faites à partir de bijoux de famille sur demande (V, page Manufaktur).
- Langue : allemand seulement ; devise : euro (V).

## Points forts à retenir pour JR Diamond

1. **Prix en direct et total pour la paire** visible en permanence, y compris sur iPhone (barre fixe avec « Jetzt bestellen »). Preuve : relevé 2 539 € identique sur ordinateur et mobile.
2. **Étapes numérotées et réversibles** : annuler la dernière action, réinitialiser, enregistrer/charger, « Details Ihrer Konfiguration » (V, boutons).
3. **Un seul filtre de titre selon le métal** : les titres proposés changent avec la matière (platine 950, argent 925), donc pas de combinaison impossible (V).
4. **Tableau fiançailles clair** : taille du brillant en carat et en mm, qualité, origine naturel ou Lab-Grown dans la même fiche (V, fiche Terry).
5. **Exception du sur mesure dite avant l'achat** dans la page de livraison (V).
6. **Parcours du bijou en 4 étapes** avec ville de chaque étape (V).

## Défauts observés

- La 3D est lente à apparaître : fenêtre noire/spinner, image 3D complète après 20 à 25 s, rotation de la roue de chargement jusqu'à ~80 à 90 s en rendu logiciel (Chromium sans GPU). Mesure sur appareil réel non faite.
- Voile de cookies qui cache toute la page tant qu'on n'a pas choisi (V).
- Configurateur d'alliances seulement : pas de configurateur de bague de fiançailles (V).
- Libellé et prix du configurateur décalés d'une action sous charge (rendu logiciel) : à confirmer sur appareil réel.
- Mentions « * » promotionnelles pratiquement sur toute la barre d'annonce.

## Limites de l'audit

- Non actionnés : plein écran, vue main, impression, enregistrer, détails, ajout d'anneau, aide, gravure (aucune saisie), « Jetzt bestellen » (chemin de panier interdit).
- Le panier n'a pas été atteint : aucun récapitulatif, frais ou moyens de paiement relevés.
- Les listes de valeurs de largeur, hauteur, taille et diamants n'ont pas été parcourues une à une ; le prix de chaque option n'a pas été mesuré.
- Temps d'apparition : mesuré en rendu logiciel seulement ; LCP de la page de la fiche non relevé pour le configurateur.
- Le filtre de la collection n'a pas été lu.

## Sources

- https://feichtinger-shop.com/products/ehering-konfigurator (ordinateur et iPhone, contrôles, 15/11/2026)
- https://feichtinger-shop.com/pages/ehering-konfigurator, /pages/versandinformationen, /pages/widerrufsrecht, /pages/faq, /pages/schmuckmanufaktur
- https://feichtinger-shop.com/collections/verlobungsringe-alle, /products/verlobungsring-terry-gvs-weissgold-585
- https://feichtinger-shop.com/robots.txt (lu avant ; /cart/ interdit)
