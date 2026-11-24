# Audit : Noe's Jewelry (Raymore, Missouri)

- **Site** : Noe's Jewelry — https://www.noesjewelry.com
- **Page de départ** : https://www.noesjewelry.com/pages/custom-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Les 4 étapes de l'assistant sont vérifiées ; l'étape 3D (« 3D Ring Designer » de JewelerOS) n'est pas atteinte, par choix : l'appel qui la crée passe par `jeweleros.com/api/`, interdit par le robots.txt de JewelerOS, et l'auditeur précédent l'a vu échouer. Parcours produit (fiche, panier) vérifié sur une bague prête.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- robots.txt de noesjewelry.com : `Allow: /` pour `*` ; robots d'entraînement (ClaudeBot, GPTBot…) interdits, lecture comme visiteur, rien collecté pour entraînement [V].

## Parcours

Page de départ [V] : https://www.noesjewelry.com/pages/custom-ring-builder (assistant « Step 1 of 4 », puis « 3D Ring Designer » annoncé).

| Étape | Titre affiché | Options (vérifiées) |
|---|---|---|
| 1 | « Let's start designing your ring » | 3 pastilles de métal (Yellow Gold, White Gold, Rose Gold) ; 8 styles + « Start from scratch » |
| 2 | « Choose your center stone » | bascule Natural / Lab Grown ; 9 formes + « Decide later » |
| 3 | « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats + « Decide later » |
| 4 | « When do you need your ring? » | 1–4 semaines / 1–3 mois / 3–6 mois / « Not sure yet » |
| 5 | « 3D Ring Designer » | **non atteint** (voir limites) |

