# Audit : Fink's Jewelers (Virginie, États-Unis)

- **Site** : Fink's Jewelers, https://www.finks.com (Shopify, Roanoke VA, famille depuis 1930)
- **Page de départ** : https://www.finks.com/collections/the-studio-collection (collection « The Studio Collection »)
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Pas de configurateur : catalogue de bagues finies, pièces uniques. Le bouton « Add To Cart » n'a pas été actionné : `/cart/add` est interdit par robots.txt (règle `Disallow: /cart/`, contrôlé). Le panier non vide n'a donc pas été vu.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié sauf mention) |
|---|---|
| 1. Collection Studio (107 résultats) | Filtres style, forme, métal, prix ; tri ; pagination 9 pages ; liste de souhaits ; recherche |
| 2. Fiche bague | Galerie 3 photos, essayage virtuel, souhaits, panier, description, contact, partage ; aucune option de métal, pierre ou taille à choisir |
| 3. Panier | Non atteint avec une bague (bouton interdit). Panier vide lu : « Your cart is currently empty » + suggestions |
| 4. Hors site | Prise de rendez-vous en magasin, « Custom Design Services » (en magasin uniquement) |

Constat central [V] : **pas de construction en ligne**. Chaque bague est « one-of-a-kind » ; la fiche dit de contacter ecommerce@finks.com pour une commande spéciale avec d'autres spécifications.

## Contrôles vérifiés

