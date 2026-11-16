# Synthèse de l'étude de concurrence JR Diamond

Date : 16/11/2026. Tirée des deux comparaisons vérifiées du même jour ; seul ce qui a survécu à leur section « Vérification » est repris. Aucune page web rouverte, aucun code modifié.

**Marques.** (V) vérifié dans un audit ou dans le code · (Vc) contenu lu sans visite, site bloqué : plus faible que (V) · (Ex) lu en exploration, aucun bouton actionné · (I) inféré · (S) supposé. « n/12 (a V, b Vc) » : décompte des synthèses américaines. Toute action, priorité ou effort est un jugement (I).
**Renvois.** `P4` = ligne 4 du tableau de la [comparaison produit](2026-11-16_comparaison_produit.md) ; `O7` = ligne 7 du tableau de la [comparaison offre](2026-11-16_comparaison_offre.md) ; `P§3`, `O§4` = leurs sections. Les preuves de code (`fichier:ligne`) et les fils de forum y sont cités ; ils ne sont pas recopiés ici.

## 1. L'essentiel

- **L'écart principal est le prix** : il est affiché chez 12/12 vendeurs américains (7 V, 5 Vc) et en ₪ TTC chez 4 sites israéliens sur 6 (V) ; le prototype dit « Sur devis » (V, code). Le moteur de calcul est prêt et attend l'atelier, l'affichage reste à écrire (V) · `O1`, `P1`.
- **Nos conditions de vente ne sont pas écrites et le vendeur n'est pas identifiable** (V, code) : retour, annulation, livraison et paiement « À confirmer », garantie absente, ni société ni téléphone ; 5 sites israéliens sur 6 publient leurs conditions de retour (V) · `O§1`.
- **Presque personne ne montre la bague commandée** (I) : une seule 3D temps réel chez les 12 vendeurs américains (bêta, monture d'exemple, V), une en Israël (modèle générique, V) ; photos d'atelier par commande : 0/12 (6 V, 1 Vc, 5 I) et 0/6 dans le parcours d'achat (V) · `P§1`.
- **Notre avance est écrite, pas encore exécutée ni montrée** : 3D issue du fichier de fabrication (V), prix décomposé, pierre filmée et suivi photo promis (V) ; aucun des 24 sites audités ne les réunit (I) · `O§1`, `P§1`.
- **Rattrapage** : 23 actions P1 dans le tableau ci-dessous, dont 18 d'effort faible (V, décompte de ce tableau) ; une seule ne dépend de personne, le lien de configuration ; les autres attendent l'atelier, le propriétaire ou l'avocat (I).
- **Écarts avec les attentes des acheteurs, à connaître sans rouvrir les décisions** : « Sur devis » lu comme une invitation au marchandage en Israël (I) ; paiement intégral suivi de silence (I, sur constats V) ; 14 jours sans express ; anneau d'environ 1,6 mm (I, calcul) ; hébreu non relu · `P§4`, `O7`.

## 2. Avantages de la concurrence à retenir

Classement : priorité (P1 avant le lancement en Israël, P2 dans les 90 jours, P3 plus tard), puis effort (S faible, M moyen, L fort), puis dépendance la plus légère. Marchés : US, IL, EU, AU. « État chez nous » est (V) par lecture du code ; « Action » est (I).

| Rang | Avantage | Qui | Marchés | État chez nous | Action | Effort | Dépend de |
|---|---|---|---|---|---|---|---|
| 1 (P1) | Lien qui restaure la configuration, sans compte | Angara, Rare Carat, Frank Darling, DAZZ, Courbet (V) ; Sabghi (V, réserve robots.txt) ; Michael Hill (Ex) · `P4` | US, IL, EU, AU | **fait le 16/11** : configuration dans l'adresse, bouton « Partager cette configuration », lien complet dans l'e-mail du devis et dans WhatsApp (avant : l'état n'existait qu'en mémoire) | composition, métal et origine dans l'adresse ; bouton « partager » ; le lien part avec le devis | S | aucun |
| 2 (P1) | WhatsApp qui porte la demande ; coordonnées visibles | DAZZ seul porte tout (V) ; WhatsApp chez 5/6 sites israéliens (V) ; Blue Nile, Bonnot, Beldiamond : lien de contact (V, non ouvert) · `P5`, `O16` | US, IL, EU | prêt en attente : message construit, bouton masqué sans numéro ; pied de page sans téléphone ni e-mail | saisir le numéro dans Vercel ; numéro de demande ; coordonnées au pied de page ; lien de configuration ensuite | S | propriétaire |
| 3 (P1) | Premier visuel rapide, bouton d'achat fixe sur mobile | Keyzar, DAZZ, Alpha Gold, Bonnot : photos sans 3D (V, iPhone émulé) · `P12` | US, IL, EU | non mesuré sur appareil réel ; bouton de devis en fin de récapitulatif | mesurer avec `/fr/diagnostic` ; ensuite (P2) capture avant la 3D et bouton fixe | S | propriétaire (tests) |
| 4 (P1) | Ce que l'image montre est écrit sous l'image | Blue Nile, VRAI, Angara, Alpha Gold, Slaets (V) ; Sabghi (V, réserve) · `P7` | US, IL, EU | partiel : source et écart dans un bloc replié et la FAQ ; retouche des griffes non dite | une ligne sous la 3D : fichier de fabrication, écart mesuré, retouche des griffes, effet de la finition main ; accorder la FAQ, qui dit « n'est pas redessiné pour le web » | S | atelier (formulation) |
| 5 (P1) | Cotes et fiche technique tirées de la fabrication | VRAI, Frank Darling, L'Alliancier, Slaets (V) · `P6` | US, EU | partiel : pierres, diamètre intérieur, poids ± 5 % ; largeur, épaisseur et hauteur de tête absentes alors que le fichier les contient | les afficher, avec tolérance et vues cotées. À signaler : anneau d'environ 1,6 mm (I, calcul) contre 1,8 mm cité comme plancher dans deux rapports de forum (V) | S | atelier (tolérances, avis sur 1,6 mm) |
| 6 (P1) | Taille de doigt dans le parcours, « je ne sais pas » accepté, mise à taille offerte rappelée | taille : 11/12 (6 V, 4 Vc, 1 non repris) ; première mise à taille gratuite : 12/12 (7 V, 5 Vc) ; Shiree Odiz, Alpha Gold, DAZZ, Beldiamond, Slaets, L'Alliancier (V) · `P3`, `O12` | US, IL, EU | partiel : champ libre dans le devis, tableau dans les guides, rappel dans la FAQ seulement | liste de tailles françaises, israéliennes et américaines avec « je ne sais pas » ; rappel sous la liste | S | atelier (plage, délai) |
| 7 (P1) | Date de livraison calculée | 12/12 (7 V, 5 Vc) ; Beldiamond (V) ; Alpha Gold au paiement (texte lu, paiement non ouvert) ; Gemmyo, Cullen (Ex) · `P2`, `O5` | US, IL, EU, AU | partiel : texte fixe « 14 jours ouvrés », ni date ni champ « date souhaitée » | « prête au plus tard le … » (jours ouvrés, fêtes d'Israël) ; champ « pour quelle date ? » ; retard annoncé le jour même | S | atelier (calendrier) |
| 8 (P1) | Photos réelles montrées avec les rendus | Rare Carat, Bonnot, Beldiamond (V) ; aucun ne pose la photo de la bague commandée à côté de son rendu (I) · `P8` | US, EU | absent ; teintes « à calibrer » | photo studio et photo portée de ring-001 à côté de la 3D, légendées ; calibrer les teintes dessus | S | atelier (photos) |
| 9 (P1) | Pierre vendue montrée, reliée à son certificat | Blue Nile, VRAI, Clean Origin, Rare Carat, Shiree Odiz, Bonnot (V) ; Frank Darling (V, lien pierre-vidéo I) ; Natalie Marie (Ex) · `P9`, `O13` | US, IL, EU, AU | partiel : promis dans la FAQ et les guides, sans emplacement ; pierre pilote sans certificat | vidéo, photo et numéro de certificat joints à la réponse au devis ; inscription filmée avant et après sertissage ; bloc « votre pierre » ensuite (P2, M) | S | atelier |
| 10 (P1) | Suivi de fabrication par étapes | Ritani, 7 étapes (Vc) ; Rare Carat (V) ; Alpha Gold, SMS (V, lu dans sa FAQ) ; Persta, Green Lake, Natalie Marie (Ex) · `P10`, `O18` | US, IL, EU, AU | promis, sans outil ni statut daté | calendrier écrit des étapes, message daté, vidéo finale validée avant l'envoi (P1 selon `P10`, P2 selon `O18`) ; page privée par commande ensuite (P2, L) | S | atelier |
| 11 (P1) | Prix garanti pendant une durée, cours daté | Alpha Gold, Slaets (V) ; Edenly (Ex) · `O4` | IL, EU | absent | date du cours et « prix garanti N jours » sur chaque devis | S | atelier |
| 12 (P1) | Livraison assurée et chiffrée, retrait possible | gratuite chez 11/12 (6 V, 5 Vc) ; Alpha Gold, Lavi, DAZZ, Shiree Odiz, Beldiamond (V) · `O8` | US, IL, EU | absent : réponse provisoire | coût, signature, retrait à la Bourse sur rendez-vous | S | atelier (question 44) |
| 13 (P1) | Garantie écrite, contenu listé | « à vie » annoncée chez 12/12 (7 V, 5 Vc) ; DAZZ, Alpha Gold, Lavi, Beldiamond (V) · `O11` | US, IL, EU | absent : aucun mot « garantie » dans `src/` | durée, couverture (sertissage, pierre tombée, défaut de fonte), exclusions écrites | S | atelier, avocat |
| 14 (P1) | Aucun débit avant validation, ou acompte puis solde | Rare Carat, DAZZ, L'Alliancier, Bonnot, Beldiamond (V) ; Ritani (Vc) ; Temple & Grace, Natalie Marie (Ex) · `O7` | US, IL, EU, AU | absent, par décision (paiement intégral) : écart signalé, non rediscuté | demander le paiement après l'accord écrit sur la pierre filmée et le modèle ; garantie écrite de conformité au modèle validé | S | propriétaire, atelier |
| 15 (P1) | Prix décomposé : monture et pierre | deux lignes vues chez 5 vendeurs américains (V) ; Shiree Odiz, B-Gem (V) · `O2` | US, IL | partiel : calcul prêt, affichage absent | afficher métal (grammes × ₪/g), pierre, façon et sertissage | S, après le rang 19 | propriétaire (bénéfice en ligne à part ou non) |
| 16 (P1) | Retour et annulation écrits, exception dite au moment du choix | bague du constructeur reprise chez 7/12 (5 V, 2 Vc) ; Alpha Gold, DAZZ, Slaets, Beldiamond (V) ; Temple & Grace, Michael Hill (Ex) · `O10` | US, IL, EU, AU | absent : réponse d'attente | publier avant tout paiement ; étudier l'annulation sans frais avant le début de la fabrication | S, après l'avis | avocat, propriétaire |
| 17 (P1) | Accessibilité déclarée | L'Émeraude (V) · `P20` | IL | partiel : repli sans WebGL, groupes nommés ; pas de déclaration | déclaration en hébreu ; P1 si l'avocat confirme l'obligation (S), sinon P2 | S | avocat |
| 18 (P1) | Pages ouvertes aux moteurs de recherche | Lavi, Beldiamond (V) ; référencement non mesuré · `P19` | IL, EU | prêt en attente (`noindex`, décision du propriétaire) ; ni page d'accueil ni plan du site | le jour du lancement : lever `noindex`, page d'accueil, plan du site, redirections permanentes | S | propriétaire |
| 19 (P1) | Prix visible en monnaie locale TTC, qui suit chaque choix | 12/12 (7 V, 5 Vc) ; 4/6 en ₪ TTC ; Courbet, L'Alliancier, Beldiamond (V) ; Michael Hill (Ex) · `P1`, `O1` | US, IL, EU, AU | partiel : moteur prêt en attente, affichage absent, « Sur devis » | « à partir de » en ₪ avec « TVA incluse », puis prix par configuration | M | atelier |
| 20 (P1) | Hébreu natif complet | 5 sites israéliens sur 6 (V) · `P11` | IL | partiel : droite-à-gauche testé, traduction non relue, aucun guide | relecture native ; trois guides (synthétique, kiddouchin, taille) | M | propriétaire (relecteur) |
| 21 (P1) | Vendeur identifiable, atelier montré | L'Émeraude, Lavi, Alpha Gold, Slaets, L'Alliancier (V) ; Sabghi (V, réserve) · `O14` | US (Sabghi seul), IL, EU | partiel : « Bourse du diamant, Ramat Gan » ; ni société, ni adresse, ni téléphone, ni e-mail | page « L'atelier » : artisan nommé avec son accord, société, coordonnées, photos et vidéo réelles | M | atelier, avocat (question 7) |
| 22 (P1) | Alliance de kiddouchin : règle expliquée, prix public | Stav, Ziv-Or ; repère de 850 à 1 690 ₪ (Ex) ; aucun site audité ne la traite (V) · `O20` | IL | partiel : guide français et anglais, FAQ ; ni modèle, ni page, ni guide en hébreu ; l'« Alliance » pilote est sertie | prix au gramme, facture au nom du marié, renvoi au rabbin, note « sertie : pas pour la houppa », version en hébreu ; page dès le modèle | M | atelier (modèle), propriétaire |
| 23 (P1) | Paiement en plusieurs fois près du prix | mensualité chez 12/12 (7 V, 5 Vc) ; Shiree Odiz, Alpha Gold, Lavi, Beldiamond (V) ; Cullen, Michael Hill (Ex) · `O6` | US, IL, EU, AU | absent | devis → prix confirmé → lien de paiement, carte en 1 à 12 fois ; jamais de virement imposé | L | propriétaire (prestataire), atelier |
| 24 (P2) | Protéger la surprise (« Masquer le prix ») | Courbet (V) ; Bonnot (V, non actionné) ; Cullen (Ex) · `P17` | EU, AU | absent | case « c'est une surprise » et contact unique dans le devis | S | aucun |
| 25 (P2) | Avis publics affichés | Rare Carat, Frank Darling, Shiree Odiz, Lavi, Bonnot, L'Alliancier (V) · `O15` | US, IL, EU | absent | fiche Google ; avis demandés dès la première vente, jamais filtrés | S | propriétaire, atelier |
| 26 (P2) | Écart de prix écrit sur l'option | Clean Origin, Keyzar, DAZZ, Alpha Gold, Beldiamond (V) · `O3` | US, IL, EU | absent : la note dit que le prix change, sans montant | supplément du 18 k et du platine, écart naturel / synthétique | S | atelier (platine, grille des pierres) |
| 27 (P2) | Rendez-vous atelier ou visio, pré-rempli avec la bague | visio chez 9/12 (5 V, 4 Vc) ; VRAI, DAZZ, Shiree Odiz, L'Émeraude, Beldiamond (V) ; Larsen (Ex) · `P14`, `O17` | US, IL, EU, AU | absent | bouton qui ouvre le devis pré-rempli ; essai sur place du modèle en résine | S | atelier (accès à la Bourse) |
| 28 (P2) | Bague à l'échelle sur une main | Blue Nile, Rare Carat, Frank Darling (V) ; Brilliant Earth (Vc) · `P16` | US, EU | absent | photo réelle de ring-001 portée ; curseur de carats seulement avec plusieurs calibres | S | atelier (photo) |
| 29 (P2) | Entretien et contrôle après la vente | Lavi, Beldiamond (V) ; Sabghi (V, réserve) · `O19` | US (Sabghi seul), IL, EU | partiel : entretien « À confirmer » | contrôle annuel des griffes ; prix du rhodiage et des réparations | S | atelier |
| 30 (P2) | Transformation : pesée, bilan matière, restitution | L'Émeraude (V) ; With Clarity (Vc) ; Lavoisier, Pimento, Vivalatina, Natalie Marie (Ex) · `P18`, `O21` | US (faible), IL, EU, AU | fait, en brouillon ; ni pesée, ni bilan matière, ni restitution | protocole écrit (photos, pesée, bilan, restitution du reste) ; champs facultatifs | S | atelier (questions 57 à 60) |
| 31 (P2) | Gravure dans le parcours, avec aperçu | 11/12 (6 V, 5 Vc) ; Shiree Odiz, L'Alliancier, Slaets, Beldiamond (V) · `P13` | US, IL, EU | absent du parcours : FAQ seulement | champ gravure dans le devis ; jamais par défaut sur l'alliance de kiddouchin | M | atelier (polices), avocat (annulation) |
| 32 (P2) | Forme et carat qui changent l'image | Angara, Courbet (V) · `P15` | US, EU | une forme, un calibre, et c'est écrit | ne rien générer ; ajouter une forme ou un carat seulement avec le fichier de l'atelier | L | atelier (fichiers) |
| 33 (P3) | Entrée par le budget | Lavi, Shiree Odiz (V) · `O22` | IL | absent | page de repères par budget, après la grille des pierres | S | atelier |
| 34 (P3) | Maquette avant fabrication ; aide au choix de la pierre | Frank Darling (V), With Clarity (Vc) · `P21` ; Clean Origin, Rare Carat, Frank Darling, Keyzar (V) · `P23` | US, EU, AU | absent ; sans objet tant qu'aucune pierre n'est en ligne | photo du modèle imprimé dans le suivi ; quelques pierres choisies par l'atelier plutôt qu'un stock | M | atelier |
| 35 (P3) | Essayage virtuel ; prix droits et taxes compris à l'export | Keyzar, Rare Carat, Clean Origin (V) · `P22` ; Angara (V), Grown Brilliance (Vc), Cullen (Ex) · `O9` | US, AU | absent | attendre : la photo portée répond d'abord ; pour la France, prix droits acquittés | L | propriétaire (transitaire), avocat |

## 3. Par marché

**États-Unis** (12 vendeurs nationaux : 7 visités, 5 bloqués)
- Norme du parcours : prix, date calculée et mensualité chez 12/12 (7 V, 5 Vc), taille de doigt et gravure chez 11/12 · `P2`, `P3`, `P13`, `O1`, `O6`.
- Ce qu'ils ne montrent pas : 3D temps réel absente chez 5 vendeurs (V), inconnue chez 6 ; aucune photo d'atelier par commande ; ni hébreu ni shekel (0/12) · `P§1`, `P§3`.
- À ne pas copier : promotion ou prix barré chez 10/12 (5 V, 5 Vc), garantie « à vie » annulée par un autre bijoutier chez 7/12 (3 V, 4 Vc), retour piégé chez 8/12 (5 V, 3 Vc) · `O§4`.
- Attente des acheteurs (V, forums) : délai tenu et preuves avant l'envoi ; des promesses de 2 à 4 semaines sont devenues 5 à 8 · `P2`, `P10`.

**Israël** (6 sites audités)
- Norme locale : prix en ₪ TTC (4/6), conditions de retour publiées (5/6), WhatsApp (5/6), hébreu (5/6), carte en 10 ou 12 fois (V) · `O1`, `O6`, `O16`, `P11`.
- Ce qu'ils ne montrent pas : une seule 3D, générique ; même image de 1 à 4 ct chez DAZZ ; français chez L'Émeraude seule ; aucun site audité ne traite l'alliance de kiddouchin (V) · `P§3`, `P§5`.
- Écarts à signaler : « Sur devis » lu comme marchandage (I) ; 14 jours ouvrés proches des délais audités (B-Gem 12, Lavi 14, Alpha Gold 7 à 14, V), mais 7 à 10 jours annoncés par des spécialistes du synthétique (Ex) · `P§4`.
- Droit : Alpha Gold accepte l'annulation même sur commande et donne 4 mois aux nouveaux immigrants, aux 65 ans et plus et aux personnes handicapées (V) : à poser à l'avocat · `O10`.

**Europe** (3 sites en France, 2 en Belgique, tous partiels)
- Le plus complet : Beldiamond, « Livré au plus tard le » par variante, paiement en 2 ou 3 fois, retour de 30 jours gravés compris, transporteur nommé (V) · `P2`, `O6`, `O8`, `O10`.
- Paiement par étapes : acompte de 50 % chez Bonnot et Beldiamond, commande ferme après un rappel chez L'Alliancier, prix garanti 5 jours ouvrables chez Slaets (V) · `O4`, `O7`.
- À ne pas copier : « cultivé » et « laboratoire » en français (Courbet, Beldiamond, V) ; coordonnées exigées avant de voir la bague, simulation par IA annoncée (Bonnot, V) · `P§4`, `O§4`.
- Pour la France, plus tard : la TVA à l'import inquiète (6 fils, V) ; Royaume-Uni, Allemagne et Pays-Bas ne sont lus qu'en exploration (Ex) · `O9`, `P§5`.

**Australie** (aucun audit : tout est lu en exploration, Ex)
- Cullen : date de fin sur chaque fiche, droits et taxes compris pour la plupart des pays, commande gardée 90 jours · `O5`, `O9`, `P17`.
- Acompte puis solde : 25 % à la commande chez Temple & Grace, 50 à 75 % chez Natalie Marie, avec photo avant le solde · `O7`, `P10`.
- Michael Hill : prix public, sauvegarde et partage au constructeur d'alliances, retour de 30 jours · `O1`, `P4`, `O10`.
- À ne pas copier : images générées par IA en page d'accueil (Larsen, Ex) ; parcours ouvert sur 2 ct (Cullen, d'après un fil, V) · `P§4`.

## 4. Nos avantages à défendre

Chaque point est (V) dans le code ; « mieux » est (I). La réserve dit ce qui manque pour que l'avantage se voie.
- **La 3D est la pièce** : fichier `Ring.3dm`, écart de simplification de 0,0206 mm. Réserve : retouche des griffes non dite, FAQ à accorder · `P§3` point 1.
- **L'image suit le choix, ou dit qu'elle ne le suit pas** ; en face, platine montré en or blanc chez 4 sites (V). Réserve : teintes non calibrées · `P§3` point 2.
- **Prix décomposé jusqu'au métal, à la façon et au bénéfice** ; en face, au mieux « monture + pierre ». Réserve : non branché · `O§3`.
- **Photos et vidéos de la commande, publication sur accord** : 0/12 et 0/6 en face. Réserve : promesse non exécutée, aucune commande · `O§3`.
- **Ni promotion, ni prix barré, ni fenêtre d'inscription, ni compte** : à tenir après le lancement · `P§3` point 4, `O§3`.
- **Trois langues, dont l'hébreu de droite à gauche** : 0/12 aux États-Unis ; français chez un seul site israélien (V). Réserve : hébreu non relu · `P§3` point 3.
- **Libellé « synthétique » conforme, franchise sur la revente, contenus sourcés, réponses provisoires marquées** ; en face, règles contradictoires d'une page à l'autre · `O§3`, `P§3` point 8.
- **Poids de métal par configuration (± 5 %)** et **3D qui se dégrade proprement** (modèle de 194 096 octets). Réserve : aucune mesure sur appareil réel · `P§3` points 5 et 6.
- **Bijou de famille et alliance de kiddouchin traités** : aucune mention aux États-Unis, un seul site en Israël (V). Réserve : rangs 22 et 30 · `P§3` point 7.

## 5. À ne pas copier

- **Image qui ne suit pas l'option** (« Shown with N ct »), **3D générique ou paramétrique, bague rendue par IA** : contraire à « ce que vous voyez existe » · `P§4`, `O§4`.
- **Mur de coordonnées, fenêtre d'inscription, prix caché ou hors taxes** (Bonnot, Shiree Odiz, L'Émeraude, B-Gem, V) · `P§4`, `O§4`.
- **Prix barrés, remise permanente, compteurs d'urgence** : contraire au « prix expliqué » · `O§4`.
- **Garantie « à vie » vidée par ses exclusions ; retour compté avant la réception ; avoir au lieu du remboursement** · `O§4`.
- **« Cultivé », « de laboratoire » en français ; arguments écologiques non prouvés** : garder « synthétique » · `P§4`, `O§4`.
- **Certificat maison ou à demander ; avis filtrés ; virement remisé ou exigé ; essai « gratuit » avec dépôt ; sous-déclaration en douane** · `O§4`.
- **Parcours qui s'ouvre sur une grosse pierre ; outil d'ingénieur ; règle dite différemment d'une page à l'autre** · `P§4`.
- **Précaution (I), vue chez aucun site** : ni gravure, ni pierre, ni deux couleurs par défaut sur l'alliance de kiddouchin · `P§4`.

## 6. Décisions attendues

**Du propriétaire**
- Saisir le numéro WhatsApp et les variables d'e-mail dans Vercel ; trouver un relecteur natif pour l'hébreu ; faire les tests sur appareils réels (rangs 2, 3, 20).
- À quel moment demander le paiement intégral : à la commande, ou après l'accord écrit sur la pierre filmée et le modèle (rang 14) ? Le bénéfice est-il une ligne à part du prix décomposé (rang 15) ?
- Ouvrir un compte chez un prestataire de paiement (rang 23) ; créer la fiche Google de l'atelier (rang 25).
- Trancher le rapport Sabghi (lecture de son robots.txt) et les écarts de la section 7.

**De l'atelier** (en plus des points déjà en attente : règle de bénéfice, taux de change, platine, grille des pierres)
- Calendrier (jours travaillés, ce que couvrent les 14 jours), plage de tailles, délai de la mise à taille (rangs 6, 7).
- Tolérances, avis sur un anneau d'environ 1,6 mm, formulation de la ligne sous la 3D, photos studio et portée de ring-001 (rangs 4, 5, 8).
- Durée de validité d'un prix, livraison (question 44), garantie (question 46), numéro de certificat et inscription filmée (rangs 9, 11, 12, 13).
- Accord pour être nommé et montré, société et coordonnées à publier ; modèle de l'alliance de kiddouchin ; questions 57 à 60 (rangs 21, 22, 30).

**De l'avocat**
- Annulation : exception du sur-mesure, délai étendu (nouveaux immigrants), effet de la gravure ; texte de la garantie (rangs 13, 16, 31).
- Déclaration d'accessibilité : obligation supposée (S) ; mentions d'identification du vendeur (question 7) ; termes hébreu et anglais du synthétique (question 11).

## 7. Couverture et limites

- **Complément du 16/11 (après la synthèse)** : 10 sites israéliens de plus (16 en tout, synthèse refaite dans [SYNTHESE_il.md](audit/il/SYNTHESE_il.md) ; Love Diamonds et Eli Paz bloqués) et 5 sites français de plus (8 en tout, [SYNTHESE_fr.md](audit/eu/france/SYNTHESE_fr.md) ; Edenly bloqué). Les rangs ci-dessus n'ont pas été recalculés ; les deux synthèses de groupe confirment le prix comme écart principal et le rang 1 (configuration dans l'adresse : Joolme et DAZZ seulement en Israël).
- **Audité au 16/11 au matin** : 12 vendeurs nationaux américains, 6 sites israéliens, 3 français, 2 belges, Sabghi (Alabama, sous réserve) ; 10 rapports de forum. Audits partiels : Blue Nile, Keyzar, Clean Origin, Lavi, Courbet (société liquidée), Bonnot, L'Alliancier, Slaets, Sabghi · `P§5`, `O§5`.
- **Bloqué**, contenu (Vc) seulement : Ritani, Brilliant Earth, Do Amore, With Clarity, Grown Brilliance ; ils pèsent jusqu'à 5 sites sur 12 dans chaque décompte. En Israël, non audités : Royalty, Baltinester, uDiamonds, iLab Diamonds, Daskalo, Love Diamonds, Diamony · `O§5`.
- **Pas encore audité** : les États américains (28 inventaires au 16/11, V, liste du dossier), le reste de l'Europe, l'Australie (2 inventaires, 5 sites lus). Aucun site audité ne vend l'alliance de kiddouchin comme produit expliqué · `P§5`.
- **Trois écarts à robots.txt** : Hasolidit (4 requêtes par erreur, messages relus ensuite par les pages autorisées) ; Keyzar (premier passage sur des écrans interdits : constats `[P1]`, jamais repris comme vérifiés) ; Angara (panier affiché une fois, non rouvert). Aussi notés dans les rapports : un clic chez Clean Origin, une page de tri chez Beldiamond, des extraits de Grown Brilliance lus dans les résultats de recherche · `P§5`, `O§5`.
- **Mesures** : iPhone émulé, pas un vrai Safari ; aucune page de paiement ouverte ; notre prototype n'a aucune mesure sur appareil réel · `P§5`, `O§5`.
- **Vérification** : environ 320 affirmations contrôlées côté produit (49 passages corrigés, 4 retirés) et 147 cellules côté offre (44 corrigées, 5 retirées) ; aucun état du prototype n'était faux. Les rapports par site n'ont pas tous été relus en entier, et les fils de forum n'ont pas été rouverts · `P§6`, `O§6`.
- **Forums** : nombres de fils lus, pas des mesures ; presque aucun fil ne parle d'un configurateur en ligne, donc les attentes liées aux rangs 1, 3, 17, 18 et 31 sont faibles ou inférées · `P§5`.

