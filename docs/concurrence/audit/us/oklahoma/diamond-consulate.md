# Audit : Diamond Consulate, « Design Your Ring » (Oklahoma City, Oklahoma)

| | |
|---|---|
| Site | Diamond Consulate, 5701 N Western Avenue, Suite B, Oklahoma City (OK) : https://diamondconsulate.com/ |
| Page de départ | https://diamondconsulate.com/design-your-ring/ |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright) |
| Statut | **partiel** : l'assistant d'entrée en 4 étapes est audité en entier ; le configurateur 3D (JewelerOS) n'a pas pu être ouvert car son lancement appelle `www.jeweleros.com/api/`, interdit par le robots.txt de ce domaine. Pas de boutique en ligne : pas de panier. |
| Plateforme | Site propre ; assistant et 3D « JewelerOS » (jeweleros.com, éditeur StoneAlgo : scripts `jos.js` et `partner_config.js`, identifiant de partenaire `9qgaIHTlYUeb`) ; mesure Rudderstack, Google Tag Manager, Google Analytics, pixel Facebook. |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Aucun prix n'apparaît dans le parcours.

## Parcours

| Étape | Options (toutes relevées) |
|---|---|
| 0. Barre du haut | « Back », « Skip », trois pastilles de métal : Yellow Gold, White Gold, Rose Gold [V] |
| 1 sur 4 : « Let's start designing your ring » | 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » [V] |
| 2 sur 4 : « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] |
| 3 sur 4 : « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later » [V] |
| 4 sur 4 : « When do you need your ring? » | 1 - 4 weeks ; 1 - 3 months ; 3 - 6 months ; Not sure yet [V] |
| Sortie | Le dernier choix (ou « Skip ») déclenche `POST /api/create/from-ring-config/` sur jeweleros.com : le navigateur a annulé l'appel avant son envoi (voir Limites) ; la page affiche alors un bouton « Try again ». Le configurateur 3D n'est donc pas atteint. [V] |
| Hors assistant | Page de texte sous l'assistant : « Reserve a Private Consultation » (/book/engagement-ring-consultation/), « Explore Engagement Rings » (/custom-engagement-rings/), téléphone (405) 805-1050 [V] |

## Contrôles vérifiés

