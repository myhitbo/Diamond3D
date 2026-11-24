# Suisse : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (marché étudié : Europe). Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (inventaire européen, 14 sites) sans le refaire. Edenly (n° 2 de cet inventaire, siège à Genève, boutique à Paris) y a déjà sa fiche : il n'est pas repris au classement ci-dessous pour éviter un doublon avec le groupe France. Sa page de départ y est donnée (`https://www.edenly.com/create-engagement.php`) et son robots.txt l'autorise (V, contrôle du 15/11).

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

Périmètre : vendeurs établis en Suisse, bagues de fiançailles ou alliances pour particuliers, avec configurateur, visuel 3D, sur mesure en ligne ou prix affichés. Grandes maisons internationales et grands magasins exclus. Deux marques nationales importantes (Bucherer, Gübelin) n'ont pas été auditées : elles ne sont pas apparues comme vendeurs en ligne de bagues de fiançailles configurables dans les recherches (I).

## Terme employé pour le diamant synthétique

| Langue | Terme observé | Où |
|---|---|---|
| Allemand | « Labordiamant », « Labor Diamant », « Labordiamanten » | 123gold.ch, Green World Diamonds (V, extraits de recherche) |
| Français | « diamants de synthèse » non relevé ; Lapis Luminis écrit « aucune [pierre] ne provient de laboratoires » | Lapis Luminis, FAQ (V) |
| Anglais | « lab-grown diamonds », « Laboratory diamond » | Estrell, Green World Diamonds (V) |

