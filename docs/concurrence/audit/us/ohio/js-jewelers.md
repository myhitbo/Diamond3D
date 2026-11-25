# Audit : JS Jewelers (Norwood, Cincinnati, Ohio)

- **Site** : JS Jewelers, https://www.jsjewelers.shop/ ; page de départ https://www.jsjewelers.shop/pages/design-your-ring
- **Date** : 15/11/2026 (jour de la mission ; système daté du 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. Les 3 premières étapes (sur 4) ont été actionnées ; le clic de l'étape 4, qui lance le configurateur 3D, appelle `jeweleros.com/api/create/from-ring-config/`, chemin interdit par le robots.txt de jeweleros.com : **non cliqué**. La 3D n'a donc pas été vue. Marques : [V] vérifié, [I] inféré, [S] supposé.
- robots.txt du site (Shopify) : tout autorisé sauf notamment `/cart/…` ; `/cart` autorisé. Le fichier renvoie à `agents.md` (protocole UCP/WebMCP pour les agents) ; je n'ai utilisé que la lecture de pages et aucun outil de paiement.

## Parcours

| Étape | Options |
| --- | --- |
| 1 sur 4 : style | Couleur d'or (jaune, blanc, rose) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch [V] |
| 2 sur 4 : pierre | Natural ou Lab Grown ; forme : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] |
| 3 sur 4 : taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » ; « exact carat weight » ajustable plus tard dans le designer 3D [V] |
| 4 sur 4 : délai | « 1 - 4 weeks », « 1 - 3 months », « 3 - 6 months », « Not sure yet » ; un clic lance le designer 3D (appel API interdit : arrêt avant ce clic) [V texte, I suite] |
| Designer 3D JewelerOS | Non vu ; texte du site : « Design your ring online in stunning 3D », pierre choisie en boutique, bague « within a couple of weeks » [V texte] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastilles d'or (Yellow, White, Rose Gold) | boutons `jos-metal-btn` | Recolorent les 9 vignettes (blanc vérifié par capture) | aucun prix | OK |
| Solitaire (et les 8 autres cartes) | bouton | Solitaire : passe à l'étape 2 sans appel interdit ; les autres cartes : présentes, non actionnées | aucun | OK (1 testée) |
| Skip | bouton | Présent à chaque étape ; non actionné | - | Non testé |
| Natural / Lab Grown | bouton | Lab Grown actionné, étape 3 affichée ; pas d'indication de prix | aucun | OK |
| Formes (9) | bouton | Oval actionné, passage à l'étape 3 | aucun | OK (1 testée) |
| Carats (8) | bouton | « 1 carat » actionné, passage à l'étape 4 | aucun | OK (1 testée) |
| Délais (4) | bouton | Non cliqués : le clic crée la configuration via `/api/create/from-ring-config/` (interdit par robots.txt de jeweleros.com, [I] d'après le code de partner_config.js) | - | Non testé, raison robots.txt |
| Décide later | bouton | Présent, non actionné | - | Non testé |
| Back | bouton | Présent | - | Non testé |
| Chat (bulle « Hi there! Have a question? Chat with us. ») | bouton | Non ouvert (règle) | - | Non testé |
| Call Us 513-317-1400 | lien tel: | Présent | - | Lien vu |
| Book Appointment | lien | Pointe vers calendly.com/jsjewelers ; non ouvert | - | Non testé |
| Engagement (menu) | menu | 3 liens : design-your-ring, cincinnati-engagement-rings, custom-engagement-rings | - | OK |
| Search, Log in, Cart, Subscribe (courriel) | divers | Search et Cart vus ; /cart répond « Your cart is empty » ; Subscribe et Log in non utilisés | - | OK / non testé |

Sur iPhone : 32 contrôles listés, aucun débordement horizontal (390/390), même parcours.

## Options disponibles

- **Style** : solitaire, halo, halo caché, bezel, cathédrale, pavé complet, toi et moi, trois pierres, ou page blanche [V].
- **Métal** : jaune, blanc, rose (couleur seulement ; ni titre 14/18 k ni platine à ce stade) [V].
- **Origine** : naturel ou synthétique (« Lab Grown ») [V].
- **Forme** : 9 formes [V]. **Carat** : 0,5 à 5 ct par paliers [V].
- **Délai souhaité** : 4 plages [V].
- Gravure, taille de doigt, griffes, pavage, filtres de pierre, comparateur, AR, 360° : non vus (dans le designer 3D, non ouvert).

## Prix, délais, retours, garanties

- [V] Aucun prix dans les 3 étapes ouvertes. Le site affirme des prix « that rivals online wholesalers » (https://www.jsjewelers.shop/pages/custom-engagement-rings). [I, notes de l'inventaire] la FAQ JewelerOS annonce le prix de la monture dans l'outil, sans la pierre.
- [V] Délai annoncé : bagues sur mesure « within a couple of weeks » (témoignage cité en page) ; l'étape 4 demande un délai souhaité, sans promesse.
- Retours, garanties, certificats : non trouvés sur les pages lues (conditions de service = programme de SMS seulement) [V]. Libellé synthétique : « Lab Grown ».
- Devise : USD sous-entendue ; anglais seulement.

## Panier

[V] /cart autorisé : « Your cart is empty ». Aucun ajout : l'outil ne vend rien en ligne et `/cart/add` est interdit par robots.txt (Disallow: /cart/), le bouton « Add to cart » n'a donc pas été cherché. Récapitulatif, livraison, paiement : non vus.

## Confiance et service

- [V] Avis Google cités en page (3 témoignages, dont un sur le remontage de pierres d'un bijou de famille) ; pas de note globale lue.
- [V] Adresse 2710 Park Ave Unit 600, Norwood ; (513) 317-1400 ; courriel ; réseaux (Facebook, Instagram, YouTube, TikTok) ; rendez-vous Calendly ; chat sur la page.
- [V] Concierge : texte « personalized, concierge-level experience » ; relances par SMS (conditions de service : consentement par case à cocher, 3 messages par mois au plus).
- Preuve de fabrication : aucune photo ou vidéo d'atelier vue, aucun suivi de commande [V].

## Points forts à retenir pour JR Diamond

1. Entrée en 4 étapes très courtes (style, origine et forme, carat, délai), chaque réponse en un clic : preuve, textes de l'étape 1 à 4 ci-dessus.
2. « Natural / Lab Grown » placé tout de suite, à l'étape 2, avant la forme.
3. Étape « Decide later » à chaque fois : aucun blocage si le client hésite.
4. Étape 1 déjà visible en ~1,2 à 1,8 s (ordinateur et iPhone) avec vignettes recolorées par couleur d'or.
5. Texte clair du processus en 3 temps (concevoir en ligne, choisir la pierre en boutique, finaliser).

## Défauts observés

- Aucun prix dans les étapes lues.
- Pas de choix de titre (14/18 k) ni de platine à l'étape 1.
- Le designer 3D (cœur de l'offre) repose sur un tiers (JewelerOS, marque blanche) : modèle générique, pas le fichier de fabrication de l'atelier [I].
- Retours, garantie, délai de fabrication précis : introuvables sur les pages lues.
- Boutique Shopify limitée : aucune bague en vente directe, `/collections/engagement-rings` est un 404 selon l'inventaire.
- Un chargement `chrome-error://chromewebdata/` est présent dans les cadres de la page (cadre Shopify bloqué, sans effet visible).

## Limites de l'audit

- Designer 3D non ouvert (appel API interdit) : toutes les options de corps de bague, griffes, pavage, taille de doigt, gravure, vues 3D/photo/AR, prix de la monture, enregistrement et panier restent non vérifiés.
- Les appels à `jeweleros.com/api/config/…`, `/api/widget/config/…` et `/api/log-error/` faits par la page à son ouverture ne sont pas un écart ; mes clics ont été interceptés pour qu'aucun appel `/api/` ne parte ensuite (aucun n'a été déclenché pendant les étapes 1 à 3).
- Chat, Calendly, formulaire d'abonnement, connexion : non ouverts.
- Mesure du visuel principal : seules les vignettes de l'étape 1 ont été mesurées (1,2 à 1,8 s) ; la 3D n'a pas pu l'être.

## Sources

- https://www.jsjewelers.shop/pages/design-your-ring (vérifié, actionné)
- https://www.jsjewelers.shop/pages/custom-engagement-rings (vérifié)
- https://www.jsjewelers.shop/pages/cincinnati-engagement-rings (vérifié)
- https://www.jsjewelers.shop/policies/terms-of-service (vérifié)
- https://www.jsjewelers.shop/cart (vérifié)
- https://www.jsjewelers.shop/robots.txt, https://www.jsjewelers.shop/agents.md, https://jeweleros.com/robots.txt (`Disallow: /api/`)
- https://www.jeweleros.com/static/dist/jos.js et partner_config.js (code lu : endpoints `/api/create/from-ring-config/`, `/api/save-customer/`, `/api/send-code/`…)
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/jsjewelers/
