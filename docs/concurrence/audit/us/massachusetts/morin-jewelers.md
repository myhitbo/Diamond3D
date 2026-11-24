# Audit : Morin Jewelers (Southbridge, Massachusetts)

- **Site** : Morin Jewelers, 409 Main Street, Southbridge MA, https://www.morinjewelers.com (plateforme Punchmark)
- **Page de départ** : https://www.morinjewelers.com/ringsettings (robots.txt : AUTORISÉ ; les pages de produit, de diamants, de politiques et /cart aussi, vérifié par l'outil)
- **Date** : 15/11/2026 (scripts lancés le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; iPhone 13 (relevé des contrôles, fiche produit chronométrée)
- **Statut** : **partiel**. Le constructeur en 3 étapes (monture, diamant, bague complète) est un catalogue de montures semi-montées + stones à choisir, pas un dessinateur 3D. L'étape diamants a affiché « 0 diamonds found » dans le test ; l'ajout au panier n'a pas pu être confirmé (panier vide).
- Marques : (V) vérifié, (I) inféré, (S) supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Fil d'Ariane | 1 Choose Setting (Search) → 2 Choose Diamond (Find a Stone) → 3 Complete Ring (Review Your Ring). L'ordre s'inverse si l'on commence par /ringsettings-diamonds (diamant d'abord) |
| 1. Liste /ringsettings | 140 montures, 24 par page ; recherche « Describe what you're looking for… » (bouton « AI Search ») ; « All Filters » ; tri ; cartes avec prix, « Free Shipping via Ground Shipping », « Ships in 2-3 Business Days », « Quick View », cœur favori, badge « Semi-Mount » |
| 1b. Fiche /ringsettings-details/… | galerie (vignette 360°, 3 photos), prix, « Add Setting to Cart », favori, « Choose this Setting », « Schedule a Viewing », Shipping, Returns, Drop Hint, Call Us, Product Details, pierres recommandées |
| 2. Diamants /ringsettings-diamonds | Natural / Lab-Grown ; formes, prix, carat, cut, color, clarity, « Advanced », résultats 12/24/36/120, recherche par SKU, comparaison |
| 3. Complete Ring | non atteinte (aucune pierre choisie) |

## Contrôles vérifiés

Relevé automatique de /ringsettings : 275 contrôles visibles sur ordinateur, 249 sur iPhone (dont ~220 liens de menu et de pied de page).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche « Describe what you're looking for » + AI Search | champ | présent ; non utilisé (aucun texte saisi) | — | non testé |
| All Filters | bouton | ouvre le panneau : Brand, Material (7), Gemstone, Ring Setting Styles (7), Price, Gender | filtre le prix | fonctionne (V) |
| Material | filtre | Platinum, 10K / 14K / 18K White Gold, 10K / 14K / 18K Yellow Gold (cases lues, non cochées) | — | lu, non testé |
| Ring Setting Styles | filtre | bypass, halo, multirow, singlerow, solitaire, threestone, vintage | — | lu, non testé |
| Gemstone / Gender | filtre | Diamond ; Women's | — | lu, non testé |
| Price | curseur + 2 champs | plage 628,92 $ à 52 320,57 $ | — | présent, non actionné |
| Tri (Newest) | liste | featured, high to low, low to high, newest | — | lu, non testé |
| Quick View | bouton | ouvre une fenêtre : photo, titre, prix, livraison gratuite sol, « Ships in 2-3 Business Days », Add to Cart, Add to Wish List, See More Details (V, capture) | 2 811,75 $ | fonctionne |
| Cœur / Add to Wish List | bouton | non cliqué (connexion probable, I) | — | non testé |
| Image de monture | vignettes | galerie : 360° (« Scrub through product video »), photos de face, côté, set ; flèche « Next item image » ; « Click image to zoom in » | — | présent ; zoom et 360° non actionnés |
| Add Setting to Cart | bouton | déclenche le chargement du moteur de panier et un panneau « My Cart » avec lien « View Setting in Cart » (/cart) ; la page /cart ouverte ensuite indique « Your Cart is Empty » (V, 2 essais) | 2 811,75 $ | **non confirmé** |
| Choose this Setting | bouton | mène à l'étape 2 (non cliqué, I d'après le fil d'Ariane) | — | non testé |
| Schedule a Viewing / Drop Hint | bouton | ouvrent un formulaire (I) ; non ouverts (coordonnées) | — | non testé |
| View shipping options | bouton | fenêtre : Ground 9,99 $, Overnight 49,95 $, retrait gratuit en magasin ; 50 États, pas de boîtes postales, pas hors États-Unis (V) | 9,99 $ / 49,95 $ | fonctionne |
| Returns / Product Details (fiche) | bouton | clics bloqués par la fenêtre de livraison restée ouverte ; contenu lu sur la page /return-policy | — | partiel |
| Natural / Lab-Grown (étape 2) | bascule | titre devient « Search for Lab Grown Diamonds » (V, capture) | — | fonctionne |
| Formes, Price, Carat (0,1 à 20), Cut (Fair à Excellent), Color (Z à D), Clarity (F à I3), Advanced | filtres | présents ; résultat « 0 diamonds found » après 15 s ; clic « Round » sans effet (V) | — | **résultats non chargés** |
| Pierres recommandées (fiche) | lien | liste Natural / Lab-Grown, collections Premium, Select, Value, par ex. « 1.00ct Lab-Grown Round D / VVS1 825 $ » ; lien vers /ringsettings-diamonds-details?id=… | 614 $ à 6 926 $ | présent (V) |
| Affirm, Iddeal | lien | fenêtre de financement Affirm chargée sur la fiche ; page /financing-options (V) | — | présent |
| Text us / « Hi there, have a question? » | bouton flottant | non ouvert (pas de conversation) | — | non testé |
| Cookies : Decline all cookies | bouton | fonctionne (V) | — | fonctionne |
| Tél. (508) 764-7250, Make an appointment, Our Store | lien | liens relevés ; non suivis | — | non testé |
| Newsletter (e-mail + Subscribe) | formulaire | non rempli | — | non testé |

## Options disponibles

- **Montures** : 140, semi-montées, marques fournisseurs (ex. « Overnight »). Styles : solitaire, halo, trois pierres, vintage, pavé, rang simple ou multiple, bypass.
- **Métal** : or 10 k, 14 k, 18 k (blanc, jaune, rose) et platine, d'après la description de la fiche (« Available in 10K, 14K, and 18K white, yellow, or rose gold, and platinum ») ; aucun sélecteur de métal sur la fiche observée : la monture porte son titre.
- **Origine du diamant** : naturel ou lab-grown. **Formes de diamant** : 10 (Round, Princess, Emerald, Asscher, Radiant, Cushion, Oval, Pear, Marquise, Heart).
- **Services** : Custom (https://www.morinjewelers.com/pages/custom), restauration, redimensionnement, assurance, rendez-vous, programme de remise à niveau en diamant naturel.

## Prix, délais, retours, garanties

- **Prix** : prix de la monture seule affiché sur la liste et la fiche (ex. « 10K White Gold Round Halo Engagement Ring » 2 811,75 $), « The center stone is not included in the price ». Prix des pierres affichés séparément. Pas de décomposition métal / façon.
- **Délai** : « Ships in 2-3 Business Days » (monture en stock) ; « Arrives by Christmas! ». Aucun délai pour la bague complète.
- **Livraison** : sol 9,99 $ ou nuit 49,95 $ sur la fiche ; la liste annonce « Free Shipping via Ground Shipping » ; la fenêtre dit « FREE shipping for orders over $0.00 » : message contradictoire (V).
- **Retours** (https://www.morinjewelers.com/return-policy) : 10 jours après réception, neuf, emballage d'origine ; retours à la charge du client ; « Personalized or custom pieces are not eligible » ; échange d'un article défectueux sous 30 jours ; remboursement dans le mode de paiement d'origine.
- **Garanties** (https://www.morinjewelers.com/pages/warranties) : bijou sur mesure 1 an (défauts de fabrication), réparations 1 an, montres 6 mois, défectueux 10 jours ; les pierres, diamants compris, vendues « as-is ». Redimensionnement et mise à niveau de diamant non retournables.
- **Financement** : Affirm, carte Iddeal (V, https://www.morinjewelers.com/financing-options).
- **Certificats** : liens vers GIA et IJO en pied de page ; libellé « Lab-Grown ».

## Confiance et service

- Entreprise familiale depuis 1920 (V, page garanties). Boutique : mar. à ven. 9 h 30 à 17 h 30, sam. 9 h 30 à 15 h.
- Avis : bloc « Recent Store Reviews » 5 sur 5, 55 avis récents, 682 avis au total (V, fiche produit) ; page Custom : « RATED 5.0 ON GOOGLE · 670+ REVIEWS ».
- Page Custom : « sketched by hand, modeled in 3D and finished in our own shop » ; « You approve every stage before anything is made » ; galerie « Custom Design Gallery » (V, https://www.morinjewelers.com/pages/custom) ; pas de vidéo de fabrication ni de suivi de commande vu (« Order Lookup » seul lien).
- Moyens de paiement affichés sur la fiche : Visa, Mastercard, Amex, Discover, Apple Pay (icônes, V). Langue : anglais ; devise : dollar. Support : appel, SMS, bouton « Text us ».

## Points forts à retenir pour JR Diamond

1. **Prix de monture sur chaque carte et chaque fiche, avec « Ships in 2-3 Business Days » et livraison annoncée dès la liste.** Preuve : https://www.morinjewelers.com/ringsettings.
2. **Pierres recommandées proposées sur la fiche de la monture** (naturel / lab-grown, trois collections Premium / Select / Value, prix affichés). Preuve : fiche 18590.
3. **Politique de retour et de garanties explicite, avec l'exception du sur mesure écrite** et une garantie de 1 an sur le sur mesure. Preuve : /return-policy et /pages/warranties.
4. **Étapes numérotées 1-2-3 avec ordre inversable** (monture d'abord ou diamant d'abord). Preuve : fil d'Ariane.
5. **Financement (Affirm) et retrait gratuit en magasin affichés sur la fiche.**
6. **Galerie 360° en première vignette** de la fiche (https://www.morinjewelers.com/ringsettings-details/…/18590).

## Défauts observés

- Pas de configurateur visuel : l'utilisateur ne voit jamais la monture avec la pierre choisie avant l'étape 3 (I, étape non atteinte).
- Étape diamants : « 0 diamonds found » dans le test (V, 15 s d'attente) : chargement sans résultat ; cause inconnue.
- Ajout au panier : panier vide ensuite (V) ; fiabilité non établie.
- Message de livraison incohérent (gratuite / 9,99 $).
- Liste de montures : cartes sans image pendant ~3 s (images à 9,3 s sur ordinateur, V, chronométré).
- Bandeau de promotion Citizen, sans rapport avec la bague, au-dessus du constructeur ; aucun prix pour la bague complète avant l'étape 3.
- Aucune information sur l'origine de fabrication des montures (fournisseur de catalogue « Overnight » ; la page Custom parle de fabrication sur place, mais le constructeur vend du catalogue) (V).

## Limites de l'audit

- Mesures : liste visible 6,5 s et images produit 9,3 s (ordinateur) ; fiche produit, image principale chargée 2,8 s (ordinateur) et 2,6 s (iPhone) (V, mesure unique).
- Non testés : tri, filtres cochés, recherche IA, 360°, zoom, favoris, formulaires, chat ; étape 3 et récapitulatif du panier non atteints (panier vide). Aucune donnée saisie, aucun paiement.
- Les résultats de diamants peuvent dépendre d'un fournisseur externe bloqué dans l'environnement de test (S).

## Sources

- https://www.morinjewelers.com/ringsettings , https://www.morinjewelers.com/ringsettings-details/engagement-ring-settings/10k-white-gold-round-halo-engagement-ring/18590 , https://www.morinjewelers.com/ringsettings-diamonds , https://www.morinjewelers.com/return-policy , https://www.morinjewelers.com/pages/warranties , https://www.morinjewelers.com/pages/custom , https://www.morinjewelers.com/financing-options , https://www.morinjewelers.com/cart (lus le 24/11/2026 pour l'audit du 15/11).
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/morin-jewelers/ (hors dépôt).
