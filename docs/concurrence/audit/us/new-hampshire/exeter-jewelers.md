# Audit : Exeter Jewelers (Exeter, New Hampshire)

- **Site** : Exeter Jewelers, joaillier familial (depuis 1979 selon l'index ; « plus de quarante ans » sur la page « Our legacy »), 101 Water Street, Exeter NH.
- **Adresse** : https://exeterjewelersnh.com/ (Shopify)
- **Date** : 15/11/2026 (relu et audité le 25/11/2026 par le navigateur Chromium)
- **Appareils** : ordinateur (1366 x 850) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le site n'est pas bloqué : l'inventaire du 24/11 le marquait « bloqué » à cause d'un 403 sur robots.txt ; dans le navigateur, robots.txt (lu : `Allow: /`, `Disallow: /cart/`, `/collections/*sort_by*`, `/cart.js`, `/checkout`, `/account`) et toutes les pages se chargent en 200. Il n'y a **pas de configurateur** ni de constructeur de bague : le parcours est « boutique de pièces en stock + formulaire de demande sur mesure ». Le bouton d'ajout au panier n'a pas été actionné (voir Limites).

## Parcours

| Étape | Options observées | Source |
|---|---|---|
| 1. Accueil | Menu : Shop, Custom Design, Diamond Search, Financing, About Us, Contact ; recherche, compte, panier ; deux solitaires synthétiques en vedette ; lien « View the full collection » | [V] https://exeterjewelersnh.com/ |
| 2. Boutique (265 articles) | Filtres : disponibilité, prix, pierre, métal, forme, catégorie ; tri ; grille 2 densités ; pagination par défilement | [V] /collections/all |
| 3. Fiche produit | Photos zoomables, quantité, « Add to cart », « More payment options » ; aucune option de métal, de taille ni de carat | [V] fiche solitaire 3,08 ct |
| 4. Sur mesure | Page processus en 3 étapes, puis formulaire de demande (9 questions) | [V] /pages/custom-design-inquiry, /pages/custom-design-form |
| 5. Panier | Page /cart lue vide (voir Limites) | [V] /cart |
| 6. « Diamond Search » | **Page vide** : aucun outil de recherche de diamants, seulement le bloc de contact | [V] /pages/explore-diamonds-fine-jewelry |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu Shop | lien | /collections/all, 265 articles | prix en liste | OK |
| Menu Custom Design | lien | page processus (Consultation, Design & Approval, Creation & Delivery) + « Start your design » | aucun | OK |
| Menu Diamond Search | lien | page sans contenu : seul un bandeau « Questions? » et « Contact us » s'affiche (capture) | aucun | **défaut** (outil absent ou cassé) |
| Menu Financing | lien | texte Jewelers Reserve + layaway en boutique ; bouton « Apply today » vers c.sbt.li/ehF (non ouvert) | aucun | OK (lien externe non suivi) |
| Menu About Us / Contact | liens | histoire (Mario Ponte et sa fille Alia, membre Jewelers of America) ; coordonnées | aucun | OK |
| Bandeau « New jewelry added daily… Contact us » | lien | /pages/contact | aucun | OK |
| Recherche (icône) | bouton | recherche prédictive ; /search?q=engagement : 142 résultats avec les mêmes filtres | aucun | OK |
| Compte (icône) | bouton | non testé : /account interdit par robots.txt | n/a | non testé |
| Panier (icône) | bouton | tiroir « Your cart is empty », bouton « Continue shopping », suggestions « You may also like » | aucun | OK |
| Filtre Disponibilité | case | In stock / Out of stock | aucun | OK (options lues) |
| Filtre Prix | 2 champs | bas / haut, plafond affiché 19 950 $ | aucun | OK (options lues, non saisi) |
| Filtre Gemstone type | case | Diamond, Emerald | aucun | OK (lu) |
| Filtre Jewelry material | case | 14k White gold, 14k Yellow Gold, Diamond Metal, Platinum, Rose gold (6 cases dont une sans libellé net) | aucun | OK (lu) |
| Filtre Stone shape | case | Elongated Cushion, Marquise, Oval, Pear, Princess Cut, Round | aucun | OK (lu) |
| Filtre Category | case | Anklets, Bracelets, Earrings, Engagement Rings, Necklaces, Pendants, Rings, Wedding Bands ; « Engagement Rings » : 48 articles, « Clear all » rétablit la liste | aucun | OK, mais voir Défauts (tri) |
| Filtre « More » | bouton | tags : Lab Grown Diamond, Mother of Pearl, Natural Diamond (lus dans le formulaire) | aucun | OK (lu) |
| Tri (Sort) | liste | 9 critères : Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date | aucun | non testé : /collections/*sort_by* interdit par robots.txt |
| Grille (Default / Zoom out ; mobile Single / Default) | radio | change la densité des vignettes | aucun | non testé séparément (lu) |
| Vignette produit | lien | fiche produit avec `?variant=…` | prix affiché | OK |
| Zoom media 1 à 4 | bouton | ouvre une boîte de dialogue plein écran avec « Close » et 4 boutons « Scroll to… » ; 4 photos, 0 vidéo, 0 vue 3D, 0 360° | aucun | OK |
| Quantité − / champ / + | boutons | « + » passe de 1 à 2 ; « − » revient à 1 | non observé (panier non touché) | OK |
| Add to cart | bouton | **non cliqué** : appelle /cart/add, INTERDIT par robots.txt | n/a | non testé (panier interdit) |
| More payment options | lien | non cliqué (paiement) | n/a | non testé (règle d'audit) |
| Start your design | lien | /pages/custom-design-form : formulaire de 9 questions + nom, téléphone, e-mail ; « Submit inquiry » | aucun | formulaire lu, non rempli |
| Financing > Apply today | lien externe | c.sbt.li/ehF (non ouvert) | aucun | non testé (autre domaine) |
| Téléphone (603) 772-4511 | lien tel: | ouvre l'appel ; sur la page Financing et Returns, le lien est mal formé (`tel:%20+16037724511`, `tel:+6037724511`) | aucun | défaut mineur |
| E-mail, itinéraire Google Maps, Instagram | liens | mailto, google.com/maps, instagram.com/exeter_jewelers | aucun | OK (non suivis) |
| Pied de page : Returns & Exchanges, Shipping, Terms, Legal, Privacy | liens | pages de politique, lues pour Returns et Shipping | aucun | OK |
| Chat, WhatsApp, comparer, enregistrer, partager, guide des tailles, rendez-vous en ligne, essayage à domicile | n/a | **absents** de toutes les pages vues | n/a | absents |

## Options disponibles

- **Métaux** (filtre) : or blanc 14 k, or jaune 14 k, or rose, platine, « Diamond Metal » ; titres vus dans les noms : 14 k blanc, jaune, rose, bicolore.
- **Pierres** (filtre) : diamant, émeraude. Formes : coussin allongé, marquise, ovale, poire, princesse, ronde ; les titres citent aussi radiant, émeraude, « Moval ».
- **Origine** : balises « Lab Grown Diamond » et « Natural Diamond » ; chaque titre de bague dit « Genuine Lab Grown » ou « Natural ».
- **Catégories** : anklets, bracelets, boucles d'oreilles, bagues de fiançailles (48), colliers, pendentifs, bagues, alliances.
- **Fiche produit** : aucune option (pas de métal, de taille, de carat ni de gravure à choisir) ; la taille de doigt se note « in the comments section at checkout » ; la bague est vendue en taille 7, « reasonably sized » (fiche 3,08 ct).
- **Livraison** : Insured Express (1 à 2 jours ouvrés, tous les envois), Insured Standard (1 à 5 jours, commandes de 500 $ ou moins), retrait gratuit à Exeter.
- **Sur mesure** : demande par formulaire ; consultation en boutique ou à distance par téléphone ou visio.

## Prix, délais, retours, garanties

- **Prix** [V] : affichés en dollars, un prix fixe par pièce finie (ex. solitaire 3,08 ct rond, or blanc 14 k, IGI, E VS1 : 2 895 $ ; radiant 2,89 ct bicolore : 3 495 $ ; bague 2,05 ct « Moval » : 3 595 $ ; bande 17 pierres : 1 295 $ ; plafond de la boutique 19 950 $). Aucune décomposition (métal, pierre, main-d'oeuvre). Aucune taxe sur les ventes au New Hampshire d'après l'inventaire du dépôt (non revérifié ici).
- **Sur mesure** [V] : pas de prix en ligne ; budget demandé dans le formulaire ; acompte de 50 % non remboursable pour commencer (couvre dessin, rendus CAO, cires, pierres et matériaux) ; solde à la fin ; si le solde n'est pas payé 60 jours après l'avis de fin, la maison peut garder les paiements et revendre la pièce. Source : /pages/returns-exchanges.
- **Délai** [V] : sur mesure « most custom pieces are completed within 2-4 weeks » ; en stock expédié sous 1 à 3 jours ouvrés ; mise à taille, gravure : jusqu'à 7 jours ouvrés avant l'envoi. Réponse au formulaire sous 1 à 3 jours ouvrés. Les lundis, dimanches et jours fériés ne comptent pas.
- **Retours** [V] : « all sales are final, and Exeter Jewelers does not offer refunds » ; échange ou avoir possible à la discrétion de la maison, sous 14 jours, article non porté, non modifié. Sont exclus : sur mesure, personnalisé, gravé, mis à taille, réparé, commande spéciale. Retour à la charge du client (assuré pour sa valeur). Alerte de dommage à signaler sous 48 h.
- **Garantie** [V] : 60 jours contre les défauts de fabrication sur le neuf ; ne couvre pas l'usure normale, les pierres perdues, ni une bague retouchée ailleurs ; antiquités et vintage vendus tels quels. Contrôle gratuit conseillé tous les six mois.
- **Financement** [V] : programme Jewelers Reserve (décision du prêteur) ; layaway en boutique seulement (acompte 20 % non remboursable, 50 $ par mois minimum, 12 mois au plus), exclu pour le sur mesure.
- **Paiement** : moyens non affichés (panier non atteint avec un article) ; « More payment options » indique un paiement accéléré Shopify [I, non cliqué].
- **Libellé du synthétique** [V] : « Lab Grown » dans tous les titres et le filtre, plus « IGI Certified » ; aucune mention de « synthétique » ; naturel marqué « Genuine Natural ».
- **Certificats** [V] : IGI cité dans les titres des solitaires synthétiques ; la fiche 3,08 ct donne couleur E, clarté VS1, taille excellente, mais ne montre ni certificat à ouvrir ni numéro de rapport.

## Confiance et service

- [V] Adresse physique, horaires (mardi à vendredi 11 h à 16 h, samedi 11 h à 15 h, fermé dimanche et lundi), téléphone, e-mail, Instagram.
- [V] Mario Ponte, propriétaire et bijoutier, avec sa fille Alia ; « Jewelers of America » ; « CAD designers » ; photographies de Audra Lynn Photography et Luxe Life Productions.
- [V] Process sur mesure : rendus 3D, cire « when needed », « 3D renderings » à approuver avant production.
- [V] Expédition assurée, signature d'un adulte de 21 ans et plus, emballage neutre, pas de boîte postale.
- [V] Aucun avis client, note, Trustpilot, Google Reviews ni témoignage sur les pages lues.
- [V] Aucune photo ni vidéo d'atelier, aucun suivi de commande par étapes, aucun exemple de réalisation sur mesure sur la page « Custom design ».
- [V] Une seule langue (anglais), une seule devise (dollar).

## Points forts à retenir pour JR Diamond

1. **Texte de retour très explicite sur le sur mesure** : acompte 50 % non remboursable, annulation avant approbation du dessin, commande ferme après accord écrit, délai de 60 jours sur le solde. Utile pour le dossier de l'avocat israélien (modèle de clauses ; non juridiquement validé). Preuve : /pages/returns-exchanges.
2. **Processus sur mesure lisible en 4 étapes avec un délai** (1 à 3 jours de réponse, consultation, rendus 3D, 2 à 4 semaines). Compatible avec « 14 jours ouvrés » de JR Diamond. Preuve : /pages/custom-design-form.
3. **Description de pièce précise sur les solitaires** : couleur, clarté, taille, poids total en grammes et note sur la mise à taille. Preuve : fiche 3,08 ct.
4. **Filtres de la boutique par forme, métal, catégorie et origine** avec compteur et « Clear all ». Preuve : /collections/all.
5. **Layaway et financement tiers** pour lisser le prix. Preuve : /pages/financing-layaway. À examiner pour Israël si l'atelier veut proposer des paiements échelonnés.
6. **Garantie de 60 jours et contrôle gratuit semestriel** annoncés. Preuve : /pages/returns-exchanges.

## Défauts observés

- **« Diamond Search » mène à une page vide** : aucune recherche de pierres, alors que le menu la met au même niveau que Shop (capture, texte de la page).
- **Aucun configurateur** : le sur mesure passe par un formulaire de contact, sans prix, sans visuel avant plusieurs jours de contact.
- **Fiches sans options** : pas de choix du métal, de la taille ni de la gravure ; la taille se note dans les « commentaires » à la caisse, ce qui peut entraîner des erreurs.
- **Pas de photo de preuve** : 4 photos par pièce, pas de vidéo, pas de rotation, pas de lien vers le certificat IGI.
- **Retours quasi inexistants** : pas de remboursement, 14 jours d'échange seulement à la discrétion du vendeur.
- **Prix de départ des bagues de fiançailles non ordonné** : les produits s'affichent par défaut sans tri par prix lisible (le tri est interdit à l'audit).
- **Liens téléphone mal formés** sur les pages Financing (`tel:%20+16037724511`) et Returns (`tel:+6037724511`).
- **Orthographe** : un titre de produit contient « Nartural » (« 7 Stone 1.22 Cttw Genuine Nartural Radiant Cut Diamond Band »).
- **Fautes de cohérence** : le nom « Genuine » sur des diamants de laboratoire (« Genuine Lab Grown ») peut brouiller la distinction naturel/synthétique ; en Israël il faudra la formulation validée (voir CLAUDE.md, libellés légaux).
- **Écart d'inventaire** : le site a été classé « bloqué » dans l'inventaire du 24/11, ce qui était à tort (le 403 venait de la lecture directe de robots.txt, non du site).

## Limites de l'audit

- **Panier** : le bouton « Add to cart » appelle /cart/add, interdit par robots.txt (`Disallow: /cart/`). La page /cart a été lue, vide ; le récapitulatif, les frais de livraison au panier et les moyens de paiement n'ont pas pu être vus. Les frais de livraison sont décrits comme « displayed at checkout », selon la valeur de la commande [V, texte de la politique].
- **Tri** : /collections/*sort_by* est interdit. Le tri n'a pas été activé. **Écart à noter** : le clic sur le filtre « Engagement Rings » a fait ajouter par le thème le paramètre `sort_by=title-ascending` à l'adresse, requête interdite par robots.txt (une seule requête, non voulue, sans autre clic de ce type ensuite).
- **Filtres** : seuls « Category > Engagement Rings » et « Clear all » ont été actionnés ; forme, métal, pierre, disponibilité et prix ont été lus mais non appliqués (même risque d'adresse de tri).
- **Non faits** : lien « Apply today » (domaine c.sbt.li), « More payment options » (paiement), compte (robots.txt), formulaire sur mesure (aucun envoi), chat (absent). Le menu mobile n'a pas été ouvert : le relevé iPhone ne liste pas les liens de menu, ce qui laisse supposer un tiroir [I].
- **Mesure du visuel principal** [V, script, mesuré depuis l'ouverture de la connexion, réseau de l'agent] : fiche produit, première image visible en 756 ms sur ordinateur (image nette 815 ms) et 551 ms (588 ms) en affichage iPhone. Page d'accueil chargée en environ 4 s pour les pages de contenu (3,0 à 4,5 s mesurés sur les pages internes).
- **Une seule fiche produit** a été ouverte ; aucune bague de fiançailles sertie d'un diamant naturel n'a été lue en détail. Le code postal, la TVA et les frais ne sont pas calculés.
- Aucun chiffre de taxe, d'avis ou de volume de vente n'est avancé sans source.

## Sources

- https://exeterjewelersnh.com/ (accueil, 29 contrôles ordinateur, 23 iPhone)
- https://exeterjewelersnh.com/robots.txt
- https://exeterjewelersnh.com/collections/all ; https://exeterjewelersnh.com/search?q=engagement
- https://exeterjewelersnh.com/products/14k-white-gold-genuine-igi-certified-lab-grown-3-08-carat-round-brilliant-cut-diamond-solitaire?variant=48297264971932
- https://exeterjewelersnh.com/pages/custom-design-inquiry ; https://exeterjewelersnh.com/pages/custom-design-form
- https://exeterjewelersnh.com/pages/explore-diamonds-fine-jewelry
- https://exeterjewelersnh.com/pages/financing-layaway ; https://exeterjewelersnh.com/pages/returns-exchanges ; https://exeterjewelersnh.com/policies/shipping-policy
- https://exeterjewelersnh.com/pages/our-legacy ; https://exeterjewelersnh.com/cart
- Inventaire du dépôt : `docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md` (fiche 8)
- Captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/exeter-jewelers/`
