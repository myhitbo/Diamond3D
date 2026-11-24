# Audit MI Diamonds (midiamonds.eu), Sofia

- **Site** : MI Diamonds, https://www.midiamonds.eu/ (société MI DIA EOOD ; marque familiale née à Sofia dans les années 1980 d'après la page « À propos ») [V : `/pages/aboutus`, `/policies/shipping-policy`]
- **Page de départ** : https://www.midiamonds.eu/collections/engagement-rings puis fiche https://www.midiamonds.eu/products/arcus-trellis-solitaire-round-diamond-050ct-engagement-ring-14k-white-gold (pas de configurateur : catalogue Shopify à modèles fixes)
- **Date** : 15/11/2026 (rédigé le 24/11)
- **Appareils** : Chromium ordinateur 1366×900, iPhone 13 émulé
- **Statut** : **partiel** (ajout au panier interdit par `robots.txt` : `/cart/` ; plusieurs onglets de la fiche non relus)
- Légende : [V] vérifié · [I] inféré · [S] supposé. Prix en euros, bulgare.

## Parcours

| Étape | Options |
|---|---|
| Catalogue (200 bagues, 23 pages) | tri (9 options), filtres Sexe, Type de pierre (naturel 180, synthétique 181), Couleur d'or (blanc 68, jaune 59, mixte 21, rose 58), Prix (0 à 34 103 €) [V : extrait de la page] |
| Fiche modèle | taille de bague (champ texte), couleur d'or (3 pastilles), type de pierre (naturel / synthétique), ajout au panier, comparer, demande, livraison, partage ; onglets : personnalisation sur mesure, avis, livraison, retour [V] |
| Sur mesure | liste de personnalisations « après consultation » (qualité de diamant, taille du centre, autres pierres, 9 k / 18 k, or bicolore, ajout ou retrait de pierres, retouche de visuel, gravure) [V] |
| Panier | non atteint |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « Entrez dans le monde de l'éclat » (e-mail, « Inscription ») | fenêtre | s'ouvre seule au chargement et **bloque tous les clics** tant qu'on ne la ferme pas par la croix | — | Défaut [V] |
| Pastille « Naturel / Synthétique » : « Естествен диамант », « Лабораторен диамант » | radio | l'URL gagne `?variant=…` ; la bague Arcus 0,50 ct passe de **1 805 €** (naturel) à **977 €** (synthétique), délai inchangé (7 à 14 jours ouvrés) | 1 805 → 977 € | OK [V] |
| Couleur d'or (blanc, jaune, rose) | 3 pastilles | modèles frères : Arcus en or jaune et rose, même prix (1 805 €) dans la liste « produits liés » ; clic non suivi | 0 | Partiel [V pour les prix] |
| Taille de bague | champ texte libre (`properties[…]`) | accepte la saisie libre ; remplissage automatisé bloqué (délai) | — | Non testé : champ non rempli |
| « Outil de choix de la taille » | lien | ouvre l'aide ; page `/pages/size-chart` liée dans le pied de page | — | Partiel : contenu non lu |
| Galerie : 4 miniatures, « survolez pour agrandir » | images | agrandissement au survol (zoom), une photo principale 499×374 px | — | Présent [V] ; pas de vidéo ni 3D |
| « Voir les spécifications », « Certification et authenticité » | accordéons | cliqués ; **contenu non capturé** | — | Non testé : contenu |
| « Ajouter au panier » | bouton | non cliqué : `/cart/` interdit par `robots.txt` | — | **Panier interdit par `robots.txt`** |
| « Comparer » | bouton | cliqué, effet non constaté | — | Non testé : effet |
| « Demande » (« Запитване ») | onglet | affiche le texte de personnalisation sur mesure (liste ci-dessus) | — | OK [V] |
| « Livraison », « Avis », « Retour » (onglets) | onglets | cliqués ; texte non capturé | — | Non testé : contenu ; voir pages de politique |
| « Partager » | bloc | « Copier le lien », Facebook, X (Twitter), Pinterest | — | OK [V] |
| Tri du catalogue | liste | 9 options : recommandé, pertinence, meilleures ventes, A–Z, Z–A, prix croissant, décroissant, date | — | Présent [V] ; non actionné |
| Pagination | liens | 23 pages ; `?page=2` répond | — | OK [V] |
| Filtres du catalogue (type, or, prix) | panneau | listés par l'extrait ; **absents de la liste de contrôles visibles** et non actionnés | — | Non testé |
| Inscription à la lettre d'information | champ | non rempli (règle : aucun formulaire) | — | Non testé : règle |
| Sélecteur de langue BG | bouton | présent en haut à droite ; autre langue non vérifiée | — | Partiel |

## Options disponibles

