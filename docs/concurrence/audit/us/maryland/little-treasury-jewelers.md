# Audit : Little Treasury Jewelers

- **Site** : Little Treasury Jewelers (Gambrills, Maryland)
- **Adresse** : https://littletreasury.com
- **Page de départ** : https://littletreasury.com/apps/ringbuilder/settings/ (constructeur de bague GemFind)
- **Date** : 15/11/2026 (exploration) ; audit refait le 25/11/2026 après relecture de robots.txt (AUTORISÉ, HTTP 200)
- **Appareils** : Chromium ordinateur 1366 x 900 ; Chromium en affichage iPhone 13
- **Statut** : **partiel** : le site ne refuse pas le navigateur, mais le constructeur et le catalogue ne s'affichent pas depuis cette session (voir « Défauts » et « Limites »). Ce rapport remplace celui du 24/11 (« bloqué », robots.txt en 429, qui ne se reproduit plus).

## Parcours

| Étape | Options observées | État |
|---|---|---|
| Constructeur `/apps/ringbuilder/settings/` | Gabarit du site (en-tête, pied de page), zone centrale vide ; l'application charge `gemfind.org/static/js/main.js` et `main.css` (200) mais n'affiche rien (V, 10 s + interaction souris et défilement, ordinateur et iPhone) | non fonctionnel ici |
| Catalogue `/collections/engagement-rings` | Titre « ENGAGEMENT RINGS », puis une roue de chargement qui ne se termine pas (V, 25 s) ; les 31 produits sont lisibles dans `products.json` | partiel |
| Fiche produit (bague semi-monture Gabriel & Co.) | Prix, SKU, bouton « Request more information », bouton « SOLD OUT », tableau « Additional information » (collection, couleur, finition, métal, style) ; galerie : 5 liens d'images 1800 px dans le code, mais images à 0 x 0 px, donc non visibles (V) | partiel |
| Panier `/cart` | « Your cart is currently empty. Continue shopping » (V) | atteint ; non rempli |
| Sur mesure `/pages/custom-jewelry-in-gambrills-md` (depuis `/pages/custom-design`, 301) | Texte seul : idée, rendu CAO, cire, bague ; reprise de bijoux anciens en 5 étapes (V, curl) | lu |

Le parcours « monture -> diamant naturel ou synthétique -> bague complète » annoncé par l'exploration n'a pas pu être suivi : aucune étape ne s'affiche.

## Contrôles vérifiés

Ordinateur (37 contrôles sur la page du constructeur, 38 sur le catalogue, 47 sur la fiche) ; iPhone (17, 18 et 27). Liste commune, sans doublons :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu WATCHES / JEWELRY / ENGAGEMENT RINGS / WEDDING RINGS / SERVICES | liens | mènent aux collections et à `/pages/services` | sans effet | non cliqués un par un (liens relevés, pages principales lues) |
| Bandeau « Free Standard Shipping On Any Order Over $1,000 » | texte | annonce | livraison gratuite dès 1 000 $ | V |
| Log in (`/account`) | lien | non ouvert (compte) | sans | non testé : compte |
| Search (`/search`) + champ « Search our store » | bouton, champ | non utilisé (adresse de recherche) | sans | non testé : recherche |
| Cart (`/cart`) | lien | page panier vide | sans | V |
| Téléphone (410) 721-7100 | lien `tel:` | ouvre l'appel | sans | V (lien) |
| Instagram, Facebook, YouTube, Pinterest | liens | réseaux sociaux de la maison | sans | non ouverts |
| Watches, Jewelry, Wedding Rings, Engagement Rings, All Brands & Designers | liens de pied de page | collections | sans | liens relevés |
| About Us, Our Team, Financing Options, Customer Reviews, Contact Us, Events, Blogs | liens | pages de contenu ; Financing et Reviews lues | sans | partiel |
| Return Policy, Terms, Privacy, FAQ | liens | pages lues (retours et FAQ) | sans | V |
| Constructeur : zone de l'application | application GemFind | rien d'affiché | non relevé | **ne fonctionne pas** (chargement sans fin / vide) |
| Catalogue : grille des bagues | chargement | roue de chargement, aucun produit | prix absents à l'écran | **ne fonctionne pas** |
| Fiche : « Request more information » | lien (adresse vide) | clic sans changement visible ; un formulaire de recherche et un formulaire de panier sont dans la page | sans | **sans effet visible** |
| Fiche : « SOLD OUT » | bouton | désactivé (article épuisé) | 1 500 $ | V |
| Fiche : « Additional information » | accordéon | déplie le tableau de caractéristiques | sans | V |
| Fiche : « Share » (Facebook), « Tweet », « Pin it » | liens | partage vers réseaux ; non suivis | sans | liens relevés |
| Fiche : galerie (5 images) | miniatures | images à 0 x 0 px, non visibles | sans | **ne s'affiche pas** |
| Fiche : « Learn More » (bloc magasin) | lien `#` | sans destination | sans | lien mort (V) |
| Fiche : « You may also like » | zone | vide | sans | **vide** |
| Ajout au panier (`/cart/add`) | formulaire | **non cliqué** : panier interdit par robots.txt (`Disallow: /cart/`) ; de plus l'article est épuisé | sans | non testé |
| Mode photo / vidéo / 360° / 3D / sur la main / AR / zoom | n.d. | aucun de ces modes visible sur la fiche ; le code de GemFind en prévoit certains (360°, vidéo, essayage) sans qu'ils s'affichent (V pour le code, voir inventaire) | sans | non testé : constructeur muet |
| Filtres (carat, forme, couleur, pureté, prix, certificat), taille de doigt, gravure, comparer, enregistrer | n.d. | absents de ce que le site affiche ; filtres des diamants dans le constructeur non lus | sans | non testé : constructeur muet |
| Chat, WhatsApp, essayage à domicile, prise de rendez-vous en ligne | n.d. | aucun bouton de ce type relevé (V : pas dans les listes de contrôles) | sans | absent |

