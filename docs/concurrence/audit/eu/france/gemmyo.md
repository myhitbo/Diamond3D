# Audit : Gemmyo, fiche à options de la marque nationale de référence (français, €)

| | |
|---|---|
| Site | Gemmyo (marque lancée en 2011, boutiques à Paris, Belgique, Suisse, Japon ; « fabrication à la commande dans 5 ateliers français », V `/c/54` de MonDiamant et pages Gemmyo) |
| Page de départ | https://www.gemmyo.com/mariage/bagues-de-fiancailles.html, puis la fiche https://www.gemmyo.com/bague-or-blanc-18-cts-diamant-lady-0-7-ct.html |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Fiche Lady 0,7 ct actionnée (métal, qualité, taille) ; guides, rendez-vous et catalogue lus. **Panier non atteint ni tenté** : robots.txt interdit `/cart/`, `/checkout/`, `/ajax/` (et les paramètres de filtre `criteria`, `size`, `quality`, `options`…), donc le bouton « ajouter au panier » n'a pas été actionné |
| robots.txt | interdit `/cart/`, `/checkout/`, `/ajax/` dans chaque langue, tout paramètre `criteria`, `size`, `quality`, `search`, `options`, `?*sortBy` etc., les pages « livrés en 3 jours » (V) ; `Crawl-delay: 5` pour Bingbot seulement, rien pour `*` ni ClaudeBot (V). Pas de défi, pas de captcha. Les requêtes de mesure d'audience vers `tss.gemmyo.com` ont été bloquées par notre garde (adresse d'un sous-domaine sans robots.txt lisible) : rien n'y a été envoyé (V) |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Catalogue « Bagues de fiançailles » | par style, par pierre, par diamant ; modèles à prix « dès » (Lady 0,7 ct 4 600 €, Milady platine 2 370 €, Capucine 4 mm 1 790 €, Daphné 4 mm 2 600 €…) (V) | prix par modèle | photos |
| Fiche Lady 0,7 ct | Métal (4), Pierre (« Diamant » seul), Qualité (4), Taille (18 valeurs + « je ne sais pas »), gravure (+30 €), « recevez plus de photos », « découvrir en boutique » (V) | recalculé quand on change qualité ou métal ; **le poids est une autre fiche** (Lady 1 ct, 1,2 ct) (V) | photos de studio et photo portée ; la page change quand le métal change (V) |
| Panier | non atteint (voir Statut) | — | — |

## Contrôles vérifiés

Fiche « Bague Lady 0,7 ct », diamant rond de 5,7 mm, griffes, anneau de 1,7 mm (V). Prix TTC.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal : or blanc, or jaune, or rose 750 ‰, platine 950 ‰ | 4 choix dans un accordéon | chacun **ouvre une autre fiche** (adresse `…or-jaune-18-cts…`, `…platine-diamant…`) ; le titre et la photo changent (V) | or blanc, jaune, rose : 4 600 € ; platine : 5 050 € (+ 450 €) (V) | fonctionnent (4 sur 4) |
| Pierre : Diamant | accordéon | une seule pierre proposée ; texte : « Un certificat GIA ou HRD est toujours fourni pour les diamants de plus de 0,3 carat » (V) | — | ouvert |
| Qualité : HSI · GVS · EVVS · DIF | fenêtre à 4 lignes | chaque ligne donne le prix, l'écart et une phrase (« Un bel équilibre entre pureté et accessibilité ») ; le prix de la page suit (V) | 4 600 · 5 200 (+ 600) · 6 400 (+ 1 800) · 7 600 € (+ 3 000) ; ou en 3 fois (V) | fonctionne (4 sur 4) |
| Taille | fenêtre | « Je ne sais pas », 45 à 62 ; « Recevez gratuitement un baguier » ; la remise à taille est offerte « sous 30 jours » pour un bijou non porté, gravé ou non (V) | inchangé | fonctionne ; **52** choisi, « je ne sais pas » non testé |
| Ajouter une gravure (+30 €) | lien | annoncé : lettres anglaises ou droites, un message (V, texte des contrôles) | + 30 € | **non ouvert jusqu'au bout** (pas de saisie) |
| Afficher le prix | bouton avec un œil barré | icône d'un œil barré à côté du prix (V) ; probablement un masquage du prix (I) | — | **non actionné** (un premier clic, bloqué par la fenêtre de cookies, n'a pas été rejoué) |
| Ajouter au panier | bouton | **non actionné** (robots.txt interdit le panier et `/ajax/`) | — | non testé |
| Découvrir en boutique | bouton | mène à la prise de rendez-vous (4 services : découvrir les créations, rendez-vous vidéo, déposer un bijou, atelier « Tea & Jewelry ») (V) | — | lu |
| Recevez plus de photos · Nos visuels | boutons | fenêtre de texte : « Chaque bijou est capturé et retouché par l'équipe Gemmyo » ; les bijoux sont « plus fins et raffinés que les images ne le laissent entrevoir » (V) | — | lus |
| Cœur / envoyer le détail par e-mail | bouton, champ | « Recevez immédiatement le détail de cette création par e-mail ou partagez-la » (V) | — | **non rempli** (e-mail) |
| Contact (bulle) | chat | présent en bas à droite (V) | — | **non ouvert** (règle) |
| Cookies | fenêtre bloquante | « Tout accepter » ou « Gérer » ; dans « Gérer », les catégories sont **déjà cochées**, avec « Continuer sans accepter » en bas (V) | — | refusé par « Continuer sans accepter » |

