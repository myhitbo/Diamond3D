# Audit : Luther's Diamonds (Atlanta, Géorgie)

- **Site** : Luther's Diamonds, https://luthersdiamonds.com/. Page de départ : https://luthersdiamonds.com/collections/lab-diamond-engagement-rings (le site n'a pas de constructeur : le « configurateur » est la fiche produit, ici https://luthersdiamonds.com/products/the-gardenia-green).
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900 (parcours complet), affichage iPhone 13 (chargement, capture, ajout au panier, panier).
- **Statut** : **complet** (collection, une fiche, panier, pages de politique). Pas de paiement ni de compte : le parcours s'arrête à la page du panier.
- Repères : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en dollars, relevés le 15/11/2026. robots.txt : `Allow: /`, y compris `/cart` et `/products/…` [V]. Le fichier contient aussi des consignes adressées aux « agents » (utiliser des interfaces UCP/MCP, installer un « SKILL.md » externe) : non suivies, ce ne sont pas des instructions de l'étude [V].
- Moteur : Shopify. Le panier d'un visiteur anonyme a été créé par l'ajout d'une bague (aucune donnée saisie).

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Collection | 34 liens bague ; 10 filtres de forme et de style en boutons (voir plus bas) ; séries « Lotus », « Garden », « Carved & Vintage », « Color Diamonds », « Three Stone » ; 3 « Signature settings » (Jardin, Fleur, Dragon) ; lien « START A CUSTOM RING » [V] | /collections/lab-diamond-engagement-rings |
| 2. Fiche bague | série (5 modèles), matériau (4), carat (5), accents des feuilles (4), pierre de naissance (13) ×2, gravure, taille (42 valeurs) [V] | /products/the-gardenia-green |
| 3. Ajout au panier | bouton « ADD TO CART » ; panneau latéral puis page /cart [V] | idem, /cart |
| 4. Panier | quantité, retirer, « CHECK OUT » ; paiement non ouvert [V] | /cart |
| Voie sur mesure | page « One of one » : 6 étapes, 10 % d'acompte, devis puis CAO [V, lue] | /pages/customized™-by-luthers-diamonds |

## Contrôles vérifiés

