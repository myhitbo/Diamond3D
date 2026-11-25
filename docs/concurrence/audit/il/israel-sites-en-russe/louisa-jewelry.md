# Audit : Louisa Jewelry (louisa.co.il/ru, russe, ₪)

| | |
|---|---|
| Site | Louisa Jewelry (Ювелирные изделия Louisa), Tel-Aviv, rue Shontsino 11, retrait sur rendez-vous |
| Page de départ | https://louisa.co.il/ru/product-category/rings/%D7%98%D7%91%D7%A2%D7%95%D7%AA-%D7%90%D7%99%D7%A8%D7%95%D7%A1%D7%99%D7%9F/ (catégorie « bagues de fiançailles », 18 produits, 2 pages) ; fiche testée à fond : « Кольцо в форме овального лотоса » (`/ru/product/טבעת-אירוסין-אובל-לוטוס/`) |
| Date | 15/11/2026 (date fixée par la consigne ; exécuté le 25/11/2026 d'après l'horloge de la session) |
| Appareils | Chromium headless 1366 × 900 (locale en-US) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** jusqu'à la page du panier ; le paiement n'a pas été ouvert (règle). Mobile : fiche et catégorie relevées, panier non rejoué |
| robots.txt | `Disallow` limité à `?add-to-cart=`, `?*add-to-cart=`, `/wp-admin/` et journaux WooCommerce (V). Aucun défi Cloudflare ni captcha |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

