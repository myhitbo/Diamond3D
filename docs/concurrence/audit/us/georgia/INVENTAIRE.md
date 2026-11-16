# Inventaire des joailliers : Géorgie (États-Unis)

Recensement du 15 novembre 2026, dans le cadre de l'étude de concurrence aux États-Unis. Lecture seule, comme un visiteur ordinaire : robots.txt lu avant chaque site,
aucun formulaire rempli ni envoyé, aucun compte créé, aucun chat ouvert, aucun panier ouvert, au plus une page toutes les 2,5 secondes par site.

Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré (déduit d'éléments vérifiés), **[S]** supposé (non vérifié), **[sec.]** lu sur une
source secondaire (extrait d'un index de recherche, non relu sur le site). Les prix sont ceux affichés le 15/11/2026, en dollars américains. Dans le texte, « synthétique »
traduit « lab-grown ». Lecture avec curl, sans en-tête modifié. Firecrawl était indisponible (crédits épuisés) : les outils écrits en JavaScript n'ont été vus que par
sept chargements de page dans Chromium sans écran, signalés un par un ; les autres sont marqués « non lu ».

## Constat général

- [V] La Géorgie est un marché dense, concentré sur l'agglomération d'Atlanta (Sandy Springs, Marietta, Alpharetta, Duluth, Kennesaw). Dix sites offrent un
  constructeur de bague : huit sont classés ci-dessous, avec deux maisons sans constructeur, et deux sont décrits après les fiches.
- [V] Presque tous les constructeurs viennent d'éditeurs tiers : catalogue Stuller « Jeweler Showcase » en iframe (Farsi), JewelerOS (Masina, Godwin), constructeur
  en trois étapes de Punchmark (D. Geller, Bashinski, Harkleroad), Pencil Design (Sovereign), Belgium Webnet (Lambert), Ava Couture pour les alliances (Levy),
  GemFind pour les diamants (Masina). [I] JewelerOS est l'outil de StoneAlgo déjà relevé au Tennessee et au Massachusetts : son script envoie ses mesures à un
  point de collecte nommé `stonealgoccwci`.
- [V] Un seul constructeur est servi par le site lui-même : celui de Reyes Jewelers (Duluth), en cinq étapes, avec une fourchette de prix dès le choix du carat et du métal
  (« Est. Price Range $1,995 – $2,550 » pour une marquise de 1 ct en solitaire, or jaune 14 k), puis un devis sous 1 à 2 jours ouvrés. C'est la logique du devis de
  JR Diamond, avec une image fixe à la place de la 3D.
- [V] Deux sortes de 3D avant l'achat. Chez Masina et Godwin, le « 3D Ring Designer » de JewelerOS (non vu). Chez Farsi Jewelers, une visionneuse iJewel3D sur la
  fiche de ses propres créations, avec essai sur la main en réalité augmentée, et une vue 360° du dessin CAO partagée par lien. [I] Le premier est un modèle
  paramétrique générique ; le second vient des dessins de la maison (MatrixGold), ce qui fait de Farsi l'acteur le plus proche de la promesse « ce que vous voyez
  existe ». Il ne dit pas pour autant que le modèle affiché est le fichier de fabrication.
- [V] L'acteur le plus proche du positionnement « l'atelier en direct » est Luther's Diamonds (Atlanta) : atelier familial qui fabriquait pour des marques et vend
  désormais en ligne à son nom, prix par carat et par métal sur la fiche lue, vidéo de la pierre exacte envoyée sous 24 heures avant le sertissage, coût de chaque étape du
  sur-mesure annoncé, livraison dans le monde entier droits et taxes compris.
- [V] Délais annoncés : 2 à 3 semaines chez Farsi (15 jours ouvrés pour une pièce à la commande), « a couple of weeks » chez Masina et Godwin, 4 à 5 semaines chez
  Luther's (6 à 7 en sur-mesure), 4 à 6 semaines chez Reyes, David Douglas et Regal, 6 à 8 semaines chez Brown & Co. et Icebox. [I] Les 14 jours ouvrés de
  JR Diamond égalent le meilleur délai relevé.
- [V] Synthétique : Reyes ne propose que cela dans son constructeur, Luther's le monte par défaut (naturel sur demande), Farsi, Masina, D. Geller, David Douglas,
  Lambert et Sovereign vendent les deux. À l'inverse, Brown & Co. écrit « exclusively sells natural diamonds ». Regal Studio chiffre l'écart : « typically 80 to 90
  percent less ».
- [V] Certificats : Farsi fait du rapport GIA ou IGI « our standard for engagement ring center diamonds » ; Luther's envoie le rapport IGI avec la vidéo de la
  pierre. [sec.] ATL Luxury Jewelry (Snellville) annonce la même règle que JR Diamond : rapport GIA (naturel) ou IGI (synthétique) au-dessus d'un demi-carat.
- [V] Le prix de la pierre de centre reste le point faible : chez Farsi, Masina et Godwin, la monture se dessine en ligne et la pierre se choisit en salle. Seul
  Levy montre un prix pour la monture et pour la pierre (26 diamants naturels). Lambert affiche le prix de ses montures (« From $1,380 ») ; sa liste de diamants
  n'a pas été lue.
- [V] Quatre sites n'ont pas pu être lus : Solomon Brothers (robots.txt fermé aux agents d'Anthropic), ATL Luxury Jewelry (429, point de contrôle Vercel), Windsor
  Fine Jewelers (403 Cloudflare), Tara Fine Jewelry (certificat TLS expiré).

## Classement

Ordre : qualité du configurateur, puis transparence du prix et de la fabrication, sur mesure, synthétique. Luther's Diamonds est placé deuxième sans constructeur, pour
sa proximité avec le positionnement de JR Diamond.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Farsi Jewelers | Sandy Springs | https://farsijewelers.com/ | https://farsijewelers.com/pages/build-your-engagement-ring-farsi-jewelers (alliances : https://farsijewelers.com/pages/build-your-wedding-band-sandy-springs-atlanta ; 3D : https://farsijewelers.com/collections/virtual-try-on) | oui (monture : forme, taille de pierre, métal, doigt, gravure, alliance assortie ; outil Stuller en iframe) + visionneuse 3D et essai en réalité augmentée sur 18 fiches | partiel : le domaine de l'iframe (`jewelershowcase.com`) interdit tout robot ; le site lui-même répond 200 | [V] « live, up-to-the-day pricing that moves as you build », prix indexés sur le cours de l'or et du platine, demande sans paiement, pierre choisie en salle. Méthode « 3D Bespoke » en six étapes avec vue 360° partageable, cire imprimée, trois vidéos d'atelier. Bagues de 1 249 à 5 490 $, à la commande en 15 jours ouvrés. Conditions du sur-mesure écrites noir sur blanc. |
| 2 | Luther's Diamonds | Atlanta | https://luthersdiamonds.com/ | https://luthersdiamonds.com/collections/lab-diamond-engagement-rings (sur mesure : https://luthersdiamonds.com/pages/customized%E2%84%A2-by-luthers-diamonds) | partiel : fiche produit à options (carat, métal), un prix par variante ; pas de constructeur | non | [V] Le positionnement de JR Diamond, déjà en place : atelier familial, « made to order », vidéo du diamant exact et rapport IGI sous 24 h, « Six steps, and you'll know the cost of each one » (acompte de 10 %, CAO incluse, solde après validation). Marquise solitaire dès 1 850 $ (1,5 ct, or 14 k). Livraison mondiale, droits compris. |
| 3 | Reyes Jewelers | Duluth | https://reyesjewelers.com/ | https://reyesjewelers.com/ring-builder (liste d'envies : https://reyesjewelers.com/dream-ring) | oui (propre au site, 5 étapes : forme, carat, monture, métal, coordonnées ; image d'aperçu, fourchette de prix) | non | [V] Contrôles actionnés : marquise, 1 ct, solitaire, or jaune 14 k → « Est. Price Range $1,995 – $2,550 », « Final price confirmed at consultation », devis sous 1 à 2 jours ouvrés. Synthétique seulement, « 20–35% below Kay, Zales & Jared », 4 à 6 semaines, vente ferme. Le parcours de devis le plus proche de celui de JR Diamond. |
| 4 | Masina Diamonds | Atlanta | https://masinadiamonds.com/ | https://masinadiamonds.com/pages/custom-ring-builder (diamants : https://masinadiamonds.com/apps/diamondtools/) | oui (3D, JewelerOS ; recherche de diamants GemFind) | non pour le site ; le constructeur appelle `jeweleros.com/api/`, chemin interdit aux robots : non déroulé | [V] « Design your ring online in stunning 3D », pierre choisie en salle, bague prête « in just a couple of weeks ». Le script garde le dessin contre une vérification du téléphone par code. Diamants naturels, synthétiques et de couleur en recherche. Consultations virtuelles. Depuis 1984. |
| 5 | D. Geller & Son Jewelers | Kennesaw et Sandy Springs | https://www.dgeller.com/ | https://www.dgeller.com/ringsettings (pierre d'abord : https://www.dgeller.com/diamonds) | oui (3 étapes Punchmark : monture, diamant, bague) | non | [V] Rendu une fois : « 140 settings found », 24 montures de 1 339 à 3 598 $ en page 1. Recherche de diamants à onglets « Natural » et « Lab-Grown » (0 résultat au rendu). Sur-mesure en boutique ou « virtual », rendu 3D. Depuis 1939. |
| 6 | Levy Jewelers | Savannah | https://www.levyjewelers.com/ | https://www.levyjewelers.com/design-your-own-ring/choose-your-style (pierre d'abord : https://www.levyjewelers.com/design-your-own-ring/choose-your-diamond) | oui (monture + diamant, pages servies en HTML) ; constructeur d'alliances Ava Couture en iframe | non pour les pages ; le robots.txt interdit les adresses `?stoneID=` | [V] Le seul parcours où tout a un prix lisible : 29 montures de 2 145 à 12 350 $, 26 diamants naturels GIA (525 à 1 459 $ en page 1), bouton « Add Diamond To Ring ». Pas de synthétique relevé. Depuis 1900. |
| 7 | David Douglas Diamonds & Jewelry | Marietta | https://www.daviddouglas.com/ | https://www.daviddouglas.com/jewelry/engagement-rings/customizable-rings (sur mesure : https://www.daviddouglas.com/custom-design-jewelry) | non (montures à prix affiché et recherche de diamants ; pas de parcours en étapes relevé) | non | [V] « Designed and Made Here in Marietta », 3D montrée avant fabrication, échantillon imprimé en 3D, « no deposit to start a design », devis à distance. Montures « Customizable » de 1 175 à 9 600 $ en page 1, pierre en sus. Page de refonte de la bague d'origine. |
| 8 | Lambert Jewelers (ex-Divine Fine Jewelry) | Marietta | https://lambertcojewelers.com/ | https://lambertcojewelers.com/apps/ring-builder/engagement-rings (pierre d'abord : https://lambertcojewelers.com/apps/ring-builder/diamonds) | oui (Belgium Webnet : monture, diamant naturel ou synthétique d'abord) | non | [V] Rendu une fois : 98 montures « From $1,380 ». Petite maison sur rendez-vous, rendez-vous virtuel. [V] Site inachevé : la page de retours garde « [INSERT RETURN ADDRESS] ». |
| 9 | Sovereign Jewels | Alpharetta | https://sovereignjewels.com/ | https://sovereignjewels.com/pages/sovereign-design-studio (cadre : https://shopify.pencildesign.co/partner/26ceb054/landing-pages/sovereign-design-studio) | oui (Pencil Design : monture, puis pierre) | non | [V] Boutique en ligne fondée en 2026, « over 1,100 pieces », or 14 k seulement. Rendu une fois : galerie de montures sans prix. Consultations virtuelles, bandeau « 40% OFF », retours sous 15 jours avec 15 % de frais. |
| 10 | Godwin Jewelers | Bainbridge et Thomasville | https://www.godwinjewelers.com/ | https://www.godwinjewelers.com/pages/custom-ring-builder (présentation : https://www.godwinjewelers.com/pages/custom-engagement-rings) | oui (3D, JewelerOS, même module que Masina) | non pour le site ; constructeur non déroulé (même raison que Masina) | [V] Le même outil 3D dans deux petites villes du sud de l'État : « ready in a couple of weeks ». Bagues en synthétique à prix affiché (1 595 à 6 995,99 $ en page 1). Depuis 1960. |

## Fiches

### 1. Farsi Jewelers (Sandy Springs)

- [V] Constructeur : « Design your engagement ring setting online, then finish it the way it should be finished — in person. Choose your stone shape and size, the
  metal, and your finger size, then add engraving or pair a matching band — all with live, up-to-the-day pricing that moves as you build. […] Nothing is charged
  online. » Métaux : « 10K, 14K and 18K in white, yellow and rose, plus platinum and silver ». Les prix sont ceux de la monture sans pierre de centre et « track the
  daily gold and platinum market ». Bouton « Request this Item », sans paiement. « Most rings are finished in 2–3 weeks ». Une vidéo YouTube montre l'outil.
  Source : https://farsijewelers.com/pages/build-your-engagement-ring-farsi-jewelers
- [V] L'outil est une iframe du catalogue Stuller (`farsijewelers-frame-categoryembed.jewelershowcase.com/browse/wedding-and-engagement`, et `/band-builder` pour
  les alliances). Le robots.txt de ce domaine porte « Disallow: / » : son contenu n'a pas été lu.
