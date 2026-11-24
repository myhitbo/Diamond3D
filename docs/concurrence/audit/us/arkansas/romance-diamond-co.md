# Audit : Romance Diamond Co. (Fayetteville et Rogers, Arkansas)

- **Site** : Romance Diamond Co. Jewelers, https://romancediamond.com/ (boutique en ligne séparée : https://shop.romancediamond.com/)
- **Page de départ auditée** : https://romancediamond.com/design-your-ring/
- **Date** : 15/11/2026 (contrôle de robots.txt avant chaque adresse : tout AUTORISÉ, sauf les adresses `/api/` de jeweleros.com, jamais ouvertes par l'auditeur)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. L'assistant de départ (5 étapes) a été parcouru ; **le concepteur 3D lui-même n'a pas pu être vu** (voir « Défauts » et « Limites »). La boutique en ligne et le constructeur d'alliances ont été lus.
- Repères : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifiées sur ordinateur) |
| --- | --- |
| 1. Style de départ | 3 pastilles de métal (or jaune, or blanc, or rose) puis 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » ; « Skip » |
| 2. Pierre centrale | Bascule Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3. Taille de la pierre | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later » (texte : le carat exact se règle ensuite dans le concepteur 3D) |
| 4. Délai souhaité | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| 5. Boutique préférée (vue seulement en affichage iPhone) | Liste « Arkansas, 2 stores » (déroulant), « Decide later » ; « Step 5 of 5 » |
| 6. Concepteur 3D « 3D Ring Designer » | **Non vu** : sur ordinateur, après l'étape 4, écran de chargement puis « Something went wrong / Try again » ; en iPhone, arrêt volontaire à l'étape 5 (le suivant demande vraisemblablement des coordonnées, voir Limites) |

