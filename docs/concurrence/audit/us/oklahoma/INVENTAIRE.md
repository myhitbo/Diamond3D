# Inventaire des joailliers : Oklahoma

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Je l'ai fait en lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ni SMS ouvert, au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue le 25/11/2026, numéro de source en fin de document) ; **[V, index]** lu dans l'extrait d'un moteur de recherche (Parallel Search), pas revu en direct ; **[V, sec.]** source secondaire (annuaire, presse) ; **[I]** inféré (déduit d'éléments vérifiés) ; **[S]** supposé. Les prix sont en dollars américains, tels qu'affichés le 25/11/2026. La colonne « Adresse » donne l'adresse du site.

Outils : le crédit Firecrawl était épuisé dès le début du recensement. J'ai cherché avec Parallel Search (requêtes génériques). J'ai lu les pages avec **curl tel quel**, sans changer d'identité de navigateur, et j'ai fait une lecture par Parallel (deux pages chargées en JavaScript, sur des sites qui autorisent les robots). Conséquence : **aucun rendu JavaScript de mon côté**, donc aucun configurateur n'a été actionné. Ce que j'en dis vient du texte des pages et des scripts qu'elles chargent ; les déductions sont marquées [I].

## Constat général

- [V] Deux joailliers utilisent un **constructeur en 3D dans le navigateur** :
  - Diamond Consulate (Oklahoma City) charge le script en marque blanche JewelerOS (`data-org-id="9qgaIHTlYUeb"`) [3]. C'est le même outil que chez Hudson-Poole, Ware et Marquirette's en Alabama, et que chez Cline au Washington.
  - J. David Jewelry (Tulsa) annonce un « 3D ring designer » (monture, diamant, métal, aperçu en direct) [V, index 1]. Son ancienne page reprenait mot pour mot le texte JewelerOS (« Design your ring online in stunning 3D », « ready for you in just a couple of weeks ») [V, index 2]. L'annuaire StoneAlgo (l'éditeur de JewelerOS) le présente en « Verified Jeweler » avec un constructeur de bague [V, sec. 30].
  - [I] Dans les deux cas, la 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier : c'est la différence que revendique JR Diamond.
- [V] Trois sites ont un **constructeur classique en étapes, monture puis pierre** :
  - Journey Jewelers, chiffré « live price » [6] ;
  - Israel Diamond Supply, extension Shopify « ring-creator » [14] ;
  - Mitchell's Jewelry, constructeur Punchmark « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring », sur 37 pages [17]. C'est la même pagination que chez les trois joailliers Punchmark de l'Alabama : [I] un catalogue de montures des fournisseurs.
- [V] BC Clark intègre le **« FANA Custom Ring Designer »** d'un fabricant (Fana), avec essayage virtuel [11]. Je n'ai pas trouvé le script dans le HTML : [I] il est chargé plus tard par JavaScript.
- [V] Un outil à part chez Journey Jewelers : un **« AI Design Studio »**. On y décrit la pièce (métal, pierre, forme, carats, budget, photo) et la page promet « an AI reference image and an honest price range » [7]. C'est la seule fourchette de prix pour du sur-mesure relevée dans l'État. [I] Elle est proche du « prix expliqué » de JR Diamond, sans détail des postes.
- [V] Le **synthétique** est présent partout et souvent chiffré :
  - Israel Diamond Supply : bagues synthétiques de 1 750 à 4 950 $ en première page, avec le numéro du certificat IGI dans la fiche [13][15] ;
  - J. David : 31 bagues synthétiques chiffrées [V, index 4] ;
  - Mitchener Farrand : sa propre marque, « Freeborn Created Diamond » [22] ;
  - Journey : stock de pierres « live » [8] ;
  - Mitchell's : recherche « Lab Created Diamonds » [16] ;
  - Diamond Consulate : pierres naturelles et synthétiques comparées côte à côte [3][V, index 5].
