# Mémoire du projet JR Diamond

Mise à jour : 4 novembre 2026. Ce fichier résume l'état du projet pour reprendre le travail sans relire tout l'historique.
Détails : `TODO.md` (tâches), `CHANGELOG.md` (historique), `docs/` (dossiers de fond).

## Le projet en bref
- Plateforme de joaillerie **JR Diamond** avec configurateur 3D. Atelier de **Yonathan Cohen** à la Bourse du diamant de Ramat Gan.
- **Lancement en Israël d'abord** (décision du propriétaire, 4/11). Prix en ₪ TTC (TVA 18 %). Langues : français, hébreu, anglais. France ensuite.
- Positionnement : « l'atelier en direct ». Ce que vous voyez existe (modèle issu du fichier de fabrication, pierre filmée). Le prix est expliqué. On voit naître son bijou (photos et vidéos de fabrication).

## Conventions
- Réponses à l'utilisateur en **français**, denses, avec la distinction vérifié / inféré / supposé. Faits vérifiés par recherche, sources citées.
- Branche de travail : `ccr-297332c6-4qfws6`. Commit et push à chaque étape, **pas de PR** sauf demande.
- Code : guillemets simples, largeur ~160. Il n'y a **pas** de configuration Prettier : ne pas lancer `npx prettier` sans `--single-quote --print-width 160`.
- Libellés légaux : en français, « synthétique » (décret 2002-65 ; « de laboratoire » est interdit). Synthétique ≠ imitation.
- Les originaux CAO ne sont jamais versionnés (`cad/originals/` et `cad/intermediate/` sont ignorés par git).

## Environnement (session cloud)
- Chromium : `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`. Tests navigateur : `CHROMIUM_PATH=… npx playwright test`.
- `scripts/perf/serve-and-run.sh <script.cjs> <args>` sert le build sur le port 3100 (adresses en `/fr/configurateur/…`).
- `?debug=1` active la sonde `window.__jr` (`ready`, `orbit(az)`, `visibleNodes`, `metalColor`). `?quality=low` force le rendu simplifié.
- Vérifications : `npm run typecheck && npm run lint && npm test && npm run build && npm run test:e2e`. État au 4/11 : 30 tests unitaires et 42 tests navigateur, tous verts.

## Aperçu en ligne
- https://jr-diamond-apercu-hil123s-projects.vercel.app : projet Vercel `jr-diamond-apercu` (équipe `team_MA1v4n2V2iSLC5Y3vGOmQZ9S`, projet `prj_Or6iUhOdvGx8KE9g0OR7ZO0kJLHZ`).
- Fermé à Google, protection Vercel retirée pour que l'atelier puisse l'ouvrir.
- **Pas relié à GitHub** : après chaque modification, republier avec `create_deployment` (gitSource github `hil123/bijoux-3d`, ref de la branche, sha du commit, target production).

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

### En attente de Yonathan (message de 22 questions envoyé le 4/11)
- Validation de la règle de bénéfice et du tableau par catégorie ; plafond pour un diamant naturel.
- Taux de change dollar → ₪ (proposé : taux officiel de la Banque d'Israël).
- Prix du platine (il interroge les fonderies).
- Grille de prix des pierres.
- Polissage final et rhodiage : un seul frais ou deux ?
- Métal par défaut (14 k ou 18 k).
- Moyens de paiement, annulation et retour, livraison (Israël et France), numéro WhatsApp.
- Relecture des 5 réponses « À confirmer » et des 3 déductions de la FAQ.
- Relecture des textes hébreux. Existe-t-il en Israël un terme imposé pour les diamants de synthèse, ou un poinçon obligatoire ?
- Fichiers : alliance de kiddouchin, solitaire (pour le choix du carat), `Ring.3dm`, 3 autres modèles avec leurs photos studio.
- Validation de la planche avant/après des griffes (biseau des deux griffes de pointe de la marquise).

### Développement possible sans attendre
- **Proposé, en attente du feu vert de l'utilisateur** : afficher les autres formes de pierre comme des boutons grisés « sur demande ». L'utilisateur a signalé que les diamants ne se choisissent pas.
- Corriger, dans l'en-tête mobile, le lien « Questions fréquentes » qui passe sur deux lignes.
- Formulaire de devis (phase 4), avec la case d'accord pour publier les photos et vidéos de fabrication.
- Parcours « transformation de bijou de famille » (photos de l'ancien bijou + devis).
- Page et guide de l'alliance de kiddouchin (dès réception du modèle).
- Guides SEO en français : synthétique ou naturel, tailles, kiddouchin.
- Adresses traduites (`/en/configurator/…`, `/he/…`).

### Dès réception des éléments
- Brancher le prix « à partir de » quand `src/config/pricing.ts` n'a plus de paramètre manquant.
- Sélecteur de carat sur un solitaire.
- Photo réelle à côté du rendu 3D.
- Calibrer les teintes des métaux sur les photos studio.
- Régénérer ring-001 depuis `Ring.3dm` (`npm run models:extract -- ring-001`).

### Avant la vente
- Avocat israélien :
  - la bague configurée relève-t-elle de l'exception « fabriqué sur mesure » au droit d'annulation ?
  - délai étendu pour les nouveaux immigrants ?
  - poinçon obligatoire ?
- Tests sur appareils réels (iPhone Safari, Android), campagne de mesure de performance.
- Retirer les badges « Brouillon » quand le modèle et la FAQ sont validés par l'atelier.
- France (plus tard) : transitaire, transport assuré, TVA d'importation de 20 % et droits (accord UE-Israël à vérifier).
