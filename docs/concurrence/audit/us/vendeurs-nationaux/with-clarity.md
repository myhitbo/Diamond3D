# Audit : With Clarity (États-Unis, vendeurs nationaux)

- **Site** : With Clarity (With Clarity Inc, New York ; boutique Shopify), https://www.withclarity.com. Page de départ : https://www.withclarity.com/collections/engagement-rings (« Start With A Setting », constructeur en 3 étapes).
- **Date** : 15/11/2026. **Appareils** : Chromium (Playwright) 1366×900, en-US, depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué**. Une seule visite : HTTP 403, titre « Just a moment... », page « Performing security verification » avec la case Cloudflare Turnstile « Verify you are human » (Ray ID a5b128d749cd4b16) [V][W2].
  - Rien coché, aucun nouvel essai, aucun contournement. robots.txt est servi normalement (200) [V][W1] ; `agents.md` et `sitemap.xml`, qu'il désigne, reçoivent le même défi au curl (403, `cf-mitigated: challenge`), un essai chacun [V][W3].
- **Ce qui a été lu** : le texte des pages restitué par les extraits du moteur de recherche Parallel (copies indexées, site non contacté) et des avis de tiers. Ces lectures décrivent le site, elles ne remplacent pas un essai. Plusieurs copies datent de novembre 2026 [I] : bandeaux « Early Black Friday » et « Order by 11/10 », « Ships by Thurs, Nov 19 », retours « through January 15, 2027 ».
- Complète la fiche With Clarity de `docs/concurrence/2026-11-15_etats-unis.md` ([V69] à [V74]), relue point par point. Écarts :
  - sur mesure : « 14 business days » en tête de page, mais « eight business days » après validation et « four to eight weeks » de bout en bout dans la FAQ de la même page [Vc][W13] ;
  - retaille et Affirm, connus par une source secondaire, sont confirmés par le site ; la retaille coûte 25 $ de port et fait perdre le droit de retour [Vc][W9][W14] ;
  - ajouts : échange de pierre réservé au naturel GIA, alignement de prix réservé au synthétique, plan de protection payant, date d'expédition sur chaque fiche [Vc][W9][W4].
- **Légende** : [V] vu dans le navigateur ou par curl ; [Vc] texte du site lu dans un extrait de recherche, non actionné (date de la copie inconnue sauf indice) ; [T] tiers (avis, presse), lu dans un extrait ; [I] inféré ; [S] supposé. Prix en dollars US.

## Parcours

Reconstitué d'après le texte des pages, sans navigation.

| Étape | Options |
|---|---|
| 0. Entrées (menu « Engagement ») [W19] | Start With A Setting ; Start With A Diamond (Lab, Natural, Colored Lab, Featured Deals) ; Preset Engagement Rings ; raccourcis par style et par forme ; Custom rings ; Home preview [Vc] |
| 1. Choose a setting : liste (page de départ) [W2] | 14 pastilles de style ; filtres Collection, Style, Shape, Metal, Price ; 5 tris ; cartes avec vidéo ou 360°, pastilles de métal et formes ; barre « Create Your Diamond Ring » 1-2-3 [Vc] |
| 1b. Fiche monture [W4] | Métal (7 à 11), forme (1 à 10), parfois poids du pavage (1/4, 1/2) ; vues 360°, vidéo, bague portée, curseur de carats, essayage virtuel ; « Choose this setting » ou « Buy setting only » ; date d'expédition ; mensualité Affirm [Vc] |
| 2. Choose a diamond : type [W4] | Fenêtre à 4 liens : Lab Diamond, Natural Diamond, Featured Deal Diamond (25% Off), Color Lab Diamond [Vc] |
| 2b. Liste des pierres [W6] | 4 onglets ; filtres forme, prix, promotion, rapport, carat, taille, couleur, pureté ; avancés : poli, symétrie, fluorescence, rapport L/l, table, profondeur ; recherche par SKU ou n° de certificat ; comparateur ; 10 tris ; tableau à 16 colonnes ; assistant IA [Vc] |
| 2c. Fiche pierre [W7] | Prix, 14 caractéristiques, n° et lien du certificat (IGI ou GIA), date d'expédition ; « Add to ring » et « Buy loose » déduits d'un gabarit voisin (« Add to Necklace », « Buy Loose ») [Vc][I] |
| 3. Complete Your Ring [W4][W19] | Taille (3 à 11, par quart), gravure offerte (15 caractères), « Complete Purchase » [Vc]. Page non lue. |
| 4. Panier `/cart` [W15] | Sous-total, « Taxes and shipping calculated at checkout », code GET50, remise ID.me, 4 moyens de paiement cités ; lu vide, dans une copie non datée [Vc]. Paiement `/checkout` : interdit par robots.txt, non visité [V][W1]. |
| Variante : bague préassortie [W5] | Qualité de la pierre (F+ VS+ ou E+ VVS+), métal (4), forme (5), poids total (4), taille, alliance assortie, gravure, plan de protection, « Add to cart » [Vc] |
| Variante : Home Preview [W8] | 2 répliques au plus : métal (White, Yellow, Rose), forme (9), carat central (3/4 à 3), taille ; « Add to bag » ; 200 $ par réplique [Vc] |
| Variante : sur mesure [W13][W9] | Envoi de photos, liens ou croquis ; devis gratuit ; rendus 3D révisés ; fabrication après accord et paiement [Vc] |

