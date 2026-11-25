# Audit de site : Billig Jewelers (Marlton, New Jersey)

- **Site** : Billig Jewelers, 330 Route 73 South, Marlton NJ (près de Cherry Hill)
- **Adresse** : https://billigjewelers.com/ (page de départ : https://billigjewelers.com/collections/engagement-ring-settings)
- **Date** : 15/11/2026 (audit relu le 25/11 ; remplace le rapport « bloqué » du 24/11)
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (aucun blocage : robots.txt « Allow: / », pas de captcha ni de 403 ; limites en fin de rapport : ajout au panier interdit par robots.txt, quiz et rendez-vous non terminés)
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Billig n'a **pas de configurateur 3D**. Le parcours est un constructeur « monture puis pierre » où la pierre est choisie sur la fiche de la monture, avec un **prix complet** (pierre synthétique incluse). [V] https://billigjewelers.com/collections/engagement-ring-settings : « Select your setting first, then pair it with the ideal diamond ».

| Étape | Options (vérifiées) |
| --- | --- |
| 1. Collection « Engagement Ring Settings » | 24 montures par page, 6 pages ; tri par prix ; filtre de forme (8 formes) ; pastilles de métal sur chaque carte ; galerie de photos par carte (flèches) |
| 2. Fiche monture (ex. Elizabeth) | Forme (7), métal (3), taille de diamant (7 tailles de 1 à 4 ct, liste déroulante), prix « Complete Ring » |
| 3. Panier | Bouton « Add To Cart » (non actionné, voir limites) ; page /cart lue vide |
| Parallèle | Quiz « Find Your Perfect Ring » en 7 étapes (« 15 % de remise à la fin ») ; rendez-vous conception (virtuel ou en boutique) |

[V] Pas de choix de taille de doigt, de gravure, de pavé ni de griffes sur la fiche (liste complète des contrôles relevée, aucun champ correspondant).

## Contrôles vérifiés

Page d'accueil (103 contrôles relevés avec controls.cjs), collection, fiche https://billigjewelers.com/products/elizabeth-engagement-ring (98 contrôles en affichage iPhone).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Sort by Price (Prix croissant / décroissant) | bouton + 2 cases | recharge la liste (`?sort_by=price-ascending`) ; en croissant : Lilian, Corinne, Josephine, Iris, Aria, Samantha | liste de « From 2 250 $ » en tête | fonctionne [V] |
| Shape (collection) : Oval, Round, Emerald, Pear, Radiant, Cushion, Marquise, Elongated Cushion | bouton + 8 pastilles | filtre la liste (`?shapes=Marquise` : 12 montures sur 24) | 2 525 à 2 950 $ pour les 6 premières | fonctionne [V] ; 7 formes testées seulement par Marquise |
| Pastilles de métal sur les cartes | pastilles | 3 ou 4 couleurs affichées selon la monture (jaune, blanc, platine ; rose sur Jess) | aucun | [V] affichage |
| Flèches « Previous/Next image » des cartes | boutons | font défiler les photos de la carte | aucun | [V] présents ; non cliqués un à un |
| Pagination 1 2 3 … 6 | liens | 6 pages de montures | aucun | [V] présente, non parcourue |
| Forme : Round, Emerald, Oval, Cushion, Pear, Marquise, Radiant | 7 radios | change la photo principale (7 photos distinctes constatées) | **aucun** : 2 825 $ pour toutes | fonctionne [V] |
| Métal : 14K Yellow Gold, 14K White Gold, Platinum | 3 radios | change la photo (jaune puis blanc) ; la photo de platine reste celle du blanc | 2 825 $, 2 825 $, **3 075 $** (platine +250 $) | fonctionne [V] |
| Select Diamond Size : 1, 1.5, 2 (Most Popular), 2.5, 3, 3.5, 4 CT | liste déroulante | met à jour « Carat: x.xx ct » et le prix ; **la photo ne change pas** | 2 825 / 3 325 / 3 825 / 4 325 / 4 825 / 5 325 / 5 825 $ (+500 $ par 0,5 ct) | fonctionne [V] |
| Your Diamond Details | texte | D–E, VS1 ou mieux, taille Excellent, « Certification: Included » (laboratoire non nommé) | inclus | [V] |
| Miniatures (flèches gauche/droite, 210 images de miniature au total) | boutons | galerie : rendu de la bague, photos portées à la main, vues de profil | aucun | [V] |
| Clic sur l'image principale | image | pas de zoom ni de visionneuse observés | aucun | [V] absent |
| Add To Cart | bouton | **non cliqué** : appelle /cart/add, interdit par robots.txt (« Disallow: /cart/ ») | prix « Complete Ring » | non testé |
| Speak with a Bridal Specialist | bouton | « virtual consultation » ; ouvre le panneau de contact | aucun | [V] présent ; non suivi |
| contact us (sous les détails de pierre) | lien | demande de pierre précise, ou de pierre naturelle | sur demande | [V] présent |
| Center Stone / Accent Diamonds / Ring Specifications / Production & Shipping | 4 volets | texte : pierre synthétique incluse, formes « customizable », garantie à vie, FedEx assurée gratuite | aucun | [V] |
| FAQ de la fiche (12 volets) | accordéon | réponses lues : retours 30 jours, délai 14 jours ouvrés, diamants naturels et synthétiques | aucun | fonctionne [V] |
| Book an Appointment / Contact Us | bouton | panneau « Contact a Specialist, Directions, Make Appointment (virtual) » ; formulaire non rempli | aucun | [V] ouvre ; non envoyé |
| Call or Text Us | lien tel: | 856-983-2300 | aucun | [V] |
| View Directions | lien | Google Maps | aucun | [V] |
| Find Your Perfect Ring (quiz) | bouton | fenêtre « STEP 1 OF 7 » ; 1 : 3 profils d'acheteur ; 2 : 9 formes (Oval, Round, Emerald, Cushion, Pear, Radiant, Marquise, Princess, Asscher) ; suite non atteinte | 15 % de remise annoncée à la fin | partiel [V] |
| Start Your Custom Ring | lien | renvoie à la collection des montures | aucun | [V] |
| Recherche /search, compte /account, panier /cart | icônes | /cart : « Your cart is empty » ; recherche et compte non ouverts | aucun | partiel |
| Menu : Engagement Rings, Wedding Rings, Fine Jewelry, Fashion Jewelry, Services, About, Anniversary Sale | liens | catégories ; Services : mise à taille, gravure, estimation, réparation, montres | aucun | [V] liens présents ; Anniversary Sale non ouvert |
| Guides du blog (6 articles à l'accueil dont taille de doigt, coût d'une bague sur mesure) | liens | pages d'articles | aucun | [V] présents ; non lus |
| Instagram, Facebook | liens | réseaux sociaux | aucun | [V] présents |