Ensuite, selon le site, on prend rendez-vous : « Pick out your center stone in our Raymore, MO showroom », puis « Finalize & order your ring » [V] (https://www.noesjewelry.com/pages/custom-engagement-rings). La pierre se choisit en magasin, pas en ligne [V].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille Yellow Gold | bouton (`title`) | Image des cartes de style passe à `solitaire_yellow.webp` (CDN jos0.b-cdn.net) | aucun | OK [V] |
| Pastille White Gold | bouton | Image passe à `solitaire_white.webp` | aucun | OK [V] |
| Pastille Rose Gold | bouton | Image passe à `solitaire_rose.webp` | aucun | OK [V] |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | cartes | Choix du style, passage à l'étape 2 (testés : Solitaire, Halo) | aucun | Solitaire et Halo OK [V] ; les 6 autres : non cliqués (même composant, comportement identique [I]) |
| Start from scratch | carte | Non cliqué (peut lancer la création [S]) | aucun | non testé : évite l'appel API interdit |
| Natural / Lab Grown | bascule | « Lab Grown » devient actif | aucun | OK [V] |
| Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant | cartes | Marquise testée : passage à l'étape 3 | aucun | Marquise OK [V] ; 8 autres non cliquées |
| Carats 0,5 à 5 | cartes | « 1 carat » testé : passage à l'étape 4 | aucun | OK [V] ; autres non cliquées |
| Decide later (étapes 2 et 3) | carte | Non cliqué | aucun | non testé |
| Délais (4 cartes) | cartes | **Non cliquées** : la sélection finale déclenche la création, donc l'appel `/api/create/from-ring-config/` interdit | aucun | non testé, raison de robots.txt |
| Back | bouton (en haut à gauche) | Revient de l'étape 2 à l'étape 1 | aucun | OK par clic JavaScript [V] ; un clic de souris simulé échoue (délai dépassé, élément probablement recouvert par l'en-tête du site [I]) |
| Skip | bouton | Non testé de façon concluante (test interrompu) | aucun | non testé |
| Book Appointment | lien `#jos-book-appointment` | Ancre interne de JewelerOS, non ouverte | aucun | non testé |
| Call: 1-816-322-7227 | lien `tel:` | Appel téléphonique | aucun | non testé (lien présent) [V] |
| Visit Location | lien | goo.gl/maps, non ouvert | aucun | non testé |
| Bulle de chat (en bas à droite) | bouton | Non ouverte (règle : pas de conversation) | aucun | non testé |
| Accessibilité (UserWay, 3 boutons en haut + icône) | boutons | Menu d'accessibilité, non ouvert | aucun | non testé |
| Recherche, Log in, Cart, menus Engagement / Wedding / Jewelry / Lab Grown / Vintage / Timepieces / Designers / About / Birthstones | liens | Navigation ; 55 contrôles listés sur ordinateur, 20 sur iPhone | aucun | liens présents [V] ; seuls Lab Grown et Cart ouverts |
| Liens réseaux (Instagram, Facebook, YouTube, Twitter, Pinterest) | liens | Hors site, non ouverts | aucun | non testé |

Collection synthétique https://www.noesjewelry.com/collections/lab-grown-engagement-ring (53 produits) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filter | bouton | Ouvre un panneau qui ne contient que le **tri** ; aucun filtre (forme, carat, couleur, pureté, prix, certificat) | n/a | OK, mais pas de filtres [V] |
| Tri | liste | Featured, Most relevant, Best selling, A–Z, Z–A, Price low→high, Price high→low, Date old→new, Date new→old | classe par prix | non actionné, options lues [V] |
| Quick view (53 fiches) | liens | Ouvre la fiche produit | affiché sur la fiche | fiche 1 ouverte [V] |
| Fiche : liste « RING SIZE » | liste | 13 tailles, de 4 à 10 par demi-taille | aucun | OK : « 7 » choisi, repris dans le panier [V] |
| ADD TO CART | bouton | Appel `/cart/add.js` (200), article ajouté | 3 999,00 $ | OK [V] (robots.txt : `Allow: /`) |
| More payment options | lien | Non suivi ; probablement les paiements fractionnés Shopify [S] | n/a | non testé |
| ASK A QUESTION | bouton | Non ouvert (formulaire) | n/a | non testé |
| Share (Facebook, Twitter, Pinterest) | liens | Partage externe, non suivi | n/a | non testé |
| Panier : Quantité, Update cart, Remove, Check out | champs et boutons | Page `/cart` : un article, sous-total 3 999,00 $, « Shipping, taxes, and discounts codes calculated at checkout » ; Check out non cliqué | 3 999,00 $ | affichage OK [V] ; paiement non testé (règle) |

## Options disponibles

- **Métaux de l'assistant** : or jaune, or blanc, or rose [V]. Pas de titre (14 / 18 k) ni de platine dans l'assistant. Dans le catalogue : « 14kt », « 18kt » et « Lady's Platinum » apparaissent dans les titres [V].
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch [V].
- **Origine** : Natural ou Lab Grown [V].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant [V].
- **Carats** : 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 [V].
- **Délai souhaité** : 1–4 semaines, 1–3 mois, 3–6 mois, pas sûr [V].
- **Taille de doigt** (fiche) : 4 à 10 par demi-taille [V].
- **Non trouvé** : gravure, griffes, corps de bague, pavé réglable, épaisseur, filtres de pierres (couleur, pureté, certificat, prix) dans l'assistant ; ces réglages sont renvoyés au « 3D Ring Designer » non atteint [I].
- **Modes de vue** : 3D annoncée (« Visualize your creation in real time ») mais non vue ; sur la fiche : photos seulement relevées, ni 360° ni vidéo ni AR [V pour l'absence de bouton dédié dans la liste des contrôles de la fiche].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant ; le prix n'apparaît qu'à la fiche d'une bague prête, en un seul total, sans décomposition (ex. 3 999,00 $ pour une bague or jaune 18 kt, marquise synthétique 2,52 ct E VVS2 IGI, 4 marquises latérales 0,07 ct) [V] https://www.noesjewelry.com/collections/lab-grown-engagement-ring/products/18kt-yellow-gold-ring-with-2-52ct-lab-grown-marquise-center-e-vvs2-igi.
- **Délai du sur mesure** : « ready for you in just a couple of weeks » (formulation du site) [V]. Aucun délai ferme ni date de livraison dans l'assistant ; le choix « 1–4 semaines » est une préférence du client [V].
- **Livraison** : « Shipping, taxes, and discounts codes calculated at checkout » ; frais non visibles au panier [V]. Livraison accélérée gratuite au-delà de 1 000 $ relevée par l'inventaire [V, reprise de l'inventaire].
- **Retours** (https://www.noesjewelry.com/policies/refund-policy) [V] : 30 jours, article non porté, avec étiquettes et emballage ; **les produits sur mesure (« special orders or personalized items ») ne sont pas repris**, ni les soldes ; remboursement sous 10 jours ouvrés après inspection ; droit de rétractation de 14 jours si expédié dans l'Union européenne. Retour par courriel à une adresse de la boutique.
- **Garanties** : non relevées sur la page de retours ni sur la fiche [V pour l'absence]. 
- **Certificats** : le certificat IGI figure dans les titres de la collection synthétique (numéro « LG835642198 » dans la description de la fiche vérifiée) [V]. Aucun certificat GIA vérifié.
- **Libellé du synthétique** : « Lab Grown » (bascule de l'assistant et titres) [V].

## Confiance et service

- Appel gratuit 1-816-322-7227 ; « Book Appointment » ; chat flottant ; formulaire de contact ; magasin au 2017 W. Foxwood Dr., Raymore ; horaires mardi à samedi, fermé lundi et dimanche [V] https://www.noesjewelry.com/pages/contact-us.
- Entreprise depuis 1999, 14 collaborateurs dont deux bijoutiers d'atelier ; deux avis Google cités en texte sur la page (noms propres, non recopiés) [V].
- Pas de comparateur, pas d'enregistrement du design, pas de bouton « partager » dans l'assistant [V pour l'absence dans la liste des contrôles].
- Langue : anglais seulement ; devise : dollar américain [V].
- Preuves de fabrication : aucune photo ou vidéo d'atelier, aucun suivi de commande sur les pages vues [V pour l'absence] ; le site évoque un « Jewelry Redesign » (transformation) et des réparations [V : liens de pied de page https://www.noesjewelry.com/pages/jewelry-redesign-in-kansas-city].
- Moyens de paiement : non affichés au panier ; seule mention « More payment options » sur la fiche [V].
- Visuel principal : première image de l'assistant prête en **1,8 s** sur ordinateur et **2,0 s** sur iPhone (DOM prêt en 1,1 s et 1,2 s) [V, une mesure par appareil, réseau du poste d'audit].

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 étapes très court**, un seul choix par écran, avec « Decide later » aux étapes 2 et 3 : démarrage sans pression (https://www.noesjewelry.com/pages/custom-ring-builder).
2. **Image qui change avec la couleur du métal** dès l'étape 1 (trois fichiers distincts `solitaire_yellow/white/rose.webp`) [V].
3. **Catalogue synthétique important avec certificat IGI** dans les titres, 53 fiches, tri par prix [V].
4. **Mise en avant du lieu et de l'équipe d'atelier** : « two bench jewelers » et ancienneté 1999 [V]. JR Diamond peut aller plus loin avec des preuves filmées.
5. **Parcours « en ligne puis magasin »** expliqué en trois étapes (dessiner, choisir la pierre, finaliser) [V].

## Défauts observés

- **Aucun prix** dans l'assistant ; le client conçoit sans savoir ce que cela coûtera [V].
- **L'assistant finit sur une erreur** : l'auditeur précédent a rapporté « Something went wrong Try again » après l'étape 4 (appel `jeweleros.com/api/create/from-ring-config/` bloqué par CORS) ; non retesté ici [V par rapport précédent, voir `INVENTAIRE.md`].
- **Page qui appelle des chemins `/api/` de JewelerOS à chaque chargement**, dont un `POST /api/log-error/` observé dès l'affichage de l'étape 1 [V].
- **Bouton Back difficile à cliquer sur ordinateur** (clic simulé en échec, clic JavaScript réussi) [V, cause inférée].
- **Aucun filtre de recherche** de bagues (forme, carat, couleur, pureté, prix, certificat) : le bouton « Filter » n'ouvre que le tri [V].
- **Sur mesure non repris** (exception « custom products »), même pour le sur-mesure en ligne dont le délai annoncé est « a couple of weeks » [V].
- Pas de décomposition du prix, pas de garantie affichée, pas de photos de fabrication [V].

## Limites de l'audit

- Étape « 3D Ring Designer » (où seraient les réglages de griffes, corps, pavé, gravure, taille de pierre exacte) **non atteinte** : robots.txt de jeweleros.com interdit `/api/`, le site Cloudflare de JewelerOS est bloqué aux robots ; non contourné.
- Délais de l'étape 4, « Start from scratch », « Skip », « Book Appointment », chat, accessibilité, partage, liens sociaux : non actionnés (raisons dans le tableau).
- Une seule bague de la collection ouverte ; rien dans le panier au-delà de la page `/cart` (pas de paiement, un article ajouté puis non conservé, aucune donnée personnelle saisie).
- Mesures de temps : une par appareil, depuis un poste d'audit derrière un proxy : ordre de grandeur seulement [I].
- Frais de livraison et moyens de paiement du paiement final non vus (étapes après `/cart`).
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/noes-jewelry/` (hors dépôt).

## Sources

- https://www.noesjewelry.com/pages/custom-ring-builder (assistant, 4 étapes, desktop et iPhone)
- https://www.noesjewelry.com/pages/custom-engagement-rings
- https://www.noesjewelry.com/policies/refund-policy
- https://www.noesjewelry.com/pages/contact-us
- https://www.noesjewelry.com/collections/lab-grown-engagement-ring (53 produits)
- https://www.noesjewelry.com/collections/lab-grown-engagement-ring/products/18kt-yellow-gold-ring-with-2-52ct-lab-grown-marquise-center-e-vvs2-igi
- https://www.noesjewelry.com/cart
- https://www.noesjewelry.com/robots.txt ; https://www.jeweleros.com/robots.txt (via `INVENTAIRE.md`)
- `docs/concurrence/audit/us/missouri/INVENTAIRE.md` ([V3], [V4], [V5], [V6])
