# Synthèse de l'étude de concurrence JR Diamond

Date : 25/11/2026. Remplace la synthèse du 16/11. Tirée des deux comparaisons vérifiées du 25/11 (332 sites, quatre marchés) ; seul ce qui a survécu à leur section « Vérification » est repris. Aucune page web rouverte, aucun code modifié.

**Marques.** (V) vérifié dans un audit ou dans le code · (Vc) contenu lu sans visite, site bloqué · (Inv) repris d'un inventaire · (Ex) lu en exploration · [P1] obtenu sur une adresse interdite par robots.txt, jamais repris comme vérifié · (I) inféré · (S) supposé. « n/N » : décompte de la synthèse d'audit citée. Toute action, priorité, effort ou dépendance est un jugement (I).
**Renvois.** `P4` = ligne 4 du tableau de la [comparaison produit](2026-11-25_comparaison_produit.md) ; `O7` = ligne 7 de la [comparaison offre](2026-11-25_comparaison_offre.md) ; `P§3.7` = section 3, point 7. Les preuves de code (`fichier:ligne`) et les fils de forum y sont cités ; ils ne sont pas recopiés ici. « Point n » = point du message à l'atelier du 24/11 (`docs/atelier/2026-11-24_message.md`).

## 1. L'essentiel

- **L'écart principal reste le prix** (V) : il suit les options chez 12/12 vendeurs nationaux américains, en ₪ TTC chez 4/6 sites israéliens, chez 14/17 sites australiens ; chez nous « Sur devis », moteur prêt mais bloqué par l'atelier · `O1`, `P1`. Une estimation « confirmée au devis », vue chez 8 sites (V, `O§1`), est la voie d'attente (I).
- **« Ce que vous voyez existe » reste sans équivalent** (V) : aucune des 19 synthèses ne relève une 3D présentée comme le fichier de fabrication, ni la fabrication de la commande montrée sur un site ; une dizaine de sites promettent des photos par message (I, décompte approché) · `P§3.1`, `P12`.
- **Le « prix expliqué » n'est plus unique** : NANEA (Arménie) affiche 7 lignes, marge d'atelier comprise (V) ; métal et façon ne sont décomposés nulle part aux États-Unis, en Israël et en Australie (V) · `P3`, `O3`.
- **Nos conditions de vente ne sont pas écrites** (V, code) : retour, livraison, paiement « À confirmer », aucune garantie, ni société ni adresse ; 5/6 sites israéliens et 16/17 australiens publient leurs conditions de retour (V) · `O10`, `O11`, `O16`.
- **Fait ou presque** : partage et référence `JR-` faits le 24/11 (V) ; WhatsApp et coordonnées n'attendent que des variables Vercel (V) ; sans dépendance : libellé d'accessibilité, bouton de devis fixe, champs « date souhaitée », « budget », « surprise » (I) · rangs 1 à 4, 24, 25.
- **Écarts à connaître, décisions non rediscutées** : « Sur devis », paiement intégral à la commande, 14 jours sans express (avantage net en Australie seulement), anneau d'environ 1,6 mm (I) · fin de la section 2.

## 2. Avantages de la concurrence à retenir

Classement : priorité (P1 avant le lancement en Israël, P2 dans les 90 jours, P3 plus tard), puis effort (S faible, M moyen, L fort), puis dépendance la plus légère. « Qui » est (V) sauf marque ; « État chez nous » est (V), lu dans le code le 25/11.

