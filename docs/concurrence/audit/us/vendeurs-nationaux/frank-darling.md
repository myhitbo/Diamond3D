# Audit : Frank Darling (États-Unis, vendeurs nationaux)

- **Site** : Frank Darling (New York), https://www.frankdarling.com. Page de départ : la liste des montures [R1] ; fiches auditées : « The Ripple | Oval » [R2] et « Hidden Halo | Oval » [R3].
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données (nœud de Chicago).
- **Statut : complet.** Aucun blocage (200, pas de captcha). Parcours suivi jusqu'au panier sur ordinateur et sur iPhone. `robots.txt` n'interdit que `/wp-admin/` [R20].
- **Deux passages** de la même tâche : 14 h 53 à 15 h 16 UTC (interrompu, relevés conservés : prix par métal, rotation du 360°, comptes par type de pierre) et 20 h 10 à 20 h 55 UTC (tout le reste).
- Complète et corrige la fiche Frank Darling de `docs/concurrence/2026-11-15_etats-unis.md` ([V64] à [V68b]) : voir « Corrections du dossier » en fin de section « Prix ».
- **Légende** : [V] vérifié (page lue ou contrôle actionné, source [Rn]) ; [I] inféré ; [S] supposé ; « sec. » : source secondaire. Prix en dollars US affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 0. Liste des montures [R1] | Barre « 1 Select your setting, 2 Select your stone, 3 Confirm » ; 7 filtres, « Quick Ship », 5 tris ; 22 cartes puis « View More » ; pastilles de métal sur chaque carte [V]. |
| 1. Monture [R2][R3] | Métal (6), taille (41 + « Send ring sizer »), largeur du corps (3, selon le modèle), type des diamants de pavage (2, selon le modèle), gravure (17 caractères, 2 polices) [V]. |
| 1 bis. Bloc « Ring's in the bag? » | Deux sorties : « Search stones for this ring » ou « Continue with the default diamond stone » [V]. |
| 2. Pierre [R4] | Liste déjà filtrée sur la forme de la monture. Type (naturel, synthétique, moissanite), 6 filtres directs, 11 autres filtres, tri par colonne, comparaison, liste d'envies [V]. |
| 2 bis. Ligne dépliée, fiche pierre [R5] | Photo, caractéristiques, certificat, « Add stone to setting » ; fiche : vidéo 360° de la pierre (Vision360), simulateur de carats sur un doigt [V]. |
| 3. « Confirm » = panier (tiroir) | Monture + pierre, date d'expédition, total, mensualité Affirm, « Checkout » [V]. Pas de page de confirmation distincte [V]. |
| Variante | Entrée par la pierre (`/diamonds/`) : la barre devient « 1 Select your stone, 2 Select your setting » [V R4]. |

## Contrôles vérifiés

