# Audit : Barth Monte-Carlo

- **Site** : https://www.barthmontecarlo.com/ (Shopify)
- **Page de départ** : https://www.barthmontecarlo.com/collections/bagues-de-fiancailles ; fiche type : https://www.barthmontecarlo.com/products/bague-pure-0-30-ct-or-blanc
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366 × 900, fr-FR) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours jusqu'à la fiche produit et ses options ; panier non atteint (voir Limites).

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

## Parcours

Pas de configurateur : un catalogue de fiches, une fiche par combinaison de métal et de poids (V).

| Étape | Options | Page |
|---|---|---|
| 1. Catalogue | 62 bagues de fiançailles ; bouton « Filtres » ; pages de collection par métal (or blanc, jaune, rose) et « pavées de diamants » | `/collections/bagues-de-fiancailles` |
| 2. Fiche | Métal (3 liens : or blanc, or jaune, or rose, chacun renvoie vers une autre fiche) ; taille de doigt (liste de 44 à 70 + « Je ne connais pas ma taille ») ; « Ajouter au panier » ; « Prendre rendez-vous » | `/products/bague-pure-0-30-ct-or-blanc` |
| 3. Poids | Chaque poids est une fiche différente (Pure 0,30, 0,70, 1 ct, 2 carats ; The One 0,30 à 1,20 ; Étincelle 0,30 à 1,20 ; Bouquet 0,50 et 0,70 ; Pont des Amours 0,70 et 1,20) | fiches séparées |
| 4. Panier | Non atteint | `/cart` |
| Sur mesure | Page de présentation + « Contactez-nous » (aucun formulaire de dessin en ligne) | `/pages/creations-sur-mesure` |

## Contrôles vérifiés

