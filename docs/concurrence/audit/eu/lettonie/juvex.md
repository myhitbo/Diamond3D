# Audit : Juvex (Lettonie)

- **Site** : Juvex Briljanti Laulību un Saderināšanās Gredzeni, https://juvex.lv/ (Shopify). Boutique liée : https://www.briljants.lv/ (« by Juvex », extrait de recherche, non audité).
- **Page de départ** : https://juvex.lv/collections/engagement-rings-with-diamonds (pas de configurateur : liste de 25 bagues), fiche https://juvex.lv/collections/engagement-rings-with-diamonds/products/erd-20003
- **Date** : étude du 15/11/2026 ; contrôles réalisés le 24/11/2026.
- **Appareils** : ordinateur (Chromium 1366 × 900) pour les contrôles ; affichage iPhone 13 pour le temps d'apparition seulement.
- **Statut** : **partiel**. Aucun configurateur ; pages lues, panier (vide) lu, ajout au panier **non actionné** : le `robots.txt` autorise tout, mais le fichier `agents.md` du site demande aux agents de ne pas scripter les contrôles du panier et du paiement ; j'ai suivi cette demande.
- Marques : V vérifié, I inféré, S supposé. Site en letton avec des blocs en russe ; la fiche produit est en anglais.

## Parcours

