# Montana : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Montana et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales et les grandes maisons sont exclus.

Méthode : lecture des pages comme un visiteur ordinaire (curl, ou navigateur de rendu Firecrawl pour les pages en JavaScript), une page à la fois par site. Le robots.txt de chaque site a été lu avant toute page. Aucun formulaire n'a été rempli, aucun compte créé, aucun chat ouvert. Chaque fait porte une marque :

- **V** (vérifié) : page lue le 15/11/2026, à l'adresse citée ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | L&M Fine Jewelry | Missoula et Kalispell | https://lmfinejewelry.com | https://lmfinejewelry.com/design-your-ring | oui (3D, StoneAlgo) | aucun (robots.txt : `Allow: /`) | Le seul parcours en 3D, avec le modèle le plus proche de JR Diamond : on dessine la bague en ligne, puis on choisit la pierre en boutique. Fabrication annoncée en « a couple of weeks » (V). Aucun prix affiché (V). |
| 2 | Luxe Diamond Jewelers | Bozeman | https://luxediamondjewelers.com | https://luxediamondjewelers.com/build-your-ring/ | oui (Caratwise, images de synthèse) | aucun (robots.txt : seul `/wp-admin/` est interdit) | Un constructeur complet avec prix « Starting at » de 1 169 à 2 664 $ (V). Une « Studio Collection » permet d'assembler anneau, monture et diamant (V). Logos GIA, IGI et GCAL (V). |
| 3 | Goldsmith Gallery Jewelers | Billings et Bozeman | https://www.goldsmithgalleryjewelers.com | https://www.goldsmithgalleryjewelers.com/create-your-ring | oui (monture → diamant → bague) | **bloqué** : le robots.txt interdit ClaudeBot (`Disallow: /`) et les autres robots d'IA ; `Crawl-delay: 30` | 936 montures avec prix, et un filtre « Lab-Grown Diamond » (I). Il a absorbé Jewelry Studio à Bozeman (V par redirection). C'est le plus gros catalogue de l'État, mais il n'a pas été audité directement. |
| 4 | Yellowstone Jewelers | Billings | https://yellowstonejewelers.com | https://yellowstonejewelers.com/design-your-ring/ | oui (3D, StoneAlgo) | partiel : le catalogue passe par une page de vérification JavaScript (`/verify.html`), non contournée ; le robots.txt autorise ClaudeBot | Même outil 3D que L&M, en 4 étapes (V). Il sert de partenaire de personnalisation à la marque Sylvie (I). |
| 5 | Diamond Dream | Helena | https://www.diamonddreamusa.com | https://www.diamonddreamusa.com/apps/ringbuilder/settings | oui (GemFind, photos) | aucun (robots.txt Shopify : `Allow: /`) | 535 montures avec prix, dès 1 670 $ (V). Or 14 k et 18 k (blanc, jaune, rose) et platine, 10 formes (V). Discours « prix de gros » (V). |
| 6 | Big Sky Brilliance | Helena | https://bigskybrilliance.com | https://bigskybrilliance.com/pages/custom | non (sur mesure par rendez-vous) | aucun (robots.txt Shopify standard) | Le processus le plus transparent : acompte de 100 $, 50 % à la validation du rendu, solde à la livraison, rendu en environ une semaine, fabrication en 4 à 6 semaines (V). Fourchette de prix publiée : 3 000 à 8 000 $ (V). Visioconférence et expédition dans tout le pays (V). |
| 7 | Miller's Jewelry | Bozeman | https://montanayogos.com | https://montanayogos.com/custom-band-builder | oui, pour les alliances (AVA) | aucun (robots.txt : `Disallow:` vide) | 480 articles « Engagement & Wedding » avec prix (V). Constructeur d'alliances avec prix en direct (V). Spécialiste du saphir Yogo. |
| 8 | The Gem Gallery | Bozeman | https://gemgallery.com | https://gemgallery.com/wedding | non (sur mesure en 4 étapes) | aucun (robots.txt : `Disallow:` vide) | Prix affichés, et une « Lab Grown Diamond Ring » à 2 395 $ (V). Création en 4 étapes (V). Orfèvres sur place, Yogo (V). |
| 9 | Alara Jewelry | Bozeman | https://alarajewelry.com | https://alarajewelry.com/collections/engagement | non | aucun (robots.txt Shopify standard ; filtres de collection interdits, non utilisés) | 110 bagues de fiançailles avec prix et panier (V). Consultation sur mesure gratuite de 15 minutes, visite de la boutique à distance par Google Meet (V). |
| 10 | Rogers & Co. Fine Jewelry & Design | Missoula | https://www.rogerscojewelry.com | https://www.rogerscojewelry.com/store/custom-rings | non (« Design Your Own » sur contact) | aucun pour les pages lues (robots.txt Squarespace : `/search`, `/config`, `/api` interdits) | Boutique en ligne avec prix (V). Un anneau en diamant synthétique et une bague en moissanite (V). Sur mesure en 4 à 6 semaines (V). |

