# Audit : Hamilton Jewelers (New Jersey)

- **Site** : Hamilton Jewelers, Princeton NJ et Palm Beach FL, depuis 1912. https://hamiltonjewelers.com/
- **Page de départ** : https://hamiltonjewelers.com/pages/design-your-ring (constructeur : `/apps/ring-creator/rb-setting-details`, `rb-stone-list`, `rb-stone-details`, `rb-ring-review`)
- **Date** : 15/11/2026 (contrôle exécuté le 25/11/2026)
- **Appareils** : Chromium ordinateur (1366 px) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le blocage du 24/11 n'a pas réapparu : `robots.cjs` répond AUTORISÉ pour toutes les adresses ouvertes (`Allow: /`), le navigateur obtient HTTP 200 partout. Le parcours s'arrête avant l'ajout au panier : `Disallow: /cart/` interdit `/cart/add` [V, robots.cjs]. Un `curl` brut sur `/robots.txt` reçoit une page de vérification Cloudflare ; je n'ai pas réessayé et n'ai rien contourné.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options (vérifiées) |
| --- | --- | --- |
| 0. Page de départ | `/pages/design-your-ring` | Bouton « Create your ring » ; 33 montures « Design your ring » avec « Starting at » ; liens vers guide des 4 C, bagues de mariage, rendez-vous |
| 1. Choose Setting | `rb-setting-list` (182 résultats en 18 k blanc, 12 pages) puis `rb-setting-details?ring_stock_num=…` | Métal, forme de pierre prise en charge, taille de doigt US 3 à 13 ; boutons « Select Setting », « Add to Cart », « Ask a Question » |
| 2. Choose Stone | `rb-stone-list` (4 139 résultats, rond, 0,50 à 4,00 ct, diamants naturels) puis `rb-stone-details` | Forme, carat, couleur, pureté, taille, prix, filtres avancés, tri ; fiche : image, vidéo, certificat |
| 3. Complete Ring | `rb-ring-review` | Récapitulatif monture + pierre, taille de doigt, sous-total, « Add to Cart », « Ask a Question », « Start Over », « Drop a Hint » |
| Panier | `/cart` | Vide (ajout interdit par robots.txt : non testé) |

## Contrôles vérifiés

