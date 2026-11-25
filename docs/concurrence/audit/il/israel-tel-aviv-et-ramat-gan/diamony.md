# Audit : Diamony (DiamoNY), studio numérique de joaillerie sur mesure

| | |
|---|---|
| Site | DiamoNY, « studio numérique » ; créateur nommé : Nitzan Yaakobi (page `/page/about`) ; « depuis 2010 » (V). Aucune adresse de boutique : rendez-vous en visio ou par WhatsApp (V) |
| Page de départ | https://diamony.me/collections/rings/engagement, puis la fiche https://diamony.me/jewelry/women-collection/women-rings/ring-0017-טבעת-יהלומים-עלמה (« עלמה », pas de constructeur : les options sont sur la fiche) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (locale he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet** pour le parcours catalogue et fiche. Pas de panier ni de paiement : on part vers WhatsApp ou une visio (V). Essayage en réalité augmentée **non testé** (il faut une caméra : seule la boîte de dialogue qui le précède a été lue) |
| robots.txt | `User-Agent: *` : `Allow: /` ; interdits `/admin`, `/studio-admin`, `/api`, `/legal/shipping-returns`. Aucun `Crawl-delay` (V). La page `/legal/shipping-returns` **n'a pas été ouverte** ; ses règles figurent dans `/legal/site-policy` (autorisée). Le navigateur a tenté `/api/vip/me` : la requête a été **bloquée** par la règle de l'audit (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Collection « טבעות אירוסין » | environ 30 modèles (liens de la page), chacun avec deux prix « החל מ » : **יהלום מעבדה** et **יהלום טבעי** ; mention « בהזמנה » (fait sur commande) ; de 2 800 à 9 800 ₪ au total des prix « dès » (V). Sous-catégories : bagues de diamants, de pierres de couleur, en or, en perles | — | — |
| 2. Fiche | couleur d'or : 14 K jaune, 14 K blanc, 14 K rouge (radios) ; type de diamant : laboratoire ou naturel (radios A et B, chacune avec son prix « dès ») ; « carat moyen 0,45 » (V) | **aucun** : 3 100 ₪ (laboratoire) et 6 200 ₪ (naturel) restent affichés, quelle que soit la couleur d'or (V) | change : une photo par couleur d'or (V) ; le choix laboratoire ou naturel ne change ni prix ni photo (V) |
| 3. Contact | WhatsApp, visio (« תיאום פגישת וידאו לייעוץ »), e-mail ; pas de bouton d'achat (V) | — | — |

Le prix n'est jamais fixe : « à partir de » pour un carat « moyen » (V). Le prix exact vient après la **séance de conception** avec esquisse 3D (V, `/` et `/page/about`).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| דחה הכל / אשר הכל / התאמה אישית | bandeau de cookies | « דחה הכל » ferme le bandeau (V) | — | fonctionne |
| 14K צהוב / לבן / אדום | radios | la photo principale change à chaque clic ; le libellé « צבע זהב » suit (V) | inchangé | fonctionne |
| יהלום מעבדה / יהלום טבעי | radios A / B | se cochent ; **aucun changement visible** de prix ni d'image (les deux prix sont déjà à l'écran) (V) | inchangé | fonctionne, sans effet |
| חיתוך · צבע · ניקיון · קראט | boutons | ouvrent des cartes d'information sur les 4 C (« CUT · DIAMONY », avec « למד עוד ») ; la boîte n'a pas été relue après chaque clic (V : texte de la fiche) | — | fonctionne |
| תמונה 1, 2 · וידאו 3 | onglets de la galerie | présents ; la vidéo est visible sur la fiche. Ils n'ont pas pu être actionnés (hors de l'écran, délai dépassé) (V) | — | non actionnés |
| פריט הבא / קודם | boutons | navigation entre modèles (V : contrôles) | — | non actionnés |
| הוספה לרשימת המשאלות (cœur) | bouton | liste de souhaits (`/favorites`) (V : contrôles) | — | non actionné |
| **מדידה על היד** (fiche et chaque carte) | bouton | **ordinateur** : fenêtre « scannez le code » avec un QR, et la possibilité de changer le carat et la forme du diamant dans l'essayage. **iPhone** : fenêtre « nous demanderons l'accès à la caméra arrière » ; le bouton suivant (accès caméra) n'a **pas** été actionné (V) | — | fenêtre lue ; essayage non testé |
| WhatsApp (fiche) | lien wa.me | message pré-rempli : « bonjour, je voudrais des détails sur cet article : טבעת יהלומים עלמה » ; **la couleur d'or et le type de diamant choisis ne sont pas dans le message** (V, lien lu, **non ouvert**) | — | non ouvert |
| תיאום פגישת וידאו לייעוץ | bouton | prise de rendez-vous visio (V : contrôle présent) | — | non actionné (données personnelles) |
| VIP | bouton | club VIP avec « coffre » personnel et crédit (V : `/legal/site-policy`) | — | non ouvert (compte) |
| ניהול קובצי Cookie · תפריט נגישות | boutons | présents sur chaque page ; déclaration d'accessibilité liée en pied de page (V) | — | non actionnés |
| diamonyme@gmail.com | lien mailto | — | — | non actionné |