Chaque étape affiche en haut un historique des choix (pastilles) et un bouton retour.

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastille Yellow / White / Rose Gold (étape 1) | bouton (swatch) | Sélectionne le métal ; pastille active cerclée. Les images des styles sont affichées en or jaune [V : capture] ; le changement de couleur des images n'a pas été contrôlé | aucun | fonctionne (clic accepté) |
| Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | Passe à l'étape 2 en ajoutant une pastille d'historique | aucun | fonctionne (Solitaire, Halo testés ; les autres cartes non cliquées une à une) |
| Start from scratch | carte | Non cliqué | — | non testé (même mécanisme présumé [S]) |
| Skip / Back | bouton | Présents à chaque étape ; non actionnés | — | non testés |
| Natural / Lab Grown | bascule | Cliquées ; l'écran reste à l'étape 2, aucun changement visible de la liste des formes | aucun | fonctionne, effet visuel nul à ce stade |
| 9 formes de pierre | carte | Marquise, Oval, Round cliquées : passe à l'étape 3 | aucun | fonctionne ; Cushion, Emerald, Princess, Asscher, Pear, Radiant non cliquées |
| 8 tailles de carats | carte | 0.5 et 1 cliqué : passe à l'étape 4 | aucun | fonctionne ; les 6 autres non cliquées |
| Délai (4 cartes) | carte | « 1 - 4 weeks » cliqué : écran de chargement du concepteur | aucun | fonctionne ; les 3 autres non cliquées |
| Decide later (étapes 2, 3, 5) | bouton | Non actionné | — | non testé |
| Try again (écran d'erreur, ordinateur) | bouton | Présent ; **non cliqué** (pour ne pas insister sur un service qui refuse) | — | non testé |
| Menu : About, Fayetteville, Rogers, Book an Appointment (`/#jos-book-appointment`), Visit us on Dickson Street, Design Your Custom Ring Online | lien | Liens lus ; adresses valides | — | lus, non ouverts sauf ceux cités plus bas |
| Menu principal : About Us, Wedding & Engagement, Designers (dont Tag Heuer), Fine Jewelry, Services, Community & Events | lien | Pages `wedding-bands`, `about-us`, `custom-jewelry-design`, `terms-of-service`, `fayetteville` répondent 200 | — | fonctionnent |
| Pied de page : Engagement, Wedding, Rings, Necklaces, Earrings, Bracelets, Pendants | lien | Vers la boutique shop.romancediamond.com (collections) ; « Engagement » ouverte | — | fonctionne |
| Pied de page : Anniversary, Holidays | lien | Mènent à `/products/gift-card` : **page 404** « That page can't be found » | — | **lien mort** |
| Boutique : tri (liste) | liste | 8 options : Featured, Name asc/desc, Date asc/desc, Price asc/desc, Best Selling ; non actionnée | — | non testée |
| Boutique : vues grille (3 boutons), tri | bouton | Non actionnés | — | non testés |
| Boutique : fenêtre « Get 5% OFF your online purchase » | fenêtre | Apparaît à l'arrivée ; champ e-mail + « Claim discount » (non rempli), « No, thanks » (cliqué, ferme) | −5 % annoncé en échange d'un e-mail | fonctionne |
| Boutique : fiche d'une bague (Fana, Classic Round Cut Solitaire) | page | Boutons Previous / Next, formulaire e-mail du pied de page ; **ni prix, ni ajout au panier** : « Please contact us if you are interested in this product » | non affiché | fonctionne |
| Bandeau de la boutique | texte | « For updated pricing, please call the store at (479) 443-9289 » | — | lu |
| Panier (shop.romancediamond.com/cart) | page | « SHOPPING CART IS EMPTY » ; aucun article ajoutable | — | fonctionne (vide) |
| Alliances : « Create a Custom Wedding Band Online » (`#custom`) | lien/iframe | Charge un constructeur tiers Benchmark en iframe (voir Options) | 2 050 $ affichés (réglage par défaut) | fonctionne ; **non exploré à l'intérieur** |
| Téléphone, e-mail, Facebook, Instagram, X | lien | Lus, non ouverts | — | non testés |
| Chat, WhatsApp, essayage à domicile, comparer, partager la configuration, enregistrer | — | Aucun contrôle de ce type relevé dans l'assistant ni dans la boutique | — | absents |

## Options disponibles

- **Assistant JewelerOS** : métaux or jaune / blanc / rose (pas de platine proposé à l'étape 1 [V]) ; 8 styles ; pierre naturelle ou synthétique (« Lab Grown ») ; 9 formes ; 8 carats ; 4 délais ; choix de boutique (2 en Arkansas). Les autres réglages (monture, griffes, pavage, taille du doigt, gravure) sont annoncés comme « ring designer 3D » (texte de la page « entièrement personnalisable ») mais non vérifiés.
- **Constructeur d'alliances Benchmark** (iframe `customizer.benchmarkrings.com`) : onglets Customize, Compare, Explore, Item # Search ; réglages Edge Material (14K Yellow par défaut), Center Material, Width (6 mm), Finger Size (8), Gemstones, Engraving (None) ; profil « Euro Dome Comfort Fit » ; finitions (Polish, Satin, Cross Satin, Swirl…), motifs (Satin Hammer, Wheat Weave…), thèmes (Nature, Celtic, Americana, Faith, Inlays carbone…) ; boutons Reset, Undo, Redo, Favorite, Review. Prix affiché : **2 050 $** (réglage par défaut). [V]
- **Boutique** : 20 bagues listées (marques Fana et modèles « Classic Halo… »), certaines images absentes (« No image ») ; tri ; pas de filtres.

## Prix, délais, retours, garanties

- **Prix** : aucun prix sur la fiche de bague de la boutique ni dans l'assistant ; bandeau « appelez pour les prix actualisés » [V]. Seul prix lu : 2 050 $ dans le constructeur d'alliances (iframe) [V]. Aucune décomposition du prix.
- **Délai** : « most custom pieces take 4-6 weeks from consultation to completion » (page Custom Jewelry Design) [V] ; l'assistant propose des souhaits de 1 à 4 semaines à plus de 3 mois, sans engagement.
- **Retours** : FAQ de la page Wedding Bands (rubrique collée par erreur « Necklaces & Pendants FAQs ») : retour ou échange sous 30 jours si non porté ; « Custom pieces are non-returnable » [V]. Pas de politique de retour dédiée aux bagues de fiançailles lue.
- **Garantie, certificat** : non relevés dans les pages lues ; « conflict-free diamonds » seulement (page design sur mesure) [V].
- **Livraison, paiement** : non relevés (panier vide) ; retrait « curbside pickup » commandé en ligne ou par téléphone (page About) [V].
- **Remise** : 5 % contre e-mail (boutique) [V].

## Confiance et service

- Entreprise familiale « Brosh Family … serving Arkansas since 1944 », ouverte en 1996 sur la place de Fayetteville, rue Dickson depuis 2003 [V, page About]. Deux boutiques (Fayetteville, Rogers « by appointment only »).
- Prise de rendez-vous (ancre `#jos-book-appointment`), téléphone (479) 443-9289, e-mail.
- Processus sur mesure annoncé : consultation, rendu numérique ou modèle 3D, choix des matériaux, fabrication, présentation finale [V]. Aucune photo ou vidéo de fabrication ni suivi de commande relevé.
- Avis clients : rubrique « REVIEWS » vide sur la fiche lue ; aucun avis lu [V].
- Conditions SMS : le « ring builder » propose une case de consentement SMS et la saisie d'un téléphone (messages sur les « saved configurations ») [V, terms-of-service] : collecte de contact intégrée au concepteur.
- Langue : anglais ; devise : dollar ; livraison États-Unis (supposé [S]).

## Points forts à retenir pour JR Diamond

1. **Assistant d'entrée en 4 à 5 étapes très court** (style, pierre, carat, délai, boutique) avec « Decide later » partout et historique en pastilles : abaisse la barrière d'entrée (preuve : capture et textes `design-your-ring`, 15/11). 
2. **Question « quand en avez-vous besoin ? »** : capte le délai souhaité avant le devis ; JR Diamond annonce 14 jours ouvrés, il peut en faire un argument (preuve : étape 4).
3. **Bascule Natural / Lab Grown dès l'étape de la pierre** (preuve : étape 2), même placement que dans le configurateur de JR Diamond.
4. **Constructeur d'alliances intégré à la page** avec prix immédiat (2 050 $) et motifs de gravure/finitions détaillés (preuve : iframe Benchmark lue).
5. **Fenêtre de remise de 5 % contre e-mail** : mécanisme de capture simple (preuve : boutique).

## Défauts observés

1. **Concepteur 3D inaccessible sur ordinateur** : après l'étape 4, « Something went wrong / Try again » en 20 s ; la console indique que les appels du script JewelerOS vers `jeweleros.com/api/…` sont bloqués par la politique CORS (pas d'en-tête `Access-Control-Allow-Origin`) [V, console]. Cause exacte non établie (le site ou l'environnement de test) [I].
2. **Comportement différent selon l'appareil** : 4 étapes sur ordinateur, 5 étapes (choix de boutique) en affichage iPhone [V] ; incohérence, ou configuration chargée différemment [I].
3. **Aucun prix** sur les bagues de fiançailles, en ligne comme dans l'assistant : « appelez le magasin » [V].
4. **Lien mort** : « Anniversary » et « Holidays » mènent à une page 404 (gift-card) [V].
5. **Fiches sans image et sans description utile** : une vignette « No image » dans la liste ; fiche réduite à une phrase [V].
6. **FAQ de la page Wedding Bands copiée d'une autre catégorie** (« Necklaces & Pendants FAQs ») [V].
7. Pied de page : « ©2025 » sur la boutique, « ©2026 » sur le site : deux sites distincts, deux styles (assistant gris, boutique Shopify bleue) [V].
8. Le visuel d'ouverture est une page de choix (images de bagues 3D générées) ; aucun rendu d'atelier ni photo de fabrication.

## Limites de l'audit

- **Concepteur 3D non observé** : prix, effets visuels, mode de vue (3D, zoom, sur la main), enregistrement, partage, taille du doigt, gravure du concepteur de bague restent non vérifiés. Le script du concepteur est chargé depuis jeweleros.com ; sa page `/api/` est interdite par son robots.txt, l'auditeur ne l'a pas ouverte (les appels viennent du script du site audité).
- Aucune seconde tentative après l'échec (pas de clic sur « Try again », pas de contournement). Le chargement de l'étape finale a été reproduit trois fois (ordinateur ×2, iPhone ×2) ; l'étape 5 iPhone n'a pas été dépassée : elle précède probablement un formulaire de coordonnées (règle : aucune donnée personnelle).
- **Constructeur d'alliances** : robots.txt de `customizer.benchmarkrings.com` illisible (réponse HTML) donc traité comme inconnu ; l'iframe était chargée par la page auditée, lue une fois (texte et prix par défaut), aucune option actionnée.
- Temps d'apparition du visuel : page de départ (cartes de choix) lisible en **1,2 s** sur ordinateur (domcontentloaded jusqu'au texte « Solitaire ») ; iPhone : mesure non répétée. Le visuel principal 3D n'a jamais apparu (aucun `canvas`).
- Non cliqués : styles autres que Solitaire/Halo, six formes, six carats, trois délais, tri de la boutique, liens de réseaux sociaux, rendez-vous.

## Sources

- https://romancediamond.com/design-your-ring/ (assistant, ordinateur et iPhone, 15/11/2026)
- https://romancediamond.com/jewelry/wedding-bands/ (alliances, iframe Benchmark)
- https://romancediamond.com/jewelry-services/custom-jewelry-design/ (processus, délai 4-6 semaines)
- https://romancediamond.com/about-us/ ; https://romancediamond.com/terms-of-service/ (SMS, ring builder)
- https://shop.romancediamond.com/collections/engagement-rings ; fiche https://shop.romancediamond.com/collections/engagement-rings/products/classic-round-cut-solitaire-yellow-gold-engagement-ring ; https://shop.romancediamond.com/cart ; https://shop.romancediamond.com/products/gift-card (404)
- Captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/romance-diamond-co/`
