# Audit : Calvin Broyles Jewelers (Virginie-Occidentale)

- **Site** : Calvin Broyles Jewelers, South Charleston, Teays Valley et Beckley (WV) ; fondé en 1947.
- **Adresse** : https://www.calvinbroyles.com/ ; page de départ : https://www.calvinbroyles.com/services/custom-design/
- **Date de l'audit** : 15/11/2026 (pages relues le 25/11/2026 avec la file d'attente de navigateurs).
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Pas de configurateur en ligne ; catalogue et recherche de diamants lisibles, mais le panier est interdit par `robots.txt` (`Disallow: /cart`) : ni « Add to Cart », ni panier, ni récapitulatif de livraison ouverts. Fonctions de tri, de nombre par page et de prix interdites par `Disallow: /*?sort=`, `?count=`, `?price_0=`, `?item=`, `?material=` : non actionnées.
- Marquage : [V] vérifié (page lue ou contrôle actionné, adresse citée), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
| --- | --- |
| 1. Sur mesure (page de départ) | Texte + boutons « Contact Us » (`/contact-us/`) et « Appointment » (`/appointments/`) ; aucun outil en ligne [V] |
| 2. Catalogue de bagues | `/catalog/bridal-engagement/` : types (Engagement Rings, Wedding Bands), marques (Gabriel, Bleu Royale, Calvin Broyles, Hearts on Fire, CrownRing, Noam Carver, Torque, Lab Grown Diamond Jewelry), prix min-max, 57 pages [V] |
| 3. Fiche bague | Photo 800×800, taille (4,0 à 13,0 par quart, plus « I don't know or see my size »), Add to Cart, Wish List (connexion), Contact, Share, Drop a Hint, Inquire [V] |
| 4. Recherche de diamants | `/diamonds/` : forme, prix, carat, couleur, taille (cut), pureté, options avancées, comparer, tableau de 91 pages [V] |
| 5. Panier | Non ouvert : `/cart/` interdit par robots.txt [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Request Appointment / Appointment | lien | Mène à `/contact-us/` ou `/appointments/` (non ouvert au-delà de la lecture) | - | lien présent [V] |
| Finance Options / Financing | lien | `/services/financing/` : carte Wells Fargo (American Gem Society), « No interest if paid in full within 12 months », minimum 480 $, APPLY NOW | - | fonctionne (lu) [V] |
| Téléphones (3 salles), Get Directions | lien | `tel:` et pages `/company/locations/<ville>/` | - | présents [V] |
| Search (loupe) | lien/champ | `/search/` : interdit par robots.txt | - | non testé (interdit) |
| Wish List / Login | lien | Renvoie vers `/account/login/` (interdit) | - | non testé (compte interdit) |
| Cart | lien | `/cart/` interdit | - | non testé (interdit) |
| Menu ENGAGEMENT RINGS, WEDDING BANDS, JEWELRY, DIAMONDS, ABOUT, SERVICES, CONTACT | lien | Pages de catalogue ; SERVICES ouvre une liste (Jewelry Repair, Custom Design, Engraving, Appraisals, Corporate Gifts, Financing, Gold Buying, Jewelry Cleaning) | - | fonctionne [V] |
| Sous-menus Halo, Solitaire, Three-Stone | lien | `?type=engagement-ring&sub_type=halo` : 14 articles (Calvin Broyles, Noam Carver) ; filtres Styles, Shapes, Designers, Material (10K jaune, 14K blanc, or blanc, jaune, rose, platine 950) | affiché | fonctionne [V] |
| Filtre marque « Lab Grown Diamond Jewelry » | lien | `?brand=lab-grown-diamond-jewelry` : 6 bagues « LAB GROWN 14 Karat … 2 Carat » (ovale, radiant, rond), 14 k blanc ou jaune | 2 499 $ chacune | fonctionne [V] |
| Filtres Engagement Rings / Wedding Bands, marques | lien | Rechargent la liste | - | fonctionne [V] |
| Pagination 1, 2, 3… 57, Next | lien | `?page=N` | - | fonctionne (lien lu, page 2 non ouverte) [V] |
| Liste Sort (Featured, Newest, Name, Price) | liste | Utilise `?sort=` : interdit | - | non testé (interdit) |
| Liste View (24, 48, 72, 96) | liste | Utilise `?count=` : interdit | - | non testé (interdit) |
| Prix min / max + SET PRICES / RESET | champ + bouton | Utilise `?price_0=` : interdit | - | non testé (interdit) |
| Hide Filters | lien | Masque le volet de filtres | - | présent [V] |
| Photo (Normal / Modal) | lien | Ouvre la fiche ; « Modal » = aperçu rapide (non ouvert) | - | présent [V] |
| Add to Wish List (carte) | lien | Redirige vers la connexion | - | non testé (compte) |
| Fiche : liste Size | liste | 30 valeurs ; choisir 6,5 ne change pas le prix (1 799 $ avant et après) | inchangé | fonctionne [V] |
| Fiche : « I don't know or see my size » | option | Aucun guide ni texte supplémentaire n'apparaît | - | sans effet visible [V] |
| Fiche : Add to Cart | bouton | Ajout au panier ; `/cart` interdit | - | non cliqué (interdit) |
| Fiche : Contact | lien | `/contact-us/?item=…` : `?item=` interdit | - | non cliqué (interdit) |
| Fiche : Share | lien | Déplie un formulaire « share-to_email, share-message, share-name, share-from_email, Send » ; liens Facebook, Pinterest, Twitter, « email us » (vers les pages de la boutique) | - | fonctionne (non envoyé) [V] |
| Fiche : Drop a Hint | lien | Même panneau de formulaire ; aucun envoi | - | présent (non envoyé) [V] |
| Fiche : Inquire (nom, e-mail, téléphone, message) | formulaire | Non rempli, non envoyé | - | non testé (règle : aucun formulaire) |
| Fiche : image principale | image | Le clic n'a pas abouti (délai dépassé) et aucune fenêtre de zoom n'est apparue ; pas de vidéo, de 360°, de 3D ni d'AR vus | - | pas de zoom observé [V] |
| Diamants : filtres Shape, Price, Carat, Color, Cut, Clarity | curseurs | Plages affichées : 592 à 290 790 $, 0,50 à 10,09 ct, couleur Z à D, cut Poor à Ideal, pureté N à FL ; non manipulés (curseurs, requêtes `?price_0=` possibles) | - | non testé (risque d'URL interdite) |
| Diamants : Advanced Options | lien | Champs carat, couleur, cut, clarté ; rien de plus visible (clic forcé, pas de panneau détecté) | - | partiel |
| Diamants : Compare (0) | lien | Compteur à 0 ; non testé | - | non testé |
| Diamants : tri des colonnes | lien | `?sort=…` interdit | - | non testé (interdit) |
| Diamants : survol d'une ligne | survol | Texte « Hover over a diamond to find more information and view its details » ; aperçu non obtenu | - | non confirmé |
| Newsletter (e-mail) | champ | Non rempli | - | non testé |
| Chat « Text Us! » | bulle | Bulle « Text Us! » visible ; conversation non ouverte | - | présent [V] |
| Accessibility Menu | bouton | Widget UserWay | - | présent [V] |
| Réseaux : Facebook, Instagram, Pinterest, Twitter | lien | Externes | - | présents [V] |

## Options disponibles

- **Métaux** (filtre Material, 14 articles halo) : 10K jaune, 14K blanc, or blanc, or jaune, or rose, platine 950 [V]. Pas de choix de métal sur la fiche (la bague est un article figé).
- **Formes** (menu diamants) : Round, Princess, Cushion, Oval ; filtre « Shapes » du catalogue ; recherche : Emerald, Cushion, Radiant, Round, Oval, Princess [V].
- **Carat** : filtre 0,50 à 10,09 ct (recherche de pierres) ; les bagues « Proposal Ready » affichent un poids total (ex. 3/4 ct, dont 1/4 ct au centre) [V].
- **Origine** : rubrique « Lab Grown Diamond Jewelry » (6 bagues à 2 499 $) ; la recherche de pierres affiche « GIA » dans la colonne Lab sur les lignes lues [V]. Une pierre synthétique dans la recherche : non vérifiée.
- **Taille de doigt** : 4,0 à 13,0 (quarts de taille) [V].
- **Gravure** : page de service décrivant un « computerized engraving system » ; pas d'option en ligne [V].
- **Pierres** : tableau (forme, taille, cut, couleur, pureté, laboratoire, prix) ; 91 pages [V].
- **Monture, corps de bague, griffes, pavage** : aucun choix en ligne [V].
- **Modes de vue** : photo fixe uniquement [V].
- **Services** : réparation, sur mesure, gravure, estimation, cadeaux d'entreprise, financement, rachat d'or, nettoyage [V].

## Prix, délais, retours, garanties

- **Prix** : affichés sur le catalogue et la fiche, avec prix barré lors d'une vente (1 799 $ au lieu de 1 949 $) [V]. Aucune décomposition (métal, pierre, façon) [V]. Bagues « Proposal Ready » dès 1 499 $ (ensemble 10 k 1/2 ct) [V]. Bagues synthétiques 2 499 $ [V]. Pierres de 592 $ à 290 790 $ [V].
- **Délai** : « orders may take 3 to 5 business days to process before they are shipped for items in stock » ; ruptures notifiées sous 2 à 3 jours ouvrés (`/terms-and-policies/`) [V]. Aucun délai pour le sur mesure [V].
- **Retours** : 15 jours après l'achat, échange ou remboursement ; vente finale après 15 jours ; article non porté, boîte et cartes de garantie ; frais de retour à la charge du client (`/terms-and-policies/`) [V]. Exception du sur mesure : non mentionnée [V].
- **Garanties** : aucune garantie de qualité de fabrication lue ; les couleurs d'écran ne sont pas garanties ; le magasin peut refuser une commande en cas d'erreur de prix, même après le débit de la carte [V].
- **Certificats** : « GIA » dans la colonne Lab des pierres [V].
- **Livraison** : frais et récapitulatif non vus (panier interdit) [S].
- **Moyens de paiement** : icônes PayPal, Visa, Mastercard, American Express, Discover sous le bouton Add to Cart [V]. Financement Wells Fargo [V].
- **Langues, devises** : anglais, dollars [V].

## Confiance et service

- [V] « West Virginia's only 3rd generation family-owned and operated jewelry business », depuis 1947 ; trois salles avec téléphone ; « Do you need help? Please call us at (304) 768-8821 » ; « Text Us! » ; rendez-vous ; financement.
- [V] Sur mesure : « we can create virtual 3D jewelry on screen and make changes in front of you » puis « photo-realistic images » ; transformation d'héritage (« Create a special design from jewelry that has been passed down as a family heirloom »). Aucun prix ni délai.
- Avis clients : aucun avis sur les pages lues (liens Facebook, Instagram, Pinterest, Twitter seulement) [V]. Étoiles ou note : non vues.
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande vus [V].
- Accessibilité : widget UserWay [V].

## Points forts à retenir pour JR Diamond

1. **Le prix est affiché, avec un barré de vente** : 1 799 $ / 1 949 $ sur la fiche rb-10267a66r4w (https://www.calvinbroyles.com/catalog/calvin-broyles/rb-10267a66r4w/).
2. **Rubrique synthétique distincte et libellé « LAB GROWN »** sur 6 bagues à 2 499 $ (`?brand=lab-grown-diamond-jewelry`).
3. **Recherche de pierres chiffrée, lisible dès l'accueil** : 91 pages, filtres carat, couleur, cut, clarté, laboratoire GIA (https://www.calvinbroyles.com/diamonds/).
4. **Financement affiché** : 12 mois sans intérêt dès 480 $ (https://www.calvinbroyles.com/services/financing/).
5. **Retours chiffrés en jours** (15 jours) sur une page unique (https://www.calvinbroyles.com/terms-and-policies/).
6. **Le sur mesure est décrit comme « on voit le 3D devant vous »**, c'est l'argument que JR Diamond rend en ligne.

## Défauts observés

- [V] Pas de configurateur : le sur mesure passe par un rendez-vous en boutique.
- [V] Le choix de la taille ne change rien ; l'option « I don't know or see my size » n'ouvre aucun guide.
- [V] Une seule photo par article (800×800), sans zoom observé, sans vidéo.
- [V] Pas de métal, forme ou pierre au choix sur la fiche.
- [V] Aucune décomposition du prix, aucun délai de fabrication, aucune exception du sur mesure dans les retours.
- [V] Termes autorisant l'annulation après paiement en cas d'erreur de prix.
- [V] Un lien de service (Round, Princess, Cushion, Oval) pointe vers `calvinbroyles.dev.thinkspacehq.com` (domaine de développement du fournisseur du site), et « Cushion » mène à `?cut=RD` (rond) au lieu de coussin.

## Limites de l'audit

- Panier, tri, nombre par page, prix, recherche du site, compte et `?item=` interdits par `robots.txt` : non utilisés ; aucun frais de livraison, aucun récapitulatif de panier.
- Le blocage `/verify.html` signalé par l'inventaire (cookie `ts_init` posé en JavaScript) **n'est pas apparu** le 25/11 : le catalogue et la recherche de diamants se sont chargés normalement (statut 200). Le contrôle est donc intermittent ; aucune astuce n'a été employée.
- Curseurs de la recherche de pierres, survol d'une ligne et « Compare » non exploités ; fiche d'une pierre non vue.
- Une seule fiche de bague ouverte ; bagues de marques (Gabriel, Noam Carver) non ouvertes.
- Temps d'affichage de l'image principale (fiche, `largest-contentful-paint`) : 2,98 s sur ordinateur, 2,77 s en affichage iPhone ; catalogue : lecture initiale 1,2 à 1,6 s (DOM), 4,4 à 5,7 s avec filtres de marque [V, mesures uniques].
- Nombre d'articles ≈ 57 pages × 24 = 1 368 [I].

## Sources

- https://www.calvinbroyles.com/services/custom-design/ ; https://www.calvinbroyles.com/robots.txt
- https://www.calvinbroyles.com/catalog/bridal-engagement/ (et `?brand=lab-grown-diamond-jewelry`, `?type=engagement-ring&sub_type=halo`)
- https://www.calvinbroyles.com/catalog/calvin-broyles/rb-10267a66r4w/
- https://www.calvinbroyles.com/diamonds/ ; https://www.calvinbroyles.com/services/financing/ ; https://www.calvinbroyles.com/services/engraving/
- https://www.calvinbroyles.com/terms-and-policies/ ; https://www.calvinbroyles.com/company/about-us/
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/calvin-broyles/` (hors dépôt).
