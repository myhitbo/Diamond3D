# Audit Brilliant.ru (« Якутские бриллианты – Бриллиант.РУ »)

- **Site** : Brilliant.ru, société « Brillion – Якутские бриллианты », Moscou (showroom Bolchoï Znamenski, atelier propre depuis 2009 [V]).
- **Adresse** : https://www.brilliant.ru/ ; page de départ : https://www.brilliant.ru/constructor/ (autorisée par robots.txt).
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026.
- **Appareils** : Chromium ordinateur (1366 × 900) ; affichage iPhone 13 (le site redirige vers la version mobile séparée m.brilliant.ru).
- **Statut** : **partiel**. Parcours du constructeur jusqu'à l'étape finale vérifié ; panier et achat en 1 clic non ouverts (chemins interdits par robots.txt) ; aperçu des paires monture + pierre jamais rempli pendant le test (voir « Défauts »).
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options (observées) | Effet sur le compteur « Вам подойдет » |
|---|---|---|
| Accueil du constructeur | Onglets « Тип изделия », « Сумма », « Выбор камня », « Материал оправы » ; compteur de départ 763 articles [V] | 763 |
| 1. Type d'article | Кольцо (bague) · Серьги (boucles d'oreilles) · Подвеска (pendentif) [V] | bague : 575 |
| 2. Budget | Champ libre en roubles ; message « Минимальная стоимость товара: 25 780 руб. » ; saisie de 300 000 : [V] | 300 000 ₽ : 370 |
| 3. Pierre | Curseur de poids (de 0,14 à 1,29 ct) avec deux champs « от / до » ; 11 pictogrammes de forme (noms [I] d'après le menu « По форме » du site : rond, princesse, coussin, asscher, ovale, émeraude, poire, triangle, marquise, radiant, cœur ; le nom de chaque pictogramme n'est pas affiché) ; forme ronde choisie [V] | rond : 369 |
| 4. Monture | « Выбор оправы » : Белое золото, Желтое золото, Комбинированное золото, Серебро, Платина [V] | 369 (inchangé après or blanc, puis platine) |
| Résultat | Colonne de droite « То, что вам подойдет » : paires monture + pierre avec « Общая сумма » et « В корзину » ; tri « Цене » ; « Показать еще » ; « Заказать оправу » [V] | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Кольцо | lien à onglet (javascript) | Passe à l'étape budget ; compteur 763 → 575 [V] | — | Fonctionne |
| Серьги / Подвеска | liens à onglet | Présents ; non cliqués (hors sujet bagues) [V] | — | Non testé : hors périmètre |
| Далее (étapes 1 à 4) | bouton submit | Charge l'étape suivante par requête GET `…/constructor/?STEP=n&IS_AJAX_FILTER=Y&…` (HTTP 200) [V] | — | Fonctionne ; latence de 1 à 2 s |
| Назад | bouton | Présent à chaque étape ; non testé [V] | — | Non testé |
| Champ budget | texte numérique | Accepte 300 000 saisi au clavier ; **ne réagit pas** à un remplissage programmatique (les champs `price-visible` et `SUM` sont liés par script) [V] | filtre 370 paires | Fonctionne au clavier |
| Curseur de poids et champs от/до | curseur + 2 champs | Affichés (0,14 à 1,29) ; non modifiés [V] | — | Non testé |
| 11 formes de pierre | pictogrammes (liens) | Clic sur le rond : 370 → 369 ; autres formes grisées au départ ; non testées une à une [V] | filtre | Rond testé seul ; 10 non testés |
| Белое золото | lien (constructor-rims) | Sélectionné ; compteur inchangé ; aperçu inchangé [V] | non visible | Fonctionne sans effet visible |
| Платина | lien | Idem [V] | non visible | Fonctionne sans effet visible |
| Желтое / Комбинированное золото, Серебро | liens | Présents ; non cliqués [V] | — | Non testé |
| Сортировать по : Цене | lien | URL `?SORT_FIELD=PROPERTY_PRICE&SORT_ORDER=desc` ; non suivi [V] | — | Non testé |
| Показать еще | lien | Pointe vers `?PAGEN_1=2` ; non suivi [V] | — | Non testé |
| Заказать оправу | lien | Pointe vers `/local/ajax/order_rim.php` (formulaire de commande de monture) ; non ouvert [V] | — | Non testé : formulaire |
| В корзину (paires) | bouton | **Non cliqué** : panier `/personal/cart/` interdit par robots.txt [V] | affiché « 0 руб. » | Non testé, interdit |
| Задать вопрос? | lien | Pointe vers `/ajax/feedback.php` (chemin `/ajax/` interdit) ; non ouvert [V] | — | Non testé, interdit |
| Сравнение / Избранное (en-tête) | liens | `/compare/`, `/wishlist/` ; non ouverts [V] ; `/catalog/compare.php` interdit | — | Non testé |
| Recherche (« Например: круглый бриллиант ») | champ + bouton | Présent ; non utilisé [V] | — | Non testé |
| Принять и закрыть (cookies) | bouton | Ferme la bannière [V] | — | Fonctionne |
| Telegram (flottant, mobile) | bouton | Visible sur m.brilliant.ru ; non ouvert (aucune conversation ouverte) [V] | — | Non testé |
| Téléphones +7 495 227 55 50, +7 964 712 97 96 | liens tel: | Présents (WhatsApp mentionné sur la page livraison) [V] | — | Non testé |

