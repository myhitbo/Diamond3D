# Inventaire des sites à auditer : Portugal

Date : 15/11/2026 (contrôles faits dans la session du 24/11). Explorateur : Portugal. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun portugais) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) · **[I]** inféré · **[S]** supposé.
Contrôle robots.txt : `robots.cjs` avant chaque adresse ouverte. Pas d'identité de navigateur modifiée ni de nouvel essai pour passer un blocage.

## Constat d'ensemble

- **Aucun site portugais trouvé ne propose un configurateur 3D de bague de fiançailles ou d'alliance** (vérifié par 15 recherches web en portugais et en anglais, et par la lecture des pages de départ ci-dessous) [V pour les deux sites audités, I pour les autres].
- Le seul vrai configurateur visuel que les recherches ont fait remonter sur un domaine `.pt` est celui du fabricant espagnol **ELE KA** (« Desenhe a sua aliança », eleka.pt) : le site coupe la connexion du navigateur automatisé, donc **bloqué** [V].
- Les acteurs portugais fonctionnent par modèles du catalogue à options (métal, couleur, taille) avec prix en euros TTC, ou par devis : formulaire de bague sur mesure (Loja do Ouro), 3D réalisée par l'atelier sur demande (Dara Jewels, Amaré) [V].
- Terme du diamant synthétique en portugais : la profession (traduction portugaise du guide CIBJO, 2019) admet « sintético », « criado em laboratório » ou « feito em laboratório » et déconseille « lab-grown », « cultivado » et « de cultura » [V : cibjo.org/wp-content/uploads/2022/12/19-02-25-DD-Portuguese-translation.pdf]. Sur les sites : « Diamante Lab Grow » (Dara Jewels), « lab-grown » (Amaré), « diamante de laboratório » (Diamonds Factory PT, DdL), « cultivado em laboratório » (menu de Diamonds Factory PT), « diamante produzido em laboratório » (Glamira PT) [V]. Aucune loi portugaise propre sur la dénomination n'a été trouvée (la législation de la Contrastaria porte sur les poinçons des métaux précieux) [V : contrastaria.pt/legislacao] ; ne pas en conclure qu'il n'y en a pas [S].

## Classement et tableau

Classé par intérêt pour JR Diamond (atelier visible, 3D, prix expliqué, synthétique et naturel, alliances).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Amaré Fine Jewelry Atelier | Lisbonne | https://amarejewelry.co/ | https://amarejewelry.co/pt/products/the-lumina-solitaire-lab-grown-natural-diamond-bespoke-ring (fiche) · parcours https://amarejewelry.co/pt/pages/engagement-rings-lisbon | Non. Sur mesure par rendez-vous : dessin, rendu 3D, impression 3D en résine, option d'envoi du modèle [V] | Aucun en Chromium (200). `curl` a reçu un défi Cloudflare sur robots.txt une fois et un 429 une fois, puis des 200 : sporadique [V] | PT, EN | Atelier familial, positionnement proche du nôtre : 3D avant fabrication, naturel et synthétique, or recyclé, prix « à partir de » |
| 2 | Dara Jewels | Lisbonne (3 points de vente) | https://darajewels.com/ | https://darajewels.com/categoria-produto/aneis-de-noivado/ · service https://darajewels.com/design-3d/ | Non. Fiches à options (couleur, métal, taille) avec prix en direct ; « Design 3D » sur demande [V] | Aucun (200). reCAPTCHA sur les formulaires | PT (EN annoncé [I]) | 82 bagues de fiançailles, 75 alliances, filtre « Diamante Lab Grow », prix affichés, retours et garanties détaillés |
| 3 | Loja do Ouro | Portugal (ville non relevée) | https://www.lojadoouro.pt/ | https://www.lojadoouro.pt/pages/aliancas-em-ouro | Constructeur d'alliances par formulaire (modèle, carats 9 k ou 19,2 k, taille 6 à 30, épaisseur, gravure), sans visuel [V d'après la page lue en recherche, non audité] | Aucun (200). Un 429 sur robots.txt au premier essai, puis lu normalement | PT | Parcours d'alliances personnalisables avec devis gratuit |
| 4 | Ourivesaria Mirabela | Amadora (Lisbonne) | https://www.mirabela.pt/ | https://www.mirabela.pt/noivado | Non. 18 modèles avec filtre de prix (245 à 1 850 €), sur mesure par message [V d'après la page lue en recherche] | Aucun (200) | PT | Fabricant (loge, fabrique, atelier, depuis 1968 [I d'après melhoreslisboa.pt]), prix affichés |
| 5 | JP Joias | Portugal (ville non relevée) | https://www.jpjoias.com/ | https://www.jpjoias.com/ (rubrique Anéis Noivado) | Non. Fiches à variantes (prix de 420 à 6 250 €), zircone ou diamant, showroom privé sur rendez-vous [V d'après la page lue] | Aucun (200) | PT | Prix par variante, mélange zircone, diamant, pierres de couleur |
| 6 | Oro Vivo (marque espagnole, site PT) | Espagne, vente au Portugal | https://www.orovivo.com/pt/ | https://www.orovivo.com/pt/292-aliancas-personalizadas | Non. 190 alliances « personnalisables » : taille et gravure [V d'après la page lue en recherche] | **`curl` : 403 sur la page. robots.txt lisible (autorisé)** : traité comme bloqué, non ouvert en Chromium | PT, ES | Alliances à gravure, prix affichés |
| 7 | ELE KA (fabricant espagnol, site PT) | Valence (Espagne) | https://eleka.pt/ | https://eleka.pt/ (menu « Desenhe a sua aliança ») | **Oui** (« Desenhe a sua aliança », « Nuevo configurador » annoncé) [V d'après la page lue en recherche] | **Bloqué : le serveur coupe la connexion (`curl` : reset, code 000) ; robots.txt illisible** | PT, ES | Seul configurateur d'alliances repéré sur un domaine `.pt` ; non audité |
| 8 | Ourivesaria Central | Portugal (ville non relevée) | https://ourivesariacentral.pt/ | https://ourivesariacentral.pt/aliancas | Non. Catalogue de 73 pages d'alliances, devis sur esquisse [V d'après la page lue en recherche] | Aucun (200) | PT | Alliances en or, argent, acier, prix TTC affichés |
| 9 | Diamonds Factory Portugal (groupe britannique) | Royaume-Uni (site `.pt`) | https://www.diamondsfactory.pt/ | https://www.diamondsfactory.pt/aneis-de-noivado/diamante-de-laboratorio | Non (fiches « personnalisables » : pierre, serti, métal) [V d'après la recherche] | **Bloqué : 403 sur la page et sur robots.txt** | PT, EN | Synthétique « cultivado em laboratório », prix de 540 €, retours gratuits sous 30 jours |
| 10 | Glamira Portugal (groupe allemand) | Allemagne (site `.pt`) | https://www.glamira.pt/ | https://www.glamira.pt/aneis-de-noivado/lab-grown-diamond | Oui (3 369 modèles personnalisables annoncés) [V d'après la recherche] | **Bloqué : 403 sur la page et sur robots.txt** | PT et 20 autres [I] | Grand configurateur européen, livraison gratuite au Portugal, 60 jours de retour |

