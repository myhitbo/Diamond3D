# Audit Marilisi Jewelry House (Tbilissi, Géorgie)

- **Site** : https://marilisi.ge/ (Shopify). Page de départ auditée : https://marilisi.ge/pages/engagement-rings-individual-order
- **Date** : 15/11/2026 (contrôles réalisés en session le 24/11/2026)
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (Chromium émulé)
- **Statut** : **partiel**. Parcours de consultation complet ; l'ajout au panier de Marilisi n'a pas été actionné (voir « Limites »).
- Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Page « Engagement & Wedding Rings » | Deux onglets : Engagement rings (12 modèles), Wedding rings (4 modèles) ; bouton « GET STARTED » = guide PDF ; formulaire « Design one-of-a-kind » |
| 2. Fiche produit | Taille de doigt (liste 15 à 22 par demi-point), quantité, « Add to cart », « Buy it now », galerie (3 images), onglets Description, Information, Details, Share |
| 3. Panier | Page /cart (lue vide uniquement) |
| 4. Sur mesure | Formulaire nom, e-mail, message, protégé par hCaptcha ; guides PDF en anglais et en géorgien |

Aucun choix de métal, de pierre, de forme, de carat ni de gravure : chaque modèle est une pièce fixe [V : fiche /products/engagement-ring-with-diamonds]. Pas de configurateur, ni 3D, ni 360°, ni vidéo produit [V : 1 vidéo détectée dans le DOM de la fiche, non lancée ; 3 images].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Onglet ENGAGEMENT RINGS | onglet | Affiche 12 bagues avec « From » + prix | de 3 660 à 7 970 ₾ | OK [V] |
| Onglet WEDDING RINGS | onglet | Affiche 4 alliances (anneau à trois diamants, « spinner », avec diamants, un diamant) | de 2 895 à 7 700 ₾ | OK [V] |
| GET STARTED / ENGLISH GUIDE / GEORGIAN GUIDE | liens PDF | Ouvrent `Marlisi_Engagement_Rings_Guide_ENG.pdf` et `..._GE.pdf` (cdn.shopify.com) | — | Liens présents [V], PDF non ouverts (hors page) |
| Lien de chaque modèle (12 + 4) | lien | Mène à `/products/<nom>` | « From » | OK [V : 1 fiche ouverte, les autres non] |
| Formulaire sur mesure (nom, e-mail, message, SEND) | formulaire | Non envoyé | — | Non testé : règle « aucun formulaire » |
| Join (newsletter) | formulaire | Non envoyé | — | Non testé : règle « aucun formulaire » |
| Fenêtre « No thanks » | bouton | Ferme l'invitation à la newsletter qui recouvre la page | — | OK [V] |
| CONTACT, TERMS & CONDITIONS, PAYMENT METHODS | accordéons du pied de page | S'ouvrent ; adresse, téléphone/WhatsApp, horaires, 4 politiques, logos de paiement | — | OK [V] |
| Lien « International store » | lien | Mène à https://marilisi.com | — | Non suivi [V : présent] |
| Fiche : liste « RING SIZE » (15 à 22, 15 valeurs) | liste | Change l'adresse (`?variant=…`) | **15 à 17 : 3 660 ₾ ; 19,5 et 22 : 4 026 ₾ (+10 %)** | OK [V : 4 tailles essayées : 17, 19,5, 22 et 15] |
| Quantité − / + | boutons | « + » passe la quantité à 2 sans message de stock malgré « ONLY 1 LEFT IN STOCK » | — | OK, sans contrôle de stock visible [V] |
| Message « ONLY 1 LEFT IN STOCK » | texte | Identique pour les tailles essayées | — | [V] |
| Galerie Previous / Next, 3 miniatures | boutons | Image du bijou seul, puis deux photos portées (main) | — | Actionnés [V], effet visible sur la miniature, 3 images |
| Zoom | bouton | Ouvre un agrandissement | — | OK [V] |
| DESCRIPTION, INFORMATION, DETAILS | accordéons | Ouvrent : « White Gold - 585 », « 12 brilliant-cut diamonds totaling 0.16 carats », poids d'or 2 g (±10 % selon la taille), « Made and hallmarked in Georgia », référence REF 150190R | — | OK [V] |
| Read more (description) | lien | Déplie le texte | — | OK [V] |
| SHARE | bouton | Clic exécuté, aucun lien de partage détecté dans le DOM | — | Sans effet visible [V] |
| EXPLORE OUR CRAFTSMANSHIP | lien | /pages/our-craftsmanship : texte sur l'atelier (étapes « sketch to wax », fonte, établi), photos | — | OK [V] |
| QUICK ADD (« Vous aimerez aussi ») | boutons | Non actionnés | — | Non testé : action d'achat |
| ADD TO CART • GEL 3 660, BUY IT NOW | boutons | Non actionnés | — | Non testé : voir « Limites » |
| Icône Cart (/cart) | lien | Page « Your cart is empty » + « Continue browsing » | — | OK [V] |
| Menu (Open menu) | bouton | Présent sur mobile et ordinateur | — | Non exploré |

