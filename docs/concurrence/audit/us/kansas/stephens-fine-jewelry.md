# Audit : Stephen's Fine Jewelry (Leawood, Kansas)

- **Site** : Stephen's Fine Jewelry (logo « Stephen Burstein Fine Jewelry, Inc »), plateforme Punchmark
- **Adresse de départ** : https://www.sfj.biz/ringsettings (constructeur « Build a Ring »)
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366x900) et affichage iPhone 13 (Playwright, Chromium), via le proxy de l'environnement cloud
- **Statut** : **partiel**. L'étape 1 (choix de la monture) est complète ; l'étape 2 (choix du diamant) renvoie 0 résultat ; l'étape 3 « n'est pas disponible » ; panier interdit par robots.txt (`Disallow: */cart`), non ouvert ; constructeur d'alliance (iframe Stuller, `jewelershowcase.com`, robots.txt `Disallow: /`) non exploré, requêtes vers ce domaine bloquées dans mes scripts.
- Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) ; **[I]** inféré ; **[S]** supposé. Les prix sont en dollars US, tels qu'affichés ; la vente finale se fait en rendez-vous, pas en ligne.

## Parcours

| Étape | Adresse | Options (toutes vérifiées sauf mention) |
|---|---|---|
| 1. Choose a Ring | `/ringsettings` | 248 montures (toutes de la marque Ever & Ever [V], images du catalogue Stuller [I]) ; 7 styles ; 4 métaux ; 8 formes de pierre ; fourchette de prix ; tri ; pagination de 24 ; vue grille ou liste |
| Fiche monture | `/ringsettings-details/engagement-rings/<nom>/<id>` | 6 vues photo, caractéristiques, taille de doigt (13 valeurs, supplément), livraison, retours, liste de souhaits, « Choose this ring » |
| 2. Choose a Diamond | `/ringsettings-diamonds?diamondshape=…&carat=…` | Natural ou Lab-Grown, forme, prix, carat, taille (cut), couleur, pureté, recherche par référence, comparaison. **0 diamant trouvé** |
| 3. Complete Ring | `/ringsettings-complete` | « not available yet » tant qu'aucun diamant n'est choisi ; non atteint |
| Rendez-vous | `/make-an-appointment` | Formulaire (nom, courriel, téléphone, jour, heure, message, code de validation) : lu, non rempli |

## Contrôles vérifiés

