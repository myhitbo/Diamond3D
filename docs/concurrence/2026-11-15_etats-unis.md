# Concurrence États-Unis : vente directe de bagues sur mesure en ligne

Date : 15 novembre 2026 (explorateur n° 2). Complète `docs/ANALYSE_CONCURRENCE.md` (outils de configurateur, section 2.8), sans le répéter.
Pourquoi les États-Unis : marché de référence des parcours « monture + pierre » ; une part des clients anglophones d'Israël compare avec ces sites [S].

Légende : **[Vn]** vérifié, page lue le 15/11/2026, source n en section 4 (certaines pages servies par un cache de 1 à 3 jours) ;
**[Vn, sec.]** lu sur une source secondaire (blog, comparatif, souvent affilié) ; **[I]** inféré ; **[S]** supposé. Prix en dollars US, tels qu'affichés.

## 0. Inventaire des sites à auditer

Blocage : test curl du 15/11/2026 depuis l'environnement cloud (IP de centre de données, nœud Cloudflare de Chicago), avec puis sans en-tête Safari.
« Défi Cloudflare » = réponse 403 avec `cf-mitigated: challenge` (page de vérification, captcha possible). Un navigateur d'auditeur peut passer [I].

| Acteur | Accueil | Configurateur (page de départ) | Autres pages clés | Blocage observé |
|---|---|---|---|---|
| Brilliant Earth | brilliantearth.com | /engagement-rings/start-with-a-diamond/ (pierre d'abord) ; /engagement-rings/shop-all/ (monture d'abord) | /engagement-rings/start-with-a-diamond/lab/ · /pages/virtual-try-on/ · /stores/ · /stores/virtual-appointment/ | Défi Cloudflare (403) partout ; lisible par Firecrawl |
| Blue Nile | bluenile.com | /engagement-rings (l'ancienne /engagement-rings/design-your-own-ring y redirige) ; Creative Studio : /engagement-rings/custom-engagement-rings/knife-edge-solitaire-engagement-ring-diamond-tulip-head-item-291542 | /diamonds · /diamonds/lab-grown-diamonds · /jewelry-stores · /jewelry-stores/virtual-appointment | Aucun (200) |
| James Allen (fermé) | jamesallen.com → bluenile.com/?jaRedirect=true | /engagement-rings/by-james-allen (sur Blue Nile) | /james-allen · /james-allen-faq | Redirection vers Blue Nile |
| VRAI | vrai.com | /engagement-rings → fiche configurable /configure/setting-to-diamond/signature-prong/oval-yellow-gold-41178852851805 | /diamonds/inventory · /custom-engagement-rings · /book-appointment · /showrooms | Aucun (200, Vercel) |
| Angara | angara.com | /engagement-rings/settings · /engagement-rings/stones · /engagement-rings/stones/diamond | /ring-designer (assistant IA) · /b/faq-returns | Aucun (200, Imperva) |
| Clean Origin | cleanorigin.com | /product/builder/create/?builder_type=ring&product_type=first (redirige vers /engagement/ sans session) | /diamonds/ · /customer-service/return-policy | Aucun (200, Cloudflare sans défi) |
| Ritani | ritani.com | /custom-engagement-ring (Ring Studio) | /collections/shop-diamonds · /pages/free-in-person-preview · /tracker · /price-transparency-tool | 403 Cloudflare, avec ou sans en-tête ; lisible par Parallel |
| Rare Carat | rarecarat.com | /setting-search (monture) · /diamond-search (pierre) | /engagement-rings · /diamond-report (score IA) · /learn/financing-options | Aucun (200) |
| Keyzar | keyzarjewelry.com | /collections/engagement-ring-settings · /collections/lab-diamonds | fiche /products/the-kamellie-engagement-ring-setting-solitaire · /quiz · /book-appointment | Aucun (200) |
| Frank Darling | frankdarling.com | /engagement-rings/ · /how-it-works/ (quiz, croquis) | /diamonds/ · /book-an-appointment/ · aide « Try at Home » | Aucun (200, Vercel) |
| With Clarity | withclarity.com | /collections/engagement-rings | /pages/home-preview · /pages/custom-engagement-rings · /pages/book-an-appointment | Défi Cloudflare (403) ; lisible par Firecrawl |
| Grown Brilliance | grownbrilliance.com | /design-your-lab-grown-diamond-ring | /lab-grown-diamonds-search | Défi Cloudflare (403) |
| Do Amore | doamore.com | Non identifié depuis l'accueil (à trouver par l'auditeur) | — | Défi Cloudflare (403) |