## Contrôles vérifiés

Aucun contrôle du site actionné. Les libellés viennent du texte des pages ; l'effet est celui que la page annonce. « NT » = non testé, à cause du défi Cloudflare.

| Libellé | Type | Effet annoncé (non observé) | Prix | État |
|---|---|---|---|---|
| **Page de blocage [W2]** | | | | |
| Verify you are human | case Turnstile | Vérification Cloudflare | — | Vue, non cochée (règles) [V] |
| Cloudflare ; Privacy ; Help | liens | Pages de Cloudflare | — | Vus, non suivis [V] |
| **En-tête et pied de page [W16][W19]** | | | | |
| Enable accessibility for low vision ; Open the accessibility menu | boutons | Réglages d'accessibilité | — | NT |
| USD | sélecteur ou libellé | Seule devise lue | — | NT |
| Book an Appointment ; 1.844.234.6463 | lien, téléphone | Page de rendez-vous ; appel | — | NT |
| Search ; SIGN IN / UP ; Cart | champ, liens | Recherche ; compte ; panier | — | NT ; compte non créé (règles) |
| Menu ENGAGEMENT et autres rubriques | liens | Navigation par entrée, style, forme, prix | — | NT |
| Bandeau défilant (promotion, « Over 1,000 Five Star Reviews », livraison, garantie) | carrousel | Annonces | « Up to 25% off » | NT |
| Live Chat ; « With Clarity Helpdesk… Need Help? » | lien, widget | Conversation avec le service client | — | Non ouvert (règles) |
| Visit our Showroom ; service@withclarity.com | liens | Adresse de la salle ; courriel | — | NT |
| Sign up for $100 OFF your first purchase | champ courriel | Inscription à la lettre | 100 $ dès 1 000 $ (code WELCOME) [W12] | Non rempli (règles) |
| Instagram, TikTok, Facebook, Twitter, YouTube, Pinterest ; Google reviews 4.8 ; Read our reviews | liens, widget | Réseaux sociaux ; avis Google | — | NT |
| About, Press, Reviews, Radiance Rewards, Financing, Insurance, ID.me, Extended warranty, Site map… | liens | Pages d'information | — | NT |
| **Liste des montures (page de départ) [W2]** | | | | |
| 1 Choose a setting ; 2 Choose a diamond ; 3 Complete Your Ring ; Start Over ; Change ; Remove ; Complete Purchase | barre d'étapes | Suit et modifie la sélection ; « Start Over » demande confirmation (Cancel, Okay) | — | NT |
| FILTER BY STYLE (14 pastilles) | pastilles | Filtre par style | — | NT |
| FILTERS : Collection (9), Style (14), Shape (11), Metal (8 à 11), Price (5) ; Clear all ; Show N results | cases, boutons | Filtre la liste | Tranches de 0 à 100 000 $ | NT ; deux filtres dans l'adresse : interdit par robots.txt [W1] |
| SORT BY : Best Selling ; Price Low to High ; Price High to Low ; Date New to Old ; Date Old to New | liste | Trie | — | NT ; `sort_by` interdit par robots.txt [W1] |
| Carte produit : vidéo ou 360°, pastilles 14K ×3, 18K ×3, PT, liste SHAPE | vignettes | Change l'image de la carte [I] | Prix soldé et prix barré | NT |
| Pagination (1, 2, 3 … 14, Next), lue sur la liste des bagues préassorties [W5] | liens | Pages suivantes | — | NT |
| **Fiche monture [W4]** | | | | |
| 360 icon ; video play button ; Model Wearing ; vues numérotées | galerie | 360°, vidéo, bague portée, photos | — | NT |
| Engagement ring carat slider (0.00 à 8.00, 24 crans) | curseur | Bague sur une main selon le carat [I] | Aucun [I] | NT |
| Virtual try on | vignette | Essayage sur une photo de sa main ou sur 4 mains modèles [T][W25] | — | NT |
| Metal Color : 14KT White, Yellow, Rose Gold ; 18KT White, Yellow, Rose Gold ; Platinum ; 4 bicolores or et platine sur certains modèles | pastilles | Change la variante | 558 $ en 14 k, 828 $ en 18 k, 963 $ en platine sur un solitaire [T][W21] | NT |
| Shape (1 à 10 selon le modèle) ; Setting Carat Weight : 1/4, 1/2 (certains modèles) | pastilles | Change la variante et l'image [I] ; poids des pierres de la monture | Non relevé | NT |
| Choose this setting | bouton | Ouvre le choix du type de pierre | — | NT |
| Lab Diamond ; Natural Diamond ; FEATURED DEAL DIAMOND (25% Off) ; COLOR LAB DIAMOND | liens | Ouvre la liste de pierres | Prix libellé « (Setting Only) » ou « (Lab Diamond Setting Price) » | NT |
| BUY SETTING ONLY (Center stone not included) | bouton | Fenêtre : SIZE, ADD ENGRAVING, Type (Lab, Natural), Shape, Carat Weight, Dimensions (mm) | Prix de la monture | NT |
| SIZE / SELECT RING SIZE (3 à 11 par quart) ; Ring Size Guide | liste, lien | Taille obligatoire (« Please select ring size ») ; guide `/pages/ring-sizing` | Aucun [I] | NT |
| ADD ENGRAVING ; PERSONALIZE WITH AN ENGRAVING | champ | 15 caractères, lettres et chiffres | Offerte ; 25 $ pour regraver après retaille [W9] | Non rempli |
| Ships by … ; Ready-to-ship ; GET IT IN TIME FOR CHRISTMAS | texte | Date d'expédition calculée | — | Lu : « Ships by Thurs, Nov 19 » [Vc] |
| Track in real time before it ships | texte ou lien | Suivi avant expédition ; mécanisme non lu | — | NT |
| VIEW IN OUR NYC SHOWROOM ; VIRTUAL / SHOWROOM APPOINTMENT ; SCHEDULE APPOINTMENT ; BOOK IN-PERSON APPOINTMENT | liens | Page de rendez-vous | — | NT |
| 0% APR or as low as $49 /mo with Affirm ; See if you qualify | lien | Fenêtre Affirm | Mensualité affichée | NT |
| DROP A HINT | bouton | Suggestion envoyée à un proche [I] | — | NT (formulaire) |
| Add to Wishlist ; Contact us ; SHARE : Facebook, Pinterest, courriel | bouton, liens | Liste de souhaits ; page de contact ; partage | — | NT |
| Still thinking? Try this ring at home. | lien | Version Home Preview du modèle | 200 $ | NT |
| ADD CLARITY COMMITMENT PROTECTION PLAN (3 durées) ; SEE PLAN DETAILS | options | Ajoute le plan payant | 239, 269 ou 439 $ sur une bague à 3 350 $ [W5] | NT |
| PRODUCT DETAILS ; Side Stone Details ; Shipping & Returns | accordéons | Cotes, serti, qualité des pierres latérales | — | Texte lu [Vc] |
| Welcome to Build Your Own : Go Back ; Continue | fenêtre | Présente le constructeur | « Up to 25% Off » | NT |
| **Bague préassortie [W5]** | | | | |
| Diamond Quality : F+ VS+ ; E+ VVS+ ; Explore More Diamonds | pastilles, lien | Qualité de la pierre centrale ; renvoi vers les pierres | Non relevé | NT |
| Total Carat Weight : 2 1/4 ; 3 1/4 ; 4 1/4 ; 5 1/4 ; Metal (14 k ×3, PT) ; Shape (5) | pastilles | Variante | Non relevé | NT |
| BUY MATCHING WEDDING BAND (7 métaux) | case | Ajoute l'alliance assortie | 1 270 $ | NT |
| Add to cart | bouton | Ajout au panier | 3 350 $ | NT ; `/cart/` interdit par robots.txt [W1] |
| **Liste et fiche des pierres [W6][W7]** | | | | |
| Lab Diamonds ; Natural diamonds ; Color diamonds ; Clarity Plus diamonds | onglets | Change de catalogue | — | NT |
| By shape (11) ; By price ; By featured deals ; By report (GIA, IGI, GCAL) ; By carat ; By cut ; By color ; By clarity | filtres | Filtre le tableau | Bornes de prix libres | NT |
| Show advanced : polish, symmetry, fluorescence, l/w ratio, table, depth ; Reset filters ; Apply filters | filtres, boutons | Filtres avancés | — | NT |
| Search by SKU ; Search by Certificate Number ; Compare (0) ; case COMPARE par ligne | champs, bouton, cases | Retrouve une pierre précise ; comparateur | — | NT |
| ALL DIAMONDS ; Featured Deal Diamonds ; Clarity Plus™ Diamonds ; Filter by Report (IGI, GIA) | onglets | Sous-ensembles | 25 % (synthétique) ou 15 % (naturel) de remise | NT |
| Sort By (10 choix : prix, carat, couleur, pureté, taille, dans les deux sens) | liste | Trie | — | NT |
| VIEW ; SELECT | boutons de ligne | Ouvre ou choisit la pierre | Prix et « Total price » par ligne | NT |
| Chat with an AI Diamond Expert | bouton | Assistant IA | — | Non ouvert (règles) |
| Cert_url (igi.org/verify-your-report, gia.edu/report-check) | lien | Vérification du rapport chez le laboratoire | — | NT |
| **Home Preview [W8]** | | | | |
| Metal Color : White ; Yellow ; Rose ; Shape (9) ; CENTER CARAT SIZE : 3/4, 1, 1 1/2, 2, 2 1/2, 3 ; SELECT RING SIZE | pastilles, liste | Définit la réplique | Aucun : 200 $ fixes | NT |
| Add to bag | bouton | Ajoute la réplique | 200 $ « Redeemable Deposit » | NT |
| **Sur mesure, contact, rendez-vous, suivi, panier [W13][W16][W15]** | | | | |
| Demande sur mesure (photos, liens, croquis) | formulaire | Devis gratuit sous un jour | Sans acompte | Non rempli (règles) |
| Contact : Name, Email, Phone Number, Topic (5 choix), Ask a Question | formulaire | Question au service client | — | Non rempli (règles) |
| Track order (courriel et n° de commande) | formulaire | État de la commande | — | Non rempli (règles) |
| SHOWROOM APPOINTMENT ; VIRTUAL APPOINTMENT ; Chat With Us ; Call (844) 234-6463 ; Email | boutons, liens | Prise de rendez-vous ; chat, appel, courriel | — | Non ouverts (règles) |
| Panier : Continue shopping ; code GET50 ; Verify with ID.me ; paiement | liens, bouton | Poursuite ; remise ; `/checkout` | 50 $ dès 1 000 $ ; 150 $ dès 2 000 $ (ID.me) [W9] | NT ; `/checkout` interdit [W1] |

