# Audit : Reflective Jewelry (Santa Fe, Nouveau-Mexique)

- **Site** : Reflective Jewelry, https://www.reflectivejewelry.com/ (ASP.NET, boutique en dollars, anglais seulement)
- **Page de départ** : https://www.reflectivejewelry.com/all-engagement-rings
- **Date** : 15/11/2026 (date fixée par la consigne ; horloge de la session : 25/11/2026)
- **Appareils** : Chromium 1366 x 900 (ordinateur) et iPhone 13 (émulation Playwright) ; aucun compte, aucun formulaire rempli, bouton « Checkout » non cliqué
- **Statut** : **complet** jusqu'au panier. Pas de configurateur 3D : le site vend des bagues faites à l'atelier avec options (pierre, taille, gravure) et une recherche de diamants synthétiques. robots.txt : `Disallow:` vide, tout autorisé (vérifié avec `robots.cjs`). Aucun captcha, aucun 403.
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options relevées | État |
| --- | --- | --- |
| 1. Liste « All Engagement Rings » (217 articles, 6 pages) | filtres Gender, Product type, Metal, Design, Price ; tri ; recherche ; pagination | [V] |
| 2. Fiche produit (ex. Windsor, 1 295 $) | pierre centrale, source du diamant, carat (moissanite), taille de doigt, gravure | [V] |
| 3. Ajout au panier | fenêtre « Product added to cart » (demande d'e-mail) puis « Go to Cart » / « Continue Shopping » | [V] |
| 4. Panier `/cart` | récapitulatif, quantité, Update, sous-total, total, Guest Checkout / Returning Customer / Register, Checkout | [V] ; paiement non ouvert |
| Variante diamant | `/lab-grown-diamonds` : bouton « Click to Load Diamonds Data » puis tableau de pierres à prix et « Add to cart » par pierre ; `/canadian-mined-diamonds` : « Call 888-733-5238 to place your order! » | [V] |
| Variante sur mesure | `/custom-jewelry` redirige vers l'article de blog « Custom Jewelry Design Process » : consultation gratuite, Zoom, courriel, dessins ; formulaire de contact non rempli | [V] lu |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Gender : Women / Men / All | boutons radio | filtre la liste (envoi de formulaire ASP.NET) ; « All » coché par défaut | prix des fiches inchangés | non actionné (présent) |
| Product type (menu : New, One-of-a-kind, Wedding Rings, Engagement Rings, Designer Rings, Necklaces, Bracelets, Earrings, Cufflinks + Studs) | liens | présents dans le volet de filtres | n/a | non actionnés |
| Metal (cases : All, Two Tone, Yellow Gold, White Gold, Rose Gold, Platinum, Tri-Tone, Silver) | cases à cocher | présentes ; non actionnées | n/a | non testé (temps) |
| Design (cases : New, One-of-a-kind, Classic Comfort Fit, Celtic, Nature, Floral, Art Nouveaux, Modern, Unique) | cases à cocher | présentes ; non actionnées | n/a | non testé (temps) |
| Price : Under $500 / $1000 / $1500 / $2000 / $2500 / $3000 / $3000+ | boutons radio | présents ; case « Under $1000 » cochée par script, le résultat n'a pas pu être lu (la page s'est rechargée) | n/a | non vérifié |
| Sort By : Price low to high, high to low, Product | liste | la sélection de « Price: low to high » recharge la page (envoi de formulaire) ; ordre des résultats non relu | n/a | recharge [V], résultat non vérifié |
| Recherche (haut de page, volet de gauche) | champ + loupe | présents ; non utilisés | n/a | non testé |
| Pagination 1 à 6 (haut et bas) | liens `__doPostBack` | présents ; non actionnés | n/a | non testé |
| Fiche : Select Center Gemstone (Diamond, Emerald, Ruby, Sapphire, Your Stone - Call for Details, Moissanite) | liste | change la photo principale : Emerald, Moissanite, Diamond chargent chacune une autre image (`Windsor-Engagement-Ring-in-Emerald/…jpeg`, `…Moissanite/…`, `…Diamond/…`) ; « Your Stone » garde l'image précédente | émeraude et diamant : 1 295 $ inchangé ; moissanite exige un carat | fonctionne [V] |
| Fiche : Select Carat Weight (moissanite : 4 mm +150 $, 5 mm +195 $, 6 mm +345 $, 6,5 mm +395 $, 7 mm +495 $, « DEF Colorless ») | liste | 4 mm : 1 295 $ devient 1 445 $ | +150 $ vérifié ; les autres suppléments lus dans la liste, non essayés | fonctionne [V] |
| Fiche : Select Diamond Source (Canadian Mined Diamonds / Lab Grown Diamonds) | liste | apparaît quand « Diamond » est choisi ; lien « Canadian vs Lab Grown Diamonds » | aucun changement de prix affiché (1 295 $) | fonctionne [V] ; effet sur la fiche : ligne « Center gemstone: Canadian Diamond » |
| Fiche : Select Ring Size (4 à 12 par quarts, « Over Size 12 - Contact for Price ») | liste | tailles 4 à 4,75 : « Non Returnable » +50 $ ; 5 à 7,75 : 0 ; 8 à 12 : +100 $ | 4 : 1 345 $ ; 7 : 1 295 $ ; 9 : 1 395 $ ; plus de 12 : 1 295 $ (sur contact) | fonctionne [V] |
| Fiche : Engrave This Item | case à cocher | affiche « INSCRIPTION » : 15 $ par caractère ; frais de restockage de 100 $ si retour | calculé par caractère (formule affichée) | fonctionne [V] |
| Fiche : « Details » (Ring sizing, Free resizing, Center gemstone, Free USPS shipping, Fairtrade) | liens | présents ; non suivis un à un | n/a | non testé |
| Fiche : 7 vignettes d'images | boutons image | présentes ; non actionnées | n/a | non testé |
| Fiche : Add to Wish List | bouton | non actionné | n/a | non testé |
| Fiche : Read / Write a Review | lien + formulaire (nom, e-mail, note de 1 à 5, texte) | formulaire non rempli | n/a | non testé (consigne) |
| Fiche : ADD TO CART sans choix | bouton | rien d'apparent à l'écran, la page se recharge | n/a | [V] |
| Fiche : ADD TO CART, moissanite 4 mm, taille 7 | bouton | fenêtre « Product added to cart » ; « Go to Cart » mène à `/cart` | 1 445 $ au panier | fonctionne [V] |
| Fiche : ADD TO CART, moissanite sans carat | bouton | message « Error >> … go back and fill in the following options properly? Center Gemstone Weight » | n/a | erreur claire [V] |
| Fiche : ADD TO CART, Diamond + Canadian Mined | bouton | redirige vers `/canadian-mined-diamonds` : « Call 888-733-5238 to place your order! » ; **pas d'ajout au panier** | n/a | fonctionne comme annoncé [V] ; cas « Lab Grown » seul non isolé |
| Fenêtre d'ajout : champ e-mail | champ | non rempli | n/a | non testé |
| Panier : Qty, Update | champ + bouton | présents ; non actionnés | n/a | non testé |
| Panier : Guest Checkout / Returning Customer / Register, Checkout | radios + bouton | présents ; **non cliqués** (mène au paiement) | n/a | non testé |
| `/lab-grown-diamonds` : Click to Load Diamonds Data | bouton | charge un tableau de 50 pierres par page, 49 pages, depuis le même domaine (aucun appel externe observé) | prix par pierre, de 1 120 $ environ | fonctionne [V] |
| Diamants : curseurs Price ($0 à $10 000) et Carat (0 à 3,0) | curseurs | présents ; non déplacés | n/a | non testé |
| Diamants : une quarantaine de formes (Brilliant Round, Emerald, Radiant, Pear, Oval, Princess, Cushion, Asscher, Marquise, etc.) | vignettes | clic sur « OVAL » : délai dépassé (5 s), pas de changement | n/a | **non fonctionnel dans le test** (cause non établie) |
| Diamants : en-tête PRICE | texte | trie le tableau (première ligne : 7 367 $, brillant 2,44 ct) | n/a | fonctionne [V] |
| Diamants : pagination 1…49, champ « Go to Pg », OK | boutons | présents ; non actionnés | n/a | non testé |
| Diamants : Add to cart (50 par page) | boutons | présents ; non cliqués | prix de la pierre | non testé |
| Diamants : clic sur une ligne | ligne | aucun effet (pas de fiche détaillée) | n/a | [V] |
| En-tête : Login, Wish list, Cart, Free Shipping, téléphone 1 888-733-5238, News | liens | pages d'information lues (`/about/free-shipping`, `/about/lifetime-guarantee`) | n/a | liens fonctionnent [V] |
| Menu : Shop, Custom, Engagement, Wedding, Jewelry, Diamonds, Ethics, About | liens | présents ; seuls quelques liens ouverts | n/a | non parcourus tous |
| Abonnement (Mailchimp), réseaux sociaux | formulaire, liens | non utilisés | n/a | non testé |
| Absents | | pas de vue 3D, 360°, vidéo, AR, essayage sur la main, comparaison, partage, chat, rendez-vous en ligne, WhatsApp sur les fiches lues | n/a | [V] |

