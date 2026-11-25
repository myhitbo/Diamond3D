# Wolf Diamonds (Houston, Texas)

| | |
|---|---|
| Site | Wolf Diamonds (Houston) |
| Adresse | https://wolfdiamonds.com/ (page de départ : https://wolfdiamonds.com/pages/custom-ring-builder) |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366 x 900) et affichage iPhone 13 |
| Statut | **partiel** : assistant en 4 étapes vérifié (étapes 1 à 4) ; la sortie vers le dessinateur 3D passe par `jeweleros.com/api/`, interdit par robots.txt : non actionnée. Panier : page vue vide, ajout interdit (`/cart/add`). |

Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch [V] |
| 2. « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) + Decide later [V] |
| 3. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats + Decide later ; phrase : le carat exact se règle dans le dessinateur [V] |
| 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, Not sure yet [V] |
| 5. Sortie | Appel `jeweleros.com/api/create/from-ring-config/` (robots.txt : `Disallow: /api/`) : non actionné [V] |
| Suite annoncée (page « Custom Engagement Rings ») | Concevoir en ligne en 3D, choisir la pierre au magasin de Houston, finaliser et commander avec un spécialiste [V, texte] |
| Panier `/cart` | Page lue : vide, « Estimated total $0.00 USD », « Taxes, discounts and shipping calculated at checkout » [V] |

## Contrôles vérifiés

Relevé automatique : 28 contrôles (ordinateur), 22 (iPhone) hors assistant ; assistant relevé au DOM.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille jaune / blanche / rose (étape 1) | bouton | Les images des 9 cartes changent de couleur (`solitaire_yellow/white/rose.webp`) | non | OK |
| 9 cartes de style | cartes | Solitaire cliqué : passe à l'étape 2 | non | OK (Solitaire seulement ; les 8 autres NT, même mécanisme supposé [S]) |
| Natural / Lab Grown | bascule | Cliquée, change l'affichage de l'étape 2 (capture `d_s2lab.jpg`) | non | OK |
| Formes de pierre | cartes | Oval cliquée : passe à l'étape 3 | non | OK (Oval seulement) |
| Carats 0,5 à 5 | cartes | « 1 carat » cliqué : passe à l'étape 4 | non | OK |
| Délai 4 choix | cartes | Non cliqué : c'est le dernier clic qui appelle l'API interdite | non | NT, interdit |
| Back | bouton | Cliqué à l'étape 3 : l'écran reste à l'étape 3 (ordinateur et iPhone) | non | KO apparent [V, un essai ; cause non établie] |
| Skip | bouton | Ouvre probablement le dessinateur via l'API | non | NT, interdit [S] |
| Menu : Engagement Rings, Gallery, Book Appointment, Log in, Cart, Contact | liens | Pages lues : Gallery vide, Contact = formulaire (non rempli) | non | OK (lecture), formulaire NT |
| Recherche (q) | champ | Non utilisée | non | NT |
| Abonnement courriel | champ + bouton | Non rempli | non | NT, règle sans formulaire |
| Téléphone (713) 439-7486 | lien | Lien vers une recherche Google, pas `tel:` | non | OK mais pas d'appel direct [V] |
| Instagram | lien | Réseau externe | non | NT |
| Dessinateur 3D, sélecteurs, « Add Wedding Band », « Next » | outil externe | Non ouvert | non | NT, interdit |

## Options disponibles

