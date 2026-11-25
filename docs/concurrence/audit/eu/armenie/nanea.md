# Audit : NANEA (nanea.am)

- **Site** : NANEA, atelier de joaillerie d'Erevan. **Adresse de départ** : https://nanea.am/en/ring/luminous-halo (fiche configurable) ; liste https://nanea.am/en/engagement.
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366x900, affichage iPhone 13.
- **Statut** : complet pour la fiche configurateur ; partiel pour la page des diamants (voir limites). `robots.txt` autorise tout sauf `/api/` et `/diamonds?ring=`.
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours
| Étape | Options |
|---|---|
| 1. Modèle | 66 modèles de bagues de fiançailles, filtre par 12 formes (rond, ovale, coussin, coussin allongé, princesse, émeraude, asscher, radiant, poire, marquise, cœur, trillion), 3 couleurs d'or, tri (populaire, prix croissant, décroissant) [V /en/engagement] |
| 2. Métal | Jaune, blanc, rose ; titre 585 ou 750 [V] |
| 3. Pierre | 9 tailles ; Synthétique (« Lab-grown ») ou Naturel ; carats 0,50 à 3,00 ; qualité Essential, Select, Rare, Exceptional [V] |
| 4. Taille et gravure | Taille 14 à 21 (diamètre en mm, pas de 0,5) ; gravure jusqu'à 24 caractères [V] |
| 5. Commande | « Place order » : prépare un message WhatsApp ou Instagram avec la configuration ; paiement après confirmation écrite [V texte du site] |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow / White / Rose | bouton | Change l'image (fichier `yg14`, `wg14`, `rg14`) et le poids (3,07 / 3,05 / 3,10 g) | 520 000 / 530 000 / 520 000 ֏ (poire 0,50 ct 585) | OK [V] |
| 585 / 750 | bouton | Poids 3,10 → 3,59 g | 520 000 → 605 000 ֏ (or rose) | OK [V] |
| Round, Oval, Cushion, Emerald, Asscher, Radiant, Princess, Pear, Marquise | bouton | Change l'image (`/renders/luminous-halo/<forme>/`) et le diamètre (5,2 à 7,9 mm) | Rond 545 000 ; ovale 530 000 ; coussin 530 000 ; émeraude 535 000 ; asscher 535 000 ; radiant 530 000 ; princesse 530 000 ; poire 520 000 ; marquise 520 000 ֏ | OK [V] |
| Lab-grown / Natural | bouton | « Natural » saute à 1,06 ct VS1·F, mention d'un numéro GIA ; « Lab-grown » repasse à 1,05 ct | Natural 3 865 000 ; Lab-grown 655 000 ֏ (marquise) | OK, mais bascule le carat sans prévenir [V] |
| Essential / Select / Rare / Exceptional | bouton | VS2·G, VS1·F, VVS2·E, VVS1·D | 625 000 / 655 000 / 695 000 / 750 000 ֏ (1,05 ct) | OK [V] |
| Carat weight | curseur 0,50 à 3,00 | Diamètre et prix changent | 0,5 ct 565 000 ; 1 ct 735 000 ; 2 ct 1 155 000 ; 3 ct 1 660 000 ֏ (VVS1·D) | OK [V] |
| Size | liste 14 à 21 | Poids : 2,61 g (14), 3,17 g (17), 3,91 g (21) | 535 000 / 565 000 / 610 000 ֏ | OK : la taille change le prix [V] |
| Engraving | champ texte | Coupé à 24 caractères | Aucun effet | OK [V] |
| What the price is made of | lien | Déplie le détail : métal 99 950 ; pierre synthétique 37 789 ; petites pierres 22 815 ; main-d'œuvre 125 000 ; finition 18 000 ; **marge d'atelier 129 779** ; TVA 20 % 86 667 ֏ (somme 520 000 ֏) | — | OK [V] |
| Vues (4 miniatures : trois-quarts, face, profil, dessus) | boutons | Quatre images pré-rendues par configuration (`_tf`, `_front`, `_side`, `_top`) ; changement d'image non confirmé visuellement | — | Partiel [I] |
| Zoom (« Open full-screen view ») | bouton | Aucun calque détecté dans le navigateur automatisé | — | Non confirmé (plein écran natif probable) [S] |
| Choose a real diamond from stock | bouton | Mène à la page des diamants avec la bague (`/diamonds?ring=`, adresse interdite : non ouverte) | — | Non testé (robots.txt) |
| Copy link to this configuration | bouton | Copie une adresse contenant la configuration : `?m=wg18&o=lab&s=oval&ct=0.50&q=vs-g&sz=17.0` ; libellé « Link copied » | — | OK [V] |
| Save (cœur) sur les cartes | bouton | Change d'état, sans compte | — | OK [V] |
| Place order | bouton | Ouvre un message WhatsApp ou Instagram pré-rempli via `/api/wa` | — | Non cliqué : `/api/` interdit par robots.txt |
| Search designs | bouton | Ouvre un champ de recherche | — | Partiel, résultats non vérifiés |
| Accordéons (taille, fabrication et livraison, certificat et poinçon, comment commander, garantie) | cinq `summary` | Se déplient ; tableau de tailles diamètre → circonférence | — | OK [V] |
| Langues hy / ru / en | liens | `/hy`, `/ru`, `/en` | — | OK (liens présents) [V] |
| WhatsApp, Instagram, LinkedIn (pied de page) | liens | WhatsApp passe par `/api/wa` | — | Non cliqués |
| Page « Nanea Diamonds » : forme, carat de/à, prix de/à, couleur D–K, pureté FL–SI2, taille (Ideal à Good), tri, Compare, 360° | filtres | Les filtres changent l'adresse (`?shape=round&caratFrom=1&color=D&clarity=IF`) ; 24+ pierres par page | Pierre synthétique 1 ct émeraude E·SI1 dès 92 000 ֏ | Partiel : 360° et Compare sans effet visible [V/I] |

