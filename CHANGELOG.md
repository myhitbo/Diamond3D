# Historique

## 2026-11-24 — Réponses de l'atelier du 16/11 : aucun prix automatique, osek patour, textes validés

- **Réponses de l'atelier du 16/11** archivées (`docs/atelier/2026-11-16_reponses.txt` : messages WhatsApp ; le fichier joint reste à coller tel quel, il n'a pas été reçu par la session) et rapprochées des 22 points du message du 14/11 (`docs/REPONSES_ATELIER.md`).
- **Aucun prix automatique** : chaque prix est fixé à la main par Yonathan dans un devis ; le site reste « Sur devis ». Le moteur de prix est abandonné, ni branché ni supprimé. Repères internes, jamais affichés : platine 280 + 100 ₪/g, polissage ≈ 10 $, rhodiage ≈ 10 $ de plus, supplément pour une pièce complexe (`docs/PRICING_RULES.md`).
- **Osek patour, sans TVA** : plus de « TTC » ni de « TVA 18 % ». Un seul réglage, `vatStatus` (`src/config/business.ts`), décide de la mention de TVA de la FAQ « prix » et de la politique de confidentialité ; testé pour ses deux valeurs. FAQ « prix » réécrite : chaque prix est fixé par l'atelier pour la pièce.
- **Informations de l'entreprise** : « Diamdor » (à confirmer : nom du titulaire), numéro d'osek patour 345837116, téléphone +972 55-255-0455, paiement par carte en ligne et Bit, livraison en Israël par coursier ou retrait à la Bourse.
- **Configurateur et formulaires** : or jaune 14 k par défaut ; réponse aux devis « sous 24 à 48 h ouvrées » ; taille européenne de référence, avec l'équivalent américain.
- **Textes** (FR, EN, HE) : FAQ validée par l'atelier (sur mesure, paiement, livraison, entretien ; l'annulation reste « À confirmer » jusqu'à l'avis de l'avocat ; la livraison à l'étranger est retirée) ; pas de certificat systématique sous 0,50 ct ; or blanc sans nickel ; poinçon 585 ou 750 ; guide de la taille sans « taille israélienne » comme norme ; bijou de famille confirmé, avec l'apport à l'atelier et l'assurance de l'envoi. Nouveaux textes hébreux à faire relire.
- Dossier de l'avocat : questions 44 à 47 (non-reprise du sur-mesure, clause de casse au dessertissage non publiée, osek patour, transport). Relance de l'atelier prête (`docs/atelier/2026-11-16_relance.md`, 11 questions).
- Tests : TESTS_PLACEHOLDER

## 2026-11-20 — Trois versions de l'accueil, bague pilotée par le défilement

- Demande du propriétaire : reprendre le système de quatre sites primés (Ciao Energy, Unique Jewelry, Maserati Trident Stars, Seed Jewelry) avec la bague, en trois versions.
- Moteur commun : le modèle 3D réel suit le défilement (place, taille, rotation, métal, séparation du solitaire et de l'alliance), en gardant le défilement du navigateur.
- Version A « Écrin », version B « Constellation », version C « Lumière » : `/fr/versions`.
- Reflets adoucis (choix « doux » du propriétaire) dans le configurateur et dans les sept rendus Cycles.
- Étude des sites de référence : `docs/versions/ETUDE_REFERENCES.md`.
- Critique des trois versions par trois directeurs artistiques, chaque correction contrôlée par un second agent, puis corrections : scènes tenues à l'écran (le texte se pose pendant que la bague finit son mouvement), appels finaux avec la bague, téléphone revu (bandeau de la bague, textes qui se suivent), aucun texte sur la bague.
- Contrôle sur captures à huit tailles d'écran (ordinateur, portable, tablette couchée et debout, deux téléphones, téléphone à l'horizontale, zoom à 200 %) et en hébreu ; défauts corrigés : bague sur un titre, rangs de bagues sur les noms des métaux, texte sur la bague sur tablette.
- Moteur : plafond de taille par rapport à la hauteur (`maxH`), valeurs d'écran en hauteur (`upright`), mise en page étroite pour tout écran plus haut que large, taille plafonnée par la largeur sur écran 4:3, `?quality=low|high` ; studio clair sans noir ; pierres simplifiées contrastées sur fond clair.
- Tests unitaires réparés (plan du site, identifiant du contenu principal) : les pages des versions les avaient cassés.

## 2026-11-20 — Réalisme de la 3D et images photoréalistes

