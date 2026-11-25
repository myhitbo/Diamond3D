# Rapport du prototype technique — phase 2

Date : 20 octobre 2026. Modèle pilote : `Ring.3dm` (Rhino 5, ensemble de deux bagues).

Légende : **[V]** vérifié par un test ou une mesure exécutés · **[E]** estimation · **[T]** reste à tester.

![Prototype sur ordinateur](images/prototype-ordinateur.png)

## A. Prototype

- Route : `/fr/configurateur/ring-001` et `/en/configurateur/ring-001` ; la racine redirige vers la version française. Pages non indexées (`noindex`) tant que le site n'est pas validé.
- Fonctions :
  - rotation et zoom (souris, molette, un doigt pour tourner, deux doigts pour zoomer) ;
  - 4 vues prédéfinies (3/4, dessus, profil, face) et réinitialisation ;
  - indicateur de chargement, message d'erreur avec bouton « Réessayer », message si WebGL est indisponible.
- Options, toutes réelles :
  - **Composition** (ensemble, solitaire, alliance) : change réellement les pièces 3D affichées ;
  - **Métal** (4 teintes) : change uniquement le matériau, et l'interface ne prétend pas autre chose ;
  - **Pierre centrale** : la seule variante présente dans le fichier (marquise 6,0 × 3,0 mm). Les autres formes sont listées comme indisponibles, avec leur raison ;
  - **Origine du diamant** : présentée comme sans effet visuel ;
  - **Taille** : affichée telle que modélisée (51½ France, Ø 16,39 mm).
- Récapitulatif : prix « Sur devis », sans aucun montant. Poids de métal **estimé** (volume CAO × densité nominale publiée) et carats **estimés**, tous deux étiquetés comme estimations.
- Le bouton « Demander un devis » ouvre désormais le formulaire de la phase 4 (version légère, envoi par e-mail ; voir le README).

## B. Modèle web

| | Fichier CAO | GLB web |
|---|---|---|
| Taille | 8,6 Mo (.3dm) | **191 Ko** (195 676 octets) [V] |
| Triangles | 147 318 (maillages de rendu Rhino) | **27 720** [V] |
| Écart géométrique max | — | **0,021 mm** (99e centile ≤ 0,013 mm) [V] |
| Nœuds | 236 objets | 8 pièces nommées, 9 appels de dessin [V] |

- Séparation [V] : bague A (solitaire, 25 objets, 7 pierres) et bague B (alliance, 44 objets, 10 pierres). Toutes les affectations sont contrôlées. Chaque bague correspond à sa coque du STL à 0,002 mm près.
- Pierres extraites [V] :
  - marquise 6,0 × 3,0 × 1,69 mm ;
  - 6 rondes de 1,4 mm ;
  - 10 rondes dégradées de 1,3, 1,5, 1,7, 2,0 et 2,3 mm.
- Volumes de métal (STL) [V] : A 153,48 mm³, B 135,40 mm³.

## C. Mesures de performances

Mesures du 20 octobre 2026. Environnement : Chromium sans GPU, rendu WebGL **logiciel** (SwiftShader), serveur de production local.

| Mesure | Ordinateur 1440×900 | Mobile émulé (Pixel 7 / iPhone 13) |
|---|---|---|
| Initialisation du configurateur → première image 3D | 0,78 à 0,94 s [V] | 0,70 à 0,85 s [V] |
| Appels de dessin / triangles | 9 / 27 722 [V] | 9 / 27 722 [V] |
| Densité de pixels du rendu | 1 | 2 (plafonnée) |
| JavaScript 3D (chargé à la demande, gzip) | 217 Ko [V] | idem |
| JavaScript total de l'application (gzip, tous fragments) | 528 Ko [V] | idem |
| Modèle 3D | 191 Ko (135 Ko si le serveur le compresse en gzip) [V] | idem |

### Campagne complète du 15 novembre 2026

Interrompue deux fois en octobre, la campagne `scripts/perf/measure.mjs` a été relancée le 15/11. Elle est allée au bout : 3 scénarios × 3 passes, aucun échec, 1 min 25 s.

**Conditions**
- Build de production du commit `ab30e41`, servi en local par `next start` (sans CDN), cache du navigateur désactivé.
- Chromium 153 sans écran, rendu WebGL **logiciel** (SwiftShader, sans GPU).
- Machine virtuelle à **4 processeurs** (Xeon 2,3 GHz), sans autre charge pendant la mesure.
- Valeurs médianes de 3 passes. Fichier brut : `perf/2026-11-15_measure.json`, avec le détail de chaque passe dans `raw`.

