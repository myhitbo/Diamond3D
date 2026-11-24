# Audit : Alexandre Rosenberg (Luxembourg)

- **Site** : Alexandre Rosenberg, joaillier, atelier à Luxembourg
- **Adresse** : https://www.alexandrerosenberg.com/ (départ : https://www.alexandrerosenberg.com/bagues-de-fiancailles ; fiche : `…/bague-de-fiancailles-solitaire-diamant-or-blanc-stella-26r1.1.1`)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : complet pour les bagues de fiançailles (fiche Stella) ; partiel pour les alliances (non configurées, voir limites)
- Marques : **V** vérifié · **I** inféré · **S** supposé. Pays de livraison par défaut vu du navigateur : États-Unis (prix hors TVA).

## Parcours

| Étape | Options |
|---|---|
| 1. Liste `/bagues-de-fiancailles` | 59 liens de fiches, regroupés par modèle (Grace, Stella, Bellatrix, Rigel, Bétélgeuse…), chaque modèle décliné en variantes métal et pierre ; bouton « Créer une configuration personnalisée » (V). Aucun filtre ni tri trouvé (V) |
| 2. Fiche : variation | 4 : rond ou ovale × corps de bague sans pierres ou pavé (V) |
| 3. Fiche : diamètre de la pierre | 4, 4,5, 5, 5,5, 6, 6,5, 7, 8 mm (V) |
| 4. Pierre | 12 pierres et une entrée vide : diamant (D/IF, E/VVS1, F/VS1, G/SI1), diamant noir, diamant brun, saphir jaune, rubis, tourmaline rubellite, saphir rose, morganite, saphir bleu, aigue-marine, émeraude, grenat tsavorite, plus une entrée vide (V) |
| 5. Métal | Or blanc palladié 18 k, or jaune 18 k, or rose 18 k, platine 950 ‰ (V) |
| 6. Taille de la bague | 41 à 76 par demi-tailles ; tables de conversion (circonférence, diamètre, R.-U., É.-U., Asie) ; options « baguier » et « triboulet » (V) |
| 7. Gravure, cadeau | Gravure (champ texte) ; emballage ou sac cadeau (V) |
| 8. Services | Sauvegarder (« Ma sélection »), devis personnalisé, téléphone, WhatsApp, courriel (V) |
| 9. Panier | Tiroir de panier, puis `/cart` : récapitulatif, TVA, livraison, « Procéder à l'achat » (arrêt ici) (V) |

## Contrôles vérifiés

