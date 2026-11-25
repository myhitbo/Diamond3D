# Audit : Watsons Jewellers (Tasmanie, Australie)

- Site : Watsons Jewellers, https://watsonsjewellers.com.au (Shopify). Page de départ : https://watsonsjewellers.com.au/collections/engagement-rings
- Date : 15/11/2026 (consigne) ; relevés réalisés le 25/11/2026.
- Appareils : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright), identité du navigateur inchangée.
- Statut : **partiel**. Le site répond (200, robots.txt lisible), mais aucun ajout au panier n'a pu être fait : `/cart/add` et `/cart.js` sont interdits par robots.txt. Le panier a été ouvert vide ; récapitulatif, livraison au panier et moyens de paiement du paiement non vus.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- Contexte : bandeau « Black Friday Sale Now Live » le 25/11 : les prix relevés peuvent être remisés [V collection].

## Parcours

Il n'y a **pas de configurateur** : le site est un catalogue Shopify de bagues prêtes à vendre, plus une page « Custom Made » qui mène à un formulaire de consultation [V /pages/custom-made].

| Étape | Options |
|---|---|
| 1. Collection « Engagement » | 147 résultats sur 4 pages ; grille ou liste ; tri ; 5 filtres (prix, remise, pierre principale, forme, matière) [V] |
| 2. Fiche produit | Photos, prix, quantité, « ADD TO CART », « Request price match », « More payment options », retrait en boutique, caractéristiques en texte (pas de sélecteur de métal, de pierre ni de taille) [V fiche 1ct oval lab-grown] |
| 3. Sur mesure | Page « Custom Made » : formulaire de consultation (en boutique, en ligne, par téléphone) avec date, heure et photos d'inspiration [V] |
| 4. Panier | `/cart` : « YOUR CART IS EMPTY » (aucun ajout possible, voir limites) [V] |

## Contrôles vérifiés

Relevé automatique : 213 contrôles visibles sur ordinateur, 193 sur iPhone (fichiers JSON/JPEG dans le dossier de travail, hors dépôt). Les 140 boutons de vignettes sont regroupés en lignes.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Engagement, Jewellery, Watches, About Watsons, Custom Made, Contact | liens | Pages de collection ou de contenu | n/a | Fonctionne (Engagement et Custom Made ouverts) [V] |
| Account, Search, Cart | liens | Connexion client, recherche, panier | n/a | Cart ouvert (vide) ; Account (interdit par robots.txt) et Search non ouverts |
| Réseaux : Facebook, YouTube, Instagram, TikTok | liens | Pages externes | n/a | Non suivis (autre domaine) |
| Bandeau « Black Friday Sale Now Live » | lien | Vers /pages/black-friday | remises | Non ouvert [V lien] |
| Vue grille / vue liste | boutons | Change la disposition des vignettes ; l'adresse ne change pas | aucun | Fonctionne [V] |
| Tri « Bestselling » | menu | Liste de tri ouverte ; un choix ajoute `sort_by`, interdit par robots.txt | aucun | **Non appliqué** (robots.txt) ; options non relevées |
| Filtre Price, $ | curseur / 2 champs | Bornes affichées : minimum 1 769, maximum 21 800 [V] | filtre | Panneau ouvert, filtre non appliqué |
| Filtre Discount | cases | 10 % (2), 20 % (1), 30 % (3), 40 % (4), 50 % (2), sans remise (135) [V] | filtre | Panneau ouvert, non appliqué |
| Filtre Main Stone | cases | Diamond 28, Emerald 3, Lab Grown Diamond 113, Sapphire 2, Tourmaline 1 [V] | filtre | Panneau ouvert, non appliqué |
| Filtre Main Stone Shape | cases | Cushion 5, Elongated Cushion 2, Emerald 19, Marquise 3, Other 9, Oval 44, Pear 13, Princess 2, Radiant 12, Round Brilliant 38 [V] | filtre | Panneau ouvert, non appliqué |
| Filtre Material | cases | 2-Tone 23, Gold 74, Rose Gold 6, White Gold 43 (liste possiblement tronquée par mon relevé) [V/I] | filtre | Panneau ouvert, non appliqué |
| « Show more » (filtres) | boutons | Développe la liste de chaque filtre | aucun | Non actionné |
| Bouton « Filters » / « Reset filters » (iPhone) | boutons | Ouvrent le tiroir de filtres | aucun | Présents ; non ouverts [V présence] |
| ADD TO CART (vignette, 30 par page) | bouton | Appelle `/cart/add.js` (interdit) | prix de la fiche | **Non cliqué volontairement** |
| QUICK VIEW (vignette) | bouton | Sur ordinateur, mon clic forcé a déclenché des appels à `/cart/add.js` et `/cart.js`, **annulés dans mon navigateur avant l'envoi** ; la vue rapide ne s'est pas ouverte. Sur iPhone, aucun appel, aucune fenêtre lisible | n/a | Non fiable ; voir limites [V] |
| Pagination 1 à 4, « Next page » | liens | `?&page=N` | n/a | Non suivis (4 pages lues par le lien seulement) |
| Fiche : Previous / Next (produit) | liens | Produit voisin | n/a | Non suivis |
| Fiche : « Request price match » | bouton | Ouvre un formulaire d'égalisation de prix (requêtes vers contactform.hulkapps.com, injoignable depuis mon réseau) | n/a | Non rempli [V présence] |
| Fiche : quantité (- / champ / +) | champ | Quantité avant ajout | aucun | Non testé |
| Fiche : ADD TO CART | bouton | Ajout au panier | prix | Non cliqué (interdit) |
| Fiche : « More payment options » | lien | Options de paiement accéléré | n/a | Non cliqué (consigne : paiement) |
| Fiche : « View store information » | bouton | Retrait « usually ready in 24 hours » | aucun | Texte lu, bouton non testé |
| Fiche : « DELIVERY & RETURNS INFORMATION » | lien | `/pages/delivery-returns` | n/a | Fonctionne [V] |
| Bulle « Chat with us » | bouton | Ouvre un chat | n/a | Présente (capture) ; non ouverte (consigne) [V] |
| Infolettre (prénom, nom, e-mail) | formulaire | « 5 % de remise à l'inscription » | -5 % | Non rempli |
| Avis Google (carrousel, « Show more ») | liens/boutons | Renvoient à la fiche Google Maps | n/a | Non suivis |
| Instagram (12 vignettes) | boutons | Fenêtre contextuelle de publication | n/a | Non ouverts |
| Pied : Delivery & Returns, Terms, Privacy, Watsons Advantage, Watsons Desires, Careers | liens | Pages de politique | n/a | Delivery & Returns, Watsons Advantage lues [V] |

