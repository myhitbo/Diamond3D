# Audit : L'Alliancier, configurateur 3D d'alliances (français, €)

| | |
|---|---|
| Site | L'Alliancier (marque de la bijouterie Kamlet), siège 6 boulevard des Enseignes, 67116 Reichstett ; boutique au Shopping Promenade de Vendenheim (Bas-Rhin) |
| Page de départ | https://www.alliancier.com/configurateur-alliance-3d/ |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Les six onglets, la vue 3D et les boutons de service ont été actionnés. L'écran de commande et le formulaire de demande demandent des coordonnées : non franchis. Le panier du site n'a pas reçu d'article |
| robots.txt | interdit `/wp-admin/`, `?add-to-cart=` et trois dossiers techniques (V). Pas de défi. Le serveur a répondu **429** (trop de requêtes) à 68 à 79 fichiers de style et de script sur chacun des 6 chargements de bureau dont le journal a été gardé, et à aucun sur le dernier chargement en identité iPhone (V). Rien n'a été tenté pour l'éviter |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

Le configurateur n'est pas un développement de L'Alliancier : c'est celui du fabricant d'alliances allemand Breuning, chargé depuis `konfigurator.breuning.de` et `assets.confmetrix.com` (moteur three.js r180), sous l'identifiant de revendeur de la bijouterie (V, requêtes relevées). Le même outil sert donc à d'autres détaillants (I).

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Page | texte d'aide (« Comment utiliser le configurateur 3D ? », « Comment valider votre création ? »), téléphone, rendez-vous, note Google (V) | — | — |
| Type de bijou | Alliance, Bague mémoire, Bague de fiançailles (V) | la paire d'alliances par défaut : 629 € + 459 € = **1 088 € TTC** (V) | « Bague mémoire » et « Bague de fiançailles » remplacent les options par une collection de modèles référencés (« 41/05638 »…) (V) |
| Profil | 12 profils en coupe (A à F, PR_016…), 51 autres (V) | chaque profil change le prix : total de 1 068 à 1 178 € sur les 12 (V) | l'anneau change de section (V) |
| Dimensions | largeur, hauteur, rapport automatique, taille de doigt, système de taille (V) | largeur portée de 2,00 à 9,50 mm : total de 1 148 à 3 048 € ; la taille de doigt change aussi le prix (V) | oui (V) |
| Matière | répartition (uni à facettes), métal (14), titre, surface (16) (V) | très fort : de 458 € (Light Blush 050) à 3 178 € (Gold Sun 900) pour la paire (V) | couleur et texture changent (V) |
| Rainures / rebords | rainures design, rainures de séparation, rebords (V) | inchangé tant qu'aucune rainure n'est ajoutée (V) | — |
| Diamants | groupes de pierres, une quarantaine de sertissages (V) | « Serti clos » : + 90 € sur une bague (V) | la pierre apparaît (V) |
| Gravure | texte par bague (30 caractères), 8 symboles, 3 écritures, fac-similé, empreinte digitale (V) | inchangé (V) | le texte se grave dans l'anneau 3D (V) |
| Fin | « commander en ligne », « demande », « Enregistrer / charger », « Détails de votre configuration », « Imprimer » (V) | prix par bague et « Prix total (TVA comprise) » toujours visibles (V) | — |

## Contrôles vérifiés

