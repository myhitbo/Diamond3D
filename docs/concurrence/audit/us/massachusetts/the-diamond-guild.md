# Audit : The Diamond Guild (Norwood, Massachusetts)

- **Site** : The Diamond Guild (Karten Family, Norwood MA), https://thediamondguild.com
- **Page de départ** : https://thediamondguild.com/custom-ring-builder/ (robots.txt : AUTORISÉ, vérifié par l'outil)
- **Date** : 15/11/2026 (scripts lancés le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 et iPhone 13 (Playwright)
- **Statut** : **partiel**. L'assistant de départ (4 étapes) est parcouru en entier ; le dessinateur 3D (JewelerOS, plateforme tierce) n'a été vu que sur iPhone, sans cadre accessible au DOM, donc exploré par captures et clics aux coordonnées. Ordinateur : le passage au dessinateur a échoué (voir Défauts). Pas de panier sur ce site.
- Marques : (V) vérifié, (I) inféré, (S) supposé.

## Parcours

| Étape | Options (V, https://thediamondguild.com/custom-ring-builder/) |
|---|---|
| Avant l'étape 1 | 3 pastilles de métal (jaune, blanc, rose), sans libellé de titre |
| 1/4 « Let's start designing your ring » | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » (9 cartes) |
| 2/4 « Choose your center stone » | Interrupteur Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (9 formes) |
| 3/4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later ». Texte : le carat exact se règle dans le dessinateur |
| 4/4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Écran « Applying your preferences... » | puis dessinateur ; sur iPhone un écran de collecte (nom, téléphone, case SMS) le recouvre, avec « Continue without saving » |
| Dessinateur (iPhone) | Bascule « Engagement Ring » (prix « MSRP $3,828 (Setting only) » pour Cathedral / Pear / 14K jaune) / « + Add Wedding Band » ; volets Metal, Diamonds, Head, Band, More ; « Save ring » ; « Save » |

Le haut de l'écran garde des puces récapitulatives (Halo, Round, 2 carat…) et « Back » / « Skip » (V).

## Contrôles vérifiés

Relevé automatique (27 contrôles visibles sur ordinateur, hors le constructeur lui-même, rendu en composant dont les cartes ne sont pas des boutons natifs) : consentement aux cookies, menu (Engagement Rings, Book Appointment, About Us, Contact Us), téléphone, e-mail, réseaux, Terms of Use, Privacy Policy, Map, Go to Top.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles jaune / blanc / rose | pastille | seule la jaune a été vue active ; les deux autres non cliquées (non testé) | aucun à ce stade | partiel |
| Solitaire, Halo, Cathedral | carte | passe à l'étape 2 (V) | aucun | fonctionne ; 6 autres cartes non testées une à une (I : même composant) |
| Start from scratch | carte | non testée | — | non testé |
| Natural / Lab Grown | bouton | Lab Grown et Natural cliqués, étape inchangée, bascule sans prix (V) | aucun | fonctionne |
| Round, Oval, Pear | carte | passe à l'étape 3 (V) | aucun | fonctionne ; 6 autres formes non testées |
| 1 carat, 2 carat, Decide later | carte | passe à l'étape 4 (V) | aucun | fonctionne ; autres valeurs non testées |
| Délais : 1 - 4 weeks, 1 - 3 months, Not sure yet | carte | lance « Applying your preferences... » puis l'appel `POST jeweleros.com/api/create/from-ring-config/` (V) | aucun | **ordinateur : « Something went wrong / Try again » (2 essais sur 2, bouton « Try again » renvoie à l'étape 1)** ; iPhone : réponse 200 (V) |
| Back / Skip | bouton | libellés relevés, non cliqués | — | non testé |
| Continue without saving | lien | referme l'écran de collecte et montre le dessinateur (V, iPhone) | — | fonctionne ; aucune donnée saisie |
| Save & Continue, champs nom / téléphone, case SMS | formulaire | non actionnés (règle : aucune donnée personnelle) | — | non testé |
| Metal (volet) | accordéon | déplie « Head & Band Color » : 14K White, 18K Yellow, 14K Rose + 14K Yellow Gold actif ; icône d'info (V, capture) | voir « Prix » | fonctionne |
| 18K Yellow (puce) | bouton | cliqué : la ligne de prix « MSRP $3,828 » disparaît (« Setting only » seul), l'image jaune reste (V, captures) | prix masqué | comportement ambigu (I : recalcul ou masquage) |
| Diamonds, Head, Band, More | accordéon | Diamonds cliqué : volet non lu ; Head, Band, More vus fermés, non ouverts | — | non testé |
| Add Wedding Band | bouton | non cliqué | — | non testé |
| Save ring, Save | bouton | non cliqués (enregistrement = coordonnées) ; sous le bouton : « You can purchase as is or craft a fully custom ring » (V) | — | non testé |
| Vue de l'anneau | image | le rendu change légèrement d'angle d'une capture à l'autre : rotation automatique (I) ; ni zoom, ni vidéo, ni AR, ni « sur la main » vus | — | non testé |
| Book Appointment, Contact Us, tél. (781) 326-8600, info@thediamondguild.com | lien | liens relevés ; page https://thediamondguild.com/schedule-now/ AUTORISÉE, non ouverte | — | non testé |
| Consent Preferences / Reject All / Accept All | bouton | « Reject All » cliqué ; le bandeau reste présent plus tard sur iPhone (V) | — | fonctionne |

Absents du site (V sur la page de départ et l'accueil) : panier, financement, partage, comparaison, guide des tailles, chat, WhatsApp, essayage à domicile, filtres de pierres.

## Options disponibles

- **Styles de départ (8 + libre)** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone.
- **Métal à l'étape de départ** : jaune, blanc, rose (3 pastilles). **Dans le dessinateur** : 14K Yellow (défaut), 14K White, 18K Yellow, 14K Rose (V) ; platine non vu.
- **Origine** : Natural, Lab Grown. **Formes** : 9. **Carats** : 0.5 à 5 (8 valeurs).
- **Délai souhaité** : 4 choix. **Mariage** : « Add Wedding Band » (dessinateur).

## Prix, délais, retours, garanties

- **Prix** : aucun prix pendant l'assistant. Dans le dessinateur : « MSRP $3,828 (Setting only) » pour la monture seule, pierre non comprise (V, iPhone, capture). Le prix change avec la configuration (I : 14K jaune cathédrale poire) ; l'effet d'un changement de métal n'a pas pu être lu (prix masqué après « 18K Yellow »).
- **Délai** : l'accueil annonce « ready for you in just a couple of weeks » (V, https://thediamondguild.com/). Le parcours demande un délai souhaité mais n'en affiche aucun.
- **Retours, garanties, livraison, financement** : introuvables. Les « Terms of Use » (mises à jour le 16/02/2021, V, https://thediamondguild.com/terms-of-use/) traitent des comptes et de la propriété intellectuelle, sans retour ni garantie.
- **Vente** : appointement obligatoire : on dessine en ligne, on choisit la pierre en salon, on finalise avec le bijoutier ; pas de paiement en ligne (V, accueil).
- **Certificats / libellé du synthétique** : « Lab Grown » ; aucun certificat vu.

## Confiance et service

- Magasin sur rendez-vous : 83 Morse Street, Suite 8AA, Norwood MA ; mardi, jeudi, vendredi 10 h à 17 h ; samedi selon calendrier (V, pied de page).
- Famille Karten, fabricant depuis 1945 (V, https://thediamondguild.com/about-us/).
- Avis : deux citations « Google Review » en page d'accueil ; pas de note globale ni de volume (V).
- Aucune photo ou vidéo d'atelier, aucun suivi de commande vu. Langue : anglais seul ; devise : dollar (V).

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 questions avant le dessinateur** (style, origine, forme, carat, délai), avec « Decide later » partout : réduit l'engagement initial. Preuve : https://thediamondguild.com/custom-ring-builder/ (étapes 1/4 à 4/4).
2. **Prix « MSRP » de la monture affiché dans le dessinateur**, avec la mention « Setting only » (pierre à part). Preuve : capture iPhone du dessinateur.
3. **Ouverture sur le dessinateur sans coordonnées** (« Continue without saving ») malgré l'écran de collecte. Preuve : parcours iPhone.
4. **Processus annoncé en trois temps** : dessiner en ligne, choisir la pierre en salon, finaliser (https://thediamondguild.com/). Proche du positionnement « l'atelier en direct ».
5. **Rendu de l'anneau détaillé** (griffes, pavé du jonc, rotation) dans le dessinateur : repère de qualité à égaler.

## Défauts observés

- **Dessinateur inaccessible sur ordinateur dans ce test** : « Something went wrong / Try again » après le dernier choix, sur 4 essais (V, capture) ; l'iPhone réussit (réponse 200). Cause inconnue (S : lié à l'environnement de test, par exemple WebGL absent).
- Aucun prix avant le dessinateur ; aucun délai affiché ; aucune politique de retour ni de garantie sur le site (V).
- Écran de collecte de coordonnées qui masque le produit ; la case SMS est décochée par défaut, le bouton principal est grisé (V).
- Prix « MSRP » qui disparaît après le choix d'un métal (V).
- Le panneau du dessinateur n'est pas lisible par texte : accessibilité faible (I, éléments invisibles au DOM principal).

## Limites de l'audit

- Dessinateur vu uniquement sur iPhone, volets Metal ouvert, les autres non ; vues 360°, zoom, AR, sur la main non trouvées.
- Aucun formulaire envoyé, aucun chat ouvert, panier inexistant. Chronométrage : cartes d'étape visibles en 1,7 s sur ordinateur (V) ; dessinateur visible environ 5 s après le dernier choix sur iPhone (mesure approximative) ; non mesuré avec précision sur ordinateur (échec).
- Plateforme de dessin JewelerOS : mêmes écrans que sur Sachs Jewelers (même assistant, I) ; contenu du dessinateur dépendant du prestataire.

## Sources

- https://thediamondguild.com/custom-ring-builder/ , https://thediamondguild.com/ , https://thediamondguild.com/about-us/ , https://thediamondguild.com/terms-of-use/ (pages lues et parcourues le 24/11/2026 pour l'audit du 15/11).
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/the-diamond-guild/ (hors dépôt).
