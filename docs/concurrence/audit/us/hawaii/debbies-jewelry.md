# Audit : Debbie's Jewelry (Waipahu, Hawaï)

- **Site** : Debbie's Jewelry, https://debbiesjewelryhawaii.com/ ; page de départ : https://debbiesjewelryhawaii.com/pages/design-your-heirloom
- **Date** : 15/11/2026 (audit réalisé sous Chromium/Playwright)
- **Appareils** : ordinateur (1366 x 900) et affichage iPhone 13 (émulation)
- **Statut** : **partiel**. Le constructeur « Design Your Hawaiian Heirloom Jewelry » (bague, bracelet, pendentif gravés) est testé en entier. Le site ne propose **pas de constructeur de bague de fiançailles** : la bague de fiançailles passe par une demande de devis (`/pages/commissions`) et une recherche de diamants (`/pages/diamond-search`). Robots.txt : tout autorisé (`Allow: /`), aucun blocage rencontré.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V], page `/pages/design-your-heirloom`) |
|---|---|
| 1. Pièce | Bracelet, Bague, Pendentif (boutons radio) |
| 2. Métal | Or 14 k (seul chiffré) ; 10 k, 18 k, 22 k, argent sterling, platine « quoted by the shop » ; couleur Jaune (seule chiffrée), Blanc et Rose « quoted by the shop » |
| 3. Largeur et profil | Profil bombé ou plat ; largeur 3 à 20 mm (bague), 6 à 36 mm (bracelet), 6/8/10 mm (pendentif) ; épaisseur : Light, Medium, Heavy, Extra Heavy (1,25 / 1,50 / 1,70 / 2,00 mm pour la bague, seule « Light » à 3 mm) ; comparateur d'échelle contre une pièce de 25 cents, curseur « Make this actual size » |
| 4. Taille | Bague US 2 à 18 (demi-tailles) ; bracelet 6 à 9+ pouces ; pendentif 1,5 / 1,75 / 2 pouces ; lien « How to measure your size » (nouvel onglet) |
| 5. Dessin | 28 motifs hawaïens (Plumeria, Haku Lei, Sea Turtle, Queen Liliʻuokalani, etc.) ou « Plain » ; finition du dessin : sable |
| 6. Nom | Champ nom, 5 styles de lettres, finition (or en relief, émail plat, émail en relief), boutons d'insertion ʻokina et kahakō (11 caractères), fond imposé (sable) ; « chevron » sur bracelet et pendentif (Standard, Rond, Fleur de plumeria) |
| 7. Bordure | Bord à bord, Poli, Taillé diamant, Émail (≥ 10 mm), Pièce, Ajouré (« cut out ») |
| 8. Gravure intérieure et note | Deux zones de texte libres (le mot « photo » est à envoyer ensuite) |
| 9. Envoi | « Send this to us » : envoie une demande, rien n'est débité (bouton NON actionné) |

## Contrôles vérifiés

