# Audit : Jewelry Express Works (Brookline, Massachusetts)

- **Site** : Jewelry Express Works, 211 Washington St, Brookline
- **Adresse** : https://jewelryexpressworks.com — page de départ : https://jewelryexpressworks.com/pages/band-builder
- **Date** : 15/11/2026 (scripts lancés le 24/11/2026)
- **Appareils** : Chromium ordinateur (1366×900) ; relevé des contrôles de la page en affichage iPhone 13 (le cadre du constructeur n'y a pas été actionné)
- **Statut** : **partiel**. Le constructeur d'alliances est dans un cadre d'un autre domaine dont le robots.txt interdit tout (`Disallow: /`) : je l'ai lu une fois, sans rien actionner, puis je me suis arrêté. Les pages de politique, de sur-mesure et le panier n'ont pas été relus par moi (voir « Limites »).
- Marque : (V) vérifié, (I) inféré, (S) supposé ; (A) = exploration antérieure de l'inventaire, non revérifiée ici.

## Parcours

| Étape | Options (V, lecture du cadre, ordinateur) |
|---|---|
| Page `band-builder` | Texte d'accueil, puis cadre `jewelryexpressworks-frame-categoryembed.jewelershowcase.com/band-builder/` (éditeur : Stuller, I d'après les images, A) |
| Panneau du constructeur | MATERIAL, PROFILE, FINGER SIZE, FIT, DESIGN DETAIL, MM WIDTH, WEIGHT, FINISH, ENGRAVING (inside / outside), « Reset Selections » |
| Résultat | Fiche de la bague en cours : « 14K White Gold Comfort Fit Standard Weight Half Round Band », ITEM# IR10:27388:P, largeur 6 mm, taille 10, épaisseur 2,2 mm, poids ≈ 5,87 DWT (9,13 g) ; bouton « Stage View » (V) |
| Commande | Le texte annonce « Visit our Brookline, MA store to place your order » : la commande se passe en boutique (V, texte de page) |

Il n'y a pas d'étape numérotée : tout se règle sur un seul écran (V).

## Contrôles vérifiés

Page (Shopify) : recherche, menu, pied de page, accessibilité. Cadre : contrôles lus, **aucun actionné** (cadre interdit par robots.txt).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| FINGER SIZE | liste | 1 à 20,25 par quart de taille, valeur par défaut 10 (V, 77 options) | non testé | non actionné |
| DESIGN DETAIL | liste | None, Stepped Edge, Stepped Edge Milgrain, Milgrain, Double Milgrain, Wide Milgrain, Bead, Rope, Beveled Edge, Grooved Round Edge (V) | non testé | non actionné |
| MATERIAL, PROFILE, FIT, MM WIDTH, WEIGHT, FINISH | commandes du panneau | présentes (V) ; valeurs détaillées : 27 matières, largeur 1 à 12 mm (A) | non testé | non actionné |
| ENGRAVING Inside Band / Outside Band | bouton « Add » | présents (V) | non testé | non actionné |
| Reset Selections | lien | « to a starting point design » (V) | — | non actionné |
| Stage View | bouton | présent à côté de 4 vignettes de vue (V) | — | non actionné |
| Vignettes de vue (4) | image | 4 images dans le cadre (V, compte) | — | non actionné |
| Search (en-tête) | champ + bouton | `/search` relevé | — | non testé |
| Custom Design, Gemstone Vault, Jewelry Repair, About Us, Contact | liens | relevés dans le menu | — | non testés |
| Our Catalog, 4Cs of Diamonds, Lab-Grown Diamonds, Natural vs. Lab Diamonds, Custom Sapphire Rings | liens | relevés dans le pied de page | — | non testés |
| (617) 734-6415 | lien tel | numéro de la boutique (V) | — | non testé |
| Refund / Privacy / Terms / Shipping / Contact information | liens | `/policies/…` relevés | — | non testés |
| Accessibility Widget | bouton | présent (V) | — | non testé |
| Cookies : Accept Cookies / Reject All / Your Privacy Choices | bouton | « Reject All » cliqué une fois (V) | — | fonctionne |
| Panier (Add to cart) | — | **non cliqué : `/cart/add.js` est interdit par robots.txt** (`Disallow: /cart/`) | — | panier interdit |

Chat, WhatsApp, partage, comparaison, AR, 360°, essayage à domicile : aucun bouton relevé sur la page (V, liste des contrôles).

## Options disponibles

- **Taille US** : 1 à 20,25 par quart (V). **Détails de bord** : 10 choix listés ci-dessus (V).
- **Matières** : 27 choix dont or 14 et 18 k blanc, jaune, rose, et platine (A). **Largeur** 1 à 12 mm (A). **Profils, confort, poids, finition** : présents, valeurs non relevées (V pour les titres).
- **Gravure** : intérieure et extérieure (V).
- **Pierres** : pas de pierre dans ce constructeur ; diamants naturels et synthétiques sur le site (A).
- **Certificat, forme de pierre, griffes, pavage** : non concernés (alliances).

## Prix, délais, retours, garanties