Les contrôles absents (aucun relevé dans le DOM) : sélecteur de métal, de pierre, de taille, gravure, 3D, 360°, AR, zoom dédié, comparaison, enregistrement/favoris, partage, guide des tailles, financement sur fiche (seulement « More payment options »), rendez-vous (formulaire sur /pages/custom-made).

## Options disponibles

- Pierres du catalogue : diamant naturel (« Mined »), « Lab Grown Diamond » (113 de 147 résultats), émeraude, saphir, tourmaline [V filtres].
- Formes : rond brillant, ovale, émeraude, radiant, poire, coussin, coussin allongé, marquise, princesse, autres [V filtres].
- Matières : or (9 ct sur la fiche lue, 18 ct sur d'autres titres), or blanc, or rose, bicolore [V filtres/titres]. Platine non relevé dans les filtres [I].
- Pas d'options à choisir sur la fiche : chaque bague est une pièce unique avec son métal, sa pierre et sa taille fixés [V].
- Sur mesure : mariage et fiançailles, bijoux de famille et restaurations, remodelage, retouches de taille et de pierre [V /pages/custom-made].

## Prix, délais, retours, garanties

- Prix : affiché en AUD, entier (ex. 3 599,00 $ la bague ovale lab-grown 1 ct), remises « 40 % off » avec ancien prix [V]. Aucune décomposition (métal, pierre, façon) [V].
- Délai : « 3 jours ouvrés » après expédition ; mise à taille : 3 jours supplémentaires ; contrôles de sécurité : jusqu'à 2 jours avant approbation [V /pages/delivery-returns]. Pas de délai de fabrication affiché pour les bagues du catalogue.
- Livraison : gratuite en Australie au-dessus de 100 $, sinon 15 $ ; signature obligatoire ; suivi par e-mail et Australia Post ; retrait en boutique « sous 24 h » [V].
- Retours : 14 jours (30 jours en décembre), état neuf, port de retour à la charge du client ; **sont exclus les articles « spécialement faits ou ajustés (ex. mis à taille) »** ; défaut signalé sous 48 h ; remboursement sous 7 jours (cartes, PayPal, Afterpay, Zip) [V].
- Garanties : « Watsons Advantage » (garantie étendue de 2 ans sur certaines marques de montres, pas sur les bijoux en général) ; droits de la loi consumer australienne mentionnés [V /pages/watsons-advantage].
- Certificat : sur la fiche lab-grown : « CERT: IGI LG635413740 », couleur E, pureté VS1 [V fiche]. Autres fiches non lues.
- Libellé du synthétique : « LAB GROWN DIAMOND » (« lab grown diamonds », mêmes propriétés physiques, optiques et chimiques que les diamants extraits) [V fiche].

## Confiance et service

- Avis : note 4,9 sur Google, 1 135 avis, en carrousel renvoyant à Google Maps [V]. Aucun avis par produit [V].
- Atelier : « maison familiale depuis 1925 », atelier sur place, étapes de la consultation à la « révélation » en texte ; un témoignage de restauration d'une bague de famille [V /pages/custom-made]. Aucune photo ni vidéo de fabrication d'une commande, aucun suivi de fabrication [V absence relevée].
- Contact : formulaire de consultation, téléphone (03) 6331 7646 (lu sur la page livraison), chat, e-mail team@ [V].
- Langue : anglais ; devise AUD uniquement [V].
- Instagram et YouTube, TikTok liés ; flux Instagram intégré [V].

## Points forts à retenir pour JR Diamond

1. **Retrait en boutique annoncé « prêt sous 24 h »** sur chaque fiche : rassure sur la réalité du stock (preuve : fiche lue).
2. **Filtre « Lab Grown Diamond » avec effectifs** (113 sur 147) : le synthétique est un rayon à part entière, pas caché (preuve : filtre).
3. **Certificat IGI, couleur et pureté écrits sur la fiche** du lab-grown (preuve : fiche).
4. **Page sur mesure structurée en 4 étapes** (consultation, matériaux, fabrication, révélation) et cas bijoux de famille / remodelage (preuve : /pages/custom-made), proche de notre offre de transformation.
5. **« Request price match »** : bouton d'égalisation de prix, qui répond à la méfiance sur les prix relevée dans les forums (preuve : fiche).

## Défauts observés

- Aucun configurateur, aucune 3D ni vue à 360° : photos seulement [V].
- Le sur mesure passe uniquement par un formulaire et un rendez-vous ; aucun prix, aucune durée de fabrication [V].
- Exception de retour pour les pièces mises à taille ou faites sur mesure, qui s'applique à toute commande à la taille du client [V].
- Prix remisés avec anciens prix très élevés (ex. -43 %, -40 %) : lisibilité du « vrai » prix douteuse, surtout en période de soldes [V, jugement].
- Fiches sans sélecteur de taille : la taille est décidée après commande (« 3 jours supplémentaires ») [V].
- Pas de photo de fabrication ni de suivi d'atelier [V absence].

## Limites de l'audit

- **Robots.txt** : `/cart/add`, `/cart.js` et `sort_by` interdits. Le tri n'a pas été appliqué ; aucun ajout au panier ; panier vu vide ; récapitulatif, frais au panier et moyens de paiement non vus (seuls le texte de la page livraison et la mention « Afterpay, Zip, PayPal » aux remboursements l'indiquent).
- **Incident** : mon clic forcé sur « QUICK VIEW » (ordinateur) a généré dans le navigateur des requêtes vers `/cart/add.js` et `/cart.js` ; mon filtre réseau les a **annulées avant l'envoi**, donc le serveur n'a rien reçu [V journal local]. Cause inférée : un clic tombé sur le bouton d'ajout superposé [I].
- Filtres : panneaux ouverts et listes relevées, mais aucune case cochée (étiquette masquée, clic refusé) ; effet sur la liste et sur l'adresse non observé.
- Le 429 signalé en amont n'est pas reproduit : aucune erreur 429 le 25/11 (une page à la fois, 2,5 s d'intervalle).
- Mesure du visuel (apparition d'une image de plus de 300 px dans l'écran) : fiche 985 ms sur ordinateur, 720 ms en affichage iPhone ; collection : environ 1 s (ordinateur) et 0,7 s (iPhone), mais l'image mesurée n'a pas été identifiée, valeur indicative. Une seule mesure, réseau du bac à sable.
- Une seule fiche lue en détail ; des 147 bagues, rien d'autre n'est généralisable (certificats des mined, etc.).
- Avis cités sans nom ni texte.

## Sources

Toutes lues le 25/11/2026 :
- https://watsonsjewellers.com.au/robots.txt
- https://watsonsjewellers.com.au/collections/engagement-rings (+ version iPhone)
- https://watsonsjewellers.com.au/collections/engagement-rings/products/1ct-lab-grown-diamond-oval-solitaire-ring
- https://watsonsjewellers.com.au/pages/custom-made
- https://watsonsjewellers.com.au/pages/delivery-returns
- https://watsonsjewellers.com.au/pages/watsons-advantage
- https://watsonsjewellers.com.au/cart
