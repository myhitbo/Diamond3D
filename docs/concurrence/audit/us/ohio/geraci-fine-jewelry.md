# Audit : Geraci Fine Jewelry (Cincinnati, Ohio)

- **Site** : Geraci Fine Jewelry, https://www.geracifinejewelry.com/ ; page de départ https://www.geracifinejewelry.com/build-your-ring
- **Date** : 15/11/2026 (jour de la mission ; système daté du 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur a été parcouru de bout en bout (4 étapes), mais l'outil appelle un serveur d'API dont le robots.txt est illisible (HTTP 401) : ses appels ultérieurs à l'ouverture ont été bloqués côté navigateur (voir Limites). Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- robots.txt du site : `Allow: /`, `Disallow: /api/` ; de l'outil intégré (app.geracifinejewelry.com, plateforme Aurix) : `Allow: /` avec liste de chemins privés (`/api/`, `/orders`…).

## Parcours

| Étape | Options (toutes relevées) |
| --- | --- |
| Page de départ | Bouton « OPEN THE RING BUILDER » ; 14 montures « Setting only » avec prix soldés et boutons « Save », « Add to cart » ou « Choose a size » ; fenêtre « Find your piece » (quiz) qui s'ouvre seule [V] |
| 1. Setting | 32 montures en 10 filtres (All, Solitaire, Bezel, Halo, Vintage, Toi et Moi, Three-Stone, Pavé, Modern, Cathedral, Twist), chacune « Starting from » 950 à 2 600 $ [V] |
| 2. Customize | Métal (5), tête (3), accents (6), largeur de bague (3), profil (2), confort (2), gravure (20 car.), taille 3 à 13 (+ « Not sure yet »), photo / essayage sur la main [V] |
| 3. Diamond | Préférences, pas de pierre réelle : forme (10), carats, couleur, pureté, budget, explications des 4 C [V] |
| 4. Review | Récapitulatif, estimation de la monture seule, « Book with us », « Email myself this ring », « Share with partner », « Save this design for later » [V] |

## Contrôles vérifiés

Prix : variation de « SETTING ESTIMATE » lue après chaque clic (monture Round Brilliant Solitaire, base 1 225 $).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| OPEN THE RING BUILDER | bouton | Ouvre l'outil Aurix dans une iframe (app.geracifinejewelry.com/ring-builder?embed=1) | - | OK |
| Fenêtre « Find your piece » + Close | dialogue | Quiz en 4 étapes (1re question : forme préférée) ; couvre la page 3 à 5 s après l'ouverture ; Close la ferme. Non rempli (coordonnées probables en fin de parcours) [I] | - | OK, gênant |
| 10 filtres de style (Solitaire…Twist) | boutons | Filtrent la grille de montures (présents ; non tous actionnés) | - | OK [V] présence |
| Carte de monture (32) | bouton | Passe à l'étape 2 avec rendu studio de la monture | « Starting from » | OK |
| 14K White / Yellow / Rose Gold | bouton | Change le rendu photo (rose vérifié par capture) et le texte « YOUR SPEC » | 0 $ | OK |
| 18K White Gold | bouton | idem | +250 $ | OK |
| Platinum | bouton | idem | +500 $ | OK |
| 4-Prong / 6-Prong / Double Claw | bouton | Met à jour la ligne de spec ; mention « Noted for your consultation » | 0 / +90 / +120 $ | OK |
| No accents | bouton | Option par défaut | 0 $ | OK |
| Pavé band | bouton | ~24 micro-pavés sur les épaules | +650 $ | OK |
| Hidden halo | bouton | Halo caché | +475 $ | OK |
| Side stones | bouton | Deux ~0,10 ct | +950 $ | OK |
| Surprise stone | bouton | Pierre cachée dans la bague | +95 $ | OK |
| Milgrain edge | bouton | Détail perlé gravé à la main | +175 $ | OK |
| Band width 1.8 / 2.0 / 2.2 mm | bouton | Largeur dans le récapitulatif | 0 $ | OK |
| Profil Rounded / Flat (square) | bouton | Mention dans le récapitulatif | 0 $ | OK |
| Fit Comfort / Standard | bouton | idem | 0 $ | OK |
| Engraving (champ, 20 car.) | champ texte | Compteur « 2/20 » et sélecteur de police apparaît ; texte « AB » saisi | 0 $ | OK |
| Ring size 3 à 13, « Not sure yet » | bouton | Sélection enregistrée (« To be confirmed » à la fin si non choisie) | 0 $ | OK |
| Need help with ring size? | bouton | Aucun changement visible d'écran, ni nouvelle page (1 page ouverte) | - | Sans effet visible |
| PHOTO | bascule | Rendu studio fixe d'un seul angle, étiqueté « STUDIO » | - | OK |
| TRY ON | bascule | Photo d'une main (« Hand-model preview uses a representative ring of the same style », fichier handmodels/…__rose.jpg) | - | OK |
| Forme (Round…Heart, 10) | bouton | Coche la forme ; texte « Photos show the Round version. Your Oval center is fitted… » : le rendu ne change pas de forme | 0 $ | OK |
| Carat, couleur, pureté, budget | 8 curseurs (min/max) | Carat 0,25-5 (défaut 0,50-2,00) ; couleur D-K ; pureté FL-SI2 ; budget 500-25 000 $ (défaut 2 000-12 000) ; modifient le récapitulatif | 0 $ (pierre non chiffrée) | OK [V] présence ; déplacement non testé |
| Boutons « i » (4) | bouton | Info-bulles : clic non concluant (pas de texte ouvert lu) | - | Non vérifié |
| Continue to Diamond / Review, ← Back, Edit | bouton | Navigation entre étapes ; l'arrivée en Review déclenche l'enregistrement interne | - | OK |
| Book with us, Book a consultation, Have questions? Book a call | bouton, lien | Mène à /book-online (lien vu) ; non cliqué (prise de rendez-vous) | - | Non testé, rendez-vous |
| Email myself this ring, Share with partner, Save this design for later | bouton | Demandent des données personnelles (courriel) : non cliqués | - | Non testé, données personnelles |
| Questions? Chat with us | lien | Pointe vers /contact | - | Lien vu, chat non ouvert (règle) |
| ADD TO CART (liste de montures) | bouton | Ajoute la monture voulue au panier (voir panier) | prix soldé | OK |
| Save (cœur) | bouton | Non actionné (favoris) | - | Non testé |
| Cart, Search, Saved, 513-385-4653, BOOK A VISIT | liens | Vus ; /cart ouvert | - | OK |

## Options disponibles

- **Montures** : 32 dans l'outil (solitaires : Round, Oval, Pear, Emerald, Princess, Cushion, Asscher, Marquise, Radiant, elongated cushion, knife-edge ; halos ; hidden halos ; bezels ; vintage ; toi et moi ; trois pierres ; pavé ; cathédrale ; twist) [V]. 14 montures semi-montées vendables (boutique).
- **Métaux** : or blanc 14 k, jaune 14 k, rose 14 k, blanc 18 k, platine [V]. Pas d'or jaune ou rose 18 k.
- **Forme de pierre** : Round, Princess, Cushion, Oval, Pear, Emerald, Marquise, Radiant, Asscher, Heart [V].
- **Pierre** : préférences seulement (carat 0,25-5, couleur D-K, pureté FL-SI2, budget). Le récapitulatif affiche « ORIGIN Natural » sans commande visible pour choisir naturel ou synthétique [V] ; la page annonce « natural or lab-grown » [V].
- **Corps de bague** : largeur 1,8 / 2,0 / 2,2 mm, profil arrondi ou plat, confort ou standard. Pas de griffes détaillées au-delà de 3 têtes.
- **Gravure** : 20 caractères, choix de police [V].
- **Tailles** : 3 à 13 par demi-taille.

## Prix, délais, retours, garanties

- [V] Prix de monture affiché à chaque étape, « Estimate, not a final price. Setting only. Your exact quote and center diamond are confirmed at your consultation. » La pierre n'est jamais chiffrée dans l'outil. Décomposition : monture + options (lignes « Setting » et « SETTING ESTIMATE »).
- [V] Soldes Black Friday 25 % sur le stock jusqu'au 30/11 : monture 0,33 ct à 1 248,75 $ (1 665 $ normal), https://www.geracifinejewelry.com/product-page/14k-white-gold-33-ctw-semi-mount-engagement-ring
- [V] Délai : « ready about three weeks after you approve the design » ; acompte de la moitié à la validation du dessin ; CAO ou cire (https://www.geracifinejewelry.com/custom-design).
- [V] Retours : 30 jours, état d'origine, ni modifié ni mis à taille ; « Special orders, clearance items and custom made jewelry are non-returnable » ; naturel contre naturel, synthétique contre synthétique (https://www.geracifinejewelry.com/return-and-exchange-policy).
- [V] Garantie Geraci : nettoyage et inspection à vie, estimation et mises à jour offertes, première mise à taille gratuite, rhodiage gratuit des bagues blanches une fois par an à vie.
- [V] Certificat : « GIA / IGI certified diamonds, every stone ». Libellé synthétique : « lab-grown » / « lab-created ».
- Devise : USD ; langue : anglais seulement.

## Panier

[V] Ajout de la monture 0,33 ct, taille 7, via la fiche produit (Wix). Page /cart (autorisée) : article, prix soldé et normal, « Remove », Subtotal 1 248,75 $, remise Black Friday « You save $416.25 », « Shipping is free on orders over $999 and $35 on orders of $999 or less. Taxes are calculated at checkout. », bouton CHECKOUT (non cliqué), garantie 30 jours, suggestions d'alliances. Moyens de paiement et délai d'expédition non affichés dans le panier. Le constructeur lui-même n'ajoute rien au panier : il finit sur un rendez-vous.

## Confiance et service

- [V] 4,9 sur Google, 494 avis, avis cité en page ; BBB accrédité, « GIA trained specialists » ; famille depuis 1982.
- [V] Consultation gratuite de 45 min en boutique ou sur Zoom ; téléphone 513-385-4653 ; chat « Questions? Chat with us » ; livre d'« Pieces we have made » : 160 bagues de fiançailles, 61 bagues, 34 alliances (page custom-design).
- [V] Preuve de fabrication : étapes décrites (croquis, CAO ou cire, sertissage sur place) ; pas de vidéo de fabrication vue, pas de suivi de commande vu.
- [V] Aucune garantie de ressemblance ou plan coté montré.

## Points forts à retenir pour JR Diamond

1. Prix de monture affiché dès la grille (« Starting from ») et mis à jour par option, avec le texte « estimate, not final » : preuve, capture b2 et textes ci-dessus.
2. Chaque option chiffrée en clair (+90, +475, +650 $…) et métal plus cher chiffré (+250 $ en 18 k, +500 $ en platine) : lecture directe du prix de chaque choix.
3. Bascule PHOTO / TRY ON avec la bague sur une main, honnête (« representative ring of the same style »).
4. Grille de choix avec filtres de style et visuel d'une monture qui apparaît instantanément (12 à 25 ms après le clic, image déjà chargée).
5. Garantie résumée en quatre lignes (« The Geraci Guarantee ») et rappelée dans le panier et dans le récapitulatif.
6. Récapitulatif final complet (spec, prix, rendez-vous, courriel, partage) : rassure et ramène à l'atelier.
7. Délai (3 semaines) et acompte de 50 % annoncés sur la page de conception sur mesure.

## Défauts observés

- Fenêtre « Find your piece » qui bloque la page quelques secondes après l'ouverture de l'outil (les clics sont interceptés tant qu'elle est ouverte).
- Pas de 3D ni de vue 360° : un seul rendu studio fixe ; la forme de pierre choisie ne change pas l'image (« Photos show the Round version »).
- Aucun choix naturel / synthétique dans l'outil alors que la page l'annonce.
- Pas de prix de pierre dans l'outil : prix final inconnu avant la consultation.
- Affichage iPhone : le bandeau d'étapes se superpose à l'en-tête du site (« Step 2 of 4 », « Back », « Cart » mélangés, capture m1.jpg).
- « Need help with ring size? » sans effet visible.
- Le constructeur n'ajoute pas la bague au panier ; la vente se conclut en boutique.

## Mesures de chargement (Playwright, proxy du bac à sable)

- Ordinateur : titre de la page 505 ms ; bouton du constructeur 707 ms ; grille de montures 2,1 s après le clic ; visuel de la monture 25 ms après le choix.
- iPhone : bouton 435 à 546 ms ; grille 2,6 s ; visuel 12 ms ; pas de débordement horizontal (390/390).
- Un premier essai iPhone s'est figé 300 s (script coupé) ; le second a réussi : instabilité possible, non reproduite.

## Limites de l'audit

- L'outil dépend d'une API (api-production-3479.up.railway.app) dont le robots.txt répond 401 : [I] site traité comme « inconnu ». Les appels faits à l'ouverture de l'outil sont normaux ; ensuite, tout appel vers ce domaine et vers app.geracifinejewelry.com/api/ a été bloqué par mon script (4 requêtes : session-events, wedding-bands, google-reviews, save/precreate). Les fonctions qui en dépendent (enregistrement, alliances assorties, avis) n'ont donc pas été éprouvées.
- Non testés : quiz au-delà de la 1re question, « Save », « Email myself », « Share », rendez-vous, chat, filtres de style un par un, déplacement des curseurs, info-bulles « i ».
- Panier : ajout via un bouton de boutique (Wix, `/_api`), pas via l'outil ; aucun paiement.
- Délai de livraison, moyens de paiement : non vus.

## Sources

- https://www.geracifinejewelry.com/build-your-ring (vérifié, actionné)
- https://app.geracifinejewelry.com/ring-builder?embed=1 (outil Aurix, vérifié, actionné)
- https://www.geracifinejewelry.com/product-page/14k-white-gold-33-ctw-semi-mount-engagement-ring (vérifié)
- https://www.geracifinejewelry.com/cart (vérifié)
- https://www.geracifinejewelry.com/return-and-exchange-policy (vérifié)
- https://www.geracifinejewelry.com/custom-design (vérifié)
- https://www.geracifinejewelry.com/robots.txt, https://app.geracifinejewelry.com/robots.txt, https://api-production-3479.up.railway.app/robots.txt (401)
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/geraci/
