# Audit : Carter's Collective (Hattiesburg, Mississippi)

- **Site** : Carter's Collective Fine Jewelry, https://carterscollective.com/ (boutique Shopify, 6093 US Highway 98, Hattiesburg)
- **Page de départ** : https://carterscollective.com/collections/bloom-collection-engagement-rings ; fiche auditée : https://carterscollective.com/products/iris-customizable-lab-grown-diamond-engagement-ring
- **Date** : 15/11/2026 (date de l'étude ; contrôles exécutés avec l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours de configuration complet jusqu'au bouton « Add to cart », mais ce bouton n'a pas été actionné : il appelle `/cart/add`, interdit par robots.txt (`Disallow: /cart/`). La page `/cart` (autorisée) a été lue : panier vide, aucun récapitulatif de commande observable.
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Collection « Bloom » | 11 montures « Design this ring » (Dahlia « ready », Azalea, Paisley, Iris, Hydrangea, Ivy, Aster, Tulip, Daisy, Magnolia, Lily) ; texte d'accroche en 5 étapes (monture, forme, carat, métal, « Make it yours ») [V] | collection Bloom |
| 2. Fiche monture (page de configuration) | forme (7), poids du centre (2 à 5 ct), couleur d'or 14 k (3) : tout sur la même page, sans assistant en étapes [V] | fiche Iris |
| 3. Ajout au panier | bouton « ADD TO CART » en haut et en bas de fiche ; « MAKE AN APPOINTMENT TO VIEW » [V] ; non actionné (voir statut) | fiche Iris |
| 4. Panier | `/cart` : « Your cart is empty », « CONTINUE SHOPPING » ; le panneau latéral du panier s'ouvre aussi (panier vide) [V] | /cart |

## Contrôles vérifiés

Fiche Iris, ordinateur sauf mention. Prix de départ 4 725 $ (Oval / 2 Carat / Yellow Gold).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Oval | radio forme | forme par défaut ; l'URL ne change pas | 4 725 $ | fonctionne |
| Round, Emerald, Radiant, Cushion, Marquise, Pear | radio forme | change la variante (`?variant=…`) et la photo principale (rendu de la forme choisie) en 1,5 s environ | inchangé (4 725 $ à 2 ct) | fonctionne ; les 6 testés |
| 2 Carat | radio poids | défaut | 4 725 $ | fonctionne |
| 3 Carat | radio poids | variante changée ; la photo reste identique (rendu de la même forme) | 5 800 $ | fonctionne |
| 4 Carat | radio poids | idem | 6 900 $ | fonctionne |
| 5 Carat | radio poids | idem | 7 700 $ | fonctionne |
| Yellow Gold | pastille métal | défaut | sans effet | fonctionne |
| Rose gold | pastille métal | photo du rendu en or rose (`…RG…Render_Top`) | sans effet (7 700 $ avant et après) | fonctionne |
| White Gold | pastille métal | photo du rendu en or blanc (`…WG…`) | sans effet | fonctionne |
| Combinaisons Round/5 ct/or blanc ; Pear/3 ct/or rose ; Marquise/4 ct/or jaune | radios | chaque combinaison donne une variante et un prix cohérents avec la grille ci-dessus | 7 700 $ ; 5 800 $ ; 6 900 $ | fonctionne |
| Slide 1 à 9 (miniatures) | boutons galerie | 3 testés (2, 3, 4) : changent l'image principale | sans effet | fonctionne ; 9 images : rendu, écrin, main, profils, comparaison de montures |
| Clic sur l'image principale | zoom | ouvre une visionneuse plein écran avec miniatures et bouton « CLOSE » | sans effet | fonctionne (ordinateur et iPhone) |
| Search (loupe) | bouton | ouvre un panneau « Search » avec « Recently viewed » ; aucune requête saisie | sans effet | ouvre ; recherche elle-même non testée |
| Cart (sac) | bouton | ouvre le panneau « Your cart is empty » | sans effet | fonctionne |
| ADD TO CART (2 boutons) | bouton | non actionné : `/cart/add` interdit par robots.txt. Panier interdit par robots.txt | n/a | non testé |
| MAKE AN APPOINTMENT TO VIEW | lien | mène à `/pages/appointments` [V] | n/a | lien lu |
| BOOK AN APPOINTMENT, GET IN TOUCH (bas de fiche) | liens | les deux pointent vers `/collections/all` (pas vers un rendez-vous ni un contact) | n/a | lien inattendu (voir défauts) |
| SHIPPING (accordéon) | accordéon | texte : en stock, expédié le jour ouvré suivant, sinon fabriqué et expédié sous 6 à 8 semaines | n/a | fonctionne |
| ENGAGEMENT RINGS, WEDDING BANDS, FINE JEWELRY, APPOINTMENTS, CUSTOMS & SERVICES, CONTACT, ABOUT | liens de menu | listés dans le DOM ; seuls APPOINTMENTS, CUSTOMS & SERVICES lus | n/a | non testés (hors parcours) |
| MORE, TERMS AND POLICIES | boutons | clic expiré (3 s) après l'ouverture des panneaux ; liens de pied de page lus par ailleurs (remboursement, expédition, confidentialité, conditions) | n/a | non testés |
| Champ e-mail « Sign up » (pied de page) | formulaire | non rempli (règle : aucun formulaire) | n/a | non testé |
| Icône compte | lien | non ouvert (compte) | n/a | non testé |
| Téléphone 601-582-4222, Facebook, Instagram, TikTok, Pinterest, Google Maps | liens | lus dans le DOM, non suivis | n/a | non testés |

Absents de la fiche (aucun contrôle trouvé, ordinateur et iPhone) : taille de doigt, gravure, choix de la griffe ou du corps, filtre de pierre, certificat, comparaison, enregistrement, partage, vidéo, 360°, 3D, réalité augmentée, essayage sur la main, chat, WhatsApp. [V] liste de 74 contrôles (ordinateur) et 66 (iPhone).

## Options disponibles

- **Formes** (7 radios) : Oval, Round, Emerald, Radiant, Cushion, Marquise, Pear [V]. Le texte « Center Stone Shape Options » de la même fiche n'en cite que 4 (Oval, Emerald, Radiant, Round) [V].
- **Poids** : 2, 3, 4, 5 carats [V]. Aucun poids sous 2 ct.
- **Métal** : or 14 carats jaune, blanc, rose ; aucun 18 k, aucun platine [V].
- **Origine** : diamant synthétique (« Lab Grown ») uniquement ; couleur F-H, pureté VS1-VS2 annoncées [V].
- **Montures** : 11 liées sur la page de collection (liste ci-dessus ; l'inventaire en comptait 12) ; autres bagues dans « All engagement rings » [V pour les noms].
- **Corps de bague, griffes, pavage** : fixés par la monture choisie ; pas de choix libre [V].

## Prix, délais, retours, garanties

- **Prix** : affiché sur chaque combinaison, en dollars américains, sans décomposition (ni métal, ni pierre, ni façon). Grille Iris : 2 ct 4 725 $, 3 ct 5 800 $, 4 ct 6 900 $, 5 ct 7 700 $ ; la forme et le métal ne changent pas le prix [V]. Autres fiches « You may also like » : Hydrangea 5 025 $, Daisy 4 225 $, Lily 5 025 $, Azalea 3 270 $ (prix de la variante par défaut) [V].
- **Délai** : trois valeurs différentes sur le même site : « Ships in 3-6 weeks » (texte de la fiche), « 6-8 weeks » (accordéon Shipping), « 2 to 12 weeks » pour le sur-mesure (politique d'expédition) [V]. Sur-mesure : premier rendu 2 à 4 semaines après consultation, révision encore 2 à 4 semaines, production 6 à 8 semaines [V, /pages/custom-jewelry].
- **Livraison** : États-Unis uniquement (« We currently ship domestically ») ; retrait en boutique possible ; frais non vus, car le panier n'a pas été atteint [V / non testé].
- **Retours** : 7 jours, échange ou avoir seulement, pas de remboursement ; commandes spéciales, sur-mesure, redimensionnées : vente finale. Avoir sous 10 jours ouvrés après inspection [V, /policies/refund-policy]. [I] Une bague Bloom configurée est une « special order » donc vente finale ; non confirmé par le texte.
- **Garanties** : garantie à vie contre les défauts de fabrication, nettoyage annuel offert, un redimensionnement offert la première année, services payants ensuite [V, /pages/custom-jewelry].
- **Financement** : aucune mention trouvée sur la fiche ni dans le panier [V pour l'absence sur ces deux pages].
- **Moyens de paiement** : non affichés (panier non atteint) [non testé].

## Confiance et service

- **Certificats** : aucun certificat (GIA, IGI) cité sur la fiche ; seulement couleur F-H et pureté VS1-VS2 en fourchette [V]. La page de remboursement évoque « certificates or appraisals provided at sale » [V].
- **Libellé du synthétique** : « Lab Grown Diamond » partout, dans le titre, les options et la description [V].
- **Langues, devises** : anglais, dollars [V].
- **Avis clients** : aucun avis ni note observés sur la fiche [V pour la page lue].
- **Rendez-vous** : 6 types de rendez-vous (mariage, alliances, sur-mesure, boutique, **virtuel**, rachat d'or) ; « zero pressure to purchase » ; formulaire non ouvert [V, /pages/appointments].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier sur la fiche ; la page sur-mesure décrit 5 étapes et annonce une galerie « Custom pieces we've brought to life » [V]. Suivi : « concierge » qui envoie des mises à jour par e-mail et le suivi d'expédition [V, politique d'expédition].
- **Transformation de bijou de famille** : proposée (« redesigning an heirloom », or inutilisé crédité en paiement partiel) [V].
- **Performance** : plus grand élément affiché à 0,77 s (ordinateur) et 0,96 s (iPhone) ; événement `load` à 2,8 s et 2,9 s. Photo de rendu, sans 3D [V, mesure Chromium sans limitation de réseau].

## Points forts à retenir pour JR Diamond

1. **Prix par combinaison, visible dès l'ouverture de la fiche** : 4 725 $ puis 5 800, 6 900, 7 700 $ selon le poids, mis à jour en 1,5 s sans rechargement (preuve : contrôles ci-dessus). C'est l'écart principal avec « Sur devis ».
2. **Une seule page, quatre choix** (forme, poids, métal, monture) : parcours très court, adapté au mobile (66 contrôles seulement sur iPhone) [V].
3. **Image qui suit chaque choix** : la photo change avec la forme et la couleur d'or (rendus propres à chaque variante) [V].
4. **Rendez-vous virtuel proposé** et « zero pressure » [V, /pages/appointments].
5. **Garanties lisibles** : à vie contre les défauts, un redimensionnement offert, nettoyage annuel [V].
6. **Atelier mis en avant en pied de page de la collection** (« On-Site Master Jeweler ») mais sans preuve visuelle de fabrication ; espace libre pour JR Diamond [I].

## Défauts observés

- Trois délais contradictoires pour la même bague (3 à 6 semaines, 6 à 8 semaines, 2 à 12 semaines) [V].
- La description n'annonce que 4 formes alors que 7 sont proposées [V].
- La forme et le métal n'ont aucun effet sur le prix ; le prix ne dépend que du poids, sans explication [V].
- Les liens « BOOK AN APPOINTMENT » et « GET IN TOUCH » du bas de fiche mènent à la liste des produits, pas à un rendez-vous ni à un contact [V, href `/collections/all`].
- Pas de gravure, de taille de doigt, de choix de griffes, de certificat ; pas de 3D, vidéo, 360° ni essayage [V].
- Le titre de la collection annonce « Choose Your Setting » en 5 étapes, mais le parcours réel n'a pas d'étapes [V].
- Retours limités à 7 jours en avoir ; sur-mesure sans retour [V].

## Limites de l'audit

- Le panier n'a pas été atteint avec un article : `/cart/add` est interdit par robots.txt ; frais de livraison, taxes, moyens de paiement, récapitulatif non vus [S pour tout ce qui concerne cette étape].
- Seule la fiche Iris a été configurée option par option ; les autres montures (Dahlia, Azalea, etc.) n'ont été vues que par leur lien et leur prix « You may also like ».
- Recherche, menu « MORE », « TERMS AND POLICIES », e-mail, compte, rendez-vous : non testés (formulaires, compte ou clic expiré).
- Combinaisons de 3 forme × 4 poids × 3 métaux : 3 combinaisons croisées et chaque option isolée vérifiées, pas les 84.
- Mesures de temps : une seule exécution par appareil, sans limitation de réseau.
- Un seul passage par page ; robots.txt consulté avant chaque adresse (Allow: `/` ; Disallow `/cart/` et `/cart.js`).

## Sources

- https://carterscollective.com/collections/bloom-collection-engagement-rings
- https://carterscollective.com/products/iris-customizable-lab-grown-diamond-engagement-ring
- https://carterscollective.com/policies/refund-policy
- https://carterscollective.com/policies/shipping-policy
- https://carterscollective.com/pages/custom-jewelry
- https://carterscollective.com/pages/appointments
- https://carterscollective.com/cart
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/carters-collective/`
