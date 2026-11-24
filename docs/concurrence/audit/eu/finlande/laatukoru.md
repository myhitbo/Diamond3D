# Audit Laatukoru (laatukoru.fi, Finlande)

- **Site** : Laatukoru Oy, https://laatukoru.fi/ (Shopify). Entreprise familiale depuis 1972, 11 magasins dans le sud de la Finlande, atelier de la marque Silván à Hyvinkää, boutique en ligne qui livre en Europe (V : /en/pages/laatukorun-tarina, pied de page).
- **Pages auditées** : fiche https://laatukoru.fi/en/products/silvan-solitaire-ovaali-timanttisormus-1-00ct-keltakultaa-silvan-vihkisormukset ; liste https://laatukoru.fi/en/collections/laboratoriotimanttisormukset ; sur mesure https://laatukoru.fi/en/pages/sormuksen-teettaminen ; panier https://laatukoru.fi/en/cart.
- **Date** : 15/11/2026 (date du lot) ; contrôles réalisés le 24/11/2026.
- **Appareils** : Chromium ordinateur 1440 x 900 ; affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Aucun blocage de robots ; `/cart/` interdit : ajout au panier non fait, page panier lue vide.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

Fiche produit à options (pas de configurateur). Le sur mesure passe par un contact.

| Étape | Options (V) |
|---|---|
| Liste synthétiques (120 produits) | Filtres : prix (curseur et deux champs), marque (Silván), collection (Charlotte, Curved, Lauriel, Majlis, Mimosa, Rosalie, Solitaire…), forme (Emerald, Brilliant, Marquise, Oval), matière (or rose, blanc, jaune) ; tri en 10 modes |
| Fiche : pierre | « Lab Grown » ; « Natural H/VS1 (GIA) » ; « Natural G/VS2 (GIA) » |
| Fiche : taille | 15,0 à 19,0 mm au demi-millimètre (diamètre intérieur) |
| Fiche : gravure | bouton « Add free engraving » : champ texte et police (3 polices) |
| Services | guide des tailles, historique de prix, zoom, disponibilité en magasin, garantie, avis, favoris |
| Sur mesure | contact, 3D optionnelle (10 % du prix), 3 à 4 semaines |
| Panier | `/en/cart` vide ; non rempli |

## Contrôles vérifiés

