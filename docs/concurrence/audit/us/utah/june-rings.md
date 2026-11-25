# Audit : June Rings (Draper, Utah)

- **Site** : June Rings, https://junerings.com
- **Page de départ** : https://junerings.com/collections/shop-all-engagement
- **Date** : 15/11/2026 (mesures refaites le 25/11/2026)
- **Appareils** : Chromium (Playwright) ordinateur 1366×900 et affichage iPhone 13, sans carte graphique
- **Statut** : **partiel**. Collection, filtres, fiche (forme, type de pierre, or, taille) et pages d'aide parcourus ; panier non atteint (`/cart/add` interdit par robots.txt) ; formulaire « Get in touch » (Jotform) non utilisé.
- **Marques** : V = vérifié (page lue ou contrôle actionné), I = inféré, S = supposé.

## Parcours

Pas de constructeur unique : on choisit un modèle dans la collection, puis on le configure sur sa fiche (V). Le sur-mesure passe par un formulaire et un « design consultant » (V, FAQ).

| Étape | Options (V, actionnées) |
|---|---|
| 1 Collection (`/collections/shop-all-engagement`) | 125 modèles (V) ; 3 pages ; filtres : style (Solitaire, Cluster, Three Stone, Toi Et Moi, Gemstone, Bezel, East-West, Low Profile, Stacks Flush, Split Band, Art Deco), étiquettes (Champagne, Two-Tone, Ready to Ship), collections (June Solitaire, One of a Kind, Ready to Ship, Engagement), forme (Antique, Asscher, Baguette, Cushion, Elongated Cushion, Emerald, Marquise, Moval, Oval, Pear, Portrait, Radiant, Round, Trillion, Rose) ; recherche ; « RESET » |
| 2 Fiche (ex. `/products/fleur-oval`) | Forme (7 pour Fleur : Oval, East-West Oval, Emerald, Pear, Marquise, Round, Radiant ; chaque forme ouvre une autre fiche) ; type de pierre (4) ; couleur d'or (3) ; taille US 3 à 10 par quart (29 tailles) |
| 3 Service | « ORDER A 3D PRINT » (25 $), « GET IN TOUCH » (formulaire), Affirm, onglets Details, Fit Notes, Shipping & Returns, Quality & Care |
| 4 Panier | `ADD TO CART` : non cliqué (interdit) |

## Contrôles vérifiés