## 1. Tableau de synthèse

| Acteur | Visuel du constructeur | Prix affiché | Délai annoncé | Retours | Mise à taille | Échange de pierre | Essai physique | Financement |
|---|---|---|---|---|---|---|---|---|
| Brilliant Earth | 3D rotative, vidéos des vraies pierres, essayage sur photo de la main [V1][V2][V3] | Monture et pierre séparées [V4] | « Livraison au plus tard le … » ; 2–3 sem. [V4][V1] | 30 j [V2] | 1 an dans la plage [V2] | À vie, 100 % du prix [V6] | 44 salles [V10, sec.] | Affirm ≤ 36 mois, Wells Fargo 12 mois, réservation [V5] |
| Blue Nile | 360° « cliquer-glisser », rendu numérique déclaré [V11] | « Prix de la monture » [V11] | Date après choix de la taille [V11] | 30 j dès l'expédition, sur mesure exclu [V13] | 1 fois, ± 2 tailles, 6 mois [V14] | À vie, ≥ 2× [V15] | Magasins, rendez-vous vidéo [V12] | Carte Blue Nile [V11] |
| VRAI | Pas de 3D relevée sur la fiche ; 3D en sur mesure [V26][V28] | Séparés [V29] | « Expédié le … » ; 14 j ouvrés sur mesure [V26][V28] | 30 j, 300 $ de frais de recyclage [V27] | 1 fois, ± 1 taille US [V32] | Value Guarantee ≥ 0,30 ct [V31b] | 10 salles, dont Londres, Madrid, Toronto [V33b] | Klarna 6–36 mois [V29] |
| Angara | 360° des vraies pierres (2023), assistant IA [V36][V41b] | « À partir de », effet de chaque choix [V35] | 3–4 j de transport [V40] | 30 j + garantie 110 % [V37] | Non relevé | Non relevé | Non | 2–3 versements [V39b] |
| Clean Origin | Image générique constatée [V46, sec.] | Non relevé | ≤ 4 sem. sur mesure [V45] | 60 j, avoir seul si sur mesure [V42] | 1 fois, 60 j [V43] | Non relevé | 6 magasins [V46, sec.] | Affirm, Katapult [V44] |
| Ritani | « Visualisez instantanément », images HD finales sur demande [V54][V48] | Coûts et marge détaillés pour les pierres [V49] | Suivi en 7 étapes [V48] | 30 j [V53] | Non relevé | Naturel seul, ≥ 3,5× [V52] | Aperçu gratuit en bureau privé ≥ 1 500 $ [V47] | Virement − 2 % [V52] |
| Rare Carat | Photos, vidéos [V58] | Score IA prix et qualité, médianes publiées [V56][V57] | Non relevé | 30 j dès l'expédition [V58] | 1 fois, 1 an [V58] | 3× naturel, 2× synthétique [V58] | Non | Affirm, Klarna, Afterpay, PayPal, Katapult [V59] |
| Keyzar | Boutons « 360 » et « Videos » [V60] | Monture 1 150 $, pierre en option [V60] | « Reçue dès le lun. 14 déc. » ; 3–4 sem. [V60][V61] | 30 j hors sur mesure [V62] | 1 an [V63b, sec.] | Non relevé | Salle à New York [V61] | 12 versements sans intérêt [V60] |
| Frank Darling | Croquis gratuit illimité [V64] | Non relevé | Non relevé | 30 j après « prêt » ou 60 j après commande [V66] | 100 $ [V67] | Non relevé | Kit gratuit à domicile, 5 salles [V65][V68b] | Réservation (layaway) [V66] |
| With Clarity | Rendus 3D en sur mesure [V72] | Non relevé | ≤ 12 j ouvrés ; 14 j sur mesure [V73][V72] | 30 j dès réception [V70] | 1 fois, 30 j [V74, sec.] | Non relevé | 2 répliques, 200 $ rendus en avoir [V69] | Affirm [V74, sec.] |

