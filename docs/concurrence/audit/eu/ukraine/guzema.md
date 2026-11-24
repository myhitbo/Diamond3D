# Audit Guzema (constructeur de bague de fiançailles)

- **Site** : Guzema (GUZEMA Fine Jewelry), https://guzema.ua/ ; départ : https://guzema.ua/engagement-ring-studio/
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13 (Chromium émulé)
- **Statut** : **complet** pour le constructeur, la fiche produit, le panier et la page de paiement (arrêt avant la saisie de données) ; partiel pour la gravure (champ non rempli) et les formulaires (non envoyés)
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé. robots.txt lu : toutes les adresses ouvertes étaient AUTORISÉES (`robots.cjs`).

## Parcours

| Étape | Options (constat [V]) |
|---|---|
| 1. Design | 6 : demi-alliance diamantée (défaut), petit cœur, billes tout autour, solitaire, double base, alliance diamantée complète. Carrousel de 9 vignettes (3 en double) et 2 flèches |
| 1. Or | Blanc, jaune (aucun rose, aucun platine, titre 585/750 non choisi dans le constructeur) |
| 1. Forme du diamant | Rond, coussin, ovale |
| 2. Carat | 8 : 0,24 (4 mm), 0,3 (4,3), 0,4 (4,7), 0,5 (5), 0,7 (5,8), 1 (6,4), 1,5 (7,4), 2 ct (8,1) |
| 3. Couleur | D, E, F (incolore), G, H (presque incolore), avec une phrase d'explication chacune |
| 4. Pureté | VVS1, VVS2, VS1, VS2, avec explication |
| 5. Taille | 15 à 19 par demi-pointure (9 tailles) + case « Taille individuelle » ; lien « Grille des tailles » |
| 6. Gravure | Bouton « Ajouter une gravure » : 5 polices, champ de texte, case de note |
| Fin | Récapitulatif « Votre bague » + prix estimé + formulaire de demande (prénom, nom, e-mail, téléphone, canal Viber, WhatsApp ou Telegram) + « Надіслати запит » |

Le constructeur n'a **pas** de bouton d'ajout au panier : il aboutit à une demande de contact. Pour acheter, il faut passer par une fiche du catalogue (voir « Panier »).

## Contrôles vérifiés

