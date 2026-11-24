# Audit Omara Jewelry (Slovaquie)

- **Site** : Omara Jewelry (OMARA s.r.o., Obchodná 559/37, Bratislava) · https://omara.sk/
- **Page de départ** : https://omara.sk/zasnubne-prstene-na-mieru (liste) ; fiche auditée : https://omara.sk/product/zasnubny-prsten-constellation?configuration_id=OMENGRNG033-LAB-RD-10-14KY-H14KY-S47
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366 × 900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le configurateur est audité en entier. Le panier n'est pas atteint : `robots.txt` interdit `/cart` et `/checkout`, donc les boutons « Pridať do košíka » et « Pridať zladenú obrúčku » n'ont pas été actionnés.
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options (fiche Constellation, bague ronde 1,00 ct) |
|---|---|
| 1. Liste `/zasnubne-prstene-na-mieru` | Filtres : forme (8), origine (laboratoire / naturel), métal (4 boutons), carat (0,75 à 3,00), prix, tri (liste déroulante) ; style et forme par menu [V] |
| 2. Fiche | Galerie « Prsteň » (4 vues) ou « Na ruke » (vue 360° sur une main) |
| 3. Origine | Laboratoire ou naturel |
| 4. Forme de pierre | Rond, ovale, émeraude, coussin, princesse, radiant, poire, marquise |
| 5. Métal de la bague, métal de la tête | 14 k blanc / jaune / rose, 18 k blanc / jaune / rose, platine 950 |
| 6. Carat | 0,75 · 1,00 · 1,50 · 2,00 · 2,50 · 3,00 |
| 7. « Vyberte si vlastný centrálny diamant » | Fenêtre de 48 pierres réelles (filtres, tri, fiche de pierre, certificat) |
| 8. Taille | 47 à 77 (31 valeurs), guide des tailles |
| 9. Gravure | Texte de 20 caractères, 3 polices |
| 10. Alliance assortie | Bouton « Pridať zladenú obrúčku » : + 755 € (non actionné) |
| 11. Panier | Non atteint (interdit par robots.txt) |

## Contrôles vérifiés