## Audits réalisés

Les deux premiers sites qui ne bloquent pas : **Amaré** (rang 1) et **Dara Jewels** (rang 2). Rapports : `amare.md`, `dara-jewels.md` dans ce dossier. Aucun des deux n'est un configurateur : l'audit relève donc la fiche à options, le parcours sur mesure, les services et le panier.

## Écartés ou notés sans audit

- Ourivesaria Liberjóia (Lisbonne, Amadora) : catalogue sans prix en ligne (« Consulte-nos ») [V : liberjoia.net].
- Romantis : marque portugaise de joaillerie revendue par des détaillants (Ourivesaria Oliveiras sur ourivesariaporto.pt, bagues à 1 929 à 2 309 €, or 19,2 k) ; romantis.pt (11 Ko) ne vend pas en ligne [I].
- Ourivesaria Fonseca (depuis 1902) : catalogue d'or 9, 14 et 19,2 k, sans personnalisation en ligne [V d'après la recherche].
- Centro de Joalharia de Lisboa : atelier de création sur mesure avec impression 3D, fiche sur casamentos.pt (« de 150 € à 1 500 € ») ; site propre non trouvé [V : casamentos.pt, I pour le reste].
- DdL (diamantedelaboratorio.com, Espagne) : diamants synthétiques en vrac, bijoux faits par The Bright Club, version portugaise ; hors Portugal [V].

## Sources

- Recherches web (15/11 et 24/11, requêtes génériques en portugais) : amarejewelry.co, darajewels.com, mirabela.pt, jpjoias.com, lojadoouro.pt, orovivo.com/pt, eleka.pt, ourivesariacentral.pt, diamondsfactory.pt, glamira.pt, liberjoia.net, ourivesariafonseca.com, ourivesariaporto.pt, casamentos.pt, melhoreslisboa.pt.
- Terminologie : https://cibjo.org/wp-content/uploads/2022/12/19-02-25-DD-Portuguese-translation.pdf ; https://contrastaria.pt/legislacao.
- Contrôles `robots.cjs` et `curl` (en-tête Safari) du 24/11 : Amaré, Dara, Mirabela, JP Joias, Ourivesaria Central, Loja do Ouro, Romantis, Liberjóia, Fonseca, Ourivesaria Porto autorisés ; Diamonds Factory et Glamira : 403 ; ELE KA : connexion coupée ; Oro Vivo : page 403 pour `curl`.