Fiche Stella 26R1_1.1, prix en € hors TVA (pays par défaut États-Unis) sauf mention.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Cookies : Tout rejeter / Accepter tout / Personnaliser | boutons | Bandeau fermé (« Tout rejeter » testé) | — | OK |
| FR / EN | liens | Bascule vers `/en/white-gold-diamond-solitaire-engagement-ring-stella-26r1.1.1` | — | OK (lien lu, non suivi) |
| EUR / USD | bascule | Prix converti | 1 310 € → 1 395 $ | OK |
| Pays de livraison (changer) | liste | Liste de pays ; Luxembourg → TVA comprise ; France idem | 1 310 € HT → 1 415 € (LU) ; 1 455 € (FR) | OK |
| Variation : rond, corps nu (défaut) | liste | Pierre ronde de 4 mm, anneau 1,5 mm | 1 310 € | OK |
| Variation : rond, pavé | liste | Corps pavé | 1 705 € | OK |
| Variation : ovale, corps nu | liste | Pierre 0,16 ct | 1 060 € | OK |
| Variation : ovale, pavé | liste | Pierre ovale pavée | 1 455 € | OK |
| Diamètre 4 mm | liste | 0,25 ct, 1,8 g | 1 310 € | OK |
| Diamètre 5 mm | liste | 0,45 ct, 2,7 g | 2 130 € | OK |
| Diamètre 6 mm | liste | 0,80 ct, 3,8 g | 4 385 € | OK |
| Diamètre 8 mm | liste | 2,00 ct, 6,5 g ; bouton « Ajouter au panier » remplacé par « Demander un devis personnalisé » ; texte « le prix dépend des caractéristiques de chaque pierre » | 32 590 – 35 365 € (fourchette) | OK |
| Diamètres 4,5 / 5,5 / 6,5 / 7 mm | liste | Non cliqués | — | Non testé : même mécanique que les autres |
| Pierre : diamant D/IF | pastille | 0,25 ct D (blanc exceptionnel +), IF | 1 450 € | OK |
| Pierre : diamant G/SI1 | pastille | 0,25 ct G, SI1 | 1 205 € | OK |
| Pierre : E/VVS1 | pastille | Listée, non cliquée | — | Non testé |
| Pierre : diamant noir / brun | pastille | Pierre et libellé changés (sur platine) | 880 € / 970 € | OK |
| Pierre : saphir bleu / rubis / émeraude / morganite | pastille | Idem | 1 040 € / 1 235 € / 1 530 € / 855 € | OK |
| Pierre : 6 autres (saphir jaune, rose, tourmaline, aigue-marine, tsavorite, entrée vide) | pastille | Non cliquées | — | Non testé |
| Métal : or jaune / or rose / platine | pastille | Titre et poids changés (1,8 g, 1,7 g, 2,4 g) | 1 280 € / 1 270 € / 1 280 € (or blanc : 1 310 €) | OK |
| Taille 41 à 76 | liste | Liste lue ; un clic a laissé 55 | inchangé | OK (liste) |
| Baguier / triboulet | choix | Cliqués, taille inchangée, prix inchangé | 1 310 € | OK ; livraison de l'outil promise après commande (page « Achat en ligne ») |
| Gravure | champ | Section ouverte ; champ texte non repéré par le script, saisie non faite | — | Non testé : effet sur le prix inconnu |
| Emballage cadeau / sac cadeau | choix | Choix fait, prix inchangé | 1 310 € | OK |
| Miniatures 1 et 2 | image | La 2e (boîte cadeau) ouvre une visionneuse avec flèches et fermeture | — | OK |
| Vidéo de fiche | vidéo | `bague-diamant-platine-stella.mp4`, lecture automatique, en boucle (I : montre la version platine) | — | OK (lue dans le DOM) |
| Sauvegarder cette configuration | bouton | Aucune navigation ; effet visible non constaté | — | Partiel (compte requis, I) |
| Demander un devis personnalisé | bouton | Panneau latéral : titre, prénom, nom, courriel, téléphone, message, cases (non rempli, non envoyé) | — | OK |
| Ajouter au panier | bouton | Tiroir « Panier » : STELLA 26R1_1.1, total TVA comprise, « Procéder à l'achat », « Voir mon panier » | 1 450 € (FR) | OK |
| Voir mon panier | lien | Page `/cart` | 1 415 € (LU) | OK |
| Procéder à l'achat | bouton | Non cliqué : paiement et compte hors périmètre | — | Non testé |
| Téléphone, WhatsApp (`wa.me/352691565755`), courriel | liens | Non ouverts | — | Non testé |
| Excellent TrustScore 5,0 / 5 | lien | Vers fr.trustpilot.com (non ouvert) | — | Non testé |
| Menu (iPhone) | bouton | Navigation repliée ; mêmes liens qu'à l'ordinateur (37 contrôles contre 34) | — | OK |

## Options disponibles

- **Forme et monture** : pierre ronde ou ovale, griffes (6), corps nu ou pavé (4 variations) ; autres modèles de la liste : entourage (Grace), double entourage, solitaires Bellatrix, Rigel, Bétélgeuse.
- **Diamètre** : 4 à 8 mm (8 valeurs).
- **Pierre** : 12 (4 qualités de diamant D/IF à G/SI1, 8 pierres de couleur et diamants noir et brun). « Toute autre option est possible sur demande ».
- **Métal** : or blanc palladié, jaune et rose 18 k ; platine 950 ‰.
- **Taille** : 41 à 76 par demi-tailles, fiche de conversion.
- **Services** : gravure, emballage ou sac cadeau, devis personnalisé, sauvegarde.
- **Absents** : origine naturel ou synthétique, filtres de la liste, comparaison, 3D ou 360° manipulable, essayage virtuel.

## Prix, délais, retours, garanties

- **Affichage** : prix unique par configuration, hors TVA par défaut (pays États-Unis) ; Luxembourg 1 415 € TTC, France 1 455 € TTC pour la même bague (V). Dans le panier luxembourgeois : net 1 209,40 €, TVA 17 % 205,60 €, total 1 415,00 €, livraison FedEx Express offerte (V). Pas de décomposition métal / pierre / façon.
- **Gamme** (V) : solitaires dès 1 135 € (Bellatrix, 0,17 ct) ; alliances « ADN » de 930 à 1 470 € (accueil), « Tango » de 840 à 1 605 € (page alliances).
- **Délai** : « Délai de fabrication : 1 - 2 semaines » affiché sur la fiche, donné « à titre indicatif » ; sur mesure de 2-3 semaines à quelques mois ; transformation 3 à 4 semaines (`/comment-commander`, `/bijoux-sur-mesure`) (V).
- **Retours** : 30 jours, **y compris les produits personnalisés**, sans motif ; frais de retour pris en charge ; remboursement au plus tard 30 jours après réception ; bijou non porté, étiquette et certificat joints (`/politique-de-retour`) (V).
- **Garanties** : garantie à vie ; entretien annuel gratuit (contrôle du serti, nettoyage, repolissage, rhodiage) (V). Certificat GIA affiché sur les diamants (V).
- **Paiement** : carte, PayPal, virement ; 2 ou 3 fois sans frais ; acompte possible d'au moins 30 %, solde avant expédition (V).
- **Livraison** : FedEx Express, gratuite et assurée dans le monde ; remise contre signature ; retrait possible à l'atelier (V).

