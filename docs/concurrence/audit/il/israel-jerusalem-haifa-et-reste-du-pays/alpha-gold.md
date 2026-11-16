# Audit : Alpha Gold (Haïfa)

- **Site** : Alpha Gold Ltd (אלפא גולד בע״מ), société israélienne depuis 2015, salle d'exposition et atelier au 3 rue HaDeshanim, Haïfa [V : /about]
- **Adresse** : https://alpha-gold.co.il/ ; page de départ : https://alpha-gold.co.il/collections/engagement-rings, puis la fiche https://alpha-gold.co.il/product/rosalyn-round-solitaire-ring-2ct-2000 (pas de constructeur ; les options sont sur la fiche)
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366 × 900 (locale he-IL) et affichage iPhone 13
- **Statut** : **complet** jusqu'au panier. Le bouton « לקופה » (paiement) n'a pas été suivi ; le formulaire de contact n'a pas été rempli. Filtres de forme, de prix et de tri non actionnés : robots.txt interdit `?shape=`, `?price=` et `?sort=`.

Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé. robots.txt : ouvert à tous, y compris nommément aux agents d'IA, sauf ces paramètres et `?cat=`, `?q=` [V].

## Parcours

| Étape | Options |
|---|---|
| 1. Collection « טבעות אירוסין » | 152 bagues, pierre centrale synthétique de 1,25 à 2,50 ct [V] · filtres : type de pierre (tout, synthétique, moissanite), couleur d'or (tout, jaune, blanc), forme (8), prix (jusqu'à 3 500 ₪, 3 500–5 500 ₪, plus de 5 500 ₪) · tri (4) |
| 2. Fiche | forme (sur les modèles déclinés : lien vers une autre fiche) · couleur d'or · type de pierre · taille israélienne 7 à 22 ou « taille à convenir » |
| 3. Ajout au panier | refusé sans taille ; ajout avec taille 14 [V] |
| 4. Panier (/cart) | récapitulatif, quantité, livraison, TVA, validité du prix, « לקופה » → /checkout (non suivi) |

## Contrôles vérifiés

