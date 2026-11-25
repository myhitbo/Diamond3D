# Audit : Moshe Skapa, BrillRings (brillrings.ru) et isradiamond.ru (russe, prix sur demande ou en dollars)

| | |
|---|---|
| Site | Moshe Skapa, négociant et tailleur, membre de la Bourse du diamant (carte n° 3976), bureau 1141, bâtiment Maccabi, Jabotinsky 1, Ramat Gan (V : `/about/`, `/contact/`). Deux sites : **BrillRings** (bagues) et **isradiamond.ru** (diamants, montures, pierres de couleur) |
| Page de départ | https://brillrings.ru/catalog/zhenskie-koltsa/ (« Женские кольца », 24 + 1 produits sur 2 pages) ; fiche testée : `/catalog/detail/koltso-s-brilliantom-kushon/?oID=1520` ; second site : https://isradiamond.ru/opravy/obruchalnye-kolca/ |
| Date | 15/11/2026 (date fixée par la consigne ; exécuté le 25/11/2026 d'après l'horloge de la session) |
| Appareils | Chromium headless 1366 × 900 (locale ru-RU) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour le parcours ouvert au public : il n'y a **pas de panier ni de paiement** sur BrillRings ; sur isradiamond.ru le « panier » est une liste de demande de devis (« запрос »), allée jusqu'à son récapitulatif sans l'envoyer |
| robots.txt | BrillRings : Bitrix standard, `Disallow: /*PAGEN`, `/*ORDER_BY`, `/*ADD_TO_COMPARE_LIST`, `/search/*`, `/filter/*` (racine) ; isradiamond.ru : OpenCart, `Disallow: *?sort*`, `*?limit*`, `*?filter*`, `/simplecheckout`, `/search/` (V). Aucun défi. Page 2 de BrillRings (`?PAGEN_1=2`) INTERDITE : non ouverte ; tri et affichage par 50/75/100 d'isradiamond.ru : non actionnés |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

