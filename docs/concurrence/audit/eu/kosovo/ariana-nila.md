# Audit : Ariana Nila (Prishtinë, Kosovo)

- **Site** : Ariana Nila Fine Jewelry, https://ariananila.com/ (WordPress + WooCommerce, Cloudflare [V : `/wp-content/plugins/woocommerce`, `/cdn-cgi/rum`])
- **Page de départ** : https://ariananila.com/collections/engagement-wedding/ ; fiche testée : https://ariananila.com/product/finesa-ring-2ct-marquise-diamond-with-micro-prong-band/
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : complet jusqu'à la page « Shopping Bag » ; caisse, paiement, formulaires et réservation non envoyés (règle)
- **Marques** : V vérifié (contrôle actionné ou page lue) · I inféré · S supposé. Prix en euros, TVA non précisée.
- **Robots** : `robots.txt` n'interdit que `?add-to-cart=` en adresse, `/wp-admin/` et des dossiers de logs ; toutes les pages ouvertes étaient AUTORISÉES. Le bouton « Add to cart » envoie un POST vers l'adresse de la fiche (sans paramètre) ; une règle de blocage des adresses `?add-to-cart=` était active, elle n'a rien intercepté [V].

## Parcours

| Étape | Options |
|---|---|
| 1. Collection Engagement & Wedding | Filtres ALL, RINGS, EARRINGS, WEDDING BANDS, WHITE GOLD, YELLOW GOLD, SILVER, VIEW ALL ; grille de 12 puis « SHOW MORE » par 12 ; recherche ; 3 questions de FAQ |
| 2. Fiche, onglet OVERVIEW | Galerie 6 images, prix de départ, « CHOOSE OPTIONS », « READ MORE », cœur favoris |
| 3. Onglet CUSTOMISE | Type (laboratoire / naturel) → carat → qualité → forme → métal (14 k / 18 k) → taille de doigt + guide → gravure → BACK / CONTINUE |
| 4. Onglet COMPLETE | Récapitulatif « YOUR SELECTION », ADD TO CART, PAY NOW, CHAT ABOUT THIS ITEM, EDIT OPTIONS |
| 5. Panier « Shopping Bag » | Ligne, quantité, coupon, UPDATE CART, livraison Express 2 € ou retrait, PROCEED TO CHECKOUT (non cliqué) |
| Parallèle : devis | Page « Request a Custom Ring » en 2 étapes (images puis spécifications) ; page « Book a Design Appointment » (payante) |

## Contrôles vérifiés

