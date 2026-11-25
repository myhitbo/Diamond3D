# Audit : Jogia Diamonds (Perth, Western Australia)

- **Site** : Jogia Diamonds International Pty Ltd, ABN 52 084 545 817
- **Adresse** : https://www.jogiadiamonds.com.au/ ; page de départ : https://www.jogiadiamonds.com.au/engagement_rings/
- **Date** : 15/11/2026 (date fixée par la consigne ; les contrôles ont été faits le 25/11/2026 d'après l'horloge de la session)
- **Appareils** : Chromium sur ordinateur (1366 x 900) ; affichage iPhone 13 (émulé)
- **Statut** : **partiel**. Parcours actionné jusqu'au récapitulatif « bague + diamant » ; le bouton « Buy » mène à `/cart/`, **interdit par robots.txt** (`Disallow: /cart/`), donc ni cliqué ni ouvert.
- Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) ; **[I]** inféré ; **[S]** supposé.

## Parcours

Le site annonce 3 étapes en haut de page (bandeau cliquable) [V]. Le titre de la page promet « over 80 designs » ; 30 vignettes sont chargées à l'ouverture [V].

| Étape | Options observées | Source |
|---|---|---|
| 1. Choisir la monture (« Choose Ring Design ») | Catalogue de 30 montures environ (liste par pages : « All », Single stone, Shoulder stones, Three stone, Halo ; collections : Jogia, Basics, B Series, S Series). Fiche monture avec vue 3D, choix du métal (PT, 18K jaune, 18K rose), boutons « Add to Ring Builder » et « Enquire About This Ring » | [V] /engagement_rings/ ; fiche `/engagement_rings/classic-knife-edge-diamond-engagement-ring-ER29/` |
| 2. Choisir un diamant (« Choose a Diamond ») | Trois fichiers : Crossfire & Signature Series, International Selection, Lab Grown Diamonds (« Lab Grown Diamond Search »). Filtres : forme (10), carat, prix, couleur, couleur fantaisie, pureté, taille (cut), polish, symétrie | [V] /diamonds/lab-grown-diamonds.php |
| 3. Bague complète (« Complete Ring ») | Le bandeau affiche la bague (ER29, Platinum, 1 500 $) + le diamant (0,11 ct E VVS2, 111,03 $) et un total **1 611,03 $** avec boutons « Enquire » et « Buy » | [V] bandeau après ajout, même page |

Taille de doigt, gravure : pas de champ dans le parcours observé. Le site dit que la gravure et la mise à taille se précisent après la commande (case « free ring sizer » sur la page de commande) [V] /information/extras.php, /information/easyordering.php. La page de commande (`/cart/order.php`) n'a pas été ouverte (interdit).

## Contrôles vérifiés

