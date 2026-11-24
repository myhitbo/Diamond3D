# Audit : Jewellery Room (Sarajevo)

- **Site** : Jewellery Room d.o.o., https://jewelleryroom.ba/ (boutique Gazi Husrevbegova 18, Sarajevo, ouverte en 2019 d'après sa page « O nama »)
- **Page de départ** : https://jewelleryroom.ba/store/vjencane-burme/vjencane-burme-sarajevo/ (« konfigurator » d'alliances). Fiche de bague de fiançailles testée : https://jewelleryroom.ba/store/zenski-nakit/zarucnicki-asimetricni-prsten-sa-centralnim-kamenom-i-cirkonima/
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13.
- **Statut** : complet pour le configurateur d'alliances (ordinateur) et le panier ; partiel pour l'affichage iPhone (contrôles listés et temps mesurés, parcours du configurateur rejoué seulement sur ordinateur).
- Marques : **V** vérifié (contrôle actionné ou page lue, adresse en source) · **I** inféré · **S** supposé.
- robots.txt : AUTORISÉ pour toutes les pages ouvertes ; seule règle utile `Disallow: /*?*add-to-cart=`. Le bouton « Dodaj u korpu » appelle `POST /wp-admin/admin-ajax.php` (`action=etheme_ajax_add_to_cart`), chemin explicitement autorisé (`Allow: /wp-admin/admin-ajax.php`) ; aucune adresse `?add-to-cart=` n'a été ouverte [V].

## Parcours

