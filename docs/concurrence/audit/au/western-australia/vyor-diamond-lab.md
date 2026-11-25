# Audit : VYOR Diamond Lab

> **[P1] pour tout le rapport (relevé le 25/11)** : le site sert sur son domaine voisin (www.vyor.com.au) un robots.txt qui interdit tout aux agents Claude ; l'adresse lue n'avait pas cette règle. Par prudence, constats gardés pour mémoire, valeur [P1], jamais repris comme vérifiés.

- **Site** : VYOR Diamond Lab (ex Diamond Lab), Wembley (Perth), Australie-Occidentale
- **Adresse** : https://vyor.com.au/ (départ : https://vyor.com.au/collections/engagement-rings ; fiche testée : https://vyor.com.au/products/tulip-marquise-pave-cathedral-solitaire-ring)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900, en-AU) et affichage iPhone 13 (Playwright)
- **Statut** : complet (une réserve : ajout au panier non actionné, voir Limites)
- Marque : [V] vérifié (page lue ou contrôle actionné, adresse indiquée), [I] inféré, [S] supposé. Montants en AUD (le site affiche « $ »).

## Parcours

Le configurateur est intégré à la fiche produit (adresse `…/products/<bague>`), en trois étapes numérotées, avec total en direct [V].

| Étape | Options (vérifiées sur la fiche Tulip Marquise Pavé Cathedral) |
|---|---|
| Listing `/collections/engagement-rings` | 9 bagues affichées + « Show more », collections par forme/monture (ovale allongé, princesse, poire, cathédrale, rond, trilogie, halo caché, bezel, east-west, moissanite), « Ready to Ship » [V] |
| 1 Setting | métal (7 pastilles : 14K jaune/blanc/rose, 18K jaune/blanc/rose, platine), largeur de l'anneau 1,8 / 2 mm [V] |
| 2 Stone | diamant de synthèse ou moissanite ; carat 1 à 4 ct ; couleur D/E/F ; pureté VVS1/VVS2/VS1 ; taille « Excellent ou Ideal » ; mode « Gemologist sourced » ou « Choose your stone » (3 pierres recommandées, vidéo 360°) ; lien « Browse certified lab diamonds » [V] |
| 3 Personalise | taille AU (E à Z2, demi-tailles) ou « Not sure yet », gravure (20 caractères), pierres de naissance cachées, plan d'entretien, délai de production, « ADD TO CART » [V] |
| Panier | `/cart` ouvert vide uniquement (voir Limites) [V] |

## Contrôles vérifiés