Relevé avec `controls.cjs` : 577 contrôles sur la page de collection (dont ≈ 480 doublons de liens et de points de pagination), 62 sur la fiche (ordinateur), 51 (iPhone). Les listes ci-dessous regroupent les contrôles distincts.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Or blanc / Or jaune / Or rose, diamants | 3 liens | Ouvre la fiche du même modèle dans l'autre métal (`…-or-jaune`, `…-or-rose`), chargée sans erreur | 2 380 € dans les trois cas pour la Pure 0,30 ct | Fonctionne (V) |
| Taille (liste) | select | 29 entrées : titre, « Je ne connais pas ma taille », 44 à 70 ; la valeur 52 se sélectionne | Aucun changement (2 380 €) | Fonctionne (V) |
| Image principale (clic) | image | Ouvre une visionneuse plein écran avec flèche suivante et croix de fermeture | — | Fonctionne (V) |
| Flèches Back / Next (galerie) | boutons | Existent dans le DOM mais ne répondent pas au clic direct (3 essais, délai dépassé) ; l'image agrandie a sa propre flèche | — | Non fonctionnel en clic direct (V) |
| Ajouter au panier | bouton | **Non actionné** : la boutique appelle `/cart/add.js`, interdit par le robots.txt | — | Non testé (raison : robots.txt) |
| Prendre rendez-vous | lien (`ycbm_link`) | Ouvre un service externe de réservation ; clic direct sans effet visible en 3 s ; destination non ouverte | — | Non testé (service tiers, formulaire de réservation) |
| Filtres | lien | Ouvre un panneau : Collections, Gemmes (diamant), Matière (or blanc, or jaune, or rose), Prix, Type de produit ; boutons « Effacer les filtres » et « Appliquer les filtres » | — | Panneau lu (V) ; application non testée par prudence : les filtres combinés sont interdits par robots.txt |
| Tri | liste | Absent de la page ; le tri `sort_by` est interdit par robots.txt | — | Non testé |
| Pagination de la galerie (Page 1 à 3) | boutons | Points de navigation de la galerie d'images (3 photos par fiche) | — | Non testé (équivalent des flèches) |
| Découvrir cette création (×62) | liens | Ouvre la fiche produit | — | Fonctionne (V sur la fiche Pure 0,30) |
| Navigation : Contactez-nous, Compte, Panier, Fiançailles et mariage, Créations sur mesure, La maison | liens | Pages de contact, compte, panier, menus ; `/pages/contactez-nous` et `/pages/creations-sur-mesure` répondent 200 | — | Compte et panier non ouverts (robots.txt interdit `/account`) |
| Pied de page : Bagues de fiançailles, Solitaires d'exception, Alliances pour femme / homme, Oursin, Écailles, Ocean Beauty, Unity Diamonds, Livraisons et retours, Nos guides, Nos conseils, CGV et mentions légales | liens | Collections et pages ; livraison et CGV lues | — | Lus (V) |
| Newsletter (e-mail + S'inscrire) | champ + bouton | Non rempli (règle : aucun formulaire) | — | Non testé |
| Bandeau cookies | 3 boutons (« Tout accepter », « Cookies nécessaires uniquement », « Gérer les préférences ») | Visible sur ordinateur et iPhone | — | Vu (V) |
| Partage, enregistrement, comparaison, financement, chat, WhatsApp, téléphone | — | Aucun de ces contrôles dans la page ; seuls le numéro et le courriel sont dans le pied de page | — | Absents (V) |

## Options disponibles

- **Métal** : or 18 carats blanc, jaune, rose (V). Platine : non proposé (V, absent des fiches vues).
- **Pierre** : diamant naturel central « taille brillant » (rond), certifié GIA ou HRD, qualité F-VS pour la Pure 0,30 ct ; une deuxième pierre « antagoniste » de 0,07 ct environ (V). Formes vues sur les titres : rond, ovale, émeraude, coussin (V). Aucune option synthétique (V).
- **Poids** : 0,30 / 0,40 / 0,50 / 0,70 / 1 / 1,20 / 2 / 4 ct selon le modèle, chaque poids étant une fiche (V).
- **Montures** : Pure, The One (avec ou sans pavé), Étincelle (ronde, ovale, émeraude, coussin), Eternity, Bouquet, Pont des Amours (V).
- **Taille de doigt** : 44 à 70 (V).
- **Gravure, taille des griffes, corps de bague** : non proposés en ligne (les CGV mentionnent des articles « gravés » ; l'option n'est pas sur la fiche vue) (V/I).
- **Vues** : 3 photos par fiche, visionneuse plein écran ; ni vidéo, ni 360°, ni 3D, ni essayage en réalité augmentée (0 vidéo, 0 canvas, 0 `model-viewer` sur la fiche) (V).
- **Autres collections** : 9 alliances pour femme (1 430 € à 3 650 € dans la liste lue), alliances pour homme, 3 « solitaires d'exception » (185 000 €, 167 000 €, un « prix sur demande ») (V).

## Prix, délais, retours, garanties

- **Prix** : affichés TTC en euros, un seul prix par fiche, sans décomposition (matière, façon, marge) (V). Sur les 50 premières bagues de la liste : de 2 380 € à 17 850 € ; deux fiches haut de gamme à 167 000 € et 185 000 € (V). Le prix ne change pas avec le métal (V sur la Pure 0,30 ct).
- **Délai** : fabrication « à la commande » en 3 à 4 semaines (page Livraison et CGV) ; la fiche affiche une date « Livré au plus tard le mardi 22 décembre » (V). La date est calculée par la boutique ; sa règle n'est pas expliquée (I).
- **Livraison** : offerte, sécurisée, assurée, remise en main propre contre signature, en France, à Monaco et en Europe ; retrait possible au salon de Monaco (V). Écrin italien fait main, message personnalisé possible (V).
- **Retours** : échange ou retour gratuit, remboursement intégral, dans un délai de 14 jours ; contact préalable obligatoire (V). **Exclus** : pièces gravées, gaufrées ou modifiées, mises à taille, créations spéciales, articles portés (V). Remboursement sous 30 jours pour un client de Monaco, 14 jours pour la France (CGV, V).
- **Garanties** : garantie légale de conformité et des vices cachés (code civil monégasque, articles 1444 et suivants) (V) ; pas de garantie commerciale chiffrée trouvée (I).
- **Paiement** (CGV) : carte bancaire (Visa, MasterCard, Carte Bleue) ou virement sous 7 jours (V). Paiement en plusieurs fois : non trouvé.
- **Certificats** : diamant « certifié GIA ou HRD » ; pas de numéro de certificat sur la fiche vue (V).

## Confiance et service

- Contact par téléphone (+377 99 90 64 17) et courriel ; rendez-vous au salon sur réservation en ligne ; consultation virtuelle proposée (V). Aucun chat, aucun WhatsApp sur le site (V).
- Mise en avant de la fabrication « artisanale » à Valenza (Italie) et en France, dans un rayon de 300 km autour de Monaco (V). Aucune photo ni vidéo de fabrication, aucun suivi de commande (V).
- Sur mesure : croquis du designer, sélection de gemmes, **modélisation 3D envoyée au client**, maquette en cire possible, fabrication à Valenza (V). Transformation de bijoux de famille proposée « dans la plus grande discrétion » (V).
- Avis clients : aucun affiché sur les pages lues (V). Langue : français ; devise : euro (V).

## Points forts à retenir pour JR Diamond

1. **Date de livraison sur chaque fiche** (« Livré au plus tard le … ») : l'engagement de délai est visible avant l'achat. Preuve : fiche `…-or-blanc`, texte relevé. JR Diamond annonce 14 jours ouvrés ; même dispositif possible.
2. **Livraison, retour et échange gratuits en Europe**, remboursement intégral à 14 jours : base de comparaison pour la France. Preuve : `/pages/livraison-et-retour`.
3. **Exception du sur mesure énoncée clairement** (gravé, personnalisé, mis à taille) à deux endroits (page livraison et CGV) : modèle de transparence à reprendre. Preuve : CGV, article 5.
4. **Modélisation 3D envoyée au client avant fabrication** sur le sur mesure : c'est la promesse de JR Diamond, déjà dite ici mais sans image ni exemple. Preuve : `/pages/creations-sur-mesure`.
5. **Prix à l'unité par métal et par poids, lisibles en catalogue** (62 bagues), plus clair que « sur demande ». Preuve : `/collections/bagues-de-fiancailles`.

## Défauts observés

- Aucun choix en ligne autre que le métal (3 liens) et la taille ; pas de choix de pierre, de forme ni de carat à l'intérieur d'une fiche (V).
- Pas de 3D, de 360° ni de vidéo : 3 photos fixes par bague, dont certaines paraissent des rendus ; rien ne prouve que « ce qu'on voit existe » (V, I).
- Le prix ne se décompose pas ; le diamant n'a ni numéro de certificat ni qualité détaillée (hors F-VS) sur la fiche vue (V).
- Le bouton de rendez-vous ne réagit pas au clic direct en 3 s ; flèches de galerie inertes en clic direct (V).
- Texte de la page de livraison : phrase cassée « Le délai de fabrication est de livraison sera alors de 3 à 4 semaines » (V).
- Libellé d'un titre de fiche incohérent : « Étincelle Ovale 0,30 ct » pour l'adresse `…0-40-ct` (V).
- Contrôle de robots : la boutique appelle elle-même `/cart.js` (interdit) à chaque chargement (V).

## Limites de l'audit

- **Panier non atteint** : « Ajouter au panier » appelle `/cart/add.js`, interdit par le robots.txt ; frais de livraison, délai de panier et moyens de paiement du panier ne sont donc connus que par la page Livraison et les CGV (I).
- Application des filtres et des tris non testée (robots.txt).
- Rendez-vous, compte et newsletter non ouverts ou non remplis (règles de lecture seule).
- Mesures de temps : image principale visible en **1,11 s** sur ordinateur et **0,86 s** en affichage iPhone (une mesure chacune, connexion de la machine d'audit, V).
- Une seule fiche (Pure 0,30 ct) a été testée à fond ; les autres modèles ont été relevés sur la liste.
- Alliances pour homme : page répond 200, contenu non lu.

## Sources

- https://www.barthmontecarlo.com/ · https://www.barthmontecarlo.com/robots.txt (lu le 15/11/2026)
- https://www.barthmontecarlo.com/collections/bagues-de-fiancailles
- https://www.barthmontecarlo.com/products/bague-pure-0-30-ct-or-blanc (et `-or-jaune`, `-or-rose`)
- https://www.barthmontecarlo.com/collections/alliances-pour-femme · https://www.barthmontecarlo.com/collections/solitaires-dexception
- https://www.barthmontecarlo.com/pages/livraison-et-retour · https://www.barthmontecarlo.com/pages/creations-sur-mesure · https://www.barthmontecarlo.com/pages/cgv-et-mentions-legales
