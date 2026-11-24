# Bosnie-Herzégovine : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, dont aucun des 14 sites n'est bosnien.

Périmètre : joailliers établis en Bosnie-Herzégovine qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers (configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés). Exclus : grandes maisons internationales, grands magasins, places de marché et marques paneuropéennes (Glamira, Satéur, repérées dans les résultats et non classées).

Méthode : recherche web générique en bosniaque (Parallel Search, 6 requêtes sans donnée sur JR Diamond) ; `robots.cjs` sur chaque adresse avant ouverture ; lecture avec curl (en-tête Safari) et Chromium (Playwright, identité par défaut, une page toutes les 2 s au plus par site) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Aucun configurateur 3D ni visuel 360° de bague trouvé en Bosnie-Herzégovine** [I : recherche non exhaustive, une seule langue de requête]. Le seul outil de personnalisation en ligne est le « konfigurator » d'alliances de Jewellery Room (Sarajevo) : formulaire par étapes sans image qui change, sans prix, qui prépare un message WhatsApp [V].
- **Les prix sont affichés en KM (marks convertibles), TVA comprise**, sur les articles de catalogue (Jewellery Room, Dar, Šarm) ; les alliances sur mesure sont « Cijena na upit » (prix sur demande) [V].
- **Pas de diamant synthétique repéré chez les acteurs bosniens** : Dar vend du moissanite (argent 925, certificat d'authenticité du kamen) ; Jewellery Room et Šarm, des zircons [V]. Terme régional pour le synthétique, vu hors de Bosnie : « laboratorijski dijamant » (Zlatara AS, Serbie ; Križek, Croatie) et « dijamant uzgojen u laboratoriju » (Glamira.hr) [V, pages lues par d'autres explorateurs ou en extrait de recherche] ; aucun site bosnien ne l'emploie à notre connaissance [I].
- **Aucun site bosnien ne bloque les robots** : les 7 robots.txt lus répondent AUTORISÉ pour les pages visées [V]. Une seule règle utile : `Disallow: /*?*add-to-cart=` chez Jewellery Room (le bouton d'ajout au panier passe par `admin-ajax.php`, autorisé).
- **Monnaie** : KM (BAM). **Langue** : bosniaque (« bhs ») ; seul Swiss Zlatara a une page EN [V].

## Classement

Intérêt pour JR Diamond, dans l'ordre : configurateur et lien entre image et objet fabriqué ; prix visible et expliqué ; synthétique proposé ; preuves de fabrication ; proximité du modèle (atelier qui fabrique).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Jewellery Room | Sarajevo (Gazi Husrevbegova 18) [V] | https://jewelleryroom.ba/ | https://jewelleryroom.ba/store/vjencane-burme/vjencane-burme-sarajevo/ (l'ancienne adresse `/vjencane-burme-po-zelji-i-zahtjevima-mladenaca/` redirige vers elle, avec un détour par http) | Oui, mais sans image ni prix : alliances, 1 à 2 bagues, métal, couleur d'or, taille, largeur, zircons, envoi par WhatsApp [V] | Aucun ; interdit seulement `?add-to-cart=` [V] | BHS [V] | Seul outil de personnalisation trouvé ; alliances sur mesure avec gravure offerte ; photos de couples clients ; panier, carte ou paiement à la livraison ; bagues de fiançailles seulement en catalogue |
| 2 | Zlatarna Dar (marque de Dar d.o.o., Tešanj) | Tešanj / Jelah ; 11 boutiques du groupe [V] | https://dar.ba/ | https://dar.ba/item-list/ZarucnickoPrstenje | Non ; catalogue filtrable (matériau, sexe, collection, soldes) [V] | Aucun (`Allow: /`) [V] | BHS [V] | Boutique en ligne la plus complète : bagues de fiançailles avec prix, remise visible, panier, carte ou paiement à la livraison ; fabrique 130+ modèles d'alliances (déclaré) ; moissanite ; garantie chiffrée |
| 3 | Zlatare Opal | Mostar (Fejićeva 32A) [V] | https://zlatareopal.com/ | https://zlatareopal.com/collections/zarucnicki-prstenovi | Non ; collection de 4 bagues de fiançailles, collection « Vere » (alliances) [V] | Aucun [V] | BHS [V] | Shopify ; or 18 k italien et collection diamant en boutique ; offre en ligne mince |
| 4 | Zlatara Šarm | Banja Luka [V] | https://zlatara-sarm.com/ | https://zlatara-sarm.com/kategorija/prstenje/prstenje-sa-dijamantima/ | Non ; 198 bagues dont 35 « avec diamants », alliances classiques ou à zircons [V] | Aucun [V] | BHS [V] | WooCommerce ; « nakit po želji » (bijou à la demande) annoncé sans outil ; livraison DHL, paiement Visa, Mastercard, Maestro |
| 5 | Swiss Zlatara (Swiss&Jewellery) | Sarajevo City Center [V] | https://swissjewellery.ba/ | https://swissjewellery.ba/bhs/product-category/prstenje/ | Non ; le centre commercial écrit que la personnalisation d'alliances sera « bientôt » disponible par application web (texte non daté) [V] | Aucun [V] | BHS, EN [V] | Site catalogue sans panier repéré ; promesse d'application de personnalisation d'alliances, à surveiller |
| 6 | Zlatarna Dar (site institutionnel) | Jelah / Tešanj [V] | https://zlatarnadar.ba/ | https://zlatarnadar.ba/dijamanti | Non ; catalogue, pas de vente en ligne repérée sur ce domaine [I] | Aucun [V] | BHS [V] | Page « Dijamanti » : marque Zen Diamond, bagues de fiançailles avec certificat, vente en boutiques (Sarajevo City Center, Alta, Ilidža, Tuzla) |
| 7 | Zlatara.ba | non vérifiée | https://zlatara.ba/ | https://zlatara.ba/kategorija-proizvoda/zene/prstenje/ | Non [V] | Aucun (`Allow: /`) [V] | BHS [V] | « Première bijouterie en ligne de BiH », surtout argent 925 ; quelques bagues en or blanc dès 250 KM ; hors cœur de cible |

