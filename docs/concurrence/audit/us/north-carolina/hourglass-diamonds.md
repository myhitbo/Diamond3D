# Audit : Hourglass Diamonds (Charlotte, Caroline du Nord)

- **Site** : Hourglass Diamonds, https://www.hourglassdiamonds.com/ (page de départ : https://www.hourglassdiamonds.com/ring-studio/ring-studio-embed.html)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright)
- **Statut** : **complet** pour ce que le site propose (visionneuse de bagues, simulateur de taille, concierge). Le site n'a ni prix, ni panier, ni vente en ligne : le parcours « jusqu'au panier » n'existe pas.
- **robots.txt** : lu ; toutes les pages ouvertes sont AUTORISÉES (interdits : `/api/`, `/executive-dashboard/`, `/calibration-library/`, `/diamond-shape-studio/capture/`). Formulaire du concierge non rempli ; « Capture with phone » du simulateur sur la main non cliqué (envoie vers `/capture/`, interdit).
- **Convention** : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | État |
|---|---|---|
| 1. Ring Studio (page de départ, intégrable) | 15 designs x 3 métaux x 2 modes (Motion / Still views) ; 4 angles en mode photo [V] | Fonctionne |
| 2. Engagement Rings `/engagement-rings` | Texte, lien vers Ring Studio, consultation privée [V] | Fonctionne |
| 3. Diamond Studio `/diamond-studio` | Taille de doigt, teint, métal et largeur de bague, carat, forme (9), orientation N/S ou E/W [V] | Fonctionne |
| 4. See It On Your Hand `/diamond-shape-studio` | Téléversement de la main ; bouton « Capture with phone » [V] | Non testé (photo personnelle, route interdite) |
| 5. Concierge `/concierge` | Formulaire en 6 questions (voir plus bas) [V] | Lu, non envoyé |
| 6. Panier / paiement | Aucun [V] | Absent |

## Contrôles vérifiés

### Ring Studio (22 contrôles sur ordinateur, les mêmes sur iPhone)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| HOURGLASS DIAMONDS | Lien | Retour à l'accueil [V] | – | OK |
| ← Back | Bouton | Présent [V] ; non cliqué | – | Non testé : sans enjeu |
| MOTION | Bouton à bascule (mode) | Vidéo `motion.mp4` en boucle de la bague, 835x397 px [V] | Aucun prix | Fonctionne |
| STILL VIEWS | Bouton à bascule (mode) | Remplace la vidéo par une photo `pv.png` ; fait apparaître 4 angles (Profile, Angled, Side, Top) [V] | Aucun | Fonctionne |
| Profile / Angled / Side / Top (mode photo) | 4 boutons | Changent l'image (`pv.png`, `fv.png`, `rv.png`, `tv.png`) [V] | Aucun | Fonctionnent |
| ROSE GOLD / WHITE METAL / YELLOW GOLD | 3 boutons | Rechargent la vidéo ou l'image du dossier du métal correspondant (`rose-gold`, `white-metal`, `yellow-gold`) [V]. Ce sont des rendus pré-faits, pas une teinte appliquée à un modèle 3D [I] | Aucun | Fonctionnent |
| 15 boutons de design | Boutons radio | Chacun charge sa vidéo ou ses photos ; le titre et le texte de gauche changent (« Signature direction ») [V] | Aucun | Fonctionnent, aucune erreur réseau ni console |

Les 15 designs [V] : Oval Bezel Pavé, Emerald Bezel Solitaire, Emerald Cut Band, Oval with Baguettes, Oval Bezel Halo Pavé, Oval Hidden Halo Baguette, Oval Hidden Halo Twist, Oval Three Stone Half-Moon, Oval Three Stone Pavé, Round Halo Cathedral, Round Hidden Accent Solitaire, Round Hidden Halo Pavé, Round Hidden Halo Three-Row Pavé, Round and Oval, Round Solitaire. Le dossier de « Round and Oval » s'appelle `round-marquise-band` [V] : écart de libellé entre bouton et fichier [I].