**Scénarios**
- **Ordinateur** : fenêtre 1440×900, densité 1, sans ralentissement.
- **Mobile, rendu complet** :
  - profil Pixel 7 de Playwright (412×839, densité 2,625, plafonnée à 2 par le rendu) ;
  - processeur ralenti ×4 ;
  - réseau « 4G lente » (profil de Lighthouse : 150 ms de latence, 1,6 Mbit/s).
- **Mobile, rendu simplifié** : mêmes réglages, avec `?quality=low` (pierres en miroir à facettes, densité 1,25).

| Mesure (médiane de 3 passes) [V] | Ordinateur | Mobile, rendu complet | Mobile, rendu simplifié |
|---|---|---|---|
| Premier affichage (FCP) | 0,24 s | 0,68 s | 0,74 s |
| `DOMContentLoaded` | 0,06 s | 0,46 s | 0,49 s |
| Début du téléchargement du modèle 3D | 0,69 s | 4,98 s | 5,22 s |
| Durée du téléchargement du modèle 3D | 0,01 s | 0,82 s | 0,81 s |
| **Première image 3D**, depuis la navigation | **2,2 s** | **6,5 s** | **6,7 s** |
| Initialisation du configurateur → première image 3D | 2,05 s | 3,6 s | 3,9 s |
| **Images par seconde en rotation** (plancher logiciel) | **3,1** | **2,4** | **11,3** |
| Intervalle entre deux images, 95e centile | 667 ms | 550 ms | 167 ms |
| Densité de pixels du rendu | 1 | 2 | 1,25 |
| Appels de dessin / triangles | 9 / 27 359 | 9 / 27 359 | 9 / 27 359 |
| Qualité à la fin des 3 s de rotation | complète (3 passes sur 3) | complète (3 sur 3) | simplifiée (3 sur 3) |
| Volume transféré | 828 Ko | 828 Ko | 828 Ko |

**Volume transféré**, le même dans les trois scénarios :
- JavaScript : 520 Ko ;
- modèle 3D : 136 Ko (fichier de 190 Ko, compressé par le serveur local) ;
- polices : 128 Ko ;
- autres : 28 Ko (non détaillé par le script) ;
- CSS : 8,5 Ko ;
- HTML : 7 Ko.

**Lecture**
- Sur « 4G lente », la 3D apparaît vers 6,5 s [V].
  - Le modèle n'est demandé qu'au bout d'environ 5 s [V]. C'est le code 3D qui le demande ; or ce code est chargé à la demande (`next/dynamic`), et il faut d'abord qu'il arrive et s'exécute [E].
  - Suivent 0,8 s de téléchargement du modèle, puis environ 0,7 s de décodage, de compilation et de première image [V].
- Le rendu simplifié ne raccourcit pas le chargement : 6,7 s contre 6,5 s ici, l'inverse lors de la première campagne du jour (6,4 s contre 6,6 s) [V]. Il sert à la fluidité : 4,7 fois plus d'images par seconde que le rendu complet sur le même mobile émulé [V].
- Le basculement automatique vers le rendu simplifié (sous 24 images/s) ne s'est déclenché pendant aucune des 3 s de rotation [V]. Les chiffres du rendu complet sont donc bien ceux du rendu complet.
- Piste, non faite [E] : demander le modèle plus tôt, en préchargement. Avant la 5e seconde, le réseau n'est pas occupé en continu : au plus 690 Ko (tout sauf le modèle) arrivent avant, soit environ 3,4 s de transfert au débit émulé. Une partie des 0,8 s de téléchargement du modèle pourrait donc être gagnée.
- Autre piste [E] : les polices (128 Ko) pèsent presque autant que le modèle.

**Limites**
- **Images par seconde** :
  - c'est un **plancher pessimiste**, pas une mesure d'appareil réel : rendu logiciel SwiftShader sans GPU, sur 4 processeurs ;
  - le rapport entre rendu complet et rendu simplifié est plus parlant que les valeurs elles-mêmes ;
  - les valeurs varient d'une campagne à l'autre : sur ordinateur, 1,7 à 1,9 images/s lors de la première campagne du jour (passes retenues), 2,1 à 3,4 ici.
- **Processeur** : le ralentissement ×4 demandé à Chromium vaut environ ×2,6 sur une boucle de calcul (contrôle ponctuel) [V]. Il ne reproduit ni la mémoire, ni le GPU, ni la chauffe d'un vrai téléphone.
- **Réseau** :
  - il est émulé par Chromium, requête par requête, avec un serveur local ;
  - le temps de réponse du serveur, 5 à 10 ms, ne contient pas la latence émulée : Chromium retarde la livraison de la réponse, pas cet horodatage. La latence se retrouve dans les temps suivants [V] ;
  - la production sur Vercel n'est pas mesurée ici : Speed Insights le fera après de vraies visites.
