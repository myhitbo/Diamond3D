# Audit : Alyans Atölyem (Istanbul)

- **Site** : https://www.alyansatolyem.com/ (fabricant d'alliances ; siège Sefaköy, boutique au Kuyumcukent, Istanbul [V : pied de page, FAQ])
- **Page de départ auditée** : https://www.alyansatolyem.com/alyansini-tasarla (« Alyansını Tasarla », constructeur 3D)
- **Date** : 15/11/2026 (contrôles faits dans la session du 24/11)
- **Appareils** : Chromium ordinateur 1366×900 (parcours complet) ; affichage iPhone 13 (chargement, mise en page, débordement ; parcours non rejoué)
- **Statut** : **partiel**. Le constructeur est parcouru de bout en bout, mais **le panier n'a pas été ouvert** : `robots.txt` interdit `/sepet.php`. Le bouton de commande a seulement été actionné avec blocage des chemins interdits.
- Légende : [V] vérifié, [I] inféré, [S] supposé. `robots.txt` : `Allow: /` avec `Disallow` de `/cgi-bi`, `/arama.php`, `/yorumlar.php`, `/begendiklerim.php`, `/sepet.php`, `/odeme.php`, `/uyelik.php`, `*?filter=`. Ces chemins n'ont pas été ouverts (icônes recherche, favoris, compte, panier de l'en-tête non cliquées).
- Le moteur est un service tiers (`alyans.services.confmetrix.com`, scripts 3D `assets.confmetrix.com`) chargé dans la page [V : requêtes réseau].

## Parcours

| Étape | Options |
|---|---|
| 1. Profils (« Profiller ») | 17 profils nommés : Mira, Afrodit, Harmonia, Eros, Melodi, Venüs, Fortuna, İris, Athena, Demeter, Hera, Luna, Veritas, Royal, Ayla, Hazan, Rüya [V] |
| 2. Taille (« Alyans Ölçüsü ») | Taille et système de tailles, séparément pour l'alliance 1 et l'alliance 2 [V] |
| 3. Mesures (« Ölçüler ») | Largeur et hauteur du profil par alliance, case « Optimal oran » [V] |
| 4. Métal (« Değerli Metal ») | Une, deux, trois couleurs, libre, métal supplémentaire ; couleur et surface ; titre [V] |
| 5. Pierres (« Taşlar ») | 16 entrées de sertissage (dont « Taş yok »), origine, taille, nombre, position [V] |
| 6. Rainures et bords (« Kanallar / Kenarlar ») | 6 rainures, bords, positions [V] |
| 7. Gravure intérieure (« İç Yazı ») | Texte, symbole, police Arial, gravure laser [V] |
| Récapitulatif (« Özet ») | Tableau par alliance [V] |
| Commande (« Şimdi sipariş ver ») | Envoi d'une requête `POST /addToCart.php` ; panier non ouvert [V] |

## Contrôles vérifiés

