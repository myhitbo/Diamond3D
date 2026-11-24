# Audit : Hitched (Illinois)

- **Site** : Hitched (marque de Philadelphie, salle d'exposition à Chicago, 1870 N Damen Ave)
- **Adresse** : https://tryhitched.com/
- **Page de départ** : https://tryhitched.com/pages/signature-engagement-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) ; Chromium en affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le parcours complet du constructeur est vérifié, sauf le clic sur « Add to cart » (voir « Limites ») ; le panier a été ouvert vide.
- Repères : **[V]** vérifié (contrôle actionné ou page lue, adresse indiquée), **[I]** inféré, **[S]** supposé. Prix en dollars américains, relevés pendant l'opération « Black Friday » (diamants à -20 % jusqu'au 1er janvier).

## Parcours

Une seule page, trois blocs, avec un récapitulatif à droite (ordinateur) ou en bas (iPhone) ; chaque choix met à jour l'image et l'adresse (`?style=…&band=…&metal=…&shape=…&type=…&cmin=…&cmax=…`, lien partageable) [V, page de départ].

| Étape | Options | Prix |
|---|---|---|
| 1. Setting | 7 montures « Signature » ; anneau lisse ou pavé ; 14 k, 18 k, platine ; or jaune, blanc, rose | monture seule, affichée |
| 2. Diamond | 9 formes ; synthétique ou naturel ; carat (min et max) ; couleur D à J ; pureté FL à VS1 ; « Our three picks » ; vue côte à côte | diamant seul, affiché |
| 3. Your ring | récapitulatif (monture + diamant = total) ; taille de doigt ; ajout au panier, « Save my ring », « Drop a hint », « Book a diamond viewing » | total, Affirm |

## Contrôles vérifiés

Tous sur https://tryhitched.com/pages/signature-engagement-ring-builder, ordinateur sauf mention. Base : Cathedral, lisse, 14 k jaune, rond, synthétique, 2,05 ct D VVS2, total 3 658,20 $.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu de monture (7) | liste | Solitaire 1 799 $ ; Cathedral 1 899 $ ; Hidden Halo 2 049 $ ; Cathedral Hidden Halo 2 149 $ ; Bezel 2 199 $ ; Halo 2 449 $ ; Heirloom Bezel 2 749 $ (anneau 3 mm, les autres 2 mm). Chaque monture a sa photo | monture seule | OK |
| Plain / Pavé | bouton | Photo `…_Pave_RD`. Cathedral : +350 $ en 14 k (2 249 $) | oui | OK |
| 14K / 18K / Platinum | bouton | 18 k jaune : 2 549 $ (+650) ; platine : 2 849 $ (+950). Platine : photo « White » | oui | OK |
| Yellow / White / Rose | bouton | Photo et libellé changent (14Y, 14W, 14R) | aucun | OK |
| Yellow / White / Rose sous platine | bouton | Restent cliquables (non désactivés) ; le résultat n'a pas été relevé | non relevé | partiel |
| Round, Cushion, Asscher, Oval, Elongated Cushion, Pear, Marquise, Emerald, Radiant (9) | bouton | Photo de monture propre à chaque forme ; une pierre est reproposée. Ex. cushion 2,06 ct E 1 679,20 $ ; ovale 2,52 ct 2 439,20 $ ; elongated cushion 2,08 ct sans taille notée, 1 999 $ | oui | OK |
| Lab grown / Natural | bouton | Natural, 2,00 ct I VS1, taille « Very Good », **GIA**, 13 875 $ (total 15 774 $), contre 1 759,20 $ en synthétique IGI | oui | OK |
| Carat min / max (nombre) | champ | 1,00 à 1,50 : 457 pierres, 1,50 ct D VVS1 1 159,20 $. Saisie 0,5 ramenée à 1,00 ; saisie 9 ramenée à 5,99 | oui | OK |
| Carat (curseurs 1 à 5,99, pas 0,01) | curseur | Même effet que les champs [I, mêmes bornes] | oui | OK |
| Couleur D à J (2 curseurs) | curseur | G à J : 19 pierres ; G à G : 16 ; paramètre `col=G-J` | oui | OK |
| Pureté FL à VS1 (2 curseurs) | curseur | VVS2 à VS1 : 317 pierres ; VVS2 seul : 297 ; paramètre `cla=` | oui | OK |
| Reset filters | bouton | Apparaît dès qu'un filtre est changé ; non cliqué | aucun | non testé (apparition seule vue) |
| Our three picks (3 cartes) | bouton | Chaque carte sélectionne la pierre ; badges « Best value », « In stock · D.C./Chicago/Philadelphia showroom ». La carte 2 (G, 1 899 $) est « We bring it in » | oui | OK |
| Compare side by side | bouton | Boîte « Side by side » : photo, carat, couleur, pureté, taille, certificat, prix au carat, écart avec votre choix, où elle se trouve, pourquoi choisie | affiché | OK |
| See all 212 round diamonds | lien | Mène à `/pages/stone-search?shapes=Round&types=Lab&caratMin=2&caratMax=2.99` ; page non ouverte | n/a | non testé (sortie du constructeur) |
| Vue avant / de côté | bouton | Photo `front` / `side` | aucun | OK |
| Vidéo de la bague portée | bouton | Vidéo mp4 720 p, 11 s, muette, en boucle, sans commandes | aucun | OK |
| Vidéo 360° du diamant | bouton | Vidéo mp4 800 px, 7,9 s, muette, en boucle, sans commandes | aucun | OK |
| Choose a size (liste) | select | 3 à 9 par demi-taille ; « Not sure? We'll send you a ring sizer » ; pas de taille au-delà de 9 | aucun | OK (obligation avant ajout non testée) |
| ADD TO CART | bouton | Non cliqué : le bouton appelle le panier AJAX, chemin `/cart/` interdit par robots.txt | n/a | non testé |
| SAVE MY RING | bouton | Boîte : prénom, e-mail, case « news » ; promet un lien par e-mail. Rien envoyé | aucun | OK (ouverture seule) |
| DROP A HINT | bouton | Boîte : prénom et e-mail du destinataire, prénom et e-mail de l'expéditeur, note ; envoie un e-mail avec la bague. Rien envoyé | aucun | OK (ouverture seule) |
| BOOK A DIAMOND VIEWING | bouton | Boîte « Diamond viewing · Free » : salle (Washington par défaut, « Change »), 30 min pour 3 personnes, « Continue », « Add this ring to your cart instead » | aucun | OK (ouverture seule) |
| CHAT WITH US | bouton | Panneau « Hitched Concierge · Online now » : 4 réponses rapides (Ring sizing, Book a consultation, Returns & warranty, My order) et « Send ». Aucun message écrit | aucun | OK (ouverture seule) |
| Message our team / text us | lien | Mène à `/pages/contact-us` ; non ouvert | n/a | non testé |
| FAQ (3 questions) | accordéon | Voir « Confiance et service » | aucun | OK |
| Pay over time with Affirm | texte | Mention de paiement échelonné, sans calcul de mensualité visible | n/a | information seule |
| Bandeau « Black Friday », BOOK APPOINTMENT, menus, pied de page (Locations, Returns, Warranty, Press, Diary, Careers, réseaux sociaux, JOIN NOW) | liens, champ | Non suivis ; « Locations » et « Returns » lus ci-dessous | n/a | non testé (sauf pages lues) |
| Ensemble sur iPhone | tous | Mêmes contrôles ; aucun débordement horizontal (390/390), aucune cible sous 32 px ; platine, naturel, pavé, rose, vidéo main, comparaison et chat répondent | oui | OK (comparaison et chat : clic sans erreur, rendu non examiné) |

