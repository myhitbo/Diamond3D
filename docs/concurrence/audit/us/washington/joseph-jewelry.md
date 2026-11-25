# Audit : Joseph Jewelry (Seattle et Bellevue, Washington)

- **Site** : Joseph Jewelry. **Adresse** : https://www.josephjewelry.com/ (départ : /design-your-own-engagement-ring ; fiche configurable : /engagement-rings/leaf-prongs-pear-shape-diamond-engagement-ring-108705).
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1280 x 900) et affichage iPhone 13.
- **Statut** : **partiel**. Le « panier » est interdit par le robots.txt (`Disallow: /checkout/`, `/members/`) : le bouton « Add to cart » n'a pas été cliqué, le panier n'a donc pas été vu.
- Légende : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Page de départ « Design your own engagement ring » : formulaire de demande en 3 étapes, **sans prix ni visuel** [V] | 1 Setting : stade du projet, 7 métaux, 9 styles, 6 types d'alliance assortie, budget, taille de doigt. 2 Gemstone : type de pierre, forme, budget, poids. 3 Message libre, destinataire, nom du partenaire, bouton d'envoi (non cliqué) |
| Fiche bague configurable avec prix (ex. n° 108705) [V] | Métal (7), taille US (24), pierres d'accompagnement (3 qualités), 7 vues photo + vidéo, « Customize this design », « Request a quote », « Add to cart » |
| Recherche de diamants /diamonds-search [V] | Forme (10), prix, carat, coupe, couleur, pureté, filtres avancés (symétrie, polissage, certificat, table, profondeur, fluorescence), tri, « Quick Save » |
| Panier | Non vu : /checkout/cart.php interdit [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| designStage | liste | Stade du projet (3 choix : idée claire, photos d'inspiration, style général) [V] | aucun | présent, non envoyé |
| metal (formulaire) : 14k/18k rose, jaune, blanc, platine | 7 radios | Choix enregistré dans la demande ; aucun aperçu | aucun | fonctionne [V] |
| style : Classic, Contemporary, Floral, Halo, Vintage, Solitaire, Three Stone, Other, Not sure | 9 radios | idem | aucun | présent [V] |
| weddingRing : Matching, Contrasting, Contoured, Interlocking, Other, Not sure | 6 radios | idem | aucun | présent [V] |
| budget : 1 000 $ à 30 000 $+ | 9 radios | idem | aucun | présent [V] |
| size + sizeRange (curseur) | texte + curseur | Taille de doigt, défaut 6 | aucun | présent [V] |
| NEXT / Back | boutons | Passe d'une étape à l'autre sans rechargement ; étape 2 puis 3 atteintes [V] | aucun | fonctionne |
| gemstone : Diamond, Lab Created Diamond, Moissanite, Emerald, Sapphire, Ruby, Morganite, Other, None | 9 radios | Choix de la pierre dans la demande | aucun | fonctionne [V] |
| gemstoneShape : Round, Princess, Marquise, Pear, Cushion, Oval, Radiant, Trillion, Asscher, Heart, Emerald, Other | 12 radios | idem | aucun | fonctionne [V] |
| gemstoneBudget (500 $ à 30 000 $+), gemstoneSize (0,50 à 3,00 ctw+) | radios | idem | aucun | présents [V] |
| details, recipient, sigOther, bouton d'envoi | champs | Formulaire de contact ; **non rempli, non envoyé** | aucun | non testé : règle « aucun formulaire » |
| Choix de métal (fiche) : 14k/18k blanc, jaune, rose, platine | 7 radios | Recharge la page avec `?finish[0]=…` ; l'image change de teinte (flat-W, -Y, -R) ; « Your selections » mis à jour [V] | 14 k 3 995 $ ; 18 k 5 115 $ ; platine 5 452 $ [V] | fonctionne |
| Taille US (3 à 8,75 par 0,25) | 24 radios | Mise à jour du récapitulatif ; recharge la page [V] | aucun effet (testé 3, 5,75 et 8,75) | fonctionne |
| Pierres d'accompagnement : naturel E-F VS / naturel G SI1 / synthétique E-F VS | 3 radios | Mise à jour du récapitulatif [V] | platine : 5 452 $ / 5 380 $ / 4 880 $ [V] | fonctionne |
| Vues photo : face, trois-quarts, profil, de face, dessus, sur la main | 6 boutons | Change l'image principale (fichiers `-flat-`, `-3qtr-`, `-side-`, `-front-`, `-top-`, `-hand-`) [V] | aucun | fonctionne |
| Vidéo « of the original design » | bouton | Charge un fichier .mp4 (108705.mp4) [V] | aucun | fonctionne (lecture non regardée) |
| Agrandir la photo | bouton | Clic sans effet visible en 3 s (délai dépassé) [V] | aucun | **échec du test** |
| Onglets Description, Customize, Quality, Warranty | liens d'ancre | Affichent le texte correspondant [V] | aucun | fonctionnent |
| « Customize this design » / « Request a quote » | liens | Mènent à /request.php?customize=…&metal=14&size=5.75… (formulaire, non ouvert) [V] | aucun | non suivi |
| « Find a center diamond » | lien | Mène à /diamonds-search [V] | aucun | fonctionne |
| « Save to favorites » | lien | Mène à /add-to-favorites.php ; compte requis [I] ; /members/ interdit | aucun | non testé |
| « Add to cart » | bouton | **Non cliqué** : panier /checkout/ interdit par robots.txt | aucun | non testé |
| « Financing available », « Find your ring size », « Talk with a designer », « Read the shipping and custom-order terms » | liens | Pages lues (financement, FAQ, contact, politique) [V] | aucun | fonctionnent |
| Recherche de diamants : prix, carat, coupe, couleur, pureté, certificat (GIA, AGS), symétrie, polissage, table, profondeur, fluorescence | filtres | **Présents et lus, non actionnés un à un** ; 17 561 diamants affichés [V] | prix de 1 000 $ à 70 944 $ vus dans la liste | non testés |
| Fiche diamant /diamond.php?id=… | page | Détail avec explications coupe et pureté [V] | prix affiché | lue |
| Menus, pied de page, avis Google/Yelp, réseaux sociaux | liens | Présents [V] | aucun | non suivis |

## Options disponibles

- **Métaux** : or 14 k et 18 k en jaune, blanc, rose ; platine. Pas d'argent. [V]
- **Pierres d'accompagnement** : naturelles E-F VS ou G SI1 ; synthétiques E-F VS (libellé « Lab-grown »). [V]
- **Pierre centrale** : vendue séparément (« Center stone sold separately ») ; diamant, synthétique, moissanite, émeraude, saphir, rubis, morganite dans la demande ; 10 formes de diamant en recherche. [V]
- **Tailles** : US 3 à 8,75. **Gravure** : service de gravure à la main (lien de pied de page) [V], pas de champ de gravure dans le parcours.
- **Vues** : 6 photos fixes, vidéo du modèle d'origine. **Pas** de 3D, 360° ni essai en réalité augmentée [V]. Un curseur de teint de peau signalé par l'inventaire n'a pas été retrouvé [S].

## Prix, délais, retours, garanties

- **Prix** : « Setting price » affiché et recalculé selon métal et pierres d'accompagnement ; non décomposé (aucun détail métal / main-d'œuvre / pierres) ; pierre centrale à part. Exemple n° 108705 : 3 995 $ (14 k jaune) [V]. Le platine en synthétique est 572 $ moins cher que le naturel E-F VS [V].
- **Délai** : fabrication « 6 à 8 semaines après validation du design », plus longue pour les pièces complexes (FAQ, https://www.josephjewelry.com/guide/frequently-asked-questions.php) [V]. Aucun délai affiché sur la fiche. Pour JR Diamond (14 jours ouvrés) c'est un avantage net [I].
- **Retours** : sur mesure, **aucun remboursement « en aucun cas »** ; refabrication gratuite si insatisfait à la livraison. Articles en stock : 30 jours, 10 % de frais de restockage possibles (https://www.josephjewelry.com/guide/custom-design-policy.php) [V]. La fiche 108705 est un modèle de référence sur mesure [I].
- **Garantie** : à vie contre les défauts de fabrication, mais inspection et signature **tous les 6 mois** obligatoires, sous peine d'annulation ; hors de l'État, frais d'envoi aller-retour à la charge du client [V]. Jusqu'à 600 $ de franchise d'assurance pour une pierre perdue achetée chez eux [V].
- **Livraison** : gratuite 2 à 5 jours aux 50 États, assurée à 100 % ; FedEx International Priority hors États-Unis (2 à 4 jours) ; international « à coordonner » [V].
- **Financement** : PayPal 6 mois sans intérêt, Affirm 3/6/12 mois, Wells Fargo 6 mois (Washington seulement) ; cartes, PayPal, chèques, espèces (https://www.josephjewelry.com/guide/jewelry-financing.php) [V].
- **Langues, devises** : anglais, dollar seulement [V].

## Confiance et service

- Deux salles (Seattle, 1413 4th Ave ; Bellevue, 10129 Main St), téléphones affichés, prise de rendez-vous, contact, « Talk with a designer » [V]. Pas de chat ni WhatsApp relevés.
- Avis : liens « 5 Star Google Reviews » et Yelp en pied de page, sans notes détaillées sur les pages lues [V].
- Preuves de fabrication : le processus est décrit (estimation gratuite, acompte, **CAO 3D et rendus**, **maquette en cire** montrée en salle ou expédiée, approbation, production) [V, onglet Customize]. Un « espace projet privé en ligne » avec rendus et approbations est cité (FAQ) [V]. Pas de photos ni vidéos de fabrication de la commande du client [S : non vu].
- Certificats : GIA et AGS en filtre de recherche (naturel) ; pas de filtre IGI ni de recherche de synthétique relevée [V].

## Points forts à retenir pour JR Diamond

1. **Prix de monture recalculé en direct** selon métal et pierres d'accompagnement, avec l'option synthétique : preuve, 3 995 $ → 5 115 $ (18 k) → 5 452 $ (platine) → 4 880 $ (synthétique), adresse de la fiche 108705 [V].
2. **Récapitulatif « Your selections »** sur la fiche, qui rappelle chaque choix et le prix [V].
3. **Configuration dans l'adresse** (`?finish[0]=pt:W&size=5.75&meleeOfferID=1`) : lien partageable, déjà un acquis du prototype [V].
4. **Photo sur la main et vidéo du modèle d'origine** : 6 vues et un .mp4 [V].
5. **Processus de fabrication expliqué** (CAO, cire, approbation) avec onglets Quality et Warranty [V].
6. Livraison gratuite assurée, financement en trois formules, pierre de remplacement (franchise 600 $) [V].

## Défauts observés

- Le formulaire de départ ne montre ni prix ni visuel ; la configuration réelle est sur la fiche modèle [V].
- Chaque choix recharge la page entière (navigations vues sur 12 clics) [V].
- Prix des pierres d'accompagnement non détaillé ; pierre centrale hors prix, donc pas de total [V].
- Aucun remboursement sur mesure ; garantie conditionnée à une visite tous les 6 mois, pénalisante hors Washington [V].
- Bouton « agrandir » sans effet observé ; pas de 3D ni 360° [V].
- Délai de 6 à 8 semaines, 4 à 5 fois plus long que le nôtre [V].

## Limites de l'audit

- Panier, « Add to cart », favoris et compte : interdits par robots.txt (/checkout/, /members/), non ouverts. Frais, délai et moyens de paiement du panier non vus ; ceux cités viennent des pages de politique.
- Aucun formulaire envoyé ; filtres de la recherche de diamants lus mais non actionnés ; lecture de la vidéo non vérifiée.
- Une seule fiche configurable testée (108705) ; autres modèles, bagues d'homme et alliances non testés.
- Temps d'apparition du visuel principal : ordinateur 848 ms depuis la navigation (DOM 785 ms, chargement complet 1 454 ms) ; iPhone 951 ms (DOM 891 ms, complet 1 600 ms). Mesure unique, connexion de la machine d'audit.

## Sources

- https://www.josephjewelry.com/design-your-own-engagement-ring (formulaire 3 étapes, relevé de 92 contrôles ordinateur, 63 mobile)
- https://www.josephjewelry.com/engagement-rings/leaf-prongs-pear-shape-diamond-engagement-ring-108705 (fiche, 135 contrôles ordinateur, 105 mobile)
- https://www.josephjewelry.com/diamonds-search (380 contrôles) et /diamond.php?id=144169093
- https://www.josephjewelry.com/guide/custom-design-policy.php ; /guide/jewelry-financing.php ; /guide/frequently-asked-questions.php
- https://www.josephjewelry.com/robots.txt (lu le 15/11/2026)
- Captures : scratchpad `audit/us/joseph-jewelry/` (hors dépôt)
