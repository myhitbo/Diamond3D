# Audit : L&M Fine Jewelry

- **Site** : L&M Fine Jewelry (Missoula et Kalispell, Montana) — https://lmfinejewelry.com
- **Page de départ** : https://lmfinejewelry.com/design-your-ring
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 (avec WebGL logiciel SwiftShader) ; affichage iPhone 13 (relevé des contrôles seulement)
- **Statut** : **partiel**. Le robots.txt autorise tout (`Allow: /`), mais la vue 3D du constructeur dépend d'une API tierce (jeweleros.com/api/) interdite par le robots.txt de ce domaine : l'étape finale n'a pas pu être auditée.
- Légende : V = vérifié (page lue ou contrôle actionné), I = inféré, S = supposé.

## Parcours

Le constructeur est un assistant en 4 étapes (V, « Step 1 of 4 » … « Step 4 of 4 »), puis une « 3D Ring Designer » censée s'ouvrir.

| Étape | Options (V) |
|---|---|
| 1. Style de départ | Couleur de métal : Yellow Gold, White Gold, Rose Gold (3 pastilles). Style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch ». |
| 2. Pierre centrale | Bascule Natural / Lab Grown. Formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later ». |
| 3. Taille de la pierre | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carat, « Decide later ». |
| 4. Délai souhaité | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet. |
| 5. Designer 3D | Non atteint : message « Something went wrong Try again » après le choix du délai. |

Le bandeau supérieur reprend les choix déjà faits (« Solitaire », « Round », « 1 carat »), avec un bouton Retour et un bouton « Skip ». Les carats, les formes et le métal ne s'ajoutent qu'à une description : aucun prix n'apparaît à aucune étape (V).

## Contrôles vérifiés

Relevé avec controls.cjs (page de départ) : 8 contrôles sur ordinateur, 7 sur iPhone. Les cartes de style sont des éléments non-bouton, que l'outil ne liste pas ; je les ai actionnées à la main avec Playwright (ordinateur).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Logo | lien `/` | Retour à l'accueil | non | non testé (sortie du parcours) |
| ABOUT, CONTACT | liens `/about`, `/contact` (ordinateur) | Pages du site | non | CONTACT lue (V) : coordonnées et formulaire ; formulaire non rempli |
| Open menu | bouton (iPhone seulement) | Ouvre le menu | non | non testé |
| Back | bouton | Étape précédente | non | affiché ; actionné non testé sur ordinateur |
| Skip | bouton | Saute l'étape | non | grisé à l'étape 1 ; non testé |
| Yellow / White / Rose Gold | 3 boutons | Choisit la couleur de métal des vignettes ; jaune sélectionné par défaut | aucun | jaune vérifié ; blanc et rose non cliqués (S : changent la couleur des vignettes) |
| Solitaire | carte | Passe à l'étape 2 (V) | aucun | fonctionne |
| Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | cartes | Même rôle (I) | aucun | non testés : un seul style suffit à passer l'étape |
| Natural / Lab Grown | bascule | Change l'état du bouton ; le libellé « Lab Grown » est la seule mention du synthétique | aucun | fonctionne (V) |
| Round | carte | Passe à l'étape 3 (V) | aucun | fonctionne |
| Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, Decide later | cartes | Même rôle (I) | aucun | non testés |
| 1 carat | carte | Passe à l'étape 4 (V) | aucun | fonctionne |
| 0.5, 1.5, 2, 2.5, 3, 4, 5 carat, Decide later | cartes | Même rôle (I) | aucun | non testés |
| 1 - 4 weeks | carte | Lance « Loading the ring designer… » puis l'erreur « Something went wrong Try again » (V) | aucun | **échec** (voir Défauts) |
| 1 - 3 mois, 3 - 6 mois, Not sure yet | cartes | Même suite (I) | aucun | non testés |
| Try again | lien/bouton | Relance la génération | aucun | **non cliqué** : il rappellerait l'API interdite |
| Vue photo, vidéo, 360°, sur la main, AR, zoom | — | Absents du parcours atteint | — | non applicable |
| Partager, enregistrer, comparer, guide des tailles, financement, livraison, retours, garantie, chat, WhatsApp, essayage à domicile, panier | — | Aucun de ces contrôles n'existe dans le parcours atteint ; seul « Book an Appointment » apparaît dans le menu (V) | — | non testés ; `/cart` répond 404 (V) |
| Book an Appointment | lien de menu | Prise de rendez-vous | non | non testé |

Mobile : même structure que sur ordinateur (7 contrôles dont « Open menu ») ; le parcours en 4 étapes n'a pas été rejoué sur iPhone (un lancement a été refusé par le système d'autorisation de la session, non contourné).

## Options disponibles

