# Malte : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun maltais) sans le refaire.

Périmètre : joailliers établis à Malte qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers (configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés). Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode : recherche web (Parallel Search, requêtes génériques en anglais), lecture de `robots.txt` avec `scratchpad/audit/robots.cjs` avant chaque adresse, pages d'accueil ouvertes avec Chromium (Playwright, identité par défaut, une page toutes les 2,5 s au moins par site). Aucun formulaire envoyé, aucun compte, aucun chat.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- Marché **minuscule et artisanal** : sept joailliers maltais retenus (V), plus Glamira (site `.com.mt` d'un groupe étranger, bloqué). Aucun ne propose de visuel 3D ou 360° : toutes les images sont des photos (V pour Jewelbox et Victor Azzopardi ; I pour les autres).
- **Un seul vrai constructeur en ligne : Jewelbox (Valletta)**. Choix d'une monture (1 329 produits), puis d'un diamant naturel (371 314 au catalogue) ou synthétique (538 755), prix affiché et additionné, panier (V). Il repose sur un catalogue de fournisseur américain (V : fiches « Ever&Ever », noms de style Stuller dans les adresses `/apps/stuller-shop/`).
- **Victor Azzopardi** vend des bagues finies avec prix et panier (V) mais pas de composition. **AD Jewellers**, **Raphael Azzopardi**, **GABA**, **Clément** et **Frank Zampa** affichent surtout des vitrines, des prix de pièces finies et un sur-mesure par rendez-vous (V pour la page d'accueil, I pour la suite).
- **Aucun site maltais ne bloque les robots**, sauf Glamira Malta (robots.txt en 403, traité comme bloqué).
- **Terme pour le synthétique** : l'anglais, langue des sites (tous les sites lus sont en anglais seulement, V). Jewelbox : « Lab Grown Diamond » ; Victor Azzopardi : « lab-grown diamonds » (V). Aucun terme maltais (« magħmul fil-laboratorju ») rencontré (S pour toute équivalence).
- Aucun site ne montre de photos ni de vidéos de fabrication de la commande. Jewelbox décrit un atelier interne (CAD, impression 3D, fonte, sertissage) en texte (V) ; la page de sur-mesure annonce un rendu CAO 3D envoyé au client (V).

## Tableau

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Jewelbox | Valletta | https://www.jewelboxmalta.com/ (répond 200, V) | https://www.jewelboxmalta.com/apps/ring-builder (V) ; fiche https://www.jewelboxmalta.com/apps/ring-builder/engagement-rings | Oui : monture puis diamant naturel ou synthétique (V), prix additionnés (monture 650 € + pierre 182 € = 832 €, V) | Non (robots.txt `Allow: /`, V) | Anglais (V) | Seul parcours « monture + pierre + prix » de l'île ; le plus proche du configurateur de JR Diamond |
| 2 | Victor Azzopardi | Pietà et Floriana | https://www.victorazzopardi.com/ (200, V) | https://www.victorazzopardi.com/engagement/rings/ (V) | Non : catalogue de bagues finies, 6 filtres, panier et paiement en ligne (V) | Non (pas de robots.txt, V) | Anglais (V) | Maison de 1898 (V, texte du site) ; prix affichés, livraison offerte dès 100 €, retours 14 j, page naturel contre synthétique |
| 3 | AD Jewellers (Antoine Debono) | Ta' Qali | https://ad.com.mt/ (200, V) | https://ad.com.mt/pages/custom-design (V) ; bagues https://ad.com.mt/collections/rings | Non : formulaire de sur-mesure et fiches Shopify (V pour la navigation, I pour les options) | Non (`Allow: /`, V) | Anglais (V) | Atelier en propre à Ta' Qali, sur-mesure mis en avant, prix en euros affichés |
| 4 | Frank Zampa | Valletta | https://frankzampa.com/ (200, V) | https://frankzampa.com/engagement (V) ; boutique https://frankzampa.com/shop/ | Non (I) | Non (V) | Anglais (V) | Grande collection de bagues et alliances ; rendez-vous ; page « Diamond Upgrade » (V, menu) ; page « Cancel My Order » en pied de page (V) |
| 5 | Raphael Azzopardi | Swieqi (Ibrag) | https://raphaelazzopardi.com/ (200, V) | https://raphaelazzopardi.com/product-category/rings/ (V) | Non (I) | Non (V) | Anglais (V) | Prix affichés, diamants GIA, IGI ou HRD annoncés (V, texte du site), sur-mesure et remise en forme de bijoux |
| 6 | GABA | Iklin | https://gaba.com.mt/ (200, V) | https://gaba.com.mt/engagement-rings/ (V) ; boutique https://gaba.com.mt/shop | Non (I) | Non (`Allow: /`, V) | Anglais (V) | Se présente comme la première usine de taille de diamant de Malte (V, texte du site) ; service de sur-mesure |
| 7 | Clément Jewellers | Birkirkara | https://clementjewellers.com/ (200, V) | https://clementjewellers.com/pages/wedding-ring (V) | Non : alliances « sur mesure » par contact (V pour la page) | Non (`Allow: /`, V) | Anglais (V) | Alliances personnalisables, gravure offerte (V, texte) ; peu de bagues de fiançailles |
| 8 | Glamira Malta | (groupe étranger) | https://www.glamira.com.mt/ | https://www.glamira.com.mt/engagement-rings | Oui (3 388 produits personnalisables d'après la recherche web) | **Oui** : robots.txt en 403, non ouvert | Anglais | Hors périmètre « marque nationale » ; non audité, signalé pour mémoire |

## Choix des deux audits

Jewelbox (rang 1) et Victor Azzopardi (rang 2) : les deux premiers sites qui ne bloquent pas les robots. Rapports : `jewelbox.md` et `victor-azzopardi.md` dans ce dossier.

## Sources

- Recherches web du 15/11/2026 (requêtes génériques : bijoutiers de Malte, bagues de fiançailles en ligne, diamant de laboratoire à Malte) ; pages d'accueil des huit acteurs lues le même jour.
- robots.txt contrôlés avec l'outil imposé : jewelboxmalta.com, victorazzopardi.com, raphaelazzopardi.com, gaba.com.mt, ad.com.mt, clementjewellers.com, frankzampa.com : autorisés ; glamira.com.mt : INCONNU (HTTP 403).
- Listes : https://www.yellow.com.mt/jewellers/malta/engagement-ring (annuaire consulté via la recherche, noms de joailliers supplémentaires, non retenus faute de vente en ligne vérifiée : Sapphire Jewellers à Sliema, Saqqajja Jewellers, ARTIS Jewellers).
