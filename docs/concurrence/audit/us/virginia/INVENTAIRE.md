# Virginie : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, repris et contrôlé le 25 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition en Virginie et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Sont exclus les vendeurs en ligne nationaux, les chaînes nationales (dont Diamonds Direct, présente à Glen Allen), les grands magasins et les grandes maisons.

Méthode :

- Première passe le 15/11 : curl, navigateur de rendu Firecrawl, lecture de page Parallel (parfois une copie en cache, datée dans les sources).
- Reprise le 25/11 : recherche web générique (Parallel Search) pour trouver de nouveaux candidats. Puis, pour chaque site, robots.txt relu avant toute page, et page de départ redemandée par curl (identité par défaut). Les pages en JavaScript (JewelerOS, Danforth, Adele, Mervis) ont été rendues dans un Chromium sans écran lancé en local (Playwright, identité « HeadlessChrome » non modifiée). Pour quelques boutiques Shopify, la liste publique des produits (`products.json`, `.js`) a été lue pour relever les prix ; ces chemins ne sont pas interdits par leurs robots.txt.
- Au plus une page toutes les 2 secondes par site (10 secondes chez Chrysella, dont le robots.txt l'exige).
- Aucun formulaire rempli ou envoyé, aucun compte créé, aucune donnée saisie, aucun panier ouvert, aucun chat ni SMS ouvert. Aucun contrôle de configurateur actionné : on a seulement affiché la première étape. Aucune requête n'a contourné une protection.

Chaque fait porte une marque :

- **V** (vérifié) : page lue ou rendue, à l'adresse citée en section Sources. « V 25/11 » : relu lors de la reprise ; « V 15/11 » : lu lors de la première passe et non relu ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

Blocages et protections (V 25/11) :

- Les 20 sites de Virginie interrogés le 25/11 ont tous répondu 200 à curl, sans défi Cloudflare ni captcha bloquant. Aucun robots.txt n'interdit les pages de départ citées, ni ne vise `ClaudeBot` pour l'exclure. Grace Marie, VA Diamond Co. et AmRhein's (même modèle de fichier) autorisent même nommément `ClaudeBot`, `Claude-User` et `Claude-SearchBot` (`Allow: /`) et ferment le site aux robots SEO.
- Délais imposés et respectés : `Crawl-delay: 10` chez Chrysella ; `Crawl-delay: 2` chez Midtown, William Jeffrey's et Quinn's.
- Ben David charge un reCAPTCHA invisible sur la page du concepteur (iframe `recaptcha/api2/anchor`, `size=invisible`). Il ne gêne pas la lecture : I, il protège l'enregistrement du modèle.
- Danforth Diamond : `/robots.txt` renvoie la page de l'application (pas de fichier robots). La fiche produit ouverte depuis le catalogue affiche « Failed to load product. AxiosError: Request failed with status code 404 ». C'est un défaut du site, pas un blocage ; pas de nouvel essai.
- Le robots.txt de Fink's (Shopify) contient des instructions adressées aux agents d'achat automatiques. Elles ont été traitées comme une donnée, sans suite.
- Hors périmètre : venazia.com avait répondu 403 le 15/11 (V 15/11) ; il n'a pas été réinterrogé. Ses pages « Virginia Beach », « Richmond », « Norfolk » sont des pages de référencement par ville, sans adresse en Virginie établie (I, extraits de recherche du 25/11).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Fink's Jewelers | Roanoke (siège) ; magasins à Lynchburg et Richmond, en Caroline du Nord et au Tennessee | https://www.finks.com | https://www.finks.com/collections/the-studio-collection (exemple configurable : https://www.finks.com/products/studio-collection-trellis-round-diamond-engagement-ring) | oui (fiche configurable : métal × carat × qualité, un prix par combinaison) ; 3D non vérifiée | aucun (Shopify, 200 ; robots.txt standard Shopify) | C'est le site dont les prix sont les plus détaillés. La Studio Collection compte 107 bagues, de 2 855 à 55 090 $ (V 25/11). Fink's la fabrique « in-house at our own North American manufacturing facility. […] No middleman » (V 25/11). Exemple, la Trellis ronde : 56 combinaisons (or 14 k blanc, jaune ou rose, ou platine ; 0,50 à 2,00 ct ; deux qualités, H-I SI ou K SI), de 2 875 à 30 015 $ (V 25/11). Expédition « up to 4 weeks » (V 15/11). Visionneuse 360° dans le thème (I). |
| 2 | Danforth Diamond | North Chesterfield (Richmond), 10700 Trade Road | https://www.danforthdiamond.com | https://www.danforthdiamond.com/jewelry/engagement-rings | partiel (catalogue de 60 montures, filtres métal, griffes, forme, mode de fabrication) | aucun (200) ; fiches produit en erreur 404 dans notre navigateur | Le fabricant vend en direct : filiale de Hoover & Strong (I ; le site interroge l'API de hooverandstrong.com, V 15/11). Bagues faites aux États-Unis en métal recyclé « Harmony », or Fairmined en option (V 15/11 et 25/11). Fabrication en 5 à 7 jours ouvrés (I, FAQ en extrait d'index). Le code prévoit un prix affiché, mais aucun prix n'a pu être lu (I). |
| 3 | Ben David Jewelers | Danville, 459 Mount Cross Road | https://www.bendavidjewelers.com | https://www.bendavidjewelers.com/page/custom-ring-builder.html | oui (concepteur 3D JewelerOS : « Step 1 of 4 », 8 styles et « Start from scratch ») | aucun (200 ; robots.txt n'interdit que `/cgi-bin/`, `/exec/`, `/admin/`) ; reCAPTCHA invisible | Le seul site qui écrit noir sur blanc que l'outil affiche « the real price of your engagement ring setting », pierre exclue (V 25/11). Le prix complet passe ensuite par un texto ou un rendez-vous ; bague « Ready in 2-4 weeks » (V 25/11). Collection en synthétique au menu (V 25/11). |
| 4 | Midtown Jewelers | Herndon, 700 Lynn St Suite B | https://www.midtownjewelersinc.com | https://www.midtownjewelersinc.com/pages/custom-ring-builder | oui (même concepteur 3D JewelerOS, script `jos.js`) | aucun (200 ; `Crawl-delay: 2` respecté) | Parcours en ligne puis en boutique : dessin en 3D en ligne, pierre choisie dans la salle de Herndon, commande finalisée avec l'équipe (V 25/11). Bague prête « in just a couple of weeks » (I : même texte que Ben David et Sycamore). Maison familiale, ouverte en 2007 (I). |
| 5 | Mervis Diamond Importers | Tysons, 1900 Mervis Way (et Washington DC, Rockville MD) | https://www.mervisdiamond.com | https://www.mervisdiamond.com/apps/diamondtools/ | partiel (recherche de diamants GemFind : naturel, synthétique, couleur) | aucun (Shopify, 200) | Diamants listés avec prix et certificat, par exemple un coussin 2,02 ct I SI2 GIA à 9 395 $, disponibilité « By Request » (V 25/11). 14 133 diamants naturels listés au 15/11 (V 15/11). Bagues dès 1 650 $ (V 25/11), dont le solitaire coussin en or 18 k ou platine, de 7 490 à 8 290 $ (V 15/11). Pas de montage monture + pierre en ligne relevé (I). |
| 6 | Nine Roses | Richmond, 3300 W Broad Street Suite 201 (atelier de Scott's Addition, sur rendez-vous) | https://www.ninerosesjewelers.com | https://www.ninerosesjewelers.com/collections/customizable-collections | non (collection « customizable » à prix d'exemple ; sur mesure sur demande) | aucun (Shopify, 200) | Nouveau le 25/11. Prix d'exemple de la bague complète, avec la composition qu'il couvre : « Pictured and priced in this example is: 14k Yellow Gold 1ct H/VS1 oval cut lab created » (V 25/11). 31 modèles, de 1 000 à 10 600 $ (V 25/11). Le procédé est décrit : devis, dessin, recherche de la pierre avec « videos and photos of the stones sourced for you » (V 25/11). Sur mesure dès 3 500 $, fabrication jusqu'à 8 semaines (V 25/11). Pierre de famille acceptée (V 25/11). Pas de retour sur le sur-mesure (V 25/11). |
| 7 | Chrysella | Woodbridge, 15101 Potomac Town Pl (et Arlington) | https://chrysella.com | https://chrysella.com/custom-jewelry-design/ | non (sur mesure sur rendez-vous) | aucun (WordPress, 200 ; `Crawl-delay: 10` respecté) | Rendus 3D et prototype en cire ou en résine, autant de retouches que voulu (V 25/11). Le prototype est envoyé gratuitement avant la fabrication : « We will ship you a wax resin to see first at no cost to you » (V 25/11). Sur mesure dès 500 $, en 3 à 6 semaines (V 25/11). Diamants naturels, synthétiques et moissanite au menu (V 25/11). |
| 8 | Sycamore Jewelers | Midlothian (Richmond) | https://sycamorejewelers.com | https://sycamorejewelers.com/pages/custom-ring-builder | oui (concepteur 3D JewelerOS) | aucun (Shopify, 200) | Même parcours que Midtown : dessin en 3D en ligne, pierre choisie dans la salle de Midlothian (V 25/11). Bague prête « in just a couple of weeks » (I, extrait de recherche du 25/11). Maison familiale depuis 1998, propriétaire diplômé du GIA (I, extrait de recherche du 25/11 ; V 15/11). |
| 9 | Washington Diamond | Falls Church | https://washingtondiamond.com | https://washingtondiamond.com/pages/custom-engagement-rings-lab-grown-northern-va | non (sur mesure sur consultation) | aucun (Shopify, 200) | Procédé expliqué : rendus CAO, maquette en cire facultative, « within 3 to 6 weeks » (V 25/11). Remboursement intégral si la pièce déçoit (V 25/11). 210 bagues en ligne, de 799 à 21 900 $, dont des pierres synthétiques et naturelles proposées côte à côte (V 25/11). « Since 1969 » (V 25/11). |
| 10 | Adele Diamond | Virginia Beach | https://adelediamond.com | https://adelediamond.com/apps/adele-diamond/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE&product_id=undefined | oui pour les alliances (constructeur à prix immédiat) ; non pour la bague de fiançailles (catalogue Stuller) | aucun (Shopify, 200) | Seul constructeur du recensement qui affiche à l'ouverture un prix complet et une date d'expédition (V 25/11) ; I : ils suivent chaque choix. Exemple : alliance bombée de 7 mm, or blanc 14 k, taille 10, 3 028,25 $, « Ships as soon as Today » (V 25/11). Choix des métaux : or 10 à 22 k, platine, palladium, titane, Damas (V 25/11). Diamants GIA vendus à l'unité (V 15/11). |

## Ce qu'il faut retenir pour JR Diamond

- **Le concepteur 3D en marque blanche est courant chez les indépendants.** Ben David, Midtown, Sycamore et Grace Marie utilisent tous le même outil, JewelerOS (StoneAlgo) (V 25/11, scripts `jeweleros.com`). Le joaillier paie 25 $ par contact dont le numéro est vérifié (I). L'outil fournit un fichier CAO fabricable (I). StoneAlgo promet « the ring on your screen is precisely what you'll receive » (I). C'est la promesse de JR Diamond : la différence doit tenir à la pierre réelle filmée et au fichier de l'atelier lui-même, pas à la 3D seule (I).
- **Le prix reste partiel.** Chez Ben David, l'outil donne le prix de la monture seule (V 25/11). Fink's affiche un prix par combinaison métal, carat et qualité (V 25/11). Nine Roses chiffre la bague complète et précise la pierre comprise (V 25/11). Ce sont les modèles les plus proches du prix « à partir de » expliqué que prévoit JR Diamond.
- **Le fabricant vend en direct.** Danforth Diamond (groupe Hoover & Strong, I) annonce 5 à 7 jours ouvrés (I). Face à un fabricant américain, le délai de 14 jours ouvrés de JR Diamond n'est pas un avantage.
- **Montrer la fabrication.** Chrysella envoie le prototype en cire avant la fabrication (V 25/11). Nine Roses envoie photos et vidéos des pierres retenues (V 25/11). Washington Diamond montre la CAO et la cire (V 25/11). Ce sont les pratiques les plus proches de « l'atelier en direct ». Aucun ne montre la fabrication elle-même en ligne (I).

## Non retenus (vérifiés, mais moins pertinents ou hors périmètre)

| Acteur | Ville | Raison |
|---|---|---|
| Grace Marie Jewelers | Lynchburg, 825 Main Street | Quatrième site équipé de JewelerOS (V 25/11, `jos.js`) ; page de départ https://gracemariejewelers.com/design-your-ring/ (200). Sorti du classement au profit de Nine Roses : il n'apporte rien de plus que Midtown et Sycamore. |
| AmRhein's Fine Jewelers | Roanoke, 4347 Starkey Road | Nouveau le 25/11. Maison familiale (« fourth-generation », depuis 1921) ; sur mesure en 4 étapes, avec un modèle CAO 3D montré en boutique (V 25/11, https://www.amrheins.com/custom-design/). Pas d'outil en ligne. |
| Schwarzschild Jewelers | Richmond, Midlothian, Charlottesville | 81 bagues avec prix, de 1 585 à 93 335 $ (V 15/11) ; sur mesure sans outil en ligne (page de sur-mesure 200, V 25/11). |
| William Jeffrey's, Ltd. | Mechanicsville | Constructeur en 3 étapes, mais la copie en cache du 2/6 affichait « 0 diamonds found » (V, cache) ; non relu (robots.txt lu le 25/11). |
| Segal & Co Fine Jewelers | Chesapeake | 156 bagues synthétiques au catalogue, recherche de diamants (V 15/11) ; pas de configurateur. |
| Tidewater Diamond | Chesapeake | Plus de 250 bagues avec prix (V 15/11) ; sur mesure avec « exact 3D image » montrée en boutique (I, extrait de recherche du 25/11). |
| Carreras Jewelers | Richmond | 43 montures avec prix, de 1 275 à 10 835 $ (V 15/11) ; pas de configurateur. |
| Quinn's Goldsmith | Woodbridge | Bagues avec prix, filtre naturel ou synthétique (V 15/11) ; constructeur en boutique seulement (I). |
| Hauser's Jewelers | Newport News, Williamsburg | Sur mesure sur consultation, sans prix ni outil (V 15/11). |
| VA Diamond Co. | Fredericksburg, Richmond, Petersburg | Recherche de diamants naturels et synthétiques (V 15/11) ; pas de bague configurable relevée. |
| David Nygaard, Andrew Minton, Lustre, Dransfield | Virginia Beach, Charlottesville, Richmond | Sur mesure sur rendez-vous, sans prix ni outil relevé (I). |
| Diamonds Direct | Glen Allen | Exclu : chaîne nationale (S : rachat par Signet, non revérifié). |
| Venazia | inconnue | Exclu : 403 le 15/11 ; pages par ville sans implantation établie en Virginie (I). |
| Simon Jewelers, Taylor Custom Rings, Elite Jewelers | Caroline du Nord, Californie, inconnue | Exclus : hors de Virginie ou adresse introuvable (V 15/11). |

## Sources

### Lues le 25/11/2026

**robots.txt.** Lus par curl, tous en 200 : www.finks.com, www.danforthdiamond.com (page de l'application), www.bendavidjewelers.com, www.midtownjewelersinc.com, www.mervisdiamond.com, chrysella.com, sycamorejewelers.com, washingtondiamond.com, gracemariejewelers.com, adelediamond.com, schwarzschild.com, www.williamjeffreys.com, segaljewelers.com, tidewaterdiamond.com, www.carrerasjewelers.com, www.quinnsgoldsmith.com, hausersjewelers.com, www.vadiamonds.com, www.ninerosesjewelers.com, www.amrheins.com.

**Pages par acteur :**

1. Fink's :
   - https://www.finks.com/collections/the-studio-collection (curl, 200) ;
   - https://www.finks.com/collections/the-studio-collection/products.json (107 produits, 2 855 à 55 090 $) ;
   - https://www.finks.com/products/studio-collection-trellis-round-diamond-engagement-ring.js (56 variantes, options, 2 875 à 30 015 $) ;
   - https://www.finks.com/pages/custom-design-center (« in-house at our own North American manufacturing facility », « No middleman »).
2. Danforth Diamond :
   - https://www.danforthdiamond.com/jewelry/engagement-rings (Chromium : « 60 results », filtres) ;
   - https://www.danforthdiamond.com/jewelry/item/AFC%252FM%252FP41 (Chromium : « Failed to load product … 404 »).
3. Ben David Jewelers :
   - https://www.bendavidjewelers.com/page/custom-ring-builder.html (curl et Chromium : `partner_config.js` de JewelerOS, « Step 1 of 4 », 8 styles, adresse, reCAPTCHA invisible) ;
   - https://www.bendavidjewelers.com/page/custom-engagement-rings.html (curl : « real price of your engagement ring setting… does not include your center stone(s) »).
4. Midtown Jewelers : https://www.midtownjewelersinc.com/pages/custom-ring-builder (curl : `jeweleros.com/static/dist/jos.js`).
5. Mervis : https://www.mervisdiamond.com/apps/diamondtools/ (curl et Chromium : onglets Natural, Lab Grown, Fancy Color ; liste avec prix) ; https://www.mervisdiamond.com/collections/engagement-rings/products.json (250 produits, prix dès 1 650 $).
6. Nine Roses :
   - https://www.ninerosesjewelers.com/ (adresse, Scott's Addition, prix) ;
   - https://www.ninerosesjewelers.com/collections/customizable-collections/products.json (31 produits, 1 000 à 10 600 $, descriptions « Pictured and priced in this example ») ;
   - https://www.ninerosesjewelers.com/pages/the-bespoke-process (vers lequel redirige `/pages/custom` : étapes, vidéos et photos des pierres, dès 3 500 $, jusqu'à 8 semaines, pas de retour).
7. Chrysella : https://chrysella.com/custom-jewelry-design/ (curl : rendus 3D, prototype en cire ou en résine envoyé sans frais, dès 500 $, 3 à 6 semaines, adresses de Woodbridge et d'Arlington, menus naturel, synthétique, moissanite).
8. Sycamore : https://sycamorejewelers.com/pages/custom-ring-builder (curl : `partner_config.js` de JewelerOS).
9. Washington Diamond :
   - https://washingtondiamond.com/pages/custom-engagement-rings-lab-grown-northern-va (curl : CAO, cire facultative, 3 à 6 semaines, remboursement, « since 1969 ») ;
   - https://washingtondiamond.com/collections/engagement-rings/products.json (210 produits, 799 à 21 900 $).
10. Adele Diamond : https://adelediamond.com/ (curl : lien du constructeur) ; page du constructeur citée dans le tableau (Chromium : « Done - $3,028.25 », « Ships as soon as Today (Wed. Nov. 25th*) », liste des métaux).

**Non retenus :** https://gracemariejewelers.com/design-your-ring/ (curl : `jos.js`, `partner_config.js`) ; https://www.amrheins.com/custom-design/ (curl : étapes, CAO, adresse de Roanoke) ; https://schwarzschild.com/pages/custom-jewelry-design (curl, 200).

**Extraits de recherche web** (Parallel Search, 25/11/2026), source des marques I de cette date : https://sycamorejewelers.com/pages/custom-engagement-rings ; https://www.midtownjewelersinc.com/pages/custom-engagement-rings ; https://www.bendavidjewelers.com/page/custom-engagement-rings.html ; https://tidewaterdiamond.com/pages/custom-design ; https://www.venazia.com/designing-rings-virginia-beach-va (et pages Richmond, Norfolk) ; https://www.amrheins.com/custom-design ; https://www.ninerosesjewelers.com/.

### Lues le 15/11/2026 (première passe, non relues)

- Fink's : page produit Trellis (curl : « online bridal orders may take up to 4 weeks to ship », composants `360-product-viewer` et `mobile-360`) ; https://www.finks.com/pages/store-locator.
- Danforth : https://www.danforthdiamond.com/mission et https://www.danforthdiamond.com/contact-us (Parallel, cache du 3/11). Extrait d'index de la FAQ, https://www.danforthdiamond.com/faq (« custom made in the USA and take 5 to 7 business days »). Script de l'application (API `goldfinger.hooverandstrong.com`, champs `DanforthPrice`, `MinedOrLab`).
- Mervis : https://www.mervisdiamond.com/apps/diamondtools/ (Firecrawl : 14 133 résultats).
- Adele : https://adelediamond.com/collections/all/products.json (diamants GIA à l'unité).
- JewelerOS et StoneAlgo (extraits d'index) : https://www.getjeweleros.com/ ; https://jeweleros.com/ ; https://www.stonealgo.com/custom/engagement-rings/custom-ring-builder.
- Non retenus : `/collections/all-engagement-rings/products.json` de schwarzschild.com ; https://www.williamjeffreys.com/ringsettings-diamonds (Parallel, cache du 2/6) ; `/collections/lab-grown-engagement-rings/products.json` de segaljewelers.com ; https://tidewaterdiamond.com/collections/engagement-rings/products.json ; https://www.carrerasjewelers.com/collections/engagement-ring-mountings/products.json ; https://www.quinnsgoldsmith.com/ ; https://hausersjewelers.com/pages/engagement-rings-custom-engagement-rings ; https://www.vadiamonds.com/ ; https://www.simonjewelers.com/ ; https://www.taylorcustomrings.com/ ; https://www.elitejewelers.com/pages/build-your-own-ring ; https://www.venazia.com/ (403).
