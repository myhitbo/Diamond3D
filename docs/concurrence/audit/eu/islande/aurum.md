# Audit : AURUM by Guðbjörg (Reykjavik)

- **Site** : https://aurumiceland.com/ (boutique Shopify, 7 pages de liste pour les bagues de fiançailles)
- **Page de départ** : https://aurumiceland.com/collections/engagement-rings ; fiche testée : https://aurumiceland.com/collections/engagement-rings/products/womens-wedding-rings-diamond-3
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366×900 et iPhone 13 (émulation)
- **Statut : partiel.** `https://aurumiceland.com/agents.md` demande aux agents de passer par ses outils WebMCP/UCP pour tout achat et de ne pas scripter le panier ni le paiement. Aucun ajout au panier, ni page du panier. La lecture des pages publiques, les filtres et les options de fiche ont été faits. Le robots.txt autorise ces pages (`/cart` sans barre finale est permis, `/cart/` interdit).
- Marques : V vérifié · I inféré · S supposé.

## Parcours

| Étape | Options (toutes V sauf mention) |
|---|---|
| Départ | Collection « Engagement rings » → fiche. Pas de configurateur. Bouton « Book Appointment » dans l'en-tête et sur la fiche |
| Filtres | Disponibilité (en stock) · prix (de/à) · finition (« white gold ») · matière (14k gold, 14k white gold, Diamond, Sapphire, Spinel, Emerald) |
| Fiche | Taille (46 à 58, 13 choix) · gravure facultative (15 caractères, ressaisie demandée) · Ajouter au panier · cœur (liste de souhaits) · « Book now → » (rendez-vous) |
| Sur mesure | Hors site : courriel `info@aurum.is`, rendez-vous, pages « Bespoke » et « Custom Design Guidelines » (V, lues) |
| Panier | Non testé (voir statut) |

## Contrôles vérifiés