### Diamond Studio (simulateur de taille)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Ring size ‹ › (de 4 à 13) | Boutons | Passe de 6,0 à 6,5 : largeur de doigt 16,5 mm puis 16,9 mm, présence 53 % puis 67 % (mesures sur la forme émeraude) [V] | – | Fonctionne |
| Skin tone, Band metal, Band width (2 à 5 mm) | Réglages | Présents [V], non actionnés un à un | – | Non testé en détail |
| Diamond weight ‹ › (1 à 10 ct, pas de 0,25) | Boutons | Présent, départ à 2,50 ct [V] | – | Présent |
| Round, Oval, Cushion, Princess, Marquise, Pear, Emerald, Radiant, Asscher | 9 boutons | Texte mis à jour : à 2,5 ct, largeur visible ronde 8,8 mm, ovale 7,5 mm, poire 7,1 mm, émeraude 8,1 mm [V] | – | Fonctionnent |
| N/S / E/W | Bascule d'orientation | Émeraude 2,5 ct : largeur 8,1 mm passe à 11,3 mm, présence 49 % à 69 % [V] | – | Fonctionne |
| i (3 boutons) | Info-bulles | Présents [V], non ouverts | – | Non testé |
| Share this view | Bouton | Bouton « Copy Studio link » apparaît [V] ; copie dans le presse-papiers non vérifiée | – | Fonctionne (affichage) |

### Concierge, accueil, autres

