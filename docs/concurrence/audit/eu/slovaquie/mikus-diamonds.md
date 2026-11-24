# Audit Mikuš Diamonds (Slovaquie)

- **Site** : Mikuš Diamonds · https://www.mikusdiamonds.sk/ (atelier à Trenčín, boutiques à Bratislava, Trenčín, Prešov ; le formulaire de rendez-vous cite aussi Banská Bystrica)
- **Page de départ** : https://www.mikusdiamonds.sk/kategoria/konfigurovatelne-zasnubne-prstene ; fiche auditée : https://www.mikusdiamonds.sk/produkt/3193-prsten-mary/konfiguracia/biele-zlato-prirodny-diamant-0-30-ct-smart
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366 × 900 ; affichage iPhone 13
- **Statut** : **complet** pour le configurateur et le panier (page `/kosik` atteinte, étape « livraison et paiement » non franchie).
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Catalogue `/kategoria/konfigurovatelne-zasnubne-prstene` | Environ 300 à 315 modèles (compteur « 315 nájdených » vu à l'ouverture), tri, filtre en tiroir (pierre, taille, prix, d'après la page) |
| 2. Fiche configurable | Métal (couleur d'or), pierre, carat, qualité, taille, garantie |
| 3. Garantie | Légale 2 ans, ou à vie avec service gratuit |
| 4. « Vložiť do košíka » | Ajout, puis panier |
| 5. Panier `/kosik` | Récapitulatif, retrait en boutique ou coursier en Slovaquie, 3 étapes (panier, livraison et paiement, coordonnées) |

## Contrôles vérifiés

Prix en euros TTC : première valeur avec garantie légale, deuxième avec garantie à vie.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Couleur d'or : blanc, jaune, rose (3 pastilles sans libellé) | boutons radio | Adresse et photos changent (`biele`, `zlte`, `ruzove`) ; or 14 kt dans les trois cas | inchangé : 1 369 € / 1 522 € | OK |
| Pierre : diamant naturel | radio | Texte « 0,30 ct, SI1, J, EXC, MEDIUM, certificat GIA » | 1 369 € / 1 522 € | OK |
| Pierre : rubis | radio | Adresse `rubin`, ligne de description du diamant absente | 1 269 € / 1 410 € | OK |
| Pierre : saphir | radio | Adresse `zafir` | 1 251 € / 1 390 € | OK |
| Pierre : émeraude | radio | Adresse `smaragd` | 1 089 € / 1 210 € | OK |
| Carat 0,30 ct (ø 4,30 mm) | radio | Adresse `0-30-ct` | 1 369 € / 1 522 € | OK |
| Carat 0,50 ct (ø 5,00 mm) | radio | Texte « 0,50 ct, SI1, J, EXC, MEDIUM, GIA » | 2 002 € / 2 225 € | OK |
| Carat 0,70 ct (ø 5,70 mm) | radio | idem 0,70 ct | 3 156 € / 3 507 € | OK |
| Qualité Basic (« nízka kvalita ») | radio | SI1, J, EXC, MEDIUM | 1 261 € / 1 402 € | OK |
| Qualité Smart (« dobrá voľba ») | radio | SI1, J, EXC, MEDIUM (défaut) | 1 369 € / 1 522 € | OK |
| Qualité Select (« náš tip ») | radio | SI1, H, EXC, MEDIUM | 1 493 € / 1 659 € | OK |
| Qualité Top (« vysoká kvalita ») | radio | VS1, F, 3×EXC, fluorescence NONE | 1 908 € / 2 121 € | OK |
| Les photos | — | Les images ne changent pas entre les 4 niveaux de qualité | — | constat [V] |
| Taille (liste) | liste | 48 à 57 (10 valeurs), défaut 52 | aucun | OK |
| Garantie légale 2 ans / à vie | radio | Bascule le prix ; au panier : « Bez Doživotnej záruky… −153 € » | + 153 € (1 522 € − 1 369 €) | OK |
| « Aký je rozdiel medzi zárukami? » | lien | Page de comparaison des garanties | — | OK (page lue) |
| Viac o hmotnosti / Viac o kvalite | liens | Explications | — | non cliqués ; texte « Sprievodca výberom diamantu » lu en bas de page |
| VLOŽIŤ DO KOŠÍKA | bouton | Aucune fenêtre ; l'article est dans `/kosik` (« Veľkosť 52 », 1 522 €, lignes de garantie) | cf. panier | OK |
| VIDIEŤ NAŽIVO | bouton | Tiroir « Dohodnúť stretnutie » : nom, e-mail, téléphone, boutique (Banská Bystrica, Bratislava, Prešov, Trenčín), note, consentement, reCAPTCHA | — | OK, non rempli |
| Vrátenie do 14 dní aj pri kúpe v klenotníctve | lien | Page des retours | — | OK (page lue) |
| Úprava veľkosti šperku zdarma | lien | Glossaire de la taille de bague | — | non ouvert |
| Vyrobené v Mikuš Diamonds na Slovensku | lien | Règlement de sécurité des produits | — | non ouvert |
| Galerie de la fiche | image | 3 vues de la bague et un croquis de main portant la bague | — | OK (capture) |
| Zoradiť (tri) du catalogue | liste | Libellé « Zoradiť : Obľúbené » ; options non ouvertes par le script | — | non testé |
| Filtrovať (tiroir) | bouton | Script n'a pas rouvert le tiroir | — | non testé ; filtres lus dans les résultats de recherche : pierre, taille 45 à 58, prix par tranches |
| PRIHLÁSENIE, recherche, cœur, panier (en-tête) | boutons | Non actionnés (compte, formulaire) | — | non testé |
| Bandeau de cookies | boutons | « Prijať všetko », « Odmietnuť všetko » | — | OK |
| Abonnement au bulletin | formulaire | Non rempli | — | non testé (règle) |

## Options disponibles

- **Métal** : or blanc, jaune, rose, tous en 14 kt (« 14 kt BIELE ZLATO », 2 g [V]). Pas d'or 18 k ni de platine sur la fiche.
- **Pierres** : diamant naturel (GIA dès 0,30 ct), rubis, saphir, émeraude. Pas de diamant synthétique : « Pracujeme výhradne s prírodnými diamantmi… laboratórne diamanty a syntetické kamene nepredávame » [V : https://www.mikusdiamonds.sk/kategoria/zasnubne-prstene].
- **Carat** : 0,30 · 0,50 · 0,70. **Qualité** : Basic, Smart, Select, Top. **Forme** : non choisissable sur la fiche Mary (solitaire rond) ; modèles à pierre ovale dans le catalogue (Almira) [V].
- **Taille** : 48 à 57. **Gravure** : aucune option sur la fiche ; les bagues gravées sont exclues du retour de 14 jours [V : page de la catégorie].
- **Garantie** : légale 24 mois, ou à vie (99 ans) avec contrôles et nettoyage tous les 2 ans et remise en état de surface tous les 2 ans pendant 10 ans [V : https://www.mikusdiamonds.sk/dozivotna-zaruka-a-bezplatny-servis-sperkov].
- **Retrait ou livraison** : retrait en boutique (0 €), retrait dans une autre boutique, coursier en Slovaquie (gratuit d'après la page de livraison) [V].

## Prix, délais, retours, garanties

- **Prix** : TTC, affiché avec « s DPH » ; deux prix côte à côte selon la garantie. Qualités expliquées en quatre degrés (« Basic… ponúkame len preto, že je častou ponukou u konkurencie ») [V]. Pas de décomposition métal / pierre / façon.
- **Délai** : « DO 7 DNÍ — Garantovaná doba výroby šperku aj s doručením » sur la fiche ; certains modèles 21 jours (catalogue) [V].
- **Livraison** : coursier gratuit en Slovaquie, retrait gratuit ; hors Slovaquie, contacter le magasin [V : https://www.mikusdiamonds.sk/doprava-a-platba].
- **Paiement** : carte (Maestro, Visa, Mastercard, Apple Pay, Google Pay) via finby, ou virement [V : même page ; non vu à la caisse].
- **Retours** : 14 jours sans motif ; exceptions : bagues faites sur mesure hors offre et bagues gravées [V : page de la catégorie, citation vue en recherche]. Pour certaines bagues, retour 14 jours aussi après un achat en boutique [V].
- **Garanties** : légale 24 mois ; option à vie + 153 € sur la fiche testée [V].
- **Certificats** : GIA pour chaque diamant dès 0,30 ct ; certificat du Slovenský gemologický inštitút (SGI) sur chaque bijou [V].

## Confiance et service

- Rendez-vous en boutique (« Vidieť naživo ») avec réponse promise le jour ouvré suivant ; 4 boutiques [V].
- Contenu pédagogique : académie, guide de choix, vidéo « Certifikát rozdiel neodhalí » (deux diamants au même certificat peuvent différer) [V : catalogue].
- Langue : slovaque. Devise : euro. Avis clients : non relevés. Fabrication : atelier à Trenčín annoncé, page « Vlastná výroba šperkov » (non détaillée ici) ; pas de photos de commande [V].
- Libellé du synthétique : « laboratórne diamanty a syntetické kamene » (produit non vendu) [V].

## Points forts à retenir pour JR Diamond

1. **Qualité de pierre en quatre degrés lisibles** (couleur, pureté, taille, fluorescence détaillées à chaque degré), prix recalculé immédiatement [V : relevés ci-dessus].
2. **Aveu écrit sur le niveau d'entrée** : Basic « uniquement parce que c'est l'offre courante chez les concurrents » ; transparence sur ce que le certificat ne dit pas [V].
3. **Délai garanti « jusqu'à 7 jours, livraison comprise »** affiché sur la fiche [V].
4. **Garantie à vie vendue comme option** avec prix et contenu détaillé (+ 153 € ici) [V].
5. **Prix TTC et retrait gratuit en boutique** visibles dans le panier [V].
6. **Configuration dans l'adresse** (`/konfiguracia/biele-zlato-prirodny-diamant-0-30-ct-smart`) [V].
7. **« Vrátenie do 14 dní aj pri kúpe v klenotníctve »** : promesse de retour même à la boutique [V].

## Défauts observés

- **Aucun diamant synthétique, aucun 18 k ni platine** sur les bagues configurables [V].
- **Pas de visuel 3D, 360° ni vidéo** : 4 photos ou croquis, identiques d'un niveau de qualité à l'autre [V].
- **Pastilles de couleur sans libellé** (accessibilité) [V].
- **Carat limité à 3 valeurs** (0,30 à 0,70 ct) ; prix qui double de 0,30 à 0,70 ct sans explication du saut [V].
- **Rubis, saphir, émeraude** : la ligne « Centrálny diamant : … » disparaît ; ce que la page affiche à la place n'a pas été relevé [V pour la disparition].
- **Paiement et frais** non visibles au panier : l'étape « doprava a platba » n'a pas été franchie [V].

## Limites de l'audit

- Étape « livraison et paiement » non franchie (formulaire, règle de lecture seule) : moyens de paiement lus seulement sur la page de règles.
- Le tiroir de filtres, le tri du catalogue, les liens « Viac o hmotnosti / kvalite », les formulaires (compte, bulletin, rendez-vous) n'ont pas été actionnés.
- Une seule fiche (Mary, bague solitaire) testée à fond ; les modèles à halo ou à autres formes peuvent proposer d'autres options [I].
- Temps d'apparition du visuel principal (HTML chargé + première image large), une à trois mesures : **ordinateur 3,1 à 4,4 s** (4,4 ; 3,5 ; 3,1), **iPhone 13 2,5 s** [V].
- Aucune erreur de réseau ni erreur JavaScript relevée pendant les parcours [V].
- Page de retours : 30 000 caractères, lue en diagonale ; seules les phrases citées sont vérifiées.

## Sources

- https://www.mikusdiamonds.sk/ · https://www.mikusdiamonds.sk/kategoria/zasnubne-prstene · https://www.mikusdiamonds.sk/kategoria/konfigurovatelne-zasnubne-prstene
- Fiche : https://www.mikusdiamonds.sk/produkt/3193-prsten-mary/konfiguracia/biele-zlato-prirodny-diamant-0-30-ct-smart · https://www.mikusdiamonds.sk/kosik
- https://www.mikusdiamonds.sk/doprava-a-platba · https://www.mikusdiamonds.sk/vratenie-tovaru-a-reklamacie · https://www.mikusdiamonds.sk/dozivotna-zaruka-a-bezplatny-servis-sperkov · https://www.mikusdiamonds.sk/vlastna-vyroba-sperkov
- https://www.mikusdiamonds.sk/robots.txt (seul `/dashboard/` interdit)
