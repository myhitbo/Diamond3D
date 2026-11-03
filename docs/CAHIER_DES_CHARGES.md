# Cahier des charges — JR Diamond, plateforme de joaillerie et configurateur 3D

Version 1.0 — 2 novembre 2026. Document de référence pour les phases 3 à 8. S'appuie sur le prototype livré en phase 2 ([`PROTOTYPE_REPORT.md`](PROTOTYPE_REPORT.md)) et sur l'[analyse concurrentielle](ANALYSE_CONCURRENCE.md).

Légende : **[V]** vérifié dans le code ou par mesure · **[E]** estimation · **[D]** décision à prendre par le propriétaire · **[A]** à valider par l'atelier.

---

## 1. Contexte et objectifs

### 1.1 Situation
- Atelier de joaillerie disposant de ses fichiers CAO Rhino/Matrix de fabrication.
- Prototype technique existant [V] : pipeline `.3dm` → GLB (191 Ko, écart max 0,021 mm), configurateur React Three Fiber (composition, métal, pierre centrale, origine, taille), FR/EN, mobile d'abord, 15 tests unitaires, 6 tests pipeline, 28 tests navigateur, prix « sur devis », bouton devis désactivé.
- Aucun service externe, aucune base, aucun déploiement, aucun compte [V].

### 1.2 Objectif commercial
Vendre des bijoux sur mesure et semi-sur-mesure (bagues de fiançailles, alliances, puis autres catégories) en ligne et en boutique, avec un parcours qui part du **vrai bijou de l'atelier** et aboutit à une commande confirmée, sans abonnement ni commission à un éditeur tiers.

### 1.3 Objectifs mesurables (12 mois après mise en ligne) [E, à recalibrer après 3 mois de données]
| Indicateur | Cible |
|---|---|
| Premier rendu 3D (4G, mobile milieu de gamme) | < 2 s |
| Taux de demande de devis parmi les visiteurs du configurateur | ≥ 4 % |
| Taux de conversion devis → commande | ≥ 25 % |
| Délai moyen devis → prix confirmé | < 24 h ouvrées |
| Retours pour taille incorrecte | < 3 % des commandes |
| Score Lighthouse mobile (performance, accessibilité) | ≥ 90 |

### 1.4 Positionnement retenu (issu de l'analyse concurrentielle)
1. Léger : moteur + modèle < 1 Mo (concurrents : 2,9 à 16,5 Mo) [V].
2. Prouvé : modèle issu du fichier de fabrication, écart mesuré, rien de simulé [V].
3. Honnête : prix décomposé et daté, statut indicatif/calculé/confirmé.
4. Complet : du configurateur à la livraison, atelier inclus.
5. Trilingue : FR, EN, hébreu RTL ; EUR, USD, ILS.
6. Possédé : code, modèles et données appartiennent à l'atelier.

---

## 2. Utilisateurs et parcours

### 2.1 Personas
- **Acheteur de bague de fiançailles** (25–40 ans, mobile, souvent en secret) : veut voir le bijou sous tous les angles, comprendre le prix, ne pas se tromper de taille, être rassuré sur les pierres (certificat, naturel/laboratoire), payer en plusieurs fois, livraison discrète.
- **Couple pour alliances** : compare profils, largeurs, finitions, gravure ; veut deux bagues assorties et un prix global.
- **Client fidèle / cadeau** : adapte un modèle existant (pierre de couleur, métal), veut un rendu partageable.
- **Vendeur en boutique** : montre le configurateur sur tablette, enregistre une configuration au nom d'un client, édite un devis.
- **Atelier / administrateur** : reçoit les demandes, répond, ajuste le prix, valide la CAO, suit la production, publie de nouveaux modèles.
- **Prestataire CAO** : prépare les fichiers Rhino selon les règles du pipeline.

### 2.2 Parcours client cible
1. Découverte (page catalogue indexée, réseau social, boutique) → page modèle.
2. Configuration 3D : composition, métal, pierre (forme, poids, qualité, origine, certificat), taille, gravure, options.
3. Prix indicatif décomposé affiché en direct, avec date du cours du métal et statut.
4. Vérification de taille : conversion, bague à l'échelle sur écran calibré, baguier imprimable, « je ne connais pas la taille » (mode surprise + remise à taille garantie).
5. Essayage sur photo de la main (phase 7).
6. Sauvegarde / lien de partage / PDF.
7. Demande de devis (coordonnées, message, photos de référence) ou commande directe si le modèle est « prix calculé ».
8. Espace client : échanges avec l'atelier, modifications, rendu final, acompte, suivi production (CAO validée → cire/résine → fonte → sertissage → polissage → contrôle → expédition), certificats, facture.

