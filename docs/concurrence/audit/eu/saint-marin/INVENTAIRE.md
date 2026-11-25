# Saint-Marin : inventaire des joailliers qui vendent en ligne

Recensement du 15/11/2026 (repris le 25/11 après correction) pour l'étude de concurrence de JR Diamond en Europe. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun saint-marinais) sans le refaire.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré (extrait de recherche, déduction) · **S** supposé.

**Correction de la version précédente.** Elle concluait « aucun site pertinent » parce que l'annuaire matrimonio.com ne renseigne aucun site. C'était faux : trois boutiques en ligne de joailliers établis à Saint-Marin existent (autorisation d'e-commerce saint-marinaise affichée en pied de page) et deux d'entre elles ont été auditées. Aucun n'a de configurateur 3D, de visuel 360° ni de sur mesure en ligne : ce sont des catalogues de bijoux prêts à porter. Leur intérêt pour JR Diamond est d'être le référentiel du marché local (prix, retours, paiement), pas un concurrent de configurateur.

## Conclusion

- 5 joailliers établis à Saint-Marin avec une boutique en ligne qui vend des bagues, classés ci-dessous. **Aucun configurateur.** Pas de sur mesure en ligne trouvé chez aucun (V pour Arzilli et Aquamarina, I pour les autres).
- **Audités (2)** : ArzilliShop (rang 2) et Aquamarina Gioielli (rang 3). Le rang 1 (Lion Diamonds), d'abord écarté à tort, a été audité ensuite (`SYNTHESE_eu-6b.md`).
- Terme pour le diamant synthétique : **aucun relevé** sur ces sites. Les sites vendent « diamanti naturali » (Lion Diamonds, I) ou « diamante taglio brillante » sans préciser l'origine (Aquamarina, V). Usage général en italien : « diamante sintetico » ou « diamante coltivato in laboratorio » (S). Aucune règle saint-marinaise de dénomination cherchée ni trouvée ; Saint-Marin utilise l'euro et a une union douanière avec l'Italie (S, connaissance générale).

## Classement

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Lion Diamonds | Dogana (SM) | https://liondiamonds.it/ | https://liondiamonds.it/ (menu Anelli : solitaire, solitaire avec contour, trilogie, veretta) | Non (WooCommerce, catalogue) | Écarté le 25/11 à tort (coupure réseau passagère gardée en mémoire par l'outil) ; robots.txt relu le 25/11 : AUTORISÉ ; audité ensuite (`SYNTHESE_eu-6b.md`). Non ouvert | IT | Seul acteur spécialisé diamant : diamants naturels « colore F, purezza VS », solitaires, TAX FREE, sur rendez-vous, renvoie vers Rapaport (I : extrait de recherche) |
| 2 | ArzilliShop (Arzilli Gioielli) | San Marino Città | https://www.arzillishop.it/ | https://www.arzillishop.it/it/arzilli-oro-18kt.1.23.uw | Non | Aucun blocage ; `Crawl-delay: 10`, pages `.asp` d'ajax interdites | IT | Bijouterie de plus de 70 ans, bagues or 18 k « à poids » 157 € à 607 €, pierres = zircone ; fiche annuaire : alliances et bagues de fiançailles, sur mesure « oui » (V pour le site, I pour l'annuaire). **Audité** |
| 3 | Aquamarina Gioielli | San Marino Città | https://www.aquamarinagioielli.com/ | https://www.aquamarinagioielli.com/categoria-prodotto/anelli/ | Non | Aucun blocage ; panier, filtres et ajout au panier interdits par robots.txt | IT | Multimarque (Marco Bicego, Chimento, Raspini…), bagues à diamants de 2 300 à 4 300 € (−50 % affiché), garantie et emballage, guide des tailles. **Audité** |
| 4 | Ciacci Watches & Jewels | Saint-Marin (point de vente) ; siège Rimini | https://www.ciaccigioielleria.com/ | https://www.ciaccigioielleria.com/ | Non | Aucun (robots AUTORISÉ) | IT | Montres (Tudor, Longines) et joaillerie de marques ; siège légal à Rimini (Italie), donc au bord du périmètre ; rendez-vous en ligne ; non audité (hors des 2 premiers) |
| 5 | Marlù | Montegiardino (SM) | https://www.marlu.it/it/anelli-34 | idem | Non | Aucun | IT | Bijoux fantaisie (solitaire zircone 15 €) : prix de mode, sans rapport avec la bague de fiançailles ; non audité |

Écartés : Silver Planet (silverplanet.sm, Domagnano) : grossiste, ouvert aux revendeurs (V : page d'accueil lue via recherche) ; Klepto Gioielli (alliances dès 500 €, personnalisation en boutique, aucun site trouvé, I) ; Jewelry World (fiche d'annuaire sans site) ; DoGi (gioielleriadogi.it) : établi à Pescara, Italie, hors territoire.

## Blocage

Contrôle `robots.cjs` du 15/11 : AUTORISÉ pour arzillishop.it, aquamarinagioielli.com, ciaccigioielleria.com, marlu.it, silverplanet.sm. **INCONNU pour liondiamonds.it** (« robots.txt illisible : HTTP 0 »), deux essais. Je n'ai pas insisté. Un curl ultérieur sur son robots.txt a répondu (V : WooCommerce, interdit seulement `add-to-cart`, `wp-admin`, journaux) mais la règle de l'étude veut « INCONNU = bloqué » : site à ré-essayer avec l'outil corrigé.

## Pour la suite

Lion Diamonds est le seul acteur qui touche la bague en diamant (solitaire, trilogie) : à auditer si le contrôle robots passe. Le marché saint-marinais est petit ; les acheteurs italiens voisins relèvent du marché italien (S).

## Sources

- https://www.aquamarinagioielli.com/ ; https://www.arzillishop.it/ (V, lues le 15/11/2026)
- https://liondiamonds.it/ (I : extrait de recherche web ; robots.txt V par curl)
- https://www.ciaccigioielleria.com/ ; https://www.marlu.it/it/anelli-34 ; https://www.silverplanet.sm/ (I : extraits de recherche)
- https://www.matrimonio.com/gioielleria/san-marino ; https://www.matrimonio.com/gioielleria/arzilli-gioielli--e203122 ; https://www.matrimonio.com/fedi-nuziali/klepto-gioielli--e181968 (I)
- https://www.hamiltonwatch.com/en-us/store-locator/italy/abruzzo/pescara/dogi-gioielli (I : DoGi à Pescara)
- Recherche web générique en italien (Parallel Search), 15/11/2026.
