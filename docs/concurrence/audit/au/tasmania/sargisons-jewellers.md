# Audit : Sargisons Jewellers (Tasmanie, Australie)

- Site : Sargisons Jewellers, https://sargisons.com.au (Shopify, atelier à Hobart). Page de départ : https://sargisons.com.au/collections/engagement-rings
- Date : 15/11/2026 (consigne) ; relevés réalisés le 25/11/2026.
- Appareils : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright), identité inchangée.
- Statut : **partiel**. Le blocage signalé (429, page « Verifying your connection ») ne s'est **pas reproduit** : robots.txt en 200, pages lues sans contrôle. Mais les bagues ne se vendent pas en ligne (« Enquire to purchase »), donc pas d'ajout au panier ; le panier a été ouvert vide.
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

Pas de configurateur. Boutique de fiches « sur demande » plus un service de bague sur mesure à l'atelier [V].

| Étape | Options |
|---|---|
| 1. Collection « Bespoke Engagement Rings » | Tri (9 choix), filtre par étiquette (12 choix), vignettes avec prix, pagination 4 pages [V] |
| 2. Fiche produit | Photos, prix, « ENQUIRE TO PURCHASE » (formulaire), e-mail du produit, « Share this » ; caractéristiques en texte [V] |
| 3. Sur mesure | Page « Custom Made Engagement Rings » : conseil sur le diamant, fabrication à l'atelier de Hobart, contact par e-mail, téléphone ou visite [V] |
| 4. Panier | `/cart` : « You don't have any items in your cart yet » [V] |

## Contrôles vérifiés

Relevé automatique : 131 contrôles sur ordinateur, 51 sur iPhone.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche (ouvrir, champ, valider, fermer) | bouton/champ | Barre de recherche en en-tête ; `/search` non ouvert | n/a | Non testé (recherche : non demandée par la consigne) |
| Facebook, Instagram | liens | Pages externes | n/a | Non suivis |
| Compte (customer_authentication) | lien | Connexion client | n/a | Non ouvert (compte interdit par robots.txt) |
| Menu SHOP : Bespoke Engagement / Solitaire / Trilogy / Halo / Wedding / Eternity | liens | Collections par type | n/a | Collection principale ouverte [V] |
| Menu SHOP : or jaune, blanc, rose, platine, argent, diamant, gemmes, perles, opale, bagues, boucles, bracelets, colliers, boutons de manchette, emballage cadeau | liens | Collections par métal et par catégorie | n/a | Non suivis |
| Menu COLLECTIONS (13 : Flinders Island Topaz, Tasmania Necklaces, etc.) | liens | Collections signature | n/a | Non suivis |
| Menus ABOUT US, INFORMATION, CONTACT, REPAIRS PRICE LIST | liens | Pages de contenu | n/a | Engagement, Shipping, Return Policy, Warranty lues [V] |
| Tri (select) | menu | 9 choix dont prix croissant/décroissant, date. Le choix ajoute `sort_by`, interdit par robots.txt | aucun | **Non appliqué** [V options] |
| Filtre par étiquette (select) | menu | 12 choix : All, Bezel Set, Claw Set, Diamond, enquiry-only, Flush Set, Platinum, Rose Gold, Sapphire, Tourmaline, White Gold, Yellow Gold ; mène à `/collections/engagement-rings/<étiquette>` | aucun | Adresse `/platinum` ouverte (200) ; nombre de résultats non relevé [V] |
| Vignettes produit (12 vues par page) | liens | Vers les fiches | prix affiché | Fiche platine 0,50 ct poire ouverte [V] |
| Pagination 2, 3, 4, Next | liens | `?page=N` | n/a | Non suivis |
| Fiche : ENQUIRE TO PURCHASE | lien | `/pages/product-enquiry?product=…` (formulaire) | n/a | Non ouvert pour ne pas remplir de formulaire [V lien] |
| Fiche : « Email us about this product » | lien mailto | Ouvre un e-mail avec objet pré-rempli | n/a | Non cliqué |
| Fiche : « Share this » | bouton | Partage | n/a | Non testé |
| Fiche : « YOU MAY ALSO LIKE » (4 vignettes) | liens | Fiches voisines | prix | Non suivis |
| Infolettre (e-mail, Submit) | formulaire | Inscription | n/a | Non rempli |
| Pied : coordonnées | texte | Téléphone, adresse, horaires | n/a | Lu [V] |

Contrôles absents : sélecteur de métal, de pierre, de taille, gravure, 3D, 360°, AR, zoom dédié, comparaison, favoris, guide des tailles en ligne, financement, rendez-vous en ligne, chat, WhatsApp, essayage à domicile, ajout au panier [V absence au relevé].

## Options disponibles

- Métaux : platine, or jaune, or blanc, or rose, argent (collections par métal) [V menu].
- Pierres : diamants (GIA), saphir, tourmaline, diamants jaunes ou cognac, opale, perles [V menu/étiquettes/fiches].
- Montures : bezel, griffes, serti flush [V filtre] ; styles solitaire, trilogie, halo [V menu].
- Pas de choix de carat, d'origine, de taille de doigt ni de gravure en ligne [V].
- Sur mesure : bague unique à l'atelier, avec choix du diamant guidé par les bijoutiers ; mariage et éternité aussi [V /pages/engagement-rings].

## Prix, délais, retours, garanties

