# Audit : Eli Paz (Tel-Aviv), site en russe : **bloqué (403 sur les fiches)**

| | |
|---|---|
| Site | Eli Paz, bijouterie, 35 et 67 rue Allenby, Tel-Aviv ; 03-516-7021 ; 058-405-2861 ; lundi à jeudi 9 h 30 à 18 h 30, vendredi 9 h 30 à 14 h 30 (V : accueil russe) |
| Page de départ | https://eli-paz.co.il/ru (accueil russe) ; fiche tentée : https://eli-paz.co.il/ru/Ringforawomanyellowgold14ktwithdiamonds0.25ct |
| Date | 16/11/2026 |
| Appareils | accueil lu avec `curl` ; fiche tentée avec Chromium headless 1366 × 900 (he-IL). iPhone non tenté |
| Statut | **bloqué**. La fiche produit répond **403 « Forbidden »** (page d'erreur du serveur, texte ukrainien « accès refusé ») dans le navigateur. Conformément à la règle de l'audit, **aucun nouvel essai, aucun changement d'identité, aucune autre page** n'a été ouverte sur ce site après le 403 |
| robots.txt | `User-agent: *` : interdits notamment `/*route=account/`, `/*route=checkout/`, `/*route=product/search`, `/admin`, `/catalog`, `/system`, `/*?sort=`, `/*?order=`, `/*?limit=`, `/*?filter_name=`, `*cart`, `*checkout`, `*login`, `*search`, `*compare-products`, `*wishlist`, `*brands`, `*specials`, `*utm=`. Aucune règle contre ClaudeBot ; pas de `Crawl-delay` (V). La fiche tentée était **autorisée** par le robots.txt (V) : le 403 vient du serveur, pas du fichier |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Ce qui est connu (accueil russe, lu avec curl avant le 403)

- **Langues** : russe, anglais, hébreu ; devises ₪ ou $ (liste dans l'en-tête) (V).
- **Catalogue** : rubriques « Pour femme » (bracelets, bagues, pendentifs, boucles d'oreilles, chaînes en or ; **bagues de fiançailles avec diamants** ; bagues avec diamants et pierres précieuses ; parures ; boucles d'oreilles avec pierres), « Pour homme », « Famille et religion » (pendentifs religieux judaïques et chrétiens, bijoux d'enfants, cadeaux) et « Réparation de bijoux » (V).
- **Prix sur l'accueil** : bagues en or jaune 14 k avec diamants de 3 257 à 10 000 ₪ (trois fiches : 0,15, 0,25 et 0,48 ct d'après leur adresse), chaînes de 2 535 à 4 175 ₪, bracelets en argent de 668 à 700 ₪ ; boutons « Détails » et « Acheter » sur chaque carte (V).
- **Pages d'information** annoncées dans le menu : livraison, politique de retour, paiement, garanties, services du joaillier, nouveautés, avis (V : liens). **Aucune n'a été ouverte.**
- **Terme du synthétique** : aucun relevé sur l'accueil (V).
- **Contrôles** : liste de comparaison, favoris, inscription et connexion présents dans l'en-tête (V : texte) ; non actionnés.
- **Messagerie** : WhatsApp (deux liens), Telegram (V : liens lus, non ouverts).

## Constats

- **Pas de configurateur** : le site est un catalogue de bijoux en or et argent pour la clientèle russophone d'Israël (V : accueil).
- **Prix en ₪ affichés sur les cartes** de l'accueil, avec un bouton « Acheter » : l'achat en ligne existe (V : accueil) ; non vérifié.

## Limites de l'audit

- **Aucune fiche, aucune page de catégorie, aucun panier** n'a pu être lu : 403 sur la fiche, arrêt immédiat. Les options, les retours, les garanties, le certificat et les délais ne sont pas connus.
- Le 403 peut tenir à l'identité par défaut de Chromium headless (I) ; il n'a pas été contourné, comme le veut la règle.
- L'accueil avait été lu avec curl avant la tentative du navigateur ; l'inventaire de la veille avait aussi relevé le code 200 sur l'accueil (V).

## Sources

- https://eli-paz.co.il/robots.txt
- https://eli-paz.co.il/ru (200 avec curl) · https://eli-paz.co.il/ru/Ringforawomanyellowgold14ktwithdiamonds0.25ct (403 avec Chromium)
- Inventaire : `INVENTAIRE.md` (site en russe pour les olim)
- Journaux (hors dépôt) : `scratchpad/il/out/elipaz/`
