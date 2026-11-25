# Audit : Beylora (Provo, Utah)

- **Site** : Beylora, https://beylora.com
- **Page de départ** : https://beylora.com/pages/custom-ring-design
- **Date** : 15/11/2026 (mesures refaites le 25/11/2026 ; les prix cités portent la remise BLACKFRIDAY de la période)
- **Appareils** : Chromium (Playwright) ordinateur 1366×900 et affichage iPhone 13, sans carte graphique
- **Statut** : **partiel**. Le constructeur a été parcouru jusqu'à l'écran du prix (étape 5 sur 7). Non faits : étape « coordonnées » (donnée personnelle), panier (`/cart/add` interdit par robots.txt), 3D rendue (voir Limites).
- **Marques** : V = vérifié (page lue ou contrôle actionné), I = inféré, S = supposé.

## Parcours

Le constructeur s'ouvre sur la page de départ par « START DESIGNING YOUR RING » (V, page de départ). Sept étapes annoncées, la 5 affiche le prix.

| Étape | Options (V, actionnées) |
|---|---|
| 1 Vision | Point de départ : « Completely custom ring », « Customize an existing Beylora ring », « Based on an inspiration photo » ; photos de référence (20 fichiers, 20 Mo chacun, 100 Mo au total, avec certificat), description, liens, « must-haves » (facultatifs) |
| 2 Diamant | Lab-grown diamond, Colored lab-grown diamond, « I already have my center stone » ; 11 formes (Round, Oval, Emerald, Radiant, Cushion, Pear, Marquise, Princess, Asscher, Heart, Dutch marquise) ; 8 poids : 1, 1.5, 2, 2.5, 3, 3.5, 4, 5 ct |
| 3 Monture | 6 styles (Classic Basket, Cathedral, Tulip, Trellis, Bezel, Vintage Filigree, illustrés au trait) ; hauteur (Low, Mid, High) ; tenue (Prongs, Bezel) ; jonction (Straight, Cathedral) ; halo (None, Hidden, Visible) ; pierres latérales (None, Side stones) |
| 4 Anneau | Métal (14K jaune, 14K blanc, 18K jaune, 18K blanc, platine) ; taille US 3 à 12 par demi-taille ou « Not sure yet » ; décor (Plain, Pavé, Channel-set) ; largeur (1,6–1,8 / 1,9–2,1 / 2,2–2,5 / 3,5 mm et plus) ; personnalisation (None, Custom text) ; champ « sensibilités du métal » |
| 5 Prix | Prix exact, décomposition, « SAVE MY PRICE » (e-mail), « GET STARTED BY BOOKING A CONSULTATION » ($50), « Book a free 10-minute call instead », « Change my design » |
| 6 Coordonnées, 7 Suite | Non ouvertes (données personnelles) |

Parcours parallèle : fiche produit (ex. `/products/ravello`), avec carat, métal, taille, gravure, diamant du mois de naissance, « ADD TO BAG » (non cliqué).

## Contrôles vérifiés

