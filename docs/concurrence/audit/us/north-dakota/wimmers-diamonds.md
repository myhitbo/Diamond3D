# Audit : Wimmer's Diamonds, collection « Engagement Rings » (Fargo, Dakota du Nord)

| | |
|---|---|
| Site | Wimmer's Diamonds, 4582 32nd Avenue S., Fargo (ND) : https://www.wimmersdiamonds.com |
| Page de départ | https://www.wimmersdiamonds.com/collections/engagement-rings |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : catalogue, filtres, fiche bague et pages de service audités ; pas de configurateur sur le site ; le panier n'a pas pu être rempli (`/cart/add` et `/cart.js` interdits par `robots.txt`, bouton « Add to Cart » non cliqué ; `/cart` autorisé mais vide) |
| Plateforme | Shopify (thème « Fueled by Fruchtman »), filtres Usf (`uff_…`, `usf_take`), liste de souhaits `advanced-wishlist`, Shop Pay |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en USD.

## Parcours

| Étape | Options |
|---|---|
| 1. Collection « Engagement Rings » | 230 bagues ; filtres Designer, Metal, Stone Shape, Style, Price ; 56 puis 112 produits par « Load More » ; tri « Relevance » [V] |
| 2. Fiche bague | une seule photo, prix **de la monture seule**, référence, « Add to wishlist », « Inquire About », retrait en magasin, description, partage [V] |
| 3. Demande | « Inquire About » : fenêtre « Inquiry Form » (prénom, nom, e-mail, message) [V] |
| 4. Sur mesure (`/pages/custom-jewelry-design-restyling`) | 4 étapes : discussion, CAO avec aperçu 3D, fonte et sertissage, remise [V] |
| 5. Alliances (`/collections/wedding-bands`) | 334 produits avec bouton « Add to cart » (non cliqué) [V] |
| 6. Panier (`/cart`) | « Your cart is currently empty » [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Designer (Naledi 6, Parade Design 18, Sylvie 29) | boutons | non cliqués (un seul filtre à la fois autorisé par `robots.txt`, un seul testé) | | NT |
| Filtre Metal (Yellow Gold 153, White Gold 61, Platinum 5, Two-Tone 28, Other 1) | boutons | non cliqués, effectifs lus | | NT |
| Filtre Stone Shape : Round | bouton | adresse `?uff_qey449_tags=Round`, « 90 products » | | OK |
| Autres formes (Emerald 16, Marquise 23, Oval 65, Pear 11, Radiant 11) | boutons | non cliqués | | NT |
| Filtre Style (10 : Classic 59, Diamond Band 99, Floral 20, Halo 11, Hidden Halo 60, Solitaire 65, Split-Shank 21, Three-Stone 37, Twist 13, Vintage 14) | boutons | non cliqués, effectifs lus | | NT |
| Filtre Price (5 tranches : 0-1 000 $ 5 ; 1 000-2 000 $ 53 ; 2 000-4 000 $ 124 ; 4 000-6 000 $ 40 ; dès 6 000 $ 8) | boutons | non cliqués, effectifs lus | | NT |
| Tri « Relevance » | liste | non ouvert : toute sélection produit `sort_by`, interdit par `robots.txt` | | NT (interdit) |
| Grille / Liste | boutons | présents ; non testés | | NT |
| Load More | bouton | 72 puis 128 liens de produits ; adresse `?usf_take=56` | | OK |
| Vignette, titre | liens | ouvrent la fiche (`/collections/engagement-rings/products/<nom>`) | | OK |
| Quick view | lien | n'ouvre pas de fenêtre : mène à la fiche avec `?variant=…` | | OK (comportement de lien) |
| Wishlist (vignette) | lien | `javascript:void(0)` ; l'en-tête mène à `/apps/advanced-wishlist` | | OK (page de la liste ouverte) |
| Inquire About | lien | fenêtre « Inquiry Form » avec 4 champs et « Submit » | | OK (non envoyé) |
| Add to wishlist (fiche) | lien | présent ; non cliqué | | NT |
| View store information | bouton | présent ; non cliqué | | NT |
| Partage (Facebook, Twitter, Pinterest, WhatsApp, copier) | liens | `whatsapp://send?text=…`, « Copied to clipboard » ; domaines externes non ouverts | | NT |
| Shop Pay « $73.30/mo » | lien | affiché dans la fiche ; non cliqué (règle : pas de paiement) | | NT |
| Add to Cart (alliances, suggestions) | bouton | non cliqué | | NT (panier interdit) |
| Téléphone 701-282-2606 | lien `tel:` | présent en haut de page | | OK |
| Menu Engagement & Bridal, Diamonds, Fine Jewelry, Custom Design, Services, About | liens | listes lues ; « Diamonds » mène à l'éducation, au comparatif « Natural vs. Lab Grown », aux pierres de couleur | | OK (liens lus) |
| Mobile : « Filters », « Sort » | boutons | présents en iPhone 13 ; non ouverts | | NT |
| Abonnement e-mail | champ | présent ; non rempli | | NT |

## Options disponibles

- Métaux filtrables : Yellow Gold, White Gold, Platinum, Two-Tone, Other ; pas de rose gold dans les bagues de fiançailles (il apparaît dans les alliances : 2 produits) [V].
- Formes : Emerald, Marquise, Oval, Pear, Radiant, Round [V]. Styles : 10 (voir plus haut) [V].
- Prix : 5 tranches ; bagues de 1 175 $ (solitaire) à plus de 6 000 $ [V].
- Variantes : pas de sélecteur de taille de doigt ni de métal sur la fiche lue ; la taille 7 est indiquée dans la description [V].
- Gravure, griffes, corps de bague : aucune option ; la personnalisation passe par le sur mesure [V].

## Prix, délais, retours, garanties

- Prix de la monture seule : « Engagement ring prices are for setting only, unless otherwise noted » [V, fiche `solitaire-engagement-ring-15`]. Exemple : monture solitaire 14 K or blanc 4 griffes pour un rond de 9,1 mm, 1 175 $ [V].
- Pas de décomposition du prix. Certaines bagues soldées affichent l'ancien et le nouveau prix (1 350 $ barré, 675 $, « Save 50 % ») [V].
- Fabrication et livraison : traitement sous un jour ouvré, UPS Ground 2 à 5 jours ouvrés, livraison offerte dès 350 $ (20 $ en dessous, 40 $ pour l'Alaska et Hawaï), signature requise, pas d'envoi international [V, `/policies/shipping-policy`]. Retrait en magasin « prêt sous 24 heures » [V]. Délai du sur mesure : non annoncé [V].
- Retours : 30 jours depuis l'achat, marchandise intacte avec certificats ; frais de retour à la charge du client ; sont exclus les articles soldés, les commandes spéciales, les pièces modifiées (mise à taille comprise) et le sur mesure [V, `/policies/refund-policy`].
- Mise à taille et gravure : 1 à 2 semaines [V]. Layaway sur six mois avec acompte de 25 % [V]. Reprise de diamants naturels au cas par cas [V].
- Financement : carte Wells Fargo Jewelry Advantage [V, `/pages/jewelry-financing`] ; Shop Pay en mensualités [V].

## Confiance et service

- Bandeau permanent « Free Shipping on orders over $350 » et « 30-Day Returns » [V].
- Atelier annoncé avec « expert jewelers » et CAO ; l'étape CAO promet « 3D preview from all angles » mais aucun exemple d'aperçu n'est montré [V].
- Page « Natural vs. Lab-Grown » : texte d'éducation (« Are lab-grown diamonds “fake” or “real”? ») sans prix [V]. Libellé : « lab-grown » [V].
- Services : réparation, rachat or et diamants, expertises, assurance, rendez-vous [V]. Avis clients, preuves d'atelier en photo ou vidéo, suivi de commande : non trouvés [V]. Langue : anglais, devise : USD [V].

## Points forts à retenir pour JR Diamond

1. Livraison et retours dits en bandeau permanent (« Free Shipping > $350 », « 30-Day Returns ») : preuve : bandeau visible sur la liste et la fiche [V].
2. Prix de chaque bague affiché dès la liste, avec précision que c'est le prix de la monture seule : preuve : « Engagement ring prices are for setting only » sur la fiche [V].
3. Sur mesure expliqué en quatre étapes courtes (discussion, CAO avec aperçu 3D, fonte, remise) : preuve : `/pages/custom-jewelry-design-restyling` [V].
4. Politique de retours qui nomme l'exception du sur mesure et des mises à taille : preuve : `/policies/refund-policy` [V].
5. Chargement rapide : visuel principal en 2,3 s (ordinateur), 1,7 s (iPhone 13) sur la liste ; 2,3 s et 1,4 s sur la fiche [V].
6. Financement et mensualités Shop Pay visibles sur la fiche [V].

## Défauts observés

- Aucun configurateur : un seul visuel (photo catalogue) par bague, pas de choix de métal ni de taille [V].
- Fiche d'une bague : un seul bouton d'action, « Inquire About » ; pas d'achat en ligne pour les montures [V].
- « Quick view » ne fait que renvoyer vers la fiche [V].
- Prix de la monture seule, sans pierre : le prix de la bague complète n'est pas affiché [V].
- Tri et filtres multiples interdits aux robots : non audités [V].
- Pas de délai du sur mesure, pas de prix de départ du sur mesure [V].

## Limites de l'audit

- Aucun « Add to Cart » cliqué : `/cart/add` et `/cart.js` sont interdits par `robots.txt` ; panier non rempli, donc frais de livraison au panier, moyens de paiement et délai affichés au panier non relevés [V].
- Un seul filtre testé (Round) ; le tri et les filtres combinés sont interdits (`sort_by`, `filter…&…filter`) [V].
- La requête `cart.js?caller=pcjs` partie à l'ouverture de la fiche vient de la page, pas d'une action de l'auditeur [V].
- Fiches d'alliance, pages « Diamonds » (éducation) et réseaux sociaux non lus en détail ; avis clients absents de ce qui a été lu, mais pas cherchés partout [V].
- Mesures d'une connexion d'espace de travail : indicatives [V].

## Sources

- https://www.wimmersdiamonds.com/robots.txt, https://www.wimmersdiamonds.com/collections/engagement-rings, https://www.wimmersdiamonds.com/collections/engagement-rings/products/solitaire-engagement-ring-15, https://www.wimmersdiamonds.com/collections/wedding-bands
- https://www.wimmersdiamonds.com/policies/refund-policy, https://www.wimmersdiamonds.com/policies/shipping-policy, https://www.wimmersdiamonds.com/pages/custom-jewelry-design-restyling, https://www.wimmersdiamonds.com/pages/natural-vs-lab-grown-diamonds, https://www.wimmersdiamonds.com/pages/jewelry-financing
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/wimmers/
