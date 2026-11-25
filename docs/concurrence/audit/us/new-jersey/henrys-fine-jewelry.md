# Henry's Fine Jewelry (Summit et Basking Ridge, New Jersey)

- Site : https://henrysfinejewelry.com/
- Page de départ : https://henrysfinejewelry.com/pages/design-your-ring (assistant « Step 1 of 4 » puis constructeur 3D JewelerOS)
- Date : 15/11/2026 (relu le 25/11/2026)
- Appareils : ordinateur (Chromium 1366 × 900) et affichage iPhone 13 (Chromium émulé)
- Statut : **partiel**. Le robots.txt est lisible et autorisé (`Allow: /`, vérifié par `robots.cjs`). Mais le constructeur 3D est inaccessible sans appeler `jeweleros.com/api/` (interdit), et le panier n'a pas pu être ouvert (voir « Limites »).

## Parcours

| Étape | Options (vérifié sauf mention) |
| --- | --- |
| Accueil | Menu SHOP ONLINE, CUSTOM DESIGN, ENGAGEMENT RINGS, SERVICES, LOCATIONS, ABOUT, BOOK CONSULTATION ; bouton « Design Your Ring » ; « 700+ 5-STAR REVIEWS \| FAMILY-OWNED SINCE 1989 » ; deux téléphones (Summit, Basking Ridge) |
| Assistant 1/4 : style | 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) + « Start from scratch » ; 3 pastilles de métal (or jaune, or blanc, or rose) |
| Assistant 2/4 : pierre | Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; « Decide later » |
| Assistant 3/4 : taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » ; texte : le carat exact se règle ensuite dans le designer 3D |
| Assistant 4/4 : délai souhaité | 1 - 4 weeks / 1 - 3 months / 3 - 6 months / Not sure yet |
| Designer 3D | **Non audité** : le clic sur le choix du délai envoie `POST jeweleros.com/api/create/from-ring-config/` (interdit par le robots.txt de jeweleros.com) |
| Boutique (en repli) | Collection « Engagement Rings » (15 fiches, puis 30 après « Load more ») → fiche produit → « Add to bag » (non cliqué) → panier (non ouvert) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastille Yellow Gold / White Gold / Rose Gold (`jos-metal-btn`) | bouton | La pastille active change (`title` vérifié) ; le titre (14/18 k, platine) n'est pas proposé | aucun | OK |
| Cartes de style (8) | bouton | Passe à l'étape 2 ; clic « Solitaire » vérifié, « Halo » sur iPhone ; les 6 autres non cliquées (même gabarit) | aucun | OK |
| « Start from scratch » | bouton | Non cliqué (même effet supposé : étape suivante) | aucun | non testé |
| Natural / Lab Grown | bouton à bascule | Lab Grown devient actif (`active`) ; les formes ne changent pas | aucun | OK |
| Formes (9) | bouton | Marquise (ordinateur) et Round (iPhone) → étape 3 ; 7 autres non cliquées | aucun | OK |
| Tailles de carat (8) | bouton | « 1 carat » → étape 4 ; 7 autres non cliquées | aucun | OK |
| « Decide later » (étapes 2 et 3) | bouton | Non cliqué | aucun | non testé |
| Choix du délai (4) | bouton | « 1 - 4 weeks » : appel bloqué avant envoi par mon script, puis message « Something went wrong » et bouton « Try again » | aucun | arrêt volontaire (API interdite) |
| Back / Skip | bouton | Présents à chaque étape ; non cliqués | aucun | non testé |
| Book Consultation / Book Appointment | lien `#jos-book-appointment` | Ouvre un module de rendez-vous (non ouvert : formulaire) | aucun | non testé |
| Menu principal, pied de page (≈ 30 liens) | lien | Collections, services, adresses, politique de retour, guide de taille : adresses relevées, pages lues | aucun | OK |
| Collection : « Load more » | bouton | 15 → 30 fiches sans changer d'adresse | prix des fiches | OK |
| Collection : sélecteur de grille (`grid-switcher`) | bouton | Présent ; effet non testé | aucun | non testé |
| Collection : pas de filtres ni de tri visibles | (absent) | Aucun contrôle de filtre relevé (inféré : les filtres Shopify avec « sort_by » ou plusieurs filtres sont interdits par robots.txt) | | n/a |
| « Quick buy » (par fiche) | bouton submit | Non cliqué : `/cart/add` interdit par robots.txt | affiche le prix | non testé |
| Fiche : « Open media 1 in modal » | bouton | Ouvre la photo en grand avec loupe (visuel unique Sylvie, fond blanc) ; une seule image | | OK |
| Fiche : « Add to bag » | bouton submit | Non cliqué : panier interdit par robots.txt (`/cart/add`) | 1 485 $ | non testé |
| Fiche : « More payment options » | lien | Non cliqué (règle : jamais de bouton de paiement) | | non testé |
| Fiche : partage Facebook, X, Pinterest | lien externe | Adresses relevées, non ouvertes | | non testé |
| Fiche : « You may also like » (flèches Slide left/right) | bouton | Carrousel de 11 bagues (2 100 à 5 115 $) ; flèches non testées | | non testé |
| Recherche (`/search`), compte (`/account`) | lien | Non ouverts : recherche et compte sont des chemins sensibles (`/account` interdit) | | non testé |
| Inscription à l'infolettre | champ + bouton | Non rempli (règle : aucun formulaire) | | non testé |
| Guide de taille en ligne (`/pages/whats-my-finger-size`) | lien | Page lue : « Click the Image Below to Download PDF » ; PDF non ouvert | | OK |
| Sélecteur de langue, devise | (absent) | Aucun relevé | | n/a |
| Instagram, Facebook, avis Google (2 liens) | lien externe | Adresses relevées, non ouvertes | | non testé |