- [V] Méthode « Farsi 3D Bespoke » en six étapes : consultation, CAO (MatrixGold, filaire en 3 à 5 jours ouvrés), rendu photoréaliste, « Interactive 360°
  Visualization » (visionneuse iJewel intégrée à la page, « Click and drag to rotate », lien à partager), cire imprimée en 3D à essayer (facultative, 3 à 5 jours),
  fonte, sertissage et finition en 2 à 3 semaines. Trois vidéos d'atelier (processus complet de 2 min 47, CAO, sertissage et polissage). La page dit à la fois
  « we cast your ring locally » et « All work is completed in our Sandy Springs location ». Prix : « you get a firm price for your specific design before you commit ».
  Source : https://farsijewelers.com/pages/farsi-3d-bespoke-method-custom-rings-in-sandy-springs-without-the-surprises
- [V] 3D sur les fiches : collection de 18 bagues, « Every engagement ring here has a 3D model you can put on your own hand from its product page ». Exemple : bague
  trois pierres, diamant synthétique taille émeraude de 3 ct E/VS1 certifié IGI, or jaune 14 k, 3 950 $, visionneuse `ijewel3d.com` en iframe, « Made to order », « please allow
  15 business days », bouton « Add to cart ». Sources : https://farsijewelers.com/collections/virtual-try-on et
  https://farsijewelers.com/collections/virtual-try-on/products/14k-yellow-gold-3-ct-east-west-lab-grown-emerald-cut-engagement-ring
