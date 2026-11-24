# Audit : Bijouterie Goedert (Luxembourg)

- **Site** : Bijouterie Goedert (Goedert Serge SARL), orfèvrerie à Luxembourg-ville
- **Adresse** : https://www.bijou.lu/ (départ : https://www.bijou.lu/shop/fiancailles/ ; fiche : `…/shop/fiancailles/queen-bague-solitaire-en-or-blanc-18kt-et-brillant-0-50ct-3835`)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : complet pour la boutique en ligne ; il n'y a **pas de configurateur** (pièces uniques à prix fixe, sur mesure en boutique)
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Boutique `/shop/fiancailles/` | 44 pièces avec photo, nom, prix ; filtre métal (3), couleur des pierres (3), gamme de prix (curseur 1 255 – 14 065 €) ; recherche ; liste de souhaits ; compte ; langue (bouton « DE ») (V) |
| 2. Fiche | 4 photos (miniatures), détails (alliage, pierre, poids, dimensions, taille), choix de taille 51 à 56, 4 onglets (Produit, Plus d'infos, Livraison, Retour) (V) |
| 3. Panier | `/cart.php` : réservation 15 minutes, code de bon d'achat, TVA, frais de transport, total (V) |
| 4. Sur mesure | Pas en ligne : « Puis-je concevoir ma bague de fiançailles avec vous ? Avec grand plaisir » (FAQ) ; commande en boutique ou par courriel (V) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Je refuse / C'est bon (cookies) | boutons | Bandeau fermé (« Je refuse » testé) | — | OK |
| Icône filtres | bouton | Ouvre un panneau : métal, couleur, prix ; message « 44 pièces ont été trouvées » | — | OK |
| Filtre Or blanc | case | Liste réduite | 14 pièces | OK |
| Filtre Or jaune | case | Liste réduite | 26 pièces | OK |
| Filtre Or rouge | case | Liste réduite | 6 pièces | OK |
| Filtre pierre Blanc | case | Liste réduite | 41 pièces | OK |
| Filtre pierre Jaune | case | Liste réduite | 2 pièces | OK |
| Filtre pierre Vert | case | Message de compte non lu | — | Partiel : résultat non relevé |
| Curseur de prix | curseur | Poignée gauche déplacée : 12 pièces | de 1 255 € vers le haut | OK |
| Recherche (loupe) | champ | Champ « recherche de produit » ouvert, non utilisé | — | Non testé : saisie |
| Liste de souhaits, compte, bon cadeau | liens | Non ouverts (compte et formulaires exclus) | — | Non testé |
| DE (langue) | lien | `/switch_language.php` non suivi | — | Non testé |
| Miniatures (4) | image | La 2e remplace la photo principale | — | OK |
| Photo principale | image | Un clic ne l'agrandit pas | — | OK : pas de zoom |
| Onglet Produit | onglet | Détails de la pièce | 5 695 € | OK |
| Onglet Plus d'infos | onglet | Présentation de l'atelier, magasin, invitation à écrire ou téléphoner | — | OK |
| Onglet Livraison | onglet | Pays d'expédition, frais, délais | — | OK |
| Onglet Retour | onglet | 14 jours de rétractation et exception | — | OK |
| Taille 51 à 56 | liste | Six valeurs ; 55 choisie, la ligne « Taille de la bague : EU 53 » n'a pas changé | inchangé | Partiel (effet dans le panier non vérifié) |
| Ajouter au panier | bouton | Page `/cart.php` : taille 53, quantité 1, TVA 827,48 €, net 4 867,52 €, total 5 695,00 € | 5 695,00 € | OK |
| Passer ma commande, Continuer mes achats, Appliquer (bon) | boutons | Non cliqués | — | Non testé : au-delà du panier |
| Se connecter / Continuer sans login | liens | Visibles sur la fiche, non cliqués | — | Non testé |
| Pied de page : conditions, mentions, confidentialité, rétractation, consignes de sécurité | liens | Conditions lues ; autres non ouverts | — | OK (conditions) |
| Menu (iPhone) | bouton | Mêmes rubriques ; 76 contrôles aux deux affichages | — | OK |

## Options disponibles

- **Filtres** : métal (or blanc, jaune, rouge) ; couleur des pierres (blanc, jaune, vert) ; prix (curseur).
- **Taille** : 51 à 56 sur la fiche testée ; description du bijou en une taille précise « EU 53 ».
- **Pas d'option** de métal, de pierre, de carat, d'origine, de gravure ni de cadeau sur la fiche (V).
- **Services** : retrait ou livraison, bons cadeaux (`voucher.php`), conseil en boutique, rendez-vous ; Letzshop (place de marché locale) cité comme second canal (I).

## Prix, délais, retours, garanties

- **Affichage** : prix TTC fixe par pièce, par exemple 5 695,00 € ; panier : net 4 867,52 €, TVA 17 % 827,48 €, transport 0,00 € (Luxembourg) (V). Fourchette de la liste : 1 255 – 14 065 € (V).
- **Détail technique** : poids du diamant, diamètre en mm, couleur et pureté (H/VS1), certificat GIA, poids total (≈ 5,5 g), dimensions (V).
- **Délais** (onglet Livraison) : 3 à 10 jours ouvrables pour les pièces en stock ; 15 à 20 jours ouvrables pour les pièces à la demande ou en production ; livraison assurée et traçable (V). Les CGV promettent une livraison sous 30 jours après paiement complet (V).
- **Frais** : 29 (monnaie non lue) pour Andorre, Gibraltar, Islande, Norvège, Saint-Marin, Chypre ; liste de pays UE à tarif distinct, montant non relevé ; 0,00 € vers le Luxembourg dans le panier (V).
- **Retours** : rétractation 14 jours ; **exception** « produits confectionnés selon les spécifications du consommateur ou nettement personnalisés » (article 55 §4b de la loi luxembourgeoise, cité par le site) ; 7 jours pour un produit non conforme ; retour dans l'état d'origine avec étiquette, certificats et facture ; examen sur la base de photos haute définition prises avant l'expédition (V, CGV).
- **Paiement** : virement bancaire ou PayPal d'après les CGV ; l'annuaire editus cite aussi Visa, Mastercard et Payconiq (I). Acompte valable sept jours (V).
- **Taille** : « nous pouvons ajuster la taille à titre gracieux, dans la mesure des possibilités » ; les bijoux transformés à la demande ne sont pas repris (V).

## Confiance et service

- Atelier : « tous les bijoux sont réalisés à la main dans notre atelier » ; boutique à la vieille ville, 4 rue Chimay (V). Numéros de registre de commerce et de TVA affichés (B88623, LU19301866) (V).
- **Preuve de fabrication** : photos de la pièce prises avant l'expédition (citées dans les CGV pour contrôler les retours) ; aucune photo ou vidéo de fabrication, aucun suivi en ligne (V pour l'absence).
- Avis clients : aucun avis affiché sur les pages lues (V). Letzshop affiche une note de plateforme, non propre au site (I).
- Contact : téléphone +352 26 26 21 23, courriel, FAQ sur le sur mesure, la taille et la transformation (V).
- Langues : français (défaut) et allemand ; devise : euro (V).
- Origine des diamants : « diamant naturel », certificat GIA sur la fiche de 1,01 ct (adresse de la pièce) ; aucun synthétique (V).

