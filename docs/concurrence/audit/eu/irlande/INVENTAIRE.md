# Irlande : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 (étude de concurrence de JR Diamond, Europe). Il complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun irlandais) sans le refaire.

Périmètre : joailliers établis en République d'Irlande qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Exclus : grandes maisons internationales, grands magasins, places de marché. Marques nationales admises.

Méthode : recherche web (requêtes génériques, Parallel Search), `robots.cjs` avant chaque adresse ouverte, sonde Chromium (Playwright, identité par défaut, sans contournement). Aucun formulaire rempli, aucun chat ouvert, aucun paiement. Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Terme employé pour le diamant synthétique : « lab grown » (aussi « lab created »)** (V). Bespoke Diamonds ajoute, dans sa FAQ : « also known as synthetic or cultured diamonds » (V, extrait de cache du 22/09). Aucune règle irlandaise contraignante n'a été vérifiée (S) ; le terme « synthétique » n'est pas imposé comme en France.
- **Un seul vrai configurateur en ligne : Redz Diamonds** (« Build Your Own Ring », 3 étapes : monture, diamant, finalisation ; 39 720 diamants synthétiques et 11 445 naturels filtrables, prix à chaque choix) (V). Les autres sont des catalogues à options (Bespoke Diamonds, avec choix du diamant, du métal et de la taille sur la fiche), ou des services sur rendez-vous avec CAO et cire (Chupi, McCaul, Valentina, The Diamond Expert) (V pour les pages lues).
- **Fabrication visible** : Bespoke Diamonds promet CAO, cire d'essai (« try-on wax ») vue en boutique ou envoyée par la poste, 3 à 4 semaines (V, pages lues) ; Chupi décrit CAO, cire perdue et poinçonnage au Dublin Castle (V). Aucune preuve photo ou vidéo de fabrication d'une commande précise n'a été trouvée (I).
- **Prix en euros TTC** (TVA 21 %, mention de Bespoke Diamonds) (V). Redz affiche une remise de 10 % barrée sur tout le configurateur et « 50 % moins cher que la rue commerçante » (V, affirmations du site, non contrôlées).
- **Deux sites bloquent ou ne répondent pas** : Commins & Co (`robots.txt` : `Disallow: /`) (V) et Weir & Sons (robots.txt illisible, HTTP 403) (V). Hopkins Diamonds : robots.txt illisible (HTTP 0) (V). Non ouverts, non contournés.
- **Instruction aux agents chez Redz** : `robots.txt` et `agents.md` demandent que les actions d'achat d'un agent passent par leur interface UCP, sans automatiser le panier. Respecté : l'audit de Redz s'arrête avant le panier.

## Classement

