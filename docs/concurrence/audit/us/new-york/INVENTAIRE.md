# Inventaire des joailliers : New York (État)

Recensement du 25 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site (règle
générale `User-agent: *` contrôlée avec l'outil de contrôle des adresses, puis lecture à la main des groupes `ClaudeBot`, `Claude-Web` et `anthropic-ai`), aucun formulaire
rempli ni envoyé, aucun compte créé, aucun article mis au panier, aucun chat ni WhatsApp ouvert, au plus une page toutes les 2 secondes par site (10 secondes là où le robots.txt
le demande).

Repères : **[V]** vérifié (page lue, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié), **[sec.]** lu sur une source secondaire
(extrait de moteur de recherche, page non relue). Prix en dollars américains, tels qu'affichés le 25/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale
est dans les fiches.

Outils : recherche par Parallel Search (requêtes génériques, sans mention de JR Diamond ; Firecrawl indisponible, crédits épuisés), puis **curl tel quel** (identité par défaut)
pour toutes les pages. Conséquence : **aucun rendu JavaScript**. Les configurateurs chargés par script n'ont pas été actionnés ; ce qu'on en dit vient du texte des pages, des
données intégrées au HTML, du fichier public `/products/<nom>.js` d'une boutique Shopify et, pour Haejin, du fichier JavaScript public de l'outil (non interdit, pas de
robots.txt sur son hôte).

## Constat général

- [V] **Un seul configurateur 3D développé sur mesure** : Haejin Jewelry (Brooklyn) intègre un outil hébergé à part (`ring-builder-deploy-git-hub-ty64.vercel.app`) dont le
  code charge Three.js (`WebGLRenderer`) et des modèles glTF (`GLTFLoader`), avec des prix en cents par élément et un « sous-total » des pierres d'accompagnement. C'est la
  même famille technique que le configurateur de JR Diamond (GLB dans React Three Fiber). [I] La 3D est un catalogue de montures, pas le fichier de fabrication d'une bague
  précise.
- [V] **Le configurateur 3D en marque blanche JewelerOS est de nouveau très répandu** : AJ's Jewelers (`9dHdYC2Giycg`), Truman (`9e59tMHX1ALC`), Brian Michaels
  (`9m0JlqyyVPOJ`) chargent `jeweleros.com/static/dist/jos.js` ; Nekta New York et Raz & Company publient la même page d'accueil JewelerOS mot pour mot (« Design your ring online
  in stunning 3D », pierre choisie en salle d'exposition, bague prête « in just a couple of weeks »). Même éditeur qu'au New Jersey, en Alabama et au Tennessee. Chez Brian
  Michaels, la FAQ précise que l'enregistrement d'un modèle exige nom et téléphone, puis un message de l'équipe pour prendre rendez-vous.
- [V] **Constructeurs « monture puis pierre » chiffrés** : Ring Concierge (montures « From » 2 200 à 4 800 $), Greenwich St. Jewelers (montures « From » 2 100 à 7 000 $),
  Page Sargisson (montures dès 3 500 $), SVS Fine Jewelry (paiement en ligne possible), MM Fine Jewelry (« see the price as you go »).
- [V] **Prix expliqué** : MM Fine Jewelry écrit que les prix suivent le cours du métal et sont confirmés à la réservation, avec une photo du rapport de laboratoire, et envoie un
  lien « qui rouvre exactement cette bague » ; Haejin publie une page « Radical Transparency » sur les certificats GIA et IGI et la fraude aux numéros d'inscription laser. Ce
  sont les deux discours les plus proches du « prix expliqué » et de la peur de l'échange de pierre relevée sur les forums.
- [V] Le synthétique est partout : exclusif chez Haejin, proposé à côté du naturel chez SVS, Page Sargisson, MM Fine, Ring Concierge (collection « Lab Diamonds »), AJ's ;
  montures synthétiques à 699 $ chez NYC Diamond District. Seul Custom Made Rings (Cinquième Avenue) écrit refuser les pierres de laboratoire.
- [V] Délais affichés : 2,5 à 3 semaines (Haejin), 2 à 4 semaines (Brian Michaels), 3 à 4 semaines (SVS, MM Fine), 6 à 8 semaines (Ring Concierge, Page Sargisson). JR
  Diamond : 14 jours ouvrés.
- [V] Blocages : Lauren B (Cinquième Avenue) sert une page Cloudflare « Just a moment... » (403) ; Mazal Diamond répond 503 ; ItsHot refuse même son robots.txt (403) ; Raz &
  Company interdit `ClaudeBot`, `Claude-Web` et `anthropic-ai` (`Disallow: /`) alors que l'outil de contrôle des adresses le dit « AUTORISÉ » (il ne lit que `*`). Les quatre
  sont marqués « bloqué » ; aucun nouvel essai.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Haejin Jewelry | Brooklyn (Williamsburg) | https://haejinjewelry.com/ | https://haejinjewelry.com/pages/ring-builder (outil intégré : https://ring-builder-deploy-git-hub-ty64.vercel.app/) | oui (3D Three.js + glTF développée pour la marque, prix instantané) | non (robots.txt : tout permis sauf panier, compte, recherche ; IA « fully welcome ») | [V] « Choose a setting, pick your diamond, see the price instantly » ; montures dès 600 $, diamants synthétiques dès 400 $ ; or recyclé 14 et 18 k trois couleurs et platine ; fait sur commande à l'atelier en 2,5 à 3 semaines ; page « Radical Transparency » (GIA/IGI, fraude aux numéros d'inscription) ; sur mesure avec modèle CAO 3D. Le plus proche de JR Diamond par la technique et le ton ; 100 % synthétique. |
| 2 | MM Fine Jewelry and Gems | Long Island (sur rendez-vous, Long Island et Manhattan) | https://www.mmjewelrygems.com/ (ancien domaine mm-fine.com, redirigé) | https://www.mmjewelrygems.com/design-a-ring | oui (monture, puis pierre, prix au fil des choix ; images, pas de 3D vue) | non (`Allow: /`) | [V] Naturel ou synthétique ; 14 k, 18 k, platine ; « Prices follow the metal market and are confirmed when you reserve » ; acompte par Square, solde à la livraison, remboursé si la bague ne peut être faite ; photo du rapport de laboratoire ; lien qui rouvre la bague ; jusqu'à 3 à 4 semaines ; 163 bagues synthétiques complètes dès 1 245 $. [sec.] Fiche de validation CAO avec cotes en mm sous 5 angles. Petite structure (créée en 2018), sans boutique ouverte au public. |
| 3 | SVS Fine Jewelry | Oceanside (Long Island) | https://www.svsfinejewelry.com/ | https://www.svsfinejewelry.com/build-your-own | oui (3 étapes : monture, diamant, finalisation ; paiement en ligne ou en boutique) | non | [V] « choose a setting, add a natural or lab grown diamond and see your price » ; commande en ligne, bague faite sur commande en 3 à 4 semaines ; montures Verragio, Gabriel & Co., A.Jaffe, Sylvie, Noam Carver ; atelier CAO/FAO « Forever Custom » où le client regarde le travail ; garantie de prix et reprise du diamant naturel (synthétique exclu) ; depuis 2003. [sec.] Plus de 195 montures. |
| 4 | Ring Concierge | Manhattan (Madison Avenue ; aussi Los Angeles et Boca Raton) | https://ringconcierge.com/ | https://ringconcierge.com/pages/the-ring-builder (liste : https://ringconcierge.com/collections/ring-builder?start-with-setting=true) | oui (monture puis pierre) | non (Crawl-delay 10, respecté) | [V] 28 montures « From » 2 200 à 4 800 $ ; platine, or 14 k jaune et rose ; 9 formes dont la marquise ; fabrication 6 à 8 semaines ; livraison assurée de nuit ; retour sous 7 jours ; garantie à vie. Marque de Manhattan devenue régionale (3 villes) [I]. |
| 5 | Greenwich St. Jewelers | Manhattan (Tribeca) | https://www.greenwichjewelers.com/ | https://www.greenwichjewelers.com/collections/design-your-ring | oui (monture, métal et titre, puis diamant) | non | [V] Une trentaine de montures maison « G.St Ceremony » chiffrées « From » 2 100 à 7 000 $ ; diamant choisi par carat, couleur, pureté, taille ; bagues complètes naturelles et synthétiques chiffrées sur la page des bagues de fiançailles [sec.]. [sec.] Maison familiale depuis 1976, 93 Reade St. |
| 6 | Page Sargisson | Brooklyn (Boerum Hill) et Manhattan (Upper East Side) | https://www.pagesargisson.com/ | https://www.pagesargisson.com/collections/custom-engagement-rings | oui (outil en ligne : 9 montures signature + pierre naturelle ou synthétique, prix comparés) | non | [V] Montures dès 3 500 $ ; or 18 k jaune ou rose, platine ; cire sculptée à la main, fabrication de bout en bout à New York ; 6 à 8 semaines ; transformation de pierres de famille (« Heirloom Stone ») ; une mise à taille offerte. |
| 7 | AJ's Jewelers | Ridgewood (Queens) | https://www.ajsjewelers.com/ | https://www.ajsjewelers.com/pages/custom-engagement-rings | oui (3D JewelerOS) | non (Shopify) | [V] 3D JewelerOS, pierre choisie en boutique (GIA naturel ou synthétique) ; « all custom jewelry is made on-premises with no middleman » ; boutique en ligne avec retrait en magasin ; depuis 1988. |
| 8 | Brian Michaels Jewelers | Tonawanda (Buffalo) | https://www.brianmichaelsjewelers.com/ | https://www.brianmichaelsjewelers.com/page/custom-engagement-rings.html | oui (3D JewelerOS) | non | [V] 3D JewelerOS ; FAQ du parcours (exploration sans compte, nom et téléphone pour enregistrer, rendez-vous en boutique ou en visio) ; « Ready In 2-4 Weeks » ; synthétique proposé ; plus de 30 ans. |
| 9 | Truman Fine Jewelry | Albany | https://www.trumanjewelers.com/ | https://www.trumanjewelers.com/custom-engagement-rings | oui (3D JewelerOS) | non (Squarespace ; `ClaudeBot` dans le même groupe que `*`, mêmes règles) | [V] 3D JewelerOS ; maître joaillier à l'établi depuis 48 ans, sur mesure et réparations ; affaire familiale. Peu de prix en ligne [I]. |
| 10 | NYC Diamond District | Manhattan (47e Rue ; aussi Texas et Los Angeles) | https://nycdiamonddistrict.com/ | https://nycdiamonddistrict.com/collections/engagement-rings | non (la page « Ring Builder » est un questionnaire envoyé à l'équipe) | non | [V] Montures synthétiques chiffrées (« Amelia 2ct Oval » 699 $), panier, expédition sous 1 à 2 jours ouvrés, mise à taille gratuite 90 jours ; « Every ring is made in NYC » ; or 14 k ; 37 W 47th St, 4e étage. Repère de prix d'entrée de gamme du quartier des diamantaires. |

## Fiches

### 1. Haejin Jewelry (Brooklyn)

- [V] 123 Skillman Ave, Brooklyn, NY 11211 ; « Start by choosing a setting, then select the lab-grown diamond » ; montures en 10, 14 et 18 k trois couleurs et platine ; « made to
  order from Brooklyn ». Source : https://haejinjewelry.com/pages/ring-builder
- [V] Outil intégré par iframe ; son code (https://ring-builder-deploy-git-hub-ty64.vercel.app/assets/index-BRsdGoCz.js) contient `WebGLRenderer`, `GLTFLoader`, « Step 1 of
  3 », « Choose Your Center Stone », « Side Stones subtotal », `price_cents`. [I] Configurateur 3D temps réel développé pour la marque, non actionné.
- [V] « Choose a setting, pick your diamond, see the price instantly » ; « Settings start at $600. Lab-grown diamonds start at $400 » ; « 2.5 to 3 weeks » ; 14 et 18 k trois
  couleurs et platine, or recyclé ; « We work exclusively with lab-grown diamonds ». Source : https://haejinjewelry.com/collections/engagement-rings
- [V] Page « Radical Transparency » : rôle du GIA et de l'IGI, fraude par réinscription d'un numéro de rapport sur une autre pierre, conseil de vérifier la pierre et pas
  seulement le numéro. Source : https://haejinjewelry.com/pages/behind-the-certificate-what-we-believe
- [sec.] Sur mesure dès 1 450 $ pierre comprise, acompte de 50 %, modèle CAO 3D avec révisions illimitées, retours 60 jours (extraits de
  https://haejinjewelry.com/pages/custom-engagement-rings-nyc et https://haejinjewelry.com/engagement-rings-nyc).

### 2. MM Fine Jewelry and Gems (Long Island)

- [V] « Choose a setting, pair it with a certified diamond or a colored gemstone, and see the price as you go » ; 14 k, 18 k ou platine, « made mostly in New York » ; « Prices
  follow the metal market and are confirmed when you reserve » ; réservation par acompte (Square), solde à la livraison, « We re-check the stone's availability and the day's
  metal market and confirm everything in writing with a photo of the lab report » ; 163 bagues synthétiques complètes dès 1 245 $ ; sertissage d'une pierre apportée par le
  client. Source : https://www.mmjewelrygems.com/design-a-ring
- [V] « Est. 2018 » ; « By appointment on Long Island and in New York City, or online » ; plus de 7 000 pierres de couleur. Source : https://www.mmjewelrygems.com/ (arrivée depuis
  https://mm-fine.com/)
- [sec.] Fiche de validation CAO (dimensions de la pierre, nombre de diamants, taille, mesures du corps, 5 angles), « Nothing goes into production until you say yes » ; jusqu'à
  trois semaines (extrait de https://mm-fine.com/).

### 3. SVS Fine Jewelry (Oceanside)

- [V] Parcours en 3 étapes ; « Check out online » ou finalisation en boutique ; « Builder rings typically take three to four weeks » ; garantie de prix du diamant et reprise,
  synthétique exclu ; 3323 Long Beach Road, Oceanside ; « Since 2003 ». Source : https://www.svsfinejewelry.com/build-your-own
- [V] Montures Verragio, Gabriel & Co., A.JAFFE, Sylvie, Noam Carver ; prix chargés par script, non lus. Source : https://www.svsfinejewelry.com/jewelry/engagement-rings/ring-settings
- [V] « Forever Custom » : atelier CAO/FAO ouvert où le client s'assoit à côté de l'équipe. Source : https://www.svsfinejewelry.com/pages/custom
- [I] Plateforme du site : `shopfinejewelry.com` (même famille que Jaymark).

### 4. Ring Concierge (Manhattan)

- [V] « Each engagement ring is made just for you, please allow 6-8 weeks » ; retour ou échange sous 7 jours ; expédition FedEx de nuit assurée ; garantie à vie ; boutiques New
  York (Madison Avenue), Los Angeles, Boca Raton. Source : https://ringconcierge.com/pages/the-ring-builder
- [V] 28 montures (26 en stock), prix « From » de 2 200 $ (Whisper Thin) à 4 800 $ (Pavé Cloud) ; filtres platine, or 14 k jaune, or 14 k rose ; 9 formes dont la marquise.
  Source : https://ringconcierge.com/collections/ring-builder?start-with-setting=true

### 5. Greenwich St. Jewelers (Tribeca)

- [V] « Choose one of our stunning settings in the metal color and karat of your liking, then choose your ideal center diamond by carat weight, color, clarity and cut » ; prix
  « From » de 2 100 à 7 000 $. Source : https://www.greenwichjewelers.com/collections/design-your-ring
- [sec.] Bagues complètes naturelles et synthétiques chiffrées (ex. « Ann 2.55ct Lab Oval » 7 100 $) : extrait de https://www.greenwichjewelers.com/collections/engagement-rings ;
  maison familiale depuis 1976, boutique au 93 Reade St. : https://www.insidehook.com/style-new-york/guide-best-independent-jewelers-nyc

### 6. Page Sargisson (Brooklyn, Upper East Side)

- [V] « Custom engagement rings handmade in Brooklyn » ; « Most rings start as a wax carved by Page » ; trois voies : sur mesure, pierre de famille, « Design Online » ; « Custom
  settings start at $3,500 plus the stone » ; 6 à 8 semaines ; 347 Atlantic Avenue (Brooklyn) et 1250 Madison Avenue. Source : https://www.pagesargisson.com/pages/engagement
- [V] « Choose from 18k gold, 18k rose gold or platinum » ; « Browse sizes, shapes and pricing of natural & lab grown diamonds » ; 9 montures signature (Pacific, Hoyt,
  Atlantic…). Source : https://www.pagesargisson.com/collections/custom-engagement-rings

### 7 à 9. AJ's Jewelers, Brian Michaels, Truman (JewelerOS)

- [V] AJ's : `data-org-id="9dHdYC2Giycg"`, 57-44 Myrtle Ave, Ridgewood ; fondé en 1988. Source : https://www.ajsjewelers.com/pages/custom-engagement-rings
- [V] Brian Michaels : `data-org-id="9m0JlqyyVPOJ"`, 1150 Niagara Falls Blvd, Tonawanda ; « Ready In 2-4 Weeks ». Source :
  https://www.brianmichaelsjewelers.com/page/custom-engagement-rings.html
- [V] Truman : `data-org-id="9e59tMHX1ALC"`, 71 North Pearl Street, Albany. Source : https://www.trumanjewelers.com/custom-engagement-rings

### 10. NYC Diamond District (Manhattan)

- [V] Montures en or 14 k, « Every ring is made in NYC, in New York's Diamond District », 90 jours de mise à taille gratuite, financement à 0 %. Source :
  https://nycdiamonddistrict.com/collections/engagement-rings
- [V] « Amelia 2ct Oval engagement ring setting » : 699 $, « Ready to ship within 1–2 business days », origine « Lab Grown ». Source :
  https://nycdiamonddistrict.com/products/amelia-2ct-oval-engagement-ring-setting
- [sec.] La page « Ring Builder » est un formulaire de demande (motif, pierre déjà en main ou non) : extrait de https://nycdiamonddistrict.com/pages/ring-builder (non relue).

## Vus mais non classés

- **Nekta New York** (74 W 47th St, Manhattan) : [V] page JewelerOS « Design your ring online in stunning 3D », mais le lien « Design Your Ring » mène à
  https://www.nektanewyork.com/pages/custom-ring-builder qui répond **404** ; catalogue de diamants de couleur à très haut prix (tranches jusqu'à 3 000 000 $). Sources :
  https://www.nektanewyork.com/pages/custom-engagement-rings, https://www.nektanewyork.com/
- **Jaymark Jewelers** (Cold Spring, vallée de l'Hudson) : [V] « 3D ring builder » annoncé, CAO, impression 3D et fonte en interne ; la page du constructeur est chargée par
  script (`shopfinejewelry.com`), contenu non lu. Sources : https://www.jaymarkjewelers.com/, https://www.jaymarkjewelers.com/pages/custom-ring-builder
- **Custom Made Rings** (580 Fifth Avenue, Suite 1221) : [V] « 3D CAD Ring Designer » annoncé, mais aucun outil trouvé dans le HTML ; 2 à 4 semaines après validation ; « We do
  not offer jewelry featuring lab-grown stones ». Sources : https://custom-made-rings.com/pages/design-your-engagement-ring, https://custom-made-rings.com/
- **Scherer's Jewelers** (Amherst, Buffalo ; depuis 1903) : [sec.] CAO et impression 3D avant la fonte ; pas de configurateur. **Spears & Co.** (Buffalo) : [sec.] constructeur
  « magnétique » en boutique, pas en ligne. **Origins Custom Jewelry** (Long Island) : [sec.] sur mesure, GIA dès 0,50 ct, maquette en résine. **Catbird** (Brooklyn),
  **Mati Jewelry** (New York), **Stephanie Gottlieb** (New York) : [sec.] bagues chiffrées en ligne, non lues.

## Écartés et bloqués

- **Lauren B Jewelry** (608 Fifth Avenue) : [V] https://www.laurenbjewelry.com/ répond 403 avec une page Cloudflare « Just a moment... ». **Bloqué** ; pas de nouvel essai.
  [sec.] Bagues chiffrées (ex. 6 600 $ pour une 3,37 ct synthétique), parcours « Select a Design, Select Center-Stone, Design & Creation » sur devis.
- **Mazal Diamond** : [V] https://www.mazaldiamond.com/ répond 503 « No server is available ». **Bloqué** ; pas de nouvel essai.
- **ItsHot** : [V] https://www.itshot.com/robots.txt répond 403 ; robots.txt illisible, site traité comme **bloqué**, aucune page ouverte.
- **Raz & Company** (581 5th Ave) : [V] robots.txt `User-agent: ClaudeBot` / `anthropic-ai` / `Claude-Web` : `Disallow: /`. **Bloqué** ; aucune page ouverte.
  [sec.] Même page d'accueil JewelerOS que Nekta.
- **Kira Jewels** (New York, NY 10017) : [V] vendeur aux professionnels (« Apply for access », « Jewelers trust KIRA 4,000+ ») ; robots.txt n'autorise que l'accueil et
  quelques pages (`Disallow: /`). Hors périmètre (pas de vente aux particuliers). À noter : « custom in 14 days », « Every step from approved file to finished piece stays visible to
  you », discours très proche de JR Diamond. Sources : https://www.kirajewels.one/, https://www.kirajewels.one/custom
- **Mark Broumand** : [V] adresse au 628½ South Hill Street, Los Angeles, CA 90014 ; hors territoire malgré une recherche qui le classait à New York. Source :
  https://www.markbroumand.com/

## Méthode et incidents

- Requêtes génériques uniquement (« NYC jeweler build your own engagement ring », « Rochester NY jeweler engagement ring builder », etc.), 4 appels de recherche.
- robots.txt lu pour les 22 domaines consultés avant toute page ; chemins interdits (`/cart`, `/checkout`, `/account`, filtres) non appelés ; `Crawl-delay: 10` de Ring Concierge
  et de Lauren B respecté.
- Une page par site au plus toutes les 2 secondes (requêtes parallèles seulement entre sites différents).
- Trois recherches Firecrawl refusées (crédits épuisés) avant tout résultat ; aucun effet sur les sites.

## Sources

- Recherche : Parallel Search, identifiants `search_e077d9e9d488ff1ed6b62e9e13c2bc82`, `search_ba186d2c74bac3fe9ff2d4d47f323ab2`, `search_278a411a7b056395233fae35b5f7bf9c`,
  `search_e064c0c0cb6057d1cf4e8fa21e41ee13` (25/11/2026).
- Pages lues (curl, 25/11/2026) :
  - https://haejinjewelry.com/pages/ring-builder · https://haejinjewelry.com/collections/engagement-rings · https://haejinjewelry.com/pages/behind-the-certificate-what-we-believe ·
    https://ring-builder-deploy-git-hub-ty64.vercel.app/ (et son fichier `/assets/index-BRsdGoCz.js`)
  - https://mm-fine.com/ (→ https://www.mmjewelrygems.com/) · https://www.mmjewelrygems.com/design-a-ring
  - https://www.svsfinejewelry.com/pages/custom · https://www.svsfinejewelry.com/build-your-own · https://www.svsfinejewelry.com/jewelry/engagement-rings/ring-settings
  - https://ringconcierge.com/pages/the-ring-builder · https://ringconcierge.com/collections/ring-builder?start-with-setting=true
  - https://www.greenwichjewelers.com/collections/design-your-ring
  - https://www.pagesargisson.com/pages/engagement · https://www.pagesargisson.com/collections/custom-engagement-rings
  - https://www.ajsjewelers.com/pages/custom-engagement-rings · https://www.brianmichaelsjewelers.com/page/custom-engagement-rings.html ·
    https://www.trumanjewelers.com/custom-engagement-rings
  - https://nycdiamonddistrict.com/collections/engagement-rings · https://nycdiamonddistrict.com/products/amelia-2ct-oval-engagement-ring-setting
  - https://www.nektanewyork.com/ · https://www.nektanewyork.com/pages/custom-engagement-rings · https://www.nektanewyork.com/pages/custom-ring-builder (404)
  - https://www.jaymarkjewelers.com/ · https://www.jaymarkjewelers.com/pages/custom-ring-builder
  - https://custom-made-rings.com/ · https://custom-made-rings.com/pages/design-your-engagement-ring
  - https://www.kirajewels.one/ · https://www.kirajewels.one/custom
  - https://www.markbroumand.com/ · https://www.markbroumand.com/collections/ring-builder · https://www.markbroumand.com/products/bezel-solitaire.js
  - https://www.laurenbjewelry.com/ (403 Cloudflare) · https://www.mazaldiamond.com/ (503)
- robots.txt lus : les domaines ci-dessus, plus https://www.itshot.com/robots.txt (403) et https://www.razandcompany.com/robots.txt.
