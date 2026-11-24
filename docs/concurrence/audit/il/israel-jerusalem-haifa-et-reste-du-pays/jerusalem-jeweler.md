# Audit : Jerusalem Jeweler (Jérusalem), boutique WooCommerce en dollars

| | |
|---|---|
| Site | Jerusalem Jeweler : « Jérusalem, Israël » ; téléphone américain 1-914-768-4266 ; e-mail. Aucune adresse de boutique ni de société relevée (V) |
| Page de départ | https://jerusalemjeweler.com/product/engagement-ring-14k-gold-and-half-a-ct-natural-diamond-israel-solitaire-rings-for-women-jerusalem-jewelry/ (solitaire 14 k, 0,50 ct naturel) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (locale he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet jusqu'au panier** sur ordinateur (ajout, page `/cart/`). Le bouton « PROCEED TO CHECKOUT » n'a pas été suivi |
| robots.txt | `User-agent: *` : interdits `/wp-content/uploads/wc-logs/`, `/wp-content/uploads/woocommerce_transient_files/`, `/wp-content/uploads/woocommerce_uploads/`, `/*?add-to-cart=`, `/*?*add-to-cart=`, `/wp-admin/` (sauf `admin-ajax.php`). Aucun `Crawl-delay` (V). Aucune requête interdite n'a été émise pendant l'audit (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Fiche | **une seule option : la taille US** (4 à 9,5 par demi-tailles) ; or 14 k jaune, diamant 0,50 ct, couleur F, finition brillante ; largeur 3 mm ; « commandes sur mesure à partir de la taille 10 » (V) | aucun : 3 795,88 $ pour toutes les tailles | — |
| 2. Ajout | « ADD TO CART » ; sans taille, message « choisissez les options du produit » (V) | — | — |
| 3. Panier `/cart/` | ligne « … - 7 », quantité, coupon, **livraison gratuite**, total 3 795,88 $, « PROCEED TO CHECKOUT » (V) | rappel du total | — |
| 4. Paiement | non suivi (règle) | — | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| ADD TO CART (sans taille) | bouton | message d'erreur : « Please choose product options for … » (V) | — | fonctionne (contrôle de saisie) |
| Size (4 à 9,5) | liste | la taille 7 se choisit (V) | inchangé, 3 795,88 $ | fonctionne |
| ADD TO CART (taille 7) | bouton | ajoute la ligne et ouvre un volet avec liens vers `/cart/` et `/checkout/` (V) | 3 795,88 $ | fonctionne |
| Page `/cart/` : quantité, Remove item, Have a coupon?, Calculate shipping | contrôles | présents (V) | — | non actionnés |
| PROCEED TO CHECKOUT | bouton | mène à `/checkout/` (V : lien lu) | — | **non suivi** (règle) |
| Rate… / Your review / Name / Email / Submit | formulaire d'avis | présent, « aucun avis pour le moment » (V) | — | **non rempli** |
| WISHLIST | lien | liste de souhaits (V : libellé) | — | non actionné |
| Search | champ | présent (V) | — | non actionné |
| Menu : HOME, ABOUT, RINGS, BRACELETS, EARRINGS, NECKLACES, CONTACT | liens | catalogue (V) | — | non parcourus un par un |
| Quick View (produits liés) | bouton | présent (V : texte) | — | non actionné |

Absents (V) : 3D, 360°, vidéo, essayage, comparaison, choix de la pierre, du carat, du métal, laboratoire, gravure, suivi, WhatsApp.

## Options disponibles

- **Métal** : or 14 k jaune, solide (V).
- **Pierre** : diamant naturel de 0,50 ct, couleur F (V). Aucune option de laboratoire sur cette fiche (V).
- **Taille** : US 4 à 9,5 ; au-dessus, commande sur mesure (V).
- **Autres bagues** : bagues hébraïques, judaïca, alliances « pour lui et pour elle » (V : page « about »).

## Prix, délais, retours, garanties

- **Prix** : en dollars (3 795,88 $) ; « livraison gratuite » dans le monde (V). TVA israélienne non mentionnée (V).
- **Retour** (V : `/return-policy/`) : retours et échanges acceptés ; **le client paie le retour**, et la perte de valeur si la bague n'est pas en bon état ; droits de douane à la charge du client ; **« annulations : non acceptées »**.
- **Bandeau de fiche** : « garantie de remboursement sans risque », « remboursements sans histoire », paiement sécurisé (V). **Ce bandeau contredit la politique de retour** (frais de retour au client, annulation refusée) (V).
- **Délai** : non indiqué (V). Livraison express mondiale gratuite annoncée (V).
- **Certificat** : « certificat d'authenticité dans un écrin » ; aucun laboratoire nommé (V).

## Confiance et service

- **Libellé du synthétique** : aucun sur cette fiche (V).
- **Avis** : zéro (« REVIEWS (0) ») (V).
- **Atelier** : « achetez directement du joaillier et économisez » ; fabrication à Jérusalem ; aucune photo ni vidéo de fabrication (V).
- **Société** : aucune raison sociale ni numéro d'entreprise relevés (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Fiche | LCP 3,6 s ; charge complète 6,2 à 6,5 s | LCP 3,6 s ; charge complète 10,6 s |

## Points forts à retenir pour JR Diamond

1. **Un panier à trois clics**, taille puis ajout puis panier, avec livraison gratuite et total [V].
2. **Le message d'erreur si la taille manque** guide clairement (« choisissez les options ») [V].
3. **Pas de surprise de frais** : livraison « gratuite » dès l'affichage du prix [V].

## Défauts observés

1. **Presque aucune option** : seule la taille se choisit [V].
2. **Prix en dollars** pour un site basé à Jérusalem [V].
3. **Bandeau « remboursement sans risque » contredit par la politique** (« annulations : non acceptées », retour aux frais du client) [V].
4. **Aucune adresse, aucune société identifiée** : un acheteur ne sait pas à qui il achète [V].
5. **Aucun avis** [V].
6. **Page lente sur iPhone** : 10,6 s de chargement complet [V ; une passe].
7. **Aucun délai de fabrication** [V].

## Limites de l'audit

- Paiement (`/checkout/`), quantité, coupon, calcul de livraison, formulaire d'avis : non actionnés (règle).
- Une seule fiche a été parcourue (le catalogue des bagues n'a pas été comparé).
- Un chargement de la fiche sur iPhone a échoué une fois (erreur de navigation, cause non relevée) ; il a réussi à la reprise. Aucun défi ni code d'accès refusé n'a été reçu.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://jerusalemjeweler.com/robots.txt
- https://jerusalemjeweler.com/product/engagement-ring-14k-gold-and-half-a-ct-natural-diamond-israel-solitaire-rings-for-women-jerusalem-jewelry/
- https://jerusalemjeweler.com/cart/ · /return-policy/ · /about/
- Inventaire : `INVENTAIRE.md`
- Captures et journaux (hors dépôt) : `scratchpad/il/out/jj/`
