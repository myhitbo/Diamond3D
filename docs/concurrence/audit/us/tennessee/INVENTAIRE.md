# Inventaire des joailliers : Tennessee

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun chat ni SMS ouvert, au plus une page toutes les 2 secondes par site (davantage quand le robots.txt fixe un `Crawl-delay`).

Repères : **[V]** vérifié (page lue, adresse donnée en fin de document), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 15/11/2026 (période de soldes du « Black Friday » sur plusieurs sites). La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : Firecrawl (lecture rendue, parfois servie par son cache de 1 à 2 jours, signalé), puis curl tel quel (sans changer d'identité) quand le crédit Firecrawl a été épuisé. Les mentions « résumé Firecrawl » désignent un résumé automatique de la page lue : chiffre à revérifier par l'auditeur.

## Constat général

- [V] Le Tennessee compte plusieurs vrais constructeurs de bague en ligne, surtout à Nashville, Knoxville et Memphis. Les parcours sont presque tous « monture, puis pierre, puis bague », avec prix de la monture affiché.
- [V] Trois joailliers (Fountain City à Knoxville, Southern Diamond à Murfreesboro, Minor à Nashville) utilisent **le même configurateur 3D en marque blanche** (JewelerOS, moteur StoneAlgo : « Step 1 of 4 », 8 styles de départ, « fully customize your design in our 3D Ring Designer »). Le parcours est : dessiner en 3D en ligne, puis choisir la pierre en boutique, puis commander. [I] La 3D est un modèle paramétrique générique, pas le fichier de fabrication de l'atelier : c'est précisément la différence que revendique JR Diamond.
- [V] Les deux acteurs les plus proches de « l'atelier en direct » sont de petits ateliers de création : **Consider the Wldflwrs** (Nashville : rendu 3D détaillé avant fabrication, fabrication dans le studio de Nashville, prix affichés, mêmes métaux que JR Diamond) et **Moonryvr** (Chattanooga : processus sur mesure entièrement chiffré en ligne, acompte, rendu sous 7 jours, lien de paiement envoyé par e-mail).
- [V] Le diamant synthétique (« lab grown ») est proposé par tous les acteurs classés ; plusieurs constructeurs ont une entrée « Start with a Lab Grown Diamond » distincte (Genesis, Green Hills).
- [V] Aucun blocage Cloudflare constaté sur les dix sites classés. Genesis Diamonds interdit les robots d'IA dans son robots.txt ; Mednikow (Memphis) redirige son catalogue vers une page de vérification anti-robot.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Consider the Wldflwrs | Nashville | https://considerthewldflwrs.com/ | https://considerthewldflwrs.com/collections/engagement-rings (« Start with a Setting ») ; pierre d'abord : https://considerthewldflwrs.com/apps/ub/diamonds | oui (monture, pierre, métal sur la fiche) | non | [V] Atelier intégré : bagues « hand-crafted in Nashville by our in-house jewelers », rendu 3D détaillé avant fabrication, sur mesure dès 4 000 $ en 6 à 8 semaines, remontage de bijoux de famille (« Heirloom Resets »). Fiche Evergreen à 1 920 $ avec 7 métaux : or 14 k et 18 k jaune, blanc, rose, et platine (l'offre de JR Diamond), expédition en 4 à 6 semaines. Naturel et synthétique. Positionnement le plus proche de JR Diamond. |
| 2 | Moonryvr | Chattanooga | https://moonryvr.com/ | https://moonryvr.com/pages/the-custom-process | non | non | [V] Prix publiés « From 5 325 $ » à 19 577 $ ; sur mesure dès 8 000 $, semi-sur-mesure +25 % (dès 6 000 $) ; acompte de 1 000 $ remboursable ; premier rendu sous 7 jours, 2 retouches offertes puis 50 $ ; facture par e-mail avec lien de paiement ; 8 semaines (sur mesure), 4 semaines (semi). Naturel, synthétique, pierres anciennes. [I] Le parcours « devis, prix confirmé, lien de paiement » recommandé par `docs/PAIEMENT.md`, déjà en production. |
| 3 | Fountain City Jewelers | Knoxville | https://fountaincityjewelers.com/ | https://fountaincityjewelers.com/design-your-ring.aspx | oui (3D, JewelerOS / StoneAlgo) | non | [V] « 3D ring designer » : style, pierre centrale (forme, taille, carat, qualité), métal ; puis choix de la pierre en boutique ; bague prête « in just a couple of weeks ». Importateur direct d'Anvers, atelier laser sur place. Devis par SMS (« Need a quote? Text us »), pas de prix dans le configurateur [I]. Ancien constructeur `RingBuilder.aspx` et recherche de diamants aussi en ligne. |
| 4 | Southern Diamond Jewelers | Murfreesboro | https://www.southerndiamondjewelers.com/ | https://www.southerndiamondjewelers.com/pages/custom-ring-builder | oui (même outil 3D JewelerOS) | non | [V] Même parcours en 3 temps : « Design your ring online in stunning 3D », « Pick out your center stone in our Murfreesboro showroom », « Finalize & order ». Annonce « detailed 3D renderings and 3D-printed models » et des pierres de famille réutilisées (avis cité). |
| 5 | Minor Jewelry | Nashville | https://www.minorjewelry.com/ | https://www.minorjewelry.com/pages/custom-ring-builder | oui (même outil 3D, StoneAlgo) | non (Crawl-delay 2) | [V] Configurateur 3D en 4 étapes ; catalogue Punchmark avec rubriques « Lab Engagement Rings », « Semi-Mounts », « Loose Lab Diamonds », marque maison « MJ Made » ; flux de diamants RDI. Maison de tradition (années 1930 selon le résumé Firecrawl). |
| 6 | Genesis Diamonds | Nashville (et Brentwood ; Louisville, KY ; Cincinnati, OH) | https://genesisdiamonds.com/ | https://genesisdiamonds.com/collections/start-with-a-setting | oui (3 étapes) | partiel : robots.txt interdit ClaudeBot, anthropic-ai, Claude-Web, GPTBot, CCBot… (« * » autorisé) | [V] « Step 1 Choose Your Setting, Step 2 Choose Your Lab Grown Diamond, Step 3 Complete Your Ring » ; entrées « Start with a Natural Diamond » et « Start with a Lab Grown Diamond » ; monture Genesis Designs à 1 295 $ (prix soldé). « 120% Lifetime Upgrade », « Best Price Guarantee », conseillers non commissionnés. Marque régionale, 4 salles. Aucun visuel 360° repéré [I]. |
| 7 | Robert Irwin Jewelers | Memphis (et Bartlett, TN ; Southaven, MS ; 2 en Arkansas) | https://www.rijewelers.com/ | https://www.rijewelers.com/pages/custom-engagement-rings (pierre : https://www.rijewelers.com/pages/diamondsearch/natural) | oui (pierre + monture en ligne) | non | [V] Choix du diamant et de la monture « online or at one of five Memphis-area locations » ; « computerized model or sketch to approve before it's made » ; 1 à 4 semaines ; retour sous 365 jours si pierre et monture achetées ensemble ; 10 k, 14 k, 18 k, platine ; bagues synthétiques à prix affiché (ovale 2 ct serti clos à 2 495 $ soldé). |
| 8 | Green Hills Diamond Brokers | Nashville | https://greenhillsdiamondbrokers.com/ | https://greenhillsdiamondbrokers.com/apps/ring-creator/rb-setting-list | oui (« Ring Creator ») | non | [V] Constructeur monture, puis pierre (listes « natural » et « labgrown »), puis bague ; filtres métal (14 k, 18 k, platine) et forme (marquise comprise) ; prix des montures affichés (halo princesse à 1 070 $, résumé Firecrawl). Bagues synthétiques prêtes à expédier ; « diamonds at broker prices ». |
| 9 | BW James Jewelers | Cleveland (région de Chattanooga) | https://bwjamesjewelers.com/ | https://bwjamesjewelers.com/pages/build-my-custom-ring | oui (3 étapes) | non | [V] « Choose a Setting, Choose a Diamond, Complete your Ring » ; montures triées par prix, dès 1 080 $ ; filtres 10 k à 18 k, 8 formes ; « Fully Custom Rings With No Design Fee's », « 10 Day Love It Guarantee On Custom Rings », livraison gratuite, échange de taille sous 90 jours. Page « lab diamond engagement rings » (bague à 3 299,99 $ selon un extrait de recherche). Maison familiale depuis 1948. |
| 10 | King Furs and Fine Jewelry | Memphis | https://www.kingfursandfinejewelry.com/ | https://www.kingfursandfinejewelry.com/design-your-own-ring/choose-your-style | oui | non (robots.txt autorise explicitement les agents d'IA) | [V] « Design your own » : style (classique, éternité, halo, solitaire, vintage), naturel ou synthétique, platine ou or jaune, blanc, rose ; montures « semi-mount » de 444 à 975 $ (résumé Firecrawl ; 444 $ aussi dans l'extrait de recherche). [I] Pas de 3D relevée. |

## Fiches

### 1. Consider the Wldflwrs (Nashville)

- [V] Studio et boutique : 1201 Villa Pl Suite 100, Nashville, TN 37212 ; du lundi au samedi, 10 h à 17 h. Source : https://considerthewldflwrs.com/pages/custom
- [V] Menu « Create » : « Start with a Setting » (`/collections/engagement-rings`), « Start with a Diamond » (`/apps/ub/diamonds`, non lue), « Fully Custom & Bespoke » (`/pages/custom`), « Heirloom Resets ». Source : https://considerthewldflwrs.com/products/evergreen-engagement-ring (lu avec curl)
- [V] Fiche Evergreen : 1 920 $ (or jaune 14 k, pierre ronde) ; métaux 14 k jaune, blanc, rose, 18 k jaune, blanc, rose, platine ; « can be set with any size or shape of center stone » ; « This item ships in 4-6 weeks ». Une variante est à 2 020 $ (prix dans le code de la page). Même source.
- [V] Sur mesure : « Before anything is made, you'll see it as a detailed 3D rendering » ; « hand finished in our Nashville studio » ; à partir de 4 000 $ ; 6 à 8 semaines ; rendez-vous à distance possibles ; « We do not set loose diamonds ». Le formulaire demande un budget par tranche (< 4 000 $ à > 100 000 $) ; il n'a pas été rempli. Source : https://considerthewldflwrs.com/pages/custom
- [V] FAQ : 4 à 6 semaines pour une bague de la collection, 6 à 8 semaines en sur mesure ; le synthétique est présenté comme « approximately 30% less expensive than earth mined » (affirmation du site). Source : https://considerthewldflwrs.com/pages/engagement-ring-faq
- [V] La collection compte 41 bagues (résumé Firecrawl). Source : https://considerthewldflwrs.com/collections/engagement-rings
- [V] Le bouton « Chat with us » ouvre Podium (lien `#podium-chat`), non ouvert.
- [I] Concurrent direct du positionnement « l'atelier en direct » : atelier visible, rendu avant fabrication, prix affichés. Il ne montre pas, sur les pages lues, de vidéo de la pierre réelle ni de suivi de fabrication.

### 2. Moonryvr (Chattanooga)

- [V] Studio au 1301 Cowart Street, Chattanooga, « strictly by appointment » ; la demande passe par un formulaire « bespoke » ou « semi-custom » (non rempli). Source : https://moonryvr.com/pages/visit
- [V] Créatrice : Katie Wright (« designer Katie Wright », extrait de recherche de https://moonryvr.com/ ; page `/pages/meet-katie` non lue).
- [V] Prix de la collection : de « From 5 325,00 USD » à 19 577,00 USD sur la page lue. Source : https://moonryvr.com/collections/engagement-rings (lu avec curl)
- [V] Processus : sur mesure dès 8 000 $, semi-sur-mesure « 25% over the made-to-order price » dès 6 000 $ ; acompte de 1 000 $ « fully refundable » (moins les frais d'envoi des pierres) ; « initial rendering … no more than 7 days » ; deux séries de retouches offertes, puis 50 $ ; paiement total avant production, facture par e-mail avec « a link to checkout from our website » ; 8 semaines (sur mesure), 4 semaines (semi), expédition 6 semaines après paiement ; « both natural and lab grown diamonds », pierres anciennes et récupérées. Source : https://moonryvr.com/pages/the-custom-process (lu avec curl)
- [I] La page la plus complète du recensement sur le prix et les délais du sur-mesure. Modèle utile pour la page « Comment ça marche » de JR Diamond.

### 3. Fountain City Jewelers (Knoxville)

- [V] 2802 Essary Dr, Knoxville, TN 37918, « Knoxville's Jeweler Since 1999 ». Source : https://fountaincityjewelers.com/design-your-ring.aspx
- [V] Configurateur « Powered by JewelerOS », moteur affiché « StoneAlgo » : « Step 1 of 4 … you'll be able to fully customize your design in our 3D Ring Designer », 8 styles (solitaire, halo, halo caché, serti clos, cathédrale, pavé, toi et moi, trois pierres). Le visuel 3D n'a pas chargé à la lecture (« We couldn't load your ring design »), faute de WebGL. Même source.
- [V] Bouton « Need a quote or have a question? Text us here » : formulaire SMS, non utilisé. Même source.
- [V] « Use our 3D ring designer to choose your setting, select your center stone by shape, cut, carat, and quality, and pick your metal » (extrait de recherche de la page d'accueil). Le menu propose aussi `RingBuilder.aspx` et une recherche de diamants `LDSearch.aspx`. Source : https://fountaincityjewelers.com/
- [V] « direct diamond importer sourcing stones straight from Antwerp » ; « on-site bench uses laser technology » ; « ready for you in just a couple of weeks ». Source : https://fountaincityjewelers.com/custom-engagement-rings.aspx (lu avec curl)
- [V] La page des diamants synthétiques répondait « Search found Zero Match for your specified Criteria! » au moment de la lecture. Source : https://fountaincityjewelers.com/labgrown-diamonds.aspx (lu avec curl)

### 4. Southern Diamond Jewelers (Murfreesboro)

- [V] 5241 Veterans Pkwy C9, Murfreesboro, TN 37128. Parcours : « Design your ring online in stunning 3D », « Pick out your center stone in our Murfreesboro, TN showroom », « Finalize & order your ring ». Annonce « detailed 3D renderings and 3D-printed models ». Source : https://www.southerndiamondjewelers.com/pages/custom-engagement-rings
- [V] La page du configurateur charge le script `jeweleros.com/static/dist/partner_config.js` : même outil que Fountain City et Minor. Source : https://www.southerndiamondjewelers.com/pages/custom-ring-builder (lu avec curl)
- [V] Prix affichés sur les bijoux (pendentifs, boucles), pas sur le configurateur. Même source que la première ligne.

### 5. Minor Jewelry (Nashville)

- [V] 2611 12th Ave S, Nashville, TN 37204. Configurateur « StoneAlgo Ring Builder » en 4 étapes, identique à Fountain City. Source : https://www.minorjewelry.com/pages/custom-ring-builder
- [V] Site Punchmark ; rubriques « Lab Engagement Rings », « 3C Engagement Rings », « Semi-Mounts », « Loose Lab Diamonds », « MJ Made » ; lien vers un flux de diamants `ops2.rdidiamonds.com/MinorJewelry`. Source : https://www.minorjewelry.com/ (copie en cache de Firecrawl du 13/11/2026)
- [V] robots.txt : `Crawl-delay: 2`.

### 6. Genesis Diamonds (Nashville, Brentwood, Louisville, Cincinnati)

- [V] robots.txt : groupe « * » avec `Allow: /` et `Content-Signal: search=yes,ai-train=no,use=reference` ; groupes `Disallow: /` pour ClaudeBot, anthropic-ai, Claude-Web, GPTBot, CCBot, Google-Extended, Amazonbot, etc. Claude-User n'est pas cité. Trois pages lues (accueil, liste des montures, une fiche), pour référence seulement. [I] À traiter comme « restreint » par l'auditeur : pas d'automatisation supplémentaire. Source : https://genesisdiamonds.com/robots.txt
- [V] « Voted the Best Jewelry Store & Best Place to Buy an Engagement Ring for 16 years » ; salles à Nashville, Brentwood, Louisville et Cincinnati ; « 120% Lifetime Upgrade », garantie à vie, « Non-Commissioned Trusted Advisors », financement Wells Fargo. Source : https://genesisdiamonds.com/ (copie en cache de Firecrawl du 14/11/2026)
- [V] Fiche « Genesis Designs Solitaire Engagement Ring » : étapes 1 à 3, « Sale price $1,295 », or bicolore 14 k, 10 formes acceptées ; bandeau « Up To 35% OFF Storewide ». Source : https://genesisdiamonds.com/products/solitaire-engagement-ring-jmtl10562 (lu avec curl)
- [V] Montures de créateurs : Tacori, Verragio, Gabriel & Co., A. Jaffe, Simon G. Source : https://genesisdiamonds.com/collections/start-with-a-setting
- [I] Siège à Nashville : le titre du site cite « Nashville, Louisville, Cincinnati » et deux salles sont dans la région de Nashville. À dédoublonner avec les recensements du Kentucky et de l'Ohio.

### 7. Robert Irwin Jewelers (Memphis)

- [V] Salles : 376 Perkins Extended, Memphis ; 5975 Stage Rd, Bartlett (TN) ; 6644 Airways Blvd, Southaven (MS) ; Little Rock et North Little Rock (AR). Prise de rendez-vous par Calendly (non ouverte). Source : https://www.rijewelers.com/pages/custom-engagement-rings
- [V] Garantie « 365-Day Meant to Be » ; mise à taille, rhodiage et nettoyage offerts à vie ; financement « as low as 0% APR » sur 12 mois ; bagues prêtes à porter livrées en deux jours. Même source.
- [V] La recherche de diamants est chargée en JavaScript : seul le titre « Search for Diamonds » a été lu. Source : https://www.rijewelers.com/pages/diamondsearch/natural
- [I] À dédoublonner avec l'Arkansas et le Mississippi.

### 8. Green Hills Diamond Brokers (Nashville)

- [V] 2120 Crestmoor Rd #3010, Nashville, TN 37215 (lien de carte). Liens vers `rb-stone-list?diamond_type=natural` et `rb-stone-list?diamond_type=labgrown`, collections prêtes à expédier naturelles et synthétiques. Source : https://greenhillsdiamondbrokers.com/
- [V] « Ring Creator » : choisir la monture, choisir le diamant, finaliser ; 14 k, 18 k, platine ; prix par monture (résumé Firecrawl). Source : https://greenhillsdiamondbrokers.com/apps/ring-creator/rb-setting-list
- [V] Page sur mesure générique (type de bijou, métal, style, gravure), sans prix ni délai. Source : https://greenhillsdiamondbrokers.com/pages/custom-jewelry-designs (lu avec curl)

### 9. BW James Jewelers (Cleveland, TN)

- [V] « family and locally owned jewelry store in Cleveland, TN », « Top rated jewelry store in Chattanooga TN and Knoxville TN areas », depuis 1948. Pages `/pages/how-it-works` et `/pages/custom-designed-rings` (non lues). Source : https://bwjamesjewelers.com/
- [V] Constructeur : 24 montures en page 1, triées par prix, de 1 080 $ (« The Bezel Set Solitaire ») à 1 490 $ ; comparatif « BW James / Other Local Jewelers / Chain Stores And Online Stores » ; PayPal accepté. Source : https://bwjamesjewelers.com/pages/build-my-custom-ring
- [V] Spécialité annexe : bagues en fût de bourbon (collections dédiées). Source : https://bwjamesjewelers.com/

### 10. King Furs and Fine Jewelry (Memphis)

- [V] 4568 Poplar Ave, Memphis, TN 38117 ; rubriques « Lab Grown Diamonds » et « Lab Grown Diamond Education ». Source : https://www.kingfursandfinejewelry.com/contact-us.html (lu avec curl)
- [V] robots.txt : section « AI crawlers — explicitly allowed » (ClaudeBot, Claude-User, GPTBot…) et un fichier `llms.txt` annoncé. Source : https://www.kingfursandfinejewelry.com/robots.txt

## Vus mais non classés

| Acteur | Ville | Adresse | Constat |
| --- | --- | --- | --- |
| Woodard's Diamonds & Design | Tullahoma | https://woodards.net/ | [V] Constructeur Caratwise (`/caratwise-ring-builder/`, script `release.caratwise.com`), recherches « Lab-Grown » et « Natural » ; prix non vérifiés (application en JavaScript). Site Thinkspace. Candidat n° 11. |
| King Jewelers | Nashville | https://kingjewelers.com/ | [V] 4121 Hillsboro Pike ; « over 110 years » ; bagues synthétiques à prix affiché (solitaire 1,30 ct or blanc 18 k à 2 695 $, halo caché 2,55 ct à 3 650 $, marquise 3,57 ct à 4 995 $) ; sur mesure en boutique seulement, sans configurateur. |
| James Gattas Jewelers | Memphis | https://www.gattasjewelers.com/ | [V] 4900 Poplar Ave ; site Punchmark : recherche de diamants avec filtre `labGrown`, bagues « in stock » et « special order », sur mesure ; prix chargés en JavaScript, non lus. Crawl-delay 2. |
| Mednikow | Memphis | https://www.mednikow.com/ | **Bloqué** [V] : le catalogue `/catalog/engagement-ring/` redirige vers `/verify.html` (vérification anti-robot, widget Cloudflare Turnstile présent) ; robots.txt en erreur 500 ; page d'accueil en `noindex, nofollow`. Maison depuis 1891, filtres de prix (« $5,000 & under »). Non contourné. |
| Rick Terry Jewelry Designs | Knoxville | https://rickterryjewelry.com/ | [V] Créateur depuis 1986, fabrication sur place, gamme « made-to-order » ; pas de vente en ligne. robots.txt `Crawl-delay: 10` ; deux requêtes (robots.txt puis accueil) sont parties à 2 s d'intervalle avant la prise en compte de ce délai, puis une seule lecture. |
| Valentina Sarai Diamonds | Nashville | https://valentinasarai.com/ | [V] Bagues naturelles et synthétiques ; la page « Design Your Engagement Ring » n'est qu'un formulaire (Paperform), non rempli. |
| Middle Tennessee Jewelry (MTJ Diamonds) | Cookeville | https://mtjdiamonds.com/ | [V] robots.txt `Crawl-delay: 60` : seules deux requêtes (robots.txt puis accueil, à 2 s d'intervalle, avant la prise en compte du délai) ; accueil WordPress sans lien de configurateur. [I] Le « Engagement Ring Builder » des vidéos Facebook semble un outil en boutique (extraits de recherche). |
| Diamond Cellar | Nashville (salle) ; siège dans l'Ohio | https://www.diamondcellar.com/ | [V] Salle au 3805 Green Hills Village Dr (extrait de recherche) ; page `/collections/engagement-rings-nashville` répond 200. Maison de l'Ohio : à traiter dans le recensement de l'Ohio. |
| StoneAlgo (annuaire) | — | https://www.stonealgo.com/local-jewelers/nashville-tn | [V, extrait de recherche] « Use StoneAlgo's custom ring designer to design a ring and share it with any of these jewelers ». [I] L'éditeur du moteur 3D vend aussi aux particuliers et redirige vers les boutiques : concurrence indirecte du configurateur de JR Diamond. |

Repérés par la recherche seulement, sites non ouverts : Gemstone Designs (Knoxville), Kimball's Jewelers, Fischer Evans, Sam Edwards Jewelers, Wright Jewelers et A&G Goldsmith (Chattanooga), Dempsey's Jewelers et Bowman Jewelers (Johnson City), Diamond Exchange (Kingsport), Stewart Gems (Winchester, Facebook), Cumberland Gold Jewelry (Cookeville, Instagram).

## Écartés

- [V] Kay, Zales, Jared (Signet), Shane Co., Helzberg : pages de boutiques de Franklin, Knoxville, Chattanooga et Johnson City vues dans les résultats ; chaînes nationales exclues par la consigne. Brilliant Earth (salle de Nashville, citée par Yelp) : vendeur national, exclu.
- [S] Grogan Jewelers : page « Custom Engagement Rings in Franklin » ; maison probablement établie en Alabama, non vérifié.
- [S] Jewelry Television (JTV), siège supposé à Knoxville : téléachat national, hors périmètre, non vérifié.
- [V] The Art of Jewels, Rare Carat : sortis d'une recherche « Nashville », mais vendeurs en ligne nationaux.

## Sources

Pages lues le 15/11/2026 (Firecrawl sauf mention « curl ») :

- Consider the Wldflwrs : https://considerthewldflwrs.com/ (cache Firecrawl du 14/11/2026) ; https://considerthewldflwrs.com/pages/custom ; https://considerthewldflwrs.com/collections/engagement-rings ; https://considerthewldflwrs.com/products/evergreen-engagement-ring (curl) ; https://considerthewldflwrs.com/pages/engagement-ring-faq (curl) ; https://considerthewldflwrs.com/robots.txt (curl)
- Moonryvr : https://moonryvr.com/ ; https://moonryvr.com/pages/visit ; https://moonryvr.com/pages/the-custom-process (curl) ; https://moonryvr.com/collections/engagement-rings (curl) ; https://moonryvr.com/robots.txt (curl)
- Fountain City Jewelers : https://fountaincityjewelers.com/design-your-ring.aspx (Firecrawl et curl) ; https://fountaincityjewelers.com/ ; https://fountaincityjewelers.com/custom-engagement-rings.aspx (curl) ; https://fountaincityjewelers.com/labgrown-diamonds.aspx (curl) ; https://fountaincityjewelers.com/robots.txt (curl)
- Southern Diamond Jewelers : https://www.southerndiamondjewelers.com/pages/custom-engagement-rings (Firecrawl et curl) ; https://www.southerndiamondjewelers.com/pages/custom-ring-builder (curl) ; https://www.southerndiamondjewelers.com/robots.txt (curl)
- Minor Jewelry : https://www.minorjewelry.com/pages/custom-ring-builder (Firecrawl et curl) ; https://www.minorjewelry.com/ (cache Firecrawl du 13/11/2026) ; https://www.minorjewelry.com/robots.txt (curl)
- Genesis Diamonds : https://genesisdiamonds.com/robots.txt (curl) ; https://genesisdiamonds.com/ (Firecrawl, cache du 14/11/2026, et curl) ; https://genesisdiamonds.com/collections/start-with-a-setting ; https://genesisdiamonds.com/products/solitaire-engagement-ring-jmtl10562 (curl)
- Robert Irwin Jewelers : https://www.rijewelers.com/pages/custom-engagement-rings (Firecrawl et curl) ; https://www.rijewelers.com/pages/diamondsearch/natural ; https://www.rijewelers.com/robots.txt (curl)
- Green Hills Diamond Brokers : https://greenhillsdiamondbrokers.com/ ; https://greenhillsdiamondbrokers.com/apps/ring-creator/rb-setting-list ; https://greenhillsdiamondbrokers.com/pages/custom-jewelry-designs (curl) ; https://greenhillsdiamondbrokers.com/robots.txt (curl)
- BW James Jewelers : https://bwjamesjewelers.com/ (Firecrawl et curl) ; https://bwjamesjewelers.com/pages/build-my-custom-ring ; https://bwjamesjewelers.com/robots.txt (curl)
- King Furs and Fine Jewelry : https://www.kingfursandfinejewelry.com/design-your-own-ring/choose-your-style (Firecrawl et curl) ; https://www.kingfursandfinejewelry.com/contact-us.html (curl) ; https://www.kingfursandfinejewelry.com/robots.txt (curl)
- Vus mais non classés : https://woodards.net/ ; https://woodards.net/caratwise-ring-builder/ (curl) ; https://woodards.net/robots.txt (curl) ; https://kingjewelers.com/ ; https://kingjewelers.com/pages/custom-jewelry-design (curl) ; https://kingjewelers.com/collections/lab-created-diamond-engagement-rings (curl) ; https://www.gattasjewelers.com/ ; https://www.gattasjewelers.com/diamonds ; https://www.gattasjewelers.com/jewelry/engagement-rings (curl) ; https://www.mednikow.com/ (Firecrawl et curl) ; https://www.mednikow.com/catalog/engagement-ring/ (curl, redirigée vers `/verify.html`) ; https://www.mednikow.com/robots.txt (curl, 500) ; https://rickterryjewelry.com/ ; https://valentinasarai.com/ ; https://valentinasarai.com/pages/design ; https://mtjdiamonds.com/ (curl, après redirection de middletennesseejewelry.com) ; https://www.diamondcellar.com/collections/engagement-rings-nashville (curl, 200) ; robots.txt de chacun de ces sites (curl)

Recherches web génériques (extraits de résultats seulement) :

- « Nashville jeweler custom engagement ring design online ring builder » ; « Knoxville jeweler engagement rings shop online custom design » ; « Memphis jeweler engagement rings online shop custom design » ; « Chattanooga jeweler engagement rings custom design online » ; « Tennessee jeweler lab grown diamond engagement rings design your own ring Franklin Murfreesboro Clarksville » ; « Johnson City Kingsport Tennessee jeweler engagement rings design your own » ; « Nashville engagement rings showroom lab grown diamonds prices online custom 3D CAD » ; « "TN" jeweler "ring builder" OR "design your own ring" … » ; « Diamond Cellar Nashville showroom opening Tennessee » ; « Moonryvr jewelry showroom location Katie ».