- **Première campagne du même jour** (`perf/2026-11-15_measure-premiere-campagne.json`) :
  - mêmes ordres de grandeur sur mobile : première image 3D de 6,3 à 6,7 s, 2,2 à 2,4 images/s en rendu complet, 10,9 à 12,2 en rendu simplifié ;
  - sur ordinateur, passes retenues : première image 3D de 1,3 à 1,8 s ;
  - sa troisième passe sur ordinateur n'est pas retenue : elle a tourné pendant une vérification du code (4,3 images/s, 5 appels de dessin relevés au lieu de 9). Le tableau vient donc de la seconde campagne, faite sans autre charge.
- **Comparaison avec le 20/10** : le tableau du 20/10 donne 0,78 à 0,94 s de l'initialisation du configurateur à la première image 3D sur ordinateur ; le 15/11, sur les 5 passes retenues des deux campagnes, 1,0 à 2,1 s. Cause non établie : la page a beaucoup changé depuis, et le rendu logiciel varie fortement d'une passe à l'autre.
- **Lecture du fichier brut** : `model3dReadyMs` est l'instant où le script voit la 3D prête. Sur mobile ralenti, il dépasse d'environ 1 s la première image réelle (`firstFrameAtMs`, utilisée dans le tableau), à cause du délai de scrutation du script.

**Pourquoi les campagnes d'octobre s'étaient interrompues**
- Établi le 15/11 sur l'ancien `serve-and-run.sh` [V] :
  - si le port 3100 était tenu par un serveur qui ne répondait plus, l'attente du serveur se figeait sans fin (requête sans délai) ;
  - s'il était tenu par un ancien `next-server`, la mesure partait sans prévenir sur l'ancien serveur, donc peut-être sur un ancien build, et le nouveau serveur échouait en silence (journal jeté) ;
  - un arrêt du script (SIGTERM) laissait tourner la mesure et son Chromium ; un arrêt forcé (SIGKILL) laissait aussi le serveur et le port occupé ;
  - `measure.mjs` n'affichait rien avant la fin d'un scénario et n'écrivait son fichier qu'à la toute fin : une interruption perdait tout.
- Cause probable [E] : une campagne lancée dans une commande à délai limité (2 min par défaut), puis arrêtée à ce délai. Le même rapport signale aussi une suite navigateur interrompue (D). Aucun journal d'octobre n'est conservé dans le dépôt : ce n'est pas vérifiable.
- Corrigé le 15/11 :
  - `serve-and-run.sh` refuse un port occupé, attend le serveur 60 s au plus, garde son journal et arrête serveur et mesure à la sortie, y compris sur signal ;
  - la mesure affiche sa progression passe par passe et réécrit le fichier après chaque passe ;
  - chaque passe est bornée à 4 min et refaite en cas d'échec.
- Les grandeurs mesurées n'ont pas changé. Champs ajoutés : `firstFrameAtMs`, la qualité de rendu avant et après la rotation, les appels de dessin après la rotation, le total transféré et le détail de chaque passe.

**À faire sur appareils réels** [T] : iPhone (Safari), Android milieu de gamme, et un ordinateur avec GPU. Les mesures logicielles ne disent rien de la fluidité sur GPU réel.

## D. Résultats des tests (exécutés)

| Suite | Résultat |
|---|---|
| TypeScript (`tsc --noEmit`), ESLint | 0 erreur [V] |
| Unitaires, Vitest (logique, règles, validation, refus de prix) | **15/15** [V] |
| Validateur `models:validate` (définition ↔ GLB réel) | OK [V] |
| Pipeline, pytest (original inchangé, 2 bagues, 17 pierres, taille, nœuds, recette incomplète refusée) | **6/6** [V] |
| Navigateur, Playwright, ordinateur + mobile émulé | **28/28** [V], détail ci-dessous |

Détail des tests navigateur :
- **Suite complète** : chargement sans erreur console ; le métal change le matériau et non la géométrie ; la composition change les pièces ; « Sur devis » sans aucun montant ; formes indisponibles signalées ; réinitialisation ; vues ; anglais ; erreur de chargement puis « Réessayer » ; absence de défilement horizontal ; 404 ; sans WebGL ; glisser pour tourner (souris et toucher) ; zoom (molette et pincement à deux doigts, distance caméra vérifiée).
- **Après le dernier changement** (sonde de débogage déplacée dans un module pour satisfaire ESLint) : seuls 3 tests × 2 profils ont été rejoués (chargement, métal, composition), tous réussis. Le passage complet suivant a été interrompu ; il est à relancer avec `npm run test:e2e`.

Les tests navigateur vérifient l'état réel de la scène (nœuds rendus, couleur du matériau, distance de la caméra) et pas seulement l'interface.