Relevés : 100 contrôles sur la page en Chromium de bureau, dont 34 dans le configurateur à l'ouverture ; 19 visibles dans le configurateur sur iPhone (V). Le clic de Playwright restait en attente (« élément pas stable ») sur la plupart des contrôles du configurateur : ils ont été actionnés par un clic émis en script, ce qui ne dit rien de leur confort au doigt (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Alliance / Bague mémoire / Bague de fiançailles | 3 boutons | « Bague de fiançailles » affiche « Collection de bagues de fiançailles », plus de 45 références ; « Bague mémoire », « Collection mémoire » ; « Alliance » revient aux options (V) | total inchangé à 1 088 € tant qu'aucun modèle n'est choisi (V) | fonctionne ; aucun modèle de collection ouvert |
| Onglets Profil, Dimensions, Matière, Rainures / rebords, Diamants, Gravure | 6 onglets | changent le panneau d'options (V) | — | fonctionnent |
| Profils A, B, C, D, E, F, PR_016, PR_017, PR_020, PR_028, PR_063, PR_068 | 12 vignettes | l'image change à chaque clic (V) | total 1 128, 1 118, 1 068, 1 158, 1 098, 1 108, 1 068, 1 098, 1 178, 1 108, 1 068, 1 148 € (V) | fonctionnent (12 sur 12) |
| autres profils | lien | ouvre 51 profils de plus (P1 à P8, PR_015 à PR_075) (V) | — | liste ouverte ; aucun choisi |
| Largeur de bague | liste | au moins 17 valeurs de 1,50 à 9,50 mm par 0,5 mm (V) | 9,50 mm : 1 669 € + 1 379 € (V) | fonctionne (1 valeur actionnée) |
| Hauteur de bague | liste | valeur affichée 1,20 ou 1,30 mm selon le profil (V) | — | **non ouverte** (libellé changé entre deux relevés) |
| Définir automatiquement le rapport largeur / hauteur | case | cochée par défaut (V) | — | non actionnée |
| Taille de bague | liste défilante | 26 valeurs visibles de 51 à 63,5 par demi-taille ; la liste va plus loin (une bague est en 64 par défaut) (V) | 56 → 63,5 : une bague passe de 1 379 à 1 529 € (V) | fonctionne (1 valeur actionnée) |
| Autres tailles de bague | liste | circonférence intérieure, diamètre, anglais, États-Unis/Canada, Suisse (V) | — | liste ouverte ; aucun choisi |
| Uni, Bicolore, Tricolore, Libre, Incrustation, Facettes | 6 choix | image et prix inchangés pour bicolore à incrustation (il faut ensuite choisir les alliages) ; « Facettes » change l'image (V) | « Facettes » : total de 3 188 à 6 658 € sur la configuration en cours (V, non expliqué) | fonctionnent (6 sur 6) |
| Métal | liste | 14 métaux visibles : palladium (défaut), or jaune, or blanc, or gris, Gold Silk, Gold Sun, Gold Sunrise, or rouge, or rose, Gold Honey, Light Blush, Gold Blush, Platinum-snow, platine (V) | paire, depuis 1 088 € : or jaune 2 428 · or blanc 2 658 · or gris 2 618 · Gold Silk 2 568 · Gold Sun 3 178 · Gold Sunrise 1 738 · or rouge 1 708 · or rose 1 738 · Gold Honey 2 408 · Light Blush 458 € (V) | fonctionne (10 sur 13 ; Gold Blush, Platinum-snow et platine non actionnés) |
| Titre | vignettes | selon le métal : or jaune, blanc, rouge 333, 375, 585, 750 ; or gris et rose 585, 750 ; Gold Silk 375, 585, 750 ; palladium 300, 500, 950 (V) | — | listés ; **non actionnés un par un** |
| Utiliser le même alliage pour tous les disques | case | — | — | non actionnée |
| Surface | liste | poli (défaut) et 15 finitions : sablé fin ou grossier, mats brossés, glacé, cristal, grains du bois, martelé… (V) | inchangé sur les 6 testées (V) | fonctionne (6 sur 15) ; l'image change (V) |
| Utiliser différentes surfaces | bouton | — | — | non actionné |
| Rainures design, Rainures de séparation, Rebords | 3 choix | changent le sous-panneau ; avertissement : « les rebords […] ne sont pas possibles avec toutes les formes de profil » (V) | inchangé (V) | fonctionnent |
| Ajouter (une rainure) ; rainure en V 90°, en U ronde, carrée ; Perlage ; Carbone | bouton, vignettes | Perlage et Carbone sont désactivés sur le profil par défaut (V) | — | **non actionnés** : aucune rainure ajoutée |
| Type de sertissage | bouton | ouvre 42 lignes (titres de famille compris) : serti clos, serti grain, serti rail, serti tension, œil, solitaire, chaton (4 ou 6 griffes, carré, cadre), mémoire (V) | — | fonctionne |
| Serti clos | vignette | une pierre apparaît sur l'anneau (V) | une bague passe de 459 à 549 € (V) | fonctionne (un seul sertissage actionné) |
| Ajouter un groupe | bouton | ajoute un second groupe de pierres (V) | inchangé (V) | fonctionne |
| Taille, qualité et nombre des pierres | listes | visibles dans le récapitulatif (« Taille », « Qualité », « Carats totaux », « Nombre ») (V) | — | **non trouvées** dans l'onglet après le choix du serti ; non actionnées |
| Texte de gravure, bague 1 et bague 2 | 2 champs, 30 caractères | « TEST 15.11 » saisi : le texte apparaît dans l'anneau (V) | inchangé (V) | fonctionne (bague 1) |
| 8 symboles (cœurs, yin-yang, croix, anneaux, infini…) | vignettes | ajoutent le symbole au texte ; image changée au premier (V) | inchangé (V) | fonctionnent (8 sur 8) |
| Plus de typographies | liste | standard, grec, russe, tous « gravure au laser » (V) | — | liste ouverte ; aucun choisi |
| Gravure individuelle : fac-similé ; empreinte digitale | 2 cases | — | — | non actionnées |
| Reprendre la configuration pour la bague « Bague 1 » | case, dans chaque onglet | cochée par défaut (V) | — | non actionnée |
| Vue 3D : glisser, molette | zone 3D | la bague tourne ; la molette zoome ; pas de rotation automatique (V) | — | fonctionne |
| Vue plein écran | bouton | zone 3D de 800 × 800 px ; la croix revient à 476 px (V) | — | fonctionne |
| Afficher la bague séparément | bouton | montre une seule bague ; le libellé devient « Afficher toutes les bagues » (V) | — | fonctionne |
| Annuler la dernière action | bouton | l'image revient d'un pas (V) | — | fonctionne |
| Revenir à la configuration de base | bouton | fenêtre : « Annuler », « Oui, réinitialiser », « Démarrer une nouvelle configuration » (V) | — | fenêtre ouverte ; **non confirmée** |
| Ajouter ou supprimer des bagues | lien | panneau avec le type de chaque bague, « effacer », « Déplacer » (V) | — | panneau ouvert ; rien ajouté |
| Détails de votre configuration | lien | fiche complète par bague : profil, largeur 3,00 et 2,00 mm, hauteur, taille 64 (Ø 20,4 mm) et 56 (Ø 17,8 mm), alliage, surface, rainures, pierres, gravure, prix (V) | — | fonctionne |
| Enregistrer / charger | lien | enregistre la paire sous un nom, ou charge un identifiant d'alliance ; le champ garde un texte d'aide en allemand (« Ring-ID eingeben ») (V) | — | fenêtre ouverte ; **rien enregistré** |
| Imprimer | lien | « Le fichier PDF est en cours de génération… » (V) | — | lancé ; fichier non récupéré |
| demande | bouton | formulaire « Demande de consultation » : prénom, nom, e-mail, téléphone, message, « Envoyer la demande » (V) | — | **non rempli** (règle) |
| commander en ligne | bouton | avertissement : « Aucune gravure n'a encore été définie pour Alliance "Bague 1" » ; « Annuler » ou « Passage à l'écran de commande » (V) | — | écran de commande **non ouvert** (coordonnées) |
| PRENDRE RENDEZ-VOUS, 03 88 81 81 09, « 4.9 · 295 avis », menu, compte, panier | liens | cibles lues (V) | — | non actionnés |

