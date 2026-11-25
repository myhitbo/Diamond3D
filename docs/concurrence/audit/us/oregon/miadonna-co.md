# Audit : MiaDonna & Co. (Oregon, États-Unis)

- **Site** : MiaDonna & Co., https://www.miadonna.com/ (boutique phare à Portland). Page de départ : https://www.miadonna.com/pages/ring-configurator.
- **Date** : 15/11/2026. **Appareils** : Chromium (Playwright) 1366×900, en-US, depuis un centre de données. Affichage iPhone 13 non lancé (voir Limites).
- **Statut : bloqué pour le configurateur** ; pages de service lues normalement par `curl`.
  - Le navigateur ouvre la page (HTTP 200) puis le contenu est remplacé par « Access Denied : The site owner may have set restrictions that prevent you from accessing the site » [V : capture `www_miadonna_com_pages_ring_configurator.jpg`, deux chargements]. Le configurateur est servi par l'iframe `miadonna-live.tcctech.in/ring-config-product?is_iframe=true&is_shopify=true` (HTTP 200 au navigateur) ; le texte de l'écran de refus figure dans la configuration JSON de cette application [V].
  - Aucun nouvel essai, aucun changement d'identité ni de proxy. Le robots.txt de miadonna.com et de miadonna-live.tcctech.in autorise ces adresses [V : robots.cjs].
  - Le rendu Firecrawl qui avait servi au recensement n'a pas pu être refait : crédits Firecrawl épuisés (erreur du service) [V].
- **Conséquence** : aucun contrôle du configurateur n'a été actionné. Ce que le rapport affirme du configurateur vient du recensement du 15/11 (`INVENTAIRE.md`, rendu Firecrawl) et est marqué [R]. Légende : [V] vu sur la page ou par `curl` ce jour ; [R] repris du recensement, non revu ; [I] inféré ; [S] supposé. Prix en dollars US.

## Parcours