## E. Limites techniques

**Modèle CAO**
1. **Griffes non recoupées** : ce sont des tiges droites, comme dans le fichier de fonte. *Correction du 3/11/2026 : mesuré sur le modèle, leur bout dépasse la table des pierres de 0,25 à 0,5 mm, et non d'environ 4 mm comme écrit initialement ; c'est leur forme droite qui fait « pas fini ».* Retouche web faite le 3/11 (griffes rabattues sur la couronne), voir `MODEL_PIPELINE.md`.
2. **Une seule pierre centrale** : la tête est propre à la marquise (deux griffes de pointe). Aucune autre forme ne peut être proposée sans une tête modélisée.
3. **Taille de doigt** : seule la 51½ est modélisée. Les autres tailles changeraient la géométrie de l'anneau ; elles restent à la charge de l'atelier.
4. Une forme en « 8 » est visible à l'extrémité gauche de l'alliance (sièges de pierres). Elle provient du fichier ; à vérifier dans Rhino.
5. Les solides de métal ne sont pas fusionnés (69 pièces qui se chevauchent). C'est invisible à l'écran, mais à garder en tête pour toute exploitation de fabrication.

**Rendu**

6. Les couleurs de métal sont des approximations, non calibrées sur des photos réelles.
7. Les diamants sont rendus par lancer de rayons simplifié (3 rebonds, studio procédural). L'effet est crédible, mais ce n'est pas une simulation gemmologique. Le coût sur les téléphones modestes est inconnu ; un repli automatique vers un rendu simple existe.
8. Testé seulement sous Chromium. Safari (iOS, macOS) et Firefox n'ont pas été testés.

**Données**

9. **Poids estimé** : la densité de l'or jaune est recoupée par trois sources. Celles de l'or blanc, de l'or rose et du platine viennent d'une seule source publiée, et la valeur réelle dépend de l'alliage du fondeur.
10. **Carats estimés par volume** : la marquise ressort à 0,176 ct, alors que les tableaux du commerce annoncent couramment environ 0,25 ct pour 6 × 3 mm (non vérifié). Il faudra les poids réels des pierres.

**Hors périmètre**

11. Pas encore de devis, de base de données, de compte, de prix, ni de déploiement.
12. L'hébreu (RTL) n'est pas testé.
13. L'adresse anglaise reste `/en/configurateur/…` : les adresses traduites sont à faire.

## F. Estimation : trois variantes supplémentaires [E]

Le coût dépend de ce que l'on appelle « variante ».

| Cas | Développement (moi) | Travail CAO (atelier) |
|---|---|---|
| **3 nouvelles bagues**, fichiers Matrix propres comme celui-ci (maillages de rendu présents, calques et groupes cohérents) | 0,5 à 1 jour par bague : inventaire, recette, définition FR/EN, validation visuelle | 0 |
| idem, fichiers à préparer (pas de maillages, objets non groupés, pierres non solides) | + 0,5 à 2 jours par bague, selon l'état | 1 à 3 h par fichier dans Rhino |
| **3 têtes de pierre** pour ring-001 (ex. ronde, ovale, poire), même ancrage | 1 à 2 jours une fois (variantes issues de fichiers séparés, alignement et contrôle d'ancrage), puis environ 0,5 jour par tête | modélisation de chaque tête et de chaque taille : inconnue, à estimer par l'atelier |

Total prévisible pour 3 bagues propres : **2 à 4 jours**, tests et contrôle visuel inclus. Ces durées supposent des fichiers du niveau de celui-ci. Tant que je n'ai pas vu les fichiers, ce n'est pas un engagement.

## G. Recommandation

1. **Tester sur ton téléphone avant tout le reste.** Ce prototype n'a jamais tourné sur un vrai GPU. Une préversion privée et non indexée est nécessaire, mais un déploiement demande ton accord : voir les options dans le compte rendu de session.
2. **Validation de l'atelier sur ce modèle** : longueur des griffes, teintes des métaux comparées à des photos, métaux réellement proposés, forme en « 8 » de l'alliance.
3. **Fournir 3 fichiers .3dm supplémentaires**, idéalement dont une bague avec deux têtes possibles. Cela valide la généralisation du pipeline et le mécanisme de variantes de pierre sur de la vraie géométrie.
4. **Ensuite seulement la phase 4 (devis)**, qui imposera de choisir le stockage des demandes et des photos. Supabase en offre gratuite suffit pour le développement ; les coûts de production restent à valider avec toi.
5. **Ne pas développer** la taille de doigt paramétrique ni la CAO en temps réel : le rapport coût/bénéfice reste défavorable, comme établi en phase 0.
