# Audit : Chris Williams Retail & Manufacturing Jewellers (Wanguri, Darwin, Territoire du Nord)

- **Site** : Chris Williams Retail & Manufacturing Jewellers, atelier-boutique de Darwin (22 Cubillo St, Wanguri).
- **Adresse** : https://www.chriswilliamsjewellers.com/ (page de départ : https://www.chriswilliamsjewellers.com/custom-design)
- **Date** : 15/11/2026 (date imposée par la consigne ; pages ouvertes le 25/11/2026 selon l'horloge de la session).
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright).
- **Statut** : **complet** pour ce qui existe. Le site est une vitrine de services : **aucune boutique en ligne, aucun configurateur, aucun prix, aucun panier** (l'absence de panier est un constat de navigation : aucun lien « cart » ni bouton d'achat dans le menu, les pages lues ni le pied de page ; `/cart` est autorisé par robots.txt mais n'a pas été ouvert, rien n'y mène).

Convention : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Pas d'achat en ligne [V]. Parcours réel : page de service → « Enquire Now » / « Book Now » / téléphone → devis par un bijoutier, hors ligne.

| Étape | Options |
|---|---|
| 1. Choix du service | Custom Designs, Repairs (menu « Jewellery Services ») [V] |
| 2. Catégorie | Wedding Rings, Engagement Rings, Eternity Bands, Earrings, Necklaces, Bracelets, Pearls, Lab Crafted Diamonds [V] |
| 3. Inspiration | Gallery (« Our Work », « View more », « View Gallery ») [V] |
| 4. Contact | « Enquire Now » (ancre `#CustomDesignsForm`), « Book Now » (`/contact`), 2 numéros de téléphone, formulaire de `/contact` [V] |
| 5. Devis | « clear quote before we begin crafting » : devis fourni par le bijoutier avant fabrication (annoncé, non vérifiable) [V texte] |

## Contrôles vérifiés

Page de départ `/custom-design` : 67 contrôles visibles sur ordinateur, 52 sur iPhone.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Note « 5.0 » (en-tête) | widget Elfsight | affiche une note, sans nombre d'avis ni lien visible | - | présent [V] ; source des avis non vérifiable |
| 22 Cubillo St, Wanguri NT 0810 | lien | ouvre Google Maps (`maps.app.goo.gl`) ; non suivi | - | présent [V], non suivi |
| Menu « Jewellery Services » : Custom Designs, Repairs | liens | pages `/custom-design`, `/jewellery-repair` (200) | - | fonctionne [V] |
| Menu « Handcrafted Jewellery » : 7 catégories | liens | `/wedding-rings`, `/engagement-rings`, `/eternity-bands`, `/earrings`, `/necklaces`, `/bracelets`, `/pearls` ; engagement-rings lue : texte de conseil, pas de catalogue | aucun | fonctionne, sans produits [V] |
| Lab Crafted Diamonds | lien | `/lab-grown-diamonds` (200), page d'information et FAQ | aucun | fonctionne [V] |
| Gallery, Who We Are, Contact Us | liens | `/gallery`, `/about`, `/contact` (200) | - | fonctionne [V] |
| Book Now | lien | mène à `/contact` | - | fonctionne [V] |
| 08 8945 9057 (en-tête et pied) | `tel:` | lien d'appel ; non utilisé | - | présent [V] |
| « call (08) 8945 1320 » (corps de page) | `tel:` | **second numéro** différent de l'en-tête | - | présent [V] |
| View Our Services | lien | `/services` (200) | - | fonctionne [V] |
| Enquire Now | lien | l'adresse devient `/custom-design#CustomDesignsForm`, mais **cet élément n'existe pas** dans la page et la page ne contient aucun champ de saisie : **ancre morte**, rien n'apparaît | - | cassé [V] |
| Our Work : 3 vignettes (images) | liens sans cible | « Two Silver Ring Components », « Emerald-cut Teal Gemstone Ring », « Jewelry-making Workspace With Gold Wire » : légendes génériques, aucune fiche | - | présent [V] |
| View more (galerie) | bouton | passe de 16 à 24 images dans la page ; l'adresse ne change pas | - | fonctionne [V] |
| View Gallery | lien | `/gallery` | - | fonctionne [V] |
| What Our Clients Say | widget | zone d'avis (embarqué Elfsight) : **aucun avis lisible** dans le texte rendu après 3 s | - | vide ou non chargé [V] |
| Find Out More | lien | `/contact` | - | fonctionne [V] |
| Facebook, Localsearch (profil), Google Maps (pied de page) | liens | externes ; non suivis | - | présents [V], non suivis |
| Lien Localsearch « search-engine-marketing » | lien | externe ; non suivi | - | non testé |
| Formulaire `/contact` : nom, e-mail, téléphone, message, envoi | champs | présents (`dmform-0` à `dmform-3`) ; **non remplis ni envoyés** (règle) | - | non testé |
| Panier, compte, filtres, configurateur, 3D, 360°, AR, zoom, essai, comparer, partager, enregistrer, WhatsApp, chat, financement | - | **absents** de la page et du menu [V] | - | n'existent pas |