## 2. Fiches par acteur

**Brilliant Earth** (San Francisco ; 437 M$ de ventes en 2025 ; T3 2026 : 112,8 M$, panier moyen 2 140 $ [V9]).
- Parcours en 3 étapes : pierre, monture, taille [V4]. « 3D viewing tool » pour faire tourner le profil, la largeur et les griffes ; vidéos des pierres [V1][V2].
- Essayage virtuel sur une photo de la main : curseur de carats, forme, métal, superposition de l'alliance, envoi à un conseiller [V3]. Visualiseur de teint de peau [V10, sec.].
- 30 j de retour ; 1 retaille offerte (1 an dans la plage) ; garantie de fabrication à vie hors pierre centrale ; échange de pierre à vie à 100 % [V2][V6]. Sur mesure complet : 4–6 sem., dès 2 000 $, ni remboursé ni échangé [V8].
- Livraison FedEx gratuite aller-retour, internationale comprise [V6][V7]. 44 salles ; les salles augmentent les ventes de leur métropole [V10, sec.]. Libellé : « Lab Grown Diamonds » [V4].
- À retenir : l'omnicanal (en ligne + salles), et l'essayage sur photo plutôt qu'une AR lourde.

**Blue Nile** (Signet ; 339 M$ en 2025, −2 % [V21] ; +10 % au trimestre, selon la direction [V23]).
- « Build Your Own Ring » (pierre ou monture d'abord) et « Creative Studio » : tête, corps, métal, forme, carats [V12][V11]. 360° « Click and drag to spin », avec l'avertissement : « This is a digital rendering for preview purposes. The final product may vary slightly » [V11].
- 30 j **à compter de l'expédition** ; sur mesure, gravé et retaillé exclus ; 2 retours gratuits par an ; annulation d'un sur-mesure sous 24 h [V13]. 1 retaille ± 2 tailles sous 6 mois [V14].
- Échange de pierre à vie : 100 % du prix initial pour une pierre d'au moins le double (GIA ou IGI, même origine) [V15]. Garantie de prix (« price match ») ; certificat de remplacement pour assurance dès 5 000 $ [V17].
- Livraison gratuite ; express en 24 h au-delà de 500 $ ; constructeur ouvert dans 40 pays [V16][V17]. Repositionné en 2026 vers le luxe et le diamant naturel [V22].
- À retenir : un rendu 360° qui ne prétend pas montrer la bague réelle. C'est la faille que JR Diamond peut exploiter (modèle issu du fichier de fabrication).

**James Allen** (Signet) : **site fermé en mai 2026**, marque devenue une collection de Blue Nile [V19][V25].
- Ventes : 278,4 M$ (exercice 2024) puis 142,5 M$ (exercice 2026), soit −49 % en deux ans ; dépréciation de 13 M$ de la marque [V20][V21].
- Il avait pourtant la vidéo 360° HD de chaque pierre (zoom 40×) et l'inspection en direct avec un gemmologue en partage d'écran [V24]. Signet réutilise sa technologie de personnalisation dans ses autres enseignes [V22].
- À retenir [I] : la visualisation est une condition d'entrée, pas un avantage durable. Ce qui a manqué selon Signet : l'assortiment et la position concurrentielle [V20].

**VRAI** (diamants synthétiques produits dans sa propre fonderie, procédé CVD, hydroélectricité [V34]).
- Fiche configurable : forme, métal, style, largeur et type de corps ; « Ships by Tue, Dec 1 » ; note 5,0 sur 226 avis [V26]. Monture et pierre au prix séparé [V29].
- Sur mesure : rendez-vous, visualisation 3D, fabrication en 14 j ouvrés, aucune urgence acceptée [V28]. « Cut for You » : taille à la demande, 30 formes [V29].
- Retours 30 j, mais remboursement moins 300 $ de « frais de recyclage » pour une bague de fiançailles (pierre dessertie, métal refondu), offerts si l'on prend un avoir [V27].
- Rappel du droit de rétractation de 14 j dans l'UE, et de son exception pour les biens personnalisés [V27]. Livraison en France : 25 €, prix TVA et droits compris [V30].
- Libellé : « VRAI created diamonds », forme « [nom du fabricant]-created » admise par la FTC [V26][V75]. Retailles suspendues du 11/11 au 3/1 [V32].
- À retenir : un modèle prêt pour l'Europe (prix TTC, rétractation affichée) ; un frais de retour qui protège la marge sur le sur-mesure.

**Angara** (pierres de couleur, naturelles et synthétiques).
- Entrées : monture, pierre de couleur ou diamant ; 2 206 pierres en ligne ; gravure offerte ; tailles 3 à 14 [V35]. Personnalisation de la tête, du corps, des finitions et d'une « signature stone » [V39].
- « Ring Designer » : raconter son histoire, répondre à un quiz ou envoyer une photo d'inspiration [V36]. Assistant conçu par Auriga IT avec un modèle d'OpenAI [V41, sec.].
- Prix : pierres de couleur dès 164 $, diamants dès 701 $ ; le prix total suit chaque choix [V35]. Retours 30 j ; remboursement à 110 % (plafond 250 $) si un expert agréé estime la pièce à moins de 125 % du prix payé [V37].
- Garantie à vie réservée aux membres du programme « A-List » [V38]. Certificat d'authenticité, plus GIA ou IGI pour certaines pierres [V38].
- À retenir : le même périmètre que l'atelier (émeraude, saphir, rubis) et une garantie de valeur chiffrée.

**Clean Origin** : retours ramenés de 100 à 60 j ; un sur-mesure n'est remboursé qu'en avoir ; retaillé ou échangé = vente ferme [V42][V46, sec.].
- 1 retaille gratuite sous 60 j ; livraison vers les États-Unis et le Canada seulement ; Affirm et location-vente Katapult, sans réservation [V43][V44].
- Un testeur a trouvé une image générique à la place de la vraie pierre (2,01 ct, septembre 2026) [V46, sec.]. Contre-exemple utile.

**Ritani** (atelier à White Plains, État de New York [V52]). **Le plus proche du positionnement de JR Diamond.**
- Ring Studio : diamant, métal, monture, largeur, griffes, pierres d'accompagnement, gravure, aperçu immédiat [V51]. Création sur CAO : 150 $, déduits de l'achat [V51].
- Aperçu en personne gratuit dès 1 500 $ : on choisit « Free Preview with a Diamond Pro » à la commande. Simple empreinte bancaire, sans débit ; rendez-vous sous 7 j ; on ne paie que si l'on garde la bague [V47].
- Suivi de commande en 7 étapes : CAO, confirmation, choix de la pierre, fabrication, polissage et contrôle, revue finale (images HD sur demande), expédition [V48]. Un client décrit ce suivi et les e-mails reçus [V55].
- Transparence : « we break down the actual costs and markups… from the diamond itself to the fulfillment and freight costs including our markup » [V49]. Outil qui compare le prix d'une même pierre GIA ou IGI chez d'autres vendeurs [V50].
- Assistant IA « Oscar » ; gemmologues sans commission [V54]. Retours 30 j, 2 par an [V53]. Échange de pierre : naturel GIA ou AGSL, au moins 3,5× [V52].
- À retenir : la preuve plutôt que la promesse (empreinte sans débit, suivi par étapes, marge montrée).

**Rare Carat** (place de marché devenue vendeur en titre ; plus de 2 millions de pierres [V57]).
- Chaque pierre est vérifiée à New York : microscope, puis comparaison de l'inscription laser avec le certificat [V57]. Scores IA de prix et de qualité ; « économisez jusqu'à 45 % » [V56].
- SEO : la page des bagues publie des prix médians par forme et par tranche de carats, datés du 19/10/2026 [V57]. Le site se dit « n° 1 sur Trustpilot » (affirmation du site) [V56].
- Simulateur de financement en direct, avec curseur de prix et offres de 5 prestataires [V59]. 30 j, 1 retaille sous 1 an, échange 3× (naturel) ou 2× (synthétique) [V58].

**Keyzar** (New York, Rockefeller Plaza ; « créatifs, programmeurs et experts » [V61]).
- Fiche : 9 formes, 7 métaux (14 k, 18 k, platine), carats de 1 à 5, largeur du corps, gravure ; boutons « 360 » et « Videos » [V60].
- Prix : monture 1 150 $, puis « Add Center Stone » ou « Buy Setting Only » ; « Receive as soon as Mon, Dec 14 » ; « 12 interest-free installments of $95.83 » ; 1 686 avis Google et Trustpilot [V60].
- Essayage par caméra, avec un QR code à envoyer à son partenaire [V63]. Fabrication en 3–4 sem. ; livraison express offerte dans le monde ; 5 devises [V61][V62]. Expertise fournie [V61].
- À retenir : la date de réception et la mensualité au même endroit que le prix.

**Frank Darling** (New York, Chicago, Philadelphie).
- Quiz → croquis gratuit, sans limite [V64]. Kit d'essai gratuit : 3 modèles en argent avec oxyde de zirconium, 5 j ; 450 $ si non rendu ; 100 $ de remise après retour [V65].
- En salle, une « stone flight » : sélection de pierres préparée avant le rendez-vous [V68]. Retours : 30 j après « prêt à expédier » ou 60 j après commande, au premier terme ; 1 retour par 6 mois [V66].
- Retaille payante (100 $) ; garantie de fabrication à vie hors pierre centrale [V67][V67b].

**With Clarity** (New York ; salle à SoHo depuis 2024 [V74, sec.]).
- « Home Preview » : 2 répliques imprimées en 3D (alliage blanc, imitation de diamant), à la taille du client, 7 j. 200 $ débités par réplique, rendus en carte cadeau valable un an [V69][V70].
- La page s'intitule « Try On Engagement Rings At Home for Free » [V69] : à ne pas imiter.
- Sur mesure : rendus 3D révisés jusqu'à l'accord, puis expédition en 14 j ouvrés [V72]. Garantie « à vie » limitée au nettoyage et aux pierres de moins de 0,10 ct [V71].

## 3. Avantages à retenir, classés par impact estimé sur la conversion [I]

1. **Voir et toucher avant de payer, sans risque.** Ritani : empreinte sans débit [V47]. Frank Darling : kit gratuit [V65]. With Clarity : répliques [V69]. Brilliant Earth : 44 salles [V10].
   Pour JR Diamond : rendez-vous à l'atelier de Ramat Gan, et réplique en résine de la bague configurée. Le fichier de fabrication existe déjà : la réplique est peu coûteuse [I].
2. **Suivi de fabrication en étapes, avec photos.** Ritani le fait en 7 étapes [V48]. JR Diamond promet « voir naître son bijou » : une page de suivi par commande (CAO, pierre filmée, fonte, sertissage, contrôle) rendrait la promesse visible [I].
3. **Prix décomposé et vérifiable.** Ritani montre ses coûts et sa marge [V49] ; Rare Carat publie des médianes et note chaque prix [V57][V56].
   Le moteur de prix de JR Diamond (`src/lib/pricing/engine.ts`) va plus loin : métal au gramme, façon, sertissage, bénéfice. Une fois validé, c'est un argument que peu d'acteurs peuvent montrer [I].
4. **Date de réception précise sur la fiche** : Brilliant Earth, Keyzar, VRAI [V4][V60][V26]. Pour JR Diamond : changer « 14 jours ouvrés » en date calculée (« reçue au plus tard le … »). Effort faible [I].
5. **Mensualité affichée près du prix** : Keyzar, Blue Nile [V60][V11]. En Israël, l'équivalent est le paiement en plusieurs fois (« תשלומים ») [S]. À vérifier avec le prestataire retenu dans `docs/PAIEMENT.md`.
6. **Garanties standard du marché** : retour 30 j (sur mesure souvent exclu), 1 retaille offerte, garantie de fabrication à vie, échange de pierre à vie de 2× à 3,5×.
   JR Diamond a déjà la retaille. L'échange de pierre est envisageable pour les pierres certifiées dès 0,50 ct [I].
7. **Promesse de fidélité visuelle.** Blue Nile prévient que son rendu « peut varier » [V11] ; Clean Origin a montré une image générique [V46]. Dire « modèle issu du fichier de fabrication, écart mesuré » et le prouver [I].
8. **Assistants IA** (Angara, Ritani, Rare Carat) : utiles pour guider, impact moindre [I]. À envisager après le lancement.
9. **Libellés et droit.** FTC : « laboratory-grown », « laboratory-created » ou « [fabricant]-created », placé avant « diamond » [V75][V76].
   VRAI affiche aussi la rétractation européenne et son exception pour le sur-mesure [V27]. Utile pour la France ; en français, rester sur « synthétique ».

**Contre-exemples à éviter**
- James Allen : la meilleure visualisation de pierre du marché n'a pas empêché la fermeture [V19][V20].
- Images génériques à la place de la vraie pierre (Clean Origin) [V46]. Essai « gratuit » qui ne l'est pas (With Clarity) [V69].
- Retours qui commencent à l'expédition plutôt qu'à la réception (Blue Nile, Rare Carat) [V13][V58]. Frais de retour élevés sur le sur-mesure (VRAI : 300 $) [V27]. La plupart excluent le sur-mesure.

## 4. Sources (lues le 15/11/2026)

- Brilliant Earth : [1] https://www.brilliantearth.com/pages/custom-engagement-rings · [2] https://investors.brilliantearth.com/static-files/190464c1-bf02-4e33-b6d7-01d5c38b5824 (rapport annuel) · [3] https://www.brilliantearth.com/pages/virtual-try-on
  [4] https://www.brilliantearth.com/engagement-rings/start-with-a-diamond/ · [5] https://www.brilliantearth.com/flexible-payment-options · [6] https://www.brilliantearth.com/customer-care · [7] https://www.brilliantearth.com/shipping
  [8] https://www.brilliantearth.com/pages/custom-design-studio/ · [9] https://investors.brilliantearth.com/news-releases/news-release-details/brilliant-earth-reports-third-quarter-results
  [10, sec.] https://ng.investing.com/news/stock-market-news/brilliant-earth-at-agp-virtual-consumer-showcase-growth-slows-93CH-2804180
- Blue Nile : [11] https://www.bluenile.com/engagement-rings/custom-engagement-rings/knife-edge-solitaire-engagement-ring-diamond-tulip-head-item-291542 · [12] https://www.bluenile.com/
  [13] https://www.bluenile.com/services/free-returns · [14] https://www.bluenile.com/policies/returns · [15] https://www.bluenile.com/services/diamond-upgrade-program · [16] https://www.bluenile.com/services/shipping · [17] https://www.bluenile.com/services
- Signet et James Allen : [19] https://www.sec.gov/Archives/edgar/data/832988/000083298826000229/sig-20260801.htm · [20] https://instoremag.com/signet-to-sunset-james-allen-website-convert-brand-to-blue-nile-collection
  [21] https://rapaport.com/news/signet-to-close-james-allen-e-commerce-site · [22] https://nationaljeweler.com/articles/14798-signet-jewelers-to-close-100-stores-shutter-james-allen-banner
  [23] https://nationaljeweler.com/articles/15314-q-a-signet-jewelers-joan-hilson-on-diamond-demand-the-holidays · [24] http://jamesallen.com/diamond-display-technology (page servie en cache, site fermé) · [25] https://www.bluenile.com/james-allen
- VRAI : [26] https://www.vrai.com/configure/setting-to-diamond/signature-prong/oval-yellow-gold-41178852851805 · [27] https://www.vrai.com/returns-exchanges · [28] https://www.vrai.com/custom-engagement-rings
  [29] https://www.vrai.com/how-to-buy-an-engagement-ring · [30] https://www.vrai.com/shipping · [31] https://www.vrai.com/warranty · [31b] https://www.vrai.com/engagement-rings/ready-to-ship
  [32] https://help.vrai.com/en/knowledge/can-i-resize-my-ring
  [33] https://help.vrai.com/en-US/articles/virtual-and-in-person-appointments-314449 · [33b] https://www.vrai.com/showrooms (liens de l'accueil) · [34] https://www.vrai.com/lab-grown-diamonds
- Angara : [35] https://www.angara.com/engagement-rings/stones · [36] https://www.angara.com/ring-designer · [37] https://www.angara.com/b/faq-returns · [38] https://www.angara.com/blog/questions-about-angara-jewelry/
  [39] https://www.angara.com/blog/how-to-design-ring · [39b] https://www.angara.com/blog/how-to-finance-an-engagement-ring · [40] http://angara.com/b/shipping (page datée de 2023)
  [41b] https://www.newswire.com/news/angara-launches-bespoke-ring-designing-experience-create-with-angara-22047058 (2023) · [41, sec.] https://aurigait.com/case-study/aurigait-com-case-studies-conversational-ai-for-jewelry-angara
- Clean Origin : [42] https://www.cleanorigin.com/customer-service/return-policy · [43] https://www.cleanorigin.com/customer-service/resizing-policy · [44] https://www.cleanorigin.com/customer-service/faq
  [45] https://www.cleanorigin.com/engagement-rings · [46, sec., affilié] https://labgrowncarats.com/clean-origin-review
- Ritani : [47] https://www.ritani.com/pages/free-in-person-preview · [48] https://www.ritani.com/tracker · [49] https://website.ritani.com/pages/diamond-inventory · [50] https://www.ritani.com/price-transparency-tool
  [51] https://www.ritani.com/pages/design-your-own-engagement-ring · [52] https://website.ritani.com/pages/ritani-services · [53] https://www.ritani.com/pages/frequently-asked-questions
  [54] https://www.ritani.com/pages/engagement-rings · [55] https://www.trustpilot.com/review/ritani.com
- Rare Carat : [56] https://www.rarecarat.com/ · [57] https://www.rarecarat.com/engagement-rings · [58] https://www.rarecarat.com/policies · [59] https://www.rarecarat.com/learn/financing-options
- Keyzar : [60] https://keyzarjewelry.com/products/the-kamellie-engagement-ring-setting-solitaire?Material=14k+Yellow+Gold&Center+Stone+Shape=Oval · [61] https://keyzarjewelry.com/policies/shipping-policy
  [62] https://keyzarjewelry.com/en-us/pages/faq · [63] https://keyzarjewelry.com/blogs/engagement-rings/how-to-create-your-engagement-ring-online (2023) · [63b, sec.] https://www.doamore.com/keyzar-vs-brilliant-earth-customer-experiences/
- Frank Darling : [64] https://frankdarling.com/how-it-works · [65] https://help.frankdarling.com/en_us/what-is-your-try-at-home-program-B1v7Eqzkbx
  [66] https://help.frankdarling.com/en_us/what-is-your-return-policy-for-finished-jewelry-Bkquhcz1Zl · [67] https://frankdarling.com/contact/?scroll_target=complimentary-care-plan
  [67b] https://help.frankdarling.com/en_us/what-is-your-warranty-policy-HJbj_9Gkbg · [68] https://frankdarling.com/blog/what-frank-darling-engagement-ring-appointment-is-right-for-you
  [68b] https://frankdarling.com/our-showrooms/brooklyn · https://help.frankdarling.com/en_us/free-shipping-and-returns-Sk_l0pNSbl
- With Clarity : [69] https://www.withclarity.com/home-preview · [70] https://www.withclarity.com/pages/terms-conditions · [71] https://www.withclarity.com/pages/our-policies
  [72] https://www.withclarity.com/pages/custom-engagement-rings · [73] https://www.withclarity.com/policies/shipping-policy · [74, sec.] https://www.ringreel.com/reviews/with-clarity
- Droit américain : [75] https://www.ecfr.gov/current/title-16/section-23.12 · [76] https://www.ftc.gov/business-guidance/resources/loupe-advertising-diamond-gemstones-pearls