## Options disponibles

- **Métaux** : or 14 k et 18 k (blanc, jaune, rose) et platine, soit 7 ; sur certains modèles, 4 bicolores (or jaune ou rose 14 k ou 18 k avec platine) [Vc][W4]. Bagues préassorties : 14 k et platine seulement [Vc][W5].
  - Le filtre de la liste cite aussi White & Yellow Gold, White & Rose Gold, Yellow & White Gold, White & Black Gold, Yellow & Black Gold [Vc][W2].
- **Formes de monture (11)** : Round, Radiant, Cushion, Emerald, Oval, Pear, Marquise, Princess, Heart, Asscher, Elongated Cushion [Vc][W2]. Bagues préassorties : aussi Antique Cushion, Moval, Oval Stepcut [Vc][W5].
- **Styles (14)** : Hidden Halo, Solitaire, Luxe, Pave, Side Stone, Three Stone, Vintage, Halo, W Signature, Bouquet, The Reserve, Color Accents, Artisan, East West [Vc][W2].
- **Collections (9)** : W Signature, Cassatt, Fulton, Chrysler, Seraphine, Windsor, Roosevelt, Artisan, Bouquet. **Tranches de prix** : 0–500, 500–1 000, 1 000–2 000, 2 000–3 000, 3 000–100 000 $ [Vc][W2].
- **Corps, griffes, pavage** : fixés par le modèle (« Band Setting U Cut Pave », « Claw Four Prong ») ; aucun réglage lu, sauf le poids du pavage sur certains modèles [Vc][W4][I].
- **Tailles** : 3 à 11 par quart (33 valeurs) ; tailles intermédiaires sur demande [Vc][W4][W9]. **Gravure** : 15 caractères ; certaines alliances « éternité » exclues [Vc][W9].
- **Curseur de carats** : 0 à 4 ct par 0,25, puis 4,5 à 7 par 0,5, puis 8 [Vc][W4].
- **Pierres** [Vc][W6] :
  - origine : Lab, Natural, Color Lab (jaune, rose, bleu, brun, orange, vert ; intensité Intense ou Vivid) ;
  - formes (11) : Round, Princess, Radiant, Pear, Cushion, Elongated Cushion, Asscher, Emerald, Marquise, Oval, Heart ;
  - rapport : GIA, IGI, GCAL ; taille : Good, Very Good, Excellent, Ideal ;
  - couleur : D à H en synthétique, D à L en naturel, avec les groupes « Colorless », « Near Colorless », « Faint Yellow » ;
  - pureté : VS2 à FL en synthétique, I1 à FL en naturel, avec des libellés profanes (« Inclusion Visible By The Naked Eye ») ;
  - poli et symétrie : Fair à Excellent ; fluorescence : None, Faint, Medium, Strong ; bornes libres pour prix, carat, L/l, table, profondeur.
