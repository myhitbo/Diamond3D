# Audit : Cullen Jewellery (Melbourne, Victoria, Australie)

- **Site** : https://cullenjewellery.com/en-au ; page de départ https://cullenjewellery.com/en-au/engagement-rings
- **Date** : 15/11/2026 (séance d'audit techniquement menée le 25/11)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright, proxy de la session)
- **Statut** : **complet** : catalogue, fiche, constructeur en 4 étapes, ajout au panier et page panier. Le bouton « Secure checkout » n'a pas été cliqué. Robots.txt : `Disallow: /cdn-cgi/` seulement ; le panier est autorisé. L'ajout au panier appelle `api.cullenjewellery.com` (robots.txt 404, donc sans règle).
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- Remarque de contexte : la bague testée est « Louise » (solitaire rond 2 ct, or jaune 18 ct). Le site ne vend que des diamants synthétiques (« We work exclusively with lab-grown diamonds »), plus moissanite et saphir [V].

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Catalogue [V] | `/en-au/engagement-rings` | 367 résultats ; filtres métal, forme, style, type de bande, profil, carat ; tri ; recherche ; « Load more » |
| Fiche [V] | `/en-au/engagement-rings/ring-louise/metal-type:18k-yellow-gold` | galerie (12 médias dont vidéos), métal, taille de la pierre montrée, « Build your ring », rendez-vous, indice, demande |
| Constructeur 1 · Timeline [V] | `…/ring-louise#timeline` | date d'achèvement : Ready-To-Ship, Priority, Express, Standard |
| 2 · Setting [V] | `#setting` | métal (8 dont bicolores), taille de doigt AU/UK ou « Help me later » |
| 3 · Gemstone [V] | `#stones` | type de pierre, pureté, carat, taille, coupe, couleur, liste « Cullen Select », filtres avancés |
| 4 · Personalise [V] | `#personalise` | gravure (police, texte), « Add to cart » |
| Panier [V] | `/en-au/cart` | récapitulatif, frais, date de livraison, conditions, paiement sécurisé |

## Contrôles vérifiés

Le contrôleur liste 191 contrôles visibles sur ordinateur et 148 sur iPhone (catalogue) [V]. Pied de page (≈ 80 liens) et menus : listés, non suivis un à un.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtres Metal (jaune, platine, rose, blanc, 4 bicolores) | boutons | disponibles dans le panneau « Filters » | — | présents [V] |
| Filtre Shape (12 : Round, Oval, Emerald, Radiant, Pear, Cushion, Elongated cushion, Elongated hexagon, Marquise, Princess, Asscher, Square emerald) | boutons | Oval : 367 → 78 résultats ; Round : 75 | — | OK [V] |
| Setting style (Trilogy, Solitaire, Halo, Toi et Moi, Bezel, East-West) | boutons | Trilogy : 44 résultats, adresse `?style=trilogy` | — | OK [V] |
| Band type (Plain, Pavé, Accents), Setting profile (High set, Low set) | boutons | présents, non cliqués | — | non testés |
| Carat (1, 1.5, 2.0, 2.5, 3.0, 4.0 ct, More sizes) | boutons | 4 ct : cartes à partir de « From 9,280 AUD » (première carte) | oui | OK [V] |
| Search rings, Sort « Most Loved » | champ, liste | présents | — | non testés |
| Load more | lien | `?page=2` | — | présent, non suivi |
| Cartes bague | liens | « From 4,730 AUD With 2ct Round Lab-Grown Diamond Solitaire · Claw » ; pastilles « Hidden halo », etc. | oui | OK [V] |
| Métal (fiche) : Yellow, Platinum, Rose, White | boutons | adresse `metal-type:…` ; Platinum **+200 AUD** (4 730 → 4 930) ; or rose et blanc au même prix que le jaune | oui | OK [V] |
| « +4 » bicolores (Yellow/Platinum, Rose/Platinum, Yellow/White, Rose/White) | bouton | déplie 4 combinaisons | — | OK [V] |
| « 2ct pictured » (liste 1, 2, 3, 4 ct) | liste | change les images ; **le prix reste 4 730 AUD** | non | OK [V] |
| Galerie : View image 1 à 12, Previous, Next, Pause video | boutons | vidéo de la bague, vidéo sur la main, photos, mains ; deux lecteurs vidéo (rendus et Shopify) | — | OK [V] |
| Build your ring | bouton | ouvre le constructeur (`#timeline`) | — | OK [V] |
| Book an appointment | bouton | assistant : lieu, type de rendez-vous (visite, consultation vidéo, appel), date, finalisation ; région Australie | — | ouvert, non réservé [V] |
| Send a hint, Make an enquiry | boutons | ouvrent un formulaire (contenu non relevé par le test) | — | non remplis [V] |
| Détails, Resizing, Shipping information, View in our showroom, Carbon neutral, Trees for the future, Gold recycling | accordéons | « Average band width 1.8 mm », « Center stone size 8.5 mm – 2.00 ct », « resized up to 5 sizes up or down », délais par pays | — | OK [V] |
| FAQ (9 questions : durée, aide, garantie, livraison mondiale, visite, taille, surprise, paiement, retour) | accordéons | présents ; non dépliés | — | non lus |
| Timeline : liste « Crafting completion date » (4 choix) | liste | voir tableau ci-dessous ; la date de livraison estimée suit | oui | OK [V] |
| Priority Crafting | choix | fenêtre : la pierre doit venir d'un stock rapide, « Continue with Priority Crafting » / « Go back » | +1 500 AUD | OK [V] |
| Ready-To-Ship | choix | fenêtre « Louise is ready to ship » : « View all Ready-To-Ship » / « Louise Ready-To-Ship » | — | fenêtre vue, non suivie [V] |
| Customise your setting | bouton | passe à l'étape Setting | — | OK [V] |
| Ring size (A à Z½, Z+1 à Z+8, 65 valeurs, AU/UK) | liste | s'inscrit dans l'adresse (`ring_size=au_m`) et dans la barre « Ring Size : M » | — | OK [V] |
| Help me later | bouton | reporte la taille ; lien « Request a free ring sizing kit » | — | présent [V] |
| Choose your stone | bouton | étape Gemstone | — | OK [V] |
| Stone type : Lab Grown Diamond, Coloured Lab Grown Diamond, Moissanite, Sapphire | liste | écarts de prix affichés dans les options | +180 / −870 / −1 270 AUD | OK [V] |
| Clarity : IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1 | liste | écarts affichés dans la liste | +2 300 / +1 350 / +60 / base / −60 / −460 / −630 / −630 AUD | OK [V] |
| Carat 1, 1.5, 2.0, 2.5, 3.0, 4.0 ct | boutons | prix mis à jour : 1 ct 3 240 ; 2 ct 4 730 ; 3 ct 6 040 ; 4 ct 7 310 AUD ; ligne « 2.50–2.59 ct (+810 AUD) » | oui | OK [V] |
| More sizes… | bouton | curseur de 1,00 à 10,00 ct (plage 2,00–2,09 ct affichée) | — | OK [V] |
| Cut : Excellent, Ideal | boutons | Ideal : 4 730 → 4 990 AUD | +260 AUD | OK [V] |
| Colour : D, E, F, G, H, I, J | liste | D (Least coloured) +190 ; E base ; F −340 ; G −390 ; H −440 ; I −490 ; J −540 AUD | oui | OK [V] |
| What are the 4Cs ? / What is a lab-grown diamond ? | boutons | panneaux d'aide | — | présents [V] |
| Cullen Select (3 pierres + « View more stones ») | cartes | « 2.07ct E VS1 8.22×8.18 mm » ; la 3e pierre porte « +575 AUD » | oui | OK [V] |
| Liste de pierres : Filters (Clarity, Colour, Cut, Carat, Shape, Depth, Table, L/W ratio) | fenêtre | onglet Carat : curseur 0,20–9,85 ct, photo « Actual diamond size on size 6 hand » avec curseur clair/foncé | — | ouverte, filtres non tous actionnés [V] |
| Fiche pierre : « Choose diamond », « View IGI certificate » | boutons | SKU, forme, carat, longueur, largeur, profondeur, coupe, couleur, pureté, polissage, table ; « Choose diamond » inscrit `stone=diamond-CJD954900991` dans l'adresse | inclus | OK [V]. Le lien du certificat (igi.org) n'a pas été ouvert |
| Personalise : champ gravure (15 caractères max), 6 polices | champ, liste | « A+B » : 4 730 → 4 815 AUD | +85 AUD | OK [V] |
| Add to cart (4 815 AUD) | bouton | crée un panier (`POST /api/cart/create`, puis ajout) ; l'adresse reçoit `engrave_text=A+B` | oui | OK [V] |
| Panier : Edit, Remove, Delivery estimate, Add order note, case des conditions, Secure checkout | contrôles | « Edit » mène à `/en-au/engagement-rings` (catalogue général) ; « Secure checkout » non cliqué | — | Edit défaillant, reste non cliqué [V] |
| Sélecteur de pays « AU (AUD $) » et bandeau « Shopping from the United States ? » | bouton, fenêtre | propose la bascule USD ; « Keep Australia » conserve l'AUD | — | OK [V] (déclenché par l'adresse IP du proxy) |
| Bandeau « Planning a December proposal ? View our cut-offs » | lien | `/en-au/crafting-timeframes` | — | lu [V] |
| Pied de page : réseaux, newsletter (concours de 500 AUD), plans de site | liens, champ | non suivis, non remplis | — | non testés |

