# Audit : Forever Young Fine Jewelers

- **Site** : Forever Young Fine Jewelers (St. George, Utah), https://www.foreveryoungfinejewelers.com (page de départ : https://www.foreveryoungfinejewelers.com/pages/custom-ring-builder)
- **Date** : 15/11/2026 (date imposée par la consigne ; horloge de la machine : 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 et iPhone 13 (Playwright), locale en-US
- **Statut** : **partiel**. Le questionnaire en 4 étapes est audité en entier ; le « 3D Ring Designer » n'a pas pu être atteint : le dernier clic envoie un POST vers `jeweleros.com/api/`, interdit par le robots.txt de ce domaine. Panier interdit (`*/cart`) : non ouvert.
- Légende : **[V]** vérifié, **[I]** inféré, **[S]** supposé. Robots.txt du site : Crawl-delay 2 respecté.

## Parcours

| Étape | Options | Source |
|---|---|---|
| Étape 1 sur 4 « Let's start designing your ring » | Métal (jaune, blanc, rose) + 8 styles + « Start from scratch » | [V] |
| Étape 2 sur 4 « Choose your center stone » | Natural / Lab Grown + 9 formes + « Decide later » | [V] |
| Étape 3 sur 4 « Select your center stone size » | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats + « Decide later » | [V] |
| Étape 4 sur 4 « When do you need your ring? » | 1–4 semaines, 1–3 mois, 3–6 mois, « Not sure yet » | [V] |
| Après l'étape 4 | lancement du « 3D Ring Designer » (module JewelerOS) | [V] texte « fully customize your design in our 3D Ring Designer » ; ouverture **non réalisée** |
| Panier | `/cart` | INTERDIT, non ouvert |

## Contrôles vérifiés

Page de départ : 176 contrôles visibles sur ordinateur, 53 sur iPhone (JSON `controls.cjs`) ; la plupart sont la navigation du site (marques, catégories, formes de diamants, services).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille Yellow Gold (active), White Gold, Rose Gold | boutons `jos-metal-btn` | cliquées, aucune erreur, l'étape reste la 1 ; effet sur les vignettes non contrôlé visuellement | aucun prix affiché | OK [V] ; rendu non vérifié |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | tuiles | seul « Solitaire » cliqué : passe à l'étape 2 en moins de 2 s | aucun | Solitaire OK [V] ; 8 autres non cliquées |
| Natural / Lab Grown | boutons | « Lab Grown » puis « Natural » cliqués ; l'étape ne change pas ; effet sur la suite non visible | aucun | OK [V] |
| Formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant | 9 tuiles (icônes SVG de jeweleros.com) | seul « Round » cliqué : passe à l'étape 3 | aucun | Round OK [V] ; 8 autres non cliquées |
| Decide later (étapes 2 et 3), « Not sure yet » | tuile | non cliquées | – | non testé |
| Tailles : 0.5 à 5 carats | 8 tuiles | seul « 1 carat » cliqué : passe à l'étape 4 | aucun | OK [V] ; 7 autres non cliquées |
| Délais : 1 - 4 weeks | tuile | **clic : le module envoie `POST jeweleros.com/api/create/from-ring-config/`** ; interdite, la requête a été interceptée et annulée avant l'envoi ; l'écran n'a pas changé | – | **arrêt** ; clic fait avec interception, la requête n'est pas partie |
| 1 - 3 months, 3 - 6 months, Not sure yet | tuiles | non cliquées (même appel attendu) | – | non testé [I] |
| Skip | bouton | non cliqué (ouvre probablement le designer, même appel) | – | non testé |
| Back | bouton | non cliqué | – | non testé |
| Fermer l'avis de cookies | bouton | clic OK | – | OK [V] |
| Navigation : Bridal, Diamonds, Jewelry, Custom, Services, Our Store, recherche, compte (champs identifiant/mot de passe), wishlist, panier (« Toggle Shopping Cart »), Make an Appointment, abonnement e-mail | liens, champs, boutons | non utilisés (aucun champ rempli) ; panier INTERDIT | – | non testé |
| Téléphone (435) 465-0137, Contact, réseaux sociaux | liens | non suivis | – | non testé |

## Options disponibles

- **Métaux (questionnaire)** : or jaune, or blanc, or rose [V]. Titres (14 ou 18 k) et platine : non vus.
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, depuis zéro [V].
- **Origine** : Natural, Lab Grown [V].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant [V].
- **Carats** : 0,5 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 [V].
- **Échéance** : 1–4 semaines, 1–3 mois, 3–6 mois, indécis [V].
- **Autres offres du site** : constructeur de bagues de mariage (`/pages/band-builder`), bijoux sur mesure (`/pages/custom-jewelry`), diamants libres par forme (`/diamonds?diamondshape=…`) [V liens]. Filtres de la liste des réglages : sous-catégorie, prix, marques, stock, style, matériau, pierre, forme, genre [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le questionnaire. Sur la liste des réglages (35 produits), prix affichés (ex. semi-montures en or 14 k à 3 000, 3 670, 5 430 et 6 500 $) avec « Ships on Next Open Business Day » [V]. Prix du résultat du 3D Designer : non vu.
- **Délai** : questionnaire = souhait du client, pas un engagement. Page « custom » : conception 3D CAD, modifications à volonté, modèle en cire possible ; fabrication « about 3 weeks » [V].
- **Retours** : 30 jours, objet neuf, emballage d'origine, justificatif ; « Special Orders and Customized Jewelry are not eligible for returns » ; texte contradictoire (« 30 days » puis « 15 days to return once received ») ; remboursement sous une semaine après inspection [V] /return-policy.
- **Garantie** : non lue (page absente du parcours). **Mise à taille** : « we can resize almost any ring », sans prix ni délai [V].
- **Financement** : page « Financing Options » sans texte de conditions lu ; logo Synchrony au pied de page [V].

## Confiance et service

- Magasin physique à St. George (41 N Main Street), prise de rendez-vous, téléphone (435) 465-0137 [V].
- Logos d'adhésion : Authorize.Net, IJO Master Jeweler, JBT, Jewelers Mutual, RJO, Synchrony [V].
- Page « Testimonials » : en-tête et bouton « Write a review », aucun avis lu [V]. Pas de note chiffrée vue.
- **Libellé du synthétique** : « Lab Grown » [V].
- Langue : anglais ; devise : dollars [V]. Chat : le site charge des widgets `chekkit.io` ; non ouverts [V requêtes].
- Preuves d'atelier : processus décrit (3D CAD, cire, 3 semaines) ; galerie de créations `/pages/custom-jewelry-gallery` non ouverte ; pas de suivi de commande observé.

## Points forts à retenir pour JR Diamond

1. **Questionnaire en 4 étapes avant l'outil complet**, avec « Decide later » et message « vous pourrez personnaliser entièrement » : réduit l'entrée dans le configurateur [V captures étapes 1 à 4].
2. **Question sur le délai souhaité** (1–4 semaines à 3–6 mois) pour orienter la vente : idée à reprendre avec notre délai de 14 jours ouvrés [V].
3. **Choix naturel / laboratoire dès l'étape 2** [V].
4. **Processus sur mesure expliqué en trois temps** (rêver, concevoir en CAD, fabriquer) avec modèle en cire : proche de notre promesse « l'atelier en direct » [V /pages/custom-jewelry].
5. **Restauration d'héritage et recréation** proposée : équivalent de notre « bijou de famille » [V].
6. **Pastilles de métal en tête de parcours** sans prix : simple, mais le prix attendu manque [V].

## Défauts observés

- Aucun prix dans le questionnaire ; prix connu seulement après l'outil 3D (non vu) [V].
- La bascule Natural / Lab Grown ne produit aucun retour visible sur l'écran (pas de changement de prix) [V].
- Première apparition de l'interface : environ 6 s [V mesure].
- Politique de retour incohérente (30 jours / 15 jours) et sur-mesure exclu [V].
- Le texte des pastilles « Yellow/White/Rose Gold » n'indique pas le titre de l'or [V].
- Sur iPhone, le designer charge une adresse `jeweleros-custom.netlify.app` dans un cadre, au lieu d'un composant du site (constat à l'ouverture de la page) [V cadre listé].

## Limites de l'audit

- Le « 3D Ring Designer » (vue 3D, essayage, prix, carat exact, taille de doigt, gravure, partage, ajout au panier) **n'a pas été vu** : le POST `https://www.jeweleros.com/api/create/from-ring-config/` est interdit (`Disallow: /api/`). Le clic « 1 - 4 weeks » a été fait avec une interception qui a annulé la requête avant qu'elle parte ; aucun autre appel à ce domaine n'a été fait au-delà de ceux de l'ouverture de la page. L'adresse `jeweleros-custom.netlify.app` (autorisée par son robots.txt) n'a pas été ouverte directement.
- Panier, compte, wishlist : `*/cart` interdit ; compte non utilisé.
- Seul un chemin a été parcouru (Solitaire, Round, 1 carat, 1–4 semaines) ; les autres options sont listées mais non cliquées.
- Temps d'apparition du visuel principal : **questionnaire visible en 5,96 s sur ordinateur et 5,66 s sur iPhone** ; première image d'anneau à 5,98 s et 5,68 s (une mesure chacune). Aucune 3D mesurée : pas de `canvas` dans la page à l'ouverture.
- Aucun formulaire envoyé, aucun compte, aucun paiement.

## Sources

- https://www.foreveryoungfinejewelers.com/pages/custom-ring-builder
- https://www.foreveryoungfinejewelers.com/return-policy, /financing-options, /pages/custom-jewelry, /services/ring-resizing, /testimonials
- https://www.foreveryoungfinejewelers.com/jewelry/engagement-rings-and-settings/engagement-ring-settings
- https://www.foreveryoungfinejewelers.com/robots.txt ; https://www.jeweleros.com/ (robots.txt : `Disallow: /api/`)
- Captures et JSON : scratchpad `audit/us/forever-young-fine-jewelers/` (hors dépôt)