Liste complète des contrôles : JSON du script `controls.cjs` (119 contrôles sur la collection, 74 sur la fiche, ordinateur ; même ordre de grandeur sur iPhone). Ci-dessous tous les contrôles propres au produit ; navigation, pied de page et liens répétés regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre style : Solitaire (7), Halo (44), Diamond Pave (49), Three Stone (11), Vintage (15), Hidden Halo (3) | lien (hash) | Réduit la liste, compteur « N results » exact [V] | aucun | OK |
| Filtre forme : Round 18, Oval 18, Cushion 18, Princess 15, Pear 15, Emerald 21, Marquise (1 seule bague) | lien | Idem [V] | aucun | OK |
| Filtre métal : Platinum 8, Yellow Gold 8, Rose Gold 3, White Gold 3, Mixed Metals 92 | lien | Idem [V]. « Mixed Metals » regroupe 92 bagues sur 107 : filtre peu discriminant | aucun | OK, peu utile |
| Prix min / max + « Update » (plage proposée 2 000 à 55 090 $) | 2 champs + bouton | 5 000 à 8 000 donne 7 résultats [V] | filtre | OK |
| Tri (What's New, Most Popular, Price Low to High, High to Low) | liste | Change l'URL (`#/sort:ss_price:asc`) ; l'ordre n'a pas été contrôlé produit par produit | aucun | OK |
| Pagination 1 à 9 (12 bagues par page) | lien | Charge `?page=N` [V pour la présence, clic non testé] | aucun | non testé : sans intérêt |
| Add To Wishlist | bouton (div) | Non cliqué : probable compte requis [S]. Page `/pages/wishlist` existe | aucun | non testé |
| Virtual Try On | bouton | Ouvre un iframe Camweara (cdn.camweara.com, robots autorisé) ; sans caméra : message « Enable your camera… » [V] | aucun | fonctionne (caméra non testée) |
| Add To Cart | bouton | NON cliqué : `/cart/add` interdit par robots.txt | 7 600 $ affiché | non testé (interdit) |
| Product Description (accordéon) | bouton | Déplie : métal, pierre centrale, poids, couleur, pureté, accents [V] | | OK |
| Contact Us (accordéon) | bouton | Déplie : tél. (540) 427-6681, e-mail, rendez-vous en magasin [V] | | OK |
| Share | bouton | Affiche trois icônes : Pinterest, e-mail, copier/message [V, destinations non suivies] | | OK |
| Miniatures de galerie (3) | image | Clic sans changement visible de l'image principale dans mon test ; les 3 photos restent affichées [V] | | à revoir [I] |
| Clic sur l'image principale | image | 6 éléments de type zoom/lightbox détectés ; aperçu pas capturé de façon concluante | | partiel |
| Rendez-vous, Find a Store, Text Us, Send a Message | liens/bouton | Redirections vers pages internes ; « Text Us » ouvre un widget de SMS (non ouvert) | | non testé (service) |
| Online Financing (Affirm) | lien | Page lue [V] | | OK |
| S'abonner à la lettre (e-mail) | champ | Non rempli (règle) | | non testé |
| Accessibilité (bouton accessiBe, Alt+1) | lien | Présent [V] | | non testé |

## Options disponibles

- **Style** : Solitaire, Halo, Diamond Pave, Three Stone, Vintage, Hidden Halo [V].
- **Forme du diamant central** : Round, Oval, Cushion, Princess, Pear, Emerald, Marquise [V].
- **Métal** : platine, or jaune, or rose, or blanc, métaux mixtes. Titre indiqué en texte seulement (« 14K yellow gold ») [V].
- **Taille de doigt** : pas de sélecteur. Chaque bague est dans une taille donnée (6 et 6,5 vus) ; « prix valable pour tailles 4 à 7,5, supplément à partir de 8 » [V]. Montant du supplément non publié.
- **Gravure, pavage, griffes, carat, origine** : aucun choix en ligne.
- **Pierre** : naturelle seulement ; page « Lifetime Guarantee » parle de diamant naturel « Fink's Superior Quality » [V]. Aucune mention de synthétique trouvée sur les pages lues [I].

## Prix, délais, retours, garanties

- **Prix** : un seul prix par bague, « Regular price », sans décomposition : 7 600 $ (ovale halo 1,20 ct I SI1, or jaune 14 k) ; 10 800 $ (solitaire serti clos 1,51 ct H SI1, platine) [V]. Aucun détail métal / pierre / façon. Prix en USD « sujets à changement sans préavis » (pied de page) [V].
- **Livraison** : UPS Overnight Priority gratuite aux États-Unis ; signature obligatoire ; pas de boîte postale ; pas de commande hors États-Unis [V : /pages/online-shipping-policy]. Expédition le jour même des articles en stock, jusqu'à 2 jours ouvrés ; commandes sur mesure : « délai supplémentaire indiqué » [V].
- **Délai du sur mesure en magasin** : 4 à 7 semaines [V : /pages/custom-design-services].
- **Retours** : 30 jours à partir de la livraison pour les commandes en ligne, neuf et non porté, emballage d'origine ; étiquette prépayée sur demande par e-mail ; 25 $ de frais sans emballage. **Les commandes personnalisées et spéciales ne sont pas reprenables** ; la fiche affiche « Custom orders are final sale » [V : /pages/returns-exchanges].
- **Garantie à vie du diamant** : remplacement du diamant perdu ou ébréché si inspection tous les 6 mois ; centre de 0,25 ct et plus ; reprise au prix d'achat pour un diamant d'au moins +50 % ; 30 jours de retour du diamant [V : /pages/lifetime-guarantee].
- **Financement** : Affirm, 10 à 36 % APR, 3 à 36 mois, exemple 2 000 $ à 96,97 $/mois sur 24 mois à 15 % [V]. Affirm déjà chargé sur la fiche [V : requête features.affirm.com].
- **Moyens de paiement au panier** : non vu (panier interdit).

## Confiance et service

- **Certificats** : « la plupart des diamants sont notés initialement par le GIA » ; inspection interne par un gemmologue (« Clif »). La fiche n'affiche ni numéro ni lien de rapport [V].
- **Avis clients** : section « Reviews & Questions » (Yotpo) présente sur la fiche ; contenu non lu [V pour la présence].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ni suivi de fabrication vus. Mise en avant d'un expert (texte). Magazine et blog [V].
- **Service** : téléphone, e-mail, SMS (Text Us), rendez-vous en magasin, prise en charge Online Customer Care lun-ven 8 h 30-17 h [V]. « Free Shipping » en onglet latéral.
- **Langues / devises** : anglais, USD seulement [V].
- **Libellé du synthétique** : non applicable (non vu).

## Mesure du visuel principal

Méthode : `waitUntil: commit` puis première image principale visible et chargée, sans cache, via le proxy du bac à sable [V].

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche ovale halo | 0,66 s (visible), 0,68 s (chargée) ; deuxième mesure 0,75 s / 0,79 s | 0,64 s / 0,68 s |
| Fiche solitaire platine | 0,56 s / 0,61 s | non mesuré |

Conditions de l'environnement d'audit très favorables (réseau de centre de données) ; à comparer avec réserve [I].

## Points forts à retenir pour JR Diamond

1. **Compteurs de résultats précis à côté de chaque filtre** (ex. « Halo (44) »), mise à jour immédiate, adresse qui mémorise le filtre. Preuve : filtres testés ci-dessus. Utile pour notre catalogue de modèles.
2. **Spécifications de pierre en clair sur chaque fiche** (poids, couleur, pureté du centre et des accents, métal et titre). Preuve : fiche NS841916. Notre « ≈ 0,25 ct à confirmer » est plus faible.
3. **Livraison gratuite, assurée, express, annoncée sur la fiche** ; politique de retour de 30 jours lisible. Preuve : pages shipping/returns.
4. **Essayage virtuel sur la main** (Camweara) accessible d'un bouton. Preuve : iframe ouvert.
5. **Garantie à vie nommée et chiffrée** (inspection tous les 6 mois, reprise au prix +50 %). Argument de confiance copiable (version JR à définir avec l'atelier).
6. **Affirm affiché dès la fiche** avec exemple mensuel chiffré. Preuve : /pages/financing.

## Défauts observés

1. **Aucune personnalisation en ligne** : pièce unique, « special order » par e-mail ; pour ce prix on ne peut pas choisir le métal ni la pierre. Pas de 3D.
2. Prix unique, **sans décomposition** ; taille de doigt : prix valable 4 à 7,5, supplément au-delà non chiffré.
3. Sur mesure et commandes spéciales **non reprenables** ; la mention « final sale » vient sans explication.
4. Filtre « Mixed Metals » englobe 92 bagues sur 107 : peu utile.
5. Fiche : trois photos seulement (rendu studio), pas de vidéo, pas de 360° vu [V sur la fiche testée].
6. Pas de certificat visible (ni lien GIA) sur la fiche.
7. Miniatures sans effet visible dans mon test (peut être un artefact d'automatisation).

## Limites de l'audit

- « Add To Cart » interdit par robots.txt : panier avec article, récapitulatif, frais de livraison et moyens de paiement **non vus**. Le panier vide a été lu.
- Wishlist, Text Us, liste de contacts, lettre d'information, Affirm : non actionnés (compte, données personnelles ou envoi).
- Une seule fiche en détail (deux lues) ; autres collections, bagues de fiançailles du catalogue général et alliances non parcourues.
- Les 3 miniatures et le zoom ne sont pas concluants.
- Contenu des avis Yotpo non lu.
- Captures : scratchpad `us/finks/`.

## Sources

- https://www.finks.com/collections/the-studio-collection (filtres, tri, prix)
- https://www.finks.com/collections/the-studio-collection/products/the-studio-collection-oval-diamond-engagement-ring-with-round-diamond-halo-in-yellow-gold
- https://www.finks.com/collections/the-studio-collection/products/the-studio-collection-bezel-set-round-diamond-solitaire-engagement-ring-in-platinum
- https://www.finks.com/pages/returns-exchanges · /pages/online-shipping-policy · /pages/lifetime-guarantee · /pages/financing · /pages/custom-design-services · /pages/superior-quality-diamonds · /pages/online-customer-care · /cart (vide)
- https://www.finks.com/robots.txt (via l'outil de contrôle)