- [V] Catalogue : 56 bagues de fiançailles, de 1 249 à 5 490 $ sur les 50 premières ; « We are an authorized dealer of Ever & Ever ».
  Source : https://farsijewelers.com/collections/engagement-rings
- [V] Synthétique : diamants en vente par la même iframe, « each stone with a 360° interactive view and its full certification » (non lu), rapport GIA ou IGI,
  explication de la note de taille « 8X » de GCAL et de la certification SCS. Source : https://farsijewelers.com/pages/lab-grown-diamonds-farsi-jewelers-sandy-springs
- [V] Conditions : retour sous 7 jours hors sur-mesure ; sur-mesure non remboursable dès le début de la production ; « Custom work is paid in full up front to begin
  — no deposits or balances to chase » ; remboursement intégral avant le début du dessin ; mise à taille offerte 90 jours ; nettoyage à vie ; expertise gratuite ;
  livraison assurée gratuite dès 350 $, États-Unis seulement ; refonte de bijoux de famille avec « intake photos and stone counts, insured chain-of-custody ».
  « The ring and the center stone are priced separately. » Source : https://farsijewelers.com/pages/policy-center-farsi-jewelers-sandy-springs
- [V] Maison familiale depuis 1998, gemmologue diplômé du GIA, 6128 Roswell Rd. Le site publie une page « AI Feed » et un fichier `agents.md` (non lus).
- [I] Pour JR Diamond : la référence de l'État pour la 3D avant l'achat et pour la page de conditions. Limites : le constructeur est un catalogue Stuller, la pierre de
  centre n'a pas de prix en ligne, pas d'expédition hors des États-Unis.

### 2. Luther's Diamonds (Atlanta)

- [V] Accueil : « From our studio to you. Made by hand, at our bench. Our own settings, made to order by our family. » Bandeaux : « Current Average Turnaround:
  4–5 Weeks », « Fully Insured Worldwide Shipping · Handcrafted in Atlanta », gravure et pierre cachée dans l'anneau offertes. Source : https://luthersdiamonds.com/
- [sec.] L'index de recherche donne aussi « No storefront. No middlemen. » pour la même page ; la phrase n'a pas été retrouvée à la lecture.
- [V] Collection en synthétique : montures maison de « From $1,250 » (The Lotus) à « From $3,550 » (The Juliette), classées par famille et par forme.
  Source : https://luthersdiamonds.com/collections/lab-diamond-engagement-rings
- [V] Fiche « The Aurora » (marquise solitaire) : poids 1,5, 2, 2,5, 3 ou 4 ct ; or 14 k blanc, jaune ou rose, platine 950 ; un prix par combinaison, de 1 850 $
  (1,5 ct, or 14 k) à 4 050 $ (4 ct, platine), le platine coûtant 300 $ de plus. « About 4–5 weeks to your door. » « Within 24 hours we send a video of your exact
  diamond and its IGI report (DEF color, VS2+ clarity). Approve it, and that's the stone we set. » Naturel sur demande. Annulation gratuite avant le début du travail,
  vente ferme ensuite, 14 jours pour signaler un défaut. La fiche porte cinq vidéos (non visionnées).
  Source : https://luthersdiamonds.com/products/marquise-diamond-classic-solitaire-ring-the-aurora
- [V] Sur mesure : « Six steps, and you'll know the cost of each one » : idée (gratuit), devis personnel (gratuit), acompte de 10 % non remboursable, CAO incluse,
  solde de 90 % après validation, fabrication et livraison incluses. « Example: on a $3,500 ring, that's $350 to start and $3,150 after CAD approval. » « No design fees,
  however many rounds it takes. » 6 à 7 semaines, 8 à 10 pour une pièce ciselée. Formulaire en bas de page, non rempli.
  Source : https://luthersdiamonds.com/pages/customized%E2%84%A2-by-luthers-diamonds
- [V] Histoire : atelier familial ouvert en 1994 en Corée du Sud, fabricant pour des marques (« Our name was never on the box ») ; studio à Atlanta depuis 2016 ;
  « a family workshop in Atlanta and Ulsan » ; clientèle venue de vidéos TikTok et Instagram du maître joaillier au travail.
  Source : https://luthersdiamonds.com/pages/our-storys
- [V] Livraison : gratuite, assurée, dans le monde entier, « Duties and import taxes are covered on our end ». Paiement en plusieurs fois par Shop Pay. Certificats
  GIA ou IGI. Sources : https://luthersdiamonds.com/pages/faqs et https://luthersdiamonds.com/pages/certificates
