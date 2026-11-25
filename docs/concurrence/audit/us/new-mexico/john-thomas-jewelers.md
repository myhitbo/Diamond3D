# Audit : John Thomas Jewelers, « Design Your Ring » (Albuquerque, Nouveau-Mexique)

| | |
|---|---|
| Site | John Thomas Jewelers, 10501 Montgomery Blvd NE, Albuquerque : https://johnthomasjewelers.com/ (Shopify) |
| Page de départ | https://johnthomasjewelers.com/pages/design-your-ring |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : l'assistant d'entrée (4 étapes) et la boutique sont audités ; le designer 3D n'a pas été atteint, car son chargement passe par `jeweleros.com/api/`, interdit aux robots (`Disallow: /api/`) |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Prix en USD, tels qu'affichés. Appels `jeweleros.com/api/` coupés dans mon navigateur (3 requêtes émises à l'ouverture de la page, refusées par moi) ; `/cart/add` et `/account` interdits par le robots.txt du site : non appelés.

## Parcours

| Étape | Options |
|---|---|
| 0. Page de départ | Fenêtre « Don't miss out! » (inscription SMS : nom, mobile ; non remplie) et bulle de chat « Text us » (Podium) par-dessus l'assistant [V] |
| 1. « Let's start designing your ring » (étape 1 sur 4) | 3 pastilles de métal (Yellow, White, Rose Gold) ; 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) + « Start from scratch » [V] |
| 2. « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) + « Decide later » [V] |
| 3. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats + « Decide later » ; texte : le carat exact se règle « dans le ring designer » [V] |
| 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| 5. Sortie vers le designer 3D | Le clic sur un délai appelle l'API JewelerOS (interdite) : non exécuté [V pour l'arrêt, S pour la suite] |
| 6. Boutique | `/collections/engagement-rings` (5 modèles) puis fiche produit, avec « Add to cart » (non cliqué) [V] |
| 7. Panier | `/cart` ouvert à vide (autorisé) ; aucun article pu y être mis : `/cart/add` interdit [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille « Yellow Gold » (active au départ) | bouton rond | classe `active` ; couleur or jaune (#e1b94f) | aucun affiché | OK |
| Pastille « White Gold » | bouton | devient active ; mémorise le métal | aucun | OK |
| Pastille « Rose Gold » | bouton | devient active | aucun | OK |
| Cartes de style (8) | boutons | passent à l'étape 2 ; le style choisi est rappelé en haut (ex. « Halo ») ; testé : Solitaire, Halo | aucun | OK (6 autres styles non cliqués, même composant) |
| « Start from scratch » | carte | non cliquée ; même type de carte [S : étape 2] | | NT |
| Bascule Natural / Lab Grown | 2 boutons | clic sans erreur sur les deux ; pas de changement de couleur relevé | aucun | OK (effet visuel non établi) |
| Cartes de forme (9) | boutons | étape 3 ; testé : Marquise | aucun | OK (8 autres NT) |
| « Decide later » (étapes 2, 3) | boutons | non cliqués | | NT |
| Cartes de carat (8) | boutons | étape 4 ; testé : 1 carat | aucun | OK |
| Cartes de délai (4) | boutons | l'étape finale appelle `jeweleros.com/api/` : non cliqué | | NT (robots.txt du fournisseur) |
| Back | bouton | présent à l'étape 1 ; clic non réussi dans mon script (sélecteur) | | NT |
| Skip | bouton | non cliqué : ouvre normalement le designer (API) | | NT |
| Fenêtre « Don't miss out! » : Name, Mobile Number, Sign up, fermer | formulaire | affichée en quelques secondes ; aucun champ rempli | | NT (règle : aucun formulaire) |
| Bulle « Text us » (Podium) | bouton flottant | intercepte les clics sur l'assistant ; masquée par une règle CSS de mon script pour pouvoir cliquer en dessous ; conversation non ouverte | | NT |
| « THE EXTRA MILE » (onglet) + Close + « Book an Appointment » | bouton, lien | panneau « avantages » ; non ouvert | | NT |
| BOOK APPOINTMENT (en-tête, `#jos-book-appointment`) | lien | ouvre l'outil JewelerOS de rendez-vous : non cliqué (API du fournisseur) | | NT |
| Téléphone (505) 342-9200, e-mail SheSaidYes@johnthomasjewelers.com | liens | `tel:` et `mailto:` présents | | OK (présence) |
| Menu : Home, Bridal Rings, Custom Jewelry, Shop by Category, Designers, About, Antwerp Diamonds, Services | liens | pages lues : Custom Jewelry, Antwerp Diamonds, Services, About, Contact, FAQ (200) ; **Bridal Rings : « 0 of 0 designs / No products in this collection yet »** | | OK sauf Bridal Rings (vide) |
| Tri (Featured, Price low/high, Best selling…) | liste, 9 entrées | génère `?sort_by=` : interdit par robots.txt, non utilisé | | NT |
| Fiche produit : « SHIPPING & RETURNS » | accordéon | s'ouvre : livraison, retours (voir plus bas) | | OK |
| Fiche produit : « SEE IT IN PERSON » | accordéon | s'ouvre : rendez-vous privé, téléphone | | OK |
| Quantité − / + | boutons | présents, non testés | | NT |
| « ADD TO CART — $3,749.00 » | bouton | non cliqué : panier interdit par robots.txt (`Disallow: /cart/`) | 3 749 $ | NT |
| « BOOK AN IN-STORE VIEWING » | lien | non suivi | | NT |
| Page `/pages/contact` : Name, Email, Phone, Message, Send Message | formulaire | non rempli | | NT |
| Recherche (`/search`), compte (`/account`), Shop Pay | liens | `/account` interdit ; recherche et paiement non utilisés | | NT |
| Page FAQ : 5 questions | liste | titres lus ; réponses non dépliées | | NT |

## Options disponibles

- **Assistant** [V] : métaux jaune, blanc, rose (pas de platine) ; 8 styles ; naturel ou synthétique ; 9 formes ; carat 0,5 à 5 ; délai en 4 tranches. Même moteur que Bullock's, Ware, Hudson-Poole.
- **Designer 3D** : jamais ouvert ; la page annonce un « 3D Ring Designer » où l'on règle le carat exact [V pour le texte, pas pour le contenu].
- **Boutique** [V] : 5 bagues (10 K blanc halo rond 1 439 $ ; ensemble 14 K blanc halo taille émeraude 3 749 $ ; ensemble 14 K poire pavé 2 499 $ ; 18 K diamant rose naturel coussin 11 800 $ ; 14 K blanc halo double 0,61 ct 1 990 $).
- **Services** [V] : estimations, réparation sur place, restauration, gravure laser, bagues sur mesure, transformation d'un bijou (« remodeling family heirlooms »).
- **Maquettes** [V] : « hundreds of samples to try on » et plus de 3 000 bagues de mariage à essayer (page About, déclaratif).

## Prix, délais, retours, garanties

- **Prix** [V] : aucun prix dans l'assistant. Fiches boutique à prix unique, sans décomposition (ex. 3 749 $ pour un ensemble 14 K, 0,52 ct de diamants, 1,02 ct au total, couleur H-I, pureté SI). Pas de prix affiché pour le sur-mesure.
- **Délai** [V] : l'assistant demande seulement « quand en avez-vous besoin » ; aucun délai de fabrication annoncé. Fiche : « In stock · ships from Albuquerque ».
- **Livraison** [V] : « Free insured shipping on orders over $500 » (fiche, accordéon).
- **Retours** [V] : « Returns accepted within 30 days in original condition. Custom pieces are final sale. » Exception du sur mesure explicite. `/policies/refund-policy` et `/policies/shipping-policy` répondent 404 ; la page « Terms of service » ne traite que d'un programme de SMS (et le nomme « John Thomas Mead », erreur de modèle probable [I]).
- **Garanties** [V] : « The No-Regrets Ring™ » : CAO avant fabrication, retouche par le maître joaillier sur place jusqu'à satisfaction, « free lifetime, nationwide warranty » (fiche produit). L'inventaire parlait d'une refabrication gratuite sur un an ; je ne l'ai pas retrouvée dans les pages lues (écart à vérifier).
- **Certificats** [V] : fiche lue sans certificat ni laboratoire cité ; l'équipe se dit formée au GIA (page Antwerp Diamonds).
- **Libellé synthétique** [V] : « Lab Grown » dans l'assistant.

## Confiance et service

- **Fabrication visible** [V] : page Custom Jewelry : concept, conception, rendus informatisés **et modèle sculpté en cire**, puis fonte par un maître joaillier ; galerie de 7 photos de créations maison ; About : le joaillier-CAO Matthew Valentine travaille « on the premises so you can meet him and watch his work ». Pas de vidéo d'atelier vue sur les pages lues.
- **Pierres** [V] : page Antwerp Diamonds : achat à Anvers deux fois l'an [I : la fréquence vient de l'inventaire], comparaison côte à côte, « Master IJO Jeweler », « GIA-trained buyers ».
- **Contact** [V] : téléphone, e-mail, texto, rendez-vous ; horaires du mardi au samedi.
- **Avis clients** : aucun relevé sur les pages lues [V pour l'absence sur ces pages].
- **Langue, devise** [V] : anglais, USD uniquement.
- **Suivi de commande** : non vu.

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 questions avant la 3D** : style, pierre, carat, délai, puis designer : entrée très simple (preuve : parcours ci-dessus, page de départ).
2. **Délai et retours dits sur la fiche** : 30 jours, sur-mesure en vente ferme, écrit en trois lignes (accordéon « Shipping & Returns »).
3. **Promesse « No-Regrets » en 4 volets** (CAO d'abord, retouche, garantie, adaptation) : bon modèle de ton pour « ce que vous voyez existe » (fiche produit).
4. **Fabrication racontée avec le modèle en cire** (page Custom Jewelry), le plus proche de la preuve de fabrication de JR Diamond.
5. **Équipe nommée avec ses années d'expérience** (About) : confiance par les personnes.
6. **Assistant lisible sur iPhone** : cartes pleine largeur, visible en 1,8 s (mesure ci-dessous).

## Défauts observés

1. **Fenêtre d'inscription SMS et bulle de chat au-dessus de l'assistant** : la bulle intercepte les clics sur les cartes (clic échoué 30 s avant que je la masque) [V].
2. **Aucun prix dans l'assistant**, aucun total, aucune décomposition [V].
3. **« Bridal Rings », premier lien du menu, mène à une collection vide** (« 0 of 0 designs ») [V].
4. **Pages de politique absentes** (retours et livraison en 404) ; conditions = texte SMS au nom d'un autre commerce [V].
5. **Fiche produit : une seule photo**, pas de vidéo, pas de 3D, pas de certificat [V].
6. **Pas de platine** dans l'assistant [V]. Panier non vérifiable ici [V].

## Limites de l'audit

- **Designer 3D non vu** : ni rendu, ni prix en direct, ni réglage des options (métal, titre, pavage, gravure, taille de doigt) : appels `jeweleros.com/api/` interdits et coupés ; je me suis arrêté avant le clic sur le délai. Le contenu de cette 3D est connu d'autres audits du même moteur (Hudson-Poole), non vérifié ici [S].
- Panier : seule la page vide a été lue (`/cart/add` interdit) : ni récapitulatif, ni frais de livraison, ni moyens de paiement.
- Bascule Natural / Lab Grown : effet visuel non établi ; Back, Skip, « Start from scratch », « Decide later », FAQ dépliée non testés.
- Aucun formulaire rempli, aucun chat ouvert, aucun compte.

## Mesures de chargement (Chromium, via le proxy de la session, réseau non étalonné)

| Appareil | HTML lu (DOMContentLoaded) | Assistant visible (texte « Solitaire ») | Images chargées |
|---|---|---|---|
| Ordinateur 1366x900 | 1,1 s | 2,0 s | 12 sur 13 |
| iPhone 13 | 1,0 s | 1,8 s | 12 sur 13 |

Fiche produit : image principale de la page chargée en 1,4 à 2,0 s (ordinateur), 1,5 s (iPhone) [V, mais la première image mesurée est un visuel de menu : indicatif]. Le visuel principal de l'assistant est une icône de bague, pas une 3D.

## Sources

- https://johnthomasjewelers.com/pages/design-your-ring (assistant, parcours actionné)
- https://johnthomasjewelers.com/pages/custom-jewelry, /pages/antwerp-diamonds, /pages/services, /pages/about, /pages/contact, /pages/faq
- https://johnthomasjewelers.com/collections/engagement-rings, /collections/bridal-rings (vide), /products/diamond-wedding-set-1, /cart (vide)
- https://johnthomasjewelers.com/policies/terms-of-service ; /policies/refund-policy et /policies/shipping-policy (404)
- https://johnthomasjewelers.com/robots.txt (Disallow : `/cart/`, `/account`, `/collections/*sort_by*`) ; https://jeweleros.com/robots.txt (`Disallow: /api/`), via l'outil `robots.cjs`
- Captures : dossier de travail (scratchpad) `us/john-thomas-jewelers/`
