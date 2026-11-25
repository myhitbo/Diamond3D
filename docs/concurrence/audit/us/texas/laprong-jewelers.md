# LaProng Jewelers (Carrollton, Texas)

| | |
|---|---|
| Site | LaProng Jewelers |
| Adresse | https://laprong.com/ (page de départ : https://laprong.com/ring-builder/) |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366 x 900) et affichage iPhone 13 |
| Statut | **partiel** : le constructeur d'alliances est dans une iframe d'un autre domaine dont le robots.txt interdit tout (`Disallow: /`) ; aucun de ses boutons n'a été actionné. Panier interdit par robots.txt. |

Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Page `/ring-builder/` | Texte de présentation, iframe « Band Builder » (alliances seulement), boutons « Make them yourself at the bench », « Book a FREE Design Consultation », « Sign up to Attend a DIY Workshop », vidéo YouTube [V] |
| Constructeur (iframe) | Un seul écran : matériau, profil, taille de doigt, ajustement, détail de design, largeur, poids, finition, gravure, instantanés, « Request this Item » [V, lecture du DOM déjà chargé, sans clic] |
| Panier | `/cart/` interdit par robots.txt : non ouvert [V] |
| Pas de configurateur de bague de fiançailles | Les fiançailles passent par « Custom Design Service » (consultation gratuite, rendus 3D envoyés par courriel) et par un catalogue de pierres [V] |

## Contrôles vérifiés

Relevé automatique de la page hôte : 62 contrôles sur ordinateur, 54 en affichage iPhone (`controls.cjs`). Légende état : OK, NT = non testé.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu Workshops, Custom Design Service, Gift Certificates, Blog, Book a Call, Contact Us (+ sous-menus) | liens | Navigation vers pages du site [V, adresses lues] | non | NT (pages hors configurateur) |
| Search | bouton + champ | Recherche de site | non | NT (adresses de recherche à vérifier) |
| Cart 0 | lien | `/cart/` interdit | non | NT, panier interdit par robots.txt |
| Barre catégories : Diamond Engagement Rings, Wedding Bands, Jewelry, Mountings, Findings, Diamonds, Gemstones, Customizable Designs, Holiday | liens | Catalogue Stuller (fournisseur) [I] | non | NT |
| Iframe Band Builder (tous ses menus) | iframe | Chargée à la simple ouverture ; la 3D est visible (bague 14 k blanc, demi-jonc 6 mm, taille 10) ; interdit d'interagir (robots.txt du domaine de l'iframe : `Disallow: /`) | 1 903,79 $ affiché par défaut [V] | NT, interdit |
| Make them yourself at the bench | lien | Page d'atelier DIY | non | NT |
| Book a FREE Design Consultation / Book a Call | liens | Prise de rendez-vous `/bookings/` | non | NT (formulaire) |
| Play Youtube video | bouton | Vidéo YouTube | non | NT (autre domaine) |
| Tel 469 557 1194, Google Maps, Instagram, Facebook, YouTube, TikTok | liens | Téléphone et réseaux | non | NT |
| Bandeau cookies : Accept Cookies / Reject All / Your Privacy Choices | boutons | Présent, fermé par le script | non | OK |
| Menus du constructeur (lus dans le DOM, non actionnés) : Material, Profile, Finger size, Fit, Design detail, MM width, Weight, Finish, Engraving inside/outside, Stage View, Save snapshot x3, Quantity, Request this Item, Reset Selections, Load More Designs | listes, boutons | Non actionnés | affichage seul | NT, interdit (iframe) |

## Options disponibles

Lues dans le DOM de l'iframe (sans clic) [V] :
- **Matériaux (28 entrées)** : or 10 k (blanc, jaune, rose) ; 14 k (blanc, jaune, rose, palladium blanc, « X1 » blanc, bicolores et tricolores : rose/blanc, rose/jaune, blanc/rose, blanc/jaune, jaune/rose, jaune/blanc) ; 18 k (blanc, jaune, rose, palladium blanc) ; 22 k jaune ; argent plaqué or 14 k ; cobalt, titane, zirconium ; argent « Continuum » et sterling ; palladium ; platine.
- **Profils (10)** : demi-rond, plat, couteau, concave, européen, plein rond, couteau inversé, rond effilé, plat effilé, carré.
- **Taille de doigt** : 1 à 20,25 par quarts. **Ajustement** : Comfort-fit, Standard.
- **Détails de design (10)** : aucun, bord étagé, étagé milgrain, milgrain, double milgrain, milgrain large, perle, corde, biseauté, bord rond rainuré.
- **Largeur** : 1 à 12 mm (17 valeurs). **Poids** : ultra-léger, léger, standard, lourd.
- **Finitions (14)** : sans, sablé perle/mat, florentin, sablé verre, martelé, glace, roche, satiné, satiné martelé, satiné roche, soie, pierre, martelé mat, roche mate.
- **Gravure** : intérieur, extérieur. **Instantanés** : 3 emplacements, effacés à la fermeture de la page. **Galerie d'inspiration** : 9 designs + « Load More ».
- **Sortie de fiche** : numéro d'article (ex. IR10:27388:P), largeur, taille, épaisseur 2,2 mm, poids approximatif 5,87 dwt (9,13 g) [V].
- **Pierres (page `/lab-grown-diamonds/`)** : filtres prix min/max, tri prix croissant/décroissant, certificats GIA, IGI, GCAL, « No lab report » ; exemples 1,04 ct émeraude E VVS2 synthétique 460 $ ; 1,14 ct rond D VVS2 567 $ [V, lecture de la page, filtres non actionnés].

