# Audit : The Right Ring (Robert Corio Designs ; boutique Hegeman & Co.)

- **Site** : https://www.therightring.com/ ; constructeur : https://build.therightring.com/
- **Date** : 15/11/2026 (réalisé le 25/11/2026 d'après l'horloge de la session ; date de l'étude conservée)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 (page d'accueil du constructeur seulement)
- **Statut** : **partiel**. Le constructeur a été actionné jusqu'à l'étape 3 sur 4. L'étape 4 (choix du diamant) appelle `/api/diamonds.php`, interdit par le robots.txt de build.therightring.com (`Disallow: /api/`, `/submit_design.php`) : je ne l'ai pas ouverte, je n'ai pas cliqué « Next » ni « Finish » à l'étape 3. Aucun panier ni paiement en ligne n'existe dans le parcours (acompte hors du constructeur). Par précaution, toute requête `/api/` du navigateur de test était coupée localement (aucune n'est partie). Constructeur Hegeman (build.hegemanandco.com) interdit à ClaudeBot : non ouvert.
- Repères : [V] vérifié (page lue ou contrôle actionné), [V, code] lu dans le code servi, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
| --- | --- |
| Accueil du constructeur | 3 entrées de départ : questionnaire « this-or-that » (lien `/gallery.html#quiz-engagement`), « Choose my options myself », « Upload Your ChatGPT Image » (NEW) ; onglets Engagement Rings / Wedding Bands ; barre de progression 0 % |
| Étape 1 « Build the Right Ring » | 22 bagues modèles + « Build from Scratch », prix affiché sous chaque modèle ; fiche de détail (image « drag to scrub » + bouton « Select this base ring ») ; fenêtre « Choose Your Stone Shape » (9 formes) |
| Étape 2 « Customize Your Ring » (25 %) | Pierre : diamant de la forme choisie, case « I want a colored stone », « Other Diamond Shape » (texte libre) ; métal : 4 choix qui font **avancer seul** à l'étape 3 |
| Étape 3 « Add Customization Options » (50 %) | ~40 options facultatives à coût indiqué ; boutons « Back », « Next → », « Finish ✦ » |
| Étape 4 « Select Your Diamond » | **non ouverte** (api interdit) [V : intitulé lu dans le bandeau d'étapes] |
| Résumé « Review » | non atteint |
| Hors constructeur | « Request a free estimate » ou acompte de 250 $ ; portail client (3D sous 48 h, résine, 2e acompte) [V : page `/step-by-step-process`] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Message Matt | bouton | menu : Email (« with your design saved »), Text, Call (401) 208-2283 ; rien d'envoyé (ouvert une fois par erreur de ma part, aucune suite) | – | OK |
| Sign in with Google | bouton | non cliqué (identification) | – | non testé : compte |
| Have us suggest style options | lien | mène à `/gallery.html#quiz-engagement` ; non suivi | – | non testé |
| Choose my options myself | bouton | présent, bascule vers la liste de modèles | – | OK [V, présence] |
| Upload Your ChatGPT Image | bouton | non cliqué (téléversement de fichier) | – | non testé |
| Engagement Rings / Wedding Bands | onglets | Wedding Bands : liste de bandes (7 Stone, Plain & Textured, Decorative…) + bandeau « Your ring → CAD model » + « Build from Scratch » ; Next reste grisé | variable | OK |
| ? « More info about Choose a Template Ring » | bouton | présent | – | non testé |
| Add to shortlist (étoile, 22 modèles) | bouton | l'étoile se remplit (testé sur une bande) | – | OK |
| Tap to view details (modèle) | clic | fenêtre : nom, description, image tournante « drag to scrub », bouton « Select this base ring — setting only ($1,900) » ; vidéo du modèle chargée (`Base ring videos/Nelson Style.MP4`) | prix de la monture | OK |
| Select this base ring | bouton | ouvre le choix de forme | 1 900 $ pour The Classic | OK |
| Formes (Round, Princess, Oval, Marquise, Pear, Cushion, Emerald, Radiant, Asscher) | tuiles | Round : le bouton devient « Select a Round with The Classic Style Base Ring » ; passe à l'étape 2, 25 % | inchangé | OK |
| I'll decide later | lien | présent | – | non testé |
| ? Stone Options | bouton | explique Other Diamond Shape et Colored Stone ; fermeture par « Got it » (Échap ne ferme pas) | – | OK |
| Other Diamond Shape | lien | fenêtre texte libre « What diamond shape do you have in mind? » avec Save / Skip ; Skip testé, rien saisi | – | OK |
| I want a colored stone | case | cochée puis décochée : pas de changement visible dans le texte (sous-choix de pierre non observé) | – | partiel |
| Yellow Gold / Yellow Gold with a Platinum Head / Rose Gold / Platinum | choix | un clic **valide et avance** à l'étape 3 (testé Yellow Gold with a Platinum Head puis, dans une autre session, Rose Gold). Pas de retour visuel du prix | non affiché | OK |
| ? Select Any Added Features | bouton | présent | – | non testé |
| ~40 options d'étape 3 | cartes à cocher | 4 boutons non nommés vus ; cases non cochées une à une (voir « Options ») | indiqué par option | non testé en détail |
| Back / Next → | boutons | Next grisé tant que la sélection manque, pulse quand possible ; Back non testé | – | OK |
| Finish ✦ (étape 3) | bouton | non cliqué : finit le formulaire, probablement `/submit_design.php` interdit | – | non testé : robots.txt |
| Étape 4 : recherche de diamants (filtres taille, couleur, pureté, prix, certificat) | écran | non ouvert | – | non testé : `/api/` interdit |
| 3D interactive, AR, sur la main, zoom, 360° | vues | pas de 3D dans le constructeur : image tournante « drag to scrub » seulement ; la 3D est envoyée après l'acompte | – | absent |
| Partager, comparer, guide des tailles, WhatsApp, rendez-vous, financement | services | aucun vu dans le constructeur ; coordonnées : e-mail, SMS, appel | – | absent |
| Panier | – | aucun panier ; acompte hors site (formulaire, carte par téléphone, Zelle, chèque) [V : page process] | – | absent |

## Options disponibles

- **Modèles de départ (22, prix affichés)** : Solitaires : Classic 1 900 $, Martini 1 900 $, Tulip 1 900 $, Whisper 2 300 $ (halo caché), Horizon 3 000 $, Vault 3 000 $. Three stone : Lotus 3 600, Trinity 3 700, Geometry 4 000, Peak 3 500, Luna 3 300, Flow 3 700, Shield 3 900. Diamonds down the band : Runway 3 400, Trail 2 900. Halo : Crown 4 100, Gallery 3 800. Cluster : Bloom 3 800, Wild 7 000, Mosaic 4 000. Step down / five stone : Avenue 4 000, Five Row 3 700 (tous en $, mention « setting only » ou « includes side diamonds »). [V, build.therightring.com]
- **Formes de pierre (9)** : Round, Princess, Oval, Marquise, Pear, Cushion, Emerald, Radiant, Asscher ; autre forme en texte libre.
- **Métal (4)** : Yellow Gold, Yellow Gold with a Platinum Head, Rose Gold, Platinum. Ni titre (14/18 k) ni blanc proposé dans le constructeur.
- **Options d'étape 3 (prix indiqués)** : Claw Prongs, Tulip Head, Elongated Cutouts, Top of the Band Cutout, U-Shaped Rails, Cathedral, Half Moon Bezel (or, platine, side diamonds), European Band, Stone Higher/Lower, East West : sans surcoût ; Filagree Cutouts 300 à 400 $ ; Milgrain 250 $ ; Woodgrain 500 $ et Vines 300 $ ; Hidden Stone 100 $ par diamant ou 80 $ par pierre de couleur ; Hidden Halo 350 $ ; Yellow Diamond on ends 250 $ chacun ; Pattern Engraving 100 à 300 $ ; Written Engraving sans surcoût ; Full Bezel, Thicker Band, Non-Symmetrical, Alternating Stone : « cost will be estimated ». Style des diamants latéraux : Shared Prongs, Channel, Pavé (sans surcoût).
- **Bandes de mariage** : 7 Stone, Plain & Textured, Decorative, etc. (liste vue en partie).
- Taille de doigt, certificat, carat, origine naturel/synthétique : **pas dans les étapes 1 à 3** ; synthétique annoncé à l'étape 4 / FAQ [V : FAQ « Yes, you can select a lab grown diamond through our ring builder »].

## Prix, délais, retours, garanties

- **Prix** : seul le prix de la monture est affiché (de 1 900 à 7 000 $) ; le prix final arrive en « final estimate » après la 3D, jamais calculé en ligne [V, `/step-by-step-process`]. Surcoûts d'options affichés au détail.
- **Paiement** : 250 $ d'acompte (« locks in your design »), puis moitié du total (carte par téléphone ou en ligne, Zelle, chèque), solde avant l'expédition [V].
- **Délais** : 3D interactive sous 48 h (« usually less ») ; résine envoyée sous 2 jours, 5 à 7 jours ouvrés d'acheminement ; fabrication 4 à 5,5 semaines ; rush sur demande ; envoi en express de nuit [V].
- **Retours** : pas de politique de retour trouvée. FAQ : si le client n'aime pas, « we will make adjustments as necessary to redesign your ring » [V].
- **Garantie** : « free lifetime repairs on the ring with our care plan/through insurance plans » [V, FAQ].
- **Certificats** : relation avec des fournisseurs certifiés GIA/AGTA ; page « GIA Certificates » ; pierre apportée par le client acceptée (envoi assuré) [V, FAQ].
- **Synthétique** : « lab grown » (FAQ) ; pas de libellé légal particulier lu.
- **Langues/devises** : anglais, dollars.

## Confiance et service

- Contact : Matt et l'équipe répondent « within 24 hours » ; e-mail, SMS, appel ; FaceTime pour la pierre [V].
- Preuves de fabrication : modèle 3D interactif, résine 3D imprimée à taille réelle avec photo dans le portail, « made from scratch in Rhode Island », « no outsourcing » [V, accueil www]. Vidéo de chaque modèle de départ [V]. Pas de photos d'atelier vues sur le constructeur.
- Avis clients : aucun vu sur le constructeur ni sur l'accueil [V, absence].
- Boutique physique : Hegeman & Co. à Providence ; recyclage des métaux, approvisionnement éthique annoncés [V, FAQ].

## Points forts à retenir pour JR Diamond

1. **Modèle 3D envoyé avant fabrication + résine** : preuve « ce que vous voyez existe ». Preuve : `/step-by-step-process`, étapes 4 et 6.
2. **Prix des options affichés un à un** (milgrain 250 $, halo caché 350 $) : prix expliqué par poste. Preuve : étape 3.
3. **Vidéo et image tournante par modèle de départ** : fenêtre « drag to scrub » et fichier MP4 par style.
4. **Avance de projet chiffrée** : acompte 250 $ puis moitié, étapes claires et délai 4 à 5,5 semaines.
5. **Constructeur rapide** : première image à 0,8 s ; une option de métal avance à l'étape suivante.
6. **Questionnaire de style et import d'une image IA** (« Upload Your ChatGPT Image ») : entrées pour les indécis.

## Défauts observés

- Le **prix final n'est pas donné en ligne** : seulement la monture, puis une estimation après contact.
- Choisir un métal **fait avancer sans bouton** de validation ni retour de prix [V].
- Info-bulle fermée seulement par « Got it » (Échap sans effet) [V].
- Pas de choix de titre 14/18 k, ni de taille, ni de carat avant l'étape 4.
- Aucun avis client ; politique de retour introuvable.
- Constructeur chargé par Tailwind CDN, scripts Facebook, Clarity, GTM [V, requêtes]. Traceurs nombreux.
- Cloudflare Turnstile et connexion Google chargés dès l'accueil [V, code].

## Limites de l'audit

- Étape 4 (diamants, filtres, certificat, choix naturel/synthétique) et résumé non vus : `/api/` interdit au robots.txt.
- « Finish » et formulaire de dépôt non cliqués (envoi de formulaire interdit).
- Mesure du visuel principal : première image utile 0,84 à 1,4 s (ordinateur), 1,2 s (iPhone) ; chargement à froid, une mesure par appareil.
- Écran « mobile » : contrôles recensés (33), parcours complet non rejoué.
- Pages www lues par curl et navigateur : accueil, process, FAQ (réponses dépliées pour 6 questions seulement ; les 19 autres non lues).

## Sources

- https://build.therightring.com/ (constructeur, 15/11/2026)
- https://www.therightring.com/step-by-step-process
- https://www.therightring.com/info-and-faq
- https://www.therightring.com/ (accueil)
- robots.txt : https://build.therightring.com/robots.txt, https://www.therightring.com/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/the-right-ring/`
