# Audit : Knox Jewelers (Minneapolis, Minnesota)

- **Site** : Knox Jewelers, https://www.knoxjewelers.biz/
- **Page de départ** : https://www.knoxjewelers.biz/design-your-own-ring.htm
- **Date** : 15/11/2026 (mesures refaites le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. Pas de configurateur en ligne ni de panier : le site est un catalogue (prix « sans la pierre centrale ») qui renvoie au téléphone, au chat et au formulaire de devis. Tous les chemins ouverts sont autorisés par `robots.txt` (seuls `/includes/`, `/cgi-bin/`, etc. sont interdits). Formulaires non remplis, chat non ouvert.

Marquage : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Parcours

| Étape | Options |
| --- | --- |
| 1. « Design Your Own Ring » | Page de texte. Deux entrées : formulaire « Design My Own » (`/customform.htm`) ou bouton « Ask Question » d'une fiche [V] |
| 2. Choix d'une base | Collections par style : micro-pavé, halo, antique, filigrane, solitaire, trois pierres, saphir, etc. (`/categories/…`) ; ou conception libre [V] |
| 3. Fiche bague (ex. « Venita », `/products/venita`) | Taille de doigt (3,0 à 10,5 par 0,25), métal (6 choix) ; prix « not including center stone » [V] |
| 4. Pierre centrale | Recherche de diamants `/diamonds.htm` : naturel, synthétique (« Lab Grown »), moissanite, CanadaMark, couleur fantaisie [V] |
| 5. Commande | **Pas de panier** : « To order, please call us at 612-823-8752 or use our live chat » (`/howtoorder.htm`) [V] |
| 6. Devis sur mesure | Formulaire (budget minimum 1 000 $), acompte de conception 500 à 800 $, 3D soumise à validation [V, `/customdesigns.htm`] |
| 7. Fabrication | « Creation of an Heirloom » : photos de l'avancement envoyées par e-mail [V] |

## Contrôles vérifiés

Page de départ : 34 contrôles sur ordinateur, 14 sur iPhone (le menu et l'en-tête sont repliés). Fiche Venita : 78 ordinateur, 58 iPhone. Recherche de diamants synthétiques : 41 ordinateur, 21 iPhone.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Menu : ENGAGEMENT RINGS, WEDDING BANDS, STACKABLE RINGS, DIAMONDS, GEMSTONES, GIFTS, DESIGN YOUR OWN RING | liens | Pages de catalogue ; « Design Your Own Ring » = page de texte, aucun outil | – | relevés ; DIAMONDS et fiche suivis |
| Recherche « Search by Keyword… » + « Go » | champ + bouton | Non actionné (recherche) | – | non testé |
| « Design My Own form » / customform.htm | lien | Formulaire : référent, nom, e-mail, téléphone, taille, métal, pierre centrale (type, forme, poids, dimensions, qualité), pierres latérales, délai, budget, description, case « I Accept » [V] | « custom job minimum is $1000 » | page lue, formulaire non rempli |
| Open by Appointment / Appointment | lien | Page de rendez-vous : lieu Minneapolis, motif (fiançailles, alliances, sur mesure, cadeau, mise à taille, réparation, nettoyage), calendrier, créneaux 10 h 30 à 18 h 30 [V] | gratuit | page lue, rien envoyé |
| Leave us a message | lien `#` | Ouvre le chat/message (non ouvert) | – | non testé |
| Creation of an Heirloom | lien | Page décrivant les photos de fabrication | – | relevé, non suivi |
| Platinum vs White Gold, recycled gold, heirloom quality | liens | Pages d'information | – | relevés |
| Finger Size (fiche) | select | 31 valeurs, de 3.0 à 10.5 par 0,25 ; requête `finger_metal_stone.php` à chaque choix [V] | Platinum sans taille : « Price: Please Select Finger Size » ; avec taille : prix affiché | fonctionne |
| Metal Type (fiche) | select | 14k blanc / jaune / rose, 18k blanc / jaune, platine ; le bloc d'infos change le libellé (« 950 Platinum Ruthenium ») [V] | 14 k : 3 590 $ (les 3 teintes identiques) ; 18 k : 4 190 $ (blanc et jaune) ; platine : 4 390 $ (taille 6,5) [V] | fonctionne, prix mis à jour sans rechargement |
| Image principale (lien `large_image.jpg`) | lien | Clic : ouvre une surcouche d'image (présence d'un composant lightbox [I]) ; galerie de 4 vignettes [V] | – | fonctionne |
| ASK QUESTION | lien | Mène à `/askquestion.htm?rn=2383` | – | relevé, non suivi |
| TRY BEFORE YOU BUY | lien | Fenêtre `/trybeforeyoubuypopup.htm` ; programme décrit sur `/try-before-you-buy.htm` | 100 $ par bague (voir plus bas) | page lue |
| 1.50 ct Cushion (lien « Center Stone ») | lien | Mène à la liste de diamants filtrée forme Cushion, 1,4 à 1,6 ct | – | relevé |
| Additional charges may apply | lien | `/stonesetting.htm` (frais de sertissage) | – | relevé |
| Partager (pin, e-mail à un ami) | liens | `selectPinImage(...)`, `/emailfriend.htm` | – | non testé |
| See all reviews | lien | Google Maps avis de l'établissement | – | non suivi |
| Diamond search : cases de forme (9) | cases | Rond, coussin, ovale, princesse, asscher, émeraude, poire, marquise, radiant [V] | – | relevées |
| Diamond search : Color (D-L), Clarity (FL-I2), Carat, Price, Cut, Cert | listes/champs | Plages min/max ; carat 0,30 à 41,48 ct ; prix 300 à 400 000 $ [V] | – | fonctionnent |
| Diamond search : type (Lab Grown, Earth Mined, Moissanite, CanadaMark) | boutons | Filtre « Lab Grown » actif par l'adresse ; requête AJAX `diamonds.php` [V] | – | fonctionne |
| Tri : Price/Weight/Shape/Color ASC/DESC | select | « Price: DESC » : 324 740 $ en tête (rond 9,02 ct GIA) [V] | – | fonctionne |
| Clarity min VS2 | select | Liste refiltrée (les 10 premières lignes sont VS2) [V] | – | fonctionne |
| Vue List / Tiles | select | Non actionné | – | non testé |
| COMPARE (par ligne) | bouton | Non actionné ; le panneau « COMPARE » existe | – | non testé |
| DETAILS (31 lignes) | bouton | Un clic n'a ni changé l'adresse ni affiché de panneau repéré dans le texte de page ; effet non déterminé [V] | – | non concluant |
| RESET | lien | Réinitialise (non actionné) | – | non testé |
| Téléphone 612-823-8752, 1-888-347-4493 | texte | Affichés ; pas de lien `tel:` relevé sur la page de départ | – | non testé |
| Add to cart | – | **Absent** : pas de fonction panier | – | sans objet |
| Zoom, 360°, 3D, vidéo, AR, sur la main | – | Aucun mode relevé sur la fiche (photos seulement) [V] | – | absents |

## Options disponibles

- **Métaux** (page de départ et fiche) : platine 950 ruthénium ; or 14 k et 18 k blanc ; or 14 k et 18 k jaune ; or 14 k rose [V]. Page de devis sur mesure : en plus 14k X1 white, 14k et 18k palladium white, pas de métal fourni par le client [V]. Or et platine 100 % recyclés [V, page de départ].
- **Taille de doigt** : 3,0 à 10,5 par 0,25 ; fabrication au 1/8 ; mise à taille gratuite 12 mois ; bagues de mesure en plastique envoyées [V].
- **Pierres** : diamant naturel (« Earth Mined »), synthétique (« Lab Grown »), moissanite Charles & Colvard, CanadaMark, couleur fantaisie, gemmes [V].
- **Formes** : rond, coussin, ovale, princesse, asscher, émeraude, poire, marquise, radiant [V].
- **Filtres diamants** : forme, couleur, pureté, carat, prix, taille (cut), certificat, type, rapport L/l (`ratioA`), colonnes profondeur et table [V].
- **Certificats observés** : IGI, GIA, GCAL sur la liste synthétique [V].
- **Pas d'option de gravure, de griffes, de pavage ni de corps de bague** sur les pages lues ; ces choix passent par le dessinateur [I].

## Prix, délais, retours, garanties

- **Prix affiché** : prix de la monture seule, « not including center stone » ; majorité des prix en or blanc 14 k (« standard alloy ») [V]. Aucun total monture + pierre en ligne [I]. Les prix de bagues varient avec le métal et la taille (voir tableau). Prix des diamants affiché ligne par ligne (ex. 0,52 ct G VS2 IGI synthétique à 395 $) [V].
- **Pas de rabais** (« not able to offer discounts ») et prix expliqué par le modèle artisanal [V, `/pricing.htm`]. Devis écrit valable 2 semaines [V].
- **Délai** : 6 semaines (fiche Venita) ; sur mesure : 4 à 5 semaines après validation du dessin [V].
- **Retours** : 30 jours remboursés sur les diamants de 0,33 ct et plus et sur les bagues « non spéciales » ; **toute bague faite pour une pierre précise, en taille non standard ou modifiée est « Special Order », non annulable et non remboursable** ; diamants « Online Only » : 10 jours et 5 % de frais ; frais de 3 % sur retour payé par carte, 10 % si financement ; remboursement par chèque ; les frais de port et d'assurance ne sont pas remboursés [V, `/returns.htm`, `/specialorders.htm`]. Sur mesure : non annulable, non retournable [V].
- **Garantie** : garantie à vie couvrant la perte d'un petit diamant ; polissage et rhodiage gratuits à vie ; assurance-évaluation fournie, rapports de laboratoire joints [V, page de départ].
- **Acompte sur mesure** : 500 à 800 $ appliqués au solde, conservés si l'un ou l'autre renonce après la 3D ; solde dû avant la fabrication [V].
- **Paiement** : Visa, MasterCard, Discover, American Express (cartes de banques américaines seulement), virement bancaire (préféré) ; premières commandes expédiées à l'adresse de la carte ; autorisation notariée possible dans les 14 jours ; financement Synchrony 6/12 mois sans intérêt (34,99 % après) ou 60 mois à 11,99 % (minimum 1 500 $) [V, `/payments.htm`, `/financing.htm`].
- **Livraison** : essai à domicile 100 $ par bague (jusqu'à 3), expédié le lundi, retour sous 48 h [V]. International : virement préalable, droits à la charge du client, Canada accepté [V]. Frais de port de commande : non affichés [S].

## Confiance et service

- **Avis** : widget « 5.0, based on 956 reviews » (Google) sur la fiche, avec quatre commentaires datés de 12 et 19 jours [V].
- **Preuves de fabrication** : « Creation of an Heirloom » : photos de l'avancement dans la boîte e-mail pendant la fabrication [V]. Chaque diamant inspecté par Brent Knox, « his name does happen to be on every ring » [V].
- **Service** : chat en direct (LiveChat), téléphone, rendez-vous obligatoire en boutique ouverte, essai à domicile, finances Synchrony [V].
- **Langues, devises** : anglais, dollars seulement [V].
- **Libellé synthétique** : « LAB GROWN » ; description « environmentally friendly and economical » ; moissanite classée « Diamond alternative » [V].

## Points forts à retenir pour JR Diamond

1. **Photos d'avancement envoyées pendant la fabrication**, mises en avant sur la page de départ (`/design-your-own-ring.htm`, « Creation of an Heirloom »). C'est la promesse de JR Diamond, déjà vendue ici. [V]
2. **Prix qui réagit au métal et à la taille sans rechargement** : 3 590 $ (14 k), 4 190 $ (18 k), 4 390 $ (platine), taille 6,5, fiche Venita. [V] Mais le prix reste « sans pierre ».
3. **Liste de diamants avec filtres complets et certificat par ligne** (forme, couleur, pureté, carat, prix, cut, certificat IGI/GIA, profondeur, table). [V]
4. **Politique du sur-mesure écrite sans détour** : « special order » = non remboursable, définition précise ; acompte 500-800 $ imputé sur le solde. [V]
5. **Mise à taille gratuite 12 mois, polissage et rhodiage gratuits à vie**, rappelés sur la page de départ ; l'atelier de JR Diamond offre la première mise à taille. [V]
6. **Image principale en moins d'une seconde** : 690 ms sur ordinateur, 665 ms en affichage iPhone (photo, fiche Venita). [V mesure]

## Défauts observés

- **Aucun configurateur** : la page « Design Your Own Ring » n'est que du texte ; le sur-mesure passe par un formulaire de plus de 20 champs et un budget minimum de 1 000 $. [V]
- **Pas de panier** : commande par téléphone ou chat. [V, `/howtoorder.htm`]
- **Prix incomplet** : monture sans pierre centrale ; « Additional charges may apply » ; aucun total. [V]
- **Prix de l'or 14 k identique pour les trois teintes** ; platine sans taille choisie : « Price: Please Select Finger Size » au lieu d'un prix. [V]
- **Retours restrictifs** : toute taille hors stock = commande spéciale non remboursable ; 3 % de frais carte, 10 % en financement, remboursement par chèque. [V]
- **Paiement rigide** : cartes américaines uniquement, autorisation notariée possible, bonne partie des conditions sur des pages séparées de la fiche. [V]
- **Bouton DETAILS** des diamants sans effet visible dans le test. [V, non concluant]
- Aucune vue 3D, 360°, vidéo ou « sur la main » ; une seule galerie de quatre photos. [V]

## Limites de l'audit

- Formulaires (devis, rendez-vous), chat, appel, SMS non utilisés (règle de lecture seule). Panier absent donc non atteint.
- Fiche testée : une seule (Venita) ; prix d'autres fiches non comparés. Détail d'un diamant, comparaison, vue « Tiles » non actionnés.
- Pages `/stonesetting.htm`, `/warranties.htm` (texte complet), `/sizing.htm`, `/care.htm` non lues en entier.
- Mesure de chargement : une mesure par appareil, réseau du bac à sable (proxy) ; pas de moyenne.

## Sources

- https://www.knoxjewelers.biz/design-your-own-ring.htm
- https://www.knoxjewelers.biz/products/venita
- https://www.knoxjewelers.biz/diamonds.htm (et `?select_type[]=Lab%20Grown`)
- https://www.knoxjewelers.biz/customform.htm ; /customdesigns.htm ; /howtoorder.htm ; /pricing.htm
- https://www.knoxjewelers.biz/returns.htm ; /specialorders.htm ; /payments.htm ; /financing.htm ; /internationalorders.htm ; /try-before-you-buy.htm ; /appointment.htm ; /faq.htm ; /policies.htm
- https://www.knoxjewelers.biz/robots.txt (consulté ; chemins audités autorisés)
