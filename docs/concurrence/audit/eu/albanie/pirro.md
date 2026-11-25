# Audit : Pirro (Artistic Jewellery Pirro), Tirana

- **Site** : https://pirro.al/ — **Date** : 15/11/2026 — **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : partiel (le configurateur annoncé est une page vide ; audit mené sur les fiches produit, le panier et les pages de service)
- Légende : [V] vérifié, [I] inféré, [S] supposé. Robots : toutes les adresses ouvertes sont AUTORISÉES (robots.txt WordPress, `Disallow` limité à wp-admin et aux dossiers de logs) [V].

## Parcours

| Étape | Options |
|---|---|
| Menu « Engagement and Wedding » | Engagement Rings for Her, Engagement Rings for Him, Wedding Bands, « Configurator » [V] |
| Liste | Tri (popularité, nouveauté, prix croissant ou décroissant) ; aucun filtre de prix, de forme ni de carat [V] |
| Fiche | Photos (4 vues), métal et titre affichés en lecture seule, taille (liste) sur certaines bagues, guide des tailles, ajout au panier, favoris [V] |
| Panier | Récapitulatif, coupon, livraison « Free Shipping » vers Tirana, bouton « Proceed to Checkout », logos Visa, Mastercard, Maestro [V] |
| Configurateur | https://pirro.al/configurator/ : page vide (fil d'Ariane « Home » Configurator » seulement) [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Configurator (menu et page d'accueil) | lien | Mène à /configurator/, page vide sans contrôle (35 contrôles visibles, tous du gabarit : menu, pied de page) | — | Défaut : promesse non tenue |
| Tri (4 valeurs) | liste | Présent sur la liste des bagues de fiançailles | — | OK, non rejoué valeur par valeur |
| Liste « product_cat » | liste | 35 catégories (dont « Rings for her », « Wedding Band ») | — | Présente [V] |
| Fiche Oval Solitaire : Add To Cart | bouton | Pas de taille proposée ; bouton présent | 2 227,67 € | Non cliqué (même mécanique que la fiche suivante) |
| Fiche Éclat Solitaire : taille 48 à 70 | liste | 23 tailles, « 1 in stock » ; sans choix, message « Choose an option » | 1 002,45 € constant | OK |
| Add To Cart (Éclat) | bouton | Ajout au panier ; icône panier passe à 1 ; le panier indique « Size: 48 » alors que j'avais choisi 54 | 1 002,45 € | Anomalie [V] : la taille 54 n'a pas été conservée, cause inconnue (peut venir du script) |
| Size Guide | lien | Aucune fenêtre visible détectée ; contenu via /size-guide/ (diamètre intérieur, ex. 16,6 mm = 52) | — | Fenêtre non observée |
| Description, Order Delivery & Pricing Policy, Eternal Guarantee & Services | accordéons | S'ouvrent et affichent le texte (voir plus bas) | — | OK |
| Return And Exchange (accordéon) | accordéon | Absent du contenu sur la fiche Éclat ; texte sur /returns-and-exchange/ | — | Incohérence mineure |
| Book an Appointment, Ask a Diamond Expert, Find Your Fit, Request a Repair | tuiles | Présentes dans « How Can We Assist » ; destination non ouverte | — | Non testé (hors parcours) |
| Favoris (cœur), compte, recherche, store locator | icônes | Présentes ; compte et favoris non utilisés | — | Non testé : compte interdit par la règle de lecture seule |
| Précédent, Suivant, flèches de galerie, vignettes | boutons | Présents ; galerie de 4 images | — | OK |
| Checkout | bouton | Non cliqué (au-delà du panier) | — | Non testé, règle |
| Chat, WhatsApp | — | Aucun bouton de ce type vu ; téléphone +355 68 206 9119 en pied de page [V] | — | Absent |

## Options disponibles
- **Métal** : or jaune, blanc, rose et argent en catégories ; sur les fiches, un seul métal et un seul titre fixes (18 K) [V].
- **Pierre** : bagues avec diamant (« Pink Diamond Halo », « Pear Halo »), saphir, zircon, quartz fumé ; une fiche annonce « 0.55 ct lab-grown diamond of exceptional D color and VVS2 clarity » [V]. Pas de choix d'origine naturel ou synthétique par bouton.
- **Taille** : 48 à 70 (échelle française) sur les bagues à variantes [V].
- **Formes en catalogue** : halo, solitaire, ovale, princesse, poire, émeraude, coussin, baguette [V].
- Pas de choix de carat, de monture, de gravure ni de pavage en ligne [V]. Personnalisation « sur demande » via boutique [I].

