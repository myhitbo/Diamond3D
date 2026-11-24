# Audit : Ritani (États-Unis, vendeurs nationaux)

- **Site** : Ritani (Ritani, LLC, White Plains, État de New York), https://www.ritani.com. Page de départ : https://www.ritani.com/custom-engagement-ring (« Ring Studio »).
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur), depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué**. Le navigateur reçoit une page Cloudflare « Sorry, you have been blocked » (HTTP 403, Ray ID a5af002eab11fa17) dès la page de départ [V][R2]. Conformément aux règles, aucun nouvel essai ni contournement. Aucun contrôle n'a pu être actionné.
- **Ce qui a été lu** : robots.txt (servi normalement, 200) [V][R1] ; le texte des pages du site tel que le restituent les extraits d'un moteur de recherche (Parallel) et trois copies en cache. Ces lectures décrivent le site, elles ne remplacent pas un essai.
- Complète la fiche Ritani de `docs/concurrence/2026-11-15_etats-unis.md` ([V47] à [V55]) : chaque point de la fiche est revérifié ou corrigé ci-dessous.
- **Légende** : [V] vu dans le navigateur ou par curl ; [Vc] texte du site lu dans un extrait de recherche ou une copie en cache (date de la copie quand elle est connue), non actionné ; [T] affirmation d'un tiers, lue (avis, presse, communiqué) ; [I] inféré ; [S] supposé. Prix en dollars US.

## Parcours

Reconstitué à partir du texte des pages, sans navigation : l'ordre et le contenu des étapes 2 et suivantes du Ring Studio ne sont pas vérifiés.

| Étape | Options |
|---|---|
| 0. Menu « Engagement Rings » [R17] | Start With A Setting, Start With A Diamond, Start With A Lab Diamond, Start With A Gemstone, Design Your Own Ring (Ring Studio) ; styles, formes, métaux [Vc] |
| A1. Ring Studio, étape « 1. Center Stone » [R2] | Round, Oval, Cushion, Emerald, Radiant, Pear (6 formes) ; « 360° VIEW », « RESET », « < PREV », « NEXT > », « Total » ; « Starting at: $400.00 $340.00 » [Vc, copie du 14/11] |
| A2. Étapes suivantes du Ring Studio [R5] | Annoncées : pierre certifiée (naturelle ou synthétique, carats, couleur, taille, forme), métal, style de monture, largeur du corps, griffes, pierres d'accompagnement, finitions, gravure [Vc]. Non vues. |
| B1. Constructeur en 3 étapes [R14][R15][R16] | « 1. Diamond », « 2. Setting », « 3. Complete / Preview » : pierre ou monture d'abord [Vc] |
| B2. Liste des montures [R16] | Filtres forme, style, métal, griffes, forme et poids des pierres latérales, largeur, prix ; tri par prix [Vc] |
| B3. Fiche monture [R15] | Prix, « Add to your Ring », date de livraison, financement, « Free Diamond Preview » [Vc] |
| B4. Fiche pierre [R14] | Photo ou vidéo 360°, comparateur, taille sur la main, « The Honest Read », décomposition du prix, lecture du certificat, « Visual Carat », « Add To » [Vc] |
| C. Sur mesure avec un dessinateur [R5] | « MEET A DESIGNER » : rendu CAO, révisions, validation avant fabrication ; 150 $ non remboursables, déduits de l'achat [Vc] |
| D. Panier `/cart`, paiement `/checkout` | Non atteints : site bloqué, et chemins interdits par robots.txt [V][R1] |

## Contrôles vérifiés

Aucun contrôle actionné. Les libellés viennent du texte des pages ; l'effet décrit est celui que la page annonce.

