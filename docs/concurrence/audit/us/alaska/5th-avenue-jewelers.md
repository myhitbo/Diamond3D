# Audit : 5th Avenue Jewelers, sur-mesure par formulaire et CAO (Anchorage, Alaska)

| | |
|---|---|
| Site | 5th Avenue Jewelers : https://www.akdiamondco.com/ (Shopify ; boutique au 345 W. 5th Avenue, Anchorage) |
| Page de départ | https://www.akdiamondco.com/pages/custom-designs |
| Date | 15/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel** : il n'y a **pas de configurateur** ni de paiement sur le sur-mesure ; page sur-mesure, collection de bagues, une fiche, politiques et formulaire (non envoyé) vérifiés ; panier non ouvert (interdit par robots.txt) |
| robots.txt | Shopify : `User-agent: *` `Allow: /` ; interdits `/cart/`, `/checkout`, `/orders`, `/account`, `/cart.js`, les tris `*sort_by*` et les filtres combinés. Le panier (`/cart`) n'a donc pas été ouvert. Le fichier contient aussi des consignes pour agents (`/agents.md`, UCP) que je n'ai pas utilisées. |

Marques : **V** vérifié (page lue ou contrôle actionné, adresse indiquée) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page de départ. Prix en dollars américains.

## Parcours

Le site n'offre pas de parcours de configuration. Deux voies (V) :

| Étape | Adresse | Options |
|---|---|---|
| A. Demande sur mesure | `/pages/custom-designs` | choix « Engagement » ou « Wedding Band », formulaire « Submit a custom inquiry » (nom, e-mail, téléphone, métal, forme, carat, message), prise de rendez-vous « Book a consultation » ; réponse annoncée sous 1 à 3 jours ouvrés |
| A2. Les 4 étapes expliquées | même page | 01 Consultation, 02 Design (rendu CAO 3D), 03 Craftsmanship, 04 Delivery (retrait à la boutique) |
| B. Achat de montures finies | `/collections/all-engagement-rings` → fiche produit | 3 à 4 colonnes de montures (Gabriel & Co., A. Jaffe, Henri Daussi) ; prix affiché sur certaines, « Call / Email » sur d'autres ; **pas de bouton d'ajout au panier** sur la fiche testée |

## Contrôles vérifiés