## Options disponibles

- **Services** : conception sur mesure, remodelage de bijoux anciens, réparations (mise à taille, resertissage et vérification des griffes, polissage et remise à neuf) [V].
- **Pièces** : bagues de fiançailles, alliances, alliances d'éternité, boucles d'oreilles, colliers, bracelets, perles [V].
- **Pierres** : diamants naturels et « lab crafted / lab-grown » (même diamant au sens chimique, selon la FAQ du site) ; aucune grille de qualité ni de carat proposée en ligne [V].
- **Matériaux cités** : or, platine (sans précision de titre ni de couleur) [V].
- Pas de choix de métal, de forme, de taille de doigt ou de gravure en ligne [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix affiché sur les pages lues. La FAQ dit seulement que le coût « can vary widely » selon le métal, les pierres et la complexité ; devis fourni avant fabrication [V].
- **Délai** : « a few weeks » pour une pièce simple, plus long pour une pièce détaillée ou une pierre à sourcer ; pas de chiffre en jours [V].
- **Livraison, retours, panier** : sans objet, aucune vente en ligne ; aucune politique de retour lue [V].
- **Garantie** : « a comprehensive warranty on every piece we supply » (page About), sans durée ni conditions [V].
- **Moyens de paiement** : non annoncés [V].

## Confiance et service

- **Ancienneté** : en activité à Darwin depuis 2004 ; le propriétaire a débuté le métier en 1986 à Whyalla ; « plus de 35 ans d'expérience » (page About) [V].
- **Fabrication** : « We manufacture jewellery in-house » ; « contact direct avec un bijoutier expérimenté » [V]. Aucune photo ni vidéo de processus identifiée par une légende explicite ; seules des images génériques d'atelier (« Jewelry-making Workspace With Gold Wire ») [V].
- **Certificats** : aucun GIA/IGI ni autre laboratoire cité [V].
- **Libellé du synthétique** : « lab crafted » dans le menu et « lab-grown » dans les textes ; la FAQ affirme qu'ils sont « real diamonds » [V].
- **Avis** : note « 5.0 » sans volume ; zone d'avis vide [V]. Badge « Localsearch verified business / Certificate of trust » en pied de page [V].
- **Horaires** : lun-ven 9 h-17 h, week-end et jours fériés fermé [V]. ABN 46 652 124 055 [V].
- **Langues, devise** : anglais seulement ; pas de devise (aucun prix) [V].

## Points forts à retenir pour JR Diamond

1. **Positionnement « atelier en direct » assumé par le texte** : « manufacture in-house », « direct input from an experienced jeweller throughout » (page `/custom-design`) ; confirme que cet argument existe chez un concurrent local, mais sans preuve visuelle [V].
2. **Parcours de devis expliqué en étapes** (consultation, discussion du dessin, devis, choix de pierre, fabrication, finition, contrôle) dans la FAQ de `/custom-design` : bon modèle de transparence sur le processus [V].
3. **Remodelage de bijoux anciens** affiché comme offre à part entière (« remodel an old or sentimental piece ») : concurrence directe de la « transformation de bijoux de famille » [V].
4. **Une FAQ pédagogique par page** (réglages pour l'usage quotidien, tailles sans demander, budget, synthétique vs naturel) qui répond avant le contact ; utile pour les guides de JR Diamond [V].
5. **Conseil sur la taille à l'insu du partenaire** : emprunter une bague portée à la bonne main, et prévoir légèrement plus grand (FAQ engagement-rings) [V].
6. Visuel principal affiché en 0,5 à 0,6 s (mesure ci-dessous) [V].

## Défauts observés

1. **Aucun prix, aucun produit, aucun catalogue** : les pages de catégorie (alliances, fiançailles, éternité...) ne contiennent que du texte ; tout passe par téléphone ou formulaire [V].
2. **Bouton « Enquire Now » cassé** : l'ancre `#CustomDesignsForm` n'existe pas sur `/custom-design` ; le visiteur reste sans formulaire [V].
3. **Deux numéros de téléphone différents** (08 8945 9057 en en-tête, 08 8945 1320 dans le texte) sans explication [V].
4. **Preuve de fabrication faible** : 3 légendes génériques, pas de projets nommés, pas de photos avant/après ; la galerie passe à 24 images sans légende détaillée [V].
5. **Zone d'avis vide** malgré la note « 5.0 » (nombre inconnu) [V].
6. Aucune mention de certificat, de titre d'or, de délai précis, de politique de retour pour une pièce sur mesure [V].
7. Aucune version en autre langue ; aucun moyen de paiement ou d'acompte annoncé [V].

## Limites de l'audit

- Pas de panier, de configurateur ni de checkout à parcourir : étapes 2 à 4 de la méthode sans objet. L'absence de boutique est établie par la navigation, pas par une lecture de `/cart`.
- Formulaire de `/contact` non rempli ni envoyé ; téléphone, Facebook, Google Maps, Localsearch non suivis.
- Pages lues : custom-design, engagement-rings, lab-grown-diamonds, contact, gallery, services, about, jewellery-repair. Wedding-rings, eternity-bands, earrings, necklaces, bracelets, pearls : liens relevés, pages non lues (supposées de même gabarit [S]).
- Zone d'avis : widget embarqué lu après 3 s d'attente ; il peut se charger plus tard ou être bloqué en bac à sable [S].
- Mesure : un seul chargement par appareil, réseau du bac à sable ; non représentatif d'un visiteur australien. Les textes lus sont tronqués à 3 800 caractères par page (la fin des FAQ n'a pas été lue).

## Mesures du visuel principal

| Appareil | LCP (Chromium) | Élément | Événement load |
|---|---|---|---|
| Ordinateur | 0,64 s | image d'en-tête `shutterstock_1018483588-2880w.jpg` (photo de banque d'images) | 2,3 s |
| iPhone 13 (émulé) | 0,51 s | `_MG_0857-Ring-Making-640w.JPG` (photo de fabrication d'une bague) | 2,1 s |

Mesure faite sur un seul chargement, sans cache [V].

## Sources

- Page de départ : https://www.chriswilliamsjewellers.com/custom-design
- https://www.chriswilliamsjewellers.com/engagement-rings
- https://www.chriswilliamsjewellers.com/lab-grown-diamonds
- https://www.chriswilliamsjewellers.com/contact
- https://www.chriswilliamsjewellers.com/gallery
- https://www.chriswilliamsjewellers.com/services
- https://www.chriswilliamsjewellers.com/about
- https://www.chriswilliamsjewellers.com/jewellery-repair
- Contrôle robots.txt par `robots.cjs` : toutes les adresses ouvertes AUTORISÉES.
- Captures et données brutes : dossier de travail `scratchpad/audit/au/chris-williams/` (hors dépôt).
