# Inventaire : Victoria et Tasmanie (Australie)

Date : 15 novembre 2026. Recenseur du territoire « Victoria (avec la Tasmanie) ». Complète `docs/concurrence/2026-11-15_australie.md` (Cullen, Larsen et Temple & Grace y ont déjà une fiche).

Légende :
- **[Vn]** vérifié : page lue directement le 15/11/2026 (curl, WebFetch ou rendu Firecrawl), source n en fin de document ;
- **[En]** extrait : texte de la page renvoyé par le moteur de recherche le 15/11/2026, sans ouverture directe de la page ;
- **[I]** inféré ; **[S]** supposé.

Prix en dollars australiens (AUD), tels qu'affichés. Pour les diamants de laboratoire (« lab-grown » sur les sites), ce document dit « synthétique ».

## Méthode et blocage

- **robots.txt** : lus avant toute autre page pour les 16 domaines contactés [V0]. Les chemins interdits n'ont pas été visités. Points notables :
  - Anny's interdit `/3d/`, `/api/` et `/wishlist` ;
  - Lily Dia interdit les adresses à paramètres du configurateur (`?metal=`, `?shape=`, `?design=`, etc.). Seules les pages sans paramètre ont été lues ;
  - SkyGem interdit `/?`, `/filter` et `/*?diamond_id=`. Les fiches diamant n'ont donc pas été ouvertes ;
  - Moi Moi interdit nommément `ClaudeBot`, `Claude-Web` et `anthropic-ai`. **Aucune page de Moi Moi n'a été ouverte** : seuls des extraits de recherche sont cités.
- **Accès** : curl avec son en-tête par défaut, sans changement d'identité, puis WebFetch et le rendu Firecrawl (jusqu'à épuisement des crédits Firecrawl en cours de session). Au plus une page toutes les 2,5 s par site. Aucun formulaire rempli, aucun panier ni compte, aucune conversation ouverte.
- **Blocage** : aucun site n'a bloqué. Toutes les pages de départ ont répondu 200 [V0].
  - Cullen, Anny's, All Diamonds et les sites Shopify sont servis derrière Cloudflare, sans défi observé [V0].
  - Les sites Shopify contiennent un script `captcha-bootstrap` : il protège leurs formulaires, il ne s'agit pas d'un défi d'accès [V0].
  - Limite d'outil, pas un blocage : WebFetch échoue sur Cullen (« Header overflow »). La page a été lue par curl et par Firecrawl.

## Tableau de classement