Relevé complet : 123 contrôles sur ordinateur, 113 sur iPhone [V : `controls.cjs`]. Actionnés par les scripts a1 (ordinateur et iPhone) et a2.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau de cookies : התאמה אישית · דחיית הכול · אישור הכול | boutons | « דחיית הכול » ferme le bandeau [V] | — | fonctionne |
| צבע זהב : צהוב / לבן | boutons radio | libellé « זהב לבן 14K », **photo remplacée** par la version or blanc [V] | inchangé (5 179 ₪) | fonctionne |
| סוג האבן : יהלום מעבדה / מויסנייט | cartes radio, prix sur chaque carte | **prix 5 179 ₪ → 2 939 ₪** avec la moissanite ; la photo ne change pas [V] | −2 240 ₪ | fonctionne |
| מידת טבעת 7 … 22 (16 tailles) | boutons radio | chacune se coche [V, toutes testées] | inchangé | fonctionne |
| « לא בטוחים במידה? נתאם איתכם לפני הייצור » | bouton radio | se coche, taille convenue avant fabrication [V] | inchangé | fonctionne |
| מדריך מידות | lien | /guides/ring-size-guide : taille israélienne = tour de doigt en mm − 40, 2 méthodes de mesure [V] | — | fonctionne |
| צורת האבן (fiche « Penny ») : עגול / קושן / לב | liens | ouvrent 3 fiches distinctes (Penny rond 5 033 ₪, Tzlil coussin 5 276 ₪, Lotte cœur 5 009 ₪) : « chaque forme est un modèle distinct avec son prix et ses images » [V] | selon le modèle | fonctionne |
| Galerie : התמונה הבאה / הקודמת, תמונה 1 / 2 | boutons (flèches absentes sur iPhone) | 2 images : rendu sur socle, rendu porté [V] | — | fonctionne |
| הגדלת התמונה | bouton | visionneuse « 1 / 2 », « cliquer pour agrandir, glisser pour déplacer » ; sur iPhone « pincer ou toucher deux fois » [V] | — | fonctionne |
| הוספה לעגלה (sans taille) | bouton | message « יש לבחור מידת טבעת לפני ההוספה לעגלה » [V] | — | fonctionne (contrôle de saisie) |
| הוספה לעגלה (taille 14) | bouton | ajout ; la fiche défile vers le formulaire `#lead`, sans tiroir de panier [V] | — | fonctionne, sans confirmation visible [I] |
| שאלה על הדגם? כתבו לנו בוואטסאפ | lien | wa.me/972533317360 ; **le message reprend le modèle et les options choisies** (« זהב צהוב 14K · יהלום מעבדה… ») [V] | — | lien valide (non ouvert) |
| 04-6010870 | lien | tel:+97246010870 [V] | — | valide |
| השאירו פרטים | lien | ancre `#lead` (formulaire : nom, téléphone, e-mail, message, 2 cases d'accord) [V] | — | non rempli (règle) |
| Bouton WhatsApp flottant | lien | même numéro [V : capture] | — | valide |
| Panier : כמות − / + · הסרה · לקופה · להמשך קניות | boutons et liens | « לקופה » → /checkout, « להמשך קניות » → /collections/all [V] | — | quantité et suppression non actionnées ; paiement non suivi (règle) |
| Collection : filtre couleur לבן / צהוב / הכול | boutons | 148 / 152 / 152 bagues ; adresse `?color=W`, `?color=Y` [V] | — | fonctionne |
| Collection : type de pierre | boutons | « le prix affiché suit le type de pierre choisi » [V : texte] | — | non trouvé sous ce libellé par le script |
| Collection : 8 formes, 3 tranches de prix, tri (מומלץ, מחיר ↑, מחיר ↓, משקל יהלום) | boutons, liste | — | — | **non actionnés : robots.txt interdit `?shape=`, `?price=`, `?sort=`** |
| Recherche (חיפוש) | champ | — | — | non testée : `?q=` interdit |
| English | lien | /en/product/… : page traduite (« Lab-grown diamond », « incl. VAT »), prix en ₪ [V] | identique | fonctionne |
| התקינו את האפליקציה | bouton (iPhone seulement) | proposition d'installer l'application web [V : contrôles iPhone] | — | non actionné |
| כניסה לעסקים · כניסה ללקוחות | liens | app.alpha-gold.co.il/login [V] | — | non suivis (compte) |
| ההזמנות שלי | lien | /account : suivi par téléphone et code SMS [V : /faq] | — | non suivi (compte) |
| ביטול עסקה | lien | /cancel : formulaire légal d'annulation [V] | — | non rempli |
| Liens du pied de page (guides, mentions légales, Instagram, Facebook, TikTok) | liens | 8 pages légales et guides lus : toutes 200 [V] | — | fonctionnent |
| הדגמים הקודמים / הבאים · זהב לבן 14K (cartes « אולי תאהבו ») | boutons | carrousel de modèles proches ; aperçu de la carte en or blanc [V : contrôles] | — | non actionnés un par un |

Absents [V : fiche, collection, FAQ] : 3D, 360°, vidéo, AR, essayage sur la main, partager, enregistrer, comparer, gravure, choix du carat sur la fiche, griffes, pavage, monture, naturel, chat intégré, rendez-vous en ligne.

## Options disponibles

- **Métal** : or 14 k (585) seulement, jaune ou blanc (rhodié) [V].
- **Pierre** : synthétique (« יהלום מעבדה ») ou moissanite, signalée comme « אבן שאינה יהלום » (« pierre qui n'est pas un diamant ») [V]. Pas de naturel [V : /faq].
- **Formes** (filtre) : rond, ovale, poire, émeraude, coussin, cœur, marquise, princesse [V].
- **Carat** : fixé par modèle (1,25 à 2,50 ct dans la collection) [V].
- **Tailles** : israéliennes 7 à 22, ou « taille à convenir avant fabrication » [V].
- La couleur et la pureté des pierres ne sont pas affichées : « האתר אינו מציג דרגות צבע או ניקיון » [V : /legal/lab-grown-disclosure].

## Prix, délais, retours, garanties

- **Prix** : fixe, TTC, sur chaque carte et chaque fiche. Rosalyn : 5 179 ₪ en synthétique, 2 939 ₪ en moissanite [V].
  - 12 paiements « sans supplément sur le prix comptant » (≈ 432 ₪) [V].
  - Pas de décomposition du prix [V]. Les prix suivent le cours de l'or ; le prix affiché au paiement fait foi [V : /faq].
- **Panier** [V : /cart, iPhone] :
  - ligne « זהב צהוב 14K · יהלום מעבדה · מידה 14 », « ייצור לפי הזמנה » ;
  - sous-total 5 179 ₪, livraison « חינם », total 5 179 ₪, dont TVA 790 ₪ ;
  - « המחיר תקף עד 16:40 » : le prix n'est garanti que jusqu'à une heure donnée ;
  - « livraison en Israël seulement ».
- **Livraison** : 80 ₪, offerte dès 900 ₪ ; express 120 ₪ ; remise contre signature [V : /legal/shipping-returns].
- **Délai** : fabrication sur commande en 7 à 14 jours, puis livraison ; date estimée affichée au paiement [V].
- **Paiement** : carte bancaire jusqu'à 12 fois, sur la page sécurisée du prestataire de paiement [V : fiche, /faq]. Bit, Apple Pay et PayPal non vus [V].
- **Annulation et retours** [V : /legal/shipping-returns, /cancel] :
  - 14 jours ; frais de 100 ₪ ou 5 %, le plus bas ;
  - remboursement sous 14 jours ; enlèvement par coursier aux frais du site ;
  - **le droit d'annulation s'applique aussi aux pièces fabriquées sur commande**, bien que la loi prévoie une exception ;
  - **4 mois pour les 65 ans et plus, les personnes handicapées et les nouveaux immigrants**, si la vente a suivi un échange avec un représentant.
- **Garantie** : 1 an, défauts de fabrication (sertissage, soudures). L'usure du rhodium n'est pas un défaut. Certificat de garantie en hébreu [V : /legal/warranty].
- **Certificat** : « chaque bijou est livré avec un certificat », sans laboratoire nommé [V : /legal/lab-grown-disclosure].
- **Poinçon** : page dédiée à la norme ת״י 299 (585 = 14 k, poinçon de l'Institut des normes) [V : /guides/gold-hallmark-14k].

## Confiance et service

- Société identifiée (n° 515257020), adresse, téléphone fixe et WhatsApp dans chaque pied de page [V].
- /about : « née à la Bourse du diamant de Ramat Gan, installée à Haïfa ». Photos de la salle d'exposition, de l'atelier et de la vitrine ; « système technique maison » pour les commandes, le stock et les pierres ; calculateur du cours de l'or, chargé seulement à la demande [V].
- **Images annoncées comme des rendus** : « הדמיית מוצר להמחשה. המוצר בפועל עשוי להיות שונה במעט » sous chaque image et en FAQ [V].
- **Suivi de commande** : « ההזמנות שלי », avec téléphone et code SMS ; statut de fabrication, date prévue, numéro de suivi [V : /faq].
- Avis clients : aucun sur la fiche ni la collection [V].
- Formulaire de contact : une case prévient qu'un assistant virtuel d'IA peut rappeler et que l'appel peut être enregistré [V].
- Langues : hébreu, anglais (/en/) ; devise : ₪ [V].

## Temps d'apparition du visuel principal

| Appareil | LCP (`timing.cjs`) | Autre passe (a1) |
|---|---|---|
| Ordinateur | 0,9 s | LCP 1,5 s ; image visible à 2,5 s |
| iPhone 13 (émulé) | 0,4 s | LCP 0,3 s ; image visible à 1,1 s |

[V] ; machine partagée, valeurs indicatives.

## Points forts à retenir pour JR Diamond

1. **Le prix change en direct avec l'option de pierre**, et chaque carte de choix porte son prix (5 179 ₪ ou 2 939 ₪) [V]. C'est le modèle à suivre pour le choix naturel ou synthétique de JR Diamond.
2. **Le message WhatsApp reprend le modèle et les options choisies** [V]. L'atelier reçoit une demande précise ; à copier pour le bouton WhatsApp de JR Diamond.
3. **Avertissement honnête sur les images** : « rendu, le produit réel peut différer légèrement » [V]. JR Diamond peut aller plus loin : le rendu vient du fichier de fabrication [I].
4. **Conditions plus généreuses que la loi, écrites en clair** : annulation même sur commande, 4 mois pour les olim, retour enlevé à domicile gratuitement [V]. Argument fort pour un public d'olim ; à soumettre à l'avocat (`docs/juridique/DOSSIER_AVOCAT_IL.md`) [I].
5. **Le panier affiche la TVA et une heure limite de validité du prix**, lié au cours de l'or [V]. Il répond au problème du moteur de prix de JR Diamond (taux et cours variables) [I].
6. **« Taille à convenir avant fabrication »** comme option de taille : on peut commander sans connaître la taille [V]. Lavi propose aussi un champ libre « autre taille ».
7. **Suivi de fabrication par SMS** (statut, date, numéro de suivi) [V] : proche de la promesse « voir naître son bijou ».
8. **Page sur le poinçon ת״י 299** [V] : répond à une question encore ouverte chez JR Diamond (titre frappé dans la bague, question 62 de `docs/QUESTIONS_ATELIER.md`) [I].
9. **Taille israélienne expliquée comme « tour de doigt en mm − 40 »** [V : guide des tailles] : même règle que le guide de JR Diamond (question 65) [V].

## Défauts observés

1. **Pas de choix du carat ni de la forme sur la fiche** : chaque combinaison est une fiche distincte (152 bagues) [V].
2. **Couleur et pureté des pierres non affichées**, certificat sans laboratoire nommé [V].
3. **La photo ne change pas avec la moissanite**, alors que le prix baisse de 43 % [V].
4. **Aucune confirmation après l'ajout au panier** : la page défile vers le formulaire de contact [V].
5. **Aucun avis client** visible [V].
6. Pas de 18 k, pas d'or rose, pas de platine, pas de naturel [V].
7. Prix garanti seulement jusqu'à une heure donnée dans le panier [V] : peut inquiéter [I].

## Limites de l'audit

- Paiement (/checkout), comptes, formulaires de contact et d'annulation : non ouverts ou non remplis (règle).
- Filtres de forme, de prix, de tri et recherche non actionnés (robots.txt).
- Quantité et suppression dans le panier non actionnées.
- Mesures de temps sur machine partagée.

## Sources

- https://alpha-gold.co.il/robots.txt
- https://alpha-gold.co.il/collections/engagement-rings · /product/rosalyn-round-solitaire-ring-2ct-2000 · /product/penny-round-ring-2ct-785b · /product/tzlil-cushion-ring-2-04ct-c4e5 · /product/lotte-heart-ring-2ct-92dd · /en/product/rosalyn-round-solitaire-ring-2ct-2000 · /cart
- https://alpha-gold.co.il/legal/shipping-returns · /legal/warranty · /cancel · /legal/lab-grown-disclosure · /legal/terms · /faq · /about · /guides/gold-hallmark-14k · /guides/ring-size-guide
- Captures et journaux (hors dépôt) : `scratchpad/audit/il/alpha-gold-haifa/` (`opt_W_d.jpg`, `opt_moi_d.jpg`, `panier_d.jpg`, `panier_m.jpg`, `zoom_d.jpg`, `a1_d.log`, `a1_m.log`, `a2.log`)
