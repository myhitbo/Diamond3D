# France : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (inventaire européen, 14 sites) sans le refaire : les fiches de fond de Courbet, Edenly, Gemmyo et Persta y restent. On ajoute ici le classement français, ce qui a été revérifié en navigateur, et quatre acteurs absents de l'inventaire européen (Bonnot Paris, L'Alliancier, La Maison de l'Alliance, MonDiamant).

Périmètre : joailliers français qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un configurateur, un visuel 3D ou 360°, du sur mesure en ligne ou des prix affichés. Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode :

- Recherche web en français (Parallel Search), requêtes génériques.
- Pour chaque candidat : lecture du robots.txt, puis de l'accueil et de la page de départ avec `curl` (en-tête Safari), 2,5 s entre deux requêtes d'un même site.
- Contrôle en navigateur : Chromium headless (Playwright), identité par défaut, sans contournement. Un site qui répond par un défi ou un 403 n'a pas été réessayé.
- Aucun formulaire rempli, aucun compte créé, aucun chat ni WhatsApp ouvert.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Correction à l'inventaire européen : Courbet n'est plus un concurrent actif

- La société COURBET (SIREN 832 805 402, 7 place Vendôme) a été placée en redressement judiciaire le 23/12/2024, puis en liquidation judiciaire le 20/05/2025. La clôture pour insuffisance d'actif date du 21/07/2026 ; Infogreffe l'indique radiée à cette date (V, sources en bas de page).
- Trois candidats à la reprise ont été écartés par le tribunal (V, Le Journal de la Bijouterie, Luxus Plus). La presse attribue la faillite surtout au coût de l'entrée sur le marché chinois (V, même source ; cause non vérifiée par ailleurs).
- Le site courbet.com reste en ligne avec un bandeau : « Maison Courbet prépare le prochain chapitre de son histoire. […] nos collections en ligne s'accordent un instant de pause. Notre maison rouvrira très prochainement ses portes. » (V). Qui exploite le site aujourd'hui n'est pas indiqué (non vérifié).
- Le configurateur 3D fonctionne encore, mais la vente est inactive : la fiche produit est servie sans aucun script applicatif et `/panier` répond 404 (V, voir `courbet.md`).
- Conséquence : Courbet reste en tête de ce classement comme **modèle de configurateur et comme avertissement**, pas comme concurrent. Les lignes « Courbet » de l'inventaire européen (délais, paiement, retours) décrivent un service qui n'est plus rendu en ligne.

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : la qualité du configurateur et le lien entre l'image et l'objet fabriqué ; la transparence du prix ; les preuves de fabrication ; l'offre en synthétique.