| Libellé | Type | Effet annoncé (non observé) | Prix | État |
|---|---|---|---|---|
| **Page de blocage Cloudflare [R2]** | | | | |
| Click to reveal ; lien Cloudflare | bouton, lien | Affiche l'adresse IP ; page d'aide Cloudflare | — | Relevés par controls.cjs, non actionnés |
| **En-tête (toutes pages) [R3]** | | | | |
| PREVIEW LOCATIONS | menu | Lieux de l'aperçu en personne | — | Non testé : blocage |
| CONTACT US ; Login or Sign Up | liens | `/pages/contact-us` ; compte | — | Non testé ; compte exclu par les règles |
| DIAMONDS, LAB DIAMONDS, ENGAGEMENT RINGS, WEDDING RINGS, JEWELRY, GEMSTONES, EDUCATION, REWARDS | menus | Sous-menus listés plus bas | — | Non testé : blocage |
| RING STUDIO ; RING BUILDER | liens | Ring Studio ; constructeur en 3 étapes | — | Non testé : blocage |
| RITANI REWARDS ; WISHLIST | liens | Programme de points ; liste de souhaits | — | Non testé : blocage |
| CHAT WITH A VIRTUAL GEMOLOGIST | bouton | Conversation avec un gemmologue | — | Non ouvert (règles) et bloqué |
| Recherche ; panier | icônes | `/search` et `/cart`, interdits par robots.txt | — | Non testé |
| Oscar the AI Gemologist ; MY WORKSHOP | boutons flottants | Assistant IA ; projet en cours | — | Non testé : blocage |
| **Ring Studio [R2]** | | | | |
| 6 formes (Round … Pear) | boutons | Choix de la pierre centrale | « Starting at » 340 $ (400 $ barré) | Non testé : blocage |
| 360° VIEW | bouton | Vue tournante de la bague | — | Non testé : rendu inconnu (3D ou images) |
| RESET ; < PREV ; NEXT > ; Info | boutons | Réinitialiser, naviguer entre étapes, aide | — | Non testé : blocage |
| Total | texte | 400 $ barré, 340 $ | −15 % | Lu [Vc] |
| **Fiche monture [R15]** | | | | |
| Add to your Ring | bouton | Ajoute la monture au projet | 2 986 $ (14 k blanc) | Non testé : blocage |
| Date de livraison (infobulle) | texte | « Order by 12pm today to get it by 11/21/2026 » ; « Your delivery date will change when you add a diamond » | — | Lu [Vc] |
| Flexible payment options | texte | « $702/mo over 12 months at 0% APR » | Voir Défauts | Lu [Vc] |
| Free Diamond Preview | lien | Aperçu en personne | — | Non testé : blocage |
| **Fiche pierre [R14]** | | | | |
| Compare | bouton | Comparaison côte à côte | — | Non testé : blocage |
| 360 video ; Diamond Video ; Diamond Size Reference | vues | Vidéo de la pierre ; photo de main de 0,75 à 3 ct | — | Non testé : blocage |
| Full Price Breakdown (infobulle) | texte | Coût de gros, frais d'acheminement, marge, total | Voir Prix | Lu [Vc] |
| Numéro IGI | lien | igi.org/verify-your-report | — | Non testé |
| Add To | bouton | Ajout au panier ou à la bague | — | Non testé : blocage |
| **Liste des montures [R16]** | | | | |
| Shape, Style, Metal, Prong Type, Sidestone Shape, Carat Weight, Band Width, Price (Min, Max) | filtres | Listes complètes ci-dessous | — | Non testé : blocage |
| Price: Low to High / High to Low ; Clear all ; View results | tri, boutons | Tri et remise à zéro | — | Non testé : blocage |
| Pastilles de métal des vignettes ; badge vidéo | boutons | 14kt ×2, 18kt ×3, PT ; vidéo de la bague | — | Non testé : blocage |
| **Outil de transparence [R4]** | | | | |
| Check Price → ; Compare Diamonds → | boutons | Comparer le prix d'une même pierre GIA ou IGI | — | Non testé : blocage |
| GIA Certificate Lookup | lien | Pointe vers la même page [Vc] | — | Non testé |
| 6 questions de la FAQ | accordéons | Trois réponses sont des consignes internes (voir Défauts) | — | Lu [Vc, copie du 11/11] |
| **Suivi de commande [R3]** | | | | |
| TRACK PACKAGE ; champ de recherche | bouton, champ | Suivi d'un colis | — | Non testé (aucune commande, blocage) |
| **Autres pages** | | | | |
| Schedule a Preview ; Learn More ; GET EXPERT GUIDANCE [R6][R17] | liens | Page de l'aperçu ; contact d'un gemmologue | — | Non testé : blocage |
| DESIGN YOUR RING ; MEET A DESIGNER [R5] | liens | Ring Studio ; sur mesure CAO | 150 $ déduits | Non testé : blocage |
| Ring Recommender (blog) : prix, forme, type, style ; FIND MY RING [R25] | listes, bouton | Propose une bague selon le budget | — | Non testé : blocage |
| Téléphone 1.888.9RITANI | lien tel: | +1 888 974 8264 | — | Relevé [Vc] |

