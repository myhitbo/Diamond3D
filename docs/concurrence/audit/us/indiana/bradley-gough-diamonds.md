# Audit : Bradley Gough Diamonds (Fort Wayne, Indiana)

- **Site** : Bradley Gough Diamonds ; **adresse de départ** : https://bradleygoughdiamonds.com/custom-ring-builder/
- **Date** : 15/11/2026 ; **appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le questionnaire est parcouru jusqu'au bout, mais le concepteur 3D ne s'est pas chargé sur ordinateur et ses panneaux n'ont pas pu être actionnés sur iPhone.
- **robots.txt** : adresses ouvertes toutes contrôlées « AUTORISÉ » avant ouverture [V]. Aucun blocage, aucun contournement.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées (ordinateur, 4 étapes) | Source |
|---|---|---|
| Choix du métal (pastilles, étape 1) | Yellow Gold, White Gold, Rose Gold (3 pastilles) [V] | /custom-ring-builder/ |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » (9) [V] | idem |
| 2. Pierre de centre | Bascule Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] | idem |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » ; texte « Once you're in the ring designer you can easily set an exact carat weight » [V] | idem |
| 4. Échéance | 1 – 4 weeks, 1 – 3 months, 3 – 6 months, Not sure yet [V] | idem |
| Concepteur « 3D Ring Designer » | Ordinateur : écran « Something went wrong » + bouton « Try again » après 15 s [V] | idem |

Sur **iPhone**, le même adresse sert un questionnaire **différent, en 6 étapes**, avec aperçu de la bague qui change à chaque choix [V] :

| Étape | Options | 
|---|---|
| 1. Stones | One / Two / Three stone(s) |
| 2. Metal | Yellow gold, White gold, Platinum, Rose gold, Two-tone |
| 3. Center stone | Lab grown / Natural / Not sure yet ; 9 formes (mêmes que ci-dessus) ; poids : Not sure yet, 0,5, 1, 1,5, 2, 2,5, 3, 4, 5 ct |
| 4. Setting | 6-prong, Basket, Bezel, Halo, Hidden halo |
| 5. Band | Plain, Pavé, Cathedral, Pavé cathedral |
| 6. Timing | 1–4 weeks, 1–3 months, 3–6 months, Not sure yet |
| Fin | « Save & Continue » ou « Continue without saving » (non actionné : « Save » demande des coordonnées), puis le concepteur 3D |

