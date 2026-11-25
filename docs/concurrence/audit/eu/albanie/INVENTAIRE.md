# Inventaire Albanie : joailliers en ligne (bagues de fiançailles et alliances)

Date : 15/11/2026. Marché : Europe. Explorateur : Albanie. Légende : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé.
Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun albanais) sans le refaire.

**Constat principal** : le pays compte peu de vente en ligne de bagues de fiançailles. Aucun site albanais n'offre de configurateur de bague fonctionnel ni de visuel 3D ou 360° [V]. Les deux seuls sites exploitables (Rexha Gold, Pirro) sont des boutiques en ligne classiques à fiches produit. Le « configurateur » de Rexha affiche « COMING SOON » et celui de Pirro est une page vide [V]. Deux audits ont été faits, sur le parcours fiche produit et panier.

## Liste classée

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Rexha Gold | Tirana (maison née à Elbasan ; boutiques à Tirana) | https://rexhagold.com/ (répond 200, redirige vers /sq/) | https://rexhagold.com/sq/30-fejese (66 produits, filtres) | Non : https://rexhagold.com/sq/content/14-konfigurator affiche « COMING SOON » [V] | Aucun ; robots.txt PrestaShop, pages produit et panier autorisées [V] | Albanais, anglais (menu AL/EN) | Plus gros catalogue de fiançailles (diamants naturels certifiés IIDGR, prix en € TVA comprise, filtres forme, métal, platine 950), livraison gratuite, dossiers de retour détaillés [V] |
| 2 | Pirro (Artistic Jewellery Pirro) | Tirana (3 boutiques et laboratoire d'après le site) | https://pirro.al/ (200) | https://pirro.al/product-category/engagement-rings-for-her-2/ | Annoncé (« Design your perfect ring with our Configurator ») ; https://pirro.al/configurator/ répond 200 mais la page est vide [V] | Aucun ; robots.txt WordPress ouvert, panier autorisé [V] | Anglais (hreflang en), noms de pages albanais partiels | Diamants de synthèse nommés « lab-grown » sur au moins une fiche, prix en €, certification GIA par gemmologue maison, 30 jours d'échange [V] |
| 3 | Argjendari Rimi | Non établie [S] | https://argjendaririmi.com/ | https://argjendaririmi.com/ | Non vérifié | **Inconnu** : le proxy a refusé la connexion (502), robots.txt illisible, site marqué bloqué [V] | Albanais [I] | Catalogue de bagues avec prix en € vu dans un résultat de recherche seulement ; localisation et livraison inconnues [I] |
| 4 | Merita Jewellery | Tirana [I] | https://meritajewellery.com/ | — | — | **Inconnu** : robots.txt illisible (HTTP 0), marqué bloqué [V] | — | Cité seulement par un blog promotionnel d'un tiers (Satéur) ; existence en ligne non corroborée [S] |
| 5 | Gold Art Tirana | Tirana [I] | https://www.goldart.al/ [S] (adresse devinée) | — | — | **Inconnu** : robots.txt illisible, marqué bloqué [V] | — | Même source promotionnelle ; adresse non confirmée [S] |

## Écartés
- **Zizov Diamonds** (zizovdiamonds.com/sq/) : version albanaise d'un site d'Anvers (« Ready to Ship, Antwerp »), donc belge, pas albanais [V]. À rattacher à la Belgique. Il note les diamants de synthèse « (LG) » dans les noms de produits albanais [V].
- **Satéur** : vendeur de simulants (moissanite type), pas de diamant ; son blog « best engagement rings in albania » est promotionnel [V].
- **Bulgari Albanie** (bulgari.com/en-al, prix en lek) : grande maison internationale, exclue.
- **Popular Jewelry** (sq.popular.jewelry) : boutique étrangère en zircon avec version albanaise, hors sujet.
- **Altinbas** (Kosovo), **Ubuy.al** (place de marché), **merrjep.al** (petites annonces) : hors périmètre.

## Terme pour le diamant synthétique
- Aucun site albanais lu n'emploie un terme albanais pour le diamant synthétique [V]. Rexha ne liste que « Diamant Natyral i Bardhë / me Ngjyrë » dans son filtre « Lloji i diamantit » [V]. Pirro écrit « lab-grown » en anglais [V]. Zizov abrège « (LG) » [V].
- Termes albanais probables : « diamant sintetik », « diamant laboratorik » [S, non trouvés sur une page lue]. Réglementation locale du libellé : non vérifiée.

## Blocage et accès
- Rexha Gold et Pirro : robots.txt lu, adresses utilisées toutes AUTORISÉES par `robots.cjs` [V]. Pas de Cloudflare ni de captcha rencontré.
- Argjendari Rimi, Merita, Gold Art : accès refusé ou illisible depuis la machine d'audit ; non audités, ni contournés.

## Audits réalisés (2 premiers sites non bloqués)
- `rexha-gold.md`
- `pirro.md`

## Sources
- Recherches web génériques du 15/11/2026 (requêtes en anglais et en albanais, sans donnée sur JR Diamond).
- https://rexhagold.com/sq/ , /sq/30-fejese , /sq/content/14-konfigurator , /sq/content/17-politika-e-dergesave , /sq/content/18-politika-e-kthimit-dhe-zevendesimit
- https://pirro.al/ , /configurator/ , /product-category/engagement-rings-for-her-2/ , /payment-and-prices/ , /returns-and-exchange/ , /warranty/ , /delivery/
- https://sateur.com/blogs/engagement-ring/best-engagement-rings-in-albania-the-ultimate-guide (source promotionnelle, non fiable)
- https://zizovdiamonds.com/sq/