| Rang | Avantage | Qui | Marchés | État chez nous | Action | Effort | Dépend de |
|---|---|---|---|---|---|---|---|
| 1 (P1) | Accessibilité soignée et déclarée | L'Émeraude, menu et déclaration · `P17` | IL | partiel : groupe des vues nommé « Vues » en français dans les trois langues ; aucune déclaration | traduire le libellé ; déclaration en hébreu si l'obligation est confirmée (S) | S | aucun ; avocat (déclaration) |
| 2 (P1) | Date calculée « prête le … », date souhaitée demandée | 12/12 nationaux (7 V, 5 Vc) ; NANEA « Ready by 2 December », Andrejević ; Alpha Gold au paiement (texte lu) ; Cullen ; date demandée 6/19 (US01), 10/20 (US05) · `P4`, `O6` | US, IL, EU, AU | partiel : texte fixe « 14 jours ouvrés », aucun champ de date dans le devis | champ « pour quelle date ? » tout de suite ; « prête au plus tard le … » (dimanche à jeudi, fêtes) | S | aucun (champ) ; atelier (points 30-31) |
| 3 (P1) | Bouton d'action fixe sur mobile, premier visuel rapide | Keyzar 1,1 à 1,7 s et bouton fixe, Rare Carat, Hourglass, DAZZ, Alpha Gold (une mesure, iPhone émulé) · `P15` | US, IL, EU, AU | non mesuré sur appareil réel ; bouton de devis en fin de récapitulatif | bouton « Demander un devis » fixe ; mesure avec `/fr/diagnostic` ; image fixe avant la 3D en P2 | S | aucun (bouton) ; propriétaire (mesure) |
| 4 (P1) | WhatsApp qui porte la demande ; coordonnées visibles | DAZZ (modèle, carat, prix TTC, référence, lien) ; MM, White Box ; Andrejević, Jewellery Room ; WhatsApp 5/6 (IL), 10/14 (EU1b) ; rare aux États-Unis · `P7`, `O17` | US (rare), IL, EU | prêt en attente : message avec référence et lien ; bouton masqué sans numéro ; pied de page sans coordonnées | saisir `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_*` et SMTP dans Vercel | S | propriétaire |
| 5 (P1) | Pages d'entrée ouvertes aux moteurs | Regal Studio (Inv) ; Lavi, page par budget ; Zlatara AS, Marilisi · `P16` | US, IL, EU | prêt en attente : `noindex`, ni accueil ni plan du site | jour du lancement : lever `noindex`, accueil, plan du site, redirections permanentes | S | propriétaire |
| 6 (P1) | Taille dans le parcours, « je ne sais pas », mise à taille offerte rappelée | 8/19 à 12/18 par groupe d'États ; Shiree Odiz, Alpha Gold ; « Größe offen », « Ne znam » ; 6/17 « taille inconnue » (AU) · `P5`, `O12` | US, IL, EU, AU | partiel : champ libre du devis ; rappel dans la FAQ seulement | liste FR / IL / US du même calcul avec « je ne sais pas » ; « première mise à taille offerte » sous la taille | S | atelier (plage, point 34) |
| 7 (P1) | Estimation affichée avant le prix ferme | Reyes, Geraci, Diamonds Above, Debbie's (texte des pages) ; Rosenberg, Ardigold, Guzema ; Anny's · `P2`, `O2` | US, EU, AU | absent : le moteur sait produire une fourchette, ne rend rien d'incomplet | « de X à Y ₪, prix confirmé dans le devis », sur une règle provisoire validée par l'atelier, jamais sans elle | S, après le rang 19 | atelier |
| 8 (P1) | Prix décomposé jusqu'à la façon et la marge | NANEA (7 lignes) ; Shiree Odiz, B-Gem (monture + pierre) ; Ritani, marge de la pierre seule (Vc) · `P3`, `O3` | US (pierre), IL, EU | prêt en attente, non branché ; la FAQ annonce trois parties et « prix affiché TTC » | dépliant de 4 à 5 lignes sous le prix ; accorder la FAQ au moteur | S, après le rang 19 | atelier ; propriétaire (marge en ligne ou non) |
| 9 (P1) | Ce que montre l'image, écrit sous l'image | Blue Nile, VRAI, Gabriel Edward ; Alpha Gold ; Met ; All Diamonds · `P8` | US, IL, EU, AU | partiel : source et écart repliés ; retouche des griffes non dite, FAQ « pas redessiné pour le web » | une ligne sous la 3D ; accorder FAQ et retouche | S | atelier (point 26) |
| 10 (P1) | Cotes en mm, fiche technique | VRAI, Frank Darling, Morris (1,7 × 1,5 mm), LaProng ; Marilisi (2 g ± 10 %) ; VYOR · `P9` | US, EU, AU | partiel : largeur, épaisseur, hauteur absentes alors que le fichier les contient | les afficher avec la tolérance | S | atelier (points 26-28) |
| 11 (P1) | Photos réelles de bagues finies à côté du rendu | Rare Carat (10 bagues en 360°), Apex, Royal, DovEggs ; Manich, Beldiamond · `P10` | US, EU, AU | absent ; teintes « à calibrer » | photo studio et portée de ring-001, légendées « photo » ; calibrer les teintes | S | atelier (point 29) |
| 12 (P1) | Pierre exacte prouvée : vidéo, certificat, inscription | Luther's (vidéo et IGI avant sertissage), MM, Hitched ; Shiree Odiz ; LaboratorniDiamanty, Diamora, Omara ; 13/17 (AU) · `P11`, `O13` | US, IL, EU, AU | partiel : promis dans la FAQ ; certificat dès 0,50 ct, la marquise pilote (≈ 0,25 ct) n'en a pas | vidéo, inscription et n° joints au devis ; sous 0,50 ct, « pierre vue = pierre sertie » ; bloc « votre pierre » en P2 (M) | S | atelier (points 23-25) |
| 13 (P1) | Suivi daté, bague finie montrée avant l'envoi ou le solde | sur le site : 0 dans les 19 synthèses ; par message : Knox, Kruse, DovEggs, W.R. ; Alpha Gold (SMS) ; Goedert ; Xronos, TMC · `P12`, `O14` | US, IL, EU, AU | promis, sans outil ; aucune commande | message daté à chaque étape avec la référence `JR-`, vidéo finale validée avant l'envoi, retard dit le jour même ; page par commande en P2 (L) | S | atelier (points 24, 32-33) |
| 14 (P1) | Prix garanti pendant une durée, cours daté | Aucoin Hart, MM, Beylora, DovEggs ; Alpha Gold ; Slaets, Sisi, NANEA · `O5` | US, IL, EU | absent ; 7 jours proposés (point 35) | date du cours et « prix garanti N jours » sur chaque devis | S | atelier |
| 15 (P1) | Livraison assurée et chiffrée, retrait possible | gratuite chez 11/12 nationaux (6 V, 5 Vc) ; Alpha Gold, Lavi, DAZZ (retrait à la Bourse) ; Holc ; 15/17 (AU) · `O20` | US, IL, EU, AU | absent : réponse sans modalité | coursier assuré, signature, coût ; retrait à la Bourse sur rendez-vous | S | atelier (point 39) |
| 16 (P1) | Garantie écrite, contenu listé, sans visite imposée | « à vie » 12/12 nationaux (7 V, 5 Vc), 16/17 (AU) ; Alpha Gold 1 an ; Kesslers ; Mikuš · `O11` | US, IL, EU, AU | absent ; 1 an proposé (point 37) | durée, couverture, exclusions, examen par photos | S | atelier, avocat |
| 17 (P1) | Aucun débit avant validation, ou acompte puis solde | Debbie's (texte), Dianna Rae, MM, Charleston Rings ; Rare Carat ; DAZZ ; Bonnot, Beldiamond ; acompte 10/17 (AU) · `O8` | US, IL, EU, AU | absent, par décision : paiement intégral « à la commande », alors que la FAQ fait valider la pierre filmée | garder le paiement intégral, le demander après l'accord écrit sur la pierre et le modèle ; remboursement si non conforme | S | propriétaire, atelier |
| 18 (P1) | Retour et annulation écrits, exception dite au moment du choix | exclusion du sur-mesure écrite chez 10/15 à 17/19 par groupe d'États ; 5/6 (IL) ; Lovely Rings, Rosenberg ; 16/17 (AU) · `O10` | US, IL, EU, AU | absent : réponse d'attente | publier avant tout paiement, mention dans le configurateur ; annulation sans frais avant la fabrication à étudier | S, après l'avis | avocat, propriétaire |
| 19 (P1) | Prix TTC en monnaie locale, qui suit chaque option | 12/12 nationaux (7 V, 5 Vc) ; 6/19 à 10/19 par groupe d'États ; 4/6 (IL) ; 77 Diamonds, Lovely Rings ; 14/17 (AU) · `P1`, `O1` | US, IL, EU, AU | prêt en attente : « Sur devis » ; le moteur refuse sans règle de bénéfice, taux, platine, grille de pierres | « à partir de » avec « TVA incluse », puis prix de la configuration | M | atelier (point 36 et points en attente) |
| 20 (P1) | Hébreu natif, guides compris | 5/6 sites israéliens ; LaboratorniDiamanty (Inv) · `P14` | IL | partiel : droite-à-gauche testé ; traduction par l'IA non relue ; aucun guide | relecture native ; guides synthétique, taille, kiddouchin | M | propriétaire (relecteur) |
| 21 (P1) | Vendeur identifiable : artisan nommé, société, coordonnées | NAGI, Luther's, Green Lake ; Alpha Gold, L'Émeraude, Lavi ; Lovely Rings, Slaets ; Larsen · `O16` | US, IL, EU, AU | partiel : « Bourse du diamant, Ramat Gan » ; ni société, ni adresse, ni page atelier | page « L'atelier » : Yonathan nommé avec son accord, société, adresse, photos réelles | M | atelier (point 40), propriétaire, avocat |
| 22 (P1) | Alliance de kiddouchin : règle expliquée, prix au poids | aucun site audité ne la vend ; Stav, Ziv-Or (Ex) ; LaProng, OroAlianzas, STIL (alliances) · `O23`, `P24` | IL, EU | partiel : guides FR et EN, FAQ ; ni modèle, ni page, ni hébreu ; l'« Alliance » pilote est sertie | textes : prix au gramme, facture au nom du marié, avis du rabbin, hébreu ; page avec 3D en P2 dès le fichier | M | atelier (points 43-44), propriétaire |
| 23 (P1) | Paiement en plusieurs fois, moyens locaux | 12/12 nationaux (7 V, 5 Vc) ; Shiree Odiz (10 fois, Bit), Alpha Gold, Lavi (12 fois) ; 13/20 (EU2, EU4) ; 7/17 (AU) · `O9` | US, IL, EU, AU | absent : aucune route de paiement | Grow, carte en 1 à 12 fois ; Bit pour un acompte ou une alliance (plafond, `docs/PAIEMENT.md`) | L | propriétaire (prestataire) |
| 24 (P2) | Surprise protégée | Courbet, Sisi, Holc ; Larsen, Simon Alexander · `P19` | EU, AU | absent | case « c'est une surprise », contact unique | S | aucun |
| 25 (P2) | Entrée par le budget | JewelerOS « Decide later », Malka ; Lavi ; Brilliant, Zlatara AS · `P21`, `O25` | US, IL, EU, AU | absent : budget suggéré dans l'exemple du message | champ « budget » facultatif ; page de repères après la grille | S | aucun (champ) ; atelier (page) |
| 26 (P2) | Écart de prix écrit sur l'option | Gabriel Edward (18 k +300 $), Hitched (platine +950 $) ; DAZZ ; Lovely Rings ; Cullen · `O4` | US, IL, EU, AU | absent : la note dit que le prix change, sans montant | supplément 18 k, platine, écart naturel / synthétique sur le bouton | S, après le rang 19 | atelier (platine, grille) |
| 27 (P2) | Rendez-vous atelier ou visio depuis le parcours | visio 9/12 nationaux (5 V, 4 Vc) ; Kruse ; DAZZ (pré-rempli), Shiree Odiz ; Maze · `P20`, `O19` | US, IL, EU | absent | bouton qui ouvre le devis pré-rempli | S | atelier (point 41) |
| 28 (P2) | Engagement si la date glisse ; express | RHHJ (express remboursé si la date est manquée), Apex (+350 $) ; Mikuš ; Cullen, VYOR · `O7` | US, EU, AU | absent, par décision : pas d'express | écrire ce qui se passe si la date glisse | S | propriétaire, atelier (point 33) |
| 29 (P2) | Bague portée, échelle sur la main | Blue Nile, Rare Carat, Alloy ; Karaat ; Cullen · `P23` | US, EU, AU | absent | photo portée réelle ; pas d'essayage virtuel (P3, L) | S | atelier |
| 30 (P2) | Maquette à essayer avant la fonte | Frank Darling, With Clarity (Vc), June Rings ; DiamondsByMe ; 4/17 (AU) · `P26`, `O15` | US, EU, AU | absent ; résine prévue dans la procédure photo | photo de la résine dans le suivi ; essai à Ramat Gan sur rendez-vous | S | atelier (point 42) |
| 31 (P2) | Après-vente chiffré | Paul's, Crown ; Lavi ; Neo, NANEA · `O21` | US, IL, EU | partiel : « À confirmer » | contrôle annuel des griffes ; prix du rhodiage et des réparations | S | atelier (point 38) |
| 32 (P2) | Avis publics affichés | Thollot, Buchroeders ; Shiree Odiz, Lavi ; 12/20 (EU2) ; Cullen · `O22` | US, IL, EU, AU | absent | fiche Google, avis demandés après chaque livraison, jamais filtrés | S | propriétaire, atelier |
| 33 (P2) | Bijou de famille : pesée, bilan matière, restitution | W.R. ; L'Émeraude seule (1/6) ; Panos, GH · `P25`, `O24` | US, IL, EU | fait, en brouillon ; ni poids, ni bilan matière | champs facultatifs ; protocole écrit ; avant/après publiés avec accord | S | atelier (point 45, questions 57-60) |
| 34 (P2) | Pierres présélectionnées, avec leur raison | Hitched, Mikado ; VYOR, Monroe Yorke ; Do Amore (Vc) · `P13` | US, EU, AU | sans objet : une pierre, un calibre | 2 ou 3 pierres filmées par configuration | M | atelier (grille) |
| 35 (P2) | Gravure dans le parcours, aperçu | Angara, Rare Carat ; Shiree Odiz ; Ardigold, Andrejević ; 6/17 (AU) · `P18` | US, IL, EU, AU | absent du parcours : FAQ seulement | champ gravure (alphabet, police), aperçu ; jamais par défaut sur l'alliance de kiddouchin | M | atelier (point 46), avocat |
| 36 (P2) | Image qui suit forme et carat | Angara, Easson ; Andrejević, NANEA ; Jogia · `P22` | US, EU, AU | une forme, un calibre, et c'est écrit | rien de généré ; une forme ou un carat seulement avec un fichier de l'atelier | L | atelier (fichiers) |
| 37 (P3) | Reprise ou échange du diamant | USA Jewels, Herzog, Haejin ; Auroria · `O26` | US, EU | absent | ne rien promettre sans calcul | M | propriétaire, atelier |
| 38 (P3) | Export droits et taxes compris | Luther's, Grown Brilliance (Vc) ; Rosenberg ; Cullen · `O27` | US, EU, AU | absent, hors lancement | France : droits acquittés, aucune sous-déclaration | L | propriétaire (transitaire), avocat |
| fait | Configuration dans l'adresse, partage, référence | Angara, Rare Carat, Isaac, MM ; DAZZ ; Andrejević ; All Diamonds · `P6`, `O18` | US, IL, EU, AU | fait le 24/11 : adresse, `JR-XXXXXX`, « Partager », tests | garder ; y ajouter la pierre filmée quand elle existe | — | aucun |