- Prix : fiche en AUD sans taxes détaillées, ex. platine 0,50 ct poire 5 350,00 $ ; 1,01 ct rond platine 8 010,00 $ ; trilogie 18 ct à plus de 16 000 $ (titre tronqué) [V collection/fiche]. Pas de décomposition [V].
- « Enquire to purchase » : le prix est affiché mais l'achat passe par e-mail ou téléphone [V].
- Délai : expédition 1 à 3 jours ouvrés après achat, plus le transport ; aucun délai de fabrication pour le sur mesure [V /pages/shipping].
- Livraison : express gratuit dès 200 $ TTC, sinon 20 $ (Australia Post) ; Australie seulement ; retrait gratuit en boutique ; signature non précisée [V].
- Retours : 14 jours (page de retours), mais la fiche et la page de garantie bague annoncent **7 jours, remboursement ou échange sur les pièces en stock** ; port de retour à la charge du client ; échange seulement si défaut ; articles soldés non remboursables [V]. Incohérence entre 7 et 14 jours [V]. Sur mesure : exception non écrite explicitement [V absence].
- Garantie bague de diamant : **2 ans de mise à taille gratuite, 5 ans contre défauts de fabrication, évaluation gratuite à l'achat** [V fiche + /pages/engagement-rings].
- Certificat : « GIA certified, Colour F, clarity SI1 » pour la fiche lue ; « diamants sélectionnés à la main avec rapport indépendant du GIA » [V]. Pas de synthétique observé [V absence].

## Confiance et service

- Atelier : « conçu et fabriqué dans l'atelier Sargisons à Hobart, Tasmanie », service sur place (mises à taille, réparations), maison historique avec page « Sargisons History » [V]. « Mères et grand-mères dont nous entretenons encore les bagues » [V texte]. Pas de photos ni vidéos de fabrication d'une commande, ni suivi [V absence].
- Avis : aucun avis ni note visibles sur les pages lues [V absence].
- Contact : téléphone (03) 6234 2426, e-mail, boutique 125 Liverpool Street, Hobart, lundi-vendredi 9 h-17 h 30, samedi 9 h-15 h [V].
- Langue : anglais ; devise : AUD [V].
- Éducation : page « Diamond Education & Information » (non lue), page d'évaluations et garantie (lue) [V liens].

## Points forts à retenir pour JR Diamond

1. **Garantie de bague en quatre lignes** (7 jours, 2 ans de mise à taille gratuite, 5 ans de défauts, évaluation gratuite) répétée sur chaque fiche : un modèle de clarté (preuve : fiche platine 0,50 ct).
2. **Fiche à caractéristiques précises** : poids, GIA, couleur, pureté, largeur du jonc (2,3 mm), taille (M), métal (preuve : fiche) ; les cotes en mm répondent à la peur du bijou différent de la CAO relevée dans les forums.
3. **Filtres par métal, monture et pierre en adresses lisibles** (`/collections/engagement-rings/platinum`), simples à partager (preuve : select tags).
4. **« Made in Hobart » assumé** : mise en avant de l'atelier et de l'entretien sur des décennies (preuve : /pages/engagement-rings).
5. **Livraison express gratuite dès 200 $** et retrait gratuit : seuil bas et clair (preuve : /pages/shipping).

## Défauts observés

- Aucune vente en ligne des bagues : « Enquire to purchase » ; pas de panier fonctionnel pour les fiançailles [V].
- Retour annoncé à 7 jours (fiche) et à 14 jours (page de politique) : incohérent [V].
- Pas d'avis clients, pas de photos d'atelier, pas de suivi de commande [V absence].
- Page de départ intitulée « Custom Made » mais ne propose aucun outil : le visiteur ne peut pas composer sa bague [V].
- Aucun diamant synthétique visible ; aucune mention du délai de fabrication [V absence].
- Titres de fiches en anglais approximatif (« Solitiare ») : soin éditorial moyen [V].

## Limites de l'audit

- **Blocage non reproduit** : le statut « bloqué » du 25/11 n'est pas confirmé ; pages lues le 25/11 sans 429. Pas de contournement, une page à la fois, 2,5 s d'écart.
- **Robots.txt** : `sort_by`, `/cart/`, `/cart.js`, `/account` interdits. Tri non appliqué ; compte non ouvert ; aucun ajout au panier possible de toute façon (pas de bouton).
- Formulaire « Enquire » non ouvert (aucun formulaire à remplir). Recherche, Share this, e-mail du produit non actionnés.
- Sur l'adresse `/collections/engagement-rings/platinum`, j'ai vérifié seulement le chargement (200) ; le nombre de résultats n'est pas relevé (extrait coupé).
- Mesure du visuel (image de plus de 300 px à l'écran) : collection 754 ms (ordinateur), fiche 634 ms (ordinateur) et 694 ms (iPhone) ; une seule mesure par page, depuis le bac à sable, indicative.
- Une seule fiche lue ; le prix de la trilogie 18 ct est tronqué dans l'extrait (« $16,2… ») et n'est pas cité en entier.
- Avis : aucun trouvé sur les pages lues ; non cherché ailleurs.

## Sources

Toutes lues le 25/11/2026 :
- https://sargisons.com.au/robots.txt
- https://sargisons.com.au/collections/engagement-rings (+ version iPhone)
- https://sargisons.com.au/collections/engagement-rings/platinum (chargement seulement)
- https://sargisons.com.au/collections/engagement-rings/products/platinum-0-50ct-pear-shaped-diamond-solitaire-claw-set-ring
- https://sargisons.com.au/pages/engagement-rings
- https://sargisons.com.au/pages/shipping
- https://sargisons.com.au/pages/return-policy
- https://sargisons.com.au/pages/warranty-information
- https://sargisons.com.au/cart
