# Saint-Marin : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond en Europe. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun saint-marinais) sans le refaire.

Marques : **V** vérifié (page lue ou résultat de contrôle, adresse en source) · **I** inféré (extrait d'index de recherche, déduction) · **S** supposé.

Périmètre : joailliers établis dans la République de Saint-Marin qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers. Grandes maisons internationales, grands magasins et places de marché exclus.

## Conclusion : aucun site pertinent, aucun audit

**Aucun joaillier établi à Saint-Marin avec une boutique en ligne de bagues de fiançailles ou d'alliances n'a été trouvé.** Ni configurateur, ni visuel 3D ou 360°, ni sur mesure en ligne, ni prix affichés. Le territoire n'a donc aucun site à auditer ; l'étape 2 n'a pas été faite.

- L'annuaire matrimonio.com ne liste que trois joailliers sur le territoire (Arzilli Gioielli, Ciacci Gioielleria, Jewelry World), **sans aucun site web renseigné** (V : https://www.matrimonio.com/gioielleria/san-marino, lu le 15/11). Une quatrième fiche, Klepto Gioielli, apparaît pour les alliances, « à partir de 500 € », avec personnalisation en boutique (I : https://www.matrimonio.com/fedi-nuziali/san-marino ; extrait de recherche, page non lue : 403 pour curl).
- Ciacci Gioielleria (Contrada del Collegio 37, centre historique) est détaillant officiel de montres Tudor, Longines, Hamilton et TAG Heuer (I : fiches de localisation de ces marques) ; aucun domaine propre ni boutique en ligne trouvé.
- Arzilli Gioielli : « plus de cinquante ans » de présence, description de boutique physique seulement (I : fiche matrimonio.com). Aucun site trouvé.
- Jewelry World : une seule fiche d'annuaire, sans adresse ni site (I).
- Klepto Gioielli : aucun site officiel trouvé (I).
- **Faux positif écarté** : DoGi / Dogi Gioielli (gioielleriadogi.it, robots.txt « Allow: / », page d'accueil 200, V) vend en ligne des bagues de promesse et des alliances, mais il est établi dans la province de Pescara (Abruzzes, Italie), pas à Saint-Marin (I : https://www.hamiltonwatch.com/en-us/store-locator/italy/abruzzo/pescara/dogi-gioielli). Il relève du marché italien ; je ne l'ai pas audité (hors territoire). La page d'accueil n'a livré ni texte exploitable ni liste de produits à la lecture (V : 200, contenu rendu par script).

## Blocage et adresses contrôlées

Le contrôle `robots.cjs` ne s'applique qu'à des adresses réelles. Les domaines que j'ai essayés (`ciacci.sm`, `arzilligioielli.com`, `dogigioielli.com`, `ciaccigioielli.com`, `arzilli.sm`, `jewelryworld.sm`, `gioielleriaarzilli.com`, `kleptogioielli.sm`) étaient **des devinettes, pas des adresses trouvées** : ils ont répondu INCONNU (connexion refusée ou 502, robots.txt illisible). Cela ne prouve rien sur les commerçants ; je ne les ai pas ouverts davantage. `kleptogioielli.com` et `dogigioielli.it` ont répondu AUTORISÉ, mais sans preuve qu'ils appartiennent aux commerçants cherchés : non retenus.

## Terme pour le diamant synthétique

Aucun joaillier saint-marinais observé, donc aucun terme relevé sur place. La langue du pays est l'italien. Les termes usuels en italien sont « diamante sintetico » et « diamante coltivato in laboratorio » (S : usage général, non observé à Saint-Marin). Aucune règle saint-marinaise sur la dénomination n'a été cherchée ni trouvée ; Saint-Marin est dans une union douanière avec l'Italie et utilise l'euro (S, connaissance générale).

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| — | Aucun acteur retenu | Saint-Marin | — | — | — | — | IT | Aucun joaillier saint-marinais n'a de boutique en ligne de bagues trouvée. Candidats d'annuaire (Arzilli, Ciacci, Jewelry World, Klepto) : boutiques physiques, sans site identifié ; non audités. |

## Pour la suite

Si le propriétaire veut aller plus loin : le registre des entreprises (Ufficio Industria, Artigianato e Commercio) ou une visite des boutiques du centre historique donneraient les domaines manquants. Le marché saint-marinais est trop petit pour peser ; les acheteurs locaux achètent probablement chez des vendeurs italiens (S).

## Sources

- https://www.matrimonio.com/gioielleria/san-marino (V, lue 15/11)
- https://www.matrimonio.com/gioielleria/repubblica-di-san-marino (I, résultat de recherche)
- https://www.matrimonio.com/fedi-nuziali/san-marino et https://www.matrimonio.com/fedi-nuziali/klepto-gioielli--e181968 (I, extraits)
- https://www.tudorwatch.com/en/retailers/details/italy/sm/sanmarino/15902-ciaccigioiellisanmarino et https://www.longines.com/store/id/ciacci-gioielleria-srl-repubblica-san-marino-874528 (I, extraits)
- https://www.hamiltonwatch.com/en-us/store-locator/italy/abruzzo/pescara/dogi-gioielli (I)
- https://quifinanza.it/lifestyle/gioielleria-dogi-pensa-ai-futuri-sposi-gli-anelli-di-fidanzamento-e-le-fedi-nuziali/663423/amp/ (V, lue)
- https://gioielleriadogi.it/ (V : robots AUTORISÉ, 200)
- Recherches web génériques en italien et en anglais (WebSearch), 15/11/2026.
