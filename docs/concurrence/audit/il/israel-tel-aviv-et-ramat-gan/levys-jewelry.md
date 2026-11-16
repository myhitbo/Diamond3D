# Audit : Levy's Jewelry (Ramat Gan), fiche à tiroir de choix de pierre

| | |
|---|---|
| Site | Levy's (לוי׳ס תכשיטים), « boutique d'usine » : 17 HaYarkon, 2e étage, Bourse, Ramat Gan ; 03-600-50-24 (V) |
| Page de départ | https://levysjewelry.co.il/collections/טבעות-אירוסין-יהלומי-מעבדה, puis la fiche « Santorini » (https://levysjewelry.co.il/products/אירוסין-סנטוריני-יהלום-מעבדה) : le constructeur est un **tiroir « בחירת יהלום »** ouvert depuis la fiche |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Fiche et tiroir de pierre parcourus sur ordinateur, prix relevés à chaque pas. **L'ajout au panier n'a pas été réalisé** : il passe par `/cart/add.js`, interdit par le robots.txt (`Disallow: /cart/`) ; la requête a été bloquée par la règle de l'audit. iPhone : chargement des pages seulement |
| robots.txt | Shopify standard : `Allow: /` ; interdits `/cart/`, `/cart.js`, `/checkout`, `/checkouts/`, `/account`, `/orders`, `/recommendations/products`, `/collections/*sort_by*`, `/collections/*+*`, `/collections/*filter*&*filter*`, `/cdn/wpm/*.js`, `/.well-known/shopify/monorail`. Aucun `Crawl-delay` (V). Les requêtes interdites émises par la page (`cart.js`, `recommendations/products`, `monorail`, scripts `wpm`) ont été bloquées |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Collection « טבעות אירוסין יהלומי מעבדה » | 48 modèles (liens de la page), tous nommés d'après des îles (Maldives, Santorini, Bora Bora…), « prix promotionnel à partir de » de 3 000 à plus de 7 600 ₪ ; panneau de filtres avec curseur de prix (V) | « dès » sur chaque carte | — |
| 2. Fiche | taille (43 à 57, liste déroulante) ; qualité d'or 14 K / 18 K ; couleur d'or White / Yellow / Rose ; pierre centrale : onglets **naturel / laboratoire** avec forme, carat, pureté et couleur ; prix ; « תאריך משלוח משוער » (V) | voir ci-dessous | la photo principale est celle de l'or blanc ; le changement avec l'or jaune ou rose n'a pas pu être établi (V : même nom de fichier relevé) |
| 3. Tiroir « בחירת יהלום » | forme (9 : rond, coussin, ovale, émeraude, princesse, poire, cœur, marquise, radiant) ; pureté VS1 / VS2 / SI1 ; couleur G / F / D-E ; **poids** par curseur à 7 positions : 0,70 à 4,00 ct ; prix en bas, bouton **« הוסף לסל עם היהלום »** (V) | voir ci-dessous | — |
| 4. Panier | non atteint (voir le statut) | — | — |

## Prix relevés (V : fiche « Santorini », ovale, 14 K blanc, pierre de laboratoire, taille 52)

| Choix | Total |
|---|---|
| 0,70 ct, VS2, G (départ) | 3 000 ₪ |
| 1,00 ct | 3 570 ₪ |
| 1,20 ct | 3 850 ₪ |
| 1,50 ct | 4 500 ₪ |
| 2,00 ct | 5 600 ₪ |
| 3,00 ct | 7 450 ₪ |
| 4,00 ct | 10 700 ₪ |
| 4,00 ct, couleur F / D-E | 11 500 / 12 100 ₪ |
| 0,70 ct, pureté VS1 | 3 130 ₪ (+ 130) |
| or 18 K au lieu de 14 K | **4 000 ₪** (+ 1 000) |
| pierre naturelle (0,30 ct, SI1, I-J, 14 K) | 4 000 ₪ |

