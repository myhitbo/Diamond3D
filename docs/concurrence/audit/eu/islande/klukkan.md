# Audit : Klukkan (Kópavogur, Islande)

- **Site** : https://www.klukkan.is/en (boutique Shopify de 4 magasins : Smáralind, Kringlan, Nýbýlavegur 10, Fjörður)
- **Page de départ** : https://www.klukkan.is/en/collections/trulofunarhringar ; fiche testée : https://www.klukkan.is/en/products/laupur-14k-hvitagulls-einbaugur-med-25pt-demanti
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366×900 et iPhone 13 (émulation)
- **Statut : partiel.** Le `agents.md` du site (identique à celui d'AURUM) demande de ne pas scripter les achats. Aucun ajout au panier, ni page du panier. Le `robots.txt` autorise les pages lues (`/cart/` interdit).
- Marques : V vérifié · I inféré · S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Départ | Collection « Engagement rings » (49 produits au moment du test ; 51 dans l'extrait de recherche), 3 vues (large, medium, compact), tri |
| Filtres | Prix (curseur 0 à 650 000 ISK + champs), vendeur (Klukkan, Laupur, Nuran, Siersbøl), type, genre, couleur du métal (Gylltur = doré, Silfur), pierre (améthyste, zircone cubique, diamants, **Lab Grown demantar**, rubis, saphir, tourmaline, topaze), couleur de pierre |
| Fiche | Photos (2), description, 3 volets (« More information », « Pick up, get delivered, or return », « Jewellery care »), stock par magasin, « Goes well with », avis, « Add to cart », cœur « Add to Óskar » (liste de souhaits) |
| Sur mesure | Page « Goldsmith » : conception de bague de fiançailles ou d'alliances sur demande en magasin (V) |
| Panier | Non testé (voir statut) |

## Contrôles vérifiés

Relevé `controls.cjs` : collection 284 contrôles (ordinateur), 256 (iPhone) ; fiche 157 (les deux).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtres (cases : vendeur, pierre, couleur…) | cases | 33 cases listées ; **un clic scripté sur la case n'a pas changé le nombre de produits** (49 avant et après, adresse inchangée) ; le panneau attend sans doute un bouton « View results » | — | Effet non vérifié |
| Curseur de prix / champ « filter.v.price.gte » | curseur, nombre | 4 curseurs, max 650 000 ; la saisie de 300 000 + Entrée n'a pas modifié le décompte | — | Effet non vérifié |
| « SORT BY » | bouton | ouvre 9 critères : recommandés, plus vus, populaires, A-Z, Z-A, prix croissant, prix décroissant, plus ancien, plus récent | — | Ouvert ; critères non appliqués |
| Vues large / medium / compact | boutons | cliquables sans erreur ; changement de grille non mesuré | — | OK |
| « Add to cart » sur la fiche et les cartes | bouton | non actionné (site : pas de scripts d'achat) | — | Non testé |
| Cœur (liste) / « Add to Óskar » | bouton | présents ; non actionnés (compte) | — | Non testé |
| « Join » (club de fidélité) | bouton | affiche « gagnez 11 500 ISK de crédit avec cet achat » ; formulaire nom, courriel | — | Non rempli |
| « Zoom picture » | bouton | clic sans ouverture de visionneuse | — | Sans effet |
| Volets « More information », « Pick up… », « Jewellery care » | accordéons | texte lu dans la page : matière, pierres, livraison, retours, garantie, entretien | — | OK |
| Liste de langues (Íslenska, English, Polski) | liste | choisir Íslenska renvoie à `https://www.klukkan.is/products/laupur-14k-…` (sans `/en`) | — | OK |
| « SKRIFA UMSÖGN » (écrire un avis) | bouton | non actionné | — | Non testé |
| « Open search » `/en/search` | lien | non utilisé (recherche non automatisée) | — | Non testé |
| « Open account page » | lien | mène à une redirection d'authentification (compte) | — | Non suivi |
| Téléphone 554-4320 | lien `tel:` | non appelé | — | Lien présent |
| Pages Delivery, Payment Options, Terms | liens | lues | — | OK |
| « Available in these stores » | liste | stock par magasin : Kringlan en stock ; 3 autres « Not available » ; « Only 1 unit left » | — | OK |

Vues du produit : 2 photos fixes (bague vue de face et de profil), ni vidéo, ni 360°, ni 3D (V, capture).

## Options disponibles

- **Métaux** (page des bagues) : or 14 k jaune, blanc, rose, acier ; 8 k et argent présents au catalogue (V). **Platine : non vu.**
- **Pierres** : diamants (23) et diamants synthétiques (19) d'après les compteurs de la page (extrait de recherche) ; saphir, rubis, tourmaline, topaze, zircone.
- **Diamant** : poids au titre (0,02 à 1,1 ct relevés) ; qualité (VS, VVS) parfois au titre ; pas de choix de carat, de couleur ni de pureté en ligne.
- **Taille** : aucun choix de taille de doigt sur la fiche lue ; mesure en magasin et « adaptation de la taille après l'achat » (V). Taille en filtre : 54 et 56 (V, extrait de recherche).
- **Gravure** : « sur la plupart des bagues » (V, page des alliances) ; non configurable en ligne sur la fiche lue.
- **Sur mesure** : l'orfèvre de la maison conçoit une bague de fiançailles ou des alliances, ajuste et grave ; 2 à 3 semaines pour une commande spéciale (V).

## Prix, délais, retours, garanties

- **Prix** (V) : en couronnes islandaises, TTC présumé (I), sans décomposition. Exemples : solitaire 14 k or blanc, diamant synthétique 0,25 ct : 230 000 ISK ; or 14 k, 0,31 ct de diamants : 335 000 ISK ; alliance LAUPUR 14 k : de 180 000 à 260 000 ISK.
- **Paiement** (V) : cartes, **Teya en 2 à 36 mois** (jusqu'à 1 990 000 ISK), Netgíró (payer à 14 jours ou en 2 à 12 mois), virement, PEI.
- **Livraison** (V) : gratuite dès 15 000 ISK ; retrait en magasin gratuit ; Dropp 890 à 1 790 ISK ; Flytjandi 1 490 ISK. Commande avant 11 h : le jour même dans la capitale, le lendemain ailleurs ; la gravure peut rallonger.
- **Délai de fabrication** : alliances 2 semaines en général ; commandes spéciales 2 à 3 semaines (V).
- **Retours** (V) : échange sous 90 jours (au prix du jour) ; **rétractation en ligne sous 14 jours** (loi n° 16/2016) ; **exclue pour les articles sur mesure ou personnalisés, par ex. gravés** ; retour gratuit en magasin.
- **Garantie** (V) : 2 ans légale (jusqu'à 5 ans pour un produit à longue durée de vie selon la loi n° 48/2003).

## Confiance et service

- Note de **4,8 sur 5 pour 209 avis** (V, bandeau du site ; vérifiée comme affichage du site seulement), revendeur agréé, 4 magasins, « plus de 5 000 montres et bijoux ».
- Orfèvre et atelier en magasin ; **aucune photo ni vidéo de fabrication** (V).
- Club de fidélité ; pas de rendez-vous en ligne ni de visio trouvés (I).
- Pas de chat ouvert (règle) ; un bouton flottant de chat est visible sur la capture.
- Libellé du synthétique : « Lab Grown demantar » (filtre, titres « lab-grown ») et « lab diamond » ; l'orfèvre dit « Lab-grown demantar bjóða mikið gildi og skýra rekjanleika » (valeur et traçabilité). Pas de certificat GIA ni IGI relevé.
- Langues : islandais, anglais, polonais ; devise ISK.

## Points forts à retenir pour JR Diamond

1. **Stock réel par magasin sur chaque fiche** (« Only 1 unit left », « Available in these stores »). Preuve : fiche testée.
2. **Moyens de paiement détaillés avant l'achat** : étalement en 36 mois, report à 14 jours, avec plafond annoncé. Preuve : `/en/pages/greidsluleidir`. Utile pour une bague au-delà de 5 000 ₪.
3. **Exception du sur mesure et de la gravure écrite dans les conditions** : rétractation de 14 jours, sauf articles personnalisés. Preuve : `/en/pages/skilmalar`. C'est la même question que pour l'avocat israélien.
4. **Barème de livraison complet et heure limite (11 h)** annoncés sur chaque fiche. Preuve : volet « Pick up, get delivered, or return ».
5. **Filtre « Lab Grown demantar » explicite** à côté de « Demantar ». Preuve : liste des filtres de la collection.
6. **Chargement rapide** : première photo de produit visible en 1,3 s sur iPhone ; fiche en 0,8 s ordinateur et 0,7 s iPhone (V, mesure du jour, une par appareil).

## Défauts observés

- Les filtres n'ont pas répondu à un clic scripté (49 produits avant et après) : effet à confirmer à la main.
- Pas de configurateur, de 3D, de vidéo ; deux photos par bague.
- Aucun choix de taille ni de gravure sur la fiche lue.
- Description très courte, sans certificat ni critères de qualité pour la plupart des bagues.
- Le compteur affiche 49 produits à la mesure et 51 dans l'extrait de recherche (écart non expliqué).
- Lien de langue : le passage à l'islandais perd le préfixe `/en`, comportement attendu.
- Le zoom de la photo n'ouvre rien.
- Aucune preuve de fabrication ni suivi de commande.

## Limites de l'audit

- Ni panier, ni frais calculés au panier, ni confirmation de la commande : le `agents.md` demande aux agents de ne pas scripter les achats (agents identifiés par Web Bot Auth, non utilisé ici). Pages publiques lues avec l'identité Chromium par défaut, une page toutes les 2 secondes au plus.
- Une seule fiche de bague ouverte ; les autres sont lues dans la liste.
- Filtres, tri, avis, recherche et chat non vérifiés au-delà de ce qui est dit.
- Version islandaise non auditée.

## Sources

- https://www.klukkan.is/en/collections/trulofunarhringar
- https://www.klukkan.is/en/collections/giftingarhringar
- https://www.klukkan.is/en/products/laupur-14k-hvitagulls-einbaugur-med-25pt-demanti
- https://www.klukkan.is/en/pages/heimsending
- https://www.klukkan.is/en/pages/greidsluleidir
- https://www.klukkan.is/en/pages/skilmalar
- https://www.klukkan.is/en/pages/gullsmidur-vidgerdir-trulofunarhringar
- https://www.klukkan.is/robots.txt ; https://www.klukkan.is/agents.md (V, mêmes consignes que celui d'AURUM)