- Demande du propriétaire : « la 3D fait trop fausse, trop cylindrique, trop carrée, pas de rondeur ni de reflets ».
- Configurateur : nouveau studio d'éclairage (fond presque noir, boîtes à lumière dégradées, bandes et points vifs) et métaux polis (rugosité 0,05). L'or reflète enfin des lumières et des ombres au lieu d'un fond clair uniforme.
- Images de l'accueil : rendus photoréalistes Blender Cycles du modèle de fabrication (arêtes adoucies au rendu, diamants avec dispersion), `scripts/render/`. Remplacent les captures du configurateur.
- En-tête : bandeau de signature, monogramme centré, menu complet ; bouton « Menu » sur tablette et téléphone.
- Accueil : « Métaux et pierres » avec le solitaire, citation en or sur noir ; le bandeau émeraude est retiré.

## 2026-11-20 — Refonte visuelle, seconde version

- Demande du propriétaire : la première refonte était « simple et fade, aucun sentiment de luxe ».
- Titres en Bodoni Moda, or « feuille » en dégradé, vert émeraude, grain sur les fonds sombres.
- Accueil reconstruit : premier écran plein cadre, gros plan de la marquise, galerie des quatre métaux, bandeau émeraude, citation, appel final. Textes existants conservés ; ajouts : trois repères, titre et texte de la galerie, appel final.
- Six rendus 3D réels de ring-001 sur fond transparent (`public/images/rendus/`, `scripts/perf/gallery-render.mjs`).
- Configurateur, FAQ, guides et pages légales : titres plus grands, filet or.

## 2026-11-17 — Refonte visuelle « maison de joaillerie »

- Palette noir, ivoire et champagne ; en-tête et pied de page noirs avec monogramme JR et filets dorés.
- Accueil : premier écran noir en pleine largeur avec le rendu 3D sur fond noir, sections numérotées, bandeau « Métaux et pierres », liens fléchés. Textes inchangés.
- Configurateur : scène 3D sur fond noir, vues et choix en cours restylés, bouton principal or au survol.
- WhatsApp des devis actif en production ; inventaire des fichiers de l'atelier reçus par le Drive (`docs/atelier/2026-11-17_fichiers_drive.md`).
- Tests : tout vert (Chromium 247 passés ; WebKit et Firefox 295 passés). Déclaration d'accessibilité datée du 17/11.
- Sécurité : Next.js 16.4.2 → 16.4.6 (GHSA-mfr8-8qww-v76h, GHSA-vc7v-qv4w-wrv8) ; 0 faille dans les dépendances de production ; suites complètes repassées, toutes vertes.

## 2026-11-16 — Lien de partage de la configuration

- La configuration (composition, métal, origine, pierre) est dans l'adresse de la page : recharger, mettre en favori ou envoyer le lien rouvre la même bague. Valeurs inconnues ignorées une à une ; aucune nouvelle entrée d'historique.
- Bouton « Partager cette configuration » (FR, EN, HE) : partage du système, sinon copie du lien, sinon lien affiché et sélectionné.
- Le lien complet part dans l'e-mail du devis et dans le message WhatsApp (avant : page sans configuration).
- Concurrence, périmètre réduit voulu par le propriétaire : 10 sites israéliens et 5 français audités de plus (16 et 8 en tout), synthèses `SYNTHESE_il.md` et `SYNTHESE_fr.md`. Écart noté chez Laveran (`agents.md`).
- Tests : 4 unitaires et 4 navigateur ajoutés. Suites complètes : 116 unitaires ; Chromium 247 passés, 3 ignorés ; iPhone et iPad 104 passés, 21 ignorés chacun ; Firefox 87 passés, 5 ignorés ; aucun échec. Déclaration d'accessibilité datée du 16/11.

## 2026-11-16 — Étude de concurrence terminée, dépôt public

- Fin de l'étude de concurrence fusionnée dans `main` : rapports de forums vérifiés, audits de sites (États-Unis, Israël, Europe, Australie), deux comparaisons avec le prototype et `docs/concurrence/SYNTHESE.md` (35 avantages de la concurrence classés, nos avantages, ce qu'il ne faut pas copier, décisions attendues).
- Contrôle complet local sur `d85cc16` : tout vert ; CI GitHub bloquée par la facturation du compte.

## 2026-11-15 — Dépôt public, étude de concurrence (sans changement de code)

- Le dépôt GitHub est public (décision du propriétaire). Les fichiers CAO, les règles de prix et les dossiers de `docs/` sont lisibles par tous. Contrôle : aucun secret dans les fichiers suivis ni dans l'historique.
- Étude de concurrence dans `docs/concurrence/` : exploration de quatre marchés, dix rapports de forums vérifiés, audits de sites en cours.

## 0.5.0 — 2026-11-15 — Accueil, pages légales, accessibilité, pierres de couleur, lancement préparé

