# Audit : Bonnot Paris, « Le Studio » (pierre réelle, bague simulée par IA)

| | |
|---|---|
| Site | Bonnot Paris, négociant joaillier, 40 rue des Mathurins, Paris 8e |
| Page de départ | https://www.bonnot-paris.com/creer-avec-studio-bonnot |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Étapes 1 et 2 testées en entier. L'étape 3 (simulation et prix de la bague) exige prénom, e-mail et téléphone : non franchie. Panier non visité (interdit par robots.txt) |
| robots.txt | `Allow: /`, mais interdit `/cart`, `/checkout`, `/account`, `/login`, `/search` et les filtres passés en paramètres (`?forme=`, `?prix=`, `?origine=`…) (V). Ces requêtes étaient bloquées dans nos scripts ; aucune n'a été émise (V). Pas de défi |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Accueil du Studio | « Créer ma bague → » (3 fois), film de la Maison, « Parler à la Maison », avis Google, 7 questions-réponses (V) | « Simulation gratuite, sans engagement. Aucune carte bancaire. » (V) | un exemple : simulation portée à la main et photo de la pierre d'origine (V) |
| 1. Votre pierre (`?aiStep=stones`) | grille de pierres réelles, 24 par 24 ; recherche ; filtres variété, couleur, forme, budget ; filtres avancés (V) | prix de chaque pierre sur sa vignette (V) | photo réelle de chaque pierre dans son écrin (V) |
| Aperçu d'une pierre | photo, vidéo, zoom « + », détail (poids, origine, traitement, pureté), « Voir la page produit → », « Sélectionner cette pierre » (V) | « Prix de la pierre » (V) | « La pierre photographiée est celle que vous choisissez. » (V) |
| 2. Votre design (`?aiStep=rings`) | 23 modèles de bague ; métal (or jaune, blanc, rose, platine) ; style (6) ; « Faire dessiner ma bague → » ; « Ajouter mon inspiration → » (V) | **aucun prix de monture affiché** ; seule la pierre garde son prix en haut de page (V) | chaque modèle est photographié dans les 4 métaux : les 23 vignettes changent avec le métal (V) |
| Aperçu d'un modèle | nom, métal, pierre associée, « Visualiser ma bague → », « Revenir aux designs » (V) | une requête de prix part (`preview-price`), mais rien ne s'affiche (V) | photo du « modèle de référence », pas de la bague avec la pierre choisie (V) |
| 3. Votre bague (`?aiStep=access`) | formulaire : prénom*, nom, e-mail*, téléphone mobile*, case d'accord pour les courriels ; « Créer ma visualisation gratuite » (V) | le prix est promis après la saisie : « conserver vos images et votre prix dans Mon Bonnot, sans mot de passe » (V) | simulation par IA promise ; **non vue** |
| Panier, commande | non visités (voir « Limites ») | — | — |

## Contrôles vérifiés

