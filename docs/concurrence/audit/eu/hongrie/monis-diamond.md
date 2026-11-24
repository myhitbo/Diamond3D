# Audit : Moni's Diamond (Hongrie)

- **Site** : Moni's Diamond (société S-Gold Kft., Budapest et Balatonfüred), https://www.monis.hu/
- **Page de départ** : https://www.monis.hu/egyedi-gyemant-eljegyzesi-gyuru-tervezo ; le configurateur est servi par https://monis-konfigurators.netlify.app (contrôlé AUTORISÉ, pas de robots.txt) et le moteur par `api.3d-designer.shop`, locataire `juwelier-plus-bridal` (AUTORISÉ) [V : code de la page du widget]
- **Date** : 15/11/2026 (essais menés sur la machine d'audit, horloge du 24/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900) ; iPhone 13 (émulation Playwright). Rendu 3D logiciel (SwiftShader) : les temps sont pessimistes.
- **Statut** : **partiel**. Configurateur parcouru jusqu'à la gravure ; panier de la boutique atteint mais vide ; ajout au panier du configurateur non testé.
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé. Prix en forint TTC.

## Parcours

| étape | libellé du configurateur | options observées |
|---|---|---|
| 1 | Gyémánt (diamant) | 6 formes ; 6 types de pierre ; curseurs pureté, taille, couleur ; liste de pierres réelles avec prix et certificat |
| 2 | Fej (tête, monture) | 36 modèles en 5 familles : Classic 7, Halo 7, Exquisite 8, Unique 7, Royal 7 |
| 3 | Gyűrűprofil (corps de bague) | 35 profils en 6 familles : Timeless 7, Romance 5, Glamour 8, Baroque 5, Elegant 5, Fancy 5 ; case « Emelje-fel » ; recherche par code |
| 4 | Ötvözet és szín (alliage et couleur) | 4 alliages ; 3 couleurs pour la monture ; 3 couleurs pour le corps (deux tons possibles) |
| 5 | Gyűrűméret (taille) | taille européenne en mm, équivalents US, JP, UK, circonférence et diamètre intérieurs |
| 6 | Gravírozás (gravure) | interrupteur, texte, police, emoji ; message « Az egyedi ékszered most már megrendelhető ! » |

## Contrôles vérifiés

Mesure : listes relevées sur `fr1d.json` (474 contrôles de la page, 151 dans le widget, ordinateur). « Effet » : constaté dans la même session.

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Bandeau cookies « ELFOGADOM » / « Beállítások » | bouton | ferme le bandeau | — | fonctionne [V] |
| HU / EN | liste | langue du site ; le widget reste en hongrois | — | non testé dans le widget |
| Ft (HUF) / EUR | bascule | présente dans l'en-tête de la boutique | — | non testé |
| Kerek, Princess, Smaragd, Oval, Körte, Párna (6 formes) | figure | filtre la liste de pierres ; l'image 3D de la pierre suit | liste filtrée | fonctionne [V] ; le nombre de lignes varie par paliers de 30, nombre exact non fiable |
| Fehér, Sárga, Rózsaszín Gyémánt, Smaragd, Zafír, Rubin (6 types) | lien | change la liste et la teinte de la pierre | liste filtrée | fonctionne [V] |
| Tisztaság FL–I3 (curseur double) | curseur | filtre par pureté | — | présent [V] ; plage 0–9, non actionné |
| Méret (karát) 0,3–3 ct | curseur double | filtre par poids | — | présent [V] ; plage 0–10, non actionné |
| Szín D–K | curseur double | filtre par couleur | — | présent [V] ; non actionné |
| Szűrő törlése | bouton | remet les filtres à zéro | — | fonctionne [V] |
| En-têtes Karát, Gyém., Szín/Tisz., Ár, Tan. | tableau | colonnes ; pas de tri constaté | — | présent [V] |
| Ligne de pierre (clic) | ligne | choisit la pierre, la pierre apparaît en 3D | « Központi kő » prend le prix de la ligne | fonctionne [V] |
| « View Certificate » | lien | ouvre un rapport GIA, onglet nouveau (`gia.edu/report-check?reportno=…`) | — | lien présent [V] ; non ouvert (site tiers) |
| Étapes 1 à 6 (icônes à droite) | onglet | passent d'une étape à l'autre ; étape 2 et suivantes actives après le choix d'une pierre | l'anneau se chiffre à l'étape 3 | fonctionne [V] |
| Têtes H1001 à H5055 (36) | lien image | change la monture sur le modèle 3D | modifie « Eljegyzési gyűrű » | actionné pour 5 modèles : prix lu avec retard [V] |
| Profils S1001 à S6038 (35) | lien image | change le corps de bague | S2007 : 647 110 ; S3011 : 652 270 ; S5021 : 702 030 ; S6020 : 1 079 130 Ft (avec la tête H5006) | fonctionne [V] |
| Emelje-fel | case | modifie le profil (relevé) ; effet visuel non décrit | 694 160 Ft dans l'essai | fonctionne [V] ; sens exact [S] |
| Recherche « Termékkód » | champ | cherche un modèle par code | — | présent [V] ; non testé |
| Arany 375 / 9K, 585 / 14K, 750 / 18K, Platina 950 | figure | change l'alliage, le prix de la bague et la date de livraison | 834 130 à 1 055 760 Ft selon l'essai (profil et couleur différents) | fonctionne [V] ; effet par option non isolé (voir limites) |
| Foglalat színe : Fehér, Sárga, Rózsaszín | figure | couleur de la monture | change légèrement le prix (861 750 puis 834 130 Ft) | fonctionne [V] |
| Gyűrűprofil színe : Fehér, Sárga, Rózsaszín | figure | couleur du corps de bague | — | présent [V] ; non isolé |
| Gyűrűméret : bouton « EU méret (mm) » | liste | taille 55 par défaut ; affiche US 7, JP 15, UK N | — | présent [V] ; autres valeurs non essayées |
| « Hogyan állapítható meg a gyűrűméret ? » | lien | guide de taille | — | présent [V] ; non ouvert |
| Gravírozás nélkül | interrupteur | active ou coupe la gravure | — | présent [V] ; saisie non aboutie (script) |
| Gravírozás (20 caractères max.) | champ texte | texte | — | présent [V] ; non saisi |
| Betűtípus (« 123 Love ABcd ») | liste | police | — | présent [V] ; non testé |
| Emoji (3 boutons et une liste) | boutons | symboles de gravure | — | présent [V] ; non testé |
| Előnézet « 3D » (haut gauche) | étiquette | mode de vue 3D, seul mode | — | présent [V] |
| Visszavonás (annuler) | icône | revient en arrière | — | présent [V] ; clic non concluant |
| Visszaállítás (réinitialiser) | icône | remet la bague par défaut : 475 910 + 1 213 049 = 1 688 959 Ft, livraison 16 déc. | — | fonctionne [V] |
| Info (i) | icône | — | — | présent [V] ; non testé |
| PDF letöltése | icône | génère un PDF de la bague | — | présent [V] ; non téléchargé |
| Kívánságlista (cœur) | icône | liste de souhaits | — | présent [V] ; non testé |
| Plein écran | icône | agrandit le visuel | — | présent [V] ; non testé |
| Fenêtre de rendez-vous (`booked4.us`, S-Gold Kft.) | intégré | calendrier de rendez-vous sous le configurateur | — | présent [V] ; non ouvert |
| Ajout au panier du configurateur | événement | le widget envoie `addToCartButtonClicked` à la page hôte [V : code] | — | **non testé** : aucun bouton visible dans le widget seul |
| Page produit « Sárga arany Gyémánt Eljegyzési gyűrű » : Kosárba | bouton | le premier bouton trouvé n'est pas celui de la fiche ; panier resté vide (« Nincs termék a kosárban ») | 229 900 Ft | **échec du test** ; fonctionnement du bouton [S] |

## Options disponibles

- **Formes** : ronde, princesse, émeraude, ovale, poire, coussin.
- **Pierres** : diamant blanc, jaune, rose (couleur), émeraude, saphir, rubis.
- **Têtes** (36) : H1001, H1002, H1040, H1041, H1042, H1045, H1052 ; H2003, H2004, H2007, H2050, H2053, H2054, H2055 ; H3005, H3008, H3009, H3010, H3011, H3012, H3023, H3044 ; H4014 à H4019, H4051 ; H5006, H5013, H5020, H5021, H5022, H5024, H5043.
- **Profils** (35) : S1001 à S1006, S1028 ; S2007, S2009, S2010, S2034, S2035 ; S3011 à S3016, S3026, S3033 ; S4017, S4018, S4019, S4036, S4037 ; S5021 à S5024, S5027 ; S6020, S6029, S6030, S6032, S6038.
- **Alliages** : or 9 k (375), 14 k (585), 18 k (750), platine 950.
- **Couleurs** : blanc, jaune, rose, indépendantes pour la monture et le corps.
- **Gravure** : texte (20 caractères), police, emoji ; pas de gravure possible.
- **Absent** : choix du carat sur la bague (le carat vient de la pierre choisie), diamant synthétique, forme « cœur », pavé, taille de la pierre en mm.

## Prix, délais, retours, garanties

- **Décomposition** : trois lignes, « Eljegyzési gyűrű » (monture, corps et métal), « Központi kő » (pierre), « Összesen ». Mention « Az árak tartalmazzák az ÁFÁ-t » (TVA comprise) [V].
- **Exemple** (pierre ronde blanche 0,40 ct E/VS1, réglages par défaut) : bague 475 910 + pierre 1 213 049 = **1 688 959 Ft** [V]. Pierres blanches rondes de la liste : de 145 089 Ft (0,30 ct G/SI2) à 4 878 079 Ft (1,58 ct G/SI1) ; 0,50 ct G/SI1 : 391 929 à 452 359 Ft [V].
- **Pas de prix avant le choix** : « -- » partout tant qu'aucune pierre et aucun corps ne sont choisis ; le prix de la bague n'apparaît qu'à l'étape 3 [V]. Le prix se met à jour avec quelques secondes de retard [V].
- **Délai affiché** : une date d'expédition estimée (« DEC 8, 2026 » pour la pierre seule, **« DEC 16, 2026 »** après le choix de la bague, **« JAN 26, 2027 »** après un changement d'alliage) [V]. Date au format anglais dans une interface hongroise. Cause du saut à 63 jours non établie [S].
- **Mention de stock** : « * = entrepôt externe, disponibilité 98 % ; une pierre équivalente peut remplacer celle choisie sans surcoût » [V].
- **Livraison** (page `en/shop_contact.php`, extrait de recherche) : DHL, assuré ; de 0 à 500 000 Ft : 10 000 Ft TTC ; de 500 001 à 2 000 000 : 20 000 Ft ; au-delà de 2 000 001 : gratuit. Par MPL seulement avec valeur déclarée, prix sur demande. Retrait en boutique gratuit [V].
- **Paiement affiché** : paiement en boutique (espèces, carte), carte en ligne (SimplePay), Klarna (jusqu'à 1 500 000 Ft) [V]. Les moyens utilisables pour une bague configurée ne sont pas vérifiés [S].
- **Retours et sur mesure** : page « Vásárlási feltételek » et lien « Elállási… » en pied de page ; texte non lu (extrait de recherche générique). Non vérifié.
- **Certificats** : « Diamonds Graded by GIA » en pied de page ; lien « View Certificate » vers un rapport GIA par pierre [V]. Offre en diamants naturels : « természetes gyémántokkal » [V].
- **Garantie** : non lue.

## Confiance et service

- Deux boutiques (Budapest, Balatonfüred), téléphone +36 70 427 0053, réservation de rendez-vous par l'outil `booked4.us` [V].
- Mentions légales sur la page de contact : société, numéro d'impôt, registre [V : extrait de recherche].
- Le texte de page annonce « plus de 1 500 combinaisons : 6 tailles de diamant, 58 montures, 30 profils, 4 alliages » ; le widget en montre **36 têtes et 35 profils** [V] : écart non expliqué.
- Avis clients : un module Trustindex est prévu dans le code de la page ; contenu non lu [I].
- Preuves de fabrication (photos, vidéos d'atelier, suivi de commande) : aucune trouvée [V sur les pages lues].
- Marques de fabricants tiers (Niessing, Meister, Rauschmayer) pour les alliances ; le configurateur est celui d'un éditeur tiers [V].

## Points forts à retenir pour JR Diamond

1. **Pierres réelles à prix réel dans le configurateur** : liste de pierres avec carat, couleur/pureté, prix et lien vers le certificat GIA, la pierre choisie remplit la ligne « Központi kő » (preuve : lignes lues, exemple 1 688 959 Ft).
2. **Prix décomposé en trois lignes, TVA indiquée** (preuve : bloc de prix du widget).
3. **Date de livraison calculée à chaque option** (preuve : « DEC 8 », « DEC 16 », « JAN 26 »), même si le saut n'est pas expliqué.
4. **Équivalences de taille US, JP, UK et mesures intérieures** affichées sous la taille (preuve : étape 5).
5. **Fiche PDF de la configuration, liste de souhaits, annulation, réinitialisation** (preuve : icônes du widget).
6. **Gravure avec police et emoji, limitée à 20 caractères** (preuve : étape 6).
7. **Rendez-vous réservable depuis la page** (preuve : fenêtre `booked4.us`).

## Défauts observés

- **Aucun prix tant que la configuration n'est pas complète** (« -- ») [V].
- **Date d'expédition au format anglais**, et saut inexpliqué à janvier 2027 [V].
- **Annonce de 58 montures et 30 profils non conforme** aux 36 et 35 du widget [V].
- **Pas de diamant synthétique** : l'outil ne propose que du naturel ; l'écart avec le marché hongrois du synthétique (NOORDIA, Ékszerpalota) est total [V].
- **Pas de preuve d'atelier** : le texte vend des marques et un service de conseil, pas la fabrication [V].
- **Temps de chargement** : visuel principal (canvas plus images) en **11,7 à 12,2 s** sur ordinateur et **15,5 s** en affichage iPhone ; la page hôte pèse 492 images et 476 boutons, ; le navigateur a fermé la page hôte en cours d'essai deux fois [V ; rendu logiciel].
- **Bouton « Kosárba » de la fiche non fiable** dans l'essai (voir tableau) [V].
- **Mobile** : pas de défilement horizontal (largeur 390 = largeur de page), 187 contrôles dans le widget [V].

## Limites de l'audit

- Je n'ai pas testé l'ajout au panier du configurateur dans la page hôte (fermeture répétée du navigateur sur la page lourde) ni le panier avec une bague configurée ; le panier de la boutique a été atteint à vide.
- Les prix par option ne sont pas isolés : le prix affiché retarde de plusieurs secondes sur l'action, les relevés en rafale se décalent. Les chiffres cités sont ceux lus après attente ; l'écart « profil » vs « alliage » reste approximatif.
- Info, PDF, liste de souhaits, annulation, plein écran, police et emoji n'ont pas été exercés (clics sans effet visible dans mon script, ou volontairement évités : PDF).
- Les filtres curseurs (pureté, taille, couleur) n'ont pas été déplacés. Le nombre de pierres filtrées n'est pas fiable (liste chargée par paliers).
- Orbite à la souris, zoom, AR et vue « sur la main » : aucun contrôle correspondant dans la liste ; non testé au-delà.
- Les pages « Vásárlási feltételek », garantie, retours et le contenu des avis n'ont pas été lues.
- Données de livraison et de paiement : extraits de résultats de recherche de la page de contact, non relues en navigateur.
- Temps mesurés sur une machine partagée avec d'autres audits, rendu SwiftShader : ordre de grandeur seulement.

## Sources

- https://www.monis.hu/egyedi-gyemant-eljegyzesi-gyuru-tervezo (page, widget `monis-konfigurators.netlify.app`, consulté 24/11/2026, contrôles actionnés)
- https://www.monis.hu/rauschmayer-karikagyuru-eljegyzesi-gyuru (texte de page, extrait de recherche)
- https://www.monis.hu/en/shop_contact.php (livraison, paiement : extrait de recherche)
- https://www.monis.hu/online-store , https://www.monis.hu/gyemant-eljegyzesi-gyuru (catalogue, filtres : extrait de recherche)
- https://www.monis.hu/Sarga-arany-Gyemant-Eljegyzesi-gyuru (fiche produit, panier vide https://www.monis.hu/shop_cart.php)
- robots.txt : AUTORISÉ pour monis.hu, `monis-konfigurators.netlify.app`, `api.3d-designer.shop` (contrôle `robots.cjs`)
- Captures et scripts : `scratchpad/audit/eu/monis/` (hors dépôt)
