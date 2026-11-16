# Mémoire du projet JR Diamond

Mise à jour : 15 novembre 2026. Ce fichier résume l'état du projet pour reprendre le travail sans relire tout l'historique.
Détails : `TODO.md` (tâches), `CHANGELOG.md` (historique), `docs/` (dossiers de fond).

## Le projet en bref
- Plateforme de joaillerie **JR Diamond** avec configurateur 3D. Atelier de **Yonathan Cohen** à la Bourse du diamant de Ramat Gan.
- **Lancement en Israël d'abord** (décision du propriétaire, 4/11). Prix en ₪ TTC (TVA 18 %). Langues : français, hébreu, anglais. France ensuite.
- Positionnement : « l'atelier en direct ». Ce que vous voyez existe (modèle issu du fichier de fabrication, pierre filmée). Le prix est expliqué. On voit naître son bijou (photos et vidéos de fabrication).

## Conventions
- Réponses à l'utilisateur en **français**, denses, avec la distinction vérifié / inféré / supposé. Faits vérifiés par recherche, sources citées.
- Branche principale : **`main`** (branche par défaut, déployée en production sur Vercel). Les anciennes branches `ccr-297332c6-4qfws6` et `ccr-a0d79d3c-glq4h2` y sont fusionnées. Commit et push à chaque étape, **pas de PR** sauf demande.
- Code : guillemets simples, largeur ~160. Il n'y a **pas** de configuration Prettier : ne pas lancer `npx prettier` sans `--single-quote --print-width 160`.
- Libellés légaux : en français, « synthétique » (décret 2002-65 ; « de laboratoire » est interdit). Synthétique ≠ imitation.
- Les fichiers CAO de l'atelier **sont versionnés** dans ce dépôt (`cad/originals/`, décision du 4/11 au soir) ; le pipeline les lit sans les réécrire. `cad/intermediate/` reste ignoré.
- **Le dépôt est public depuis le 15/11** (décision du propriétaire : « publication voulue » ; vérifié auprès de GitHub). Tout ce qui est poussé est lisible par tous : fichiers CAO, prix et marges (`docs/PRICING_RULES.md`, `src/config/pricing.ts`), réponses de l'atelier, dossier pour l'avocat, étude de concurrence. Ne jamais y écrire de secret (clé, mot de passe, jeton) ni de donnée personnelle d'un client ; les valeurs réelles restent dans Vercel. Contrôle du 15/11 : aucun secret dans les fichiers suivis ni dans les 67 commits.

## Environnement (session cloud)
- Chromium : `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`. Tests navigateur : `CHROMIUM_PATH=… npx playwright test`.
- `scripts/perf/serve-and-run.sh <script.cjs> <args>` sert le build sur le port 3100 (adresses en `/fr/configurateur/…`).
- `?debug=1` active la sonde `window.__jr` (`ready`, `orbit(az)`, `visibleNodes`, `metalColor`). `?quality=low` force le rendu simplifié.
- Vérifications : `npm run typecheck && npm run lint && npm test && npm run build && npm run test:e2e` (Chromium), plus `npm run test:e2e:browsers` (WebKit iPhone/iPad, Firefox sans 3D ; `npx playwright install webkit firefox`). État au 15/11 : 64 tests unitaires, 82 navigateur Chromium, 82 WebKit (iPhone et iPad, 41 chacun dont 2 ignorés), 21 Firefox, 9 pipeline CAO, tous verts. En CI, un échec du build sur `next/font/google` (téléchargement des polices) est intermittent : relancer avec `gh run rerun <id> --failed`. Intégration continue : `.github/workflows/ci.yml`.
- Contrôle des liens de sources (`src/content`, 39 adresses au 15/11) : curl avec un en-tête de navigateur (Safari). Exceptions : le GIA coupe la connexion avec cet en-tête (utiliser curl tel quel, `--http1.1`) ; igi.org, economie.gouv.fr, withclarity.com et la page de recherche du GIA refusent tout curl (403) : vérifier par la recherche web ou la lecture de page. Préférer l'adresse finale à un lien court qui redirige (`4cs.gia.edu/?p=…`).
- Mesure sur appareil réel : page cachée `/fr/diagnostic` (rapport JSON), protocole `docs/DEVICE_TESTS.md`. Si le build échoue sur `next/font/google` alors que le réseau répond, le cache est corrompu : `rm -rf .next` puis rebâtir. Sans `CHROMIUM_PATH`, Playwright cherche un Chromium absent. Si le port 3100 reste occupé par un ancien `next-server` bloqué, les tests se figent : `fuser -n tcp 3100` puis `kill`.