- [V] La **fabrication est racontée, pas montrée**. Le schéma revient partout : croquis, rendu CAO, maquette en cire imprimée en 3D, fonte, sertissage (J. David, Naifeh, Mitchener Farrand, Moody's, Huntington). Il varie sur deux points :
  - la conception se fait en direct à côté du client chez Diamond Consulate (« Live Collaborative CAD Design ») [4] ;
  - le délai est chiffré : 5 à 6 semaines chez J. David [V, index 2b], 4 à 6 semaines chez Moody's [V, index 31].
  - [I] Personne n'associe un modèle issu du fichier de fabrication à une pierre filmée.
- [V] **Blocages** :
  - J. David Jewelry renvoie une page « Vercel Security Checkpoint » (code 429) à curl, pour le robots.txt comme pour l'accueil. Je n'ai pas contourné le blocage : le site est marqué « bloqué » et il n'est décrit que par l'index de recherche.
  - Spexton (Tulsa) redirige vers une page `/password` : la boutique est fermée au public.
  - Bruce G. Weber (Tulsa) affiche « This store is unavailable » ; selon The Knot, l'enseigne est devenue Diamond Cellar [V, sec. 32].
  - Aucun des dix sites classés, à part J. David, n'interdit ClaudeBot. Moody's, Kelley, Naifeh et Diamond Consulate l'autorisent nommément.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | J. David Jewelry | Broken Arrow, South Tulsa, Brookside (Tulsa) | https://jdavidjewelry.com/ | https://jdavidjewelry.com/3d-ring-designer/ [V, index 1] (ancienne page : https://jdavidjewelry.com/pages/custom-engagement-rings) | oui (3D : monture, diamant, métal ; [I] JewelerOS ou outil dérivé) | **oui** : « Vercel Security Checkpoint », 429 sur le robots.txt et l'accueil, non contourné | [V, index] C'est le dossier le plus complet de l'État, mais il est lu seulement dans l'index de recherche. Il réunit : configurateur 3D ; 2 897 bagues de fiançailles, en partie chiffrées (Gabriel & Co. « from $4,800 », 3 150 $, 3 050 $) [1b] ; 31 bagues synthétiques chiffrées, de 4 900 à 6 500 $ en tête de liste [4] ; quatre étapes de sur-mesure (croquis, CAO validée avant la fonte, cire, sertissage sur ses propres établis) ; délai de 5 à 6 semaines [2b] ; « 5,400+ Five-Star Google Reviews » [1]. Fondé en 1994. Audit en navigateur à refaire si le site s'ouvre. |
| 2 | Journey Jewelers | Oklahoma City | https://journeyjewelers.com/ | https://journeyjewelers.com/ring-builder (outil de prix pour le sur-mesure : https://journeyjewelers.com/design-studio) | oui (constructeur en 3 étapes, sans 3D ; plus un studio de dessin par IA) | non (robots.txt : `Disallow: /admin` seulement) | [V] Constructeur « 1 Choose your setting, 2 Choose your stone, 3 Review your ring », avec filtres budget total, synthétique, naturel ou pierre de couleur, carats et types de tête ; « see the live price » [6]. Le « AI Design Studio » donne une image de référence et « an honest price range » [7]. Stock de pierres « live » [8]. Alliances chiffrées : 24 en première page, de 59,38 à 4 260,27 $ [9]. [I] Références au format Stuller (`LG6092`), donc catalogue d'un fournisseur. Atelier sur place, « At the bench since 1982 » [7]. Le plus proche de « prix expliqué ». |
| 3 | Diamond Consulate | Oklahoma City (5701 N Western Ave, près de Nichols Hills) | https://diamondconsulate.com/ | https://diamondconsulate.com/design-your-ring/ | oui (3D JewelerOS) | non (robots.txt : agents d'IA « explicitly permitted ») | [V] Outil 3D JewelerOS ; le dessin sert de point de départ au rendez-vous : « Diamond availability, specifications and pricing are confirmed with our team » [3]. Conception CAO en direct à côté du client, maquette en résine imprimée en 3D pour les pièces complexes [4]. Plus de 100 diamants naturels et synthétiques comparés à la « Diamond Table » [V, index 5]. Sur rendez-vous seulement. **Aucun prix en ligne** [I] (aucun montant relevé sur les pages lues). |
| 4 | Israel Diamond Supply | Tulsa (4852 S Yale Ave) | https://www.israeldiamond.com/ | https://www.israeldiamond.com/apps/ring-creator/rb-get-started | oui (constructeur pierre ou monture, extension Shopify « ring-creator », sans 3D) | non (Shopify, robots.txt sans interdiction visant ce chemin) | [V] « Build Your Own Engagement Ring : Start with a Diamond / Start with a Setting » ; recherche de pierres synthétiques et naturelles (« vdb-app ») [12][14]. Bagues synthétiques en stock, chiffrées de 1 750 à 4 950 $ en première page ; livraison dans tout le pays [13]. Fiche lue : 0,99 ct E VS1, certificat IGI n° 821648776, cotes 6,73 × 4,65 × 3,19 mm, or 14 k, 980 $ [15]. « Luxury Without the Retail Markup » [13]. Fondé en 1991 [V, sec. 33]. [I] Le nom joue sur l'origine israélienne, terrain de JR Diamond. |
| 5 | BC Clark Jewelers | Oklahoma City (3 magasins) | https://bcclark.com/ | https://bcclark.com/pages/design-the-one | oui (« FANA Custom Ring Designer » d'un fabricant, essayage virtuel) | non (robots.txt interdit `/*?page=` : page 2 du catalogue non lue) | [V] Configurateur du fabricant Fana intégré, avec une vingtaine de pièces Fana chiffrées de 2 000 à 5 750 $ et un bouton « Add to cart » [11]. Bagues de fiançailles chiffrées : 24 en première page, de 1 870 à 65 750 $ (solitaires « Origin x BC Clark ») [10]. Garantie « Pray for Rain » : bague remboursée jusqu'à 10 000 $ s'il tombe un pouce de pluie ou de neige le jour du mariage ; mise à taille offerte à vie [11b]. Concessionnaire Rolex. Pas de synthétique dans les filtres lus [10]. |
| 6 | Mitchell's Jewelry | Norman | https://www.mitchells-jewelry.com/ | https://www.mitchells-jewelry.com/ringsettings | oui (Punchmark, 3 étapes ; constructeur d'alliances pour femmes) | non (robots.txt : `Crawl-delay: 2`) | [V] Constructeur monture, puis diamant, puis bague complète ; filtres or blanc, jaune, rose et platine ; 8 formes dont la marquise ; 37 pages [17]. « Women's Band Builder » en iframe d'Ava Couture [18]. Recherche de diamants synthétiques ou naturels, diamants d'Anvers [16]. Sur-mesure « from the first sketch to the finished piece » [16]. Prix chargés par JavaScript, non relevés. Depuis 1981 [V, sec. 34]. |
| 7 | Naifeh Fine Jewelry | Oklahoma City (Nichols Hills Plaza) ; aussi Sun Valley (Idaho) | https://www.naifehfinejewelry.com/ | https://www.naifehfinejewelry.com/pages/custom-jewelry-design | non | non (robots.txt : agents d'IA « welcome ») | [V] Bagues de fiançailles chiffrées : 24 en première page, de 1 900 à 112 500 $ [19]. Sur-mesure en 4 étapes, guidé par la créatrice : rencontre, images CAO et maquette en cire imprimée en 3D pour validation, fabrication dans le « Design Lab » de la maison [20]. Collection de la créatrice depuis 1998 [21]. |
| 8 | Mitchener Farrand Jewelers | Oklahoma City | https://www.mitchenerfarrand.com/ | https://www.mitchenerfarrand.com/engagement-rings | non | non | [V] Bagues chiffrées (16 Noam Carver de 1 559 à 3 842 $ en première page) [23]. Sur-mesure en 5 étapes, avec un devis approuvé avant le rendu CAO photoréaliste, puis maquette en cire, fonte et sertissage [24]. Diamant maison à 81 facettes « ForeverAfter » ; diamant synthétique de marque propre, « Freeborn Created Diamond » ; assurance du diamant à vie [22]. |
| 9 | Huntington Fine Jewelers | Oklahoma City, Shawnee, Midwest City, Stillwater, Yukon… (6 magasins) | https://www.huntingtonfinejewelers.com/ | https://www.huntingtonfinejewelers.com/engagement-rings | non | non | [V] 16 bagues Verragio chiffrées de 3 640 à 7 640 $ en première page ; sur-mesure « from consultations to full 3D renderings » [25]. Réseau de magasins le plus étendu des sites lus. |
| 10 | Kelley Jewelers | Weatherford | https://www.kelleyjewelers.com/ | https://www.kelleyjewelers.com/custom-bridal/ | non | non (ClaudeBot nommément autorisé) | [V] Depuis 1931 ; montures chiffrées (1 875, 4 350 et 5 100 $ sur l'accueil ; 12 prix de 2 500 à 15 000 $ sur la page sur-mesure) ; bagues de fiançailles et alliances sur mesure, remontage de bijoux de famille ; collection maison ; concessionnaire Rolex [26][27]. |

