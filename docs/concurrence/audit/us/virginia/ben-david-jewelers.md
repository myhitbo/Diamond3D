# Audit : Ben David Jewelers (Virginie, États-Unis)

- **Site** : Ben David Jewelers, https://www.bendavidjewelers.com (Danville VA ; site Punchmark-like, concepteur 3D JewelerOS, reCAPTCHA invisible)
- **Page de départ** : https://www.bendavidjewelers.com/page/custom-ring-builder.html
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13
- **Statut** : **partiel**. Le concepteur 3D n'a pas été actionné : un clic sur une carte de style appelle `www.jeweleros.com/api/…`, interdit par le robots.txt de ce domaine (`Disallow: /api/`, contrôlé). Je me suis arrêté avant tout clic. Add to Cart non cliqué (adresse d'envoi inconnue ; le robots.txt du site interdit `/exec/`, `/cgi-bin/`, `/admin/`) ; le panier a été lu vide.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Constructeur 3D, étape 1 sur 4 « Let's start designing your ring » [V] | Métal : 3 pastilles (jaune, blanc, rose) ; style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; boutons Back, Skip |
| Étapes 2 à 4 | Non vues (interdit). Le texte promet « fully customize your design in our 3D Ring Designer » [V] ; contenu des étapes [S] : pierre centrale, forme, finitions |
| Catalogue « Complete Engagement Rings » | Filtres (prix, métal, catégorie, genre), tri, bagues finies [V] |
| Fiche bague | Métal, poids de carat (listes), taille de doigt, Add to Cart [V] ; non actionné |
| Panier | `/cart.html` lu : « Secure Order Process », vide, bouton « Continue Shopping » [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille jaune / blanc / rose (étape 1) | 3 boutons sans libellé | Non cliquées : le clic peut déclencher des appels jeweleros.com/api/ interdits | inconnu | non testé (interdit) |
| 9 cartes de style (Solitaire … Start from scratch) | cartes | Non cliquées, même raison | inconnu | non testé |
| Back, Skip | boutons | Non cliqués, même raison | | non testé |
| Filtre prix (<= 500, 501-1000, 1001-2000, 2001-3000, 3001-5000, > 5000) | liste | Filtre dans la page sans changer l'URL ; « 1001-2000 » : 13 bagues ; « <= 500 » : 0 [V] | filtre | OK |
| Filtre métal (White, Yellow, Sterling Silver, Rose, Two Tone) | liste | Yellow Gold : 9 ; Rose Gold, Sterling Silver : 0 résultat [V] | filtre | OK |
| Catégorie (Popular Styles, Settings, Complete) | liste | « Settings » charge `/engagement-rings/engagement-ring-settings` [V] | | OK |
| Genre (Female, Unisex) | liste | Unisex : 0 résultat [V] | | OK |
| Tri (Popularity, Price Low/High, High/Low) | liste | Low to High : 13 bagues, ordre du prix non vérifié ligne à ligne | | OK |
| Bookmark / Add to wish List (par carte) | liens `javascript:` | Non cliqués (compte probable) | | non testé |
| Fiche : Metal Type, Diamond Carat Weight | listes | Une seule valeur proposée (Yellow Gold ; 0,4) [V] | fixe | OK, sans choix réel |
| Fiche : Ring Size (4 à 12 par demi-taille, « Greater than 12 ») + Ring Size Guide | liste + lien | Liste lue ; guide non ouvert [V] | | partiel |
| Add To Cart / Continue Browsing | boutons | Add to Cart non cliqué (endpoint non identifiable, /exec/ interdit) | 1 725,00 $ | non testé |
| Add To Wishlist, Request Viewing, Email To A Friend, Call Us | liens | `javascript:` (formulaires) non ouverts ; Call Us = `tel:4347926561` [V] | | non testé (formulaires) |
| Product Details, Shipping & Returns, Customer Review (accordéons) | liens | Présents ; avis : « No review for this product yet » [V] | | OK |
| Vignette, réseaux sociaux (partage X, Pinterest) | liens | Une seule photo par fiche [V] | | OK |
| Lien « Design Your Ring » du menu, « Search for a diamond » (`/design-your-own-ring/choose-your-diamond`) | liens | Non suivis (recherche de diamants, probablement même plateforme) | | non testé |
| Téléphone (434) 792-6561 et 1-888-433-4104 | liens `tel:` | Présents [V] | | non testé |

## Options disponibles

- **Métal (constructeur)** : jaune, blanc, rose [V]. Pas de platine à l'étape 1.
- **Métal (catalogue)** : White, Yellow, Sterling Silver, Rose, Two Tone [V].
- **Styles (constructeur)** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone [V].
- **Taille de doigt** : 4 à 12, demi-tailles [V].
- **Prix catalogue** : 6 tranches de « <= 500 » à « > 5000 » [V].
- **Rubriques du menu** : bagues de fiançailles avec lab-grown (« Lab Grown Diamond Engagement Rings »), alliances, designers (A. Jaffe, Hearts on Fire, Malo, Perfect Love), recherche de diamants, bijoux sur mesure [V].
- Gravure, griffes, carat, origine dans le constructeur : **non vus**.

## Prix, délais, retours, garanties

- **Prix** : un montant par fiche, ex. 1 725,00 $ pour la bague 0,40 ct ovale or jaune, « Subject to Availability, Credit Authorization and Pricing » ; aucune décomposition [V].
- **Livraison** : assurée gratuite en États-Unis ; mise à niveau : 15 $ USPS 2 jours, 25 $ FedEx 3 jours, 30 $ USPS nuit, 40 $ FedEx nuit ; retrait gratuit en magasin ; signature adulte obligatoire ; la fiche annonce aussi « 12,50 $ USPS sous 125 $ » : incohérence avec la page politique (« free insured shipping on every order ») [V : /page/free-shipping.html].
- **Délai** : « la livraison peut prendre jusqu'à 10 jours car la fabrication varie selon l'article » [V]. Pas de délai fixe pour le sur mesure.
- **Retours** : 30 jours après livraison ; **les commandes spéciales, portées, redimensionnées ou gravées ne sont pas reprises** ; remboursement **en avoir** (prix moins livraison, assurance et frais de paiement) ; numéro RMA obtenu par téléphone, certificat et emballage d'origine exigés [V : /page/return.html].
- **Garantie** : non trouvée sur les pages lues [S : à chercher].
- **Paiement** : moyens non vus (panier vide) ; crédit mentionné (« Credit Authorization ») [V].

## Confiance et service

- **Avis** : zone d'avis par fiche, vide sur celle vue [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ; la page Services annonce des maîtres bijoutiers « 30 ans d'expérience » dans l'atelier de la boutique, réparations et conception sur mesure (texte seul) [V].
- **Service** : téléphone, rendez-vous « Request Viewing », ami (e-mail), boutique : lun-ven 10-18 h, sam 10-17 h [V].
- **Libellé du synthétique** : « Lab Grown Diamond » dans les menus [V]. Sa fiche n'a pas été ouverte.
- **Langues / devises** : anglais, USD [V]. Accessibilité : widget UserWay [V].

## Mesure du visuel principal

Méthode : navigation `commit`, puis première image large chargée [V], réseau de centre de données.

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Constructeur 3D (étape 1 visible) | 1,3 s | non mesuré (1,2 s lors d'une seconde mesure ordinateur) |
| Fiche bague (photo) | 0,8 s | 0,5 s |

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 étapes qui démarre par métal + style en images** (9 cartes avec miniature d'anneau, « Start from scratch » pour les experts) avant la 3D. Preuve : page de départ capturée. Bon modèle d'entrée pour un configurateur.
2. **Option « Skip » et « Back » dès la première étape** : l'utilisateur n'est pas enfermé.
3. **Retrait gratuit en magasin et options de livraison chiffrées** au dollar près sur une page dédiée. Preuve : /page/free-shipping.html.
4. **Lab-grown présent dans le menu principal** comme rubrique à part entière (bagues et alliances).
5. **Numéro direct sur chaque page** (en-tête, fiche « Need advice? Please call »).

## Défauts observés

1. **Constructeur sur domaine tiers** (jeweleros.com) : dépend d'un service qui interdit l'automatisation et que je n'ai pu actionner ; il n'est pas certain que le prix y apparaisse [S].
2. **Fiche de catalogue pauvre** : une seule photo de 1 ring dans un coffret d'exposition, titres bruts du stock (« .40CT OVAL SOL YG », « SQ SILVER HALO DIA CLUSTER RING »), choix de métal et de carat réduits à une valeur.
3. **Aucune décomposition du prix**, mention « subject to availability » : prix non ferme.
4. **Retours** : avoir et non remboursement ; sur-mesure et gravure exclus ; procédure par téléphone et formulaire papier.
5. **Incohérence de frais de livraison** (12,50 $ sous 125 $ sur la fiche, gratuite sur la page politique).
6. Aucun visuel de fabrication, aucun suivi de commande visible, aucune garantie trouvée.
7. Filtre : plusieurs combinaisons donnent 0 résultat sans message (rose, argent sterling, unisex).

## Limites de l'audit

- Concepteur 3D non actionné (jeweleros.com/api/ interdit) : options de pierre, gravure, griffes, prix en direct, 3D, panier configuré non vus.
- Add to Cart non cliqué ; panier avec article, récapitulatif, moyens de paiement non vus. Le robots.txt de bendavidjewelers.com interdit `/exec/`, `/cgi-bin/`, `/admin/` (contrôlé) ; l'adresse d'envoi du bouton n'est pas lisible dans le HTML.
- Formulaires (Request Viewing, Email to a friend, wishlist, avis) non remplis.
- Filtres testés par `selectOption` : l'ordre des prix du tri n'est pas vérifié ligne à ligne ; le total de 13 est un décompte des liens, [I].
- Lab-grown et recherche de diamants non parcourus.
- Captures : scratchpad `us/bendavid/`.

## Sources

- https://www.bendavidjewelers.com/page/custom-ring-builder.html
- https://www.bendavidjewelers.com/engagement-rings/complete-engagement-rings
- https://www.bendavidjewelers.com/engagement-rings/complete-engagement-rings/40ct-oval-sol-yg-00110000755.html
- https://www.bendavidjewelers.com/page/free-shipping.html · /page/return.html · /page/services.html · /cart.html
- https://www.bendavidjewelers.com/robots.txt et https://www.jeweleros.com/robots.txt (via l'outil de contrôle)