## Options disponibles

- **Montures (7)** : Solitaire, Cathedral, Hidden Halo, Cathedral Hidden Halo, Bezel, Halo, Heirloom Bezel.
- **Anneau** : lisse ou pavé. **Métal** : 14 k, 18 k, platine ; or jaune, blanc, rose.
- **Formes (9)** : rond, cushion, asscher, ovale, elongated cushion, poire, marquise, émeraude, radiant.
- **Origine** : synthétique (IGI) ou naturel (GIA).
- **Filtres** : carat 1 à 5,99 ; couleur D à J ; pureté FL, IF, VVS1, VVS2, VS1 ; trois suggestions ; comparaison.
- **Vues** : photo de face, de côté, vidéo sur la main, vidéo 360° de la pierre. Pas de 3D, pas de zoom, pas de réalité augmentée relevés [V].
- **Gravure, griffes, taille de doigt libre** : absentes du constructeur [V]. Tailles 3 à 9 seulement.

## Prix, délais, retours, garanties

- **Prix** [V] : décomposé en trois lignes (monture, diamant, total) ; la remise « 20 % off until January 1 » barre l'ancien prix des pierres concernées (2 199 $ devient 1 759,20 $).
- **Délai** [V] : « Estimated to ship by Tue, Jan 5 » (date affichée, calculée par le site ; environ 7 semaines après le 15/11 [I]). « Need it sooner? Message our team or text us ». Le sur-mesure est annoncé à 60 à 90 jours [V, ext., inventaire].
- **Retours** [V, https://tryhitched.com/pages/policies] : « All engagement rings are final sale » ; une première mise à taille offerte ; ensuite payante ; exclusions pour toute bague personnalisée (gravure, finition, taille). Le constructeur répète « Made to order and final sale ».
- **Garantie** [V] : 1 an sur les défauts de fabrication, pour l'acheteur initial, non transférable ; ne couvre ni la mise à taille, ni la perte, ni l'usure normale ; pierres de 3 mm ou moins remplacées dans l'année après inspection.
- **Inclus** [V] : mise à taille, estimation (« appraisal » par Brite), nettoyages gratuits en salle d'exposition, écrin, 100 $ de remise sur des alliances.
- **Livraison, taxe, moyens de paiement** : frais non affichés avant le panier ; panier vide, donc non relevés. Affirm annoncé [V].
- **Certificats** [V] : IGI pour le synthétique, GIA pour le naturel, nommés sur chaque pierre. Aucun seuil de poids annoncé.
- **Libellé du synthétique** [V] : « Lab grown », sur le bouton et dans le récapitulatif.

## Confiance et service

- Réponses de la FAQ [V] : voir un diamant avant l'achat (rendez-vous gratuit) ; délai ; taille inconnue (un baguier est posté, la fabrication démarre pendant l'envoi, puis la bague est finie à réception de la taille).
- Salles d'exposition : Philadelphie, Chicago, Washington, Charleston (bientôt) ; rendez-vous virtuel (https://tryhitched.com/pages/locations).
- Avis [V] : « 4.9 stars across 465 Google reviews » sur la page des salles ; aucun avis sur le constructeur.
- Fabrication [V] : « made by hand at our Philadelphia headquarters », bijoutiers « GIA certified », contrôle qualité décrit. Aucune photo ni vidéo de fabrication de la bague du client, aucun suivi de commande vu.
- Transformation de bijou de famille : « Bring your heirloom in » (en salle d'exposition) [V, page des salles].
- Langue : anglais seul ; devise : dollar [V].
- Assistance : lundi au vendredi, 10 h à 17 h, heure de l'Est ; réponse sous 1 à 2 jours ouvrés [V, page des retours].

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse**, restaurée à l'ouverture et partageable : `?style=cathedral&band=pave&metal=14R&shape=Round&type=Natural&cmin=2.00&cmax=2.99` [V].
2. **Prix expliqué en trois lignes** (monture + diamant = total) qui bouge à chaque clic ; l'écart est visible : platine +950 $, pavé +350 $ [V].
3. **Trois suggestions étiquetées** (« Best value », « The lowest price at this size », stock par salle) plutôt qu'un catalogue de 200 pierres, avec le compteur « from 212 that fit » [V].
4. **Comparaison côte à côte** avec prix au carat et écart en dollars par rapport au choix [V].
5. **Vidéo de la pierre en 360° et vidéo de la bague portée** (11 s et 7,9 s) : proche de « pierre filmée » ; chaque pierre a sa vidéo [V].
6. **Passerelles sans achat** : « Save my ring », « Drop a hint » (envoyer la bague à un proche), visite gratuite [V].
7. **Taille inconnue gérée** : baguier envoyé, fabrication lancée en parallèle [V].
8. **Naturel et synthétique côte à côte**, avec l'écart de prix visible (13 875 $ contre 1 759,20 $) [V].

## Défauts observés

- Pas de 3D ; photos de monture recalculées par forme, la pierre réelle n'est pas montrée sur la bague [V].
- Vidéos sans commandes ni son ; le 360° ne se contrôle pas [V].
- Ventes finales ; personnalisation exclue du retour [V].
- Aucune photo ni vidéo de fabrication de la commande ; aucun suivi [V].
- Gravure et griffes absentes ; tailles 3 à 9 seulement [V].
- Frais de livraison et taxe non vus avant le panier [V].
- Sous platine, le choix de couleur reste proposé (effet non relevé) [V, partiel].
- `origin=L` apparaît dans l'adresse même en « Natural » (paramètre dont le rôle n'est pas établi) [V].

