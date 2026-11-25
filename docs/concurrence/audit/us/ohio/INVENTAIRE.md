# Inventaire des joailliers : Ohio

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun panier rempli, aucun chat ni SMS ouvert, au plus une page toutes les 3 secondes par site (31 secondes chez Alson Jewelers, dont le robots.txt fixe un `Crawl-delay: 30`).

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés ou d'un extrait d'index de recherche), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 25/11/2026 (période de soldes du Black Friday : plusieurs prix sont des prix soldés). La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques sur les joailliers de l'Ohio, extraits de résultats), puis **curl tel quel** (identité par défaut, sans changement d'en-tête) pour les robots.txt et les pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script (JewelerOS, listes Punchmark, outil Aurix de Geraci) n'ont pas été actionnés ; ce qu'on en dit vient du texte des pages et du code servi, marqué [I] quand c'est une déduction.

## Constat général

- [V] **Le configurateur 3D en marque blanche JewelerOS domine, comme en Alabama, au Tennessee et en Caroline du Nord** : Peter & Co. (Avon Lake, identifiant de partenaire `9nPa8z2RL8fv`), JS Jewelers (Norwood, `9nzxU9nJQ5TY`) et Premier Diamond Center (Beavercreek, `9jJqNsZeW1Ju`) chargent `jeweleros.com/static/dist/jos.js` ou `partner_config.js`. Leurs pages d'accueil du sur-mesure reprennent le même texte : « Design your ring online in stunning 3D », pierre choisie en salle d'exposition, bague prête « in just a couple of weeks ». [I, extraits de recherche] Don Basch (Macedonia) et Dean's Jewelry (Coshocton, Mount Vernon) publient le même texte et la même FAQ (prix de la monture visible dans l'outil 3D, sans la pierre ; nom et téléphone demandés pour sauvegarder ; relance par SMS d'un « concierge » ; 2 à 4 semaines). [I] Modèle paramétrique générique, pas le fichier de fabrication de l'atelier.
- [V] **Geraci Fine Jewelry (Cincinnati) est le site le plus proche de l'esprit de JR Diamond** : « Every setting shows its own price », pierre centrale naturelle ou synthétique choisie avec le client, parcours en 4 étapes (monture, métal, pierre, « See it on a hand »), sertissage et finition sur place, environ trois semaines, acompte de la moitié du prix à la validation du dessin, consultation de conception sur Zoom. L'outil est servi par `app.geracifinejewelry.com`, plateforme **Aurix** (« The AI Platform Built for Jewelers ») ; [I] l'étape « See it on a hand » correspond vraisemblablement aux photos « on-model » générées par Aurix, pas à une 3D.
- [V] **Fabrication montrée, sans prix** : Elizabeth Diamond Company (Dayton : croquis, rendu 3D « you can rotate on screen », maquette en cire à essayer, fonte et sertissage sur place, environ douze semaines) ; Scott's Custom Jewelers (Dublin, hors classement : « 3 CAD operators and 4 jewelers on staff », maquette imprimée en 3D à essayer). Premier Diamond Center évoque la CAO et l'impression 3D haute résolution.
- [V] **Prix affichés** chez Geraci (53 bagues de fiançailles, 1 248,75 à 12 380 $ sur la page lue), Diamond Cellar (171 bagues de fiançailles, de 990 à 22 095 $ dans les données de la page), James Free (43 bagues, 870 à 13 990 $ en première page), Marlyn Jewelers (37 bagues synthétiques mises en avant, jusqu'à 8 515 $), Alson (230 articles, 2 860 à 289 000 $ en première page).
- [V] Le synthétique est partout : Geraci (« natural or lab-grown »), Premier Diamond Center (`/diamonds?labGrown=1`), Diamond Cellar (bagues « Lab Grown » et marque Céleste Created Diamonds), Marlyn (bagues synthétiques chiffrées en page d'accueil), Elizabeth Diamond Company et Scott's Custom Jewelers. Exception : Alson ne cite que des diamants naturels certifiés GIA.
- [V] Délais publiés : « a couple of weeks » ou 2 à 4 semaines (JewelerOS), environ trois semaines (Geraci), environ douze semaines (Elizabeth Diamond Company), de quelques semaines à 4 à 6 semaines (Scott's). JR Diamond : 14 jours ouvrés.
- [V] **Blocages** : Dean's Jewelry et Don Basch (sites Thinkspace) interdisent dans leur robots.txt `ClaudeBot`, `Claude-SearchBot`, **`Claude-User`**, `GPTBot` et d'autres agents d'IA (`Disallow: /`) : aucune page lue, faits tirés des extraits de recherche [I]. Elizabeth Diamond Company interdit `ClaudeBot`, `anthropic-ai` et `Claude-Web` (« * » autorisé, `Content-Signal: search=yes,ai-train=no,use=reference`) : lecture réduite à une seule page. Alson impose `Crawl-delay: 30` et le même `Content-Signal` : une page lue. Aucun captcha ni 403 rencontré. Y Sadiq Diamond (Gahanna) : nom de domaine non résolu le 25/11, site écarté.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Geraci Fine Jewelry | Cincinnati | https://www.geracifinejewelry.com/ | https://www.geracifinejewelry.com/build-your-ring (outil intégré : https://app.geracifinejewelry.com/ring-builder?embed=1) | oui (constructeur en 4 étapes, plateforme Aurix ; non actionné) | non (robots.txt n'interdit que `/api/`) | [V] Le plus aligné sur JR Diamond : prix de chaque monture affiché (« Setting only », 14 montures de 1 248,75 à 7 346,25 $ soldées), naturel ou synthétique, sertissage et finition sur place, environ 3 semaines, acompte de 50 % à la validation, conception sur Zoom, retour 30 jours, première mise à taille offerte, boutons « Add to cart ». Depuis 1982. |
| 2 | Peter & Co. Jewelers | Avon Lake (Cleveland) | https://www.peterjewelers.com/ | https://www.peterjewelers.com/pages/custom-ring-builder | oui (3D JewelerOS, plus montures Punchmark et constructeur d'alliances AVA Couture) | non (Crawl-delay 2) | [V] Trois outils en ligne : 3D JewelerOS, liste de montures (`/ringsettings` redirige vers `/pages/ring-settings-1`), « Wedding Band Builder ». Depuis 1987. [I] Prix des montures chargés par script, non lus. |
| 3 | JS Jewelers | Norwood (Cincinnati) | https://www.jsjewelers.shop/ | https://www.jsjewelers.shop/pages/design-your-ring | oui (3D JewelerOS) | non (Shopify) | [V] Texte JewelerOS ; met en avant des prix « that rivals online wholesalers », remontage de pierres de famille, délai « a couple of weeks ». Boutique Shopify (`/collections/engagement-rings` : 404). |
| 4 | Premier Diamond Center | Beavercreek (Dayton) | https://www.premierdiamondcenter.com/ | https://www.premierdiamondcenter.com/pages/custom-ring-builder ; montures : https://www.premierdiamondcenter.com/ringsettings | oui (3D JewelerOS, plus Punchmark « Choose a Ring, Choose a Diamond ») | non (Crawl-delay 2) | [V] Deux parcours en ligne et recherche de diamants synthétiques (`/diamonds?labGrown=1`) ; CAO et impression 3D, transformation de bijoux de famille ; plus de 30 ans. [I] Prix chargés par script. |
| 5 | Don Basch Jewelers | Macedonia (entre Cleveland et Akron) | https://www.donbaschjewelers.com/ | https://www.donbaschjewelers.com/custom-engagement-rings (bouton « Design Your Ring ») | oui (3D, texte JewelerOS) [I] | **oui** : robots.txt interdit `Claude-User`, `ClaudeBot`… ; aucune page lue | [I, extrait] « Design your ring online in stunning 3D », pierre choisie dans la salle de Macedonia, bague prête « in just a couple of weeks ». |
| 6 | Dean's Jewelry | Coshocton, Mount Vernon | https://www.deansjewelry.com/ | https://www.deansjewelry.com/custom-engagement-rings (bouton « Design Your Ring ») | oui (3D, texte JewelerOS) [I] | **oui** : robots.txt interdit `Claude-User`, `ClaudeBot`… ; aucune page lue | [I, extrait] Prix réel de la monture dans l'outil 3D, hors pierre ; 2 à 4 semaines ; « upfront pricing, full disclosure » ; depuis 1966. |
| 7 | Elizabeth Diamond Company | Dayton | https://www.shopedc.com/ | https://www.shopedc.com/build-your-own-ring-dayton-oh | non (rendu 3D montré en rendez-vous) | partiel : robots.txt interdit `ClaudeBot`, `anthropic-ai`, `Claude-Web` ; une page lue | [V] Fabrication décrite pas à pas : croquis, rendu 3D à faire tourner, maquette en cire, fonte et sertissage sur place par deux joailliers ; environ 12 semaines ; gemmologue GIA ; naturel, synthétique, pierres de couleur ; remontage de pierres de famille ; depuis 2001. [I] Catalogue chiffré (liens par tranche de prix). |
| 8 | Diamond Cellar | Dublin et Columbus (et Nashville, Tulsa) | https://www.diamondcellar.com/ | https://www.diamondcellar.com/collections/engagement-rings-t | non (« online ring creator » annoncé, lien vers une page de rendez-vous) | non (Shopify) | [V] Marque régionale familiale (« over 78 years »), 171 bagues de fiançailles chiffrées (990 à 22 095 $), synthétique (Céleste Created Diamonds), conseillers diplômés du GIA, achat direct aux tailleurs. Le texte « Use our online ring creator » renvoie à `/pages/custom`, sans outil. |
| 9 | James Free Jewelers | Dayton, Cincinnati | https://jamesfree.com/ | https://jamesfree.com/collections/engagement-rings | non | non (Shopify) | [V] 43 bagues chiffrées (870 à 13 990 $ en première page), collection maison « James Free Collection » vendue en montures, filtre « Ready to Ship », bouton « Quick buy ». Aucune bague synthétique dans la liste lue. |
| 10 | Marlyn Jewelers | Dayton | https://marlynjewelers.net/ | https://marlynjewelers.net/collections/engagement-rings | non | non (Shopify) | [V] Bagues synthétiques chiffrées en page d'accueil (« View all 37 products » ; de 2 897 à 8 515 $ avant remise), 1 513 articles au total, catalogues Stuller, Rego, Lashbrook (site GemFind) ; sur mesure sur rendez-vous. |

## Fiches

### 1. Geraci Fine Jewelry (Cincinnati)

- [V] 9212 Colerain Avenue, Cincinnati ; « Cincinnati's family jeweler since 1982 » ; 25 % de remise sur le stock jusqu'au 30 novembre. Source : https://www.geracifinejewelry.com/
- [V] Page du constructeur : « Every setting shows its own price. We choose the center diamond with you, natural or lab-grown » ; étapes « Pick a setting », « Choose the metal », « Tell us about the diamond », « See it on a hand » ; 14 montures « Setting only » de 1 248,75 à 7 346,25 $ (prix soldés ; prix normaux de 1 665 à 9 795 $). Source : https://www.geracifinejewelry.com/build-your-ring
- [V] L'outil est intégré depuis `https://app.geracifinejewelry.com/ring-builder?embed=1`, dont le code servi est l'application **Aurix** (« The Photo Studio Built for Independent Jewelers », photos « on-model », offres dès 99 $ par mois). Application en JavaScript, non actionnée. Source : page citée et https://app.geracifinejewelry.com/robots.txt
- [V] Bagues de fiançailles : 53 pièces, prix de 1 248,75 à 12 380 $ sur la page lue. Source : https://www.geracifinejewelry.com/bridal-jewelry?type=engagement-ring
- [V] Sur mesure : « Most pieces are ready about three weeks after you approve the design » ; « Once you approve it, half of the price starts your piece » ; rendez-vous en boutique ou sur Zoom ; « Lifetime cleaning and your first ring sizing are free ». Source : https://www.geracifinejewelry.com/custom-design

### 2. Peter & Co. Jewelers (Avon Lake)

- [V] 32020 Walker Rd, Avon Lake, OH 44012 ; « The Art of Forever, Since 1987 ». Source : https://www.peterjewelers.com/
- [V] Script JewelerOS (`data-org-id="9nPa8z2RL8fv"`) sur la page du constructeur ; pages Punchmark et lien « Wedding Band Builder » vers `/pages/ava-couture-band-builder`. Sources : https://www.peterjewelers.com/pages/custom-ring-builder, https://www.peterjewelers.com/pages/custom-engagement-rings

### 3. JS Jewelers (Norwood)

- [V] 2710 Park Ave Unit 600, Norwood, OH 45212 ; « competitive pricing that rivals online wholesalers » ; bagues sur mesure « in just a couple of weeks ». Source : https://www.jsjewelers.shop/pages/custom-engagement-rings
- [V] Script JewelerOS (`partner_config.js`, `data-org-id="9nzxU9nJQ5TY"`). Source : https://www.jsjewelers.shop/pages/design-your-ring

### 4. Premier Diamond Center (Beavercreek)

- [V] 1360 North Fairfield Rd, Beavercreek, OH 45432 ; « For over 30 years » ; CAO et impression 3D évoquées. Source : https://www.premierdiamondcenter.com/
- [V] Script JewelerOS (`data-org-id="9jJqNsZeW1Ju"`). Source : https://www.premierdiamondcenter.com/pages/custom-ring-builder
- [V] Parcours Punchmark « Choose a Ring / Choose a Diamond », liens `/diamonds?labGrown=0` et `/diamonds?labGrown=1`. Source : https://www.premierdiamondcenter.com/ringsettings

### 5. Don Basch Jewelers (Macedonia)

- [V] robots.txt : groupe `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `Perplexity-User`, `PerplexityBot`, `Google-Extended`, `AhrefsBot` → `Disallow: /`. Source : https://www.donbaschjewelers.com/robots.txt
- [I, extrait de recherche] 8226 Fairlane Dr, Macedonia, OH 44056 ; parcours en trois temps : 3D en ligne, pierre en salle d'exposition, commande ; site réalisé par Thinkspace. Source indexée : https://www.donbaschjewelers.com/custom-engagement-rings

### 6. Dean's Jewelry (Coshocton, Mount Vernon)

- [V] Même robots.txt que Don Basch (`Claude-User` interdit). Source : https://www.deansjewelry.com/robots.txt
- [I, extrait de recherche] 409 Main Street, Coshocton et 1573 Coshocton Ave, Mount Vernon ; « serving the Columbus, Ohio area since 1966 » ; « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s) » ; « most custom engagement rings are ready in 2-4 weeks ». Source indexée : https://www.deansjewelry.com/custom-engagement-rings

### 7. Elizabeth Diamond Company (Dayton)

- [V] « designing fine jewelry since 2001 » ; « Hand sketches, 3D CAD renderings, and a wax model let you see and try on the design before any metal is cast » ; rendu 3D « you can rotate on screen » ; « The full process generally runs about twelve weeks » ; naturel et synthétique ; gemmologue GIA. Source : https://www.shopedc.com/build-your-own-ring-dayton-oh
- [V] Liens de catalogue par prix (`/engagement-rings-500-to-1000` … `/engagement-rings-5000-up`) et `/lab-grown-diamonds`, non lus (lecture limitée à une page, voir robots.txt : https://www.shopedc.com/robots.txt).

### 8. Diamond Cellar (Dublin, Columbus ; aussi Nashville et Tulsa)

- [V] 6280 Sawmill Rd, Dublin, OH 43017 et 3960 New Bond St, Columbus, OH 43219 ; « over 78 years ». Source : https://www.diamondcellar.com/pages/appointments
- [V] 171 produits ; prix de 990 à 22 095 $ ; marques A. Jaffe, Céleste Created Diamonds, Henri Daussi, Precision Set, Tacori, marque maison « DCMFG » ; texte « Use our online ring creator to explore styles and start customizing ». Source : https://www.diamondcellar.com/collections/engagement-rings-t
- [V] Le lien « Start Designing » mène à `/pages/custom` (texte et bouton « Schedule Now », sans outil) ; le menu « Design Your Own » mène à `/pages/appointments`. Sources : https://www.diamondcellar.com/pages/custom, https://www.diamondcellar.com/
- [V] « We work directly with the largest diamond cutters in the world to cut out the middlemen ». Source : https://www.diamondcellar.com/pages/diamonds

### 9. James Free Jewelers (Dayton, Cincinnati)

- [V] 3100 Far Hills Avenue, Dayton et 9555 Main Street, Cincinnati ; boutique Shopify, distributeur Rolex. Source : https://jamesfree.com/
- [V] 43 produits ; 870 à 13 990 $ en première page ; collection maison et Gabriel & Co., JB Star, Precision Set. Source : https://jamesfree.com/collections/engagement-rings

### 10. Marlyn Jewelers (Dayton)

- [V] 8355 N Main St, Dayton, OH 45415 ; bagues synthétiques en page d'accueil (« 14K White Gold 6.04ct Lab Grown Diamond Ring », 8 515 $ ramenés à 7 237,75 $ ; « 14K Yellow Gold 2ct Emerald Cut Lab Diamond Ring », 2 897 $) ; « View all 37 products » ; « View all 1515 products » ; « Powered by GemFind ». Source : https://marlynjewelers.net/

## Écartés ou hors classement

- Alson Jewelers (Woodmere, Cleveland) : [V] 230 articles de fiançailles, 2 860 à 289 000 $ en première page, collection « Alson Signature » faite main, diamants naturels GIA seulement ; depuis 1931 ; 28149 Chagrin Blvd. `Crawl-delay: 30`. Source : https://www.alsonjewelers.com/engagement-rings. Écarté du classement : ni synthétique ni outil en ligne.
- Scott's Custom Jewelers (Dublin) : [V] CAO et impression 3D sur place, « 3 CAD operators and 4 jewelers on staff », délais de quelques semaines à 4 à 6 semaines, synthétique ; aucun prix ni outil en ligne. Source : https://scottscustomjewelers.com/
- Welling & Co. (West Chester) : [V] « since 1920 », boutique Shopify ; [I, extrait] « Ring Builder » annoncé, lien absent du code servi le 25/11. Source : https://wellingandco.com/
- Y Sadiq Diamond (Gahanna) : [I, extrait] listes de prix de diamants naturels et synthétiques, « Interactive Band Builder » ; [V] nom de domaine `ysadiqdiamonds.com` non résolu le 25/11.
- Christopher Nolan (Medina), Broer-Freeman (Toledo, depuis 1877), Argo & Lehne (Columbus), Lisa Robin Jewelry (Centerville), International Diamond Jewelers (Dayton), Todd's Jewelers (Parma Heights) : [I, extraits] sur mesure ou catalogue sans outil de configuration notable ; non lus.
- Exclus par la consigne : Rogers & Hollands (chaîne régionale de plusieurs États, salle de Toledo) ; Venazia (vendeur en ligne national basé en Floride, pages locales « Cincinnati », « Youngstown » sans salle dans l'Ohio [I]).

## Sources

Pages lues le 25/11/2026 avec curl (code 200 sauf mention) :

- Geraci : https://www.geracifinejewelry.com/robots.txt, https://www.geracifinejewelry.com/, https://www.geracifinejewelry.com/custom-design, https://www.geracifinejewelry.com/build-your-ring, https://www.geracifinejewelry.com/bridal-jewelry?type=engagement-ring, https://app.geracifinejewelry.com/robots.txt, https://app.geracifinejewelry.com/ring-builder?embed=1 ; `/engagement` : 404
- Peter & Co. : https://www.peterjewelers.com/robots.txt, https://www.peterjewelers.com/, https://www.peterjewelers.com/pages/custom-engagement-rings, https://www.peterjewelers.com/pages/custom-ring-builder, https://www.peterjewelers.com/ringsettings (redirige vers `/pages/ring-settings-1`)
- JS Jewelers : https://www.jsjewelers.shop/robots.txt, https://www.jsjewelers.shop/, https://www.jsjewelers.shop/pages/custom-engagement-rings, https://www.jsjewelers.shop/pages/design-your-ring ; `/pages/custom-ring-builder` et `/collections/engagement-rings` : 404
- Premier Diamond Center : https://www.premierdiamondcenter.com/robots.txt, https://www.premierdiamondcenter.com/, https://www.premierdiamondcenter.com/pages/custom-ring-builder, https://www.premierdiamondcenter.com/ringsettings, https://www.premierdiamondcenter.com/jewelry/engagement-rings
- Don Basch et Dean's : https://www.donbaschjewelers.com/robots.txt, https://www.deansjewelry.com/robots.txt (seules pages lues)
- Elizabeth Diamond Company : https://www.shopedc.com/robots.txt, https://www.shopedc.com/build-your-own-ring-dayton-oh
- Diamond Cellar : https://www.diamondcellar.com/robots.txt, https://www.diamondcellar.com/, https://www.diamondcellar.com/collections/engagement-rings-t, https://www.diamondcellar.com/pages/custom, https://www.diamondcellar.com/pages/diamonds, https://www.diamondcellar.com/pages/appointments
- James Free : https://jamesfree.com/robots.txt, https://jamesfree.com/, https://jamesfree.com/collections/engagement-rings
- Marlyn : https://marlynjewelers.net/robots.txt, https://marlynjewelers.net/
- Alson : https://www.alsonjewelers.com/robots.txt, https://www.alsonjewelers.com/engagement-rings
- Scott's : https://scottscustomjewelers.com/robots.txt, https://scottscustomjewelers.com/
- Welling : https://www.wellingandco.com/robots.txt (redirige vers `wellingandco.com`), https://wellingandco.com/
- Y Sadiq : https://ysadiqdiamonds.com/robots.txt et https://www.ysadiqdiamonds.com/robots.txt : hôte non résolu

Extraits de recherche (Parallel Search, requêtes génériques sur les joailliers de l'Ohio), utilisés pour les faits marqués [I] : https://www.deansjewelry.com/custom-engagement-rings, https://www.donbaschjewelers.com/custom-engagement-rings, https://ysadiqdiamonds.com/, https://www.wellingandco.com/, https://christophernolan.com/, https://broerfreemanjewelers.com/pages/engagement-rings-we-have-made, https://www.argolehne.com/lab-grown-diamond-engagement-rings-in-columbus, https://lisarobinjewelry.com/pages/shop-lisa-robin-dayton-ohio, https://www.shopidj.com/engagement, https://toddsjewelers.com/, https://www.rogersandhollands.com/storelocator/location/storeinfo?storeID=35094, https://www.venazia.com/custom-engagement-rings-cincinnati-oh, https://www.venazia.com/engagement-ring-sets-youngstown-oh
