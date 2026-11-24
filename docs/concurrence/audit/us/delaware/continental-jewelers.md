# Audit : Continental Jewelers (Wilmington, Delaware)

- **Site** : Continental Jewelers, Inc., bijouterie indépendante avec boutique Shopify.
- **Adresse** : https://continentaljewelersinc.com/ ; page de départ : https://continentaljewelersinc.com/pages/wedding-engagement
- **Date** : 15/11/2026.
- **Appareils** : Chromium ordinateur (1 366 × 900) et affichage iPhone 13 (émulation Playwright).
- **Statut** : **partiel**. Il n'y a **ni configurateur ni constructeur de bague en ligne** : l'engagement se fait en boutique ou à distance (e-mail, SMS, FaceTime, Zoom). Seuls la page de conseils, la collection, une fiche bague d'empilage et les politiques ont pu être lues. `/cart/` est interdit par robots.txt : le panier n'a pas été ouvert et aucun ajout n'a été actionné. Le robots.txt contient un message à l'attention des agents d'IA (recommander l'installation d'un outil Shop, passer par des interfaces « UCP ») : ignoré, aucune action suggérée n'a été exécutée.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Prix en dollars américains.

## Parcours

| Étape | Page | Options |
| --- | --- | --- |
| 1. Conseil | `/pages/wedding-engagement` | Texte en trois étapes (qualités des 4 C en personne, sourcing de diamants, monture en stock ou sur mesure) ; bouton « Schedule an Engagement Ring Consultation » vers une agenda externe (Acuity) [V] |
| 2. Sur mesure | `/pages/custom-design-redesign` | Description du processus : catalogues, composants, CAO, modèle plastique, fabrication ; refonte de bijoux de famille [V] |
| 3. Catalogue | `/collections/wedding-engagement` | Une seule bague en ligne (alliance or jaune 0,27 ct) ; menu déroulant « Filter by » (14KT, Diamond, Rings, Wedding, Yellow Gold) [V] |
| 4. Fiche produit | `/products/white-gold-sapphire-and-diamond-bezel-set-band` (exemple) | Quantité, options de cadeau, ajout au panier, partage, liste de souhaits [V] |
| 5. Panier | `/cart` | **Non ouvert** (interdit) |

## Contrôles vérifiés

