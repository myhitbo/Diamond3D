# Mémoire du projet JR Diamond

Mise à jour : 15 novembre 2026. Ce fichier résume l'état du projet pour reprendre le travail sans relire tout l'historique.
Détails : `TODO.md` (tâches), `CHANGELOG.md` (historique), `docs/` (dossiers de fond).

## Le projet en bref
- Plateforme de joaillerie **JR Diamond** avec configurateur 3D. Atelier de **Yonathan Cohen** à la Bourse du diamant de Ramat Gan.
- **Lancement en Israël d'abord** (décision du propriétaire, 4/11). Prix en ₪ TTC (TVA 18 %). Langues : français, hébreu, anglais. France ensuite.
- Positionnement : « l'atelier en direct ». Ce que vous voyez existe (modèle issu du fichier de fabrication, pierre filmée). Le prix est expliqué. On voit naître son bijou (photos et vidéos de fabrication).

## Conventions
- Réponses à l'utilisateur en **français**, denses, avec la distinction vérifié / inféré / supposé. Faits vérifiés par recherche, sources citées.
- Branche principale : **`main`** (branche par défaut, déployée en production sur Vercel). Les anciennes branches `ccr-297332c6-4qfws6`, `ccr-a0d79d3c-glq4h2`, `ccr-682a27e9-x5ccif` et `ccr-526f3452-aue11m` y sont fusionnées (les deux dernières le 15/11). Commit et push à chaque étape, **pas de PR** sauf demande.
- Code : guillemets simples, largeur ~160. Il n'y a **pas** de configuration Prettier : ne pas lancer `npx prettier` sans `--single-quote --print-width 160`.
- Libellés légaux : en français, « synthétique » (décret 2002-65 ; « de laboratoire » est interdit, comme « vrai » et « véritable » pour une pierre synthétique, article 4). Synthétique ≠ imitation.
- Accessibilité (règle israélienne IS 5568, cible WCAG 2.1 AA) :
  - texte doré en `var(--gold-text)` (5,2:1) ; `--gold` (3,4:1) est réservé aux traits ;
  - contraste du texte 4,5:1 au moins, cibles de 24 × 24 px au moins, nom d'un lien = son texte affiché ;
  - formulaires validés par la page (`src/components/site/FormFeedback.tsx`, `noValidate`), pas par les bulles du navigateur ;
  - groupes de choix : `role=radio`, un seul arrêt de tabulation, flèches (`radioKeys`) ;
  - après un changement d'interface, relancer `tests/e2e/accessibility.spec.ts` (axe-core 4.14.0, aucune exclusion sans justification écrite) et mettre à jour `src/content/legal/accessibility-status.ts` et `ACCESSIBILITY_UPDATED`.
- La politique de confidentialité décrit le code : toute modification de ce que le site recueille ou transmet (champs, photos, envoi, adresse IP, WhatsApp, hébergement, Speed Insights, cookies, contenu tiers) se reporte dans `src/content/legal/privacy.ts`, dans les trois langues. `tests/e2e/legal.spec.ts` échoue si une requête part vers un autre domaine ou si un cookie est déposé.
- Informations de l'entreprise (nom légal, numéro, adresse, contacts, conditions de vente…) : un seul objet, `src/config/business.ts` ; une valeur `null` s'affiche « [à compléter : …] ».
- Les fichiers CAO de l'atelier **sont versionnés** dans ce dépôt privé (`cad/originals/`, décision du 4/11 au soir) ; le pipeline les lit sans les réécrire. `cad/intermediate/` reste ignoré. Si le dépôt devient public, ces fichiers le deviennent aussi.