[I] Deux versions du widget JewelerOS (selon l'appareil ou un test A/B) ; non élucidé.

## Contrôles vérifiés

Page du constructeur : 81 contrôles listés sur ordinateur, 54 sur iPhone (controls.cjs) ; ce sont pour l'essentiel le menu, le pied de page et le widget.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose Gold (ordinateur) | bouton | Présentes ; clic non testé (couleur seulement, rendu non contrôlé) | aucun | non testé : peu d'intérêt, aperçu icône |
| Cartes de style (9) | bouton | « Halo » cliqué : passe à l'étape 2 [V] ; les 8 autres non cliquées | aucun | fonctionne |
| Natural / Lab Grown | bascule | « Lab Grown » cliqué, accepté sans erreur [V] | aucun affiché | fonctionne |
| 9 formes de pierre | bouton | « Marquise » cliqué, passe à la taille [V] | aucun | fonctionne ; 8 autres non cliquées |
| 8 poids en carats + Decide later | bouton | « 1 carat » cliqué, passe à l'étape 4 [V] | aucun | fonctionne |
| 4 échéances | bouton | « 1 - 3 months » cliqué, ouvre le concepteur [V] | aucun | fonctionne ; le concepteur échoue sur ordinateur |
| Try again (écran d'erreur) | bouton | Non cliqué (pas de nouvel essai pour passer) | - | non testé |
| Back / Skip (en-tête du widget) | bouton | Présents ; non cliqués | - | non testé |
| iPhone : One / Two / Three stone(s) | bouton | « One » cliqué, passe aux métaux [V] | aucun | fonctionne |
| iPhone : 5 métaux | bouton | « Platinum » cliqué : l'aperçu se recolore, « Next » apparaît [V] ; les autres non cliqués | aucun | fonctionne |
| iPhone : Lab grown, Marquise, 1 ct | bouton | Cliqués : poids puis « Next » activé [V] | aucun | fonctionne |
| iPhone : 5 montures (6-prong, Basket, Bezel, Halo, Hidden halo) | bouton | Affichées avec vignette ; « Still needed: setting » tant que rien n'est choisi ; premier choix cliqué [V] | aucun | fonctionne |
| iPhone : 4 corps de bague | bouton | Premier choix cliqué [V] | aucun | fonctionne |
| iPhone : « Next » | bouton | Grisé tant que le choix n'est pas fait (« Still needed : … ») [V] | - | fonctionne |
| iPhone : « Save & Continue » / « Continue without saving » | bouton | « Continue without saving » : ouvre le concepteur 3D en ~4 à 12 s [V] | - | fonctionne |
| iPhone, concepteur : onglet « Engagement Ring » | bouton | Affiche « MSRP $1,315 (Setting only) » (marquise, platine, 6 griffes) [V, capture] | prix de la monture seule | affiché |
| iPhone, concepteur : « + Add Wedding Band » | bouton | Visible ; non cliqué | - | non testé |
| iPhone, concepteur : panneaux Metal, Diamonds, Head (liste continue) | accordéon | Visibles ; le clic scripté a échoué (éléments hors DOM accessible) [V] | - | non testé (limite d'outil) |
| iPhone, concepteur : « Save → » | bouton | Visible ; non cliqué (enregistrer = coordonnées) | - | non testé |
| Menu : DESIGN YOUR RING, BRIDAL, DIAMONDS, DESIGNERS, JEWELRY, ESTATE, TIMEPIECES, SERVICES, ABOUT, BIRTHSTONES | liens | Liens de navigation ; hors parcours | - | non testé |
| Wish List, Login, Search | liens | /account/wish-list, /account/login : non ouverts (compte) | - | non testé (compte) |
| Téléphone (260) 436-9300 | lien tel: | Appel | - | présent |
| Newsletter (e-mail + JOIN NOW) | formulaire | Non rempli | - | non testé (règle : pas de formulaire) |
| Bandeau cookies : Accept All / Reject All / More Options | bouton | Présents | - | non testé |
| Bouton « Leave a review » (carte « 4.9, 543 reviews ») | bouton | Non cliqué | - | non testé |
| Pied de page : 12 guides (Education), 12 services (Financing, Appraisals, Insurance, Repairs, Trade-in…) | liens | Navigation | - | Financing, Custom Design et Design Your Ring lus ; autres non ouverts |

## Options disponibles

- **Métaux** : jaune, blanc, rose (ordinateur) ; or jaune, or blanc, platine, or rose, bicolore (iPhone) [V]. Les carats d'or (10, 14, 18 k) ne sont pas proposés dans le questionnaire [V].
- **Pierre** : naturelle ou « lab grown » ; 9 formes ; 0,5 à 5 ct ; « Not sure yet » [V].
- **Styles / montures** : 9 styles (ordinateur) ; 5 montures + 4 corps de bague (iPhone) [V].
- **Pavage** : Full Pavé (style), Pavé et Pavé cathedral (corps de bague) [V].
- **Taille de doigt, gravure, filtres de pierre (couleur, pureté, certificat)** : non rencontrés dans le questionnaire. Le texte annonce que le poids exact se règle dans le concepteur [V].
- **Vues** : aperçu 3D rotatif sur iPhone (vue de côté, marquise à griffes) [V, capture] ; aucune vidéo, 360°, essayage sur la main ni RA relevés [V sur les pages ouvertes].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le questionnaire. Dans le concepteur iPhone : « MSRP $1,315 (Setting only) » pour une monture marquise en platine [V, capture]. La pierre se choisit ensuite en boutique : « you'll get a chance to pick out your center stone from our incredible diamond collection right here in Fort Wayne » [V, /design-your-custom-engagement-ring/]. Pas de décomposition du prix.
- **Délai** : « We complete most designs in 4-8 weeks » (sur-mesure) [V, /custom-design-jewelry]. L'échéance demandée dans le questionnaire sert à recommander un calendrier (« Help us recommend the best timeline ») [V].
- **Retours, garanties, livraison** : non trouvés dans le parcours ; pas de panier ni de paiement en ligne sur le constructeur [V]. Page Financing : « in-house jewelry financing », « Buy Now, Pay Later », sans taux ni durée publiés ; demande via formulaire [V, /services/financing/].
- **Panier** : non atteint. Le constructeur se termine par « Save » (enregistrement) et prise de rendez-vous ; pas de bouton d'ajout au panier relevé [V].

## Confiance et service

- 4,9 sur 543 avis affichés dans le pied de page (« Overall rating 4.9, 543 reviews », bouton « Leave a review ») [V]. [V, ext. : StoneAlgo, 428 avis, 4,9 selon l'inventaire.]
- Processus du sur-mesure décrit : consultation, croquis, CAO, moules en cire, pièce finie, « getting your input and approval at every step » [V]. Aucune photo ou vidéo d'atelier ni suivi de commande relevés.
- Téléphone (260) 436-9300, adresse 4321 W. Jefferson Blvd, horaires mardi-mercredi 10 h-18 h, vendredi 10 h-18 h, samedi 10 h-17 h [V]. Bouton de rendez-vous (« Appointment ») sur les pages de service [V].
- Langue : anglais ; devise : dollar [V]. Plus de 40 ans d'activité [V].
- Certificats, libellé du synthétique : « Lab Grown » ; pas de mention de GIA/IGI dans le questionnaire [V].

## Points forts à retenir pour JR Diamond

1. **Aperçu qui se met à jour à chaque choix** (iPhone : métal, forme, monture), avec bouton « Next » grisé et message « Still needed: setting » [V, captures iPhone]. Guide l'utilisateur sans erreur.
2. **Questionnaire court avant la 3D** : 4 questions (ordinateur) ou 6 (iPhone), chacune avec « Skip » et « Decide later » [V]. Réduit l'effort initial.
3. **Prix de la monture annoncé dans le concepteur** (« MSRP $1,315 (Setting only) ») avec la mention « You can purchase as is or craft a fully custom ring » [V, capture iPhone].
4. **Bascule naturel / synthétique dès la question de la pierre** [V].
5. **Promesse d'approbation à chaque étape** de la fabrication [V, /custom-design-jewelry] : JR Diamond peut aller plus loin en montrant les étapes.

## Défauts observés

1. **Le concepteur 3D échoue sur ordinateur** : « Something went wrong » + « Try again », barre de progression bloquée, 15 s après le dernier choix (observé deux fois) [V]. Requêtes vers jeweleros.com refusées dans cet environnement [V] ; [I] la cause peut venir du réseau d'audit, pas du site.
2. **Deux parcours différents** selon l'appareil (4 étapes ordinateur, 6 étapes iPhone) [V] ; difficile à comparer et à tester.
3. **Pas d'option de carat d'or, de taille de doigt ni de gravure** dans le questionnaire [V].
4. **Aucun prix ni délai de livraison avant le rendez-vous** ; achat impossible en ligne [V].
5. **Image de logo en 404** (`/mediap/preferences/…bradgoughhorizotalnewlogo.300.webp`) [V, réseau].
6. **Le wizard n'est pas lisible par les lecteurs d'écran ni accessible aux scripts** (panneaux hors DOM accessible) [I].

## Limites de l'audit

- Concepteur 3D non exploré sur ordinateur (échec) ; sur iPhone, le clic sur les panneaux Metal, Diamonds, Head a échoué (outil), donc leurs options, la taille de doigt, la gravure et le prix par choix ne sont pas vérifiés.
- Temps d'apparition du visuel principal : questionnaire visible en **1,9 à 2,6 s** (ordinateur, 3 mesures) et **2,3 à 3,7 s** (iPhone, 4 mesures) ; concepteur 3D iPhone visible dans les 12 à 33 s suivant « Continue without saving » (première relève à 4 s : canevas non détecté), concepteur ordinateur jamais affiché [V].
- Une première mesure iPhone a dépassé 30 s car le script attendait le texte de la version 4 étapes (écart de script, pas du site).
- Le questionnaire a été ouvert une dizaine de fois en tout (une vingtaine de clics, aucune donnée saisie) ; panier et compte non ouverts. Pas de test de partage, comparaison, essayage à domicile, chat ou WhatsApp : absents des pages vues.

## Sources

- [S1] https://bradleygoughdiamonds.com/custom-ring-builder/ (navigateur, ordinateur et iPhone, 15/11/2026)
- [S2] https://bradleygoughdiamonds.com/design-your-custom-engagement-ring/ (lu)
- [S3] https://bradleygoughdiamonds.com/custom-design-jewelry (lu)
- [S4] https://bradleygoughdiamonds.com/services/financing/ (lu)
- [S5] Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/bradley-gough-diamonds/ (hors dépôt)