## Prix, délais, retours, garanties

- **Prix** : affiché en direct dans le constructeur (1 903,79 $ pour l'alliance par défaut) ; la page promet « a live, accurate estimate » et explique que le prix varie selon la couleur de l'or et la complexité [V]. Pas de décomposition poste par poste observée. Les bagues de fiançailles : « Pricing will vary by request » [V, `/custom-design-service/`].
- **Délai** : 10 à 14 jours ouvrés pour les alliances configurées en ligne ; atelier DIY en une journée (4 à 6 h) ; pièces complexes 10 à 12 jours ouvrés [V, `/ring-builder/`, `/jewelry-faq/`].
- **Livraison** : UPS ou FedEx assurée, option lendemain [V, texte de la page]. Frais non observés (panier interdit).
- **Retours, garantie** : « 100 % Satisfaction Guaranteed » sur la page de conception sur mesure ; aucune durée de retour ni exception du sur mesure lue [V / non trouvé].
- **Certificats** : GIA, IGI, GCAL listés sur la page de pierres ; « GIA-graded earth-mined diamonds » et synthétiques [V].
- **Synthétique** : libellé « Lab-Grown Diamond » / « Lab Grown Diamond » [V].
- **Métaux recyclés** : 100 % recyclés, certifiés SCS Global Services [V].

## Confiance et service

- Rendus 3D de la bague sur mesure envoyés par courriel sous quelques jours ; prototype en résine expédié sur demande [V].
- Ateliers où le couple fabrique lui-même ses alliances (dès 695 $, « 1,200+ rings made in workshops ») : la fabrication est vécue et filmée sur Instagram/YouTube [V, `/ring-builder/`].
- Consultation gratuite (Book a Call), téléphone 469 557 1194, galerie Instagram, avis presse (The Knot, WeddingWire) [V].
- Accessibilité annoncée WCAG 2.2 AA [V]. Anglais, dollars. Pas de chat observé.
- Preuves de fabrication : photos et vidéos d'ateliers ; pas de suivi de commande observé.

## Points forts à retenir pour JR Diamond

1. **Le prix change en direct dans l'image** (1 903,79 $ à côté de la bague 3D, fiche technique : largeur, épaisseur, poids en grammes). Preuve : capture `ifd.jpg`, lecture de l'iframe. Pertinent pour l'écart « prix affiché partout, sur devis chez nous ».
2. **Poids du métal affiché** (5,87 dwt, 9,13 g) : même idée que « prix expliqué ».
3. **Fabrication montrée par l'expérience** : atelier à l'établi dès 695 $, promesse de 1 200 bagues. Preuve : `/ring-builder/`.
4. **Délai de 10 à 14 jours ouvrés** annoncé sur la page du constructeur, proche des 14 jours de JR Diamond.
5. **Instantanés comparables** (3 emplacements) et galerie « Open Design » : inspiration et comparaison. Preuve : DOM de l'iframe.
6. **Métaux certifiés recyclés (SCS)** comme argument.

## Défauts observés

- Le constructeur ne couvre que les alliances ; pas de bague de fiançailles en ligne [V].
- Instantanés effacés à la fermeture (message explicite) [V].
- Page hôte : la capture pleine page montre l'iframe blanche (rendu différé) ; le visuel apparaît ensuite [V].
- Pas de durée de retour lisible ; pas de décomposition du prix [V / non trouvé].
- Le constructeur est un outil de fournisseur (Stuller JewelerShowcase) [I] : catalogue générique, pas le fichier de fabrication.

## Limites de l'audit

- **Aucun contrôle du constructeur actionné** : `laprong-frame-categoryembed.jewelershowcase.com` a `Disallow: /` dans son robots.txt. J'ai seulement lu le texte du DOM de l'iframe que la page charge à l'ouverture (aucune requête supplémentaire, aucun clic). Effets réels sur prix et image non observés.
- Panier, checkout, compte : interdits (`/cart/`, `/checkout/`, `/my-account/`) ; panier non atteint, frais et moyens de paiement non vus.
- Pages de pierres, filtres, bagues de fiançailles, formulaires de rendez-vous : non actionnés.
- **Temps d'apparition** : l'iframe est insérée à 0,75 s (ordinateur) et 0,82 s (iPhone) après la navigation ; contenu visible après environ 6 s d'attente (scroll puis capture) [V, un seul essai].
- Pas de test sur appareil réel, anglais seulement.

## Sources

- https://laprong.com/ring-builder/ (lue, capture et DOM)
- https://laprong.com/robots.txt
- https://laprong.com/jewelry-faq/
- https://laprong.com/custom-design-service/
- https://laprong.com/lab-grown-diamonds/
- https://laprong-frame-categoryembed.jewelershowcase.com/band-builder (robots.txt : INTERDIT ; seulement chargée par la page)
