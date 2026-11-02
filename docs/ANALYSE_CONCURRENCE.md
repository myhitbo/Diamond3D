# Analyse concurrentielle — configurateurs 3D de joaillerie

Date : 2 novembre 2026. Périmètre : outils permettant à un client final de configurer un bijou en 3D sur le site d'un joaillier, et plateformes de bijoux sur mesure en ligne.

Légende : **[V]** vérifié (page officielle lue ou mesure exécutée le 2/11/2026) · **[I]** inféré à partir d'éléments vérifiés · **[S]** supposé / non corroboré. Les prix sont ceux affichés par les éditeurs à cette date ; ils changent.

---

## 1. Synthèse en une page

| Acteur | Nature | Prix affiché | Points forts | Points faibles observés |
|---|---|---|---|---|
| **Alyra** (alyrajewel.com) | Studio de services (CAO, rendu, configurateur sur mesure, fabrication) | Non publié, « sur devis » [V] | Bibliothèque de composants (31 pièces → 23 100 bagues), export CAO fabrication, marque blanche, prix estimé en direct, mobile | Moteur très lourd (**16,5 Mo** téléchargés, dépend du runtime iJewel3D) [V] ; configurateur complet réservé aux clients ; dépendance à un prestataire |
| **iJewel3D** (ijewel3d.com) | Plateforme SaaS (viewer, éditeur, configurateurs, essayage AR, rendu par lots, SDK) | 0 → 1 500 $/an ; marque blanche essayage +2 000 $/an ; domaine +500 $/an [V] | Écosystème le plus complet : Wedding Band Builder (profils, gravure, moteur de prix volumique, fiche de fabrication), essayage main/visage, plugin Rhino, MatrixGold, CounterSketch | Marque iJewel visible sauf plan haut ; intégration par iframe (non indexable) ; runtime 2,9 Mo [V] ; peu d'avis indépendants [V] |
| **Perfect Corp** Ring Builder | SaaS AR (beauté → bijoux) | Non publié [V] | Essayage AR sans marqueur, **mesure de taille de doigt par caméra**, génération automatique de SKU, tableau de bord analytique | Pas spécialisé joaillerie fine ; prix sur consultation ; pas de lien CAO fabrication |
| **Threekit** | Plateforme entreprise (3D, AR, « Virtual Photographer ») | **À partir de 15 000 $/an** + implémentation [V] | Rendu V-Ray photoréaliste, main/tourne-disque, intégrations ERP/PIM | Coût et délai (2–3 mois annoncés en 2021) [V] ; surdimensionné pour un atelier |
| **Gemist** | Plateforme B2B marque blanche « design your own » | À partir de 299 $/mois (une source) ou 1 500 $/mois (annuaire) — contradictoire [V] | Prix dynamique, place de marché de pierres, « stack studio », 6 M$ levés en 2025 | Pas d'API publique documentée trouvée ; marché US |
| **Apviz** | Configurateur 3D générique (France) | Non publié [V] | Gravure en temps réel, essayage, règles métier, API ERP/CRM/PIM, environnements test/UAT/prod | Généraliste, bibliothèque bijou limitée dans la démo (3 carats, 3 gemmes, 3 ors) [V] |
| **Apps Shopify** (Ring Facet 70 $/mois, Custom Ring Builder 99 $/mois, Keyideas Jewelith 50–125 $/mois, GemFind RingBuilder 295–345 $/mois, VDB 2 000–3 000 $ + 150–550 $/mois) | Widgets « bague = monture + diamant du flux » | Voir colonne | Mise en route rapide, flux de diamants certifiés (GemFind, VDB) | Quasi aucun avis (0 à 14) [V] ; géométrie générique, pas le bijou de l'atelier ; Shopify obligatoire |
| **Zakeke / Kickflip** | Configurateurs généralistes | 59–300 $/mois **+ 1,5 à 1,95 % par commande** [V] | Multi-produits | Commission sur chaque vente ; pas de rendu diamant spécialisé |
| **James Allen / Blue Nile** | Détaillants intégrés | — | Vidéo 360° HD de chaque diamant réel (zoom 20× ou 40× selon sources, contradictoires) [V], essayage virtuel (JA) | Modèle de détaillant à stock massif, inaccessible à un atelier |
| **Taylor & Hart** | Sur mesure accompagné | — | Parcours humain : consultant, CAO sous 2–4 jours, 3 modifications incluses, **impression résine à essayer**, gravure laser offerte [V] | Pas de configurateur temps réel : le 3D arrive après la commande |
| **Tournaire « Design Your Ring »** (France) | Détaillant avec SOLIDWORKS Sell | 290 € argent, dès 1 200 € or (2018) [V] | Premier cas français documenté | Outil daté, dépendance Dassault |