## Options disponibles

- **Métaux** : les semi-montures du catalogue sont en or 14 k (jaune, blanc), une en or 18 k blanc, une en platine (Hearts on Fire) (V, `products.json`). Aucun choix de métal par bague : une variante unique « Default Title » par produit (V, 31 produits).
- **Marques** : Gabriel & Co., A.Jaffe, Hearts on Fire (V).
- **Types** : « Diamond Semi-Mount Engagement Ring » (28), « Diamond Engagement Ring » (1), « Gold Semi-Mount Ring » (1) (V, décompte de `products.json` : 31 produits).
- **Pierre de centre** : « Center stone not included » (V, fiche). Formes, carats, couleurs, puretés, certificats : non lus (constructeur muet).
- **Synthétique** : le constructeur annonce une entrée pour diamants synthétiques (I, exploration) ; sur le site lu, un seul produit « Lab Grown » (boucles d'oreilles 1 ct, 399 $, page d'accueil) (V).
- **Services** : sur mesure, réparation, mise à taille et remontage, nettoyage, soudure, gravure à la machine, estimations, rachat d'or (V, `/pages/services`).

## Prix, délais, retours, garanties

- **Prix des montures** : de 1 300 à 8 200 $, pierre non incluse (V, `products.json` du 25/11, 31 produits). Le prix affiché est celui de la monture seule ; aucun prix de bague complète n'est lisible.
- **Prix du sur mesure** : « custom jewelry doesn't cost a premium » ; devis après dessin ou rendu CAO (V). FAQ : « very difficult to estimate a price without inspecting the item firsthand » (V, `/pages/faq`).
- **Livraison** : gratuite dès 1 000 $ (V, bandeau). Frais en dessous et moyens de paiement : non vus (panier vide, ajout interdit).
- **Délai** : aucun délai annoncé pour le sur mesure ni pour une commande en ligne (V : absent des pages lues).
- **Retours** : 10 jours après réception, article non porté, avec étiquettes et emballage ; frais de retour et d'assurance à la charge du client ; **non retournables : articles sur mesure ou personnalisés, commandes spéciales, articles modifiés, soldes** ; 14 jours seulement pour l'Union européenne (V, `/policies/refund-policy`).
- **Garantie** : 1 an pour les piles de montres, 3 ans en option (V, FAQ) ; rien pour les bagues relevé.
- **Financement** : layaway, ou 12 mois avec crédit approuvé via Wells Fargo, et Affirm (V, `/pages/financing-options`).
- **Devise** : dollars américains, anglais seulement (V).

## Confiance et service