## Points forts à retenir pour JR Diamond

1. **Fiche technique détaillée** de chaque pièce : diamètre en mm, couleur/pureté, certificat, poids en grammes (fiche « queen »).
2. **Panier avec TVA décomposée** et transport affiché avant tout compte (`/cart.php`).
3. **Photos haute définition avant expédition, utilisées au retour** : preuve de ce qui a été expédié (CGV 6.5).
4. **Filtres simples** sur la liste (métal, couleur, prix) avec compteur de pièces (panneau de filtres).
5. **Page d'accueil des fiançailles qui dit le prix et l'atelier**, avec filtre par budget (texte de `/shop/fiancailles/`).
6. **Réservation de 15 minutes** du panier (`/cart.php`).

## Défauts observés

- **Pas de personnalisation en ligne** : une seule taille par fiche, pas de métal ni de pierre à choisir ; le sur mesure exige un déplacement ou un courriel (V).
- **Taille 55 sans effet visible** sur la fiche : la ligne « EU 53 » reste (V) ; le panier n'a pas été revérifié après ce choix.
- **Pas de zoom** sur la photo principale ; quatre photos seulement (V).
- **Retour sur le sur mesure exclu** (droit luxembourgeois), contrairement à Rosenberg (V).
- **Moyens de paiement limités** dans les CGV (virement, PayPal), pas de carte ni de paiement échelonné (V pour les CGV ; I pour les autres moyens).
- **Délais élargis** : 15 à 20 jours ouvrables pour le sur mesure ou la production ; promesse de livraison dans les 30 jours (V).
- Filtre « vert » : aucun résultat lisible (V) ; message d'état absent.

## Limites de l'audit

- Alliances (`/shop/alliances/`, `/shop/eheringe`) et autres catégories : non parcourues.
- Taille 55 : effet dans le panier non vérifié (le panier a été ouvert avec la taille 53 d'origine).
- Frais de livraison hors Luxembourg : seule une partie du texte a été relevée.
- Recherche, liste de souhaits, bon cadeau, compte, paiement, Letzshop : non utilisés.
- Mesure du visuel : première photo de la liste 3,7 s ; fiche 2,1 s sur ordinateur et 1,9 s en affichage iPhone (proxy de la session ; indicatif).

## Sources

- https://www.bijou.lu/shop/fiancailles/
- https://www.bijou.lu/shop/fiancailles/queen-bague-solitaire-en-or-blanc-18kt-et-brillant-0-50ct-3835
- https://www.bijou.lu/cart.php
- https://www.bijou.lu/terms_conditions.php
- https://www.bijou.lu/faq/
- https://www.bijou.lu/ (accueil)
- https://letzshop.lu/en/vendors/bijouterie-goedert ; https://www.editus.lu/en/bijouterie-goedert-luxembourg-22877 (I)
- `robots.txt` : absent, contrôle `robots.cjs` du 15/11/2026
