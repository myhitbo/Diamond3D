# Audit de site : Southern Diamond Jewelers (Murfreesboro, Tennessee)

- **Site** : Southern Diamond Jewelers
- **Adresse** : https://www.southerndiamondjewelers.com/ (page de départ : https://www.southerndiamondjewelers.com/pages/custom-ring-builder)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **partiel**. Les 4 étapes du questionnaire de départ sont atteintes (étapes 1 à 3 actionnées, étape 4 affichée) ; le clic de l'étape 4 (et « Skip ») lance le designer 3D JewelerOS, qui appelle `jeweleros.com/api/…`, chemin interdit par le `robots.txt` de jeweleros.com (`Disallow: /api/`) : **non cliqué**. La 3D n'a donc pas été vue. Panier : page `/cart` lue (vide).
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- `robots.txt` du site : tout autorisé sauf `/cart/…` ; aucune adresse interdite ouverte. Pendant les clics, toute requête vers `jeweleros.com/api/` était interceptée avant envoi : aucune n'a été déclenchée (liste « bloquées » vide).

## Parcours

| Étape | Options |
| --- | --- |
| Pastilles de métal (haut de l'étape 1) | Yellow Gold, White Gold, Rose Gold [V] |
| 1 sur 4 : style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch [V] |
| 2 sur 4 : pierre centrale | Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; Decide later [V] |
| 3 sur 4 : taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat ; Decide later [V] |
| 4 sur 4 : délai | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet [V texte] ; un clic lance le designer 3D (appel API interdit) [I] |
| Designer 3D (« 3D Ring Designer ») | Non ouvert ; décrit comme personnalisation complète, carat exact réglable dedans [V texte] |
| Boutique | Pierre choisie en showroom à Murfreesboro, puis commande finalisée avec un spécialiste [V texte] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Yellow / White / Rose Gold (pastilles) | bouton | actionnés l'un après l'autre : les vignettes de style passent de `…_white.webp` à `…_rose`/`…_yellow` (images chargées sur `jos0.b-cdn.net`) | aucun prix | OK |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte-bouton (8) | « Halo », « Three Stone » et « Solitaire » actionnés : passage à l'étape 2 ; les 5 autres non actionnés (même comportement [I]) | aucun | OK (3 testés sur 8) |
| Start from scratch | carte-bouton | non actionné | - | Non testé |
| Natural / Lab Grown | bouton | actionné (Natural, Lab Grown) : la page reste à l'étape 2, bascule sans changement d'affichage visible | aucun | OK |
| Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant | carte-bouton (9) | « Oval » et « Round » actionnés : passage à l'étape 3 ; 7 non actionnés | aucun | OK (2 testés sur 9) |
| 0,5 à 5 carats (8) | carte-bouton | « 1 carat » actionné : passage à l'étape 4 ; 7 non actionnés | aucun | OK (1 testé sur 8) |
| 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet | bouton (4) | **non cliqués** : créent la configuration via `jeweleros.com/api/create/…` [I, d'après les audits voisins] | - | Non testé, raison robots.txt |
| Decide later (étapes 2 et 3) | bouton | non actionné | - | Non testé |
| Skip | bouton | non actionné : mène au designer, donc à l'API interdite [I] | - | Non testé, raison robots.txt |
| Back | bouton | présent à toutes les étapes ; non actionné | - | Non testé |
| Close dialog / Close (iPhone) | bouton | ferme la fenêtre du questionnaire ; non actionné | - | Non testé |
| Open search | bouton | non actionné | - | Non testé |
| TOTAL ITEMS IN CART: 0 | bouton | tiroir de panier ; page `/cart` lue : « Your cart is empty » [V] | - | OK |
| Menu : Shop, Custom Design, Custom Ring Builder, Services, Contact us, About us | liens | Custom Design, Shop, About, Contact, Repair, Cart lues [V] ; `/pages/shop` affichait une page vide à la lecture | - | OK / vide |
| Compte (`/account`, connexion) | liens | non ouverts | - | Non testé |
| Facebook, Instagram, Youtube | liens | externes ; « Youtube » pointe vers `youtube.com/shopify` (chaîne de Shopify, pas celle du joaillier) [V lien] | - | Non testé |
| Privacy policy, Terms of service | liens | « Terms of service » lue : programme de SMS ; « Privacy policy » non lue | - | OK / non testé |

Aucun contrôle de vue (photo, vidéo, 360°, 3D, sur la main, AR, zoom), de taille de doigt, de gravure, de pavage ni de griffes n'est accessible hors du designer 3D : non testé (raison robots.txt).
Pas de filtre de pierres par couleur, pureté, prix ou certificat dans le questionnaire : la pierre se choisit en showroom [V texte].
Pas de bouton partager, enregistrer, comparer, financement, essayage, WhatsApp visible dans le questionnaire [V absence].

## Options disponibles

- **Styles** : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, three stone, ou départ de zéro [V].
- **Métaux (pastilles)** : jaune, blanc, rose ; aucun titre (14 k ou 18 k) ni platine dans le questionnaire [V absence].
- **Origine** : Natural ou Lab Grown [V].
- **Formes** : 9 (rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant) [V].
- **Carats** : 0,5 à 5 en 8 paliers ; l'exact se règle dans le designer [V texte].
- **Délai souhaité** : 4 choix [V].
- **Hors outil** : réparation et nettoyage (mise à taille, regriffage, rhodiage, restauration…) [V, `/pages/jewelry-repair`].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le questionnaire ; le designer 3D n'a pas été ouvert (pas de décomposition vue). La boutique en ligne montre des bijoux à 475 à 1 950 $ (liste du panier vide, pas des bagues de fiançailles) [V]. Un audit voisin note que la FAQ JewelerOS annonce le prix de la monture dans l'outil, sans la pierre [I, voir `docs/concurrence/audit/us/ohio/js-jewelers.md`].
- **Délai annoncé** : « we can have it ready for you in just a couple of weeks » [V, `/pages/custom-engagement-rings`] ; l'étape 4 demande un délai souhaité sans promesse [V].
- **Retours / garantie** : introuvables ; `/policies/refund-policy` et `/policies/shipping-policy` renvoient 404 ; les conditions de service lues traitent du programme de SMS [V].
- **Livraison** : retrait en showroom ; frais de livraison et moyens de paiement non vus (panier vide, jamais atteint avec article).

## Confiance et service

- **Atelier visible** : texte uniquement : « detailed 3D renderings and 3D-printed models », fondateurs issus de Tiffany & Co. et d'ateliers renommés (page « About us ») ; aucune photo ou vidéo de fabrication, aucun suivi de commande relevé [V texte].
- **Pierres de famille** : un avis cité mentionne l'incorporation de diamants familiaux [V texte, avis tiers].
- **Avis** : deux avis Google cités en page (Hunter Jones, K B), 5 étoiles ; pas de note moyenne ni nombre [V].
- **Contact** : 5241 Veterans Parkway Suite C9, Murfreesboro, TN 37128 ; 629-280-4484 ; rendez-vous pour réparation [V]. Programme de SMS dans les conditions [V]. Pas de chat ni WhatsApp relevés.
- **Langues/devises** : anglais, dollar [V].
- **Certificats / libellé synthétique** : « Lab Grown » ; aucun certificat mentionné dans les pages lues [V].

## Points forts à retenir pour JR Diamond

1. **Questionnaire en 4 étapes avec vignettes qui changent de métal en direct**, avant d'entrer dans la 3D : entrée très rapide et sans friction. Preuve : étape 1, 9 vignettes `…_white.webp` / `rose` / `yellow` chargées au clic des pastilles. [V]
2. **Choix naturel / synthétique dès l'étape de pierre**, visible avant les formes. Preuve : étape 2. [V]
3. **Promesse de parcours claire en 3 temps** (concevoir en 3D, choisir la pierre en boutique, commander) avec délai « a couple of weeks ». Preuve : `/pages/custom-engagement-rings`. [V]
4. **Étape « taille » en carats** ramenée à 8 paliers simples, avec réglage exact plus loin. Preuve : étape 3. [V]
5. **Affichage réactif** : texte de l'étape 1 visible en 0,9 s (ordinateur et iPhone) et premières images en ~0,3 à 0,4 s. Preuve : mesures du 15/11. [V]

## Défauts observés

- Aucun prix, ni titre d'or (14/18 k), ni platine dans le questionnaire ; la 3D reste dans un outil tiers. [V]
- La 3D est générique (outil loué JewelerOS) et non le fichier de fabrication de l'atelier [I, d'après `docs/concurrence/audit/us/tennessee/INVENTAIRE.md`].
- Pages de politique (retours, expédition) en 404 ; aucune garantie ni retour lisible. [V]
- Page `/pages/shop` vide à la lecture ; la boutique du panier vide ne montre pas de bagues de fiançailles. [V]
- Lien « Youtube » du pied de page vers la chaîne de Shopify. [V]
- Pas de version hébreu ou multilingue ; pas de pierre choisie en ligne. [V]

## Limites de l'audit

- Designer 3D non ouvert (appel `jeweleros.com/api/` interdit) : options de corps de bague, griffes, pavage, taille de doigt, gravure, vues 3D/photo/AR, prix de la monture, enregistrement, et ajout au panier non vérifiés.
- Seules 3 cartes de style sur 8, 2 formes sur 9 et 1 carat sur 8 ont été actionnées ; le reste est inféré identique.
- Mesure : le texte de l'étape 1 apparaît en 0,90 s (ordinateur) et 0,91 s (iPhone) ; la première image visible termine à 0,44 s (ordinateur) et 0,32 s (iPhone) [V mesure]. Pas de 3D à mesurer.
- Le contenu du panier avec article, les frais de livraison, le délai et les moyens de paiement n'ont pas été vus.
- Chat, formulaire, connexion, prise de rendez-vous, SMS : non ouverts.

## Sources

- https://www.southerndiamondjewelers.com/robots.txt et https://www.jeweleros.com/robots.txt (`Disallow: /api/`), via `robots.cjs`
- https://www.southerndiamondjewelers.com/pages/custom-ring-builder (desktop et iPhone) ; /pages/custom-engagement-rings ; /pages/about-us ; /pages/jewelry-repair ; /pages/contact ; /pages/shop ; /policies/terms-of-service ; /policies/refund-policy et /policies/shipping-policy (404) ; /cart
- Audit voisin pour le comportement de l'étape 4 : docs/concurrence/audit/us/ohio/js-jewelers.md
- Captures et relevés : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/southern-diamond-jewelers/
