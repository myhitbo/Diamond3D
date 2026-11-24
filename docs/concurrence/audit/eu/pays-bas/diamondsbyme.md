# Audit : DiamondsByMe (Pays-Bas)

- **Site** : DiamondsByMe (DBM B.V.), version néerlandaise
- **Adresse de départ** : https://www.diamondsbyme.nl/verlovingsring/ (étape 1 du constructeur), fiche audité : https://www.diamondsbyme.nl/verlovingsringen/klassieke-gouden-lab-grown-diamanten-solitaire-verlovingsring-sierlijke-isa-1-ronde-vorm-0-70-crt/
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366 × 900 (ordinateur) et iPhone 13 (affichage, Playwright). WebGL logiciel (SwiftShader), donc les temps du 3D sont pessimistes.
- **Statut** : **partiel** (parcours jusqu'au panier fait ; filtres de la recherche de diamants, vue sur la main sur mobile et pages de retour détaillées non testés jusqu'au bout, voir « Limites »)
- `robots.txt` : `User-agent: *` / `Allow: /` (V, https://www.diamondsbyme.nl/robots.txt). Toutes les adresses ouvertes ont été contrôlées par `robots.cjs`.
- Marques : **V** vérifié (page lue ou contrôle actionné) · **I** inféré · **S** supposé.

## Parcours

Le constructeur est un fil en 3 étapes affiché en haut de chaque page (V) : « 1 Kies je model » → « 2 Kies je diamant » → « 3 Samenstellen voltooien ». On peut aussi partir du diamant (`/diamanten/`, « Start met een diamant »).

| Étape | Adresse | Options |
|---|---|---|
| 1 Modèle | `/verlovingsring/` (20 par page, 23 pages) | Filtres : pierres (26), forme (12), métal (4), carat (25). 322 contrôles sur la page (V) |
| Fiche du modèle | `/verlovingsringen/<modèle>/` | Pierres latérales oui/non ; taille de la pierre ; pierre centrale ; bande (métal, titre, bagues assorties) ; gravure intérieure ; taille de doigt ; livraison standard ou express ; panier ; réplique 3D en plastique |
| 2 Diamant | `/diamanten/?stone_type=lab…` | Recherche de pierres libres (naturelles, synthétiques, de couleur), 10 formes, carat 0,30 à 4, pureté, couleur, taille, polissage, symétrie, fluorescence, certificat, prix par carat ; liste ou grille |
| Fiche du diamant | `/start-with-a-diamond/?did=NV_…` | Prix, certificat IGI en PDF, livraison estimée, bouton panier |
| 3 Assemblage | retour à la fiche du modèle | Le prix du modèle est recalculé autour de la pierre choisie (« Custom diamant 4.2 mm ») |
| Panier | tiroir « Winkelmand » (pas de page séparée) | Récapitulatif, coffret offert, mètre de bague 3,49 €, date d'expédition, total, « Verder met afrekenen » |
| Sur mesure | `/zelf-ontwerpen/` | Parcours « Custom design » en 5 étapes, demande à démarrer par formulaire (non rempli) |

## Contrôles vérifiés

Fiche Isa 1, 0,70 ct, or 14 k jaune, affichage ordinateur. Le prix indiqué est le prix TTC néerlandais après sélection « NL / EUR » (remise de −25 % déjà incluse).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Terug / Home / Verlovingsringen / goud / lab grown diamant | bouton, liens | Fil d'Ariane vers les catégories | — | OK (V) |
| Aanpassen (en tête, étape 1) | lien | Retourne à `/verlovingsring/` | — | OK |
| Toon afmetingen | bouton | Affiche l'image avec les cotes, bascule mm ou pouces | — | OK |
| Vignette 360° | bouton | Ouvre une visionneuse 3D (WebGL) dans un panneau : glisser et molette tournent la bague ; compteur « Loading 0 à 100 % » | — | OK, lent (voir mesures) |
| Icône main (dans la 3D) | bouton | Passe à la vue sur la main 3D | — | OK, chargement jusqu'à 13 s |
| Vignette photo / vidéo | bouton | Zoom dans un panneau (2 images) ; 2 vidéos MP4 muettes en boucle (9 s et 13 s) | — | OK |
| Traditionele juwelier : ca. € 1.801,69 | bouton | Panneau « Waarom tonen we een geschatte prijs ? » : modèle direct atelier, sans grossiste ni stock | affiche | OK |
| Je bespaart : € 835,20 | bouton | Panneau « Zo realiseren we jouw voordeel » et formule du calcul | affiche | OK |
| Zijstenen ja/nee | 2 boutons | « Geen zijstenen » (par défaut) ou « Zijstenen » ; les variantes avec pierres latérales ont d'autres adresses (I) | change (I) | non cliqué |
| Steen grootte | ligne ouvrant un panneau | 15 tailles, 0,10 à 1,50 ct, avec prix | 0,10 ct : 543,59 ; 0,70 ct : 966,48 ; 1,50 ct : 1 529,13 | OK |
| Center steen | ligne ouvrant un panneau | 25 pierres (voir « Options ») + 2 qualités pour le diamant | 630,71 (zircone) à 2 545,53 (naturel VS/E) | OK |
| Qualité VS/G, VVS/D (synthétique) | boutons | VVS/D = 966,48. VS/G : le bouton panier se désactive, message « Dit product kan helaas niet besteld worden. » | — | **défaut** (V) |
| Qualité SI/G, VS/E (naturel) | boutons | Prix de la pierre naturelle | 1 710,63 ; 2 545,53 | OK |
| « Over lab-grown diamant » | bouton | Texte « un diamant synthétique est 100 % le même qu'un diamant minier… » | — | OK |
| Band : or 9 k, 14 k, 18 k | boutons | Recalcule le prix et l'image | 697,86 ; 966,48 ; 1 184,28 | OK |
| Band : witgoud, rosé goud | boutons | Change la teinte de l'image (fichier `…A-SI…`, `…A-RG…`) | wit 14 k 1 042,71 ; rosé 14 k 924,74 | OK |
| Band : platina | bouton | Boîte « Je materiaalkeuze » : ne se mélange pas avec l'or ; ANNULEREN ou DOORGAAN | 950 : 1 097,16 | OK |
| Aanschuifringen SR10A4H, SR20A4H, SR30A4 | 3 boutons | Bagues assorties (alliances d'accompagnement), prix proposés | 695,75 ; 804,65 ; 494,89 (14 k) | OK |
| Gravure binnenzijde | ligne ouvrant un panneau | Ligne présente (valeur « - » par défaut) ; contenu du panneau non relevé | — | non testé |
| Maat (liste) | menu | 47 choix : « Ik ken mijn ringmaat niet », puis 44 à 74 avec le diamètre en mm | taille 60 : +27,23 ; 74 : +85,31 | OK |
| Maatwijzer | bouton | Guide : « Vraag een gratis ringenbos aan » (kit de mesure gratuit) | — | OK |
| Standaard / Express | 2 radios | Standard : gratuit, expédié dans 16 jours (1/12) ; Express : +50 €, 2 jours (17/11) | +50 | OK |
| IN WINKELMAND | bouton | Ouvre le tiroir panier | — | OK |
| BESTEL EEN 3D PLASTIC REPLICA | bouton | Réplique plastique à essayer (non ajoutée au panier) | 12,40 à l'arrivée, 15,00 relevé après changement de métal et de taille | prix variable, non expliqué |
| 30 dagen retour / Jouw Visie, Ons Vakmanschap / Levenslange garantie | 3 boutons | Panneaux de texte (retour, prix le plus bas, garantie) | — | OK |
| OMSCHRIJVING / SPECIFICATIES / WAT KRIJG JE? | accordéons | Texte, caractéristiques (carat, couleur D, pureté VVS, certificat IGI, forme) | — | OK |
| Boutons 0,7 krt / D / VVS / « XXXN Report IGI » | boutons | Aucun panneau (4 essais, délai dépassé) | — | **non fonctionnel dans le test** |
| Chat, E-mail, 010-747 00 00 | boutons, liens | Chat non ouvert ; `mailto:info@diamondsbyme.nl` ; `tel:` | — | non ouvert / OK |
| Trustpilot | lien | https://nl.trustpilot.com/review/www.diamondsbyme.nl (non suivi) | — | non testé |
| NL / EUR | bouton | Fenêtre : destination (liste de pays), langue (plus de 20), devise (11) ; choisir « Netherlands » ajoute la TVA | 798,75 → 966,48 | OK |
| Fenêtre « JOIN THE DBM FAMILY » + teaser « Win ! » | fenêtre, bouton | Inscription e-mail pour un tirage de 500 € de crédit ; non remplie | — | non testé |
| Fenêtre géographique | fenêtre | « Het lijkt erop dat je in Verenigde Staten bent » : propose le site international | — | OK |
| Diamants : forme (10), carat, pureté (6), couleur (5), taille (4), « Meer filters », « Filters resetten », LIJST / GRID, tri | filtres | Les compteurs et la liste existent (naturel 64 123, synthétique 122 977, 24 par page) ; les clics sur Ovaal, VVS1, D, EX n'ont pas fait bouger le compteur | — | **non confirmé** (voir « Limites ») |
| Fiche diamant : IGI Report | lien | PDF du certificat sur `dnyvsyhu34v1w.cloudfront.net/pdf/LG821646747.pdf` (non ouvert) | — | non testé |
| Panier : Verwijderen, Selectie aanpassen, Toevoegen (mètre de bague), VERDER MET AFREKENEN | boutons, liens | Supprimer, modifier, ajouter 3,49 €, aller à la caisse (adresse `afosto.app/api/commerce/carts/…`) | 3,49 | caisse **non ouverte** (règle) |

## Options disponibles

- **Formes (liste des modèles)** : 12 filtres de forme ; sur le modèle Simone : rond, ovale, émeraude, marquise, radiant, coussin, asscher, coussin rectangle (8 variantes vues, V). Dans la recherche de diamants : rond, princess, coussin rectangle, ovale, poire, émeraude, cœur, radiant, asscher, marquise.
- **Pierre centrale (25)** : diamant naturel ; diamant synthétique ; synthétique bleu, rose, jaune, vert ; diamant noir ; saphir rose ; diamant brun ; saphir jaune ; saphir ; émeraude (smaragd) ; améthyste ; rubis ; aigue-marine ; citrine ; grenat ; péridot ; rhodolite ; quartz fumé ; topaze bleue ; morganite champagne ; tourmaline rose ; tourmaline verte ; zircone (V).
- **Prix de la pierre centrale (0,70 ct, or 14 k jaune)** : synthétique 966,48 · naturel SI/G 1 710,63 · naturel VS/E 2 545,53 · bleu 1 184,28 · rose 1 378,49 · jaune 1 084,46 · vert 1 247,81 · noir 824,91 · saphir 1 383,93 · émeraude 1 256,88 · rubis 1 583,58 · améthyste 670,64 · citrine 667,01 · grenat et péridot 661,56 · zircone 630,71 (V).
- **Métal** : or jaune 9 k (375), 14 k (585), 18 k (750) ; or blanc 14 k et 18 k ; or rosé 14 k et 18 k ; platine 950 (V). Le choix est modifiable ; le changement de platine demande confirmation.
- **Taille de la pierre** : 0,10 · 0,15 · 0,20 · 0,25 · 0,30 · 0,40 · 0,50 · 0,60 · 0,70 · 0,80 · 0,90 · 1,00 · 1,20 · 1,30 · 1,50 ct.
- **Taille de doigt** : « Ik ken mijn ringmaat niet » ou 44 à 74 (47 choix) ; supplément croissant au-delà de la taille courante.
- **Livraison** : standard (gratuit) ou express (+50 €) pour les articles en stock (V).
- **Gravure** : à l'intérieur ; la page « zelf ontwerpen » cite la gravure laser, qui allonge le délai (V).
- **Vues** : photos de studio (6), vidéos (2), 360°, vue sur la main 3D, image des cotes, vignette « sur la main » réelle (V).
- **Service** : chat, e-mail, téléphone (lundi à vendredi, 9 h à 17 h), showroom sur rendez-vous à Rhoon, mètre de bague gratuit ou à 3,49 €, réplique plastique, crédit de 500 € à gagner (V).

## Prix, délais, retours, garanties

- **Prix** : affiché TTC en EUR une fois « Netherlands » choisi. Un visiteur localisé aux États-Unis voit d'abord le prix hors TVA (798,75 contre 966,48 TTC) et une fenêtre de redirection (V).
- **Décomposition** : prix du modèle puis, à l'étape 3, ligne par ligne : bague (607,11 €), diamant (136,83 €) ; chaque ligne montre son rabais de −25 % (« 809,49 → 607,11 ») ; « Traditionele juwelier ca. 1 131,35 » et « Je bespaart 524,23 » (V). Le total du panier est 743,96 € alors que 607,11 + 136,83 donnent 743,94 € : écart de 0,02 € non expliqué (V).
- **Remise** : « BLACK FRIDAY DEAL : 25 % korting op het gehele assortiment » en bandeau ; le prix barré (1 288,65 €) est le prix avant remise. Je n'ai pas pu vérifier si cette remise est permanente (S).
- **Prix de référence** : « Traditionele juwelier ca. 1 801,69 » est une estimation de DBM, expliquée dans un panneau (V), non vérifiable (S).
- **Délai** : modèle en stock, 16 jours (expédié le 1/12 depuis le 15/11) en standard ; 17 jours avec le platine ; 2 jours en express ; panier : « verwachte verzenddatum do 3 december » avec un diamant et un modèle (V). La page sur mesure annonce 16 à 18 jours ouvrés, plus pour une pierre spéciale ou la gravure laser (V).
- **Retours** : 30 jours volontaires, 35 € de frais si l'on change d'avis ; retour gratuit pour une plainte justifiée ; le droit légal de rétractation reste valable (V, `/klantenservice/retour-en-ruilen/`). Pour un sieraad sur mesure, gravé ou avec pierre choisie, des questions dédiées existent mais leur réponse est repliée et n'a pas été lue (S).
- **Garantie** : « gratis levenslange garantie » contre les défauts de matériau et de fabrication ; l'usure normale est exclue (V, `/klantenservice/garantie-en-defecten/`).
- **Certificats** : certificat IGI pour une pierre ronde dès 0,30 ct et en général dès 0,50 ct pour les autres formes ; GIA, parfois HRD, pour le naturel (V, `/zelf-ontwerpen/`). Rapport IGI en PDF pour chaque pierre libre (V).
- **Libellé du synthétique** : « lab-grown diamant » partout, y compris dans le titre du produit ; page « Lab grown diamant » dans la base de connaissances (V). Jamais « synthétique ». Le texte affirme qu'« un lab-grown diamant est 100 % le même qu'un diamant de la mine » (V).
- **Langues et devises** : 35 variantes hreflang ; plus de 20 langues et 11 devises (EUR, USD, HKD, SGD, AUD, GBP, CHF, DKK, NOK, SEK, PLN) dans le sélecteur (V).
- **Moyens de paiement** : iDEAL, PayPal, carte (Mastercard, Visa, American Express), Apple Pay, Klarna, tous sans frais ; achat sur facture pour les entreprises (V).

## Confiance et service

- Widget Trustpilot dans l'en-tête et sur la fiche ; « 34 reviews » sur le modèle après choix d'un diamant (V). Note non relevée.
- Appartenance à Thuiswinkel Waarborg (lien vers le certificat) (V).
- Garantie de prix le plus bas : « Vind je een betere deal ? Wij passen de prijs aan ! » (V).
- Showroom au siège (Rhoon, sur rendez-vous), bureaux à Anvers, Londres et Duisbourg, ouverts seulement sur rendez-vous (V).
- Le site dit ne tenir aucun stock (`/onze-winkels/`) alors que la fiche annonce « Jouw ring is op voorraad ! » avec expédition express en 2 jours (V, deux pages) : contradiction à vérifier.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier sur la fiche ; textes seulement (« onze goudsmeden »). Le parcours sur mesure promet une image 3D par e-mail sous 8 jours ouvrés et une réplique plastique essayable (V).

## Points forts à retenir pour JR Diamond

1. **Prix expliqué en deux clics** : « Traditionele juwelier » et « Je bespaart » ouvrent chacun un panneau qui dit comment le calcul est fait (preuve : panneaux lus sur la fiche Isa 1). C'est la promesse « le prix est expliqué ». Le chiffre de comparaison reste invérifiable.
2. **Réplique 3D en plastique à 12,40 €** pour essayer la taille avant d'acheter (preuve : bouton « BESTEL EEN 3D PLASTIC REPLICA » sur chaque fiche) ; la demande de sur mesure donne droit à la réplique avant fabrication.
3. **Prix recalculé à chaque choix**, avec l'image qui change (or blanc, rosé, bleu, etc.) : 25 pierres et 6 métaux sur la même fiche (preuve : fichiers `…A-SI.B-DI…`, `…A-RG…`, `…B-DU…` observés dans les images).
4. **Naturel et synthétique à côté, pour la même monture** : 966,48 € (synthétique VVS/D) contre 1 710,63 € (naturel SI/G) sur la même bague (preuve : relevé du 15/11).
5. **Date d'expédition par variante** jusque dans le panier (« Verwachte verzenddatum ») ; le platine ajoute un jour (preuve : 16 j contre 17 j).
6. **Vue sur la main 3D et 360° tournant à la souris** (preuve : capture `vue_3d_main`).
7. **Rappel légal et commercial dit clairement** : 30 jours, 35 € si l'on change d'avis, droit légal conservé (preuve : `/klantenservice/retour-en-ruilen/`).

## Défauts observés

- **Un synthétique « VS/G » 0,70 ct est impossible à commander** : le bouton panier se désactive avec « Dit product kan helaas niet besteld worden » (V). Le choix est proposé mais non disponible.
- **Prix de la réplique 3D qui change** : 12,40 € à l'arrivée sur la fiche, 15,00 € après des changements de métal et de taille, sans explication (V).
- **Visiteur américain : prix hors TVA et fenêtre de redirection** qui masque la fiche (V). La TVA ne passe en TTC qu'après choix du pays.
- **Chargement de la 3D long** : le compteur « Loading » s'efface après environ 14 s pour la vue 360° et 13 s pour la vue main, en WebGL logiciel (V) ; sur du matériel réel, probablement moins (S).
- **Fenêtres commerciales qui couvrent la page** : inscription au tirage de 500 €, teaser « Win ! » (V).
- **Incohérence « pas de stock » / « op voorraad »** entre `/onze-winkels/` et la fiche (V).
- **Écart de 0,02 €** entre la somme des deux lignes du panier et le total (V).
- Boutons de spécifications (0,7 krt, D, VVS, rapport IGI) sans réaction pendant le test (V, 4 essais).

## Limites de l'audit

- Parcours profond fait sur un seul modèle (Isa 1) ; le modèle Simone et la liste ont été lus pour les variantes de forme. Pas de test des 12 formes ni des 23 pages de liste.
- Filtres de la recherche de diamants : les compteurs et la liste sont lus, mais les clics sur Ovaal, VVS1, D et EX n'ont pas modifié le total (122 977) pendant le test. Je ne sais pas si le filtre est lent ou si le clic n'a pas atteint le bouton (S).
- Pas de test du 360° sur iPhone : le bouton 360 de l'ordinateur est absent de l'affichage mobile, où la 3D est intégrée à l'image principale (canevas de 360 × 360 observé) ; la vue main mobile s'est chargée en 13 s via une vignette, un clic sur cette vignette a expiré une fois.
- Réponses repliées de la page « Retourneren » (sur mesure, gravé, pierre choisie) non lues.
- Panneau « Gravure binnenzijde » : contenu précis (polices, nombre de caractères, prix) non relevé.
- Chat, Trustpilot, formulaire d'inscription, caisse, PDF de certificat : non ouverts (règles de l'étude).
- Chargement mesuré en Chromium avec WebGL logiciel : temps pessimistes.

## Mesures

| Mesure | Ordinateur | Affichage iPhone 13 |
|---|---|---|
| TTFB de la fiche | 498 à 677 ms | 799 ms |
| Premier contenu (paragraphe) / image principale | 1 092 ms / 1 456 ms | image V0 visible à 1 207 ms |
| DOMContentLoaded | 2 023 à 2 848 ms | 2 306 ms |
| Vue 3D : panneau visible | 351 ms | non mesuré |
| Vue 3D : compteur à 100 % puis texte effacé | 0,7 à 2,4 s puis ≈ 14 s | ≈ 13 s (vue main) |

## Sources

- https://www.diamondsbyme.nl/verlovingsring/ et fiche Isa 1 (adresse longue en en-tête), lues et actionnées le 15/11/2026.
- https://www.diamondsbyme.nl/diamanten/?stone_type=lab&page_limit=24&current_page=1 et https://www.diamondsbyme.nl/start-with-a-diamond/?did=NV_57D2C6ED1.
- https://www.diamondsbyme.nl/klantenservice/retour-en-ruilen/ , /betalen/ , /bestelling-plaatsen/ , /garantie-en-defecten/ , /onze-winkels/ , /zelf-ontwerpen/.
- Captures et journaux : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/diamondsbyme/`.
