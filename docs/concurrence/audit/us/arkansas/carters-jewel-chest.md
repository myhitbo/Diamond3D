# Audit : Carter's Jewel Chest (Mountain Home, Arkansas)

- **Site** : Carter's Jewel Chest, https://cartersjewelchest.com/ (page de départ : https://cartersjewelchest.com/pages/custom-ring-builder)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le questionnaire d'orientation en 4 étapes fonctionne ; le « 3D Ring Designer » qui doit suivre ne s'est **pas chargé** (erreur « Something went wrong Try again »). Pas de blocage anti-robot : robots.txt autorise tout (`Allow: /`).
- Convention : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Choix du métal (pastilles au-dessus des tuiles) | Or jaune, or blanc, or rose [V] |
| 1/4 Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » [V] |
| 2/4 Pierre centrale | Naturel / Lab Grown (bascule) ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] |
| 3/4 Taille de la pierre | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, « Decide later » [V] |
| 4/4 Délai souhaité | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| Après l'étape 4 | Chargement du « 3D Ring Designer » : **échec** (écran gris, roue, « Something went wrong Try again », barre de progression figée, 15 s observées) [V, 3 essais] |

Les étapes viennent d'un module tiers (JewelerOS, jeweleros.com) intégré dans la page. Chaque étape annonce : « vous pourrez tout personnaliser dans notre 3D Ring Designer » [V, texte de la page].

## Contrôles vérifiés

Page de départ (43 contrôles listés sur ordinateur, 30 sur iPhone ; ci-dessous le contenu utile, la navigation du site regroupée) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose (`title`) | bouton | Choisit le métal ; la pastille « Yellow Gold » est active par défaut. Le changement de teinte des icônes n'a pas été contrôlé visuellement après clic | aucun affiché | Clic accepté [V] ; effet visuel non confirmé |
| Tuiles de style (8) | bouton | Passe à l'étape 2 ; icône de chaque style en dessin filaire | aucun | OK [V] (testé : Solitaire, Three Stone) |
| « Start from scratch » | bouton | Mène à l'étape 2 (choix de la pierre) comme un style | aucun | OK [V] |
| Natural / Lab Grown | bascule | Change l'état actif (texte « Lab » dans la page) ; les 9 formes restent identiques | aucun | OK [V] |
| Formes (9) | bouton | Passe à l'étape 3 (testé : Marquise, Round) | aucun | OK [V] |
| Tailles de carat (8) | bouton | Passe à l'étape 4 (testé : 1 ct) | aucun | OK [V] |
| « Decide later » / « Not sure yet » | bouton | Présents (étapes 2 et 4) ; « Not sure yet » testé : lance le chargement du designer | aucun | Étape 4 : mène à l'**erreur** [V] |
| Back / Skip (`jos-back`, `jos-skip`) | bouton | Présents dans le DOM ; **un clic automatisé a échoué** (non visibles ou masqués aux étapes testées) | — | Non confirmé [V] |
| Fil d'historique (« Solitaire › Marquise ») | texte | Rappelle les choix faits à l'étape 3 | — | OK [V] |
| Bouton « Text us » (Podium) | bouton | Ouvre le chat SMS ; non ouvert (règle) | — | Présent [V] |
| Widget d'accessibilité, « Wishlist » (cœur) | boutons | Panneau d'accessibilité / liste de souhaits `/a/wishlist-hero/wishlist` | — | Présents ; non testés |
| BOOK AN APPOINTMENT | lien | Vers cartersjewelchest.setmore.com (réservation externe) | — | Non suivi |
| Call Store | lien `tel:` | 870-425-7070 | — | Présent [V] |
| Menus FINE JEWELRY, ESTATE JEWELRY, ENGAGEMENT JEWELRY, GIFT GUIDES | boutons à sous-menu | Navigation du site | — | Non ouverts |
| SEARCH, LOG IN, CART | boutons / liens | Recherche, compte, tiroir panier | — | CART : page `/cart` ouverte, voir ci-dessous ; recherche et compte non testés |
| Abonnement e-mail (SUBSCRIBE) | formulaire | Newsletter | — | Non rempli (règle) |
| Pied : Privacy, Terms, réseaux sociaux, « Powered by Shopify » | liens | Pages légales, sorties | — | Non suivis |

Panier : https://cartersjewelchest.com/cart → « Shopping cart | Continue shopping | Your cart is empty ». Rien à ajouter depuis le configurateur, donc aucun récapitulatif, aucun frais, aucun moyen de paiement n'a pu être vu ; seuls les pictos du pied de page (Amex, Apple Pay, Discover, Google Pay, Mastercard, Shop Pay, Visa) donnent les moyens acceptés [V].

## Options disponibles