Ordinateur sauf mention. « Prix » : effet sur le prix affiché.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu principal (Home, Information, About, Diamonds, Engagement rings, Wedding, Earrings, Blog, Wiki, Testimonials, Contact) et sous-menus | liens | Pages statiques ; sous-menu mobile par bouton « MENU » [V] controls.cjs | aucun | OK (liens lus, non tous suivis) |
| Filtres de liste « All / Single stone / Shoulder stones / Three stone / Halo » et « Basics / B Series / S Series » | liens + boutons | Filtrent le catalogue par page dédiée (`/engagement_rings/halo/` etc.) | aucun | liens présents ; **non ouverts** un à un, faute de temps |
| 30 vignettes de montures, « More Information » | liens | Ouvrent la fiche monture | aucun | OK (une fiche, ER29, ouverte) |
| Bouton « PT » | bouton | Charge la vue 3D platine (`360viewer.php?code=ER29-platinum`) ; actif par défaut | 1 500 $ (platine) | OK |
| Bouton « 18K » jaune | bouton | Recharge l'iframe 3D en or jaune (`...ER29-yellow`), ~3,5 s | inchangé à l'écran : les deux prix sont toujours affichés (1 500 $ platine / 1 800 $ or 18 k) | OK |
| Bouton « 18K » rose | bouton | Recharge l'iframe 3D en or rose (`...ER29-rose`) ; le récapitulatif d'étape affiche ensuite « 18k Rose 1 800 $ » | 1 800 $ | OK |
| « Got It! » (instructions 360°) | bouton | Ferme l'encadré d'aide (déplacer, zoom molette/pincer, déplacer la fenêtre) | aucun | OK |
| Vue 3D 360° (iframe) | rotation/zoom | Canvas WebGL dans une iframe ; consigne : bouton gauche pour tourner, molette pour zoomer. Interaction souris **non testée** (pas de geste simulé) | aucun | affichage OK ; interaction non testée |
| « Add to Ring Builder » (fiche monture) | lien | Ajoute la monture ; l'étape 1 affiche « ER29 / Platinum / 1500.00 $ » sans changer de page ; requêtes `colourSelector.php`, `ringbuilder.php?ringcode=ER29&metal=rg` | prix de la monture | OK |
| « Enquire About This Ring » | lien | Mène à `/engagement_rings/email.php?code=ER29` (formulaire, **non ouvert, non rempli**) | aucun | lien présent |
| Formes de pierre (10 icônes : rond, princesse, émeraude, asscher, marquise, ovale, radiant, poire, cœur, coussin) | boutons | Marquise : la liste se recharge (premier résultat 0,10 ct E VS2 à 111,09 $) en ~4 s, 100 lignes | change la liste | OK |
| Carat (min / max, 0 à 10) | champs texte | Min = 1 : la liste passe à des pierres de 1,02 ct (269,43 $, 279,14 $…) en ~4 s | change la liste | OK |
| Prix (0 à 20 000 $), couleur D–J, pureté IF–SI2, cut Ideal–Fair, polish, symétrie | curseurs | Présents et doubles ; **non manipulés** (curseurs à double poignée, non testés) | filtrent | présents, non testés |
| Couleur fantaisie (5 icônes) | boutons | Présents ; **non testés** | filtre | non testé |
| Case « W/L » (watchlist) | case à cocher | `addWatchlist(...)` ; l'astuce dit qu'on peut envoyer plusieurs diamants par e-mail. **Non cochée** (stockage de session) | aucun | non testé |
| « Details » (par diamant) | lien | Déplie : forme, poids, couleur, pureté, fluorescence, cut/polish/symétrie, mesures (3,1 x 3,13 x 1,94), table 58 %, profondeur 62,1 %, certificat | affiche prix TTC et HT | OK |
| « View E-Certificate » / « View Certificate Copy » | liens externes | Vers igi.org (vérification du rapport) et un PDF cloudfront ; **non ouverts** (domaines tiers) | aucun | liens présents |
| Icône vidéo « loupe360.com/diamond/…/video » (sur certaines lignes) | lien externe | Vidéo/360° de la pierre chez un tiers ; domaine bloqué volontairement dans le navigateur, **non ouvert** | aucun | non testé |
| « ADD TO RING BUILDER » (diamant) | lien | Ajoute le diamant ; le bandeau passe à « IL29186039 0.11ct/E/VVS2 111.03 $ » puis total 1 611,03 $ ; requête `ringbuilder.php?diamondcode=…` | + prix du diamant | OK |
| « BUY THIS DIAMOND » | lien | Pointe vers `/cart/order.php?id=…` : **panier interdit par robots.txt**, non cliqué | — | non testé (interdit) |
| « Buy » du bandeau (bague + diamant) | lien | Idem, panier interdit | — | non testé (interdit) |
| « ENQUIRE ABOUT THIS DIAMOND » | lien | `/diamonds/email.php?code=…` : **interdit par robots.txt** (`Disallow: /diamonds/email.php`) ; non ouvert | — | non testé (interdit) |
| Barre latérale « Watchlist » | bouton | Panneau « There are no diamonds in your watchlist » avec liens vers les 3 fichiers de diamants | aucun | OK |
| « Change » (devise) | lien | Sélecteur de devise en pied de page (affiche AUD) ; **non ouvert** | — | non testé |
| « Book an Appointment » | lien | `/contact/appointment.php` (formulaire) ; **non rempli** | — | lien présent |
| Téléphone 1800 722 237 ; WhatsApp +61 413 777 996 (lien `wa.me`) | lien | Numéro affiché dans l'en-tête ; lien wa.me sur la page de contact. **Non cliqués** | — | présents |
| Partager (ShareThis : Facebook, Twitter, Pinterest, e-mail, WhatsApp) | icônes | Présentes sur la fiche monture ; non testées | — | présentes |
| Comparer, essayage AR, essayage à domicile, chat en ligne, liste de souhaits enregistrée, guide des tailles interactif | — | **Absents** de la page de départ et de la fiche ; une « Free Ring Sizer » en caoutchouc est envoyée par la poste sur demande à la commande [V] /information/extras.php | — | absents |

## Options disponibles