## Confiance et service

- Aide : lundi-samedi 9 h-19 h (CET), téléphone +352 20 99 24 24, WhatsApp, courriel (V).
- Avis : « Excellent TrustScore 5,0 / 5 » affiché, nombre d'avis non relevé (V pour l'affichage).
- Preuve de fabrication : « fabrication exclusivement dans notre atelier, pas chez des sous-traitants » (texte) ; une vidéo de produit ; aucune photo ou vidéo de fabrication de la commande, aucun suivi de commande vu (V pour l'absence sur les pages lues).
- Sur mesure : croquis ou photo par courriel, puis modèle 3D et premier devis, acompte, retouches, fabrication (V).
- Langues : français, anglais ; devises : euro, dollar américain (V).
- Origine des diamants : aucune mention de synthétique, de laboratoire ou de culture sur la liste (V).

## Points forts à retenir pour JR Diamond

1. **Le prix change à chaque option, et l'image aussi** : 1 310 € à 4 mm, 4 385 € à 6 mm (0,80 ct), 1 205 à 1 450 € selon la couleur et la pureté du diamant (preuve : mesures ci-dessus).
2. **Règle claire quand le prix ne peut plus être calculé** : à 8 mm, fourchette 32 590 – 35 365 € et bouton de devis à la place de l'ajout au panier (fiche 8 mm).
3. **Le carat est lié au diamètre** : choisir 5 mm donne « 0,45 carat » avec le poids de métal (2,7 g) affiché (fiche).
4. **Retour de 30 jours sur le sur mesure** : argument fort (`/politique-de-retour`).
5. **Prix TTC par pays** (LU 1 415 €, FR 1 455 €) et frais de port offerts visibles avant paiement (panier `/cart`).
6. **Entretien annuel gratuit à vie** (bandeau de pied de page).
7. **Délai affiché sur la fiche** dès avant le panier (« 1 - 2 semaines »).

## Défauts observés

- **Aucune URL ne mémorise la configuration** : le chemin reste `…stella-26r1.1.1` après changement de variation, de diamètre, de pierre ou de métal ; pas de bouton partager (V).
- **Écart de prix de 5 €** : fiche 1 455 € TTC (France), tiroir de panier 1 450 € (V).
- **Pays par défaut « États-Unis »** avec prix hors TVA : le visiteur européen doit changer de pays pour voir un prix TTC (V ; peut dépendre de la géolocalisation du réseau d'audit, I).
- **Image principale = rendu fixe** (PNG 600 px) ; ni 3D, ni 360°, ni zoom ; un seul visuel, plus une photo de boîte cadeau (V). La vidéo montre la version platine (I) alors que la fiche est en or blanc.
- **Libellé interne visible dans le code** : les pastilles de pierre portent « (0.25 carat, @origin) » et une entrée « undefined (NaN carat) » ; infobulle éventuelle non vérifiée (V pour le code).
- Pas de filtre sur la liste de 59 fiches (V). Le carat n'est pas une option directe : il se règle par le diamètre.
- Peu de pierres blanches (4 qualités) ; aucun synthétique, aucune forme hors rond et ovale en configuration (V).

## Limites de l'audit

- Alliances (« Créer une configuration personnalisée ») : page lue, non configurée.
- Gravure : section ouverte, saisie non faite (champ non repéré) ; effet sur prix, caractères et polices inconnus.
- Tests de diamètres, pierres et tailles : un échantillon, pas toutes les combinaisons.
- Mesure du visuel : 4,2 s sur ordinateur, 3,9 s en affichage iPhone (de la requête à l'image complète, via le proxy de la session ; indicatif).
- Cases du devis, Procéder à l'achat, WhatsApp, Trustpilot, compte : non ouverts ou non remplis, par consigne.
- Géolocalisation du réseau d'audit : États-Unis ; la TVA n'a été vue que pour le Luxembourg et la France.

## Sources

- https://www.alexandrerosenberg.com/bagues-de-fiancailles
- https://www.alexandrerosenberg.com/bague-de-fiancailles-solitaire-diamant-or-blanc-stella-26r1.1.1
- https://www.alexandrerosenberg.com/cart
- https://www.alexandrerosenberg.com/comment-commander
- https://www.alexandrerosenberg.com/politique-de-retour
- https://www.alexandrerosenberg.com/bijoux-sur-mesure
- https://www.alexandrerosenberg.com/alliances
- `robots.txt` du site : adresses lues autorisées (contrôle `robots.cjs`, 15/11/2026)
