# Audit : Haejin Jewelry (Brooklyn, New York)

- **Site** : Haejin Jewelry, https://haejinjewelry.com/ ; page de départ : https://haejinjewelry.com/pages/ring-builder
- **Date** : 15/11/2026 (date de l'étude ; mesures faites le 25/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900, en-US) et affichage iPhone 13 (Playwright)
- **Statut** : **complet**, sauf l'ajout au panier : `/cart` est INTERDIT par robots.txt (`Disallow: /cart`), donc « ADD ALL TO CART » et les trois boutons voisins n'ont pas été cliqués ; la page `/cart` n'a pas été ouverte.
- Repères : **[V]** vérifié (contrôle actionné ou page lue), **[I]** inféré, **[S]** supposé. Prix en dollars américains.
- Mécanique : le constructeur est une application hébergée à part (`ring-builder-deploy-git-hub-ty64.vercel.app`, sans robots.txt), intégrée en iframe dans une page Shopify. [V] Les contrôles du constructeur n'apparaissent pas dans la liste de la page hôte ; ils ont été relevés dans l'iframe.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| 1. Find Your Setting | 6 onglets de style : Solitaire (22 montures), Halo Style, Three Stone (17), Hidden Halo (12), Accents (8), Five Stone (3). 12 cartes affichées, bouton « SHOW MORE » |
| 1b. Fiche de monture (ex. The Cassandra) | Métal (4 + « More metals (18K) »), forme (9), taille du centre (carats, « More sizes »), taille de doigt (4,00 à 12,00 par 0,25), « SEND A HINT », « SAVE DESIGN », « COMPLETE YOUR RING », « ADD SETTING TO CART », « BOOK A STUDIO VISIT » |
| 2. Choose Your Diamond | Onglets DIAMONDS / GEMSTONES ; vue « Compatible only » / « All diamonds » ; filtres forme (10), pureté (8), taille/cut (6), carats (2 champs numériques) ; cartes avec « View Certificate », « Watch Video », « SELECT THIS DIAMOND » ; pagination Prev / Next |
| 3. Your Ring | Récapitulatif, gravure (champ texte), prix, « ADD ALL TO CART », « SETTING ONLY », « DIAMOND ONLY », « SIDE STONES ONLY », « GO TO CART » |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Onglets de style (6) | boutons | Changent la liste ; texte d'accroche par style (« A secret circle of light »…) | « From » 500 à 1 400 $ selon le style | OK [V] |
| SHOW MORE | bouton | Passe de 12 à 22 montures (Solitaire) | n/a | OK [V] |
| Carte monture | div cliquable | Ouvre la fiche (≈ 3 s) | « From 799 $ » sur la carte, 1 300 $ à l'ouverture (14 k jaune, ovale) | OK [V] |
| Pastilles de couleur des cartes (4) | pastilles | Non actionnées | n/a | Non testé (non étiquetées) |
| 14K Yellow / White / Rose / Platinum | boutons | Change le métal et la photo | 1 300 / 1 100 / 1 300 / 2 100 $ (monture seule) | OK [V] |
| More metals (18K) | bouton | Affiche les 18 k, devient « Fewer metals » | non relevé par métal 18 k | OK [V] ; prix 18 k non relevés |
| Forme (Oval, Round, Pear, Heart, Marquise ; Emerald, Square, Asscher, Cushion non cliqués) | boutons | Change l'assise (« 6x4mm oval seat », « 5.2mm round seat »…) et la liste de carats proposés | Marquise : 1 400 $ (+100) ; rond, poire, cœur : 1 300 $ | OK [V] |
| Carats (0,50 / 0,75 / 1,3 / 2 / 2,5 / 3,5 ct, dépend de la forme) | boutons | Texte « fits ~0.75ct diamond », assise recalculée (« 9x4.5mm marquise seat ») | Aucun changement (monture seule) | OK [V] |
| More sizes | bouton | Étend la liste de carats | n/a | OK [V] |
| Taille de doigt (liste) | select | 4,00 à 12,00 ; reprise dans le récapitulatif (6,5) | 0 | OK [V] |
| SAVE DESIGN | bouton | Le libellé devient « ♥ SAVED », sans formulaire ni compte | 0 | OK [V] ; stockage local [I] |
| SEND A HINT | bouton | Non cliqué (la sélection a échoué deux fois au chargement) | n/a | Non testé |
| COMPLETE YOUR RING | bouton | Passe à l'étape 2 | n/a | OK [V] |
| ADD SETTING TO CART / ADD ALL TO CART / SETTING ONLY / DIAMOND ONLY / SIDE STONES ONLY | boutons | Non cliqués : appellent le panier Shopify | n/a | Non testé : panier interdit par robots.txt |
| BOOK A STUDIO VISIT | lien | Mène à /pages/contact | n/a | Lien présent [V] |
| Diamonds / Gemstones | onglets | Diamants vus ; pierres de couleur non ouvertes | n/a | Partiel |
| Compatible only / All diamonds | bascule | Le compteur reste « Compatible with your setting: 0 on this page » dans les deux modes ; la liste ne change pas de façon visible (66 puis 68 boutons) | n/a | Fonctionne mal [V] |
| Forme diamant (Round, Oval…) | boutons | Filtre la liste (cartes « Round » après clic) ; l'ovale reste coché, comportement multi-sélection [I] | prix de 800 à 2 400 $ vus | OK [V] |
| Pureté (IF à I1-) | boutons | VVS1 : la liste montre des VVS1 (premier : princesse 1,9 ct, 1 100 $) | selon pierre | OK [V] |
| Cut (IDEAL, EXCELLENT, VERY GOOD, GOOD, FAIR, NO GRADE) | boutons | IDEAL : cartes « IDEAL cut » (64 boutons contre 66) ; « ⓘ » ouvre une aide | selon pierre | OK [V] |
| Carats min / max | champs numériques | 1 à 1,5 : cartes de 1,47 et 1,38 ct | 800 $ (1,47 ct IDEAL VVS1) | OK [V] |
| View Certificate | lien (nouvel onglet) | Pointe vers un PDF `dnalinks.in/certificate_images/LG….pdf` (hôte tiers) ; non ouvert | 0 | Lien présent ; non ouvert |
| Watch Video | bouton | Charge une vidéo `dnalinks.in/…/video.mp4` en ligne dans la page | 0 | OK [V] |
| SELECT THIS DIAMOND | bouton | Passe à l'étape 3 | ajoute le prix de la pierre | OK [V] |
| Prev / Next | boutons | Pagination | n/a | Présents ; non cliqués |
| ← Edit my choices | bouton | Présent à l'étape 3 | n/a | Non cliqué |
| View this setting on our store | lien | Mène à la fiche Shopify de la monture (variante) | n/a | Lien présent [V] |
| Champ « Engraving (optional) » | texte | Présent à l'étape 3 ; rien saisi | n/a | Non testé |
| GO TO CART → | lien | Vers /cart : INTERDIT | n/a | Non ouvert |
| Book a Studio Visit / Call (917) 909-0249 | liens | /pages/contact et `tel:` | n/a | Présents [V] |
| Ring Concierge | panneau | Formulaire (nom, e-mail, message, « BOOK CONSULTATION ») ; non rempli | n/a | Non testé |
| Bandeau cookies (Accept / Decline / Learn more) | boutons | Refus possible | n/a | OK [V] |
| Pied de page (Easy Returns, Education, Radical Transparency, BBB, GIA retailer lookup, réseaux) | liens | Présents ; seuls refund-policy, why et reviews ont été lus | n/a | Partiel |

Mode de vue : la fiche de monture offre 15 vues (« Image 1 à 15 », vignettes « View 1 à 15 ») et un onglet « SETTING MEDIA » à l'étape 3. [V] Pas de 3D interactive, pas de réalité augmentée, pas de vue sur la main observés. Nature exacte des 15 vues (photos ou rotation) non vérifiée.

## Options disponibles

- **Styles** : solitaire, halo, trois pierres, halo caché, accents (pavé), cinq pierres. [V]
- **Métaux** : 14 k jaune, blanc, rose ; platine ; « More metals (18K) » ; la page d'accueil du constructeur dit 10, 14, 18 k jaune, blanc, rose et platine. [V]
- **Formes de centre** : ovale, émeraude, rond, carré, poire, marquise, asscher, coussin, cœur (monture) ; 10 formes dans la liste de diamants (rond, princesse, coussin, radiant, asscher, émeraude, ovale, poire, marquise, cœur). [V]
- **Origine** : 100 % synthétique (« lab-grown »), pierres DEF, certificat IGI ou GIA. Aucun naturel. [V]
- **Tailles de doigt** : 4,00 à 12,00 par quarts. [V]
- **Gravure** : champ facultatif au récapitulatif. [V] Polices et limite de caractères non vues.
- **Pierres de couleur** : onglet GEMSTONES, non ouvert.

## Prix, délais, retours, garanties

- **Prix** [V] : prix de la monture, prix du diamant, total, puis « vs ~7 700 $ comparable mined ring, You save 4 800 $, 62 % less ». Exemple : monture 1 300 $ + diamant 1 600 $ = **2 900 $**. Le diamant est une ligne « technique » au panier (message affiché). Le prix évolue à chaque métal et à chaque forme ; il n'y a pas de décomposition main-d'œuvre / matière.
- **Délai** [V] : récapitulatif « MADE TO ORDER 3–5 days » ; livraison standard 3 à 7 jours ouvrés après expédition ; « allow additional production time » pour le sur-mesure (page refund-policy). Un délai global de 2,5 à 3 semaines est relevé dans l'inventaire de l'État [sec.], non retrouvé sur les pages lues ici.
- **Livraison** [V] : 40 $ forfaitaires aux États-Unis, assurée, suivie, signature exigée ; pas d'international.
- **Retours** [V] : 60 jours à compter de l'achat, étiquette prépayée, retour gratuit ; « 60-day returns, no questions asked » au récapitulatif. Exception du sur mesure : non lue dans la politique (extrait lu seulement). Redimensionnement gratuit 60 jours.
- **Garantie à vie** [V] : défauts de fabrication, pierres d'accompagnement < 0,20 ct, resserrage des griffes, nettoyage. Non couvert : perte, vol, pierre centrale > 0,20 ct.
- **Reprise** [V] (page /pages/why) : « Lifetime Exchange » à 70 % du prix d'achat, sur les diamants synthétiques de la maison, sans limite de durée.
- **Moyens de paiement** [I] : icônes de pied de page (Amex, Apple Pay, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Venmo, Visa) ; panier non ouvert.
- **Devise / langue** [V] : dollars, anglais seulement.

## Confiance et service

- **Avis** [V] : page dédiée, « 5.0 », « 47 verified reviews from 38 customers » dans le texte et « 52 » dans le tableau de la même page (chiffres qui se contredisent) ; Google (34), Yelp (11), BBB (4), WeddingWire (2), The Knot (1). Réponses de la propriétaire sous chaque avis.
- **Label** [V] : BBB accrédité, « Verified retailer listed by GIA », atelier à Williamsburg (123 Skillman Ave), ouvert sur rendez-vous, téléphone et courriel affichés.
- **Preuves de fabrication** [V] : « 100 % recycled solid gold » ; pas de photos ni vidéos d'atelier ni de suivi de commande vus. Vidéo et certificat de chaque diamant (hôte tiers). « Radical Transparency » (page sur les numéros d'inscription laser, non lue).
- **Service** : rendez-vous en atelier, Ring Concierge, « Send a hint » (idée cadeau), pas de chat en direct vu.

