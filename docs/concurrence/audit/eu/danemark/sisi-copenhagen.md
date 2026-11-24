# Audit : Sisi Copenhagen (collection Diamond Collection)

- **Site** : https://sisicph.dk/ (Copenhague, showroom Rosenborggade 1B, 1130 København K)
- **Page de départ auditée** : https://sisicph.dk/collections/alle-forlovelsesringe, puis fiche https://sisicph.dk/products/classic-solitaire-6-prong-diamond-ring-1-0ct-yg
- **Date** : 15/11/2026 · **Appareils** : ordinateur (1440×900) et affichage iPhone 13, Chromium
- **Statut** : **partiel** (parcours jusqu'à la fiche produit ; pas d'ajout au panier, voir Limites)
- Marques : V vérifié · I inféré · S supposé. Prix en DKK TTC, tels qu'affichés pendant l'opération « Black Week » (remise de 20 % du 28/10 au 30/11, hors alliances et sur mesure, V).

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Catégorie | Forlovelsesringe (49 produits liés sur la page), vielsesringe, solitaire, halo, flerstens, alliance, « Eget design » |
| 2. Fiche produit | Métal (or jaune ou or blanc 14 kt), carat (0,5 / 0,75 / 1,0 / 1,5), taille de doigt (48 à 60) |
| 3. Hors standard | « Specialbestilling » : 32 variantes (or 18 kt jaune ou blanc, platine 950, « Raised setting », qualité D/VVS1) |
| 4. Commande | Bouton « BESTIL NU » (non actionné) |
| Sur mesure | Page « bespoke » : message, croquis en 5 à 7 jours ouvrés, facture complète, fabrication 5 à 7 semaines |

## Contrôles vérifiés