## Environnement (session cloud)
- Chromium : `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`. Tests navigateur : `CHROMIUM_PATH=… npx playwright test`.
- `scripts/perf/serve-and-run.sh <script.cjs> <args>` sert le build sur le port 3100 (adresses en `/fr/configurateur/…`). Il refuse un port occupé, attend le serveur 60 s au plus, garde son journal (`SERVER_LOG`) et arrête tout à la sortie. Campagne de mesure : `scripts/perf/measure.mjs` (JSON réécrit après chaque passe, résultats dans `docs/PROTOTYPE_REPORT.md`) ; la lancer en arrière-plan, elle dépasse le délai de 2 min d'une commande.
- `?debug=1` active la sonde `window.__jr` (`ready`, `orbit(az)`, `visibleNodes`, `metalColor`, `cameraAngles()`). `?quality=low` force le rendu simplifié.
- Vérifications : `npm run typecheck && npm run lint && npm test && npm run build && npm run test:e2e` (Chromium), plus `npm run test:e2e:browsers` (WebKit iPhone/iPad, Firefox sans 3D ; `npx playwright install webkit firefox`, et `npx playwright install-deps webkit firefox` si des bibliothèques manquent). État au 15/11 : 112 tests unitaires ; Chromium 242 (239 passés, 3 ignorés) ; WebKit iPhone 121 et iPad 121 (101 passés, 20 ignorés chacun) ; Firefox 92 (87 passés, 5 ignorés) ; 9 pipeline CAO ; aucun échec. **CI bloquée depuis le 15/11** : GitHub ne démarre plus les tâches (« recent account payments have failed or your spending limit needs to be increased ») ; à régler par le propriétaire dans la facturation GitHub. Contrôle complet local du 16/11 sur `d85cc16` : tout vert, chiffres ci-dessus confirmés, 0 vulnérabilité (`npm audit --omit=dev`), aucune erreur en production sur 7 jours. Pour les tests CAO en local : `pip install --break-system-packages -r pipeline/requirements.txt pytest`. En CI, un échec du build sur `next/font/google` (téléchargement des polices) est intermittent : relancer avec `gh run rerun <id> --failed`. Intégration continue : `.github/workflows/ci.yml`.
- Contrôle des liens de sources (`src/content`, 45 adresses au 15/11) : curl avec un en-tête de navigateur (Safari). Exceptions : le GIA coupe la connexion avec cet en-tête (utiliser curl tel quel, `--http1.1`) ; igi.org, economie.gouv.fr, withclarity.com et la page de recherche du GIA refusent tout curl (403) : vérifier par la recherche web ou la lecture de page. Préférer l'adresse finale à un lien court qui redirige (`4cs.gia.edu/?p=…`).
- Mesure sur appareil réel : page cachée `/fr/diagnostic` (rapport JSON), protocole `docs/DEVICE_TESTS.md`. Si le build échoue sur `next/font/google` alors que le réseau répond, le cache est corrompu : `rm -rf .next` puis rebâtir. Sans `CHROMIUM_PATH`, Playwright cherche un Chromium absent. Si le port 3100 reste occupé par un ancien `next-server` bloqué, les tests se figent : `fuser -n tcp 3100` puis `kill`.

