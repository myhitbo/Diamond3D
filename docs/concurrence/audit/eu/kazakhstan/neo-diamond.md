# Audit : Neo Diamond (Almaty, Astana)

- Site : https://neodiamond.kz/ ; page de départ : https://neodiamond.kz/catalog/list (grille de 115 modèles avec prix) puis fiche à configurateur 3D, ex. https://neodiamond.kz/catalog/product/sirius/classic/round
- Date : 15/11/2026. Appareils : ordinateur (Chromium 1366 px) et affichage iPhone 13 (Playwright).
- Statut : **partiel** (parcours jusqu'à la page de réservation ; aucune commande ni panier, le site n'en a pas). Les réponses des questions fréquentes de paiement et de retour n'ont pas été lues (accordéons non dépliés).
- robots.txt : `Allow: /`, interdits `/tilda/form*`, `/tilda/cart*`, `/tilda/popup*`, quelques pages isolées. Aucune adresse interdite ouverte [V]. Langue : russe seul, devise : tenge (₸).
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| étape | page | options |
|---|---|---|
| 1 | `/` accueil | présentation, formes, titres d'or, certificat ; liens « Каталог » (`/catalog`), « Отправить свой дизайн » (WhatsApp) [V] |
| 2 | `/catalog` puis `/catalog/list` | 10 formes ; 115 boutons-modèles (voir ci-dessous) avec prix de base [V] |
| 3 | `/catalog/product/<ligne>/<style>/<forme>` | configurateur 3D : carat, couleur du diamant central, couleur des petits diamants, titre, couleur de l'or [V] |
| 4 | bouton « Узнать детали » → `/catalog/booking?line=sirius&style=classic&shape=round&ct=1&gold=585&color=white&goldColor=white` | récapitulatif, délai, caractéristiques, service, questions fréquentes, WhatsApp [V] |