## Points forts à retenir pour JR Diamond

1. **Constructeur en trois étapes clair, avec total et économie affichés** (monture + diamant = total, « vs ~7 700 $ mined ») : preuve : écran « Your Ring », 2 900 $. Pour JR Diamond : montrer un prix et le justifier.
2. **Vidéo par diamant et lien vers le rapport de laboratoire dans la liste** : preuve : « Watch Video » charge un `video.mp4` en ligne ; « View Certificate ». C'est la « pierre filmée » déjà prévue.
3. **Politique de rassurance visible dès la liste** : « Made to order from Brooklyn · 60-day free returns · Lifetime warranty » en bandeau sous le titre.
4. **Reprise à 70 % à vie** (page /pages/why) : argument contre la méfiance sur la valeur du synthétique.
5. **Enregistrement sans compte** (« SAVE DESIGN » : ♥ SAVED sans formulaire) et visuel du constructeur en ≈ 2,2 s (vérifié, ordinateur et iPhone).
6. **Filtres de diamants complets** : forme, pureté, cut, carats ; carte avec dimensions en mm et équivalent « face-up ».

## Défauts observés

- **Compteur de compatibilité faux** : « Compatible with your setting: 0 on this page » alors que des pierres sont listées ; la bascule « Compatible only / All diamonds » ne change rien de visible. Une monture ovale 6x4 mm (≈ 0,50 ct) se voit proposer d'abord des ovales de 3,84 ct (« 12,58 x 8,86 mm »). [V]
- **Prix d'appel trompeur** : carte « From 799 $ » (The Cassandra) contre 1 300 $ à l'ouverture. [V]
- **Chiffres d'avis contradictoires** (47 / 52) et délais divers (3–5 jours / 3 à 7 jours / sur mesure). [V]
- **Interface dans une iframe** : les contrôles ne sont pas exposés à la page hôte ; deux sélections ont échoué en automatisation (temps de chargement variable). [V]
- **Un message technique** (« this diamond appears as a technical line item ») révèle le contournement du panier Shopify. [V]
- Premier élément quelconque de la page en 31 s dans une mesure (iframe tardive) ; le visuel du constructeur arrive en ≈ 2,2 s dans deux autres mesures. [V]