## Aperçu en ligne
- **https://jr-diamond.vercel.app** : projet Vercel `jr-diamond` (équipe `diamond3-d`, `team_AaIv8uYfh5BjwUqYEuH8WbiZ`, projet `prj_sEIRWdvN7CniQl0HdoZCqWyykDeb`), **relié au dépôt GitHub `myhitbo/Diamond3D`** : chaque push sur `main` redéploie la production, chaque autre branche reçoit un lien de prévisualisation.
- Branche de production Vercel réglée sur `main` le 14/11 via la CLI (`vercel api /v9/projects/<id>/branch -X PATCH` avec `{"branch":"main"}` ; point d'accès non documenté, celui du tableau de bord). Le connecteur Vercel MCP ne permet pas ce réglage. Vérification : `vercel api /v9/projects/<id>` → `link.productionBranch`.
- CLI Vercel installée et connectée dans l'espace de travail cloud (`npm i -g vercel`, `vercel login` : le propriétaire approuve un code). L'espace de travail peut être réinitialisé : réinstaller si `vercel` est introuvable.
- Fermé à Google (`noindex`). Protégé par la connexion Vercel (toutes les adresses `.vercel.app`) : pour l'atelier ou un téléphone, créer un lien de partage (`get_access_to_vercel_url`, valable 23 h).
- Ancien aperçu `jr-diamond-apercu` (compte hil123, non relié à GitHub) : n'est plus mis à jour.
- Préversion claude.ai (page unique, sans Next.js) : `npm run preview:build`. Les `process.env.*` du code client y sont remplacés dans le `define` d'esbuild (`scripts/preview/build-preview.mjs`) et la construction échoue s'il en reste : toute nouvelle variable `NEXT_PUBLIC_*` lue par le configurateur doit y être ajoutée. Elle était cassée du commit d307cd1 (WhatsApp) au 15/11 : reconstruire toute préversion publiée entre-temps.

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
- **Pierres de couleur « sur demande »** (15/11) : diamant de couleur ; émeraude, saphir et rubis naturels (`stonesOnRequest` dans le schéma et dans ring-001), composant commun `OnRequest`. Message du devis assemblé par `buildRequestMessage` (`src/lib/configurator/logic.ts`) : forme et pierre se cumulent ; en « synthétique », « les autres pierres restent des diamants synthétiques », jamais « émeraude synthétique ». Le devis ne défile vers le formulaire qu'au clic sur un bouton « sur demande » (WCAG 3.2.2). Reste : rendu 3D et prix des pierres de couleur.
- **Page d'accueil** (15/11) : `/fr|en|he`, contenu `src/content/home.ts`. Limitée aux faits acquis ; photos et vidéos de fabrication écrites comme une intention. Image : capture du rendu 3D réel (`public/images/ring-001-rendu-3d.webp`, à refaire si le modèle change avec `scripts/perf/home-render.mjs`). « / » redirige (307) vers `/fr` ; le mot-symbole mène à `homePath(locale)`. Badge « Brouillon ».
- **404, aperçus de liens, robots, plan du site** (15/11) :
  - 404 traduite (`src/app/[locale]/not-found.tsx`, textes `src/content/not-found.ts`, segment `[locale]/[...rest]`) ; une adresse hors langue reçoit la 404 française. Le layout n'appelle plus `notFound()` : toute page sous `[locale]` vérifie la langue elle-même. Le titre d'une 404 vient à la fois de la page qui échoue (`notFoundMetadata`) et de `not-found.tsx` ;
  - métadonnées : passer par `pageMetadata` (`src/lib/metadata.ts`) ; image d'aperçu `public/images/apercu-partage.jpg` (`scripts/og/share-image.mjs` ; changer son nom si elle change, à cause du cache de WhatsApp et Facebook) ; `NEXT_PUBLIC_SITE_URL` règle l'adresse de base, `SITE_URL` reste celle de l'e-mail de devis ;
  - **interrupteur de lancement `SITE_INDEXABLE`** (`src/config/site.ts`, à faux) : balise robots, plan du site (vide avant le lancement), annonce dans `robots.txt` et redirections permanentes des adresses traduites (`TRANSLATED_REDIRECTS_PERMANENT`).
- **Déclaration d'accessibilité et politique de confidentialité** (15/11, brouillons « à valider par un avocat ») : `/fr/accessibilite`, `/en|he/accessibility`, `/fr/confidentialite`, `/en|he/privacy`, contenu `src/content/legal/` (règles de rédaction dans `types.ts`). Liens : pied de page, lien d'évitement en tête de page (`MAIN_ID` sur chaque `<main>`), sous la case d'accord des formulaires. SMTP chiffré imposé (`smtpOptions`, `requireTLS`).
- **Accessibilité** (15/11) : audit automatisé de 44 vues (32 pages, 12 états) en trois navigateurs, défauts corrigés (contraste du doré, cibles, focus caché sous la scène 3D sur mobile, erreurs des formulaires annoncées) ; vue 3D au clavier (flèches, + et −, 0) avec une description annoncée. Conformité déclarée « partielle » : aucun lecteur d'écran testé.
- **Mesure de performance** (15/11) : campagne complète (3 scénarios × 3 passes). Première image 3D 2,2 s sur ordinateur, 6,5 s sur mobile ×4 en 4G lente ; 828 Ko transférés. Détails dans `docs/PROTOTYPE_REPORT.md`, JSON dans `docs/perf/`.
- **ring-001 régénéré depuis `Ring.3dm`** (14/11) : `models:extract` simplifie d'abord, retouche ensuite ; équivalent au modèle du 3/11 (0,001 mm).
- **Études du 14/11** : `docs/PAIEMENT.md` (Stripe indisponible en Israël ; recommandation : Grow, parcours devis → prix confirmé → lien de paiement ; Bit plafonné à 5 000 ₪ par transaction chez la plupart des prestataires) et `docs/juridique/DOSSIER_AVOCAT_IL.md` (24 questions, résumé en hébreu).
- **Bijou de famille** (14/11) : `/fr|en|he/transformation`, formulaire avec photos (`POST /api/transformation`, même envoi SMTP que le devis), contenu `src/content/transformation.ts`. Badge « Brouillon » : trois formulations sont des déductions à faire valider (questions 57 à 60 de `docs/QUESTIONS_ATELIER.md`).
- **Guides en français et en anglais** (14/11, anglais le 15/11) : `/fr/guides` et `/en/guides`, six guides (synthétique ou naturel, formes de diamant, alliance de kiddouchin, les 4 C, or 14 ou 18 carats, taille de doigt), sources en bas de page, badge « Brouillon ». Contenu dans `src/content/guides/` : `fr.ts` (règles de rédaction en tête), `en.ts`, `types.ts` (types, `ringSizeRow`), `index.ts` (accès par langue, textes d'interface). Un guide garde son `id` d'une langue à l'autre et son adresse est traduite (`/en/guides/ring-size`) ; l'en-tête reçoit l'adresse de chaque langue (`hrefs`). Un test vérifie que l'anglais suit le français : mêmes rubriques, mêmes sources. En anglais : « lab-grown » (comme le configurateur), orthographe britannique, « karat » pour l'or. Pas de guides en hébreu : `/he/guides` répond 404. Une section peut porter un tableau (`table`) ; le tableau des tailles est calculé (`ringSizeRow` : ISO 8653, taille israélienne = française − 40, taille américaine au quart). Les configurateurs français et anglais renvoient aux guides de l'or et de la taille (`guideLinks`, absents en hébreu et dans la préversion). Questions 61 à 66 de `docs/QUESTIONS_ATELIER.md` pour l'atelier.
- **Adresses traduites** (14/11, généralisées le 15/11) : les pages traduites sont déclarées dans `TRANSLATED_SEGMENTS` (`src/lib/routes.ts`) : configurateur, accessibilité, confidentialité. Une ligne suffit : réécritures, redirections (307 avant le lancement, 308 ensuite), sélecteur de langue, hreflang et plan du site suivent. Pour écrire un lien : `configuratorPath`, `localizedPath`, `accessibilityPath`, `privacyPath`, `homePath`. Pied de page commun `SiteFooter`.
- **FAQ** (`/fr|en|he/faq`, contenu `src/content/faq.ts`) : 24 questions en 6 thèmes, réponses sourcées, 7 marquées « À confirmer » (suivi de la fabrication et pierre filmée depuis le 15/11). Données structurées FAQPage (réponses validées seulement).
- **Prix : aucun prix automatique** (décision de l'atelier du 16/11). Chaque prix est fixé à la main par Yonathan dans un devis ; sans prix validé, le site affiche « Sur devis ». Pas de prix « à partir de », pas de bénéfice calculé, pas de plafond, pas de conversion dollar → ₪. Le moteur `src/lib/pricing/engine.ts` (paramètres `src/config/pricing.ts`) est **abandonné, décision atelier du 16/11** : ni branché ni supprimé. Repères internes, jamais affichés (platine, polissage, rhodiage) : `docs/PRICING_RULES.md`.
- **Documents** :
  - `docs/CAHIER_DES_CHARGES.md` ;
  - `docs/ANALYSE_CONCURRENCE.md`, complété le 15/11 par `docs/concurrence/` (inventaires des sites : Israël, États-Unis, Europe, Australie) ;
  - `docs/STRATEGIE.md` (réanalyse, décisions du 4/11, plan de 90 jours ajusté, marges France vs Israël, droit israélien) ;
  - `docs/PRICING_RULES.md` ;
  - `docs/PAIEMENT.md`, `docs/juridique/DOSSIER_AVOCAT_IL.md`, `docs/DEVICE_TESTS.md` ;
  - `docs/REPONSES_ATELIER.md` (22/10, 3/11, 4/11) ;
  - `docs/QUESTIONS_ATELIER.md` ;
  - `docs/PROCEDURE_PHOTO_ATELIER.md` et sa version PDF `docs/atelier/Procedure_photo_video_atelier.pdf`, envoyée à Yonathan ;
  - vidéo de démonstration `docs/atelier/demo-site-2026-11-04.mp4`.

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

### En attente de Yonathan (message de 22 questions envoyé le 4/11 ; relance prête le 13/11 ; message complet du 14/11, 22 points, qui la remplace : `docs/atelier/2026-11-14_message.md`, **envoyé le 15/11**)
- Validation de la règle de bénéfice et du tableau par catégorie ; plafond pour un diamant naturel.
- Taux de change dollar → ₪ (proposé : taux officiel de la Banque d'Israël).
- Prix du platine (il interroge les fonderies).
- Grille de prix des pierres.
- Polissage final et rhodiage : un seul frais ou deux ?
- Métal par défaut (14 k ou 18 k).
- Moyens de paiement, annulation et retour, livraison (Israël et France), numéro WhatsApp.
- Questions 67 à 84 de `docs/QUESTIONS_ATELIER.md` (15/11, pas encore envoyées) : informations légales et conditions de vente pour `src/config/business.ts`, contact accessibilité, accès au local, conservation des données, retrait de l'accord de publication, étapes faites par l'atelier, point de départ de l'année de mise à taille offerte, photos et vidéos de fabrication, pierre filmée, termes hébreux des pierres.
- Relecture des 7 réponses « À confirmer » et des 3 déductions de la FAQ ; relecture des six guides (questions 61 à 66 : alliage de l'or blanc, poinçon, pierres sous 0,50 ct, tailles israéliennes).
- Relecture des textes hébreux. Existe-t-il en Israël un terme imposé pour les diamants de synthèse, ou un poinçon obligatoire ?
- Fichiers : alliance de kiddouchin, solitaire (pour le choix du carat), `Ring.3dm`, 3 autres modèles avec leurs photos studio.
- Validation de la planche avant/après des griffes (biseau des deux griffes de pointe de la marquise).

### Développement possible sans attendre
Au 14/11 au soir, plus rien ici ne se fait sans une action extérieure : les trois points restants sont prêts côté code et attendent le propriétaire, l'atelier ou la date de lancement.
- **Envoi réel des devis : il manque seulement des valeurs à saisir dans Vercel** (vérifié le 16/11 : aucune variable d'environnement dans le projet `jr-diamond`). WhatsApp : renseigner `NEXT_PUBLIC_WHATSAPP_NUMBER` (numéro de l'atelier, format international) puis redéployer ; le bouton « Envoyer sur WhatsApp » apparaît (lien wa.me, message pré-rempli, photos à joindre à la main). E-mail : variables `QUOTE_TO`, `QUOTE_FROM`, `SMTP_*` ; sans elles, le bouton « Envoyer la demande » répond « indisponible ». La notification automatique par la WhatsApp Business Platform de Meta n'est pas faite (compte Meta, numéro dédié, coût par message).
- Page de l'alliance de kiddouchin : attend un modèle (atelier ou CGTrader). Un anneau généré par le code contredirait la promesse « ce que vous voyez existe ». Les guides de l'alliance, de l'or et de la taille sont prêts.
- Jour du lancement : `SITE_INDEXABLE = true` dans `src/config/site.ts` (balise robots, plan du site, redirections permanentes ; pas avant, un navigateur garde une redirection permanente en mémoire). Retirer le « garde-fou avant le lancement » de `tests/unit/seo.test.ts`, renseigner `NEXT_PUBLIC_SITE_URL` si le domaine change, lever la protection Vercel (cookie `_vercel_jwt`), choisir la langue de la racine (`/` mène à `/fr`, alors que le lancement se fait en Israël), puis envoyer un lien sur WhatsApp pour vérifier l'aperçu.

### Dès réception des éléments
- Sélecteur de carat sur un solitaire.
- Photo réelle à côté du rendu 3D.
- Calibrer les teintes des métaux sur les photos studio.

### Avant la vente
- Avocat israélien :
  - la bague configurée relève-t-elle de l'exception « fabriqué sur mesure » au droit d'annulation ?
  - délai étendu pour les nouveaux immigrants ?
  - poinçon obligatoire ?
  - validation de la déclaration d'accessibilité et de la politique de confidentialité (questions 25 à 43, sections H et I de `docs/juridique/DOSSIER_AVOCAT_IL.md`), dont le transfert des données vers Vercel aux États-Unis.
- Remplir les 18 informations de `src/config/business.ts`. Deux manques bloquent à eux seuls l'ouverture : le contact de la déclaration d'accessibilité (règle 35ה) et le responsable du traitement dans la politique (article 11).
- Accessibilité, sans délai de grâce pour un site nouveau en Israël : contrôle manuel selon le formulaire de la Commission, test avec NVDA et VoiceOver (si possible TalkBack), à reporter dans `screenReaders` de `accessibility-status.ts`.
- Tests sur appareils réels (iPhone Safari, Android) avec `docs/DEVICE_TESTS.md` et `/fr/diagnostic` : outillage prêt le 13/11, tests à faire par le propriétaire. Speed Insights servi en production (vérifié le 13/11). Intégration continue verte (13/11).
- Retirer les badges « Brouillon » quand le modèle et la FAQ sont validés par l'atelier.
- France (plus tard) : transitaire, transport assuré, TVA d'importation de 20 % et droits (accord UE-Israël à vérifier).
