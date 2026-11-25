# Synthèse Europe, groupe eu-6b : Saint-Marin (complément Lion Diamonds)

Date : 25/11/2026. Complément de `SYNTHESE_eu-6.md` (Liechtenstein, Saint-Marin), qui avait écarté Lion Diamonds comme « bloqué » à tort (voir son contrôle de la session principale). Ce groupe porte sur **1 audit** : Lion Diamonds (Dogana), fait le 15/11/2026 et relu le 25/11/2026. Sources : le rapport [lion-diamonds.md](saint-marin/lion-diamonds.md), l'[INVENTAIRE.md](saint-marin/INVENTAIRE.md) de Saint-Marin et, pour les comparaisons dans le territoire, les rapports [arzillishop.md](saint-marin/arzillishop.md) et [aquamarina-gioielli.md](saint-marin/aquamarina-gioielli.md), déjà synthétisés dans eu-6.
Aucune page n'a été rouverte pour écrire ce fichier : chaque fait vient du rapport cité, qui donne l'adresse lue et sa marque.

Marques : **[V]** vérifié dans le rapport (page lue ou contrôle actionné, adresse dans le rapport) · **[VR]** vérifié par extrait de recherche seulement (inventaire) · **[I]** inféré · **[S]** supposé. Les décomptes viennent du dépouillement des rapports ; le classement par impact est un jugement [I].
Temps d'affichage : un essai par appareil, réseau du bac à sable, bruité par les erreurs 502 : ordres de grandeur.

**En une phrase.** Lion Diamonds est le seul joaillier saint-marinais audité qui vende des bagues en diamant (solitaires, trilogies) ; c'est un catalogue WooCommerce sans configurateur, sans 3D ni personnalisation, dont l'intérêt pour JR Diamond tient en un point : **le prix de la bague change à l'écran selon le carat** (824 € à 11 830 € pour le même solitaire), alors que le serveur, instable, n'a pas laissé atteindre le panier [V, rapport].

## 1. Sites audités

| Territoire | Site | Statut | Visuel | Prix relevé | Rapport |
|---|---|---|---|---|---|
| Saint-Marin | Lion Diamonds, https://liondiamonds.it/ (WooCommerce + Elementor, italien) | **partiel** : robots.txt AUTORISÉ (seule règle gênante `/*?*add-to-cart=`) ; serveur instable (502 sur `/carrello/` le 15/11 et le 25/11, ajout au panier échoué trois fois, scripts de page qui ne chargent pas) ; panier, frais, délai, retours non vérifiés | **non publié** : une seule photo par fiche, zoom présent non testé ; ni 3D, ni 360°, ni vidéo [V] ; image principale 19,5 s sur iPhone 13 (fiche rubis), ordinateur non mesuré (502) ; chargement complet 12 à 30 s [V] | solitaire ENG12 : 824 € (0,05 ct), 1 609 € (0,25 ct), 11 830 € (1,00 ct) ; solitaires dès 621 € sur la catégorie ; bague rubis AC02 « From 2 589 € » [V] | [lion-diamonds.md](saint-marin/lion-diamonds.md) |

Rappel, déjà dans `SYNTHESE_eu-6.md` : ArzilliShop (partiel, bagues or 18 k 157,50 à 607,50 €, aucune bague à diamant en page 1) et Aquamarina Gioielli (partiel, 4 bagues Marco Bicego à diamants de 2 300 à 4 300 € affichés) [V, rapports]. Le territoire compte donc 3 audits, tous partiels.

## 2. Fonctions et options récurrentes

Colonne « Lion » : présent (1) ou absent (0) chez Lion Diamonds. Colonne « Saint-Marin (n/3) » : décompte sur les 3 audits du territoire (Lion, Arzilli, Aquamarina).

