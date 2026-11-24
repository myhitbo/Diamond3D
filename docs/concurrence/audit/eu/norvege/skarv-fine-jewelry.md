# Audit : Skarv Fine Jewelry (Bergen)

- **Site** : Skarv Fine Jewelry, https://skarvjewelry.no/ (Shopify ; Skarv Fine Jewelry AS, Lars Hilles gate 19, Bergen ; studio Tverrgaten 4)
- **Page de départ auditée** : https://skarvjewelry.no/products/oval-tulip-solitaire (fiche à options et visionneuse 3D) ; liste https://skarvjewelry.no/collections/forlovelsesringer
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Options, prix, visionneuse 3D, onglets, conditions lus ; **ajout au panier non fait** : `robots.txt` interdit `/cart/` (chemin d'ajout `/cart/add` de Shopify) ; la page `/cart` (autorisée) a été lue vide ; paiement, formulaire de sur-mesure, chat non testés.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Liste des bagues | 2 pages de modèles (« Velg alternativer » sur chaque carte), tri « SORTER ETTER », 3 densités d'affichage (large, medium, compact) |
| 2. Fiche | Matériau (4) → taille de diamant (9) → taille de doigt EU46 à EU62 → gravure gratuite (police) → « LEGG I HANDLEKURV » |
| 3. Visionneuse 3D | Intégrée sous la description : 4 pastilles de métal, zoom + et −, bouton AR, bouton « Metall » |
| 4. Sur mesure | Page « DESIGN DIN EGEN » : rendez-vous ou formulaire, modèle 3D validé, 3 à 5 semaines |
| 5. Panier | `/cart` (lu vide) |

## Contrôles vérifiés

Contrôles listés par `controls.cjs` : liste 196 ; fiche 119 sur ordinateur, 99 en affichage iPhone ; panier 47.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Matériau : 14K Gult gull | radio | Choix par défaut | 18 500 kr (0,5 ct) | OK (V) |
| 14K Hvitt gull / 14K Rosegull | radio | L'adresse prend `?variant=…` ; l'image principale de la galerie ne change pas | 18 500 kr (inchangé) | OK (V) |
| 950 Platina | radio | Idem | **19 500 kr (+1 000)** | OK (V) |
| Diamantstørrelse : 0.5 ct | radio | Défaut | 18 500 kr | OK (V) |
| 0.75 ct | radio | `?variant=…` | 23 900 kr | OK (V) |
| 1 ct | radio | idem | 29 900 kr | OK (V) |
| 1.5 ct | radio | idem | 49 900 kr | OK (V) |
| 2 ct | radio | idem | 69 900 kr | OK (V) |
| 3 ct | radio | idem | 89 900 kr | OK (V) |
| 1.25, 1.75 et 2.5 ct | radio | Les 3 sont présents, adresse changée | Prix non lu | Actionnés, prix non relevé |
| RINGSTØRRELSE (EU46 à EU62) | menu | 17 entrées ; choix pris en compte | Aucun | OK (V) |
| « Jeg trenger en ringmåler » | contrôle de page | Texte « I need a ring sizer » présent ; destination non vérifiée | — | Non testé |
| GRAVERING : champ + 4 polices (Montserrat Italics, Pinyon Script, Times New Roman, autre) | champ, radios | Gravure personnelle **gratuite** ; texte non saisi | « Gratis » | Lu, non saisi |
| LEGG I HANDLEKURV | bouton | Non cliqué : le formulaire envoie vers `/cart/add`, chemin interdit par `robots.txt` | — | Non testé (raison : règle) |
| Visionneuse 3D : 4 pastilles de métal | boutons dans un iframe | Or 14 k, or blanc, platine, or rose : le modèle change de couleur (4 captures comparées) ; **indépendant** du choix de matériau de la fiche (le source de l'iframe ne change pas) | Aucun | OK (V) |
| Visionneuse 3D : « + » / « − » | boutons | Présents ; zoom non constaté par capture (un essai) | — | Non concluant |
| Visionneuse 3D : bouton AR | bouton | Non actionné (ouvre la caméra / l'essayage sur la main selon le texte « prøv den på hånden ved å trykke på AR ») | — | Non testé |
| Visionneuse 3D : rotation à la souris | glissement | Non testé | — | Non testé |
| Galerie : « Gå til element 1 » à « 16 » | 16 boutons | 16 éléments d'image ; non parcourus un à un | — | Non testé |
| Onglets : DETALJER, LEVERINGSTID, GARANTI, BÆREKRAFTIGE LAB-DIAMANTER, BETALING | 5 panneaux dépliables | Chacun s'ouvre et affiche son texte (voir plus bas) | — | OK (V) |
| « skjemaet for spesialbestilling » | lien | Mène à `/pages/custom-orders-1` (adresse lue, page non lue) | — | Adresse vérifiée |
| Cartes « Andre ser også på » | liens, boutons | Modèles proches avec « Salgspris fra 18 500 kr » ; boutons « Velg alternativer » | — | Lus |
| Liste : « SORTER ETTER », densités | boutons | Non actionnés | — | Non testé |
| Liste : pagination « 2 » | lien | Adresse `?page=2` autorisée, lue dans les contrôles | — | Adresse vérifiée |
| En-tête : DESIGN DIN EGEN, BOOK VEILEDNING, Søk, Handlekurv | liens | `/pages/design-din-egen`, `/pages/personlig-veiledning`, `/search`, `/cart` | — | Adresses vérifiées (`/search` non ouverte : adresse de recherche) |
| Pied de page : guides, certificats, CGV | liens | `/pages/diamant-guide`, `/pages/lab-diamonds`, `/pages/certificate`, `/pages/storrelsesguide`, `/policies/…` | — | Pages lab-diamonds, certificate, legal-notice lues |
| Contact : téléphone, e-mail, studio | liens | +47 22 34 30 07, kundeservice@skarvjewelry.no, studio « Etter avtale » | — | Lus |
| Réseaux : Facebook, Instagram, YouTube, TikTok | liens | Non ouverts | — | Non testé |
| `/cart` | page | « Handlekurven din er tom » ; lien « FORTSETT SHOPPINGEN » | — | OK (V) |

## Options disponibles

- **Métal** : or jaune 14 k, or blanc 14 k, or rose 14 k, platine 950. Pas d'or 18 k annoncé sur la fiche lue (V).
- **Diamant** : synthétique seulement, 9 tailles de 0,5 à 3 ct, qualité D à F, VS1, taille « 3EX » ; certificat IGI sur la pierre principale ; ringsmåler (V).
- **Forme** : fixée par le modèle (ovale pour cette fiche) ; le catalogue décline ovale, rond, marquise, radiant, émeraude, coussin, poire, trilogies, halo caché, cigar band (noms des cartes de la liste, V).
- **Taille de doigt** : EU46 à EU62 (V). **Gravure** : gratuite, 4 polices.
- **Largeur de l'anneau** : standard 2,2 mm, plus fin sur demande (V, onglet Detaljer).
- **Vue** : galerie de 16 éléments, visionneuse 3D, AR.

## Prix, délais, retours, garanties

- **Prix** : affichés TTC, « inkluderer alle avgifter og tilleggskostnader » (V, `/policies/legal-notice`). Fiche : 18 500 kr à 89 900 kr selon le carat ; la hausse suit une grille (V). Pas de décomposition pierre / façon / marge.
- **Délai** : « 3-5 ukers levering » ; onglet : « skreddersys på bestilling, 3-5 uker » ; page sur-mesure : « vanligvis kun 3-5 uker » (V). Légalement : livraison au plus tard 60 jours après commande (V, CGV).
- **Retours (V, https://skarvjewelry.no/policies/legal-notice)** : les produits sont faits sur mesure donc hors droit de rétractation de 14 jours ; **30 jours de retour ou d'échange** pour un produit à partir de la commande, neuf et dans son emballage ; **ne s'applique pas** aux commandes spéciales (conception, pierre supplémentaire, modification du design) ni aux diamants de plus de 100 000 kr ; **frais de remise en état de 1 000 NOK** si gravé.
- **Garantie** : à vie contre défauts de matière ou de fabrication, mise à taille gratuite (V : « Livstidsgaranti », « Gratis størrelsesjustering »).
- **Livraison** : port standard gratuit, envoi par Posten / Bring (V, CGV). **Paiement** : Visa, Mastercard, American Express, Klarna (onglet) ; Apple Pay affiché en pied de page (V).
- **Certificats** : IGI pour la pierre principale ; page « Sertifikater » : « Alle våre diamanter over 0.5 carat » (V).

## Confiance et service

- **Rendez-vous** : « BOOK VEILEDNING » (veiledningstime gratuite) ; studio à Bergen sur rendez-vous (V).
- **Contact** : téléphone, e-mail ; FAQ de l'accueil mentionne chat, e-mail, téléphone (V, extrait de l'accueil).
- **Avis** : « 5 av 5 på Google » avec avis cités sur l'accueil, affichés par le vendeur (V, I pour leur exactitude).
- **Preuves de fabrication** : étapes décrites en texte : modèle 3D, retouches, fabrication, « contact pendant l'attente » ; aucune photo ni vidéo d'atelier relevée sur les pages lues (V pour le texte, absence non prouvée).
- **Libellé du synthétique** : « lab-diamanter », « labdyrkede diamanter », « laboratoriedyrkede diamanter » ; jamais « syntetisk » sur les pages lues (V).
- **Éducation** : guides « Diamantguide », « Lab-diamanter », « Sertifikater », « Størrelsesguide » (adresses vérifiées, 2 lues).

## Mesures

| Élément | Ordinateur | iPhone |
|---|---|---|
| Fiche : première image principale visible (> 300 px) | 1,0 s | 0,9 s |
| Visionneuse 3D : canvas présent dans l'iframe | 4,0 s | 4,4 s |
| Visionneuse 3D : rendu complet vu en capture | avant 12 s | non mesuré |

Un essai par appareil, mesuré depuis `goto` ; le module 3D est sous la description (haut de page : galerie d'images). Sans défilement jusqu'au module, la visionneuse restait à son écran de chargement après 6 s en Chromium automatisé (V).

## Points forts à retenir pour JR Diamond

1. **Modèle 3D de bague avec pastilles de métal, zoom et AR sur la fiche** : le même type de promesse « ce que vous voyez existe » est tenu par une visionneuse tierce (iJewel3D). Preuve : captures comparées des 4 métaux ; iframe `ijewel3d.com/drive/files/…/embedded`.
2. **Prix lisibles par option** : 18 500 kr → 89 900 kr selon le carat, +1 000 kr pour le platine, mis à jour sans rechargement. Preuve : lecture de « SALGSPRIS » après chaque choix.
3. **Adresse qui garde la variante** : `?variant=…` change avec chaque option (partage possible). Preuve : adresse relevée après chaque clic.
4. **Politique de retour qui assume le sur-mesure** : explique pourquoi la loi de rétractation ne s'applique pas, mais offre 30 jours quand même, et chiffre les exceptions (1 000 NOK de remise en état si gravé). Preuve : CGV.
5. **Délai annoncé avant achat et à l'intérieur des CGV (60 jours au plus)**. Preuve : fiche, onglet « Leveringstid », CGV.
6. **Gravure gratuite avec choix de police et mise à taille gratuite à vie**. Preuve : fiche et pied de fiche.
7. **Page « Design din egen »** : cinq étapes, modèle 3D « helt lik det endelige produktet » avant fabrication, contact pendant la fabrication. Preuve : `/pages/design-din-egen`.

## Défauts observés

- **Le modèle 3D ne suit pas les options de la fiche** (matériau, carat) ; le visiteur doit refaire le choix de métal dans la visionneuse. Preuve : source de l'iframe identique après sélection du platine.
- La visionneuse est **sous la description**, pas en haut ; la galerie du haut reste en photos.
- Le choix de métal ne change pas l'image principale (même fichier après trois choix, V).
- Aucun filtre dans la liste (métal, forme, prix) : seulement tri et densité (V pour les contrôles listés).
- Pas d'or 18 k ; pas de diamant naturel.
- Les carats intermédiaires (1,25, 1,75, 2,5) n'ont pas pu être comparés au tarif (non relevés).
- Tailles de doigt sans mention de stock ou de délai différent.

## Limites de l'audit

- **Ajout au panier non fait** (chemin interdit) ; récapitulatif, frais, délai du panier et moyens de paiement du paiement non vus ; seul le panier vide l'a été.
- Bouton AR, rotation, zoom de la visionneuse, galerie de 16 éléments, tri, « Velg alternativer » non actionnés ou non concluants.
- Formulaire de sur-mesure et chat non ouverts (règle) ; `/pages/custom-orders-1` non lue.
- Un seul modèle audité en profondeur (ovale « Tulip Solitaire ») ; les autres fiches non comparées.
- Les mesures de temps sont sur un essai, depuis un réseau américain.

## Sources

- https://skarvjewelry.no/products/oval-tulip-solitaire (contrôles, options, prix, onglets, visionneuse)
- https://skarvjewelry.no/collections/forlovelsesringer
- https://skarvjewelry.no/cart
- https://skarvjewelry.no/pages/design-din-egen
- https://skarvjewelry.no/pages/lab-diamonds
- https://skarvjewelry.no/pages/certificate
- https://skarvjewelry.no/policies/legal-notice
- https://skarvjewelry.no/robots.txt (Disallow `/cart/`)
- https://skarvjewelry.no/ (extrait d'accueil : FAQ, avis Google, prix « Fra 18 500 kr »)