Sur la fiche, 270 contrôles relevés sur ordinateur et 265 en affichage iPhone (controls.cjs). La majorité sont des liens du pied de page et de la grille « Diamond Collection ».

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau cookies : « DECLINE ALL », « ACCEPT ALL », « Show details », 4 cases (nécessaires, fonctionnels, statistiques, marketing) | boutons | « DECLINE ALL » fermé sans effet visible | — | OK |
| Sélecteur de pays DK / SE / NO / EU (+ fenêtre « Continue to sisicph.dk ») | liens, bouton | Renvoie vers sisicph.se, .no, .com | — | Présent, non suivi |
| Métal : « Guld, 14 kt. » / « Hvidguld, 14 kt. » | radio | Change l'adresse (variante), le titre (« … - WG ») et la photo | 1,0 ct : 9 196 → 9 596 (barré 11 495 → 11 995) | OK |
| Carat : 0,5 ct | radio | Titre, photo et adresse changent | 6 200 (barré 7 750) en or blanc | OK |
| Carat : 0,75 ct | radio | Idem | 7 596 (barré 9 495) | OK |
| Carat : 1,0 ct | radio | Retour à la variante d'origine | 9 596 | OK |
| Carat : 1,5 ct | radio | Idem | 13 000 (barré 16 250) | OK |
| Taille 48 à 60 (13 choix) | radio | Taille 54 testée : ni prix ni photo ne changent | inchangé | OK (13 choix, 1 testé) |
| « Specialbestilling » (32 radios) | radio | Présents dans le DOM ; premier visible. Effet sur le prix non mesuré | non relevé | Non testé (voir Limites) |
| « Flere størrelser » | bouton | Cliqué : aucune étiquette « Specialbestilling » devenue visible (comportement non établi) | — | Inconclusif |
| « Størrelsesguide » | lien | Mène à `/pages/storrelsesguide-til-ringe` | — | Lien présent, page non ouverte |
| « OM READY-MADE, BESTILLINGS- OG SPECIALBESTILLINGSVARER » | lien | Page de définition des 3 types (ready-made, sur commande, sur mesure) lue | — | OK |
| « BESTIL NU » | bouton | Non actionné : l'ajout au panier appelle des adresses `/cart/` interdites par `robots.txt` | — | Non testé |
| « VORES PRISGARANTI » | lien | Page « 100 dages prisgaranti » lue | — | OK |
| Galerie : 12 vignettes, flèches (2 boutons) | liens, boutons | Photos du produit (dont une vignette vidéo, I d'après `preview_images`), pas de vue 3D ni 360° | — | Présent |
| Formulaire « contact[name], [email], [body] », bouton « JA, dette smykke », « SEND » | champs | Question sur le produit. **Non rempli** | — | Non testé |
| « BOOK KONSULTATION » (page `/pages/booking`) | lien | Réservation de rendez-vous, tous les jours | — | Lien présent, page non ouverte |
| « EGET DESIGN » (page bespoke) | lien | Lue (étapes, frais, délai) | design 1 500 kr dans certains cas | OK |
| Tri de la collection (« Fremhævet », 8 tris) | liste | Charge `?sort_by=`, **interdit par `robots.txt`** | — | Non testé |
| Filtres de la collection (Pris, Ædelmetal, 14 kt hvidguld) et « Se lagervarer · Klar til levering » | boutons | Panneau non ouvert par mon script (aucun bouton « Filtr » trouvé) ; un clic sur « Se lagervarer » n'a pas changé le nombre de produits (49) | — | Inconclusif |
| « Vis størrelser på lager » (cartes) | bouton | Affiche les tailles en stock par carte (texte relevé, 48 à 60) | — | Présent |
| Compte, recherche (`/search`), panier (`/cart`) | liens | Non ouverts | — | Non testé |
| Partage, comparaison, favoris | — | Aucun contrôle de ce nom dans la liste des 270 contrôles | — | Absent (V) |
| Chat, WhatsApp | — | Aucun bouton. Contacts : `tel:+4542908800`, deux e-mails | — | Absent (V) |

## Options disponibles

- **Métal** : or jaune 14 kt, or blanc 14 kt ; en sur mesure : or 18 kt jaune ou blanc, platine 950 (V).
- **Pierre** : diamant synthétique, couleur E-F, pureté VVS en standard ; D/VVS1 en option sur certains modèles (V).
- **Carat** : 0,5 / 0,75 / 1,0 / 1,5 sur cette fiche ; jusqu'à 3,25 ct sur d'autres fiches ; « jusqu'à 50 ct » sur demande (V).
- **Formes** (texte de la collection) : rond, ovale, poire, émeraude, coussin, radiant (V).
- **Montures** : solitaire, halo, flerstens (trois ou cinq pierres), alliance, cluster ; « Raised setting » en option (V).
- **Taille de doigt** : 48 à 60 (V). **Gravure** : sur mesure ; les pièces gravées sont exclues du retour (V).
- **Origine naturel ou synthétique** : synthétique seulement (V).

## Prix, délais, retours, garanties

- **Prix affiché** à chaque variante, prix barré plus prix remisé (V). Pas de décomposition (métal, pierre, façon) (V).
- **Prix d'entrée** : solitaire à partir de 7 495 kr (texte du guide, V) ; fiche 0,5 ct or blanc à 6 200 kr en Black Week (V).
- **Délai** : « 1-3 dages levering » pour le ready-made (V). Aucun délai chiffré trouvé pour les pièces sur commande ni sur mesure ; sur mesure : 5 à 7 semaines de fabrication après facture (V).
- **Livraison** : « Gratis forsikret levering » ; le titre de la page dit aussi « Fri fragt ved 249,- » (deux messages différents, V).
- **Retours** : 30 jours après réception, prolongeable jusqu'à 90 jours en choisissant la date du cadeau ; échange gratuit ; remboursement avec 30 kr de frais d'étiquette (gratuit en boutique) ; remboursement seulement sur le moyen de paiement d'origine (V). **Exclus** : sur mesure, bespoke et gravure (V). Alliances unies sans diamant : 5 % retenus car faites sur commande (V).
- **Garantie** : prix garanti 100 jours (baisse ou campagne : différence remboursée, même pour le sur mesure) ; première mise à taille gratuite sous 3 mois (V).
- **Certificats** : certificat IGI individuel si la pierre centrale fait 1,0 ct ou plus ; sinon certificat d'authenticité avec les 4 C (V).

## Confiance et service

- 4,9 de note et « +6 500 reviews » Trustpilot, chiffres affichés par le site, non audités (V).
- Réservation de consultation tous les jours, showroom à Copenhague, téléphone et e-mail (V).
- Bespoke : galerie de réalisations clients, visualisations « réalistes » de plusieurs angles, validation avant prix final (V). **Aucune photo ni vidéo de fabrication** mentionnée (V).
- Suivi de commande : portail de retour et service (Returnflows, Webshipper) ; suivi de fabrication non vu (V).

## Points forts à retenir pour JR Diamond

1. **Variantes réelles à chaque choix** : changement de métal ou de carat change titre, adresse, photo et prix (mesuré : 6 200 à 13 000 kr en or blanc selon le carat). Preuve : tableau des contrôles, 15/11.
2. **Le retour prolongé pour un cadeau ou une demande en mariage** (30 jours comptés à partir de la date choisie, jusqu'à 90 jours). Preuve : https://sisicph.dk/pages/retur-ombytning-diamond.
3. **Prix garanti 100 jours, même pour le sur mesure** (https://sisicph.dk/pages/diamond-prisgaranti) : répond à la méfiance sur les prix.
4. **Définition claire de trois types de pièces** (ready-made, sur commande, sur mesure) avec le retour qui en découle. Preuve : https://sisicph.dk/pages/diamond-om-lager-bestillings-og-specialbestillingsvarer.
5. **Le visuel principal apparaît vite** : voir ci-dessous.

Mesures (Chromium, réseau du poste, une seule passe, V) : visuel principal (LCP) à 2,3 s sur ordinateur et 1,1 s en affichage iPhone ; chargement complet 5,4 s et 7,6 s.

## Défauts observés

- Livraison annoncée à deux conditions différentes (« gratuite » et « gratuite dès 249 kr »).
- Aucun délai chiffré pour les pièces sur commande, alors que le client paie avant.
- Le tri (`sort_by`) est interdit aux robots : le catalogue n'est donc pas triable en audit (limite d'audit, pas défaut du site).
- Retour exclu pour tout ce qui est personnalisé, avec peu de détails sur la gravure (V).
- Pas de vue 3D ni 360° : photos de studio seulement, une vidéo probable (I).

## Limites de l'audit

- Pas d'ajout au panier ni de page de panier : `robots.txt` interdit `/cart/` et `/cart.js` ; moyens de paiement, frais exacts et délai affichés au panier non relevés.
- Filtres de la collection et tri non testés (voir tableau). Variantes « Specialbestilling » non testées une à une.
- Un premier script avec de mauvais sélecteurs a dépassé 30 s ; les temps cités viennent d'une seconde passe (LCP par PerformanceObserver).
- Aucun formulaire rempli, aucun chat ni WhatsApp ouvert, aucun compte créé.

## Sources

- https://sisicph.dk/collections/alle-forlovelsesringe
- https://sisicph.dk/products/classic-solitaire-6-prong-diamond-ring-1-0ct-yg
- https://sisicph.dk/pages/bespoke-design
- https://sisicph.dk/pages/retur-ombytning-diamond
- https://sisicph.dk/pages/diamond-prisgaranti
- https://sisicph.dk/pages/about-diamonds
- https://sisicph.dk/pages/diamond-fremstillingstid-og-vilkar
- https://sisicph.dk/pages/diamond-om-lager-bestillings-og-specialbestillingsvarer
- https://sisicph.dk/pages/guide-forlovelsesringe
- https://sisicph.dk/robots.txt
