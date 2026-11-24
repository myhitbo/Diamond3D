# Espagne : inventaire des joailliers qui vendent en ligne

Recensement pour l'étude de concurrence de JR Diamond en Europe. Date du lot : 15/11/2026 ; les contrôles de ce fichier ont été faits le 24/11/2026. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun espagnol) sans le refaire. Les sites européens à variante espagnole déjà inventoriés là sont DiamondsByMe (variante ES) et Verlobungsringe.de (version ES) : ils ne sont pas repris.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

Méthode : recherche web en espagnol (requêtes génériques) ; pour chaque candidat, `robots.cjs` puis curl avec en-tête Safari (code HTTP) ; Chromium (Playwright, identité par défaut) pour les deux sites audités. Aucun formulaire, compte, chat ni WhatsApp ouvert.

## Ce qu'il faut retenir

- **Aucun constructeur de bague de fiançailles de type « monture + diamant » n'a été trouvé chez un joaillier espagnol** lisible par les robots (V pour les pages lues ; I pour le reste du marché). Les acteurs espagnols de fiançailles vendent des fiches à options (The Bright Club, Omara) ou du sur-mesure par échange (Bravora, SVK, Diamlab). Les vrais configurateurs sont : celui de **Novita Diamonds** (société australienne, showrooms à Barcelone et Madrid), celui d'**INDIVI** (société lituano-lettone, salon à Madrid, déjà audité en Lettonie), et les **configurateurs d'alliances** (OroAlianzas, Aliances Experience, Duoo, Joyería Prieto) (V pour leur existence).
- **Le seul configurateur 3D espagnol audité : OroAlianzas** (Leganés, Madrid), alliances uniquement, prix en direct, partage par lien (V, voir `oroalianzas.md`).
- **Terme employé pour le diamant synthétique** : « diamante de laboratorio » partout (V : The Bright Club, Omara, Novita, Diamlab, Bravora) ; « diamantes cultivados en laboratorio » (V : Novita, Diamlab) ; « sintético / sintética » seulement pour l'émeraude et le saphir (V : Torres Joyeros « esmeralda sintética » ; Bright Club « recristalizados »). « Diamante sintético » comme terme de l'offre n'a pas été relevé. Règle espagnole d'étiquetage : non vérifiée.
- **Deux pages de panier sont interdites par robots.txt** (OroAlianzas `/carrito/`, The Bright Club `/cart`) : le parcours s'arrête avant le panier sur les deux sites audités.
- Beaucoup de sites espagnols affichent des prix sur la fiche mais **vendent le sur-mesure hors ligne** (formulaire, WhatsApp, rendez-vous).

## Classement