| Étape | Options |
|---|---|
| Configurateur (iframe) [R] | Rendu 3D rotatif avec plein écran ; 14 k / 18 k / platine ; diamant ou gemme ; au moins 8 formes ; 1 à 4 ct ; 3 qualités ; 5 têtes ; 6 corps de bague ; gravure ; alliance assortie ; « Add To Cart » ; 1 505 $ pour 1,00 ct rond D/VVS, 14 k, griffes |
| Fiche produit prête à choisir [V] | Métal (14 k blanc, jaune, rose ; bicolore ; « 14K White / Yellow »), forme (11 : rond, ovale, émeraude, coussin, marquise, radiant, poire, princesse, Asscher, cœur, coussin allongé), poids en ctw (5 à 10 ctw sur la fiche Amy, interprétation de l'affichage : [I]), qualité F-VS2 / E-VS1 / D-VVS2 sur la collection ; SKU ; « Ship By Date » annoncée sur la fiche |
| Catalogue [V] | 348 bagues de fiançailles synthétiques ; styles solitaire, side stone, halo, hidden halo, three stone, bridal sets, vintage, nature, promise, toi et moi ; tri : mieux notées, meilleures ventes, A–Z, prix, nouveautés |
| Sur-mesure [V] | Formulaire de demande, acompte 100 $, CAD sous 4 jours ouvrés, commande par lien d'achat, 2 à 4 semaines |
| Panier [V] | Page /cart autorisée, vide ; boutons d'achat express Shop Pay, Amazon Pay, PayPal présents dans le code (non cliqués) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tous les contrôles du configurateur (formes, métal, carat, qualité, tête, corps, gravure, vue 3D, plein écran, Add To Cart) | iframe | Écran « Access Denied » : rien d'actionnable | — | Non testés : blocage [V] |
| Liste de contrôles de la page (`controls.cjs`) | — | 0 contrôle visible (la page est l'écran de refus) | — | Vérifié [V] |
| Menu : Engagement, Wedding, Jewelry, Diamonds, Design Studio, Learn, About, Contact Us, Visit Us, Login, Wishlist, Bag, Search | liens (HTML servi) | Présents dans le HTML ; non actionnés dans le navigateur | — | Lus par curl, non actionnés [V] |
| Filtres du catalogue (métal, qualité, style) ; Sort (7 tris) | listes | Libellés lus dans le HTML ; non actionnés | — | Non testés : navigateur bloqué [V] |
| Pied de page : Customer Care, Returns, Shipping, Lifetime Warranty, Ring Resizing, FAQs, Payment Options & Financing, Find Your Ring Size | liens | Pages servies (200) et lues, sauf `/pages/faq` (301) et `/pages/shipping-returns` (404 avec « Page Not Found ») | — | Lus [V] |
| Live Chat ; 1-866-996-9642 ; (503) 336-1581 ; help@miadonna.com | boutons, liens | Non ouverts (règles) | — | Non testés |
| Champ e-mail de la lettre d'information | formulaire | Non rempli (règles) | — | Non testé |
| Boutons Shop Pay, Amazon Pay, PayPal du panier | boutons | Non cliqués (paiement) | — | Non testés |
| Add To Cart du configurateur | bouton | Non atteint (blocage) | — | Non testé |

## Options disponibles

- **Métaux** [V, menu et fiche] : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; bicolore ; platine.
- **Formes de diamant** [V] : rond, ovale, émeraude, coussin, coussin allongé, marquise, radiant, poire, princesse, Asscher, cœur.
- **Origine** [V] : diamants de laboratoire (« lab-grown ») seulement, « Premium », vendus depuis 2005. Pas de diamant naturel.
- **Qualités de pierre** (collection) [V] : F-VS2, E-VS1, D-VVS2.
- **Types de bague** [V] : solitaire, side stone, halo, hidden halo, trois pierres, ensembles, vintage, nature, toi et moi, promesse, alliances (droites, courbes, empilables, hommes, éternité).
- **Configurateur** [R] : 5 têtes, 6 corps, 1 à 4 ct, gravure, alliance assortie.
- **Services** [V] : guide des tailles, redimensionnement, financement Affirm, virement, paiement express, rendez-vous à la boutique de Portland, chat, téléphone.

## Prix, délais, retours, garanties

- **Prix** : prix affiché partout (collection : à partir de 1 795 $ pour « Everly 2 2/5 ctw » en solde [V]) ; fiche Amy : 4 180 $ USD [V : prod.html]. Prix recalculé en direct dans le configurateur [R] ; décomposition (métal, façon, pierre) non montrée [R, non revu].
- **Délai** : fabrication à la commande 2 à 3 semaines environ, « Ship By Date » sur la fiche ; prêt à expédier en 1 à 4 jours ouvrés [V : /pages/customer-care-shipping]. Sur mesure : minimum 15 jours ouvrés, en moyenne 4 semaines [V : /pages/custom-jewelry-special-orders].
- **Livraison** : gratuite, assurée, signature obligatoire ; FedEx 2Day (États-Unis), DHL Express 2 à 5 jours vers environ 50 pays (page : « 40 pays » au résumé, « 50 » plus bas, incohérence du site) ; FedEx Overnight en supplément ; pas d'express à l'international [V].
- **Retours** : 60 jours gratuits depuis l'expédition, pas de frais de réapprovisionnement ; étiquette en argent à garder, certificat à rendre (50 $ de retenue s'il manque) [V : /pages/customer-care-returns-exchanges].
  - **Sur mesure** : remboursé en crédit en magasin seulement, utilisable une fois sur une autre commande sur mesure, ensuite vente définitive [V]. La page « custom » dit d'abord « final sale, not eligible for return or exchange » et annule impossible après paiement [V] : contradiction entre deux pages du site.
- **Garantie** : garantie à vie de fabrication (pierres de laboratoire et façon) ; exclut l'usure des griffes, la perte de la pierre centrale, tout travail d'un tiers [V : /pages/lifetime-warranty]. Première mise à taille gratuite, aller-retour pris en charge, selon la politique de taille [V].
- **Paiement** : cartes Visa, Mastercard, American Express, Discover ; Affirm (0 à 36 % TAEG) ; Shop Pay, Amazon Pay, PayPal ; virement [V : /pages/payment-options-and-financing et code du panier].

## Confiance et service

- **Certificats** : pierres « indépendamment gradées » [R/V : texte de collection] ; certificat à restituer au retour [V].
- **Libellé du synthétique** : « lab-grown » ; « lab created » pour les gemmes [V].
- **Langues, devises** : anglais ; USD affiché ; paiements internationaux en USD [V].
- **Avis** : page Reviews et note sur les fiches ; témoignages sur la page sur mesure (« Verified Reviewer ») [V]. Note de la fiche Amy : 0,0 au chargement (avis non chargés par curl) [V].
- **Certifications** : B Corp, métaux et diamants « certified sustainable by SCS Global », neutre en carbone [V : fiche produit ; vérification externe non faite].
- **Preuves de fabrication** : CAD et rendus par e-mail avant fabrication, pas de cire envoyée [V]. Photos ou vidéos d'atelier, suivi de commande avec étapes : non vus [S].
- **Contact** : chat, téléphone 1-866-996-9642, boutique Portland (7279 SW Bridgeport Rd. [R]).

## Points forts à retenir pour JR Diamond

1. **Configurateur 3D avec prix recalculé et ajout au panier** : la référence technique la plus proche en Oregon [R : INVENTAIRE.md ; non revu ce jour].
2. **Calendrier de Noël publié par type de commande** (sur mesure 30/11, à la commande 13/12, prêt à expédier 23/12) et « Ship By Date » sur chaque fiche [V : page shipping]. À copier pour le délai de 14 jours ouvrés.
3. **Retours de 60 jours gratuits, y compris à l'international**, avec portail en libre-service et étiquette prépayée [V]. Dépasse la plupart des politiques ; à comparer avec l'exception « fait sur mesure » en Israël.
4. **Processus sur mesure en 3 étapes et prix minimum annoncé** (1 000 $, acompte 100 $ déduit, CAD sous 4 jours, retouche avant fabrication) [V].
5. **Garantie à vie lisible**, avec cas couverts et exclus listés et démarche de réclamation en 4 étapes [V].
6. **Financement Affirm avec exemple chiffré** (400 $ à 15 % sur 12 mois = 36,10 $/mois) [V].

## Défauts observés

- **Configurateur inaccessible** : « Access Denied » au navigateur automatisé, alors que la page répond 200 [V].
- **Contradiction sur les retours du sur-mesure** : crédit en magasin d'un côté, vente définitive de l'autre [V].
- **Chiffres incohérents** : « plus de 40 pays » puis « environ 50 » ; page `/pages/shipping-returns` en 404 [V].
- Sur-mesure : « modèle en cire » refusé ; aucune preuve de fabrication filmée [V].
- Décomposition du prix non montrée [R].

## Limites de l'audit

- Aucun contrôle du configurateur actionné ; aucun mode de vue, aucune mesure du temps d'affichage du visuel principal, aucune mesure iPhone (le navigateur était refusé sur la page d'entrée ; pas de nouvel essai pour passer).
- Panier non atteint avec un article (ajout impossible sans configurateur) ; page /cart non ouverte dans le navigateur.
- Lecture des pages de service par `curl` (identité par défaut, une page toutes les 2 secondes). Rendu Firecrawl impossible (crédits épuisés).
- Les éléments [R] datent du recensement du 15/11 et n'ont pas été revérifiés.

## Sources

- https://www.miadonna.com/pages/ring-configurator (navigateur : Access Denied ; curl : 200)
- https://miadonna-live.tcctech.in/ring-config-product?is_iframe=true&is_shopify=true (curl, navigateur)
- https://www.miadonna.com/pages/customer-care-shipping
- https://www.miadonna.com/pages/customer-care-returns-exchanges
- https://www.miadonna.com/pages/lifetime-warranty
- https://www.miadonna.com/pages/payment-options-and-financing
- https://www.miadonna.com/pages/custom-jewelry-special-orders
- https://www.miadonna.com/collections/lab-grown-diamond-engagement-rings
- https://www.miadonna.com/products/amy-round-lab-grown-diamond-knife-edge-cathedral-solitaire-engagement-ring
- https://www.miadonna.com/pages/shipping-returns (404)
- `docs/concurrence/audit/us/oregon/INVENTAIRE.md` (recensement du 15/11)