### 2.3 Parcours atelier cible
Nouvelle demande → qualification → ajustement du prix (ou acceptation du calcul) → envoi du devis → acompte → validation CAO/rendu avec le client → fabrication par étapes → expédition → clôture. Publication d'un modèle : recette → extraction → définition → validation (`workshopValidated`) → mise en ligne.

---

## 3. Périmètre fonctionnel

Priorité : **P1** indispensable à la mise en ligne commerciale · **P2** après mise en ligne · **P3** différencié, selon données.

### 3.1 Catalogue et modèles
| Réf. | Exigence | Priorité |
|---|---|---|
| CAT-1 | Page catalogue par catégorie (fiançailles, alliances, puis bracelets, pendentifs, boucles) avec image pré-rendue par modèle. | P1 |
| CAT-2 | Page modèle statique par langue (`/fr/bague/<slug>`, `/en/ring/<slug>`, `/he/טבעת/<slug>`) avec configurateur intégré, textes éditoriaux, données structurées `Product`/`Offer`, image Open Graph pré-rendue. | P1 |
| CAT-3 | Pages statiques indexables par variante principale (modèle × métal × forme de pierre), avec image pré-rendue, liens canoniques. | P2 |
| CAT-4 | Recherche et filtres (catégorie, métal, forme, budget). | P2 |
| CAT-5 | Un minimum de **4 bagues** publiées au lancement, dont une avec au moins deux têtes de pierre. Designs de référence : catalogue **DD Diamond** (dd-diamond.com), sous réserve d'un droit d'usage écrit. Fichiers 3D : CAO de DD Diamond / de ses ateliers en priorité, sinon CGTrader (PIP-7) ou modélisation ; tout est validé par l'atelier. | P1 |