Prix : première ligne « Prsteň od », troisième ligne « Celkom » (total). Mesures faites dans la même session, 1,5 à 3,5 s d'attente après chaque clic.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Laboratórny / Prírodný | boutons | Titre et adresse changent (`LAB` → `NAT`), photos inchangées | Laboratoire 1 365 € / total 1 385 € ; naturel 1 ct : 3 055 € / total 4 537 € [V] | OK |
| Okrúhly | bouton | Photos V1, V2 de la forme | total 1 385 € | OK |
| Oválny | bouton | idem | 1 418 € | OK |
| Smaragd | bouton | idem (le bouton du filtre de page masque celui de la fiche : il a fallu cibler le dernier) | 1 379 € | OK |
| Vankúšikový | bouton | idem | 1 401 € | OK |
| Princezná | bouton | idem | 1 413 € | OK |
| Radiant | bouton | idem | 1 381 € | OK |
| Hruška | bouton | idem | 1 395 € | OK |
| Markíza | bouton | idem | 1 403 € | OK |
| Métal bague : 585 blanc | bouton | Photos en or blanc | 1 397 € | OK |
| 585 rose | bouton | Photos en or rose | 1 385 € | OK |
| 750 jaune (18 k) | bouton | Titre et adresse `18KY` | 1 669 € | OK |
| 750 blanc | bouton | idem | 1 680 € | OK |
| 750 rose | bouton | idem | 1 669 € | OK |
| 950 platine | bouton | Adresse `PT` | 1 368 € à 3,5 s (une lecture à 1,5 s donnait 1 669 €, valeur de l'option précédente) | OK, valeur surprenante : platine moins cher que l'or 14 k [V], explication inconnue |
| Métal de la tête (7 boutons) | boutons | Adresse `H14KR`, `H14KW`, etc. ; les options 18 k se grisent quand la bague est en 14 k [V : capture] | 1 385 € pour 14 k rose | OK avec contrainte |
| Carat 0,75 | liste | Adresse `075`, titre mis à jour | 1 378 € | OK |
| Carat 1,50 | liste | idem | 1 448 € | OK |
| Carat 3,00 | liste | idem | 1 744 € | OK |
| Carat 2,00 · 2,50 | liste | Options présentes, non cliquées | non relevé | non testé (temps) |
| Prsteň / Na ruke | onglets | « Na ruke » : bague sur une main, « Otáčajte potiahnutím » (rotation au glissé) | aucun | OK |
| VYBRAŤ DIAMANT | bouton | Fenêtre plein écran (« Vyberte si diamant ») | prix de la bague complète | OK |
| Fenêtre pierre : curseur carat | curseur | Plage 0,90 à 1,10 ct par défaut ; 0,65 à 3,10 après « Zrušiť » | affichage 1 330 € à 59 830 € | OK |
| Cena prsteňa | curseur | Plage de prix de la bague | idem | non actionné |
| Farba F, G, H, I, J | boutons | Filtre actif | selon la pierre | OK (compte plafonné à « 48+ ») |
| Čistota VVS1, VVS2, VS1, VS2 | boutons | idem | idem | OK |
| Brús Excellent / Very Good | boutons | « Very Good » : 18 diamants | idem | OK |
| Číslo certifikátu + HĽADAŤ | champ, bouton | Recherche par numéro IGI | — | non testé : numéro à saisir |
| Zoradiť (5 tris) | liste | Najlepšia hodnota, prix croissant et décroissant, carat croissant et décroissant ; l'ordre change (3,10 ct à 22 975 € en tête au tri carat décroissant) | — | OK |
| Zrušiť | lien | Réinitialise les filtres | — | OK |
| Carte d'une pierre | carte | Fiche : « LAB GROWN · IGI LG805690935 », 1,07 ct, H, VVS1, Ideal, 6,59 × 6,61 × 4,04 mm, table 57 %, profondeur 61,2 %, rondiste, certificat PDF ; vue 360° ou photo ; adresse `&diamond=LG805690935` | 1 385 € « prix de la bague avec la pierre » | OK |
| 360° pohľad / Fotografia | onglets | Bascule vue 360° (glissé) / photo de la pierre | — | OK |
| Zobraziť certifikát | lien | Lien vers le certificat | — | non ouvert (domaine externe) |
| Veľkosť (liste) | liste | 47 à 77 | aucun | OK |
| Zistite Svoju Veľkosť | lien | Tableau circonférence, rayon, taille UE / PL / UK, de 46 à 65 mm | — | OK |
| Gravírovanie (champ, 20 caractères) | champ | Texte « Test » accepté | total inchangé (1 385 €) | OK |
| Abc ×3 | boutons | Trois boutons « Abc » visibles (polices de gravure, capture) ; le script n'a pas pu les cibler | non relevé | non testé |
| Pridať zladenú obrúčku (Silhouette, + 755 €) | bouton | — | + 755 € affiché | non testé : ajoute au panier, `/cart` interdit |
| Pridať do košíka | bouton | — | — | non testé : panier interdit par robots.txt |
| Pridať do zoznamu želaní | bouton | — | — | non testé : `/wishlist` interdit |
| Potrebujete to skôr? | bouton | Aucun panneau détecté | — | sans effet observé |
| ODOSLANIE & VRÁTENIE | accordéon | Livraison gratuite, retours (voir ci-dessous) | — | OK |
| OPÝTAŤ SA OTÁZKU | bouton | Formulaire de question (non rempli) | — | non testé |
| Online konzultácia (en-tête) | bouton | Rendez-vous vidéo (non ouvert) | — | non testé |
| Bulle de chat (bas à droite) | widget | Non ouverte | — | non testé |
| Bandeau de cookies | boutons | « Prijať všetko », « Odmietnuť všetko », 5 catégories | — | OK |
| Fenêtre « Zľava 5 % na váš prvý nákup » | popup | Apparaît dans la fenêtre des pierres ; croix en haut à droite ; bloque les clics de la page | rabais appliqué « v pokladni » | OK mais gêne [V] |

## Options disponibles

- **Origine** : laboratoire, naturel.
- **Formes** : rond, ovale, émeraude, coussin, princesse, radiant, poire, marquise (8). Cœur et trillion apparaissent dans le catalogue `/engagement` (non testés sur la fiche).
- **Métaux** : 585 jaune, blanc, rose ; 750 jaune, blanc, rose ; platine 950 (7). Métal de la tête choisi à part, 7 valeurs.
- **Carat** : 0,75 · 1,00 · 1,50 · 2,00 · 2,50 · 3,00.
- **Pierre** : sélection parmi une liste de pierres réelles, filtres couleur F à J, pureté VVS1 à VS2, taille Excellent / Very Good, prix, carat, recherche par numéro de certificat.
- **Tailles** : 47 à 77. **Gravure** : 20 caractères, 3 polices.
- **Vues** : 4 photos de studio (face, haut, profil, trois-quarts) et vue 360° sur la main ; pierre en 360° et en photo.
- **Alliances** (menu) : dames (classiques, eternity, fashion, simple), hommes (fashion, classiques, simple), par métal.

## Prix, délais, retours, garanties

- **Prix** : euros, affichés en trois lignes (prix « de départ » de la bague, supplément de l'alliance assortie, total). Pas de décomposition métal / pierre / façon. Pour la fenêtre des pierres, « Vrátane prsteňa (1 151,08 € ) » indique le prix de la monture seule [V]. Mention de TVA non relevée. Page « Konkurencieschopné ceny » : argumentaire général (achat direct aux fabricants), sans chiffres [V : https://omara.sk/konkurencieschopne-ceny].
- **Livraison** : « Doprava zadarmo do 15.12.2026, ak objednáte dnes » sur la fiche. Page https://omara.sk/doprava : expédition de 10 à 21 jours calendaires, DPD, assurée, numéro de suivi, domicile ou point relais, 23 pays listés alors que le texte annonce « 21 » [V]. L'accordéon de la fiche (iPhone) dit « jusqu'à 21 jours ouvrés » et signale une livraison express [V] : unité différente.
- **Retours** : la fiche affiche « Vrátenie zadarmo do 30 dní ». La page https://omara.sk/vratky-a-vymeny précise que tout est fait sur mesure, donc **hors rétractation de 14 jours** ; retour uniquement si le produit ne répond pas aux normes de qualité, sous 30 jours (15 jours pour un diamant naturel) ; remboursement sous 10 jours ouvrés après réception [V]. Contradiction entre l'affichage et la page de règles.
- **Garanties** : garantie à vie sur la pierre et sur la fabrication ; une mise à taille gratuite la première année ; contrôle qualité en trois phases [V : https://omara.sk/zaruka-opravy].
- **Certificats** : IGI pour chaque pierre synthétique, certificat consultable ; GIA pour le naturel selon la page d'accueil [V].
- **Paiement** (page https://omara.sk/sposoby-platby-financovanie, non vérifié au panier) : Google Pay, Apple Pay, carte, PayPal, Klarna en 4 fois ou 6 à 24 mois [V : texte de la page].

## Confiance et service

- Conseil : téléphone +421 949 282 278, WhatsApp, e-mail, consultation vidéo (« Poradňa », « Online konzultácia »), bulle de chat, formulaire de question [V : pied de page ; boutons non ouverts].
- Langues : slovaque ; sélecteur « SK » en en-tête. Devise : euro. Avis clients : aucun avis relevé dans le texte de la fiche [V ; non cherché ailleurs].
- Preuves de fabrication : page https://omara.sk/proces-vyroby-sperkov, 8 étapes (CAO, moule, fonte, sertissage, vérification de la pierre principale) en texte, sans photo ni vidéo d'une commande [V]. Page https://omara.sk/vlastny-dizajn : CAO, cire, pièces récentes en galerie [V]. Suivi : numéro DPD après expédition.
- Libellé du synthétique : « Laboratórny », « laboratórne pestované diamanty », « LC (Lab-orientované) », « lab-grown » dans l'adresse de configuration [V].

## Points forts à retenir pour JR Diamond

1. **Choix d'une pierre réelle dans la configuration** : 48 pierres avec vue 360°, certificat, dimensions, prix de la bague complète (fenêtre « Vyberte si diamant ») [V]. Proche de « pierre filmée ».
2. **Prix de la bague complète à chaque option**, y compris le choix de la pierre ; filtres couleur, pureté, taille [V].
3. **Configuration dans l'adresse** (`configuration_id=…-LAB-RD-10-14KY-H14KY-S47`, `&diamond=LG…`) : partage et retour sur la même bague [V].
4. **Vue « sur la main » en 360°** (« Na ruke ») [V : capture].
5. **Métal de la tête choisi séparément**, avec grisage des combinaisons impossibles [V : capture].
6. **Guide des tailles intégré** (modale avec circonférence, rayon, UE / PL / UK) [V].
7. **Alliance assortie proposée sur la fiche** (+ 755 €) [V].
8. **Garantie à vie, une mise à taille gratuite, IGI sur chaque pierre** affichés dès la fiche [V].

## Défauts observés

- **Retours contradictoires** : « Vrátenie zadarmo do 30 dní » sur la fiche, retour limité aux défauts de qualité dans la page de règles [V].
- **Délai ambigu** : « 10 à 21 jours calendaires » (page) contre « 21 jours ouvrés » (accordéon iPhone) [V].
- **Total difficile à lire** : trois montants (« Prsteň od », « + 755 € », total) sans légende ; le bandeau « ku každému nákupu nad 1 400 € » est lu comme un prix par les contrôles [V].
- **Prix du platine** : 1 368 € contre 1 385 € pour l'or 14 k jaune ; la valeur lue à 1,5 s est celle de l'option précédente (affichage qui rattrape en 2 à 3 s) [V].
- **Fenêtre de 5 % « première commande »** par-dessus la fenêtre des pierres : masque les contrôles [V].
- **« 21 pays »** annoncé, 23 listés [V].
- **Photos de studio communes** : l'image ne change pas avec le choix de la pierre précise (la fiche de la pierre montre la pierre seule) [V].
- **Aucune preuve de fabrication propre à une commande** (ni photo ni vidéo) [V].
- **Bouton « Potrebujete to skôr? »** : aucun panneau détecté [V].

## Limites de l'audit

- Panier, alliance assortie, liste de souhaits : non actionnés (`/cart`, `/wishlist` interdits par robots.txt). Frais, TVA et moyens de paiement du panier : non vus.
- Carats 2,00 et 2,50, curseur de prix, recherche par numéro de certificat, cœur et trillion : non testés. Chat, consultation vidéo, formulaire de question : non ouverts (règle de lecture seule).
- Une seule fiche (Constellation) auditée en détail ; les autres modèles partagent a priori le même gabarit [I].
- Temps d'apparition du visuel principal (HTML chargé + première image large affichée), une mesure par appareil : **ordinateur 1,8 à 2,1 s**, **iPhone 13 4,9 s** [V].
- Aucune erreur de réseau (code 400 ou plus) ni erreur JavaScript relevée pendant les parcours [V].

## Sources

- https://omara.sk/ · https://omara.sk/zasnubne-prstene-na-mieru · https://omara.sk/engagement
- Fiche : https://omara.sk/product/zasnubny-prsten-constellation?configuration_id=OMENGRNG033-LAB-RD-10-14KY-H14KY-S47
- https://omara.sk/doprava · https://omara.sk/vratky-a-vymeny · https://omara.sk/zaruka-opravy · https://omara.sk/sposoby-platby-financovanie · https://omara.sk/proces-vyroby-sperkov · https://omara.sk/vlastny-dizajn · https://omara.sk/certifikacia · https://omara.sk/konkurencieschopne-ceny
- https://omara.sk/robots.txt (interdits : `/cart`, `/checkout`, `/account`, `/orders`, `/wishlist`, `/test-bridal`, recherches)
