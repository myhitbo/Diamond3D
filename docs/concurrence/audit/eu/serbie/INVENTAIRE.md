# Serbie : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, dont aucun des 14 sites n'est serbe.

Périmètre : joailliers établis en Serbie qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode : recherche web générique en serbe (Parallel Search) ; `robots.cjs` sur chaque adresse avant ouverture ; lecture avec curl (identité par défaut) et Chromium (Playwright, identité par défaut, une page toutes les 2 s au plus par site) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Un vrai configurateur, et il ne fait que les alliances** : Zlatara Andrejević (Belgrade), `konfigurateur-burmi`, 7 étapes, 24 profils, 12 couleurs d'or, 14 ou 18 k, 11 finitions, 12 modes de sertissage, pierres naturelles ou synthétiques, gravure laser gratuite ; image mise à jour à chaque option [V]. Le prix se recalcule par un appel serveur interdit par `robots.txt` (voir le rapport) : il n'a donc pas pu être relevé option par option.
- **La bague de fiançailles d'Andrejević est un « presque configurateur »** : sur la fiche, carat de 0,42 à 0,60 ct, pureté, couleur, métal et taille, avec le prix et le délai affichés pour chaque choix (« 0,42 ct · 336.920 RSD · 28 dana ») ; pièce en stock ou « po meri » en 28 jours ; certificat GIA [V].
- **Zlatara AS (Novi Sad, Belgrade) vend des bagues à variantes** (métal × pierre : moissanite, synthétique, naturel SI, VS, VVS, platine sur certains modèles) avec un prix par variante, un panier fonctionnel, et un vrai parcours jusqu'au panier [V].
- **Le synthétique est déjà vendu partout, sous le nom « laboratorijski dijamant »** (aussi « lab-grown », « LG », « Lab Diamond ») [V]. « Sintetički dijamant » n'apparaît que comme explication de l'origine (« Izraz „sintetički dijamant" opisuje način nastanka », Zlatara AS) [V]. Aucune règle serbe imposant un terme n'a été trouvée [S : recherche non exhaustive]. Terme à retenir pour une page serbe : « laboratorijski dijamant ».
- **Monnaie : le dinar (RSD), TVA comprise** ; Andrejević et AS affichent 12 mensualités sans intérêt avec les cartes Banca Intesa [V].
- **Un site traité comme bloqué** : Zlatara Celesta (`robots.txt` illisible, HTTP 429) [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier trouvée sur les pages lues (Andrejević revendique un « atelier propre à Belgrade ») [V sur les pages lues ; I pour le reste du site].

## Classement

Intérêt pour JR Diamond, dans l'ordre : configurateur et lien entre image et objet fabriqué ; prix visible et expliqué ; synthétique proposé ; preuves de fabrication ; proximité du modèle (atelier qui fabrique).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Zlatara Andrejević (SZZTR Andrejević) | Belgrade, 6 boutiques, depuis 1934 [V] | https://www.zlatara.net/ | https://www.zlatara.net/konfigurator-burmi/ (alliances) ; bague : https://www.zlatara.net/proizvodi/verenicki-prsten-kp0550d050/ | Oui pour les alliances : 7 étapes, image réactualisée, code de configuration partageable, prix en direct (appel interdit par robots.txt). Bagues : sélecteurs carat, pureté, couleur avec prix [V] | Aucun blocage ; `robots.txt` interdit `/api/`, `/korpa/` (panier), `/porudzbina/`, `/nalog/`, `/pretraga/` [V] | SR, EN (`/en/wedding-band-configurator/`) [V] | Seul vrai configurateur serbe ; synthétique ou naturel au choix ; gravure laser gratuite ; acompte de 50 % annoncé ; audité |
| 2 | Zlatara AS (Wedding Centar Zlatara AS) | Novi Sad (Jevrejska 34) et Novi Beograd [V] | https://www.zlatara-as.rs/ | https://www.zlatara-as.rs/product/classics-prsten-k191-roze-zlato/ (fiche à variantes) ; catégorie : https://www.zlatara-as.rs/kategorija/verenicko-prstenje/ | Non ; variantes métal × pierre avec prix recalculé, 2 119 bagues dans la catégorie [V] | Aucun ; `robots.txt` interdit les URL de filtre (`?filter_`, `min_price`, etc.) [V] | SR [V] | Panier WooCommerce jusqu'à `/korpa/` ; moissanite, synthétique, naturel, platine ; retour et réclamation détaillés ; audité |
| 3 | Luminore Diamonds (marque du groupe Andrejević) | Belgrade [V] | https://luminorediamonds.com/ | https://luminorediamonds.com/kategorija/verenicko-prstenje-sa-laboratorijskim-dijamantima | Non [V] | Aucun ; `robots.txt` interdit tri, filtres, `?add-to-cart=` [V] | SR [V] | Marque dédiée au synthétique, « IGI pour chaque diamant » ; bagues et alliances ; pas audité (hors des 2 premiers) |
| 4 | Spenderella | Belgrade, Nušićeva 7a, depuis 1955 [V] | https://spenderella.rs/ | https://spenderella.rs/ | Non ; « izrada vereničkog prstena po želji », croquis devant le client [V] | Aucun (Allow: /) [V] | SR [V] | Production propre, « jusqu'à 35 % moins cher », prix et « U korpu » sur l'accueil ; « Official retailer by GIA » ; pas audité |
| 5 | Zlatara Mijić | Grocka et Novi Beograd [V] | https://www.zlataramijic.rs/ | https://www.zlataramijic.rs/ | Non [V] | Aucun (Allow: /) [V] | SR [V] | Alliances faites main depuis 1992, « lab dijamanti », diamants IGI ; commande en ligne annoncée ; pas audité |
| 6 | Zlatara Babić | Belgrade [V] | https://zlatarababic.rs/ | https://zlatarababic.rs/ | Non [V] | Aucun [V] | SR [V] | Atelier depuis 1970, « Babić Diamond » (diamants d'Anvers, expert IGI), synthétique « depuis peu » ; catalogue avec prix ; pas audité |
| 7 | NovaNada Zlatara | Novi Sad [V] | https://www.novanada-zlatara.rs/ | https://www.novanada-zlatara.rs/ | Non [V] | Aucun (Allow: /) [V] | SR [V] | Alliances et bagues faites main, 16 collections de 20 modèles, or ou argent ; offre peu documentée ; pas audité |
| 8 | Zlatara Celesta | Belgrade [I] | https://zlataracelesta.com/ | https://zlataracelesta.com/burme | Non [V] | **Bloqué** : `robots.txt` illisible (HTTP 429) → traité comme bloqué [V] | SR [V] | Alliances en or 585 avec filtres et gravure ; non auditable |
| (hors liste) | Breuning (configurateur allemand) | Allemagne | https://konfigurator.breuning.de/configurator | — | Oui, mais marque allemande et site externe : Andrejević l'ouvre dans une nouvelle fenêtre, la commande se fait en boutique [V] | Non examiné | DE | Seulement noté |

Toutes les adresses des colonnes « adresse » et « page de départ » ont répondu 200 le 15/11 (curl avec identité par défaut), sauf Celesta (429 sur `robots.txt`) et les adresses interdites par `robots.txt`, qui n'ont pas été ouvertes (`/korpa/` d'Andrejević) [V]. Les pages d'accueil des rangs 4 à 7 ont été lues (HTML), pas auditées.

## Audits réalisés

Les 2 premiers sites non bloqués de la liste :

| site | rapport | statut |
|---|---|---|
| Zlatara Andrejević | `zlatara-andrejevic.md` | partiel : configurateur parcouru en entier (image), prix des options non relevé (appel interdit), panier interdit par robots.txt |
| Zlatara AS | `zlatara-as.md` | complet jusqu'au panier ; taille et paiement final non vus |

## Sources

- Recherches web serbes : `zlatara.net/en/wedding-band-configurator`, `zlatara-as.rs/kategorija/verenicko-prstenje`, `zlatara-as.rs/laboratorijski-dijamanti`, `luminorediamonds.com`, `spenderella.rs`, `zlataramijic.rs`, `zlatarababic.rs`, `novanada-zlatara.rs`, `zlataracelesta.com/burme` [V].
- `robots.txt` lus : `zlatara.net`, `zlatara-as.rs`, `luminorediamonds.com`, `spenderella.rs`, `zlataramijic.rs`, `zlatarababic.rs`, `novanada-zlatara.rs`, `zlataracelesta.com` [V].
- Terminologie : AWDC / CIBJO Diamond Terminology Guideline (« synthetic », « laboratory-grown », « laboratory-created ») : https://cibjo.org/rstoolkit/diamond-terminology-guidelines/ ; loi serbe sur les objets en métaux précieux (JO RS 47/21) citée par https://www.dmdm.rs/en/vesti/arhiva-vesti-2021/zakon-o-predmetima-od-dragocenih-metala (ne traite pas du libellé du diamant synthétique) [V].