## Options disponibles

- **Bijoux** : alliances (paire par défaut, une large et une fine), bagues mémoire, bagues de fiançailles, ces deux dernières sur catalogue de références (V).
- **Profils** : 12 + 51 (V). **Largeurs** : 1,50 à 9,50 mm (V). **Tailles** : par demi-taille, de 51 à 64 au moins, cinq systèmes de mesure (V).
- **Métaux** : palladium, or jaune, blanc, gris, rouge, rose, cinq ors de couleur du fabricant (Silk, Sun, Sunrise, Honey, Blush), Light Blush, Platinum-snow, platine (V). La page annonce « 20 alliages » avec le tantale ; le tantale n'est pas parmi les 14 métaux visibles de la liste (V ; la liste est peut-être plus longue).
- **Titres de l'or** : 333, 375, 585, 750 (8, 9, 14 et 18 k) ; 900 pour Gold Sun (V).
- **Surfaces** : 16 (V). **Sertissages** : une quarantaine (V). **Gravure** : 30 caractères, 8 symboles, 3 écritures, fac-similé, empreinte digitale (V).
- **Origine des pierres** : non indiquée dans le configurateur (V).

## Prix, délais, retours, garanties

- **Affichage** : prix TTC par bague et total de la paire, recalculés à chaque choix par une requête au serveur du fabricant (V). Aucune décomposition (métal, façon, pierres) (V).
- **Commande** : « nous validons chaque projet manuellement » ; après « commander en ligne », un rappel valide « les mesures et le financement » ; « votre commande ne devient ferme qu'après cet échange » (V).
- **Délai** : 3 à 6 semaines au plus après réception de la commande (V, conditions de vente).
- **Livraison** : « livraison offerte » (V, page) ; pas de livraison hors Union européenne (V, conditions).
- **Paiement** : carte (Visa, MasterCard, Carte Bleue) ou chèque ; « paiement en plusieurs fois » annoncé sur la page, sans détail (V).
- **Retours** : rétractation de 14 jours, frais de retour à la charge du client ; échange ou remise à taille jusqu'à 30 jours. **Produits personnalisés ou gravés : ni remboursés ni échangés**, remise à taille possible à ± 2 tailles ; dégravage et regravage à 60 € par alliance (V).
- **Modèle du configurateur** : le modifier après coup est possible « moyennant des frais de changement […] sur devis » (V).
- **Garantie** : la page affiche « bijoux garantis à vie » (contre les vices de fabrication) ; les conditions de vente écrivent un an, pièces et main-d'œuvre (V). Les deux textes se contredisent.
- **Services** : gravure offerte, « entretien éternel », mise à taille offerte dans l'année qui suit le mariage (V).

