# Audit : XLAB Diamonds (X Lab Diamonds), catalogue à options

| | |
|---|---|
| Site | X Lab Diamonds (אקס לאב דיאמונדס) : boutiques à Petah Tikva (centre Ofer, 6e étage), Netanya (centre Ir Yamim, 2e étage), Raanana (centre Rananim, rez-de-chaussée) ; téléphone 072-390-2077 (V : pied de page) |
| Page de départ | https://www.xlabdiamonds.co.il/product/טבעת-יהלום-בודד-סוליטר-2 (« solitaire à quatre griffes », pas de constructeur : les options sont sur la fiche) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. La fiche est lue en entier et les prix de toutes les combinaisons viennent des données de la page (HTML). **Le panier et l'effet en direct des options n'ont pas été vérifiés** : le robots.txt interdit `/wp-content/plugins/`, où se trouvent les scripts de la fiche. Ces requêtes ont été bloquées (règle de l'audit), la fiche s'est donc affichée sans son JavaScript de variations (V) |
| robots.txt | `Allow: /` ; interdits `/wp-admin`, `/wp-content/plugins/`, `/wp-login.php`, `/feed`, `/search/`, `/?s=`, `/?p=`, `/tag/` ; aucune règle contre ClaudeBot ni `Crawl-delay` (V). Aucune adresse interdite n'a été ouverte ; les sous-ressources de `/wp-content/plugins/` (Elementor, extension de cache) ont été bloquées par le navigateur d'audit (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Catalogue « טבעות יהלום ויהלומי מעבדה » → « טבעות סוליטר » | cartes avec prix barré et prix soldé (V : « אולי תאהבו גם » : 3 950 → 2 963 ₪, 6 400 → 4 800 ₪) | — | — |
| 2. Fiche | couleur d'or (14 k : rouge, blanc, jaune) ; carat 0,50 / 1,00 / 1,50 / 2,00 / 3,00 ; couleur « E » et pureté « VS » en lecture seule ; taille israélienne 9 à 22 (V) | voir ci-dessous | non vérifié (voir le statut) |
| 3. Ajout au panier | « הוספה לסל » ; panier avec coupon, livraison « gratuite » (V : volet du panier lu dans le HTML de `/try-on`) | — | — |

## Prix (V : données de variation de la page, 15 combinaisons)

Aucune action n'a été nécessaire : les prix sont dans le HTML de la fiche.

| Carat | Prix catalogue | Prix affiché en promotion (− 25 %) |
|---|---|---|
| 0,50 | 3 500 ₪ | 2 625 ₪ |
| 1,00 | 4 200 ₪ | 3 150 ₪ (I : 25 % de 4 200) |
| 1,50 | 4 950 ₪ | 3 713 ₪ (I) |
| 2,00 | 6 300 ₪ | 4 725 ₪ (I) |
| 3,00 | 8 900 ₪ | 6 675 ₪ |

- **La couleur d'or ne change pas le prix** : les 15 combinaisons (3 couleurs × 5 carats) donnent le même prix par carat (V).
- Fourchette affichée sur la fiche : « de 3 500 à 8 900 ₪ », et en promotion « de 2 625 à 6 675 ₪ » (V). Les tailles 17 à 22 ajoutent 200 ₪ (V).
- Une couleur « E » et une pureté « VS » fixes : la fiche ne propose ni naturel, ni autre qualité (V). La fiche ne dit pas « laboratoire » dans son titre, mais le site est une marque de « יהלומי מעבדה » (V : pied de page).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| זהב אדום / לבן / צהוב 14 קראט | radios (liste) | présents ; clic non confirmé (sans les scripts de la fiche, le délai d'attente a été dépassé) (V) | inchangé d'après les données | non confirmé |
| 0.50 / 1.00 / 1.50 / 2.00 / 3.00 CT | radios | se sélectionnent (la valeur apparaît cochée) (V) | **la page affichée n'a pas mis le prix à jour** : le script des variations est bloqué (V) ; la grille vient du HTML | partiel |
| 9 à 22 (tailles) | boutons | la taille 12 se sélectionne (V) ; 17 à 22 portent « + 200 ₪ » | + 200 ₪ dès 17 | partiel |
| מדריך מידות · מה המידה שלי? | liens | guide des tailles (`/מדידת-מידת-טבעת`), non ouvert (V : lien) | — | non actionné |
| הוספה לסל | bouton | cliqué : aucun message, aucun changement visible (V) | — | **sans effet constaté** ; scripts d'ajout bloqués (voir le statut) |
| כנסו לצ׳אט בוואטסאפ | bouton | ouvre WhatsApp (V : libellé, « réponse humaine immédiate ») | — | non actionné |
| whatsapp · copy link (partage) | liens | `wa.me/?text=<nom du modèle> - <adresse>` : partage de la page, **sans options** (V) | — | non ouvert |
| תיאור המוצר · מידע ואחריות · משלוחים והחזרות | onglets | textes lus dans le HTML (V) | — | lus |
| wishlist · fullscreen | boutons | liste de souhaits et plein écran de la galerie (V : contrôles) | — | non actionnés |
| Barre d'accessibilité : taille du texte, niveaux de gris, contraste, polices | menu | présent en pied de page (V : texte) | — | non actionné |
| Inscription au club (nom, e-mail, case d'accord) | formulaire | présent en bas de page (V) | — | **non rempli** (règle) |

Absents de la fiche (V) : 3D, 360°, vidéo, essayage, gravure, choix de la forme, laboratoire ou naturel, comparaison.

**Essayage annoncé, non trouvé** : la page `/try-on` décrit « TRY ON » : choisir la bague, la couleur d'or, le carat et la forme, puis un bouton « מדידה וירטואלית », une image de la main, la photo de sa propre main (V : texte de la page). **Ce bouton est absent** de la fiche (HTML) : la phrase « מדידה וירטואלית » n'y figure pas (V). Même constat que l'inventaire sur trois fiches.

## Options disponibles

- **Métal** : or 14 k rouge, blanc, jaune ; le site annonce aussi « תכשיטי כסף ומואסנייט » (argent et moissanite), nouvelle rubrique (V : menu).
- **Pierre** : diamant de laboratoire (V). Pas de naturel.
- **Carat** : 0,50 à 3,00 ; fiche « 2 carats » et pages « 1, 1,5, 2, 3, 4 carats » dans le menu (V).
- **Taille** : 9 à 22 (V). Pas de « taille à convenir ».

## Prix, délais, retours, garanties (V : onglets de la fiche)

- **Livraison** : jusqu'à 5 jours ouvrés (« 90 % en 3 jours ») ; gratuite dès 1 000 ₪ ; express payant (V). Bague de rayon, donc pas de fabrication (I).
- **Retour** (V) : remboursement possible jusqu'à **deux jours** après réception si la pièce est intacte ; **aucun remboursement au-dessus de 3 000 ₪** ; frais de 5 % ou 100 ₪ (le plus bas) ; fabrication spéciale non reprise ; échange sous 14 jours.
- **Garantie** : 12 mois, hors usage anormal ; **« pas de garantie sur le diamant central ou tout diamant au-dessus de 0,30 ct »** ; service à vie : réparations de chaînes, **mise à taille à vie** (au-delà de 3 tailles : seulement le coût de l'or) (V).
- **Certificat** : un certificat gemmologique est joint **au-dessus de 0,5 ct**, un certificat d'évaluation pour les assurances (V). Laboratoire non nommé sur la fiche (V).
- **Paiement** : jusqu'à 12 fois sans intérêt ; « approuvé par l'Institut des normes » (poinçon) (V).
- **Réserve** : le vendeur peut annuler une commande « à sa seule discrétion », y compris pour une erreur de prix (V).

## Confiance et service

- **Libellé du synthétique** : « יהלום מעבדה » (V).
- **Avis** : note 4,9 sur 393 avis Google intégrés à la fiche ; le propriétaire répond à chaque avis (V). Les prénoms des vendeuses figurent dans des réponses, non recopiés ici.
- **Réseau de trois boutiques** ; programme « Trade in » dans le menu (V : libellé ; contenu non ouvert).
- **Guides** : « comment choisir une bague de fiançailles », « idées de demande », mesure de la taille ; collections nommées (« Am Israel Chai », « Love », « Classic »…) et « produits de judaïca » (V : menu). Pas de page dédiée à l'alliance de kiddouchin relevée.
- **Preuves de fabrication** : aucune ; le site vend des modèles en stock (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Fiche solitaire | LCP 1,9 s ; charge complète 4,2 s | LCP 3,1 s ; charge complète 5,9 s |

## Points forts à retenir pour JR Diamond

1. **Prix de départ et prix promotionnel côte à côte** (3 500 contre 2 625 ₪ au carat de départ) et fourchette sur la fiche [V]. Honnête sur le point d'entrée ; mais une remise permanente de 25 % peut passer pour un prix gonflé [I].
2. **Réponse du propriétaire à chaque avis**, 4,9 sur 393 [V] : preuve sociale visible dans la fiche, à imiter une fois que JR Diamond aura des clients (I).
3. **Mise à taille à vie** et réparations de chaînes, avec limite chiffrée (au-delà de 3 tailles : coût de l'or) [V]. JR Diamond promet la première mise à taille ; le prix de l'or comme seule limite est une formulation claire [I].
4. **Tableau de variations dans la page** : toutes les combinaisons et leurs prix sont dans le HTML (15 pour un modèle) [V]. Bon exemple de prix précalculés, proches de ceux de `src/config/pricing.ts` si celui-ci est branché (I).
5. **Page d'explication de l'essayage** : « pourquoi mesurer avant d'acheter » [V]. Argument écrit pour une fonction que le site n'offre pas (voir les défauts).

## Défauts observés

1. **L'essayage annoncé n'existe pas sur les fiches** [V] : une page promet « TRY ON » et le bouton est absent. Pour JR Diamond : ne pas annoncer ce qui n'est pas livré.
2. **Aucun retour au-dessus de 3 000 ₪**, soit la majorité des bagues de la gamme à partir de 2 ct ; deux jours seulement pour les autres [V].
3. **Pas de garantie sur le diamant central de plus de 0,30 ct** [V] : un point de friction pour une bague de fiançailles.
4. **Pas de choix de la pureté, de la couleur ou de la forme** sur cette fiche [V].
5. **WhatsApp reçoit un lien de partage sans options** (or, carat, taille) [V].
6. **Remise permanente de 25 %** (prix barrés partout) [V ; prix de référence douteux : I].
7. **Pas de naturel, pas de platine, pas de 18 k** [V].
8. **Fiche lente sur iPhone** : 5,9 s de chargement complet [V ; une passe].

## Limites de l'audit

- Les scripts de la fiche (`/wp-content/plugins/`, Elementor et WooCommerce) sont interdits par le robots.txt et ont été bloqués : **le comportement en direct des options, l'image par couleur d'or, le message après l'ajout et le panier ne sont pas vérifiés**. Les prix et les options viennent du HTML de la page.
- Une seule fiche (solitaire à quatre griffes) a été lue en entier ; les autres modèles et la page « טבעות אירוסין » n'ont pas été comparés (la page de catégorie testée a renvoyé une image, sans page de liste).
- WhatsApp, chat, formulaires, inscription au club : non ouverts. Guide des tailles et « Trade in » non lus.
- iPhone émulé avec Chromium ; temps sur machine partagée, une passe.

## Sources

- https://www.xlabdiamonds.co.il/robots.txt
- https://www.xlabdiamonds.co.il/product/טבעת-יהלום-בודד-סוליטר-2 (HTML, curl ; navigateur sans les scripts interdits)
- https://www.xlabdiamonds.co.il/try-on
- Inventaire : `INVENTAIRE.md` (3 fiches sans bouton d'essayage)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/xlab/`
