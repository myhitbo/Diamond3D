# Audit : The DiamondLab (Boca Raton, Floride)

- **Site** : The DiamondLab, https://www.thediamondlab.net
- **Page de départ** : https://www.thediamondlab.net/pages/ring-builder?stage=Select+Setting&sort=PRICE-ASC
- **Date** : 15/11/2026 (lecture seule, visiteur anonyme)
- **Appareils** : Chromium ordinateur 1366x900 (en-US) et affichage iPhone 13
- **Statut** : complet (réglage → diamant → bague finalisée → panier ; pas de paiement). Robots.txt : AUTORISÉ pour les adresses ouvertes.
- Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Adresse (/pages/ring-builder?stage=…) | Options |
|---|---|---|
| 1. Select Setting | Select+Setting | Filtres style, prix (curseur $100 à $10 000), métal, forme ; tri ; 24 bagues affichées puis chargement progressif [V] |
| 1b. Fiche réglage | …&id=…&variant=… | Forme (10), métal (10), « Select Setting », « Share », « Book a Showroom Appointment » [V] |
| 2. Add Diamond | Add+Diamond&settingId=… | Onglet unique « Lab Grown », forme verrouillée, carat, couleur, pureté, taille, prix, filtres avancés, liste/grille, tri ; 153 504 diamants [V] |
| 2b. Fiche diamant | …&viewDetailsId=… | Caractéristiques, n° de certificat, « Certificate PDF : View », « Select diamond » [V] |
| 3. Complete Ring | Complete+Ring&…&diamondAddedId=… | Récapitulatif, taille de doigt (3,00 à 13,00), guide des tailles, « Add to cart » [V] |
| 4. Panier | /cart | Ligne « Completed Ring » + sous-lignes, quantité, remise, instructions, « Check out », Shop Pay, Google Pay [V] |

## Contrôles vérifiés

Liste de départ : 111 contrôles visibles sur ordinateur, 92 en iPhone [V, controls.cjs].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Style : Solitaire, Diamond Band, Hidden Halo, Three Stone, Halo | vignettes | Filtre ; l'adresse reçoit `&styles=halo` ; « Halo » a réduit la liste à 2 modèles | — | OK (Halo seul testé) |
| « More Styles » | bouton | Ajoute Side Stone, Nature, Vintage (puis « Fewer Styles ») | — | OK |
| Prix (curseur + champs $100 / $10 000) | curseur | Présent | filtre | non manipulé |
| Métal (liste) : 10K jaune, 14K jaune, 18K jaune, 10K blanc, 14K blanc | vignettes | Filtre | — | présent |
| « More Metals » | bouton | Ajoute 18K blanc, 950 platine, 10K / 14K / 18K rose | — | OK |
| Forme (liste) : Round, Emerald, Oval, Radiant, Cushion | vignettes | Filtre | — | présent |
| « More Shapes » | bouton | Ajoute Princess, Pear, Marquise, Heart, Asscher | — | OK |
| Tri : prix croissant, décroissant, Best Selling, A-Z | liste | 4 choix | — | ouverts ; **le tri « prix croissant » par défaut n'est pas strictement croissant** (1 170 $, 1 110 $, 1 230 $, 1 160 $…) [V] |
| Vignette bague (24 sur 4 colonnes) | lien | Ouvre la fiche | de 1 110 $ à 1 530 $ au tri affiché | OK |
| Fiche : forme (Round, Princess, Cushion, Oval, Pear …) | bouton | Change la vidéo-rendu (RD, OV…) ; le prix varie par forme ; à 14K blanc/jaune : Round 1 850 $, Princess 1 810 $, Cushion 1 830 $, Oval 1 830 $, Pear 1 820 $ ; en 10K blanc Oval 1 150 $ contre Round 1 170 $ | ±10 à 40 $ | OK [V] |
| Fiche : métal 10K blanc / jaune / rose | bouton | Change la vidéo (WHITE, YELLOW, ROSE) | 1 170 $ | OK |
| Fiche : métal 14K blanc / jaune | bouton | Idem | **1 850 $ (+680 $ par rapport au 10K)** | OK |
| Fiche : 14K rose, 18K (3), platine | bouton | Visibles après « More Metals » ; clic non abouti dans mon script | non relevé | **non testé (prix inconnu)** |
| Fiche : Share | bouton | Partage | — | présent, non ouvert |
| Select Setting | bouton | Passe à l'étape diamant (adresse `Add+Diamond`) en ~1 s | — | OK |
| Back to browse | bouton | Retour à la liste | — | présent |
| Étape diamant : onglet « Lab Grown » | onglet | Seul onglet ; pas de diamants naturels | — | OK [V] |
| Shape (Round seule) | vignette | Forme verrouillée sur celle du réglage | — | [V] |
| Carats | double curseur | 0,5 à 10 ct | filtre | présent |
| Colour White / Fancy | bascule | White : D, E, F, G ; Fancy : Yellow, Pink, Blue, Red, Green, Purple, Orange, Violet, Gray, Black, Brown, Champagne, Cognac, Chameleon, S & P, Other + intensité (Vivid, Intense, Light) ; 10 765 fantaisie | filtre | OK |
| Clarity | segments | FL, IF, VVS1, VVS2, VS1, VS2 | filtre | présent |
| Cut | segments | Ideal, Excellent, Very Good | filtre | présent |
| Price | double curseur | $1 à $5 000 000 | filtre | présent |
| Advanced Filters | bouton | Déplie des filtres supplémentaires (contenu non lu) | filtre | ouvert |
| List / Grid | bascule | Mode d'affichage | — | présent |
| Sort | liste | Prix croissant/décroissant, carat croissant/décroissant | — | présent |
| Select diamond | bouton | Passe à Complete Ring avec le diamant | + prix pierre | OK |
| Fiche diamant : « Click to view certificate », « Certificate PDF View » | lien | Ouvre le certificat IGI | — | non ouvert (lien externe) |
| Ring Size Guide | lien | Guide des tailles | — | non ouvert |
| Select Ring Size | liste | 3,00 à 13,00 par quart (41 valeurs) | — | OK |
| Add to cart (sans taille) | bouton | Aucun message d'erreur visible en 1,5 s ; l'adresse ne change pas | — | [V] absence de retour |
| Add to cart (taille 7,00) | bouton | « Adding to cart » ~4 s, puis redirection vers /cart | 1 437 $ | OK |
| Remove (réglage ou diamant) | lien | Retire un composant du récapitulatif | — | présent, non cliqué |
| Panier : quantité, corbeille, remise, instructions | divers | Présents | — | non manipulés |
| Panier : Check out, Shop Pay, Google Pay | boutons | Présents | — | non cliqués (limite) |
| Appel 561-437-0989, SMS 561-579-2214 | liens | tel: ; « Text Us » | — | non ouverts |
| Book a Showroom Appointment / BOOK AN APPOINTMENT | liens | Vers bookeasy et /pages/store-appointment | — | non ouverts |
| Financement Synchrony (bandeau) | lien | Vers mysynchrony.com (externe) | — | non ouvert |
| English (sélecteur) | bouton | Sélecteur de langue ; seule « English » vue | — | présent |

