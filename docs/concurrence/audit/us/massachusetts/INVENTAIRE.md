# Massachusetts : inventaire des joailliers locaux qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence aux États-Unis de JR Diamond.

Périmètre : joailliers qui ont leur siège, leur atelier ou leur salle d'exposition au Massachusetts et qui vendent en ligne des bagues de fiançailles ou des alliances. Chacun offre au moins l'un des éléments suivants : configurateur, visuel 3D ou 360°, création sur mesure en ligne, prix affichés. Les vendeurs en ligne nationaux, les chaînes nationales et les grandes maisons sont exclus (la salle Brilliant Earth de Newbury Street, par exemple).

Méthode : lecture des pages comme un visiteur ordinaire, avec curl (identité par défaut de curl, sans en-tête de navigateur) ou avec le navigateur de rendu Firecrawl (proxy « basic », jamais « stealth ») pour les pages en JavaScript. Le robots.txt de chaque site audité a été lu avant ses pages, et un site n'a jamais reçu plus d'une page toutes les 2 secondes. Aucun formulaire n'a été rempli, aucun compte créé, aucun chat ouvert, aucun article mis au panier. Aucun blocage n'a été contourné ni retenté.

Écarts à signaler :

- La liste de *Boston Magazine* (S1) a été lue (cache Firecrawl du 13/11) **avant** son robots.txt. Or celui-ci interdit ClaudeBot, anthropic-ai et les autres robots d'IA. Elle n'a servi qu'à repérer des noms et à situer trois acteurs (faits marqués I, S1) : aucun fait du classement n'en dépend. Le lien piège « I'm a scraper » de la page n'a pas été suivi.
- Pour DePrisco et E.B. Horn (`Crawl-delay: 10`), et pour Keezing Kreations (`Crawl-delay: 3`), le robots.txt et l'accueil ont été lus à 2 secondes d'intervalle, avant que le délai soit relevé. Aucune autre page de ces sites n'a été lue.

Chaque fait porte une marque :

- **V** (vérifié) : page lue le 15/11/2026, à l'adresse citée en source ;
- **I** (inféré) : déduit d'un extrait d'index de recherche ou de plusieurs indices ;
- **S** (supposé).

Prix en dollars US, tels qu'affichés, hors taxe de vente du Massachusetts.

## Classement

