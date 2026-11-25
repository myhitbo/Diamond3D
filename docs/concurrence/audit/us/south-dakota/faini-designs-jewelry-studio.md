# Audit : Faini Designs Jewelry Studio (Sioux Falls, Dakota du Sud)

- **Site** : Faini Designs Jewelry Studio, https://www.fainidesigns.com (plateforme Thinkspace)
- **Page de départ** : https://www.fainidesigns.com/custom-ring-builder/ (concepteur JewelerOS)
- **Date** : 15/11/2026 (parcours exécuté le 25/11 d'après l'horloge de la session ; la date d'en-tête suit la consigne)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Seule l'étape 1 du concepteur est accessible sans appeler l'API de jeweleros.com (`Disallow: /api/`). Le concepteur 3D (étapes 2 à 4), le prix, la taille, la gravure et le panier n'ont pas été vus.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1 sur 4 (« Let's start designing your ring ») [V] | 3 pastilles de métal (or jaune, or blanc, or rose) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch ; boutons Back et Skip |
| 2 à 4 [S] | « fully customize your design in our 3D Ring Designer » (texte de la page) : non ouvert, car le clic sur une carte lance le concepteur JewelerOS qui appelle `www.jeweleros.com/api/…`, interdit par robots.txt |
| Hors concepteur [V] | Catalogue « Bridal & Engagement » (1 917 articles), recherche de diamants (`/diamonds/`), page « Design Your Own Jewelry » (`/CustomDesigns/`), services (custom, réparation, estimation, financement, bijou permanent) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose | bouton | Les images des 9 cartes passent à la couleur choisie, sans appel à l'API (aucune requête bloquée) ; or jaune actif par défaut | aucun prix affiché | OK [V] |
| Cartes de style (8) + « Start from scratch » | bouton | Non cliquées : le clic ouvre le concepteur 3D, dont l'API est interdite par robots.txt de jeweleros.com | n.a. | non testé, interdit |
| Back / Skip | bouton | Non cliqués (destination inconnue ; Skip passe probablement l'étape [S]) | n.a. | non testé |
| Menu, About Us, Contact (en-tête du concepteur) | lien | Listés ; non suivis | n.a. | non testé |
| Étape 1 : message « Hi there, have a question? Text us here. » et bouton « Text us » (Podium) | chat | Bulle recouvrant le coin d'une carte (« Start from scratch » partiellement masquée) ; non ouvert | n.a. | non testé |
| Menu principal : BRIDAL, DIAMONDS, JEWELRY, CUSTOM, SERVICES, ABOUT, CONTACT | lien | Pages Bridal, Diamonds, Custom, Services, About ouvertes et lues | aucun | OK [V] |
| Téléphone (605) 339-6956 | lien tel | Non appelé | n.a. | non testé |
| Recherche (`/search/`) | lien | Non ouvert : `/search` interdit par robots.txt | n.a. | non testé, interdit |
| Wish List, Login (`/account/…`) | lien | Non ouverts : `/account` interdit par robots.txt | n.a. | non testé, interdit |
| Diamonds : formes (11 icônes) | icône | Listées ; non actionnées (les filtres de ce type ajoutent des paramètres d'adresse en partie interdits par robots.txt : `?sort=`, `?count=`, `?item=`, `?price_0=`) | n.a. | non testé |
| Diamonds : carat (0,51 à 10,00), couleur (Z à D), coupe (Poor à Ideal), pureté (N à FL) | curseur/champ | Lus, non actionnés | n.a. | lu |
| Diamonds : Compare (0), Reset Filters, survol d'une ligne | onglet/bouton | Non actionnés. L'encart « Hover over a diamond to find more information » promet une fiche au survol | n.a. | non testé |
| Diamonds : tableau | liste | Colonnes forme, taille, coupe, couleur, pureté, laboratoire (GIA) ; **aucune colonne de prix** | pas de prix | lu [V] |
| Catalogue Bridal & Engagement | liste | 1 917 articles, 24/48/72/96 par page, tri (Featured, Newest, Name), filtres Product Types, Designers (Endless Designs, Faini, Lashbrook Designs, Royal Jewelry, Valina), Material (or 10, 14, 18 k, platine, titane, tantale, zirconium, cobalt, carbone, Damascus, météorite). Aucun prix dans le texte de la liste (références du type « Faini 140-616 ») | pas de prix | lu [V] |
| Page « Verifying… » du catalogue signalée par l'orchestration | page | Non rencontrée : la liste s'est affichée normalement à l'essai (statut 200) ; un seul essai, pas de nouvel essai | n.a. | non reproduit |
| Talk to a designer / START A DESIGN / CONTACT US APPOINTMENT | bouton | Non cliqués (formulaires) | n.a. | non testé |
| Formulaire e-mail du pied de page (SUBMIT) | formulaire | Non rempli (règle) | n.a. | non testé |
| Liens sociaux, Google/Facebook Reviews, Thinkspace | lien | Non suivis | n.a. | non testé |

Sur iPhone 13 : 31 contrôles listés (48 sur ordinateur) ; l'étape 1 s'affiche en deux colonnes de cartes, avec les mêmes pastilles de métal et boutons Back et Skip.

## Options disponibles

- **Métaux (étape 1)** : or jaune, or blanc, or rose.
- **Styles (étape 1)** : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, three stone, partir de zéro.
- **Pierres (recherche de diamants)** : formes à 11 icônes, carat 0,51 à 10,00, couleur D à Z, coupe Poor à Ideal, pureté FL à N ; laboratoire GIA observé sur les lignes lues [V].
- **Matériaux (catalogue)** : or 10 k, 14 k, 18 k (jaune, blanc, rose, bicolore), platine, titane, tantale, zirconium, cobalt, carbone, Damascus, météorite [V].
- **Services** : custom design, réparation de bijoux et montres, estimations, financement, bijou permanent [V].
- Non vérifiés (concepteur 3D) : taille de doigt, gravure, pierre, pavage, vues 3D, AR.

## Prix, délais, retours, garanties

- **Prix** : aucun prix affiché sur les pages lues (catalogue, recherche de diamants, concepteur étape 1). Le prix du concepteur n'a pas pu être vu. [V pour l'absence sur ces pages]
- **Délai, livraison, retours, garanties** : aucune page lue ne les publie ; la page `/services/financing/` est vide de contenu (titre « Financing » seul) [V]. Page de politique de retour non trouvée dans les liens du pied de page (seulement « Privacy Policy »). [V]
- Un des trois liens de menu de pied de page est « Custom Design » (`/services/custom-design/`, redirigé vers `/CustomDesigns/`).
- Les certificats : association GIA, RJO, IJO affichée en pied de page ; laboratoire GIA sur les diamants de la recherche [V]. IGI et libellé du synthétique : non vus.

## Confiance et service

- Entreprise familiale depuis 1950 à Sioux Falls, atelier de fabrication depuis 1978, ouverte au public depuis 2000, propriétaires Nic et Nathan Faini depuis 2023 ; magasin au 6203 S. Old Village Place, horaires affichés (lundi à vendredi, samedi 10 h à 16 h, dimanche fermé) [V].
- Promesse « Artisan-Direct Collaboration » : « the person hearing your story is the same person communicating with the goldsmith » ; restauration au laser et sertissage au microscope [V].
- Avis : liens vers les avis Facebook et Google en pied de page, sans note affichée dans le texte lu [V].
- Contact : téléphone, bulle de chat Podium « Text us here », prise de rendez-vous [V, non ouverts].
- Langue : anglais seul ; devise : dollar [I, aucun prix vu].
- Preuves de fabrication : « custom gallery » annoncée (« View our custom gallery », « We've created hundreds of custom jewelry designs ») ; aucune vidéo d'atelier ni suivi de commande lus [V].

## Points forts à retenir pour JR Diamond

1. **Étape 1 en un écran** : trois pastilles de métal qui recolorent aussitôt les 9 styles, sans rechargement ni appel réseau. Preuve : clic sur la pastille blanche puis rose, captures `sw_white` / `sw_rose`.
2. **Affichage rapide du point d'entrée** : étape 1 visible en 1,4 s sur ordinateur et 1,6 s sur iPhone 13 [V, mesure de cette session].
3. **« Start from scratch »** à côté des 8 styles : une porte d'entrée pour le sur-mesure. Preuve : carte visible sur la page de départ.
4. **Récit de proximité de l'atelier** (« la personne qui écoute votre histoire parle au bijoutier ») : message proche du positionnement « l'atelier en direct ». Preuve : page About Us.
5. **Passerelle claire vers un humain** : téléphone, texto, rendez-vous à chaque page. Preuve : en-tête et bulle « Text us here ».

## Défauts observés

- **Pas de prix** sur les pages lues, y compris la liste de diamants et le catalogue de 1 917 articles. [V]
- **Concepteur 3D hors de portée** de cet audit (API JewelerOS interdite aux robots) : impossible de dire ce que fait le parcours après l'étape 1.
- Aucune page de retours, de livraison ou de garantie trouvée ; page Financing vide. [V]
- Bulle de chat qui recouvre en partie la carte « Start from scratch » sur ordinateur 1366×900. [V]
- Recherche de diamants : aucun prix, et la fiche n'apparaît qu'« au survol » (peu adapté au tactile) [V pour le texte d'invite, I pour l'effet sur mobile].

## Limites de l'audit

- **Statut partiel** : le concepteur 3D de JewelerOS, le chargement de ses étapes 2 à 4, le prix, la taille, la gravure, le panier et le paiement n'ont pas été ouverts. Cause : `jeweleros.com` interdit `/api/` à tous les robots ; le site de Faini appelle `www.jeweleros.com/api/config/…` et `/api/widget/config/…` dès l'ouverture de la page (requêtes de la page, pas un écart), mais je n'ai pas cliqué de carte de style qui ouvrirait le concepteur.
- Les filtres des diamants et du catalogue n'ont pas été actionnés (paramètres d'adresse interdits ; `/search`, `/cart`, `/account`, `/checkout`, `/jewelrybox`, `/newsletter` interdits).
- La page « Verifying… » mentionnée en amont n'est pas apparue à l'essai : la mention ne s'est pas reproduite, sans conclusion sur sa fréquence.
- Aucun formulaire rempli, aucun chat ouvert. Les mesures de temps dépendent du proxy de l'environnement.
- Une page `/shipping-returns/` a été contrôlée dans robots.txt mais n'a pas été ouverte (existence non vérifiée).

## Sources

- https://www.fainidesigns.com/custom-ring-builder/ (étape 1, ordinateur et iPhone 13)
- https://www.fainidesigns.com/diamonds/
- https://www.fainidesigns.com/catalog/bridal-engagement/
- https://www.fainidesigns.com/CustomDesigns/ et https://www.fainidesigns.com/services/
- https://www.fainidesigns.com/services/financing/ et https://www.fainidesigns.com/company/about-us/
- https://www.fainidesigns.com/robots.txt ; https://www.jeweleros.com/robots.txt (règle `Disallow: /api/`)