**Conclusion.** Aucun acteur ne combine à la fois : (1) un modèle web léger construit *à partir du vrai fichier de fabrication* avec écart mesuré, (2) un prix décomposé et traçable, (3) un parcours de devis/atelier complet, (4) des pages indexables par configuration, (5) FR + EN + **hébreu RTL**, (6) l'absence totale d'abonnement et de commission. C'est l'espace que JR Diamond peut occuper.

---

## 2. Fiches détaillées

### 2.1 Alyra (alyrajewel.com)

**Positionnement** [V] : « jewelry technology studio », bureaux Londres, Dubaï, New York, Surat ; CAO, rendu, configurateur, développement web **et fabrication** (livraison 3–6 jours annoncée). Clients affichés : Guru Diam, Om Particle, Avina Jewels, Forever Jewels, Gleamora, Pure You, Akshar Jewel, SP3 Technologies, Synora Jewels (surtout diamant de laboratoire, Inde/USA). Témoignages avec noms de sociétés génériques (« Maison Dubai », « Manhattan Atelier ») [V] — crédibilité faible [I].

**Fonctionnalités revendiquées** [V] :
- Bibliothèque de composants : 10 têtes × 11 corps × 3 métaux × 10 formes × 7 tailles = 23 100 bagues ; studs : 6 montures × 4 métaux × 5 formes × 5 carats = 600.
- « Anchor-based snapping » : composants alignés au point de montage, « impossible de construire une pièce non fabricable ».
- Rendu WebGL « 60 fps », dispersion des diamants, réflectance des métaux « calibrés sur vos photos ».
- Export CAO « prêt pour la fonte », mise à jour du prix à chaque changement, marque blanche complète, lien partageable pour vendeurs (iPad en boutique), embed Shopify/WooCommerce/Magento/custom.
- Délai annoncé : 2 à 3 semaines pour une première collection.
- Le configurateur complet (règles de prix, export CAO, branding) est **réservé aux clients** avec code d'accès ; la démo publique est une « bibliothèque réduite ».

**Mesures exécutées sur la démo publique** (`alr-configurator.vercel.app`, Chromium headless, cache vide) [V] :
- **16,5 Mo** transférés avant première image, dont `scene-config.vjson` **5,75 Mo** et le runtime `releases.ijewel3d.com/webgi/runtime/bundle-0.17.0.js` **2,9 Mo** ; le configurateur studs charge **25,4 Mo** (dont un GLB de 2,8 Mo pour le fermoir).
- Le moteur 3D est le runtime **WebGI d'iJewel3D** : Alyra est une couche de service au-dessus de la technologie d'iJewel [I, fort].
- Interface démo : 4 métaux (or blanc, jaune, rose, platine), 17 corps de bague, 10 têtes, parcours en 3 étapes (Setting → Diamond → Review), prix « $12,905 est. » pour rond 2 ct or blanc, vues PV/FV/SV.
- Après 26 s en rendu logiciel, l'écran affichait encore « LOADING YOUR RING » (non représentatif d'un GPU réel, mais le volume transféré l'est).

**Ce qu'on ne sait pas** [S] : prix du service, propriété du code livré, hébergement (démo sur Vercel), ce qu'« export CAO fabrication » produit exactement (assemblage de composants pré-modélisés, pas une CAO paramétrique).

### 2.2 iJewel3D (ijewel3d.com)

**Produits** [V] : Viewer (web component + SDK `@ijewel3d/mini-viewer`), Drive (hébergement), Design (portfolio), Playground (éditeur gratuit : matériaux PBR, diamant, post-traitement SSR/TAA/bloom/SSGI, chargeur `.3dm`), BatchX (rendu local par lots, « 100–500× plus rapide »), TryOn AR (main et visage, iOS/Android/macOS/Windows, sans application), SDK Web (threepipe/three.js), modules Unity/PlayCanvas, éditeur HDR, plugins Rhino / MatrixGold / CounterSketch.