Le classement mesure l'intérêt pour JR Diamond, dans cet ordre : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Sachs Jewelers | Shrewsbury, Mashpee (cap Cod), Franklin | https://www.sachsjewelers.com | https://www.sachsjewelers.com/page/custom-ring-builder.html | oui (3D annoncée, module JewelerOS « StoneAlgo Ring Builder », 5 étapes) ; plus un constructeur d'alliances | aucun (200, Cloudflare sans défi ; robots.txt : seuls panier, compte et quelques paramètres comme `?size=` ou `?type=` sont interdits) | Le parcours le plus proche de JR Diamond : on dessine la monture en ligne et on voit son « real price », pierre en sus ; on finalise ensuite en boutique (V). Diamants naturels et synthétiques au menu (V). Délai annoncé de « a couple of weeks » (V). Le rendu 3D lui-même n'a pas été vu. |
| 2 | The Diamond Guild | Norwood | https://thediamondguild.com | https://thediamondguild.com/custom-ring-builder/ | oui (même module JewelerOS / StoneAlgo, 4 étapes) | aucun (200 ; robots.txt : seul `/wp-admin/` est interdit) | Même outil que Sachs, chez un fabricant familial depuis 1945, sur rendez-vous seulement (V). Parcours en trois temps : dessin en 3D en ligne, choix de la pierre en salle, commande (V). Aucun prix et aucune mention du synthétique relevés (V). |
| 3 | Jewelry Express Works | Brookline | https://jewelryexpressworks.com | https://jewelryexpressworks.com/pages/band-builder | oui, pour les alliances (Stuller Band Builder : prix et poids en direct) | aucun (robots.txt Shopify standard) ; la page porte `noindex, nofollow` | Le prix le plus expliqué de l'État. L'alliance est chiffrée selon le poids : 9,13 g d'or 14 k blanc pour 2 680,86 $, avec le cours de l'or affiché (V). Sur mesure : formule « prix de la pierre + monture », acompte de 350 $ pour la CAO, deux retouches et un modèle en résine à essayer (V). Synthétique proposé (V). |
| 4 | Morin Jewelers | Southbridge | https://www.morinjewelers.com | https://www.morinjewelers.com/ringsettings | oui (monture puis diamant, plateforme Punchmark ; photos et vidéos, pas de 3D relevée) | aucun (robots.txt sans règle pour les robots ordinaires) | 140 montures avec prix et panier (V). Filtre diamant synthétique (V). Atelier sur place : croquis, 3D et finition « on our own bench », dès 999 $ environ, en 3 à 4 semaines (V). |
| 5 | Melanie Casey | Andover | https://www.melaniecasey.com | https://www.melaniecasey.com/collections/choose-your-engagement-setting | partiel (monture, puis « Choose Your Diamond ») | aucun (robots.txt Shopify standard) | Fabricante : bagues faites sur place, à la commande (V). Prix « Starting at » de 1 200 à 4 200 $ et date d'expédition affichée (V). Collection synthétique, coffret d'essai à domicile (V). |
| 6 | Laura Preshong | Boston (South End) | https://www.laurapreshong.com | https://www.laurapreshong.com/pages/customizations | non (menu de modifications chiffrées, sans visuel) | aucun (robots.txt Shopify standard) | Une transparence rare. Chaque modification a son prix, par exemple 400 $ pour un serti clos et 75 $ pour une gravure (V). Le sur mesure est détaillé : 50 % d'acompte, rendus CAO sous 3 à 5 jours ouvrés, trois jeux de rendus au plus (V). Diamants synthétiques « in-house » avec prix à la pierre (V). |
| 7 | Bostonian Jewelers | Boston (Jewelers Building) | https://bostonianjewelers.com | https://bostonianjewelers.com/apps/bostonian-jewelers/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE | oui, pour les alliances (Lashbrook) | aucun (robots.txt Shopify standard, `/apps/` non interdit) | Constructeur d'alliances avec prix (3 200,25 $) et date d'expédition (V). Atelier de CAO et d'impression 3D de cires, sur place (V). Naturel et synthétique (V). |
| 8 | Long's Jewelers | Boston, Braintree, Burlington, Peabody (et Nashua, New Hampshire) | https://www.longsjewelers.com | https://www.longsjewelers.com/collections/engagement-ring-settings | non (montures avec prix, puis rendez-vous) | aucun (robots.txt Shopify standard) ; grille chargée en JavaScript, prix lus dans les données de la page | Grande enseigne régionale, fondée en 1878 (V). Montures de marques avec prix, environ 1 530 à 13 025 $ (V, conversion I). Diamants naturels dès 7 500 $ (V). Bague prête en 4 à 6 semaines (V). Sur mesure en CAO (V). Synthétique non relevé. |
| 9 | Boston Diamond Company | Boston (Newbury Street) | https://bostondiamond.com | https://bostondiamond.com/collections/engagement-rings | non (« Design Your Ring » mène au formulaire de contact) | aucun (robots.txt Shopify standard) | 56 bagues avec prix, par exemple 8 200 $ (V). Salle privée sur rendez-vous (V). Collection synthétique « PureLux Lab » (V). Le site se dit « Best of Boston 2026 » (V, affirmation du site). |
| 10 | Barmakian Jewelers | Framingham (et Nashua, New Hampshire) | https://www.barmakian.com | https://www.barmakian.com/pages/getting-engaged (I) | probable : « Start With a Mounting » et « Start With a Diamond », outil `/apps/diamondtools/` (I) | **bloqué** : 403 Cloudflare « Attention Required! » sur l'accueil et le robots.txt ; pas de nouvel essai | D'après les extraits de recherche : montures « From $1,350 », marques Tacori et Fana, salons privés pour voir la pierre (I). Non audité directement. |

## Détail par acteur

### 1. Sachs Jewelers (Shrewsbury, Mashpee, Franklin)

