# Audit FashionGold.lt (Vilnius)

- **Site** : FashionGold.lt (UAB Orknis) · **Adresse** : https://fashiongold.lt/ · **Page de départ** : https://fashiongold.lt/konfiguratorius/
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1440 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Le visualiseur est audité à fond. Les prix par variante et le panier n'ont pas pu être atteints : le serveur est devenu très lent (délais de 45 à 90 s, accueil en 30 s) pendant les essais. Il ne bloquait pas : la page répondait (HTTP 200) avec retard. Je n'ai pas insisté.
- Légende : **[V]** vérifié · **[I]** inféré · **[S]** supposé.

## Parcours
| Étape | Options |
|---|---|
| 1. Visualiseur « Žiedo konfigūratorius » | monture (4) → métal (3) → forme (12) → taille de pierre (9) ; unité mm ou carats ; zoom ; menu burger [V] |
| 2. Choix d'un modèle | catalogue de bagues (ex. blanc : 672 produits) → fiche à options [V] |
| 3. Fiche produit (Rose 0,15 ct) | taille de doigt, couleur d'or, taille de pierre, titre, type de diamant → « Į krepšelį » ou « Pirkti dabar » [V] |
| 4. Sur mesure | « AI Juvelyras » (croquis par IA), 3D avec joaillier (3D sous 24 h à partir d'une photo), réservation de rendez-vous [V : liens lus, pages non parcourues] |

## Contrôles vérifiés
Visualiseur (page /konfiguratorius/). Les fonds de colonne sont des éléments glissables (jQuery UI), actionnés par clic.
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Colonne 1, 4 icônes de monture (classes `first` à `fourth-style`) | sélecteur vertical | change la monture sur le doigt : solitaire, solitaire à petites pierres latérales, halo, halo à pierres sur l'anneau [I d'après les icônes] | aucun prix | OK, 4/4 cliqués [V] |
| Colonne 2, 3 pastilles de métal (`red-gold`, `simple-gold`, `white-gold`) | sélecteur | change la couleur de l'anneau (rose, jaune, blanc) sur la photo | aucun | OK, 3/3 [V] |
| Colonne 3, 12 formes (round, pear, heart, princess x4, oval, emerald x2, radiant, round-second) | sélecteur | change la forme de la pierre ; captures prises | aucun | OK, 12/12 cliqués [V] |
| Colonne 4, 9 tailles 5,00 à 9,00 mm | sélecteur | agrandit la pierre sur la main ; la taille ne se choisit pas séparément de la forme | aucun | OK, 9/9 [V] |
| « Matavimo vienetas » : Milimetrai / Karatai | menu | passe les tailles en 0,50 / 0,75 / 1,00 / 1,25 / 1,50 / 1,75 / 2,00 / 2,50 / 3,00 ct | aucun | OK [V] |
| Zoom + et − (coin bas gauche) | bouton | agrandit la main et la bague (capture avant/après) | aucun | OK pour + ; − non vérifié séparément [V/I] |
| Bouton burger (≡) | bouton | ouvre la fiche de la forme choisie (ex. « Round (apvalios) formos deimantas », texte, taille) et un lien « Skaityti daugiau » vers l'article de la forme | aucun | OK [V] |
| Fond : main photo | image | pas de changement de peau ni de main ; pas de vidéo, 360°, 3D, AR | — | Absent [V] |
| Prix, devis, panier, partage, enregistrement dans le visualiseur | — | **aucun** : l'outil montre la pierre sur la main sans prix ni bouton d'achat (marque « TOPDIAMONDS.ONLINE » sur l'image : outil tiers [V]) | aucun | Absent [V] |
| Version mobile (classes `-mobile`) | sélecteurs | mêmes quatre colonnes ; rendu iPhone chargé (capture) ; clics mobiles non actionnés | — | Non testé |

Barre de navigation et services (liste relevée par controls.cjs, 95 contrôles) :
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Susikurk tobulą sužadėtuvių žiedą » | lien | /pradeti-nuo-dizaino/ (page de départ du sur mesure, à lire) | — | Lien lu, 200 [V] |
| « AI Juvelyras » | lien | /ai-juvelyras/ : décrit un croquis généré par IA | — | Page lue, outil non actionné |
| « Sukurti 3D dizainą su juvelyru » | lien | /sukurti-3d-dizaina-su-juvelyru/ : « 3D en 24 h, envoyez une photo » | — | Lue, formulaire non rempli |
| Mesureur de taille en ligne | lien | /ziedu-dydziu-matuoklis/ | — | Non ouvert |
| Essayage virtuel (« matuotis-zieda ») | lien | ancre /#matuotis-zieda, photo sur sa main | — | Non testé |
| Rendez-vous (calendrier) | lien | /rezervacijos/ (formulaire) | — | Non rempli |
| Téléphone, WhatsApp | liens | `tel:+37067950000` pour les deux (WhatsApp n'ouvre pas wa.me mais un appel [V]) | — | Non appelés |
| Bulle verte WhatsApp | bouton flottant | présent à l'écran ; non ouvert | — | Non testé |
| Liste de souhaits (cœur) | lien | /patinka-wishlist/ | — | Non testé |
| Langue (drapeau) | menu | LT, EN, LV, ET, PL, RU | — | Présent [V] |
| Panier (0) | lien | panier vide | — | Voir plus bas |
| Cookies (CookieYes) | boutons | « Pritaikyti / Atmesti / Priimti viską » ; j'ai cliqué « Atmesti » | — | OK |
| Newsletter (MailerLite) | champ + « Siųsti » | non rempli | — | Non testé |

Fiche produit « Sužadėtuvių žiedas su deimantu – Rose (0,15 ct) » :
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Žiedo dydis : 14 à 20 par 0,5, ou « Nežinau dydžio / Patikslinsiu vėliau » | boutons | choix de taille, 14 valeurs plus l'option « taille inconnue » ; 16,5 par défaut | non constaté | OK [V] |
| Aukso spalva : Baltas, Geltonas, Raudonas | boutons | la galerie compte aussi des vues jaunes ; le défaut est blanc | non constaté | OK [V] |
| Deimanto dydis : 0.01 - 0.19 ct | bouton | une seule valeur | — | OK [V] |
| Praba / Metalas : 14 K (585), 9 K (375) | boutons | la description mentionne aussi 10 K, 18 K et platine 950 « sur demande, avec supplément » | prix affiché en fourchette 410,00 à 931,50 € | OK, 18 K et platine absents des boutons [V] |
| Deimanto tipas : « Laboratorijoje užauginti deimantai » / « Naturalūs deimantai » | boutons | le bouton d'achat s'active après le choix de cette dernière option | fourchette 410 à 931,50 € ; **le prix d'une variante n'a pas été relevé** (la zone d'affichage est restée vide dans mes lectures) | Non vérifié |
| IŠVALYTI | lien | réinitialise (non actionné) | — | Non testé |
| Į KREPŠELĮ / PIRKTI DABAR | boutons | activés après les 5 choix ; **clic fait sur « Į krepšelį » : aucune confirmation lue, la page restait sur la fiche** ; le panier n'a pas pu être ouvert (délai dépassé) | — | Non concluant |
| Onglets : Aprašymas, Įpakavimas, Skubi gamyba, Personalizavimas, Garantijos, Pristatymas | onglets | présents ; seule la description a été lue | — | Partiel |
| Pridėti į norų sąrašą | lien | — | — | Non testé |

## Options disponibles
- **Monture** (visualiseur) : 4. **Métal** : jaune, blanc, rose. **Formes** : 12. **Tailles** : 5 à 9 mm, ou 0,50 à 3,00 ct.
- **Fiche Rose** : tailles de doigt 14 à 20 (pas de 0,5) ; or blanc, jaune, rose ; 14 K ou 9 K ; diamant de laboratoire ou naturel ; pierre 0,01-0,19 ct.
- **Fabrication sur demande** (texte de fiche) : 10 K, 14 K, 18 K, platine 950 ; gravure gratuite ; diamants noirs, rubis, saphir, émeraude (catégories du menu) [V : intitulés de menu].
- **Prix de catalogue lu** (catégorie or blanc, tri croissant) : à partir de 364,50 € (halo, pierres noires 0,04 ct) ; 391,50 € (0,02 ct) ; 410 à 931,50 € (Rose) ; 450 à 690 € (Diamond 0,10 ct) [V, liste du 15/11].

## Prix, délais, retours, garanties
- **Prix** : en euros, TVA incluse [I], fourchette à partir de 364,50 € ; pas de décomposition du prix (matière, façon, marge) [V]. Le visualiseur n'a aucun prix.
- **Délai** : alliances « 14 jours ouvrés » (bandeau) ; stock en magasin 1 à 2 jours ouvrés ; commande hors stock 10 à 14 jours ouvrés après paiement ; sur mesure « jusqu'à 1 mois » (page Livraison/Retours) ; la FAQ annonce 3 à 21 jours ouvrés [V : /pristatymas-ir-grazinimas/ ; FAQ lue dans un résumé de recherche, I].
- **Livraison** : gratuite en Lituanie, colis assuré ; UE environ 30 à 40 € en 3 à 5 jours ouvrés ; retrait gratuit à Vilnius [V].
- **Retours** : 14 jours à compter de la réception ; **les bijoux faits sur mesure ne sont pas repris** ; remise du produit non porté, avec emballage et certificat ; remboursement sous 3 jours ouvrés après contrôle de 5 jours ; mise à taille gratuite (modèles standards) [V].
- **Garanties** : onglet « Garantijos » présent, texte non lu ; la page livraison dit que tous les produits sont garantis [V/I].
- **Certificats** : « GIA, HRD, IGI et Lietuvos Prabavimo rūmai » (bandeau) ; poinçon de l'office des poinçons lituanien [V]. Seuil de certification non relevé.
- **Libellé du synthétique** : « laboratoriniai deimantai » et « laboratorijoje užauginti deimantai » ; arguments « écologique », « jusqu'à 60 % moins cher » (affirmation du vendeur, [S]).
- **Paiement affiché** (/apmokejimas/) : virement, Paysera, Montonio (virement bancaire en ligne et carte), Apple Pay, Google Pay, cryptomonnaies (BTC, ETH, USDT), ESTO (crédit), espèces en boutique ; « achat en 3 fois sans frais » (bandeau) [V].
- **Devise et langues** : euro ; LT, EN, LV, ET, PL, RU [V].

## Confiance et service
- Salon à Vilnius (Pamėnkalnio g. 5), rendez-vous en ligne, téléphone, WhatsApp, e-mail info@fashiongold.lt, consultation à distance (visio ou e-mail) [V].
- « 33 ans d'expérience » (bandeau) ; équipe présentée (/fashiongold-komanda/) ; page « Atlikti darbai » (réalisations) ; séminaires sur le diamant [V : intitulés de liens].
- Emballage gratuit avec certificat, gravure gratuite, échange de taille gratuit [V].
- Avis clients : aucun relevé sur les pages lues [V pour les pages vues].
- **Preuves de fabrication** : pas de photos ou vidéos d'atelier par commande relevées ; une « 3D en 24 h » avant fabrication est annoncée [V pour l'annonce] ; suivi de commande non constaté.

## Points forts à retenir pour JR Diamond
1. **Visualiseur sur la main** (4 montures, 12 formes, 9 tailles en mm ou en ct) : la taille de pierre se montre à l'échelle de la main, ce qui parle aux acheteurs. Preuve : captures `conf_d.jpg`, `after_size.jpg` ; clics 12/12 et 9/9.
2. **« 3D sous 24 h » à partir d'une photo + joaillier** : promesse de visuel avant fabrication, proche de la promesse « ce que vous voyez existe ». Preuve : bandeau de l'accueil et lien /sukurti-3d-dizaina-su-juvelyru/.
3. **Paiement en 3 fois sans frais, ESTO, Apple Pay, crypto** : large offre de paiement. Preuve : /apmokejimas/.
4. **Retours clairs et exception du sur mesure annoncée** : 14 jours, sur mesure exclu, mise à taille gratuite. Preuve : /pristatymas-ir-grazinimas/.
5. **Option « taille inconnue » sur la fiche** : évite de bloquer l'achat ; JR Diamond peut l'imiter avec le guide des tailles. Preuve : fiche Rose, bouton « Nežinau dydžio ».
6. **Bandeau de réassurance tournant** (certificats, délai 14 jours, gravure et livraison gratuites). Preuve : bandeau vert, texte changeant à chaque page.

## Défauts observés
- Le visualiseur est **déconnecté du prix et de la commande** : aucune ligne de prix, aucun bouton d'achat, aucun partage (V).
- Le prix de la fiche reste une fourchette (410 à 931,50 €) tant que les options ne sont pas toutes choisies ; la variante n'a pas été lue dans mes essais (non vérifié).
- Plusieurs messages promotionnels répétés (le même bloc de 20 liens apparaît trois fois dans le HTML), page d'accueil de 0,9 Mo, accueil très lent aux dernières mesures (jusqu'à 30 s) [V].
- Le visualiseur n'a pas de 3D tournante : une photo de main et des calques ; la forme à l'écran n'est pas la bague réelle vendue [V/I].
- Sélecteurs de colonne sans libellé texte, difficiles pour un lecteur d'écran [I].

## Limites de l'audit
- Panier non atteint ; prix par variante non relevés ; « Į krepšelį » sans confirmation lue ; chat, WhatsApp, ESTO, rendez-vous, AI Juvelyras non actionnés (règles : aucun formulaire, aucune conversation).
- Visualiseur testé sur ordinateur seulement ; l'affichage iPhone a été chargé sans actionner les commandes `-mobile`.
- Temps de chargement : voir ci-dessous (une mesure par appareil, serveur lent ce jour).
- **Mesures** : visualiseur : chargement (DOM) 5,8 s environ puis rendu complet à 6 s de plus, identique sur ordinateur et iPhone (11,8 s et 11,0 s en tout) ; fiche produit : première image de la galerie à 4,5 s (ordinateur) et 4,5 s (iPhone).

## Sources
https://fashiongold.lt/konfiguratorius/ · https://fashiongold.lt/pristatymas-ir-grazinimas/ · https://fashiongold.lt/apmokejimas/ · https://fashiongold.lt/kategorija/balto-aukso-suzadetuviu-ziedai/ · https://fashiongold.lt/papuosalas/suzadetuviu-ziedas-su-deimantu-rose-015-ct/ · https://fashiongold.lt/pradeti-nuo-dizaino/ · https://fashiongold.lt/ai-juvelyras/ · https://fashiongold.lt/sukurti-3d-dizaina-su-juvelyru/ · https://fashiongold.lt/robots.txt · résumé de recherche de la FAQ : https://fashiongold.lt/en/frequently-asked-questions-faq