Toutes les adresses de la colonne « page de départ » ont répondu 200 le 15/11 (curl avec en-tête Safari) [V]. Non retenus faute de site propre trouvé : Zlatara Đukić, Zlatara Saturn (Sarajevo) et Zlatara Merkur (Banja Luka), cités par un blog de la marque Satéur [I].

## Audits réalisés

Les deux premiers du classement ne bloquent pas les robots :
- `jewellery-room.md` (alliances sur mesure, panier) ;
- `dar-ba.md` (bagues de fiançailles, panier).

Les sites 3 à 7 n'ont pas été audités (hors des 2 premiers demandés).

## Sources

- Recherches (Parallel Search, 15/11/2026) : requêtes en bosniaque sur « zaručnički prstenovi », « burme », « zlatara » et les villes.
- https://jewelleryroom.ba/ , /o-nama , /store/vjencane-burme/vjencane-burme-sarajevo/ , /uslovi-kupovine/ , /povrat-novca-robe/ , /nacin-placanja/ , /cesto-postavljena-pitanja/
- https://dar.ba/ , /item-list/ZarucnickoPrstenje , /item-details/1003 , /delivery , /exchanges , /how-to-order , /terms-of-use ; https://zlatarnadar.ba/ et /dijamanti
- https://zlatareopal.com/ ; https://zlatara-sarm.com/ ; https://swissjewellery.ba/ ; https://zlatara.ba/
- https://scc.ba/en/shop/45/swissjewellery.html (annonce de l'application de personnalisation)
- https://sateur.com/blogs/engagement-ring/best-engagement-rings-in-bosnia-herzegovina-the-ultimate-guide (noms cités, source commerciale d'une marque concurrente : à prendre avec prudence)
- https://www.glamira.hr/zarucnicki-prsteni , https://www.zlatara-as.rs/laboratorijski-dijamanti (vocabulaire régional du synthétique, hors Bosnie)