## Détail par acteur

### 1. L&M Fine Jewelry (Missoula, Kalispell)

- V : deux salles d'exposition, au 3465 American Way à Missoula et au 221 S Main Street à Kalispell (https://lmfinejewelry.com/custom-engagement-rings).
- V : la page https://lmfinejewelry.com/design-your-ring répond (code 200). On y lit « Step 1 of 5 », avec huit styles de départ : solitaire, halo, halo caché, clos, cathédrale, pavé, toi et moi, trois pierres. On y lit aussi : « you'll be able to fully customize your design in our 3D Ring Designer ». La description de la page cite le « StoneAlgo Ring Builder ».
- V : dans le navigateur de rendu sans écran, la vue 3D ne s'est pas chargée (« We couldn't load your ring design »). Cause probable : pas de WebGL dans ce navigateur (S). Ce n'est pas un blocage du site.
- V : le parcours annoncé est le suivant : « Design your ring online in stunning 3D / Pick out your center stone in our Missoula or Kalispell showroom / Finalize & order ». La bague est prête « in just a couple of weeks » (https://lmfinejewelry.com/custom-engagement-rings).
- V : la page https://lmfinejewelry.com/collections/engagement-rings n'affiche aucun prix. Elle indique « Availability changes often ».
- I : la page `/custom` décrit quatre étapes, dont « Hand-rendered sketches, then a precise 3D rendering » (extrait d'index de recherche).
- Intérêt : c'est le concurrent local le plus proche de la promesse de JR Diamond (3D en ligne, puis pierre choisie). Mais la 3D est un modèle générique de l'outil StoneAlgo, pas le fichier de fabrication, et aucun prix n'est affiché.

### 2. Luxe Diamond Jewelers (Bozeman)

- V : la page https://luxediamondjewelers.com/build-your-ring/ propose deux départs, « Start with a Setting » et « Start with a Diamond ». Elle présente huit modèles populaires avec un prix « Starting at » : Corinne 1 169 $, Amara 1 494 $, Tiana 1 706 $, Elara 1 714 $, Adelina 2 209 $, Catriona 2 229 $, Eira 2 604 $, Ziva 2 664 $.
- V : 13 styles de bague, 4 métaux (or blanc, jaune, rose, platine) et 10 formes de diamant. Une « Studio Collection » permet d'assembler les éléments (« mix and match premium bands, intricate settings, and breathtaking diamonds »). Les images viennent de l'outil Caratwise et d'un serveur d'images Jewelverse (V, adresses des images).
- V : la page affiche les logos GIA, IGI et GCAL. Sa légende confond deux laboratoires : « GIA Graded — Every diamond graded by the International Gemological Institute ».
- Synthétique : non vérifié. Le texte de la FAQ ne mentionne pas « lab-grown ». Le logo IGI le laisse supposer (S).

### 3. Goldsmith Gallery Jewelers (Billings, Bozeman)

- **Audit bloqué** : le robots.txt de https://www.goldsmithgalleryjewelers.com contient `User-agent: ClaudeBot` / `Disallow: /`. La même règle vise GPTBot, CCBot, Google-Extended et d'autres robots. Les pages de ce site n'ont donc pas été lues.
- Une seule requête a touché ce domaine, par redirection automatique : https://www.jsjewelrystudio.com/bozeman-engagement-rings renvoie vers https://www.goldsmithgalleryjewelers.com/engagement-rings, qui répond 200. Le contenu reçu a été supprimé sans être exploité.
- V : la page d'accueil de https://www.jsjewelrystudio.com n'est plus qu'une bannière avec un lien vers Goldsmith Gallery. Jewelry Studio (Bozeman, 862 Harmon Stream Blvd) a donc été repris : même adresse que le magasin Goldsmith Gallery de Bozeman (I).
- Les faits suivants viennent d'extraits d'index de recherche (Parallel), donc **I** :
  - la page `/create-your-ring` compte 936 articles, en trois étapes (« Choose Your Setting → Choose Your Diamond → Complete Your Ring ») ;
  - métaux : or 14 k et 18 k (rose, blanc, jaune) et platine ; filtre « Stone type » avec « Lab-Grown Diamond » ;
  - prix affichés, par exemple Tacori Dantela à 7 090 $ en « Special order » ;
  - la page `/custom-jewelry` dit qu'ils proposent « a few lab-grown diamond options by Haylie Ann » ;
  - magasins au 903 Shiloh Crossing Blvd à Billings et au 862 Harmon Stream Blvd à Bozeman ; maison familiale fondée en 1990.

### 4. Yellowstone Jewelers (Billings)

- V : https://yellowstonejewelers.com/design-your-ring/ propose le même outil StoneAlgo que L&M, en 4 étapes (« Step 1 of 4 »), avec la mention « 3D Ring Designer ». Adresse : 820 Shiloh Crossing Blvd #1, Billings. La page porte la balise `noindex, nofollow, noarchive`.
- V : le robots.txt autorise explicitement ClaudeBot, GPTBot et PerplexityBot.
- V : l'adresse https://yellowstonejewelers.com/catalog/engagement-ring/ renvoie vers `/verify.html`, une page qui pose un cookie par JavaScript avant d'afficher le contenu. C'est une protection anti-robot légère. Elle n'a pas été contournée et les prix du catalogue n'ont pas été lus.
- I : une page de la marque Sylvie (sylviejewelry.com/locations/yellowstone-jewelers) présente Yellowstone comme partenaire de personnalisation.

### 5. Diamond Dream (Helena)

- V : https://www.diamonddreamusa.com/apps/ringbuilder/settings répond. Le parcours compte trois étapes (« Choose your Setting / Choose your Diamond / Review Complete Ring ») et affiche « 535 Settings ». Le curseur de prix va de 0 à 30 486 $.
  - premières montures : 1 670 $, 1 674 $, 1 755 $, 1 938 $, 2 201 $ et suivantes ;
  - métaux : or 14 k et 18 k (blanc, jaune, rose) et platine ;
  - 10 formes ;
  - mention « Powered By GemFind ».
- V : la boutique reçoit sur rendez-vous seulement, téléphone (406) 449-4653. La page d'accueil revendique « you will always pay wholesale ».
- Le robots.txt (Shopify) contient des consignes destinées aux agents d'IA. Elles ont été ignorées : seules les règles d'accès ont été retenues.
- Synthétique : non vérifié (le moteur de recherche de diamants se charge en JavaScript).

### 6. Big Sky Brilliance (Helena)

- V, sur https://bigskybrilliance.com/pages/custom :
  - consultation en personne ou par vidéo, première consultation gratuite ;
  - acompte de conception de 100 $, déduit du prix final ;
  - premier rendu en environ une semaine ;
  - 50 % à la validation, 50 % à la livraison ;
  - fabrication en 4 à 6 semaines ;
  - « Most custom work lands between $3,000 and $8,000 » ;
  - retrait à Helena ou expédition assurée dans tout le pays ;
  - réutilisation de pierres de famille.
- I : la même page vend des pièces prêtes à porter, dont une « Rose Gold Three-Stone Engagement Ring » à 3 980 $ (extrait d'index).
- Intérêt : pas de configurateur, mais c'est la transparence du processus et du paiement la plus proche du parcours « devis → prix confirmé → paiement » de JR Diamond.

### 7. Miller's Jewelry (Bozeman)

- V : la page https://montanayogos.com/engagement-and-wedding compte 480 résultats avec prix, par exemple « Bezel Set Emerald-Cut Engagement Ring Mounting » à 1 825 $. Les filtres portent sur le métal (platine, or jaune, blanc, rose) et la pierre (diamant, saphir du Montana, saphir Yogo). Adresse : 35 West Main Street, Bozeman.
- V : https://montanayogos.com/custom-band-builder intègre le « Fancies by AVA Eternity Band Builder ». On y choisit la forme (9), la monture, le nombre de pierres (7 options), la taille des pierres (de 0,03 à 0,50 ct), le métal, la taille de doigt et la qualité.
  - exemple d'alliance configurée : 2,10 ct, or blanc 14 k, taille 6,5 ;
  - prix conseillé (« MSRP ») : 7 800 $ en G/VS, 6 870 $ en GH/SI ;
  - le seul choix de qualité est « Earth Mined » ;
  - le bouton final ouvre une prise de contact avec le magasin (« Contact Retailer »), pas un panier.
- Un lien vers le constructeur de bagues de fiançailles AVA apparaît (avacoutures.com, `r_id=618257`). Il n'a pas été suivi, car c'est un domaine tiers.

### 8. The Gem Gallery (Bozeman)

- V : la page d'accueil https://gemgallery.com indique une fondation en 1994 et un parcours sur mesure « Idea / Design / Create / Complete », avec des orfèvres sur place.
- V : la page https://gemgallery.com/wedding affiche des prix, sur 8 pages. Exemples : « Lab Grown Diamond Ring » 2 395 $, « Diamond Engagement Ring » 2 175 $, bagues en saphir Yogo de 2 305 à 89 289 $. Les filtres de métal vont de l'or 10 k à 22 k, avec platine et palladium.

### 9. Alara Jewelry (Bozeman)

- V : la page https://alarajewelry.com/collections/engagement compte 110 bagues (77 en stock, 33 épuisées), avec prix et panier Shopify.
  - prix de 625 à 13 660 $ parmi ceux lus ; le filtre va jusqu'à 24 137 $ ;
  - filtres de pierre : diamant (42), saphir du Montana (45), saphir Yogo (8) ;
  - mentions « NO SALES TAX ON ANY PURCHASE » et soldes à −40 % du 13 au 18 novembre ;
  - consultation sur mesure gratuite de 15 minutes ; visite du magasin à distance par Google Meet.
- Synthétique : aucun filtre « lab-grown » dans la liste lue (V).

### 10. Rogers & Co. Fine Jewelry & Design (Missoula)

- V : la page d'accueil https://www.rogerscojewelry.com dit : « If you would like to design your own ring, please contact us » et « We recommend allowing 4-6 weeks ».
- V : la page https://www.rogerscojewelry.com/store/custom-rings affiche des prix, dont « Custom Twisted Moissanite Engagement Ring » à 2 499 $ et « Emerald Cut Lab Diamond Band » à 3 995 $ (en solde). « Design Your Own Engagement Ring » y est une catégorie de styles, pas un configurateur.
- I : un « Custom Deposit from $500 » apparaît dans la boutique (extrait d'index).

## Hors classement (lus, moins pertinents)

| Acteur | Ville | Adresse | Constat |
|---|---|---|---|
| Imagine Designs Jewelry Studio | Helena | https://imaginedesignsmt.com | V : conception en CAO, puis modèle en résine imprimé en 3D « for the customer's viewing » ; « only natural gemstones » ; 62 N Last Chance Gulch. Pas de configurateur. |
| Sasa Fine Jewelry | Bozeman | https://sasafine.com/pages/custom | V : formulaire, puis appel de 30 minutes, puis « 1-2 rounds of 3D renderings », puis résine imprimée en 3D et fonte à cire perdue. Atelier de création, pas de configurateur. |
| Bakers Jewelry | Glasgow | https://bakersjewelrymt.com | V : prix et boutons « Add to cart » (57 occurrences sur la page d'accueil), saphirs du Montana. Petit catalogue, peu de bagues de fiançailles. |
| Montague's Jewelers | Billings | https://www.montaguesjewelers.com | V : site vitrine WordPress sans constructeur (rubriques `/bridal/`, `/custom/`). Le « Design your own engagement ring » cité par les annuaires est l'outil de l'annuaire StoneAlgo, pas celui du joaillier (I). |
| Riddle's Jewelry | Great Falls | https://www.riddlesjewelry.com/pages/riddles-jewelry-store-great-falls-montana | V : magasin au 825 10th Ave S, avec une page « Store locator » et un numéro national 1-888. C'est une enseigne régionale à plusieurs magasins, dont le siège n'a pas été vérifié (S : hors du Montana). |
| Honey Jewelers | Missoula | https://honeyjewelers.com | V : sur mesure et réparations, « state of the art design software ». Pas de vente en ligne de bagues constatée. |
| McGough & Company | Whitefish | https://www.mcgoughandco.com | V : la page répond, joaillier de plusieurs générations. Pas de configurateur constaté. |

## Écartés

- **Young in the Mountains** : bagues en saphir du Montana avec prix, mais le studio est à Boulder, dans le Colorado (https://younginthemountains.com/pages/contact, I d'après l'extrait d'index). À examiner dans l'inventaire du Colorado.
- **Venazia** : page de référencement local « Custom Rings Bozeman, MT » d'un vendeur national (https://www.venazia.com/custom-rings-bozeman-mt). Pas d'établissement au Montana constaté.
- **Kay** (Billings, Great Falls) : chaîne nationale (Signet), exclue par le cahier des charges.

## Enseignements pour JR Diamond

- Configurateurs en marque blanche : la plupart des configurateurs sont des outils loués. StoneAlgo (3D, chez L&M et Yellowstone), GemFind (Diamond Dream), Caratwise (Luxe) et AVA (Miller's) reviennent d'un joaillier à l'autre (V). La 3D y est générique : aucun ne montre le fichier de fabrication du joaillier. C'est l'écart que JR Diamond peut revendiquer.
- Transparence du prix : le constructeur (Diamond Dream, Luxe, Goldsmith) affiche le prix de la monture, mais personne ne l'explique poste par poste. Big Sky Brilliance publie le déroulé du paiement et une fourchette de prix, sans détail (V).
- Fabrication montrée : seuls les ateliers (Imagine Designs, Sasa, Big Sky) montrent l'étape du rendu ou de la résine. Aucun site lu ne propose de suivre la fabrication en photos ou en vidéo (I, d'après les pages lues).
- Synthétique : il est marginal au Montana. Quelques pièces seulement : The Gem Gallery, Rogers & Co., Goldsmith Gallery (I). Les sites mettent en avant le saphir du Montana et le saphir Yogo, une spécialité locale que JR Diamond n'a pas.
- Délais : L&M annonce « a couple of weeks » et Big Sky de 4 à 6 semaines après le rendu ; Rogers demande 4 à 6 semaines (V). Les 14 jours ouvrés de JR Diamond sont donc au niveau du plus rapide.

## Sources

Pages lues le 15/11/2026 (code 200 sauf mention contraire) :

- L&M : https://lmfinejewelry.com/robots.txt, https://lmfinejewelry.com/custom-engagement-rings, https://lmfinejewelry.com/design-your-ring, https://lmfinejewelry.com/collections/engagement-rings
- Luxe : https://luxediamondjewelers.com/robots.txt, https://luxediamondjewelers.com/, https://luxediamondjewelers.com/build-your-ring/, https://luxediamondjewelers.com/faq
- Goldsmith Gallery : https://www.goldsmithgalleryjewelers.com/robots.txt (seule page lue volontairement) ; https://www.jsjewelrystudio.com/robots.txt, https://www.jsjewelrystudio.com/ ; redirection observée de https://www.jsjewelrystudio.com/bozeman-engagement-rings
- Yellowstone : https://yellowstonejewelers.com/robots.txt, https://yellowstonejewelers.com/, https://yellowstonejewelers.com/design-your-ring/, https://yellowstonejewelers.com/catalog/engagement-ring/ (renvoie vers `/verify.html`)
- Diamond Dream : https://www.diamonddreamusa.com/robots.txt, https://www.diamonddreamusa.com/, https://www.diamonddreamusa.com/apps/ringbuilder/settings, https://www.diamonddreamusa.com/apps/diamondtools/
- Big Sky Brilliance : https://bigskybrilliance.com/robots.txt, https://bigskybrilliance.com/pages/custom
- Miller's : https://montanayogos.com/robots.txt, https://montanayogos.com/engagement-and-wedding, https://montanayogos.com/custom-band-builder
- The Gem Gallery : https://gemgallery.com/robots.txt, https://gemgallery.com/, https://gemgallery.com/wedding
- Alara : https://alarajewelry.com/robots.txt, https://alarajewelry.com/collections/engagement
- Rogers & Co. : https://www.rogerscojewelry.com/robots.txt, https://www.rogerscojewelry.com/, https://www.rogerscojewelry.com/store/custom-rings, https://www.rogerscojewelry.com/store/custom-rings/solitaire
- Hors classement : https://imaginedesignsmt.com/, https://sasafine.com/pages/custom, https://bakersjewelrymt.com/, https://www.montaguesjewelers.com/ (et son robots.txt), https://www.riddlesjewelry.com/pages/riddles-jewelry-store-great-falls-montana, https://honeyjewelers.com/, https://www.mcgoughandco.com/ (et son robots.txt)

Extraits d'index de recherche (Parallel Search et recherche web), utilisés pour les faits marqués I :

- https://www.goldsmithgalleryjewelers.com/create-your-ring, https://www.goldsmithgalleryjewelers.com/custom-jewelry, https://www.goldsmithgalleryjewelers.com/create-a-ring, https://www.goldsmithgalleryjewelers.com/engagement-rings
- https://lmfinejewelry.com/custom
- https://bigskybrilliance.com/products/custom-jewelry-design
- https://www.rogerscojewelry.com/store
- https://sylviejewelry.com/locations/yellowstone-jewelers
- https://www.stonealgo.com/local-jewelers/billings-mt/montagues-jewelers-47a1d12bc9a7c85ec10a10083f33a773
- https://younginthemountains.com/pages/contact
- https://www.venazia.com/custom-rings-bozeman-mt
