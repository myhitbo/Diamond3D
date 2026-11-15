# Inventaire des joailliers : Louisiane

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site, aucun formulaire rempli ni envoyé, aucun compte créé, aucun chat ni SMS ouvert, au plus une page toutes les 2 secondes par site, et davantage quand le robots.txt fixe un `Crawl-delay` (30 s chez Aucoin Hart, 40 s chez Friend & Company, 10 s chez Anne Dale).

Repères : **[V]** vérifié (page lue, adresse donnée dans la fiche ou en fin de document), **[V, extrait]** lu dans l'extrait qu'un moteur de recherche donne de la page du site (la page elle-même n'a pas été ouverte, ou elle est bloquée), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié). Prix en dollars américains, tels qu'affichés le 15/11/2026. La colonne « Adresse » donne l'adresse du site ; l'adresse postale est dans les fiches.

Outils : recherche Parallel Search (découverte des acteurs, extraits de pages), puis curl tel quel (sans changer d'identité) pour lire les pages : 76 lectures de pages sur 23 sites, robots.txt non comptés. Le crédit Firecrawl était épuisé dès le début : aucune lecture rendue (avec exécution des scripts) n'a été possible. Conséquence : les constructeurs de bague, tous chargés par script, n'ont pas été vus en fonctionnement ; leur présence, leur fournisseur et leur page de départ sont vérifiés, leur contenu ne l'est pas.

## Constat général

- [I] **Aucun configurateur 3D propre à un joaillier** n'a été trouvé en Louisiane, parmi les sites lus. [V] Les constructeurs en ligne relevés sont tous des outils en marque blanche : Unbridaled (Embark), GemFind RingBuilder (Friend & Company), Punchmark (Allain's, Rihner's, Layne's), Stuller Showcase et ever&ever (Anne Dale, Symmetry, recherche de diamants de Dianna Rae), constructeurs d'alliances Lashbrook et AVA Couture (Cut, Rihner's).
- [V, extrait] **Stuller, le fournisseur de plusieurs de ces outils, a son siège à Lafayette** (302 Rue Louis XIV, Lafayette, LA 70508). C'est un grossiste réservé aux professionnels, donc hors recensement, mais il explique le paysage local : son logiciel CounterSketch (plus de 3 000 modèles, « real-time pricing updates as you design ») et son programme ever&ever (choix de la pierre, de la forme, de la taille et du métal) équipent les bijoutiers indépendants. [V] Dianna Rae cite CounterSketch dans son processus. [I] La 3D que montrent ces outils est un modèle de catalogue Stuller, pas le fichier de fabrication d'un atelier.
- [V] Les acteurs les plus proches de « l'atelier en direct » n'ont pas de configurateur : **Dianna Rae** (Lafayette : atelier visible derrière une vitre, rendu photoréaliste accompagné d'un devis, prototype imprimé en 3D), **Aucoin Hart** (Metairie : sept étapes de fabrication décrites, fonte sur place) et **Boudreaux's** (rendus 3D interactifs de projets récents, mais site bloqué par Cloudflare).
- [V] Le seul parcours d'achat complet en ligne est celui d'**Embark** (Lafayette) : monture à prix affiché, ajout au panier, diamant choisi à part (naturel ou synthétique), maquette envoyée avant la fabrication.
- [V] Le synthétique (« lab grown ») est proposé par presque tous les acteurs lus. Exception notable : **Aucoin Hart** affiche un discours contre le synthétique (« factory-produced laboratory-grown diamonds … significant decreases in market value »).
- [V] Prix : les montures sont presque toujours affichées « sans pierre centrale » (Embark, Aucoin Hart, Luckey's). Aucun site lu n'explique la composition du prix (métal, façon, pierre, marge). Dianna Rae promet un devis exact avec le rendu, en rendez-vous.
- [V] Délais du sur-mesure annoncés : 4 à 6 semaines (Brilliance in Diamonds, Boudreaux's), 3 à 6 semaines (Aucoin Hart). [I] Les 14 jours ouvrés de JR Diamond sont nettement plus courts.
- [V] Blocages : voir la section « Blocages constatés ». Trois sites sous plate-forme Thinkspace (Pattons, Cut, Ramsey's) renvoient leur catalogue vers une page de vérification anti-robot ; Boudreaux's, Lee Michaels et Adler's refusent la lecture automatique.

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Embark Fine Jewelry | Lafayette (et Baton Rouge, sur rendez-vous) | https://shopembark.com/ | https://shopembark.com/pages/embark-ring-builder (monture d'abord : https://shopembark.com/collections/embark-signature-engagement-styles ; diamant d'abord : https://shopembark.com/apps/ub/diamonds) | oui (monture puis pierre, ou pierre puis monture ; application Unbridaled) | non | [V] Seul parcours complet en ligne : 14 montures « Signature » de 2 155 $ à 3 550 $ (prix de la monture seule), ajout au panier, diamant naturel ou synthétique choisi à part, « made to order », maquette envoyée avant la mise en fabrication, rendez-vous à distance, refonte de bijoux de famille. Or 14 k seulement dans les filtres ; pas de 3D relevée [I]. |
| 2 | Dianna Rae Jewelry | Lafayette | https://diannaraejewelry.com/ | https://diannaraejewelry.com/our-process/ (bagues : https://diannaraejewelry.com/shop/rings/engagement-rings/) | non (recherche de diamants synthétiques intégrée) | non pour le site (robots.txt ouvert aux agents d'IA) ; la recherche de diamants est une iframe Stuller Showcase interdite aux robots | [V] Positionnement le plus proche de JR Diamond : « Designed & Made in Lafayette », vitre sur l'atelier (« Jewelry Theater »), rendu photoréaliste accompagné d'un devis exact, prototype imprimé en 3D à l'échelle contre 150 $ d'acompte déduit, sertissage à la main sur place. 48 bagues à prix affiché (2 295 $ à 14 995 $), synthétique détaillé sur les fiches. |
| 3 | Aucoin Hart Jewelers | Metairie | https://www.aucoinhart.com/ | https://www.aucoinhart.com/custom-design (catalogue : https://www.aucoinhart.com/engagement-rings) | non | non (Crawl-delay 30 s ; « ai-train=no ») | [V] Transparence de fabrication : sept étapes décrites (rendu photoréaliste « from every angle », modèle en cire sculpté ou imprimé en 3D, fonte sur place de l'or 18 k et du platine, gravure à la main, sertissage, polissage), tout « within the walls of our workshop in Metairie ». 989 bagues en ligne à prix affiché, montures sans pierre centrale. Discours ouvertement contre le synthétique : contre-exemple utile. |
| 4 | Friend & Company Fine Jewelers | La Nouvelle-Orléans | https://friendandcompany.com/ | https://friendandcompany.com/ringbuilder/settings/ | oui (GemFind RingBuilder) | non (Crawl-delay 40 s ; constructeur chargé par script) | [V] Constructeur de bague GemFind dans le menu « Bridal & Engagement », entrée « Find Your Diamond » ; 121 bagues et alliances à prix affiché, forte part d'ancien (« Antique & Estate ») ; sur mesure en 4 étapes et remontage de pierres de famille (« Reimagine something old »). |
| 5 | Allain's Jewelry | New Iberia | https://www.allainsjewelry.com/ | https://www.allainsjewelry.com/ringsettings (diamant d'abord : https://www.allainsjewelry.com/diamonds) | oui (Punchmark, 3 étapes) | non (Crawl-delay 2 s) | [V] « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring » ; filtres style, métal (or blanc, jaune, rose, platine), fourchette de prix, 8 formes dont la marquise ; recherche de diamants avec bascule « Natural / Lab-Grown » ; « Start a Custom Project », « Custom Designing Since 1961 ». Représentant du constructeur Punchmark, aussi présent chez Rihner's (Gretna) et Layne's (Gonzales). |
| 6 | Brilliance in Diamonds | Metairie | https://brillianceindiamonds.com/ | https://brillianceindiamonds.com/pages/the-custom-process (bagues prêtes : https://brillianceindiamonds.com/collections/ready-to-ship-engagement-rings) | non | non | [V] Boutique privée d'un couple, sur rendez-vous ou à distance « nationwide » : 5 étapes, validation d'un rendu CAO avant fabrication, « progress updates » pendant la fabrication, 4 à 6 semaines, envoi assuré le lendemain. Naturel, synthétique, pierres de famille. 18 bagues prêtes de 3 310 $ à 10 140 $. Modèle « petit atelier qui vend à distance ». |
| 7 | Boudreaux's Jewelers | Metairie (et Mandeville, Baton Rouge) | https://www.boudreauxsjewelers.com/ | https://www.boudreauxsjewelers.com/custom-design/ | non (rendus 3D interactifs de projets) | **oui** : Cloudflare (403 « Just a moment… ») ; robots.txt interdit ClaudeBot, anthropic-ai, Claude-Web, GPTBot, etc. | [V, extrait] « a few examples of interactive 3D renders from recent projects » sur la page du sur-mesure : c'est l'idée de JR Diamond (la 3D du vrai projet), appliquée au sur-mesure. 6 étapes, 4 à 6 semaines, clients « across the country ». 138 bagues listées, celles lues marquées « In-Store Only ». Audit automatique impossible : à voir à la main. |
| 8 | Fakier Jewelers | Houma | https://www.fakier.com/ | https://www.fakier.com/pages/cut-my-diamond (bagues : https://www.fakier.com/collections/engagement-rings) | non | non | [V] « Cut My Diamond » : le diamant est taillé pour le client (naturel ou synthétique) par un diamantaire de New York, brut trouvé en 1 à 2 jours, accord du client avant la taille, certificat GIA. Promesse « a Fakiér diamond expert, not an automated bot ». 41 bagues à prix affiché. Récit de fabrication de la pierre, proche de l'argument « Bourse du diamant ». |
| 9 | Anne Dale Jewelers | Mandeville | https://www.annedale.com/ | https://www.annedale.com/forever-ever/ | oui (Stuller Showcase en marque blanche) | partiel : l'outil est une iframe `jewelershowcase.com` dont le robots.txt interdit tout ; Crawl-delay 10 s sur le site | [V] « Browse hundreds of settings below and customize your metal, stone shape and size in real time », puis rendez-vous. « Engagement Ring Experience » d'une heure : le client tient un diamant brut. Gemmologue GIA et orfèvre sur place, depuis 1983. |
| 10 | Symmetry Jewelers & Designers | La Nouvelle-Orléans | https://symmetryjewelers.com/ | https://symmetryjewelers.com/pages/customizable-engagement-rings | oui (ever&ever de Stuller, en iframe) | partiel : l'hôte de l'outil (`symmetryjewelers.everandever.com`) répond 403 | [V] « Design the One » : outil intégré pour choisir « the perfect metal, setting, and stone », gravure comprise ; collection « Proposal Ready » et bagues anciennes. Second exemple du configurateur Stuller, non lisible automatiquement. |

## Fiches

### 1. Embark Fine Jewelry (Lafayette, Baton Rouge)

- [V] Salles : 858 Kaliste Saloom Rd Ste B, Lafayette, LA 70508 (lundi au samedi) ; 7575 Jefferson Hwy Ste H, Baton Rouge, LA 70806 (« By Appointment Only »). Source : https://shopembark.com/pages/embark-ring-builder
- [V] La page « Embark Ring Builder » répond (200), mais son contenu est chargé par script. [V, extrait] Elle annonce « Two ways to build your ring online » : « Start with a Setting », « Start with a Diamond », et « Make it Custom » (rendez-vous en salle ou à distance). Même source.
- [V] Menu « Bridal » : « Design Your Custom Ring » (`/pages/bridal-consultations`), « Choose Your Diamond » (`/apps/ub/diamonds`), « Signature Engagement Rings » (`/collections/embark-signature-engagement-styles`).
- [V] « Start with the diamond, natural or lab-grown, in the shape, carat and quality you want. Then choose your setting and metal and see it come together step by step. » ; « Every ring is made to order and can be customized to your style and budget » ; « Clear, honest pricing built around your budget » ; expertise offerte ; assurance proposée. Source : https://shopembark.com/pages/bridal-consultations
- [V] Collection « Signature » : 14 produits, de 2 155 $ (Margot) à 3 550 $ (Caroline) ; filtres : or 14 k blanc, jaune ou bicolore ; solitaire, halo caché, trois pierres, serti clos ; 9 formes dont la marquise. Source : https://shopembark.com/collections/embark-signature-engagement-styles
- [V] Fiche Caroline : 3 550 $, or jaune 14 k, 6 formes (ronde, ovale, émeraude, radiant, coussin, poire), « Choice of center stone carat weight », bouton « Add to cart ». « Every Embark engagement ring is made to order and meticulously crafted by our expert designers, cad team, and bench jewelers. Once purchased you will receive a mock-up before your ring moves into production. » ; « The listed price reflects the setting only and does not include the center diamond. » Source : https://shopembark.com/products/caroline-signature-engagement-styleembark-fine-jewelry
- [V] La page `/apps/ub/diamonds` répond (200) et charge l'application « unbridaled » ; la liste des diamants n'est pas lisible sans script. [I] Même application que chez Consider the Wldflwrs (inventaire du Tennessee, même chemin `/apps/ub/diamonds`).
- [V] Sur mesure et refonte : « Watch your design take shape through CAD renderings and resin models before we cast, set, and finish » ; refonte de bijoux de famille ; « complimentary Redesign Kit ». Le parcours commence par un « quick inquiry form », non rempli. Source : https://shopembark.com/pages/custom-redesign
- [V] Rendez-vous pris sur Vagaro (site extérieur, non ouvert) ; contact « Call/Text ». Aucun module de chat repéré dans le code de la page d'accueil (Klaviyo et Attentive seulement).
- [I] Limites : or 14 k seulement en ligne (ni 18 k ni platine dans les filtres), pas de visuel 3D ni 360° repéré, délai non affiché sur la fiche lue.

### 2. Dianna Rae Jewelry (Lafayette)

- [V] 500 Settlers Trace Blvd, Suite 1, Lafayette, LA 70508 ; du mardi au samedi. Source : https://diannaraejewelry.com/our-process/
- [V] « Custom Jewelry Designed & Made in Lafayette, Louisiana » ; « A special window even gives guests a glimpse into our workshop and manufacturing technology area. We call it “Jewelry Theater,” because the pieces we design here are also made right here. » ; « Jewelry Playground » : des modèles prototypes à essayer, « pre-loaded into our 3D design software ». Source : https://diannaraejewelry.com/
- [V] Processus en 4 temps (Inspire, Design, Craft, Complete) : logiciels Matrix et CounterSketch ; « one or more photorealistic images … Accompanying your render will be an accurate estimate of the completed project cost » ; prototype imprimé en 3D à l'échelle, avec pierres factices, contre « a $150 deposit, applied to your final purchase » ; sertissage à la main dans l'atelier ; gravure, milgrain. Source : https://diannaraejewelry.com/our-process/
- [V] 48 bagues de fiançailles à prix affiché ; répartition donnée par le filtre : 3 entre 1 000 et 3 000 $, 19 entre 3 000 et 5 000 $, 25 entre 5 000 et 10 000 $, 1 au-dessus ; de 2 295 $ à 14 995 $ sur les 24 premières. Source : https://diannaraejewelry.com/shop/rings/engagement-rings/
- [V] Fiche « Oval Trilogy » : 6 995 $, pierre centrale ovale synthétique de 2,51 ct, E, VVS2, « Only one available », « Add to Bag », « Inquire About this Piece », puis « Like This Piece, But Want Something More You? » qui renvoie au sur-mesure. Source : https://diannaraejewelry.com/product/oval-trilogy-diamond-engagement-ring/
- [V] La page « Lab-Grown Diamond Search » intègre une iframe `diannaraejewelry-frame-categoryembed.jewelershowcase.com` (Stuller Showcase). Le robots.txt de cet hôte est `Disallow: /` : non lu. Source : https://diannaraejewelry.com/lab-grown-diamond-search/
- [V] robots.txt du site : accueille nommément GPTBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot (« Allow: / »).
- [V] Le menu propose « Jewelry Restyle » (refonte), « Before / After Gallery », « Responsible Sourcing ». Le code de la page d'accueil mentionne Clientbook et WhatsApp (non ouverts).
- [I] Pas de configurateur en libre-service : la personnalisation se fait en rendez-vous. Ce que JR Diamond promet en ligne (voir le bijou avant, comprendre le prix, voir l'atelier), Dianna Rae le promet en salle.

### 3. Aucoin Hart Jewelers (Metairie)

- [V] 1525 Metairie Road, Metairie, LA 70005. robots.txt : `Crawl-delay: 30`, `Content-Signal: search=yes,ai-train=no,use=reference`. Quatre pages lues, à plus de 30 secondes d'intervalle.
- [V] Sur mesure en sept étapes : idée ; « CAD Imaging » (« photo-realistic computer renderings, we allow you to see your finished piece from every angle ») ; modèle en cire sculpté ou imprimé en 3D ; « In-House Casting » (« All precious metals are cast on-site—including 18k gold and platinum ») ; gravure à la main ; sertissage ; polissage. « We oversee every single detail of your custom jewelry request within the walls of our workshop in Metairie, Louisiana. » Source : https://www.aucoinhart.com/custom-design
- [V] Catalogue : 989 bagues de fiançailles le 15/11 ; marques Aucoin Hart, Simon G, Sylvie, Vlora ; or 14 k et 18 k, platine ; prix affichés (de 4 250 $ à 61 600 $ sur la première page). Source : https://www.aucoinhart.com/engagement-rings
- [V] « we proudly specialize in natural diamonds … Unlike factory-produced laboratory-grown diamonds, which can be manufactured indefinitely and have experienced significant decreases in market value ». Même source.
- [V, extrait] FAQ : les prix en ligne sont ceux de la monture (« semi-mounts »), sans la pierre centrale ; bague sur mesure en « three and six weeks » ; pierres de famille remontées. Même page.
- [V] Collection maison : 18 bagues « Aucoin Hart Engagement Rings ». Source : https://www.aucoinhart.com/aucoin-hart-engagement-rings
- [V] Site sous plate-forme Build.Shop ; le code de la page d'accueil charge Podium, Clientbook et TextUs (non ouverts) ; « Text us anytime ». Source : https://www.aucoinhart.com/
- [I] Pas de configurateur ni de 3D en ligne : la force est le récit d'atelier et la taille du catalogue.

### 4. Friend & Company Fine Jewelers (La Nouvelle-Orléans)

- [V, extrait] 7713 Maple Street, New Orleans, LA 70118. Source : https://friendandcompany.com/
- [V] robots.txt : `Crawl-delay: 40`. Trois pages lues.
- [V] Menu « Bridal & Engagement » : « Ring Builder » vers https://friendandcompany.com/ringbuilder/settings/ ; la page charge le RingBuilder de GemFind (bloc `ringbuilder-root`, scripts GemFind), contenu non lisible sans script. Entrée « Find Your Diamond » dans le menu.
- [V] 121 résultats en « Bridal & Engagement », prix affichés (la première page va de 1 200 $ à 3 300 $) ; rubriques « Antique Engagement Rings », « New Engagement Rings », « Eternity Bands ». Source : https://friendandcompany.com/product-category/bridal-engagement/ [V, extrait] Fourchette du filtre : 695 $ à 170 000 $.
- [V] Sur mesure : 4 étapes, « You will be involved in every step of the process from metal choice to stone choice » ; « Reimagine something old » pour les pierres de famille. Source : https://friendandcompany.com/custom-design/
- [I] Parcours GemFind habituel (monture, diamant, bague) ; ni 3D ni synthétique vérifiés.

### 5. Allain's Jewelry (New Iberia)

- [V] 221 East Main St, New Iberia, LA 70560. Site Punchmark, `Crawl-delay: 2`.
- [V] Constructeur : « 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring » ; styles solitaire, pierres latérales, trois pierres, halo, pavé, ancien, croisé ; filtres métal et « Setting Price Range » ; « Can be set with » 8 formes. La liste des montures est chargée par script. Source : https://www.allainsjewelry.com/ringsettings [V, extrait] 37 pages de montures.
- [V] Accueil : « Design Her dream ring : Start with the Diamond / Start with the Ring ». Source : https://www.allainsjewelry.com/
- [V] Recherche de diamants : bascule « Natural / Lab-Grown », filtres forme, prix, carat, taille, couleur, pureté. Source : https://www.allainsjewelry.com/diamonds?labGrown=1
- [V] « Custom Designing Since 1961 », étapes « Custom Design, Modeling, Production », bouton « Start a Project » (non actionné). Source : https://www.allainsjewelry.com/pages/custom-jewelry
- [V] Même constructeur chez **Rihner's Jewelry** (Gretna : « Start with the Ring », « Start with the Diamond », https://www.rihnersjewelers.com/ringsettings ; « Custom Band Builder » en iframe AVA Couture) et **Layne's Jewelry** (Gonzales : https://www.laynesjewelry.com/ringsettings ; « Build Your Wedding Band »). [V, extrait] Armentor Jewelers (New Iberia, Lafayette) annonce aussi « Create a Ring Online », mais son site n'a pas pu être lu (voir « Blocages »).

### 6. Brilliance in Diamonds (Metairie)

- [V] « husband-and-wife-owned custom jewelry boutique in Metairie, Louisiana », créée en 2012 ; salle privée ; « clients across the world ». Source : https://brillianceindiamonds.com/pages/about
- [V] Cinq étapes : consultation privée (en salle ou à distance) ; choix de la pierre (naturel, synthétique, pierre de couleur) ; « Collaborative Design & CAD Approval » ; « Handcrafting & Progress Updates » (« we keep you updated throughout design and production ») ; remise ou « fully insured overnight shipping ». « approximately four to six weeks after final design approval ». Source : https://brillianceindiamonds.com/pages/the-custom-process
- [V] 18 bagues prêtes à expédier, de 3 310 $ à 10 140 $. Source : https://brillianceindiamonds.com/collections/ready-to-ship-engagement-rings
- [V] Galerie de réalisations sur mesure, formulaire « Custom Creation Form » (non rempli), « Call or Text Us ». Source : https://brillianceindiamonds.com/collections/custom-engagement-rings
- [I] Pas de configurateur ; le suivi de fabrication est promis, sans photo ni vidéo d'atelier sur les pages lues.

### 7. Boudreaux's Jewelers (Metairie, Mandeville, Baton Rouge)

- [V] robots.txt : groupe « * » autorisé avec `Content-Signal: search=yes,ai-train=no,use=reference` ; `Disallow: /` pour ClaudeBot, anthropic-ai, Claude-Web, GPTBot, CCBot, Google-Extended, etc. La seule page demandée (`/custom-design/`) a répondu 403 « Just a moment… » (Cloudflare). Pas de second essai. Tout ce qui suit vient d'extraits de recherche.
- [V, extrait] « We utilize the latest cutting-edge technology in our design studio so you can see your piece come to life and give design feedback before production. Below are a few examples of interactive 3D renders from recent projects. » Six étapes : consultation, « Interactive 3D Rendering », modèle en cire, fonte, sertissage, polissage. « 4-6 weeks ». « Yes, we work with clients across the country on custom projects. » Source : https://www.boudreauxsjewelers.com/custom-design/
- [V, extrait] 138 bagues de fiançailles ; celles de l'extrait (Tacori, L'Amour Crisscut) portent « In-Store Only ». Source : https://www.boudreauxsjewelers.com/product-category/engagement-rings
- [V, extrait] Depuis 1933 ; 701 Metairie Road, Metairie ; 4550 Hwy. 22, Mandeville ; 7280 Corporate Blvd., Baton Rouge. Source : https://www.boudreauxsjewelers.com/locations
- [I] Le visualiseur 3D utilisé et la présence de prix en ligne restent à vérifier à la main.

### 8. Fakier Jewelers (Houma)

- [V, extrait] 7947 Main Street, Houma, LA 70360. Source : https://jewelersoflouisiana.org/find-a-member
- [V] « Cut My Diamond » : « you commission us to cut a diamond just for your fiancé » ; le client fixe couleur, pureté, taille et date, « including a natural or lab-grown diamond » ; le diamantaire à New York trouve le brut en « one or two days » ; accord du client, puis taille ; « certified by GIA », sauf urgence (« GIA certification takes a few weeks »). Tailles maison « Momenti di Luce » et « Daisy Cut », annoncées comme renvoyant « up to 30% more light » (affirmation du site). Trois promesses, dont « You will always speak to a Fakiér diamond expert, not an automated bot ». Source : https://www.fakier.com/pages/cut-my-diamond
- [V] Page « Daisy Cut » consacrée au synthétique. Source : https://www.fakier.com/pages/daisy-lab-grown
- [V] 41 bagues de fiançailles, filtre de prix jusqu'à 6 125 $ ; « Classic Semi Mount » à 3 025 $. Source : https://www.fakier.com/collections/engagement-rings
- [V] Menu : « Diamond Order Form » (non ouvert), « Custom Jewelry » (page vide sans script), « Lab Grown Jewelry », Gabriel & Co. Code de la page d'accueil : Podium (non ouvert). Source : https://www.fakier.com/

### 9. Anne Dale Jewelers (Mandeville)

- [V] 829 Asbury Drive, Mandeville, LA 70471 ; « GIA Certified Gemologist | Master Goldsmith On-Site | Locally Owned Since 1983 ». robots.txt : `Crawl-delay: 10`. Source : https://www.annedale.com/
- [V] « Explore styles, customize in real time, then meet with us » : « Browse hundreds of settings below and customize your metal, stone shape and size in real time. » L'outil est une iframe `annedale-frame-categoryembed.jewelershowcase.com/browse/new/bridal/engagements` ; robots.txt de cet hôte : `Disallow: /`, donc non lu. Source : https://www.annedale.com/forever-ever/
- [V] « Engagement Ring Experience » : une heure, en privé ; « You will hold a diamond in the rough » ; un témoignage cite une présentation des pierres par FaceTime à un client de Boston. Source : https://www.annedale.com/engagement-ring-experience/
- [I] L'outil sert à préparer le rendez-vous, pas à acheter ; la présence de prix dans l'iframe n'est pas vérifiée.

### 10. Symmetry Jewelers & Designers (La Nouvelle-Orléans)

- [V, extrait] 8138 Hampson Street, New Orleans, LA 70118 ; fondé en 1975 (chambre de commerce). Sources : https://jewelersoflouisiana.org/find-a-member ; https://www.neworleanschamber.org/list/member/symmetry-jewelers-designers-3327
- [V] « Design the One » : la page intègre une iframe `https://symmetryjewelers.everandever.com` (ever&ever de Stuller). Le robots.txt de cet hôte a répondu 403 : non lu, pas de second essai. Source : https://symmetryjewelers.com/pages/customizable-engagement-rings
- [V] « Make It Your Own : … you can choose the perfect metal, setting, and stone to create a one-of-a-kind ring … You can even add personal touches like engraving ». Collections « Proposal Ready » et « Vintage & Estate Rings ». Source : https://symmetryjewelers.com/pages/engagement
- [V] Boutique Shopify ; le code de la page d'accueil mentionne Podium et WhatsApp (non ouverts). Source : https://symmetryjewelers.com/

## Autres acteurs repérés (non classés)

- **Pattons Fine Jewelry** (Baton Rouge, Alexandria ; https://www.pattonsjewelry.com/) : [V] le menu a un « Engagement Ring Builder » (`/catalog/engagement-ring-builder/`), mais cette adresse renvoie vers `verify.html` (vérification anti-robot) : non lu. [V] Le « Online Ring Builder » de la page d'accueil (« Just answer a few questions … one of our jewelers will show you custom designed options ») est un questionnaire LeadConnector en iframe sur `/services/custom-ring-design/`, non rempli : un formulaire de contact, pas un configurateur. [V] « Wedding Band Ring Builder » sur `/ring-builder/` (contenu chargé par script). Fondé en 1944. [V, extrait] Page sur le synthétique.
- **Cut Fine Jewelers** (Baton Rouge ; https://cutfj.com/) : [V] accueil avec montures à prix affiché (1 553 $ à 3 181 $), recherche de diamants naturels et synthétiques, « Lashbrook Ring Builder », sur mesure en 4 étapes ; catalogue et diamants derrière `verify.html`. [V, extrait] 2 974 bagues de fiançailles.
- **Ramsey's Diamond Jewelers** (Metairie ; https://www.ramseys.com/) : [V] bagues synthétiques à prix affiché dès l'accueil (2 499 $ à 7 599 $), « Louisiana's Largest Diamond Store », sur mesure en 5 étapes avec « animated 3-D rendering » à venir voir en boutique et modèle en cire ; catalogue derrière `verify.html`.
- **Everett Jewelry** (Shreveport ; https://everettjewelry.com/) : [V] 320 bagues de créateurs (Gabriel, Tacori, Verragio, A. Jaffe, Michael M., Romance) ; page sur mesure avec galerie « CAD design → finished ring » ; naturel et synthétique ; délai non donné.
- **Luckey's Jewelers** (Houma ; https://www.luckeysjewelers.com/) : [V] 42 bagues et montures, de 1 600 $ à 7 750 $ sur la première page, synthétique présent ; rendez-vous du samedi sur Calendly ; depuis 1955.
- **Lee Michaels Fine Jewelry** (siège à Baton Rouge ; https://www.lmfj.com/) : [V] robots.txt refusé (403 CloudFront « Request blocked ») : bloqué. [V, extrait] Neuf boutiques (Louisiane, Texas, Mississippi, Nouveau-Mexique), 278 bagues de fiançailles, « natural diamond engagement rings », « Loose Diamond Program », atelier de fabrication sur mesure. Marque régionale la plus importante de l'État.
- **Wellington & Co.** (La Nouvelle-Orléans ; https://store.wcjewelry.com/) : [V] boutique Shopify ; [V, extrait] 38 bagues de fiançailles, dès 1 225 $ (prix soldé), et des pièces jusqu'à 69 500 $ en page d'accueil.
- **Porter Lyons** (La Nouvelle-Orléans ; https://porterlyons.com/collections/bridal) : [V] 48 pièces « Bridal » à prix affiché, rendez-vous sur mesure vendu comme un produit ; maison de créatrice, sans configurateur.
- **Coleman E. Adler III** (La Nouvelle-Orléans ; https://www.ceadler.com/engagement-rings) : [V] joaillier privé, « a clear explanation of what you are paying for », pas de boutique en ligne.
- **Clarkes Jewelers** (Shreveport ; https://www.clarkesjewelers.com/) : [V] robots.txt interdit ClaudeBot et consorts, `Crawl-delay: 30` : aucune page ouverte. [V, extrait] Sur mesure avec croquis, rendus 3D et copie en cire.
- **Sid Potts** (Shreveport ; https://sidpotts.com/) : [V] catalogue sans prix (produits à 0,00 $).
- **Armentor Jewelers** (New Iberia, Lafayette) : [V] site non lisible d'ici (certificat TLS qui ne correspond pas au domaine en HTTPS, 404 en HTTP). [V, extrait] « Create a Ring Online », site Punchmark.
- **Adler's** (La Nouvelle-Orléans ; adlersjewelry.com) : [V] robots.txt refusé (406, Mod Security) : bloqué.
- Écartés : **Venazia** ([V, extrait] pages « near Lafayette, LA », « near Metairie, LA », numéro en 305 ; [I] vendeur de Floride à pages locales, pas un joaillier de Louisiane) ; **2N Diamonds** ([V, extrait] « served by our Chicago office », fabrication à New York).

## Blocages constatés

| Site | Constat | Suite donnée |
| --- | --- | --- |
| boudreauxsjewelers.com | [V] 403 Cloudflare « Just a moment… » ; robots.txt interdit les robots d'IA nommés | Une seule requête, pas de second essai ; extraits de recherche seulement |
| lmfj.com | [V] 403 CloudFront dès le robots.txt | Aucune page ouverte |
| adlersjewelry.com | [V] 406 Mod Security dès le robots.txt | Aucune page ouverte |
| pattonsjewelry.com, cutfj.com, ramseys.com (Thinkspace) | [V] `/catalog/…` et `/diamonds/…` redirigent vers `verify.html` ; le robots.txt, lui, accueille nommément les agents d'IA | Pages hors catalogue lues ; catalogue marqué « non lu » |
| symmetryjewelers.everandever.com | [V] 403 dès le robots.txt | Outil non lu |
| *.jewelershowcase.com | [V] robots.txt `Disallow: /` | Outil non lu |
| clarkesjewelers.com | [V] robots.txt : `Disallow: /` pour ClaudeBot, GPTBot, etc. ; `Crawl-delay: 30` | Aucune page ouverte |
| armentorjewelers.com | [V] certificat TLS invalide pour le domaine ; 404 en HTTP | Non lu |
| aucoinhart.com, friendandcompany.com, annedale.com | [V] `Crawl-delay` de 30, 40 et 10 s | Respecté ; 3 à 4 pages par site |

## Ce qui reste à vérifier par l'auditeur

- Voir fonctionner les constructeurs avec un navigateur (ils sont chargés par script) : Embark (`/apps/ub/diamonds`), Friend & Company (GemFind), Allain's (Punchmark). Points à relever : prix mis à jour ou non, visuel 3D ou 360°, vidéo de la pierre, panier.
- Voir à la main les rendus 3D interactifs de Boudreaux's et les outils Stuller d'Anne Dale et de Symmetry (non lisibles automatiquement).
- [S] Les outils Stuller affichent probablement un prix mis à jour à chaque choix (Stuller décrit un « real-time pricing » pour CounterSketch) ; non vérifié sur les sites des bijoutiers.

## Sources

Pages lues avec curl le 15/11/2026 (code 200 sauf mention) :

- Embark : https://shopembark.com/robots.txt ; https://shopembark.com/ ; https://shopembark.com/pages/embark-ring-builder ; https://shopembark.com/collections/embark-signature-engagement-styles ; https://shopembark.com/apps/ub/diamonds ; https://shopembark.com/pages/bridal-consultations ; https://shopembark.com/products/caroline-signature-engagement-styleembark-fine-jewelry ; https://shopembark.com/pages/custom-redesign
- Dianna Rae : https://diannaraejewelry.com/robots.txt ; https://diannaraejewelry.com/ ; https://diannaraejewelry.com/shop/rings/engagement-rings/ ; https://diannaraejewelry.com/our-process/ ; https://diannaraejewelry.com/custom-design/ ; https://diannaraejewelry.com/lab-grown-diamond-search/ ; https://diannaraejewelry.com/product/oval-trilogy-diamond-engagement-ring/ ; https://diannaraejewelry-frame-categoryembed.jewelershowcase.com/robots.txt
- Aucoin Hart : https://www.aucoinhart.com/robots.txt ; https://www.aucoinhart.com/ ; https://www.aucoinhart.com/custom-design ; https://www.aucoinhart.com/aucoin-hart-engagement-rings ; https://www.aucoinhart.com/engagement-rings
- Friend & Company : https://friendandcompany.com/robots.txt ; https://friendandcompany.com/product-category/bridal-engagement/ ; https://friendandcompany.com/ringbuilder/settings/ ; https://friendandcompany.com/custom-design/
- Allain's, Rihner's, Layne's : https://www.allainsjewelry.com/robots.txt ; https://www.allainsjewelry.com/ ; https://www.allainsjewelry.com/ringsettings ; https://www.allainsjewelry.com/diamonds?labGrown=1 ; https://www.allainsjewelry.com/pages/custom-jewelry ; https://www.rihnersjewelers.com/robots.txt ; https://www.rihnersjewelers.com/ ; https://www.rihnersjewelers.com/ringsettings ; https://www.rihnersjewelers.com/ringsettings-diamonds ; https://www.rihnersjewelers.com/pages/eternity-band-builder ; https://www.laynesjewelry.com/robots.txt ; https://www.laynesjewelry.com/ ; https://www.laynesjewelry.com/ringsettings
- Brilliance in Diamonds : https://brillianceindiamonds.com/robots.txt ; https://brillianceindiamonds.com/ ; https://brillianceindiamonds.com/collections/custom-engagement-rings ; https://brillianceindiamonds.com/pages/the-custom-process ; https://brillianceindiamonds.com/collections/ready-to-ship-engagement-rings ; https://brillianceindiamonds.com/pages/about
- Boudreaux's : https://www.boudreauxsjewelers.com/robots.txt ; https://www.boudreauxsjewelers.com/custom-design/ (403)
- Fakier : https://www.fakier.com/robots.txt ; https://www.fakier.com/ ; https://www.fakier.com/pages/cut-my-diamond ; https://www.fakier.com/pages/custom-jewelry ; https://www.fakier.com/collections/engagement-rings ; https://www.fakier.com/pages/daisy-lab-grown
- Anne Dale : https://www.annedale.com/robots.txt ; https://www.annedale.com/ ; https://www.annedale.com/forever-ever/ ; https://www.annedale.com/engagement-ring-experience/
- Symmetry : https://symmetryjewelers.com/robots.txt ; https://symmetryjewelers.com/ ; https://symmetryjewelers.com/pages/customizable-engagement-rings ; https://symmetryjewelers.com/pages/engagement ; https://symmetryjewelers.everandever.com/robots.txt (403)
- Pattons, Cut, Ramsey's : https://www.pattonsjewelry.com/robots.txt ; https://www.pattonsjewelry.com/ ; https://www.pattonsjewelry.com/catalog/engagement-ring-builder/ (redirigé vers verify.html) ; https://www.pattonsjewelry.com/ring-builder/ ; https://www.pattonsjewelry.com/services/custom-ring-design/ ; https://cutfj.com/robots.txt ; https://cutfj.com/ ; https://cutfj.com/catalog/engagement-ring/ et https://cutfj.com/diamonds/lab-grown/ (redirigés vers verify.html) ; https://cutfj.com/custom-jewelry/ ; https://cutfj.com/lashbrook-ring-builder/ ; https://www.ramseys.com/robots.txt ; https://www.ramseys.com/ ; https://www.ramseys.com/catalog/engagement-ring/ (redirigé vers verify.html) ; https://www.ramseys.com/custom/process/ ; https://www.ramseys.com/custom/bridal/
- Autres : https://everettjewelry.com/robots.txt ; https://everettjewelry.com/ ; https://everettjewelry.com/pages/custom-designs ; https://everettjewelry.com/collections/engagement-rings ; https://everettjewelry.com/pages/diamonds-why-everett ; https://www.luckeysjewelers.com/ ; https://www.luckeysjewelers.com/collections/engagement-rings ; https://store.wcjewelry.com/ ; https://porterlyons.com/ ; https://porterlyons.com/collections/bridal ; https://www.ceadler.com/ ; https://www.ceadler.com/engagement-rings ; https://sidpotts.com/ ; https://sidpotts.com/pages/forever-yours ; https://paulsfinejewelry.com/ ; https://www.lmfj.com/robots.txt (403) ; https://www.clarkesjewelers.com/robots.txt ; http://armentorjewelers.com/ (404)

Extraits de recherche (Parallel Search, 15/11/2026), pages non ouvertes ou bloquées :

- https://www.boudreauxsjewelers.com/custom-design/ ; https://www.boudreauxsjewelers.com/product-category/engagement-rings ; https://www.boudreauxsjewelers.com/locations
- https://www.lmfj.com/shop-all-engagement-rings ; https://www.lmfj.com/locations ; https://www.lmfj.com/why-lee-michaels
- https://www.clarkesjewelers.com/custom-engagement-rings ; https://www.clarkesjewelers.com/shreveport-engagement-rings
- https://cutfj.com/catalog/engagement-ring ; https://www.pattonsjewelry.com/services/lab-grown-diamonds ; http://armentorjewelers.com/
- https://store.wcjewelry.com/collections/engagement-rings ; https://friendandcompany.com/ ; https://www.venazia.com/custom-rings-lafayette-la ; https://2ndiamonds.com/diamonds/new-orleans-la
- Stuller : https://www.stuller.com/contactus ; https://www.stuller.com/countersketch/ ; https://www.stuller.com/everandever ; https://www.stuller.com/about/our-history ; https://www.stuller.com/services?id=all
- Annuaires : https://jewelersoflouisiana.org/find-a-member ; https://www.meetthejewelers.com/louisiana-jewelers ; https://www.neworleanschamber.org/list/member/symmetry-jewelers-designers-3327
