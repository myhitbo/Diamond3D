# Audit : Hitched (salle de Charleston)

- **Site** : Hitched (marque de Philadelphie ; salles à Philadelphie, Chicago, Washington ; **Charleston annoncée pour début 2027**)
- **Adresse** : https://tryhitched.com/
- **Page de départ** : https://tryhitched.com/pages/signature-engagement-ring-builder ; page locale : https://tryhitched.com/pages/engagement-rings-charleston
- **Date** : 15/11/2026 (date de l'étude) ; mesures prises le 25/11/2026, pendant l'opération « Black Friday » (20 % de remise sur des diamants jusqu'au 1er janvier)
- **Appareils** : Chromium ordinateur (1366 x 900, en-US) ; Chromium en affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Constructeur parcouru option par option sur ordinateur et rejoué sur iPhone ; « ADD TO CART » non cliqué (`/cart/` interdit par robots.txt) ; fenêtres d'enregistrement, d'indice, de rendez-vous et de comparaison non lues ; panier ouvert vide.
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée), **[I]** inféré, **[S]** supposé. Prix en dollars américains. Le même constructeur a déjà été audité à Chicago : `../illinois/hitched.md` ; ce rapport est une mesure indépendante, orientée Caroline du Sud.

## Parcours

Une seule page en trois blocs, récapitulatif à droite (ordinateur) ou en bas (iPhone) ; chaque choix met à jour l'image, les trois pierres proposées, le total et l'adresse (`?style=cathedral&band=plain&metal=14Y&shape=Round&type=Lab&cmin=2.00&cmax=2.99`, lien partageable) [V].

| Étape | Options | Prix |
| --- | --- | --- |
| 1. Setting | 7 montures (menu) ; anneau lisse ou pavé ; 14 k, 18 k, platine ; or jaune, blanc, rose | monture seule affichée |
| 2. Diamond | 9 formes ; synthétique ou naturel ; carat min et max ; couleur ; pureté ; « three picks » ; comparaison ; vue de la monture et vidéos | diamant seul affiché |
| 3. Your ring | récapitulatif monture + diamant = total ; taille ; ADD TO CART, SAVE MY RING, DROP A HINT, BOOK A DIAMOND VIEWING ; chat | total, Affirm |

## Contrôles vérifiés

Base : monture Signature Cathedral, lisse, 14 k jaune, rond synthétique 2,05 ct D VVS2 IGI, 2,00 à 2,99 ct ; setting 1 899 $, diamant 1 759,20 $ (2 199 $ moins 20 %), total **3 658,20 $** [V, ordinateur et iPhone identiques].

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| « The Signature Cathedral 14K Yellow Gold · $1,899 » | menu | liste les montures avec prix : Solitaire 1 799 $, Cathedral 1 899 $, Hidden Halo 2 049 $, Cathedral Hidden Halo 2 149 $ (liste lue jusqu'à la quatrième ; Halo, Bezel, Heirloom Bezel au relevé de l'Illinois) | monture seule | OK (ouverture ; choix de la monture non rejoué) |
| PLAIN / PAVÉ | bouton | adresse `band=pave&origin=L` ; photo `…_Pave_RD.jpg` ; setting 2 249 $ (+350 $), total 4 008,20 $ | +350 $ | OK |
| 14K / 18K / PLATINUM | bouton | 18 k : setting 2 549 $ (+650 $), total 4 308,20 $ ; platine : 2 849 $ (+950 $), total 4 608,20 $, photo « White » ; adresse `metal=18Y` puis `PT` | +650 / +950 $ | OK |
| Yellow / White / Rose (14 k) | bouton | adresse `metal=14Y/14W/14R` ; photo `Yellow_`, `White_`, `Rose_front_…` ; prix inchangés | aucun | OK |
| Rose sous platine | bouton | clic refusé en 4 s (élément non cliquable) : couleur non proposée avec le platine [V, inféré de l'impossibilité du clic] | n/a | OK (inactif) |
| Round | bouton | rend 2,05 ct D, total 3 658,20 $ ; photo `…_RD.jpg` | oui | OK |
| Cushion | bouton | photo `…_CU.jpg` ; première pierre 1 679,20 $ (au lieu de 1 759,20 $) | oui | OK |
| Asscher, Oval, Elongated Cushion, Pear, Marquise, Emerald, Radiant (7 boutons) | bouton | photo propre à chaque forme (`AS, OV, ELCU, PE, MQ, EM, RA`) ; adresse `shape=` ; première pierre proposée : ovale 1 679 $, marquise 1 599 $, poire 1 599,20 $, elongated cushion 1 999 $, radiant 1 679,20 $ | oui | OK |
| LAB GROWN / NATURAL | bouton | naturel : trois propositions à 13 281, 13 438 et 14 750 $, total relevé 15 180 $ ; adresse `type=Natural` | +11 521,80 $ sur la pierre | OK |
| Carat min / max (champs 2,00 et 2,99) | champ | présents ; plage par défaut 2,00 à 2,99 ; saisie non rejouée ici | oui | non testé (relevé de l'Illinois : bornes 1,00 à 5,99) |
| Carat (2 curseurs) | curseur | présents ; non déplacés | oui | non testé (curseur) |
| Couleur (2 curseurs 0 à 6), Pureté (2 curseurs 0 à 4) | curseur | présents ; non déplacés | oui | non testé (curseur) |
| « How we choose your three » | bouton | présent ; le clic n'a ouvert aucune fenêtre lisible à l'automatisation | aucun | non testé (échec du clic) |
| Trois cartes de pierre | bouton | cartes étiquetées « Best value », « In stock · D.C. showroom », « In stock · Chicago showroom », avec carat, couleur, pureté, taille, laboratoire et prix (1 899 $ pour la deuxième : 2,07 ct G VVS2 IGI) | oui | OK (lecture) |
| Compare side by side | bouton | non ouvert par le script ; relevé de l'Illinois : tableau des écarts | aucun | non testé (échec du clic) |
| See all 203 round diamonds | lien | `/pages/stone-search?shapes=Round&types=Lab&caratMin=2&caratMax=2.99` ; non ouvert (sortie du constructeur) | n/a | non testé |
| Show the front / side of the setting | bouton | photo `Yellow_front_…` puis `Yellow_side_…` | aucun | OK |
| Play a video of the ring on the hand | bouton | affiche une vidéo mp4 720 p (`…HD-720p-4.5Mbps…mp4`) | aucun | OK |
| Play a 360 video of your diamond | bouton | affiche une vidéo mp4 (`…337c8433…mp4`) | aucun | OK |
| Choose a size (liste) | select | 3 à 9 par demi-taille, « Not sure? We'll send you a ring sizer » ; choisi : récapitulatif inchangé | aucun | OK |
| ADD TO CART | bouton | non cliqué : appel de panier `/cart/` interdit par robots.txt | n/a | non testé (panier interdit par robots.txt) |
| SAVE MY RING / DROP A HINT / BOOK A DIAMOND VIEWING | bouton | cliqués ; aucune fenêtre lue par le script ; relevé de l'Illinois : formulaires (prénom, e-mail) et réservation de 30 min ; rien envoyé | aucun | partiel (formulaires, non remplis) |
| CHAT WITH US | bouton | clic : le texte lu était celui de la page, la conversation n'a pas été ouverte ni lue | aucun | non testé (chat) |
| Message our team / text us | lien | `/pages/contact-us` ; non ouvert | n/a | non testé |
| Search, Your Hitched Portal, Cart 0 items | liens | panier ouvert (autorisé) : « Your cart is empty » ; portail `bench.tryhitched.com` (autre domaine) et recherche non ouverts | n/a | partiel |
| Pied de page (Careers, Locations, Press, The Diary, Returns, Warranty, Terms, Privacy, JOIN NOW) | liens, champ | `Locations` et `Returns/Warranty` (`/pages/policies`) lus ; le reste non suivi ; e-mail non saisi | n/a | partiel |
| Ensemble sur iPhone | tous | mêmes boutons, mêmes prix et mêmes adresses ; aucun débordement (390 sur 390) | oui | OK |

## Options disponibles

- **Montures (7)** : Solitaire, Cathedral, Hidden Halo, Cathedral Hidden Halo, Halo, Bezel, Heirloom Bezel [V pour les quatre premières, relevé de l'Illinois pour les autres].
- **Anneau** : lisse ou pavé. **Titre et couleur** : 14 k, 18 k, platine ; jaune, blanc, rose (pas de rose ni de jaune avec le platine).
- **Formes (9)** : rond, cushion, asscher, ovale, elongated cushion, poire, marquise, émeraude, radiant [V].
- **Origine** : synthétique ou naturel ; filtres carat, couleur, pureté ; trois pierres proposées ; comparaison [V].
- **Vues** : photo de face, de côté, vidéo de la bague portée, vidéo 360° de la pierre. Pas de 3D, de zoom ni de réalité augmentée [V].
- **Absents** : gravure, griffes, taille de doigt au-delà de 9 [V].

## Prix, délais, retours, garanties

- **Prix** [V] : trois lignes (setting, diamant, total) qui bougent à chaque clic ; remise barrée « 20 % off until January 1 » sur les pierres concernées (2 199 $ devient 1 759,20 $). Monture « from $2,499 » sur la page de Charleston ; montures du constructeur dès 1 799 $.
- **Délai** [V] : « Estimated to ship by Wed, Jan 6 » le 25/11 (environ 6 semaines [I]) ; « Need it sooner? Message our team or text us ». Sur mesure : paiement intégral de la pierre d'abord, puis rendus et devis, cire imprimée en 3D, fabrication [V, page de Charleston].
- **Retours** [V, https://tryhitched.com/pages/policies] : « All engagement rings are final sale » ; une retaille gratuite, les suivantes payantes ; exclusions pour toute bague personnalisée (gravure, finition, taille). Le récapitulatif répète « Made to order and final sale ».
- **Garantie** [V] : un an sur les défauts de matière et de façon, pour l'acheteur initial, non transférable ; expédition de réparation à la charge du client ; récapitulatif : « Free cleanings for life », estimation (« Apprais… », texte coupé à la lecture).
- **Livraison, taxe, moyens de paiement** : non affichés avant le panier ; panier vide ; Affirm annoncé [V].
- **Certificats** [V] : laboratoire et couleur-pureté nommés sur chaque pierre (IGI pour les synthétiques relevés). Aucun seuil de poids annoncé.
- **Libellé du synthétique** [V] : « Lab grown » (bouton, récapitulatif) ; « Lab Diamond » dans les fiches de la page de Charleston.
- **Langues, devises** [V] : anglais, dollar.

## Confiance et service

- **Charleston** [V, https://tryhitched.com/pages/engagement-rings-charleston] : « Hitched Charleston is opening in early 2027 » ; bouton « JOIN WAITLIST » ; page promettant une consultation d'une heure (prosecco, thé, café) ; la page des salles indique « Charleston Opening soon ». **Aucune salle ouverte en Caroline du Sud à la date de l'audit**. Pierres du site retirables en salle D.C. ou Chicago.
- **Avis** [V, https://tryhitched.com/pages/locations] : « 4.9 stars across 465 Google reviews » ; notes par salle (Philadelphie 5,0 sur 224 avis, Chicago 4,9 sur 165). Aucun avis sur le constructeur.
- **Fabrication** [V] : sur mesure en 5 étapes ; cire imprimée en 3D à essayer ; mention d'une fabrication à Philadelphie. Aucune photo ni vidéo de fabrication de la bague du client, aucun suivi de commande vu.
- **Transformation de bijou de famille** [V, page de Charleston] : « Redesign a cherished heirloom », avec inspection, estimation et consultation.
- **Service** [V] : rendez-vous en salle ou virtuel ; chat « Hitched Concierge » ; assistance du lundi au vendredi, 10 h à 17 h (Est), réponse sous 1 à 2 jours ouvrés.
- **Prêt à porter** [V] : la page de Charleston présente 8 bagues finies avec prix barré (ex. 2,56 ct rond synthétique 14 k : 4 048,20 $ au lieu de 4 498 $).

## Points forts à retenir pour JR Diamond

1. **Configuration dans l'adresse** : chaque option modifie `?style=…&metal=…&shape=…&type=…&cmin=…&cmax=…`, lien partageable [V, `style=cathedral&band=pave&origin=L&metal=14Y&shape=Round&type=Lab&cmin=2.00&cmax=2.99`].
2. **Prix en trois lignes qui bougent à chaque clic** : pavé +350 $, 18 k +650 $, platine +950 $, naturel contre synthétique visible [V, relevés ci-dessus].
3. **Trois propositions étiquetées** plutôt qu'un catalogue (« Best value », stock par salle), avec le compteur « See all 203 round diamonds » [V].
4. **Vidéo de la bague portée et vidéo 360° de la pierre** : le plus proche de « pierre filmée » parmi les sites de l'État [V, deux boutons].
5. **Photo propre à chaque forme et à chaque couleur de métal** (`…_MQ.jpg`, `Rose_front_…`) : l'image suit le choix, contrairement à Charleston Rings [V].
6. **Parcours sur mesure honnête sur l'ordre** : pierre payée d'abord, devis ensuite, cire à essayer [V].
7. **Naturel et synthétique côte à côte** avec écart de prix net [V].

## Défauts observés

- **Pas de salle à Charleston** : la « salle de Charleston » du dossier n'existe pas encore (ouverture début 2027, liste d'attente) [V].
- Pas de 3D ; photos de monture recalculées, la pierre réelle n'est pas montrée sur la bague [V].
- Vidéos sans commandes ni son [I, relevé de l'Illinois ; non revérifié ici].
- Ventes finales ; personnalisation exclue du retour [V].
- Aucune photo ni vidéo de fabrication de la commande ; aucun suivi [V].
- Gravure et griffes absentes ; tailles 3 à 9 [V].
- Frais de livraison et taxe non vus avant le panier [V].
- Choix de couleur sous platine : bouton refusant le clic, sans explication affichée [V].

## Limites de l'audit

- « ADD TO CART » non cliqué (`Disallow: /cart/`) ; `/cart` ouvert : vide. Récapitulatif de panier, frais, délai au panier et paiement non vus.
- Carat, couleur, pureté (champs et curseurs), « Compare side by side », « How we choose your three », fenêtres d'enregistrement, d'indice et de rendez-vous, chat : relevés dans l'audit de l'Illinois, non rejoués ici ; cette session n'a pas lu leur contenu.
- Aucun formulaire rempli ni envoyé ; aucun message de chat écrit.
- La page `/pages/stone-search`, les alliances et le catalogue ne sont pas explorés. Les prix et l'estimation de livraison changent avec la date et la remise (jusqu'au 1er janvier).
- Mesures de chargement (page du constructeur, 2 essais, Playwright, réseau de l'environnement) : visuel principal (photo de monture) ordinateur **1,0 à 1,7 s**, iPhone **1,4 s** ; premier contenu 0,65 à 0,94 s ; chargement complet 2,1 à 3,3 s (ordinateur), 2,5 s (iPhone) [V].
- Les requêtes automatiques de la page (analyse `/.well-known/shopify/monorail`) ne sont pas des clics.

## Sources

1. Constructeur : https://tryhitched.com/pages/signature-engagement-ring-builder
2. Page locale de Charleston : https://tryhitched.com/pages/engagement-rings-charleston
3. Retours et garantie : https://tryhitched.com/pages/policies
4. Salles et avis : https://tryhitched.com/pages/locations
5. Panier (vide) : https://tryhitched.com/cart
6. robots.txt : https://tryhitched.com/robots.txt
7. Audit de l'Illinois : `docs/concurrence/audit/us/illinois/hitched.md`
8. Inventaire de la Caroline du Sud : `docs/concurrence/audit/us/south-carolina/INVENTAIRE.md`
