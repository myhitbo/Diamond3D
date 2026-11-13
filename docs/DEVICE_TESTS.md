# Tests sur appareils réels

Tous les tests automatiques tournent en rendu logiciel, sans processeur graphique : ils vérifient le comportement, pas la fluidité ni le rendu réel des métaux et des pierres. Ce protocole sert à mesurer la 3D sur de vrais téléphones. Durée : 15 minutes par appareil.

## Avant de commencer

- **Lien à ouvrir** : le site est privé. Demander à Claude un **lien de partage Vercel** (valable 23 h), ou ouvrir https://jr-diamond.vercel.app en étant connecté au compte Vercel.
- **Appareils**, par ordre de priorité :
  1. iPhone récent (Safari) ;
  2. Android milieu de gamme, 2 à 4 ans d'âge (Chrome) : c'est le cas le plus exigeant ;
  3. iPhone ancien, 4 ans ou plus (Safari), si disponible ;
  4. ordinateur portable (Chrome ou Safari).
- Batterie au-dessus de 30 %, mode économie d'énergie **désactivé** (il bride le processeur graphique), Wi-Fi puis 4G pour le chargement.

## 1. Mesure automatique (2 minutes)

1. Ouvrir la page cachée de diagnostic, en ajoutant `/fr/diagnostic` au lien de partage : `https://…vercel.app/fr/diagnostic?_vercel_share=…` (ou `/he/diagnostic`).
2. Attendre l'affichage du bijou, puis **poser le téléphone sans y toucher** : la mesure fait tourner le bijou pendant 10 secondes.
3. Appuyer sur **Copier le rapport** (ou **Partager** pour l'envoyer directement par WhatsApp), et le transmettre à Claude.

Le rapport contient : modèle de téléphone et navigateur, processeur graphique (quand le navigateur le révèle), temps de téléchargement du modèle, temps jusqu'à la première image, images par seconde pendant la rotation, et niveau de rendu avant et après (le site passe en rendu simplifié sous 24 images par seconde). Il ne contient aucune donnée personnelle.

## 2. Parcours manuel (10 minutes)

Ouvrir `/fr/configurateur/ring-001` sur le lien de partage, puis noter chaque point dans le tableau de résultats.

| # | Action | Ce qu'il faut regarder |
|---|---|---|
| 1 | Première ouverture, en 4G | Temps avant de voir le bijou ; la barre de chargement avance-t-elle ? |
| 2 | Faire tourner le bijou du doigt, lentement puis vite | Fluidité, saccades, retard au doigt |
| 3 | Pincer pour zoomer, puis dézoomer | Le zoom suit-il les doigts ? La page elle-même ne doit pas zoomer. |
| 4 | Vues 3/4, Dessus, Profil, Face | Transitions propres, bijou bien cadré |
| 5 | Changer de métal : jaune, blanc, rose, platine, puis 14 et 18 carats | Les couleurs ressemblent-elles au vrai métal ? |
| 6 | Regarder les diamants de près en tournant | Scintillement, ou pierres grises, blanches, « qui disparaissent » ? |
| 7 | Composition : ensemble, solitaire, alliance | La 3D change-t-elle immédiatement ? |
| 8 | Laisser tourner et manipuler 2 minutes | Le téléphone chauffe-t-il ? La fluidité baisse-t-elle ? |
| 9 | Tourner le téléphone en paysage, puis revenir | Mise en page, rien de coupé |
| 10 | Demander un devis, remplir le formulaire, envoyer | Clavier, champs, photos depuis la galerie. Tant que l'envoi n'est pas branché, le message « indisponible » est normal. |
| 11 | Passer en hébreu (עב), refaire 2, 5 et 10 | Sens droite-à-gauche, textes lisibles, rien qui déborde |
| 12 | Ouvrir la FAQ | Lecture, ouverture des questions |

**Captures utiles** : une capture d'écran de chaque défaut, et une courte vidéo d'écran pour tout problème de fluidité ou de geste.

## 3. Tableau de résultats

Une ligne par appareil. Notes de 1 (inutilisable) à 5 (parfait).

| Appareil (modèle, année) | Navigateur | Rapport envoyé | Chargement 4G (s) | Fluidité | Chauffe | Couleurs des métaux | Diamants | Formulaire | Hébreu | Défauts vus |
|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |

## 4. Ensuite

Coller les rapports et le tableau dans une conversation Claude Code (plan d'exécution, étape 3, deuxième prompt) : Claude classe les défauts par gravité, corrige, ajuste les seuils du rendu simplifié et met `docs/PROTOTYPE_REPORT.md` à jour avec des chiffres vérifiés.

## Pour Yonathan (hébreu)

בדיקה קצרה בטלפון (2 דקות): פתחו את הקישור עם `/he/diagnostic`, חכו שהטבעת תופיע, הניחו את הטלפון בלי לגעת בו 10 שניות, ואז לחצו על „העתקת הדוח” או „שיתוף” ושלחו את הדוח בוואטסאפ. אחר כך: סובבו את הטבעת באצבע, החליפו מתכות, ובדקו אם הצבעים דומים למתכת האמיתית ואם היהלומים נוצצים. צלמו מסך של כל בעיה.

## Ce que les tests automatiques couvrent déjà

| Navigateur | Projet Playwright | Lancement | Limite |
|---|---|---|---|
| Chromium ordinateur et mobile (Pixel 7) | `desktop`, `mobile` | `npm run test:e2e` | WebGL logiciel |
| WebKit, moteur de Safari (iPhone 15, iPad Pro 11) | `iphone`, `ipad` | `npm run test:e2e:browsers` | WebGL logiciel ; gestes tactiles non simulés (propres à Chromium) |
| Firefox ordinateur | `firefox` | `npm run test:e2e:browsers` | Parcours sans 3D seulement (FAQ, devis, repli sans WebGL) : le Firefox sans écran de l'environnement de test n'a pas de WebGL |

L'intégration continue (GitHub Actions) rejoue `desktop`, `mobile` et `iphone` à chaque push sur `main`.
