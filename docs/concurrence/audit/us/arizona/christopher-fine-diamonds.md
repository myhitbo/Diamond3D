# Christopher Fine Diamonds (Chandler, Arizona)

- Site : https://christopherfinediamonds.com
- Page de départ : https://christopherfinediamonds.com/pages/design-your-ring
- Date : relevé du 24/11/2026 (étude du 15/11/2026)
- Appareils : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright, Chromium sans carte graphique)
- Statut : **partiel** (concepteur 3D en erreur ; `/apps/` et `/cart` interdits par robots.txt, non visités ; aucune vente en ligne)

Marques : (V) vérifié, page lue ou contrôle actionné ; (I) inféré ; (S) supposé.

## Parcours

Le « concepteur » est une surcouche JewelerOS (script `jeweleros.com/static/dist/jos.js`) qui s'ouvre plein écran sur la page Shopify (V).

| Étape | Options (V) |
|---|---|
| 1 sur 4 « Let's start designing your ring » | 3 couleurs d'or (jaune, blanc, rose) ; styles Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| 2 sur 4 « Choose your center stone » | bascule Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats, « Decide later » ; texte : « Once you're in the ring designer you can easily set an exact carat weight » |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Concepteur 3D | « Something went wrong » + bouton « Try again » (ordinateur : après 2,1 s ; iPhone : même résultat) |
| Après | pas de prix, pas de panier : le site demande un rendez-vous (« Book Now ») ou un SMS |

## Contrôles vérifiés

Page de départ : 107 contrôles visibles sur ordinateur, 63 en affichage iPhone (V, `controls.cjs`). Le tableau regroupe ceux du parcours puis les familles de la page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune (« Yellow Gold ») | bouton rond | reste sélectionné par défaut ; images de l'étape inchangées | aucun prix | fonctionne (V) |
| Pastille or blanc (« White Gold ») | bouton rond | les vignettes des styles changent de couleur (images `*_white`) | aucun | fonctionne (V) |
| Pastille or rose (« Rose Gold ») | bouton rond | idem en rose | aucun | fonctionne (V) |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | passe à l'étape 2 avec le style en puce en haut ; seul Solitaire a été actionné, les sept autres n'ont pas été testés (même composant) | aucun | Solitaire fonctionne (V) ; autres non testés (I : même effet) |
| Start from scratch | carte | non testé (éviter de passer l'étape en double) | aucun | non testé |
| Natural / Lab Grown | bascule | « Lab Grown » reçoit la classe `active`, « Natural » la perd | aucun | fonctionne (V) |
| Marquise | carte forme | passe à l'étape 3, puce « Marquise » ajoutée | aucun | fonctionne (V) |
| Round, Oval, Cushion, Emerald, Princess, Asscher, Pear, Radiant, Decide later | carte forme | non actionnés un par un | aucun | non testés (temps) |
| 1 carat | carte | passe à l'étape 4 | aucun | fonctionne (V) |
| 0,5 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 carats ; Decide later | carte | non actionnés un par un | aucun | non testés |
| 1 - 4 weeks | carte | ouvre le concepteur 3D qui échoue (« Something went wrong ») | aucun | **erreur** (V) |
| 1 - 3 months, 3 - 6 months, Not sure yet | carte | non actionnés (même résultat attendu) | aucun | non testés |
| Back (flèche) | bouton | présent à chaque étape | aucun | non actionné |
| Skip | bouton | présent à chaque étape ; non actionné | aucun | non testé |
| Try again | bouton | apparu après l'erreur ; non actionné pour ne pas répéter la requête qui échoue | aucun | non testé |
| Text us (flottant) | bouton | ouvre un SMS (`sms:+18339624149`) ; non ouvert | aucun | non testé (règle : pas de conversation) |
| Book Now (x10) | bouton | ouvre la prise de rendez-vous ; non actionné | aucun | non testé |
| (480) 792-1161 | lien | `tel:+14807921161` | aucun | lien présent (V) |
| Recherche (champ + bouton) | champ | non utilisé | aucun | non testé |
| Menu : Engagement & Bridal, Fine & Gemstone Jewelry, Men's Jewelry, Gifts, Sell Your Jewelry, Custom Jewelry, Services, Careers, Book With Us, About | liens | pages internes, chacune sous `Allow: /` ; seules les pages de politique et de service lues | aucun | liens présents (V) |
| Pied de page : Return Policy, Limited Lifetime Warranty, Jewelry Financing, Jewelry Guides & Education, Blog, Location & Hours, Meet Our Team, In the Media | liens | pages de politique et de financement lues (voir plus bas) | aucun | fonctionnent (V pour retours, garantie, financement, livraison) |
| Pied de page : 5 pages de villes (Gilbert, Mesa, Scottsdale, Tempe, Queen Creek) | liens | pages de référencement local | aucun | non testés |
| Médias et fiches d'avis (Phoenix Magazine, The Knot, WeddingWire, Style Me Pretty, etc.), BBB, Jewelers of America, Google, Instagram, Facebook, YouTube, TikTok | liens externes | sortent du site ; non suivis | aucun | liens présents (V) |
| Vue 360°, vidéo, sur la main, AR, zoom, comparer, enregistrer, partager, filtres de pierres, taille de doigt, gravure, pavage, griffes | modes de vue et options | non accessibles : le concepteur 3D ne charge pas ; aucun filtre de pierre en ligne | aucun | non testés |
| Ajout au panier, panier | bouton, page | pas de bouton d'achat de bague ; `/cart` interdit par robots.txt (`Disallow: /cart`) | aucun | non visité (INTERDIT) |

## Options disponibles

- Métaux : or jaune, blanc, rose (pas de titre 14 k / 18 k, pas de platine dans le parcours de départ) (V).
- Styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, depuis zéro (V).
- Origine : Natural, Lab Grown (V).
- Formes : rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant (V).
- Carats : 0,5 à 5 (8 valeurs) ou « Decide later » (V).
- Délai souhaité : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, indécis (V).
- Non disponible en ligne : taille de doigt, gravure, pavé, griffes, filtres de couleur / pureté / prix / certificat (concepteur inaccessible).
- Catalogue Shopify : 19 produits, tous des services ou des rendez-vous (« CAD/ Wax Review », rhodiage 75 $, expertise 150 $) selon l'exploration (V, `/products.json`, non relu aujourd'hui).

