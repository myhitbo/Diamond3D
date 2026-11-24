# Audit Ugen Jewelry (ugenjewelry.ru)

- **Site** : UGEN Jewelry, version russe (boutique WooCommerce) ; bijoux en diamants « выращенные » (de laboratoire) [V].
- **Adresse** : https://ugenjewelry.ru/ ; page de départ : https://ugenjewelry.ru/product/elodie-round-diamond-ring/ (fiche à options) ; catalogue : https://ugenjewelry.ru/engagement-rings/engagement-rings-all/ (autorisé).
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026.
- **Appareils** : Chromium ordinateur (1366 × 900) ; affichage iPhone 13.
- **Statut** : **partiel**. Pas de configurateur ; fiche à options et catalogue vérifiés ; **panier interdit par robots.txt (`Disallow: /cart/`)** : le bouton « Добавить в корзину » n'a pas été cliqué, aucun récapitulatif de panier.
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options (observées) |
|---|---|
| Menu → Помолвочные кольца | Styles : солитер, паве, скрытый ореол, 3 diamants ; « Все помолвочные кольца » [V] |
| Catalogue (« Все помолвочные кольца ») | Filtre de prix 65 000 à 355 000 ₽ (2 champs numériques), bouton « Металл », bouton « ФИЛЬТРЫ », tri par popularité / note moyenne / prix croissant / prix décroissant [V] |
| Fiche Elodie (solitaire rond) | Métal (liste), poids en carats 0,5 / 1 / 1,5 / 2 (boutons radio), taille de doigt (15,5 à 17,5), quantité, « Добавить в корзину » [V] |
| Sous la fiche | Caractéristiques, comparaison des prix, garantie à vie, livraison, retour, durabilité, or recyclé, contrôle du processus [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Вес в каратах 0,5 | bouton radio | Sélectionné par défaut [V] | 77 000 ₽ | Fonctionne |
| Вес в каратах 1 | radio | Prix mis à jour [V] | 97 000 ₽ (+20 000) | Fonctionne ; photo inchangée |
| Вес в каратах 1,5 | radio | Prix mis à jour [V] | 117 000 ₽ | Fonctionne ; photo inchangée |
| Вес в каратах 2 | radio | Prix mis à jour [V] | 137 000 ₽ | Fonctionne ; photo inchangée |
| Металл | liste (`attribute_pa_metal`) | Une seule option listée : « Желтое золото » (la description annonce or blanc, jaune, rose 585) [V] | non visible | Fonctionne ; **choix limité** |
| Размер кольца | liste | 15,5 · 16 · 16,5 · 17 · 17,5 ; message « Пожалуйста, выберите размер кольца » [V] | — | Présent ; non actionné |
| Shape[] (liste de 10 formes) | liste dans le DOM | Круг, Овал, Груша, Эмиральд, Маркиз, Принцесса, Радиант, Ашер, Подушка, Сердце ; rôle sur la page non établi [V] | — | Non testé |
| Количество товара | champ | Présent [V] | — | Non testé |
| ДОБАВИТЬ В КОРЗИНУ | bouton submit | **Non cliqué** : panier interdit par robots.txt | — | Non testé, interdit |
| ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ | lien `#popupCounseling` | Ouvre une fenêtre de demande ; aucun champ détecté dans notre lecture ; rien envoyé [V] | — | Ouvert sans envoi |
| НАПИСАТЬ НАМ | lien mailto | `mailto:info@ugenjewelry.ru` [V] | — | Non testé |
| ХАРАКТЕРИСТИКИ / СРАВНЕНИЕ ЦЕН / БЕСПЛАТНАЯ ПОЖИЗНЕННАЯ ГАРАНТИЯ / ДОСТАВКА / ВОЗВРАТ / УСТОЙЧИВОСТЬ / ПЕРЕРАБОТАННОЕ ЗОЛОТО / ПОЛНЫЙ КОНТРОЛЬ ПРОЦЕССА | 8 accordéons | Textes lus (voir plus bas) [V] | — | Fonctionnent (contenu lu dans la page) |
| Galerie de la fiche | vignettes | 52 images dans le DOM dont des pictogrammes SVG de formes ; photo principale : une main avec bague (image générée ou studio, non établi) [V] | — | Non testé |
| Catalogue : min_price / max_price | 2 champs numériques | Présents (65 000 / 355 000) ; non modifiés [V] | — | Non testé |
| Catalogue : Металл, ФИЛЬТРЫ | boutons | Présents ; non ouverts [V] | — | Non testé |
| Catalogue : tri | liste (5 options) | Présente ; non actionnée [V] | — | Non testé |
| Recherche | champ | Présent ; non utilisé [V] | — | Non testé |
| Виртуальная встреча | lien | Page `/virtual-appointment/` (rendez-vous vidéo) ; page non lue [V] | — | Non testé |
| Formulaire e-mail du pied de page | champ + bouton | Présent ; non rempli [V] | — | Non testé |

## Options disponibles

- **Forme du diamant** (menu et catalogue de pierres) : rond, ovale, coussin, émeraude, princesse, radiant, marquise, asscher, poire, cœur, octogonale, coussin allongé ; diamants colorés (jaune, vert, bleu, rose, orange, rouge, noir, brun, violet) [V].
- **Carat** : 0,5 / 1 / 1,5 / 2 sur la fiche Elodie [V].
- **Métal** : « or blanc, jaune, rose 585 » dans la fiche ; une seule option (jaune) dans la liste [V]. Titre unique : 585 ; pas de 18 k, pas de platine sur cette fiche [V].
- **Origine** : diamants de laboratoire seulement (« Бриллиант, выращенный в лаборатории ») [V]. Caractéristiques de la fiche : couleur F+, pureté VS+ [V].
- **Monture** : 4 griffes, largeur moyenne 1,8 mm (fiche Elodie) [V].
- **Taille de doigt** : 15,5 à 17,5 sur la fiche [V].
- **Gravure** : non vue [I].

## Prix, délais, retours, garanties

- **Prix** : fourchette « ₽77 000 – ₽137 000 » en tête de fiche, prix exact selon le carat [V]. « Сравнение цен » : UGEN 85 500 ₽ pour 0,5 ct contre « от 302 000 ₽ » chez des marques de diamants extraits (comparaison de l'enseigne, non vérifiable) [V pour l'affichage, [S] pour la valeur].
- **Décomposition** : aucune (or, pierre, façon non séparés) [V].
- **Délais** : « Стандартная доставка (30 рабочих дней) » ; livraison gratuite et express gratuit dès 100 000 ₽ ; en dessous, frais calculés selon la destination ; colis assurés [V].
- **Retours** : 30 jours après livraison ; article en état d'origine avec documents et emballage ; **exclus : articles modifiés, personnalisés, fabriqués sur mesure, soldés** ; frais de livraison, droits et taxes non remboursés [V] (`/exchanges-returns-and-refunds/`).
- **Garanties** : réparation gratuite à vie des défauts de fabrication (preuve par photo ou vidéo) ; usure, perte, vol exclus [V].
- **Paiement** : moyens de paiement non vus (panier interdit) ; page `/payments/` : connexion réinitialisée lors de la lecture, non lue [V].

## Confiance et service

- **Certificat** : IGI pour tous les diamants (page d'accueil), « D à G en couleur, VVS à SI en pureté » [V].
- **Service** : consultation, e-mail, rendez-vous virtuel ; téléphone et WhatsApp non vus [V].
- **Avis** : tri « par note moyenne » présent dans le catalogue ; aucun avis lu [V].
- **Preuves de fabrication** : texte « полный контроль процесса » (de la croissance du diamant à la finition) ; aucune photo ni vidéo d'atelier lue, aucun suivi de commande [V].
- **Contenu pédagogique** : guides de bagues, de bagues de mariage, 4 C, tailles (« Найди свой размер ») [V].

## Points forts à retenir pour JR Diamond

1. **Prix instantané par carat** (77 000 → 137 000 ₽) sans quitter la fiche, avec la fourchette annoncée en tête. Preuve : 4 clics sur les boutons carat, prix lu à chaque clic.
2. **Comparaison de prix intégrée à la fiche** (« Сравнение цен ») : même idée que notre « prix expliqué », ici en comparaison avec le marché. Preuve : accordéon « Сравнение цен ».
3. **Garantie à vie et conditions de retour écrites dans la fiche**, y compris l'exception du sur mesure, avant l'achat. Preuve : accordéons « ВОЗВРАТ » et page `/exchanges-returns-and-refunds/`.
4. **Rendez-vous virtuel** annoncé à côté de la fiche. Preuve : lien « Виртуальная встреча » ; page non lue.
5. **Catalogue avec tri par prix et filtre de prix** (65 000 à 355 000 ₽). Preuve : champs `min_price` / `max_price` et liste de tri.

## Défauts observés

- **Pas de configurateur** malgré « Commencez par la monture, choisissez le diamant » sur la page de bagues ; aucun lien vers un assistant [V].
- **La photo ne change pas** quand le carat change (même visuel pour 0,5 à 2 ct) [V].
- **Option métal : une seule valeur** (or jaune) dans la liste alors que le texte annonce trois couleurs [V].
- **Délai de 30 jours ouvrés** (contre 14 chez nous) ; livraison gratuite seulement dès 100 000 ₽ [V].
- **Pas de décomposition de prix** ; aucune vidéo ni photo d'atelier [V].
- **Le catalogue de fiches est une traduction d'une boutique étrangère** : chaînes anglaises dans le code (« Send as an email », « Shape[] »), noms de produits en anglais (« Wheat chain necklace »), éléments mêlés [V].
- Premier affichage lent depuis notre environnement (voir « Limites ») [V].

## Limites de l'audit

- **Panier interdit** (`/cart/`) : pas de récapitulatif, de frais de port définitifs, de moyens de paiement ni de délai de panier. `/checkout/` est autorisé mais mène au panier : non ouvert.
- Pages `/payments/` et `/warranty-and-repair/` : connexion réinitialisée à la lecture ; non relues pour ne pas insister.
- Mesures de temps via le relais de l'environnement, ordre de grandeur seulement : ordinateur, DOM 11,3 s, chargement 14,5 s, plus grand élément (LCP) 11,4 s ; iPhone, DOM 8,6 s, chargement 13,0 s, LCP 8,7 s (1 mesure chacun) [V].
- Pas de 3D, 360°, AR, vidéo (aucun `<video>` ni iframe sur la fiche) [V].
- Seule la fiche Elodie a été actionnée ; autres fiches, filtre « Металл », « ФИЛЬТРЫ », tri et taille de doigt non actionnés.
- Aucune gravure ni option d'alliance de kiddouchin testée : pas de contrôle correspondant vu.
- Affichage iPhone : pas de défilement horizontal (largeur 390 = fenêtre) ; aucune autre vérification.

## Sources

- https://ugenjewelry.ru/product/elodie-round-diamond-ring/ (contrôles, prix, accordéons ; 24/11/2026)
- https://ugenjewelry.ru/engagement-rings/ et https://ugenjewelry.ru/engagement-rings/engagement-rings-all/ (catalogue, filtres)
- https://ugenjewelry.ru/exchanges-returns-and-refunds/ · https://ugenjewelry.ru/shipping-and-delivery/
- robots.txt de ugenjewelry.ru (`Disallow: /cart/`)