Classement par intérêt pour JR Diamond : qualité du configurateur, transparence du prix et de la fabrication, sur mesure, synthétique [I].
Les colonnes « ville » et « adresse » donnent la commune et l'adresse du site ; les adresses postales sont dans les fiches.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Anny's Manufacturing Jewellers | Frankston (atelier), Melbourne CBD (salle) | https://www.annys.com.au/ | https://www.annys.com.au/engagement-rings | oui | aucun | Fabricant (10 personnes) ; prix décomposé « monture + diamant estimé = total » ; naturel ou synthétique ; CAO puis maquette imprimée en 3D à essayer [V2][V3][E5] |
| 2 | All Diamonds | Elsternwick et Toorak (Melbourne) | https://www.alldiamonds.com.au/ | https://www.alldiamonds.com.au/ring-builder | oui | aucun | Seul configurateur 3D temps réel du territoire, en three.js / React Three Fiber comme JR Diamond. Mais la bague est générée par le code et le prix est « sur demande » [V7][V8] |
| 3 | Lily Dia | Melbourne (studio en ligne, sans salle) | https://lilydiajewellery.com/ | https://lilydiajewellery.com/design-your-own-engagement-ring | oui | aucun | Prix « en direct », barème public des options, vidéo 360° de chaque pierre synthétique, rendus CAO [V9][V10] |
| 4 | Cullen Jewellery | Kew (siège et salle) | https://cullenjewellery.com/en-au | https://cullenjewellery.com/en-au/engagement-rings | oui | aucun (Cloudflare sans défi) | Constructeur le plus fourni (366 modèles), prix « à partir de » avec la pierre, CAO sous 5 j ouvrés ; synthétique et moissanite seulement [V13][V14][E15] |
| 5 | VAHÉ Jewellery | Rowville (atelier sur rendez-vous) | https://vahejewellery.com.au/ | https://vahejewellery.com.au/collections/start-with-a-setting | oui | aucun | Constructeur monture ou pierre d'abord, naturel, synthétique ou synthétique de couleur ; atelier ; remodelage de bijoux anciens [V16][V17] |
| 6 | Melbourne Jewellers | Werribee | https://melbourne-jewellers.com.au/ | https://melbourne-jewellers.com.au/pages/build-your-own-ring | oui | aucun | Constructeur en 3 étapes, montures à prix affichés dès 1 030 AUD, or 9, 14 ou 18 carats ; bagues synthétiques en précommande [V18][V19] |
| 7 | Moissanite Engagement Rings (Guthrie Jewellery) | Southbank (studio sur rendez-vous) | https://moissaniteengagementrings.com.au/ | https://moissaniteengagementrings.com.au/collections/design-your-engagement-ring | oui | aucun | Constructeur « priced as you go », « 3D preview » avant fabrication ; surtout de la moissanite ; fabrication confiée à un partenaire [V21][E22] |
| 8 | DG & Co. Jewellery | Melbourne CBD (Collins Street) | https://diamondgold.com.au/ | https://diamondgold.com.au/collections/build-your-engagement-ring | oui | aucun | Constructeur en 3 étapes avec prix ; diamants « en 360° HD, zoom ×40 » ; mais toutes les montures affichées « Sold Out » [V23][V24] |
| 9 | SkyGem & Co. | Melbourne CBD (Royal Arcade) | https://skygem.com.au/ | https://skygem.com.au/pages/ringbuilder-natural-white-diamonds | oui | aucun | Constructeur « diamant d'abord », naturel ou synthétique, filtres complets (GIA, IGI…) ; vidéo 3D HD en option payante [V26][V27] |
| 10 | Sargisons Jewellers | Hobart (Tasmanie) | https://sargisons.com.au/ | https://sargisons.com.au/collections/engagement-rings | non | aucun | Meilleur site tasmanien relevé : atelier depuis 1905, prix et pierre (GIA, couleur, pureté) affichés, mais achat en boutique [E28][V29][V30] |

## Fiches

**1. Anny's Manufacturing Jewellers** : 92 Young Street, Frankston VIC 3199 (atelier et salle) ; 257 Collins Street, Level 3, Melbourne VIC 3000 (salle, visite sur confirmation par e-mail) [V3].
- Constructeur : 37 modèles, filtres par style, forme et métal (or 18 et 9 carats, platine) [V2]. Fiche, puis « Select My Diamond », puis navigateur de diamants naturels ou synthétiques [V3].
- Exemple de la fiche Crystal [V3] :
  - monture 2 000 AUD, plus « Centre diamond estimate » 1 516,94 AUD, soit un total TTC de 3 516,94 AUD ;
  - mention « Final price depends on your diamond » ;
  - « Made to order · 3–4 weeks » ; gravure 95 AUD.
- Pas d'ajout au panier pour une bague configurée : liste de souhaits ou « Enquire about this ring » [V3]. Pas de 3D, de 360° ni de vidéo sur la fiche [V3].
- Fabrication :
  - « 3–4 weeks from CAD sign-off » ; diamants certifiés GIA ou IGI ; « 7-Day Diamond Return » [V1] ;
  - équipe de 10 personnes, seule la fonte est sous-traitée [E4] ;
  - CAO, puis maquette imprimée en 3D à essayer au doigt avant la fonte [E5][V3].
- Prix du diamant synthétique « en direct » sur la liste des pierres [E4] (non contrôlé sur la fiche [V3]).
- Pour JR Diamond : le modèle le plus proche de « l'atelier en direct » sur ce territoire, avec un prix décomposé en postes [I].

**2. All Diamonds** : salles d'Elsternwick et de Toorak, « depuis 1985 » [V6] ; numéros de rue non relevés ; tél. (03) 9523 6603 [E6].
- Constructeur en 3 étapes (« Band », « Diamond », « Finishing ») [V7]. Chaque choix entre dans l'adresse de la page [V7] : métal, forme de l'anneau, largeur (1,8 mm), forme et plage de carats de la pierre, origine (naturel ou synthétique), qualité, griffes, orientation, halo caché.
- **Aperçu 3D** [V8] (lecture des fichiers JavaScript publics du site) :
  - module `ProceduralRingPreview`, chargé à la demande, construit avec three.js et React Three Fiber ;
  - matériau `MeshPhysicalMaterial` avec transmission, carte d'environnement et géométrie de tore. L'anneau est donc **généré par le code** [I].
  - Sans WebGL, le rendu automatique affiche « 3D preview is unavailable on this device » [V7].