## Candidats vus et écartés

- **Moody's Jewelry** (Tulsa et Broken Arrow, 6 magasins, depuis 1944 [V, sec. 32]) : sur-mesure décrit (rendu 3D, cire, 4 à 6 semaines) [V, index 31] et page sur le synthétique [28]. Je n'ai relevé aucun prix sur les pages lues, et la page « bridal » répond 404 [29]. Le robots.txt autorise ClaudeBot. Il serait 11e.
- **Diamond Cellar** (salle de Tulsa, Cherry Street) : enseigne régionale de l'Ohio, qui a repris Bruce G. Weber [V, sec. 32]. Le lien « Design Your Own » mène à la prise de rendez-vous (`/pages/appointments`) ; 171 bagues de fiançailles en ligne, avec peu de prix affichés [35]. Écarté : le siège et la plupart des magasins sont hors de l'Oklahoma.
- **Lewis Jewelers** (Moore) : site https://www.lewis-jewelers.com/ (Squarespace, marques FANA et Gabriel & Co.) [V, index 36]. Je ne l'ai pas lu en direct. Attention : lewisjewelers.com est un homonyme d'Ann Arbor (Michigan), avec un configurateur JewelerOS ; il n'est pas à compter dans l'Oklahoma.
- **Spexton** (Tulsa) : boutique sous mot de passe (`/password`). **Bruce G. Weber** : « This store is unavailable ».
- Également cités par les annuaires, sans site lu : Rings Etc. (Edmond), Leonard Jewelry et Jackson Diamond Jewelers (Stillwater), Tipton's (Lawton), The Diamond Shop (Ada) [V, sec. 32][V, sec. 37].