## Options disponibles

- **Taille de doigt** : 15 ; 15,5 ; 16 ; 16,5 ; 17 ; 17,5 ; 18 ; 18,5 ; 19 ; 19,5 ; 20 ; 20,5 ; 21 ; 21,5 ; 22 (échelle de circonférence/diamètre non précisée) [V].
- **Métal** : fixé par modèle (ici or blanc 585 = 14 carats) ; le nom du modèle précise « Rose Gold », « White Gold » [V].
- **Pierres** : fixées par modèle (diamants, saphir bleu, émeraude) ; pas de choix de carat, de forme, de couleur ni de pureté [V]. Origine naturel/synthétique : non indiquée sur la fiche lue [V : texte de la fiche].
- **Gravure** : aucune option [V]. **Vues** : photos seulement [V].
- **Service** : formulaire sur mesure, boutique à Tbilissi (Irakli Abashidze 43), WhatsApp +995 595 11 55 04, e-mail, guide PDF, magasin international [V : pied de page].

## Prix, délais, retours, garanties

- **Prix** : un prix « From » par modèle et par page ; la fiche affiche un prix unique par taille, TTC non précisé [V]. Aucune décomposition (métal, façon, pierres) ; seul le poids d'or (2 g) et le poids des diamants (0,16 ct au total) sont donnés [V].
- **Variation par taille** : +10 % à partir d'une taille entre 17 et 19,5 (mesures : 3 660 ₾ jusqu'à la taille 17, 4 026 ₾ à 19,5 et 22) [V].
- **Livraison** [V : /policies/shipping-policy] : transporteur de confiance, par exemple FedEx ; frais ajoutés automatiquement à la validation ; délais Tbilissi 1 à 2 jours, Batumi 2 à 3, régions 3 à 5. Commandes traitées selon l'horaire de Géorgie (GMT+4). Pas de délai de fabrication annoncé : la fiche dit « une courte attente » (« well worth the short wait ») sans chiffre [V].
- **Retours** [V : /policies/refund-policy, texte en géorgien et en anglais] : **aucun retour ni échange des produits vendus**, sauf défaut de fabrication non décelable à l'achat, à signaler **dans les 2 semaines** ; produit accompagné de l'emballage d'origine et de la preuve d'achat ; **expertise obligatoire** par un expert indépendant choisi avec l'accord de Marilisi ; remboursement sous 10 jours ouvrés (texte de la demande) ou 2 semaines (texte de l'expertise), deux délais différents dans le même document. Aucune exception « sur mesure » mentionnée (tout est exclu).
- **Garanties** : non annoncée sur les pages lues [V : fiche et politiques lues].
- **Moyens de paiement** : logos Visa, Mastercard, Apple Pay, Google Pay, PayPal dans le pied de page [V : extrait de recherche, pied de page ; panier non atteint]. Paiement échelonné : bandeau géorgien « To take advantage of installment payments, please visit our boutique » (paiement échelonné en boutique) [V : capture de la fiche].
- **Devise** : lari (GEL) [V].

## Confiance et service

