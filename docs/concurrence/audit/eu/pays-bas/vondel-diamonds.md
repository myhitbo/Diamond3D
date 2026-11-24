# Audit : Vondel Diamonds (Pays-Bas)

- **Site** : Vondel Diamonds, boutiques à Amsterdam (Vondelpark, Neuf-Rues) et à Den Bosch
- **Adresse de départ** : https://www.vondel.com/collections/alle-verlovingsringen (liste de 194 bagues), fiche auditée : https://www.vondel.com/products/lisa-round-solitair-lab-grown-diamond-ring-with-hidden-halo
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366 × 900 (ordinateur) et iPhone 13 (affichage, Playwright)
- **Statut** : **complet** pour la fiche, la liste filtrée, le panier et les pages de politique ; **partiel** pour le tri, « Toon per materiaal » et la caisse (volontairement non ouverts)
- `robots.txt` : `Allow: /` ; `Disallow: /api/`, `/preview/`, `/*/preview/`, `/*?*sort=`, `/*?*per-materiaal=` (V, https://www.vondel.com/robots.txt). Le menu de tri et « Toon per materiaal » créent ces adresses : **non actionnés**. Le robots.txt autorise aussi nommément les robots d'IA.
- Marques : **V** vérifié (page lue ou contrôle actionné) · **I** inféré · **S** supposé.

## Parcours

Le site n'a pas de configurateur à étapes : une fiche par forme de diamant, avec 3 choix en haut (forme, métal, carat), puis taille, stock et panier (V).

| Étape | Adresse | Options |
|---|---|---|
| Liste | `/collections/alle-verlovingsringen` (194 résultats) | Filtres forme, métal, style, carat, prix, « Alle filters » ; tri ; « Alleen op voorraad (61) » |
| Fiche | `/products/<série>-<forme>-…` (ex. Lisa) | Forme (9 liens vers 9 fiches), métal (7), carat (11), taille, stock par boutique, gravure (dans le panier) |
| Sur mesure | `/eigen-ontwerp` | Formulaire (type, métal, budget, idée, liens, 5 fichiers) : non rempli |
| Rendez-vous | `/afspraak?sieraad=<fiche>` | Prise de rendez-vous avec la fiche pré-sélectionnée (lien lu, page non ouverte) |
| Panier | tiroir à droite ; `/cart` renvoie à l'accueil | Ligne, quantité, gravure, sous-total, « Afrekenen » vers une caisse Shopify (non ouverte) |

## Contrôles vérifiés

Fiche Lisa ronde 1 ct, or 14 k jaune, ordinateur sauf mention. Prix TTC en EUR.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Foto 1 à 10 van 10 (9 photos, 1 vidéo) | 10 vignettes | La galerie est une grille défilante ; un clic sur une vignette n'ouvre aucun agrandissement (« Element is not visible » pour la vignette dupliquée) | — | **sans effet visible** |
| Video 5 van 10 | vidéo | MP4 1080p de 15 s, muette, en boucle, lancée seule | — | OK |
| Deel dit product | bouton | Aucun panneau ni message visible en navigateur automatisé | — | non vérifiable |
| Bewaar sieraad | bouton | Cœur plein ; pastille « 1 » sur l'icône cœur de l'en-tête | — | OK |
| Onderdeel van de Lisa serie / Bekijk de serie | liens | Mènent à `/series/lisa` (18 modèles, « à partir de 550 € ») | — | non ouvert |
| Diamantvorm : Rond, Ovaal, Emerald, Cushion, Elongated cushion, Radiant, Peer, Marquise, Hart | 9 liens | Ouvrent la fiche de la forme (autre adresse, même grille de prix, même métal) | identique | OK (8 fiches ouvertes) |
| Materiaal : 14K geel, rosé, wit ; 18K geel, rosé, wit ; Platina | 7 boutons | L'adresse change (`?materiaal=18k-rosegoud&karaat=1`), l'image change de teinte, le prix suit ; chaque bouton porte « Op voorraad » ou « Op bestelling » | 14 k : 1 395 ; 18 k : 1 895 ; platine : 1 895 | OK |
| Karaat middensteen : 0,5 … 6 ct | 11 boutons | Prix par carat ; l'adresse suit (`karaat=1.5`) ; la photo ne change pas | voir « Options » | OK |
| Bekijk karaatgroottes | bouton | Tableau de tailles de pierre (non relevé) | — | non testé |
| Meer uitleg : Diamantvorm, Materiaal, Karaat, Voorraad, Gratis verzending, 30 dagen retour, Levenslange garantie | 7 infobulles au survol | Bulles de texte (voir « Prix, délais… ») ; le clic n'ouvre rien | — | OK |
| Maattabel | bouton | Panneau : tableau EU 46 à 64, diamètre intérieur et circonférence ; « Tot en met EU 55½ inbegrepen » | — | OK |
| Ringmaat (menu) | liste | 60 choix : « Kies… », « Ik weet mijn maat nog niet », EU 41 à 60+ ; au-delà de 55½ un supplément | EU 56 : 1 470 (+75) | OK |
| « Kies eerst je ringmaat » | message | Apparaît si on ajoute au panier sans taille ; rien n'est ajouté | — | OK |
| Voorraad : Den Bosch, Amsterdam Vondelpark, Amsterdam 9 Straatjes | 3 boutons | Statut par boutique (2, 1, 0 en stock pour la fiche) ; le clic ouvre le panneau de la boutique : horaires, jours fermés (25 déc., 26 déc., 1 janv.), « Bekijk boutique » | — | OK |
| In winkelwagen | bouton | Ouvre le tiroir panier avec la ligne « 14K Geelgoud / 1 ct » | 1 395 | OK |
| Pas deze ring in de boutique | lien | Mène à `/afspraak?sieraad=…` (non ouvert) | — | non ouvert |
| Vraag direct advies bij onze adviseur / WhatsApp flottant | liens | `https://wa.me/31612962469` (non ouvert) | — | non ouvert |
| Panier : Voeg gravure toe | lien | Panneau : champ 25 caractères, 4 symboles (♥ ∞ & ·), 9 polices (Avenir, Bookman, Cormorant, Didot, English111 Vivace, Monotype Corsiva…), case à cocher ; « graveren voegt 2 tot 3 werkdagen toe » | « · 75 € » affiché à côté du lien (I : prix de la gravure) | OK |
| Panier : − / + / Verwijder | boutons | Quantité, suppression | — | OK (+ essayé, effet non relevé) |
| Panier : Afrekenen | bouton | Lien vers `vondel-diamonds.myshopify.com/cart/c/…` | — | **caisse non ouverte** (règle) |
| Vorige / Volgende (cartes de la page) | boutons | Défilement des photos d'une carte | — | non testé |
| Valuta (EUR €) | liste | 107 devises, dont ILS ₪ | — | non testé |
| Taal (NL, EN, DE, FR, ES) | liste | 5 langues | — | non testé |
| Black Friday, Nieuw, Sieraden, Verloven, Trouwen, Piercings, Eigen ontwerp, Diamanten, Boutiques, Afspraak maken | menu | Pages `/black-friday`, `/collections/…`, `/eigen-ontwerp`, `/lab-grown-diamanten`, `/amsterdam`, `/afspraak` (les trois dernières non ouvertes en dehors de leur lecture) | — | OK / non ouvert |
| Accepteer alles / Instellingen aanpassen | boutons | Bandeau de cookies, fermé avec « Accepteer alles » | — | OK |

### Liste `/collections/alle-verlovingsringen`

| Libellé | Type | Effet observé | État |
|---|---|---|---|
| Diamantvorm (12) | filtre | Rond 32, Ovaal 48, Emerald 20, Cushion 9, Elongated cushion 31, Radiant 20, Peer 18, Marquise 11, Princess 3, Asscher 1, Hart 5, Baguette 4 | OK |
| Materiaal (7) | filtre | 14K geel 177, rosé 177, wit 177, 18K geel 185, rosé 180, wit 184, platine 60 | OK |
| Stijl (6) | filtre | Solitaire 100, Solitaire pavé 57, Halo 24, Drie stenen 19, Multi stenen 5, Rijring 2 | OK |
| Karaat middensteen (21) | filtre | 0,5 à 9,0 ct (0,5 ; 0,56 ; 0,75 ; 0,98 ; 1,0 ; 1,09 ; 1,1 ; 1,25 ; 1,3 ; 1,5 ; 2,0 ; 2,5 ; 2,66 ; 2,7 ; 3,0 ; 3,5 ; 4,0 ; 5,0 ; 6,0 ; 7,0 ; 9,0) | OK |
| Prijs | filtre | 5 tranches (< 1 000 ; 1 000 à 2 000 ; 2 000 à 3 500 ; 3 500 à 5 000 ; > 5 000) et champs min et max avec « OK » | OK (non appliqué) |
| Alle filters | panneau | Reprend les filtres, plus « Alleen op voorraad (61) », boutiques (Vondelpark 47, 9 Straatjes 23, Den Bosch 31), « Toon per materiaal », type de bande (Pavé 71, Accent stones 1, Pointed 4), « Wis alles », « Toon N resultaten » | OK |
| Ovaal puis « Toon 48 resultaten » | filtre | L'adresse devient `?vorm=oval`, 48 résultats | OK |
| Alleen op voorraad | case | Compteur 61 ; case non cochée (l'adresse aurait changé) | non testé |
| Sorteren : Bestsellers, Nieuwste, Prijs laag–hoog, Prijs hoog–laag | liste | **Non actionné** : produit une adresse `?sort=` interdite par robots.txt | non testé (raison : robots.txt) |
| Toon per materiaal | commutateur | **Non actionné** : adresse `?per-materiaal=` interdite | non testé (raison : robots.txt) |

## Options disponibles

- **Formes** (fiche Lisa) : rond, ovale, émeraude, coussin, coussin allongé, radiant, poire, marquise, cœur. Sur la liste : aussi princesse, asscher, baguette (V).
- **Métaux** : or jaune, rosé et blanc en 14 k et 18 k ; platine. Les mélanges 14 k jaune et blanc, tricolore, existent seulement dans le formulaire sur mesure (V).
- **Carats** (fiche Lisa ronde, 14 k jaune, TTC) : 0,5 ct 1 095 · 1 ct 1 395 · 1,25 ct 1 550 · 1,5 ct 1 695 · 2 ct 1 995 · 2,5 ct 2 295 · 3 ct 2 595 · 3,5 ct 2 995 · 4 ct 3 395 · 5 ct 4 195 · 6 ct 4 995 (V). L'ovale et les autres formes n'ont pas le 1,25 ct (V).
- **Prix par métal à 1 ct** : 14 k 1 395 ; 18 k 1 895 ; platine 1 895 (V). Le platine coûte donc autant que l'or 18 k.
- **Pierre** : synthétique CVD, pureté VVS à VS, couleur D à F, taille « Triple Excellent » (V, page Over ons). Pas de choix de pureté ni de couleur.
- **Taille de doigt** : EU 41 à 60 et plus ; « Ik weet mijn maat nog niet » ; incluse jusqu'à 55½, +75 € de 56 à 58½, +95 € à partir de 59 (V).
- **Gravure** : intérieure, 25 caractères, 9 polices, 4 symboles (V).
- **Vues** : 10 médias (9 images qui ressemblent à des rendus, vues de face, de profil et de dessus, I ; 1 vidéo) ; pas de 3D, pas de 360°, pas de vue sur la main (V).
- **Service** : WhatsApp, téléphone +31 20 210 1719, e-mail info@vondel.com, 3 boutiques, rendez-vous avec fiche pré-sélectionnée (V).

## Prix, délais, retours, garanties

- **Prix** : un prix unique par variante, TTC (« alle prijzen inclusief btw »). Aucune décomposition (métal, pierre, façon) ; l'argument est « jusqu'à 90 % moins cher que les diamants de mine, sans marges cachées » (V, Over ons ; non démontré).
- **Délai** : en stock, expédié sous 1 à 2 jours ouvrés (taille 53). Sur commande : « circa 3 weken » (page d'expédition) ou « 3–5 weken » (texte de la liste) (V, deux pages qui divergent). Ajuster la taille ajoute 3 jours ouvrés (V, infobulle « Voorraad »). Gravure : +2 à 3 jours ouvrés (V).
- **Première retouche de taille** offerte ; bande lisse : sans limite ; bande pavée : 3 tailles au plus (V).
- **Livraison** : « Gratis verzending binnen Nederland » en bandeau ; la page d'expédition parle de frais « calculés à la caisse » et d'envoi gratuit « pour beaucoup de commandes » ; le tiroir dit « gratis verzekerde verzending. Verzendkosten en btw zie je bij het afrekenen » (V : formulations qui se contredisent).
- **Retours** (`/retourneren`, mis à jour le 6/11/2026) : 30 jours après réception ou retrait, bijou non porté ; frais de retour à la charge du client ; remboursement sous 3 jours ouvrés. **Exclus** : bijoux gravés, modifiés, personnalisés, conçus sur mesure, avec pierre fournie par le client ou pierre achetée spécialement (V).
- **Garantie** : « 6 maanden fabrieksgarantie » (page politique) ; l'infobulle de la fiche dit « levenslange garantie » sur tous les diamants (V : deux promesses différentes).
- **Certificats** : certificat IGI individuel dès 1,00 ct par pierre ; certificat de bijou IGI en dessous, sauf huggies, « tiny rings », bracelets cordon et piercings (V, `/diamant-certificaten`). Pas de GIA (synthétique seulement).
- **Libellé du synthétique** : « lab grown » partout, « CVD », et « échte diamanten » pour les nommer ; « gekweekt in een laboratorium » (V). Jamais « synthétique » ; « vrais » est déconseillé par CIBJO (V, cité dans l'inventaire).
- **Langues et devises** : NL, EN, DE, FR, ES ; 107 devises (V).
- **Moyens de paiement** : non affichés avant la caisse (V).

## Confiance et service

- 3 boutiques avec stock par fiche et horaires (V). Fondatrice nommée (Joanne Schilder) ; « droits exclusifs au Benelux » pour certains laboratoires (V, Over ons).
- Conseil par WhatsApp visible en permanence (V).
- **Avis clients** : aucun relevé sur la fiche ni la liste (V). Pas d'étoiles ni de note.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier ; la seule vidéo est un rendu de 15 s (V). Le sur mesure promet « un dessin 3D et un devis sans engagement, sans frais de conception » (V).
- **Suivi de commande** : numéro de suivi par e-mail à l'expédition (V, `/verzenden`).

## Points forts à retenir pour JR Diamond

1. **Stock par boutique sur la fiche** : « 2 op voorraad » à Den Bosch, « 1 » à Amsterdam, « op bestelling » ailleurs, avec les horaires (preuve : panneau Den Bosch, 15/11). Pour JR Diamond, l'équivalent est « en atelier » ou « à fabriquer ».
2. **Prix qui monte avec le métal, l'adresse qui suit** : chaque choix change l'adresse (`?materiaal=18k-rosegoud&karaat=1`), donc on peut partager la configuration (preuve : adresses relevées). C'est exactement l'action sans dépendance de la synthèse du 16/11.
3. **Étiquette « Op voorraad / Op bestelling » sur chaque bouton de métal et de carat** : le délai est lisible avant le choix (preuve : libellés des 7 métaux et des 11 carats).
4. **Gravure ajoutée au panier, avec polices et symboles** et délai annoncé (preuve : panneau de gravure : 9 polices, 25 caractères, « 2 à 3 jours »).
5. **Taille : tableau en mm, supplément annoncé, première retouche offerte** (preuve : `Maattabel`, infobulle « Voorraad »).
6. **Retour clair pour le standard, exclusion claire pour le sur mesure et le gravé** (preuve : `/retourneren`).
7. **Formulaire de sur mesure sans frais de conception**, avec budget en 4 tranches et 5 fichiers (preuve : `/eigen-ontwerp`).

## Défauts observés

- **Garantie : deux promesses** (6 mois sur la page politique, « à vie » dans l'infobulle de la fiche) (V).
- **Délai de fabrication : deux chiffres** (3 semaines, 3 à 5 semaines) (V).
- **Livraison gratuite ou non** : trois formulations différentes (bandeau, tiroir, politique) (V).
- **Pas de page panier** : `/cart` renvoie à l'accueil ; seul le tiroir existe (V).
- **Galerie sans agrandissement** : les vignettes n'ouvrent rien (V).
- **Aucune vue 3D, 360° ou sur la main** malgré un produit « à composer » (V).
- **Pas de décomposition du prix** ni d'avis clients (V).
- Le platine est vendu au prix de l'or 18 k (V), ce qui peut surprendre un client informé.

## Limites de l'audit

- Parcours profond sur une série (Lisa) ; 8 fiches de forme ouvertes pour confirmer la grille de prix ; les autres séries (Lara, Mia, Elena…) lues dans la liste seulement.
- Tri et « par matériau » : non actionnés (robots.txt). Cases « Alleen op voorraad » non cochées.
- Caisse, pages `/afspraak`, `/series/lisa`, WhatsApp, pages de boutique non ouvertes ou non suivies ; modes de paiement donc inconnus.
- Bouton de partage : sans effet visible en navigateur automatisé ; je ne sais pas s'il copie l'adresse ou ouvre le partage du système.
- Prix de la gravure : le « 75 € » est lu à côté du lien, pas confirmé par une ligne de panier.
- Les chiffres de stock sont ceux du 15/11 et varient.

## Mesures

| Mesure | Ordinateur | Affichage iPhone 13 |
|---|---|---|
| TTFB de la fiche | 639 ms | 584 ms |
| DOMContentLoaded / chargement complet | 1 391 ms / 2 334 ms | 798 ms / 1 555 ms |
| Image principale visible (LCP) | titre à 960 ms, image 360 px à 1 088 ms, image 1 024 px à 1 432 ms | image 1 280 px à 1 456 ms |
| Défilement horizontal de la page | — | aucun (390 px contre 390 px) |

## Sources

- https://www.vondel.com/products/lisa-round-solitair-lab-grown-diamond-ring-with-hidden-halo et 8 fiches de forme voisines.
- https://www.vondel.com/collections/alle-verlovingsringen (et `?vorm=oval`), https://www.vondel.com/eigen-ontwerp
- https://www.vondel.com/retourneren , /verzenden , /diamant-certificaten , /over-ons , /lab-grown-vs-natuurlijke-diamanten
- https://www.vondel.com/robots.txt
- Captures et journaux : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/vondel/`.
