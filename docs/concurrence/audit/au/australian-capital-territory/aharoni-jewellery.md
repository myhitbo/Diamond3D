# Audit : Aharoni Jewellery (Canberra, ACT)

- **Site** : Aharoni Jewellery, https://www.aharoni-jewellery.com (atelier de joaillerie, Bunda Street, Canberra City ; « making jewellery since 1989 »)
- **Page de départ** : https://www.aharoni-jewellery.com/engagement-rings/
- **Date** : 15/11/2026 (date imposée par la consigne ; contrôles faits le 25/11/2026 selon l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13
- **Statut** : **complet** pour ce qui existe. Le site est une vitrine sans vente en ligne : ni configurateur, ni prix, ni panier, ni paiement. Les étapes « panier », « prix » et « options de commande » sont donc sans objet (vérifié : aucun prix « $ » ni mention de synthétique sur les pages lues).
- robots.txt : `User-agent: *` `Allow: /` (vérifié). Toutes les adresses ouvertes ont été contrôlées AUTORISÉ.

## Parcours

| Étape | Ce que propose le site |
|---|---|
| Page de départ « Engagement rings » | Texte en 4 étapes : conversation, pierre, design, fabrication ; sélection de 5 pièces ; bagues Mokume Gane |
| Galerie | 393 pièces (« A gallery you can wear »), 8 filtres, fenêtre de détail avec précédent/suivant |
| Design sur mesure (/custom-design/) | 5 étapes : conversation, pierre, design (croquis puis CAO 3D), fabrication, remise |
| Prise de contact | Réservation d'une consultation (/visit/#book) ou formulaire « Tell us what you have in mind » |
| Pas de panier | Aucun paiement en ligne |

## Contrôles vérifiés

Relevé automatique de /engagement-rings/ : 37 contrôles sur ordinateur, 18 sur iPhone (menu replié).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Gallery, Our craft, Find your piece, Our story, Signature works, Visit | liens | navigation vers pages ou ancres ; sur iPhone un bouton MENU | aucun prix | listés ; Gallery et Visit ouverts |
| MORE ABOUT CUSTOM DESIGN | lien | /custom-design/ (page lue) | - | OK |
| Cartes de pièces (Black and white diamond bands, Sapphire and diamond ring, Diamond trilogy ring, Ruby and diamond double band, Pink diamond halo ring, Pair of Mokume Gane rings) | liens | ouvrent la galerie à l'ancre `#p-<numéro>` ; chaque pièce a un numéro (No. 2260…) | aucun | cliquées indirectement (fenêtre ouverte depuis la galerie) |
| SEE ALL IN THE GALLERY | lien | /gallery/?f=engagement : 87 pièces | - | OK |
| ABOUT MOKUME GANE | lien | /mokume-gane/ | - | listé, non ouvert |
| BOOK A CONSULTATION | lien | /visit/#book (ancre vers le formulaire de la page) | gratuit (supposé : non indiqué) | OK, non envoyé |
| Get directions | lien | Google Maps (adresse du studio) | - | listé |
| Téléphone +61 (2) 6262 5053 | lien tel: | appel direct | - | présent ; sur iPhone barre CALL / DIRECTIONS / BOOK |
| E-mail eytan@aharoni-jewellery.com | lien mailto: | ouvre le client mail | - | présent |
| Pied de page : Gallery, Custom design, Engagement rings, Gifts, Something for you, Repairs & remodelling, Mokume Gane, Gemstones, Diamonds, Our story, The Opera House Ring, The Always Clock, Visit | liens | pages d'information | - | /diamonds/ lue ; autres listées |
| Instagram, Facebook | liens | réseaux sociaux | - | présents |
| Privacy | lien | politique de confidentialité | - | listé |
| Filtres de galerie : All pieces / Rings / Earrings / Pendants & necklaces / Bracelets / Mokume Gane / Engagement & wedding / Diamonds | boutons (aria-pressed) | filtrent sans rechargement ; adresse `?f=ring` etc. | - | testés : 393 / 276 / 32 / 56 / 14 / 52 / 87 / 65 pièces ; tous fonctionnent |
| Fenêtre de pièce (Close, ‹ ›) | boutons | affiche nom, description (métal, pierres) et numéro | aucun prix | OK (ex. « Wave band … No. 27 ») |
| Questions fréquentes (6) | accordéons | dépliés : réservation, engagement, budget, délai, pierre existante, contenu livré | - | tous dépliés |
| Formulaire /visit/ : nom, e-mail, téléphone (facultatif), objet (liste de 7), message, SEND ENQUIRY | formulaire | non rempli, non envoyé | - | **non testé** (consigne : aucun envoi) |
| Objet du formulaire | liste | Engagement ring, Wedding bands, A gift, Something for me, Remodel or repair, A loose stone, Other | - | listé |
| Champ piège « LEAVE THIS EMPTY » | champ | anti-spam (honeypot) visible dans le texte | - | noté |

Aucun mode photo/360°/3D/AR/vidéo de visualisation, aucun chat, aucun WhatsApp, aucun essayage à domicile, aucune option de partage ou de comparaison.

## Options disponibles

- **Métaux cités** : or jaune, rose, blanc (18 carats sur les pièces lues) et platine (page Engagement rings, lue).
- **Pierres** : diamants (certificat GIA ou IGI dès 0,50 ct, lu sur /diamonds/), pierres de couleur, pierres du client, sourcing sur demande. Les « 4 C » sont expliqués.
- **Services** : design sur mesure avec CAO 3D si utile, réparation et transformation, consultation sur place, mokume gane (alliages de couleurs fusionnés).
- **Collection** : galerie de 393 pièces uniques déjà réalisées ; bagues de mariage conçues avec le client, « no set range ».
- Pas d'option de commande en ligne (taille, gravure, carat…) : tout se règle en consultation.

## Prix, délais, retours, garanties

- **Prix** : aucun prix affiché sur le site (0 occurrence de $ ou ₪ sur les pages lues). Le budget est demandé à la consultation (« if you have a budget in mind, say so »).
- **Délai** : « We agree a date with you before the making starts » ; pas de durée chiffrée (vérifié, /custom-design/).
- **Retours, garanties, livraison** : non trouvés sur les pages lues (inféré : traités en boutique). Seule mention : chaque pièce part avec « a written description of its stones and metals for your records and insurance » (vérifié).
- **Certificats** : GIA ou IGI pour tout diamant de 0,50 ct et plus (vérifié, /diamonds/) ; gemmologue GIA nommé (Daniel).
- **Synthétique** : aucune mention de « lab-grown » ou « synthetic » (0 occurrence sur la galerie ; /diamonds/ lue sans cette mention).
- Pas de paiement en ligne, pas de panier, pas de financement affiché.

## Confiance et service

- Atelier physique : Suite 2, lower ground floor, City Executive Suites, 88-96 Bunda Street, Canberra City ; heures : mardi-vendredi 10h-15h, samedi 10h-14h, autres heures sur rendez-vous (vérifié).
- Équipe nommée : Eytan, Nurit, Daniel (page custom-design).
- Mentions presse : « As featured in Femina, Capital Magazine, Panorama » (vérifié, pied de page).
- Pas d'avis clients ni de note vus sur les pages lues.
- Preuves de fabrication : galerie de 393 pièces réelles (chacune numérotée « No. ») ; la page promet un modèle 3D CAO avant fabrication. Pas de vidéo ni de photo de fabrication ni de suivi de commande vus.
- Langue : anglais seulement ; pas de devise (pas de prix).

## Points forts à retenir pour JR Diamond

1. **Galerie de pièces réelles numérotées** (393, filtrables, `No. 27`, `?f=engagement`) : prouve ce que l'atelier a vraiment fait ; preuve : filtres testés. Proche de la promesse « ce que vous voyez existe ».
2. **Parcours en 5 étapes lisible** (conversation, pierre, design avec CAO 3D, fabrication à date convenue, remise) : le client sait à quoi s'attendre ; preuve : /custom-design/.
3. **Date fixée avant la fabrication** (« agree a date … before the making starts ») : répond à la crainte du délai qui glisse relevée dans les forums.
4. **Descriptif écrit livré avec la pièce** (pierres et métaux, pour l'assurance) ; preuve : FAQ « What comes with the finished piece ».
5. **Certificat indépendant GIA ou IGI dès 0,50 ct** affiché sur /diamonds/ : même seuil que JR Diamond.
6. Chargement très rapide (voir mesures) : site statique, sans script lourd.

## Défauts observés

- **Aucun prix, aucun configurateur, aucune vente en ligne** : tout passe par un rendez-vous ; un client pressé ne peut ni comparer ni commander.
- Retours, garantie, délai chiffré et livraison introuvables.
- Aucun avis client, aucune note.
- Aucun avis sur le synthétique : un client qui cherche un diamant de synthèse n'a aucune indication (inféré : le site se positionne sur le naturel).
- Aucune visualisation 3D ni photo de fabrication.
- Formulaire avec champ piège visible dans le texte (« LEAVE THIS EMPTY ») : peu lisible pour un lecteur d'écran (inféré).

## Limites de l'audit

- Formulaire de contact et réservation non remplis ; la page de réservation s'ouvre sur l'ancre `#book` du formulaire (aucun outil de calendrier vu, supposé).
- Pages /stones/, /remodelling/, /gifts/, /for-you/, /our-story/, /mokume-gane/, /privacy/ listées mais non lues ; une garantie ou une politique de retour pourrait y figurer.
- Pas de panier ni de paiement à vérifier (inexistants).
- Mesures de temps (premier visuel de /engagement-rings/) : ordinateur 0,49 s, iPhone 0,64 s ; chargement complet de la page 0,3 à 0,9 s sur les pages lues. Une mesure par appareil, réseau du proxy.
- Lecture sans cliquer sur chaque pièce de la galerie (393) : seul un détail de pièce a été ouvert.

## Sources

- https://www.aharoni-jewellery.com/robots.txt
- https://www.aharoni-jewellery.com/engagement-rings/
- https://www.aharoni-jewellery.com/custom-design/
- https://www.aharoni-jewellery.com/gallery/ (et `?f=engagement`)
- https://www.aharoni-jewellery.com/visit/
- https://www.aharoni-jewellery.com/diamonds/
