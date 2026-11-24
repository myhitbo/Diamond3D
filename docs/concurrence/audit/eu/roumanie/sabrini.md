# Audit Sabrini (Roumanie)

- **Site** : Sabrini (S.C. Irinik S.R.L., Botoșani) · https://sabrini.ro/
- **Page de départ** : https://sabrini.ro/Inele-Logodna-Diamante-Naturale (bagues de fiançailles) ; alliances https://sabrini.ro/verighete-aur-sabrini
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026
- **Appareils** : Chromium ordinateur 1280×900 ; affichage iPhone 13
- **Statut** : **partiel**. Site de catalogue sans configurateur ; **panier, compte et recherche interdits par robots.txt**, donc non ouverts et bouton « Adaugă în coș » non actionné.
- Légende : [V] vérifié · [I] inféré · [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Menu | Bijuterii, Colecții, Inele logodnă, Verighete, Pandora, Accesorii, Cadouri, Card cadou [V] |
| Alliances (`/verighete-aur-sabrini`) | 8 collections (Clasic, Platina, Elegant, Signature, Harmony, Traditional, Geometric, Eternity) ; fiches « La cerere » (sur demande) ; vidéo « procesul de producție » de l'atelier (YouTube) [V] |
| Fiche alliance (SBR0142) | texte « fabriquée sur commande, avec options : carat 14/18 k, couleur de l'or (blanc, jaune, rose), profil, largeur, finition, type de pierres » ; boutons « Solicită detalii », « Vezi disponibilitate în magazine », « Plata în rate », WhatsApp, tableau des tailles ; stock « Indisponibil » [V] |
| Fiche bague (RDNIO.SABA.SPE36038-W) | caractéristiques complètes, prix 44 900 lei, taille (54 seule), « Adaugă în coș » [V] |
| Panier | interdit par robots.txt : non atteint |

## Contrôles vérifiés

Fiche bague : 81 contrôles (ordinateur), 47 (iPhone). Fiche alliance : 88 contrôles (ordinateur) [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu principal (Bijuterii, Inele logodnă, Verighete, …) | liens | ouvrent les catégories | — | [V] |
| Sélecteur de taille (— / 54) | liste | une seule taille en stock | inchangé | [V] lu, non actionné |
| Adaugă în coș | bouton | appelle l'ajout au panier (adresse `?route=checkout/` interdite) | 44 900 lei | **non actionné** (robots.txt) |
| Vezi disponibilitate în magazine | bouton | ouvre la disponibilité par magasin | — | non testé |
| Plata în rate | lien (fenêtre) | popup d'information sur le paiement en plusieurs fois | — | non testé |
| Solicită detalii pe WhatsApp | lien | ouvre `api.whatsapp.com/send?phone=400790999900` avec texte « Buna » | — | lien lu, conversation non ouverte |
| Tabel cu mărimi | lien | télécharge `ghid_masura_inel_2015.pdf` | — | lien lu |
| Solicită detalii (alliance) | bouton | demande de détails (formulaire) | « La cerere » | non actionné |
| Favorite, Compară, Cont, Coș | liens | pages de compte, comparaison, panier | — | **interdits ou non ouverts** |
| Newsletter + case | formulaire | abonnement | — | non rempli |
| Cookies : Acceptă tot / Refuză tot / Personalizează | boutons | bannière | — | non actionnée |

## Options disponibles

- **Bague de fiançailles (exemple)** : or blanc 18 k, ovale 1 ct H VS1, certificat IGI 632415328, fluorescence aucune, polish et symétrie EX, deux ronds de 0,12 ct, rhodium oui, 2,18 g ; collection Three-Stone ; taille 54 [V].
- **Alliances** : 14 k ou 18 k, 3 couleurs d'or, profil, largeur, finition, type de pierres, platine 950 en collection ; tout « sur demande » [V].
- Aucune option de forme, de carat ou d'origine à choisir en ligne [V].

## Prix, délais, retours, garanties

- **Prix** : affiché sur la bague (44 900 lei, TVA 21 % incluse selon `/comanda-plata`) ; alliances « La cerere » [V].
- **Livraison** : 2 à 3 jours ouvrés, gratuite en Roumanie (FanCourier, colis assuré, ouverture possible à la livraison), 250 lei vers l'UE par DHL [V].
- **Retour** : échange ou retour jusqu'à 60 jours (bandeau du site et règlement pour les magasins physiques) ; frais de retour par coursier à la charge du client ; formulaire de retour [V].
- **Garantie** : 2 ans pour tous les bijoux ; garantie commerciale à signaler sous 30 jours [V].
- **Paiement** : remboursement à la livraison, carte via Netopia (jusqu'à 6 mensualités), virement ; compte requis pour commander [V].
- **Remises** : club Sabrini, 5 % sur l'or 14 k, jusqu'à 20 % sur les diamants naturels des collections Blanco's et DeRuvo [V].

## Confiance et service

- Libellé du synthétique : « Diamante sintetice » dans l'offre cadeau (cercei de 2 carats avec une bague en diamant naturel) [V]. Aucun produit synthétique ouvert.
- Certificat IGI numéroté sur la fiche ; la section « Recenzii » affiche « 0 opinii » sur les deux fiches [V].
- Réparations gratuites quel que soit le lieu d'achat ; magasins ; WhatsApp ; ligne 0790 999 900 [V].
- Preuve de fabrication : une vidéo de l'atelier en lien sur la page des alliances ; pas de suivi de commande vu [V].
- Langue unique : roumain ; devise : lei [V].

## Points forts à retenir pour JR Diamond

1. **Fiche de bague complète avec numéro de certificat IGI**, fluorescence, polish et symétrie sur la page (RDNIO.SABA.SPE36038-W).
2. **Retour sur 60 jours et réparations gratuites partout** : argument de réassurance en bandeau (page d'accueil des alliances).
3. **Livraison gratuite assurée, ouverture du colis possible** (`/livrare`).
4. **Vidéo d'atelier sur la page des alliances**, lien visible en tête.

## Défauts observés

- Aucun configurateur malgré une publication qui évoque un « système de configuration » : seules des listes d'options en texte [V].
- Alliances « La cerere » : pas de prix, stock « Indisponible » [V].
- Compte obligatoire pour commander [V].
- Zéro avis sur les fiches ouvertes [V].
- Chargement du visuel principal de la fiche bague : 4,0 s (ordinateur) et 4,2 s (iPhone), une mesure via proxy [V].

## Limites de l'audit

- Panier, compte, comparaison, recherche et tris : interdits par robots.txt, non ouverts. Récapitulatif, frais et délai affichés au panier **non vérifiés**.
- Aucune interaction sur la sélection de taille, les magasins, la fenêtre « Plata în rate ».
- Le site compte plusieurs marques (Sabrini, Blanco's, DeRuvo, Pandora) : seules deux fiches ont été ouvertes.
- Aucune conversation WhatsApp ouverte, aucun formulaire rempli.

## Sources

- https://sabrini.ro/verighete-aur-sabrini · https://sabrini.ro/verighete-aur-sabrini-sbr0142 · https://sabrini.ro/Inele-Logodna-Diamante-Naturale · https://sabrini.ro/inel-logodna-aur-18k-diamant-igi-blanco-s-rdnio-saba-spe36038-w
- https://sabrini.ro/livrare · /returnare · /garantie · /comanda-plata
- https://sabrini.ro/robots.txt
- Captures et sorties : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/sabrini/`