- **Stock annoncé** : « nearly 200,000 » pierres [Vc][W19]. Compteurs lus : 52 869 naturels ; 222 224 synthétiques (copie d'été) ; 17 254 de couleur [Vc][W6].
- **Home Preview** : 3 teintes, 9 formes, 6 poids, 33 tailles ; pierre « Cubic Zirconia » [Vc][W8].

## Prix, délais, retours, garanties

- **Affichage** : dollars US ; monture et pierre séparées. La monture porte « (Setting Only) » ou « (Lab Diamond Setting Price) » : ses petites pierres suivent l'origine de la pierre centrale [Vc][W4].
  - Montures lues : 558 $ (barré 620) à 4 110 $ [Vc][W2]. Bague préassortie 2 ct IGI F+ VS+ : 3 350 $ [Vc][W5]. Synthétique 1,67 ct F VS1 : 847 $ (barré 1 129) ; naturel 0,73 ct K VVS1 GIA : 908 $ [Vc][W7][W6].
- **Aucune décomposition** du prix (métal, façon, marge) dans les textes lus [I]. Le site dit être « 30% less expensive » qu'en magasin [Vc][W19].
- **Promotions** : un bandeau de soldes dans chaque copie lue (Summer, Fall, Early Black Friday) ; prix barrés ; codes WELCOME et GET50 ; remise ID.me ; clous d'oreilles offerts dès 1 000 $ ; points de fidélité (20 points = 1 $) [Vc][W12][W15][W16][W18].
- **Taxes** : taxe de vente selon l'État, calculée au paiement. Royaume-Uni et Canada : TVA et droits réclamés par FedEx après l'expédition [Vc][W10].
- **Livraison** : gratuite et assurée (États-Unis, Canada, Royaume-Uni), FedEx 2 jours avec signature ; lendemain : 40 $ ; pas de boîte postale [Vc][W10].
- **Délai** : date « Ships by … » sur chaque fiche [Vc][W4]. Bagues finies : jusqu'à 12 jours ouvrés. Pierres seules : 5–7 jours ouvrés (politique d'expédition) ou 11 (page des politiques) [Vc][W10][W9].
  - Sur mesure : 14 ou 8 jours ouvrés après accord, 4 à 8 semaines en tout [Vc][W13]. Répliques : jusqu'à 14 jours ouvrés [Vc][W8]. Urgence : par téléphone [Vc][W10]. Un testeur a reçu sa bague en 11 jours [T][W22].
