# Audit : Maze Diamonds

- **Site** : Maze Diamonds, https://www.mazediamonds.com/en (page de départ : `/en/setting-search`)
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13 (parcours complet)
- **Statut** : complet, sauf le panier (interdit par robots.txt : `Disallow: /cart`, `/checkout`, `/account*`, `/api/*`). Le bouton « Complete Ring » n'a pas été actionné.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| étape | adresse | options |
|---|---|---|
| 1 Bague | `/en/setting-search` puis `/en/setting/<modèle>` | 50 modèles listés [V] ; tri par prix ; forme de pierre (10) ; métal (6) ; 360° |
| 2 Diamant | `/en/diamond-search` puis `/en/diamond/<id>` | laboratoire ou naturel ; forme, carat, prix, couleur, pureté, taille (cut), filtres avancés, tri ; fiche avec « Four C's » |
| 3 Finalisation | `/en/ring-builder/complete-ring` | taille de doigt (EU), guide des tailles, bouton « Complete Ring » (non actionné) |
| Variante | `/en/ring-search` | bagues déjà montées (« ready-to-wear »), tri par prix |

On peut commencer par la bague ou par le diamant (les deux premières cartes de l'accueil) ; l'ordre des étapes s'inverse [V].

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Rings / Design a Ring / Diamonds | liens | `ring-search` / `setting-search` / `diamond-search` | non | OK [V] |
| Contact, Book Appointment | liens | page franchises ; page de réservation de consultation vidéo (non remplie) | non | OK [V] |
| Account, icône panier | liens | `/en/account`, `/en/cart` (non ouverts : interdits ou compte) | non | non testés |
| Ship to Macedonia | bouton | liste de pays non lue (aucune option captée) | inconnu | ouvert, contenu non relevé |
| Formes (Round, Oval, Princess, Emerald, Cushion, Radiant, Pear, Heart, Asscher, Marquise) | boutons | change l'image de la bague ; la 3D n'existe pas, ce sont des photos rendues | aucun (30.130 ден pour chaque forme) | OK, 10 sur 10 [V] |
| Métal : 14k blanc / jaune / rose | pastilles | change la photo et le SKU (`MZ1023-14k-white`, `-yellow`, `-rose`) | 30.130 ден pour les trois | OK [V] |
| Métal : 18k blanc / jaune / rose | pastilles | idem (`-18k-…`) | 36.900 ден pour les trois | OK [V] |
| 360° (page bague) | bouton | visionneuse ; spinner 5 s avant l'image | aucun | OK [V] |
| Ring information | bouton | dépli : SKU, largeur 1.5, « Can be set with : all diamond shapes », métal | aucun | OK [V] |
| Check our already made rings | lien | `ring-search` | non | OK |
| Move to Next Step | bouton | mène à `diamond-search` avec la bague retenue | aucun | OK [V] |
| Lab (« Our Choice ») / Natural | bascule | liste de pierres laboratoire (dès 67.404 ден) ou naturelles (dès 341.264 ден) | oui | OK [V] |
| What's the difference? | bouton | texte explicatif (contenu non relevé en entier) | non | OK |
| Remove (carte bague) | bouton | retire la bague de la sélection | oui | non actionné |
| Formes de diamant (10 icônes) | boutons | filtre (limité aux formes compatibles avec la bague) | oui | présentes ; filtre non cliqué un à un |
| Carat (curseur, 2 champs) | filtre | « 2 » en minimum : 2.03 ct à 110.639 ден en tête | oui | OK [V] |
| Prix, couleur (K à D), pureté (SI2 à FL), cut (G, VG, EX, ID) | curseurs | filtres de la liste | oui | présents, non manipulés |
| Filtres avancés | bouton | champs numériques (46 à 78, 50 à 70, probablement table et profondeur, **supposé**) ; certificat GIA, IGI, HRD | oui | présents [V], effet non testé |
| Reset Filters | bouton | remet la liste à 50 résultats | oui | OK [V] |
| Tri | liste | 8 choix : prix croissant et décroissant, carat grand et petit, couleur moins et plus, pureté plus et moins | oui | OK [V] |
| Fiche diamant : Back to Diamond Search, Move to Next Step, Diamond Details | lien, boutons | retour, étape 3, détails | oui | OK [V] |
| Fiche diamant : « IGI Certified », échelle des 4 C | texte | grade « ID » (Maze Ideal) ; qualités « non proposées » (P, K-I, I1-I3) | oui | lu [V] |
| Taille de doigt (54 EU) | liste | liste d'options non captée par le script | non | présente |
| Size Guide | bouton | tableau EU 44 à 70 / US 3 à 14 / UK / diamètre / circonférence ; onglet « How to Measure » | non | OK [V] |
| Complete Ring | bouton | vers le panier (non actionné) | total 97.534 ден | non testé : panier interdit |
| Schedule Online Consultation, Book a consultation | liens | `book-appointment` (consultation vidéo ou audio avec un expert HRD, créneaux) | non | OK, non réservé |
| Ajout au panier, chat, WhatsApp, financement | | absents de ce que j'ai vu | | aucun chat ni WhatsApp repéré [V] |

## Options disponibles

- **Formes (10)** : rond, ovale, princesse, émeraude, coussin, radiant, poire, cœur, asscher, marquise.
- **Métaux (6)** : 14 k et 18 k, en blanc, jaune, rose. Pas de platine repéré.
- **Types de bague** : solitaire, pavé, halo caché, trois pierres, bezel, twist, cathédrale ; largeur 1.5 à 3 mm selon le modèle.
- **Origine** : laboratoire (par défaut) ou naturel.
- **Qualités de pierre** : couleur D à H (K à I « non proposé »), pureté jusqu'à SI, cut G à ID, certificats GIA, IGI, HRD.
- **Taille de doigt** : EU, avec correspondance US/UK.
- **Absents** : gravure, choix du carat par curseur de bague, essayage, AR, partage, enregistrement, comparaison.

## Prix, délais, retours, garanties

- **Prix en dinars macédoniens, séparés en trois lignes** : bague, diamant, total ; exemple : Mira 14 k blanc 30.130 + diamant 1.01 ct rond laboratoire 67.404 = 97.534 ден, soit exactement la somme [V]. « Price is for the ring only. Center stone is sold separately. » La TVA, la livraison, la marge ne sont pas expliquées [V].
- **Écart 14 k à 18 k** : 30.130 à 36.900 ден sur la même bague, + 22 % ; la couleur d'or ne change pas le prix [V].
- **Origine** : un diamant de 1 ct naturel dès 341.264 ден, contre dès 67.404 ден en laboratoire (rapport d'environ 5) [V].
- **Délai** : « Production time from 2 to 4 weeks » ; « Need it sooner ? Check our already made rings » [V].
- **Retours, garanties, livraison** : **aucune page trouvée** ; le pied de page n'a que Contact et Book Appointment [V]. Les achats « exclusivement en magasin » selon la page Contact [V]. Paiement : non affiché (panier non ouvert).

## Confiance et service

- Consultation vidéo ou audio gratuite avec un classificateur diamant certifié HRD [V, `/en/book-appointment`].
- Franchises physiques : Majoni (Skopje), Maslinko (Bitola), Her Diamond (Ohrid) [V].
- Un avis client sur l'accueil (« Marko S. », sans date ni source) [V]. Aucune note vérifiable ; Google Maps de Maze sans note dans l'extrait lu.
- Libellé du synthétique : « Lab » en anglais ; « лабораториски дијаманти » en macédonien [V]. Argumentaire « 40-50 % better value than natural » (déclaration du site, non sourcée) [V].
- Preuves de fabrication : processus de bague sur mesure en 5 étapes (idée, modèle 3D et rendus, devis, retouches, fabrication) [V] ; pas de photo ni vidéo d'atelier, pas de suivi de commande.

## Points forts à retenir pour JR Diamond

1. **Prix par poste, à chaque étape** : bague + pierre = total, bandeau récapitulatif collé en haut (preuve : écrans `/en/ring-builder/complete-ring`, 97.534 ден = 30.130 + 67.404).
2. **Parcours inversable** : commencer par le diamant ou par la bague (accueil, deux boutons) [V].
3. **Filtres de pierre complets** (carat, prix, couleur, pureté, cut, certificat) avec 8 tris [V].
4. **Pédagogie dans la fiche** : échelle des 4 C avec la mention « non proposé » pour les grades exclus [V].
5. **Visuel principal rapide** : 1,6 s (ordinateur) et 1,9 s (iPhone) jusqu'à la photo de la bague [V, mesuré, un essai] ; liste de 50 bagues en 3 s.
6. **Consultation vidéo avec expert certifié** réservable en ligne [V].
7. **Bascule laboratoire ou naturel avec explication** sur la même page [V].

## Défauts observés

- Tout est « sur photo » : ni 3D temps réel ni photo d'une pièce fabriquée ; les photos de formes sont des rendus [V].
- Aucune politique de retour, de livraison ni de garantie accessible ; l'achat en ligne est contredit par « exclusivement en magasin » [V].
- Aucune gravure, aucune alliance dans le configurateur, pas de platine [V].
- La page 360° reste sur un spinner 5 s [V].
- Un chargement affiche « Loading Perfect Rings » environ 3 s ; la capture de `controls.cjs` a montré cet écran vide [V].
- Pas de chat ni WhatsApp [V]. Pas de prix en euros (seulement ден) [V].
- Les adresses naturelles `/en/design-a-ring`, `/en/rings`, `/en/diamonds` donnent 404 [V].

## Limites de l'audit

- **Panier, paiement, livraison** : non visités (`Disallow: /cart`, `/checkout`). Le navigateur a préchargé `/en/cart` seul (précharge Next.js de la page, aucun contenu lu).
- Compte, liste de pays « Ship to Macedonia », filtres un par un, filtres avancés et contenu de « What's the difference » non explorés en entier.
- Un seul modèle de bague (Mira) et une seule pierre testés en détail ; temps mesurés sur un essai.
- Les interprétations (champs 46 à 78 et 50 à 70) sont supposées.

## Sources

- https://www.mazediamonds.com/en · /en/setting-search · /en/setting/mira-solitaire-engagement-ring · /en/diamond-search · /en/diamond/101-round-lab-diamond-lg852629984 · /en/ring-builder/complete-ring · /en/ring-search · /en/book-appointment · /en/contact · /mk (lus le 15/11/2026).
- robots.txt : https://www.mazediamonds.com/robots.txt (`Disallow: /checkout`, `/cart`, `/account*`, `/api/*`).