| Fonction ou option | Lion | Saint-Marin (n/3) | Détail et preuve |
|---|---|---|---|
| Configurateur, 3D, 360°, vidéo, sur mesure en ligne | 0 | 0 | aucun chez les trois [V] |
| Photo seule par article | 1 | 3 | Lion : une image par fiche (galerie ENG12) [V] |
| Prix affiché sans compte | 1 | 3 | Lion : « From € » sur les cartes, prix exact après choix du carat [V] |
| **Prix qui varie selon le carat sur la fiche** | 1 | 1 | Lion : pastilles Carati, appel `?wc-ajax=get_variation`, 32 valeurs de 0,05 à 1,00 ct (0,01 par 0,01 jusqu'à 0,30, puis 0,40 à 1,00) [V] |
| Filtre du catalogue par carat | 1 | 1 | Lion : « Filtra per carati » (0,05 à 0,70+), « Applica » non testé [V] |
| Couleur et pureté annoncées | 1 | 1 | Lion : F et VS, un seul choix chacun, sans effet sur le prix [V] ; absentes chez Aquamarina et Arzilli [V] |
| Certificats cités (IGI, GIA, HRD) | 1 | 1 | Lion, page Chi siamo, plus certification Kimberley pour le brut [V] ; aucun certificat sur une fiche lue [V] |
| Décomposition du prix (métal, pierre, façon) | 0 | 0 | aucune chez Lion [V] ; « or à poids » sans détail chez Arzilli [V] |
| Choix du métal, de la forme, de la taille de doigt, gravure | 0 | 0 en ligne | absents de la fiche Lion [V] ; gravure sur demande par contact chez Aquamarina [V] |
| Diamant synthétique ou libellé « synthétique » | 0 | 0 | Lion ne vend que des diamants naturels apparents [V] ; aucun libellé dans le territoire [V] |
| Diamants à l'unité, diamants d'investissement | 1 | 1 | Lion : sous-menus « Compra un diamante » (502 à l'ouverture), « Diamante in cartina », « Diamanti da investimento », stock « magazzino Belgio » [V pour les liens, non lus] |
| Pierres de couleur | 1 | 2 | Lion : rubis, trilogies et verettes à pierres colorées [V] ; Aquamarina : tourmaline, perle [V] |
| Wishlist | 1 | 1 | Lion, sur chaque carte et fiche, non testée [V] |
| Newsletter avec remise | 1 | 2 | Lion : coupon de 10 % [V] ; Aquamarina : −10 % [V] |
| Paiement par carte | 1 (I) | 3 | Lion : modules CartaSi X-Pay et PagoDIL chargés (V par requêtes réseau, moyens réellement proposés I) |
| Paiement fractionné | 1 (I) | 1 (I) | Lion : module PagoDIL chargé [V] ; offre réelle non vue au panier [I] |
| Rendez-vous en boutique | 1 | 1 | Lion : « si riceve su appuntamento », Via Tre Settembre 99, Dogana [V] ; pas de prise de rendez-vous en ligne [V] |
| Téléphone et e-mail visibles | 1 | 3 | Lion : en en-tête [V] |
| WhatsApp, chat, partage, comparateur, guide des tailles | 0 | 1 (WhatsApp, guide) | absents chez Lion [V] ; WhatsApp wa.me et guide des tailles chez Aquamarina [V] |
| Avis clients | 0 | 0 | [V] |
| Preuves de fabrication (photos, vidéos, suivi) | 0 | 0 | [V] |
| Délai, retours, garantie, livraison publiés | 0 trouvé | 2 | Lion : non trouvés sur les pages lues, aucune page de conditions au pied de page (Chi siamo, Rapaport, Privacy, Cookies) [V] |
| Langue et devise | italien, euro | 3 | italien seul chez les trois [V] |

## 3. Points forts remarquables à retenir pour JR Diamond (classés par impact)

Le groupe n'apporte aucun modèle de configurateur ni de 3D. Ce qui suit vient d'un catalogue de bagues en diamant [I].

1. **Prix de la bague affiché à l'instant où l'on change le carat** : Lion Diamonds, fiche `/prodotto/anello-solitario-brillante/` (ENG12), 824 € à 0,05 ct, 1 609 € à 0,25 ct, 11 830 € à 1,00 ct [V : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. C'est précisément l'écart principal de JR Diamond (« Sur devis ») ; le sélecteur de carat sur un solitaire est déjà prévu dès réception des éléments de l'atelier [I]. Le saut de prix entre 0,25 et 1,00 ct (× 7,4 pour × 4 en poids, calcul sur les chiffres relevés) montre ce qu'un affichage sans explication laisse au client [I].
2. **Qualité de pierre fixée et annoncée comme un standard** (couleur F, pureté VS, un seul choix) : Lion Diamonds, fiche ENG12 [V : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. Une seule qualité par défaut simplifie le choix et rend le prix comparable ; JR Diamond peut faire de même pour ses solitaires, avec la pierre filmée en plus [I].
3. **Origine et certificats racontés** : importateur présent chaque semaine à la bourse d'Anvers, certificats IGI, GIA ou HRD, Kimberley pour le brut (page Chi siamo) [V : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. Même argument que JR Diamond (Bourse de Ramat Gan, GIA/IGI dès 0,50 ct), mais sans preuve visuelle ni certificat sur la fiche : c'est l'espace que la vidéo de la pierre occupe [I].
4. **Repère de prix bas pour un solitaire en diamant naturel** : dès 621 € sur la catégorie Solitario, 1 609 € pour 0,25 ct [V : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. Point de comparaison pour le prix « à partir de » quand `src/config/pricing.ts` sera complet ; la fiche ne précise ni métal ni poids d'or, donc la comparaison reste approximative [I].
5. **Filtre du catalogue par carat** (0,05 à 0,70+) : Lion Diamonds, catégorie Solitario [V, application non testée : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. Utile si JR Diamond affiche plusieurs modèles en grille [I].
6. **Paiement fractionné probable** (module PagoDIL chargé) : Lion Diamonds [V pour le module, I pour l'offre : [lion-diamonds.md](saint-marin/lion-diamonds.md)]. À rapprocher de `docs/PAIEMENT.md` (paiements échelonnés en Israël) [I].

## 4. Défauts fréquents à éviter

| Défaut | Lion | Saint-Marin (n/3) | Preuve |
|---|---|---|---|
| Serveur instable, erreurs 502 | 1 | 2 | Lion : `/carrello/`, magazzino-belgio, fiche rubis sur ordinateur en 502, fiche ENG02 en 404 [V] ; Arzilli : deux 502 transitoires [V] |
| Chargement très lent | 1 | 2 | Lion : 12 à 30 s, image principale 19,5 s sur iPhone [V] ; Aquamarina : 11,2 s catalogue sur ordinateur [V] |
| Scripts qui échouent et bloquent l'achat | 1 | 1 | Lion : « Loading chunk … failed », `$form.block is not a function`, pastilles inopérantes, ajout au panier échoué trois fois [V] |
| Aucune personnalisation (métal, forme, taille, gravure) en ligne | 1 | 3 | [V] |
| Aucune décomposition du prix | 1 | 3 | [V] |
| Aucun avis client, aucune preuve de fabrication | 1 | 3 | [V] |
| Photo unique, sans 3D ni vidéo | 1 | 3 | [V] |
| Conditions de vente introuvables (délai, retours, garantie, livraison) | 1 | 1 | Lion : aucune page de conditions au pied de page [V] ; Arzilli et Aquamarina les publient [V] |
| Lien trompeur | 1 | 1 | Lion : « Rapaport » ouvre une connexion/inscription, pas un barème [V] |
| Page vide | 1 | 1 | Lion : « Diamanti » ne montre que l'en-tête et le pied [V] |
| Site daté | 1 | 2 | Lion : « © 2022 » [V] ; Arzilli : site daté selon son rapport [V] |
| Certificat absent de la fiche malgré la promesse générale | 1 | 1 | Lion cite IGI/GIA/HRD dans Chi siamo, rien sur la fiche ENG12 [V] |

## 5. Couverture

- **Territoire sans site** : aucun. Saint-Marin compte 3 audits, tous partiels (Lion ici ; Arzilli et Aquamarina dans eu-6) [V].
- **Lion Diamonds : partiel**, non bloqué. Le contrôle robots du 25/11 l'autorise ; seule la règle `/*?*add-to-cart=` vise l'ajout au panier, dont l'adresse à paramètre n'a jamais été ouverte (l'ajout poste vers l'adresse de la fiche, champ caché) [V]. Le panier n'a pas été atteint pour une raison technique : `/carrello/` en 502 à deux dates [V].
- **Non vérifié chez Lion** : récapitulatif du panier, frais de livraison, délai, moyens de paiement réels, retours, garantie ; filtre carats, recherche, wishlist, stock « magazzino Belgio », diamants d'investissement ; liens Facebook et Instagram [V, limites du rapport].
- **Biais de mesure** : prix lus par script (valeur du sélecteur caché puis événement), non par clic de pastille, trois paliers seulement [V] ; une seule fiche de bague solitaire lue à fond [V] ; mesures de vitesse bruitées par les 502 [V].
- **Incohérences relevées** :
  - L'inventaire de Saint-Marin marque encore Lion Diamonds « bloqué, non ouvert » ; le rapport (25/11) et le contrôle de la session principale dans eu-6 établissent qu'il est AUTORISÉ et audité. L'inventaire est à mettre à jour [V].
  - L'inventaire tient « TAX FREE » et « renvoie vers Rapaport » d'un extrait de recherche [VR] ; le rapport ne confirme pas « TAX FREE » et montre que le lien « Rapaport » mène à une page de compte [V].
  - Le prix plancher varie selon la page : 621 € pour un solitaire sur la catégorie, 824 € pour le plus petit carat de la fiche ENG12 ; sans doute deux modèles différents [I].
- **Non audités dans le territoire** (limite de 2 par territoire, reprise dans eu-6) : Ciacci Watches & Jewels (siège à Rimini) et Marlù (bijoux fantaisie) [VR]. Écartés : Silver Planet, Klepto Gioielli, Jewelry World, DoGi [V ou VR, inventaire].
- **Terme pour le diamant synthétique** : aucun relevé sur les trois sites ; usage italien supposé « diamante sintetico » ou « coltivato in laboratorio » [S, inventaire et rapport].
- Captures de l'audit : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/lion/` (bac à sable, non versionnées) [V, rapport].