Aucun des sites lus n'emploie « synthétique » seul (V pour ceux lus). Je n'ai pas vérifié s'il existe une règle suisse d'étiquetage du synthétique (S : à demander à un juriste ; la règle française, décret 2002-65, ne s'applique pas ici).

## Classement

Intérêt pour JR Diamond : qualité du configurateur et lien entre l'image et l'objet, transparence du prix, preuves de fabrication, offre en synthétique. Toutes les adresses de « Page de départ » ont répondu 200, ou 301 vers la même page, à `curl` (en-tête Safari) le 15/11 (V).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Estrell | Zurich | https://estrell.com/ | https://estrell.com/ (menu « Configure Your Ring », adresse exacte non ouverte) | Oui, annoncé : « Engagement Ring Configurator » (V, accueil) | **Bloqué** : robots.txt illisible, HTTP 429 | EN | Synthétique IGI, dès 1 800 CHF, appel vidéo : le plus proche de JR Diamond. Non audité (règle de blocage) |
| 2 | Lapis Luminis (Call Me Gems SA) | Genève | https://www.lapisluminis.com/ | https://www.lapisluminis.com/shop | Oui : 5 modèles, options par liste déroulante sur fiche produit, sans visuel 3D | Aucun (Allow: /) | FR, EN | Prix en CHF, GIA, délai < 15 jours ouvrables annoncé. **Audité** : `lapis-luminis.md` |
| 3 | Hauthentic (Yazam Sàrl) | Genève | https://www.hauthentic.com/ | https://www.hauthentic.com/bijouterie-en-ligne/bague-de-fiancaille/ | Oui : parcours modèle, puis diamant, puis panier (3 étapes) | Aucun | FR, EN et autres | 226 pages de diamants certifiés, retour 30 jours, passeport du diamant. **Audité** : `hauthentic.md` |
| 4 | Oberturm Uhren & Schmuck | Suisse alémanique (ville non relevée) | https://oberturm.ch/ | https://oberturm.ch/pages/verlobungsringe-konfigurieren | Oui : « 3D-Konfigurator » (outil Fischer) pour fiançailles et alliances | Aucun (Allow: /) | DE | Vrai configurateur 3D, prix en direct. Non audité (limite de 2 audits) |
| 5 | Green World Diamonds | Zurich | https://www.greenworlddiamonds.ch/ | https://www.greenworlddiamonds.ch/en/engagement-rings | Non : catalogue avec filtres et prix « dès » TTC (8,1 % de TVA suisse) | Aucun | DE, EN | Synthétique IGI/GIA, « Swiss made ». Non audité |
| 6 | Zenubia Schmuck AG | Suisse alémanique (tél. 052) | https://zenubia-trauringe.ch/ | https://www.zenubia-trauringe.ch/ringe-selber-konfigurieren/ | Oui : 3D, alliances | Aucun | DE | Fabrication maison annoncée, garantie à vie. Non audité |
| 7 | uhrenschmuck24.ch (réseau Christ) | Suisse | https://www.uhrenschmuck24.ch/ | https://www.uhrenschmuck24.ch/trauringe/3d-konfigurator.html | Oui : 3D, alliances, prix total en direct (exemple 2 496 CHF, délai 3 à 5 semaines affichés) | Aucun | DE, EN | Exclut l'échange des alliances ; enregistrer/charger la configuration. Non audité |
| 8 | Bijouterie Balance | Lausanne | https://www.bijouterie-balance.ch/ | https://www.bijouterie-balance.ch/cr%C3%A9er-vos-alliances | Oui : « Configurateur 3D » d'alliances + e-shop de bagues en stock | Aucun (Allow: /) | FR | Alliances en CHF TTC. Non audité |
| 9 | 123GOLD | Zurich, Luzern | https://www.123gold.ch/ | https://www.123gold.ch/online-bestellen | Oui (alliances), catalogue de fiançailles avec filtre « Lab Grown » | **Bloqué** : robots.txt illisible (connexion coupée) | DE | Paiement de 50 % avant fabrication, délai 4 à 6 semaines (extrait de recherche). Non audité |
| 10 | GISELLE Fine Jewelry | Zurich | https://www.gisellejewelry.ch/ | https://www.gisellejewelry.ch/pages/verlobungsringe | Non : sur rendez-vous, prix affichés pour les pièces anciennes | Aucun (Allow: /) | DE, EN | Diamants antiques GIA, première mise à taille offerte. Non audité |

Bloqués ou hors périmètre, non audités : konfig.ch (H. Pfalzer, outil de configuration pour détaillants, robots.txt illisible) ; Daniel de Guy, Lausanne (HTTP 429) ; Diamonds Factory .ch et Glamira .ch (HTTP 403 ; entreprises non suisses, déclinaisons nationales de sites étrangers) ; Meister (fiches via détaillants).

## Observations utiles pour JR Diamond

- Il n'existe pas, dans ce qui a été trouvé, de concurrent suisse proposant à la fois configurateur 3D de bague de fiançailles et choix naturel ou synthétique avec prix en direct (I). Le 3D suisse porte sur les alliances (outils Fischer et similaires : Oberturm, uhrenschmuck24, Zenubia, Balance).
- Les deux sites audités affichent un prix **hors taxe** à l'étranger (V) ; Lapis Luminis écrit « Il n'existe aucun délai de rétractation dans la loi suisse » et déclare ses ventes définitives (V, CGV art. 6.1 et 6.3).

## Sources

- Recherches web génériques (Parallel Search), 15/11/2026.
- robots.txt contrôlé avec `robots.cjs` pour chaque adresse ci-dessus.
- https://www.lapisluminis.com/shop · https://www.lapisluminis.com/faq · https://www.hauthentic.com/bijouterie-en-ligne/bague-de-fiancaille/ · https://www.hauthentic.com/joaillerie/garanties/
- https://estrell.com/ · https://oberturm.ch/pages/verlobungsringe-konfigurieren · https://oberturm.ch/pages/trauringe-konfigurator · https://www.greenworlddiamonds.ch/en/engagement-rings · https://www.zenubia-trauringe.ch/verlobungsringe-schweiz · https://www.uhrenschmuck24.ch/en/trauringe/3d-konfigurator.html · https://www.bijouterie-balance.ch/cr%C3%A9er-vos-alliances · https://www.123gold.ch/online-bestellen · https://www.gisellejewelry.ch/pages/verlobungsringe · https://konfig.ch/