Toutes les adresses de la colonne « Page de départ » ont répondu 200 à `curl` le 15/11 (V). La colonne « Blocage » dit ce qui s'est passé en navigateur automatisé.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Courbet | Paris 1er (7 place Vendôme) | https://www.courbet.com/ | https://www.courbet.com/page/creation-bague-fiancailles puis https://www.courbet.com/configurator/configure/R26W1011%2003%20FV | **Oui, 3D temps réel** (moteur Apviz). 2 étapes : or (3 couleurs), forme (6), carat (4), couleur (D, E, F), pureté (VVS, VS). Prix à chaque choix, de 3 600 à 6 500 € relevés (V) | aucun. robots.txt interdit `/panier/ajout/` et `/cart/add/` : l'ajout au panier n'a pas été automatisé (V) | FR, EN (en.courbet.com) | Seul configurateur 3D de bague de fiançailles français lisible en navigateur. Tout synthétique. **Société liquidée, vente en ligne à l'arrêt** (V). **Audité** : `courbet.md` |
| 2 | Edenly | Genève (société) ; boutique Paris Opéra | https://www.edenly.com/ | https://www.edenly.com/create-engagement.php (accueil de « L'Atelier » : https://www.edenly.com/create-home.php) | Oui, 3D : modèle (solitaire, accompagné, halo), 11 pierres dont diamant naturel et synthétique, 0,3 à 1 ct, or 9 ou 18 k (V, texte de la page lu par la recherche ; non actionné) | **bloqué** : défi Cloudflare 403 « Just a moment… » sur l'accueil (curl) et sur `create-engagement.php` en Chromium (V). robots.txt interdit `create-engagement.php?id=` (V) | FR, EN, DE, ES, IT, NL, PL, RO | Concurrent 3D le plus direct en France : prix affichés (créations de clients à 900–1 170 € en synthétique 0,5 à 1 ct, V), retour à 30 jours sur les pièces configurées (inventaire européen). **Bloqué, non audité** : `edenly.md` |
| 3 | Bonnot Paris | Paris 8e (40 rue des Mathurins) ; showroom à Angers | https://www.bonnot-paris.com/ | https://www.bonnot-paris.com/creer-avec-studio-bonnot | **Oui, « Le Studio »**, 3 étapes : pierre réelle photographiée (stock filtrable), 23 designs en 4 métaux, puis simulation par IA « à votre doigt ». La simulation et le prix de la bague n'apparaissent qu'après saisie du prénom, de l'e-mail et du téléphone (V) | aucun. robots.txt interdit `/cart`, `/checkout`, `/account` et les filtres passés en paramètres (V) | FR, DE, EN, ES, IT, PT-BR, ZH-CN ; €, $, £, CHF, CA$ | L'inverse exact de JR Diamond : la pierre est réelle (« la pierre photographiée est celle que vous choisissez »), la bague est une image d'IA. Pierres de couleur naturelles seulement. **Audité** : `bonnot-paris.md` |
| 4 | L'Alliancier | Reichstett (siège) et Vendenheim (boutique), Bas-Rhin ; marque de la bijouterie Kamlet (V) | https://www.alliancier.com/ | https://www.alliancier.com/configurateur-alliance-3d/ | **Oui, 3D d'alliances** : c'est le configurateur du fabricant allemand Breuning (`konfigurator.breuning.de`), intégré à la page. 6 onglets, paire d'alliances, prix TTC par bague à chaque choix (V) | pas de défi. Le serveur a répondu 429 (trop de requêtes) à 68–79 feuilles de style et scripts à chaque chargement en Chromium de bureau, à aucun en identité iPhone : page de bureau sans style, configurateur intact (V) | FR | Seul configurateur 3D d'alliances relevé chez un détaillant français. Commande « validée manuellement » par un rappel (V). **Audité** : `l-alliancier.md` |
| 5 | La Maison de l'Alliance | Paris (bijouterie familiale « depuis 1987 », V) | https://www.maisondelalliance.fr/ | https://www.maisondelalliance.fr/bijoux-diamant/sur-mesure/solitaires | Partiel : on choisit une monture (platine, or blanc, jaune ou rose), puis un poids de diamant (8 choix de 0,3 à 1 ct) et une qualité (6 choix) ; taille de doigt dès 45 ; panier. Les fiches liées nomment des pierres précises, par exemple « 0.50 D SI1 » (V, relevé de contrôles ; options non actionnées) | aucun ; robots.txt n'interdit que `/admin/` (V) | FR | Parcours « monture + diamant certifié » sans 3D. Rubrique « Diamants de synthèse ». Livraison offerte, mise à taille gratuite 6 mois, paiement en plusieurs fois (V, libellés des boutons). Premier remplaçant si un audit de plus est décidé |
| 6 | MonDiamant | Paris 9e (9 rue Buffault) | https://www.mondiamant.com/ | https://www.mondiamant.com/35-bague-de-fiancailles (fiche : https://www.mondiamant.com/177-solitaire-dana-rond-or-blanc.html) | Non : fiche à options (7 poids de 0,30 à 2,00 ct, 3 boutons de choix non identifiés, taille dès 45). Sur mesure à part : rendu 3D avant fabrication, étude facturée 200 €, 6 semaines (V) | aucun | FR | Retour gratuit 30 jours, garantie 10 ans, alliance du fiancé offerte, bouton « Demander sur WhatsApp » sur la fiche (V). Proche de JR Diamond par le canal WhatsApp |
| 7 | Gemmyo | Paris (9 boutiques, inventaire européen) | https://www.gemmyo.com/ | https://www.gemmyo.com/mariage/bagues-de-fiancailles.html (fiche : https://www.gemmyo.com/bague-or-blanc-18-cts-diamant-lady-0-7-ct.html) | Non : fiche à options, 185 contrôles relevés en Chromium (V) | aucun | FR, EN, DE, JA | Marque nationale de référence, naturel seulement, fabrication à la commande. Fiche de fond dans l'inventaire européen |
| 8 | Laveran Paris | Paris ; « 11 showrooms en France » (affiché, V) | https://laveran-paris.com/ | https://laveran-paris.com/collections/coups-de-coeur/products/bague-palais-royal | Non : fiche Shopify à options. Or 18 k ou platine 950, 11 poids de 0,30 à 5,00 ct, 3 qualités (H/VS2, F/VS1, D/VVS1), tailles 46 à 62, baguier gratuit, WhatsApp (V) | aucun | FR, EN, DE | Spécialiste du synthétique encore actif. Titre du site : « Joaillerie & Diamants de Laboratoire » : terme non conforme en France (V/I). « Diamants IGI/GIA », « retour 30 j » (V) |
| 9 | Histoire d'Or | réseau national de bijouteries (V : retrait en magasin sous 2 h) | https://www.histoiredor.com/fr_FR | https://www.histoiredor.com/fr_FR/c/bagues/par-type/bagues-de-fiancailles/ | Non : fiche avec taille de bague, « Ajouter au panier » et « Retirer en magasin » (V) | aucun | FR | Marque nationale. Vend du synthétique sous le libellé légal : « Bague […] Platine Diamant Synthétique » (V). « Satisfait ou remboursé sous 60 jours » (V) |
| 10 | Celinni | Paris | https://www.celinni.com/fr/ | https://www.celinni.com/fr/12-bagues-de-fiancailles | Non : catalogue (V, curl) | **bloqué** : 403 en Chromium sur une fiche de solitaire, page vide ; curl répond 200 (V) | FR | Diamantaire « depuis 6 générations », diamant naturel, argument de prix face à la place Vendôme (V). Non auditable |