- Prix : « Price on request », puis bouton « Enquire » vers un formulaire de demande [V8]. Délai annoncé : 4 à 6 semaines [V6]. Des avis clients cités parlent de rendus 3D [V6].
- Pour JR Diamond : même technique, mais ni modèle issu du fichier de fabrication ni prix. Ce sont les deux promesses distinctives de JR Diamond [I].

**3. Lily Dia** : studio en ligne de Melbourne, sans salle ; joailliers à Melbourne et à Auckland [V9][E9b]. Aucune adresse ni ABN en pied de page [V9].
- Constructeur : 56 modèles. On choisit le métal, l'anneau, les griffes, la taille, puis la pierre (synthétique ou moissanite). Le prix se met à jour à chaque choix [V9][V10].
- Vidéo 360° et rapport de chaque diamant synthétique [V9]. Rendus CAO, modifications illimitées [V9].
- Prix publiés, vérifiés par le site le 27/10/2026 [V10] :
  - monture dès 1 260 AUD en or 14 carats ;
  - bague complète avec diamant synthétique IGI de 1 ct dès 2 950 AUD en or 18 carats (2 ct : 4 250 ; 3 ct : 6 900) ;
  - suppléments : or 14 vers 18 carats + 300 AUD, halo caché + 300 AUD.
- Paiement [V10] :
  - acompte de 50 %, ou frais de 250 AUD (non remboursables) pour passer d'abord par l'étape CAO ;
  - solde avant l'expédition ; ni Afterpay ni Zip.
- Délai : 4 à 6 semaines après validation [V9].
- Depuis notre environnement (sortie aux États-Unis), certaines pages affichent les prix en USD [E9b]. La devise suit probablement la localisation [I].
- Pour JR Diamond : le barème public des options et la vidéo de la vraie pierre sont proches de « le prix est expliqué » et de « pierre filmée » [I].

**4. Cullen Jewellery** : siège à Kew (401/232 High St, Kew VIC 3101), fondé en 2018, 51 à 200 salariés selon LinkedIn ; autres implantations à Brisbane, Sydney, Perth et Adelaide [E11][E12].
- 366 modèles sur la page de départ, par exemple « Emma … With 2ct Oval Lab-Grown Diamond, From 5,410 AUD » [V13]. Fiche Julia : 6 440 AUD, bouton « Build your Ring » ; pas de 3D relevée [V14].
- Sur mesure [E15] :
  - aucun frais de personnalisation ;
  - CAO sous 5 jours ouvrés, puis 30 jours ouvrés de fabrication ;
  - « we do not use mined diamonds ».
- Fiche détaillée dans `2026-11-15_australie.md`.

**5. VAHÉ Jewellery** : atelier sur rendez-vous, Unit 6/899 Wellington Road, Rowville VIC 3178 [E16b] ; « made to order in our Rowville workshop » [V17].
- Constructeur [V16][V17] :
  - point de départ au choix : une monture, ou un diamant naturel, synthétique ou synthétique de couleur ;
  - 7 styles, 6 métaux, 10 formes ;
  - prix de la monture « From » 2 000 à 3 950 AUD ; « Made to Order (3-5 Weeks) » ; acompte de 50 %, solde à la fin.
- Pas de 3D ni de 360° ; photos sous six angles [V17]. Le constructeur semble être une application tierce (ressources chargées depuis `ring-builder.apps.keyideasglobal.com`) [V16][I].
- Paiement fractionné : Afterpay jusqu'à 4 000 AUD, Humm jusqu'à 6 000 AUD [V16]. Remodelage de bijoux anciens [V16].

**6. Melbourne Jewellers** : 277 Heaths Rd, Office 2B, Werribee VIC [V19].
- Constructeur en 3 étapes : monture, diamant, bague complète [V19]. 8 styles ; or 9, 14 et 18 carats rose, blanc ou jaune ; formes de pierre.
- Montures à prix affichés, de 1 030 AUD (« The Bezel Set Solitaire ») à environ 1 400 AUD pour les premiers résultats [V19].
- Bagues synthétiques en précommande sur l'accueil, par exemple marquise synthétique de 3,00 ct en or jaune 18 carats à 12 950 AUD [V18]. Délai et 3D non relevés [V19].

