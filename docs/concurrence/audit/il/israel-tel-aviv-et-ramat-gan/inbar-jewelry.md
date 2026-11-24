# Audit : Inbar Jewelry (Tel-Aviv), catalogue sans prix

| | |
|---|---|
| Site | Inbar Jewelry (ענבר תכשיטים), 237 Dizengoff, Tel-Aviv ; dimanche à jeudi 11 h à 18 h, vendredi 11 h à 15 h ; 074-745-2311 (V : pied de page) |
| Page de départ | https://www.inbarj.com/product-category/טבעות-אירוסין/, puis une fiche (« solitaire en forme torsadée », https://www.inbarj.com/product/טבעת-אירוסים-סוליטר-במראה-מפותל/) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour ce que le site offre : un catalogue sans option ni panier. Le site ne vend pas en ligne : le prix se demande par WhatsApp (V). Aucune commande n'est possible, donc il n'y a pas de panier à atteindre |
| robots.txt | `User-agent: *` : `Disallow:` vide, tout est autorisé ; aucun `Crawl-delay` (V). Aucune requête n'a été bloquée |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Accueil | bandeau « bagues de fiançailles : dès 5 000 ₪ ; alliances : dès 1 000 ₪ ; bracelets : dès 5 000 ₪ ; chaînes : dès 2 500 ₪ ; boucles d'oreilles : dès 2 000 ₪ », avec « **possibilité de 24 paiements égaux** » (V) | — | — |
| 2. Catégorie « טבעות אירוסין » | 49 modèles (liens de la page) avec leur nom seul : **aucun prix sur les cartes** ; collections : Aqua, Infinity, Raw diamonds, Rose cut, Salt & Pepper, Stacking Rings, Treasure, Wild (V) | aucun | — |
| 3. Fiche | description, pierre (par exemple 0,50 ct, VS2, F, 14 k, taille « excellent »), **certificat IGL**, dimensions de la bague en mm ; ligne « **להצעת מחיר** » (pour une offre de prix) qui mène à WhatsApp (V) | aucun prix | galerie de photos |
| 4. Commande | par WhatsApp ou téléphone ; les conditions de chaque commande sont convenues avec le client (V : `/תקנון/`) | — | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| חיפוש | champ et bouton | présents sur chaque page (V) | — | non actionné |
| Menu : טבעות אירוסין / נישואין / טבעות / עגילים / צמידים / שרשראות / קולקציות / תכשיטים מיוחדים | liens | catégories ; 49 bagues de fiançailles (V) | — | fonctionnent |
| להצעת מחיר | lien | `wa.me/message/…` : conversation WhatsApp (V : lien lu, **non ouvert**) | — | non ouvert (règle) |
| 074-7452311 | lien tel: | appel (V : lien lu) | — | non actionné |
| studioinbar@gmail.com | lien mailto: | — | — | non actionné |
| פתיחה וסגירה של תפריט הנגישות | bouton | présent sur chaque page (V) | — | non actionné |
| Menu mobile : ניווט מהיר / מוצרים / מאמרים / יצירת קשר | boutons | présents sur iPhone (V : contrôles) | — | non actionnés |

Absents (V) : options de métal, de pierre, de taille, prix, panier, paiement, 3D, 360°, vidéo, essayage, comparaison, avis, gravure, suivi.

## Options disponibles

- **Métal** : or 14 k (blanc, jaune, rouge) et 18 k selon les modèles, mentionné dans le titre de la fiche (V : titres « 14 קראט », « 18K »).
- **Pierre** : diamants naturels, pierres de couleur (rubis, saphir rose, morganite, tourmaline), diamants « salt & pepper », « bruts », « rose cut » (V : titres). Pas de laboratoire relevé (V).
- **Certificat** : IGL pour la fiche lue, expédié avec la bague (V).
- **Taille, délai, garantie** : non lus (aucune page ne les donne) (V).

## Prix, délais, retours, garanties

- **Prix** : aucun prix de modèle ; seulement « dès 5 000 ₪ » (bagues de fiançailles) et « dès 1 000 ₪ » (alliances) (V).
- **Paiement** : « 24 paiements égaux » (V).
- **Délai, retour, garantie** : « détails, prix, acompte, mode de paiement, date estimée et remise sont fixés **personnellement avec chaque client** » ; « les dates de préparation sont une estimation » ; annulation selon la loi de protection du consommateur (V : `/תקנון/`).

## Confiance et service

- **Libellé du synthétique** : aucun (le site ne vend pas de laboratoire) (V).
- **Atelier** : « conçu sur mesure par notre équipe de designers » ; la page « תהליך ייצור טבעת » (datée du 16/07/2023) est un texte générique sur le design, sans étapes ni photo d'atelier (V).
- **Boutique** : adresse, horaires, téléphone, WhatsApp, Facebook, Instagram (V).
- **Blog** : « combinaisons de bijoux », « cadeaux pour elle », « ce qu'il faut savoir sur l'indice d'or », « processus de fabrication d'une bague » (V : liens).
- **Avis** : aucun relevé (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Catégorie | LCP 1,8 s ; charge complète 6,0 s | LCP 1,0 s ; charge complète 4,4 s |
| Fiche | LCP 2,0 s ; charge complète 5,8 s | LCP 1,5 s ; charge complète 5,2 s |

## Points forts à retenir pour JR Diamond

1. **Un prix d'entrée par catégorie et 24 paiements écrits sur l'accueil** (« dès 5 000 ₪ », « 24 paiements égaux ») [V] : ancre simple, avant même le moteur de prix de JR Diamond.
2. **Un certificat nommé et des cotes en millimètres sur la fiche** (largeur 2,3 à 5 mm, hauteur 1,2 à 4,5 mm) [V] : les cotes répondent à la crainte « le bijou reçu ne correspond pas à la CAO » des forums de `docs/concurrence/forums/`.
3. **Collections thématiques** (« salt & pepper », « raw », « rose cut ») [V] : un angle de gamme que JR Diamond n'a pas.

## Défauts observés

1. **Aucun prix sur les fiches ni sur les cartes** : tout passe par WhatsApp [V]. C'est le même écart que celui de JR Diamond avec « Sur devis ».
2. **Aucune option, aucun achat en ligne** [V].
3. **Délais, retours et garantie ne sont pas publiés** : « convenus avec chaque client » [V].
4. **Page « processus de fabrication » vide de contenu concret** : un texte de 2023 sur le design en général, sans photo ni étape [V].
5. **Aucun avis, aucune preuve de fabrication** [V].
6. **Pages lentes** : de 4,4 à 6,0 s de charge complète [V ; une passe].

## Limites de l'audit

- WhatsApp, téléphone, e-mail : non ouverts (règle). Aucun prix n'a donc été obtenu.
- Une fiche seulement a été ouverte en entier ; les 48 autres modèles et les alliances ne l'ont pas été.
- Recherche du site non actionnée.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://www.inbarj.com/robots.txt
- https://www.inbarj.com/ · /product-category/טבעות-אירוסין/ · /product/טבעת-אירוסים-סוליטר-במראה-מפותל/ · /תקנון/ · /תהליך-ייצור-טבעת/
- Inventaire : `INVENTAIRE.md` (24 paiements, dès 5 000 ₪)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/inbar/`