- Maison fondée en 1923, « fourth generation, family owned in Massachusetts » (V, S2).
- Trois salles : 180 Boston Turnpike (Route 9 East) à Shrewsbury, 3 Central Square à Mashpee (cap Cod), 300 Franklin Village Drive à Franklin (V, S3).
- Constructeur : écran « Step 1 of 5, Let's start designing your ring ». On choisit parmi 8 styles, du solitaire au trois-pierres, ou on part de zéro. Le texte promet ensuite le « 3D Ring Designer » (V, S3).
- La description de la page indique « StoneAlgo Ring Builder » (V, S3). Le module 3D ne s'est pas affiché dans le rendu automatique, qui contient le message « We couldn't load your ring design » (V, S3) : il se charge sans doute après le choix d'un style (I).
- FAQ : « You can see the real price of your engagement ring setting by designing it in our 3D ring builder. This price does not include your center stone(s). » Une conseillère recontacte ensuite par SMS pour un rendez-vous en ligne ou en boutique (V, S4).
- Délai annoncé : « ready for you in just a couple of weeks ». Garantie contre les défauts de fabrication (V, S4).
- Autres pages : un constructeur d'alliances (« Custom Band Builder », dont le module n'a pas été lu, S5), une recherche de diamants naturels et une de diamants synthétiques (V, S3).
- Marques : Hearts On Fire, A.JAFFE, Martin Flyer, Noam Carver, Gabriel & Co, et une gamme « Sachs Signature » (V, S3). Financement Synchrony, PayPal et paiement échelonné en magasin (V, S3).
- Pour JR Diamond : le même parcours « dessin en ligne → pierre en salle → prix final », mais le visuel provient de la bibliothèque générique de l'éditeur, pas du fichier de fabrication de l'atelier (I).

### 2. The Diamond Guild (Norwood)

- Famille Karten, joailliers depuis 1945. Expérience « concierge-style, appointment-only » : 83 Morse Street, Suite 8AA, Norwood. Ouvert le mardi, le jeudi et le vendredi de 10 h à 17 h (V, S6, S7).
- Constructeur : même module que Sachs, en « Step 1 of 4 ». Le script vient de jeweleros.com, la description annonce « StoneAlgo Ring Builder » (V, S7). Le rendu 3D n'a pas été vu, pour la même raison que chez Sachs (V, S7).
- Parcours annoncé : « Design your ring online in stunning 3D », puis choix de la pierre en salle à Norwood, puis commande. Bague « ready for you in just a couple of weeks » (V, S6).
- Ni prix, ni mention du diamant synthétique sur les deux pages lues (V, S6, S8).
- À noter : le même éditeur équipe Sachs et The Diamond Guild, et un recenseur l'a aussi trouvé au Montana. C'est donc un outil courant chez les indépendants (I).

### 3. Jewelry Express Works (Brookline)

