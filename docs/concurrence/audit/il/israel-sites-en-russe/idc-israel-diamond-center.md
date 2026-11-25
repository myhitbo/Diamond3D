# Audit : IDC – Israel Diamond Center (version russe)

- **Site** : IDC – Israel Diamond Center (Ramat Gan, Bourse du diamant)
- **Adresse** : https://www.idc-diamond.co.il/ru/ (page de départ : catalogue « Кольца помолвочные », `/ru/shop/טבעות-יהלומים/טבעות-אירוסין/`)
- **Date** : 25/11/2026 (date réelle de la session ; la consigne indiquait 15/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright) ; connexion hors d'Israël
- **Statut** : **partiel** (aucun blocage technique, mais prix et achat masqués hors d'Israël : « Purchase not available for your country » ; panier non alimentable)
- Marques : [V] vérifié (page lue ou contrôle actionné, adresse en source), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Marque |
|---|---|---|
| 1. Catalogue des bagues de fiançailles | 20 fiches sur la page (grille 4 colonnes) ; filtres « цвет золота » et « категория » ; bandeau « Как выбрать украшение с бриллиантом » (renvoie à un article en hébreu) ; « Получить консультацию » | [V] |
| 2. Fiche produit (ex. « Помолвочное кольцо-солитер с бриллиантом », réf. 2007926) | aucune option à choisir (ni métal, ni taille, ni carat) ; fiche technique figée ; boutons « Обратный звонок », « WhatsApp чат » ; mention « Purchase not available for your country » à la place du prix et du bouton d'achat | [V] |
| 3. Panier `/ru/cart/` | « Ваша корзина все еще пуста » + « Вернуться в магазин » ; aucun article ajoutable | [V] |

Il n'existe **ni configurateur, ni constructeur de bague, ni vue 3D, ni 360° de la bague, ni vidéo** : aucune balise `video`, aucun lecteur ; les images de fiche sont des photos de studio WebP 550×550 [V]. Une visite virtuelle 360° de la salle d'exposition est signalée dans l'inventaire du territoire (non rouverte ici) [V inventaire].

## Contrôles vérifiés

Relevé automatique : 73 contrôles visibles sur ordinateur, 68 en affichage iPhone sur la page catalogue ; 7 liens de menu + 20 fiches ×2 liens (image, titre) + pied de page + panneau d'accessibilité.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Sélecteur de langue « Русский » | liste | hébreu, anglais, russe (liens `/he/`, `/en/`, `/ru/`) | non | [V] présent, non basculé |
| КОЛЬЦА / СЕРЬГИ / КУЛОНЫ / БРАСЛЕТЫ / КОЛЛЕКЦИИ / OUTLET / О НАС | liens menu | catégories ; « КОЛЛЕКЦИИ » → `/shop/jewelry-collection/`, pied de page → `/shop/collections/` (deux adresses) | non | [V] liens lus, non tous suivis |
| Loupe (recherche) | bouton | non testée : adresses de recherche à vérifier au robots.txt, aucune saisie | non | non testé |
| Filtre « цвет золота » | cases | 2 valeurs : белое золото (255), желтое золото (254) ; pas de rose ni de platine | non | [V] ; coché « jaune » : l'adresse devient `?flt`, mais 20 fiches avant et après : effet non démontré |
| Filtre « категория » | cases | 6 valeurs (liste exacte non relevée) | non | [V] présent, non exploré |
| 20 fiches (image + titre) | liens | ouvrent la fiche ; certains titres restent en hébreu (« טבעת אירוסין יהלום כפול », « יולי ») dans la version russe | non | [V] 20 liens ; mélange hébreu/russe |
| « Читать полностью » | lien | article « איך בוחרים טבעת אירוסין בהצלחה » en hébreu (`/he/blog/…`), pas de version russe | non | [V] lien ; page non ouverte |
| « Получить консультацию » | lien `#` | ouvre un formulaire (non rempli) | non | [V] présent, non ouvert (règle : aucun formulaire) |
| Bouton WhatsApp flottant et « WhatsApp чат » | lien | `api.whatsapp.com/send?phone=972543452601&text=Здравствуйте, меня интересует это украшения` (message prérempli, faute d'accord « это украшения ») | non | [V] adresse lue ; conversation non ouverte |
| « Обратный звонок » | lien `#` | demande de rappel (formulaire), non rempli | non | non testé |
| « Изменение размера бесплатно », « Удобные платежи », « Гарантия » (fiche) | blocs d'icônes | le clic n'ouvre aucun détail visible (test) ; le texte de garantie figure plus bas | non | [V] sans effet visible |
| « i » (fiche) | info-bulle | texte « Чистка украшения IDC бесплатно один раз в год » | non | [V] |
| Bouton d'ajout au panier | bouton | **absent** : remplacé par « Purchase not available for your country » | masqué | [V] ; l'adresse `?add-to-cart` est interdite par robots.txt de toute façon |
| Boutons `submit` de la fiche (4 à 6, sans libellé) | boutons | formulaires cachés (rappel, newsletter) ; non actionnés | non | non testé |
| Panneau d'accessibilité (Increase/Decrease text, Grayscale, High contrast, Reverse contrast, Light background, Highlight links, Enable readability, Reset) | 9 liens `#` | outils d'accessibilité ; libellés en anglais dans une page russe | non | [V] présents, non actionnés |
| Pied de page : Политика сайта, Доставка и возврат, Вопросы, Контакты, Instagram, Facebook, Wemake | liens | pages lues : livraison/retours, FAQ ; les deux libellés « Доставка и возврат » du pied de page mènent l'un à la politique, l'autre à la **déclaration d'accessibilité** (`/ru/הצהרת-נגישות`) | non | [V] ; doublon trompeur |
| Photo de fiche : zoom, galerie, 360°, vidéo, sur la main, AR | — | absents : pas de contrôle de ce type sur la fiche | non | [V] absence |
| Partager, enregistrer, comparer, guide des tailles, financement | — | absents sur la fiche ; seule mention « Удобные платежи » sans détail | non | [V] absence |
| Sélecteurs de taille, gravure, carat, origine naturel/synthétique | — | absents ; la pierre est une pièce unique fixe (0,58 ct, J, SI1) | non | [V] |

## Options disponibles

- **Métal** : filtre blanc/jaune seulement ; fiche : or 14 K, poids en grammes (2,92 g) [V]. Titres de collection mentionnent aussi l'or rose dans le texte d'accueil de la fiche (« белого, желтого или розового золота ») [V].
- **Pierre** : naturelle exclusivement (« натуральные бриллианты »), certificats GIA, EGL, HRD cités ; aucune mention de diamant synthétique sur les pages lues [V].
- **Fiche technique** de la fiche lue : centre 0,58 ct, rond, couleur J, pureté SI1, 1 pierre [V].
- **Taille de doigt** : pas de sélecteur ; FAQ : « venir avec sa bague » ou mesurer le doigt au fil ; mise à taille en environ 25 minutes en boutique, gratuite [V].
- **Sur mesure** : possible, le modèle est étudié, prix calculé, fabrication après acompte de 20 % ; délai « de deux semaines à un mois » (FAQ) mais « jusqu'à 60 jours ouvrés » (page livraison, texte hébreu) [V].
- **Évolution** : échange de la pierre contre une plus grosse en payant la différence (« upgrade ») [V].

## Prix, délais, retours, garanties

- **Prix** : **aucun prix visible** depuis l'étranger (« Purchase not available for your country ») [V]. Aucune décomposition. Ne pas supposer que les prix s'affichent pour un visiteur israélien [S].
- **Délai** : en stock 3 à 5 jours ouvrés ; hors stock jusqu'à 30 ; gravé ou sur mesure jusqu'à 60 ; pièce d'exception jusqu'à 180 jours ouvrés (page livraison, partie hébraïque) [V]. La partie russe de la même page ne donne que les deux premiers cas : la version russe est tronquée [V].
- **Livraison** : gratuite hors frais tiers, taxes et douane ; Israël, États-Unis, Amérique du Sud, Europe ; transporteurs Poste d'Israël, FedEx, DHL via un prestataire D2D ; envois assurés ; suivi par e-mail [V, partie hébraïque]. Pas de livraison aux boîtes postales ni à l'hôtel [V].
- **Retours** : **contradiction** : « 7 jours » sur la fiche, « jusqu'à 14 jours » sur `/ru/shipments-and-returns/` ; échange en état neuf avec justificatif ; la FAQ ajoute un avoir convertible en autre bijou [V]. Exception du sur mesure : non mentionnée explicitement dans la partie russe [V].
- **Garantie** : « à vie » sur le bijou acheté avec justificatif (FAQ) ; nettoyage gratuit une fois par an ; mise à taille gratuite [V].
- **Paiement** : « Удобные платежи » sans détail ; moyens non affichés (panier vide) [V].

## Confiance et service

- Membre de la Bourse du diamant, vente « sans intermédiaire » ; seule société d'Israël équipée de l'appareil Sarine (affirmation du site, non vérifiée) [V site, non vérifié].
- Certificats GIA décrits comme référence ; pas de numéro de certificat sur la fiche lue [V].
- Contact : téléphone +972-3-5757979, WhatsApp, rappel, formulaire ; horaires 10 h–17 h, vendredi 10 h–12 h ; visite sans rendez-vous ; retrait le jour même « dans la plupart des cas » [V].
- Avis clients : aucun sur les pages lues [V]. Preuves de fabrication (photos, vidéos d'atelier, suivi de commande) : aucune ; seulement un code de suivi du transporteur [V].
- Langues : russe, hébreu, anglais ; traduction partielle (titres hébreux et blog en hébreu dans la version russe). Devise : ₪ attendu, jamais affiché [I].

## Points forts à retenir pour JR Diamond

- **Catalogue très lisible, 20 bagues par page, filtres simples** : modèle de sobriété ; preuve : capture et liste de contrôles de la page de départ [V].
- **Bouton WhatsApp prérempli avec le sujet** (fiche et flottant) : à reprendre, en ajoutant la référence `JR-XXXXXX` ; preuve : adresse `api.whatsapp.com/send?phone=…&text=…` [V].
- **Fiche technique chiffrée** (poids du métal en g, carat, forme, couleur, pureté) : même idée que le poids du métal ± 5 % du prototype ; preuve : fiche 2007926 [V].
- **Upgrade de la pierre en payant la différence, mise à taille et nettoyage gratuits, garantie à vie** : arguments après-vente ; preuve : FAQ `/ru/faq/` [V].
- **Acompte de 20 % pour le sur mesure** : repère de pratique israélienne pour le parcours devis → prix confirmé ; preuve : FAQ [V].

## Défauts observés

- Prix et achat masqués hors d'Israël : l'acheteur russophone à l'étranger ne peut rien comparer [V].
- Aucune option de choix : pas de métal, pas de taille, pas de carat sur la fiche ; pas de 3D, 360° ni vidéo [V].
- Contradictions : retours 7 jours (fiche) contre 14 jours (page dédiée) ; délai sur mesure « deux semaines à un mois » (FAQ) contre 60 jours (livraison) [V].
- Traduction incomplète : titres et blog en hébreu, page livraison russe plus courte que l'hébraïque, libellé « Доставка и возврат » utilisé pour la déclaration d'accessibilité [V].
- Filtres sans effet visible lors du test (20 fiches avant et après) [V].
- Temps d'apparition : voir ci-dessous (acceptable).

Mesure (fiche solitaire, 1re visite, sans cache) : ordinateur, première image du produit 5,0 s, plus grand élément affiché (LCP) 3,7 s, DOMContentLoaded 4,5 s, chargement 6,7 s. iPhone 13 : première image 3,2 s, LCP 1,7 s, chargement 4,4 s [V, un essai chacun, via proxy cloud : à prendre comme ordre de grandeur].

## Limites de l'audit

- Vu depuis un serveur hors d'Israël : prix, bouton d'achat, panier et paiement n'ont pas pu être observés ; le récapitulatif de panier, les frais et les moyens de paiement restent inconnus.
- Aucun formulaire, rappel, chat ni WhatsApp ouvert (règle) ; recherche du site non testée.
- Liste des catégories du filtre, galerie photo d'une fiche à plusieurs images, pages collections/outlet et « О нас » non explorées en détail.
- Un seul essai de mesure par appareil.
- robots.txt : adresses visitées toutes AUTORISÉES (contrôle `robots.cjs`) ; `?add-to-cart` non utilisé.

## Sources

- https://www.idc-diamond.co.il/ru/shop/טבעות-יהלומים/טבעות-אירוסין/ (catalogue, filtres)
- https://www.idc-diamond.co.il/ru/product/טבעות-יהלומים/טבעות-אירוסין/טבעת-אירוסין-יהלום-סוליטר-מתיקות/ (fiche 2007926)
- https://www.idc-diamond.co.il/ru/shipments-and-returns/ ; https://www.idc-diamond.co.il/ru/faq/ ; https://www.idc-diamond.co.il/ru/cart/
- Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/il/idc-israel-diamond-center/`