### 3.2 Configurateur 3D
| Réf. | Exigence | Priorité |
|---|---|---|
| CFG-1 | Conserver l'existant [V] : rotation/zoom souris et tactile, 4 vues, réinitialisation, chargement, erreur avec « Réessayer », repli sans WebGL, rendu à la demande, repli qualité basse. | P1 |
| CFG-2 | **Composants ancrés** : têtes de pierre, corps, galeries déclarés comme pièces avec point d'ancrage ; seules les combinaisons déclarées fabricables sont proposées ; validation automatique de l'alignement (tolérance < 0,05 mm) au build. | P1 |
| CFG-3 | Formes de pierre : chaque forme proposée correspond à une tête réellement modélisée ; les autres restent « indisponibles » avec raison [V, règle existante]. | P1 |
| CFG-4 | Pierre : forme, dimensions/poids, couleur, pureté, certificat (GIA/IGI/HRD, numéro). **Origine en trois catégories distinctes : naturelle / synthétique / imitation** (réponse atelier du 22/10). Libellés légaux par pays : en français « synthétique » obligatoire, « de laboratoire » / « de culture » interdits (décret 2002-65, voir `REPONSES_ATELIER.md`). Diamants : naturel, synthétique, de couleur (noir, rose, bleu, autres) avec mention du traitement. Pierres de couleur : émeraude, saphir, rubis, avec un rendu dédié. | P1 (diamant), P2 (couleur) |
| CFG-5 | Métaux (confirmés par l'atelier le 22/10) : or **14 k et 18 k**, jaune / blanc / rose, et **platine**. Densité et prix distincts par titre. Teintes calibrées sur photos de pièces réelles (CFG-10). | P1 |
| CFG-6 | Finitions (poli, brossé, martelé, sablé) par zone, si le modèle le déclare. | P2 |
| CFG-7 | Gravure intérieure : texte (latin et hébreu), polices, aperçu 3D, limite de caractères selon la circonférence disponible, incluse dans la fiche de fabrication. | P2 |
| CFG-8 | Taille de doigt : saisie en France/US/UK/Israël/mm avec conversion ; affichage « modélisé en 51½, fabriqué à votre taille » ; pas de géométrie paramétrique en temps réel (décision phase 0 maintenue). | P1 |
| CFG-9 | Mode alliances « lui & elle » : deux bagues, options liées ou indépendantes, prix individuel et total. | P2 |
| CFG-10 | **Calibration visuelle** : pour chaque modèle publié, une photo studio de la pièce réelle est stockée ; l'atelier compare rendu/photo avant `workshopValidated` ; le client peut afficher « photo réelle » à côté du rendu quand elle existe. | P1 (atelier), P2 (client) |
| CFG-11 | Bague à l'échelle réelle : affichage 1:1 après calibration de l'écran avec une carte bancaire ; baguier PDF imprimable avec contrôle d'échelle. | P2 |
| CFG-12 | Partage : lien court encodant la configuration ; sauvegarde dans le compte ; export PDF (rendu, options, prix, statut, date). | P1 (lien), P2 (PDF) |
| CFG-13 | Vues : 3/4, dessus, profil, face + **main de référence** (rendu sur main 3D neutre, tailles proportionnelles) pour l'échelle. | P2 |
| CFG-14 | Mode boutique/tablette : plein écran, grands contrôles, enregistrement au nom d'un client, sans distraction, fonctionnement hors ligne pour les modèles déjà chargés. | P2 |
| CFG-15 | Accessibilité : toutes les options utilisables au clavier et par lecteur d'écran ; alternative textuelle au canvas (description de la configuration) ; contrastes AA. | P1 |

### 3.3 Prix
| Réf. | Exigence | Priorité |
|---|---|---|
| PRX-1 | Moteur de prix piloté par données : métal (volume CAO × densité d'alliage du fondeur [A] × cours daté + pertes de fonte %), pierres (grille par forme/poids/qualité/origine ou prix unitaire de stock), façon (forfait par modèle ou heures), sertissage par pierre, options (gravure, finition), marge, arrondi, taxes par pays, devise. | P1 |
| PRX-2 | Trois statuts affichés : **indicatif** (grille), **calculé** (règles complètes validées), **confirmé** (atelier, daté, validité N jours). Le schéma conserve `quote` tant que l'atelier n'a pas fourni les règles [V]. | P1 |
| PRX-3 | Décomposition visible par le client (métal / pierres / façon & sertissage / options / taxes) avec date et source du cours. | P1 |
| PRX-4 | Cours des métaux : source et fréquence à définir [D] ; mise en cache ; prix figé à la date du devis. | P1 |
| PRX-5 | Devises EUR, USD, ILS ; prix d'affichage arrondi, prix de facturation en devise de l'atelier. | P1 |
| PRX-6 | Journal des règles de prix (qui, quand, quelle version) ; chaque devis référence la version de règles utilisée. | P1 |

### 3.4 Devis et commande
| Réf. | Exigence | Priorité |
|---|---|---|
| DEV-1 | Formulaire de devis : configuration jointe automatiquement, coordonnées, pays, message, photos de référence (≤ 5, 10 Mo chacune), taille connue/inconnue, délai souhaité, consentement RGPD. | P1 |
| DEV-2 | Accusé de réception immédiat (e-mail + page), numéro de dossier, délai de réponse annoncé. | P1 |
| DEV-3 | Fil d'échange client ↔ atelier (messages, pièces jointes, propositions de modification avec nouveau rendu). | P1 |
| DEV-4 | Devis formel PDF (configuration, rendu, décomposition, conditions, validité), accepté en ligne par signature simple. | P1 |
| DEV-5 | Paiement : acompte (30–50 % [D]) par carte via prestataire (Stripe ou équivalent [D]), solde avant expédition ; paiement en plusieurs fois selon prestataire ; virement accepté. | P1 (acompte), P2 (plusieurs fois) |
| DEV-6 | Commande directe sans devis pour les modèles en statut « calculé » et sans pierre spécifique [D]. | P2 |
| DEV-7 | Validation de la CAO finale par le client (rendu + éventuellement maquette résine optionnelle, facturée ou offerte [D]) avant lancement de fabrication. | P1 |
| DEV-8 | Suivi de production par étapes avec dates prévues/réelles, notifications e-mail (et WhatsApp/SMS en P2). | P1 |
| DEV-9 | Documents de fin : facture, certificat de la pierre, certificat de l'atelier (métal, poids réel, pierres), conditions de remise à taille. | P1 |

### 3.5 Compte client
| Réf. | Exigence | Priorité |
|---|---|---|
| CPT-1 | Création de compte par lien magique e-mail (sans mot de passe) ; connexion sociale optionnelle [D]. | P1 |
| CPT-2 | Configurations sauvegardées, devis, commandes, documents, adresses. | P1 |
| CPT-3 | Suppression de compte et export des données (RGPD). | P1 |

### 3.6 Back-office atelier
| Réf. | Exigence | Priorité |
|---|---|---|
| BO-1 | Tableau des demandes : statut, ancienneté, valeur, pays, affectation ; alertes de dépassement de délai. | P1 |
| BO-2 | Édition d'un devis : reprise du calcul, surcharge ligne à ligne avec justification, envoi, relance. | P1 |
| BO-3 | Gestion des règles de prix (PRX-1) avec simulation « avant/après » sur tous les modèles publiés. | P1 |
| BO-4 | Gestion des modèles : état du pipeline, écarts mesurés, validation atelier, photo de calibration, publication/dépublication. | P1 |
| BO-5 | Stock de pierres (optionnel) : liste avec certificats, affectation à une commande. | P2 |
| BO-6 | Fiche de fabrication PDF + JSON par commande : configuration, taille, gravure, métal, pierres, références CAO (empreinte SHA-256 du fichier source), STL de référence. | P1 |
| BO-7 | Statistiques : visites configurateur, options choisies, abandons, devis, conversion, délais. | P2 |
| BO-8 | Rôles : administrateur, atelier, vendeur boutique. | P1 |

### 3.7 Essayage et taille (différenciation)
| Réf. | Exigence | Priorité |
|---|---|---|
| ESS-1 | Essayage sur photo : le client téléverse une photo de sa main avec une carte bancaire pour l'échelle ; la configuration est incrustée sur le doigt choisi, orientable ; résultat partageable. | P3 |
| ESS-2 | Essayage AR temps réel : **pas de développement interne** ; évaluation d'une licence (ex. iJewel Try-On, 2 000 $/an marque blanche [V]) uniquement si ESS-1 et les données le justifient. | P3 |
| ESS-3 | Garantie de remise à taille (conditions [D]) affichée dans le configurateur. | P1 |

### 3.8 Contenu, langues, SEO
| Réf. | Exigence | Priorité |
|---|---|---|
| I18N-1 | FR, EN, HE : adresses traduites, `dir="rtl"` testé, polices hébraïques, nombres/devises/dates localisés, hreflang. | P1 (FR/EN), P1 (HE si marché confirmé [D]) |
| I18N-2 | Textes des modèles et des options traduits dans la définition ; pas de traduction automatique en production sans relecture. | P1 |
| SEO-1 | Pages statiques pré-rendues, images OG par configuration principale, sitemap, données structurées, Core Web Vitals verts. | P1 |
| CNT-1 | Pages : accueil, atelier/savoir-faire, guide des tailles, guide des pierres (4C, naturel vs laboratoire), garanties, livraison, CGV, confidentialité, contact, FAQ. | P1 |
| CNT-2 | Blog/journal pour l'acquisition (P2). | P2 |

### 3.9 Pipeline de modèles (évolution)
| Réf. | Exigence | Priorité |
|---|---|---|
| PIP-1 | Prise en charge des variantes issues de fichiers séparés (têtes supplémentaires) avec contrôle d'ancrage [V, prévu TODO]. | P1 |
| PIP-2 | Version « griffes coupées » et autres préparations Rhino documentées [A]. | P1 |
| PIP-3 | Poids réels des pierres et densités d'alliages fournis par l'atelier remplacent les estimations [A]. | P1 |
| PIP-4 | Rendu d'images statiques (packshots) par configuration principale pour catalogue, OG et e-mails, par script (Chromium headless, même scène). | P1 |
| PIP-5 | Certificat de modèle généré : empreinte source, écart max/p99, triangles, date, validateur. | P2 |
| PIP-6 | Budget par modèle en CI : GLB ≤ 400 Ko, écart max ≤ 0,05 mm, appels de dessin ≤ 20 ; échec sinon. | P1 |
| PIP-7 | **Modèles CGTrader** : chaque modèle acheté est tracé (URL de la fiche, vendeur, licence, date, capture de la licence, prix) dans sa recette ; refus au build si la licence n'est pas renseignée. Fiches « digital use only » ou « not for 3D printing » exclues du catalogue vendable. Validation de fabricabilité par l'atelier obligatoire avant `workshopValidated`. | P1 |
| PIP-8 | Protection des modèles tiers : le GLB web est retraité (fusion, simplification, quantification), servi sans lien de téléchargement direct, sans nom de fichier d'origine ; obfuscation/URL signées dès qu'un modèle CGTrader est publié. | P1 |

---

## 4. Exigences non fonctionnelles

### 4.1 Performance (budgets mesurés en CI, mobile émulé CPU ×4, 4G lente)
| Mesure | Budget |
|---|---|
| JavaScript initial de la page modèle (gzip) | ≤ 150 Ko ; 3D chargé à la demande ≤ 250 Ko |
| Modèle 3D | ≤ 400 Ko par modèle, ≤ 150 Ko par variante supplémentaire |
| Premier rendu 3D | ≤ 2 s sur 4G, ≤ 1 s sur Wi-Fi |
| Fluidité en rotation | ≥ 30 ips sur Android milieu de gamme ; repli automatique sinon [V, existant] |
| LCP / INP / CLS | ≤ 2,5 s / ≤ 200 ms / ≤ 0,1 |
| Consommation | rendu à la demande uniquement [V] |

### 4.2 Compatibilité
Chrome, Safari iOS/macOS (2 dernières versions), Firefox, Edge, Samsung Internet. Tests réels obligatoires avant mise en ligne : iPhone récent, iPhone de 4 ans, Android milieu de gamme, ordinateur avec et sans GPU dédié.

### 4.3 Sécurité et données
- Hébergement UE [D], HTTPS, en-têtes de sécurité, limitation de débit sur les formulaires, protection anti-robot sans CAPTCHA visuel intrusif.
- Fichiers CAO originaux jamais exposés ; GLB web uniquement (simplifiés, sans cotes de fabrication) ; option de protection des téléchargements (obfuscation, URL signées) en P2.
- RGPD : registre, consentements, durée de conservation (devis 3 ans, commandes 10 ans [D], photos de clients 1 an), export/suppression, sous-traitants listés.
- Sauvegardes quotidiennes, restauration testée.

### 4.4 Qualité
- Tests unitaires (logique, prix, règles), pipeline (pytest), navigateur (Playwright ordinateur + mobile + RTL), visuels (captures de référence par modèle), performance (budgets), accessibilité (axe).
- Aucune mise en production sans suite verte et validation atelier des modèles concernés.

### 4.5 Exploitation
- Déploiement continu depuis la branche principale vers préversion, promotion manuelle en production.
- Journalisation des erreurs navigateur et serveur ; alerte sur taux d'erreur du configurateur.
- Documentation d'exploitation : ajout d'un modèle, modification des règles de prix, traitement d'un devis.

---

## 5. Architecture cible

### 5.1 Principes
Conserver les trois couches existantes [V] (faits générés / règles atelier / rendu générique) et y ajouter une couche **transactionnelle** séparée.

```
Pipeline CAO (Python + gltf-transform)      →  GLB + geometry.json + asset.json + packshots
Définitions (TypeScript, zod)               →  compositions, composants ancrés, métaux, pierres, textes FR/EN/HE
Moteur de prix (TypeScript pur, testé)      →  entrée : configuration + règles versionnées + cours daté → sortie : décomposition + statut
Site (Next.js, pages statiques)             →  catalogue, pages modèle, configurateur (R3F chargé à la demande), contenu
Services (API Next.js ou fonctions)         →  devis, compte, paiement, documents, notifications
Base + stockage (Postgres + objets)         →  demandes, messages, devis, commandes, règles de prix, fichiers clients
Back-office (même application, rôles)       →  demandes, devis, modèles, règles, statistiques
```

### 5.2 Choix techniques
| Besoin | Choix recommandé | Justification | Statut |
|---|---|---|---|
| Base, auth, stockage, fonctions | Supabase (Postgres, RLS, lien magique, Storage), région UE | déjà envisagé en phase 2, gratuit en développement, SQL possédé, migrable | [D] |
| Paiement | Stripe (acompte, paiement en plusieurs fois selon pays) | standard, Payment Links pour démarrer | [D] |
| E-mails transactionnels | Resend ou Postmark | délivrabilité, gabarits versionnés | [D] |
| Hébergement | Vercel ou équivalent avec région UE ; alternative : conteneur chez un hébergeur UE | Next.js natif ; coût production à valider | [D] |
| Cours des métaux | API de cours (ex. fournisseur du fondeur ou service de cotation) mise à jour quotidienne | prix daté, journalisé | [D] |
| PDF | rendu HTML → PDF côté serveur (Chromium) | mêmes gabarits que le site | — |
| Essayage photo (P3) | traitement côté client (canvas) + détection de main par modèle léger | pas de données biométriques envoyées au serveur | — |

### 5.3 Modèle de données (principal)
- `models` (id, slug, statut, validation atelier, empreinte source, photo de calibration)
- `components` (modèle, type tête/corps/galerie, nœuds GLB, point d'ancrage, compatibilités)
- `stones` (catalogue de spécifications et, en P2, stock avec certificats)
- `pricing_rules` (version, date, auteur, JSON de règles), `metal_quotes` (métal, date, cours, source)
- `configurations` (JSON validé par schéma, lien court, propriétaire éventuel)
- `quote_requests` → `quotes` (versions, statut, validité, décomposition, règles utilisées) → `orders` (étapes de production, paiements, documents)
- `messages`, `attachments`, `profiles`, `roles`, `audit_log`

### 5.4 Règles d'intégrité
- Une configuration n'est acceptée que si elle passe `validateModel()` et les compatibilités de composants.
- Un devis référence toujours une version de règles et un cours daté ; il est immuable une fois envoyé (nouvelle version sinon).
- Un modèle n'est publiable que `workshopValidated` avec photo de calibration et budgets CI respectés.

---

## 6. Plan de réalisation

Les durées sont des estimations **[E]** pour un développeur, hors travail CAO de l'atelier et hors délais de décision. Elles supposent des fichiers du niveau de `Ring.3dm`.

| Phase | Contenu | Durée [E] | Préalables |
|---|---|---|---|
| **3 — Modèles et composants** | PIP-1, PIP-2, PIP-3, PIP-6, CFG-2, CFG-3, CFG-5, CFG-8, CFG-10 (atelier), CFG-12 (lien), CFG-15 ; 4 modèles publiés ; tests appareils réels ; Safari/Firefox | 10–15 j | 3 fichiers `.3dm` supplémentaires, photos studio, densités et poids réels [A] |
| **4 — Devis et atelier** | DEV-1 à DEV-4, DEV-7 à DEV-9 (hors paiement), CPT-1 à CPT-3, BO-1, BO-2, BO-4, BO-6, BO-8 ; base et stockage ; e-mails | 15–20 j | Choix Supabase/hébergeur/e-mail [D], CGV, mentions légales |
| **5 — Prix** | PRX-1 à PRX-6, BO-3, CFG-7 (gravure) | 8–12 j | Règles de prix complètes de l'atelier [A], source de cours [D] |
| **6 — Paiement et mise en ligne** | DEV-5, SEO-1, CAT-1, CAT-2, CNT-1, I18N-1 (FR/EN), PIP-4, exploitation (§4.5) | 8–12 j | Compte Stripe, nom de domaine, textes éditoriaux |
| **7 — Hébreu et marché** | I18N-1 (HE), devises/tailles Israël, CAT-3, CFG-11, CFG-13, DEV-8 notifications étendues, BO-7 | 8–10 j | Décision marché [D], traducteur |
| **8 — Différenciation** | ESS-1, CFG-6, CFG-9, CFG-14, BO-5, DEV-6, PIP-5, CNT-2 | 15–20 j | Données d'usage des phases précédentes |

Total phases 3–6 (mise en ligne commerciale) : **41 à 59 jours de développement** [E]. Ne pas lire comme un engagement avant réception des fichiers et des règles de prix.

---

## 7. Critères d'acceptation (extraits)

- **Modèle** : pour chaque modèle publié, `models:validate` passe, écart max ≤ 0,05 mm, GLB ≤ 400 Ko, photo de calibration jointe, `workshopValidated: true`, capture de référence approuvée par l'atelier.
- **Configurateur** : toute combinaison proposée est fabricable (déclarée par l'atelier) ; toute forme non modélisée est affichée indisponible avec raison ; navigation clavier complète ; premier rendu ≤ 2 s en 4G émulée.
- **Prix** : pour 20 configurations de référence fournies par l'atelier, l'écart entre le prix calculé et le prix établi à la main est ≤ 2 % ; chaque devis affiche date du cours, version des règles, validité.
- **Devis** : une demande déposée sur mobile apparaît dans le back-office en moins de 10 s, le client reçoit un accusé en moins de 2 minutes, le fil d'échange fonctionne dans les deux sens avec pièces jointes.
- **Commande** : acompte encaissé → statut « CAO en validation » ; chaque changement d'étape notifie le client ; fiche de fabrication PDF/JSON générée et conforme à la configuration.
- **Langues** : les trois langues passent les tests navigateur, y compris RTL (pas de défilement horizontal, ordre logique des panneaux).
- **Données** : export et suppression de compte effectifs en moins de 24 h ; sauvegarde restaurée avec succès lors d'un exercice avant mise en ligne.

---

## 8. Risques

| Risque | Impact | Parade |
|---|---|---|
| Fichiers CAO hétérogènes (pas de maillages de rendu, objets non groupés) | délais ×2 sur la phase 3 | règles de préparation Rhino (MODEL_PIPELINE), audit à réception, chiffrage par fichier |
| **Licence CGTrader** : la licence Royalty Free n'autorise que l'usage « incorporé », interdit de céder le fichier « sous la forme téléchargée ou imprimée en 3D » et impose d'empêcher l'utilisateur final d'accéder au modèle ; la vente de bijoux fabriqués à partir d'un modèle n'est pas explicitement couverte ; certaines fiches sont « usage numérique uniquement » | litige, retrait du catalogue | vérifier chaque fiche (PIP-7), protéger le GLB (PIP-8), **obtenir une confirmation écrite de CGTrader ou du vendeur** pour la fabrication et la vente de bijoux, ou acheter une licence étendue / commander une modélisation exclusive [D] |
| Modèles CGTrader non fabricables (épaisseurs, griffes, sièges, tailles hétérogènes) | rendu ≠ bijou livré | validation atelier, corrections Rhino chiffrées par modèle |
| Modèles CGTrader non exclusifs : d'autres vendeurs proposent les mêmes designs | perte de différenciation | personnaliser par l'atelier, combiner composants, privilégier à terme les créations maison |
| Règles de prix incomplètes ou changeantes | prix faux, perte de confiance | statut « indicatif » tant que non validées ; 20 configurations de référence ; journal des versions |
| Rendu non conforme aux pièces réelles (teintes, pierres) | retours, litiges | calibration photo obligatoire (CFG-10), mention explicite « rendu 3D, non contractuel » tant que non validé |
| Performance sur appareils réels inconnue [V] | abandon mobile | tests réels dès la phase 3, budgets CI, repli qualité basse existant |
| Dépendance à un fournisseur (base, paiement, hébergement) | coût, verrou | SQL standard, exports réguliers, pas de logique métier dans le fournisseur |
| Taille de doigt erronée | retours | CFG-8, CFG-11, ESS-3, conseil humain dans le devis |
| Copie des modèles 3D | fuite de design | GLB simplifiés sans cotes, URL signées (P2), filigrane dans les packshots |
| Scope trop large avant la première vente | retard | mise en ligne commerciale après phase 6 ; phases 7–8 pilotées par les données |

---

## 9. Décisions à prendre par le propriétaire [D]

1. Fournisseurs : base/auth (Supabase ?), paiement (Stripe ?), e-mail, hébergement et région.
2. Montant de l'acompte, conditions de remise à taille, maquette résine (offerte / facturée).
3. Marché hébreu/Israël dès le lancement ou en phase 7.
4. Commande directe sans devis pour certains modèles.
5. Source et fréquence du cours des métaux ; devise de facturation.
6. Durées de conservation des données.
7. Nom de domaine, identité visuelle finale, textes.

## 10. Éléments attendus de l'atelier [A]

1. 3 fichiers `.3dm` supplémentaires (dont une bague à deux têtes), préparés selon MODEL_PIPELINE.
2. Validation de `ring-001` (griffes, forme en « 8 », métaux proposés, teintes).
3. Photos studio de chaque pièce réelle (fond neutre, lumière contrôlée) pour calibration.
4. Densités des alliages du fondeur, pertes de fonte, poids réels des pierres.
5. Règles de prix complètes et 20 configurations de référence avec prix établis à la main.
6. Liste des métaux, finitions, polices de gravure, tailles proposées, délais de fabrication par étape.
7. CGV, garanties, politique de retour et de remise à taille.