Contrôles relevés par `controls.cjs` : 301 (liste, ordinateur), 234 (liste, iPhone), 82 (fiche, ordinateur), 82 (fiche, iPhone). Une centaine de contrôles distincts actionnés.
Prix de référence : The Ripple, ovale, or jaune 14 k = 2 560 $ ; Hidden Halo, ovale, or jaune 14 k, corps 1,5 mm, pavage synthétique = 1 290 $.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **Liste des montures [R1]** | | | | |
| Bandeau promotionnel (4 messages) | lien, 2 flèches | Défile seul ; mène à `/featured/black-friday/` | — | Défilement OK ; lien et flèches non actionnés |
| Salle « Chicago », téléphone, « View All » | sélecteur | Salle la plus proche de l'adresse IP [I], adresse, téléphone, « Book An Appointment » | — | Lu ; « View All » non actionné |
| Search | bouton | Volet plein écran, 5 suggestions (« Marquise engagement »…) | — | Suggestions OK ; touche Entrée défaillante (voir Défauts) |
| Engagement, Appointments, About | menus au survol | Engagement : 14 formes, 16 styles, quiz, essai ; Appointments : 3 salles proches, visio | — | OK |
| Wedding, Diamonds, Jewelry, Collections ; Gift Guide, Education, Help | menus, liens | Adresses lues dans la page ; centre d'aide lu à part | — | Non ouverts (hors périmètre bague de fiançailles) |
| Icônes cœur, diamant, sac | liens, bouton | `/wishlist/`, `/comparison/` [R6], tiroir du panier | — | OK |
| Filters | bouton | Panneau latéral : 6 accordéons, 1 bascule, « Apply filters », « Clear filters » | — | OK |
| Stone shape → Marquise, puis « Apply filters » | filtre | Adresse `?shape=Marquise`, cartes de marquises | — | OK ; rien ne change sans « Apply » |
| Stone profile, Style, Collection, Stackable, Metal, Ship date | 6 accordéons | Options listées (voir Options) ; 4 options cochées sans être appliquées | — | Ouverture OK ; application non testée |
| Try at home | bascule | `&try_at_home=Available`, 15 cartes au lieu de 22 | — | OK |
| Clear filters | bouton | Retour à la liste complète | — | OK |
| « All Metals » | libellé | Rappel du filtre de métal en cours [I] | — | Non actionné |
| Quick Ship | bascule | `?ship=quick`, 10 montures | — | OK |
| Sort By (Recommended, Best Selling, Newest, Price ↓, Price ↑) | liste | Adresse `?sort=…` ; premier prix 950 $ (↑), 3 010 $ (↓) | — | OK (5/5) |
| Carte : pastilles YG, WG, RG, PL | 4 boutons | Lien de la carte (`colorkey`) et prix mis à jour | 2 560, 2 560, 2 960, 3 340 $ | OK |
| Carte : Share | bouton | Menu : Messenger (lien Facebook), Twitter, WhatsApp (`wa.me`), copier le lien | — | Liens lus, non suivis |
| Carte : cœur | bouton | Devient « Remove from Wishlist », sans compte | — | OK |
| Carte : liens (×22), « View More » | liens, bouton | Fiche ; 22 → 44 cartes | « 2 560 $ + » | OK |
| « Take the quiz » | lien | Typeform externe (croquis gratuit) | — | Non ouvert (formulaire) |
| Newsletter, « Subscribe! » | champ | — | — | Non testé (formulaire) |
| Bulle de chat | bouton | Widget Kustomer | — | Non ouvert (règle) |
| Fenêtre « Martinis on Frank » (e-mail contre cadeau) | fenêtre Klaviyo | Apparue à 3 chargements au moins, pas à tous ; se ferme | — | Intermittente ; a recouvert un clic de test |
| **Fiche monture [R2] (et [R3] quand précisé)** | | | | |
| Visionneuse 360° | canvas | 321 images par couleur ; tourne à la souris et au doigt ; compteur « 13 % » pendant le chargement | — | OK |
| Icône 360°, flèche (iPhone) | icône, bouton | Repère ; la flèche passe au média suivant [I] | — | Non actionnées |
| Galerie sous la visionneuse | 14 images, 1 vidéo | Vidéo de la bague sur une main (10 s, en boucle, par couleur) ; pas de zoom au clic | — | OK ; pas de zoom |
| Metal type (6 pastilles) | radios | Adresse `colorkey=YG, WG, RG, PL` ; images changées par couleur (pas par titre) ; mensualité recalculée | 14 k : 2 560 ; 18 k : 2 960 ; platine : 3 340 $ | OK |
| Ring size | liste | 3 à 13 par quarts ; sans taille, le bouton devient « Make selections », sans message | Aucun | OK |
| Ring size → « Send ring sizer » | option | Panier : « Size Ring Sizer » ; baguier gratuit envoyé avant fabrication | Aucun | OK |
| « ? » de la taille ; « ? » de la gravure | 2 infobulles | « Find the Perfect Fit » ; « A Special Message » (17 caractères, conseils de police) | — | OK |
| Diamond type [R2] | champ en lecture seule | « Lab Grown Diamonds » imposé (pavage) | — | Sans choix sur ce modèle |
| Diamond type [R3] | liste | Lab Grown ou Natural (pavage) ; image inchangée | +0 / +70 $ | OK |
| Band width [R3] | liste | 1,5 / 1,8 / 2,0 mm ; image et fiche technique inchangées | +0 / +100 / +200 $ | OK ; image non mise à jour |
| Engrave | bascule, champ, liste | Texte (compteur « 9/17 »), police Script ou Block ; pas d'aperçu | Gratuit | OK |
| Select this setting | bouton | Ajoute la monture, ouvre le panier, affiche le bloc de l'étape 2 ; devient « Added » | 2 560 $ | OK |
| Drop a Hint | lien | Fenêtre « Share the Sparkle » : Facebook, X, copier le lien ; l'icône Instagram mène au compte de la marque | — | OK ; liens non suivis |
| Try at Home | lien | « This try at home ring is currently unavailable » + champ e-mail | — | OK ; indisponible pour ce modèle |
| Add to Wishlist | lien | Devient « In Wishlist » | — | OK |
| « See if you qualify » (Affirm) | lien | À 1366 px, la bulle de chat recouvre le lien | — | Non obtenu (lien masqué) |
| Fit Details ; View More Details | 2 accordéons | 3 pictogrammes ; cotes de la monture, « Cannot be Resized » | — | OK |
| « Questions? Get in Touch » ; lien de collection « Trove » | liens | `/book-an-appointment/` ; liste filtrée | — | Lus, non suivis |
| Write A Review | bouton | Formulaire (texte, photos, nom, e-mail, reCAPTCHA) | — | Ouvert, non rempli |
| **Étape 2 : pierres [R4]** | | | | |
| Search stones for this ring | bouton | Liste : 52 073 ovales sur 286 401 pierres | — | OK |
| Continue with the default diamond stone | lien | Ajoute « Oval, 2 carats, Super Ideal, VS1-VS2 » ; « Ship Date TBD » | 2 400 $ (total 4 960 $) | OK |
| Type : Natural, Lab, Moissanite | 3 boutons | 7 794 / 44 284 / 5 ovales ; un second clic ne désélectionne pas | — | OK |
| Price ; Carat | 2 champs + double curseur | Carat 1 à 1,5 saisi : résultats réduits, état dans l'adresse | — | Carat OK ; Price ouvert, non appliqué |
| Shape ; Cut ; Clarity ; Color | 4 volets | Cut « Super Ideal » : 44 284 → 33 167 ; Color D : 14 491 ; Clarity VS1 : 2 718. Effet immédiat | — | OK ; Shape ouvert, non modifié |
| More filters (11 volets), Back | bouton | Polish, Symmetry, Fluorescence, Fancy color intensity, Crown angle, L/W ratio, Table, Depth, Grading lab, Ship date, See in person | — | Ouverts (11/11), non appliqués |
| Clear | bouton | Efface tout, y compris la forme imposée par la monture (286 401 résultats) | — | Fonctionne ; voir Défauts |
| Results (n) | bouton | Aucun effet visible | — | Sans effet |
| En-têtes Carat, Clarity, Color, Price | tri | Price : `sort=cost`, croissant puis décroissant | — | Price OK ; 3 autres non testés |
| Rows per page ; pagination | liste, 4 flèches | 50 lignes ; « 51-100 of 918 » | — | OK (suivant) |
| Ligne : diamant (comparer), cœur | 2 boutons | Pierre ajoutée à `/comparison/` et à `/wishlist/` (compteur à 1) | — | OK |
| Ligne : clic | dépliage | Photo, 8 caractéristiques, boutons | 1 336 $ (1,5 ct, F, VS1, IGI) | OK |
| Icône plein écran de la photo | bouton | — | — | Non testé (photo chargée après le passage du script) |
| Details | lien | Fiche de la pierre, nouvel onglet [R5] | — | OK |
| View Certificate | lien | PDF hébergé chez le fournisseur (`api.kiradiam.com` pour un IGI, `dnalinks.in` pour un GIA) | — | Lien lu, non ouvert |
| Add stone to setting | bouton | Ouvre le panier « Your Ring (Completed) » ; l'adresse perd les paramètres de la monture | 3 896,24 $ | OK |
| iPhone : bouton flottant « Filters » | volet | Tous les filtres en accordéons, aides « ? », « View results », « Clear » | — | Ouverture OK |
| **Fiche pierre [R5]** | | | | |
| Vidéo 360° (Vision360) | iframe | Film de la pierre, appelé par le numéro du rapport IGI : c'est donc la pierre vendue [I] | — | Chargée ; 2 fichiers en erreur 403 |
| Carat size (0,2 à 5 ct) | curseur | Le dessin de la pierre grossit sur un doigt (59 → 88 px à 5 ct) | Aucun | OK |
| Diamond Size, Color, Clarity, Cut, Supplier Standards | 5 accordéons | Explication de chaque note ; fournisseur noté « Level 2 » sur 4 | — | Lus |
| See Diamond IRL ; Compare ; Add to Wishlist | lien, 2 boutons | `/our-showrooms/` ; listes | — | Lus (listes testées depuis la ligne) |
| Get Notified (« Prices Updated Regularly ») | bouton | Aucune fenêtre relevée | — | Effet non observé |
| **Panier (tiroir)** | | | | |
| Edit (monture) | bouton | Fiche en mode modification : « Update setting », taille 6 reprise | — | OK |
| Change Stone | bouton | Retour à la liste, `mode=change` | — | OK |
| Remove (×2) ; Continue Shopping | boutons | — | — | Non actionnés (auraient vidé le panier) |
| Checkout | bouton | Désactivé sans pierre (« This ring is missing a stone ») ; actif ensuite | — | Non cliqué (règle : pas au-delà du panier) |
| Free Express Shipping, Free 30 Day Returns, Lifetime Warranty | 3 liens | Articles d'aide [R10][R12] | — | Lus |
| **Pages de service** | | | | |
| `/try-at-home/` : Continue | bouton | Étape 2 sur 4 : « You're looking for » (4 métaux ou sans préférence) | Gratuit | Étape 2 lue ; suite non testée (formulaire) |
| `/book-an-appointment/` : Book Appointment | bouton | Choix du lieu : 3 salles proches, « Explore All Locations », visio | Gratuit | Ouvert, non poursuivi |
| `/comparison/` : Share List ; `/wishlist/` : Share Wishlist | boutons | Share List : aucun effet relevé (copie du lien [S]) | — | Effet non observé ; Share Wishlist non actionné |