## Aperçu en ligne
- **https://jr-diamond.vercel.app** : projet Vercel `jr-diamond` (équipe `diamond3-d`, `team_AaIv8uYfh5BjwUqYEuH8WbiZ`, projet `prj_sEIRWdvN7CniQl0HdoZCqWyykDeb`), **relié au dépôt GitHub `myhitbo/Diamond3D`** : chaque push sur `main` redéploie la production, chaque autre branche reçoit un lien de prévisualisation.
- Branche de production Vercel réglée sur `main` le 14/11 via la CLI (`vercel api /v9/projects/<id>/branch -X PATCH` avec `{"branch":"main"}` ; point d'accès non documenté, celui du tableau de bord). Le connecteur Vercel MCP ne permet pas ce réglage. Vérification : `vercel api /v9/projects/<id>` → `link.productionBranch`.
- CLI Vercel installée et connectée dans l'espace de travail cloud (`npm i -g vercel`, `vercel login` : le propriétaire approuve un code). L'espace de travail peut être réinitialisé : réinstaller si `vercel` est introuvable.
- Fermé à Google (`noindex`). Protégé par la connexion Vercel (toutes les adresses `.vercel.app`) : pour l'atelier ou un téléphone, créer un lien de partage (`get_access_to_vercel_url`, valable 23 h).
- Ancien aperçu `jr-diamond-apercu` (compte hil123, non relié à GitHub) : n'est plus mis à jour.
- Préversion claude.ai (page unique, sans Next.js) : `npm run preview:build`.

## Ce qui est fait
- **Prototype 3D (phase 2)** : pipeline `.3dm` → GLB optimisé (0,19 Mo), configurateur Next.js 16 / React Three Fiber, modèle pilote `ring-001` (ensemble marquise).
- **Retouche web de ring-001** à la demande de l'atelier : griffes rabattues, plaques en « 8 » supprimées (`pipeline/web_retouch.py`, `npm run models:retouch`). Planche : `docs/images/retouche-ring-001-avant-apres.jpg`.
- **Configurateur** :
  - composition ensemble / solitaire / alliance ;
  - métal en deux temps : couleur (jaune, blanc, rose, platine), puis titre 14 ou 18 carats ;
  - origine naturel / synthétique ;
  - poids de la marquise « ≈ 0,25 ct, à confirmer » ;
  - poids du métal ± 5 %, délai « 14 jours ouvrés », prix « Sur devis ».
- **Rendu des pierres** : en rendu simplifié (appareils lents), miroir à facettes. Avant, des taches blanches donnaient l'impression que « les diamants disparaissent ». Le rendu ne bascule que sous 24 images/s.
- **Version hébreu** (`/he/…`) : sens droite-à-gauche, polices Frank Ruhl Libre et Assistant. Traduction faite par l'IA, **relecture native à faire**.
- **Formulaire de devis** (phase 4, version légère, 13/11) : FR/EN/HE, route `POST /api/devis`, envoi SMTP à l'atelier avec photos jointes, sans base de données ; accord facultatif de publication des photos et vidéos de fabrication. Variables : `.env.example`. Sans SMTP configuré : réponse 503, message « indisponible ». Tests en envoi simulé (`QUOTE_DRY_RUN=1`).
- **Formes de pierre « sur demande »** (14/11) : boutons en pointillés qui ouvrent le devis avec le message pré-rempli ; la 3D reste la marquise.
- **ring-001 régénéré depuis `Ring.3dm`** (14/11) : `models:extract` simplifie d'abord, retouche ensuite ; équivalent au modèle du 3/11 (0,001 mm).
- **Études du 14/11** : `docs/PAIEMENT.md` (Stripe indisponible en Israël ; recommandation : Grow, parcours devis → prix confirmé → lien de paiement ; Bit plafonné à 5 000 ₪ par transaction chez la plupart des prestataires) et `docs/juridique/DOSSIER_AVOCAT_IL.md` (24 questions, résumé en hébreu).
- **Bijou de famille** (14/11) : `/fr|en|he/transformation`, formulaire avec photos (`POST /api/transformation`, même envoi SMTP que le devis), contenu `src/content/transformation.ts`. Badge « Brouillon » : trois formulations sont des déductions à faire valider (questions 57 à 60 de `docs/QUESTIONS_ATELIER.md`).
- **Guides en français et en anglais** (14/11, anglais le 15/11) : `/fr/guides` et `/en/guides`, six guides (synthétique ou naturel, formes de diamant, alliance de kiddouchin, les 4 C, or 14 ou 18 carats, taille de doigt), sources en bas de page, badge « Brouillon ». Contenu dans `src/content/guides/` : `fr.ts` (règles de rédaction en tête), `en.ts`, `types.ts` (types, `ringSizeRow`), `index.ts` (accès par langue, textes d'interface). Un guide garde son `id` d'une langue à l'autre et son adresse est traduite (`/en/guides/ring-size`) ; l'en-tête reçoit l'adresse de chaque langue (`hrefs`). Un test vérifie que l'anglais suit le français : mêmes rubriques, mêmes sources. En anglais : « lab-grown » (comme le configurateur), orthographe britannique, « karat » pour l'or. Pas de guides en hébreu : `/he/guides` répond 404. Une section peut porter un tableau (`table`) ; le tableau des tailles est calculé (`ringSizeRow` : ISO 8653, taille israélienne = française − 40, taille américaine au quart). Les configurateurs français et anglais renvoient aux guides de l'or et de la taille (`guideLinks`, absents en hébreu et dans la préversion). Questions 61 à 66 de `docs/QUESTIONS_ATELIER.md` pour l'atelier.
- **Adresses traduites** (14/11) : `/en/configurator/…`, `/he/configurator/…` (réécriture vers le dossier `configurateur`, redirection 307 des anciennes adresses). Toujours passer par `src/lib/routes.ts` (`configuratorPath`, `localizedPath`) pour écrire un lien. Pied de page commun `SiteFooter`.
- **FAQ** (`/fr|en|he/faq`, contenu `src/content/faq.ts`) : 24 questions en 6 thèmes, réponses sourcées, 5 marquées « À confirmer ». Données structurées FAQPage (réponses validées seulement).
- **Moteur de prix** (`src/lib/pricing/engine.ts`, paramètres `src/config/pricing.ts`), **non branché** :
  - postes au tarif boutique : or 14 k 370–380 ₪/g, 18 k 470–480 ₪/g, façon et sertissage en USD ;
  - plus un bénéfice = fixe par catégorie + 25 % des matières, borné ;
  - refuse de calculer tant que la règle de bénéfice n'est pas validée et que le taux de change n'est pas choisi.
- **Documents** :
  - `docs/CAHIER_DES_CHARGES.md` ;
  - `docs/ANALYSE_CONCURRENCE.md` ;
  - `docs/STRATEGIE.md` (réanalyse, décisions du 4/11, plan de 90 jours ajusté, marges France vs Israël, droit israélien) ;
  - `docs/PRICING_RULES.md` ;
  - `docs/PAIEMENT.md`, `docs/juridique/DOSSIER_AVOCAT_IL.md`, `docs/DEVICE_TESTS.md` ;
  - `docs/REPONSES_ATELIER.md` (22/10, 3/11, 4/11) ;
  - `docs/QUESTIONS_ATELIER.md` ;
  - `docs/PROCEDURE_PHOTO_ATELIER.md` et sa version PDF `docs/atelier/Procedure_photo_video_atelier.pdf`, envoyée à Yonathan ;
  - vidéo de démonstration `docs/atelier/demo-site-2026-11-04.mp4`.

## Étude de concurrence des 15 et 16/11 (synthèse livrée, audits partiels)
- Dossier `docs/concurrence/`. Ordre des marchés voulu par le propriétaire : États-Unis, Israël, Europe, Australie.
- **Exploration** (4 dossiers `2026-11-15_<marché>.md`, chacun ouvert par l'inventaire des sites).
- **Forums** (`forums/`, 10 rapports, citations vérifiées une à une, section « Vérification » en fin de fichier). Constats communs : délai qui glisse sans prévenir ; bijou reçu différent de la CAO validée (cotes en mm, tolérance, photo ou vidéo avant l'envoi) ; méfiance sur les prix (même pierre, même certificat, prix très différents) ; peur de l'échange de la pierre au sertissage ; alliance de kiddouchin lisse, sans pierre, payée par le marié.
- **Audits de sites** (`audit/<marché>/<territoire>/` : `INVENTAIRE.md`, un rapport par site, `SYNTHESE_<groupe>.md`). Chaque bouton et option est vérifié dans un navigateur, sur ordinateur et en affichage iPhone, jusqu'au panier, sans compte ni paiement. Au 16/11 : 24 sites audités (12 vendeurs nationaux américains, 6 sites israéliens, 3 français, 2 belges, 1 en Alabama) et 34 inventaires de territoires. Non audités : les États américains, le reste de l'Europe, l'Australie (seulement explorée).
- **Comparaison avec le prototype** (16/11) : `SYNTHESE.md` (35 avantages classés, dont 23 à traiter avant le lancement en Israël), tirée de `2026-11-16_comparaison_produit.md` et `2026-11-16_comparaison_offre.md`, chacune contrôlée affirmation par affirmation dans le code et dans les rapports. Écart principal : le prix (affiché partout ailleurs, « Sur devis » chez nous). Seule action sans dépendance : mettre la configuration dans l'adresse et ajouter un bouton « partager ».
- **Reste à faire** : la suite des audits attend une décision du propriétaire (modèle plus léger pour les auditeurs, ou périmètre réduit) ; la synthèse sera complétée ensuite.
- **Règles de l'étude** : lecture seule, respect de `robots.txt` et des protections (un site qui bloque les robots est marqué « bloqué », jamais contourné), aucun pseudonyme recopié, extraits de 25 mots au plus. Trois écarts à `robots.txt` ont eu lieu (Hasolidit, Keyzar, panier d'Angara) : ils sont notés dans les rapports, et les constats concernés de Keyzar portent la marque `[P1]`. Depuis, un outil de contrôle des adresses est imposé aux auditeurs.
- **Limite d'usage** : une fenêtre de 5 heures laisse passer environ 15 millions de jetons d'agents avec le modèle Opus, environ 5 millions avec Fable (mesuré le 15/11) ; quand elle est vidée, les agents en cours perdent leur travail. Lancer 2 enchaînements d'agents à la fois, pas plus.

## Réponses de l'atelier déjà acquises
- **Métaux** : or 14 et 18 k (jaune, blanc, rose) et platine ; pas d'argent.
- **Pierres** : diamants naturels et synthétiques, diamants de couleur ; émeraude, saphir et rubis naturels. Certificat GIA (naturel) ou IGI (synthétique) dès 0,50 ct.
- **Délai et paiement** : 14 jours ouvrés, sans option express. Paiement intégral sur le site.
- **Après-vente** : première mise à taille offerte ; après un an, rétrécissement ≈ 100 ₪.
- **Gravure** : laser, 20 à 25 polices, hébreu possible.
- **Prix** (4/11) : tous les postes communiqués sont des prix boutique, le bénéfice s'ajoute. Bague de fiançailles en diamant synthétique : 1 500 à 3 000 ₪ de bénéfice. En France, au moins 1 000 € de bénéfice chez les bijoutiers (témoignage, non vérifié).
- **Décisions du propriétaire** : photos et vidéos de fabrication acceptées ; transformation de bijoux de famille et alliance de kiddouchin déjà pratiquées ; capacité « illimitée » ; budget d'acquisition selon les revenus.
- **Bibliothèque de modèles** : CGTrader (partie gratuite comprise). DD Diamond n'est qu'un exemple de site.

## Ce qui reste à faire

### En attente de Yonathan (message de 22 questions envoyé le 4/11 ; relance prête le 13/11 ; message complet du 14/11, 22 points, qui la remplace : `docs/atelier/2026-11-14_message.md`, à envoyer par le propriétaire)
- Validation de la règle de bénéfice et du tableau par catégorie ; plafond pour un diamant naturel.
- Taux de change dollar → ₪ (proposé : taux officiel de la Banque d'Israël).
- Prix du platine (il interroge les fonderies).
- Grille de prix des pierres.
- Polissage final et rhodiage : un seul frais ou deux ?
- Métal par défaut (14 k ou 18 k).
- Moyens de paiement, annulation et retour, livraison (Israël et France), numéro WhatsApp.
- Relecture des 5 réponses « À confirmer » et des 3 déductions de la FAQ ; relecture des six guides (questions 61 à 66 : alliage de l'or blanc, poinçon, pierres sous 0,50 ct, tailles israéliennes).
- Relecture des textes hébreux. Existe-t-il en Israël un terme imposé pour les diamants de synthèse, ou un poinçon obligatoire ?
- Fichiers : alliance de kiddouchin, solitaire (pour le choix du carat), `Ring.3dm`, 3 autres modèles avec leurs photos studio.
- Validation de la planche avant/après des griffes (biseau des deux griffes de pointe de la marquise).

### Développement possible sans attendre
Au 14/11 au soir, plus rien ici ne se fait sans une action extérieure : les trois points restants sont prêts côté code et attendent le propriétaire, l'atelier ou la date de lancement.
- **Envoi réel des devis : il manque seulement des valeurs à saisir dans Vercel** (vérifié le 14/11 au soir : aucune variable d'environnement dans le projet `jr-diamond`). WhatsApp : renseigner `NEXT_PUBLIC_WHATSAPP_NUMBER` (numéro de l'atelier, format international) puis redéployer ; le bouton « Envoyer sur WhatsApp » apparaît (lien wa.me, message pré-rempli, photos à joindre à la main). E-mail : variables `QUOTE_TO`, `QUOTE_FROM`, `SMTP_*` ; sans elles, le bouton « Envoyer la demande » répond « indisponible ». La notification automatique par la WhatsApp Business Platform de Meta n'est pas faite (compte Meta, numéro dédié, coût par message).
- Page de l'alliance de kiddouchin : attend un modèle (atelier ou CGTrader). Un anneau généré par le code contredirait la promesse « ce que vous voyez existe ». Les guides de l'alliance, de l'or et de la taille sont prêts.
- Passer les redirections des adresses traduites en permanent le jour du lancement : un seul réglage (`permanent: false` dans `src/lib/routes.ts`). Pas avant : le navigateur garde une redirection permanente en mémoire, difficile à défaire si les adresses changent.

### Dès réception des éléments
- Brancher le prix « à partir de » quand `src/config/pricing.ts` n'a plus de paramètre manquant.
- Sélecteur de carat sur un solitaire.
- Photo réelle à côté du rendu 3D.
- Calibrer les teintes des métaux sur les photos studio.

### Avant la vente
- Avocat israélien :
  - la bague configurée relève-t-elle de l'exception « fabriqué sur mesure » au droit d'annulation ?
  - délai étendu pour les nouveaux immigrants ?
  - poinçon obligatoire ?
- Tests sur appareils réels (iPhone Safari, Android) avec `docs/DEVICE_TESTS.md` et `/fr/diagnostic` : outillage prêt le 13/11, tests à faire par le propriétaire. Speed Insights servi en production (vérifié le 13/11). Intégration continue verte (13/11).
- Retirer les badges « Brouillon » quand le modèle et la FAQ sont validés par l'atelier.
- France (plus tard) : transitaire, transport assuré, TVA d'importation de 20 % et droits (accord UE-Israël à vérifier).
