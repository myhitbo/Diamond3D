# Audit : Milenium (milenium.md)

- **Site** : Milenium, bijouterie de Chișinău et Bălți (3 magasins) · **Adresse** : https://milenium.md/ro/ · **Page de départ** : https://milenium.md/ro/bijuterii-cu-diamante-ro/inele/ (bagues à diamant ; fiançailles et alliances : https://milenium.md/ro/logodna-nunta/)
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366 × 900 et affichage iPhone 13 (Playwright)
- **Statut : complet** pour un site sans configurateur : catalogue, fiche, variantes, panier atteint (sans passer à la commande). robots.txt n'interdit que `/app/`.
- Légende : **[V]** vérifié · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Catalogue (bagues à diamant ; 14 fiches par page sur la vue lue) | Tri (6 choix), nombre par page (16, 32, 64, 128), 3 modes d'affichage, filtres « Forme du diamant » et « Mărime » [V] |
| 2. Fiche produit (ex. `/ro/bijuterii-cu-diamante-ro/inele/inel-cu-diamante-di-0297-ro/`) | Taille (16, 16,5, 17) qui change le poids et le prix, « Adaugati in cos », « Cumpără dintr-un click », liste de préférences, Share, « Pune o întrebare » [V] |
| 3. Panier `/ro/cart-ro/` | Récapitulatif, quantité, taille et poids modifiables, code promo / certificat cadeau, « Finalizeaza si plateste comanda » (non cliqué) [V] |
| 4. Commande `/ro/checkout-ro/` | **Non ouverte** (au-delà du panier) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Bijuterii cu Diamante, din aur, din argint, Logodna / Nunta, Pentru copii, Promotii, Certificate cadou | Liens | Catégories ; « Bijuterii cu Diamante » mène aux bagues, pendentifs, boucles, bracelets [V] | — | Vérifié |
| Recherche « Cauta produse » | Champ | Non utilisée | — | Non testé |
| RU / RO | Liens | Bascule `milenium.md/pomolvka-svadba/` (RU) / `/ro/…` | — | Lien lu |
| Tri : Nou mai sus, A-Z, Z-A, Pret crescător, Pret descrescător, Cele mai populare | Liens | URL `?sort_by=…&sort_order=…`. Prix croissant : 9 031,77 MDL puis 10 775,22, 11 634,85, 12 846,53, 13 150,21 [V, page `?sort_by=price&sort_order=asc`] | Réordonne | Fonctionne |
| Par page : 16, 32, 64, 128 | Liens | `?items_per_page=…` | — | Lien lu |
| Mode d'affichage (multicolonne, sans options, liste) | Liens | Change la présentation | — | Lien lu |
| Filtre « Forme du diamant » : Rotundă | Case | Seule option ; **libellé non cliquable en automatique** (intercepté, aucun changement : 14 fiches avant et après) | — | Non confirmé |
| Filtre « Mărime » : 15,5 / 16 / 16,5 / 17 / 17,5 / 18 | Cases | Idem : clic sans effet en automatique | — | Non confirmé |
| Fiche : taille 16 / 16,5 / 17,0 | Boutons radio | Change variante, poids (1,92 g, 1,90 g, 2,00 g) et prix : 24 053,57 / 26 097,26 / 24 359,99 MDL [V, texte de la fiche] | Oui | Lu (non cliqué en navigateur : prix lus dans le tableau des variantes) |
| Fiche : « Gramaj » | Radio | Poids de la variante | — | Lu |
| Fiche : « Adaugati in cos » | Bouton | Ajoute au panier ; la fenêtre de confirmation n'a pas été capturée, panier vérifié ensuite [V] | — | Fonctionne |
| Fiche : « Cumpără dintr-un click » | Lien | Ouvre une demande de rappel (consentement RGPD, champs non remplis) [V] | — | Ouvre, non rempli |
| Fiche : « Adăugați la lista de preferințe » | Lien | Non cliqué | — | Non testé |
| Fiche : Share | Lien | Affiche un lien Facebook de la boutique ; pas de partage de la fiche elle-même [V] | — | Fonctionne (limité) |
| Fiche : « Pune o întrebare » | Lien | Formulaire de question | — | Non testé |
| Fiche : « Detalii » (crédit) | Lien | Vers `/kredit` : 1 909,01 MDL / mois sur 18 mois [V] | — | Lien lu |
| Fiche : « Vedeți toate variantele ca listă » | Lien | Liste des variantes | — | Lien lu |
| Fiche : photos 1 à 3 | Liens | Galerie (3 images WebP) ; **ni vidéo, ni 360°, ni 3D** [V] | — | Lu |
| Fiche : onglets Descriere, Specificații | Onglets | Descriptif : 4 C et certificat | — | Lu |
| Panier : quantité | Champ | 1 | recalcule | Lu |
| Panier : code promo « Aplicati » | Champ | Non utilisé | — | Non testé |
| Panier : « Goliti cosul » | Lien | `checkout.clear`, non cliqué | — | Non testé |
| Panier : « Finalizeaza si plateste comanda » | Lien | Vers `/ro/checkout-ro/`, **non cliqué** (règle : jusqu'au panier) | — | Non testé |
| Bandeau cookies « Asta e ok » | Bouton | Ferme le bandeau | — | Fonctionne |

## Options disponibles

- **Tailles** : 15,5 ; 16 ; 16,5 ; 17 ; 17,5 ; 18 (filtre) ; 3 tailles par fiche, avec poids et prix distincts [V].
- **Forme du diamant** : Rotundă seulement [V].
- **Métal** : or blanc, titre 750 sur la fiche lue (soit 18 carats, déduction) [I]. Autres titres dans le catalogue or (non explorés).
- **Pierre** : diamant rond 57 facettes, couleur D–F, pureté VVS1, 0,247 ct, certificat GIA « fourni » ; **naturel ou laboratoire non précisé** [V].
- **Pas de** : choix de monture, carat, pureté, gravure, pavage, origine naturelle / synthétique, comparateur, réservation [V].
- **Affichage** : multicolonne, sans options, liste ; 16 à 128 produits par page [V].
- **Catégories** : bagues, pendentifs, boucles d'oreilles, bracelets [V].

## Prix, délais, retours, garanties

- **Prix** : en lei, **remise de 30 %** affichée avec ancien prix : 24 053,57 MDL au lieu de 34 362,25 MDL (−10 308,68 MDL), panier identique [V]. Le format de la page affiche « 24 05357 MDL » (centimes sans séparateur), corrigé en 24 053,57 dans le panier [V]. Pas de décomposition [V].
- **Crédit 0 %** (Microinvest, Iutecredit, Easy Credit, Credit 365) : 4 mois jusqu'à 5 000 lei, 6 mois 5 000–9 999, 10 mois 10 000–19 999, 12 mois dès 20 000 ; la fiche affiche 18 mois [V : `/ro/credit/` et fiche].
- **Paiement** : carte Visa / Mastercard (Moldova Agroindbank), espèces au livreur, crédit en ligne avec rappel d'un conseiller [V : `/ro/achitare/`].
- **Livraison** : Nova Poshta, **2 jours ouvrés**, date convenue avec le gestionnaire ; **gratuite au-dessus de 2 000 lei**, en dessous coût fixé par le gestionnaire ; signature d'un « formulaire d'échange express » à la réception qui vaut absence de réclamation [V : `/ro/livrare/`]. **Aucun frais de livraison dans le panier** (coût total = sous-total) [V].
- **Retours** : la page « Politique de schimb » ne traite que l'échange d'or usagé (poids contre poids + 10 % de pertes + supplément) ; **aucune règle de retour d'un achat** [V : `/ro/schimb/`].
- **Garantie** : non indiquée sur la fiche, les pages de service lues ni « À propos » [V]. (Un extrait de recherche mentionne 6 mois chez un concurrent, Solovov : [I].)
- **Délai de fabrication** : sans objet, en stock ; « În stock » sur chaque fiche [V].

## Confiance et service

- Certificat GIA affirmé sur la fiche (« Este furnizat certificatul GIA ») sans lien ni numéro [V].
- Libellé du synthétique : **absent** de ce site (aucune bague de laboratoire repérée) [V].
- Magasins : Chișinău (Armeneasca 55), Bălți (2) ; 9 h–18 h tous les jours ; téléphone +373 79 37 11 11 [V]. Formulaire « rappel » sur les fiches [V].
- Avis clients : aucun sur la fiche [V]. Pas de chat vu. Pas de rendez-vous, ni essayage à domicile.
- Preuves de fabrication : aucune [V]. La page « À propos » ne mentionne ni atelier, ni histoire, ni garantie [V].
- Réseaux : Facebook, Instagram, TikTok, YouTube [V : liens du pied de page].

## Points forts à retenir pour JR Diamond

1. **Fiche avec les 4 C et le certificat dès la page produit** (taille, couleur, pureté, poids total). Preuve : onglet « Descriere » de DI-0297 (D–F, VVS1, 0,247 ct, GIA).
2. **Prix qui change selon la taille de doigt**, avec poids du métal affiché (1,90 à 2,00 g). Preuve : tableau des variantes de la fiche.
3. **Panier lisible** : prix barré, remise en lei (−10 308,68 MDL), taille, poids, code promo, vide-panier. Preuve : `/ro/cart-ro/`.
4. **Crédit 0 % affiché sur la fiche** (1 909,01 MDL / mois sur 18 mois). Preuve : bloc « Detalii ».
5. **Livraison gratuite au-dessus de 2 000 lei, 2 jours**, transporteur nommé. Preuve : `/ro/livrare/`.
6. **Demande de rappel en un clic** sur la fiche. Preuve : lien « Cumpără dintr-un click ».

## Défauts observés

- **Prix mal formaté** : « 24 05357 MDL » (centimes collés) sur le catalogue et la fiche [V].
- Aucune règle de retour d'un achat, pas de garantie visible [V].
- Pas de 3D, 360°, vidéo, avis, ni composition ; une seule forme de diamant (Rotundă) [V].
- Filtres non cliquables en test automatique (libellés interceptés) [V ; cause inconnue].
- Share envoie vers la page Facebook de la boutique, pas vers le produit [V].
- Temps de chargement (plus grand élément, un passage) : catalogue 2,7 s, fiche 2,2 s sur ordinateur ; fiche 1,9 s et catalogue 2,1 s sur iPhone ; chargement complet 4,2 à 6,9 s [V].

## Limites de l'audit

- Commande, paiement, crédit, connexion non ouverts. Un article a été ajouté au panier d'une session jetable.
- Pas d'ouverture du panier « sur mesure » : il n'y en a pas. Alliances et fiançailles de `/ro/logodna-nunta/` listées, non auditées (lien lu seulement).
- Filtres non confirmés (voir plus haut). Favoris, question, code promo non testés.
- Taille changée : prix lus dans le texte, non produits par un clic.
- Un seul modèle de bague lu. Pas de test de la version russe ni de pages de pendentifs.

## Sources

- https://milenium.md/ro/bijuterii-cu-diamante-ro/inele/ · https://milenium.md/ro/bijuterii-cu-diamante-ro/inele/inel-cu-diamante-di-0297-ro/ · https://milenium.md/ro/cart-ro/ · https://milenium.md/ro/logodna-nunta/
- https://milenium.md/ro/livrare/ · /ro/achitare/ · /ro/credit/ · /ro/schimb/ · /ro/despre-noi/
- https://milenium.md/robots.txt