## Limites de l'audit

- Ajout au panier, panier, et paiement non faits : `/cart` INTERDIT par robots.txt (Haejin). Total, frais, délai et moyens de paiement du panier non vus ; les paiements viennent des icônes de pied de page [I].
- Non testés : « Send a hint », onglet Gemstones, pastilles de couleur des cartes, polices de gravure, pagination Prev/Next, formes émeraude/carré/asscher/coussin, prix des 18 k, certificat PDF (hôte tiers non consulté).
- Compte et formulaires (Ring Concierge, hint) non remplis. Pas de chat ouvert.
- Mesure de temps : une seule série (ordinateur et iPhone 13 émulé, réseau du bac à sable) ; valeur indicative.
- Texte de la page refund-policy lu sur 2 600 caractères seulement.

## Sources

- https://haejinjewelry.com/pages/ring-builder : page et constructeur, actionnés le 25/11/2026 [V]
- https://ring-builder-deploy-git-hub-ty64.vercel.app/ : application du constructeur (iframe), sans robots.txt [V]
- https://haejinjewelry.com/policies/refund-policy : garantie, livraison, retours [V]
- https://haejinjewelry.com/pages/why : philosophie, reprise à 70 % [V]
- https://haejinjewelry.com/pages/reviews-williamsburg-brooklyn-nyc : avis [V]
- /home/user/Diamond3D/docs/concurrence/audit/us/new-york/INVENTAIRE.md : délais [sec.]