Page de départ : 46 contrôles visibles sur ordinateur, 42 sur iPhone (liste JSON via controls.cjs). Après choix « Bague », la zone de commande ajoute ~35 contrôles.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bracelet / Ring / Pendant | radio | Affiche le formulaire adapté (listes différentes par pièce) en 37 ms (ordi) à 171 ms (iPhone) | Prix de base différent par pièce | OK [V] |
| Metal (karat) | select 6 choix | Seul « 14K gold » est sélectionnable en pratique ; les autres affichent « quoted by the shop » ; le choix se choisit mais le prix ne bouge pas | Aucun changement ($590) | OK, mais renvoie à un devis [V] |
| Color | select 3 | Jaune seul chiffré ; Blanc/Rose « quoted by the shop » | Aucun | OK [V] |
| Barrel / Flat | radio | Plat pour > 20 mm ; recalcul du prix | 20 mm : $2,095 bombé, $1,840 plat | OK [V] |
| Width | select | 3, 4, 5, 6, 8, 10, 12, 15, 18, 20 mm | 3 mm $590 ; 5 mm $780 ; 8 mm $1,050 ; 10 mm $1,215 ; 12 mm $1,400 ; 20 mm $2,095 | OK [V] |
| Weight (épaisseur) | select | Choix limités à Light pour 3 mm ; 4 choix à 12 mm | 12 mm : Light $1,400 ; Medium $1,535 ; Heavy $1,720 ; Extra Heavy $2,005 | OK [V] |
| Comparaison à l'échelle | graphique | Barres cliquables 3 à 20 mm, comparées à un quart de dollar | Aucun | OK [V] (cliqué) |
| Make this actual size | disclosure | Ouvre un bloc pour caler la taille à l'écran (curseur) ; fonctionnement détaillé non vérifié | Aucun | Ouvre, non éprouvé [V] |
| Ring size | select | US 2 à 18 | Aucun (590 constant) | OK [V] |
| How to measure your size | lien | Nouvel onglet vers guide | Aucun | Non suivi (lien non ouvert) |
| Design | select 28 | Choix du motif ; pas d'aperçu image observé | Aucun | OK [V] |
| Name to engrave | texte | Écrit « Test » dans le résumé | Aucun | OK [V] |
| Letter style | select 5 | Old English, Script Snell, Script Candace, Block, Double Name Overlay | Aucun | OK [V] |
| Lettering finish | select 3 | Raised gold / Flat enamel / Raised enamel | Aucun | OK [V] |
| Boutons ʻ ā ē ī ō ū Ā Ē Ī Ō Ū | boutons | Insèrent le caractère dans le nom (comportement non essayé un à un) | Aucun | Présents ; non cliqués un à un |
| Border | select 6 | « Enamel » désactivé sous 10 mm ; Cut Out, Diamond Cut, Coin, etc. | Aucun | OK [V] |
| Inside engraving / Anything else | textarea | Texte libre ; vérifié à la main par l'atelier | Aucun | Présents ; non saisis |
| Résumé « We'll price this with you » + ESTIMATED | panneau | Recalcul en temps réel (≈ 1 s) ; mentionne piece, métal, largeur, poids, taille, finition | Voir ci-dessus | OK [V] |
| SEND THIS TO US | bouton submit | Envoie un formulaire (non actionné : règle lecture seule) | — | Non testé : formulaire |
| Menu SHOP, DESIGN & COMMISSION, SERVICES, ABOUT, VISIT | boutons/liens | Menus déroulants au survol ; 30 liens relevés | — | OK [V] |
| Open search | bouton | Ouvre un champ « Search jewelry, designs, or guides » (non soumis) | — | OK [V] |
| Wishlist, Cart, My account | liens | Panier vide : « Your cart is empty » | — | OK [V] |
| Diamond Search (`/pages/diamond-search`) : Natural / Lab Grown | onglets | Naturel 16 201 résultats ; synthétique 24 083 résultats (URL `?queryLabGrown=true`) | Prix par pierre | OK [V] |
| Diamond Search : formes Round / Oval / Emerald | boutons | Oval : 2 068 résultats | — | OK [V] |
| Diamond Search : White / Fancy | boutons | Fancy : 856 résultats | — | OK [V] |
| Diamond Search : couleur E F G, pureté FL IF VVS1 VVS2 VS1 VS2, taille Ideal / Excellent / Very Good | boutons | Pureté IF avec taille Excellent : 1 166 résultats (testé IF) | — | OK [V] ; autres cases non essayées une à une |
| Diamond Search : carats, prix (champs From/To) | champs | Présents ; non remplis | — | Non testé |
| Advanced Filters | bouton | Révèle Table, Ratio, Polish, Symmetry, Fluorescence, Certificate (GIA/IGI) | — | OK [V] |
| List / Grid ; Sort (4 tris) | boutons/select | Changement d'affichage OK ; tri : essai en texte échoué, tri non vérifié | — | Grid OK ; tri non vérifié |
| Add to cart (pierre) | bouton | POST `/cart/add.js` = 200 ; bouton devient « Update cart » ; panier : 1 diamant $1 179,00 | $1,179 (pierre 0,70 ct E VS2 GIA) | OK [V] |
| Pages `/pages/commissions` | formulaire | Formulaire de demande (prénom, nom, e-mail ou téléphone, adresse facultative, description) | — | Lu ; non rempli |
| Fiche produit bague (ex. `/products/hawaiian-ring-14k-…-queen-design`) | fiche | Prix « $870 », choix de taille 5 à 15, nom facultatif, « Customize this piece » ; boutons Wishlist, « Drop a hint » ; lien « Start with this design » | $870 (6 mm, pièce) | Lu ; non ajouté |

Non testés : Drop a hint, Wishlist (écriture de données), recherche soumise, « SIGN UP » (formulaire e-mail), liens externes Instagram/Facebook/Yelp, filtre prix des pierres.

## Options disponibles

