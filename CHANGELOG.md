# Historique

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
