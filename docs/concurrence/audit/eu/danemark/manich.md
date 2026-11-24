# Audit : Manich Jewelry (Manich Diamonds + Fine Jewelry)

- **Site** : https://manich.dk/ (Vodskov, Nordjylland ; showroom Brorsonsvej 30, 9310 Vodskov)
- **Pages de départ auditées** : recherche de pierres https://manich.dk/pages/lab-grown-diamanter · fiche https://manich.dk/products/cs382-halo-diamantring-lab-grown-diamanter-0-83-ct · sur mesure https://design.manich.dk/
- **Date** : 15/11/2026 · **Appareils** : ordinateur (1440×900) et affichage iPhone 13, Chromium
- **Statut** : **partiel** (pas de configurateur de bague ; panier non atteint, voir Limites)
- Marques : V vérifié · I inféré · S supposé. Prix en DKK (kr), TTC (I).

## Parcours

| Étape | Options (V) |
|---|---|
| A. Bague prête | Collection « Ringe – lab grown diamanter » (53 produits) → fiche : métal (un bouton), taille (un bouton) → « Føj til indkøbskurv » |
| B. Pierre libre | Recherche de diamants (synthétiques ou naturels) : forme, carat, couleur, pureté, taille, délai → fiche de la pierre → « Læg i kurv » |
| C. Sur mesure | design.manich.dk → « Få prisoverslag » → formulaire (type de bijou, matériau, budget, description, échéance, pièces jointes) → CAD et rendu 3D |

## Contrôles vérifiés

Fiche bague : 100 contrôles ; recherche de pierres : 159 ; page du formulaire : 85 ; page design.manich.dk : 16 (controls.cjs).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Cookies : « Accepter », « Afvis » | boutons | Présents ; « Afvis » non vérifié visuellement | — | Présent |
| Barre d'annonces « Forrige / Næste » | boutons | Messages : livraison gratuite assurée dans l'UE ; conception offerte dès 5 000 kr de pierre | — | OK |
| Pays « DKK KR. » (liste de 29 pays, dont EUR, SEK, PLN, CZK, HUF, RON) et langue (« Dansk », « English ») | boutons | Listes ouvertes dans le DOM ; changement non testé | — | Présent |
| Fiche : « Hvidguld » | bouton | Un seul métal sur cette fiche | 7 900 kr | Présent, 1 option |
| Fiche : « 48 » (taille) | bouton | Une seule taille affichée, liste non explorée | inchangé | Inconclusif |
| Fiche : « Zoom » | bouton | Présent, non actionné | — | Non testé |
| Fiche : « FØJ TIL INDKØBSKURV » | bouton | Non actionné : ajout au panier via `/cart/`, interdit par `robots.txt` | — | Non testé |
| Fiche : « Flere betalingsmuligheder » | lien | Présent, non suivi | — | Présent |
| Fiche : « Chat » | bouton | Présent, **conversation non ouverte** | — | Non testé |
| Fiche : lien « Naturlig diamant » (même modèle) | lien | Même bague en naturel : 14 900 kr au lieu de 7 900 kr | +7 000 | OK (V) |
| Recherche : « Hvid » / « Fancy » | boutons | Choisit la famille de couleur | — | OK |
| Recherche : couleur D à M (10), pureté FL à I3 (10), taille 8X à Poor (7) | boutons | Activés par clic : D, VVS1, Ideal testés ; chips « Klarhed : VVS1 » et « Slibning : ID » apparaissent, avec « Clear All » | 631 502 pierres → 19 959 | OK |
| Recherche : carat (2 champs) et prix (2 champs) | champs | Présents (7 kr à 34 261 594 kr), non remplis | — | Non testé |
| Recherche : formes (Rund, Oval, Pære, Smaragd, Prinsesse, Pude, Radiant, Hjerte, Marquise, Asscher, Baguette…) | boutons | Liens de forme présents en filtre | — | Présent |
| « Leveringstid » (3, 5, 8 jours ou moins) | bouton | Ouvre un filtre de délai d'expédition | — | OK |
| « Liste » / « Gitter » | boutons | Passe du tableau (forme, carat, couleur, pureté, taille, prix) à la grille | — | OK |
| Tri (4 choix : prix croissant, décroissant, carat croissant, décroissant) | liste | Option d'index 1 appliquée | — | OK (1 testé sur 4) |
| Fiche d'une pierre : « Læg i kurv » | bouton | Non actionné (même raison) | — | Non testé |
| « BOOK EN KONSULTATION » | lien | Mène à `/pages/contact-manich-jewelry` | — | Lien présent |
| design.manich.dk : « FÅ PRISOVERSLAG » (3 boutons) | liens | Mènent au formulaire `/pages/design-dit-drommesmykke-formular` | — | OK |
| design.manich.dk : ancres PROCES, CASES, VÆLG SELV, PRISER, ANMELDELSER, FAQ | liens | Défilement vers des sections de la même page | — | OK |
| Formulaire : 9 champs (nom, e-mail, téléphone, type de bijou, matériau, budget, description, échéance, pièces jointes) + « SEND FORESPØRGSEL » | champs | **Non rempli** | — | Non testé |
| Compte (« Log på »), recherche, panier | liens | Non ouverts | — | Non testé |
| Partage, comparaison, favoris | — | Aucun contrôle de ce nom (V) | — | Absent |
| WhatsApp | — | Aucun bouton (V) | — | Absent |