## Options disponibles

- **Pierre** : diamant naturel, qualités HSI, GVS, EVVS, DIF (couleur et pureté liées) ; certificat GIA ou HRD au-dessus de 0,3 ct (V). Le diamant « chocolat » et « cognac » est vendu à part (V, liens). **Aucune pierre synthétique**.
- **Poids** : changer de fiche (0,7 ct, 1 ct, 1,2 ct…) ; Lady 1 ct 7 470 € et Lady 1,2 ct 8 990 € dans la même qualité de base (V). Pas de choix de poids sur la fiche.
- **Métaux** : or blanc, jaune, rose 750 ‰, platine 950 ‰ (V). **Forme** : par fiche (Lady ovale pavée…) (V).
- **Taille de doigt** : 45 à 62, ou « je ne sais pas » ; baguier gratuit (V). **Gravure** : 30 € (V).
- **Rendez-vous** : en boutique, en vidéo (30 min), création, dépôt d'un bijou, atelier ; téléphone et WhatsApp (V, `/prendre-rendez-vous`).

## Prix, délais, retours, garanties

- **Affichage** : prix TTC unique, avec fractionnement en 3 fois (« 4 600 € ou 3 × 1 533,34 € ») (V). Aucune décomposition ; l'écart entre qualités est affiché (+ 600, + 1 800, + 3 000 €) (V).
- **Délai** : « Livré au plus tard le 14/12/2026 » (soit 4 semaines au jour du relevé) et « livraison assurée pour Noël pour toute commande passée avant le 7 décembre » (V). Pour le 24/12, commande en boutique jusqu'au 6 décembre (V, page de rendez-vous).
- **Livraison** : offerte en France (DOM-TOM compris), Suisse, UE, Japon ; retrait en boutique (V).
- **Retours** : « échanges, retour, remise à la taille offerts sous 30 jours » ; remise à taille offerte pour un bijou non porté, avec ou sans gravure (V). L'exception du sur-mesure n'a pas été relevée (conditions non lues).
- **Garantie** : « garantie à vie contre vice et défaut caché » (V, détails).
- **Fabrication** : « fabriqué en France, dans nos ateliers » ; « fabrication 100 % artisanale et française » ; production lancée « dans les 24 heures » après la commande (V pour l'annonce du site, I pour le détail repris d'une page tierce).
- **Paiement** : chèque, carte ; en 3 fois (V, fenêtre « paiement sécurisé »).

## Confiance et service

- **Visuels** : une page « nos visuels » reconnaît que les images sont retouchées et que le bijou réel est plus fin (V). Photo de studio, photo portée et gros plan de la pierre (V, captures).
- **Garde-fou** : la fiche donne la dimension de la pierre (5,7 mm), la largeur de l'anneau (1,7 mm), le poids du métal (1,88 g) et une référence produit (V).
- **Guides** : guide du diamant (GIA, HRD, IGI), choix de la bague, choix de la taille (V).
- **Boutiques** : plusieurs boutiques et rendez-vous vidéo ; téléphone, WhatsApp (V).
- **Avis** : aucune note affichée sur la fiche relevée (V).
- **Fabrication visible** : aucune photo ni vidéo d'atelier sur la fiche (V).