La configuration est dans l'adresse (paramètres `ct`, `gold`, `color`, `goldColor`) : le résultat peut se partager [V].

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Sélecteur de formes (accueil/catalogue) | boutons | 10 formes : rond, princesse, radiant, coussin, ovale, poire, cœur, marquise, émeraude, Asscher | sans objet | OK [V] |
| Modèle SIRIUS (10 formes) | bouton-carte | ouvre le configurateur 3D de la forme | 550 000 ₸ | OK [V] |
| SIRIUS LUXE / BEZEL (10 formes) | bouton-carte | idem | 650 000 ₸ | OK (liste) ; non ouvert [V liste] |
| HALO (10 formes) | bouton-carte | idem | 700 000 ₸ | liste seulement |
| NEO et HALO LUXE (10 formes) | bouton-carte | idem | 800 000 ₸ | liste seulement |
| NEO LUXE (10 formes) | bouton-carte | idem | 900 000 ₸ | liste seulement |
| NEO HALO (10 formes) | bouton-carte | idem | 950 000 ₸ | liste seulement |
| NEO HALO LUXE (10 formes) | bouton-carte | idem | 1 050 000 ₸ | liste seulement |
| PUSETS CLASSIC (10 formes) et PUSETS HALO (6 formes) | bouton-carte | « Цена по запросу » | sur demande | liste seulement |
| « ‹ Назад » | bouton | retour au catalogue | sans objet | OK (présent) [V] |
| « Поменять форму бриллианта » | lien-bouton | change la forme ; non actionné | non testé | raison : parcours limité aux options de prix |
| Carat 1 ct | bouton | image 3D recalculée ; 1 ct par défaut | 550 000 ₸ | OK [V] |
| Carat 1,5 ct | bouton | idem | 650 000 ₸ (lecture à 2,5 s ; une lecture à 0,5 s affichait encore 550 000, retard d'affichage) | OK [V] |
| Carat 2 ct | bouton | idem | 750 000 ₸ | OK [V] |
| Carat 3 ct | bouton | idem | 950 000 ₸ | OK [V] |
| Carat 4 ct | bouton | idem | 1 150 000 ₸ | OK [V] |
| Carat 5 ct | bouton | idem | 1 350 000 ₸ | OK [V] |
| Couleur du diamant central : Белый | pastille | blanc par défaut | 0 | OK [V] |
| Couleur du diamant central : Зелёный, Жёлтый, Розовый, Синий, Рубин | pastilles | couleur du centre ; premier changement coloré observé | +100 000 ₸ (550 000 → 650 000 à 1 ct) ; les cinq couleurs au même prix (relevé cumulatif) | OK [V] ; image non mesurée |
| Couleur des petits diamants : Белый | pastille | par défaut | 0 | OK [V] |
| Couleur des petits diamants : Зелёный, Жёлтый, Розовый, Синий, Рубин | pastilles | couleur des diamants latéraux | +100 000 ₸ au premier changement coloré (650 000 → 750 000) | OK [V] |
| Titre 585 | bouton | sélectionné, « включено » | 0 | OK [V] |
| Titre 750 | bouton | titre 18 k | +100 000 ₸ (650 000 → 750 000) | OK [V] |
| Couleur de l'or : Белое, Жёлтое, Розовое | pastilles | change la couleur du métal | 0 (650 000 inchangé aux trois) | OK [V] ; image non mesurée |
| Case « Комбинированное золото » | interrupteur | activé par défaut ; décochée n'a pas changé le prix | 0 | OK [V] ; effet visuel non vérifié |
| Rotation 3D (glisser) / zoom molette | geste | tenté sur ordinateur ; résultat non enregistré (le script a été coupé) | sans objet | non confirmé |
| « Узнать детали » | bouton | ouvre `/catalog/booking?…` avec la configuration dans l'adresse | sans objet | OK [V] |
| « Написать в WhatsApp » (page de réservation) | bouton | ouvre WhatsApp ; non cliqué | sans objet | non testé : consigne (pas de chat) |
| « Отправить себе или партнёру » | bouton | partage ; non actionné | sans objet | non testé |
| « Посмотреть другие модели » | bouton | retour au catalogue ; non actionné | sans objet | non testé |
| 2ГИС (avis), téléphones, Instagram | liens | sorties vers 2gis.kz, tel:, instagram.com | sans objet | présents, non ouverts [V liens] |

Questions fréquentes de la page de réservation (accordéons, 12 questions) : essayage en direct, disponibilité, remises, paiement, « si le bijou ne convient pas », livraison hors Almaty/Astana, laboratoire contre naturel, certificat IGI, authenticité, pays d'origine, investissement, prix du naturel. Seule la réponse sur le naturel a été lue [V].

## Options disponibles

- Formes (10) : rond, princesse, radiant, coussin, ovale, poire, cœur, marquise, émeraude, Asscher [V].
- Gammes (9) : Sirius, Sirius Luxe, Bezel, Halo, Neo, Halo Luxe, Neo Luxe, Neo Halo, Neo Halo Luxe ; plus Pusets classic et halo (clous d'oreilles, prix sur demande) [V : liste].
- Carat central : 1 / 1,5 / 2 / 3 / 4 / 5 ct [V].
- Couleur du diamant central et des petits diamants : blanc, vert, jaune, rose, bleu, rubis [V].
- Titre : 585 (14 k, inclus) ou 750 (18 k, +100 000 ₸) ; or blanc, jaune, rose [V]. Pas de platine ; pas de choix de monture au-delà de la gamme, de taille de doigt ni de gravure dans le configurateur [V : non observés].
- Pierre : synthétique (« лабораторный », IGI) ; naturel (GIA) sur demande par WhatsApp [V].
- Caractéristiques annoncées : pureté VVS2/VS1, couleur D/E, taille IDEAL, certificat IGI, monture d'environ 4 g [V].

## Prix, délais, retours, garanties

- Prix de base affichés sur chaque carte et recalculés en direct : 1 ct Sirius rond 550 000 ₸ ; échelle des carats 550 000 → 1 350 000 ₸ [V]. TVA et ventilation du prix : non affichées [V].
- Délai : 5 à 10 jours calendaires [V : page de réservation]. Livraison gratuite dans tout le Kazakhstan en 2 à 5 jours [V : page `/catalog` lue par outil de lecture].
- Service : nettoyage aux ultrasons et rhodiage gratuits à vie ; réparation et mise à taille « au prix de revient » [V].
- Retours : la question « Что если украшение не подойдёт ? » existe ; la réponse n'a pas été lue [S pour le contenu].
- Cadeau : gravure personnalisée offerte si l'on laisse une demande [V].
- Paiement : aucun moyen affiché dans le texte lu ; pas de panier ni de paiement en ligne (aucune route `/cart` ; commande par contrat et paiement en showroom ou après WhatsApp d'après la page d'accueil) [V pour l'absence de panier, I pour le déroulé].

## Confiance et service

- Note 5/5 sur 2GIS, 59 évaluations et 35 avis (affichés par le site) [V].
- Showrooms sur rendez-vous : Esentai City (Almaty, Al-Farabi 116/36), Atlant (Astana, Konaev 5) ; ouvert de 10 h à 21 h [V].
- Contact : deux téléphones, deux numéros WhatsApp, Instagram [V].
- Pas de photos ni vidéos de fabrication ni de suivi de commande observés [V : absents des pages lues].
- Pas de page de retour ou de garantie dédiée ; certificat IGI nommé dans la fiche [V].

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse** : `/catalog/booking?...ct=1&gold=585&color=white&goldColor=white`, partageable sans compte. Preuve : adresse relevée après le clic sur « Узнать детали ».
2. **Prix en direct selon le carat, avec le prix de base sur chaque carte** (550 000 à 1 350 000 ₸ selon le carat). Preuve : relevé des six boutons de carat.
3. **Service à vie gratuit annoncé** (nettoyage, rhodiage) et gravure offerte à la demande : argument de relation après-vente. Preuve : page de réservation.
4. **Délai court et net (5 à 10 jours) et rappel des certificats (IGI synthétique, GIA naturel)** à côté du prix. Preuve : pages d'accueil et de réservation.
5. **Essayage de modèles en showroom** avant achat : « образцы в наличии ». Preuve : page de réservation.
6. **Question fréquente sur le naturel** : le synthétique est la norme du site et le naturel un calcul sur demande, ce qui présente le choix sans le cacher. Preuve : réponse lue.

## Défauts observés

- Le visuel 3D met 6,2 s sur ordinateur et 5,1 s en affichage iPhone avant d'apparaître (texte « Загрузка украшения… » entre-temps) [V, mesure ponctuelle].
- Pas de panier, pas de paiement, pas de moyen de paiement lisible : tout passe par WhatsApp [V].
- Aucune possibilité de choisir monture, taille de doigt, gravure ou platine dans le configurateur [V].
- Le prix ne se met pas à jour instantanément : lecture à 0,5 s encore ancienne après un clic sur 1,5 ct [V].
- Russe seul, aucun sélecteur de langue [V].
- Surcoût de +100 000 ₸ pour toute couleur de pierre, sans explication [V].
- Pas de garantie ni de politique de retour exposée sans déplier une question [V].

## Limites de l'audit

- La machine d'audit était lente : les scripts ont été coupés à 300 s et certaines vérifications n'ont pas abouti (rotation 3D, zoom, comparaison d'images, réponses des accordéons, formes autres que Sirius rond, gammes autres que Sirius).
- Le prix des gammes Luxe, Bezel, Halo, Neo n'a été relevé que sur la liste, sans ouvrir leur configurateur.
- Le prix des options de couleur a été relevé de façon cumulative ; l'effet de chaque couleur prise seule n'est pas isolé.
- Aucun chat, formulaire ni WhatsApp ouvert. Aucune capture sur la page de réservation en mobile.
- Mesures de temps : une seule passe par appareil.

## Sources

- https://neodiamond.kz/ , https://neodiamond.kz/catalog , https://neodiamond.kz/catalog/list (115 contrôles relevés)
- https://neodiamond.kz/catalog/product/sirius/classic/round
- https://neodiamond.kz/catalog/booking?line=sirius&style=classic&shape=round&ct=1&gold=585&color=white&goldColor=white
- https://neodiamond.kz/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/neodiamond/` (hors dépôt)
