# Audit : Bullock's Jewelry, « Custom Ring Builder » (Roswell, Nouveau-Mexique)

| | |
|---|---|
| Site | Bullock's Jewelry, 215 N. Main, Roswell (NM) ; « Since 1926 » : https://www.bullocksjewelry.com/ (plateforme Thinkspace) |
| Page de départ | https://www.bullocksjewelry.com/custom-ring-builder/ |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : assistant d'entrée (4 étapes) et fiches produit audités ; designer 3D non atteint (API JewelerOS interdite) ; panier, recherche, compte, tri, filtres de prix et de métal interdits par le robots.txt du site, non visités |

Convention : **[V]** vérifié, **[I]** inféré, **[S]** supposé. Prix en USD. Le robots.txt du site autorise explicitement les agents d'IA, mais pour `User-agent: *` interdit `/cart`, `/search`, `/account`, `/checkout`, `/jewelrybox` et les adresses `?sort=`, `?count=`, `?item=`, `?price_0=`, `?price_1=`, `?material=`, `?gender=` ; elles n'ont pas été ouvertes. Les appels `jeweleros.com/api/` ont été coupés.

## Parcours

| Étape | Options |
|---|---|
| 0. Page de départ | Titre « Custom Ring Builder » puis assistant ; aucune fenêtre d'inscription ni chat vus [V] |
| 1. « Let's start designing your ring » (étape 1 sur 4) | 3 pastilles de métal (Yellow Gold active au départ, White, Rose) ; 8 styles (Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone) + « Start from scratch » [V] |
| 2. « Choose your center stone » | Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) + « Decide later » [V] |
| 3. « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 ct + « Decide later » [V] |
| 4. « When do you need your ring? » | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » [V] |
| 5. Sortie | Appel API JewelerOS interdit : non exécuté [V pour l'arrêt] |
| 6. Boutique | « Bridal & Engagement » (110 articles) puis fiche produit (taille, financement, partage) ; « Add to Cart » non cliqué [V] |
| 7. Panier | `/cart` interdit par robots.txt : non ouvert [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (Yellow / White / Rose Gold) | 3 boutons | une seule pastille active à la fois ; Yellow active au départ (classes relevées, clic non actionné sur ce site) | aucun | NT (testées sur le site frère John Thomas) |
| Cartes de style (8) | boutons | étape 2 ; style rappelé en haut ; testé : Halo | aucun | OK (7 autres NT) |
| « Start from scratch » | carte | non cliquée | | NT |
| Bascule Natural / Lab Grown | 2 boutons | clics sans erreur ; changement visuel non établi | aucun | OK |
| Cartes de forme (9) | boutons | étape 3 ; testé : Marquise | aucun | OK (8 autres NT) |
| Cartes de carat (8) | boutons | étape 4 ; testé : 1 carat | aucun | OK |
| Cartes de délai (4) | boutons | appellent l'API interdite | | NT |
| Back / Skip | boutons | présents ; non testés (Skip ouvre le designer via l'API) | | NT |
| Même assistant en affichage iPhone | | étapes 1 à 4 parcourues à l'identique ; cartes empilées | | OK |
| Menu : Bridal Jewelry, Jewelry, Services, About, Sustainability, Contact | liens | pages lues : Bridal (200), Services (garantie, financement, sur mesure), About, Sustainability | | OK |
| En-tête : téléphone (575) 622-7451, « Apply for Financing » (mysynchrony.com), « Schedule An Appointment », « Roswell, NM » | liens | présents ; financement externe et rendez-vous non suivis (formulaires) | | NT |
| Search Site / champ « Search Catalog » | lien, champ | `/search/` interdit : non utilisé | | NT |
| Shopping Cart, Wish List, Login | liens | `/cart/` et `/account/` interdits : non ouverts | | NT |
| Catalogue Bridal : filtre Product Types (Bridal Sets, Engagement Rings, Rings, Wedding Bands) | liens `?type=` | testé « Engagement Rings » : 85 articles, nouveaux filtres Lab Grown, Semi-Mount, Styles (Cluster, Halo, Modern, Solitaire, Vintage) | | OK |
| Filtres Designers (Bullock's Collection), Material (10 K jaune, 14 K blanc, 14 K jaune, or blanc), Price (2 champs + SET PRICES / RESET) | liens, champs | adresses `?material=` et `?price_0=` interdites : non actionnés | | NT |
| Tri (Featured, Newest, Name, Price Low-High, High-Low) ; Affichage (24, 48, 72, 96) | 2 listes | génèrent `?sort=` et `?count=` : interdits, non actionnés | | NT |
| Pagination (1 à 5) | liens `?page=` | présents, non suivis | | NT |
| Carte produit : « Inline », « Modal » (aperçu), « Add to Wish List » | liens | wish list → `/account/` interdit ; aperçu non ouvert | | NT |
| Fiche : liste « Size » (« Select Size », « I don't know or see my size », 4,0 à 13,0 par quart de taille) | liste | sélection de 7,0 enregistrée | aucun | OK |
| Fiche : « Add to Cart » | bouton submit | non cliqué : panier interdit | 3 700 $ | NT |
| Fiche : « Share » | lien | ouvre une fenêtre (To Email, Message, Your Name, Your Email, Send, reCAPTCHA) ; rien rempli | | OK (ouverture) |
| Fiche : « Drop a Hint » | lien | ouvre une fenêtre (To Email, Message, Send) ; rien rempli | | OK (ouverture) |
| Fiche : « Contact » | lien | `/contact-us/?item=…` (formulaire) non suivi | | NT |
| Fiche : « View Our Financing Options » | lien | `/services/financing/` (200) : texte et formulaire « Ask a Question » ; non rempli | | OK |
| Fiche : formulaire « Inquire » | formulaire | non rempli | | NT |
| Pied de page : Return Policy, Terms, Privacy, Gift Cards, Jewelers Mutual | liens | Return Policy lue (200) | | OK |
| Liens de réassurance : Free Shipping on $200+, Flexible Financing, 30 Day Returns, Two-Year Warranty, Upgrades on Natural Diamonds | liens `#` | libellés vus, aucune page cible | | OK (libellé seul) |

## Options disponibles

- **Assistant** [V] : identique à celui de John Thomas (mêmes métaux, 8 styles, 9 formes, 8 tailles de pierre, 4 délais) ; pas de platine.
- **Boutique** [V] : 110 articles « Bridal & Engagement » ; 85 bagues de fiançailles ; styles solitaire, halo, vintage, cluster, moderne ; pierres naturelles et « Created » (synthétiques) ; métaux 10 K jaune, 14 K blanc, 14 K jaune.
- **Fiche** [V] : taille 4,0 à 13,0 par 0,25 ; financement ; partage ; « Drop a Hint » ; avantages listés : Lifetime Warranty, Free Shipping, Flexible Financing, Lifetime Upgrades, Conflict-Free Diamonds, Free Gift Wrapping, Free In-Store Preview.
- **Services** [V] : sur mesure (CAO, modélisation 3D), refonte d'anciens bijoux, rachat d'or et de diamants, estimations, assurance, réparation, financement interne.

## Prix, délais, retours, garanties

- **Prix** [V] : prix unique par fiche, sans décomposition. Première page : de 1 000 $ (alliance 0,16 ct) à 5 900 $ ; solitaires « Created Diamond » de 2,00 à 3,11 ct de 3 100 à 5 900 $ ; naturel : 0,88 ct SI2/F en 14 K blanc 2 700 $. Fiche 101-00093 : 2,06 ct synthétique, VS1/E, 14 K blanc, 3 700 $ ; fiche 100-01563 : 0,88 ct naturel, SI2/F, 2 700 $. Aucun prix dans l'assistant.
- **Délai** [V] : aucun délai de fabrication annoncé ; les fiches du catalogue sont « In Stock ». L'assistant demande seulement le délai souhaité.
- **Livraison** [V] : « Free Shipping on $200+ » (lien d'en-tête) ; frais réels et récapitulatif du panier non vus.
- **Retours** [V] (`/return-policy/`) : « 30 day - Free returns », article neuf sans trace de port, remboursement sur la carte d'origine, par chèque si payé en espèces ou chèque. **Aucune exception pour le sur-mesure** n'y est écrite.
- **Garanties** [V] : « Lifetime Jewelry Warranty » : nettoyages et contrôles illimités, ajustements, un polissage, un rhodiage et un changement de taille par an, remplacement d'une pierre jusqu'à 0,50 ct tombée en usage normal ; conditionnée à deux rendez-vous gratuits par an ; exclut accidents, perte, vol. La page Sustainability annonce par ailleurs « a 2-year workmanship warranty » : deux messages à concilier.
- **Financement** [V] : programme interne (« Financing Guaranteed ») ; page « Apply » ; conditions sur demande.
- **Certificats** [V] : aucun laboratoire (GIA, IGI) cité sur les fiches lues, seulement pureté et couleur ; certificat non vu.
- **Libellé synthétique** [V] : « Created Diamond », « Laboratory-Grown », « Lab-Diamond », sous-type « Lab Grown ».

## Confiance et service

- **Ancienneté** [V] : « Since 1926 », « over 90 years » ; propriétaires nommés (Kyle & Don Bullock).
- **Promesse** [V] : « only jewelry store in New Mexico that offers a guarantee on both the ring and relationship » (déclaratif) ; « We don't mark items up just to mark them down ».
- **Éthique** [V] : page Sustainability : fournisseurs de l'RJC ou de l'IJO, recyclage des métaux, 2 ans de garantie de fabrication.
- **Atelier** [V] : page « Custom Jewelry Designs » : « Computer Aided Designs • 3D Modeling », texte seul ; aucune photo ni vidéo de fabrication, pas de suivi de commande vus.
- **Contact** [V] : téléphone, rendez-vous, formulaires ; horaires affichés (fermé le dimanche).
- **Avis clients** : aucun relevé sur les pages lues. **Langue, devise** : anglais, USD.

## Points forts à retenir pour JR Diamond

1. **Retours en une phrase claire** : 30 jours, gratuits, condition de la bague, mode de remboursement (page Return Policy).
2. **Garantie à vie détaillée en 5 lignes** avec ce qui est inclus et ce qui est exclu (page Lifetime Warranty) : modèle de transparence pour la promesse après-vente de JR Diamond.
3. **Taille de doigt avec option « I don't know my size »** et pas de quart de taille manquant (fiche : liste de 4,0 à 13,0).
4. **Synthétique nommé et décrit sur la fiche** (« Laboratory-Grown Created Diamond (VS1 Clarity / E Color) ») avec pureté et couleur, métal et taille du modèle montré.
5. **Prix lisible sur chaque carte** et « View Our Financing Options » sur la fiche.
6. **« Drop a Hint » et « Share »** : partage vers un proche, utile pour un achat de fiançailles (fiche produit).

## Défauts observés

1. **Page « Custom Ring Builder » réduite à son titre** puis l'assistant : aucune explication, aucun prix, aucune étape après la 4e sans le designer [V].
2. **Pas d'exception sur-mesure dans les retours** et pas de lien entre la politique de retour et le sur-mesure [V].
3. **Deux garanties différentes** (à vie sous condition, 2 ans) [V].
4. **Fiche : texte « Ring Size 7 » alors que la liste propose 4,0 à 13,0** : taille de la bague montrée ou taille livrée ? ambigu [V].
5. **Une seule photo par fiche**, pas de vidéo ni de 360° ; aucun certificat nommé [V].
6. **Libellés de réassurance sans page** (liens `#`) [V].

## Limites de l'audit

- **Designer 3D non vu** : API JewelerOS interdite ; arrêt avant le clic sur le délai. Pas de prix en direct ni d'options avancées vues.
- **Panier non vu** (`/cart` interdit) : ni récapitulatif, ni frais, ni moyens de paiement. « Add to Cart » non cliqué.
- Tri, nombre par page, filtres de prix et de métal, recherche, compte : interdits, non actionnés ; seuls les filtres `?type=` ont été ouverts.
- Effet visuel de la bascule naturel/synthétique et des 3 pastilles de métal non établi sur ce site ; ses autres cartes, Back, Skip, « Decide later » non testés.
- Aucun formulaire rempli, aucun chat ouvert, aucun compte.

## Mesures de chargement (Chromium, via le proxy de la session, réseau non étalonné)

| Appareil | Assistant visible (texte « Solitaire ») | Remarque |
|---|---|---|
| Ordinateur 1366x900 | 1,3 s | assistant seul, pas de 3D |
| iPhone 13 | 0,35 s | première occurrence du mot dans la page : probablement le menu, valeur peu fiable [I] |

Fiche produit (ordinateur) : première image de plus de 200 px chargée à 2,1 s, mais c'est le logo ; la photo de la bague (JPEG 800x800) est dans la page à 2,5 s [V]. Le visuel principal est une photo, pas une 3D.

## Sources

- https://www.bullocksjewelry.com/custom-ring-builder/ (assistant, parcours actionné)
- https://www.bullocksjewelry.com/catalog/bridal-engagement/ et `?type=engagement-ring` ; fiches /catalog/bullocks_collection/101-00093/ et /100-01563/
- https://www.bullocksjewelry.com/return-policy/ ; /services/lifetime-warranty/ ; /services/financing/ ; /services/custom-jewelry-designs/ ; /company/about-us/ ; /sustainability/ ; /company/appointments/ (page vide à la lecture)
- https://www.bullocksjewelry.com/robots.txt et https://jeweleros.com/robots.txt (`Disallow: /api/`), via l'outil `robots.cjs`
- Captures : dossier de travail (scratchpad) `us/bullocks-jewelry/`
