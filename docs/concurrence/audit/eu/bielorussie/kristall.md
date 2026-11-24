# Audit : Kristall (Кристалл), fabricant d'État de bijoux et de diamants, Gomel

- **Site** : ОАО « Гомельское ПО "Кристалл" » (holding « Кристалл-Холдинг », réseau de vente Белювелирторг) · **Adresse** : https://kristall.by/ · **Page de départ** : https://kristall.by/catalog/diamonds (sélecteur de diamants taillés) ; bagues : https://kristall.by/catalog/pomolvochnye
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 · **Statut : partiel** (pas de prix sur les bagues, pas d'achat en ligne visible ; filtres non actionnés car `robots.txt` interdit `*?*`).
- Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé. robots.txt : `Disallow: /assets, /login, /registration, */index*, *?*, *.doc` [V]. Aucune page interdite ouverte ; aucun fichier `/assets/*.doc` téléchargé.

## Parcours

| Étape | Options vues [V] |
|---|---|
| 1. Menu | О компании, Изделия (`/catalog`), Коллекции, Сувениры, Бриллианты (« Как выбрать », « Как купить »), Где купить, Скупка и обмен, Оптовым покупателям, Интернет-магазин, Услуги |
| 2. Catalogue de bagues | Sous-catégories : C бриллиантами, Cо вставками, C жемчугом, Без вставок, Обручальные, Помолвочные ; cases « Новинки », « Комплекты » ; filtres numériques `text-22` et `text-23` (champs « От / До ») |
| 3. Fiche bague | Photo (3 images, lightbox), référence, composition (poids et nombre de diamants, pierre), métal, couleur du métal, poids, taille avec plage, code article, « Комплект » (pendentif assorti), bouton « ГДЕ КУПИТЬ » |
| 4. Catalogue de diamants | Filtres : Форма огранки, Цена BYN (0 à 100 000), Вес (0 à 6 carats), Диаметр, Цвет (Классический / Фантазийный), Чистота (0 à 12), Качество огранки (A / Б), « Очистить фильтр », bouton « ПОКАЗАТЬ ЕЩЕ » |
| 5. Fiche diamant | Description (forme, poids, couleur, pureté, qualité de taille), prix, « ГДЕ КУПИТЬ », « ЗАДАТЬ ВОПРОС » |
| 6. Achat | Pas de panier : téléphone (infoline +375 17 395-7-395 / +375 29 395-7-395), ou magasin du réseau, ou usine à Gomel |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu principal (10 entrées) | liens | Pages 200 (`/catalog`, `/gde_kupit`, `/buy_exchange`, `/catalog/internet-magazin`…) | — | OK [V] pour ceux ouverts ; Коллекции, Сувениры, Услуги, О компании non ouverts |
| Langues EN / RU / CH / BL | liens | Sous-domaines `eng.`, `ch.`, `bel.kristall.by` | — | Non ouverts ; liens présents [V] |
| Recherche (`q`, « Найти ») | champ + envoi | Non utilisée : produit des adresses à paramètres (`*?*` interdit) | — | Non testé : robots.txt |
| Filtres bagues (Новинки, Комплекты, `text-22`/`text-23`, « Подобрать ») | cases, champs, envoi | Non actionnés : l'envoi charge `/catalog/?new=on&filtr_submit=…` (interdit par robots.txt) | — | Non testé : robots.txt |
| Filtres diamants (forme, prix, poids, diamètre, couleur, pureté, qualité) | cases, curseurs | Présents, 90 contrôles relevés (70 sur iPhone) ; non actionnés par prudence (réponse par adresse à paramètres probable) | prix filtrable | Non testé : robots.txt [I] |
| « Очистить фильтр » / « Очистить » | bouton / lien | Non actionnés | — | Non testé |
| « ПОКАЗАТЬ ЕЩЕ » (catalogues) | bouton | Non actionné (pagination dynamique, adresse inconnue) | — | Non testé |
| Vignettes de diamants (20 par page) | liens | Mène aux fiches `/product/…` (ex. `/product/brilliant21`) | prix affiché | OK [V] |
| Fiche diamant : image principale | lien « fancybox » | Ouvre un lightbox sur ordinateur ; sur iPhone le clic sur l'image échoue (élément non cliquable en émulation) | — | Ordinateur OK, iPhone en échec [V] |
| Fiche diamant : « ЗАДАТЬ ВОПРОС » | bouton | Ordinateur : fenêtre « Задать вопрос » avec Votre nom *, Votre téléphone *, Question, « ОТПРАВИТЬ » ; non remplie. iPhone : le bouton est en bas de page | — | OK [V], formulaire non envoyé |
| Fiche : « ГДЕ КУПИТЬ » | bouton | Mène à `/gde_kupit` (sélecteur de ville, liste de magasins avec carte Yandex) | — | OK [V] |
| Fiche bague : composition, « Комплект » | texte / lien | Montre le pendentif assorti (réf. P747) | aucun | OK [V] |
| `/catalog/internet-magazin` | page | Liste des articles « en ligne » (boucles, pendentifs : références J595, J270…) sans prix ni bouton d'achat | aucun | Vérifié [V] |
| « Скупка и обмен » | page | Conditions de rachat d'or et d'échange ; liste de 88 points de rachat | — | OK [V] |
| Bandeau de cookies | bouton « Хорошо » | Visible sur la fiche, couvre l'image sur iPhone | — | Constaté [V] |
| Icône « bvi » (version pour malvoyants) | lien | Présente dans l'en-tête ; non ouverte | — | Non testé |
| Réseaux sociaux (Instagram, VK, OK, Facebook) | liens | Non ouverts | — | Non testé |

## Options disponibles

- **Bagues** : catégories en 6 sous-groupes ; métal or ou argent ; or jaune, rouge, blanc, combiné ; pierres : diamant, émeraude naturelle, rubis, saphir, perle, etc. (filtre « Вставка » de la page des bagues avec diamants) [V]. Aucun choix de taille sur la fiche : la taille indiquée est celle de l'article, avec une plage d'ajustement (ex. « 17,5 (16,0 – 20,0) ») [V].
- **Diamants** : formes (ronde « КР-57 », ovale « ОВ », marquise « М », poire « Г », coussin « КРГ »…) déduites des références de pierre [I] ; couleur « Классический » ou « Фантазийный » ; pureté numérique 0–12 ; qualité de taille A ou Б [V, cases à cocher et fiche].
- **Services** : certificat (« passeport du diamant » indiquant l'origine naturelle), sertissage d'un diamant acheté dans l'atelier de la boutique de Gomel avec grille de tarifs, rachat et échange d'or, réparation [V, `/kak__kupit_brilliant`].

## Prix, délais, retours, garanties

- **Prix** : affiché pour les diamants (ex. fiche « Кр-57 1 (F Br)/12 Б », 1,79 ct : **5 575,02**, monnaie non écrite sur la fiche, le glyphe de la monnaie biélorusse s'affiche à l'écran) « sans remise, boutique de Gomel » [V]. **Aucun prix sur les fiches de bagues** : « наличие и стоимость » par téléphone [V].
- **Décomposition du prix** : aucune.
- **Délai** : livraison jusqu'à 7 jours, gratuite par coursier dans tout le pays, après appel d'un spécialiste dans les 4 heures ouvrées suivant « une commande en ligne » (le parcours de commande en ligne n'a pas été vu) [V, `/dostavka_i_oplata`].
- **Paiement** : à la réception, espèces, carte ou ERIP [V].
- **Retours** : « les articles de bonne qualité ne sont ni repris ni échangés » ; si refus injustifié, l'acheteur rembourse la livraison [V].
- **Garantie** : contrôle par l'inspection d'État des poinçons (Minsk) ; certification ISO 9001 ; étiquette avec code individuel et scellé aluminium [V, `/garantiya_i_servis`].
- **Diamants** : plus de 100 000 pierres taillées en stock ; « passeport » garantissant l'origine naturelle ; pierres exclusives de 2 à 3 ct et plus ; matière première du fournisseur ALROSA [V, `/kak__kupit_brilliant`, `/kak_vybrat_brilliant`].
- **Synthétique** : le site (diamants naturels) n'emploie pas le terme dans les pages lues ; la page en anglais affirme que le certificat garantit que la pierre n'est « pas synthétique » [V, extrait de recherche].
- **Langues** : russe, biélorusse, anglais, chinois [V]. **Devise** : BYN [I].
- **Temps d'apparition de l'image principale** (fiche diamant, depuis la requête) : 2,95 s sur ordinateur, 2,63 s sur iPhone ; page chargée (DCL) en 4,9 à 6 s [V, un passage].

## Confiance et service

- Licence n° 02200/21-00936 (ministère des Finances), numéro du registre du commerce, adresse de l'usine, téléphones des services de plaintes publics dans le pied de page [V].
- Pas d'avis clients, pas de photos ni vidéos de fabrication de commande, pas de suivi de commande [V].
- Visite guidée de l'usine annoncée (menu « Услуги → Экскурсионная программа ») [I, lien présent, non ouvert].
- Suivi d'audience Google Ads et Yandex Metrika chargés sur les fiches [V, requêtes réseau observées].

## Points forts à retenir pour JR Diamond

1. **Sélecteur de diamants taillés avec prix, poids, diamètre, couleur, pureté et qualité de taille** (preuve : `/catalog/diamonds`, 20 pierres par page, prix en BYN) : base pour un futur choix de pierre.
2. **Garantie d'origine par « passeport » et rappel de la règle légale** (pierre taillée et certifiée) (preuve : `/kak__kupit_brilliant`, eng.kristall.by/brillianty).
3. **Sertissage d'un diamant acheté séparément dans l'atelier** avec grille de prix publiée (preuve : `/kak__kupit_brilliant`) : confirme la demande pour « bijou de famille / ma pierre ».
4. **Étiquette à code individuel et scellé** sur chaque bijou (preuve : `/garantiya_i_servis`) : réponse à la peur de l'échange de pierre.
5. **Livraison gratuite par coursier sous 7 jours** et appel du vendeur dans les 4 heures (preuve : `/dostavka_i_oplata`).

## Défauts observés

- Aucun prix sur les fiches de bagues ; aucun panier ni paiement en ligne (le parcours « commande en ligne » mentionné n'existe pas côté visiteur).
- Aucune image de bague à 360° ou en 3D ; trois photos fixes ; en iPhone, l'image n'ouvre pas le lightbox.
- Filtres et recherche passent par des adresses à paramètres interdites aux robots ; l'état du site avec filtres n'a donc pas été vérifié.
- Page « Где купить » : sélecteur de ville dynamique, contenu vide à la lecture automatique [V].
- Pied de page très chargé (rapports, anticorruption), bandeau de cookies qui masque la photo sur mobile.
- Retours impossibles pour les articles de bonne qualité (aucune exception « sur mesure » à comparer).

## Limites de l'audit

- Filtres, recherche et « Показать еще » non actionnés (robots.txt `*?*`).
- Aucune conversation ni formulaire envoyés ; fenêtre « Задать вопрос » ouverte puis laissée vide.
- Pages Коллекции, Сувениры, Услуги, О компании, Экскурсии, version pour malvoyants, sous-domaines de langue et fichiers `.doc` de tarifs non ouverts.
- Mesures de temps : un passage, depuis un proxy d'agent.
- Devise des prix déduite (BYN) d'après les filtres « Цена, BYN » [V] et de l'affichage.

## Sources

Pages ouvertes en Chromium le 15/11/2026 (`robots.cjs` : AUTORISÉ) : https://kristall.by/ · https://kristall.by/catalog/diamonds · https://kristall.by/catalog/kolca · https://kristall.by/catalog/pomolvochnye · https://kristall.by/catalog/internet-magazin · https://kristall.by/product/brilliant21 · https://kristall.by/product/kolco-r606 · https://kristall.by/gde_kupit · https://kristall.by/kak__kupit_brilliant · https://kristall.by/kak_vybrat_brilliant · https://kristall.by/garantiya_i_servis · https://kristall.by/dostavka_i_oplata · https://kristall.by/buy_exchange · https://kristall.by/robots.txt.
Extrait de recherche : https://eng.kristall.by/brillianty.
Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/kristall/` (hors dépôt).