**7. Moissanite Engagement Rings (Guthrie Jewellery)** : Level 7, 80 Dorcas Street, Southbank VIC 3006, sur rendez-vous [E20][E22].
- Constructeur [V21] :
  - pierre (moissanite ou diamant synthétique), forme et monture, métal, détails, puis « Get a 3D preview » ;
  - slogan « Design your own ring, priced as you go » ;
  - délai : « Made in 6 weeks · Express in 3 », dont 3 à 5 semaines de fabrication après validation.
- L'« aperçu 3D » est probablement un rendu CAO envoyé pour validation : la page de rendez-vous parle de « CAD renders » à approuver [E22b][I].
- Fabrication par « a manufacturing partner who produces the rings » ; réparations par des joailliers de Melbourne [E22]. Modèles en moissanite dès 800 AUD [E20].

**8. DG & Co. Jewellery** : Level 27, 101 Collins Street, Melbourne VIC 3000 [V23].
- Constructeur [V24] :
  - étapes « Select Setting », « Add Diamond », « Complete Ring » ;
  - or 18 carats blanc, jaune ou rose, et platine ;
  - prix par bague, par exemple « Regular price $2,395.00 ».
- Dans la page servie, chaque monture porte la mention « Sold Out » (48 occurrences) [V24]. C'est probablement un réglage de stock Shopify pour des pièces faites sur commande [I].
- Accueil [V23] :
  - « Spin actual diamonds in 360° HD and zoom in up to 40x » ;
  - diamants synthétiques ;
  - « 30 Day Money Back » ; politique de paiement échelonné (« Lay-by »).

**9. SkyGem & Co.** : Shop 46 Royal Arcade, Melbourne VIC 3000 [E25].
- Constructeur « diamant d'abord » en 3 étapes [V26] :
  - onglets naturel blanc, synthétique blanc, naturel de couleur, synthétique de couleur ;
  - filtres forme, pureté, taille, couleur D à L, rapport (GIA, AGS, HRD, IGI), fluorescence, table, profondeur ;
  - le prix de chaque pierre s'affiche au clic.
- Sur mesure : CAO à valider ; « upgrade to a high-definition 3D video render with an additional fee » (montant non indiqué) ; « from $1,500 inclusive of GST » [V27].
- « Since 2018, we've never held a seasonal sale and we never will » [V26b].

**10. Sargisons Jewellers** : 125 Liverpool Street, Hobart TAS 7000 ; « Est. 1905 », atelier de fabrication familial [E28][V29].
- Prix affichés, par exemple platine, solitaire rond de 1,01 ct à 8 010 AUD [V29].
- Fiche d'un solitaire de 0,50 ct [V30] :
  - pierre F SI1 avec certificat GIA, platine, 5 143 AUD ;
  - bouton panier « Unavailable », mention « available to purchase in store » ;
  - même modèle possible avec toute taille de pierre, en or 18 ou 9 carats.
- Garantie : remboursement ou échange sous 7 jours sur le stock, mise à taille gratuite pendant 2 ans, 5 ans contre les défauts de fabrication [V29]. Synthétique non relevé [V29].

## Autres candidats, non retenus