## Confiance et service

- **Avis** : « 4.9 · 295 avis » Google ; « gagnant Wedding Awards 2026 » de Mariages.net (V, affichés par le site).
- **Ancrage** : « entreprise familiale et locale depuis 1930 » ; boutique, salons et rendez-vous (V).
- **Réserve écrite sur l'image** : « l'affichage des alliances n'est pas une photo mais une illustration, il peut donc y avoir des différences de teintes, couleurs et finitions » (V, conditions de vente).
- **Contact** : téléphone du lundi au samedi de 10 h à 19 h ; pas de chat ni de WhatsApp relevé (V).
- **Langue et devise** : français, euros (V). Le moteur existe en d'autres langues (un texte d'aide reste en allemand) (V/I).
- **Libellé du synthétique** : sans objet relevé ; le configurateur ne dit rien de l'origine des diamants (V).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande dans le parcours (V). Le fabricant n'est pas nommé sur la page ; son nom n'apparaît que dans « Standard-Profile (Breuning) » (V).

## Points forts à retenir pour JR Diamond

1. **Deux alliances configurées ensemble.** La paire est le produit par défaut ; une case, dans chaque onglet, reporte le choix sur l'autre bague ; le prix est donné par bague et pour la paire (V). C'est la bonne forme pour la page des alliances et pour l'alliance de kiddouchin.
2. **Le prix suit chaque geste, même la taille de doigt** : profil, largeur, métal, titre, sertissage (V). Le client voit ce que coûte 1 mm de largeur ou un passage du 14 au 18 k.
3. **« Détails de votre configuration »** : une fiche technique lisible (largeur, hauteur, diamètre intérieur, alliage, surface, pierres, gravure, prix) (V). C'est déjà un devis ; JR Diamond peut en faire la pièce jointe de sa demande WhatsApp.
4. **Enregistrer sous un nom, recharger par identifiant, imprimer en PDF** (V). Utile pour un achat à deux, sans compte.
5. **La gravure se lit dans la 3D** dès la saisie, avec symboles et écritures (V). L'atelier grave en hébreu : le montrer de la même façon.
6. **Un garde-fou avant la commande** : la fenêtre signale ce qui manque (« aucune gravure définie ») et laisse continuer (V).
7. **La commande n'est ferme qu'après un rappel** de validation des mesures (V). Honnête pour un bijou sur mesure, et proche du parcours « devis, prix confirmé, lien de paiement » retenu pour Israël.
8. **Annuler la dernière action** et vue d'une seule bague : deux petits outils qui évitent de tout recommencer (V).