Relevé complet : `controls.cjs` sur la collection (153 contrôles ordinateur, 129 iPhone) et sur la fiche (109 ordinateur, 96 iPhone). Les doublons (menu, pied de page) sont regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre « white gold » | case | 2 fiches seulement ; adresse `?filter.p.m.custom.finish=white+gold` | — | OK |
| Filtre « 14k gold » | case | liste réduite (36 liens sur la page) ; adresse `…custom.material=14k+gold` | — | OK |
| Filtre « 14k white gold » | case | 36 liens | — | OK |
| Filtre « Diamond » | case | 36 liens | — | OK |
| Filtre « Sapphire » | case | 20 liens | — | OK |
| Filtre « Spinel » | case | 12 liens | — | OK |
| Filtre « Emerald » | case | 10 liens | — | OK |
| Prix « From / To » | champs texte | présents, non remplis (le filtre actif passe `price.gte=` vide) | — | Non testé : sans intérêt, la plage n'a pas été saisie |
| Disponibilité « In stock / Out of stock » | cases | présentes, non actionnées | — | Non testé |
| Tri (Featured, Best selling, A-Z, Z-A, prix croissant et décroissant, date) | liste | 9 critères listés ; `sort_by=manual` apparaît dans l'adresse | — | Listé, non actionné |
| Pagination 1 … 7, « Next » | liens | liens `?page=n` | — | Non suivis (7 pages) |
| Taille 46 à 58 | liens | la taille choisie est soulignée (51 testée), aucun changement de prix ni d'image | aucun | OK |
| Gravure (champ, 15 car.) | champ | après saisie de « AB », un second champ « Re-enter engraving text » apparaît | aucun (gratuite) | OK |
| ADD TO CART | bouton | non actionné (site : pas de scripts d'achat) | — | Non testé |
| Cœur / « Add to wishlist » | bouton | présent ; le panneau « Wishlist / Saved for later » propose « Log in to save permanently » (lu dans le DOM) | — | Non actionné (compte) |
| « Book now → » | lien | mène à `app.cowlendar.com/cal/…` (agenda externe) | — | Non ouvert |
| « Book Appointment » (en-tête) | lien | page produit « Book an Appointment » : en boutique (normal ou privé) ou en ligne | — | Page lue |
| USD $ | bouton | sélecteur de devise ; la liste des devises n'a pas été relevée | — | Ouvert, liste non lue |
| Loupe (recherche) | bouton | non utilisé : requêtes de recherche non automatisées | — | Non testé |
| « Need help? » et « Rewards » | widgets | bulle de chat et programme de fidélité ; non ouverts | — | Non testé (règle : pas de chat) |
| Bandeau cookies : Decline / Allow All / Manage Cookies | boutons | « Decline » ferme le bandeau | — | OK |
| Newsletter « Sign up » | champ + bouton | non rempli | — | Non testé (formulaire) |
| Zoom de la photo | clic | aucune visionneuse ouverte (clic sans effet) | — | Sans effet |

Vues du produit : photos portées (main), photo de l'anneau seul, coffret ; ni vidéo, ni 360°, ni 3D, ni essayage en réalité augmentée (V : 0 balise `video`, 0 `model-viewer`).

## Options disponibles

- **Métaux** : or 14 k jaune ou blanc au catalogue ; **18 k sur devis** pour toutes les bagues (V, fiche).
- **Pierres** : diamants synthétiques (tous les modèles en diamant), saphir, spinelle, émeraude.
- **Diamant** : poids affiché par modèle (0,05 à 0,97 ct relevés), qualité par modèle (VS, VVS2 D, VS F+) ; autre taille de pierre ou diamants sur une alliance : sur devis (V).
- **Taille** : 46 à 66 (norme ISO, circonférence en mm) selon le modèle ; anneau de mesure à commander ; tableau de conversion (V, page Sizing).
- **Gravure** : gratuite, 15 caractères, symboles sur demande.
- **Sur mesure** : seulement à partir des modèles existants (métal, diamants, pierres, 14 ou 18 k) ; largeurs fixes ; acompte de 50 % (V, lignes directrices).

## Prix, délais, retours, garanties

- **Prix** (V) : affichés en dollars US, par modèle, sans décomposition. Exemples : alliance femme avec diamant 0,05 ct 400 $ ; solitaire 0,37 ct 1 670 $ (1 486 $ en promotion « Black Friday » du moment, soit environ 11 % de moins : calcul I) ; ovale 0,97 ct VVS2 D 3 210 $. Financement « Shop » en mensualités (« or from 104,18 $/mo ») sur la fiche.
- **Délai** (V) : en stock, expédition 1 à 3 jours ouvrés après 1 à 2 jours de préparation ; sinon fabrication en 3 à 4 semaines ; la date souhaitée se demande par courriel.
- **Livraison** (V) : DHL gratuite dès 220 $, 25 $ forfaitaire sinon ; droits et taxes à la charge du client (frais DHL d'environ 15 $). En Islande : Dropp, gratuit dès 25 000 ISK.
- **Retours** (V) : 30 jours, échange ou remboursement des articles non portés (achats en ligne ; en boutique : échange ou avoir). **Exclus : articles personnalisés ou gravés.** Retour à la charge du client ; mise à taille offerte.
- **Garantie** (V) : 5 ans, réparation et mise à taille à vie.
- **Moyens de paiement** : non relevés (panier non ouvert).

## Confiance et service

- Boutique et atelier à Bankastræti 4, Reykjavik ; téléphone +354 551 2770 ; fondée en 1999 ; « plus de 260 000 clients » (déclaration du site, non vérifiée).
- Rendez-vous gratuit, en boutique (salle privée possible) ou en visio (V).
- Avis : page « Customer Reviews » avec extraits de Google, Facebook et Tripadvisor choisis par le site (V) ; aucune note chiffrée relevée.
- Presse citée : L'Officiel, Condé Nast Traveler, Vogue, Town & Country (déclaré).
- **Preuves de fabrication** : aucune photo ni vidéo de commande ; seule la mention « fabriqué à la main à Reykjavik » et une galerie de pièces sur mesure (V).
- Libellé du synthétique : « lab grown diamonds » partout ; une phrase explique qu'ils ont les mêmes propriétés que les diamants extraits. En islandais : « ræktaða demanta (e. lab-grown diamonds) » (V, page « giftingarhringir »).
- Certificats : non mentionnés sur les fiches lues (V : aucune mention de GIA ni d'IGI).

## Points forts à retenir pour JR Diamond

1. **Ligne directrice du sur mesure publiée** : ce qu'on peut changer (métal, pierres, diamants) et ce qui est fixé (largeur, dessin), acompte de 50 %, pas de remboursement. Preuve : `/pages/custom-design-guidelines-at-aurum`.
2. **Gravure gratuite avec ressaisie obligatoire** du texte pour éviter l'erreur (champ « Re-enter engraving text »). Preuve : fiche testée.
3. **Coût de livraison et droits dits clairement** (DHL, frais d'environ 15 $ pour les taxes). Preuve : page de livraison et de retour.
4. **Rendez-vous en trois formats** (normal, privé, en ligne) avec consigne d'indiquer les modèles à voir. Preuve : `/products/book-an-appointment`.
5. **Promesse de service durable** : garantie 5 ans et réparation à vie, rappelée sur chaque fiche.
6. **Chargement rapide** : photo principale visible en 0,5 s (ordinateur) et 0,8 s (iPhone), liste en 1,3 s et 0,7 s (V, mesure du jour, une seule mesure).

## Défauts observés

- Aucun configurateur ni visuel 3D ou 360° : une photo par vue, sans vidéo.
- Le prix n'est pas décomposé ; le prix de la pierre et celui de la monture ne sont pas séparés.
- Les modèles « en rupture » restent achetables (« is backordered and will ship as soon as it is back in stock ») avec un délai de 4 semaines (V, fiche).
- Aucun certificat de laboratoire indiqué sur les fiches lues.
- Dollars américains pour une marque dont la boutique est en Islande (la liste des devises n'a pas été lue).
- Le zoom de la photo n'ouvre rien.

## Limites de l'audit

- Ni panier, ni livraison calculée, ni moyens de paiement : le `agents.md` du site demande de ne pas scripter les achats, et le site s'attend à des agents identifiés (Web Bot Auth) que cet audit n'a pas utilisés. Les pages publiques ont été lues avec l'identité Chromium par défaut, une page toutes les 2 secondes au plus.
- Une seule fiche de bague de fiançailles ouverte en navigateur ; 3 autres lues en recherche.
- Tri, pagination, prix, recherche, rendez-vous externe et chat non actionnés.
- Boutique en islandais non auditée (anglais seulement).
- Temps de chargement : une seule mesure par appareil.

## Sources

- https://aurumiceland.com/collections/engagement-rings
- https://aurumiceland.com/collections/engagement-rings/products/womens-wedding-rings-diamond-3
- https://aurumiceland.com/pages/shipping-and-return-policies-1
- https://aurumiceland.com/pages/custom-design-guidelines-at-aurum
- https://aurumiceland.com/pages/bespoke-designs
- https://aurumiceland.com/products/book-an-appointment
- https://aurumiceland.com/pages/frequently-asked-questions-faqs
- https://aurumiceland.com/pages/sizing
- https://aurumiceland.com/pages/customer-reviews
- https://aurumiceland.com/robots.txt ; https://aurumiceland.com/agents.md
- https://aurumiceland.com/collections/giftingarhringir
