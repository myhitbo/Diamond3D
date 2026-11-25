# Audit : Luxe Diamond Jewelers

- **Site** : Luxe Diamond Jewelers (Bozeman, Montana, ouvert en 2025 selon la FAQ) — https://luxediamondjewelers.com
- **Page de départ** : https://luxediamondjewelers.com/build-your-ring/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (relevé des contrôles et temps de chargement seulement)
- **Statut** : **partiel**. Le site est lisible (robots.txt : seul `/wp-admin/` interdit). Mais le constructeur est un widget Caratwise chargé depuis `release.caratwise.com`, dont le robots.txt répond 403 (INCONNU selon l'outil de contrôle) : je n'ai donc cliqué aucun bouton du widget. Le parcours (options, prix, panier) est reconstitué à partir des réponses de l'API `storeapi.caratwise.com` que la page appelle seule à son ouverture, et non actionné.
- Légende : V = vérifié (page lue ou contrôle actionné, avec l'adresse), I = inféré, S = supposé.

## Parcours

Le constructeur n'est pas une page dédiée : `/build-your-ring/` affiche une page d'accueil de type vitrine (V, capture) avec le widget Caratwise v1.5.2 (V : requête `release.caratwise.com/production/v1.5.2/…`).

| Étape | Options (V = lues sur la page ou dans l'API chargée à l'ouverture) |
|---|---|
| Entrées | « Start with a Setting », « Start with a Diamond », « Design with our Studio Collection » (V, boutons). Le parcours qui suit n'a pas été actionné. |
| Ring Style (14 vignettes) | Solitaire, Classic, Halo, Three Stone, Hidden Halo, Vintage, Nature, Bezel, Side Stones, Plain, Twist, Floral, Unique (+ Studio) (V) |
| Métal (4) | White Gold, Yellow Gold, Rose Gold, Platinum (V). L'API de configuration liste 14k blanc, 18k jaune, 18k rose, platine ; matériaux offerts « 14, 18, PT » (V, `authorize-client`). |
| Forme (10) | Round, Pear, Oval, Marquise, Radiant, Princess, Emerald, Elongated Cushion, Heart, Square Cushion (V) |
| Pierre | Origine « both » (naturel et synthétique) (V, config) ; carats proposés par l'API : 0,5 / 0,7 / 1 / 1,5 / 2 / 2,5 / 3 / 5 / 8 ct ; filtres diamant : couleur D–M, pureté I1–FL, taille, poli, symétrie, fluorescence, laboratoire GIA/IGI/GCAL/HRD, qualité « Best Value / Great Quality / Top Pick » (V, `labels`) |
| Monture | Style de tête (Halo, 4/6 griffes, Bezel, Double Halo, Cluster, Tension, Basket, Channel…), style de corps (Split Shank, Cathedral, Half/Full Eternity, Knife Edge, Tapered…), largeur 0,99 mm à 3,00 mm et plus, bandes assorties (aucune / simple / double), taille de doigt 4 à 9 par quarts (V, `labels`) |
| Fin | Bouton « Finalize Your Design » (V, config `checkout_button_title`) ; gravure, vue main, 3D activées dans la config (V : `enableHandView`, `showDiamond3D`, `enable3DAnimation`, `headShankCustomization`). Rendu réel non vu. |

## Contrôles vérifiés

Relevé controls.cjs : 32 contrôles sur ordinateur, 22 sur iPhone. Ils ne comprennent que l'en-tête, le pied de page et le formulaire d'inscription : le widget n'apparaît pas dans ce relevé (éléments non standards). Je l'ai relevé séparément par lecture du DOM (V, sans clic).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start with a Setting / Start with a Diamond / Design with our Studio Collection | 3 boutons du widget | Entrées du parcours (I) | – | non cliqués (domaine Caratwise sans robots.txt lisible) |
| Discover the Collection, Explore Studio Collection, Start Designing | boutons widget | Entrées du parcours (I) | – | non cliqués, même raison |
| 13 boutons de style (Solitaire … Unique) | boutons widget | Filtre de style (I) | – | non cliqués |
| White / Yellow / Rose Gold, Platinum | 4 boutons widget | Filtre de métal (I) | – | non cliqués |
| 10 boutons de forme | boutons widget | Filtre de forme (I) | – | non cliqués |
| 8 cartes « Popular Engagement Rings » (Tiana, Elara, Ziva, Amara, Corinne, Adelina, Eira, Catriona) | cartes | Affichent un prix « Starting at » (V) | oui, de 1 160 $ à 1 929 $ | affichage vérifié ; clic non testé |
| Search | champ/div (ordinateur) | Recherche du site | – | non testé (`/search` non vérifié) |
| Open JEWELRY / Menu Toggle | bouton | Ouvre le menu | – | non testé |
| SERVICES, ABOUT, FAQ, CONTACT US, NEWS + TIPS | liens | Pages du site | – | SERVICES, FAQ lues (V) ; ABOUT, NEWS non lues |
| BUILD YOUR RING (bandeau) | bouton-lien | Retour sur la même page | – | fonctionne (V) |
| SET UP AN APPOINTMENT | lien `/contact-us/` | Page contact (formulaire non rempli) | – | lien vérifié |
| (406) 602-4282 | lien `tel:` | Appel | – | non testé |
| Adresse (Google) | lien `share.google` | Carte | – | non testé |
| Instagram, Facebook | liens | Réseaux sociaux | – | non testés |
| Financing, Return Policy | liens | Pages lues (V) | – | fonctionnent |
| Apply Now (page Financing) | lien | Mène à `/contact-us/`, pas à un formulaire de crédit (V) | – | fonctionne mais renvoie au contact |
| Email + SUBSCRIBE | formulaire | Inscription lettre | – | non rempli (règle) |
| Accept / Reject (cookies) | boutons | Bandeau GDPR | – | affichés (V) |
| Panier, enregistrer, comparer, partager, guide des tailles, chat, WhatsApp | – | Aucun bouton visible dans le relevé de la page de départ | – | absents du relevé (V) |

Page `/engagement-rings-wedding-bands-bozeman-mt/` (V) : catalogue ShopWP/Shopify (domaine `usnnkh-hb.myshopify.com`), 4 grilles (engagement, bagues femme, bagues homme, mode) avec « View product » et « Load more » ; mon essai de cliquer « View product » n'a pas abouti (bouton introuvable dans le délai de 30 s) : fiche produit et panier non audités.

## Options disponibles

- Métaux : or blanc, jaune, rose ; 14 k et 18 k ; platine. Argent : aucun. Or 9 k présent dans les libellés de l'API (I, probablement non proposé).
- Formes : 10 (ci-dessus) ; l'API en connaît 17 (V).
- Origine : naturel et synthétique (« Lab Grown ») (V).
- Certificats : GIA, IGI, GCAL, HRD (V) ; page d'accueil : « GIA Graded », « IGI Certified », « GCAL Verified », « Ethically Sourced » (V).
- Tailles de doigt 4–9 (V). Gravure indiquée comme option (V, libellé « Engraving »).

## Prix, délais, retours, garanties

- **Prix** : affichés « Starting at » sur 8 modèles du widget : 1 160 $ à 1 929 $ ; le prix est celui d'un modèle avec pierre synthétique de 0,3 à 0,5 ct (V : champs `dia_origin: LGN`, `dia_size`, `retail_price` de l'API ; la correspondance exacte « 3 = 0,3 ct » est inférée). Pas de décomposition du prix (V : aucun détail dans l'API chargée). Taxe : `price_inc_tax: false` (V) ; pas de taxe de vente dans le Montana (S).
- **Délai** : « 7 jours à 6 semaines » pour une bague sur mesure (V, `/faq/`). Pas de délai de 14 jours.
- **Retours** : 7 jours retour, 30 jours échange ; pièces personnalisées, sur mesure, redimensionnement et « diamond upgrades » non remboursables (V, `/return-policy/`). Remboursement par le même moyen de paiement ou crédit en magasin.
- **Garantie** : « lifetime warranty » couvrant mise à taille, resserrage des pierres et nettoyage (V, FAQ). Assurance conseillée.
- **Financement** : Synchrony (carte), « Apply Now » mène au contact (V, `/financing/`).
- **Livraison, moyens de paiement, panier** : non vus (hors accès).

## Confiance et service

- Atelier local « family-owned », Bozeman ; services de réparation, remise à taille, rhodiage, rachat or/diamants (V, `/services/`). Rendez-vous non obligatoire (V).
- Avis clients : aucun vu sur les pages lues (V). Preuves de fabrication (photos d'atelier, suivi de commande) : aucune (V).
- Langue : anglais seulement ; devise : USD (V).

## Points forts à retenir pour JR Diamond

1. **Entrée par la pierre ou par la monture** : « Start with a Setting » / « Start with a Diamond » (V, boutons de la page). Utile pour un client qui possède déjà une pierre (bijou de famille).
2. **Filtres diamant complets** (couleur, pureté, poli, symétrie, fluorescence, laboratoire) et qualité résumée en « Best Value / Great Quality / Top Pick » (V, `labels`) : lisible pour un non-expert.
3. **Prix « Starting at » dès l'accueil** sur chaque modèle (V, 8 cartes).
4. **Nature et synthétique dans le même parcours** (V, config `diamondOrigin: both`).
5. **Entrée « Studio Collection »** : modèles de designer vendus avec mélange libre de pièces (V, libellé).

## Défauts observés

- Le constructeur n'a pas de page propre : `/build-your-ring/` est une page d'accueil sans contrôle natif ; sans le widget tiers, rien ne s'affiche (V, relevé de 32 contrôles).
- Cartes des 8 modèles : image grise vide (placeholders) au premier affichage (V, capture).
- Les grilles de produits de la page « Engagement Rings » restent partiellement vides (rectangles gris) sur la capture pleine page (V).
- Pas d'avis, pas de preuves d'atelier, pas de livraison détaillée (V).
- Délai de 7 jours à 6 semaines : très large (V).
- Remise à taille et « diamond upgrades » exclus de l'échange (V).

## Temps d'apparition

Mesuré avec Playwright (V) : première image visible environ 1,2 s sur ordinateur ; boutons du widget visibles en 2,3 s (ordinateur) et 2,8 s (iPhone 13). Une seule mesure par appareil.

## Limites de l'audit

- Aucun bouton du widget Caratwise cliqué : `release.caratwise.com/robots.txt` répond 403 (INCONNU). Le parcours, les prix selon options, le panier, la 3D, la vue sur la main, la gravure et le partage ne sont pas vérifiés.
- La liste d'options vient de l'API `storeapi.caratwise.com` chargée par la page à son ouverture ; elle décrit ce que le widget sait gérer, pas ce que le site propose réellement à la vente (I).
- La fiche produit Shopify et le panier n'ont pas été atteints. Le panier de `luxediamondjewelers.com` est autorisé, mais je n'ai pas poursuivi.
- Une seule visite ; contenu pouvant varier.

## Sources

- https://luxediamondjewelers.com/build-your-ring/ (relevé, capture, réseau)
- https://luxediamondjewelers.com/return-policy/, /faq/, /financing/, /services/, /engagement-rings-wedding-bands-bozeman-mt/
- https://storeapi.caratwise.com/api/v1/authorize-client, /labels, /landing-options, /list/landing-catalog (appelées par la page à son ouverture)
- https://luxediamondjewelers.com/robots.txt ; contrôle d'adresses (outil robots.cjs)