**Ring Configurator** [V] : dossiers par composant (Head, Shank, Band), un fichier par variante, tags `shape:` et `size:` pour filtrer, synchronisation, réglage lumière/caméra, essayage calibré une fois par projet. Inclus dans tous les plans (marque iJewel sauf plan Professional).

**Wedding Band Builder** [V] — la référence fonctionnelle du marché :
- 8 profils (D, plat, confort, court, knife edge, biseauté, concave, rond) + profils 2D personnalisés importés de Rhino ; largeur 0,5×–2×, épaisseur 0,5×–1,5× ; tailles US/EU/UK converties.
- 3 ors 18 k inclus, métaux personnalisés par fichiers PBR ; 1 à 3 zones de couleur ; 7 finitions ; 4 types de sertissage (rail, rail intégral, clos, griffes) avec nombre, étendue, espacement, taille, position ; bords ; rainures ondulées ; **gravure intérieure en direct** ; mode « lui & elle ».
- **Moteur de prix** : volume 3D × densité × prix au gramme + carats + façon + majoration ; trois modèles (majoration occidentale 1,5–2,5×, « making charges » indiennes 8–35 %, Golfe par gramme) ; arrondis configurables.
- **Fiche de fabrication** imprimable (coupe, millimètres, taille, métal par zone, pierres, gravure, décomposition du prix, logo, référence) + JSON de configuration.
- AR WebXR (iOS 15+, Android 10+), 10 thèmes, CSS personnalisé, déploiement script/iframe/headless, Shopify, WooCommerce, Magento, BigCommerce, Wix.

**Tarifs** [V] : Free 0 $ (100 modèles, 50 Mo), Premium 200 $/an, Startup 600 $/an, Professional 1 500 $/an (1 000 modèles, 200 Mo, marque blanche, 1 domaine). Options : domaine 500 $/an, +200 modèles 200 $/an, essayage marque blanche **2 000 $/an**. Incohérences sur la page (plans « Silver/Gold/Platinum » cités mais absents) [V].

**Limites** [V/I] : runtime 2,9 Mo ; pas d'avis indépendants trouvés ; l'essayage ne mentionne aucune précision mesurée ni mesure de taille de doigt ; intégration par iframe → contenu non indexable par Google [I].

### 2.3 Perfect Corp — AR Ring Builder & Virtual Ring Try-On

[V] : essayage sans marqueur sur doigt nu, empilage de bagues, PBR, entrée photo 2D **ou** CAO 3D, outil d'auteur cloud (import CAO, matériaux en masse, génération automatique de tous les SKU), **mesure de taille de doigt par caméra** intégrée au parcours, tableau de bord (sessions, styles populaires, données de taille), kiosque en boutique, API. Prix non publié, accès via commercial. Aucun chiffre de précision donné.

### 2.4 Threekit

[V] : « Engagement Ring Configurator » à partir de **15 000 $/an** + implémentation ; rendu V-Ray, main/tourne-disque, AR placement, intégrations SAP/Salesforce ; en 2021, « 2–3 mois d'implémentation ». Cas client : Lindsey Scoggins. Cible : grandes enseignes.

### 2.5 Gemist

[V] : plateforme B2B marque blanche (web, boutique, mobile), prix dynamique, rendus, « stack studio », place de marché de pierres ; partenariat Saban Onyx (CAO offerte par le fabricant) ; levée de 6 M$ en juin 2025. Prix contradictoires selon sources (299 $/mois vs 1 500 $/mois). Pas d'API publique trouvée.

### 2.6 Apviz (France)

[V] : configurateur 3D générique avec bibliothèque bijou ; gravure en temps réel, essayage, règles métier, packshots 2D par lots, versionnement sémantique, environnements test/UAT/prod, API ERP/CRM/DAM/PIM, MFA, liste blanche de domaines. Prix non publié.

### 2.7 Apps Shopify et constructeurs « monture + diamant »