- **Métaux (pastilles)** : or jaune, or blanc, or rose. Pas de platine, pas de titre 14 k / 18 k à ce stade [V].
- **Styles** : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, trois pierres, départ de zéro [V].
- **Origine** : naturel ou « Lab Grown » (bascule) [V].
- **Formes** : 9 (round, oval, cushion, emerald, princess, asscher, marquise, pear, radiant) [V].
- **Carats** : 0,5 à 5 (8 valeurs) ; le carat exact se règle « dans le designer » [V, texte].
- **Délai souhaité** (question) : 4 plages [V].
- **Non atteint** (designer en échec) : corps de bague, griffes, pavage, taille de doigt, gravure, filtres de diamants, vues photo / 360° / 3D / AR / zoom, prix, ajout au panier [non testés : bloqués par l'erreur].
- **Services du site** : rendez-vous (Setmore), téléphone, SMS (« Text us »), carte de crédit du magasin (`/pages/store-card`), réparation et mise à taille, gravure, appraisals et assurance [V, menus].

## Prix, délais, retours, garanties

- **Prix** : **aucun prix affiché dans le questionnaire** ; le prix éventuel serait dans le designer, non chargé [V]. Collection « Engagement Rings » (hors périmètre, lecture HTML) : prix de bagues finies par exemple 3 999 $ et 3 799 $ [V : /collections/engagement-rings].
- **Délai** : question posée au client, aucune promesse de délai lue sur ces pages [V].
- **Livraison** : bandeau « FREE SHIPPING FOR ORDERS ABOVE $300 », « FAST DELIVERY », « EASY RETURNS » [V] ; page `/policies/shipping-policy` vide à la lecture [V].
- **Retours** : 30 jours après réception, article non porté, emballage d'origine, remboursement sous 10 jours ouvrés ; demande par e-mail ; échange = retour puis nouvel achat [V : /policies/refund-policy]. **Aucune exception « sur mesure » écrite** sur cette page [V] ; pas vérifié si elle s'applique à un bijou conçu dans le designer [S].
- **Garantie / soin** : « Carter's Lifetime Care Plan » (achat unique : mise à taille, repolissage, réparation de griffes, etc.) ; appraisals à partir de 125 $ [V : /pages/insurance-appraisals]. Durée et conditions de garantie non lues.
- **Certificats** : non mentionnés dans le questionnaire [V].
- **Libellé du synthétique** : « Lab Grown » [V].
- **Langue / devise** : anglais, dollar [V].

## Confiance et service

- Magasin familial « depuis plus de 50 ans » ; adresse Hwy 62 East, Suite 1, Mountain Home AR 72653 ; horaires mardi-vendredi 10-17 h, samedi 10-16 h, fermé dimanche-lundi [V].
- Page équipe nommée (fondatrice, propriétaire gemmologue, maître bijoutier « Shirley » à l'établi, etc.) [V : /pages/meet-our-team] : preuve de présence humaine, pas de photos de fabrication d'une commande.
- Rendez-vous en ligne, téléphone, SMS, comptes avec liste de souhaits [V].
- Avis clients : aucun avis affiché sur la page de départ [V].
- Suivi de commande : non vu.

## Points forts à retenir pour JR Diamond

1. **Entonnoir guidé en 4 étapes avant le configurateur** (style → forme → carat → délai), chaque écran avec un sous-titre pédagogique (« The star of the show », « Elongates the finger »). Preuve : textes lus à chaque étape [V].
2. **Tuiles à icône filaire par style et par forme** : lisibles sans connaissance de joaillerie [V, capture].
3. **Question du délai posée dès l'entrée** (« When do you need your ring ? ») : sert au tri des commandes pour l'atelier [V].
4. **Bascule naturel / Lab Grown dès l'étape 2** [V].
5. **Retour de 30 jours** et page équipe nominative comme réassurance [V].
6. Questionnaire rapide : tuiles visibles en ~2,0-2,3 s (ordinateur et iPhone) [V, mesure unique].

## Défauts observés

- **Le designer 3D ne s'ouvre pas** (« Something went wrong Try again » après la 4e étape ; 3 essais, 15 s d'attente). Console : le module appelle `https://www.jeweleros.com/api/config/…` depuis le site, bloqué par la politique CORS (« Error fetching jeweler configuration »). La cause peut venir de notre environnement de test : **non confirmée**, à recontrôler sur un vrai navigateur [V pour l'erreur, S pour la cause].
- Aucun prix avant l'entrée dans le designer [V].
- Choix du métal limité à 3 pastilles, sans titre (14/18 k) ni platine à cette étape [V].
- Boutons Back / Skip présents mais non cliquables en test automatisé aux étapes visitées [V, non expliqué].
- Page de politique d'expédition vide [V].
- Une demande de formulaire de règlement est signalée dans la console (iframe `shop.app` refusée, 403) : sans effet visible [V].

## Limites de l'audit

- Le cœur du configurateur n'a pas été vu : rendu 3D, vues, prix, options fines, ajout au panier, récapitulatif, frais, moyens de paiement : **non testés** faute de chargement.
- Panier testé vide uniquement ; page « Engagement Rings » lue en HTML, pas parcourue.
- Menus, recherche, compte, Setmore, wishlist, chat non ouverts (règle de lecture seule ou hors parcours).
- Mesures de temps uniques (Playwright) ; le « visuel principal » est ici la grille de tuiles, pas une 3D.
- L'effet des pastilles de métal sur les icônes n'a pas été vérifié par comparaison d'images.

## Sources

- https://cartersjewelchest.com/pages/custom-ring-builder (15/11/2026)
- https://cartersjewelchest.com/cart
- https://cartersjewelchest.com/policies/refund-policy
- https://cartersjewelchest.com/policies/shipping-policy
- https://cartersjewelchest.com/pages/meet-our-team
- https://cartersjewelchest.com/pages/insurance-appraisals
- https://cartersjewelchest.com/collections/engagement-rings
- Module intégré : https://www.jeweleros.com/ (scripts et configuration chargés par la page ; robots.txt AUTORISÉ)
- robots.txt contrôlé par `robots.cjs` : AUTORISÉ pour toutes les adresses de cartersjewelchest.com ouvertes.