- **Monroe Yorke Diamonds** (https://www.mydiamonds.com.au/) :
  - salle à Melbourne (Level 30, Collins Place, 35 Collins Street), et aussi à Brisbane, Sydney et Perth ; numéro depuis l'étranger en +61 7 (Queensland) [E32]. Le siège est probablement hors Victoria [I] ;
  - constructeur en 3 étapes, « see your total price live », 131 bagues, naturel et synthétique, concierge IA qu'un joaillier peut rejoindre [V31] ;
  - `/pages/ring-builder` redirige vers `/collections/engagement` [V0]. À auditer avec le Queensland.
- **Larsen Jewellery**, **Temple & Grace** : salles à Melbourne, sièges à Sydney ; fiches dans `2026-11-15_australie.md`.
- **GS Diamonds** : salle à Melbourne (Royal Arcade, Shop 13, 331-339 Bourke St), siège à Sydney ; constructeur « Choose a Setting / Choose a Stone / Complete Ring » [E33].
- **Diamond Gallery** : siège à Sydney (401/64 Castlereagh St) ; magasin de Melbourne cité en pied de page [E34].
- **Janai** (1/259 Collins Street) : sur mesure sur rendez-vous, « 4000+ ring designs », croquis à la main, « from AU$3,000 » ; pas de configurateur relevé [E35].
- **Moi Moi Fine Jewellery** (Collins St) : rendus 3D ou CAO, 4 à 6 semaines [E36]. Non ouvert, à cause de son robots.txt [V0].
- **Above Ground Jewellery** : synthétique seulement, montures à prix affichés (dès 1 600 AUD), sur rendez-vous ; titre « Custom Engagement Rings Melbourne », ville non confirmée [E37].
- **Krool, MDT Design, Steve Pallas** : sur mesure sur rendez-vous, sans configurateur relevé [E38].
- **Tasmanie** :
  - Claudia Jewellers : 24 Magnet Court, Sandy Bay ; prix affichés de 5 750 à 7 500 AUD ; maquettes 3D virtuelles et physiques sur demande ; consultations à distance [V39][V40] ;
  - Haab Designer Jewellers : 20 Coulter Ct, Launceston [E41] ;
  - Launceston Precision Jewellers [E42] ;
  - My Jewellers, à Burnie : croquis ou CAO, 4 à 8 semaines [E43] ;
  - Dean Walker Designs, à Burnie [E44] ;
  - David Parums : alliances en acier damassé ou en zirconium, prix affichés [E45].

## Ce qu'il faut retenir pour JR Diamond [I]

1. **Un seul concurrent du territoire fait de la 3D temps réel** (All Diamonds), avec la même technique que JR Diamond, mais avec une bague générée par le code et sans prix [V7][V8].
   La promesse « ce que vous voyez existe » (modèle issu du fichier de fabrication) et le prix affiché restent distinctifs ici.
2. **Le prix décomposé existe déjà** :
   - Anny's : monture + diamant estimé = total [V3] ;
   - Lily Dia : barème des options [V10] ;
   - VAHÉ et Melbourne Jewellers : prix de la monture [V17][V19].
   JR Diamond doit aller plus loin : poids du métal, façon, pierre [I].
3. **La pierre filmée** n'est proposée que par Lily Dia (vidéo 360° de chaque pierre) [V9] et DG & Co. (360° HD) [V23]. SkyGem fait payer la vidéo 3D [V27].
4. **Montrer l'objet avant la fonte** : Anny's fait essayer une maquette imprimée en 3D [E5] ; Claudia propose des maquettes sur demande [V39]. C'est une piste pour l'atelier de Ramat Gan [S].
5. **Délais** : de 3–4 semaines (Anny's) à 6–8 semaines (Lily Dia) en standard [V1][V9]. Les 14 jours ouvrés de JR Diamond sont plus courts que ces délais standard [I].
   Mais Anny's annonce aussi des options en 2 semaines et en 48 h pour les bagues de fiançailles [E5], et Moissanite Engagement Rings une fabrication express en 3 semaines [V21].

## Sources (lues ou extraites le 15/11/2026)

- [V0] robots.txt et réponses HTTP (curl, en-tête par défaut). robots.txt de www.annys.com.au, cullenjewellery.com, lilydiajewellery.com, vahejewellery.com.au, www.alldiamonds.com.au, diamondgold.com.au, moissaniteengagementrings.com.au, melbourne-jewellers.com.au, sargisons.com.au, www.claudiajewellers.com, www.mydiamonds.com.au, haabdesignerjewellers.com.au, abovegroundjewellery.com.au, skygem.com.au, janai.com.au, www.moimoi.com.au ; codes 200 et en-têtes `server: cloudflare` / `Vercel` des pages de départ.
- Anny's :
  - [V1] https://www.annys.com.au/
  - [V2] https://www.annys.com.au/engagement-rings
  - [V3] https://www.annys.com.au/engagement-rings/crystal-six-claw-solitaire
  - [E4] https://www.annys.com.au/lab-grown-engagement-rings
  - [E5] https://www.annys.com.au/custom-engagement-rings
- All Diamonds :
  - [V6] https://www.alldiamonds.com.au/ (Firecrawl) ; [E6] même page (téléphone, salles)
  - [V7] https://www.alldiamonds.com.au/ring-builder (rendu Firecrawl)
  - [V8] https://www.alldiamonds.com.au/assets/RingBuilder-cqrHcY16.js et https://www.alldiamonds.com.au/assets/ProceduralRingPreview-CoihohVR.js (fichiers publics chargés par la page)
- Lily Dia :
  - [V9] https://lilydiajewellery.com/design-your-own-engagement-ring
  - [E9b] https://lilydiajewellery.com/ , https://lilydiajewellery.com/engagement-rings-hobart , https://lilydiajewellery.com/lab-grown-engagement-rings-hobart
  - [V10] https://lilydiajewellery.com/education/engagement-rings/custom-design
- Cullen :
  - [E11] https://cullenjewellery.com/en-au/visit/showroom/melbourne
  - [E12] https://linkedin.com/company/19125289
  - [V13] https://cullenjewellery.com/en-au/engagement-rings
  - [V14] https://cullenjewellery.com/en-au/engagement-rings/ring-julia/melee-stones:lab-diamond+metal-type:18k-yellow-gold (Firecrawl)
  - [E15] https://cullenjewellery.com/en-au/engagement-rings/custom/au-melbourne
- VAHÉ :
  - [V16] https://vahejewellery.com.au/
  - [E16b] https://vahejewellery.com.au/pages/contact
  - [V17] https://vahejewellery.com.au/collections/start-with-a-setting
- Melbourne Jewellers :
  - [V18] https://melbourne-jewellers.com.au/
  - [V19] https://melbourne-jewellers.com.au/pages/build-your-own-ring (WebFetch et rendu Firecrawl)
- Moissanite Engagement Rings :
  - [E20] https://moissaniteengagementrings.com.au/pages/moissanite-engagement-rings-melbourne
  - [V21] https://moissaniteengagementrings.com.au/collections/design-your-engagement-ring (`/collections/ring-builder-collection` y redirige)
  - [E22] https://guthriejewellery.com/pages/about-us et https://linkedin.com/company/moissanite-engagement-rings-australia
  - [E22b] https://moissaniteengagementrings.com.au/pages/showroom-appointment-direct-link
- DG & Co. :
  - [V23] https://diamondgold.com.au/
  - [V24] https://diamondgold.com.au/collections/build-your-engagement-ring
- SkyGem :
  - [E25] https://skygem.com.au/pages/contact-us
  - [V26] https://skygem.com.au/pages/ringbuilder-natural-white-diamonds ; [V26b] https://skygem.com.au/
  - [V27] https://skygem.com.au/pages/custom-made-engagement-ring-melbourne
- Sargisons :
  - [E28] https://sargisons.com.au/
  - [V29] https://sargisons.com.au/collections/engagement-rings
  - [V30] https://sargisons.com.au/collections/engagement-rings/products/0-50-diamond-solitaire-ring-platinum
- Autres :
  - [V31] https://www.mydiamonds.com.au/collections/engagement
  - [E32] https://www.mydiamonds.com.au/pages/contact , https://www.mydiamonds.com.au/pages/engagement-rings-melbourne
  - [E33] https://www.gsdiamonds.com.au/showrooms , https://www.gsdiamonds.com.au/melbourne/engagement-rings
  - [E34] https://diamondgallery.com.au/ , https://diamondgallery.com.au/contact-us
  - [E35] https://janai.com.au/
  - [E36] https://www.moimoi.com.au/custom-made-engagement-rings-melbourne
  - [E37] https://abovegroundjewellery.com.au/
  - [E38] https://www.krool.com.au/pages/custom-engagement-rings-melbourne , https://www.mdtdesign.com.au/design-your-own-engagement-ring , https://www.stevepallas.com.au/bespoke-engagement-rings/
  - [V39] https://www.claudiajewellers.com/pages/engagement-rings ; [V40] https://www.claudiajewellers.com/
  - [E41] https://haabdesignerjewellers.com.au/
  - [E42] https://precisionjewellers.com.au/
  - [E43] https://myjewellers.com.au/pages/custom-design
  - [E44] https://www.deanwalkerdesigns.com.au/
  - [E45] https://www.davidparums.com.au/
