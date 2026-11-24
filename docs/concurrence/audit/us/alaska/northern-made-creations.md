# Audit : Northern Made Creations, catalogue Weebly et iframe tiers (Anchorage, Alaska)

| | |
|---|---|
| Site | Northern Made Creations : https://www.northernmadecreations.com/ (Weebly ; galerie au 4300 Old Seward Highway, Anchorage) |
| Page de départ | https://www.northernmadecreations.com/store/c37/WeddingRings |
| Date | 15/11/2026 |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel** : le « configurateur » annoncé est une iframe tierce (`iframes.ovnight.com/engagement-rings?customerid=R59680`) qui ne s'est pas chargée (page d'erreur Chromium, DNS) ; les pages `/shop-now-for-rings.html` et `/-please-call-for-current-pricing.html` sont interdites par robots.txt et n'ont pas été ouvertes |

Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | État |
|---|---|---|
| 1. Page de départ `/store/c37/WeddingRings` | texte de présentation, bouton téléphone, 3 photos, iframe « Fully customizable options », texte « In Stock Solitaire Engagement Rings » | [V] page lue ; zone de l'iframe vide |
| 2. Configurateur « créer sa bague » | « voir sa bague en plusieurs métaux, couleurs et formes de pierre » (texte du site) ; « pour les diamants centraux, contactez-nous pour les prix » | iframe tierce : [V] non chargée, [S] contenu |
| 3. Catalogue `/store/c35/rings` | 5 vignettes : pépites d'or, quartz aurifère, bagues de fiançailles, alliances, pierres de couleur | [V] |
| 4. Panier | « CART (0) » en en-tête ; `/store/cart` répond 404 ; lien « Checkout » vers `/store/checkout?cart=` | [V] ; aucun produit achetable trouvé, checkout non ouvert |

## Contrôles vérifiés

Relevé automatique sur ordinateur : 14 contrôles ; en iPhone : 7 (menu réduit).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Twitter, LinkedIn, Facebook, Pinterest (4 icônes) | liens | profils sociaux du propriétaire (linkedin.com/in/steve-fuller-…) | n/a | [V] liens présents, non suivis |
| Mail | mailto | `northernmadecreations@gmail.com` | n/a | [V] |
| HOME | lien | accueil | n/a | [V] |
| ABOUT US | lien | `/about-us.html` : adresse, horaires, « entreprise familiale », réparation et expertise | n/a | [V] lu |
| SHOP NOW FOR RINGS / EARRINGS / PENDANTS | liens de menu | `/shop-now-for-rings.html` interdit par robots.txt ; non ouvert. Les boutons « SHOP » de la page À propos mènent à `/store/c35/rings`, `/store/c40/Earrings`, `/store/c41/Pendants` | n/a | [V] cible notée, non ouverte pour la page interdite |
| ** PLEASE CALL FOR CURRENT PRICING *** | lien | `/-please-call-for-current-pricing.html` interdit ; non ouvert. Le libellé indique que les prix ne sont pas affichés | aucun prix | [V] libellé ; page [non testé : robots.txt] |
| CART (0) | lien `#` | ne mène nulle part (ancre) | n/a | [V] |
| Rings | lien | `/store/c35/rings` : 5 catégories | n/a | [V] |
| (907) 338-7778 (haut de page et pied) | lien tel: | appel téléphonique | n/a | [V] lien, non actionné |
| Bouton noir téléphone dans le corps | lien tel: | idem | n/a | [V] |
| Bulle « Text us here » (chat SMS) | widget flottant | propose d'envoyer un SMS ; conversation non ouverte | n/a | [V] présent, non ouvert (règle) |
| Iframe du configurateur (ovnight) | iframe | page d'erreur Chromium ; hauteur réservée 1 800 px, d'où un grand vide blanc | « contactez-nous » | [V] échec de chargement (DNS) |
| Carte Google (iframe `editmysite.com/…generateMap.php`) | iframe | carte de la galerie, hauteur 250 px | n/a | [V] présente |
| Filtres de pierres, carat, couleur, pureté, certificat | n/a | absents du site lisible | n/a | [V] aucun contrôle de ce genre |
| Vues photo/vidéo/360°/3D/AR/zoom | n/a | absentes ; seules 3 photos fixes sur la page de départ | n/a | [V] |
| Partager, enregistrer, comparer, guide des tailles, financement, livraison, retours, garantie, rendez-vous | n/a | aucun contrôle trouvé sur les pages lues | n/a | [V] absent |
| Ajout au panier | n/a | aucun produit avec prix trouvé dans les pages ouvertes | n/a | [non testé : aucun produit accessible] |

