# Inventaire : Arménie (Europe, explorateur « Arménie »)

Date : 15/11/2026 (consigne de l'étude). Contrôles d'adresses et de `robots.txt` faits avec l'outil imposé. Légende : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.
Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun arménien) sans le refaire.

## Constat sur le territoire
- Marché petit : peu de sites vendent des bagues de fiançailles en ligne avec prix affichés. Un seul vrai configurateur de bague de fiançailles trouvé : **NANEA** (nanea.am), lancé en octobre 2026 selon ses propres publications [V : LinkedIn de NANEA, « il y a 1 mois »]. Les autres sont des boutiques classiques ou des ateliers qui travaillent sur devis.
- **Terme du diamant synthétique en arménien** : « աճեցված ադամանդ » (« diamant cultivé/élevé »), employé par NANEA dans son texte arménien (« Աճեցված և բնական ադամանդներ », diamants cultivés et naturels) [V : publication LinkedIn de NANEA]. Les sites en anglais écrivent « lab-grown » [V]. Les termes arméniens « լաբորատոր » ou « սինթետիկ » n'ont pas été vérifiés [S].
- Hors périmètre écartés : Prazyan Jewelry (fabricant B2B, minimum 50 g, pas de vente à des particuliers) [V]. KARA Silver, Dafnezard, Arsy Accessories (argent ou fantaisie, pas de bagues de fiançailles) [V]. Baldi (bijoux fantaisie) [V].

## Tableau (classé par intérêt pour JR Diamond)

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | NANEA | Erevan | https://nanea.am/ (redirige vers /hy) [V] | https://nanea.am/en/ring/luminous-halo (fiche à configurateur ; liste https://nanea.am/en/engagement) | Oui : métal, titre 585/750, 9 formes, naturel/synthétique, carats 0,5 à 3, 4 niveaux de qualité, taille, gravure, prix en direct et détail du prix [V] | Aucun ; robots.txt autorise tout sauf `/api/` et `/diamonds?ring=` [V] | hy, ru, en [V] | Même positionnement que JR Diamond : prix décomposé avec marge d'atelier, délai 7 jours, certificat GIA/IGI, atelier à Erevan. Seul concurrent arménien comparable. |
| 2 | GH Jewells | Erevan (boutique néerlandaise pour l'envoi) | https://ghjewells.com/ [V] | https://ghjewells.com/products/round-solitaire-engagement-ring-white-gold ; liste https://ghjewells.com/collections/rings | Non : fiches à taille seulement ; sur mesure sur photo avec modèle 3D montré avant fabrication (annoncé) [V accueil] | Aucun ; `/cart/add` et `/account` interdits par robots.txt [V] | en, ru, es [V] | Boutique Shopify, prix en USD, or 14 k, atelier depuis 2010 [V blog] ; parcours « photo → poids d'or et prix → modèle 3D » proche de l'idée de preuve de fabrication. |
| 3 | Nayiri Jewelry | Erevan | https://nayirijewelry.com/ [V] | https://nayirijewelry.com/collections/engagement-rings | Non : 11 modèles faits, commande sur mesure par demande (formulaire) [V] | Aucun [V] | en [V] | Marque d'atelier arménien, diamants synthétiques sur chaque modèle, 4 à 6 semaines, envoi dans le monde, prix en euros dès 790 €. Pas de prix de configuration. Non audité. |
| 4 | ArmRoot | Erevan | https://armroot.com/en [V] | https://armroot.com/en/shop | Non | Aucun [V] | hy, en [V] | Bijoux de collection arménienne en argent et or, une collection de mariage en argent ; pas de bague de fiançailles à diamant [V]. Faible intérêt. |
| 5 | Jewellery Artisan (Armen Oganesyan) | Erevan | https://www.jewartisan.com/ [V] | https://www.jewartisan.com/ (« essayage virtuel ») | Non ; essai virtuel et commande individuelle par formulaire [V accueil] | Aucun [V] | en, ru [V] | Créateur argent ; intérêt limité à l'essayage virtuel. |
| 6 | Gafri | Erevan | https://www.gafri.am/ | https://www.gafri.am/ | Non (catalogue) | **INCONNU : robots.txt illisible, connexion refusée par le proxy (HTTP 0)** ; traité comme bloqué | en | Joaillerie or et argent, quelques pièces vendues en ligne [V : extrait de recherche]. Aucune page lue. |

## Audits
- NANEA : audit complet de la fiche configurateur (voir `nanea.md`).
- GH Jewells : audit partiel (voir `gh-jewells.md`).
- Nayiri : non audité (3e rang, hors des 2 premiers).

## Sources
- Recherche web (Parallel Search), 15/11/2026 : requêtes génériques sur les bijoutiers d'Erevan.
- https://nanea.am/robots.txt et https://nanea.am/sitemap.xml (lus) ; https://ghjewells.com/robots.txt (lu) ; https://linkedin.com/company/145250581 (page publique de NANEA, extrait de recherche).
- https://ghjewells.com/blogs/news/engagement-rings-yerevan (extrait de recherche) ; https://nayirijewelry.com/collections/engagement-rings (extrait de recherche et code 200 vérifié).
