# Audit : Kux Jewelers (Mississippi)

- **Site** : Kux Jewelers, joaillier indépendant de Laurel (Mississippi), « Independently Owned and Operated Since 1965 » ; site Thinkspace (catalogue sans vente en ligne).
- **Adresse de départ** : https://www.kuxjewelers.com/design-your-ring/
- **Date** : 15/11/2026 (auditeur 2 du Mississippi)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 (émulation).
- **Statut** : **partiel**. Constructeur d'avant-projet en 4 étapes parcouru ; le 3D Ring Designer n'a pas chargé. Pas de blocage anti-robots. Pas de panier sur le site.
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

Même widget JewelerOS que Selman's (scripts de jeweleros.com, identifiant partenaire propre au site) [V : requêtes du widget].

| Étape | Options |
|---|---|
| 1 sur 4 « Let's start designing your ring » | Pastille de métal : or jaune, blanc, rose (le choix change les vignettes : `solitaire_rose.webp`). Style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| 2 sur 4 « Choose your center stone » | Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3 sur 4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carat, « Decide later » |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Après l'étape 4 | « Something went wrong / Try again », 4 relevés successifs sur 12 s, sans reprise |

Parcours testé : or rose → Halo → Lab Grown → 3e forme (Cushion) → 3e carat (1,5 ct) → « 1 - 3 months » [V].

## Contrôles vérifiés

controls.cjs : 61 contrôles visibles sur ordinateur (statut HTTP 200), dont 6 pour le widget ; reste = en-tête, menus, désigners, pied de page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (3) | bouton | Or rose testé : vignettes passent en « rose » | aucun | OK [V] |
| Cartes de style (9) | carte | Halo testé : passe à l'étape 2 | aucun | OK [V] ; autres non testées |
| Natural / Lab Grown | bascule | Lab Grown devient actif | aucun | OK [V] |
| Formes (9 + Decide later) | carte | Cushion testé : étape 3 | aucun | OK [V] |
| Carats (8 + Decide later) | carte | 1,5 ct testé : étape 4 | aucun | OK [V] |
| Délais (4) | carte | « 1 - 3 months » : chargement puis erreur | aucun | **en échec** [V] |
| « Skip » | bouton | Présent ; non actionné | — | non testé |
| (601) 428-0674 | lien tel | Non appelé | — | non testé |
| Hours & Directions, Email Us, Contact | liens | Pages de contact ; non soumises | — | non testés |
| Wish List / Login | liens | Mènent à /account/login/ (compte : non ouvert, règle) | — | non testés |
| Search | lien | /search/ (adresse de recherche non ouverte) | — | non testé |
| Menu BRIDAL, JEWELRY, WATCHES, DESIGNERS, SERVICES, ABOUT, CONTACT | liens | Catalogue de 655 articles dans « Bridal & Engagement » [V] | non affiché | OK |
| Fiche bague (012-15296) : Add to Wish List, Contact, Appointment, Share, Drop a Hint, Inquire | boutons | Contact / Appointment / Inquire = formulaires, non remplis ; pas d'« ajout au panier » | « Contact us for pricing and availability » | lus, non actionnés |
| Filtres du catalogue (type, désigner, matériau, tri 24-96 par page) | filtres | Listés (matériaux 10 k, 14 k, 18 k, diamant, émeraude…) ; non appliqués | — | non testés |

## Options disponibles

- Constructeur : mêmes listes que Selman's (3 métaux or, 9 styles, 9 formes, 8 carats, 4 délais). Pas de platine, titre d'or ni taille de doigt, gravure, certificat [V].
- Catalogue : 655 articles « Bridal & Engagement » ; types Bridal Sets, Engagement Rings, Rings, Wedding Bands ; marques Beautiful Bride, Kux Collection, Love Story Diamonds, MALO, MARDINI [V].
- Services : corporate gifts, custom designs (« handcrafted jewelry just for you »), financing (« Buy now, and pay over time »), réparation, perles, montres (/services/) [V].
- Modes de vue : aucun accessible.

## Prix, délais, retours, garanties

- **Prix** : aucun dans le constructeur ; sur la fiche d'une bague de fiançailles : « Contact us for pricing and availability » [V]. Pas de prix en ligne.
- **Délai** : seulement la question de souhait de l'étape 4 ; aucune promesse [V].
- **Retours, garanties, livraison, moyens de paiement** : non trouvés sur les pages lues ; pas de commande en ligne donc pas de panier [V pour l'absence de bouton sur la fiche ; I pour le reste]. Pages « Privacy Policy » et « Terms and Conditions » existent, non lues.
- **Devise / langue** : USD, anglais. **Libellé synthétique** : « Lab Grown » dans le constructeur [V]. **Certificats** : non mentionnés dans les pages lues.

## Confiance et service

- Ancienneté affichée : « Independently Owned and Operated Since 1965 » [V].
- Téléphone en en-tête, page « Hours & Directions », bouton « Appointment », « Drop a Hint » (envoi d'un indice à un proche) [V].
- Financement annoncé sur /services/ (sans taux ni partenaire lus) [V].
- Avis clients, preuves de fabrication, suivi de commande : non vus sur les pages lues [V pour l'absence sur celles-ci].

## Points forts à retenir pour JR Diamond

1. **« Drop a Hint » sur la fiche d'une bague** : permet de signaler à un proche la bague qu'on souhaite. Preuve : bouton listé sur la fiche 012-15296. Idée pour un « partager à mon partenaire ».
2. **Bouton « Appointment » à côté de « Contact »** sur chaque fiche : prise de rendez-vous directe (présent ; non actionné). À rapprocher d'un rendez-vous vidéo avec l'atelier.
3. **Même assistant court (4 questions) avec « Decide later »** partout. Preuve : étapes 2 et 3.
4. **Catalogue très large (655 articles bridal)** avec filtres matériau et marque : preuve d'offre. Preuve : page /catalog/bridal-engagement/.

## Défauts observés

- **3D Ring Designer inaccessible** : « Something went wrong / Try again » après l'étape 4 ; requêtes vers jeweleros.com/api/create/from-ring-config bloquées par CORS dans la console [V]. [I] cause possible côté environnement d'audit ; non tranchée.
- Pas de prix, pas de vente en ligne : le constructeur n'aboutit à rien de visible pour le visiteur.
- Pas de retours, garanties ni délais publiés sur les pages lues.
- Aucune photo de l'atelier ni exemple de fabrication sur les pages vues.

## Limites de l'audit

- Mesure du visuel : première vignette d'étape 1 chargée en 1,9 s (ordinateur) et 1,9 s (iPhone), une mesure chacune. Le visuel 3D n'a pas pu être mesuré (non chargé).
- Cartes de style autres que Halo, « Start from scratch », « Skip », filtres du catalogue non actionnés ; pages de politique non lues.
- Panier : le robots.txt interdit /cart ; le site n'a pas de panier d'achat sur les fiches lues (« Contact us for pricing »). Aucun formulaire rempli, aucun compte ouvert, aucun chat ouvert.
- /api/ de jeweleros.com est interdit par robots.txt : appelé seulement par le widget du site.
- Pas de relecture des avis car le site n'en affiche pas sur les pages vues (autres pages non explorées).

## Sources

- https://www.kuxjewelers.com/design-your-ring/ (constructeur)
- https://www.kuxjewelers.com/catalog/bridal-engagement/ ; https://www.kuxjewelers.com/catalog/love-story/012-15296/ ; https://www.kuxjewelers.com/services/
- https://www.kuxjewelers.com/robots.txt
- Captures et JSON dans le dossier de travail de l'audit (hors dépôt).