**Écarts entre nos décisions et les attentes des acheteurs** (à connaître, pas à rediscuter) :
- « Sur devis » : lu comme une invitation au marchandage en Israël (`Fo05` erreur 3, (I)) ; le rang 7 réduit l'attente. Paiement intégral à la commande : payer avant de voir est la peur n° 1 du sur-mesure (F04 c.2, F10 c.4 et c.6, (V)) ; la FAQ fait aussi valider la pierre filmée, ordre des étapes à préciser (`O8`).
- 14 jours ouvrés sans express : avantage net en Australie (0/17), relatif aux États-Unis (au moins 8 sites aussi courts, (I) décompte), norme en Israël et en Europe (V) · `P§3.7` ; des acheteurs israéliens veulent « quelques jours » (`Fo05` erreur 6).
- Anneau d'environ 1,6 mm (I, calcul sur les bornes de `geometry.json`) contre 1,8 mm cité sur deux forums (`Fo01`, `Fo08`) · `P9`, point 27. Garantie d'un an proposée : sous le « à vie » américain et australien (`O11`).

## 3. Par marché

**États-Unis** (212 sites : 12 vendeurs nationaux, 200 dans les 50 États · `P§5`)
- Norme : prix, date calculée et garantie « à vie » chez 12/12 nationaux (7 V, 5 Vc) ; exclusion du sur-mesure écrite chez 10/15 à 17/19 par groupe d'États (V) · `O1`, `O6`, `O10`, `O11`.
- Ce qui manque : métal et façon jamais décomposés ; aucun site en hébreu (V jusqu'à US05, non relevé ensuite) ; 3D temps réel chez 0 à 5 sites par groupe ; l'outil loué JewelerOS ne montre souvent pas sa 3D (V) · `O3`, `P14`, `P§3.1-2`.
- Délai : 3 à 8 semaines le plus souvent, au moins 8 sites à 14 jours ou moins (I) ; express vendu (Apex +350 $, V) · `P§3.7`, `O7`.
- Attentes et pièges : délais qui glissent (F04 c.1, 15 fils), silence pendant la fabrication (F04 c.2, 13 fils) ; porte de coordonnées, prix barrés permanents (5/19 en US01), garantie soumise à des visites (V) · `O§4`.

**Israël** (6 sites audités, synthèse du 15/11 · `O§5`)
- Norme : ₪ TTC (4/6), hébreu (5/6), WhatsApp (5/6), conditions de retour publiées (5/6), carte en 10 ou 12 fois (Shiree Odiz, Alpha Gold, Lavi) (V) · `O1`, `O9`, `O10`, `O17`.
- Délai : B-Gem 12 jours ouvrés, Lavi 14, Alpha Gold 7 à 14 (V) : nos 14 jours sont la norme, pas un argument · `P§3.7`.
- Ce qu'ils ne montrent pas : une seule 3D, générique (L'Émeraude) ; image qui ne suit pas l'option (4/6) ; aucune photo d'atelier dans le parcours ; l'alliance de kiddouchin n'est vendue comme produit par aucun site audité (V) · `P10`, `O23`, `P§4`.
- Droit et limites : Alpha Gold accepte l'annulation même sur commande, 4 mois pour les nouveaux immigrants (V), à poser à l'avocat ; 7 sites de l'inventaire non audités : le marché du lancement est le moins couvert · `O10`, `O§5`.