- **Annulation** : sous 48 h par courriel ; une par période de 6 mois [Vc][W9].
- **Retours** : 30 jours calendaires dès la réception, gratuits aux États-Unis (étiquette assurée) ; 30 $ depuis le Royaume-Uni ou le Canada, 40 $ depuis l'Australie [Vc][W9]. Fêtes 2026 : retours jusqu'au 15/01/2027 [Vc][W9].
  - Exclus : bijoux personnalisés (colliers prénom), pierres échangées, **bague envoyée en retaille, même dans les 30 jours**, « custom jewelry crafted with natural diamonds », pièce retouchée par un autre bijoutier [Vc][W9].
  - Plafonds : 3 retours, échanges ou annulations par compte ; un achat à la fois sur 30 jours ; « we discourage comparison shopping » [Vc][W9].
  - Second retour : avoir ou 20 % de frais [W9], non repris dans les 6 mois [W11], ou un seul retour par 6 mois [W12] : trois règles [Vc]. Certificat non rendu : 250 ou 300 $ [Vc][W11][W9].
- **Retaille** : une fois, gratuite sous 30 jours ; port aller 25 $ ; une semaine. Ensuite : 30 $ (14 k), 40 $ (18 k), 50 $ (platine) plus le port, pour moins d'une taille ; au-delà, refabrication sur devis [Vc][W9].
- **Garantie « Lifetime Warranty »** : nettoyage à vie et remplacement des pierres de moins de 0,10 ct. Pierre centrale, dommage, perte et vol exclus ; réparations payantes [Vc][W9].
  - Plan payant « Clarity Commitment » : 1 ou 3 ans, ou « Lifetime » (10 ans) ; réparations, 1 retaille par an, pierre centrale jusqu'à 10 000 $, sans franchise, carence de 30 jours [Vc][W17].
