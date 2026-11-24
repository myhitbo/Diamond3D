# Siebke Hoyt Jewelers (Cedar Rapids, Iowa)

- **Site** : https://www.siebkehoyt.com/ ; page de départ : https://www.siebkehoyt.com/pages/custom-ring-builder
- **Date** : 15/11/2026 (audit réalisé le 24/11/2026). **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13.
- **Statut** : **partiel**. Le constructeur 3D ne s'affiche pas dans notre navigateur : la zone centrale de la page reste vide. Aucun parcours de configuration n'a pu être actionné ; l'audit repose sur les pages lisibles. Ce n'est pas un blocage anti-robot (aucun 403, aucun captcha : voir Limites).
- Légende : **V** vérifié, **I** inféré, **S** supposé.

## Parcours

| Étape | Options |
|---|---|
| `/pages/custom-ring-builder` (V) | Zone d'outil **vide** sur ordinateur et iPhone, 0 `canvas`, 0 `iframe` après 20 s ; sous la zone vide : encart « Don't See What You're Looking For? » + « BOOK AN APPOINTMENT » |
| Menu « DESIGN YOUR RING » (V) | Mène à la même page ; le sous-menu « Ring Builder / Ring Mountings » pointe vers `/apps/ringbuilder/settings` (404 à curl, signalé par l'inventaire) |
| `/pages/custom-jewelry` « SIEBKE HOYT BESPOKE » (V, lecture par un outil de cache) | Texte « Work with one of Siebke Hoyt's Design Specialists… hand selecting a diamond or designing around an heirloom » ; bouton « START YOUR DESIGN », « MAKE AN APPOINTMENT » |
| `/collections/lab-grown` (V) | Page marquée « NOTHING IN THIS COLLECTION RIGHT NOW » + textes de référencement + 2 boutons (rendez-vous, contact) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Chargement de la page du constructeur | page | HTTP 200 ; un script `jeweleros.com/…/partner_config.js` (org-id fourni) est présent dans le code, mais aucun outil ne monte | — | Échec d'affichage (V) |
| Menu : BRIDAL, FINE JEWELRY, WATCHES, DESIGNER ACCESSORIES, DESIGN YOUR RING, SALE | menu | 6 entrées, 4 avec sous-menus (boutons) | — | Présents (V), non explorés |
| Recherche « Search our store » | champ | champ visible dans le panneau de recherche | — | Non utilisé (adresse de recherche : interdite en pratique par prudence) |
| Compte, panier (icônes) | liens | présents | — | Non ouverts |
| « Call Us (319) 363-2003 » | lien tel | ouvre un appel | — | Lu (V) |
| « Book an Appointment » (×4) | liens | mènent à `/pages/book-an-appointment` | — | Lien lu (V), page non ouverte |
| Inscription e-mail | champ + bouton | « Sign up and save » | — | Non rempli |
| Pied de page : Our History, Meet the Staff, Custom Design, Our Store (visite virtuelle), Careers, Privacy, Terms | liens | 7 liens | — | Lus (V), non suivis |
| Réseaux : Instagram, Facebook, YouTube, Twitter, Pinterest | liens | externes | — | Lus (V) |
| Logos CBG, JVC, Jewelers of America, Preferred Jewelers, The Knot, Engagement 101, Economic Alliance | liens externes | 7 | — | Lus (V) |
| Moyens de paiement affichés au pied de page | icônes | Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, Shop Pay, Visa | — | Lus (V) |
| Contrôles de l'outil 3D (forme, métal, carat, taille, gravure, vues) | — | **non testés : l'outil ne s'affiche pas** | — | Non testé |
| Panier, livraison, délai, paiement | — | non testés : aucun produit à ajouter depuis un constructeur vide, aucune collection avec stock | — | Non testé |

Contrôles recensés par `controls.cjs` : 42 sur la page du constructeur (ordinateur), 44 sur `/collections/lab-grown`.

## Options disponibles

- **Constructeur** : aucune option observable (outil non rendu).
- **Parcours de substitution** : prise de rendez-vous en boutique, contact, conception sur mesure avec un « Design Specialist » (V, texte de `/pages/custom-jewelry`).
- **Collection synthétique** : « Lab grown engagement rings … start at just $999 » (V, texte de la page ; page affichant par ailleurs « Nothing in this collection right now »).
- **Langues / devises** : anglais, dollar (V).

## Prix, délais, retours, garanties

- **Prix** : aucun prix affichable par le constructeur. Seule mention : bagues synthétiques « à partir de 999 $ » (V, texte de référencement), sans produit visible.
- **Retours** : bandeau « FREE 10-DAY RETURNS - Shop with Confidence » (V, page rendue). Détail, exception du sur-mesure : non lu.
- **Livraison** : lecture par outil de cache, antérieure au 15/11 : « FREE Shipping! Purchases over $100 - FREE Expedited Shipping for purchases over $1000 » (I : bandeau absent du rendu direct du 24/11).
- **Délai de fabrication, garantie, certificats, libellé du synthétique** : « lab grown » seulement ; reste non trouvé sur les pages lues.

## Confiance et service

- Boutique : 4800 1st Ave NE, Cedar Rapids ; lundi-jeudi 10 h-18 h, vendredi-samedi 10 h-17 h, dimanche 12 h-16 h (V, pied de page).
- Appartenances affichées : Continental Buying Group, Jewelers Vigilance Committee, Jewelers of America, Preferred Jewelers International (V).
- Section « What our customers say » dans `/pages/custom-jewelry` : espace de formulaire non rendu dans la lecture (V : jeton `{formbuilder:…}` visible, donc avis non affichés).
- Aucune preuve de fabrication (photo ou vidéo d'atelier) ni suivi de commande vus.
- Visite virtuelle « Our Store » (lien `/pages/virtual-tour`, V, non ouvert).

## Points forts à retenir pour JR Diamond

1. **Bandeau permanent « Free 10-day returns »** en tête de chaque page (preuve : texte lu sur le rendu). Rassure d'emblée ; à rapprocher de la politique de JR Diamond sur le sur-mesure, qui reste à fixer.
2. **Mise en avant du rendez-vous** comme repli : un encart « Don't see what you're looking for? » avec bouton à chaque page vide (preuve : captures `www_siebkehoyt_com_pages_custom_ring_builder.jpg` et lab-grown). Un site ne doit jamais présenter un écran vide sans issue.
3. **Moyens de paiement visibles dès le pied de page** (8 logos dont Apple Pay, Google Pay, Shop Pay).
4. **Concurrent gagnant surtout par la boutique** (horaires, visite virtuelle, appartenances professionnelles), pas par le configurateur sur cette session.

## Défauts observés

- **Le constructeur ne s'affiche pas** : zone centrale vide, sur ordinateur et iPhone (V, deux captures) ; cause non établie (I : module `jeweleros.com` bloqué ou refusant l'affichage dans cet environnement ; une panne du site n'est pas exclue). Sur les six sites de l'inventaire qui chargent ce module, Alloy l'affichait ; ici non.
- La collection synthétique est **vide** alors que la page annonce « start at just $999 » (V).
- Menu « Ring Builder / Ring Mountings » → `/apps/ringbuilder/settings` répond 404 à curl (V, fourni par l'inventaire).
- Jeton `{formbuilder:Mzk0Mg==}` visible dans la page de design sur mesure : bloc d'avis qui n'est pas rendu (V).

## Limites de l'audit

- Aucune option, aucun prix, aucun panier, aucune mesure de temps de visuel principal (pas de visuel principal : 0 `canvas`, 0 `iframe` en 20 s).
- Pas de nouvel essai avec un autre navigateur ou une autre identité : règle de non-contournement. L'absence d'affichage n'est pas un blocage anti-robot, aucun refus du serveur n'a été vu.
- `robots.txt` : pages lues autorisées (`Allow: /`). Les pages de recherche, compte et panier n'ont pas été ouvertes.
- Les textes de `/pages/custom-jewelry` viennent d'un outil de lecture à cache (dates d'acquisition 12/11/2026 et 16/09/2026) : fiabilité inférée.
- Le tableau des contrôles ne comprend que ceux de la page, du menu et du pied de page.

## Sources

- https://www.siebkehoyt.com/pages/custom-ring-builder (V, 24/11/2026)
- https://www.siebkehoyt.com/collections/lab-grown (V, 24/11/2026)
- https://www.siebkehoyt.com/pages/custom-jewelry (V, outil de lecture à cache)
- `docs/concurrence/audit/us/iowa/INVENTAIRE.md` (V, lecture antérieure)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/siebke/` (hors dépôt)
