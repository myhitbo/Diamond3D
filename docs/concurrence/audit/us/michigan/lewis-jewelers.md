# Audit : Lewis Jewelers (Ann Arbor, Michigan)

- **Site** : Lewis Jewelers, https://www.lewisjewelers.com/ (page de départ : /pages/custom-ring-builder)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (assistant en 4 étapes complet ; concepteur 3D chargé seulement en affichage iPhone ; ajout au panier non fait car `/cart/add` est interdit par robots.txt ; panier vérifié vide)
- **Garde-fous** : robots.txt lu (`/cart` autorisé, `/cart/add` INTERDIT). Aucun formulaire rempli ; le bouton « Join Now » (lettre d'information) n'a pas été actionné.

## Parcours

Le « constructeur » est un assistant JewelerOS (script `jeweleros.com`, identifiant partenaire visible dans les requêtes) intégré à une boutique Shopify. Il mène à un concepteur 3D (iframe `jeweleros-custom.netlify.app`) qui est le vrai configurateur.

| Étape | Options (vérifié, page lue et boutons actionnés) |
|---|---|
| 0. Pastilles de métal (haut de page) | Or jaune, or blanc, or rose : changent les miniatures de style (`solitaire_yellow` → `_white` → `_rose`) |
| 1/4 Style | Solitaire, Halo, Halo caché, Bezel, Cathédrale, Full pavé, Toi et Moi, Trois pierres, « Start from scratch » (9) ; chacun mène à l'étape 2 |
| 2/4 Pierre centrale | Bascule Natural / Lab Grown (Natural actif par défaut) ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » (10) |
| 3/4 Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, « Decide later » (9) |
| 4/4 Délai souhaité | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » |
| Chargement | Après le dernier choix : appel `POST jeweleros.com/api/create/from-ring-config/`, puis le concepteur 3D |
| Concepteur 3D | Voir « Options disponibles » (mêmes réglages que chez Lucido) ; prix indicatif affiché « MSRP » |

Un bandeau de chips en haut résume les choix (« Solitaire », « Round »…) et un bouton retour (icône) permet de revenir d'une étape ; « Skip » en haut à droite.

## Contrôles vérifiés

Relevé automatique : 77 contrôles visibles (ordinateur), 34 (iPhone), en grande partie en-tête, menu et pied de page.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose Gold | bouton | Change les miniatures de l'étape 1 | non | OK |
| 9 cartes de style (étape 1) | cartes cliquables | Passe à l'étape 2 (testé sur les 9, iPhone) | non | OK |
| Natural / Lab Grown | bascule | Change l'état actif ; reste sur l'étape 2 | non | OK |
| 10 formes (étape 2) | cartes | Passe à l'étape 3 (9 formes + « Decide later » testées) | non | OK |
| 9 tailles de carat (étape 3) | cartes | Passe à l'étape 4 (toutes testées) | non | OK |
| 4 délais (étape 4) | cartes | Lance la génération du concepteur ; 3 options non cliquées une à une (« 1 - 4 weeks » et « 3 - 6 months » testées ailleurs) | non | OK pour 2/4 |
| Retour (icône) | bouton | Revient à l'étape précédente | non | OK |
| Skip | bouton | Non actionné (conduit au concepteur) | non | non testé |
| Concepteur 3D, ordinateur | iframe | Écran « Something went wrong. Try again » ; l'API de configuration échoue (réponse bloquée par CORS, 429/403 observés dans la console) ; deux essais | non | **défaillant dans l'audit** |
| Concepteur 3D, iPhone | iframe | S'ouvre ; canevas présent 0,6 à 1,5 s après le dernier clic | oui | OK |
| Métal (concepteur) | boutons | 14K jaune/blanc/rose, 18K jaune/blanc/rose, platine, mixte ; image mise à jour | voir plus bas | OK (relevé partiel) |
| Quick view (grille de produits) | lien | Mène à la fiche | affiche prix | OK (non ouvert) |
| Filtres de collection (Designer, Style, Stone Type, Stone Shape, Metal Type, Price) | boutons | Présents sur `/collections/engagement-rings` ; non actionnés | non | non testé (URL de filtre non vérifiée) |
| Vue grille / liste, tri « Relevance », « Load more » | boutons | Présents ; non actionnés | non | non testé |
| Fiche produit : quantité − / +, « Add to cart » | boutons | Non cliqués : `/cart/add` interdit par robots.txt | oui ($4 390 pour l'exemple) | **non testé : panier interdit** |
| « More payment options », « View store information », Partager (Facebook, X, Pinterest, copier) | liens/boutons | Présents ; non actionnés | non | non testé |
| Téléphone 734-994-5111, « Schedule an Appointment » | liens | `tel:` et `/pages/appointments` | non | OK (non suivis) |
| Widget « Text us » (Podium) | bulle | Visible en bas à droite ; conversation non ouverte | non | non testé (règle : pas de chat) |
| Menu d'accessibilité (UserWay) | bouton | Présent | non | non testé |
| Bandeau « Santa Days » | lien | Annonce d'événement | non | OK |
| Lettre d'information « Join Now » | formulaire | Non rempli | non | non testé (règle) |

## Options disponibles

- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, départ de zéro.
- **Métaux (assistant)** : or jaune, or blanc, or rose. **Métaux (concepteur)** : 14K jaune, blanc, rose ; 18K jaune, blanc, rose ; platine ; mixte (tête et anneau de couleurs différentes).
- **Pierre** : naturel ou lab grown ; 9 formes (rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant) ; carats 0,5 à 5 dans l'assistant (le concepteur de Lucido accepte 0,25 à 10, même moteur).
- **Concepteur** (liste lue sur la page du même éditeur, et sur Lewis en iPhone) : nombre de pierres (une, deux, trois), tête (aucune, panier, halo, halo caché, bezel), nombre de griffes (4 classique, 4 compass, 6), formes de griffes (claw, petite claw, arrondie, tab), pavé sur les griffes, style de corps (rond, carré), cathédrale, pavé du corps (« Petite French »), largeur 1,5 à 4 mm, taille US 3 à 13, confort (standard ou comfort fit), gravure 14 caractères (police Block ou Cursive), « pierres surprise », ajout d'alliance assortie ou sur mesure.
- **Délai** : 1-4 semaines, 1-3 mois, 3-6 mois, indécis.
- **Boutique** : collections bagues de fiançailles, alliances, joaillerie, montres ; filtres Designer, Style, Type et Forme de pierre, Métal, Prix.

## Prix, délais, retours, garanties

- **Prix affiché** : prix public sur les fiches (vérifié : TACORI Simply Tacori $4 390,00 ; autres bagues liées $4 790 à $6 290). Dans le concepteur, « MSRP » pour la monture seule (« Setting only ») : 1 ct rond, 14K jaune, solitaire = **$1 362** (iPhone, vérifié). Pas de décomposition métal/façon/pierre. Les pierres ne sont pas incluses : « Setting only ».
- **Variation des prix dans le concepteur** (iPhone, lecture après 4 s) : 18K jaune $1 881 ; 14K blanc $1 428 ; platine $1 317. Les valeurs ne suivent pas toutes l'ordre attendu (platine moins cher que le 14K) : lecture possiblement décalée, **à prendre avec prudence** (supposé).
- **Délai** : sur mesure « 4 à 6 semaines pour la plupart » (page `custom-jewelry-design`, vérifié). Articles en stock expédiés le lendemain (page expédition).
- **Livraison** : gratuite en continental US pour les bijoux ; retrait en magasin gratuit ; UPS 2 jours $40 (gratuit au-delà de $300) ; UPS nuit $60 (gratuit au-delà de $500) (page `policies/shipping-policy`, vérifié).
- **Retours** : 10 jours pour un remboursement complet, échange 14 jours ; **commandes spéciales, sur mesure ou retouchées : non retournables**. Retour gratuit (étiquette UPS prépayée) pour les clients américains, limité à trois par client ; remboursement sous deux semaines (`policies/refund-policy`, vérifié).
- **Garanties** : non lues sur le site au-delà du texte des retours (voir « Limites »).
- **Financement** : Wells Fargo Jewelry Advantage (carte avec crédit approuvé), page `jewelry-financing` ; paiement fractionné non vérifié.
- **Paiement affiché** (icônes du pied de page) : American Express, Apple Pay, Diners, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa.
- **Origine/certificats** : GIA et AGS pour tout diamant naturel en vrac ; pour le synthétique, la page `lab-grown-diamonds` dit que le GIA donne depuis 2025 des classes simples (« Premium »/« Standard ») au lieu des 4 C.
- **Libellé du synthétique** : « lab-grown », « man-made », « lab-created » (pas de mot « synthetic »).
- **Devise / langue** : USD, anglais seulement.

## Confiance et service

- Magasin physique unique, 300 S Maple Rd, Ann Arbor ; « depuis 1921 » (page lue) ; partenaire de l'université du Michigan ; membre American Gem Society.
- Conseillers « non commissionnés », conception CAO 3D, fabrication interne (page `custom-jewelry-design`) ; processus en 5 étapes : consultation, rendu CAO, devis, fabrication, remise.
- Contacts : téléphone, SMS (widget Podium), rendez-vous en ligne, adresse. Pas de WhatsApp.
- Avis clients, photos ou vidéos d'atelier, suivi de commande : **non trouvés** sur les pages lues.

## Points forts à retenir pour JR Diamond

1. **Assistant d'entrée en 4 étapes avec « Decide later » partout** (style, pierre, carat, délai) : abaisse l'engagement avant d'ouvrir la 3D. Preuve : captures et clics des 4 étapes, 15/11.
2. **Les choix de l'assistant alimentent la 3D** et sont résumés en chips avec retour. Preuve : chips « Solitaire / Round » visibles dans l'écran d'étape 3.
3. **Prix « à partir de » visible dès le concepteur, mis à jour à chaque option** (monture seule). Preuve : MSRP $1 362 affiché, variation avec les options chez le même éditeur. Notre prix est « Sur devis » : écart principal.
4. **Libellé « lab-grown » expliqué sur une page dédiée** avec la nuance du GIA 2025 (classes simples). Preuve : page `/pages/lab-grown-diamonds`.
5. **Livraison gratuite assurée, retour prépayé** : messages clairs et courts. Preuve : pages expédition et remboursement.
6. **Message « non-commissioned » et processus en 5 étapes** pour le sur-mesure. Preuve : `/pages/custom-jewelry-design`.

## Défauts observés

- **Concepteur 3D inaccessible en affichage ordinateur** dans notre environnement (deux essais) : « Something went wrong. Try again ». Cause non établie (inféré : appels `jeweleros.com` bloqués ou limités, erreurs CORS/429). L'iPhone fonctionne. Si le défaut est réel pour les visiteurs, la perte est totale sur ordinateur.
- Aucune barre de progression vers le prix : l'assistant ne montre aucun prix avant le concepteur.
- Prix du concepteur « monture seule » : pierre non incluse, total non affiché (vérifié).
- Retours : **le sur-mesure n'est pas retournable** (vérifié), ce qui est la même exception qu'envisage JR Diamond.
- Pas de preuves de fabrication ni d'avis visibles ; pas de suivi de commande trouvé.
- Page Santa Days et widget de chat recouvrent le bas de l'assistant sur ordinateur (capture).

## Limites de l'audit

- Concepteur 3D vu seulement sur iPhone ; quelques options testées (métaux, pierre, trois pierres). L'exploration complète a été faite sur le même éditeur chez Lucido (voir `lucido-fine-jewelry.md`).
- Ajout au panier non fait (robots.txt) ; panier `/cart` ouvert vide : pas de récapitulatif, de frais ni de délai de commande vus.
- Boutique : filtres, tri et « Load more » non actionnés ; fiche produit lue en texte, 360°/vidéo non cherchés.
- Garantie, avis et page « Terms of Service » non lus.
- Firecrawl indisponible (crédits épuisés) ; lecture faite par Playwright.

## Sources

- https://www.lewisjewelers.com/pages/custom-ring-builder (assistant, vérifié)
- https://www.lewisjewelers.com/pages/custom-jewelry-design (vérifié)
- https://www.lewisjewelers.com/pages/lab-grown-diamonds (vérifié)
- https://www.lewisjewelers.com/pages/certified-diamonds (vérifié)
- https://www.lewisjewelers.com/pages/jewelry-financing (vérifié)
- https://www.lewisjewelers.com/policies/shipping-policy et /policies/refund-policy (vérifiés)
- https://www.lewisjewelers.com/collections/engagement-rings et la fiche /collections/engagement-rings/products/tacori-simply-tacori-1 (vérifiées)
- https://www.lewisjewelers.com/cart (vide, vérifié)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/lewis-jewelers/` (hors dépôt)
