# Audit : Friend & Company Fine Jewelers (La Nouvelle-Orléans, Louisiane)

| | |
|---|---|
| Site | Friend & Company Fine Jewelers, 7713 Maple Street, New Orleans, LA 70118 : https://friendandcompany.com/ |
| Page de départ | https://friendandcompany.com/ringbuilder/settings/ |
| Date | 15/11/2026 |
| Appareils | Chromium 1366 x 900 (ordinateur) ; émulation iPhone 13 (chargement et mesure seulement, pas de relevé de contrôles) |
| Statut | **partiel** : le constructeur de bague GemFind ne s'est jamais affiché dans mes trois chargements (squelette gris), donc aucune de ses options n'a pu être actionnée ; le catalogue, une fiche et les pages de service sont lus |

Marques : **[V]** vérifié, **[I]** inféré, **[S]** supposé. robots.txt [V : https://friendandcompany.com/robots.txt] : `Disallow: /cart/`, `/checkout/`, `/wp-admin/` ; `Crawl-delay: 40`. J'ai donc espacé les chargements de pages d'au moins 40 s (une dizaine de chargements au total) et n'ai ouvert ni le panier ni le paiement.

## Parcours

| Étape | Options |
|---|---|
| 1. Constructeur (`/ringbuilder/settings/`) | [V] La page répond 200 et affiche l'en-tête, le menu et le pied de page, puis une maquette de chargement : bandeau, 9 vignettes, 2 panneaux, 8 cartes grises. Elle est restée ainsi pendant 25 à 32 s, sur ordinateur et en iPhone, avec ou sans mouvement de souris et défilement. [I] Le constructeur est chargé par script (GemFind, d'après l'inventaire) ; aucune requête vers un hôte de constructeur n'a été vue parmi 24 hôtes, et le site utilise NitroPack (scripts différés) : cause non établie (script différé, blocage du proxy de la machine, ou panne). |
| 2. Catalogue (`/product-category/bridal-engagement/engagement-rings/`) | [V] 43 résultats (30 par page, page 2), tri (5 choix), cases de catégorie et de pierre. |
| 3. Fiche (`/product/edwardian-old-mine-cut-diamond-engagement-ring/`) | [V] Prix ou « CALL FOR PRICE », « CALL TO PURCHASE », « Add to Wishlist », partage, onglets « Stone details » et « Additional information ». Pas de bouton d'ajout au panier sur cette fiche. |
| 4. Sur mesure (`/custom-design/`) | [V] 4 étapes : conception d'après la vision, choix du métal et des pierres, fabrication par les bijoutiers, remise ; « Reimagine something old » (remontage de bijoux de famille) ; « Schedule a consultation ». |
| 5. Panier | **Non atteint** : `/cart/` interdit par robots.txt. |

## Contrôles vérifiés

Relevé automatique du constructeur : 34 contrôles visibles, tous du cadre du site (menu, pied de page, 3 réseaux sociaux, newsletter) [V]. Aucun contrôle de choix de monture, métal, forme, carat ne s'est affiché.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Constructeur : étapes, filtres de monture, métal, forme, carat, origine, couleur, pureté, certificat, taille de doigt, gravure | (non affichés) | non observés | – | **non testé** : contenu jamais chargé |
| Menu « Bridal & Engagement » : Engagement Rings, Antique Engagement Rings, New Engagement Rings, Eternity Bands (antiques et neuves), « Ring Builder » | liens | présents ; « Ring Builder » mène à `/ringbuilder/settings/` ; la page « Engagement Rings » lue [V] | – | catalogue fonctionne |
| Menu « Antique & Estate » (bracelets, boucles, colliers, broches, bagues), « Fine Jewelry », « Our Services », « Watches », « Gift Registry » (site externe myshoplocal.com), « About Us » | liens | présents ; non tous ouverts | – | non testé (hors sujet) |
| Tri : popularité, note moyenne, nouveauté, prix croissant, prix décroissant | liste déroulante (`orderby`) | présente sur le catalogue ; **non actionnée** | – | non testé |
| Cases : Antique & Estate, sous-catégories, Watches, Diamond, Pearl, Amethyst, Emerald, Opal, Ruby, Sapphire, Tanzanite, Topaz | cases | présentes (relevé) ; non actionnées | – | non testé |
| Pagination « 1 2 → » | liens | présente (43 résultats, 30 affichés) | – | non testé |
| Fiche : « Add to Wishlist », « Share » | boutons | présents ; non cliqués (`/wishlist/` : page de liste non vérifiée en robots) | – | non testé |
| Fiche : onglets « Stone details », « Additional information » | onglets | présents ; contenu non lu | – | non testé |
| Panier (icône), « My Account », « Wishlist » | liens | `/cart/` interdit ; `/my-account` : compte, non ouvert | – | non testé |
| Recherche (loupe) | bouton | non actionnée | – | non testé |
| Widget « Text us » (Podium) : « Hi there, have a question? Text us here. » | bulle de SMS | visible sur la capture ; non ouvert (consigne : pas de chat) | – | non testé |
| Téléphone (504) 866-5433 | lien `tel:` | présent | – | non suivi |
| Newsletter | formulaire | non rempli | – | non testé |
| Lien GIA du pied de page | lien vers gia.edu | présent ; non suivi | – | non suivi |

## Options disponibles

- Constructeur : options **inconnues** (non chargé). D'après l'inventaire du même jour : constructeur GemFind sous « Bridal & Engagement » > « Find Your Diamond » [V dans l'inventaire, non revu ici].
- Catalogue [V] : 43 bagues de fiançailles, en majorité anciennes ou d'occasion (« estate », « Edwardian », « Art Deco », « old mine cut »), or 10 k, 14 k, 18 k et platine selon les titres ; saphir et diamant ; quelques bagues neuves (« Hidden halo », « Brilliant princess cut »). Filtres de pierre : diamant, perle, améthyste, émeraude, opale, rubis, saphir, tanzanite, topaze.
- Fiche [V] : poids de diamant, couleur, pureté et taille de la bague écrits dans la description (p. ex. 3,09 ct, M, VS1, taille 6) ; un exemplaire unique.
- Taille de doigt : bagues d'occasion à taille fixe [V] ; guide des tailles non trouvé [I].
- Synthétique : aucune mention dans les pages lues [V : catalogue, fiche, sur-mesure].

## Prix, délais, retours, garanties

- Prix [V] : catalogue de 1 200 $ à 9 000 $ sur les 30 premières bagues (tri croissant par défaut dans la page lue) ; une bague « CALL FOR PRICE ». Prix unique sans décomposition.
- Délai [V] : sur mesure : aucune durée annoncée (`/custom-design/`).
- Retours, garantie, livraison, financement : **non trouvés** dans les pages lues (fiche, catalogue, sur mesure, services). Pages de politique non cherchées au-delà de « Privacy Policy » et « Terms & Conditions » [I : elles pourraient les contenir ; non ouvertes].
- Moyens de paiement et frais : inconnus (panier interdit).

## Confiance et service

- [V] Depuis 1976 (« Est. 1976 » dans l'en-tête de capture) ; « Our Expert Jeweler has more than 30 years of experience » (`/custom-design/`).
- [V] Services : réparation, remontage et restylisation, rachat de bijoux et de montres, montres (Baume & Mercier d'après un lien du menu), registre de cadeaux (`/services/`).
- [V] Logo GIA en pied de page (certificat non précisé sur la fiche lue).
- [V] Contact : téléphone (504) 866-5433 ; mardi au vendredi 10 h à 17 h, samedi 10 h à 16 h ; SMS via le widget Podium.
- Avis clients, photos ou vidéos d'atelier, suivi de commande : non trouvés dans les pages lues [V]. Langue : anglais seul ; devise : dollar [V].

## Points forts à retenir pour JR Diamond

1. **Pierre de famille remise à neuf** : une section entière « Reimagine something old » pour transformer l'héritage en bague de fiançailles. Preuve : `/custom-design/`. Correspond à la page « bijou de famille » de JR Diamond.
2. **Description complète de la pierre dans le texte** (poids, couleur, pureté, taille de la bague). Preuve : fiche Edwardian.
3. **« Call to purchase » assumé** : un prix sur demande ne passe pas pour un défaut quand il s'agit d'une pièce unique ; JR Diamond doit en revanche afficher le sien. Preuve : fiche Edwardian (inféré).
4. **Contact par SMS dans une bulle** annoncée dès l'arrivée. Preuve : capture de `/ringbuilder/settings/`.

## Défauts observés

- **Page de départ inutilisable dans mes essais** : le constructeur reste un squelette gris pendant plus de 25 s, sans message d'erreur, sur ordinateur et en iPhone [V]. Cause inconnue (voir Parcours).
- Pas de prix pour certaines pièces (« CALL FOR PRICE ») ; fiche sans bouton d'achat [V].
- Catalogue très majoritairement d'occasion : peu de choix de bagues neuves personnalisables [I : d'après les titres].
- Aucun retour, garantie ni délai trouvés dans les pages lues [V].
- Aucun guide des tailles, des 4 C ni du synthétique trouvé [V].

## Limites de l'audit

- Le constructeur n'a pas été vu : tous les contrôles des étapes (monture, métal, forme, carat, origine, filtres de pierres, certificat, taille, gravure, prix, vues 3D) sont **non testés**. Je n'ai pas insisté pour passer (pas de contournement, consigne de non-nouvel essai).
- Crawl-delay de 40 s : environ dix pages seulement ; tri, filtres et pagination du catalogue non actionnés.
- Panier, paiement, compte : non ouverts (`/cart/` et `/checkout/` interdits). Frais de livraison, délai de livraison, moyens de paiement : inconnus.
- Contrôles de la version iPhone non relevés ; seul le chargement du constructeur a été observé.
- Mesure du visuel principal : **aucune mesure possible** pour le constructeur (jamais affiché en 25 à 32 s) ; non mesuré pour la photo de fiche.
- Aucun formulaire rempli, aucun chat ouvert.

## Sources

- https://friendandcompany.com/ringbuilder/settings/
- https://friendandcompany.com/product-category/bridal-engagement/engagement-rings/
- https://friendandcompany.com/product/edwardian-old-mine-cut-diamond-engagement-ring/
- https://friendandcompany.com/custom-design/ , https://friendandcompany.com/services/
- https://friendandcompany.com/robots.txt
- Inventaire du même jour : `docs/concurrence/audit/us/louisiana/INVENTAIRE.md`
- Captures et relevés : `scratchpad/audit/us/friend-and-company/` (hors dépôt).