- [I] Pour JR Diamond : le concurrent de positionnement le plus direct de l'État, et il livre déjà hors des États-Unis. Ce qu'il n'a pas : de 3D interactive, de
  configurateur, de pierre choisie par le client dans une liste. Le site ne dit pas quelle part du travail se fait à Atlanta et quelle part à Ulsan.

### 3. Reyes Jewelers (Duluth)

- [V] Constructeur en cinq étapes : « Diamond Cut » (9 formes), « Carat Size » (11 poids de ½ à 5 ct, avec le diamètre en millimètres), « Setting » (8 styles),
  « Metal » (or 14 k jaune, blanc ou rose, 18 k jaune ou blanc, 10 k jaune ou blanc), « Your Details ». « Choose your lab diamond cut, setting style, and gold — we'll
  craft it by hand and reach out with your final quote within 1–2 business days. » Source : https://reyesjewelers.com/ring-builder
- [V] Contrôles actionnés dans Chromium, jusqu'à l'étape 4 : marquise, 1 ct, solitaire, or jaune 14 k. L'aperçu est une image fixe de la bague composée. Le panneau
  affiche « Est. Price Range $1,995 – $2,550 », « Based on 14K gold », « Final price confirmed at consultation ». L'étape 5 (coordonnées) n'a pas été ouverte.
- [V] Arguments affichés : « All diamonds are lab-grown », « 20–35% below Kay, Zales & Jared », « Solid gold — never plated », « 4–6 Week Turnaround », « Custom rings
  are made exclusively for you and are non-refundable ».
- [V] « Dream Ring Studio » : on coche ses bagues préférées, on enregistre sa taille et un mot, puis « Send Him the Link ». Tranches de budget de « Under $2,500 » à
  « $6,000+ ». Source : https://reyesjewelers.com/dream-ring
- [V] Boutique : 55 pièces à prix affiché, avec un prix « vs. retail » barré (bague et alliance, diamant synthétique taille émeraude de 2 ct : 3 650 $ contre 4 745 $) ; une pièce porte
  « EGL Certified ». Maison familiale fondée en 1994, 3176 Main St, Duluth ; vend aussi des « grillz ». « All sales are final. » Source : https://reyesjewelers.com/
- [I] Pour JR Diamond : la preuve qu'un petit atelier peut tenir un configurateur maison avec une fourchette de prix et un devis rapide. Faiblesses : image fixe,
  pas de naturel dans l'outil, aucune pierre identifiée, certification peu précise.

### 4. Masina Diamonds (Atlanta)

- [V] Parcours : « Design your ring online in stunning 3D », « Pick out your center stone in our Atlanta, GA showroom », « Finalize & order your ring with our expert
  team ». « We can have it ready for you in just a couple of weeks at a great price, fully customized around your center stone. »
  Source : https://masinadiamonds.com/pages/custom-engagement-rings
- [V] Accueil : « Choose your diamond shape, setting style, metal type, and size, then watch your design come to life in real time », avec rotation et zoom ;
  consultations virtuelles ; meilleures ventes de 1 366 à 5 538 $. Source : https://masinadiamonds.com/
