# Audit : Shiree Odiz, « Build Your Own Ring » (hébreu, ₪)

| | |
|---|---|
| Site | Shiree Odiz Israel, Shoham 5, 5e étage, Bourse de Ramat Gan (aussi shireeodiz.com, New York) |
| Page de départ | https://www.shireeodiz.co.il/pages/byor |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900, langue he-IL ; émulation iPhone 13 (Playwright) |
| Statut | **complet** jusqu'au panier (le paiement n'a pas été ouvert). Exception : les liens 360° et certificat, hébergés sur un port non standard, sont injoignables depuis l'environnement d'audit |
| robots.txt | Shopify standard : `/checkout`, `/cart/`, `/account`… interdits ; `/pages/byor` et `/cart` permis. Cloudflare sans défi (V) |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Page d'entrée (« שלב 1 מתוך 3 ») | 9 formes ; 5 tranches de carat (0,5–0,7, 0,7–1, 1–1,5, 1,5–2, 2 et plus) ; « להצגת היהלומים ». Deux entrées : « מתחילים ביהלום » (recommandée) ou « מתחילים בעיצוב » (V) | chaque tranche affiche « dès » et le nombre de pierres en stock, par exemple asscher 1–1,5 ct : « 9 diamants en stock · dès 9 200 ₪ » (V) | vidéo de la forme choisie, une par forme, avec la mention « 360° » (V) |
| 1. בחירת היהלום (constructeur plein écran) | 94 ovales de 1 à 1,5 ct. Filtres : forme, curseurs de carat (0,50–3,10) et de budget (2 000 à 140 000 ₪ et plus), couleur D à J, pureté VVS1 à SI2 ; tri par prix ; « afficher plus » (V) | prix et prix barré sur chaque fiche (V) | photo réelle de chaque pierre, avec les badges GIA et SALE (V) |
| Fiche d'une pierre (fenêtre) | numéro de pierre (SO-17308), caractéristiques, lien « צפייה ב־360° », lien « תעודה גמולוגית », bouton « בחירת היהלום הזה » (V) | 8 400 ₪ au lieu de 8 800 (V) | photo réelle (V) |
| 2. בחירת העיצוב | 9 designs pour un ovale ; 10 en partant du design, avec le « סוליטר בזל » ; 4 métaux ; galerie de 5 photos (V) | total en direct : de 10 399 à 12 849 ₪ ; platine + 1 400 ₪ (V) | photo du design dans la forme et la couleur choisies (V) |
| 3. התאמה אישית | taille 44 à 58 ou « pas encore, on verra ensemble » ; gravure jusqu'à 15 caractères ; « pierre secrète » à l'intérieur de l'anneau : aucune, diamant, saphir, rubis, émeraude, tourmaline rose. Tout est gratuit (V) | aucun (V) | aucun (V) |
| Panier `/cart` | deux lignes (monture et diamant), livraison, total, paiement (V) | 10 399 ₪ TTC (V) | vignettes (V) |

## Contrôles vérifiés

