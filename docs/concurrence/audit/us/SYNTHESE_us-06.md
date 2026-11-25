# Synthèse États-Unis, groupe us-06 : Montana, Nebraska, Nevada, New Hampshire, New Jersey

Date : 25/11/2026. Cette synthèse reprend les 20 audits du groupe (4 par territoire, rangs 1 à 4 de chaque inventaire) et les 5 `INVENTAIRE.md` des dossiers `montana/`, `nebraska/`, `nevada/`, `new-hampshire/`, `new-jersey/`.
Aucune page n'a été rouverte pour l'écrire : chaque fait vient du rapport cité, qui donne l'adresse lue. Audits datés du 15/11 ; plusieurs ont été exécutés ou rédigés le 25/11 selon leur en-tête.

Marques, reprises des rapports : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé · **[Inv]** fait tiré d'un `INVENTAIRE.md` ou d'une exploration antérieure, non revérifié par l'audit · **[index]** lu dans un extrait de moteur de recherche, pas sur le site.
Sans marque, un fait est [V] dans le rapport cité. Les « n/12 » portent sur les 12 sites audités en partie ; les 8 sites bloqués ne sont pas comptés. Le classement par impact est un jugement [I].
Temps mesurés depuis un centre de données, Chromium sans carte graphique, iPhone 13 émulé, une mesure par cas en général : ordres de grandeur.

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé (USD) | Rapport |
|---|---|---|---|---|---|
| Montana | L&M Fine Jewelry | partiel : designer 3D en erreur ; parcours iPhone non rejoué | assistant JewelerOS 4 étapes, 1re étape en 1,9 s (ordinateur) ; 3D jamais affichée (« Something went wrong ») malgré WebGL actif | aucun ; pas de panier (`/cart` en 404) | [rapport](montana/lm-fine-jewelry.md) |
| Montana | Goldsmith Gallery Jewelers | **bloqué** : robots.txt `User-agent: ClaudeBot` / `Disallow: /` | non audité | non audité ([Inv] 936 montures à prix, ex. 7 090 $) | [rapport](montana/goldsmith-gallery-jewelers.md) |
| Montana | Luxe Diamond Jewelers | partiel : widget Caratwise non cliqué (robots.txt de `release.caratwise.com` en 403) ; fiche et panier non atteints | widget Caratwise, boutons en 2,3 s (ordinateur) et 2,8 s (iPhone) ; 3D et vue main activées dans la configuration, non vues | « Starting at » 1 160 à 1 929 $ sur 8 modèles (pierre synthétique de 0,3 à 0,5 ct [I]) ; pas de décomposition | [rapport](montana/luxe-diamond-jewelers.md) |
| Montana | Yellowstone Jewelers | partiel : arrêt avant l'étape 4 (API JewelerOS interdite) ; panier interdit | assistant JewelerOS, 1,8 s (ordinateur) ; vignettes en or jaune seulement | aucun dans l'assistant ; catalogue de 1 529 bagues à prix (semi-monture 1 557 $) | [rapport](montana/yellowstone-jewelers.md) |
| Nebraska | Martin Jewelry | partiel : « Add to Cart » non cliqué (`/cart/add` interdit) ; devis et partage non cliqués | A : 3D ringfacet (orbite, zoom, « On hand »), modèle affiché en 12,4 s (ordinateur) et 28,9 s (iPhone) ; B : photos, 2,7 s et 4,5 s | A : « On request », suppléments +50 à +1 100 $ jamais additionnés ; B : monture 2 698 à 6 029 $, pierre dès 386 $ (synthétique) ou 1 410 $ (naturelle), sous-total 4 108 $ | [rapport](nebraska/martin-jewelry.md) |
| Nebraska | Sartor Hamann Jewelers | partiel : designer 3D non atteint (appel `/api/` bloqué) ; panier interdit | assistant JewelerOS, 1,7 s (ordinateur et iPhone) | aucun à aucune étape | [rapport](nebraska/sartor-hamann-jewelers.md) |
| Nebraska | Mikado Diamonds | partiel : parcours jusqu'à « ADD TO CART », non cliqué (`/cart` interdit) | photos et une vidéo par variante (servies par Stuller [I]) ; photo en 1,1 à 1,6 s (ordinateur), 0,9 s (iPhone) | Jacklynn : 1 445 $ (1 ct synthétique, 14 k), 18 k 1 830 $, platine 1 920 $, naturel 0,70 ct 2 195 $, 1 à 6 ct de 1 445 à 2 915 $ ; catalogue dès 995 $ | [rapport](nebraska/mikado-diamonds.md) |
| Nebraska | Borsheims | **bloqué** : robots.txt en 403 Cloudflare « Just a moment… » | non audité | non audité | [rapport](nebraska/borsheims.md) |
| Nevada | Michael & Son's Jewelers | partiel : designer 3D en erreur ; écart à robots.txt (voir section 5) ; panier interdit | assistant JewelerOS 4 étapes, 3,35 s (ordinateur) et 2,28 s (iPhone) | aucun dans l'assistant ; fiches non relevées ([Inv] 485 bagues à prix) | [rapport](nevada/michael-and-sons-jewelers.md) |
| Nevada | Sky Diamonds | partiel : pas de configurateur, la page mène à un rendez-vous ; fiches non auditées | aucun visualiseur en ligne, CAO montrée en magasin ; document en 0,75 s (ordinateur), 1re image en 2,6 s (iPhone) | sur mesure dès 1 800 $ ; fourchettes 1 800-4 700, 1 800-5 400, 2 800-7 800, 10 000 $+ ; −10 % si commande à la revue de la CAO | [rapport](nevada/sky-diamonds.md) |
| Nevada | Morgan Taylor Jewelers | partiel : « Add this setting » non cliqué (panier interdit) ; pages légales interdites | photos seules ; liste en 3,6 s, fiche en 4,8 s (ordinateur) et 4,7 s (iPhone) | monture seule : 14 k blanc 3 045 $, platine 3 729 $, 14 k jaune 2 841 $, 14 k rose 2 856 $ | [rapport](nevada/morgan-taylor-jewelers.md) |
| Nevada | Lyght Jewelers | **bloqué** : robots.txt en 403 | non audité | non audité ([Inv] 35 montures de 1 090 à 5 900 $) | [rapport](nevada/lyght-jewelers.md) |
| New Hampshire | Pearce Jewelers | partiel : styles non cliqués (API JewelerOS interdite) ; panier interdit | vignettes JewelerOS en 1,5 s (ordinateur) et 1,4 s (iPhone) ; photos sur les fiches | aucun : 318 bagues « Call for Price » | [rapport](new-hampshire/pearce-jewelers.md) |
| New Hampshire | Cardin Jewelers | **bloqué** : robots.txt en 403 « Verifying your connection... » | non audité | [index] montures 2 112 à 5 784 $ (14 k), alliances 615 à 885 $ | [rapport](new-hampshire/cardin-jewelers.md) |
| New Hampshire | White Box Jewelers | partiel : parcours jusqu'à « Review Your Ring » ; panier et retours interdits | photos de fournisseur, une par métal ; « 360° SETTING » sans lecteur ; liste 2,9 s, fiche monture 1,6 s, fiche diamant 1,3 s (ordinateur) et 1,0 s (iPhone) | monture 4 596 $ (14 k blanc) à 6 102 $ (platine) ; diamant synthétique 1,06 ct 534 $ ; total 5 130 $ | [rapport](new-hampshire/white-box-jewelers.md) |
| New Hampshire | Amidon Jewelers | **bloqué** : robots.txt en 403 « Verifying your connection... » | non audité | [index] bagues synthétiques de 2 450 à 5 430 $ | [rapport](new-hampshire/amidon-jewelers.md) |
| New Jersey | Hamilton Jewelers | **bloqué** : robots.txt en 403 | non audité | non audité ([Inv] 33 montures maison de 795 à 8 150 $) | [rapport](new-jersey/hamilton-jewelers.md) |
| New Jersey | Venus Jewelers | partiel : designer 3D non audité (appel `/api/` bloqué) ; panier interdit | assistant 4 étapes (ordinateur), 6 étapes avec bague qui tourne (iPhone) ; cartes en 2,3 s (ordinateur), bague vue vers 20 s (iPhone, mesure grossière) | aucun dans l'assistant ; stock 1 825 à 4 495 $ ; plusieurs « Call for Price » | [rapport](new-jersey/venus-jewelers.md) |
| New Jersey | Billig Jewelers | **bloqué** : robots.txt en 403 | non audité | [Inv] « Aria » 2 250 $ (1 ct synthétique, 14 k) à 5 250 $ (4 ct), +500 $ par demi-carat, platine +250 $ | [rapport](new-jersey/billig-jewelers.md) |
| New Jersey | Henry's Fine Jewelry | **bloqué** : robots.txt en 403 | non audité (outil 3D JewelerOS selon [Inv]) | [Inv] boutique de 1 166 à 1 830 $ | [rapport](new-jersey/henrys-fine-jewelry.md) |