- **Origine de la pierre** : naturel ou synthétique sur chaque fiche [V].
- **Couleur d'or** : blanc, jaune, rose (modèles frères) ; **or 14 k** de série ; 9 k, 18 k et bicolore « sur demande après consultation » [V].
- **Forme et carat** : fixés par modèle (rond 0,30 à 2 ct, poire 0,90 ct…) ; changement de taille du centre « possible » par devis [V].
- **Taille de bague** : champ libre, outil de mesure, tableau de tailles [V].
- **Gravure** : « si le modèle le permet », par devis [V].
- **Pierres de couleur** : saphir, rubis, émeraude, par devis [V].

## Prix, délais, retours, garanties

- **Prix** : prix unique par fiche, bascule naturel/synthétique ; ex. Arcus 0,50 ct rond 14 k blanc 1 805 €, Teneritas 0,30 ct 1 294 €, Flexus 523 € [V]. Aucune décomposition du prix [V].
- **Délai** : fiche « livraison à votre adresse 7 à 14 jours ouvrés » ; politique : 1 à 5 jours (prêt), 7 à 14 jours (sur mesure) ; FAQ : prêt 2 à 3 jours, personnalisé 10 à 15 jours : **incohérence** entre fiche, politique et FAQ [V].
- **Livraison** : gratuite en Bulgarie et dans l'UE, par Econt, assurée, suivi par e-mail, traitement sous 24 h [V].
- **Retours** : 14 jours si le bijou est dans son état d'origine ; les bijoux sur mesure « ne sont pas repris selon la loi bulgare » [V].
- **Garantie** : 12 mois sur le sertissage et les soudures ; document d'authenticité avec le titre de l'or [V].
- **Paiement** (FAQ) : carte, virement, paiement à la livraison pour certains produits ; moyens affichés au panier non vus [V].

## Confiance et service

- **Certificats** : GIA, IGI ou HRD pour la plupart des pierres ; certificats d'évaluateurs bulgares pour les plus petites ; contrôle qualité par cinq professionnels avant sertissage [V : `/pages/certification`, `/pages/faq`].
- **Consultation** d'expert (« Réserver une consultation »), pas de WhatsApp ni de téléphone visible sur la fiche [V pour la page lue].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, pas de suivi de commande illustré [V].
- **Avis** : onglet « Avis » présent ; contenu non lu [V].
- **Libellé** : « лабораторен диамант », « Lab-Grown Diamonds » ; « синтезирани » (procédé HPHT/CVD) dans la FAQ [V].

## Points forts à retenir pour JR Diamond

1. **Même bague, deux origines, deux prix côte à côte** (1 805 € contre 977 €) sans changer de page. Preuve : bascule « Лабораторен диамант » sur la fiche Arcus.
2. **Liste explicite de ce qui est personnalisable « après consultation »** (huit points) : bon modèle de promesse honnête pour les options que la 3D ne montre pas. Preuve : onglet « Запитване ».
3. **Garantie de 12 mois et document d'authenticité** présentés dans une page « Certification et confiance », avec contrôle par cinq experts. Preuve : `/pages/certification`.
4. **Livraison gratuite et assurée dans toute l'UE**, politique chiffrée. Preuve : `/policies/shipping-policy`.
5. **Retour sur mesure expliqué** : exclusion indiquée avec renvoi à la loi. Preuve : FAQ, question « Puis-je retourner ou échanger le bijou ? ».

## Défauts observés

- **Fenêtre d'inscription qui bloque la page** dès le chargement ; sur iPhone elle s'ouvre aussi [V ordinateur ; mobile non revérifié].
- Le prix du modèle n'affiche pas ce qui le compose ; les formes et carats ne sont pas des options mais des modèles séparés [V].
- Trois délais différents (fiche, politique, FAQ) [V].
- Accordéons et onglets dont le texte n'est pas lisible en navigation automatisée [V].
- Des adresses `checkouts/internal/preloads.js` et `cart.js` sont appelées automatiquement par le thème au chargement mobile (appels du site, non déclenchés par un clic) [V].

## Limites de l'audit

- Aucun ajout au panier (interdit par `robots.txt`) : récapitulatif, frais, moyens de paiement réels non vus.
- Filtres du catalogue, champ de taille, accordéons, onglets Livraison/Avis/Retour, « Comparer » et la page « Réserver une consultation » non vérifiés.
- Temps d'apparition du visuel principal : ordinateur 2,1 s (une autre passe : 4,9 s) ; iPhone 2,3 s ; mesure instable selon la passe [V].
- Une seule fiche (Arcus) auditée en détail ; le sur mesure n'a pas été sollicité.

## Sources

- https://www.midiamonds.eu/collections/engagement-rings · https://www.midiamonds.eu/products/arcus-trellis-solitaire-round-diamond-050ct-engagement-ring-14k-white-gold
- https://www.midiamonds.eu/pages/aboutus · https://www.midiamonds.eu/pages/faq · https://www.midiamonds.eu/pages/certification · https://www.midiamonds.eu/policies/shipping-policy
- Extrait de recherche web de `/collections/engagement-rings` (filtres, prix maximum 34 103 €).
- `robots.txt` : https://www.midiamonds.eu/robots.txt (`/cart/`, `/checkouts/` interdits)
