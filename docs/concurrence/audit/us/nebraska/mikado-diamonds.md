# Audit : Mikado Diamonds (Omaha, Nebraska)

- **Site** : Mikado Diamonds, vente en ligne seulement (Omaha, NE). **Adresse** : https://mikadodiamonds.com/ ; page de départ : https://mikadodiamonds.com/collections/settings-ring-builder
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Tout le parcours a été actionné jusqu'au bouton « ADD TO CART », mais `/cart` et `/cart/add` sont INTERDITS par le robots.txt (`Disallow: /cart`) : le bouton n'a pas été cliqué, le panier n'a pas été vu.
- Légende : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.
- Pages lues (toutes AUTORISÉES par robots.txt, contrôlées avant ouverture) : le configurateur, la fiche `…/settings-ring-builder/products/jacklynn-lab-grown-diamond-engagement-ring` (fiche étudiée à fond), `/collections/loose-lab-grown-diamonds`, `/pages/lifetime-warranty`, `/pages/payment-options`, `/pages/ring-sizers`, `/pages/book-a-free-virtual-consultation-with-a-diamond-expert`.
- Pages INTERDITES non ouvertes : `/cart`, `/cart/add`, `/search`, `/policies/refund-policy` (lien du pied de page), `/account`.

## Parcours

Le « configurateur » est un parcours en 3 étapes sur Shopify : **monture → diamant → bague complète** (V, bandeau « 1 Choose a SETTING / 2 Choose a DIAMOND / 3 View COMPLETE RING »). On peut aussi partir d'un diamant (naturel, synthétique, moissanite).