- Boutique et atelier au 211 Washington St, Brookline (V, S10). Indépendant fondé en 2002 ; maître joaillier : Igor (V, S9).
- Constructeur d'alliances Stuller (images stullercloud, cadre jewelershowcase.com). On règle la matière (27 choix, dont l'or 14 et 18 k blanc, jaune et rose, et le platine), le profil, la taille US (1 à 20,25), le confort, les détails, la largeur (1 à 12 mm), le poids, la finition et la gravure intérieure ou extérieure (V, S10).
- Exemple affiché : alliance demi-jonc en or 14 k blanc, confort, 6 mm, taille 10, épaisseur 2,2 mm, « Approx. Weight 5.87 DWT (9.13 grams) », pour 2 680,86 $ (V, S10).
- Cours du jour affichés au 13/11/2026 (source Kitco) : or 3 890,85, platine 1 515,00 (V, S10).
- Le site annonce « transparent pricing based on weight and dimensions ». Il précise : métaux 100 % recyclés (certification SCS), commande sur mesure non remboursable, une mise à taille offerte, commande passée en boutique (V, S10).
- Sur mesure : maquette 3D en CAO, puis « a physical 3D resin model you can view, touch, and try on in our store before any metal is poured » (V, S9). Projets dès 2 000 $, en 3 à 4 semaines (V, S11).
- Formule de prix publiée : « Selected Gem Price + Custom Mounting Design (plus applicable MA sales tax) » (V, S11).
- Acomptes : 350 $ pour la CAO, deux retouches et le modèle en résine, avec un diamant synthétique ou la pierre du client ; 500 $ pour une pierre naturelle rare. L'acompte est déduit à 100 % du prix et n'est plus remboursable une fois la CAO commencée (V, S11).
- Diamants synthétiques et naturels (V, S9).
- Pour JR Diamond : c'est le modèle à suivre pour l'alliance de kiddouchin (prix au poids, cours de l'or visible), et pour l'essai d'un modèle physique avant la fonte (I).

### 4. Morin Jewelers (Southbridge)

- 409 Main Street, Southbridge. Maison familiale depuis 1920, dirigée par Rob, petit-fils du fondateur, « a GIA graduate gemologist, goldsmith and bench jeweler » (V, S12).
- « Build Your Own Ring » ouvre `/ringsettings` : « Showing 1 - 24 of 140 » montures de la marque Overnight, en platine et en or 10, 14 et 18 k. Les prix vont par exemple de 1 487,88 à 3 997,92 $ sur la première page. Chaque fiche porte un bouton « Add to Cart », la mention « Ships in 2-3 Business Days » et des vidéos (V, S13).
- Diamants : filtre naturel ou synthétique (`/diamonds?labGrown=1`) (V, S12). Dix bagues complètes, diamants compris, affichées en page d'accueil de 1 937,50 à 4 012,50 $ (V, S12).
- Sur mesure : « We sketch it by hand, model it in 3D and finish it in our own shop, and you approve every stage before anything is made ». À partir de 999 $ environ, en 3 à 4 semaines la plupart du temps (V, S12).
- Plateforme Punchmark (V, S12). Financement Iddeal ou Affirm (V, S12).

### 5. Melanie Casey (Andover)

- Atelier et salle au 18 Red Spring Rd, Suite 102, Andover. La salle est ouverte le mercredi de 12 h à 18 h 30 et le vendredi de 9 h à 15 h (V, S14).
- Le site dit : « We create fine jewelry in-house and specialize in handcrafted rings ». Les bagues sont fabriquées par « our team of master bench jewelers » (V, S14).
- « Choose Your Engagement Setting » : « Every piece in this collection is made to order ». Les prix « Starting at » vont de 1 200 $ (Ensemble Cluster) à 4 200 $ (Coda, Unveiled), la plupart entre 2 800 et 3 750 $ (V, S15).
- Fiche Whisper, taille ovale : « Setting Price: From $2,800 », puis « Made to order. Ships by January 18 » (V, S16). L'étape du choix du diamant n'a pas été ouverte.
- Collection en diamant synthétique, coffret d'essai à domicile (« Silhouette Box »), baguier, garantie à vie, nouveautés chaque vendredi (V, S15).

### 6. Laura Preshong (Boston, South End)

- Salle d'exposition dans le South End à Boston (V, S17). Positionnement éthique, d'après le titre du site : « Ethically Sourced Engagement and Wedding Rings » (V, S17).
- « Customizations » : jusqu'à deux modifications sur une bague de la collection, chacune avec un prix d'appel (V, S18) :
  - serti clos dès 400 $ ; halo caché, 650 $ ; anneau élargi, 300 $ ; deux métaux, 500 $ ;
  - pavage, 600 $ ; perlage, 250 $ ; gravure, 75 $ ; pierre incrustée, 200 $ ;
  - griffes doubles, 300 $ ; fleur de lys, 400 $ ; orientation de la pierre, 150 $ ; pierre de couleur au prix de la pierre.
- Le site prévient : « Customizations do not include visuals or 3D renders ». En ligne, le paiement se fait sur facture (V, S18).
- Sur mesure dès 2 000 $ pour une alliance et 3 200 $ pour une bague de fiançailles (V, S19). Le site publie aussi des « Real Custom Projects and Pricing » (V, S19).
- Étapes du sur mesure (V, S19) :
  - devis en 1 à 3 jours ouvrés ;
  - sélection de la pierre en une semaine environ, pierre réservée 48 h ;
  - 50 % d'acompte au lancement ;
  - premiers rendus CAO en 3 à 5 jours ouvrés, avec 4 ou 5 vues ;
  - un jeu de rendus initial et deux retouches au plus, soit trois jeux en tout.
- Diamants synthétiques « In-House » vendus à la pierre, avec forme, carats, couleur, pureté, taille et prix : par exemple, ovale 2,01 ct E VS1 à 2 010 $ et ovale 2,52 ct D VVS1 à 2 900 $ (V, S20).
- Pour JR Diamond : la grille de modifications chiffrées et le calendrier du sur mesure sont une bonne réponse au « prix expliqué ». Il leur manque le visuel, que JR Diamond aurait (I).

### 7. Bostonian Jewelers (Boston, Jewelers Building)

- Studio au 333 Washington St, Suite 711-713, Boston, ouvert du lundi au vendredi de 10 h à 17 h (V, S21).
- Directrice de création : Alexandria Matossian. Le site affirme que la maison fut parmi les premières de Nouvelle-Angleterre à passer de la cire sculptée à la main « to high-precision 3D digital modeling and 3D wax printing », en associant le client « in the virtual layout stages » (V, S21). Pièces « handcrafted entirely in-house » (V, S21).
- Constructeur Lashbrook (hébergé sur ringdesignersstudio.com), pour les alliances. Configuration par défaut : jonc bombé de 7 mm en or 14 k blanc, satiné, poids « Premium », taille 10, à 3 200,25 $, « Ships as soon as Mon. Nov. 16th » (V, S22).
- Matières proposées : or 10, 14, 18 et 22 k, platine, palladium, titane, cobalt, tantale, météorite, damas, carbone (V, S22).
- Sur mesure : CAO « for two decades », rendus haute résolution, cires imprimées en 3D (I, S23). Pages naturel et synthétique (V, S21).

### 8. Long's Jewelers (Grand Boston)

- Fondée en 1878 (V, S24). Cinq salles de joaillerie : Boston, Braintree, Burlington et Peabody au Massachusetts, Nashua au New Hampshire (V, S25). Revendeur Rolex et Patek Philippe (V, S24).
- Montures de marques (Frederick Goldman, Mark Patterson, Sylvie) (V, S25). Les données de la page contiennent 63 prix de variantes (doublons possibles). Ils sont stockés en cents, d'où une fourchette d'environ 1 530 à 13 025 $ (conversion I), par exemple 4 480 $ pour une monture trois-pierres ovale en platine (V, S25).
- FAQ : montures « from around $1,000 » (V, S25).
- « Discover thoughtfully priced natural diamonds, beginning at $7,500 » (V, S24). Bague prête « in approximately 4 to 6 weeks » après validation (V, S26).
- Sur mesure : croquis, rendu CAO en 3D, modèle en cire ou en résine, puis « a few weeks » (V, S27).
- Seul le diamant naturel est mis en avant (V, S24, S26). L'absence de synthétique est supposée (S).

### 9. Boston Diamond Company (Boston, Newbury Street)

- « Private Newbury Street Showroom », sur rendez-vous seulement (V, S28). Le site affiche « Awarded "Best of Boston 2026" for Best Engagement Rings by Boston Magazine » (V, affirmation du site, non recoupée).
- 56 bagues de fiançailles avec prix, par exemple 8 200 $ pour un rond de 3,04 ct en serti cathédrale pavé (V, S29).
- « Design Your Ring » renvoie au formulaire de contact (`/pages/contact-us`) (V, S28). Collection synthétique « PureLux Lab » (V, S28).

### 10. Barmakian Jewelers (Framingham ; bloqué)

- L'accueil et le robots.txt répondent 403, page Cloudflare « Attention Required! », nœud de Chicago (V, S30). Aucun nouvel essai, aucune autre voie.
- Les extraits d'index de la page `/pages/getting-engaged` mentionnent (I, S31) :
  - « Start With a Mounting » (`/collections/engagement-rings`), « Start With a Diamond » (`/apps/diamondtools/`) et « Design in Person » ;
  - des montures « From $1,350 » (gamme maison) et « From $5,890 » (Tacori) ;
  - « three New England locations ».
- Implantations : Framingham et Nashua (New Hampshire) (I, S31). Une salle au Jewelers Exchange Building de Boston est citée en 2020 (I, S1) : à vérifier.

## Hors classement

| Acteur | Ville | Adresse | Raison |
|---|---|---|---|
| Hannoush Jewelers | Springfield (salle au 1630 Boston Rd, I) | https://www.hannoush.com | Né au Massachusetts en 1980, mais « more than 50 company-owned and franchised stores » dans le pays : une chaîne de fait (V, S32). Prix affichés, par exemple 1 900 $ pour un solitaire en diamant synthétique (V, S33). Sur mesure avec croquis et « digital renderings » (V, S34). |
| DePrisco Diamond Jewelers | Boston, Osterville (I, S1) | https://deprisco.com | Refuse le synthétique : « We have no interest in fake lab-grown diamonds and gems here » (V, S35). `Crawl-delay: 10`. |
| Descenza Diamonds | Boston, Framingham, Hingham, Peabody (I) | https://www.descenza.com | Depuis 1915 (V, S36). Rubrique de bijoux synthétiques (V, S36), sur mesure en CAO et cire (I, S37). Aucun constructeur : `/ringsettings` répond 404 (V, S36). |
| Cynthia Britt | Boston (Newbury St, I, S1) et New York | https://cynthiabritt.com | Sur mesure sur rendez-vous à New York, à Boston ou en visio (V, S38). Prix affichés, par exemple 2 530 $ pour une alliance homme (V, S38). Pas de configurateur. |
| Keezing Kreations | Boston (Jewelers Building, I) | https://keezingkreations.com | « Boston Jewelry Designers, Since 1946 », sur mesure, synthétique (V, S39). Pas de configurateur relevé ; `Crawl-delay: 3`. |
| Shreve, Crump & Low | Boston | https://shrevecrumpandlow.com | « America's Jeweler Since 1796 », bagues certifiées GIA en ligne (V, S40). Maison de luxe sans configurateur relevé. |
| E.B. Horn | Boston | https://www.ebhorn.com | Depuis 1839, catalogue fiançailles (V, S41). Pas de configurateur relevé ; `Crawl-delay: 10`. |
| M. Flynn | Boston (South End) | https://www.mflynnjewelry.com | **Bloqué** : défi Cloudflare (403, `cf-mitigated: challenge`), et le robots.txt interdit ClaudeBot, anthropic-ai et Claude-Web (V, S42). |
| E. Scott Originals | Somerville | https://escottoriginals.com | Injoignable : connexion réinitialisée sur le robots.txt et sur l'accueil (V, S43). Pas de nouvel essai. |
| Sidney Thomas | Boston | https://www.sidneythomas.com | Injoignable : erreur 502 du tunnel sortant (V, S43). Le site existe peut-être encore (S). |
| Hannah Florman, Ore / Sophie Hughes, Adamas, Quadrum, Royal Jewelers | Boston, Newton, Chestnut Hill, Andover | — | Repérés dans les résultats de recherche ; non vérifiés. |

## Sources

Pages lues le 15/11/2026 (faits marqués V). Le robots.txt de chaque site a été lu à la racine du domaine.

- S1 : https://www.bostonmagazine.com/weddings/engagement-ring-shops/ (cache Firecrawl du 13/11/2026 ; article de 2020, mis à jour en 2021 ; lu avant le robots.txt, voir les écarts) et https://www.bostonmagazine.com/robots.txt
- S2 : https://www.sachsjewelers.com/ et https://www.sachsjewelers.com/robots.txt
- S3 : https://www.sachsjewelers.com/page/custom-ring-builder.html
- S4 : https://www.sachsjewelers.com/page/custom-engagement-rings.html
- S5 : https://www.sachsjewelers.com/page/custom-band-builder.html
- S6 : https://thediamondguild.com/ et https://thediamondguild.com/robots.txt
- S7 : https://thediamondguild.com/custom-ring-builder/
- S8 : https://thediamondguild.com/custom-engagement-rings/
- S9 : https://jewelryexpressworks.com/ et https://jewelryexpressworks.com/robots.txt
- S10 : https://jewelryexpressworks.com/pages/band-builder
- S11 : https://jewelryexpressworks.com/pages/custom-design
- S12 : https://www.morinjewelers.com/ et https://www.morinjewelers.com/robots.txt
- S13 : https://www.morinjewelers.com/ringsettings
- S14 : https://www.melaniecasey.com/ et https://www.melaniecasey.com/robots.txt
- S15 : https://www.melaniecasey.com/collections/choose-your-engagement-setting et https://www.melaniecasey.com/collections/lab-grown-diamond-engagement-rings
- S16 : https://www.melaniecasey.com/products/whisper-ring-oval-cut-diamond
- S17 : https://www.laurapreshong.com/ et https://www.laurapreshong.com/robots.txt
- S18 : https://www.laurapreshong.com/pages/customizations
- S19 : https://www.laurapreshong.com/pages/custom-design
- S20 : https://www.laurapreshong.com/collections/shop-center-stones-in-house-lab-grown-diamonds
- S21 : https://bostonianjewelers.com/ et https://bostonianjewelers.com/robots.txt
- S22 : https://bostonianjewelers.com/apps/bostonian-jewelers/rings/profiles/D/widths/7/ring_materials/14KW?ring_finish=SATIN&finish_type=F&weight=P&size=10&feature_group=N&sleeve=NONE
- S24 : https://www.longsjewelers.com/ et https://www.longsjewelers.com/robots.txt
- S25 : https://www.longsjewelers.com/collections/engagement-ring-settings
- S26 : https://www.longsjewelers.com/pages/diamonds-engagement-rings
- S27 : https://www.longsjewelers.com/pages/custom-engagement-rings-design
- S28 : https://bostondiamond.com/ et https://bostondiamond.com/robots.txt
- S29 : https://bostondiamond.com/collections/engagement-rings
- S30 : https://www.barmakian.com/ et https://www.barmakian.com/robots.txt (403 Cloudflare)
- S32 : https://www.hannoush.com/pages/about-us (et https://www.hannoush.com/robots.txt, https://www.hannoush.com/)
- S33 : https://www.hannoush.com/collections/lab-grown-diamond-engagement-rings
- S34 : https://www.hannoush.com/pages/custom-jewelry-design
- S35 : https://deprisco.com/ et https://deprisco.com/robots.txt
- S36 : https://www.descenza.com/, https://www.descenza.com/robots.txt et https://www.descenza.com/ringsettings (404)
- S38 : https://cynthiabritt.com/ et https://cynthiabritt.com/robots.txt
- S39 : https://keezingkreations.com/ et https://keezingkreations.com/robots.txt
- S40 : https://shrevecrumpandlow.com/ et https://shrevecrumpandlow.com/robots.txt
- S41 : https://www.ebhorn.com/ et https://www.ebhorn.com/robots.txt
- S42 : https://www.mflynnjewelry.com/ (403, défi Cloudflare) et https://www.mflynnjewelry.com/robots.txt
- S43 : https://escottoriginals.com/robots.txt et https://www.sidneythomas.com/robots.txt (échecs de connexion)

Extraits d'index de recherche (Parallel Search et Firecrawl Search), utilisés pour les faits marqués I :

- S23 : https://bostonianjewelers.com/pages/custom-engagement-rings
- S31 : https://www.barmakian.com/pages/getting-engaged
- S37 : https://www.descenza.com/pages/custom-jewelry et https://www.descenza.com/jewelry/engagement--wedding
- Repérage des candidats : https://www.hannoush.com/pages/engagement-rings-springfield-ma, https://www.morinjewelers.com/pages/engagement-rings-in-central-massachusetts, https://www.weddingwire.com/c/ma-massachusetts/wedding-jewelers/19-sca.html, https://www.hannahflorman.com/