| Étape | Options |
|---|---|
| 0. Page d'alliances | 82 produits en catalogue sans prix affiché ; fiche « JR WEDDING » avec galerie de photos de couples ; bouton « Prilagodite svoje burme ↓ » mène au formulaire [V] |
| 1. Pour qui | Obje burme (paire) · Ženska burma · Muška burma [V] |
| 2. Par bague (femme puis homme, la seconde se débloque à la confirmation de la première) | Matériau : Srebro 925 · Zlato 585. Si or : couleur Žuto · Bijelo · Višebojno. Taille : liste de 8 à 18 par demi-taille, ou case « Ne znam veličinu — dogovorit ćemo mjerenje ». Largeur : 3 à 6 mm par demi-millimètre (4 mm « kao na modelu »). Zircons (femme seulement) : « Kao na modelu » · « Bez cirkona » · « Želim odabrati broj cirkona » (nombre 1 à 99). Bouton « Potvrdi … burmu » [V] |
| 3. Fin | Gravure incluse (texte convenu plus tard) · champ « Posebna želja » (500 caractères) · « Zatražite personalizovanu ponudu » = lien WhatsApp pré-rempli [V] |
| 4. Fiche bague de fiançailles (catalogue) | Taille (liste) · carte de vœux (une dizaine de thèmes, message de 160 caractères) · quantité · « Dodaj u korpu » · « Kupi odmah » [V] |
| 5. Panier | Récapitulatif, quantité, coupon, accessoires cadeaux, « Idi na plaćanje » (non cliqué) [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Prilagodite svoje burme ↓ | lien ancre | Fait défiler jusqu'au formulaire `#jr-wedding-configurator` | — | OK [V] |
| Obje burme / Ženska burma / Muška burma | 3 boutons radio | « Obje » affiche les deux blocs (homme grisé « Čeka korak 1 ») ; un seul sexe n'affiche que son bloc ; le texte de gravure passe à « obje burme » | aucun | OK [V] |
| Materijal : Srebro 925 / Zlato 585 | radios | Zlato 585 fait apparaître « Boja zlata » | aucun | OK [V] |
| Boja zlata : Žuto / Bijelo / Višebojno | radios | Change le résumé (pastilles de couleur) ; aucune image de bague ne change | aucun | OK [V] |
| Veličina burme | liste | 8 à 18 par 0,5 (21 valeurs) ; unité non précisée | aucun | OK [V] |
| Ne znam veličinu | case | Désactive la liste ; résumé « Potrebno mjerenje » | aucun | OK [V] |
| Širina burme | liste | 3 à 6 mm par 0,5 ; l'option 4 mm porte « kao na modelu » | aucun | OK [V] |
| Cirkoni (femme) | liste + nombre | 3 choix ; le champ numérique apparaît au troisième (1 à 99, « okviran broj ») | aucun | OK [V] |
| Potvrdi žensku / mušku burmu | boutons | Fige le bloc (« Potvrđena ✓ »), affiche le résumé « Zlato 585 · Žuto zlato · veličina 12 · 4 mm · Bez cirkona », ouvre la bague suivante ; « Izmijeni » rouvre | aucun | OK [V] |
| Posebna želja | zone de texte | Ajoute la ligne « Posebna želja » au message | aucun | OK [V] |
| Zatražite personalizovanu ponudu | lien | Inactif tant que tout n'est pas confirmé ; ensuite `https://wa.me/38762090099?text=…` avec le récapitulatif (modèle, matériau, couleur, taille, largeur, zircons, gravure, lien produit). **Non cliqué** (ouvrirait WhatsApp) | « Cijena na upit » | OK [V] |
| Lista želja (cœur) | lien | Mène à `/moj-profil/?et-wishlist-page&add_to_wishlist=8000` (compte) ; non cliqué | — | non testé : compte |
| Pretraži store | bouton | Champ de recherche du site ; non utilisé (les adresses de recherche ne sont pas explorées) | — | non testé |
| Filteri (catalogue d'alliances) | bouton | Volet qui ne contient que « Sortiraj » : Najnovije · Cijena niža→viša · Cijena viša→niža ; aucune facette matériau, largeur ou prix | — | OK [V] |
| Prikaži sliku n od 4 ou 7 | boutons | Pastilles de la galerie de chaque vignette du catalogue | — | présents [V], non cliqués |
| Dodaj u korpu (fiche bague) | bouton | Envoie l'article au panier sans quitter la page ; la liste de tailles est obligatoire | prix de la fiche | OK [V] |
| Kupi odmah | bouton | Présent ; non cliqué (mène au paiement) | — | non testé : au-delà du panier |
| Dodajte čestitku | bloc | Carte de vœux gratuite, une dizaine de thèmes, message libre | 0 KM | présent [V] |
| Vodič za veličine | lien | Page de guide des tailles (`/vodic-za-velicine/#prstenje`) | — | lien lu [V] |
| WhatsApp podrška | lien | `wa.me/38762090099` avec message pré-rempli ; non cliqué | — | présent [V] |
| E-mail podrška | lien | `mailto:info@jewelleryroom.ba` | — | présent [V] |
| Corbeille « Korpa » | lien | Mène à `/korpa/` | — | OK [V] |
| Menu (Ženski, Muški, Dječiji, Pokloni, Vjenčane burme, Goldgram) | liens | Navigation, 17 liens de pied de page lisibles | — | OK [V] |

Pas de mode de vue (3D, 360°, vidéo, sur la main, AR, zoom), de comparateur, de partage, de financement ni de chat : absents [V, contrôles listés par `controls.cjs`, 78 sur ordinateur, 68 sur iPhone].

## Options disponibles

- Alliances sur mesure : matériau argent 925 ou or 585 (14 k) ; or jaune, blanc, « višebojno » (plusieurs couleurs) ; taille 8–18 (demi-tailles) ou « à mesurer » ; largeur 3–6 mm ; zircons « comme le modèle », aucun, ou nombre choisi (femme) ; gravure offerte ; note libre [V].
- Pas de choix de forme de pierre, de carat, de pureté, d'origine naturel ou synthétique, de monture ni de griffes : le site ne vend ni diamants à la carte ni configurateur de bague de fiançailles [V].
- Catalogue : 82 alliances sans prix ; 15 bagues en or (jusqu'à 879,95 KM lu sur la page) [V].

## Prix, délais, retours, garanties

- **Prix** en KM, TVA comprise [V, `/uslovi-kupovine/`]. Alliances sur mesure : « Cijena na upit » (prix confirmé par l'équipe avant fabrication) [V]. Une balise de suivi de la page contient un prix de 399,00 BAM pour le produit, non affiché à l'écran [V, paramètre décodé ; sens inconnu : un prix de référence, supposé].
- **Fiche bague** « Prsten Sjajni solitaire » (or 14 k, fabriqué en Turquie d'après la fiche) : 579,95 KM barré, 521,96 KM avec −10 % « Black November » [V]. Aucune décomposition du prix (matière, façon).
- **Délais** : sur mesure, aucun délai annoncé [V]. Pour le catalogue, trois textes différents : préparation « jusqu'à 5 jours ouvrés » (conditions), « 1–2 jours » (bandeau de la fiche), « 3–5 jours ouvrés » (onglet livraison) [V].
- **Livraison** : 10 KM, gratuite dès 250 KM ; retrait gratuit en boutique, prêt en 2 à 4 h [V].
- **Retours** : 15 jours après réception, article non porté, frais de retour à la charge du client ; page « Povrat » sans mention du sur mesure (ni exclusion ni inclusion) [V].
- **Garanties** : fiche « Garancija : DA » sans durée ; certificat d'authenticité, boîte de marque, chiffon à polir « avec chaque bijou » [V]. Pas de certificat GIA ou IGI (pas de diamants).
- **Paiement** : Visa, Mastercard, Maestro via MULTIPAY Gateway ; paiement à la livraison selon la livraison choisie ; en boutique espèces ou carte [V].

## Confiance et service

- Photos de plus de 20 couples portant leurs alliances (fichiers « BurmeFrame ») sur la page des alliances : preuve sociale, pas de preuve de fabrication [V].
- Boutique physique à Sarajevo, adresse et horaires (09:30–18:30) ; WhatsApp, téléphone, e-mail, formulaire de contact ; FAQ, guide des tailles, conditions [V].
- Avis clients : zéro sur la page testée (compteur d'avis à 0 dans la balise de la page) [V].
- Aucune photo ou vidéo de fabrication, aucun suivi de commande, aucun essayage à domicile, aucun rendez-vous en ligne trouvé [V : liens lus ; non exhaustif].
- Libellé du synthétique : sans objet, aucun diamant ni pierre de laboratoire vendu ; zircons nommés « cirkoni » [V].
- Langue : bosniaque seulement ; devise KM [V].

## Temps d'apparition du visuel principal

| Page | Appareil | Chargement complet | Plus grand élément (LCP) |
|---|---|---|---|
| Alliances sur mesure | ordinateur | 5,0 s | 4,5 s (photo de couple) [V] |
| Alliances sur mesure | iPhone | 5,0 s | 3,8 s (photo de couple) [V] |
| Fiche bague de fiançailles | ordinateur | 2,4 s | 2,2 s (texte du titre) [V] |
| Fiche bague de fiançailles | iPhone | 3,0 s | 2,5 s (photo de la bague) [V] |

## Points forts à retenir pour JR Diamond

1. **Le récapitulatif envoyé à l'atelier est complet et lisible** : toutes les options deviennent un message structuré avec le lien de la page (preuve : lien `wa.me` relevé après remplissage, avec une ligne par option). Réutilisable pour notre devis.
2. **Confirmation bague par bague pour un couple** : la seconde ne s'ouvre qu'après la première, avec un résumé modifiable (« Izmijeni ») [V].
3. **« Je ne connais pas ma taille » gérée par un choix explicite** (mesure convenue ensuite), sans bloquer la commande [V].
4. **Gravure incluse et annoncée trois fois** sur la page (avantages, étape, bouton) : argument de prix simple [V].
5. **Fiche claire sur ce qui est inclus** (certificat, boîte, chiffon) et sur le fait que « mesures et détails sont confirmés avant fabrication » [V].
6. **Panier avec barre de progression vers la livraison gratuite** et accessoires cadeaux optionnels [V].

## Défauts observés

- Le « configurateur » ne montre aucune image qui change et n'affiche aucun prix : rien ne prouve ce que la bague deviendra [V].
- Trois délais de livraison différents sur le même site ; aucun délai de fabrication pour le sur mesure [V].
- Aucune mention de l'exception du sur mesure dans la politique de retour (15 jours pour tout) [V].
- Le bouton d'envoi dépend de WhatsApp : sans compte WhatsApp, pas de demande ; aucun formulaire de repli [V].
- Compteur d'avis à zéro ; garantie sans durée [V].
- Premier essai de l'audit : l'ancienne adresse du configurateur redirige d'abord vers http (puis https), ce qui fait échouer certains navigateurs derrière un proxy ; l'adresse finale fonctionne [V].

## Limites de l'audit

- Non testés : bouton d'ajout à la liste de souhaits, recherche, « Kupi odmah », page de paiement (au-delà du panier), formulaire de contact, ouverture de WhatsApp.
- Parcours du configurateur rejoué sur ordinateur seulement ; sur iPhone, contrôles listés et temps mesurés.
- Les 82 alliances du catalogue n'ont pas été ouvertes une à une ; aucune ne montrait de prix.
- Un article a été ajouté au panier d'une session de navigateur jetable (aucune donnée personnelle saisie, rien envoyé).
- Une seule fiche de bague de fiançailles testée.

## Sources

- https://jewelleryroom.ba/store/vjencane-burme/vjencane-burme-sarajevo/ (contrôles, formulaire, lien WhatsApp)
- https://jewelleryroom.ba/webstore/vjencane-burme/ et https://jewelleryroom.ba/webstore/zenski-nakit/zenski-zlatni-nakit/zz_prsten/ (catalogues)
- https://jewelleryroom.ba/store/zenski-nakit/zarucnicki-asimetricni-prsten-sa-centralnim-kamenom-i-cirkonima/
- https://jewelleryroom.ba/korpa/ ; /uslovi-kupovine/ ; /povrat-novca-robe/ ; /nacin-placanja/ ; /cesto-postavljena-pitanja/ ; /o-nama
- https://jewelleryroom.ba/robots.txt
