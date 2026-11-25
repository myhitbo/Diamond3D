# Audit : Stelios Jewellers (Mount Hawthorn, Perth, Western Australia)

- **Site** : Stelios Jewellery Pty Ltd, ABN 94 168 937 988
- **Adresse** : https://www.stelios.com.au/ ; page de départ : https://www.stelios.com.au/bespoke-ring-builder/
- **Date** : 15/11/2026 (date fixée par la consigne ; contrôles faits le 25/11/2026 d'après l'horloge de la session)
- **Appareils** : Chromium sur ordinateur (1366 x 900) ; affichage iPhone 13 (émulé)
- **Statut** : **partiel**. Le constructeur est une application tierce intégrée en iframe (`main.di1xsemah3mhv.amplifyapp.com`), qui appelle une API (`steliosjapi.tcctechno.com`) dont le robots.txt n'est pas lisible (HTTP 502, classée INCONNU par l'outil de contrôle). Par prudence, **aucun contrôle du constructeur n'a été cliqué** ; l'état affiché au chargement a été relevé. Le site de vente n'a ni prix ni panier (voir plus bas).
- Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) ; **[I]** inféré ; **[S]** supposé.

## Parcours

| Étape | Options observées | Source |
|---|---|---|
| Page « Custom Engagement Rings Perth » | Texte d'introduction, constructeur en iframe (1200 x 750 sur ordinateur, 330 x 750 sur iPhone), puis explication du processus en 4 étapes et FAQ | [V] https://www.stelios.com.au/bespoke-ring-builder/ |
| Constructeur (état au chargement) | Pierre centrale : Diamond / Gemstone ; type : Natural / Lab Grown ; forme, taille, couleur, pureté, tête, corps, pavage latéral, métal, bande (aucune / alliance assortie), taille de doigt, gravure (polices), bouton « Enquire Now » ; panneau « Product Preview » avec récapitulatif (poids de pierre, livraison, politique de remboursement) | [V] iframe, texte relevé |
| Processus annoncé par le site | 1. constructeur ; 2. consultation (en atelier à Mt Hawthorn ou en visio, pièces de référence envoyées par la poste) ; 3. rendu 3D CAO + prototype en argent ou résine à essayer ; 4. fonte, sertissage, polissage, poinçon | [V] même page (texte du site) |
| Catalogue | /engagement-rings/ (une cinquantaine de bagues, « Size Guide »), /lab-grown-diamonds/ (12 bagues synthétiques), /wedding-bands/ ; fiches **sans prix** | [V] pages lues |
| Fiche produit | Description (ex. 1,01 ct rond G SI1 IGI), « This ring can be crafted in Platinum, 18ct Yellow, White or Rose Gold », bouton « Enquire Now » ; pas de bouton d'ajout au panier | [V] /lab-grown-diamonds/18ct-white-gold-lab-grown-diamond-solitaire-ring/ |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu (Home, Our Story, Jewellery, Engagement, Wedding Bands, Diamonds, Pearls, Investment Stones, Lab Grown Diamonds) | liens | Pages statiques WordPress ; 42 contrôles relevés sur ordinateur, 26 sur iPhone [V] controls.cjs | aucun | liens présents |
| « Contact Us » / « 08 9481 0548 » (en-tête) | lien / `tel:` | Page de contact ; appel téléphonique. Non cliqués | — | présents |
| Widget « Text us » (Podium) | bouton | Bulle « Hi there, have a question? Text us here. » ; **non ouvert** (consigne : ne pas ouvrir de chat) | — | non testé |
| Iframe du constructeur | application tierce | Se charge, affiche les commandes ci-dessous, **mais les listes dépendantes restent vides** (voir « Défauts ») | — | dégradé |
| Diamond / Gemstone | boutons (iframe) | Présents, « Diamond » actif ; **non cliqués** (appels à l'API tierce non vérifiable) | inconnu | non testé |
| Natural / Lab Grown | boutons (iframe) | Présents, « Natural » actif ; note « Side stone are always Natural » dans l'aperçu ; **non cliqués** | inconnu | non testé |
| Center Stone Shape, Size, Stone Color, Stone Clarity (« Select ») | listes (iframe) | Forme et taille **vides** ; couleur et pureté : listes « Select » sans contenu observable | inconnu | non testé |
| Ring Head, Ring Shank, Ring Side Setting | sélecteurs (iframe) | **Vides** au chargement | inconnu | non testé |
| Metal | affichage (iframe) | « Metal: undefinedK » | inconnu | défaut visible |
| Band : « No Band » / « Matching Band » | boutons (iframe) | Présents ; non cliqués | inconnu | non testé |
| Ring Size « Select » | liste (iframe) | Présente ; non ouverte | — | non testé |
| Personalised Engraving (3 polices « abcdefghijklmnopqrstuvwxyz ») + champ texte | boutons + champ | Présents ; **aucune saisie** | inconnu | non testé |
| « Enquire Now » (iframe) | bouton | Présent ; **non cliqué** (envoie une demande, formulaire) | — | non testé |
| Panneau « Product Preview » | affichage | « Center Stone Size : undefined Ct », « Stone Quality : undefined - undefined », « Center Stone Weight : 0.00 Ct. » ; aperçu 3D (canvas) **vide** sur capture | aucun | défaut visible |
| « Delivery » / « Refund Policy » (iframe) | liens | Présents, non ouverts | — | non testé |
| Vidéos YouTube intégrées (2) | lecteurs | Lecture automatique déclarée dans l'adresse (`autoplay=1`) ; non cliquées | — | présentes |
| « Enquire Now » (fiche produit) | bouton | Ouvre un formulaire de contact ; **non rempli** | — | non testé |
| « Size Guide » (page bagues de fiançailles) | lien | Présent ; non ouvert | — | non testé |
| Formulaire de contact Contact Form 7 + reCAPTCHA invisible | formulaire | Présent (nom, téléphone, e-mail) mais masqué ; **non rempli** | — | non testé |
| Panier, paiement, ajout au panier | — | Aucun bouton d'ajout au panier sur les fiches lues ; robots.txt interdit `/cart/`, `/checkout/`, `/my-account/` et `*add-to-cart=*` : **non ouverts** | — | absent / interdit |
| Comparer, essayage AR, essayage à domicile, financement, partage | — | Absents des pages lues [V] | — | absents |

## Options disponibles

- **Métaux** : platine, or jaune, or rose, or blanc ; fiches « 18ct ». Pas d'or 14 carats observé ; le titre exact des autres bagues non relevé [V] /bespoke-ring-builder/, fiches.
- **Pierres** : diamants naturels, synthétiques (« Lab Grown », IGI sur la fiche vue), moissanite, saphir, émeraude, tsavorite, spinelle, pierres de couleur (rose, champagne, jaune), perles des mers du Sud [V] textes du site.
- **Formes (d'après le catalogue)** : rond, ovale, poire, coussin, émeraude, princesse, marquise, radiant (noms de produits) ; le sélecteur de formes du constructeur est resté vide [V pour les noms, non vérifié dans l'outil].
- **Structures** : solitaire, halo, trois pierres, grappes vintage, alliances assorties, bagues avec pierre de famille [V].
- **Pierre du client** : bague construite autour d'un diamant ou d'une pierre déjà possédée (bijou de famille) [V] texte du site.
- **Taille** : tailles australiennes standard ; mesure en atelier ; gabarit imprimable ou pièces de référence envoyés [V] FAQ.
- **Langues** : anglais seulement. **Devise** : non affichée (aucun prix) [V].

## Prix, délais, retours, garanties

- **Affichage du prix** : **aucun prix en ligne** ; fiches : « Prices will vary depending on stone size and specifications. Please visit our showroom… » [V] fiche solitaire synthétique. Le constructeur ne montre aucun montant à l'état chargé [V].
- **Acompte** : jusqu'à 30 % non remboursable pour une commande sur mesure ; devis valable 7 jours ; paiement intégral avant livraison ou retrait [V] /terms-and-conditions/ (articles 2.1 à 2.5).
- **Délai** : 4 à 6 semaines entre la validation finale et le retrait ; certaines pièces plus longues ; « si vous avez une date de demande en mariage, nous pouvons souvent aller plus vite » [V] /bespoke-ring-builder/ (texte du site). Autre formulation : « about four to six weeks » dans la FAQ [V].
- **Retours** : **pas de retour pour changement d'avis, y compris sur mesure** ; commandes sur mesure non remboursables et non annulables une fois confirmées ; garanties légales australiennes (remboursement ou remplacement pour défaut majeur) ; frais de retour postal remboursés en cas de défaut du vendeur [V] /terms-and-conditions/ (7.1 à 8.3).
- **Garantie** : « lifetime warranty on craftsmanship » pour les bijoux sur mesure (défauts de fabrication, soudure, sertissage) ; exclusions (usure, perte de pierre, griffes usées, oxydation) ; examen en magasin obligatoire ; preuve d'achat exigée [V] /terms-and-conditions/ (6.1 à 6.5).
- **Pierres fournies par le client** : aucune responsabilité du bijoutier pour défauts préexistants, casse au sertissage ; objets non récupérés après 90 jours : frais ou élimination [V] (4.1, 4.2).
- **Livraison** : « livrée à l'adresse indiquée ou retirée en magasin » ; frais à la charge du client ; aucun tarif affiché [V] /terms-and-conditions/ (2.2, 5.3).
- **Moyens de paiement** : non affichés (pas de panier) ; logos de partenaires (Wedshed, Style Me Pretty, GIA, Jewellers Association of Australia, QReport) en pied de page [V capture].

## Confiance et service

- **Certification** : « Every diamond we set is GIA certified, or certified by an equivalent independent laboratory » ; papiers remis au retrait [V] texte du site (affirmation du site). Fiche synthétique : IGI [V].
- **Libellé du synthétique** : « Lab Grown Diamonds » [V]. Le site affirme jusqu'à « 70 % » moins cher qu'un naturel et mentionne le risque de dévaluation par saturation [V] /lab-grown-diamonds/.
- **Fabrication** : « designed, cut, set and polished by hand in Mt Hawthorn » ; fabrication entièrement en Australie ; CAO 3D avec rendu sur main à l'échelle ; prototype en argent ou résine à essayer un ou deux jours, ajustements gratuits avant fonte [V] texte de /bespoke-ring-builder/. Deux vidéos YouTube intégrées (contenu non regardé, [S] vidéos d'atelier).
- **Entreprise** : fondée en 2007 par Stelios Palioudakis ; membre de la Jewellers Association of Australia ; partenaire QReport pour l'assurance [V] textes du site.
- **Contact** : atelier-boutique 145 Scarborough Beach Rd, Mt Hawthorn WA ; lundi-vendredi 9 h 30-17 h, samedi 9 h 30-16 h ; téléphone 08 9481 0548 ; e-mail admin@steliosjewellers.com.au ; SMS via widget ; consultation en visio [V].
- **Avis clients** : aucun avis chiffré ni témoignage relevé sur les pages ouvertes [V].
- **Suivi de commande** : non annoncé [V].