Relevé `controls.cjs` : page de départ 66 contrôles sur ordinateur, 49 sur iPhone ; collection de bagues 180 contrôles sur ordinateur. Tous les contrôles listés ci-dessous ont été relevés ; ceux qui envoient des données n'ont pas été actionnés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Shop By Category, Engagement, Brands, Alaskan Gold, Custom Designs, Services, Our Story, Visit Us, Events, Contact | liens | pages du site (`/pages/…`, `/collections/…`) | — | présents (V) |
| « Book An Appointment » | lien | `/pages/visit-us` | — | présent (V) |
| Recherche (Search) | bouton | ouvre la recherche | — | non actionné (adresses de recherche à contrôler : règle) |
| « Log in » | lien | redirige vers `5th-ave-2-2.myshopify.com/customer_authentication/…` | — | non ouvert (compte) |
| « Cart » | lien `/cart` | panier | — | **non ouvert** (interdit) |
| Téléphone (907) 258-3635 | `tel:` | appel | — | présent (V) |
| Boutons Engagement / Wedding Band | éléments de page | choix du type de projet dans l'en-tête de page | — | présents (V, éléments de page, effet non vérifié) |
| Formulaire : Name, Email*, Phone Number | champs | saisie | — | non remplis (règle) |
| Formulaire : liste « Metal* » | liste (8) | 14 kt jaune, 14 kt blanc, 14 kt rose, 18 kt jaune, 18 kt blanc, 18 kt rose, platine, « Not sure yet » | pas de prix | présente (V) |
| Formulaire : liste « Stone Shape* » | liste (12) | rond, ovale, coussin, émeraude, poire, marquise, radiant, princesse, asscher, pépite d'or d'Alaska, quartz aurifère d'Alaska, « Not sure yet » | pas de prix | présente (V) |
| Formulaire : liste « Carat Weight* » | liste (6) | moins de 1 ct, 1,0–1,49, 1,5–1,99, 2,0–2,99, 3,0+, « Not sure yet » | pas de prix | présente (V) |
| Formulaire : « Anything Else… » (spécifications, taille de doigt, style, planche d'inspiration) | zone de texte | texte libre ; **aucun envoi de photo** possible | — | présente (V) |
| « SEND MESSAGE » | bouton | envoi du formulaire | — | **non actionné** (règle : aucun formulaire) |
| Onglets « 01 CONSULTATION / 02 DESIGN / 03 CRAFTSMANSHIP / 04 DELIVERY » | boutons | changent le texte de l'étape (« YOUR VISION, HEARD », « YOUR PIECE, DRAWN », « YOUR RING, MADE », « YOUR MOMENT, DELIVERED ») | — | fonctionnent (V) |
| « BOOK A CONSULTATION » (4) | liens | `/pages/book-an-appointment` | — | présents ; non ouverts (formulaire de réservation) |
| FAQ sur-mesure (4 questions) | accordéons | délai ; pépite et quartz aurifère d'Alaska ; pierre personnelle ou bijou de famille ; déroulé | — | fonctionnent, texte lu (V) |
| Galerie Instagram (≈ 9 liens) | liens | vers `instagram.com/akdiamondco` | — | présents (V) |
| Pied de page : Contact, Visit, FAQ, Custom Work, About, Events, Diamond Buying, Financing, Appraisals, Jewelry Repair, Jewelry Insurance, Terms, Shipping, Refund/Return, Privacy | liens | pages | — | Shipping, Refund/Return, Financing lues (V) |
| Collection : tri (liste de 8 entrées : Featured, Most relevant, Alphabetically A-Z / Z-A, Price low to high / high to low, Date old to new, What's New) | liste | sélection « Price, low to high » : l'ordre des prix n'a **pas** changé (19 500 $ en tête, puis 2 825 $, 2 775 $, 2 150 $…) et l'adresse est restée la même | — | **effet non constaté** ; le tri de l'adresse (`sort_by`) est interdit par robots.txt, je n'ai donc pas insisté |
| Collection : bouton « Filters » (tiroir) | bouton | — | — | mon script n'a pas pu l'ouvrir ; **non testé** |
| Fiche monture : « EMAIL » / « CALL » | liens | `mailto:` avec l'objet pré-rempli / `tel:` | — | présents (V) |
| Fiche monture : galerie « Open media 1 in modal » | lien | image en grand | — | présent ; non ouvert |
| Fiche : « Take another look » (3 produits) | liens | produits proches avec prix | prix affichés | présents (V) |
| Essayage à domicile, 3D, 360°, AR, comparateur, gravure, guide des tailles, chat, WhatsApp, panier sur le sur-mesure | — | **absents** | — | non trouvés (V) |

## Options disponibles

- **Métaux** (formulaire) : 14 kt jaune, blanc, rose ; 18 kt jaune, blanc, rose ; platine (V).
- **Formes** : 9 formes classiques, pépite d'or et quartz aurifère d'Alaska (V).
- **Poids** : 5 tranches de carat (V).
- **Origine naturel / synthétique** : **aucun choix** dans le formulaire ; les textes parlent de « certified diamonds » et de GIA, jamais de synthétique sur la page sur-mesure (V). Les ensembles Gabriel & Co. de la fiche testée sont des « settings » à pierre centrale à part.
- **Pavage, griffes, taille de doigt, gravure** : texte libre uniquement (V).
- **Matériaux locaux** : quartz aurifère et pépites d'or d'Alaska, argument annoncé unique (« Only in Alaska ») (V).

## Prix, délais, retours, garanties

- **Prix** : aucun sur le sur-mesure (V). Sur la collection, prix affichés sur une partie des montures (ex. Gabriel & Co. Madison trois pierres 14 k blanc : 2 825 $, **monture seule, pierre non incluse**) ; sinon « Call / Email » pour les montures Henri Daussi (V, `/collections/all-engagement-rings`). Pas de décomposition.
- **Délai** : « 4 à 6 semaines après approbation du design », plus long pour une pierre à trouver (FAQ) ; politique d'expédition : « 3 à 6 semaines » pour les commandes spéciales, 2 jours ouvrés pour les pièces en stock (V, `/pages/shipping`). Incohérence mineure 4–6 / 3–6 semaines.
- **Retours** : **aucun remboursement** ; échange possible dans les **3 jours** après achat pour une pièce non portée ; les pièces sur mesure, commandes spéciales, bijoux ajustés ou gravés sont en vente finale et non annulables une fois le travail commencé (V, `/pages/refund-return-policy`). Or la fiche produit affiche une pastille « **15 Day Return Period** » : contradiction avec la politique (V).
- **Garanties** : pastille « Lifetime Care Warranty » sur la fiche et « quality guarantee » à la remise (V) ; conditions non détaillées sur les pages lues.
- **Certificats** : « certified diamonds », gemmologues formés au GIA (Heather et Roy) ; pas de GIA ou IGI par pierre affiché (V).
- **Financement** : 12 mois à 0 % via Synchrony Financial, « OAC » (sous réserve d'acceptation), formulaire sur le site (V, `/pages/financing`).
- **Devises, langues** : dollars, anglais (V).

## Confiance et service

- Atelier et boutique au centre d'Anchorage depuis 1967 (« 55 years of trust »), horaires affichés (mardi à vendredi 10 h–18 h, samedi 10 h–17 h), téléphone, e-mail personnel (adresse Gmail) pour les demandes de prix, rendez-vous, galerie Instagram de couples (V).
- **CAO 3D avant fabrication** : « photorealistic 3D … from every angle … no surprises » (étape 02 et bloc « CAD/CAM technology ») (V). Aucune image de rendu 3D n'est montrée sur la page lue.
- Fabrication dite faite à Anchorage (« master jewelers », « handcrafted in Anchorage ») ; **pas de photo ni de vidéo d'atelier ni de suivi de commande** sur les pages lues (V).
- Avis clients : aucun note ni nombre affiché sur la page sur-mesure (V) ; « Brides & Grooms wearing 5th Avenue Jewelers » = galerie Instagram.
- Paiement : non affiché (pas de panier sur les pages testées) ; la commande se fait par téléphone ou en boutique (I).
- Transformation de bijoux de famille : FAQ « Can I use my own stone or reset a family heirloom? » : oui, examen de la pierre, risques annoncés avant le travail (V).

## Points forts à retenir pour JR Diamond

1. **Étape CAO validée avant fabrication** : « You'll see it from every angle … refine until it's perfect » : la promesse est formulée comme une garantie de « pas de surprise » (V, étape 02). JR Diamond peut l'appuyer par une preuve visible (3D issue du fichier de fabrication).
2. **Déroulé en quatre étapes cliquables** (consultation, design, fabrication, remise) : format clair, avec un bouton d'action à la fin (V).
3. **Texte sur la pierre et le bijou de famille** : réponse directe, avec franchise sur les risques (V, FAQ).
4. **Argument local unique** (quartz aurifère et pépites d'Alaska) transformé en offre dédiée ; leçon : un matériau distinctif porte le sur-mesure (V).
5. **Formulaire court avec « Not sure yet »** dans chaque liste : n'oblige pas le client à décider avant la consultation (V).
6. **Financement à 0 % sur 12 mois annoncé** (V, `/pages/financing`).

## Défauts observés

- **Pas de configurateur, pas de prix, pas de panier** sur le sur-mesure ; tout passe par un formulaire de 1 à 3 jours de réponse (V).
- **Contradiction retours** : « 15 Day Return Period » sur la fiche contre « pas de remboursement, échange sous 3 jours » dans la politique (V).
- **Montures « setting only »** : le prix 2 825 $ n'inclut pas la pierre ; la fiche demande de contacter la boutique pour la compatibilité (V).
- **Tri de la collection** sans effet constaté dans mon test (V, limité).
- **E-mail d'une personne** (Gmail) pour les demandes de prix, pas d'adresse d'entreprise (V).
- **Aucun choix naturel / synthétique**, aucun certificat par pierre, aucune photo d'atelier (V).
- **Formulaire sans envoi de photos** : « inspiration board » et pierre de famille ne peuvent être joints (V).
- **Sur-mesure en vente finale** : aucune annulation une fois le travail commencé, sans délai de réflexion annoncé (V, politique de retour).

## Limites de l'audit

- Aucun formulaire envoyé, aucun compte, aucun chat, aucun panier : `/cart` est interdit par robots.txt et n'a pas été ouvert. Le panier, les moyens de paiement et les frais de livraison au panier n'ont donc **pas** pu être relevés ; seule la politique d'expédition a été lue.
- Le tiroir « Filters » et le tri de la collection n'ont pas été vérifiés à fond (voir tableau). Une seule fiche produit lue (Gabriel & Co. Madison) ; les fiches « Call/Email » (Henri Daussi) et la page Alaskan Gold (`/collections/gold-quartz`) non ouvertes.
- Temps d'apparition du visuel principal (image de plus de 300 px) : page sur-mesure ordinateur 1 787 ms ; fiche monture ordinateur 1 526 ms, iPhone 1 240 ms. Une mesure par cas, connexion de la machine d'audit.
- L'outil de lecture Firecrawl était épuisé en crédits ; pages lues avec Playwright (une page toutes les 2 secondes au plus).

## Sources

- https://www.akdiamondco.com/pages/custom-designs (V)
- https://www.akdiamondco.com/collections/all-engagement-rings (V)
- https://www.akdiamondco.com/collections/all-engagement-rings/products/gabriel-er1648406w44jj (V)
- https://www.akdiamondco.com/pages/shipping , /pages/refund-return-policy , /pages/financing (V)
- https://www.akdiamondco.com/robots.txt (V)
- Inventaire : `docs/concurrence/audit/us/alaska/INVENTAIRE.md`