- Le prix se met à jour à chaque clic, sans rechargement de page (V).
- **La forme du diamant ne change pas le prix** (rond, coussin : 3 000 ₪) dans cette fiche (V). La forme se change dans le tiroir, mais la photo de la bague reste l'ovale (V : capture).
- **La couleur d'or** (blanc, jaune, rose) ne change pas le prix à 18 K (4 000 ₪ pour les trois) (V).
- Les données de variation sont dans la page : la pierre est un produit « יהלום מעבדה פנטזי » avec variantes carat / pureté / couleur (V : source de la page).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « המכירה בסיטונאות בלבד · לפניות דרך הוואצאפ בלבד » | fenêtre à l'ouverture de **chaque fiche** | texte : « la vente est en gros uniquement, demandes par WhatsApp seulement » ; **fermée par la croix** (V) | — | fonctionne ; contradiction avec la vente au détail (voir les défauts) |
| 14K / 18K | boutons radio | change le total et le libellé (V) | + 1 000 ₪ | fonctionne |
| White / Yellow / Rose | boutons radio | se cochent ; prix inchangé (V) | inchangé | fonctionne |
| Taille 43 à 57 | liste | la taille 52 se choisit (V) | inchangé | fonctionne |
| יהלום טבעי / יהלום מעבדה | onglets | passe à 0,3 ct, SI1, I-J, prix 4 000 ₪ (V) | + 1 000 ₪ par rapport au départ | fonctionne |
| בחירת יהלום | bouton | ouvre le tiroir (forme, pureté, couleur, poids) (V) | — | fonctionne |
| 9 formes | cartes | se cochent ; le prix reste 3 000 ₪ (V) | inchangé | fonctionne |
| VS1 / VS2 / SI1 · G / F / D-E | boutons | mettent le total à jour (V) | voir le tableau | fonctionne |
| Curseur de poids (0 à 6) | curseur | 7 positions, 0,70 à 4,00 ct ; le total suit (V) | de 3 000 à 10 700 ₪ | fonctionne |
| הוסף לסל עם היהלום | bouton | cliqué : la requête `/cart/add.js` a été **bloquée par la règle de l'audit** ; rien d'autre n'a changé (V) | — | **non réalisé** |
| ? (info-bulles forme, pureté, couleur) et « מידע על יהלומים » | boutons | présents (V) | — | non actionnés |
| השאירו פרטים ונחזור אליכם | bouton | formulaire de contact (V : libellé) | — | non actionné (données personnelles) |
| WhatsApp (flottant) | bouton | ouvre WhatsApp (V : libellé) | — | non actionné |
| « קבל 10% הנחה » | bandeau latéral | offre d'inscription, apparaît après l'ouverture du tiroir (V) | — | non actionné |
| Widget d'accessibilité | bouton | présent sur chaque page (V) | — | non actionné |
| Filtres (curseurs de prix, cases) | panneau | présents sur la collection (V) | — | non actionnés (cumul de filtres interdit) |

Absents (V) : 3D, 360°, essayage, comparaison, photo de la pierre réelle, certificat visible, choix de la forme sur la photo de la bague.

## Options disponibles

- **Métal** : or 14 K ou 18 K ; blanc, jaune, rose (V). Pas de platine relevé.
- **Pierre** : naturel ou laboratoire ; couleur G, F, D-E ; pureté VS1, VS2, SI1 ; poids 0,70 à 4,00 ct ; 9 formes (V).
- **Taille** : 43 à 57 (V).
- **Sur mesure** : « chaque bijou est fabriqué sur commande personnalisée » (V : texte) ; bijoux de saphir à part (V : menu).

## Prix, délais, retours, garanties (V : fiche et `/pages/משלוחים-והחזרות`)

- **Délai** : date estimée affichée sur la fiche (**04/12/2026**, soit 18 jours le 16/11) ; livraison standard jusqu'à 10 jours ouvrés après l'approbation de la commande ; retrait au bureau de Ramat Gan, dimanche à jeudi, 10 h 30 à 17 h 30 (V).
- **Livraison** : « nationale ; demandez un devis selon votre lieu » sur la fiche ; coût « précisé à la commande » dans la politique (V : les deux textes diffèrent).
- **Retour** : la fiche annonce « retour ou échange sous 30 jours pour une bague en stock » ; **la politique** dit remboursement possible **48 heures** après l'achat, pour les transactions jusqu'à **3 000 ₪**, frais de 5 % ou 100 ₪ (le plus bas), **plus 3 % de frais de carte** ; « un produit fabriqué sur mesure ne se retourne ni ne s'échange » ; pas d'annulation après le début de fabrication (V).
- **Paiement** : jusqu'à **24 paiements** (V : fiche).
- **Garantie** : pas de durée de garantie lue ; « **rafraîchissement de la bague une fois par an gratuit** » ; première mise à taille gratuite (V).
- **Certificat** : certificat d'évaluation détaillé (métaux, valeur) joint à chaque bijou (V : texte) ; aucun certificat de laboratoire cité.

