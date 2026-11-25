# Audit : MM Fine Jewelry and Gems

- **Site** : MM Fine Jewelry and Gems Inc. (Rockville Centre, New York ; fondé en 2018, vente en ligne et sur rendez-vous)
- **Adresse** : https://www.mmjewelrygems.com/ ; page de départ : https://www.mmjewelrygems.com/design-a-ring
- **Date** : 15/11/2026 (séance réelle du 25/11/2026, voir l'inventaire)
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours monture, pierre et récapitulatif entièrement actionné ; panier non rempli (le constructeur n'a pas de « panier », il mène à un acompte) ; paiement, formulaires et chat non touchés.
- **robots.txt** : `User-agent: *` / `Allow: /` (vérifié avec l'outil). Aucun blocage. Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (toutes vérifiées sur https://www.mmjewelrygems.com/design-a-ring) |
| --- | --- |
| 1. Choisir une monture | 7 formes de pierre, 13 styles, tri, grille de 24 montures puis 48 (« Show more settings ») |
| 2. Fenêtre de la monture | métal (3), couleur (3), taille de centrale (7), taille de doigt (4 à 10), pierres d'accompagnement synthétiques, 5 photos et 1 vidéo |
| 3. Choisir la pierre | 3 onglets : diamants, pierres de couleur, « I have my own stone » ; sous diamants : stock prêt / étendu, naturel / synthétique, tri, « ne montrer que ce qui va à la monture », « More diamonds » |
| 4. Récapitulatif (« Your ring ») | monture + pierre + total estimé ; notes ou gravure ; envoi du design par e-mail ; réserver (acompte Square) ; réserver et payer par Zelle ; devis écrit ; visio ; WhatsApp ; copie du lien |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Round, Oval, Cushion, Princess, Emerald, Marquise, Pear | boutons-filtres (7) | filtrent la grille (Marquise : liste de marquises, « Marquise center ») ; rebasculables | non | OK [V] |
| Solitaire, Hidden halo, Halo, Three stone, Single row, Pavé, Bezel, Vintage, Twist and bypass, Nature inspired, Contemporary, Channel and baguette, Cluster | boutons-filtres (13) | filtrent par style, cumulables avec la forme (Oval + Halo = montures ovales à halo) | non | OK [V] |
| Tri « Popular / New arrivals / Name » (`#f-sort`) | liste | change l'ordre (« Name » commence par des références internes du type `*B-dwn*ENG RINGS…`) | non | OK, libellés internes visibles [V] |
| « Show more settings » | bouton | passe de 24 à 48 cartes | non | OK [V] |
| Carte de monture (fourchette « Round center, 0.5–2 ct ») | lien (`#s=<style>`) | ouvre la fenêtre de configuration ; l'adresse (`#s=85121-1&m=14+KT&c=White&z=6.5&pd=…`) garde la configuration | non | OK [V] |
| 14k / 18k / Platinum | boutons | monture 85121 : 670 $ / 950 $ / 840 $ | oui | OK [V] |
| White / Yellow / Rose | boutons | 670 $ / 670 $ / 680 $ en 14 k ; masqués en platine (platine = blanc) | oui (Rose +10 $) | OK [V] |
| Taille de centrale (~0,50 à ~2,0 ct ; 7 pastilles) | boutons | 0,50 ct : 600 $ ; 1,0 ct : 670 $ ; 2,0 ct : 810 $ (la tête est faite aux millimètres indiqués : 5,2 à 8,2 mm) | oui | OK [V] |
| Taille de doigt `#sm-fsize` | liste (4 à 10 par quarts) | mémorisée dans le récapitulatif (« size 9 ») | non | OK [V] |
| « Lab-grown accent diamonds » `#sm-lab` | case | cochée : prix inchangé (670 $) sur ce modèle sans pavé | non constaté | OK, effet nul sur ce modèle [V] ; effet sur un modèle pavé [S] |
| 5 miniatures de la fenêtre | boutons | changent la photo (`85121.jpg`, `.side`, `.set`, `.angle`, `.ver`) ; **aucune vue 3D** | non | OK [V] |
| ▶ vidéo | bouton | lit `85121.video.white.mp4` (513 px de large) ; le nom de fichier porte la couleur (`white`) | non | OK [V] |
| Changement de métal ou de couleur | boutons | l'image principale reste `85121.jpg` ; seule la vidéo porte la couleur [V] ; cohérence de l'image avec la couleur choisie [S] | oui | image inchangée, voir défauts |
| « Choose a center stone → » | bouton | ouvre l'étape pierre ; rappelle la monture (« 14k gold, white · center round ~1.0 ct · 6.5 mm · size 9 · $670 ») | non | OK [V] |
| Onglet Diamonds | onglet | liste de diamants GIA (naturel) ou IGI (synthétique), cote en mm, prix par ligne, « Fits this setting » | oui | OK [V] |
| « Ready to set » / « Extended inventory » | boutons | prêt : « up to 3 to 4 weeks » ; étendu : « 360° video; sourced and set for you, about two weeks » | oui | OK [V] |
| « Natural » / « Lab-grown » | boutons | naturel : 0,90 ct M SI2 GIA 870 $ en premier ; synthétique : 1,07 ct F I1 IGI 210 $ (prêt) ; étendu synthétique : 0,90 ct FANCY SI2 IGI 120 $ | oui | OK [V] |
| Tri `#d-sort` | liste | prix croissant, décroissant, carats décroissants ; le compteur passe de 20 à 19 pierres | non | OK [V] |
| « Only stones that fit this setting » `#d-fit` | case | décochée : 24 pierres au lieu de 20 | non | OK [V] |
| « More diamonds » | bouton | 20 puis 40 pierres | non | OK [V] |
| Carte de pierre | clic | ouvre le récapitulatif ; une requête `POST /.netlify/functions/checkout` part à l'arrivée sur le récapitulatif (avant tout clic sur « Reserve ») ; elle sert probablement à calculer acompte et solde [I] | oui | OK ; requête non expliquée [V] |
| Onglet « Colored gemstones » | onglet | 1 063 pierres, puces par espèce (saphir 473, rubis 325, émeraude 219, alexandrite 12, spinelle 9, tanzanite 8…), cases « fits » ; vignettes « Photo on request » ; prix affichés à 2 $, 5 $, 7 $, 18 $ (voir défauts) | oui | OK mais prix douteux [V] |
| Onglet « I have my own stone » | onglet | zone de texte « Describe your stone » + « Continue with my own stone → » + lien vers la politique « Your Own Stone » | non | OK, formulaire non rempli [V] |
| « Email me my design » (prénom, e-mail) | formulaire | non testé (donnée personnelle) | – | non testé |
| Notes ou gravure `#sum-eng` | champ texte | champ libre, facultatif ; pas de choix de police, pas d'aperçu | non | présent [V], saisie non testée |
| « Reserve with a $1,030 deposit » | bouton de paiement | **non cliqué** (paiement Square) | – | non testé |
| « Reserve and pay by Zelle · no fee » | bouton de paiement | **non cliqué** | – | non testé |
| « Request a written quote » | lien | mène à `/?piece=…#contact` avec description complète pré-remplie | non | lien lu [V], envoi non testé |
| « Book a video consultation » | lien | `/consultation` | non | lien lu [V] |
| « Send on WhatsApp » | lien | `wa.me/16466452453` avec message pré-rempli (monture, pierre, GIA, lien) | non | lien lu, non ouvert [V] |
| « Copy a link to this design » | lien | copie l'adresse du design (`#s=…&pd=…`) | non | présent [V], effet presse-papiers non vérifié |
| « ← Change the stone » / « Change the setting » | liens | retour d'étape | non | présents [V] |
| « Ask the concierge » | bouton de chat | présent sur toutes les pages ; `/api/concierge?status=1` appelé à l'ouverture ; conversation non ouverte | – | non testé (règle) |
| Cart (icône) | bouton | tiroir « Your cart is empty » ; sur `/collection/` il propose « Checkout », « Pay by card », « Reserve and pay by Zelle · $0 » | – | lu, non cliqué |
| « Save » (fiche d'un bijou) | bouton | présent ; effet non testé | – | non testé |
| Pièces de la collection | liens | une bague « made to order » (Emerald-Cut Three-Stone, « Starting at $2,270 ») n'a ni « add to cart » ni prix final ; renvoie au constructeur ; boucles d'oreilles : « Email me the price » | oui | lu [V] |

## Options disponibles

- **Formes** : ronde, ovale, coussin, princesse, émeraude, marquise, poire (7). [V]
- **Styles** : solitaire, halo caché, halo, trois pierres, rangée simple, pavé, serti clos, vintage, torsade et bypass, inspiré de la nature, contemporain, canal et baguette, grappe (13). [V]
- **Métal** : or 14 k, or 18 k, platine ; couleur or : blanc, jaune, rose. [V]
- **Centrale** : ~0,50 / 0,75 / 1,0 / 1,25 / 1,5 / 1,75 / 2,0 ct (5,2 à 8,2 mm). [V]
- **Taille de doigt** : 4 à 10 par quarts. [V]
- **Pierre** : diamants naturels GIA et synthétiques IGI ; stock prêt ou étendu ; pierres de couleur (1 063) ; pierre apportée par le client. [V]
- **Absent** : choix de pavage, griffes, corps de bague, gravure avec police, 3D, vue sur la main, AR, zoom 360° de la monture. [V] (non trouvés dans le constructeur)

## Prix, délais, retours, garanties

- **Affichage du prix** [V] : prix de la monture seul dans la fenêtre (670 $), puis prix de la pierre ligne à ligne, puis « Estimated total » (ex. 670 + 870 = 1 540 $). « Prices follow the metal market and are confirmed when you reserve. » Le prix est confirmé par écrit après nouvelle vérification de la pierre et du cours du jour.
- **Acompte** [V] : exemple à 1 540 $ : « Deposit $1,030 now, balance $510 » (cette monture + 0,90 ct) ; pour 33 270 $ : acompte 24 530 $, solde 8 740 $. Règle [I] : l'acompte semble couvrir la pierre et la moitié de la monture ; non documentée.
- **Délai** [V] : prêt à monter : 3 à 4 semaines au plus ; stock étendu : environ 2 semaines ; « finished ring in 7 business days » après pierre en main (récapitulatif). Chiffres non cohérents entre eux, voir défauts.
- **Livraison** [V] (https://www.mmjewelrygems.com/how-we-work) : FedEx assuré, signature requise ; expédition sous 7 jours après paiement encaissé ; « Shipping is billed separately » ; États-Unis continentaux seulement ; remise en main propre à Long Island et New York.
- **Paiement** [V] : Zelle (préféré, sans frais), virement, chèque certifié, espèces ; carte par Square pour les commandes en ligne jusqu'à 3 500 $, supplément de 3 % sur crédit (remboursé sur carte de débit) ; au-delà virement ou Zelle. Taxe de l'État de New York ajoutée selon le code postal.
- **Retours** [V] (https://www.mmjewelrygems.com/returns) : 7 jours après livraison, « at our sole discretion » ; frais de reprise de 10 % ; frais de retour à la charge du client. **Exclu : commandes sur mesure et spéciales** (sauf défaut). Acompte de conception de 250 $ non remboursable sur le sur-mesure ; acompte de production de 50 % non remboursable une fois la CAO approuvée. Pour le constructeur : « Refunded in full if we cannot make it as specified. »
- **Garantie / service** [V] : « Lifetime cleaning and inspection » (fenêtre de monture). Garantie écrite plus détaillée : [S] non lue.

## Confiance et service

- [V] **Rapport de laboratoire** : photo du rapport GIA ou IGI envoyée avant confirmation ; numéro GIA sur chaque ligne (ex. 6552332254) ; page `/lab-certification-guide`. Libellé « Lab-grown » partout (jamais « synthetic »).
- [V] **Prix expliqué** : monture + pierre + total ; mention du cours du métal ; confirmation écrite.
- [V] **Sur mesure** (`/how-we-work`) : CAO avec cotes à approuver avant fabrication ; photos et vidéo pour les clients hors zone ; « you deal with one person throughout: Marc ». Fabrication à New York par des fabricants partenaires, parfois à l'étranger « to keep costs reasonable » : ce n'est pas un atelier maison.
- [V] **Avis** : « Rated 4.9 ★ on Google », page `/reviews/` ; aucun avis dans le constructeur.
- [V] **Contact** : chat « concierge », WhatsApp (646 645 2453), téléphone, e-mail, vidéo, rendez-vous à Long Island et Manhattan ; **pas de langue autre que l'anglais** ; devise : dollar seulement.
- [V] **Partage** : lien qui rouvre exactement la bague (`#s=…&pd=…`), e-mail « Email me my design ».
- [V] **Offre** : « Free 1ct lab-grown diamond studs with any purchase over $3,500 ».

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse** : `#s=85121-1&m=14+KT&c=White&z=6.5&pd=…` rouvre la bague exacte ; « Copy a link to this design », e-mail du design. Preuve : adresse du récapitulatif lue. (Écart déjà identifié pour JR Diamond.)
2. **Prix à chaque pas** : 670 $ la monture, +10 $ rose, 600 $ / 810 $ selon la centrale, puis prix par pierre et « Estimated total ». Preuve : mesures ci-dessus.
3. **Acompte annoncé avec le solde** (« Deposit $1,030 now, balance $510 ») et **remboursement intégral si la bague ne peut être faite** : répond à la peur de l'échange de pierre et à la méfiance sur le prix. Preuve : texte du récapitulatif.
4. **Fiche de la pierre** : numéro de rapport GIA/IGI, cotes en mm, « Fits this setting » et filtre de compatibilité monture-pierre. Preuve : cartes de l'étape 3.
5. **Politique « Your Own Stone »** (pierre apportée, reçu d'admission signé, photo sous grossissement, mesure à 0,01 mm) : proche de la transformation de bijoux de famille. Preuve : https://www.mmjewelrygems.com/customer-stone-policy.
6. **Moyens de paiement sans frais et franchise** : Zelle sans frais, 3 % sur crédit affiché avant le paiement. Preuve : `/how-we-work`.
7. **WhatsApp et message pré-rempli** avec toute la configuration, lien `wa.me`. Preuve : lien du récapitulatif.

## Défauts observés

- **Image de la monture non liée à la couleur** : après passage en jaune ou rose, la photo principale reste `85121.jpg` (blanche) ; seule la vidéo porte la couleur. [V]
- **Pas de 3D, pas de sur-la-main, pas de vue 360° de la monture** ; 5 photos et une courte vidéo. [V]
- **Prix des pierres de couleur à 2 $, 5 $, 7 $, 18 $** (sky topaze, améthyste, péridot) : valeurs probablement erronées (bug d'affichage ou prix inversés). [V] le constat, [S] la cause.
- **Libellés internes** dans le tri par nom (`*B-dwn*ENG RINGS SINGLE ROW PRONG`, « ENGAGEMENT RING OVAL CENT »). [V]
- **Délais incohérents** : « up to 3 to 4 weeks », « about two weeks », « finished ring in 7 business days », 3 à 4 semaines pour le sur-mesure. [V]
- **Compteur de filtres** : les compteurs ne rendent pas visible le nombre de montures par filtre ; la grille reste à 24. [V]
- **Reprise pénalisée** : retour sous 7 jours à discrétion, 10 % de frais, sur mesure non repris. [V]
- **Un seul canal de paiement en ligne limité à 3 500 $** par carte ; le reste par Zelle ou virement. [V]
- **Requête `checkout`** envoyée au simple affichage du récapitulatif : comportement inexpliqué. [V]
- **Mobile** : pas de défaut visible relevé à l'écran iPhone ; défilement horizontal non mesuré sur ce site. [S]

## Limites de l'audit

- Aucun formulaire rempli ; le chat, Zelle et Square non touchés ; « Save », « Email me my design », « Request a written quote » non testés.
- **Panier non rempli** : ni le constructeur ni les bagues « made to order » n'ont de bouton d'ajout ; le tiroir observé est vide. Frais de livraison et taxe non chiffrés à l'écran.
- Mesures de chargement : voir « Temps » ci-dessous ; une seule mesure par appareil.
- Temps [V] : première vignette de monture à 0,6 à 1,2 s (ordinateur), 0,76 s (iPhone) ; photo principale dans la fenêtre à 0,24 s (ordinateur), 0,12 s (iPhone) après clic ; liste des pierres affichée après environ 3 s.
- Affichage iPhone vérifié par captures et mêmes parcours ; contrôles listés : 125 (ordinateur), 120 (iPhone).
- Effet de la case « lab-grown accent » sur une monture avec pavé non testé.

## Sources

- https://www.mmjewelrygems.com/design-a-ring (parcours actionné, contrôles `controls.cjs`)
- https://www.mmjewelrygems.com/how-we-work (paiement, livraison, sur mesure)
- https://www.mmjewelrygems.com/returns (retours)
- https://www.mmjewelrygems.com/customer-stone-policy (pierre apportée)
- https://www.mmjewelrygems.com/collection/ et `/collection/emerald-cut-diamond-three-stone-ring-made-to-order` (pièces)
- https://www.mmjewelrygems.com/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/mm-fine-jewelry-and-gems/` (12 images)