Page de départ : 63 contrôles visibles sur ordinateur, 71 en affichage iPhone (V, controls.cjs). Constructeur et fiche testés avec le réseau du site limité (voir Limites).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| START DESIGNING YOUR RING | bouton | ouvre l'étape 1 dans la page, sans changer d'adresse | n/a | fonctionne |
| BOOK A FREE 10-MINUTE CALL | lien Calendly | lien vers calendly.com/beylora-marketing/ring-consultation | n/a | non cliqué (autre domaine) |
| Lien SMS (385) 336-5426 | lien sms: | ouvre l'application de messages | n/a | non cliqué |
| Search / BAG | boutons d'en-tête | recherche et tiroir du panier (vide) | n/a | tiroir présent dans le DOM, non ouvert |
| 3 choix de départ (radio) | radio | un seul actif à la fois ; « Completely custom » mène à l'étape 2 | n/a | fonctionne |
| Photos, description, liens | champs | facultatifs, rien saisi | n/a | non testé (formulaire) |
| CONTINUE / BACK | boutons | avance ou recule ; validation de l'étape (message « Please choose your ring size, or Not sure yet ») | n/a | fonctionne |
| Lab-grown / Colored lab-grown | radio | colorée : mention « Colored diamond starts at $2,100 » | colorée 1 ct ovale 1 600 $ contre 1 200 $ | fonctionne |
| I already have my center stone | radio | saute des étapes, aucun prix affiché dans notre essai | non affiché | fonctionne, parcours différent |
| 11 formes | radio | aucun aperçu image ; aucune différence de prix (cœur 1 200 $, rond 1 200 $) | 0 | fonctionne |
| 8 carats | radio | 1,5 ct 1 450 $ ; 2 ct 1 700 $ ; 3 ct 2 200 $ ; 5 ct 3 200 $ | oui | fonctionne |
| 6 styles de monture | radio | Bezel : 1 200 $ (inchangé) | 0 | fonctionne (Classic Basket de base) |
| Hauteur, tenue, jonction | radio | non vérifiés un à un | non mesuré | choix possibles, effet prix non testé |
| Halo caché / visible | radio | « Hidden halo (2 ct) 1 900 $ » contre solitaire 1 700 $ | +200 $ | fonctionne |
| Pierres latérales | radio | « Side stones (2 ct) 2 100 $ » | +400 $ | fonctionne |
| Métaux : 14K jaune / blanc | radio | même prix (1 200 $) | 0 | fonctionne |
| 18K jaune / blanc | radio | 1 700 $ | +500 $ | fonctionne |
| Platine | radio | 1 900 $ | +700 $ | fonctionne |
| Taille US 3 à 12, « Not sure yet » | radio | sans effet visible ; obligatoire pour continuer | 0 | fonctionne |
| Décor Pavé / Channel-set | radio | « Pavé band » 1 900 $ ; « Channel-set band » 1 900 $ | +200 $ chacun | fonctionne |
| Largeur du corps, Custom text | radio | non menés jusqu'au prix (champ texte obligatoire non rempli) | non mesuré | non testé |
| SAVE MY PRICE | champ e-mail + bouton | envoie le prix à l'adresse | n/a | non testé (donnée personnelle) |
| GET STARTED BY BOOKING A CONSULTATION | bouton | réservation (50 $ + taxe, crédités sur la bague) | 50 $ | non cliqué |
| Change my design | lien | retour au formulaire | n/a | non testé |
| Fiche : carat 1 à 5 ct (8 boutons) | bouton | prix et photo changent (ex. 2 ct : photo « top_flat » remplace la photo 1 ct) | +212,50 $ par demi-carat | fonctionne |
| Fiche : métal | radio | 14K inchangé, 18K +425 $, platine +595 $ ; photo de la couleur d'or | oui | fonctionne |
| Fiche : taille US 3 à 10 par demi-taille | bouton | choix de la taille ; « Find the size at home » déplie un conseil | 0 | fonctionne |
| Fiche : Engraving | bouton + champ | 20 caractères, police Block ou Script, cœur ou infini ; « optional free extra » | gratuit | fonctionne |
| Fiche : Birth month diamond | bouton | 12 mois, diamant de couleur dans l'anneau ; gratuit | gratuit | fonctionne |
| Fiche : VIEW IN 3D | bouton | charge un visualiseur 3D du site (GLB `bey3d-BE1D305_RD_100ct.glb`, matériaux, Draco) | n/a | chargement lancé, rendu non vérifié (voir Limites) |
| Fiche : galerie (zoom 1 à 3, vidéo, 3D) | boutons | zoom, lecture vidéo | n/a | présents ; non manipulés un à un |
| Fiche : ADD TO BAG | bouton | appelle `/cart/add`, interdit par robots.txt | 1 190 $ | **non cliqué : panier interdit** |
| TEXT OR CALL (385) 336-5426 | lien | tel:/sms: | n/a | non cliqué |
| Fiche : Email me this ring / Send to someone (iPhone) | boutons | partage par e-mail | n/a | présents, non testés (formulaire) |
| FAQ, 7 liens d'aide, Track Order | liens | pages lues : `/pages/policies`, `/policies/refund-policy`, `/policies/shipping-policy`, `/pages/faq`, `/pages/track-your-order` | n/a | fonctionnent (200) |
| Pied de page : réseaux sociaux, SUBSCRIBE | liens, formulaire | externes ; lettre d'information | n/a | non testés |

## Options disponibles