## Confiance et service

- **Libellé du synthétique** : « יהלום מעבדה » ; les noms de modèle portent « מעבדה » (V).
- **Atelier** : « boutique d'usine » responsable de toutes les étapes, « du croquis sur la feuille ou du développement dans des logiciels informatiques avancés jusqu'à la mise en métal et au sertissage » (V : texte). Aucune photo ni vidéo de fabrication relevée (V).
- **Avis** : aucun relevé sur la fiche (V).
- **Contact** : formulaire, WhatsApp, e-mail ; déclaration d'accessibilité et widget d'accessibilité (V).
- Galerie de la fiche : 7 vignettes (photos de la bague seule, portée, dans un écrin ; une vidéo ou animation en première vignette) (V : capture).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Collection | charge complète 5,0 s | charge complète 4,1 s (DOM 0,9 s) |
| Fiche Santorini | charge complète 4,5 à 5,1 s ; LCP 2,3 s | charge complète 4,1 s |

## Points forts à retenir pour JR Diamond

1. **Un tiroir qui sépare la monture de la pierre** et affiche le prix total à chaque position du curseur de poids (3 000 ; 3 570 ; 3 850 ; 4 500 ; 5 600 ; 7 450 ; 10 700 ₪) [V]. Le curseur à crans est plus simple à manier au pouce qu'un champ de saisie.
2. **Pierre = produit à variantes** : carat × pureté × couleur, avec un supplément (+ 130 ₪ pour VS1, + 800 ₪ pour F à 4 ct) [V : source de la page]. Modèle de « grille de prix des pierres » (question en attente à l'atelier) [I].
3. **Date de livraison estimée sur la fiche** [V] : répond à la plainte sur les délais qui glissent (forums de `docs/concurrence/forums/`).
4. **24 paiements** [V] : le plus long échelonnement relevé en Israël avec Inbar ; à comparer avec `docs/PAIEMENT.md` (Grow).
5. **Rafraîchissement annuel gratuit** de la bague [V] : argument de service, proche du « contrôle gratuit » de Diamony et de XLAB.
6. **Naturel et laboratoire dans le même tiroir**, avec le prix qui change [V].

## Défauts observés

1. **Une fenêtre « vente en gros uniquement, WhatsApp seulement » s'ouvre sur chaque fiche** [V] alors que le site vend au détail avec prix, panier et paiement en 24 fois. Elle bloque les clics tant qu'on ne la ferme pas ; un visiteur peut croire que le site ne vend pas aux particuliers (I).
2. **Retours contradictoires** : 30 jours sur la fiche, 48 heures et plafond de 3 000 ₪ dans la politique, plus 3 % de frais de carte [V].
3. **Plafond de remboursement à 3 000 ₪** : presque toute bague au-dessus du prix de départ est exclue du remboursement [V].
4. **L'image ne suit pas le choix** : la forme de la pierre (9 formes dans le tiroir) ne change pas la photo, qui reste l'ovale [V].
5. **Pas de photo de la pierre réelle, pas de numéro de certificat** [V].
6. **Ajout au panier impossible à vérifier** (robots) ; la fiche n'indique ni le total après ajout ni le coût de livraison [V].
7. **Livraison « sur devis »** sur la fiche [V].
8. **Pas de garantie chiffrée** (durée) [V : lecture de la fiche et de la politique].
9. **Les filtres de la collection sont difficiles à valider** (cumul de filtres interdit par le robots.txt), sans retour visible [I].

## Limites de l'audit

- Ajout au panier, panier, paiement : non réalisés (robots.txt). Le total « avec la pierre » après ajout n'est pas connu.
- Filtres de la collection, tri, recherche : non actionnés. Un seul modèle (Santorini, ovale) a été parcouru ; les autres modèles et la page « איך לבחור טבעת » ne sont pas lus.
- iPhone : seules les pages ont été chargées ; le constructeur n'y a pas été refait. LCP indisponible (0 ms relevé) : temps de chargement seul.
- Formulaires, WhatsApp, inscription (« 10 % de remise ») : non ouverts.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://levysjewelry.co.il/robots.txt
- https://levysjewelry.co.il/collections/טבעות-אירוסין-יהלומי-מעבדה
- https://levysjewelry.co.il/products/אירוסין-סנטוריני-יהלום-מעבדה
- https://levysjewelry.co.il/pages/משלוחים-והחזרות
- Inventaire : `INVENTAIRE.md` (classement)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/levys/`
