# Audit : Ékszerpalota (Hongrie)

- **Site** : Ékszerpalota (« Esküvőpalota »), Budapest, Honvéd utca 6, https://www.ekszerpalota.hu/
- **Page de départ** : https://www.ekszerpalota.hu/eljegyzesi-gyuru (liste filtrable) ; fiche auditée : https://www.ekszerpalota.hu/spd/BRK659f100SZGY/Ekszerpalota-eljegyzesi-gyuru-1ct-gyemanttal-BRK65 (ovale 1 ct, or blanc 14 k)
- **Date** : 15/11/2026 (essais menés sur la machine d'audit, horloge du 24/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900) ; iPhone 13 (émulation Playwright)
- **Statut** : **complet** pour une boutique à fiches à options (pas de configurateur 3D) : liste, filtres, fiche, variantes, panier atteint avec un article (aucune commande validée).
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé. Prix en forint TTC.

## Parcours

| étape | options |
|---|---|
| Liste « Eljegyzési gyűrű » | 394 à 414 bagues ; filtres ; tri ; aperçu rapide ; favoris ; comparaison |
| Fiche | 3 couleurs d'or ; nature du diamant (synthétique ou naturel G/VS1, H/VS2) ; taille 45 à 70 ; quantité ; photos |
| Panier | récapitulatif, coupon, bouton « Megrendelés » (non cliqué) |

## Contrôles vérifiés

Sources : relevé de 191 contrôles de la fiche et de la liste (ordinateur), essais en navigateur.

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Bandeau « Engedélyezem » / « Nem engedélyezem » | bouton | ferme le bandeau de données | — | fonctionne [V] |
| Azonnal elvihető ékszerek | lien | catalogue en stock (`/keszleten`) | — | présent [V] ; non ouvert |
| Karácsonyi információk | lien | informations de fin d'année | — | présent [V] ; non ouvert |
| Ékszereink / Eljegyzési gyűrű / Karikagyűrű / Infó | menu | catégories ; blog | — | présent [V] |
| Recherche (champ « Keresés ») | champ | recherche | — | présent [V] ; non utilisé |
| Profil, Kosár (compteur) | boutons | compte et panier ; le compteur passe à 1 après l'ajout | — | fonctionne [V] |
| Filtre Elérhetőség : Készletről, 1–2 hét, 3–4 hét | cases | filtre par délai | — | présent [V] ; non actionné |
| Filtre Ékszer anyaga (sárga, fehér, rozé, rozé-fehér, sárga-fehér, platina) | cases | filtre par métal | — | présent [V] ; non actionné |
| Filtre Kő színe (8 couleurs) | cases | filtre | — | présent [V] |
| Filtre Drágakő típusa (12 : G/VS1, H/VS2, H/SI1, I/SI1 Gyémánt ; Fancy ; Fekete ; **Lab Gyémánt** ; Zafír ; Smaragd ; Rubin ; Topáz ; Diffusion zafír) | cases | filtre | — | « Lab Gyémánt » actionné : l'adresse devient `?filter=5471800:2` [V] ; nombre de résultats non fiable |
| Filtre Drágakő ct (0,07 ct et moins à plus de 1 ct, 14 valeurs) | cases | filtre par poids | — | présent [V] |
| Filtre Kőméret (12 valeurs de 2,5 à 6,5 mm) | cases | filtre | — | présent [V] |
| Filtre Csiszolás (round, princess, pear, heart, marquise, emerald, cushion, baguette, asscher, oval) | cases | filtre | — | présent [V] |
| Filtre Stílus (1 kő, 3-5 kő, 1 kő + több kicsi, halo, körbeköves, félig köves, toi et moi) | cases | filtre | — | présent [V] |
| Filtre Hölgy személyisége (elegáns, sportos, romantikus, díva, extravagáns) | cases | filtre par style de la porteuse | — | présent [V] |
| Filtre Ár (curseur 0 à 19 580 400 Ft) | curseur | filtre par prix | — | présent [V] |
| Szűrés törlése | bouton | remet les filtres à zéro | — | présent [V] |
| Tri (7 entrées : popularité, nom A-Z/Z-A, prix croissant/décroissant, plus récent, plus ancien) | liste | change l'ordre | — | présent [V] ; non actionné |
| Gyorsnézet (aperçu rapide) | bouton | aperçu de la fiche | — | présent [V] ; non actionné |
| Kedvencekhez, Összehasonlítás (sur chaque carte et sur la fiche) | boutons | favoris ; comparaison | — | présents [V] ; non actionnés |
| Taille (liste « Kérem válasszon ! » 45 à 70) | liste | choix de la taille avant l'ajout | — | fonctionne [V] : taille 54 retenue au panier |
| Liens fehér, rozé, sárga arany | liens | ouvrent la fiche de la variante (références …f, …r, …s) | 393 840 Ft pour les trois [V] | fonctionne [V] |
| Liens Lab Gyémánt / G/VS1 / H/VS2 | liens | ouvrent la fiche de la variante | lab : 393 840 ; **G/VS1 : 2 234 520 ; H/VS : 1 757 160 Ft** [V] | fonctionne [V] |
| Lien « 1ct » | lien | poids de la fiche | — | présent [V] |
| Quantité (moins, champ, plus) | boutons | quantité | — | présent [V] |
| Kosárba | bouton | ajoute la bague au panier, sans changer de page | — | fonctionne [V] |
| Kedvencekhez / Ajánlom / Összehasonlítás / Kérdés a termékről / Nyomtat | boutons | favoris, recommandation, comparaison, question sur le produit, impression | — | présents [V] ; non actionnés (formulaire, compte) |
| Onglets Részletek / Adatok ; « Gyémánt specifikáció » ; « Nem tudod a méretet ? » | onglet, texte | description et aide pour la taille | — | présents [V] ; contenu non lu |
| Photos (Előző / Következő) | carrousel | défilement des photos | — | présent [V] |
| Panier : Kupon, Ellenőrzés, Vissza, Megrendelés | champ, boutons | coupon, contrôle, retour, commande | — | présents [V] ; non cliqués (« Megrendelés » passe commande) |
| Időpontfoglalás (`eskuvopalota.salonic.hu`) | lien | réservation de rendez-vous | — | présent [V] ; non ouvert |
| Téléphone / WhatsApp / Viber +36 70 417 0900 | lien | numéro unique pour les trois | — | présent [V] ; aucune conversation ouverte |
| Feliratkozás (bulletin), Facebook, Instagram | liens | — | — | présents [V] |
| Vue 360°, vidéo, 3D, essayage, AR, zoom | — | aucun contrôle correspondant | — | **absents** [V] |

## Options disponibles

- **Métal** : or 14 k jaune, blanc, rose, bicolore ; platine (filtre). Titre affiché sur la fiche : 14 k seulement [V].
- **Pierre** : diamant synthétique (« Lab Gyémánt »), naturel G/VS1, H/VS2, H/SI1, I/SI1, fantaisie, noir ; saphir, émeraude, rubis, topaze.
- **Formes** : ronde, princesse, poire, cœur, marquise, émeraude, coussin, baguette, asscher, ovale.
- **Tailles de bague** : 45 à 70 (26 valeurs, sans demi-taille).
- **Poids** : de moins de 0,07 ct à plus de 1 ct.
- **Gravure, forme de la bague, pavé** : pas d'option de configuration sur la fiche ; l'atelier propose des modèles « sur mesure » en 3D sur rendez-vous [V : page d'accueil].

## Prix, délais, retours, garanties

- **Double prix** : « Bolti ár » (boutique) 437 600 Ft, « Online ár » 393 840 Ft, « Megtakarítás » 43 760 Ft (10 %) [V]. Prix « à partir de » dans la liste (« 210 960 Ft-tól ») [V].
- **Même monture, trois pierres** (ovale 1 ct, or blanc 14 k, 2,1 g) : synthétique 393 840 ; naturel H/VS 1 757 160 ; naturel G/VS 2 234 520 Ft [V]. Rapport 1 à 4,5 à 5,7 entre synthétique et naturel. La couleur de l'or ne change pas le prix.
- **Délais** : fiche : « Elérhetőség 1-2 hét » ; calendrier de fin d'année : ligne « Egyedi tervezéssel készülő ékszer » (commande avant le 30 novembre), « rendelésre készülő egyköves » (avant le 13 décembre), « készletes ékszer livré » (avant le 21 décembre) [V].
- **Livraison** : retrait en boutique 0 Ft ; MPL 0 Ft ; MPL avec valeur assurée : 5 000 Ft (jusqu'à 99 999), 7 000 (100 000 à 199 999), 10 000 (200 000 à 299 999), 15 000 (300 000 à 399 999), 20 000 (400 000 à 599 999), 30 000 (600 000 à 799 999), 40 000 Ft (à partir de 800 000) [V]. Le panier a affiché « Szállítási költség : ingyenes » pour 393 840 Ft [V].
- **Paiement** : en boutique ; virement ; contre-remboursement (carte au coursier) ; carte (Teya) ; Klarna (3 fois sans frais ou 30 jours, via Viva) ; **« Ékszerpalota 50-50 »** : 50 % à la commande, solde à la remise, à 30, 40 ou 60 jours, hors articles en stock [V].
- **Retours** : non lus en détail ; conditions générales en pied de page [S]. Le site mentionne « élethosszig tartó felújítás » (remise à neuf à vie) et un certificat pour tout bijou en or [V : page d'accueil, extrait].
- **Certificats** : « G/VS1 », « H/VS2 » (grades) ; pas de rapport GIA ou IGI cité sur la fiche lue [V].
- **TVA** : prix TTC (non écrit sur la fiche lue) [I].

## Confiance et service

- Boutique à Budapest, téléphone et WhatsApp/Viber, rendez-vous réservable en ligne, e-mail de commande `order@eskuvopalota.hu` [V].
- Garantie à vie et remise à neuf annoncées [V : extrait] ; détail non lu.
- Avis clients : aucun module vu sur la fiche [V].
- Preuves de fabrication : aucune [V sur les pages lues].
- Fournisseur de paiement : Teya, Viva (Klarna) [V].

## Points forts à retenir pour JR Diamond

1. **Filtre « Lab Gyémánt » et prix comparés sur la même monture** : la même bague en synthétique et en naturel côte à côte, de 393 840 à 2 234 520 Ft (preuve : trois variantes de la fiche).
2. **Prix boutique barré contre prix en ligne, économie affichée** (preuve : « Bolti ár », « Online ár », « Megtakarítás »).
3. **Barème de livraison par tranche et assurance de valeur** détaillé (preuve : page Szállítás).
4. **Paiement en deux fois à la commande (« 50-50 ») avec solde 30, 40 ou 60 jours** (preuve : page Fizetés) : modèle proche de l'acompte demandé pour du sur mesure.
5. **Calendrier de fin d'année avec dates limites par type de commande** (preuve : fiche).
6. **Filtre de style de la porteuse** (« elegáns », « díva ») : aide à choisir pour un cadeau (preuve : liste).
7. **Un seul numéro pour téléphone, WhatsApp et Viber** (preuve : en-tête).

## Défauts observés

- **Titre ambigu** : la fiche synthétique s'appelle « gyémánttal » (« avec diamant ») ; la nature (« szintetikus gyémánt ») n'apparaît que dans la ligne de caractéristiques ; l'option s'appelle « Lab Gyémánt » [V].
- **Aucun configurateur, pas de 3D, 360°, vidéo ni essayage** [V].
- **Pas de gravure ni d'option de forme** en ligne [V].
- **Chiffres incohérents** entre deux lectures : 394 puis 414 bagues ; le filtre « Lab » affiche un total de 2 259 [V].
- **Certificat absent** sur la fiche lue (aucune mention GIA ou IGI) [V].
- **Pas de décomposition du prix** (or, façon, pierre) [V].
- **Temps** : ordinateur, DOMContentLoaded en 6,5 s et 15 images de plus de 300 px à 9,4 s ; iPhone 13 : 3,0 s et 5,8 s (7 images) [V ; machine partagée].
- **Mobile** : le panier et la fiche s'affichent, ajout au panier fonctionnel (taille 54, 393 840 Ft) [V] ; aucune mesure de largeur de page.

## Limites de l'audit

- Pas de configurateur à auditer : l'audit porte sur la fiche, la liste et le panier ; les filtres n'ont pas été actionnés un à un (relevé des options seulement), sauf « Lab Gyémánt ».
- Quick view, favoris, comparaison, « Kérdés a termékről », « Ajánlom » et le coupon n'ont pas été actionnés (comptes, formulaires).
- Retours, garantie et conditions générales n'ont pas été lus.
- Pas de mesure d'avis clients ni de tests d'erreur (taille non choisie).
- Le bouton « Megrendelés » n'a pas été cliqué.
- Rien n'établit si le diamant synthétique est certifié ; la page n'en parle pas.

## Sources

- https://www.ekszerpalota.hu/eljegyzesi-gyuru (liste, filtres)
- https://www.ekszerpalota.hu/spd/BRK659f100SZGY/Ekszerpalota-eljegyzesi-gyuru-1ct-gyemanttal-BRK65 et variantes …r100…, …s100…, …f100GVS, …f100HVS
- https://www.ekszerpalota.hu/shop_cart.php (panier avec une bague)
- https://www.ekszerpalota.hu/shop_contact.php?tab=shipping et `?tab=payment` (outil de lecture)
- https://www.ekszerpalota.hu/ (page d'accueil : extrait)
- robots.txt : AUTORISÉ pour toutes les adresses ouvertes (contrôle `robots.cjs`)
- Captures et scripts : `scratchpad/audit/eu/ekszerpalota/` (hors dépôt)