- Métaux de l'assistant : or jaune, blanc, rose (3) [V]. Les titres (14/18 k), le platine, les finitions : dans le dessinateur, non vus.
- Styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch (9) [V].
- Formes : 9 + « Decide later » ; origine Natural / Lab Grown ; carats 8 paliers + « Decide later » ; délai souhaité 4 choix [V].
- Ni taille de doigt, ni gravure, ni filtres de pierres, ni vue 360/AR/photo vus (hors assistant) [V / non trouvé].
- Services : Book Appointment (`/?action=reserve`), formulaire Contact, téléphone, courriel Hello@WolfDiamonds.com [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant ni sur les pages lues [V]. Le site dit « at a great price, fully customized around your center stone » ; le prix se règle au magasin.
- **Délai** : « ready for you in just a couple of weeks » [V, `/pages/custom-engagement-rings`] ; l'assistant demande 1-4 semaines à 3-6 mois.
- **Retours, garanties, livraison** : non trouvés. Page cart : frais calculés au paiement [V].
- **Certificats** : non mentionnés sur les pages lues.
- **Synthétique** : « Lab Grown » [V].
- Langue : anglais ; devise : USD ; paiement : icône « Payment methods » au pied de page, moyens non détaillés [V].

## Confiance et service

- Avis Google cités sur la page (deux citations, 5 étoiles) [V].
- Boutique à Houston (952 Echo, Suite 315) ; horaires affichés ; « Appointments Encouraged » [V].
- Boutique spécialisée en bagues de fiançailles sur mesure, stock de styles [V].
- Pas de photos ou vidéos de fabrication, pas de suivi de commande, pas de chat, pas de WhatsApp observés [V / non trouvé]. Page « Gallery » vide dans le HTML lu [V].

## Points forts à retenir pour JR Diamond

1. **Assistant de démarrage court (4 écrans, 2 s)** : style, forme, carat, délai ; il prépare la consultation sans exiger de prix. Preuve : étapes lues, visible en 1,68 s.
2. **Questionnaire « quand en avez-vous besoin ? »** : capte l'urgence ; utile pour planifier les 14 jours de JR Diamond. Preuve : étape 4.
3. **Images des styles qui changent avec la couleur du métal** dès l'étape 1 : réactivité immédiate. Preuve : `solitaire_*.webp`.
4. **Promesse de 3 étapes claires** (3D en ligne, pierre au magasin, finalisation). Preuve : `/pages/custom-engagement-rings`.
5. **Page unique mobile sobre** : l'assistant occupe l'écran iPhone sans défilement. Preuve : `m_s1.jpg`.

## Défauts observés

- **Aucun prix** sur tout le parcours lu, contrairement à LaProng ; le prix exige un rendez-vous [V].
- Bouton « Back » sans effet à l'étape 3 (essai unique) [V].
- Le téléphone ouvre une recherche Google au lieu de `tel:` [V].
- Page Gallery vide à la lecture HTML [V].
- 3D en marque blanche JewelerOS [I, le script `jos.js` et la configuration `9d8RXKjBekdN` sont chargés par la page]. Pas le fichier de fabrication de l'atelier [I].
- Page d'ouverture : le script appelle `/api/log-error/` (POST) de JewelerOS à l'ouverture, une erreur de journalisation est donc émise par la page elle-même [V, requête de la page, pas de mon fait].

## Limites de l'audit

- Le dessinateur 3D (`jeweleros.com`) n'a pas été atteint : son chargement passe par `/api/`, interdit. Prix, vues, options de métal et de taille non observés.
- Dernier choix de l'assistant (délai) non cliqué pour éviter l'appel interdit.
- Styles autres que Solitaire, formes autres que Oval, tailles autres que 1 ct, métaux : seule la couleur d'image a été vérifiée.
- Ajout au panier : `/cart/add` interdit, non cliqué ; panier lu vide ; frais, délai et moyens de paiement du panier non vus.
- Formulaires (contact, abonnement), rendez-vous et recherche non utilisés.
- **Temps d'apparition** : assistant visible en 1,68 s (ordinateur) et 1,68 s (iPhone), un essai chacun, via proxy [V].
- Pas d'appareil réel.

## Sources

- https://wolfdiamonds.com/pages/custom-ring-builder (assistant actionné jusqu'à l'étape 4)
- https://wolfdiamonds.com/pages/custom-engagement-rings
- https://wolfdiamonds.com/cart (lue vide)
- https://wolfdiamonds.com/pages/gallery, https://wolfdiamonds.com/pages/contact
- https://wolfdiamonds.com/robots.txt
- https://www.jeweleros.com/robots.txt (`Disallow: /api/`)
