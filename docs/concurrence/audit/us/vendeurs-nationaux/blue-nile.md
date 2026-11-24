# Audit : Blue Nile (États-Unis, vendeurs nationaux)

- **Site** : Blue Nile (groupe Signet), https://www.bluenile.com. Page de départ : https://www.bluenile.com/engagement-rings. Collection James Allen (site fermé) et Creative Studio compris.
- **Date** : 15/11/2026. **Appareils** : Chromium 1366×900 (ordinateur) et iPhone 13 émulé (Playwright, pas de Safari réel), depuis un centre de données.
- **Statut : partiel**. Le parcours a été suivi jusqu'à « Add to cart ». La page panier (`/shopping-cart`) n'a pas été ouverte : robots.txt l'interdit. Trois contrôles sont restés non concluants (voir Limites).
- Complète la fiche Blue Nile de `docs/concurrence/2026-11-15_etats-unis.md` ([V11] à [V17]).
- **Légende** : [V] vérifié (page lue ou contrôle actionné ; source [Bn] en fin de rapport) ; [I] inféré ; [S] supposé. Prix en dollars US, tels qu'affichés le 15/11/2026.

## Parcours

| Étape | Options |
|---|---|
| 0. Galerie `/engagement-rings` [B1] | Onglets « Design your own » et « Ready to ship ». 10 filtres, 2 cases, tri, date d'expédition. 1 431 résultats [V]. |
| 1. Fiche monture (« Choose a Setting ») [B2] | Photos et 360°, métal (6), taille de doigt, gravure, financement, « Select this setting » [V]. |
| 1 bis. Creative Studio [B7] | Forme et carats d'aperçu, tête (15 styles) et son métal (6), corps (15 styles) et son métal (6) [V]. |
| 2. Fenêtre « Add one of the options below » [B2] | Diamond, Gemstone ou Recommended Diamond, puis « Continue » [V]. |
| 3. Recherche de pierre (« Diamond Finder ») [B3][B4] | Naturel ou synthétique, provenance, forme, prix, carats, couleur, pureté, taille, filtres avancés, tri, date [V]. |
| 4. Fiche pierre [B5] | Photo et rotation, « Super Zoom », schémas, curseur de carats sur une main, rapport de laboratoire, « Select this diamond » [V]. |
| 5. Bague complète `/complete-jewel` [B6] | Récapitulatif monture + pierre + total, taille, gravure, date, « Add to cart » → `/shopping-cart` (non ouvert) [V]. |

## Contrôles vérifiés