Fiche sur ordinateur (87 contrôles listés) et iPhone (92). Le nom du métal et la couleur sont portés par la fiche (une fiche par couleur d'or).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Diamond : Lab Grown / Natural H/VS1 (GIA) / Natural G/VS2 (GIA) | radio | Même fiche, même image ; prix 1 470 € → 6 076 € → 6 454 € (prix remisé de 30 %) ; référence produit change (`…KKLG`) | oui | OK |
| Ring size (9 valeurs) | radio | 15,0 à 19,0 mm essayés tous : prix inchangé (6 454 €) | non | OK |
| Zoom | bouton | Plein écran avec flèches précédent et suivant ; fermeture par croix | non | OK |
| Price history | lien | Info-bulle : prix actuel 1 470 €, normal 2 100 €, **plus bas prix des 30 jours avant remise 2 150 €** (mention légale) | non | OK |
| Ring Size Guide | lien | Le clic n'a pas ouvert de fenêtre visible ; la page `/en/pages/sormuksen-koko` propose un PDF et un tableau de diamètres (V : lecture) | non | OK en partie |
| Add free engraving | bouton | Champ « Kaiverrus » + liste « Kirjasin » : 3 polices (Tekstaus Roman, Kauno Script 2L, Kauno Script 1L) ; gravure gratuite | 0 € | OK |
| ADD TO CART | bouton | Non actionné (`/cart/add` interdit) | non | non testé (règle) |
| Add to Wishlist | bouton | Élément non cliquable en 5 s (délai dépassé) | non | échec (V) |
| Check store availability | bouton | Panneau latéral en finnois : au moins 11 magasins listés, « Varastossa » pour 10, « Tilattavissa » pour Lahti ; message : la plupart des bagues Silván sont faites à la commande, les magasins n'ont qu'un exemplaire de présentation | non | OK |
| Free Shipping, 30-Day Exchanges and Returns | accordéon | Panneau de livraison et de retours | non | OK |
| Lifetime Warranty for Silván Jewelry | accordéon | Garantie à vie contre les défauts de fabrication ; exclusions : rayures, couleur du métal, perte de pierre, mise à taille hors Laatukoru | non | OK |
| Finnish Family-Owned Business Since 1972 | accordéon | Présentation de l'entreprise | non | OK |
| « Order now and receive your order by : 08.12 - 10.12 » | texte | Date estimée de livraison, calculée selon le jour | non | V (lu) |
| Avis : tri (7 modes), « Lataa lisää », photos et vidéos clients | liste, bouton | 4,78 / 5 sur 9 avis pour le modèle de bande 3 mm vu ; tri : récents, meilleure note, plus bas, photos, vidéos, utiles | non | non testé (tri) |
| Collection : Price (curseur 0 à 32 375 €), Brand, Collection, Diamond / Gemstone Shape, Jewelry Material, tri | filtres | Listes des valeurs lues (V) ; 120 produits au départ ; application d'un filtre non testée | non | partiel |
| Menu Jewelry, Rings, Watches, Smartwatches, Brands, Silván Jewelry, Gifts, SALE, Info, We Buy Gold | liens | Pages catégories | non | OK (V : adresses) |
| Drapeau de pays et langue | bouton | Fenêtre « We ship to… » : choix du pays de livraison et de la langue | non | OK (V : texte) |
| « Create Your Ring » (pied de page) | lien | Page de commande sur mesure (voir ci-dessous) | non | OK |
| Bandeau cookies (Preferences, Decline, Accept) | boutons | Non actionnés | non | non testé |

## Options disponibles

- **Pierre** : synthétique (IGI) ou naturel (GIA, H/VS1 ou G/VS2) sur une fiche à 1,00 ct ; autres fiches selon carat fixe (0,50 ; 1,00 ; 1,50 ; 2,00 ct pour les solitaires ovale, marquise, émeraude) (V : listes).
- **Métal** : or 14 k jaune, blanc, rose (une fiche par couleur) ; 18 k et platine disponibles selon fiche ; une bande testée propose 9 k, 14 k, 18 k (V).
- **Formes** : brillant, ovale, marquise, émeraude (filtre) (V).
- **Gravure** : gratuite, 3 polices (V) ; non remboursable.
- **Sur mesure** : bague ou alliance dessinée avec l'atelier ; or 14 ou 18 k, platine ; naturel ou synthétique ; budget et taille discutés ; modèle 3D à 10 % du prix, crédité à la commande ; délai 3 à 4 semaines (V).

## Prix, délais, retours, garanties

- **Prix** : affichés TTC avec barré et pourcentage de remise (« SAVE 30 % », Black Week), prix de référence légal sur clic (V). Pas de décomposition matière, façon, marge.
- **Livraison** : retrait Posti ou Matkahuolto 0 € dès 50 € (2,90 € en dessous), domicile 9,90 €, DHL Express pour l'Europe 14,90 € ou gratuit dès 150 € ; retrait en magasin 0 € (V). La bannière de la fiche dit « Free shipping dès 50 € », celle de la liste dit 150 € : seuils différents selon le transporteur (V : deux pages).
- **Délai** : la fiche dit « 5 à 8 jours ouvrés » ; la page de livraison dit « environ 1 à 2 semaines » pour Silván ; la date annoncée sur la fiche le 24/11 est 8 à 10 décembre (V ; écart entre les trois formulations).
- **Retours** : 30 jours, produit neuf en emballage ; **gravé ou fabriqué à la demande : non repris** ; frais de retour à la charge du client ; 30 € retenus sur un colis non retiré (V).
- **Garantie** : à vie sur la marque Silván, contre les défauts de fabrication ; prolongation payante d'un an pour les autres produits (V).
- **Certificats** : GIA pour le naturel, IGI pour le synthétique ; certificat de la marque ; GIA au-delà de 0,50 ct pour les bijoux Silván (V).
- **Paiement** : cartes, PayPal, Klarna (facture 14 jours, mensualités), virement bancaire finlandais (Paytrail), cartes-cadeaux (V).
- **Libellé du synthétique** : « Lab Grown » ; sur la page de conseils : « laboratoriotimantti », « synteettinen » en variante (V).

## Confiance et service

- **7 075 avis** affichés pour l'ensemble de la boutique (bandeau) ; 4,78 / 5 sur 9 avis pour la bande 3 mm ; avis en plusieurs langues (V).
- Magasins : 11 annoncés avec stock consultable ; essayage en magasin (V).
- Taille : PDF imprimable ; kit de mesure gratuit **en Finlande seulement** (V).
- Fabrication : atelier de Hyvinkää, or 100 % recyclé, « Key Flag » (V) ; pas de photos ni vidéos d'atelier vues sur les fiches ; modèle 3D proposé pour le sur mesure (V).
- Pas de chat ni de WhatsApp vus sur la fiche (V : liste de contrôles).

## Points forts à retenir pour JR Diamond

1. **Naturel et synthétique côte à côte sur la même fiche**, avec prix et certificat par option : 1 470 € contre 6 076 € (V). Argument de transparence que JR Diamond doit égaler.
2. **Prix de référence légal visible** (« Lowest price 30 days ») : modèle de conformité de l'affichage des remises (V).
3. **Sur mesure en trois temps** (idée, prix et délai, modèle 3D crédité), avec 3D à 10 % du prix (V : /pages/sormuksen-teettaminen). Proche de « ce que vous voyez existe ».
4. **Stock par magasin consultable** et message honnête « fait à la commande, un exemplaire de présentation » (V).
5. **Gravure gratuite avec choix de police** et exception « gravé non repris » expliquée (V).

## Défauts observés

- Trois formulations de délai pour un même produit (5 à 8 jours, 1 à 2 semaines, date au 8-10 décembre) (V).
- Deux seuils de livraison gratuite sur des pages différentes (50 € et 150 €) (V).
- Le bouton Wishlist n'a pas pu être cliqué en 5 s (V).
- Le guide des tailles en ligne est un PDF ; pas d'outil interactif ; le mètre-ruban n'est envoyé qu'en Finlande (V).
- Le panneau de disponibilité en magasin de la version anglaise est en finnois (« Varastossa », « Tilattavissa ») : interface partiellement non traduite (V).
- Frais de retour entièrement à la charge du client (V : « customer is responsible for all the return costs »).

## Mesures

- Premier visuel principal visible (image ≥ 300 px) : **1,23 s ordinateur, 1,85 s iPhone** pour la fiche ovale ; 1,31 s et 1,97 s pour la bande 3 mm (V : une mesure chacune).

## Limites de l'audit

- Panier non rempli (règle `robots.txt`) : récapitulatif, frais, moyens de paiement du panier non vus ; pages d'information lues par un outil tiers (cache jusqu'à sept jours).
- Une seule fiche de bague de fiançailles examinée en détail (solitaire ovale 1,00 ct) ; la bande 3 mm a servi à vérifier l'absence de pierre.
- Filtres de liste lus mais non appliqués ; recherche, compte, favoris, bandeau cookies non testés.
- La vue sur la main (photo de modèle) est une photo fixe, non un simulateur (V : galerie).

## Sources

- https://laatukoru.fi/en/products/silvan-solitaire-ovaali-timanttisormus-1-00ct-keltakultaa-silvan-vihkisormukset · https://laatukoru.fi/en/collections/laboratoriotimanttisormukset · https://laatukoru.fi/en/cart
- https://laatukoru.fi/en/pages/sormuksen-teettaminen · https://laatukoru.fi/en/pages/vaihto-ja-palautusoikeus · https://laatukoru.fi/en/pages/toimitus · https://laatukoru.fi/en/pages/maksutavat · https://laatukoru.fi/en/pages/takuu · https://laatukoru.fi/en/pages/sormuksen-koko · https://laatukoru.fi/en/pages/tuotteiden-tilaaminen
- https://laatukoru.fi/blogs/blogi/laboratoriotimanttisormukset-mita-synteettisista-timanteista-on-hyva-tietaa
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/finlande/laatukoru/`