Non testés : Add To Cart (interdit), paiement (interdit), soumission de formulaire (règle), chat (aucun widget de chat relevé).

## Options disponibles

- **Formes (fiche)** : rond, émeraude, ovale, coussin, poire, marquise, radiant (7). Filtre de collection : + coussin allongé (8). Quiz : + princesse, asscher.
- **Métaux (fiche Elizabeth)** : or jaune 14 k, or blanc 14 k, platine. La collection annonce aussi l'or rose 14 k (Jess) ; or 18 k annoncé sur la fiche Aria d'après l'inventaire (non revérifié ici).
- **Carats** : 1, 1,5, 2, 2,5, 3, 3,5, 4 ct (pas de pierre sous 1 ct sur cette fiche).
- **Qualité de pierre** : fixe, D–E, VS1 ou mieux, taille Excellent ; non réglable.
- **Origine** : synthétique inclus ; naturel « sur consultation » (pas de prix en ligne).
- **Montures** : 24 par page, 6 pages ; styles annoncés : solitaire, halo caché, trois pierres, pavé, vintage, lunette.
- **Taille de doigt, gravure, griffes, pavage** : aucun choix en ligne.
- **Vues** : photos de rendu, photos à la main, vue de profil. Pas de vidéo, 360°, 3D ni essayage en réalité augmentée relevés.
- **Services** : mise à taille, gravure, estimation, réparation de bijoux et de montres, rachat d'or et de diamants.

## Prix, délais, retours, garanties