Contrôles actionnés sur ordinateur, sauf mention « iPhone ». « Lien » : adresse relevée, page lue séparément quand une source est indiquée.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| **En-tête** | | | | |
| USD | liste | 9 devises : USD, CAD, CNY, EUR, GBP, HKD, NZD, SGD, AUD. Pas de shekel. | EUR choisi : aucun prix converti repéré | Non concluant |
| Téléphone (survol) | menu | Chat, appel au +1-800-242-2728, e-mail, « Message us on WhatsApp » (wa.me/18773749142) | — | OK |
| Search | panneau | S'ouvre ; propose « Shape » et « Need it faster? » | — | OK |
| Cœur, panier, compte | liens | `/wishlist`, `/shopping-cart`, `/signup` | — | Non ouverts (robots.txt) |
| Stores, Virtual Appointment | liens | Pages des salles et du rendez-vous vidéo [B17][B18] | — | OK |
| **Galerie [B1]** | | | | |
| Gender | filtre | Women, Men | — | OK |
| Style | filtre | 27 valeurs (liste ci-dessous) | — | OK |
| Collections | filtre | All, By James Allen, The Gallery Collection™ | — | OK |
| Ring Size | filtre | 3 à 15 par demi-taille | — | OK |
| Diamond Type | filtre | All, Natural, Lab-Grown | — | OK |
| Shape | filtre | 10 formes | — | OK |
| Gemstones | filtre | All, Blue Sapphire, Ruby, Multi-Stone | — | OK |
| Metal | filtre | All, White Gold, Yellow Gold, Rose Gold, Platinum | — | OK |
| Width | filtre | 9 tranches, de 1,00–2,00 mm à 9,00 mm et plus | — | OK |
| Price | champs | Min Price, Max Price | — | Ouvert, non saisi |
| On Sale, Engravable | cases | Relevées, décochées par défaut | — | Non actionnées |
| Sort By | liste | Best Sellers ; prix et remise croissants ou décroissants ; Fastest Shipping ; New Arrivals | — | OK |
| Shipping Date by | liste | Any Date et 5 dates (ven. 20 nov., mar. 1er déc., mer. 2, jeu. 3, lun. 7 déc.) | — | OK |
| « Need it faster? Show me » | bouton | Bulle d'invitation ; aucun effet relevé | — | Non concluant |
| Vignettes de bague | liens | 4 pastilles de métal par bague, lien « + Lab Grown », cœur | Prix barré, puis −20 % | Relevées, non actionnées |
| Filters (iPhone) | tiroir | Recouvert par la feuille « Visit a Showroom » | — | Non testé |
| **Fiche monture « Classic Four-Prong Solitaire » [B2]** | | | | |
| Vignette 360° | glisser | La bague tourne (captures avant et après) ; mention « Shown in 1 ct. » ; molette sans effet | — | OK |
| Liste « VIEW WITH » du 360° | liste | Round, Princess, Cushion, Emerald, Oval, Radiant, Asscher | — | Ouverte ; clic sur Oval refusé : non concluant |
| Photos | galerie | 4 photos de la bague, photos portées ; aucune vidéo détectée. iPhone : carrousel de 7 vues, 360° compris | — | OK |
| Métal (6 pastilles) | liens | Chaque métal est un article distinct (adresse et numéro de stock) | 14 k blanc, jaune ou rose : 870 → 696 $ ; 18 k blanc ou jaune : 1 125 → 900 $ ; platine : 1 180 → 944 $ | OK |
| Ring Size | liste | Liste relevée : 3 à 9 par demi-taille. Une taille choisie affiche « Ships by: Friday, November 20 » et « Free Fast Shipping » | Inchangé | OK (iPhone aussi) |
| Ring Size Guide | lien | Guide : tableau, baguier à imprimer, baguier plastique gratuit (5 à 7 jours ouvrés) [B21] | — | OK |
| Add Free Engraving | panneau | Champ de 20 caractères, 2 polices, aperçu, « Final Sale - Not Eligible for Return » | Gratuit | Ouvert, rien saisi |
| Learn more (carte de crédit) | lien | Page de financement [B16] | — | OK |
| View other Financing Options | fenêtre | « Buy Now Pay Later From 0% APR » : Affirm, PayPal, Blue Nile Credit Card | — | OK |
| Free Overnight Shipping | infobulle | « hand crafted and inspected… additional manufacturing time may be necessary for certain finger sizes and center diamonds » | — | OK |
| Extended Returns | infobulle | Retour possible jusqu'au 5/1/2027 pour les commandes passées à partir du 1/11/2026 | — | OK |
| Variance Chart | fenêtre | Tableau des écarts de poids (ex. « 1 » = 0,95 à 1,11 ct ; « 1/4 » = 0,23 à 0,28) | — | OK |
| Share | menu | Facebook, Pinterest, E-mail, Copy Link | — | OK |
| Select This Setting | bouton | Ouvre la fenêtre de choix de l'étape 2 | — | OK (iPhone aussi) |
| Chat With An Expert | panneau | « Personal guidance from a jewel expert » ; chat après saisie du nom et de l'e-mail, reCAPTCHA | — | Ouvert, rien envoyé |
| Call +1-800-242-2728 | lien tel. | — | — | Relevé |
| Accordéons | dépliants | Your Order Includes, Product Details, Secure Shopping, Limited Lifetime Warranty, Show More (stock, métal, largeur 1,90 mm, rhodiage), « Can Be Set With » (10 formes de 0,20 à 8,00 ct), Discreet Packaging, Hold for Pickup, Free Shipping | — | OK |
| Fenêtre « Visit a Showroom » | fenêtre | Apparaît seule ; « Book Now » mène à un formulaire (nom, e-mail, téléphone, note) | — | Non rempli |
| Cœur près du titre | bouton | — | — | Non actionné (mon clic a visé `/wishlist`, bloqué) |
| **Fenêtre de choix (étape 2)** | | | | |
| Diamond + Continue | cartes | Mène à `/diamonds?RingMatchID=194360` | — | OK |
| Gemstone + Continue | carte | Même destination que Diamond | — | Non concluant (clic sur la carte peut-être non pris) |
| Recommended Diamond + Continue | carte | Même adresse, liste vide au relevé | — | Non concluant |
| **Recherche de pierre [B3][B4]** | | | | |
| Natural / Lab-Grown | bascule | Lab-Grown ouvre `/diamonds/lab-grown-diamonds` ; dans le parcours bague, la forme Round s'ajoute seule. iPhone : 61 197 naturels, 48 164 synthétiques | Synthétiques dès 1 084 $ (1,54 ct) | OK |
| Provenance « Curated by the Asscher family » | case et info | Badge sur certaines pierres | — | Info introuvable au clic |
| Shape (10) | boutons | Oval ajoute `?Shape=oval-cut` et la liste change ; Marquise de même | — | OK |
| Price | champs + curseur | Par défaut 200 $ à 5 000 000 $ | — | Relevé |
| Carat | champs + curseur | Par défaut 1,00 à 8,00 ct | — | Relevé |
| Color | curseur | Naturel M à D, synthétique J à D ; 4 crans au clavier → `Color=E,D` | — | OK |
| Clarity, Cut | curseurs | SI2 à FL ; Good, Very Good, Excellent | — | Relevés |
| Advanced Filters | panneau | Polish, Symmetry, Fluorescence, Table, Depth, L/W Ratio, Certificate | — | OK |
| On Sale, Fast Shipping | cases | Aucun changement des 4 premières pierres | — | Non concluant |
| Shipping Date By | liste | Any Date et 8 dates, du mar. 17 au lun. 30 nov. | — | OK |
| Sort By | liste | Best Match ; Price, Date (Soonest/Latest), Carat, Color, Clarity, Cut, chacun croissant ou décroissant | — | OK |
| Reset All | bouton | Remet tous les filtres (`CaratFrom=0.05`, toutes couleurs et puretés) | — | OK |
| Bouton « Compare » | — | Absent des pages lues | — | — |
| **Fiche pierre [B5]** | | | | |
| Vignette principale | photo + rotation | Photo de la pierre elle-même (identifiant de photo propre), « Click & drag to rotate », icône 360, loupe « Super Zoom » | — | Repérées ; glisser et loupe non actionnés |
| Schémas | images | Largeur, longueur, table, profondeur, rondiste, colette | — | OK |
| Curseur 0,3 – 5 ct | curseur | Agrandit la pierre sur une photo de main portant une bague (valeur 69 → 84) | — | OK |
| View Report | fenêtre | Copie électronique du rapport IGI (« Laboratory Grown Diamond Report », mention CVD) | — | OK |
| Show More, accordéons | dépliants | Caractéristiques complètes ; GIA/IGI Grading Report, Lifetime Diamond Upgrade Program, About Natural/Lab-Grown Diamonds | — | OK |
| Ships by | texte | Pierre synthétique seule : « Wednesday, November 18 » | — | OK |
| Select This Diamond | bouton | Apparaît environ 6 s après l'ouverture ; mène à `/complete-jewel` | — | OK |
| Call | lien tel. | +1-888-565-7641 sur la fiche naturelle, +1-800-242-2728 sur la synthétique | — | Relevé |
| **Bague complète [B6]** | | | | |
| Barre des 3 étapes | récapitulatif | Pierre, monture et total, chacun avec VIEW et REMOVE | Voir « Prix » | OK |
| 360° de la bague | glisser | « Shown in 1 ct. », quelle que soit la pierre choisie (2,52 ct puis 1,65 ct) | — | OK, mais le rendu ne suit pas la pierre |
| Ring Size | liste | Taille 7 reprise de l'étape 1 | — | Changement non testé (script interrompu) |
| Add Free Engraving | panneau | Relevé (même panneau que sur la fiche) | — | Non ouvert |
| Ships by | texte | « Thursday, December 3 » (pierre naturelle ou synthétique) | — | OK |
| Add to Cart | bouton | Redirige vers `/shopping-cart`, page bloquée par l'auditeur (robots.txt) | — | Panier non vu |
| Change Diamond, Change Setting | liens | — | — | Non testés (script interrompu) |
| **Creative Studio [B7]** (ordinateur et iPhone) | | | | |
| Preview Shape (10) | boutons | La photo passe en ovale | Inchangé | OK |
| Preview Size (1 ; 1,5 ; 2 ; 2,5 ct) | boutons | Le libellé change ; photos fixes inchangées | Inchangé | Effet sur le 360° non vérifié |
| Head (15 styles) | boutons | Nouvel article et nouvelle image. Diamond Tulip 1 760 $, Classic Halo 2 080 $, Classic Bezel 1 500 $ (avec corps Knife Edge) | Varie | OK ; Vintage Trefoil sans effet avec l'ovale (non concluant) |
| Band (15 styles) | boutons | Solitaire 1 560 $, French Pavé 1 830 $ (tête Diamond Tulip, 14 k blanc) | Varie | OK |
| Métal de la tête / du corps (6 + 6) | boutons | Bicolore possible : corps en 18 k jaune et tête en 18 k blanc, 2 220 $. Couple déduit du numéro de stock [I] | De 1 830 à 2 220 $ | OK |
| 360° et photos | visuel | « This is a digital rendering for preview purposes. The final product may vary slightly from what is shown. » ; iPhone : bouton « Switch to image gallery » | — | OK |