**Pas de configurateur**, pas de 3D, pas de 360°, pas de vidéo (V : 66 contrôles à l'ordinateur et 81 sur iPhone sur la page de départ, aucun de ce type). Aucune bague n'a de prix : « Цена по запросу » sur les 24 cartes (V).

## Parcours

| Étape | Options | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Catalogue « Женские кольца » (BrillRings) | filtre « Тип оправы » : Классическая / Бриллиантовая / 2 и более вставок ; tri « по популярности » / « по цене » ; pagination | aucun prix (« по запросу ») | sans objet |
| 2. Fiche de bague | métal Золото / Платина ; couleur d'or Белое / Желтое / Розовое ; photos (3 liens) ; onglets d'ancres Фото / Описание / Консультация | aucun prix | métal : état « actif » change, **images inchangées** (V) |
| 3. « Запросить стоимость » | formulaire : nom, e-mail, téléphone, deux boutons radio | sans objet | ouverture d'une fenêtre |
| 4. isradiamond.ru : liste « Обручальные кольца » | 7 tris, 50/75/100 par page, devise USD/RUB, « Добавить к запросу » | « по запросу » ×24 | miniatures |
| 5. isradiamond.ru : fiche | taille (champ libre), couleur d'or blanc / rose / jaune, « Добавить к запросу », « Задать вопрос » | prix « по запросу » ; liste de demande : « 1 x $0 » | aucun |
| 6. isradiamond.ru : liste de demande | récapitulatif + « Отправить запрос » (non cliqué) | **$0** | miniature |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre « Классическая » + « Показать подходящие » | case + bouton (GET) | liste filtrée : 11 produits, URL `/filter/rim_type-is-…/apply/` (V) | aucun prix | fonctionne |
| Filtre « Бриллиантовая » | idem | 24 produits sur la première page (V) | idem | fonctionne |
| Filtre « 2 и более вставок » | idem | 1 produit (« avec trois diamants ronds ») (V) | idem | fonctionne |
| « Сбросить фильтр » | bouton | non cliqué | — | non testé |
| Tri « по популярности » | lien `?sort=SORT&order=desc` | non actionné | — | non testé |
| Tri « по цене » | lien `?sort=PRICE&order=desc` | page rechargée, **même premier produit** (aucun prix à trier) (V) | aucun | **sans effet visible** |
| Pagination « 2 » | lien `?PAGEN_1=2` | INTERDIT par robots.txt, non ouvert | — | non testé : interdit |
| Cartes produit (24) et « Узнать больше » / « Подробнее » | liens | ouvrent une fiche (1 ouverte) | « по запросу » | fonctionne |
| Métal « Золото » / « Платина » | bascule | état actif change ; photos identiques (V) | aucun | fonctionne, sans effet visuel |
| Couleur d'or « Белое » / « Желтое » / « Розовое » | pastilles | clic par texte impossible (délai dépassé) ; « Белое » actif par défaut (V) | aucun | **non testé** (clic échoué) |
| Ancres « Фото » / « Описание » / « Консультация » | liens `#main`, `#text`, `#stuff` | défilement dans la page (V : adresse inchangée) | aucun | fonctionne |
| Photos de la fiche (3 liens vers `/upload/iblock/…`) | liens | pas de visionneuse ouverte (V) | aucun | **effet non constaté** |
| « Запросить стоимость » | bouton | ouvre le formulaire (nom, e-mail, téléphone, 2 radios) (V) | aucun | fonctionne, **non rempli** |
| « Спросить » (chef des ventes Юрий) | bouton | formulaire de question, non testé | aucun | non testé : formulaire |
| « Заказать звонок » (pied de page) | bouton | non actionné | aucun | non testé : formulaire |
| « Каталог бриллиантов » (bandeau de la fiche) | lien | non ouvert | aucun | non testé |
| Téléphones `+97233761038`, `+74994905138`, courriel `sales@brillrings.ru` | liens `tel:`, `mailto:` | non actionnés | — | non testé |
| Menu : КОМПАНИЯ, КАТАЛОГ КОЛЕЦ, КОНТАКТЫ, ВОПРОС—ОТВЕТ, БЛОГ | liens | pages `/about/`, `/catalog/`, `/contact/`, `/faq/` ouvertes (200) ; blog non ouvert | — | fonctionne |
| isradiamond.ru : devise « USD ▾ » (USD, RUB) | menu | s'ouvre avec 2 entrées ; choix non validé | prix en USD | fonctionne (ouverture) |
| isradiamond.ru : « Добавить к запросу » | bouton | fenêtre « ТОВАР ДОБАВЛЕН К ЗАПРОСУ » avec « ПРОДОЛЖИТЬ / ПОСМОТРЕТЬ » ; compteur (1) (V) | **« 1 x $0 »** | fonctionne ; prix à zéro |
| isradiamond.ru : « Отправить запрос » | bouton | non cliqué (envoi) | — | non testé |
| isradiamond.ru : tri (7 entrées) et « Показать 50/75/100 » | listes | non actionnés : adresses `?sort`, `?limit` interdites | — | non testé : interdit |
| isradiamond.ru : taille de bague | champ texte | présent, sans liste de tailles | aucun | non testé |
| isradiamond.ru : couleur d'or blanc / rose / jaune | pastilles | présentes | aucun | non testé |
| isradiamond.ru : « Задать вопрос », formulaire (nom, téléphone, courriel, commentaire, case) | formulaire | non rempli | — | non testé |
| isradiamond.ru : liste de diamants (forme, couleur, pureté, taille, poids, certificat, prix en $) | tableau | exemple : 1,06 ct L SI2 GIA à 868 $ (V) | prix en dollars | lecture seule |

Relevés `controls.cjs` : BrillRings catalogue 66 (ordinateur) / 81 (iPhone) ; isradiamond.ru liste 125 / 103 (V).

## Options disponibles

- BrillRings : métal or ou platine ; or blanc, jaune, rose ; type de monture classique, « diamant » (halo ou pavé), deux pierres ou plus ; formes de pierre dans les noms (rond, cushion, émeraude, poire, princesse, ovale, radiant) (V).
- Pierres : « огромный выбор GIA », « HPHT, облагороженные и выращенные бриллианты по невероятно низким ценам » (V, bandeau de la fiche). Choix de la pierre par catalogue séparé ou rendez-vous.
- isradiamond.ru : diamants naturels (« БРИЛЛИАНТЫ НАТУРАЛЬНЫЕ ») avec tableau forme / couleur / pureté / taille / poids / certificat / prix ; diamants de couleur (fancy), pierres précieuses, montures, boucles d'oreilles, pendentifs, croix, bracelets (V, menu).
- Pas de taille de doigt, gravure, délai, ni panier chez BrillRings (V).

## Prix, délais, retours, garanties

- **BrillRings** : « Цена по запросу » sur toutes les bagues ; mention « Цена производителя на оправы и камни » sans chiffre (V). Fiche : « Доступен под заказ ».
- **isradiamond.ru** : bagues « по запросу » (24 sur la liste) ; diamants en dollars, du 1 ct L SI2 à 868 $ au 9,33 ct D IF à 619 064 $ (V, listes) ; « Указана цена готового изделия на условиях самовывоза от производителя в Израиле » (V, fiche) ; devises USD ou RUB.
- Poids d'or donné sur la fiche isradiamond.ru : 3,50 g, titre 750, petites pierres 0,33 ct G / VS (V).
- **Livraison** (`/faq/`, V) : en Russie et dans la CEI, **impossible pour un particulier** (douane réservée aux sociétés titulaires de licences, droits et taxes de 35 % annoncés) ; livraison possible aux États-Unis et en Europe avec taxes locales ; hors taxes en Suisse et aux États-Unis ; détaxe des touristes (remboursement de TVA à l'aéroport ou à la Bourse) ; bijou en monture jusqu'à 10 000 € exempté à l'entrée en Russie par avion (affirmations du site, non vérifiées).
- **Achat** : « посетить наш офис на Алмазной бирже », monture choisie parmi des modèles ou sur commande (V, FAQ). Rendez-vous du dimanche au jeudi 9 h-18 h.
- Retours, garanties, délais de fabrication : **aucune information** trouvée sur les deux sites (V : FAQ, contact, fiche).
- **Certificats** : GIA ; micro-gravure du numéro sur le rondiste, vérifiable au microscope au bureau (V, FAQ).
- **Libellé du synthétique** : « выращенные бриллианты » avec « HPHT » et « облагороженные » (traités) (V).

## Confiance et service

- Membre de la Bourse, n° 3976 ; « фабрика по огранке » ; plus de 30 ans ; numéro d'entreprise israélien 008316341 (V, `/about/`). Copyright du site : 2021.
- Responsable des ventes nommé (« Юрий »), numéros en Israël, à Moscou (`+7 499…`), WhatsApp et Viber pour le russe sur isradiamond.ru (V).
- Aucun avis client, aucune photo ou vidéo d'atelier, aucun suivi de commande, aucun suivi de fabrication (V).
- Visuels : photos de modèles (3 par fiche) ; pas de rendu de la pierre choisie.

## Points forts à retenir pour JR Diamond

1. **Crédibilité de la Bourse** : numéro de membre, adresse du bureau, rendez-vous annoncés (V, `/about/`, `/contact/`) : à placer en évidence chez JR Diamond.
2. **Vérification de l'authenticité expliquée simplement** : micro-gravure du numéro de certificat sur le rondiste, contrôlable au microscope (V, FAQ) : même idée que « pierre filmée », mais seulement sur place.
3. **FAQ qui répond aux questions fiscales du touriste** (détaxe, douane, pays livrés) (V) ; pour JR Diamond, un équivalent pour les olim et pour la France (hypothèse).
4. **Filtre de type de monture** simple, avec compteurs d'effet visibles (11 / 24 / 1 résultats) (V).
5. **Tableau de diamants avec tous les critères et le prix** sur isradiamond.ru (V, liste) : modèle pour une grille de pierres.

## Défauts observés

- Aucun prix de bague ; sur isradiamond.ru la demande affiche « 1 x $0 » et un total de $0 (V).
- Pas de panier, pas d'achat en ligne : tout passe par la visite ou le formulaire (V).
- Les boutons de métal ne changent pas la photo ; clic sur les couleurs d'or non fonctionnel dans le test (V).
- Tri « по цене » sans effet visible (aucun prix) (V).
- Livraison pour la Russie impossible pour les particuliers (V, FAQ) ; aucune information sur retours, garanties, délais (V).
- Site visuellement ancien (copyright 2021, Bitrix) ; LCP du visuel dû à une image de fond (élément `DIV`) (V).
- isradiamond.ru : liste lente à la première mesure (événement load 14,2 s) ; fautes de frappe dans les titres (« обручальое », « Бриллиатовое ») (V).

## Limites de l'audit

- Aucun formulaire rempli ni envoyé ; aucun appel WhatsApp ou téléphonique ; « Заказать звонок », « Спросить », « Задать вопрос » non actionnés.
- La page 2 de BrillRings, le tri et l'affichage par 50/75/100 d'isradiamond.ru ne sont pas ouverts (robots.txt). Les couleurs d'or de BrillRings n'ont pas pu être cliquées. Une seule fiche de chaque site a été explorée à fond.
- Une liste de demande a été créée sur isradiamond.ru (1 bague, session sans compte) ; rien n'a été envoyé.
- Mesures : une par appareil, depuis un serveur hors d'Israël.

## Mesure du visuel principal

| Page | Appareil | Plus grand élément (LCP) | load |
|---|---|---|---|
| BrillRings catalogue | ordinateur / iPhone | 2,1 s / 2,2 s (image de fond, `DIV`) | 3,4 s / 3,6 s |
| BrillRings fiche | ordinateur / iPhone | 3,9 s (fond) / 4,2 s (image `0012c114….jpg`) | 5,0 s / 3,6 s |
| isradiamond.ru liste | ordinateur | 1,9 s (image `rh4639w-302x302.jpg`) | 14,2 s |
| isradiamond.ru fiche | ordinateur | 2,2 s (image `rh5645w-424x424.jpg`) | 7,8 s |

## Sources

- https://brillrings.ru/catalog/zhenskie-koltsa/ ; fiche : https://brillrings.ru/catalog/detail/koltso-s-brilliantom-kushon/?oID=1520 (V)
- https://brillrings.ru/about/ ; https://brillrings.ru/contact/ ; https://brillrings.ru/faq/ ; https://brillrings.ru/robots.txt (V)
- https://isradiamond.ru/opravy/obruchalnye-kolca/ ; https://isradiamond.ru/brilliatovoe-obruchaloe-kolco-iz-belogo-zolota ; https://isradiamond.ru/brillianty/ ; https://isradiamond.ru/robots.txt (V)
- Inventaire du territoire : `INVENTAIRE.md` du même dossier
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/il/moshe-skapa/`
