# Audit : La Perla Jewelry (lpj.co.il), site en russe pour les russophones d'Israël

| | |
|---|---|
| Site | La Perla Jewelry (Lpj Laperla Jewelry) : « Harakon 9, Ramat Gan, Israël » en pied de page ; +972 77-513-0680 ; Lpj@lpj.co.il ; « conception, production, vente en gros et au détail » ; livraison Israël, États-Unis, Canada et autres pays (V). L'inventaire classait ce site sans adresse : l'adresse figure dans le pied de page des fiches et du panier |
| Page de départ | https://lpj.co.il/ (accueil russe), puis la fiche https://lpj.co.il/shop/drevnee-derevo/ (« Древнее дерево », bague, 0,60 ct naturel) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet jusqu'au panier** sur ordinateur (ajout, page `/cart/`). « Proceed To Checkout » non suivi |
| robots.txt | `User-agent: *` : seul `/wp-admin/` est interdit (sauf `admin-ajax.php`). Aucun `Crawl-delay` (V). Aucune requête interdite n'a été émise pendant l'audit |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Accueil et rubrique « rings » | catalogue : bagues, boucles d'oreilles, bracelets, pendentifs ; « meilleures ventes » ; 152 liens internes (V) | prix par fiche (par exemple 6 600 ₪ et 14 605 ₪) | — |
| 2. Fiche | **une seule option : la couleur d'or** (rouge, blanc, jaune), par liste déroulante ; le texte parle de « or jaune 750 » (18 k) mais la liste offre trois couleurs ; pas de taille, pas de carat (V) | **aucun** : 6 600 ₪ pour les trois couleurs | **aucun** : même photo (V) |
| 3. Ajout | « Add To Cart » ; volet avec « View Cart » (V) | — | — |
| 4. Panier `/cart/` | ligne « … - Yellow », quantité, mise à jour, **livraison : courrier recommandé 20 ₪, coursier 50 ₪, retrait**, total 6 620 ₪ avec le recommandé, « Proceed To Checkout » (V) | + 20 ₪ | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Gold : red / white / yellow | liste | se règle ; la valeur change dans la liste (V) | inchangé, 6 600 ₪ | fonctionne |
| Photo de la fiche | image | **ne change pas** avec la couleur d'or (V) | — | sans effet |
| Add To Cart | bouton | ajoute la ligne ; le volet offre « View Cart » (V) | 6 600 ₪ | fonctionne |
| Panier : quantité · Update cart · modes de livraison (3 boutons radio) · Calculate shipping | contrôles | présents (V) | recommandé 20 ₪, coursier 50 ₪ | non actionnés |
| Proceed To Checkout | bouton | mène au paiement (V : libellé) | — | **non suivi** (règle) |
| Additional Information (onglet) | onglet | « GOLD : red, white, yellow » (V) | — | lu |
| wishlist · Ask a question · « Получить скидку » (remise) | liens | présents (V : texte) | — | non actionnés |
| English ▼ | liste | version anglaise (V : texte) | — | non ouverte |
| Menu : SHOP, ABOUT, REVIEWS, CONTACTS | liens | catalogue, histoire, avis, contact (V) | — | non parcourus un par un |

Absents (V) : choix de la taille, du carat, de la pureté, de la pierre, laboratoire, gravure, 3D, 360°, essayage, comparaison, WhatsApp visible sur la fiche.

## Options disponibles

- **Métal** : or jaune 750 (18 k) décrit ; la liste offre rouge, blanc, jaune sans mention du titre ; autres fiches « or 14 carats » (V).
- **Pierre** : diamant naturel de 0,60 ct, couleur G–H, pureté VS–SI (V). Le site cite « diamants de laboratoire » ailleurs (inventaire).
- **Taille** : aucune option sur la fiche (V).

## Prix, délais, retours, garanties

