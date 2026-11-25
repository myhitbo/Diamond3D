# Audit : EPL Diamond (ЭПЛ Даймонд), site kazakh

- Site : https://epldiamond.kz/ ; page de départ : https://epldiamond.kz/catalog/diamond-rings/engagement/ (bagues de fiançailles, filtres, prix) ; fiche testée : https://epldiamond.kz/product/koltso-iz-belogo-zolota-585-s-brilliantom-e4712kts10231151/
- Date : 15/11/2026. Appareils : ordinateur (Chromium 1366 px), affichage iPhone 13 (mesure de temps seulement).
- Statut : **partiel**. Catalogue, fiche, options de taille, pages de livraison, FAQ : lus. Ajout au panier : le clic a expiré (timeout 4 s), la page du panier a été ouverte et était vide.
- robots.txt : `Allow: /` (plan de site pointé vers epldiamond.ru) ; aucune adresse interdite ouverte [V]. Pas de configurateur.
- Marque : le texte de la fiche parle de « epldiamond.ru » pour la livraison en Russie ; le titre de la page catalogue dit « купить в Москве » ; le site kazakh indique « Нур-Султан » comme ville et une adresse légale à Astana [V]. Marque russe à storefront kazakh : non vérifié [I].
- Langues : russe, kazakh (bouton « ҚАЗ »). Devise : tenge (₸).
- Légende : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| étape | page | options |
|---|---|---|
| 1 | `/` accueil | menu : украшения, бриллианты, коллекции, Grace, SALE, доставка, оплата, о нас, код ЭПЛ [V] |
| 2 | `/catalog/diamond-rings/engagement/` | liste de bagues « помолвочные », filtres (prix, etc.), « Применить » → `/catalog/filter/diamond-rings/engagement/` [V] |
| 3 | fiche produit | taille du doigt, poids total des pierres, ajouter au panier, commande rapide, favoris, partager [V] |
| 4 | `/personal/cart/` | panier : vide faute d'ajout abouti [V] |

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| « Салоны и пункты выдачи » | bouton | ouvre le sélecteur de salons ; non actionné | sans objet | non testé : hors prix |
| « ҚАЗ » | bouton | bascule en kazakh ; non actionné | sans objet | non testé |
| Favoris (cœur) | lien/bouton | `/personal/favorite/` | sans objet | présent, non actionné [V lien] |
| Menu principal (9 liens) | liens | pages internes | sans objet | liens relevés, sans lien mort constaté (doc. delivery, payments, faq, fingermeter lues) [V] |
| Filtres du catalogue : « Сбросить », « Применить », 4 champs (curseurs de prix), « Спрятать фильтры » | boutons/entrées | présents ; valeurs non modifiées | sans objet | non testé : curseurs sans valeur lisible ; échec de lecture |
| Cartes produit (liste) | liens | ouvrent les fiches ; les titres contiennent « бриллиантом выращенным » (synthétique) ou « бриллиантом » (naturel) ; métaux : or blanc 585, or jaune 585, argent 925 | de 735 000 à 1 044 250 ₸ vus [V] | OK |
| Taille 16,5 / 17,0 / 17,5 (fiche) | boutons radio | sélection acceptée (le clic des deux dernières a réussi) | inchangé : 980 200 ₸ (784 160 ₸ avec remise de 20 %) | OK [V] |
| Poids total 2,047 / 1,035 / 1,035 / 1,027 ct | boutons radio | clic impossible par automate (élément non cliquable, 3 s) ; 1,027 est le poids sélectionné | non mesuré | **non testé** (clic échoué) |
| « Нет нужного размера ? » | lien ancre | `#is-not-size` | sans objet | présent [V] |
| « Как определить размер ? » | lien ancre | `#define-size` ; texte lu : enrouler un fil de 5 tours, diviser par 15,707 | sans objet | OK [V] |
| « ВСЕ ПРЕДЛОЖЕНИЯ И НАЛИЧИЕ В САЛОНАХ » | lien ancre | `#info-delivery` | sans objet | présent, non actionné |
| « БЫСТРЫЙ ЗАКАЗ » | lien ancre | `#fast-order` ; formulaire non rempli | sans objet | non testé : consigne (aucun formulaire) |
| « ДОБАВИТЬ В КОРЗИНУ » | bouton | clic à expiration (4 s) ; aucun appel d'ajout vu, panier vide | sans objet | **échec du test** (cause non établie : bouton masqué, lent ou protégé ; non reproduit) |
| « ПОДРОБНЕЕ О ДОСТАВКЕ » | lien | `#show-in-table` | sans objet | présent |
| « Поделиться » | lien | `#` | sans objet | présent, non actionné |
| Lien métal « Белое золото », taille « 16.5 », titre « 585 » | liens | vers filtres du catalogue (`/gold-white/`, `/size-16.5/`, `/585/`) | sans objet | OK (liens relevés) |
| « Форма », « Вес, ct », « Цвет », « Чистота » (en-têtes de caractéristiques) | liens | pages d'aide : taille, carat, couleur, pureté | sans objet | liens relevés, seule `/shop/fingermeter/` et `/shop/delivery/` lues |
| Pierre : « Бриллиант выращенный », forme « - », couleur 3, pureté 6 | lien/valeur | classe la pierre comme synthétique ; forme non renseignée ; échelle de couleur et pureté numérique (3 et 6) sans légende dans la fiche | sans objet | lu [V] |
| « Таблица "Карат - размер" » | lien | `/shop/caratsize/` | sans objet | présent |
| « Онлайн-пальцемер » | lien | `/shop/fingermeter/` | sans objet | page lue : outil pour mesurer la taille (détail non testé) |
| « ОСТАВИТЬ ОТЗЫВ » | lien | ouvre `#modal-review` ; non rempli | sans objet | non testé : consigne |
| Carrousel « ВАМ МОЖЕТ ПОНРАВИТЬСЯ » | flèches | produits liés | de 742 680 à 813 920 ₸ vus | présent [V] |
| Newsletter (champ e-mail) | formulaire | non rempli | sans objet | non testé : consigne |
| Vignettes de la galerie (fiche) | vignettes | 5 vignettes : bague, photo sur la main, détails ; non actionnées | sans objet | photo sur la main visible sur la capture [V] ; 360° ou vidéo : non vu |
| Visuel principal | image | affiché en 5,3 s (ordinateur) et 6,6 s (iPhone 13) | sans objet | mesure unique [V] |

