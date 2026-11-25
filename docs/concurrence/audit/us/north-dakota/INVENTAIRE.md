# Dakota du Nord : inventaire des joailliers locaux qui vendent en ligne

Recensement du 25 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Dakota du Nord et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales et les grandes maisons sont exclus. Les enseignes régionales dont le siège est dans un autre État sont décrites à part (« Hors classement »), comme dans les inventaires du Montana, du Nebraska et de l'Iowa.

Le marché est petit : quatre villes (Fargo, Bismarck, Grand Forks, Minot) concentrent presque tous les joailliers indépendants. La liste ci-dessous retient les dix meilleurs sites, dont plusieurs sans configurateur, comme le prévoit le cahier des charges quand les candidats sont peu nombreux.

Méthode :

- recherche des candidats par requêtes génériques (« Fargo ND jeweler engagement rings », etc.) dans le moteur de recherche web ; Firecrawl (crédits épuisés) et Parallel (limite gratuite atteinte) n'étaient pas disponibles ;
- lecture du robots.txt de chaque site, puis des pages, comme un visiteur ordinaire : curl avec un en-tête de navigateur Safari, et, pour les pages construites en JavaScript, le Chromium local de l'espace de travail (Playwright, sans écran, identité du navigateur laissée par défaut) ;
- une page à la fois par site, avec au moins 2 secondes entre deux pages (4 secondes chez Schmidt's, qui demande `Crawl-delay: 3`) ;
- aucun formulaire rempli, aucun compte créé, aucun chat ouvert, aucune visite du panier.

Chaque fait porte une marque :

- **V** (vérifié) : page lue le 25/11/2026, à l'adresse citée ;
- **I** (inféré) : déduit d'un extrait de moteur de recherche, d'un annuaire ou de plusieurs indices ;
- **S** (supposé).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Zorells Jewelry | Bismarck | https://zorells.com | https://zorells.com/apps/ringbuilder/settings/ | oui (GemFind, photos) | aucun (robots.txt Shopify : `Allow: /`) | Le parcours le plus complet de l'État : monture → diamant → bague, 552 montures avec prix dès 2 601 $ (V). Recherche de diamants avec onglets « Natural » et « Lab Grown », certificats GIA et prix (V). Le processus sur mesure est expliqué étape par étape : CAO, cire imprimée, fonte (V). Achat direct à Anvers revendiqué (V). |
| 2 | Royal Jewelers | Fargo | https://www.royaljewelersfargo.com | https://www.royaljewelersfargo.com/create-your-ring | oui (Build.Shop) | aucun (robots.txt : `Allow: /`, seul Amazonbot est interdit) | 899 montures avec prix et un filtre « Lab-Grown Diamond » (V). Mais l'étape du diamant est vide (« No Diamonds available! », V). Rendu 3D sur mesure, et une galerie « image de référence → croquis → bague finie » : c'est la meilleure preuve de fabrication de l'État (V). |
| 3 | Wimmer's Diamonds | Fargo | https://www.wimmersdiamonds.com | https://www.wimmersdiamonds.com/collections/engagement-rings | non | aucun (robots.txt Shopify : `Allow: /`) | 230 bagues de fiançailles avec prix, de 1 175 $ à plus de 6 000 $ (V). Alliances en vente directe (« Add to Cart »), dont une alliance en diamants synthétiques à 940 $ (V). Sur mesure en 4 étapes avec « 3D preview » en CAO (V). Livraison offerte dès 350 $, retours sous 30 jours (V). |
| 4 | Crown Jewels | Fargo | https://www.crownjewelsfargo.com | https://www.crownjewelsfargo.com/bridal | oui, annoncé (« interactive ring builder », hébergé chez Jewelershowcase) | **partiel** : le catalogue et le constructeur sont sur `crownjewelsfargo-frame.jewelershowcase.com`, dont le robots.txt interdit tout (`Disallow: /`) ; non lus | Annonce « more than 800 combinations » de montures et de styles (V). Diamants naturels et synthétiques (V). Sur mesure en 4 étapes et refonte de bijoux de famille, avec photos avant/après (V). |
| 5 | Schmidt's Gems & Fine Jewelry | Fargo | https://schmidtsjewelry.com | https://schmidtsjewelry.com/wedding-bands/wedding-band-builder/ | oui, pour les alliances (« Band Builder » Jewelershowcase) | **partiel** : le catalogue et le constructeur sont intégrés depuis `schmidtsjewelry-frame-categoryembed.jewelershowcase.com` (robots.txt : `Disallow: /`) ; non lus | Catalogue par type, style et forme, avec rubriques « Lab-Grown Diamonds » et « Lab-Grown Diamond Bands » (V). Services de CAO/FAO (V). |
| 6 | Signature Jewelers | Grand Forks | https://www.signaturejewelersgf.com | https://www.signaturejewelersgf.com/Category/Engagement/Engagement_Rings | non | aucun (robots.txt : `Allow: /`, dossiers techniques interdits) | 923 bagues de fiançailles et 3 507 montures en ligne, avec filtres de prix (V). Mais chaque fiche affiche « Call Store For Price » (V). Bijoux sur rendez-vous (V). |
| 7 | Kokkeler's Jewelry | Bismarck | https://kokkelersjewelry.com | https://kokkelersjewelry.com/custom-design/ | non | aucun (robots.txt : dossiers WordPress interdits) | Maison fondée en 1955 (V). Sur mesure avec le logiciel de CAO Gemvision, un orfèvre de plus de 20 ans d'expérience, budget et délai fixés à la consultation (V). Spécialiste de la taille « Ideal Cut » (V). Aucun prix. |
| 8 | Walkers n' Daughters Jewelers | Bismarck | https://www.walkersndaughters.com | https://www.walkersndaughters.com/build-your-own-insite4 | non (recherche de diamants tierce) | aucun (robots.txt : tout autorisé) | Le bouton « Search Diamonds » ouvre un outil tiers, `diamonds.greenrocksdiamonds.com` (V, lien). La page « build-your-own » ne montre que les coordonnées (V). Deux magasins, dont un au Kirkwood Mall (V). |
| 9 | Lien's Jewelry | Minot | https://liensjewelry.com | https://liensjewelry.com | inconnu | **bloqué** : la page d'accueil renvoie une page « Bot Verification » (reCAPTCHA), non contournée ; le robots.txt n'interdit que `/wp-admin/` | Maison familiale du centre de Minot, avec une histoire revendiquée depuis 1903 (I, annuaire). Bagues de fiançailles et alliances (I). Seul indépendant de Minot repéré avec un site propre. |
| 10 | Westley's Jewelry | Bismarck | https://westleysjewelry.com | https://westleysjewelry.com/jewelry/ | non | aucun (robots.txt : seul `/wp-admin/` est interdit) | Site vitrine (V). Maison fondée en 1938 (V). Diamants « hearts & arrows » de taille idéale et sur mesure (V). Ni prix ni boutique en ligne. |

## Détail par acteur

### 1. Zorells Jewelry (Bismarck)

- V : magasin au 221 South 9th Street, Bismarck, ND 58504 (pied de page de https://zorells.com/apps/ringbuilder/settings/).
- V : la page https://zorells.com/apps/ringbuilder/settings/ (rendue dans Chromium) propose trois étapes, « Choose your Setting / Choose your Diamond / Review Complete Ring » :
  - 552 montures (« Results 1 to 12 of 552 ») ; premières montures à 2 601 $, 3 461 $, 3 601 $, 3 751 $, et ainsi de suite ;
  - curseur de prix de 0 à 43 441 $ ;
  - métaux : or 14 k et 18 k (blanc, jaune, rose) et platine ;
  - 10 formes ;
  - mention « Powered by GemFind ».
- V : la recherche de diamants https://zorells.com/apps/diamondtools?shape=oval affiche des onglets « Natural », « Lab Grown » et « Fancy Color ». Pour la forme ovale : « 2681 Similar Diamonds ». Exemple : 0,30 ct, G, SI1, certificat GIA, 1 152 $.
- V : la page https://zorells.com/collections/engagement-rings compte 350 produits, avec des prix « from » (par exemple Verragio Venetian à 4 320 $).
- V : la page https://zorells.com/pages/build-your-own décrit le sur mesure : consultation, CAO modifiable, cire « grown » en prototypage rapide (Envision Tec ou Solidscape), fonte à cire perdue.
- V : la page https://zorells.com/pages/antwerp-diamonds revendique l'achat des diamants à Anvers, auprès de sightholders De Beers, pour supprimer les intermédiaires. La page porte aussi le slogan « The diamond prices can't be beat ».
- V : les pages affichent l'avertissement « Contact store for current pricing ».
- Intérêt : c'est le concurrent local le plus proche de la mécanique « configurer, puis choisir la pierre » de JR Diamond. Il propose le synthétique et montre le procédé de fabrication. Les images sont des photos de catalogue fournisseur, sans 3D (V : aucune vue 3D dans le constructeur rendu).

### 2. Royal Jewelers (Fargo)

- V : magasin au 73 Broadway North, Fargo, ND 58102 (https://www.royaljewelersfargo.com/create-your-ring).
- V : la page https://www.royaljewelersfargo.com/create-your-ring propose trois étapes, « Choose Your Setting / Choose Your Diamond / Complete Your Ring » :
  - 899 articles, sur 57 pages ;
  - métaux : or 14 k et 18 k (rose, blanc, jaune) et platine ;
  - filtre « Stone type » avec « Lab-Grown Diamond » ;
  - exemples de prix : Tacori Reverie de 5 990 à 15 590 $, Tacori Dantela de 6 490 à 7 790 $ ;
  - disponibilité : « CALL FOR AVAILABILITY ».
- V : la page https://www.royaljewelersfargo.com/diamonds (étape du diamant) affiche « 0 ITEMS » et « No Diamonds available! ». Le constructeur s'arrête donc en pratique à la monture.
- V : la page https://www.royaljewelersfargo.com/custom-engagement-rings décrit le parcours :
  - le client apporte une photo vue sur un réseau social ;
  - « computerized, 3D rendering », puis modifications avec le dessinateur ;
  - fabrication sur place ;
  - mention « All rings are crafted with VS-SI clarity and G-H color diamonds » ;
  - une galerie « Reference Image / Sketch Based on Reference Image / Finished Product », répétée pour sept bagues.
- V : le site est réalisé par Amptive, sur la plateforme Build.Shop (pied de page). C'est la même plateforme que Goldsmith Gallery dans l'inventaire du Montana (I, d'après la structure identique des pages).
- I : maison fondée en 1928 (annuaire willyou.net).

### 3. Wimmer's Diamonds (Fargo)

- V : magasin au 4582 32nd Avenue S., Suite A, Fargo, ND 58104 (pied de page de https://www.wimmersdiamonds.com/collections/engagement-rings).
- V : la page https://www.wimmersdiamonds.com/collections/engagement-rings (rendue dans Chromium) compte 230 produits :
  - répartition par prix : 5 sous 1 000 $, 53 de 1 000 à 2 000 $, 124 de 2 000 à 4 000 $, 40 de 4 000 à 6 000 $, 8 au-delà de 6 000 $ ;
  - créateurs : Sylvie (29), Parade Design (18), Naledi (6) ;
  - premières fiches : 1 175 $ à 4 765 $. Les bagues de fiançailles portent « Inquire About » plutôt qu'un bouton d'achat.
- V : alliances et bagues vendues en ligne (« Add to Cart ») : « 2-Row Lab-Grown Diamond Band » à 940 $, « 11-Stone Princess Diamond Band » à 1 750 $ (même page, avant le rendu JavaScript).
- V : bandeaux « Free Shipping On orders over $350 » et « 30-Day Returns ». Une page « Natural vs. Lab Grown Diamonds » est présente dans le menu.
- V : la page https://www.wimmersdiamonds.com/pages/custom-jewelry-design-restyling décrit 4 étapes : discussion et croquis, CAO avec « 3D preview of your piece… from all angles », fonte et sertissage, remise. Elle porte aussi la mention « Going custom doesn't have to mean going over budget ».
- I : une page de la marque Sylvie (sylviejewelry.com/locations/wimmers-diamonds) propose un lien « design your own engagement ring » au nom de Wimmer's. C'est un outil de la marque, pas du joaillier.

### 4. Crown Jewels (Fargo)

- V : la page https://www.crownjewelsfargo.com/bridal annonce :
  - « With our interactive ring builder and diamond selector, explore more than 800 combinations of settings and styles » ;
  - « We offer both natural and lab-grown diamonds » ;
  - une maison familiale de troisième génération, avec orfèvres sur place, financement et paiement échelonné.
- V : tous les liens du catalogue (styles, formes, alliances) pointent vers `crownjewelsfargo-frame.jewelershowcase.com`. Le robots.txt de ce sous-domaine contient `User-agent: *` / `Disallow: /` : ces pages n'ont pas été lues. Le constructeur n'a donc pas été vu.
- V : le robots.txt du site principal (Squarespace) place ClaudeBot dans le même groupe que `User-agent: *`. Seuls `/config`, `/search`, `/account` et quelques chemins techniques y sont interdits, donc les pages lues étaient autorisées.
- V : la page https://www.crownjewelsfargo.com/custom-jewelry-designs-fargo-nd décrit 4 étapes (Consult, Design, Craft, Cherish). Elle montre la refonte de bijoux de famille avec un visuel avant/après. Les réponses de la FAQ sur le coût et le délai sont repliées et n'ont pas été ouvertes.
- I : adresse au 4487 Calico Dr S, Fargo (annuaire Yext) ; « prices start from $2,500 » (article cité par le moteur de recherche).

### 5. Schmidt's Gems & Fine Jewelry (Fargo)

- V : magasin au 3241 42nd St S, Fargo, ND 58104, téléphone 701-237-9211 (https://schmidtsjewelry.com/engagement-rings/).
- V : menus « Engagement Rings by Type / by Style / by Shape », « Diamonds », « Lab-Grown Diamonds », « Mountings », « Band Builder », « Customizable Bands », « Lab-Grown Diamond Bands ». Services « CAD / CAM Services », « Stone Matching », « Ring Shank Retrofit ».
- V : la page https://schmidtsjewelry.com/wedding-bands/wedding-band-builder/ intègre `https://schmidtsjewelry-frame-categoryembed.jewelershowcase.com/band-builder`. La page des bagues intègre `…/browse/wedding-and-engagement/`. Le robots.txt de ce sous-domaine interdit tout : contenu non lu.
- V : la page https://schmidtsjewelry.com/elegant-lab-grown-diamonds-at-schmidts-gems-fine-jewelry/ présente une collection en diamants synthétiques (rond, princesse, coussin) et invite à venir en magasin.
- V : le robots.txt du site principal interdit les adresses avec paramètres (`Disallow: /*?`) et demande `Crawl-delay: 3`. Ces deux règles ont été respectées.
- I : partenaire de la marque Sylvie, avec lien « design your own engagement ring » (sylviejewelry.com/locations/schmidts-gems-fine-jewelry).

### 6. Signature Jewelers (Grand Forks)

- V : magasin au 1600 47th Ave S, Ste G, Grand Forks, ND 58201. Bijoux « by appointment » ; visites sans rendez-vous « most Wednesdays, 11AM – 6PM ».
- V : la page https://www.signaturejewelersgf.com/Category/Engagement/Engagement_Rings (rendue dans Chromium) compte 923 articles :
  - autres rubriques : 718 parures, 3 507 montures, 1 057 alliances ;
  - filtre de prix de 501 $ à plus de 5 001 $ (357 bagues au-delà) ;
  - pierre : uniquement « Diamond (918) » ;
  - chaque fiche lue porte « Call Store For Price ».
- V : site sur la plateforme Avalon (adresses `/Avalon/` dans le robots.txt et les feuilles de style).

### 7. Kokkeler's Jewelry (Bismarck)

- V : magasin au 514 East Broadway Avenue, Bismarck, ND 58501 (https://kokkelersjewelry.com/custom-design/).
- V : « Since 1955 » (https://kokkelersjewelry.com/engagement-rings/). Menu « Ideal Cut Diamonds ».
- V : la page sur mesure annonce une consultation avec photos d'inspiration, un budget, un délai, et « the latest technologies offered by Gemvision ». Elle se termine par un formulaire de contact, non rempli.
- V : aucun prix sur les pages lues.

### 8. Walkers n' Daughters Jewelers (Bismarck)

- V : magasins au 118 N 5th St, Bismarck, et au 624 Kirkwood Mall, Bismarck, ND 58504 (https://www.walkersndaughters.com/build-your-own-insite4).
- V : site Hibu. Le bouton « Search Diamonds » pointe vers `https://diamonds.greenrocksdiamonds.com/retailer/?r_id=1269389328`. C'est un domaine tiers, qui n'a pas été suivi.
- V : malgré son adresse, la page `build-your-own-insite4` ne contient que les coordonnées et les horaires.
- I : maison fondée en 1933 (annuaire willyou.net).

### 9. Lien's Jewelry (Minot)

- **Audit bloqué** : https://liensjewelry.com/ renvoie une page titrée « Bot Verification », avec un formulaire reCAPTCHA. Elle n'a pas été contournée, et aucune autre page n'a été demandée.
- V : le robots.txt (https://liensjewelry.com/robots.txt) n'interdit que `/wp-admin/`. Le blocage vient donc de la protection du serveur, pas des règles du robots.txt.
- I : au 107 Main St S, Minot ; maison familiale ; bagues de fiançailles, alliances, mise à taille, gravure ; histoire revendiquée depuis 1903 (theknot.com, ndtourism.com).

### 10. Westley's Jewelry (Bismarck)

- V : la page https://westleysjewelry.com/jewelry/ affiche « Est. 1938 » et trois rubriques, BRIDAL, FASHION et CUSTOM. On y lit « We carry hearts & arrows Ideal cut diamonds » et « To say we love custom work is an understatement ».
- V : aucun prix, aucun panier sur les pages lues.
- I : au 423 E Broadway Ave, Bismarck (annuaire willyou.net).

## Hors classement

### Enseignes régionales dont le siège est hors du Dakota du Nord

| Acteur | Salle au Dakota du Nord | Adresse | Constat |
|---|---|---|---|
| Riddle's Jewelry | Fargo, Bismarck, Grand Forks, Dickinson (I) | https://www.riddlesjewelry.com/pages/engagement-ring-builder | V : constructeur en 4 étapes (« Diamond / Setting / Customize / Review »), « Showing 20 Of 24056 Diamonds », diamants synthétiques dès 350 $ (0,26 ct, D, VVS2). Option « I want to provide my own Center stone ». V : la page https://www.riddlesjewelry.com/collections/bridal compte 2 170 articles avec prix et « Add to Cart », dont des pièces en synthétique « Adamante ». V : « © 2021-2026 by Riddle's Group Inc. ». I : siège à Rapid City (Dakota du Sud), environ 60 magasins dans 9 États ; le magasin de Fargo est au 4055 13th Avenue South (article de la marque cité par le moteur). Le robots.txt interdit `/cart` : le panier n'a pas été ouvert. C'est le meilleur configurateur présent dans l'État. À auditer avec le Dakota du Sud, qui n'a pas encore d'inventaire. |
| Gunderson's Jewelers | Fargo, 5601 28th Avenue South (I, page de magasin et Rolex) | https://gundersons.com/collections/engagement-rings | V : bagues de fiançailles avec prix sur 31 pages, par exemple 2 195 $ et 11 814 $. V : pied de page avec magasins à Sioux City, Sioux Falls, Omaha, Fargo et Wayzata. V : demande de création sur mesure (https://gundersons.com/pages/custom-design-request : « sketches, and digital renderings »), formulaire non rempli. Aucun constructeur vu. Déjà décrit dans l'inventaire de l'Iowa, où se trouve son siège. |

### Sites locaux lus, moins pertinents

| Acteur | Ville | Adresse | Constat |
|---|---|---|---|
| Lacey's Custom Jewelry | Bismarck | https://laceys-custom-jewelry.shoplightspeed.com/ | V : boutique Lightspeed reliée au site https://www.laceyscustomjewelry.com. Slogan « Why Pay Designer Prices When You Can Be The Designer », mais aucun produit affiché sur l'accueil. Le robots.txt du site principal interdit `/ajax/` et `/apps/` (non visités). |
| Britton Jewelers | Dickinson | https://www.brittonjewelers.com | **Bloqué** : le robots.txt place ClaudeBot dans un groupe `Disallow: /`. Écart : la page d'accueil a été demandée une fois, dans le même lot que le robots.txt, avant que celui-ci soit analysé. Elle affichait « This site isn't live », et ce contenu n'a pas été exploité au-delà de ce constat. |

### Écartés

- **Schumacher Diamond Direct** (Bismarck, 619 Riverwood Dr) : le domaine `schumacherdiamonds.com` ne répond pas (V), et aucun autre site propre n'a été trouvé. Les annuaires décrivent un atelier de taille de diamants (I, sylviejewelry.com). À recontrôler si l'adresse du site est retrouvée.
- **Ritter Brothers Diamond Cutters** (Williston) : `ritterbrothers.com` et `ritterbrothersdiamondcutters.com` ne répondent pas (V). Aucun site propre trouvé.
- **Knowles Jewelry** (Bismarck, Minot), **JDM Jewelers** (Grand Forks) : les domaines `knowlesjewelry.com` et `jdmjewelers.com` sont des pages parquées qui redirigent vers `/lander` (V). Ils n'appartiennent pas forcément à ces joailliers (S).
- **River City Jewelers** et **Diamonds on Demers** (Grand Forks), **A Cutting Edge Gallery of Jewelry** (Fargo), **Ricks Jewelry** (Minot) : aucun site propre trouvé. `rivercityjewelers.com` ne renvoie que son robots.txt, et `ricksjewelry.com` redirige vers un vendeur de noms de domaine (V).
- **Kay, Zales, Helzberg, JCPenney** (Fargo, Grand Forks, Minot) : chaînes nationales et grand magasin, exclus par le cahier des charges.

## Enseignements pour JR Diamond

- Configurateurs en marque blanche : comme au Montana, tous les configurateurs vus sont des outils loués. On trouve GemFind chez Zorells, Build.Shop chez Royal, Jewelershowcase (Stuller) chez Crown Jewels et Schmidt's (V), ainsi que des liens vers les outils des marques Sylvie et GreenRocks (I et V). Aucun ne montre de 3D issue du fichier de fabrication du joaillier. Même le meilleur (Zorells) n'affiche que des photos de catalogue.
- Constructeur incomplet : chez Royal Jewelers, l'étape du diamant est vide (V). Le client ne peut pas aller au bout du parcours en ligne. Un parcours JR Diamond qui va jusqu'à une pierre réelle filmée serait un écart net.
- Transparence du prix : les prix des montures sont affichés (Zorells, Royal, Wimmer's) ou cachés (Signature : « Call Store For Price »), mais personne ne les détaille poste par poste. Zorells explique seulement son prix par l'achat direct à Anvers (V).
- Fabrication montrée : Royal publie des triptyques « référence → croquis → bague finie » (V), Zorells et Wimmer's décrivent la CAO et la cire (V), et Crown Jewels montre une refonte avant/après (V). Aucun site lu ne propose de suivre sa propre commande en photos ou en vidéo (I, d'après les pages lues).
- Synthétique : il est présent chez la moitié des joailliers classés : Zorells, Royal, Wimmer's, Crown Jewels et Schmidt's (V). L'enseigne régionale Riddle's en fait un argument de prix, avec des pierres dès 350 $ (V).
- Bijoux de famille : la refonte est proposée par Crown Jewels, Wimmer's et Gunderson's (V). C'est un point de comparaison direct pour la page « Bijou de famille » de JR Diamond.

## Sources

Pages lues le 25/11/2026 (code 200 sauf mention contraire) :

- Zorells : https://zorells.com/robots.txt, https://zorells.com/, https://zorells.com/apps/ringbuilder/settings/, https://zorells.com/pages/build-your-own, https://zorells.com/collections/engagement-rings, https://zorells.com/apps/diamondtools?shape=oval, https://zorells.com/pages/antwerp-diamonds
- Royal Jewelers : https://www.royaljewelersfargo.com/robots.txt, https://www.royaljewelersfargo.com/, https://www.royaljewelersfargo.com/create-your-ring, https://www.royaljewelersfargo.com/diamonds, https://www.royaljewelersfargo.com/custom-engagement-rings
- Wimmer's : https://www.wimmersdiamonds.com/robots.txt, https://www.wimmersdiamonds.com/, https://www.wimmersdiamonds.com/collections/engagement-rings, https://www.wimmersdiamonds.com/pages/engagement-rings, https://www.wimmersdiamonds.com/pages/custom-jewelry-design-restyling
- Crown Jewels : https://www.crownjewelsfargo.com/robots.txt, https://www.crownjewelsfargo.com/, https://www.crownjewelsfargo.com/bridal, https://www.crownjewelsfargo.com/custom-jewelry-designs-fargo-nd, https://crownjewelsfargo-frame.jewelershowcase.com/robots.txt (seule page lue sur ce sous-domaine)
- Schmidt's : https://schmidtsjewelry.com/robots.txt, https://schmidtsjewelry.com/, https://schmidtsjewelry.com/engagement-rings/, https://schmidtsjewelry.com/wedding-bands/wedding-band-builder/, https://schmidtsjewelry.com/elegant-lab-grown-diamonds-at-schmidts-gems-fine-jewelry/, https://schmidtsjewelry-frame-categoryembed.jewelershowcase.com/robots.txt (seule page lue sur ce sous-domaine)
- Signature Jewelers : https://www.signaturejewelersgf.com/robots.txt, https://www.signaturejewelersgf.com/, https://www.signaturejewelersgf.com/sitemap.xml, https://www.signaturejewelersgf.com/Category/Engagement/Engagement_Rings
- Kokkeler's : https://kokkelersjewelry.com/robots.txt, https://kokkelersjewelry.com/, https://kokkelersjewelry.com/engagement-rings/, https://kokkelersjewelry.com/custom-design/
- Walkers n' Daughters : https://www.walkersndaughters.com/robots.txt, https://www.walkersndaughters.com/, https://www.walkersndaughters.com/build-your-own-insite4
- Lien's : https://liensjewelry.com/robots.txt, https://liensjewelry.com/ (page « Bot Verification »)
- Westley's : https://westleysjewelry.com/robots.txt, https://westleysjewelry.com/, https://westleysjewelry.com/jewelry/
- Riddle's : https://www.riddlesjewelry.com/robots.txt, https://www.riddlesjewelry.com/, https://www.riddlesjewelry.com/collections/bridal, https://www.riddlesjewelry.com/pages/engagement-ring-builder, https://www.riddlesjewelry.com/pages/store-locator (liste des magasins non affichée dans le rendu)
- Gunderson's : https://gundersons.com/robots.txt, https://gundersons.com/, https://gundersons.com/collections/engagement-rings, https://gundersons.com/pages/custom-design-request
- Lacey's : https://www.laceyscustomjewelry.com/robots.txt, https://www.laceyscustomjewelry.com/, https://laceys-custom-jewelry.shoplightspeed.com/
- Britton : https://www.brittonjewelers.com/robots.txt ; https://www.brittonjewelers.com/ (demandée une fois, voir l'écart noté plus haut)
- Domaines sans site exploitable : https://knowlesjewelry.com/, https://jdmjewelers.com/, https://signaturejewelers.com/ (pages parquées) ; https://rivercityjewelers.com/robots.txt ; https://ricksjewelry.com/ (redirection) ; schumacherdiamonds.com, ritterbrothers.com, ritterbrothersdiamondcutters.com, schmidtsgems.com, crownjewelsnd.com, acuttingedgegallery.com, diamondsondemers.com (pas de réponse)

Extraits de moteur de recherche et annuaires, utilisés pour les faits marqués I :

- https://willyou.net/jewelry-stores/nd/fargo, https://willyou.net/jewelry-stores/nd/bismarck, https://willyou.net/jewelers/royal-jewelers-fargo-nd, https://willyou.net/jewelers/westleys-jewelry-bismarck-nd, https://willyou.net/jewelers/walkers-n-daughters-jewelers-bismarck-nd
- https://www.sylviejewelry.com/locations/wimmers-diamonds, https://www.sylviejewelry.com/locations/schmidts-gems-fine-jewelry, https://sylviejewelry.com/locations/schumacher-diamond-cutters-and-jewelers
- https://directory.yext.com/en/crown-jewels-719165814, https://fargomonthly.com/how-to-and-tips-for-engagement-ring-shopping/
- https://www.theknot.com/marketplace/liens-jewelry-minot-nd-872569, https://www.ndtourism.com/minot/shopping/local-shops/liens-jewelry
- https://www.theknot.com/marketplace/britton-jewelers-dickinson-nd-526135, https://willyou.net/jewelers/ritter-brothers-williston-nd
- https://www.gabrielny.com/store/riddles-jewelry-fargo, https://www.gabrielny.com/store/riddles-jewelry-bismark, https://issuu.com/compmedia/docs/aw_1310/s/18765416, https://www.visitgrandforks.com/directory/riddles-jewelry, https://www.giftly.com/gift-card/riddles-jewelry-dickinson
- https://gundersons.com/pages/fargo-store-location, https://www.rolex.com/rolex-dealers/gundersons-811/rswi_18403-fargo-unitedstates
