# Audit : Morgan Taylor Jewelers (Las Vegas, Nevada)

- Site : Morgan Taylor Jewelers, https://morgantaylorjewelers.net (page de départ : /ringsettings)
- Date : 15/11/2026. Appareils : Chromium ordinateur 1366 px et affichage iPhone 13 (Playwright).
- Statut : **partiel**. robots.txt lu : /cart, /checkout-shipping, /account, /wishlist, /register, /invoice et les pages légales sont interdits ; le reste autorisé. Le bouton « Add this setting » n'a donc pas été cliqué (panier interdit) : le parcours s'arrête avant le panier.

## Parcours
Constructeur en 3 étapes affiché en haut des pages (vérifié : /ringsettings, /diamonds).

| Étape | Options (vérifié) |
|---|---|
| 1 Choisir une monture (ou un diamant d'abord) | Style, métal, forme, prix ; fiche monture : métal, origine, taille de doigt |
| 2 Choisir un diamant (/diamonds) | Terre / labo, forme, couleur, pureté, carat, prix, filtres avancés |
| 3 Bague complète « Review Your Ring » | Non atteint (lien vers /ringsettings seul, pas de bague composée testée) |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Style : Halo, Solitaire, Single Row, Vintage, Multirow, Bypass, Pave, Others | filtre (vignettes) | la liste change (premier produit différent) ; compteur non lu de façon fiable | n/a | OK (partiel : effet sur la liste vu, comptes non fiables) |
| Style : Three Stone | filtre | clic impossible par libellé (délai dépassé) | n/a | non vérifié |
| Métal : 14k jaune, blanc, rose ; 18k jaune, blanc, rose ; platine | filtre | liste filtrée ; 18k jaune : 3653 résultats (sur 4001) | n/a | OK |
| Forme : 10 formes + « Other Shape » | filtre | liste filtrée ; rond : 2442, radiant : 2735, asscher : 860 | n/a | OK ; « Other Shape » non testé |
| Prix min / max + curseur | champ + curseur | plage affichée 483–45117 $ | filtre | non actionné |
| Reset | bouton | rétablit la liste | n/a | OK |
| Tri (Featured, prix croissant, décroissant, Newest) | select | présent ; non actionné | n/a | non testé |
| Vue grille / liste | bouton | présent | n/a | non testé |
| Pagination (201 pages, 20 par page) | boutons | présent | n/a | non testé |
| Cœur / œil sur vignette | boutons | présents (favoris, aperçu) ; /wishlist interdit | n/a | non testé |
| Fiche : métal (5 choix) | vignettes | change de fiche (nouvelle référence, nouveau titre) | blanc 14k 3045 $ → platine 3729 $, jaune 14k 2841 $, rose 14k 2856 $ | OK |
| Fiche : origine Natural / Lab Grown | select | change de fiche | 2676 $ en labo, mais bague différente (poire 9x6 rose 14k) | fonctionne mal (voir défauts) |
| Fiche : taille de doigt 6,0 à 8,0 par quart | select | présent, aucun effet de prix | 0 | non actionné |
| Fiche : galerie 5 diapositives | boutons | présents ; photos seules (aucune 3D, 360° ou vidéo relevée) | n/a | non testé |
| Add this setting | bouton | appelle le panier interdit | n/a | non cliqué (robots.txt) |
| Schedule an appointment | bouton | ouvre un formulaire (date, champs, 2 zones de texte), non rempli | n/a | OK (ouverture seule) |
| Partager : Facebook, Pinterest, Email, Twitter, WhatsApp, Copy URL | boutons | présents | n/a | non cliqués (domaines tiers) |
| Diamants : Earth-Mined / Lab-Grown, 10 formes, couleur D–M, pureté FL–I1, carat 0,2–10,01, prix | filtres | présents ; 2977 pierres ; non actionnés | prix affichés 50 285 $ et plus en tête de liste | non testés |
| Filtres avancés : taille, fluorescence, polissage, symétrie | filtres | présents | n/a | non testés |
| Recherche, Login, téléphone, Facebook, Instagram, Yelp | liens | présents | n/a | non testés |

Aucun mode 3D, AR, 360°, chat ou WhatsApp de service n'a été trouvé (WhatsApp seulement dans le partage).

## Options disponibles
- Métaux : or 14 k jaune, blanc, rose ; or 18 k jaune, blanc, rose ; platine.
- Formes : rond, princesse, coussin, émeraude, ovale, radiant, asscher, marquise, cœur, poire, autre.
- Styles : halo, solitaire, trois pierres, rang simple, vintage, multi-rang, bypass, pavé, autres.
- Origine : naturel / laboratoire (monture et pierre).
- Tailles : 6,0 à 8,0 (pas de 0,25).
- Pierre : couleur D à M, pureté FL à I1, taille, fluorescence, polissage, symétrie (vérifié).
- Gravure, pavage au choix, griffes : non proposés (non relevé).

## Prix, délais, retours, garanties
- Prix affiché sur chaque vignette et fiche, en dollars, monture seule : « Center stone not included » (vérifié). Pas de décomposition. Le prix change selon le métal.
- Délai, livraison, retours, garantie : non relevés (pages légales interdites par robots.txt ; panier non atteint).
- Certificats : non vus sur la page de départ ; détails de pierre non ouverts.
- Financement : non vu.

## Confiance et service
- Boutique physique : 7995 W Sahara Ave #103, Las Vegas ; téléphone +1 702 259 8011 ; email (vérifié, pied de page).
- Liens Facebook, Instagram, Yelp. Pas d'avis sur le site (non vu). Langue : anglais, devise : dollar.
- Aucune photo ni vidéo d'atelier, aucun suivi de commande vus.

## Points forts à retenir pour JR Diamond
- Prix visible dès la liste, et prix qui varie avec le métal (preuve : 3045 $ blanc, 3729 $ platine sur la même fiche).
- Étapes visibles « monture, diamant, bague » avec filtres riches sur les pierres (/diamonds, 2977 pierres).
- Rendez-vous en magasin à un clic depuis la fiche.
- Fiche technique détaillée (poids du métal 3,47 g, épaisseur, rhodiage) vérifiée sur la fiche.

## Défauts observés
- Choisir « Lab Grown » change aussi la monture (poire 9x6 mm au lieu de ronde 6,5 mm) : le choix saute d'un produit à l'autre.
- Ouverture lente : premier visuel de liste après environ 3,6 s sur ordinateur ; fiche environ 4,8 s (ordinateur) et 4,7 s (iPhone), mesures approximatives.
- Aucune vue 3D ni 360°, photos de catalogue de fournisseur (inféré : visuels de catalogue).
- Compteurs de résultats affichés de façon incohérente selon l'instant (mes lectures n'étaient pas fiables).

## Limites de l'audit
Pas de panier (interdit), pas de clic sur Add this setting, tri, pagination, filtres de diamants, galerie et partages non testés. Aucun écart à robots.txt. Aucun formulaire envoyé.

## Sources
- https://morgantaylorjewelers.net/ringsettings ; https://morgantaylorjewelers.net/diamonds ; fiche /ringsettingdetail/setting/14k-white-65-mm-round-1-4-ctw-natural-diamond-semi-set-engagement-ring-123267-6002-p ; https://morgantaylorjewelers.net/robots.txt (tous lus le 15/11/2026).
