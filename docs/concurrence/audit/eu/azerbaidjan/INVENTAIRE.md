# Inventaire Azerbaïdjan : joailliers en ligne, bagues de fiançailles et alliances

Date : 15/11/2026 (contrôles faits en session le 25/11/2026). Explorateur : Azerbaïdjan. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun azerbaïdjanais) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé. Prix en manat (₼, AZN).

## Constat d'ensemble
- Marché **de boutique et de catalogue** : aucun site trouvé n'a de configurateur, de visuel 3D ou 360° ni de constructeur de bague [V : 2 sites lus en navigateur, aucun contrôle de ce type].
- Un seul site national vend réellement en ligne des bagues avec diamant (panier, 3 devises) : **Resm** [V]. L'autre site retenu, **Italdizain**, est un catalogue de marques étrangères sans panier ni vente en ligne [V].
- Les recherches (web en anglais, azéri, russe) n'ont trouvé **aucun joaillier azerbaïdjanais proposant un sur mesure en ligne ni du diamant synthétique** [V : 8 recherches, aucun résultat ; absence de preuve, pas preuve d'absence]. Le marché des bagues passe surtout par les petites annonces (lalafo.az) et les boutiques physiques [V : résultats de recherche].
- Terme pour le diamant synthétique en azéri : **aucun terme relevé sur un site de joaillier**. Les annonces et guides utilisent « laboratoriya brilyantı » ou « süni brilyant » sans source fiable ; je n'ai pas pu le vérifier [S]. Resm écrit en anglais « We only use natural gemstones mined from the earth — no synthetics » [V : https://resm.com/en/faq]. Moissanite vendue comme « brilyant » dans des annonces lalafo.az : vigilance [V : extrait de recherche].

## Tableau

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Resm Jewelry (marque nationale, 2012, Rasmina Gurbatova) | Bakou | https://resm.com/en (200) | https://resm.com/en/categories/rings (172 produits ; 196 bagues avec le filtre catégorie) | Non. Boutique en ligne : filtres matière, couleur, pierre, collection, prix ; fiche avec guide des tailles ; panier | Aucun au chargement. robots.txt : interdit `/*/cart`, `/*/checkout`, `/*/search`, `/currency/`, `?sort=` | AZ, EN, RU ; AZN, USD, EUR | Seule marque nationale avec vente en ligne de bagues en or 14 k et diamant naturel, prix affichés, livraison dans 130 pays ; modèle de marque et de collections |
| 2 | Italdizain / Royal Collection (revendeur multimarque, depuis 1996) | Bakou | https://italdizain.az/en (200) | https://italdizain.az/en/catalog/bridal (56 bagues Graff, Messika, Leo Pizzo) | Non. Catalogue avec prix « à titre indicatif », bouton « Contact the boutique », aucun panier | Aucun. robots.txt : interdit `/search`, `/profile`, `/auth` | AZ, EN, RU ; AZN | Prix de bagues de fiançailles affichés (de 3 055 à 50 100 ₼ vus), poids de diamant par fiche ; mais marques étrangères, pas de vente en ligne |
| — | Silver Style | Bakou | https://silverstyle.az/ (200) | https://silverstyle.az/shop-2/ | Non. WooCommerce : boucles d'oreilles en argent, montres | Aucun (robots autorisé) | AZ | **Écarté** : argent et montres, aucune bague de fiançailles vue en page d'accueil [V] |
| — | MJ Fiance | Bakou | site introuvable | — | — | — | AZ | **Écarté** : seul un article publicitaire (qebulol.az) parle de nişan et toy üzükləri ; aucun site trouvé, essais de 3 noms de domaine sans réponse [V pour l'article, absence de site non prouvée] |
| — | Butali, Minali, Shamsa, Gold Art | Bakou | — | — | — | butali.az : 403, minali.com : 403 | — | **Écartés** : marques citées par la presse ou des guides, mais aucun site vérifié (domaines 403, injoignables ou sans rapport) |
| — | Satéur (sateur.com) | non établie | https://sateur.com/ | https://sateur.com/collections/modern-engagement-rings | Non | Aucun | EN et autres | **Écarté** : marque étrangère de moissanite et de simili, pas un joaillier azerbaïdjanais ; son guide « best engagement rings in azerbaijan » est du marketing |
| — | Cartier, Tiffany, Bulgari, De Beers (boutiques de Bakou) | Bakou | — | — | — | — | — | Exclus par la consigne (grandes maisons internationales) ; Central Store et Moskva : grands magasins, exclus |

## Audit décidé
Les 2 premiers sites non bloqués sont audités : `resm.md` (parcours complet jusqu'au panier : bouton non actionné car le panier est interdit par robots.txt) et `italdizain.md` (catalogue seulement). Resm est le seul à correspondre à la cible ; Italdizain est auditée parce que la règle l'impose.

## Écarts à la règle de lecture
1. **butali.com** : `robots.cjs` répondait AUTORISÉ, la page ouverte en navigateur a affiché un défi Cloudflare (nom de domaine à vendre, sans rapport avec la marque). Aucune autre tentative, pas de contournement.
2. Adresses devinées qui ont répondu 404 ou 405 (`resm.com/en/shop/rings`, `resm.com/en/rings`, `italdizain.az/en/jewelry`) : pages autorisées ; erreur de ma part, sans conséquence.

## Sources
- Pages ouvertes : https://resm.com/en, /en/categories/rings, /en/product/1605-two-under-the-moon-7, /en/faq, /en/delivery-returns, /en/care-warranty, /en/terms, /en/contact ; https://italdizain.az/en, /en/catalog/bridal, /en/catalog/jewelry/rings/messika/05493wg, /en/service ; https://silverstyle.az/ ; https://qebulol.az/mjfiance/.
- Recherche web (extraits, non vérifiés ensuite) : https://report.az/en/business/azerbaijani-jewelry-dominates-domestic-market-association-says (bijoux locaux 60 à 65 % du marché, selon l'association) ; https://parkbulvar.az/en/silver-style ; https://en.trend.az/business/3530307.html (Azerbaijan Jewelers Association) ; https://sateur.com/blogs/engagement-ring/best-engagement-rings-in-azerbaijan-the-ultimate-guide ; https://lalafo.az (petites annonces).