**Europe** (96 sites : 91 dans 5 synthèses, 3 en France, 2 en Belgique · `P§5`)
- Prix expliqué : NANEA (7 lignes, marge d'atelier) ; estimations chez Rosenberg, Ardigold, Guzema ; retour même gravé chez Lovely Rings (60 j) et Rosenberg (30 j) (V) · `O3`, `P2`, `O10`.
- Paiement par étapes et preuve : 50 % chez Bonnot, Beldiamond, Ékszerpalota ; certificat avant confirmation chez LaboratorniDiamanty, numéro vérifié avant paiement chez Diamora (V) · `O8`, `O13`.
- Délai dans la norme : 10/18 à 3 semaines au plus (EU3), 9/20 (EU4), NANEA 7 jours (V) · `O§3`.
- À ne pas copier : « cultivé », « laboratoire » en français (Courbet, Beldiamond) ; « pierre équivalente » (Moni's) ; pour la France plus tard, la TVA à l'import inquiète (F08, 6 fils) · `O§4`, `O27`.

**Australie** (18 sites · `P§5`)
- Norme : prix 14/17, garantie « à vie » 16/17, retours écrits 16/17, livraison gratuite et assurée 15/17, acompte 10/17 (V) · `O1`, `O8`, `O10`, `O11`, `O20`.
- Notre délai y est un avantage net : 0/17 à 14 jours ou moins ; mais l'express se vend (Cullen +200, +1 500) (V) · `P§3.7`, `O7`.
- Preuve : pierre réelle à certificat 13/17, vidéo 360° 8/17 ; photos et vidéos avant le solde chez Xronos, vidéo finale chez TMC (V) · `P11`, `P12`.
- Limites : 17/17 en anglais seul (V) ; AUREK, l'offre la plus proche, fermé aux agents Claude ; ACT, Tasmanie, Territoire du Nord non audités · `O§5`.

## 4. Nos avantages à défendre

Chaque point est (V) dans le code ; « mieux » est (I). La réserve dit ce qui manque pour que l'avantage se voie.
- **La 3D est la pièce, et le dit** : modèle tiré de `Ring.3dm`, fichier et logiciel affichés ; aucune synthèse ne relève une 3D présentée comme fichier de fabrication (V). Réserve : retouche des griffes à dire (rang 9) · `P§3.1`.
- **Une 3D qui ne dépend de personne** : repli sans WebGL testé, bouton « Réessayer » ; l'outil loué JewelerOS a souvent échoué à s'afficher (V). Réserve : une part des échecs tient à l'environnement de test (I) · `P§3.2`.
- **L'image suit le choix, ou dit qu'elle ne le suit pas** ; en face, le visuel figé est un défaut de presque toutes les synthèses (V). Réserve : teintes non calibrées · `P§3.3`.
- **Fabrication de la commande montrée, publication sur accord** : 0 site dans les 19 synthèses (V). Réserve : promesse non exécutée, aucune commande · `O§3`.
- **Prix décomposé jusqu'au bénéfice** : métal et façon 0 aux États-Unis, en Israël, en Australie ; NANEA seul en Europe (V). Réserve : non branché · `O§3`.
- **Aucune porte de coordonnées, ni promotion, ni prix barré, ni compte à rebours** (V, recherche dans `src/`). À tenir après le lancement · `P§3.4`, `O§3`.
- **Trois langues, dont l'hébreu de droite à gauche et le français** ; un seul site israélien en français, hors de son configurateur (V). Réserve : hébreu non relu · `P§3.5`.
- **Libellé « synthétique » conforme, contenus sourcés, réponses provisoires marquées** ; en face, « cultivé », textes de travail publiés, règles contradictoires (V). Réserve : 5 réponses « À confirmer » · `P§3.6`, `O§3`.
- **Délai de 14 jours** en Australie et, moins nettement, aux États-Unis ; **alliance de kiddouchin traitée** (aucun site audité ne la vend). Réserve : ni modèle ni hébreu (rang 22) · `P§3.7`, `O§3`. **Plus des avantages** (V) : poids de métal affiché (une trentaine de sites, (I) décompte), lien de configuration, pierre filmée seule.

## 5. À ne pas copier

- **Image qui ne suit pas l'option** (« Shown with N ct »), **3D générique, paramétrique ou louée, images par IA** (Solomon, Snyder, Bonnot, V) : contraire à « ce que vous voyez existe » · `P§4`, `O§4`.
- **Porte de coordonnées** avant de voir, chiffrer ou enregistrer ; **prix hors taxes ou caché** (JewelerOS, Alloy, Solomon, B-Gem, V) · `P§4`, `O§4`.
- **Prix barrés permanents, compteurs, « stock faible »** (USA Jewels, Pompeii3, Lavi, ROA, V) ; **page d'avis factice** (Nick T. Arnold, V) · `O§4`.
- **Garantie « à vie » soumise à des visites ou retirée à l'international ; retour en avoir seulement, frais de 10 à 20 % ; acompte non remboursable annoncé tard ; frais de carte** (Spicer, Knox, V) · `O§4`.
- **« Une pierre équivalente peut remplacer celle choisie » ; certificat maison** (Moni's, Kate & Kole, Lavi, V) · `O§4`.
- **« Cultivé », « de laboratoire » en français** : garder « synthétique » (décret 2002-65) · `P§4`, `O§4`.
- **Parcours ouvert sur une grosse pierre ; synthétique dénigré ; règle dite différemment d'une page à l'autre ; traceurs avant consentement** (Lenox) ; **sous-déclaration en douane** (forums) (V) · `P§4`, `O§4`.
- **Précaution (I), vue nulle part** : ni gravure, ni pierre, ni deux couleurs par défaut sur l'alliance de kiddouchin · `P§4`.

## 6. Décisions attendues

**Du propriétaire**
- Saisir les variables Vercel (WhatsApp, téléphone, e-mail, SMTP) ; trouver un relecteur natif ; faire les tests sur appareils réels (rangs 3, 4, 20).
- Moment du paiement intégral : à la commande, ou après l'accord écrit sur la pierre filmée et le modèle (rang 17) ? La marge est-elle une ligne du prix décomposé (rang 8) ?
- Prestataire de paiement (rang 23) ; fiche Google (rang 32) ; engagement écrit si la date glisse (rang 28). Envoyer le message du 24/11 (points 23 à 46), avec celui du 14/11 s'il est resté sans réponse.

**De l'atelier**
- Points déjà en attente : règle de bénéfice, taux de change, platine, grille de pierres (rangs 19, 8, 26) ; à défaut, une règle provisoire pour une estimation (rang 7).
- Ligne sous la 3D et retouche (point 26), tolérances et anneau de 1,6 mm (27-28), photos de ring-001 (29), pierre et certificat sous 0,50 ct (23-25).
- Calendrier et date (30-31), suivi et retard (32-33), mise à taille (34), prix garanti (35), garantie (37), après-vente (38), livraison (39).
- Accord pour être nommé (40), rendez-vous (41), maquette (42), alliance de kiddouchin (43-44), transformation (45 ; questions 57-60), gravure (46).

**De l'avocat**
- Annulation : exception du sur-mesure, délai étendu pour les nouveaux immigrants (Alpha Gold donne 4 mois, V), effet de la gravure ; texte de la garantie (rangs 16, 18, 35).
- Mentions d'identification du vendeur (rang 21) ; déclaration d'accessibilité, obligation supposée (S) ; termes hébreu et anglais du synthétique (question 11) ; traceurs si des mesures d'audience sont ajoutées.

## 7. Couverture et limites

- **Audité** (V) : 332 sites, États-Unis 212, Israël 6, Europe 96, Australie 18 ; 10 rapports de forum. Audits partiels pour la grande majorité : panier interdit, aucune page de paiement, de chat ou de WhatsApp ouverte, Chromium sans carte graphique, iPhone émulé, soldes de fin novembre · `P§5`, `O§5`.
- **Bloqué** (V) : 29 audits en contenu seul, 5 vendeurs nationaux (Ritani, Brilliant Earth, Do Amore, With Clarity, Grown Brilliance), 23 dans les États, EverettBrookes (AU). Écartés dès l'inventaire : Novita, 18carati, Estrell, Christoffersen, Thune, Klenota, NOORDIA, FGM, ORO, Zarapkhana, Flori Diamonds ; AUREK fermé aux agents Claude · `P§5`, `O§5`. **Peut-être bloqués à tort** (S, mandataire de la session) : six sites du New Hampshire, Lyght, Hamilton, Billig, Henry's, Joseph Schubach, Nelson Coleman, Little Treasury ; Danforth et Rasmussen à réessayer · `O§5`.
- **Pas encore audité** : Liechtenstein, Saint-Marin (un seul site en Macédoine du Nord) ; ACT, Tasmanie, Territoire du Nord ; 7 sites israéliens de l'inventaire et les sites russophones ; alliance de kiddouchin non recherchée dans la plupart des groupes américains. Référencement et accessibilité non mesurés · `P§5`, `O§5`.
- **Écarts à robots.txt relevés le 16/11** (V) : Hasolidit (4 requêtes par erreur, messages relus par les pages autorisées, `Fo05`) ; Keyzar (écrans interdits, constats [P1]) ; Angara (panier affiché une fois, non rouvert). Aussi : un clic chez Clean Origin, une page de tri chez Beldiamond, extraits de Grown Brilliance · [comparaison produit du 16/11](2026-11-16_comparaison_produit.md) §5.
- **[P1] dans les synthèses depuis** (jamais repris comme vérifiés) : Keyzar (étapes 2 et 3, total, code, compteur) et Rare Carat (passage interrompu, prix par métal) ; deBebians (`US01`) ; Harry K (`US02`) ; paniers de Doland, Debbie's, RHHJ (`US03`) ; filtres d'Aucoin Hart (`US04`) ; inventaires de D&R House of Diamonds (`US06`), Elizabeth Diamond et Britton (`US07`), Fagan (`US10`) ; paniers de Jewelbox, Met et DiamondJools (`EU3`). L'outil robots.txt d'avant le 24/11 ne lisait que le groupe `*` : Sabghi (conservé) ; Rumanoff's et Hamzare, tous leurs constats en [P1] (tranché le 25/11) · `P§5`, `O§5`.
- **Vérification** : environ 430 affirmations contrôlées côté produit (26 corrigées, 1 retirée) et 480 côté offre (31 corrigées, 1 retirée) ; aucun état du prototype n'était faux, aucune priorité n'a changé. La plupart des faits concurrents viennent des synthèses, sans réouverture du rapport par site · `P` et `O`, « Vérification ».
- **Forums** : nombres de fils lus, pas des mesures ; presque aucun fil ne parle d'un configurateur, donc les attentes des rangs 1, 3, 5, 25 et du partage sont faibles ou inférées · `P§5`.

## 8. Rapports

- Comparaisons du 25/11 : [produit et expérience](2026-11-25_comparaison_produit.md) · [offre et confiance](2026-11-25_comparaison_offre.md) ; du 16/11 : [produit](2026-11-16_comparaison_produit.md) · [offre](2026-11-16_comparaison_offre.md). Exploration : [États-Unis](2026-11-15_etats-unis.md) · [Israël](2026-11-15_israel.md) · [Europe](2026-11-15_europe.md) · [Australie](2026-11-15_australie.md).
- Synthèses États-Unis : [nationaux 1](audit/us/SYNTHESE_us-nat-1.md) · [nationaux 2](audit/us/SYNTHESE_us-nat-2.md) · [01](audit/us/SYNTHESE_us-01.md) · [02](audit/us/SYNTHESE_us-02.md) · [03](audit/us/SYNTHESE_us-03.md) · [04](audit/us/SYNTHESE_us-04.md) · [05](audit/us/SYNTHESE_us-05.md) · [06](audit/us/SYNTHESE_us-06.md) · [07](audit/us/SYNTHESE_us-07.md) · [08](audit/us/SYNTHESE_us-08.md) · [09](audit/us/SYNTHESE_us-09.md) · [10](audit/us/SYNTHESE_us-10.md). Autres synthèses : [Israël](audit/il/SYNTHESE_il.md) · [Europe 1b](audit/eu/SYNTHESE_eu-1b.md) · [2](audit/eu/SYNTHESE_eu-2.md) · [3](audit/eu/SYNTHESE_eu-3.md) · [4](audit/eu/SYNTHESE_eu-4.md) · [5](audit/eu/SYNTHESE_eu-5.md) · [Australie](audit/au/SYNTHESE_au.md).
- Rapports par site et inventaires : [États-Unis](audit/us/) (dont [vendeurs nationaux](audit/us/vendeurs-nationaux/)) · [Israël](audit/il/) · [Europe](audit/eu/) (dont [France](audit/eu/france/), [Belgique](audit/eu/belgique/)) · [Australie](audit/au/).
- Forums : [dossier `forums/`](forums/), 10 rapports (01 à 04 États-Unis, 05 et 06 Israël, 07 France, 08 Europe hors France, 09 Australie, 10 sur-mesure).