| Libellé | Type | Effet observé | État |
|---|---|---|---|
| Question 1 : Engagement ring, Custom jewelry, Wedding band, Still exploring | 4 boutons | Présents [V] | Non envoyé |
| Question 2 : forme (7 formes + Not sure yet) | 8 boutons | Présents [V] | Non envoyé |
| Questions 3 et 4 : style (Quiet elegance, Modern minimal, Classic timeless, Bold presence, Still discovering) puis présence (Understated, Balanced, Statement, Still exploring) | 9 boutons | Présents [V] | Non envoyé |
| Question 5 : délai (0-2 mois, 3-4 mois, 6+ mois, Flexible) | 4 boutons | Présents [V] | Non envoyé |
| Question 6 : budget (Under 10K, 10-20K, 20-30K, 30-50K, 50K+, Prefer to discuss) | 6 boutons | Présents [V] | Non envoyé |
| Contact préféré (Email, Phone, Text, Any is fine) + « Begin the Conversation » | Boutons + envoi | Présents [V] | Non envoyé (règle) |
| ALLOW / DECLINE ANALYTICS | Bannière de consentement | Présente sur chaque page [V] ; « Decline » cliqué sans effet visible | OK |
| Antique Oval, Sculptural Marquise, Emerald Ring, Dagger & Pearls, Aviary Bloom, Sculpted Diamond Band | 6 liens externes `gembox.app` (accueil) | « Explore in motion », s'ouvrent dans un nouvel onglet [V] | Non suivis (domaine tiers) |
| Analyze Sparkle `/diamond-intelligence` | Lien | Interprétation d'un rapport de gradation PDF d'un rond brillant [V, description de l'accueil] | Non testé (téléversement) |
| Téléphone 980-259-9485, e-mail justin@hourglassdiamonds.com | Liens | Présents [V] | OK |
| 360°, AR sur la main, zoom, comparer, enregistrer, financement, chat, WhatsApp, livraison, essayage à domicile | – | Aucun contrôle de ce type dans la visionneuse [V] ; « sur la main » existe dans le simulateur [V] | Absent (sauf « sur la main ») |

## Options disponibles

- **Designs** : 15 (voir liste) ; formes de pierre figurant dans les noms : ovale, émeraude, ronde, marquise [V].
- **Métaux** : or rose, « white metal » (non précisé : or blanc ou platine ?), or jaune. Aucun titre (14 k, 18 k) affiché dans la visionneuse [V].
- **Vues** : vidéo en boucle, ou 4 photos fixes (Profile, Angled, Side, Top) [V].
- **Carat, origine, pavage, taille de doigt, gravure, filtres pierre** : aucun dans la visionneuse. Le simulateur Diamond Studio gère carat (1 à 10 ct), forme (9), taille de doigt (4 à 13), largeur de bague (2 à 5 mm) [V].
- **Origine** : « Natural and lab-grown diamonds can both be excellent » [V] : choix traité dans la conversation, sans option en ligne.

## Prix, délais, retours, garanties

- **Prix** : aucun prix nulle part ; les conditions disent « pricing, and availability are discussed individually » [V]. Seule indication : budget demandé en tranches dans le concierge (jusqu'à 10 000 / 50 000 et plus ; devise non écrite, USD supposé [S]).
- **Délai** : sur mesure, « approximately four to six weeks after design approval » [V, page custom-design].
- **Retours, garantie, livraison, moyens de paiement** : rien trouvé ; les conditions (`/terms`) tiennent en 4 phrases et n'en parlent pas [V].
- **Certificats** : mention de rapports de gradation lus par un gemmologue ; pas de GIA ou IGI imposé affiché [V].
- **Libellé du synthétique** : « lab-grown » [V].
- **Langues, devises** : anglais ; aucune devise affichée [V].

## Confiance et service

- Fondateur et gemmologue diplômé (« Graduate Gemologist ») Justin Smith, qui lit chaque demande, réponse sous 24 h [V].
- Bureau : 15720 Brixham Hill Ave, Suite 300, Charlotte, NC 28277 ; lun.-ven. 9 h-17 h, consultations sur rendez-vous ; travail à distance dans tout le pays [V]. Pas de salle d'exposition [V].
- Avis : page « Whispered Praise » et citations (« It always felt like I was working with a partner. ») ; pas de note chiffrée [V].
- Preuves de fabrication : un lien « View Video » pour la « pièce finie » et un processus en 4 à 6 étapes (conversation, direction, CAD, atelier, revue) [V] ; pas de suivi de commande vu.
- Guides : Diamond Guide, naturels contre synthétiques, avantages d'un gemmologue indépendant [V].

## Points forts à retenir pour JR Diamond

1. **Vidéo de chaque bague en rotation dans chaque métal** : rendus pré-calculés, prêts en environ 0,5 à 0,6 s sur ordinateur (preuve : `ring-assets/<design>/<métal>/motion.mp4`). Très proche de la promesse « ce que vous voyez existe » ; coût de production à anticiper.
2. **Simulateur de taille de pierre sur le doigt** (Diamond Studio) : carat, forme, taille de doigt, orientation, largeur de bague, avec largeur en mm et « présence » en pourcentage. Répond au besoin « que verrai-je ? » sans prix (preuve : https://www.hourglassdiamonds.com/diamond-studio).
3. **Lien partageable de la vue** (« Share this view / Copy Studio link ») : modèle direct pour le bouton « Partager » de JR Diamond.
4. **Questionnaire de projet en 6 questions** avant contact (type, forme, style, présence, délai, budget) : qualification légère du devis (preuve : https://www.hourglassdiamonds.com/concierge).
5. **Délai de réponse affiché** (« within 24 hours ») et interlocuteur nommé [V].

## Défauts observés

- **Aucun prix, aucun panier, aucune vente en ligne** : le parcours se termine par un formulaire de contact [V].
- **Aucune personnalisation réelle dans la visionneuse** : pas de carat, de titre d'or ni de forme de pierre ; « White metal » ambigu [V].
- Aucune politique de retour, de garantie, de livraison ni de paiement publiée [V].
- Écart de nom : bouton « Round and Oval » alors que le fichier est `round-marquise-band` [V, inféré de l'écart].
- Mode vidéo : les deux vidéos (ancienne et nouvelle) restent chargées en parallèle, 4 médias de 835x397 px en mémoire à chaque instant [V]. Impact non mesuré.
- Visionneuse intégrable (`ring-studio-embed.html`) servie seule, sans navigation, avec simple lien « Back » [V].

## Limites de l'audit

- Diamond Studio : teint, métal de bague, largeur, boutons « i » non actionnés un à un ; poids testé uniquement par défaut.
- `/diamond-shape-studio` (téléversement de main), `/diamond-intelligence` (PDF), formulaire du concierge : non utilisés (règles de l'étude, route de capture interdite).
- Sites tiers `gembox.app` non ouverts.
- Temps d'affichage mesuré une fois par appareil : visuel principal visible à 517 à 645 ms (ordinateur, deux essais), LCP 932 à 1 164 ms ; iPhone : 154 ms, LCP 160 ms (valeurs probablement dues à une mise en cache locale d'un élément d'interface avant la vidéo [S]). Largeur de page iPhone 390 px, sans défilement horizontal [V].

## Sources

- https://www.hourglassdiamonds.com/ring-studio/ring-studio-embed.html (contrôles, 15 designs, 3 métaux, modes)
- https://www.hourglassdiamonds.com/ ; /engagement-rings ; /custom-design ; /concierge ; /diamond-studio ; /diamond-shape-studio ; /terms
- https://www.hourglassdiamonds.com/robots.txt
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/hourglass-diamonds/