## Options disponibles

- **Métal** : or 18 ct jaune, rose, blanc ; platine ; 4 bicolores ; pas de 14 ct [V].
- **Formes** : 12 (voir ci-dessus) ; **styles** : solitaire, trilogie, halo, toi et moi, bezel, est–ouest ; **bande** : plain, pavé, accents ; **profil** : haut, bas [V, filtres].
- **Pierre** : diamant synthétique, diamant synthétique de couleur, moissanite, saphir ; pureté IF à I1 ; couleur D à J ; coupe Excellent ou Ideal ; carat de 1 à 10 ct (boutons jusqu'à 4 ct, curseur au-delà) [V].
- **Certificat** : IGI affiché sur chaque pierre « Cullen Select » (« Excellent cut · IGI ») [V].
- **Temps** : Ready-To-Ship, Priority, Express, Standard (tableau ci-dessous) [V].
- **Personnalisation** : gravure jusqu'à 15 caractères, 6 polices (Bookman Old Style et Monotype Corsiva « Recommended », English111 Vivace, Balmoral, Francisco Lucas, Tempus Sans) ; taille de doigt AU/UK [V].
- **Services** : rendez-vous en showroom (Adélaïde, Brisbane, Melbourne, Perth, Sydney en Australie ; 14 villes sur la fiche), consultation vidéo, appel ; « Send a hint » ; finance ; garantie à vie ; redimensionnement gratuit ; guide des tailles `/ring-size-guidance` ; suivi de commande `/order-status` (champ, non utilisé) [V].

## Prix, délais, retours, garanties

- **Prix** affiché partout : « From 4 730 AUD » au catalogue, prix en tête de constructeur qui se met à jour à chaque choix ; page de panier avec décomposition : « Louise 4 730 AUD ; Centre stone Included ; Ring Engraving 85 AUD ; Subtotal 4 815 AUD ; Shipping Complimentary ; Total 4 815 AUD » [V].
- **Calcul du prix** : base = bague 2 ct, VS1, E, coupe Excellent, or jaune. Écarts lus : platine +200 ; Ideal +260 ; pureté de −630 à +2 300 ; couleur de −540 à +190 ; carat 1 ct −1 490, 3 ct +1 310, 4 ct +2 580 ; moissanite −870 ; saphir −1 270 ; gravure +85 [V].
- **Délais** (page `/crafting-timeframes`, jours ouvrés depuis la confirmation du design) : Standard 30 ; Express 25 (+200 AUD) ; Priority 18 (+1 500 AUD) ; Ready-To-Ship 1 à 4 ; Express et Priority seulement avec un diamant synthétique central [V]. Dans le constructeur, le délai est une **date** : Standard 14/01/2027, Express 07/01/2027, Priority 21/12/2026, livraison estimée = date d'achèvement + 5 jours (19/01/2027) [V, consultation le 25/11].
- **Livraison** : express gratuite et assurée en Australie, 1 à 3 jours ouvrés, par StarTrack Airlock (pièce d'identité exigée, signature, pas de boîte postale) ; international gratuit dès 500 AUD ; droits et taxes en général pris en charge (DDP) [V, `/shipping`].
- **Retours** : « we do not offer refunds or returns unless the item is faulty or damaged » ; dépôt de port de 25 AUD en Australie (150 AUD hors Australie), remboursé si défaut de fabrication ; droits du droit de la consommation australien rappelés ; **annulation** : frais possibles « where a cancellation request is made after production or fulfilment of the Order has commenced » [V, `/returns`, `/terms-of-sale`].
- **Garantie** : à vie sur bagues de fiançailles, alliances et bagues de mode (défauts de fabrication : porosité, sertissage inégal, éclats de pierre, taches de rhodium) ; 2 ans sur boucles, chaînes, bracelets, pendentifs [V, `/warranty`].
- **Redimensionnement** : un gratuit dans les 12 mois, au delà payant ; jusqu'à 5 tailles selon la fiche [V].
- **Libellé du synthétique** : « Lab-Grown Diamond » partout, avec une rubrique « What is a Lab-Grown Diamond ? » et « Carbon neutral certified » [V].
- **Langues, devises** : anglais ; sites pays AU (AUD), NZ, US, CA, UK avec sélecteur et suggestion automatique de pays [V].
- **Paiement affiché** (panier) : Visa, Mastercard, Amex, Apple Pay, Google Pay, Shop Pay, PayPal, Humm, Zip, « 256-bit SSL » ; la page finance décrit trois offres « achetez maintenant, payez plus tard » (plafonds 350 à 18 000 AUD, intérêts de 0 % à 6 %, frais d'établissement) ; en ligne, le financement s'applique au montant total [V].

## Confiance et service

- **Avis** : « 5.0 · 29 818 reviews » sur la fiche, 29 819 sur `/en-au/reviews` ; la page liste des avis datés de « 25 minutes ago » (flux en direct) [V].
- 14 showrooms sur la fiche, rendez-vous obligatoire en Australie (« Appointment only »), téléphone 1300 977 619, e-mail, chat [V].
- Contrôle qualité annoncé : « casting, polishing, cleaning, and 50x microscopic inspections » ; atelier interne ; recyclage de l'or ; arbre planté par achat ; « Design Institute of Australia » et « International Gemological Institute » en pied de page [V pour le texte, I pour la réalité].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ou de la pièce en cours ; la page « Order Status » existe mais n'a pas été utilisée ; les vidéos de la galerie sont des rendus et des films de produit [V pour l'absence dans le parcours].
- Message « Why we don't go on sale » en bandeau (position anti-promotion) [V].

## Points forts à retenir pour JR Diamond

1. **Prix vivant et décomposé dans le constructeur** : chaque option affiche son écart en AUD dans la liste elle-même (« Ideal (+260 AUD) », « IF +2,300 AUD »), et le panier détaille bague, pierre, gravure. Preuve : listes lues et panier [V]. Répond à l'écart principal de la synthèse (prix affiché partout ailleurs).
2. **Le délai devient une date que l'on choisit, avec un prix** : Standard / Express (+200 AUD) / Priority (+1 500 AUD), « Delivery estimate : 19 January 2027 » jusque dans le panier. Preuve : liste « Crafting completion date » et panier [V]. Utile pour le calendrier d'un mariage ou des fêtes.
3. **Pierre de stock choisie dans le constructeur** avec fiche technique, dimensions en mm, lien vers le certificat IGI et aperçu « taille sur la main » (curseur de teint de peau). Preuve : fenêtre de la liste de pierres [V].
4. **Reconnaissance du pays** : bandeau de bascule vers le site américain et prix en devise locale ; garde le choix « Keep Australia ». Preuve : bandeau lu [V].
5. **Configuration partageable** : taille, pierre, gravure et police écrites dans l'adresse (`?ring_size=…&stone=…&engrave_text=…`). Preuve : adresse lue [V].
6. **Date limite de fin d'année** : bandeau « Planning a December proposal ? View our cut-offs » renvoyant à une page de délais par type de pièce. Preuve : `/crafting-timeframes` [V].
7. **Politique de retour claire pour du sur mesure** : pas de retour sauf défaut, dépôt de port de 25 AUD expliqué, droits légaux rappelés, frais d'annulation possibles. Preuve : `/returns`, `/terms-of-sale` [V].

## Défauts observés

- **Carat « pictured » trompeur** : changer « 2ct pictured » en 3 ct change les photos mais pas le prix (4 730 AUD) [V].
- **Lien « Edit » du panier** : renvoie au catalogue général, pas à la bague configurée [V].
- **Libellé de bouton incohérent** : le bouton de la première étape s'appelle « Customise your setting », alors que l'utilisateur est déjà dans le constructeur ; la barre d'étapes devient rouge pour « Setting » tant que la taille n'est pas choisie, sans message [V].
- **Contenu des horaires de contact** affiché « MON–WED : 10:00 pm – 6:00 am » (fuseau décalé pour un visiteur extérieur à l'Australie) [V].
- **Compteur d'avis incohérent** : 29 818 sur la fiche, 29 819 sur la page des avis [V].
- **Fenêtre de bascule vers les États-Unis** se rouvre à chaque page et masque des boutons (« Customise your setting ») tant qu'elle n'est pas fermée [V].
- **Page catalogue : premier relevé de 31,8 s** (mauvais sélecteur de mesure ; mesure corrigée plus bas) [V].
- **Ready-To-Ship et Priority** : le choix d'un délai ouvre des fenêtres qui bloquent le reste de la page (clics interceptés) jusqu'à la réponse [V].

## Limites de l'audit

- **Temps d'apparition du visuel** (première grande image visible) : fiche **1,7 s sur ordinateur, 4,9 s sur iPhone** ; catalogue **1,7 s sur ordinateur, 2,4 s sur iPhone** (un essai chacun ; une première mesure de la fiche donnait 3,6 s) [V]. Pas de rendu 3D : photos et vidéos. Réseau via le proxy de la session, donc indicatif.
- Parcours iPhone vérifié jusqu'à l'étape pierre ; l'ajout au panier a été fait sur ordinateur seulement. La liste des tailles de doigt sur iPhone a donné « K » pour la même position de liste (arrangement différent, cause non établie) [V].
- Seule la bague « Louise » a été configurée de bout en bout ; les écarts de prix des pierres peuvent varier avec la bague [S].
- **Non testés** : « Secure checkout » et tout paiement (règle) ; formulaires « Send a hint », « Make an enquiry », rendez-vous, newsletter, chat ; Band type et Setting profile ; recherche et tri ; FAQ de la fiche ; `/engagement-rings/custom` (parcours sur mesure) ; Ready-To-Ship après la fenêtre ; lien igi.org ; filtres de la liste de pierres hors onglet Carat.
- Un panier a été créé côté serveur par l'ajout (bague configurée avec l'engraving test « A+B » ; aucune donnée personnelle).
- Firecrawl indisponible (crédits épuisés) : pages de service lues avec le navigateur.

## Sources

- https://cullenjewellery.com/en-au/engagement-rings [V]
- https://cullenjewellery.com/en-au/engagement-rings/ring-louise/metal-type:18k-yellow-gold [V]
- https://cullenjewellery.com/en-au/engagement-rings/ring-louise#timeline, `#setting`, `#stones`, `#personalise` [V]
- https://cullenjewellery.com/en-au/cart [V]
- https://cullenjewellery.com/en-au/crafting-timeframes [V]
- https://cullenjewellery.com/en-au/returns [V]
- https://cullenjewellery.com/en-au/shipping [V]
- https://cullenjewellery.com/en-au/warranty [V]
- https://cullenjewellery.com/en-au/terms-of-sale [V]
- https://cullenjewellery.com/en-au/finance-options [V]
- https://cullenjewellery.com/en-au/free-resizing [V]
- https://cullenjewellery.com/en-au/reviews [V]
- https://cullenjewellery.com/robots.txt [V]
