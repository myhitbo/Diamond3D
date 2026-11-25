# Audit : Yellowstone Jewelers

- **Site** : Yellowstone Jewelers (Billings, Montana ; exploité par Yellowstone Jewelry LLC) — https://yellowstonejewelers.com
- **Page de départ** : https://yellowstonejewelers.com/design-your-ring/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (relevé des contrôles seulement)
- **Statut** : **partiel**. Le robots.txt interdit `/cart`, `/account`, `/search`, `/checkout` et `/jewelrybox` ; le constructeur est un widget JewelerOS dont l'API (`jeweleros.com/api/`) est interdite : je me suis arrêté avant l'étape 4. Le catalogue s'est chargé normalement lors de cette visite (la vérification JavaScript `/verify.html` signalée n'est pas apparue).
- Légende : V = vérifié (page lue ou contrôle actionné, avec l'adresse), I = inféré, S = supposé.

## Parcours

Assistant en 4 étapes (V, « Step 1 of 4 » … « Step 3 of 4 »), puis un « 3D Ring Designer » (V, texte de la page).

| Étape | Options (V) |
|---|---|
| 1. Style de départ | 3 pastilles de métal (jaune par défaut, blanc, rose) ; styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch |
| 2. Pierre centrale | Bascule Natural (par défaut) / Lab Grown ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, Decide later |
| 3. Taille de pierre | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, Decide later ; texte : « Once you're in the ring designer you can easily set an exact carat weight » |
| 4. Désigner | Non atteint (voir limites). Pour l'ancre : un audit voisin (L&M Fine Jewelry, même widget) y avait obtenu une demande de délai et une erreur. |

Le bandeau supérieur reprend les choix déjà faits (« Three Stone », « Oval »), avec flèche retour et « Skip ». Aucun prix à aucune étape (V).

## Contrôles vérifiés

Relevé controls.cjs : 74 contrôles sur ordinateur, 57 sur iPhone ; essentiellement en-tête, menus et pied de page ; widget : Back, Skip et 3 pastilles de métal.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Back / flèche | bouton | Étape précédente | non | affiché ; non actionné |
| Skip | bouton | Saute l'étape | non | grisé à l'étape 1 ; non testé |
| Pastille jaune / blanc / rose | 3 boutons `jos-metal-btn` | Choisit la couleur des vignettes ; jaune actif | non | jaune vu ; autres non cliqués |
| Three Stone | carte | Passe à l'étape 2 | non | fonctionne (V) |
| Autres styles (8) | cartes | Même rôle (I) | non | non testés |
| Natural / Lab Grown | bascule | Naturel actif par défaut | non | Lab Grown non cliqué |
| Oval | carte | Passe à l'étape 3 | non | fonctionne (V) |
| 8 autres formes + Decide later | cartes | Même rôle (I) | non | non testées |
| 0,5 … 5 carat + Decide later | 9 cartes | Passent à l'étape 4 (I) | non | non cliquées : l'étape 4 appelle l'API interdite |
| Search Site, Wish List, Login | liens `/search/`, `/account/…` | Pages interdites par robots.txt | – | non ouverts |
| Shopping Cart | lien `/cart/` | – | – | non ouvert : panier interdit par robots.txt |
| CALL NOW 406-839-2077 | lien `tel:` | Appel | – | non testé |
| Schedule an Appointment | lien `#jos-book-appointment` | Ancre vers un module de rendez-vous (I) | – | non testé |
| Menus BRIDAL, DESIGNERS, JEWELRY, DIAMONDS, FANCY COLORED DIAMONDS, LUXURY WATCHES, SHOP NOW | liens | Catalogue | – | BRIDAL lu (V) ; autres non |
| Email + Submit (newsletter) | formulaire | Inscription | – | non rempli |
| Guides (Diamond Guide, Metal Types, Ring Styles, Setting Types, Resizing…) | liens `/education/…` | Guides pédagogiques (V : liens) | – | non lus |
| Fiche produit : Zoom (5 images), Slide Left/Right | liens/boutons | Galerie photo | prix affiché | liens relevés (V) ; non actionnés |
| Fiche produit : Matching Wedding Band | lien | Mène à la bande assortie | oui | non cliqué |

Fiche produit lue (V, `/catalog/romance/160125-mq100ylg/`) : pas de bouton d'ajout au panier dans le relevé ; seuls Wish List / Cart en en-tête.

## Options disponibles

- Métal du parcours : jaune, blanc, rose ; catalogue : or blanc 14 k, jaune 14 k, bicolore, platine, pierres de couleur (V, filtres `/catalog/engagement-ring/`).
- Formes du parcours : 9 + « Decide later » ; filtre catalogue : Baguette, Cushion, Emerald, Marquise, Oval, Pear, Princess, Round.
- Styles de catalogue : Classic, Curved/Nesting, Halo, Hidden Halo, Solitaire, Straight, Twist, Two-stone, Vintage ; type : engagement avec pierre centrale ou semi-monture.
- Origine : naturel / synthétique dans le parcours ; sur le catalogue, mention « Lab Grown Diamond » dans les titres (V).

## Prix, délais, retours, garanties

- **Prix** : catalogue d'engagement : 1 529 articles, prix affichés (ex. 1 480 $ à 2 245 $ pour les premiers résultats ; fiche 160125-MQ100YLG : 1 557,00 USD, données structurées Product) (V). Prix de semi-monture, sans la pierre centrale (V : « accommodate a 10 x 5mm marquise »). Pas de décomposition.
- **Retours** : 21 jours, état neuf ; « special orders, altered pieces (including ring sizing) and custom pieces » non repris ni échangés ; remboursement sous forme de crédit ou d'échange (V, `/terms-and-conditions/`, mise à jour 19/06/2023).
- **Paiement** : Visa, MasterCard, Affinity, American Express, PayPal (V, conditions). Panier non atteint.
- **Délai, livraison, garantie** : non trouvés (V : aucune mention dans les conditions lues).
- Certificats : non vus sur les pages lues.

## Confiance et service

- Boutique à Billings (820 Shiloh Crossing Blvd) avec téléphone, prise de rendez-vous, services (V).
- Avis, preuves de fabrication, suivi de commande : non vus (V).
- Langue : anglais ; devise : USD (V). Site fourni par Thinkspace (V, pied de page).

## Points forts à retenir pour JR Diamond

1. **Même assistant que le concurrent L&M** : 4 étapes lisibles avec rappel des choix dans le bandeau (V, captures s2/s3).
2. **Phrase honnête sur le carat** : « vous pourrez régler un carat exact dans le designer » (V, étape 3).
3. **Mention explicite « Lab Grown Diamond » en tête des titres** de produits (V, fiche 160125-MQ100YLG).
4. **Prix visible sur toutes les fiches du catalogue** (V).

## Défauts observés

- Aucun prix dans le constructeur (V) ; prix seulement sur les fiches de catalogue.
- Conditions de retour datées de juin 2023 et sans mention de livraison ni de garantie (V).
- Pièces sur mesure, mise à taille et pièces modifiées exclues de tout retour (V).
- Le 3D Ring Designer, selon un audit voisin, échoue à la dernière étape (I).
- Rendu des étapes 1 à 3 : cartes de style avec rendus 3D jaunes uniquement, quel que soit le métal choisi (V, capture : style non testé en blanc/rose).

## Temps d'apparition

Visuel principal du widget : environ 1,8 s sur ordinateur (V, mesure unique) ; iPhone non mesuré.

## Limites de l'audit

- Étape 4 non atteinte : elle appelle `www.jeweleros.com/api/`, interdit par le robots.txt de ce domaine (`Disallow: /api/`). Le designer 3D, la gravure, la taille de doigt, la vue sur la main et le prix de l'assemblage ne sont pas vérifiés.
- Au chargement, la page a appelé elle-même `jeweleros.com/api/widget/config/…` et `/api/config/…` : requêtes d'ouverture, non des écarts.
- Panier (`/cart` interdit), compte, recherche et liste de souhaits non ouverts.
- Pastilles blanche et rose, autres styles, formes et carats non cliqués individuellement.
- Une seule visite.

## Sources

- https://yellowstonejewelers.com/design-your-ring/ (relevé, captures)
- https://yellowstonejewelers.com/catalog/engagement-ring/ ; https://yellowstonejewelers.com/catalog/romance/160125-mq100ylg/ ; https://yellowstonejewelers.com/terms-and-conditions/
- https://yellowstonejewelers.com/robots.txt ; contrôle d'adresses (robots.cjs)