Collection : 274 contrôles visibles sur ordinateur, 161 en affichage iPhone (V, controls.cjs).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| ACCEPT COOKIES / REJECT | boutons | ferme la bannière | n/a | fonctionne |
| Menu SHOP ENGAGEMENT (6 liens), SHOP BANDS, BOOK A CONSULTATION, JEWELRY, JUNE STUDIO, ARTICLES, FAQS | liens | pages lues, 200 | n/a | fonctionnent (sauf le lien du pied de page, voir Défauts) |
| SEARCH + 8 raccourcis (Solitaire, Asscher, Oval, Emerald, One of a kind, Marlow, Radiant, Cushion) | champ + liens | ouvre la recherche (`/search?q=`, autorisée) | n/a | présents, non lancés |
| + FILTER / RESET | boutons | ouvre le panneau des filtres ; réinitialise | n/a | fonctionnent |
| Filtre « Solitaire » | case | 125 modèles puis 78 ; l'adresse prend `?filter.p.m.custom.style_filter_tag=Solitaire` | n/a | fonctionne |
| Filtre « Oval » (en plus) | case | 16 modèles ; adresse mise à jour | n/a | fonctionne |
| Filtre « Ready to Ship » (en plus) | case | 0 modèle (combinaison en ET avec Solitaire et Oval) | n/a | fonctionne, résultat vide sans message vérifié |
| Pagination 2, 3, NEXT | liens | `?page=2` | n/a | présents, non suivis |
| Fiche : Previous / Next Slide, galerie 19 images | boutons | défile les photos (« 1/19 ») | n/a | présents, 41 images dans la page |
| Fiche : Copy link to this product | bouton | copie l'adresse | n/a | non testé |
| Fiche : forme (7 liens) | liens | ouvre la fiche de la forme (`/products/fleur-emerald-2`, etc.) | prix propre à chaque fiche | fonctionnent (adresses relevées, 1 ouverte) |
| Fiche : STONE TYPE « Brilliant Oval 2,10 ct VS1 F+ certified lab » | radio | adresse `?variant=40763019755568` ; prix **5 500 $** | 5 500 $ | fonctionne |
| Fiche : « Antique Cut Oval 2,10 ct VS1 F+ lab » | radio | `?variant=42941794254896` | **6 200 $** | fonctionne |
| Fiche : « Brilliant Moissanite 2,10 ct » | radio | `?variant=40763019722800` | **2 550 $** | fonctionne |
| Fiche : « Brilliant Oval 2,00 ct SI1 H GIA Certified Mined » | radio | `?variant=40782635401264` | **18 525 $** | fonctionne |
| Fiche : GOLD COLOR jaune, blanc, rose | radio | ajoute `&gold-color=rose-gold` à l'adresse ; photo d'or | 0 (mêmes 18 525 $) | fonctionne |
| Fiche : RING SIZE 3 à 10 | radio | ajoute `&ring-size=7` | 0 | fonctionne |
| Fiche : ADD TO CART | bouton | actif (non désactivé) ; appelle `/cart/add` | selon variante | **non cliqué : panier interdit** |
| Fiche : STARTING AT $x/MO ... Affirm, « SEE IF YOU QUALIFY » | lien javascript | mensualité : 178 $ (lab brillant), 201 $, 83 $ (moissanite), 598 $ (mined) | n/a | affiché ; fenêtre Affirm non ouverte |
| Fiche : ORDER A 3D PRINT | lien | `/products/fleur-3d-print` : 25 $, réplique en résine blanche, taille 6,5, ajustable aux ciseaux, jauge de taille offerte | 25 $ | page lue, fonctionne |
| Fiche : GET IN TOUCH | bouton | ouvre un iframe Jotform (`form.jotform.com/203639056348056`, ring=Fleur) | n/a | non rempli |
| Fiche : DETAILS, FIT NOTES, SHIPPING & RETURNS, QUALITY & CARE | accordéons | texte lu | n/a | fonctionnent |
| COMPLETE THE STACK (4 alliances) | liens | fiches de bandes assorties | n/a | présents, non ouverts |
| BOOK AN APPOINTMENT | lien | `/pages/book-an-appointment` (200) | n/a | page autorisée, non remplie |
| Widget « Text us » | bouton | SMS vers l'atelier | n/a | non cliqué |
| Menu accessibilité | bouton | panneau d'options | n/a | non testé |
| Pied de page « JUNE STUDIO » | lien | `/pages/how-it-works` : page « This quote page has expired », statut **404** | n/a | **cassé** |
| Pied de page « GET A QUOTE » | lien | `/pages/get-started` (200) | n/a | page lue, ouverte |
| Subscribe (newsletter) | champ e-mail | lettre | n/a | non testé |
| Bandeau « HOLIDAY DELIVERY ORDER DEADLINE HAS PASSED » | lien | mène à `/collections/ready-to-ship` | n/a | fonctionne |

## Options disponibles

