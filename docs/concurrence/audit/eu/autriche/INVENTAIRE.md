# Autriche : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond en Europe. Il complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun autrichien) sans le refaire.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

Méthode : recherche web générique en allemand (Parallel Search) ; pour chaque candidat, `robots.cjs` puis une page ouverte dans Chromium (identité par défaut, aucun contournement), au plus une page toutes les 2 secondes par site. Aucun formulaire, compte, chat ni WhatsApp ouvert.

Terme du diamant synthétique en Autriche : « Labordiamant » ou « Lab-Grown » (Barry's, Feichtinger : « Lab Grown Diamond », « im Labor gezüchtet ») [V]. Aucun site n'emploie « synthetisch ». Je n'ai pas trouvé de règle autrichienne propre au libellé ; la profession allemande recommande « synthetisch » (voir le fichier Europe) [I].

## À retenir

- Le pays a **un vrai configurateur 3D, Feichtinger (Graz)**, mais il ne couvre que les **alliances** (Ehering). Les bagues de fiançailles y sont des fiches à options, sans visuel 3D [V].
- Le même moteur de configurateur d'alliances (Trauring) se retrouve chez d'autres détaillants (Waschier, Brautgeflüster, 123GOLD) [I, d'après leurs textes]. Je ne l'ai pas vérifié site par site.
- **Deux sites bloquent les robots** : 123GOLD (403 dès la première page) et Dorotheum Juwelier (Cloudflare, 403) [V].
- Seul **Barry's Juwelier (Vienne)** met le synthétique au centre, avec un « concierge » WhatsApp ; pas de configurateur [V].

## Classement

Critères : proximité du modèle (atelier, fabrication à la commande), qualité du configurateur, transparence du prix, preuves de fabrication, offre en synthétique.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Feichtinger Schmuckhandel | Graz (20 filiales) | https://feichtinger-shop.com/ | https://feichtinger-shop.com/products/ehering-konfigurator | Oui, 3D, alliances seulement : 6 étapes, prix en direct (V). Fiches de bagues de fiançailles à options, naturel ou « Lab-Grown » (V) | Aucun (V) | DE (V) | Atelier de 35 orfèvres à Graz ; prix recalculé à chaque option ; « Der Weg Ihres Schmuckstücks » (V) |
| 2 | 123GOLD (réseau Trauring-Lounge, Trauring-Zentrum Wien) | Vienne, Graz, Salzbourg, Villach | https://www.123gold.at/ | https://www.123gold.at/online-bestellen | Oui, alliances : devis en ligne, prix à jour, plateforme client (V, texte de recherche) | **Bloqué : 403 (V)** | DE, EN (V, extraits) | Premier spécialiste d'alliances annoncé ; non audité |
| 3 | Barry's Juwelier | Vienne (Seilergasse 1) | https://barrysjuwelier.com/ | https://barrysjuwelier.com/collections/lab-grown-verlobungsringe | Non. Fiches produit sans option, prix affichés, « Ring Concierge » WhatsApp (V) | Aucun (V) | DE, EN (V) | Synthétique et naturel, 14 k, IGI, devise ILS proposée (V) |
| 4 | Juwelier Waschier | Wolfsberg (Carinthie) | https://juwelier-waschier.at/ | https://juwelier-waschier.at/info/trauringkonfigurator | Oui, « 3D Trauringkonfigurator » annoncé (V, texte) ; non ouvert | Aucun (V) | DE (V) | Détaillant régional, même type d'outil ; 200 en Chromium (V) |
| 5 | Brautgeflüster | Villach | https://www.brautgefluester.at/ | https://www.brautgefluester.at/ringe | Oui, « 3D Designer » d'alliances, fabrication Rauschmayer (Allemagne), prix indexé sur l'or (V, texte) | Aucun (V) | DE (V) | Boutique de mariage ; sur rendez-vous |
| 6 | Goldschmiede Nikl | Vienne | https://www.nikl.at/ | https://www.nikl.at/ | Non. Boutique en ligne, fabrication sur mesure en atelier, or recyclé, « Familiengold » (V) | Aucun (V) | DE (V) | Transformation d'or de famille, atelier de 3e génération |
| 7 | La Pantera | Vienne | https://www.lapantera.at/ | https://www.lapantera.at/verlobungsringe | Non. Offres « Express, Customized, Bespoke » ; atelier avec gemmologue (V) | Aucun (V) | DE (V) | Choix de la pierre et suivi des étapes ; page datée de 2022 (V) |
| 8 | KERRI Design | Vienne | https://kerri.design/ | https://kerri.design/ | Non. Sur mesure, premier entretien gratuit, scan 3D des mains (V) | Aucun (V) | DE (V) | Bagues « à histoire », ateliers d'alliances |
| 9 | Dorotheum Juwelier | Vienne, 26 filiales | https://www.dorotheum-juwelier.com/ | https://www.dorotheum-juwelier.com/schmuck/ringe/verlobungsringe | Non (I) ; retours 14 j, 8 semaines pour les membres (V, extrait) | **Bloqué : Cloudflare 403 (V)** | DE (V) | Grande marque nationale ; non audité |
| 10 | JUWELIER.at (société allemande de Pforzheim) | Pforzheim, vente en Autriche | https://www.juwelier.at/ | https://www.juwelier.at/ | Oui, modèles configurables, livraison express 72 h, retour 101 jours (V, extrait) | Aucun (V) | 6 langues (V) | Même exploitant que verlobungsringe.de, déjà dans l'inventaire Europe ; pas un acteur autrichien |

## Audits réalisés

Les deux premiers sites qui ne bloquent pas : **Feichtinger** (`feichtinger.md`) et **Barry's Juwelier** (`barrys-juwelier.md`). 123GOLD (rang 2) est bloqué.

## Écarts à signaler

- Feichtinger : son `robots.txt` renvoie vers un fichier `agents.md` qui demande aux agents d'utiliser des interfaces dédiées pour les achats ; je n'ai fait aucun achat, aucune action de panier, seulement de la lecture.
- Aucun chemin interdit n'a été ouvert. Les boutons d'ajout au panier n'ont pas été actionnés (chemin `/cart/` interdit).

## Sources

- Recherche : trauring-lounge-salzburg.at, juwelier-waschier.at, 123gold.at/online-bestellen, feichtinger-shop.com, barrysjuwelier.com, nikl.at, dorotheum-juwelier.com, brautgefluester.at, kerri.design, lapantera.at, juwelier.at (extraits de recherche du 15/11/2026).
- `robots.cjs` : AUTORISÉ pour toutes les adresses testées ; mais 123gold.at répond 403 à l'ouverture et Dorotheum affiche une page Cloudflare « Attention Required » (403) : les deux sont marqués bloqués, sans nouvel essai.
- Contrôles Chromium : `controls.cjs` sur chaque page de départ, 15/11/2026.