- **Pièces** : bague, bracelet, pendentif ; collections annexes : boucles d'oreilles, chaînes, alliances (homme/femme), bagues de famille, diamants et gemmes.
- **Métaux** : or 14 k jaune en ligne ; 10/18/22 k, blanc, rose, argent, platine sur devis.
- **Largeur bague** : 3, 4, 5, 6, 8, 10, 12, 15, 18, 20 mm. **Épaisseur** : Light/Medium/Heavy/Extra Heavy.
- **Tailles** : bague US 2 à 18 ; bracelet de 6 po ; pendentif 1,5 à 2 po.
- **Gravure** : nom (5 polices), finition 3 types, 28 motifs, bordures 6, gravure intérieure, caractères ʻokina et kahakō.
- **Pierres (recherche)** : naturelles et synthétiques ; formes (au moins Round, Oval, Emerald dans la barre) ; couleurs, puretés, tailles, certificats GIA et IGI ; 16 201 pierres naturelles, 24 083 synthétiques [V].
- **Modes de vue** : pas de vue 3D, 360°, AR ni vidéo dans le constructeur ; photo seule sur les pierres (images de pierres dans la grille). **Pas de vue du bijou composé** [V : aucune image mise à jour après changement de choix, capture `ring1.jpg`].

## Prix, délais, retours, garanties