- **Échange de pierre** : naturel GIA seulement, crédit de 100 % vers une pierre GIA d'au moins 2 fois le prix ; synthétique exclu [Vc][W9]. **Alignement de prix** : synthétique seulement, même n° de certificat, avant l'achat [Vc][W9].
- **Certificats** : n° et lien de vérification sur chaque fiche de pierre ; « IGI certified center diamond » sur les bagues préassorties [Vc][W7][W5]. Seuil de poids non lu. Expertise pour l'assurance : 80 $, non remboursée [Vc][W9].
- **Paiement et financement** : Visa, Mastercard, American Express, Discover, PayPal ; virement (pierre réservée 24 h) ; paiement fractionné par téléphone [Vc][W14][W12][W16].
  - Affirm : 4 versements sans intérêt, ou jusqu'à 36 mois à 0–36 % [Vc][W9]. Carte With Clarity (Synchrony) : sans intérêt sur 12 mois dès 199 $, puis 34,99 % [Vc][W14]. Paiement Shopify [T][W23].

## Confiance et service

- **Libellé du synthétique** : « Lab Diamond », « Lab Grown Diamonds », « lab created » ; naturel : « Natural Diamond », « Earth-mined » ; réplique : « diamond simulant », « Cubic Zirconia » [Vc][W6][W8].
- **Langue** : anglais seul dans les textes lus [I]. **Devise** : USD seule lue [Vc][W16]. Site distinct pour l'Inde (withclarity.in) [Vc][W26].
- **Avis** : bandeau « Over 1,000 Five Star Reviews » et widget « Google reviews 4.8 » [Vc][W16].
  - Trustpilot : 4,0 sur 37 avis, profil non revendiqué, 81 % de 5 étoiles et 16 % de 1 étoile, 2 avis en 12 mois [T][W20]. Yelp : 4,1 sur 167 avis [T][W24]. BBB : A+, 7 plaintes en 3 ans [T][W24]. Google : environ 1 300 avis [T][W24][W23].
- **Preuves de fabrication** : « Made with care start to finish in NYC, all jewelry made in house » [Vc][W19]. Aucune photo ni vidéo de la bague du client en cours de fabrication dans les textes lus [I].
  - Suivi : « Track in real time before it ships » sur les fiches ; page `/pages/track-order` ; la page de contact conseille pourtant le courriel pour connaître l'état d'une commande [Vc][W4][W16].
  - Un avis d'avril 2026 rapporte qu'on lui a dit que sa commande venait « from overseas » [T][W20].