Non relevés faute d'accès (à auditer si le blocage cesse) : taille de doigt, gravure, titre du métal dans le Ring Studio, partage, enregistrement, guide des tailles sur la fiche, essayage sur la main ou AR, zoom.

## Options disponibles

- **Formes** : 10 dans la recherche de pierres et les montures (Round, Cushion, Princess, Asscher, Oval, Emerald, Radiant, Heart, Pear, Marquise) ; **6 seulement** à l'étape 1 du Ring Studio (Round, Oval, Cushion, Emerald, Radiant, Pear) [Vc][R2][R3].
- **Métaux** : filtres des montures, 6 valeurs (or 14 k blanc ou jaune ; or 18 k blanc, jaune ou rose ; platine) [Vc][R16]. Page du Ring Studio : 5 (platine, or 18 k blanc, jaune ou rose, or 14 k blanc) [Vc][R5]. Or 18 k sans nickel : +100 $ (article de 2023) [Vc][R24]. Hommes : cobalt, tantale, tungstène [Vc][R3].
- **Styles** : Solitaire, Sidestone, Bezel, Hidden Halo, Halo, Curved, East-West, Toi et Moi, Three Stone, Kite-Set, Cathedral, Luxe, Unique, Vintage [Vc][R16].
- **Griffes** : 4, 6, 8, double, demi-clos (Half Bezel), serti clos (Full Bezel) [Vc][R16].
- **Pierres latérales** : rond, marquise, baguette, poire, princesse ; poids : aucune, < 0,25, 0,25–0,50, 0,50–1,00 ct [Vc][R16]. **Largeur du corps** : 6 tranches de 1–2 à 6–7 mm [Vc][R16].
- **Pierres** : diamants naturels, synthétiques, de couleur naturels et synthétiques, « Ritani Reserve Ideal Cut » ; émeraudes, rubis, saphirs, 10 couleurs de pierres [Vc][R3]. Certificats : GIA, IGI, GCAL ; AGSL cité pour l'échange [Vc][R13][R7].
- **Tailles de doigt, gravure** (caractères, polices) : non trouvées dans le texte lu. Gravure gratuite annoncée [Vc][R8].

## Prix, délais, retours, garanties

- **Affichage** : Ring Studio « Starting at » 340 $ (400 $ barré) [Vc][R2]. Montures de 880 $ (The Geneva, 14 k) à 3 825 $ dans les listes lues ; code TREAT30 (−30 % sur les montures, date non connue) [Vc][R16]. Bandeau du 19/10 : −2 % sur des pierres naturelles et −3 % de plus avec SAVE3 [Vc][R3].
- **Décomposition du prix de chaque pierre** (« Price Intelligence », tableau « Full Price Breakdown ») [Vc][R14]. Le libellé de la marge compare à l'usage du métier : « Ritani Markup (industry avg. 2x) ».
  - 3,50 ct ovale synthétique IGI E SI1 : coût de gros 314,89 $ + frais d'acheminement 202,75 $ + marge 504,36 $ = 1 022 $.
  - 1,74 ct rond synthétique IGI E VS1 : 243,34 + 175,38 + 384,28 = 803 $.
  - 8,10 ct ovale synthétique IGI E VS1 : 845,00 + 381,38 + 1 224,62 = 2 451 $.
  - Calcul : la marge fait 48 à 50 % du prix, soit environ 1× les coûts (pierre + acheminement). Le prix vaut 2,9 à 3,3 fois le coût de gros [I].
  - Les « frais d'acheminement » valent 45 à 72 % du coût de la pierre : ils semblent comprendre plus que le transport (certificat, assurance, frais fixes) [S].
  - Définition donnée par le site : « FULFILLMENT COST: How much we had to pay for shipping, duties, and customs » [Vc][R13].