- **Prix** : estimation en direct, sans TVA, en USD ($). Le panneau dit « We'll price this with you / We confirm the design and the price before anything is charged » : estimation, confirmée à la main [V]. Le prix dépend de la **largeur, du profil, de l'épaisseur** (donc du poids d'or) ; **motif, lettres, finition, bordure et métal n'ont changé aucun prix** dans mes essais (non vérifié pour 18 k, devis uniquement) [V].
- **Exemples** (14 k jaune, Light, bombé) : bague 3 mm $590 ; 12 mm $1 400 ; bracelet 20 mm plat $5 460 ; pendentif 10 mm $840 [V]. Un prix indicatif « à partir de $870 » existe pour les bagues toutes faites.
- **Délai** : « 7–14 working days in our workshop, plus shipping » (panneau + fiche) [V].
- **Paiement** : lien de paiement envoyé après validation du dessin ; 50 % d'acompte pour démarrer, solde en ligne ou à l'atelier ; en boutique, mise en réserve (layaway) 20 % d'acompte, 6 mois, sans intérêt ; financement Synchrony Bank pour les résidents d'Hawaï ; logos de moyens de paiement en pied de page : ACH, Amex, Apple Pay, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa [V].
- **Retours** : « All sales of finished pieces are final… Special orders, engraved or personalized pieces… are final » ; dommage ou erreur : signaler sous **7 jours** après livraison ; si l'atelier ne peut pas fabriquer : remboursement intégral ; si les plans changent : crédit en magasin (12 mois), pas de remboursement [V `/policies/refund-policy`].
- **Livraison** : assurée, avec signature (21 ans et plus), États-Unis seulement, adresse de facturation de la carte ; retrait gratuit à Waipahu ; coût calculé à la caisse ; appel si surcoût d'assurance > $50 [V].
- **Garantie / mise à taille** : première mise à taille offerte non annoncée ; page « Sizing » et « Repairs » présentes ; non lues en détail [S].

## Confiance et service

- Magasin physique : 94-050 Farrington Hwy, Suite B1-10, Waipahu ; lun-ven 10 h-18 h, sam 10 h-17 h ; tél. (808) 678-2745 [V]. Établie en 1991 [V].
- Pas de chat observé, pas de WhatsApp ; téléphone et e-mail ; SMS (page « Text messages ») [V]. Formulaire de demande avec réponse annoncée « 1 à 2 jours ouvrés » [V].
- Pas d'avis clients affichés sur la page de départ ni la page d'accueil ; lien Yelp seulement [V pour l'absence sur ces pages].
- Preuves de fabrication : l'accueil décrit l'atelier (« CAD 2D et 3D, CNC, impression cire et résine, fonte, finition ») ; une page « Check on a repair » existe (suivi de réparation) ; pas de photos ni vidéos de commande en cours, pas de suivi de commande observé [V pour l'accueil, S pour le reste].
- Langue : anglais seulement ; devise : USD ; prix de l'or, du platine et de l'argent affichés en pied de page (Gold $3 564,15 ; Platinum $1 255,90 ; Silver $40,65 le 15/11) [V].
- Certificats : GIA et IGI listés par pierre ; lot synthétique libellé « Lab Grown » [V].

## Points forts à retenir pour JR Diamond

1. **Prix estimé en direct, expliqué par le poids d'or** : largeur et épaisseur font bouger le prix en environ 1 s ; chaque ligne du récapitulatif est visible (capture `ring1.jpg`, essais décrits plus haut). Met en évidence l'écart de « Sur devis » côté JR Diamond.
2. **Tunnel honnête sur le prix** : « ESTIMATED » + « We confirm the design and the price before anything is charged » ; 5 étapes « What happens next » explicites (« Nothing is cut until you have signed it off ») [V].
3. **Message sur le sur mesure** : « Nothing is charged and nothing is cut » ; refus de remboursement expliqué en une page avec cas par cas (avant démarrage, après démarrage, layaway) [V `/policies/refund-policy`].
4. **Recherche de diamants intégrée avec filtres complets** (forme, couleur, pureté, taille, certificat, naturel/synthétique, 40 000 pierres), prix et ajout au panier réels [V].
5. **Pièce de monnaie comme échelle** (« Drawn to scale against a US quarter ») : aide à choisir une largeur [V].
6. **Prix de l'or affichés en pied de page** : transparence sur la matière [V].
7. **Délai court annoncé (7 à 14 jours ouvrés)**, proche de la promesse de JR Diamond de 14 jours ouvrés [V].
8. **Retrait gratuit et livraison assurée avec signature** : message de sécurité clair [V].

## Défauts observés

- Aucun visuel du bijou : l'image ne change pas quand on modifie largeur, motif ou lettres ; aucun aperçu 3D ni gravure [V, `ring1.jpg`].
- Seuls 14 k jaune sont chiffrés ; les autres métaux et couleurs renvoient à un devis [V].
- Motif, lettres, finition et bordure sans effet sur le prix affiché (peut surprendre à la confirmation) [V ; interprétation S].
- Pas de constructeur de bague de fiançailles : la bague avec pierre passe par un formulaire [V].
- Aucune vente en ligne de ce constructeur : bouton « Send this to us » = demande, pas de panier [V (texte) ; bouton non actionné].
- Pas d'avis clients visibles ; une langue ; USD seulement.
- Bouton d'ajout au panier des pierres : lent (retour d'état > 3 s la première fois) [V].
- Vente finale pour les pièces gravées ou personnalisées.

## Limites de l'audit

- Aucun formulaire envoyé, aucune demande de devis, aucun compte, aucun paiement ; bouton « Send this to us » et SIGN UP non actionnés.
- Prix de l'or 18 k, platine, couleurs blanc/rose non obtenus (sur devis).
- Mesure du visuel : formulaire du constructeur visible en **1 077 ms** (ordinateur) et **1 163 ms** (iPhone émulé), page d'accueil première image en 1 288 ms ; une seule mesure par appareil, réseau du poste d'audit, non répétée.
- Le tri des pierres, plusieurs filtres et les boutons ʻokina n'ont pas été éprouvés individuellement.
- Les FAQ sont repliées ; seules les listes de questions ont été lues, pas toutes les réponses.
- Le panier est limité à une pierre (tentative de caisse non faite). Frais de livraison, taxe et moyens de paiement au paiement non vus (ils s'affichent « à la caisse ») ; logos de paiement relevés au pied de page seulement.
- Mobile : seul le départ du constructeur et la liste des contrôles (42) ont été mesurés ; le recalcul du prix n'a pas été rejoué sur iPhone.

## Sources

Toutes consultées le 15/11/2026 :
- https://debbiesjewelryhawaii.com/pages/design-your-heirloom (constructeur, résumé, « What happens next »)
- https://debbiesjewelryhawaii.com/policies/shipping-policy
- https://debbiesjewelryhawaii.com/policies/refund-policy
- https://debbiesjewelryhawaii.com/pages/faq (questions seulement)
- https://debbiesjewelryhawaii.com/pages/payment-options
- https://debbiesjewelryhawaii.com/pages/commissions
- https://debbiesjewelryhawaii.com/pages/diamond-search
- https://debbiesjewelryhawaii.com/collections/hawaiian-heirloom-rings et la fiche `/products/hawaiian-ring-14k-hand-engraved-6mm-barrel-ring-queen-design`
- https://debbiesjewelryhawaii.com/cart
- https://debbiesjewelryhawaii.com/ (accueil)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/debbies-jewelry/` (`ring1.jpg`, `d_ring.jpg`, `cart.jpg`, `afteradd.jpg`)