- **Métaux (en ligne)** : platine, or 18 carats jaune, or 18 carats rose. L'or blanc 18 carats existe mais n'est pas proposé en ligne : « email or phone » [V] /engagement_rings/faq.php. Titres 14 k : non observés.
- **Formes de diamant** : rond, princesse, émeraude, asscher, marquise, ovale, radiant, poire, cœur, coussin (10) [V].
- **Origine** : diamants naturels (« Crossfire & Signature Series », « International Selection ») et synthétiques (« Lab Grown Diamonds ») [V].
- **Filtres de pierre** : forme, carat (0 à 10), prix (0 à 20 000 $), couleur (D à J), couleur fantaisie, pureté (IF à SI2), cut (Ideal à Fair), polish, symétrie [V].
- **Services de monture** : sur mesure par CAO (design à environ 200 $), maquette imprimée 3D à essayer (gratuite pour le sur-mesure ; +100 $ pour une monture standard Jogia ou Bermark) [V] /information/design.php, /engagement_rings/faq.php.
- **Catégories de bagues** : single stone, shoulder stones, three stone, halo ; alliances femme et homme ; boucles d'oreilles [V].
- **Gravure** : gratuite, texte et police au choix, intérieur de la bague, environ 1 jour de plus [V] /information/extras.php. Mise à taille : une gratuite (jusqu'à 5 tailles), hors gamme « Basics » [V].
- **Langues** : anglais seulement [V]. **Devise** : dollar australien ; livraison Australie et Nouvelle-Zélande [V] /information/shipping.php.

## Prix, délais, retours, garanties

- **Affichage du prix** : prix TTC (« inc GST ») ; prix hors taxe indiqué pour la pierre (« GST Free : 100,94 $ ») [V]. Monture ER29 : 1 500 $ platine, 1 800 $ or 18 k jaune/rose, **sans pierre centrale** (« Centre stone featured (not included in the price) ») [V]. Pas de décomposition matière / façon / marge. Pas de remise : « the price you see on our site is the price you will pay » [V] /information/easyordering.php.
- **Diamants synthétiques (exemples)** : 0,11 ct E VVS2 : 111,03 $ ; 1,02 ct I VS2 : 269,43 $ ; 1,02 ct F SI1 : 279,14 $, certificat IGI visible [V]. Le tri par défaut est le prix croissant [V].
- **Acompte** : 200 $ pour « appeler » un diamant ; 10 % pour une bague ou un bijou sur mesure [V] /information/interestfree.php.
- **Délai** : fabrication interne 2 à 4 semaines ; diamant livré en 7 à 10 jours environ (exemple IL29186039) [V] fiche ER29 et détail du diamant.
- **Livraison** : incluse dans le prix, partout en Australie et en Nouvelle-Zélande, coursier assuré de nuit, signature obligatoire ; samedi ou jour même : supplément sur devis ; Nouvelle-Zélande : TVA et droits payés au transporteur [V] /information/shipping.php.
- **Retours** : diamants Crossfire/Signature : 30 jours, frais payés par le vendeur, rachat à 80 % pendant 1 an ; International Selection : 14 jours, petits frais ; **bagues : pas de retour** (« we do not offer a return policy on our rings »), reprise possible à tarif réduit pour refaire [V] /information/return.php. Aucune mention de l'exception du sur-mesure dans la loi : la politique l'énonce directement.
- **Garanties** : réparations mineures gratuites (polissage, resserrage des griffes), même par la faute du client ; pas de « garantie à vie » annoncée [V] /information/extras.php ; assurance bijoux via un partenaire (qreport.com.au, non ouvert) ; échange (« upgrade ») avec crédit du prix payé moins la main-d'œuvre [V] /information/upgrade.php.
- **Paiements annoncés** : Mastercard, Visa, American Express, EFTPOS, espèces, virement ; financement 12 mois sans intérêt (Gem Visa / Latitude, pierres Crossfire) et 6 mois (International Selection) [V] /information/easyordering.php, /information/interestfree.php. Moyens affichés dans un panier : **non vérifiés** (panier interdit).

## Confiance et service

- **Certificats** : IGI pour le synthétique observé, lien de vérification vers igi.org [V] ; analyse maison « Ideal-Scope, ASET, microscope, Firetrace » pour tout diamant au-dessus de 0,30 ct depuis 2007, dit le site [V] /information/jogia-diamonds-difference.php (affirmation du site).
- **Libellé du synthétique** : « Lab Grown Diamonds » [V].
- **Fabrication** : « design et fabrication en interne, y compris fonte du platine » ; rendus photoréalistes envoyés après la commande [V] /information/jogia-diamonds-difference.php. Pas de photos ni vidéos d'atelier vues sur les pages ouvertes.
- **Suivi de commande** : e-mails et SMS d'état + page de suivi, numéro de suivi à l'expédition [V] /information/easyordering.php (page de suivi non ouverte).
- **Avis clients** : page « Testimonials » en 17 pages ; la première page s'est affichée **vide** à l'ouverture (contenu non chargé au moment du contrôle) [V].
- **Contact** : salle d'exposition 488 Murray St, Perth, sur rendez-vous uniquement ; téléphone 1800 722 237 ; WhatsApp +61 413 777 996 ; formulaires [V].
- **Blog et wiki** pédagogiques (or blanc contre platine, fluorescence, valorisations) [V liens].

## Points forts à retenir pour JR Diamond

1. **Total de la bague en direct dans le parcours** : bague + pierre = 1 611,03 $ affichés à l'étape 3, avant tout formulaire. Preuve : bandeau après ajout, /diamonds/lab-grown-diamonds.php.
2. **Les deux prix par métal côte à côte** (platine / or 18 k) sur la fiche, avec mention « pierre non incluse ». Preuve : fiche ER29. À reprendre, en y ajoutant la décomposition que Jogia ne donne pas.
3. **Vue 3D par métal chargée en 2,5 à 3,5 s** (canvas), changement de métal sans recharger la page entière. Preuve : mesures ci-dessous, boutons PT / 18K.
4. **Fiche diamant complète avant achat** : mesures en mm, table, profondeur, certificat IGI avec lien de vérification, prix TTC et HT, acompte et délai (7-10 jours). Preuve : « Details » de IL29186039.
5. **Maquette imprimée en 3D à essayer** avant fabrication (gratuite en sur-mesure), qui répond directement à la peur « bijou reçu différent de la CAO ». Preuve : /information/design.php, /engagement_rings/faq.php.
6. **Politique de retour explicite par catégorie**, y compris « pas de retour sur les bagues », avec compensation (mise à taille, réparations, reprise). Preuve : /information/return.php.
7. **Suivi de commande par e-mail, SMS et page dédiée.** Preuve : /information/easyordering.php.

## Défauts observés

- **Aucun sélecteur de carat sur la monture** : le prix de la monture ne bouge pas avec la pierre ; il faut changer de page pour la pierre (liste de 100 lignes) [V].
- **Pas de gravure ni de taille de doigt dans le parcours** observé ; ces choix sont repoussés à la commande ou au téléphone [V pour l'étape 3 observée, I pour la page de commande non ouverte].
- **Or blanc absent en ligne** (demande par e-mail) [V].
- **Page de témoignages vide** à l'ouverture le 25/11 [V].
- **Mobile** : en-tête haut de plusieurs centaines de pixels, le visuel 3D arrive après l'encadré d'instructions 360° ; les icônes d'étapes n'étaient pas encore affichées à la capture [V capture iPhone].
- **Site à l'aspect daté**, anglais uniquement, un seul niveau de rendu 3D (pas de différence visible entre monture seule et monture + pierre : la 3D montre la monture avec un diamant générique) [V].

## Mesures du temps d'apparition du visuel principal

| Appareil | Mesure | Résultat |
|---|---|---|
| Ordinateur | iframe 3D (940 x 600) présente dans le DOM | ~4,5 s après `domcontentloaded` (1 mesure) |
| Ordinateur | canvas WebGL présent dans l'iframe | 2,6 s, 3,4 s, 3,6 s (3 mesures) |
| iPhone 13 (émulé) | canvas WebGL présent | 2,5 s (1 mesure) |
| Ordinateur | liste de diamants synthétiques visible | ~4,8 s |

Réseau : proxy de la session ; valeurs indicatives. Mesure du premier dessin réel (paint) non faite ; « canvas présent » ne garantit pas que l'image est déjà dessinée [I].

## Limites de l'audit

- **Panier, page de commande, « Buy » et formulaires d'« Enquire » : interdits par robots.txt ou en dehors du périmètre** ; moyens de paiement et frais affichés dans le panier non relevés.
- Curseurs de filtre à deux poignées, couleur fantaisie, case watchlist, partage, devise, rendez-vous, WhatsApp et téléphone : présents, non actionnés.
- Seule la monture ER29 a été ouverte en détail (une des ~30). Les prix des autres montures sont **non relevés**.
- Vue 3D : rotation et zoom non simulés (pas de geste).
- Les requêtes tierces (loupe360.com, igi.org, qreport.com.au) n'ont pas été ouvertes.
- Date nominale 15/11/2026 ; contrôles du 25/11/2026. Soldes de fin d'année possibles sur d'autres sites ; non constatés ici.

## Sources

- https://www.jogiadiamonds.com.au/engagement_rings/ (liste de montures, 250 contrôles relevés)
- https://www.jogiadiamonds.com.au/engagement_rings/classic-knife-edge-diamond-engagement-ring-ER29/
- https://www.jogiadiamonds.com.au/engagement_rings/360viewer.php?code=ER29-platinum (iframe 3D)
- https://www.jogiadiamonds.com.au/engagement_rings/faq.php
- https://www.jogiadiamonds.com.au/diamonds/lab-grown-diamonds.php
- https://www.jogiadiamonds.com.au/information/ : return.php, shipping.php, design.php, easyordering.php, interestfree.php, extras.php, upgrade.php, jogia-diamonds-difference.php
- https://www.jogiadiamonds.com.au/testimonials/ ; https://www.jogiadiamonds.com.au/contact/
- https://www.jogiadiamonds.com.au/robots.txt (`Disallow: /cart/`, `Disallow: /diamonds/email.php`)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/jogia-diamonds/`