## Options disponibles

- **Pierres (fiche)** : diamant (source canadienne ou synthétique), émeraude, rubis, saphir, moissanite (4 à 7 mm), « votre pierre, appelez » [V].
- **Métaux** : chaque fiche porte un métal fixe (14K ou 18K jaune, blanc ou rose, deux tons argent + or 18K, platine, tri-ton, argent) ; la variante est un autre produit (adresses `…14K-Yellow-Gold…`, `…Two-Tone…`) [V pour les deux premiers cas].
- **Tailles** : 4 à 12 par quarts ; sur-mesure au-delà de 12 [V].
- **Gravure** : texte libre, 15 $ par caractère [V].
- **Diamants synthétiques** : environ 2 450 pierres (49 pages x 50) ; tableau : forme, pureté, carat, couleur, taille (Cut), polissage, prix [V].
- **Moyens de paiement annoncés (pied de page)** : cartes principales, chèque, mandat, virement bancaire, layaway / plans de paiement [V].
- **Livraison** : gratuite aux États-Unis par USPS ; envoi suivi et signature requise au-delà de 500 $ ; Express, Overnight ou 2 jours payants ; Canada avec supplément ; Union européenne, Asie, Australie, Nouvelle-Zélande au cas par cas [V, `/about/free-shipping`].