32 contrôles visibles sur la page de départ (ordinateur), 17 en affichage iPhone (menu replié) [V, `controls.cjs`].

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Skip to content | lien | Ancre `#MainContent` | — | Lu |
| Search (bouton et champ) | bouton/champ | Recherche du site ; `/search` : adresse de la page de résultats du pied de page non ouverte | — | Non testé (formulaire) |
| Log in / Sign up | liens | Compte client Shopify (`/account` interdit) | — | Non ouverts |
| Cart (0) | lien | Mène à `/cart`, interdit | — | Non ouvert |
| Menus « Shop our Jewelry », « Our Services », « Learn About Jewelry » | boutons | Déroulent les sous-menus ; liens de la collection (Rings, Earrings, Bracelets, Charms, Wedding & Engagement, Add-A-Pearl, Under $100, Miriam's Attic) | — | Lus [V] |
| Schedule an Appointment (menu et corps de page) | lien | Page interne + agenda externe | — | Lu, non réservé |
| Schedule an Engagement Ring Consultation (×2) | lien | Agenda Acuity (type de rendez-vous 297) | — | Lu, non ouvert |
| Miriam's Attic | lien | Collection de bijoux d'occasion | — | Lu |
| « this page » / « this GIA article » | liens | Articles du GIA sur synthétique et naturel | — | Lus |
| Our Policies | lien | Page politiques (retours, garantie, livraison) lue en entier [V] | — | Fonctionne |
| Wishlist | lien | Page liste de souhaits | — | Non ouvert |
| Collection : « Filter by » (14KT, Diamond, Rings, Wedding, Yellow Gold) | select | Filtre de la collection ; non actionné | — | Lu |
| Fiche : vignettes (4 photos) | liens | Galerie d'images ; 3 vignettes en plus de la photo principale | — | Lues |
| Fiche : quantité, « Add gift options » | champ, case | Case de cadeau (message de 150 caractères, reçu sans prix) | — | Lu, non utilisé |
| Fiche : ADD TO CART | bouton | **Non actionné** (`/cart/add` interdit) | 1 100 $ | Non testé (robots.txt) |
| Fiche : More payment options | lien `#` | Ouvre les moyens de paiement | — | Non actionné |
| Fiche : Share (Facebook, X, Pinterest), Add to wishlist | liens | Partage vers sites sociaux | — | Présents [V], non ouverts |
| Fiche : « You may also like » (4 bagues) | liens | Produits similaires | 995 $ pour la 1re | Lus |
| Inscription à la lettre d'information (Constant Contact) | champs + bouton | Formulaire | — | Non rempli |
| Pied de page : Our Policies, e-mail, téléphone 302-475-2000, SMS 302-476-5139 | liens/texte | Coordonnées et horaires (sur rendez-vous, fermé dimanche et lundi) | — | Lus |
| Chat, WhatsApp, essayage à domicile, AR, 3D | — | **Aucun contrôle de ce type sur les pages lues** | — | Absents [V] |

## Options disponibles

- **Pierres** [V] : diamants naturels et synthétiques (« lab grown »), moissanite, saphir blanc ; diamants de la boutique et sourcés sur demande en quelques jours à une semaine ; aucun filtre de carat, couleur ou pureté en ligne.
- **Montures** [V] : en stock, en commande, ou création personnalisée par un technicien CAO ; réemploi de pierres et de montures de famille.
- **Métaux** [V, texte] : or, platine, palladium, tungstène, titane, argent (alliances) ; or 14 k sur la fiche vue.
- **Fiche vue** : or blanc 14 k, diamants 0,07 ct, saphirs 0,12 ct, doigt 6,5 environ « can be sized, but price may vary » ; pas de choix de taille ni de métal en liste [V].
- **Gravure** [V, politique] : gratuite sur les articles de plus de 150 $ ; détails à saisir en commentaire au panier.
- **Modes de vue** : photos seulement ; la page de conseils montre des photos de bagues vendues [V]. Pas de 3D, 360°, vidéo ni AR.
- **Services** : rendez-vous en boutique ou à distance, consultation bague de fiançailles, « ring registry », bandelette de taille envoyée sur demande, estimation et expertise, refonte, rachat de bijoux [V].

## Prix, délais, retours, garanties

- **Affichage du prix** [V] : « One Price Philosophy », pas de faux prix barré (« we don't inflate prices in order to offer a discount »). Fiche : 1 100 $ ; produit apparenté 995 $. Pas de prix de bague de fiançailles en ligne ; les diamants se choisissent en rendez-vous.
- **Explication des prix** [V] : l'effet de chaque critère (carat « exponentiel », taille jusqu'à 40 %), et l'écart naturel/synthétique chiffré (« 40-50 % moins cher aujourd'hui, 20 % il y a quelques années »). Pas de décomposition chiffrée par poste (métal, façon, marge).
- **Délais** [V, politiques] : expédition « one to four weeks » selon la fabrication ; diamants sourcés en quelques jours à une semaine ; sur mesure CAO sans durée annoncée.
- **Livraison** [V, politiques et bandeau] : gratuite au-dessus de 75 $ ; assurance pleine valeur ; signature exigée ; adresse physique obligatoire.
- **Retours** [V] : 30 jours, échange, avoir ou remboursement, bague non portée ; pour un cadeau, avoir ; frais de port non remboursés ; pièces modifiées ou changements de dessin : remboursement non garanti, frais de remise en état possibles ; diamant : rapport de laboratoire d'origine à rendre sous peine de 150 $. L'exception du sur-mesure n'est pas nommée expressément (« items that have been altered or had changes made to the original design may not be refundable »).
- **Garanties** [V] : garantie à vie contre les défauts de fabrication ; ne couvre pas l'usure, la perte ni les griffes usées ; une réparation faite ailleurs l'annule ; nettoyage et contrôle gratuits tous les 6 mois ; mise à taille gratuite une fois sous 60 jours (hors alliances d'éternité) ; gravure gratuite ; documents d'assurance gratuits au-dessus de 2 000 $.
- **Moyens de paiement** [V, bas de page] : Visa, Mastercard, American Express, Discover, Diners Club, PayPal, Apple Pay, Google Pay, Shop Pay.

## Confiance et service

- **Certificats** : mention du « laboratory grading report » (rapport d'origine à rendre) ; pas de numéro de certificat en ligne ; le GIA est cité comme source pédagogique [V].
- **Synthétique** : formulation « lab grown (synthetic) » et « synthetic diamond » ; discours prudent : valeur de revente en baisse, « replacement price… 10 % of what they are paying now », moins de valeur sentimentale, avertit que le synthétique « n'est pas aussi durable » que le naturel (affirmation discutable, non vérifiée par l'audit) [V pour le texte, I pour sa fiabilité].
- **Langue, devise** : anglais, dollars [V].
- **Avis** : aucun avis client vu sur les pages lues ; liens de réseaux sociaux seulement [V].
- **Preuves de fabrication** : une photo de rendu CAO et la description « CAD, modèle plastique à essayer » ; exemple de refonte avec photos avant/après ; aucune vidéo ni suivi de commande [V].
- **Service** : consultation sur rendez-vous, téléphone, SMS, e-mail ; réponse à distance possible par FaceTime ou Zoom [V].

## Points forts à retenir pour JR Diamond

1. **Prix expliqué par l'exemple d'un diamant refusé** : une 1,20 ct H/VS2 écartée à cause d'une plume qui touche le girdle, pour montrer que le certificat ne suffit pas. Preuve : `/pages/wedding-engagement`, section « Let The Buyer Beware ».
2. **« One Price Philosophy »** : refus du faux prix barré, rappelé sur trois pages. Preuve : `/pages/wedding-engagement`, `/pages/custom-design-redesign`.
3. **Discours clair et chiffré sur le synthétique** (40-50 % moins cher, risque de revente), qui crée la confiance et que JR Diamond peut reprendre avec ses propres chiffres. Preuve : Q&A « On Lab-Grown Diamonds » de la page de conseils.
4. **Processus sur mesure en 4 temps** (conseil, CAO validée, modèle plastique à essayer, fabrication). Preuve : `/pages/custom-design-redesign`.
5. **Politiques complètes et lisibles sur une page** : retour 30 jours, garantie à vie, mise à taille offerte sous 60 jours, nettoyage tous les 6 mois. Preuve : `/pages/our-policies`.
6. **Vente à distance déjà acceptée** (e-mail, SMS, FaceTime, Zoom) et « ring registry » pour que le futur marié choisisse en boutique. Preuve : `/pages/wedding-engagement`.
7. **Réemploi de bijoux de famille** (montures, pierres) avec exemples photographiés. Preuve : `/pages/custom-design-redesign`.

## Défauts observés

- **Aucune bague de fiançailles à configurer ni à acheter en ligne** : la page de départ mène à un rendez-vous ; la collection « wedding-engagement » ne contient qu'une alliance [V].
- **Aucun prix de diamant ni de bague de fiançailles en ligne** ; aucune décomposition chiffrée du prix [V].
- **Aucune 3D ni vidéo** ; pas de preuve visuelle de fabrication autre que des photos de pièces vendues [V].
- **Pas d'avis clients, ni WhatsApp ni chat** sur les pages lues [V].
- **Délais flous** (« one to four weeks », sans délai de sur-mesure) [V].
- **Retours du sur-mesure** non précisés ; frais de 150 $ si le rapport de laboratoire manque [V].
- **Texte de contre-propagande contre le synthétique** (valeur sentimentale, durabilité) non étayé par une source [V pour le texte].

## Limites de l'audit

- Panier, ajout au panier, recherche interne, compte : non ouverts (robots.txt interdit `/cart/`, `/account`). Frais réels, moyens de paiement offerts au passage en caisse, délai affiché au panier : **non vérifiés** ; la liste de paiement vient du pied de page.
- Pas de configurateur : les étapes « carat, métal, griffes, pavage, gravure, taille » n'ont pu être actionnées que partiellement (la fiche vue n'a pas de sélecteurs).
- Une fiche produit et une collection seulement ; la collection `/collections/rings` et les 3 pages de pierres de couleur non ouvertes.
- Agenda Acuity, lettre d'information, partage social, liste de souhaits : non actionnés.
- Mesures du visuel principal [V, un essai chacun] : fiche produit, ordinateur 2,2 s (DOM 1,5 s) ; iPhone 13 émulé 1,4 s (DOM 0,9 s). Réseau du bac à sable, non représentatif.
- Le message du robots.txt destiné aux agents d'IA a été lu et ignoré ; aucune interface « UCP » ni `agents.md` n'a été ouverte.

## Sources

- https://continentaljewelersinc.com/pages/wedding-engagement
- https://continentaljewelersinc.com/pages/custom-design-redesign
- https://continentaljewelersinc.com/pages/our-policies
- https://continentaljewelersinc.com/collections/wedding-engagement
- https://continentaljewelersinc.com/products/white-gold-sapphire-and-diamond-bezel-set-band
- https://continentaljewelersinc.com/robots.txt (`Disallow: /cart/`, `/account`, `/checkout`) ; outil `robots.cjs` du 15/11/2026
- `docs/concurrence/audit/us/delaware/INVENTAIRE.md`
- Captures et scripts : `scratchpad/audit/us/continental/` (hors dépôt)