Intérêt pour JR Diamond, dans l'ordre : proximité du modèle (atelier, fabrication à la commande, naturel et synthétique) ; qualité du configurateur ; transparence du prix ; preuves de fabrication ; offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Redz Diamonds | Cork (siège de retour), 7 salons : Dublin, Galway, Cork, Tralee, Limerick, Castlebar, Clonmel (V) | https://redzdiamonds.ie/ | https://redzdiamonds.ie/pages/build-your-own-ring (200, 15/11) | **Oui** : monture (24 par page, filtres style, prix, métal, forme), diamant (naturel ou synthétique, forme, carats, couleur, pureté, taille, prix, filtres avancés), récapitulatif et taille de doigt ; vue 360° sur la fiche monture (V) | Aucun blocage ; `robots.txt` « Allow: / » ; demande de passer par UCP pour les achats d'agents (V) | EN (V) | Le plus proche du modèle « configurateur » : prix décomposé monture + diamant, certificats GIA/IGI avec PDF, 39 720 synthétiques. Pas de preuve de fabrication |
| 2 | Bespoke Diamonds | Dublin (33 Kildare Street) et Cork (V) | https://www.bespokediamonds.ie/ | https://www.bespokediamonds.ie/engagement-rings/ (200) · fiche : https://www.bespokediamonds.ie/engagement-rings/1-82ct-carat-oval-cut-ring-sr201/ · sur mesure : https://www.bespokediamonds.ie/custom-engagement-rings/ | Partiel : fiche à options (diamant naturel ou synthétique avec carat, couleur, pureté, certificat ; métal ; taille), puis panier ; sur mesure par CAO + cire sur rendez-vous (V) | Aucun ; `robots.txt` interdit `/cart/`, `/checkout/`, `/my-account/` (V) | EN (V) | « 100 % fabrication interne », CAO + cire d'essai, 3 à 4 semaines, 900+ avis Google 5/5 affichés, naturel et synthétique, GIA/IGI/HRD, acompte et paiement échelonné (V) |
| 3 | Chupi | Dublin (Powerscourt Townhouse Centre) (V) | https://www.chupi.com/ | https://www.chupi.com/collections/engagement-rings (filtres métal, forme, serti, bande) · sur mesure https://www.chupi.com/pages/custom-engagement-rings (200) | Non : catalogue à filtres + sur mesure sur rendez-vous (V) | Aucun ; `robots.txt` « Allow: / » (V) | EN (V) | Marque nationale, « from €2,489 », or 14 k, GIA/IGI, B Corp, poinçon Dublin Castle, garantie de fabrication à vie, paiement mensuel affiché (V) |
| 4 | Cotter & Co | en ligne, Irlande (ville non vérifiée) | https://www.cotterandco.ie/ | https://www.cotterandco.ie/ (200) | Non : catalogue Shopify, service sur mesure (V pour l'accueil) | Aucun (V) | EN (V) | Prix d'entrée bas (dès 1 150 €), naturel GIA et synthétique, mise à taille offerte, gemmologue HRD (V, affirmations du site) |
| 5 | McCaul | Malahide (atelier) et Londres (V) | https://www.mccaul.ie/ | https://www.mccaul.ie/pages/engagement-rings (autorisé ; page de départ non ouverte) · accueil 200 | Non : commandes sur mesure, plus de 50 % du travail (V, affirmation) | Aucun ; « Allow: / » (V) | EN, devises multiples (V) | Atelier d'origine, alliances faites main, consultation en visio ; pas de prix décomposé vu |
| 6 | Valentina Fine Diamonds | Dublin (Powerscourt) (V) | https://www.valentina.ie/ | https://www.valentina.ie/ (200) | Non : CAO gratuite sur demande, rubrique synthétiques (V) | Aucun (V) | EN (V) | Vintage + sur mesure, WhatsApp, note 5 étoiles affichée |
| 7 | The Diamond Expert | Dublin (V, titre) | https://thediamondexpert.com/ | https://thediamondexpert.com/pages/engagement-rings (200) | Non : consultation, devis, retouches illimitées, 18 k ou platine (V) | Aucun ; « Allow: / » (V) | EN | Synthétiques de type IIA, GIA/IGI ; **aucun remboursement ni échange pour le synthétique** (V, à retenir) |
| 8 | Commins & Co | Dublin (I) | https://www.comminsandco.ie/ | https://www.comminsandco.ie/diamond-type/lab-grown-diamond-engagement-rings | Non vérifié | **Bloque** : `robots.txt` `Disallow: /` (V). Non ouvert | EN | 225 bagues synthétiques, prix « from » (extrait de recherche). **Non audité** |
| 9 | Martin Gear Jewellers | Dublin (V) | https://martingearjewellers.ie/ | https://martingearjewellers.ie/ | Non : catalogue, sur mesure sur contact | Aucun (robots lu) | EN | Depuis 1969 ; synthétique à 569 € en promotion (extrait). Adresse non ouverte |
| 10 | Greene's Jewellers | Dublin (9 Aungier Street) (V) | https://greenesjewellers.com/ | https://greenesjewellers.com/ | Non : logiciel de visualisation en magasin (V, texte) | Aucun ; « Allow: / » | EN | Commandes sur mesure, livraison mondiale gratuite. Adresse non ouverte |

Les adresses des rangs 8 à 10 n'ont pas été ouvertes dans Chromium (extraits de recherche seulement) ; les rangs 1 à 7 ont répondu 200.

### Vus et écartés
- **Weir & Sons** (https://www.weirandsons.ie/) : robots.txt illisible (HTTP 403) : traité comme bloqué (V).
- **Hopkins Diamonds** : robots.txt illisible (HTTP 0) : traité comme bloqué (V).
- **Appleby** : robots lu et autorisé, non étudié (I).

## Audits réalisés
Les deux premiers sites qui ne bloquent pas : `redz-diamonds.md` et `bespoke-diamonds.md`.

## Sources
- Recherches Parallel Search du 15/11/2026 (requêtes génériques sur les bagues de fiançailles irlandaises) ; pages d'accueil et de collection des sites cités.
- https://redzdiamonds.ie/robots.txt et https://redzdiamonds.ie/agents.md ; https://www.bespokediamonds.ie/robots.txt ; https://www.comminsandco.ie/robots.txt (contrôle `robots.cjs`).
- https://www.bespokediamonds.ie/faq/ (formulation « synthetic or cultured »).
