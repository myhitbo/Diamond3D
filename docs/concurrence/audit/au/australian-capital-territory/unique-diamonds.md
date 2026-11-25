# Audit : Unique Diamonds (Canberra et Melbourne)

- **Site** : Unique Diamonds, https://uniquediamonds.com.au (Shopify)
- **Page de départ** : https://uniquediamonds.com.au/products/oval-four-claw-solitaire-engagement-ring-with-hidden-halo
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13
- **Statut** : **partiel**. Le défi 429 signalé n'est pas apparu (une douzaine de pages lues en 200, une page toutes les 2 s au moins). Non actionnés : « Select Diamond » / ajout au panier (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Fiche « Build your ring » (réglage seul) | Forme, métal, origine, poids, taille de doigt, gravure oui/non + police |
| 2. « Choose your diamond » (accordéon) | Liste de diamants par niveau Premium / Choice / Value, avec « Full Diamond Inventory » |
| 3. « Select Diamond » (bouton) | Non actionné [V : bouton visible, formulaire /cart/add] |
| 4. Panier | Page /cart lue vide : « Your cart is empty » [V] |
| Autres voies | Rendez-vous (Canberra, Melbourne, virtuel), UD Bespoke (sur mesure), anneau de mesure gratuit |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Forme (Oval) | liste personnalisée, 11 choix : Round, Oval, Cushion, Elongated Cushion, Old Miner, Pear, Princess, Emerald, Radiant, Asscher, Marquise | Liste lue ; changement de forme non cliqué (probable navigation vers la fiche de la forme, [I]) | non testé | liste OK |
| Métal : 18K YG / WG / RG / Two Tone / Platinum | liste à pastilles de couleur | Change l'image principale (…Yellow-Yellow, White-White, Rose-Rose, White-Yellow) ; le platine réutilise l'image or blanc [V] | inchangé : 1 876 $ (USD affiché) | OK |
| Origine : Lab-Grown / Natural | liste | Libellé change ; image inchangée | inchangé | OK |
| Poids : 0,50 ct à 6 ct (12 paliers de 0,5) | liste | Libellé change ; aucune image ni prix ne change | inchangé | OK |
| Taille de doigt | liste : E à Z avec demi-tailles + « Help Me With Size » | Non sélectionnée ; bouton d'achat reste « Select Diamond » | non applicable | liste lue |
| Gravure | Oui / Non + liste de polices : Birds of Paradise, Consola Mono, Champagne & Limousines | Lue dans le DOM ; non actionnée | non testé | lue |
| Choose your diamond | accordéon | Ouvre 6 diamants (3 niveaux x naturel/synthétique) : carat, couleur, pureté, prix, fluorescence, table, polissage, symétrie, profondeur, « SELECT THIS DIAMOND » | 1 399 $ à 2 816 $ (USD) | OK |
| Full Diamond Inventory | lien | Adresse non relevée | non testé | non testé |
| Select Diamond (haut et barre collante) | bouton, formulaire /cart/add, désactivé tant que taille non choisie | Non cliqué : /cart/add interdit par robots.txt, et agents.md demande de ne pas scripter les contrôles d'achat | non testé | non testé |
| Cœur (favori) | icône sur l'image | Présent en 118 contrôles ; non cliqué | non testé | non testé |
| Vignettes images (4 vues + 8 d'autres formes) | galerie | Photos de rendu uniquement ; 0 vidéo, 0 modèle 3D, 0 visionneuse AR (comptage DOM) [V] | n/a | OK |
| Zoom | 8 boutons repérés | Non actionnés | n/a | non testé |
| Accordéons Product Details / Production, Shipping & Returns / Customise / Our process | accordéons | Texte lu dans le DOM (voir plus bas) | n/a | OK |
| Book an appointment (x3) | lien /pages/book-an-appointment | Page autorisée ; formulaire non rempli | n/a | non testé |
| Showrooms Melbourne, Canberra | liens | Canberra : 64 Giles Street, Kingston ACT 2604 ; mar-ven 10-17 h, sam 10-15 h ; tél. (02) 6193 6502 [V] | n/a | OK |
| Recherche, panier (icône), FAQ (4 questions), pied de page, réseaux (TikTok, Facebook, Instagram, Pinterest) | liens | Page /cart ouverte : vide | n/a | OK |
| Bandeau cookies Accept / Reject | boutons | « Reject » ferme le bandeau | n/a | OK |
| Ring Size Guide | page | Une remise à taille gratuite ; conseils ; anneau de mesure gratuit (bouton ajout au panier non cliqué) | 0 $ | lue |

Mobile : 44 contrôles repérés (118 sur ordinateur), même page ; menu replié. Parcours détaillé non rejoué en mobile (voir Limites).

## Options disponibles

- **Formes** (11) : Round, Oval, Cushion, Elongated Cushion, Old Miner, Pear, Princess, Emerald, Radiant, Asscher, Marquise. Menus de style : UD Signatures, Solitaire, Trilogy, East West, Bezel, Coloured Stones, Diamond Band.
- **Métaux** : or 18 K jaune, blanc, rose, deux tons, platine.
- **Origine** : synthétique (« Lab-Grown ») ou naturel.
- **Poids** : 0,50 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 3,5 ; 4 ; 4,5 ; 5 ; 5,5 ; 6 ct.
- **Taille de doigt** : E à Z par demi-taille (échelle australienne) ; « Help Me With Size ».
- **Gravure** : oui/non, 3 polices.
- **Pas d'option visible** : pavage, griffes, corps de bague (un réglage = une fiche), filtres de pierres sur la fiche.
- 120 variantes (5 métaux x 2 origines x 12 poids) [V : fichier produit .js].

## Prix, délais, retours, garanties

- **Prix** : la fiche affiche « Starting at » 1 876,00 $ « (Setting price) » : prix du réglage seul ; le diamant s'ajoute à l'étape suivante. Les 120 variantes ont le même prix, donc métal, origine et poids ne changent pas le prix du réglage [V]. Le fichier produit donne 2 800 (ce qui correspond à 1 876 / 2 800 = 0,67) : la devise affichée est donc convertie par géolocalisation (le sélecteur caché indique « United States | USD $ ») ; la devise d'origine est [I] dollar australien. Diamants du tableau : 1 399 $ à 2 816 $ (USD) [V].
- **Pas de décomposition** or / façon / pierre.
- **Délais** (page /pages/shipping-timeline) : prêt à expédier sous 2 jours ouvrés ; sur commande 4-5 semaines + 2-5 jours d'envoi ; bespoke au moins 2 mois ; production express 2 semaines sur demande. Les accordéons de la fiche donnent « 2-5 semaines » et « 2-10 semaines » : **les deux pages se contredisent** [V].
- **Livraison** : Australie par Express Post avec signature, 2-5 jours ; international par DHL, 5-10 jours, droits à la charge du client. Frais non affichés (panier vide).
- **Retours** : pas de remboursement pour changement d'avis ; échange ou avoir sous 7 jours, pièces prêtes à expédier seulement ; articles personnalisés, redimensionnés ou sur commande exclus [V].
- **Garantie** : garantie à vie de fabrication (défauts et malfaçons), exclusions usure, perte de pierre, réparation par un tiers (annule la garantie) ; contrôle conseillé tous les 6-12 mois ; réparation d'usure au prix coûtant [V].
- **Remise à taille** : une gratuite après l'achat [V].

## Confiance et service

- Rendez-vous en showroom (Canberra, Melbourne) ou virtuel ; consultation avant achat [V].
- Page « UD Diamond Difference » : sélection des pierres « au-delà du certificat » ; la page ne nomme ni GIA ni IGI [V]. Certificat : non affiché sur la fiche du réglage [V].
- Page synthétique vs naturel : « visuellement identiques », choix neutre ; libellé « lab-grown » [V].
- Avis clients : aucun sur la fiche (non relevé). Téléphone, e-mail info@uniquediamonds.com.au ; pas de WhatsApp ni de chat repéré.
- Preuves de fabrication : la page UD Bespoke décrit 6 étapes dont rendus CAO avec acompte ; aucune photo ou vidéo d'atelier ni suivi de commande observés [V].
- Paiement : non vu (panier vide) ; le formulaire de la fiche contient un bouton d'achat accéléré, non actionné.
- Langue : anglais seul ; devise par géolocalisation.

## Points forts à retenir pour JR Diamond

1. **Prix en deux temps réglage + diamant** : 1 876 $ réglage seul, puis diamants à 1 399-2 816 $ avec niveaux Value / Choice / Premium (fiche, accordéon « Choose your diamond »).
2. **Fiche de diamant complète** (carat, couleur, pureté, fluorescence, table, polissage, symétrie, profondeur) : même choix naturel / synthétique côte à côte (accordéon).
3. **Trois rythmes de production explicites** (prêt, sur commande, bespoke) avec une option express de 2 semaines (/pages/shipping-timeline).
4. **Image qui suit le métal** (jaune, blanc, rose, deux tons) sans rechargement de page (essai des 5 métaux).
5. **Remise à taille offerte et anneau de mesure gratuit** (/pages/ring-size).
6. **Parcours bespoke en 6 étapes avec rendu CAO avant fabrication** (/pages/ud-bespoke) : proche de la promesse de JR Diamond.

## Défauts observés

- Le prix ne bouge jamais quand on change le poids : l'étiquette « Starting at » ne reflète pas l'achat final avant le choix du diamant [V].
- Délais contradictoires entre la fiche (2-5 / 2-10 semaines) et la page Production (4-5 semaines / 2 mois) [V].
- Platine illustré par l'image de l'or blanc [V].
- Aucune vidéo, 3D, vue sur la main ou AR ; photos de rendu (une seule bague pour toutes les tailles de pierre) [V].
- Pas de retour pour changement d'avis, pièces personnalisées exclues de l'échange [V].
- Prix en USD par géolocalisation sur un site australien : peut troubler un visiteur [I].
- Fautes de frappe sur le site (« Appintment », « recieve », « DESING ») [V].
- Pas d'avis clients ni de certificat visible sur la fiche [V].

## Limites de l'audit

- Le robots.txt du site interdit /cart/ (donc /cart/add) et /cart.js ; son agents.md demande aux agents de ne pas scripter les contrôles d'achat. « Select Diamond », l'ajout de l'anneau de mesure, le favori, le zoom, le changement de forme, la sélection de diamant, la taille et la gravure n'ont pas été actionnés. Panier réel, frais de livraison et moyens de paiement : non vus.
- Prix : lus avec la devise donnée par la géolocalisation du serveur (USD) ; le montant en dollars australiens n'est pas affiché dans ma session.
- Mobile : seuls le chargement, la liste des contrôles et une capture ont été faits.
- Aucune formulation du site n'a été vérifiée contre une source tierce.

## Sources

Pages lues le 15/11/2026 (toutes autorisées par robots.txt) :
- https://uniquediamonds.com.au/products/oval-four-claw-solitaire-engagement-ring-with-hidden-halo (et .js)
- /pages/shipping-timeline, /pages/returns-exchanges, /pages/warranty, /pages/ring-size, /pages/canberra-showroom, /pages/ud-bespoke, /pages/the-ud-diamond-difference, /pages/lab-diamond-vs-natural-diamond, /cart, /agents.md, /robots.txt (toutes sous https://uniquediamonds.com.au).
- Temps d'apparition du visuel principal : ordinateur 2,9-3,1 s (LCP 2,7-3,0 s), iPhone 2,4 s (LCP 2,2 s) [V, 2 mesures ordinateur, 1 mobile].
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/unique-diamonds/
