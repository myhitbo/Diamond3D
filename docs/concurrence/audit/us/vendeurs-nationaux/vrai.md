# Audit : VRAI (États-Unis, vendeurs nationaux)

- **Site** : VRAI (marque de Diamond Foundry), https://www.vrai.com. Page de départ : la monture configurable « Signature Hidden Halo » [R1].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données.
- **Statut : complet**. Parcours suivi des 3 étapes (monture, pierre, récapitulatif) jusqu'au sac. Il n'existe pas de page panier : `/cart` répond 404 [R19], le sac est un tiroir. « Next step » appelle `/api/checkout/session`, requête bloquée par l'auditeur (robots.txt interdit `/checkout*`). Quelques contrôles non concluants (voir Limites).
- Complète la fiche VRAI de `docs/concurrence/2026-11-15_etats-unis.md` ([V26] à [V34]).
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé ; « sec. » : source secondaire. Prix en dollars US affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 1. Monture « 1. SETTING » [R1] | Forme (6 + « +30 »), métal (6), style (Plain, Hidden Halo), largeur (Standard, Large), corps (uni, pavé), cœur, « CONTINUE TO DIAMOND » [V]. iPhone : mêmes options sous 5 onglets [V]. |
| 2. Pierre « 2. VRAI CREATED DIAMOND » [R2] | Liste de pierres VRAI : forme, carats, prix, taille, pureté, couleur, tri, « All Filters », vue grille ou tableau, « Add to ring » [V]. |
| 2 bis. Panneau de pierre [R3] | Vue rotative de la pierre, onglets 4Cs, Rough, Specs, Certificate, « Add to ring », « Talk to a diamond expert » [V]. |
| 3. Récapitulatif « 3. REVIEW » [R4] | Taille de doigt, gravure, « ADD TO BAG », cœur, accordéons, date d'expédition [V]. |
| 4. Sac (tiroir) | Monture et pierre détaillées, sous-total hors taxes, mensualité, « Next step » vers le paiement (non suivi) [V]. |

## Contrôles vérifiés

