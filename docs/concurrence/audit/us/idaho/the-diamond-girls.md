# The Diamond Girls (Boise, Idaho)

- **Site** : The Diamond Girls (Estaci Diamond LLC), 1101 W Grove St, Suite 101, Boise
- **Adresse** : https://thediamondgirls.com/ ; page de départ https://thediamondgirls.com/ring-builder
- **Date** : 15/11/2026 (mesures faites pendant la session ; les pages lues portent des dates de mise à jour du 10 et du 17/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur 3D (Pencil Design) n'a pas été ouvert : son domaine `app.pencildesign.co` répond INCONNU au contrôle robots.txt (le fichier renvoie une page HTML), donc traité comme bloqué. Le reste du site (robots.txt `Allow: /`) a été audité jusqu'au tiroir du panier.
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| 1. `/ring-builder` | [V] Page « 3D Ring Builder », phrase « Prefer to talk it through? Book an appointment or call 208-853-6670 ». Zone centrale de 800 px de haut vide dans notre navigateur (iframe non chargée : accord sur les cookies fonctionnels requis, non donné ; l'éditeur est inconnu des robots) |
| 2. Outil Pencil Design | [I] d'après l'inventaire : 54 styles, or 14/18 k, 10 formes, 1,00 à 5,00 ct, naturel / synthétique, rubis/saphir/émeraude, pavé, « Book a Viewing » final, sans prix. **Non revérifié ici** |
| 3. Catalogue `/natural-diamond-engagement` | [V] 7 bagues finies, filtre par texte absent, « ADD TO SELECTION » |
| 4. Fiche produit | [V] 3 photos, tableau de prix, « ADD TO SELECTION » |
| 5. Tiroir « Your Selection » | [V] quantité, retrait, « PROCEED TO CHECKOUT » (non cliqué) |
| Sur mesure sans outil | [V] `/custom-design` : 6 étapes (dessin, CAO, contrôle 1, cire, production, contrôle 2) ; boutons « Try the 3D ring builder » et « Begin your custom design » (`/concierge`) |

## Contrôles vérifiés

Mesure du visuel principal d'une fiche : image visible en 1,1 à 1,8 s (ordinateur, 1,12 s et 1,76 s sur deux essais) et 1,18 s (iPhone). Visuel 3D : non mesurable.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| 3D RING BUILDER (menu) | lien `/ring-builder` | [V] ouvre la page avec iframe vide | aucun | partiel (outil non chargé) |
| Book an appointment | lien `/concierge` | [V] adresse relevée, formulaire non ouvert | n/a | non testé (formulaire) |
| FINE JEWELRY, COLLECTIONS, BRIDAL, GIFTS, SALE | boutons de menu | [V] présents ; sous-menus non déployés | n/a | non testé en détail |
| Search | bouton | [V] présent, non utilisé | n/a | non testé |
| MY DG | bouton | [V] compte, non ouvert (aucun compte créé) | n/a | non testé |
| Saved pieces, 0 items | bouton (cœur) | [V] présent ; non actionné | n/a | non testé |
| Cart, 0 items | bouton | [V] ouvre le tiroir « Your Selection » ; `/cart` répond 404 | n/a | OK |
| DESIGN IT IN 3D | lien | [V] mène à `/ring-builder` | n/a | OK |
| VIEW THE FULL SHOP | lien | [V] `/the-collection`, non ouvert | n/a | non testé |
| Vignettes photo 1 à 3 | boutons | [V] changent la photo principale | aucun | OK |
| View as table | bouton | [V] affiche tableau Suggested retail 4 767 $ / prix 3 178 $ / économie 1 589 $ (33 %) | affiche la décomposition | OK |
| ADD TO SELECTION | bouton | [V] bulle « added to your selection », compteur panier = 1 | 3 178 $ | OK |
| Quantité − / + / Remove | boutons du tiroir | [V] présents | 3 178 $ | non actionnés |
| PROCEED TO CHECKOUT | bouton | [V] présent ; Shopify, non cliqué (règle : pas au-delà du panier) | n/a | non testé |
| Cookies : Functional / Analytics / Marketing, SAVE CHOICES, REJECT ALL, ACCEPT ALL | interrupteurs, boutons | [V] bandeau affiché ; REJECT ALL cliqué dans un essai ; les autres non (accepter ouvrirait l'iframe tierce) | n/a | partiel |
| FAQ « Natural diamonds, answered » (6 questions) | accordéon | [V] présent sur `/natural-diamond-engagement`, non déplié | n/a | non testé |
| Instagram, Facebook, Orders & Returns, Privacy, Terms, Refund Policy, Accessibility | liens | [V] adresses relevées ; Terms et Refund Policy lues | n/a | OK |
| Text us (bulle) | chat | [V] présent ; conversation non ouverte | n/a | non testé |
| Filtres forme, carat, métal, couleur, pureté, certificat, taille de doigt, gravure, vues 360°/AR/main | — | aucun contrôle de ce type hors de l'iframe fermée | n/a | non testé (outil bloqué) |

## Options disponibles

- [V] Fiche : métal fixé par la pièce (14 k jaune), pierre naturelle, taille de doigt fixe (6, « sizeable : yes »), fiche technique (couleur moyenne F, pureté moyenne SI1, 15 pierres, « Prong set »).
- [I] Constructeur : or 14/18 k jaune, rose, blanc ; pas de platine ; 10 formes ; 1,00 à 5,00 ct ; naturel ou « Lab Grown Diamond » (voir inventaire Idaho, non revérifié).
- Pas de comparateur, essayage, AR, 360° vus sur le site lu.

## Prix, délais, retours, garanties

- [V] Prix décomposé : « Suggested retail price » 4 767 $, prix Diamond Girls 3 178 $, économie 1 589 $ (33 %) ; bagues voisines : 3 400 $, 5 000 $, 62 000 $ (barrés), 11 920 $ (extrait de la page `/natural-diamond-engagement`, lu sur la capture). Le « suggested retail » est un prix de référence déclaré par le vendeur [I].
- [V] Délai fiche : « Ships in 2–3 business days » (pièce en stock), livraison « Complimentary, fully insured », signature requise. Le site affirme « Sizing and finishing included ».
- [V] Panier : « Taxes and shipping calculated at checkout » ; moyens de paiement non affichés avant le paiement (Shopify).
- [V] Retours (`/refund-policy`, date 17/11/2026) : démarches par compte (« Request Return ») ; les conditions détaillées renvoient aux Terms.
- [V] Terms (10/11/2026) : sections retours, expédition, délais de sur-mesure, acompte, garantie, réparation **encore des champs vides entre crochets** (`[RETURN_POLICY]`, `[DEPOSIT_TERMS]`, `[TIMELINE_TERMS]`, `[WARRANTY_TERMS]`…), ainsi que « [ATTORNEY TO DRAFT] ». Les conditions de retour et de garantie ne sont donc pas publiées.
- [V] Mention de soin : « Complimentary lifetime care included on every purchase » (fiche).
- [V] Terms § 4 : chaque annonce indique naturel ou synthétique (FTC Jewelry Guides, 16 CFR 23) ; rapports GIA/IGI ; « 3D ring-builder renders are approximations, not exact representations ».
- Libellé du synthétique : « Lab Grown » [V, fiche et Terms].

## Confiance et service

- [V] Téléphone 208-853-6670, e-mail, horaires (lun–ven 10–17 h, sam 10–15 h), rendez-vous (`/concierge`), bulle « Text us ».
- [V] Preuve de fabrication : `/custom-design` décrit CAO « photorealistic rendering from all angles », contrôle de qualité par un propriétaire, cire essayable « in some cases » ; aucune photo ou vidéo d'atelier datée vue sur cette page.
- [V] Une galerie « A closer look at the work » sur `/natural-diamond-engagement`.
- Langues : anglais ; devise : dollar américain. Avis clients : aucun module d'avis vu sur les pages lues.
- Suivi de commande : [V] lien « Orders & Returns » vers le compte Shopify, non ouvert.

## Points forts à retenir pour JR Diamond

1. **Prix expliqué** : tableau « View as table » comparant prix de référence, prix du vendeur et économie en dollars et en pourcentage [V, `/product/14k-yellow-gold-princess-cut-diamond-engagement-ring`]. Un équivalent détaillé par poste (or, façon, pierre) irait plus loin.
2. **Délai et livraison dans la fiche** : « Ships in 2–3 business days », livraison assurée offerte, signature [V, même fiche].
3. **Processus de sur-mesure en 6 étapes avec deux contrôles de qualité nommés** [V, `/custom-design`].
4. **Fiche technique documentée** (SKU, 15 pierres, couleur F, pureté SI1, taille de doigt, « sizeable ») [V, fiche].
5. **Mention honnête des rendus** (« approximations ») dans les conditions [V, `/terms` § 4] : JR Diamond peut faire mieux, avec un modèle issu du fichier de fabrication.
6. **Option « Reject all » sur les cookies et chargement de l'outil tiers seulement après accord** [V].

## Défauts observés

- [V] Constructeur 3D invisible sans cookies fonctionnels : page vide de 800 px avec seulement un texte d'accueil.
- [V] Conditions de retour, garantie, acompte, délais, paiement : champs vides entre crochets dans les Terms publiés.
- [V] `/cart` répond 404 ; panier en tiroir seulement.
- [V] Le prix « suggested retail » n'a pas de source indiquée.
- [V] Contenu chargé en JavaScript (la collection ne s'affiche pas sans exécution).
- [I] Le constructeur 3D n'affiche aucun prix (inventaire) : on ne peut pas configurer puis acheter en ligne.

## Limites de l'audit

- Outil Pencil Design non ouvert (robots.txt illisible, domaine tiers) : toutes les options du constructeur viennent de l'inventaire du jour et ne sont pas revérifiées ici.
- Pas de test des vues 360°, AR, essayage, partage, comparaison, financement : absents de l'interface accessible.
- Panier de la version iPhone : même tiroir, non reprise en détail. Aucun paiement, aucun formulaire, aucune conversation.
- Les dates des Terms (10/11) et de la politique de retour (17/11) sont postérieures ou proches de la date nominale d'audit : le site évolue vite.

## Sources

- https://thediamondgirls.com/ring-builder ; /natural-diamond-engagement ; /custom-design ; /terms ; /refund-policy ; /cart (404) ; /product/14k-yellow-gold-princess-cut-diamond-engagement-ring (lus le 15/11/2026, robots.txt `Allow: /`).
- https://thediamondgirls.com/robots.txt.
- Contrôle robots : `app.pencildesign.co/...` INCONNU.
- `docs/concurrence/audit/us/idaho/INVENTAIRE.md` (pour le constructeur).
