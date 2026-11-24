# Inventaire : Jérusalem, Haïfa et reste du pays (Israël)

Date : 15 novembre 2026. Explorateur du territoire « Jérusalem, Haïfa et reste du pays » : Jérusalem, Haïfa, nord et sud, sites pour les nouveaux immigrants (anglais, français, russe), spécialistes de l'alliance de kiddouchin. Complète `docs/concurrence/2026-11-15_israel.md` (15 sites, surtout à la Bourse de Ramat Gan et à Tel-Aviv), sans le refaire. Tel-Aviv et Ramat Gan sont traités dans `../israel-tel-aviv-et-ramat-gan/INVENTAIRE.md`, qui classe L'Émeraude Paris (Netanya) et Alpha Gold (Haïfa) hors de son territoire.

Légende :
- **[V]** vérifié : page lue ou contrôle actionné le 15/11/2026 (curl ou Chromium) ;
- **[E]** extrait d'un moteur de recherche, page non ouverte ;
- **[I]** inféré ; **[S]** supposé.

Les prix sont ceux qu'affichent les sites. « Synthétique » traduit « יהלום מעבדה » (mot à mot « diamant de laboratoire ») ; le terme d'origine est relevé à part.

## Méthode et blocages

- **robots.txt lu avant toute navigation automatisée**, pour les 15 domaines retenus ou écartés [V]. Chemins interdits non visités. Points notables :
  - **Alpha Gold** autorise nommément les agents d'IA (`Claude-User`, `ClaudeBot`…). Il interdit seulement les paramètres `?sort=`, `?price=`, `?shape=`, `?cat=` et `?q=`, qui n'ont pas été actionnés [V].
  - **Lavi** interdit `/cart/`, `/checkout/`, `?wc-ajax=`, `?add-to-cart=`, `?orderby=` et `?filter_`. Ces adresses ont été bloquées dans le navigateur d'audit. L'ajout au panier passe par `?wc-ajax=add_to_cart` : il n'a donc pas été actionné [V].
  - **Baltinester** et **uDiamonds** interdisent nommément `ClaudeBot`, `anthropic-ai` et `Claude-Web` (règles Cloudflare). Aucune navigation automatisée sur ces sites. Leur page d'accueil a été lue une fois par curl avant la lecture du robots.txt (ordre de la commande) ; rien d'autre n'a été ouvert [V].