Relevé complet par `controls.cjs` : 141 contrôles ordinateur et 150 iPhone sur la page de départ, 114 / 121 sur la fiche monture. Hors en-tête, pied de page et menus, ceux du constructeur sont :

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastille métal 18 K blanc | pastille (image) | Charge la variante `DMT180990` ; photos blanc | 1 295 $ | OK [V] |
| Pastille métal 18 K jaune | pastille | Change de référence (`DMT181032_Rou`), libellé « 18K Yellow Gold » | 1 295 $ (inchangé) | OK [V] |
| Pastille métal 18 K rose | pastille | Référence `DMT181081_Rou`, « 18K Rose Gold » | 1 295 $ (inchangé) | OK [V] |
| Pastille métal platine | pastille | Référence `DMTPT1319_Rou`, « Platinum » | **1 595 $ (+300 $)** | OK [V] |
| Forme : Round, Asscher, Marquise, Emerald, Cush Brill, Pear, Heart, Princess, Oval, Radiant (10 boutons + flèches) | boutons | Chaque clic change le suffixe de la référence (`_Mar`, `_Ova`…) et le libellé « Supported Shape » ; la monture reste la même | inchangé | OK [V] ; image non vérifiée forme par forme |
| Taille US 3 à 13 (21 boutons, demi-tailles) | boutons | Sélection ; sans taille, « Select Setting » ne navigue pas | inchangé | OK [V] |
| See Size Conversion Chart | bouton | Ouvre un tableau : US, UK/Australie, France, Allemagne/Asie, Inde/Chine/**Israël**, Italie | – | OK [V] |
| Ask a Question | bouton | Fenêtre : nom, e-mail, mobile, message, « Submit » ; **non envoyé** | – | OK [V] |
| Select Setting | lien | Vers `rb-stone-list`, carat 0,50 à 4,00, naturel, blanc, forme de la monture | – | OK [V] |
| Add to Cart (fiche monture et récapitulatif) | bouton | **Non testé : `/cart/add` interdit par robots.txt** | – | non testé |
| Change Setting / Change Stone / View / Start Over | liens | Retour à la liste des montures ou pierres ; « View » ouvre la fiche | – | liens lus [V], Start Over non cliqué |
| Forme de pierre (10 vignettes de la liste) | boutons | Filtre de la liste | – | affichés [V] ; clic non répété |
| Carat : 0,50 à 4,00 ct | curseur | Plage affichée ; effet non mesuré | – | affiché [V] |
| White Color (D à K) / Fancy Color (14 teintes : jaune, orange, rose, bleu, vert, brun, rouge, blanc, violet, pourpre, gris, olive, noir, autre) | listes | Menus ouverts, options lues | – | OK [V] |
| Clarity (FL à I3, 12 niveaux) / Cut (Ideal à Poor) | listes | Menus ouverts, options lues | – | OK [V] |
| Price | curseur | Deux bornes ($) | – | affiché [V] |
| Hearts & Arrows | case | Menu ouvert | – | OK [V] |
| All Filters | panneau | Recherche par n° de stock, forme, carat, couleurs, clarté, taille, prix, polissage, symétrie, fluorescence, laboratoire, profondeur, table, Hearts & Arrows ; « Reset All » ; « Apply Filters » | – | OK [V] |
| Sort By | menu | Carat, couleur, clarté, taille, prix, chacun « Lowest / Highest » ; prix « Highest » : première pierre 216 474 $ puis 160 756 $ | – | OK [V] |
| Change View / Switch view | bouton | Bascule grille/liste ; affichage de la liste lu ; changement visuel non mesuré | – | OK partiel [V] |
| Pagination 1, 2, 3 … 345 | liens | Page 1 sur 345 ; pages suivantes non ouvertes | – | affiché [V] |
| View image 1 / View video preview | boutons | Vidéo 360° de la pierre réelle (lecteur `diaview.co`, boutons retour rapide, avance, pause, sens inverse) | – | OK [V] |
| View certificate | bouton | Présent sur la fiche d'une pierre à rapport ; **non cliqué** (domaine du laboratoire non vérifié) | – | non testé |
| Add to Ring | lien | Vers `rb-ring-review` avec monture + pierre | + 700 $ | OK [V] |
| Ring Size (récapitulatif) | boutons | Mêmes 21 tailles | – | affiché [V] |
| Drop a Hint | bouton | Présent ; formulaire **non ouvert** | – | non testé |
| Boutons de service du pied de page | liens | Téléphone `tel:+18005426458`, e-mail, Livraison, Retours, Cartes cadeau, Guide des tailles, Registre cadeau, Programme de financement | – | liens lus [V] |
| Chat / WhatsApp / AR / essayage à domicile / comparer / enregistrer / partager | – | **Aucun trouvé** dans le constructeur (seulement « Drop a Hint » et « Ask a Question ») | – | absent [V] |

## Options disponibles

- **Métaux (fiche lue : Hamilton Solitaire 4-Prong)** : or 18 k blanc, jaune, rose et platine. Le filtre de la liste annonce en plus l'or 14 k blanc, jaune, rose [V], mais la fiche testée n'offre pas le 14 k. Le prix du métal n'est pas détaillé : même prix pour les trois ors, +300 $ pour le platine.
- **Formes de pierre** : rond, asscher, marquise, émeraude, coussin brillant, poire, cœur, princesse, ovale, radiant [V].
- **Tailles de doigt** : US 3 à 13 par demi-tailles [V]. Le guide `/pages/sizing-guide` donne diamètre, circonférence, UK/Australie et Europe ; la table du constructeur ajoute une colonne Israël [V].
- **Type de monture** (liste) : solitaire, trois pierres, halo, autre [V].
- **Carat** : 0,50 à 4,00 ct dans la liste de départ [V].
- **Origine** : l'étiquette « Natural Diamonds » est affichée, et le paramètre `diamond_type=natural` est le seul proposé par les liens du site [V]. Les valeurs `lab`, `lab_grown`, `lab-grown` donnent la même liste de 4 139 résultats, donc ignorées [V, test d'adresse]. [I] Pas de diamant synthétique vendu dans le constructeur.
- **Gravure** : « hand and machine engraving on select jewelry » à demander en magasin, prix et délai non affichés [V, `/pages/services`].
- **Pavage, corps de bague, griffes, finition** : aucun contrôle trouvé ; la page d'accueil de l'audit du 24/11 mentionnait texture et finition, non retrouvés sur la fiche testée [V].
- **Vues** : trois photos de la monture (face, profil, dessus) ; photo et vidéo de la pierre. Pas de 3D, de 360° de la bague, de zoom ni d'AR observés [V]. Le script Tangiblee (`cdn.tangiblee.com`) est chargé à l'ouverture, aucun contrôle visible associé [I].

## Prix, délais, retours, garanties

- **Prix** : montures de 795 à 8 150 $ « Starting at » sur la page de départ [V] ; exemple monture 1 295 $ (or) ou 1 595 $ (platine) ; pierre 0,51 ct J SI2 naturelle 700 $ ; **sous-total 1 995 $** affiché, sans autre décomposition (pas de main-d'œuvre, de marge ni de taxe détaillées) [V]. Pierre la plus chère vue : 3,83 ct D FL à 216 474 $ [V]. Prix en dollars, devise unique [V].
- **Délai de fabrication** : **non annoncé** dans le constructeur ni sur les pages lues [V]. La page des bagues de fiançailles promet un sur mesure « from a sketch to a 3D render to a finished ring cast in our workshop » sans durée [V].
- **Livraison** (`/pages/shipping`) : UPS Ground gratuit au-dessus de 250 $ (3 à 5 jours ouvrés) ; 2e jour 25 $ ; lendemain 50 $ ; signature obligatoire ; retrait en magasin le jour même si commande avant 15 h ; **pas de livraison internationale** [V].
- **Retours** (`/pages/returns-exchanges`) : remboursement sous 10 jours, échange ou avoir (un an) sous 30 jours ; **bagues portées, ajustées, gravées, commandes spéciales et sur mesure non reprises** ; soldes définitives ; certificats et boîtes exigés [V]. Pour JR Diamond : l'exception du sur mesure est ici écrite en toutes lettres.
- **Garantie** : réparation gratuite des pièces faites main pendant un an ; ajustement, nettoyage et inspection gratuits à vie pour les bagues de fiançailles (déclaré sur `/pages/engagement-rings` et `/pages/why-hamilton`) [V].
- **Financement** : carte Hamilton émise par Wells Fargo, demande **en magasin seulement** [V].
- **Paiement** : moyens de paiement non vus (panier non atteint) ; Shop Pay et paiement accéléré Shopify sont chargés par la page [I].

## Confiance et service

- [V] Pierres réelles : photo et vidéo 360° de la pierre exacte (stock `P334086`), avec poids, proportions, polissage, symétrie, fluorescence, laboratoire (GIA), profondeur, table, mesures en mm, « Report # » (vide sur la pierre testée), localisation « United States ». Source : `rb-stone-details?natural_stock_num=P334086`.
- [V] Gemmologues GIA, AGS, appraisal; maison de 1912; Rolex Official Jeweler; avis clients non affichés dans le constructeur.
- [V] Montures « made in our own workshop » (page des bagues) ; atelier de réparation et sertissage à Princeton ; aucune photo ou vidéo de fabrication ni suivi de commande dans le constructeur.
- [V] Contact : téléphone 1-800-5-HAMILTON, e-mail, rendez-vous (`/pages/connect`), questions par formulaire sur chaque fiche ; pas de chat ni de WhatsApp.
- [V] Accessibilité : menu d'accessibilité (UserWay) et déclaration ; langue unique : anglais.
- [V] Cookies : bandeau « Accept / Reject / Preferences » ; plus de 50 domaines tiers (publicité, suivi) chargés à l'ouverture.

## Points forts à retenir pour JR Diamond

1. **Pierre réelle filmée à côté de la bague** : chaque diamant a sa photo et sa vidéo 360° (lecteur à pause et sens inverse) et son rapport GIA, l'image de la pierre se retrouvant dans le récapitulatif. Preuve : `rb-stone-details` et `rb-ring-review`. Conforme à la promesse « pierre filmée » de JR Diamond, mais fournie par un fournisseur de stock (VDB, `diaview.co`).
2. **Total lisible en trois étapes** : monture, pierre, sous-total (1 295 + 700 = 1 995 $). Preuve : `rb-ring-review`. Le prix du métal (+300 $ platine) est visible dès la fiche.
3. **Filtres de pierre complets sur un stock de 4 139 résultats** : forme, carat, couleur D à K et fantaisie, clarté FL à I3, taille, prix, polissage, symétrie, fluorescence, laboratoire, profondeur, table, n° de stock, Hearts & Arrows, tri par cinq critères. Preuve : « All Filters ».
4. **Tableau de tailles avec colonne Israël** : le guide des tailles inclut l'Inde/Chine/Japon/Israël. Preuve : « See Size Conversion Chart ». Idée directe pour JR Diamond.
5. **Politique de retour franche sur le sur mesure** : pas de reprise des bagues ajustées, gravées ou sur mesure. Preuve : `/pages/returns-exchanges`. [I] Argument pour la question à l'avocat israélien.
6. **Garanties d'atelier** : un an de réparation gratuite, ajustement et nettoyage à vie. Preuve : `/pages/why-hamilton`.

## Défauts observés

- **Aucun délai affiché** pour une bague composée, alors que JR Diamond annonce 14 jours ouvrés [V].
- **Pas de diamant synthétique** dans le constructeur : seul le naturel est proposé ; l'étiquette « Natural Diamonds » est la seule mention d'origine [V].
- **Aucune vue 3D ni du résultat assemblé** : la photo de la bague reste celle de la monture (avec un diamant de démonstration) ; la pierre choisie est montrée à côté, pas dans la monture [V, `rb-ring-review`].
- **Changer de métal charge une autre référence** sans animation ni prix pour les trois ors : les trois couleurs d'or coûtent exactement le même prix, ce qui interroge le prix expliqué [V, I].
- **Pas de gravure, de pavage ou de griffes configurables** dans le parcours ; gravure seulement en magasin [V].
- **Pas de données d'atelier** : aucune photo ou vidéo de fabrication, aucun suivi de commande [V].
- **Fiche monture : « Select Setting » sans effet visible tant qu'aucune taille n'est choisie**, sans message d'erreur ; il faut choisir une taille d'abord [V].
- **Fiche de pierre : « Report # » vide** et « BGM » en tiret sur la pierre testée, donc rapport non consultable pour 0,51 ct [V].
- **Lourdeur** : image principale de la fiche monture en 4,2 s sur ordinateur, 10,1 s en affichage iPhone ; plus de 50 domaines tiers chargés [V, une mesure].
- **Page « Design your ring »** : le filtre annonce l'or 14 k, mais la fiche testée ne le propose pas [V].
- **Pas de langue ni de devise autre** : anglais, dollars, pas de livraison hors États-Unis [V].
- **Mobile** : contrôles identiques au bureau, aucun menu dédié ; pas de test complet du panier [V].

## Limites de l'audit

- **Panier interdit par robots.txt** : le bouton « Add to Cart » du constructeur n'a pas été cliqué ; frais de livraison au panier, moyens de paiement et récapitulatif de commande non vus. `/cart` (autorisé) est vide.
- Non cliqués : « View certificate » (domaine du laboratoire non contrôlé), « Drop a Hint », « Start Over », envoi du formulaire « Ask a Question », liens externes (Rolex, Centerpiece, etc.), pages 2 à 345 de la liste.
- Une seule monture testée en détail (`DMT180990`, solitaire 4 griffes) ; les autres, dont halo, trois pierres et 14 k, non ouvertes. Les prix de montures « Starting at » viennent de la page de départ, non rouverts un par un.
- Images par forme de pierre, effet du curseur de carat, du curseur de prix et du changement de vue non mesurés (clics comptés, rendu non comparé).
- Mesures de temps : un seul essai par appareil, depuis un proxy d'agent, donc sensibles au réseau. Parcours iPhone mené surtout sur la page de départ, la fiche monture et la fiche pierre ; récapitulatif et filtres mobiles non rejoués.
- Pas de recherche de mots (« lab », « synthétique ») sur tout le site ; l'absence de synthétique est inférée du constructeur, pas du site entier.
- `curl` brut sur `/robots.txt` : page Cloudflare ; l'outil `robots.cjs` a pourtant renvoyé AUTORISÉ. Aucun contournement.

## Sources

- https://hamiltonjewelers.com/pages/design-your-ring (ordinateur et iPhone, 25/11/2026)
- https://hamiltonjewelers.com/apps/ring-creator/rb-setting-list?jewelry_type=ring&view_type=grid&metal_type=White%20Gold%7C18K
- https://hamiltonjewelers.com/apps/ring-creator/rb-setting-details?ring_stock_num=DMT180990_Rou
- https://hamiltonjewelers.com/apps/ring-creator/rb-stone-list?in_journey=true&ring_stock_num=DMT180990_Rou&diamond_type=natural&shape=Round
- https://hamiltonjewelers.com/apps/ring-creator/rb-stone-details?natural_stock_num=P334086 et `…5546001901`
- https://hamiltonjewelers.com/apps/ring-creator/rb-ring-review?natural_stock_num=P334086
- https://diaview.co/player/P334086 (lecteur vidéo, autorisé)
- https://hamiltonjewelers.com/pages/shipping, `/pages/returns-exchanges`, `/pages/preferred-finance-program`, `/pages/sizing-guide`, `/pages/services`, `/pages/why-hamilton`, `/pages/engagement-rings`, `/cart`
- Contrôle `robots.cjs` du 25/11/2026 (AUTORISÉ pour toutes les adresses ci-dessus, INTERDIT pour `/cart/add`)
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/hamilton/`