## Prix, délais, retours, garanties
- **Prix** : en euros ; 462 € (zircon) à 4 455 € (diamant rose) sur la liste ; trois bagues « enquire for price » [V]. Prix « indicatif » : le texte dit que le prix final dépend du poids de métal, du carat et qu'un devis personnalisé est envoyé par e-mail [V]. Pas de décomposition.
- **Délai** : fabrication 1 à 5 semaines après confirmation de paiement ; retrait en boutique ou labo à Tirana ; envoi postal en Albanie et à l'international [V].
- **Livraison** : « Free Shipping » vers Tirana au panier ; droits et taxes à la charge du client à l'étranger [V].
- **Paiement** : virement, carte sur le site, espèces en boutique, paiement à la livraison en Albanie ; paiement intégral avant production ou expédition ; plans mensuels avec des banques (FAQ) [V].
- **Retours** : échange sous 30 jours, produit neuf, **pas de remboursement** [V]. Exception du sur mesure non précisée sur la page [V].
- **Garantie** : pierres certifiées par le gemmologue GIA de la maison ; certificats GIA, HRD ou autres selon le client ; nettoyage, réparation, remise à taille, remplacement de pierre « exclusivement dans nos points officiels » ; « lifetime services » sur la fiche [V].

## Confiance et service
- Histoire depuis 1986, premier laboratoire d'or d'Albanie (financé par un prêt allemand en 1994-95), trois boutiques [V : /our-story/].
- Rendez-vous en boutique (« Book an appointment », 09:00-20:30 lun-sam), localisateur de boutiques, guide du diamant (4 C), guide de taille (/size-guide/ : bague, collier, bracelet) [V].
- Réseaux : Facebook, X, LinkedIn, Instagram, YouTube, TikTok [V].
- Pas d'avis clients, pas de photos ni vidéos de fabrication par commande, pas de suivi illustré [V].
- Langues : anglais seul sur les pages lues ; devise : euro [V].

## Points forts à retenir pour JR Diamond
- Nomme « lab-grown » un diamant D VVS2 0,55 ct sur la fiche (preuve : onglet Description de /product/eclat-solitaire-ring/) : le marché albanais admet le synthétique en vitrine.
- Plans de paiement bancaires et paiement à la livraison, utiles pour un achat de plusieurs milliers d'euros (preuve : /payment-and-prices/ et FAQ).
- Gemmologue GIA interne cité comme garantie (preuve : /warranty/) : à rapprocher de la preuve par certificat de JR Diamond.

## Défauts observés
- Page /configurator/ vide, malgré la promesse sur la page d'accueil [V].
- Taille choisie (54) remplacée par 48 au panier, sur un seul essai [V, cause non établie].
- Trois fiches « enquire for price » et prix final laissé à un devis par e-mail malgré un prix affiché [V].
- Aucune photo de la bague portée ; images détourées uniquement [V] ; pas de 3D, 360° ni vidéo (0 vidéo détectée) [V].
- Pas de remboursement, pas de mention de l'exception du sur mesure [V].

## Limites de l'audit
- Panier atteint avec un seul article ; checkout non ouvert. Compte, favoris et chat non testés.
- Temps d'apparition du visuel principal : première image dans le DOM de la fiche Oval, 4,4 s sur ordinateur et 3,4 s en affichage iPhone ; fiche Éclat 2,1 s et 2,0 s. Mesure de présence de l'image, non de peinture [V]. Liste des bagues : 8,1 s (ordinateur) et 6,7 s (iPhone) jusqu'au DOM chargé [V].
- Pas d'autres fiches, de l'ordre de 40 bagues listées, explorées ; modèles d'alliances non ouverts.
- Mobile : capture de la liste et des fiches faite ; aucune différence de contenu constatée [I].

## Sources
- https://pirro.al/ , /configurator/ , /product-category/engagement-rings-for-her-2/ , /product/oval-solitaire-ring/ , /product/eclat-solitaire-ring/
- https://pirro.al/payment-and-prices/ , /returns-and-exchange/ , /delivery/ , /warranty/ , /frequently-asked-questions/ , /size-guide/ , /diamond-guide/ , /our-story/ , /cart/
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/albanie/ (hors dépôt)