- **Monture** : prix seul, sans décomposition [Vc][R15]. **Aucune décomposition relevée pour le métal ni la façon** [I].
- **Délais** : date calculée sur la fiche (« get it by 11/21/2026 » pour une monture), recalculée avec la pierre [Vc][R15]. FAQ : « three days to two weeks » pour une bague selon le modèle [Vc][R7]. Accueil : date estimée donnée à la commande [Vc][R17].
- **Livraison** : FedEx Overnight gratuit dès 1 000 $ ; en dessous, 2 jours gratuit ou 24,95 $ en express [Vc][R7][R8]. La page Shipping dit « complimentary… on all orders… via FedEx Priority Overnight » [Vc][R10]. Signature, assurance, colis neutre ; Canada payant, droits en sus [Vc][R8][R10].
- **Retours** : 30 jours, 2 retours ou échanges par an, étiquette FedEx prépayée [Vc][R7][R9].
  - Point de départ : « within 30 days of shipment » [Vc][R9] ; à la livraison au Diamond Pro pour un aperçu [Vc][R6].
  - Exclusions, selon la page :
    - services : « Custom eternity rings, custom jewelry, engraved jewelry, and any special orders or custom styles cannot be returned or exchanged » [Vc][R8] ;
    - retours : personnalisé et sur mesure exclus, « excluding engagement rings and wedding bands » [Vc][R9].
  - Certificat manquant : 200 $ retenus [Vc][R8]. Frais d'envoi non remboursés [Vc][R9]. Conditions de vente : 15 jours pour une pierre seule [T][R22].
- **Garantie** : à vie contre les défauts de fabrication, bagues de fiançailles et alliances de marque Ritani. À activer sous 45 jours par formulaire [Vc][R11].
  - Comprend le resserrage des pierres et le nettoyage, ce dernier avec 35 $ de port aller [Vc][R11].
  - Annulée si un autre bijoutier intervient sans accord [Vc][R7]. Assurance JM Care Plan (Jewelers Mutual) proposée au paiement [Vc][R17].
- **Mise à taille** : 1 gratuite la première année, port aller-retour offert aux États-Unis et au Canada ; exclus : alliances tour complet, cobalt, titane, palladium [Vc][R7][R8]. Baguier gratuit (États-Unis) [Vc][R8].
- **Échange de pierre** : naturel GIA ou AGSL acheté sur le site, crédit de 100 % vers une pierre d'au moins **3,5×** (2,5× avant le 14/11/2024). Synthétique exclu ; États-Unis seulement [Vc][R7][R8]. Rachat « Ritani Reclaim » [Vc][R8].
- **Alignement de prix** : même pierre, même certificat [Vc][R16] ; « we can't sell below our costs » [Vc][R14].
- **Paiement** : Visa, Mastercard, Amex, Discover, PayPal ; jusqu'à 3 cartes ; virement avec 2 % de remise [Vc][R8]. Affirm et Klarna [Vc][R17]. Klarna en 4 fois jusqu'à 2 000 $ [Vc][R12, page de 2021]. Carte Ritani (Synchrony) : 12 mois sans intérêt ou 9,99 % sur 36 ou 60 mois [Vc][R12, page de 2021]. Remise militaire 1,5 % [Vc][R8].
- **Certificats** : numéro IGI sur la fiche, lien de vérification igi.org [Vc][R14]. **Libellé du synthétique** : « Lab-Grown Diamond » (titres), « Lab Diamond » (menus) [Vc][R14][R3].
- **Langues et devises** : anglais et dollar seulement dans le texte lu [I] ; « International FAQs » [Vc][R10].