[V] (compilation Ruby Kinglet sept. 2026 + fiches Shopify) : Ring Facet 70 $/mois (2 avis, mode « demande de devis » remplaçant le panier, sauvegarde/partage) ; Custom Ring Builder 99 $/mois (0 avis) ; Keyideas Jewelith 50 $/mois ou 500 $/an (0 avis, lancé août 2025, « bientôt disponible » sur une partie des fonctions) ; Keyideas RingBuilder 145 $/mois (11 avis) ; Brilliance Builder 199–375 $/mois ; GemFind RingBuilder 295–345 $/mois (flux de diamants, Edge POS) ; VDB Ring Creator 2 000–3 000 $ + 150–550 $/mois (stock de diamants en direct, 14 avis) ; Zakeke 69,90–299,90 $/mois + 1,5–1,9 %/commande (91 avis) ; Kickflip 59 $/mois + jusqu'à 1,95 % (134 avis). Une agence facture « 3 000–4 000 $ » pour un builder modélisé [V, source unique].

Enseignement [I] : le marché des widgets est encombré, peu noté, et ne vend **pas le bijou de l'atelier** mais des montures génériques + un diamant de flux.

### 2.8 Détaillants intégrés et sur mesure accompagné

- **James Allen / Blue Nile** [V, sources secondaires contradictoires] : vidéo 360° HD par diamant réel, zoom 20× ou 40×, le builder ne propose que les montures compatibles avec la forme choisie, essayage virtuel (JA). Modèle à stock, hors de portée d'un atelier, mais fixe l'attente client : **voir la pierre réelle**.
- **Taylor & Hart** [V] : consultant dédié, CAO sous 2–4 jours, 3 modifications incluses, changement de direction facturé 200 $, impression résine à essayer, gravure laser offerte, 4 semaines. Montre que le **parcours humain** et la **maquette physique** restent décisifs sur le haut de gamme.
- **Tournaire** [V, 2018] : premier « Design Your Ring » français avec SOLIDWORKS Sell ; argent 290 €, or dès 1 200 €.

---

## 3. Matrice fonctionnelle

| Fonction | Alyra | iJewel3D | Perfect Corp | Threekit | Apps Shopify | **JR Diamond aujourd'hui** | **JR Diamond cible** |
|---|---|---|---|---|---|---|---|
| Modèle issu du **vrai fichier de fabrication**, écart mesuré | Composants remodelés [V] | Upload libre | Upload libre | Remodélisation guidée | Génériques | **Oui, 0,021 mm mesuré** [V] | Oui + certificat de conformité par modèle |
| Bibliothèque de composants (tête/corps/pierre) | 31 pièces → 23 100 | Dossiers + tags | SKU auto | Oui | Monture + diamant | 1 modèle, 1 tête | Composants ancrés, validés par l'atelier |
| Formes de pierre non modélisées | Non proposées | — | — | — | Souvent simulées | **Déclarées indisponibles avec raison** [V] | Idem |
| Poids modèle + moteur au premier rendu | ~16,5 Mo [V] | ≥ 2,9 Mo runtime [V] | ? | ? | ? | **~0,4 Mo** (191 Ko + 217 Ko gzip) [V] | Budget < 1 Mo |
| Rendu diamant | Dispersion (WebGI) | Diamant PBR/réfraction | PBR | V-Ray précalculé | Variable | Réfraction 3 rebonds, repli qualité basse [V] | + calibration photo, comparaison côte à côte |
| Prix en direct | « est. » sans détail [V] | Volume × densité + façon + marge, décomposé [V] | ? | Oui | Oui | « Sur devis » [V] | **Décomposé, cours du métal daté, indicatif → confirmé** |
| Fiche de fabrication / spec sheet | Export CAO annoncé | PDF + JSON [V] | — | — | — | Non | PDF + JSON + STL de référence + SHA-256 |
| Gravure en direct | Non vu | Oui (alliances) [V] | — | — | Rare | Non | Oui (phase 5) |
| Taille de doigt | Non vu | Conversion US/EU/UK [V] | **Mesure caméra** [V] | — | Liste | 1 taille modélisée | Conversion + bague à l'échelle sur écran calibré + baguier imprimable |
| Essayage AR | « Mobile AR compatible » (vague) | Oui, main/visage [V] | Oui, sans marqueur [V] | Placement | Non | Non | Essayage **photo** (phase 7), AR temps réel sous licence si ROI prouvé |
| Devis / atelier / suivi de commande | Non (widget) | Non | Non | Non | « Quote mode » (Ring Facet) | Bouton désactivé | **Parcours complet** : devis, acompte, validation CAO, maquette résine, production, livraison |
| Pages indexables (SEO) par configuration | Iframe → non | Iframe → non | Non | Non | Shopify | Pages statiques `noindex` | **Pages statiques indexées + image pré-rendue** |
| Langues | EN | EN (+ traduction UI possible) | Multi | Multi | Variable | FR, EN [V] | **FR, EN, HE (RTL)** |
| Coût récurrent pour l'atelier | Sur devis | 1 500 $/an + options | Sur devis | 15 000 $/an | 50–550 $/mois ± commission | **0** | **0** (hébergement seul) |
| Propriété du code et des données | Non | Non | Non | Non | Non | **Oui** | Oui |