## Prix, délais, retours, garanties

- **Prix** : affichés dès la liste (de 879 $ à 6 265 $ sur la première page, 217 articles) et sur la fiche ; le prix de la fiche suit les options de taille (+50 $ / +100 $) et de carat de la moissanite ; la pierre de diamant n'est pas incluse dans le prix de la fiche (choix « Diamond » = 1 295 $, comme sans pierre) et se commande par téléphone ou dans la recherche de diamants [V pour le montant, I pour l'interprétation]. Pas de décomposition métal, façon, pierre.
- **Délai** : « Order Now for a Shipping Date of 12/8/2026 » (date calculée par la fiche, 13 jours après le jour de test du 25/11/2026) ; « Need It Sooner? » [V]. Pas de durée exprimée en jours.
- **Retours** : « 30 Day returns » (pied de page) ; tailles 4 à 4,75 marquées « Non Returnable » ; articles gravés retournés : frais de restockage de 100 $ ; pour le sur mesure, la page de retours détaillée n'a pas été lue [V pour les trois premiers, S pour l'exception du sur mesure].
- **Garantie** : « Lifetime Guarantee » contre un défaut de fabrication, réparation gratuite tant que le client possède la pièce, nettoyage et polissage gratuits (frais d'envoi retour assuré : 12 $) ; une modification par un autre bijoutier annule la garantie [V, `/about/lifetime-guarantee`]. Mise à taille gratuite (« Free Resizing ») [V].
- **Certificats** : aucun certificat GIA ou IGI vu ; pierres canadiennes « Arctic Mark » (marque de provenance) mentionnées sur la page des diamants canadiens [V].
- **Libellé du synthétique** : « Lab Grown Diamonds » (page, menu et fiche) [V].
- **Langues / devises** : anglais seulement, dollars américains (« US flag » pour les dollars sur le moteur de diamants canadiens) [V].

## Confiance et service

- [V] Atelier et galerie dans le même immeuble (912 Baca Street, Suite D, Santa Fe) ; équipe de six personnes depuis 1995 (`/news/custom-jewelry-design-process`).
- [V] « Only Fairtrade Gold Jeweler in the USA since 2015 », prix « Santa Fe Green Business of the Year », collaboration USAID Zahabu Safi ; fiche : « Metal source: Fair Trade Gold & Recycled Silver ».
- [V] Avis : 4 avis sur la fiche Windsor, datés de 2010 à 2015 ; la liste indique « (1 review) » ou « (4 reviews) » sur quelques fiches ; l'article de blog cite « 250+ Five-star Google reviews » (affirmation du site, non vérifiée) [I].
- [V] Sur-mesure à distance : Zoom, courriels, dessins ; plus d'un tiers des clients hors Nouveau-Mexique ; le propriétaire traite lui-même la plupart des demandes.
- [V] Contact : téléphone gratuit, courriel, adresse ; pas de chat ni de WhatsApp.
- [V] Preuves de fabrication : photos d'artisans (page garantie, livraison), vidéos YouTube liées depuis la page des diamants synthétiques ; pas de suivi de commande vu ni de photos de la bague de la commande [I].
- [V] Diamants : page « Why Canadian Diamonds? », comparatif « Canadian vs Lab Grown ».

## Points forts à retenir pour JR Diamond

1. **Fiche claire avec règles de prix explicites** : suppléments de taille (+50 $, +100 $) et de carat affichés dans la liste elle-même, prix mis à jour à l'écran. Preuve : taille 4 : 1 345 $ ; taille 9 : 1 395 $ ; moissanite 4 mm : 1 445 $. JR Diamond peut aller plus loin avec une décomposition.
2. **Politique de retour honnête sur les exceptions** : « Non Returnable » écrit dans la liste des tailles et 100 $ de frais sur les gravures, au moment du choix. Preuve : options de la liste. Répond au besoin d'expliquer l'exception du sur mesure.
3. **Garantie à vie et mise à taille gratuite** mises en avant en pied de page de toutes les pages. Preuve : `/about/lifetime-guarantee`.
4. **Date de livraison calculée sur la fiche** (« Shipping Date of 12/8/2026 ») plutôt qu'une durée vague. Preuve : fiche Windsor.
5. **Recherche de diamants synthétiques avec prix par pierre** : tableau trié par prix, ~2 450 pierres. Preuve : `/lab-grown-diamonds`, 49 pages. Preuve que les clients américains se voient proposer des synthétiques à prix affiché.
6. **Message d'erreur explicite** quand une option obligatoire manque (carat de la moissanite). Preuve : « please go back and fill in the following options properly ».
7. **Récit d'atelier assumé** : six personnes, atelier dans la galerie, or Fairtrade, envoi gratuit. Preuve : pages garantie, livraison et blog.

## Défauts observés

- Chargement lent : la liste met environ 11 s sur ordinateur et 10 s sur iPhone avant le premier visuel (page entièrement serveur, 217 articles) [V].
- Aucune vue 3D, 360°, vidéo, essai sur la main ; une photo par option de pierre seulement [V].
- Le diamant n'est pas vendable sur la fiche : choisir « Diamond » redirige vers un appel téléphonique (pierre canadienne) ou vers la recherche séparée ; l'utilisateur ne voit pas le prix total bague + pierre [V].
- Prix inchangé quand on choisit une pierre précieuse (émeraude, rubis, saphir) : le montant de la fiche n'inclut pas la pierre ; risque de confusion [V ; interprétation I].
- Tri et filtres rechargent toute la page (formulaire ASP.NET), lent [V].
- Dans le moteur de diamants, le clic sur « OVAL » a dépassé 5 s sans effet dans le test ; un clic sur une ligne ne fait rien [V].
- Avis anciens (2010 à 2015) [V]. Aucun avis récent affiché sur la fiche.
- Pas de décomposition du prix, pas de certificat GIA/IGI, pas de suivi de commande ni de photos de la fabrication de la commande [V].
- Panier : aucun frais de port ni délai affichés dans le récapitulatif (sous-total égal au total) ; ils ne sont annoncés qu'ailleurs [V].
- Fenêtre « Product added to cart » : demande l'e-mail avant d'aller au panier [V].

## Limites de l'audit

- Seule la fiche Windsor a été testée en profondeur ; les autres fiches (14K, platine, gemmes) peuvent offrir d'autres options.
- Filtres Metal, Design, Product type, Price, tri (résultat), pagination, recherche : présents mais non (ou mal) vérifiés ; les clics de formulaire provoquent un rechargement.
- Cas « Lab Grown Diamonds » de la fiche : l'ajout au panier n'a été testé qu'avec « Canadian Mined » en dernier choix.
- Recherche de diamants : curseurs, formes (clic sur Oval sans effet), pagination, ajout d'une pierre au panier non testés.
- Panier : quantité, mise à jour, paiement non actionnés ; frais de port et moyens de paiement du paiement non vus (le bouton Checkout n'a pas été cliqué).
- Aucun formulaire (avis, e-mail, contact, abonnement) rempli, aucun compte créé ; wishlist non actionnée.
- Mesures avec une passe par appareil, réseau serveur (proxy) : indicatives. Version mobile : liste et fiche chargées et chronométrées ; mise en page de la fiche en iPhone non examinée en détail (capture de la liste faite).
- Le panier de test contenait une bague (moissanite 4 mm) ajoutée par l'auditeur ; elle n'a pas été commandée.

## Mesures (visuel principal, première image produit chargée)

| Page | Ordinateur | iPhone 13 |
| --- | --- | --- |
| Liste `/all-engagement-rings` | 11,1 s (DOM prêt à 11,0 s) | 10,0 s (DOM prêt à 10,0 s) |
| Fiche Windsor | 4,1 s (DOM prêt à 4,0 s) | 2,8 s (DOM prêt à 2,7 s) |

## Sources

- https://www.reflectivejewelry.com/all-engagement-rings (liste, contrôles, captures `www_reflectivejewelry_com_all_engagement_rings*.jpg`)
- https://www.reflectivejewelry.com/Windsor-Engagement-Ring-Two-Tone-RJ613OV0param64425-64425 (fiche)
- https://www.reflectivejewelry.com/cart (panier, atteint après ajout)
- https://www.reflectivejewelry.com/lab-grown-diamonds ; https://www.reflectivejewelry.com/canadian-mined-diamonds
- https://www.reflectivejewelry.com/about/free-shipping ; /about/lifetime-guarantee ; /news/custom-jewelry-design-process
- https://www.reflectivejewelry.com/robots.txt (outil `robots.cjs`)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/reflective-jewelry/`