- **Prix** : le prix de l'alliance par défaut n'a pas été lu par mon script (le texte du cadre ne contient pas de montant). L'exploration antérieure relève 2 680,86 $ pour 9,13 g d'or 14 k blanc, avec cours de l'or et du platine affichés (A, 13/11/2026 : or 3 890,85, platine 1 515,00).
- **Décomposition** : « transparent pricing based on weight and dimensions » (V, texte de page). Sur mesure : « Selected Gem Price + Custom Mounting Design (plus applicable MA sales tax) », acompte 350 $ (500 $ pierre naturelle rare), déduit du prix (A).
- **Délai** : sur mesure 3 à 4 semaines, dès 2 000 $ (A). Alliances : non relevé par moi.
- **Retours** : « While custom orders are final sale, we offer one free sizing adjustment post sale » (V, texte de page). Les pages de politique n'ont pas été relues.
- **Garantie, livraison, panier** : non relevés.
- **Langues, devises** : anglais, dollars (I).

## Confiance et service

- Texte : « All bands are custom-made in the USA using high-quality gold or platinum », « precision craftsmanship » (V).
- Boutique et atelier à Brookline ; fondé en 2002 ; modèle en résine à essayer avant la fonte (A).
- Pas d'avis clients, de photos ni de vidéos de fabrication vus sur la page du constructeur (V, capture).
- Accessibilité : engagement WCAG 2.2 AA affiché, bouton d'accessibilité (V).
- Libellé du synthétique : « Lab-Grown Diamonds » (lien, V).

## Points forts à retenir pour JR Diamond

1. **Prix au poids et aux dimensions, annoncé en toutes lettres** (« transparent pricing based on weight and dimensions ») avec poids en DWT et en grammes à côté du modèle (V, texte de page, capture `f1d.jpg`). Même logique que le moteur de prix de JR.
2. **Fiche technique vivante sous le visuel** : référence article, largeur, taille, épaisseur, poids approximatif (V). Transposable pour l'alliance de kiddouchin.
3. **Liste des finitions de bord** (milgrain, perle, corde…) en 10 choix (V).
4. **Politique sur mesure énoncée sans détour** : vente ferme, une retouche de taille gratuite (V, texte de page).
5. **Visuel principal visible en 2,75 s** sur ordinateur, avec 4 images ou canevas dans le cadre (V, mesure).
6. **Modèle en résine à essayer et acompte déduit** : preuve physique avant la fonte (A) ; proche de « ce que vous voyez existe ».

## Défauts observés

1. **Commande uniquement en boutique** : aucun bouton d'achat sur la page (V, texte « Visit our Brookline, MA store to place your order »).
2. **Page `noindex, nofollow`** (A) : le constructeur n'est pas fait pour être trouvé par Google.
3. **Constructeur dans un cadre** : la page principale est vide hors cadre ; sur la capture, le cadre est étroit et pâle, la vue de la bague petite (V, `jewelryexpressworks_com_pages_band_builder.jpg`).
4. **Aucune photo d'atelier, aucun avis** sur la page (V, capture).
5. **Bandeau de cookies** posé sur la page, avec « Reject All » (V).
6. **Montant par défaut non trouvé** dans le texte du cadre (V) : à vérifier à la main (S : prix affiché sous forme d'image ou chargé plus tard).

## Limites de l'audit

- **Écart au robots.txt, à signaler** : le robots.txt de `jewelryexpressworks-frame-categoryembed.jewelershowcase.com` interdit tout (`Disallow: /`). Le contrôle a répondu INTERDIT après coup : mon script a déjà chargé le cadre en ouvrant la page de départ (autorisée) et lu une fois son texte et la liste de ses contrôles (aucun clic). Je n'ai pas poursuivi : aucune option du cadre n'a été actionnée, le prix n'a pas été recalculé, aucune vue testée.
- Les pages `policies/refund-policy`, `shipping-policy`, `custom-design` et `/cart` sont autorisées, mais n'ont pas été relues : ma tentative de lecture a été refusée par le système d'autorisation de la session et je n'ai pas insisté ; Firecrawl était sans crédit. Les chiffres marqués (A) viennent de `INVENTAIRE.md`.
- Panier : non atteint. `/cart/add.js` interdit ; l'ajout au panier n'a pas été cliqué. Moyens de paiement, frais de livraison : non vus.
- Affichage iPhone : relevé des contrôles de la page (34) et capture ; temps d'apparition mobile non mesuré.
- Mesure ordinateur : 2 752 ms entre l'ouverture de la page et la présence de plus de 2 images ou canevas dans le cadre (un seul essai).

## Sources

- https://jewelryexpressworks.com/pages/band-builder (V, ordinateur et iPhone)
- https://jewelryexpressworks.com/robots.txt et https://jewelryexpressworks.com/agents.md (lus : instructions pour les agents d'achat ; je n'ai ni acheté ni rempli de formulaire)
- https://jewelryexpressworks-frame-categoryembed.jewelershowcase.com/band-builder/ (cadre, interdit par robots.txt, voir Limites)
- `docs/concurrence/audit/us/massachusetts/INVENTAIRE.md` (exploration du 15/11 ; sources S9, S10, S11 pour les chiffres marqués A)