Ordinateur : 157 contrôles visibles listés (controls.cjs, https://www.sfj.biz/ringsettings), dont une centaine de liens de menus. iPhone : 51 contrôles (menu hamburger, filtres repliés).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| STYLES : Solitaire / Side Stone / Three Stone / Halo / Pave / Antique / Bypass | icônes (liens JS) | filtre cumulable ; une requête `async.php` renvoie 5 / 1 / 22 / 51 / 3 / 7 / 4 montures [V] ; un second clic annule le filtre | oui, par monture | OK |
| METALS : All / White Gold / Yellow Gold / Platinum / Rose Gold | pastilles | les 248 montures restent, l'image et le prix de chaque tuile changent : prix mini–maxi de la page 1 = 1 275,54–6 970,89 (tous) ; 1 169,94 (blanc) ; 1 860,75–9 196,08 (jaune) ; 1 773,63–7 334,58 (platine) ; 1 266,24–6 967,50 (rose) [V] | change | OK |
| Can be set with : Round, Princess, Emerald, Asscher, Cushion, Oval, Pear, Marquise | menu déroulant d'icônes | filtre : 174 / 173 / 173 / 170 / 173 / 173 / 129 / 144 montures ; 5 à 8 s de latence par clic [V] | non | OK mais lent |
| Setting Price Range : « No minimum » / « Unlimited » | 2 champs texte + curseur | saisie de 3 000 puis Entrée : aucune requête envoyée, liste inchangée ; curseur non testé | n/a | **sans effet à la saisie** |
| Sort by : Newest / Featured / High to Low / Low to High | liste | une requête part avec `sortSpec=lowtohigh` ou `hightolow`, mais la première monture reste à 1 705,65 $ alors que le minimum du lot est 1 275,54 $ : l'ordre ne change pas [V, inféré] | n/a | **semble sans effet** |
| Previous / Next | boutons | page 2 chargée (24 montures, 1 245,33–5 485,71 $) | n/a | OK |
| VIEW (grille / liste) | 2 icônes | non vérifié visuellement (capture `listview.jpg` non exploitée) | n/a | non testé |
| CLEAR FILTERS | bouton | remet les filtres à zéro, 248 montures | n/a | OK |
| STYLES et FILTERS (en-têtes) | boutons repliables | ouverts par défaut sur ordinateur ; repliés sur iPhone [V] | n/a | OK |
| Tuile de monture | image + titre + prix | ouvre la fiche ; icône « eye » (aperçu rapide), enveloppe (demande), cœur (liste de souhaits) visibles sur une tuile | n/a | aperçu, enveloppe et cœur non actionnés |
| Fiche : ring size (4 à 10 par demi-taille) | liste | supplément ajouté au prix : +22 $ (4 à 6,5), +19 $ (7), +28 $ (7,5 et 8), +37 $ (8,5 et 9), +46 $ (9,5 et 10) ; 1 855,80 $ devient 1 877,80 / 1 874,80 / 1 901,80 $ pour 4 / 7 / 10 [V] | change | OK |
| Fiche : galerie (6 points) | carrousel | 6 images par monture ; une vidéo (.mp4 Stuller) existe pour certaines montures dans les données (5 sur 24 en première page) [V] ; lecture non actionnée | n/a | vidéo non testée |
| Fiche : CHOOSE THIS RING | bouton | mène à `/ringsettings-diamonds?diamondshape=princess&carat=0.86-1.16` : forme et carat déduits de la monture (centre 5,5 mm, 1,00 ct) [V] | n/a | OK |
| Fiche : ADD TO WISH LIST, MY WISH LIST | liens | non actionnés (compte requis [S]) | n/a | non testé |
| Fiche : SHIPPING / RETURNS | boutons de fenêtre | fenêtres lues (voir plus bas) [V] | n/a | OK |
| Fiche : PRODUCT DETAILS, YOU MAY ALSO LIKE | accordéons | détails lus : référence, dimensions du centre, poids 3,66 g, matériau, marque [V] | n/a | OK |
| Diamants : Natural / Lab-Grown | 2 boutons | aucun n'est présélectionné ; chacun renvoie `recordsTotal: 0` [V] | n/a | **résultat vide** |
| Diamants : Shape (10), Price, Carat (0,1–20), Cut (Fair à Excellent), Color (L à D), Clarity (SI2 à F), ADVANCED | filtres | présents ; inutilisables faute de résultat | n/a | non testés (0 diamant) |
| Diamants : Search by SKU, 20/40/60/120 par page, My Selected Diamond (comparaison) | champs | présents ; non testés | n/a | non testés |
| Menu : Build a Ring / Build a Band / Start from Scratch / Remounting / Appointments / Financing / Education | liens | pages lues pour 8 d'entre elles [V] | n/a | OK |
| Menu : Bridal Consultations (`/make-a-appointment`) | lien | **404** [V, curl] | n/a | lien mort |
| Menu : Diamond Buying Guide (`/education-dimaond-buying`) | lien | **404** [V, curl] | n/a | lien mort |
| Barre haute : Call Us, courriel, Appointments, Search, My Account, My Wishlist | liens | menu Compte : Sign up, My Account, Track My Order, Wishlist, Logout [V, texte de la page] ; autres non actionnés | n/a | OK |
| Accessibilité (menu d'un fournisseur, Ctrl+F10) | bouton | présent ; non testé | n/a | non testé |
| Bandeau cookies : Decline / Accept / manage | boutons | « Decline all cookies » actionné, sans effet visible | n/a | OK |
| Newsletter (pied de page) | champ + bouton | « 10 % de remise sur le premier achat » ; non rempli (règle) | n/a | non testé |
| Panier, compte, connexion, inscription | liens | interdits par robots.txt (`*/cart`, `*/login`, `*/register`) : non ouverts | n/a | non testés |
| Modes 360°, 3D, sur la main, AR, zoom | vues | aucun relevé sur la fiche (photos et vidéo seulement) | n/a | absents [V] |
| Partager, comparer les montures, chat, WhatsApp | boutons | absents de la fiche ; « Send us a message » (`/contact`) existe ; comparaison seulement pour les diamants | n/a | absents |

## Options disponibles

- **Styles** : solitaire (5), side stone (1), three stone (22), halo (51), pavé (3), antique (7), bypass (4). Total 93 : les 155 autres montures n'ont aucun style coché [V].
- **Métaux** : tous, or blanc, or jaune, platine, or rose. Le titre en carats n'est pas un choix : il figure dans la fiche (exemple « 14K Yellow Gold ») [V]. Platine proposé.
- **Formes de montures** : rond, princesse, émeraude, asscher, coussin, ovale, poire, marquise (8). Radiant et cœur absents du filtre des montures mais présents dans la recherche de diamants [V].
- **Diamants** : naturel ou « Lab-Grown ». Forme (rond, princesse, émeraude, asscher, radiant, coussin, ovale, poire, marquise, cœur), prix, carat, taille, couleur, pureté, colonne « Lab » (certificat) [V].
- **Taille de doigt** : 4 à 10 par demi-taille, avec supplément [V]. Gravure : service en boutique (`/services/jewelry-engraving`, formulaire de rendez-vous) [V].
- **Financement** : carte SFJ Synchrony, « à demander pendant le rendez-vous » [V, `/financing-options`].
- **Pas d'option** : griffes, corps de bague, pavage, gravure en ligne, pose du diamant en ligne [V].

## Prix, délais, retours, garanties

- **Prix** : le prix de la monture (centre non inclus) est affiché sur chaque tuile, de 1 275,54 $ à 6 970,89 $ (page 1, tous métaux) ; le curseur couvre 0 à 14 999 $ [V]. Pas de décomposition : le prix change avec le métal et la taille, jamais avec la pierre faute de résultat [V]. Aucun prix de bague complète configurée.
- **Délai** : « Available in 7-10 Business Days » pour toutes les montures de la page 1 [V]. C'est le délai de la monture, pas du bijou fini [I].
- **Livraison** (fenêtre de la fiche) : États-Unis seulement, y compris APO/FPO, pas de boîte postale ; FedEx Ground 12,42 $, FedEx 2 Day 15,70 $, FedEx Overnight 28,95 $, USPS Priority 2 jours 6,95 $, USPS Express 1 jour 36,60 $, retrait gratuit en boutique [V].
- **Retours** : 15 jours après réception, articles non portés dans l'emballage d'origine ; « Personalized or custom pieces are not eligible for returns » ; retour par la poste aux frais du client, assurance conseillée ; remboursement par le moyen d'origine ou crédit en boutique [V, fenêtre RETURNS ; suite du texte non lue].
- **Garantie** : « One year free insurance » sur tout diamant libre acheté [V, `/pages/what-makes-us-better`]. Pas de garantie de monture relevée [V].
- **Paiement** : aucun moyen affiché ; panier non atteint (interdit).

## Confiance et service

- **Avis** : 4,8 sur 5 pour 66 avis Google ; 5 sur 5 pour 5 avis sur le site, de 2023 à 2026 (`/testimonials`) [V].
- **Rendez-vous** : « Mon-Sun 10am - 5pm By Appointment Only », sur place à Leawood ; formulaire de rendez-vous, téléphone (913) 385-0009, courriel, message [V].
- **Positionnement** : « See it. Touch it. Then decide. » ; « Wholesale pricing, no retail markup » ; pierres naturelles et de synthèse « sourced at wholesale » ; 5 générations, entreprise familiale depuis 1885 [V, `/pages/about-stephens-fine-jewelry`].
- **Sur mesure** : « Start a Project », « Remounting & Redesign » (pierres de famille), portfolio ; le constructeur en ligne sert à préparer le rendez-vous : « Build your ring online and bring your design to your private appointment » [V, `/jewelry/engagement-rings`].
- **Libellé du synthétique** : « Lab-Grown » (boutons de recherche, menu « Lab Grown Diamonds ») [V]. FAQ « Natural vs lab-grown » : texte non lu.
- **Langues et devises** : anglais, dollar US [V]. **Preuves de fabrication** : un portfolio ; pas de photo ni vidéo d'atelier relevées sur les pages lues ; « Track My Order » dans le menu Compte [V]. **Certificats** : « GIA-certified diamonds » annoncé ; colonne « Lab » dans le tableau [V].

## Points forts à retenir pour JR Diamond

1. **Étapes numérotées avec forme et carat déduits de la monture** : « Choose this ring » ouvre la recherche de pierre déjà réglée sur princesse, 0,86–1,16 ct (preuve : URL de l'étape 2, ci-dessus).
2. **Prix de la monture qui suit métal et taille de doigt, supplément par taille affiché dans la liste** (+19 à +46 $) : prix expliqué ligne à ligne (preuve : fiche `…/1032891`).
3. **Fenêtres Livraison et Retours sur la fiche**, avec tarifs par transporteur et règle « pièce sur mesure non retournable » (preuve : fenêtres de la fiche).
4. **Tuiles qui changent d'image et de prix quand on change de métal**, sans recharger la page (preuve : requêtes `materials=YellowGold` etc.).
5. **Argument « voir avant d'acheter »** (rendez-vous à l'atelier) et assurance gratuite d'un an sur les diamants (preuve : `/pages/what-makes-us-better`).
6. **Avis Google chiffrés sur la page** (4,8/5, 66 avis).

## Défauts observés

- **Recherche de diamants vide** : 0 résultat en naturel comme en synthétique, avec ou sans filtre (réponse `recordsTotal: 0`). Le constructeur ne peut pas aboutir ; aucune explication affichée (message « No data available in table ») [V].
- **Tri sans effet apparent** (première monture identique pour les trois tris) et **saisie du prix sans effet** [V, inféré].
- **Filtre de forme lent** : 5,6 à 7,6 s par clic [V].
- **Deux liens de menu morts** (404) et fautes de frappe (« VIEW OUR PORTOLIO », adresse `dimaond`) [V].
- Trois images d'interface (`erd-*.svg`) bloquées par le navigateur (`ERR_BLOCKED_BY_ORB`) [V].
- Les 248 montures viennent du même catalogue de fournisseur, sans lien avec le fichier de fabrication ; aucune vue 3D, aucune vérification « ce que vous voyez existe » [I].
- Aucun prix final ni paiement : « configurer » ne mène qu'à un rendez-vous [V, I].

## Limites de l'audit

- Panier, compte, connexion et paiement non ouverts (robots.txt). Pas de bouton « Ajouter au panier » sur la fiche d'une monture [V] ; sur les bagues complètes (`/jewelry/engagement-rings`, produits chargés en JavaScript) non vérifié.
- Constructeur d'alliance (iframe `sfj-frame-categoryembed.jewelershowcase.com`) non exploré : robots.txt `Disallow: /`.
- Étape 2 vide : filtres de diamants, carte comparaison et étape 3 non testés. Le résultat vide peut être temporaire [S].
- Mesure du visuel (via le proxy cloud, navigateur sans cache) : plus grand élément affiché à **676 et 808 ms** sur la liste, **640 et 896 ms** sur une fiche (ordinateur) ; **772 et 844 ms** (liste), **708 et 804 ms** (fiche) en affichage iPhone. Réseau inactif seulement après 12 à 14 s (scripts d'accessibilité et d'analyse). Une seule série de deux mesures ; l'image de tuile n'est pas isolée.
- Tri, curseur, grille/liste, vidéo de la fiche, aperçu rapide, liste de souhaits : non testés ou non concluants. Page de la FAQ : seuls les titres lus.

## Sources

Toutes lues le 15/11/2026 : https://www.sfj.biz/robots.txt ; https://www.sfj.biz/ringsettings ; https://www.sfj.biz/ringsettings-details/engagement-rings/french-set-halo-style-engagement-ring/1032891 ; https://www.sfj.biz/ringsettings-diamonds?diamondshape=princess&carat=0.86-1.16 ; https://www.sfj.biz/api/async.php?t=grid&m=fetch&a=get_results (données de la liste) ; https://www.sfj.biz/api/async.php?t=diamonds&m=getDiamonds&a=get_diamonds ; https://www.sfj.biz/financing-options ; https://www.sfj.biz/pages/faqs ; https://www.sfj.biz/pages/what-makes-us-better ; https://www.sfj.biz/testimonials ; https://www.sfj.biz/pages/custom-jewelry ; https://www.sfj.biz/pages/complete-rings ; https://www.sfj.biz/jewelry/engagement-rings ; https://www.sfj.biz/pages/about-stephens-fine-jewelry ; https://www.sfj.biz/make-an-appointment ; https://www.sfj.biz/services/ring-resizing ; https://www.sfj.biz/services/jewelry-engraving.