## Options disponibles

- Texte du site [V] : « voir votre bague en divers métaux, couleurs et formes de pierre », diamants « ethically sourced », diamants de laboratoire (« Lab created ») cités ; détail des options [S] dans l'iframe, illisible.
- Catégories de bagues [V] : pépites d'or d'Alaska, quartz aurifère, bagues de fiançailles, alliances, pierres de couleur, pépites argent et or.
- Aucune option de métal, titre, carat ou taille de doigt consultable.

## Prix, délais, retours, garanties

- Prix : aucun prix affiché ; « PLEASE CALL FOR CURRENT PRICING » en menu [V]. « For center Diamond Options contact us for pricing » [V].
- Délai, retours, garanties, frais de livraison : introuvables sur les pages lues [V]. Panier : `/store/cart` 404 [V].
- Paiement : le script Stripe (clé publique « pk_live_… ») est chargé sur la page, ce qui laisse penser que le checkout Weebly accepte les cartes [I] ; aucun moyen de paiement affiché [V].

## Confiance et service

- Boutique physique à Anchorage, mardi–vendredi 11 h–18 h, samedi 11 h–18 h, fermé dimanche et lundi [V, /about-us.html]. Entreprise familiale (Steve Fuller et Roy Stone), pépites issues de leur mine en Alaska [V].
- Réparation et expertise proposées [V]. Aucun avis client, aucune preuve de fabrication (photos d'atelier, suivi) trouvés [V].
- Services : téléphone, e-mail, SMS (widget) [V]. Langue : anglais ; devise : aucune affichée.
- Synthétique : « Lab created diamond companies » [V] (pas de terme normalisé, pas de certificat IGI/GIA cité).

## Points forts à retenir pour JR Diamond

- Aucun fort sur le plan numérique. Seul le texte « voir votre bague en divers métaux, couleurs et formes » montre l'attente du public pour un aperçu visuel, mais l'outil est externalisé : [V] iframe `iframes.ovnight.com` sur la page de départ.
- Le site assume « les prix à la demande » : un pôle opposé au « prix expliqué » de JR Diamond [V : menu « PLEASE CALL FOR CURRENT PRICING »].

## Défauts observés

- Iframe du configurateur non chargée : zone blanche d'environ 1 800 px sur la page [V, capture].
- Panier inopérant : « CART (0) » est une ancre `#`, `/store/cart` renvoie 404 [V].
- Menu principal pointe vers des pages qui, selon le robots.txt, ne doivent pas être explorées ; informations de prix absentes [V].
- Pas de filtres, pas de fiche produit avec prix, pas d'avis, pas de politique de retour ou de livraison trouvée [V].
- Deux URL de catégories (`/store/c37/Engagement_%26_Anniversary.html` et `/store/c37/WeddingRings`) servent la même page [V].

## Limites de l'audit

- L'iframe ovnight n'a pas pu être lue (erreur de chargement dès la page de départ) ; ses contrôles, options et prix ne sont pas audités [V].
- `/shop-now-for-rings.html` et `/-please-call-for-current-pricing.html` interdits : non ouverts. Pas de test d'ajout au panier ni du checkout (aucun produit trouvé) ; le parcours s'arrête au panier vide (404).
- Chat/SMS non ouvert. Mesure du visuel principal : première image large affichée en 545 ms (ordinateur) et 940 ms (iPhone), mesurée sur la page de départ sans le configurateur [V, script Playwright]. Une seule exécution par appareil.
- Pages explorées : 5 à 6 au rythme de 2 s ou plus.

## Sources

- https://www.northernmadecreations.com/store/c37/WeddingRings (lu 15/11/2026, ordinateur et iPhone)
- https://www.northernmadecreations.com/store/c35/rings
- https://www.northernmadecreations.com/about-us.html
- https://www.northernmadecreations.com/store/c1/Featured_Products.html
- https://www.northernmadecreations.com/store/cart (404)
- https://www.northernmadecreations.com/robots.txt
- Captures et relevés JSON : scratchpad `audit/us/northern-made-creations/`
