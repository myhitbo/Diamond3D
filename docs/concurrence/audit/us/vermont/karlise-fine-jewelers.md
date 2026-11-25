# Audit : Karlise Fine Jewelers (Burlington, Vermont)

- **Site** : Karlise Fine Jewelers, https://www.karlisejewelers.com/ (Shopify + GemFind + JewelerOS)
- **Page de départ** : https://www.karlisejewelers.com/pages/custom-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13
- **Statut** : **partiel** (le constructeur s'arrête avant l'écran 3D : le dernier clic appelle l'API JewelerOS, interdite par le robots.txt de JewelerOS ; le bouton « Add to cart » est interdit par le robots.txt de la boutique)

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Page `/pages/custom-ring-builder` | Fenêtre « JewelerOS » plein écran, « Step 1 of 4 : Let's start designing your ring », 3 pastilles de métal (Yellow Gold, White Gold, Rose Gold), 9 cartes de style |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch |
| 2. « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; Decide later |
| 3. Carat | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 ct ; Decide later |
| 4. « When do you need your ring? » | 1-4 semaines ; 1-3 mois ; 3-6 mois ; Not sure yet |
| Après l'étape 4 | Le clic envoie `POST jeweleros.com/api/create/from-ring-config/` ; la fenêtre se ferme sans rien afficher quand l'appel est coupé. Le « 3D Ring Designer » annoncé n'a pas pu être vu |

Boutons de la fenêtre : Back, Skip, historique des choix en haut (Solitaire / Round / 1 carat), fermeture.

## Contrôles vérifiés

Relevé automatique (controls.cjs) : 51 contrôles sur ordinateur, 29 sur iPhone (page d'ouverture). Tableau des contrôles propres au constructeur et aux pages parcourues :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow / White / Rose Gold (pastilles) | bouton | Change la couleur des 9 vignettes de bagues (capture rose gold vérifiée) | aucun affiché | OK [V] |
| 9 cartes de style | carte | Passe à l'étape 2 ; la carte « Solitaire » ne répond pas au clic Playwright normal, seulement au clic programmé sur l'élément `.jos-option` | aucun | OK avec réserve [V] |
| Natural / Lab Grown | bascule | Présente sur l'étape 2 (Natural actif par défaut) ; clic sur Lab Grown fait, effet sur les écrans suivants non observé, aucun prix | aucun | Partiel [V] |
| 9 formes de pierre | carte | Passe à l'étape carat | aucun | OK [V] |
| 8 carats + Decide later | carte | Passe à l'étape délai | aucun | OK [V] |
| 4 délais + Not sure yet | carte | Dernier écran : envoie la configuration à JewelerOS (appel interdit, coupé) | aucun | Non abouti, arrêt volontaire [V] |
| Back / Skip | bouton | Retour / saut d'étape ; non actionnés | - | Non testé : pas d'effet utile à mesurer |
| « Text us » (bulle Podium) | bouton | Ouvre un chat SMS ; non ouvert, consigne de l'audit | - | Non testé |
| « SCHEDULE AN APPOINTMENT » | lien | Ancre `#jos-book-appointment` (module de rendez-vous JewelerOS) ; non ouvert | - | Non testé |
| Téléphone (802) 658-0333 | lien tel | Appel | - | Non testé (lien présent) |
| « Our Location » | lien | Google Maps (lien court goo.gl) | - | Non testé |
| Recherche du site | champ | `/search` | - | Non testé |
| Diamond Tools : Natural | onglet | Vue par défaut, 5 615 diamants | de 630 $ | OK [V] |
| Diamond Tools : Lab Grown | onglet | Clic sans changement visible (même nombre 5 615, mêmes premières lignes après 8 s) | - | Sans effet apparent [V] ; cause non établie |
| Diamond Tools : Fancy Color | onglet | 4 diamants (ex. 1,02 ct FCY VVS1 GIA, 7 604 $) | 7 604 $ et plus | OK [V] |
| Diamond Tools : Round / Oval (forme) | case | Filtre : Oval en natif donne 1 106 diamants, 840 $ min. | oui | OK [V] |
| Diamond Tools : Compare | onglet | « Compare Items (0) », aucune sélection testée | - | Affiché, non exploité |
| Diamond Tools : Save Search / Reset | lien | Non actionnés (Save Search ouvre sans doute une identification) | - | Non testé [S] |
| Diamond Tools : glisseurs cut, color, clarity, carat, prix | glisseur | Présents (D à P, FL à I2, 0 à 20 ct, 0 à 100 000 $) ; non manipulés | - | Non testé |
| Diamond Tools : « Per Page » 12/24/48/99 | liste | 48 donne 48 lignes | - | OK [V] |
| Diamond Tools : tri Price, Shape, Carat, Color, Clarity, Certificate | liste | Tri par Carat : première ligne 0,50 ct à 1 102 $ puis 1 214 $ | oui | OK [V] |
| Diamond Tools : vue grille / liste | icône | Basculées, résultat inchangé en texte | - | OK [V] |
| Fiche bague : Metal Color (5) | choix | White, Yellow, Rose, Yellow & White, Rose & White | identique : 1 800 $ pour les 5 | Lu dans la liste de variantes [V] |
| Fiche bague : Ring Size 4 à 10 | liste | 13 tailles par demi-taille | aucun | Lu [V] |
| Fiche bague : ADD TO CART | bouton | **Non cliqué** : l'ajout appelle /cart/add, interdit par robots.txt (`Disallow: /cart/`) | - | Non testé, panier interdit |
| Fiche bague : More payment options | bouton | Non cliqué (paiement) | - | Non testé |
| Fiche bague : Ask a question | bouton | Formulaire ; non rempli | - | Non testé |
| Partage (Facebook, Twitter, Pinterest) | lien | Présents sur la fiche | - | Non testé |
| Avis (page Testimonials) | page | 5,0 sur 365 avis, repris de Google | - | Lu [V] |

## Options disponibles

- **Métaux du constructeur** : or jaune, or blanc, or rose (pas de platine, pas de choix 14/18 k à l'écran).
- **Métaux d'une fiche** (Leslie N0038SMA) : « 14K Gold », 5 couleurs ; la description indique 18 k et platine « also available », prix variables [V].
- **Styles** : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, trois pierres, départ de zéro.
- **Pierre** : naturelle ou « Lab Grown » ; 9 formes ; carats de 0,5 à 5 ; rien sur la couleur ou la pureté dans le constructeur.
- **Diamond Tools (GemFind)** : formes Round, Radiant, Princess, Pear, Oval, Marquise, Heart, Emerald, Cushion, Asscher ; coupe Ideal à Fair ; couleur D à P ; pureté FL à I2 (SI3 inclus) ; carat 0-20 ; prix 0-100 000 $ ; certificats GIA vus ; 5 615 pierres naturelles, 4 de couleur.
- **Tailles de doigt** : 4 à 10 (demi-tailles). Pas de gravure, pas de pavage au choix, pas de choix de monture détaillé.
- **Services** : rendez-vous, mise à taille, réparations, restringing de perles, assurance, conception sur mesure (« 3D scanning », CAO, bijoux de famille réutilisés).

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le constructeur [V]. Fiches : prix de la monture seule, « Center Diamond not included » ; ex. 1 800 $ pour Leslie N0038SMA en or 14 k [V]. Collection « Engagement rings » : 595 produits, de 765 $ environ à 4 500 $ en première page [V]. Diamants : 630 $ pour 0,30 ct E VVS2 GIA [V]. Aucune décomposition du prix.
- **Délai** : question « When do you need your ring? » (1-4 semaines à 3-6 mois) sans délai promis [V]. Pas de délai de fabrication affiché.
- **Livraison** : bandeau « FREE EXPEDITED SHIPPING for any order over $1000 » [V]. Frais sous ce seuil non vus (panier vide, ajout interdit).
- **Retours** (https://www.karlisejewelers.com/policies/refund-policy [V]) : échange ou avoir sous 30 jours ; remboursement intégral sous 15 jours pour un objet non porté et non retaillé ; **commandes spéciales (sur mesure ou modifiées) non remboursables, acompte d'au moins 50 %**.
- **Garanties** : diamants « conflict free » garantis par écrit ; pas d'autre garantie vue ; page d'assurance bijoux existe (non lue).
- **Paiement** : non vu (panier vide). Bouton « More payment options » présent, non cliqué.
- **Panier** : `/cart` lu, « Your cart is currently empty » [V]. Récapitulatif, livraison et paiement jamais vus.

## Confiance et service

- Magasin physique à Burlington (78 Church Street), horaires affichés, téléphone, rendez-vous en ligne, chat SMS « Text us » [V].
- 365 avis Google, note 5,0 [V], sans lien avec des commandes précises.
- Aucune photo ou vidéo de fabrication, aucun suivi de commande vus [V] ; la page « Custom Jewelry Designs » parle de scan 3D et de CAO sans montrer d'exemples [V].
- Langue : anglais seulement ; devise : USD [V].
- Pas de certificats dans le constructeur ; certificats GIA affichés dans la recherche de pierres [V].
- Libellé du synthétique : « Lab Grown » [V].

## Points forts à retenir pour JR Diamond

1. **Constructeur très court et lisible** : 4 écrans, une question à la fois, historique des choix en haut, ouverture en 1,9 s (ordinateur) et 1,4 s (iPhone) [V].
2. **Vignettes qui changent de couleur dès le choix du métal**, avant la première étape (capture rose gold) [V].
3. **Question « quand en avez-vous besoin ? »** pour guider le délai, utile en face de nos 14 jours ouvrés [V].
4. **Bascule Natural / Lab Grown visible dès l'écran de la pierre** [V].
5. **Moteur de diamants avec nombre de résultats visible** (5 615), tri, 12 à 99 lignes, certificat GIA par ligne [V].
6. **Réassurance locale** : adresse, téléphone, rendez-vous, avis Google en page dédiée [V].

## Défauts observés

- Le dernier écran dépend d'une API distante : appel coupé, la fenêtre se ferme sans message d'erreur [V] (comportement avec appel coupé, non représentatif d'un visiteur normal).
- Aucun prix tout au long du constructeur [V].
- Onglet Lab Grown du moteur de diamants sans effet apparent [V].
- Monture seule affichée sans pierre ; couleurs du métal toutes au même prix, sans effet visible sur l'image (non vérifié visuellement) [V pour le prix].
- Sur mesure non remboursable avec acompte de 50 % [V].
- Carte « Solitaire » insensible au clic standard (zone cliquable décalée ou recouverte) [V].

## Limites de l'audit

- L'écran 3D n'a pas été vu : le clic final appelle `https://www.jeweleros.com/api/create/from-ring-config/`, interdit par le robots.txt de JewelerOS (`Disallow: /api/`). La requête a été interceptée et annulée côté navigateur avant d'être envoyée (observé dans le journal des requêtes) ; à noter honnêtement comme un clic déclenché avant d'avoir coupé l'appel dans mon script. Au chargement, la page appelle seule `/api/widget/config/…` (requêtes d'ouverture, non comptées comme un écart).
- Ajout au panier non testé (`/cart/add` interdit). Panier vide : ni livraison, ni moyens de paiement, ni délai vus.
- Pas de test de Back, Skip, Save Search, Compare, glisseurs, chat, rendez-vous, formulaire.
- Sur iPhone : chargement et passage à l'étape 2 vérifiés ; des GLB (netlify, S3) se chargent après le choix du style [V], suggérant un préchargement du 3D.
- Fiche et tarifs lus avec un seul produit (Leslie N0038SMA) ; 18 k et platine non chiffrés.
- Le robots.txt de la boutique contient des instructions pour agents (UCP, MCP) ; elles n'ont pas été suivies.

## Sources

- https://www.karlisejewelers.com/pages/custom-ring-builder (relevé de contrôles, captures, 15/11/2026)
- https://www.karlisejewelers.com/apps/diamondtools/ (moteur GemFind)
- https://www.karlisejewelers.com/collections/engagement-rings
- https://www.karlisejewelers.com/products/leslie-n0038sma
- https://www.karlisejewelers.com/policies/refund-policy
- https://www.karlisejewelers.com/pages/custom-jewelry-designs
- https://www.karlisejewelers.com/pages/resizing
- https://www.karlisejewelers.com/pages/testimonials
- https://www.karlisejewelers.com/cart
- https://www.karlisejewelers.com/robots.txt et https://www.jeweleros.com/robots.txt (via le contrôle d'adresses)
- Mesures : visuel principal du constructeur 1,9 s (ordinateur), 1,4 s (iPhone) ; photo de fiche 1,2 s et 1,3 s ; moteur de diamants lisible en 3,8 s ; tous mesurés en Chromium, un passage chacun.
