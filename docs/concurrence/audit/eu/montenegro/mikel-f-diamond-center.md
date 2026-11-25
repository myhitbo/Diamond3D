# Audit : Mikel F Diamond Center (Podgorica, Monténégro)

- **Site** : https://mikelf.com/ (version monténégrine `/me`)
- **Page de départ auditée** : https://mikelf.com/me/prodavnica/prsteni
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Catalogue et fiches vérifiés ; pas de panier ni de prix sur la plupart des fiches, donc pas de parcours jusqu'au paiement. `robots.txt` : `Allow: /`, aucun blocage.
- Marques : V vérifié · I inféré · S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Catégorie | Prsteni (522), Minđuše (259), Ogrlice (272), Narukvice (22), Burme (422) |
| 2. Filtres (colonne) | Kvalitet reza (Excellent ; Veoma dobar) · Materijal (Bijelo zlato, Dijamant, Roze – Bijelo zlato, Roze zlato, Žuto – Bijelo zlato, Žuto zlato) · Veličina prstena 9 à 20 par 0,5 · Cijena (curseur EUR 290 – 3050) · Karataža dijamanta (curseur 0 à 1) · bouton FILTER |
| 3. Affichage et tri | Grid View, List View ; tri : « Uobičajeno sortiranje », « Najbolje ocijenjeni », « Najjeftiniji », « Najskuplji » ; pagination 1 à 35 |
| 4. Fiche | Onglets : Detalji o proizvodu, Dostava, Recenzije (0), Pronađi veličinu, Povraćaj robe ; tailles 9 à 19,5 ; « Kontaktirajte nas » ; « dodaj u listu želja » ; produits similaires |
| 5. Contact | `/me/kontakt?sifra=<réf>` (formulaire préparé avec la référence, non rempli) ; WhatsApp `wa.me/38269242400`, Viber, téléphones |
| 6. Rendez-vous | `/me/zakazi-termin/` : 5 types (Burme, Vjerenički prsten, Ostali nakit, Blister, Konsultacije), date de mariage, date et heure ; non envoyé |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Prsteni / Minđuše / Ogrlice / Narukvice / Burme (menu latéral) | liens | Changent de catégorie ; compteurs 522 / 259 / 272 / 22 / 422 (page burme : 29 pages) [V] | non | OK |
| Case « Žuto zlato » + FILTER | case + bouton | Recharge avec `?filter[atribut][207][]=9331` ; résultat « Page 1 Of 1 », une seule bague (RF16526-Y) [V] | Sans effet visible | OK. Cliquer la case seule ne filtre pas : il faut FILTER [V] |
| Autres cases (Bijelo zlato, Dijamant, Roze, Excellent, Veoma dobar, tailles 9 à 20) | cases | Cliquées sans FILTER : liste inchangée. Non testées avec FILTER une à une | — | Non testé |
| Curseurs Cijena et Karataža | curseurs | Valeurs affichées EUR 290 – 3050 et 0 – 1 ; non déplacés (champs `price_from`, `price_to`, `diamond_from`, `diamond_to`) | — | Non testé |
| Tri (4 options) | liste | Paramètre `sort=1…4` : le premier article change (756520, 757202, 757706, 861543) [V curl] ; correspondance des libellés non vérifiée | — | OK (effet), libellé non vérifié |
| Grid View / List View | liens | Bascule d'affichage ; en liste, le contenu texte reste identique [V] | non | OK |
| Pagination 1, 2, 3, 4, 35, ❯, ❯❯ | liens | Page suivante (`?page=n`) ; 35 pages de 15 articles environ [V] | non | OK |
| Fiche : 5 onglets | onglets | Détails (couleur F, pureté VS1/VS2, carat, titre 585/1000, poids 2,44 à 3,25 g, certificat IGS London) ; Dostava (panneau vide à la lecture) ; Recenzije (0, connexion requise) ; Pronađi veličinu (texte + 2 PDF `metoda_uzmi_prsten.pdf`, `metoda_za_burme.pdf`) ; Povraćaj robe (texte long) [V] | — | OK, Dostava vide |
| « Kontaktirajte nas » | lien | Ouvre le formulaire de contact avec la référence du bijou ; non rempli | non | OK |
| « dodaj u listu želja » | lien | Message « Morate biti prijavljeni » + lien « Prijava » [V] | non | OK (compte requis) |
| WhatsApp / Viber (boutons flottants) | liens | Ouvrent `wa.me/38269242400`, `viber://chat?number=…` ; non ouverts | non | Non ouvert (conversation interdite) |
| Sélecteur de langue (15) | liens | `/en /cz /ru /de /me /fr /al /es /it /gr /hu /ro /se /tr /pl` listés ; non ouverts un à un | — | Liens présents [V] |
| Recherche (loupe) | champ | Champ `search_term` ; non utilisé (chemins de recherche non vérifiés) | — | Non testé |
| `/me/zakazi-termin/` | formulaire | Lu seulement : Ime, Prezime, Email, Telefon, 5 types, date de mariage, date, heure ; non envoyé | non | Non testé (formulaire) |
| `/me/pronadji-velicinu-prstena` | page | Existe, lié du pied de page | non | Non ouvert en détail |
| `/me/korpa` | page | Adresse ouverte (autorisée) : aucun contenu de panier lisible, car aucun article ne peut être ajouté | non | Panier inexistant en pratique |
| Bouton « Filter » (iPhone) | bouton | `mobileFiltersButton` présent sur mobile (96 contrôles contre 110 sur ordinateur) [V] | non | Présent, panneau non ouvert |

