# Inventaire Kazakhstan (Europe, étude du 15/11/2026)

Date : 15 novembre 2026. Explorateur : Kazakhstan. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun kazakh) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé.
Contrôle `robots.cjs` fait avant chaque ouverture : tous les sites ci-dessous AUTORISÉ, sauf iloveyourings.kz (INCONNU).

## Constats d'ensemble

- Le marché en ligne kazakh est mince : une recherche en russe et en anglais (« конструктор кольца », « помолвочные кольца купить онлайн », « выращенные бриллианты ») ne donne qu'une poignée de sites propres ; le reste est constitué de marketplaces (Kaspi annonces, Satu, OLX, exclues par la consigne) [V : résultats de recherche].
- Un seul acteur propose un vrai configurateur 3D avec prix en temps réel : **Neo Diamond** (Almaty et Astana). Son positionnement (diamants de synthèse IGI, certificat dès 0,50 ct, fabrication en 5 à 10 jours) recoupe celui de JR Diamond [V : neodiamond.kz].
- Terme du synthétique en russe : **« лабораторный бриллиант »** (Neo Diamond, Celie), **« выращенный бриллиант »** (EPL Diamond, annonces Kaspi). Le naturel est « природный ». Aucun des deux termes n'est interdit au Kazakhstan à ma connaissance ; non vérifié juridiquement [S].
- Langues : russe presque exclusivement. Un sélecteur « ҚАЗ » apparaît sur EPL Diamond (version kazakhe) [V]. Aucune version anglaise ou hébraïque vue.
- Devise : tenge (₸) partout [V].

## Tableau

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Neo Diamond | Almaty et Astana (showrooms Esentai City, ЖК Atlant) | https://neodiamond.kz/ (200 [V]) | https://neodiamond.kz/catalog/list (catalogue à prix) puis fiche à configurateur 3D, ex. https://neodiamond.kz/catalog/product/sirius/classic/round | Oui : 3D, carat, couleur des diamants, titre 585/750, couleur de l'or, prix en direct [V] | Aucun (robots.txt : Allow /, mais /tilda/cart*, /tilda/form* interdits) | RU | Seul concurrent kazakh au modèle proche de JR Diamond (synthétique IGI, GIA pour naturel, dès 0,50 ct, 5 à 10 jours, livraison offerte) ; sur-mesure par WhatsApp |
| 2 | EPL Diamond (ЭПЛ Даймонд) | Astana (site kazakh d'une marque dont le site principal est epldiamond.ru [V : robots.txt cite epldiamond.ru]) | https://epldiamond.kz/ (200 [V]) | https://epldiamond.kz/catalog/diamond-rings/engagement/ | Non (fiches à tailles et poids de pierre variables) | Aucun | RU, KZ (« ҚАЗ ») | Catalogue prix en ₸, bagues « выращенный » (synthétique) et naturelles, panier, garantie 2 ans, code d'authenticité |
| 3 | Celie | Almaty et Astana | https://celie.kz/ (200 [V]) | https://celie.kz/kolca-s-laboratornymi-brilliantami | Non | Aucun | RU | Spécialiste du diamant de synthèse, retours 14 jours annoncés, Kaspi 0-0-12 ; mais sans prix ni panier (devis par WhatsApp) |
| 4 | Deimantas | Astana | https://deimantas.kz/ (200 [V]) | https://deimantas.kz/g402256-zolotye-koltsa-brilliantami | Non | Aucun | RU | Boutique en ligne sur plateforme (Satu/Prom, indice : CSS « kazprom » [I]), prix en ₸ mais pas de synthétique mis en avant ; intérêt faible |
| 5 | I Love You, Rings | Almaty [I] | https://iloveyourings.kz/ | Non déterminable | Inconnu (annoncé : faire ses alliances en atelier) | **Bloqué / inutilisable** : robots.txt illisible (renvoie une page HTML, INCONNU) ; la page affichée est « Сайт временно недоступен » | RU | Concept d'atelier participatif, hors périmètre faute de site |

Non retenus : Obruchalka (atelier d'Almaty, vente de masterclass d'alliances ; site non trouvé [V : article Kapital.kz cité en sources]) ; Gold Diamond (existence non confirmée par la recherche) ; Тримиата / Trimiata (maison d'Astana, site non trouvé) ; Kazakhstan Jewelers, Almaty Jewelry House (boutiques physiques d'après un guide, pas de boutique en ligne vérifiée [I]) ; marketplaces Kaspi, Satu, OLX (exclus).

## Audits réalisés

- `neodiamond.md` : audit complet du configurateur.
- `epl-diamond.md` : audit du catalogue, de la fiche produit et du panier.
- Les rangs 3 à 5 ne sont pas audités (consigne : 2 sites).

## Sources

- https://neodiamond.kz/ , https://neodiamond.kz/catalog , https://neodiamond.kz/catalog/list (lues le 15/11/2026)
- https://epldiamond.kz/ , https://epldiamond.kz/robots.txt , https://epldiamond.kz/shop/delivery/
- https://celie.kz/ , https://celie.kz/kolca-s-laboratornymi-brilliantami
- https://deimantas.kz/ , https://deimantas.kz/robots.txt
- https://iloveyourings.kz/ (page « temporairement indisponible »)
- https://kapital.kz/business/60052/kak-postroit-biznes-na-lyubvi-i-dragotsennostyakh.html (Obruchalka)
- https://obyavleniya.kaspi.kz/a/brilliant-diamond-122331748 (usage du terme « выращенный » par un particulier)
- https://www.sateur.com/?p=63823 (guide cité par la recherche ; la page lue ne mentionne pas le Kazakhstan, donc non utilisée)