## Options disponibles

- **Styles** : Solitaire, Diamond Band, Hidden Halo, Three Stone, Halo, Side Stone, Nature, Vintage [V].
- **Métaux** : 10K, 14K, 18K en jaune, blanc, rose ; platine 950 [V]. Le 10K est le métal d'entrée.
- **Formes** : Round, Emerald, Oval, Radiant, Cushion, Princess, Pear, Marquise, Heart, Asscher [V].
- **Diamants** : uniquement de laboratoire (« Lab Grown »), IGI, 0,50 à 10 ct, D-G, FL à VS2, Ideal à Very Good, 153 504 résultats ; fantaisie : 10 765 [V].
- **Taille** : US 3,00 à 13,00 par quart [V].
- **Pas de** : diamants naturels dans ce parcours, gravure, choix de griffes, mode « sur la main » ou RA, vue 3D interactive [V sur les pages ouvertes].

## Prix, délais, retours, garanties

- **Prix** : le réglage seul (« This price is for the Setting only »), le diamant seul (« Price only for Diamond »), puis le total de la bague : 1 170 $ + 267 $ = 1 437 $ [V]. Prix de réglage qui change avec la forme et le métal [V].
- **Décomposition** : seulement réglage + diamant ; pas de ventilation main-d'œuvre/marge. Argument de marque : « Direct-from-Source Pricing », « We Grow Our Own Diamonds », « no inflated costs » [V].
- **Délai** : le panier annonce « Estimated delivery between November 27 and November 30. Order within 20 hours 17 minutes. » [V] ; les avis du site citent environ 3 semaines pour une bague sur mesure [V, texte client]. **L'estimation du panier est incohérente avec ce délai** [I : estimation générique].
- **Livraison** : « FREE Shipping on All Orders » ; taxes et livraison calculées au paiement [V].
- **Retours** : 10 jours après réception, état neuf, avec emballage ; **les produits personnalisés (commandes spéciales) ne sont pas retournables** ; pas de retour sur les articles soldés ; remboursement sous 10 jours ouvrés [V].
- **Garanties** : « Lifetime Warranty » et « Free Resizing » en argumentaire ; page détaillée non lue [V pour les intitulés].
- **Financement** : jusqu'à 60 mois sans intérêt via Synchrony [V pour l'annonce].
- **Moyens de paiement** : au panier, Shop Pay et Google Pay ; logos de cartes en pied de page [V].

## Confiance et service

