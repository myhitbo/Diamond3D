# Audit : Zlatarne Holc (Slovénie)

- **Site** : Zlatarne Holc, Maribor (Gosposka ulica 27) et Lenart (Nikova ulica 1a) ; boutique en ligne « spletna-zlatarna.si » (V, en-tête du site)
- **Adresse** : https://www.spletna-zlatarna.si/
- **Page de départ** : https://www.spletna-zlatarna.si/c/zarocni-prstani/ (catalogue des bagues de fiançailles) ; synthétiques : https://www.spletna-zlatarna.si/c/zarocni-prstani-z-laboratorijski-diamanti/ ; fiches : https://www.spletna-zlatarna.si/izdelek/zarocni-prstan-65-briljant/ (naturel) et https://www.spletna-zlatarna.si/izdelek/zarocni-prstan-119/ (synthétique)
- **Date** : 15/11/2026 (contrôles exécutés le 24/11 dans l'environnement de l'étude)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** : le `robots.txt` interdit toute adresse à paramètre (`Disallow: /*?`), donc tri, filtres de la boutique, liste de souhaits et ajout par adresse n'ont pas été actionnés.
- **robots.txt** : `User-agent: *`, `Disallow: /wp-admin/*`, `*/?add_to_wishlist=*`, `*/?filter_kamni=*`, `*/?add-to-cart=*`, `*/?material=*`, `*/?cat=*`, `/*?` (V, https://www.spletna-zlatarna.si/robots.txt). Les adresses ouvertes sont toutes AUTORISÉ ; l'ajout au panier de la fiche est un formulaire envoyé en POST à `wp-admin/admin-ajax.php` (adresse autorisée), sans paramètre dans l'adresse (V).

Légende : V vérifié · I inféré · S supposé. Prix en € TTC (TVA 22 % incluse, V dans le panier).

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Menu « Zaročni prstani » | 3 sous-catégories : diamants (naturels), synthétiques, cirkonia (V) | menu |
| 2. Catalogue | 66 bagues sur 4 pages ; synthétique : 7 bagues (V) | page de départ |
| 3. Fiche | taille (45 à 75), quantité, onglets Opis / Dodatne informacije | fiche |
| 4. « DODAJ V KOŠARICO » | message « Dodano v košarico » + « Prikaži košarico » | fiche |
| 5. Panier /kosarica/ | ligne, quantité, coupon, mode de livraison (3), totaux, TVA | panier |
| 6. « NADALJUJ NA ZAKLJUČEK NAKUPA » | commande (non cliqué) | panier |

Il n'y a **pas de configurateur** : on choisit une bague déjà dessinée, le seul réglage en ligne est la taille (V). Le métal, la pierre et la forme sont ceux de la fiche. Le sur mesure se demande en magasin (« lahko poročna prstana izdelamo tudi po naročilu », V, page catégorie).

## Contrôles vérifiés

Ordinateur : 101 contrôles sur le catalogue, 60 sur la fiche. iPhone : 44 sur la fiche (V, `controls.cjs`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Zaročni prstani, Poročni prstani, Zlat nakit, Srebrn nakit, Za različne priložnosti, Odkup zlata, StarPrint | menu | rubriques ; « Zaročni prstani » déroule 3 sous-rubriques | — | catégorie lue (V) ; autres non ouvertes |
| Iskanje | bouton (loupe) | recherche | — | non testé (adresse à paramètre) |
| Panier « 0 » | icône | mène à /kosarica/ | — | OK (V) |
| Filter | lien (ouvre un panneau) | panneau : Min cena, Max cena, FILTRIRAJ, cases Briljanti, Labolatorijski Briljant, Belo Zlato, Rumeno Zlato | filtre | panneau ouvert (V) ; **filtres non actionnés** (adresses à paramètre interdites) |
| Privzeto razvrščanje | liste de tri, 6 valeurs : défaut, popularité, note moyenne, nouveauté, prix croissant, prix décroissant | recharge avec `?orderby=` | — | **non testé** (interdit) |
| Select options | bouton de carte | ouvre la fiche | — | non cliqué (équivalent au lien du titre) |
| Quick view | bouton de carte | aperçu | — | non testé |
| Seznam želja | lien | liste de souhaits, adresse `?add_to_wishlist=` | — | **non cliqué** (interdit) |
| Pagination 2, 3, 4, « Naslednja stran » | liens | pages du catalogue | — | non cliquée |
| Velikost ženskega prstana | liste, 45 à 75 par pas de 1 (31 valeurs) | sans choix : infobulle du navigateur « Please select an item in the list. » (en anglais, V) | — | OK (V) |
| − / quantité / + | boutons et champ | quantité (défaut 1) | ×qté | non modifiés |
| DODAJ V KOŠARICO | bouton | avec taille 54 : requêtes `admin-ajax.php` puis « Dodano v košarico » | 2 450 € | OK (V) |
| OPIS | onglet | texte : « Kateri je pravi ? », design, pierre, conseils de taille, livraison discrète | — | OK (V) |
| DODATNE INFORMACIJE | onglet | type, matière, pierres, titre 585, disponibilité | — | OK (V) |
| Galerie : 1 photo et 2 images « certifikat » | miniatures | affichent le **certificat Holc** (document maison) | — | vues (V) |
| Panier : ×, quantité, UNOVČI KUPON, POSODOBI KOŠARICO | boutons | retirer, coupon, mise à jour | — | non actionnés (coupon : donnée) |
| Panier : 3 modes de livraison (boutons radio) | radio | « Pošta Slovenija - poštno ležeče : brezplačno », « Pošta Slovenije : brezplačno », « Osebni prevzem » | 0 € | affichés (V) |
| NADALJUJ Z NAKUPOM / NADALJUJ NA ZAKLJUČEK NAKUPA | liens | retour boutique / commande | — | **non cliqué** (au-delà du panier) |
| Cookies : « Sprejmem », icône d'engrenage | bannière | accepter ; réglages (nécessaires, tiers) | — | « Sprejmem » cliqué ; réglages non ouverts |
| Pied de page : Pomoč pri nakupu, Pogosta vprašanja, Plačilni pogoji, Dostava, Splošni pogoji, O nas, Poslovalnice, Popravilo nakita, Odkup zlata, Kako izmeriti velikost prstana ?, Blog, Plemenite kovine | liens | pages d'aide | — | Dostava, Plačilni pogoji, Splošni pogoji, Pogosta vprašanja, Pomoč pri nakupu, Poslovalnice lus (V) |

Non trouvés sur les fiches : partager, comparer, chat, WhatsApp, financement, rendez-vous, essayage, gravure (V, liste des contrôles).

## Options disponibles

- **Métal** : or blanc ou jaune (filtre) ; chaque fiche a une seule matière ; titre 585/1000 (14 k) pour les bagues lues (V). L'attribut d'une bague lue : « Belo zlato » (V).
- **Pierre** : la fiche 65 : « briljant 0,50 ct (le plus gros 0,33 ct) ; G ; SI » (V). Fiche 119 : synthétique 1,04 ct, « Barva : » **laissé vide**, « Čistina : VSI » (V).
- **Forme** : fixée (marquise, ovale, émeraude pour les synthétiques) (V, descriptions).
- **Origine** : catégorie séparée ; pas de bascule sur une fiche (V).
- **Taille** : 45 à 75 (V). Première mise à taille : « vous pouvez retourner sous 14 jours, on corrige la taille gratuitement » (V, texte de la fiche 65).
- **Gravure, certificat tiers, carat** : pas d'option (V). Gravure annoncée seulement comme exception de retour.
- **Filtres du catalogue synthétique** : prix mini/maxi, diamant ou synthétique, or blanc ou jaune (V, panneau non actionné).

## Prix, délais, retours, garanties

| Point | Valeur | Source |
|---|---|---|
| Prix affiché | TTC en €, une seule valeur par bague, sans décomposition ni prix barré (V). Ex. fiche 65 : 2 450 € ; panier : « 441,80 € de TVA 22 % » (V) | fiche, panier |
| Prix des bagues synthétiques | 118 : 1 390 € ; 119 : 1 750 € ; 120 : 3 100 € ; 121 : 1 580 € ; 122 : 1 450 € ; 123 : 980 € (V, 6 sur 7 lues) | catégorie |
| Délai | fiche 65 : « modèle en stock, original sous 5 semaines » ; fiche 119 : « certaines tailles tout de suite, sinon 14 jours » ; livraison 3 jours ouvrés si stock | fiches, /dostava/ (V) |
| Livraison | gratuite au-dessus de 100 € TTC, sinon 4,50 € ; Pošta Slovenije ; retrait en boutique ; **Slovénie seulement** (V) | /dostava/ |
| Paiement | page dédiée : facture proforma, espèces à la livraison, espèces ou carte **en boutique** ; aucune carte en ligne citée. Un script Stripe est pourtant chargé (V, requêtes `m.stripe.com`) | /nacini-placila/ |
| Retour | 14 jours (loi) ; frais de retour à la charge de l'acheteur | /splosni-pogoji-poslovanja/ (V) |
| Exception du sur mesure | pas de rétractation pour la fabrication individuelle (**toutes les alliances et pièces uniques**) et la gravure sur commande | pogoji (V) |
| Garantie | 12 mois, sur facture, hors contraintes physiques ou chimiques | pogoji (V) |
| Certificat | « certificat Zlatarne Holc de qualité et de conformité » (document maison) ; aucune mention de GIA ni d'IGI sur les fiches lues (V) | fiches |

## Confiance et service

- **Ancienneté** : le logo dit « 1972 », la page d'accueil « 50 ans », la fiche 65 « 40 ans d'expérience » (V) : incohérence.
- **Libellé du synthétique** : « laboratorijsko ustvarjen briljant/diamant », attribut « labolatorijski briljant » (faute de frappe) ; texte « mêmes propriétés physiques, chimiques et optiques que le naturel, seule l'origine diffère » (V).
- **Langues et devise** : slovène seulement ; euro (V).
- **Avis clients** : aucun vu sur les fiches ; le tri « par note moyenne » existe mais n'a pas été actionné (V).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ; le texte vante « l'achat le moins cher, rationnel et sûr par internet » et la « livraison discrète » dans un colis neutre, ou en poste restante (V).
- **Service** : téléphone 02 25 15 123, deux boutiques (Maribor, Lenart), réparation, rachat d'or (V). Pas de chat ni de WhatsApp (V).

## Points forts à retenir pour JR Diamond

1. **Livraison discrète annoncée** : colis neutre, ou envoi poste restante, argument de surprise propre à la demande en mariage (V, onglet Opis de la fiche 65).
2. **Méthode de mesure de la taille écrite en trois lignes** (mesurer le diamètre intérieur, multiplier par 3,14) et reprise gratuite de la taille sous 14 jours (V, fiche 65). JR Diamond peut aller plus loin avec une règle imprimable.
3. **Panier lisible** : TVA 22 % chiffrée en euros, trois modes de livraison à 0 €, coupon et mise à jour (V).
4. **Page de livraison avec règle horaire** (« le délai court dès 13 h le premier jour ouvré ») (V, /dostava/).
5. **Formes autres que le rond en synthétique** (marquise, ovale, émeraude), de 980 à 3 100 € (V, descriptions de la catégorie). Montre qu'un acteur slovène vend déjà la marquise, la forme de ring-001.
6. **Filtres de catalogue** (prix, naturel/synthétique, or blanc/jaune) existent côté interface (V).

## Défauts observés

- **Pas de configurateur, pas de choix de métal ni de pierre** : chaque bague est un article figé (V).
- **Image principale très lente** : 7,6 s sur ordinateur et 8,3 s en affichage iPhone sur la fiche 65 (V, LCP d'une mesure unique) ; le catalogue synthétique : 3,4 s / 3,1 s. Le premier élément affiché est un logo GIF.
- **Fiche 119 incomplète** : « Barva : » (couleur) vide ; « Čistina : VSI » (probablement une faute, I) ; pas de numéro de certificat (V).
- **Texte de fiche contradictoire** : « 0,50 ct (le plus gros 0,33 ct) » sans dire le nombre de pierres (V) ; description de la fiche 65 : « briljanti » au pluriel avec un seul poids.
- **Taille choisie absente du panier** : la ligne de panier ne rappelle ni la taille ni la matière (V, texte et capture).
- **Paiement en ligne non annoncé** : la page « Plačilni pogoji » ne cite pas la carte en ligne ; l'acheteur ne sait pas à l'avance s'il paiera par carte (V).
- **Message de taille manquante en anglais** (infobulle native du navigateur), sans message maison (V).
- **Aucun avis, aucune photo d'atelier, une seule langue** (V).
- **Retours** : frais à la charge de l'acheteur ; alliances et gravure exclues (V).

## Limites de l'audit

- `Disallow: /*?` : filtres de la boutique, tri, recherche, liste de souhaits et « Quick view » non actionnés. Seul le contenu du panneau a été relu.
- Panier atteint (page /kosarica/) mais la commande, le choix d'un mode de livraison et le coupon n'ont pas été actionnés.
- 2 fiches ouvertes (65 naturelle, 119 synthétique) ; la catégorie « Poročni prstani » et les pages 2 à 4 du catalogue n'ont pas été parcourues. Les 6 prix synthétiques viennent de la page catégorie ; le prix de la 7e bague n'a pas été relevé.
- Aucune alliance ouverte.
- Temps d'affichage : une mesure par appareil et par page.
- FAQ : le contenu des réponses se déroule dans des volets que `textContent` n'a pas rendus ; non exploitée.
- L'article 65 a été ajouté au panier (session jetable, non validé).

## Sources

- https://www.spletna-zlatarna.si/c/zarocni-prstani/ ; https://www.spletna-zlatarna.si/c/zarocni-prstani-z-laboratorijski-diamanti/
- https://www.spletna-zlatarna.si/izdelek/zarocni-prstan-65-briljant/ ; https://www.spletna-zlatarna.si/izdelek/zarocni-prstan-119/
- https://www.spletna-zlatarna.si/kosarica/ (panier)
- https://www.spletna-zlatarna.si/dostava/ ; /nacini-placila/ ; /splosni-pogoji-poslovanja/ ; /poslovalnice/
- https://www.spletna-zlatarna.si/robots.txt
- Captures dans le dossier de travail de la session (hors dépôt).