Prix = effet sur le total, mesuré sur la fiche (14K jaune, 1,8 mm, diamant 2 ct E/VS1 : 3 446 AUD au départ) [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille 18K | bouton métal | change le total | + 203 (3 649) | OK |
| Pastille PT (platine) | bouton métal | idem | + 406 (3 852) | OK |
| 7 pastilles de couleur (14K/18K jaune, blanc, rose, platine) | boutons radio | libellés présents ; changement d'image non contrôlé | selon titre | OK (image non vérifiée) |
| Largeur 2 mm | bouton | total change | + 136 (platine : 3 988) | OK |
| « Which width? » | bouton | panneau : 1,8 mm « delicate », 2,0 mm « balanced » (le plus populaire), 2,2 mm « substantial » | - | OK |
| « Metal guide » | bouton | ouvre un panneau ; contenu non relu | - | OK (contenu non lu) |
| « Continue to Stone » | bouton | passe à l'étape 2 (l'adresse reçoit `#setting` puis `#personalise`) | - | OK |
| Diamant / Moissanite | bouton | moissanite : 1 ct D/VVS1 « complete ring from 2 018 » | 3 446 -> 2 018 | OK |
| Carat 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 ct | boutons radio | total recalculé, chaque puce affiche « from $… » | 2 363 / 2 769 / 3 446 / 3 853 / 4 462 / 5 037 / 5 613 | OK |
| Couleur D / E / F | boutons radio | F : total plus bas ; D : le total est resté à 3 446 (puce « from 2 031 ») | F 3 243 ; D 3 446 | OK, anomalie possible (D sans changement visible) |
| Pureté VVS1 / VVS2 / VS1 | boutons radio | total recalculé | 3 920 / 3 514 / 3 446 | OK |
| « Size guide » (carat) | bouton | panneau « How big will it look? » : diamètre à l'échelle (1 ct 6,5 mm ; 2 ct 8,1 mm) | - | OK |
| « Colour / Clarity / Cut guide » | boutons | panneaux pédagogiques (D-F « colourless » ; IF à I ; « Excellent or Ideal ») | - | OK |
| « Gemologist sourced » | bouton | « we source a stone… send you the certificate to approve before crafting » ; prix de la pierre 1 896 | 3 446 | OK |
| « Choose your stone » | bouton | affiche 3 pierres réelles : 2,01 ct E VS1 IGI 3 327 « Best value » ; 2,09 ct 3 435 « Balanced » ; 2,03 ct 3 672 « Top pick » ; cotes en mm, ratio, profondeur, table | 3 327 à 3 672 | OK (affichage) |
| « Choose this stone » (x3) | bouton | clic non réussi par mon script (délai dépassé) | - | non testé (échec du script, pas du site) |
| « Watch 360° » | bouton | ouvre un lecteur vidéo (iframe pwzcdn.com) | - | OK (lecture non vérifiée) |
| « Browse certified lab diamonds » | lien | vers `/pages/design-your-own-engagement-ring-with-our-ri…` | - | non ouvert |
| « Back » / « Continue to Personalise » | boutons | navigation entre étapes | - | OK |
| Taille de bague (liste, 48 choix) | select | E à Z2, « Not sure yet — help me later » ; choisir une taille ne change pas le prix | 0 | OK |
| « Find your size » | bouton | assistant : « have any bank card ready », 2 minutes, bouton Start | - | OK (assistant non lancé) |
| Gravure | champ texte | 20 caractères max, « Complimentary », rappelée dans le récapitulatif (« Engraving “Test” ») | 0 | OK |
| « Add birthstones » | bouton | 12 pierres par mois ; 2 offertes, ensuite 68 AUD pièce ; « Where are they set? » | 0 (2 offertes) | OK |
| « Add a care plan » | bouton | Warranty only / 3 ans 403 / 5 ans 606 | + 403 (3 849) / + 606 (4 052) | OK |
| « Need it faster? » | bouton | Standard 6-8 sem. ; Expedited 5 sem. ; Rush 4 sem. ; la date « ready between 6 Jan and 20 Jan » ne change pas | + 271 (3 717) / + 576 (4 022) | OK, date non actualisée |
| « Drop a hint » | bouton | présent à chaque étape ; contenu non ouvert (formulaire) | - | non testé (formulaire) |
| « How payment works » | bouton | modale : acompte 50 %, afterpay/Klarna/humm, PayPal, crypto | - | OK |
| « Book a consultation » | lien | ancre `#vyor-book` (rendez-vous) | - | non ouvert |
| « Email our gemmologist » | lien | `mailto:design@vyor.com.au` | - | OK (non envoyé) |
| « ADD TO CART » | bouton | **non actionné** : `/cart/add.js` interdit par robots.txt (`Disallow: /cart/`, `/cart.js`) | - | non testé (robots.txt) |
| Panier (icône Cart) | lien | `/cart` autorisé : « Your cart is currently empty » | - | OK |
| 360° de la galerie, zoom, vue sur la main, AR | - | non trouvés sur la fiche : galerie de photos défilante uniquement (boutons « Scroll thumbnails right ») | - | absent [V] |
| Filtres du listing | - | pas de filtre prix/forme sur la page : navigation par collections | - | absent |
| Téléphone / e-mail / Book Appointment | liens | `tel:+61405670914`, `mailto:design@vyor.com.au`, `/collections/book-your-appointment` | - | non ouverts |
| Avis (judge.me) | lien | « 5.0 / 5 sur 1 141 avis » | - | OK |