Ordinateur sauf mention « iPhone ». Les prix sont ceux de la bague affichée (ovale, or 18 k jaune, Hidden Halo, Standard, corps uni = 1 265 $).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **En-tête et bandeaux** | | | | |
| Fenêtre « Cookie Policy » | fenêtre | Bloque toute la page à la 1re visite (ordinateur et iPhone) jusqu'au choix | — | OK (Accept All Cookies) |
| Cookie Settings | bouton | — | — | Non concluant |
| « Consult with a diamond expert online » | bandeau | Ouvre la prise de rendez-vous « Come see it in real life » | — | OK |
| Menu (☰) | panneau | Gifts, Engagement, Diamonds, Wedding, Jewelry, Collections, Showrooms, Virtual Appointment | — | OK |
| Search | panneau | Champ et « Popular searches » (Wedding Band, Engagement Rings, Toi Et Moi…) | — | OK |
| Account | lien | `/account/details` | — | Non ouvert (robots.txt) |
| Wishlist (en-tête) | panneau | Liste sans compte, « Share wishlist », connexion Google proposée pour l'enregistrer | — | OK |
| Shopping bag | tiroir | « Empty bag » avant ajout | — | OK |
| United States | fenêtre | 41 pays (3 Amérique du Nord, 30 Europe, 7 Asie-Pacifique, Émirats). Israël absent | — | OK |
| English | liste | English, Español | — | OK |
| **Monture [R1]** (chaque option charge une autre adresse, donc un autre article) | | | | |
| Formes Round Brilliant, Emerald, Pear, Radiant, Marquise, Oval | boutons | Photo de la forme, même monture | 1 265 $ | OK (iPhone aussi) |
| « +30 » (See all shapes) | fenêtre | 36 formes (liste plus bas). Kite, Heart : la monture passe en style Plain | Kite, Heart 1 150 $ ; East-West Oval 1 320 $ | OK |
| Platinum / 18k White Gold / 14k Rose Gold | boutons | Photo en blanc ou rose | 1 380 $ / 1 265 $ / 1 150 $ | OK (iPhone aussi) |
| 14k Rose Gold and Platinum / 18k Yellow Gold and Platinum | boutons | Bicolore, photo dédiée ; titre « Signature Ring » pour le second, malgré le halo | 1 205 $ / 1 320 $ | OK |
| Setting style : Plain / Hidden Halo | boutons | Plain : « Estimated to ship by Mon, Nov 16 » (au lieu du mar. 1er déc.) | 1 150 $ / 1 265 $ | OK |
| Band width : Large / Standard | boutons | Photo « 2-1 », titre « Signature Ring » | 1 380 $ / 1 265 $ | OK |
| Band : Pavé band / Plain band | boutons | Photo pavée | 1 435 $ / 1 265 $ | OK |
| Galerie | photos | 6 vues de la bague (face, debout, portée sur une main, côté, profil, détail), emballage, 4 pictogrammes ; « Shown with 1.5ct ». iPhone : carrousel horizontal | — | OK |
| Clic sur la photo (zoom) | — | Clic intercepté par la galerie | — | Non concluant |
| 360°, 3D, réalité augmentée, essayage | — | Aucun sur la fiche (ni canvas, ni model-viewer, ni libellé) | — | Absents |
| Vidéo de la fiche | vidéo | Film de marque : « We grow our own diamonds using zero emission in America's Pacific Northwest » | — | OK |
| Cœur (Add to wishlist) | bouton | « “Signature Hidden Halo Ring” was saved to wishlist » | — | OK |
| Share this design | fenêtre | Champ e-mail, « EMAIL MY DESIGN » ou « EMAIL & BOOK A SHOWROOM VISIT » ; pas de lien à copier | — | Ouvert, rien saisi |
| See it in real life | fenêtre | Rendez-vous en 4 étapes (Location, Service, Date, Review) ; Virtual + 10 salles | — | OK |
| See what's included | fenêtre | 8 engagements (voir « Prix… ») | — | OK |
| Real purchases, honest reviews | fenêtre | « VRAI REVIEWS 5.0 », avis datés de 2025 et 2026 | — | OK |
| VIEW ALL REVIEWS (226) | fenêtre | Même liste ; seul contrôle : « Close reviews » (pas de filtre ni de tri) | — | OK |
| Setting Details | dépliant | Hauteur du corps 1,6 mm, **poids de métal 2,95 g (taille 6)**, pavé 0,08 ct, « Shown with center stone 1½ » | — | OK |
| Delivery & Return | dépliant | FedEx 2Day 10 $, Overnight 50 $ ; retours 30 jours | — | OK |
| CONTINUE TO DIAMOND | lien | Étape 2 ; l'adresse porte `ringSize=5` sans choix de l'utilisateur | — | OK |
| Bulle de chat « Contact expert » | fenêtre | Chat with us, Book virtual, Visit store, e-mail help@vrai.com, téléphone +1.855.956.4488. Pas de WhatsApp | — | OK |
| Book virtual / Visit store | fenêtre | Créneaux virtuels du jour (16 h, 21 h, 22 h UTC), liste d'attente / choix de la salle | — | OK |
| Chat with us | widget | Widget HubSpot (iframe `app.hubspot.com/conversations-visitor`) | — | Non ouvert (règle) |
| BOOK AN APPOINTMENT (bas de page) | fenêtre | Services : Engagement ring 50 min, Wedding band 30 min, Fine jewelry 30 min, VRAI created diamonds 50 min | — | OK |
| Speak with a diamond expert | bouton | Même fenêtre ; iPhone : lien `/book-appointment` (200) | — | OK |
| Carrousel « Spotted in VRAI » (Next slide, View product) | boutons | Clic intercepté | — | Non concluant |
| Fil d'Ariane (5 liens), liens du pied de page (13) | liens | Tous en 200 (curl) | — | OK |
| FAQs (pied de page) | lien | `help.vrai.com` : HTTP 404, « Error 404/500 » [R17] | — | **Lien mort** |
| Join (lettre d'information), réseaux sociaux | champ, liens | — | — | Non testés (formulaire, sites tiers) |
| **Liste de pierres [R2]** | | | | |
| Shape (7 + « + ») | boutons | Round Brilliant : passe à `/diamonds/inventory/round-brilliant?…`, 1 ct à 1 500 $, 2 ct à 3 000 $ | — | OK |
| Price (barre) | menu | 4 tranches avec effectif : 750–1 500 $ (19), 1 500–2 500 $ (81), 2 500–5 000 $ (150), plus de 5 000 $ (55) ; 750–1 500 $ → `priceRange=750-1500`, pierres de 1,00 à 1,28 ct, 1 360 à 1 490 $ | — | OK |
| Carat (barre) | curseur + champs | 1,0 à 15,3 ct | — | Relevé |
| Cut, Clarity, Color (barre) | menus | Super Ideal ; VVS1 à SI1 ; D à J | — | Relevés |
| Sorting By | menu | Featured, Price Descending/Ascending, 4c Grade Descending/Ascending | — | Liste relevée ; tri non appliqué (non concluant) |
| All Filters | panneau | Préréglages « Most brilliant / Best color / Best balance », 10 rubriques en accordéon, Clear filters, Apply filters | — | OK |
| Best color (préréglage) | bouton | Effectifs recalculés (750–1 500 $ : 4) ; 4 pierres affichées | — | OK |
| Ratio, Table, Depth | curseurs | 0,6–2,2 ; 3–91 % ; 41–100 % | — | Relevés |
| Switch to table / grid | bascule | Tableau Shape, Carat, Color, Cut, Clarity, Price | — | OK |
| Survol d'une carte | vidéo | La vidéo de la pierre se lance (`videos.diamondfoundry.com/<n°>.mp4`) | — | OK |
| Cœur d'une carte, « Add to ring » | bouton, lien | « Add to ring » mène au récapitulatif avec `diamondId` | — | OK |
| **Panneau de pierre [R3]** (ovale 2,18 ct D VS1, 3 270 $) | | | | |
| Visuel « Drag to rotate » | canvas 560×560 | La pierre tourne seule ; effet du glisser non isolé | — | OK (vue de la pierre réelle) |
| 4Cs | onglet | Taille, pureté, couleur expliquées ; échelles cliquables (pédagogiques) | — | OK |
| Rough | onglet | Brut 3,4 ct, croissance 435 h, Wenatchee (WA), méthane 8 pi³, 52 kWh, 0 CO2 ; film du verger | — | OK |
| Specs | onglet | 10,22 × 7,23 × 4,57 mm, table et profondeur 63,2 %, ratio 1,4, facettes | — | OK |
| Certificate | onglet | « VRAI Created Diamond Certificate » n° F4000272 (inscription), garantie écrite, « Download certificate » | — | OK |
| Icônes e-mail et fermeture | boutons | Sans nom accessible ; clic e-mail intercepté | — | Non concluant |
| Talk to a diamond expert | fenêtre | Rendez-vous Virtual / Engagement ring pré-remplis, calendrier et créneaux | — | OK |
| **Récapitulatif [R4]** (2,18 ct + monture = 4 535 $) | | | | |
| Ring size 3, 3,25, 3,5, 5 + « Show more sizes » | boutons, fenêtre | 33 tailles US de 3 à 11 au quart, avec diamètre (14,1 à 20,6 mm). Taille 5 présélectionnée | Inchangé | OK |
| Size Guide | fenêtre | Mesurer le doigt ou une bague existante ; « CONTACT EXPERT » | — | OK |
| Engraving « Add (+$60) » | panneau | 16 caractères, pas de choix de police, aperçu de l'intérieur du corps, « Personalized items are non-returnable and may require additional time » | +60 $ (après saisie [I]) | Ouvert, rien saisi |
| VRAI Created Diamond Details | dépliant | Origine USA, prix, 4C, table, profondeur, symétrie, poli | — | OK |
| VIEW CERTIFICATE, « More about… » (5) | boutons | Pas de changement relevé | — | Non concluant |
| Galerie | photos | Toujours « Shown with 1.5ct » ; la photo de la pierre choisie s'ajoute sous les vues | — | OK, mais le rendu ne suit pas la pierre |
| ADD TO BAG | bouton | Roue d'attente, tiroir après 13,3 s puis 10,2 s | — | OK, lent |
| « need it sooner » (iPhone) | bouton | Vu une fois à côté de ADD TO BAG, absent au chargement suivant | — | Non testé |
| **Sac** | | | | |
| Tiroir « Your Bag » | tiroir | Engagement ring 1 265 $ (métal, largeur 1,7 mm, corps, style, taille 6) + VRAI created diamond 3 270 $ ; corbeille | Sous-total hors taxes 4 535 $ ; « Pay as low as $1512 per month » | OK |
| Next step | bouton | Appelle `/api/checkout/session` (bloqué par l'auditeur) | — | Non suivi (robots.txt) |

## Options disponibles

- **Formes (36)** : Round Brilliant, Oval, East-West Oval, Emerald, East-West Emerald, Pear, East-West Pear, Radiant, East-West Radiant, Marquise, East-West Marquise, Elongated Cushion, Cushion, Princess, Trillion, Asscher, Moval, Brilliant Emerald, Octavia, Heart, Passion, Long Hexagon, Capri, Felix, Harmonia, Oval Rose, Kite, Lozenge, Regulus, Round Rose, Lucky, Fusion, Shield, Hexagon, Rand, Cushion Princess [V][R1].
- **Métaux (6)** : platine, or 18 k jaune, or 18 k blanc, or 14 k rose, 14 k rose + platine, 18 k jaune + platine [V][R1]. Or 14 k jaune ou blanc sur demande par e-mail [sec.][R16].
- **Monture testée** : style Plain ou Hidden Halo ; largeur Standard (1,7 mm) ou Large ; corps uni ou pavé [V].
- **Pierres** : uniquement des diamants VRAI (synthétiques CVD de la fonderie) ; aucun naturel, aucune pierre de couleur [V][R2][R11]. Liste ovale : environ 305 pierres (somme des tranches de prix) [I], de 1,0 à 15,3 ct ; couleur D à J ; pureté VVS1 à SI1 ; taille Super Ideal (Ideal+ Hearts pour le rond) [V]. « Cut for You » : taille à la demande, plus de 30 formes [V][R13].
- **Tailles** : US 3 à 11 au quart (33) [V]. **Gravure** : 16 caractères, 60 $ [V].
- **Pas de** filtre de certificat ni d'origine, pas de comparateur, pas d'essai à domicile, pas de WhatsApp [V].

## Prix, délais, retours, garanties

- **Affichage** : prix de la monture seule à l'étape 1, chaque option recalculée aussitôt [V][R1]. Au récapitulatif et au sac, **monture + pierre** (1 265 $ + 3 270 $ = 4 535 $), sous-total « tax excl. » [V][R4].
- **Mensualité** : « Pay as low as $1512 per month » (4 535 $ / 3) dans le sac [V]. Page de paiement : cartes en 3 mois sans intérêt (moins de 65 000 $, États-Unis et Canada), Shop Pay Installments, Affirm (0 à 36 % TAEG) [V][R7]. Klarna n'apparaît que dans la description de la page, pas dans son texte [V][R7] ; l'aide indique un plafond de 70 000 $ [sec.][R16].
- **Délais** : « Estimated to ship by Tue, Dec 1 » (Hidden Halo), « Mon, Nov 16 » (Plain, en stock [I]), « Fri, Dec 4 » (Kite, Heart) [V][R1]. Pas d'accélération possible ; annulation d'un fait-sur-commande sous 12 h [sec.][R16]. Sur mesure : 14 jours ouvrés de fabrication après validation de la CAO, 21 jours ouvrés au minimum en tout [V][R11][sec.][R16].
- **Livraison** (États-Unis) : **payante**, FedEx 2Day 10 $, Overnight 50 $, non remboursables ; signature exigée [V][R1][R5]. Europe : 25 € ; prix TVA et droits compris [V][R5]. Dates limites pour Noël publiées [V][R5].
- **Retours** : 30 jours ; remboursement moins 300 $ de « recycling fee » pour une bague de fiançailles (pierre dessertie, métal refondu), offert si l'on prend un avoir ; au-delà de 15 000 $, avoir seulement [V][R6]. Exclus : sur mesure, gravé, retaillé, modifié. Prolongation des fêtes jusqu'au 15/1/2027 [V][R6]. Droit de rétractation UE de 14 jours, avec l'exception explicite des bagues « manufactured to accommodate a diamond selected or configured by the customer » [V][R6].
- **Garanties** (« See what's included ») : garantie à vie des grades, une mise à taille d'une taille entière, échange de pierre à vie, retours 30 jours, garantie de fabrication à vie, nettoyage annuel, paiement fractionné, protection perte et vol en option [V][R1][R8]. Réparation sous garantie : 50 $ d'acompte, remboursé si le défaut est couvert [V][R9]. Échange : pierres du stock **d'au moins 1 ct**, crédit du prix payé vers un achat de valeur double, plus 30 % de la monture [V][R10] (la fiche d'exploration disait « ≥ 0,30 ct »).
- **Mise à taille** : suspendue du 11/11/2026 au 3/1/2027 ; jusqu'à 5 semaines [V][R14].
- **Certificat** : certificat **maison** « VRAI Created Diamond Certificate », ni GIA ni IGI ; VRAI met en avant que le GIA ne garantit pas ses grades [V][R3][R9].
- **Libellé du synthétique** : « VRAI created diamond » partout ; « Lab Grown Diamonds » dans le titre du récapitulatif [V][R4].
- **Langues et devises** : anglais et espagnol, dollars US ; aide en anglais, allemand, espagnol, français [V][R14].

## Confiance et service

- **Avis** : 5,0 sur 226 avis (widget Okendo), apparemment communs à toute la boutique (avis sur une pierre de 1,67 ct, sur la salle de Madrid) [V][I].
- **Physique** : 10 salles (Boston, Chicago, Los Angeles, Miami, New York, Philadelphie, San Francisco, Londres, Madrid, Toronto), sans rendez-vous possible ; rendez-vous virtuels [V][R12].
- **Contact** : chat HubSpot, e-mail, téléphone, rendez-vous ; réponse sous 1 jour ouvré [V][sec.][R16].
- **Preuves de fabrication** : traçabilité de chaque pierre (onglet Rough), vidéo de chaque pierre, film de la fonderie [V][R2][R3]. Taille et polissage « in our workshops overseas » [V][R13]. **Aucune photo ni vidéo d'atelier pour la bague, aucun suivi de fabrication** : « we are unable to provide any additional details about where your item(s) are at in the production process » [V][R15]. Visualisation 3D réservée au sur-mesure [V][R11] ; Diamond Foundry garde la propriété des fichiers CAO [sec.][R16].

## Points forts à retenir pour JR Diamond

1. **Chaque pierre est filmée** : vidéo au survol de la liste, vue rotative dans le panneau [V][R2][R3]. C'est la promesse « pierre filmée » de JR, déjà standard chez VRAI.
2. **Onglet « Rough » par pierre** : poids du brut, heures de croissance, lieu, énergie [V][R3]. Pour JR : une fiche d'origine par pierre (rapport GIA ou IGI, provenance, vidéo).
3. **Poids de métal affiché** : 2,95 g en taille 6 [V][R1]. JR affiche déjà le poids ± 5 % : le relier au prix de l'or au gramme rendrait le prix expliqué [I].
4. **Prix en deux lignes au sac** (monture, pierre), sous-total et mensualité [V]. Forme simple du « prix expliqué ».
5. **Date d'expédition qui change avec la variante** (16 nov., 1er déc., 4 déc.) [V][R1]. Pour JR : date calculée plutôt que « 14 jours ouvrés ».
6. **Fenêtre « See what's included »** : 8 garanties réunies en un clic [V][R1].
7. **Tailles avec diamètre en mm** [V][R4]. Pour JR : taille israélienne, française et diamètre.
8. **Exception de retour annoncée dans le panneau de gravure** (« non-returnable ») [V][R4], et exception européenne écrite pour les bagues configurées [V][R6]. Utile pour l'exception « fabriqué sur mesure » en Israël puis en France.
9. **Rendez-vous intégré au configurateur** : lieu, service et durée, créneaux du jour, liste d'attente [V]. Pour JR : rendez-vous à l'atelier de Ramat Gan ou en visio.
10. **La faille à exploiter** : VRAI ne dit rien de la fabrication (aucun suivi [R15]) et son visuel reste « Shown with 1.5ct » avec une pierre de 2,18 ct [V][R4]. « Voir naître son bijou » et le modèle issu du fichier de fabrication répondent exactement à ces deux manques [I].
11. **Certificat indépendant** : VRAI n'a que son certificat maison [V][R3]. Le GIA ou l'IGI dès 0,50 ct de JR est un argument face aux marques intégrées [I].

## Défauts observés

1. **Le rendu ne suit pas la pierre** : vues « Shown with 1.5ct » au récapitulatif avec une pierre de 2,18 ct [V][R4].
2. **Lenteurs** : vue de la pierre en 14 s (ordinateur et iPhone) ; tiroir du sac 10 à 13 s après « ADD TO BAG » [V].
3. **Fenêtre de cookies bloquante** à la première visite, sur ordinateur et iPhone [V].
4. **Taille présélectionnée** : 5 par défaut, transmise par l'adresse (`ringSize=5`) sans choix du visiteur [V]. Risque de commande à la mauvaise taille [I].
5. **Lien « FAQs » mort** (`help.vrai.com` : 404) [V][R17].
6. **Titres incohérents** : « Signature Ring » pour des variantes à halo caché (bicolore jaune + platine, corps Large) [V][R1].
7. **Accessibilité** : icônes e-mail et fermeture du panneau de pierre sans nom accessible [V].
8. **Livraison payante** aux États-Unis (10 $ ou 50 $) [V][R5]. **Frais de retour de 300 $** sur une bague [V][R6].
9. **Informations de paiement divergentes** : Klarna dans la description de page seulement ; plafond 65 000 $ sur le site, 70 000 $ dans l'aide [V][R7][sec.][R16].
10. **Pas de pierre sous 1 ct** dans la liste du constructeur (curseur à partir de 1,0 ct) [V][R2]. Hors de portée d'une bague à 0,25 ct comme ring-001 [I].

## Temps d'apparition du visuel principal

Première image ou vidéo de plus de 250 px chargée et visible, ou LCP. Liaison de centre de données, valeurs indicatives (plusieurs essais quand indiqué).

| Page | Ordinateur | iPhone 13 émulé |
|---|---|---|
| Monture [R1] (3 essais ordinateur, 2 iPhone) | 1,35 à 2,84 s (LCP 0,85 à 2,11 s, photo) | 0,95 à 1,53 s (LCP 0,87 à 1,50 s) |
| Liste de pierres [R2] (2 essais) | 1re pierre 3,9 et 5,8 s (LCP 1,4 s, titre) | LCP 7,6 s (texte) ; vignettes de 130 px, non mesurées |
| Panneau de pierre, accès direct [R3] | 14,3 s | 14,1 s (canvas) |
| Récapitulatif [R4] (2 essais ordinateur) | 2,1 et 3,5 s | 4,0 s (LCP 3,5 s) |
| Tiroir du sac après « ADD TO BAG » | 13,3 et 10,2 s | non mesuré |

## Limites de l'audit

- **Paiement non vu** : robots.txt interdit `/checkout*`, `/account/*`, `/wishlist*`, `/customize/*` et les filtres d'inventaire hors parcours [V][R18]. Les adresses de pierre auditées portent `configurePath=configure`, autorisé. Frais de livraison et moyens de paiement viennent des pages de service, pas du paiement.
- **Non concluants ou non testés** : zoom de la photo, glisser sur la vue de la pierre (elle tourne seule), tri « Price Ascending », VIEW CERTIFICATE et « More about… » du récapitulatif, icône e-mail du panneau, carrousel « Spotted », Cookie Settings, bouton iPhone « need it sooner » (vu une fois). Aucun chat ouvert, aucun formulaire rempli (partage, gravure, lettre), aucun compte créé.
- La gravure n'a pas été saisie : l'ajout des 60 $ au prix est déduit du libellé [I].
- Pages d'aide lues par curl, sauf [R16] : extraits de recherche (Parallel Search), page de l'article sur le sur-mesure en 404 en accès direct. Firecrawl indisponible (crédits épuisés).
- **Captures** : 35 produites (avec une tentative antérieure), réduites à 17 dans `scratchpad/audit/us/vrai/`.

## Sources (lues ou actionnées le 15/11/2026)

- [R1] https://www.vrai.com/configure/setting-to-diamond/signature-prong/oval-yellow-gold-41178852851805 (et les variantes, ex. `oval-platinum-41178845216861`, `oval-yellow-gold-16169210314818`, `kite-yellow-gold-43085593804893`)
- [R2] https://www.vrai.com/en-US/configure/setting-to-diamond/signature-prong/oval-yellow-gold-41178852851805/diamond?settingDiamondType=oval&ringSize=5 (paramètres complets dans le lien « CONTINUE TO DIAMOND »)
- [R3] https://www.vrai.com/diamonds/inventory/oval?settingDiamondType=oval&ringSize=5&configurePath=configure%2Fsetting-to-diamond%2Fsignature-prong%2Foval-yellow-gold-41178852851805&diamond=F4000272
- [R4] https://www.vrai.com/configure/setting-to-diamond/signature-prong/oval-yellow-gold-41178852851805/review?diamondId=F4000272&ringSize=5
- [R5] https://www.vrai.com/shipping · [R6] https://www.vrai.com/returns-exchanges · [R7] https://www.vrai.com/payment-options
- [R8] https://www.vrai.com/lifetime-care-package · [R9] https://www.vrai.com/warranty · [R10] https://www.vrai.com/guarantees
- [R11] https://www.vrai.com/custom-engagement-rings · [R12] https://www.vrai.com/showrooms · [R13] https://www.vrai.com/cut-for-you
- [R14] https://help.vrai.com/en/knowledge/can-i-resize-my-ring · [R15] https://help.vrai.com/en/knowledge/where-can-i-find-a-status-update-on-my-order
- [R16, sec.] https://help.vrai.com/en-US/articles/ordering-and-payment-314451 · https://help.vrai.com/en-US/articles/policies-and-warranties-314453 · https://help.vrai.com/en-US/do-you-offer-custom-vrai-designs-1-2393494 (extraits de recherche)
- [R17] https://help.vrai.com (404) · [R18] https://www.vrai.com/robots.txt · [R19] https://www.vrai.com/cart (404)