Liste relevée par `controls.cjs` (11 contrôles visibles à l'ouverture, ordinateur et iPhone) puis actionnés un à un dans l'assistant.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Diamond Consulate (logo) | lien | Accueil du site | Aucun | non testé : sortie du parcours |
| About, Contact | liens | Pages de présentation et de contact (lues en curl, voir Sources) | Aucun | OK [V] |
| Back | bouton | Revient à l'étape précédente ; depuis l'étape 2 il rouvre l'étape 1 (testé iPhone) | Aucun | OK [V] |
| Skip | bouton | Ne montre pas d'étape suivante : appelle `POST /api/create/from-ring-config/` (annulé par le navigateur) ; la page reste sur l'assistant | Aucun | **bloqué par robots.txt** (testé iPhone, appel annulé avant envoi) |
| Pastille Yellow Gold | bouton | Choisie par défaut (classe `active`) ; images des cartes en jaune (`solitaire_yellow.webp`) | Aucun | OK [V] |
| Pastille White Gold | bouton | Les 9 cartes passent en images blanches (`*_white.webp`) | Aucun | OK [V] |
| Pastille Rose Gold | bouton | Les 9 cartes passent en images rose (`*_rose.webp`) | Aucun | OK [V] |
| 8 cartes de style (Solitaire à Three Stone) | bouton | Passe à l'étape 2 ; une étiquette de rappel apparaît en haut (« Halo ») | Aucun | OK [V] ; Solitaire, Halo vérifiés ; les 6 autres : même composant, non cliqués un à un [I] |
| Start from scratch | bouton | Non cliqué | Aucun | non testé : même sortie vers l'API que les autres cartes [I] |
| Natural / Lab Grown | bascule | Lab Grown devient actif (marque `*`), Natural se désactive ; aucune image ne change à l'étape 2 | Aucun | OK [V] |
| 9 formes | bouton | Passe à l'étape 3 ; étiquette de rappel (« Marquise ») | Aucun | Marquise vérifiée ; 8 autres non cliquées [I] |
| Decide later (étapes 2 et 3) | bouton | Non cliqué | Aucun | non testé |
| 8 poids en carats | bouton | Passe à l'étape 4 ; étiquette « 1.5 carat » | Aucun | 1.5 vérifié ; 7 autres non cliqués [I] |
| 4 délais | bouton | Dernier clic : appelle l'API (annulé) puis affiche « Try again » | Aucun | **bloqué par robots.txt** (« 1 - 4 weeks » testé) |
| Try again | bouton | Non cliqué (relancerait l'appel interdit) | Aucun | non testé |
| Open save design | bouton (iPhone seulement, libellé accessible) | Non cliqué : ouvrirait une sauvegarde de dessin, qui demande probablement des coordonnées | Aucun | non testé : donnée personnelle [I] |
| Reserve a Private Consultation | lien | Mène à la page de réservation (lue en curl) ; aucun créneau choisi | Gratuit, 60 min | OK [V] |
| Explore Engagement Rings | lien | Page /custom-engagement-rings/ (lue) | Aucun | OK [V] |
| (405) 805-1050 | lien `tel:` | Appel téléphonique, non lancé | Aucun | non testé |

Modes de vue (photo, vidéo, 360°, 3D, sur la main, AR, zoom), filtres de pierres, taille de doigt, gravure, partager, comparer, financement, panier : **aucun accessible**, car le configurateur 3D n'a pas été ouvert ; pas de guide des tailles, de chat, de WhatsApp ni d'essayage à domicile sur la page de départ [V].

## Options disponibles

- Métaux (assistant) : or jaune, or blanc, or rose. Pas de titre (14 k / 18 k) ni de platine dans l'assistant [V].
- Styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » [V].
- Origine : naturel ou « Lab Grown » (bascule) [V].
- Formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant [V].
- Carats : 0,5 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 [V]. La page promet « an exact carat weight » dans la 3D (non vérifié).
- Délai souhaité : 1-4 semaines, 1-3 mois, 3-6 mois, pas sûr [V].
- Hors assistant (texte du site) : consultation gratuite de 60 minutes ; plus de 200 styles à essayer ; conception « Live Collaborative CAD Design » ; modèle 3D imprimé en résine pour les dessins complexes ; remontage d'un diamant existant « subject to inspection » [V : /custom-engagement-rings/, /cad-design/].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant ni sur les pages lues (recherche de « $ » sur 5 pages : aucun montant) ; « Diamond availability, specifications and pricing are confirmed with our team » [V : /design-your-ring/]. Frais de conception « Included in the price of the ring. No charge if you decide not to proceed » [V : /custom-engagement-rings/].
- **Délai** : « About four to six weeks after final design approval. Allow more time for a firm proposal date » [V : /custom-engagement-rings/]. Pas de délai fixe comme les 14 jours ouvrés de JR Diamond.
- **Retours** : aucune politique de retour ou de remboursement trouvée sur les pages lues (mot « return » seulement dans un autre sens) ; [S] vente sur rendez-vous, hors ligne.
- **Garantie** : « Lifetime Warranty on all jewelry » : main-d'oeuvre et remplacement d'une pierre perdue par défaut de fabrication, sous réserve d'inspection ; inspection gratuite tous les 6 mois pour garder la garantie ; dommage accidentel, usure, perte, vol exclus ; **première mise à taille gratuite** si le modèle le permet [V : /limited-lifetime-warranty/].
- **Certificats** : naturel : rapports GIA « most common » ; synthétique : « Most carry an IGI report », inscription au laser sur le rondiste ; rapport relu avec la pierre [V : /natural-diamonds/, /lab-grown-diamonds/].
- **Libellé du synthétique** : « lab-grown », défini comme « a real diamond », « not a simulant » ; revente « may be substantially below purchase price » [V : /lab-grown-diamonds/].
- **Panier, livraison, moyens de paiement** : aucun panier ni paiement en ligne ; achat sur rendez-vous à l'atelier [V : /contact/ « Visits are by appointment »].

## Confiance et service

- Avis : cinq avis Google à 5 étoiles affichés (bloc « What Our Customers Are Saying »), même carrousel répété sur chaque page ; nombre total d'avis non indiqué [V].
- Preuves de fabrication : pas de photo ni vidéo d'atelier sur les pages lues ; une section « Experience the Consultation » (contenu non ouvert) ; conception en direct sur écran avec le client, pas de suivi de commande [V/I].
- Service : réservation en ligne, téléphone (405) 805-1050, studio « appointment-only » : lundi-jeudi 12 h-20 h, vendredi-samedi 12 h-22 h, dimanche 12 h-18 h [V : /contact/]. Réparations, rhodiage sur place, estimation, reprise d'or listés au menu [V].
- Langues : anglais seul ; devise : dollar, mais aucun prix [V].
- Accréditations : logos « Recognized and Accredited » sur la page de réservation (10 liens), non détaillés [V].
- Machine : le site autorise nommément ClaudeBot, GPTBot, PerplexityBot (robots.txt) [V].

## Points forts à retenir pour JR Diamond

1. **Assistant d'entrée en 4 questions très court** : style, forme, carat, délai ; une carte = un clic, vignette de bague dans le métal choisi. Preuve : `Step 1 of 4` à `Step 4 of 4`, captures `wd1`, `a_step3`, `b_step4`. Les vignettes changent d'image avec les pastilles de métal (images `*_white.webp`, `*_rose.webp`) [V].
2. **Étiquettes de rappel** en haut (« Halo », « Marquise », « 1.5 carat ») : l'utilisateur voit ses choix cumulés et peut revenir en arrière avec « Back » [V].
3. **Question du délai souhaité** (date de demande en mariage) avant le configurateur : donne au vendeur une urgence ; utile pour la livraison à 14 jours ouvrés de JR Diamond [V].
4. **Chargement rapide** : texte de l'assistant en environ 1,0 s (ordinateur) et 1,2 s (iPhone), vignettes chargées en 1,1 s et 1,4 s (voir mesures ci-dessous) [V].
5. **Discours « conception en direct »** contre le circuit standard « vendeur, concepteur à distance, rendu 2 à 4 jours plus tard, 2 à 3 semaines de révisions » : le même problème que JR Diamond veut résoudre avec la 3D issue du fichier de fabrication [V : /cad-design/].
6. **Frais de conception inclus et remboursés si pas d'achat**, **première mise à taille gratuite** : deux engagements simples, écrits [V].
7. **Comparaison naturel / synthétique côte à côte** avec rapport GIA ou IGI relu devant le client : même logique que JR Diamond (certificat dès 0,50 ct) [V].

Mesures (Playwright, une exécution par appareil, 15/11/2026) : ordinateur 1 046 ms (texte « Solitaire » visible) et 1 071 ms (toutes les vignettes chargées) ; iPhone 13 : 1 245 ms et 1 382 ms. Le visuel principal 3D n'a pas pu être mesuré. Mesure unique, non répétée [V].

## Défauts observés

- **Aucun prix, ni dans l'assistant, ni sur le site** : le client ne sait pas ce que coûte son choix avant le rendez-vous [V].
- **Le configurateur 3D n'est pas atteignable sans appel à `jeweleros.com/api/`** : sur le dernier choix comme sur « Skip », la page renvoie « Try again » quand cet appel est bloqué ; je n'ai pas pu mesurer l'erreur côté serveur [V pour l'écran, I pour la cause].
- **Page de texte sous l'assistant** : la page est un assistant plein écran posé sur le texte d'accueil ; le texte du site (avis, boutons) reste présent dans le DOM derrière l'assistant ; la zone de lecture de la page par un lecteur d'écran est donc brouillée [I].
- **Le choix naturel / synthétique ne change rien à l'écran** (aucune image ni aucun prix) [V].
- **Pas de titre d'or (14 k / 18 k) ni de platine dans l'assistant**, pas de taille de doigt, pas de gravure à ce stade [V].
- **Pas de politique de retour ni de remboursement publiée** sur les pages lues [V].
- **Pas de preuve de fabrication** : ni photo d'atelier, ni suivi de commande [V].

## Limites de l'audit

- **Le configurateur 3D JewelerOS n'a pas été ouvert.** Son lancement (dernier choix, ou « Skip ») envoie `POST https://www.jeweleros.com/api/create/from-ring-config/`. Le robots.txt de `www.jeweleros.com` contient `Disallow: /api/`. J'avais installé avant le premier clic un filtre qui annule toute requête vers `jeweleros.com/api/` ; l'appel a donc été annulé dans le navigateur et **n'a jamais été envoyé** (trois clics concernés : étape 4, « Skip » sur iPhone ; essais du 15/11). Les appels `GET /api/widget/config/…`, `/api/config/…` et `/api/log-error/` de l'ouverture de la page relèvent du chargement normal de la page, pas d'une action de ma part. Pour terminer l'audit : un humain peut ouvrir le configurateur à la main, ou on obtient l'accord de l'éditeur.
- Non testés : « Start from scratch », « Decide later » (2), 6 des 8 styles, 8 des 9 formes, 7 des 8 poids, 3 des 4 délais, « Try again », « Open save design » (probable saisie de coordonnées), appel `tel:`.
- Affichage iPhone : étapes 1 et 2 vues ; étapes 3 et 4 non revues sur iPhone (même composant que sur ordinateur) [I].
- Pas de panier, ni de livraison, ni de moyens de paiement : le site ne vend pas en ligne [V].
- Pages du site lues avec curl tel quel (texte seulement) : /about/, /contact/, /book/engagement-ring-consultation/, /custom-engagement-rings/, /limited-lifetime-warranty/, /lab-grown-diamonds/, /natural-diamonds/, /cad-design/. La page de réservation charge un outil de créneaux (non ouvert). Vidéos non lues.
- Un seul passage par appareil ; temps de chargement non répétés.

## Sources

Toutes ouvertes le 15/11/2026, après contrôle `robots.cjs` (AUTORISÉ, règle `Allow: /`) :
- https://diamondconsulate.com/robots.txt (agents d'IA nommément autorisés)
- https://diamondconsulate.com/design-your-ring/ (Chromium, ordinateur et iPhone 13)
- https://diamondconsulate.com/custom-engagement-rings/
- https://diamondconsulate.com/about/
- https://diamondconsulate.com/contact/
- https://diamondconsulate.com/book/engagement-ring-consultation/
- https://diamondconsulate.com/limited-lifetime-warranty/
- https://diamondconsulate.com/lab-grown-diamonds/
- https://diamondconsulate.com/natural-diamonds/
- https://diamondconsulate.com/cad-design/
- https://diamondconsulate.com/sitemap.xml
- https://www.jeweleros.com/robots.txt (`Disallow: /api/`) ; https://www.jeweleros.com/static/dist/jos.js et `partner_config.js` (chargés par la page)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/diamond-consulate/` (hors dépôt)