## Confiance et service

- **Aperçu en personne gratuit** (« Free Preview with a Diamond Pro ») [Vc][R6] :
  - commandes de 1 500 $ et plus, à choisir comme mode de livraison ;
  - empreinte bancaire « similar to a hotel reservation », sans débit ;
  - le Diamond Pro appelle sous 48 h, en semaine de 9 h à 17 h, dans un « private office near you » ;
  - le rendez-vous a lieu sous 7 jours, sinon la commande repart. Paiement seulement si l'on garde la bague.
  - Tiers : 2 aperçus par an, règles du panier différentes au paiement ; anciennement WeWork et bijoutiers partenaires [T][R22].
- **Suivi en 7 étapes** (page `/tracker`) [Vc, copie du 19/10][R3] :
  - Design & CAD (validation avant production), Order Confirmed, Diamond Sourcing, Crafting, Polishing & QA, Final Review, Shipped ;
  - images HD de la pièce finie « available for your review upon request », avec la réserve « Imagery Requests may hold up shipping time ».
- **Preuves de fabrication** : atelier à White Plains (« manufacture our jewelry in-house ») [Vc][R13]. Images HD des pierres sous 48 h ouvrées sur demande [Vc][R7]. Aucune photo ni vidéo d'atelier relevée [I].
- **Assistant IA « Oscar »** : lancé officiellement le 4/11/2026, « integrated throughout » la recherche de pierres [T][R19]. Gemmologues « no commission, no pressure » [Vc][R6].
- **Avis** :
  - Trustpilot 3,7/5 sur 594 avis (« Average ») [T][R20] ;
  - selon Ritani au 3/11/2026 : Google 4,5 sur 864 avis, Yotpo 4,9 sur 813 [Vc][R18] ;
  - BBB : accrédité A+, 6 plaintes en 3 ans, avis 2,75/5 sur 8 [T][R21] ; Yelp 3,0 sur 27 [T][R23].
- **Plaintes récurrentes** [T][R20][R21][R22] :
  - erreurs d'exécution : 4 griffes livrées au lieu de 6, mise à taille ratée deux fois ;
  - photo sur triboulet promise puis non faite ;
  - poinçon « 750 » frappé sur une bague en platine ;
  - pierres indisponibles après commande (« virtual inventory »).
- **Contact** : 1-888-974-8264, care@ritani.com, chat [Vc][R3][R7]. Fondée en 1999 [Vc][R18].

## Points forts à retenir pour JR Diamond