## Options disponibles

- Catégories : bagues, boucles d'oreilles, colliers, bracelets, alliances.
- Matière : or blanc, rose, jaune, bicolores (jaune–blanc, rose–blanc) ; titre or 585/1000 (14 k) lu sur les fiches [V]. Platine : non vu.
- Pierre : diamant naturel (« Prirodni dijamant »), aigue-marine, rubis, saphir en accompagnement (références -AKV, -RUB, -SAF) [V]. Synthétique : aucune mention.
- Qualité de taille : « Excellent », « Veoma dobar » ; couleur F et pureté VS1 à VS2 lues sur 3 fiches ; carat de 0,02 à 0,21 ct lus sur 3 fiches (bagues du bas de gamme) [V]. Le filtre carat va de 0 à 1 ct [V].
- Tailles de doigt : 9 à 20 par 0,5 (sur la fiche, selon l'article) ; « sur les bagues, la taille peut être corrigée » [V].
- Gravure de message **dans le diamant** : page « Poruka u dijamantu » [V].
- Aucun choix de monture, de griffes, de corps de bague, de gravure du métal : il n'y a pas de configurateur.

## Prix, délais, retours, garanties

- **Prix** : affichés en EUR seulement sur une minorité de fiches (échantillon de 3 pages en tri 1 : 12 fiches avec prix sur 45, le reste « Kontaktirajte nas ») ; exemples : 445 à 1 326 € sur 12 fiches (V). La fiche RA4089 ouverte n'affichait pas son prix (709 € dans « produits similaires ») [V]. Page d'accueil : un prix 1 182 € pour RB6938EG [V]. Aucune décomposition du prix. Page « Cijena plemenitih metala » (prix des métaux) existe, non lue [V].
- **Délai** : aucun délai annoncé lu ; onglet Dostava vide ; accueil : « livraison sûre et fiable partout au Monténégro, gratuite » [V].
- **Paiement annoncé** (accueil) : virement, espèces ou carte ; **jusqu'à 36 mensualités** (paiement différé) [V]. Moyens de paiement dans un panier : non vus.
- **Retours** (onglet Povraćaj robe) : remboursement si les caractéristiques ne correspondent pas à la confirmation d'achat ni au certificat ; remboursement aussi si le même modèle certifié se trouve moins cher dans une bijouterie de la ville ; « jusqu'à 40 % moins cher que dans les bijouteries de votre ville » (affirmation du site) ; délai en jours non lu dans l'extrait [V partiel].
- **Garantie** : « registre d'origine et de propriété » pour chaque bijou (accueil) ; certificat IGS London avec photo et numéro vérifiable [V].

## Confiance et service

- Certificat **IGS London** sur chaque pièce, présenté comme issu du réseau GIA (affirmation du site) [V] ; le certificat n'est pas GIA. Hors Monténégro : GIA et IGI exigés par JR Diamond dès 0,50 ct.
- Boutique physique Podgorica (Miljana Vukova 29), lundi-samedi 9 h – 21 h ; téléphone, WhatsApp, Viber, e-mail ; Facebook, Instagram, YouTube, TikTok [V].
- Rendez-vous en ligne pour burme, fiançailles, consultation [V].
- Avis : 0 sur les fiches lues [V] ; 4,9/5 sur 233 avis Google selon la fiche Maps du 04/11 (affiché par Google, non audité) [I].
- Preuves de fabrication : aucune photo ni vidéo d'atelier lues ; vidéo d'ambiance et page « Blister » [V]. Suivi de commande : non vu (pas de panier).
- Programme « Privilege Card », blog, standard 4C : pages présentes, non lues [V].

## Points forts à retenir pour JR Diamond

1. **Fiche technique complète d'un bijou en vente** : couleur, pureté, carat, taille, titre, poids, certificat (fiche RS0654, V). JR Diamond doit au moins égaler ce niveau de détail.
2. **Rendez-vous en ligne par type de besoin**, dont « Vjerenički prsten » et « Burme » (`/me/zakazi-termin/`, V).
3. **Garantie de prix affichée** : remboursement si le même bijou est moins cher en ville (onglet Povraćaj robe, V). Argument que JR Diamond ne peut pas copier tel quel mais qui montre la méfiance sur les prix.
4. **Paiement différé jusqu'à 36 mensualités** annoncé (accueil, V).
5. **15 langues** (sélecteur, V).

## Défauts observés

- Prix absent sur la plupart des fiches : « Kontaktirajte nas » (V, échantillon de 45 fiches).
- Aucun panier, aucun paiement en ligne : la vente passe par le contact (V).
- Les filtres exigent le bouton FILTER ; cocher une case ne fait rien visuellement (V).
- Onglet Dostava vide à la lecture (V).
- Images de rendu sur fond blanc, sans photo portée (capture `/tmp/…/mikel-f-diamond-center/mikelf_com_me_prodavnica_prsteni.jpg`) (V).

## Mesure du temps d'apparition du visuel principal

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste des bagues (première image chargée) | 1,9 s | 1,8 s |
| Fiche RA4089 / RS0654 (première image) | 1,3 s | non mesuré |

Mesure Playwright à partir de la navigation, une exécution, réseau du bac à sable [V].

## Limites de l'audit

- Pas de panier ni de paiement atteignable : parcours arrêté à la fiche et au contact.
- Seul le filtre « Žuto zlato » a été appliqué avec FILTER ; curseurs et autres cases non actionnés.
- Pas d'essai de la recherche, du choix de langue, du panneau de filtre mobile, de la liste de souhaits connectée.
- Chat, WhatsApp, Viber non ouverts. Formulaire de rendez-vous et de contact non remplis.
- 3 fiches seulement lues en détail ; échantillon de 3 pages pour la part de fiches avec prix.

## Sources

- https://mikelf.com/robots.txt (Allow: /)
- https://mikelf.com/me/prodavnica/prsteni , https://mikelf.com/me/prodavnica/burme
- https://mikelf.com/me/prodavnica/artikal/756521 , /756666 , /756557
- https://mikelf.com/me/zakazi-termin/ , /me/sertifikat , /me/kontakt , /me/poruka-u-dijamantu
- Fiche Google Maps « Zlatara Mikel » (avis 4,9/5 sur 233, au 04/11/2026), via Parallel Search