## Options disponibles

- **Métaux dans l'assistant** : or jaune, or blanc, or rose (14/18 k non précisé). Pas de platine dans l'assistant (vérifié). Sur la fiche Sylvie : « Available in platinum, 14K & 18K, please inquire for details » (vérifié).
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, ou départ de zéro.
- **Origine** : Natural ou Lab Grown (libellé de l'assistant). **Formes** : ronde, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant.
- **Carats** : 0,5 à 5 (8 paliers).
- **Délai souhaité** : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, non précisé.
- **Non relevés (derrière le designer 3D)** : monture, corps de bague, griffes, pavage, taille de doigt, gravure, filtres de pierres (taille, couleur, pureté, certificat), vues 360°, essayage : non testés, designer inaccessible.
- **Services du site** (page `/pages/our-services`, vérifié) : réparations, mise à taille le jour même sur rendez-vous, gravure (intérieur de bague), expertises écrites et verbales, rachat de bijoux, réparation de montres ; personnel certifié GIA.

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant ni dans le designer vus. Boutique : bagues de fiançailles Sylvie 14 k de **1 166 à 1 830 $** (15 premières fiches, vérifié) ; fiche « Elsie » 1 485 $ avec « Complimentary Cubic Zirconia set in center, center diamond sold separately » : le prix est celui de la monture seule, la pierre en sus (vérifié). Pas de décomposition du prix.
- **Délai** : fiche « Made to Order, please allow 4-6 weeks delivery time » (vérifié). Page d'accueil de l'inventaire : « a couple of weeks » (texte JewelerOS, cité par l'inventaire, non revu ici). Sur mesure : sketch, modèle 3D 360°, modèle en cire essayable, fonte, polissage, sertissage « in-house » (vérifié, `/pages/custom-jewelry-design`).
- **Retours** (vérifié, `/pages/return-policy`) : 15 jours calendaires, état neuf ; « Special order, custom design and altered items are ineligible for returns or exchanges under any circumstances » ; remboursement 5 à 10 jours ouvrés. La fiche affiche pourtant « Hassle-Free Returns » : contradiction apparente pour un produit « Made to Order ».
- **Livraison** : « Free shipping » et « Secure Checkout » en icônes sur la fiche (vérifié) ; frais et délai de livraison du panier : non relevés.
- **Garanties, certificats, financement, paiement du panier** : non relevés. Aucune mention de certificat GIA ou IGI vue pour les diamants dans les pages lues (le personnel est « GIA Certified »).
- **Libellé du synthétique** : « Lab Grown » (assistant), le mot « synthétique » n'apparaît pas.

## Confiance et service

- « 700+ 5-STAR REVIEWS » et deux liens d'avis Google (Summit, Basking Ridge) : compteur du site, non vérifié ailleurs (supposé exact).
- Maison familiale « since 1989 », deux boutiques : 665 Martinsville Road, Basking Ridge ; 419 Springfield Avenue, Summit (vérifié, `/pages/hours-directions`) ; horaires du week-end de Thanksgiving affichés ; jeudi fermé.
- Téléphones : Summit (908) 273-3777 ; Basking Ridge (908) 903-0390. Pas de WhatsApp ni de chat vus. Prise de rendez-vous via `#jos-book-appointment` (non ouvert).
- Valeurs affichées : Quality Craftsmanship, Personal Service, Honesty, Fair Pricing.
- Preuves de fabrication : le texte annonce croquis, CAO 360°, cire, fonte, finition « in-house ». Une galerie « Custom Design Gallery » et un comparateur « Drag to compare images » existent (relevés, non ouverts). Pas de vidéo d'atelier ni de suivi de commande vus.
- Langues : anglais seulement ; devise : dollar (supposé, prix en `$`).

## Mesure du visuel principal

| Appareil | Mesure | Résultat |
| --- | --- | --- |
| Ordinateur | Chargement de `/pages/design-your-ring` jusqu'à « Step 1 of 4 » visible | ≈ 1,3 s (une mesure) |
| iPhone 13 | Même mesure | ≈ 1,2 s (une mesure) |
| Fiche produit | Photo statique unique ; pas de canvas 3D | non chronométré |
| Designer 3D | Jamais chargé (appel interdit) | non mesuré |

L'assistant montre des images fixes de bagues (pas de 3D temps réel). Une capture de la page de départ n'a trouvé aucun `canvas` en 30 s.

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 étapes très court, avant le 3D** : style, pierre (naturel/synthétique et forme), carat, délai souhaité, avec « Decide later » et « Skip » partout. Preuve : étapes 1 à 4 relevées sur ordinateur et iPhone. [inféré : bon modèle d'entrée rapide.]
2. **Choix du délai souhaité** (1 à 4 semaines, 1 à 3 mois…) pour orienter la recommandation : idée à reprendre pour la promesse « 14 jours ouvrés ». Preuve : étape 4.
3. **Carat réglable ensuite, pas figé** : « you can easily set an exact carat weight » (étape 3).
4. **Parcours de fabrication annoncé en 4 temps** : croquis, modèle 3D 360°, cire essayable, produit fini (`/pages/custom-jewelry-design`).
5. **Fiche claire sur la pierre non comprise** : prix de la monture + « center diamond sold separately » (fiche Elsie).
6. **Rendez-vous et téléphone omniprésents** (`#jos-book-appointment`, deux numéros en en-tête).

## Défauts observés

- **Aucun prix** dans l'assistant 4 étapes (au moins avant le designer 3D, non vu).
- **Platine absent de l'assistant** (3 pastilles de métal seulement) ; le 14 ou 18 k n'est pas choisi dans l'assistant.
- **« Hassle-Free Returns » sur la fiche contre « custom design … ineligible » dans la politique** : message contradictoire pour du sur-mesure.
- **Pas de décomposition du prix** et pas de certificat annoncé.
- **Erreur « Something went wrong / Try again »** quand l'appel au service JewelerOS est coupé : le designer dépend entièrement d'un service tiers (le blocage vient de mon audit, pas du site).
- **Aucune vue de la pierre réelle** : photos catalogue du fournisseur (Sylvie), pas des pièces de l'atelier.

## Limites de l'audit

- **Designer 3D non audité** : après le 4e choix, la page appelle `jeweleros.com/api/create/from-ring-config/`, interdit par le robots.txt de jeweleros.com. J'ai bloqué la requête côté navigateur (elle n'est jamais partie) et je me suis arrêté, sans nouvel essai. Monture, griffes, pavage, taille de doigt, gravure, prix, 360° et essayage : non testés.
- **Panier non ouvert** : `/cart` est autorisé par robots.txt, mais l'ouverture a été refusée par le contrôle de permissions de l'environnement ; je ne l'ai pas contournée. Récapitulatif, frais de livraison, délai et moyens de paiement du panier : non relevés. « Add to bag » et « Quick buy » non cliqués (`/cart/add` interdit).
- Un seul passage par appareil, une seule mesure de temps ; `/search`, `/account`, formulaires, PDF et liens externes non ouverts.
- Une seule fiche produit lue en détail (Elsie, S1993) ; 15 fiches de la liste lues pour les prix.

## Sources

- https://henrysfinejewelry.com/ (accueil, vérifié 25/11/2026) ; https://henrysfinejewelry.com/pages/design-your-ring (assistant)
- https://henrysfinejewelry.com/collections/engagement-rings (liste et « Load more »)
- https://henrysfinejewelry.com/collections/engagement-rings/products/sylvie-14k-white-gold-marquise-shaped-halo-engagement-elsie-ring
- https://henrysfinejewelry.com/pages/return-policy ; /pages/custom-jewelry-design ; /pages/our-services ; /pages/about-us ; /pages/hours-directions ; /pages/whats-my-finger-size
- https://henrysfinejewelry.com/robots.txt ; https://jeweleros.com/api/ (interdit, non ouvert)
- Inventaire : docs/concurrence/audit/us/new-jersey/INVENTAIRE.md, fiche 4
