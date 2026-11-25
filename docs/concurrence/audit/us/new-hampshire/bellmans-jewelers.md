# Bellman's (Bellman Jewelers, New Hampshire)

- **Site** : Bellman's, https://bellmans.com/ (Shopify). Page de départ : https://bellmans.com/pages/bellmans-engagement-rings
- **Date** : 15/11/2026 (consigne) ; passage réel du 25/11/2026.
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13.
- **Statut** : **partiel**. Le site est lisible (HTTP 200, robots.txt lu et autorisant tout sauf panier, compte, paiement et quelques filtres) : l'inventaire du 24/11 le disait « bloqué » (403), ce n'est plus le cas. Il n'a **pas de configurateur** de bague ; l'audit couvre ses trois parcours en ligne (guide de bague sur mesure, quiz, recherche de diamants de synthèse) et une fiche produit. Le panier n'a pas été ouvert ni alimenté (voir « Limites »).
- Marque de fiabilité : [V] vérifié (page lue ou contrôle actionné, adresse citée), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| 1. Page `/pages/bellmans-engagement-rings` | Bandeau « Engagement Rings » + « Book now » ; liens vers quatre marques (Gabriel & Co., Simon G., CrownRing, Stuller : sites externes) ; vidéo « What you can expect from us » ; quiz ; bouton « Make an appointment » ; avis ; FAQ de 4 questions. [V] |
| 2. Bague sur mesure `/pages/custom-jewelry` | Processus en 4 pastilles (Appointment, CAD, 3D print, Finished) ; « Book a consultation » ; galerie de réalisations (flèches) ; FAQ de 4 questions. Aucune option de configuration en ligne. [V] |
| 3. Rendez-vous `/pages/engagement-ring-booking` | Calendly intégré (lieu, puis « virtual » en option) ; 3 étapes : rendez-vous, bague 3D imprimée, remise (envoi ou retrait). [V] |
| 4. Quiz `/pages/engagement-ring-quiz` | Questionnaire Veeform : « Je suis… » (donneur, receveur, ensemble, proche, autre), puis « pour ce projet je… » (sait exactement / images d'inspiration / quelques idées / aucune idée) ; fin avec champs prénom, nom, e-mail, téléphone. Arrêté avant ces champs. [V] |
| 5. Recherche de diamants de synthèse `/apps/vdb-app/search-filters?diamondSearchType=Lab_grown_Diamond&structure=new` | Filtres (forme, carat, couleur, fantaisie, pureté, taille, poli, symétrie, budget, avancés) → résultats (photo, prix) → fiche pierre (photo, 360°, certificat IGI, « Add to cart », « Inquiry »). [V] |
| 6. Catalogue `/collections/rings` (231 produits, 10 pages) | Grille avec prix « SALE PRICE » ; fiche produit sans option : photos, quantité, ajout au panier. [V] |
| 7. Panier `/cart` | **Non atteint** (aucun article ajouté : `/cart/add` interdit par robots.txt). |

## Contrôles vérifiés

Page de départ, ordinateur : 43 contrôles listés (controls.cjs) ; iPhone : 40 (le menu à tiroir remplace les liens de l'en-tête). Les doublons de liens ne sont pas répétés.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Navigation menu | bouton | Tiroir à gauche : Bridal, Fine Jewelry, Brands, Services, Buying Group, Our Brand, Locations, Contact Us. Sous-liens lus dans le DOM : Custom, Engagement Rings, Wedding Bands, Lab, Natural, Shop All, Rings, Earrings, Bracelets, Necklaces, Men's, Chains, Watches, Accessories & Care, quatre pages « Gifts under $250 / 500 / 1000 / 2500 », Gabriel & Co., Lashbrook, Silent Opus, Simon G., Maurice LaCroix, Tissot, Zeghani, Repair, Appraisals, Jewelry Insurance, Financing, Book an Appointment, About, The Bellman's Experience, Press & Blog | n/a | OK |
| Book now / Make an appointment now (×3) | lien | Ouvre `/pages/engagement-ring-booking` | n/a | OK |
| Browse Gabriel & Co. / Simon G. / CrownRing / Stuller | lien | Quitte le site vers le catalogue du fabricant (adresses avec paramètre `srsltid`) ; non suivi | non affiché chez Bellman's | OK (lien), destination non ouverte |
| Play « What you can expect from us » | bouton | Vidéo YouTube intégrée ; non lue | n/a | non testé (domaine externe) |
| Click here to take the quiz | lien | Ouvre le quiz ; « START » démarre un questionnaire Veeform | n/a | OK |
| Quiz « Je suis… » → « The Gift Giver » | choix | Passe à la question suivante ; en mobile non testé | n/a | OK |
| Quiz « For this ring I… » (« Select as many as you like ») | choix multiple | Plusieurs options cochables ; le clic sur le libellé d'instruction n'avance pas | n/a | OK ; suite non explorée (champs personnels) |
| Show previous / next reviews, Show review group 1–3 | boutons | Carrousel d'avis (9 avis, 3 groupes) | n/a | présents ; flèches non actionnées |
| Read more Google reviews | lien | `/pages/bellmans-reviews` | n/a | lien vérifié par robots.txt, page non lue |
| FAQ « Do you ship overseas? » | accordéon | « Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. » | frais au paiement | OK |
| FAQ « How long will it take to get my orders? » | accordéon | 5 à 7 jours ouvrés en États-Unis ; 7 à 16 jours à l'étranger | n/a | OK |
| FAQ « What happens if my ring does not fit? » | accordéon | Mise à taille initiale gratuite, en atelier, 24 à 48 h | gratuit | OK |
| FAQ « Can I supply my own center/side stones? » | accordéon | Service de conception gratuit ; vidéo CAO 3D gratuite pour validation | gratuit | OK |
| FAQ sur mesure (4 questions) | accordéons | Coût : « completely free » ; délai 2–3 semaines, options accélérées ; « What is CAD? » ; pourquoi une cire imprimée en 3D (voir taille, échelle, proportions) | gratuit | OK |
| FAQ rendez-vous (3 questions lues) | accordéons | Assurance : expertise envoyée par e-mail sous 2 semaines, 10 jours de couverture offerts par Lavalier ; financement Wells Fargo, 12 mois sans intérêts sous approbation, pas de layaway | n/a | OK |
| Calendly intégré | iframe | Calendrier de réservation, 420 px de haut ; non utilisé | n/a | non testé (formulaire de réservation) |
| Call Us | lien `tel:` | Appel au 603-625-4653 | n/a | OK (lien) |
| Login | lien | Redirige vers `customer_authentication/redirect` (compte) ; non suivi | n/a | non testé (compte interdit) |
| Search | lien | `/search` | n/a | présent, non lancé |
| Cart | lien | `/cart` | n/a | non ouvert (voir Limites) |
| Lab-grown : « Round » (forme) | filtre | Sélectionne la forme ; l'adresse reçoit `shapes=Round` | filtre le prix | OK |
| Lab-grown : « Search » | bouton | 35 416 résultats (Round, 0 à 20 ct, budget 0 à 100 000 $) ; ~5 s | prix par pierre | OK |
| Lab-grown : filtres Shape (13 formes), Carat (0–20 ct), Color (D à Y), Fancy (14 couleurs), Clarity (FL à I3), Cut, Polish, Symmetry, Budget, Advanced | filtres | Présents ; seuls forme et budget actionnés. Nombre de formes visibles par défaut : 12, flèche « Next » pour le reste | filtre le prix | forme OK, autres non actionnés |
| Résultats : sélecteur « Sort », champ de texte, « Modify Search », « New Search », « Share » | contrôles | Présents ; non actionnés | n/a | non testé |
| Résultats : cases à cocher sur chaque pierre | cases | Visibles sur chaque carte (usage de comparaison supposé [S]) | n/a | non testé |
| Fiche pierre (clic sur une carte) | volet modal | Photo, vignette vidéo, vignette certificat ; détail : stock, labo IGI, forme, carat, couleur, pureté, taille, poli, symétrie, fluorescence, profondeur, table, girdle, culet, dimensions, ratio, BGM. Exemple vérifié : Round 0,32 ct D SI2, 98 $ | 98 $ | OK |
| Fiche pierre : vignettes vidéo et certificat | vignettes | Ouvrent une visionneuse 360° (`Vision360.html`, hébergée sur un stockage externe) ; la vignette certificat n'a pas montré de document distinct (même cadre relevé) | n/a | partiel |
| Fiche pierre : « Add To Cart » | bouton | Non cliqué (panier interdit par robots.txt) | n/a | non testé |
| Fiche pierre : « Inquiry – Reach out » | bouton | Non cliqué (formulaire) | n/a | non testé |
| Fiche bague : photos (4), points de navigation, quantité (− / +), « ADD TO CART », « BOOK AN APPOINTMENT », « WARRANTY », « RETURNS » | contrôles | Carrousel de 4 photos ; garanties et retours en accordéons (textes ci-dessous) ; aucune option de métal, taille ou pierre | prix fixe 1 795 $ (bande 14 k jaune, 13 diamants de synthèse 0,71 ct tw) | accordéons OK ; ajout non cliqué |
| Catalogue : « FILTER », « SORT BY », pagination 1…10 | contrôles | Présents ; tri non actionné (`sort_by` interdit par robots.txt) | prix par produit | non testé |
| Pied de page : About, Press, Reviews, Careers, Contact, FAQs, Jewelry Care, Zillion Insurance, Blog, quatre politiques, 5 réseaux sociaux | liens | Présents, adresses relevées | n/a | liens non tous suivis |

## Options disponibles

- **Bague sur mesure** : [V] consultation en magasin, par téléphone ou en visio (Zoom) ; pièces apportées (croquis, photos, CAO, modèle) ; CAO puis cire imprimée en 3D ; fabrication ; retrait ou envoi. Pas de choix de métal, pierre ou prix en ligne.
- **Pierres de synthèse (recherche en ligne)** : [V] formes Oval, Round, Emerald, Pear, Cush Brill, Radiant, Princess, Square, Asscher, Heart, Marquise, Euro Cut, Baguette ; couleurs D à Y et fancy (yellow, orange, pink, blue, green, brown, red, white, violet, purple, gray, olive, black, other) ; puretés FL à I3 ; coupe 8X à Fair.
- **Diamants naturels** : [V] entrée « Natural » dans le menu vers `/pages/diamond-inventory-1` ; la page rendue ne contient aucun contenu de recherche (texte seul : en-tête et pied de page). Non exploitable ici.
- **Catalogue** : [V] 231 bagues (page 1 : bagues de mode, bandes, alliances, hommes) ; marques Gabriel & Co., Simon G., Lashbrook, Silent Opus, Bujukan, Zeghani ; montres Tissot, Maurice LaCroix.
- **Services** : [V] réparation, expertise, assurance (Zillion), financement (page Wells Fargo, affichage Affirm chargé), « Buying Group » (rachat), mise à taille offerte.
- **Langues / devise** : [V] anglais, dollars américains uniquement ; aucun sélecteur de langue ou de devise relevé.

## Prix, délais, retours, garanties

- **Prix** : [V] affichés sur les fiches (« SALE PRICE ») : de 250 $ à 5 750 $ sur la première page de `/collections/rings` ; pierres de synthèse à partir de 98 $ (0,32 ct). Pas de décomposition (métal, façon, pierre) ; aucun prix sur le sur-mesure.
- **Sur mesure** : [V] « completely free » jusqu'à la bague 3D imprimée, « no cost and no obligation » ; délai « 2–3 weeks » avec options accélérées (FAQ `/pages/custom-jewelry`).
- **Livraison** : [V] UPS ; commandes avant 14 h expédiées le jour même ; 5 à 7 jours ouvrés (États-Unis), 7 à 16 jours à l'étranger ; fiche produit : livraison standard gratuite (5-8 jours ouvrés) au-delà de 100 $ et prioritaire (1-3 jours) au-delà de 250 $. Expédition mondiale, frais ajoutés au paiement.
- **Retours** : [V] `/policies/refund-policy` : 15 jours, reçu conseillé, article non porté ; « Any merchandise that has been special ordered, customized or custom made cannot be returned or exchanged » ; articles gravés ou mis à taille non repris. Pierres de synthèse : « non-refundable » (bandeau de la recherche et de la fiche). Estate / consignation : retour complet sous 10 jours, avoir sous 30 jours, vente ferme ensuite (accordéon de la fiche).
- **Garantie** : [V] pièces d'occasion vendues « as-is » sans garantie ; aucune garantie explicite sur les pièces neuves dans l'accordéon lu.
- **Financement** : [V] page `/pages/financing-1` « Buy Now. Pay Later » avec crédit renouvelable ; FAQ : Wells Fargo, 12 mois sans intérêts sous approbation ; scripts Affirm chargés.
- **Mise à taille** : [V] initiale gratuite, 24 à 48 h.

## Confiance et service

- [V] Avis : « 4.9 STARS, 500+ REVIEWS » (Google) et neuf extraits d'avis signés d'un prénom et d'une initiale ; page d'avis séparée non lue.
- [V] Deux boutiques (Manchester, 1650 Elm St. ; Boston Seaport, 268 Summer Street) avec horaires ; téléphone ; rendez-vous (Calendly) en magasin, par téléphone ou en visio.
- [V] Assurance : expertise d'assurance envoyée sous 2 semaines, 10 jours de couverture offerts ; partenaire Zillion.
- [V] Certificats : IGI sur les pierres de synthèse ; visionneuse 360° de la pierre.
- [V] Libellé du synthétique : « Lab Grown » / « Lab-Grown Diamond » ; avertissement de non-remboursement.
- [V] Preuves de fabrication : vidéo CAO 3D gratuite pour valider ; cire imprimée en 3D à examiner (« 3D RING » dans les étapes). Galerie « Custom design gallery » avec flèches ; images de réalisations non comptées. Pas de suivi de commande propre au sur-mesure relevé ; e-mail avec suivi UPS à l'expédition.
- [V d'après index, inventaire du 24/11] « You'll even receive a copy of the wax model to keep » : phrase de `/pages/custom-jewelry` non retrouvée dans le texte rendu le 25/11 (la page actuelle parle de « 3D printed ring » et de wax model sans cette phrase) ; à ne pas citer.
- [V] Assistant achats : robots.txt mentionne des points d'accès `agents.md`, `/.well-known/ucp`, `/api/ucp/mcp` ; non utilisés.

## Points forts à retenir pour JR Diamond

1. **Bague 3D imprimée avant fabrication, gratuite et sans engagement** : « There's no cost and no obligation » jusqu'à la création de la bague imprimée (FAQ sur mesure, `/pages/custom-jewelry`). Proche de « ce que vous voyez existe » : à égaler avec le modèle issu du fichier de fabrication.
2. **Pierres de synthèse avec photo réelle, vidéo 360° et certificat IGI, prix par pierre** : fiche de la pierre C181768 (0,32 ct D SI2, 98 $) avec dimensions au centième (4,33×4,36×2,72) et visionneuse 360°. Montre le niveau d'attente sur la transparence d'une pierre.
3. **Nombre de filtres de la recherche de pierres** : 10 filtres et 35 416 résultats pour la forme ronde, forme, carat, couleur D à Y et fancy, pureté, coupe, poli, symétrie, budget.
4. **Contrôle du sur-mesure expliqué en trois mots** (« What is CAD? », « Why do I need a 3D Printed Wax Mold? ») : réponses courtes qui expliquent l'intérêt de la maquette (voir taille, échelle, proportions).
5. **Rendez-vous en visio proposé dès la page d'accueil** (« in-person, call, or zoom ») : accès pour un client éloigné ; utile pour la France.
6. **Livraison annoncée avec seuils** : standard gratuite au-dessus de 100 $, prioritaire gratuite au-dessus de 250 $ (fiche produit).
7. **Rapidité d'affichage** : visuel principal en 0,6 à 0,9 s (voir ci-dessous).
8. **Assurance incluse à l'achat** : couverture offerte 10 jours et expertise sous 2 semaines : réponse à la peur du vol ou de la perte après achat.

## Défauts observés

- **Aucun configurateur** : le sur-mesure passe obligatoirement par un rendez-vous ; pas de prix ni de visuel avant la rencontre.
- **Pierres de synthèse « non-refundable »** annoncé deux fois (page de recherche et fiche) ; le sur-mesure n'est ni repris ni échangé : moins rassurant que l'exception du droit de la consommation expliquée.
- **Garantie illisible pour du neuf** : l'accordéon « WARRANTY » ne traite que les pièces d'occasion (« as-is »).
- **Page des diamants naturels vide** (`/pages/diamond-inventory-1`) : aucun contenu rendu.
- **Quiz** : sans résultat visible avant des champs de contact ; les options à choix multiples n'indiquent pas ce qu'elles font.
- **Horaires incohérents** : « Thur: 12am – 8pm ET » pour Boston (probablement 12 pm) ; mention du pied de page.
- **Liens de marques** renvoient hors du site, avec paramètres de suivi.
- **Aucun prix décomposé**, aucun choix de métal ni de titre en ligne ; pas d'essayage à domicile, pas de 3D, AR ni zoom sur la fiche bague (4 photos).

## Limites de l'audit

- **Panier non audité** : `/cart/add` est interdit par robots.txt, donc aucun ajout ; l'ouverture de `/cart` (autorisée) a été tentée dans un script groupé et refusée par le contrôle de l'environnement, puis non retentée. Récapitulatif, frais de livraison réels, délai et moyens de paiement du panier : **non vus**.
- Ordinateur et iPhone mesurés ; la recherche de diamants, le quiz et la fiche pierre n'ont été actionnés que sur ordinateur (la fiche produit sur les deux).
- Quiz arrêté à la 2e question (champs personnels en fin de parcours, formulaire interdit).
- Rendez-vous (Calendly), formulaire « Inquiry », vidéo YouTube, pages Calendly/YouTube/Veeform/Affirm non ouvertes ; domaine du stockage 360° non contrôlé par robots.txt (requête faite par la page à son ouverture).
- Tri et filtres de catalogue non actionnés (`sort_by` et filtres combinés interdits). Pages « About », « Experience », avis et boutiques non lues.
- Délais mesurés avec un proxy d'environnement (une seule mesure par appareil, variable).
- Temps d'apparition du visuel principal [V] : page de départ, image d'ouverture chargée en 862 ms (ordinateur) et 631 ms (iPhone) ; fiche bague : premier visuel visible en 0,87 s (ordinateur) et 0,92 s (iPhone), chargé à 1,1 s.

## Sources

- robots.txt : https://bellmans.com/robots.txt (lu 25/11 ; `Disallow: /cart/`, `/checkout`, `/account`, `/collections/*sort_by*`, filtres combinés ; commentaires adressés aux agents ignorés).
- Pages lues : https://bellmans.com/pages/bellmans-engagement-rings ; /pages/custom-jewelry ; /pages/engagement-ring-booking ; /pages/engagement-ring-quiz ; /pages/financing-1 ; /pages/repairs ; /policies/refund-policy ; /policies/shipping-policy ; /collections/rings ; /products/14k-yellow-gold-lab-grown-round-diamond-band ; /apps/vdb-app/search-filters?diamondSearchType=Lab_grown_Diamond&structure=new ; /pages/diamond-inventory-1 ; /pages/bellmans-wedding-bands.
- Fiche d'inventaire : docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md (fiche 5, bloquée le 24/11, désormais dépassée).
- Captures et scripts : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/bellmans/ (hors dépôt).