## 2. Fonctions et options récurrentes

| Fonction ou option | n/12 | Sites (preuve dans le rapport du site) |
|---|---|---|
| Naturel et synthétique proposés | 12 | tous ; moissanite en plus chez Mikado ; Martin A (3D) : synthétique seul, naturel dans B. Libellé « Lab Grown » partout, jamais « synthetic » |
| Assistant JewelerOS (style, Natural / Lab Grown, forme, carat, délai souhaité, « Decide later ») | 6 | L&M, Yellowstone, Sartor Hamann, Michael & Son's, Pearce, Venus. Henry's selon [Inv] ; 6 joailliers du New Jersey chargent ce script [Inv] |
| … dont designer 3D vu derrière l'assistant | 0/6 | « Something went wrong » (L&M, Michael & Son's, avec échec CORS sur `jeweleros.com/api/`) ; arrêt volontaire avant l'appel interdit (Sartor, Venus, Yellowstone, Pearce). Cause réelle non tranchée [S] |
| 3D temps réel vue et manipulée | 1 | Martin A (ringfacet : orbite, rotation automatique, vue « On hand »). Bague qui tourne dans l'assistant iPhone de Venus. Annoncée sans être vue : Luxe (configuration Caratwise), « 360° SETTING » de White Box (aucun lecteur) |
| Constructeur « monture puis pierre » | 5 | Martin B, Mikado, Morgan Taylor, White Box, Luxe (non actionné). Départ possible par la pierre : Luxe, Mikado, Morgan Taylor, White Box (montures filtrées sur la forme du diamant) |
| Prix dans le parcours de conception | 5 | Martin B, Mikado, Morgan Taylor, White Box, Luxe (« Starting at »). Fourchettes de sur mesure sans parcours : Sky |
| … recalculé à chaque option | 3 | Mikado (métal, forme, carat, qualité, en ≈ 1 s), White Box (métal, type et taille de pierre), Morgan Taylor (par métal, en changeant de fiche) |
| … monture seule, pierre à part | 4 | Martin B, Morgan Taylor (« Center stone not included »), White Box, Yellowstone (catalogue). Total additionné : Martin B (2 698 + 1 410 = 4 108 $), White Box (534 + 4 596 = 5 130 $) |
| … écart affiché par option | 2 | Martin A (+50 $ à +1 100 $, +5 %, +10 %, jamais additionnés), Mikado (18 k +385 $, platine +475 $, Premium +50 $, Signature +180 $). Métal, façon, marge : 0/12 ; aucun site ne détaille le prix poste par poste (constats des inventaires du Montana, du Nebraska et du Nevada) |
| Aucun prix dans l'assistant ou l'outil 3D | 7 | L&M, Yellowstone, Martin A, Sartor Hamann, Michael & Son's, Pearce, Venus. Aucun prix de bague lu sur tout le site : L&M, Sartor Hamann, Pearce (« Call for Price ») |
| Or 14 k, or 18 k et platine dans le parcours | 5 | Luxe (API), Martin B (+ 10 k), Mikado, Morgan Taylor, White Box. Assistants JewelerOS : 3 couleurs sans titre ni platine (6) ; platine sur iPhone seulement chez Venus ; Martin A : 14 k et platine 950 |
| Visuel qui suit le métal | 6 | Mikado (vidéo par variante), White Box (photo par alliage), vignettes JewelerOS (Sartor, Michael & Son's, Pearce, Venus). Martin A : étiquette mise à jour. Image figée en or jaune : Yellowstone |
| Taille de doigt dans le parcours | 5 | Martin A et B (3 à 13, obligatoire en A), Mikado (3,5 à 11 au quart), Morgan Taylor (6 à 8 au quart), White Box (3 à 15,5). Luxe : 4 à 9 dans l'API, non vu |
| Gravure | 1 | Martin A (20 caractères, intérieur ou extérieur, 5 polices). Luxe : option dans la configuration, non vue |
| Partage de la conception | 4 | Mikado (configuration dans l'adresse), Morgan Taylor et White Box (Facebook, e-mail, WhatsApp, « Copy URL »), Martin A (« Save & Share Design », non cliqué) |
| Délai souhaité demandé au client | 4 | L&M, Sartor Hamann, Michael & Son's, Venus (« When do you need your ring? »). Étape non atteinte chez Yellowstone et Pearce |
| Délai de fabrication chiffré | 6 | Martin (2-3 semaines en ligne, 3-4 sur mesure), Mikado (« Ships By: December 17 – December 19 », 3 à 6 semaines), Sky (2-3 semaines), Luxe (7 jours à 6 semaines), Pearce (7-10 jours ouvrés catalogue, 4-6 semaines sur mesure), L&M (« a couple of weeks ») |
| Rendu CAO montré avant fabrication (promesse écrite) | 5 | Sky (CAO en 24-48 h, révisions illimitées), Mikado (« digital renderings », 199 $), Michael & Son's (CAO, impression 3D possible), Pearce (CAD), White Box (CAO 3D). Martin et L&M selon [Inv] |
| Retours avec exclusion écrite du sur mesure | 6 | Luxe, Yellowstone, Sartor Hamann, Michael & Son's, Sky, Venus. Amidon [index]. Non lu : Mikado, Morgan Taylor, White Box (pages interdites) |
| Financement | 8 | Luxe, Martin, Sartor, Mikado (Affirm, layaway), Sky (Synchrony, Affirm), Pearce (layaway), White Box (60 mois), Venus (0 % sur 6 et 12 mois) |
| Certificat de laboratoire sur la fiche de pierre | 3 | Martin B (GIA), White Box (rapport IGI), Mikado (IGI ou GIA par niveau de qualité) |
| Messagerie (texto, chat, WhatsApp) | 6 | Martin et Michael & Son's (Clientbook), Sartor et Venus (Podium), Mikado (Call/Text), White Box (bouton WhatsApp, message pré-rempli) |
| Pierre du client ou bijou de famille | 3 | Martin (formulaire sur mesure), Sky (FAQ), Pearce (« Heirloom Restoration & Redesign »). Cardin [index] |
| Avis affichés | 4 | Mikado (Google 5,0), Pearce (4,9 sur 286), Venus (10 avis de boutique), Sky (chiffres incohérents). L&M : deux extraits cités |
| Photos ou vidéos d'atelier, suivi de fabrication de la commande | 0 | aucun ; méthode décrite seulement (Michael & Son's, Pearce, Venus, White Box) |

## 3. Points forts à retenir pour JR Diamond, classés par impact [I]

1. **Prix qui bouge avec chaque option, avec l'écart lisible.** Mikado : 1 445 $ (14 k) → 1 830 $ (18 k) → 1 920 $ (platine), 1 à 6 ct de 1 445 à 2 915 $, mise à jour en ≈ 1 s ([rapport](nebraska/mikado-diamonds.md)). White Box : 4 596 $ (14 k blanc) → 6 102 $ (platine), puis type et taille de pierre ([rapport](new-hampshire/white-box-jewelers.md)). C'est l'écart principal avec le « Sur devis » de JR Diamond ; le moteur de prix de `src/lib/pricing/` calcule déjà ces écarts.
2. **Total monture + pierre qui se construit, avec « Change / View » par pièce.** Martin B : sous-total 4 108 $ = 2 698 + 1 410 ([rapport](nebraska/martin-jewelry.md)) ; White Box : 5 130 $ au récapitulatif ([rapport](new-hampshire/white-box-jewelers.md)). Seuls 2 sites sur 12 vont jusqu'au total, et aucun n'explique métal, façon et marge : la place du « prix expliqué » reste libre.
3. **Suppléments affichés option par option, même sans total.** Martin A : panier +50 $, halo +500 $, platine 950 +250 $, couleur E +5 %, pureté VVS2 +10 % ([rapport](nebraska/martin-jewelry.md)). Une forme simple de prix expliqué, possible avant que la grille des pierres arrive ; Martin ne les additionne pas, JR Diamond peut le faire.
4. **Sur mesure chiffré et daté sans configurateur.** Sky : « à partir de 1 800 $ », fourchettes par type de bague, CAO offerte en 24-48 h (« normally $300 »), révisions illimitées, calendrier jour par jour jusqu'à 2-3 semaines, paiement intégral, pas de retour après le début de la production ([rapport](nevada/sky-diamonds.md)). Modèle pour le parcours devis → prix confirmé de `docs/PAIEMENT.md` et pour les 14 jours ouvrés.
5. **Choix de la pierre en trois niveaux, avec la promesse de sélection.** Mikado : Classic F/VS2, Premium E/VVS2, Signature D/VVS1, IGI, plus « Choose Your Own » ; « a Mikado diamond specialist will select the individual diamond » ([rapport](nebraska/mikado-diamonds.md)). Répond à la peur de l'échange de pierre relevée dans les forums.
6. **Configuration dans l'adresse.** Mikado : `?metal=…&shape=…&carat=…&quality=…` ([rapport](nebraska/mikado-diamonds.md)) ; partage par WhatsApp et « Copy URL » chez Morgan Taylor et White Box. JR Diamond l'a fait le 24/11.
7. **Vue sur la main et tailles lisibles.** Martin A : « On hand » avec curseur de teinte de peau et zoom ; tableau US, UK, EU, diamètre, circonférence, taille choisie surlignée ; taille exigée avant de continuer ([rapport](nebraska/martin-jewelry.md)). À rapprocher du guide des tailles déjà en ligne.
8. **Contrôle annoncé avant l'envoi et délais séparés.** Martin : bagues inspectées par un représentant avant l'expédition ; 2-3 semaines (en ligne) contre 3-4 (sur mesure) ([rapport](nebraska/martin-jewelry.md)) ; Mikado : date « Ships by » calculée ([rapport](nebraska/mikado-diamonds.md)). Répond au délai qui glisse et au bijou différent de la CAO.
9. **Fiche technique chiffrée.** Morgan Taylor : 3,47 g de métal, épaisseur, rhodiage ([rapport](nevada/morgan-taylor-jewelers.md)) ; White Box : pierres secondaires détaillées (25 pierres, 0,293 ct, cotes en mm) ([rapport](new-hampshire/white-box-jewelers.md)). JR Diamond affiche déjà un poids de métal ± 5 % : le détail des pierres secondaires s'y ajouterait.
10. **Entrée guidée sans impasse.** Assistant JewelerOS : résumé « Halo | Oval | 0.5 carat », Back, Skip, « Decide later » ([rapport](nebraska/sartor-hamann-jewelers.md)) ; Venus sur iPhone : bague qui change à chaque choix, « Still needed : size », Next grisé tant qu'il manque une réponse ([rapport](new-jersey/venus-jewelers.md)). À reprendre sans la dépendance à un tiers (section 4).
11. **Politique du sur mesure et garanties écrites.** Sartor Hamann : 30 jours, port de retour payé, garantie de 12 mois, « special orders, custom and altered pieces are not returnable » ([rapport](nebraska/sartor-hamann-jewelers.md)) ; Mikado : garantie à vie, maintenance de 6 mois détaillée ([rapport](nebraska/mikado-diamonds.md)) ; Venus : 15 jours, sur mesure exclu ([rapport](new-jersey/venus-jewelers.md)). Matière pour la question « fabriqué sur mesure » de l'avocat.
12. **Naturel ou synthétique expliqué.** Pearce : tableau comparatif, « Typically 50 to 80 percent less than natural » ([rapport](new-hampshire/pearce-jewelers.md)) ; Mikado : même monture en synthétique, naturel ou moissanite, un SKU par origine. Proche du guide « synthétique ou naturel » de JR Diamond.

## 4. Défauts fréquents à éviter

- **Outil 3D loué qui n'aboutit pas.** JewelerOS : designer vu 0 fois sur 6 ; « Something went wrong » avec WebGL actif chez L&M et Michael & Son's. Martin A : 3D en 12,4 s sur ordinateur et 28,9 s sur iPhone (rendu logiciel). Cause possiblement liée à l'environnement d'audit [S], mais le visiteur reste sans rien si la panne est réelle.
- **Concevoir sans prix.** 7 outils sur 12 sans prix ; « Call for Price » sur 318 bagues (Pearce) ; total « On request » après plus de 30 clics (Martin A) ; prix seulement sur les pièces en stock (Venus, Yellowstone).
- **Deux outils pour un même achat.** Martin : la 3D sans prix ou le catalogue avec prix, jamais les deux ; Venus : 4 étapes sur ordinateur, 6 sur iPhone, platine seulement sur iPhone.
- **Une option qui en change une autre.** Mikado : passer en naturel ramène le carat de 1,00 à 0,70 ct, prix non comparable ; Morgan Taylor : « Lab Grown » change aussi la monture (poire 9×6 mm au lieu de ronde 6,5 mm).
- **Étapes vides ou muettes.** « 0 diamonds found » (Pearce, Venus) ; « Other Shape » vide la liste et le filtre de prix est incohérent (White Box) ; « ADD THIS SETTING » sans effet visible et pages garantie et services vides (White Box) ; constructeur d'alliance vide (Pearce) ; cartes grises (Luxe).
- **Textes contradictoires.** Délais : « a couple of weeks » contre « four to six weeks » (Pearce), 7 jours à 6 semaines (Luxe) ; avis « 500+ » contre « 2 000+ », deux codes postaux, financement expiré au 30/09/2026 (Sky) ; mesureur annoncé gratuit, vendu 2 et 6 $ (Mikado) ; GIA confondu avec l'IGI dans une légende (Luxe [Inv]).
- **Liens et contrôles morts.** « Visit Us » vers `#` (Michael & Son's) ; « Apply Now » qui mène au contact (Luxe) ; bannière cookies qui masque une carte (Michael & Son's, Pearce) ; pastilles de métal sans libellé et traceurs publicitaires nombreux (Sartor Hamann).
- **Vente hors ligne malgré l'outil.** Pierre choisie en boutique sur les assistants JewelerOS (L&M, Pearce, Michael & Son's) ; pas de panier chez L&M ; « Inquire » au lieu d'un ajout au panier (White Box) ; rendez-vous seulement (Sky) ; demande de devis (Martin A).
- **Image qui n'est pas la bague.** Photos de catalogue de fournisseur (White Box, Morgan Taylor [I]) ; « Sample Image » sur de nombreux diamants synthétiques (White Box) ; vidéos Stuller (Mikado [I]) ; 3D paramétrique d'éditeur (JewelerOS, ringfacet [I]).
- **Retours restrictifs ou coûteux.** Avoir en magasin seulement (Michael & Son's, Yellowstone) ; 7 jours de retour (Luxe), 15 jours aux frais du client (Venus) ; 10 % de frais sur les retours Affirm et remise visible seulement à la caisse (Mikado).
- **Rien sur l'atelier.** 12/12 sans photo ni vidéo de fabrication ni suivi de la commande ; 5 promettent pourtant un rendu CAO avant la fonte.

## 5. Couverture

- **Territoires sans site** : aucun. 5 territoires, 20 sites (rangs 1 à 4 de chaque inventaire).
- **Statuts** : 0 complet, 12 partiels, 8 bloqués (40 %).
- **Causes des audits partiels** :
  - designer 3D JewelerOS non atteint ou en erreur : L&M, Yellowstone, Sartor Hamann, Michael & Son's, Pearce, Venus ;
  - widget tiers non cliqué (robots.txt illisible) : Luxe, dont les options viennent des réponses de `storeapi.caratwise.com` appelées par la page à son ouverture ;
  - panier ou ajout au panier interdit par robots.txt : Yellowstone, Martin, Sartor Hamann, Mikado, Michael & Son's, Morgan Taylor, Pearce, White Box, Venus ; pas de panier chez L&M ;
  - pages de politique interdites : Mikado (`/policies/refund-policy`), Morgan Taylor, White Box ; conditions non lues chez Martin (accès refusé par l'outil) ;
  - pas de configurateur : Sky.
- **Bloqués** : Goldsmith Gallery (règle ClaudeBot ; l'outil `robots.cjs` ne lit que le groupe `*` et répond à tort AUTORISÉ, réponse non suivie : défaut de l'outil à corriger) ; Borsheims (Cloudflare) ; Lyght, Hamilton, Billig, Henry's (robots.txt en 403) ; Cardin, Amidon (403 « Verifying your connection... »). Aucun contournement.
- **Divergences avec les inventaires à trancher** : les inventaires du Nevada (24/11 : Lyght lu en 200) et du New Jersey (24/11 : Hamilton, Billig, Henry's sans blocage) contredisent les audits (403). [S] Même défi Shopify que celui des six sites du New Hampshire, que l'inventaire attribue peut-être à l'adresse du proxy de la session ; une visite à la main lèverait le doute.
- **Écarts à robots.txt à trancher par la session principale** :
  - Michael & Son's : le choix du délai a déclenché 3 fois `POST jeweleros.com/api/create/from-ring-config/` (interdit) avant le contrôle ; rien de plus ensuite. Signalé par le rapport ; le constat « designer en erreur » en dépend.
  - L&M : le même `POST` a été intercepté et annulé dans le navigateur avant envoi ; le message d'erreur peut venir de cette annulation [I] (le rapport note un échec CORS dès l'ouverture, avant tout clic).
  - Martin : appels `ringfacet.com/api/` (interdit) coupés dans le navigateur ; un `POST /api/events` (statistiques) « tenté puis refusé ». Aucun constat n'en dépend.
  - Sartor Hamann et Venus : appel bloqué avant envoi ; l'erreur affichée vient du blocage, pas du site.
  - Inventaires : Goldsmith touché une fois par redirection (contenu supprimé) ; boutique de D&R House of Diamonds ouverte une fois avant lecture de son robots.txt (`[P1]`, Nevada).
- **Sites des inventaires non audités** (rangs 5 à 10), dont des pistes [Inv] :
  - Montana : Diamond Dream (GemFind, 535 montures dès 1 670 $, 14 et 18 k, platine) ; Big Sky Brilliance (acompte de 100 $, 50 % à la validation du rendu, rendu en ≈ 1 semaine, 4-6 semaines, « between $3,000 and $8,000 ») ; Miller's (constructeur d'alliance AVA, MSRP) ; The Gem Gallery ; Alara ; Rogers & Co.
  - Nebraska : A. T. Thomas et Lovette (même module Caratwise, mêmes prix « Starting at » : prix du fournisseur [I]) ; Hériter Gems (CAO « from every angle », visio) ; Perspective (CAO faite avec le client, cire, fonte du platine à l'atelier) ; Wetzel & Truex ; Malashock (`/verify.html`).
  - Nevada : BVW (3 094 / 3 300 / 3 850 $ selon le métal) ; MJ Christensen (cire à essayer) ; Huntington ; D&R (boutique interdite) ; Forever Rox (critique les configurateurs) ; Honey & Goldies.
  - New Hampshire : Bellman (copie de la maquette remise au client, 2-3 semaines), Jewelry Creations, Richters, Exeter : tous bloqués en 403 ; Newbury (modèle 3D par e-mail, cire à essayer) ; Naser (`verify.html`).
  - New Jersey : Thomas Jewelers (grille métal × pierre, 745 à 1 160 $) ; Casale (3 000-7 000 $, 2-3 semaines) ; Prestige (catalogue 100 % synthétique étiqueté) ; Yanina, Salermo (JewelerOS) ; Corinne. Berman bloqué (503).
- **Limites communes** : une mesure de temps par cas, iPhone émulé dans Chromium (pas Safari), pas de GPU ; aucun paiement, chat, WhatsApp ni formulaire ; avis non recoupés ; alliance de kiddouchin non recherchée ; aucun site audité au complet.

- **Reprise du 25/11** : les sites marqués « bloqués » ici à cause du relais réseau ont été réaudités ; voir `SYNTHESE_us-reprise.md`, qui prime pour eux.