## Prix, délais, retours, garanties

- Prix : aucun prix de bague en ligne ; le site se décrit lui-même comme « primarily an in-store, appointment-based fine jewelry destination » (V, https://christopherfinediamonds.com/policies/shipping-policy).
- Vente en ligne : « does not operate as a traditional online jewelry checkout store » ; retrait en magasin préféré (V, même page).
- Délai : demandé au client (étape 4), pas annoncé par le site ; aucun délai de fabrication relevé (V sur l'absence dans les pages lues).
- Retours : 30 jours, échange ou avoir seulement, article non porté ; **vente définitive** pour les bijoux sur mesure, gravés, redimensionnés, commandes spéciales ; frais de remise en stock jusqu'à 15 % (V, https://christopherfinediamonds.com/pages/return-policy).
- Garantie : « Limited Lifetime Warranty » sur la fabrication et le remplacement de pierres perdues par défaut de fabrication ; **inspection gratuite tous les six mois exigée**, sinon la garantie peut être annulée ; acheteur d'origine seulement (V, https://christopherfinediamonds.com/pages/christopher-fine-diamonds-limited-lifetime-warranty).
- Financement : Synchrony, demande en ligne ou en boutique (V, https://christopherfinediamonds.com/pages/apply-for-financing-christopher-fine-diamonds).
- Promotion affichée : « PRE-HOLIDAY SALE: 30% OFF » jusqu'au 24 décembre (V, bandeau).
- Certificats, libellé du synthétique : « Lab Grown » / « lab-grown » dans le parcours et les pages ; aucune mention de GIA ou IGI lue sur les pages ouvertes (V sur ces pages ; I pour le reste du site).
- Langues, devises : anglais, dollars (I : aucune alternative vue).

## Confiance et service

- Avis : « 1000+ 5-Star Google Reviews » affirmé par le site, sans décompte sur la page (V, pages engagement-rings et custom-jewelry) ; chiffre non vérifié chez Google.
- Reconnaissances : BBB, Jewelers of America, Phoenix Magazine « Best of the Valley 2026 », nombreux articles et annuaires liés (V, pied de page).
- Atelier : « in-house master jewelers », CAD, maquettes en cire avant fabrication, refonte de bijoux de famille (V, https://christopherfinediamonds.com/pages/custom-jewelry). Aucune photo ni vidéo de fabrication ni suivi de commande lus.
- Contact : téléphone, SMS (« Text us »), rendez-vous en ligne (V).

## Points forts à retenir pour JR Diamond

- Questions de qualification posées avant tout contact : style, naturel ou synthétique, forme, carat, délai, en 4 écrans (preuve : étapes 1 à 4, V).
- Aperçu des styles qui change de couleur selon le métal choisi (preuve : images `*_white` chargées au clic sur « White Gold », V).
- Aveu clair du carat « exact » réglé plus tard dans le concepteur (preuve : texte de l'étape 3, V).
- Aperçu CAD et maquette en cire avant fabrication (preuve : page custom-jewelry, V) : proche de la promesse « ce que vous voyez existe ».
- Politique de retour lisible, avec la vente définitive du sur-mesure écrite noir sur blanc (preuve : page return-policy, V) : modèle de rédaction pour la question juridique israélienne.

## Défauts observés

- Le concepteur 3D affiche « Something went wrong » sans carte graphique, 2,1 s après le dernier choix, sur ordinateur et en affichage iPhone (V). La requête `https://www.jeweleros.com/api/config/9o1wDynDwlWv/` échoue (« Failed to fetch », blocage CORS signalé par la console) et le site renvoie une erreur au service (V, journal du navigateur). Cause côté prestataire ou propre à notre navigateur : non tranché (I).
- Aucun prix, aucun panier, aucune vente en ligne : le parcours mène à un rendez-vous (V).
- Pas de carat ni de titre d'or précis dans le parcours de départ (V).
- Pas de preuve de fabrication en ligne (photos ou vidéos d'atelier) sur les pages lues (V).
- Deux ressources Shopify refusées (403 sur `shop.app/pay/hop`) sans effet visible (V).

## Limites de l'audit

- Concepteur 3D inaccessible : rien d'observé sur le rendu, les modes de vue, les prix ou le panier.
- Chemins `/apps/` et `/cart` interdits par robots.txt : non ouverts.
- Seules 4 étapes ont été parcourues en entier une fois ; les choix de chaque carte n'ont pas été testés un à un.
- Temps d'affichage : première étape visible en 1,4 s (ordinateur) et 2,0 s (iPhone) après le chargement de la page, mesure unique (V) ; visuel principal 3D jamais affiché.
- Pas de chat, SMS ni rendez-vous ouverts ; « Try again » et « Skip » non actionnés.
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/christopher-fine/` (hors dépôt).

## Sources

- https://christopherfinediamonds.com/pages/design-your-ring (parcours, contrôles ; robots.cjs : AUTORISÉ)
- https://christopherfinediamonds.com/pages/return-policy
- https://christopherfinediamonds.com/pages/christopher-fine-diamonds-limited-lifetime-warranty
- https://christopherfinediamonds.com/pages/custom-jewelry
- https://christopherfinediamonds.com/pages/engagement-rings
- https://christopherfinediamonds.com/pages/apply-for-financing-christopher-fine-diamonds
- https://christopherfinediamonds.com/policies/shipping-policy
- https://christopherfinediamonds.com/products/engagement-ring-consultation
- `docs/concurrence/audit/us/arizona/INVENTAIRE.md`, section 4 (`/products.json`, 19 produits)