## 8. Rapports

- Comparaisons : [produit et expérience](2026-11-16_comparaison_produit.md) · [offre et confiance](2026-11-16_comparaison_offre.md).
- Exploration : [États-Unis](2026-11-15_etats-unis.md) · [Israël](2026-11-15_israel.md) · [Europe](2026-11-15_europe.md) · [Australie](2026-11-15_australie.md).
- Synthèses d'audit : [États-Unis 1](audit/us/SYNTHESE_us-nat-1.md) · [États-Unis 2](audit/us/SYNTHESE_us-nat-2.md) · [Israël](audit/il/SYNTHESE_il.md).
- Rapports par site : [vendeurs nationaux américains](audit/us/vendeurs-nationaux/) · [Alabama](audit/us/alabama/) · [Tel-Aviv et Ramat Gan](audit/il/israel-tel-aviv-et-ramat-gan/) · [Jérusalem, Haïfa et reste du pays](audit/il/israel-jerusalem-haifa-et-reste-du-pays/) · [France](audit/eu/france/) · [Belgique](audit/eu/belgique/).
- Inventaires seuls : [États américains](audit/us/) · [Nouvelle-Galles du Sud](audit/au/new-south-wales/INVENTAIRE.md) · [Victoria](audit/au/victoria/INVENTAIRE.md).
- Forums : [dossier `forums/`](forums/), 10 rapports (01 à 04 États-Unis, 05 et 06 Israël, 07 France, 08 Europe hors France, 09 Australie, 10 sur-mesure).