- **Pierre** : lab « certified » (brillante ou taille ancienne), moissanite (sans certificat), mined certifiée **GIA** (V, fiche Fleur). Aucun poids au choix sur la fiche : un poids par variante (2,10 ct lab, 2,00 ct mined). Pierre personnalisée sur demande, par un consultant.
- **Métaux** : or 14 k massif, jaune, blanc, rose (V). Pas de platine, pas d'or 18 k, pas de choix de titre sur la fiche lue.
- **Taille** : US 3 à 10 par quart ; essayage à domicile par impression 3D à 25 $ (V).
- **Formes** : Oval, East-West Oval, Emerald, Pear, Marquise, Round, Radiant sur Fleur ; filtres de la collection jusqu'à 15 formes (V).
- **Autres collections** : Antique Cuts, Champagne, One of a Kind, Gemstones & Colored Diamonds, Ready to Ship, bandes, joaillerie du quotidien (V, menu).
- **Sur mesure** : « June Studio », voir ci-dessous.

## Prix, délais, retours, garanties

- **Affichage** : « STARTING at $2,550 » tant qu'aucune pierre n'est choisie ; ensuite le prix devient celui de la variante (V). Fleur : lab 5 500 $, lab ancien 6 200 $, moissanite 2 550 $, mined GIA 18 525 $ (V, mesurés). Aucune décomposition (pierre, or, façon), aucune explication du prix (V). L'or jaune, blanc et rose ne change pas le prix (V sur la variante mined).
- **Financement** : Affirm, 0 % APR proposé (V, texte et FAQ).
- **Délai** : production de **5 à 8 semaines** selon la pierre et la taille éventuelle sur mesure ; modèles « One of a Kind » et « Ready to Ship » expédiés sous 2 jours ouvrés (V). Option express possible pour **500 $** si la pierre n'est pas à tailler (V, FAQ). Expédition domestique en 2 jours assurée, signature requise ; export possible, droits à la charge du client (V).
- **Retours** : **aucun** retour, échange ni avoir, « all June rings are handmade to order » (V, fiche et FAQ).
- **Garantie** : 1 an, rings expédiées aux États-Unis seulement ; aucune garantie ni réparation hors des États-Unis (V). Réparations assurées après la garantie (V, FAQ). Pas d'assurance incluse ; évaluation (appraisal) offerte (V).
- **Sur mesure** : prix minimum **4 000 $** (5 000 $ pour une pierre rare), **dépôt de 500 $ non remboursable**, crédité si la production démarre sous 45 jours ; rendus numériques (photos, vidéo), 2 révisions (suivantes 100 à 200 $), réplique imprimée en 3D à la taille du client avant fabrication ; conception 2 à 3 semaines, production 5 à 6 semaines (V, FAQ).
- **Certificats** : diamants du centre « certified » (lab) et GIA (mined) ; moissanite sans certificat ; pierres d'accent de 0,50 ct et moins non certifiées (V, fiche). Laboratoire du certificat de synthèse non nommé sur la fiche (V).
- **Libellé du synthétique** : « Certified Lab Diamond » (V).
- **Qualité annoncée** : lab VS1 F ou mieux, mined SI1 H ou mieux ; pierre brillante clarté VS2 minimum, taille step VS1, coupe Very Good minimum (V, FAQ).

## Confiance et service

- **Avis clients** : aucun avis ni note vu sur la collection ni la fiche (V, texte lu).
- **Preuves de fabrication** : pas de photo ni vidéo d'atelier sur la fiche ; pour le sur-mesure, rendus, vidéo, réplique 3D avant production (V, FAQ). Comme preuve avant achat, la réplique imprimée à 25 $.
- **Studio** : essai en personne à Draper (827 E Pioneer Rd, 102) ; la FAQ parle aussi d'un « flagship studio in Salt Lake City » (V : deux villes dans la même page). Consultations en vidéo, pop-up events (V).
- **Contact** : SMS/appel 385.217.5152, e-mail hello@junerings.com, widget « Text us » (V, FAQ).
- **Langues et devises** : anglais, dollar américain (V) ; expédition mondiale annoncée.
- **Suivi de commande** : numéro de suivi par e-mail à l'expédition (V, FAQ).

## Points forts à retenir pour JR Diamond