## Défauts observés

1. **La 3D met 15 à 28 s à paraître** sur ordinateur (9 chargements, le plus souvent 16 à 18 s) et 17 à 19 s en affichage iPhone (V). Pendant ce temps, la page n'affiche que « Préparation de votre atelier 3D en cours… », et ce texte reste à l'écran une fois l'outil chargé (V).
2. **Un outil d'ingénieur** : profils nommés « PR_063 », titres notés « 585/- », une quarantaine de sertissages, 51 profils de plus (V). Rien ne guide un premier choix.
3. **Prix parfois en retard d'un clic** : après un changement de profil, le prix d'une des deux bagues s'est mis à jour plus tard que l'autre (V, voir « Limites »).
4. **Garantie contradictoire** : « à vie » sur la page, un an dans les conditions (V).
5. **Le métal mis en avant ne se trouve pas** : la page vante le tantale « en exclusivité » ; il n'est pas parmi les 14 métaux visibles de la liste (V ; liste peut-être incomplète à l'écran).
6. **Traduction incomplète** : « Ring-ID eingeben », « Standard-Profile », « Gold Sunrise » (V).
7. **Sur iPhone**, les six onglets se réduisent à un seul sélecteur et la zone 3D à 279 px de côté ; les prix par bague disparaissent, seul le total reste (V).
8. **Aucune origine de pierre, aucun certificat** dans le configurateur (V).
9. **L'image est « une illustration »**, selon les conditions de vente elles-mêmes (V) : l'écart avec le bijou est assumé par écrit, pas montré.
10. **Les réponses 429** ont laissé la page sans feuille de style dans notre Chromium de bureau (V). Un visiteur ordinaire ne les subit probablement pas (I) ; un visiteur derrière un réseau filtré, peut-être (S).

## Limites de l'audit

- **Écran de commande, demande et panier non franchis** : ils exigent des coordonnées. Frais de livraison, récapitulatif de commande et moyens de paiement viennent de la page et des conditions de vente.
- **Clics émis par script** dans le configurateur, faute de clic Playwright abouti ; la mise en page de bureau était dégradée par les réponses 429. Le confort réel des contrôles n'a pas été jugé.
- **Options non actionnées une à une** : titres de l'or, 3 métaux sur 13, 9 surfaces sur 15, tous les sertissages sauf un, les 51 autres profils, la hauteur, les rainures, la taille et la qualité des pierres, les collections « mémoire » et « fiançailles », fac-similé et empreinte.
- **Prix** : relevés environ une seconde après la réponse du serveur. Deux requêtes partent par clic (une par bague) ; quelques relevés mêlent donc l'ancien prix d'une bague et le nouveau de l'autre. Les totaux cités donnent un ordre de grandeur, pas une grille. Le titre retenu par défaut pour chaque métal n'a pas été relevé.
- Les listes ont été relevées par leur partie visible : une liste défilante peut contenir d'autres valeurs.
- Un texte de gravure neutre (« TEST 15.11 ») a été saisi dans le configurateur, sans envoi.
- Temps mesurés sur une machine partagée (V) : document prêt en 4,1 à 7,1 s ; zone 3D visible à 15,5 ; 16,1 ; 16,2 ; 17,2 ; 17,4 ; 17,6 ; 21,6 ; 22,0 et 27,8 s sur ordinateur, 17,2 et 19,2 s sur iPhone émulé. Chromium headless rend la 3D sans carte graphique (I).

## Sources

- Parcours : https://www.alliancier.com/configurateur-alliance-3d/ (application à l'adresse `#/configurator`)
- Moteur : https://konfigurator.breuning.de/ (requêtes de configuration et de prix) · https://assets.confmetrix.com/ (modèles 3D)
- Conditions : https://www.alliancier.com/conditions-generales-de-vente/ · règles : https://www.alliancier.com/robots.txt
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/france/alliancier/`
