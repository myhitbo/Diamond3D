# Audit : Wedding Day Diamonds (Minnesota)

- **Site** : Wedding Day Diamonds, https://weddingdaydiamonds.com/ (9 salles d'exposition au Minnesota ; boutique Shopify)
- **Page de départ** : https://weddingdaydiamonds.com/apps/engagement-rings (catalogue filtrable) puis fiche https://weddingdaydiamonds.com/products/er-tc-whisper-lgmtc1505-lg-100-ov
- **Date** : 15/11/2026 (audit repris le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (catalogue seulement)
- **Statut** : **partiel**. Le site a répondu `429 « Just a moment... »` (défi anti-robots) à la fiche produit en affichage iPhone, puis à tous mes essais suivants. Conformément aux règles, je n'ai ni contourné ni réessayé : pas de clic sur les options, pas de mesure sur la fiche, pas de panier. Le contenu ci-dessous vient des deux relevés qui avaient abouti (catalogue ordinateur et iPhone, fiche ordinateur) et de l'inventaire de l'explorateur précédent (`INVENTAIRE.md`, marqué « [inv.] »).

Marquage : [V] vérifié (page lue ou contrôle relevé) ; [I] inféré ; [S] supposé.

## Parcours

| Étape | Options (relevées sur la page) |
| --- | --- |
| 1. Catalogue `/apps/engagement-rings` | Curseurs de prix minimum et maximum, tri (Relevance, Best Sellers, New Arrivals, Price low→high, high→low), deux boutons de filtre sans libellé, vignettes de bagues, « LOAD MORE » [V] |
| 2. Fiche produit | Forme (8 pastilles avec flèches), carat de la pierre centrale (1, 1-1/2, 2, 2-1/2, 3, 3-1/2, 4, 5), qualité du diamant (Luxury VVS2+/D, Signature VS1+/E, Classic VS2+/F-G), métal (4 pastilles), carat des pierres latérales (0, 0.05, 1/4), taille (liste 3 à 12 par quarts), gravure oui/non (+40 $) [V] |
| 3. Action | « ADD TO CART », « ADD TO WISHLIST », « SHARE », « SEND A HINT », « SEE IT IN PERSON », « Need it faster? », accordéon « PRODUCT DETAILS » [V] |
| 4. Panier | Non atteint (voir limites) |

## Contrôles vérifiés

« Relevé » = le contrôle existe et est visible dans le HTML rendu ; l'effet réel n'a pas pu être actionné (défi 429 ensuite), sauf mention.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Curseurs prix min / max (49 / 50 par défaut) | range ×2 | Relevé, non actionné | filtre | non testé : blocage 429 |
| Tri (5 valeurs) | select | Relevé, non actionné | – | non testé |
| Boutons de filtre sans libellé ×2 | button | Relevés ; contenu inconnu | – | non testé |
| LOAD MORE | button | Relevé (page d'origine : 28 bagues listées) | – | non testé |
| Vignettes catalogue | lien | Chaque vignette mène à `/products/er-...-lg-100-<forme>` ; noms du type « Yellow Gold Whisper Solitaire & 1ct Round Lab Grown Diamond Center » [V] | – | liens relevés, non suivis |
| Forme (8 pastilles + flèches précédente/suivante) | button | Relevé ; formes visibles sur la capture (rond, ovale, marquise, coussin, etc., non lues une à une) | non lu | non testé |
| Carat centre (8 valeurs) | button | Relevé | non lu | non testé |
| Qualité (3 niveaux) | button | Relevé ; « Worry-free diamond selection » [inv.] : la maison choisit la pierre dans la catégorie | non lu | non testé |
| Métal (4 pastilles) | button | Relevé ; titre affiché « 14K Yellow Gold » | non lu | non testé |
| Carat latéral (0 / 0.05 / 1/4) | button | Relevé | non lu | non testé |
| Taille (3 à 12) + « Size Guide » | select + lien | « Size Guide » = PDF `dl2vs6wk2ewna.cloudfront.net/wdd/images/RingSizeChart_Final.pdf` [V] | – | PDF non ouvert |
| Gravure oui / non (+40 $) | radio ×2 | Relevé | +40 $ [V libellé] | non testé |
| ADD TO CART | submit | **Non actionné** : `/cart/add` est INTERDIT par robots.txt (`Disallow: /cart/`) | – | interdit |
| Galerie (10 vignettes, précédent/suivant) | button | Relevée : 8 images lues (monture seule, sur la main, vue de dessus, côté, dans un écrin) ; pas de bouton 3D ni 360° [V capture] | – | slides non parcourues |
| Vidéos par variante | video | ~990 adresses `.mp4` chargées sur la page [inv.] | – | non lues |
| Wishlist (cœur) / ADD TO WISHLIST / SHARE / SEND A HINT | div, lien | Relevés ; wishlist = page `/pages/wishlist` | – | non testés |
| See if you qualify (Affirm) | lien modal | Ouvre un modal Affirm (« opens in modal ») | « 0 % APR ou dès 99 $/mois » [V] | non ouvert |
| Need it faster? | lien `#` | Relevé ; effet inconnu | – | non testé |
| SEE IT IN PERSON | button | Relevé ; probable prise de rendez-vous [S] | – | non testé |
| PRODUCT DETAILS | accordéon | Relevé | – | non ouvert |
| Accordéons « Your order includes » (60 jours, garantie, 365 jours, Diamond Dollars) | accordéon | Relevés sur la capture | – | non ouverts |
| Chat « Gemma » (bulle « Hello! We are here to help… ») | widget | Bulle visible ; conversation non ouverte (règle) | – | non ouvert |
| Menu d'accessibilité | div | Relevé | – | non testé |
| Cookies : Manage preferences / Accept / Decline | button | Relevés | – | non testés |
| Tel 1-866-740-RING, Find a showroom, Book an appointment, Virtual appointment | lien | `tel:1-866-740-7464` ; `/pages/showroom` ; `/pages/book-an-appointment` ; `/pages/virtual-appointment` | – | non suivis |
| Recherche, Compte, Panier (`/cart`) | button, lien | Relevés ; panier non ouvert (vide faute d'ajout) | – | non testés |
| Pied de page (Warranty, Returns & Exchanges, Shipping, Financing, Education, Perfect Ring Promise, Our Difference, Blog, réseaux, Sell gold, abonnement e-mail) | liens | 33 liens relevés ; plusieurs pointent vers `daywdd.myshopify.com` (domaine Shopify interne) [V] | – | non suivis |

## Options disponibles

- **Métal** : or jaune, blanc, rose et un quatrième (argent ou platine) ; titre « 14K ». [inv.] argent, jaune, blanc, rose, platine.
- **Pierre** : forme (8), carat 1 à 5, qualité Luxury / Signature / Classic ; naturelle ou synthétique selon la référence (« Lab Grown Diamond Center » dans les titres synthétiques, « Center » seul pour d'autres) [V].
- **Pierres latérales** : 0, 0,05, 1/4 ct. **Taille** : 3 à 12 par quarts [V]. **Gravure** : oui/non.
- **Pas d'option** relevée : griffes, corps de bague, pavage, certificat au choix, mode 3D, AR, 360°.

## Prix, délais, retours, garanties

- [V] Prix affiché au-dessus du fold, au centre de la fiche : **2 135 $** pour « Yellow Gold Whisper Solitaire & 1ct Round Lab Grown Diamond Center » ; un seul total, pas de décomposition monture / pierre sur la capture. Financement Affirm « 0 % APR, dès 99 $/mois ».
- [V] Délai : « Custom Made. Ships by Dec 8 » (date calculée au 15/11) ; lien « Need it faster? ».
- [V] « FREE Fast Shipping », « FREE 60 Day Returns », « FREE Lifetime Warranty » (« No inspections required », entretien gratuit), « 365 Day Exchange » ; bandeau « FREE SHIPPING ON ALL ORDERS ».
- [inv.] Exception du sur-mesure aux retours non vérifiée ; page des retours non lue.
- Moyens de paiement du panier : non relevés.

## Confiance et service

- [V] Rendez-vous en salle ou virtuel, téléphone 1-866-740-RING, chat « Gemma », 9 salles. [inv.] « over 100,000 proposals since 1978 » (affirmation du site).
- [V] Libellé synthétique : « Lab Grown Diamond » (jamais « synthetic »), « Excellent Cut Certified Lab Grown Diamond » ; badge « Made in USA », « Recycled metals ».
- [V] Langue : anglais ; devise : dollar. Avis clients : aucun avis relevé sur la fiche. Photos d'atelier / suivi de commande : aucun.
- [inv.] Page « Custom Design » avec « Submit your design », 149 créations « From $2,500 ».

## Points forts à retenir pour JR Diamond

1. **Prix visible et total unique dès la fiche**, avec financement mensualisé (2 135 $, « dès 99 $/mois »). Preuve : capture de la fiche du 15/11.
2. **Bloc de réassurance à côté du bouton d'achat** (garantie à vie, 60 jours de retour, 365 jours d'échange, livraison gratuite). Preuve : même capture.
3. **Date d'expédition calculée sur la fiche** (« Ships by Dec 8 ») : répond à la peur du délai qui glisse.
4. **Choix de qualité simple** en 3 niveaux (Luxury / Signature / Classic) au lieu de filtres techniques.
5. **Ensemble gravure à prix explicite** (+40 $) et guide des tailles en PDF.

## Défauts observés

- Aucun mode 3D, 360° ou AR : galerie de photos et vidéos de variantes seulement.
- Pas de décomposition du prix (monture, pierre, main-d'œuvre) relevée.
- Aucune preuve de fabrication (photo d'atelier, suivi de commande).
- Liens du pied de page vers `daywdd.myshopify.com` (domaine différent du site).
- Défi anti-robots (429) déclenché après peu de requêtes : l'audit complet n'a pas été possible (ce n'est pas un défaut pour un visiteur humain, [S]).

## Limites de l'audit

- **Aucune option actionnée** : les effets sur prix et image sont inconnus. Le défi `429 Just a moment...` est apparu sur la fiche en affichage iPhone, puis aux essais suivants ; je n'ai pas contourné.
- Fiche ordinateur lue une seule fois ; **temps d'apparition du visuel principal non mesuré** (script interrompu par le 429).
- Panier, moyens de paiement, frais de livraison et retours du sur-mesure : non vus. `/cart/add` interdit par robots.txt.
- Un essai ultérieur de lecture d'autres pages du second site a été refusé par le classificateur de permissions de la session ; il n'a pas été répété.

## Sources

- https://weddingdaydiamonds.com/apps/engagement-rings (relevés ordinateur et iPhone, 15/11/2026)
- https://weddingdaydiamonds.com/products/er-tc-whisper-lgmtc1505-lg-100-ov (relevé ordinateur et capture)
- `docs/concurrence/audit/us/minnesota/INVENTAIRE.md` (explorateur précédent)
- robots.txt : `/cart` autorisé, `/cart/add` interdit (contrôle `robots.cjs`)