- **Page d'accueil** `/fr`, `/en`, `/he` (« l'atelier en direct ») limitée aux faits acquis, image du vrai rendu 3D légendée « rendu 3D, pas une photo ». « / » redirige vers `/fr`. Badge « Brouillon ».
- **Pierres de couleur « sur demande »** : diamant de couleur ; émeraude, saphir et rubis naturels. Le bouton ouvre le devis avec un message pré-rempli ; forme et pierre se cumulent ; aucun prix, la 3D reste la marquise. Le formulaire ne défile plus quand le message change (WCAG 3.2.2). Préversion claude.ai réparée (elle plantait depuis l'ajout du bouton WhatsApp).
- **404 traduite** (FR, EN, HE), **aperçus de liens partagés** (image 1200 × 630), `robots.txt` et plan du site. **Interrupteur de lancement** `SITE_INDEXABLE` (`src/config/site.ts`) : balise robots, plan du site et redirections permanentes en un seul réglage.
- **Déclaration d'accessibilité** et **politique de confidentialité** (FR, EN, HE), brouillons à valider par un avocat. La politique décrit ce que fait le code (formulaires, e-mail, adresse IP, WhatsApp, Vercel aux États-Unis et son journal des requêtes, Speed Insights, aucun cookie). Informations manquantes réunies dans `src/config/business.ts` (18, affichées « [à compléter] »). Adresses traduites généralisées (`TRANSLATED_SEGMENTS`).
- **Accessibilité** : audit axe-core (WCAG 2.0 à 2.2, A et AA, plus le critère israélien 2.4.10) de 44 vues en Chromium, WebKit et Firefox, plus clavier, 320 px, zoom 200 %, animations réduites, cibles de 24 px. Corrigés : contraste du doré (`--gold-text`), petites cibles, focus caché sous la 3D sur mobile, erreurs des formulaires annoncées, vue 3D au clavier avec description. Conformité déclarée « partielle » (aucun lecteur d'écran testé).
- **Revues** : un diamant synthétique n'est plus dit « vrai diamant » (décret 2002-65, article 4) ; plus de « sur place » ni de « chaque pièce » ; mise à taille « offerte pendant la première année » ; suivi de la fabrication et pierre filmée passés « À confirmer » (7 réponses de la FAQ) ; hébreu אזמרגד, ספיר, אודם pour les pierres ; SMTP chiffré imposé (`requireTLS`).
- **Mesure de performance** menée à bout (3 scénarios × 3 passes) : première image 3D 2,2 s sur ordinateur, 6,5 s sur mobile ralenti en 4G lente, 828 Ko transférés. Lanceur `serve-and-run.sh` fiabilisé (port occupé, attente bornée, arrêt propre), JSON écrit après chaque passe.
- Dossier de l'avocat corrigé : un défaut d'accessibilité n'expose à une action qu'après une notification restée 60 jours sans correction (règle 35א(ד)) ; seuil d'exemption de 100 000 ₪ dans le texte. Questions 25 à 43 ajoutées (sections H et I).
- Questions 67 à 84 pour l'atelier.
- Concurrence : inventaires des sites en Israël, aux États-Unis, en Europe et en Australie (`docs/concurrence/`).
- Fusionné dans `main` le 15/11 (production redéployée).
- Tests : 112 unitaires ; Chromium 242 (3 ignorés) ; WebKit iPhone et iPad 121 chacun (20 ignorés chacun) ; Firefox 92 (5 ignorés) ; aucun échec.
- Après la fusion, campagne Chromium relancée sur `main` : 238 passés, 3 ignorés, 1 échec intermittent (parcours au clavier, devis ouvert, mobile). Cause : le test appuyait sur Tab pendant le défilement animé vers le formulaire. Le test attend désormais la fin du défilement (24 passages sur 24 sous charge) ; le site ne change pas.

## 0.4.0 — 2026-11-15 — Guides en anglais

- Les six guides existent en anglais, sous `/en/guides` : mêmes faits, mêmes sources, même date de vérification, badge « Draft ». Adresses traduites (`/en/guides/ring-size`, `/en/guides/14k-or-18k-gold`…). En anglais, « lab-grown » comme le configurateur ; la loi française et le mot « synthétique » sont expliqués dans le guide concerné.
- Contenu réorganisé dans `src/content/guides/` (un fichier par langue). Un test vérifie que l'anglais suit le français : mêmes rubriques, même nombre de paragraphes, mêmes sources.
- Sélecteur de langue des guides : il mène au même guide dans l'autre langue. Pied de page : lien « Guides » en anglais. Configurateur anglais : liens vers les guides de l'or et de la taille.
- Le tableau des tailles écrit le diamètre avec un point en anglais (16.6), une virgule en français (16,6).
- Correction : un test de la FAQ cherchait l'ancien libellé de la source GIA renommée en 0.3.2 ; la CI de ce commit avait échoué pour cette seule raison.
- Tests : 64 unitaires, 82 Chromium, 82 WebKit (iPhone et iPad, 2 ignorés chacun), 21 Firefox.

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