1. **Prix de la pierre décomposé en chiffres** : coût de gros, acheminement, marge, total [Vc][R14]. La marge observée (48 à 50 % du prix [I]) est un repère pour la règle de bénéfice de `src/config/pricing.ts`. JR peut aller plus loin en décomposant aussi le métal (au gramme), la façon et le sertissage, que Ritani ne montre pas [I].
2. **Suivi en 7 étapes, CAO validée avant fabrication** [Vc][R3]. Chez Ritani, les images de la pièce finie sont sur demande et retardent l'envoi. Pour JR : photos et vidéos à chaque étape, par défaut, sans retarder la livraison [I].
3. **Voir avant de payer, sans débit** (empreinte, 7 jours, 1 500 $ minimum) [Vc][R6]. Pour JR : rendez-vous à l'atelier de Ramat Gan avec la même règle. Préautorisation à vérifier auprès du prestataire de `docs/PAIEMENT.md` [S].
4. **Sur mesure CAO à 150 $, déduits de l'achat** [Vc][R5] : un modèle simple pour le bijou de famille et les demandes hors configurateur.
5. **Date de réception calculée sur la fiche**, avec l'avertissement qu'elle changera avec la pierre [Vc][R15].
6. **Fiche pierre pédagogique** [Vc][R14] : « The Honest Read » (éclat, propreté à l'œil, fluorescence, taille apparente, valeur), lecture du certificat et lien de vérification IGI.
7. **Règles qui protègent la marge, annoncées** : 2 retours par an, 200 $ si le certificat manque, échange réservé au naturel [Vc][R8][R9].
8. **Leçon des plaintes** : les erreurs d'exécution (griffes, taille, poinçon) sont le premier motif de mauvais avis [T][R20][R21]. La photo de contrôle avant envoi (taille sur triboulet, poinçon, griffes), promise mais oubliée chez Ritani, est exactement ce que la promesse « on voit naître son bijou » de JR peut garantir [I].

## Défauts observés

1. **Blocage des visiteurs** : Cloudflare refuse la page de départ à un navigateur ordinaire depuis un centre de données [V][R2]. Les acheteurs derrière un VPN ou un réseau d'entreprise pourraient l'être aussi [S].
2. **Consignes internes publiées comme réponses**, FAQ de l'outil de transparence [Vc, copie du 11/11][R4] :
   - « Confirm supported inventory and report types with product/engineering before publishing the answer. » ;
   - « Explain actual fallback behavior after verifying the live workflow. » ;
   - « Explain update frequency… verify actual policy language. »
3. **Retours contradictoires** :
   - départ du délai : expédition [R9], livraison (FAQ, selon un tiers) [T][R22] ou arrivée chez le Diamond Pro [R6] ;
   - sur-mesure : exclu sans réserve [R8], mais bagues de fiançailles et alliances exceptées [R9] [Vc].
4. **Livraison contradictoire** : express gratuit pour toute commande [R10], ou seulement dès 1 000 $ [R7][R8] [Vc].
5. **« Stock image »** sur certaines fiches de pierre (ex. 3,14 ct ovale) [Vc][R14] : la photo n'est pas celle de la pierre vendue. Sur des pierres IGI, la rubrique s'intitule « What the GIA report actually means » [Vc][R14].
6. **Mensualité incohérente** : « $702/mo over 12 months » (8 424 $) sur une monture à 2 986 $, avec le texte « Split this diamond » sur une fiche sans pierre [Vc][R15] [I].
7. **Ring Studio plus pauvre que le catalogue** : 6 formes contre 10, 5 métaux contre 6 [Vc][R2][R5][R16].
8. **Écart entre les avis** : 4,9 sur la plateforme de Ritani, 3,7 sur Trustpilot [Vc][R18][T][R20].

## Temps d'apparition du visuel principal

Non mesurable : aucune page du site n'a été servie au navigateur. Seule la page de blocage s'est affichée, sur ordinateur [V].

## Limites de l'audit

- **Statut bloqué** : une seule visite de la page de départ, refusée (403). Pas de second essai, pas d'affichage iPhone : changer d'identité de navigateur après un blocage est exclu par les règles. Pas de passage par l'autre nom d'hôte du magasin (`website.ritani.com`).
- **Aucun contrôle actionné** : effets sur le prix et l'image, rendu du 360° (3D ou photos), taille, gravure, partage, AR et zoom restent inconnus. Le tableau « Contrôles vérifiés » liste ce que le texte des pages annonce.
- **Panier non vu** : chemins `/cart`, `/carts`, `/checkout`, `/account` et `/search` interdits par robots.txt, comme toute adresse à paramètre sous un sous-dossier (`Disallow: /*/*?*`) [V][R1].
- **Sources indirectes** :
  - texte du site lu dans les extraits de recherche Parallel (dates de publication de 2021 à novembre 2026) et dans trois copies en cache (Ring Studio 14/11, outil de transparence 11/11, suivi 19/10) ;
  - après ces copies, la lecture d'autres pages de ritani.com par ce service a été refusée par le système d'autorisation de la session : aucune autre tentative ;
  - Firecrawl indisponible (crédits épuisés).
- **Non revérifiés** : prix exacts du jour, promotions en cours, conditions de vente (15 jours pour une pierre seule, selon un tiers), avis Google. Pages de financement et Klarna datées de 2021 [R12].
- Captures : 1 (page de blocage), dans `scratchpad/audit/us/ritani/`.

## Sources (lues le 15/11/2026, sauf mention)

- [R1] https://www.ritani.com/robots.txt (curl, 200)
- [R2] https://www.ritani.com/custom-engagement-ring (navigateur : 403 Cloudflare ; texte : copie en cache du 14/11)
- [R3] https://www.ritani.com/tracker (copie du 19/10, en-tête et pied de page compris)
- [R4] https://www.ritani.com/price-transparency-tool (copie du 11/11)
- [R5] https://www.ritani.com/pages/design-your-own-engagement-ring (extrait ; page datée du 16/09/2026)
- [R6] https://www.ritani.com/pages/free-in-person-preview (extrait ; 07/10/2026)
- [R7] https://www.ritani.com/pages/frequently-asked-questions (extrait ; 08/10/2026)
- [R8] https://www.ritani.com/pages/ritani-services (extrait ; 12/10/2026)
- [R9] https://www.ritani.com/pages/returns-and-exchanges (extrait)
- [R10] https://www.ritani.com/pages/shipping (extrait)
- [R11] https://www.ritani.com/pages/warranty (extrait)
- [R12] https://www.ritani.com/pages/financing · https://www.ritani.com/pages/klarna (extraits ; pages de 2021)
- [R13] https://website.ritani.com/pages/diamond-inventory · https://www.ritani.com/pages/diamond-price-transparency (extraits)
- [R14] https://www.ritani.com/products/3-50-carat-oval-lab-diamond-very-good-cut-e-color-si1-clarity-igi-lg743529864-sku-d-4zpzd9kzsz
  - même gabarit : `…/1-74-carat-round-lab-diamond-ideal-cut-e-color-vs1-clarity-igi-lg829614358-sku-d-5ul2cdd1qu` ;
  - `…/8-10-carat-oval-lab-diamond-very-good-cut-e-color-vs1-clarity-igi-lg817646829-sku-d-8jbyb78q5z` ;
  - `…/3-14-carat-oval-lab-diamond-very-good-cut-g-color-vs1-clarity-igi-lg627455360-sku-d-2p5ka35ny8` (extraits).
- [R15] https://www.ritani.com/products/solitaire-engagement-ring-with-v-prong-with-hidden-halo-head-80 (extrait)
- [R16] https://www.ritani.com/collections/engagement-rings · https://www.ritani.com/engagement-rings · https://www.ritani.com/collections/hidden-halo-engagement-rings (extraits)
- [R17] https://www.ritani.com/pages/engagement-rings · https://www.ritani.com/ (extraits)
- [R18] https://www.ritani.com/blogs/news/thousands-of-shoppers-recommend-ritani-customer-reviews-industry-recognition-what-makes-the-experience-different (11/11/2026)
- [R19] https://www.accessnewswire.com/newsroom/en/consumer-and-retail-products/ritani-launches-oscar-an-ai-diamond-pro-designed-to-make-diamond-shopp-1246360 (04/11/2026) · https://www.newswire.com/news/ritani-introduces-an-innovative-custom-ring-building-feature-22085972 (2023 : « 360-degree views »)
- [R20] https://www.trustpilot.com/review/ritani.com
- [R21] https://www.bbb.org/us/ny/white-plains/profile/jewelry-designers/ritani-llc-0121-122607/complaints · `…/customer-reviews`
- [R22] https://trustedjewelries.com/ritani-review (02/11/2026) · https://labgrowncarats.com/ritani-lab-grown-diamond-review · https://reviewnest.party/ritani-review/
- [R23] https://www.yelp.com/biz/ritani-white-plains
- [R24] https://www.ritani.com/blogs/education/the-process-of-creating-a-custom-engagement-ring (extrait)
- [R25] https://www.ritani.com/blogs/education/Choosing-The-Perfect-Engagement-Ring-A-Guide-To-Styles-Sizing-And-Customization · https://website.ritani.com/blogs/education/engagement-ring-settings (extraits)
