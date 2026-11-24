# Audit : Graham Jewelers (Wayzata et White Bear Lake, Minnesota)

- **Site** : Graham Jewelers, https://www.grahamjewelers.com/ (plateforme Punchmark)
- **Page de départ** : https://www.grahamjewelers.com/pages/custom-ring-builder
- **Date** : 15/11/2026 (mesures refaites le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. L'assistant en 4 étapes (JewelerOS) fonctionne, mais **le designer 3D qui suit n'a pas pu se charger** dans notre navigateur : « Something went wrong / Try again ». Panier : `robots.txt` interdit `*/cart` et `*/checkout` ; le panier n'a donc pas été ouvert et « Add to Cart » n'a pas été actionné. `Crawl-delay: 2` respecté (au moins 2 s entre pages).

Marquage : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Parcours

| Étape | Options |
| --- | --- |
| 1 sur 4 : style | Couleur d'or (jaune, blanc, rose) puis 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; ou « Start from scratch » [V] |
| 2 sur 4 : pierre centrale | Natural / Lab Grown ; formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » [V] |
| 3 sur 4 : taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; « Decide later » ; le texte précise qu'un poids exact se règle dans le designer [V] |
| 4 sur 4 : échéance | 1 à 4 semaines ; 1 à 3 mois ; 3 à 6 mois ; Not sure yet [V] |
| Après l'étape 4 | Chargement du « 3D Ring Designer » (jeweleros.com) : barre de progression puis « Something went wrong » + bouton « Try again » [V] |
| Autres entrées | « Start with the Ring » (`/ringsettings`), « Start with the Diamond » (`/ringsettings-diamonds`), « Browse Designer Rings » (`/jewelry/engagement-rings`) [V] |
| Commande | Fiche bague : « Add to Cart » ou « Drop a Hint » ; panier non ouvert (interdit) [V pour les boutons] |

## Contrôles vérifiés

Page de départ : 114 contrôles (ordinateur), 44 (iPhone). L'assistant est un élément `ring-walkthrough` sans iframe.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Boutons de métal (jaune, blanc, rose) | boutons `jos-metal-btn` | Actionnés : l'or blanc remplace les vignettes par des images blanches (`solitaire_white.webp`) ; jaune actif par défaut [V] | aucun | fonctionnent |
| 8 styles + « Start from scratch » | cartes | Actionné Solitaire (et Halo en test séparé) : passe à l'étape 2 [V] | aucun | fonctionnent |
| Natural / Lab Grown | bascule | Natural actif par défaut ; clic sur Lab Grown : « Lab Grown » actif (iPhone) [V] | aucun | fonctionne |
| 9 formes de pierre | cartes | Actionné Oval et Round : passe à l'étape 3 ; icônes SVG par forme [V] | aucun | fonctionnent |
| 8 poids en carats | cartes | Actionné 1,5 carat : passe à l'étape 4 [V] | aucun | fonctionne |
| « Decide later » (étapes 2 et 3) | bouton | Actionné à l'étape 3 : saute à l'étape suivante [V] | – | fonctionne |
| Échéance (4 choix) | cartes | Actionné « 1 - 3 months » : lance le designer 3D, puis erreur [V] | – | **échec** (voir défauts) |
| Back / Skip | boutons | Présents à chaque étape ; non actionnés | – | non testés |
| Bannière cookies : Decline all / Accept all / manage | boutons | « Decline all cookies » actionné ; la page se recharge (deux navigations observées) [V] | – | fonctionne |
| Menu : Bridal, Diamonds, Collections (13 marques), All Jewelry, Education, Our Store, Services | liens | Relevés ; 4 pages suivies (ci-dessous) [V] | – | relevés |
| Recherche (`kw`) | champ | Non actionnée (`*?kw=` interdit par robots.txt) | – | non testée, interdite |
| `/ringsettings` : onglets Styles (Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass), métal (4), prix min/max, « Can be set with », tri, Clear Filters | liens `javascript:` / champs | Page chargée en 619 ms mais « 0 settings found. We're sorry. There are no settings that match your criteria. » ; clic sur White Gold et Halo : expiration (éléments non cliquables) [V] | – | **catalogue vide** |
| `/ringsettings-diamonds` | page | Étapes « Choose Diamond / Choose Setting / Complete Ring (not available yet) / Review Your Ring » ; Natural / Lab-Grown ; filtres : forme (10), prix, carat, cut (Fair à Excellent), couleur (D à L), pureté (SI2 à F), avancé ; « There are no diamonds selected to compare » [V] | – | page lue ; résultats non vus |
| `/jewelry/engagement-rings` | page | « 113 product(s) found » ; filtres : sous-catégorie, prix (7 tranches), marque, matière (8), pierre, forme (4), genre ; tri Featured/High to Low/Low to High/Newest [V] | prix par fiche | page lue |
| Tri par `?sortSpec=` | select | Non actionné : adresse interdite par robots.txt | – | non testé |
| Fiche (estate 14 k solitaire) : Add to Cart | bouton | Non actionné (panier interdit) | affichage 4 × 248,75 $ | non testé, interdit |
| Fiche : Drop a Hint / My Wish List | boutons | Non actionnés (envoient des données) | – | non testés |
| Fiche : « For Live Assistance Call (952) 473-6931 » | texte | Affiché | – | non testé |
| Chat (webchat.clientbook.com) | iframe | Charge en arrière-plan ; non ouvert | – | non testé |
| Financement : lien Wells Fargo | page | Page lue ; demande en ligne via image cliquable ; non suivie | – | page lue |
| Zoom, 360°, AR, vidéo, essayage à domicile | – | Non relevés sur les pages lues | – | absents / non vus |

## Options disponibles

- **Style (assistant)** : solitaire, halo, hidden halo, bezel, cathedral, full pavé, toi et moi, trois pierres, ou départ de zéro [V].
- **Métal (assistant)** : jaune, blanc, rose ; pas de titre (14 k / 18 k) ni de platine dans l'assistant ; matières du catalogue : 14 k blanc, jaune, rose-blanc, rose ; 18 k blanc, jaune ; 24 k blanc ; platine [V].
- **Pierre** : naturelle ou synthétique (« Lab Grown ») ; 9 formes ; poids 0,5 à 5 ct ; certificat et autres filtres seulement dans la recherche de diamants [V].
- **Délai souhaité** : 4 choix [V].
- **Taille de doigt, gravure, griffes, pavage** : non proposés dans l'assistant ; supposés dans le designer 3D non chargé [S].
- **Sur mesure** : conception par un orfèvre, dessin ou rendu informatique, cire, coulée ; 3 à 4 semaines [V, `/services/custom-designs`].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans l'assistant. Catalogue : prix par fiche (ex. 3 000 à 6 100 $ pour des bagues en stock, listes lues sur `/jewelry/engagement-rings`) [V]. Fiche estate : « or 4 interest-free payments of $248.75 » [V] (soit environ 995 $, [I]).
- **Délai** : « The entire process takes three to four weeks » (sur mesure) ; stock : « Ships Tomorrow (cutoff time was 4:00 pm EST) » [V].
- **Retours** : 15 jours pour retourner, 30 jours pour échanger un défaut ; **« Personalized or custom pieces are not eligible for returns »** ; mise à taille et améliorations de diamant classées « custom » ; pierres « sold as-is » ; cadeaux sans reçu : avoir seulement ; remboursement sous 7 à 10 jours ouvrés ; retour à vos frais [V, `/return-policy`].
- **Garanties** (en vigueur le 12/10/2026) : maintenance à vie gratuite et garantie de 5 ans sur le neuf ; fiançailles : plus la « Preferred Jewelers Lifetime Warranty » (inspections tous les 6 mois) ; sur mesure : refonte gratuite sous 30 jours ; mise à taille : gratuite si la taille mesurée est fausse, 30 jours ; réparations 1 an [V, `/pages/warranties`].
- **Garantie de la conception** : une refonte complète, puis avoir pour une deuxième [V].
- **Financement** : Wells Fargo (conditions non affichées, « contact us ») ; fractionnement en 4 paiements sans intérêt sur fiche [V].
- **Moyens de paiement, livraison** : non affichés sur les pages lues [S].

## Confiance et service

- **Preuves de fabrication** : atelier de conception et de réparation sur place ; « accredited gemological laboratory » ; pas de photos ni vidéos de fabrication proposées sur les pages lues [V].
- **Avis** : page « Store Reviews » (`/testimonials`) présente dans le menu ; non lue [V pour le lien]. Médaille « Best of '22 » en pied de page [V].
- **Service** : deux boutiques (Wayzata, White Bear Lake), téléphone, chat, rendez-vous, liste de souhaits, « Drop a Hint », assurance bijoux (Zillion), suivi des réparations [V].
- **Langues, devises** : anglais, dollars [V].
- **Libellé synthétique** : « Lab Grown » / « Lab-Grown », avec lien « What's the difference? » [V].

## Points forts à retenir pour JR Diamond

1. **Assistant de démarrage en 4 questions** (style, pierre, taille, échéance) qui prépare le designer : l'entrée est rapide, avec « Decide later » à chaque étape (`/pages/custom-ring-builder`). [V]
2. **Bascule « Natural / Lab Grown » dès l'étape de pierre**, avant le carat. [V]
3. **Question « When do you need your ring? »** : le délai est traité comme un critère de choix dès l'entrée. [V]
4. **Garanties publiées dans un tableau** (maintenance à vie, 5 ans, refonte 30 jours, mise à taille 30 jours), avec date d'entrée en vigueur (`/pages/warranties`). [V]
5. **Image/étape visible en 3,8 s (iPhone) et 4,2 s (ordinateur)** pour le premier écran de l'assistant, sans compte : l'engagement est léger. [V mesure]
6. **Fractionnement en 4 paiements sans intérêt et financement affichés sur la fiche.** [V]

## Défauts observés

- **Designer 3D non chargé** dans notre navigateur : « Something went wrong » + « Try again » après le dernier choix. En console : les requêtes vers `jeweleros.com/api/config/…` et `api/create/from-ring-config/` sont bloquées par la politique CORS. La cause (réseau de notre bac à sable ou site) n'est pas déterminée. [V pour l'erreur ; cause S]
- **Nombre d'étapes changeant** : « Step 2 of 4 » sur ordinateur, « Step 2 of 5 » et « Step 4 of 5 » en affichage iPhone avec le même parcours Solitaire. [V]
- **Catalogue `/ringsettings` vide** : « 0 settings found » ; filtres non cliquables. [V]
- **Aucun prix, aucun poids de pierre exact, aucune estimation** dans l'assistant. [V]
- **Pas de titre d'or ni de platine dans l'assistant** ; métal limité à trois teintes. [V]
- **Sur mesure non remboursable**, mise à taille et améliorations comprises. [V]
- Bannière de cookies : le refus recharge la page. [V]

## Limites de l'audit

- Designer 3D, prix du designer, taille de doigt, gravure, vues 3D/AR/sur la main : non vus (échec de chargement).
- Panier, paiement et livraison : non atteints ; `*/cart` et `*/checkout` interdits par `robots.txt`. « Add to Cart » non actionné.
- Recherche et tri par adresse (`?kw=`, `?sortSpec=`) interdits : non testés. Chat, « Drop a Hint », rendez-vous, liste de souhaits non utilisés.
- Avis (`/testimonials`) et pages d'éducation non lus ; résultats de `/ringsettings-diamonds` non vus.
- Mesure : une mesure par appareil, via proxy.

## Sources

- https://www.grahamjewelers.com/pages/custom-ring-builder
- https://www.grahamjewelers.com/ringsettings ; /ringsettings-diamonds ; /jewelry/engagement-rings
- https://www.grahamjewelers.com/jewelry-details/diamond-engagement-rings/estate-14kw-45ct-diamond-solitaire-ring/831431
- https://www.grahamjewelers.com/return-policy ; /pages/warranties ; /pages/financing ; /services/custom-designs ; /pages/custom-engagement-rings
- https://www.grahamjewelers.com/robots.txt (consulté ; `Crawl-delay: 2`, panier interdit)