## Sources

Les pages ont été lues le 25/11/2026 avec curl, sauf mention contraire. Les extraits « index » viennent de Parallel Search, consulté le 25/11/2026.

1. https://jdavidjewelry.com/ (index : « 3D ring designer », 1 Setting / 2 Diamond / 3 Metal, lien `/3d-ring-designer/`, 5 400 avis) — 1b. https://jdavidjewelry.com/engagement-rings (index : 2 897 designs, prix Gabriel & Co.)
2. https://jdavidjewelry.com/pages/custom-engagement-rings (index, ancienne page) — 2b. https://jdavidjewelry.com/custom (index : 5 à 6 semaines, 4 étapes)
3. https://diamondconsulate.com/design-your-ring/ (script `jeweleros.com/static/dist/jos.js`, org-id 9qgaIHTlYUeb)
4. https://diamondconsulate.com/cad-design/
5. https://diamondconsulate.com/custom-engagement-rings/ et https://diamondconsulate.com/oklahoma-city (index : adresse, 200 bagues, 100 diamants)
6. https://journeyjewelers.com/ring-builder (et lecture par Parallel de la même page)
7. https://journeyjewelers.com/design-studio
8. https://journeyjewelers.com/lab-grown-diamonds (description de la page)
9. https://journeyjewelers.com/product-category/wedding-bands
10. https://bcclark.com/collections/engagement-rings
11. https://bcclark.com/pages/design-the-one — 11b. https://bcclark.com/pages/engagement-ring-guarantee
12. https://www.israeldiamond.com/
13. https://www.israeldiamond.com/collections/lab-grown-diamond-engagement-rings
14. https://www.israeldiamond.com/apps/ring-creator/rb-get-started
15. https://www.israeldiamond.com/products/lab-grown-diamond-engagement-rings-120
16. https://www.mitchells-jewelry.com/
17. https://www.mitchells-jewelry.com/ringsettings (curl, plus lecture par Parallel pour la pagination)
18. https://www.mitchells-jewelry.com/pages/womens-band-builder (iframe `avacoutures.com`)
19. https://www.naifehfinejewelry.com/collections/engagement-rings (prix dans les données de la page)
20. https://www.naifehfinejewelry.com/pages/custom-jewelry-design
21. https://www.naifehfinejewelry.com/ (index)
22. https://www.mitchenerfarrand.com/
23. https://www.mitchenerfarrand.com/engagement-rings
24. https://www.mitchenerfarrand.com/custom-work
25. https://www.huntingtonfinejewelers.com/engagement-rings
26. https://www.kelleyjewelers.com/
27. https://www.kelleyjewelers.com/custom-bridal/
28. https://www.moodysjewelry.com/lab-made-diamonds/
29. https://www.moodysjewelry.com/bridal/ (404)
30. https://www.stonealgo.com/local-jewelers/tulsa-ok/j-david-jewelry-1366e75fc0fbf350db7b8b78b668d13a (index)
31. https://www.moodysjewelry.com/custom-design (index)
32. https://www.theknot.com/content/engagement-rings-tulsa (index, 21/01/2025) et https://www.theknot.com/marketplace/jewelers/oklahoma (index)
33. https://www.weddingrule.com/wedding-jewelers/oklahoma/tulsa (index) et https://threebestrated.com/jewelry-in-tulsa-ok (index)
34. https://www.thebridesofoklahoma.com/article/find-the-perfect-engagement-ring-with-oklahomas-best-local-jewelers (index, 19/08/2026)
35. https://www.diamondcellar.com/collections/engagement-rings-t et https://www.diamondcellar.com/pages/custom
36. https://www.lewis-jewelers.com/ (index) ; homonyme du Michigan : https://www.lewisjewelers.com/pages/custom-ring-builder (lu, script JewelerOS)
37. https://www.weddingwire.com/c/ok-oklahoma/wedding-jewelers/19-sca.html (index)

robots.txt lus le 25/11/2026 :

- journeyjewelers.com, diamondconsulate.com, www.mitchells-jewelry.com, bcclark.com, www.naifehfinejewelry.com, www.mitchenerfarrand.com, www.huntingtonfinejewelers.com, www.israeldiamond.com, www.kelleyjewelers.com, www.moodysjewelry.com, www.diamondcellar.com, www.spexton.com, www.lewis-jewelers.com, www.leonardjewelry.com ;
- jdavidjewelry.com : page de contrôle Vercel, code 429 ;
- www.brucegweber.com : boutique indisponible.