- [V] La page du constructeur charge `jeweleros.com/static/dist/partner_config.js`. Le script contient un parcours guidé (« Let's start designing your ring »), un
  « 3D Ring Designer », la sauvegarde du dessin contre une vérification du téléphone (« Verify your phone to keep this ring for later », code à 6 chiffres) et la prise
  de rendez-vous. Il appelle `/api/config/` sur jeweleros.com, chemin interdit par le robots.txt de ce domaine : le constructeur n'a pas été déroulé.
  Sources : https://masinadiamonds.com/pages/custom-ring-builder et https://www.jeweleros.com/static/dist/partner_config.js
- [V] Recherche de diamants GemFind (`gfdiamondlink.com`), avec les entrées « Natural Diamonds », « Lab Grown Diamonds » et « Fancy Color Diamonds » : contenu en
  JavaScript, non lu. La grille des bagues de fiançailles est chargée par un script de filtre : prix non lus.
  Sources : https://masinadiamonds.com/apps/diamondtools/ et https://masinadiamonds.com/collections/engagement-rings-in-atlanta-ga
- [V] Retours sous 30 jours ; sur-mesure et gravure non repris ; 20 % de frais si la bague a été mise à taille. Livraison gratuite au-dessus de 1 000 $.
  Source : https://masinadiamonds.com/pages/return-policy-1
- [V] Maison familiale depuis 1984, deuxième génération, 75 14th St NE. Guide d'achat de 50 pages contre une adresse e-mail (formulaire non rempli).
  Sources : https://masinadiamonds.com/pages/our-story et https://masinadiamonds.com/pages/the-masina-method
- [I] Pour JR Diamond : l'exemple type du configurateur 3D en marque blanche. Le modèle est paramétrique et générique ; la pierre et le prix final restent en salle.

### 5. D. Geller & Son Jewelers (Kennesaw et Sandy Springs)

- [V] Menu « Build Your Ring » : « Design Your Engagement Ring », « Start with a Diamond », « Looking for Something Custom? », « Build Your Wedding Band ».
  Source : https://www.dgeller.com/
- [V] Constructeur en trois étapes (« Choose a Ring », « Choose a Diamond », « Complete Ring »), filtres de style (9), de métal, de prix et de forme. Rendu une fois
  dans Chromium : « 140 settings found », 24 montures en page 1, de 1 339 à 3 598 $ (or blanc 10 k). Source : https://www.dgeller.com/ringsettings
- [V] Recherche de diamants : onglets « Natural » et « Lab-Grown », filtres des 4 C, colonnes « Price » et « Lab ». Au rendu (10 secondes) : « 0 diamonds found » ;
  les résultats n'ont pas été lus. Source : https://www.dgeller.com/diamonds
- [V] Sur mesure en quatre étapes : consultation « in-store or virtual », rendu 3D « from every angle », sertissage, finition.
  Source : https://www.dgeller.com/pages/custom-jewelry
- [sec.] Bagues de fiançailles de 2 625 à 22 632 $, « Ships in 4-5 Weeks » (index de recherche ; la grille du site est chargée par script).
- [V] Depuis 1939, maison familiale, ancien fabricant pour les bijoutiers du Sud-Est ; reprise à vie du diamant pour sa valeur d'achat ; retours sous 15 jours,
  sur-mesure exclu. Bulle « Text us here » (non ouverte). Sources : https://www.dgeller.com/about et https://www.dgeller.com/return-policy
- [I] Pour JR Diamond : le parcours monture puis pierre le plus classique, chez une maison ancienne de l'agglomération. La monture montrée est une image de
  catalogue, pas la pièce de l'atelier.

### 6. Levy Jewelers (Savannah)

- [V] « Design Your Own Ring » : étape monture avec filtre de métal, « 29 match(es) », montures de 2 145 à 12 350 $ sur les 20 premières (dont Tacori et Martin
  Flyer). Source : https://www.levyjewelers.com/design-your-own-ring/choose-your-style
- [V] Étape pierre : « 26 Diamonds Found », filtres de forme, prix, carat, couleur, pureté, taille et certificat (AGS, GCAL, GIA, IGI) ; les 20 diamants de la page 1
  sont certifiés GIA, de 525 à 1 459 $, avec les boutons « Add To Cart » et « Add Diamond To Ring ». Aucun filtre d'origine : pas de synthétique relevé.
  Source : https://www.levyjewelers.com/design-your-own-ring/choose-your-diamond
- [V] « Eternity Ring Builder » : iframe du fabricant Ava Couture (`avacoutures.com`), non lue. Source : https://www.levyjewelers.com/page/eternity-ring-builder.html
- [V] Sur mesure et refonte de bijoux anciens par un artisan sur place, délai « can vary », dates estimées données au client.
  Source : https://www.levyjewelers.com/page/custom-work.html
- [V] Retours sous 30 jours, commandes spéciales exclues. Maison familiale depuis 1900, quatrième génération, deux magasins.
  Sources : https://www.levyjewelers.com/page/return-policy.html et https://www.levyjewelers.com/page/about-us.html
- [I] Pour JR Diamond : un constructeur ancien mais lisible sans JavaScript, où chaque ligne a un prix. Le stock de pierres est petit et tout en naturel.

### 7. David Douglas Diamonds & Jewelry (Marietta)

- [V] « Designed and Made Here in Marietta » : « We will design it, show it to you in 3D before it exists, and then make it here in our own Marietta studio ». « The
  first conversation is free and there is no deposit to start a design. » Dessins numériques, « 360° Computer Designs […] with unlimited changes », échantillon imprimé
  en 3D à la taille réelle, 4 à 6 semaines. « Submit your idea online and we will contact you with ideas and a quote virtually » (formulaire non ouvert).
  Source : https://www.daviddouglas.com/custom-design-jewelry
- [V] Montures « Customizable » : 24 par page sur 4 pages, de 1 175 à 9 600 $ en page 1. Exemple : monture Gabriel & Co à 3 850 $, « Ring setting only. The center
  stone is not included in the price », « Ships in 2-3 Weeks ». Sources : https://www.daviddouglas.com/jewelry/engagement-rings/customizable-rings et
  https://www.daviddouglas.com/jewelry-details/customizable-rings/customizable-accented-engagement-ring/2557
- [V] Recherche de diamants à onglets « Natural » et « Lab-Grown » (résultats non lus) ; pages sur les diamants synthétiques « 8X », CanadaMark et « sustainability
  rated ». Source : https://www.daviddouglas.com/diamonds?labGrown=1
- [V] Refonte de la bague d'origine en trois voies : nouvelle monture, nouvelle pierre, création autour des pierres et de l'or du client ; « can be started online or
  in person ». Source : https://www.daviddouglas.com/pages/redesign-your-engagement-ring
- [V] Retours en ligne : remboursement sous 14 jours, échange sous 30 jours, sur-mesure exclu. Quatrième génération, 3605 Sandy Plains Road.
  Sources : https://www.daviddouglas.com/pages/return-policy et https://www.daviddouglas.com/about-us
- [I] Pour JR Diamond : le discours de fabrication locale le plus net après Farsi, et une page de refonte utile pour « Bijou de famille ». Pas de configurateur.

### 8. Lambert Jewelers, ex-Divine Fine Jewelry (Marietta)

- [V] `divinefinejewelry.com` redirige vers `lambertcojewelers.com`. Menu « Create your own ring » : « Start With A Setting », « Start With An Earth Mined Diamond »,
  « Start With A Lab-Grown Diamond », « Creative Ring Studio » (non ouvert). Source : https://lambertcojewelers.com/
- [V] Constructeur de l'éditeur Belgium Webnet (`ringbuilder.belgiumwebnet.com`, « One-Step Ring Builder »). Rendu une fois dans Chromium : 98 montures, filtres de
  style, de forme, de couleur d'or et de prix, « From $1,380 » pour la première. Source : https://lambertcojewelers.com/apps/ring-builder/engagement-rings
- [V] Maison sur rendez-vous, 3162 Johnson Ferry Road NE ; la fondatrice a travaillé chez Brown & Co. ; rendez-vous virtuel ; sur-mesure avec « detailed 3D digital
  design ». Sources : https://lambertcojewelers.com/pages/about-us et https://lambertcojewelers.com/pages/custom-design
- [V] La page de retours est un modèle non terminé : « [INSERT RETURN ADDRESS] », adresse e-mail de l'ancienne marque.
  Source : https://lambertcojewelers.com/pages/return-policy
- [I] Le catalogue de bijoux vient d'Overnight Mountings (adresses en `/apps/overnight-shop/`). Pour JR Diamond : un constructeur complet loué par une micro-entreprise.

### 9. Sovereign Jewels (Alpharetta)

- [V] « Sovereign Design Studio » : « Choose Your Setting », « Select Your Diamond », « Preview Your Ring », bouton « ENTER STUDIO ». L'outil est une iframe de
  Pencil Design. Rendu une fois : deux étapes (« Setting », « Stone »), « Dream Ring Customizer », 15 familles de styles, galerie de montures en rendu sans prix.
  Sources : https://sovereignjewels.com/pages/sovereign-design-studio et
  https://shopify.pencildesign.co/partner/26ceb054/landing-pages/sovereign-design-studio
- [V] « An online luxury diamond jewelry store founded in 2026 », « over 1,100 pieces », « all crafted in premium 14K gold », naturel et synthétique, consultations
  virtuelles ou privées à Alpharetta. Le site affirme : « We are not a reseller or a dropshipping operation ». Sources : https://sovereignjewels.com/pages/about-us et
  https://sovereignjewels.com/pages/faq
- [V] Livraison gratuite en 5 à 7 jours ouvrés, États-Unis ; retours sous 15 jours avec 15 % de frais de remise en stock, sur-mesure exclu ; bandeau « 40% OFF
  Finished Jewelry ». Exemple de pierre : diamant naturel rond de 1,50 ct G/VS1 certifié GIA à 8 862 $. Sources : https://sovereignjewels.com/pages/faq,
  https://sovereignjewels.com/policies/refund-policy et https://sovereignjewels.com/pages/sovereign-design-studio
- [I] Pour JR Diamond : un nouvel entrant né en ligne, sans atelier montré. Rien de précis sur le lieu ni sur les étapes de fabrication.

### 10. Godwin Jewelers (Bainbridge et Thomasville)

- [V] « Design your ring online in stunning 3D », « Pick out your center stone at our Bainbridge or Thomasville showroom », « Finalize & order ». « Design fully custom
  rings online and have them ready in a couple of weeks at a great price. » Source : https://www.godwinjewelers.com/pages/custom-engagement-rings
- [V] La page de présentation reprend le texte et les images de Masina (dossier `jeweleros-seo-page`). [I] Même module JewelerOS. La page du constructeur ne contient
  qu'un bloc vide rempli par script : non déroulé. Source : https://www.godwinjewelers.com/pages/custom-ring-builder
- [V] Bagues de fiançailles en synthétique : 7 pages, 24 prix en page 1, de 1 595 à 6 995,99 $.
  Source : https://www.godwinjewelers.com/jewelry/engagement-rings/lab-grown-diamond-engagement-rings
- [V] Depuis 1960, deux magasins, site Punchmark, constructeur d'alliances « Benchmark Ring Lab ». Source : https://www.godwinjewelers.com/pages/about-us

## Autres acteurs relevés, non classés

- **Regal Studio** (Atlanta, Buckhead) : [V] sur-mesure fait sur place, modèle 3D avant fabrication, 4 à 6 semaines, consultation en studio ou par vidéo ; 135 modèles
  de bagues sans prix. Guide de prix publié : « between $3,000 and $8,000 for most couples », de 1 500 $ à plus de 15 000 $, pierre de centre « 50% to 70% of the
  total ». Pas de configurateur. [I] Bon modèle de page « le prix est expliqué ». Sources : https://regal.studio/product-category/gold-rings/engagement-rings/ et
  https://regal.studio/custom-engagement-ring-cost-in-atlanta/
- **Icebox Diamonds & Watches** (Atlanta) : [V] grande boutique en ligne, 137 bagues de fiançailles, de 750 à 33 625 $ en page 1. Fiche d'un solitaire de 2,50 ct :
  choix « Lab Grown Diamond » (« From $28.5k ») ou « Natural Diamond » (« From $42.5k »), « Ships in 6-8 Weeks », « All sales are final ». Sur-mesure : acompte de
  1 000 $, « custom projects start at $5,000 ». [sec.] Conciergerie par WhatsApp. Marque de célébrités, où la bague de fiançailles est secondaire.
  Sources : https://www.icebox.com/collections/engagement, https://www.icebox.com/products/2-50ct-round-solitaire-diamond-engagement-ring et
  https://www.icebox.com/pages/custom-jewelry
- **Ascot Diamonds** (salle à Atlanta ; sept villes) : [V] plusieurs centaines de bagues à prix affiché, presque toutes en synthétique, avec deux prix selon le
  certificat : « With GIA Center As Shown: $3,600 », « With IGI Similar Grade Center: $3,100 ». Sur rendez-vous. Le robots.txt interdit `/customize/pieceid/` et
  `/purchase-diamond/pieceid/`. [S] Siège à Atlanta : non confirmé par le site. Sources : https://www.ascotdiamonds.com/jewelry/engagement-rings et
  https://www.ascotdiamonds.com/locations/atlanta
- **Bashinski Fine Gems & Jewelry** (Macon) : [V] même constructeur Punchmark en trois étapes, pierre ou monture d'abord ; importateur de pierres ; sur-mesure
  « in-house » en trois temps avec CAO. Sources : https://www.bashinski.com/ringsettings et https://www.bashinski.com/pages/custom-jewelry
- **Harkleroad Diamonds & Fine Jewelers** (Savannah) : [V] même plateforme Punchmark (`/ringsettings`, recherche de diamants naturels et synthétiques), CAO en trois
  dimensions. Sources : https://www.harkleroaddiamonds.com/ringsettings et https://www.harkleroaddiamonds.com/pages/custom-jewelry
- **Brown & Co. Jewelers** (Roswell et Buckhead) : [V] page « Build Your Ring » sans outil : six montures maison, rendez-vous, 6 à 8 semaines, or 18 k ou platine.
  « Brown & Co. exclusively sells natural diamonds. » Source : https://brownjewelers.com/pages/brown-co-bridal-build-your-ring
- **Iroff & Son Jewelers** (Alpharetta) : [sec.] sur-mesure « typically start around $1,500 », acompte de la moitié du devis, ou 500 $ de CAO tant que le devis
  n'est pas arrêté. Accueil lu, sans outil. Source : https://www.iroff.com/
- **Worthmore Jewelers** (Atlanta et Decatur) et **Laura Pearce** (Buckhead) : [V] accueils lus, sur-mesure sans outil en ligne ; Laura Pearce annonce « about four
  weeks » et travaille l'or 18 k et le platine. Sources : https://www.worthmorejewelers.com/ et https://laurapearce.com/

### Sites bloqués ou illisibles

- **Solomon Brothers** (Atlanta) : [V] le robots.txt interdit tout le site à `ClaudeBot` et `Anthropic-AI` (« AI training crawlers — blocked »). Aucune page lue.
  [sec.] « Four master jewelers, every step in-house in our Atlanta workshop », rendu 3D validé avant fabrication, 3 à 6 semaines, consultation par vidéo, depuis 1982.
  À auditer à la main : https://solomonbrothers.com/pages/custom-design
- **ATL Luxury Jewelry** (Snellville) : [V] 429 « Vercel Security Checkpoint » dès le robots.txt. Aucune page demandée. [sec.] Rapport GIA ou IGI au-dessus d'un
  demi-carat, « Rings and settings start at $97 », sur-mesure en 4 à 6 semaines après validation de la CAO, prototypes signalés comme tels.
  À auditer à la main : https://www.atlluxuryjewelry.com/engagement
- **Windsor Fine Jewelers** (Augusta) : [V] robots.txt lisible, puis 403 Cloudflare « Just a moment… » sur l'accueil et sur `/engagement-rings` (demandés dans la même
  passe, sans nouvel essai). [sec.] Recherche de diamants en ligne, bagues « made as they are ordered », chat en direct.