## Limites de l'audit

- « ADD TO CART » non cliqué : l'ajout passe par `/cart/`, interdit par robots.txt (« Disallow: /cart/ »). La page `/cart`, autorisée, a été ouverte : « Your cart is empty ». Récapitulatif de panier, frais, délai à ce stade et moyens de paiement non vus.
- Aucun formulaire envoyé ; les boîtes d'enregistrement, d'indice et de rendez-vous ont été ouvertes puis fermées ; le chat a été ouvert (panneau d'accueil), aucun message écrit.
- Le prix en pavé n'a été relevé que sur la monture Cathedral ; les 6 autres montures n'ont été relevées qu'en version lisse 14 k jaune.
- La page « stone-search » et les alliances n'ont pas été explorées. Aucun état « hors stock » n'a été rencontré.
- La date « 15/11/2026 » est celle de l'étude ; les mesures ont été prises à l'ouverture de cette session. Les promotions et l'estimation d'expédition changent avec la date.
- Mesures de chargement (visuel principal, photo de monture décodée) : ordinateur 1,7 et 2,3 s (plus grand élément 1,6 et 2,4 s) ; iPhone 1,4 et 0,7 s ; chargement complet 2,2 à 4,9 s [V, Playwright, 2 essais, réseau de l'environnement].

## Sources

1. Constructeur : https://tryhitched.com/pages/signature-engagement-ring-builder
2. Politique de retour et garantie : https://tryhitched.com/pages/policies
3. Salles d'exposition, avis, FAQ : https://tryhitched.com/pages/locations
4. Panier (vide) : https://tryhitched.com/cart
5. robots.txt : https://tryhitched.com/robots.txt
6. Inventaire de l'Illinois : `docs/concurrence/audit/us/illinois/INVENTAIRE.md`