**Pas de configurateur** : une fiche produit WooCommerce à variations (couleur d'or, taille, carat central). Pas de 3D, pas de 360°, pas de vidéo de la bague (V : aucune de ces vues dans les 80 contrôles de la fiche). Les images des variations sont nommées `RENDERS.3443.3` (rendu précalculé) à côté de photos portées à la main (V, captures).

## Parcours

| Étape | Options | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Catégorie bagues de fiançailles | 18 produits en grille, tri (4 entrées), pagination (page 2), bandeau « kit de mesure » | prix ou fourchette sur chaque carte (ex. « ₪5 490 – ₪6 490 ») | sans objet |
| 2. Fiche : couleur d'or 14 k | blanc, jaune, rose (pastilles ; jaune présélectionné) | **aucun** : ₪5 990 inchangé pour les trois (V) | la donnée de variation contient une image par combinaison (V, `data-product_variations`), changement visuel non vérifié |
| 3. Fiche : taille | liste de 16 entrées : « Я не знаю — помогите мне выбрать », puis 8/48 à 22/62 (taille israélienne / française, avec libellé Petit, Moyen, Grand, Très grand) | **aucun** (V) | aucun |
| 4. Fiche : carat central | 1,50 / 2,00 / 2,50 (pastilles) | **oui** : 5 490 / 5 990 / 6 490 ₪ (V) | non vérifié |
| 5. Quantité, « Купить », « Добавить в корзину », « представителю ОНЛАЙН » | voir tableau | total = prix × quantité | aucun |
| 6. Panier | ligne récapitulative, coupon, livraison gratuite ou retrait, total | ₪5 490 pour 1,50 ct, jaune, 13/53 (V) | miniature |

Pas de forme de pierre, de monture, de gravure, d'origine naturel ou synthétique ni de platine à choisir sur la fiche : une fiche = une forme et une monture (V). L'origine est annoncée dans le texte (« выращенный в лаборатории »).

## Contrôles vérifiés

Relevé `controls.cjs` : fiche 80 contrôles (ordinateur), 75 (iPhone) ; catégorie 68 (ordinateur), 63 (iPhone) (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles couleur d'or (blanc, jaune, rose) | pastilles | sélection ; jaune par défaut | aucun (V) | fonctionne |
| Taille de doigt (16 entrées, dont « aidez-moi à choisir ») | liste | sélection ; 22 tailles ≠ prix | aucun (V) | fonctionne |
| Carat 1,50 / 2,00 / 2,50 | pastilles | sélection ; affiche le prix de la variante sous la fourchette | 5 490 / 5 990 / 6 490 ₪ (V) | fonctionne |
| « ясно » (réinitialiser) | lien | efface les choix | non testé | non testé : sans intérêt |
| Quantité − / + / champ | bouton, champ | quantité de la ligne | proportionnel (I) | non testé |
| « ДОБАВИТЬ В КОРЗИНУ » | bouton (POST sur la page produit) | message « ajouté au panier », mini-panier ₪5 490 (1), bouton « mini-panier » apparaît | +5 490 ₪ (V) | fonctionne |
| « КУПИТЬ » (`name=buy-now`) | bouton | mène directement au paiement (I, nom du champ) | non testé | **non cliqué** : bouton de paiement (règle) |
| « представителю ОНЛАЙН » | bouton WhatsApp | non ouvert ; le pied de page donne `api.whatsapp.com/send?phone=972509500747` (V) | non testé | non testé : conversation interdite |
| Zoom (loupe) | lien | sans lightbox PhotoSwipe détecté après clic (`.pswp` absent) (V) | aucun | **effet non constaté** |
| Vignettes de la galerie | images | présentes sur la capture ; sélecteur standard introuvable, effet non testé | aucun | non testé |
| Onglet « Описание » | onglet | description longue, histoire de la bague « Лотос » née d'un client (V) | aucun | fonctionne |
| Onglet « Отгрузки » | onglet | 5 questions de livraison (retrait, gratuit, assuré, 2 à 5 jours ouvrés, suivi) (V) | aucun | fonctionne |
| Onglet « Вопросы и Ответы » | onglet | vrais diamants, certificat, taille, délais, mise à taille (V) | aucun | fonctionne |
| « Руководство по размерам колец » / « Таблица размеров » | liens | pointent vers une page hébraïque (`/ru/איך-למדוד-מידת-טבעת…`) (V) ; page non ouverte | aucun | non testé |
| « В соответствии с условиями » | lien | `/ru/terms/` (lu, voir plus bas) | aucun | fonctionne |
| Bandeau « набор для замеров » (en-tête) | lien | fiche du kit de mesure, remboursé à l'achat d'une bague (V, texte du bandeau) | kit non lu | non testé |
| Tri : popularité / récent / « Вроде дешевый ликер » / prix décroissant | liste | 4 entrées ; la 3e est une erreur de traduction (« prix croissant ») (V) | non testé | non testé : tri non actionné (`?orderby=` autorisé mais sans intérêt) |
| Pagination « 2 », « → » | liens | non ouverts | aucun | non testé |
| Cartes produit (18) | liens | ouvrent une fiche | prix par carte | fonctionne (1 fiche ouverte) |
| Menu : О НАС, АКЦИИ, СВЯЗАТЬСЯ С НАМИ, Кольца, браслеты, серьги, цепи | liens | pages `/ru/about/`, `/ru/product-category/sales/`, `/ru/contact/`… | aucun | non ouverts, sauf livraison et règles |
| Sélecteur de langue « Russian▼ » | menu | non actionné | aucun | non testé |
| Panneau d'accessibilité (≈ 14 réglages : contraste, taille de police, soulignement) | panneau | présent (V, texte du panier) | aucun | non testé |
| Bandeau cookies « Я ПОНЯЛ » | bouton | ferme le bandeau (V) | aucun | fonctionne |
| Panier : « ПРИМЕНИТЬ КУПОН », « ОБНОВИТЬ КОРЗИНУ », retrait ligne, quantité, choix livraison/retrait | champs, boutons | présents (V, liste des contrôles) | aucun | non actionnés |
| Panier : bouton « БЕЗ ОПЛАТЫ » | lien | vers `/ru/checkout-2/` | aucun | **non cliqué** (paiement) |
| Chat | — | aucun widget de chat détecté ; téléphone `tel:03-6776924`, WhatsApp, courriel `office@louisa.co.il` en pied de page (V) | aucun | tel et WhatsApp non ouverts |

## Options disponibles

- Métal : or 14 k en jaune, blanc, rose sur la fiche (V). Le texte ajoute « 14 ou 18 carats » et « diamants naturels ou de laboratoire » **sur commande** (V, description). Pas de platine sur la fiche.
- Pierre : fiche « Лотос » = ovale de laboratoire, 1,50 / 2,00 / 2,50 ct, « ED, VS-VVS, polissage excellent », certificat IGI, 6 petites pierres de côté (0,08 ct au total) (V).
- Tailles : 8/48 à 22/62 (V). Gravure, monture, griffes : non proposées en option (V).
- Services : kit de mesure remboursé (V, bandeau), vidéo de vérification au microscope (189 ₪ barré, affichée 0 ₪ ; réservée aux pierres > 1 ct) (V, fiche du service), retrait à Tel-Aviv sur rendez-vous, mise à taille.
- Catégories : bagues, bracelets, boucles d'oreilles, chaînes, « День рождения », « Рождение », « До 5990 шекелей » (V). Alliance de kiddouchin : rubrique relevée par l'inventaire du 25/11 (1 290 et 1 690 ₪), non rouverte ici [I].

## Prix, délais, retours, garanties

- **Affichage du prix** : fourchette « ₪5 490 – ₪6 490 », puis prix de la variante sous les options. Le prix change **uniquement** avec le carat (V). Aucune décomposition (pierre, or, façon) ; seul le poids de pierre central et le poids total latéral sont donnés ; pas de poids d'or (V). Devise : ₪ seul ; pas de mention de TVA (V).
- **Prix relevés** : « Лотос » 5 490 à 6 490 ₪ ; bague « полувечность » 0,70 ct 2 500 ₪ ; « Джулия » 3 500 ₪ ; U-demi-éternité 3 200 ₪ barré, 2 769 ₪ ; pendentif 5 500 ₪ (V, produits associés).
- **Délai : quatre versions contradictoires sur le site** : « 3 à 10 jours ouvrés » (fiche), « 2 à 5 jours ouvrés » (onglet livraison, panier), « 14 jours ouvrés » (page `/ru/delivery/` et règles 5.3), « + 3 à 5 jours » pour une version sur mesure (description) (V).
- **Livraison** : gratuite partout, coursier national, colis assuré, numéro de suivi par message ; retrait gratuit à Shontsino 11 sur rendez-vous (V). Au panier : « Бесплатная доставка (2-5 рабочих дня) » ou « Самовывоз, Шонтино 11, Тель-Авив / Рамат-Ган, фондовая биржа » (V).
- **Retours** (`/ru/terms`, V) : annulation et remboursement sous 14 jours, bijou jamais porté, emballage et certificat joints ; frais d'annulation 5 % ou 100 ₪ (le moindre) ; **exclus** : bijoux sur mesure ou personnalisés, bagues faites à une taille précise ou redimensionnées à la demande, gravure, **et tout article de plus de 3 000 ₪** (6.3) ; échange sous 14 jours possible en plus. Retour à la charge et aux risques du client ; remboursement sous 14 jours ouvrés après réception. La fiche ne dit que « retour/échange possible sous 14 jours ».
- **Garanties** : « 5 ans » sur la fiche et dans la FAQ ; **12 mois** dans les règles (4.4) ; chute de pierre exclue (4.5) ; « images à titre illustratif, écarts possibles » (3.1) (V). Contradiction à noter.
- **Certificats** : IGI sur la fiche ; FAQ : « certificat gemmologique pour chaque bijou, IGI ou GIA pour les pierres centrales » (V).
- **Libellé du synthétique** : « выращенный в лаборатории бриллиант », « CVD » ; la FAQ précise « 100 % de vrais diamants » (V).
- **Moyens de paiement** : icônes Visa, Mastercard, bit, Max, Apple Pay, PayPal et un logo non identifié sous les boutons de la fiche (V, capture) ; le panier n'en liste aucun ; nombre de paiements non vérifié.
- **Panier** : sous-total, « Перевозка » (livraison gratuite ou retrait), total ₪5 490, mention « Варианты доставки будут обновлены во время оплаты » (V). Pas de TVA ni de ligne de décomposition.

## Confiance et service

- Avis : « Превосходно, sur la base de 83 avis » avec 7 textes affichés dans le panier (V) ; source des avis non précisée [S : Google].
- Preuves de fabrication : aucune photo ou vidéo d'atelier, aucun suivi de fabrication. Seul élément proche : la **vidéo au microscope** de la pierre du client, avec le numéro gravé au laser comparé au certificat, envoyée par WhatsApp ou courriel **avant** l'expédition (V, fiche du service, réservée aux achats de pierre > 1 ct).
- Histoire de modèle : « Лотос » est né de la demande d'un client (V, description), ce qui donne de la crédibilité au sur-mesure.
- Contact : téléphone 03-6776924, WhatsApp 050-9500747, courriel, adresse (V). Rendez-vous : sur appel ou WhatsApp.
- Langues : le russe est une traduction partiellement automatique : « צהוב », « איך זה עובד? » restent en hébreu, « Вроде дешевый ликер » pour « tri par prix croissant », « Кольцо Александры » vs « Alexandra » (V). « Bague de fiançailles » est rendue par « обручальное кольцо » (alliance) (V).

## Points forts à retenir pour JR Diamond

1. **Carat qui pilote le prix, prix de la variante affiché sous les options** : 5 490 / 5 990 / 6 490 ₪ (V : clics sur les pastilles). JR Diamond affiche « Sur devis » : l'écart principal.
2. **Livraison offerte et retrait en main propre** inscrits au panier avec le délai (V).
3. **Vidéo de la pierre au microscope avec numéro gravé comparé au certificat**, avant expédition (V, fiche du service) : même esprit que « pierre filmée », mais vendue à part et réservée à > 1 ct.
4. **Taille israélienne avec équivalent français** dans la liste (13/53) et option « aidez-moi à choisir », kit de mesure remboursé (V).
5. **Bagues « nées de demandes clients »** avec leur histoire (V) : argument de preuve sociale transposable.
6. **Bloc FAQ livraison / retour / certificat dans la fiche** par onglets (V).

## Défauts observés

- Délais de livraison contradictoires (3-10, 2-5, 14 jours) et garantie 5 ans / 12 mois (V).
- Retour : la fiche promet 14 jours, les règles excluent les articles > 3 000 ₪ (donc la plupart des bagues) du droit d'annulation, avec retour à la charge du client (V).
- Aucune décomposition du prix, aucun poids d'or, couleur d'or et taille sans effet sur le prix (V).
- Zoom sans effet constaté ; pas de vue 3D, vidéo ou 360° de la bague (V).
- Traduction russe partielle (mots hébreux, tri mal traduit, « обручальное » pour fiançailles) (V).
- Fiche de la vidéo : prix barré 189 ₪ affiché à 0 ₪ « текущая цена », ambigu (V).
- Chargement lent : DOMContentLoaded 9,7 s, événement load 11 s (V, une mesure).

## Limites de l'audit

- Aucun clic sur « КУПИТЬ », sur le paiement ni sur WhatsApp ; panier uniquement sur ordinateur (une bague 1,50 ct jaune 13/53, panier de session sans compte, non retiré ; aucune donnée personnelle saisie).
- L'ajout au panier a été fait en soumettant le formulaire de la fiche (POST sur la page produit) ; les adresses `?add-to-cart=` et `wc-ajax=add_to_cart` étaient bloquées dans le script.
- Une seule fiche explorée à fond ; les 17 autres sont lues par leurs cartes de catégorie. Le changement d'image par variante, le tri, la page 2, la pagination et le sélecteur de langue ne sont pas actionnés. Le site a pu changer depuis le recensement.
- Mesures de temps : une mesure par appareil (réseau d'un serveur hors d'Israël).

## Mesure du visuel principal

| Page | Appareil | Plus grand élément (LCP) | DOMContentLoaded / load |
|---|---|---|---|
| Fiche « Лотос » | ordinateur | image `VN3238-OV-600x600.webp` à 5,7 s | 9,7 s / 11,0 s |
| Fiche « Лотос » | iPhone 13 | image `VN3238-OV-1536x1536.webp` à 5,3 s | 9,7 s / 11,5 s |

## Sources

- https://louisa.co.il/ru/product-category/rings/… (catégorie) ; fiche : https://louisa.co.il/ru/product/טבעת-אירוסין-אובל-לוטוס/ (V)
- https://louisa.co.il/ru/delivery/ ; https://louisa.co.il/ru/terms (V)
- Fiche du service vidéo : https://louisa.co.il/ru/product/סרטון-אימות-יהלום-אישי-עם-מיקרוסקופ/ (V)
- https://louisa.co.il/ru/cart/ (panier, V) ; https://louisa.co.il/robots.txt (V)
- Inventaire du territoire : `INVENTAIRE.md` du même dossier (alliances de kiddouchin, 25/11/2026)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/il/louisa-jewelry/`