Fiche d'une bague de fiançailles, onglet CUSTOMISE, prix de départ 3 150 € (laboratoire, 2 ct, VS1-VVS2, marquise, 14 k, 14 k jaune).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| LAB-GROWN DIAMOND | bouton (onglet) | Choisi par défaut ; propose 13 carats (0,5 à 9 ct) et la qualité VS1-VVS2 | 3 150 € à 2 ct | OK [V] |
| NATURAL DIAMOND | bouton (onglet) | Passe à 4 carats « GIA » (0,5 ; 1 ; 1,5 ; 2 ct) et à la qualité VS1-VS2 ; aucun carat n'est choisi au départ | 1 850 € (base sans pierre) puis voir ci-dessous | OK [V] |
| 0,5 / 1 / 2 / 3 / 5 / 9 ct (laboratoire) | boutons | Carat mis en surbrillance ; image inchangée | 1 700 / 2 150 / 3 150 / 4 250 / 6 750 / 11 950 € | OK [V] |
| 1,5 / 2,5 / 3,5 / 4 / 6 / 7 / 8 ct (laboratoire) | boutons | Présents, non cliqués un par un | non relevé | Non testé : même mécanisme que les carats cliqués |
| 0,5 / 1 / 1,5 / 2 ct GIA (naturel) | boutons | Carat choisi ; image inchangée | 4 250 / 9 530 / 15 500 / 23 350 € | OK [V] |
| VS1-VVS2 / VS1-VS2 | bouton unique par origine | Une seule qualité par origine : aucun choix de couleur ni de pureté | aucun | Non interactif utile [V] |
| OVAL, MARQUISE, RADIANT, EMERALD, PEAR, CUSHION, PRINCESS, ASSCHER, ELONGATED CUSHION, ROUND | 10 boutons | Forme mise en surbrillance dans le récapitulatif ; **la photo reste celle de la marquise** (même fichier `…FinesaMarquise…front-10`) | **0 € : 3 150 € pour les 10 formes** | Fonctionne, sans effet visuel ni tarifaire [V] |
| 14K €750 / 18K €1,090 (doublés en 14k / 18k) | 4 boutons (deux jeux) | Bascule du titre ; le montant affiché sur le bouton est la valeur du métal (différence 18 k − 14 k = +340 €) | +340 € en 18 k (3 490 €) ; naturel 2 ct : 23 690 € | OK [V] ; jeux dupliqués dans la page |
| RING SIZE (liste) | menu | EU 47 à EU 76 (US 4 à 15,25) ; à partir de EU 56 : +15 € par taille | EU 60 : 3 225 € (+75) ; EU 76 : 3 465 € (+315) | OK [V] |
| Size guide | bouton | Fenêtre « Ring Size Guide » : tableau EU 44 à 68 (diamètre, circonférence, US/UK) et mode d'emploi du ruban | aucun | OK [V] |
| Add Engraving | case | Fait apparaître un champ texte « intérieur » (`engraving_text_inside`) ; champ « extérieur » caché ; polices non proposées sur la fiche | inchangé, champ vide | OK [V] ; coût de gravure non relevé |
| BACK | bouton | Retour à l'onglet précédent | aucun | Non testé |
| CONTINUE | bouton | Passe à COMPLETE ; **sans taille choisie, la taille EU 55 (US 7,25) est inscrite d'office dans le récapitulatif** | 3 490 € (18 k) | OK [V], défaut |
| OVERVIEW / CUSTOMISE / COMPLETE | 3 onglets | Navigation par étapes ; le prix courant s'affiche sous l'onglet | — | OK [V] |
| CHOOSE OPTIONS | bouton | Ouvre l'onglet CUSTOMISE | aucun | OK [V] |
| READ MORE | bouton | Déplie la description (marquise 2 ct, six griffes, bande micro-pavé, « D, VVS2 », 14 k jaune, 18 k jaune ou blanc) | aucun | OK [V] |
| Image précédente / suivante, 6 miniatures « View image » | boutons | Changent l'image principale (3 vues du bijou, 3 photos portées) ; aucun zoom ni visionneuse | aucun | OK [V] ; pas de 3D, 360°, vidéo ni essayage |
| Cœur « Save to wishlist » | bouton | Envoie une requête `admin-ajax.php` ; la page `/wishlist/` affiche ensuite « Your wishlist is empty » (sans compte) | aucun | Ne persiste pas sans compte [V] |
| ADD TO CART | bouton (POST) | Ajoute la ligne en 4,5 s ; lien « View cart » apparaît | 3 150 € | OK [V] |
| PAY NOW | bouton | Mène vers la caisse | — | Non cliqué (règle : pas au-delà du panier) |
| CHAT ABOUT THIS ITEM | lien | Mène à WhatsApp | — | Non ouvert (règle) |
| Pastille WhatsApp flottante | lien | `wa.me/38349577540` | — | Non ouverte [V sur l'adresse] |
| SUBSCRIBE (lettre d'information) | formulaire | — | — | Non rempli (règle) |

Collection et services.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| RINGS | filtre | 12 produits (bagues) | — | OK [V] |
| EARRINGS | filtre | 3 produits (boucles d'oreilles) dans la rubrique mariage | 150 à 2 550 € | OK [V] |
| WEDDING BANDS | filtre | 12 articles « alliances » (Forever 4,5 mm dès 1 150 €, Rugova 1 510 €, Wavy 630 €, Floral Engravings Her 740 €) | 630 à 1 510 € | OK [V] |
| WHITE GOLD / YELLOW GOLD | filtres | 9 / 12 produits | — | OK [V] |
| SILVER | filtre | 3 produits : Molten 200 €, Floral Engravings His 240 €, His & Hers 150 € | 150 à 240 € | OK [V] |
| VIEW ALL / ALL | filtres | Retour à 12 produits ; l'ordre après « VIEW ALL » reprend celui des alliances | — | OK [V], ordre incohérent |
| SHOW MORE | bouton | 12 → 24 → 36 → 48 → 60 produits par clics successifs | — | OK [V] (arrêté à 60) |
| 3 questions de FAQ | accordéons | Se déplient (lab/naturel, délai 4 à 6 semaines, rendez-vous à 50 €) | — | OK [V] |
| Recherche (`/?s=ring`) | champ | « 233 RESULTS FOUND », 24 produits affichés | — | OK [V] |
| REQUEST A CUSTOM DESIGN / `/services/custom-request/` | lien et formulaire | Étape 1 : dépôt de 5 images (JPG, PNG, WEBP, HEIC, AVIF, 10 Mo) ; étape 2 : métal (6), titre (14 k, 18 k), pierre (9 types), monture (8), taille EU, budget (7 tranches), notes, coordonnées | budget < 200 € à > 5 000 € | Étape 2 affichée ; **non envoyée** (règle) |
| BOOK A DESIGN APPOINTMENT | lien | Page : 3 types (design, mise à taille, général), date « Sunday - Saturday », heure, notes, coordonnées, **100 €** par WooCommerce | 100 € (crédités) | Lu, **non rempli** (règle) |
| CHAT ON WHATSAPP | lien | `wa.me/38349577540` ; le pied de page propose aussi `wa.me/38348577070` | — | Non ouverts (règle) ; deux numéros différents |
| Track Your Order | page | Numéro de commande + courriel | — | Non rempli (règle) |
| Coupon, UPDATE CART, quantité, Calculate shipping | panier | Champs présents ; UPDATE CART désactivé tant que rien ne change | — | Non testés (pas utiles à l'audit) |
| Livraison « Express Delivery » / « Pickup at Store » | boutons radio du panier | Express 2,00 € coché par défaut ; retrait au studio | +2 € (total 3 152 €) | Lu [V] ; choix non basculé |
| PROCEED TO CHECKOUT | lien | — | — | Non cliqué (règle) |
| Bandeau Black Friday | bandeau | « Silver 50 % off / Gold 20 % off », « Buy two and save on the lower-priced piece » | aucune remise visible sur la ligne 3 150 € | Non vérifié en caisse |
| Bandeau cookies (Manage settings / Accept all) | boutons | Visible à l'ouverture | — | Non touché |

## Options disponibles

- **Origine** : laboratoire (0,5 à 9 ct, IGI d'après la description) ; naturel (0,5 à 2 ct, GIA) [V]
- **Qualité** : VS1-VVS2 (laboratoire), VS1-VS2 (naturel) ; description de la fiche : « D Color, VVS2 » [V]
- **Formes** : ovale, marquise, radiant, émeraude, poire, coussin, princesse, asscher, coussin allongé, ronde [V]
- **Métal** : 14 k jaune (défaut), 18 k ; la description annonce aussi l'or blanc et jaune en 18 k [V] ; des fiches « White Gold » séparées existent pour chaque modèle (adresses terminées en `-white-gold`) [V]
- **Taille de doigt** : EU 47 à EU 76 [V]
- **Gravure** : texte intérieur, extérieur (champ caché) [V]
- **Autres personnalisations** (page Personalisation) : initiales 3D, empreinte digitale, photo laser, bijoux de lait maternel [V, texte]
- **Devis** : métaux Yellow, White, Rose, Silver, Gold Plated, Rose Gold Plated ; pierres : sans pierre, diamant laboratoire ou naturel, saphir, rubis, émeraude, perle, pierre de naissance, autre [V]
- **Catalogue** : 255 fiches produit toutes catégories au plan de site (bagues de fiançailles, alliances, noms, lait maternel, enfants) [V : plan `wp-sitemap-posts-product-1.xml`] ; filtres : type, couleur de l'or, argent
- **Monnaie** : euro [V] ; **langue** : anglais seul (aucun sélecteur) [V]

## Prix, délais, retours, garanties

| Point | Constat | Source / marque |
|---|---|---|
| Prix affiché | Total recalculé à chaque option ; fiche « From 3 150 € » ; **pas de décomposition** (matière, façon, marge) ; seul le montant du métal (750 / 1 090 €) figure sur les boutons | V |
| Écart laboratoire / naturel | À 2 ct, 14 k, marquise : 3 150 € contre 23 350 € (×7,4) ; à 1 ct : 2 150 € contre 9 530 € (×4,4) | V |
| Variation par carat (laboratoire) | +450 € de 0,5 à 1 ct ; +1 000 € de 1 à 2 ct ; +1 100 € de 2 à 3 ct ; 1 250 €/ct de 3 à 5 ct ; 1 300 €/ct de 5 à 9 ct | V (calculé sur les relevés) |
| Forme de pierre | Aucun effet sur le prix | V |
| Délai annoncé | **Quatre valeurs différentes** : « 2-3 weeks » (fiche et récapitulatif), « 3-4 Week Production » (pied de page), « 4–8 weeks » (FAQ et Help), « 4–6 weeks » (FAQ de la collection) | V |
| Livraison | Kosovo 1-2 jours ouvrés ; Balkans occidentaux 3-5 ; UE 5-8 ; monde 7-14 ; panier : Express 2 € ou retrait au studio ; coffret cadeau offert | V (`/help/shipping-returns/`, panier) |
| Retours | 14 jours après livraison pour demander un retour ou un échange ; neuf, emballage d'origine ; **« Personalised, engraved, and bespoke pieces are non-returnable »** ; remboursement 5 à 7 jours ouvrés après réception | V ; **la bague configurée en laboratoire/naturel n'est pas dite « bespoke »** : zone grise [I] |
| Garanties | « Certified Materials » en pied de page ; description : « natural GIA or lab grown IGI » ; pas de garantie chiffrée lue, pas de mise à taille offerte annoncée | V |
| Certificats | GIA (naturel), IGI (laboratoire) [V, descriptions et page « Lab vs Natural Diamonds »] ; non remis avant achat à ma connaissance | V / I |
| Synthétique | « Lab-Grown Diamond » sur les boutons et pages ; la page lab vs naturel écrit « Both are real diamonds » ; pas de terme albanais | V |
| Moyens de paiement | Pastilles Visa et Mastercard au pied de page ; caisse non ouverte | V (pied) ; reste S |
| Frais de rendez-vous | « €50 consultation fee » (accueil, FAQ de collection) **contre 100 € sur la page de réservation** | V, contradiction |
| Cart | La ligne indique métal, taille, carat, qualité, forme ; **l'origine laboratoire/naturel n'apparaît pas dans la ligne** | V |

## Confiance et service

- WhatsApp : pastille flottante + bouton « Chat on WhatsApp » sur chaque page (adresse `wa.me/38349577540`) ; pied de page : second numéro `wa.me/38348577070` [V sur les adresses ; conversation non ouverte].
- Téléphone +383 49 577 540, courriel contact@ariananila.com, boutique à Prishtina Mall pour le nettoyage et la réparation [V].
- Rendez-vous de conception sur place, payant (50 ou 100 € selon la page) [V].
- Suivi de commande : page « Track Your Order » (numéro + courriel) [V ; non testée].
- Entretien et réparation : nettoyage, redorure, resertissage, mise à taille [V, page « Care & Repair »].
- Programme « Proposal Project 2027 » : candidature du 10/11 au 25/12/2026 pour recevoir une bague de demande en mariage [V, page « Projects »].
- Avis clients : **aucun avis** sur la fiche ni dans les pages lues ; pas de note d'étoiles [V].
- Preuves de fabrication : slogans « Made in Prishtina » et « Handcrafted with Love » ; **aucune photo ni vidéo d'atelier**, aucune étape de fabrication montrée [V sur les pages lues].
- Livraison en coffret signature offert [V].

## Points forts à retenir pour JR Diamond

1. **Prix recalculé en direct pour chaque option, affiché en haut de l'onglet** : on voit 1 700 € à 0,5 ct et 11 950 € à 9 ct sans quitter la fiche (carats testés 0,5, 1, 2, 3, 5, 9) [V].
2. **Écart laboratoire / naturel rendu visible à chaque carat** : 2 ct, 3 150 € contre 23 350 € ; le client comprend l'enjeu du choix sans lire de guide [V].
3. **Montant du métal affiché sur le bouton du titre** (14 k 750 €, 18 k 1 090 €), seul élément de décomposition du prix : une demi-idée de « prix expliqué » à prolonger [V].
4. **Étapes Aperçu / Personnaliser / Terminer avec récapitulatif « YOUR SELECTION »** puis bouton d'achat et lien de discussion sur l'article ; parcours court, sans compte [V].
5. **Guide des tailles en fenêtre depuis le menu de taille** et supplément de taille affiché dans la liste (+15 € par taille à partir de EU 56) [V].
6. **Trois portes pour la personnalisation** : fiche paramétrable, devis en deux étapes avec images de référence, rendez-vous de conception [V].
7. **Pierres de laboratoire et naturelles côte à côte avec GIA/IGI cités** [V].
8. **Rapide** : premier visuel en environ 1,0 à 1,1 s sur ordinateur et 1,0 à 1,3 s en affichage iPhone [V, mesures ci-dessous].

## Défauts observés

- **Aucun lien entre les options et l'image** : forme, carat, titre ne modifient jamais la photo (le nom de fichier reste « FinesaMarquise…front-10 ») ; une bague « ronde 9 ct » s'affiche avec la marquise de 2 ct [V]. Pas de 3D, 360°, vidéo ni essayage.
- **Forme de pierre sans effet sur le prix** : choisir un coussin ou une princesse ne change rien [V] ; hypothèse : prix unique par carat [I].
- **Taille de doigt posée d'office (EU 55) au passage à COMPLETE si l'on n'en a pas choisi** [V].
- **Délai annoncé contradictoire** (de 2-3 à 4-8 semaines) [V].
- **Frais de rendez-vous contradictoires** (50 contre 100 €) [V].
- **L'origine laboratoire/naturel disparaît de la ligne du panier** [V].
- **Deux numéros WhatsApp différents** (…49 577 540 et …48 577 070) [V].
- **Pas de décomposition du prix**, pas de poids de métal, pas de certificat montré avant achat [V].
- Boutons titre dupliqués (14K/18K en double) dans la page [V].
- Anglais seul, pour un public kosovar albanophone (aucun sélecteur) [V].
- Bandeau Black Friday « Gold 20 % off » sans effet visible sur la ligne du panier [V ; application en caisse non vérifiée].
- La page du panier annonce « Shipping options will be updated during checkout » et ne calcule pas le coût pour l'Europe : seul « Express 2 € » est proposé [V].

## Limites de l'audit

- Caisse, paiement, remises et moyens de paiement réels non vus (règle : pas au-delà du panier).
- Réservation de rendez-vous, demande de devis, abonnement, suivi de commande : formulaires non envoyés ; date et horaires du rendez-vous non consultés.
- Carats laboratoire 1,5 / 2,5 / 3,5 / 4 / 6 / 7 / 8 ct non cliqués individuellement ; gravure : coût et polices non relevés.
- Seule la fiche Finesa a été configurée ; je n'ai pas vérifié si les fiches « -white-gold » partagent les mêmes tarifs.
- Mesures de chargement : une série (ordinateur 1 060 ms et mobile 1 010 ms, puis mobile 1 311 ms ; chargement complet 1 912 ms et 1 491 / 1 739 ms), connexion du bac à sable, sans limitation de débit.
- Aucun avis clients, aucun suivi, aucun chat : jugés absents des pages lues, pas sur tout le site.

## Mesures

| Mesure | Ordinateur | Affichage iPhone 13 |
|---|---|---|
| Premier visuel (image visible) | 1 060 ms | 1 010 ms puis 1 311 ms |
| Chargement complet | 1 912 ms | 1 491 ms puis 1 739 ms |
| Contrôles repérés (fiche / collection) | 89 / 133 | 59 / 87 |
| Défilement horizontal de la page | non | non |

## Sources

- https://ariananila.com/ ; https://ariananila.com/collections/engagement-wedding/ ; https://ariananila.com/product/finesa-ring-2ct-marquise-diamond-with-micro-prong-band/ ; https://ariananila.com/cart/
- https://ariananila.com/help/shipping-returns/ ; https://ariananila.com/help/faq/ ; https://ariananila.com/returns-policy/ ; https://ariananila.com/learn/lab-vs-natural/
- https://ariananila.com/services/custom-request/ ; https://ariananila.com/services/book-appointment/ ; https://ariananila.com/services/personalisation/ ; https://ariananila.com/services/product-care/ ; https://ariananila.com/projects/ ; https://ariananila.com/track-order/ ; https://ariananila.com/wishlist/ ; https://ariananila.com/?s=ring
- https://ariananila.com/robots.txt ; https://ariananila.com/wp-sitemap.xml
- Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/ariana-nila/` (hors dépôt)