- **Tara Fine Jewelry** (Buford) : [V] certificat TLS expiré sur `www.tarafinejewelry.com` ; aucune lecture.

### Hors périmètre

- [sec.] Venazia (pages « Atlanta » d'un vendeur de Floride), Brian Gavin Diamonds (Texas), la salle d'exposition d'Atlanta de Brilliant Earth, les magasins Kay.

## Méthode et limites

- **Recherche** : Parallel Search et la recherche web intégrée, avec des requêtes génériques (ville, « ring builder », « custom engagement rings »). Aucune
  information sur JR Diamond n'a été envoyée à un service extérieur.
- **Lecture** : 108 pages demandées avec curl sur 20 sites de joailliers, après lecture du robots.txt de 23 domaines, 2,5 secondes entre deux pages d'un même site. Les robots.txt des
  outils tiers ont aussi été lus (`jewelershowcase.com`, `jeweleros.com`, `gfdiamondlink.com`, `pencildesign.co`).
- **Chargements dans Chromium sans écran** (identité par défaut), sept en tout : D. Geller (`/ringsettings`, `/diamonds`), Lambert (constructeur), Sovereign (page
  et cadre Pencil), Reyes (constructeur, deux passes, clics sur la forme, la monture et le métal). Aucun chemin interdit par un robots.txt n'a été demandé.
- **Non fait** : constructeurs de Farsi (iframe interdite aux robots), de Masina et de Godwin (appel à un chemin interdit) ; recherches de diamants GemFind et
  Punchmark ; « Creative Ring Studio » de Lambert ; étape 5 de Reyes ; tout formulaire, chat, bulle SMS ou panier.
- **Consignes trouvées dans les pages** : les robots.txt des boutiques Shopify demandent aux agents d'installer une « compétence » shop.com et de passer par une
  interface d'achat. Non suivi ; aucun achat tenté.
- **Limites** : les fourchettes de prix portent sur la première page de chaque liste. Les faits [sec.] viennent d'extraits d'index et peuvent dater. La recherche n'a
  pas porté sur les alliances de mariage juif ni sur les villes de moins de 10 000 habitants.

## Sources

Pages lues le 15/11/2026 (code HTTP 200 sauf mention) :

- Farsi Jewelers : https://farsijewelers.com/robots.txt ; https://farsijewelers.com/ ; https://farsijewelers.com/pages/build-your-engagement-ring-farsi-jewelers ;
  https://farsijewelers.com/pages/build-your-wedding-band-sandy-springs-atlanta ;
  https://farsijewelers.com/pages/farsi-3d-bespoke-method-custom-rings-in-sandy-springs-without-the-surprises ;
  https://farsijewelers.com/pages/lab-grown-diamonds-farsi-jewelers-sandy-springs ; https://farsijewelers.com/collections/virtual-try-on ;
  https://farsijewelers.com/collections/virtual-try-on/products/14k-yellow-gold-3-ct-east-west-lab-grown-emerald-cut-engagement-ring ;
  https://farsijewelers.com/collections/engagement-rings ; https://farsijewelers.com/pages/policy-center-farsi-jewelers-sandy-springs ;
  https://farsijewelers-frame-categoryembed.jewelershowcase.com/robots.txt
- Luther's Diamonds : https://luthersdiamonds.com/robots.txt ; https://luthersdiamonds.com/ ; https://luthersdiamonds.com/collections/lab-diamond-engagement-rings ;
  https://luthersdiamonds.com/products/marquise-diamond-classic-solitaire-ring-the-aurora ;
  https://luthersdiamonds.com/pages/customized%E2%84%A2-by-luthers-diamonds ; https://luthersdiamonds.com/pages/our-storys (redirigée vers `/pages/our-story`) ;
  https://luthersdiamonds.com/pages/faqs ; https://luthersdiamonds.com/pages/returns-support ; https://luthersdiamonds.com/pages/certificates
- Reyes Jewelers : https://reyesjewelers.com/robots.txt ; https://reyesjewelers.com/ ; https://reyesjewelers.com/ring-builder (curl, puis Chromium) ;
  https://reyesjewelers.com/dream-ring ; https://reyesjewelers.com/assets/index-qxiRKF-W.js
- Masina Diamonds : https://masinadiamonds.com/robots.txt ; https://masinadiamonds.com/ ; https://masinadiamonds.com/pages/custom-engagement-rings ;
  https://masinadiamonds.com/pages/custom-ring-builder ; https://masinadiamonds.com/pages/the-masina-method ; https://masinadiamonds.com/apps/diamondtools/ ;
  https://masinadiamonds.com/collections/engagement-rings-in-atlanta-ga ; https://masinadiamonds.com/pages/return-policy-1 ;
  https://masinadiamonds.com/pages/our-story ; https://www.jeweleros.com/robots.txt ; https://www.jeweleros.com/static/dist/partner_config.js ;
  https://gfdiamondlink.com/robots.txt
- D. Geller & Son : https://www.dgeller.com/robots.txt ; https://www.dgeller.com/ ; https://www.dgeller.com/ringsettings (curl, puis Chromium) ;
  https://www.dgeller.com/diamonds (curl, puis Chromium) ; https://www.dgeller.com/pages/custom-jewelry ; https://www.dgeller.com/jewelry/diamond-engagement-rings ;
  https://www.dgeller.com/about ; https://www.dgeller.com/return-policy
- Levy Jewelers : https://www.levyjewelers.com/robots.txt ; https://www.levyjewelers.com/ ; https://www.levyjewelers.com/build-your-own.html ;
  https://www.levyjewelers.com/design-your-own-ring/choose-your-style ; https://www.levyjewelers.com/design-your-own-ring/choose-your-diamond ;
  https://www.levyjewelers.com/page/eternity-ring-builder.html ; https://www.levyjewelers.com/page/custom-work.html ;
  https://www.levyjewelers.com/page/return-policy.html ; https://www.levyjewelers.com/page/about-us.html
- David Douglas : https://www.daviddouglas.com/robots.txt ; https://www.daviddouglas.com/ ; https://www.daviddouglas.com/engagement ;
  https://www.daviddouglas.com/jewelry/engagement-rings/customizable-rings ;
  https://www.daviddouglas.com/jewelry-details/customizable-rings/customizable-accented-engagement-ring/2557 ; https://www.daviddouglas.com/custom-design-jewelry ;
  https://www.daviddouglas.com/diamonds?labGrown=1 ; https://www.daviddouglas.com/about-us ; https://www.daviddouglas.com/pages/redesign-your-engagement-ring ;
  https://www.daviddouglas.com/pages/return-policy
- Lambert Jewelers : https://divinefinejewelry.com/robots.txt et https://divinefinejewelry.com/ (redirigés vers `lambertcojewelers.com`) ;
  https://lambertcojewelers.com/apps/ring-builder/engagement-rings (curl, puis Chromium) ; https://lambertcojewelers.com/apps/ring-builder/diamonds?stoneType=Lab+Grown ;
  https://lambertcojewelers.com/pages/custom-design ; https://lambertcojewelers.com/pages/about-us ; https://lambertcojewelers.com/pages/return-policy ;
  https://ringbuilder.belgiumwebnet.com/robots.txt (renvoie la page de l'application)
- Sovereign Jewels : https://sovereignjewels.com/robots.txt ; https://sovereignjewels.com/ ; https://sovereignjewels.com/pages/custom-engagement-rings ;
  https://sovereignjewels.com/pages/sovereign-design-studio (curl, puis Chromium) ; https://sovereignjewels.com/pages/about-us ; https://sovereignjewels.com/pages/faq ;
  https://sovereignjewels.com/collections/engagement-rings-bridal-sets ; https://sovereignjewels.com/policies/refund-policy ;
  https://shopify.pencildesign.co/partner/26ceb054/landing-pages/sovereign-design-studio (Chromium) ; https://pencildesign.co/robots.txt
- Godwin Jewelers : https://www.godwinjewelers.com/robots.txt ; https://www.godwinjewelers.com/ ; https://www.godwinjewelers.com/pages/custom-engagement-rings ;
  https://www.godwinjewelers.com/pages/custom-ring-builder ; https://www.godwinjewelers.com/jewelry/engagement-rings/lab-grown-diamond-engagement-rings ;
  https://www.godwinjewelers.com/diamonds (redirigée vers `/pages/diamond-jewelry`) ; https://www.godwinjewelers.com/pages/about-us ;
  https://www.godwinjewelers.com/benchmark-ring-lab
- Regal Studio : https://regal.studio/robots.txt ; https://regal.studio/ ; https://regal.studio/product-category/gold-rings/engagement-rings/ ;
  https://regal.studio/custom-engagement-ring-cost-in-atlanta/ ; https://regal.studio/custom-design/ ; https://regal.studio/custom-engagement-ring-cost-atlanta/ (404)
- Icebox : https://www.icebox.com/robots.txt ; https://www.icebox.com/ ; https://www.icebox.com/results/rings/engagement-rings (redirigée vers
  `/collections/engagement`) ; https://www.icebox.com/products/2-50ct-round-solitaire-diamond-engagement-ring ; https://www.icebox.com/pages/custom-jewelry ;
  https://www.icebox.com/pages/our-story
