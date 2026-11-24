# Audit : Marquirette's Exquisite Jewelry, « Design Your Ring » (Montgomery, Alabama)

| | |
|---|---|
| Site | Marquirette's Exquisite Jewelry, Peppertree Shopping Center, Montgomery (AL) : https://www.marquirettes.com/ |
| Page de départ | https://www.marquirettes.com/design-your-ring/ |
| Date | 15/11/2026 (pages relues le 16/11 pour compléter) |
| Appareils | Chromium sans écran 1366 × 900 (en-US) ; émulation iPhone 13 (Playwright, fenêtre 390 × 664) |
| Statut | **partiel** : l'assistant en 4 étapes est vérifié bouton par bouton ; le **dessinateur 3D lui-même n'a pas été ouvert**, car son chargement passe par `jeweleros.com/api/`, interdit par le robots.txt de JewelerOS. Catalogue, panier et recherche de diamants non audités. |
| robots.txt | marquirettes.com : `ClaudeBot`, `GPTBot`, `Claude-User`… `Allow: /` ; groupe `*` : `Disallow: /account`, `/cart`, `/checkout`, `/jewelrybox`, `/newsletter`, `/search`, `/*?sort=`, `?count=`, `?item=`, `?price_0=`, `?price_1=`, `?material=`, `?gender=` (V, https://www.marquirettes.com/robots.txt). jeweleros.com : `Disallow: /api/` (V, https://www.jeweleros.com/robots.txt) |

Marques : **V** vérifié (page lue ou contrôle actionné, adresse indiquée) · **I** inféré · **S** supposé. Sans autre adresse, la source est la page de départ.

**Garde-fous appliqués.** Un filtre réseau du script a empêché toute requête vers `jeweleros.com/api/` (4 appels bloqués : configuration, journal d'erreurs, configuration du widget, création du dessin) et vers les chemins interdits de marquirettes.com. Le panier (`/cart/`), le compte et la recherche n'ont pas été ouverts (V : `robots.cjs` répond INTERDIT pour `/cart/`). Aucun formulaire envoyé, aucun compte créé.

## Parcours

Sur cette page, l'outil est un **assistant en 4 étapes** (« walkthrough ») plein écran, qui sert d'entrée au dessinateur 3D JewelerOS (V). Le texte de l'étape 1 le dit : « you'll be able to fully customize your design in our 3D Ring Designer ». Les étapes se chargent sans appel serveur interdit ; l'envoi final, lui, appelle `POST jeweleros.com/api/create/from-ring-config/` (V, appel intercepté et non transmis).

| Étape | Options | Effet observé |
|---|---|---|
| 1 sur 4 « Let's start designing your ring » | métal : Yellow Gold, White Gold, Rose Gold ; 9 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | le métal change la vignette de chaque style (fichiers `solitaire_yellow/white/rose.webp`) ; un clic sur un style passe à l'étape 2 (V) |
| 2 sur 4 « Choose your center stone » | bascule Natural / Lab Grown ; 10 cartes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, Decide later | la bascule ne change ni titre, ni sous-titre, ni cartes (V) ; un clic sur une forme passe à l'étape 3 |
| 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; Decide later | passe à l'étape 4 (V) ; sous-titre : le carat exact se règle ensuite dans le dessinateur |
| 4 sur 4 « When do you need your ring? » | 1–4 weeks, 1–3 months, 3–6 months, Not sure yet | ferme l'assistant et lance l'écran de chargement (V) ; l'étape suivante est bloquée par le garde-fou |

Après l'étape 4, l'écran affiche une barre de progression (`jos-loading`, spinner et texte) tant que l'appel de création n'aboutit pas ; la requête interdite n'étant pas envoyée, le chargement est resté sans fin, ce qui n'est **pas** un défaut du site (V pour l'écran, I pour la cause).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow Gold / White Gold / Rose Gold | bouton (3) | change les vignettes de l'étape 1 ; mémorisé dans le dessin (`metal: white` dans le corps de la requête) | aucun | OK (V) |
| Platine, titre 10/14/18 k | absent | pas de choix de titre ni de platine dans l'assistant | – | absent (V) |
| 9 cartes de style (étape 1) | cartes | passent à l'étape 2 ; le style apparaît dans l'historique du haut ; le style « Start from scratch » est marqué d'une classe propre (`center-vert`) | aucun | OK (V) |
| Natural / Lab Grown | bascule | `Lab Grown` devient actif ; la sélection survit aux retours en arrière ; envoyé comme `diamondType: lab` | aucun | OK (V) |
| 10 cartes de forme (étape 2) | cartes | passent à l'étape 3 ; « Decide later » accepté | aucun | OK (V) |
| 9 cartes de poids (étape 3) | cartes | passent à l'étape 4 ; valeurs 0,5 à 5 ct, « Decide later » | aucun | OK (V) |
| 4 cartes de délai (étape 4) | cartes | terminent l'assistant ; « 1 – 4 weeks » sert au suivi de la boutique (I) | aucun | OK jusqu'à l'envoi (V) |
| Back | bouton | revient d'une étape ; texte « Back » seulement à l'étape 1, flèche seule ensuite ; la sélection de la carte n'est pas marquée au retour | – | OK (V) |
| Historique en haut (Halo > Marquise > 1.5 carat) | puces | affichage seul ; un clic ne ramène pas à l'étape (aucun effet constaté) | – | non cliquable (V) |
| Skip | bouton | ferme l'assistant et lance la création avec les choix faits, à l'étape 4 comme avant (appel de création bloqué) | – | OK jusqu'à l'envoi (V) |
| Menu, logo, téléphone 334-270-0074 (`tel:`), Search, Cart, Login | liens d'en-tête | `/search/`, `/cart/`, `/account/login/` : **non ouverts** (interdits) ; `tel:3342700074` non lancé | – | non testés : robots.txt |
| Bridal, Diamonds, Jewelry, Gents Bands, Repair Menu, Forever Warranty, We Buy Gold & Silver, About, Contact | liens de menu | mènent à `/catalog/bridal-engagement/`, `/diamonds-why-us/`, `/catalog/fashion/`, `/lashbrook-ring-builder/`, `/repair-menu/`, `/warranty/`, `/services/gold-diamond-buying/`, `/company/about-us/`, `/contact-us/` | – | vérifiés : Bridal, Diamonds, Warranty, About, Contact ; les autres non ouverts |
| View Map / Location & Hours | liens | Google Maps ; `/company/locations/peppertree-shopping-center/` | – | non ouvert (carte) |
| Bandeau cookies : Accept All, Reject All, More Options | boutons | présents à l'ouverture | – | non actionnés |
| Newsletter : champ e-mail, JOIN | formulaire | aucun envoi (règle de l'audit) ; la page `/newsletter` est interdite | – | non testé |
| Facebook, Instagram, Terms, Privacy, Back to Top | liens de pied | adresses relevées ; Terms lue | – | Terms OK (V) |
| 3D Ring Designer (taille de doigt, gravure, griffes, pavage, zoom, vue 360°, enregistrement, partage) | dessinateur JewelerOS | **non ouvert** : chargement par `jeweleros.com/api/` interdit | – | non testé : robots.txt de jeweleros.com |
| Recherche de diamants naturels et de synthèse, filtres (taille, couleur, pureté, prix, certificat) | catalogue | menu « Natural Diamond Search » et « Lab Grown Diamond Search » vus sur la page 404 ; recherches `/search` interdites | – | non testé |
| Ajout au panier, panier | – | `/cart/` interdit | – | non testé : robots.txt |
| Chat, WhatsApp, rendez-vous en ligne, essayage à domicile, comparer | – | aucun de ces boutons dans l'assistant ni sur les pages lues (V pour l'absence sur ces pages) | – | absents |
| Formulaire de contact (prénom, nom, téléphone, e-mail, message, Submit) | formulaire | protégé par reCAPTCHA ; non rempli | – | non testé (règle) |

## Options disponibles

- **Métaux** (étape 1) : or jaune, or blanc, or rose (V). Pas de platine, pas de choix 10/14/18 k dans l'assistant.
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch (V).
- **Origine** : Natural, Lab Grown (V). Mot « Lab Grown » employé, pas « synthétique ».
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (V).
- **Carats** : 0,5 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 ; Decide later (V).
- **Délai souhaité** : 1–4 semaines, 1–3 mois, 3–6 mois, pas sûr (V).
- **Non vérifiable** (dessinateur fermé) : taille de doigt, gravure, griffes, corps de bague, modes de vue, partage, enregistrement.
- Menus (V, page 404 du site) : Engagement Rings, Wedding Bands, Custom Bridal, DeBeers Forevermark Bridal, Natural Diamond Search, Lab Grown Diamond Search, Custom Jewelry Designs, Financing, Gold & Diamond Buying, Jewelry Appraisals.

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant ni sur la page « Custom Engagement Rings » (V, https://www.marquirettes.com/custom-engagement-rings/). Formule : « ready for you in just a couple of weeks at a great price, fully customized around your center stone ». Le catalogue affiche « 10,494 Items » et un tri par prix (V, https://www.marquirettes.com/catalog/bridal-engagement/), mais n'a pas été exploré.
- **Délai annoncé** : « in just a couple of weeks » (V, même page) ; le client choisit un délai souhaité à l'étape 4, sans engagement affiché.
- **Retours** : aucune politique de retour trouvée sur les pages lues (V pour l'absence sur Terms, Warranty, Custom Rings ; la page « Terms and Conditions » ne traite que des SMS, datée du 13/07/2026). Sur-mesure : rien de dit.
- **Forever Warranty** (V, https://www.marquirettes.com/warranty/) : payante, au choix à l'achat, selon la valeur estimée (675 $ au-delà de 9 500 $ ; 475 $ de 5 000 à 9 500 $ ; 350 $ de 2 000 à 4 999 $ ; 150 $ sous 2 000 $ ; tarifs plus élevés pour un bijou acheté ailleurs). Couvre réparations, remise à taille, nettoyage, polissage, rhodiage, évaluation d'assurance initiale, resserrage des pierres, remplacement d'une pierre perdue jusqu'à 1/4 ct. Inspection tous les 6 mois exigée ; nettoyages et inspections gratuits ; 25 $ aller-retour pour l'envoi d'étiquettes prépayées.
- **Certificats** : non évoqués sur les pages lues ; GIA/IGI non vérifié (I : à demander en boutique, le choix de la pierre se fait au magasin).
- **Devise et langue** : dollar américain et anglais seulement (V).
- **Financement** : lien « Financing » dans le menu (V sur la page 404) ; page non ouverte.

## Confiance et service

- **Parcours en boutique, pas en ligne** : trois temps affichés, « Design your ring online in stunning 3D », « Pick out your center stone in our Montgomery, AL showroom », « Finalize & order your ring » (V, page Custom Engagement Rings). La pierre se choisit en magasin.
- **Argument d'origine** : un spécialiste « has sorted and purchased diamonds since 1965 from the major trading bourses of Antwerp and Ramat Gan, earned the coveted title of Diamantaire in 1994 » (V, https://www.marquirettes.com/custom-engagement-rings/ ; détails https://www.marquirettes.com/company/about-us/ : « specialized in purchasing diamonds from the bourses in Antwerpen and Ramat Gan »). **Même argument que JR Diamond (Ramat Gan), déjà utilisé par un joaillier local.**
- **Avis** : deux avis Google recopiés dans la page (nom, texte : « I am in love with my custom engagement ring… ») ; aucun module d'avis dynamique (V). Non recoupés avec Google (I).
- **Service** : téléphone ou SMS 334-270-0074, horaires 10 h–17 h 30 du lundi au vendredi, 10 h–17 h le samedi, 12 h–17 h le dimanche (V, https://www.marquirettes.com/contact-us/). Formulaire de contact avec reCAPTCHA. Programme de SMS : consentement coché dans l'outil, suivi des « saved ring designs », 3 messages par mois au plus (V, https://www.marquirettes.com/terms-and-conditions/). Cela indique que le dessinateur enregistre un dessin contre un numéro (I).
- **Ethique** : page « Diamonds – Why Us » : approvisionnement responsable, Kimberley, OECD, Responsible Jewellery Council (V, https://www.marquirettes.com/diamonds-why-us/).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande sur les pages lues. L'histoire de la maison dit que la fabrication est dirigée par Benjy Pope (V, page About), sans image.

## Points forts à retenir pour JR Diamond

1. **Entrée en 4 questions, sans prix ni compte.** Style, forme, carat, délai, avec « Decide later » sur la forme et le carat : on peut avancer sans savoir. Preuve : 9 + 10 + 9 + 4 cartes, toutes actionnées (V).
2. **Origine naturel / synthétique choisie dès l'étape 2**, avant la forme, et conservée au retour en arrière. Preuve : bascule Natural / Lab Grown, `diamondType: lab` dans le corps de la requête interceptée (V).
3. **Vignettes qui changent avec le métal** dès l'étape 1 : on voit le bijou dans la couleur choisie avant d'ouvrir la 3D. Preuve : `solitaire_yellow`, `_white`, `_rose` (V).
4. **Chargement rapide de l'entrée** : options visibles en 2,1 s sur ordinateur et sur iPhone émulé (V, mesure unique).
5. **Fil d'Ariane en haut** (Halo > Marquise > 1.5 carat) : l'état des choix se lit à tout moment (V).
6. **Garantie à vie lisible, avec grille de prix** : c'est le modèle d'une garantie chiffrée, utile pour l'après-vente de JR Diamond (V, page Warranty).

## Défauts observés

1. **Dessinateur 3D non accessible depuis la page** sans passer par une API interdite aux robots ; pour un visiteur humain, la fin de l'assistant dépend d'un appel réseau unique : en cas d'échec, l'écran de chargement n'a pas de message d'erreur ni de bouton de reprise (V pour l'écran de chargement sans fin ; I pour l'absence de reprise).
2. **Aucun prix, aucune estimation**, même fourchette, malgré le choix du carat et de l'origine (V).
3. **Pas de platine, pas de titre d'or** dans l'assistant ; métal et titre sont inconnus avant la 3D (V).
4. **La bascule Natural / Lab Grown ne change rien à l'écran** : mêmes cartes, mêmes textes ; l'effet n'apparaît que dans la requête (V).
5. **L'historique du haut n'est pas cliquable** : impossible de revenir à l'étape 1 sans plusieurs « Back » ; le retour ne marque pas la carte déjà choisie (V).
6. **Pages 404 pour `/about/` et `/contact/`** ; les bonnes adresses sont `/company/about-us/` et `/contact-us/` (V).
7. **Catalogue précédé d'une page « Verifying… »** : `/catalog/bridal-engagement/` redirige d'abord vers `/verify.html?next=…` et n'arrive qu'après 12,5 s sur la page finale (V, mesure unique, ordinateur) ; vers un robot, ce contrôle ressemble à un blocage. Rien n'a été fait pour le contourner.
8. **Terms and Conditions limités aux SMS** : ni conditions de vente, ni retours, ni délais de sur-mesure (V).
9. **Erreur JavaScript `$ is not defined`** à la fin de l'assistant sur ordinateur (V, une occurrence ; sans effet constaté).
10. **Boutons sans libellé** dans la barre de l'assistant (flèche seule) et dans l'en-tête, relevés comme tels dans la liste des contrôles (V ; accessibilité I).

## Limites de l'audit

- Le dessinateur 3D, ses vues (360°, zoom, main, RA), la taille de doigt, la gravure, les griffes, le pavage, l'enregistrement et le partage n'ont **pas** été vus : l'appel `jeweleros.com/api/create/from-ring-config/` est interdit par le robots.txt de JewelerOS et n'a pas été envoyé. Ce rapport ne dit rien de leur qualité ; `INVENTAIRE.md` du dossier les décrit comme un modèle générique commun à d'autres joailliers (I).
- Catalogue de 10 494 articles, fiches produit, recherche de diamants, filtres, panier, frais de livraison, moyens de paiement, retours : non audités (panier et recherche interdits par robots.txt ; catalogue non exploré par choix de périmètre).
- Délais de chargement : une mesure par appareil, centre de données, proxy ; iPhone émulé dans Chromium, pas Safari.
- Les avis et le suivi de commande ne sont pas vérifiés hors du site.
- Le contrôle « Verifying… » du catalogue s'est résolu seul dans le navigateur, sans action de ma part ; je n'ai rien lu au-delà de l'en-tête de la page.

## Sources

Pages ouvertes les 15 et 16/11/2026, toutes AUTORISÉES par `robots.cjs` : https://www.marquirettes.com/robots.txt ; https://www.marquirettes.com/design-your-ring/ (ordinateur et iPhone) ; https://www.marquirettes.com/custom-engagement-rings/ ; https://www.marquirettes.com/warranty/ ; https://www.marquirettes.com/diamonds-why-us/ ; https://www.marquirettes.com/company/about-us/ ; https://www.marquirettes.com/contact-us/ ; https://www.marquirettes.com/terms-and-conditions/ ; https://www.marquirettes.com/catalog/bridal-engagement/ (en-tête seulement) ; https://www.marquirettes.com/about/ et /contact/ (404). Robots.txt tiers : https://www.jeweleros.com/robots.txt.

Captures et scripts (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/marquirettes/`.