| Étape | Options (V) |
|---|---|
| 1. Monture (`/collections/settings-ring-builder`, 41 pages de montures) | Grille de montures « From $995 » à « From $4,650 » ; tuiles de forme (Round, Square, Cushion, Oval, Emerald, Pear, Asscher, Heart, Radiant, Marquise) ; liens de style (solitaire, halo, trois pierres, pavé, vintage, un rang, multirang) ; liens de métal (platine, or blanc, jaune, rose) |
| Fiche monture (Jacklynn) | Origine de la pierre : Lab Grown / Natural / Moissanite ; métal : 14K blanc, jaune, rose, 18K blanc, jaune, platine ; forme : 9 ; carat : 9 valeurs de 1,00 à 6,00 ; niveau de qualité : 4 ; taille de doigt : liste de 30 valeurs ; ajout au panier (non cliqué) |
| 2. Diamant (`/collections/loose-lab-grown-diamonds`) | Onglets Natural / Lab Grown / Moissanite ; filtres forme (10 + « More shapes »), carat, couleur (blanc ou fantaisie, D à K-Z), pureté (FL à I1-I3), taille (Ideal à Fair), prix, « Advanced Options », « Clear Filter », champ de recherche ; liste de pierres individuelles avec prix |
| 3. Bague complète | Non atteinte (passe par la sélection d'une pierre et le panier) |

## Contrôles vérifiés

Ordinateur : 200 contrôles listés sur le configurateur, 184 sur la fiche, 203 sur la page des diamants ; iPhone : 106 sur le configurateur (menu replié). Plus de 85 % sont des liens de navigation (menu, grille de montures, pied de page). Le tableau liste tous les contrôles fonctionnels ; les familles de liens sont regroupées.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Lab Grown Diamond (fiche) | bouton | Pierre : 1,00 ct F/VS2 IGI ; SKU `MD123213-LG-001` ; URL `?variant=…` | 1 445 $ | OK (V) |
| Natural Diamond | bouton | Pierre : **0,70 ct** H/SI2 **GIA** (le carat par défaut change) ; SKU `…-NAT-001` | 2 195 $ | OK (V) |
| Moissanite | bouton | Pierre : 1,00 ct / 6,5 mm ; SKU `…-MOI-001` | 1 445 $ (identique au synthétique sur cette monture) | OK (V) |
| 14K White / Yellow / Rose | boutons | Texte « Metal » mis à jour ; URL `?metal=14K+Yellow+Gold&shape=Round&carat=1.00&quality=F%2FVS2` ; vidéo de la variante remplacée | 1 445 $ pour les 3 | OK (V) |
| 18K White | bouton | idem, titre 18 carats | 1 830 $ (+385 $) | OK (V) |
| 18K Yellow | bouton | idem ; une 3e image apparaît dans la galerie, vidéo différente | 1 830 $ | OK (V) |
| Platinum | bouton | idem | 1 920 $ (+475 $) | OK (V) |
| Forme : Round / Emerald / Radiant | boutons | « Shape » mis à jour | 1 445 $ | OK (V) |
| Forme : Princess | bouton | idem | 1 495 $ | OK (V) |
| Forme : Heart / Pear / Asscher / Oval | boutons | idem | 1 475 $ | OK (V) |
| Forme : Cushion | bouton | idem | 1 525 $ | OK (V) |
| Carat 1,00 / 1,50 / 2,00 / 2,50 / 3,00 / 3,50 / 4,00 / 5,00 / 6,00 | 9 boutons | « Center stone » mis à jour | 1 445 / 1 605 / 1 725 / 1 925 / 1 995 / 2 165 / 2 295 / 2 695 / 2 915 $ | OK (V) |
| Tableau de qualité : Classic (F/VS2, Ideal, IGI) | ligne + bouton Select | Pierre F/VS2 | 1 445 $ | OK (V) |
| Premium (E/VVS2, Ideal, IGI) | idem | Pierre E/VVS2 | 1 495 $ (+50 $) | OK (V) |
| Mikado Signature (D/VVS1, Super Ideal, IGI) | idem | Pierre D/VVS1 | 1 625 $ (+180 $) | OK (V) |
| Choose Your Own (« From $1,380 ») / Browse | bouton | Mène à `/collections/loose-lab-grown-diamonds?shape=Round&return_to=…` (ouvert avec navigation interceptée) ; le diamant se choisit à l'unité | à partir de 1 380 $ | OK (V) |
| « ? » (What do these grades mean?) | bouton | Texte : « Your diamond, selected by an expert… A Mikado diamond specialist will select the individual diamond… screening for undesirable tints, haziness » | non | OK (V) |
| Ring size | liste déroulante | 3,50 à 11,00 par 0,25 (30 tailles) ; la sélection ne change ni l'image ni le prix ; pas de guide de taille intégré à la fiche | non | OK (V) |
| 5 vignettes de la galerie | images | Photos et une vidéo mp4 par variante (1 `<video>` dans la page) | non | Présence V ; clic individuel non testé |
| Accordéons : Ships by, Free Shipping/30 Day Returns, Lifetime Warranty, Insurance Appraisal, Flexible Payment | 5 volets | Contenu lu dans le DOM (voir plus bas) | non | OK (V, lecture seule) |
| FAQ « Custom Engagement Rings » (4 questions) | volets | Contenu lu dans le DOM | non | OK (V) |
| ADD TO CART | bouton | **Non cliqué : `/cart` et `/cart/add` interdits par robots.txt** | non | Non testé |
| See if you qualify (Affirm) | lien modal | Non ouvert (service tiers affirm.com, aucun test d'éligibilité) | « as low as 87 $/mo » (1 445 $) | Non testé |
| Accessibility Widget | bouton | Présent (flottant) ; non ouvert | non | Non testé |
| Call/Text (onglet flottant) | bouton | Visible sur la capture ; non cliqué (ouvre un appel ou un SMS) | non | Non testé |
| Icône Cart | lien `#` | Tiroir de panier ; non ouvert (le panier lit `/cart.js`) | non | Non testé |
| Compte (`/account/login`), Recherche (`/search`) | liens | Non ouverts : INTERDITS par robots.txt (`/account`, `/search`) | non | Non testé |
| Menu (Engagement Rings, Wedding Bands, Diamonds, Jewelry, Schedule Appointment, About, Ready to Ship) | ~110 liens | Cibles lues dans le DOM ; pages principales ouvertes | non | OK (V) pour les 7 pages ouvertes |
| Book a Virtual Appointment | lien | Page de présentation ; le bouton « Schedule » mène à un outil de réservation, non ouvert | non | Page V, formulaire non testé |
| Pagination 1, 2, 3 … 41, Next | liens | Pages de montures (`?page=N`) | non | Non cliqués |
| Tuiles de forme du configurateur, REFINE, SORT BY | texte cliquable | Non reproduits : mes clics sur « REFINE », « SORT BY » et « MARQUISE » n'ont produit aucun effet visible (le texte n'est pas un bouton actionnable par ce moyen) | non | **Non testé** (réussite incertaine) |
| Filtres de la page des diamants (forme, carat, couleur, pureté, taille, prix) | champs | Présents (V par lecture du texte) ; **non actionnés** | non | Non testé |
| Réseaux (Facebook, X, Instagram, Pinterest, YouTube) | liens | Non ouverts (autres domaines) | non | Non testé |
| SUBSCRIBE (lettre d'information) | formulaire | Non rempli (règle : aucun formulaire) | non | Non testé |
| Avis Google (carrousel, « Show more », flèches) | boutons | Présents ; non cliqués | non | Non testé |

## Options disponibles

- **Origine** : synthétique (« Lab Grown Diamond (IGI) »), naturel (« Natural Diamond (GIA) »), moissanite (V).
- **Métal** : 14 k blanc, jaune, rose ; 18 k blanc, jaune ; platine. Le filtre du catalogue cite aussi du 10 k (V, liens de menu). Pas de 18 k rose sur cette fiche.
- **Formes de pierre** (fiche) : Round, Princess, Heart, Cushion, Emerald, Pear, Asscher, Oval, Radiant (9). Le catalogue ajoute Marquise (V).
- **Carat** : 1,00 / 1,50 / 2,00 / 2,50 / 3,00 / 3,50 / 4,00 / 5,00 / 6,00.
- **Qualité (synthétique)** : Classic F/VS2, Premium E/VVS2, Mikado Signature D/VVS1 (Super Ideal), ou diamant choisi à l'unité.
- **Taille de doigt** : 3,5 à 11 par quart de taille (30 valeurs).
- **Monture** : solitaire, halo, trois pierres, pavé/accent, vintage, un rang, multirang ; alliances femme et homme ; diamants de couleur synthétiques (jaune, rose, bleu, vert, rouge, violet, orange, brun, noir, gris).
- **Pierre d'accent** : « Lab Grown Diamonds », qualité VS1-VS2, affichée dans le récapitulatif (non modifiable).
- **Absents (V, contrôles listés)** : gravure, essayage virtuel, vue sur la main, AR, 360° visible, mode 3D, comparer, enregistrer/liste de souhaits, partager, WhatsApp, chat.

## Prix, délais, retours, garanties

- **Affichage du prix** (V) : prix unique pour monture + pierre, « Price » dans un récapitulatif (Metal, Shape, Center stone, Accent diamond type/quality). **Pas de décomposition** monture / pierre / main-d'œuvre. Prix catalogue « From $995 » ; sur la fiche Jacklynn, 1 445 $ par défaut. Chaque option met le prix à jour en moins de 1,5 s et dans l'URL.
- **Bandeau** (V) : « All Lab Grown Diamonds & Engagement Ring Settings on Sale Now ♡ Discount Applied at Checkout » : la remise s'applique à la caisse, non vue (panier interdit). Prix affichés avant ou après remise : non établi.
- **Délai** (V, fiche) : « Ships By: December 17 – December 19 » (date calculée par le site), « Each ring is made to order » ; platine et tailles de pierre hors standard « may add additional production time ». FAQ : « about 4 to 6 weeks » pour un sur-mesure, ~3 semaines pour un solitaire simple ; conseil de commencer 10 à 12 semaines avant la demande.
- **Sur-mesure** (V, FAQ) : conception sur demande, « digital renderings before production begins » ; frais de dessin **199 $** sous 3 000 $ de total, offerts au-delà.
- **Livraison** (V) : gratuite, assurée, suivi et signature (USPS/FedEx Priority). Paiement international : virement bancaire seulement.
- **Retours** (V, fiche) : « 30 Day Returns, 100% money-back guarantee » pour les paiements par carte. **Les frais de 10 % de restockage s'appliquent aux commandes Affirm annulées ou retournées**, quel que soit le motif (page `/pages/payment-options`). L'exception « fabriqué sur mesure » n'est pas lisible : la page de politique (`/policies/refund-policy`) est interdite par robots.txt.
- **Garanties** (V, `/pages/lifetime-warranty`) : garantie à vie contre défauts de matière et de fabrication (propriétaire d'origine) ; paquet de maintenance de 6 mois (mise à taille 1 fois, rhodiage 1 fois, remplacement des diamants d'accent perdus < 0,10 ct) ; évaluation d'assurance gratuite (Brite.co).
- **Certificats** (V) : IGI pour le synthétique, GIA pour le naturel ; IGI affiché dans chaque ligne de qualité. Labos cités par le site : GIA, IGI, GCAL (inventaire).
- **Libellé du synthétique** : « Lab Grown Diamond » (V).
- **Moyens de paiement** (V, `/pages/payment-options`) : cartes Visa, Mastercard, Discover, Amex ; Affirm (0-36 % TAEG, exemple 800 $ à 15 % sur 12 mois = 72,21 $/mois ; « 0 % APR or as low as $87/mo » sur la fiche) ; virement (> 4 000 $, 1,5 % d'économie) ; layaway dès 25 % d'acompte (sans vérification de crédit). Virement obligatoire à l'international et au-dessus de 20 000 $.
- **Devise et langues** (I) : dollars américains, anglais seul, aucun sélecteur dans les contrôles listés.

## Confiance et service

- **Avis** (V) : bloc Google « 5.0 », environ 133 avis lus sur la capture (à confirmer) et un carrousel de témoignages ; page `/pages/reviews` non ouverte.
- **Conseil** (V) : rendez-vous virtuel gratuit (téléphone ou vidéo) et consultation en personne à Omaha ; numéro 402-650-2323 (appel/SMS), courriel info@mikadodiamonds.com, au pied de la fiche. Aucun chat ni WhatsApp vu.
- **Reconnaissance** (V) : BBB (note A+ revendiquée), Jewelers Board of Trade ; « conflict free » ; ancienneté « Since 2009 » (inventaire).
- **Essayage / taille** (V) : aucun essayage à domicile ; outils de mesure de taille payants (Plastic Ring Sizer 2 $, Finger Gauges 2 $, Mandrel 6 $) alors que le texte parle d'un outil gratuit pour les clients (incohérence de la page `/pages/ring-sizers`). Première mise à taille gratuite dans les 6 mois.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande vu. Seules des vidéos de produit (une par variante). L'affirmation « crafted in-house » de l'inventaire reste nuancée (I : vidéos servies par `assets.stullercloud.com`).

## Points forts à retenir pour JR Diamond

1. **La configuration est dans l'adresse** (`?metal=18K+Yellow+Gold&shape=Round&carat=1.00&quality=F%2FVS2`) : un lien partage exactement la même bague (V, URL relevées après chaque clic). C'est l'action 1 déjà décidée pour JR Diamond.
2. **Prix immédiat et lisible par option** : chaque clic met à jour le prix en environ 1 s, et l'écart est lisible (or 18 k +385 $, platine +475 $, Premium +50 $, Signature +180 $). JR Diamond affiche « Sur devis » ; c'est l'écart principal.
3. **Trois niveaux de qualité nommés** avec grade, coupe et laboratoire (Classic, Premium, Signature), plus « Choose Your Own » pour choisir la pierre à l'unité (V). Modèle transposable à la grille de pierres de l'atelier.
4. **Naturel, synthétique et moissanite sur la même monture**, avec un SKU par origine (V) : lecture simple de la différence de prix.
5. **Explication de la sélection** : « a Mikado diamond specialist will select the individual diamond » (V) : ce texte répond à la peur d'une pierre différente de celle attendue (voir les forums).
6. **Chiffres de service clairs** : 30 jours de retour, livraison assurée gratuite, garantie à vie, maintenance de 6 mois avec contenu détaillé, délai « Ships by » daté (V).
7. **Frais de dessin explicites (199 $) et FAQ de sur-mesure** avec rendus numériques avant production (V) : bon modèle pour la page « bijou de famille ».
8. **Chargement rapide** : photo principale en environ 1,1 à 1,6 s sur ordinateur, 0,9 s sur iPhone (V, mesures plus bas).

## Défauts observés

- Le carat passe de 1,00 à **0,70 ct** quand on bascule sur « Natural » : le prix de 2 195 $ n'est pas comparable à celui du synthétique 1,00 ct (V). Source de confusion.
- Prix de la moissanite égal à celui du synthétique sur cette monture (1 445 $) : peu cohérent à première vue (V).
- Aucune décomposition du prix, aucune vue 3D, sur la main ou 360° visible, aucune gravure (V).
- Contenu de la page des tailles contradictoire : outil « gratuit » annoncé, outils à 2 et 6 $ (V).
- La remise du bandeau ne se voit qu'à la caisse : on ne sait pas si les prix la contiennent (V pour le bandeau, S pour le reste).
- Frais de restockage de **10 % sur retours Affirm** (V), peu visibles : un risque de confiance.
- Aucune photo d'atelier, aucun suivi de commande, anglais et dollars seulement (V/I).
- Pendant le test automatisé, des clics enchaînés sur les boutons de métal ont parfois expiré après un premier changement de métal (deux essais sur quatre) ; sans doute un artefact d'automatisation, non retenu comme défaut du site (S).

## Limites de l'audit

- **Panier, caisse et « View Complete Ring » non vus** : `/cart` et `/cart/add` sont interdits par robots.txt. Moyens de paiement, frais, délai et remise à la caisse proviennent des pages d'information, pas du panier.
- Fiche étudiée à fond : une seule (Jacklynn, 14 k blanc, Round). Les 41 pages de montures, la page des diamants (filtres non actionnés) et les alliances n'ont pas été testées une à une.
- Mes tentatives sur REFINE, SORT BY et la tuile Marquise du catalogue n'ont rien déclenché : leur fonctionnement n'est pas établi.
- Politique de retour complète (`/policies/refund-policy`), recherche et compte : interdits, non lus ; l'exception du sur-mesure n'est donc pas vérifiée.
- Affirm, chat, Call/Text, widget d'accessibilité, formulaire de rendez-vous : non ouverts.
- Les prix datent du 15/11/2026 et changent (bandeau de promotion).

### Mesures du visuel principal

| Appareil | H1 présent | Photo principale chargée (largeur > 400 px) |
|---|---|---|
| Ordinateur (V, 5 mesures) | ≈ 0,9 s | 1,1 à 1,6 s (un logo de remplacement apparaît avant, ≈ 1,2 s) |
| iPhone 13 (V, 1 mesure) | n.m. | 0,9 s |

Mesures prises depuis un serveur cloud via proxy, sans cache : valeurs relatives.

## Sources

- https://mikadodiamonds.com/collections/settings-ring-builder (robots.txt : autorisé)
- https://mikadodiamonds.com/collections/settings-ring-builder/products/jacklynn-lab-grown-diamond-engagement-ring (fiche, options, accordéons, FAQ)
- https://mikadodiamonds.com/collections/loose-lab-grown-diamonds
- https://mikadodiamonds.com/pages/lifetime-warranty
- https://mikadodiamonds.com/pages/payment-options
- https://mikadodiamonds.com/pages/ring-sizers
- https://mikadodiamonds.com/pages/book-a-free-virtual-consultation-with-a-diamond-expert
- https://mikadodiamonds.com/robots.txt (règles `/cart`, `/policies/`, `/search`, `/account`)
- `docs/concurrence/audit/us/nebraska/INVENTAIRE.md` (contexte, rang 2)