## Options disponibles

- **Styles de la galerie** : Side Stone, Pavé, Solitaire, Three Stone, Halo, Vintage, Designer, Unique, Floral, Cathedral, Petite, Hidden Halo, Milgrain, Six Prong, Channel Set, Cluster, Split Shank, Bezel, Dainty, Tension, East-West, Four Prong, Simple, Comfort Fit, Accent Stones, Plain Metal [V][B1].
- **Métaux** : or 14 k blanc, jaune ou rose ; or 18 k blanc ou jaune ; platine. Pas d'or 18 k rose sur la monture testée [V][B2]. Rhodiage indiqué [V].
- **Formes** : Round, Princess, Cushion, Emerald, Oval, Radiant, Asscher, Marquise, Heart, Pear ; la monture accepte aussi Cushion Modified, Square Radiant et Square Emerald, de 0,20 à 8,00 ct [V][B2].
- **Têtes du Creative Studio** : 4-Prong Nouveau, 6-Prong Nouveau, Classic Basket, Diamond Basket, Surprise Diamond, 6-Prong Diamond, Diamond Tulip, Classic Halo, Floral Halo, Hidden Halo, Dual Halo, Fancy Halo, Clustered Diamond, Vintage Trefoil, Classic Bezel [V][B7].
- **Corps du Creative Studio** : Solitaire, Knife Edge Solitaire, Split Ring Solitaire, French Pavé, Cathedral Pavé, Triple Row Pavé, Round Channel, Baguette Channel, Floating Station, Alternating Marquise, Three Stone, Knife Edge Pavé, Floral Bypass, Twist Pavé, Alternating Baguette [V][B7].
- **Pierres** : naturelles GIA, synthétiques IGI [V][B4][B5] ; saphir bleu, rubis, « multi-stone » en filtre de galerie [V][B1].
- **Tailles de doigt** : 3 à 15 dans le filtre ; 3 à 9 dans la liste de la fiche (à recouper) [V].
- **Gravure** : 20 caractères, 2 polices, gratuite [V].
- **Collection James Allen** : 742 montures, mêmes filtres (sauf Gender, Collections, Diamond Type, Shape), remise de 20 % [V][B8].