- **Accès** : curl avec son en-tête par défaut, puis Chromium (Playwright) par la file d'attente commune. Au plus une page toutes les 2 s par site. Aucun formulaire rempli, aucun compte, aucun paiement, aucune conversation WhatsApp ouverte : seules les cibles des liens ont été relevées.
- **Aucun défi anti-robot rencontré** (ni Cloudflare, ni captcha d'accès) sur les sites ouverts [V]. Yvel charge le script `challenge-platform` de Cloudflare, mais la page s'est affichée sans défi [V].
- **Limites des outils de recherche** : la recherche Parallel a atteint sa limite gratuite après une requête. Firecrawl n'avait plus de crédits. La recherche s'est faite par WebSearch (index américain, faible sur l'hébreu et le russe), puis par lecture directe des sites. Des acteurs du nord (Nazareth, Karmiel, Nahariya) et de Jérusalem ont pu échapper à l'inventaire [I].
- **Signalements de l'orchestrateur** : Love Diamonds (constructeur en 404) et Daskalo (Cloudflare) sont à la Bourse de Ramat Gan, hors de ce territoire. Ils n'ont pas été revérifiés ici.

## Tableau de classement

Classement par intérêt pour JR Diamond [I] : configurateur ou options en ligne, prix affiché et expliqué, sur mesure, synthétique, public francophone ou olim, kiddouchin.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | L'Émeraude Paris | Netanya (4 rue Tel Hai) [V] | https://lemeraude-paris.com/ | https://lemeraude-paris.com/sur-mesure (bloc « Personnalisez votre bague », aussi sur l'accueil) | **oui, 3D WebGL** : 4 alliages, 3 finitions, wireframe, rotation [V] | aucun (Cloudflare sans défi) | FR, HE, EN (selon la langue du navigateur) [V] | Seul concurrent francophone du territoire, et seule 3D temps réel. Clientèle d'olim francophones (avis « Ad Olim Services »). Mais aucun prix, modèle générique, et la configuration n'est pas transmise au bouton WhatsApp [V]. **Audité.** |
| 2 | Alpha Gold | Haïfa (HaDeshanim 3) [V] | https://alpha-gold.co.il/ | https://alpha-gold.co.il/collections/engagement-rings → fiche https://alpha-gold.co.il/product/rosalyn-round-solitaire-ring-2ct-2000 | options sur fiche : or jaune ou blanc, synthétique ou moissanite (prix change), taille 7 à 22 ; la forme ouvre une autre fiche [V] | aucun ; robots.txt ouvert aux agents d'IA | HE, EN [V] | Synthétique seulement, 152 bagues, prix TTC partout, 12 paiements, fabrication sur commande en 7 à 14 jours, panier fonctionnel. Droit d'annulation étendu aux pièces sur mesure ; 4 mois pour les olim [V]. **Audité.** |
| 3 | Tachshitei Lavi (Lavi Jewellry) | Kiryat Gat (boutique, 64 Sderot Paz) + atelier à la Bourse [V] | https://lavijewellry.com/ | https://lavijewellry.com/diamond-jewelry/engagment-ring/ → fiche https://lavijewellry.com/lab-diamond-oval-solitaire-pave-engagement-ring-white-gold-14k/ | non : sélecteur de forme sur l'accueil, taille sur fiche ; sur mesure avec **modèle 3D et devis décomposé pierre, or, façon** [V] | robots.txt : panier et `wc-ajax` interdits (ajout au panier non testé) | HE [V] | Naturel et synthétique, prix affichés (2 490 ₪ pour 1 ct synthétique), page « combien coûte une bague » ; parcours sur mesure le plus proche de JR Diamond (modèle 3D gratuit, prix décomposé, 1 à 2 semaines) [V]. **Audité.** |
| 4 | Danny Eliav | Jérusalem (19 King David St.) [V] | https://dannyeliav.com/ | https://dannyeliav.com/collections/engagement-rings | non ; une seule bague a une option « Natural / Lab Grown Diamond » [V] | aucun | EN [V] | Famille de joailliers depuis 4 générations à Jérusalem, public anglophone. 24 bagues de 520 à 26 000 $, prix en dollars [V : products.json]. |
| 5 | Berman Designers (ברמן מעצבים) | Moshav HaYogev, vallée de Jezreel [V] | https://berman-j.co.il/ | https://berman-j.co.il/collections/טבעות-אירוסין | non ; options or jaune ou rouge 18 k, mat ou brillant [V] | aucun | HE [V] | Studio du nord, 29 bagues de 3 038 à 32 384 ₪ ; séance « stylisme » pour refaire des bijoux anciens (proche de la transformation) [V]. |
| 6 | Baltinester Jewelry & Judaica | Jérusalem (31 rue de Jaffa) [V] | https://www.baltinesterjewelry.com/ | non ouverte (robots) ; alliances hébraïques en vente en ligne [E] | non [I] | **robots.txt interdit ClaudeBot, anthropic-ai, Claude-Web** | EN [V] | Depuis 1949, « diamond Hebrew wedding rings », expédition mondiale : spécialiste des alliances juives pour la diaspora et les olim anglophones [V : accueil]. |
| 7 | uDiamonds | Beer-Sheva (8A Henrietta Szold, Rasko City) + Ramat Gan (Tuval 23) [V] | https://udiamonds.co.il/ | non ouverte (robots) | non vu | **robots.txt interdit ClaudeBot, anthropic-ai, Claude-Web** | HE [V] | Seule enseigne de la Bourse avec une succursale dans le sud, page dédiée aux habitants de Beer-Sheva ; synthétique (« יהלומי מעבדה ») [V : accueil]. |
| 8 | Jerusalem Jeweler | Jérusalem [V] | https://jerusalemjeweler.com/ | https://jerusalemjeweler.com/product/engagement-ring-14k-gold-and-half-a-ct-natural-diamond-israel-solitaire-rings-for-women-jerusalem-jewelry/ | non | aucun | EN [V] | Bagues de fiançailles 14 k à diamant naturel, alliances hébraïques, prix en $, livraison express mondiale offerte : vise l'étranger plus que les olim [V]. |
| 9 | La Perla Jewelry | non indiquée (tél. +972 77) [V] | https://lpj.co.il/ | https://lpj.co.il/shop/kolczo-zolotoe-22/ | non | aucun | RU (quelques textes EN) [V] | Site en russe pour les olim russophones : diamant naturel ou « лабораторный », fabrication ≤ 21 jours ouvrés, poinçon de l'Institut des normes, livraison offerte [V]. |
| 10 | Eli Paz | Tel-Aviv (35 rue Allenby) [V] | https://eli-paz.co.il/ru | https://eli-paz.co.il/ru (rubrique « Кольца для обручения с бриллиантами ») | non | aucun | RU, EN, HE [V] | Retenu pour le critère « olim russophones » malgré l'adresse à Tel-Aviv : catalogue en russe, prix en ₪, livraison en Israël et à l'étranger [V]. Faible intérêt pour la 3D. |

### Repérés, non retenus

- **Yvel** (Jérusalem, Motza ; vitrine à Mamilla [E]) : https://www.yvel.com/ répond 200 [V]. Grande marque nationale, mais la rubrique mariée (https://www.yvel.com/product-tag/bride-and-bridal-party/) ne montre que des perles [V]. Pas de bague de fiançailles en ligne relevée.
- **Muriel Gutgold** (https://www.gutgoldjewels.com/) : bagues de kiddouchin en argent « à la manière de l'Ari », de 53 à 326 ₪ [V]. Judaïca plus que joaillerie ; ville non trouvée.
- **Tachshitei Alice** (Beer-Sheva depuis 1984) : https://alice.jewelry/ répond 200, mais la page est vide sans JavaScript [V] ; non approfondi.
- Hors territoire, rencontrés en route : Doron Merav (Bourse, https://www.doronmerav.co.il/), Ziv-Or (Bourse), Rimon (Herzliya), Yoram Shlain (Petah Tikva), Sayag (Bourse), IDT et BrillRings (sites russes de la Bourse) [V ou E].

### Statut d'audit (mise à jour du 16/11/2026)

| Acteur | Statut | Rapport |
|---|---|---|
| L'Émeraude Paris, Alpha Gold, Lavi | audités le 15/11 | `lemeraude-paris.md`, `alpha-gold.md`, `lavi-jewellry.md` |
| Danny Eliav | **partiel** : catalogue (flux `products.json`), fiche et politique lus ; ajout au panier non réalisé (`/cart/add.js` interdit) | `danny-eliav.md` |
| Berman Designers | **partiel** : fiche, FAQ et conditions lues ; ajout au panier non réalisé (`/cart/add` interdit) | `berman-designers.md` |
| Jerusalem Jeweler | **complet jusqu'au panier** (`/cart/`) | `jerusalem-jeweler.md` |
| Eli Paz | **bloqué** : accueil lu avec curl (200), puis **403** sur la fiche produit dans le navigateur ; aucun nouvel essai | `eli-paz.md` |
| La Perla | **complet jusqu'au panier** (`/cart/`) ; l'adresse « Harakon 9, Ramat Gan » figure en pied de page (l'inventaire n'en donnait pas) | `la-perla.md` |
| Baltinester, uDiamonds | non audités : robots.txt qui interdit `ClaudeBot` (voir plus haut) | — |

## Terme employé pour le diamant synthétique

| Site | Terme | Preuve |
|---|---|---|
| Alpha Gold | **יהלום מעבדה** ; en anglais « lab-grown diamond » ; la moissanite n'est jamais appelée « diamant » | fiche, page « גילוי נאות » [V] |
| Lavi | **יהלום מעבדה / יהלומי מעבדה** | catalogue, fiche, guide des prix [V] |
| uDiamonds | **יהלומי מעבדה** | accueil [V] |
| Danny Eliav, Baltinester | « Lab Grown Diamond », « Lab-Grown Diamond » | products.json, accueil [V] |
| La Perla | « лабораторные бриллианты » (« diamants de laboratoire ») | accueil [V] |
| L'Émeraude Paris | aucun : le configurateur ne propose que « Diamant brillant » | /sur-mesure [V] |
| Berman, Jerusalem Jeweler, Eli Paz | aucun (naturel seulement, ou non mentionné) | pages lues [V] |

Conclusion [I] : « יהלום מעבדה » reste le terme hébreu d'usage dans ce territoire comme à la Bourse ; « סינתטי » n'a été vu sur aucun site.

## Sources (lues le 15/11/2026)

- robots.txt : alpha-gold.co.il, lavijewellry.com, lemeraude-paris.com, dannyeliav.com, berman-j.co.il, www.baltinesterjewelry.com, udiamonds.co.il, jerusalemjeweler.com, lpj.co.il, eli-paz.co.il, www.yvel.com, www.gutgoldjewels.com, alice.jewelry, www.doronmerav.co.il, rimon-jewelry.co.il [V]
- L'Émeraude Paris : https://lemeraude-paris.com/ · /sur-mesure · /services · /conditions · /contact · /temoignages · /galerie · /notre-maison
- Alpha Gold : https://alpha-gold.co.il/ · /collections/engagement-rings · /product/rosalyn-round-solitaire-ring-2ct-2000 · /product/penny-round-ring-2ct-785b · /legal/shipping-returns · /legal/warranty · /cancel · /legal/lab-grown-disclosure · /faq · /about · /guides/gold-hallmark-14k · /guides/ring-size-guide · /en/product/rosalyn-round-solitaire-ring-2ct-2000 · /cart
- Lavi : https://lavijewellry.com/ · /diamond-jewelry/engagment-ring/ · /lab-diamond-oval-solitaire-pave-engagement-ring-white-gold-14k/ · /engagement-ring-price/ · /shipping-policy/ · /refund-policy/ · /we-are-lavi-jewelry/ · /faq/ · /labgrown-diamonds/
- Danny Eliav : https://dannyeliav.com/ · /collections/engagement-rings · /collections/engagement-rings/products.json
- Berman : https://berman-j.co.il/ · /collections/טבעות-אירוסין/products.json
- Baltinester : https://www.baltinesterjewelry.com/ (accueil seulement) ; extraits de recherche baltinesterjewelry.com/?p=199109 et resellerratings.com [E]
- uDiamonds : https://udiamonds.co.il/ (accueil seulement) ; extrait de recherche (Beer-Sheva) [E]
- Jerusalem Jeweler : https://jerusalemjeweler.com/ · fiche citée ci-dessus
- La Perla : https://lpj.co.il/ · /shop/kolczo-zolotoe-22/ · /contact-2/
- Eli Paz : https://eli-paz.co.il/ru
- Yvel : https://www.yvel.com/ · /product-tag/bride-and-bridal-party/ ; Gutgold : https://www.gutgoldjewels.com/ ; Alice : https://alice.jewelry/
- Recherche : WebSearch (requêtes génériques en hébreu, anglais, français, russe), Parallel Search (une requête : annuaire https://www.mitchatnim.co.il/wedding/engagement-rings/haifa/ et https://lavijewellry.com/)
