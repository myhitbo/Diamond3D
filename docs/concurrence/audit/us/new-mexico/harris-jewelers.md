# Audit : Harris Jewelers (Rio Rancho, Nouveau-Mexique)

- **Site** : Harris Jewelers NM, https://harrisjewelersnm.com/ (Shopify, boutique en dollars, anglais seulement)
- **Page de départ** : https://harrisjewelersnm.com/pages/custom-ring-builder
- **Date** : 15/11/2026 (date fixée par la consigne ; horloge de la session : 25/11/2026)
- **Appareils** : Chromium 1366 x 900 (ordinateur) et iPhone 13 (émulation Playwright), sans compte, sans formulaire
- **Statut** : **partiel**. Le constructeur 3D est un module JewelerOS (jeweleros.com) dont les appels `/api/` sont interdits par le robots.txt de jeweleros.com (`Disallow: /api/`, vérifié) : seule l'étape 1 a été affichée et les styles n'ont pas été cliqués. Le bouton « Add to cart » appelle `/cart/add` (robots.txt de Harris : `Disallow: /cart/`) : non cliqué, **panier interdit par robots.txt**. Pas de blocage anti-robot (aucun captcha ni 403).
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options relevées | État |
| --- | --- | --- |
| 1. « Let's start designing your ring » (Step 1 of 4) | 3 pastilles de métal (Yellow, White, Rose Gold) ; 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) ; « Start from scratch » ; boutons Back et Skip [V] | affichée ; styles non cliqués |
| 2 à 4 (« 3D Ring Designer ») | texte de la page : « you'll be able to fully customize your design in our 3D Ring Designer » [V] ; contenu des étapes inconnu | **non testé** : appels `jeweleros.com/api/` interdits |
| Fin du parcours | message de la page : enregistrer la conception par SMS (case de consentement « ring builder »), prise de rendez-vous ; conditions de service : SMS « saved configurations, appointment scheduling, order updates » [V, https://harrisjewelersnm.com/policies/terms-of-service] | lu, non actionné |
| Alternative en ligne | catalogue de 150 bagues de fiançailles à prix affiché (`/collections/engagement-rings`), fiche produit, « Add to cart » [V] | lu ; ajout au panier non fait |
| Alternative sur mesure | `/pages/custom-jewelry` : 3 étapes Design, Rendering (images CAO et modèles en cire validés avec le client), Cast [V] | lu |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Yellow Gold / White Gold / Rose Gold (pastilles, étape 1) | bouton | change la couleur des 8 vignettes (images `jos0.b-cdn.net/walkthrough-imgs/solitaire_white.webp`, `_rose`, `_yellow`) ; aucun appel `/api/` déclenché | aucun | fonctionne [V] |
| 8 cartes de style (Solitaire … Three Stone) | bouton | **non cliqué** (ouvrirait le module 3D, appels `/api/` interdits) | n/a | non testé |
| Start from scratch | bouton | non cliqué, même raison | n/a | non testé |
| Back / Skip | bouton | présents dans le DOM, non actionnés | n/a | non testé |
| Text us (Podium) | chat | bulle « Hi there, have a question? Text us here. » ; non ouvert (consigne : pas de chat) | n/a | non testé |
| Book Appointment | lien | ancre `#jos-book-appointment` (module JewelerOS) | n/a | non testé |
| Téléphone 505.892.3841 | lien `tel:` | présent en en-tête et pied de page | n/a | non actionné |
| Adresse 909 36th Place SE | lien | ouvre Google Maps (lien court maps.app.goo.gl) | n/a | non actionné |
| Apply for financing | lien | `/pages/financing` : carte Wells Fargo Jewelry Advantage, demande en ligne ou en boutique [V] | n/a | page lue |
| Search, Account, Wishlist, Cart | lien | `/search`, `/account`, `/pages/wishlist`, `/cart` ; seul `/cart` ouvert : « Your cart is empty » [V] | n/a | `/cart` fonctionne |
| Menu BRIDAL RINGS, COLLECTIONS, CUSTOM DESIGNS, SERVICES, EVENTS, GABRIEL & CO. | liens | méga-menus (liens vers collections, réparation, événements) | n/a | non parcourus un à un |
| Filtre Availability (In stock, Out of stock) | cases | présentes sur `/collections/engagement-rings` ; URL à un seul filtre autorisée, **non cliquée** | n/a | non testé |
| Filtre Price (From $ / To $) | champs numériques | `filter.v.price.gte` et `.lte` : l'URL à deux filtres est interdite par robots.txt (`/collections/*filter*&*filter*`) | n/a | non testé (interdit) |
| Sort By (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant/décroissant, dates) | liste | `sort_by` interdit par robots.txt | n/a | non testé (interdit) |
| LOAD MORE | bouton | passe de 19 à 37 liens produit (18 par clic) [V] | n/a | fonctionne |
| Quick View | bouton | ouvre une fenêtre avec titre, prix et description du produit [V] | prix affiché | fonctionne |
| Add to cart (liste et fiche) | bouton | non cliqué : `/cart/add` interdit par robots.txt | prix affiché | non testé (interdit) |
| Fiche produit : quantité − / + | boutons | présents ; non actionnés | n/a | non testé |
| Fiche produit : ADD TO WISHLIST | bouton | non actionné | n/a | non testé |
| Fiche produit : BOOK AN APPOINTMENT, FINANCING AVAILABLE | liens | présents ; non suivis | n/a | non testé |
| Fiche produit : « Start a Custom Design » | lien | renvoie vers le sur-mesure (non suivi) | n/a | non testé |
| SUBSCRIBE (pied de page) | champ + bouton | formulaire : non rempli | n/a | non testé (consigne) |
| Pas de contrôle de taille de doigt, gravure, carat, pureté, couleur, origine, partage, comparaison ni vue 360°/AR/vidéo sur la fiche | | absents de la fiche lue (photo, quantité, panier, liste de souhaits) [V] | n/a | absents |

## Options disponibles

- **Constructeur (étape 1)** : métaux or jaune, blanc, rose ; styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone [V]. Les étapes 2 à 4 (pierre, taille, etc.) : inconnues.
- **Catalogue** : 150 bagues de fiançailles (« Showing: 150 Results »), 18 par page ; premières fiches : 14K, 18K, or blanc ou jaune, semi-montures (centre à choisir en boutique), solitaires, halos, bagues anciennes [V].
- **FAQ** : or, platine, argent, palladium ; diamants, saphirs, rubis, émeraudes pour le sur-mesure [V, `/pages/faq`].
- **Services** : réparation sur place, financement Wells Fargo, rendez-vous privés, sur-mesure [V].
- Pas de choix d'origine (naturel / synthétique) en ligne : aucune mention de diamant synthétique repérée sur les pages lues [I].

## Prix, délais, retours, garanties

- **Prix** : affichés sur les fiches, de 1 299 $ à 4 625 $ sur la première page ; exemples : bague solitaire illusion 14k blanc 1 399 $, semi-monture Cari 3 ct ovale 2 025 $, semi-monture Reena 2 025 $ [V]. Aucune décomposition (métal, façon, pierre) : seule une phrase prévient que « Current gold pricing on special orders can vary » (relevée à l'inventaire du 25/11, non revérifiée ici) [I].
- **Délai** : « ready for you in just a couple of weeks » (inventaire) ; pas de délai chiffré sur la fiche lue [I].
- **Retours / garantie / livraison** : **aucune page de retours, de garantie ni de livraison trouvée** (conditions de service : SMS et responsabilité seulement ; pas de rubrique dans le pied de page) [V]. Frais de livraison, moyens de paiement et délai du panier : **non vus** (panier interdit).
- **Financement** : carte Wells Fargo Jewelry Advantage, sous réserve d'acceptation du crédit ; demande en ligne ou en boutique (pièce d'identité, numéro de sécurité sociale, adresse postale) [V, `/pages/financing`].
- **Certificats** : mention d'« IJO member jeweler » et de gemmologues certifiés ; pas de certificat GIA/IGI affiché sur les fiches lues [V].
- **Langues / devises** : anglais, dollar américain, vente aux États-Unis [V].

## Confiance et service

- [V] Page « Antwerp Diamonds » : l'équipe se rend deux fois par an à Anvers et choisit les pierres à la main ; trois étapes (écoute, tri à la main, finalistes choisis par le client en boutique) ; membre de l'Independent Jewelers Organization (https://harrisjewelersnm.com/pages/antwerp-diamonds). Le texte cite un témoignage client.
- [V] Entreprise « female-owned », plus de vingt ans, gemmologues certifiés (`/pages/about-us`).
- [V] Sur-mesure : images générées par ordinateur et modèles en cire validés avec le client avant la fonte (`/pages/custom-jewelry`). Pas de photos ni vidéos de fabrication vues ; pas de suivi de commande vu [I].
- [V] Avis clients : aucun avis affiché sur les pages lues (hors témoignage de la page Anvers).
- [V] Contact : téléphone, courriel `info@harrisjewelersnm.com`, SMS via Podium, adresse physique, rendez-vous.
- [V] Page « Diamond Education » : les 4 C en texte, sans outil (https://harrisjewelersnm.com/pages/diamond-education).

## Points forts à retenir pour JR Diamond

1. **Récit de sourcing assumé** (Anvers deux fois par an, tri à la main) : preuve : `/pages/antwerp-diamonds`. Écho direct de l'argument de la Bourse de Ramat Gan ; JR Diamond peut le renforcer par des preuves filmées.
2. **Constructeur 3D en marque blanche à l'entrée** : étape 1 en deux clics (métal, style), vignettes qui changent de couleur sans appel serveur (4 images par métal) : preuve : contrôles des pastilles. Ouverture simple et rapide (étape visible en 2,4 s, mesuré).
3. **Enregistrement de la conception avec rappel par SMS et rendez-vous** : preuve : conditions de service (« saved configurations »). Équivalent à prévoir pour le devis JR Diamond (référence de configuration).
4. **Chargement de la liste en pages de 18 avec « Load more » et Quick View** : preuve : 19 à 37 liens après un clic, fenêtre de détail ouverte.
5. **Prix affichés dès la liste** : preuve : fiches à 1 299 $ à 4 625 $. L'écart principal avec JR Diamond (« Sur devis »).
6. **Financement** présenté sur la fiche produit et sur une page dédiée : preuve : `/pages/financing`.

## Défauts observés

- 3D générique JewelerOS (même module chez John Thomas et Bullock's, d'après l'inventaire) : [I] pas le fichier de fabrication de l'atelier.
- Aucune politique de retour, de garantie ni de livraison trouvée ; aucun délai chiffré sur les fiches [V].
- Aucune décomposition du prix ; les semi-montures sont vendues sans pierre centrale, choisie en boutique (aucune sélection en ligne) [V].
- Pas de choix naturel / synthétique ni de certificat visible en ligne [V].
- Fiche produit très pauvre : une photo, pas de taille de doigt ni de gravure ni de vue alternative [V].
- Le module de construction dépend d'un service tiers : au chargement, le navigateur appelle `jeweleros.com/api/widget/config/`, `/api/config/` et `/api/log-error/` ; ces appels existent à l'ouverture de la page (non demandés par l'auditeur).
- Textes de FAQ génériques (5 questions, sans réponse sur délai ou retours) [V].

## Limites de l'audit

- **Étapes 2 à 4 du constructeur non vues** (appels `/api/` de jeweleros.com interdits) : effet des options sur le prix et l'image, existence d'un prix final, gravure, taille de doigt, vue 3D, partage : **inconnus**.
- Aucun ajout au panier (`/cart/add` interdit) ; panier vu vide seulement : livraison, délai, moyens de paiement, récapitulatif non relevés.
- Filtre de prix et tri interdits par robots.txt ; filtre de disponibilité non testé.
- Chat Podium, formulaire d'abonnement, wishlist, rendez-vous non ouverts (consigne).
- Temps mesurés avec une seule passe par appareil, réseau du serveur d'audit (proxy), pas de conditions réelles de téléphone.
- Pour mémoire, les lectures de la page de départ par `controls.cjs` ont laissé le module charger ses trois appels `/api/` (ouverture de page) ; les scripts suivants les ont coupés.

## Mesures

| Visuel | Ordinateur | iPhone 13 |
| --- | --- | --- |
| Constructeur : étape 1 affichée (texte « Step 1 of 4 ») | 2,4 s (DOM prêt à 1,2 s) | 2,4 s (DOM prêt à 0,8 s) |
| Liste : première image produit chargée | 2,0 s | 2,1 s |
| Fiche : image principale chargée | 2,1 s | 1,2 s |

## Sources

- https://harrisjewelersnm.com/pages/custom-ring-builder (contrôles, captures `harrisjewelersnm_com_pages_custom_ring_builder*.jpg`)
- https://harrisjewelersnm.com/collections/engagement-rings
- https://harrisjewelersnm.com/products/14kw-star-solitaire-er-0-25ctw-si-h-i
- https://harrisjewelersnm.com/pages/custom-jewelry, /pages/financing, /pages/faq, /pages/antwerp-diamonds, /pages/diamond-education, /pages/about-us, /cart, /policies/terms-of-service
- https://harrisjewelersnm.com/robots.txt ; https://www.jeweleros.com/robots.txt (outil `robots.cjs`)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/harris-jewelers/`