Fiche d'une bague de l'étape « prêt-à-monter » (https://www.brilliant.ru/catalog/jewelry/koltso-s-brilliantom-0-50-karata-kn65k-01w/) [V] :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| В КОРЗИНУ | lien | Non cliqué : panier interdit | « От 215 200 руб » | Non testé, interdit |
| КУПИТЬ В 1 КЛИК | lien | Pointe vers `/ajax/oneclick.php?tov_id=14803` (chemin `/ajax/` interdit) | — | Non testé, interdit |
| Vignettes de galerie | 3 images `medialibrary` | Agrandissement par lien image ; non parcouru | — | Non testé |
| Liens de rubriques | liens | « Помолвочные кольца с бриллиантом », « Классические помолвочные », etc. | — | Non testé |

Catalogue https://www.brilliant.ru/catalog/pomolvochnye-koltsa/ [V] : champs `WEIGHT1`/`WEIGHT2` (1,37 à 6,5), prix 107 000 à 11 400 000 ₽, boutons « Поиск » et « Сброс », tri par prix ou poids de l'article, 4 pages et « Показать все » (32 par page) ; non actionnés (URL de filtres : à ne pas automatiser).

## Options disponibles

- **Type d'article** : bague, boucles d'oreilles, pendentif [V].
- **Budget** : montant libre, minimum affiché 25 780 ₽ [V].
- **Pierre** : poids 0,14 à 1,29 ct pour ce budget ; 11 formes (rond, princesse, coussin, asscher, ovale, émeraude, poire, triangle, marquise, radiant, cœur) [V pour les icônes, noms [I] d'après le menu].
- **Monture** : or blanc, or jaune, or combiné, argent, platine [V]. Or rose absent de la liste [V].
- **Menu du site** (rubriques de bagues, page lue) : 1 diamant, 3 diamants, pavé, halo, serti clos ; diamants jaunes, bruns, noirs ; saphirs, rubis, émeraude, tanzanite, alexandrite, etc. [V].
- **Compteurs de montures** : bagues or blanc 119, or jaune 42, or combiné 0 [V].
- Titre : or 585 (« Au 585 (белое) ») pour la bague vue [V]. Aucun choix 14 / 18 k : le site annonce l'or 585 [V].
- **Origine** : pierres naturelles de Yakoutie ; aucun diamant de laboratoire vu dans les pages lues [I].
- **Gravure, taille de doigt** : fiche : « Размеры : Любой » ; ajustement de taille +1 500 ₽ [V]. Pas de gravure vue [I].

## Prix, délais, retours, garanties

- **Prix** : prix de départ « От … руб » dès 107 900 ₽ (bague au diamant noir) dans le catalogue des bagues de fiançailles ; bague or blanc 0,50 ct : « От 215 200 руб » [V]. Aucune décomposition (or, pierre, façon) : la fiche donne seulement « bague = monture kn65k-01w + diamant certifié 0,50 ct, caractéristiques 4/7a » [V].
- Option : « Центральный бриллиант можно подобрать любой Кр57 от 0.30 до 1 карата », prix précis sur demande au responsable [V].
- **Délais** : assemblage 1 à 3 jours ; sur mesure 3 à 4 semaines ; page « заказ » : 2 à 3 semaines (deux chiffres différents sur deux pages) [V].
- **Livraison** : SDEK, **prépaiement 100 %**, colis assuré, prix calculé avec le responsable ; retrait au showroom [V]. Aucun frais affiché.
- **Retours** : politique de retour non trouvée dans les pages lues ; la page « garanties » donne les documents remis (chèque, certificat, expertise MGU payante) [V].
- **Garanties** : garantie à vie sur le sertissage (page atelier) [V]. Poinçon (chambre d'essai de Russie) sur chaque bijou, avec marque du fabricant [V].
- **Paiement** : carte bancaire (ticket de terminal cité) ; moyens du panier non vus [V].

## Confiance et service

- **Avis** : 44 avis, lien « ОТЗЫВЫ » (page `/otzyvy-o-brilliant-ru/`) ; contenu non lu [V].
- **Certificats** : certificats MGU (centre de gemmologie de l'université de Moscou), YGL (laboratoire de Yakoutie), Chambre d'essai ; pas de GIA/IGI [V].
- **Service** : téléphone, WhatsApp, bouton Telegram, showroom du lundi au vendredi 11 h à 20 h, samedi sur rendez-vous [V].
- **Preuves de fabrication** : atelier décrit avec étapes (esquisse, 3D, cire, fonte, chambre d'essai) ; photos d'« exemples de nos réalisations » ; **aucune vidéo de fabrication ni suivi de commande** vu [V pour l'absence dans les pages lues].
- **Réputation** : indicateurs Yandex (240) en pied de page [V].

## Points forts à retenir pour JR Diamond

1. **Compteur de combinaisons qui se réduit à chaque étape** (763 → 575 → 370 → 369) : on voit combien d'options restent sans quitter le parcours. Preuve : lecture du compteur « Вам подойдет » à chaque étape, 24/11.
2. **Budget demandé avant la forme** avec un plancher affiché (« минимальная стоимость товара: 25 780 руб. ») : évite les parcours sans issue. Preuve : étape 2.
3. **Pierre et monture séparées, ensemble en 1 à 3 jours, sertissage offert** : promesse de rapidité claire. Preuve : fiche bague kn65k-01w, page atelier.
4. **Page « Гарантии »** qui liste les documents remis (chèque, certificat, expertise payante) et les organismes certificateurs avec leur numéro d'agrément. Preuve : https://www.brilliant.ru/warranty/.
5. **Avis comptés et lien direct** (44). Preuve : en-tête.
6. **Ajustement de taille chiffré sur la fiche** (+1 500 ₽). Preuve : fiche bague.

## Défauts observés

- **L'aperçu monture + pierre est resté à « 0 руб. »** avec un pictogramme d'appareil photo (`no_photo.png`) pendant les 4 étapes et plus de 3 s après chaque clic : le compteur change mais aucune carte de produit ne s'affiche. Non établi si c'est un défaut du site ou de notre environnement (images lazy ou requête interdite aux robots) [V pour l'observation, cause [S]].
- Les choix de monture (or blanc, platine) ne changent ni le compteur ni l'aperçu [V].
- Deux délais de fabrication différents (3 à 4 semaines, 2 à 3 semaines) selon la page [V].
- Pas de choix de titre d'or (585 seul), pas de gravure, pas de diamant de laboratoire [V].
- Prix toujours « От … » sans décomposition ; la bague finale dépend d'un échange avec le responsable pour toute autre pierre que celle montrée [V].
- Livraison seulement avec prépaiement 100 %, frais non affichés [V].
- Version ordinateur : premier affichage lent (voir « Limites ») [V].
- Panier avec un bouton « 0 товаров - 0 руб. » qui mène à un chemin que robots.txt interdit aux robots : visiteur ordinaire non concerné [V].

## Limites de l'audit

- Panier, « Купить в 1 клик », « Задать вопрос », comparaison : **non ouverts** (chemins `/personal/`, `/ajax/`, `/catalog/compare.php` interdits par robots.txt). Pas de récapitulatif de panier, de moyens de paiement ni de frais de port affichés au panier.
- Aperçu des paires jamais rempli : impossible de vérifier l'effet du métal et de la pierre sur le prix et l'image du constructeur.
- Mesures de temps prises à travers le relais de l'environnement (Russie → relais), avec 502 intermittents : ordre de grandeur seulement. Ordinateur : DOM 9,1 s, chargement complet 11,7 s (1 mesure) ; iPhone : DOM 5,7 s (m.brilliant.ru), chargement 12,8 s ; le visuel principal du constructeur est un texte et des pictogrammes (pas de photo ni de 3D) : temps d'apparition = temps du DOM [V].
- Pas de 3D, 360°, vidéo ni essayage virtuel sur les pages lues [V].
- Onglets Серьги et Подвеска, 10 formes de pierre sur 11, Назад, curseur de poids non testés.
- Aucun contenu chargé de page d'avis, de blog ou d'encyclopédie.

## Sources

- https://www.brilliant.ru/constructor/ (parcours, contrôles, captures, 24/11/2026)
- https://m.brilliant.ru/constructor/?STEP=2&BACK=N&IS_AJAX_FILTER=Y&TIPNOMENKLATURY[]=Кольцо et `STEP=3&…&SUM=300000` (version mobile)
- https://www.brilliant.ru/catalog/pomolvochnye-koltsa/ et https://www.brilliant.ru/catalog/jewelry/koltso-s-brilliantom-0-50-karata-kn65k-01w/
- https://www.brilliant.ru/warranty/ · https://www.brilliant.ru/delivery/ · https://www.brilliant.ru/jewellers-workshop/ · https://www.brilliant.ru/yuvelirnye-izdeliya-na-zakaz/koltso-s-brilliantom-na-zakaz
- robots.txt de brilliant.ru (`Disallow: /ajax/`, `/personal/`, `/catalog/compare.php`)
