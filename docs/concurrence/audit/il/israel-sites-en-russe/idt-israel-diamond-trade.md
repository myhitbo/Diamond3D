# Audit : IDT – Israel Diamond Trade (diamonds-israel.com)

- **Site** : IDT Diamonds, « Официальный дилер Алмазной Биржи Израиля » (Ramat Gan, « Алмазная Башня », rue Betsalel)
- **Adresse** : https://diamonds-israel.com/ (page de départ : https://diamonds-israel.com/jewelry, « Индивидуальный дизайн »)
- **Date** : 25/11/2026 (date réelle de la session ; la consigne indiquait 15/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **complet** pour ce qui existe : le site n'a ni configurateur, ni boutique, ni panier ; la vente se fait par téléphone, WhatsApp/Telegram et formulaire.
- Marques : [V] vérifié (page lue ou contrôle relevé, adresse en source), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Marque |
|---|---|---|
| 1. `/jewelry` « Ювелирные украшения » | texte du processus sur mesure en 5 étapes (idée/croquis, modèle 3D envoyé par e-mail, cire imprimée en 3D, fonte, sertissage et finition) ; « Материалы » : 8 couleurs de diamants fantaisie + 10 formes de taille (liens vers `/fancy/…` et `/diamonds?shape=…`) ; bouton « Связаться с нами » | [V] |
| 2. `/diamonds` « Каталог бриллиантов » | filtres forme, prix en $ (200 à 1 000 000), carat (0,25 à 10), taille (Poor à Ex.), couleur (M à D), pureté (I2 à IF), onglets « Бесцветные / Цветные » ; bouton « Показать бриллианты » | [V] |
| 3. Résultat | « Бриллианты не найдены » ; message : « commandez en nous contactant » (téléphone, WhatsApp, Telegram) | [V] |
| 4. Panier | **n'existe pas** (aucun lien panier ; l'adresse `/cart` est autorisée par robots.txt mais n'a pas été ouverte faute de lien) | [V] absence de lien |

## Contrôles vérifiés

Relevé automatique : 43 contrôles sur `/jewelry` (ordinateur), 33 en affichage iPhone ; 58 sur l'accueil ; ~45 sur `/diamonds`.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : О НАС, АЛМАЗНАЯ БИРЖА, КАТАЛОГ БРИЛЛИАНТОВ, О БРИЛЛИАНТАХ, ЮВЕЛИРНЫЕ УКРАШЕНИЯ, КОНТАКТЫ | liens | pages `/about`, `/ide`, `/diamonds`, `/education`, `/jewelry`, `/contacts` ; 4 pages lues répondent 200 | non | [V] |
| Téléphone « +972 55 98-87-755 » | lien `tel:` | appel ; même numéro pour WhatsApp et Telegram (« без выходных ») | non | [V] lien ; appel non fait |
| « Москва: » / « Киев » | texte | numéro **vide** à Moscou (libellé sans numéro) sur toutes les pages lues | non | [V] défaut |
| 8 puces de couleur (COLORLESS, PINK, ORANGE, BLUE, YELLOW, GREEN, BROWN, PURPLE) | liens | `/diamonds`, `/fancy/pink`… ; libellés en anglais dans une page russe | non | [V] liens lus ; sous-pages non ouvertes |
| 10 puces de forme (ROUND, PEAR, HEART, OVAL, CUSHION, PRINCESS, ASSCHER, MARQUISE, RADIANT, EMERALD) | liens | `/diamonds?shape=Round`… (adresse autorisée) ; catalogue vide | non | [V] |
| « Связаться с нами » | lien | `/contacts#contacts__consult` : formulaire (nom, contact, message), non rempli | non | [V] formulaire non envoyé |
| Filtre Форма | liste | valeurs « Все » + formes | non | [V] présent |
| Filtre Цена, $ | 2 champs numériques | min 200, max 1 000 000 | affiche en dollars | [V] |
| Filtre Карат | 2 champs | 0,25 à 10 ct | non | [V] |
| Filtre Огранка | curseur | Poor, Fair, Good, V.Good, Ex. | non | [V] |
| Filtre Цвет | curseur | M à D | non | [V] |
| Filtre Чистота | curseur | I2, I1, SI2, SI1, VS2, VS1, VVS2, VVS1, IF | non | [V] |
| « Показать бриллианты » | bouton `submit` | formulaire GET (shape, value, carat, color, clarity, cut, sort) ; résultat « Бриллианты не найдены » | aucun | [V] catalogue vide, y compris sans filtre |
| « Показать больше бриллиантов » (accueil) | lien | `/diamonds` | non | [V] |
| Onglet « ЦВЕТНЫЕ » | lien | `/fancy/all` | non | non ouvert |
| Pied de page : О компании, Надежность и гарантия качества, Инвестиции, Оплата и Доставка, Система оценки 4С, Сертификаты GIA | liens | pages d'information ; 3 lues (qualité, livraison, certificats) | non | [V] |
| Logos ISDE, GIA, HRD, IGI | liens | sites externes | non | non suivis |
| Formulaire de contact (nom, contact, message, « Отправить ») | formulaire | non rempli (règle) | non | non testé |
| Mode photo, vidéo, 360°, 3D, sur la main, AR, zoom ; partager, enregistrer, comparer ; guide des tailles ; financement ; rendez-vous ; chat ; panier ; taille de doigt ; gravure ; origine naturel/synthétique | — | **absents** (aucun contrôle correspondant) ; la gravure n'est citée qu'en texte (« памятная гравировка ») | non | [V] absence |

## Options disponibles

- **Diamants** : catalogue annoncé « plus de 100 000 diamants de centaines de producteurs de la Bourse » ; filtres : forme (10), prix en $, carat 0,25 à 10, taille Poor à Ex., couleur D à M, pureté IF à I2 [V]. **Catalogue vide à la visite** [V].
- **Couleurs fantaisie** : rose, orange, bleu, jaune, vert, brun, violet [V].
- **Monture / bijou** : pas de choix en ligne ; création sur mesure à partir d'un croquis ou de photos, modèle 3D envoyé par e-mail pour approbation [V].
- **Synthétique** : aucune mention sur les pages lues ; certificats GIA « garantissent l'origine naturelle » ; HRD, AGS, IGI, EGL cités comme moins stricts [V].
- **Métaux** : non précisés sur les pages lues [V].

## Prix, délais, retours, garanties

- **Prix** : en **dollars** seulement ; aucun prix de bijou ; aucun prix affiché puisque le catalogue est vide [V]. Argument : « 40 à 60 % moins cher que le commerce de détail dans les pays de la CEI », « 50 % de moins qu'à Moscou » [V site, non vérifié].
- **Délai** : seul indice : fonte « jusqu'à deux jours ouvrés » ; pas de délai global [V].
- **Livraison** : mondiale par coursiers Brinks, Malka Amit, Ferrari ; pays de l'ex-URSS « au cas par cas » ; texte sur la douane russe : import non monté autorisé jusqu'à 10 000 €, au-delà « environ 33 % » de droits ; offre de stockage en zones sous douane [V]. Pas de frais chiffrés.
- **Retours** : aucune politique de retour ni d'échange trouvée [V].
- **Garanties** : garantie à vie sur les travaux de sertissage ; remplacement gratuit d'une pierre perdue par défaut de sertissage ; jamais de colle, pierres serties à la main [V].
- **Paiement** : moyens non affichés (pas de panier) [V].

## Confiance et service

- Membre de la Bourse israélienne ; certificat GIA pour chaque diamant, numéro gravé au laser sur le rondiste ; bureau GIA dans le même bâtiment (« quelques étages plus haut ») [V site, non vérifié].
- Contact : téléphone/WhatsApp/Telegram unique (Tel-Aviv), e-mail info@diamonds-israel.com ; Moscou et Kiev annoncés sans numéro lisible ; représentant russophone [V].
- Avis clients : aucun [V]. Preuves de fabrication : processus décrit en texte, **aucune photo ni vidéo**, pas de suivi de commande [V].
- Langue : russe uniquement (libellés de formes et de couleurs en anglais). Devise : $. Pied de page « © 2017 » : site peu mis à jour [V].

## Points forts à retenir pour JR Diamond

- **Processus sur mesure en 5 étapes avec modèle 3D validé par le client avant l'impression de la cire** : confirme que la 3D avant fabrication est un argument attendu ; preuve : `/jewelry` [V]. JR Diamond va plus loin : la 3D est interactive et issue du fichier de fabrication.
- **Promesses de sertissage claires** (à la main, jamais de colle, remplacement de la pierre perdue, garantie à vie) : répond à la peur de l'échange de pierre au sertissage ; preuve : `/jewelry`, `/about/quality` [V].
- **Numéro GIA gravé au rondiste + vérification auprès du GIA** présentés comme preuve d'authenticité ; preuve : `/about/quality`, `/education/certificate` [V].
- **Filtres 4C complets** (forme, prix, carat, taille, couleur, pureté) : modèle pour une future grille de pierres ; preuve : `/diamonds` [V].
- **Information douanière pour l'acheteur étranger** (seuil de 10 000 €) : utile pour la France plus tard ; preuve : `/about/delivery` [V site, non vérifié].

## Défauts observés

- Catalogue de diamants **vide** (« Бриллианты не найдены ») même sans filtre : fonction principale cassée ou fermée [V].
- Aucun prix de bijou, aucun achat en ligne, aucun panier : le site oriente vers le téléphone [V].
- Prix en dollars, public russophone de l'étranger ; numéro de Moscou vide ; copyright 2017 [V].
- Pas de politique de retour, pas de délai global, pas de synthétique [V].
- Libellés en anglais mêlés au russe (COLORLESS, ROUND…) [V].
- Aucune photo de réalisation sur `/jewelry` : seulement des rubriques textuelles [V].

Mesure (page `/jewelry`, 1re visite) : ordinateur, DOMContentLoaded 1,1 s, chargement 2,3 s, plus grand élément affiché (LCP) 1,4 s ; iPhone 13 : 0,6 s, 1,6 s, LCP 0,9 s [V, un essai chacun, proxy cloud : ordre de grandeur]. Page rapide, mais sans visuel produit.

## Limites de l'audit

- Pas de parcours de commande : aucun panier, aucun récapitulatif, aucun paiement à observer.
- Catalogue vide : l'effet des filtres sur résultats et prix n'a pas pu être vérifié.
- Sous-pages `/fancy/…`, `/about/deal`, `/contacts`, `/about/idt` non toutes lues ; formulaire de contact, WhatsApp, Telegram et appel non actionnés (règle).
- Les constats de l'inventaire parlant d'erreurs PHP sur l'accueil n'ont **pas** été reproduits : aucun message d'erreur dans le texte de l'accueil le 25/11 [V].
- Un seul essai de mesure par appareil. robots.txt : toutes les adresses ouvertes étaient AUTORISÉES (contrôle `robots.cjs`).

## Sources

- https://diamonds-israel.com/ ; https://diamonds-israel.com/jewelry ; https://diamonds-israel.com/diamonds
- https://diamonds-israel.com/about/delivery ; https://diamonds-israel.com/about/quality ; https://diamonds-israel.com/education/certificate
- Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/il/idt-israel-diamond-trade/`
