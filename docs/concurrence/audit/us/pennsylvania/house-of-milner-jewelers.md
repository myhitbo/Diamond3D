# Audit : House of Milner Jewelers (Philadelphie, Pennsylvanie)

- **Site** : House of Milner Jewelers, https://milnerdiamonds.com/
- **Page de départ** : https://milnerdiamonds.com/pages/engagement-ring-builder
- **Date** : 15/11/2026 (consigne de l'étude ; pages lues et contrôles actionnés le 25/11/2026)
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Le constructeur est un outil du fournisseur JewelerOS ; son appel d'enregistrement `https://www.jeweleros.com/api/create/from-ring-config/` est interdit par le robots.txt de ce domaine (`Disallow: /api/`). L'audit s'arrête avant ce clic. Le site ne vend pas en ligne : pas de panier.
- Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé.
- robots.txt de milnerdiamonds.com : [V] `Allow: /`, panier et paiement interdits, aucun groupe nominatif ; il contient aussi des consignes aux « agents » (utiliser leurs interfaces UCP/MCP, pas de contournements par script). Cet audit a été fait avec un navigateur piloté, comme le demandait la consigne : **point à signaler** au propriétaire de l'étude.

## Parcours

| Étape | Options (toutes relevées) |
|---|---|
| Ordinateur, étape 1 sur 4 « Let's start designing your ring » | style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; 3 pastilles de métal (jaune, blanc, rose) [V] |
| Ordinateur, étape 2 « Choose your center stone » | Natural / Lab Grown ; 9 formes (Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant) ; « Decide later » [V] |
| Ordinateur, étape 3 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » [V] |
| Ordinateur, étape 4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet [V] ; le choix déclenche l'appel interdit : **arrêt** |
| iPhone, 6 étapes (affichage différent) | étape 1 « How many stones? » : One, Two, Three, « Design anything » (décrire son bijou) ; étape 2 métal : jaune, blanc, platine, rose, deux tons ; étape 3 pierre : Lab grown (par défaut) / Natural, 9 formes + « Other, made to order » + « Not sure yet » ; étapes 4 à 6 non vues [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Solitaire (et 7 autres styles) [V] | carte | passe à l'étape 2 ; les 8 styles et « Start from scratch » sont présents ; seul Solitaire cliqué | aucun prix | OK (1 sur 9 cliqué) |
| Pastilles métal jaune / blanc / rose [V] | pastille | présentes (jaune sélectionnée) ; non actionnées sur ordinateur | aucun | non testé |
| Natural / Lab Grown [V] | bouton | Lab Grown : passe à l'étape 3 | aucun | OK |
| Oval (et 8 autres formes) [V] | carte | passe à l'étape suivante ; 1 sur 9 cliquée | aucun | OK |
| 1 carat (et 7 autres tailles) [V] | carte | passe à l'étape 4 ; texte : « Once you're in the ring designer you can easily set an exact carat weight » | aucun | OK |
| Decide later (étapes 2 et 3), Skip [V] | bouton | présents ; non actionnés | — | non testé |
| Back (retour) [V] | bouton | présent dans l'en-tête de l'outil ; non actionné | — | non testé |
| 1 - 4 weeks [V] | carte | l'outil tente `POST jeweleros.com/api/create/from-ring-config/` (interdit) ; la requête a été bloquée avant l'envoi ; le site affiche « Something went wrong, Try again » | — | **arrêté** |
| iPhone : One [V] | carte | affiche un rendu 3D de la bague (iframe `jeweleros-custom.netlify.app`, balise `canvas`) puis l'étape 2 « Pick your metal » | aucun | OK |
| iPhone : Yellow gold [V] | bouton | état « pressed » ; bouton « Next » apparaît | aucun | OK |
| iPhone : Next (étape 2) [V] | bouton | tente la même requête interdite : **arrêt** ; l'étape 3 « Pick your stone » s'affichait malgré tout | — | **arrêté** |
| iPhone : Lab grown / Natural, formes, Not sure yet, Next [V] | boutons | présents ; « Next » désactivé (« Still needed: shape and size ») ; non actionnés | — | non testé (arrêt) |
| « Design anything » (décrire, voir, affiner) [V] | bouton | présent ; ouvrirait une saisie libre | — | non testé (saisie) |
| Book Appointment, BOOK (6 types) [V] | lien/bouton | `/pages/jewelry-appointment-philadelphia` liste les rendez-vous ; réservation non faite | — | lecture seule |
| Open live chat (HubSpot) [V] | bouton | présent ; aucune conversation ouverte | — | non testé (règle) |
| Open accessibility menu [V] | bouton | présent en bas à gauche ; non ouvert | — | non testé |
| Financing, Contact, Guides, Services, Collections [V] | liens | pages lisibles (200) ; non parcourues toutes | — | partiel |

## Options disponibles

- **Styles** [V] : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, trois pierres, ou départ de zéro.
- **Métaux** [V] : ordinateur : jaune, blanc, rose ; iPhone : jaune, blanc, platine, rose, deux tons. Carats d'or (14/18 k) : [V] non demandés à ces étapes.
- **Pierre** [V] : naturelle ou de laboratoire ; 9 formes (+ « autre forme, sur commande » sur iPhone) ; tailles 0,5 à 5 ct.
- **Délai souhaité** [V] : 1-4 semaines, 1-3 mois, 3-6 mois, ou non défini.
- **Non constaté** : taille de doigt, gravure, pavage, griffes, couleur et pureté de pierre (l'outil dit qu'il faut passer par le « 3D Ring Designer » pour les détails).
- **Vues** [V] : rendus en image ; rendu 3D (canvas) sur iPhone après le premier choix ; aucune vidéo constatée.

## Prix, délais, retours, garanties

- **Prix** [V] : **aucun prix dans le constructeur** ; les conditions d'utilisation disent : « Pricing, availability, and specifications may vary and are confirmed during consultation » (extrait de `/pages/terms-of-service`).
- **Vente** [V] : « No purchases are made directly through the Website » ; achats en boutique ou en consultation. Pas de panier, de livraison ni de paiement en ligne.
- **Délai** [V] : seulement la question « quand avez-vous besoin de votre bague ? » (1-4 semaines à 3-6 mois) ; pas de délai promis.
- **Retours, garanties, certificats (GIA/IGI), libellé du synthétique** : [V] non trouvés sur les pages lues ; le libellé de l'outil est « Lab Grown ».
- **Financement** [V] : « Special Financing Through Wells Fargo Bank, N.A. », sous réserve d'acceptation du crédit (`/pages/jewelry-financing-philadelphia`).

## Confiance et service

- [V] Boutique : 728 Sansom St, Philadelphie (Jewelers' Row) ; téléphone (215) 922-1248 ; zones desservies : Philadelphie, Lower Merion, South Jersey, Bucks, Delaware County.
- [V] Rendez-vous : Diamond Concierge (60 min), Wedding Bands (60), Bespoke (60), Engagement Ring Consultation (60), Custom Jewelry Consultation (30), Jewelry Repair (15) ; « transparent pricing » annoncé, « pressure-free ».
- [V] Chat HubSpot, menu d'accessibilité, YouTube du joaillier en lien.
- [V] Anglais, dollar ; avis clients sur la page non lus ; pas de suivi de commande ni de photos de fabrication constatés.

## Points forts à retenir pour JR Diamond

1. **Un rendu 3D de la bague dès le premier choix, sur iPhone** (canvas dans une iframe, rendu changeant avec le métal). Preuve : iPhone, après « One », « Your metal » affiche la bague en 3D.
2. **Le « 3D Ring Designer » comme prélude au rendez-vous** : les étapes courtes (style, origine, forme, carat, délai) préparent la consultation. Preuve : phrase de la page « before your private consultation ».
3. **Question du délai souhaité en dernière étape** (1-4 semaines à 3-6 mois) pour orienter la fabrication. Preuve : étape 4 sur ordinateur.
4. **Texte « Decide later » à chaque étape** : n'oblige pas à décider. Preuve : étapes 2 et 3 sur ordinateur.
5. **Choix « Other shape, made to order »** : forme non standard annoncée comme sur commande. Preuve : étape 3 sur iPhone.

## Défauts observés

- Aucun prix n'est affiché, ni pendant ni après la configuration [V].
- Enregistrer la bague appelle un service tiers (`jeweleros.com/api`) ; la requête échoue (« Something went wrong ») quand elle est bloquée [V].
- Deux parcours différents selon l'appareil (4 étapes sur ordinateur, 6 sur iPhone), avec des options de métal différentes (platine et deux tons absents sur ordinateur) [V].
- Page sans description de l'outil dans le texte lu (le contenu de l'outil n'apparaît pas dans le texte de la page) [V].
- Pas de vente en ligne : la configuration ne mène à aucun achat [V].

## Limites de l'audit

- **Parcours interrompu** à l'étape 4 sur ordinateur et à l'étape 2 sur iPhone, car le bouton suivant appelle `https://www.jeweleros.com/api/create/from-ring-config/`, interdit (`Disallow: /api/`). Les requêtes d'ouverture de page vers `jeweleros.com/api/config/…` ne sont pas un écart (règle de l'étude). Les étapes suivantes (3D Ring Designer complet, options de bague, enregistrement, partage, essayage) n'ont pas été vues.
- Aucun panier, frais de livraison ou moyen de paiement : le site n'en a pas [V, conditions d'utilisation].
- Temps du visuel : **1,6 s sur ordinateur** (première image > 150 px, une mesure) ; iPhone non mesuré (le rendu n'est apparu qu'après un clic) [I].
- Une seule carte cliquée par étape ; pages Collections, Guides, avis non lues en détail.
- Aucun formulaire, rendez-vous, chat ni saisie libre actionné.

## Sources

- https://milnerdiamonds.com/pages/engagement-ring-builder
- https://milnerdiamonds.com/pages/terms-of-service
- https://milnerdiamonds.com/pages/jewelry-appointment-philadelphia
- https://milnerdiamonds.com/pages/jewelry-financing-philadelphia
- https://milnerdiamonds.com/pages/philadelphia-jeweler
- https://milnerdiamonds.com/robots.txt ; https://www.jeweleros.com/robots.txt
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/house-of-milner-jewelers/`