- Ascot Diamonds : https://www.ascotdiamonds.com/robots.txt ; https://www.ascotdiamonds.com/ ; https://www.ascotdiamonds.com/engagement-rings (redirigée vers
  `/jewelry/engagement-rings`) ; https://www.ascotdiamonds.com/custom-engagement-rings ; https://www.ascotdiamonds.com/locations/atlanta ;
  https://www.ascotdiamonds.com/company/about-us/ ; https://www.ascotdiamonds.com/company/custom-ring-design ; https://www.ascotdiamonds.com/company/policies ;
  https://www.ascotdiamonds.com/diamonds ; https://www.ascotdiamonds.com/about-us et https://www.ascotdiamonds.com/ascot-policies (404)
- Bashinski : https://www.bashinski.com/robots.txt ; https://www.bashinski.com/ ; https://www.bashinski.com/ringsettings ;
  https://www.bashinski.com/ringsettings-diamonds ; https://www.bashinski.com/pages/custom-jewelry
- Harkleroad : https://harkleroaddiamonds.com/robots.txt ; https://www.harkleroaddiamonds.com/ ; https://www.harkleroaddiamonds.com/ringsettings ;
  https://www.harkleroaddiamonds.com/diamonds ; https://www.harkleroaddiamonds.com/pages/custom-jewelry ; https://www.harkleroaddiamonds.com/pages/about-us