## Prix, délais, retours, garanties

- **Affichage** : prix de la monture seule (« Setting Price »), barré puis remisé de 20 % (« Discount code is applied automatically ») [V][B2]. Le Creative Studio affiche 1 760 $ sans prix barré : la remise ne s'y applique pas [V][B7] [I].
- **Décomposition** (bague complète, pierre synthétique) : pierre IGI 1,65 ct D-VS1 à 1 237 $ + monture 696 $ (870 $ barré) = **1 933 $** (2 107 $ barré). Avec une pierre naturelle GIA 2,52 ct D-IF à 49 298 $ : 49 994 $ [V][B6].
- **Mensualité près du prix** : « Or as low as $329/mo for 6 months… total payment of $1,972** » [V][B6]. Le total est supérieur au prix (frais « Promotional Plan Fee may apply ») [V][B16]. Carte Blue Nile : 6, 12 ou 18 mois, dès 1 000, 3 000 ou 6 000 $ d'achat [V][B16].
- **Délais** : monture seule (taille 7), « Ships by Friday, November 20 » ; pierre synthétique seule, « Wednesday, November 18 » ; **bague complète, « Thursday, December 3 »** [V][B2][B5][B6]. Soit 14 jours ouvrés après le 15/11, le même délai que JR Diamond (13 si Thanksgiving est chômé) [I]. Sans taille choisie : « please select a ring size first » [V].
- **Livraison** : gratuite et assurée ; express de nuit au-dessus de 500 $, 2 jours en dessous ; international en 2 à 5 jours ouvrés hors douane ; colis neutre ; retrait en point sécurisé, gardé 5 jours ouvrés [V][B12].
- **Retours** : 30 jours **à compter de l'expédition**. Exclus : bijoux personnalisés, sur mesure, gravés, retaillés, achats du programme d'échange, soldes. Annulation d'un sur-mesure sous 24 h après paiement. Deux retours gratuits par an. Rapport de laboratoire manquant facturé 150 $ [V][B10][B11]. Prolongation des fêtes jusqu'au 5/1/2027 [V][B10].
- **Garantie** : à vie, contre les défauts de fabrication, sur l'or et le platine **à partir de 1 000 $** (en vigueur depuis le 11/10/2026) ; pierres exclues. Une mise à taille gratuite, ± 2 tailles, dans les 6 mois [V][B13].
- **Échange de pierre** : à vie, sur les pierres incolores GIA et IGI, même origine. Crédit jusqu'au prix payé pour une pierre d'au moins le double, envois aux États-Unis seulement [V][B14]. **Alignement de prix** : pierres GIA libres, par téléphone, prix tenu 48 h [V][B15].
- **Certificats** : GIA (naturel), IGI (synthétique) ; rapport consultable sur la fiche [V][B5].
- **Libellé du synthétique** : « Lab-Grown Diamond » (ex. « IGI 1.54 Carat E-VS1 Excellent Cut Cushion Modified Lab-Grown Diamond ») ; le rapport IGI précise « CVD » [V][B4][B5].
- **Langues et devises** : anglais seulement (aucun sélecteur de langue vu) [I] ; 9 devises, pas de shekel [V].

