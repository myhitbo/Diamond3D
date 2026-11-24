# Audit : Royal Hawaiian Heritage Jewelry (RHHJ, Honolulu)

- **Site** : Royal Hawaiian Heritage Jewelry, https://royalhawaiianheritagejewelry.com/ ; page de départ : https://royalhawaiianheritagejewelry.com/products/custom-hawaiian-heirloom-ring
- **Date** : 15/11/2026 (Chromium/Playwright)
- **Appareils** : ordinateur (1366 x 900) et affichage iPhone 13 (émulation)
- **Statut** : **partiel**. Le constructeur de bague gravée (bague hawaïenne « heirloom ») est testé jusqu'au panier. Pas de constructeur de bague de fiançailles avec pierre sur ce site (non cherché en profondeur : la fiche « Plumeria Petite Side Band » à diamant est une bague toute faite). Robots.txt : autorisé ; aucun blocage.
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V]) |
|---|---|
| 0. Fiche produit | Galerie de 4 photos de style de vie (mains, bracelet, atelier), prix « $945.00 », bandeau « Christmas Countdown Special : $100 off 8, 10, 12 mm ; $75 off 6 mm, déjà déduit », paiement en 4 fois Shop Pay (« from $63.63/mo ») ; bouton **CUSTOMIZE PRODUCT** ouvre un panneau latéral |
| 1. Largeur | 6, 8, 10, 12 mm |
| 2. Métal | Or 14 k jaune, 14 k blanc, 14 k rose, argent sterling (boutons radio) |
| 3. Poids | Light, Medium, Heavy, Extra Heavy |
| 4. Taille | 3,5 à 15 par demi-tailles (24 valeurs) |
| 5. Motif de volutes | 12 motifs (Heritage, Plumeria, Regal, Diamond Cut Maile, Royal Maile, Queen, Queen Emma, Long Leaf, Maile Leaf Lei, Feather, Plain Back, Hibiscus) ; 7 motifs « Premium » grisés sous 12 mm (Garden of Eden, Playful Sea Turtles, Playful Dolphins, Royal Bamboo, Royal Hula, Royal Kahiko, Aloha Hula) |
| 6. Bord | Lisse, Taillé diamant, Ajouré festonné, Sans bord |
| 7. Nom | Champ « Name on Ring », police (Old English), « Preview Engraving », type de lettres (émail, relief, relief et émail, aucun nom), fond (volutes, rosette, sable, aucun nom) |
| 8. Message et demande | Message intérieur, demande spéciale, conditions à cocher (« Engraving & Customization Terms »), quantité |
| 9. Panier | **ADD TO CART $…** ; panier avec récapitulatif des choix, case « I agree to the Order Terms », CHECK OUT |

## Contrôles vérifiés

Page de départ (avant ouverture du panneau) : 76 contrôles sur ordinateur, 72 sur iPhone (JSON controls.cjs).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| CUSTOMIZE PRODUCT | bouton | Ouvre le panneau d'options (tiroir à droite) | — | OK [V] |
| Width | select | 6/8/10/12 mm | 6 mm $945 ; 8 mm $1 271 ; 10 mm $1 586 ; 12 mm $1 955 (14 k jaune, Medium, taille 6) | OK [V] |
| Weight | select | Light, Medium (défaut), Heavy, Extra Heavy | 6 mm : Light $862 ; Medium $945 ; Heavy $1 098 ; Extra Heavy $1 309 | OK [V] |
| Metal | radio 4 | Jaune, blanc, rose : prix identique ; argent sterling | Jaune/blanc/rose $945 ; argent $337 | OK [V] |
| Ring Size | select | Taille 6,0 : $945 ; 7,0 : $1 003 ; 12,0 : $1 298 ; 5,0 : $945 | Supplément croissant au-delà de la taille 6 | OK [V] |
| Scroll Pattern | select | 12 motifs ; aucune image d'aperçu observée ; premium dégrisé à 12 mm | Pas d'effet pour les 12 motifs de base ; « Royal Hula » à 12 mm : $2 661 contre $2 336 (+$325, avec taille 7) | OK [V] |
| Edging | select | Lisse / Taillé diamant : sans supplément ; Ajouré festonné : +$75 | +$75 | OK [V] |
| Name on Ring | texte | Saisie acceptée ; compteur de caractères restants affiché | Aucun | OK [V] |
| Preview Engraving | bouton | Fenêtre modale : mot « Test » en lettres Old English noires sur fond blanc (texte seul, pas posé sur la bague) | Aucun | OK [V] (capture `preview.jpg`) |
| Select Font | liste | Une seule police visible (Old English) | Aucun | OK, une police [V] |
| Lettering Type (Enamel, Raised, Raised & Enamel, No Name) | radio | Sélection ; effet sur l'image non observé | Aucun test isolé | Présent [V] ; effet prix non isolé |
| Lettering Background (Scroll, Rosette, Sand, No Name) | radio | Idem | idem | idem |
| Personal Message (Inside Engraving) / Special Request | texte | Présents ; non saisis | — | Non testés |
| Engraving & Customization Terms | accordéon | Texte : « final sale », pas d'échange, pas de modification après soumission, 3 à 6 semaines ; case à cocher | — | OK [V] |
| Quantité − / + | boutons | Présents | — | Non cliqués |
| ADD TO CART (formulaire vide) | bouton | 3 champs invalides signalés par le navigateur ; reste sur la fiche | — | OK, validation [V] |
| ADD TO CART (formulaire rempli) | bouton | Ajout réussi ; panier : 1 article ; liste des choix (largeur, métal, poids, taille, motif, bord, police, type de lettres, fond) | $945,00 | OK [V] |
| Panier : Remove, Is this a gift?, case « I agree to the Order Terms », CHECK OUT | boutons | Récapitulatif lu ; **CHECK OUT non actionné** | Sous-total $945,00 USD ; « Shipping, taxes, and discount codes are calculated at checkout » | Lu [V] |
| Text Us Now / bulle « Aloha, have a question? » | bouton | Ouvre un SMS/chat ; non ouvert | — | Non testé (règle) |
| expedited options are available here | lien | `/products/rush-service` : frais $150 par pièce ; 3, 6, 11 ou 16 jours ouvrés | +$150 | Lu [V] |
| Menu (Shop Jewelry, Collections, How To Customize, Engraving Experience, Our Stores, Our History, FAQs) | liens | 7 liens dont `Engravingexperience.com` (site externe, non ouvert) | — | OK [V] pour les adresses internes |
| Account, Search, Cart | liens/boutons | Panier fonctionnel ; compte et recherche non ouverts | — | Non testés |
| Vidéo YouTube (lien Shorts), Instagram, Facebook, Pinterest, YouTube | liens | Externes, non suivis | — | Non testés |
| Bloc recommandations (4 produits) | liens | Prix : bague à diamants $675, pendentif $675, bracelet $4 548, pendentif horizontal $1 624 | — | Lus [V] |