### État des audits au 16/11/2026

| Site | Statut | Rapport | Note |
|---|---|---|---|
| Courbet | partiel (société liquidée, vente inerte) | [courbet.md](courbet.md) | audité le 15/11 |
| Bonnot Paris | partiel | [bonnot-paris.md](bonnot-paris.md) | audité le 15/11 |
| L'Alliancier | partiel | [l-alliancier.md](l-alliancier.md) | audité le 15/11 |
| Edenly | **bloqué** (défi Cloudflare constaté le 15/11, pas de nouvel essai) | [edenly.md](edenly.md) | seul `robots.txt` relu le 16/11 |
| La Maison de l'Alliance | complet jusqu'au panier | [la-maison-de-l-alliance.md](la-maison-de-l-alliance.md) | seul site du groupe dont le panier a été atteint |
| MonDiamant | partiel (panier interdit : l'ajout passe par `/module/`) | [mondiamant.md](mondiamant.md) | |
| Gemmyo | partiel (panier, `/ajax/` et filtres interdits) | [gemmyo.md](gemmyo.md) | |
| Laveran Paris | partiel, **lecture statique** (le site publie des règles pour les agents, `agents.md`) | [laveran-paris.md](laveran-paris.md) | aucun contrôle actionné |
| Histoire d'Or | partiel (panier et contenu `/on/demandware.store/` interdits) | [histoire-d-or.md](histoire-d-or.md) | pas de configuration à tester |
| Celinni | bloqué (403) | — | non tenté de nouveau |

Synthèse du groupe : [SYNTHESE_fr.md](SYNTHESE_fr.md).

### Terme français du diamant synthétique, site par site

| Site | Libellé relevé | Conforme au décret 2002-65 ? |
|---|---|---|
| Courbet | fiche : « Diamant synthétique, créé en laboratoire » ; textes : « diamants de synthèse créés en laboratoire », avec une infobulle qui conteste « la terminologie imposée » (V) | terme légal présent, mais « créé en laboratoire » est ajouté (I : contournement) |
| Edenly | « diamant synthétique », « diamant naturel ou de synthèse » (V) | oui |
| La Maison de l'Alliance | rubrique « Diamants de synthèse » (V) | oui |
| Histoire d'Or | « Diamant Synthétique » dans le nom des produits (V) | oui |
| Laveran Paris | « diamants de laboratoire » (11 occurrences sur l'accueil), « de synthèse » (2) (V) ; fiche (16/11) : « Diamants Synthétiques » dans les détails, mais « Un diamant de laboratoire est-il un vrai diamant ? Oui. » (V) | non pour le terme principal ; « vrai » interdit (I) |
| MonDiamant | une occurrence de « synthétique » et une de « de laboratoire » sur la page catalogue ; offre en diamant naturel GIA (V) | sans objet |
| Bonnot Paris | « nous ne vendons aucune pierre synthétique » (V) | sans objet |
| Gemmyo, Celinni | naturel seulement (V) | sans objet |
| L'Alliancier | le configurateur parle de « pierres précieuses » et de « diamants », sans origine (V) | non indiqué |

Les deux termes employés en France sont donc **« diamant synthétique »** et **« diamant de synthèse »** ; « diamant de laboratoire » subsiste chez un spécialiste (Laveran) et dans les textes de Courbet.

### Repérés mais écartés

| Acteur | Raison |
|---|---|
| Mauboussin (mauboussin.fr) | **bloqué** : 403 Cloudflare sur l'accueil, pas de nouvel essai (V) |
| Julien d'Orcel (juliendorcel.com) | **bloqué** : 403 Cloudflare, robots.txt compris (V) |
| Diamina (diamina.fr) | société espagnole (Diamina S.L.U., Barcelone) qui vend en français (V, mentions légales). Filtres forme, métal, 9/14/18 k, style ; devis ; exception du sur mesure au droit de rétractation écrite dans ses conditions (V). À verser au dossier Espagne |
| Persta, Atelier Lavoisier, Vivalatina | fiches dans l'inventaire européen ; sur mesure ou transformation sans configurateur |
| Amantys (Paris 1er) | personnalisation sur devis, « à partir de » 2 800 à 8 000 € ; atelier « ouvert à tous les clients » (V, extrait de recherche). Pas de configurateur |
| Pellegrin (Marseille) | joaillier « depuis cinq générations » ; retours sous 15 jours, mise à taille offerte 12 mois, Alma en 3 fois (V). Pas de configurateur |
| Mayuri, Rahyan The Jeweler, AJS Créations, Haddad, La Taillerie, Comptoir 62 La Fayette | sur mesure par formulaire ou rendez-vous ; pas de configurateur (V, extraits de recherche). Rahyan : maquette 3D imprimée en résine, « rien n'est fondu avant votre accord » ; Mayuri : maquette 3D à 85 €, déduits de la commande |
| Ghaum (Paris) | annonce un « essayage virtuel » (V, extrait) ; site Wix de 2,3 Mo, non examiné |
| Maison Lemercer (Bordeaux) | déjà écartée par l'inventaire européen : existence non corroborée |
| Diamonds Factory (diamondsfactory.fr) | société britannique |

## Sources

Pages lues ou testées le 15/11/2026.

- Courbet : https://www.courbet.com/robots.txt · https://www.courbet.com/page/creation-bague-fiancailles · https://www.courbet.com/configurator/configure/R26W1011%2003%20FV · https://www.courbet.com/questions/livraison (bandeau de pause)
- Courbet, procédure collective : https://www.francereprises.com/vigie/entreprise/832805402 · https://www.societe.com/societe/courbet-832805402.html · https://www.infogreffe.fr/entreprise/edd205e7-20f1-4756-9ffd-9aae56e3f980 · https://www.lejournaldelabijouterie.com/p/clap-de-fin-pour-la-maison-courbet · https://luxus-plus.com/diamants-de-synthese-courbet-est-liquidee · https://www.jckonline.com/editorial-article/french-courbet-reorganize
- Edenly : https://www.edenly.com/robots.txt · https://www.edenly.com/create-engagement.php · https://www.edenly.com/create-home.php
- Bonnot Paris : https://www.bonnot-paris.com/robots.txt · https://www.bonnot-paris.com/creer-avec-studio-bonnot · https://www.bonnot-paris.com/emeraude-de-zambie-1-57ct-rectangle
- L'Alliancier : https://www.alliancier.com/robots.txt · https://www.alliancier.com/configurateur-alliance-3d/ · https://www.alliancier.com/conditions-generales-de-vente/
- La Maison de l'Alliance : https://www.maisondelalliance.fr/robots.txt · https://www.maisondelalliance.fr/ · https://www.maisondelalliance.fr/bijoux-diamant/sur-mesure/solitaires · https://www.maisondelalliance.fr/monture/bagues-classiques-platine-950-pt-manae-pt
- MonDiamant : https://www.mondiamant.com/robots.txt · https://www.mondiamant.com/35-bague-de-fiancailles · https://www.mondiamant.com/177-solitaire-dana-rond-or-blanc.html
- Gemmyo : https://www.gemmyo.com/robots.txt · https://www.gemmyo.com/mariage/bagues-de-fiancailles.html · https://www.gemmyo.com/bague-or-blanc-18-cts-diamant-lady-0-7-ct.html
- Laveran Paris : https://laveran-paris.com/robots.txt · https://laveran-paris.com/ · https://laveran-paris.com/collections/coups-de-coeur/products/bague-palais-royal
- Histoire d'Or : https://www.histoiredor.com/robots.txt · https://www.histoiredor.com/fr_FR/c/bagues/par-type/bagues-de-fiancailles/ · https://www.histoiredor.com/fr_FR/p/bague-hemera-ld-platine-blanc-diamant-synthetique/30620223502R30.html
- Celinni : https://www.celinni.com/robots.txt · https://www.celinni.com/fr/ · https://www.celinni.com/fr/12-bagues-de-fiancailles
- Écartés : https://www.mauboussin.fr/fr/ · https://www.juliendorcel.com/ · https://diamina.fr/ (mentions légales et conditions de vente) · https://amantys.fr/bague-de-fiancailles · https://pellegrin.fr/ · https://mayuri.fr/pages/bague-de-fiancailles-sur-mesure · https://rahyanthejeweler.com/ · https://artisan-joaillier-paris.com/bague-de-fiancailles-sur-mesure · https://www.ghaum.com/ · https://www.diamondsfactory.fr/bagues-de-fiancailles/creation
- Droit français du libellé : voir `docs/concurrence/2026-11-15_europe.md`, section « Libellé du synthétique selon le pays ».