## Options disponibles

- **Métaux** (6) : or jaune 14 k et 18 k, or blanc 14 k et 18 k, or rose 18 k seulement, platine [V R2]. Alliages publiés, dont 10 % de nickel dans l'or blanc 14 k ; métal 100 % recyclé [V R16].
- **Tailles** : 3 à 13 (US) par quarts, soit 41 tailles, plus « Send ring sizer » [V R2]. **Largeur du corps** : 1,5, 1,8, 2,0 mm (Hidden Halo) ; fixe sur The Ripple (3 mm) [V R2][R3].
- **Pavage** : diamants synthétiques (E-F, VS) ou naturels (G-I, VS), non certifiés [V R3][R17]. **Gravure** : 17 caractères, Script ou Block, sans symboles [V R2].
- **Filtres des montures** : forme (14 : Oval, Emerald, Round, Radiant, Pear, Asscher, Marquise, Cushion, Elongated Cushion, Princess, Old European, Old Mine, Rose Cut, Trillion) ; profil (Medium, Low, Ultra Low) ;
  style (17 : Solitaire, Bezel, Three Stone, Hidden Halo, Cathedral, Diamond Details, Half Bezel, East West, Two Tone, Pave, Five Stone, Split Shank, Halo, Vintage Inspired, Cluster, Chunky, Nature Inspired) ;
  collection (15) ; empilable (Doesn't Stack, Small Gap, Stacks Flush) ; métal (4) ; essai à domicile ; date (Any, Quick Ship, 1er décembre, 7 décembre) [V R1].
- **Pierres** : naturel, synthétique (« Lab »), moissanite ; 14 formes ; Cut : Good, Very Good, Ideal, Super Ideal, Guaranteed Brilliant ; Clarity : Salt and Pepper, SI2 à FL ;
  Color : M à D, Fancy Brown, Champagne, Fancy Yellow, Fancy Pink, Fancy Blue ; carat 0 à 33 ; laboratoire : GIA, GCAL, IGI ; « See IRL » (visible en salle) [V R4].
- **Pierres de centre admises sur mesure** : diamant, saphir et rubis (naturels ou de synthèse), moissanite, émeraude et alexandrite de synthèse ; émeraude naturelle au cas par cas [V R17].
- **Vues** : 360° (images calculées ou photos, non établi), vidéo sur la main, 14 images, vidéo 360° de chaque pierre, simulateur de carats. Pas de 3D temps réel, pas d'AR, pas de zoom [V R2][R5].

## Prix, délais, retours, garanties

- **Affichage** : « Starting From 2 560 $ » = monture seule ; la pierre s'ajoute à l'étape 2 ; le panier additionne (2 560,00 + 1 336,24 = 3 896,24 $) [V].
  Aucune décomposition métal, façon ou marge. Prix au carat sur la fiche pierre (890,83 $) [V R5]. Pierres en promotion avec prix barré (5 067 → 4 343 $) [V R4].
- **Écarts par option** [V R3] : 18 k +330 $, platine +530 $ ; corps +100 $ par cran ; pavage naturel +70 $. Sur The Ripple : 18 k +400 $, platine +780 $ [V R2].
- **Sur Hidden Halo, le prix du bouton n'apparaît qu'une fois largeur et pavage choisis** [V R3].
- **Mensualité** : « Starting at $226/mo or 0% APR with Affirm », recalculée à chaque option et au panier (343 $/mois) [V R2].
- **Panier** : ni ligne de livraison, ni taxe, ni code promo, ni logo de paiement ; trois liens (livraison express gratuite, retours 30 j, garantie à vie) [V].
- **Paiement** (centre d'aide) : cartes, Shop Pay, PayPal, Apple Pay ; virement avec 1,5 % de remise ; Affirm et Shop Pay Installments (0 à 36 %) ; 3 % de frais pour changer de moyen après coup [V R13].
- **Délai** : date par variante sur la fiche (The Ripple : 15 décembre, soit 30 j ; Hidden Halo : 1er décembre, 7 décembre en or rose) et au panier [V R2][R3].
  Fabrication à la commande : environ 3 semaines ; sur mesure : 5 à 6 semaines ; urgence : 350 $ non remboursables, collection seulement [V R15].
- **Livraison** : gratuite, assurée, FedEx, signature possible ; États-Unis et plus de 70 pays, dont la France et **Israël** [V R10][R14]. Hors Canada, droits et taxes (5 à 25 %) perçus par la douane du pays [V R14].
- **Retours** : 30 j après la date « prête à expédier » ou 60 j après la commande, au premier terme ; 1 retour par 6 mois ; état neuf [V R10][R11].
  **Le sur-mesure et le gravé sont repris** [V R10][R11]. Exceptions : pierre taillée à la demande (500 $ de frais), frais de CAO et d'urgence, bagues provisoires, ventes d'échantillons ;
  certificat manquant 250 $ ; annuler en cours de fabrication vaut retour ; droits de douane non remboursés [V R11].
- **Mise à taille** : la première est gratuite dans les 90 j suivant la livraison ; ensuite 100 $ + port (100 $ pour le Canada, 300 $ ailleurs hors États-Unis) [V R12]. Limites : ± 2 tailles (solitaire 2 mm) à ± ¼ (triple pavage) ; certains modèles non retaillables, dont The Ripple [V R12][R2].
- **Garantie** : à vie contre les défauts de fabrication, hors pierre de centre et usure ; annulée si un autre bijoutier intervient [V R12]. Entretien annuel gratuit aux États-Unis (polissage, griffes, vapeur, rhodiage), port à la charge du client [V R12].
- **Échange de pierre** : diamants naturels GIA de couleur D à J seulement, nouvelle pierre au moins 2 fois plus chère, États-Unis seulement [V R17].
- **Certificats** : IGI (synthétique), GIA (naturel), GCAL en filtre ; lien sur chaque pierre [V R4][R5]. **Libellés** : « Lab Grown Diamonds », « Lab Diamond », « Lab » [V R2][R4].
- **Langue** : anglais seul (pas de `hreflang`). **Devise** : dollar seul à l'écran (« Price (USD) ») ; la page charge une table de taux de change, sans sélecteur visible [V R1][R4].
- **Corrections du dossier** : la retaille n'est pas « payante (100 $) » mais gratuite la première fois ; le site liste 14 salles, pas 5 ; les prix, délais et moyens de paiement « non relevés » sont ci-dessus.

## Confiance et service

- **Avis** : 4,9 sur 1 410 avis (système du site), tri par note, citations de presse (Vogue, WSJ, Bloomberg, The Knot) [V R8]. Fiche The Ripple : aucun avis ; Hidden Halo : 4,7 sur 7 [V R2][R3].
  Google, salle de Tribeca : 4,8 sur 960 avis ; les mots les plus cités sont « sketch », « CAD », « resin », « 3d printed » [V R19, sec.]. Un avis d'Austin décrit 3,5 mois de sur-mesure sans aboutir [V R19, sec.].
- **Salles** : 14, dont 3 à New York ; rendez-vous gratuits d'un type parmi 6 ; une sélection de pierres (« diamond flight ») est préparée avant la visite [V R9][R7]. Le centre d'aide cite 11 villes [V R18].
- **Contact** : chat Kustomer, SMS 646-567-2408, téléphone (646) 859-0718, e-mail ; pas de WhatsApp de contact (seulement un partage `wa.me`) [V R1][R10].
- **Essai à domicile** : 3 répliques en argent et oxyde de zirconium, taille 6,5, 5 jours, 450 $ si non rendu, 100 $ de remise ensuite [V R15]. Bague provisoire de demande en mariage : 300 $, 100 $ de crédit [V R15].
- **Sur mesure** : quiz, croquis gratuits, échanges par e-mail, pierre choisie sur photos et vidéos, modèle 3D sous une semaine après commande, prototype imprimé en 3D sur demande, 3 semaines de fabrication [V R15].
  Dès 2 000 $, sans frais de création ; 2 séries de retouches incluses ; changer de modèle : 350 $ [V R15].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier. Texte : « lovingly put together by local craftsmen », « here in NYC » [V R9]. Suivi : e-mails « entre en production » et « prête », puis lien FedEx ; pas de page de suivi [V R15].
- **Refus** : pierres du client et pierres de famille (« does not work with heirloom stones »), monture vendue sans pierre [V R17]. **Poinçons** : titre et marque de l'atelier [V R16].
- **Outils tiers** : Kustomer, Klaviyo, Affirm, Algolia, Typeform, Vision360, reCAPTCHA [V R1][R2][R5].

## Temps d'apparition du visuel principal

| Page | Ordinateur | iPhone 13 émulé |
|---|---|---|
| Fiche monture [R2], première image du 360° dessinée | 2,3 et 3,1 s | 1,7 et 2,5 s |
| Fiche monture [R2], 360° complet (321 images) | 7,9 et 12,4 s | 7,2 et 7,8 s |
| Fiche pierre [R5], cadre de la vidéo 360° présent | 2,4 s (1 mesure) | Non mesuré |

Deux mesures par appareil, Chromium sans tête, cache vide, sans bridage de réseau. À ne pas comparer à un vrai téléphone en 4G.

## Points forts à retenir pour JR Diamond

1. **Un panier qui attend la pierre.** Preuve : « Your Ring (Add a Stone) », paiement désactivé, puis « (Completed) » ; « Edit » et « Change Stone » rouvrent l'étape avec les choix repris [V].
2. **La taille inconnue ne bloque pas.** Preuve : option « Send ring sizer » dans la liste des tailles, baguier gratuit avant fabrication [V R2]. Effort faible pour JR Diamond.
3. **Une pierre par défaut en un clic.** Preuve : « Continue with the default diamond stone », 2 ct à 2 400 $ [V R2]. Utile tant que la grille de pierres n'est pas en ligne ; indiquer la date, que Frank Darling laisse « TBD ».
4. **Date et mensualité recalculées par variante.** Preuve : 1er décembre, mais 7 décembre en or rose 18 k ; 114 → 143 → 160 $/mois [V R3].
5. **Fiche technique chiffrée de la monture.** Preuve : largeur, hauteurs, poids des pierres latérales, « Cannot be Resized », pictogrammes d'empilage et de profil [V R2]. JR Diamond a ces cotes dans le fichier de fabrication, et le poids du métal en plus.
6. **La pierre elle-même filmée, plus un simulateur de taille.** Preuve : vidéo 360° appelée par le numéro du certificat ; curseur de 0,2 à 5 ct sur un doigt [V R5]. C'est la promesse « pierre filmée » de JR Diamond, déjà attendue par ce public.
7. **Filtres de pierres à effet immédiat, état dans l'adresse.** Preuve : 44 284 → 918 pierres en 4 choix, adresse partageable ; filtre « See IRL » [V R4].
8. **Prototype avant fabrication.** Preuve : rendu 3D ou prototype imprimé, croquis gratuits [V R15] ; « resin » et « 3d printed » parmi les mots les plus cités des avis [V R19, sec.]. JR Diamond peut tirer la réplique du même fichier [I].
9. **Le sur-mesure reste repris, avec des frais nommés.** Preuve : retours ouverts au sur-mesure et au gravé ; 500 $, 350 $, 250 $ selon le cas [V R11]. Repère pour l'exception « fabriqué sur mesure » en Israël.
10. **Alliages publiés.** Preuve : six compositions au pour-cent près [V R16]. JR Diamond peut faire de même ; l'or blanc au nickel est un point à vérifier pour la France [S].
11. **Ce que Frank Darling ne fait pas.** Preuve : pas de pierre de famille, pas de photos d'atelier, 360° qui ne suit pas les options [V R17][R9][R3]. Trois promesses de JR Diamond.
12. **Concurrent direct en Israël pour les anglophones.** Preuve : Israël dans la liste des pays livrés, droits perçus à l'arrivée [V R14]. Un prix en ₪ TTC est un avantage lisible [I].

## Défauts observés

- **La bulle de chat masque des éléments utiles** : le lien Affirm à 1366 px ; le prix « Starting From » au premier écran sur iPhone [V R2].
- **iPhone** : pastilles de métal de 14 × 14 px ; bouton d'achat à 942 px pour un écran de 664 px, non fixe ; l'icône du panier porte l'adresse `/engagement-rings/[slug]/` (404 en préchargement) [V R2].
- **Les options ne changent pas l'image** : largeur du corps et type de pavage ; la fiche technique reste à « 1.5 mm » [V R3]. Le 360° ne suit que la couleur du métal.
- **« Clear » retire aussi la forme imposée par la monture** : 286 401 pierres de toutes formes pour une monture ovale [V R4]. Risque de pierre incompatible, non testé [I].
- **Recherche** : la touche Entrée ajoute `?search=marquise` à la page en cours sans afficher de résultat ; requête Algolia en 404 (1 essai, depuis `/how-it-works/`) [V R9].
- **Taille oubliée** : le bouton devient « Make selections », sans désigner le champ manquant [V R2]. **Bouton « Results (n) »** sans effet [V R4].
- **Essai à domicile indisponible** pour le modèle audité : champ e-mail à la place [V R2]. **Pierre par défaut** : « Ship Date TBD » [V].
- **Fenêtre promotionnelle intermittente** qui recouvre la page ; police en 404 sur plusieurs pages ; erreur React n° 418 relevée 5 fois entre la fiche pierre, le panier et les listes ; 2 fichiers de la vidéo 360° en 403 [V R1][R5].
- **Vignette générique de la pierre au panier** (`oval.png`), pas la pierre choisie [V]. **Certificat servi par le domaine du fournisseur**, pas par IGI ou GIA [V R4].
- **Textes contradictoires** [V] : horaires 9 h à 21 h (centre d'aide) ou 10 h à 18 h (pied de page) [R10] ; 14 salles, 11 villes ou 3 [R7][R18] ; « over 20,000 » pierres contre 286 401 [R9][R4] ;
  retaille « within 90 days of delivery » ou « of purchase » [R12].
- **Divers** : le lien « Lab Grown Diamonds » du pied de page pointe vers `/7-reasons-not-to-buy-a-lab-grown-diamond/` (page non lue) [R1] ; « brilliiance » dans la description [R2] ; fluorescence vide [R5] ; bouton « Remove from cart » dans la comparaison [R6] ; images de l'en-tête nommées `Gemini_Generated_Image_…` [V], donc sans doute générées par IA [I].

## Limites de l'audit

- **Paiement non ouvert** (règle). Frais, taxes et moyens de paiement réels : non vus ; ils viennent du centre d'aide [R13].
- **Non testés** : formulaires (newsletter, essai à domicile, avis, rendez-vous, quiz Typeform), chat, téléphone, liens de partage externes, boutons « Remove », menus hors fiançailles, alliances.
- **Sans effet observé** : fenêtre Affirm (lien masqué), « Get Notified », « Share List » ; une seule tentative chacun. Non actionnés : « Share Wishlist », plein écran de la photo de pierre.
- **Saisies faites** : « Test 2026 » dans la gravure (effacé, non ajouté au panier), « marquise » dans la recherche, 1 et 1,5 dans le filtre de carats. Aucune donnée personnelle.
- **Échantillon** : 2 montures, 1 fiche de pierre synthétique, 1 ligne de pierre naturelle. Les comptes de pierres bougent dans la journée (43 931 puis 44 284 ovales synthétiques).
- **Nature des images** : rendu ou photo pour le 360° et la vidéo sur la main, non établi. Fréquence de la fenêtre promotionnelle : non mesurée.
- iPhone émulé dans Chromium, pas Safari ; adresse IP américaine : prix et douane vus d'Israël ou de France non testés. Crédits Firecrawl épuisés : centre d'aide lu dans le navigateur.

## Sources (15/11/2026)

- [R1] https://www.frankdarling.com/engagement-rings/ · [R2] https://frankdarling.com/engagement-rings/the-ripple-oval/?colorkey=YG · [R3] https://frankdarling.com/engagement-rings/hidden-halo-oval/?colorkey=YG
- [R4] https://frankdarling.com/diamonds/?shape=Oval&show_grid=true&ring_id=9676462850287&variant_id=51023265726703&ring_size=6 (étape 2 ; sans paramètres : entrée par la pierre)
- [R5] https://frankdarling.com/diamonds/diamond-100756918637KD/ · [R6] https://frankdarling.com/wishlist/ · https://frankdarling.com/comparison/
- [R7] https://frankdarling.com/book-an-appointment/ · https://frankdarling.com/our-showrooms/ · https://frankdarling.com/try-at-home/ · [R8] https://frankdarling.com/brand-reviews/ · [R9] https://frankdarling.com/about/ · https://frankdarling.com/how-it-works/
- Centre d'aide, `https://help.frankdarling.com/en_us/` + : [R10] `free-shipping-and-returns-Sk_l0pNSbl` (et accueil du centre) · [R11] `what-is-your-return-policy-for-finished-jewelry-Bkquhcz1Zl` · `is-my-item-returnable-if-its-engraved-BJF7RrIJZl`
- [R12] `90-day-free-resizing-SJzfMIMyl` · `how-much-can-i-resize-my-ring-rJqJQUMJl` · `what-is-your-warranty-policy-HJbj_9Gkbg` · `what-is-your-complimentary-care-plan-H1Bvc_zkWx` · `how-do-i-determine-my-partners-ring-size-HyNFg8IJZx`
- [R13] `flexible-payment-options-ryvevNt8Wl` · `do-you-offer-financing-HkNKo_fyx` · `why-did-frank-darling-discontinue-the-price-match-guarantee-SJAzhdMkbe` · [R14] `where-does-frank-darling-ship-SyNC1FIkbe` · `do-i-have-to-pay-duties-and-taxes-SJYLr_zyWg`
- [R15] `how-does-the-custom-design-process-work-BkQLAdMkbl` · `how-long-does-it-take-to-make-a-ring-rJX11UIke` · `can-i-request-a-rush-SJh83uGJZx` · `how-do-i-track-my-order-BJegW_8kbg` · `what-is-your-try-at-home-program-B1v7Eqzkbx` · `what-are-placeholder-rings-Hk433Oz1Wl` · `is-there-a-minimum-spend-for-custom-orders-BkW7adMkWl` · `how-do-design-revisions-work-S132Rdzyx`
- [R16] `what-metals-do-you-use-H1oPkcf1Wg` · `why-are-there-stamp-marks-on-my-piece-HkpNmvUJx`
- [R17] `can-i-use-my-own-diamond-or-heirloom-stone-SJyvTuG1Zx` · `can-i-purchase-a-setting-without-a-center-stone-S1N3h4SCZg` · `what-color-and-clarity-do-you-use-for-accent-diamonds-BJjTVYDwx` · `which-diamond-and-gemstone-types-does-frank-darling-work-with-rJwLeYGyl` · `does-frank-darling-offer-a-diamond-upgrade-program-B1no_uzJWe`
- [R18] `frank-darling-showroom-locations-Hynz6BUyWx` · [R20] https://frankdarling.com/robots.txt (help.frankdarling.com : pas de `robots.txt`)
- [R19, sec.] https://goo.gl/maps/8eVRkXuCYagcV1vA7 (Google, Tribeca) · https://www.google.com/maps/place?q=place_id:ChIJ-fXr24K1RIYRHZqsA_ibdDo (Google, Austin), lus par un moteur de recherche
- Scripts, relevés JSON et 20 captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/frank-darling/`