- **Certificats** : IGI sur chaque diamant, n° affiché (ex. LG749543940), PDF lié ; logos GIA, IGI, GDTO en pied de page [V].
- **Libellé** : « Lab Grown » / « lab-grown » ; FAQ dédiée aux diamants de labo (10 questions) [V].
- **Avis** : témoignages sur la page « About » (quatre cités) ; section « They Said Yes » ; pas de note agrégée vue [V].
- **Preuves de fabrication** : « We Grow Our Own Diamonds », « Keep the Seed » (la graine de croissance est remise avec le diamant), vidéo de processus dans la page d'accueil ; pas de suivi de commande, ni photos de la bague commandée [V].
- **Service** : téléphone, SMS, prise de rendez-vous en salle d'exposition (Boca Raton), page « Designers » [V].
- **Langues, devises** : anglais, dollars américains [V].

## Points forts à retenir pour JR Diamond

1. **Rendu par vidéo de la bague dans chaque forme et métal** (fichiers NVDRG…-RD/OV_WHITE/YELLOW/ROSE.mp4) : l'image change à chaque option [V : fichier vidéo observé après clic].
2. **Trois prix distincts** : réglage seul, diamant seul, bague complète, avec étiquette explicite [V].
3. **Stock énorme et filtres précis** (153 504 diamants labo, curseurs carat et prix, 10 765 fantaisie) [V].
4. **Étapes en 3 temps, réglage mémorisé dans l'adresse** (réglage et diamant dans l'URL, donc partageable) [V].
5. **Fiche diamant très complète** : certificat IGI, poli, symétrie, fluorescence, mesures, ratio, table, profondeur, PDF [V].
6. **La graine de croissance offerte** (« Keep the Seed ») : preuve d'origine et cadeau émotionnel [V].
7. **Transparence d'origine** : « nous faisons croître nos diamants nous-mêmes » [V].
8. **Livraison offerte et financement 60 mois affichés en bandeau** [V].

## Défauts observés

- Tri « prix croissant » par défaut non respecté (1 170 $ puis 1 110 $…) [V].
- Pas de diamants naturels, pas de gravure, pas de choix de griffes [V].
- Prix de la fiche réglage très variable et peu lisible : 10K 1 170 $ ; 14K 1 850 $ ; saut de 680 $ sans explication [V].
- Estimation de livraison du panier (27-30 novembre) peu crédible pour une bague faite sur commande [V/I].
- « Add to cart » sans taille : aucun message ; attente de ~4 s avec seul « Adding to cart » [V].
- Aucun visuel du diamant choisi sur la bague finale (la vidéo montre le diamant par défaut) [S].
- Retour de 10 jours seulement ; produits personnalisés non retournables [V].
- Une seule langue et une seule devise [V].
- La liste se charge par blocs : 24 modèles affichés, le reste en cases vides à l'ouverture (captures) [V].

## Limites de l'audit

- **Temps d'apparition** (réseau d'audit, sans cache) : liste de réglages, première photo ≈ 7,2 s (ordinateur) et 6,8 s (iPhone) ; fiche réglage ≈ 2,4 s (vidéo prête, ordinateur) et ≈ 7,0 s (iPhone, vidéo apparue) ; étape diamant ≈ 1 s pour les résultats textuels après le clic [V].
- Non testés : 14K rose, 18K, platine (prix de la fiche), formes Emerald, Radiant, Marquise, Heart, Asscher, filtre Prix, filtres avancés en détail, certificat PDF, guide des tailles, « Check out », paiement, chat, SMS, rendez-vous, financement Synchrony.
- L'étape diamant a été testée avec une bague ronde seulement ; d'autres formes non explorées.
- Garantie à vie et rendu 360° : seulement les intitulés lus.
- Le panier de mon test a été créé uniquement dans le navigateur d'audit.

## Sources

- Départ : https://www.thediamondlab.net/pages/ring-builder?stage=Select+Setting&sort=PRICE-ASC
- https://www.thediamondlab.net/pages/ring-builder?stage=Select+Setting&sort=PRICE-ASC&id=8115589546020&variant=43225852117028
- https://www.thediamondlab.net/pages/ring-builder?stage=Add+Diamond&sort=PRICE-ASC&settingId=8115589546020&settingVariantId=43225852117028&navActive=true&activeTab=Lab+Grown&queryLabGrown=true
- https://www.thediamondlab.net/pages/ring-builder?stage=Complete+Ring&sort=PRICE-ASC&settingId=8115589546020&settingVariantId=43225852117028&navActive=true&activeTab=Lab+Grown&queryLabGrown=true&diamondAddedId=87a9921f-eb68-4a59-a22f-86e8fa0e2c49&ringRegion=UNITED_STATES
- https://www.thediamondlab.net/cart
- https://www.thediamondlab.net/policies/refund-policy
- https://www.thediamondlab.net/pages/frequently-asked-questions
- https://www.thediamondlab.net/pages/about-the-diamondlab