### Barre de navigation du constructeur

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 1 à 7 (les sept étapes) | onglets | Changent le panneau de droite ; l'étape 3 est ouverte au chargement [V] | — | fonctionne |
| Önce / Sonra | boutons | Étape précédente / suivante | — | non testé (les onglets l'ont été) |
| Tasarımı sil | bouton | Non actionné | — | non testé |
| Son işlemi geri al | bouton | Non actionné (sélecteur ambigu dans le script) | — | non testé |
| Facebook'ta paylaş | bouton | Ouvrirait un service tiers (Facebook) | — | non testé |
| Yükle / Kaydet | bouton | Fenêtre : « Tasarımın adı » + « Tasarımı kaydet », et « Alyans kimliğini yükle » + « Tasarımı yükle » ; enregistrement sans compte par identifiant [V] | — | fenêtre ouverte, enregistrement non fait |
| Sayfayı Yazdır | bouton | Impression du navigateur | — | non testé |
| Main (icône) | bouton | Clic accepté, aucun contenu ajouté (sert à indiquer la rotation) [I] | — | effet non constaté |
| Loupe (zoom) | bouton | Clic accepté ; vue agrandie [I] | — | partiellement testé |
| Glisser sur le visuel | geste | Fait tourner les deux alliances en 3D [V : captures] | — | fonctionne |
| Yüzük 1 ve 2 | bouton | Bascule la vue : les deux alliances superposées ou côte à côte [V : capture] | — | fonctionne |
| X sur « Alyans 1 » / « Alyans 2 » | bouton | Supprime une alliance de la commande [I] | — | non testé |
| Tektaş / Tamtur ekle | bouton | Fenêtre « Mevcut derleme » : par pièce « Sil », « Aynısını kopyala », « Yer değiştir » ; bouton « Tektaş / Tamtur ekle » pour ajouter un solitaire ou un tour complet [V] | — | fenêtre ouverte, ajout non fait |
| Özet | lien | Fenêtre « Tasarım özeti » : profil, largeur et épaisseur, taille avec diamètre en mm, métal, rainures, bords, pierres (taille, carats, qualité), gravure, prix par alliance [V] | — | fonctionne |
| Şimdi sipariş ver | bouton | `POST /addToCart.php` ; la page reste sur le constructeur dans le test, le panier (interdit) n'a pas été ouvert [V] | prix total | requête faite |

### Étape 1 : profils (effet sur le prix, deux alliances, 14 k jaune, tailles 24 et 14)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Mira / Afrodit / Harmonia / Eros / Melodi | choix | Le visuel change de profil ; prix mis à jour | 30 252 / 28 951 / 28 849 / 29 973 / 30 223 ₺ (total des deux) | fonctionne |
| Venüs / Fortuna / İris / Athena / Demeter | choix | idem | 31 465 / 32 542 / 34 355 / 33 371 / 33 204 ₺ | fonctionne |
| Hera / Luna / Veritas / Royal / Ayla / Hazan / Rüya | choix | idem | 35 616 / 32 247 / 32 016 / 37 451 / 36 086 / 38 785 / 36 022 ₺ | fonctionne |

Les 17 profils couvrent un écart de 28 849 à 38 785 ₺ pour la même paire de bagues [V]. Le profil par défaut du récapitulatif est Demeter, mais le total affiché au chargement (29 523 ₺) ne correspond pas à Demeter (33 204 ₺) : voir « Défauts ».

### Étapes 2 et 3 : taille et mesures

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Taille alliance 1 (liste) | liste | Tailles de 5 à 29 par demi-pointure selon le système ; 24 par défaut [V] | taille 7 : 26 655 ; 16 : 28 173 ; 24 : 29 523 ₺ (total) | fonctionne : le prix suit la taille |
| Taille alliance 2 (liste) | liste | 14 par défaut | non testé | non testé |
| Système de tailles | liste | 11 entrées (Üniversal, Çap, … Rusya, Hong Kong, Türkiye) ; « Türkiye » par défaut [V] | non testé | ouverte, non changée |
| Largeur du profil | liste | 2,10 à 5,50 mm ; 3,00 par défaut [V] | 5,00 mm : 37 798 ₺ (total) | fonctionne |
| Hauteur du profil | liste | 1,00 à 2,10 mm ; 1,20 par défaut [V] | non testé | ouverte, non changée |
| Optimal oran | case | Remet le rapport largeur/hauteur « optimal » [I] | 31 356 ₺ (+1 833 ₺) | fonctionne |

### Étape 4 : métal

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Titres de l'or jaune : 8, 9, 10, 14, 18, 21, 22 K | boutons | La couleur et le titre changent ; la première lecture du prix est parfois en retard (voir Défauts) | 8 K : 17 666 ; 9 K : 19 143 ; 10 K : 20 883 ; 14 K : 29 523 ; 18 K : 38 841 ; 21 K : 50 027 ; 22 K : 53 466 ₺ | fonctionne |
| Couleur : or jaune, rouge, blanc, rose | liste | Titre 14 k conservé | blanc 28 144 ; rouge 28 091 ; rose 28 344 ; jaune 29 523 ₺ | fonctionne |
| Couleur : platine | liste | Titre 950 | 40 164 ₺ | fonctionne |
| Couleur : argent, argent plaqué or rouge, argent plaqué or vert, titane | liste | Titre 925 pour l'argent | 5 298 ; 6 104 ; 6 030 ; 7 038 ₺ | fonctionne |
| Une couleur (« Tek renk ») | choix | Sélectionné par défaut | — | fonctionne |
| Deux couleurs, trois couleurs, libre | choix | Clic accepté, aucun changement de prix ni de panneau relevé | inchangé | effet non constaté |
| Métal supplémentaire (« Ek maden ») | choix | Grisé | — | désactivé [V : capture] |
| Surface : Parlak, Dikey mat, Yatay mat, Çapraz mat, Kum matı, Çift çapraz, Buz mat, Bal peteği | liste | Liste ouverte ; 8 finitions | non testé | ouverte, non changée |
| « Alyans üzerine farklı yüzeyler uygulayın » | bouton | Non actionné | — | non testé |

### Étapes 5 à 7 : pierres, rainures, gravure

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Types de sertissage : Taş yok, Sıvama, Tırnaklı, Kanal, Enine sıvama, Enine tırnaklı, Enine kanal, Kanal (açık), Yan sıvama, Yan tırnaklı, Serbest sıvama, Düz span, Çapraz span, Badem (dikey, yatay, diagonal) | choix | 16 entrées ; 4 sont grisées (Yan sıvama, Yan tırnaklı, Badem yatay et diagonal) selon le profil [V : capture] | sans pierre 29 471 ; griffes 29 523 ; rail 29 576 ; libre 29 471 ; plat 29 837 ₺ | fonctionne |
| Origine : Doğal Pırlanta / Zirkonya / Lab-grown Pırlanta | boutons | Qualité : « G-H / VS-SI » (naturel), « DEF/VVS-VS » (synthétique), « Zirkon » (zircone) [V] | naturel +453 ; synthétique +122 ; zircone 0 ₺ (par rapport à la zircone par défaut) | fonctionne |
| Taille de la pierre | liste | 1,00 à 1,90 mm ; 1,30 par défaut [V] | non testé | ouverte, non changée |
| Forme de la pierre | liste | Yuvarlak (ronde), Prenses (princesse) [V] | non testé | ouverte, non changée |
| Nombre de pierres, rangées | liste | 1 par défaut | non testé | non testé |
| Position : Sol, Merkez, Sağ, Serbest | choix | Gauche, centre, droite, libre | gauche à droite : 31 356 ₺ (inchangé) | fonctionne |
| Rainures : V-Kanal 110°, U, convexe, carrée, carbone, perlage | choix | Seul V-Kanal a été sélectionné ; autres : sélecteur non retrouvé | V-Kanal : +210 ₺ sur l'alliance 1, +210 sur la 2 | partiel |
| Onglets « Kanallar » / « Kenarlar » | onglets | Panneau avec largeur, profondeur, surface, direction (vertical, vague), position | non testé | ouvert, non réglé |
| Gravure : « Lazer İşleme » | choix | Gravure laser | — | présent |
| Gravure : texte, « Sembol », police Arial | champ, bouton | Saisie « TEST » acceptée [V] | aucun changement | fonctionne |

## Options disponibles

- **Matières** : or 8, 9, 10, 14, 18, 21, 22 K en jaune, blanc, rouge, rose ; platine 950 ; argent 925 (nu ou plaqué or rouge ou vert) ; titane ; zirconium (en menu) [V].
- **Formes** : 17 profils d'alliance ; largeur 2,10 à 5,50 mm ; hauteur 1,00 à 2,10 mm ; 8 finitions de surface [V].
- **Pierres** : naturel, synthétique, zircone ; formes ronde et princesse ; 1,00 à 1,90 mm ; 16 entrées de sertissage ; rainures et bords [V].
- **Tailles** : 11 systèmes, dont turc, universel, russe, Hong Kong [V].
- **Gravure** : texte, symbole, une police (Arial) [V].
- **Hors constructeur** : alliances à prix fixe (exemple : un set de 2 à 28 105 ₺ barré de 37 473 ₺), « tamtur » et « tektaş » personnalisables en synthétique ou naturel, « yüzük ölçer » (mesureur de bague envoyé à l'adresse) [V : page d'accueil].

## Prix, délais, retours, garanties

- **Prix** : affiché en direct, par alliance et pour la paire, « KDV dahildir » (TVA incluse) [V]. Il suit chaque option : profil, taille, largeur, titre, métal, sertissage, origine de la pierre. La liste des postes n'est pas détaillée à l'écran ; le récapitulatif ne donne que le prix par alliance [V].
- **Délai** : « au plus 7 jours ouvrés » préparation et livraison [V : FAQ].
- **Livraison** : transporteur assuré, gratuite [V : FAQ]. Paiements affichés : non vus (panier interdit).
- **Retours** : 14 jours sans frais pour les alliances non personnalisées, mais « l'article 15 du règlement sur les contrats à distance » exclut la taille de bague et toute alliance personnalisée de la rétractation ; défaut de fabrication remplacé, 30 jours [V : https://www.alyansatolyem.com/musteri-hizmetleri/iade-degisim et https://www.alyansatolyem.com/musteri-hizmetleri/sik-sorulan-sorular]. L'exception du sur-mesure est donc **annoncée** mais pas sur l'écran du constructeur [I].
- **Garantie** : entretien et réparation gratuits à vie hors déformation, frais d'envoi à la charge du client ; pas de changement de taille sauf solitaires ; pierre tombée à renvoyer avec la bague [V : https://www.alyansatolyem.com/musteri-hizmetleri/servis-garanti].
- **Certificats** : « certificat » cité dans la garantie ; aucun certificat de pierre vu dans le constructeur [V pour la garantie, I pour le reste].

## Confiance et service

- Boutique physique (Kuyumcukent, Istanbul), téléphones et courriel en pied de page, « Danışma için randevu » (rendez-vous), chat « canlı yardım » [V : page d'accueil].
- Achat sans compte : la FAQ le dit [V]. Facebook Login est chargé dans la page (iframe) [V].
- Avis clients, photos ou vidéos de fabrication, suivi de commande : non trouvés [I].
- Langue : turc seulement [V]. Devise : livre turque [V].

## Points forts à retenir pour JR Diamond

- **Un vrai modèle 3D temps réel avec prix à chaque clic**, jusqu'à la gravure intérieure : le prix des 17 profils passe de 28 849 à 38 785 ₺ en quelques clics (preuve : mesures ci-dessus).
- **Prix par alliance et pour la paire** en bas de l'écran, avec la TVA incluse (« KDV dahildir ») : même pour un couple qui paie à deux.
- **Enregistrement d'une conception par identifiant, sans compte**, et rechargement : fenêtre « Yükle / Kaydet ». Équivalent du bouton « Partager » de JR Diamond.
- **Tableau récapitulatif complet** (profil, mm, diamètre intérieur en mm, titre, pierre en carats, gravure) avant de commander : attendu par le client de kiddouchin.
- **Échelle des titres et métaux très large** (8 à 22 k, platine, argent) avec le prix réel de chaque choix : 14 k blanc 28 144 ₺ contre 38 841 ₺ en 18 k jaune.
- **Choix naturel, synthétique ou zircone pour la pierre** avec la qualité en clair (« DEF/VVS-VS » pour le synthétique) et son effet sur le prix : +122 ₺ contre +453 ₺.
- **Ajout d'un solitaire ou d'un tour complet** à la même commande, avec copier, supprimer, échanger les pièces.
- **Mobile** : barre de prix et d'étape en bas, mise en page sans débordement (390/390) [V].

## Défauts observés

- **Chargement long** : le visuel 3D et le prix n'apparaissent qu'après 8,9 à 14,2 s sur ordinateur (3 mesures : 14,2 s, 14,9 s, 8,9 s) et 10,2 s en affichage iPhone [V]. La page est vide jusque-là (capture).
- **Prix à jour en retard** : après un clic de titre, la première lecture du prix était parfois celle de l'état précédent ; il faut attendre plus de 2 s [V : 8 K affiché à 29 523 au lieu de 17 666 ₺ à 1,8 s].
- **Prix au chargement incohérent avec le récapitulatif** : le récapitulatif annonce le profil Demeter, mais le total affiché à l'ouverture (29 523 ₺) ne correspond pas à Demeter (33 204 ₺ en le choisissant) [V]. Cause non établie.
- **Retour au jaune après un autre métal : titre 22 k** : après avoir parcouru argent et titane, choisir « Sarı Altın » a donné le titre 22 k (53 466 ₺) au lieu de 14 k [V, un essai].
- **La zircone est la pierre par défaut** : la bague de départ porte un diamant de 1,30 mm en zircone, ce qui peut tromper sur la nature de la pierre ; l'écran du récapitulatif indique « Zirkon » [V].
- **Deux, trois couleurs et libre sans effet** observable à l'écran [V : clics sans changement].
- **Pierre de 1,3 mm seulement** : le constructeur ne propose pas de gros diamant central ; il sert aux alliances, pas à un solitaire de fiançailles (le solitaire passe par des pages de catalogue) [I].
- **Pas de langue autre que le turc** [V].

## Limites de l'audit

- **Panier non ouvert** : `/sepet.php` est interdit par `robots.txt`. Frais de livraison, moyens de paiement et ligne de récapitulatif du panier non relevés. Le bouton de commande a été actionné en bloquant les chemins interdits ; seule la requête `POST /addToCart.php` est partie [V].
- Non testés : Tasarımı sil, Son işlemi geri al, Facebook, impression, suppression d'une alliance, taille de l'alliance 2, 5 rainures sur 6, bords, taille et forme de la pierre, surfaces, gravure avec symbole ou autre police.
- Parcours mobile non rejoué ; seule la page de départ a été mesurée.
- Prix en livres turques à la date du test ; ils peuvent varier avec le cours de l'or [I].

## Sources

- https://www.alyansatolyem.com/alyansini-tasarla (constructeur, contrôles et captures du 24/11/2026)
- https://www.alyansatolyem.com/ (page d'accueil, alliances à prix fixe, mesureur de bague)
- https://www.alyansatolyem.com/alyans-tasarimcisi-nasil-calisir (texte « 3D Alyans Tasarımcısı »)
- https://www.alyansatolyem.com/musteri-hizmetleri/iade-degisim, /servis-garanti, /sik-sorulan-sorular
- https://www.alyansatolyem.com/robots.txt
- Requêtes réseau relevées pendant le chargement : `alyans.services.confmetrix.com`, `assets.confmetrix.com`