- **Prix** : prix complet affiché et recalculé à chaque option [V] ; l'élément variable est la pierre (+500 $ par demi-carat, platine +250 $). Le prix n'est pas décomposé (monture, pierre, façon). [I] Barème forfaitaire de pierre synthétique.
- **Incohérence** : la collection dit « Prices starting from $1,250 for the setting » ; les cartes affichent « From 2 250 $ » au minimum (https://billigjewelers.com/collections/engagement-ring-settings). [V]
- **Délais** : fiche : badge « Ready to Ship » et « Made to order in 1–3 weeks (if not in stock) » ; FAQ de la fiche : « about 14 business days » ; accueil : 2 à 4 semaines ; FAQ générale : 2 à 3 semaines. [V] Quatre formulations différentes.
- **Livraison** : « Free shipping both ways » partout aux États-Unis, FedEx assuré ; livraison en point FedEx possible pour une surprise ; Saturday ou date précise par téléphone (https://billigjewelers.com/pages/shipping). [V]
- **Retours** : 30 jours, bague non portée et dans son emballage, remboursement sous deux semaines, étiquette FedEx 2 jours prépayée ; 150 $ si le rapport de laboratoire d'une pierre libre manque (https://billigjewelers.com/pages/free-30-days-return-policy). [V] **Mais** la FAQ générale dit que les pièces « custom or made-to-order » sont **vente finale** (https://billigjewelers.com/pages/faq). [V] Contradiction non levée sur le site.
- **Garantie** : à vie contre les défauts de fabrication ; réparation ou remplacement gratuits ; retour de réparation gratuit ; l'intervention d'un tiers annule la garantie (https://billigjewelers.com/pages/our-guarantee). [V] « Free Cleaning and Resizing » annoncé sur la fiche.
- **Paiement (FAQ)** : cartes Visa, Mastercard, Discover, AmEx, débit, Apple Pay, espèces ; financement et layaway « visit or call us » (https://billigjewelers.com/pages/faq). [V] Moyens affichés au panier non relevés (panier non atteint).
- **Devise et langue** : dollars, anglais uniquement. [V]

## Confiance et service

- **Avis** : « 5.0 based on 579 reviews » (étiquette Google) sur la fiche ; section « Happy Billig Couples » avec histoires de demandes en mariage. [V]
- **Preuves d'atelier** : badge « Made in New Jersey », discours « manufacturing company » examinant les pièces à chaque étape ; photos de la bague portée. [V] Aucune photo ni vidéo de fabrication, aucun suivi de commande relevé. [I]
- **Conseil humain** : téléphone et SMS 856-983-2300, gemmologue GIA diplômé « selects every diamond », rendez-vous virtuel ou en boutique, showroom ouvert mardi à samedi. [V]
- **CAO** : « 3D CAD rendering for your approval at no charge within 48 hours » pour le sur mesure (FAQ). [V]
- **Certificat** : « Certification: Included », laboratoire non nommé. [V]
- **Libellé du synthétique** : « Lab-grown diamond included », « lab diamond ». [V] Pas de mention de la loi ni d'un terme officiel.
- **Ancienneté** : fondé en 1986 par deux frères, « 40 years ». [V]

## Points forts à retenir pour JR Diamond

1. **Prix complet recalculé à chaque option** (carat, métal) sur la fiche. Preuve : 2 825 → 5 825 $ de 1 à 4 ct, platine +250 $. C'est l'écart principal du prototype (« Sur devis »).
2. **Règle de prix lisible** : +500 $ par demi-carat, +250 $ pour le platine, forme sans effet. Preuve : relevé ci-dessus.
3. **Retours et livraison gratuits « both ways »** annoncés sur la fiche et dans une page dédiée. Preuve : /pages/shipping.
4. **Photos portées à la main** dans la galerie de la fiche, qui rassurent sur la taille réelle. Preuve : miniatures de la fiche Elizabeth.
5. **Preuve sociale chiffrée** (579 avis) placée près du titre. Preuve : fiche Elizabeth.
6. **Quiz en 7 étapes contre une remise de 15 %** : capture de contacts. Preuve : fenêtre « STEP 1 OF 7 ».
7. **Rendu CAO gratuit sous 48 h** pour le sur mesure, argument que JR Diamond peut dépasser avec le fichier de fabrication. Preuve : FAQ.

## Défauts observés

- Aucune 3D ni configurateur : choix d'options sur une photo qui ne reflète pas toujours l'option (carat sans effet sur l'image ; platine : photo du blanc). [V]
- Pas de taille de doigt, de gravure, de griffes ni de pavé choisissables en ligne. [V]
- Délais et retours contradictoires (quatre délais différents ; 30 jours de retour contre « vente finale » du sur mesure). [V]
- « From 1 250 $ » contre « From 2 250 $ » à la collection. [V]
- Pierre naturelle seulement par contact ; laboratoire du certificat non nommé ; qualité de pierre figée (D–E, VS1). [V]
- Aucune photo ni vidéo de fabrication ni suivi de commande. [I]
- Anglais et dollars uniquement. [V]

## Limites de l'audit

- **Ajout au panier non actionné** : « Add To Cart » appelle /cart/add, interdit par robots.txt (« Disallow: /cart/ »). Récapitulatif de commande, frais et moyens de paiement du panier non vérifiés ; /cart lu vide.
- Quiz : étapes 1 et 2 seulement (une sélection de forme n'a pas avancé en automatisation) ; la fin et la collecte de coordonnées non vues.
- Rendez-vous, recherche, compte, blog, Anniversary Sale, pages des services (mise à taille, gravure) non ouverts ou non lus en détail.
- Une seule fiche explorée en détail (Elizabeth) ; Aria et Jess lues par l'inventaire et la collection ; or 18 k et or rose non revérifiés par option.
- Temps d'apparition du visuel principal (image > 300 px chargée) : fiche, **2,4 s sur ordinateur et 2,0 s en affichage iPhone** ; première image de la collection 2,1 s, chargement complet 3,7 s (une mesure chacune, connexion de la machine d'audit). [V]
- Captures : /tmp/…/scratchpad/audit/us/billig/ (hors dépôt).

## Sources

- https://billigjewelers.com/ (accueil, 103 contrôles)
- https://billigjewelers.com/collections/engagement-ring-settings (tri, filtre de forme, 24 montures)
- https://billigjewelers.com/products/elizabeth-engagement-ring (fiche et options)
- https://billigjewelers.com/pages/free-30-days-return-policy
- https://billigjewelers.com/pages/our-guarantee
- https://billigjewelers.com/pages/shipping
- https://billigjewelers.com/pages/faq
- https://billigjewelers.com/pages/our-story
- https://billigjewelers.com/cart (vide)
- https://billigjewelers.com/robots.txt (contrôle préalable avec robots.cjs)
- /home/user/Diamond3D/docs/concurrence/audit/us/new-jersey/INVENTAIRE.md (fiche d'exploration)