Page de départ : 87 contrôles sur ordinateur (controls.cjs). Fiche produit : environ 487 éléments interactifs comptés en affichage iPhone (compte brut, tailles du guide et options comprises) [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre Oval / Marquise / Pear | boutons | ajoute `?shape=oval` etc. à l'adresse ; liste de 17, 18, 8 bagues ; second clic annule | aucun | fonctionnent [V] |
| Filtre Emerald / Cushion / Round / Radiant | boutons (ligne défilante) | `?shape=…` ; 8, 9, 11, 9 bagues | aucun | fonctionnent [V] (hors écran sans défilement : un clic standard échoue, via script ils répondent) |
| Filtre Hidden halo / Diamond band / Three stone | boutons | 12, 8, 12 bagues ; l'adresse ne change pas | aucun | fonctionnent [V] |
| Cartes bague (34) | liens | ouvrent la fiche ; badge « Also in marquise / pear » | « From $… » | présents [V], une fiche ouverte |
| Matériau : 14K Rose / White / Yellow Gold | boutons | `?variant=…` ; titre « MATERIAL — … » | identique ($1 500) | fonctionnent [V] ; la photo principale ne change pas (alt « rose gold » conservé) [V pour la 1re image] |
| Matériau : Platinum 950 | bouton | variante ; l'image principale devient « in platinum » | +300 $ ($1 800 pour 1 ct) | fonctionne [V] |
| Carat : 1 / 1.5 / 2 / 2.5 / 3 ct | boutons | texte « 1.5 ct center stone · ≈ 11.4 × 5.7 mm face-up » ; 2 ct 12,6×6,3 ; 2,5 ct 13,6×6,8 ; 3 ct 14,4×7,2 | 1 500 / 2 000 / 2 500 / 3 000 / 3 400 $ (14 k rose) | fonctionnent [V] ; image principale inchangée |
| Accents des feuilles : All emerald / Diamond | boutons | « Diamond » bascule vers la fiche « The Gardenia » (autre produit, adresse `?variant=…`) | +50 $ ($1 550) | fonctionnent [V] |
| Accents : Sapphire | bouton | non trouvé par texte exact | n/a | non confirmé [V, échec du test] |
| Votre pierre de naissance / celle du partenaire | listes | 13 valeurs : None + 12 mois (janvier Grenat à décembre Turquoise) | non testé | présentes [V], non actionnées |
| Gravure | champ | « Up to 9 characters, spaces included » ; gravure gratuite, police ou placement sur mesure 75 $ [V, texte FAQ] | 0 $ | présent [V], non saisi |
| Taille de bague | liste | 42 options : « Select your size », « Not sure yet – help me size », 3,25 à 13 par quart | aucun | présente [V] |
| ADD TO CART sans taille | bouton | le texte « Select your size » reste affiché ; **le panier contient pourtant 2 lignes**, l'une sans taille [V, voir défauts] | n/a | fonctionne, validation douteuse |
| ADD TO CART avec « Not sure… » | bouton | ouvre le panneau latéral « Cart » avec la ligne « Ring Size: Not sure – please help me size » | n/a | fonctionne [V] |
| More payment options | lien | non ouvert | n/a | non testé |
| DROP THE HINT / COPY LINK | boutons | « Opens your own email app — nothing sends until you press send » [V, texte] | n/a | non actionnés (courriel, copie) |
| READ THE STORY | lien | présent | n/a | non ouvert |
| Questions « Good to know » (6) | accordéons | tous ouverts, texte lu (voir « Prix, délais ») | n/a | fonctionnent [V] |
| Ring Size Guide | tableau | tailles US/Canada, UK/Australie, Europe, Japon avec diamètre et circonférence en mm | n/a | fonctionne [V] ; guide imprimable cité [V] |
| Panier : quantité − / + / Remove | boutons | présents ; Remove = lien `/cart/change?…quantity=0` | recalcul non testé | présents [V], non actionnés |
| CHECK OUT | bouton | **non actionné** (hors périmètre) | n/a | non testé |
| Bandeau « BLACK FRIDAY THANK-YOU » | bandeau | « Orders of $3,500 or more get lab diamond studs … Through Monday, Nov 30 » | −/+ | lu [V] |
| Search, Log in, Cart | liens | /search, /account (non ouverts), /cart (ouvert) | n/a | présents [V] |
| Pied : Our story, Love Stories, Reviews (Trustpilot), Certificates, 4 C's, Track your order (account.luthersdiamonds.com/orders), FAQs, Financing, Warranty, Shipping & Care, Email, (943) 258-3528 | liens | pages de contenu lues pour 5 d'entre elles | n/a | présents [V] |
| Numéros de téléphone | tel: | pied d'accueil (943) 258-3528 ; panier et page retours (770) 696-6121 : **deux numéros différents** [V] | n/a | incohérence |
| United States (USD $) | bouton | sélecteur de pays et de devise ; non ouvert | n/a | non testé |
| SUBSCRIBE (courriel) | formulaire | non rempli (règle) | n/a | non testé |
| Réseaux (Instagram, YouTube, Snapchat, TikTok) | liens | externes | n/a | non ouverts |
| Aucun mode 360°, vidéo de produit, 3D, AR, zoom dédié | n/a | seul le plugin `photoswipe` (visionneuse) apparaît dans le code de l'image [I] | n/a | zoom non testé |
| Aucun comparateur, aucun chat, aucun WhatsApp, aucun essayage à domicile | n/a | absents de la liste des contrôles [V] | n/a | absents |

## Options disponibles

- **Formes** (collection, 7) : Oval, Marquise, Pear, Emerald, Cushion, Round, Radiant.
- **Styles** (3) : Hidden halo, Diamond band, Three stone.
- **Matériaux (fiche Gardenia Green)** : 14 k rose, 14 k blanc, 14 k jaune, platine 950. Pas de 18 k sur cette fiche [V].
- **Carats** : 1, 1,5, 2, 2,5, 3 ct (selon la fiche).
- **Accents** : feuilles émeraude (de base), diamant, saphir. **Pierres de naissance** : 12 mois, deux emplacements (la sienne et celle de son ou sa partenaire).
- **Origine** : diamant synthétique de série ; « Prefer natural? Request a natural diamond » sur demande [V]. Pas de choix en ligne.
- **Gravure** : 9 caractères, offerte ; police ou placement sur mesure 75 $.
- **Tailles** : 3,25 à 13 par quart de taille.
- **Non proposés dans la fiche** : choix des griffes, corps de bague, pavage, filtres de pierre (couleur, pureté, certificat) ; la qualité est fixe : « DEF · VS2+ », IGI [V].

## Prix, délais, retours, garanties

- **Prix** : « From $1,250 » à « From $4,950 » sur la collection ; prix exact affiché par variante, en dollars, sans décomposition (matière, main-d'œuvre, pierre) [V]. Exemple Gardenia Green 14 k rose : 1 ct 1 500 $, 1,5 ct 2 000 $, 2 ct 2 500 $, 2,5 ct 3 000 $, 3 ct 3 400 $ ; platine +300 $ à 1 ct [V].
- **Livraison et taxes** : « Shipping, taxes, and discount codes calculated at checkout » (panier) ; la FAQ dit : livraison gratuite assurée, signature requise, UPS Next Day Air possible aux États-Unis ; à l'international, droits et taxes d'import pris en charge [V, texte].
- **Délai annoncé** : pièces de la collection 4 à 5 semaines (fabrication 2 à 3 semaines, expédition 1 à 2) ; sur mesure 6 à 7 semaines après acompte ; pièces très travaillées 8 à 10 semaines [V, /pages/shipping-care et /pages/faqs].
- **Retours** : annulation gratuite avant le début de la production ; ensuite vente ferme (« final sale »), car faite sur mesure ; en cas de dommage ou de défaut, signalement sous 14 jours [V]. Pas de période de rétractation standard.
- **Garantie** : garantie à vie de la fabrication (« Lifetime Craftsmanship Warranty ») ; caution remboursable de 50 $ pour expédier et évaluer ; la pierre centrale n'est pas couverte ; une réparation chez un tiers annule la garantie [V, /pages/warranty].
- **Certificats** : IGI inclus et livré en version papier pour les synthétiques ; GIA pour les naturels ; AGL pour les pierres de couleur à partir de 1 ct [V, /pages/certificates et /pages/shipping-care].
- **Financement** : Shop Pay (Affirm), 35 à 30 000 $, sauf Québec ; pour le sur mesure, acompte 10 % puis solde de 90 % [V].
- **Moyens de paiement affichés au panier** : aucun avant « CHECK OUT » ; seul « More payment options » (fiche) [V].

## Confiance et service

- **Preuve de la pierre** : vidéo de la pierre exacte et rapport IGI envoyés sous 24 h après la commande, à approuver avant sertissage [V, /pages/certificates et FAQ]. C'est la réponse de ce site à la peur de l'échange de pierre.
- **Taille** : « We confirm your size with you before we start » [V].
- **Fabrication** : atelier familial à Atlanta, « since 1994 », chef de création nommé (Jack Aitkin) et maître artisan (Mr. Lee) [V, texte]. Photos de « recent builds » sur la page sur mesure [V].
- **Suivi de commande** : lien « Track your order » (compte externe) et courriel de suivi le jour de l'expédition ; message « Waiting for details » expliqué dans la FAQ [V].
- **Avis** : lien vers Trustpilot ; avis intégrés sur la page d'accueil (« postcards ») ; histoires de demandes en mariage (/pages/proposals) [V, liens].
- **Services** : engraving et « Stone Inlay® » offerts ; boîte « Luther's Brown Box » ; « Drop a hint » (message envoyé à un proche par courriel) [V].
- **Langue et devise** : anglais seul, dollars (sélecteur de pays présent) [V].
- **Contact** : courriel et téléphone ; pas de chat, pas de WhatsApp, pas de rendez-vous en ligne relevés [V].

## Points forts à retenir pour JR Diamond

1. **Vidéo de la pierre exacte avant sertissage, avec rapport IGI, sous 24 h** : preuve : /pages/certificates (étapes 01 à 03) et FAQ « Will I see my diamond before it's set? ». Rejoint la promesse « pierre filmée ».
2. **Prix visible par variante, avec écarts lisibles** : 1 500 → 3 400 $ du 1 au 3 ct, +300 $ pour le platine : preuve : changements de prix relevés en actionnant chaque option sur la fiche.
3. **Chaque option montre la taille réelle de la pierre** (« 1.5 ct · ≈ 11.4 × 5.7 mm face-up ») : preuve : texte mis à jour à chaque clic de carat.
4. **Délai en trois temps (fabrication, expédition, total) et délai plus long pour le sur mesure** : preuve : /pages/shipping-care.
5. **Règle d'annulation claire** : gratuite avant l'atelier, ferme ensuite ; dommage signalé sous 14 jours : preuve : FAQ et fiche.
6. **Écriture de la gravure et pierres de naissance offertes** : preuve : FAQ « Engraving & Stone Inlay® ».
7. **Voie sur mesure expliquée par étapes** (10 % d'acompte, CAO validée, devis avant paiement) : preuve : page « One of one ».
8. **Filtres par forme dans l'adresse** (`?shape=…`) : liens partageables : preuve : adresse après clic.
9. **Mobile rapide** : 1,4 s pour la photo principale (voir « Limites ») : preuve : mesure ci-dessous.

## Défauts observés

- **Ajout au panier sans taille accepté** (panier à 2 lignes dont une sans « Ring Size ») ; le message de validation n'empêche pas l'ajout [V, panier /cart]. Hypothèse : double clic ou règle propre au thème [S].
- **Photo principale inchangée** quand on change le métal rose/blanc/jaune ou le carat : le visuel ne reflète pas le choix [V pour l'image principale seulement ; galerie non parcourue].
- **Pas de visuel 3D, 360° ni de vidéo du produit** [V, liste des contrôles].
- **Prix hors taxes ou avec taxes ?** non dit avant le paiement ; les taxes se calculent « at checkout » [V].
- **Deux numéros de téléphone** différents entre le pied de page et la page retours/panier [V].
- **Filtres de forme défilants** : les boutons hors écran (Emerald à Three stone) sont invisibles sans défilement horizontal en ordinateur [V, clic standard refusé].
- **Pas de décomposition du prix** (matière, façon, pierre) [V].
- **Option non confirmée** : l'accent « Sapphire » n'a pas pu être actionné [V, test].
- Pas de choix naturel ou synthétique en ligne : le naturel est « sur demande » [V].

## Limites de l'audit

- Pas de paiement, pas de saisie : « CHECK OUT », « SUBSCRIBE », le formulaire sur mesure, « DROP THE HINT » et le courriel non actionnés.
- Pierres de naissance, gravure, 18 k (absent de cette fiche) et autres fiches non testés ; une seule fiche a été parcourue en profondeur.
- Temps de la photo principale : de la requête de page à l'image décodée, depuis un réseau cloud, une seule mesure par appareil. **Fiche : 2,19 s ordinateur, 1,39 s iPhone 13 ; collection : 1,36 s ordinateur, 1,37 s iPhone** [V].
- Mobile : seule la fiche, la collection et le panier ont été ouverts ; le comptage de contrôles est brut.
- Les captures sont dans le dossier de travail (hors dépôt).

## Sources

- https://luthersdiamonds.com/collections/lab-diamond-engagement-rings
- https://luthersdiamonds.com/products/the-gardenia-green
- https://luthersdiamonds.com/cart
- https://luthersdiamonds.com/pages/shipping-care
- https://luthersdiamonds.com/pages/returns-support
- https://luthersdiamonds.com/pages/warranty
- https://luthersdiamonds.com/pages/jewelry-financing
- https://luthersdiamonds.com/pages/certificates
- https://luthersdiamonds.com/pages/faqs
- https://luthersdiamonds.com/pages/customized%E2%84%A2-by-luthers-diamonds
