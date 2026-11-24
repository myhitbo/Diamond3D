# Audit : Designer Diamonds (Allemagne)

- **Site** : Designer Diamonds KG, Hanauer Straße 65-67, 80993 Munich ; boutique et atelier à Augsburg (Impressum et pages du site) [V].
- **Adresse** : https://www.designer-diamonds.de/ ; page de départ du configurateur : https://www.designer-diamonds.de/pages/verlobungsring-selber-designen (version anglaise : `/en/pages/create-your-own-engagement-ring`) [V].
- **Technique** : page Shopify qui intègre le configurateur dans un cadre (iframe) hébergé sur `main.d37l405k2clsai.amplifyapp.com` (AWS Amplify, sans robots.txt, donc autorisé) ; l'image principale est un **canvas WebGL** (3D) [V].
- **Date** : 15/11/2026 (date imposée par la consigne ; consultations faites à la date système du 24/11/2026).
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13.
- **Statut** : **partiel** : toutes les options ont été relevées et la plupart actionnées, mais l'ajout au panier n'a pas pu être confirmé (voir Limites). Marqueurs : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Page de départ (Shopify) | Texte « So funktioniert dein Verlobungsring Konfigurator » en 6 étapes, FAQ, boutons « Termin vereinbaren » (page contact) |
| Configurateur (cadre) | Un seul écran à défilement : type de diamant → coupe → qualité → forme → taille → couronne → corps → pavage latéral → alliage → couleurs → bague d'appoint → gravure → taille de doigt → « Zum Warenkorb hinzufügen » |
| Panier | `/cart` (Shopify) ; vide après notre essai (voir Limites) |

## Contrôles vérifiés