## Confiance et service

- **Avis** : 4,7/5 sur 235 412 avis [V][B20]. Aucune note sur la fiche monture testée [V].
- **Contact** : téléphone 7 jours sur 7, de 5 h à 2 h (heure de l'Est) ; chat ; WhatsApp ; e-mail ; formulaire ; « non-commissioned experts » [V][B19][B10].
- **Physique** : 23 salles d'exposition aux États-Unis, dont New York sur rendez-vous et l'ancienne boutique James Allen de Georgetown [V][B18][B9] ; rendez-vous vidéo « multiple cameras highlighting the jewelry from many angles » [V][B17].
- **James Allen** : « now an exclusive curated collection at Blue Nile » ; commandes, garanties et échanges de pierre repris par Blue Nile [V][B9].
- **Preuves de fabrication** : aucune photo ou vidéo d'atelier, aucun suivi de fabrication vu. Seulement la phrase « hand crafted and inspected » et un suivi d'expédition par le compte [V][B2][B12]. Les photos de pierres sont prises « in consistent lighting conditions » [V][B3].
- **Interruptions** : bannière de cookies, fenêtre « Visit a Showroom », bandeau « Get Early Access », bulle de chat. Sur ordinateur, la fenêtre de salle a masqué le bouton de gravure [V].

## Points forts à retenir pour JR Diamond

1. **Date d'expédition calculée et datée**, recalculée pour la bague complète (20 nov. → 3 déc.) [V][B2][B6]. Pour JR : afficher la date issue des 14 jours ouvrés plutôt que la durée.
2. **Récapitulatif en 3 blocs** : pierre, monture et total, chacun modifiable (VIEW, REMOVE, Change) [V][B6]. C'est la forme du « prix expliqué ».
3. **Rapport de laboratoire ouvert dans la page** (copie IGI) [V][B5]. Pour JR : montrer le GIA ou l'IGI dès 0,50 ct, au même endroit.
4. **Exception de retour annoncée au moment du choix** : « Final Sale - Not Eligible for Return » dans le panneau de gravure [V][B2]. Utile pour l'exception « fabriqué sur mesure » du droit israélien.
5. **Tableau des écarts de poids** [V][B2]. Il justifierait le « ≈ 0,25 ct, à confirmer » de JR.
6. **Curseur de carats sur une photo de main** : simple, sans réalité augmentée [V][B5].
7. **Métal choisi séparément pour la tête et le corps**, prix recalculé [V][B7].
8. **Avertissement honnête sur le rendu** (« digital rendering… may vary slightly ») [V][B7]. Mais le 360° de la bague complète reste « Shown in 1 ct. » [V][B6] : le visuel ne montre pas la bague commandée. C'est la faille à exploiter par la promesse de JR (modèle issu du fichier de fabrication, pierre filmée).
9. **WhatsApp dans le menu de contact** [V], comme le bouton prévu chez JR (`NEXT_PUBLIC_WHATSAPP_NUMBER`).

## Défauts observés

1. **Texte provisoire en production** : « Blue Nile value prop TBD. » à côté de l'offre de financement (fiche monture sur iPhone, fiche pierre, bague complète, Creative Studio) [V][B2][B5][B6][B7].
2. **Le rendu 360° de la bague complète ne suit pas la pierre** : « Shown in 1 ct. » avec une pierre de 2,52 ct, puis de 1,65 ct [V][B6].
3. **iPhone** : la feuille « Visit a Showroom » couvre environ 60 % de l'écran dès l'arrivée et ne se ferme pas d'un tap à côté (croix seulement). Elle masque le bouton Filters [V].
4. **Fiche pierre ouverte directement** : barre d'étapes vide (« 1 2 3 » sans libellés). Date d'expédition et « Select this diamond » absents pendant environ 6 s [V][B5].
5. **Fenêtre de choix** : Gemstone et Recommended Diamond n'ont pas changé la destination ; Recommended Diamond a donné une liste vide [V] (cause possible : mon clic sur la carte [I]).
6. **Deux numéros de téléphone** selon la page (1-800-242-2728 et 1-888-565-7641) [V][B5][B14].
7. **Gravure offerte, mais la bague gravée n'est plus retournable** [V][B2][B10].
8. **Délai de retour compté depuis l'expédition**, pas la réception [V][B10].
9. **Liste de pierres** : tri par défaut « Best Match », en tête 49 298 $ et 90 742 $, carats à partir de 1,00 [V][B3]. Entrée haut de gamme pour un acheteur moyen [I].
10. **Liste des tailles de la fiche** limitée à 3–9, alors que le filtre va jusqu'à 15 [V] (liste peut-être tronquée à l'affichage [S]).