1. **L'essai à domicile par impression 3D** (25 $, taille 6,5, ajustable, jauge de taille offerte, à conserver) : preuve tangible que l'objet existe avant l'achat, très proche de la promesse « ce que vous voyez existe » (V, `/products/fleur-3d-print`).
2. **Le choix de la pierre est en pleine lumière sur chaque fiche** : lab, taille ancienne, moissanite et mined GIA côte à côte avec poids, clarté et couleur, et la mensualité Affirm pour chacune (V : 178 $, 201 $, 83 $, 598 $ par mois). Le prix change à chaque choix (V).
3. **Le prix est dans l'adresse de la page** (`?variant=...&gold-color=...&ring-size=7`) : la configuration se partage (V).
4. **Le sur-mesure est cadré par des chiffres** : minimum 4 000 $, dépôt de 500 $, deux révisions, délais de 2 à 3 semaines de conception et 5 à 6 de production (V, FAQ).
5. **Qualité minimale publiée** pour chaque famille de pierre (VS1 F pour le lab, SI1 H pour le mined) (V, fiche).
6. **Rendus et vidéo avant fabrication** pour le sur-mesure, puis réplique à la taille du client (V, FAQ).

## Défauts observés

- **Aucune décomposition du prix** : pas de ligne pour la pierre, l'or ni la façon (V). Un écart de 2 550 $ à 18 525 $ selon la pierre, sans explication.
- **« STARTING at $2,550 » trompeur** sur la fiche : seule la moissanite (la moins chère) est à ce prix ; les pierres de diamant coûtent 5 500 $ à 18 525 $ (V).
- **Pas de retour, pas d'échange, pas d'avoir** sur une bague de plus de 2 500 $ (V).
- **Garantie réservée aux États-Unis** (V).
- **Lien « JUNE STUDIO » du pied de page mort** : `/pages/how-it-works` répond 404 avec le texte « This quote page has expired » (V).
- **Deux villes de studio** (Salt Lake City et Draper) dans la même FAQ (V).
- **Filtre combiné sans résultat** : « Solitaire + Oval + Ready to Ship » renvoie 0 modèle ; le filtre « Ready to Ship » se combine mal avec les autres (V).
- **Pas de filtre par prix, carat, métal ni couleur** dans la collection (V, liste des cases).
- **Délai long** (5 à 8 semaines) et supplément express à 500 $ (V).
- **Aucune vue 3D ni 360° ni vidéo** sur la fiche : 19 photos, rien d'autre (V, aucun canvas ni vidéo détectés).
- **Aucun avis client** (V).

## Limites de l'audit

- `/cart/add` interdit : « ADD TO CART » non cliqué ; panier non atteint, donc récapitulatif, frais, moyens de paiement non vus (la fiche cite Affirm ; l'e-mail annonce le choix au paiement, V FAQ).
- Formulaires non utilisés : Jotform « Get in touch », rendez-vous, newsletter, widget SMS.
- Fenêtre Affirm « See if you qualify » non ouverte (JavaScript, autre domaine).
- Les prix sont ceux de la variante Fleur Oval ; les autres modèles n'ont pas été comparés.
- Mesures (LCP, Chromium sans carte graphique, une mesure chacune) : fiche Fleur 1 680 ms (ordinateur), 1 420 ms (iPhone) (V). Visuel de la page de collection non chronométré.
- Garantie et retours cités depuis la fiche et la FAQ ; condition de la garantie « stone fell out » non lue en entier.

## Sources

- https://junerings.com/collections/shop-all-engagement (page de départ, 125 modèles)
- https://junerings.com/products/fleur-oval (fiche) et `?variant=40763019755568`, `42941794254896`, `40763019722800`, `40782635401264`
- https://junerings.com/products/fleur-3d-print
- https://junerings.com/pages/faq-new, https://junerings.com/pages/get-started, https://junerings.com/pages/how-it-works (404)
- robots.txt de junerings.com : `/cart/` interdit, le reste autorisé