| Étape | Options (V) |
|---|---|
| Liste « Fiançailles avec diamants » | 25 produits sur 2 pages ; tri : populaires, meilleures ventes, A-Z, Z-A, prix croissant, prix décroissant, date récente, date ancienne ; prix barré et prix soldé |
| Fiche | Photos (5 vignettes), nom, prix barré et soldé, bouton « Commander par WhatsApp +37122159080 », texte descriptif (or, poids, pierre, pureté, couleur, taille de coupe, « taille : toutes ») |
| Panier | Vide au moment du contrôle ; message « Your cart is currently empty », bouton « Continue shopping » |
| Autres collections | Alliances (`/collections/laulibu-gredzeni`), bagues de fiançailles (`/collections/engagement-rings`), bagues avec pierres de couleur, bracelets, boucles d'oreilles, pendentifs, diamants (23 produits), tous les produits |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tri (8 options) | liste | Présente sur la liste ; non actionnée | — | Lu, non actionné |
| Pagination (page 2, « suivant ») | liens | Présents ; page 2 non ouverte (liste lue dans l'extrait de recherche) | — | Lu |
| Vignettes de galerie (5 photos) | liens | Présentes sur la fiche ; non actionnées | — | Lu |
| « Commander par WhatsApp » (PASŪTĪT WHATSAPP) | bouton d'envoi (nom `add`) | Formulaire d'ajout au panier libellé WhatsApp : l'effet réel n'est pas vérifié (I : ajout au panier puis contact) | — | **Non actionné** (demande du site, règle de lecture seule) |
| Fiche : liste de variantes | liste | Une seule valeur (« Default Title ») : pas de choix de métal, de pierre ni de taille en ligne | — | OK (V) |
| Partager sur Facebook, épingler sur Pinterest | liens | Présents ; non ouverts | — | Lu |
| Menu « Joaillerie » (catégories), Diamants, Contacts | menu | Pages lues : contacts, diamants | — | OK (V) |
| Recherche, compte (« Ienakt »), panier (« Grozs ») | bouton, liens | Panier lu (vide) ; compte non ouvert (règle) ; recherche non utilisée | — | Lu |
| Lettre d'information (e-mail, « SUBSCRIBE ») | formulaire | Non rempli | — | Non testé (règle) |
| Appel, WhatsApp, Telegram, Viber (+37122159080) | texte | Affichés en tête de chaque page ; pas ouverts | — | Non actionnés |
| Liens vers Facebook, Pinterest, Instagram | liens | Présents ; non ouverts | — | Lu |

## Options disponibles

- **Métaux** : or 14 k 585 (blanc, jaune ou rose, visible sur l'exemple « or blanc massif 14 k ») ; platine, carbone, rhodium noir proposés « sur commande » pour les alliances (V, texte de la collection).
- **Pierres** : diamants naturels de 0,10 à 0,60 ct sur la liste (fiches : poids du diamant dans le nom) ; pureté, couleur, taille de coupe écrites dans le texte (V).
- **Origine naturel ou synthétique** : non proposée sur ces fiches. Le site frère briljants.lv affiche « diamants naturels et de laboratoire » et des tennis-bracelets en moissanite (extrait de recherche).
- **Taille de doigt** : « toute taille » ; « poids et prix varient avec la taille » (V).
- **Gravure, forme de pierre, monture** : aucun choix (V). « À la demande du client, tous les paramètres peuvent changer » (V).

## Prix, délais, retours, garanties

| Sujet | Constat (V) |
|---|---|
| Prix affichés | Barré et soldé. Exemples de fiches : 0,10 ct 500 € → 370 € ; 0,15 ct 700 → 530 ; 0,20 ct 1 100 → 670 ; 0,25 ct 1 250 → 840 ; 0,40 ct 1 950 → 1 450 (source : liste, extrait de recherche). Fiche 0,25 ct : 840 € |
| Décomposition | Aucune. Poids d'or (3,40 g) et de la pierre affichés ; pas de prix du métal, de la façon ni de la marge |
| Délai annoncé | Livraison 1 à 3 jours ouvrés en Lettonie (gratuite) ; 3 à 7 jours en Europe et au Royaume-Uni (35 €). Page d'accueil : commandes ordinaires 3 à 10 jours, exclusives 10 à 25 jours |
| Retours | 7 jours seulement ; neuf et dans l'emballage ; frais de retour à la charge du client ; **exclus : bijoux individuels sur croquis ou photo et alliances** ; remboursement 30 % si porté, 70 % si ouvert mais neuf |
| Garanties | 3 ans sur chaque produit annoncé sur briljants.lv (extrait de recherche) ; rien sur juvex.lv (non trouvé) |
| Certificats | GIA, HRD (écrit « HDR » dans le texte de la liste) et IGI (V, texte de la liste) |
| Libellé du synthétique | Absent de juvex.lv ; « laboratorijās briljanti » sur briljants.lv (extrait) |
| Devise, langues | EUR ; lettons et russe (V) |

## Confiance et service

- Salon : Pildas iela 16b, Riga, sur rendez-vous ; lundi à vendredi 10 h à 15 h (page contacts) ou 11 h à 15 h (pied de page) : horaires contradictoires (V). Contact : WhatsApp, Telegram, Viber, e-mail Gmail (V).
- Avis clients : aucun avis affiché sur les pages lues (V, non trouvés).
- Preuves de fabrication : aucune photo ni vidéo d'atelier, pas de suivi de commande (non trouvés). « Fabrication à la main » est une affirmation sans preuve (I).

## Points forts à retenir pour JR Diamond

1. **Livraison annoncée en jours dès l'en-tête** et gratuité (1 à 3 jours) : l'engagement est lisible partout (preuve : bloc « Livraison rapide » en pied de page).
2. **Le prix barré / soldé en clair** fait comprendre l'économie (preuve : 1 250 € → 840 €). À reprendre avec une décomposition, que Juvex ne donne pas.
3. **Le poids de la pierre dans le nom de chaque produit** (« 0,25 ct ») : le visiteur comprend le prix par pierre sans filtre (preuve : liste de 25 fiches).
4. **Fiche à une ligne de spécification** (métal, poids, pierre, pureté, couleur, taille de coupe) : un modèle de transparence minimale (preuve : fiche erd-20003).
5. **Commande par messagerie** : bouton WhatsApp sur chaque fiche (preuve : « PASŪTĪT WHATSAPP »).

## Défauts observés

- **Pas de configuration en ligne** : une bague = une fiche figée (V).
- **Retour sous 7 jours seulement** et exclusion des alliances et du sur-mesure (V).
- **Fiche produit en anglais sur un site letton**, nom de produit en letton ; bloc russe dupliqué (V).
- **Horaires contradictoires** et incohérence d'écriture (« HDR » pour HRD, « Piekdiena ») (V).
- Pas d'avis, pas de preuve de fabrication, pas de décomposition du prix (V).
- Promotions permanentes (prix barrés très élevés) : prix « de référence » douteux (I).

## Limites de l'audit

- Panier non actionné (demande du site) : récapitulatif, frais, moyens de paiement non vérifiés.
- Une seule fiche ouverte en entier (erd-20003) ; les autres fiches et la page 2 de la liste lues par extrait de recherche.
- Affichage iPhone : seulement le temps d'apparition de la première image (1,34 s, contre 1,45 s sur ordinateur) ; contrôles non recensés sur mobile.
- Sort, recherche, vignettes, partage, lettre d'information non actionnés. briljants.lv non audité.

## Sources

- https://juvex.lv/collections/engagement-rings-with-diamonds (24/11/2026 ; extrait de recherche pour les prix)
- https://juvex.lv/collections/engagement-rings-with-diamonds/products/erd-20003
- https://juvex.lv/collections/diamonds ; https://juvex.lv/collections/laulibu-gredzeni
- https://juvex.lv/pages/contacts ; https://juvex.lv/policies/refund-policy ; https://juvex.lv/cart (vide)
- https://juvex.lv/robots.txt ; https://juvex.lv/agents.md
- https://www.briljants.lv/ (extrait de recherche)
