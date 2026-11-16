# Inventaire : joailliers de l'État de Washington (États-Unis)

Date : 15 novembre 2026. Recenseur : État de Washington (pas Washington D.C.).
Périmètre : joailliers ayant siège, atelier ou salle d'exposition dans l'État, qui vendent en ligne des bagues de fiançailles ou des alliances
à des particuliers, avec configurateur, visuel 3D/360°, parcours sur mesure en ligne ou prix affichés.
Écartés car couverts au niveau national : Blue Nile (siège à Seattle), Brilliant Earth (salle à Bellevue), chaînes Signet, grands magasins, etc.

Légende : **[Vn]** vérifié, page lue le 15/11/2026 (source n en fin de document) ; **[Vn, index]** lu dans l'extrait d'indexation d'un moteur
(Firecrawl ou Parallel), pas revu en direct ; **[Vn, sec.]** source secondaire ; **[I]** inféré ; **[S]** supposé. Prix en dollars US, tels qu'affichés.

Méthode : robots.txt lu pour chaque site avant toute page (curl, 15/11) ; lecture des pages par Firecrawl puis par curl simple (sans changer
d'identité de navigateur), une page à la fois par site et au plus une toutes les 2 s (20 s pour seattlediamonds.com, qui le demande).
Aucun formulaire envoyé, aucun compte créé, aucun panier rempli, aucune conversation ouverte.

## Tableau

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Joseph Jewelry | Seattle (1413 4th Ave) et Bellevue (WA 98004) [V5] | https://www.josephjewelry.com/ | https://www.josephjewelry.com/design-your-own-engagement-ring (formulaire en 3 étapes) ; configuration avec prix sur chaque fiche, p. ex. /engagement-rings/leaf-prongs-pear-shape-diamond-engagement-ring-108705 | Oui : fiche configurable avec prix ; pas de 3D en ligne | Aucun (200, Apache) | La fiche recalcule le « Setting price » (3 995 $, pierre centrale à part) selon 7 métaux (or 14/18 k jaune, blanc, rose, platine), la taille US 3 à 8,75 et les pierres d'accompagnement (naturel E-F VS, naturel G SI1 ou **synthétique E-F VS**). Elle propose aussi un curseur de teint de peau, une vidéo du modèle d'origine et l'ajout au panier [V4]. 1 185 modèles, filtre de prix [V3]. Fabrication expliquée : croquis → CAO 3D après acompte → maquette en cire montrée en salle ou envoyée → production [V1][V4]. Le parcours le plus proche de « prix expliqué + fabrication montrée ». |
| 2 | Cline Jewelers | Edmonds (100 5th Ave N) [V6] | https://www.clinejewelers.com/ | https://www.clinejewelers.com/custom-ring-builder/ | Oui : constructeur 3D (étape 1 sur 4) | Aucun (200, nginx) | Le seul **constructeur 3D** dans le navigateur relevé dans l'État : « Design your ring online in stunning 3D », 8 styles de départ, « Start from scratch, build it in 3D », ou description avec photo [V6][V7]. L'outil est une solution clé en main (« StoneAlgo Ring Builder » dans la description de la page, script de jeweleros.com) [V7] : la 3D configurable est donc disponible sur étagère pour un bijoutier local [I]. La pierre se choisit en salle, la bague est prête « in just a couple of weeks » [V6]. Prix : non relevé, notre lecteur n'a pas chargé le modèle (« We couldn't load your ring design ») [V7]. Page sur le synthétique présente [V6]. |
| 3 | Green Lake Jewelry Works | Seattle (401 NE Northgate Way Ste 915A) et Bellevue (25 Bellevue Way SE) [V11] | https://www.greenlakejewelry.com/ | https://www.greenlakejewelry.com/new-design.aspx (New Design Builder) ; variante courte https://www.greenlakejewelry.com/start-designing.aspx | Oui : constructeur guidé en 10 étapes, sans rendu visuel, qui débouche sur un devis | Aucun (200, IIS) | Le parcours d'options le plus riche. Il couvre le type de pierre (naturel, **synthétique**, saphir, rubis), la forme (marquise comprise), le type de bague, les vues de dessus, de face et de profil, l'anneau, la gravure, le sertissage des pierres d'accompagnement, le filigrane, la finition, le métal (14/18 k, or blanc au palladium, platine, 22 k, mokume) et la taille [V9]. Le projet ne part qu'avec un compte (« Design Page ») [V9]. Transparence de fabrication : designers, modeleurs CAO, cireurs et sertisseurs travaillent côte à côte, dans un atelier ouvert [V8][V11]. Pierres synthétiques avec prix (p. ex. radiant 1,53 ct E VS1 à 1 239 $) [V12, index]. |
| 4 | DovEggs-Seattle (DovEggs International Inc) | Seattle (600 1st Ave #208, salle sur rendez-vous) [V14] | https://www.doveggs-seattle.com/ | https://www.doveggs-seattle.com/collections/semi-mount-only-1 (monture d'abord) ou https://www.doveggs-seattle.com/pages/start-with-loose-lab-grown-diamond (pierre d'abord) | Partiel : parcours monture + pierre, pas de 3D relevée | Aucun (200, Cloudflare sans défi) | **100 % synthétique et moissanite**, pas de diamant de mine [V15, index]. Vente directe d'usine (« Direct from Our Factory to You »), prix dès 171 $ pour une monture [V13]. CAO gratuite avant production [V13]. Fabriqué à la commande en 7 à 10 jours ouvrés (or et platine), puis 5 à 7 jours de transport ; certificats IGI [V15, index]. Délai comparable aux 14 jours ouvrés de JR Diamond [I]. Fabrication aux États-Unis et en Chine, d'après une interview de 2019 [V16, sec.]. Page d'accueil en « noindex, nofollow » [V13]. |
| 5 | Seattle Gold Grills | Renton (15 S Grady Way, Suite 408) [V18] | https://seattlegoldgrillz.com/ | https://seattlegoldgrillz.com/build/ring | Oui : aperçu 2D qui suit les choix, puis devis | Aucun (200, Cloudflare sans défi) | Constructeur de bague de fiançailles avec aperçu en direct. Les images sont étiquetées « Design rendering · shape & metal match » ou « Design inspiration · details may differ » [V18]. La FAQ dit honnêtement que l'aperçu n'est pas la bague finale (« helps you choose a direction »), à l'opposé de « ce que vous voyez existe » [V18]. Pierre naturelle, synthétique ou moissanite ; or ou platine ; alignement de prix sur le diamant naturel [V18]. Paiement par Cash App, Venmo, Zelle, Afterpay ou Klarna, pas de carte en ligne [V17]. Atelier familial depuis 1976, centré sur les grillz [V17]. |
| 6 | Ben Bridge Jeweler (chaîne régionale, Berkshire Hathaway) | Siège à Seattle depuis 1912 ; 36 magasins dans 9 États de l'Ouest [V21][V22, index][V23, index] | https://www.benbridge.com/ | https://www.benbridge.com/bella-ponte/settings (montures avec prix, ajout au panier) ; présentation : https://www.benbridge.com/bella-ponte | Non en ligne : le constructeur et l'hologramme ne sont qu'en magasin | Aucun (200, Cloudflare sans défi) ; pages en « noindex, nofollow » ; robots.txt interdit /cart, /search et les paramètres de filtre | 54 montures Bella Ponte en ligne, prix visibles de 1 799 à 5 199 $ [V20]. En magasin, un constructeur à essayer sur le doigt, puis une CAO montrée en **hologramme 360°** que le client emporte chez lui [V19]. Diamant naturel seul [V19][V22, index]. Atelier intégré depuis le rachat d'Olympic Manufacturing (Bellevue) [V24, index]. À écarter si la synthèse nationale le couvre déjà [I]. |
| 7 | Valerie Madison | Seattle (1422 34th Ave) [V27] | https://www.valeriemadison.com/ | https://www.valeriemadison.com/pages/custom-engagement-rings ; boutique : https://www.valeriemadison.com/collections/engagement-rings | Non | Aucun (200, Shopify/Cloudflare) | Le **prix du sur-mesure est expliqué** : à partir de 3 500 $, en général entre 5 000 et 20 000 $. Le client verse 300 $ d'acompte non remboursable, paie en une fois sous 5 000 $, et a droit à 2 retouches de CAO avant des frais de 250 $ [V25]. Bagues prêtes à expédier avec prix (de 3 900 à 8 600 $ sur la page lue), filtre « Diamond (Lab Grown) » [V26]. La France figure dans l'estimateur de livraison [V25]. |
| 8 | L T Denny | Seattle (515 Occidental Ave S) [V28] | https://www.ltdenny.com/ | https://www.ltdenny.com/pages/engagement-rings-in-seattle-wa | Non | Aucun (200, Shopify/Cloudflare) | 346 bagues de fiançailles en ligne avec prix (p. ex. 2 761 $), pierres seules naturelles et **synthétiques**, Tacori, outil interactif des 4 C du GIA, livraison standard gratuite [V28]. Sur mesure et refonte de bijoux de famille (« Heirloom Re-Design ») sur rendez-vous [V28]. Joaillier depuis 1993 [V28]. |
| 9 | Baraka Gems | Seattle (8218 Greenwood Ave N), avec un second atelier à West Concord, MA [V29] | https://barakagems.com/ | https://barakagems.com/collections/customizable-engagement | Non | Aucun (200, Shopify/Cloudflare) | 29 bagues « personnalisables » avec prix (de 1 550 à 1 850 $ pour les premières) [V30]. Sur mesure à partir de 3 500 $, en 12 à 16 semaines [V29]. Refonte de bijoux anciens (« Repurposing ») [V29]. Livraison gratuite aux États-Unis [V29]. |
| 10 | Stórica Studio | Seattle (« Handcrafted in Seattle since 2013 ») [V31] | https://storicastudio.com/ | https://storicastudio.com/pages/bespoke-jewelry | Non | Aucun (200, Shopify/Cloudflare) | Sur mesure expliqué étape par étape : croquis, rendus CAO, maquette en cire et devis final ; 8 à 12 semaines ; consultation en atelier ou par vidéo [V31]. Pierres seules en vente [V31]. Atelier montré au client (« Come see where it's made ») [V31, index]. Proche du discours « atelier en direct », mais sans outil en ligne [I]. |

## Candidats vus mais non retenus

- Menashe & Sons (West Seattle, depuis 1973) : vente en ligne avec prix (« Custom-Made Square 14k Rose Gold Channel Set Diamond Ring » à 1 895 $), 60 jours de garantie de remboursement, pas d'outil de création [V32].
- Seattle Diamonds (Seattle 98121, depuis 1985) : recherche de diamants et page sur le synthétique, sur mesure sur rendez-vous [V33]. Leur robots.txt demande 20 s entre deux pages : une seule page lue.
- Jewelry Design Center (Spokane, Kennewick, Missoula) : catalogue de créateurs (Tacori, Gabriel, Simon G…), pas de constructeur [V34]. Erreur 500 côté Firecrawl, une expiration curl, puis page lue : site instable, pas un blocage.
- Tracy Jewelers (Spokane, depuis 1950) : vitrine avec panier, pas d'outil de création [V35].
- Gemworks Fine Jewelers (Spokane) : affiche « Best Price First, No Haggle », CAO en interne et cire ; peu de vente en ligne [V36].
- Erik Runyan Jewelers (Vancouver, WA) : galerie avec un seul prix (2 790 $), CAO expliquée, pas de vente en ligne [V37].
- Johnson's Custom Jewelry (Spokane) : CAO et impression 3D, d'après l'extrait du moteur seulement [V38, index].
- Hors de l'État : Olive Ave Jewelry (salles en Arizona et en Utah) [V39, index] ; Taylor Custom Rings (Carlsbad, Californie) [V40, index]. Venazia, Signora et Reverra n'ont que des pages géociblées « Seattle » ou « Washington », sans implantation relevée [I]. Washington Diamond (washingtondiamond.com) : siège non vérifié, probablement dans la région de Washington D.C. [S].

## À retenir pour JR Diamond

- Aucun joaillier de l'État ne montre en ligne une 3D issue du fichier de fabrication. La seule 3D relevée (Cline) est un outil générique sous licence ; Seattle Gold Grills prévient que son aperçu n'est pas la bague [V7][V18].
- La transparence passe par le **processus** plutôt que par le prix détaillé : Joseph Jewelry (acompte, CAO, cire), Valerie Madison (barème du sur-mesure), Green Lake (atelier ouvert) [V1][V25][V11].
- Le synthétique est partout proposé ; DovEggs en fait son seul produit, avec un délai de 7 à 10 jours ouvrés [V15, index].
- Joseph Jewelry date ses débuts tantôt de 1996, tantôt de 1995 sur deux de ses pages [V1][V2] : à vérifier avant de citer une date.

## Sources (lues le 15/11/2026)

1. https://www.josephjewelry.com/design-your-own (Firecrawl, 200)
2. https://www.josephjewelry.com/design-your-own-engagement-ring (Firecrawl, 200)
3. https://www.josephjewelry.com/engagement-rings (Firecrawl, 200)
4. https://www.josephjewelry.com/engagement-rings/leaf-prongs-pear-shape-diamond-engagement-ring-108705 (Firecrawl, 200)
5. https://www.josephjewelry.com/contact (curl, 200)
6. https://www.clinejewelers.com/custom-engagement-rings/ (Firecrawl, 200)
7. https://www.clinejewelers.com/custom-ring-builder/ (Firecrawl et curl, 200 ; script https://www.jeweleros.com/main_theme/static/dist/partner_config.js)
8. https://www.greenlakejewelry.com/Design-Your-Own-Ring.aspx (Firecrawl, 200)
9. https://www.greenlakejewelry.com/new-design.aspx (Firecrawl, 200)
10. https://www.greenlakejewelry.com/start-designing.aspx (Firecrawl, 200)
11. https://www.greenlakejewelry.com/Locations.aspx (curl, 200)
12. https://www.greenlakejewelry.com/gallery/lab-grown-diamonds.aspx (prix lus dans l'extrait de recherche Firecrawl ; en lecture directe, les prix sont chargés par script)
13. https://www.doveggs-seattle.com/ (Firecrawl, version en cache du 13/11, 200)
14. https://www.doveggs-seattle.com/pages/doveggs-showroom (curl, 200)
15. https://www.doveggs-seattle.com/pages/lab-grown-diamonds (extrait Parallel)
16. https://www.pricescope.com/community/threads/interview-series-doveggs-moissanite.253161 (interview de 2019, extrait Parallel) ; https://www.doveggs-seattle.com/pages/dovies-answers (extrait Parallel : société DovEggs International Inc, fondée en 2014)
17. https://seattlegoldgrillz.com/ (Firecrawl, 200)
18. https://seattlegoldgrillz.com/build/ring (Firecrawl, 200)
19. https://www.benbridge.com/bella-ponte (Firecrawl, 200)
20. https://www.benbridge.com/bella-ponte/settings (Firecrawl, 200)
21. https://www.benbridge.com/about-us.html (curl, 200 : « 36 locations »)
22. https://www.benbridge.com/corporate-responsibility.html (extrait Parallel : « Headquartered in Seattle since 1912 », neuf États de l'Ouest, diamant naturel)
23. https://www.berkshirehathaway.com/2025ar/202510-k.pdf (formulaire 10-K 2025, extrait Parallel : « Ben Bridge… based in Seattle… nine western states »)
24. https://nationaljeweler.com/articles/14173-lisa-bridge-to-depart-ben-bridge-jeweler (extrait Parallel : rachat d'Olympic Manufacturing, Bellevue)
25. https://www.valeriemadison.com/pages/custom-engagement-rings (Firecrawl, 200)
26. https://www.valeriemadison.com/collections/engagement-rings (Firecrawl, 200)
27. https://www.valeriemadison.com/pages/about (curl, 200)
28. https://www.ltdenny.com/pages/engagement-rings-in-seattle-wa (Firecrawl, 200)
29. https://barakagems.com/pages/custom-engagement-rings-and-fine-jewelry (curl, 200)
30. https://barakagems.com/collections/customizable-engagement (curl, 200)
31. https://storicastudio.com/pages/bespoke-jewelry (curl, 200) ; « Come see where it's made » : extrait de recherche Firecrawl de https://storicastudio.com/
32. https://www.menashejewelers.com/ (Firecrawl, version en cache du 13/11)
33. https://seattlediamonds.com/ (curl, 200)
34. https://www.jewelrydesigncenter.com/ (Firecrawl 500, puis curl 200)
35. https://www.tracyjewelers.com/ (Firecrawl, 200)
36. https://www.gemworksfinejewelers.com/custom-design (curl, 200)
37. https://www.runyansjewelers.com/engagement-wedding (Firecrawl, 200)
38. https://www.shopjcjonline.com/ (extrait de recherche Firecrawl seulement)
39. https://oliveavejewelry.com/our-locations (extrait de recherche Firecrawl : Mesa, Arizona)
40. https://www.yelp.com/biz/taylor-custom-rings-carlsbad-11 (extrait de recherche Firecrawl : Carlsbad, Californie)
41. robots.txt de chaque site, lus par curl le 15/11 (tous en 200). Points à noter : Ben Bridge interdit /cart, /search et les paramètres `prefn`, `dwvar`, `page` ; Seattle Diamonds demande 20 s entre deux pages ; Tracy Jewelers, 2 s ; Olive Ave interdit /shop/stone-selection/.
42. En-têtes HTTP des 10 pages d'accueil retenues (curl -I, 15/11) : tous en 200, sans `cf-mitigated` (pas de défi Cloudflare).
