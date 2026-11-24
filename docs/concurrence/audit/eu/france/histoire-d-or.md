# Audit : Histoire d'Or, réseau national à fiche simple (français, €)

| | |
|---|---|
| Site | Histoire d'Or (réseau de bijouteries ; retrait en magasin sous 2 h, V) |
| Page de départ | https://www.histoiredor.com/fr_FR/c/bagues/par-type/bagues-de-fiancailles/, puis la fiche https://www.histoiredor.com/fr_FR/p/bague-hemera-ld-platine-blanc-diamant-synthetique/30620223502R30.html |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Catalogue et une fiche lus, taille de bague ouverte. **Panier non atteint ni tenté** : robots.txt interdit `*panier*` et toutes les adresses `/on/demandware.store/` (SFCC), dont l'ajout au panier, la disponibilité en direct, les avis et les recommandations ; ces requêtes ont été bloquées par notre garde. Aucune configuration à tester : la fiche n'a qu'un choix |
| robots.txt | interdit `/fr/session-utilisateur`, `*panier*`, `*recherche*`, `*sort=*`, `*filters*`, `*facette*`, `*prefn*`, `*demandware.store*`, `*Product-Variation*` (V). Pas de défi, pas de captcha |

Marques : **V** vérifié (page lue ou contrôle actionné) · **I** inféré · **S** supposé.

C'est le seul site du groupe qui n'est **pas un configurateur**. Il sert de contrepoint : une fiche, un prix, une taille (V).

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Catalogue « Bagues de fiançailles » | 1 607 produits ; « Filtrer & trier » ; mélange de bagues en oxyde de zirconium (27 à 340 €), plaqué or, argent, or et diamant (V) | prix par produit | photos |
| Fiche « Bague Hemera LD Platine Blanc Diamant Synthétique » | taille de bague (48 à 62), « Ajouter au panier », « Retirer en magasin » (V) | 1 090 € TTC, ou 3 × 364 € sans frais (V) | carrousel de photos (flèches « Previous slide », « Next slide ») |
| Panier | non atteint | — | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Taille de la bague | liste | 48 (présélectionné), 49 à 62 (V) | inchangé | ouverte ; une valeur par défaut déjà choisie |
| Ajouter au panier | bouton | non actionné (adresse d'ajout sous `/on/demandware.store/`, interdite) | — | non testé |
| Retirer en magasin | bouton | non actionné | — | non testé |
| Voir le descriptif / Détail du produit | accordéon | s'ouvre mais le contenu vient d'une adresse interdite ; vide dans notre relevé (V) | — | actionné ; **contenu non lu** |
| Filtrer & trier | bouton | non ouvert (les adresses de filtre sont interdites) | — | non testé |
| Ajouter à ma wishlist | icône | non actionnée (compte) | — | non testé |
| Recherche | champ | non saisi (adresse de recherche interdite) | — | non utilisé |
| Cookies | bannière | refus non nécessaire pour lire ; aucune fenêtre bloquante vue (V) | — | — |

## Options disponibles

- **Fiche relevée** : bague platine 950/1000, solitaire accompagné, diamant synthétique de 0,51 ct (V). Une seule configuration ; taille 48 à 62.
- **Catalogue** : « 1 607 produits » dans les bagues de fiançailles, dont des bagues en oxyde de zirconium (V) ; rubriques « Bagues de fiançailles Diamant Synthétique » et « Bagues solitaires Diamant Synthétique » (V).
- **Pas de choix** de métal, de carat, de couleur ni de gravure sur la fiche (V).

## Prix, délais, retours, garanties

- **Prix** : 1 090 € TTC, paiement en 3 fois sans frais avec Alma (V). Aucune décomposition.
- **Livraison** : « offerte dès 49 € d'achat » ; Click & Collect « disponible dans les 2 h » (V).
- **Retours** : « retours et remboursements gratuits sous 60 jours » ; « satisfait ou remboursé sous 60 jours » (V). Aucun délai de fabrication ni de livraison chiffré sur la fiche.
- **Garantie**, **mise à taille**, **gravure** : non lues (conditions non ouvertes).

## Confiance et service

- **Réseau** : retrait et retours en magasin (V).
- **Avis** : non lus (adresse interdite à notre garde) (V).
- **Accessibilité** : une « déclaration d'accessibilité » est liée en pied de page (V).
- **Contact** : non relevé.

### Terme du diamant synthétique et décret 2002-65

- « Diamant Synthétique » dans le nom, le titre et les rubriques, y compris « Diamant Synthetique 0.51Cts » dans le descriptif (V).
- **Conforme** au décret 2002-65 : « synthétique », sans « de laboratoire », sans « vrai » (V). Le site est un bon exemple de libellé légal chez un grand réseau.

## Points forts à retenir pour JR Diamond

1. **Le libellé légal passe en grand public** : « Diamant Synthétique » dans le nom du produit, sans fléchir sur l'argument de vente (V). JR Diamond peut écrire « synthétique » partout.
2. **Retour de 60 jours** : le plus long du groupe français (V).
3. **Click & Collect de 2 h et réseau de magasins** : une preuve de présence physique (V). JR Diamond a la Bourse de Ramat Gan à la place.
4. **Prix en 3 fois sans frais affiché sous le prix** (V).

## Défauts observés

1. **Aucun choix** : une bague, une taille ; pas de carat, de métal, de couleur ni de qualité (V).
2. **Contenu de la fiche chargé par des adresses interdites aux robots** : « Détail du produit », avis, disponibilité (V). Hors de portée d'un audit automatisé ; un visiteur humain les voit (I).
3. **Taille présélectionnée à 48** : un client distrait peut commander la plus petite taille sans l'avoir choisie (V).
4. **Catalogue « bagues de fiançailles » mêlé** d'oxyde de zirconium à 27–340 € et d'or avec diamants : l'acheteur de fiançailles voit des prix très disparates (V).
5. **Sur iPhone**, la page tient en 390 px de large, sans défilement horizontal ; le prix est à 516 px, le bouton « ajouter au panier » à 749 px (sous la ligne de flottaison de 664 px) ; document prêt en 17 s sur iPhone émulé, machine partagée (V).

## Limites de l'audit

- Panier, avis, descriptif complet, disponibilité, filtres, tri et recherche non lus (robots.txt).
- Une seule fiche de bague en diamant synthétique ; le catalogue n'a pas été filtré (filtres interdits).
- Aucun formulaire, aucun chat, aucun compte. iPhone émulé avec Chromium (pas un vrai Safari). Temps mesurés sur une machine partagée.

## Sources

- https://www.histoiredor.com/fr_FR/c/bagues/par-type/bagues-de-fiancailles/ · fiche : `/fr_FR/p/bague-hemera-ld-platine-blanc-diamant-synthetique/30620223502R30.html` · règles : `/robots.txt`
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/029abcd0-3d8a-56d2-8c2e-67bb96f3ed98/scratchpad/fr/`