Relevés `controls.cjs` : accueil du Studio 12 contrôles sur ordinateur et sur iPhone ; étape 1, 33 sur ordinateur et 29 sur iPhone ; fiche d'une pierre 113 (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Créer ma bague → (3 boutons) | bouton | ouvre l'étape 1 sans recharger la page ; grille visible en 0,2 s sur ordinateur, 1,6 s sur iPhone (V) | — | fonctionne |
| Regarder le film de la Maison | bouton | ouvre une fenêtre avec un lecteur Vimeo (`player.vimeo.com/video/1017577851`) (V) | — | fenêtre ouverte ; lecture non vérifiée (le lecteur a répondu 401 depuis notre accès) |
| Parler à la Maison (2 boutons) | bouton | fenêtre « Prendre rendez-vous » : Paris, à distance (visio ou téléphone), bureau du Sri Lanka, 01 89 70 99 85, courriel, WhatsApp (`wa.me/33757819693`, message pré-rempli) (V) | — | fonctionne ; liens non ouverts |
| ★★★★★ 5/5 · 105 avis Google | lien | fiche Google Maps (V, cible lue) | — | non actionné |
| Nos réalisations → | lien | `/realisations` (V, cible lue) | — | non actionné |
| Fil d'étapes : Votre pierre, Votre design | boutons | reviennent à l'étape voulue en gardant les choix (modèle encore coché) (V) | — | fonctionne |
| Recherche « SKU, pierre, origine… » | champ | — | — | **non rempli** |
| Variété : Tous, Autre, Émeraude, Grenat, Rubis, Saphir, Spinelle, Tourmaline | menu | Émeraude : 24 émeraudes ; le bouton prend le nom du choix (V) | — | fonctionne (1 valeur actionnée, 8 listées) |
| Couleur : 19 valeurs (bleu, teal, padparadscha, sang de pigeon…) | menu | Bleu : saphirs bleus en tête (V) | — | fonctionne (1 valeur actionnée) |
| Forme : Asscher, carré, cœur, coussin, fantaisie, ovale, poire, radiant, rectangle, rond | menu | Émeraude + Ovale : 8 pierres (V) | — | fonctionne (1 valeur actionnée) |
| Budget de la pierre : de / à, 12 seuils, « Appliquer → » | 2 listes, bouton | de 1 000 à 5 000 € : toutes les pierres affichées sont dans la fourchette (V) | — | fonctionne |
| Filtres avancés : poids de / à, origine, traitement (chauffée ou non), longueur et largeur en mm, « Appliquer → » | listes, champs | panneau ouvert, options lues (V) | — | **non actionnés** (ouverts seulement) |
| Tout supprimer | bouton | retour à 24 pierres, menus remis à zéro (V) | — | fonctionne |
| Défilement de la grille | chargement | 24, puis 48, puis 72 pierres (V) | — | fonctionne |
| Vignette d'une pierre | bouton | ouvre l'aperçu (V) | 2 996 $ pour l'émeraude testée | fonctionne |
| Aperçu : Photo 1 | vignette | photo de 546 × 586 px, fichier source de 1 943 px (V) | — | fonctionne |
| Aperçu : Vidéo | bouton | après 8 s : « Ce média est indisponible. Découvrez les autres vues. » (V, ordinateur et iPhone) | — | **en panne** sur la pierre testée |
| Aperçu : + (zoom) | bouton | le clic automatisé n'a pas abouti en 3 s (V) | — | non vérifié |
| Aperçu : Voir la page produit → | lien | `/emeraude-de-zambie-1-57ct-rectangle`, nouvel onglet (V) ; page lue à part (V) | 3 252 € TTC sur la fiche | fonctionne |
| Aperçu : Fermer l'aperçu | bouton | referme (V) | — | fonctionne |
| Sélectionner cette pierre | bouton | étape 2 ; la pierre et son prix restent en haut de page (V) | — | fonctionne |
| Changer de pierre | bouton | — | — | non actionné (le fil d'étapes a servi) |
| Métal : Tous les métaux, Or jaune, Or blanc, Or rose, Platine | boutons (liste sur iPhone) | les 23 photos changent pour chaque métal (V) | aucun prix | fonctionne (5 sur 5) |
| Style : Solitaire, Moderne, Toi & Moi, Art Déco, Épaulé, Vintage | liste | 11, 4, 1, 5, 1 et 1 modèles (V) | — | fonctionne (6 sur 6) |
| Vignette d'un modèle (2 testées sur 23) | bouton | coche le modèle, ouvre l'aperçu « Votre design » (V) | aucun prix | fonctionne |
| Revenir aux designs ; Fermer l'aperçu | boutons | referment l'aperçu (V) | — | fonctionnent |
| Faire dessiner ma bague → | bouton | même fenêtre « Prendre rendez-vous » que « Parler à la Maison » (V) | — | fonctionne |
| Ajouter mon inspiration → | bouton | fenêtre d'envoi d'une image (PNG ou JPG, 1 au plus) : « L'IA utilisera cette référence pour créer votre bague » ; rappel de ne pas envoyer de bagues d'autres marques (V) | « fait l'objet d'un devis » (V) | fenêtre ouverte ; **aucune image envoyée** |
| Visualiser ma bague → | bouton | mène au formulaire d'accès, pas à l'image (V) | — | fonctionne ; **mur de coordonnées** |
| Formulaire d'accès, « Créer ma visualisation gratuite » | 4 champs, 1 case, 1 bouton | — | — | **non rempli, non envoyé** (règle) |
| Mon compte (`/mon-bonnot`), Quitter le studio | liens | — | — | non actionnés |
| Fiche pierre : Image 1, Vidéo 2, Masquer le prix, « London Gem Lab Inclus », Ajouter au panier, Échanger sur WhatsApp, Prendre rendez-vous | boutons, liens | relevés (V) | 3 252 € TTC, « Payable en 3X sans frais » (V) | non actionnés ; panier interdit par robots.txt |
| Langue (7), devise (5), pays de livraison (22) en pied de page | menus | relevés (V) | — | non actionnés |

## Options disponibles

- **Pierres** : émeraude, grenat, rubis, saphir, spinelle, tourmaline, « autre » ; uniquement naturelles (« nous ne vendons aucune pierre synthétique ») (V). Pas de diamant parmi les variétés du filtre (V).
- **Couleurs** : autre, bicolore, bleu, gris, jaune, Mahenge, marron, orange, padparadscha, pêche, rose, rose vif, rouge, sang de pigeon, spessartite, teal, tsavorite, vert, violet (V).
- **Formes** : Asscher, carré, cœur, coussin, fantaisie, ovale, poire, radiant, rectangle, rond (V).
- **Budget** : seuils à 500, 1 000, 2 000, 3 000, 5 000, 7 500, 10 000, 15 000, 20 000, 30 000, 50 000 et 100 000 € (affichés en dollars depuis notre accès) (V).
- **Filtres avancés** : poids par pas de 0,5 à 1 ct ; origine (Birmanie, Kenya, Madagascar, Mozambique, Sri Lanka…) ; traitement ; dimensions (V).
- **Métaux** : or jaune, or blanc, or rose, platine (V). Titre de l'or non indiqué dans le Studio (V).
- **Modèles** : 23, dont 11 solitaires (3 pavés), 4 modernes, 5 Art déco, 1 Toi & Moi, 1 épaulé, 1 vintage (V).
- **Hors modèles** : dessin par la Maison, ou photo d'inspiration, sur devis (V).
- **Taille de doigt** : « demandée avant l'ajout au panier » ; gravure : non mentionnée (V, questions-réponses).
- **Exemples de pierres** (V) : émeraude de Zambie rectangle 1,57 ct, huile mineure, 2 996 $ hors taxes ; saphir bleu ovale 1,42 ct, 2 443 $ ; rubis du Mozambique coussin 1,52 ct, 19 143 $ ; tourmaline bicolore 1,13 ct, 409 $.

## Prix, délais, retours, garanties

- **Affichage** : prix de la pierre seule aux étapes 1 et 2. Le prix de la bague n'est donné qu'après la saisie des coordonnées (V). Il comprend « votre pierre, sa monture et les options choisies » ; « la fiscalité du pays de livraison peut modifier le total » (V).
- **Taxes** : dans le Studio, « Prix hors taxes (export) » en dollars depuis notre accès ; la fiche de la même pierre lue par curl affiche « 3 252 € TVA 20 % incluse » (V). L'affichage dépend du pays détecté (I).
- **Réservation** : « lors de votre première simulation, la pierre vous est réservée pendant 48 h » (V).
- **Délai** : « le délai apparaît sur votre création » (V). Conditions de vente : fabrication en 4 à 6 semaines après l'acompte (V). Bandeau : commandes sur mesure jusqu'au 25 novembre pour Noël (V).
- **Paiement** : carte (Stripe), PayPal, virement ; demi-mesure et sur mesure : acompte de 50 %, solde à la livraison (V, conditions). « Payable en 3X sans frais » sur la fiche pierre (V).
- **Retours** : 14 jours pour les produits standards ; **demi-mesure et sur mesure exclus** du droit de rétractation (V). Pierre stockée au Sri Lanka : le retour se fait là-bas, aux frais et risques du client (V).
- **Livraison** : La Poste en valeur déclarée pour la France, FedEx à l'international ; envois « assurés à hauteur de leur valeur d'achat » (V). Montant des frais non vu (panier non visité).
- **Certificat** : « Certificat d'authenticité London Gem Lab inclus » sur la fiche pierre (V).
- **Garantie** : pas de durée de garantie commerciale relevée (V, conditions lues par mots-clés).

## Confiance et service

- **Avis** : « 5/5 · 105 avis Google », affiché par le site (V).
- **Preuve d'origine** : « seul joaillier français membre » de l'association internationale des négociants en pierres de couleur (ICA) ; bureaux à Jaipur, au Sri Lanka et à Bangkok (V, affirmations du site).
- **Honnêteté sur l'IA** : « Le rendu aide à apprécier le style, les couleurs et les proportions. Ce n'est ni une photo du bijou fabriqué ni un plan d'atelier. Les reflets et certains détails de sertissage peuvent différer » (V).
- **Contact** : rendez-vous à Paris, à distance ou au bureau du Sri Lanka ; téléphone ; courriel ; WhatsApp ; showroom à Angers en pied de page (V).
- **Langues et devises** : FR, DE, EN, ES, IT, PT-BR, ZH-CN ; €, $, £, CHF, CA$ ; 22 pays de livraison listés (V).
- **Libellé du synthétique** : sans objet, tout est naturel (V).
- **Preuves de fabrication** : un film de la Maison et une page « Réalisations » ; aucune photo d'atelier ni suivi de commande dans le parcours (V). « Vous retrouvez votre projet dans Mon Bonnot » (V).
- **Cookies** : aucun bandeau détecté sur le Studio ; panneau de préférences sur la fiche pierre (V).

## Points forts à retenir pour JR Diamond

1. **« La pierre photographiée est celle que vous choisissez. »** Une phrase, sous le nom de la pierre, règle la question de confiance (V). JR Diamond promet la même chose avec « pierre filmée » : la dire aussi nettement, au même endroit.
2. **La pierre d'abord, la monture ensuite.** Le client s'attache à un objet unique avant de parler de design ; son prix reste affiché en haut de l'étape 2 (V).
3. **La pierre est réservée 48 h** dès la première simulation (V). Une échéance douce, sans compte ni paiement.
4. **Chaque modèle photographié dans chaque métal** : 23 modèles × 4 métaux, et toute la grille change d'un clic (V). Plus convaincant qu'une pastille de couleur.
5. **Un parcours très rapide** : page prête en 0,8 s, grille en 0,2 à 1,6 s, filtres sans rechargement, 24 pierres de plus à chaque défilement (V).
6. **Trois sorties à chaque étape** : continuer seul, « faire dessiner ma bague » (rendez-vous, WhatsApp), ou apporter sa propre image (V).
7. **Les limites de l'image sont écrites** dans les questions-réponses (V). JR Diamond peut retourner l'argument : sa 3D est, elle, le plan d'atelier.
8. **Filtres pensés pour des pierres de couleur** : origine, traitement, dimensions en millimètres (V). Utile pour l'émeraude, le saphir et le rubis que l'atelier propose.

## Défauts observés

1. **Le prix de la bague et l'image sont derrière un mur de coordonnées** : prénom, e-mail et téléphone obligatoires avant de voir quoi que ce soit de la bague (V). L'accueil dit pourtant « simulation gratuite, sans engagement ».
2. **Aucun prix de monture à l'étape 2**, ni fourchette, ni « à partir de » (V). On choisit un design à l'aveugle sur le budget.
3. **La vidéo de la pierre testée est indisponible** : « Ce média est indisponible » après 8 s, sur ordinateur comme sur iPhone (V).
4. **L'image finale est générée par IA**, ce que le site reconnaît : elle peut différer du bijou (V). C'est la faiblesse que le positionnement de JR Diamond attaque.
5. **Prix hors taxes en dollars** affichés d'office à un visiteur vu comme étranger, sans choix visible dans le Studio ; la même pierre vaut 3 252 € TTC sur la fiche (V).
6. **Les filtres ne sont pas dans l'adresse** : impossible de partager une sélection ; seul le numéro d'étape y figure (V).
7. **Sur mesure exclu du droit de rétractation** et acompte de 50 % : l'information est dans les conditions, pas dans le Studio (V).
8. **Titre de l'or, taille de doigt et gravure absents** des deux premières étapes (V).

## Limites de l'audit

- **Étape 3 non franchie** : le formulaire d'accès demande des données personnelles. La simulation, le prix de la bague, le délai affiché sur la création et « Mon Bonnot » n'ont pas été vus.
- **Panier et commande non visités** : `/cart` et `/checkout` sont interdits par robots.txt. Frais de livraison et récapitulatif non relevés ; les moyens de paiement viennent des conditions de vente.
- Filtres : une valeur actionnée par menu, plus la fourchette de budget ; les filtres avancés ont été ouverts sans être appliqués. 2 modèles ouverts sur 23, 1 pierre sur 72 chargées.
- Notre accès est vu hors Union européenne : prix en dollars hors taxes. Les montants en euros TTC n'ont été lus que sur une fiche.
- Le film Vimeo et les liens WhatsApp, téléphone et courriel n'ont pas été ouverts ; l'image d'inspiration n'a pas été envoyée.
- Sur iPhone émulé, les filtres sont regroupés sous un bouton « Filtres » qui n'a pas été ouvert ; l'aperçu, la vidéo et l'étape 2 y ont été vérifiés.
- Temps mesurés sur une machine partagée, un passage par appareil (V) :
  - ordinateur : document prêt en 0,83 s, plus grand élément (image) à 0,98 s ;
  - iPhone : document prêt en 0,81 s, plus grand élément (titre) à 0,80 s ; grille de pierres 1,6 s après le clic.

## Sources

- Parcours : https://www.bonnot-paris.com/creer-avec-studio-bonnot (`?aiStep=stones`, `?aiStep=rings`, `?aiStep=access`)
- Fiche pierre : https://www.bonnot-paris.com/emeraude-de-zambie-1-57ct-rectangle
- Conditions : https://www.bonnot-paris.com/general-terms · règles : https://www.bonnot-paris.com/robots.txt
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/france/bonnot/`
