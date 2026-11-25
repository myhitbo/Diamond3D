# Audit : Cardin Jewelers (Nashua, New Hampshire)

- **Site** : Cardin Jewelers, https://www.cardinjewelers.com/ (Shopify ; constructeur de bague de l'éditeur GemFind)
- **Page de départ** : https://www.cardinjewelers.com/apps/ringbuilder/settings/
- **Date** : 15/11/2026 (en-tête de la série ; relu le 25/11/2026 après le marquage « bloqué » du 24/11 qui remplace l'ancien rapport)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright), sans compte ni paiement
- **Statut** : **partiel**. Le site n'est plus bloqué (robots.txt lu, HTTP 200 partout, aucune page « Verifying your connection »). Mais le constructeur de bague, but de l'audit, **s'affiche vide** : aucune étape n'a pu être actionnée. Le reste du site (collection de montures, fiche produit, panier, pages de service) a été audité.
- Marquage [V] vérifié (page lue ou contrôle actionné, adresse indiquée), [I] inféré, [S] supposé.
- Règles : `robots.txt` lu (`Allow: /`, mais `Disallow: /cart/`, `/cart.js`, `/account`, `/checkout`, `/collections/*sort_by*`, filtres multiples). Aucune adresse interdite ouverte (voir « Limites »).

## Parcours

| Étape | Options relevées | Preuve |
| --- | --- | --- |
| Menu « Diamonds » / « Design Your Own » | [V, index] quatre départs : monture, diamant naturel, diamant de laboratoire, diamant de couleur. Dans le HTML actuel : `/apps/ringbuilder/settings/`, `/apps/ringbuilder/diamondtools`, `…/diamondtype/navlabgrown`, `…/navfancycolored`, `/apps/diamondtools/?shape=` (10 formes : asscher, coussin, émeraude, cœur, marquise, ovale, poire, princesse, radiant, rond) | HTML de l'accueil lu ; extrait d'index de l'inventaire |
| Constructeur (monture → diamant → bague, « 3 easy steps ») | [V] **rien ne s'affiche** : `#MainContent` ne contient que le gabarit brut de GemFind, `<div id="root">` reste vide (0 enfant après 15 s, ordinateur et iPhone) | `/apps/ringbuilder/settings/`, avec et sans `#/ring` |
| Sur mesure (`/pages/custom-design`) | [V] 6 étapes décrites (consultation, « 3D Mock-Up », matériaux et pierres, fabrication, contrôle final, suivi) ; formulaire Nom, E-mail, Téléphone, Message (non rempli) | page lue |
| Collection « Engagement Rings » | [V] 226 montures « semi-mount » 14 k, filtres, tri, 3 densités d'affichage, pagination (6 pages) | `/collections/engagement-rings` |
| Fiche produit | [V] taille de doigt, « Add to Wishlist », « Add to cart » (non cliqué), zoom, « Ask A Question » | fiche `…semi-mount-engagement-ring-5` |
| Panier | [V] « Your cart is currently empty. » (panier vide, aucun article ajouté) | `/cart` |

## Contrôles vérifiés

Ordinateur (controls.cjs : 31 contrôles sur la page de départ, 92 sur la collection, 49 sur la fiche ; iPhone : 46 sur la fiche).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Constructeur `/apps/ringbuilder/settings/` | Application GemFind | Page vide ; `main.js` et `main.css` chargés (HTTP 200), aucune requête de données, aucune erreur visible hormis une erreur de script du thème (`Failed to construct 'Request'… worker-min.js`) | n/a | **Défaillant** [V] |
| `/apps/ringbuilder/settings/#/ring` | Lien d'ancre | Même page vide | n/a | Défaillant [V] |
| `/apps/diamondtools/` (menu « Diamonds ») | Application GemFind | Page vide (en-tête et pied de page seuls) | n/a | Défaillant [V] |
| `/apps/ringbuilder/diamondtools`, `…navlabgrown`, `…navfancycolored`, `?shape=…` | Liens | Non ouverts (même application que les deux pages vides ci-dessus) | n/a | Non testé : même panne, une page par application suffit [I] |
| Pause slideshow | Bouton | Présent en haut de page ; non actionné | n/a | Non testé (sans enjeu) |
| Book an Appointment | Lien | Mène à `/pages/book-an-appointment` ; formulaire non rempli | n/a | Lien présent [V], page non lue |
| Recherche (champ + bouton) | Champ | Présent ; non utilisé (`/search` autorisé mais sans objet) | n/a | Non testé |
| Account | Lien | `/account` **interdit** par robots.txt | n/a | Non ouvert |
| Cart | Lien | Page panier vide, HTTP 200 | n/a | Fonctionne [V] |
| Filtre « Metal Color : White » | Case à cocher | La case cochée dans l'interface n'a pas changé la liste (226 produits) ; l'adresse filtrée `?filter.p.m.custom.gf_metal_color=White` ouverte directement donne 80 produits | Prix de 2 457 $ à 8 082 $ (liste vue) | Filtre par adresse fonctionne [V] ; clic sur la case sans effet visible dans ma session [V] (cause non établie) |
| Autres filtres (Product type, Price, Gemstone Type : Black Diamond, Diamond, Ruby, Sapphire ; Metal Color : Pink, Three Tone, Two Tone, White, White & Yellow, Yellow ; Metal Type : 14K Gold) | Cases | Listés, non cochés un par un | n/a | Non testé : cocher plusieurs filtres donne des adresses interdites (`filter*&*filter*`) |
| Tri (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date) | Liste déroulante | 9 options ; **non utilisé** : l'adresse porte `sort_by`, interdit par robots.txt | n/a | Non testé (raison : robots.txt) |
| Large / Small / List | Boutons | Densité de la grille ; non actionnés | n/a | Non testé (sans enjeu) |
| Ring Size (fiche) | Liste déroulante | 13 valeurs, 4 à 10 par demi-taille ; choisir 7 ne change pas le prix affiché (3 786 $) | Aucun | Fonctionne [V] |
| Zoom (fiche) | Bouton | Ouvre une visionneuse d'image (ordinateur et iPhone) | Aucun | Fonctionne [V] |
| Add to Wishlist / Open My Wishlist | Boutons | Présents (extension GemFind) ; non actionnés | n/a | Non testé (liste enregistrée côté serveur ou navigateur, non établi) |
| Add to cart | Bouton | **Non cliqué** : l'appel se fait sur `/cart/add`, interdit par robots.txt | n/a | Non testé (panier interdit) |
| Ask A Question | Formulaire (Nom, E-mail, Téléphone, Message, Envoyer, hCaptcha) | Non rempli ni envoyé | n/a | Non testé (formulaire) |
| Subscribe (pied de page) | Formulaire e-mail | Non rempli | n/a | Non testé (formulaire) |
| Téléphone (603) 889-0011, e-mail Sales@cardinjewelers.com, adresse (Google Maps) | Liens | `tel:` et carte ; non suivis | n/a | Liens présents [V] |
| Partager, comparer, guide des tailles interactif, financement, essayage à domicile, chat, WhatsApp, AR, 360°, vidéo, 3D | Contrôles | **Absents** sur les pages lues. Seul « Ring Size Guide » existe : une page PDF à imprimer (« Download & Print ») | n/a | Absent [V] |
| Achat immédiat, Shop Pay, PayPal | Boutons | Jamais cliqués (règle) ; non visibles sur la fiche | n/a | Non testé |

## Options disponibles

- **Métal** (filtre de la collection) : 14 k seulement ; couleurs Pink, Three Tone, Two Tone, White, White & Yellow, Yellow [V]. Pas de 18 k ni de platine dans les montures de la collection ; le platine apparaît dans un témoignage (bague platine sur mesure) [V].
- **Pierres** (filtre « Gemstone Type ») : Black Diamond, Diamond, Ruby, Sapphire [V]. Diamants naturels, de laboratoire et de couleur annoncés dans le menu du constructeur [V, index].
- **Formes de diamant** (liens `?shape=`) : asscher, coussin, émeraude, cœur, marquise, ovale, poire, princesse, radiant, rond [V, HTML de l'accueil].
- **Taille de doigt** : 4, 4½, 5, 5½, 6, 6½, 7, 7½, 8, 8½, 9, 9½, 10 [V].
- **Tri** : 9 options (listées ci-dessus) [V].
- **Pas d'option de gravure, de griffes, de corps de bague, de carat** relevée en ligne [V]. L'écran de choix du carat et des 4 C devrait se trouver dans le constructeur, qui ne s'affiche pas.
- **Montures** : 226 « Semi-Mount » en page de collection ; la fiche indique par exemple « Holds 0.75 ct Center » (titre de la page) et « LDS SEMI DIA RG .30 TW » [V].

## Prix, délais, retours, garanties

- **Affichage du prix** : [V] prix de la monture seule en dollars, sans taxe de vente (le texte affiche « $3,78600 » : le décimal « 00 » se colle au montant, défaut d'affichage du thème sans doute). Montures de 1 773 $ à 8 082 $ dans les pages lues (échantillon de page 1 et filtre blanc).
- **Décomposition** : aucune (pas de métal, façon, pierre, marge). [V]
- **Prix du bijou fini** : introuvable en ligne puisque le constructeur ne s'affiche pas ; la bague complète n'est pas chiffrée [V].
- **Délai** : « Because we keep work in-house, we control quality and timeline » ; **aucun délai chiffré** sur la page sur mesure [V]. Un témoignage cite moins de 3 semaines (bague sur mesure en platine) [V, avis client, non vérifiable].
- **Retours** : les conditions renvoient à une « Refund Policy » (conditions de vente) mais **aucune page de remboursement n'est liée** dans le pied de page ; seules « Privacy Policy » et « Terms of Services » le sont [V]. Aucun délai de retour, aucune exception du sur mesure.
- **Garanties** : « any warranty or service-recommendations » évoqués sans détail ; suivi recommandé après livraison [V].
- **Livraison, frais, moyens de paiement** : rien d'affiché sur la fiche ni sur le panier vide ; calcul non vu [V].
- **Conditions de vente** : la date de mise à jour porte encore le gabarit « Last updated: {{Month Day, Year}} » [V].

## Confiance et service

- **Maison** : « Trusted Jeweler Since 1920 », 125 Main Street, Nashua ; horaires publiés (mardi-mercredi 10-16 h, jeudi 10-19 h, vendredi-samedi 10-16 h, dimanche-lundi fermé) ; téléphone et e-mail visibles [V].
- **Avis clients** : page « Testimonials » avec **un seul avis** (5 étoiles, prénom et nom du client), page lue [V]. Pas de note agrégée.
- **Preuves de fabrication** : promesse écrite (« 3D Mock-Up », « concept sketches », « track progress ») mais **aucune photo ni vidéo d'atelier**, aucune maquette montrée, pas de suivi de commande en ligne [V, pages lues]. Le texte dit « may provide digital renderings » : rendu non garanti.
- **Certificats** : non mentionnés sur les pages lues (ni GIA ni IGI) ; la page « Diamond Education » explique les 4 C [V].
- **Libellé du synthétique** : « Lab Grown Diamond » dans le menu du constructeur [V, index].
- **Langues, devises** : anglais, dollars américains seulement ; pas de sélecteur [V].
- **Services** : réparation de bijoux, montres et horloges, expertises, conception sur mesure ; rendez-vous (« Book an Appointment ») ; essayage à domicile, chat, WhatsApp : absents [V].

## Points forts à retenir pour JR Diamond

1. **Le constructeur à trois départs (monture, diamant naturel, diamant de laboratoire, diamant de couleur)** : réflexe de parcours que le client attend. Preuve : liens du menu dans le HTML de `/` [V]. Mais voir les défauts : il ne marche plus.
2. **Une page sur mesure qui promet la CAO et la transparence** (« You'll know cost-drivers, timelines and be able to track progress ») : le vocabulaire de « l'atelier en direct » est déjà occupé en texte, sans preuve. Preuve : `/pages/custom-design`, lue [V]. Opportunité : montrer ce que Cardin ne montre pas (photos, vidéos, suivi).
3. **Prix de monture affiché dès la grille** (de 1 773 $ à 8 082 $) : le client voit un ordre de grandeur sans rendez-vous. Preuve : `/collections/engagement-rings` [V].
4. **Fiche simple et rapide** : visuel principal à 0,7-0,9 s (voir mesures) ; zoom d'image fonctionnel sur ordinateur et iPhone ; taille de doigt dès la fiche (13 valeurs). Preuve : mesures et clic sur Zoom [V].
5. **Prise de rendez-vous visible sur chaque page** (bandeau « Looking to create a custom piece? Book an Appointment ») : conversion vers l'atelier. Preuve : capture de la page de départ [V].

Mesures (Chromium, réseau du bac à sable, un seul passage chacune, à lire comme un ordre de grandeur [I]) :

| Page | Ordinateur : événement load / plus grand élément | iPhone 13 : load / plus grand élément |
| --- | --- | --- |
| Fiche produit | 928 ms / 860 ms | 767 ms / 736 ms |
| Collection | 1 021 ms / 1 108 ms | non mesuré |
| `/apps/diamondtools/` (page vide) | 1 390 ms / 1 108 ms | non mesuré |
| Sur mesure | 855 ms / 824 ms | non mesuré |

Il n'y a **pas de visuel 3D** à mesurer : la fiche montre des photos de produit ; aucun élément `<video>` ni `<model-viewer>` sur la fiche (ordinateur et iPhone) [V].

## Défauts observés

1. **Constructeur de bague inutilisable** : la page de départ de l'étude affiche un cadre vide, sur ordinateur et iPhone, aussi bien via `/apps/ringbuilder/settings/` que `/apps/diamondtools/`. Le HTML rendu côté serveur contient un gabarit brut (`@secureAsset('favicon.jpg')`) : l'application GemFind charge ses fichiers mais ne monte rien [V]. Cause exacte non établie [S] (panne côté éditeur, configuration de la boutique, ou incompatibilité avec mon navigateur automatisé). **Le menu principal envoie pourtant vers ces pages** : un client réel tombe sur une page blanche si le défaut est général [I].
2. **Aucun configurateur 3D ni visuel de la bague terminée** : seules des photos de montures « semi-mount » (sans pierre centrale) ; le prix du bijou final n'est jamais calculé [V, fiche et grille].
3. **Prix mal formaté** : « $3,78600 » au lieu de « $3,786.00 » (les centimes sont collés au montant dans le texte de page) [V].
4. **Titres de produits tous identiques** : « 14KT Gold Semi-Mount Engagement Ring » sur 226 fiches, distinguées seulement par un numéro dans l'adresse (`…-ring-5`) et par un code (SKU CJ-7157691) ; difficile à comparer [V].
5. **Conditions de vente inachevées** : « Last updated: {{Month Day, Year}} » ; renvoi à une « Refund Policy » absente du site [V].
6. **Pied de page : le lien « Watches » mène à l'accueil** (`/`) [V].
7. **Filtre « Metal Color » : la case cochée dans mon navigateur n'a pas appliqué le filtre** (226 produits avant et après), alors que l'adresse équivalente donne 80 produits [V]. Cause non établie.
8. **Aucune information de livraison, de retour ni de délai** sur la fiche produit [V].
9. **Un seul avis client** dans la page « Testimonials » [V].
10. Erreur de script du thème à l'ouverture : `Failed to construct 'Request': Failed to parse URL … //www.cardinjewelers.com/cdn/shop/t/4/assets/worker-min.js` [V, console].

## Limites de l'audit

- [V] Le constructeur ne s'affichant pas, **ne sont pas vérifiés** : choix du carat, de la forme, du métal et du titre, de la monture, des griffes, de la gravure, des filtres de diamants (taille, couleur, pureté, prix, certificat), prix de la bague complète, vues photo/vidéo/360°/3D/AR. Les mentions du menu et de l'étude précédente (« 3 easy steps », naturel / laboratoire / couleur) restent des extraits d'index [V, index].
- **Panier** : seule la page vide a été lue (`/cart`, autorisée). Le bouton « Add to cart » appelle `/cart/add`, **interdit par robots.txt** : non cliqué ; récapitulatif, frais de livraison, délai et moyens de paiement du panier **non vus**. Aucun bouton de paiement cliqué.
- **Pages interdites non ouvertes** : `/account`, `/cart/add`, `/cart.js`, adresses avec `sort_by` (tri) ou deux filtres. Le lien « Account » et le tri n'ont donc pas été testés.
- **Un seul filtre par adresse** testé (Metal Color : White) ; les autres filtres (prix, pierre, type de métal) non essayés.
- Une page toutes les 2 secondes au plus ; une seule fiche de produit ouverte (parmi 226) ; page « Book an Appointment », « Contact », « Refund » non lues ; aucun formulaire rempli ; aucune conversation ouverte.
- Temps mesurés sur le réseau du bac à sable, une seule fois chacun ; indicatifs.
- Les captures sont conservées dans le dossier de travail (hors dépôt).
- Une recherche sur le web n'a pas été nécessaire : tous les faits viennent des pages ouvertes ci-dessous.

## Sources

- https://www.cardinjewelers.com/robots.txt : lu 25/11 (HTTP 200 ; règles citées plus haut)
- https://www.cardinjewelers.com/ (HTML de l'accueil : menus, liens du constructeur)
- https://www.cardinjewelers.com/apps/ringbuilder/settings/ (page vide, ordinateur et iPhone)
- https://www.cardinjewelers.com/apps/diamondtools/ (page vide)
- https://www.cardinjewelers.com/pages/custom-design
- https://www.cardinjewelers.com/collections/engagement-rings (et `?filter.p.m.custom.gf_metal_color=White`)
- https://www.cardinjewelers.com/collections/bridal (994 produits ; prix de « from 280 $ » à plus de 3 000 $)
- https://www.cardinjewelers.com/collections/engagement-rings/products/14kt-gold-semi-mount-engagement-ring-5
- https://www.cardinjewelers.com/cart
- https://www.cardinjewelers.com/pages/ring-size-guide, /pages/services, /pages/about, /pages/testimonials, /pages/diamond-education, /policies/terms-of-service
- Inventaire du territoire : `docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md` (fiche Cardin, extraits d'index du 24/11)
