# Audit Adiamor

- **Site** : Adiamor (Los Angeles, Californie) — https://adiamor.com
- **Page de départ** : https://adiamor.com/design-your-own/ring/ (page d'aiguillage) ; parcours audité : recherche de montures `/engagement-rings/search/` → fiche monture → recherche de diamants `/diamonds/search/round` → fiche diamant → page « Your Ring » `/your-setting/?setting=R2938-WG14-Round&diamond=D-82432270`
- **Date** : 15/11/2026 (date fixée par la consigne ; horloge de la machine d'audit : 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 (et 1366×1000) ; Chromium en affichage iPhone 13. Aucun appareil réel.
- **Statut** : **partiel**. Aucun blocage du site (HTTP 200). Mais `robots.txt` interdit `/cart/` : le panier n'a pas été ouvert et le bouton « ADD TO CART » n'a pas été cliqué. La bascule Naturel / Laboratoire de la recherche de diamants n'a pas pu être actionnée (voir limites).

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options observées | Source |
|---|---|---|
| 0. Aiguillage | « Design a custom diamond ring in 3 easy steps » : forme de pierre et style de monture, choix du diamant, commande ; boutons SEARCH DIAMONDS / SEARCH RING SETTINGS [V] | `/design-your-own/ring/` |
| 1. Monture | recherche filtrable ; fiche : métal (8 options), forme de pierre centrale, style de griffes (4 ou 6) [V] | `/engagement-rings/search/`, fiche `r2938` |
| 2. Diamant | recherche : forme, carat, prix, taille (cut), couleur, pureté, filtres avancés, certificat GIA / IGI [V] | `/diamonds/search/round` |
| 3. Récapitulatif | « Your Ring » : taille de doigt (3,25 à 9), style de griffes, prix total, financement, ajout au panier [V] | `/your-setting/…` |
| 4. Panier | non ouvert (`/cart/` interdit) | — |

Les deux ordres sont possibles : « ADD TO DIAMOND » après la monture, « ADD TO RING SETTING » après le diamant ; l'étape 3 « Review Your Ring » est numérotée dans un bandeau de 3 étapes [V]. Chaque pastille du bandeau propose View / Change / Remove [V].

## Contrôles vérifiés

Décompte des contrôles visibles : page de départ 63 (ordinateur) et 37 (iPhone) ; recherche de diamants 182 / 88 ; recherche de montures 246 / 221 ; fiche diamant 100 ; fiche monture 137. En-tête et pied de page non répétés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « SIGN ME UP! / NO, THANKS / Close dialog » | modale e-mail | s'ouvre seule et **intercepte les clics** (« SIGN UP & GET THE CODE ») ; ne pas saisir d'e-mail | — | fermée par « NO, THANKS » |
| USD | bouton devise | sélecteur de devise | — | non ouvert |
| 877-627-5094, Send email to support, Open help desk, Chat with us live | liens / boutons | téléphone, e-mail, aide, chat | — | cibles lues ; chat non ouvert |
| Open search / Wishlist / Shopping cart / Login | boutons, liens | recherche, favoris, panier, connexion | — | non actionnés (`/wishlist`, `/cart/`, `/auth/` interdits) |
| SEARCH DIAMONDS | lien | `/diamonds/search/` | — | OK |
| SEARCH RING SETTINGS | lien | `/engagement-rings/search/` | — | OK |
| Learn More about Diamond Engagement Rings | lien | page d'information | — | cible lue |
| Pavé « Flexible Payment Options » / « Lifetime Warranty » | liens | `/services/payment-options/`, `/policies/warranty/` | — | lus |
| Diamants : NATURAL / LAB GROWN | boutons | bascule d'origine ; l'intitulé de la page dit « Natural diamonds selected » | — | **clics expirés** (3 essais) ; paramètre d'adresse `diamond_origin=lab` ignoré par la page ; **non vérifié** |
| Champ « Item or Certificate Number » | texte | une saisie (`$3,000`, saisie par erreur dans ce champ) a filtré à 151 résultats via `search=` | — | fonctionne |
| SHAPE (10 icônes) | cases | cliquer « Oval » ajoute la forme : 8 265 → 10 229 résultats, adresse mise à jour | prix des cartes inchangés | **OK** |
| CARAT (curseur + 2 champs) | curseur | plage par défaut 1,00 à 15,00 ct | — | lu, non déplacé |
| PRICE (curseur + 2 champs) | curseur | 188 $ à 1 028 988 $ | — | lu, non déplacé |
| CUT GRADE / COLOR GRADE / CLARITY GRADE (curseurs) + « i » | curseurs, bulles | échelles : Fair, Good, Very Good, Excellent, Affinity ; K à D ; SI2, SI1, VS2, VS1, VVS2, VVS1, IF, FL. Défaut : Excellent-Affinity, H à D, VS2 à FL. La bulle « Cut Grade » s'ouvre avec un texte explicatif | — | **OK** (bulle) ; curseurs non déplacés |
| ADVANCED FILTERS | bouton | déplie : longueur/largeur 0,5 à 3, fluorescence, polish, symétrie, table, etc. ; filtres de certificat GIA et IGI ; cases « Shipping Soon » et « Image or Video Available » | — | **OK** ; « Shipping Soon » : 8 265 → 3 174 résultats |
| Sort By (liste) | liste | 9 tris : Newest, Carat ↑↓, Color ↑↓, Clarity ↑↓, Price ↑↓ ; « Carat : High to Low » appliqué, adresse mise à jour | — | **OK** |
| Results / Compare | onglets | « Compare » avec liste vide : message « Sorry, no record found for Diamonds » | — | **défaut d'état vide** (voir Défauts) |
| Grid / List | boutons | bascule d'affichage | — | clics expirés, **non vérifié** |
| Remove filter … / Reset Filters | boutons | retirer un filtre ou tout réinitialiser | — | « Reset Filters » : clic expiré, non vérifié |
| Carte diamant | lien | fiche diamant ; prix visible (ex. « 1.01 ct. Natural Round Diamond, Price $2,453 ») ; badge 360° sur certaines cartes ; mention « Sample Image » sur certaines | de 188 $ | OK |
| Case de comparaison, cœur | cases, boutons | comparer / favoris | — | non testés |
| Fiche diamant : Preview, Side/Top dimension preview, View certificate 1 | boutons | aperçu image/vidéo, cotes, certificat | — | clics expirés (la modale e-mail était à fermer) ; **non vérifié** |
| Fiche diamant : DIAMOND DESCRIPTION / DIAMOND DETAILS | accordéons | détails : poids, forme, taille, couleur, pureté, profondeur 62,8 %, table 58 %, polish, symétrie, girdle, culet, fluorescence « Strong », mesures 6,36 × 6,31 × 3,98 mm, certificat GIA n° 1246072630 | — | **OK** |
| More information about Bank Wire Price | bouton | explique le prix par virement | −1,5 % | non lu ; pourcentage lu sur la page de paiement |
| Price match guarantee | bouton | garantie d'alignement de prix | — | non ouvert |
| Starting at $114/mo with Affirm | lien | financement Affirm | — | cible lue (`javascript:void(0)`) |
| SELECT THIS DIAMOND | bouton | affiche « What would you like to do ? ADD TO RING SETTING / ADD TO CART » | — | **OK** |
| ADD TO RING SETTING | bouton | ouvre `/your-setting/?setting=…&diamond=…` | total affiché | **OK** |
| SHARE WITH A FRIEND / CONNECT WITH US | boutons | partage, contact | — | clics expirés ; **non vérifié** |
| Fiche monture : 14K White Gold - $500 | liste déroulante | 8 métaux, voir ci-dessous ; l'adresse (`sku=…-YG18-…`) et le prix changent | variable | **OK** |
| Fiche monture : Round | liste | forme de pierre centrale | — | non déployée (défilement impossible) |
| Fiche monture : Prong Style | liste | 4 Prongs / 6 Prongs | 0 $ de différence observé (14 k rose : 500 $ → 500 $) | **OK** |
| Fiche monture : Front / Side / Product in hand view, +57 / +2 / +10 | boutons | vues photo ; « +57 » : « Shown With 2.11 Ct. Round D VS2 » ; bouton « hand » sans effet détecté | — | partiel : clics expirés pour 3 boutons, « +57 » OK |
| Need it sooner | bouton | texte : fabrication à Los Angeles, expédition estimée au 4 décembre ; appeler le 877-627-5094 | — | **OK** |
| ENGAGEMENT RING DESCRIPTION / DETAILS | accordéons | fiche technique : n° de style, fabriqué aux États-Unis, tailles 3,00 à 9,00 (autres sur appel), finition haut poli, largeur 2,00 mm, 4 ou 6 griffes, métaux platine / 14 k / 18 k / 19 k | — | **OK** |
| SELECT THIS SETTING | bouton | propose « ADD TO DIAMOND / ADD TO CART » | — | **OK** |
| ADD TO DIAMOND | bouton | `/diamonds/search/round?…` avec la monture retenue dans le bandeau (« $450 ») | — | **OK** |
| ADD TO CART | bouton | ajout au panier | — | **non cliqué** (panier interdit) |
| « Your Ring » : Select Ring Size | liste | 24 tailles : 3,25 à 9 par quarts | — | **OK** |
| « Your Ring » : Select Prong Style | liste | 4 Prongs / 6 Prongs | 0 $ | **OK** |
| « Your Ring » : SETTING DETAILS | accordéon | même fiche technique | — | **OK** |
| Find your ring size / questions fréquentes (financement, taille, personnalisation, bon diamant, plan de soin) | liens, accordéons | pas de contenu relevé | — | **sans effet visible** dans mon test |
| Avis : Open review image 1 à 10, Read summary by topics, With media | boutons | photos de clients, résumé par thèmes | — | non ouverts |
| Liens Bizrate, BBB, Yelp, Google Reviews, The Knot | liens externes | services tiers | — | cibles lues |

## Options disponibles

- **Métaux** (monture R2938, 2 mm) : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; **19 k blanc** ; platine [V].
- **Prix par métal** (monture R2938, prix catalogue barré / prix de vente) : 14 k blanc ou rose 500 $ / 450 $ ; 18 k jaune 660 $ / 594 $ ; 19 k blanc 1 000 $ / 900 $ ; platine 950 $ / 855 $. Le supplément 18 k est de 160 $ [V, calcul : 660 − 500]. Les remises relevées valent 10 % sur les quatre prix lus [V, calcul].
- **Formes de pierre** : Round, Oval, Emerald, Cushion, Radiant, Princess, Pear, Asscher, Marquise, Heart [V].
- **Griffes** : 4 ou 6 ; aucun surcoût relevé [V].
- **Taille de doigt** : 3,25 à 9 par quarts de taille ; « 3,00 à 9,00 » sur la fiche ; autres tailles sur appel [V].
- **Diamants** : naturels et de laboratoire (bascule non vérifiée) ; certificats GIA et IGI ; cut grade maison « Affinity » au-dessus d'Excellent [V].
- **Gravure** : aucune option vue [I].
- **Styles de monture** (catégories d'adresses) : solitaire, pavé, trois pierres, vintage, « details », fashion, diamant de laboratoire [V, adresses de la recherche].
- **Sur mesure intégral** : non proposé dans le parcours ; la page « Can I customize this ring? » existe mais son contenu n'a pas pu être lu [V pour la question, I].

## Prix, délais, retours, garanties

- **Prix** : monture « Original price $500, Current price $450, Setting Only » ; diamant « $2,453 » ; **total** « Original price $2,953, Current price $2,903 » ; « Bank Wire Price: $2,859 » (−1,5 %, cohérent avec la page de paiement) ; « Starting at $134/mo with Affirm » [V : `/your-setting/…`]. La remise de 10 % porte uniquement sur la monture ; le diamant n'est pas remisé [V, calcul].
- **Décomposition** : deux lignes (monture, diamant) + total ; pas de détail métal / main-d'œuvre [V].
- **Délai** : fabrication « about 3-5 business days » après confirmation de la commande (avant 14 h, heure du Pacifique, démarrage le jour même) ; date d'expédition affichée : « as early as Friday, December 4 » pour la monture seule, « Monday, December 7 » pour la bague avec diamant, commande avant 14 h [V : `/services/after-you-order/`, fiches].
- **Retours** : 30 jours, « refund, replace or exchange any unworn item », remboursement sous 4 jours ouvrés après inspection ; frais d'envoi de retour à la charge du client (envoi recommandé assuré) [V : `/policies/return-policy/`]. Exception pour fabrication sur mesure : **non lue** sur les pages ouvertes.
- **Garantie** : à vie, avec serrage, polissage, rhodiage et nettoyage gratuits à vie ; usure normale exclue ; frais d'envoi minimes [V : `/policies/warranty/`]. Remise à taille gratuite et estimation écrite gratuite annoncées dans le bandeau « Why shop at Adiamor ? » (« Complimentary Resizing », « Complimentary Appraisal ») [V pour l'annonce, détails non lus].
- **Livraison** : FedEx Priority Overnight gratuit aux États-Unis au-dessus de 250 $ (en dessous : FedEx 2 jours, 10 $) ; samedi : 25 $ ; international : minimum de commande 1 500 $, livraison gratuite, droits, TVA et frais de courtier à la charge du client et non remboursables ; signature d'un adulte [V : `/policies/shipping-policy/`].
- **Paiement annoncé** : cartes, Affirm (0 à 36 % TAEG sur 3, 6 ou 12 mois), PayPal, virement (−1,5 %), Zelle sur demande, paiement par téléphone [V : `/services/payment-options/`].

## Confiance et service

- **Preuves de fabrication** : « Manufacturer Direct », « hand-made in our Los Angeles manufacturing facility », inspection par des gemmologues avant expédition ; coffret en bois laqué [V]. **Aucune photo ni vidéo d'atelier** relevée sur les pages visitées ; pas de suivi de commande vu avant la connexion [I].
- **Certificats** : GIA (exemple lu, n° affiché sur la fiche), IGI cité en filtre ; certificat ouvrable par bouton (non vérifié) [V pour le numéro].
- **Libellé du synthétique** : « Lab Grown » (bouton et bandeau « Lab grown diamonds on sale ») [V] ; champ « Diamond Growth Type : Natural » sur la fiche [V].
- **Langues, devise** : anglais ; sélecteur « USD » [V].
- **Avis** : « 158 Reviews » sur la monture lue, photos de clients (10 vignettes), liens Bizrate, BBB, Yelp, Google, The Knot 2017 [V]. Note moyenne globale non lue.
- **Service** : téléphone, e-mail, chat, aide, financement Affirm, garantie d'alignement de prix, présence au 510 W 6th St, Suite 1200, Los Angeles [V].
- **Ancienneté et reconnaissance** : « Online Since 1998 », bandeaux de médias (NBC, BuzzFeed, The Knot, etc.) [V pour l'affichage].

## Points forts à retenir pour JR Diamond

1. **Total affiché à chaque étape** dans le bandeau de 3 étapes (monture 450 $, diamant 2 453 $, total 2 903 $) avec View / Change / Remove : on revient en arrière sans recommencer (`/your-setting/…`).
2. **Deux ordres de départ** (monture d'abord ou diamant d'abord) avec un bouton unique d'orientation « What would you like to do? » (`/diamonds/…`).
3. **Fiche technique complète du diamant** (profondeur, table, girdle, culet, fluorescence, mesures en mm, n° de certificat) sans clic de plus que l'accordéon : répond à la peur de l'échange de pierre.
4. **Prix « virement » affiché à côté du prix carte** (−1,5 %) : montre qu'un mode de paiement a un coût.
5. **Date d'expédition affichée dès la fiche**, qui change quand on ajoute le diamant (4 décembre → 7 décembre) : honnête sur le délai.
6. **Avis avec photos de clients** (10 vignettes) sur la fiche monture.
7. **Filtres qui écrivent l'adresse** (`?diamond_shape=…&sort_column=…`) : la recherche est partageable. C'est l'action « sans dépendance » identifiée pour le prototype.

## Défauts observés

- **Fenêtre e-mail** (« SIGN UP & GET THE CODE ») qui apparaît seule et empêche les clics derrière elle : sur mobile comme sur ordinateur [V].
- **Onglet « Compare » vide** : « Sorry, no record found for Diamonds » au lieu d'un message d'aide [V].
- **Prix catalogue barré partout** (500 $ → 450 $, « ON SALE ») : le prix « normal » ne semble jamais pratiqué ; à l'opposé de l'affichage honnête [V pour l'affichage, I pour l'interprétation].
- **Pas d'aperçu 3D ni de sélection d'une bague configurée en image** : l'image reste celle d'une photo de monture avec « Shown With 2.11 Ct. Round D VS2 » (diamant différent de celui choisi) [V].
- Plusieurs boutons n'ont pas réagi dans mon test (Grid / List, Preview, Reset Filters, Natural / Lab, partage, « Find your ring size ») [V comme observation, cause non établie ; la modale e-mail et des éléments fixes ont pu intercepter les clics].
- Exception « sur mesure » au droit de retour non vue ; confirmation à chercher [I].

## Limites de l'audit

- Panier non ouvert ni testé (`/cart/` interdit) ; paiement non visible.
- Bascule Natural / Lab Grown non vérifiée : prix, étiquettes et certificat IGI des diamants de laboratoire non relevés.
- Curseurs de carat, prix, taille, couleur et pureté lus mais non déplacés.
- Aperçu du diamant (photo, 360°, vidéo), certificat, partage, financement Affirm, chat : non ouverts.
- Mesure : une seule passe à froid sans limitation de réseau depuis un serveur cloud. Plus grande peinture de la page de départ : 0,996 s (ordinateur, image du bandeau), 0,720 s (iPhone) [V]. Temps de la fiche monture, de la fiche diamant et de la page « Your Ring » non mesurés.
- Une seule monture (R2938, 2 mm) et un seul diamant (D-82432270) parcourus de bout en bout.
- Sondages de politique : pages de retour, garantie, livraison et paiement lues en partie ; la clause sur les pièces sur mesure n'a pas été trouvée.

## Sources

- https://adiamor.com/design-your-own/ring/
- https://adiamor.com/engagement-rings/search/
- https://adiamor.com/engagement-rings/solitaire/classic-solitaire-setting-2mm/r2938?sku=R2938-WG14-Round&rfr=search&nav=rings
- https://adiamor.com/diamonds/search/
- https://adiamor.com/diamonds/1.01-ct-h-vs2-excellent-cut-round-diamond/d82432270?rfr=search&nav=diamonds&type=diamond
- https://adiamor.com/your-setting/?setting=R2938-WG14-Round&diamond=D-82432270
- https://adiamor.com/policies/return-policy/
- https://adiamor.com/policies/warranty/
- https://adiamor.com/policies/shipping-policy/
- https://adiamor.com/services/payment-options/
- https://adiamor.com/services/after-you-order/
- https://adiamor.com/robots.txt (règles `/cart/`, `/wishlist`, `/auth/`)
- Fichiers de travail (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/adiamor/`
