# Audit : Michael & Son's Jewelers (Reno, Nevada)

- **Site** : Michael & Son's Jewelers (plateforme Punchmark ; constructeur 3D de JewelerOS)
- **Adresse** : https://www.michaelandsonsjewelers.com — page de départ https://www.michaelandsonsjewelers.com/pages/custom-ring-builder
- **Date** : 15/11/2026 (exécution des contrôles ; fichier rédigé le 25/11/2026 selon l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 ; émulation iPhone 13
- **Statut** : **partiel**. Les étapes 1 à 3 de l'assistant ont été parcourues ; l'étape 4 (délai) et le constructeur 3D n'ont pas pu être audités (voir « Écart à robots.txt »).
- Légende : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Écart à robots.txt (à signaler)
Le dernier clic de l'assistant (choix du délai, étape 4) déclenche un `POST https://www.jeweleros.com/api/create/from-ring-config/` [V, journal réseau]. Le robots.txt de jeweleros.com interdit `/api/` (contrôle `robots.cjs` : INTERDIT, règle `Disallow: /api/`). Le contrôle n'a été fait **qu'après** trois clics sur ce bouton (deux exécutions de mise au point, une de relevé réseau). Conséquences : aucun autre clic n'a été fait après la découverte ; le constructeur 3D n'a pas été ouvert ; le résultat observé est une erreur côté page (voir Défauts). Les requêtes `jeweleros.com/api/config/…` émises à la simple ouverture de la page ne sont pas un écart.

## Parcours
| Étape | Titre affiché [V] | Options [V] |
|---|---|---|
| 1 sur 4 | « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, un neuvième libellé masqué par la bannière cookies (« … Me… », vraisemblablement « Past Present Future » ou « Trust Me » [I]), Three Stone ; « Start from scratch » |
| 2 sur 4 | « Choose your center stone » | bascule Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3 sur 4 | « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carat ; « Decide later » (texte : « Once you're in the ring designer you can easily set an exact carat weight ») |
| 4 sur 4 | « When do you need your ring? » | 1 - 4 weeks ; 1 - 3 months ; 3 - 6 months ; Not sure yet |
| Après | « 3D Ring Designer » annoncé à l'étape 1 | non atteint : erreur (voir Défauts) |

Un clic sur une carte passe à l'étape suivante sans bouton « Suivant ». Un bouton « Back » et un « Skip » existent dans la liste de contrôles [V, controls.cjs]. Chaque étape suivante a été atteinte en cliquant Halo/Three Stone, puis Oval ou « Decide later », puis « 1 carat » [V].

## Contrôles vérifiés
Liste issue de controls.cjs (83 contrôles visibles, ordinateur) ; les contrôles de gabarit sont regroupés par famille mais tous sont comptés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille jaune / blanc / rose (`jos-metal-btn`) | bouton | recolore les vignettes d'anneau de l'étape 1 (rose vérifié par capture) | aucun affiché | OK [V] |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Three Stone | carte | passe à l'étape 2 | aucun | OK (Halo, Three Stone, Solitaire cliqués ; les autres non testés individuellement, même composant [I]) |
| Start from scratch | carte | passe à l'étape 2 | aucun | OK [V] |
| Natural / Lab Grown | bascule | change l'état de la bascule ; pas d'effet visible sur les formes | aucun | OK [V] (effet sur le prix non observable) |
| 9 formes de pierre (Round…Radiant) | carte | passe à l'étape 3 (Oval cliqué) | aucun | OK (Oval ; autres [I]) |
| Decide later (étapes 2 et 3) | carte | passe à l'étape suivante | aucun | OK [V] |
| 0.5 à 5 carat (8 tailles) | carte | passe à l'étape 4 (1 carat cliqué) | aucun | OK (1 carat ; autres [I]) |
| 4 délais (étape 4) | carte | appel `jeweleros.com/api/create/from-ring-config/` puis « Something went wrong / Try again » | aucun | **erreur** [V] (interdit à tester davantage) |
| Try again | bouton | non cliqué : relancerait l'appel interdit | — | non testé (robots.txt) |
| Back / Skip | bouton | présents ; non actionnés individuellement | — | non testé (sans intérêt pour l'audit) |
| Bannière cookies : Decline all / Accept all / Close | bouton | refuser ferme la bannière | — | OK [V] |
| Recherche (loupe + champ « kw » + soumettre) | champ | non soumise (chemins de recherche à contrôler) | — | non testé |
| Compte, liste de souhaits, panier (« My Cart ») | bouton | volet latéral ; « You have no items in your Cart. » ; formulaire de connexion visible | — | ouverture OK [V] ; aucun compte créé |
| Menu principal (CUSTOM, BRIDAL, FINE JEWELRY, OUR DESIGNERS, DIAMONDS, SERVICES, ABOUT) + 11 boutons de sous-menu | lien/bouton | navigation | — | non suivis (hors constructeur) |
| Start a Custom Project, Book an Appointment, Visit Us | lien | `/pages/custom-jewelry`, `/#jos-book-appointment`, `#` | — | liens présents [V]; « Visit Us » pointe vers `#` [V] |
| Téléphone (775) 786-5110 | lien tel | ouvre l'appel | — | présent [V] |
| Réseaux (Facebook, Instagram, TikTok) | lien | externes | — | non ouverts |
| Newsletter (champ e-mail + bouton) | formulaire | non rempli | — | non testé (règle) |
| Pied de page : Return Policy, Privacy, Terms, Accessibility, logos GIA/JOA/RJO/Jewelers Mutual/Preferred Jewelers | lien | pages de politique ; Return Policy lue | — | OK [V] |
| Chat « Hi! How can we help you today? » (clientbook.com) | widget | non ouvert (règle) | — | présent [V] |
| Pages catalogue (engagement-ring-settings) : 247 contrôles, filtres Prix (0-1999,99 / 2 000-4 999,99 / 5 000-9 999,99 / 10 000-19 999,99), Matériau (14K/18K jaune, blanc, rose, bicolores, 950PL), Pierre, Forme (8), Genre ; tri Featured / High to Low / Low to High / Newest ; Quick view, Inquire, wishlist, « Add this item to my shopping cart » | filtres/boutons | lus par controls.cjs ; aucun actionné | non lu | « Add to cart » non cliqué (panier interdit) ; autres non testés |

## Options disponibles
- **Métaux** (assistant) : jaune, blanc, rose [V]. Catalogue : 14 K et 18 K (jaune, blanc, rose, bicolores) et platine 950 [V, filtres].
- **Styles** : 8 cartes + « Start from scratch » [V].
- **Formes** : 9 [V]. **Carats** : 0,5 à 5 en 8 paliers [V] ; réglage exact promis dans le constructeur 3D [V, texte], non vérifié.
- **Origine** : Natural / Lab Grown [V].
- **Corps de bague, griffes, pavage, taille de doigt, gravure** : non atteints (constructeur 3D inaccessible). Gravure : page de service « Engraving » listée dans le menu [V].
- **Vues** (photo, vidéo, 360°, 3D, main, AR, zoom) : « 3D Ring Designer » annoncé [V], non vu.

## Prix, délais, retours, garanties
- **Prix** : aucun prix dans l'assistant (étapes 1 à 3) [V]. Le catalogue propose un bouton « Inquire about this item » et des filtres de prix ; les prix des fiches n'ont pas été relevés [S].
- **Délai** : l'assistant demande seulement « When do you need your ring? » (1-4 semaines, 1-3 mois, 3-6 mois) ; aucun délai de fabrication annoncé sur les pages lues [V].
- **Retours** (https://www.michaelandsonsjewelers.com/return-policy, lu) : 30 jours après réception, retour contre **avoir en magasin** uniquement, objet non porté, avec étiquettes et emballage ; demande préalable par e-mail ; **les produits sur mesure (commandes spéciales, personnalisés) ne sont pas retournables** [V].
- **Processus sur mesure** (`/pages/custom-jewelry`, lu) : esquisse, modèle CAO 3D (impression 3D possible pour voir physiquement), fonte et sertissage « en interne » ; ouverte depuis 1983 [V, texte du site].
- **Garantie** : liens « Preferred Warranty » et « Jewelry Insurance » (Jewelers Mutual) dans le menu [V] ; contenu non lu.
- **Livraison, panier, moyens de paiement** : non audités ; `/cart` est interdit par robots.txt (« Disallow: */cart ») [V].

## Confiance et service
- Magasin physique : 924 S Virginia Street, Reno ; horaires affichés avec jours fériés (Thanksgiving fermé) [V].
- Logos GIA, JOA, RJO, Jewelers Mutual, Preferred Jewelers en pied de page [V].
- Rendez-vous (« Book an Appointment »), téléphone, chat Clientbook, suivi de commande (« Track My Order » dans le menu compte) [V].
- Avis clients : page « Testimonials » listée dans le menu ; non lue [V pour l'existence].
- Langue : anglais seulement ; devise : dollar [I, pas de sélecteur vu]. Libellé du synthétique : « Lab Grown » [V].
- Preuves de fabrication : galerie « Custom Gallery » listée ; page non ouverte [V pour l'existence]. Pas de vidéo d'atelier vue.

## Mesure du visuel principal
- Ordinateur : première étape de l'assistant visible en **3,35 s** après `domcontentloaded` [V, une mesure].
- iPhone 13 : **2,28 s** [V, une mesure].
- Le rendu 3D lui-même n'a pas pu être mesuré (erreur).

## Points forts à retenir pour JR Diamond
1. **Assistant en 4 étapes sans prix, très court** : style, pierre, taille, échéance, puis ouverture d'un designer 3D. Preuve : captures a2, a4 et textes des étapes [V].
2. **Pastilles de métal qui recolorent aussitôt les vignettes** : retour visuel immédiat dès la première étape. Preuve : capture w1b [V].
3. **Bascule Natural / Lab Grown dès le choix de la pierre**, avant toute autre décision. Preuve : étape 2 [V].
4. **Question de l'échéance** (« When do you need your ring? ») qui sert à recommander un délai : utile pour le délai de 14 jours ouvrés [V pour la question ; usage inféré].
5. **Processus de fabrication expliqué avec CAO et impression 3D optionnelle** : proche de la promesse « ce que vous voyez existe » [V, /pages/custom-jewelry].

## Défauts observés
1. **Le designer 3D ne s'ouvre pas** dans Chromium (WebGL disponible : oui) : écran « Something went wrong / Try again » après l'étape 4 ; la console montre un blocage CORS sur `jeweleros.com/api/create/from-ring-config/`, et `config` / `log-error` aussi [V, journal]. Cause possible : l'environnement d'audit (proxy) ou le service ; non tranché [S].
2. Retours **en avoir seulement**, sur mesure non retournable [V].
3. Bannière cookies qui masque une carte de l'étape 1 sur ordinateur [V, capture].
4. Lien « Visit Us » dont l'adresse est `#` [V].
5. Aucun prix ni délai de fabrication dans l'assistant [V].

## Limites de l'audit
- Écart à robots.txt de jeweleros.com décrit plus haut ; constructeur 3D, étape 4 et tout ce qui suit non audités.
- Panier, caisse, compte, recherche : non visités (panier interdit ; règles de lecture seule).
- Pas d'audit des fiches produit ni des prix du catalogue ; les filtres n'ont pas été actionnés.
- Mobile : étapes 1 à 3 seulement, sans retour d'effet de prix ; une seule mesure de temps par appareil.
- Autres formes, carats et styles non cliqués un à un.

## Sources
- https://www.michaelandsonsjewelers.com/pages/custom-ring-builder (contrôles, captures, journal réseau)
- https://www.michaelandsonsjewelers.com/return-policy
- https://www.michaelandsonsjewelers.com/pages/custom-jewelry
- https://www.michaelandsonsjewelers.com/jewelry/engagement-rings/engagement-ring-settings (contrôles seulement)
- robots.txt des domaines michaelandsonsjewelers.com (via robots.cjs) et jeweleros.com
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/michael-and-sons-jewelers/