Absents de la fiche (V) : taille de doigt, gravure, choix du carat, panier, comparaison, calcul de prix, certificat nommé, 3D interactive, financement.

## Options disponibles

- **Métal** : or 14 K jaune, blanc, rouge sur la fiche ; la page « à propos » annonce « 14 K et 18 K » (V). Pas de platine annoncé (V).
- **Pierre** : laboratoire ou naturel sur chaque bague ; pierres de couleur dans la rubrique « אבני חן » (V). Le texte de la fiche « עלמה » décrit un « diamant naturel de 0,45 ct, avec certificat gemmologique » alors que les deux prix sont affichés : la fiche ne dit pas si le certificat vaut aussi pour le laboratoire (V ; lecture de l'incohérence : I).
- **Formes** : une forme par modèle (rond, marquise, émeraude, ovale…) ; le choix de la forme passe par un autre modèle (V : noms des fiches).
- **Taille de doigt** : guide `/size-guide` ; aucune taille dans le parcours (V).

## Prix, délais, retours, garanties

Source : `/legal/site-policy`, mise à jour le 09/08/2026 (V). `/legal/shipping-returns` interdite, non lue.

- **Prix** : « à partir de » par modèle et par type de diamant, TTC non précisé sur les fiches (I). Aucun détail du prix (V).
- **Acompte** : 500 ₪ à l'approbation de l'esquisse 3D, « confirmation finale du début de fabrication » (V).
- **Délai : trois chiffres**. La fiche et l'accueil disent « jusqu'à 7 jours ouvrés de fabrication » ; la politique dit « livraison sous **14 jours ouvrés** à compter de l'approbation de l'esquisse et du paiement de l'acompte » ; vendredis, samedis, veilles de fête et fêtes en sont exclus (V).
- **Livraison** : 50 ₪, gratuite au-dessus de 1 200 ₪, jusqu'à 4 jours ouvrés après la fabrication (V).
- **Retours** (V) :
  - bijoux « de rayon » jusqu'à 3 000 ₪ : retour sous 14 jours, frais d'annulation légaux (5 % ou 100 ₪, le plus bas) ;
  - **sur-mesure : « annulation et retour impossibles selon la loi »**, y compris après l'esquisse 3D, la gravure ou une taille spéciale ; geste commercial possible « à la discrétion exclusive de la direction ».
- **Garantie** : 12 mois sur les défauts de fabrication ; sertissage des pierres de côté (jusqu'à 0,05 ct) 12 mois ; **nettoyage, repolissage et contrôle des griffes gratuits à vie** ; garantie perdue si un tiers touche au bijou (V).
- **Club VIP** : remise de 7 à 10 % selon le montant, autour de dates choisies ; non automatique : le client la demande avant la commande (V).

## Confiance et service

- **Libellé du synthétique** : « יהלום מעבדה » (V).
- **Avis** : bandeau « 5,0 Google » et une douzaine d'avis datés (mars à août 2026), avec la ville et l'initiale ; villes : Ashkelon, Rishon LeZion, Beer Yaakov, Sderot… (V). Pas d'adresse d'atelier.
- **Preuves de fabrication** : cinq étapes décrites (réunion, esquisse 3D, mise à jour, fonte, sertissage et remise) ; aucune photo de fabrication relevée dans le parcours ; la rubrique « סרטוני המותג » (`/brand-videos`) existe (V : lien), non ouverte.
- **Contenu** : guides (diamants, tailles), blog, page « pour qui » (`/suitable-for`) qui compare le sur-mesure à l'achat en boutique, un témoignage « bientôt publié » (V).
- **Service** : WhatsApp (+972 54…), e-mail, visio ; déclaration d'accessibilité en pied de page (V).

## Temps d'apparition du visuel principal (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Accueil | — | LCP 1,2 s |
| Collection | LCP 2,4 s ; charge complète 3,9 s | — |
| Fiche « עלמה » | LCP 4,0 s ; charge complète 7,7 s | charge complète 4,4 s |

## Points forts à retenir pour JR Diamond

1. **Laboratoire et naturel côte à côte, avec le prix « dès » de chacun, sur la fiche et la carte** (3 100 contre 6 200 ₪ pour « עלמה ») [V]. C'est la comparaison que JR Diamond ne montre pas encore. Le prix de départ est le premier acte de confiance [I].
2. **Essayage en réalité augmentée sans application** : texte rassurant (« traitement sur l'appareil, aucune image envoyée ») et choix du carat et de la forme dans l'essayage [V pour la page et la fenêtre ; le fonctionnement réel n'a pas été testé]. À rapprocher du rendu 3D de JR Diamond, qui peut proposer la même chose à terme (I).
3. **Conditions écrites en entier, y compris l'exclusion du sur-mesure** et ce qu'elle couvre (sketch 3D approuvé, gravure) [V] : même question juridique que pour JR Diamond (exception du « fabriqué sur mesure », dossier de l'avocat).
4. **Service à vie** : nettoyage, repolissage et contrôle des griffes gratuits [V]. Argument d'atelier, facile à copier.
5. **Promesse de livraison datée du début de fabrication, avec exclusions listées** (vendredi, samedi, fêtes, guerre) [V] : honnête sur le point où les délais glissent (voir les forums de `docs/concurrence/forums/`).
6. **Acompte de 500 ₪ à l'esquisse** : la structure « esquisse gratuite, acompte, fabrication » est celle du parcours « devis puis lien de paiement » de `docs/PAIEMENT.md` [V pour Diamony ; l'application : I].

## Défauts observés

1. **Trois délais** : 7 jours (accueil et fiche), 14 jours (politique), plus l'attente de l'esquisse [V]. Le client ne sait pas lequel retenir.
2. **Les choix de la fiche ne changent pas le prix** (or, laboratoire ou naturel) ; il n'y a pas de prix pour la configuration choisie, seulement un « dès » [V].
3. **Le message WhatsApp ne contient que le nom du modèle** : ni couleur d'or, ni type de diamant [V]. L'atelier doit redemander ce que le client vient de choisir.
4. **Pas de taille de doigt dans le parcours**, pas de gravure, pas de carat [V].
5. **Description contradictoire** : « diamant naturel de 0,45 ct, certificat » sur la fiche, avec un prix laboratoire à côté [V].
6. **Pas d'adresse physique** : un acheteur israélien ne sait pas où est l'atelier [V]. Contraire à « l'atelier en direct » de JR Diamond.
7. **Pas de photo de fabrication** malgré les cinq étapes décrites [V].
8. **Lenteur de la fiche** : charge complète de 7,7 s sur ordinateur [V ; une passe].
9. **Fenêtre de cookies** à chaque page et appels vers `/api/…` interdits par le robots.txt sur le site même : sans effet pour le visiteur [V].

## Limites de l'audit

- `/legal/shipping-returns` (interdite) non lue ; les conditions viennent de `/legal/site-policy`, qui peut différer [I].
- Essayage AR : seules les fenêtres d'accès ont été lues, ni la caméra ni le rendu sur la main n'ont été testés.
- Visio, WhatsApp, e-mail, club VIP : non ouverts. Galerie (photos 2 et vidéo 3) non actionnée.
- La fiche n'a été étudiée que pour un modèle (« עלמה ») ; les autres sont supposés construits de même (I).
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://diamony.me/robots.txt
- https://diamony.me/ · /collections/rings/engagement · /virtual-try-on · /suitable-for · /page/about · /legal/site-policy
- https://diamony.me/jewelry/women-collection/women-rings/ring-0017-טבעת-יהלומים-עלמה
- Inventaire : `INVENTAIRE.md` (essayage AR, prix laboratoire et naturel)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/diamony/`
