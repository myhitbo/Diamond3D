# Audit : J. Garett Jewelers (Wilmington, Caroline du Nord)

- **Site** : J. Garett Jewelers, https://www.jgarettjewelers.com/
- **Page de départ** : https://www.jgarettjewelers.com/pages/custom-ring-builder (puis parcours Punchmark https://www.jgarettjewelers.com/ringsettings et https://www.jgarettjewelers.com/ringsettings-diamonds)
- **Date** : 15/11/2026 (consigne) ; mesures faites le 25/11/2026
- **Appareils** : ordinateur Chromium 1366x900 ; affichage iPhone 13 (liste des contrôles et capture seulement)
- **Statut** : **partiel**. Le configurateur 3D (JewelerOS) n'a pu être actionné au-delà de son assistant de 4 questions : son lancement appelle `jeweleros.com/api/`, interdit par le robots.txt de ce domaine. Le panier (`/cart`) est interdit par le robots.txt de J. Garett : non visité, aucun bouton « Ajouter au panier » (il n'y en a pas, voir plus bas).
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
| --- | --- | --- |
| Assistant 3D, étape 1 sur 4 « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » | [V] custom-ring-builder |
| Étape 2 « Choose your center stone » | bascule Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; « Decide later » | [V] |
| Étape 3 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat ; « Decide later ». Texte : le carat exact se règle dans le designer | [V] |
| Étape 4 « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, Not sure yet | [V] |
| Après l'étape 4 : designer 3D JewelerOS | non actionné (appel à `jeweleros.com/api/`, interdit) | [V] arrêt volontaire |
| Parcours Punchmark en 3 étapes : 1 Choose a Ring, 2 Choose a Diamond, 3 Complete Ring | catalogue de montures avec filtres ; recherche de diamants ; récapitulatif `/ringsettings-complete` (non ouvert) | [V] /ringsettings |
| Fiche monture | taille 1,5 à 18 (menu), « Choose This Ring », « Schedule a Viewing », liste de souhaits | [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastilles de métal (jaune, blanc, rose) | pastilles | visibles étape 1 ; effet sur l'image non mesuré (les miniatures sont jaunes par défaut) | aucun affiché | [V] présentes, effet non testé |
| 8 cartes de style (Solitaire…Three Stone) | cartes | un clic sur « Halo » passe à l'étape 2 | aucun | [V] fonctionne |
| « Start from scratch » | carte | non cliquée | - | non testé |
| Natural / Lab Grown | bascule | cliquée : la liste des formes reste la même (aucun changement visible dans le texte) | aucun | [V] clic accepté, effet non visible |
| Forme « Marquise » | carte | passe à l'étape 3 | aucun | [V] fonctionne |
| Carat « 1 carat » | carte | passe à l'étape 4 | aucun | [V] fonctionne |
| Les autres formes, carats et délais | cartes | non cliqués (même mécanique) | - | non testé |
| Étape 4 (4 délais) | cartes | non cliqués : le clic lance le designer (appel interdit) | - | non testé, raison robots |
| Bouton « Back » / « Skip » du widget | boutons | présents dans la liste des contrôles ; non cliqués | - | non testé |
| Filtres de métal /ringsettings : Yellow Gold | lien | 140 → 134 montures, première monture « 10k yellow gold round halo » | $2 609,34 (au lieu de $2 624,34) | [V] fonctionne |
| Platinum, Rose Gold | lien | après Yellow : 140 montures, liste inchangée (état du filtre non clair : bascule ou remise à zéro) | inchangé | [V] comportement ambigu |
| White Gold | lien | 140, retour à la monture blanche | $2 624,34 | [V] |
| Styles Solitaire / Three Stone / Halo / Antique / Single Row / Multi Row / Bypass | liens | 1 / 9 / 123 / 128 / 134 / 137 / 140 montures annoncées (chaque clic bascule un style) | Solitaire : $842,79 ; Three Stone : de $3 732,21 à $4 776,54 | [V] fonctionne, lecture cumulative non établie |
| Curseur de prix de la monture (min / max) | champs | présent ; non actionné | - | non testé |
| Tri (Default, Featured, High to Low, Low to High, Newest) | liste | présente ; non actionnée (essai interrompu par la durée) | - | non testé |
| Pagination (Previous, Next, 1 à 6) | liens | présents ; non cliqués | - | non testé |
| « Quick view », « Inquire about this item », cœur « liste de souhaits » | boutons | présents sur chaque carte ; non cliqués | - | non testé |
| Fiche monture : menu de taille (1,5 à 18), « Choose This Ring », « Schedule a Viewing », « My Wish List » | menu, boutons | affichés ; non cliqués (« Choose This Ring » mène au parcours vers le panier) | « Call for Price » | [V] présents |
| /ringsettings-diamonds : formes (10, dont Marquise et Heart), prix, carat (0,1 à 20), coupe, couleur (L à D), pureté (SI2 à F), « Advanced », tri, recherche par SKU | filtres | page chargée : « 0 diamonds found », tableau « No data available in table » | aucun | [V] présents ; aucun diamant listé au moment de la visite |
| « Text us » | bouton | bulle « Hi there, have a question? Send us a text! » ; non ouvert | - | [V] présent, non ouvert |
| « Book An Appointment » | lien | ancre `#jos-book-appointment` (outil JewelerOS) ; non ouvert | - | non testé |
| Recherche, compte, cœur, panier (icône) | icônes | présents ; le panier `/cart` est interdit par robots.txt | - | non visités |
| Bandeau cookies : Decline all / Accept all / Close | boutons | « Decline all » actionné : bandeau fermé | - | [V] |
| Pied de page : téléphone (910) 763-6616, Return Policy, Terms, newsletter | liens | téléphone `tel:` ; politique lue ; newsletter non remplie | - | [V] |

Contrôles recensés : 131 (ordinateur) et 59 (iPhone) sur la page de départ ; 347 sur /ringsettings ; 161 sur /ringsettings-diamonds.

## Options disponibles

- **Métaux** (assistant) : jaune, blanc, rose. Fiche monture : « 10K, 14K and 18K white, yellow or rose gold, and platinum » [V]. Les listes montrent surtout du 10 k.
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone (assistant) ; Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass (catalogue).
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (assistant) ; plus Heart (recherche de diamants).
- **Origine** : Natural et Lab Grown (assistant) [V].
- **Carats** : 0,5 à 5 ct (assistant) ; 0,1 à 20 (filtre diamants).
- **Délais choisis** : 1-4 semaines à 3-6 mois.
- **Taille de doigt** : 1,5 à 18 (fiche monture) [V].
- **Pas de gravure, pas de corps de bague ni de griffes** dans ce que j'ai pu actionner [I] (designer 3D non ouvert).

## Prix, délais, retours, garanties

- **Prix** : montures du catalogue affichées en liste (de $1 545,81 à $4 776,54 sur la première page, 10 k) [V], mais la fiche d'une monture dit « Call for Price » : le prix de liste et la fiche se contredisent [V]. Aucun prix dans l'assistant 3D [V]. La pierre n'est pas incluse (« CENTER STONE NOT INCLUDED ») [V].
- **Délai** : « ready for you in just a couple of weeks » (page custom-engagement-rings) [V]. JR Diamond : 14 jours ouvrés.
- **Retours** : 15 jours après réception, articles non portés ; « Personalized or custom pieces are not eligible for returns » ; échange d'un défaut sous 30 jours ; « Gemstones, including diamonds, are not covered by this policy and are sold as-is » ; retour postal aux frais du client (https://www.jgarettjewelers.com/return-policy) [V].
- **Livraison** : politique d'expédition non lue ; le texte des retours cite un traitement « within 24-48 hours » [V partiel].
- **Garantie** : non trouvée dans les pages lues [I].
- **Panier** : non visité (interdit par robots.txt) ; le site dispose de l'affichage Affirm (script `cdn1.affirm.com` chargé) [I] financement.

## Confiance et service

- Fabrication sur place : « designed, cast and finished by hand right here in our on-site studio » ; « we share photos and videos along the way » (accueil, cité par l'inventaire, non relu ici) [V par inventaire].
- Page « Custom Designs » : processus en consultation, croquis en CAO, restylage d'héritages (« Give your jewelry a new life ») [V].
- Quatre générations, dirigé par une bijoutière-joaillière ; certificats : « GIA certified stones » dans un avis client cité [V].
- Service : téléphone, SMS (« Text us »), rendez-vous, retrait en boutique à Chandler's Wharf, 2 Ann St ; horaires mardi-vendredi 10 h-17 h, samedi 10 h-16 h [V].
- Langues : anglais seulement ; devise : dollar américain [V].
- Avis : citations sur la page du sur-mesure ; pas de note chiffrée vue [V].
- Pas de suivi de commande en ligne observé [I].

## Points forts à retenir pour JR Diamond

1. **Assistant de démarrage en 4 questions avant la 3D** (style, forme, carat, échéance), clair et rapide : à imiter pour guider un client qui hésite. Preuve : étapes 1 à 4 vérifiées sur custom-ring-builder.
2. **Promesse « on voit naître son bijou »** : photos et vidéos partagées pendant la fabrication par un joaillier local. Preuve : texte de l'accueil (inventaire, non relu). JR Diamond la tient avec un vrai fichier de fabrication.
3. **Sur-mesure et restylage d'héritages** présentés ensemble : même positionnement que la transformation de bijoux de famille. Preuve : /pages/custom-designs.
4. **Recherche de diamants avec filtres complets** (forme, prix, carat, coupe, couleur, pureté) : modèle de filtres pour la grille de pierres de JR Diamond. Preuve : /ringsettings-diamonds (mais vide à la visite).

## Défauts observés

- Le prix d'une monture est affiché en liste et devient « Call for Price » sur la fiche [V].
- /ringsettings-diamonds ne renvoie « 0 diamonds found » : l'étape « Choose Diamond » du parcours est inutilisable depuis le site à la date de visite [V].
- Aucun prix dans le configurateur 3D ; la pierre se choisit en boutique [V].
- Retour : les pièces sur mesure et les diamants ne sont pas retournables [V].
- Les filtres de métal et de style de /ringsettings se comportent de façon peu claire (platine et rose sans effet visible) [V].
- Au chargement, la page 3D appelle une requête `log-error` de JewelerOS (visible dans le réseau) [V] ; sans cet appel, l'assistant fonctionne, le designer non.

## Limites de l'audit

- Designer 3D JewelerOS non actionné (appels à `jeweleros.com/api/`, Disallow dans son robots.txt) : modes de vue, zoom, gravure, prix éventuels, enregistrement, partage non vérifiés. Lors de mon premier clic sur « Solitaire », la page a tenté ces appels ; ils ont été interceptés et abandonnés dans mon navigateur avant envoi (aucune requête n'est partie vers `jeweleros.com/api/` pendant les clics), puis j'ai arrêté d'actionner l'outil.
- Panier et paiement : non visités (robots.txt interdit `*/cart`, `*/checkout`) ; livraison, moyens de paiement du panier non relevés.
- Temps d'apparition : ordinateur, première image de contenu à 0,75 s (logo, DOM chargé) ; vignettes de l'assistant (`jos0.b-cdn.net/walkthrough-imgs`) demandées à 4,0 s après la requête de page. iPhone : non chronométré (liste des contrôles et capture uniquement) [V pour l'ordinateur].
- Non testés : tri, pagination, curseur de prix, « Quick view », « Inquire », liste de souhaits, tailles, rendez-vous, chat (non ouverts par consigne).
- Le total de montures varie entre 140 (texte) et une lecture d'image « 146 » : retenir 140.

## Sources

- https://www.jgarettjewelers.com/pages/custom-ring-builder
- https://www.jgarettjewelers.com/ringsettings
- https://www.jgarettjewelers.com/ringsettings-details/engagement-rings/10k-white-gold-round-halo-engagement-ring/1
- https://www.jgarettjewelers.com/ringsettings-diamonds
- https://www.jgarettjewelers.com/return-policy
- https://www.jgarettjewelers.com/pages/custom-designs
- https://www.jgarettjewelers.com/pages/custom-engagement-rings
- https://www.jgarettjewelers.com/robots.txt ; https://jeweleros.com/robots.txt
- Inventaire : docs/concurrence/audit/us/north-carolina/INVENTAIRE.md