- **Pierre** : diamant de synthèse blanc, diamant de synthèse de couleur, ou pierre déjà possédée ; 11 formes ; 1 à 5 ct. Tous les centres sont de synthèse, D, VVS1 ou VVS2, polissage et symétrie Excellent, rapport IGI individuel (V, `/pages/lab-grown-diamonds`). Pas de diamant naturel.
- **Métaux** : 14K jaune, 14K blanc, 18K jaune, 18K blanc, platine (V). Pas d'or rose dans le constructeur (V). Sur la fiche Ravello, le métal est « 14k White Gold » par défaut.
- **Monture** : 6 styles, 3 hauteurs, griffes ou serti clos, tête droite ou cathédrale, halo (aucun, caché, visible), pierres latérales, décor lisse, pavé ou serti rail, 4 largeurs, texte personnalisé.
- **Taille** : US 3 à 12 (constructeur), 3 à 10 (fiche) ; 100 $ offerts pour un redimensionnement chez le bijoutier de son choix (V).
- **Extras gratuits** : gravure (20 caractères) ou diamant du mois de naissance (un seul des deux, V).
- **Catalogue** : 517 bagues (V, page de collection), 12 formes dont « Old Mine » et « Elongated Cushion », filtres par prix, style de bague, pierres latérales, halo, construction, matériau.
- **Autres produits** : « Build a Set » (alliance assortie, 20 % de remise pendant l'offre), alliances, bagues d'homme.

## Prix, délais, retours, garanties

- **Affichage** : prix complet de la bague, pierre et monture comprises (V : « The price you see is the complete ring ... the only thing checkout can add is sales tax », `/pages/faq`). Sur la fiche, deux prix : 1 190 $ puis 1 400 $ « 15 % OFF, code BLACKFRIDAY applied » (V).
- **Décomposition** (constructeur, V) : prix de la monture avec une pierre de 2 ct (1 700 $), ligne « 1 ct stone −500 $ », ligne métal (+500 $, +700 $), ligne décor ou halo. Exemple : 1 ct rond, solitaire, 14K jaune = 1 700 − 500 = **1 200 $**. Elle montre l'écart, pas le coût de chaque poste (I : valeurs arrondies, sans détail métal/façon).
- **Sur mesure** : prix exact puis consultation vidéo de 30 min à 50 $ plus taxe, **crédités sur la bague** ; le prix « n'expire jamais » une fois enregistré (V, page de départ).
- **Délai** : environ 20 jours calendaires après l'approbation du design (V, page de départ) ; « about 20 days », 30 jours pour les bagues sur mesure ou d'homme (V, `/pages/policies`). Fiche : « Arrives around December 14 » (V). Canada et Europe : environ 5 semaines, droits et TVA à la livraison (V).
- **Livraison** : gratuite, assurée, suivie, signature (États-Unis, Canada, Europe) (V).
- **Retours** : 45 jours après réception, remboursement intégral sans frais de restockage, retour prépayé, remboursé sous 7 jours (V, `/policies/refund-policy`). Le texte dit que « chaque bague est faite sur commande » sans exclure le sur mesure (V). Une exception pour les bagues entièrement sur mesure n'est pas lue (non vérifié).
- **Garantie** : « Lifetime Guarantee », une seule réclamation par bague, réparation ou remplacement (pierre qui casse ou tombe), expédition à la charge du client, perte et vol exclus (V, `/pages/policies`). Redimensionnement : 100 $.
- **Certificats** : rapport IGI individuel pour le diamant central, pas pour les diamants d'accent ni les alliances (V).
- **Libellé du synthétique** : « lab-grown », partout, avec la mention explicite « not moissanite or cubic zirconia » (V).
- **Paiement** : carte ; paiement en plusieurs fois par Shop Pay Installments, taux de 0 à 36 % (V, `/pages/faq`). Aucun récapitulatif de panier vu.

## Confiance et service

- **Avis clients** : aucun avis ni note relevé sur la page de départ, la fiche, la FAQ et l'accueil (V, texte lu).
- **Preuves de fabrication** : cinq étapes décrites sur la fiche (CAD, choix du diamant, fonte or ou platine, « 100 checks under a loupe », expédition) et un lien « SEE HOW EVERY RING IS MADE » (V, texte ; lien non ouvert). Poinçon intérieur : métal, marque du fabricant, numéro (V). Pour le sur mesure : CAO révisée avec le client (V).
- **Suivi de commande** : page « Track Order », connexion par e-mail, lien de suivi envoyé à l'expédition (V).
- **Service** : SMS ou appel (385) 336-5426, « a real person answers, any time » ; appel gratuit de 10 minutes ; studio à Provo sur rendez-vous (The Shops at Riverwoods) ; événements (V).
- **Langues et devises** : anglais, dollar américain (V) ; devises pour le Canada et l'Europe non vérifiées.
- **Équipe** : deux couples cofondateurs nommés sur la fiche (V).

## Points forts à retenir pour JR Diamond

1. **Un prix exact en quelques clics sur le sur-mesure**, avec décomposition par ligne et promesse « il n'expire jamais » : l'écart de JR Diamond (« Sur devis ») est ici comblé sans compte (V, étape 5 : 1 200 $ pour 1 ct, 14K jaune, solitaire).
2. **Des suppléments de prix lisibles** : +500 $ en 18K, +700 $ en platine, +200 $ pour un halo, +400 $ pour des pierres latérales (V, mesurés).
3. **Prix complet de la bague avant tout** : « The price you see is the complete ring » (V, FAQ). Sans frais cachés hormis la taxe.
4. **Politique après-vente écrite en clair** : 45 jours, retour gratuit, garantie à vie, redimensionnement à 100 $ (V, `/pages/policies`).
5. **Consultation de design payante mais créditée** (50 $) : filtre les demandes sans fermer la vente (V).
6. **Cinq étapes de fabrication affichées sur chaque fiche** avec poinçon numéroté : proche du « on voit naître son bijou » de JR Diamond (V).
7. **Rendu 3D tournable chargé sur la fiche** (GLB, matériau diamant) : confirme que le 3D de produit est attendu (V : fichiers chargés au clic).

## Défauts observés

- Le constructeur sur mesure **n'affiche aucun aperçu de la bague** : seulement des dessins au trait par style (V, capture étape 3). Le client ne voit pas sa combinaison.
- Le constructeur ne propose ni or rose ni diamant naturel (V).
- Aucun avis client relevé (V).
- La remise de 15 % masque le prix de base : deux prix sur la même ligne, dont un barré implicite (V, fiche).
- Le détail du prix ne sépare pas métal, pierre et façon ; la ligne « 1 ct stone −500 $ » part d'une pierre de 2 ct (V).
- La personnalisation de texte du constructeur bloque la progression tant que le champ n'est pas rempli (I : étape sautée dans notre essai sans prix).

## Limites de l'audit

- **Écart de précaution** : le constructeur envoie un `POST` à `https://custom-rings-production.up.railway.app/v2/funnel-steps` à chaque étape (V, observé). Le robots.txt de ce domaine répond 403 (INCONNU) ; une seule requête est passée lors du premier clic sur « START DESIGNING » (essai de repérage), puis tout appel vers ce domaine a été **coupé** dans le navigateur (aussi `/v2/price-views`). Le prix s'affiche malgré cela : il est calculé dans la page (V).
- `/cart/add` interdit : « ADD TO BAG » non cliqué ; panier non atteint, donc récapitulatif, frais et moyens de paiement du panier non vus. La page `/cart` autorisée n'a pas été ouverte.
- Étape « coordonnées » et formulaires (e-mail, SMS, Calendly, newsletter) non utilisés.
- Rendu 3D : le visualiseur a démarré (13 fichiers chargés) mais la capture d'écran a expiré après le clic (navigateur sans carte graphique) ; ni rotation ni qualité vérifiées. Les modes AR, essayage à la main et 360° n'existent pas dans les contrôles listés (V).
- Mesures (LCP, Chromium sans carte graphique, réseau proxifié) : fiche Ravello 844 ms (ordinateur), 688 ms (iPhone) ; page de départ 1 232 ms (ordinateur), 660 ms (iPhone) (V, une mesure chacune). Parcours iPhone testé jusqu'à l'étape 3 seulement.
- Hauteur, tenue, jonction, largeur et texte personnalisé non menés jusqu'à un prix.

## Sources

- https://beylora.com/pages/custom-ring-design (page de départ, constructeur)
- https://beylora.com/products/ravello (fiche)
- https://beylora.com/collections/engagement-rings (collection)
- https://beylora.com/pages/policies, /policies/refund-policy, /policies/shipping-policy, /pages/faq, /pages/track-your-order, /pages/lab-grown-diamonds, https://beylora.com/ (lus le 25/11/2026)
- robots.txt de beylora.com : `/cart/` interdit, le reste autorisé
