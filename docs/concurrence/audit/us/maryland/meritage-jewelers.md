# Audit : Meritage Jewelers (Lutherville, Maryland)

- **Site** : Meritage Jewelers, https://www.meritagejewelers.com (constructeur de bague Punchmark, « Create Your Own Engagement Ring »)
- **Page de départ** : https://www.meritagejewelers.com/ringsettings
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 × 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Les montures, leurs filtres et leur fiche sont audités. L'étape « diamant » répond « 0 diamonds found » (donc pas d'étape 3 avec une pierre). Le panier est interdit par robots.txt (`Disallow: */cart`) : non ouvert, aucun ajout.
- Marques : **V** vérifié (page lue ou contrôle actionné, adresse citée), **I** inféré, **S** supposé.

## Parcours

Constructeur en 3 étapes, ordre modifiable (V : `/ringsettings` met la monture d'abord ; `/ringsettings-complete` sans pierre affiche « 1 Choose Diamond, 2 Choose Setting »).

| Étape | Adresse | Options |
|---|---|---|
| 1 Choisir une bague | /ringsettings | 7 styles, 4 métaux, fourchette de prix, tri, liste « Can be set with » (8 formes), 248 montures, 24 par page |
| Fiche de monture | /ringsettings-details/engagement-rings/accented-engagement-ring/2410773 | 5 photos, taille de doigt 3 à 10 (avec supplément), « Choose this ring », liste de souhaits, expédition, retours, détails, avis |
| 2 Choisir un diamant | /ringsettings-diamonds?diamondshape=round&carat=3.42-4.62 | onglets Natural / Lab-Grown, 6 filtres, tableau, comparaison |
| 3 Bague complète | /ringsettings-complete | « Review Your Ring » : inatteignable (aucune pierre) |
| Panier | /cart | interdit par robots.txt : non ouvert |

## Contrôles vérifiés

Relevé par `controls.cjs` : 197 contrôles visibles sur ordinateur, 312 sur iPhone (V, `/ringsettings`). Le tableau couvre les contrôles du constructeur ; le menu (une centaine de liens de catégories et de marques) et le pied de page sont résumés en dernière ligne.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| STYLES : SOLITAIRE | lien-bascule | requête `settingType=20` : 5 montures (V) | prix par monture | OK, réponse en ~7 s |
| STYLES : SIDE STONE | lien-bascule | `settingType=20,21` : 6 (cumul avec Solitaire) | idem | OK |
| STYLES : THREE STONE | lien-bascule | `20,3` : 26 | idem | OK |
| STYLES : HALO | lien-bascule | `20,10` : 55 | idem | OK |
| STYLES : PAVE | lien-bascule | `20,9` : 8 | idem | OK |
| STYLES : ANTIQUE | lien-bascule | `20,16` : 11 | idem | OK |
| STYLES : BYPASS | lien-bascule | `20,17` : 9 | idem | OK |
| ALL METALS | lien-bascule | `materials=AllMetals` : 248 | prix du premier : 2 507,64 $ | OK |
| WHITE GOLD | lien-bascule | `materials=WhiteGold` ; le prix affiché change (ex. 2 381,40 $ au lieu de 2 507,64 $ sur la première carte) | oui | OK |
| YELLOW GOLD | lien-bascule | cumul `WhiteGold,YellowGold` | oui | OK |
| PLATINUM | lien-bascule | cumul `…,Platinum` | oui | OK |
| ROSE GOLD | lien-bascule | non testé de façon fiable (réponse décalée) | non vérifié | non testé |
| Prix « No minimum » / « Unlimited » | champs texte | saisie de 2 000 / 3 000 sans effet visible en 2,5 s ; requête par défaut `price=0-14999` | filtre prix | non concluant |
| Can be set with : (8 formes) | lien déroulant | ROUND, PRINCESS, EMERALD, ASSCHER, CUSHION, OVAL, PEAR, MARQUISE ; clic sur une forme non abouti | n/d | non concluant |
| Sort by | liste | valeurs : Default, Featured, High to Low, Low to High, Newest ; la liste n'a pas changé dans mes mesures (réponse décalée) | n/d | non concluant |
| CLEAR FILTERS | bouton | remet 248 montures | n/d | OK |
| VIEW (grille / liste) | 2 boutons | non actionnés | n/d | non testé |
| Previous / Next, pages 1 à 11 | boutons | `pageNum=2` chargé, premiers prix différents | n/d | OK |
| Quick view (œil) | bouton | fenêtre : titre, prix (1 484,58 $, première carte de la page 2), « EMAIL DETAILS », « STYLE # CONFIG.5759947 » | n/d | OK |
| Cœur (liste de souhaits) | bouton | non actionné (compte probable) | n/d | non testé |
| Boutons Add to Cart / Inquire des cartes | boutons | présents mais masqués (classe `hide`) : aucun achat direct d'une monture | n/d | masqués |
| Photos (5) « Click to zoom » | lien | le zoom ne s'est pas ouvert dans mon essai (clic forcé échoué) | n/d | non concluant |
| Points « Go to slide 1 à 5 » | boutons | carrousel de 5 photos | n/d | présents, non actionnés |
| Taille de doigt (liste 3 à 10, demi-tailles) | liste | suppléments : +22 $ (3 à 6,5), +19 $ (7), +28 $ (7,5 et 8), +37 $ (8,5 et 9), +46 $ (9,5 et 10) | oui, par taille (V) | affichés ; effet sur le total non mesuré |
| CHOOSE THIS RING | bouton | ouvre l'étape 2 avec forme « round » et carat 3,42 à 4,62 préremplis (la monture annonce 3,80 à 4,20 ct) ; la taille choisie est reprise (« Ring size: 9.5 ») | n/d | OK |
| ADD TO WISH LIST | lien | non actionné | n/d | non testé |
| SHIPPING | lien | fenêtre des modes d'envoi (voir plus bas) | n/d | OK |
| RETURNS | lien | non ouvert (clic échoué) ; la page /return-policy a été lue | n/d | partiel |
| PRODUCT DETAILS / REVIEWS | boutons | affichent la fiche technique et 5 avis | n/d | OK |
| WRITE A REVIEW, SUBMIT A STORE REVIEW | boutons | non actionnés (formulaire) | n/d | non testé |
| Inquire (formulaire d'information produit) | fenêtre | nom, courriel, téléphone, message et code de validation en texte ; non rempli | n/d | non testé |
| Étape 2 : Natural / Lab-Grown | 2 onglets | requêtes 200, `recordsTotal: 0` dans les deux cas | n/d | **0 résultat** |
| Étape 2 : filtres Shape (10), Price, Carat, Cut (4), Color (L à D), Clarity (SI2 à F), ADVANCED | curseurs et icônes | affichés ; sans diamant dans le tableau, effet non mesurable | n/d | non testé |
| What's the difference? | lien | la fenêtre attendue ne s'est pas ouverte dans mon essai | n/d | non concluant |
| Étape 2 : « Search by SKU », 20/40/60/120 par page, « My Selected Diamond », comparaison | champ, liste | présents ; tableau vide « No data available in table » | n/d | non testé |
| Menu, pied de page, connexion, bouton « MY BAG », téléphone, Facebook, Instagram | liens | non suivis, sauf pages de contenu lues plus bas | n/d | non testé |

## Options disponibles

- **Styles** : solitaire, side stone, three stone, halo, pavé, antique, bypass (7).
- **Métaux** : or blanc, jaune, rose, platine. Pas d'indication de titre (14 k relevé sur la fiche : « 14K Yellow Gold », V).
- **Formes pour la pierre** : rond, princesse, émeraude, asscher, radiant, coussin, ovale, poire, marquise, cœur (étape 2, V) ; 8 formes dans « Can be set with » (V).
- **Taille de doigt** : 3 à 10 par demi-taille (V).
- **Pierre** : naturelle ou « Lab-Grown » (onglets, V) ; filtres coupe (Fair à Excellent), couleur (L à D), pureté (SI2 à F), carat, prix.
- **Absent** : choix du titre d'or, gravure, griffes, corps de bague, certificat à l'écran (aucun diamant lu), vue 3D, 360°, vidéo, essayage, AR, partage, comparateur de bagues.

## Prix, délais, retours, garanties

- **Prix** : affiché par monture seule, « CENTER STONE NOT INCLUDED » (V). Exemple : monture 14 k or jaune 10 mm rond, 2 507,64 $, hors pierre, hors taille supplémentaire (V). Aucune décomposition (métal, façon, marge). Le total bague + pierre n'apparaît qu'à l'étape 3, que je n'ai pas pu atteindre.
- **Délai** : « Available in 7-10 Business Days » (V, fiche). Sur mesure : aucun délai chiffré (V, /services/custom-designs).
- **Livraison** (V, fenêtre de la fiche) : FedEx Ground 12,42 $, FedEx 2 Day 15,70 $, FedEx Standard Overnight 28,95 $, USPS Priority 2-Day 6,95 $, USPS Priority Express 1-Day 36,60 $, retrait gratuit en magasin. États-Unis uniquement (50 États, Porto Rico, adresses militaires), pas de boîte postale, pas d'envoi hors des États-Unis.
- **Retours** (V, /return-policy) : 15 jours après réception, bague neuve, emballage d'origine ; frais de retour à la charge du client, envoi assuré ; « Personalized or custom pieces are not eligible for returns » ; échange sous 30 jours en cas de défaut ; pierres, diamants compris, « sold as-is » ; remboursement sous 7 à 10 jours ouvrés ; cadeau : avoir non remboursable.
- **Garantie** : la fiche appelle un service de garanties (`get_item_warranties`, V), mais aucun texte de garantie n'est affiché sur la fiche lue (V).
- **Financement** : Synchrony, page /pages/synchrony (V) ; le texte est un gabarit destiné aux commerçants (voir défauts).
- **Moyens de paiement** : non vus (panier interdit).

## Confiance et service

- Téléphone (410) 832-3434 en tête de chaque page, fiche de contact, horaires (mardi à vendredi 10 h à 18 h, samedi 10 h à 17 h, V).
- Avis : 4,9 sur 5, 5 avis récents sur la fiche (V, avis du magasin, dates d'octobre 2026, texte sur le service). Page « Testimonials », programme de fidélité « Meritage Rewards » (liens vus, non lus).
- Sur mesure : /services/custom-designs décrit 4 étapes (rencontre, dessin, modèle CAO et cire « from every angle », fonte et sertissage) et un formulaire de rendez-vous (V, non rempli). Aucune photo ni vidéo de fabrication de la commande du client promise.
- Autres services : estimation, assurance, réparation, rachat d'or et de diamants (liens du menu, V).
- Pas de chat ni de WhatsApp visibles (V, liste de contrôles). Langue : anglais seul ; devise : dollar.
- Libellé du synthétique : « Lab-Grown » et « Lab Grown Diamonds » (V). La page /pages/stunning-lab-grown-diamonds affirme « there really isn't a big difference » avec le naturel et « the same » (V). Aucun certificat GIA ou IGI évoqué sur les pages lues ; liens GIA et IJO en pied de page (V).

## Points forts à retenir pour JR Diamond

1. **Étape pierre préfiltrée sur la monture** : « We started your search with diamonds that fit your chosen setting », forme et carat repris de la fiche (V, URL de l'étape 2 et capture). Pour JR Diamond : proposer d'emblée les pierres compatibles avec la bague choisie.
2. **Ordre libre** : on peut commencer par la monture ou par le diamant (V, `/ringsettings` et `/ringsettings-complete`).
3. **Suppléments de taille affichés par taille** (+19 à +46 $, V) : transparence rare, utile pour une règle de taille de JR Diamond.
4. **Prix de la monture visible sur chaque carte** (V, 24 par page), avec variation par métal (V).
5. **Livraison chiffrée avant le panier** (cinq modes, retrait gratuit, V).
6. **Règle de retour claire sur le sur-mesure** : exclu, et dit sur la page de retours (V).

## Défauts observés

- **Aucun diamant en ligne** : « 0 diamonds found » en Natural comme en Lab-Grown, avec et sans filtre, sur trois essais (V). Le serveur répond 200 avec `recordsTotal: 0`. Le parcours ne mène donc à aucun prix complet.
- **Lenteur des filtres** : chaque filtre prend environ 7 s à répondre (V, 7 mesures de 6,8 à 7,5 s) ; l'affichage reste à l'ancien résultat entre deux. Les bascules rapprochées s'empilent et donnent des états incohérents (V : compteur « 248 » affiché après un filtre).
- **Styles cumulatifs sans indication claire** : un second style s'ajoute au premier au lieu de le remplacer (V).
- **Aucun visuel avancé** : cinq photos de catalogue par monture (galerie `cdn.jewelryimages.net/galleries/stuller_inc`, V), pas de 3D ni de 360° ; on n'y voit pas la bague avec la pierre.
- **Prix de monture seule sans total** : l'acheteur ne connaît pas le coût final avant l'étape 3.
- **Page Synchrony** : texte de gabarit adressé aux commerçants (« NOW YOUR CUSTOMERS CAN APPLY ONLINE… », « 75 % of shoppers… », V) ; coquilles « SYNCRHONY », « Diamond Seach », « Diammond » dans le menu (V).
- **Poids de la bague** annoncé 3,71 g pour 14 k or jaune (V) sans lien visible avec le prix.

## Limites de l'audit

- Étape 3 (« Review Your Ring »), panier, frais de livraison réels et moyens de paiement : non vus (aucune pierre ; panier interdit par `Disallow: */cart`).
- Effets non concluants : tri, filtre de prix, filtre de forme, zoom, « What's the difference? » (mesures décalées par la lenteur du serveur ou clics non aboutis).
- Rose gold, grille/liste, liste de souhaits, formulaires et avis non actionnés.
- Fiche de monture : ordinateur seulement ; la liste de contrôles de l'iPhone (312) a été relevée, pas la fiche ni l'étape 2.
- Mesure du visuel principal (une mesure par appareil) : première image de monture visible en 2,2 s sur ordinateur et 1,6 s sur iPhone ; texte « 248 settings found » en 9,3 s et 7,6 s (V).
- Un navigateur sans compte ni cookies acceptés (bandeau refusé). Une seule monture testée en détail (n° 2410773).

## Sources

Toutes lues le 15/11/2026 (V), robots.txt lu avant (`Crawl-delay: 2`, `Disallow: */cart`, `*/checkout`, `*?sortSpec=`, `*?kw=`) :
- https://www.meritagejewelers.com/ringsettings (contrôles, filtres, requêtes `api/async.php?t=grid&m=fetch`)
- https://www.meritagejewelers.com/ringsettings-details/engagement-rings/accented-engagement-ring/2410773 (fiche)
- https://www.meritagejewelers.com/ringsettings-diamonds?diamondshape=round&carat=3.42-4.62, /diamonds, /ringsettings-complete (étape 2, 3)
- https://www.meritagejewelers.com/return-policy, /services/custom-designs, /pages/synchrony, /pages/stunning-lab-grown-diamonds, /benchmark-ring-lab (cadre vide à la lecture, texte « CUSTOMIZE YOUR BAND »), /education-settings
- Inventaire préalable : docs/concurrence/audit/us/maryland/INVENTAIRE.md