- **Prix** : en ₪ ; modèle « Vintage Road » à 14 605 ₪ au lieu de 12 700 ₪ cités dans la description (V : accueil, deux prix différents pour la même bague) ; remise barrée sur d'autres fiches (10 005 ₪ barré, 7 820 ₪) (V).
- **Délai** (V : fiche des boucles d'oreilles `/shop/kolczo-zolotoe-22/`) : fabrication **jusqu'à 21 jours ouvrés**, livraison 3 à 7 jours ouvrés après fabrication, par coursier.
- **Livraison** : « gratuite par coursier partout en Israël » sur la fiche des boucles d'oreilles ; **le panier facture 20 ou 50 ₪** (V : les deux textes diffèrent).
- **Paiement** : carte jusqu'à **24 paiements sans intérêt** ; chèques jusqu'à 18 paiements ; paiement comptant échelonné ; iCredit ou PayPal (V : fiche des boucles d'oreilles).
- **Service** : nettoyage et remise à neuf gratuits ; poinçon officiel (V : même fiche).
- **Retour, garantie** : non lus sur les pages ouvertes (V).

## Confiance et service

- **Libellé du synthétique** : « лабораторные бриллианты » (inventaire) ; non vu sur les pages de cet audit.
- **Avis** : page « REVIEWS » (`/otzyvy/`) ; non ouverte (V : lien).
- **Atelier** : « travail à la main par un réseau de maîtres artisans » (V : « About us »). Aucune photo ni vidéo de fabrication relevée (V).
- **Contenu** : descriptions longues et narratives en russe (« bague pour celles qui croient à la magie, aux racines… ») (V).
- **Langues** : russe, anglais (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Fiche | LCP 2,8 à 2,9 s ; charge complète 5,9 à 6,0 s | LCP 3,3 s ; charge complète 5,6 s |

## Points forts à retenir pour JR Diamond

1. **Un échelonnement très long** : 24 paiements par carte, 18 par chèque (V : fiche des boucles d'oreilles) : le plus étendu relevé avec Inbar et Levy's.
2. **Descriptions « récit »** qui donnent un sens à la bague (la bague « arbre ancien », « comme un souvenir de famille ») [V] : un registre émotionnel proche de la proposition de JR Diamond (« on voit naître son bijou »), dans la langue des olim russophones.
3. **Frais de livraison affichés dans le panier avec trois options** (recommandé 20 ₪, coursier 50 ₪, retrait) [V].
4. **Poids, couleur et pureté de la pierre dans la description** (0,60 ct, G–H, VS–SI) [V] : plus complet que la plupart des fiches sans constructeur.

## Défauts observés

1. **La couleur d'or ne change ni le prix ni la photo** [V].
2. **Pas de choix de taille** sur la fiche (V) : elle est à convenir hors du site (I).
3. **Prix incohérent** : 14 605 ₪ affiché, 12 700 ₪ dans le texte de la même bague [V].
4. **Livraison « offerte » annoncée, 20 à 50 ₪ au panier** [V].
5. **Or « 750 » dans le texte, trois couleurs au choix sans mention du titre** [V].
6. **Site non traduit en hébreu**, avec des mélanges russe-anglais (menu et panier) [V].
7. **Aucun avis, aucune preuve de fabrication relevés sur la fiche** [V].
8. **Pied de page daté de 2023** (« Copyright © 2023 ») [V].

## Limites de l'audit

- Paiement, quantité, calcul de livraison, formulaires de contact et remise : non suivis ou non remplis (règle).
- Une seule fiche de bague parcourue en entier ; la fiche des boucles d'oreilles n'a été lue que pour les conditions (délais, paiement, livraison) ; les retours et la garantie ne sont pas trouvés.
- iPhone : chargement seulement.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://lpj.co.il/robots.txt
- https://lpj.co.il/ · /shop/drevnee-derevo/ · /cart/ · /about-us-2/ · /shop/kolczo-zolotoe-22/
- Inventaire : `INVENTAIRE.md` (site pour les olim russophones, fabrication ≤ 21 jours, poinçon)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/perla/`