- **Métal** (étape 1) : or jaune, or blanc, or rose. Ni titre (14 k ou 18 k) ni platine dans le parcours (V).
- **Styles** : 8 + « Start from scratch ».
- **Origine** : naturel, synthétique (« Lab Grown »).
- **Formes** : 9 (rond, ovale, coussin, émeraude, princesse, asscher, marquise, poire, radiant).
- **Carats** : 0,5 à 5 en 8 paliers.
- **Délai souhaité** : 4 tranches.
- **Taille de doigt, gravure, pavage, griffes, filtres de pierres** : absents du parcours atteint ; la page dit que le reste se personnalise dans le « 3D Ring Designer » (V), non vu. La page de description indique que le choix du diamant se fait en boutique.

## Prix, délais, retours, garanties

- **Prix** : aucun, ni dans le constructeur ni dans la collection https://lmfinejewelry.com/collections/engagement-rings (V : liste de modèles nommés, sans prix).
- **Délai** : « have it ready for you in just a couple of weeks » (V, https://lmfinejewelry.com/custom-engagement-rings). Pas de durée ouvrée.
- **Panier** : aucun. `/cart` = 404 (V). Parcours = conception en ligne, puis rendez-vous en boutique à Missoula ou Kalispell, puis commande.
- **Retours, garantie, certificats, livraison, paiement** : non trouvés dans les pages lues (V). Pages `Terms of Service` et `Privacy Policy` existent en pied de page ; non lues.
- **Monnaie, langue** : anglais ; aucun prix donc aucune devise.

## Confiance et service

- Deux salles d'exposition : 3465 American Way, Missoula, (406) 721-4025 ; 221 S Main Street, Kalispell, (406) 200-8188 (V, /contact). Formulaire de contact avec choix de la galerie et du type de demande (non rempli).
- Avis : deux extraits d'avis Google en citation sur la page de custom (V) ; pas de note chiffrée.
- Histoire familiale : plus de 25 ans d'expérience, famille Bohner (V).
- Fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande (V sur les pages lues).
- Chat, WhatsApp : aucun bouton visible (V).

## Points forts à retenir pour JR Diamond

1. **Parcours court et lisible** : 4 questions simples avant toute complexité (V, étapes 1 à 4). JR Diamond peut s'en inspirer pour démarrer par le style puis la pierre.
2. **Le synthétique est un choix de premier niveau** (« Natural / Lab Grown », V, étape 2), sans connotation d'imitation.
3. **Le récapitulatif en pastilles** (« Solitaire », « Round », « 1 carat ») rappelle les choix faits à chaque étape (V, capture).
4. **Une question de délai de besoin** (« When do you need your ring? ») qui prépare la relation de l'atelier (V, étape 4). JR Diamond annonce un délai ferme de 14 jours ouvrés, ce qui est plus fort.
5. **Promesse proche de la nôtre** : « Design your ring online in stunning 3D » puis pierre en boutique (V). Leur 3D est un outil tiers (JewelerOS), non le fichier de fabrication (I).

## Défauts observés

- **La 3D ne se charge pas** : après l'étape 4, « Loading the ring designer… » puis « Something went wrong Try again », sans fin, sur 18 s d'attente, avec WebGL fonctionnel (`webgl2` vrai, V). La console montre un échec CORS sur `https://www.jeweleros.com/api/config/…` dès l'ouverture de la page (V). Le blocage ne vient donc pas de l'absence de WebGL, contrairement à l'hypothèse de l'inventaire. Cause probable : l'API tierce n'accepte pas l'origine du navigateur de test (I).
- Aucun prix, aucun panier, aucune commande en ligne.
- Le titre d'or et le platine ne sont pas proposés avant la 3D.
- Les cartes de style ne sont pas des boutons natifs (l'outil de relevé ne les voit pas), ce qui laisse supposer une accessibilité clavier à vérifier (S).
- Le texte « Decide later » est présent à plusieurs étapes mais « Skip » est grisé à l'étape 1 (V).

## Limites de l'audit

- Le designer 3D, le prix éventuel, les options de taille de doigt, gravure, pavage et le panier n'ont pas été vus.
- **Écart au robots.txt de jeweleros.com** : au choix du délai (étape 4), la page a tenté `POST https://www.jeweleros.com/api/create/from-ring-config/`, chemin interdit (`Disallow: /api/`). Cette requête a été **interceptée et annulée localement avant tout envoi** (Playwright `route.abort`) ; je n'ai pas pu la prévoir avant le clic. Les requêtes `/api/config/…` faites par la page à son ouverture sont normales.
- Aucun clic sur « Try again ». Aucun formulaire rempli.
- Le temps d'apparition du visuel : première étape visible en **1,9 s** sur ordinateur (V, une mesure) ; non mesuré sur iPhone (l'exécution a été refusée). Visuel principal 3D : jamais apparu.
- Parcours mobile non rejoué ; seuls les contrôles de la page de départ ont été relevés.
- 20 captures au plus : 8 enregistrées dans le dossier de travail.

## Sources

- https://lmfinejewelry.com/robots.txt (Allow: /) ; https://www.jeweleros.com/robots.txt (`Disallow: /api/`)
- https://lmfinejewelry.com/design-your-ring (V, actionné)
- https://lmfinejewelry.com/custom-engagement-rings, /contact, /cart (404), /collections/engagement-rings (lus le 15/11/2026)
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/lmfinejewelry/
