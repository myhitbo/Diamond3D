# Audit : Solomon Jewelers (Wichita, Kansas)

- **Site** : https://jewelsbysolomon.com (boutique Shopify) ; quiz « AI Ring Builder » hébergé par ShowroomPro : https://ringbuilder.ai/design?d=08bb5214cf3aa778 (redirige vers showroompro.ai)
- **Date** : 15/11/2026 (reprise du dossier le 24/11/2026 ; contrôles refaits ce jour)
- **Appareils** : ordinateur (Chromium, 1366×900) et affichage iPhone 13 (Playwright)
- **Statut : partiel.** Le quiz exige nom, e-mail et téléphone dès l'étape 1 sur 13 : aucune des 12 autres étapes n'a été vue (règle : aucune donnée personnelle saisie). La boutique Shopify a été auditée jusqu'à la fiche produit ; le panier n'a pas été utilisé (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| Accueil → bouton « AI RING BUILDER » | lien vers ringbuilder.ai/design?d=… | [V] jewelsbysolomon.com |
| Page d'accueil du quiz | « Design your dream ring », texte de marque, « Begin Your Design », « Already started a design? View My Designs », « Book a Consultation », langue EN/ES/FR | [V] ringbuilder.ai |
| Étape 1/13 « Welcome » | nom, e-mail, téléphone (indicatif), pays ; « Continue » grisé tant que le formulaire est vide ; « Back » | [V] |
| Étapes 2 à 13 | non vues (porte de données personnelles) | [V] blocage |
| Boutique : Bridal → 51 bagues | filtres Disponibilité et Prix, tri, 3 pages | [V] /collections/engagement-rings |
| Fiche produit | métal (14 k jaune / blanc), taille 4 à 12 (demi-tailles), quantité, ajout au panier | [V] |
| Sur mesure | page de texte, appel au quiz, téléphone, e-mail | [V] /pages/custom-jewelry-design |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Sélecteur de langue EN / ES / FR (quiz) | liste | traduit l'interface au même endroit (FR : « Étape 1 sur 13 », « Bienvenue » ; ES aussi) ; un mot reste en anglais (« · Welcome ») | – | marche, traduction automatique [V] |
| Begin Your Design | bouton | ouvre l'étape 1/13 | – | marche [V] |
| Already started a design? View My Designs | lien | mène à /my-designs?view=all&studio=… (non ouvert : demande un compte) | – | non testé [V lien] |
| Powered by ShowroomPro | lien | site du fournisseur, avec suivi de parrainage | – | non ouvert [V] |
| Book a Consultation | lien flottant | lien vers un agenda Google Calendar (cid=…), pas un formulaire | – | non ouvert (service tiers) [V lien] |
| Nom / e-mail (champs) | texte | « Continue » reste grisé tant qu'ils sont vides | – | non remplis (règle) |
| Téléphone : indicatif | liste à recherche | 95 pays proposés (🇺🇸 +1 en tête) | – | marche [V] |
| Pays | liste | 95 pays | – | marche [V] |
| Continue / Back (étape 1) | boutons | Back revient à l'accueil du quiz ; Continue non actionnable | – | Back marche [V] |
| Menu : Bridal, Fine Jewelry, Personalized, Gifts, Our Story | liens | pages de collection | – | marchent [V] |
| Langue « English » / devise « USD $ » (en-tête) | boutons | sélecteurs de pays et devise Shopify, non ouverts | – | non testé |
| FILTERS : Availability « In stock » | case | « Out of stock » grisé (aucune bague hors stock listée) | – | ouvert, non coché [V] |
| FILTERS : Price | curseur + 2 champs | plage 0 à 8 335 $ ; bouton « VIEW 51 ITEMS » | filtre prix | ouvert, non appliqué : l'application de filtres multiples est interdite par robots.txt [V] |
| SORT BY | bouton | tri non appliqué : les adresses `sort_by` sont interdites par robots.txt | – | non testé (interdit) |
| Pastilles NEW ARRIVALS, BEST SELLERS, SALE, RINGS, EARRINGS, NECKLACES | liens | sous-collections | – | non ouvertes |
| ADD TO CART (liste et fiche) | bouton | appelle l'ajout au panier de Shopify, interdit par `Disallow: /cart/` | – | non cliqué : « panier interdit par robots.txt » [V] |
| Fiche : « Metal Options » 14 k jaune / 14 k blanc | boutons | tous deux « variant sold out or unavailable » ; « Hurry! Low inventory » affiché en même temps | prix inchangé (6 680 $) | incohérent [V] |
| Fiche : taille 4 à 12 | boutons | 17 tailles, toutes « sold out or unavailable » | – | état douteux [V] |
| Fiche : onglets Description / Details | boutons | Description : fiche technique (pierre centrale ≈ 7 ct, E / VVS2, IGI, largeur 3 mm) ; Details : vide | – | marche / vide [V] |
| Fiche : « Shipping » (lien) | modale | ouvre la politique d'expédition | – | marche [V] |
| Fiche : « More payment options » | lien « # » | n'ouvre rien d'observable | – | lien creux [V] |
| Fiche : « Chat now » | lien | mène à broadcast-theme-main.myshopify.com/pages/contact : domaine de démonstration du thème, pas celui du joaillier | – | lien erroné [V] |
| Fiche : CONFIGURE | bouton | bouton de la barre d'achat collante, ne mène à aucun configurateur ; non cliquable à la souris (5 s) | – | sans effet [V] |
| Fiche : galerie | images | 5 photos de produit + diaporamas ; 0 vidéo, 0 modèle 3D, pas de zoom dédié | – | [V] |
| Fiche : CARE INSTRUCTIONS / SHIPPING & RETURNS / SOURCING & MATERIALS | blocs | textes génériques de thème (« recycled materials », « AAA-grade gemstones ») | – | [V] |
| Bouton « Chat » flottant | bouton | non ouvert (règle : pas de conversation) | – | non testé |
| Panier (/cart) | page | non ouvert | – | voir Limites |
| Partager, comparer, essayage à domicile, WhatsApp, AR, 360°, 3D | – | absents du site et du quiz côté pages vues [V] ; un WhatsApp existe dans les données du quiz (voir Confiance) | – | – |

## Options disponibles

- **Quiz** (visible) : langues EN, ES, FR ; 13 étapes au total annoncées ; contenu des étapes 2 à 13 non vu. Selon le fournisseur : quiz « engagement » et « wedding band », images générées par IA, visionneuse 3D possible sur un design terminé, pas de panier ni de paiement [V] showroompro.ai/docs/faq.md (lu ce jour). La page du joaillier annonce « 2-min quiz · AI-powered · 10,000+ designs » [V] (inventaire du 15/11). Les données du quiz indiquent « wedding bands » activé et « Meshy » activé [V] (réponse JSON /api/quiz/…).
- **Boutique** : 51 bagues de fiançailles ; matières : or 14 k (jaune, blanc), argent sterling (moissanite) ; pierres : diamant de laboratoire, diamant naturel, moissanite, émeraude, rubis ; formes citées dans les titres : ovale, marquise, radiant, émeraude, coussin, princesse ; tailles de doigt 4 à 12 par demi-taille [V].
- **Absents** : platine (non vu), gravure, choix de griffes ou de corps de bague, sélecteur de carat, 3D, AR, vidéo [V sur les pages lues].

## Prix, délais, retours, garanties

- **Prix** : affichés partout, avec prix barré (ex. 8 1/2 ct ovale diamant de laboratoire 14 k : 6 680 $ au lieu de 11 130 $, « 40 % OFF ») [V]. Plage de la collection : 329 $ à 8 335 $ [V]. Pas de décomposition (métal, pierre, façon) [V].
- **Délai** : en stock, expédié sous 3 à 7 jours ouvrés ; sur mesure ou commande spéciale 4 à 6 semaines ; collection : « handmade to order, about 4-8 weeks » [V] (/policies/shipping-policy, /collections/engagement-rings). Contradiction entre « 4 à 6 » et « 4 à 8 » semaines [V].
- **Livraison** : « Shipping calculated at checkout » ; gratuite dès 100 $ (badge de la fiche), dès 200 $ (barre d'annonce, FAQ) : contradiction [V]. Assurance et signature pour les commandes de grande valeur [V].
- **Retours** : 30 jours, article non porté, étiquette fournie ; non retournables : articles sur mesure, personnalisés, gravés ou ajustés, soldes (« clearance ») ; 14 jours pour l'Union européenne [V] (/policies/refund-policy). La fiche affiche à la fois « Free 30 Days Returns » et « Final sale » [V].
- **Garantie** : 1 an [V] (badge de la fiche). **Financement** : Shop Pay Installments, PayPal Pay Later (FAQ) [V]. Moyens de paiement du panier : non vus.
- **Certificats** : « IGI Certified » sur la fiche lue ; la FAQ dit « same GIA certification » pour le diamant de laboratoire : incohérence [V].
- **Libellé du synthétique** : « Lab-Grown Diamond (Eco-friendly, conflict-free) » ; FAQ : « chemically and physically identical to natural diamonds », 50 à 70 % moins cher [V].
- **Devise et langues** : USD ; site en anglais seul, quiz en 3 langues [V].

## Confiance et service

- Magasin à Wichita (7700 E Kellogg Dr, Suite E11), horaires et téléphone (316) 295-3675 publiés, e-mail Gmail ; ouverture annoncée d'un magasin à Jersey City [V] (/pages/faqs). Rendez-vous « in-store or virtual » annoncé dans la barre du haut [V].
- Le quiz expose dans ses données un numéro WhatsApp, mais aucun bouton WhatsApp n'est visible [V] (JSON du quiz) / [V] page.
- Avis clients : aucun avis visible sur la fiche ni la collection [V].
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande avant l'expédition [V]. Mention « handcrafted » dans la collection ; « Our top sellers on hand in the studio… all other pieces are handmade to order » [V].
- Contact : formulaire et téléphone ; chat Shopify non ouvert [V].

## Points forts à retenir pour JR Diamond

1. **Un quiz guidé en moins de 2 minutes comme porte d'entrée du sur mesure**, avec bouton « Book a Consultation » toujours visible (preuve : captures 01 et 03, texte « 2-min quiz »).
2. **Prix affichés partout avec référence barrée** et paiement fractionné annoncé (collection et fiche lues) : l'attente du client américain, et l'écart de JR Diamond (« Sur devis »).
3. **Politique de retour qui exclut clairement le sur mesure** (refund-policy : « custom products, engraved or resized items ») : rédaction à examiner pour l'avocat israélien.
4. **Annonce du délai selon le type de commande** (3 à 7 jours en stock, 4 à 6 semaines sur mesure) : formulation à copier, JR Diamond promet 14 jours ouvrés.
5. **Fiche technique complète** (poids total et pierre centrale, couleur, pureté, certificat, largeur) dans l'onglet Description.
6. Quiz traduit en 3 langues sur la même adresse (test FR/ES).

## Défauts observés

- Le quiz impose coordonnées personnelles avant tout aperçu des étapes ; aucun prix ni image avant (étape 1 sur 13) [V].
- Visuels générés par IA et non issus d'un fichier de fabrication : le fournisseur parle de « concept images, not exact SKU renders » [V] (ring-builder-alternatives.md).
- Variantes de métal et de taille toutes indisponibles sur la fiche lue, avec « Low inventory » : l'achat est impossible ou le stock mal paramétré [V].
- Liens « Chat now » vers un domaine de démonstration du thème, « More payment options » et « Shipping » en `#`, bouton CONFIGURE sans effet [V].
- Textes contradictoires : seuil de livraison gratuite (100 $ / 200 $), délai (4-6 / 4-8 semaines), retours (« Free 30 Days Returns » et « Final sale »), certificat (IGI / GIA) [V].
- Pas de 3D, vidéo, avis, preuve d'atelier [V].
- Chargement du logo du quiz : 1,7 Mo (PNG), peint à 7,0 s sur ordinateur et 2,6 s en affichage iPhone [V].

## Limites de l'audit

- Quiz bloqué à l'étape 1 par le formulaire de coordonnées : étapes 2 à 13, rendus IA, filtres, 3D, prix et envoi du design non vus.
- Panier non utilisé : `/cart/add` est interdit par robots.txt (« Disallow: /cart/ ») et la page /cart n'apporte rien sans article ; frais de livraison réels, délai de panier et moyens de paiement non relevés.
- Tri, filtres combinés et chat non actionnés (robots.txt ou règle de non-conversation). Les clics sur « Book a Consultation » et « View My Designs » n'ont pas été suivis.
- Temps d'apparition mesurés une seule fois par appareil : quiz, bouton « Begin » visible à 2,6 s (ordinateur) et 2,4 s (iPhone) ; première photo de fiche produit peinte à 1,5 s (ordinateur) et 1,3 s (iPhone). Pas de défilement horizontal en iPhone (390/390) [V].
- Une lecture par curl avec identité de navigateur a été refusée par l'outil de contrôle ; les pages ont été lues avec Playwright.

## Sources

- https://ringbuilder.ai/design?d=08bb5214cf3aa778 et https://www.showroompro.ai/api/quiz/08bb5214cf3aa778 (JSON public du quiz)
- https://www.showroompro.ai/docs/faq.md, https://www.showroompro.ai/ring-builder-alternatives.md, https://www.showroompro.ai/llms.txt
- https://jewelsbysolomon.com/ , /collections/engagement-rings , /collections/engagement-rings/products/8-1-2-ctw-oval-lab-diamond-ring-with-hidden-halo-in-14k-gold-e-vvs2
- https://jewelsbysolomon.com/policies/refund-policy , /policies/shipping-policy , /pages/faqs , /pages/custom-jewelry-design , /robots.txt , /agents.md
- Captures : scratchpad/audit/us/solomon-jewelers/ (01 à 08)