- Brown & Co. : https://brownjewelers.com/robots.txt ; https://brownjewelers.com/ ; https://brownjewelers.com/pages/brown-co-bridal-build-your-ring
- Accueils seuls : https://www.iroff.com/robots.txt et https://www.iroff.com/ ; https://www.worthmorejewelers.com/robots.txt et https://www.worthmorejewelers.com/ ;
  https://laurapearce.com/robots.txt et https://laurapearce.com/
- Bloqués ou illisibles : https://solomonbrothers.com/robots.txt (seule page lue) ; https://www.atlluxuryjewelry.com/robots.txt (429) ;
  https://www.windsorfinejewelers.com/robots.txt, https://www.windsorfinejewelers.com/ (403) et https://www.windsorfinejewelers.com/engagement-rings (403) ;
  https://www.tarafinejewelry.com/robots.txt (certificat expiré)

Sources secondaires (extraits d'index de recherche, non ouvertes sauf mention) :

- Solomon Brothers : https://solomonbrothers.com/pages/custom-design
- ATL Luxury Jewelry : https://www.atlluxuryjewelry.com/engagement ; https://www.atlluxuryjewelry.com/premiumcustom/custom-engagement-rings
- Windsor Fine Jewelers : https://www.windsorfinejewelers.com/engagement-rings
- Iroff & Son : https://www.iroff.com/pages/custom-engagement-ring-design ; https://www.iroff.com/pages/custom
- D. Geller & Son (prix de la grille) : https://www.dgeller.com/jewelry/diamond-engagement-rings
- Autres maisons vues dans les résultats, non retenues faute d'outil ou de prix en ligne : https://www.gainesvillejewelry.com/ ; http://www.jwojewelers.com/ ;
  https://www.jcortesjewelry.com/ ; https://rkcojewelers.com/engagement-rings ; https://luxorfine.com/ ; http://throwingstarsjewelry.com/ ; https://mettlebyabby.com/
- Annuaires et listes : https://www.stonealgo.com/local-jewelers/atlanta-ga ; https://www.theknot.com/marketplace/jewelers-atlanta-ga-368175 ;
  https://atlanta.com/articles/best/best-jewelers-in-atlanta ; https://www.atly.com/united-states/georgia/atlanta/best-jewelry-store-ring-store
- Hors périmètre : https://www.venazia.com/lab-grown-diamond-engagement-rings-atlanta-ga ;
  https://www.briangavindiamonds.com/pages/atlanta-loose-diamonds-georgia-engagement-rings-and-diamond-jewelry-online ; https://www.brilliantearth.com/atlanta-jewelers/ ;
  https://stores.kay.com/ga/alpharetta
