# Inventaire des joailliers : Hawaï

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun chat ouvert, au plus une page toutes les 2 secondes par site (30 secondes pour The Wedding Ring Shop, dont le robots.txt demande ce délai).

Outils : `curl` avec son identité par défaut ; pour les pages construites en JavaScript, un Chromium sans interface, lui aussi avec son identité par défaut ; recherche web générique. Aucun site retenu n'a renvoyé de 403, de captcha ni de défi Cloudflare. Les robots.txt des boutiques Shopify portent un commentaire qui invite les agents à installer un « skill » de Shop : il a été ignoré, il n'a aucun rapport avec la mission.

Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés ou d'extraits de recherche), **[S]** supposé (non vérifié). Les prix sont ceux affichés le 15/11/2026, en dollars américains.

## Constat général

- [V] Le marché se concentre à Honolulu, autour de Kapiolani Boulevard et de Kalakaua Avenue. Maui compte deux acteurs utiles (Kahului et Wailea), Kauai un seul, sans boutique. Sur l'île d'Hawaï, la vente en ligne porte surtout sur des anneaux en titane et en bois de koa.
- [V] Un seul vrai configurateur 3D : celui de The Wedding Ring Shop (Honolulu), fourni par Caratwise. Il assemble anneau, côtés et chaton, affiche un prix pour la configuration et renvoie vers une liste de diamants à prix affiché (7 323 ronds synthétiques de 1,5 à 2,5 ct pour la configuration essayée).
- [V] La spécialité locale est l'alliance hawaïenne gravée à la main (« Hawaiian heirloom »). Trois ateliers la font personnaliser en ligne avec un prix qui suit les choix : Royal Hawaiian Heritage Jewelry, Debbie's Jewelry et Helen and David's.
- [V] Debbie's Jewelry (Waipahu) a le parcours le plus proche de celui que vise JR Diamond : estimation en direct, envoi sans paiement, validation du dessin, lien de paiement, puis fabrication en « 7–14 working days ».
- [V] Les autres constructeurs viennent de tiers : Belgium Webnet (No Ka Oi), MyJeweler.ai et Jeweler Showcase (Kauai Custom Jewelry), Lashbrook (Robert Palma Designs).
- [V] Le diamant synthétique est proposé par la plupart des acteurs lus : The Wedding Ring Shop, No Ka Oi, Debbie's, Kauai Custom Jewelry, Robert Palma Designs, Maui Divers, House of Diamonds, Diamond Guy.
- [V] Délais affichés pour du sur-mesure : 7 à 14 jours ouvrés (Debbie's, alliance gravée), 3 à 6 semaines (Royal Hawaiian Heritage), 5 à 6 semaines (Kauai Custom Jewelry), 4 à 8 semaines (House of Diamonds), 6 à 8 semaines (Diamond Guy), 6 à 10 semaines (The Wedding Ring Shop, 4 en urgence).

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | The Wedding Ring Shop | Honolulu (Oahu) | https://www.weddingringshop.com/ | https://www.weddingringshop.com/design-your-own | oui (3D, fourni par Caratwise) | non (robots.txt : délai de 30 s, respecté) | [V] Constructeur en 3 étapes avec vue « 360° Experience, Drag to Rotate », choix du style, des côtés, du chaton, de deux métaux, de la gravure et de l'alliance assortie ; prix affiché pour la configuration (1 426 $ la monture) ; naturel ou synthétique ; à l'étape 2, 7 323 diamants synthétiques ronds de 1,5 à 2,5 ct à prix affiché. Sur-mesure à devis détaillé, fini à la main à Honolulu. |
| 2 | Debbie's Jewelry | Waipahu (Oahu) | https://debbiesjewelryhawaii.com/ | https://debbiesjewelryhawaii.com/pages/design-your-heirloom | oui (maison, sans 3D) | non | [V] Configurateur d'alliance et de bijou hawaïen gravé : « the price updates as you go », comparaison à taille réelle, configuration gardée dans l'adresse. Envoi sans paiement, validation, lien de paiement, fabrication en 7 à 14 jours ouvrés. Atelier décrit poste par poste (fonte de l'or, CAO, CNC, impression de cire). Recherche de 163 893 diamants à prix affiché. |
| 3 | No Ka ʻOi Jewelers | Kahului (Maui) | https://nokaoijewelers.com/ | https://nokaoijewelers.com/engagement-rings | oui (fourni par Belgium Webnet) | non (site en JavaScript, lu avec un navigateur) | [V] « Design your own » classique en 3 étapes : 1 214 montures, puis 2 631 diamants naturels de 480 à 660 068 $ et une bascule « Lab-Grown », puis récapitulatif. Certaines montures restent « Email us for Price ». Sur-mesure avec CAO 3D. |
| 4 | Royal Hawaiian Heritage Jewelry (RHHJ) | Honolulu (Oahu) | https://royalhawaiianheritagejewelry.com/ | https://royalhawaiianheritagejewelry.com/products/custom-hawaiian-heirloom-ring | oui (maison, aperçu 2D de la gravure) | non | [V] Alliance hawaïenne sur mesure : largeur, métal, épaisseur, motif, bord, lettrage, message intérieur ; prix recalculé en direct (1 020 $, puis 2 055 $ en 12 mm, puis 2 866 $ en « Extra Heavy ») ; bouton « Preview Engraving ». Gravée à la main dans leur fabrique de Honolulu, 3 à 6 semaines, vente ferme. |
| 5 | Kauai Custom Jewelry | Kauai (rive sud, sans boutique, sur rendez-vous) | https://www.kauaicustomjewelry.com/ | https://www.kauaicustomjewelry.com/pages/custom-ring-builder | oui (fournis par des tiers) | **partiel** : les deux constructeurs sont hébergés chez des tiers dont le robots.txt interdit la lecture | [V] Constructeur de bague MyJeweler.ai et constructeur d'alliance Jeweler Showcase intégrés au site. Sur-mesure à distance : CAO soumise avant tout paiement, à partir d'environ 4 000 $ en synthétique, 5 à 6 semaines, rendez-vous en visioconférence. Contenu des constructeurs non lu. |
| 6 | Robert Palma Designs | Honolulu (Oahu) | https://www.robertpalmadesigns.com/ | https://www.robertpalmadesigns.com/pages/diamond-search (diamants) ; constructeur d'alliance : voir la fiche | oui pour l'alliance (fourni par Lashbrook) ; non pour la bague | non | [V] Constructeur d'alliance Lashbrook avec prix en direct (3 200,25 $ pour un anneau bombé de 7 mm en or blanc 14 k). Recherche de diamants naturels ou synthétiques. Sur-mesure en 3 étapes : CAO, cire imprimée en 3D, fonte ; atelier sur place. Le lien « design your own ring » des montures est cassé. |
| 7 | Maui Divers Jewelry | Honolulu (Oahu) | https://www.mauidivers.com/ | https://www.mauidivers.com/collections/hawaiian-wedding-rings | non | non | [V] Marque régionale qui fabrique à Honolulu et fait visiter sa fabrique (visite gratuite de 30 minutes). Solitaires à diamant synthétique certifié IGI de 3 995 $ (1,01 ct) à 6 495 $ (2,03 ct), fiche technique complète, garantie à vie, retour sous 30 jours. |
| 8 | Greenleaf Diamonds | Wailea (Maui) | https://greenleafdiamonds.com/ | https://greenleafdiamonds.com/pages/custom-design | non | non | [V] Sur-mesure en 4 étapes, « the price is agreed with you before anything is made » ; refonte de bijoux de famille ; présentation par vidéo ; prix affichés (jusqu'à 46 800 $). Fabrication dans leur atelier de Los Angeles, pas à Hawaï. |
| 9 | Happy Laulea | Honolulu (Waikiki) | https://www.happylaulea.com/ | https://www.happylaulea.com/products/custom-ring-order | oui (fiche produit à options) | non | [V] « Make Your Custom Hawaiian Jewelry Ring Order » à partir de 395 $ : largeur de 2 à 8 mm, or 10, 14 ou 18 k, taille. Collection « Create your couples ring » avec 15 % de remise sur la paire. Bijoux en or, argent et platine faits à la commande à Honolulu. |
| 10 | Helen and David's Hawaiian Heirloom | Honolulu (Oahu) | https://helenanddavidjewelry.com/ | https://helenanddavidjewelry.com/product/hawaiian-heirloom-rings/ | oui (fiche produit à options) | non | [V] Cours de l'or du jour affiché en tête de site (3 883,40 $ l'once le 15/11). Alliance hawaïenne à 9 listes d'options, de 590,95 à 2 352,72 $ ; le prix suit la largeur (590,95 $ en 5 mm, 1 022,48 $ en 10 mm, or jaune 14 k). Très petit site. |

## Fiches

### 1. The Wedding Ring Shop (Honolulu)

- [V] Adresse : 1181 Kapiolani Blvd, Honolulu, HI 96814. Maison familiale fondée en 1987 par Michael Han. Sources : https://www.weddingringshop.com/ et https://www.weddingringshop.com/our-difference
- [V] Le menu « Engagement Rings » propose deux entrées : « Customize Your Ring » (`/create-your-ring`) et « Caratwise Ring Builder » (`/design-your-own`).
- [V] La page `/design-your-own` charge un composant `caratwise-root` (scripts de `release.caratwise.com`, mention « Powered by Caratwise »). L'accueil du constructeur offre trois entrées : « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection ». Il liste des modèles « Starting at » de 1 169 à 1 940 $ et 13 styles.
- [V] « Design with our Studio Collection » ouvre un configurateur modulaire, contrôle actionné le 15/11. Les choix proposés :
  - origine du diamant (« Natural » ou « Lab Grown ») ;
  - forme du centre (10 formes, dont la marquise) et taille (1, 2, 3 ou 5 ct) ;
  - style de l'anneau (Classic, Knife Edge, Cathedral, Split, Twist) ;
  - côtés (Pavé, Channel, Prong, Plain, Beadset) ;
  - chaton (Basket, Diamond Basket, Hidden Halo, Bezel, Six Prong, Halo) ;
  - métal de l'anneau et métal du chaton, choisis séparément (or 14 k et 18 k en trois couleurs, platine) ;
  - gravure de 18 caractères en trois polices ;
  - alliance assortie.
- [V] La configuration par défaut s'intitule « Cathedral Plain Basket Lab Grown Diamond Setting in 14K Yellow Gold » et coûte « $1,426 (Setting Only) ». Le bouton d'action répète le prix : « Choose This Setting • $1,426 ». Un second bouton, « Design Inquiry », n'a pas été ouvert.
- [V] La configuration est écrite dans l'adresse (`#/ring/RB001-rosalie?dia_origin=LGN&dia_shape=RND&dia_size=200&style_code=CCD&pri_comp=PLN&sec_comp=CLP&pri_comp_metal=14-YG&sec_comp_metal=14-YG&bands=0`) : un lien suffit à la retrouver.
- [V] La vue principale est un cadre `https://3d.caratwise.com/` légendé « 360° Experience » et « Interactive Experience, Drag to Rotate ». Les vignettes ajoutent une vue portée à la main, des vues fixes et une vidéo.
- [V] Étape 2, « Choose Diamond » : « Diamond Inventory, Showing All (7,323) » pour un rond synthétique de 1,5 à 2,5 ct. Exemples : 1,94 ct D VVS1 à 2 085 $ ; 2,04 ct F VS1 à 3 670 $. Un onglet « Recommended Selection » propose une présélection. L'étape 3, « Complete Ring », n'a pas été ouverte.
- [I] Deux limites de ma lecture. Le cadre 3D est resté sur son indicateur de chargement dans le navigateur sans carte graphique : la 3D est attestée par le cadre et ses libellés, pas par une rotation observée. Les clics sur les options n'ont pas modifié l'état dans cette session : le recalcul du prix à chaque choix est une affirmation du fournisseur (« every choice updates in real time, including the price », https://www.caratwise.com/), non un constat.
- [I] Caratwise se présente comme un service qui relie le configurateur à une filière de production (« a connected workflow that brings CAD, setting, quality checks, finishing, and logistics into one process »). Les bagues de la « Studio Collection » seraient donc fabriquées par cette filière plutôt qu'à l'établi de Honolulu.
- [V] `/create-your-ring` : 1 366 montures à personnaliser, « Starting From 925.00 », filtres par forme, type, métal et pierre (dont « Lab-Grown Diamond »). `/engagement-rings` : 1 411 articles.
- [V] Sur-mesure (`/custom-engagement-rings-in-honolulu-hi`) : « Most of our custom engagement rings sit between $5,000 and $25,000 all-in », « every quote is itemized, and you approve every step before we cut metal ». Quatre étapes : consultation, dessin et CAO avec rendu 3D, validation d'une cire tenue en main, finition à la main à Honolulu. Délai de 6 à 10 semaines, 4 semaines en urgence. Pierres du client acceptées.
- [V] Diamants synthétiques certifiés « GIA or IGI » (`/lab-grown-diamonds`). Le pied de page prévient que les prix suivent le cours de l'or et peuvent changer sans préavis.
- [V] Le robots.txt fixe « Crawl-delay: 30 » et « Content-Signal: search=yes, ai-train=no, use=reference », et interdit les adresses à paramètres de filtre. Le délai a été respecté et ces adresses n'ont pas été appelées. Un bouton « TEXT US » ouvre une messagerie : non ouvert.

### 2. Debbie's Jewelry (Waipahu)

- [V] Adresse : 94-050 Farrington Highway, Suite B1-10, Waipahu, HI 96797. Maison familiale fondée en 1991. Source : https://debbiesjewelryhawaii.com/
- [V] La page d'accueil décrit l'atelier : « A manufacturing shop behind a family counter », « We melt and pour our own gold », « See it before it's made », avec la liste « Hand-drawn design · Hand engraving · 2D & 3D CAD · CNC · Wax & resin printing · Casting · Hand finishing ».
- [V] `/pages/design-your-heirloom` est un configurateur maison, contrôle actionné (pièce « Ring »). En tête : « Work down the page and the price updates as you go ». Les choix :
  - pièce (bracelet, bague, pendentif) ;
  - métal : l'or 14 k est chiffré en ligne ; l'or 10, 18 et 22 k, l'argent et le platine sont « quoted by the shop » ;
  - couleur, profil (« Barrel » ou « Flat »), largeur, épaisseur (« Heavier wears longer and costs more, because it is more gold ») ;
  - 28 motifs ou aucun, finition du motif, nom à graver, 5 styles de lettres, émail en 11 couleurs, bordure, gravure intérieure.
- [V] Des boutons insèrent les signes de l'hawaïen (ʻokina et voyelles longues) dans le texte à graver.
- [V] Un bloc « compare them at actual size » dessine les largeurs à l'échelle d'une pièce de 25 cents. Le visiteur peut étalonner son écran avec une carte bancaire (« Hold any bank or ID card against the outline and drag until they match »).
- [V] Le récapitulatif affiche « Estimated $590 » pour une bague en or jaune 14 k, profil bombé de 3 mm, épaisseur « Light », taille 7,5. La configuration est écrite dans l'adresse (`?piece=ring&karat=14&metal_color=Yellow&profile=barrel&width=3&ring_size=7.5…`).
- [V] La suite est annoncée sous « What happens next » :
  1. « You send this. Nothing is charged and nothing is cut. »
  2. L'atelier reprend contact et revoit le dessin, la taille, l'orthographe et le prix.
  3. « You approve the design… nothing is cut until you have signed it off. »
  4. « We send you a payment link. Pay online in your own time, or settle at the shop. »
  5. « We make it. 7–14 working days in our workshop, plus shipping. »
- [V] Les ventes sont fermes : ni remboursement ni échange sur les pièces finies, gravées ou mises à taille.
- [V] Le pied de page affiche les cours des métaux : « Gold $3,887.60 · Platinum $1,492.20 · Silver $48.65 ».
- [V] `/pages/diamond-search` : « Results - 163,893 Diamonds » en naturel, onglet « Lab Grown », prix dès 212 $ (0,26 ct J VS1, certifié IGI), bouton « Add to cart ». Le texte promet : « Every stone is inspected at our Hawaiʻi workshop before delivery ».
- [V] Pour la bague de fiançailles, le site assume de ne pas tout faire en ligne : « Choose or design the setting… This is the step an online builder cannot do ».
- [I] C'est l'acteur le plus proche de la promesse « l'atelier en direct » : atelier montré, prix estimé puis confirmé, paiement après validation. Il n'a ni 3D ni configurateur de bague de fiançailles.

### 3. No Ka ʻOi Jewelers (Kahului, Maui)

- [V] Adresse : 340 Hana Hwy, Kahului, HI 96732. Le site parle d'une maison familiale de Kahului, « over 25 years ». Site réalisé par Belgium Webnet (pied de page). Sources : https://nokaoijewelers.com/ et https://nokaoijewelers.com/contact
- [V] Le site est une application JavaScript : `curl` ne reçoit qu'une coquille de 1 204 octets. Les pages ont été lues avec un navigateur.
- [V] Accueil : « Create Your Own Diamond Ring », avec « Start with a setting » et « Start with a diamond ».
- [V] `/engagement-rings` affiche le fil « Design your own Diamond Engagement Ring : 1 Choose a Setting, 2 Choose a Diamond, 3 Complete Ring », 1 214 montures et des filtres (style, métal dont platine, forme, prix de 0 à 37 795 $). La première page de la liste porte la mention « Starting at $1500+ ».
- [V] Fiche d'une monture (`/ringsettingdetail/setting/oval-and-pear-three-stone-engagement-ring-z4571v90x70y4-50`) : « Email us for Price », « Starting at $1,500+ », « Center stone sold separately », choix de la taille, boutons « Inquire » et « Schedule an appointment ». D'autres montures ont un prix ferme (1 458 $, 1 975 $).
- [V] `/diamonds` : 2 631 diamants naturels de 0,40 à 10,18 ct et de 480 à 660 068 $, bascule « Earth-Mined / Lab-Grown ». Fiche d'un diamant (`/diamonds-details/351217`) : 0,40 ct coussin H VS1, GIA, 576 $, boutons « Add this diamond », « Add to cart », « View lab report ».
- [V] Aucun élément 3D sur les pages lues (ni `canvas`, ni `model-viewer`). Les images des diamants viennent d'un serveur tiers (`dnalinks.in/…/still.jpg`).
- [V] `/custom-design` : trois étapes, dont « We will present to you a Computer-Aided Design which will be a digital 3-dimensional representation of the final product ». Le formulaire n'a pas été rempli.
- [I] Le code de la page d'accueil contient un identifiant Square de type « sandbox ». Le paiement en ligne n'est peut-être pas en service ; non testé.

### 4. Royal Hawaiian Heritage Jewelry (Honolulu)

- [V] Adresse : 1130 Bishop Street, Honolulu, HI 96813. Source : https://royalhawaiianheritagejewelry.com/
- [V] La fiche « Custom Hawaiian Heirloom Ring » sert de configurateur. Les choix : largeur (6, 8, 10, 12 mm), métal (or 14 k jaune, blanc ou rose, argent), épaisseur (Light à Extra Heavy), taille (3,5 à 15), motif (12 motifs), bord, nom à graver, type de lettrage, fond du lettrage, message intérieur de 20 caractères.
- [V] Le prix se recalcule, contrôle actionné : 1 020 $ à l'ouverture, 2 055 $ après « 12 mm », 2 866 $ après « Extra Heavy ».
- [V] Un bouton « Preview Engraving » et un `canvas` de 800 × 600 (`previewCanvas`) donnent un aperçu du lettrage, avec trois polices.
- [V] Conditions à cocher avant l'achat : vente ferme, aucune modification après la commande, « engraving may vary slightly from samples and previews », fabrication en « approximately 3-6 weeks », service accéléré possible.
- [V] « Hand engraved in our Honolulu factory » ; « For over 50 years our Kama'aina (local) company… ». Un bouton « Text Us Now » n'a pas été ouvert.
- [I] D'après un extrait de recherche de l'ancienne fiche (`/custom-hawaiian-heirloom-ring/`), l'or 18 k et le platine se commandent sur demande, et le prix de départ y était de 750 $.

### 5. Kauai Custom Jewelry (Kauai)

- [V] Pas de boutique : « Kauai Custom Jewelry operates 100% by appointment only, through virtual video appointments and one-on-one coffee appointments ». Les fondateurs vivent sur la rive sud. Le fondateur dirige aussi une société de logiciel et de marketing pour bijoutiers. Source : https://www.kauaicustomjewelry.com/pages/our-story
- [V] `/pages/custom-ring-builder` charge le script `https://myjeweler.ai/embed/kauai-custom-jewelry.js`. Ce script (lu, chemin autorisé) monte dans la page le constructeur hébergé à `https://myjeweler.ai/kauai-custom-jewelry/builder`, derrière un bouton « Design Your Ring ».
- [V] Le robots.txt de myjeweler.ai interdit `/*/builder`, `/widget` et `/api/`. Le constructeur n'a donc pas été ouvert.
- [V] `/pages/wedding-band-builder` intègre le cadre `https://kauaicustomjewelry-frame-categoryembed.jewelershowcase.com/band-builder`. Le robots.txt de cet hôte dit « User-agent: * Disallow: / » : non lu.
- [I] Jeweler Showcase est le service de vitrine du grossiste Stuller (connaissance générale, non revérifiée). MyJeweler.ai se présente comme « The operating system for custom jewelers » (https://myjeweler.ai/).
- [V] Sur-mesure (`/pages/engagement-rings`) : aucun acompte pour commencer, CAO et pierre centrale présentées avant le paiement, « custom engagement rings start around $4,000 with lab grown diamonds », 5 à 6 semaines après validation, diamants naturels ou synthétiques, pierres de famille acceptées sous conditions.
- [V] Critères de sélection annoncés : « Beyond-Ideal Cut, G or better color, and VVS or better clarity ». Livraison assurée à l'adresse du client.
- [I] C'est le modèle le plus léger du classement : pas de stock, pas de boutique, tout par visioconférence, des outils loués. La transformation de bijoux de famille est mise en avant (« Transform an Existing Piece »).

### 6. Robert Palma Designs (Honolulu)

- [V] Adresse : 1750 Kalakaua Ave, Suite 3702, Century Center, Honolulu. Source : https://www.robertpalmadesigns.com/
- [V] Constructeur d'alliance : page « Lashbrook Ring Builder - Robert Palma Designs ». Adresse de départ donnée par l'accueil : `https://www.robertpalmadesigns.com/apps/robert-palma-designs/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE`.
- [V] Ce constructeur résume la configuration (matière, forme, poids, finition, gravure, taille), donne un délai d'expédition et un prix : « Done - $3,200.25 » pour un anneau bombé de 7 mm en or blanc 14 k. Matières proposées : or de 10 à 22 k, platine, palladium, titane, tantale, météorite, fibre de carbone, acier damassé.
- [V] Les liens « design your own ring » de l'accueil sont en partie cassés : `/apps/design-your-own-ring/setting` renvoie à la liste générale des collections ; `/apps/design-your-own-ring/lab-diamonds` renvoie à `/pages/diamond-search`.
- [V] `/pages/diamond-search` : filtres « Natural » ou « Lab Created », curseur de prix de 60 à 54 832 $. La liste affichait « Results (0) » pendant ma lecture.
- [V] Collection « Build an engagement ring » : 118 articles, dont 108 montures sans pierre centrale, jusqu'à 19 500 $.
- [V] Sur-mesure : consultation gratuite, CAO modifiable, puis « a 3D wax model will be printed », fonte, sertissage. L'accueil annonce un atelier sur place (« our Honolulu jewelry workshop ») et des prix de gros.

### 7. Maui Divers Jewelry (Honolulu)

- [V] « Design House » au 1520 Liona St, Honolulu, HI 96814 : « the only Hawaiian jewelry manufacturing tour in the state of Hawaiʻi », visite gratuite de 30 minutes sur réservation, salle d'exposition, bar à perles. Source : https://www.mauidivers.com/pages/design-center
- [V] Collection `/collections/hawaiian-wedding-rings` : solitaires « Living Heirloom » et « Maile » à diamant synthétique de 3 995 $ (1,01 ct) à 6 495 $ (2,03 ct), alliances de 795 à 2 795 $.
- [V] Fiche du solitaire Maile de 2,03 ct : couleur E, pureté VVS2, taille « Ideal », « IGI Certified, Paperwork included », or jaune 14 k, « Exclusively Made in Hawaiʻi », tailles 5 à 9, garantie « Forever Guarantee », retour sous 30 jours, mention du droit de rétractation de 14 jours pour l'Union européenne.
- [I] Pas de configurateur, mais la preuve de fabrication la plus forte du territoire : l'usine se visite.

### 8. Greenleaf Diamonds (Wailea, Maui)

- [V] Adresse : The Shops at Wailea, 3750 Wailea Alanui Dr, Ste B26-A, Wailea, HI 96753. « Every piece on this site is in the case at the Shops at Wailea. » Source : https://greenleafdiamonds.com/
- [V] `/pages/custom-design` : « pieces are made in our Los Angeles studio » ; quatre étapes (« Sit down, Design it, Made, Fitted ») ; « The piece is made once the design and the price are agreed, and not before » ; cinq points de départ possibles, dont « A stone you already own » et « A piece you never wear ».
- [V] Une page est consacrée à la refonte d'un bijou existant (`/pages/redesign`, non lue), avec une rubrique sur le vieil or. Une présentation par vidéo est proposée (« We can show you rings over video »).
- [V] Prix affichés sur `/pages/engagement-rings` : 46 800 $ (2,00 ct rond F SI1, or blanc 14 k), 34 800 $, 10 726 $.
- [S] Aucune mention de diamant synthétique relevée sur les pages lues.

### 9. Happy Laulea (Honolulu)

- [V] Salle d'exposition à Waikiki, sur rendez-vous (Honolulu, HI 96815). Source : https://www.happylaulea.com/
- [V] `/products/custom-ring-order` : 395 $ au départ ; largeur de 2 à 8 mm ; or 10, 14 ou 18 k ; taille. Les autres options (motif, forme, bord, couleur de l'or, gravure) viennent d'une application de personnalisation chargée par script (`productcustomizer.com`) ; elles apparaissent dans l'extrait de recherche de la page et n'ont pas été actionnées.
- [V] « All of our gold, silver and platinum jewelry is handcrafted to order in Honolulu, Hawaii. » Livraison FedEx en 2 jours, garantie à vie.
- [V] Collection `/collections/create-your-couples-ring` : composition d'une paire avec « 15%OFF » appliqués au paiement.
- [I] L'offre vise l'alliance et la bague gravée à petit prix (argent, titane, koa). Le diamant y est marginal.

### 10. Helen and David's Hawaiian Heirloom (Honolulu)

- [V] Adresse : 130 N King St, Honolulu, HI 96817. L'accueil affiche « Today's Gold Price: $3,883.40 per oz. ». Source : https://helenanddavidjewelry.com/
- [V] Fiche « Hawaiian Heirloom Rings » (WooCommerce) : métal (or 14 k en trois couleurs, argent), largeur de 5 à 18 mm, épaisseur, taille, 16 motifs, bord, lettrage, fond, motif d'accompagnement ; gravure intérieure sans supplément ; « Price range: $590.95 through $2,352.72 ».
- [V] Contrôle actionné : 590,95 $ en or jaune 14 k de 5 mm, 1 022,48 $ en 10 mm.
- [I] Les prix au centime près et le cours affiché suggèrent des prix indexés sur l'or. La règle n'est pas publiée.

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Diamond Guy Hawaii | Honolulu | https://diamondguyhawaii.com/ | [V] Créateur privé, sans boutique ni stock : demande par e-mail (style, budget, date), acompte de 50 %, 6 à 8 semaines, première mise à taille offerte, expédition assurée hors d'Hawaï. Alliances dès 1 600 $, bagues de fiançailles dès 5 000 $ environ. Huit modèles maison personnalisables. Ni configurateur ni prix par article. |
| Hawaii Titanium Rings | Kailua-Kona (île d'Hawaï) | https://www.hawaiititaniumrings.com/ | [V] 73-5617 Maiau St #5. Anneaux en titane à incrustation de bois, de pierre ou d'opale, faits à la commande sur place, prix affichés (402,50 à 460 $ pour les premiers articles à diamant). Sur-mesure sans supplément, par téléphone ou par note à la commande. Hors du cœur de l'offre de JR Diamond. |
| Na Hoku | Honolulu [S] | https://www.nahoku.com/ | [V] « Hawaii's Finest Jewelers Since 1924 ». Collection « Wedding and Engagement Rings » de 62 bagues à prix affiché, jusqu'à 32 800 $. Nom gravé sur les bijoux hawaïens, gravure offerte. Pas de configurateur. |
| Solitaire Jewelers | Honolulu | https://www.solitairejewelers.com/pages/design-your-own | [V] Century Center, 1750 Kalakaua Ave #105. La page « Design Your Own » décrit un outil visuel utilisé en boutique, pas un outil en ligne. Diamants certifiés GIA à prix affiché (2 600 à 21 400 $ en tête de liste). |
| House of Diamonds Hawaii | Honolulu | https://houseofdiamondshawaii.com/pages/custom-jewelry | [V] 1357 Kapiolani Blvd, Suite 1440, depuis 1984. Sur-mesure en 3 étapes : maquette CAO et devis à approuver, 4 à 8 semaines. Diamants naturels et synthétiques. [I] Prix sur demande (« Click to request price », extrait de recherche). |
| Pacific Diamond | Honolulu et Aiea | https://www.pacificdiamond.us/product-category/rings/engagement-rings/ | [V] Catalogue de 1 474 montures (marques Romance et Lavie) sans prix : chaque article renvoie à « Read more ». |
| Honolulu Jewelry Company | Honolulu [S] | https://honolulujewelrycompany.com/custom-design-form/ | [V] Bijoux hawaïens faits main « since 1981 », boutique en ligne à prix affichés (1 299,50 et 2 339,10 $ en page d'accueil). Formulaire de sur-mesure pour bague de fiançailles ou alliance, avec tranches de budget (« Up to $5000 » à « $30000 and up »), non rempli. |
| Lovin Hawaii | Hawaï (ville non relevée) | https://lovinhawaii.com/pages/design-your-own-ring | [I, extraits de recherche] Alliances hawaïennes en or 14 k faites à la commande (935 $ en 10 mm), expédiées en 5 jours ouvrés ; la page « Design Your Own Ring » décrit un échange par téléphone ou par e-mail. Seuls l'accueil et le robots.txt ont été lus. |
| Kona Diamond Co. | Kailua-Kona (île d'Hawaï) | https://konadiamondco.com/ | [V] Boutique WooCommerce de bijoux hawaïens ; la catégorie des bagues de fiançailles ne compte que 5 articles ; sur-mesure annoncé en une phrase. |
| Big Island Jewelers | Kailua-Kona (île d'Hawaï) | https://www.bigislandjewelers.com/ | [V] Site vitrine « Made in Hawaii Jewelry » avec une boutique ; rien sur la bague de fiançailles en page d'accueil. |
| Philip Rickard | Honolulu [S] | https://www.philiprickard.com/ | [V] Menu de bagues de fiançailles classées par taille de doigt (une collection par taille) : stock de pièces uniques plutôt que configurateur. Pages produit non lues. |
| Jim Saylor Jewelers | Kapaa (Kauai) | https://www.jimsaylorjewelers.com/ | [V] « Master Goldsmiths on Kauai Since 1976 », atelier sur place, créations sur mesure ; pas de parcours de vente en ligne repéré en page d'accueil. |
| Luna Jewels | Honolulu | https://www.lunajewels.com/ | [V] Site daté (« © 2009 »), sur-mesure par CAO annoncé. [I] L'annuaire The Knot lui attribue un bouton « Design Your Ring with Jeweler AI » qui n'apparaît pas sur le site. |
| W.J. Irish Fine Jewelry | Honolulu | https://wjirish.com/ | [V] Page unique sans catalogue. [I] Le constructeur de bague associé à son nom est celui de l'annuaire StoneAlgo. |

## Écartés

- [V] Kay (boutique de Hilo trouvée par la recherche) : enseigne de Signet, exclue par la consigne. [S] Ben Bridge, Zales et les autres chaînes présentes dans les centres commerciaux d'Honolulu : même motif, non recherchées.
- [I] Venazia (pages « … Honolulu, HI ») : pages locales de référencement d'un vendeur en ligne qui se dit national. Whiteflash (page « Diamond Engagement Rings Honolulu ») : vendeur en ligne national.
- [I] Minter & Richter, Rustic & Main, Jewelry by Johan : anneaux en bois de koa vendus en ligne par des ateliers dont rien n'indique qu'ils sont établis à Hawaï.
- [I] Annonces Walmart et Etsy de vendeurs d'Honolulu, StoneAlgo, The Knot, WeddingWire, Poyst, Willyou : places de marché et annuaires, utilisés seulement pour repérer des noms.

## Enseignements pour JR Diamond

- [I] Le parcours « devis, prix confirmé, lien de paiement » existe déjà chez un atelier comparable (Debbie's), avec la formule « Nothing is charged and nothing is cut ». C'est le parcours que recommande `docs/PAIEMENT.md`. Le délai de 14 jours ouvrés de JR Diamond tient la comparaison : Debbie's annonce 7 à 14 jours ouvrés pour une alliance gravée, les autres de 3 à 10 semaines.
- [I] Trois idées de Debbie's sont reprenables sans 3D : l'affichage à taille réelle étalonné avec une carte bancaire ; la configuration écrite dans l'adresse, donc partageable ; des boutons pour saisir les signes propres à une langue dans le texte à graver. L'équivalent pour JR Diamond serait la gravure en hébreu.
- [I] L'alliance hawaïenne gravée est le pendant local de l'alliance de kiddouchin : un anneau codé par une tradition, personnalisé en ligne avec un prix qui suit la largeur et l'épaisseur du métal. Les trois ateliers lus la vendent sans 3D, avec une photo et des listes d'options.
- [I] Le configurateur 3D de The Wedding Ring Shop est loué à un fournisseur qui apporte aussi la production. Ce que le client voit est un modèle générique assemblé, pas le fichier de fabrication de l'atelier local. La promesse « ce que vous voyez existe » reste donc un point de différence.
- [I] La transparence sur le prix prend ici trois formes : cours des métaux affiché (Debbie's, Helen and David's), devis détaillé poste par poste (The Wedding Ring Shop), prix convenu avant fabrication (Greenleaf, House of Diamonds). Aucun acteur lu n'explique la composition de son prix en ligne.
- [I] La fabrication se montre peu en images. Maui Divers fait visiter son usine ; Debbie's décrit ses postes ; Diamond Guy envoie des photos de la pièce finie avant l'expédition. Aucun site lu ne promet de photos ou de vidéos de la fabrication du bijou du client.

## Sources

Pages lues le 15/11/2026, avec `curl` sauf mention « navigateur » :

- The Wedding Ring Shop : https://www.weddingringshop.com/ ; https://www.weddingringshop.com/design-your-own (navigateur, étapes 1 et 2 du constructeur) ; https://www.weddingringshop.com/create-your-ring ; https://www.weddingringshop.com/custom-engagement-rings-in-honolulu-hi ; https://www.weddingringshop.com/lab-grown-diamonds ; https://www.weddingringshop.com/engagement-rings ; https://www.weddingringshop.com/our-difference ; https://www.weddingringshop.com/robots.txt ; fournisseur : https://www.caratwise.com/ et https://caratwise.com/robots.txt
- Debbie's Jewelry : https://debbiesjewelryhawaii.com/ ; https://debbiesjewelryhawaii.com/pages/design-your-heirloom (navigateur) ; https://debbiesjewelryhawaii.com/pages/diamond-search (navigateur) ; https://debbiesjewelryhawaii.com/robots.txt
- No Ka ʻOi Jewelers (navigateur) : https://nokaoijewelers.com/ ; https://nokaoijewelers.com/engagement-rings ; https://nokaoijewelers.com/ringsettingdetail/setting/oval-and-pear-three-stone-engagement-ring-z4571v90x70y4-50 ; https://nokaoijewelers.com/diamonds ; https://nokaoijewelers.com/diamonds-details/351217 ; https://nokaoijewelers.com/custom-design ; https://nokaoijewelers.com/contact ; https://nokaoijewelers.com/robots.txt
- Royal Hawaiian Heritage Jewelry : https://royalhawaiianheritagejewelry.com/ ; https://royalhawaiianheritagejewelry.com/products/custom-hawaiian-heirloom-ring (navigateur) ; https://royalhawaiianheritagejewelry.com/robots.txt
- Kauai Custom Jewelry : https://www.kauaicustomjewelry.com/ ; https://www.kauaicustomjewelry.com/pages/custom-ring-builder ; https://www.kauaicustomjewelry.com/pages/wedding-band-builder ; https://www.kauaicustomjewelry.com/pages/custom-jewelry-design ; https://www.kauaicustomjewelry.com/pages/engagement-rings ; https://www.kauaicustomjewelry.com/pages/our-story ; https://www.kauaicustomjewelry.com/pages/schedule-an-appointment ; https://www.kauaicustomjewelry.com/robots.txt ; tiers : https://myjeweler.ai/embed/kauai-custom-jewelry.js ; https://myjeweler.ai/ ; https://myjeweler.ai/robots.txt ; https://kauaicustomjewelry-frame-categoryembed.jewelershowcase.com/robots.txt
- Robert Palma Designs : https://www.robertpalmadesigns.com/ ; le constructeur d'alliance cité dans la fiche (navigateur) ; https://www.robertpalmadesigns.com/pages/diamond-search (navigateur) ; https://www.robertpalmadesigns.com/collections/build-an-engagement-ring ; https://www.robertpalmadesigns.com/pages/custom-jewelry-design ; https://www.robertpalmadesigns.com/apps/design-your-own-ring/setting (redirigée) ; https://www.robertpalmadesigns.com/robots.txt ; https://ringdesignersstudio.com/robots.txt
- Maui Divers Jewelry : https://www.mauidivers.com/ ; https://www.mauidivers.com/pages/design-center ; https://www.mauidivers.com/collections/hawaiian-wedding-rings ; https://www.mauidivers.com/products/maile-lab-grown-diamond-engagement-ring-14k-gold-008-20203 ; https://www.mauidivers.com/robots.txt
- Greenleaf Diamonds : https://greenleafdiamonds.com/ ; https://greenleafdiamonds.com/pages/custom-design ; https://greenleafdiamonds.com/pages/engagement-rings ; https://greenleafdiamonds.com/collections/engagement-rings ; https://greenleafdiamonds.com/robots.txt
- Happy Laulea : https://www.happylaulea.com/ ; https://www.happylaulea.com/products/custom-ring-order ; https://www.happylaulea.com/collections/create-your-couples-ring ; https://www.happylaulea.com/robots.txt
- Helen and David's : https://helenanddavidjewelry.com/ ; https://helenanddavidjewelry.com/product/hawaiian-heirloom-rings/ (navigateur) ; https://helenanddavidjewelry.com/robots.txt
- Non classés : https://diamondguyhawaii.com/ , `/process/`, `/signature-collection/`, `/faq/` ; https://www.hawaiititaniumrings.com/ , `/pages/request-custom-order`, `/collections/custom-diamond-rings` ; https://www.nahoku.com/ , `/collections/engagement-wedding-jewelry`, `/pages/hawaiian-heirloom-jewelry` ; https://www.solitairejewelers.com/ , `/pages/design-your-own`, `/collections/diamonds-hawaii`, `/collections/engagement-rings-hawaii` ; https://houseofdiamondshawaii.com/ , `/pages/custom-jewelry` ; https://www.pacificdiamond.us/ , `/product-category/rings/engagement-rings/` ; https://honolulujewelrycompany.com/ , `/custom-design-form/`, `/Hawaiian-Jewelry/wedding/` ; https://lovinhawaii.com/ ; https://konadiamondco.com/ , `/custom-design/`, `/product-category/engagement-rings/` ; https://www.bigislandjewelers.com/ ; https://www.philiprickard.com/ ; https://www.jimsaylorjewelers.com/ ; https://www.lunajewels.com/ ; https://wjirish.com/ ; robots.txt de chacun de ces sites (absent chez wjirish.com : 404).

Recherches web génériques (extraits de résultats ; ils ont servi à repérer les noms et sont cités comme [I] quand la page n'a pas été relue) :

- « Hawaii jeweler "design your own" engagement ring online ring builder Honolulu » ; « Honolulu custom engagement rings jeweler lab grown diamonds online shop prices » ; « Maui OR Kauai OR Kona custom engagement ring jeweler CAD 3D design online store » ; « Hawaiian heirloom wedding band customize online width engraving design price builder » ; « Hawaii titanium koa wood wedding rings custom ring designer online made in Hawaii » ; « engagement rings Honolulu jeweler "start with a setting" OR "start with a diamond" OR "ring builder" Hawaii ».
- « Honolulu jeweler design your own engagement ring online » ; « Hawaii jeweler ring builder lab grown diamonds » ; « Maui jeweler custom engagement ring online configurator » ; « Kauai custom jeweler engagement rings CAD » ; « Kailua-Kona jeweler custom engagement rings online » ; « Hilo jeweler engagement rings wedding bands shop online » ; « Hawaiian heirloom ring custom order online builder » ; « Luna Jewels Honolulu custom engagement rings official site » ; « House of Diamonds Hawaii Kapiolani engagement rings » ; « Pacific Diamond Wedding Rings Honolulu official site » ; « W J Irish Fine Jewelry Honolulu ».
