# Audit : White Box Jewelers (« Da Box »), Portsmouth, New Hampshire

- **Site** : White Box Jewelers, 55 Congress St., Portsmouth NH. **Adresse** : https://whiteboxjewelers.com/ (départ : /ringsettings).
- **Date** : 15/11/2026 (exécuté en session le 25/11/2026). **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Parcours monture → diamant → bague complète vérifié jusqu'à la page « Review Your Ring » ; le panier (`/cart`), les retours (`/returns-and-exchanges`), les conditions et la confidentialité sont **interdits par robots.txt** : non ouverts. Le serveur répond HTTP 404 sur les pages internes mais l'application JavaScript les affiche (le contrôle de départ renvoie 200).
- Marques : [V] vérifié (contrôle actionné ou page lue, adresse indiquée), [I] inféré, [S] supposé. Prix en dollars américains, hors taxe (le NH n'a pas de taxe de vente, voir inventaire).
- Contrôle robots : AUTORISÉ pour /ringsettings, /ringsettingdetail/…, /diamonds, /diamonds-details/…, /ringsettings/diamonds, /complete-diamond-ring, /custom-design, /financing, /faq, /warranty-and-guarantees, /services ; INTERDIT : /cart, /returns-and-exchanges, /terms-and-conditions, /privacy-policy, /account, /wishlist, /register, /checkout-shipping, /invoice, /careers. Les interdits ont été bloqués côté navigateur (aucune requête n'est partie).

## Parcours

[V] Constructeur « Design Your Own Diamond Engagement Ring » en 3 étapes, dans les deux ordres possibles (le bandeau indique « 1 Choose a Setting » sur /ringsettings, « 1 Choose a Diamond » sur une fiche).

| Étape | Adresse | Options |
| --- | --- | --- |
| 1a. Monture | /ringsettings | 1 145 montures ; filtres style (9), métal (7), forme (10 + « Other Shape »), prix min/max ; tri (4) ; 48 pages de 24 |
| 1b. Fiche monture | /ringsettingdetail/setting/… | métal (7), type de pierre (4), taille de pierre (6), taille de doigt (28 valeurs, 3 à 15,5), 4 vignettes dont « 360° SETTING », ventilation des pierres secondaires |
| 2. Diamant | /diamonds (aussi /ringsettings/diamonds) | naturel (« Earth-Mined ») ou synthétique (« Lab-Grown »), forme (10), couleur D à M, pureté FL à I1, carat 0,02 à 30,08, prix, filtres avancés (taille, fluorescence, polissage, symétrie), recherche par stock ; 3 355 fiches naturelles listées (140 pages) |
| 3. Bague complète | /complete-diamond-ring | récapitulatif monture + diamant, total, « Change », « Inquire », partage ; **pas de bouton d'ajout au panier** |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Style Halo / Solitaire / Three Stone / Single Row / Vintage / Multi Row / Bypass / Pave / Others | filtre à vignettes | filtre la liste sans recharger : 355 / 172 / 150 / 176 / 112 / 61 / 47 / 39 / 158 résultats [V] | prix de chaque monture affiché | OK |
| Reset | bouton | rétablit 1 145 produits | — | OK |
| Métal 14 k jaune / blanc / rose, 18 k jaune / blanc / rose, platine | filtre à vignettes | filtre (1 140 à 1 144 résultats) et **change le prix affiché** : 1re monture 4 596 $ (14 k) → 4 581 $ (14 k jaune) → 6 072 à 6 087 $ (18 k) → 6 102 $ (platine) [V] | oui | OK |
| Forme Round, Princess, Cushion, Emerald, Oval, Radiant, Asscher, Marquise, Heart, Pear | filtre | 742 / 232 / 144 / 206 / 243 / 73 / 48 / 162 / 29 / 160 résultats [V] | oui (liste) | OK |
| Other Shape | bouton | liste vidée (0 produit), aucune fenêtre, deux essais [V] | — | **défaut probable** |
| Prix min / max | 2 champs numériques + curseur (810 à 45 294 $) | effet incohérent : min 2 000 sans effet (1 145), max 3 000 → 1 134 résultats seulement [V] | — | **douteux** |
| Sort By (Featured, Price Low/High, High/Low, Newest) | liste | tri correct : 984 $ en tête (croissant), 18 297 $ (décroissant) [V] | oui | OK |
| Vue grille / liste | icônes | clic non concluant (pas de changement visible mesuré) | — | non établi |
| Hide Filters | bouton | clic sans changement mesuré de la liste (dépliage non constaté) | — | non établi |
| Pagination 1, 2, 3, 48, Next | boutons | « Next » charge la page suivante ; le bouton « 2 » n'a pas répondu en 30 s dans l'un des essais [V] | — | partiel |
| Cœur et œil sur chaque vignette | icônes | non cliqués (liste de souhaits `/wishlist` interdite par robots.txt) | — | non testé |
| Fiche : métal (7 vignettes) | choix | change le prix et la **photo** (fichiers `50293-E.jpg`, `.alt1.jpg`, `.alt.jpg` selon le métal) ; 14 k blanc 4 596 $, rose 4 596 $, jaune 4 581 $, 18 k blanc 6 087 $, platine 6 102 $ [V] | oui | OK |
| Fiche : Stone Type | liste (4) | platine 1 ct : naturel VS1-VS2 6 102 $, synthétique VS-SI1 E/F/G 5 367 $, naturel SI1-SI2 6 015 $ [V] | oui | OK |
| Fiche : Stone Size | liste (6) | platine, naturel SI1-SI2 : 1 ct 6 015 $, 1/2 ct 5 817 $, 2 1/2 ct 8 136 $ ; la référence (SKU) change (`50293-E-21/2`) et la fiche indique « Carat 2.5, 8.8 mm » [V] | oui | OK |
| Fiche : Ring Size | liste (3 à 15,5) | choix pris en compte au récapitulatif (« Ring Size : 6 ») ; aucun effet sur le prix [V] | non | OK |
| Fiche : vignettes 1 à 3 | diapositives | photos de la bague [V] ; boutons « Go to Slide » en double (strict mode) | — | OK |
| Fiche : « 360° SETTING » | vignette | aucun lecteur, iframe ni vidéo détectés ; clic non abouti [V] | — | **non fonctionnel ou non détecté** |
| Fiche : Melee Breakdown | volet | liste les pierres secondaires (25 pierres, 0,293 ct, cotes en mm) [V] | — | OK |
| Fiche : Share | bouton | ouvre Facebook, Pinterest, e-mail, X, WhatsApp, « Copy URL » [V] | — | OK (liens non suivis) |
| ADD THIS SETTING (sans diamant) | bouton | aucun changement visible en 5 s, pas de navigation, pas d'erreur [V] | — | muet |
| ADD THIS SETTING (avec diamant choisi) | bouton | mène à /complete-diamond-ring [V] | oui | OK |
| INQUIRE | bouton | fenêtre : 2 noms, e-mail, téléphone, 2 zones de texte ; non remplie [V] | — | OK |
| SCHEDULE AN APPOINTMENT | bouton | fenêtre « Make An Appointment » : date, heure, nom, e-mail, téléphone, « Items I'm Interested In » ; non remplie [V] | — | OK |
| /diamonds : Earth-Mined / Lab-Grown | bascule | passe de 3 355 naturels à une liste synthétique (premiers prix 558 à 573 $, ex. 1,00 ct rond) ; nombre exact non lu proprement [V] | oui | OK |
| /diamonds : forme, couleur, pureté, tri | filtres | modifient le nombre de résultats (3 762 → 3 754 → 3 753) ; la liste du tri croissant s'ouvre sur ~562 $ [V] | oui | OK |
| Fiche diamant : ADD THIS DIAMOND | bouton | mène à /ringsettings filtré sur la forme du diamant (742 montures rondes), bandeau « 1 Choose a Diamond · View · Remove · 534 $ » [V] | oui | OK |
| Fiche diamant : VIEW LAB REPORT | bouton | non cliqué (domaine externe de laboratoire, non contrôlé) | — | non testé |
| Récapitulatif : Change, View, Remove | liens | pointent vers /diamonds, la fiche et /ringsettings [V] | — | OK (non cliqués un à un) |
| Récapitulatif : INQUIRE, partage | boutons | présents ; **aucun bouton « Add to cart »** [V] | — | — |
| Bouton WhatsApp flottant | lien | ouvre `api.whatsapp.com/send?phone=+16034278055` avec un message pré-rempli ; non suivi [V] | — | OK |
| Panier (icône), compte, cœur de l'en-tête | liens | `/cart`, `/account`, `/wishlist` : **interdits par robots.txt**, non ouverts | — | non testé |
| Téléphone | lien `tel:` | +1 (603) 427-8055 [V] | — | OK |

## Options disponibles

- **Métaux (monture)** : or 14 k jaune, blanc, rose ; or 18 k jaune, blanc, rose ; platine [V].
- **Formes** : ronde, princesse, coussin, émeraude, ovale, radiant, asscher, marquise, cœur, poire, « autre » [V].
- **Styles de monture** : halo, solitaire, trois pierres, rangée simple, vintage, multi-rangées, bypass, pavé, autres [V].
- **Pierre de centre sur monture** : synthétique VS-SI1 E/F/G ; naturel SI1-SI2 G-H ; naturel VS1-VS2 F-G (défaut) ; tailles 1/2, 3/4, 1, 1 1/2, 2 1/2 ct (2 ct non listé) [V].
- **Diamants séparés** : naturel ou synthétique ; couleur D à M ; pureté FL à I1 ; carat 0,02 à 30,08 ; prix 91 à 3 884 696 $ (naturel) ; taille, fluorescence, polissage, symétrie [V]. Fiche type : rapport IGI, tableau de cotes (profondeur, table, girdle, culet) [V].
- **Taille de doigt** : 3 à 15,5 par demi-taille [V]. Pas de gravure, pas de choix de griffes ni de corps de bague, pas de vue sur la main ni AR, pas de comparateur : non observés [V].
- **Autres rayons** : gemmes, bijoux de succession, montres, alliances, bijoux fins [V, menu].

## Prix, délais, retours, garanties

- [V] Prix de la monture affiché (de 984 à 18 297 $ trié) et prix du diamant affiché ; total au récapitulatif (534 $ + 4 596 $ = 5 130 $ dans l'essai). [I] La monture est présentée « semi-mount » avec un prix qui varie selon le type et la taille de pierre : le total pourrait compter la pierre de centre deux fois (monture à 4 596 $ calculée pour un diamant naturel de 1 ct, plus le diamant choisi) ; non confirmé, à ne pas retenir comme défaut.
- [V] Aucun délai de fabrication affiché sur le parcours. Page /custom-design : conception CAO « digital 3-dimensional representation », modifications possibles, sans durée.
- [V] Financement (/financing) : « no interest if paid within 60 months » sous conditions, dès 3 000 $ avec carte de crédit approuvée par banque partenaire ; chaque achat s'accompagne de certificat d'assurance, certificat d'authenticité, mise à taille, inspection et nettoyage « complimentary ».
- Retours, conditions, confidentialité : pages **interdites par robots.txt**, non lues. Pages /warranty-and-guarantees et /services : affichées vides (en-tête et pied de page seuls) [V].
- Livraison, moyens de paiement, frais, délai : non vus (panier interdit).
- Devise : dollar, un seul ; langue : anglais (traducteur Google chargé par la page) [V].

## Confiance et service

- [V] Boutique physique au centre de Portsmouth, horaires affichés (mardi-samedi 11 h-18 h, dimanche 12 h-17 h), téléphone, e-mail, WhatsApp, rendez-vous « virtuel » proposé sur /custom-design.
- [V] Avis : témoignages en page /custom-design (« Happy Customers », le premier cite un client depuis 1997) ; l'API charge aussi `reviews_list` par produit ; aucune note chiffrée relevée.
- [V] Certificats : rapport IGI sur la fiche du diamant synthétique (1,06 ct rond D, VS2) ; « Certificate of authenticity » promis au financement.
- [V] Libellé du synthétique : « Lab-Grown », « Lab Diamond », « Lab Grown » (jamais « synthétique »).
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande observé. [V] Étapes du sur mesure (/custom-design) : « Tell us your ideas », « Finalize the design » (CAO 3D), « Flaunt your jewelry ».

## Points forts à retenir pour JR Diamond

1. **Prix affiché à chaque étape et recalculé à chaque option** (métal, type et taille de pierre) : 4 596 $ → 6 102 $ en passant du 14 k blanc au platine ; fiche /ringsettingdetail/… [V].
2. **Deux ordres de parcours** (monture d'abord ou diamant d'abord), avec filtrage automatique des montures sur la forme du diamant choisi (742 montures rondes) [V].
3. **Diamants séparés avec rapport IGI et fiche détaillée** (cotes, polissage, symétrie) et prix dès 534 $ [V].
4. **Ventilation des pierres secondaires** (nombre, carat, mm) sur la fiche monture [V].
5. **Photo qui change avec le métal** (fichiers distincts par alliage) [V].
6. **Récapitulatif d'assemblage** avec « Change » et « Remove » par pièce [V].
7. **Financement 60 mois et services « offerts »** (mise à taille, nettoyage) dits sur une page dédiée [V].

## Défauts observés

- « Other Shape » vide la liste (0 produit, aucune fenêtre) [V].
- Filtre de prix incohérent (min sans effet, max à 3 000 $ n'enlève que 11 produits) [V].
- « ADD THIS SETTING » sans diamant : aucun retour visible [V].
- « 360° SETTING » : aucun lecteur détecté [V].
- Beaucoup de diamants synthétiques n'ont qu'un visuel « Sample Image » (capture du filtre synthétique) [V].
- Récapitulatif sans bouton d'ajout au panier : seule l'option « Inquire » ; l'achat en ligne de la bague composée n'est pas démontré [V].
- Pages garantie et services vides ; le serveur répond 404 sur les pages internes [V].
- Rendu = photos de catalogue de fournisseur (fichiers `…-E.jpg`), pas de 3D du fichier de l'atelier [I].
- Temps d'apparition du visuel principal : liste de montures 2,9 s (ordinateur) et 2,9 s (iPhone) ; fiche monture 1,6 s ; fiche diamant 1,3 s (ordinateur) et 1,0 s (iPhone) ; mesure d'une visite, connexion de la session [V].

## Limites de l'audit

- Panier, retours, conditions, confidentialité, compte, liste de souhaits : interdits par robots.txt, non ouverts ; livraison, délai de fabrication, moyens de paiement non relevés.
- Aucun formulaire rempli, aucun lien externe suivi (WhatsApp, rapport IGI, réseaux sociaux).
- Vue liste/grille, Hide Filters et « 360° » non concluants ; filtre prix et « Other Shape » testés deux fois seulement.
- Le nombre exact de diamants synthétiques (17 277 annoncé par l'inventaire) n'a pas été relu ici ; le total de 3 355 est celui des naturels à l'ouverture.
- Une seule monture (50293-E) et un seul diamant (941407) parcourus à fond ; mobile : listes et fiches chronométrées, parcours complet fait sur ordinateur.

## Sources

- https://whiteboxjewelers.com/ringsettings, /ringsettingdetail/setting/round-natural-vs1-vs2-engagement-rings-halo-round-69fb9e7ffbb9e96546b051d1, /ringsettings/diamonds, /diamonds, /diamonds-details/941407, /complete-diamond-ring, /custom-design, /financing, /faq, /warranty-and-guarantees, /services (vérifiés le 25/11/2026 en session).
- https://whiteboxjewelers.com/robots.txt (règles lues).
- Inventaire : docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md.