Relevé complet avec `controls.cjs` : 83 contrôles sur ordinateur, 106 sur iPhone (V). Les contrôles du constructeur plein écran ont été relevés au fil du parcours. Tous ont été actionnés, sauf ceux de la dernière partie du tableau.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| עגול, אובל, אמרלד, טיפה, מרקיזה, פרינסס, קושן, רדיאן, אשר | boutons (entrée) | changent la vidéo et le lien « להצגת היהלומים » (`?shape=…&carat=…`) (V) | stock et « dès » par forme, par exemple coussin 34 pierres dès 6 850 ₪, radiant 24 dès 8 400 ₪ (V) | fonctionne. Le stock n'apparaît qu'après le chargement du flux, 12,5 s sur ordinateur (V) |
| 0.5–0.7, 0.7–1, 1–1.5, 1.5–2, 2 ומעלה | boutons | changent la tranche (V) | asscher : 3 750, 4 650, 9 200, 16 150, 26 000 ₪ (V) | fonctionne |
| להצגת היהלומים ← | lien | ouvre le constructeur plein écran (`#build`) (V) | — | liste en 1,8 à 6,7 s sur ordinateur, 2,0 s sur iPhone (V) |
| מעדיפים להתחיל בעיצוב? / מתחילים בעיצוב | liens | ouvrent l'étape design en premier : 10 designs, « sans pierre centrale ». La forme choisie filtre les pierres ensuite (halo : rond, radiant, ovale, émeraude → 3 356 pierres) (V) | design seul : 1 999 ₪ (V) | fonctionne |
| מתחילים ביהלום | lien | ouvre l'étape diamant (V) | — | fonctionne |
| בחירת היהלום / בחירת העיצוב / התאמה אישית | onglets | montrent l'étape et le résumé du choix (V) | sous-totaux affichés (V) | fonctionne |
| המשך לטבעת / המשך להתאמה אישית / המשך ליהלום / הוספה לסל | bouton principal | inactif tant qu'il manque un choix, puis étape suivante (V) | total à côté (V) | fonctionne |
| ✕ (fermer le constructeur) | bouton | ferme la fenêtre (I) | — | non actionné |
| Boutons de forme (liste) | boutons | filtrent la liste (V) | — | fonctionne |
| Curseur de carat (min et max) | curseurs | 0,50 à 3,10, pas de 0,1 (V) | — | non déplacés : tranche fixée à l'entrée |
| Curseur de budget (min et max) | curseurs | 27 crans. Déplacé au clavier : liste passée de 94 à 27 pierres (V) | — | fonctionne ; le libellé n'a pas été relu |
| D, E, F, G, H, I, J | boutons | G : 94 → 18 pierres ; G et VS2 : 6 ; retrait des deux : 94 (V) | — | fonctionne |
| VVS1, VVS2, VS1, VS2, SI1, SI2 | boutons | idem (V) | — | fonctionne |
| מחיר: מהנמוך לגבוה / מהגבוה לנמוך | liste | décroissant : première pierre ovale 1,20 ct D VS1 à 33 150 ₪ (V) | — | fonctionne |
| הצגת עוד יהלומים (34 נוספים) | bouton | affiche la suite (V) | — | fonctionne |
| Fiche d'une pierre | carte cliquable | ouvre la fenêtre de la pierre (V) | — | fonctionne |
| ◇ צפייה ב־360° | lien (nouvel onglet) | `https://media.hdfiles.in:8520/hd.aspx?StoneId=…` : connexion réinitialisée (V). Le port 8520 n'est pas joignable depuis l'environnement d'audit (curl : 000) | — | **non vérifié** (limite de l'environnement, pas forcément une panne du site) |
| 📄 תעודה גמולוגית | lien (nouvel onglet) | `https://media.hdfiles.in:8520/cert.aspx?StoneId=…` : même résultat (V) | — | **non vérifié** |
| בחירת היהלום הזה | bouton | passe à l'étape 2 (V) | 8 400 + 1 999 = 10 399 ₪ (V) | fonctionne |
| 9 designs (ovale) | cartes radio | changent l'image : modèles EN400 à EN409 (V) | voir « Options » | fonctionne |
| זהב לבן / צהוב / ורוד 14K, פלטינה | boutons | changent l'image du métal (V) | platine : 10 399 → 11 799 ₪ (V) | fonctionne. Le platine reprend la photo de l'or blanc (V) |
| ‹ › (galerie) | flèches | 1/5 → 5/5, puis retour à 1/5 (V) | — | fonctionne |
| מידת טבעת | liste | « 52 » s'ajoute au résumé (V) | « חינם » | fonctionne |
| חריטה אישית (15 caractères) | champ | « ABC » saisi puis effacé : absent du résumé de l'en-tête (V) ; le panier affiche « gravure : aucune » après effacement (V) | « חינם » | fonctionne en partie (pas de rappel à l'écran) |
| ✕ ללא אבן, יהלום, ספיר, רובי, אמרלד, טורמלין ורוד | puces | sélection (V) | inchangé (V) | fonctionne ; aucune image |
| Panier : הסרה (×2) | liens | — | — | non actionnés (le panier reste tel quel) |
| Panier : מעבר לתשלום מאובטח | bouton | mène au paiement Shopify (`/checkout`, interdit par robots.txt) | — | **non actionné** (règle) |
| Panier : יש לך קוד קופון? | bouton | — | — | non actionné |
| Panier : קביעת פגישה | lien | widget de réservation `link.morethan.co.il` (V, adresse lue) | — | non ouvert |
| WhatsApp (en-tête, bulle « Open WhatsApp form », « דברו איתנו בוואטסאפ », panier), téléphones 054-742-5527 et 054-397-2810 | liens | wa.me ou formulaire WhatsApp ; tel: (V, adresses lues) | — | non ouverts (règle) |
| « 10% הנחה », fenêtre « עוד 10% הנחה » avec champ courriel | onglet et fenêtre d'inscription | la fenêtre s'ouvre seule au milieu du parcours et **bloque les clics**. Sur iPhone, elle a empêché le choix du carat lors du premier passage (V) | — | fermée sans rien saisir |
| Accessibilité (UserWay), recherche, favoris (0), panier (icône), menu, pied de page (rubriques, retours, avis, confidentialité, contact) | liens et boutons | page « החזרות » lue (V) ; le statut du widget UserWay répond 404 (V) | — | les autres ne sont pas liés au parcours et n'ont pas été ouverts |

