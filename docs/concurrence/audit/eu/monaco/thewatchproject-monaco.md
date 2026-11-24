# Audit : THEWATCHPROJECT Monaco

- **Site** : https://www.thewatchprojectmonaco.com/ (Wix) ; marchand de montres d'occasion de luxe qui vend aussi quelques bagues de fiançailles
- **Page de départ** : https://www.thewatchprojectmonaco.com/luxury-diamond-engagement-rings-monaco ; fiche type : https://www.thewatchprojectmonaco.com/product-page/2-00-carat-lab-grown-diamond-ring-platinum-accent-stones-igi-monaco
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366 × 900, en-US) et affichage iPhone 13 (Playwright)
- **Statut** : **complet** pour ce que le site propose (fiche, panier). Pas de configurateur à auditer.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options | Page |
|---|---|---|
| 1. Page « Engagement rings » | Carrousel de 5 bagues en stock (flèches « Previous / Next Product »), bouton « Add to Cart » sur la première, « Shop All », formulaire de demande de bague sur mesure, FAQ de 5 questions | `/luxury-diamond-engagement-rings-monaco` |
| 2. Fiche | Quantité (champ + boutons − et +), « Add to Cart », « Specifications », « Quick View » des autres bagues, FAQ (13 questions), bouton WhatsApp | `/product-page/2-00-carat-…-igi-monaco` |
| 3. Panier | Récapitulatif, code promo, note, « Checkout », « Secure Checkout » | `/cart-page` |
| Alliances | Page de présentation sans produit, formulaire de rendez-vous | `/luxury-wedding-rings-monaco` |

## Contrôles vérifiés

