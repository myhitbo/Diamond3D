# Audit : Angara (États-Unis, vendeurs nationaux)

- **Site** : Angara, https://www.angara.com. Page de départ : https://www.angara.com/engagement-rings/settings (constructeur « Create Your Own », étape 1 sur 3) [R2]. Assistant IA : /ring-designer [R20].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données.
- **Statut : complet**. Parcours suivi sur ordinateur des 3 étapes (monture 1134, diamant synthétique LD-00055, bague complète) jusqu'au panier. Sur iPhone : relevé des contrôles et temps d'affichage. Assistant IA et chat non utilisés (règle : pas de conversation). Voir Limites pour le panier.
- Vérifie et complète la fiche Angara de `docs/concurrence/2026-11-15_etats-unis.md` ([V35] à [V41b]).
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé. Prix en dollars US affichés le 15/11/2026 (soldes « Black Friday » en cours, prix barrés partout).

## Parcours

| Étape | Options |
|---|---|
| 1. Montures [R2] | 299 montures ; filtres style, forme, métal, prix ; tri ; pastilles de métal et de forme sur chaque carte [V]. |
| 1 bis. Fiche monture [R3] | Forme de la pierre (8), métal (11), type de griffes (3), origine naturel ou synthétique (2), « SELECT THIS SETTING » [V]. |
| Fenêtre de transition | « Continue to the Next Step » : « Add a Gemstone » ou « Add a Diamond » ; « All of our stones are handpicked by our team of GIA-certified gemologists » [V]. |
| 2. Pierres [R4][R5] | Diamants : 212 (184 synthétiques, 28 naturels) ; pierres de couleur : 29 variétés. Origine, « certifiées seulement », forme, carats, prix, tri, 360° [V]. |
| 2 bis. Fiche pierre [R6][R7] | Galerie (pierre, pierre sur la main, certificat, 360° pour le synthétique), « View IGI/GIA Certificate », « SELECT THIS DIAMOND » [V]. |
| 3. Bague complète [R10] | Prix total décomposé, paiement en 2 ou 3 fois, taille (49 valeurs), guide des tailles, gravure offerte, « SAVE THIS DESIGN », « ADD TO BAG » [V]. |
| 4. Panier [R11] | Cadeau offert à choisir, détail pierre + monture, taille modifiable, code promo appliqué d'office, livraison, récapitulatif, « SECURE CHECKOUT » (non suivi) [V]. |

## Contrôles vérifiés

