# Inventaire Bulgarie : joailliers en ligne (bagues de fiançailles, alliances)

Date : 15/11/2026 (exploration). Territoire : Bulgarie. Explorateur : Bulgarie (marché Europe).
Légende : **[V]** vérifié (page lue ou contrôle actionné, avec l'adresse) · **[I]** inféré · **[S]** supposé.
Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun bulgare) sans le refaire.

## Constat d'ensemble

- Le marché bulgare compte **un seul vrai configurateur** par pierre, forme, carat et or : **Hamzare** (Sofia) [V]. Les autres vendeurs ont des catalogues à modèles fixes, quelques variantes de couleur d'or ou d'origine de la pierre, et du sur mesure par devis [V].
- **Terme pour le diamant synthétique** : les sites bulgares écrivent presque tous « лабораторен диамант » (diamant de laboratoire) ou « лабораторно отгледан » (cultivé en laboratoire) ; « lab-grown » apparaît entre parenthèses. Le mot « синтетичен » n'apparaît pas sur les pages lues [V : Hamzare, MI Diamonds, Valentin, Secret Diamond Club, Kuiumdjiev, Glamira.bg]. MI Diamonds emploie « синтезирани » une seule fois dans sa FAQ pour décrire le procédé HPHT/CVD [V]. La règle bulgare n'a pas été recherchée (hors périmètre) [S].
- Seul MI Diamonds (14 jours, sur mesure exclu « selon la loi bulgare ») et Hamzare (14 jours conditionnels, gravure personnalisée exclue) publient leurs conditions de retour [V].
- 77 Diamonds (déjà au n° 8 de l'inventaire européen) sert aussi une version bulgare (`/bg/-godezhni-pr-steni`, 87 résultats, prix hors TVA en dollars) : non recompté ici [V].
- Glamira.bg : version bulgare d'une marque internationale à configurateur ; le `robots.txt` répond 403 : site **bloqué** pour nos outils [V].

## Tableau

Contrôle d'adresse du 15/11 : `curl` avec en-tête Safari et `robots.cjs`. Toutes les adresses répondent 200 sauf mention.

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | **Hamzare** (Solaris Circle EOOD) | Sofia (showroom bd Al. Stamboliyski 84-86) [V] | https://www.hamzare.com/ | https://www.hamzare.com/collections/engagement-rings (fiche à configurateur : https://www.hamzare.com/products/solitaire-ring-3) | **Oui** : forme (8), carat, or 9 k/14 k, couleur d'or, origine naturel/synthétique, taille ; prix et SKU en direct, URL partageable [V] | Aucun. `robots.txt` : `Allow: /` pour tous, interdit aux robots d'entraînement d'IA (ClaudeBot, GPTBot…) ; `/cart/add` interdit [V] | BG, EN [V] | Seul configurateur bulgare ; prix par carat affichés ; IGI ou GIA ; délai et retours annoncés sur la fiche |
| 2 | **MI Diamonds** (MI DIA EOOD) | Sofia [I] | https://www.midiamonds.eu/ | https://www.midiamonds.eu/collections/engagement-rings (fiche : https://www.midiamonds.eu/products/arcus-trellis-solitaire-round-diamond-050ct-engagement-ring-14k-white-gold) | Non : 200 modèles fixes, bascule naturel/synthétique et couleur d'or sur la fiche ; liste de personnalisations par devis [V] | Aucun. Shopify : `/cart/` et `/checkouts/` interdits [V] | BG, EN [V] | Même bague en naturel et synthétique avec deux prix (1 805 € / 977 €) ; 12 mois de garantie ; Econt, livraison gratuite UE |
| 3 | **Valentin Gold & Diamonds** | Sofia (3 boutiques en centres commerciaux) [V] | https://valentin.bg/ | https://valentin.bg/product-category/engagement-rings-lab-diamond/ (72 modèles synthétiques) | Non : modèles à variantes [V pour les catégories, I pour les variantes] | Aucun | BG, EN [V] | Plus grande marque nationale (depuis 1986), atelier propre ; page de vérification des certificats ; catalogue synthétique de 72 bagues |
| 4 | **Secret Diamond Club** | Non vérifié | https://sediclub.com/ | https://sediclub.com/vash-dizain (redirection 301 depuis l'adresse testée) | Non : sur mesure avec visuel 2D/3D payant (90 BGN, déduits de la commande) [V] | Aucun | BG [V] | Parcours sur mesure en 3D proche de « ce que vous voyez existe » ; IGI et vidéo de la pierre envoyés avant achat [V] |
| 5 | **Duo Jewellery** | Sofia (bd Patriarh Evtimiy 25) [V] | https://duo.bg/ | https://duo.bg/categoriya-brachni-halki/ | Alliances : « Créez vos alliances » (matériau, profil, largeur, surface) annoncé ; page non ouverte [V pour l'annonce] | Aucun | BG [V] | Fabricant d'alliances : modèle en cire par alliance, « nous ne vendons que ce que nous avons fabriqué » |
| 6 | **Bimora** | Sofia [V] | https://www.bimora.com/ | https://www.bimora.com/ (devis) | Non : sur mesure avec 3D et offre de prix après devis, 2 à 4 semaines [V] | Aucun | BG [I] | Atelier de sur mesure ; parcours 3D → offre → fabrication |
| 7 | **Elite Precious** | Sofia (3 boutiques actives) [V] | https://www.eliteprecious.com/ | https://www.eliteprecious.com/category/265/godezhni-prasteni.html (390 modèles) | Non : filtres, remises de 20 % affichées [V] | Aucun | BG [I] | Gros catalogue à prix affichés, personnalisation sur demande, certificat |
| 8 | **Ringfinity** | Bulgarie (atelier) [V] | https://www.ringfinity.bg/ | https://www.ringfinity.bg/ | Non : sur mesure sur demande, or 14 k et 18 k, livraison gratuite [V] | Aucun | BG [V] | Fabrication bulgare à 100 %, bague sur projet |
| 9 | **Kuiumdjiev** | Non vérifié | https://kuiumdjiev.com/ | https://kuiumdjiev.com/ | Non : bagues en or et en argent, une bague synthétique marquise listée [V] | Aucun | BG, EN [I] | Motifs bulgares ; alliances « Kanatitsa » ; faible intérêt pour le modèle JR Diamond |
| 10 | **Diamonds Forever** (diamonds-forever.com ; version diamondsforever-bg.com) | Non vérifié | https://www.diamonds-forever.com/ | https://www.diamonds-forever.com/ | Non : modèles fixes, alliances « sur demande » sans prix [V] | Aucun | BG [V] | Catalogue naturel ; peu de services en ligne |
| — | Glamira.bg | — | https://www.glamira.bg/ | https://www.glamira.bg/venchalni-prasteni | Oui (configurateur d'alliances, 2 777 produits) [V par extrait] | **Bloqué : `robots.txt` illisible, HTTP 403** | BG | Marque internationale : hors audit, noté « bloqué » |

Aucun site de la liste, hors Hamzare, n'offre de 3D ou de 360° ; Hamzare lui-même montre des photos et des vidéos, pas un modèle 3D (voir `hamzare.md`) [V].

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots : **1. Hamzare** → `hamzare.md`, **2. MI Diamonds** → `mi-diamonds.md`.

## Sources

- Recherche web (15/11/2026) : requêtes en bulgare sur bagues de fiançailles, alliances, configurateur ; résultats et extraits : hamzare.com, midiamonds.eu, valentin.bg (+ `/contacts`), sediclub.com/vash-dizain, duo.bg, bimora.com, eliteprecious.com, ringfinity.bg, kuiumdjiev.com, diamonds-forever.com, diamondsforever-bg.com, glamira.bg/venchalni-prasteni, 77diamonds.com/bg.
- Adresses des boutiques : fiches Google Maps relevées par la recherche (Elite Precious, Valentin).
- Contrôles : `robots.cjs`, `curl` avec en-tête Safari (200 partout, 301 pour sediclub.com/vash-dizain, 403 pour glamira.bg), `controls.cjs` en navigateur sur Hamzare et MI Diamonds.