Relevé avec `controls.cjs` : 59 contrôles sur la page « Engagement rings » (ordinateur), 54 (iPhone) ; fiche : 13 boutons FAQ, 15 « Quick View ».

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Start, Shop, Sell your watch, Iced out, Wedding rings, Engagement rings, Contact | liens de menu | Pages du site (montres, rachat, alliances, bagues, contact) | — | Lus, répondent 200 (V) |
| English / Français / Italiano | sélecteur de langue | Présent sur la page et dans le panier | — | Non testé (changement de langue sans effet sur l'audit) |
| Shop All | bouton | Mène à `/category/all-products` | — | Non ouvert (catalogue de montres) |
| Previous Product / Next Product | boutons | Font défiler le carrousel des 5 bagues | — | Présents (V) ; défilement non chiffré |
| Add to Cart (page Engagement rings) | bouton | Ajoute la première bague ; mini-panier « Cart (1 item) … Estimated total €3,700.00 ; Taxes and shipping are calculated at checkout » avec « Checkout » et « View Cart » | 3 700 € | Fonctionne (V) |
| Add to Cart (fiche) | bouton | Même mini-panier, 1 article | 3 700 € | Fonctionne (V) |
| Quantité − / + | boutons | Cliquables dans le DOM mais sans réponse en 3 s ; le champ reste à 1 | — | Sans effet observé (V) |
| Enlarge (image) | bouton | Pas de visionneuse ouverte (0 boîte de dialogue) ; clic sans effet | — | Sans effet observé (V) |
| Specifications | bouton | Déplie la description de la fiche (texte déjà visible) | — | Fonctionne (V) |
| Quick View (×15) | boutons | Aperçu des autres bagues ; non ouvert | — | Non testé (équivalent de la fiche) |
| FAQ (13 questions, accordéons) | boutons | S'ouvrent ; réponses sur droits de douane UE, TVA, authenticité des montres, état, paiement, livraison, showroom ; **toutes concernent les montres d'occasion**, pas les bagues | — | Fonctionnent (V) |
| Copy link / Share on Facebook, X, LinkedIn | boutons | Partage de la question FAQ | — | Présents (V) |
| Formulaire « Send Request » (prénom, courriel, nom, téléphone) | formulaire | Demande de bague sur mesure ; case d'abonnement à la lettre | — | Non rempli (règle) |
| Newsletter (courriel + Subscribe) | formulaire | — | — | Non rempli (règle) |
| WhatsApp (flottant sur iPhone) | lien `wa.me/33643916733` | Message pré-rempli « Hello, I'm interested in your watches… » ; non ouvert | — | Présent (V), non ouvert (règle) |
| Téléphones +377 99 22 770 et +33 6 43 91 67 33 | liens `tel:` | Non appelés | — | Présents (V) |
| Checkout / Secure Checkout (panier) | boutons | **Non actionnés** (arrêt au panier) | — | Non testé (règle) |
| Enter a promo code / Add a note / Estimate Delivery (panier) | lien et champs | Présents ; non remplis | — | Non testé (règle) |
| Aucun filtre, comparaison, enregistrement, guide de tailles, financement, essayage | — | Absents de la page et de la fiche | — | Absents (V) |

## Options disponibles

- **Métal** : platine 950 (deux bagues le précisent) ; pas de choix ; une bague sans métal affiché dans le titre (V).
- **Pierres** : diamants « lab grown », rond brillant (2 ct) et ovale (3 ct et 5,01 ct), certificat **IGI** avec numéro (par exemple LG678535121), couleur F, pureté VS1, taille Ideal, poli et symétrie Excellent (V sur la fiche vue).
- **Choix** : aucun (quantité seulement). Pas de taille de doigt, pas de gravure en ligne (V).
- **Vues** : photos fixes, aucune vidéo ni 360° ni 3D (V).
- **Sur mesure** : formulaire de demande « from your own idea, photo, or video », diamant naturel ou synthétique, or ou platine, d'après le texte de la page (V). Délai annoncé : 2 à 6 semaines (V, FAQ de la page).
- **Stock** : 5 bagues, de 3 650 € à 12 000 € : 2 ct (3 650 € et 3 700 €), 3 ct (4 700 € et 4 900 €), 5,01 ct (12 000 €) (V).

## Prix, délais, retours, garanties

- **Prix** : affichés TTC en euros, un seul prix par bague, sans décomposition (V). Le mini-panier annonce « Taxes and shipping are calculated at checkout » ; le panier affiche sous-total, « Delivery -- » et total égal au sous-total (V).
- **Délai** : bagues en stock « disponibles immédiatement » ; sur mesure 2 à 6 semaines (V).
- **Livraison** : texte de fiche commun avec les montres : livraison assurée gratuite dans l'UE, retrait au showroom (V). Droits de douane : aucun pour l'UE, Monaco faisant partie de l'union douanière (V, FAQ).
- **Retours** : 14 jours après réception, bien non porté, avec contact préalable ; **le sur mesure, les bijoux personnalisés sont exclus** ; tout acompte est non remboursable et définitif ; réservation d'un article valable 4 semaines (V, `/refund-policy` et `/terms-conditions`). Texte écrit pour les montres : son application à une bague en stock n'est pas précisée (I).
- **Garantie** : montres d'occasion « sans garantie constructeur sauf mention écrite » (V) ; rien sur les bagues.
- **Paiement** : virement bancaire ; PayPal ou carte « soumis à approbation préalable » ; pièce d'identité exigée (V, FAQ).

## Confiance et service

- Boutique physique (23 boulevard Princesse-Charlotte, lundi au vendredi) ; WhatsApp et téléphone, réponse annoncée « en quelques minutes » (V).
- Preuves d'authenticité : contrôle par un horloger pour les montres (V) ; pour les bagues, seul le **numéro du certificat IGI** figure sur la fiche (V).
- Aucun avis client affiché sur les pages lues ; aucune photo ni vidéo de fabrication ; aucun suivi de commande (V). Langues : anglais, français, italien ; devise : euro (V).

## Points forts à retenir pour JR Diamond

1. **Certificat IGI cité avec son numéro, couleur, pureté, taille, poli, symétrie sur la fiche d'un diamant synthétique** : le niveau de détail que JR Diamond doit atteindre dès 0,50 ct. Preuve : fiche `…2-00-carat…igi-monaco`.
2. **Acompte et sur mesure dits sans détour** (« binding and final », exclusion du retour) : un modèle de clarté juridique, mais trop dur pour la promesse de JR Diamond (à nuancer avec l'avocat). Preuve : `/terms-conditions`, article 6.
3. **Panier en un clic depuis la page de catégorie** : la première bague s'ajoute sans passer par la fiche. Preuve : mini-panier observé.
4. **Demande de sur mesure à partir d'une idée, d'une photo ou d'une vidéo** : accepte la photo d'inspiration comme point de départ. Preuve : texte de la page « Engagement rings ».

## Défauts observés

- **Textes de fiche, FAQ et politique de retour écrits pour des montres d'occasion** : « Do you have a physical showroom? », « watch authentic », « unworn watch » (V). Une cliente qui cherche une bague trouve des réponses hors sujet.
- Fiche : « Visit Us… grail watch », « Contact us… about our watches », message WhatsApp pré-rempli « watches » (V).
- Fonctions affichées mais inertes en clic direct : « Enlarge », quantité − / + (V).
- Pas de choix de taille de doigt avant l'ajout au panier (V) : un bijou à taille unique ne se commande pas ainsi.
- Livraison « -- » dans le panier tant qu'on ne va pas au paiement (V).
- Paiement par carte ou PayPal « soumis à approbation » : le seul moyen garanti est le virement (V).
- Image principale lente : 2,0 s sur ordinateur (V).

## Limites de l'audit

- Il n'y a ni configurateur ni options à parcourir : l'audit porte sur la page « Engagement rings », une fiche, le mini-panier et la page panier (arrêt avant « Checkout »).
- Une bague a été ajoutée au panier (session privée, sans compte, vidée à la fermeture du navigateur) ; la page « Wedding rings » ne contient aucun produit, seulement un formulaire non rempli.
- Mesures de temps : image principale visible en **2,02 s** sur ordinateur et **1,82 s** en affichage iPhone (une mesure chacune, V).
- Langues italienne et française non lues ; réponses de la FAQ lues pour 6 questions sur 13 (les autres concernent aussi les montres) ; page « Shop All » et catalogue de montres non ouverts.
- Statut juridique de « Lab Grown » à Monaco non établi (S).

## Sources

- https://www.thewatchprojectmonaco.com/luxury-diamond-engagement-rings-monaco
- https://www.thewatchprojectmonaco.com/product-page/2-00-carat-lab-grown-diamond-ring-platinum-accent-stones-igi-monaco
- https://www.thewatchprojectmonaco.com/cart-page
- https://www.thewatchprojectmonaco.com/refund-policy · https://www.thewatchprojectmonaco.com/terms-conditions
- https://www.thewatchprojectmonaco.com/luxury-wedding-rings-monaco · https://www.thewatchprojectmonaco.com/robots.txt (lu le 15/11/2026)
