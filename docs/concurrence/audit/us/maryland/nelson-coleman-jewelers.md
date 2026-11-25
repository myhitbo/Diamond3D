# Audit : Nelson Coleman Jewelers

- **Site** : Nelson Coleman Jewelers (Towson, Maryland)
- **Adresse** : https://nelsoncoleman.com
- **Page de départ** : https://nelsoncoleman.com/apps/ringbuilder/settings/ (constructeur GemFind) ; repli sur https://nelsoncoleman.com/collections/engagement-rings et une fiche de bague
- **Date** : 15/11/2026 (audit refait le 25/11/2026 ; remplace le rapport « bloqué » du 24/11)
- **Appareils** : Chromium ordinateur (1366 × 900) et affichage iPhone 13
- **Statut** : **partiel**. Le site n'est pas bloqué (robots.txt lisible, AUTORISÉ, HTTP 200). Mais le constructeur GemFind et la liste des bagues ne s'affichent pas dans cette session : le contenu du constructeur n'a pas pu être parcouru.

## Contrôle de robots.txt (vérifié le 25/11)

- `robots.cjs` : AUTORISÉ pour la page d'accueil, `/apps/ringbuilder/…` (3 adresses), `/apps/diamondtools/`, `/collections/…`, `/products/…`, `/pages/…`, `/policies/…`, `/cart`. `api.jewelcloud.com` : pas de robots.txt (AUTORISÉ).
- INTERDIT : `/cart/add` (`Disallow: /cart/`). Le bouton « ADD TO CART » n'a donc **pas** été cliqué : panier interdit par robots.txt. Aucun bouton de paiement cliqué.
- Le robots.txt (curl, vérifié) annonce aussi un point d'accès pour agents (`/api/ucp/mcp`, `agents.md`) ; il n'a pas été utilisé.

## Parcours

| Étape | Options relevées | État |
|---|---|---|
| Accueil | Menus Jewelry, Estate Jewelry, Engagement & Bridal, Diamonds & Gems, Gifts, Services, About ; bandeau « Black Friday Diamond Deals », « Save 10% On Your First Order », « Free Shipping On All Orders Over $350 » ; 10 formes de diamant (Round, Cushion, Princess, Oval, Marquise, Pear, Asscher, Emerald, Radiant, Heart) liées à `/apps/diamondtools/?shape=…` | lu (V, 72 contrôles) |
| Constructeur de bague (`/apps/ringbuilder/settings/`, `/diamondtools`, `/diamondtools/diamondtype/navlabgrown`) | Trois entrées d'après l'exploration : monture, diamant naturel, diamant synthétique (V pour les adresses) | **page vide** : seuls l'en-tête et le pied de page s'affichent, texte constant (1 743 caractères) pendant 18 s, sur ordinateur et sur iPhone |
| Recherche de diamants (`/apps/diamondtools/?shape=round`) | forme préchoisie dans l'adresse | **page vide** (même cause) |
| Liste « Engagement Rings » | filtres et 6 rangées de cartes : uniquement des cases grises de chargement (squelettes) | **chargement sans fin** (10 s observées) |
| Fiche de bague | titre, SKU, « Available In Locations », prix, « ADD TO CART », « ASK A QUESTION », partage Facebook, X, Pinterest, suggestions | lu (V) ; ajout au panier non cliqué (interdit) |
| Panier (`/cart`) | « Your cart is currently empty », « Continue shopping », « Recently viewed » | lu (V, panier vide : récapitulatif, livraison, paiement non vus) |

## Contrôles vérifiés