Non testés : champ message intérieur, quantité, paiement, compte, recherche, chat par SMS.

## Options disponibles

- **Pièces** : bague (fiche testée), bracelet, pendentif, boucles d'oreilles, chaînes ; bagues à diamants toutes faites (« 14K Hawaiian Diamond Ring »).
- **Métaux** : or 14 k jaune, blanc, rose ; argent sterling. Pas de platine ni de 18 k dans ce constructeur.
- **Largeurs** : 6/8/10/12 mm. **Poids** : 4 niveaux. **Tailles** : 3,5 à 15.
- **Motifs** : 12 de base, 7 premium à partir de 12 mm. **Bords** : 4.
- **Gravure** : nom sur la bague, 1 police, 4 types de lettres, 4 fonds, message intérieur, demande spéciale ; aperçu du texte seul.
- **Vues** : photos de style de vie, aucune vue 3D, 360°, AR ni vidéo sur la fiche ; le bijou affiché (anneau « Kuuipo ») ne change pas quand on modifie les options [V, capture `c1.jpg`/`after.jpg` ; I pour l'absence totale de changement].
- **Services** : page « Find Your Hawaiin Name », magasins, SMS, paiement en plusieurs fois Shop Pay, livraison express payante.

## Prix, délais, retours, garanties

- **Prix** : mis à jour dans le bouton « ADD TO CART $… » à chaque choix (≈ 1 s), en USD ; pas de décomposition affichée ; remise de fin d'année déjà incluse dans le prix (« Discounts already applied » : $75 sur 6 mm, $100 sur 8, 10, 12 mm) [V].
- **Effet des options** : largeur, poids, taille (> 6), bord festonné et motifs premium font monter le prix ; couleur d'or sans effet ; argent bien moins cher ; lettres et fond non isolés [V].
- **Délai** : « approximately 3-6 weeks » ; expédition accélérée sur 3 à 16 jours ouvrés pour $150 par pièce, hors pièces à diamants ; frais remboursés si la date garantie est manquée [V].
- **Retours** : « ALL SALES ARE FINAL. NO CANCELLATIONS. NO REFUNDS » pour les pièces sur mesure ; marchandise non personnalisée : crédit en magasin seulement, demande sous **15 jours**, neuf, avec reçus ; articles soldés : vente ferme [V `/pages/return-policy`].
- **Garantie diamant** : reprise « trade up » au prix d'achat intégral si le client dépense au moins $2 000 de plus en diamant certifié [V `/pages/our-policies`].
- **Livraison** : coût et taxes calculés à la caisse (non atteinte) ; la FAQ liste « Where do you ship to », « International », « Is my order insured », « Do I have to sign » (réponses non dépliées) [V questions].
- **Paiement** : Shop Pay en 4 versements, financement et layaway cités en FAQ (réponses non lues) [V questions].

## Confiance et service

- Magasins : Honolulu centre (1130 Bishop St, lun-ven 10 h-16 h 30, tél. 808-524-4321) et Pearlridge, Aiea (808-487-0808) [V `/pages/our-stores`] ; « plus de 50 ans » d'activité (déclaré) [V].
- Contact : page Contact, e-mail orders@rhhj.com, bulle SMS « Text us » [V] ; réponse annoncée 24 à 48 h (FAQ) [V].
- Preuves de fabrication : photo d'un artisan qui tient une bague au tour (accueil de la fiche) ; page « Custom Design Process » : esquisse ou modèle 3D partagé avant fabrication, révisions jusqu'à satisfaction ; inspection avant livraison ; pas de photo ni vidéo de commande en cours, pas de suivi de commande observé [V pour le texte].
- Avis clients : aucun avis affiché sur la fiche testée [V pour l'absence sur cette page].
- Langue : anglais seulement ; devise : USD [V].
- Le site propose « Find Your Hawaiin Name » (page non ouverte) [V pour le lien].

## Points forts à retenir pour JR Diamond

1. **Prix visible dans le bouton d'achat et mis à jour en temps réel** (bouton « ADD TO CART $1 271 » à 8 mm) : achat direct d'une bague sur mesure sans devis [V].
2. **Achat en ligne réel pour du sur mesure** : validation obligatoire, récapitulatif des choix au panier, case de conditions (« final sale ») [V].
3. **Aperçu du nom avant achat** (modale « Preview Engraving ») : bonne idée, mais ici texte seul ; JR Diamond peut faire mieux avec la gravure posée sur le bijou [V].
4. **Option express tarifée** ($150, 3 à 16 jours ouvrés) avec remboursement des frais en cas de retard : engagement concret sur le délai [V `/products/rush-service`].
5. **Reprise de diamant « trade up »** : message de confiance à sens unique, clair [V].
6. **Paiement en plusieurs fois Shop Pay affiché sous le prix** : réduit la barrière du prix [V].
7. **Processus sur mesure expliqué en 4 étapes** avec rendus ou esquisse avant fabrication (équivalent de la promesse « ce que vous voyez existe ») [V `/pages/custom-design-process`].

## Défauts observés

- Image de la bague inchangée quand on change les options : pas de rendu du bijou configuré [V].
- Aperçu de gravure : texte noir sur fond blanc, une seule police, pas posé sur la bague [V].
- Remise de fin d'année intégrée au prix ; pas de décomposition ni de prix de l'or [V].
- Le prix revient à $1 098 (au lieu de $945) quand on repasse le métal à « jaune » dans une séquence d'essais où le poids semblait revenu à Medium : écart non expliqué, non reproduit en isolant les options [V pour la valeur, S pour la cause].
- Pas de gravure d'accents « ʻokina » proposée dans les contrôles visibles (non cherchée) [S].
- Pas d'avis clients visibles, une seule langue, pas de vidéo ni de suivi.
- Vente finale pour tout sur mesure, aucune annulation, pas de modification possible après soumission [V].

## Limites de l'audit

- Aucun formulaire envoyé, aucune action au-delà du panier ; **CHECK OUT** non actionné ; chat/SMS non ouvert ; article ajouté au panier d'une session jetable.
- Frais de port, taxes et moyens de paiement exacts non vus (calculés à la caisse) ; réponses de la FAQ (livraison, financement, layaway) non dépliées.
- Effet prix des « Lettering Type » et « Lettering Background » non isolé ; police : une seule vue.
- Les 76 contrôles de la fiche sont listés dans le JSON ; ceux du bloc recommandations et du pied de page ne sont pas tous détaillés ici.
- Mesure du visuel : première grande image chargée en **2 407 ms** (ordinateur) et **1 985 ms** (iPhone émulé), une seule mesure, non répétée.
- Pas de test d'une bague de fiançailles à pierre sur ce site.
- Le tarif du 15/11 inclut une promotion de Noël ; les prix de base peuvent différer.

## Sources

Toutes consultées le 15/11/2026 :
- https://royalhawaiianheritagejewelry.com/products/custom-hawaiian-heirloom-ring (fiche et panneau d'options)
- https://royalhawaiianheritagejewelry.com/cart
- https://royalhawaiianheritagejewelry.com/pages/return-policy
- https://royalhawaiianheritagejewelry.com/pages/our-policies
- https://royalhawaiianheritagejewelry.com/pages/faqs (questions seulement)
- https://royalhawaiianheritagejewelry.com/products/rush-service
- https://royalhawaiianheritagejewelry.com/pages/custom-design-process
- https://royalhawaiianheritagejewelry.com/pages/our-stores
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/rhhj/` (`royalhawaiianheritagejewelry_com_products_custom_hawaiian_heirloom_ring.jpg`, `c1.jpg`, `preview.jpg`, `after.jpg`)