## Temps d'apparition du visuel principal

Mesure : première image produit chargée et visible, ou LCP. Liaison de centre de données, valeurs indicatives.

| Page | Ordinateur | iPhone 13 émulé |
|---|---|---|
| Galerie `/engagement-rings` | 1re bague 3,4 s (LCP 2,66 s) | LCP 1,06 s (bannière) |
| Fiche monture | 1,77 s (LCP 1,73 s, photo) | 1,71 s (LCP 1,64 s) |
| Creative Studio | 2,9 s (LCP 2,70 s) | 1,9 s (LCP 1,58 s) |
| `/diamonds` | 1re pierre 2,9 s (LCP 2,66 s) | LCP 3,47 s (texte) |
| Fiche pierre synthétique (accès direct) | 3,0 s | 4,4 s |
| Bague complète (après le clic) | 2,7 s | 3,8 s |
| Liste de pierres après « Continue » | 2 à 12 s selon l'essai | non mesuré |

## Limites de l'audit

- **Panier non audité** : robots.txt interdit `/shopping-cart*`, `/checkout*`, `/wishlist*`, `/services/returns` et toute adresse avec paramètre (`Disallow: /*?*`) [V][B22]. Le script a bloqué ces pages. Frais du panier, moyens de paiement et taxes viennent des pages de service, pas du panier.
- `/diamonds?RingMatchID=…` et `/complete-jewel?j=…` ont été atteintes par les boutons du site (navigation côté client, sans requête de page). Elles n'ont jamais été chargées directement.
- **Non concluants ou non testés** : choix de forme dans le 360°, cartes Gemstone et Recommended Diamond, On Sale et Fast Shipping, devise EUR, taille et « Change Diamond » sur la bague complète, loupe et rotation de la pierre, filtres sur iPhone.
- Aucun chat ni WhatsApp ouvert. Aucun formulaire rempli, aucun compte créé. Le cœur « liste de souhaits » n'a pas été testé.
- Firecrawl était indisponible (crédits épuisés) : les pages ont été lues avec Chromium, une page toutes les 3 s au moins.
- **Captures** : 76 produites (avec une tentative antérieure), au-delà de la limite de 20 ; réduites à 20 dans `scratchpad/audit/us/blue-nile/`.
- Non revérifié ici (fiche d'exploration) : constructeur « ouvert dans 40 pays », certificat de remplacement pour l'assurance dès 5 000 $ [V17], chiffres de Signet.

## Sources (lues ou actionnées le 15/11/2026)

- [B1] https://www.bluenile.com/engagement-rings
- [B2] https://www.bluenile.com/engagement-rings/design-your-own-ring/classic-four-prong-solitaire-engagement-ring-in-14k-white-gold-item-194360 (et `…-14k-yellow-gold-item-203257`, `…-14k-rose-gold-item-203256`, `…-18k-white-gold-item-194508`, `…-18k-yellow-gold-item-194158`, `…-platinum-item-194156`)
- [B3] https://www.bluenile.com/diamonds?RingMatchID=194360 (atteinte par « Continue »)
- [B4] https://www.bluenile.com/diamonds · https://www.bluenile.com/diamonds/lab-grown-diamonds
- [B5] https://www.bluenile.com/diamond-details/29635714 (naturel) · https://www.bluenile.com/diamond-details/29824795 et https://www.bluenile.com/diamond-details/29969551 (synthétiques)
- [B6] https://www.bluenile.com/complete-jewel?j=17747604&s=30341322 et `&s=30676971` (atteintes par « Select this diamond »)
- [B7] https://www.bluenile.com/engagement-rings/custom-engagement-rings/knife-edge-solitaire-engagement-ring-diamond-tulip-head-item-291542
- [B8] https://www.bluenile.com/engagement-rings/by-james-allen
- [B9] https://www.bluenile.com/james-allen · https://www.bluenile.com/james-allen-faq
- [B10] https://www.bluenile.com/services/free-returns
- [B11] https://www.bluenile.com/policies/returns
- [B12] https://www.bluenile.com/services/shipping
- [B13] https://www.bluenile.com/services/warranty
- [B14] https://www.bluenile.com/services/diamond-upgrade-program
- [B15] https://www.bluenile.com/services/diamond-price-match
- [B16] https://www.bluenile.com/services/blue-nile-credit-card
- [B17] https://www.bluenile.com/jewelry-stores/virtual-appointment
- [B18] https://www.bluenile.com/jewelry-stores
- [B19] https://www.bluenile.com/contact-us
- [B20] https://www.bluenile.com/reviews
- [B21] https://www.bluenile.com/education/rings/find-your-ring-size
- [B22] https://www.bluenile.com/robots.txt