## Options disponibles

- Métaux : or blanc 585, or jaune 585, argent 925 (liens de filtre et titres vus) [V] ; pas de platine observé [S].
- Pierres : diamant « выращенный » (synthétique, désigné ainsi) et diamants naturels (titre sans « выращенный ») ; poids total par offre (ex. 1,027 ct) ; couleur et pureté en échelle numérique [V].
- Tailles : 16,5, 17, 17,5 sur la fiche testée [V].
- Pas de configurateur, pas de choix de monture, de gravure ou de forme dans la fiche [V : absents].
- Outils : tableau carat/taille, couleur, pureté, taille en ligne, « Код ЭПЛ » (vérification d'authenticité en ligne) [V].

## Prix, délais, retours, garanties

- Prix catalogue : 980 200 ₸ barré, 784 160 ₸ « avec 20 % » (annoncé « conditions à confirmer auprès du manager ») pour une bague or blanc 585, 1,027 ct synthétique [V]. Autre bague vue : 1 044 250 ₸ → 835 400 ₸. Pas de ventilation or / pierre / façon [V].
- Livraison : gratuite à partir de 200 000 ₸ d'achat ; sous ce seuil payante, tarif auprès d'un manager ; délai non indiqué ; pas de livraison hors Kazakhstan [V : pages delivery et FAQ].
- Retours : « les bijoux ne sont pas repris ni échangés », sauf défaut d'usine non signalé [V : FAQ]. Mise à taille possible en salon [V].
- Garantie : 2 ans sur le sertissage (« закрепка ») ; garantie de qualité et d'authenticité ; code EPL [V].
- Paiement : la page « Оплата » ne donne pas de texte sur les moyens (section vide) ; comptes Kaspi Bank en KZT, RUB, USD, EUR cités [V].

## Confiance et service

- Salons physiques (page `/company/stores/`), numéro du service en ligne cité dans la FAQ ; chat Telegram lié [V].
- Avis : 0 avis sur la fiche testée ; 1 avis sur une autre fiche de bague en or jaune [V].
- Documents : « Код ЭПЛ » imprimé sur chaque bijou, « directe du producteur » [V].
- Mention du certificat : « certificat vérifiable dans tout laboratoire gemmologique » ; le type de certificat des bagues n'est pas indiqué dans la fiche [V].
- Pas de photos de fabrication ni de suivi de commande vus [V].

## Points forts à retenir pour JR Diamond

1. **Un « code » d'authenticité vérifiable en ligne pour chaque bijou** (page `/check-code/`) : idée à reprendre sous la forme d'un identifiant lié à la photo de fabrication. Preuve : menu « КОД ЭПЛ ».
2. **Étiquette claire du synthétique dans le titre de chaque produit** (« бриллиантом выращенным »). Preuve : cartes du catalogue.
3. **Garantie de 2 ans sur le sertissage, énoncée dans la fiche** : réponse à la peur de l'échange de la pierre. Preuve : bloc « Гарантия » de la fiche.
4. **Taille du doigt expliquée à côté du choix** (fil de 5 tours, divisé par 15,707, outil en ligne). Preuve : fiche et page fingermeter.
5. **Visuel du bijou porté (photo sur la main) dans la galerie de la fiche**. Preuve : capture de la fiche.

## Défauts observés

- Pas de configurateur : le client ne choisit ni la forme, ni la monture, ni la pierre [V].
- Remise de 20 % barrée sans condition lisible (« уточнить у менеджера ») ; le prix de base barré est affiché en premier [V].
- Aucun retour sur les bijoux ; aucune explication du prix [V].
- Option « poids total » (2,047 / 1,035 / 1,027 ct) non cliquable par automate : lisibilité des offres douteuse [V : échec de clic].
- Forme de la pierre non renseignée (« - ») sur la fiche testée ; couleur et pureté en chiffres sans légende [V].
- Le titre de la page catalogue dit « Москве » alors que la ville du site est Astana [V].
- Le bouton d'ajout au panier a expiré à notre test (cause inconnue) [V].
- Page « Оплата » sans contenu de moyens de paiement [V].

## Limites de l'audit

- Machine lente : scripts coupés à 300 s ; le panier n'a pas été testé jusqu'au récapitulatif, aucun frais de livraison ni moyen de paiement de panier relevé.
- Filtres du catalogue (curseurs de prix) non modifiés ; une seule fiche testée ; modes de vue de la galerie non tous actionnés.
- Pas de test de l'affichage iPhone au-delà du temps d'apparition.
- Aucun formulaire, chat ou avis rempli.

## Sources

- https://epldiamond.kz/ , https://epldiamond.kz/catalog/diamond-rings/engagement/ (276 contrôles relevés)
- https://epldiamond.kz/product/koltso-iz-belogo-zolota-585-s-brilliantom-e4712kts10231151/ (240 contrôles relevés)
- https://epldiamond.kz/shop/delivery/ , https://epldiamond.kz/shop/payments/ , https://epldiamond.kz/shop/faq/ , https://epldiamond.kz/personal/cart/ , https://epldiamond.kz/robots.txt
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/epl-diamond/` (hors dépôt)