## Points forts à retenir pour JR Diamond

1. **Prototype en argent ou résine à essayer avant fonte, ajustements gratuits à ce stade** : réponse directe à « bijou reçu différent de la CAO ». Preuve : « Step 3: 3D Visualisation And Silver Try-On », /bespoke-ring-builder/.
2. **Rendu de la bague sur une main à l'échelle** pour les proportions. Preuve : même passage.
3. **Page pédagogique honnête sur le sur-mesure** : dit quand il ne convient pas (« a ready-to-wear piece may suit you better »), traite pierre de famille, pierre apportée, consultation en visio. Preuve : /bespoke-ring-builder/.
4. **Garantie de fabrication à vie écrite** dans les conditions, avec exclusions listées. Preuve : /terms-and-conditions/ art. 6.
5. **Débat naturel contre synthétique sans parti pris** (avantages, risque de dévaluation du synthétique) : bon modèle de ton pour JR Diamond. Preuve : /lab-grown-diamonds/.

## Défauts observés

- **Constructeur inutilisable dans cet audit** : forme, taille, tête, corps, pavage, taille de doigt vides ; « Metal: undefinedK », « Center Stone Size : undefined Ct », « 0.00 Ct. », aperçu vide. Les appels vers `steliosjapi.tcctechno.com` (config-select, companyinfo) ont échoué dans le navigateur de l'audit ; un fichier de décodage 3D hébergé sur jsDelivr a répondu 404. Cause **non déterminée** : panne de l'API (son robots.txt répond 502 [V]), blocage par le proxy de la session [S] ou chargement incomplet. À revérifier depuis un autre réseau [V pour les symptômes, S pour la cause].
- **Page d'accueil de l'application tierce** : l'adresse racine de l'iframe, ouverte seule, est une page 404 « Looks like you are lost » dont le texte par défaut mentionne d'autres boutiques (données de gabarit : « Orchid Plaza… », « nungu-diamonds »), ce qui montre un modèle générique de la société TCC Technology [V].
- **Aucun prix, aucun panier** : impossible d'acheter ou de chiffrer en ligne ; tout passe par l'atelier [V].
- **Aucune décomposition ni estimation de prix** dans le constructeur à l'état chargé [V].
- **Pas de retour même pour changement d'avis sur le sur-mesure**, sans délai de réflexion mentionné ; acompte jusqu'à 30 % non remboursable [V].
- **Chargement lent** : texte de l'iframe disponible environ 8,9 s (ordinateur) et 7,4 s (iPhone) après l'ouverture ; `domcontentloaded` de la page à 13 s sur ordinateur (une mesure) [V].
- **Un widget de chat flottant masque une partie du texte** sur ordinateur [V capture].

