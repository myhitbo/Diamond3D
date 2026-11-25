# Audit : Dameo (Cetinje / Podgorica, Monténégro)

- **Site** : https://dameo.me/ (vendeur : REBUSS d.o.o., Cetinje, selon les conditions d'utilisation [V])
- **Page de départ auditée** : https://dameo.me/zlatno-prstenje/ (les pages « vjereničko prstenje » étaient vides)
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Catalogue, fiche, conditions et panier vide lus ; **bouton d'ajout au panier non cliqué** : `robots.txt` interdit `/*?add-to-cart=` (« panier interdit par robots.txt »). Récapitulatif de commande, moyens de paiement du paiement : non vus.
- Marques : V vérifié · I inféré · S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Menu | SREBRO, SATOVI, ZLATARA, POKLONI I TEME, PERSONALIZUJ, NAKIT, BRENDOVI, OUTLET, O NAMA |
| 2. Pages fiançailles | https://dameo.me/kategorija/nakit/vjerenicko-prstenje/ et https://dameo.me/zlatno-vjerenicko-prstenje/ : « Nema proizvoda. » |
| 3. Liste utile | https://dameo.me/zlatno-prstenje/ : 5 bagues « Blush » en or 14 k |
| 4. Filtres (panneau) | Cijena, Pol, Pokloni i teme, Materijal nakita, Brendovi nakita, Personalizuj (+ Vrsta nakita, Brendovi satova… sur la page « vjereničko ») |
| 5. Tri | SORTIRANJE, NAJNIŽA CIJENA, NAJVIŠA CIJENA, NAJNOVIJE, NAJSTARIJE |
| 6. Fiche | Galerie plein écran, « Dodaj u korpu » (non cliqué), liste de souhaits, caractéristiques, catégories, produits liés |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Liste « zlatno prstenje » | page | 5 bagues : 1625WDI-52 diamants 669 € ; 1196YGO 279 € ; 1187WZI-56 cirkon 449 € ; 1252YZI-52 cirkons 279 € ; 1187BZI-54 cirkon 499 € [V] | 279 à 669 € | OK |
| Tri NAJNIŽA CIJENA | liste | Ordre 279, 279, 449, 499, 669 [V] | croissant | OK |
| Tri NAJVIŠA CIJENA | liste | Ordre 669, 499, 449, 279, 279 [V] | décroissant | OK |
| Tri NAJNOVIJE / NAJSTARIJE | liste | NAJNOVIJE appliqué, ordre non relevé ; NAJSTARIJE non essayé | — | Partiel |
| Filtres Cijena (curseur), Pol, Materijal… | panneau repliable (JetSmartFilters) | Présents ; non actionnés | — | Non testé |
| U korpu (carte produit) | lien `?add-to-cart=<id>` | **Non cliqué** : interdit par `robots.txt` | oui | Interdit |
| Dodaj u korpu (fiche) | bouton | **Non cliqué**, même motif | 669,00 € | Interdit |
| Dodaj na listu želja | lien `?add-to-wishlist=` | Non cliqué (change l'état du visiteur) | non | Non testé |
| « Pogledajte galeriju slika preko celog ekrana » | lien | Galerie plein écran de la fiche ; non ouverte | non | Non testé |
| Panier `/korpa/` (vide) | page | « Vaša korpa je trenutno prazna. Nazad u prodavnicu » [V] | — | OK |
| Newsletter (nom, e-mail) | formulaire | Lu seulement ; non envoyé | — | Non testé |
| Graviranje (`/graviranje/`) | page | Liste filtrée de produits gravables ; « besplatna usluga » (page Personalizuj) [V] | non | OK |
| Ogrlice s imenom | page | Colliers personnalisés (nom) ; non ouvert | — | Non testé |
| Kupovina na rate | page | Voir ci-dessous | — | OK |
| Kontakt i lokacije | page | Formulaire (nom, téléphone, e-mail, message), 4 villes ; non envoyé | non | OK (lecture) |
| reCAPTCHA (coin d'écran) | widget | Présent sur les pages [V] | — | Noté |

## Options disponibles

- Métaux sur les 5 bagues : or blanc 14 k, or jaune 14 k [V] ; pas de platine, pas d'or rose vu.
- Pierres : diamants (1 fiche : 9 diamants, 0,12 ct pour le plus grand, couleur Wesselton, pureté SI2), cirkon (oxyde de zirconium) [V].
- Aucun choix de taille de doigt visible sur la fiche 1625WDI-52 (pas de sélecteur) [V].
- Gravure : « besplatno graviranje » (service gratuit de la boutique) [V].
- Pas de configurateur, pas de forme de pierre, pas de choix de carat, pas d'origine naturel ou synthétique.

## Prix, délais, retours, garanties

- **Prix** : en EUR TTC (« cijene su iskazane sa PDV-om ») ; un seul prix par bague, sans décomposition [V]. Bandeau « Black Friday : remises calculées dans le panier » (15/11) [V].
- **Livraison** : 1 à 5 jours ouvrés, Montenegro Post Express ; gratuite au-dessus de 15 € dans les conditions (3 € en dessous) ; le bandeau dit « gratuite au-dessus de 30 € », la fiche « pour tous les pays au-dessus de 50 €, carte obligatoire à l'étranger » : **trois seuils contradictoires** [V].
- **Paiement** : conditions : espèces au livreur ou carte ; bas de page : Visa, Mastercard, Maestro, ID Check, NLB Banka [V]. Paiement en plusieurs fois (page « rate ») : cartes VRH (Lovćen banka) et Premium (Hipotekarna) jusqu'à 12 mensualités, CKB Shopping jusqu'à 6 sans intérêt, plus une option sans carte ; en boutique, promesses de remises (10 % argent, 5 % montres) [V].
- **Retours** : échange de taille ou de modèle sous 14 jours, article intact en emballage d'origine ; frais de retour à la charge du client sauf erreur ou défaut ; l'exception du sur-mesure n'est pas évoquée [V].
- **Garantie** : 2 ans (fiche) ; emballage d'origine [V].
- **Délai de fabrication sur mesure** : non applicable, pas d'offre sur mesure pour les bagues [V].

## Confiance et service

- Boutiques : Podgorica (BIG Fashion, Ivana Vujoševića 29, Džordža Vašingtona 8, Ulica Slobode 68), Cetinje, Kotor, Budva [V]. Téléphone +382 67 058 961 (8-20 h), e-mail [V].
- Avis : aucun sur la fiche lue [V]. Fiche Google Maps (Podgorica) : 4,5/5 sur 8 avis, un avis à 1 sur un bijou argent cassé et sans réponse (affiché par Google, non audité) [I].
- Certificat de diamant : aucun mentionné sur la fiche 1625WDI-52 [V]. Poinçon : non lu.
- Preuves de fabrication : aucune [V].

## Points forts à retenir pour JR Diamond

1. **Livraison et retours lisibles dans une seule page de conditions**, avec le délai (1 à 5 jours) et les frais de retour (`/uslovi-koriscenja/`, V).
2. **Prix en euro TTC sur chaque carte et fiche**, avec tri croissant et décroissant fonctionnels (V).
3. **Paiement en plusieurs fois avec 3 banques locales**, expliqué sur une page dédiée (V).
4. **Gravure gratuite** annoncée comme service (V).
5. **Magasin physique dans quatre villes** : preuve de présence (V).

## Défauts observés

- Les deux pages « vjereničko prstenje » sont vides alors que le site les met en avant (V).
- Seuils de livraison gratuite contradictoires : 15 €, 30 €, 50 € (V).
- Aucune information sur le diamant (certificat, carat total) hors la fiche 1625WDI-52 ; description d'un « dijamant » de couleur « Wesselton » sans certificat (V).
- Temps d'affichage de l'image principale supérieur à 3,5 s (voir mesure).
- Pas de sélecteur de taille de doigt sur la fiche d'une bague (V).

## Mesure du temps d'apparition du visuel principal

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche 1625WDI-52 (image de galerie) | 3,7 s | 4,6 s |

Une exécution Playwright, réseau du bac à sable [V].

## Limites de l'audit

- Ajout au panier interdit (`robots.txt` `Disallow: /*?add-to-cart=`) : le récapitulatif, les moyens de paiement du tunnel et les frais calculés n'ont pas été vus ; seuls les textes de conditions ont été lus.
- Filtres de panneau, liste de souhaits, galerie plein écran, newsletter et formulaire de contact non actionnés.
- Une seule fiche détaillée ; le catalogue en ligne de bagues en or compte 5 articles à cette date.
- Aucun diamant synthétique dans l'offre lue ; libellé du synthétique non observé.

## Sources

- https://dameo.me/robots.txt
- https://dameo.me/zlatno-prstenje/ , /kategorija/nakit/vjerenicko-prstenje/ , /zlatno-vjerenicko-prstenje/
- https://dameo.me/prodavnica/blush-prsten-1625wdi-52-14kt-bijelo-zlato-sa-dijamantima/
- https://dameo.me/uslovi-koriscenja/ , /kupovina-na-rate/ , /korpa/ , /graviranje/ , /personalizuj , /kontakt-i-lokacije/
- Fiche Google Maps « Dameo Jewelry & Watches » (04/11/2026), via Parallel Search