## Options disponibles

- **Pierres** : synthétiques et naturelles, y compris de couleur (« Fancy ») ; formes : rond, ovale, poire, émeraude, princesse, coussin, radiant, cœur, marquise, asscher, baguette (V).
- **Pierre, filtres** : carat, prix, couleur D à M, pureté FL à I3, taille 8X à Poor, délai de livraison (3, 5, 8 jours) (V).
- **Métal** : or jaune, blanc, rose, platine (formulaire) ; or 14, 18 ou 22 kt dans le service de conception (V).
- **Montures sur mesure** : six propositions en 3D (solitaire, halo, trois pierres, pendentifs) d'après l'exemple publié (V).
- **Taille de doigt** : choix sur la fiche (étendue non relevée). **Gravure** : non relevée.

## Prix, délais, retours, garanties

- **Bague prête CS382 (halo, 0,83 ct synthétique)** : 7 900 kr, même modèle en naturel 14 900 kr (V). Article « Bestillingsvare » : « Forventet leveringtid på 4-5 uger » (V).
- **Pierres** : prix affichés par pierre, par exemple 0,18 ct rond D VS1 taille EX, 1 261 DKK, certifié IGI, « Ships in 10 hverdage » (V ; texte anglais dans une page danoise).
- **Sur mesure** : exemple publié, bague solitaire ovale 2,00 ct E/VVS2 IGI, or blanc 14 kt, 12 750 kr, frais de conception inclus (V). Calcul de prix : « nombre de pierres, poids d'or par carat », prix ferme avant décision (V). Conception gratuite avec une pierre libre de plus de 5 000 kr (V).
- **Livraison** : « gratis forsikret levering i hele EU » (V).
- **Retour** : 14 jours après réception (droit de rétractation) ; frais de retour à la charge du client ; articles scellés ; décote de 25 %, 50 % ou jusqu'à 100 % si usage ou dommage ; remboursement sur la carte seulement (V). La page ne dit pas ce qu'il en est du sur mesure (V) ; une exception légale est probable mais non confirmée (S).
- **Garanties** : « meilleur prix garanti », certificat de bijou et évaluation d'assurance fournis ; pierres libres certifiées IGI ou GIA (V).

## Confiance et service

- Atelier d'Erik Manich, 35 ans d'expérience, production au Danemark, en Italie et en Inde (V, texte du site).
- Avis : section « Anmeldelser » sur design.manich.dk, non lue en détail. Cas clients avec rendu 3D, CAD et photo du bijou fini (V). Aucune photo ni vidéo de fabrication en cours (V).
- Showroom, téléphone, e-mail, chat, rendez-vous de consultation (V).

## Points forts à retenir pour JR Diamond

1. **Naturel et synthétique côte à côte avec le même modèle** et un écart de prix visible (7 900 contre 14 900 kr). Preuve : fiche CS382, 15/11.
2. **Moteur de pierres avec délai d'expédition par pierre** (filtre 3, 5, 8 jours) et certificat nommé par ligne. Preuve : page de recherche.
3. **Parcours de conception en trois étapes publié avec des cas réels** : rendu 3D, CAD et photo de la pièce finie, côte à côte, y compris économie chiffrée (10 000 kr, cinq fois plus de diamant). Preuve : https://manich.dk/pages/smykke-design-service.
4. **Prix ferme calculé avant production** (poids d'or par carat, pierre par pierre). Preuve : même page.
5. **Visuel principal rapide** : LCP à 0,65 s sur ordinateur, 0,81 s en iPhone sur la fiche (V, une passe) ; chargement 4,5 s et 3,7 s.

## Défauts observés

- Pas de configurateur de bague : choisir une pierre ne la place pas dans une monture visible (V).
- Stock de pierres très vaste (631 502) : l'inverse de « ce que vous voyez existe » ; livraison « Ships in 10 hverdage » suggère un flux fournisseur (I).
- Texte anglais dans une page danoise (« Ships in 10 hverdage »).
- Retour : frais à la charge du client, décotes jusqu'à 100 %, rien sur le sur mesure.
- Fiche bague : un seul métal et une seule taille proposés (V).

## Limites de l'audit

- Pas d'ajout au panier ni de panier : `robots.txt` interdit `/cart/` et `/cart.js`.
- Chat non ouvert, formulaires non remplis, comptes non créés.
- Un seul tri sur quatre, trois filtres de pureté et de taille sur plus de vingt, aucune forme testée ; carat et prix non saisis.
- Menus de pays et de langue non actionnés ; pas de test de la gravure ni de la taille de doigt au-delà de 48.
- Mesures de temps : une passe, réseau du poste.

## Sources

- https://manich.dk/pages/lab-grown-diamanter
- https://manich.dk/collections/ringe-lab-grown-diamanter
- https://manich.dk/products/cs382-halo-diamantring-lab-grown-diamanter-0-83-ct
- https://manich.dk/pages/smykke-design-service
- https://design.manich.dk/
- https://manich.dk/pages/design-dit-drommesmykke-formular
- https://manich.dk/pages/returnerings-og-refunderingspolitik
- https://manich.dk/robots.txt