- **Essai** : Home Preview (répliques imprimées en 3D) ; essayage virtuel sur photo, empilement de bagues, 4 mains modèles, sur téléphone ou tablette [Vc][W8][T][W25].
- **Contact** : (844) 234-6463, lun.–ven. 9 h–minuit, sam.–dim. 10 h–19 h (heure de l'Est) ; courriel ; chat ; assistant IA sur les pierres [Vc][W15][W16][W6]. WhatsApp : non lu [I].
- **Rendez-vous** : vidéo avec deux caméras, ou salle de SoHo (118 Spring St, 3e étage), sur rendez-vous ; la salle ne reprend pas les retours [Vc][W16].
- **Assurance** : Jewelers Mutual [Vc][W18]. **Accessibilité** : menu dédié dans l'en-tête [Vc][W16].

## Points forts à retenir pour JR Diamond

1. **Réplique à la taille du client, dans le métal, la forme et le carat choisis**. Preuve : fiche Home Preview (3 teintes, 9 formes, 6 poids, 33 tailles) [Vc][W8]. À reprendre sans le mot « gratuit ».
2. **Date d'expédition calculée sur chaque fiche**. Preuve : « Ships by Thurs, Nov 19 » [Vc][W4]. Remplacerait « 14 jours ouvrés ».
3. **Mensualité à côté du prix**. Preuve : « as low as $49 /mo with Affirm » sous un prix de 800 $ [Vc][W4].
4. **Lien de vérification du certificat sur chaque pierre**. Preuve : `igi.org/verify-your-report/?r=…` et `gia.edu/report-check?reportno=…` dans la fiche [Vc][W7]. Utile dès 0,50 ct chez JR Diamond.
5. **Monture seule pour la pierre du client**. Preuve : « BUY SETTING ONLY », avec type, forme, carat et dimensions de la pierre à sertir [Vc][W4]. Proche de la transformation de bijoux de famille.
6. **Curseur de carats sur la main et essayage sur photo**. Preuve : vignettes « carat slider » (0 à 8 ct) et « Virtual try on » ; test de The Knot [Vc][W4][T][W25].
7. **Filtres en langage courant** à côté des grades. Preuve : « Inclusion Visible By The Naked Eye », « Near Colorless » [Vc][W6].
8. **Rendez-vous vidéo à deux caméras**. Preuve : page de rendez-vous [Vc][W16]. Cohérent avec « l'atelier en direct ».
9. **Sur mesure sans acompte**, rendus 3D révisés avant fabrication. Preuve : « No Commitment OR Upfront Cost », « We'll keep revising » [Vc][W13].
10. **Alliance assortie proposée sur la fiche**. Preuve : case « BUY MATCHING WEDDING BAND », 1 270 $ [Vc][W5].

## Défauts observés

1. **Site fermé à un navigateur ordinaire** depuis un centre de données : case Turnstile dès la première page [V][W2]. Des acheteurs derrière un VPN pourraient la voir aussi [S].
2. **« Try On Engagement Rings At Home for Free »**, mais 200 $ par réplique, rendus en carte cadeau valable un an [Vc][W8][W12]. Les fiches disent « Redeemable Deposit » : le titre contredit la fiche.
3. **« Lifetime Warranty » en bandeau**, alors que la garantie ne couvre que le nettoyage et les pierres de moins de 0,10 ct [Vc][W9].
4. **Règles contradictoires** : trois versions du second retour ; 250 ou 300 $ pour un certificat manquant ; pierres seules en 5–7 ou 11 jours ; sur mesure en 14 ou 8 jours [Vc][W9][W10][W11][W12][W13].
5. **La retaille gratuite annule le retour** [Vc][W9]. Un avis décrit 40 jours d'immobilisation, puis une pierre centrale tombée trois fois [T][W24].
6. **Sur mesure** : la page promet « Absolutely… full refund », la liste des exclusions écarte le sur-mesure en diamant naturel [Vc][W13][W9].
7. **Texte de gabarit ou périmé dans les pages lues** (affichage à l'écran non vérifié) : « Error Quantity must be 1 or more », « Earn [points_amount] », « 3 Year - $XXX », « Sale Sold out » sur chaque carte ; retours prolongés « till January 21st, 2024 » ; fautes « Radinat », « APPOINMENT » [Vc][W2][W4][W7][W8][W16].
8. **Collections internes exposées** dans `/collections` : « Engagement No Sale July'25 », « 12 shipping Days » [Vc][W27].
9. **Soldes permanents** : un prix barré et un bandeau dans chaque copie lue, d'où un prix de référence peu lisible [I].
10. **International** : TVA et droits non compris, réclamés par le transporteur ; l'Australie figure pour les retailles et les retours, pas dans les pays livrés [Vc][W10][W9].
11. **Avis négatifs** : expéditions repoussées et remboursement lent (Trustpilot, avril 2026) ; grade de pierre contesté (BBB, juillet 2026) [T][W20][W21]. Petit échantillon.
12. **Visionneuses 360° servies par des tiers** (`embed.imajize.com`, `spin-360.up.railway.app`) [Vc][W2] : dépendance extérieure pour le visuel principal [I].

## Limites de l'audit

- **Statut bloqué** : une visite, refusée. Pas de second essai ni d'affichage iPhone (changer d'identité après un blocage est exclu). Aucun contrôle actionné, aucun temps de chargement mesuré, une seule capture (page de blocage).
- **Sources indirectes** : extraits Parallel non datés. Ils contiennent du texte masqué ou de gabarit : présent dans la page ne veut pas dire visible. Prix, dates et promotions à revérifier.
- **Lecture par un service tiers non tentée** : faire charger les pages de withclarity.com par Firecrawl ou Parallel reviendrait à contourner le défi. « Lisible par Firecrawl » (fiche d'exploration) n'est pas revérifié.
- **Non lus** : étape 3, panier rempli, paiement, version mobile, effet de chaque option sur le prix et sur l'image, seuil de certificat, sélecteur de devise, remise pour virement, contenu du suivi « real time ».
- **robots.txt** interdit `/cart/` (ajout au panier), `/cart.js`, `/checkout`, `sort_by`, deux filtres combinés, `/recommendations/products` [V][W1]. Même sans blocage, ces actions n'auraient pas été automatisées.
- **Consignes pour agents dans robots.txt** : ce fichier Shopify s'adresse aux agents IA (recommander à l'utilisateur d'installer un « skill » Shop, passer par des points d'accès UCP et MCP) [V][W1]. Lu comme une donnée, non suivi ; aucune interface d'agent utilisée. Décision laissée au propriétaire.
- **Avis de tiers** (Trustpilot, Yelp, BBB, comparatifs souvent affiliés) : lus dans des extraits, chiffres à la date de l'extrait.

## Sources

Adresses sous https://www.withclarity.com sauf mention. Texte lu le 15/11/2026 dans les extraits du moteur Parallel, sauf [W1] à [W3].

- [W1] /robots.txt (curl de l'outil `robots.cjs` : 200) · [W2] /collections/engagement-rings (navigateur : 403, défi Cloudflare ; texte : extrait) · [W3] /agents.md · /sitemap.xml (curl : 403, `cf-mitigated: challenge`)
- [W4] /products/lily-diamond-engagement-ring · /products/channel-set-diamond-engagement-ring · /products/the-aeris-engagement-ring · /products/the-w-icon-engagement-ring · /products/trio-cluster-engagement-ring · /products/studded-hidden-accents-engagement-ring
- [W5] /products/preset-diamond-pave-engagement-ring · /collections/preset-lab-grown-diamond-engagement-rings
- [W6] /collections/lab-grown-diamonds · /collections/natural-diamonds · /loose-diamonds · /collections/color-diamonds · /collections/necklace-lab-diamonds
- [W7] /products/diamond-1-67-carat-round-lab-diamond-818648960 · /products/0-71-carat-round-natural-diamond · /products/necklace-diamond
- [W8] /pages/home-preview · /collections/home-preview-engagement-ring · /products/home-preview-tapered-diamond-engagement-ring
- [W9] /pages/our-policies · [W10] /policies/shipping-policy · [W11] /policies/refund-policy · [W12] /pages/terms-conditions · [W13] /pages/custom-engagement-rings
- [W14] /pages/financing · /pages/monthly-payment-option · /blogs/engagement-ring/engagement-ring-financing · [W15] /cart (copie du panier vide)
- [W16] /pages/contact-us · /pages/book-an-appointment · /pages/track-order · [W17] /pages/jewelry-protection-plan · /pages/clarity-commitment
- [W18] /pages/radiance-rewards-program · /pages/insurance · /pages/ring-sizing · /pages/clarity-plus-diamonds
- [W19] / (accueil) · /pages/about-us · /pages/fact-sheet · /pages/diamond-engagement-rings · [W27] /collections (index des collections)
- [W20] https://www.trustpilot.com/review/withclarity.com · [W21] https://www.ringreel.com/reviews/with-clarity (18/09/2026)
- [W22] https://labgrowncarats.com/with-clarity-review (mis à jour le 15/10/2026, affilié) · [W23] https://trustedjewelries.com/with-clarity-review/ (03/11/2026)
- [W24] https://www.yelp.com/biz/with-clarity-new-york-4 · https://www.bbb.org/us/ny/new-york/profile/jewelry-stores/with-clarity-inc-0121-169327/complaints · https://reviews.birdeye.com/with-clarity-166800135458186
- [W25] https://www.theknot.com/content/virtual-engagement-ring-try-on (mis à jour le 02/09/2026, affilié)
- [W26] https://withclarity.in/ · https://www.jckonline.com/editorial-article/how-i-got-here-anubh-shah/ (17/01/2024)
