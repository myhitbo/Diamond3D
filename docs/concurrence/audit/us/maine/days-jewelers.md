# Audit : Day's Jewelers (Maine, États-Unis)

- **Site** : Day's Jewelers, https://www.daysjewelers.com (Shopify). Outil : constructeur de bague de l'éditeur Gemist, servi dans un cadre à https://daysjewelers.gemist.co/designer/engagement (sans robots.txt).
- **Page de départ** : https://www.daysjewelers.com/pages/custom-ring-builder (robots.txt : autorisé).
- **Date** : 15/11/2026.
- **Appareils** : Chromium sur ordinateur (1366 x 900, en-US) et affichage iPhone 13 (Playwright). Navigateur sans écran, identité par défaut.
- **Statut** : **partiel**. Parcours de configuration complet, sauf trois choses : le panier (ajout interdit par robots.txt, page `/cart` non ouverte), les pages de politique (retours, expédition, assurance, synthétique) bloquées par un contrôle anti-robot du site (429), et le formulaire de rendez-vous (« Access denied for crawlers » sur ordinateur).
- Marques : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Parcours

Huit onglets, dans cet ordre (V, https://daysjewelers.gemist.co/designer/engagement). Le prix est sur le bouton du bas, qui devient « ADD TO CART » à l'onglet Size.

| Étape | Options (V) |
|---|---|
| 1. Style | 9 : Classic Solitaire, Solitaire Cathedral, Solitaire Hidden Halo, Solitaire Cathedral Hidden Halo, Solitaire Bezel, Petite Three Stone, Classic Halo, Geometric Halo, Flower Halo |
| 2. Band | Polished, Pave |
| 3. Metal | 14K Yellow Gold, 14K White Gold, 14K Yellow Gold/Platinum, 18K Yellow Gold, 18K Yellow Gold/Platinum, Platinum |
| 4. Shape | Oval, Round, Pear, Emerald, Princess (pas de marquise ni de coussin) |
| 5. Carat | 4 tranches : 0,50-1,00 / 1,00-1,50 / 1,50-2,00 / 2,00-2,50 ct |
| 6. Stone | « Natural Diamonds » : 9 offres par tranche (poids, couleur, pureté) |
| 7. Engraving | case « Add Engraving | $35 », police, texte de 15 caractères |
| 8. Size | lien « Download Ring Sizer », liste « Select ring size » de 4 à 10 par quart de taille |

## Contrôles vérifiés

Relevé automatique : page hôte 6 contrôles (ordinateur et iPhone), cadre Gemist 37 (ordinateur) et 39 (iPhone). Le tableau reprend chaque contrôle du cadre.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Previous / Next slide (flèches) | bouton | fait défiler 3 vues : photo de face, photo de profil, vidéo de 11 s en boucle (bague portée) | aucun | fonctionne (V) |
| 3 vignettes sous le visuel | bouton | même défilement ; la 3e est une vidéo 1080 x 1080 de 11 s | aucun | fonctionne (V) |
| SAVE | bouton | ouvre « Save Your Design » : champ e-mail + consentement marketing. Non saisi | aucun | ouvre (V), envoi non testé (formulaire) |
| Agrandir (icône) | bouton | agrandit ou réduit le cadre ; effet non confirmé de façon concluante | aucun | non concluant |
| Onglets STYLE, BAND, METAL, SHAPE, CARAT, STONE, ENGRAVING, SIZE | onglet | change le panneau d'options ; l'adresse se met à jour à chaque choix (`style=…&band=…&metal=…&shape=…&carat=…&origin=Natural&engraving=No`) | voir ci-dessous | fonctionne (V) |
| Classic Solitaire | option | image remplacée | 2 395 $ | fonctionne (V) |
| Solitaire Cathedral | option | image remplacée | 2 495 $ | fonctionne (V) |
| Solitaire Hidden Halo | option | image remplacée | 2 695 $ | fonctionne (V) |
| Solitaire Cathedral Hidden Halo | option | image remplacée | 2 695 $ | fonctionne (V) |
| Solitaire Bezel | option | image remplacée | 2 495 $ | fonctionne (V) |
| Petite Three Stone | option | image remplacée | 2 795 $ | fonctionne (V) |
| Classic Halo | option | image remplacée | 3 295 $ | fonctionne (V) |
| Geometric Halo | option | image remplacée ; **bascule d'office le corps en Pave** | 3 895 $ | fonctionne (V) |
| Flower Halo | option | image remplacée ; bascule le corps en Pave | 5 595 $ | fonctionne (V) |
| (i) « Show more information » x9 | bouton | description du style attendue | ? | non testé de façon fiable |
| Polished / Pave | option | image remplacée | Pave = +600 $ (Classic Solitaire : 2 395 puis 2 995 $) | fonctionne (V) |
| 14K Yellow Gold | option | image jaune | 2 395 $ | fonctionne (V) |
| 14K White Gold | option | image blanche | 2 395 $ (inchangé) | fonctionne (V) |
| 14K Yellow Gold/Platinum | option | image identique à l'or jaune (pas de différence visible) | 2 395 $ | fonctionne (V) |
| 18K Yellow Gold | option | image identique à l'or jaune 14 k | 2 995 $ (+600) | fonctionne (V) |
| 18K Yellow Gold/Platinum | option | image identique | 2 995 $ | fonctionne (V) |
| Platinum | option | image blanche (même fichier que l'or blanc 14 k) | 3 095 $ (+700) | fonctionne (V) |
| Oval / Round / Pear / Emerald / Princess | option | image de la pierre remplacée (5 images distinctes) | aucun effet sur le prix de la monture | fonctionne (V) |
| 0,50-1,00 / 1,00-1,50 / 1,50-2,00 / 2,00-2,50 ct | option | change la liste des 9 pierres ; adresse `carat=0.50-0.99`, `1.00-1.49`, `1.50-1.99`, `2.00-2.49` | prix de la monture inchangé | fonctionne (V) |
| « View » (4 boutons, onglet Carat) | bouton | effet non identifié | ? | non testé de façon fiable |
| Pierre (carte de 9) | option | sélection ; la pierre cochée d'office est la plus chère de la tranche | prix = monture + pierre (voir plus bas) | fonctionne (V) |
| « Details » (carte de pierre) | bouton | aucun panneau visible après le clic (capture) | aucun | sans effet visible (V) |
| (i) « Natural Diamonds » | bouton | info-bulle attendue | ? | non testé de façon fiable |
| Add Engraving | case | ouvre une liste de police (« Sans Serif » seule vue) et un champ de 15 caractères ; sensible à la casse, espaces et ponctuation non comptés | 35 $ annoncé ; total inchangé (33 190 $) tant que rien n'est tapé | case fonctionne (V) ; saisie non testée (texte libre) |
| Download Ring Sizer | lien | pointe vers la page https://www.daysjewelers.com/pages/ring-size (I, bouton sans adresse dans le cadre) | gratuit | non ouvert dans le cadre |
| Select ring size | liste | 25 valeurs, de 4 à 10 | aucun | liste lue (V), choix non testé |
| BOOK APPOINTMENT | bouton | cadre seul : aucun effet visible. Page hôte : ouvre un formulaire (HulkApps) ; sur ordinateur il affiche « Access denied for crawlers. », sur iPhone il affiche les champs Prénom, Nom, Adresse… (non remplis) | aucun | ouvre (V) |
| $ … NEXT | bouton | passe à l'onglet suivant ; prix cumulé en direct | voir plus bas | fonctionne (V) |
| ADD TO CART (onglet Size) | bouton | **non cliqué** : l'ajout appelle en général `/cart/add`, interdit par robots.txt (`Disallow: /cart/`). Grisé tant qu'aucune taille n'est choisie (capture) | total affiché 33 190 $ | non testé : panier interdit par robots.txt |
| Fermer la fenêtre (Close overlay) | bouton | ferme la fenêtre « Save » | aucun | présent (V) |
| Page hôte : recherche, favoris (Swym), panier, menu | lien, bouton | éléments du thème Shopify | aucun | présents (V), non actionnés |
| Page hôte : « Start Designing », « Book a Consultation », « Schedule a Visit », « Begin Online » | lien | texte lu ; cibles non suivies | aucun | non testés |
| Fenêtre « What's Your Email Address? » (page hôte) | formulaire | s'affiche sur la page hôte pendant la session ; prénom + e-mail, consentement marketing | aucun | non rempli |

## Options disponibles

- **Styles (9)** : voir Parcours. Prix de la monture, or jaune 14 k, ovale, corps poli : 2 395 / 2 495 / 2 695 / 2 695 / 2 495 / 2 795 / 3 295 / 3 895 (avec Pave) / 5 595 $ (avec Pave).
- **Métaux (6)** : 14 k jaune, 14 k blanc, 14 k jaune avec platine, 18 k jaune, 18 k jaune avec platine, platine. Pas d'or rose, pas d'or blanc 18 k.
- **Formes (5)** : ovale, rond, poire, émeraude, princesse.
- **Carat (4 tranches)**. Pierres par tranche (V, prix de la pierre seule) :
  - 0,50-1,00 : de 750 $ (0,47-0,56 ct, I-J, SI1-2) à 5 650 $ (0,95-1,10 ct, E-F, VS1-2) ;
  - 1,00-1,50 : de 3 495 $ à 15 125 $ ;
  - 1,50-2,00 : de 8 195 $ à 30 795 $ ;
  - 2,00-2,50 : de 15 925 $ à 35 925 $ (2,47-2,56 ct, E-F, VS1-2).
- **Pierres** : uniquement « Natural Diamonds », par bandes E-F / G-H / I-J et pureté VS1-2 / SI1-2, avec une fourchette de poids (par exemple 1,47-1,56 ct). Ce ne sont pas des pierres individuelles ni des certificats (V).
- **Synthétique** : absent du constructeur. La page de présentation dit que l'expérience en ligne est centrée sur le naturel et que le synthétique se traite en boutique (V, https://www.daysjewelers.com/pages/custom-engagement-ring-builder). Le menu du site propose « Lab-Grown Diamond Bridal » et « Learn About Lab-Grown Diamonds » (V, menu).
- **Gravure** : 35 $, 15 caractères, une police vue.
- **Tailles** : 4 à 10, par quart de taille.
- **Pierre personnelle** : montage d'un diamant déjà possédé possible (V, FAQ de la page de présentation), mais en consultation.

## Prix, délais, retours, garanties

- **Prix en direct** (V) : le bouton du bas additionne monture + pierre. Exemples : 2 395 $ au départ ; 33 190 $ avec la pierre cochée d'office de la tranche 1,50-2,00 (2 395 + 30 795) ; 38 320 $ en tranche 2,00-2,50 (2 395 + 35 925) ; 10 590 $ avec la pierre à 8 195 $.
- **Décomposition** : monture et pierre séparées dans les listes, pas de détail de fabrication ni de marge. Le prix n'est pas expliqué (S : aucune page lue n'en parle).
- **Anomalie** : en cliquant vite, le prix a affiché « $0,000 » pendant 1 à 3 s (V, plusieurs fois, sur Classic Halo, Geometric Halo, Flower Halo, Classic Solitaire, Princess lors d'un premier passage).
- **Délai** : « crafted to order within 4 weeks » ; « Typically 4 weeks from design to delivery » (V, page de présentation).
- **Livraison** : bandeau du site « Complimentary shipping on orders over $100 » et « Complimentary express shipping on orders over $1000 » (V, bandeau de la page de présentation). Les frais réels et les délais de livraison n'ont pas pu être lus au panier.
- **Retours** : les rings sur mesure ne sont pas repris (« custom-designed rings are not be eligible for return », V, FAQ de la page de présentation). Politique générale : 30 jours, mais ni les bagues mises à taille ni les commandes spéciales, ni les pièces gravées (I : extrait de recherche de https://www.daysjewelers.com/pages/returns-exchanges ; la page elle-même a répondu par un contrôle anti-robot, non contourné).
- **Garantie** : à vie contre les défauts, avec inspection en magasin au moins tous les six mois (I : même extrait de recherche). Nettoyage et inspection gratuits après achat (V, FAQ). Reprise « trade-up » du diamant naturel pour un plus gros (V, FAQ). Plan d'entretien payant « JM Lifetime Jewelry Care Plan » (I, extrait de recherche).
- **Financement** (V, https://www.daysjewelers.com/pages/days-financing) : carte maison Day's Charge, paiements jusqu'à 20 mois, 19,8 % APR ; carte Synchrony Luxury, sans intérêt si payé en 12 mois, 34,99 % APR pour un nouveau compte (au 31/07/2025, selon la page) ; mise de côté (layaway) avec 10 % d'acompte et 10 % par mois, sans frais ni intérêt.
- **Taille** : anneau de mesure gratuit à domicile pour les résidents américains, demande par formulaire (V, https://www.daysjewelers.com/pages/ring-size) ; mesure de la bague à imprimer.
- **Moyens de paiement au panier** : non vus (panier non ouvert). PayPal accepté pour l'acompte de mise de côté en ligne (V, page de financement).

## Mesure du temps d'apparition du visuel

| Mesure | Ordinateur | iPhone 13 | Preuve |
|---|---|---|---|
| Cadre Gemist seul : boutons visibles | 0,6 s | 0,7 s | V (3 passages) |
| Cadre Gemist seul : élément visuel présent dans la page | 1,1 s | 1,0 s | V |
| Cadre dans la page hôte : cadre créé | 4,8 s | 4,5 s | V |
| Cadre dans la page hôte : élément visuel présent | 5,6 s | 5,5 s | V |
| Image de la bague réellement visible à l'écran | **souvent blanche** : zone du visuel vide sur 4 chargements sur 5, y compris 10 s après ; visible une fois (4 s + 1,5 s après un clic d'onglet) | zone vide sur tous les chargements (capture à 4 s, 6 s et 12 s) | V (captures, mesure de pixels) |

Le premier visuel est la vidéo de 11 s (1080 x 1080, en boucle) ; elle était à l'état « en pause » dans la zone principale. Les images de rendu (photos de face, de profil, pierres) apparaissent après un changement d'option. La cause n'est pas établie (S : lecture automatique de la vidéo).

## Confiance et service

- Maison fondée en 1914, 9 magasins dans le Maine et le New Hampshire, « 80 000 couples » (V, page de présentation). Racheté par ses salariés en novembre 2021 (V, via l'inventaire du même jour).
- Avis : un témoignage nommé sur la page de présentation (V) ; avis WeddingWire cités par la recherche (I). Aucun module d'avis lié à la configuration.
- Preuves de fabrication : aucune photo d'atelier ni suivi de commande sur l'outil ni sur la page de présentation (V, pages lues). Les images sont des rendus génériques de l'éditeur (V, capture).
- Rendez-vous : bouton « Book appointment » dans l'outil, consultation gratuite annoncée (V). Téléphone du service client 800-439-3297 sur la page de financement (V). Chat : non vu.
- Langues et devise : anglais, dollars (V).
- Suivi par des outils tiers : Hotjar (enregistrement de session) et Segment, appelés pendant la configuration (V, requêtes réseau).

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse** : chaque choix met à jour l'URL (`style=…&metal=…&shape=…&carat=…`), donc partage et reprise sans compte. Preuve : adresse relevée après chaque clic. (Action 1 de la synthèse du 16/11 déjà faite chez JR Diamond.)
2. **Prix cumulé en direct sur le bouton**, monture puis pierre, avec le total à chaque onglet. Preuve : 2 395 $ → 33 190 $ à l'ouverture de l'onglet Stone.
3. **Pierres en bandes de poids, couleur et pureté avec prix**, neuf par tranche : on comprend l'échelle des prix sans catalogue de pierres. Preuve : 750 à 35 925 $ selon la tranche.
4. **Surcoûts lisibles par option** (corps Pave +600 $, 18 k +600 $, platine +700 $). Preuve : séquence de prix des tableaux ci-dessus.
5. **Vues de service** : photo de face, de profil et vidéo sur main dans le même carrousel. Preuve : trois vignettes, vidéo de 11 s.
6. **Enregistrer la conception** par e-mail et **prendre rendez-vous** depuis l'outil, financement et mise de côté affichés sur une page. Preuve : fenêtre « Save Your Design » ; page de financement.
7. **Reprise du diamant naturel pour un plus gros** (trade-up) : argument de fidélisation. Preuve : FAQ de la page de présentation.

## Défauts observés

- Zone du visuel blanche au chargement (4 fois sur 5 sur ordinateur, toujours sur iPhone) : le client ne voit pas sa bague au premier écran.
- Sur la page hôte, le visuel n'apparaît qu'après 5,5 s : le cadre est créé à 4,5 s environ.
- Prix « $0,000 » transitoire pendant des clics rapides.
- Le cadre ne montre pas la pierre choisie : la même bague de rendu sert pour toutes les pierres ; la pierre est une icône générique (V, captures).
- Pas de synthétique, pas de marquise, pas d'or rose ; pierres vendues en bandes de poids, sans certificat individuel ni vidéo de la pierre.
- Bague sur mesure ni reprise ni échangée, sans garde-fou avant l'achat dans l'outil (la mention est sur la page hôte, pas dans le cadre).
- Aucune preuve de fabrication ni suivi : pas d'étape « voir naître son bijou ».
- Bouton « Book appointment » sans effet visible dans le cadre seul ; formulaire inaccessible aux robots sur ordinateur.
- Détails de pierre et « View » sans effet visible.
- Fenêtre d'inscription à la lettre d'information par-dessus l'outil (page hôte).

## Limites de l'audit

- Panier non ouvert : `/cart/` est interdit par robots.txt, donc « ADD TO CART » n'a pas été cliqué ; frais de livraison, moyens de paiement et récapitulatif au panier : non vus. La page `/cart` elle-même n'a pas pu être ouverte (action refusée par le contrôle d'autorisation de la session).
- Pages de politique (retours, expédition, lab-grown, assurance) : réponse 429 « Verifying your connection » après quelques lectures ; aucun nouvel essai. Les retours et la garantie viennent donc d'extraits de recherche (I).
- Pas de saisie : formulaires d'e-mail, de rendez-vous, de gravure et de taille non remplis ; le choix d'une taille dans la liste n'a pas été fait.
- Boutons (i), « View », « Details », agrandissement : non concluants ; ceux de l'iPhone ont été relevés (39 contrôles) et les onglets parcourus, mais les prix de chaque option n'ont été mesurés que sur ordinateur (le parcours est identique, I).
- Navigateur sans écran : le rendu de la vidéo a pu différer d'un vrai navigateur ; la mesure « visuel visible » est à confirmer sur appareil réel.
- Le « Ring » 3D annoncé dans l'inventaire est en fait une série d'images et de vidéos : aucune 3D manipulable n'a été vue (V).

## Sources

- https://www.daysjewelers.com/pages/custom-ring-builder (V, 15/11/2026, ordinateur et iPhone)
- https://daysjewelers.gemist.co/designer/engagement (V, parcours complet, ordinateur et iPhone)
- https://www.daysjewelers.com/pages/custom-engagement-ring-builder (V)
- https://www.daysjewelers.com/pages/days-financing (V)
- https://www.daysjewelers.com/pages/ring-size (V)
- https://www.daysjewelers.com/pages/returns-exchanges (I : extrait de recherche ; page protégée par un contrôle anti-robot)
- https://www.daysjewelers.com/robots.txt (V)
- Inventaire du Maine du même jour : `docs/concurrence/audit/us/maine/INVENTAIRE.md`