## Options disponibles

- **Métal** : or 14K ou 18K jaune, blanc, rose ; platine 950 [V].
- **Largeur d'anneau** : 1,8 ou 2 mm sur cette fiche (le guide cite aussi 2,2 mm) [V].
- **Pierre** : diamant de synthèse IGI (ou GIA « where stated ») ou moissanite D/VVS1 ; pas de diamant naturel en vente (page certificats : « Unless your order states natural diamond… ») [V].
- **Carat** : 1 à 4 ct ; couleur D, E, F ; pureté VVS1, VVS2, VS1 ; taille Excellent ou Idéal ; plus d'un million de pierres certifiées annoncées [V].
- **Personnalisation** : gravure 20 caractères, pierres de naissance cachées, plan d'entretien 3 ou 5 ans, délais express ; taille AU E à Z2 [V].
- **Collections** : forme (ovale allongé, princesse, poire, rond, coussin…), monture (cathédrale, trilogie, halo caché, bezel, east-west), moissanite, alliances, « Ready to Ship » (expédition en 3 à 5 jours ouvrés) [V].

## Prix, délais, retours, garanties

- **Prix** : total en direct à chaque étape, dont monture et pierre ; la page d'une bague affiche « TOTAL 3 446 » (l'inventaire précédent notait 3 445). Prix de la pierre « Gemologist sourced » 1 896 affiché séparément. La décomposition fine (monture / or / main-d'œuvre) n'est pas donnée [V].
- **Prix en affichage iPhone sans locale AU** : le même article affichait 5 090 au lieu de 3 446 ; avec la locale en-AU, 3 446 comme sur ordinateur [V pour les deux valeurs ; cause S : marché/devise selon la locale du navigateur].
- **Acompte** : 50 % (1 723), solde avant livraison ou retrait ; acompte non remboursable une fois la production lancée (modale « How payment works »), mais la page « Partial payment policy » dit qu'avant achat de la pierre ou début de production l'annulation est gratuite avec remboursement intégral [V].
- **Paiement** : cartes Visa/Mastercard/Amex/UnionPay, PayPal, Afterpay (jusqu'à 3 000 AUD), Humm, crypto via Coinbase Commerce (moins de 10 000 AUD), virement sur demande (`/pages/payment-options`) [V].
- **Délai** : fabrication 6 à 8 semaines ; « ready between 6 Jan and 20 Jan » le 15/11 ; express 5 semaines (+ 271) et rush 4 semaines (+ 576) ; bagues prêtes : 3 à 5 jours ouvrés [V]. Rendu CAO avant fabrication (page « Our crafting process ») [V].
- **Livraison** : gratuite en Australie, express assuré (2 à 4 jours ouvrés après expédition) ; retrait à Wembley ; international sur demande, gratuit au-dessus de 1 000 AUD d'après la FAQ [V].
- **Retours** : bagues prêtes à expédier, 30 jours pour changement d'avis ; pièces sur mesure non retournables pour changement d'avis (exception du sur mesure explicite), droits de la loi australienne réservés (FAQ). La page `/policies/refund-policy` est interdite par robots.txt, non lue [V pour la FAQ].
- **Garanties** : garantie de fabrication à vie incluse ; une remise à taille gratuite sous 6 mois (jusqu'à 2 tailles) ; plan d'entretien payant en option [V].
- **Certificats** : IGI ou GIA pour les diamants synthétiques ; moissanite : certificat d'authenticité maison ; page « Verify a certificate » [V].
- **Libellé du synthétique** : « lab-grown diamond », « Are lab-grown diamonds real diamonds? » dans la FAQ ; avertissement que la moissanite n'est pas un diamant [V].

## Confiance et service

- Langue : anglais ; devise AUD (autres marchés non vus) [V].
- Avis : judge.me, 5,0/5 sur 1 141 avis ; page de témoignages avec prénoms et villes [V].
- Service : rendez-vous showroom ou virtuel, consultation gemmologue, e-mail, téléphone ; pas de chat ouvert, un bouton « Chat » est visible sur la page (non ouvert) [V pour sa présence].
- Preuves de fabrication : CAO avant production, « stone checked by a gemmologist », vidéo 360° des pierres proposées ; une photo d'atelier dans la page mais aucun suivi de commande ni vidéo de fabrication annoncé [V].
- Financement : Afterpay, Klarna, Humm [V].
- Remise à taille, pierre approuvée sur certificat avant sertissage [V].

## Points forts à retenir pour JR Diamond

1. **Total en direct sur la fiche, avec trois niveaux de modèle** (métal +203 / +406, largeur +136, pierre selon carat/couleur/pureté) : l'acheteur voit l'impact de chaque option (mesures du 15/11, fiche Tulip).
2. **Trois pierres réelles proposées avec cotes, ratio, profondeur, table et vidéo 360°**, puis le choix d'une pierre sourcée à approuver sur certificat (`Choose your stone`) : proche de « pierre filmée ».
3. **Acompte de 50 % chiffré dès la première étape** et page dédiée expliquant l'annulation (`/pages/partial-payment-policy`).
4. **Guides intégrés à l'étape** (carat à l'échelle en mm, couleur, pureté, taille) sans quitter la fiche.
5. **Date de livraison estimée affichée** (« ready between 6 Jan and 20 Jan ») avec options express chiffrées.
6. **Retours et sur-mesure expliqués en clair** dans la FAQ (30 jours pour le prêt à expédier, rien pour le sur-mesure).
7. **Assistant de taille de bague en ligne** (mesurer avec une carte bancaire).

## Défauts observés

- Après le choix d'un express, la date « ready between… » reste inchangée (6 à 20 janvier) [V].
- Couleur D : le total n'a pas changé après le clic (3 446), alors que la puce annonce « from 2 031 » [V ; cause S].
- Le prix change selon la locale du navigateur (5 090 au lieu de 3 446 en affichage iPhone sans locale AU) : écart non expliqué sur la page [V].
- Sans diamant naturel ni certificat GIA proposé : offre limitée au synthétique et à la moissanite [V].
- Pas de rendu 3D, ni de vue sur la main, ni AR : galerie de photos seulement [V].

## Limites de l'audit

- Le bouton « ADD TO CART » n'a pas été actionné (robots.txt interdit `/cart/` et `/cart.js` ; règle de l'étude). La page de récapitulatif, les frais de livraison au panier et les moyens de paiement du checkout ne sont donc pas vus ; les moyens de paiement viennent de `/pages/payment-options` et de la modale.
- `/policies/refund-policy` et `/policies/shipping-policy` sont interdites par robots.txt : non ouvertes ; retours et livraison tirés de la FAQ et de la fiche.
- Une seule fiche (Tulip Marquise) parcourue en entier. Les clics « Choose this stone », « Drop a hint » (formulaire), « Book a consultation » et l'assistant de taille n'ont pas été actionnés (formulaires, données personnelles ou échec du script).
- Mesure du visuel principal : première image du produit complète visible, après navigation (le logo exclu) : ordinateur 1,9 s, iPhone 2,5 s (une mesure, réseau du bac à sable, [V mais indicatif]).
- Les changements d'image à la sélection d'un métal n'ont pas été comparés.

## Sources

- https://vyor.com.au/collections/engagement-rings (listing, contrôles ordinateur et iPhone)
- https://vyor.com.au/products/tulip-marquise-pave-cathedral-solitaire-ring (configurateur, accordéons Shipping/Our diamonds/Craftsmanship)
- https://vyor.com.au/pages/payment-options ; /pages/certificates-authenticity ; /pages/our-crafting-process ; /pages/frequently-asked-questions-faq ; /pages/reviews-testimonials ; /pages/free-ring-resizing-diamond-lab-australia ; /pages/partial-payment-policy ; https://vyor.com.au/cart
- robots.txt contrôlé avec l'outil `robots.cjs` avant chaque adresse (policies et cart/add interdits)
