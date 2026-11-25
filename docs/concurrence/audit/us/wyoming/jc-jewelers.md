# JC Jewelers (Jackson, Wyoming) : audit

- **Site** : JC Jewelers
- **Adresse** : https://jcjewelers.com/ (départ : https://jcjewelers.com/custom-pieces/)
- **Date** : 15/11/2026 (contrôles réalisés le 25/11/2026)
- **Appareils** : Chromium ordinateur (1366×850) et iPhone 13 (Playwright)
- **Statut** : **partiel** : pas de configurateur ; panier non atteint avec un article (le bouton « Add to cart » est interdit par robots.txt)

Tout ce qui suit est **vérifié** (page lue ou contrôle actionné) sauf mention « inféré » ou « supposé ». Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/jc-jewelers/`.

## Parcours
Le site est une boutique WooCommerce de bijoux prêts à vendre, sans configurateur en ligne. La personnalisation passe par un rendez-vous en boutique.

| Étape | Options |
|---|---|
| /custom-pieces/ | Texte du processus sur mesure (esquisse, CAO 3D, cire/résine puis fonte à cire perdue, finition), galerie de réalisations (environ 60 photos agrandissables en lien direct), 3 produits « Stories Set in Stone » avec prix et « Add to cart » |
| /shop/ | 14 catégories (Rings 214, Wedding Rings 150, Engagement Rings 34, Necklaces 109, Pendants 102, Earrings 43, Bracelets 19, Mens Bands 21, Teton 87…) |
| Catégorie bagues de fiançailles | 34 résultats, 18 par page, tri (défaut, popularité, nouveauté, prix croissant, prix décroissant) |
| Fiche produit | Photos, prix, « Add To Cart », bouton « Pay securely with link » (Stripe Link), SKU, catégories, étiquettes, description |
| Panier /cart/ | Atteint vide (aucun ajout possible, voir plus bas) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Home, Shop, Custom Jewelry & Wedding Rings, About Us, Blog, Gift Cards, Contact | liens | Pages lues, sans erreur | non | OK |
| Menu mobile (bouton de l'en-tête) | bouton | Ouvre les mêmes 7 liens | non | OK |
| Icône compte, panier | liens | /my-account/ et /cart/ ; panier lu vide : « Your cart is currently empty », lien « Return to shop » | non | OK (compte non ouvert) |
| Recherche (loupe) | bouton | Aucun champ de recherche visible après clic sur ordinateur ; non établi | non | non vérifié |
| Galerie « Stories Set in Stone » (Previous/Next slide) | boutons | 3 produits en carrousel ; flèches présentes | non | non testé à fond |
| Photos de la galerie sur mesure (≈ 60) | liens vers JPG | Chaque lien pointe vers le fichier image dans /wp-content/uploads/ | non | OK en tant que liens ; agrandissement non confirmé |
| Fiche produit : flèches de galerie | boutons | Le clic sur « Next slide » n'a pas changé l'image principale (même fichier avant et après) ; 12 vignettes présentes | non | douteux |
| Fiche produit : clic sur l'image | image | Pas de zoom ni de visionneuse détectés | non | absent |
| 360°, vidéo, 3D, essayage, AR | vues | Aucun contrôle trouvé dans la liste des contrôles | non | absent |
| « Add to cart » (liste et fiche) | bouton/lien | Lien de la forme `?add-to-cart=<id>` : INTERDIT par robots.txt (`Disallow: /*?*add-to-cart=`) ; non cliqué | non | non testé : panier interdit par robots.txt |
| « Pay securely with link » (Stripe Link) | bouton | Non cliqué (bouton de paiement) | non | non testé |
| Tri des produits | liste déroulante | Menu natif invisible (liste personnalisée) : sélection impossible par script ; options lues dans la page | non | non testé |
| Pagination catégorie | liens | 18 résultats par page sur 34 | non | non testé |
| Téléphone (bouton rond flottant, mobile et ordinateur) | lien `tel:` | `tel:+13077335933` ; non appelé | non | OK (lien lu) |
| Formulaire « Join Our Community » (e-mail) | formulaire | Non rempli | non | non testé (règle) |
| Formulaire de contact | formulaire | Non rempli | non | non testé (règle) |
| Guide des tailles | lien | Page lue : méthode ficelle/papier, bague existante, conseils, tailles gratuites en boutique, mention d'un « Ring Size Chart » | non | OK |
| Retours, réparation, cartes cadeaux, blog, Parker Power, réseaux sociaux | liens | Retours et réparation lus ; autres non ouverts | non | partiel |

## Options disponibles
- **Métal et titre** : affichés dans le titre de chaque fiche (ex. 14K, 18K, Platinum) ; choix d'un métal non proposé en ligne. Une fiche indique « This item is customizable and can be created in various metals or with various center stones » (fiche 0,50 ct, rupture de stock).
- **Forme de pierre, carat, origine, monture, griffes, pavage, gravure** : aucune sélection en ligne ; ces informations figurent dans la description de la fiche (ex. émeraude 0,41 ct, diamants ronds 0,03 ct total, sertissage clos, 14K jaune mat, largeur 2 mm, taille actuelle 6½).
- **Taille de doigt** : aucun sélecteur ; la fiche donne la « current size » (ex. 6½). Redimensionnement : « resizing services on many designs » (page guide).
- **Filtres de pierres (taille, couleur, pureté, prix)** : aucun repéré (ordinateur et mobile).
- **Tri** : défaut, popularité, nouveauté, prix croissant, prix décroissant.
- **Services** : téléphone, texto, e-mail, boutique ; pas de chat, pas de WhatsApp, pas de comparaison, pas d'essayage à domicile repérés. Réparation par envoi postal (formulaire à télécharger). Rendez-vous : non repéré en ligne.

## Prix, délais, retours, garanties
- **Prix** : prix fixe en dollars par pièce, sans décomposition ; exemples : bague 14K poire taille rose halo 5 495 $ ; bague bypass diamants bleus et blancs 1 995 $ ; bague émeraude clos 2 150 $ ; solitaire 0,50 ct 3 895 $ (fiche : « Out of stock ») ; solitaire ovale 18K clos, pièce unique, 20 295 $ (liste).
- **Livraison** : bandeau « Enjoy free shipping on all orders over $1,999 » (frais en dessous : non établis). Mention : une vérification d'identité peut être requise au-delà de 1 000 $.
- **Délai sur mesure** : non annoncé. Réparation typique 3 à 4 semaines.
- **Retours** : retour sous 7 jours, échange sous 30 jours, pièces neuves non portées, hors sur mesure ; « Custom pieces, special orders, and resized or altered items are final sale » ; frais de retour à la charge du client ; remboursement en 5 à 7 jours ouvrés avec **4 % de frais de restockage**.
- **Garantie** : non trouvée sur les pages lues.
- **Certificats** : fiche solitaire 0,50 ct : « GIA certified ». Pas de certificat visible sur la fiche à 2 150 $.
- **Synthétique** : aucune mention repérée (non cherché sur tout le site).
- **Langues, devises** : anglais, dollar uniquement.
- **Moyens de paiement** : Stripe (bouton Link sur la fiche) ; autres moyens non vus, panier non atteint avec un article.

## Confiance et service
- Fondée en 1989 à Jackson Hole, reprise en 2024 par John et Hannah Kennedy (page « About Us »).
- Boutique : 132 North Cache Street, Jackson ; horaires lun-sam 10 h-18 h, dim 11 h-17 h ; tél. 307-733-5933 ; e-mail info@jcjewelers.com.
- Processus sur mesure décrit en quatre étapes avec CAO et impression 3D ; **aucune image ni vidéo de fabrication datée d'une commande** repérée, ni suivi de commande. Avis clients : non repérés.
- Transformation de bijoux de famille : mentionnée (« bringing new life to heirloom stones »).

## Points forts à retenir pour JR Diamond
1. Processus sur mesure expliqué en 4 étapes (esquisse, CAO, cire, finition) sur une seule page : preuve /custom-pieces/. Argument de transparence, mais sans visuel de commande réelle.
2. Fiche produit avec détail technique utile (carat, sertissage, largeur de bague, taille actuelle, poinçon 14K visible sur la photo) : preuve fiche DILA0582.
3. Livraison offerte au-dessus de 1 999 $ : preuve bandeau du site.
4. Chargement rapide : premier visuel de fiche en environ 0,4 s sur ordinateur, 0,9 s en affichage iPhone (mesure Playwright).
5. Photo de l'atelier et pièces uniques étiquetées « One of a Kind » : preuve liste des fiançailles.

## Défauts observés
- Aucun configurateur ni option de personnalisation en ligne : tout passe par la boutique.
- Pas de zoom, de 360°, de vidéo ni de vue sur la main ; flèche de galerie sans effet visible en test.
- Bouton « Add to cart » dont l'adresse est interdite aux robots ; panier non testable avec un article.
- Sur mobile, la page de départ n'a aucun visuel principal dans le premier écran ; dans notre mesure, aucune image de plus de 200 px n'apparaît en 20 s (la mesure a été interrompue après environ 30 s) ; la page est surtout du texte.
- Frais de restockage de 4 % sur les retours ; sur mesure non remboursable.
- Aucun libellé sur synthétique ou naturel repéré sur les pages lues ; pas de filtres (couleur, pureté, forme).
- Page /product-category/engagement-rings/ redirige vers une image PNG (lien de catégorie mal configuré, vérifié par curl).
- Vérifié : la fiche 0,50 ct est en rupture de stock bien que listée.

## Limites de l'audit
Panier, frais de livraison, délai et moyens de paiement affichés non relevés (panier vide, ajout interdit par robots.txt). Pas de test du tri, de la recherche ni de l'agrandissement des photos. Pages Blog, Parker Power et cartes cadeaux non ouvertes. Aucun formulaire ni chat ouvert. Mesures de temps : un seul passage par appareil, hors cache.

## Sources
- https://jcjewelers.com/robots.txt (lu le 25/11/2026)
- https://jcjewelers.com/custom-pieces/ ; /shop/ ; /shop/brides-and-grooms/engagement-rings/
- https://jcjewelers.com/product/14k-emerald-diamond-bezel-ring/ ; /product/14k-solitaire-0-50-carat-diamond-ring/
- https://jcjewelers.com/refund-returns/ ; /ring-size-guide/ ; /contact/ ; /about-us/ ; /jewelry-repair-services/ ; /cart/