Ordinateur sauf mention « iPhone ». Bague de référence : monture 1134 ovale, or blanc 14 k, 4 griffes, 655 $ (barré 728 $). L'adresse de la page change à chaque choix (paramètres `metalId`, `sShape`, `prong`, `isNatural`, `ringSize`) [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **Liste des montures [R2]** | | | | |
| More Filters, Style, Shape, Metal, Price | boutons | Ouvrent tous le même panneau « Filters » : style (6), forme (8, avec compte), métal (5), fourchette de prix, Reset, View Results (ordinateur et iPhone) | — | OK |
| Style « Halo » + View Results | filtre | Adresse `/engagement-rings/settings/halo`, 299 → 63 montures (ordinateur et iPhone) | — | OK |
| Price Range (curseur, 2 champs) | curseur | Bornes 459 $ à 6 008 $ relevées | — | Non actionné (bornes seulement) |
| Sort by : Best Seller, Price Low To High, Price High To Low | liste | Low To High → `?sortBy=price&sortDir=asc`, 1re carte à 460 $ | — | OK |
| Pastilles de métal d'une carte (rose, blanc, platine, bicolore, jaune) | boutons | Changent l'image de la carte (RR, YY, WY…) ; platine = même image que l'or blanc | Platine : 655 → 1 414 $ | OK |
| Icônes de forme d'une carte (8, carrousel à flèches) | boutons | Round, Heart, Pear, Oval changent image et titre ; Emerald Cut sans effet (hors du cadre) | Inchangé | OK sauf 1 |
| « Go to slide 2 » d'une carte | point | Aucun changement d'image détecté | — | Non concluant |
| Carte (titre) | lien | Fiche `/engagement-rings/settings/solitaire/1134?…` en 5,5 s | — | OK |
| LOAD MORE | bouton | Ajoute des cartes sous la grille | — | OK |
| Create Your Own / Best Sellers | onglets | Best Sellers → `/c/engagement-rings` (bagues montées) | — | OK |
| Étape 2 « View Options » (sans monture) | lien | `/engagement-rings/stones` | — | OK |
| Chat With Us (pied de page) | bouton | Fenêtre Freshchat « Angara Assistant », bouton « Acknowledge » (conversation enregistrée) ; robot [I] (freshbots.ai chargé) | — | OK, non poursuivi |
| United States (USD) | bouton | Fenêtre « Select Your Location » : au moins 29 pays et 16 devises ; pas d'Israël | — | OK |
| **Fiche monture 1134 [R3]** | | | | |
| Center Stone Shape : Round, Oval, Emerald Cut, Pear, Cushion, Cushion Rectangular, Heart, Square | carrousel (flèches) | Adresse `sShape=…`, titre et image recomposée changent (8/8) | 655 $ fixe | OK |
| Metal Type : 14K blanc, jaune, rose, blanc et jaune, blanc et rose | boutons | Adresse `metalId=14k-…`, image recolorée | 655 $ | OK |
| Metal Type : 18K mêmes 5 couleurs | boutons | Adresse `metalId=18k-…` | 912 $ (barré 1 014 $) | OK |
| Metal Type : Platinum | bouton | Image identique à l'or blanc | 1 414 $ (barré 1 572 $) | OK |
| Prong Type : 4 Prongs, Peg Head, 4 Claw Prongs | boutons | Adresse `prong=…`, tête de l'image et texte « About This Setting » changent | Inchangé | OK |
| Stone Origin : Natural, Lab Grown | boutons | Adresse `isNatural=true/false` ; filtre ensuite la liste des pierres | Inchangé | OK |
| SELECT THIS SETTING | bouton | Fenêtre « Add a Gemstone » / « Add a Diamond » | — | OK |
| Add a Diamond / Add a Gemstone | boutons | Liste des diamants (3,0 s) / des pierres de couleur (4,9 s) | — | OK |
| « Shown with Diamond » (i), date de livraison (i) | survol | Aucune info-bulle | — | Sans effet |
| 146 Reviews | lien | Défilement vers les avis | — | OK |
| Setting Details, Why Shop With Us | accordéons | Métal et forme ; argumentaire (« highest-rated and most-awarded online jeweler ») | — | OK |
| Drop A Hint | bouton | Partage : Facebook, Pinterest, X, Copy Link | — | OK |
| Email Us, téléphone | liens | `mailto:` ; `/b/contact-us` (iPhone : `tel:`) | — | Relevés |
| Étape 1 « Change » | lien | Liste des solitaires filtrée (139) | — | OK |
| Galerie (3 vues) ; iPhone : Thumbnail 1–3 | images | Vues de face, de profil, de côté ; pas de zoom, vidéo, 360°, 3D ni AR | — | Relevé |
| Similar Settings, avis (tri, pages 1–9, Like/Dislike, Write A Review) | divers | — | — | Non actionnés (hors parcours ; formulaire) |
| **Liste des diamants [R4]** | | | | |
| View All / Natural / Lab-Grown | onglets | 212 / 28 / 184 diamants | — | OK |
| View Only Certified Gemstones | interrupteur | Adresse `isCertified=true`, 184 → 184 | — | Sans effet visible |
| Formes avec compte (8) | boutons | Filtrent (synthétique : Round 98, Emerald Cut 29, Pear 23, Oval 9, Cushion 9, Heart 9, Square 7) | — | OK |
| Cushion Rectangular (0) | bouton | Grisé, sans effet | — | Impasse |
| More Filters | panneau | Forme, Carat Range (1,00–5,00), Price Range (967–15 054 $), Reset, View Results ; ni couleur, ni pureté, ni taille, ni certificat | — | OK |
| Sort (Best Seller, Price Low/High) | liste | Mêmes 3 tris que les montures | — | OK |
| Pastilles « Oval × », « Lab-Grown × », Clear All | boutons | — | — | Non actionnés |
| 360° d'une carte (survol) | bouton | Lecteur 360° en iframe (`LD00055_1.html`) | — | OK |
| Carte diamant | lien | Fiche `/engagement-rings/stones/diamond/LD-00055?…` en 1,8 s | — | OK |
| **Fiches pierre [R6][R7]** | | | | |
| View IGI Certificate (synthétique) | lien | Image « IGI certificate comes with the purchase », filigrane « Sample Certificate », données floutées, pierre ronde [R8] | — | OK, certificat factice |
| View GIA Certificate (naturel) | lien | Image « Sample Certificate », floutée, pierre ronde [R9] | — | OK, certificat factice |
| SELECT THIS DIAMOND | bouton | Page « Complete Your Ring » : adresse après 6,8 s, image après 8,5 s (1 mesure) | — | OK, lent |
| **Bague complète [R10]** | | | | |
| Select Plan | lien | « Angara Easy Pay » : 2 × 763 $ ou 3 × 508,67 $, 0 % ; fabrication après le 1er versement | — | OK |
| « Applied » (10 % + cadeaux) | lien | Aucun effet visible | — | Sans effet |
| View (diamant) / Edit (monture) | liens | Vers `/engagement-rings/stones/diamond/LD-00055` et `/engagement-rings/settings/solitaire/1134` | — | Relevés |
| Tailles 3, 6.5, 9, 12, 15 (sur 49, carrousel) | boutons | Adresse `ringSize=…`, bouton encadré | 1 526 $ fixe | OK |
| Size Guide | panneau | Tableau taille US → diamètre (14,1 à 23,9 mm), guide téléchargeable, 1 mise à taille gratuite la 1re année | — | OK |
| ADD TO BAG sans taille | bouton | Ouvre le guide des tailles (pas de message d'erreur) | — | OK |
| ADD TO BAG (taille 4) | bouton | Redirection vers `/my-cart` | — | OK |
| SAVE THIS DESIGN | bouton | Fenêtre nom + e-mail pour recevoir le lien | — | Non rempli |
| Add Free Engraving | panneau | Aperçu du texte sur l'anneau, 25 caractères, 2 polices, « Save Text » ; « Engraved Items are now eligible for exchange and returns » | 0 $ | Non saisi |
| Certificate of Authenticity | bouton | Aucune fenêtre observée | — | Sans effet visible |
| Free Shipping & Returns, Why Shop With Us | accordéons | Textes de livraison et de retour (voir plus bas) | — | OK |
| Drop A Hint, 146 Reviews, date (i) | divers | Comme sur la fiche monture | — | OK / sans effet |
| Clic sur l'image principale | image | Pas de zoom ni de visionneuse | — | Sans effet |
| Boutons du lecteur 360° (◄◄, ►►, pause, rotation, info) | boutons | Vus sur capture | — | Non actionnés |
| **Panier [R11]** | | | | |
| Choose Gift(s), quantité, taille, REMOVE, EDIT, message cadeau, Offer Code, SECURE CHECKOUT, Express Checkout | divers | Relevés sur la page | — | Non actionnés (robots.txt, paiement) |
| **Assistant IA [R20]** | | | | |
| Share My Story, Find a Quick Match, Use My Inspiration, champ « Describe your dream ring », pièce jointe, New Chat, History | boutons, champ | Interface de conversation | — | Non actionnés (règle) |

## Options disponibles

- **Métaux** : or 14 k et 18 k en blanc, jaune, rose, blanc et jaune, blanc et rose ; platine (11 choix) [V][R3].
- **Formes** : rond, ovale, émeraude, poire, coussin, coussin rectangulaire, cœur, carré [V][R3]. Pas de marquise, de princesse ni de radiant dans ce parcours [V].
- **Griffes** (monture 1134) : 4 griffes, « peg head », 4 griffes en pointe ; les autres variantes (pavé, halo, bypass, torsadé…) sont des montures distinctes [V][R2].
- **Styles** : solitaire, pierres latérales, halo, trois pierres, vintage, inspiré de la nature [V][R2].
- **Diamants synthétiques** : 184, de 1,00 à 5,00 ct sur les listes lues, couleur et pureté en fourchette (ex. F-G, VS), IGI annoncé ; dès 701 $ (rond 1,00 ct) [V][R4][R6].
- **Diamants naturels** : 28, tous « GIA Certified », grades précis (ex. G, VS2) ; sur les 18 premières cartes, de 0,65 à 2,00 ct et de 1 358 $ à 20 565 $ [V][R4][R7].
- **Pierres de couleur** : 29 variétés (émeraude, saphir bleu, rubis, aquamarine, opale…), naturelles ou synthétiques ; 2 202 pierres en additionnant les compteurs par forme [V][I][R5].
- **Tailles de doigt** : 3 à 15 au quart (49 valeurs), tailles US [V][R10]. **Gravure** : 25 caractères, 2 polices, offerte [V][R10].

## Prix, délais, retours, garanties

- **Affichage** : prix de la monture seul à l'étape 1 ; prix de la pierre seule à l'étape 2 ; total décomposé à l'étape 3 (« 1.00 Carat Lab-Grown Oval Diamond 871 $ » + « Solitaire Engagement Ring 655 $ » = 1 526 $) ; même détail au panier (« Gemstone Price », « Setting Price ») [V][R10][R11].
- **Effet des choix** : seuls le titre de l'or et le platine changent le prix de la monture ; forme, griffes, origine et taille de doigt ne le changent pas [V][R3][R10].
- **Remises** : « 10 % OFF » sur tous les prix, code « BLACKFRIDAY » appliqué d'office au panier (− 170 $), cadeau « FREE 299 $ », fenêtre « 12 % Off Your First Order », comptes à rebours « Ends In » et « Order within » [V][R2][R11].
- **Délai** : « Estimated Delivery By: Nov 23 - Nov 24 via Express Shipping » pour une commande le 15/11 [V][R3]. « Every Angara item is custom-made after your order is placed » ; la date tient compte de la fabrication [V][R10]. Transport : standard 5–6 jours ouvrés (gratuit), express 3–4 jours (gratuit dès 1 500 $, sinon 15 $), samedi gratuit [V][R16].
- **International** : liste de pays desservis avec la France, sans Israël ; 40 $ sous 1 500 $ ; TVA incluse pour le Royaume-Uni, le Canada, l'Australie, la Suisse et l'UE, droits de douane en sus [V][R16].
- **Retours** : 30 jours, prolongés au 15/01/2027 pour les achats du 16/10 au 15/12/2026 ; retour gratuit et assuré ; gravure retournable ; exclus : pièces portées, modifiées ou « specially crafted as per your request » (hors site) ; 20 % de frais après le délai ; certificat non rendu : − 250 $ ; cadeau non rendu : déduit [V][R12][R13].
- **Garantie de valeur** : remboursement à 110 % (plafond 250 $) si un expert formé au GIA estime la pièce à moins de 125 % du prix payé [V][R13].
- **Garantie à vie** : polissage, nettoyage, resserrage des pierres, rhodiage, mise à taille gratuits ; port aller à la charge du client (35 $ l'étiquette assurée) [V][R12]. Le programme A-List ajoute des quotas par niveau (1 à 2 services par an) [V][R18]. La fiche d'exploration (« garantie à vie réservée aux membres A-List ») est donc à nuancer [I].
- **Mise à taille** : 1 gratuite la 1re année, la suivante 50 $ [V][R12]. **Sur mesure hors site** : 150 $ de frais [V][R15].
- **Paiement** : cartes Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Affirm (50 à 30 000 $), Amazon Pay, virement, Easy Pay 2–3 fois sans frais, chèque [V][R17]. Taxe de vente « TBD » au panier [V][R11].

## Confiance et service

- **Certificats** : « View IGI/GIA Certificate » montre un certificat type, flouté, d'une pierre ronde, pas celui de la pierre [V][R8][R9]. Chaque bague a un « Certificate of Authenticity » maison [V][R10][R19].
- **Visuels** : image de bague recomposée par couches (corps, tête, pierre) à chaque choix ; la tête suit la taille de la pierre choisie (10×8 mm par défaut, 8×6 mm avec la pierre de 1,00 ct) [V][R3][R10]. Pierre synthétique : photo, sur la main, 360° ; mention « All lab-grown Diamond images are for visual reference, and the actual stone may vary slightly » [V][R6]. Naturel : 3 images, pas de 360° [V][R7].
- **Libellé** : « Lab-Grown », « LAB GROWN », « Lab Grown Diamond » ; FAQ dédiée (« real in every way ») [V][R4][R14].
- **Langues et devises** : anglais seul sur les pages lues ; sélecteur de 29 pays au moins (USD, CAD, GBP, EUR, CHF, AED, SAR, AUD, INR, JPY…) [V][R2].
- **Avis** : 146 avis (4,5 étoiles affichées) sur la fiche monture, mais portant sur d'autres bijoux (bague cocktail opale, topaze) [V][R3]. Liens BBB, Trustpilot, Bizrate ; badge Google Customer Reviews [V][R2].
- **Service** : téléphone 24 h/24 (+1-844-527-4367), e-mail, chat Freshchat (« Angara Assistant », robot [I]), assistant IA de conception (raconter son histoire, quiz, photo d'inspiration) [V][R2][R20]. Pas de rendez-vous, de magasin, d'essai à domicile, de WhatsApp, de comparateur ni de 3D ou d'AR relevés sur le parcours [V].
- **Preuves de fabrication** : texte seulement (« no assembly lines », « starting with a wax casting ») [V][R19] ; « Custom Handcrafted · Made to order » au panier [V][R11]. Aucune photo ni vidéo d'atelier ou de la commande sur le parcours [V]. Suivi de commande : `/track-your-order` (non testé).

## Points forts à retenir pour JR Diamond

1. **Image qui suit chaque choix, y compris la taille de la pierre** : l'adresse de l'image change avec la forme, le métal, les griffes et la pierre (`hs_10x8oval` → `hs_8x6oval` pour 1,00 ct) [V][R3][R10]. Notre 3D issue du fichier de fabrication peut faire de même avec le vrai calibre.
2. **Prix décomposé de bout en bout** : pierre + monture à l'étape 3 et au panier [V][R10][R11]. Modèle simple pour notre « prix expliqué ».
3. **Adresse qui encode la configuration** (`metalId`, `sShape`, `prong`, `isNatural`, `ringSize`) : partage et reprise sans compte [V][R3][R10].
4. **Paiement maison en 2 ou 3 fois sans intérêts, fabrication après le 1er versement** [V][R10][R17]. À rapprocher des paiements échelonnés courants en Israël [S].
5. **Date de livraison sur chaque fiche** et mention « custom-made after your order » [V][R3][R10]. Nous pouvons afficher « 14 jours ouvrés » sous forme de date.
6. **Gravure offerte avec aperçu sur l'anneau** (25 caractères, 2 polices) [V][R10]. L'atelier propose 20 à 25 polices et l'hébreu.
7. **« ADD TO BAG » sans taille ouvre le guide des tailles** au lieu d'une erreur [V][R10].
8. **Garantie de valeur chiffrée** (110 %, plafond 250 $) et retours étendus pour les fêtes [V][R13][R12].
9. **Leur faiblesse est notre argument** : certificats « Sample » et photos de synthétiques « for visual reference » [V][R6][R8][R9]. Montrer le certificat réel et la pierre filmée avant l'achat nous distingue.

## Défauts observés

1. Certificats factices : IGI et GIA « Sample Certificate », floutés, d'une pierre ronde, affichés pour des ovales [V][R8][R9].
2. Diamants synthétiques génériques : couleur et pureté en fourchette, poids « approximate », photos « for visual reference » ; prix identiques pour plusieurs pierres (deux émeraudes 1,00 ct à 786 $) [V][R4][R6]. [I] On choisit une spécification, pas une pierre.
3. Platine rendu avec la même image que l'or blanc (fichier `…-WW.png`) [V][R2][R3].
4. Impasses : la monture propose « Cushion Rectangular » mais 0 diamant synthétique ; « Heart » : 0 naturel [V][R4].
5. Filtre de prix calé sur le prix barré : borne basse 967 $ alors que la pierre la moins chère est affichée 871 $ [V][R4].
6. « View Only Certified Gemstones » sans effet visible (184 → 184) [V][R4]. Ni couleur, ni pureté, ni taille, ni certificat comme filtres [V][R4].
7. Fenêtre d'inscription (12 %) qui surgit quelques secondes après l'arrivée (6 à 10 s dans nos essais) et bloque les clics derrière un voile sombre ; Échap la ferme [V][R3].
8. Avis de la fiche monture portant sur d'autres produits [V][R3].
9. Lenteur : 6,8 s avant le changement d'adresse et 8,5 s avant l'image à l'étape 3 (1 mesure) ; 5,5 s pour ouvrir une monture [V][R10][R2].
10. Options masquées par les carrousels (Round, Heart, Square, Emerald Cut sur une carte) [V][R2][R3]. Info-bulles (i), « Applied » et « Certificate of Authenticity » sans effet visible [V][R3][R10].
11. Pression commerciale : « Black Friday » le 15/11 avec compte à rebours, prix barrés, compte à rebours de commande [V][R2][R3].

## Temps d'apparition du visuel principal

Mesure : du début de navigation à la première image de plus de 250 px (120 px sur la liste) chargée dans l'écran. Réseau de centre de données, caches non vidés entre deux essais.

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste des montures [R2] | 3,4 s (1 mesure) | 3,8 s |
| Fiche monture 1134 [R3] | 0,7 à 2,5 s (8 chargements) | 0,8 s |
| Fiche diamant [R6][R7] | 1,5 s (synthétique) ; 2,5 s (naturel) | 1,6 s |
| Bague complète [R10] | 1,0 à 2,1 s en accès direct ; 8,5 s après le clic (1 mesure) | 2,4 s |

## Limites de l'audit

- Émulation iPhone dans Chromium, pas de Safari réel. Parcours complet sur ordinateur seulement ; sur iPhone, contrôles, filtres de la liste et temps.
- Une monture (1134), un diamant synthétique (LD-00055) et un naturel (D-000011) suivis en détail. Pierres de couleur : liste seulement.
- Panier : robots.txt interdit `*/my-cart`, `*/cart$` et `*/checkout` [R1]. Le script bloquait ces pages, mais « ADD TO BAG » redirige à l'intérieur de l'application, sans chargement de page : le panier s'est affiché une fois. Il n'a pas été rouvert. Moyens de paiement pris dans `/b/payment-options` [R17].
- Non utilisés : assistant IA, chat, formulaires (sauvegarde, newsletter, gravure, avis, suivi de commande), connexion, recherche, favoris.
- Curseurs de prix et de carats non déplacés. Réponses de FAQ lues dans les données structurées de la page (les accordéons ne s'ouvraient pas au clic) [R13][R14][R15].
- Pages de politique lues dans Chromium (Firecrawl sans crédits). Temps : peu de mesures.
- Fiche d'exploration corrigée : tailles 3 à 15 (et non 3 à 14) ; mise à taille relevée ; 360° limité aux synthétiques testés ; « 2 206 pierres » ≈ 2 202 pierres de couleur + 212 diamants ; « signature stone » non vue sur la monture 1134.

## Sources (lues ou actionnées le 15/11/2026)

- [R1] https://www.angara.com/robots.txt
- [R2] https://www.angara.com/engagement-rings/settings
- [R3] https://www.angara.com/engagement-rings/settings/solitaire/1134?metalId=14k-white-gold&sShape=oval
- [R4] https://www.angara.com/engagement-rings/stones/diamond?metalId=14k-white-gold&sShape=oval&isNatural=false&styleName=solitaire&settingId=1134&isSettingCompleted=true&shape=oval
- [R5] https://www.angara.com/engagement-rings/stones?metalId=14k-white-gold&sShape=oval&styleName=solitaire&settingId=1134&isSettingCompleted=true&shape=oval
- [R6] https://www.angara.com/engagement-rings/stones/diamond/LD-00055?metalId=14k-white-gold&sShape=oval&isNatural=false&styleName=solitaire&settingId=1134&isSettingCompleted=true&shape=oval
- [R7] https://www.angara.com/engagement-rings/stones/diamond/D-000011?metalId=14k-white-gold&sShape=oval&isNatural=true&styleName=solitaire&settingId=1134&isSettingCompleted=true&shape=oval
- [R8] https://assets.angara.com/BYO-Final/Stones/LD00055/LD00055/Stone/123456789_400.jpg
- [R9] https://assets.angara.com/BYO-Final/Stones/D000011/D000011/Stone/143567_400.jpg
- [R10] https://www.angara.com/engagement-rings/complete-ring?metalId=14k-white-gold&sShape=oval&isNatural=false&styleName=solitaire&settingId=1134&isSettingCompleted=true&shape=oval&ep=stones&stoneName=diamond&stoneId=LD-00055&isStoneCompleted=true
- [R11] https://www.angara.com/my-cart (une fois, après « ADD TO BAG »)
- [R12] https://www.angara.com/b/return-policy · [R13] https://www.angara.com/b/faq-returns
- [R14] https://www.angara.com/b/faq-lab-grown · [R15] https://www.angara.com/b/faq-customizations
- [R16] https://www.angara.com/b/shipping · [R17] https://www.angara.com/b/payment-options
- [R18] https://www.angara.com/b/angara-a-list · [R19] https://www.angara.com/l/the-angara-difference
- [R20] https://www.angara.com/ring-designer