Prix : variation observée dans le récapitulatif. Configuration de base : demi-alliance diamantée, or blanc, rond, 1 ct, sauf mention.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| « Перейти до створення » (bandeau) | lien d'ancre | fait défiler jusqu'au constructeur | – | fonctionne [V] |
| Design : 6 vignettes | boutons | image et intitulé du récapitulatif changent à chaque clic | G VVS2 1 ct : demi-alliance 651 000 ; cœur 642 300 ; billes 677 500 ; solitaire 687 400 ; double base 652 600 ; alliance complète 660 000 ₴ | fonctionnent [V]. Le solitaire coûte plus cher que la demi-alliance diamantée (inféré : pierre centrale choisie dans un stock, non expliqué) |
| Flèches « Попередній / Наступний дизайн » | boutons | non actionnés avec succès (le script n'a pas pu les cibler) | – | non testés |
| Or « Біле » / « Жовте » | boutons visuels | image de la bague change de teinte (fichiers différents) | **aucun** : 651 000 ₴ dans les deux cas (G VVS2 1 ct) | fonctionnent [V] |
| Forme « Круглий / Кушон / Овал » | boutons visuels | image change | G VVS2 1 ct : rond 651 000 ; coussin 357 500 ; ovale 419 400 ₴ | fonctionnent [V] |
| Carat (8 boutons) | boutons | récapitulatif mis à jour ; prix affiché seulement quand couleur et pureté sont choisies | E VVS1 : 0,24 = 101 200 ; 0,3 = 127 600 ; 0,4 = 158 500 ; 0,5 = 211 500 ; 0,7 = 359 600 ; 1 = 826 500 ; 1,5 = 1 708 600 ; 2 ct = 3 161 300 ₴ | fonctionnent [V]. Le premier clic sur 0,24 ct n'a pas pris dans une première série, il a pris dans la suivante |
| Couleur D, E, F, G, H | boutons | récapitulatif mis à jour | 1 ct VS1 : D 784 700 ; E 717 900 ; F 660 500 ; G 574 600 ; H 488 600 ₴ | fonctionnent [V] |
| Pureté VVS1, VVS2, VS1 | boutons | récapitulatif mis à jour | 1 ct D : VVS1 846 300 ; VVS2 818 000 ; VS1 784 700 ₴ | fonctionnent [V] |
| Pureté VS2 | bouton | sans effet à 1 ct (la pureté reste VS1) ; effet à 0,5 ct G : prix 144 700 ₴ | – | **anomalie [V]** : option affichée mais sans réaction à 1 ct, cause non établie (pierre indisponible [S]) |
| Taille 15 à 19 (9 boutons) | boutons | récapitulatif « Размір » mis à jour (testés : 15, 15,5, 16, 17, 19) | aucun | fonctionnent [V] |
| « Індивідуальний розмір » | case | affiche un champ de taille individuelle | – | fonctionne [V] ; saisie non testée |
| « Розмірна сітка » | lien/panneau | ouvre « Метод 1 / Метод 2 » : fil et règle, puis tableau de correspondance | – | fonctionne [V] |
| « Додати гравіювання » | bouton | ouvre : 5 boutons de police (« With love » dans 5 graphies), champ « Ваш надпис », case de note | « sans supplément » selon la page gravure [V] | s'ouvre [V] ; texte non saisi |
| Formulaire de demande (prénom, nom, e-mail, téléphone, 3 canaux) | champs | non remplis | – | **non testé** (règle : aucun formulaire envoyé) |
| « Надіслати запит » | bouton submit | non cliqué | – | non testé, même raison |
| Cartes « Обрати каблучку для заручин » (4 en bas) | lien + cœur + panier | mène aux fiches du catalogue ; GIA affiché sur les cartes | 89 700 ; 222 100 ; 244 300 ; 92 700 ₴ (lus sur la page) | fonctionnent [V] |
| Fiche : « Розмірна таблиця » | lien | ouvre une fenêtre « Таблиця розмірів » (diamètre, circonférence) | – | fonctionne [V] |
| Fiche : « Додати гравіювання » | volet | s'ouvre | – | fonctionne [V] ; texte non saisi |
| Fiche : « Натякнути на подарунок » | bouton | ouvre un formulaire (nom et e-mail de l'envoyeur, du destinataire, taille, aperçu) | – | s'ouvre [V] ; non envoyé |
| Fiche : cœur (favoris) | bouton | non cliqué (compte requis [S]) | – | non testé |
| Fiche : « ДОДАТИ В КОШИК » | bouton | un premier clic fait apparaître les 11 tailles (14 à 19) ; deuxième clic après le choix de 17 ajoute l'article | 247 400 ₴ | fonctionne [V] |
| `/cart/` | page | **redirige vers `/checkout/`** : panier et paiement sur une seule page | – | fonctionne [V] |
| Paiement : « Видалити », quantité, code promo « Застосувати », « У мене є подарунковий сертифікат », notes | contrôles | présents ; non actionnés (code promo : aucun code connu) | – | non testés |
| Paiement : « Перейти до monopay » | bouton | **non cliqué** (aller jusqu'au panier, pas au-delà) | – | non testé |
| Connexion Google (fenêtre « Sign in to guzema.ua with Google ») | fenêtre contextuelle | apparaît sur iPhone dans le bas de l'écran | – | non actionnée [V] |

## Options disponibles

- Designs : 6. Or : blanc, jaune. Formes : rond, coussin, ovale.
- Carats : 0,24 ; 0,3 ; 0,4 ; 0,5 ; 0,7 ; 1 ; 1,5 ; 2.
- Couleurs : D, E, F, G, H. Puretés : VVS1, VVS2, VS1, VS2.
- Tailles du constructeur : 15 à 19 par 0,5 et taille individuelle ; tailles de la fiche : 14 à 19 par 0,5 (11).
- Gravure : 5 polices, texte libre. Fiche : or 585 ou 750 selon le modèle (la fiche vue indique 750).
- Diamants : **naturels** (bandeau « ПРИРОДНІ ДІАМАНТИ » et certificat GIA sur la fiche vue ; page « Натуральні діаманти Guzema ») [V]. Aucune option synthétique dans le constructeur [V].

## Prix, délais, retours, garanties

- **Prix** : estimation en direct dans le constructeur, indiquée « préliminaire » ; la somme finale est confirmée à la validation de la commande [V]. Aucune décomposition (métal, pierre, façon) [V].
- **Délai** : création « dans les quatre semaines après accord de tous les détails et paiement » (constructeur) [V] ; fiche en stock : expédition sous 2 jours, sinon fabrication en 2 à 3 semaines [V] ; gravure jusqu'à 2 semaines [V].
- **Retours** : échange seulement, 14 jours calendaires, si la bague ne va pas en taille ; pas de remboursement ; frais de livraison non remboursés ; **pas d'échange pour les commandes individuelles et personnalisées** ; expertise du joaillier pour les diamants [V, https://guzema.ua/returns-and-exchanges-policy/]. La gravure n'est ni reprise ni échangée [V].
- **Garantie** : à vie sur les bijoux or et argent achetés en Ukraine, avec certificat de conformité ; nettoyage et réparations mineures gratuits ; payant en cas de choc ou de perte de pierre [V, /warranty-policy/].
- **Certificat** : GIA sur la fiche vue (~0,66 ct, VVS/D-F) [V]. Aucune mention de seuil de carat vue.
- **Livraison** : gratuite et assurée à la valeur totale (Nova Poshta, coursier Nova Poshta, coursier à Kyiv) ; retrait en boutique, réservation 2 jours [V, /payment-and-delivery/].
- **Paiement** : Monopay (clients monobank), carte (Apple Pay, Google Pay), virement IBAN ; achat en plusieurs fois Monobank ; espèces en boutique jusqu'à 50 000 ₴ [V].

## Confiance et service

- 3 boutiques en Ukraine (Kyiv x2, Lviv) et 1 à New York [V] ; atelier à Kyiv depuis 2016, 50 personnes, 50 bijoux par jour annoncés [V, /production/].
- Rendez-vous, chat, WhatsApp : non trouvés dans le constructeur ; téléphones et e-mail office@guzema.ua affichés au pied de page [V]. Canal de rappel Viber/WhatsApp/Telegram choisi dans le formulaire [V].
- Avis clients, note : non vus sur les pages ouvertes [S : non cherchés].
- **Preuves de fabrication** : la page production décrit un travail « entièrement à la main » ; aucune photo ni vidéo d'atelier ni suivi de commande observés dans le texte lu [V pour le texte, I pour l'absence de médias].
- Programme de fidélité cumulatif, -5 % à l'inscription à la lettre d'information, bandeau « Livraison gratuite » [V].
- Langues : ukrainien ; site anglais séparé guzema.com (hreflang) [V]. Devise : hryvnia ₴ [V].

## Points forts à retenir pour JR Diamond

1. **Prix en direct et simple à lire** : un seul chiffre qui évolue à chaque option, avec la phrase « le prix final peut varier légèrement » (preuve : récapitulatif « Попередня оцінка вартості »). C'est l'écart principal relevé dans la synthèse de comparaison (nous disons « Sur devis »).
2. **Taille des carats rendue concrète** : chaque carat affiche le diamètre en mm (0,5 ct = 5 mm), ce qui aide à comparer (boutons « 0.5 ct 5 мм »).
3. **Explication de chaque couleur et pureté** en une phrase (textes des boutons D à H, VVS1 à VS2).
4. **Parcours d'achat court** : la fiche mène au paiement en une page, invité sans compte (`/checkout/`).
5. **Garantie à vie et nettoyage gratuit** en page dédiée, avec un « certificat de conformité » remis à l'achat.
6. **Cadeau** : « Натякнути на подарунок » envoie un indice à la personne qui offre (formulaire vu).

## Défauts observés

- Constructeur sans panier : une demande de contact avec rappel, pas de commande en ligne ; le même parcours vers la fiche catalogue recrée un prix fixe différent [V].
- Option VS2 sans effet à 1 ct (voir tableau) ; 3 vignettes en double dans le carrousel de designs [V].
- Pas de choix du titre d'or (585/750), pas d'or rose ni de platine ; pas de diamant synthétique [V].
- Échange seulement, aucun remboursement ; commandes personnalisées exclues ; la page de départ ne l'annonce pas avant la configuration [V].
- Aucun sélecteur d'origine, aucune vidéo de la pierre réelle, aucune vue 360° ni 3D : image fixe par combinaison (« la photo montre un aspect approximatif ») [V].
- Mobile : une fenêtre de connexion Google couvre le bas de l'écran [V].

## Limites de l'audit

- Les formulaires (demande, indice de cadeau), le champ de gravure, le code promo, le bouton de paiement n'ont pas été remplis ni cliqués.
- Flèches du carrousel de designs, favoris, comparateur éventuel : non testés. Chat, rendez-vous : non trouvés.
- Mesures de temps sur un réseau passant par un proxy ; trois mesures sur ordinateur, trois sur iPhone ; le délai d'apparition de l'image principale du constructeur (anneau) est de **3,6 à 4,4 s sur ordinateur** (DCL 2,8 à 3,0 s) et de **4,3 à 4,9 s en affichage iPhone** (DCL 2,8 à 3,3 s) ; fiche produit : image à 5,3 s sur ordinateur.
- La fiche produit utilisée est une seule (bague ronde alliance diamantée, 247 400 ₴). Le contenu de la page « Натуральні діаманти » a été lu sur ses 3 500 premiers caractères.
- Panier créé en session anonyme puis abandonné ; aucune donnée personnelle saisie.

## Sources

- https://guzema.ua/engagement-ring-studio/ · https://guzema.ua/kabluchka-z-kruglym-diamantom-ta-diamantovoyu-dorizhkoyu-bile-zoloto/ · https://guzema.ua/checkout/ (via /cart/)
- https://guzema.ua/payment-and-delivery/ · https://guzema.ua/returns-and-exchanges-policy/ · https://guzema.ua/warranty-policy/ · https://guzema.ua/production/ · https://guzema.ua/about-diamonds/ · https://guzema.ua/jewelry-engraving/
- Captures et journaux : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/guzema/`