Critères, dans l'ordre : lien entre l'image et l'objet fabriqué, qualité du configurateur ou de la fiche à options, transparence du prix, preuves de fabrication, offre en synthétique, proximité du modèle (atelier, fabrication à la commande).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Novita Diamonds España (société australienne, 300 diamants en stock « à voir en personne ») | Barcelone, Madrid (showrooms) | https://novitadiamonds.es/ | https://novitadiamonds.es/seleccion-anillo-diamante-de-laboratorio/diseno/anillo | **Oui** : diamant puis monture, ou monture puis diamant (V : liens `/create/ring/settings`, `/diseno/diamantes` dans la page d'accueil) | **Partiel** : Chromium ordinateur a reçu **403** une fois (24/11) ; affichage iPhone : 200, 115 contrôles. Curl : 200. Pas de nouvel essai. robots.txt : autorisé | ES, EN | Constructeur le plus complet du pays ; mais société étrangère et audit non fait (blocage ordinateur) |
| 2 | OroAlianzas (Millán Tudela S.L.) | Leganés (Madrid) | https://oroalianzas.es/ | https://oroalianzas.es/configurador-alianzas-boda/ | **Oui, 3D, 7 étapes, prix en direct** (alliances) | Aucun ; panier interdit (`/carrito/`) | ES | Meilleur visuel 3D espagnol ; pertinent pour l'alliance de kiddouchin (bande lisse). **Audité** |
| 3 | The Bright Club | Madrid (showroom Arenal 7) | https://thebrightclub.es/ | https://thebrightclub.es/products/anillo-duchess | Fiche à options (forme, or, carat, bras, taille, gravure), pas de 3D | Aucun ; panier interdit (`/cart`) | ES, EN | Marque espagnole en synthétique, prix de 1 150 €, IGI/GIA, délai 20-25 jours. **Audité** |
| 4 | Bravora | Barcelone (atelier sans boutique) | https://www.bravorajewelry.com/ | https://www.bravorajewelry.com/pages/disena-tu-anillo | Non : sur-mesure par échange, rendu 3D après devis (V) ; fiches avec « à partir de » | Aucun | ES, EN | Sur-mesure en 6 semaines, rendus 3D illimités, prix décomposé annoncé (V) ; proche du positionnement |
| 5 | Joyería Prieto | Barakaldo (Bizkaia), showrooms Madrid, Barcelone, Valence | https://joyeriaprieto.com/ | https://joyeriaprieto.com/configurador/ | Page de 4 configurateurs d'alliances, dont un de Breuning (`konfigurator.breuning.de`) : outil de tiers (V) | Aucun | ES | Alliances, essai à domicile, certificat GIA ; configurateurs tiers |
| 6 | Aliances Experience (rosjoyeros.com, redirigé) | Barcelone | https://aliancesexperience.com/ | https://aliancesexperience.com/ (configurateur annoncé sur l'accueil, adresse exacte non relevée) | Annoncé : « plus de 200 combinaisons » (V, extrait) | rosjoyeros.com : robots.txt illisible (**INCONNU**) ; aliancesexperience.com : autorisé | ES, CA [I] | Alliances ; non audité (rang 6) |
| 7 | Duoo (Fabrior Zaragoza S.L.) | Saragosse | https://www.duoo.es/ | https://shop.duoo.es/configurador.aspx | Configurateur d'alliances (V : lien) | Aucun (pas de robots.txt) | ES | Fabricant d'alliances ; non audité |
| 8 | Diamlab (Diamina S.L.U.) | Barcelone | https://diamlab.es/ | https://diamlab.es/anillos-de-compromiso/ | Pas de configurateur : choix d'un modèle et de la forme, offre en moins d'une heure (V) | Aucun | ES, FR [I] | Synthétique IGI, fabrication 15 à 20 jours ouvrés, 3D après devis ; non audité |
| 9 | Omara Jewelry (Omara s.r.o., société tchèque, adresse à Barcelone) | Barcelone | https://omara.es/ | https://omara.es/anillos-de-compromiso-personalizados | Filtres et fiches (forme, carat, origine naturel ou synthétique, métal) + pierre au choix (V : accueil) | Aucun | ES, autres [I] | Offre naturelle et synthétique, prix du bijou fini ; société étrangère |
| 10 | Nicols (Nicols 1917) | Madrid, Valence | https://www.nicols.es/ | https://www.nicols.es/es/anillos-de-compromiso-pedida-49 | « Diséñalo con nosotros » (V : extrait) | **Bloqué** : 403 sur robots.txt et sur la page (curl) | ES | Joaillier familial depuis 1916, naturels GIA/IGI ; bloqué, non audité |

Sites vus et écartés du classement (V) : **INDIVI** (indivi.es, constructeur monture + diamant, salon à Madrid) : déjà audité en Lettonie (`../lettonie/indivi.md`), même plateforme. **SVK Joyeros** (Madrid, sur-mesure par échange, fourchettes de prix : dès 1 100 € naturel). **Eleka** (alliances, robots.txt illisible, bloqué). **Torres Joyeros** (Málaga), **Aristocrazy** (marque nationale), **Joyería Suárez** : prix affichés, aucun configurateur.

Les adresses du tableau répondent 200 en curl le 24/11 (V), sauf Nicols (403) et rosjoyeros.com (200 après redirection vers aliancesexperience.com).

## Audits

Les deux premiers sites qui ne bloquent pas les robots : **OroAlianzas** (`oroalianzas.md`) et **The Bright Club** (`the-bright-club.md`). Novita (rang 1) n'a pas été audité : un 403 en ordinateur a été traité comme un blocage, sans nouvel essai.

## Sources

- Recherches web Parallel Search (24/11/2026), requêtes génériques en espagnol sur configurateurs, alliances, diamants de laboratoire.
- Pages lues : https://thebrightclub.es/collections/anillos-de-compromiso ; https://novitadiamonds.es/ ; https://omara.es/ ; https://www.bravorajewelry.com/pages/disena-tu-anillo ; https://diamlab.es/ ; https://www.svkjoyeros.com/anillos-compromiso-personalizados ; https://joyeriaprieto.com/ ; https://oroalianzas.es/ ; https://www.duoo.es/ ; https://www.nupcialix.com/es/configuradores ; https://www.torresjoyeros.com/ (fiche, extrait).
- robots.txt : vérifiés avec l'outil du dépôt pour tous les sites cités.