## Options disponibles

- **Formes** (9) : rond, ovale, émeraude, poire, marquise, princesse, coussin, radiant, asscher (V). Dans l'étape design, le cœur figure dans la table des formes du code, mais aucun design affiché ne le propose (I).
- **Pierres** : uniquement des diamants naturels GIA, avec photo réelle et numéro de stock « SO-##### » (V). Fiche de SO-17308 : ovale 1,01 ct E SI1, poli EX, symétrie G, 7,41 × 5,50 × 3,68 mm (V).
- **Designs et prix de la monture** en or 14 k, puis total avec l'ovale de 1,01 ct à 8 400 ₪ (V) :

| Design | Monture | Total |
|---|---|---|
| solitaire classique | 1 999 ₪ | 10 399 ₪ |
| solitaire pavé | 2 699 ₪ | 11 099 ₪ |
| halo caché | 2 399 ₪ | 10 799 ₪ |
| solitaire effilé | 2 249 ₪ | 10 649 ₪ |
| halo, avec 0,50 ct de pierres de côté naturelles | 4 449 ₪ | 12 849 ₪ |
| trois pierres | 3 749 ₪ | 12 149 ₪ |
| trois pierres poires | 3 649 ₪ | 12 049 ₪ |
| diamant flottant | 2 649 ₪ | 11 049 ₪ |
| vintage | 3 349 ₪ | 11 749 ₪ |
| solitaire serti clos, en partant du design (pas pour l'ovale) | 2 149 ₪ | — |

- **Métaux** : or blanc, jaune ou rose 14 k au même prix ; platine + 1 400 ₪ sur le solitaire classique (V).
- **Personnalisation** (gratuite) : taille 44 à 58 ; gravure de 15 caractères ; pierre secrète en 5 choix (V).

## Prix, délais, retours, garanties

- **Prix** : total TTC en direct (V). Le panier sépare la monture (1 999 ₪) et la pierre (8 400 ₪, barré à 8 800 ₪), avec « vous avez économisé 400 ₪ » (V).
- **Paiement** : « ou 10 paiements de 1 040 ₪ sans intérêt » ; logos Visa, Mastercard, Apple Pay, Google Pay, PayPal et **bit** (V, panier).
- **Livraison** : « משלוח אקספרס חינם עם מעקב », à 0 ₪ dans le récapitulatif (V).
- **Disponibilité de la pierre** : « vérifiée auprès du fournisseur dans un jour ouvré après l'achat ; si elle n'est pas disponible, remboursement complet ou pierre équivalente, au choix » (V). Le stock n'est donc pas forcément à l'atelier (I).
- **Délai de fabrication** : non affiché dans le constructeur ni dans le panier (V).
- **Retours**, deux messages qui ne disent pas la même chose (V) :
  - panier et bandeau : « 30 jours pour retourner ou échanger » ;
  - page `החזרות` : avoir en boutique sous 30 jours ; remboursement intégral seulement sous 2 jours ouvrés et jusqu'à 3 000 ₪ ; au-delà, ou pour un design spécial, échange seulement ;
  - toujours sur `החזרות` : « un diamant naturel commandé spécialement selon le choix du client avec un certificat GIA ne peut être retourné ». Frais de 5 % ou 100 ₪, retour en boutique gratuit, envoi entre 25 et 150 ₪.
- **Garanties** : à vie sur les défauts de fabrication ; première mise à taille gratuite (V).
- **Certificats** : GIA d'origine pour chaque pierre, numéro « gravé sur la pierre » (V).

## Confiance et service

- **Avis** : « 4.9/5 sur 892 avis vérifiés », depuis 2006 (V, page du constructeur) ; logo d'avis Google dans le pied de page (V).
- **Libellé du synthétique** : « יהלומי מעבדה » dans les menus (V). Le constructeur ne propose que du naturel (V).
- **Langue et devise** : hébreu, ₪ (V).
- **Preuves** : photo réelle de chaque pierre, « fabrication israélienne depuis 2006 », studio à la Bourse ; « voir le diamant avant » : rendez-vous ou appel avec Shiree (V). Ni photos ni vidéos de fabrication, ni suivi de commande dans le parcours (V).
- **Service** : WhatsApp (« un humain répond, en général en quelques minutes »), rendez-vous, téléphone (V).

## Points forts à retenir pour JR Diamond

1. **Vendre une pierre précise.** Photo réelle, numéro, mesures et certificat, filtrables par couleur et pureté (V). C'est la version « catalogue » de la « pierre filmée » de JR Diamond.
2. **Deux entrées, diamant d'abord ou design d'abord.** Le design filtre les formes compatibles (V). Le configurateur de JR Diamond peut garder cette logique.
3. **Un total en direct, décomposé dans le panier** (monture et pierre), avec l'échelonnement « 10 × 1 040 ₪ » à côté (V). Cela répond à « le prix est expliqué ».
4. **Personnalisation gratuite et nommée** : taille, gravure, « pierre secrète » (V). La pierre secrète est un petit plus à faible coût, facile à proposer.
5. **Bit et paiement en 10 fois affichés au panier** (V) : c'est la norme du marché israélien.
6. **Une règle d'indisponibilité claire** (remboursement ou pierre équivalente) (V). Elle est utile si JR Diamond vend des pierres du stock de la Bourse.

## Défauts observés

1. **Une fenêtre d'inscription coupe le parcours** et bloque les clics, sur ordinateur comme sur iPhone (V).
2. **Des retours contradictoires** : « 30 jours retour ou échange » au panier, mais avoir seulement, remboursement limité à 3 000 ₪, et pierre GIA non reprise sur la page des retours (V).
3. **Le stock arrive tard** : le nombre de pierres et le prix « dès » n'apparaissent qu'après environ 12 s ; avant, les premières formes s'affichent sans prix (V).
4. **Le platine reprend la photo de l'or blanc** (V) : un écart, mineur, entre l'image et l'objet.
5. **La gravure n'est pas rappelée** dans le résumé de l'en-tête (V).
6. **« 10 designs » annoncés, 9 proposés pour un ovale** (V) : le serti clos disparaît sans explication.
7. **Aucun délai de fabrication affiché** jusqu'au panier (V).
8. **Les liens 360° et certificat passent par un hébergeur tiers sur le port 8520** (V). Un réseau d'entreprise ou un proxy peut les bloquer, comme ici (I).

## Limites de l'audit

- La vue 360° et le certificat n'ont pas pu être affichés (port 8520 injoignable depuis l'environnement). Les vidéos de forme de la page d'entrée se chargent (V).
- Paiement, coupon, WhatsApp, réservation et suppression d'articles du panier non actionnés. Le panier contient une bague ajoutée pendant l'audit, dans la session du navigateur seulement.
- Curseurs de carat non déplacés. Le site anglais (shireeodiz.com) n'est pas audité.
- Temps mesurés sur une machine partagée, deux passages par appareil (V) :
  - ordinateur : DOM 1,7 à 4,4 s, première vidéo 2,2 à 5,2 s, LCP 1,5 à 2,1 s ;
  - iPhone : DOM 5,6 à 18,8 s, visuel 8,6 à 20,2 s, LCP 3,0 à 5,5 s.
- L'iPhone est émulé avec Chromium.

## Sources

- https://www.shireeodiz.co.il/robots.txt
- https://www.shireeodiz.co.il/pages/byor (constructeur, actionné) · https://www.shireeodiz.co.il/pages/byor?start=design
- https://www.shireeodiz.co.il/cart (panier après ajout)
- https://www.shireeodiz.co.il/pages/החזרות
- https://media.hdfiles.in:8520/hd.aspx?StoneId=F6AD0464-6248-41E9-92E2-72BA0B3E2AFB et cert.aspx (injoignables d'ici)
- https://www.shireeodiz.co.il/ (accueil, avis, adresse)