- Contact : téléphone/WhatsApp, e-mail, horaires 11:00 à 19:00 tous les jours [V].
- Emballage de marque inclus (boîte ou pochon et sac cadeau) [V].
- Poinçon : « hallmarked in Georgia » sur la fiche [V].
- Certificats : aucun GIA/IGI mentionné sur la fiche lue [V].
- Avis clients : aucun affiché sur la fiche [V].
- Preuves de fabrication : page « Our craftsmanship » (texte et photos d'atelier, artisans anciens menuisiers, sculpteurs, peintres), pas de suivi de commande ni de vidéo de fabrication d'une commande [V].
- Langues : anglais et géorgien (guides PDF dans les deux) [V].

## Points forts à retenir pour JR Diamond

1. **Page « guides » téléchargeables** (PDF en 2 langues) en tête de la page fiançailles : rassure sur le processus avant de contacter l'atelier. Preuve : liens GET STARTED, ENGLISH GUIDE, GEORGIAN GUIDE (cdn.shopify.com) [V].
2. **Détails de fabrication sur chaque fiche** : alliage (585), nombre et poids des diamants, poids d'or avec tolérance ±10 %, poinçon, référence. Preuve : accordéon DETAILS de la fiche [V]. Pratique proche de la promesse « prix expliqué ».
3. **Photos du bijou porté** à côté du rendu produit (2 photos sur 3). Preuve : miniatures de la galerie [V].
4. **Politique de livraison chiffrée par ville** (1 à 2, 2 à 3, 3 à 5 jours) lisible en deux langues. Preuve : /policies/shipping-policy [V].
5. **Prix « From » par taille** exposé : le prix s'adapte à la taille de doigt sans fenêtre contextuelle. Preuve : 3 660 ₾ puis 4 026 ₾ [V].

## Défauts observés

- **Retour quasi impossible** (défaut de fabrication seulement, 2 semaines, expertise obligatoire) et **deux délais de remboursement contradictoires** (10 jours ouvrés, 2 semaines) [V].
- **Prix par taille non expliqué** : +10 % sans libellé [V].
- **Aucun choix de pierre, de carat ni de métal** : pas de configurateur [V].
- **Bouton SHARE sans effet** détecté et pas de lien de partage de la configuration [V].
- **Stock « Only 1 left »** mais quantité 2 acceptée sans alerte [V].
- **Délai de fabrication non chiffré** malgré le texte « short wait » [V].
- **Fenêtre newsletter** qui recouvre la page et bloque les clics tant qu'on ne ferme pas « No thanks » [V : clics refusés par le navigateur automatisé tant que la fenêtre est ouverte].
- **Aucun avis client, aucun certificat** mentionné sur la fiche [V].

## Limites de l'audit

- **Panier non rempli** : `robots.txt` de Marilisi autorise tout, mais son en-tête demande aux agents d'utiliser les interfaces UCP/WebMCP pour les actions d'achat « sans contournement scripté » et renvoie à `agents.md`, que le site a protégé par un défi Cloudflare lors de la requête curl (non contourné). Par prudence, ni « Add to cart », ni « Buy it now », ni « Quick add » n'ont été actionnés. Le panier n'a été lu que vide : récapitulatif, frais, délai et moyens de paiement du panier **non observés**.
- Un seul modèle de bague de fiançailles ouvert en fiche (`engagement-ring-with-diamonds`) ; les 11 autres et les 4 alliances ne sont pas ouverts : variation de prix par taille non vérifiée sur eux.
- Mesure du visuel principal : première image de produit supérieure à 300 px visible en **807 ms** (ordinateur) et **495 ms** (iPhone émulé) depuis l'envoi de la requête, un seul essai chacun ; sans mesure de réseau contrôlée [V].
- Page de départ : domContentLoaded en 751 ms (ordinateur), 689 ms (iPhone) ; aucun défilement horizontal en affichage iPhone [V].
- Formulaires sur mesure et newsletter non remplis. PDF des guides non ouverts. Menu général non parcouru. Boutique internationale marilisi.com non visitée.
- Contrôles listés par `controls.cjs` : 47 sur ordinateur, 43 en iPhone ; les 12 liens de modèles, 4 d'alliances et le pied de page sont comptés dans le tableau.

## Sources

- https://marilisi.ge/pages/engagement-rings-individual-order (ordinateur et iPhone, 24/11/2026)
- https://marilisi.ge/products/engagement-ring-with-diamonds
- https://marilisi.ge/policies/shipping-policy , https://marilisi.ge/policies/refund-policy
- https://marilisi.ge/cart , https://marilisi.ge/pages/our-craftsmanship
- https://marilisi.ge/robots.txt
- https://marilisi.ge/ (extrait de recherche pour les logos de paiement du pied de page)