---

## 4. Comment dépasser réellement les concurrents

Les points ci-dessous sont classés par **effet réel sur la conversion et la confiance**, pas par effet marketing. Chacun est vérifiable par un test.

### 4.1 Vitesse : premier rendu 3D en moins de 2 s sur 4G
Alyra charge 16,5 Mo, iJewel 2,9 Mo de runtime avant tout modèle [V]. JR Diamond est à ~0,4 Mo [V]. Tenir un **budget strict (< 1 Mo, mesuré en CI)** est un avantage mesurable, pas une promesse : sur mobile, chaque seconde de chargement coûte des visiteurs. Le concurrent le plus proche doit refaire son moteur pour nous rattraper.

### 4.2 Fidélité prouvée au bijou fabriqué
Tous promettent « ce que vous voyez est ce que vous recevez ». Un seul peut le **prouver** : le pipeline mesure l'écart entre la CAO de fabrication et le modèle web (0,021 mm) et refuse de publier une forme non modélisée [V]. À exposer au client : une mention « Modèle issu du fichier de fabrication, vérifié le … » et, en interne, un certificat par modèle (empreinte SHA-256, écart, validation atelier).

### 4.3 Prix honnête et décomposé
Alyra affiche « $12,905 est. » sans explication [V] ; iJewel décompose mais dans une fiche technique [V]. Différenciateur : afficher **métal (cours daté) + pierres (certificat) + façon + sertissage**, un statut clair (*indicatif → calculé → confirmé par l'atelier*), une date de validité, et un historique. C'est ce qu'un acheteur de bague de fiançailles à 5 000 € attend d'un atelier, et ce qu'aucun widget ne fait.

### 4.4 Le parcours complet, pas un widget
Les concurrents s'arrêtent au bouton « Ajouter au panier » ou « Demander un devis ». Taylor & Hart montre que le haut de gamme se vend avec un **humain, des itérations et une maquette** [V]. JR Diamond doit couvrir : configuration → devis → échange avec l'atelier (photos, modifications) → acompte → validation CAO/rendu → maquette résine optionnelle → production suivie → livraison → certificat. Personne ne vend cela à un atelier indépendant sous forme intégrée.

### 4.5 SEO : chaque configuration est une page
Iframes et SPA des concurrents sont invisibles pour Google [I, fort]. Générer des pages statiques par modèle, métal et forme, avec image pré-rendue, titre et données structurées `Product`, crée un actif d'acquisition que les SaaS ne peuvent pas offrir.

### 4.6 Marchés et langues
FR/EN/**hébreu RTL** : aucun concurrent étudié ne cible l'hébreu [V]. Couplé à des devises (EUR, USD, ILS), des tailles (France, US, UK, Israël) et des mentions légales locales, c'est un positionnement net.

### 4.7 Taille de doigt sans AR
Perfect Corp mesure par caméra [V] ; c'est coûteux à reproduire. Alternative à faible coût et forte valeur : **bague affichée à l'échelle réelle** sur écran calibré par carte bancaire, baguier PDF imprimable, conversion de toutes les normes, et **garantie de remise à taille**. Cela traite le vrai problème (la peur de se tromper), pas la démo.

### 4.8 Essayage : photo d'abord, AR ensuite
Les essayages AR existants n'annoncent aucune précision [V]. Proposer d'abord un **essayage sur photo de la main** (upload, échelle par référence, rendu de la configuration incrusté) : réaliste, rapide, sans suivi de main en temps réel. Évaluer ensuite une licence d'essayage temps réel (iJewel 2 000 $/an marque blanche [V]) si les données montrent un gain.

### 4.9 Zéro abonnement, zéro commission, code possédé
Zakeke et Kickflip prélèvent 1,5–1,95 % par commande [V] ; iJewel, Threekit, Gemist sont des abonnements. L'atelier possède son configurateur, ses modèles, ses données clients. À dire explicitement sur la page « Pourquoi nous ».

### 4.10 Ce qu'il faut rattraper avant de parler de « dépasser »
Honnêtement, aujourd'hui JR Diamond est **derrière** sur : nombre de modèles (1), formes de pierre (1), prix (aucun), devis (désactivé), gravure, tailles (1), essayage, back-office, paiement, déploiement, tests Safari/Firefox et appareils réels. Le cahier des charges ([`CAHIER_DES_CHARGES.md`](CAHIER_DES_CHARGES.md)) ordonne ces chantiers.

---

## 5. Sources

- Alyra : https://www.alyrajewel.com/jewelry-configurator · https://alyrajewel.com/ · https://www.alyrajewel.com/configurator · https://www.alyrajewel.com/stud-configurator · moteur https://alr-configurator.vercel.app/ (mesures réseau du 2/11/2026)
- iJewel3D : https://ijewel3d.com/ · https://ijewel3d.com/pricing/ · https://ijewel3d.com/products/ijewel-tryon/ · https://ijewel3d.com/products/wedding-band-builder · https://docs.ijewel3d.com/introduction/products.html · https://docs.ijewel3d.com/ring-configurator/ring-configurator-in-ijewel3d.html · https://playground.ijewel3d.com/v2/
- Perfect Corp : https://www.perfectcorp.com/business/products/ring-builder
- Threekit : https://www.threekit.com/engagement-ring-configurator · https://salestechstar.com/sales-marketing/threekit-announces-engagement-ring-configurator-a-customization-package-designed-to-give-jewelers-a-best-in-class-ecommerce-shopping-experience-fast/
- Gemist : https://news.centurionjewelry.com/articles/detail/gemist-partners-with-saban-onyx-on-custom-jewelry-platform-for-retailers · https://modernjeweler.com/gemist-secures-6-million-to-expand-custom-jewelry-saas-platform/ · https://saasbrowser.com/en/saas/858209/gemist
- Apviz : https://apviz.io/solutions/3d-jewelry-configurator/
- Apps Shopify et comparatif : https://www.rubykinglet.ai/insights/best-jewelry-configurators-2026 (éditeur juge et partie) · https://apps.shopify.com/ring-facet · https://apps.shopify.com/keyideas-jewelith-ring-bracelet-necklace-design-studio · https://apps.shopify.com/custom-ring-builder
- GemFind : https://gemfind.com/blogs/web-design/augmented-reality-ring-tryon-guide-2026
- James Allen / Blue Nile : https://beyond4cs.com/reviews/james-allen-vs-blue-nile/ · https://thediamondprice.com/blog/article/james-allen-vs-blue-nile/ (sources secondaires, chiffres de zoom contradictoires)
- Taylor & Hart : https://taylorandhart.com/blog/the-3d-journey-of-an-engagement-ring · https://taylorandhart.com/us/ring-guidance-3/the-custom-process · https://taylorandhart.com/about-us/faqs
- Tournaire : https://fashionunited.fr/actualite/mode/tournaire-lance-design-your-ring-avec-dassault-systemes-pour-personnaliser-un-bijou-3d-en-ligne/2018032815252 · https://www.solidworks.com/fr/story/maison-tournaire
- Estimations de coût agence : https://inknalgorithm.com/3d-configurators-for-jewelry-brands-how-us-jewelers-sell-custom-rings-online-2026/ (25 000–80 000 $ pour un configurateur, 120 000–350 000 $ pour une plateforme ; source marketing, non corroborée)
