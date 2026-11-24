# Audit : Ellsworth Jewelers (Ellsworth, Maine)

- **Site** : Ellsworth Jewelers (bijoutier de magasin, plateforme Punchmark ; constructeur 3D fourni par « JewelerOS », domaine jeweleros.com)
- **Adresse de départ** : https://www.ellsworthjewelers.com/pages/custom-ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (émulation)
- **Statut** : **partiel**. Les 4 étapes du questionnaire de départ sont vérifiées ; le concepteur 3D final n'a pas chargé (voir « Défauts » et « Limites »). Le panier n'a pas été ouvert (`/cart` est interdit par robots.txt, vérifié).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Le « Custom Ring Builder » est un assistant en 4 étapes qui précède un concepteur 3D (« 3D Ring Designer ») ; le site dit que le détail (carat exact, etc.) se règle dans ce concepteur [V]. Le modèle de vente est « concevoir en ligne, puis venir en magasin choisir la pierre et finaliser » [V : /pages/custom-engagement-rings].

| Étape | Options relevées [V] |
|---|---|
| 1 sur 4 « Let's start designing your ring » | Métal : Yellow Gold, White Gold, Rose Gold (3 pastilles rondes) ; 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » |
| 2 sur 4 « Choose your center stone » | Bascule Natural / Lab Grown ; 9 formes en naturel (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; 9 formes en synthétique (même liste, ordre différent) ; « Decide later » |
| 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks ; 1 - 3 months ; 3 - 6 months ; Not sure yet |
| Final | « Building your dream ring… » puis concepteur 3D (non obtenu, voir limites) |

Navigation : « Back » (retour d'une étape, l'historique des choix s'affiche en haut, ex. « Solitaire / Round / 0.5 carat »), « Skip » (quitte le questionnaire vers le concepteur) [V].

Parcours parallèle (hors constructeur) : « Ring Settings » (/ringsettings) en 3 étapes : 1 Choose Setting, 2 Choose Diamond, 3 Complete Ring ; la fiche d'une monture affiche « CENTER STONE NOT INCLUDED » [V].

## Contrôles vérifiés

Relevé automatique : 157 contrôles visibles sur ordinateur, 55 sur iPhone (page de départ, dont menus). Les contrôles propres au constructeur sont ci-dessous ; la navigation générale (menus, pied de page, 4 liens légaux, réseaux sociaux) est listée en fin de tableau.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille Yellow Gold / White Gold / Rose Gold | bouton rond | Change la couleur des vignettes de styles (images `…_white.webp` pour le blanc) ; choix conservé [V] | aucun prix affiché | fonctionne |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | Passe à l'étape 2, choix ajouté à l'historique [V] | aucun | fonctionne |
| Start from scratch | carte | Passe à l'étape 2, historique « Start from scratch » (pas de style) [V] | aucun | fonctionne |
| Natural / Lab Grown | bascule | Change la couleur des cartes (vert naturel, bleu synthétique) ; liste de 9 formes dans les deux cas [V] | aucun | fonctionne |
| 9 formes de pierre | carte | Étape 3 [V] | aucun | fonctionne |
| Decide later (étape 2 et 3) | carte | Présent ; non actionné [I : saute le choix] | — | non testé (équivalent aux autres cartes) |
| 8 tailles de carat | carte | Étape 4 [V] | aucun | fonctionne |
| 4 délais souhaités | carte | Déclenche l'écran « Building your dream ring… » puis, sur ordinateur, « Something went wrong » + bouton « Try again » [V] | aucun | **échec dans l'environnement d'audit** |
| Back | bouton | Revient à l'étape précédente, historique raccourci [V] | — | fonctionne |
| Skip | bouton | Quitte le questionnaire ; sur iPhone, écran « Building your dream ring… » en cours à +4 s [V] | — | fonctionne (chargement final non terminé) |
| Try again | bouton | Non actionné : relance d'une requête qui avait échoué | — | non testé |
| Close consent popup / Decline all cookies / Accept all cookies | bouton | Bandeau cookies, apparaît à chaque ouverture ; non actionnés (aucun effet utile) | — | non testé |
| « Text us » (bulle de chat) | bouton | Visible à l'étape 2 : « Hi there, have a question? Text us here. » ; conversation non ouverte [V] | — | non testé (règle : pas de chat) |
| Aperçu 3D, 360°, AR, zoom, essayage sur la main | — | Aucun contrôle de ce type dans le questionnaire ; le concepteur n'a pas chargé | — | non testé (concepteur indisponible) |
| Gravure, taille de doigt, griffes, pavage, corps de bague | — | Non présents dans le questionnaire ; supposés dans le concepteur [S] | — | non testé |
| Partager, enregistrer, comparer, guide des tailles, financement | — | Pas dans le constructeur. Financement : page /pages/synchrony-financing (voir plus bas). Liste de souhaits : bouton « Add to Wish List » sur les fiches de montures [V] | — | voir sections suivantes |
| Menus principaux (Engagement, Diamonds, Jewelry, Custom, Services, About), recherche, compte, liste de souhaits, panier (icônes) | liens/boutons | Navigation ; recherche, compte et panier non ouverts (chemins `/cart`, `/login`, `/register` interdits) | — | non testé (robots.txt) |
| Pied de page : Return Policy, Privacy Policy, Terms & Conditions, Accessibility Statement, Facebook, Instagram, YouTube, téléphones (207) 610-1735 et 1 (800) 691-7986, « Make an Appointment » | liens | Liens présents ; Return Policy lue [V] | — | fonctionne (autres non suivis) |

### Contrôles de la page « Ring Settings » (/ringsettings, 336 contrôles relevés)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| All Filters, Newest (tri), Material (7), Gemstone, Ring Setting Styles (7), Price (curseur double 628,92 à 52 320,57 $), Gender | boutons/filtres | Présents ; non actionnés (les tris `?sortSpec=` sont interdits par robots.txt) | filtre prix en $ | non testé (raison indiquée) |
| Vignette de monture : flèches Previous/Next image, « Video 1 of 4 », Quick View, Add to Wish List, Add to Cart | boutons | Galerie de 4 médias avec vidéo ; « Add to Cart » non cliqué (panier interdit par robots.txt) | prix affiché sur la vignette (ex. 1 546 $ à 4 777 $) [V] | « Add to Cart » non testé |
| Load More | bouton | Présent (24 affichés sur 140) ; non actionné | — | non testé |
| Fiche monture : liste « Ring Size » (1,5 à 18 par demi-taille), « Choose this ring », « Schedule a viewing », « My Wish List » | liste/boutons | Présents sur la fiche (/ringsettings-details/…/1) ; non actionnés | pas de prix lisible dans le texte extrait (la grille en affiche) | non testé |

### Page « Diamonds » (/diamonds)

Filtres : Shape (10 formes, dont Heart), Price (min/max), Carat (0,1 à 20), Cut (Fair, Good, Very Good, Excellent), Color (K à D), Clarity (F, IF, VVS1 à I2), « Advanced », recherche par SKU, onglet « Comparison (0) » [V]. Résultat observé : « 0 diamonds found » avec les filtres par défaut [V], cause inconnue (stock vide ou chargement échoué) [S]. Pas de filtre d'origine naturel/synthétique ni de certificat visible dans les filtres affichés [V].

## Options disponibles

- Métaux du constructeur : or jaune, or blanc, or rose (pas de titre 14/18 k ni de platine à l'écran du questionnaire) [V]. Les montures du catalogue sont en 10 k (« 10K White Gold… ») [V].
- Styles : 8 (liste ci-dessus) + « from scratch » [V].
- Pierre centrale : naturel ou synthétique (« Lab Grown ») ; 9 formes ; 8 tailles de 0,5 à 5 ct [V].
- Délai souhaité : 4 plages [V].
- Montures du catalogue : tailles de doigt 1,5 à 18 (hors 15, absent de la liste) [V].
- Pas de choix de gravure, de largeur de corps, de griffes ou de pavé dans le questionnaire [V] ; dans le concepteur : non vérifié.

## Prix, délais, retours, garanties

- **Prix dans le constructeur** : aucun prix à aucune des 4 étapes [V]. Prix du concepteur final : non vu [S].
- **Prix du catalogue** : affiché par vignette, en $ (ex. 1 546 $ à 4 777 $ sur la première page de montures sans pierre) [V : /ringsettings]. Pas de décomposition monture / pierre / main-d'œuvre vue ; le texte « Center stone not included » signale que la pierre se paie en plus [V].
- **Délai** : « Ships in 7-10 Business Days » sur les montures [V] ; sur mesure : « we'll finish it in just a couple of weeks » après choix de la pierre [V : /pages/custom-engagement-rings]. Le questionnaire demande le délai souhaité (jusqu'à 3-6 mois) mais n'annonce pas de délai en retour [V].
- **Retours** : 14 jours après réception, articles non portés, emballage d'origine ; retour par la poste aux frais du client ; remboursement 7 à 10 jours ouvrés ; **pièces personnalisées ou sur mesure non retournables**, ni échangeables ; échange de pièce défectueuse sous 30 jours ; **pierres, diamants compris, vendus « as-is »** [V : /return-policy].
- **Financement** : Synchrony, 0 % différé jusqu'à 18 mois ; simulateur mensuel : 6 et 12 mois sans intérêt, 24 à 60 mois à 9,99 % [V : /pages/synchrony-financing]. Le simulateur n'a pas été actionné.
- **Garanties, assurance** : page « Jewelry Insurance » et services d'entretien listés ; contenu non lu [I].
- **Livraison, paiement du panier** : non vus (panier interdit) [S].
- **Certificats** : non vus dans le constructeur ; filtres de diamants sans certificat [V].
- **Libellé du synthétique** : « Lab Grown » [V].
- **Langues, devises** : anglais, dollar américain [V].

## Confiance et service

- Boutique physique : 126 Downeast Highway, Ellsworth ME ; horaires mer-ven 9 h 30-16 h, sam 9 h 30-14 h, fermé dim-mar [V : pied de page]. Téléphones (207) 610-1735 et 1 (800) 691-7986 [V].
- Rendez-vous : page « Make an Appointment », bouton « Schedule a viewing » sur les fiches [V : liens].
- Chat par SMS « Text us » en bulle flottante [V].
- Avis : citations Google Review sur la page /pages/custom-engagement-rings (2 avis de 5 étoiles, prénoms seuls) ; pas de note globale chiffrée vue [V].
- Argumentaire : 13 ans d'activité, « ethically sourced Antwerp diamonds », tourmaline du Maine [V].
- Preuves de fabrication : page « Custom Jewelry » annonce 3 étapes (esquisse, rendu CAO 3D, sertissage et finitions) et une galerie de réalisations ; pas de suivi de commande ni de vidéo de fabrication observé [V].
- Nombreux traceurs publicitaires et analytiques chargés dès l'arrivée (Google Ads, AdRoll, Outbrain, Klaviyo) [V : requêtes réseau].

## Points forts à retenir pour JR Diamond

1. **Questionnaire d'entrée en 4 étapes, sans compte** : métal, style, forme, carat, puis délai souhaité ; chaque étape dit « Step n of 4 » et affiche l'historique des choix avec « Back » (preuve : parcours actionné sur ordinateur et iPhone). Réduit la page blanche du concepteur.
2. **Choix naturel / synthétique dès l'étape de la pierre**, avec code couleur (vert / bleu) (preuve : bascule étape 2).
3. **« Decide later » sur la pierre et le carat** : n'oblige pas à trancher (preuve : cartes présentes aux étapes 2 et 3).
4. **Demande de délai souhaité** : les clients indiquent leur échéance (preuve : étape 4). JR Diamond promet 14 jours ouvrés, donc peut le montrer.
5. **Parcours « monture puis diamant puis bague complète »** en 3 étapes numérotées (preuve : /ringsettings).
6. **Vidéo dans la galerie de chaque monture** (« Video 1 of 4 ») (preuve : contrôles relevés).
7. **Simulateur de mensualités** par durée avec taux affichés (preuve : /pages/synchrony-financing).
8. **Politique de retour lisible** avec l'exception du sur mesure écrite noir sur blanc (preuve : /return-policy).

## Défauts observés

- **Concepteur 3D final non obtenu** : après le dernier clic (et après « Skip »), l'écran reste sur « Building your dream ring… » ou affiche « Something went wrong » + « Try again » (ordinateur, après 9 s). La console signale des requêtes vers jeweleros.com bloquées (politique CORS : `/api/config/…`, `/api/widget/config/…`, `/api/create/from-ring-config/`) [V]. Cause probable : limites de l'environnement d'audit (réseau filtré) [I] ; non démontré que le site échoue chez un vrai client.
- Aucun prix dans le constructeur ; modèle « vous revenez en magasin pour la pierre » [V].
- Pas de choix de titre d'or (14/18 k) ni de platine dans le questionnaire ; montures du catalogue en 10 k seulement sur la page lue [V].
- Bandeau de cookies qui recouvre la dernière carte (« Decide later ») sur ordinateur et iPhone [V : captures].
- Page diamants : « 0 diamonds found » par défaut [V].
- Temps d'apparition de la première étape du questionnaire : ordinateur 4,5 à 5,3 s ; iPhone 4,1 s (le titre « Ring Builder is Loading… » s'affiche avant) [V : trois mesures].
- Retour : diamants « sold as-is », sur mesure non retournable [V].
- Étapes du questionnaire : le choix de métal de l'étape 1 n'est pas rappelé dans l'historique (seul le style apparaît) [V].

## Limites de l'audit

- Concepteur 3D non chargé : tout ce qui concerne vue 3D, rotation, zoom, AR, gravure, taille de doigt, prix final, bouton d'envoi / demande de devis, partage et enregistrement est **non vérifié**.
- Panier, compte, recherche et tris non ouverts (interdits par robots.txt) ; « Add to Cart » non cliqué ; frais de livraison, moyens de paiement et récapitulatif non vus.
- Aucun chat, formulaire ou rendez-vous ouvert (règle). Les listes de filtres de la page Ring Settings n'ont pas été dépliées ; la page /diamonds n'a rien affiché.
- Mesures de temps : 3 mesures, réseau d'audit via proxy, valeurs indicatives.
- Pas de contrôle de page de produit complète (prix de fiche non lu dans le texte).

## Sources

Toutes lues le 15/11/2026, robots.txt autorisant l'accès :
- https://www.ellsworthjewelers.com/pages/custom-ring-builder (questionnaire)
- https://www.ellsworthjewelers.com/pages/custom-engagement-rings
- https://www.ellsworthjewelers.com/pages/custom-jewelry
- https://www.ellsworthjewelers.com/return-policy
- https://www.ellsworthjewelers.com/pages/synchrony-financing
- https://www.ellsworthjewelers.com/ringsettings et fiche /ringsettings-details/natural-diamond-engagement-rings/10k-white-gold-round-halo-engagement-ring/1
- https://www.ellsworthjewelers.com/diamonds
- https://www.ellsworthjewelers.com/services/jewelry-engraving (gravure en magasin, sur devis gratuit)
- robots.txt du site (Crawl-delay 2 ; panier, compte, connexion, tris interdits)

Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/ellsworth-jewelers/` (hors dépôt).