- Boutique à Gambrills, 2506 New Market Ln, ouverte lundi-vendredi 10 h-18 h, samedi 10 h-17 h, fermée le dimanche ; depuis 1996 (« 30th anniversary ») ; revendeur agréé Grand Seiko (V).
- Atelier sur place : « master jeweler » fait 99 % des réparations au magasin ; machine à souder au laser et gravure informatisée (V, FAQ et services).
- Page « Customer Reviews » : seulement le titre « Testimonials », avis non affichés (V, page lue ; contenu probablement chargé par script, I).
- Fabrication : étapes décrites par du texte seulement (idée, CAO, cire, fonte, sertissage, finition) ; aucune photo ni vidéo d'atelier, aucun suivi de commande relevé (V).
- Discours d'achat direct : « you're buying direct from the manufacturer when using our custom services » (V).
- Rendez-vous : « Please schedule an appointment » ; pas de module de réservation relevé (V).

## Points forts à retenir pour JR Diamond

- **Récit « directement du fabricant » et « pas de surcoût »** : même terrain que « l'atelier en direct », mais sans aucune preuve montrée ni prix décomposé. Preuve : `/pages/custom-jewelry-in-gambrills-md` (V). Ce que JR Diamond montre (fichier de fabrication, pierre filmée) répond à ce que le site affirme sans prouver.
- **Étapes de reprise d'un bijou ancien en 5 étapes avec devis après la CAO** : bonne structure pour la page « Bijou de famille » (même page, V).
- **Financement affiché** (Wells Fargo, Affirm, layaway) : attente probable des acheteurs américains ; pour Israël, équivalent à étudier (I) (`/pages/financing-options`).
- **Livraison gratuite dès 1 000 $** annoncée en bandeau permanent : repère simple pour afficher la livraison (V, bandeau).

## Défauts observés

- **Constructeur vide** : l'application GemFind charge ses scripts (200) mais n'affiche rien, ni sur ordinateur ni en iPhone (V, 25/11). Cause non établie : l'exploration signalait des appels à `api.jewelcloud.com` en HTTP simple, que le mandataire de la session ne transporte pas (V dans le code, I pour la cause du vide).
- **Catalogue sans fin** : `/collections/engagement-rings` reste sur une roue de chargement (V, 25 s ; le contenu existe dans `products.json`).
- **Fiche** : images de la galerie à 0 x 0 px, « You may also like » vide, lien « Learn More » vers `#`, « Request more information » sans effet visible (V). Pied de page « © 2023 » (V).
- **Prix de monture seule**, jamais de bague complète lisible ; bagues sur mesure exclues des retours (V).
- Le site ne présente la 3D, la vidéo ni le 360° sur aucune page lue (V).

## Limites de l'audit

- Le constructeur et le catalogue ne s'affichant pas, aucune étape (métal, forme, carat, origine, monture, taille, gravure, filtres) n'a pu être actionnée ; ce rapport n'affirme rien sur leur contenu. Il se peut que le site fonctionne chez un visiteur normal : la panne vient peut-être de la session (I).
- Temps d'apparition du visuel principal : **non mesurable**, aucun visuel de bague n'est apparu en 25 s (ordinateur et iPhone) ; la page seule est prête en 1,2 à 1,7 s (DOM, V).
- `/cart/add` interdit par robots.txt : aucun ajout au panier ; le panier n'a été vu que vide. Frais de livraison, délai et moyens de paiement du panier non vus.
- Aucun formulaire rempli, aucun compte, aucun chat ouvert. Pages à intervalle de 2 s au moins.
- Écart à noter : aucun.

## Sources

- https://littletreasury.com/robots.txt (lu le 25/11, 200 ; `/cart/` interdit, `/cart` et le reste autorisés) ; contrôle `robots.cjs` : AUTORISÉ pour toutes les pages ouvertes.
- https://littletreasury.com/apps/ringbuilder/settings/ (Chromium, ordinateur et iPhone, 25/11).
- https://littletreasury.com/collections/engagement-rings et `/products.json?limit=250` (Chromium et curl, 25/11).
- Fiche : https://littletreasury.com/products/gabriel-co-14k-yellow-gold-split-shank-diamond-semi-mount-engagement-ring-er11721o6m44jj-0048
- https://littletreasury.com/cart (Chromium, vide).
- https://littletreasury.com/pages/custom-jewelry-in-gambrills-md, `/pages/services`, `/pages/faq`, `/pages/financing-options`, `/policies/refund-policy`, `/pages/customer-reviews` (curl, 25/11).
- Inventaire : `docs/concurrence/audit/us/maryland/INVENTAIRE.md` (exploration du 15/11).