## Options disponibles
- Métal : or jaune, blanc, rose ; 585 ou 750 ; platine annoncé par la fiche entreprise (LinkedIn), non vu dans le configurateur [I].
- Formes de pierre : 9 dans le configurateur, 12 en liste (cœur, trillion, coussin allongé en plus).
- Origine : synthétique ou naturel. Qualité : 4 niveaux (VS2·G à VVS1·D). Carats 0,50 à 3,00.
- Tailles 14 à 21 ; gravure 24 caractères.
- Pas de choix de monture ni de griffes dans la fiche : la monture est le modèle (66 modèles).
- Alliances, bracelets, pendentifs, boucles, parures : catégories distinctes.

## Prix, délais, retours, garanties
- Prix en dram arménien (֏) seul, TVA 20 % incluse, détail avec marge affichée [V]. « Prices are calculated from the current metal quote and follow the market. The price in your written order confirmation is final » [V pied de page].
- Délai : 7 jours, date « Ready by 2 December » affichée (calculée) ; part de la confirmation et de l'acompte [V]. Pierre naturelle commandée au fournisseur : délai confirmé avant paiement [V].
- Paiement : après confirmation écrite, par virement, ou carte ou espèces à l'atelier ; acompte [V /how-to-order]. Pas de panier ni de paiement en ligne.
- Livraison : gratuite à Erevan, coursier en Arménie, international sur arrangement [V].
- Retours : un bijou conforme n'est pas repris (« caractéristiques individuelles ») ; défaut ou non-conformité à signaler sous 14 jours : correction, refabrication ou remboursement [V /warranty].
- Garantie : 1 an sur les défauts de fabrication ; première mise à taille offerte ; nettoyage et polissage gratuits à vie [V].
- Certificat : IGI ou GIA annoncé pour la pierre centrale [V]. **Incohérence** : la liste des diamants naturels montre aussi des pierres HRD (« 1.00 ct · Pear K · SI2 · Very Good · HRD ») [V].

## Confiance et service
- Poinçon d'État arménien, certificat de laboratoire, visite de l'atelier sur rendez-vous, adresse Rue Khorenatsi 112 (Erevan) [V].
- Photos d'atelier présentes sur l'accueil ; pas de photos ou vidéos de fabrication d'une commande ni de suivi [V/I].
- Avis clients : aucun vu sur la fiche [V].
- Contact : WhatsApp, Instagram. Pixels Facebook et Google Analytics chargés [V].
- Libellé du synthétique : « Lab-grown » (en), « Աճեցված » (hy) [V].

## Mesures du visuel principal
| Appareil | Temps jusqu'au premier visuel visible | Réseau calme |
|---|---|---|
| Ordinateur | 653 et 833 ms (2 essais) | 2,3 s |
| iPhone 13 | 689 ms (1 essai) | — |
Pas de défilement horizontal sur iPhone ; deux boutons « Place order » (dont un fixe) [V]. Rendu : images pré-rendues JPEG, pas de 3D temps réel [I d'après les adresses `/renders/…jpg`].

## Points forts à retenir pour JR Diamond
- **Prix décomposé avec la marge d'atelier affichée** (métal, pierre, main-d'œuvre, finition, marge, TVA, somme exacte) : preuve par le dépliant « What the price is made of ». Marge ≈ 30 % du prix hors TVA (129 779 / 433 333, calcul).
- **Configuration dans l'adresse et bouton « copier le lien »** : preuve `?m=wg18&o=lab&…` et libellé « Link copied ».
- **Prix et poids de métal qui bougent à chaque option**, y compris la taille (535 000 à 610 000 ֏).
- **Page de diamants certifiés avec photo et prix final, filtres complets** (couleur, pureté, taille, carat, prix).
- **Délai et date de prêt affichés à côté du prix** (7 jours, date calculée).
- Parcours commande par message WhatsApp pré-rempli puis confirmation écrite : peu coûteux à construire.

## Défauts observés
- Pas de 3D interactive : quatre vues pré-rendues seulement [I].
- Le passage à « Natural » change le carat sans l'annoncer (0,5 → 1,06 ct) [V].
- Pas de panier ni de paiement en ligne ; commande passant par WhatsApp [V].
- Incohérence certificat (IGI ou GIA annoncé, HRD dans la liste) [V].
- Devise unique (֏), aucun avis visible, aucun suivi de fabrication [V].
- Sur la page diamants, après les filtres D + IF (synthétique, rond), des pierres D·SI1 sont restées affichées avec « Loading… » [V, peut-être transitoire].

## Limites de l'audit
- Une seule fiche configurable testée (Luminous Halo), une seule fois par option ; autres modèles non ouverts.
- Zoom, 360°, Compare, recherche, vues : effet non confirmé en navigateur automatisé.
- « Place order », WhatsApp, `/diamonds?ring=` et `/api/` non ouverts (robots.txt).
- Pages `/en/diamond-guide`, `/size-guide`, `/care`, `/contact`, `/terms` non lues. Versions hy et ru non auditées.
- Liste des 66 modèles lue sur la première page seulement.

## Sources
- https://nanea.am/en/ring/luminous-halo ; https://nanea.am/en/engagement ; https://nanea.am/en/diamonds ; https://nanea.am/en/custom-rings ; https://nanea.am/en/how-to-order ; https://nanea.am/en/warranty ; https://nanea.am/en/faq (lues le 15/11/2026).
- https://nanea.am/robots.txt ; https://nanea.am/sitemap.xml.
- https://linkedin.com/company/145250581 (publications de NANEA).