Cause du blocage de l'outil (V, console du navigateur) : le script de l'application (`gemfind.org/static/js/main.js`, chargé en 200) lève l'erreur « N is not defined » ; une seconde erreur, « Failed to construct 'Request' … //nelsoncoleman.com/cdn/shop/t/5/assets/worker-min.js », est lancée par le thème. Aucune requête vers `api.jewelcloud.com` n'est partie. Que l'erreur vienne du site ou de l'environnement de la session (navigateur sans interface, mandataire, scripts de suivi bloqués) n'est pas établi (S).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Constructeur : choix monture / diamant naturel / diamant synthétique | onglets de l'application | rien ne s'affiche | non relevé | non testé : outil non rendu |
| Constructeur : métal, titre, forme, carat, origine, monture, corps, griffes, pavage, taille de doigt, gravure | options | non accessibles | non relevé | non testé : outil non rendu |
| Constructeur : filtres taille, couleur, pureté, prix, certificat | filtres | non accessibles | non relevé | non testé : outil non rendu |
| Vues photo, vidéo, 360°, 3D, sur la main, AR | modes de vue | aucun relevé sur le site rendu (aucun contrôle de ce genre dans les 54 contrôles de la fiche ni les 72 de l'accueil) | n/a | absent des pages lues |
| Formes de diamant (10 liens de l'accueil) | liens | mènent à `/apps/diamondtools/?shape=…` : page vide | non relevé | cassé dans cette session |
| Liste « Engagement Rings » (filtres, tri) | liste | squelettes gris, aucune bague affichée | non relevé | chargement sans fin |
| « SCHEDULE APPOINTMENT » | lien | `/pages/schedule-your-appointment` | n/a | lien vu, page non ouverte |
| « Contact Us » (fiche) | lien | ouvre un formulaire Tally en fenêtre (`#tally-open=…`) | n/a | non ouvert (formulaire) |
| « ASK A QUESTION » | bouton | question sur le produit | n/a | non ouvert (formulaire) |
| « ADD TO CART » | bouton | appelle `/cart/add` | $4 995,00 | **non testé : panier interdit par robots.txt** |
| Sélecteur de variante (fiche) | liste | une seule valeur : « Default Title - $4,995.00 USD » | fixe | vérifié |
| Partager (Facebook, X, Pinterest) | liens | liens de partage externes avec l'adresse de la fiche | n/a | liens vus, non suivis |
| « Financing Options » | lien | `/pages/financing-options` | n/a | page lue (V) |
| « Log In », « Search », « Shopping Cart » | liens | `/account` (INTERDIT par robots.txt, non ouvert), `/search`, `/cart` | n/a | cart lu ; account non ouvert |
| Abonnement e-mail « SUBSCRIBE » | formulaire | collecte d'une adresse | n/a | non rempli |
| Téléphones des 4 magasins | liens `tel:` | (410) 494-0080 Towson, (240) 931-3801 Frederick, (410) 822-2279 Easton, (304) 229-8080 Inwood | n/a | vus |
| Chat | widget `short.wishfluence.com` chargé | pas de bouton visible dans la liste des contrôles | n/a | non ouvert |
| Guide des tailles, comparer, enregistrer, WhatsApp, essayage à domicile | n/a | aucun contrôle de ce nom sur les pages lues | n/a | absent |

## Options disponibles

- **Catalogue de bagues** (V, `products.json` de la collection, 25/11) : 89 produits, de 375 à 29 950 $. Types : 29 bagues d'occasion en diamant, 16 en diamant de laboratoire (1 995 à 8 000 $, médiane de la liste triée autour de 2 695 à 4 645 $), 12 montures semi-serties, 12 bagues en pierres de couleur, 10 bagues en diamant, 4 d'occasion en pierres de couleur, 2 montures or et 1 platine, 1 diamant libre, 2 autres. 81 produits disponibles.
- **Fiches** : une seule variante « Default Title » ; pas de choix de métal, de carat ni de taille sur la fiche. Taille indiquée en texte (« Ring size: 6.75 ») : la bague est une pièce unique, pas une configuration.
- **Disponibilité** : « Available In Locations: Easton. Contact Us to Have Items Transferred to Your Closest Store for Viewing » (V) : l'essayage se fait en boutique.
- **Diamants** : 10 formes (accueil). Recherche par forme, certificats et filtres : non lus (outil vide).
- **Sur mesure** (`/pages/custom-jewelry-design`, V) : bagues de fiançailles, alliances, bijoux d'anniversaire, pierres de couleur, cadeaux personnalisés, redessin de bijoux de famille ; pierres et bijoux hérités intégrés ; rendez-vous « SCHEDULE NOW ». Étapes (inventaire du 15/11, V) : rendez-vous, dessin CAO avec rendu, maquette en cire 3D, fabrication.
- **Antwerp Experience** (V) : diamant choisi en personne dans les coffres d'Anvers par un gemmologue diplômé du GIA, sur rendez-vous.
- **Autres services** : estimation (`/pages/jewelry-appraisals`), réparation, rachat d'or, plan d'entretien Montage, événements (liens vus).

## Prix, délais, retours, garanties

- **Prix** : affichés en dollars sur chaque fiche, un prix par pièce, sans décomposition (V). Les prix du constructeur n'ont pas pu être lus.
- **Livraison** (V, `/policies/shipping-policy`) : standard 5 à 7 jours ouvrés, express 2 à 3 jours, nuit pour commande avant 14 h (heure de l'Est) ; traitement en 1 à 2 jours ouvrés, plus pour le sur mesure ou les mises à taille ; suivi par e-mail. Gratuit « on orders over $250 » dans cette politique, alors que le bandeau du site annonce « over $350 » (contradiction, V).
- **Délai du sur mesure** : non chiffré (« The timeline varies », exploration du 15/11, V).
- **Retours** (V, `/policies/refund-policy`) : 30 jours, article inchangé, non porté, avec étiquettes, emballage et reçu ; à demander par e-mail ou en boutique. **Exceptions : produits sur mesure (commandes spéciales, personnalisés) et articles mis à taille ou modifiés ; boucles d'oreilles.**
- **Financement** (V) : 6 mois ou 12 mois sans intérêt (intérêts rétroactifs en cas de non-paiement intégral), 36 mensualités à 9,99 % TAEG, carte American Gem Society (Wells Fargo).
- **Moyens de paiement** : non vus (panier vide, paiement non approché).
- **Garantie** : plan d'entretien « Montage Jewelry Care Plan » (page non lue). Garantie de la bague elle-même : non relevée.

## Confiance et service

- Maison depuis 1856, sixième génération ; 4 magasins (Towson, Frederick, Easton, Inwood en Virginie-Occidentale), numéros de licence affichés (V, pied de page).
- Mention « Powered by GemFind » en pied de page (V).
- Appartenance à l'American Gem Society suggérée par la carte de crédit AGS (V) ; adhésion non vérifiée (I).
- Consultation personnalisée (« Personal Shopper Appointments »), rendez-vous en ligne (V).
- Avis clients : aucun relevé sur les pages lues (V pour l'absence sur ces pages).
- Preuves de fabrication : textes seulement (CAO, cire, fonte) ; aucune photo ni vidéo d'atelier vue, pas de suivi de commande (V pour les pages lues).
- Langues : anglais seul ; devise : dollar (V).
- Certificats : GIA invoqué pour la sélection d'Anvers (V) ; libellé du synthétique : « Lab Diamond » / « lab-grown » dans les titres et descriptions (V).
- Mesure du visuel principal (V, Performance API, première peinture puis plus grand élément) : accueil et pages de politique, première peinture 400 à 800 ms ; fiche de bague, plus grand élément (l'image de la bague) à 820 ms sur ordinateur, et 1 320 ms avec l'affichage iPhone ; page du constructeur, aucun visuel de bague (vide). Mesures faites à travers un mandataire : ordre de grandeur seulement.

## Points forts à retenir pour JR Diamond

1. **Sur mesure et bijoux de famille sur le même site que le catalogue** : page dédiée qui cite le redessin des « heirlooms » et l'intégration de pierres existantes (preuve : `/pages/custom-jewelry-design`, lue le 25/11).
2. **Parcours sur mesure décrit en étapes (CAO, cire 3D, fabrication)** : proche de la promesse « ce que vous voyez existe », mais sans images (preuve : inventaire du 15/11 ; texte lu).
3. **Diamants choisis en personne à Anvers** : récit qui rend la pierre tangible (preuve : `/pages/antwerp-experience`). Équivalent possible : la pierre filmée de JR Diamond.
4. **Politique de retour claire, exception sur mesure explicite** : 30 jours, et exclusion écrite des pièces sur mesure et mises à taille (preuve : `/policies/refund-policy`). Repère pour la question à l'avocat israélien.
5. **Financement lisible** : trois formules, conditions d'intérêts rétroactifs affichées (preuve : `/pages/financing-options`).
6. **Prix en dollars sur chaque fiche, y compris les bagues en diamant de laboratoire (1 995 à 8 000 $)** (preuve : `products.json`) : repère pour la grille de JR Diamond.

## Défauts observés

- **Constructeur vide et liste de bagues en chargement sans fin** dans cette session : erreur JavaScript « N is not defined » dans `gemfind.org/static/js/main.js` (V, console, ordinateur et iPhone). L'outil phare de la boutique n'a rien montré.
- **Contradiction sur la livraison gratuite** : « over $350 » (bandeau) contre « over $250 » (politique) (V).
- **Fiche de bague sans option** : variante unique, pas de visuel 360° ni de vidéo relevé, pas de décomposition du prix (V).
- **« Ring size: 6.75 »** sur une bague d'occasion ou de stock : taille fixe, sans mise à taille annoncée sur la fiche (V).
- **Texte vide de gabarit** : section « Recently viewed » affichant « This section doesn't currently include any content. Add content to this section using the sidebar. » (V, fiche de bague).
- Plusieurs outils tiers de suivi (Hotjar, Clarity, Pinterest, Google) chargés dès l'ouverture : poids et pistage (V, requêtes).

## Limites de l'audit

- Constructeur GemFind : **non parcouru**. Aucune option de monture, de métal, de pierre, aucun prix de constructeur, aucun mode de vue (3D, 360°, AR) lu. Il se peut que l'outil fonctionne dans un navigateur ordinaire (S) ; la cause de l'erreur reste inconnue.
- Panier : seule la page vide a été lue. Récapitulatif, frais de livraison réels et moyens de paiement non vus ; « Add to cart » non cliqué (`/cart/add` INTERDIT).
- Formulaires (Tally, abonnement), chat, rendez-vous, `/account` : non ouverts (règles de l'audit ou robots.txt).
- Pages non lues : plan d'entretien Montage, estimation, avis (si présents ailleurs), garanties du bijou.
- Mesures de temps via mandataire, un seul passage chacune.
- Le rapport précédent (24/11, « bloqué ») est remplacé ; son blocage venait d'un 429 passager sur robots.txt, qui n'a plus eu lieu le 25/11.

## Sources

- https://nelsoncoleman.com/robots.txt (curl, 25/11) ; contrôle `robots.cjs` du 25/11.
- https://nelsoncoleman.com/ (controls.cjs, ordinateur, 72 contrôles).
- https://nelsoncoleman.com/apps/ringbuilder/settings/, `/diamondtools`, `/diamondtools/diamondtype/navlabgrown`, https://nelsoncoleman.com/apps/diamondtools/?shape=round (Chromium, ordinateur ; settings aussi en iPhone) : pages vides, erreurs console.
- https://nelsoncoleman.com/collections/engagement-rings (controls.cjs + capture : squelettes) et `/collections/engagement-rings/products.json?limit=250` (curl : 89 produits).
- https://nelsoncoleman.com/products/14k-white-gold-2-50ctw-cushion-lab-diamond-bridal-ring-set (controls.cjs, ordinateur et iPhone).
- https://nelsoncoleman.com/policies/refund-policy ; /policies/shipping-policy ; /pages/financing-options ; /pages/custom-jewelry-design ; /pages/antwerp-experience ; /cart (Chromium, lecture).
- `docs/concurrence/audit/us/maryland/INVENTAIRE.md` (exploration du 15/11, fiche du site).
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/nelson/` (hors dépôt).
