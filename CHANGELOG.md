# Historique

## 0.3.2 — 2026-11-15 — Sources contrôlées, tests iPad et Firefox

- Les 40 liens de sources (guides et FAQ) répondent tous. Sept liens qui passaient par une redirection pointent maintenant vers l'adresse finale. Deux paires de sources GIA menaient à la même page : elles sont fusionnées. Le GIA, Sefaria et Total Materia ont changé d'adresse.
- FAQ « L'or blanc jaunit-il ? » corrigée dans les trois langues : la source citée (The Knot) ne disait pas « tous les un à deux ans ». Les joailliers donnent d'un à cinq ans selon le port ; source ajoutée (With Clarity).
- Tests : 80 WebKit (iPhone et iPad, 2 ignorés chacun) et 20 Firefox, tous verts.

## 0.3.1 — 2026-11-14 — Guides : les 4 C, l'or, la taille de doigt

- Trois guides en français, faits vérifiés le 14/11, sources en bas de page, badge « Brouillon » :
  - « Les 4 C du diamant » (`/fr/guides/les-4-c-du-diamant`) : échelles du GIA, carat de poids, et nouveau certificat GIA des diamants synthétiques (« Premium » ou « Standard » depuis fin 2025) face à l'IGI, qui garde l'échelle D à Z ;
  - « Or 14 ou 18 carats » (`/fr/guides/or-14-ou-18-carats`) : titres légaux français (le 14 carats peut s'appeler « or »), densité, dureté selon l'alliage, or blanc au nickel ou au palladium ;
  - « Taille de doigt » (`/fr/guides/taille-de-doigt`) : norme ISO 8653, méthode, pièges, tableau calculé des tailles françaises, israéliennes (française − 40) et américaines.
- Les guides acceptent un tableau (`table`), lisible sur mobile. Liens croisés entre guides.
- Configurateur français : liens vers les guides de l'or et de la taille (absents en anglais, en hébreu et dans la préversion).
- Corrections : le 14 carats n'est plus dit « en général plus dur » (FAQ et configurateur, trois langues) ; la note sur l'origine ne dit plus « créé en laboratoire » mais « fabriqué par l'homme ».
- Six questions pour l'atelier (61 à 66 de `docs/QUESTIONS_ATELIER.md`).
- Points « sans attendre » restants passés en revue : envoi réel des devis (aucune variable saisie dans Vercel), page de l'alliance de kiddouchin (modèle attendu), redirections permanentes (au lancement). Rien d'autre n'est faisable sans action extérieure.
- Tests : 61 unitaires, 80 navigateur (Chromium), 40 WebKit iPhone en CI (2 ignorés).

## 0.3.0 — 2026-11-14 — Bijou de famille, guides, adresses traduites

- Page « Transformer un bijou de famille » (`/fr|en|he/transformation`) : déroulé en quatre étapes, ce que l'atelier dit franchement, formulaire avec photos (route `POST /api/transformation`, même envoi que le devis) et bouton WhatsApp si le numéro est renseigné. Badge « Brouillon ».
- Guides en français (`/fr/guides`) : synthétique ou naturel, formes de diamant, alliance de kiddouchin. Faits vérifiés le 14/11, sources en bas de page, données structurées Article. Badge « Brouillon ».
- Adresses traduites : `/en/configurator/…` et `/he/configurator/…` ; les anciennes adresses y redirigent (307, à passer en permanent au lancement). Balises de langue et lien canonique à jour. Module `src/lib/routes.ts`.
- Pied de page commun avec les liens du site.
- Limitation des envois partagée entre les deux routes (`src/lib/quote/rateLimit.ts`).
- Tests : 57 unitaires, 9 pipeline, navigateur 76 (Chromium), 76 (WebKit iPhone et iPad, dont 4 ignorés), 18 (Firefox).

## 0.2.2 — 2026-11-14 — Formes sur demande, WhatsApp, modèle régénéré, études

- Formes de pierre non modélisées : boutons « sur demande » qui ouvrent le devis avec le message pré-rempli.
- En-tête mobile : libellé court de la FAQ, plus aucun lien sur deux lignes.
- Devis par WhatsApp : bouton « Envoyer sur WhatsApp » (lien wa.me, message pré-rempli), affiché seulement si `NEXT_PUBLIC_WHATSAPP_NUMBER` est renseigné.
- ring-001 régénéré depuis `Ring.3dm` ; la retouche web s'applique après la simplification (équivalent au modèle publié, écart maximal 0,001 mm).
- Intégration continue : actions GitHub en v7 (Node 24).
- Études : `docs/PAIEMENT.md` (encaisser en Israël) et `docs/juridique/DOSSIER_AVOCAT_IL.md` (24 questions pour l'avocat).
- Production Vercel : branche `main` (réglée par la CLI).
- Tests : 46 unitaires, 9 pipeline, navigateur 64 (Chromium), 60 (WebKit iPhone et iPad), 12 (Firefox).

## 0.2.1 — 2026-11-13 — Outillage des tests sur appareils réels

- Page cachée `/fr|en|he/diagnostic` : mesure la 3D sur l'appareil (processeur graphique, téléchargement du modèle, première image, images par seconde en rotation, niveau de rendu) et produit un rapport JSON à copier ou partager. Jamais indexée.
- Speed Insights de Vercel (Web Vitals réels), chargé seulement sur Vercel.
- Tests WebKit (iPhone 15, iPad Pro 11) et Firefox : `npm run test:e2e:browsers`. Test « sans WebGL » rendu indépendant du navigateur ; gestes tactiles (simulés par CDP) limités à Chromium ; Firefox limité aux parcours sans 3D (pas de WebGL dans l'environnement de test).
- Intégration continue GitHub Actions : typecheck, lint, unitaires, modèles, build, pipeline CAO, navigateur Chromium et WebKit.
- Protocole `docs/DEVICE_TESTS.md` (FR, résumé en hébreu pour l'atelier).
- Correction : la rotation commandée par la sonde de test ne redessinait pas la scène (rendu à la demande).
- Tests : 43 unitaires ; navigateur 62 (Chromium), 58 (WebKit), 12 (Firefox).

## 0.2.0 — 2026-11-13 — Devis par e-mail (phase 4, version légère)

- Formulaire « Demander un devis » sous le récapitulatif (FR/EN/HE) : nom, e-mail, téléphone, taille, message, jusqu'à 3 photos, consentement, accord facultatif de publication des photos et vidéos de fabrication.
- Route `POST /api/devis` : configuration revalidée sur la définition du modèle, récapitulatif recalculé côté serveur, envoi SMTP (nodemailer) avec photos jointes et réponse directe au client. Aucune base de données.
- Champ piège anti-robots, limitation par IP, limites de taille des photos partagées entre navigateur et serveur. Mode `QUOTE_DRY_RUN` pour le développement et les tests.
- Champ piège masqué sans décalage hors écran : en hébreu (droite-à-gauche), le décalage élargissait la page et rendait la case d'accord inatteignable sur mobile.
- Tests : 13 tests unitaires et 16 tests navigateur supplémentaires (dont l'hébreu) ; suites complètes 43/43 et 58/58.
- Préversion claude.ai : bouton de devis désactivé (pas de serveur).

## 0.1.3 — 2026-11-13 — Branche `main` et déploiement continu

- Fusion des deux branches de travail du 4/11 dans `main`, désormais branche par défaut du dépôt.
- Fichiers CAO de ring-001 versionnés dans le dépôt privé (`cad/originals/`), modifiables. Une empreinte différente de la recette ne bloque plus la conversion : elle est signalée et enregistrée.
- `npm run preview:build` : préversion autonome publiable sur claude.ai (page unique, modèle intégré).
- Projet Vercel `jr-diamond` relié au dépôt GitHub : déploiement automatique à chaque push, accès protégé par la connexion Vercel.

## 0.1.2 — 2026-11-04 — Or 14 carats, libellés, moteur de prix

- Or 14 carats jaune, blanc et rose. Le métal se choisit en deux temps : couleur, puis titre (14 ou 18 carats ; aucun pour le platine).
- Disponibilité des métaux confirmée par l'atelier : la mention « à confirmer » disparaît.
- Diamant « Synthétique » (et non « Laboratoire ») en français, avec la précision qu'il ne s'agit pas d'une imitation.
- Poids du métal affiché « ≈ … g (± 5 %) » ; délai de fabrication « 14 jours ouvrés ».
- Tailles des pierres avec une virgule décimale en français.
- Moteur de prix indicatif en ₪ TTC (non branché).
- Page FAQ (`/fr/faq`, `/en/faq`) : 24 questions en 6 thèmes, réponses sourcées, 5 marquées « À confirmer ». Données structurées FAQPage (réponses validées seulement). Lien dans l'en-tête, en-tête commun aux pages.
- Version hébreu (`/he/…`) : sens de droite à gauche, polices hébraïques, configurateur et FAQ traduits (relecture native à faire).
- Prix : réponses de l'atelier du 4/11 ; la majoration sur les postes en USD est remplacée par une règle de bénéfice (fixe + part des matières, bornée), proposée et non validée.

## 0.1.1 — 2026-11-03 — Retouche web de ring-001

- Demande de l'atelier : griffes rabattues et « 8 » supprimés, pour le web uniquement.
- `pipeline/web_retouch.py` + `scripts/models/apply-web-edits.mjs` : 48 griffes ajustées, 452 triangles de plaques supprimés, 88 triangles de bouchons ajoutés. Étape intégrée à `models:extract` ; `models:retouch` pour le modèle publié.
- GLB : 194 272 octets, 27 356 triangles. Test de non-régression `pipeline/tests/test_web_retouch.py`. Suite navigateur complète : 28/28.
- Correction du rapport de phase 2 : les griffes dépassaient de 0,25 à 0,5 mm, pas de 4 mm.

## 0.1.0 — 2026-10-20 — Prototype technique (phase 2)

- Pipeline CAO → web : extraction du `.3dm` sans Rhino (maillages de rendu enregistrés), séparation des deux bagues par recette, recoupement avec le STL, métadonnées des pierres, simplification mesurée du métal, compression meshopt.
- Modèle pilote `ring-001` : GLB de 191 Ko, 27 720 triangles, écart max 0,021 mm.
- Configurateur piloté par des données : compositions, métaux, emplacements de pierre avec variantes et formes indisponibles déclarées, origine du diamant, prix « sur devis » imposé par le schéma.
- Scène 3D : React Three Fiber, rendu à la demande, studio procédural, diamants par réfraction en lancer de rayons (scène en mm), repli qualité réduite, vues prédéfinies, gestes tactiles.
- Interface FR/EN, ivoire, mobile d'abord (scène fixe en haut, options dessous).
- Validateur de modèles, tests unitaires, tests du pipeline, tests navigateur ordinateur et mobile.
