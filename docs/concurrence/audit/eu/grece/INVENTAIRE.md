# Inventaire des sites à auditer : Grèce

Date : 15/11/2026 (contrôles faits dans la session du 24/11). Explorateur : Grèce. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun grec) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) · **[I]** inféré · **[S]** supposé.
Contrôle `robots.cjs` avant chaque adresse ouverte. Pas d'identité de navigateur modifiée, pas de nouvel essai pour passer un blocage. Les recherches web ont été faites en grec et en anglais (requêtes génériques).

## Constat d'ensemble

- **Deux joailliers grecs ont un vrai constructeur de bague de fiançailles en ligne** : Makriadis (Athènes) et DiamondJools (Athènes). Les deux fonctionnent en 3 étapes (base, diamant, finalisation), avec un immense stock de diamants non possédés, naturels et synthétiques, filtrables, certificat GIA ou IGI, prix affichés en euros TTC [V : pages de départ ci-dessous, parcours audités].
- Aucun des deux ne montre un modèle 3D de la bague finale issu du fichier de fabrication : photos (Makriadis) ou photos et vue 360° d'une base « illustrative » (DiamondJools, qui montre une bague de 1,5 ct en photo alors que le diamant choisi est de 0,6 ct) [V : audits].
- Le troisième constructeur (Iordanis, Kifisia) passe par un module tiers hébergé sur `jewelershowcase.com`, dont le `robots.txt` interdit tout (`Disallow: /`) : **non ouvert** [V : `robots.cjs` INTERDIT].
- Le reste du marché grec est un catalogue de modèles à prix affiché, avec parfois un filtre « lab grown » (Haritidis, Kosmima24, Jeweler.gr) ou un sur-mesure par rendez-vous (DB Jewels, Andreas Mathios) [V d'après les pages lues en recherche, non audités].
- **Terme du diamant synthétique en grec** : il n'y a pas de terme unique sur les sites. On trouve « εργαστηριακό διαμάντι » (diamant de laboratoire : DiamondJools filtre « Εργαστηριακό », Haritidis), « lab grown » transcrit (Makriadis, DiamondJools, DB Jewels, Haritidis), « τεχνητό » (artificiel : Gatsos, Jeweler.gr), « συνθετικό » (synthétique : catégorie Skroutz « Συνθετικό Διαμάντι »), « καλλιεργημένο » (cultivé : Makriadis « Εργαστήριο Καλλιεργημένων Διαμαντιών ») ; Diamond Lab GR les énumère tous : « εργαστηριακά, συνθετικά, lab-grown, τεχνητά ή καλλιεργημένα » [V : pages citées dans les sources]. Je n'ai pas trouvé de règle grecque imposant un terme (non vérifié ; à demander à l'avocat).
- Marché étudié : les prix visibles sont en euros TTC (TVA 24 %, mentionnée par Makriadis) ; pas de prix en shekels bien sûr.

## Classement et tableau

Classé par intérêt pour JR Diamond (constructeur en ligne, diamants naturels et synthétiques, prix décomposé, preuve de fabrication, alliances).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Makriadis Jewelry (Αφοί Μακριάδη, atelier depuis 1973) | Athènes (Kornarou 2, près d'Ermou) | https://www.makriadis.com/ | https://www.makriadis.com/el/ringbuilder/engagement-ring-settings/ | **Oui** (« Ring Builder » : base, diamant, bague finale). 35 bases ; 653 775 diamants synthétiques et un stock de naturels, 10 formes [V] | Aucun (200, `robots.txt` : `Allow: /`). Bandeau de cookies seulement | EL, EN ; euro, livre, dollar [V] | Constructeur complet jusqu'au panier ; prix de la base et du diamant séparés ; délai 3 à 4 semaines annoncé sur la fiche ; atelier de famille |
| 2 | DiamondJools | Athènes (atelier « in-house », 4 500 bagues par an annoncées) | https://www.diamondjools.gr/ | https://www.diamondjools.gr/monopetra/ftiakse-to-diko-sou/settings | **Oui** (« Σχεδιάστε το δικό σας » : base, diamant, finalisation). 90 bases ; 362 877 diamants synthétiques, 293 571 naturels ; photos 5 vues, zoom, vue 360° [V] | Aucun (200). `robots.txt` interdit `/cart`, `/checkout`, `/sign-in` : le panier de page n'a **pas** été ouvert, seul le tiroir du panier l'a été | EL, EN [V] | Meilleure interface du pays : prix en direct, diamants certifiés avec rapport en ligne, remise, 12 mensualités, guide des tailles, gravure |
| 3 | Iordanis Jewelry (Dimitris Iordanis Dailoglou) | Kifisia (Athènes) | https://www.iordanisjewelry.gr/ | https://www.iordanisjewelry.gr/bespoke-jewelry/#custom (menu « Design-Your-Own (Diamond Ring) ») | Oui, mais module tiers `iordanis-frame-categoryembed.jewelershowcase.com` (« powered by AI-Graphics ») [V] | **Module interdit aux robots** (`Disallow: /`) ; le site principal est autorisé (200) | EN [V] | Constructeur, diamants naturels et synthétiques ; **non audité** (module interdit) |
| 4 | Χαριτίδης (Haritidis) | non relevée | https://www.haritidis.gr/el | https://www.haritidis.gr/el/kosmimata-gamou/monopetra/diamanti/lab-grown-diamonds | Non. Catalogue : 70 pages de solitaires, filtres (disponibilité immédiate ou sur commande, carats, métal 14/18 k, forme, pierre) ; une page « lab grown » avec explications [V d'après la recherche] | Aucun (200 ; redirige vers `/el`) | EL, EN | Prix 740 à 2 980 € pour les lab grown, livraison gratuite en Grèce ; **non audité** |
| 5 | DB Jewels (« Designed by Antony », atelier depuis 1960) | Athènes (Ermou 18) | https://www.dbjewels.gr/ | https://www.dbjewels.gr/ (boutique en ligne ; page « Lab Created Diamonds ») | Non. Personnalisation annoncée : carats 14/18 k, couleur d'or, pierre naturelle ou lab grown, moissanite, taille [V d'après la page lue] | Aucun (200) | EL | Atelier visible, GIA/HRD/IGI, 12 mensualités, retour 10 jours ouvrés ; non audité |
| 6 | Andreas Mathios | non relevée | https://andreasmathios.gr/ | https://andreasmathios.gr/ | Non. « Custom » : solitaires 18 k 1 500 à 2 720 €, avec 1 ct et 1,8 ct lab grown [V d'après la recherche] | Aucun (200) | EL | Prix affichés pour naturel et synthétique ; non audité |
| 7 | Kosmima24 | Thessalonique (téléphone 2310) [I] | https://www.kosmima24.gr/ | https://www.kosmima24.gr/xrysa-kosmimata/daxtylidia/monopetra_c_29.html | Non. 799 résultats, filtres métal, pierre (« Lab Diamond », diamant), couleur, prix ; prix catalogue et « plus bas prix des 30 derniers jours » [V d'après la recherche] | Aucun (200) | EL | Affichage de prix légal (30 jours) à noter ; non audité |
| 8 | Gatsos Jewellery | Thessalonique (Mitropoleos 40) | https://gatsos.gr/ | https://gatsos.gr/product-category/diamantia/technita-diamantia/ | Non. Boutique WooCommerce ; page pédagogique sur les diamants CVD [V d'après la recherche] | Aucun (200) | EL | Diamants « τεχνητά » (artificiels), certificats IGI ou GIA ; non audité |
| 9 | Κόσμημα Καλύβας | Argyroupoli (Athènes) | https://kosmima-kalyvas.gr/ | https://kosmima-kalyvas.gr/product/μονοπετρο-lab-grown-5 (fiche) | Non. Solitaire lab grown 0,30 ct D VS2 en or 14 k à 690 € (série « Etho Messina ») [V d'après la recherche] | non testé (page lue par la recherche) | EL | Prix d'entrée ; non audité |
| 10 | Monopetro.com.gr (Ketsetzoglou) | Athènes (Kolonaki) | https://www.monopetro.com.gr/ | https://www.monopetro.com.gr/ | Non. « 500 modèles », boutique en ligne [V d'après la recherche] | Aucun (200) | EL | Spécialiste du solitaire, livraison gratuite ; non audité |

Écartés : Jeweler.gr (revendeur multi-marques, place de marché de fait), Skroutz (place de marché), Goldy et Kosmima24 pour les alliances bon marché (acier, argent) hors cible. Diamond Lab GR (diamondlabgr.com) est une société du groupe Makriadis (pied de page du site) et vend des diamants en vrac : couvert par le rang 1 [V].

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots ont été audités : **Makriadis** (`makriadis.md`) et **DiamondJools** (`diamondjools.md`).

## Sources

- Makriadis : https://www.makriadis.com/ ; https://www.makriadis.com/el/ringbuilder/engagement-ring-settings/ ; https://www.makriadis.com/i-ekthesi-mas (lue le 24/11).
- DiamondJools : https://www.diamondjools.gr/ ; https://www.diamondjools.gr/monopetra/ftiakse-to-diko-sou/settings ; https://www.diamondjools.gr/diamonds.
- Iordanis : http://iordanisjewelry.gr/ (redirige vers https://www.iordanisjewelry.gr/) ; `robots.txt` de `iordanis-frame-categoryembed.jewelershowcase.com` : INTERDIT.
- Haritidis : https://www.haritidis.gr/el/kosmimata-gamou/monopetra ; https://www.haritidis.gr/blog/lab-grown-diamonds-explained.
- DB Jewels : https://www.dbjewels.gr/ ; https://www.dbjewels.gr/lab-created-diamonds.
- Andreas Mathios : https://andreasmathios.gr/ ; Kosmima24 : https://www.kosmima24.gr/xrysa-kosmimata/daxtylidia/monopetra_c_29.html ; Gatsos : https://gatsos.gr/ergastiriaka-diamantia-cvd-diamonds ; Kalyvas : https://kosmima-kalyvas.gr/product/%CE%BC%CE%BF%CE%BD%CE%BF%CF%80%CE%B5%CF%84%CF%81%CE%BF-lab-grown-5 ; Monopetro : https://www.monopetro.com.gr/.
- Termes du synthétique : https://www.diamondlabgr.com/ekpaideusi-diamantion/diamantia-ergastiriou?lang=el ; https://www.skroutz.gr/c/2066/Monopetra/f/2096579/synthetiko-diamanti.html ; https://jeweler.gr/diamanti/monopetra?filters%2Flab-grown-diamanti.