Prix de base : or 750 blanc, diamant naturel rond 0,30 ct, G/H SI, couronne 4 griffes, corps et pavage « Plain » = **1 690 € TTC (19 % TVA)**.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Natural / Lab Grown | 2 boutons | Change le type ; la liste de coupes et de qualités change (en « Lab Grown », la qualité affichée devient « F/G VS/SI » lors d'un premier essai) | 0,30 ct : 1 690 € dans les deux cas ; 0,50 ct : 2 570 € ; 1,00 ct : 4 730 € dans les deux cas | OK [V] ; **prix identiques naturel/synthétique : à confirmer** (le prix peut être périmé pendant le recalcul, voir Défauts) |
| Classic Cut / Royal Asscher / Canadamark Origin | 3 boutons | Change la coupe ; la qualité se désélectionne | Royal Asscher : 1 940 € (+250) ; Canadamark : prix non obtenu | OK pour Royal Asscher [V] ; Canadamark : titre mis à jour, prix non reçu en 24 s |
| G/H SI / E/F VS / D/E/F VVS | 3 boutons | Change la qualité (titre mis à jour) | E/F VS : non obtenu ; D/E/F VVS : 2 020 € (+330) | partiel [V] |
| Forme : Round, Princess, Oval, Cushion, Pear, Emerald, Radiant, Marquise | 8 boutons (+ flèches) | Titre et SKU changent ; couronne passe de 4 à 6 griffes pour la marquise | Marquise : 1 710 € (+20) | Marquise OK [V] ; les 7 autres formes : présentes, non actionnées toutes (temps) |
| Taille : 0.30, 0.40, 0.50, 0.70, 1.00, 1.50, 2.00, 3.00, 4.00 | 9 boutons | Titre : « 0.5 Carat » etc. ; la mention « Abbildung zeigt 0.50ct » indique que le visuel ne change pas de taille | 0,50 : 2 570 € ; 1,00 : 4 730 € ; 2,00 : 20 210 € ; 3,00 : 47 540 € | OK [V] ; 0,40, 0,70, 1,50, 4,00 : prix non relevé |
| Ringkrone : 4Pr, Hidden Halo, Single Halo, Double Halo, Bezel | 5 boutons (+ flèches) | Titre et SKU changent | Hidden Halo : 1 760 € (+70) | Hidden Halo OK [V] ; autres : non actionnés |
| Ringschiene : Plain, Knife Edge, Cathedral, Wide Plain | 4 boutons | Titre change | Cathedral : 1 570 € (−120) | Cathedral OK [V] ; autres non actionnés |
| Diamantbesatz : Plain, Channel, U Micro, Plate Prong | 4 boutons | Titre change | Channel : 2 360 € (+670) | Channel OK [V] ; autres non actionnés |
| Legierung : 750 Gold / 950 Platin | 2 boutons | Clic sur Platin : sélection restée sur or 750 après 6,8 s | — | **sans effet visible** [V] (peut être un clic perdu) |
| Farbe Ring-Top / Ringschiene : Rose, White, Yellow Gold | 3 + 3 boutons | La sélection change, titre inchangé | Rose Gold : 1 690 € (sans supplément) | OK [V] |
| Beisteckring : No Band / Matching Band | 2 boutons | Ajoute une bague d'appoint, choix de couleur (Yellow Gold) | 2 310 € (+620) | OK [V] |
| Schriftart (3 aperçus « abcdefghi ») | boutons | Présents ; non actionnés | — | présent [V] |
| Gravur | champ texte | Présent ; non rempli | — | non testé (saisie) |
| Ringgröße | liste | 40 à 70 (31 valeurs) | — | OK [V] (liste lue ; valeur 54 choisie pour l'essai d'ajout) |
| Zum Warenkorb hinzufügen | bouton | Aucun message, compteur et `/cart` restés vides en 8 s ; second essai : clic bloqué par le rendu 3D (30 s) | — | **non confirmé** [V] |
| Zoom, rotation, 360°, essayage | — | Aucun contrôle de ce type listé dans le cadre ; le canvas est présent | — | non relevé [V] |
| Termin vereinbaren, Kontakt, WhatsApp (pastille verte) | liens | Pages contact et WhatsApp ; non ouverts | — | liens présents [V] |
| Cookies : Zustimmen / Ablehnen / Einstellungen | boutons | « Ablehnen » utilisé | — | OK [V] |
| Widerruf einreichen / Vertrag widerrufen | bouton, lien | Formulaire d'exercice du droit de rétractation ; non rempli | — | présent [V] |
| Pied de page : Impressum, AGB, Widerrufsbelehrung, Datenschutz, Blog, Guides | liens | Impressum et Widerruf lus | — | OK [V] |

Décompte : 52 contrôles listés sur la page Shopify (ordinateur), 44 en iPhone ; 62 boutons visibles dans le cadre en iPhone [V].

## Options disponibles

- **Origine** : diamant naturel ou « Lab Grown » (terme anglais, y compris sur les pages allemandes ; « Lab Grown Diamanten » dans le menu) [V].
- **Coupe / provenance** : Classic Cut, Royal Asscher, Canadamark Origin [V].
- **Qualité** : naturel G/H SI, E/F VS, D/E/F VVS ; synthétique « F/G VS/SI » observé [V].
- **Formes** : ronde, princesse, ovale, coussin, poire, émeraude, radiant, marquise [V].
- **Tailles** : 0,30 à 4,00 ct (9 valeurs) [V].
- **Couronne** : 4 griffes, Hidden Halo, Single Halo, Double Halo, Bezel ; **corps** : Plain, Knife Edge, Cathedral, Wide Plain ; **pavage** : Plain, Channel, U Micro, Plate Prong ; le texte cite aussi Twisted et Split [V].
- **Métal** : or 750 (18 k) ou platine 950 ; couleurs rose, blanc, jaune, réglables séparément pour la couronne et le corps ; **pas d'or 14 k** [V].
- **Bague d'appoint**, **gravure** (police au choix), **tailles 40 à 70** [V].

## Prix, délais, retours, garanties

- **Affichage** : un prix TTC unique (« € 1690.00 (inkl. 19 % Mwst.) »), sans décomposition ; le prix **met 5 à 25 s à apparaître** après chaque changement (mesuré : 4 à 25 s) [V].
- **Délai** : « Lieferzeit ca. 3-4 Wochen », FAQ : « meist 2 – 6 Wochen », express sur demande [V].
- **Retours** : rétractation légale de 14 jours ; **exclusion explicite des biens non préfabriqués ou conçus selon un choix individuel** : une bague configurée n'est donc pas reprise de plein droit ; frais de retour à la charge du client [V, `/policies/refund-policy`].
- **Paiement** : « bis zu 24 Monate bequem in Raten zahlen mit PayPal » (bandeau) [V] ; autres moyens non relevés (caisse non atteinte).
- **Certificats** : GIA, Canadamark, Royal Asscher mis en avant ; « 40 critères » pour la sélection des pierres [V, texte du site].
- **Aperçu avant fabrication** : « auf Wunsch eine digitale Vorschau oder CAD-Visualisierung » (FAQ) [V].
- **Garantie** : non relevée.

## Confiance et service

- 248 avis Google affichés sur « Über uns » (déclaratif, non audité) ; pastille Google 5 étoiles dans l'en-tête [V].
- Deux magasins (Munich, Augsburg), rendez-vous en ligne, WhatsApp, courriel [V].
- Sonderanfertigung (mesure) et transformation de pièces de famille proposées en rendez-vous : « Erbstücke in ein neues modernes Schmuckteil verwandeln » [V].
- **Preuves de fabrication** : atelier cité (Augsburg, Munich) ; aucune photo ni vidéo de fabrication, aucun suivi de commande vu sur les pages lues [V].
- Langues : allemand et anglais (bouton DE) ; devise : euro [V].

## Mesure du visuel principal

- Canvas 3D du configurateur : **apparition en 4,2 s sur ordinateur, 3,2 s en affichage iPhone** (une mesure chacune) ; le titre et le prix de la page Shopify apparaissent en 0,7 s [V].
- Chaque changement d'option : titre immédiat, prix après 5 à 25 s [V].

## Points forts à retenir pour JR Diamond

1. **Naturel et synthétique dans le même configurateur, avec 9 tailles de 0,30 à 4 ct et 8 formes**, plus certificats GIA et Canadamark : preuve : liste des boutons et FAQ. Le plus proche de l'offre JR Diamond de tout l'audit allemand.
2. **Visuel 3D en temps réel** qui change de couronne, de corps et de couleur : preuve : canvas WebGL, titre et SKU mis à jour.
3. **Prix d'écart lisible par option** : Hidden Halo +70 €, Cathedral −120 €, Channel +670 €, bague d'appoint +620 €, Royal Asscher +250 € : preuve : prix relevés.
4. **Mention honnête sur la taille visible** : « Abbildung zeigt 0.50ct » et « Caratgewicht ist wichtig, aber die sichtbare Größe auch » : preuve : textes du cadre et de la page.
5. **Aperçu CAD sur demande avant fabrication** : preuve : FAQ. Proche de la promesse « ce que vous voyez existe ».
6. **Rendez-vous en boutique ou à distance relié au configurateur** : preuve : boutons « Termin vereinbaren ».

## Défauts observés

- **Prix lent et parfois absent** : 5 à 25 s après chaque clic, champ vide entre-temps ; le SKU affiché peut retarder d'une étape sur le titre.
- **Prix naturel et synthétique identiques** dans nos relevés (1 690, 2 570, 4 730 €) : soit une erreur d'affichage, soit un prix périmé ; le site ne l'explique pas.
- **Libellé du synthétique en anglais** (« Lab Grown ») dans la page allemande, alors que l'usage allemand recommande « synthetisch » (voir `INVENTAIRE.md`).
- **Rétractation exclue sur le sur-mesure** et retour à la charge du client, contrairement à Lovely Rings (60 jours).
- **Ajout au panier non vérifiable** ; titre en anglais mêlé à l'allemand (« Diamantart (Diamond Type) »).
- Le clic sur Platin n'a pas changé l'état dans notre essai ; la page lourde bloque les clics suivants dans un navigateur sans accélération graphique.
- Image « montrée en 0,50 ct » quelle que soit la taille choisie.
- Pas de 14 k ; pas de photo réelle du bijou à côté du rendu.

## Limites de l'audit

- Navigateur sans GPU : le rendu 3D logiciel ralentit les clics ; un clic Platin et l'ajout au panier sont restés non concluants, et les prix de 0,40, 0,70, 1,50 et 4,00 ct, des 7 autres formes et de plusieurs couronnes ne sont pas relevés.
- Panier, caisse, moyens de paiement et frais finaux : non atteints.
- Gravure, formulaire de rétractation, WhatsApp, téléphone : non remplis ni ouverts.
- Les prix « synthétique » sont à vérifier en navigateur normal.
- Cadre tiers (amplifyapp.com) : son robots.txt est absent (404), traité comme autorisé.

## Sources

- https://www.designer-diamonds.de/pages/verlobungsring-selber-designen · https://www.designer-diamonds.de/en/pages/create-your-own-engagement-ring · https://main.d37l405k2clsai.amplifyapp.com/ (cadre)
- https://www.designer-diamonds.de/policies/refund-policy · https://www.designer-diamonds.de/policies/legal-notice · https://www.designer-diamonds.de/pages/ueber-uns · https://www.designer-diamonds.de/pages/sonderanfertigungen-schmuck
- robots.txt : adresses contrôlées avec l'outil robots.cjs (AUTORISÉ).