## Mesures du temps d'apparition du visuel principal

| Appareil | Mesure | Résultat |
|---|---|---|
| Ordinateur | iframe du constructeur présente dans le DOM | 7,6 s |
| Ordinateur | texte et commandes de l'iframe visibles | 8,9 s |
| iPhone 13 (émulé) | iframe dans le DOM / commandes visibles | 6,3 s / 7,4 s |
| Les deux | aperçu 3D (canvas) | élément présent mais **vide** à l'état chargé ; aucune image de bague affichée |

Mesures uniques, proxy de la session, valeurs indicatives.

## Limites de l'audit

- **Constructeur non actionné** : aucune option cliquée (API tierce au robots.txt illisible, classée INCONNU : arrêt avant tout clic). L'effet sur le prix et sur l'image de chaque option est donc **non observé** ; le site n'affiche d'ailleurs aucun prix.
- Aucune demande « Enquire Now » envoyée, aucun formulaire rempli, chat non ouvert, vidéos YouTube non lues.
- Un seul produit de bague ouvert (solitaire synthétique 1,01 ct) ; prix du catalogue : aucun affiché sur les pages lues.
- Panier, commande, compte : interdits par robots.txt, non ouverts. Panier : **absent / interdit**.
- Le constructeur est peut-être fonctionnel hors du réseau de l'audit ; cette hypothèse n'a pas pu être vérifiée.
- Date nominale 15/11/2026 ; contrôles du 25/11/2026.

## Sources

- https://www.stelios.com.au/bespoke-ring-builder/ (page, texte, 42 contrôles, captures)
- https://main.di1xsemah3mhv.amplifyapp.com/ (iframe du constructeur ; robots.txt : aucun, autorisé)
- https://www.stelios.com.au/engagement-rings/ ; https://www.stelios.com.au/lab-grown-diamonds/ ; https://www.stelios.com.au/lab-grown-diamonds/18ct-white-gold-lab-grown-diamond-solitaire-ring/
- https://www.stelios.com.au/terms-and-conditions/
- https://www.stelios.com.au/robots.txt (`Disallow: /cart/`, `/checkout/`, `/my-account/`, `/*add-to-cart=*`)
- https://steliosjapi.tcctechno.com/ : robots.txt illisible (HTTP 502), non ouvert au clic
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/stelios-jewellers/`
