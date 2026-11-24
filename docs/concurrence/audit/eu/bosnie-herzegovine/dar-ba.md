# Audit : Zlatarna Dar, boutique en ligne dar.ba (Tešanj)

- **Site** : Dar d.o.o. (marque Zlatarna Dar), https://dar.ba/ (le domaine `www.dar.ba` redirige vers `dar.ba`) ; groupe de 11 boutiques d'après la page d'accueil.
- **Page de départ** : https://dar.ba/item-list/ZarucnickoPrstenje (bagues de fiançailles). Fiche testée : https://dar.ba/item-details/1003. Alliances : https://dar.ba/item-list/Burme. Pas de configurateur.
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13.
- **Statut** : partiel (catalogue, fiche, panier, textes de service lus ; filtres ouverts mais pas appliqués ; paiement non exploré).
- Marques : **V** vérifié (contrôle actionné ou page lue, adresse en source) · **I** inféré · **S** supposé.
- robots.txt : `User-agent: *` / `Allow: /` : tout est AUTORISÉ (vérifié avec `robots.cjs` pour chaque adresse ouverte). Site Angular : le contenu se charge par JavaScript.

## Parcours

| Étape | Options |
|---|---|
| 0. Menu | Dijamanti · Burme · Prstenje · Zaručničko prstenje · Ogrlice i lančići · Naušnice · Privjesci · Narukvice · Dječije · Moissanite · Pakovanje [V] |
| 1. Liste (bagues de fiançailles) | 12 fiches par page, pagination 1 à 5 ; volet « Lista Filtera i Sortiranje » : groupes Materijali, Spol, Kolekcija, Sniženo ; boutons Primijeni / Očisti [V] |
| 2. Fiche | Nom, collection (ex. GLAMOUR), prix, métal, poids, sexe, taille (bouton), texte, « Dodaj u korpu », onglets Isporuke et Često postavljena pitanja [V] |
| 3. Panier (`/shopping-cart`) | Quantité − / +, « Obriši », emballages cadeaux, code promo, « Nastavi na narudžbu » [V] |
| 4. Paiement (`/checkout`) | Non poursuivi (voir Limites) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| × (bandeau « Besplatna dostava za narudžbe iznad 150KM ») | bouton | Ferme le bandeau | — | présent [V], non cliqué |
| Potraži Produkt + Search | champ + bouton | Recherche de produits ; non utilisée | — | non testé : adresses de recherche |
| person_outline (Prijava) | bouton | Connexion ; non cliqué | — | non testé : compte |
| 10 liens de catégories | liens | Chacun ouvre `/item-list/<Catégorie>` ; Burme, ZarucnickoPrstenje, Moissanite ouverts | — | OK [V] |
| Lista Filtera i Sortiranje | lien | Ouvre le volet latéral `#offcanvasExample` (Materijali 5 cases, Spol 3, Kolekcija 5, Sniženo 1) | — | OK [V] ; libellés des cases non lus |
| Primijeni Filtere / Očisti Filtere | boutons | Présents dans le volet ; non cliqués | — | non testé |
| Détaljno (carte) et image | bouton, lien | Ouvre `/item-details/<id>` | — | OK [V] |
| ‹ previous / 1 à 5 / next › | boutons | Pagination de la liste | — | présents [V], non cliqués |
| Bouton de taille (« 15,5 ») | bouton | Taille unique proposée pour l'article testé ; envoyée au panier | aucun | OK [V] |
| Dodaj u korpu | bouton | `POST /api/cart/addItemToCart?cartId=…` avec `{"productId":"1003","quantity":1,"size":"15,5"}` ; compteur du panier passe à 1 ; pas de confirmation visible à l'écran | prix de la fiche | OK [V] |
| Isporuke / Često postavljena pitanja | onglets | « Livraison attendue sous 2 jours ouvrés » ; commandes d'un montant élevé : contact direct | — | lus [V] |
| Icône panier | élément | Mène à `/shopping-cart` | — | OK [V] |
| − / + / Obriši | boutons | Quantité et suppression ; non modifiés | — | présents [V] |
| Poklon pakovanje : Kutija Modern Led, Dream Box, Ivory Vault | liens | Ouvrent des fiches d'emballage (12, 20, 25 KM) | +12 à 25 KM | présents [V], non ouverts |
| Imate promo kod? | bouton | Champ de code ; non utilisé | — | non testé |
| Nastavi na narudžbu | bouton | Mène au paiement ; non cliqué | — | non testé : au-delà du panier |
| support@dar.gold · 062 474 345 | liens | `mailto:` et `tel:` ; le texte du site indique aussi Viber et WhatsApp | — | présents [V] |
| Subscribe (lettre d'information) | champ + bouton | Non rempli | — | non testé : formulaire |
| Pied de page : O nama, Kontakt, Prodavnice, Uslovi, Privatnost, Isporuka, Najčešća pitanja, Kako kupiti, Povrat/Zamjena | liens | Pages de texte lues : isporuka, exchanges, how-to-order, FAQ, terms-of-use | — | OK [V] |

Pas de configurateur, de 3D, de 360°, de vidéo, de zoom repéré, de comparateur, de partage, de financement ni de chat [V : contrôles listés, 70 sur la liste, 39 sur une page vide]. Note : `/burme` (sans `item-list`) répond 200 avec une page « introuvable » interne (soft 404) [V].

## Options disponibles

- Catalogue de bagues de fiançailles et d'alliances : filtres par matériau, sexe, collection, soldes ; taille par bouton sur la fiche ; pas de choix de forme de pierre, de carat, de pureté ni d'origine ; pas de gravure en option sur la fiche (gravure gratuite sur demande par e-mail, d'après l'accueil) [V].
- Catégorie Moissanite : bijoux en argent 925 avec moissanite et certificat d'authenticité de la pierre ; remises de −15 % lues sur des articles [V].
- « Izrada po želji » : réparation de bijoux et pièces personnalisées (chaînes avec prénom, pendentifs) ; pas d'outil en ligne [V].
- Question de la FAQ « Da li je moguće naručiti burme sa dijamantima ? » : réponse non lue (volet replié) [V pour la question].

## Prix, délais, retours, garanties

- **Prix** en KM, TVA comprise, affichés sur chaque fiche [V, `/how-to-order`]. Exemple : bague de fiançailles « Zaručnički prsten », collection GLAMOUR, or blanc, 2,81 g : 786,80 KM barré, 708,12 KM après −10 % (−78,68 KM visible dans le récapitulatif) [V]. Pas de décomposition du prix (or, façon, pierre).
- **Titre de l'or** : « 585/925 », 58,5 % d'or pur [V, accueil].
- **Délai** : livraison attendue en 2 jours ouvrés (fiche) ; transit de 24 à 48 h en BiH (conditions) ; aucun délai de fabrication, aucun sur-mesure en ligne [V].
- **Livraison** : gratuite dès 150 KM (le bandeau et le panier l'affichent) ; coursier EuroExpress ; BiH seulement ; code promo = perte de la livraison gratuite [V, accueil].
- **Retours** : échange ou remboursement sur envoi d'un formulaire **dans les 24 heures suivant la réception**, frais de retour à la charge du client, article non utilisé ni abîmé ; aucune mention du sur-mesure [V, `/exchanges`, `/terms-of-use`].
- **Garanties** : alliage 12 mois ; zircons et diamants 3 mois ; 3 mois de réparations gratuites ; facture fiscale à conserver [V, accueil]. Certificat : seulement pour la moissanite ; aucune mention GIA ou IGI sur les pages lues [V].
- **Paiement** : à la livraison (espèces) ou carte Visa, Mastercard, Maestro (passerelle Monri, logo du pied de page) ; plafond de 5 pièces par référence [V, `/how-to-order`, `/terms-of-use`]. Le texte de l'accueil dit « uskoro » pour la carte : contradiction avec `/how-to-order` [V].

## Confiance et service

- 11 boutiques du groupe, 30+ ans d'expérience, 130+ modèles d'alliances de fabrication propre (déclaré, depuis 1996), 5 collections [V, accueil] ; un classement par revenu en BiH est affiché par le site institutionnel zlatarnadar.ba [V].
- Contact : e-mail, téléphone, Viber, WhatsApp, 07:00–16:00 en semaine [V].
- Avis clients : aucun repéré [V]. Photos ou vidéos de fabrication, suivi de commande, rendez-vous : aucun repéré [V, non exhaustif].
- Libellé du synthétique : sans objet ; « Moissanite » est nommé tel quel, « srebro 925 » indiqué [V].
- Langue : bosniaque ; devise KM [V].

## Temps d'apparition du visuel principal

| Page | Appareil | Chargement complet | Plus grand élément (LCP) |
|---|---|---|---|
| Liste des bagues de fiançailles | ordinateur | 2,4 s (cartes prêtes) | 1,4 s (logo) [V] |
| Fiche 1003 | ordinateur | 3,9 s | 1,3 s (photo de la bague) [V] |
| Liste des bagues de fiançailles | iPhone | 6,0 s | 2,4 s (photos des cartes) [V] |
| Fiche 1003 | iPhone | 4,1 s | 2,0 s (photo de la bague) [V] |

## Points forts à retenir pour JR Diamond

1. **Remise affichée avec le prix barré, le montant déduit et le total** dans le panier (786,80 → −78,68 → 708,12 KM) : lecture immédiate [V].
2. **Garanties chiffrées sur la page d'accueil** (12 mois alliage, 3 mois pierres, 3 mois de réparations) : simples à copier dans le ton, avec une durée plus longue pour la pierre [V].
3. **Panier d'une page** : quantité, emballage cadeau avec prix (12 à 25 KM), code promo, total, contact en bas ; commande en invité [V].
4. **Page « Kako kupiti »** qui décrit en clair les étapes d'achat, de livraison et de paiement, et conditions qui annoncent « prix indiqué sur chaque article, TVA comprise » [V].
5. **Fiche qui précise « la bague peut être élargie ou rétrécie »** : réponse à la question de la taille de doigt [V].

## Défauts observés

- Aucune personnalisation en ligne : ni forme, ni carat, ni gravure, ni pierre au choix [V].
- Fenêtre de retour de 24 heures seulement, frais à la charge du client [V].
- Texte de l'accueil dit que le paiement par carte arrive « bientôt » alors que le guide d'achat le décrit comme disponible [V].
- Aucun certificat de diamant mentionné ; garantie des pierres de 3 mois [V].
- `/burme` renvoie 200 avec une page d'erreur interne ; le panier n'affiche pas de message de confirmation au clic sur « Dodaj u korpu » (seul le compteur change) [V].
- Temps de chargement sur iPhone : 6,0 s pour la liste [V].
- Les images produit sont nommées par empreinte et chargées après le logo ; le logo est le plus grand élément sur la liste ordinateur [V].

## Limites de l'audit

- **Écart au protocole** : après le panier, l'adresse `https://dar.ba/checkout` a été ouverte (lecture seule, autorisée par robots.txt) pour repérer l'adresse du panier ; la page a affiché trois étapes (Kontakt : e-mail, téléphone ; Dostava : nom, prénom, adresse, code postal, ville, « livraison seulement en Bosnie-Herzégovine » ; Plaćanje : paiement à la livraison…). Aucun champ n'a été rempli, rien n'a été envoyé. Le détail des moyens de paiement du dernier écran n'est pas relevé.
- Filtres : volet ouvert, libellés des cases non lus, filtres non appliqués ; pagination non cliquée.
- Une seule fiche de bague de fiançailles et aucune fiche d'alliance ouverte ; catégories Dijamanti et Burme seulement listées.
- Parcours iPhone : contrôles de la page d'alliances et temps de chargement, pas de panier.
- Un article a été ajouté au panier d'une session de navigateur jetable.

## Sources

- https://dar.ba/ (accueil : garanties, livraison, fabrication) ; https://dar.ba/item-list/ZarucnickoPrstenje ; https://dar.ba/item-list/Burme ; https://dar.ba/item-list/Moissanite
- https://dar.ba/item-details/1003 ; https://dar.ba/shopping-cart
- https://dar.ba/delivery ; /exchanges ; /how-to-order ; /freq-asked-questions ; /terms-of-use
- https://dar.ba/robots.txt ; https://zlatarnadar.ba/
