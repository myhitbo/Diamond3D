# Audit : Green Lake Jewelry Works (Seattle et Bellevue, Washington)

- **Site** : Green Lake Jewelry Works. **Adresse** : https://www.greenlakejewelry.com/ (départ : /new-design.aspx).
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1280 x 900) et affichage iPhone 13.
- **Statut** : **complet** pour le constructeur (jusqu'au récapitulatif, non envoyé) ; panier **non applicable** : le site n'a pas de panier, la vente passe par un devis [V].
- Légende : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé. robots.txt : seuls /maintain/, /test/, /feed/, /test3/, /fonts/, /fb/, /blog/ interdits ; aucune adresse interdite ouverte.

## Parcours

Constructeur « Design your own jewelry » (new-design.aspx), 9 écrans, sans rechargement de page, **sans visuel ni prix** [V].

| Étape | Options |
|---|---|
| 1 Pierre | Choose Main Gems / Get Help with Gems / No Main Gems ; galeries Natural Diamonds, Color Diamonds, Lab Diamonds, Rustic Diamonds, Blue Sapphires, Montana Sapphires, Color Gems, Natural Fancy Sapphires ; champ « Gemstone Notes » |
| 2 Type de bijou | Engagement / Gemstone Ring, Wedding Ring / Band, Other Jewelry |
| 3 Type de bague | Solitaire, 3 Stone, Halo, Side Stone, Free Form, Wrap, Tapered, Band w/gem, None of the above |
| 4 Vue de dessus | Texte libre (« Customize Top View ») |
| 5 Vue de face | Forme du jonc : Round, Euro Square, Euro Round, Square, Square Round ; notes |
| 6 Vue de profil | Texte libre |
| 7 Gravure et sertissage | Gravure à la main : Custom, Scroll, Geometric, Floral, Motif, Wheat ; gravure face latérale / extérieure / intérieure ; sertissage : Bead, French, Scalloped, Flush, Channel, Micro-Bezel, Shared Prong, Pavé ; filigrane : None / Some / Lots |
| 8 Métal et taille | 11 métaux ; taille 3 à 16 ; budget et histoire (texte) ; envoi d'un croquis |
| 9 Récapitulatif | Métal, jonc, gravure ; case d'inscription à la lettre d'information ; « I have an account. Sign in instead » ; bouton d'envoi (**non cliqué**) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Choose Main Gems / Get Help with Gems / No Main Gems | 3 radios | Choix de l'étape 1 ; « No Main Gems » + Next mène à l'étape 2 [V] | aucun | fonctionne |
| Natural Diamonds, Color Diamonds, Lab Diamonds, Rustic Diamonds | liens | Galeries de pierres (Lab : 511 pièces, forme, couleur L+ à D, pureté SI2 à FL, carat, prix, coupe, 11 tris, comparer) [V] | prix des pierres affichés (ex. 409 $ à 4 027 $) | fonctionnent |
| Blue Sapphires, Montana Sapphires, Color Gems, Natural Fancy Sapphires | liens | Mènent à stone_gallery.aspx (non ouverts) [V] | — | non testés |
| Consult a Gem expert now | lien | Mène à ask_a_designer.aspx?ImageID=81744 (formulaire non rempli) [V] | aucun | non suivi |
| Gemstone Notes | zone de texte | Pierres fournies par le client | aucun | présent |
| Next / Previous | boutons | Navigation entre 9 écrans, sans rechargement [V] | aucun | fonctionnent |
| Engagement / Wedding / Other | radios (étiquettes) | Écran suivant ; la liste des types de bague s'affiche [V] | aucun | fonctionne |
| Solitaire, 3 Stone, Halo, Side Stone, Free Form, Wrap, Tapered, Band w/gem | 8 choix | Un seul testé (Solitaire) : écran suivant [V] | aucun | présents |
| Zones « Top / Front / Side View » | textes libres | Description écrite, sans schéma interactif relevé [V] | aucun | présents |
| Jonc : Round, Euro Square, Euro Round, Square, Square Round | choix | Reflété dans le récapitulatif (Shank : Round) [V] | aucun | fonctionne |
| Gravure (6 styles, 3 emplacements), sertissages (8), filigrane (3) | cases et textes | Reflétés (Engraving : Custom) [V] | aucun | fonctionnent |
| Métal : 14 kt jaune, 18 kt jaune, 14 kt rose, 18 kt rose, 14 kt blanc, 14 kt blanc palladié, 18 kt blanc palladié, platine, 22 kt jaune, multicolore, mokume gane | liste | Récapitulatif : « 14kt Yellow Gold » [V] | aucun | fonctionne |
| Taille 3 à 16 (+ « Not sure », « Size Guide ») | liste | Présente [V] | aucun | non testée au clic |
| Upload (croquis), newsletter, « Sign in » | contrôles | Présents au récapitulatif ; **non utilisés** | aucun | non testés |
| Bouton d'envoi du récapitulatif | bouton | **Non cliqué** : règle « aucun formulaire » ; l'envoi crée un « Design Page » et exige l'e-mail [V] | aucun | non testé |
| Galerie de bagues (solitaires) : filtres style (8), type (8), complexité, largeur, hauteur, pierre d'accompagnement, prix, 4 vues (dessus, 3/4, face, profil), tri | filtres | Présents sur gallery.aspx ; **lus, non actionnés** [V] | aucun | non testés |
| Fiche bague gallery_detail.aspx?Imgid=223497 | page | « Customize This », fourchette de prix par métal, pierre fournie avec IGI, pierres recommandées, « Add », « Send a Hint », « Pin This » [V] | 14 kt 2 379 à 2 974 $ ; 18 kt 2 620 à 3 307 $ ; platine 2 904 à 3 596 $ (hors pierre et sertissage) | lue |
| Favoris, Search, Sign in, téléphone, adresses, réseaux, rendez-vous, financement | liens | Présents ; financement lu [V] | aucun | non suivis (sauf financement) |

## Options disponibles

- **Pierres** : diamant naturel, de couleur, « rustique », **synthétique** (« Lab Diamond », taille maison Scintillion), saphirs (dont Montana), pierres de couleur [V].
- **Types** : solitaire, trois pierres, halo, pierres latérales, forme libre, enroulé, effilé, jonc avec pierre [V].
- **Métaux** : or 14 et 18 kt jaune, rose, blanc (14 kt avec palladium), platine, or 22 kt, multicolore, mokume gane [V].
- **Gravure** : à la main, 6 styles, 3 emplacements ; sertissages : 8 styles ; filigrane [V].
- **Taille** : 3 à 16 (dont tailles fractionnaires) [V].
- **Pas** de 3D, 360°, AR ni aperçu qui suit les choix : le visuel vient de photos de la galerie [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le constructeur ; devis après envoi (« We'll send you ideas and quotes through your Design Page ») [V]. En galerie : fourchette par métal, « center gems & setting charges not included » ; pierres seules avec prix [V].
- **Délai** : non annoncé dans le parcours ni sur la fiche lue [V].
- **Retours et garantie** : bandeau de fiche « Custom made to order / Free shipping over $500 / Unlimited options / 100% Satisfaction guaranteed » ; conditions détaillées non lues (pas de page de retour ouverte) [V pour le bandeau, S pour le reste].
- **Certificats** : IGI sur la bague de la fiche (n° 735595067) [V].
- **Libellé du synthétique** : « Lab Diamond », « LAB » [V].
- **Financement** : Jewelers Reserve 6 mois sans intérêt (résidents de Washington, en boutique) ; PayPal Credit 6 mois ; Affirm 3, 6 ou 12 mois (0 à 36 % TAEG) (https://www.greenlakejewelry.com/financing.aspx) [V].
- **Langues, devises** : anglais, dollar [V].

## Confiance et service

- Deux boutiques (Seattle, 401 NE Northgate Way ; Bellevue, 25 Bellevue Way SE), horaires, trois numéros dont un gratuit, e-mail, rendez-vous « suggérés » [V]. Un widget de chat (requêtes vers podium.com) est chargé : non ouvert [V].
- Fiche bague : **designer et sertisseur nommés** (Krista, Jessica R) [V]. Aperçu « Design Page » d'exemple (blog_sample.aspx) cité, non ouvert.
- Suivi de commande, photos ou vidéos d'atelier : non vus ; l'inventaire cite un atelier ouvert [V, inventaire].
- Avis : non relevés sur les pages lues.

## Points forts à retenir pour JR Diamond

1. **Constructeur en 9 écrans qui couvre les gestes d'atelier** : gravure à la main avec 3 emplacements, 8 sertissages, filigrane, jonc, vues de dessus, de face et de profil (parcours testé de bout en bout) [V].
2. **Pierre d'abord, avec galerie filtrable** : 511 synthétiques, filtres forme, couleur, pureté, carat, prix, coupe, prix par pierre visible (409 $ à 4 027 $ en tête de liste) [V].
3. **Fourchette de prix par métal** sur chaque fiche (14 kt, 18 kt, platine) et mention honnête « pierres et sertissage non inclus » [V].
4. **Certificat IGI cité sur la bague** avec numéro, synthétique clairement libellé « Lab » [V].
5. **Créateurs nommés** sur la fiche (idée d'« atelier en direct ») [V].
6. Récapitulatif avant envoi ; page de financement claire avec exemple chiffré (700 $ à 63,27 $/mois sur 12 mois à 15 %) [V].

## Défauts observés

- Aucun prix ni visuel dans le constructeur : les écrans 4 et 6 sont des zones de texte ; l'écran 8 mélange métal, taille, budget et histoire [V].
- Le projet n'avance qu'avec un e-mail et un compte « Design Page » [V].
- Sur la fiche testée, « This item has been sold » : la bague montrée n'est plus disponible, il faut passer par « Customize » [V] (modèle d'archive, à l'opposé de « ce que vous voyez existe »).
- Galerie de bagues chargée en différé (message « Loading… », éléments après quelques secondes) [V].
- Les prix des fiches sont des fourchettes larges (ex. 2 379 à 2 974 $) sans détail [V].
- Délai et retours non affichés dans le parcours [V].

## Limites de l'audit

- Pas de panier ni de paiement sur ce site ; l'envoi du récapitulatif n'a pas été fait (aucune donnée saisie).
- Choix testés : un seul par écran (le premier), l'effet de chaque option sur le récapitulatif n'a été vérifié que pour métal, jonc et gravure.
- Filtres des galeries lus mais non actionnés ; pages de retours, garanties et politique non lues ; avis non cherchés.
- Temps du visuel principal : ordinateur, DOM 1 312 ms et chargement complet 1 795 ms ; iPhone 1 260 ms et 1 574 ms (le constructeur n'a pas de visuel principal : mesure du chargement de la page). Galerie de bagues : 428 ms pour la coquille, vignettes ensuite (non chronométré).

## Sources

- https://www.greenlakejewelry.com/new-design.aspx (42 contrôles ordinateur, 31 mobile)
- https://www.greenlakejewelry.com/engagement-rings.aspx ; /gallery/lab-grown-diamonds.aspx ; /gallery/gallery.aspx?fil3=ss&fil2=mtg&cpx=1&wd=1&v=1
- https://www.greenlakejewelry.com/gallery/gallery_detail.aspx?Imgid=223497 ; /financing.aspx
- https://www.greenlakejewelry.com/robots.txt (lu le 15/11/2026)
- Captures : scratchpad `audit/us/green-lake-jewelry-works/` (hors dépôt)
