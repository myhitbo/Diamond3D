# Audit : Malka Diamonds (Portland, Oregon)

- **Site** : Malka Diamonds & Jewelry (Shopify, Pearl District, atelier de deux joailliers)
- **Adresse** : https://www.malkadiamonds.com/ ; page de départ : https://www.malkadiamonds.com/pages/custom-rings
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et iPhone 13 émulé (liste des contrôles, temps d'affichage)
- **Statut** : partiel (formulaire guidé de conception, sans visuel ni prix : seul un devis par contact en résulte ; panier non rempli)
- **robots.txt** : `/cart/`, `/checkout`, `/account`, `/services` interdits ; pages utilisées toutes autorisées (robots.cjs). Aucune soumission de formulaire.

Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

Le « configurateur » est un formulaire à étapes (`#start`, ouvert par « Design Your Own »), qui envoie une demande de contact (`/contact`) ; il ne calcule rien et n'affiche aucune image de la bague [V].

| Étape | Options |
| --- | --- |
| 1. Let's get started / Who will be wearing the ring? | liste : Please Select, Me, Other [V] |
| 2. Stone Type | White Diamond (Natural), White Diamond (Lab Grown), Salt & Pepper Diamond, Colored Gemstones [V] |
| 3. Stone Shape | Round, Oval, Emerald, Pear, Marquise, Cushion, Radiant, Hexagon, Shield/Kite, Princess (10, dessins au trait, carrousel à flèches) [V] |
| 4. Setting | Solitaire, Cathedral, Bezel, Ellie (3 pierres), RAE, Terryn, MAYA, Amry, Sasha, Halo, Twist (11) [V] |
| 5. Precious Metal | Yellow, White, Rose, Platinum [V] |
| 6. Anything else we should know? | taille de bague (texte libre), budget (5 tranches), notes, images, pièce jointe [V] |
| 7. Confirm Your Design | récapitulatif, champs nom, e-mail, téléphone, message, bouton « Submit » (non utilisé) [V] |

Les étapes 3 à 7 ont été lues dans le DOM de la page (texte masqué) ; je n'ai franchi à l'écran que l'étape 1 > 2 (voir Limites).

## Contrôles vérifiés

Ordinateur (69 contrôles listés ; 30 en iPhone).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Design Your Own (2 liens, bandeau et corps) | lien d'ancre `#start` | fait défiler jusqu'au formulaire et l'ouvre [V] | aucun | fonctionne |
| Who will be wearing the ring? | liste (Me / Other) | valeur non retenue par mon script ; contrôle présent [V] | aucun | non testé |
| Next → (étape 1) sans choix | bouton | message « Please select a Stone Type to continue » : validation de l'étape [V] | aucun | fonctionne |
| Stone Type (4 cartes) | cartes | le clic renseigne le champ caché `contact[Stone Type]` (valeur « White Diamond  (Lab Grown) ») [V] | aucun | fonctionne |
| Stone Shape (10), Setting (11), Precious Metal (4) | cartes | présentes dans la page ; non cliquées une à une [V] | aucun | non testé |
| Flèches du carrousel de formes | boutons | présentes (capture) ; non cliquées [V] | aucun | non testé |
| Ring Size | champ texte | présent, facultatif, non rempli [V] | aucun | non testé |
| Budget | 5 boutons radio | $2000-$3999, $4000-$5999, $6000-$7999, $8000-$9999, $10000+ ; non cochés [V] | aucun | non testé |
| Upload Images / Attachment | fichier | présent ; rien envoyé [V] | aucun | non testé |
| Submit | envoi | **non cliqué** : formulaire de contact | n/a | non testé |
| Stackable Bands, Vintage Rings, Alternative Rings | liens | vers collections `/collections/...` [V] ; non suivis | prix de catalogue | non testé |
| Learn More | lien | `/pages/about` [V] | aucun | non testé |
| Cart | lien | `/cart` : « Your cart is empty » [V] | n/a | fonctionne |
| 503-222-5205 | `tel:` | présent (deux fois) [V] | n/a | non testé |
| Contact Us, e-mail `ronnie@malkadiamonds.com`, Get Directions | liens | présents [V] | n/a | non testé |
| Recherche (`q`) | champ | présent [V] | n/a | non testé |
| Pagination témoignages 1, 2, 3 | boutons | présents [V] | n/a | non testé |
| Vues 3D, 360°, AR, zoom, partage, comparer, chat, WhatsApp, financement | n/a | **absents** de la page [V] | n/a | n/a |
| Ajout au panier | n/a | absent de la page de départ ; non cherché dans le catalogue [V] | n/a | n/a |

## Options disponibles

- **Pierres** [V] : diamant blanc naturel, diamant blanc synthétique (« Lab Grown »), « salt & pepper », pierres de couleur ; 10 formes ; certificats annoncés GCAL, IGI ou GIA pour le synthétique (`/pages/diamonds`).
- **Montures** [V] : 11 styles nommés (dont 3 pierres, kite, bezel, halo).
- **Métaux** [V] : jaune, blanc, rose, platine ; **le titre (14 k, 18 k) n'est pas choisi** dans le formulaire.
- **Budget** [V] : 5 tranches de 2 000 $ à 10 000 $ et plus.
- **Taille de doigt** [V] : texte libre.
- **Gravure, corps de bague, griffes, pavage** : non proposés dans le formulaire [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix ni estimation dans le formulaire ; budget déclaré par le client [V]. Catalogue « finished collections » : prix affichés selon l'inventaire (non revérifiés ici) [I].
- **Délai** : aucun délai annoncé sur la page ni dans le formulaire [V].
- **Livraison** [V] (`/pages/shipping-information`) : « complimentary 1-2 day shipping » aux États-Unis, FedEx ou UPS, signature requise. Pas de taxe de vente en Oregon (annonce sur la page).
- **Retours** [V] (`/pages/refund-policy`) : contacter la boutique sous 10 jours après réception, article non utilisé, **frais de retour au client**, emballage et certificats à renvoyer ; **créations sur mesure, personnalisées, mises à taille ou gravées non retournables**.
- **Garantie** [V] : les deux premières années couvrent tout entretien et toute réparation (page des retours) ; la page « Customer Care & Warranty » annonce une couverture à vie des soins courants (nettoyage, polissage, griffes, mise à taille, remplacement de pierre couvert) avec une visite annuelle gratuite. Les deux pages ne disent pas la même durée [V].
- **Paiement, panier** : panier vide ; moyens de paiement non vus [V].

## Confiance et service

- **Atelier** [V] : « Our Portland jewelry workshop… state-of-the-art technology and two exceptional craftsman jewelers » ; processus en 5 étapes (connaissance du client, esquisses et « advanced 3D design tools », choix de la pierre, conception de la monture, fabrication) ; deux gemmologues GIA sur place.
- **Rendu 3D** : annoncé dans le processus (« visualize your ring before it's made ») mais fait hors ligne, non interactif [V].
- **Libellé synthétique** [V] : « Lab Grown » ; « ethical, sustainable, conflict-free », « visually and chemically identical to mined ones ».
- **Avis** [V] : témoignages sur la page et page dédiée `/pages/malka-diamonds-reviews`.
- **Langue et devise** [V] : anglais, dollars.
- **Service** [V] : rendez-vous (« walk-ins welcomed, appointments encouraged »), téléphone, e-mail, adresse 308 NW 11th Ave, Portland ; redimensionnement, évaluations et entretien « à vie » annoncés gratuits.
- **Preuves de fabrication** : photo d'atelier en bandeau ; pas de photos ou vidéos par commande, pas de suivi [V].
- **Chargement** [V] : image principale visible en 1,6 s (ordinateur) et 1,9 s (iPhone).

## Points forts à retenir pour JR Diamond

1. **Questionnaire guidé et rassurant** : 6 questions courtes avant de contacter l'atelier, avec texte pédagogique par forme et par monture. Preuve : formulaire `#start`.
2. **Refus du prix chiffré remplacé par un budget déclaré** en cinq tranches : le client indique ce qu'il veut dépenser. Preuve : `contact[Budget]`.
3. **Récit d'atelier** (3D, trois générations de diamantaires, gemmologues, atelier à Portland) qui porte la confiance. Preuve : texte « Our Process ».
4. **Promesse de suivi après-vente** : visite annuelle gratuite, mise à taille et entretien. Preuve : `/pages/care-and-guarantee`.
5. **Livraison gratuite en 1 à 2 jours, assurée par signature** : à comparer avec le transport assuré prévu pour la France. Preuve : `/pages/shipping-information`.

## Défauts observés

- Aucune image du bijou choisi pendant la conception ; icônes de formes au trait seulement [V].
- Pas de prix, pas d'estimation, pas de délai dans le formulaire [V].
- Étape « métal » sans titre (14 k, 18 k) [V].
- Garantie annoncée différemment sur deux pages (2 ans / à vie) [V].
- Retour en 10 jours à la charge du client ; tout le sur mesure est non retournable [V].
- Le résultat est une demande de contact, pas une commande ni un panier [V].

## Limites de l'audit

- Étapes 3 à 7 lues dans le code de la page, non parcourues à l'écran : mon script a été arrêté à l'étape 1 par la validation (liste « Who will wear » non renseignée). Effet exact de chaque carte non vérifié.
- Aucune soumission, aucun envoi de photo ; panier vide ; moyens de paiement et frais de commande non vus.
- Collections de bagues finies et prix de catalogue : non audités ici (seulement inventaire).
- Affichage iPhone : liste des contrôles et temps seulement.

## Sources

- https://www.malkadiamonds.com/pages/custom-rings (page et formulaire lus et actionnés)
- https://www.malkadiamonds.com/pages/shipping-information
- https://www.malkadiamonds.com/pages/refund-policy
- https://www.malkadiamonds.com/pages/care-and-guarantee
- https://www.malkadiamonds.com/pages/diamonds
- https://www.malkadiamonds.com/pages/malka-diamonds-reviews
- https://www.malkadiamonds.com/cart
- https://www.malkadiamonds.com/robots.txt