### Terme du diamant synthétique et décret 2002-65

Sans objet : le site ne vend que du diamant naturel et du diamant de couleur naturel (chocolat, cognac) ; aucune occurrence de « synthétique » ou de « laboratoire » dans le guide du diamant ni dans le guide de la bague (V, relevé sur le texte lu).

## Points forts à retenir pour JR Diamond

1. **Chaque qualité affiche son surcoût** (+ 600 €, + 1 800 €, + 3 000 €) avec une phrase qui dit à qui elle convient (V). C'est la forme la plus claire de « prix expliqué » vue en France.
2. **Le métal est une adresse**, avec un prix propre : le platine coûte 450 € de plus, les trois ors le même prix (V). Le client apprend que le platine, pas l'or, fait la différence.
3. **Dimensions réelles de la pierre et de l'anneau dans la fiche** (5,7 mm, 1,7 mm, 1,88 g) (V) : exactement le contenu des « poids et cotes » qu'un modèle issu de CAO fournit.
4. **Une page qui avoue la retouche** : « nos visuels : en savoir plus » (V). JR Diamond peut dire l'inverse (« le modèle est celui du fichier de fabrication »), mais le geste de transparence est le même.
5. **Rendez-vous vidéo de 30 minutes** pour qui ne peut pas se déplacer (V) : le pendant, pour une clientèle en Israël et en France, d'un appel WhatsApp vidéo avec l'atelier.
6. **Taille facultative** (« je ne sais pas ») et baguier gratuit (V).
7. **Retour, échange et mise à taille de 30 jours, même gravé** (V).

## Défauts observés

1. **Aucune 3D, aucun choix de poids** sur la fiche : le carat est une autre fiche, donc une autre page à chercher (V).
2. **Un bouton « Afficher le prix » avec un œil barré** à côté du prix déjà visible ; sa fonction n'a pas été comprise (V pour la présence).
3. **Fenêtre de cookies bloquante**, avec catégories préchoisies et « Tout accepter » en vedette ; « Continuer sans accepter » existe mais n'est visible qu'après « Gérer » (V).
4. **Sur iPhone**, la photo occupe tout le premier écran ; le prix commence à 713 px de haut, sous la ligne de flottaison de 664 px, et le bouton « ajouter au panier » à 1 107 px (V). La page tient en 390 px de large, sans défilement horizontal (V). Le document est prêt en 7,1 s sur iPhone émulé (machine partagée) (V).
5. **Qualité exprimée en codes** (« HSI », « GVS ») sans la couleur ni la pureté séparées (V) ; l'aide dit seulement que « H fait référence à la couleur, SI à la pureté ».
6. **Une bulle « contact »** recouvre le coin du contenu sur mobile (V, capture).

## Limites de l'audit

- Panier non atteint : l'audit s'arrête au bouton « ajouter au panier » (robots.txt). Frais, récapitulatif, moyens de paiement viennent de la fiche et des fenêtres d'aide.
- Gravure non saisie ; « je ne sais pas » non testé pour la taille ; photos non comparées entre les métaux.
- Conditions générales de vente non lues : l'exception du sur-mesure et les retours détaillés ne sont pas relevés.
- Une seule fiche ; aucun filtre du catalogue actionné (paramètres interdits par robots.txt).
- Aucun formulaire, aucun chat, aucun compte, aucun WhatsApp. iPhone émulé avec Chromium (pas un vrai Safari).

## Sources

- https://www.gemmyo.com/mariage/bagues-de-fiancailles.html · fiche : `/bague-or-blanc-18-cts-diamant-lady-0-7-ct.html` (et variantes `…or-jaune…`, `…or-rose…`, `/bague-platine-diamant-lady-0-7-ct.html`)
- Guides : `/guides-et-conseils/nos-pierres-precieuses/diamant.html` · `/guides-et-conseils/choisir-bague-fiancailles.html` · rendez-vous : `/prendre-rendez-vous` · règles : `/robots.txt`
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/029abcd0-3d8a-56d2-8c2e-67bb96f3ed98/scratchpad/fr/`
